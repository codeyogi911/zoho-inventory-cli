import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { mockApi } from "./_mock-server.mjs";
import { runJson } from "./_helpers.mjs";

const ENV = { ZOHO_INVENTORY_API_KEY: "shh-secret-token", ZOHO_INVENTORY_ORG_ID: "60030298567" };

function mkTmp() {
  const dir = mkdtempSync(join(tmpdir(), "zoho-inventory-cli-test-"));
  return { dir, cleanup: () => rmSync(dir, { recursive: true, force: true }) };
}

function readCreds(dir) {
  const p = join(dir, "credentials.json");
  if (!existsSync(p)) return null;
  return JSON.parse(readFileSync(p, "utf8"));
}

function writeCreds(dir, obj) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "credentials.json"), JSON.stringify(obj));
}

test("Authorization: Zoho-oauthtoken header is sent when ZOHO_INVENTORY_API_KEY is set", async () => {
  const server = await mockApi({ "GET /items": { status: 200, body: { items: [], page_context: { has_more_page: false } } } });
  try {
    await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(server.requests[0].headers.authorization, "Zoho-oauthtoken shh-secret-token");
  } finally { await server.close(); }
});

test("401 -> auth_invalid", async () => {
  const server = await mockApi({ "GET /items": { status: 401, body: { code: 57, message: "Invalid token" } } });
  try {
    const r = await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 1);
    assert.equal(r.errJson.code, "auth_invalid");
    assert.equal(r.errJson.retryable, false);
  } finally { await server.close(); }
});

test("403 -> forbidden", async () => {
  const server = await mockApi({ "GET /items": { status: 403, body: { code: 4090, message: "Insufficient scope" } } });
  try {
    const r = await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 1);
    assert.equal(r.errJson.code, "forbidden");
  } finally { await server.close(); }
});

test("login --status reports oauth-refresh scheme and DC", async () => {
  const r = await runJson(["login", "--status"], { env: { ...ENV, ZOHO_INVENTORY_DC: "in" } });
  assert.equal(r.exitCode, 0, r.stderr);
  assert.equal(r.json.authenticated, true);
  assert.equal(r.json.fromEnv, true);
  assert.equal(r.json.scheme, "oauth-refresh");
  assert.equal(r.json.dc, "in");
  assert.equal(r.json.orgId, "60030298567");
});

test("oauth-refresh: env access token wins over cached token", async () => {
  const tmp = mkTmp();
  writeCreds(tmp.dir, { accessToken: "should-not-be-used", expiresAt: Date.now() + 60000, savedAt: "x" });
  const api = await mockApi({ "GET /items": { status: 200, body: { items: [], page_context: { has_more_page: false } } } });
  try {
    await runJson(["items", "list"], {
      env: {
        ZOHO_INVENTORY_API_KEY: "env-access-wins",
        ZOHO_INVENTORY_BASE_URL: api.url,
        __ZOHO_INVENTORY_DEV_CONFIG_DIR: tmp.dir,
      },
    });
    assert.equal(api.requests[0].headers.authorization, "Zoho-oauthtoken env-access-wins");
  } finally { await api.close(); tmp.cleanup(); }
});

test("oauth-refresh: env-trio mints an access token and stores refreshTokenHash", async () => {
  const tmp = mkTmp();
  const apiServer = await mockApi({ "GET /items": { status: 200, body: { items: [], page_context: { has_more_page: false } } } });
  const accountsServer = await mockApi({
    "POST /oauth/v2/token": { status: 200, body: { access_token: "minted-from-refresh-token-abc123", expires_in: 3600 } },
  });
  try {
    const r = await runJson(["items", "list"], {
      env: {
        ZOHO_INVENTORY_REFRESH_TOKEN: "1000.refreshxyz",
        ZOHO_INVENTORY_CLIENT_ID: "1000.client",
        ZOHO_INVENTORY_CLIENT_SECRET: "secret",
        ZOHO_INVENTORY_ORG_ID: "60030298567",
        ZOHO_INVENTORY_BASE_URL: apiServer.url,
        ZOHO_INVENTORY_ACCOUNTS_URL: accountsServer.url,
        __ZOHO_INVENTORY_DEV_CONFIG_DIR: tmp.dir,
      },
    });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(accountsServer.requests.length, 1);
    assert.equal(accountsServer.requests[0].path, "/oauth/v2/token");
    assert.equal(accountsServer.requests[0].query.grant_type, "refresh_token");
    assert.equal(accountsServer.requests[0].query.refresh_token, "1000.refreshxyz");
    assert.equal(apiServer.requests[0].headers.authorization, "Zoho-oauthtoken minted-from-refresh-token-abc123");
    assert.equal(typeof readCreds(tmp.dir).refreshTokenHash, "string");
  } finally {
    await apiServer.close();
    await accountsServer.close();
    tmp.cleanup();
  }
});

test("oauth-refresh: cache reused only if refreshTokenHash matches current source", async () => {
  const tmp = mkTmp();
  writeCreds(tmp.dir, {
    refreshToken: "old-account-refresh",
    clientId: "env-client",
    clientSecret: "env-secret",
    accessToken: "stale-from-account-A",
    expiresAt: Date.now() + 60_000,
    refreshTokenHash: "deadbeefdeadbeef",
    savedAt: "x",
  });
  let refreshHits = 0;
  const oauth = await mockApi({
    "POST /oauth/token": () => {
      refreshHits++;
      return { status: 200, body: { access_token: "fresh-for-account-B", expires_in: 3600 } };
    },
  });
  const api = await mockApi({ "GET /items": { status: 200, body: { items: [], page_context: { has_more_page: false } } } });
  try {
    await runJson(["items", "list"], {
      env: {
        ZOHO_INVENTORY_REFRESH_TOKEN: "new-account-refresh",
        ZOHO_INVENTORY_CLIENT_ID: "env-client",
        ZOHO_INVENTORY_CLIENT_SECRET: "env-secret",
        ZOHO_INVENTORY_TOKEN_URL: `${oauth.url}/oauth/token`,
        ZOHO_INVENTORY_BASE_URL: api.url,
        __ZOHO_INVENTORY_DEV_CONFIG_DIR: tmp.dir,
      },
    });
    assert.equal(refreshHits, 1);
    assert.equal(api.requests[0].headers.authorization, "Zoho-oauthtoken fresh-for-account-B");
  } finally { await oauth.close(); await api.close(); tmp.cleanup(); }
});

test("oauth-refresh: NO_CACHE=1 skips writing credentials.json", async () => {
  const tmp = mkTmp();
  const oauth = await mockApi({
    "POST /oauth/token": { status: 200, body: { access_token: "no-persist-me", expires_in: 3600 } },
  });
  const api = await mockApi({ "GET /items": { status: 200, body: { items: [], page_context: { has_more_page: false } } } });
  try {
    await runJson(["items", "list"], {
      env: {
        ZOHO_INVENTORY_REFRESH_TOKEN: "r",
        ZOHO_INVENTORY_CLIENT_ID: "c",
        ZOHO_INVENTORY_CLIENT_SECRET: "s",
        ZOHO_INVENTORY_NO_CACHE: "1",
        ZOHO_INVENTORY_TOKEN_URL: `${oauth.url}/oauth/token`,
        ZOHO_INVENTORY_BASE_URL: api.url,
        __ZOHO_INVENTORY_DEV_CONFIG_DIR: tmp.dir,
      },
    });
    assert.equal(api.requests[0].headers.authorization, "Zoho-oauthtoken no-persist-me");
    assert.equal(readCreds(tmp.dir), null);
  } finally { await oauth.close(); await api.close(); tmp.cleanup(); }
});

test("oauth-refresh: cached token evicted server-side self-heals (drop cache, refresh, retry once)", async () => {
  const tmp = mkTmp();
  const { hashRefreshToken } = await import("../lib/config.mjs");
  writeCreds(tmp.dir, {
    refreshToken: "1000.refreshxyz", clientId: "1000.client", clientSecret: "secret",
    accessToken: "stale-evicted-token", expiresAt: Date.now() + 60000,
    refreshTokenHash: hashRefreshToken("1000.refreshxyz"), savedAt: "x",
  });
  const apiServer = await mockApi({
    "GET /items": (req) => req.headers.authorization === "Zoho-oauthtoken stale-evicted-token"
      ? { status: 401, body: { message: "You are not authorized to perform this operation" } }
      : { status: 200, body: { items: [], page_context: { has_more_page: false } } },
  });
  const accountsServer = await mockApi({
    "POST /oauth/v2/token": { status: 200, body: { access_token: "fresh-after-eviction", expires_in: 3600 } },
  });
  try {
    const r = await runJson(["items", "list"], {
      env: {
        ZOHO_INVENTORY_REFRESH_TOKEN: "1000.refreshxyz",
        ZOHO_INVENTORY_CLIENT_ID: "1000.client",
        ZOHO_INVENTORY_CLIENT_SECRET: "secret",
        ZOHO_INVENTORY_ORG_ID: "60030298567",
        ZOHO_INVENTORY_BASE_URL: apiServer.url,
        ZOHO_INVENTORY_ACCOUNTS_URL: accountsServer.url,
        __ZOHO_INVENTORY_DEV_CONFIG_DIR: tmp.dir,
      },
    });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(apiServer.requests.length, 2, "one failed attempt + one replay");
    assert.equal(apiServer.requests[0].headers.authorization, "Zoho-oauthtoken stale-evicted-token");
    assert.equal(apiServer.requests[1].headers.authorization, "Zoho-oauthtoken fresh-after-eviction");
    assert.equal(accountsServer.requests.length, 1, "exactly one forced refresh");
  } finally {
    await apiServer.close();
    await accountsServer.close();
    tmp.cleanup();
  }
});

// Auth-specific tests: Zoho-oauthtoken header wiring, login --status,
// 401/403 mapping, OAuth refresh flow against a mock accounts endpoint.
import test from "node:test";
import assert from "node:assert/strict";
import { mockApi } from "./_mock-server.mjs";
import { run, runJson } from "./_helpers.mjs";

const ENV = { ZOHO_INVENTORY_API_KEY: "shh-secret-token", ZOHO_INVENTORY_ORG_ID: "60030298567" };

test("Authorization: Zoho-oauthtoken header is sent when ZOHO_INVENTORY_API_KEY is set", async () => {
  const server = await mockApi({ "GET /items": { status: 200, body: { items: [], page_context: { has_more_page: false } } } });
  try {
    await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(server.requests[0].headers.authorization, "Zoho-oauthtoken shh-secret-token");
  } finally { await server.close(); }
});

test("401 → auth_invalid", async () => {
  const server = await mockApi({ "GET /items": { status: 401, body: { code: 57, message: "Invalid token" } } });
  try {
    const r = await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 1);
    assert.equal(r.errJson.code, "auth_invalid");
    assert.equal(r.errJson.retryable, false);
  } finally { await server.close(); }
});

test("403 → forbidden", async () => {
  const server = await mockApi({ "GET /items": { status: 403, body: { code: 4090, message: "Insufficient scope" } } });
  try {
    const r = await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 1);
    assert.equal(r.errJson.code, "forbidden");
  } finally { await server.close(); }
});

test("login --status reports auth source and DC", async () => {
  const r = await runJson(["login", "--status"], { env: { ...ENV, ZOHO_INVENTORY_DC: "in" } });
  assert.equal(r.exitCode, 0, r.stderr);
  assert.equal(r.json.authenticated, true);
  assert.equal(r.json.fromEnv, true);
  assert.equal(r.json.scheme, "bearer");
  assert.equal(r.json.dc, "in");
  assert.equal(r.json.orgId, "60030298567");
});

test("OAuth refresh flow: env-trio mints an access token from the accounts mock", async () => {
  // Mock the API server.
  const apiServer = await mockApi({ "GET /items": { status: 200, body: { items: [], page_context: { has_more_page: false } } } });
  // Mock the accounts (token) server.
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
      },
    });
    assert.equal(r.exitCode, 0, r.stderr);
    // The accounts mock should have been called once.
    assert.equal(accountsServer.requests.length, 1);
    assert.equal(accountsServer.requests[0].path, "/oauth/v2/token");
    assert.equal(accountsServer.requests[0].query.grant_type, "refresh_token");
    assert.equal(accountsServer.requests[0].query.refresh_token, "1000.refreshxyz");
    // The API request should carry the freshly minted access token.
    assert.equal(apiServer.requests[0].headers.authorization, "Zoho-oauthtoken minted-from-refresh-token-abc123");
  } finally {
    await apiServer.close();
    await accountsServer.close();
  }
});

// Zoho OAuth: exchanges a refresh token for a short-lived access token,
// caches it on disk, and sets the `Authorization: Zoho-oauthtoken <token>`
// header on every request.
//
// Auth is "bearer" in `.clify.json` for gate compatibility, but the wire
// prefix is `Zoho-oauthtoken` — set by Zoho's docs, not interchangeable
// with the standard `Bearer` keyword. See knowledge/header-format.md.
import { credentialsPath, loadCredentials, saveCredentials } from "./config.mjs";
import { closeSync, mkdirSync, openSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SCHEME = "bearer";
const ENV_VAR = "ZOHO_INVENTORY_API_KEY";
const REFRESH_LOCK_PATH = `${credentialsPath()}.refresh.lock`;
const REFRESH_LOCK_WAIT_MS = 10_000;
const REFRESH_LOCK_STALE_MS = 30_000;

const ZOHO_ACCOUNTS_HOSTS = {
  com: "accounts.zoho.com",
  eu: "accounts.zoho.eu",
  in: "accounts.zoho.in",
  "com.au": "accounts.zoho.com.au",
  jp: "accounts.zoho.jp",
  ca: "accounts.zohocloud.ca",
  "com.cn": "accounts.zoho.com.cn",
  sa: "accounts.zoho.sa",
};

function accountsBase() {
  if (process.env.ZOHO_INVENTORY_ACCOUNTS_URL) return process.env.ZOHO_INVENTORY_ACCOUNTS_URL.replace(/\/$/, "");
  const dc = (process.env.ZOHO_INVENTORY_DC || "com").trim();
  const host = ZOHO_ACCOUNTS_HOSTS[dc] || ZOHO_ACCOUNTS_HOSTS.com;
  return `https://${host}`;
}

async function refreshAccessToken({ refreshToken, clientId, clientSecret }) {
  const url = `${accountsBase()}/oauth/v2/token`;
  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token",
  });
  const res = await fetch(`${url}?${params.toString()}`, { method: "POST" });
  const text = await res.text();
  let parsed;
  try { parsed = JSON.parse(text); } catch { parsed = null; }
  if (!res.ok || !parsed?.access_token) {
    return { ok: false, reason: `OAuth refresh failed (HTTP ${res.status}): ${parsed?.error || text.slice(0, 120)}` };
  }
  return {
    ok: true,
    accessToken: parsed.access_token,
    expiresAt: Date.now() + (Number(parsed.expires_in || 3600) - 60) * 1000,
  };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRefreshLock(fn) {
  mkdirSync(dirname(REFRESH_LOCK_PATH), { recursive: true });
  const deadline = Date.now() + REFRESH_LOCK_WAIT_MS;

  while (true) {
    let fd;
    try {
      fd = openSync(REFRESH_LOCK_PATH, "wx", 0o600);
      writeFileSync(fd, `${process.pid}\n`);
      try {
        return await fn();
      } finally {
        closeSync(fd);
        try { unlinkSync(REFRESH_LOCK_PATH); } catch (error) {
          if (error?.code !== "ENOENT") throw error;
        }
      }
    } catch (error) {
      if (fd !== undefined) {
        try { closeSync(fd); } catch { /* already closed */ }
      }
      if (error?.code !== "EEXIST") throw error;

      try {
        const age = Date.now() - statSync(REFRESH_LOCK_PATH).mtimeMs;
        if (age > REFRESH_LOCK_STALE_MS) {
          unlinkSync(REFRESH_LOCK_PATH);
          continue;
        }
      } catch (statError) {
        if (statError?.code === "ENOENT") continue;
        throw statError;
      }

      if (Date.now() >= deadline) {
        return { token: null, source: null, error: "Timed out waiting for another CLI process to refresh OAuth credentials" };
      }
      await sleep(50);
    }
  }
}

async function resolveAccessToken() {
  // 1. Direct access token in env wins.
  if (process.env[ENV_VAR]) return { token: process.env[ENV_VAR], source: "env" };

  // 2. Try OAuth refresh — env vars or stored credentials.
  const refreshToken = process.env.ZOHO_INVENTORY_REFRESH_TOKEN;
  const clientId = process.env.ZOHO_INVENTORY_CLIENT_ID;
  const clientSecret = process.env.ZOHO_INVENTORY_CLIENT_SECRET;
  const stored = loadCredentials() || {};

  const haveEnvOAuth = refreshToken && clientId && clientSecret;
  const haveStoredOAuth = stored.refreshToken && stored.clientId && stored.clientSecret;

  // Reuse a cached access token while still valid.
  if (stored.accessToken && stored.expiresAt && Date.now() < stored.expiresAt) {
    return { token: stored.accessToken, source: "config" };
  }

  // 3. Refresh.
  let creds;
  if (haveEnvOAuth) creds = { refreshToken, clientId, clientSecret };
  else if (haveStoredOAuth) creds = { refreshToken: stored.refreshToken, clientId: stored.clientId, clientSecret: stored.clientSecret };
  else if (stored.token) return { token: stored.token, source: "config" }; // Static token from `login --token`.

  if (!creds) return { token: null, source: null };

  return withRefreshLock(async () => {
    // Another process may have refreshed while this process waited. Re-read
    // under the lock before issuing a second OAuth refresh request.
    const latest = loadCredentials() || {};
    if (latest.accessToken && latest.expiresAt && Date.now() < latest.expiresAt) {
      return { token: latest.accessToken, source: "config" };
    }

    const lockedCreds = haveEnvOAuth
      ? { refreshToken, clientId, clientSecret }
      : latest.refreshToken && latest.clientId && latest.clientSecret
        ? { refreshToken: latest.refreshToken, clientId: latest.clientId, clientSecret: latest.clientSecret }
        : creds;
    const refreshed = await refreshAccessToken(lockedCreds);
    if (!refreshed.ok) return { token: null, source: null, error: refreshed.reason };

    saveCredentials({
      ...latest,
      refreshToken: lockedCreds.refreshToken,
      clientId: lockedCreds.clientId,
      clientSecret: lockedCreds.clientSecret,
      accessToken: refreshed.accessToken,
      expiresAt: refreshed.expiresAt,
      savedAt: new Date().toISOString(),
    });

    return { token: refreshed.accessToken, source: "refreshed" };
  });
}

export async function applyAuth(headers) {
  const { token, error } = await resolveAccessToken();
  if (!token) {
    return {
      ok: false,
      reason: error
        ? `auth_missing: ${error}`
        : `Set ${ENV_VAR}, or run 'zoho-inventory-cli login --refresh-token <t> --client-id <id> --client-secret <s>'.`,
    };
  }
  headers["authorization"] = `Zoho-oauthtoken ${token}`;
  return { ok: true };
}

export function authStatus() {
  const stored = loadCredentials() || {};
  const fromEnv = !!process.env[ENV_VAR];
  const fromOAuthEnv = !!(process.env.ZOHO_INVENTORY_REFRESH_TOKEN && process.env.ZOHO_INVENTORY_CLIENT_ID && process.env.ZOHO_INVENTORY_CLIENT_SECRET);
  const fromOAuthConfig = !!(stored.refreshToken && stored.clientId && stored.clientSecret);
  const hasCachedAccess = !!(stored.accessToken && stored.expiresAt && Date.now() < stored.expiresAt);
  return {
    scheme: SCHEME,
    envVar: ENV_VAR,
    fromEnv,
    fromOAuthEnv,
    fromOAuthConfig,
    fromConfig: !!stored.token || hasCachedAccess,
    hasCachedAccess,
    cachedExpiresAt: stored.expiresAt || null,
    dc: process.env.ZOHO_INVENTORY_DC || "com",
    orgId: process.env.ZOHO_INVENTORY_ORG_ID || null,
    authenticated: fromEnv || fromOAuthEnv || fromOAuthConfig || !!stored.token || hasCachedAccess,
  };
}

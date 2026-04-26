// Zoho OAuth: exchanges a refresh token for a short-lived access token,
// caches it on disk, and sets the `Authorization: Zoho-oauthtoken <token>`
// header on every request.
//
// Auth is "bearer" in `.clify.json` for gate compatibility, but the wire
// prefix is `Zoho-oauthtoken` — set by Zoho's docs, not interchangeable
// with the standard `Bearer` keyword. See knowledge/header-format.md.
import { loadCredentials, saveCredentials } from "./config.mjs";

const SCHEME = "bearer";
const ENV_VAR = "ZOHO_INVENTORY_API_KEY";

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

  const refreshed = await refreshAccessToken(creds);
  if (!refreshed.ok) return { token: null, source: null, error: refreshed.reason };

  saveCredentials({
    ...stored,
    refreshToken: creds.refreshToken,
    clientId: creds.clientId,
    clientSecret: creds.clientSecret,
    accessToken: refreshed.accessToken,
    expiresAt: refreshed.expiresAt,
    savedAt: new Date().toISOString(),
  });

  return { token: refreshed.accessToken, source: "refreshed" };
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

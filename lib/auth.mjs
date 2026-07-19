// Zoho Inventory OAuth: exchanges a refresh token for a short-lived access
// token, hash-checks cached tokens against the active refresh source, honors
// ZOHO_INVENTORY_NO_CACHE, and sets Authorization: Zoho-oauthtoken <token>.
import { loadCredentials, saveCredentials, hashRefreshToken } from "./config.mjs";

const SCHEME = "oauth-refresh";
const ENV_VAR = "ZOHO_INVENTORY_API_KEY";
const REFRESH_ENV = "ZOHO_INVENTORY_REFRESH_TOKEN";
const CLIENT_ID_ENV = "ZOHO_INVENTORY_CLIENT_ID";
const CLIENT_SECRET_ENV = "ZOHO_INVENTORY_CLIENT_SECRET";
const NO_CACHE_ENV = "ZOHO_INVENTORY_NO_CACHE";
const OAUTH_WIRE_PREFIX = "Zoho-oauthtoken";

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

export function resolveDc(stored) {
  if (process.env.ZOHO_INVENTORY_DC) return process.env.ZOHO_INVENTORY_DC.trim();
  if (stored && stored.dc) return String(stored.dc).trim();
  return "com";
}

function tokenUrl(stored) {
  if (process.env.ZOHO_INVENTORY_TOKEN_URL) return process.env.ZOHO_INVENTORY_TOKEN_URL.replace(/\/$/, "");
  if (process.env.ZOHO_INVENTORY_ACCOUNTS_URL) {
    return `${process.env.ZOHO_INVENTORY_ACCOUNTS_URL.replace(/\/$/, "")}/oauth/v2/token`;
  }
  const dc = resolveDc(stored);
  const host = ZOHO_ACCOUNTS_HOSTS[dc] || ZOHO_ACCOUNTS_HOSTS.com;
  return `https://${host}/oauth/v2/token`;
}

function noCache() {
  const v = process.env[NO_CACHE_ENV];
  return v === "1" || v === "true";
}

async function refreshAccessToken({ refreshToken, clientId, clientSecret, stored }) {
  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token",
  });
  let res;
  try {
    res = await fetch(`${tokenUrl(stored)}?${params.toString()}`, { method: "POST" });
  } catch (err) {
    return { ok: false, reason: `oauth refresh network error: ${err.message}` };
  }
  const text = await res.text();
  let parsed;
  try { parsed = JSON.parse(text); } catch { parsed = null; }
  if (!res.ok || !parsed?.access_token) {
    return { ok: false, reason: `oauth refresh failed (HTTP ${res.status}): ${parsed?.error || text.slice(0, 120)}` };
  }
  return {
    ok: true,
    accessToken: parsed.access_token,
    expiresAt: Date.now() + (Number(parsed.expires_in || 3600) - 60) * 1000,
  };
}

async function resolveOAuthToken() {
  if (process.env[ENV_VAR]) return { token: process.env[ENV_VAR], source: "env" };

  const stored = loadCredentials() || {};
  const envRefresh = process.env[REFRESH_ENV];
  const envClientId = process.env[CLIENT_ID_ENV];
  const envClientSecret = process.env[CLIENT_SECRET_ENV];
  const haveEnvOAuth = envRefresh && envClientId && envClientSecret;
  const haveStoredOAuth = stored.refreshToken && stored.clientId && stored.clientSecret;

  let source, creds;
  if (haveEnvOAuth) {
    source = "env";
    creds = { refreshToken: envRefresh, clientId: envClientId, clientSecret: envClientSecret };
  } else if (haveStoredOAuth) {
    source = "config";
    creds = { refreshToken: stored.refreshToken, clientId: stored.clientId, clientSecret: stored.clientSecret };
  } else if (stored.token) {
    return { token: stored.token, source: "config" };
  } else {
    return { token: null, source: null };
  }

  const currentHash = hashRefreshToken(creds.refreshToken);
  if (
    stored.accessToken &&
    stored.expiresAt &&
    Date.now() < stored.expiresAt &&
    stored.refreshTokenHash === currentHash
  ) {
    return { token: stored.accessToken, source: "cache" };
  }

  const refreshed = await refreshAccessToken({ ...creds, stored });
  if (!refreshed.ok) return { token: null, source: null, error: refreshed.reason };

  if (!noCache()) {
    saveCredentials({
      ...stored,
      refreshToken: creds.refreshToken,
      clientId: creds.clientId,
      clientSecret: creds.clientSecret,
      accessToken: refreshed.accessToken,
      expiresAt: refreshed.expiresAt,
      refreshTokenHash: currentHash,
      dc: resolveDc(stored),
      orgId: process.env.ZOHO_INVENTORY_ORG_ID || stored.orgId || null,
      savedAt: new Date().toISOString(),
    });
  }
  return { token: refreshed.accessToken, source: source === "env" ? "refreshed-env" : "refreshed-config" };
}

export async function applyAuth(headers) {
  const { token, source, error } = await resolveOAuthToken();
  if (!token) {
    return {
      ok: false,
      reason: error
        ? `auth_missing: ${error}`
        : `Set ${ENV_VAR} (or the OAuth triplet ${REFRESH_ENV}/${CLIENT_ID_ENV}/${CLIENT_SECRET_ENV}), or run 'zoho-inventory-cli login --refresh-token <r> --client-id <i> --client-secret <s>'.`,
    };
  }
  headers["authorization"] = `${OAUTH_WIRE_PREFIX} ${token}`;
  return { ok: true, source };
}

// Zoho silently invalidates older access tokens when a shared OAuth client
// exceeds its live-token cap (seen live 2026-07-18: a concurrent agent
// workflow minted tokens and evicted this CLI's cached one mid-run). Drop
// the cached access token so the next applyAuth forces a fresh refresh.
export function invalidateCachedAccessToken() {
  const stored = loadCredentials();
  if (!stored || !stored.accessToken) return;
  delete stored.accessToken;
  delete stored.expiresAt;
  saveCredentials(stored);
}

export function authStatus() {
  const stored = loadCredentials() || {};
  const fromEnvAccess = !!process.env[ENV_VAR];
  const fromEnvOAuth = !!(process.env[REFRESH_ENV] && process.env[CLIENT_ID_ENV] && process.env[CLIENT_SECRET_ENV]);
  const fromConfigOAuth = !!(stored.refreshToken && stored.clientId && stored.clientSecret);
  const hasCachedAccess = !!(stored.accessToken && stored.expiresAt && Date.now() < stored.expiresAt);
  return {
    scheme: SCHEME,
    envVar: ENV_VAR,
    fromEnv: fromEnvAccess,
    fromEnvOAuth,
    fromConfigOAuth,
    fromConfig: !!stored.token || hasCachedAccess,
    hasCachedAccess,
    cachedExpiresAt: stored.expiresAt || null,
    noCache: noCache(),
    dc: process.env.ZOHO_INVENTORY_DC || stored.dc || "com",
    orgId: process.env.ZOHO_INVENTORY_ORG_ID || stored.orgId || null,
    authenticated: fromEnvAccess || fromEnvOAuth || fromConfigOAuth || !!stored.token,
  };
}

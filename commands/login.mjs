// Zoho Inventory credential management.
import { saveCredentials, credentialsPath, loadCredentials, clearCredentials, hashRefreshToken } from "../lib/config.mjs";
import { authStatus } from "../lib/auth.mjs";
import { output, errorOut } from "../lib/output.mjs";

export const loginFlags = {
  token: { type: "string", description: "Static access token to persist (short-lived; refresh flow is preferred)" },
  "refresh-token": { type: "string", description: "Zoho OAuth refresh token" },
  "client-id": { type: "string", description: "OAuth Self Client ID" },
  "client-secret": { type: "string", description: "OAuth Self Client secret" },
  dc: { type: "string", description: "Datacenter — com | eu | in | com.au | jp | ca | com.cn | sa (persisted; env ZOHO_INVENTORY_DC overrides)" },
  "org-id": { type: "string", description: "Zoho Inventory org id (persisted; env ZOHO_INVENTORY_ORG_ID overrides)" },
  status: { type: "boolean", description: "Print current auth source without changing it" },
  clear: { type: "boolean", description: "Delete the stored credentials file" },
};

export async function runLogin(values, jsonRequested) {
  if (values.status) {
    output(authStatus(), jsonRequested);
    return;
  }

  if (values.clear) {
    clearCredentials();
    output({ ok: true, cleared: true, path: credentialsPath() }, jsonRequested);
    return;
  }

  const refreshToken = values["refresh-token"];
  const clientId = values["client-id"];
  const clientSecret = values["client-secret"];
  const oauthCount = [refreshToken, clientId, clientSecret].filter(Boolean).length;
  const hasToken = !!values.token;

  if (hasToken && oauthCount > 0) {
    errorOut("validation_error", "Pass either --token (static) OR --refresh-token+--client-id+--client-secret (OAuth), not both.");
  }

  if (oauthCount > 0) {
    if (oauthCount !== 3) {
      errorOut("validation_error", "OAuth login requires --refresh-token AND --client-id AND --client-secret.");
    }
    const stored = loadCredentials() || {};
    saveCredentials({
      ...stored,
      refreshToken,
      clientId,
      clientSecret,
      refreshTokenHash: hashRefreshToken(refreshToken),
      accessToken: undefined,
      expiresAt: undefined,
      dc: values.dc || process.env.ZOHO_INVENTORY_DC || stored.dc || null,
      orgId: values["org-id"] || process.env.ZOHO_INVENTORY_ORG_ID || stored.orgId || null,
      savedAt: new Date().toISOString(),
    });
    output({ ok: true, mode: "oauth-refresh", path: credentialsPath() }, jsonRequested);
    return;
  }

  let token = values.token;
  if (!token) token = (process.env.ZOHO_INVENTORY_LOGIN_TOKEN || "").trim();
  if (!token) {
    errorOut(
      "validation_error",
      "Pass --token <value>, set ZOHO_INVENTORY_LOGIN_TOKEN, or set ZOHO_INVENTORY_API_KEY in your environment. For OAuth use --refresh-token --client-id --client-secret instead.",
    );
  }
  saveCredentials({ token, savedAt: new Date().toISOString() });
  output({ ok: true, mode: "static", path: credentialsPath() }, jsonRequested);
}

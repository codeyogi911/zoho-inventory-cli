// Zoho OAuth credential management. Stores refresh-token + client-id +
// client-secret at ~/.config/zoho-inventory-cli/credentials.json (mode 0600);
// the access token is fetched on demand and cached with an expiry.
import { saveCredentials, loadCredentials, credentialsPath } from "../lib/config.mjs";
import { authStatus } from "../lib/auth.mjs";
import { output, errorOut } from "../lib/output.mjs";

export const loginFlags = {
  "refresh-token": { type: "string", description: "Zoho OAuth refresh token (long-lived)" },
  "client-id": { type: "string", description: "OAuth Self Client ID" },
  "client-secret": { type: "string", description: "OAuth Self Client secret" },
  token: { type: "string", description: "Static access token (~1 hour validity); use refresh flow instead when possible" },
  status: { type: "boolean", description: "Print current auth source without changing it" },
  clear: { type: "boolean", description: "Delete the stored credentials file" },
};

export async function runLogin(values, jsonRequested) {
  if (values.status) {
    output(authStatus(), jsonRequested);
    return;
  }

  if (values.clear) {
    saveCredentials({});
    output({ ok: true, cleared: true, path: credentialsPath() }, jsonRequested);
    return;
  }

  const stored = loadCredentials() || {};
  const next = { ...stored, savedAt: new Date().toISOString() };

  let touched = false;
  if (values["refresh-token"]) { next.refreshToken = values["refresh-token"]; delete next.accessToken; delete next.expiresAt; touched = true; }
  if (values["client-id"]) { next.clientId = values["client-id"]; touched = true; }
  if (values["client-secret"]) { next.clientSecret = values["client-secret"]; touched = true; }
  if (values.token) { next.token = values.token; touched = true; }

  if (!touched) {
    errorOut(
      "validation_error",
      "Pass at least one of --refresh-token, --client-id, --client-secret, --token, --status, or --clear."
    );
  }

  saveCredentials(next);
  output({ ok: true, path: credentialsPath() }, jsonRequested);
}

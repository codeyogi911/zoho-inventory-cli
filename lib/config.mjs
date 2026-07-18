// Project-scoped credential store at ~/.config/zoho-inventory-cli/credentials.json.
// Used by the `login` command. Env var ZOHO_INVENTORY_API_KEY always wins when set.
import { readFileSync, writeFileSync, existsSync, mkdirSync, chmodSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";
import { createHash } from "node:crypto";

const CONFIG_DIR = process.env.__ZOHO_INVENTORY_DEV_CONFIG_DIR || join(homedir(), ".config", "zoho-inventory-cli");
const CRED_PATH = join(CONFIG_DIR, "credentials.json");

export function loadCredentials() {
  if (!existsSync(CRED_PATH)) return null;
  try { return JSON.parse(readFileSync(CRED_PATH, "utf8")); }
  catch { return null; }
}

export function saveCredentials(creds) {
  if (!existsSync(CONFIG_DIR)) mkdirSync(CONFIG_DIR, { recursive: true });
  writeFileSync(CRED_PATH, JSON.stringify(creds, null, 2));
  try { chmodSync(CRED_PATH, 0o600); } catch { /* non-POSIX */ }
}

export function clearCredentials() {
  if (existsSync(CRED_PATH)) {
    try { unlinkSync(CRED_PATH); } catch { /* ignore */ }
  }
}

export function credentialsPath() { return CRED_PATH; }

export function hashRefreshToken(refreshToken) {
  if (!refreshToken) return null;
  return createHash("sha256").update(refreshToken).digest("hex").slice(0, 16);
}

// Project-scoped credential store at ~/.config/zoho-inventory-cli/credentials.json.
// Used by the `login` command. Env var ZOHO_INVENTORY_API_KEY always wins when set.
import { readFileSync, writeFileSync, existsSync, mkdirSync, chmodSync, unlinkSync, renameSync } from "node:fs";
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
  // Concurrent CLI processes (normal — several Mounts and interactive
  // sessions can all be mid-refresh at once) can each call this around the
  // same moment. A plain writeFileSync lets two writers' output interleave
  // into a torn/invalid JSON file, or a slower writer silently clobber a
  // faster one's good token. Write to a per-process temp file and rename
  // (atomic on POSIX) so every reader always sees one complete write, never
  // a mix. See knowledge/oauth-refresh.md.
  const tempPath = `${CRED_PATH}.${process.pid}.${Date.now()}.tmp`;
  writeFileSync(tempPath, JSON.stringify(creds, null, 2), { mode: 0o600 });
  renameSync(tempPath, CRED_PATH);
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

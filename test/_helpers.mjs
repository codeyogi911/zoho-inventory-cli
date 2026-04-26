// Spawn the CLI in a child process and collect stdout/stderr.
// `runJson` adds --json and parses both streams as JSON when possible.
import { spawn } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = resolve(__dirname, "..");
export const CLI = resolve(REPO_ROOT, "bin/zoho-inventory-cli.mjs");

export function run(args = [], { env = {}, timeoutMs = 10000 } = {}) {
  return new Promise((resolveRun) => {
    // Start from process.env, then strip every ZOHO_INVENTORY_* var the
    // shell might be exporting — the parent shell likely has live OAuth
    // credentials for the user's real Zoho account, which would mask the
    // env-vs-no-env distinction we're trying to test.
    const cleanEnv = { ...process.env };
    for (const k of Object.keys(cleanEnv)) {
      if (k.startsWith("ZOHO_INVENTORY_")) delete cleanEnv[k];
    }
    // Each spawn gets its own throwaway HOME so the CLI's credential store
    // (~/.config/zoho-inventory-cli/credentials.json) can't leak between tests
    // — without this, an OAuth-refresh test caches a token that the next
    // "auth missing" test then finds and uses.
    cleanEnv.HOME = mkdtempSync(join(tmpdir(), "zoho-cli-home-"));
    Object.assign(cleanEnv, env);
    cleanEnv.__ZOHO_INVENTORY_FORCE_JSON_ERR = "1";
    const child = spawn(process.execPath, [CLI, ...args], { env: cleanEnv });
    let stdout = "", stderr = "";
    child.stdout.on("data", (d) => { stdout += d.toString(); });
    child.stderr.on("data", (d) => { stderr += d.toString(); });
    const t = setTimeout(() => child.kill("SIGKILL"), timeoutMs);
    child.on("close", (code) => { clearTimeout(t); resolveRun({ stdout, stderr, exitCode: code ?? 0 }); });
  });
}

export async function runJson(args = [], opts = {}) {
  const r = await run([...args, "--json"], opts);
  let parsed = null;
  if (r.stdout.trim()) { try { parsed = JSON.parse(r.stdout); } catch {} }
  let parsedErr = null;
  if (r.stderr.trim()) { try { parsedErr = JSON.parse(r.stderr.trim().split("\n").pop()); } catch {} }
  return { ...r, json: parsed, errJson: parsedErr };
}

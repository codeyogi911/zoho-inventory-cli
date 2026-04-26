// HTTP layer: apiRequest + page-pagination iterator.
//
// `apiRequest` handles auth injection, multipart uploads, dry-run, verbose,
// the structured error map, and Zoho-specific quirks: per-DC base URL and
// the auto-injected `organization_id` query parameter.
import { readFileSync, existsSync } from "node:fs";
import { errorOut } from "./output.mjs";
import { applyAuth } from "./auth.mjs";

const ZOHO_DC_HOSTS = {
  com: "www.zohoapis.com",
  eu: "www.zohoapis.eu",
  in: "www.zohoapis.in",
  "com.au": "www.zohoapis.com.au",
  jp: "www.zohoapis.jp",
  ca: "www.zohoapis.ca",
  "com.cn": "www.zohoapis.com.cn",
  sa: "www.zohoapis.sa",
};

function resolveBaseUrl() {
  if (process.env.ZOHO_INVENTORY_BASE_URL) return process.env.ZOHO_INVENTORY_BASE_URL.replace(/\/$/, "");
  const dc = (process.env.ZOHO_INVENTORY_DC || "com").trim();
  const host = ZOHO_DC_HOSTS[dc];
  if (!host) errorOut("validation_error", `Unknown ZOHO_INVENTORY_DC: ${dc}. Use one of: ${Object.keys(ZOHO_DC_HOSTS).join(", ")}.`);
  return `https://${host}/inventory/v1`;
}

export function getBaseUrl() { return resolveBaseUrl(); }

export async function apiRequest({ method, path, query, body, headers = {}, dryRun, verbose, idempotencyKey, ifMatch, file, fileField = "attachment", version = "0.0.0" }) {
  const url = new URL(resolveBaseUrl() + path);

  // Inject organization_id from env unless already in query.
  const orgFromEnv = process.env.ZOHO_INVENTORY_ORG_ID;
  const merged = { ...(query || {}) };
  if (orgFromEnv && merged.organization_id === undefined) merged.organization_id = orgFromEnv;

  for (const [k, v] of Object.entries(merged)) {
    if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, String(v));
  }

  const reqHeaders = { "user-agent": `zoho-inventory-cli/${version}`, ...headers };
  const auth = await applyAuth(reqHeaders);
  if (!auth.ok) errorOut("auth_missing", auth.reason || "Set ZOHO_INVENTORY_API_KEY (or refresh-token credentials) to authenticate.");

  let reqBody;
  if (file) {
    if (!existsSync(file)) errorOut("validation_error", `File not found: ${file}`);
    const fd = new FormData();
    const buf = readFileSync(file);
    const blob = new Blob([buf]);
    fd.append(fileField, blob, file.split("/").pop());
    reqBody = fd;
  } else if (body !== undefined && method !== "GET" && method !== "DELETE") {
    reqHeaders["content-type"] = "application/json";
    reqBody = JSON.stringify(body);
  }

  if (idempotencyKey) reqHeaders["idempotency-key"] = idempotencyKey;
  if (ifMatch) reqHeaders["if-match"] = ifMatch;

  if (dryRun) {
    return { __dryRun: true, method, url: url.toString(), headers: reqHeaders, body: body ?? null };
  }

  let res;
  try {
    res = await fetch(url, { method, headers: reqHeaders, body: reqBody });
  } catch (err) {
    if (err.name === "AbortError" || /timeout/i.test(err.message || "")) {
      errorOut("timeout", `Request timed out: ${err.message}`, { retryable: true });
    }
    errorOut("network_error", `Network error: ${err.message}`, { retryable: true });
  }

  const status = res.status;
  const retryAfterHeader = res.headers.get("retry-after");
  const retryAfter = retryAfterHeader ? Number(retryAfterHeader) : undefined;

  let parsed;
  const text = await res.text();
  try { parsed = text ? JSON.parse(text) : null; } catch { parsed = text; }

  if (verbose) {
    const headerObj = {};
    res.headers.forEach((v, k) => { headerObj[k] = v; });
    process.stderr.write(JSON.stringify({ status, headers: headerObj }) + "\n");
  }

  if (status >= 200 && status < 300) {
    // Zoho returns { code, message, ...payload }. Non-zero `code` is an
    // application error even on HTTP 200 (rare, but documented). Surface it.
    if (parsed && typeof parsed === "object" && typeof parsed.code === "number" && parsed.code !== 0) {
      errorOut("validation_error", parsed.message || `Zoho error code ${parsed.code}`, { details: parsed });
    }
    return parsed;
  }

  const baseMsg = parsed && typeof parsed === "object" && parsed.message ? parsed.message : `HTTP ${status}`;
  if (status === 401) errorOut("auth_invalid", baseMsg);
  if (status === 403) errorOut("forbidden", baseMsg);
  if (status === 404) errorOut("not_found", baseMsg);
  if (status === 409) errorOut("conflict", baseMsg);
  if (status === 400 || status === 422) errorOut("validation_error", baseMsg, { details: parsed });
  if (status === 429) errorOut("rate_limited", `Rate limited.${retryAfter ? ` Retry after ${retryAfter}s.` : ""}`, { retryable: true, retryAfter });
  if (status >= 500) errorOut("server_error", baseMsg, { retryable: true, retryAfter });
  errorOut("network_error", baseMsg);
}

// Page-pagination iterator. Zoho list responses carry
// `{ <resource_array>: [...], page_context: { has_more_page: bool, page, per_page, ... } }`.
// We emit individual items by detecting the first array-valued field on the
// response object and walking pages until `has_more_page` is false.
export async function* paginate(opts) {
  let page = Number(opts.query?.page || 1);
  const perPage = opts.query?.per_page;
  while (true) {
    const query = { ...(opts.query || {}), page };
    if (perPage) query.per_page = perPage;
    const res = await apiRequest({ ...opts, query });
    const items = pickListArray(res);
    for (const item of items) yield item;
    const hasMore = res?.page_context?.has_more_page === true;
    if (!hasMore) return;
    page += 1;
  }
}

function pickListArray(res) {
  if (!res || typeof res !== "object") return [];
  for (const [k, v] of Object.entries(res)) {
    if (k === "page_context" || k === "code" || k === "message") continue;
    if (Array.isArray(v)) return v;
  }
  return [];
}

#!/usr/bin/env node
// zoho-inventory-cli — agent-friendly wrapper over the Zoho Inventory API.
//
// Resource definitions live under commands/ — one file per Zoho module.
// Shared HTTP, OAuth, .env, args, output, and help live under lib/.
import { parseArgs } from "node:util";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { loadEnv } from "../lib/env.mjs";
import { splitGlobal, hasHelp, toParseArgs, checkRequired } from "../lib/args.mjs";
import { output, errorOut } from "../lib/output.mjs";
import { apiRequest, paginate } from "../lib/api.mjs";
import { showRootHelp, showResourceHelp, showActionHelp } from "../lib/help.mjs";

import organizations from "../commands/organizations.mjs";
import contacts from "../commands/contacts.mjs";
import contactPersons from "../commands/contact-persons.mjs";
import itemGroups from "../commands/item-groups.mjs";
import items from "../commands/items.mjs";
import compositeItems from "../commands/composite-items.mjs";
import bundles from "../commands/bundles.mjs";
import inventoryAdjustments from "../commands/inventory-adjustments.mjs";
import transferOrders from "../commands/transfer-orders.mjs";
import salesOrders from "../commands/sales-orders.mjs";
import packages from "../commands/packages.mjs";
import shipmentOrders from "../commands/shipment-orders.mjs";
import invoices from "../commands/invoices.mjs";
import retainerInvoices from "../commands/retainer-invoices.mjs";
import customerPayments from "../commands/customer-payments.mjs";
import salesReturns from "../commands/sales-returns.mjs";
import creditNotes from "../commands/credit-notes.mjs";
import purchaseOrders from "../commands/purchase-orders.mjs";
import purchaseReceives from "../commands/purchase-receives.mjs";
import bills from "../commands/bills.mjs";
import vendorCredits from "../commands/vendor-credits.mjs";
import locations from "../commands/locations.mjs";
import priceLists from "../commands/price-lists.mjs";
import users from "../commands/users.mjs";
import tasks from "../commands/tasks.mjs";
import taxes from "../commands/taxes.mjs";
import currencies from "../commands/currencies.mjs";
import deliveryChallans from "../commands/delivery-challans.mjs";
import reportingTags from "../commands/reporting-tags.mjs";
import { loginFlags, runLogin } from "../commands/login.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");

loadEnv(REPO_ROOT);

const pkg = JSON.parse(readFileSync(join(REPO_ROOT, "package.json"), "utf8"));
const VERSION = pkg.version;

const COMMANDS = [
  organizations, contacts, contactPersons, itemGroups, items, compositeItems,
  bundles, inventoryAdjustments, transferOrders, salesOrders, packages,
  shipmentOrders, invoices, retainerInvoices, customerPayments, salesReturns,
  creditNotes, purchaseOrders, purchaseReceives, bills, vendorCredits,
  locations, priceLists, users, tasks, taxes, currencies, deliveryChallans,
  reportingTags,
];
const REGISTRY = Object.fromEntries(COMMANDS.map((c) => [c.name, c.actions]));
const PAYLOAD_BUILDERS = Object.fromEntries(COMMANDS.map((c) => [c.name, c.buildPayload || (() => ({}))]));

// Reserved keys never sent in the JSON payload — control flags, raw-body,
// path placeholders, and the Zoho `organization_id` override.
const RESERVED_KEYS = new Set(["body", "file", "idempotency-key", "if-match", "organization-id", "page", "per_page"]);

function pathParamNames(template) {
  return Array.from(template.matchAll(/:([a-zA-Z_]+)/g)).map((m) => m[1]);
}

function interpolatePath(template, values) {
  let path = template;
  for (const k of pathParamNames(template)) {
    const v = values[k];
    if (v === undefined) errorOut("validation_error", `Missing path parameter --${k}`);
    path = path.replace(`:${k}`, encodeURIComponent(String(v)));
  }
  return path;
}

function buildQuery(values, def) {
  const path = def.path;
  const pathParams = new Set(pathParamNames(path));
  const query = {};
  for (const [k, v] of Object.entries(values)) {
    if (v === undefined) continue;
    if (pathParams.has(k)) continue;
    if (k === "body" || k === "file" || k === "idempotency-key" || k === "if-match") continue;
    if (k === "organization-id") { query.organization_id = v; continue; }
    query[k] = v;
  }
  return query;
}

// Flags that ride in the query string for non-GET actions. Two sources:
//   1. Explicit per-action `queryFlags` declared in commands/<resource>.mjs
//      (e.g. POST /creditnotes ?invoice_id= for Zoho convert-from-invoice).
//   2. The `*_ids` heuristic for Zoho bulk-op endpoints.
function isQueryFlag(name, def) {
  if (def?.queryFlags && def.queryFlags.includes(name)) return true;
  return name.endsWith("_ids");
}

// Client-side filter for list endpoints whose Zoho-side filter is broken
// (declared in commands/<resource>.mjs as `brokenListFilters`). Compares the
// requested value against the raw API field of the same name, with a small
// number of value-aware allowances for status text and dates (substring on
// number-shaped fields gives users the prefix-match behavior they expect).
function clientFilter(items, filters) {
  const checks = Object.entries(filters);
  return items.filter((row) =>
    checks.every(([k, target]) => {
      const v = row?.[k];
      if (v === undefined || v === null) return false;
      const a = String(v).toLowerCase();
      const b = String(target).toLowerCase();
      return a === b || a.includes(b);
    }),
  );
}

function buildBody(values, def, resource) {
  if (def.method === "GET" || def.method === "DELETE") return undefined;
  if (values.file) return undefined;
  if (values.body) {
    try { return JSON.parse(values.body); }
    catch { errorOut("validation_error", "--body must be valid JSON"); }
  }
  // Strip path params, reserved keys, and query-flagged keys (e.g. *_ids and
  // explicit queryFlags such as Zoho's convert-from-invoice ?invoice_id=).
  const pathParams = new Set(pathParamNames(def.path));
  const stripped = {};
  for (const [k, v] of Object.entries(values)) {
    if (v === undefined) continue;
    if (pathParams.has(k)) continue;
    if (RESERVED_KEYS.has(k)) continue;
    if (isQueryFlag(k, def)) continue;
    stripped[k] = v;
  }
  const builder = PAYLOAD_BUILDERS[resource];
  return builder(stripped);
}

async function runResourceAction(resourceArg, actionArg, remaining, global, rest) {
  const def = REGISTRY[resourceArg][actionArg];

  if (hasHelp(rest)) {
    process.stdout.write(showActionHelp(resourceArg, actionArg, REGISTRY));
    return;
  }

  let parsed;
  try {
    parsed = parseArgs({ args: remaining, options: toParseArgs(def.flags), strict: true, allowPositionals: false });
  } catch (err) {
    errorOut("validation_error", err.message);
  }

  const missing = checkRequired(parsed.values, def.flags);
  if (missing.length) errorOut("validation_error", `Missing required flag(s): ${missing.map((m) => `--${m}`).join(", ")}`);

  const path = interpolatePath(def.path, parsed.values);
  const body = buildBody(parsed.values, def, resourceArg);

  // Detect broken-list-filter usage: Zoho silently ignores some filters on
  // /salesreturns, /bills, /packages, etc. (returns full unfiltered list with
  // HTTP 200). When the user passes one, drop it from the wire query, fetch
  // the full list, and filter client-side. Print a stderr note explaining.
  const brokenFilters = (actionArg === "list" && Array.isArray(def.brokenListFilters))
    ? Object.fromEntries(
        def.brokenListFilters
          .filter((k) => parsed.values[k] !== undefined && parsed.values[k] !== "")
          .map((k) => [k, String(parsed.values[k])]),
      )
    : {};
  const hasBrokenFilters = Object.keys(brokenFilters).length > 0;
  if (hasBrokenFilters) {
    for (const k of Object.keys(brokenFilters)) parsed.values[k] = undefined;
    if (!global.dry_run) {
      process.stderr.write(
        `note: ${resourceArg}.list filter(s) ${Object.keys(brokenFilters).map((k) => `--${k}`).join(", ")} are silently ignored by Zoho — fetching full list and filtering client-side.\n`,
      );
    }
  }

  // Page-pagination via --all on list actions, or implicitly when a broken
  // filter forces the client-side fallback (full list needed for accuracy).
  if ((global.all || hasBrokenFilters) && actionArg === "list") {
    const collected = [];
    const query = buildQuery(parsed.values, def);
    for await (const item of paginate({ method: def.method, path, query, version: VERSION, dryRun: !!global.dry_run, verbose: !!global.verbose })) {
      collected.push(item);
    }
    const filtered = hasBrokenFilters ? clientFilter(collected, brokenFilters) : collected;
    output(filtered, !!global.json);
    return;
  }

  // Build query: every GET sends one, and non-GET actions still need any
  // queryFlags + an --organization-id override on the URL.
  let query;
  if (def.method === "GET") {
    query = buildQuery(parsed.values, def);
  } else {
    query = {};
    for (const [k, v] of Object.entries(parsed.values)) {
      if (v === undefined) continue;
      if (isQueryFlag(k, def)) query[k] = v;
    }
    if (parsed.values["organization-id"]) query.organization_id = parsed.values["organization-id"];
    if (Object.keys(query).length === 0) query = undefined;
  }

  const result = await apiRequest({
    method: def.method,
    path,
    query,
    body,
    file: parsed.values.file,
    idempotencyKey: parsed.values["idempotency-key"],
    ifMatch: parsed.values["if-match"],
    dryRun: !!global.dry_run,
    verbose: !!global.verbose,
    version: VERSION,
  });

  output(result, !!global.json);
}

async function main() {
  const argv = process.argv.slice(2);
  const { global, rest } = splitGlobal(argv);

  if (global.version) { process.stdout.write(VERSION + "\n"); return; }

  const positional = rest.filter((a) => a !== "--help" && a !== "-h");
  if (positional.length === 0) { process.stdout.write(showRootHelp(VERSION, REGISTRY)); return; }

  // Login is dispatched ahead of resource lookup.
  if (positional[0] === "login") {
    if (hasHelp(rest)) {
      let out = `zoho-inventory-cli login\n\nFlags:\n`;
      for (const [name, spec] of Object.entries(loginFlags)) {
        out += `  --${name.padEnd(18)} ${spec.type.padEnd(8)} ${spec.description}\n`;
      }
      process.stdout.write(out);
      return;
    }
    let parsed;
    try { parsed = parseArgs({ args: positional.slice(1), options: toParseArgs(loginFlags), strict: true, allowPositionals: false }); }
    catch (err) { errorOut("validation_error", err.message); }
    await runLogin(parsed.values, !!global.json);
    return;
  }

  const [resourceArg, actionArg, ...remaining] = positional;

  if (!REGISTRY[resourceArg]) {
    const available = Object.keys(REGISTRY).concat(["login"]).join(", ");
    errorOut("validation_error", `Unknown resource: ${resourceArg}. Available: ${available}`);
  }

  if (!actionArg) {
    process.stdout.write(showResourceHelp(resourceArg, REGISTRY));
    return;
  }

  if (!REGISTRY[resourceArg][actionArg]) {
    const available = Object.keys(REGISTRY[resourceArg]).join(", ");
    errorOut("validation_error", `Unknown action: ${actionArg} on ${resourceArg}. Available: ${available}`);
  }

  await runResourceAction(resourceArg, actionArg, remaining, global, rest);
}

main().catch((err) => {
  errorOut("network_error", err.message || String(err));
});

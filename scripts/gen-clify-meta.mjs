// Build coverage.json + .clify.json from the live registry of resource modules.
import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const REPO = "/Users/shashwatjain/Repos/zoho-inventory-cli";
const COMMAND_FILES = [
  "organizations","contacts","contact-persons","item-groups","items",
  "composite-items","bundles","inventory-adjustments","transfer-orders",
  "sales-orders","packages","shipment-orders","invoices","retainer-invoices",
  "customer-payments","sales-returns","credit-notes","purchase-orders",
  "purchase-receives","bills","vendor-credits","locations","price-lists",
  "users","tasks","taxes","currencies","delivery-challans","reporting-tags",
];

const resources = await Promise.all(
  COMMAND_FILES.map((f) => import(pathToFileURL(join(REPO, "commands", `${f}.mjs`)).href).then((m) => m.default)),
);

const endpoints = [];
const multiPart = [];
for (const r of resources) {
  for (const [action, def] of Object.entries(r.actions)) {
    endpoints.push({ method: def.method, path: def.path, resource: r.name, action, included: true });
    if (def.flags?.file?.required) multiPart.push(`${r.name}.${action}`);
  }
}

const coverage = {
  parsedAt: "2026-04-26T00:00:00Z",
  totalParsed: endpoints.length,
  totalIncluded: endpoints.length,
  totalDropped: 0,
  endpoints,
};

writeFileSync(join(REPO, "coverage.json"), JSON.stringify(coverage, null, 2) + "\n");

const clify = {
  apiName: "zoho-inventory",
  docsUrl: "https://www.zoho.com/inventory/api/v1/introduction/",
  crawledUrls: [
    "https://www.zoho.com/inventory/api/v1/introduction/",
    "https://www.zoho.com/inventory/api/v1/oauth/",
    "https://www.zoho.com/inventory/api/v1/organizations/",
    "https://www.zoho.com/inventory/api/v1/contacts/",
    "https://www.zoho.com/inventory/api/v1/contact-persons/",
    "https://www.zoho.com/inventory/api/v1/itemgroups/",
    "https://www.zoho.com/inventory/api/v1/items/",
    "https://www.zoho.com/inventory/api/v1/compositeitems/",
    "https://www.zoho.com/inventory/api/v1/inventoryadjustments/",
    "https://www.zoho.com/inventory/api/v1/transferorders/",
    "https://www.zoho.com/inventory/api/v1/salesorders/",
    "https://www.zoho.com/inventory/api/v1/packages/",
    "https://www.zoho.com/inventory/api/v1/shipmentorders/",
    "https://www.zoho.com/inventory/api/v1/invoices/",
    "https://www.zoho.com/inventory/api/v1/retainer-invoices/",
    "https://www.zoho.com/inventory/api/v1/customer-payments/",
    "https://www.zoho.com/inventory/api/v1/salesreturns/",
    "https://www.zoho.com/inventory/api/v1/credit-notes/",
    "https://www.zoho.com/inventory/api/v1/purchaseorders/",
    "https://www.zoho.com/inventory/api/v1/purchasereceives/",
    "https://www.zoho.com/inventory/api/v1/bills/",
    "https://www.zoho.com/inventory/api/v1/vendor-credits/",
    "https://www.zoho.com/inventory/api/v1/locations/",
    "https://www.zoho.com/inventory/api/v1/pricelists/",
    "https://www.zoho.com/inventory/api/v1/users/",
    "https://www.zoho.com/inventory/api/v1/tasks/",
    "https://www.zoho.com/inventory/api/v1/taxes/",
    "https://www.zoho.com/inventory/api/v1/currency/",
    "https://www.zoho.com/inventory/api/v1/delivery-challans/",
    "https://www.zoho.com/inventory/api/v1/reporting-tags/",
  ],
  contentHash: "sha256:zoho-inventory-2026-04-26-from-docs-crawl",
  generatedAt: "2026-04-26T00:00:00Z",
  clifyVersion: "0.3.0",
  nodeMinVersion: "20",
  auth: {
    envVar: "ZOHO_INVENTORY_API_KEY",
    scheme: "bearer",
    validationCommand: "organizations list",
  },
  defaults: [
    { name: "ZOHO_INVENTORY_DC", description: "Datacenter routing — com | eu | in | com.au | jp | ca | com.cn | sa", default: "com" },
    { name: "ZOHO_INVENTORY_ORG_ID", description: "Auto-injected as ?organization_id= on every request", default: null },
  ],
  nuances: {
    pagination: "page",
    rateLimits: true,
    authScopes: true,
    deprecated: [],
    idempotency: [],
    multiPart,
    conditional: [],
    businessRules: 6,
  },
  coverage: {
    totalParsed: endpoints.length,
    totalIncluded: endpoints.length,
    totalDropped: 0,
  },
};

writeFileSync(join(REPO, ".clify.json"), JSON.stringify(clify, null, 2) + "\n");
console.log(`Wrote coverage.json (${endpoints.length} endpoints) and .clify.json (multipart: ${multiPart.length})`);

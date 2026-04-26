// Integration tests against the bundled mock server. Exercises the full
// HTTP path: page pagination across two pages, multipart upload, the Zoho
// error map, and the structured-error contract.
import test from "node:test";
import assert from "node:assert/strict";
import { writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { mockApi } from "./_mock-server.mjs";
import { run, runJson } from "./_helpers.mjs";

const ENV = { ZOHO_INVENTORY_API_KEY: "test-token", ZOHO_INVENTORY_ORG_ID: "60030298567" };

async function withMock(routes, fn) {
  const server = await mockApi(routes);
  try { await fn(server); } finally { await server.close(); }
}

// ---------- items: list, get, create, update, delete ----------

test("items list returns array", async () => {
  await withMock({
    "GET /items": { status: 200, body: { items: [{ item_id: "1" }, { item_id: "2" }], page_context: { page: 1, has_more_page: false } } },
  }, async (server) => {
    const r = await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(r.json.items.length, 2);
    assert.equal(server.requests[0].method, "GET");
    assert.equal(server.requests[0].path, "/items");
    assert.equal(server.requests[0].query.organization_id, "60030298567");
  });
});

test("items list --all walks page-paginated responses and concatenates", async () => {
  await withMock({
    "GET /items": (req) => {
      const page = Number(req.query.page || 1);
      if (page === 1) return { status: 200, body: { items: [{ item_id: "1" }, { item_id: "2" }], page_context: { page: 1, has_more_page: true } } };
      if (page === 2) return { status: 200, body: { items: [{ item_id: "3" }], page_context: { page: 2, has_more_page: false } } };
      return { status: 400, body: { message: `unknown page ${page}` } };
    },
  }, async (server) => {
    const r = await runJson(["items", "list", "--all"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(r.json.length, 3);
    assert.deepEqual(r.json.map((i) => i.item_id), ["1", "2", "3"]);
    assert.equal(server.requests.length, 2);
    assert.equal(server.requests[1].query.page, "2");
  });
});

test("items get interpolates id into path", async () => {
  await withMock({
    "GET /items/:id": (_req, params) => ({ status: 200, body: { item: { item_id: params.id, name: "Widget" } } }),
  }, async (server) => {
    const r = await runJson(["items", "get", "--id", "42"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(r.json.item.item_id, "42");
    assert.equal(server.requests[0].path, "/items/42");
  });
});

test("items create sends body and is_taxable / sku flags", async () => {
  await withMock({
    "POST /items": (req) => ({ status: 201, body: { item: { item_id: "new", ...req.body } } }),
  }, async (server) => {
    const r = await runJson(
      ["items", "create", "--name", "Widget", "--sku", "W-001", "--rate", "199.00"],
      { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } }
    );
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(r.json.item.item_id, "new");
    assert.equal(r.json.item.name, "Widget");
    assert.deepEqual(server.requests[0].body, { name: "Widget", sku: "W-001", rate: "199.00" });
  });
});

test("items update sends PUT and excludes path id from body", async () => {
  await withMock({
    "PUT /items/:id": (req, params) => ({ status: 200, body: { item: { item_id: params.id, ...req.body } } }),
  }, async (server) => {
    const r = await runJson(
      ["items", "update", "--id", "7", "--name", "Updated"],
      { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } }
    );
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(server.requests[0].body.name, "Updated");
    assert.equal(server.requests[0].body.id, undefined);
  });
});

test("items delete returns ok", async () => {
  await withMock({
    "DELETE /items/:id": { status: 200, body: { code: 0, message: "Deleted" } },
  }, async (server) => {
    const r = await runJson(["items", "delete", "--id", "9"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(server.requests[0].method, "DELETE");
    assert.equal(server.requests[0].path, "/items/9");
  });
});

// ---------- contact-persons: nested path with --contactId ----------

test("contact-persons list interpolates parent contact id", async () => {
  await withMock({
    "GET /contacts/:contactId/contactpersons": (_req, params) => ({
      status: 200,
      body: { contact_persons: [{ contact_person_id: "p1", contact_id: params.contactId }], page_context: { has_more_page: false } },
    }),
  }, async (server) => {
    const r = await runJson(["contact-persons", "list", "--contactId", "100"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(server.requests[0].path, "/contacts/100/contactpersons");
    assert.equal(r.json.contact_persons[0].contact_id, "100");
  });
});

// ---------- multipart: invoices add-attachment ----------

test("invoices add-attachment posts multipart/form-data with --file", async () => {
  const tmp = mkdtempSync(join(tmpdir(), "zoho-mp-"));
  const filePath = join(tmp, "waybill.pdf");
  writeFileSync(filePath, "FAKE-PDF-CONTENT");
  try {
    await withMock({
      "POST /invoices/:id/attachment": (req, params) => ({ status: 200, body: { ok: true, invoice_id: params.id, contentType: req.headers["content-type"], rawLen: req.raw.length } }),
    }, async (server) => {
      const r = await runJson(["invoices", "add-attachment", "--id", "inv-1", "--file", filePath], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
      assert.equal(r.exitCode, 0, r.stderr);
      assert.match(r.json.contentType, /multipart\/form-data/);
      assert.ok(r.json.rawLen > 0, "raw multipart body should be non-empty");
    });
  } finally { rmSync(tmp, { recursive: true, force: true }); }
});

// ---------- sales-orders: status transitions + bulk-confirm ----------

test("sales-orders mark-confirmed posts to /salesorders/:id/status/confirmed", async () => {
  await withMock({
    "POST /salesorders/:id/status/confirmed": (_req, params) => ({ status: 200, body: { code: 0, message: "Sales order confirmed", salesorder_id: params.id } }),
  }, async (server) => {
    const r = await runJson(["sales-orders", "mark-confirmed", "--id", "so-9"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(server.requests[0].path, "/salesorders/so-9/status/confirmed");
  });
});

test("sales-orders bulk-confirm sends salesorder_ids in query", async () => {
  await withMock({
    "POST /salesorders/status/confirmed": (req) => ({ status: 200, body: { code: 0, ids: req.query.salesorder_ids } }),
  }, async (server) => {
    const r = await runJson(["sales-orders", "bulk-confirm", "--salesorder_ids", "a,b,c"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(server.requests[0].query.salesorder_ids, "a,b,c");
  });
});

// ---------- organization_id auto-injection ----------

test("organization_id is auto-injected from env", async () => {
  await withMock({
    "GET /contacts": { status: 200, body: { contacts: [], page_context: { has_more_page: false } } },
  }, async (server) => {
    const r = await runJson(["contacts", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(server.requests[0].query.organization_id, "60030298567");
  });
});

test("--organization-id flag overrides the env var", async () => {
  await withMock({
    "GET /contacts": { status: 200, body: { contacts: [], page_context: { has_more_page: false } } },
  }, async (server) => {
    const r = await runJson(["contacts", "list", "--organization-id", "OTHER-ORG"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0, r.stderr);
    assert.equal(server.requests[0].query.organization_id, "OTHER-ORG");
  });
});

// ---------- error paths ----------

test("404 → not_found", async () => {
  await withMock({ "GET /items/:id": { status: 404, body: { code: 4000, message: "nope" } } }, async (server) => {
    const r = await runJson(["items", "get", "--id", "999"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 1);
    assert.equal(r.errJson.code, "not_found");
    assert.equal(r.errJson.retryable, false);
  });
});

test("400 → validation_error with details", async () => {
  await withMock({ "POST /items": { status: 400, body: { code: 1001, message: "name required" } } }, async (server) => {
    const r = await runJson(["items", "create", "--name", ""], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 1);
    assert.equal(r.errJson.code, "validation_error");
    assert.ok(r.errJson.details);
  });
});

test("429 with Retry-After → rate_limited + retryAfter", async () => {
  await withMock({ "GET /items": { status: 429, headers: { "retry-after": "30" }, body: { code: 6, message: "Too many requests" } } }, async (server) => {
    const r = await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 1);
    assert.equal(r.errJson.code, "rate_limited");
    assert.equal(r.errJson.retryable, true);
    assert.equal(r.errJson.retryAfter, 30);
  });
});

test("500 → server_error retryable", async () => {
  await withMock({ "GET /items": { status: 500, body: { code: 9999, message: "boom" } } }, async (server) => {
    const r = await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 1);
    assert.equal(r.errJson.code, "server_error");
    assert.equal(r.errJson.retryable, true);
  });
});

test("network down → network_error", async () => {
  const server = await mockApi({});
  const url = server.url;
  await server.close();
  const r = await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: url } });
  assert.equal(r.exitCode, 1);
  assert.equal(r.errJson.code, "network_error");
  assert.equal(r.errJson.retryable, true);
});

test("BASE_URL override is honored", async () => {
  await withMock({ "GET /items": { status: 200, body: { items: [], page_context: { has_more_page: false } } } }, async (server) => {
    const r = await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.equal(r.exitCode, 0);
    assert.equal(server.requests.length, 1);
  });
});

test("user-agent header is sent", async () => {
  await withMock({ "GET /items": { status: 200, body: { items: [], page_context: { has_more_page: false } } } }, async (server) => {
    await runJson(["items", "list"], { env: { ...ENV, ZOHO_INVENTORY_BASE_URL: server.url } });
    assert.match(server.requests[0].headers["user-agent"], /zoho-inventory-cli\//);
  });
});

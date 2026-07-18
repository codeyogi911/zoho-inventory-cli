---
type: pattern
applies-to: ["*.list"]
source: docs
confidence: high
extracted: 2026-04-26
---

# Page-based pagination

Zoho Inventory uses page numbers, not cursors.

- Query params: `page` (1-indexed) and `per_page` (server default 200, server cap 200).
- Response body: `{ <resource>: [...], page_context: { page, per_page, has_more_page, ... } }`.
- Continue paging while `page_context.has_more_page === true`.

## Using the CLI

| Goal | Command |
|---|---|
| First page (server defaults) | `zoho-inventory-cli items list` |
| Specific page | `zoho-inventory-cli items list --page 2` |
| Tighter page size | `zoho-inventory-cli items list --per_page 50` |
| Walk every page | `zoho-inventory-cli items list --all` |

`--all` flips on the page-walking iterator: it increments `page` until `has_more_page` is false and concatenates the items array into one JSON output.

## Why not cursors?

Zoho's API predates cursor-pagination conventions. The `page_context` shape is identical across modules — items, contacts, invoices, sales orders all use the same scaffolding. The CLI's `paginate()` helper (`lib/api.mjs`) finds the first array-valued field in the response object as the items array.

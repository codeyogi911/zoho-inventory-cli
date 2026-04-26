---
name: zoho-inventory-cli-resources
description: Quick reference for every Zoho Inventory API resource × action exposed by zoho-inventory-cli. Use when the user asks "what does the items API support?", "how do I create a sales order via the CLI?", or needs the precise flag set for a specific endpoint.
allowed-tools:
  - Bash
  - Read
---

# zoho-inventory-cli-resources

Resource × action reference. Generated from `commands/*.mjs`; the runtime `--help` is the source of truth for flags. Prefer `zoho-inventory-cli <resource> <action> --help` over this file when the two disagree.

## Resources (29)

| Resource | Actions |
|---|---|
| `organizations`         | list, get, create, update |
| `contacts`              | list, get, create, update, delete, get-address, mark-active, mark-inactive, email-statement, get-statement-email, email-contact, list-comments |
| `contact-persons`       | list, get, create, update, delete, mark-as-primary |
| `item-groups`           | list, get, create, update, delete, mark-active, mark-inactive |
| `items`                 | list, get, create, update, delete, bulk-fetch, update-custom-fields, delete-image, mark-active, mark-inactive |
| `composite-items`       | list, get, create, update, delete, mark-active, mark-inactive |
| `bundles`               | list, get, create, delete |
| `inventory-adjustments` | list, get, create, update, delete |
| `transfer-orders`       | list, get, create, update, delete, mark-as-transferred |
| `sales-orders`          | list, get, create, update, delete, bulk-delete, mark-confirmed, mark-void, bulk-confirm |
| `packages`              | list, get, create, update, delete, bulk-print |
| `shipment-orders`       | get, create, update, delete, mark-delivered |
| `invoices`              | 36 actions (list/get/CRUD + status, email, attachments, comments, payments, credits, write-off, templates) |
| `retainer-invoices`     | 22 actions (CRUD + status, email, attachments, comments, templates, approval) |
| `customer-payments`     | list, get, create, update, delete, update-custom-field |
| `sales-returns`         | list, get, create, update, delete, create-receive, delete-receive |
| `credit-notes`          | 28 actions (CRUD + status, email, refunds, applied-credits, comments, templates, addresses) |
| `purchase-orders`       | list, get, create, update, delete, mark-issued, mark-cancelled |
| `purchase-receives`     | get, create, update, delete |
| `bills`                 | list, get, create, update, delete, update-custom-field, mark-open, mark-void |
| `vendor-credits`        | 21 actions (CRUD + status, refunds, applied-credits, comments) |
| `locations`             | enable, list, create, update, delete, mark-active, mark-inactive, mark-primary |
| `price-lists`           | list, create, update, delete, mark-active, mark-inactive |
| `users`                 | list, get, create, update, delete, get-current-user, invite, mark-active, mark-inactive |
| `tasks`                 | 17 actions (CRUD, bulk, status, comments, attachments, percentage) |
| `taxes`                 | 19 actions (taxes + tax-groups + tax-authorities + tax-exemptions, all CRUD) |
| `currencies`            | list, get, create, update, delete |
| `delivery-challans`     | 17 actions (CRUD + status, email, attachments, comments, templates, return) |
| `reporting-tags`        | 14 actions (CRUD + options, visibility, defaults, order) |

Total: **316 endpoints** across 29 resources.

## Patterns shared across resources

- **`--id` is the primary resource id flag.** Path templates use `:id` consistently (e.g. `/contacts/:id`, `/salesorders/:id/status/void`). Sub-resource ids use named flags: `--commentId`, `--documentId`, `--refundId`, `--billId`, `--templateId`, `--paymentId`, `--creditId`, `--invoiceId`, `--receiveId`, `--taxGroupId`, `--taxAuthorityId`, `--taxExemptionId`, `--optionId`, `--contactId`.

- **Pagination.** Every `list` action accepts `--page` and `--per_page`. Combined with `--all`, the CLI walks every page until `has_more_page` is false.

- **Raw body escape hatch.** Every non-GET, non-DELETE, non-multipart action accepts `--body '<json>'` to send a fully custom JSON payload, overriding individual flags. Useful when the API gains new fields or for nested shapes (line_items, addresses).

- **Multipart upload.** Six actions take `--file <path>`:
  - `item-groups create`
  - `invoices add-attachment`
  - `retainer-invoices email`
  - `retainer-invoices add-attachment`
  - `tasks add-attachment`
  - `delivery-challans add-attachment`

- **Organization override.** All actions accept `--organization-id <id>` (overrides `ZOHO_INVENTORY_ORG_ID` env). Auto-injected as `?organization_id=` on every request.

- **Status transitions.** Each transactional document has `mark-*` / `void` actions that POST to `/<resource>/{id}/status/<status>` (or to `/<resource>/{id}/<verb>` for the legacy quirky paths — see `knowledge/url-quirks.md`).

## Discovering flags

Every action documents its flags via `--help`:

```
zoho-inventory-cli sales-orders create --help
zoho-inventory-cli invoices apply-credits --help
```

The help text is generated from the same registry the dispatcher uses, so it never drifts from real behaviour.

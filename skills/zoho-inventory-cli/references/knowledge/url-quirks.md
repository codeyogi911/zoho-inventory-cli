---
type: quirk
applies-to: ["items.update-custom-fields","invoices.update-custom-field","customer-payments.update-custom-field","bills.update-custom-field","taxes.*","currencies.*","locations.enable"]
source: docs
confidence: high
extracted: 2026-04-26
---

# URL quirks in the Zoho Inventory API

A few endpoints break Zoho's own pluralization or routing patterns. They're documented here because regenerating from docs without noticing breaks them.

## Singular path segments for custom fields

These endpoints use the **singular** resource segment, not plural:

| Endpoint | Resource action |
|---|---|
| `PUT /item/{id}/customfields`              | `items.update-custom-fields` |
| `PUT /invoice/{id}/customfields`           | `invoices.update-custom-field` |
| `PUT /customerpayment/{id}/customfields`   | `customer-payments.update-custom-field` |
| `PUT /bill/{id}/customfields`              | `bills.update-custom-field` |

Plural-prefixed paths (`/items/{id}/customfields`) return 404. Don't normalize.

## `/settings/...` prefix

Tax-related and currency-related resources live under `/settings/`:

- Taxes:      `/settings/taxes`, `/settings/taxgroups`, `/settings/taxauthorities`, `/settings/taxexemptions`
- Currencies: `/settings/currencies`
- Locations:  `/settings/locations/enable` (one-time toggle), but the rest of locations are at `/locations/...` directly.

## Bundles have their own resource

Although the `compositeitems` doc page also documents `bundles`, they're separate URLs (`/compositeitems` vs `/bundles`) with their own ids. The CLI exposes them as separate resources for that reason.

## Some inconsistent verbs

Status changes don't always use the same path pattern:

- Most: `POST /<resource>/{id}/status/<status>` (sales orders, invoices, retainer invoices, bills)
- Tasks: `POST /tasks/{id}/markasopen` etc — no `/status/` segment.
- Transfer orders: `POST /transferorders/{id}/markastransferred` — same.
- Locations: `POST /locations/{id}/active`, `/inactive`, `/markasprimary` — yet another shape.

The CLI normalizes the *action verb* (`mark-open`, `mark-active`, `mark-primary`) but the path templates honor the documented quirks.

---
name: zoho-inventory-cli-knowledge
description: Capture and consult business rules and runtime quirks for the Zoho Inventory API. Use when the user asks "what are the gotchas with this API?", needs to record a finding from a live API run, or wants to look up Indian GST / multi-location / SO-cycle rules.
allowed-tools:
  - Read
  - Write
---

# zoho-inventory-cli-knowledge

API knowledge for Zoho Inventory lives under `knowledge/`. Each file has YAML frontmatter and a free-form body.

## When to read

Before any non-trivial workflow, read every file in `knowledge/`. The files are intentionally small — meant to be read in full, not searched.

## When to write

After a workflow surfaces a non-obvious finding (an undocumented enum value, a sequencing requirement, a plan-tier limit, a per-DC quirk, a Zoho error code that maps to a business rule), append a new file. Filename: `knowledge/<short-topic>.md`. Frontmatter:

```yaml
---
type: gotcha | pattern | shortcut | quirk | business-rule
applies-to: ["sales-orders.create", "invoices.email"]   # optional but useful
source: docs | runtime
confidence: high | medium | low
extracted: 2026-04-26
---
```

Body: prose. Cite the surface that produced the finding (response message, dashboard string, runtime error, doc page URL). Don't include API secrets.

## Existing knowledge

| File | Type | Applies to |
|---|---|---|
| `knowledge/oauth-refresh.md` | business-rule | `*` (auth) |
| `knowledge/organization-id.md` | business-rule | `*` |
| `knowledge/header-format.md` | quirk | `*` (auth wire format) |
| `knowledge/pagination.md` | pattern | `*.list` |
| `knowledge/rate-limit.md` | pattern | `*` |
| `knowledge/auth-scopes.md` | pattern | `*` |
| `knowledge/india-gst-and-locations.md` | business-rule | transactional documents |
| `knowledge/composite-items-vs-bundles.md` | business-rule | `composite-items.*`, `bundles.*`, `items.*` |
| `knowledge/sales-order-cycle.md` | business-rule | `sales-orders.*`, `packages.*`, `shipment-orders.*`, `invoices.*`, `sales-returns.*` |
| `knowledge/url-quirks.md` | quirk | custom-fields, settings, status transitions |

## Anti-patterns

- ❌ Don't write a knowledge file for the obvious. The first three from the table above (oauth, org-id, header-format) are mandatory because they're surprising; "send POST to create" is not.
- ❌ Don't duplicate `--help`. The CLI's per-action help is generated from the registry; flag descriptions belong there, not in `knowledge/`.
- ❌ Don't keep stale entries. When the API changes (sync-check reports drift), prune knowledge that no longer applies.

---
name: zoho-inventory-cli
description: Use zoho-inventory-cli for Zoho Inventory API work. Covers authentication, resource/action help, command workflows, and provider quirks from the generated clify CLI. Triggers on "Zoho Inventory", "zoho-inventory", "zoho-inventory-cli", API operations, auth setup, list/get/create/update/delete, and troubleshooting CLI output.
---

# zoho-inventory-cli

Use this skill whenever a task touches the Zoho Inventory API through `zoho-inventory-cli`.

Before non-trivial work, read:

- `references/auth.md`
- `references/resources.md`
- every relevant file in `references/knowledge/`

Prefer runtime help over memorized flags:

```bash
zoho-inventory-cli --help
zoho-inventory-cli <resource> --help
zoho-inventory-cli <resource> <action> --help
zoho-inventory-cli login --status --json
```

Global flags: `--json`, `--dry-run`, `--verbose`, `--all`, `--version`. Dry-run output redacts credential headers by default; `--show-secrets` is debug-only.

## Resources

- `bills` (8 actions)
- `bundles` (4 actions)
- `composite-items` (7 actions)
- `contact-persons` (6 actions)
- `contacts` (12 actions)
- `credit-notes` (29 actions)
- `currencies` (5 actions)
- `customer-payments` (6 actions)
- `delivery-challans` (17 actions)
- `inventory-adjustments` (5 actions)
- `invoices` (36 actions)
- `item-groups` (7 actions)
- `items` (10 actions)
- `locations` (8 actions)
- `organizations` (4 actions)
- `packages` (6 actions)
- `price-lists` (6 actions)
- `purchase-orders` (7 actions)
- `purchase-receives` (4 actions)
- `reporting-tags` (14 actions)
- `retainer-invoices` (22 actions)
- `sales-orders` (12 actions)
- `sales-returns` (7 actions)
- `shipment-orders` (5 actions)
- `tasks` (17 actions)
- `taxes` (19 actions)
- `transfer-orders` (6 actions)
- `users` (9 actions)
- `vendor-credits` (21 actions)

## Resource Actions

| Resource | Actions |
|---|---|
| `bills` | `list`, `get`, `create`, `update`, `delete`, `update-custom-field`, `mark-open`, `mark-void` |
| `bundles` | `list`, `get`, `create`, `delete` |
| `composite-items` | `list`, `get`, `create`, `update`, `delete`, `mark-active`, `mark-inactive` |
| `contact-persons` | `list`, `get`, `create`, `update`, `delete`, `mark-as-primary` |
| `contacts` | `list`, `get`, `create`, `update`, `delete`, `get-address`, `mark-active`, `mark-inactive`, `email-statement`, `get-statement-email`, `email-contact`, `list-comments` |
| `credit-notes` | `list`, `get`, `create`, `update`, `delete`, `email`, `get-email-content`, `void`, `convert-to-draft`, `convert-to-open`, `submit`, `approve`, `email-history`, `update-billing-address`, `update-shipping-address`, `list-templates`, `update-template`, `apply-credits-to-invoices`, `list-invoices-credited`, `delete-applied-credits`, `add-comment`, `list-comments`, `delete-comment`, `list-refunds`, `refund`, `list-credit-note-refunds`, `get-refund`, `update-refund`, `delete-refund` |
| `currencies` | `list`, `get`, `create`, `update`, `delete` |
| `customer-payments` | `list`, `get`, `create`, `update`, `delete`, `update-custom-field` |
| `delivery-challans` | `list`, `get`, `create`, `update`, `delete`, `mark-open`, `mark-delivered`, `mark-returned`, `mark-undelivered`, `return-items`, `undo-return`, `add-attachment`, `get-attachment`, `delete-attachment`, `list-templates`, `update-template`, `update-shipping-address` |
| `inventory-adjustments` | `list`, `get`, `create`, `update`, `delete` |
| `invoices` | `list`, `get`, `create`, `update`, `delete`, `mark-sent`, `mark-void`, `mark-draft`, `update-custom-field`, `email`, `get-email-content`, `email-invoices`, `get-payment-reminder`, `disable-reminder`, `enable-reminder`, `bulk-export`, `bulk-print`, `write-off`, `cancel-writeoff`, `apply-credits`, `list-payments`, `list-credits-applied`, `delete-payment`, `delete-credit`, `update-billing-address`, `update-shipping-address`, `list-templates`, `update-template`, `add-attachment`, `get-attachment`, `update-attachment`, `delete-attachment`, `add-comment`, `list-comments`, `update-comment`, `delete-comment` |
| `item-groups` | `list`, `get`, `create`, `update`, `delete`, `mark-active`, `mark-inactive` |
| `items` | `list`, `get`, `create`, `update`, `delete`, `bulk-fetch`, `update-custom-fields`, `delete-image`, `mark-active`, `mark-inactive` |
| `locations` | `enable`, `list`, `create`, `update`, `delete`, `mark-active`, `mark-inactive`, `mark-primary` |
| `organizations` | `list`, `get`, `create`, `update` |
| `packages` | `list`, `get`, `create`, `update`, `delete`, `bulk-print` |
| `price-lists` | `list`, `create`, `update`, `delete`, `mark-active`, `mark-inactive` |
| `purchase-orders` | `list`, `get`, `create`, `update`, `delete`, `mark-issued`, `mark-cancelled` |
| `purchase-receives` | `get`, `create`, `update`, `delete` |
| `reporting-tags` | `list`, `create`, `update`, `delete`, `mark-default-option`, `update-options`, `update-visibility-conditions`, `mark-active`, `mark-inactive`, `mark-option-active`, `mark-option-inactive`, `get-options-detail`, `get-all-options`, `reorder` |
| `retainer-invoices` | `list`, `get`, `create`, `update`, `delete`, `mark-sent`, `mark-void`, `mark-draft`, `submit-approval`, `approve`, `email`, `get-email-content`, `update-billing-address`, `list-templates`, `update-template`, `add-attachment`, `get-attachment`, `delete-attachment`, `add-comment`, `list-comments`, `update-comment`, `delete-comment` |
| `sales-orders` | `list`, `get`, `create`, `update`, `delete`, `bulk-delete`, `mark-confirmed`, `mark-void`, `bulk-confirm`, `add-comment`, `list-comments`, `delete-comment` |
| `sales-returns` | `list`, `get`, `create`, `update`, `delete`, `create-receive`, `delete-receive` |
| `shipment-orders` | `get`, `create`, `update`, `delete`, `mark-delivered` |
| `tasks` | `list`, `get`, `create`, `update`, `delete`, `bulk-update`, `bulk-delete`, `update-completed-percentage`, `mark-open`, `mark-ongoing`, `mark-completed`, `add-comment`, `list-comments`, `delete-comment`, `add-attachment`, `get-document`, `delete-document` |
| `taxes` | `list`, `get`, `create`, `update`, `delete`, `create-tax-group`, `get-tax-group`, `update-tax-group`, `delete-tax-group`, `create-tax-authority`, `list-tax-authorities`, `get-tax-authority`, `update-tax-authority`, `delete-tax-authority`, `create-tax-exemption`, `list-tax-exemptions`, `get-tax-exemption`, `update-tax-exemption`, `delete-tax-exemption` |
| `transfer-orders` | `list`, `get`, `create`, `update`, `delete`, `mark-as-transferred` |
| `users` | `list`, `get`, `create`, `update`, `delete`, `get-current-user`, `invite`, `mark-active`, `mark-inactive` |
| `vendor-credits` | `list`, `get`, `create`, `update`, `delete`, `mark-open`, `mark-void`, `submit`, `approve`, `apply-credits-to-bill`, `list-bills-credited`, `delete-bills-credited`, `refund`, `list-refunds`, `get-refund`, `update-refund`, `delete-refund`, `list-vendor-credit-refunds`, `add-comment`, `list-comments`, `delete-comment` |

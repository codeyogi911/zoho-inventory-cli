# Zoho Inventory CLI Resources

The runtime help is the source of truth for flags:

```bash
zoho-inventory-cli --help
zoho-inventory-cli <resource> --help
zoho-inventory-cli <resource> <action> --help
```

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

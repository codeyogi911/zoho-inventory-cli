---
type: gotcha
applies-to: [
  "credit-notes.create",
  "sales-returns.create",
  "packages.create",
  "shipment-orders.create",
  "shipment-orders.update",
  "vendor-credits.create",
  "purchase-receives.create",
]
source: zoho-docs + runtime verification
---

# Convert-from-X creates use `?fk=…` URL query params, not body fields

Several Zoho Inventory `POST` endpoints carry the parent foreign key as a
**URL query parameter** instead of a JSON body field. Putting the FK in the
body is silently dropped — the resulting record exists for the customer/total/
date but has no structural link back to the source.

| Action | Wire pattern | Required? |
|---|---|---|
| `POST /creditnotes` | `?invoice_id=<INV>` | No (optional convert mode — equivalent to UI's "Issue credit note from invoice") |
| `POST /salesreturns` | `?salesorder_id=<SO>` | No (optional convert-from-SO mode) |
| `POST /packages` | `?salesorder_id=<SO>` | **Yes** — every package is by definition derived from a SO |
| `POST /shipmentorders` | `?salesorder_id=<SO>` | Optional |
| `PUT  /shipmentorders/:id` | `?salesorder_id=<SO>&package_ids=<P,P>` | Required when re-mapping |
| `POST /vendorcredits` | `?bill_id=<BILL>` | No (optional convert-from-bill mode) |
| `POST /purchasereceives` | `?purchaseorder_id=<PO>` | **Yes** per Zoho docs narrative |

The CLI marks each of these flags as `queryFlags` in the generated
`commands/<resource>.mjs` action def; `bin/zoho-inventory-cli.mjs` strips
them from the body and routes them to the URL. To verify a given action:

```
node bin/zoho-inventory-cli.mjs credit-notes create \
  --dry-run --invoice_id <INV> --customer_id <C>
```

`__dryRun.url` should contain `?invoice_id=<INV>` and `__dryRun.body` must
not include `invoice_id`.

## Why this matters

A CN created via the API by passing `reference_number: "<invoice_number>"`
sets only the text label. The structural `invoice_id` field stays null,
which means downstream "is this invoice already credited?" detection logic
that walks `invoice.applied_credits` or scans CNs by `invoice_id` will miss
it. The same applies to packages, vendor credits, etc. that don't have the
proper FK on the header.

For credit notes specifically, this was caught when an audit script
classified API-created CNs as orphaned and Fix Coffee's
`scripts/refund_cleanup_audit.py` had to fall back to a four-way detection
union. See `Fix Coffee/.agents/skills/zoho-inventory-cli-knowledge/
knowledge/credit-notes-invoice-linkage.md` for that detection chain.

## Adding new convert-from-X endpoints

If a future Zoho release adds another converter (e.g. retainer-invoice from
estimate), edit `scripts/gen-resources.mjs` and put the FK on the action's
`queryFlags`:

```js
{ action: "create", method: "POST", path: "/retainerinvoices",
  queryFlags: ["estimate_id"] },
```

then `node scripts/gen-resources.mjs && node scripts/gen-clify-meta.mjs`.

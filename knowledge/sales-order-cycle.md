---
type: business-rule
applies-to: ["sales-orders.*","packages.*","shipment-orders.*","invoices.*","sales-returns.*"]
source: docs
confidence: high
extracted: 2026-04-26
---

# Sales Order cycle (Zoho's golden path)

Zoho models fulfillment as a chain of objects. Skipping a step or doing it out of order trips up the inventory math.

```
SalesOrder ─▶ Package ─▶ ShipmentOrder ─▶ Invoice ─▶ CustomerPayment
                                                │
                                                └─▶ SalesReturn ─▶ CreditNote ─▶ Refund
```

## Forward path

1. **`sales-orders create`** — captures the customer order. Status: `draft` → `confirmed` (via `mark-confirmed`).
2. **`packages create --salesorder_id <id>`** — picks line items into a package. Decrements committed stock.
3. **`shipment-orders create --salesorder_id <id>` (with `package_ids` in body)** — assigns courier + tracking. Decrements actual stock.
4. **`shipment-orders mark-delivered`** — confirms delivery (optional but useful for reporting).
5. **`invoices create`** with line items referencing the SO — books revenue. Status: `draft` → `sent` (via `mark-sent`).
6. **`customer-payments create`** with the invoice in the `invoices` array — settles AR.

## Cancellation path (CLAUDE.md guardrail)

When an order is cancelled:

- **Goods shipped** → `sales-returns create --salesorder_id <id>` (RMA), receive via `create-receive`, then `credit-notes create` and `refund` if money already moved.
- **Goods not shipped** → `sales-orders mark-void` (or delete SO if it never confirmed). No CN.

The Fix Coffee `cancelled-orders` skill encodes this — RMA on shipped, void on unshipped, never the reverse.

## Common mistakes

- Creating an `invoice` without a corresponding `package` + `shipmentorder` → stock isn't decremented. Reports will lie.
- Creating an `invoice` for a SO that's still in `draft` → invoice books revenue but the SO doesn't show as fulfilled in dashboards.
- Refunding via the company bank account instead of the channel clearing account (Amazon Clearing, Razorpay Clearing, etc.) — see CLAUDE.md "Amazon return-refund accounting" rule.

## Drop-shipment variant

For drop-shipped items: skip `packages` and `shipment-orders`; the PO itself triggers shipment from supplier. The SO line item gets `is_dropshipment: true` and a linked PO. Stock never touches our inventory.

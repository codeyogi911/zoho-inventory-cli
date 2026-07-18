---
type: business-rule
applies-to: ["invoices.create","sales-orders.create","purchase-orders.create","bills.create","credit-notes.create","delivery-challans.create"]
source: docs
confidence: high
extracted: 2026-04-26
---

# Indian GST + multi-location guardrails

These apply to organizations on the India edition of Zoho Inventory (`ZOHO_INVENTORY_DC=in`).

## GST

- Every transaction document (invoice, SO, PO, bill, credit note, delivery challan) needs a `place_of_supply` (state code) for GST classification.
- Customer/vendor record needs a `gst_treatment` (`business_gst`, `business_none`, `consumer`, `overseas`, `sez`, `sez_developer`, `deemed_export`) and, where applicable, a `gst_no` (15-char GSTIN).
- For B2B, omitting GSTIN classifies the txn as B2C and the GST report is wrong.
- "Reverse charge" transactions need `is_reverse_charge_applied: true` on the line items. Reverse-charge bills inflate output liability and require matching journal entries — this is a Zoho Books concern, not Inventory's.

## Locations

Multi-location is enabled per org (`locations enable` once, then `locations create` per warehouse).

- Every line item on transaction docs takes a `location_id`. If you omit it, Zoho applies the **primary** location.
- Stock visibility on `items get` shows per-location balances under `locations[]`.

## Fix Coffee specific guardrail

For the Fix Coffee org (`Nav Organic Foods Private Limited`):

- **Ahimamau is the sole physical warehouse.** All `from_location_id`, `to_location_id`, line-item `location_id`, and stock movements must reference Ahimamau.
- "Head Office" is an address-only location. No stock should sit there. If `inventory adjustments`, `transfer-orders`, or stock counts surface stock at Head Office, that's a data error — flag it, then move it.
- See [[CLAUDE.md#warehouse-ahimamau-only]] for the rationale.

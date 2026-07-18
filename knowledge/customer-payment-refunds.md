---
type: workflow
applies-to: ["customer-payments.refund", "customer-payments.list-refunds", "customer-payments.get-refund", "customer-payments.update-refund", "customer-payments.delete-refund"]
source: zoho-docs
verified: 2026-07-18
---

# Customer payment refunds

Zoho exposes customer-payment refunds as nested resources below the payment:

- `POST /customerpayments/{payment_id}/refunds`
- `GET /customerpayments/{payment_id}/refunds`
- `GET /customerpayments/{payment_id}/refunds/{refund_id}`
- `PUT /customerpayments/{payment_id}/refunds/{refund_id}`
- `DELETE /customerpayments/{payment_id}/refunds/{refund_id}`

The CLI maps these to `refund`, `list-refunds`, `get-refund`,
`update-refund`, and `delete-refund`. Pass the payment as `--id` and the
refund as `--refundId`.

Deleting a refund reverses that refund record; it does not delete the parent
customer payment. Always dry-run the exact nested path, then re-read the
payment before and after the live delete.

Official reference:

- https://www.zoho.com/books/api/v3/customer-payments/

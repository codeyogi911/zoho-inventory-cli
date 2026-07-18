---
type: pattern
applies-to: ["*"]
source: docs
confidence: high
extracted: 2026-04-26
---

# OAuth scopes

Zoho scopes are `ZohoInventory.<module>.<verb>`. Verbs are `READ`, `CREATE`, `UPDATE`, `DELETE`, or `ALL`.

| Module       | Sample scope |
|---|---|
| Items        | `ZohoInventory.items.READ`, `ZohoInventory.items.CREATE` |
| Contacts     | `ZohoInventory.contacts.READ`, `ZohoInventory.contacts.UPDATE` |
| Sales Orders | `ZohoInventory.salesorders.ALL` |
| Invoices     | `ZohoInventory.invoices.ALL` |
| Settings (taxes, currencies, locations) | `ZohoInventory.settings.READ` |

For a Self Client that needs to drive everything, mint with `ZohoInventory.fullaccess.all`.

If a request returns HTTP 403 / `forbidden`, the scope is missing — re-mint the refresh token with the right scope set.

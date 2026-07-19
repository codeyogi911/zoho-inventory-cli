# Zoho Inventory API — offline reference (DERIVED)

> **Derived, not authoritative.** Zoho publishes no OpenAPI spec and no markdown for
> Inventory. These files are text extracted from the official HTML pages at
> <https://www.zoho.com/inventory/api/v1/>. Every file carries its canonical URL — **when a detail matters, open the
> URL. If the extraction and the page disagree, the page wins.**

Contrast with the sibling CLIs, where the generated docs *are* citable:
`zoho-desk-cli` renders Zoho's official OAS; `amazon-sp-api-cli` renders Amazon's
official models; `shopify-admin-cli` mirrors Shopify's own markdown.

Regenerate with `npm run docs:api`. Do not hand-edit.

| resource | source | bytes |
|---|---|---|
| [sales-orders](sales-orders.md) | [`/salesorders/`](https://www.zoho.com/inventory/api/v1/salesorders/) | 97457 |
| [invoices](invoices.md) | [`/invoices/`](https://www.zoho.com/inventory/api/v1/invoices/) | 218546 |
| [contacts](contacts.md) | [`/contacts/`](https://www.zoho.com/inventory/api/v1/contacts/) | 88048 |
| [items](items.md) | [`/items/`](https://www.zoho.com/inventory/api/v1/items/) | 175731 |
| [purchase-orders](purchase-orders.md) | [`/purchaseorders/`](https://www.zoho.com/inventory/api/v1/purchaseorders/) | 92097 |
| [bills](bills.md) | [`/bills/`](https://www.zoho.com/inventory/api/v1/bills/) | 87541 |
| [sales-returns](sales-returns.md) | [`/salesreturns/`](https://www.zoho.com/inventory/api/v1/salesreturns/) | 48545 |
| [packages](packages.md) | [`/packages/`](https://www.zoho.com/inventory/api/v1/packages/) | 47004 |
| [shipment-orders](shipment-orders.md) | [`/shipmentorders/`](https://www.zoho.com/inventory/api/v1/shipmentorders/) | 34796 |
| [organizations](organizations.md) | [`/organizations/`](https://www.zoho.com/inventory/api/v1/organizations/) | 21700 |
| [item-groups](item-groups.md) | [`/itemgroups/`](https://www.zoho.com/inventory/api/v1/itemgroups/) | 31615 |
| [composite-items](composite-items.md) | [`/compositeitems/`](https://www.zoho.com/inventory/api/v1/compositeitems/) | 101668 |
| [transfer-orders](transfer-orders.md) | [`/transferorders/`](https://www.zoho.com/inventory/api/v1/transferorders/) | 59159 |
| [purchase-receives](purchase-receives.md) | [`/purchasereceives/`](https://www.zoho.com/inventory/api/v1/purchasereceives/) | 93315 |
| [inventory-adjustments](inventory-adjustments.md) | [`/inventoryadjustments/`](https://www.zoho.com/inventory/api/v1/inventoryadjustments/) | 53494 |
| [users](users.md) | [`/users/`](https://www.zoho.com/inventory/api/v1/users/) | 30511 |
| [locations](locations.md) | [`/locations/`](https://www.zoho.com/inventory/api/v1/locations/) | 40864 |

## Not available

These CLI resources have no page under the Inventory docs. Most are Books-side
resources (credit notes, customer payments, vendor credits, retainer invoices,
taxes/settings), and **www.zoho.com/books/api/v3/ returns 403 to automated fetches**
— checked 2026-07-19, so they cannot be mirrored here. Open those pages in a browser.
The rest are documented inside a related resource's page. Check before assuming absence.

| resource | tried | reason |
|---|---|---|
| price-lists | `/pricebooks/` | 404 Not Found |
| delivery-challans | `/deliverychallans/` | 404 Not Found |
| retainer-invoices | `/retainerinvoices/` | 404 Not Found |
| vendor-credits | `/vendorcredits/` | 404 Not Found |
| credit-notes | `/creditnotes/` | 404 Not Found |
| customer-payments | `/customerpayments/` | 404 Not Found |
| taxes | `/settings/` | 404 Not Found |
| currencies | `/currencies/` | 404 Not Found |
| contact-persons | `/contactpersons/` | 404 Not Found |
| reporting-tags | `/reportingtags/` | 404 Not Found |
| bundles | `/bundles/` | 404 Not Found |

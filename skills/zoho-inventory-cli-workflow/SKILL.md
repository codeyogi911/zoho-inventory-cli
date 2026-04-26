---
name: zoho-inventory-cli-workflow
description: Drive end-to-end workflows on the Zoho Inventory API via zoho-inventory-cli — items, contacts, sales orders, invoices, packages, shipments, credit notes, purchase orders, bills, vendor credits, taxes, locations, reporting tags, and the rest. Use when the user asks to create/list/update/delete Zoho Inventory entities, run the sales-order cycle, attach files to invoices/challans, or chain multiple Zoho operations. Auto-refreshes OAuth on every run.
allowed-tools:
  - Bash
  - Read
  - Write
---

# zoho-inventory-cli-workflow

Wrap the [Zoho Inventory API](https://www.zoho.com/inventory/api/v1/introduction/) via `zoho-inventory-cli`. The CLI covers the full module surface — 29 resources, 316 endpoints — with consistent flag conventions and structured error output.

**Before running any command, read every file in `knowledge/`.** Don't skip — the Zoho API has Indian-GST rules, location semantics, the sales-order cycle, OAuth quirks, and URL inconsistencies that aren't obvious from `--help`.

## Triggers

- User says `/zoho-inventory-cli` or asks to manipulate `items`, `contacts`, `sales-orders`, `invoices`, `purchase-orders`, `bills`, `credit-notes`, `vendor-credits`, `packages`, `shipment-orders`, `delivery-challans`, `inventory-adjustments`, `transfer-orders`, `taxes`, `locations`, etc., on Zoho Inventory.
- User asks the agent to run the sales-order cycle (SO → package → shipment → invoice → payment).
- User asks to attach a file to an invoice / retainer invoice / delivery challan / task.
- User asks to walk a paginated list of Zoho records.

## Setup

The CLI uses Zoho OAuth (refresh-token flow). Required env vars:

```
ZOHO_INVENTORY_REFRESH_TOKEN=1000.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ZOHO_INVENTORY_CLIENT_ID=1000.xxxxxxxxxx
ZOHO_INVENTORY_CLIENT_SECRET=xxxxxxxxxx
ZOHO_INVENTORY_ORG_ID=60030298567
ZOHO_INVENTORY_DC=in     # com | eu | in | com.au | jp | ca | com.cn | sa
```

Or run `zoho-inventory-cli login --refresh-token <t> --client-id <id> --client-secret <s>` once and the CLI persists them at `~/.config/zoho-inventory-cli/credentials.json` (mode 0600). Access tokens are auto-refreshed on every run; check status with `zoho-inventory-cli login --status --json`.

For tests / mocks, point at a local server: `ZOHO_INVENTORY_BASE_URL=http://127.0.0.1:<port>`.

## Resources at a glance

**Master data**: `organizations`, `contacts`, `contact-persons`, `items`, `item-groups`, `composite-items`, `bundles`, `locations`, `price-lists`, `users`, `taxes`, `currencies`, `reporting-tags`.

**Sales side**: `sales-orders`, `packages`, `shipment-orders`, `invoices`, `retainer-invoices`, `customer-payments`, `sales-returns`, `credit-notes`, `delivery-challans`.

**Purchase side**: `purchase-orders`, `purchase-receives`, `bills`, `vendor-credits`.

**Stock control**: `inventory-adjustments`, `transfer-orders`.

**Misc**: `tasks`.

Use `zoho-inventory-cli <resource> --help` for actions, or `zoho-inventory-cli <resource> <action> --help` for the per-action flag list.

## Global flags

- `--json` — force JSON output (auto when piped)
- `--dry-run` — print the request without sending
- `--verbose` — print response status & headers to stderr
- `--all` — auto-paginate list actions (`page`/`per_page`, walked until `has_more_page` is false)
- `--version`, `-v`
- `--help`, `-h`

## Knowledge system

Read every file in `knowledge/` before issuing commands. Key files:

| File | What it covers |
|---|---|
| `oauth-refresh.md` | How the CLI mints access tokens; refresh-token shelf life |
| `header-format.md` | `Zoho-oauthtoken` prefix (not `Bearer`) — non-obvious gotcha |
| `organization-id.md` | Required on every request; how the CLI auto-injects |
| `pagination.md` | Page-based, `--all` walks every page |
| `rate-limit.md` | 100/min/org; 429 → `rate_limited` (not retried by CLI) |
| `auth-scopes.md` | `ZohoInventory.<module>.<verb>` |
| `india-gst-and-locations.md` | GST treatment, place_of_supply, Ahimamau warehouse rule |
| `composite-items-vs-bundles.md` | How those three are different |
| `sales-order-cycle.md` | The SO → package → shipment → invoice → payment chain |
| `url-quirks.md` | Singular `/item/customfields`, `/settings/...`, status-path inconsistencies |

After a workflow surfaces a non-obvious finding, add a new `knowledge/<short-topic>.md` — frontmatter `type: gotcha | pattern | shortcut | quirk | business-rule`.

## Common workflows

### 1. Run the daily Fix Coffee cancellations housekeeping

```
zoho-inventory-cli sales-orders list --status onhold --all --json | jq '.[].salesorder_id'
# inspect each, then:
zoho-inventory-cli sales-orders mark-void --id <so_id>
# or for shipped orders:
zoho-inventory-cli sales-returns create --body '{"salesorder_id":"<so>","line_items":[...]}'
```

### 2. Reconcile an Amazon return into Zoho

See [[CLAUDE.md#amazon-return-refund-accounting]] — straight Amazon return: SR → CN against Amazon Clearing, never company bank.

```
zoho-inventory-cli sales-returns create --salesorder_id <so_id> --body '{"line_items":[...]}'
zoho-inventory-cli sales-returns create-receive --body '{"salesreturn_id":"<sr>","line_items":[...]}'
zoho-inventory-cli credit-notes create --customer_id <c> --body '{"line_items":[...],"reference_number":"<sr_no>"}'
zoho-inventory-cli credit-notes refund --id <cn_id> --body '{"date":"2026-04-26","amount":1234,"from_account_id":"<amazon-clearing>"}'
```

### 3. Walk every contact, find Fix Coffee customers without GSTIN

```
zoho-inventory-cli contacts list --all --json | jq '.[] | select(.gst_treatment=="business_gst" and (.gst_no // "")=="")'
```

### 4. Attach a courier waybill PDF to an invoice

```
zoho-inventory-cli invoices add-attachment --id <inv_id> --file ./waybill.pdf
```

The CLI sends `multipart/form-data` with the file part named `attachment`.

### 5. Bulk-confirm a batch of sales orders

```
zoho-inventory-cli sales-orders bulk-confirm --salesorder_ids "id1,id2,id3"
```

## Anti-patterns

- ❌ Skipping `knowledge/` — Indian GST and the SO cycle quirks bite quickly otherwise.
- ❌ Hardcoding `ZOHO_INVENTORY_API_KEY` in scripts — it expires hourly. Use the refresh-token trio.
- ❌ Storing items / SOs / invoices at "Head Office" — Fix Coffee uses Ahimamau as the sole warehouse (`india-gst-and-locations.md`).
- ❌ Using `Bearer` in the Authorization header — Zoho rejects it (`header-format.md`).

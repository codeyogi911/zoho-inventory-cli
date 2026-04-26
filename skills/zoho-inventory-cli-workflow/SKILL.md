---
name: zoho-inventory-cli-workflow
description: Drive end-to-end workflows on the Zoho Inventory API via zoho-inventory-cli. Use when the user asks to list/get/create/update/delete items, item-variants, or orders, attach files to orders, or chain multiple Zoho Inventory operations together.
allowed-tools:
  - Bash
  - Read
  - Write
---

# zoho-inventory-cli-workflow

Wrap the (fictional) [Zoho Inventory API](https://docs.zoho-inventory.test/api/v1) via `zoho-inventory-cli`. The Zoho Inventory API is a generic items / item-variants / orders surface used as the clify scaffolder's stencil — it demonstrates the patterns every generated CLI inherits.

**Before running any command, read every file in `knowledge/`.**

## Triggers

- User says `/zoho-inventory-cli` or `/zoho-inventory`
- User asks to manipulate `items`, `item-variants`, or `orders` on Zoho Inventory
- User asks to attach a file to an order
- User asks the agent to demonstrate a pagination or idempotency workflow

## Setup

The CLI needs an API token. Either:

- Set `ZOHO_INVENTORY_API_KEY` in the environment, or
- Run `zoho-inventory-cli login --token <value>` to persist it at `~/.config/zoho-inventory-cli/credentials.json`.

Check status with `zoho-inventory-cli login --status --json`.

For tests, point at a mock server with `ZOHO_INVENTORY_BASE_URL=http://127.0.0.1:<port>`.

## Quick reference

| Resource | Actions | Notes |
|---|---|---|
| `items` | list, get, create, update, delete | Cursor pagination on list (`--all`); `--idempotency-key` on create; `--if-match` on update |
| `item-variants` | list, create | Sub-resource of items; pass parent via `--itemId` |
| `orders` | list, get, create, upload | `--idempotency-key` on create; multipart upload via `--file` on upload |

The login command is dispatched separately: `zoho-inventory-cli login [--token <t>] [--status]`.

Use `zoho-inventory-cli <resource> <action> --help` for per-action flags.

## Global flags

- `--json` — force JSON output (auto when piped)
- `--dry-run` — print request without sending
- `--verbose` — print response status & headers to stderr
- `--all` — auto-paginate list actions (cursor)
- `--version`, `-v`
- `--help`, `-h`

## Knowledge system

Read every file in `knowledge/` before issuing commands. Knowledge files capture API quirks, business rules, and patterns. After a non-trivial command sequence, append new findings as `knowledge/<short-topic>.md` with frontmatter `type:` set to `gotcha`, `pattern`, `shortcut`, `quirk`, or `business-rule`.

## Common workflows

### 1. Create an item with safe retries

```
zoho-inventory-cli items create \
  --name "Widget" --sku "W-001" --price "19.99" \
  --idempotency-key "$(uuidgen)"
```

If the request fails with a network error, repeating the same command with the same idempotency key is safe — the server returns the original response.

### 2. Walk a paginated list

```
zoho-inventory-cli items list --all --json | jq '. | length'
```

The CLI iterates `nextCursor` until the server returns `null`.

### 3. Attach a receipt to an order

```
zoho-inventory-cli orders upload --id ord-42 --file ./receipt.pdf
```

The CLI sends `multipart/form-data` with a single `file` part.

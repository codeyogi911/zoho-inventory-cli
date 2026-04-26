---
type: business-rule
applies-to: ["*"]
source: docs
confidence: high
extracted: 2026-04-26
---

# organization_id is required on every request

Zoho Inventory is multi-tenant by design. Every endpoint (except `organizations.list`, which lists all orgs the token can see) needs `?organization_id=<id>`.

## How the CLI handles it

- `ZOHO_INVENTORY_ORG_ID` env var is auto-injected as `?organization_id=` on every request.
- Per-command override: `--organization-id <id>` on any action.
- If neither is set, the request goes out with no `organization_id` and Zoho returns `4029` (invalid organization).

## Finding the id

`zoho-inventory-cli organizations list` returns every org the current token has access to. Each entry has `organization_id`. Pin one in `.env`:

```
ZOHO_INVENTORY_ORG_ID=60030298567
```

(That's an example — yours will be a different 11-digit number.)

## Multi-org workflows

If you need to operate across multiple orgs in one session, leave `ZOHO_INVENTORY_ORG_ID` unset and pass `--organization-id <id>` per command. The CLI does not refresh access tokens per org — one token serves all orgs the Self Client was authorized for.

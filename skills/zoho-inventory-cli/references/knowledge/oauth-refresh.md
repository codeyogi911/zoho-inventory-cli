---
type: business-rule
applies-to: ["*"]
source: docs
confidence: high
extracted: 2026-04-26
---

# OAuth refresh flow

Zoho Inventory uses OAuth 2.0 with refresh tokens. Access tokens expire after ~1 hour; refresh tokens never expire.

## How the CLI handles it

`zoho-inventory-cli` resolves an access token in this order:

1. `ZOHO_INVENTORY_API_KEY` env var — treated as a pre-fetched access token.
2. Cached access token in `~/.config/zoho-inventory-cli/credentials.json` if not yet expired.
3. Otherwise, exchange `ZOHO_INVENTORY_REFRESH_TOKEN` + `_CLIENT_ID` + `_CLIENT_SECRET` (from env or stored creds) at `https://accounts.zoho.<dc>/oauth/v2/token` and cache the result.

Set the trio (refresh token, client id, client secret) once via `zoho-inventory-cli login` or env vars and the CLI auto-refreshes thereafter.

## Generating the refresh token

1. In Zoho API Console (`https://api-console.zoho.<dc>/`) create a **Self Client** for your account.
2. Use scope `ZohoInventory.fullaccess.all` (or narrower per-module scopes).
3. The Self Client gives you a one-time `code`. Exchange it for a refresh + access token via `POST https://accounts.zoho.<dc>/oauth/v2/token` with `grant_type=authorization_code`.
4. Save the `refresh_token`, `client_id`, `client_secret` — these are the long-lived inputs.

## Header format

The wire-level header is **not** `Bearer`. Zoho uses its own prefix:

```
Authorization: Zoho-oauthtoken <access_token>
```

If the docs you're following say `Bearer`, they're wrong. See knowledge/header-format.md.

## Anti-patterns

- ❌ Pasting `ZOHO_INVENTORY_API_KEY` and never updating it — you'll hit `auth_invalid` after an hour.
- ❌ Sharing `~/.config/zoho-inventory-cli/credentials.json` between machines — re-run `login` per machine.
- ❌ Reusing the Zoho Desk refresh token here — the scopes are different (`ZohoDesk.*` vs `ZohoInventory.*`). Mint a separate Self Client token for Inventory.

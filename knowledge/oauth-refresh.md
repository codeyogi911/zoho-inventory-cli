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
2. Cached access token in `~/.config/zoho-inventory-cli/credentials.json`, if not yet locally expired **and** its stored `refreshTokenHash` matches the refresh token currently in play (guards against a stale cache surviving a `login` with a different account).
3. Otherwise, exchange `ZOHO_INVENTORY_REFRESH_TOKEN` + `_CLIENT_ID` + `_CLIENT_SECRET` (from env or stored creds) at `https://accounts.zoho.<dc>/oauth/v2/token` and cache the result. Set `ZOHO_INVENTORY_NO_CACHE=1` to skip writing the cache.

Set the trio (refresh token, client id, client secret) once via `zoho-inventory-cli login` or env vars and the CLI auto-refreshes thereafter.

## Concurrent processes and the shared-client token cap

Zoho's OAuth client has a cap on simultaneously-live access tokens; minting a
new one evicts the oldest **server-side**, even if the evicted token's local
`expiresAt` says it's still good. Multiple CLI processes are normal here —
scheduled Mounts and interactive sessions overlap routinely — so without
coordination, every process that sees a near-expiry cache at once mints its
own token, and each mint can evict a sibling's just-minted one. A single
process surviving a lone eviction is handled by the self-heal in
`lib/api.mjs` (drop cache, force one refresh, replay the request once) — but
under *sustained* concurrent refreshing that one retry can itself lose the
race (observed live 2026-07-22: a refresh completed, cached a token that
looked valid, and was rejected within moments; `login --status` kept
reporting a healthy session throughout, since it only checks the local
clock, never the server).

`lib/auth.mjs`'s `withRefreshLock` closes this at the source: only one
process on the machine actually calls the token endpoint at a time (a
`credentials.json.refresh.lock` file, stale after 30s in case a holder
crashed mid-refresh); everyone else waits up to 10s and re-reads the
winner's freshly-cached token instead of racing to mint their own.
`lib/config.mjs`'s `saveCredentials` writes atomically (temp file + rename)
so two writers can never interleave into a torn or clobbered credentials
file. Together these hold for every process on one machine sharing
`~/.config/zoho-inventory-cli/`; they do **not** coordinate across separate
machines/environments using the same Zoho Self Client — if this CLI ever
runs from more than one host against one refresh token, the eviction race
can still happen across hosts.

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

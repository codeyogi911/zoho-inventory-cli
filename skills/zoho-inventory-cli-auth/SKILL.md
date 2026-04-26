---
name: zoho-inventory-cli-auth
description: Manage authentication for the Zoho Inventory API via zoho-inventory-cli login. Use when the user asks how to authenticate, generate a refresh token, store/refresh credentials, switch datacenter (com|in|eu|...), or troubleshoot 401/403 errors against Zoho.
allowed-tools:
  - Bash
  - Read
---

# zoho-inventory-cli-auth

Manage credentials for `zoho-inventory-cli`. Zoho Inventory uses **OAuth 2.0 with refresh tokens**. Access tokens last ~1 hour; refresh tokens never expire. The CLI auto-refreshes — you supply the long-lived inputs once.

## Required env vars (or stored credentials)

| Var | Purpose |
|---|---|
| `ZOHO_INVENTORY_REFRESH_TOKEN` | Long-lived refresh token (starts with `1000.`) |
| `ZOHO_INVENTORY_CLIENT_ID`     | Self Client ID |
| `ZOHO_INVENTORY_CLIENT_SECRET` | Self Client secret |
| `ZOHO_INVENTORY_ORG_ID`        | Organization id (auto-injected on every request) |
| `ZOHO_INVENTORY_DC`            | Datacenter: `com` | `eu` | `in` | `com.au` | `jp` | `ca` | `com.cn` | `sa` (default `com`) |
| `ZOHO_INVENTORY_API_KEY`       | (Optional) pre-fetched access token, ~1 h validity. Bypasses refresh. |

## Resolution order

`lib/auth.mjs` resolves an access token in this order:

1. `ZOHO_INVENTORY_API_KEY` env var.
2. Cached access token in `~/.config/zoho-inventory-cli/credentials.json` (if not yet expired).
3. Refresh-token exchange — env-var trio first, then stored-credentials trio.
4. Falls back to a static `token` field in stored credentials (set via `login --token`).

If none yields a token, every command fails with `auth_missing` and a hint.

## Login

```
zoho-inventory-cli login \
  --refresh-token "$ZOHO_INVENTORY_REFRESH_TOKEN" \
  --client-id "$ZOHO_INVENTORY_CLIENT_ID" \
  --client-secret "$ZOHO_INVENTORY_CLIENT_SECRET"
```

Stores the trio at `~/.config/zoho-inventory-cli/credentials.json` (mode 0600). Subsequent runs auto-mint access tokens.

```
zoho-inventory-cli login --status --json
```

Prints `{ scheme, envVar, fromEnv, fromOAuthEnv, fromOAuthConfig, fromConfig, hasCachedAccess, cachedExpiresAt, dc, orgId, authenticated }`.

```
zoho-inventory-cli login --clear
```

Wipes the credentials file. Useful on credential rotation.

## Generating a refresh token (Self Client flow)

1. Open `https://api-console.zoho.<dc>/` (e.g. `https://api-console.zoho.in/` for India).
2. Add Client → **Self Client**. Copy the `client_id` + `client_secret`.
3. Tab → "Generate Code". Scope: `ZohoInventory.fullaccess.all` (or narrow per-module). Time: 10 min. Copy the code.
4. Exchange:
   ```
   curl -X POST "https://accounts.zoho.<dc>/oauth/v2/token?code=<code>&client_id=<id>&client_secret=<secret>&grant_type=authorization_code"
   ```
5. Save `refresh_token` → `ZOHO_INVENTORY_REFRESH_TOKEN`. (`access_token` is short-lived; ignore it.)

## Errors and remediation

| Code | HTTP | Cause | Action |
|---|---|---|---|
| `auth_missing` | — | No env var, no stored credentials | Set the trio, or run `login` |
| `auth_invalid` | 401 | Token rejected. Common causes: rotated, wrong scope, wrong DC, `Bearer` instead of `Zoho-oauthtoken` | Re-mint the refresh token; verify `ZOHO_INVENTORY_DC` matches the org's datacenter |
| `forbidden`    | 403 | Token valid, scope missing | Re-mint with the right `ZohoInventory.<module>.<verb>` scope |

The CLI **does not retry** auth errors. If `auth_invalid` recurs after a rotation, your DC may be wrong — Zoho-IN orgs reject tokens issued at `accounts.zoho.com`.

## Anti-patterns

- ❌ Pasting a static access token and expecting it to last — they expire in ~1 hour.
- ❌ Sharing `~/.config/zoho-inventory-cli/credentials.json` between machines — re-run `login` per machine.
- ❌ Reusing the Zoho **Desk** refresh token — Desk and Inventory have different scopes; mint a separate Self Client for Inventory.
- ❌ Hardcoding `Authorization: Bearer ...` in tooling that wraps this CLI — Zoho's gateway only accepts `Zoho-oauthtoken`.

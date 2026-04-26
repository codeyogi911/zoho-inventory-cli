---
name: zoho-inventory-cli-auth
description: Manage authentication for the Zoho Inventory API via zoho-inventory-cli login. Use when the user asks how to authenticate, sign in, store/refresh credentials, or troubleshoot 401/403 errors.
allowed-tools:
  - Bash
  - Read
---

# zoho-inventory-cli-auth

Manage credentials for `zoho-inventory-cli`. The Zoho Inventory API uses bearer-token auth.

## Where the token lives

`zoho-inventory-cli` reads its token in this order:

1. `ZOHO_INVENTORY_API_KEY` from the environment (or `.env`).
2. The `token` field of `~/.config/zoho-inventory-cli/credentials.json`, written by `zoho-inventory-cli login`.

If neither is set, every command fails with `auth_missing`.

## Login

```
zoho-inventory-cli login --token <value>
```

Stores the token at `~/.config/zoho-inventory-cli/credentials.json` (mode 0600).

```
zoho-inventory-cli login --status --json
```

Reports `{ scheme, envVar, fromEnv, fromConfig, authenticated }` so you can see which source is providing auth.

## Errors and remediation

| Code | HTTP | Likely cause | Action |
|---|---|---|---|
| `auth_missing` | — | No env var set, no stored credentials | Set `ZOHO_INVENTORY_API_KEY` or run `login` |
| `auth_invalid` | 401 | Token rejected by server | Reissue from the dashboard, run `login` again |
| `forbidden` | 403 | Token valid but lacks the required scope | Check the dashboard's scope settings |

The CLI does not retry auth errors. If `auth_invalid` is intermittent, the token has likely been rotated and a new one needs to be obtained.

## Anti-patterns

- ❌ Don't paste tokens into source files. The validation gate scans for them.
- ❌ Don't share `~/.config/zoho-inventory-cli/credentials.json` between machines — re-run `login` per machine.

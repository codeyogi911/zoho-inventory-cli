# Agent instructions for zoho-inventory-cli

You are operating `zoho-inventory-cli` — a wrapper over the Zoho Inventory API at `https://www.zohoapis.<dc>/inventory/v1`.

## Before you act

1. **Read every file in `knowledge/`.** Especially: `oauth-refresh.md`, `header-format.md`, `organization-id.md`, `pagination.md`, `india-gst-and-locations.md`, `sales-order-cycle.md`, `url-quirks.md`. The Zoho API has Indian-tax rules, an opinionated SO cycle, and several inconsistent URL conventions that aren't obvious from `--help`.
2. Use `zoho-inventory-cli --help`, `zoho-inventory-cli <resource> --help`, `zoho-inventory-cli <resource> <action> --help`. Help is generated from the runtime registry, so it never drifts from real behaviour.
3. Run `zoho-inventory-cli login --status --json` if a command surprises you with `auth_missing` or `auth_invalid` — confirms which source is providing the token and whether `ZOHO_INVENTORY_DC` matches the org.

## Conventions

- **Command shape**: `zoho-inventory-cli <resource> <action> [flags]`. The `login` command is dispatched separately.
- **Errors**: JSON on stderr with exit code 1. Fields: `type, code, message, retryable, retryAfter?, details?`. Codes: `auth_missing | auth_invalid | forbidden | not_found | conflict | validation_error | rate_limited | server_error | network_error | timeout`.
- **The CLI never retries.** Retry/backoff lives in the agent loop. For `rate_limited`, sleep `retryAfter` seconds before retrying.
- **Mock server**: set `ZOHO_INVENTORY_BASE_URL=http://127.0.0.1:<port>` to redirect requests; set `ZOHO_INVENTORY_ACCOUNTS_URL` to mock the OAuth refresh endpoint too.
- **DC routing**: `ZOHO_INVENTORY_DC` controls both `https://www.zohoapis.<dc>` and `https://accounts.zoho.<dc>`. Mismatched DC → `auth_invalid`.

## Pagination

Every `list` action accepts `--page` and `--per_page`. Use `--all` to walk every page (the CLI iterates `page_context.has_more_page`). The CLI yields a JSON array of items; agents should never assume the API's response shape carries through `--all`.

## Body & multipart

- For non-trivial create/update payloads (line_items, addresses, custom_fields), prefer `--body '<json>'` over individual flags.
- For multipart uploads (`--file <path>`): only six actions take it — see `commands/*.mjs` for which.

## organization_id

Auto-injected from `ZOHO_INVENTORY_ORG_ID`. Override with `--organization-id <id>` per command if needed. Never bury an org id inside `--body` — that won't work; Zoho reads it from the query string only.

## OAuth refresh

The CLI auto-refreshes access tokens. Don't paste a static `ZOHO_INVENTORY_API_KEY` and expect it to last — they expire hourly. Set the trio (`_REFRESH_TOKEN`, `_CLIENT_ID`, `_CLIENT_SECRET`) and the CLI mints + caches access tokens for you.

## Testing

```
npm test
```

Runs smoke (no network), integration (against `test/_mock-server.mjs`), and auth tests on the current Node version. CI runs the same on Node 20 and 22.

## Regeneration safety

`commands/*.mjs` is generated from `scripts/gen-resources.mjs`. Hand-edits there get overwritten on the next regeneration. If you need to add a new flag or action, edit the `RESOURCES` table in the generator script and re-run `node scripts/gen-resources.mjs && node scripts/gen-clify-meta.mjs`.

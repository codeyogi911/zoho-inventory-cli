# Zoho Inventory CLI Auth

Use `zoho-inventory-cli` with environment credentials or `login`.

- Static access token: `ZOHO_INVENTORY_API_KEY`
- OAuth refresh token: `ZOHO_INVENTORY_REFRESH_TOKEN`
- OAuth client id: `ZOHO_INVENTORY_CLIENT_ID`
- OAuth client secret: `ZOHO_INVENTORY_CLIENT_SECRET`
- Stateless mode: `ZOHO_INVENTORY_NO_CACHE=1` skips credential-cache writes when supported.

Check auth with:

```bash
zoho-inventory-cli login --status --json
```

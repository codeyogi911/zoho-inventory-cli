---
type: quirk
applies-to: [
  "sales-returns.list",
  "bills.list",
  "packages.list",
]
source: zoho-docs + runtime probe (2026-04-27, India DC)
---

# Some `GET …/list` endpoints silently ignore filter query params

A handful of Zoho Inventory list endpoints declare or imply filter query
parameters that the server **silently does not apply**. The HTTP response
is `200 OK` with `code: 0 success` and the unfiltered list — there is no
error and no warning header to detect this from the wire.

| Endpoint | Documented filters (per Zoho) | Empirically broken |
|---|---|---|
| `GET /salesreturns` | only `organization_id`, `page`, `per_page` | every other filter (`reference_number`, `salesorder_id`, `customer_id`, `salesreturn_number`, `status`, `date`, `search_text`) |
| `GET /bills` | only `organization_id`, `page`, `per_page` | every other filter |
| `GET /packages` | a documented set including `status`, `customer_id`, `search_text`, `tracking_number`, `_startswith`/`_contains` variants | exact-match forms of `package_number`, `salesorder_id`, `salesorder_number` (the variants probably work — not exhaustively tested) |

Working list filters on adjacent resources (`/invoices`, `/creditnotes`,
`/customerpayments`, `/salesorders`, `/purchaseorders`, `/vendorcredits`)
were verified honored: passing `FAKE-NONEXISTENT` returns 0 rows.

## CLI behavior

Each `commands/<resource>.mjs` action def carries a `brokenListFilters`
array listing the silently-ignored ones. When the user passes one of those
flags, `bin/zoho-inventory-cli.mjs`:

1. Strips the broken filter from the wire query (so Zoho never sees it).
2. Pulls the full list via the page-pagination iterator.
3. Filters the result client-side (case-insensitive equality OR substring
   match against the row's same-named field).
4. Writes a one-line `note: …` to stderr explaining the fall-back so the
   caller can audit the cost.

The `--help` text for each broken filter is annotated `(BROKEN: Zoho silently
ignores this filter; CLI auto-falls-back to a client-side filter on the full
list)`.

## Cost notes

The fallback fetches every page. For Fix Coffee scale (under 200 rows of
each resource) this is trivially cheap — well under the 7,500 req/day org
limit. For larger orgs, callers can avoid the cost by pulling the list
once into memory and filtering themselves, skipping the broken-filter flag
entirely.

## Adding new broken filters

If you discover another endpoint where a declared filter is silently
ignored, add the flag name to `brokenListFilters` for that resource in
`scripts/gen-resources.mjs` (NOT `listFilters` — those are wire-honored).
Then re-run `node scripts/gen-resources.mjs && node scripts/gen-clify-meta.mjs`.

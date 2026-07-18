---
type: pattern
applies-to: ["*"]
source: docs
confidence: high
extracted: 2026-04-26
---

# Rate limits

Zoho Inventory enforces:

- **Per-minute**: 100 requests / minute / organization.
- **Per-day**: 1,000 (Free) → 10,000 (Enterprise plan).
- **Concurrent**: 5 (Free) or 10 (Paid).

When exceeded, Zoho returns HTTP 429 with `Retry-After` (seconds). The CLI surfaces this as the structured error:

```json
{ "type": "error", "code": "rate_limited", "retryable": true, "retryAfter": 30 }
```

The CLI **does not** retry. Wrap calls in your own backoff if you're driving bulk jobs (e.g., the Fix Coffee monthly audit), or run sequentially with `sleep 1` between calls.

## Tip: use bulk endpoints where they exist

- `items bulk-fetch --item_ids "id1,id2,id3"` — single request for many items.
- `salesorders bulk-confirm --salesorder_ids "id1,id2"` — confirm many SOs at once.
- `invoices bulk-export --invoice_ids "..."` — single PDF download.

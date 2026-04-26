// Shared payload-building helper. Resources opt into this from their
// `buildPayload(values)` to avoid duplicating exclusion logic.
//
// Excludes path params, control flags, the raw --body escape hatch, and
// pagination knobs. Resources can pass additional keys to drop in `extra`.
const RESERVED = new Set([
  "body",
  "id",
  "page",
  "per_page",
  "cursor",
  "idempotency-key",
  "if-match",
  "file",
  "organization-id",
]);

export function buildPayload(values, extra = []) {
  const drop = new Set([...RESERVED, ...extra]);
  const out = {};
  for (const [k, v] of Object.entries(values)) {
    if (v === undefined) continue;
    if (drop.has(k)) continue;
    out[k] = v;
  }
  return out;
}

---
type: business-rule
applies-to: ["composite-items.*","bundles.*","items.*"]
source: docs
confidence: high
extracted: 2026-04-26
---

# Composite items vs bundles vs item groups

Three Zoho concepts that look similar but model different things — easy to confuse, expensive to mix up.

## items

A single SKU. Tracked stock in `quantity_in_stock`. The default modeling for everything Fix Coffee sells.

## item-groups

A *grouping* of variant items that share the same brand/manufacturer/unit but differ on a variant axis (color, size). Stock is tracked per item, not on the group. Used in Zoho mostly for shopfront display grouping; we don't lean on it heavily at Fix Coffee.

## composite-items

A pre-defined kit / assembly: a parent SKU whose stock is *derived* from the component items. Selling a composite item:

- *Decreases* stock on the components by the mapped quantities.
- Reports the parent in transaction docs.
- Has its own `rate` (sales price), independent of components' rates.

Examples: a "starter espresso kit" composite of `[machine, grinder, tamper, scale]`.

## bundles

A point-in-time *production run* that converts component stock into composite stock. After bundling, the composite has its own positive `quantity_in_stock`; selling the composite then decreases that, not the components.

Use `bundles create` when you want to pre-make composites (e.g., gift kits assembled in advance). Without bundling, selling a composite consumes components on the fly.

## When to use what

| Scenario | Use |
|---|---|
| Selling a single product | `items` |
| Same product in multiple colors/sizes | `item-groups` (variants are still individual items) |
| Pre-defined gift set / kit, components consumed at sale | `composite-items` (no bundling) |
| Pre-assembled stock you want to count and see in reports | `composite-items` + `bundles` |

## Anti-pattern

Treating `composite-items` like SKUs and adding an "in stock" quantity directly — Zoho will reject the create payload. Composite stock is derived (or set via a bundle).

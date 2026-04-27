// `packages` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "packages",
  actions: {
    "list": {
      "method": "GET",
      "path": "/packages",
      "description": "GET /packages",
      "flags": {
        "page": {
          "type": "string",
          "required": false,
          "description": "Page number for pagination (default 1)"
        },
        "per_page": {
          "type": "string",
          "required": false,
          "description": "Results per page (server default 200)"
        },
        "reference_number": {
          "type": "string",
          "required": false,
          "description": "Free-form reference number (also a list filter on most endpoints — see help per resource for whether the API actually honors it) (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "package_number": {
          "type": "string",
          "required": false,
          "description": "Package number override (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "salesorder_id": {
          "type": "string",
          "required": false,
          "description": "Parent sales order id (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "salesorder_number": {
          "type": "string",
          "required": false,
          "description": "Sales order number override (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "customer_id": {
          "type": "string",
          "required": false,
          "description": "Zoho customer id (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "customer_name": {
          "type": "string",
          "required": false,
          "description": "Filter by customer display name (list) (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "status": {
          "type": "string",
          "required": false,
          "description": "Filter by status (list) or set status (create/update) (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "search_text": {
          "type": "string",
          "required": false,
          "description": "Server-side full-text search across the resource (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      },
      "brokenListFilters": [
        "reference_number",
        "package_number",
        "salesorder_id",
        "salesorder_number",
        "customer_id",
        "customer_name",
        "status",
        "date",
        "search_text"
      ]
    },
    "get": {
      "method": "GET",
      "path": "/packages/:id",
      "description": "GET /packages/:id",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "create": {
      "method": "POST",
      "path": "/packages",
      "description": "POST /packages",
      "flags": {
        "name": {
          "type": "string",
          "required": false,
          "description": "Resource name (for create/update)"
        },
        "description": {
          "type": "string",
          "required": false,
          "description": "Free-form description"
        },
        "status": {
          "type": "string",
          "required": false,
          "description": "Filter by status (list) or set status (create/update)"
        },
        "package_number": {
          "type": "string",
          "required": false,
          "description": "Package number override"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "line_items": {
          "type": "string",
          "required": false,
          "description": "JSON array of line items (use --body for complex shapes)"
        },
        "salesorder_id": {
          "type": "string",
          "required": false,
          "description": "Parent sales order id"
        },
        "body": {
          "type": "string",
          "required": false,
          "description": "Raw JSON body (overrides individual flags)"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      },
      "queryFlags": [
        "salesorder_id"
      ]
    },
    "update": {
      "method": "PUT",
      "path": "/packages/:id",
      "description": "PUT /packages/:id",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "name": {
          "type": "string",
          "required": false,
          "description": "Resource name (for create/update)"
        },
        "description": {
          "type": "string",
          "required": false,
          "description": "Free-form description"
        },
        "status": {
          "type": "string",
          "required": false,
          "description": "Filter by status (list) or set status (create/update)"
        },
        "package_number": {
          "type": "string",
          "required": false,
          "description": "Package number override"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "line_items": {
          "type": "string",
          "required": false,
          "description": "JSON array of line items (use --body for complex shapes)"
        },
        "body": {
          "type": "string",
          "required": false,
          "description": "Raw JSON body (overrides individual flags)"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "delete": {
      "method": "DELETE",
      "path": "/packages/:id",
      "description": "DELETE /packages/:id",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "bulk-print": {
      "method": "GET",
      "path": "/packages/print",
      "description": "GET /packages/print",
      "flags": {
        "package_ids": {
          "type": "string",
          "required": true,
          "description": "Comma-separated list of package ids"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    }
  },
  buildPayload(values) { return buildPayload(values); },
};

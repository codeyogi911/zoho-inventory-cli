// `bills` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "bills",
  actions: {
    "list": {
      "method": "GET",
      "path": "/bills",
      "description": "GET /bills",
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
        "bill_number": {
          "type": "string",
          "required": false,
          "description": "Bill number (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "vendor_id": {
          "type": "string",
          "required": false,
          "description": "Zoho vendor id (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "vendor_name": {
          "type": "string",
          "required": false,
          "description": "Filter by vendor display name (list) (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
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
        "due_date": {
          "type": "string",
          "required": false,
          "description": "Due date in YYYY-MM-DD (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
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
        "bill_number",
        "vendor_id",
        "vendor_name",
        "status",
        "date",
        "due_date",
        "search_text"
      ]
    },
    "get": {
      "method": "GET",
      "path": "/bills/:id",
      "description": "GET /bills/:id",
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
      "path": "/bills",
      "description": "POST /bills",
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
        "vendor_id": {
          "type": "string",
          "required": false,
          "description": "Zoho vendor id"
        },
        "bill_number": {
          "type": "string",
          "required": false,
          "description": "Bill number"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "due_date": {
          "type": "string",
          "required": false,
          "description": "Due date in YYYY-MM-DD"
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
    "update": {
      "method": "PUT",
      "path": "/bills/:id",
      "description": "PUT /bills/:id",
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
        "vendor_id": {
          "type": "string",
          "required": false,
          "description": "Zoho vendor id"
        },
        "bill_number": {
          "type": "string",
          "required": false,
          "description": "Bill number"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "due_date": {
          "type": "string",
          "required": false,
          "description": "Due date in YYYY-MM-DD"
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
      "path": "/bills/:id",
      "description": "DELETE /bills/:id",
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
    "update-custom-field": {
      "method": "PUT",
      "path": "/bill/:id/customfields",
      "description": "PUT /bill/:id/customfields",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
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
    "mark-open": {
      "method": "POST",
      "path": "/bills/:id/status/open",
      "description": "POST /bills/:id/status/open",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
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
    "mark-void": {
      "method": "POST",
      "path": "/bills/:id/status/void",
      "description": "POST /bills/:id/status/void",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
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
    }
  },
  buildPayload(values) { return buildPayload(values); },
};

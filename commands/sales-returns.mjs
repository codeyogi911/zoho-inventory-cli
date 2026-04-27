// `sales-returns` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "sales-returns",
  actions: {
    "list": {
      "method": "GET",
      "path": "/salesreturns",
      "description": "GET /salesreturns",
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
        "salesreturn_number": {
          "type": "string",
          "required": false,
          "description": "Sales return number (list filter) (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
        },
        "salesorder_id": {
          "type": "string",
          "required": false,
          "description": "Parent sales order id (BROKEN: Zoho silently ignores this filter; CLI auto-falls-back to a client-side filter on the full list)"
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
        "salesreturn_number",
        "salesorder_id",
        "customer_id",
        "customer_name",
        "status",
        "date",
        "search_text"
      ]
    },
    "get": {
      "method": "GET",
      "path": "/salesreturns/:id",
      "description": "GET /salesreturns/:id",
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
      "path": "/salesreturns",
      "description": "POST /salesreturns",
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
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "reason": {
          "type": "string",
          "required": false,
          "description": "Reason for the operation (e.g. inventory adjustment)"
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
      "path": "/salesreturns/:id",
      "description": "PUT /salesreturns/:id",
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
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "reason": {
          "type": "string",
          "required": false,
          "description": "Reason for the operation (e.g. inventory adjustment)"
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
      "path": "/salesreturns/:id",
      "description": "DELETE /salesreturns/:id",
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
    "create-receive": {
      "method": "POST",
      "path": "/salesreturnreceives",
      "description": "POST /salesreturnreceives",
      "flags": {
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
    "delete-receive": {
      "method": "DELETE",
      "path": "/salesreturnreceives/:receiveId",
      "description": "DELETE /salesreturnreceives/:receiveId",
      "flags": {
        "receiveId": {
          "type": "string",
          "required": true,
          "description": "Sales return receive id"
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

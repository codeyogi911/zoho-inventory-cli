// `inventory-adjustments` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "inventory-adjustments",
  actions: {
    "list": {
      "method": "GET",
      "path": "/inventoryadjustments",
      "description": "GET /inventoryadjustments",
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
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "get": {
      "method": "GET",
      "path": "/inventoryadjustments/:id",
      "description": "GET /inventoryadjustments/:id",
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
      "path": "/inventoryadjustments",
      "description": "POST /inventoryadjustments",
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
        "reference_number": {
          "type": "string",
          "required": false,
          "description": "Free-form reference number (also a list filter on most endpoints — see help per resource for whether the API actually honors it)"
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
        "adjustment_type": {
          "type": "string",
          "required": false,
          "description": "quantity | value"
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
      "path": "/inventoryadjustments/:id",
      "description": "PUT /inventoryadjustments/:id",
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
        "reference_number": {
          "type": "string",
          "required": false,
          "description": "Free-form reference number (also a list filter on most endpoints — see help per resource for whether the API actually honors it)"
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
        "adjustment_type": {
          "type": "string",
          "required": false,
          "description": "quantity | value"
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
      "path": "/inventoryadjustments/:id",
      "description": "DELETE /inventoryadjustments/:id",
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
    }
  },
  buildPayload(values) { return buildPayload(values); },
};

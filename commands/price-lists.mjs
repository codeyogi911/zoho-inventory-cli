// `price-lists` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "price-lists",
  actions: {
    "list": {
      "method": "GET",
      "path": "/pricebooks",
      "description": "GET /pricebooks",
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
    "create": {
      "method": "POST",
      "path": "/pricebooks",
      "description": "POST /pricebooks",
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
        "currency_id": {
          "type": "string",
          "required": false,
          "description": "Currency id"
        },
        "percentage": {
          "type": "string",
          "required": false,
          "description": "Markup/markdown percentage"
        },
        "pricebook_type": {
          "type": "string",
          "required": false,
          "description": "fixed_percentage | per_item"
        },
        "rounding_type": {
          "type": "string",
          "required": false,
          "description": "no_rounding | round_to_dollar_minus_01 | …"
        },
        "is_increase": {
          "type": "string",
          "required": false,
          "description": "true (markup) | false (markdown)"
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
      "path": "/pricebooks/:id",
      "description": "PUT /pricebooks/:id",
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
        "currency_id": {
          "type": "string",
          "required": false,
          "description": "Currency id"
        },
        "percentage": {
          "type": "string",
          "required": false,
          "description": "Markup/markdown percentage"
        },
        "pricebook_type": {
          "type": "string",
          "required": false,
          "description": "fixed_percentage | per_item"
        },
        "rounding_type": {
          "type": "string",
          "required": false,
          "description": "no_rounding | round_to_dollar_minus_01 | …"
        },
        "is_increase": {
          "type": "string",
          "required": false,
          "description": "true (markup) | false (markdown)"
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
      "path": "/pricebooks/:id",
      "description": "DELETE /pricebooks/:id",
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
    "mark-active": {
      "method": "POST",
      "path": "/pricebooks/:id/active",
      "description": "POST /pricebooks/:id/active",
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
    "mark-inactive": {
      "method": "POST",
      "path": "/pricebooks/:id/inactive",
      "description": "POST /pricebooks/:id/inactive",
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

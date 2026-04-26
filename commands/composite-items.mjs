// `composite-items` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "composite-items",
  actions: {
    "list": {
      "method": "GET",
      "path": "/compositeitems",
      "description": "GET /compositeitems",
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
      "path": "/compositeitems/:id",
      "description": "GET /compositeitems/:id",
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
      "path": "/compositeitems",
      "description": "POST /compositeitems",
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
        "sku": {
          "type": "string",
          "required": false,
          "description": "Stock-keeping unit"
        },
        "rate": {
          "type": "string",
          "required": false,
          "description": "Sales rate (decimal)"
        },
        "item_type": {
          "type": "string",
          "required": false,
          "description": "inventory | service | non_inventory"
        },
        "product_type": {
          "type": "string",
          "required": false,
          "description": "goods | service"
        },
        "mapped_items": {
          "type": "string",
          "required": false,
          "description": "JSON array of mapped item objects"
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
      "path": "/compositeitems/:id",
      "description": "PUT /compositeitems/:id",
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
        "sku": {
          "type": "string",
          "required": false,
          "description": "Stock-keeping unit"
        },
        "rate": {
          "type": "string",
          "required": false,
          "description": "Sales rate (decimal)"
        },
        "item_type": {
          "type": "string",
          "required": false,
          "description": "inventory | service | non_inventory"
        },
        "product_type": {
          "type": "string",
          "required": false,
          "description": "goods | service"
        },
        "mapped_items": {
          "type": "string",
          "required": false,
          "description": "JSON array of mapped item objects"
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
      "path": "/compositeitems/:id",
      "description": "DELETE /compositeitems/:id",
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
      "path": "/compositeitems/:id/active",
      "description": "POST /compositeitems/:id/active",
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
      "path": "/compositeitems/:id/inactive",
      "description": "POST /compositeitems/:id/inactive",
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

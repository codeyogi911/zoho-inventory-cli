// `sales-orders` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "sales-orders",
  actions: {
    "list": {
      "method": "GET",
      "path": "/salesorders",
      "description": "GET /salesorders",
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
          "description": "Free-form reference number (also a list filter on most endpoints — see help per resource for whether the API actually honors it)"
        },
        "salesorder_number": {
          "type": "string",
          "required": false,
          "description": "Sales order number override"
        },
        "customer_id": {
          "type": "string",
          "required": false,
          "description": "Zoho customer id"
        },
        "customer_name": {
          "type": "string",
          "required": false,
          "description": "Filter by customer display name (list)"
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
        "search_text": {
          "type": "string",
          "required": false,
          "description": "Server-side full-text search across the resource"
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
      "path": "/salesorders/:id",
      "description": "GET /salesorders/:id",
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
      "path": "/salesorders",
      "description": "POST /salesorders",
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
        "customer_id": {
          "type": "string",
          "required": false,
          "description": "Zoho customer id"
        },
        "salesorder_number": {
          "type": "string",
          "required": false,
          "description": "Sales order number override"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "shipment_date": {
          "type": "string",
          "required": false,
          "description": "Shipment date in YYYY-MM-DD"
        },
        "line_items": {
          "type": "string",
          "required": false,
          "description": "JSON array of line items (use --body for complex shapes)"
        },
        "discount": {
          "type": "string",
          "required": false,
          "description": "Discount as percentage or absolute, depending on org settings"
        },
        "is_inclusive_tax": {
          "type": "string",
          "required": false,
          "description": "true | false"
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
      "path": "/salesorders/:id",
      "description": "PUT /salesorders/:id",
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
        "customer_id": {
          "type": "string",
          "required": false,
          "description": "Zoho customer id"
        },
        "salesorder_number": {
          "type": "string",
          "required": false,
          "description": "Sales order number override"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "shipment_date": {
          "type": "string",
          "required": false,
          "description": "Shipment date in YYYY-MM-DD"
        },
        "line_items": {
          "type": "string",
          "required": false,
          "description": "JSON array of line items (use --body for complex shapes)"
        },
        "discount": {
          "type": "string",
          "required": false,
          "description": "Discount as percentage or absolute, depending on org settings"
        },
        "is_inclusive_tax": {
          "type": "string",
          "required": false,
          "description": "true | false"
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
      "path": "/salesorders/:id",
      "description": "DELETE /salesorders/:id",
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
    "bulk-delete": {
      "method": "DELETE",
      "path": "/salesorders",
      "description": "DELETE /salesorders",
      "flags": {
        "salesorder_ids": {
          "type": "string",
          "required": true,
          "description": "Comma-separated list of sales order ids"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "mark-confirmed": {
      "method": "POST",
      "path": "/salesorders/:id/status/confirmed",
      "description": "POST /salesorders/:id/status/confirmed",
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
      "path": "/salesorders/:id/status/void",
      "description": "POST /salesorders/:id/status/void",
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
    "bulk-confirm": {
      "method": "POST",
      "path": "/salesorders/status/confirmed",
      "description": "POST /salesorders/status/confirmed",
      "flags": {
        "salesorder_ids": {
          "type": "string",
          "required": true,
          "description": "Comma-separated list of sales order ids"
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
    "add-comment": {
      "method": "POST",
      "path": "/salesorders/:id/comments",
      "description": "POST /salesorders/:id/comments",
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
    "list-comments": {
      "method": "GET",
      "path": "/salesorders/:id/comments",
      "description": "GET /salesorders/:id/comments",
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
    "delete-comment": {
      "method": "DELETE",
      "path": "/salesorders/:id/comments/:commentId",
      "description": "DELETE /salesorders/:id/comments/:commentId",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "commentId": {
          "type": "string",
          "required": true,
          "description": "Comment id"
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

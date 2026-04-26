// `delivery-challans` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "delivery-challans",
  actions: {
    "list": {
      "method": "GET",
      "path": "/deliverychallans",
      "description": "GET /deliverychallans",
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
      "path": "/deliverychallans/:id",
      "description": "GET /deliverychallans/:id",
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
      "path": "/deliverychallans",
      "description": "POST /deliverychallans",
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
        "deliverychallan_number": {
          "type": "string",
          "required": false,
          "description": "Delivery challan number override"
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
        "type": {
          "type": "string",
          "required": false,
          "description": "delivery challan type label"
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
      "path": "/deliverychallans/:id",
      "description": "PUT /deliverychallans/:id",
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
        "deliverychallan_number": {
          "type": "string",
          "required": false,
          "description": "Delivery challan number override"
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
        "type": {
          "type": "string",
          "required": false,
          "description": "delivery challan type label"
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
      "path": "/deliverychallans/:id",
      "description": "DELETE /deliverychallans/:id",
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
    "mark-open": {
      "method": "POST",
      "path": "/deliverychallans/:id/status/open",
      "description": "POST /deliverychallans/:id/status/open",
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
    "mark-delivered": {
      "method": "POST",
      "path": "/deliverychallans/:id/status/delivered",
      "description": "POST /deliverychallans/:id/status/delivered",
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
    "mark-returned": {
      "method": "POST",
      "path": "/deliverychallans/:id/status/returned",
      "description": "POST /deliverychallans/:id/status/returned",
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
    "mark-undelivered": {
      "method": "POST",
      "path": "/deliverychallans/:id/status/undelivered",
      "description": "POST /deliverychallans/:id/status/undelivered",
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
    "return-items": {
      "method": "PUT",
      "path": "/deliverychallans/return",
      "description": "PUT /deliverychallans/return",
      "flags": {
        "deliverychallan_ids": {
          "type": "string",
          "required": true,
          "description": "Comma-separated list of delivery challan ids"
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
    "undo-return": {
      "method": "PUT",
      "path": "/deliverychallans/undo/return",
      "description": "PUT /deliverychallans/undo/return",
      "flags": {
        "deliverychallan_ids": {
          "type": "string",
          "required": true,
          "description": "Comma-separated list of delivery challan ids"
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
    "add-attachment": {
      "method": "POST",
      "path": "/deliverychallans/:id/attachment",
      "description": "POST /deliverychallans/:id/attachment",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "file": {
          "type": "string",
          "required": true,
          "description": "Path to file for multipart upload (--add-attachment, etc.)"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "get-attachment": {
      "method": "GET",
      "path": "/deliverychallans/:id/documents/:documentId",
      "description": "GET /deliverychallans/:id/documents/:documentId",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "documentId": {
          "type": "string",
          "required": true,
          "description": "Attachment document id"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "delete-attachment": {
      "method": "DELETE",
      "path": "/deliverychallans/:id/documents/:documentId",
      "description": "DELETE /deliverychallans/:id/documents/:documentId",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "documentId": {
          "type": "string",
          "required": true,
          "description": "Attachment document id"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "list-templates": {
      "method": "GET",
      "path": "/deliverychallans/templates",
      "description": "GET /deliverychallans/templates",
      "flags": {
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "update-template": {
      "method": "PUT",
      "path": "/deliverychallans/:id/templates/:templateId",
      "description": "PUT /deliverychallans/:id/templates/:templateId",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "templateId": {
          "type": "string",
          "required": true,
          "description": "Template id"
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
    "update-shipping-address": {
      "method": "PUT",
      "path": "/deliverychallans/:id/address/shipping",
      "description": "PUT /deliverychallans/:id/address/shipping",
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

// `invoices` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "invoices",
  actions: {
    "list": {
      "method": "GET",
      "path": "/invoices",
      "description": "GET /invoices",
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
        "invoice_number": {
          "type": "string",
          "required": false,
          "description": "Invoice number override"
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
        "due_date": {
          "type": "string",
          "required": false,
          "description": "Due date in YYYY-MM-DD"
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
      "path": "/invoices/:id",
      "description": "GET /invoices/:id",
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
      "path": "/invoices",
      "description": "POST /invoices",
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
        "invoice_number": {
          "type": "string",
          "required": false,
          "description": "Invoice number override"
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
        "is_inclusive_tax": {
          "type": "string",
          "required": false,
          "description": "true | false"
        },
        "discount": {
          "type": "string",
          "required": false,
          "description": "Discount as percentage or absolute, depending on org settings"
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
      "path": "/invoices/:id",
      "description": "PUT /invoices/:id",
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
        "invoice_number": {
          "type": "string",
          "required": false,
          "description": "Invoice number override"
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
        "is_inclusive_tax": {
          "type": "string",
          "required": false,
          "description": "true | false"
        },
        "discount": {
          "type": "string",
          "required": false,
          "description": "Discount as percentage or absolute, depending on org settings"
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
      "path": "/invoices/:id",
      "description": "DELETE /invoices/:id",
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
    "mark-sent": {
      "method": "POST",
      "path": "/invoices/:id/status/sent",
      "description": "POST /invoices/:id/status/sent",
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
    "void": {
      "method": "POST",
      "path": "/invoices/:id/status/void",
      "description": "POST /invoices/:id/status/void",
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
    "mark-draft": {
      "method": "POST",
      "path": "/invoices/:id/status/draft",
      "description": "POST /invoices/:id/status/draft",
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
    "update-custom-field": {
      "method": "PUT",
      "path": "/invoice/:id/customfields",
      "description": "PUT /invoice/:id/customfields",
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
    "email": {
      "method": "POST",
      "path": "/invoices/:id/email",
      "description": "POST /invoices/:id/email",
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
    "get-email-content": {
      "method": "GET",
      "path": "/invoices/:id/email",
      "description": "GET /invoices/:id/email",
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
    "email-invoices": {
      "method": "POST",
      "path": "/invoices/email",
      "description": "POST /invoices/email",
      "flags": {
        "invoice_ids": {
          "type": "string",
          "required": true,
          "description": "Comma-separated list of invoice ids"
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
    "get-payment-reminder": {
      "method": "GET",
      "path": "/invoices/:id/paymentreminder",
      "description": "GET /invoices/:id/paymentreminder",
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
    "disable-reminder": {
      "method": "POST",
      "path": "/invoices/:id/paymentreminder/disable",
      "description": "POST /invoices/:id/paymentreminder/disable",
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
    "enable-reminder": {
      "method": "POST",
      "path": "/invoices/:id/paymentreminder/enable",
      "description": "POST /invoices/:id/paymentreminder/enable",
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
    "bulk-export": {
      "method": "GET",
      "path": "/invoices/pdf",
      "description": "GET /invoices/pdf",
      "flags": {
        "invoice_ids": {
          "type": "string",
          "required": true,
          "description": "Comma-separated list of invoice ids"
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
      "path": "/invoices/print",
      "description": "GET /invoices/print",
      "flags": {
        "invoice_ids": {
          "type": "string",
          "required": true,
          "description": "Comma-separated list of invoice ids"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "write-off": {
      "method": "POST",
      "path": "/invoices/:id/writeoff",
      "description": "POST /invoices/:id/writeoff",
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
    "cancel-writeoff": {
      "method": "POST",
      "path": "/invoices/:id/writeoff/cancel",
      "description": "POST /invoices/:id/writeoff/cancel",
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
    "apply-credits": {
      "method": "POST",
      "path": "/invoices/:id/credits",
      "description": "POST /invoices/:id/credits",
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
    "list-payments": {
      "method": "GET",
      "path": "/invoices/:id/payments",
      "description": "GET /invoices/:id/payments",
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
    "list-credits-applied": {
      "method": "GET",
      "path": "/invoices/:id/creditsapplied",
      "description": "GET /invoices/:id/creditsapplied",
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
    "delete-payment": {
      "method": "DELETE",
      "path": "/invoices/:id/payments/:paymentId",
      "description": "DELETE /invoices/:id/payments/:paymentId",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "paymentId": {
          "type": "string",
          "required": true,
          "description": "Invoice payment id (deletion)"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "delete-credit": {
      "method": "DELETE",
      "path": "/invoices/:id/creditsapplied/:creditId",
      "description": "DELETE /invoices/:id/creditsapplied/:creditId",
      "flags": {
        "id": {
          "type": "string",
          "required": true,
          "description": "Primary resource id"
        },
        "creditId": {
          "type": "string",
          "required": true,
          "description": "Applied credit id (deletion)"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "update-billing-address": {
      "method": "PUT",
      "path": "/invoices/:id/address/billing",
      "description": "PUT /invoices/:id/address/billing",
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
    "update-shipping-address": {
      "method": "PUT",
      "path": "/invoices/:id/address/shipping",
      "description": "PUT /invoices/:id/address/shipping",
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
    "list-templates": {
      "method": "GET",
      "path": "/invoices/templates",
      "description": "GET /invoices/templates",
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
      "path": "/invoices/:id/templates/:templateId",
      "description": "PUT /invoices/:id/templates/:templateId",
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
    "add-attachment": {
      "method": "POST",
      "path": "/invoices/:id/attachment",
      "description": "POST /invoices/:id/attachment",
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
      "path": "/invoices/:id/attachment",
      "description": "GET /invoices/:id/attachment",
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
    "update-attachment": {
      "method": "PUT",
      "path": "/invoices/:id/attachment",
      "description": "PUT /invoices/:id/attachment",
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
    "delete-attachment": {
      "method": "DELETE",
      "path": "/invoices/:id/attachment",
      "description": "DELETE /invoices/:id/attachment",
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
    "add-comment": {
      "method": "POST",
      "path": "/invoices/:id/comments",
      "description": "POST /invoices/:id/comments",
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
      "path": "/invoices/:id/comments",
      "description": "GET /invoices/:id/comments",
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
    "update-comment": {
      "method": "PUT",
      "path": "/invoices/:id/comments/:commentId",
      "description": "PUT /invoices/:id/comments/:commentId",
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
    "delete-comment": {
      "method": "DELETE",
      "path": "/invoices/:id/comments/:commentId",
      "description": "DELETE /invoices/:id/comments/:commentId",
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

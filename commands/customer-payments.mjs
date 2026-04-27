// `customer-payments` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "customer-payments",
  actions: {
    "list": {
      "method": "GET",
      "path": "/customerpayments",
      "description": "GET /customerpayments",
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
        "payment_mode": {
          "type": "string",
          "required": false,
          "description": "cash | bankremittance | check | creditcard | ..."
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
      "path": "/customerpayments/:id",
      "description": "GET /customerpayments/:id",
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
      "path": "/customerpayments",
      "description": "POST /customerpayments",
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
        "payment_mode": {
          "type": "string",
          "required": false,
          "description": "cash | bankremittance | check | creditcard | ..."
        },
        "amount": {
          "type": "string",
          "required": false,
          "description": "Decimal amount"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "reference_number": {
          "type": "string",
          "required": false,
          "description": "Free-form reference number (also a list filter on most endpoints — see help per resource for whether the API actually honors it)"
        },
        "invoices": {
          "type": "string",
          "required": false,
          "description": "JSON array of {invoice_id, amount_applied, ...}"
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
      "path": "/customerpayments/:id",
      "description": "PUT /customerpayments/:id",
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
        "payment_mode": {
          "type": "string",
          "required": false,
          "description": "cash | bankremittance | check | creditcard | ..."
        },
        "amount": {
          "type": "string",
          "required": false,
          "description": "Decimal amount"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "reference_number": {
          "type": "string",
          "required": false,
          "description": "Free-form reference number (also a list filter on most endpoints — see help per resource for whether the API actually honors it)"
        },
        "invoices": {
          "type": "string",
          "required": false,
          "description": "JSON array of {invoice_id, amount_applied, ...}"
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
      "path": "/customerpayments/:id",
      "description": "DELETE /customerpayments/:id",
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
      "path": "/customerpayment/:id/customfields",
      "description": "PUT /customerpayment/:id/customfields",
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

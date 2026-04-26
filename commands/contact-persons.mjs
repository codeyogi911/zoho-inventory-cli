// `contact-persons` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "contact-persons",
  actions: {
    "list": {
      "method": "GET",
      "path": "/contacts/:contactId/contactpersons",
      "description": "GET /contacts/:contactId/contactpersons",
      "flags": {
        "contactId": {
          "type": "string",
          "required": true,
          "description": "Parent contact id (required for list/get under a contact)"
        },
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
      "path": "/contacts/:contactId/contactpersons/:id",
      "description": "GET /contacts/:contactId/contactpersons/:id",
      "flags": {
        "contactId": {
          "type": "string",
          "required": true,
          "description": "Parent contact id (required for list/get under a contact)"
        },
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
      "path": "/contacts/contactpersons",
      "description": "POST /contacts/contactpersons",
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
        "first_name": {
          "type": "string",
          "required": false,
          "description": "Given name"
        },
        "last_name": {
          "type": "string",
          "required": false,
          "description": "Family name"
        },
        "email": {
          "type": "string",
          "required": false,
          "description": "Email address"
        },
        "phone": {
          "type": "string",
          "required": false,
          "description": "Phone number"
        },
        "mobile": {
          "type": "string",
          "required": false,
          "description": "Mobile number"
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
      "path": "/contacts/contactpersons/:id",
      "description": "PUT /contacts/contactpersons/:id",
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
        "first_name": {
          "type": "string",
          "required": false,
          "description": "Given name"
        },
        "last_name": {
          "type": "string",
          "required": false,
          "description": "Family name"
        },
        "email": {
          "type": "string",
          "required": false,
          "description": "Email address"
        },
        "phone": {
          "type": "string",
          "required": false,
          "description": "Phone number"
        },
        "mobile": {
          "type": "string",
          "required": false,
          "description": "Mobile number"
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
      "path": "/contacts/contactpersons/:id",
      "description": "DELETE /contacts/contactpersons/:id",
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
    "mark-as-primary": {
      "method": "POST",
      "path": "/contacts/contactpersons/:id/primary",
      "description": "POST /contacts/contactpersons/:id/primary",
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

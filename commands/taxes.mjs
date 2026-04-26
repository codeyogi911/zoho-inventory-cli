// `taxes` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "taxes",
  actions: {
    "list": {
      "method": "GET",
      "path": "/settings/taxes",
      "description": "GET /settings/taxes",
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
      "path": "/settings/taxes/:id",
      "description": "GET /settings/taxes/:id",
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
      "path": "/settings/taxes",
      "description": "POST /settings/taxes",
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
        "tax_name": {
          "type": "string",
          "required": false,
          "description": "Tax name"
        },
        "tax_percentage": {
          "type": "string",
          "required": false,
          "description": "Tax percentage as decimal"
        },
        "tax_type": {
          "type": "string",
          "required": false,
          "description": "tax | compound_tax"
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
      "path": "/settings/taxes/:id",
      "description": "PUT /settings/taxes/:id",
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
        "tax_name": {
          "type": "string",
          "required": false,
          "description": "Tax name"
        },
        "tax_percentage": {
          "type": "string",
          "required": false,
          "description": "Tax percentage as decimal"
        },
        "tax_type": {
          "type": "string",
          "required": false,
          "description": "tax | compound_tax"
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
      "path": "/settings/taxes/:id",
      "description": "DELETE /settings/taxes/:id",
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
    "create-tax-group": {
      "method": "POST",
      "path": "/settings/taxgroups",
      "description": "POST /settings/taxgroups",
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
    "get-tax-group": {
      "method": "GET",
      "path": "/settings/taxgroups/:taxGroupId",
      "description": "GET /settings/taxgroups/:taxGroupId",
      "flags": {
        "taxGroupId": {
          "type": "string",
          "required": true,
          "description": "Tax group id"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "update-tax-group": {
      "method": "PUT",
      "path": "/settings/taxgroups/:taxGroupId",
      "description": "PUT /settings/taxgroups/:taxGroupId",
      "flags": {
        "taxGroupId": {
          "type": "string",
          "required": true,
          "description": "Tax group id"
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
    "delete-tax-group": {
      "method": "DELETE",
      "path": "/settings/taxgroups/:taxGroupId",
      "description": "DELETE /settings/taxgroups/:taxGroupId",
      "flags": {
        "taxGroupId": {
          "type": "string",
          "required": true,
          "description": "Tax group id"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "create-tax-authority": {
      "method": "POST",
      "path": "/settings/taxauthorities",
      "description": "POST /settings/taxauthorities",
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
    "list-tax-authorities": {
      "method": "GET",
      "path": "/settings/taxauthorities",
      "description": "GET /settings/taxauthorities",
      "flags": {
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "get-tax-authority": {
      "method": "GET",
      "path": "/settings/taxauthorities/:taxAuthorityId",
      "description": "GET /settings/taxauthorities/:taxAuthorityId",
      "flags": {
        "taxAuthorityId": {
          "type": "string",
          "required": true,
          "description": "Tax authority id"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "update-tax-authority": {
      "method": "PUT",
      "path": "/settings/taxauthorities/:taxAuthorityId",
      "description": "PUT /settings/taxauthorities/:taxAuthorityId",
      "flags": {
        "taxAuthorityId": {
          "type": "string",
          "required": true,
          "description": "Tax authority id"
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
    "delete-tax-authority": {
      "method": "DELETE",
      "path": "/settings/taxauthorities/:taxAuthorityId",
      "description": "DELETE /settings/taxauthorities/:taxAuthorityId",
      "flags": {
        "taxAuthorityId": {
          "type": "string",
          "required": true,
          "description": "Tax authority id"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "create-tax-exemption": {
      "method": "POST",
      "path": "/settings/taxexemptions",
      "description": "POST /settings/taxexemptions",
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
    "list-tax-exemptions": {
      "method": "GET",
      "path": "/settings/taxexemptions",
      "description": "GET /settings/taxexemptions",
      "flags": {
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "get-tax-exemption": {
      "method": "GET",
      "path": "/settings/taxexemptions/:taxExemptionId",
      "description": "GET /settings/taxexemptions/:taxExemptionId",
      "flags": {
        "taxExemptionId": {
          "type": "string",
          "required": true,
          "description": "Tax exemption id"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "update-tax-exemption": {
      "method": "PUT",
      "path": "/settings/taxexemptions/:taxExemptionId",
      "description": "PUT /settings/taxexemptions/:taxExemptionId",
      "flags": {
        "taxExemptionId": {
          "type": "string",
          "required": true,
          "description": "Tax exemption id"
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
    "delete-tax-exemption": {
      "method": "DELETE",
      "path": "/settings/taxexemptions/:taxExemptionId",
      "description": "DELETE /settings/taxexemptions/:taxExemptionId",
      "flags": {
        "taxExemptionId": {
          "type": "string",
          "required": true,
          "description": "Tax exemption id"
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

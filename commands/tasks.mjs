// `tasks` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "tasks",
  actions: {
    "list": {
      "method": "GET",
      "path": "/tasks",
      "description": "GET /tasks",
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
      "path": "/tasks/:id",
      "description": "GET /tasks/:id",
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
      "path": "/tasks",
      "description": "POST /tasks",
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
        "task_name": {
          "type": "string",
          "required": false,
          "description": "Task name"
        },
        "project_id": {
          "type": "string",
          "required": false,
          "description": "Project id"
        },
        "user_id": {
          "type": "string",
          "required": false,
          "description": "Assigned user id"
        },
        "rate": {
          "type": "string",
          "required": false,
          "description": "Sales rate (decimal)"
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
      "path": "/tasks/:id",
      "description": "PUT /tasks/:id",
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
        "task_name": {
          "type": "string",
          "required": false,
          "description": "Task name"
        },
        "project_id": {
          "type": "string",
          "required": false,
          "description": "Project id"
        },
        "user_id": {
          "type": "string",
          "required": false,
          "description": "Assigned user id"
        },
        "rate": {
          "type": "string",
          "required": false,
          "description": "Sales rate (decimal)"
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
      "path": "/tasks/:id",
      "description": "DELETE /tasks/:id",
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
    "bulk-update": {
      "method": "PUT",
      "path": "/tasks",
      "description": "PUT /tasks",
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
    "bulk-delete": {
      "method": "DELETE",
      "path": "/tasks",
      "description": "DELETE /tasks",
      "flags": {
        "task_ids": {
          "type": "string",
          "required": true,
          "description": "Comma-separated list of task ids"
        },
        "organization-id": {
          "type": "string",
          "required": false,
          "description": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)"
        }
      }
    },
    "update-completed-percentage": {
      "method": "POST",
      "path": "/tasks/:id/percentage",
      "description": "POST /tasks/:id/percentage",
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
    "mark-open": {
      "method": "POST",
      "path": "/tasks/:id/markasopen",
      "description": "POST /tasks/:id/markasopen",
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
    "mark-ongoing": {
      "method": "POST",
      "path": "/tasks/:id/markasongoing",
      "description": "POST /tasks/:id/markasongoing",
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
    "mark-completed": {
      "method": "POST",
      "path": "/tasks/:id/markascompleted",
      "description": "POST /tasks/:id/markascompleted",
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
    "add-comment": {
      "method": "POST",
      "path": "/tasks/:id/comments",
      "description": "POST /tasks/:id/comments",
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
      "path": "/tasks/:id/comments",
      "description": "GET /tasks/:id/comments",
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
      "path": "/tasks/:id/comments/:commentId",
      "description": "DELETE /tasks/:id/comments/:commentId",
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
    },
    "add-attachment": {
      "method": "POST",
      "path": "/tasks/:id/attachment",
      "description": "POST /tasks/:id/attachment",
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
    "get-document": {
      "method": "GET",
      "path": "/tasks/:id/documents/:documentId",
      "description": "GET /tasks/:id/documents/:documentId",
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
    "delete-document": {
      "method": "DELETE",
      "path": "/tasks/:id/documents/:documentId",
      "description": "DELETE /tasks/:id/documents/:documentId",
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
    }
  },
  buildPayload(values) { return buildPayload(values); },
};

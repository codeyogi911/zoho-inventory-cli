// `shipment-orders` resource — generated from the Zoho Inventory API catalog.
// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather
// than hand-tweaking these files; otherwise upstream regeneration will undo edits.
import { buildPayload } from "../lib/payload.mjs";

export default {
  name: "shipment-orders",
  actions: {
    "get": {
      "method": "GET",
      "path": "/shipmentorders/:id",
      "description": "GET /shipmentorders/:id",
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
      "path": "/shipmentorders",
      "description": "POST /shipmentorders",
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
        "shipment_number": {
          "type": "string",
          "required": false,
          "description": "Shipment number override"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "delivery_method": {
          "type": "string",
          "required": false,
          "description": "Delivery method label"
        },
        "tracking_number": {
          "type": "string",
          "required": false,
          "description": "Carrier tracking number"
        },
        "salesorder_id": {
          "type": "string",
          "required": false,
          "description": "Parent sales order id"
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
      },
      "queryFlags": [
        "salesorder_id"
      ]
    },
    "update": {
      "method": "PUT",
      "path": "/shipmentorders/:id",
      "description": "PUT /shipmentorders/:id",
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
        "shipment_number": {
          "type": "string",
          "required": false,
          "description": "Shipment number override"
        },
        "date": {
          "type": "string",
          "required": false,
          "description": "Date in YYYY-MM-DD"
        },
        "delivery_method": {
          "type": "string",
          "required": false,
          "description": "Delivery method label"
        },
        "tracking_number": {
          "type": "string",
          "required": false,
          "description": "Carrier tracking number"
        },
        "package_ids": {
          "type": "string",
          "required": false,
          "description": "Comma-separated list of package ids"
        },
        "salesorder_id": {
          "type": "string",
          "required": false,
          "description": "Parent sales order id"
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
      },
      "queryFlags": [
        "package_ids",
        "salesorder_id"
      ]
    },
    "delete": {
      "method": "DELETE",
      "path": "/shipmentorders/:id",
      "description": "DELETE /shipmentorders/:id",
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
    "mark-delivered": {
      "method": "POST",
      "path": "/shipmentorders/:id/status/delivered",
      "description": "POST /shipmentorders/:id/status/delivered",
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

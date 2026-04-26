// One-shot generator: emits commands/*.mjs files for the Zoho Inventory CLI.
// Source of truth = the RESOURCES table below, derived from the API catalog
// at https://www.zoho.com/inventory/api/v1/.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/Users/shashwatjain/Repos/zoho-inventory-cli/commands";
mkdirSync(OUT_DIR, { recursive: true });

// Path placeholder convention:
//   :id           — primary resource id (e.g. /contacts/:id, /salesorders/:id)
//   :<otherName>  — nested ids (commentId, documentId, refundId, billId, contactId, taxAuthorityId, …)
//
// Each resource = { name, primaryFlag, extraFlags, actions: [{action, method, path, flags?}] }
//   primaryFlag — the name of the primary id flag if the resource has one
//   extraFlags  — common scalar body flags wired with --foo for ergonomics; rest goes via --body
//   flags       — per-action override list of additional flag names
//
// Conventions:
//   - "name" for create/update gets surfaced as a top-level --name flag.
//   - All non-GET non-DELETE actions accept --body '<json>'.
//   - Primary id, --body, and the standard control flags are auto-stripped from the payload.

const COMMON_BODY_FLAGS = ["name", "description", "status"];

const RESOURCES = [
  {
    name: "organizations",
    primary: "id", // organization_id
    extra: ["currency_code", "time_zone", "portal_name"],
    actions: [
      { action: "list",   method: "GET",  path: "/organizations" },
      { action: "get",    method: "GET",  path: "/organizations/:id" },
      { action: "create", method: "POST", path: "/organizations" },
      { action: "update", method: "PUT",  path: "/organizations/:id" },
    ],
  },
  {
    name: "contacts",
    primary: "id",
    extra: ["contact_name", "company_name", "contact_type"],
    actions: [
      { action: "list",                       method: "GET",    path: "/contacts" },
      { action: "get",                        method: "GET",    path: "/contacts/:id" },
      { action: "create",                     method: "POST",   path: "/contacts" },
      { action: "update",                     method: "PUT",    path: "/contacts/:id" },
      { action: "delete",                     method: "DELETE", path: "/contacts/:id" },
      { action: "get-address",                method: "GET",    path: "/contacts/:id/address" },
      { action: "mark-active",                method: "POST",   path: "/contacts/:id/active" },
      { action: "mark-inactive",              method: "POST",   path: "/contacts/:id/inactive" },
      { action: "email-statement",            method: "POST",   path: "/contacts/:id/statements/email" },
      { action: "get-statement-email",        method: "GET",    path: "/contacts/:id/statements/email" },
      { action: "email-contact",              method: "POST",   path: "/contacts/:id/email" },
      { action: "list-comments",              method: "GET",    path: "/contacts/:id/comments" },
    ],
  },
  {
    name: "contact-persons",
    primary: "id", // contact_person_id
    extraFlagDefs: { contactId: "Parent contact id (required for list/get under a contact)" },
    extra: ["first_name", "last_name", "email", "phone", "mobile"],
    actions: [
      { action: "list",            method: "GET",    path: "/contacts/:contactId/contactpersons", flags: ["contactId"] },
      { action: "get",             method: "GET",    path: "/contacts/:contactId/contactpersons/:id", flags: ["contactId"] },
      { action: "create",          method: "POST",   path: "/contacts/contactpersons" },
      { action: "update",          method: "PUT",    path: "/contacts/contactpersons/:id" },
      { action: "delete",          method: "DELETE", path: "/contacts/contactpersons/:id" },
      { action: "mark-as-primary", method: "POST",   path: "/contacts/contactpersons/:id/primary" },
    ],
  },
  {
    name: "item-groups",
    primary: "id",
    extra: ["unit", "brand", "manufacturer", "tax_id"],
    actions: [
      { action: "list",          method: "GET",    path: "/itemgroups" },
      { action: "get",           method: "GET",    path: "/itemgroups/:id" },
      { action: "create",        method: "POST",   path: "/itemgroups", multipart: true },
      { action: "update",        method: "PUT",    path: "/itemgroups/:id" },
      { action: "delete",        method: "DELETE", path: "/itemgroups/:id" },
      { action: "mark-active",   method: "POST",   path: "/itemgroups/:id/active" },
      { action: "mark-inactive", method: "POST",   path: "/itemgroups/:id/inactive" },
    ],
  },
  {
    name: "items",
    primary: "id",
    extra: ["sku", "rate", "purchase_rate", "unit", "tax_id", "is_taxable", "item_type", "product_type", "group_id", "reorder_level"],
    actions: [
      { action: "list",                 method: "GET",    path: "/items" },
      { action: "get",                  method: "GET",    path: "/items/:id" },
      { action: "create",               method: "POST",   path: "/items" },
      { action: "update",               method: "PUT",    path: "/items/:id" },
      { action: "delete",               method: "DELETE", path: "/items/:id" },
      { action: "bulk-fetch",           method: "GET",    path: "/itemdetails", flags: ["item_ids"] },
      { action: "update-custom-fields", method: "PUT",    path: "/item/:id/customfields" },
      { action: "delete-image",         method: "DELETE", path: "/items/:id/image" },
      { action: "mark-active",          method: "POST",   path: "/items/:id/active" },
      { action: "mark-inactive",        method: "POST",   path: "/items/:id/inactive" },
    ],
  },
  {
    name: "composite-items",
    primary: "id",
    extra: ["sku", "rate", "item_type", "product_type", "mapped_items"],
    actions: [
      { action: "list",          method: "GET",    path: "/compositeitems" },
      { action: "get",           method: "GET",    path: "/compositeitems/:id" },
      { action: "create",        method: "POST",   path: "/compositeitems" },
      { action: "update",        method: "PUT",    path: "/compositeitems/:id" },
      { action: "delete",        method: "DELETE", path: "/compositeitems/:id" },
      { action: "mark-active",   method: "POST",   path: "/compositeitems/:id/active" },
      { action: "mark-inactive", method: "POST",   path: "/compositeitems/:id/inactive" },
    ],
  },
  {
    name: "bundles",
    primary: "id",
    extra: ["reference_number", "date", "composite_item_id", "composite_item_name", "quantity_to_bundle", "line_items", "is_completed"],
    actions: [
      { action: "list",   method: "GET",    path: "/bundles" },
      { action: "get",    method: "GET",    path: "/bundles/:id" },
      { action: "create", method: "POST",   path: "/bundles" },
      { action: "delete", method: "DELETE", path: "/bundles/:id" },
    ],
  },
  {
    name: "inventory-adjustments",
    primary: "id",
    extra: ["reference_number", "date", "reason", "adjustment_type", "line_items"],
    actions: [
      { action: "list",   method: "GET",    path: "/inventoryadjustments" },
      { action: "get",    method: "GET",    path: "/inventoryadjustments/:id" },
      { action: "create", method: "POST",   path: "/inventoryadjustments" },
      { action: "update", method: "PUT",    path: "/inventoryadjustments/:id" },
      { action: "delete", method: "DELETE", path: "/inventoryadjustments/:id" },
    ],
  },
  {
    name: "transfer-orders",
    primary: "id",
    extra: ["transfer_order_number", "date", "from_location_id", "to_location_id", "line_items"],
    actions: [
      { action: "list",                 method: "GET",    path: "/transferorders" },
      { action: "get",                  method: "GET",    path: "/transferorders/:id" },
      { action: "create",               method: "POST",   path: "/transferorders" },
      { action: "update",               method: "PUT",    path: "/transferorders/:id" },
      { action: "delete",               method: "DELETE", path: "/transferorders/:id" },
      { action: "mark-as-transferred",  method: "POST",   path: "/transferorders/:id/markastransferred" },
    ],
  },
  {
    name: "sales-orders",
    primary: "id",
    extra: ["customer_id", "salesorder_number", "date", "shipment_date", "line_items", "discount", "is_inclusive_tax"],
    actions: [
      { action: "list",         method: "GET",    path: "/salesorders" },
      { action: "get",          method: "GET",    path: "/salesorders/:id" },
      { action: "create",       method: "POST",   path: "/salesorders" },
      { action: "update",       method: "PUT",    path: "/salesorders/:id" },
      { action: "delete",       method: "DELETE", path: "/salesorders/:id" },
      { action: "bulk-delete",  method: "DELETE", path: "/salesorders", flags: ["salesorder_ids"] },
      { action: "mark-confirmed", method: "POST", path: "/salesorders/:id/status/confirmed" },
      { action: "mark-void",      method: "POST", path: "/salesorders/:id/status/void" },
      { action: "bulk-confirm", method: "POST",   path: "/salesorders/status/confirmed", flags: ["salesorder_ids"] },
    ],
  },
  {
    name: "packages",
    primary: "id",
    extra: ["package_number", "date", "line_items", "salesorder_id"],
    actions: [
      { action: "list",       method: "GET",    path: "/packages" },
      { action: "get",        method: "GET",    path: "/packages/:id" },
      { action: "create",     method: "POST",   path: "/packages", flags: ["salesorder_id"] },
      { action: "update",     method: "PUT",    path: "/packages/:id" },
      { action: "delete",     method: "DELETE", path: "/packages/:id" },
      { action: "bulk-print", method: "GET",    path: "/packages/print", flags: ["package_ids"] },
    ],
  },
  {
    name: "shipment-orders",
    primary: "id",
    extra: ["shipment_number", "date", "delivery_method", "tracking_number", "package_ids", "salesorder_id"],
    actions: [
      { action: "get",            method: "GET",    path: "/shipmentorders/:id" },
      { action: "create",         method: "POST",   path: "/shipmentorders", flags: ["salesorder_id"] },
      { action: "update",         method: "PUT",    path: "/shipmentorders/:id" },
      { action: "delete",         method: "DELETE", path: "/shipmentorders/:id" },
      { action: "mark-delivered", method: "POST",   path: "/shipmentorders/:id/status/delivered" },
    ],
  },
  {
    name: "invoices",
    primary: "id",
    extra: ["customer_id", "invoice_number", "date", "due_date", "line_items", "is_inclusive_tax", "discount"],
    extraFlagDefs: { commentId: "Comment id", paymentId: "Invoice payment id (deletion)", creditId: "Applied credit id (deletion)", templateId: "Template id" },
    actions: [
      { action: "list",                  method: "GET",    path: "/invoices" },
      { action: "get",                   method: "GET",    path: "/invoices/:id" },
      { action: "create",                method: "POST",   path: "/invoices" },
      { action: "update",                method: "PUT",    path: "/invoices/:id" },
      { action: "delete",                method: "DELETE", path: "/invoices/:id" },
      { action: "mark-sent",             method: "POST",   path: "/invoices/:id/status/sent" },
      { action: "void",                  method: "POST",   path: "/invoices/:id/status/void" },
      { action: "mark-draft",            method: "POST",   path: "/invoices/:id/status/draft" },
      { action: "update-custom-field",   method: "PUT",    path: "/invoice/:id/customfields" },
      { action: "email",                 method: "POST",   path: "/invoices/:id/email" },
      { action: "get-email-content",     method: "GET",    path: "/invoices/:id/email" },
      { action: "email-invoices",        method: "POST",   path: "/invoices/email", flags: ["invoice_ids"] },
      { action: "get-payment-reminder",  method: "GET",    path: "/invoices/:id/paymentreminder" },
      { action: "disable-reminder",      method: "POST",   path: "/invoices/:id/paymentreminder/disable" },
      { action: "enable-reminder",       method: "POST",   path: "/invoices/:id/paymentreminder/enable" },
      { action: "bulk-export",           method: "GET",    path: "/invoices/pdf", flags: ["invoice_ids"] },
      { action: "bulk-print",            method: "GET",    path: "/invoices/print", flags: ["invoice_ids"] },
      { action: "write-off",             method: "POST",   path: "/invoices/:id/writeoff" },
      { action: "cancel-writeoff",       method: "POST",   path: "/invoices/:id/writeoff/cancel" },
      { action: "apply-credits",         method: "POST",   path: "/invoices/:id/credits" },
      { action: "list-payments",         method: "GET",    path: "/invoices/:id/payments" },
      { action: "list-credits-applied",  method: "GET",    path: "/invoices/:id/creditsapplied" },
      { action: "delete-payment",        method: "DELETE", path: "/invoices/:id/payments/:paymentId", flags: ["paymentId"] },
      { action: "delete-credit",         method: "DELETE", path: "/invoices/:id/creditsapplied/:creditId", flags: ["creditId"] },
      { action: "update-billing-address", method: "PUT",   path: "/invoices/:id/address/billing" },
      { action: "update-shipping-address", method: "PUT",  path: "/invoices/:id/address/shipping" },
      { action: "list-templates",        method: "GET",    path: "/invoices/templates" },
      { action: "update-template",       method: "PUT",    path: "/invoices/:id/templates/:templateId", flags: ["templateId"] },
      { action: "add-attachment",        method: "POST",   path: "/invoices/:id/attachment", multipart: true },
      { action: "get-attachment",        method: "GET",    path: "/invoices/:id/attachment" },
      { action: "update-attachment",     method: "PUT",    path: "/invoices/:id/attachment" },
      { action: "delete-attachment",     method: "DELETE", path: "/invoices/:id/attachment" },
      { action: "add-comment",           method: "POST",   path: "/invoices/:id/comments" },
      { action: "list-comments",         method: "GET",    path: "/invoices/:id/comments" },
      { action: "update-comment",        method: "PUT",    path: "/invoices/:id/comments/:commentId", flags: ["commentId"] },
      { action: "delete-comment",        method: "DELETE", path: "/invoices/:id/comments/:commentId", flags: ["commentId"] },
    ],
  },
  {
    name: "retainer-invoices",
    primary: "id",
    extra: ["customer_id", "retainerinvoice_number", "date", "line_items"],
    extraFlagDefs: { commentId: "Comment id", documentId: "Attachment document id", templateId: "Template id" },
    actions: [
      { action: "list",                   method: "GET",    path: "/retainerinvoices" },
      { action: "get",                    method: "GET",    path: "/retainerinvoices/:id" },
      { action: "create",                 method: "POST",   path: "/retainerinvoices" },
      { action: "update",                 method: "PUT",    path: "/retainerinvoices/:id" },
      { action: "delete",                 method: "DELETE", path: "/retainerinvoices/:id" },
      { action: "mark-sent",              method: "POST",   path: "/retainerinvoices/:id/status/sent" },
      { action: "void",                   method: "POST",   path: "/retainerinvoices/:id/status/void" },
      { action: "mark-draft",             method: "POST",   path: "/retainerinvoices/:id/status/draft" },
      { action: "submit-approval",        method: "POST",   path: "/retainerinvoices/:id/submit" },
      { action: "approve",                method: "POST",   path: "/retainerinvoices/:id/approve" },
      { action: "email",                  method: "POST",   path: "/retainerinvoices/:id/email", multipart: true },
      { action: "get-email-content",      method: "GET",    path: "/retainerinvoices/:id/email" },
      { action: "update-billing-address", method: "PUT",    path: "/retainerinvoices/:id/address/billing" },
      { action: "list-templates",         method: "GET",    path: "/retainerinvoices/templates" },
      { action: "update-template",        method: "PUT",    path: "/retainerinvoices/:id/templates/:templateId", flags: ["templateId"] },
      { action: "add-attachment",         method: "POST",   path: "/retainerinvoices/:id/attachment", multipart: true },
      { action: "get-attachment",         method: "GET",    path: "/retainerinvoices/:id/attachment" },
      { action: "delete-attachment",      method: "DELETE", path: "/retainerinvoices/:id/documents/:documentId", flags: ["documentId"] },
      { action: "add-comment",            method: "POST",   path: "/retainerinvoices/:id/comments" },
      { action: "list-comments",          method: "GET",    path: "/retainerinvoices/:id/comments" },
      { action: "update-comment",         method: "PUT",    path: "/retainerinvoices/:id/comments/:commentId", flags: ["commentId"] },
      { action: "delete-comment",         method: "DELETE", path: "/retainerinvoices/:id/comments/:commentId", flags: ["commentId"] },
    ],
  },
  {
    name: "customer-payments",
    primary: "id",
    extra: ["customer_id", "payment_mode", "amount", "date", "reference_number", "invoices"],
    actions: [
      { action: "list",                method: "GET",    path: "/customerpayments" },
      { action: "get",                 method: "GET",    path: "/customerpayments/:id" },
      { action: "create",              method: "POST",   path: "/customerpayments" },
      { action: "update",              method: "PUT",    path: "/customerpayments/:id" },
      { action: "delete",              method: "DELETE", path: "/customerpayments/:id" },
      { action: "update-custom-field", method: "PUT",    path: "/customerpayment/:id/customfields" },
    ],
  },
  {
    name: "sales-returns",
    primary: "id",
    extraFlagDefs: { receiveId: "Sales return receive id" },
    extra: ["salesorder_id", "date", "reason", "line_items"],
    actions: [
      { action: "list",           method: "GET",    path: "/salesreturns" },
      { action: "get",            method: "GET",    path: "/salesreturns/:id" },
      { action: "create",         method: "POST",   path: "/salesreturns" },
      { action: "update",         method: "PUT",    path: "/salesreturns/:id" },
      { action: "delete",         method: "DELETE", path: "/salesreturns/:id" },
      { action: "create-receive", method: "POST",   path: "/salesreturnreceives" },
      { action: "delete-receive", method: "DELETE", path: "/salesreturnreceives/:receiveId", flags: ["receiveId"] },
    ],
  },
  {
    name: "credit-notes",
    primary: "id",
    extra: ["customer_id", "creditnote_number", "date", "line_items", "reference_number"],
    extraFlagDefs: { commentId: "Comment id", invoiceId: "Applied invoice id (deletion)", refundId: "Refund id", templateId: "Template id" },
    actions: [
      { action: "list",                       method: "GET",    path: "/creditnotes" },
      { action: "get",                        method: "GET",    path: "/creditnotes/:id" },
      { action: "create",                     method: "POST",   path: "/creditnotes" },
      { action: "update",                     method: "PUT",    path: "/creditnotes/:id" },
      { action: "delete",                     method: "DELETE", path: "/creditnotes/:id" },
      { action: "email",                      method: "POST",   path: "/creditnotes/:id/email" },
      { action: "get-email-content",          method: "GET",    path: "/creditnotes/:id/email" },
      { action: "void",                       method: "POST",   path: "/creditnotes/:id/void" },
      { action: "convert-to-draft",           method: "POST",   path: "/creditnotes/:id/draft" },
      { action: "convert-to-open",            method: "POST",   path: "/creditnotes/:id/converttoopen" },
      { action: "submit",                     method: "POST",   path: "/creditnotes/:id/submit" },
      { action: "approve",                    method: "POST",   path: "/creditnotes/:id/approve" },
      { action: "email-history",              method: "GET",    path: "/creditnotes/:id/emailhistory" },
      { action: "update-billing-address",     method: "PUT",    path: "/creditnotes/:id/address/billing" },
      { action: "update-shipping-address",    method: "PUT",    path: "/creditnotes/:id/address/shipping" },
      { action: "list-templates",             method: "GET",    path: "/creditnotes/templates" },
      { action: "update-template",            method: "PUT",    path: "/creditnotes/:id/templates/:templateId", flags: ["templateId"] },
      { action: "apply-credits-to-invoices",  method: "POST",   path: "/creditnotes/:id/invoices" },
      { action: "list-invoices-credited",     method: "GET",    path: "/creditnotes/:id/invoices" },
      { action: "delete-applied-credits",     method: "DELETE", path: "/creditnotes/:id/invoices/:invoiceId", flags: ["invoiceId"] },
      { action: "add-comment",                method: "POST",   path: "/creditnotes/:id/comments" },
      { action: "list-comments",              method: "GET",    path: "/creditnotes/:id/comments" },
      { action: "delete-comment",             method: "DELETE", path: "/creditnotes/:id/comments/:commentId", flags: ["commentId"] },
      { action: "list-refunds",               method: "GET",    path: "/creditnotes/refunds" },
      { action: "refund",                     method: "POST",   path: "/creditnotes/:id/refunds" },
      { action: "list-credit-note-refunds",   method: "GET",    path: "/creditnotes/:id/refunds" },
      { action: "get-refund",                 method: "GET",    path: "/creditnotes/:id/refunds/:refundId", flags: ["refundId"] },
      { action: "update-refund",              method: "PUT",    path: "/creditnotes/:id/refunds/:refundId", flags: ["refundId"] },
      { action: "delete-refund",              method: "DELETE", path: "/creditnotes/:id/refunds/:refundId", flags: ["refundId"] },
    ],
  },
  {
    name: "purchase-orders",
    primary: "id",
    extra: ["vendor_id", "purchaseorder_number", "date", "delivery_date", "line_items"],
    actions: [
      { action: "list",          method: "GET",    path: "/purchaseorders" },
      { action: "get",           method: "GET",    path: "/purchaseorders/:id" },
      { action: "create",        method: "POST",   path: "/purchaseorders" },
      { action: "update",        method: "PUT",    path: "/purchaseorders/:id" },
      { action: "delete",        method: "DELETE", path: "/purchaseorders/:id" },
      { action: "mark-issued",   method: "POST",   path: "/purchaseorders/:id/status/issued" },
      { action: "mark-cancelled",method: "POST",   path: "/purchaseorders/:id/status/cancelled" },
    ],
  },
  {
    name: "purchase-receives",
    primary: "id",
    extra: ["purchaseorder_id", "date", "line_items"],
    actions: [
      { action: "get",    method: "GET",    path: "/purchasereceives/:id" },
      { action: "create", method: "POST",   path: "/purchasereceives" },
      { action: "update", method: "PUT",    path: "/purchasereceives/:id" },
      { action: "delete", method: "DELETE", path: "/purchasereceives/:id" },
    ],
  },
  {
    name: "bills",
    primary: "id",
    extra: ["vendor_id", "bill_number", "date", "due_date", "line_items"],
    actions: [
      { action: "list",                method: "GET",    path: "/bills" },
      { action: "get",                 method: "GET",    path: "/bills/:id" },
      { action: "create",              method: "POST",   path: "/bills" },
      { action: "update",              method: "PUT",    path: "/bills/:id" },
      { action: "delete",              method: "DELETE", path: "/bills/:id" },
      { action: "update-custom-field", method: "PUT",    path: "/bill/:id/customfields" },
      { action: "mark-open",           method: "POST",   path: "/bills/:id/status/open" },
      { action: "mark-void",           method: "POST",   path: "/bills/:id/status/void" },
    ],
  },
  {
    name: "vendor-credits",
    primary: "id",
    extra: ["vendor_id", "vendor_credit_number", "date", "line_items"],
    extraFlagDefs: { commentId: "Comment id", billId: "Bill id (apply/delete bills credited)", refundId: "Refund id" },
    actions: [
      { action: "list",                       method: "GET",    path: "/vendorcredits" },
      { action: "get",                        method: "GET",    path: "/vendorcredits/:id" },
      { action: "create",                     method: "POST",   path: "/vendorcredits" },
      { action: "update",                     method: "PUT",    path: "/vendorcredits/:id" },
      { action: "delete",                     method: "DELETE", path: "/vendorcredits/:id" },
      { action: "convert-to-open",            method: "POST",   path: "/vendorcredits/:id/status/open" },
      { action: "void",                       method: "POST",   path: "/vendorcredits/:id/status/void" },
      { action: "submit",                     method: "POST",   path: "/vendorcredits/:id/submit" },
      { action: "approve",                    method: "POST",   path: "/vendorcredits/:id/approve" },
      { action: "apply-credits-to-bill",      method: "POST",   path: "/vendorcredits/:id/bills" },
      { action: "list-bills-credited",        method: "GET",    path: "/vendorcredits/:id/bills" },
      { action: "delete-bills-credited",      method: "DELETE", path: "/vendorcredits/:id/bills/:billId", flags: ["billId"] },
      { action: "refund",                     method: "POST",   path: "/vendorcredits/:id/refunds" },
      { action: "list-refunds",               method: "GET",    path: "/vendorcredits/:id/refunds" },
      { action: "get-refund",                 method: "GET",    path: "/vendorcredits/:id/refunds/:refundId", flags: ["refundId"] },
      { action: "update-refund",              method: "PUT",    path: "/vendorcredits/:id/refunds/:refundId", flags: ["refundId"] },
      { action: "delete-refund",              method: "DELETE", path: "/vendorcredits/:id/refunds/:refundId", flags: ["refundId"] },
      { action: "list-vendor-credit-refunds", method: "GET",    path: "/vendorcredits/refunds" },
      { action: "add-comment",                method: "POST",   path: "/vendorcredits/:id/comments" },
      { action: "list-comments",              method: "GET",    path: "/vendorcredits/:id/comments" },
      { action: "delete-comment",             method: "DELETE", path: "/vendorcredits/:id/comments/:commentId", flags: ["commentId"] },
    ],
  },
  {
    name: "locations",
    primary: "id",
    extra: ["location_name", "address", "phone", "email"],
    actions: [
      { action: "enable",        method: "POST",   path: "/settings/locations/enable" },
      { action: "list",          method: "GET",    path: "/locations" },
      { action: "create",        method: "POST",   path: "/locations" },
      { action: "update",        method: "PUT",    path: "/locations/:id" },
      { action: "delete",        method: "DELETE", path: "/locations/:id" },
      { action: "mark-active",   method: "POST",   path: "/locations/:id/active" },
      { action: "mark-inactive", method: "POST",   path: "/locations/:id/inactive" },
      { action: "mark-primary",  method: "POST",   path: "/locations/:id/markasprimary" },
    ],
  },
  {
    name: "price-lists",
    primary: "id",
    extra: ["name", "currency_id", "percentage", "pricebook_type", "rounding_type", "is_increase"],
    actions: [
      { action: "list",          method: "GET",    path: "/pricebooks" },
      { action: "create",        method: "POST",   path: "/pricebooks" },
      { action: "update",        method: "PUT",    path: "/pricebooks/:id" },
      { action: "delete",        method: "DELETE", path: "/pricebooks/:id" },
      { action: "mark-active",   method: "POST",   path: "/pricebooks/:id/active" },
      { action: "mark-inactive", method: "POST",   path: "/pricebooks/:id/inactive" },
    ],
  },
  {
    name: "users",
    primary: "id",
    extra: ["name", "email", "user_role"],
    actions: [
      { action: "list",            method: "GET",    path: "/users" },
      { action: "get",             method: "GET",    path: "/users/:id" },
      { action: "create",          method: "POST",   path: "/users" },
      { action: "update",          method: "PUT",    path: "/users/:id" },
      { action: "delete",          method: "DELETE", path: "/users/:id" },
      { action: "get-current-user",method: "GET",    path: "/users/me" },
      { action: "invite",          method: "POST",   path: "/users/:id/invite" },
      { action: "mark-active",     method: "POST",   path: "/users/:id/active" },
      { action: "mark-inactive",   method: "POST",   path: "/users/:id/inactive" },
    ],
  },
  {
    name: "tasks",
    primary: "id",
    extra: ["task_name", "project_id", "user_id", "rate"],
    extraFlagDefs: { commentId: "Comment id", documentId: "Attachment document id" },
    actions: [
      { action: "list",                          method: "GET",    path: "/tasks" },
      { action: "get",                           method: "GET",    path: "/tasks/:id" },
      { action: "create",                        method: "POST",   path: "/tasks" },
      { action: "update",                        method: "PUT",    path: "/tasks/:id" },
      { action: "delete",                        method: "DELETE", path: "/tasks/:id" },
      { action: "bulk-update",                   method: "PUT",    path: "/tasks" },
      { action: "bulk-delete",                   method: "DELETE", path: "/tasks", flags: ["task_ids"] },
      { action: "update-completed-percentage",   method: "POST",   path: "/tasks/:id/percentage" },
      { action: "mark-open",                     method: "POST",   path: "/tasks/:id/markasopen" },
      { action: "mark-ongoing",                  method: "POST",   path: "/tasks/:id/markasongoing" },
      { action: "mark-completed",                method: "POST",   path: "/tasks/:id/markascompleted" },
      { action: "add-comment",                   method: "POST",   path: "/tasks/:id/comments" },
      { action: "list-comments",                 method: "GET",    path: "/tasks/:id/comments" },
      { action: "delete-comment",                method: "DELETE", path: "/tasks/:id/comments/:commentId", flags: ["commentId"] },
      { action: "add-attachment",                method: "POST",   path: "/tasks/:id/attachment", multipart: true },
      { action: "get-document",                  method: "GET",    path: "/tasks/:id/documents/:documentId", flags: ["documentId"] },
      { action: "delete-document",               method: "DELETE", path: "/tasks/:id/documents/:documentId", flags: ["documentId"] },
    ],
  },
  {
    name: "taxes",
    primary: "id",
    extra: ["tax_name", "tax_percentage", "tax_type"],
    extraFlagDefs: { taxGroupId: "Tax group id", taxAuthorityId: "Tax authority id", taxExemptionId: "Tax exemption id" },
    actions: [
      { action: "list",                method: "GET",    path: "/settings/taxes" },
      { action: "get",                 method: "GET",    path: "/settings/taxes/:id" },
      { action: "create",              method: "POST",   path: "/settings/taxes" },
      { action: "update",              method: "PUT",    path: "/settings/taxes/:id" },
      { action: "delete",              method: "DELETE", path: "/settings/taxes/:id" },
      { action: "create-tax-group",    method: "POST",   path: "/settings/taxgroups" },
      { action: "get-tax-group",       method: "GET",    path: "/settings/taxgroups/:taxGroupId", flags: ["taxGroupId"] },
      { action: "update-tax-group",    method: "PUT",    path: "/settings/taxgroups/:taxGroupId", flags: ["taxGroupId"] },
      { action: "delete-tax-group",    method: "DELETE", path: "/settings/taxgroups/:taxGroupId", flags: ["taxGroupId"] },
      { action: "create-tax-authority",method: "POST",   path: "/settings/taxauthorities" },
      { action: "list-tax-authorities",method: "GET",    path: "/settings/taxauthorities" },
      { action: "get-tax-authority",   method: "GET",    path: "/settings/taxauthorities/:taxAuthorityId", flags: ["taxAuthorityId"] },
      { action: "update-tax-authority",method: "PUT",    path: "/settings/taxauthorities/:taxAuthorityId", flags: ["taxAuthorityId"] },
      { action: "delete-tax-authority",method: "DELETE", path: "/settings/taxauthorities/:taxAuthorityId", flags: ["taxAuthorityId"] },
      { action: "create-tax-exemption",method: "POST",   path: "/settings/taxexemptions" },
      { action: "list-tax-exemptions", method: "GET",    path: "/settings/taxexemptions" },
      { action: "get-tax-exemption",   method: "GET",    path: "/settings/taxexemptions/:taxExemptionId", flags: ["taxExemptionId"] },
      { action: "update-tax-exemption",method: "PUT",    path: "/settings/taxexemptions/:taxExemptionId", flags: ["taxExemptionId"] },
      { action: "delete-tax-exemption",method: "DELETE", path: "/settings/taxexemptions/:taxExemptionId", flags: ["taxExemptionId"] },
    ],
  },
  {
    name: "currencies",
    primary: "id",
    extra: ["currency_code", "currency_symbol", "exchange_rate"],
    actions: [
      { action: "list",   method: "GET",    path: "/settings/currencies" },
      { action: "get",    method: "GET",    path: "/settings/currencies/:id" },
      { action: "create", method: "POST",   path: "/settings/currencies" },
      { action: "update", method: "PUT",    path: "/settings/currencies/:id" },
      { action: "delete", method: "DELETE", path: "/settings/currencies/:id" },
    ],
  },
  {
    name: "delivery-challans",
    primary: "id",
    extra: ["customer_id", "deliverychallan_number", "date", "line_items", "type"],
    extraFlagDefs: { documentId: "Attachment document id", templateId: "Template id" },
    actions: [
      { action: "list",                   method: "GET",    path: "/deliverychallans" },
      { action: "get",                    method: "GET",    path: "/deliverychallans/:id" },
      { action: "create",                 method: "POST",   path: "/deliverychallans" },
      { action: "update",                 method: "PUT",    path: "/deliverychallans/:id" },
      { action: "delete",                 method: "DELETE", path: "/deliverychallans/:id" },
      { action: "mark-open",              method: "POST",   path: "/deliverychallans/:id/status/open" },
      { action: "mark-delivered",         method: "POST",   path: "/deliverychallans/:id/status/delivered" },
      { action: "mark-returned",          method: "POST",   path: "/deliverychallans/:id/status/returned" },
      { action: "mark-undelivered",       method: "POST",   path: "/deliverychallans/:id/status/undelivered" },
      { action: "return-items",           method: "PUT",    path: "/deliverychallans/return", flags: ["deliverychallan_ids"] },
      { action: "undo-return",            method: "PUT",    path: "/deliverychallans/undo/return", flags: ["deliverychallan_ids"] },
      { action: "add-attachment",         method: "POST",   path: "/deliverychallans/:id/attachment", multipart: true },
      { action: "get-attachment",         method: "GET",    path: "/deliverychallans/:id/documents/:documentId", flags: ["documentId"] },
      { action: "delete-attachment",      method: "DELETE", path: "/deliverychallans/:id/documents/:documentId", flags: ["documentId"] },
      { action: "list-templates",         method: "GET",    path: "/deliverychallans/templates" },
      { action: "update-template",        method: "PUT",    path: "/deliverychallans/:id/templates/:templateId", flags: ["templateId"] },
      { action: "update-shipping-address",method: "PUT",    path: "/deliverychallans/:id/address/shipping" },
    ],
  },
  {
    name: "reporting-tags",
    primary: "id",
    extra: ["tag_name", "options"],
    extraFlagDefs: { optionId: "Tag option id" },
    actions: [
      { action: "list",                         method: "GET",    path: "/reportingtags" },
      { action: "create",                       method: "POST",   path: "/reportingtags" },
      { action: "update",                       method: "PUT",    path: "/reportingtags/:id" },
      { action: "delete",                       method: "DELETE", path: "/reportingtags/:id" },
      { action: "mark-default-option",          method: "POST",   path: "/reportingtags/:id" },
      { action: "update-options",               method: "PUT",    path: "/reportingtags/:id/options" },
      { action: "update-visibility-conditions", method: "PUT",    path: "/reportingtags/:id/criteria" },
      { action: "mark-active",                  method: "POST",   path: "/reportingtags/:id/active" },
      { action: "mark-inactive",                method: "POST",   path: "/reportingtags/:id/inactive" },
      { action: "mark-option-active",           method: "POST",   path: "/reportingtags/:id/option/:optionId/active", flags: ["optionId"] },
      { action: "mark-option-inactive",         method: "POST",   path: "/reportingtags/:id/option/:optionId/inactive", flags: ["optionId"] },
      { action: "get-options-detail",           method: "GET",    path: "/reportingtags/options" },
      { action: "get-all-options",              method: "GET",    path: "/reportingtags/:id/options/all" },
      { action: "reorder",                      method: "PUT",    path: "/reportingtags/reorder" },
    ],
  },
];

// Some flags occur frequently across resources; describe them once.
const FLAG_DESCRIPTIONS = {
  id: "Primary resource id",
  body: "Raw JSON body (overrides individual flags)",
  page: "Page number for pagination (default 1)",
  per_page: "Results per page (server default 200)",
  "idempotency-key": "Idempotency-Key header value",
  "if-match": "If-Match ETag header for optimistic concurrency",
  file: "Path to file for multipart upload (--add-attachment, etc.)",
  "organization-id": "Organization id override (defaults to ZOHO_INVENTORY_ORG_ID env)",
  name: "Resource name (for create/update)",
  description: "Free-form description",
  status: "Filter by status (list) or set status (create/update)",
  contact_name: "Contact display name",
  company_name: "Company name",
  contact_type: "customer | vendor",
  customer_id: "Zoho customer id",
  vendor_id: "Zoho vendor id",
  date: "Date in YYYY-MM-DD",
  line_items: "JSON array of line items (use --body for complex shapes)",
  invoice_number: "Invoice number override",
  salesorder_number: "Sales order number override",
  purchaseorder_number: "Purchase order number override",
  bill_number: "Bill number",
  due_date: "Due date in YYYY-MM-DD",
  reference_number: "Free-form reference number",
  reason: "Reason for the operation (e.g. inventory adjustment)",
  adjustment_type: "quantity | value",
  shipment_date: "Shipment date in YYYY-MM-DD",
  delivery_date: "Expected delivery date",
  delivery_method: "Delivery method label",
  tracking_number: "Carrier tracking number",
  package_number: "Package number override",
  package_ids: "Comma-separated list of package ids",
  invoice_ids: "Comma-separated list of invoice ids",
  salesorder_ids: "Comma-separated list of sales order ids",
  deliverychallan_ids: "Comma-separated list of delivery challan ids",
  task_ids: "Comma-separated list of task ids",
  item_ids: "Comma-separated list of item ids",
  shipment_number: "Shipment number override",
  salesorder_id: "Parent sales order id",
  purchaseorder_id: "Parent purchase order id",
  contactId: "Parent contact id",
  commentId: "Comment id",
  documentId: "Attachment document id",
  paymentId: "Invoice payment id",
  creditId: "Applied credit id",
  templateId: "PDF template id",
  refundId: "Refund id",
  receiveId: "Sales return receive id",
  invoiceId: "Applied invoice id",
  billId: "Bill id (vendor credit application)",
  taxGroupId: "Tax group id",
  taxAuthorityId: "Tax authority id",
  taxExemptionId: "Tax exemption id",
  optionId: "Tag option id",
  sku: "Stock-keeping unit",
  rate: "Sales rate (decimal)",
  purchase_rate: "Purchase rate (decimal)",
  unit: "Unit of measure (pcs, kg, ...)",
  tax_id: "Default tax id",
  is_taxable: "true | false",
  item_type: "inventory | service | non_inventory",
  product_type: "goods | service",
  group_id: "Item group id",
  reorder_level: "Reorder level threshold",
  brand: "Brand name",
  manufacturer: "Manufacturer name",
  mapped_items: "JSON array of mapped item objects",
  composite_item_id: "Composite item id",
  composite_item_name: "Composite item name",
  quantity_to_bundle: "Quantity to bundle",
  is_completed: "true | false",
  customer: "Customer name (legacy)",
  invoice: "Invoice number (legacy)",
  transfer_order_number: "Transfer order number",
  from_location_id: "Source location id (Ahimamau or other)",
  to_location_id: "Destination location id",
  retainerinvoice_number: "Retainer invoice number override",
  payment_mode: "cash | bankremittance | check | creditcard | ...",
  amount: "Decimal amount",
  invoices: "JSON array of {invoice_id, amount_applied, ...}",
  is_inclusive_tax: "true | false",
  discount: "Discount as percentage or absolute, depending on org settings",
  creditnote_number: "Credit note number override",
  vendor_credit_number: "Vendor credit number override",
  location_name: "Location display name",
  address: "Address object (use --body for nested fields)",
  phone: "Phone number",
  email: "Email address",
  currency_id: "Currency id",
  percentage: "Markup/markdown percentage",
  pricebook_type: "fixed_percentage | per_item",
  rounding_type: "no_rounding | round_to_dollar_minus_01 | …",
  is_increase: "true (markup) | false (markdown)",
  user_role: "Zoho role id",
  task_name: "Task name",
  project_id: "Project id",
  user_id: "Assigned user id",
  tax_name: "Tax name",
  tax_percentage: "Tax percentage as decimal",
  tax_type: "tax | compound_tax",
  currency_code: "ISO currency code (INR, USD, …)",
  currency_symbol: "Currency symbol (₹, $, …)",
  exchange_rate: "Exchange rate vs base currency",
  deliverychallan_number: "Delivery challan number override",
  type: "delivery challan type label",
  tag_name: "Reporting tag name",
  options: "JSON array of tag option objects",
  time_zone: "IANA tz (Asia/Kolkata, …)",
  portal_name: "Portal name (organization)",
  first_name: "Given name",
  last_name: "Family name",
  mobile: "Mobile number",
};

function flagDef(name, opts = {}) {
  const description = opts.description || FLAG_DESCRIPTIONS[name] || `--${name}`;
  return {
    type: opts.type || "string",
    required: !!opts.required,
    description,
  };
}

function buildAction(resource, action) {
  const flags = {};

  // Path-param flags (everything after a `:` in the path that isn't `:id`).
  for (const m of action.path.matchAll(/:([a-zA-Z_]+)/g)) {
    const k = m[1];
    if (k === "id") {
      flags.id = flagDef("id", { required: true, description: FLAG_DESCRIPTIONS.id });
    } else {
      const desc = (resource.extraFlagDefs && resource.extraFlagDefs[k]) || FLAG_DESCRIPTIONS[k] || `${k}`;
      flags[k] = flagDef(k, { required: true, description: desc });
    }
  }

  // Pagination flags on list actions only.
  if (action.action === "list") {
    flags.page = flagDef("page");
    flags.per_page = flagDef("per_page");
  }

  // Common body flags on create/update (top-level scalar fields for ergonomics).
  if (["create", "update"].includes(action.action)) {
    for (const k of [...COMMON_BODY_FLAGS, ...(resource.extra || [])]) {
      if (!flags[k]) flags[k] = flagDef(k);
    }
  }

  // Action-specific flag overrides.
  for (const k of action.flags || []) {
    if (!flags[k]) flags[k] = flagDef(k, { required: true });
  }

  // Multipart actions take --file.
  if (action.multipart) {
    flags.file = flagDef("file", { required: true, description: FLAG_DESCRIPTIONS.file });
  }

  // Raw body escape hatch on every non-GET non-DELETE action.
  if (action.method !== "GET" && action.method !== "DELETE" && !action.multipart) {
    flags.body = flagDef("body", { description: FLAG_DESCRIPTIONS.body });
  }

  // Org override always available.
  flags["organization-id"] = flagDef("organization-id");

  return { method: action.method, path: action.path, description: actionDescription(action), flags };
}

function actionDescription(action) {
  return action.description || `${action.method} ${action.path}`;
}

function emitFile(resource) {
  const actionsObj = {};
  for (const action of resource.actions) {
    actionsObj[action.action] = buildAction(resource, action);
  }
  const lines = [];
  lines.push(`// \`${resource.name}\` resource — generated from the Zoho Inventory API catalog.`);
  lines.push(`// Edit RESOURCES in scripts/gen-resources.mjs (kept locally) and re-emit, rather`);
  lines.push(`// than hand-tweaking these files; otherwise upstream regeneration will undo edits.`);
  lines.push(`import { buildPayload } from "../lib/payload.mjs";`);
  lines.push("");
  lines.push("export default {");
  lines.push(`  name: "${resource.name}",`);
  lines.push("  actions: " + JSON.stringify(actionsObj, null, 2).split("\n").map((l, i) => i === 0 ? l : "  " + l).join("\n") + ",");
  lines.push(`  buildPayload(values) { return buildPayload(values); },`);
  lines.push("};");
  return lines.join("\n") + "\n";
}

for (const r of RESOURCES) {
  const path = join(OUT_DIR, `${r.name}.mjs`);
  writeFileSync(path, emitFile(r));
  console.log("wrote", path);
}

// Also emit registry list for bin/zoho-inventory-cli.mjs.
const importLines = RESOURCES.map((r) => {
  const ident = r.name.replace(/-([a-z])/g, (_m, c) => c.toUpperCase());
  return `import ${ident} from "../commands/${r.name}.mjs";`;
}).join("\n");
const arrayLine = "const COMMANDS = [\n" + RESOURCES.map((r) => "  " + r.name.replace(/-([a-z])/g, (_m, c) => c.toUpperCase())).join(",\n") + ",\n];";
console.log("\n--- bin/ imports ---\n" + importLines + "\n\n" + arrayLine);

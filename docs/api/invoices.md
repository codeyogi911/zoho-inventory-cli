<!-- Extracted from https://www.zoho.com/inventory/api/v1/invoices/ by tools/fetch-api-docs.mjs. DERIVED, not authoritative — open the URL when it matters. -->

# invoices

Source: <https://www.zoho.com/inventory/api/v1/invoices/>

---

POST

/invoices

List invoices

GET

/invoices

Update an invoice

PUT

/invoices/{invoice_id}

Get an invoice

GET

/invoices/{invoice_id}

Delete an invoice

DELETE

/invoices/{invoice_id}

Update custom field in existing invoices

PUT

/invoice/{invoice_id}/customfields

Mark an invoice as sent

POST

/invoices/{invoice_id}/status/sent

Void an invoice

POST

/invoices/{invoice_id}/status/void

Mark as draft

POST

/invoices/{invoice_id}/status/draft

Email an invoice

POST

/invoices/{invoice_id}/email

Get invoice email content

GET

/invoices/{invoice_id}/email

Email invoices

POST

/invoices/email

Get payment reminder mail content

GET

/invoices/{invoice_id}/paymentreminder

Bulk export Invoices

GET

/invoices/pdf

Bulk print invoices

GET

/invoices/print

Disable payment reminder

POST

/invoices/{invoice_id}/paymentreminder/disable

Enable payment reminder

POST

/invoices/{invoice_id}/paymentreminder/enable

Write off invoice

POST

/invoices/{invoice_id}/writeoff

Cancel write off

POST

/invoices/{invoice_id}/writeoff/cancel

Update billing address

PUT

/invoices/{invoice_id}/address/billing

Update shipping address

PUT

/invoices/{invoice_id}/address/shipping

List invoice templates

GET

/invoices/templates

Update invoice template

PUT

/invoices/{invoice_id}/templates/{template_id}

List invoice payments

GET

/invoices/{invoice_id}/payments

List credits applied

GET

/invoices/{invoice_id}/creditsapplied

Apply credits

POST

/invoices/{invoice_id}/credits

Delete a payment

DELETE

/invoices/{invoice_id}/payments/{invoice_payment_id}

Delete  applied credit

DELETE

/invoices/{invoice_id}/creditsapplied/{creditnotes_invoice_id}

Add attachment to an invoice

POST

/invoices/{invoice_id}/attachment

Update attachment preference

PUT

/invoices/{invoice_id}/attachment

Get an invoice attachment

GET

/invoices/{invoice_id}/attachment

Delete an attachment

DELETE

/invoices/{invoice_id}/attachment

Add comment

POST

/invoices/{invoice_id}/comments

List invoice comments & history

GET

/invoices/{invoice_id}/comments

Update comment

PUT

/invoices/{invoice_id}/comments/{comment_id}

Delete a comment

DELETE

/invoices/{invoice_id}/comments/{comment_id}

Submit an invoice for approval

POST

/invoices/{invoice_id}/submit

Approve an invoice

POST

/invoices/{invoice_id}/approve

Final approval of an invoice

POST

/invoices/{invoice_id}/approve/final

Reject an invoice

POST

/invoices/{invoice_id}/reject

Bulk submit invoices for approval

POST

/invoices/submit

Bulk approve invoices

POST

/invoices/approve

#### Attribute

invoice_id

string

The ID of the invoice

ach_payment_initiated

boolean

To check initiation of ACH Payment

invoice_number

string

An unique number given to the invoice. Maximum length [100]

date

string

invoice date. Default date format is yyyy-mm-dd.

status

string

Search invoices by invoice status.Allowed Values: sent, draft, overdue, paid, void, unpaid, partially_paid and viewed

payment_terms

integer

Payment terms in days e.g. 15, 30, 60. Invoice due date will be calculated based on this. Maximum length [100]

payment_terms_label

string

Used to override the default payment terms label. Default value for 15 days is "Net 15 Days". Maximum length [100]

due_date

string

due date of the invoices. Default date format is yyyy-mm-dd.

payment_expected_date

string

The expected date of payment

last_payment_date

string

The last payment date of the invoice

reference_number

string

The reference number of the invoice

customer_id

string

ID of the customer the invoice has to be created.

customer_name

string

The name of the customer. Maximum length [100]

contact_persons_associated

array

Contact Persons associated with the invoice.

Show Sub-Attributes

contact_person_id

string

Unique ID of the Contact Person

contact_person_name

string

Name of the Contact Person

first_name

string

First Name of the Contact Person

last_name

string

Last Name of the Contact Person

contact_person_email

string

Email ID of the Contact Person.

phone

string

Phone Number of the Contact Person

mobile

string

Mobile Number of the Contact Person

communication_preference

object

Preferred modes of communication for the contact person at transaction level.

Show Sub-Attributes

is_email_enabled

boolean

Used to check if Email communication preference is enabled for the contact person at transaction level.

is_sms_enabled

boolean

SMS integration
only

Used to check if SMS communication preference is enabled for the contact person at transaction level.

is_whatsapp_enabled

boolean

WhatsApp integration
only

Used to check if WhatsApp communication preference is enabled for the contact person at transaction level.

currency_id

string

The currenct id of the currency

currency_code

string

The currency code in which the invoice is created.

exchange_rate

float

Exchange rate of the currency.

discount

float

Discount applied to the invoice, which can be either a percentage or a flat amount. For percentage discounts, the value should include the % symbol (e.g., 10%). For example, on Rs.1000, a 10% discount results in Rs.900, while a flat Rs.200 discount results in Rs.800. Maximum length [100]

is_discount_before_tax

boolean

Check if discount is exclusive of tax

discount_type

string

Type of discount. Allowed values are entity_level,item_level. For entity_level type, discount is applied at entity level and the node discount resides outside the line_items node.For item_level type, discount is applied at item level and the node discount resides inside each line_item under the line_items node.

is_inclusive_tax

boolean

To check if discount is inclusive of tax

recurring_invoice_id

string

ID of the recurring invoice from which the invoice is created.

is_viewed_by_client

boolean

Check if invoice is viewed by client

has_attachment

boolean

To check if invoice has an attachment

client_viewed_time

string

Time when client viewed the statement

line_items

array

Items listed in invoice

Show Sub-Attributes

line_item_id

string

The line item ID

item_id

string

Unique item id.

project_id

string

Unique ID of the projet associated to an invoice

sat_item_key_code

string

🇲🇽

Mexico

only

Add SAT Item Key Code for your goods/services. Download the CFDI Catalogs.

unitkey_code

string

🇲🇽

Mexico

only

Add SAT Unit Key Code for your goods/services. Download the CFDI Catalogs.

time_entry_ids

string

Unique ID's of all the time entries associated to the linked project

expense_id

string

Unique ID of the expenses associated

expense_receipt_name

string

Name of the expense receipt associated

name

string

The name of the line item. Maximum length [100]

description

string

The description of the line items. Maximum length [2000]

item_order

integer

The order of the line item_order

bcy_rate

float

base currency rate

rate

double

Rate of the line item.

quantity

float

The quantity of line item

unit

string

Unit of the line item e.g. kgs, Nos. Maximum length [100]

discount_amount

float

The discount amount on the line item

discount

float

Discount applied to the invoice, which can be either a percentage or a flat amount. For percentage discounts, the value should include the % symbol (e.g., 10%). For example, on Rs.1000, a 10% discount results in Rs.900, while a flat Rs.200 discount results in Rs.800. Maximum length [100]

tax_id

string

ID of the tax or tax group applied to the estimate

tds_tax_id

string

🇲🇽

Mexico

only

ID of the TDS tax.

tax_name

string

The name of the tax

tax_type

string

The type of the tax

tax_percentage

float

The  percentage of tax levied

item_total

float

The total amount of the line items

location_id

string

Location ID

location_name

string

Name of the location

hsn_or_sac

string

🇮🇳

India

only

Add HSN/SAC code for your goods/services

is_combo_product

boolean

Indicates whether the line item is a composite product.

combo_type

string

Type of the composite item. Allowed values are assembly and kit.

mapped_items

array

Items that are associated with the composite item (kit) in the line item. Applicable only when the line item is a kit type composite item.

Show Sub-Attributes

item_id

string

Unique item id.

line_item_id

string

The line item ID

item_order

integer

The order of the line item_order

name

string

The name of the line item. Maximum length [100]

description

string

The description of the line items. Maximum length [2000]

quantity

float

The quantity of line item

combo_type

string

Type of the composite item. Allowed values are assembly and kit.

warehouse_id

string

Unique ID of the warehouse from which the mapped item is fulfilled.

location_id

string

Location ID

mapped_items

array

Nested mapped items for kit within kit scenarios.

Show Sub-Attributes

item_id

string

Unique item id.

line_item_id

string

The line item ID

item_order

integer

The order of the line item_order

name

string

The name of the line item. Maximum length [100]

description

string

The description of the line items. Maximum length [2000]

quantity

float

The quantity of line item

combo_type

string

Type of the composite item. Allowed values are assembly and kit.

warehouse_id

string

Unique ID of the warehouse from which the mapped item is fulfilled.

location_id

string

Location ID

serial_numbers

array

Serial numbers for the line item. Applicable only for items with serial tracking enabled.

batches

array

Batches tracked for the line item. Returned for items with batch tracking enabled.

Show Sub-Attributes

batch_id

string

Unique identifier of the batch.

batch_number

string

Batch number.

external_batch_number

string

External batch number from the manufacturer.

manufacturer_date

string

Manufacturing date of the batch.

expiry_date

string

Expiration date of the batch.

out_quantity

float

Quantity removed from the batch.

storages

array

Batch with Bin tracked items
only

Bin/storage locations from which stock was issued for this batch.

Show Sub-Attributes

storage_id

string

Unique identifier of the bin/storage location.

storage_name

string

Display name of the bin/storage location.

out_quantity

float

Quantity removed from the bin.

storage_out_id

string

Unique identifier of the storage entry on the line item.

storages

array

Bin/storage locations tracked for the line item. Returned for items with bin tracking enabled.

Show Sub-Attributes

storage_id

string

Unique identifier of the bin/storage location.

storage_name

string

Display name of the bin/storage location.

out_quantity

float

Quantity removed from the bin.

storage_out_id

string

Unique identifier of the storage entry on the line item.

serial_numbers

array

Serial with Bin tracked items
only

Serial numbers allocated to this bin.

item_custom_fields

array

List of custom fields associated with the line item

Show Sub-Attributes

label

string

The label of the custom field.

value

string

Value of the custom field like VAT Id etc.

location_id

string

Location ID

location_name

string

Name of the location

shipping_charge

string

Shipping charges applied to the invoice. Maximum length [100]

adjustment

double

Adjustments made to the invoice.

adjustment_description

string

Customize the adjustment description. E.g. Rounding off.

sub_total

float

The sub total of the all items

tax_total

double

The total amount of the tax levied

total

string

The total amount to be paid

taxes

array

List of the taxes levied

Show Sub-Attributes

tax_name

string

The name of the tax

tax_amount

float

The amount of the tax levied

payment_reminder_enabled

boolean

Boolean to check if reminders have been enabled

payment_made

float

The amount paid

credits_applied

float

The credits applied

tax_amount_withheld

float

The tax amount which has been withheld

balance

string

The unpaid amount

write_off_amount

float

The write off amount. i.e. the amount which is not expected to be returned. Like a bad debt

allow_partial_payments

boolean

Boolean to check if partial payments are allowed for the contact

price_precision

integer

The precision value on the price

payment_options

object

Payment options available for payment

Show Sub-Attributes

payment_gateways

array

Payment gateways integrated and supported

Show Sub-Attributes

configured

boolean

Boolean check to see if a payment gateway has been configured

additional_field1

string

Paypal payment method. Allowed Values: standard and adaptive

gateway_name

string

Name of the payment gateway associated with the invoice. E.g. paypal, stripe.Allowed Values: paypal, authorize_net, payflow_pro, stripe, 2checkout and braintree

is_emailed

boolean

Boolean check to see if the mail has been sent

reminders_sent

integer

The number of reminders sent

last_reminder_sent_date

string

The date the last email was sent

billing_address

object

Billing address of the contact

Show Sub-Attributes

address

string

Billing address for the invoice

city

string

City of the customer's billing address.

state

string

State of the customer's billing address.

zip

string

Zip code of the customer's billing address.

country

string

Country of the customer's billing address.

fax

string

Customer's fax number.

shipping_address

object

Shipping address of the contact

Show Sub-Attributes

address

string

Billing address for the invoice

city

string

City of the customer's billing address.

state

string

State of the customer's billing address.

zip

string

Zip code of the customer's billing address.

country

string

Country of the customer's billing address.

fax

string

Customer's fax number.

notes

string

The notes added below expressing gratitude or for conveying some information.

terms

string

The terms added below expressing gratitude or for conveying some information.

custom_fields

array

Additional fields added to the invoice

Show Sub-Attributes

customfield_id

string

Unique ID of the custom field.

show_on_pdf

boolean

Boolean value to check if the custom field is to be dispplayed on the pdf.

value

string

Value of the custom field like VAT Id etc.

label

string

The label of the custom field.

template_id

string

ID of the pdf template associated with the invoice.

template_name

string

Name of the invoice template used

created_time

string

The time of creation of the invoices

last_modified_time

string

Date of last modification of the invoice

attachment_name

string

Name of the file attached

can_send_in_mail

boolean

To check if attachment can be sent in email

salesperson_id

string

ID of the salesperson linked to invoice

salesperson_name

string

Name of the salesperson. Maximum length [200]

invoice_url

string

Url of invoice as a link

is_pre_gst

boolean

🇮🇳

India

only

Applicable for transactions that fall before july 1, 2017

gst_no

string

🇮🇳

India

only

15 digit GST identification number of the customer.

gst_treatment

string

🇮🇳

India

only

Choose whether the contact is GST registered/unregistered/consumer/overseas. Allowed values are  business_gst  ,  business_none  ,  overseas  ,  consumer .

place_of_supply

string

🇮🇳

India

only

Place where the goods/services are supplied to. (If not given, place of contact given for the contact will be taken)

tax_treatment

string

🇲🇽

Mexico

only

VAT treatment for the invoice .Choose whether the contact falls under:home_country_mexico,border_region_mexico,non_mexico supported only for MX.

cfdi_usage

string

🇲🇽

Mexico

only

Choose CFDI Usage. Allowed values:acquisition_of_merchandise, return_discount_bonus, general_expense, buildings, furniture_office_equipment, transport_equipment, computer_equipmentdye_molds_tools, telephone_communication, satellite_communication, other_machinery_equipment, hospital_expense, medical_expense_disability, funeral_expense, donation, interest_mortage_loans, contribution_sar, medical_expense_insurance_pormium, school_transportation_expense, deposit_saving_account, payment_educational_service, no_tax_effect, payment, payroll.

cfdi_reference_type

string

🇲🇽

Mexico

only

Choose CFDI Reference Type. Allowed values:return_of_merchandise, substitution_previous_cfdi, transfer_of_goods, invoice_generated_from_order, cfdi_for_advance.

reference_invoice_id

string

🇲🇽

Mexico

only

Associate the reference invoice.

Example

{
"invoice_id": 982000000567114,
"ach_payment_initiated": false,
"invoice_number": "INV-00003",
"date": "2013-11-17",
"status": "draft",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"due_date": "2013-12-03",
"payment_expected_date": " ",
"last_payment_date": " ",
"reference_number": " ",
"customer_id": 982000000567001,
"customer_name": "Bowman & Co",
"contact_persons_associated": [
{
"contact_person_id": 982000000567003,
"contact_person_name": "David",
"first_name": "David",
"last_name": "John",
"contact_person_email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"communication_preference": {
"is_email_enabled": true,
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"currency_id": 982000000000190,
"currency_code": "USD",
"exchange_rate": 1,
"discount": 0,
"is_discount_before_tax": true,
"discount_type": "item_level",
"is_inclusive_tax": false,
"recurring_invoice_id": " ",
"is_viewed_by_client": false,
"has_attachment": false,
"client_viewed_time": "",
"line_items": [
{
"line_item_id": 982000000567021,
"item_id": 982000000030049,
"project_id": " ",
"sat_item_key_code": 71121206,
"unitkey_code": "E48",
"time_entry_ids": " ",
"expense_id": " ",
"expense_receipt_name": "string",
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"item_order": 1,
"bcy_rate": 120,
"rate": 120,
"quantity": 1,
"unit": " ",
"discount_amount": 0,
"discount": 0,
"tax_id": 982000000557028,
"tds_tax_id": 982000000557012,
"tax_name": "VAT",
"tax_type": "tax",
"tax_percentage": 12.5,
"item_total": 120,
"location_id": "460000000038080",
"location_name": "string",
"hsn_or_sac": 80540,
"is_combo_product": true,
"combo_type": "kit",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"combo_type": "kit",
"warehouse_id": "460000000038080",
"location_id": "460000000038080",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"combo_type": "kit",
"warehouse_id": "460000000038080",
"location_id": "460000000038080"
}
]
}
],
"serial_numbers": [
"ARMP-0078"
],
"batches": [
{
"batch_id": "6780203000000214019",
"batch_number": "BTC-TL-890",
"external_batch_number": "MFR-TL-890",
"manufacturer_date": "2026-05-12",
"expiry_date": "2026-12-24",
"out_quantity": 2,
"storages": [
{
"storage_id": "6780203000000093226",
"storage_name": "Bin A1",
"out_quantity": 2,
"storage_out_id": "6780203000000997441"
}
]
}
],
"storages": [
{
"storage_id": "6780203000000093225",
"storage_name": "Bin A2",
"out_quantity": 2,
"storage_out_id": "6780203000000997440",
"serial_numbers": [
"PKG-011"
]
}
],
"item_custom_fields": [
{
"label": "Delivery Date",
"value": "The value of the custom field"
}
]
}
],
"location_id": "460000000038080",
"location_name": "string",
"shipping_charge": 0,
"adjustment": 0,
"adjustment_description": " ",
"sub_total": 153,
"tax_total": 22.6,
"total": 40.6,
"taxes": [
{
"tax_name": "VAT",
"tax_amount": 19.13
}
],
"payment_reminder_enabled": true,
"payment_made": 26.91,
"credits_applied": 22.43,
"tax_amount_withheld": 0,
"balance": 40.6,
"write_off_amount": 0,
"allow_partial_payments": true,
"price_precision": 2,
"payment_options": {
"payment_gateways": [
{
"configured": true,
"additional_field1": "standard",
"gateway_name": "paypal"
}
]
},
"is_emailed": false,
"reminders_sent": 1,
"last_reminder_sent_date": " ",
"billing_address": {
"address": "4900 Hopyard Rd, Suite 310",
"city": "Pleasanton",
"state": "CA",
"zip": 94588,
"country": "U.S.A",
"fax": "+1-925-924-9600"
},
"shipping_address": {
"address": "4900 Hopyard Rd, Suite 310",
"city": "Pleasanton",
"state": "CA",
"zip": 94588,
"country": "U.S.A",
"fax": "+1-925-924-9600"
},
"notes": "Looking forward for your business.",
"terms": "Terms & Conditions apply",
"custom_fields": [
{
"customfield_id": "string",
"show_on_pdf": false,
"value": "The value of the custom field",
"label": "Delivery Date"
}
],
"template_id": 982000000000143,
"template_name": "Service - Classic",
"created_time": "2013-11-18",
"last_modified_time": "2013-11-18",
"attachment_name": " ",
"can_send_in_mail": true,
"salesperson_id": " ",
"salesperson_name": " ",
"invoice_url": "https://invoice.zoho.com/SecurePayment?CInvoiceID=23d84d0cf64f9a72ea0c66fded25a08c8bafd0ab508aff05323a9f80e2cd03fdc5dd568d3d6407bbda969d3e870d740b6fce549a9438c4ea",
"is_pre_gst": false,
"gst_no": "22AAAAA0000A1Z5",
"gst_treatment": "business_gst",
"place_of_supply": "TN",
"tax_treatment": "vat_registered",
"cfdi_usage": "acquisition_of_merchandise",
"cfdi_reference_type": "return_of_merchandise",
"reference_invoice_id": "132738000000126013"
}

### Create an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Create an invoice for your customer.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Arguments

customer_id

string

(Required)

ID of the customer the invoice has to be created.

contact_persons_associated

array

Contact Persons associated with the invoice.

Show Sub-Attributes

contact_person_id

string

Unique ID of the Contact Person

communication_preference

object

Preferred modes of communication for the contact person at transaction level.

Show Sub-Attributes

is_email_enabled

boolean

Used to check if Email communication preference is enabled for the contact person at transaction level.

is_sms_enabled

boolean

SMS integration
only

Used to check if SMS communication preference is enabled for the contact person at transaction level.

is_whatsapp_enabled

boolean

WhatsApp integration
only

Used to check if WhatsApp communication preference is enabled for the contact person at transaction level.

invoice_number

string

An unique number given to the invoice. Maximum length [100]

reference_number

string

The reference number of the invoice

template_id

string

ID of the pdf template associated with the invoice.

date

string

invoice date. Default date format is yyyy-mm-dd.

payment_terms

integer

Payment terms in days e.g. 15, 30, 60. Invoice due date will be calculated based on this. Maximum length [100]

payment_terms_label

string

Used to override the default payment terms label. Default value for 15 days is "Net 15 Days". Maximum length [100]

due_date

string

due date of the invoices. Default date format is yyyy-mm-dd.

discount

float

Discount applied to the invoice, which can be either a percentage or a flat amount. For percentage discounts, the value should include the % symbol (e.g., 10%). For example, on Rs.1000, a 10% discount results in Rs.900, while a flat Rs.200 discount results in Rs.800. Maximum length [100]

is_discount_before_tax

boolean

Check if discount is exclusive of tax

discount_type

string

Type of discount. Allowed values are entity_level,item_level. For entity_level type, discount is applied at entity level and the node discount resides outside the line_items node.For item_level type, discount is applied at item level and the node discount resides inside each line_item under the line_items node.

is_inclusive_tax

boolean

To check if discount is inclusive of tax

exchange_rate

float

Exchange rate of the currency.

recurring_invoice_id

string

ID of the recurring invoice from which the invoice is created.

invoiced_estimate_id

string

ID of the invoice from which the invoice is created.

salesperson_name

string

Name of the salesperson. Maximum length [200]

custom_fields

array

Additional fields added to the invoice

Show Sub-Attributes

customfield_id

string

Unique ID of the custom field.

show_on_pdf

boolean

Boolean value to check if the custom field is to be dispplayed on the pdf.

value

string

Value of the custom field like VAT Id etc.

label

string

The label of the custom field.

project_id

string

Unique ID of the projet associated to an invoice

line_items

array

(Required)

Line items of an invoice.

Show Sub-Attributes

line_item_id

string

The line item ID

item_id

string

Unique item id.

project_id

string

Unique ID of the projet associated to an invoice

time_entry_ids

string

Unique ID's of all the time entries associated to the linked project

expense_id

string

Unique ID of the expenses associated

expense_receipt_name

string

Name of the expense receipt associated

name

string

The name of the line item. Maximum length [100]

description

string

The description of the line items. Maximum length [2000]

item_order

integer

The order of the line item_order

bcy_rate

float

base currency rate

rate

double

Rate of the line item.

quantity

float

The quantity of line item

unit

string

Unit of the line item e.g. kgs, Nos. Maximum length [100]

discount_amount

float

The discount amount on the line item

discount

float

Discount applied to the invoice, which can be either a percentage or a flat amount. For percentage discounts, the value should include the % symbol (e.g., 10%). For example, on Rs.1000, a 10% discount results in Rs.900, while a flat Rs.200 discount results in Rs.800. Maximum length [100]

tax_id

string

ID of the tax or tax group applied to the estimate

tds_tax_id

string

🇲🇽

Mexico

only

ID of the TDS tax.

tax_name

string

The name of the tax

tax_type

string

The type of the tax

tax_percentage

float

The  percentage of tax levied

item_total

float

The total amount of the line items

salesorder_item_id

string

Pass the unique ID(line_item_id) generated by the server for the line item in sales order for this node to associate this invoice with the sales order

location_id

string

Location ID

hsn_or_sac

string

🇮🇳

India

only

Add HSN/SAC code for your goods/services

sat_item_key_code

string

🇲🇽

Mexico

only

Add SAT Item Key Code for your goods/services. Download the CFDI Catalogs.

unitkey_code

string

🇲🇽

Mexico

only

Add SAT Unit Key Code for your goods/services. Download the CFDI Catalogs.

mapped_items

array

Items that are associated with the composite item (kit) in the line item. Applicable only when the line item is a kit type composite item.

Show Sub-Attributes

item_id

string

Unique item id.

salesorder_item_id

string

Pass the unique ID(line_item_id) generated by the server for the line item in sales order for this node to associate this invoice with the sales order

item_order

integer

The order of the line item_order

name

string

The name of the line item. Maximum length [100]

description

string

The description of the line items. Maximum length [2000]

quantity

float

The quantity of line item

warehouse_id

string

Unique ID of the warehouse from which the mapped item is fulfilled.

location_id

string

Location ID

mapped_items

array

Nested mapped items for kit within kit scenarios.

Show Sub-Attributes

item_id

string

Unique item id.

salesorder_item_id

string

Pass the unique ID(line_item_id) generated by the server for the line item in sales order for this node to associate this invoice with the sales order

item_order

integer

The order of the line item_order

name

string

The name of the line item. Maximum length [100]

description

string

The description of the line items. Maximum length [2000]

quantity

float

The quantity of line item

warehouse_id

string

Unique ID of the warehouse from which the mapped item is fulfilled.

location_id

string

Location ID

serial_numbers

array

Serial numbers for the line item. Applicable only for items with serial tracking enabled.

batches

array

Batch details for the line item. Reference an existing batch using batch_id. Applicable only for items with batch tracking enabled.

Show Sub-Attributes

batch_id

string

(Required)

Unique identifier of an existing batch.

out_quantity

float

(Required)

Quantity removed from the batch.

storages

array

Batch with Bin tracked items
only

Bin/storage locations from which stock was issued for this batch.

Show Sub-Attributes

storage_id

string

(Required)

Unique identifier of the bin/storage location.

out_quantity

float

(Required)

Quantity removed from the bin.

storages

array

Bin/storage locations allocated (or consumed, for assemblies) for the line item. Applicable only for items with bin tracking enabled.

Show Sub-Attributes

storage_id

string

(Required)

Unique identifier of the bin/storage location.

out_quantity

float

(Required)

Quantity removed from the bin.

serial_numbers

array

Serial with Bin tracked items
only

Serial numbers allocated to this bin.

item_custom_fields

array

List of custom fields associated with the line item

Show Sub-Attributes

label

string

The label of the custom field.

value

string

Value of the custom field like VAT Id etc.

location_id

string

Location ID

payment_options

object

Payment options available for payment

Show Sub-Attributes

payment_gateways

array

Payment gateways integrated and supported

Show Sub-Attributes

configured

boolean

Boolean check to see if a payment gateway has been configured

additional_field1

string

Paypal payment method. Allowed Values: standard and adaptive

gateway_name

string

Name of the payment gateway associated with the invoice. E.g. paypal, stripe.Allowed Values: paypal, authorize_net, payflow_pro, stripe, 2checkout and braintree

allow_partial_payments

boolean

Boolean to check if partial payments are allowed for the contact

custom_body

string

Customized email content

custom_subject

string

Customized Subject line

notes

string

The notes added below expressing gratitude or for conveying some information.

terms

string

The terms added below expressing gratitude or for conveying some information.

shipping_charge

string

Shipping charges applied to the invoice. Maximum length [100]

adjustment

double

Adjustments made to the invoice.

adjustment_description

string

Customize the adjustment description. E.g. Rounding off.

reason

string

Description of the attachment

tax_authority_id

string

🇺🇸

United States

only

ID of the tax authority. Tax authority depends on the location of the customer. For example, if the customer is located in NY, then the tax authority is NY tax authority.

tax_exemption_id

string

🇺🇸

United States

,
🇮🇳

India

only

ID of the tax exemption.

avatax_use_code

string

Avalara Integration
only

Used to group like customers for exemption purposes. It is a custom value that links customers to a tax rule. Select from Avalara [standard codes][1] or enter a custom code. Maximum length [25]

avatax_exempt_no

string

Avalara Integration
only

Exemption certificate number of the customer. Maximum length [25]

vat_treatment

string

🇬🇧

United Kingdom

only

VAT treatment for the invoice. VAT treatment denotes the location of the customer, if the customer resides in UK then the VAT treatment is uk. If the customer is in an EU country & VAT registered, you are resides in Northen Ireland and selling Goods then his VAT treatment is eu_vat_registered and if he resides outside the EU then his VAT treatment is  overseas (For Pre Brexit, this can be split as eu_vat_registered, eu_vat_not_registered and non_eu).

tax_treatment

string

🇲🇽

Mexico

only

VAT treatment for the invoice .Choose whether the contact falls under:home_country_mexico,border_region_mexico,non_mexico supported only for MX.

billing_address_id

string

Unique Id generated by the server for address in contacts page. To add a billing address to invoice, send the address_id using this node. Else, the default billing address for that contact is used

shipping_address_id

string

Unique Id generated by the server for address in contacts page. To add a shipping address to invoice, send the address_id using this node. Else, the default shipping address for that contact is used

gst_no

string

🇮🇳

India

only

15 digit GST identification number of the customer.

gst_treatment

string

🇮🇳

India

only

Choose whether the contact is GST registered/unregistered/consumer/overseas. Allowed values are  business_gst  ,  business_none  ,  overseas  ,  consumer .

place_of_supply

string

🇮🇳

India

only

Place where the goods/services are supplied to. (If not given, place of contact given for the contact will be taken)

cfdi_usage

string

🇲🇽

Mexico

only

Choose CFDI Usage. Allowed values:acquisition_of_merchandise, return_discount_bonus, general_expense, buildings, furniture_office_equipment, transport_equipment, computer_equipmentdye_molds_tools, telephone_communication, satellite_communication, other_machinery_equipment, hospital_expense, medical_expense_disability, funeral_expense, donation, interest_mortage_loans, contribution_sar, medical_expense_insurance_pormium, school_transportation_expense, deposit_saving_account, payment_educational_service, no_tax_effect, payment, payroll.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

send

boolean

Send the invoice to the contact person(s) associated with the invoice. Allowed values true and false.

ignore_auto_number_generation

boolean

Ignore auto invoice number generation for this invoice. This mandates the invoice number. Allowed values true and false

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices?organization_id=10234695"
type: POST
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices?organization_id=10234695")
.post(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoices?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("POST", "/inventory/v1/invoices?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"customer_id": 982000000567001,
"contact_persons_associated": [
{
"contact_person_id": 982000000567003,
"communication_preference": {
"is_email_enabled": true,
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"invoice_number": "INV-00003",
"reference_number": " ",
"template_id": 982000000000143,
"date": "2013-11-17",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"due_date": "2013-12-03",
"discount": 0,
"is_discount_before_tax": true,
"discount_type": "item_level",
"is_inclusive_tax": false,
"exchange_rate": 1,
"recurring_invoice_id": " ",
"invoiced_estimate_id": " ",
"salesperson_name": " ",
"custom_fields": [
{
"customfield_id": "string",
"show_on_pdf": false,
"value": "The value of the custom field",
"label": "Delivery Date"
}
],
"project_id": " ",
"line_items": [
{
"line_item_id": 982000000567021,
"item_id": 982000000030049,
"project_id": " ",
"time_entry_ids": " ",
"expense_id": " ",
"expense_receipt_name": "string",
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"item_order": 1,
"bcy_rate": 120,
"rate": 120,
"quantity": 1,
"unit": " ",
"discount_amount": 0,
"discount": 0,
"tax_id": 982000000557028,
"tds_tax_id": 982000000557012,
"tax_name": "VAT",
"tax_type": "tax",
"tax_percentage": 12.5,
"item_total": 120,
"salesorder_item_id": 4815000000017009,
"location_id": "460000000038080",
"hsn_or_sac": 80540,
"sat_item_key_code": 71121206,
"unitkey_code": "E48",
"mapped_items": [
{
"item_id": 982000000030049,
"salesorder_item_id": 4815000000017009,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"warehouse_id": "460000000038080",
"location_id": "460000000038080",
"mapped_items": [
{
"item_id": 982000000030049,
"salesorder_item_id": 4815000000017009,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"warehouse_id": "460000000038080",
"location_id": "460000000038080"
}
]
}
],
"serial_numbers": [
"ARMP-0078"
],
"batches": [
{
"batch_id": "6780203000000214019",
"out_quantity": 2,
"storages": [
{
"storage_id": "6780203000000093226",
"out_quantity": 2
}
]
}
],
"storages": [
{
"storage_id": "6780203000000093225",
"out_quantity": 2,
"serial_numbers": [
"PKG-011"
]
}
],
"item_custom_fields": [
{
"label": "Delivery Date",
"value": "The value of the custom field"
}
]
}
],
"location_id": "460000000038080",
"payment_options": {
"payment_gateways": [
{
"configured": true,
"additional_field1": "standard",
"gateway_name": "paypal"
}
]
},
"allow_partial_payments": true,
"custom_body": " ",
"custom_subject": " ",
"notes": "Looking forward for your business.",
"terms": "Terms & Conditions apply",
"shipping_charge": 0,
"adjustment": 0,
"adjustment_description": " ",
"reason": " ",
"tax_authority_id": 11149000000061052,
"tax_exemption_id": 11149000000061054,
"avatax_use_code": "string",
"avatax_exempt_no": "string",
"vat_treatment": "string",
"tax_treatment": "vat_registered",
"billing_address_id": 4815000000017005,
"shipping_address_id": 4815000000017005,
"gst_no": "22AAAAA0000A1Z5",
"gst_treatment": "business_gst",
"place_of_supply": "TN",
"cfdi_usage": "acquisition_of_merchandise"
}

Response Example

201 - Created

- 201 - Created

{
"code": 0,
"message": "The invoice has been created.",
"invoice": {
"invoice_id": 982000000567114,
"ach_payment_initiated": false,
"invoice_number": "INV-00003",
"date": "2013-11-17",
"status": "draft",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"due_date": "2013-12-03",
"payment_expected_date": " ",
"last_payment_date": " ",
"reference_number": " ",
"customer_id": 982000000567001,
"customer_name": "Bowman & Co",
"contact_persons_associated": [
{
"contact_person_id": 982000000567003,
"contact_person_name": "David",
"first_name": "David",
"last_name": "John",
"contact_person_email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"communication_preference": {
"is_email_enabled": true,
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"currency_id": 982000000000190,
"currency_code": "USD",
"exchange_rate": 1,
"discount": 0,
"is_discount_before_tax": true,
"discount_type": "item_level",
"is_inclusive_tax": false,
"recurring_invoice_id": " ",
"is_viewed_by_client": false,
"has_attachment": false,
"client_viewed_time": "",
"line_items": [
{
"line_item_id": 982000000567021,
"item_id": 982000000030049,
"project_id": " ",
"sat_item_key_code": 71121206,
"unitkey_code": "E48",
"time_entry_ids": " ",
"expense_id": " ",
"expense_receipt_name": "string",
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"item_order": 1,
"bcy_rate": 120,
"rate": 120,
"quantity": 1,
"unit": " ",
"discount_amount": 0,
"discount": 0,
"tax_id": 982000000557028,
"tds_tax_id": 982000000557012,
"tax_name": "VAT",
"tax_type": "tax",
"tax_percentage": 12.5,
"item_total": 120,
"location_id": "460000000038080",
"location_name": "string",
"hsn_or_sac": 80540,
"is_combo_product": true,
"combo_type": "kit",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"combo_type": "kit",
"warehouse_id": "460000000038080",
"location_id": "460000000038080",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"combo_type": "kit",
"warehouse_id": "460000000038080",
"location_id": "460000000038080"
}
]
}
],
"serial_numbers": [
"ARMP-0078"
],
"batches": [
{
"batch_id": "6780203000000214019",
"batch_number": "BTC-TL-890",
"external_batch_number": "MFR-TL-890",
"manufacturer_date": "2026-05-12",
"expiry_date": "2026-12-24",
"out_quantity": 2,
"storages": [
{
"storage_id": "6780203000000093226",
"storage_name": "Bin A1",
"out_quantity": 2,
"storage_out_id": "6780203000000997441"
}
]
}
],
"storages": [
{
"storage_id": "6780203000000093225",
"storage_name": "Bin A2",
"out_quantity": 2,
"storage_out_id": "6780203000000997440",
"serial_numbers": [
"PKG-011"
]
}
],
"item_custom_fields": [
{
"label": "Delivery Date",
"value": "The value of the custom field"
}
]
}
],
"location_id": "460000000038080",
"location_name": "string",
"shipping_charge": 0,
"adjustment": 0,
"adjustment_description": " ",
"sub_total": 153,
"tax_total": 22.6,
"total": 40.6,
"taxes": [
{
"tax_name": "VAT",
"tax_amount": 19.13
}
],
"payment_reminder_enabled": true,
"payment_made": 26.91,
"credits_applied": 22.43,
"tax_amount_withheld": 0,
"balance": 40.6,
"write_off_amount": 0,
"allow_partial_payments": true,
"price_precision": 2,
"payment_options": {
"payment_gateways": [
{
"configured": true,
"additional_field1": "standard",
"gateway_name": "paypal"
}
]
},
"is_emailed": false,
"reminders_sent": 1,
"last_reminder_sent_date": " ",
"billing_address": {
"address": "4900 Hopyard Rd, Suite 310",
"city": "Pleasanton",
"state": "CA",
"zip": 94588,
"country": "U.S.A",
"fax": "+1-925-924-9600"
},
"shipping_address": {
"address": "4900 Hopyard Rd, Suite 310",
"city": "Pleasanton",
"state": "CA",
"zip": 94588,
"country": "U.S.A",
"fax": "+1-925-924-9600"
},
"notes": "Looking forward for your business.",
"terms": "Terms & Conditions apply",
"custom_fields": [
{
"customfield_id": "string",
"show_on_pdf": false,
"value": "The value of the custom field",
"label": "Delivery Date"
}
],
"template_id": 982000000000143,
"template_name": "Service - Classic",
"created_time": "2013-11-18",
"last_modified_time": "2013-11-18",
"attachment_name": " ",
"can_send_in_mail": true,
"salesperson_id": " ",
"salesperson_name": " ",
"invoice_url": "https://invoice.zoho.com/SecurePayment?CInvoiceID=23d84d0cf64f9a72ea0c66fded25a08c8bafd0ab508aff05323a9f80e2cd03fdc5dd568d3d6407bbda969d3e870d740b6fce549a9438c4ea",
"is_pre_gst": false,
"gst_no": "22AAAAA0000A1Z5",
"gst_treatment": "business_gst",
"place_of_supply": "TN",
"tax_treatment": "vat_registered",
"cfdi_usage": "acquisition_of_merchandise",
"cfdi_reference_type": "return_of_merchandise",
"reference_invoice_id": "132738000000126013"
}
}

### List invoices

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

List all invoices with pagination.

OAuth Scope : ZohoInventory.invoices.READ

#### Query Parameters

organization_id

string

(Required)

ID of the organization

invoice_number

string

An unique number given to the invoice. Maximum length [100]

item_name

string

item name.Variants: item_name_startswith and item_name_contains. Maximum length [100]

item_id

string

Unique item id.

item_description

string

Search invoices by item description.Variants: item_description_startswith and item_description_contains. Maximum length [100]

reference_number

string

The reference number of the invoice

customer_name

string

The name of the customer. Maximum length [100]

recurring_invoice_id

string

ID of the recurring invoice from which the invoice is created.

email

string

contact's email id. Maximum length [100]

total

string

The total amount to be paid

balance

string

The unpaid amount

custom_field

string

custom fields for invoice. Variants: custom_field_startswith and custom_field_contains

date

string

invoice date. Default date format is yyyy-mm-dd. Variants: due_date_start, due_date_end, due_date_before and due_date_after.

due_date

string

due date of the invoices. Default date format is yyyy-mm-dd.  Variants: due_date_start, due_date_end, due_date_before and due_date_after

status

string

Search invoices by invoice status.Allowed Values: sent, draft, overdue, paid, void, unpaid, partially_paid and viewed

customer_id

string

ID of the customer the invoice has to be created.

filter_by

string

Filter invoices by any status or payment expected date.Allowed Values:  Status.All, Status.Sent,  Status.Draft, Status.OverDue, Status.Paid, Status.Void, Status.Unpaid, Status.PartiallyPaid, Status.Viewed and Date.PaymentExpectedDate

search_text

string

Search invoices by invoice number or purchase order or customer name. Maximum length [100]

sort_column

string

Sort invoices.Allowed Values: customer_name, invoice_number, date,  due_date, total, balance and  created_time

page

integer

Page number to be fetched. Default value is 1.

per_page

integer

Number of records to be fetched per page. Default value is 200.

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices?organization_id=10234695")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"invoices": [
{
"invoice_id": 982000000567114,
"ach_payment_initiated": false,
"customer_name": "Bowman & Co",
"customer_id": 982000000567001,
"status": "draft",
"invoice_number": "INV-00003",
"reference_number": " ",
"date": "2013-11-17",
"due_date": "2013-12-03",
"due_days": "Due in 14 day(s)",
"currency_id": 982000000000190,
"schedule_time": "",
"currency_code": "USD",
"is_viewed_by_client": false,
"has_attachment": false,
"client_viewed_time": "",
"total": 40.6,
"balance": 40.6,
"created_time": "2013-11-18",
"last_modified_time": "2013-11-18",
"is_emailed": false,
"reminders_sent": 1,
"last_reminder_sent_date": " ",
"payment_expected_date": " ",
"last_payment_date": " ",
"custom_fields": [
{
"customfield_id": "string",
"show_on_pdf": false,
"value": "The value of the custom field",
"label": "Delivery Date"
}
],
"documents": "",
"location_id": "460000000038080",
"location_name": "string",
"salesperson_id": " ",
"salesperson_name": " ",
"shipping_charge": 0,
"adjustment": 0,
"write_off_amount": 0,
"exchange_rate": 1
},
{...},
{...}
]
}

### Update an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Update an existing invoice. To delete a line item just remove it from the line_items list.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Arguments

customer_id

string

(Required)

ID of the customer the invoice has to be created.

contact_persons_associated

array

Contact Persons associated with the invoice.

Show Sub-Attributes

contact_person_id

string

Unique ID of the Contact Person

communication_preference

object

Preferred modes of communication for the contact person at transaction level.

Show Sub-Attributes

is_email_enabled

boolean

Used to check if Email communication preference is enabled for the contact person at transaction level.

is_sms_enabled

boolean

SMS integration
only

Used to check if SMS communication preference is enabled for the contact person at transaction level.

is_whatsapp_enabled

boolean

WhatsApp integration
only

Used to check if WhatsApp communication preference is enabled for the contact person at transaction level.

invoice_number

string

An unique number given to the invoice. Maximum length [100]

reference_number

string

The reference number of the invoice

template_id

string

ID of the pdf template associated with the invoice.

date

string

invoice date. Default date format is yyyy-mm-dd.

payment_terms

integer

Payment terms in days e.g. 15, 30, 60. Invoice due date will be calculated based on this. Maximum length [100]

payment_terms_label

string

Used to override the default payment terms label. Default value for 15 days is "Net 15 Days". Maximum length [100]

due_date

string

due date of the invoices. Default date format is yyyy-mm-dd.

discount

float

Discount applied to the invoice, which can be either a percentage or a flat amount. For percentage discounts, the value should include the % symbol (e.g., 10%). For example, on Rs.1000, a 10% discount results in Rs.900, while a flat Rs.200 discount results in Rs.800. Maximum length [100]

is_discount_before_tax

boolean

Check if discount is exclusive of tax

discount_type

string

Type of discount. Allowed values are entity_level,item_level. For entity_level type, discount is applied at entity level and the node discount resides outside the line_items node.For item_level type, discount is applied at item level and the node discount resides inside each line_item under the line_items node.

is_inclusive_tax

boolean

To check if discount is inclusive of tax

exchange_rate

float

Exchange rate of the currency.

recurring_invoice_id

string

ID of the recurring invoice from which the invoice is created.

invoiced_estimate_id

string

ID of the invoice from which the invoice is created.

salesperson_name

string

Name of the salesperson. Maximum length [200]

custom_fields

array

Additional fields added to the invoice

Show Sub-Attributes

customfield_id

string

Unique ID of the custom field.

show_on_pdf

boolean

Boolean value to check if the custom field is to be dispplayed on the pdf.

value

string

Value of the custom field like VAT Id etc.

label

string

The label of the custom field.

project_id

string

Unique ID of the projet associated to an invoice

line_items

array

(Required)

Line items of an invoice.

Show Sub-Attributes

line_item_id

string

The line item ID

item_id

string

Unique item id.

project_id

string

Unique ID of the projet associated to an invoice

time_entry_ids

string

Unique ID's of all the time entries associated to the linked project

expense_id

string

Unique ID of the expenses associated

expense_receipt_name

string

Name of the expense receipt associated

name

string

The name of the line item. Maximum length [100]

description

string

The description of the line items. Maximum length [2000]

item_order

integer

The order of the line item_order

bcy_rate

float

base currency rate

rate

double

Rate of the line item.

quantity

float

The quantity of line item

unit

string

Unit of the line item e.g. kgs, Nos. Maximum length [100]

discount_amount

float

The discount amount on the line item

discount

float

Discount applied to the invoice, which can be either a percentage or a flat amount. For percentage discounts, the value should include the % symbol (e.g., 10%). For example, on Rs.1000, a 10% discount results in Rs.900, while a flat Rs.200 discount results in Rs.800. Maximum length [100]

tax_id

string

ID of the tax or tax group applied to the estimate

tds_tax_id

string

🇲🇽

Mexico

only

ID of the TDS tax.

tax_name

string

The name of the tax

tax_type

string

The type of the tax

tax_percentage

float

The  percentage of tax levied

item_total

float

The total amount of the line items

location_id

string

Location ID

hsn_or_sac

string

🇮🇳

India

only

Add HSN/SAC code for your goods/services

sat_item_key_code

string

🇲🇽

Mexico

only

Add SAT Item Key Code for your goods/services. Download the CFDI Catalogs.

unitkey_code

string

🇲🇽

Mexico

only

Add SAT Unit Key Code for your goods/services. Download the CFDI Catalogs.

mapped_items

array

Items that are associated with the composite item (kit) in the line item. Applicable only when the line item is a kit type composite item.

Show Sub-Attributes

item_id

string

Unique item id.

line_item_id

string

The line item ID

salesorder_item_id

string

Pass the unique ID(line_item_id) generated by the server for the line item in sales order for this node to associate this invoice with the sales order

item_order

integer

The order of the line item_order

name

string

The name of the line item. Maximum length [100]

description

string

The description of the line items. Maximum length [2000]

quantity

float

The quantity of line item

warehouse_id

string

Unique ID of the warehouse from which the mapped item is fulfilled.

location_id

string

Location ID

mapped_items

array

Nested mapped items for kit within kit scenarios.

Show Sub-Attributes

item_id

string

Unique item id.

line_item_id

string

The line item ID

salesorder_item_id

string

Pass the unique ID(line_item_id) generated by the server for the line item in sales order for this node to associate this invoice with the sales order

item_order

integer

The order of the line item_order

name

string

The name of the line item. Maximum length [100]

description

string

The description of the line items. Maximum length [2000]

quantity

float

The quantity of line item

warehouse_id

string

Unique ID of the warehouse from which the mapped item is fulfilled.

location_id

string

Location ID

serial_numbers

array

Serial numbers for the line item. Applicable only for items with serial tracking enabled.

batches

array

Batch details for the line item. Reference an existing batch using batch_id. Applicable only for items with batch tracking enabled.

Show Sub-Attributes

batch_id

string

(Required)

Unique identifier of an existing batch.

out_quantity

float

(Required)

Quantity removed from the batch.

storages

array

Batch with Bin tracked items
only

Bin/storage locations from which stock was issued for this batch.

Show Sub-Attributes

storage_id

string

(Required)

Unique identifier of the bin/storage location.

out_quantity

float

(Required)

Quantity removed from the bin.

storage_out_id

string

Unique identifier of the storage record. Applicable only when updating an existing storage entry.

storages

array

Bin/storage locations allocated (or consumed, for assemblies) for the line item. Applicable only for items with bin tracking enabled.

Show Sub-Attributes

storage_id

string

(Required)

Unique identifier of the bin/storage location.

out_quantity

float

(Required)

Quantity removed from the bin.

storage_out_id

string

Unique identifier of the storage record. Applicable only when updating an existing storage entry.

serial_numbers

array

Serial with Bin tracked items
only

Serial numbers allocated to this bin.

item_custom_fields

array

List of custom fields associated with the line item

Show Sub-Attributes

label

string

The label of the custom field.

value

string

Value of the custom field like VAT Id etc.

location_id

string

Location ID

payment_options

object

Payment options available for payment

Show Sub-Attributes

payment_gateways

array

Payment gateways integrated and supported

Show Sub-Attributes

configured

boolean

Boolean check to see if a payment gateway has been configured

additional_field1

string

Paypal payment method. Allowed Values: standard and adaptive

gateway_name

string

Name of the payment gateway associated with the invoice. E.g. paypal, stripe.Allowed Values: paypal, authorize_net, payflow_pro, stripe, 2checkout and braintree

allow_partial_payments

boolean

Boolean to check if partial payments are allowed for the contact

custom_body

string

Customized email content

custom_subject

string

Customized Subject line

notes

string

The notes added below expressing gratitude or for conveying some information.

terms

string

The terms added below expressing gratitude or for conveying some information.

shipping_charge

string

Shipping charges applied to the invoice. Maximum length [100]

adjustment

double

Adjustments made to the invoice.

adjustment_description

string

Customize the adjustment description. E.g. Rounding off.

reason

string

Description of the attachment

tax_authority_id

string

🇺🇸

United States

only

ID of the tax authority. Tax authority depends on the location of the customer. For example, if the customer is located in NY, then the tax authority is NY tax authority.

tax_exemption_id

string

🇺🇸

United States

,
🇮🇳

India

only

ID of the tax exemption.

avatax_use_code

string

Avalara Integration
only

Used to group like customers for exemption purposes. It is a custom value that links customers to a tax rule. Select from Avalara [standard codes][1] or enter a custom code. Maximum length [25]

avatax_exempt_no

string

Avalara Integration
only

Exemption certificate number of the customer. Maximum length [25]

vat_treatment

string

🇬🇧

United Kingdom

only

VAT treatment for the invoice. VAT treatment denotes the location of the customer, if the customer resides in UK then the VAT treatment is uk. If the customer is in an EU country & VAT registered, you are resides in Northen Ireland and selling Goods then his VAT treatment is eu_vat_registered and if he resides outside the EU then his VAT treatment is  overseas (For Pre Brexit, this can be split as eu_vat_registered, eu_vat_not_registered and non_eu).

tax_treatment

string

🇲🇽

Mexico

only

VAT treatment for the invoice .Choose whether the contact falls under:home_country_mexico,border_region_mexico,non_mexico supported only for MX.

billing_address_id

string

Unique Id generated by the server for address in contacts page. To add a billing address to invoice, send the address_id using this node. Else, the default billing address for that contact is used

shipping_address_id

string

Unique Id generated by the server for address in contacts page. To add a shipping address to invoice, send the address_id using this node. Else, the default shipping address for that contact is used

gst_no

string

🇮🇳

India

only

15 digit GST identification number of the customer.

gst_treatment

string

🇮🇳

India

only

Choose whether the contact is GST registered/unregistered/consumer/overseas. Allowed values are  business_gst  ,  business_none  ,  overseas  ,  consumer .

place_of_supply

string

🇮🇳

India

only

Place where the goods/services are supplied to. (If not given, place of contact given for the contact will be taken)

cfdi_usage

string

🇲🇽

Mexico

only

Choose CFDI Usage. Allowed values:acquisition_of_merchandise, return_discount_bonus, general_expense, buildings, furniture_office_equipment, transport_equipment, computer_equipmentdye_molds_tools, telephone_communication, satellite_communication, other_machinery_equipment, hospital_expense, medical_expense_disability, funeral_expense, donation, interest_mortage_loans, contribution_sar, medical_expense_insurance_pormium, school_transportation_expense, deposit_saving_account, payment_educational_service, no_tax_effect, payment, payroll.

cfdi_reference_type

string

🇲🇽

Mexico

only

Choose CFDI Reference Type. Allowed values:return_of_merchandise, substitution_previous_cfdi, transfer_of_goods, invoice_generated_from_order, cfdi_for_advance.

reference_invoice_id

string

🇲🇽

Mexico

only

Associate the reference invoice.

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

ignore_auto_number_generation

boolean

Ignore auto invoice number generation for this invoice. This mandates the invoice number. Allowed values true and false

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695"
type: PUT
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695")
.put(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'PUT',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("PUT", "/inventory/v1/invoices/982000000567114?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request PUT \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"customer_id": 982000000567001,
"contact_persons_associated": [
{
"contact_person_id": 982000000567003,
"communication_preference": {
"is_email_enabled": true,
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"invoice_number": "INV-00003",
"reference_number": " ",
"template_id": 982000000000143,
"date": "2013-11-17",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"due_date": "2013-12-03",
"discount": 0,
"is_discount_before_tax": true,
"discount_type": "item_level",
"is_inclusive_tax": false,
"exchange_rate": 1,
"recurring_invoice_id": " ",
"invoiced_estimate_id": " ",
"salesperson_name": " ",
"custom_fields": [
{
"customfield_id": "string",
"show_on_pdf": false,
"value": "The value of the custom field",
"label": "Delivery Date"
}
],
"project_id": " ",
"line_items": [
{
"line_item_id": 982000000567021,
"item_id": 982000000030049,
"project_id": " ",
"time_entry_ids": " ",
"expense_id": " ",
"expense_receipt_name": "string",
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"item_order": 1,
"bcy_rate": 120,
"rate": 120,
"quantity": 1,
"unit": " ",
"discount_amount": 0,
"discount": 0,
"tax_id": 982000000557028,
"tds_tax_id": 982000000557012,
"tax_name": "VAT",
"tax_type": "tax",
"tax_percentage": 12.5,
"item_total": 120,
"location_id": "460000000038080",
"hsn_or_sac": 80540,
"sat_item_key_code": 71121206,
"unitkey_code": "E48",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"salesorder_item_id": 4815000000017009,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"warehouse_id": "460000000038080",
"location_id": "460000000038080",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"salesorder_item_id": 4815000000017009,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"warehouse_id": "460000000038080",
"location_id": "460000000038080"
}
]
}
],
"serial_numbers": [
"ARMP-0078"
],
"batches": [
{
"batch_id": "6780203000000214019",
"out_quantity": 2,
"storages": [
{
"storage_id": "6780203000000093226",
"out_quantity": 2,
"storage_out_id": "6780203000000997441"
}
]
}
],
"storages": [
{
"storage_id": "6780203000000093225",
"out_quantity": 2,
"storage_out_id": "6780203000000997440",
"serial_numbers": [
"PKG-011"
]
}
],
"item_custom_fields": [
{
"label": "Delivery Date",
"value": "The value of the custom field"
}
]
}
],
"location_id": "460000000038080",
"payment_options": {
"payment_gateways": [
{
"configured": true,
"additional_field1": "standard",
"gateway_name": "paypal"
}
]
},
"allow_partial_payments": true,
"custom_body": " ",
"custom_subject": " ",
"notes": "Looking forward for your business.",
"terms": "Terms & Conditions apply",
"shipping_charge": 0,
"adjustment": 0,
"adjustment_description": " ",
"reason": " ",
"tax_authority_id": 11149000000061052,
"tax_exemption_id": 11149000000061054,
"avatax_use_code": "string",
"avatax_exempt_no": "string",
"vat_treatment": "string",
"tax_treatment": "vat_registered",
"billing_address_id": 4815000000017005,
"shipping_address_id": 4815000000017005,
"gst_no": "22AAAAA0000A1Z5",
"gst_treatment": "business_gst",
"place_of_supply": "TN",
"cfdi_usage": "acquisition_of_merchandise",
"cfdi_reference_type": "return_of_merchandise",
"reference_invoice_id": "132738000000126013"
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Invoice information has been updated.",
"invoice": {
"invoice_id": 982000000567114,
"ach_payment_initiated": false,
"invoice_number": "INV-00003",
"date": "2013-11-17",
"status": "draft",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"due_date": "2013-12-03",
"payment_expected_date": " ",
"last_payment_date": " ",
"reference_number": " ",
"customer_id": 982000000567001,
"customer_name": "Bowman & Co",
"contact_persons_associated": [
{
"contact_person_id": 982000000567003,
"contact_person_name": "David",
"first_name": "David",
"last_name": "John",
"contact_person_email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"communication_preference": {
"is_email_enabled": true,
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"currency_id": 982000000000190,
"currency_code": "USD",
"exchange_rate": 1,
"discount": 0,
"is_discount_before_tax": true,
"discount_type": "item_level",
"is_inclusive_tax": false,
"recurring_invoice_id": " ",
"is_viewed_by_client": false,
"has_attachment": false,
"client_viewed_time": "",
"line_items": [
{
"line_item_id": 982000000567021,
"item_id": 982000000030049,
"project_id": " ",
"time_entry_ids": " ",
"expense_id": " ",
"expense_receipt_name": "string",
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"item_order": 1,
"bcy_rate": 120,
"rate": 120,
"quantity": 1,
"unit": " ",
"discount_amount": 0,
"discount": 0,
"tax_id": 982000000557028,
"tds_tax_id": 982000000557012,
"tax_name": "VAT",
"tax_type": "tax",
"tax_percentage": 12.5,
"item_total": 120,
"location_id": "460000000038080",
"location_name": "string",
"hsn_or_sac": 80540,
"sat_item_key_code": 71121206,
"unitkey_code": "E48",
"is_combo_product": true,
"combo_type": "kit",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"combo_type": "kit",
"warehouse_id": "460000000038080",
"location_id": "460000000038080",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"combo_type": "kit",
"warehouse_id": "460000000038080",
"location_id": "460000000038080"
}
]
}
],
"serial_numbers": [
"ARMP-0078"
],
"batches": [
{
"batch_id": "6780203000000214019",
"batch_number": "BTC-TL-890",
"external_batch_number": "MFR-TL-890",
"manufacturer_date": "2026-05-12",
"expiry_date": "2026-12-24",
"out_quantity": 2,
"storages": [
{
"storage_id": "6780203000000093226",
"storage_name": "Bin A1",
"out_quantity": 2,
"storage_out_id": "6780203000000997441"
}
]
}
],
"storages": [
{
"storage_id": "6780203000000093225",
"storage_name": "Bin A2",
"out_quantity": 2,
"storage_out_id": "6780203000000997440",
"serial_numbers": [
"PKG-011"
]
}
],
"item_custom_fields": [
{
"label": "Delivery Date",
"value": "The value of the custom field"
}
]
}
],
"location_id": "460000000038080",
"location_name": "string",
"shipping_charge": 0,
"adjustment": 0,
"adjustment_description": " ",
"sub_total": 153,
"tax_total": 22.6,
"total": 40.6,
"taxes": [
{
"tax_name": "VAT",
"tax_amount": 19.13
}
],
"payment_reminder_enabled": true,
"payment_made": 26.91,
"credits_applied": 22.43,
"tax_amount_withheld": 0,
"balance": 40.6,
"write_off_amount": 0,
"allow_partial_payments": true,
"price_precision": 2,
"payment_options": {
"payment_gateways": [
{
"configured": true,
"additional_field1": "standard",
"gateway_name": "paypal"
}
]
},
"is_emailed": false,
"reminders_sent": 1,
"last_reminder_sent_date": " ",
"billing_address": {
"address": "4900 Hopyard Rd, Suite 310",
"city": "Pleasanton",
"state": "CA",
"zip": 94588,
"country": "U.S.A",
"fax": "+1-925-924-9600"
},
"shipping_address": {
"address": "4900 Hopyard Rd, Suite 310",
"city": "Pleasanton",
"state": "CA",
"zip": 94588,
"country": "U.S.A",
"fax": "+1-925-924-9600"
},
"notes": "Looking forward for your business.",
"terms": "Terms & Conditions apply",
"custom_fields": [
{
"customfield_id": "string",
"show_on_pdf": false,
"value": "The value of the custom field",
"label": "Delivery Date"
}
],
"template_id": 982000000000143,
"template_name": "Service - Classic",
"created_time": "2013-11-18",
"last_modified_time": "2013-11-18",
"attachment_name": " ",
"can_send_in_mail": true,
"salesperson_id": " ",
"salesperson_name": " ",
"invoice_url": "https://invoice.zoho.com/SecurePayment?CInvoiceID=23d84d0cf64f9a72ea0c66fded25a08c8bafd0ab508aff05323a9f80e2cd03fdc5dd568d3d6407bbda969d3e870d740b6fce549a9438c4ea",
"is_pre_gst": false,
"gst_no": "22AAAAA0000A1Z5",
"gst_treatment": "business_gst",
"place_of_supply": "TN",
"tax_treatment": "vat_registered",
"cfdi_usage": "acquisition_of_merchandise",
"cfdi_reference_type": "return_of_merchandise",
"reference_invoice_id": "132738000000126013"
}
}

### Get an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the details of an invoice.

OAuth Scope : ZohoInventory.invoices.READ

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

print

boolean

Print the exported pdf.

accept

string

Get the details of a particular invoice in formats such as json/ pdf/ html. Default format is json. Allowed values json pdf and html

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/982000000567114?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"invoice": {
"invoice_id": 982000000567114,
"ach_payment_initiated": false,
"invoice_number": "INV-00003",
"date": "2013-11-17",
"status": "draft",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"due_date": "2013-12-03",
"payment_expected_date": " ",
"last_payment_date": " ",
"reference_number": " ",
"customer_id": 982000000567001,
"customer_name": "Bowman & Co",
"contact_persons_associated": [
{
"contact_person_id": 982000000567003,
"contact_person_name": "David",
"first_name": "David",
"last_name": "John",
"contact_person_email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"communication_preference": {
"is_email_enabled": true,
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"currency_id": 982000000000190,
"currency_code": "USD",
"exchange_rate": 1,
"discount": 0,
"is_discount_before_tax": true,
"discount_type": "item_level",
"is_inclusive_tax": false,
"recurring_invoice_id": " ",
"is_viewed_by_client": false,
"has_attachment": false,
"client_viewed_time": "",
"line_items": [
{
"line_item_id": 982000000567021,
"item_id": 982000000030049,
"project_id": " ",
"time_entry_ids": " ",
"expense_id": " ",
"expense_receipt_name": "string",
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"item_order": 1,
"bcy_rate": 120,
"rate": 120,
"quantity": 1,
"unit": " ",
"discount_amount": 0,
"discount": 0,
"tax_id": 982000000557028,
"tax_name": "VAT",
"tax_type": "tax",
"tax_percentage": 12.5,
"item_total": 120,
"location_id": "460000000038080",
"location_name": "string",
"hsn_or_sac": 80540,
"is_combo_product": true,
"combo_type": "kit",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"combo_type": "kit",
"warehouse_id": "460000000038080",
"location_id": "460000000038080",
"mapped_items": [
{
"item_id": 982000000030049,
"line_item_id": 982000000567021,
"item_order": 1,
"name": "Hard Drive",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"quantity": 1,
"combo_type": "kit",
"warehouse_id": "460000000038080",
"location_id": "460000000038080"
}
]
}
],
"serial_numbers": [
"ARMP-0078"
],
"batches": [
{
"batch_id": "6780203000000214019",
"batch_number": "BTC-TL-890",
"external_batch_number": "MFR-TL-890",
"manufacturer_date": "2026-05-12",
"expiry_date": "2026-12-24",
"out_quantity": 2,
"storages": [
{
"storage_id": "6780203000000093226",
"storage_name": "Bin A1",
"out_quantity": 2,
"storage_out_id": "6780203000000997441"
}
]
}
],
"storages": [
{
"storage_id": "6780203000000093225",
"storage_name": "Bin A2",
"out_quantity": 2,
"storage_out_id": "6780203000000997440",
"serial_numbers": [
"PKG-011"
]
}
],
"item_custom_fields": [
{
"label": "Delivery Date",
"value": "The value of the custom field"
}
]
}
],
"location_id": "460000000038080",
"location_name": "string",
"shipping_charge": 0,
"adjustment": 0,
"adjustment_description": " ",
"sub_total": 153,
"tax_total": 22.6,
"total": 40.6,
"taxes": [
{
"tax_name": "VAT",
"tax_amount": 19.13
}
],
"payment_reminder_enabled": true,
"payment_made": 26.91,
"credits_applied": 22.43,
"tax_amount_withheld": 0,
"balance": 40.6,
"write_off_amount": 0,
"allow_partial_payments": true,
"price_precision": 2,
"payment_options": {
"payment_gateways": [
{
"configured": true,
"additional_field1": "standard",
"gateway_name": "paypal"
}
]
},
"is_emailed": false,
"reminders_sent": 1,
"last_reminder_sent_date": " ",
"billing_address": {
"address": "4900 Hopyard Rd, Suite 310",
"city": "Pleasanton",
"state": "CA",
"zip": 94588,
"country": "U.S.A",
"fax": "+1-925-924-9600"
},
"shipping_address": {
"address": "4900 Hopyard Rd, Suite 310",
"city": "Pleasanton",
"state": "CA",
"zip": 94588,
"country": "U.S.A",
"fax": "+1-925-924-9600"
},
"notes": "Looking forward for your business.",
"terms": "Terms & Conditions apply",
"custom_fields": [
{
"customfield_id": "string",
"show_on_pdf": false,
"value": "The value of the custom field",
"label": "Delivery Date"
}
],
"template_id": 982000000000143,
"template_name": "Service - Classic",
"created_time": "2013-11-18",
"last_modified_time": "2013-11-18",
"attachment_name": " ",
"can_send_in_mail": true,
"salesperson_id": " ",
"salesperson_name": " ",
"invoice_url": "https://invoice.zoho.com/SecurePayment?CInvoiceID=23d84d0cf64f9a72ea0c66fded25a08c8bafd0ab508aff05323a9f80e2cd03fdc5dd568d3d6407bbda969d3e870d740b6fce549a9438c4ea",
"is_pre_gst": false,
"gst_no": "22AAAAA0000A1Z5",
"gst_treatment": "business_gst",
"place_of_supply": "TN",
"cfdi_usage": "acquisition_of_merchandise",
"tax_treatment": "vat_registered"
}
}

### Delete an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Delete an existing invoice. Invoices which have payment or credits note applied cannot be deleted.

OAuth Scope : ZohoInventory.invoices.DELETE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695"
type: DELETE
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695")
.delete(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'DELETE',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("DELETE", "/inventory/v1/invoices/982000000567114?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "DELETE",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request DELETE \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The invoice has been deleted."
}

### Update custom field in existing invoices

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Update the value of the custom field in existing invoices.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Arguments

customfield_id

string

Unique ID of the custom field.

value

string

Value of the custom field like VAT Id etc.

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoice/982000000567114/customfields?organization_id=10234695"
type: PUT
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoice/982000000567114/customfields?organization_id=10234695")
.put(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'PUT',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoice/982000000567114/customfields?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("PUT", "/inventory/v1/invoice/982000000567114/customfields?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoice/982000000567114/customfields?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request PUT \
--url 'https://www.zohoapis.com/inventory/v1/invoice/982000000567114/customfields?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

[
{
"customfield_id": "46000000012845",
"value": "The value of the custom field"
}
]

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Custom Fields Updated Successfully"
}

### Mark an invoice as sent

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Mark a draft invoice as sent.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/sent?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/sent?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/sent?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/status/sent?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/status/sent?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/sent?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Invoice status has been changed to Sent."
}

### Void an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Mark an invoice status as void. Upon voiding, the payments and credits associated with the invoices will be unassociated and will be under customer credits.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/void?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/void?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/void?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/status/void?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/status/void?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/void?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Invoice status has been changed to Void."
}

### Mark as draft

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Mark a voided invoice as draft.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/draft?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/draft?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/draft?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/status/draft?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/status/draft?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/status/draft?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Status of invoice changed from void to draft"
}

### Email an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Email an invoice to the customer. Input json string is not mandatory. If input json string is empty, mail will be send with default mail content.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Arguments

send_from_org_email_id

boolean

Boolean to trigger the email from the organization's email address

to_mail_ids

array

(Required)

Array of email addresses of the recipients.

cc_mail_ids

array

Array of email addresses of the recipients to be CC'd.

subject

string

The subject of the mail

body

string

The body/content of the mail

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

send_customer_statement

boolean

Send customer statement pdf a with email.

send_attachment

boolean

Send the invoice attachment a with the email.

attachments

binary

Files to be attached to the email

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/email?organization_id=10234695"
type: POST
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/email?organization_id=10234695")
.post(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/email?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("POST", "/inventory/v1/invoices/982000000567114/email?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/email?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/email?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"send_from_org_email_id": false,
"to_mail_ids": [
"willsmith@bowmanfurniture.com"
],
"cc_mail_ids": [
"peterparker@bowmanfurniture.com"
],
"subject": "Invoice from Zillium Inc (Invoice#: INV-00001)",
"body": "Dear Customer,         <br><br><br><br>Thanks for your business.         <br><br><br><br>The invoice INV-00001 is attached with this email. You can choose the easy way out and <a href= https://invoice.zoho.com/SecurePayment?CInvoiceID=b9800228e011ae86abe71227bdacb3c68e1af685f647dcaed747812e0b9314635e55ac6223925675b371fcbd2d5ae3dc  >pay online for this invoice.</a>         <br><br>Here's an overview of the invoice for your reference.         <br><br><br><br>Invoice Overview:         <br><br>Invoice  : INV-00001         <br><br>Date : 05 Aug 2013         <br><br>Amount : $541.82         <br><br><br><br>It was great working with you. Looking forward to working with you again.<br><br><br>\\nRegards<br>\\nZillium Inc<br>\\n\","
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Your invoice has been sent."
}

### Get invoice email content

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the email content of an invoice.

OAuth Scope : ZohoInventory.invoices.READ

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

email_template_id

string

Get the email content based on a specific email template. If this param is not inputted, then the content will be based on the email template associated with the customer. If no template is associated with the customer, then default template will be used.

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/email?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/email?organization_id=10234695")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/email?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/982000000567114/email?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/email?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/email?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"data": {
"bcc_mails": "",
"gateways_configured": true,
"gateways_associated": true,
"bcc_mails_str": "",
"body": "Dear Customer,         <br><br><br><br>Thanks for your business.         <br><br><br><br>The invoice INV-00001 is attached with this email. You can choose the easy way out and <a href= https://invoice.zoho.com/SecurePayment?CInvoiceID=b9800228e011ae86abe71227bdacb3c68e1af685f647dcaed747812e0b9314635e55ac6223925675b371fcbd2d5ae3dc  >pay online for this invoice.</a>         <br><br>Here's an overview of the invoice for your reference.         <br><br><br><br>Invoice Overview:         <br><br>Invoice  : INV-00001         <br><br>Date : 05 Aug 2013         <br><br>Amount : $541.82         <br><br><br><br>It was great working with you. Looking forward to working with you again.<br><br><br>\\nRegards<br>\\nZillium Inc<br>\\n\",",
"documents": "",
"customer_name": "Bowman & Co",
"attach_pdf": true,
"entity_id": "2000000007037",
"cc_mails_list": [
{
"user_name": "David John",
"email": "willsmith@bowmanfurniture.com"
}
],
"file_name_without_extension": "INV-000004",
"to_mails_str": "",
"cc_mails_str": "",
"from_email": "",
"from_address": "",
"deprecated_placeholders_used": [],
"error_list": [],
"subject": "Invoice from Zillium Inc (Invoice#: INV-00001)",
"emailtemplates": [
{
"selected": true,
"name": "Default",
"email_template_id": "982000000000067"
}
],
"emailtemplate_documents": [
"string"
],
"to_contacts": [
{
"first_name": "David",
"selected": true,
"phone": "+1-925-921-9201",
"email": "willsmith@bowmanfurniture.com",
"last_name": "John",
"salutation": "Mr",
"contact_person_id": 982000000567003,
"mobile": "+1-4054439562"
}
],
"attachment_name": " ",
"file_name": "INV-00001.pdf",
"from_emails": [
{
"user_name": "David John",
"selected": true,
"email": "willsmith@bowmanfurniture.com",
"organization_contact_id": "2000000002266",
"is_org_email_id": true
}
],
"customer_id": 982000000567001
}
}

### Email invoices

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Send invoices to your customers by email. Maximum of 10 invoices can be sent at once.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Query Parameters

organization_id

string

(Required)

ID of the organization

invoice_ids

string

(Required)

Comma separated invoice ids which are to be emailed.

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/email?organization_id=10234695&invoice_ids="
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/email?organization_id=10234695&invoice_ids=")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/email?organization_id=10234695&invoice_ids=', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/email?organization_id=10234695&invoice_ids=", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/email?organization_id=10234695&invoice_ids=",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/email?organization_id=10234695&invoice_ids=' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Mission accomplished! We've sent all the invoices."
}

### Get payment reminder mail content

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the mail content of the payment reminder.

OAuth Scope : ZohoInventory.invoices.READ

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder?organization_id=10234695")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/982000000567114/paymentreminder?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/paymentreminder?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"data": {
"bcc_mails": "",
"gateways_configured": true,
"gateways_associated": true,
"bcc_mails_str": "",
"body": "<br>Dear Mr. John,&nbsp;<br><br>You might have missed the payment date and the invoice is now overdue by&nbsp;1&nbsp;days.<br><br>----------------------------------------------------------------------------------------<br><h2>Invoice# : INV-000004 </h2>Dated : 23 Dec 2016<br>----------------------------------------------------------------------------------------<br><b>&nbsp;Due Date &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp;&nbsp;23 Dec 2016</b><br><b>&nbsp;Amount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp;&nbsp;$139.65</b><br>----------------------------------------------------------------------------------------<br><br><span>Not to worry at all !&nbsp;</span>View your invoice and take the easy way out by making an&nbsp;<a href=\"https://invoice.zoho.com/portal/Zillium Inc/index#/invoices/invoice/2000000007037 \">online payment</a>.<br><br>If you have already paid, please accept our apologies and kindly ignore this payment reminder.<br><br><br>Regards,<br><br>David John<br>Zillium Inc<br><br><br>",
"documents": "",
"customer_name": "Bowman & Co",
"attach_pdf": true,
"entity_id": "2000000007037",
"cc_mails_list": [
{
"user_name": "David John",
"email": "willsmith@bowmanfurniture.com"
}
],
"file_name_without_extension": "INV-000004",
"to_mails_str": "",
"cc_mails_str": "",
"from_email": "",
"from_address": "",
"deprecated_placeholders_used": [],
"error_list": [],
"subject": "Invoice from Zillium Inc (Invoice#: INV-00001)",
"emailtemplates": [
{
"selected": true,
"name": "Default",
"email_template_id": "982000000000067"
}
],
"emailtemplate_documents": [
"string"
],
"to_contacts": [
{
"first_name": "David",
"selected": true,
"phone": "+1-925-921-9201",
"email": "willsmith@bowmanfurniture.com",
"last_name": "John",
"salutation": "Mr",
"contact_person_id": 982000000567003,
"mobile": "+1-4054439562"
}
],
"attachment_name": " ",
"file_name": "INV-00001.pdf",
"from_emails": [
{
"user_name": "David John",
"selected": true,
"email": "willsmith@bowmanfurniture.com",
"organization_contact_id": "2000000002266",
"is_org_email_id": true
}
],
"customer_id": 982000000567001
}
}

### Bulk export Invoices

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Maximum of 25 invoices can be exported in a single pdf.

OAuth Scope : ZohoInventory.invoices.READ

#### Query Parameters

organization_id

string

(Required)

ID of the organization

invoice_ids

string

(Required)

Comma separated invoice ids which are to be export as pdf.

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/pdf?organization_id=10234695&invoice_ids="
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/pdf?organization_id=10234695&invoice_ids=")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/pdf?organization_id=10234695&invoice_ids=', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/pdf?organization_id=10234695&invoice_ids=", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/pdf?organization_id=10234695&invoice_ids=",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/pdf?organization_id=10234695&invoice_ids=' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success"
}

### Bulk print invoices

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Export invoices as pdf and print them. Maximum of 25 invoices can be printed.

OAuth Scope : ZohoInventory.invoices.READ

#### Query Parameters

organization_id

string

(Required)

ID of the organization

invoice_ids

string

(Required)

Export invoices as pdf and print them. Maximum of 25 invoices can be printed.

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/print?organization_id=10234695&invoice_ids="
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/print?organization_id=10234695&invoice_ids=")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/print?organization_id=10234695&invoice_ids=', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/print?organization_id=10234695&invoice_ids=", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/print?organization_id=10234695&invoice_ids=",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/print?organization_id=10234695&invoice_ids=' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success"
}

### Disable payment reminder

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Disable automated payment reminders for an invoice.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder/disable?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder/disable?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder/disable?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/paymentreminder/disable?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/paymentreminder/disable?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder/disable?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Reminders stopped."
}

### Enable payment reminder

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Enable automated payment reminders for an invoice.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder/enable?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder/enable?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder/enable?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/paymentreminder/enable?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/paymentreminder/enable?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder/enable?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Reminders enabled."
}

### Write off invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Write off the invoice balance amount of an invoice.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/writeoff?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/writeoff?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/writeoff?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/writeoff?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/writeoff?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/writeoff?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Invoice has been written off"
}

### Cancel write off

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Cancel the write off amount of an invoice.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/writeoff/cancel?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/writeoff/cancel?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/writeoff/cancel?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/writeoff/cancel?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/writeoff/cancel?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/writeoff/cancel?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The write off done for this invoice has been cancelled."
}

### Update billing address

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Updates the billing address for this invoice alone.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Arguments

address

string

Billing address of the customer

city

string

City of the customer's billing address

state

string

State of the customer's billing address

zip

string

ZIP code of the contact's billing address

country

string

Country of the contact's billing address

fax

string

FAX number of the customer

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/address/billing?organization_id=10234695"
type: PUT
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/address/billing?organization_id=10234695")
.put(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'PUT',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/address/billing?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("PUT", "/inventory/v1/invoices/982000000567114/address/billing?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/address/billing?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request PUT \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/address/billing?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"address": "B-1104, 11F, \nHorizon International Tower, \nNo. 6, ZhiChun Road, HaiDian District",
"city": "Beijing",
"state": "Beijing",
"zip": 1000881,
"country": "string",
"fax": "+86-10-82637827"
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Billing address updated"
}

### Update shipping address

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Updates the shipping address for this invoice alone.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Arguments

address

string

Shipping address of the customer

city

string

City of the contact's shipping address

state

string

State of the Contact's shipping address

zip

string

ZIP code of the contact's shipping address

country

string

Contact's country for the given shipping address

fax

string

FAX number of the contact

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/address/shipping?organization_id=10234695"
type: PUT
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/address/shipping?organization_id=10234695")
.put(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'PUT',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/address/shipping?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("PUT", "/inventory/v1/invoices/982000000567114/address/shipping?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/address/shipping?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request PUT \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/address/shipping?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"address": "4900 Hopyard Rd, Suit 310",
"city": "Pleasanton",
"state": "CA",
"zip": 945881,
"country": "USA",
"fax": "+1-925-924-9600"
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Shipping address updated"
}

### List invoice templates

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get all invoice pdf templates.

OAuth Scope : ZohoInventory.invoices.READ

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/templates?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/templates?organization_id=10234695")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/templates?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/templates?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/templates?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/templates?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"templates": [
{
"template_name": "Service - Classic",
"template_id": 982000000000143,
"template_type": "classic"
},
{...},
{...}
]
}

### Update invoice template

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Update the pdf template associated with the invoice.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

template_id

string

(Required)

Unique identifier of the invoice template.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/templates/982000000000143?organization_id=10234695"
type: PUT
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/templates/982000000000143?organization_id=10234695")
.put(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'PUT',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/templates/982000000000143?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("PUT", "/inventory/v1/invoices/982000000567114/templates/982000000000143?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/templates/982000000000143?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request PUT \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/templates/982000000000143?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Invoice information has been updated."
}

### List invoice payments

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the list of payments made for an invoice.

OAuth Scope : ZohoInventory.invoices.READ

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/payments?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/payments?organization_id=10234695")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/payments?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/982000000567114/payments?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/payments?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/payments?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"payments": [
{
"payment_id": "982000000567190",
"payment_number": 7,
"invoice_id": 982000000567036,
"invoice_payment_id": 982000000567192,
"payment_mode": "cash",
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"date": "2013-11-18",
"reference_number": 99782374,
"exchange_rate": 1,
"amount": 10.57,
"tax_amount_withheld": 0,
"online_transaction_id": "",
"is_single_invoice_payment": true
},
{...},
{...}
]
}

### List credits applied

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the list of credits applied for an invoice.

OAuth Scope : ZohoInventory.invoices.READ

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/creditsapplied?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/creditsapplied?organization_id=10234695")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/creditsapplied?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/982000000567114/creditsapplied?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/creditsapplied?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/creditsapplied?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"credits": [
{
"creditnote_id": 982000000567134,
"creditnotes_invoice_id": "982000000567172",
"creditnotes_number": "CN-00001",
"credited_date": "2013-11-18",
"amount_applied": 12.2
},
{...},
{...}
]
}

### Apply credits

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Apply the customer credits either from credit notes or excess customer payments to an invoice. Multiple credits can be applied at once.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Arguments

invoice_payments

array

Invoice payment list

Show Sub-Attributes

payment_id

string

ID of the payment from which credit has to be applied.

amount_applied

float

Amount applied to the invoice.

apply_creditnotes

array

Apply existing credit note of a customer against the invoice

Show Sub-Attributes

creditnote_id

string

ID of the credit note from which credit has to be applied.

amount_applied

float

Amount applied to the invoice.

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/credits?organization_id=10234695"
type: POST
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/credits?organization_id=10234695")
.post(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/credits?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("POST", "/inventory/v1/invoices/982000000567114/credits?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/credits?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/credits?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"invoice_payments": [
{
"payment_id": 460000000031003,
"amount_applied": 15
}
],
"apply_creditnotes": [
{
"creditnote_id": 460000000029003,
"amount_applied": 22.5
}
]
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Credits have been applied to the invoice(s)."
}

### Delete a payment

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Delete a payment made to an invoice.

OAuth Scope : ZohoInventory.invoices.DELETE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

invoice_payment_id

string

(Required)

Unique identifier of the invoice payment.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/payments/982000000567192?organization_id=10234695"
type: DELETE
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/payments/982000000567192?organization_id=10234695")
.delete(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'DELETE',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/payments/982000000567192?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("DELETE", "/inventory/v1/invoices/982000000567114/payments/982000000567192?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "DELETE",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/payments/982000000567192?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request DELETE \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/payments/982000000567192?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The payment has been deleted."
}

### Delete  applied credit

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Delete a particular credit applied to an invoice.

OAuth Scope : ZohoInventory.invoices.DELETE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

creditnotes_invoice_id

string

(Required)

Unique identifier of the credit note invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/creditsapplied/982000000567172?organization_id=10234695"
type: DELETE
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/creditsapplied/982000000567172?organization_id=10234695")
.delete(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'DELETE',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/creditsapplied/982000000567172?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("DELETE", "/inventory/v1/invoices/982000000567114/creditsapplied/982000000567172?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "DELETE",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/creditsapplied/982000000567172?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request DELETE \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/creditsapplied/982000000567172?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Credits applied to an invoice have been deleted."
}

### Add attachment to an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Attach a file to an invoice.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

can_send_in_mail

boolean

True to send the attachment with the invoice when emailed.

attachment

binary

The file to be attached.Allowed Extensions: gif, png, jpeg, jpg, bmp and pdf

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Your file has been successfully attached to the invoice."
}

### Update attachment preference

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Set whether you want to send the attached file while emailing the invoice.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

can_send_in_mail

boolean

(Required)

Boolean to send the attachment with the invoice when emailed.

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695&can_send_in_mail=true"
type: PUT
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695&can_send_in_mail=true")
.put(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'PUT',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695&can_send_in_mail=true', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("PUT", "/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695&can_send_in_mail=true", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695&can_send_in_mail=true",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request PUT \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695&can_send_in_mail=true' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Invoice information has been updated."
}

### Get an invoice attachment

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Returns the file attached to the invoice.

OAuth Scope : ZohoInventory.invoices.READ

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

preview

boolean

Get the thumbnail of the attachment.

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success"
}

### Delete an attachment

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Delete the file attached to the invoice.

OAuth Scope : ZohoInventory.invoices.DELETE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695"
type: DELETE
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695")
.delete(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'DELETE',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("DELETE", "/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "DELETE",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request DELETE \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/attachment?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Your file is no longer attached to the invoice."
}

### Add comment

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Add a comment for an invoice.

OAuth Scope : ZohoInventory.invoices.CREATE

#### Arguments

description

string

The description of the comment.

payment_expected_date

string

The expected date of payment

show_comment_to_clients

boolean

Boolean to check if the comment to be shown to the clients

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments?organization_id=10234695"
type: POST
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments?organization_id=10234695")
.post(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("POST", "/inventory/v1/invoices/982000000567114/comments?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/comments?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"description": "This is a comment.",
"payment_expected_date": " ",
"show_comment_to_clients": true
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Comments added."
}

### List invoice comments & history

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the complete history and comments of an invoice.

OAuth Scope : ZohoInventory.invoices.READ

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments?organization_id=10234695")
.get()
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'GET',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/invoices/982000000567114/comments?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/comments?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request GET \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"comments": [
{
"comment_id": 982000000567019,
"invoice_id": 982000000567114,
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"commented_by_id": 982000000554041,
"commented_by": "John David",
"comment_type": "system",
"operation_type": "Added",
"date": "2013-11-18",
"date_description": "yesterday",
"time": "2:38 AM",
"transaction_id": "982000000567204",
"transaction_type": "invoice"
},
{...},
{...}
]
}

### Update comment

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Update an existing comment of an invoice.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Arguments

description

string

The description of the comment.

show_comment_to_clients

boolean

Boolean to check if the comment to be shown to the clients

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

comment_id

string

(Required)

Unique identifier of the comment.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695"
type: PUT
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695")
.put(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'PUT',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("PUT", "/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request PUT \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"description": "This is a comment.",
"show_comment_to_clients": true
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"comment_id": 982000000567019,
"invoice_id": 982000000567114,
"description": "500GB, USB 2.0 interface 1400 rpm, protective hard case.",
"commented_by_id": 982000000554041,
"commented_by": "John David",
"date": "2013-11-17",
"date_description": "yesterday",
"time": "2:02 AM",
"comment_type": "system"
}

### Delete a comment

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Delete an invoice comment.

OAuth Scope : ZohoInventory.invoices.DELETE

#### Path Parameters

invoice_id

string

(Required)

Unique identifier of the invoice.

comment_id

string

(Required)

Unique identifier of the comment.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695"
type: DELETE
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695")
.delete(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'DELETE',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("DELETE", "/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "DELETE",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request DELETE \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/comments/982000000567019?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The comment has been deleted."
}

### Submit an invoice for approval

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Submit an invoice for approval workflow.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Path Parameters

invoice_id

string

(Required)

Unique ID of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/submit?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/submit?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/submit?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/submit?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/submit?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/submit?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success"
}

### Approve an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Approve a submitted invoice.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Path Parameters

invoice_id

string

(Required)

Unique ID of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/approve?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/approve?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/approve?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/approve?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/approve?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/approve?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success"
}

### Final approval of an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Perform the final approval of an invoice (admin only).

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Path Parameters

invoice_id

string

(Required)

Unique ID of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/approve/final?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/approve/final?organization_id=10234695")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/approve/final?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/982000000567114/approve/final?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/approve/final?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/approve/final?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success"
}

### Reject an invoice

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Reject a submitted invoice.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Arguments

reason

string

Reason for rejecting the invoice. Max-length [500].

#### Path Parameters

invoice_id

string

(Required)

Unique ID of the invoice.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

parameters_data='{"field1":"value1","field2":"value2"}';
headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/982000000567114/reject?organization_id=10234695"
type: POST
headers: headers_data
content-type: application/json
parameters: parameters_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"field1\":\"value1\",\"field2\":\"value2\"}");
Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/982000000567114/reject?organization_id=10234695")
.post(body)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.addHeader("content-type", "application/json")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f',
'content-type': 'application/json'
},
body: '{"field1":"value1","field2":"value2"}'
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/982000000567114/reject?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

payload = "{\"field1\":\"value1\",\"field2\":\"value2\"}"

headers = {
'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
'content-type': "application/json"
}

conn.request("POST", "/inventory/v1/invoices/982000000567114/reject?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/982000000567114/reject?organization_id=10234695",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f",
"content-type": "application/json"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.write(JSON.stringify({field1: 'value1', field2: 'value2'}));
req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/982000000567114/reject?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"reason": "Invoice amount exceeds approved budget."
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success"
}

### Bulk submit invoices for approval

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Submit multiple invoices for approval workflow at once.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Query Parameters

organization_id

string

(Required)

ID of the organization

invoice_ids

string

(Required)

Comma-separated list of invoice IDs to submit for approval.

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/submit?organization_id=10234695&invoice_ids=982000000567114,982000000567120"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/submit?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/submit?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/submit?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/submit?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/submit?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success"
}

### Bulk approve invoices

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Approve multiple submitted invoices at once.

OAuth Scope : ZohoInventory.invoices.UPDATE

#### Query Parameters

organization_id

string

(Required)

ID of the organization

invoice_ids

string

(Required)

Comma-separated list of invoice IDs to approve.

Request Example

cURL

- cURL

- Deluge

- Java

- Javascript

- Node.js

- Python

Click to copy

headers_data = Map();
headers_data.put("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f");
response = invokeUrl
[
url: "https://www.zohoapis.com/inventory/v1/invoices/approve?organization_id=10234695&invoice_ids=982000000567114,982000000567120"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/invoices/approve?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120")
.post(null)
.addHeader("Authorization", "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f")
.build();

Response response = client.newCall(request).execute();

const options = {
method: 'POST',
headers: {
Authorization: 'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
}
};

fetch('https://www.zohoapis.com/inventory/v1/invoices/approve?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/invoices/approve?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/invoices/approve?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120",
"headers": {
"Authorization": "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f"
}
};

const req = http.request(options, function (res) {
const chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
const body = Buffer.concat(chunks);
console.log(body.toString());
});
});

req.end();

curl --request POST \
--url 'https://www.zohoapis.com/inventory/v1/invoices/approve?organization_id=10234695&invoice_ids=982000000567114%2C982000000567120' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success"
}

${resultObj.description}

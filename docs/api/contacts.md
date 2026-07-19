<!-- Extracted from https://www.zoho.com/inventory/api/v1/contacts/ by tools/fetch-api-docs.mjs. DERIVED, not authoritative — open the URL when it matters. -->

# contacts

Source: <https://www.zoho.com/inventory/api/v1/contacts/>

---

POST

/contacts

List contacts

GET

/contacts

Update a contact

PUT

/contacts/{contact_id}

Get contact

GET

/contacts/{contact_id}

Delete a contact

DELETE

/contacts/{contact_id}

Get contact address

GET

/contacts/{contact_id}/address

Mark as active

POST

/contacts/{contact_id}/active

Mark as Inactive

POST

/contacts/{contact_id}/inactive

Email statement

POST

/contacts/{contact_id}/statements/email

Get Statement mail content

GET

/contacts/{contact_id}/statements/email

Email contact

POST

/contacts/{contact_id}/email

List Comments

GET

/contacts/{contact_id}/comments

#### Attribute

contact_id

string

Contact ID of the contact

contact_name

string

Name of the contact. This can be the name of an organisation or the name of an individual. Maximum length [200]

company_name

string

Name of the conact's company. Maximum length [200]

has_transaction

boolean

Boolean to check if the customer has a history of transaction

contact_type

string

Type of the contact. Allowed values are customer and vendor

is_linked_with_zohocrm

boolean

To check if the customer account is linked to the crm

website

string

Website of the contact.

primary_contact_id

string

Primary contact ID for a contact. This can be a contact person's ID as well.

payment_terms

integer

Net payment term for the customer.

payment_terms_label

string

Label for the paymet due details.

currency_id

string

Currency ID of the customer's currency.

currency_code

string

Currency code of the currency in which the customer wants to pay. If currency_code is not specified here, the currency chosen in your Zoho Subscriptions organization will be used for billing. currency_id and currency_symbol are set automatically in accordance to the currency_code.

currency_symbol

string

Symbol of the currency of the contact_type

language_code

string

language of a contact. allowed values de,en,es,fr,it,ja,nl,pt,sv,zh

outstanding_receivable_amount

integer

Outsatnding amount with the contact, which is due for receipt

outstanding_receivable_amount_bcy

integer

outstanding receivable in base currency

unused_credits_receivable_amount

integer

Our Unused credits with the vendor which is receivable

unused_credits_receivable_amount_bcy

integer

receivable unused credits in base currency

status

string

The status of the contact.

payment_reminder_enabled

boolean

To check if a payment reminder service is enabled for the contact

custom_fields

array

Custom fields or Additional of the contact which we can create to add more information.

Show Sub-Attributes

value

string

Value of the custom field.

index

integer

Index of the custom field. It can hold any value from 1 to 10.

label

string

Label of the custom field.

opening_balances

array

List of opening balances

Show Sub-Attributes

location_id

string

Location ID

exchange_rate

double

Exchange rate for the opening balance.

opening_balance_amount

double

Opening balance amount for a contact.

location_id

string

Location ID

location_name

string

Name of the location

billing_address

object

Billing address of the contact.

Show Sub-Attributes

attention

string

Intended recipient at given address

address

string

Street address of the contact. Maximum length allowed [500]

street2

string

Additional Street address of the contact. Maximum length allowed [255]

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

shipping_address

object

Customer's shipping address to which the goods must be delivered.

Show Sub-Attributes

attention

string

Intended recipient at given address

address

string

Street address of the contact. Maximum length allowed [500]

street2

string

Additional Street address of the contact. Maximum length allowed [255]

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

facebook

string

Facebook profile account of the contact. Maximum length [100]

twitter

string

Twitter account of the contact. MAximum length [100]

contact_persons

array

Person/Individual who represents a company

Show Sub-Attributes

salutation

string

Salutation for the contact

first_name

string

First name of the contact. Maximum length [100]

last_name

string

Last name of the contact. Maximum length [100]

email

string

Search contacts by email id of the contact person. Variants: address_startswith and address_contains

phone

string

Search contacts by phone number of the contact person. Variants: phone_startswith and phone_contains

mobile

string

Search contacts by mobile number of the contact person.

is_primary_contact

boolean

To mark contact person as primary for contact. Allowed value is true only.

communication_preference

object

Preferred modes of communication for the contact person.

Show Sub-Attributes

is_sms_enabled

boolean

SMS integration
only

Used to check if SMS communication preference is enabled for the contact person.

is_whatsapp_enabled

boolean

WhatsApp integration
only

Used to check if WhatsApp communication preference is enabled for the contact person.

default_templates

object

Show Sub-Attributes

invoice_template_id

string

ID of the Invoice template used

invoice_template_name

string

Name of the invoice template used

estimate_template_id

string

ID of the estimate template used

estimate_template_name

string

Name of the estimate template used

creditnote_template_id

string

ID of teh credit note template used

creditnote_template_name

string

Name of the credit note template used

invoice_email_template_id

string

ID of the invoice email tempalte used

invoice_email_template_name

string

Name of the Invoice email template used

estimate_email_template_id

string

ID of the estimate email template used

estimate_email_template_name

string

Name of the estimate email template used

creditnote_email_template_id

string

ID of the credit note email template

creditnote_email_template_name

string

Name of the credit note email template

notes

string

Commennts about the payment made by the contact.

created_time

string

Time at which the contact was created.

last_modified_time

string

Time at which the contact was last modified

is_taxable

boolean

🇺🇸

United States

,
🇨🇦

Canada

,
🇦🇺

Australia

,
🇮🇳

India

,
🇲🇽

Mexico

only

Boolean to track the taxability of the customer.

tax_id

boolean

🇺🇸

United States

,
🇮🇳

India

only

ID of the tax or tax group that can be collected from the contact. Tax can be given only if is_taxable is true.

tax_name

string

🇮🇳

India

only

Name of the tax

tax_percentage

double

Percentage of the tax

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
🇨🇦

Canada

,
🇦🇺

Australia

,
🇮🇳

India

only

ID of the tax exemption.

tax_authority_name

string

Name of the Tax Authority

tax_exemption_code

string

🇺🇸

United States

,
🇨🇦

Canada

,
🇦🇺

Australia

,
🇮🇳

India

only

Enter tax exemption code

place_of_contact

string

🇮🇳

India

only

Location of the contact. (This node identifies the place of supply and source of supply when invoices/bills are raised for the customer/vendor respectively. This is not applicable for Overseas contacts)

gst_no

string

🇮🇳

India

only

15 digit GST identification number of the customer/vendor.

vat_treatment

string

🇬🇧

United Kingdom

only

VAT treatment of the contact.Allowed Values:
uk (A business that is located in the UK.),
eu_vat_registered (A business that is reg for VAT and trade goods between Northern Ireland and EU. This node is available only for organizations enabled for NI protocal in VAT Settings.) and
overseas (A business that is located outside UK. Pre Brexit, this was split as eu_vat_registered, eu_vat_not_registered and non_eu ).

tax_treatment

string

🇲🇽

Mexico

only

VAT treatment of the contact.Allowed Values: vat_registered,vat_not_registered,gcc_vat_not_registered,gcc_vat_registered,non_gcc,dz_vat_registered and dz_vat_not_registeredhome_country_mexico (A business that is located within MX)border_region_mexico (A business that is located in the northern and southern border regions in MX)non_mexico (A business that is located outside MX).

tax_regime

string

🇲🇽

Mexico

only

Tax Regime of the contact.Allowed Values: general_legal_person, legal_entities_non_profit, resident_abroad, production_cooperative_societies, agricultural_livestock, optional_group_of_companies, coordinated, simplified_trust, wages_salaries_income, lease, property_disposal_acquisition, other_income, resident_abroad, divident_income, individual_business_professional, interest_income, income_obtaining_price, no_tax_obligation, tax_incorporation, income_through_technology_platform, simplified_trust.

legal_name

string

🇲🇽

Mexico

only

Legal Name of the contact.

is_tds_registered

boolean

🇲🇽

Mexico

only

Boolean to check if tax is registered.

gst_treatment

string

🇮🇳

India

only

Choose whether the contact is GST registered/unregistered/consumer/overseas. Allowed values are  business_gst  ,  business_none  ,  overseas  ,  consumer .

Example

{
"contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"has_transaction": true,
"contact_type": "customer",
"is_linked_with_zohocrm": false,
"website": "www.bowmanfurniture.com",
"primary_contact_id": 460000000026051,
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"currency_symbol": "$",
"language_code": "en",
"outstanding_receivable_amount": 250,
"outstanding_receivable_amount_bcy": 250,
"unused_credits_receivable_amount": 1369.66,
"unused_credits_receivable_amount_bcy": 1369.66,
"status": "active",
"payment_reminder_enabled": true,
"custom_fields": [
{
"value": "GBGD078",
"index": 1,
"label": "VAT ID"
}
],
"opening_balances": [
{
"location_id": "460000000038080",
"exchange_rate": 1,
"opening_balance_amount": 1200
}
],
"location_id": "460000000038080",
"location_name": "string",
"billing_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"shipping_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"facebook": "zoho",
"twitter": "zoho",
"contact_persons": [
{
"salutation": "Mr",
"first_name": "Will",
"last_name": "Smith",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"is_primary_contact": true,
"communication_preference": {
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"default_templates": {
"invoice_template_id": 460000000052069,
"invoice_template_name": "Custom Classic",
"estimate_template_id": 460000000000179,
"estimate_template_name": "Service - Professional",
"creditnote_template_id": 460000000000211,
"creditnote_template_name": "Fixed Cost - Professional",
"invoice_email_template_id": 460000000052071,
"invoice_email_template_name": "Custom Invoice Notification",
"estimate_email_template_id": 460000000052073,
"estimate_email_template_name": "Custom Estimate Notification",
"creditnote_email_template_id": 460000000052075,
"creditnote_email_template_name": "Custom Credit Note Notification"
},
"notes": "Payment option : Through check",
"created_time": "2013-08-05",
"last_modified_time": "2013-10-07",
"is_taxable": true,
"tax_id": 11149000000061058,
"tax_name": "CGST",
"tax_percentage": 12,
"tax_authority_id": 11149000000061052,
"tax_exemption_id": 11149000000061054,
"tax_authority_name": "string",
"tax_exemption_code": "string",
"place_of_contact": "TN",
"gst_no": "22AAAAA0000A1Z5",
"vat_treatment": "string",
"tax_treatment": "string",
"tax_regime": "general_legal_person",
"legal_name": "ESCUELA KEMPER URGATE",
"is_tds_registered": true,
"gst_treatment": "business_gst"
}

### Create a Contact

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Create a contact with given information.

OAuth Scope : ZohoInventory.contacts.CREATE

#### Arguments

contact_name

string

(Required)

Name of the contact. This can be the name of an organisation or the name of an individual. Maximum length [200]

company_name

string

Name of the conact's company. Maximum length [200]

payment_terms

integer

Net payment term for the customer.

currency_id

string

Currency ID of the customer's currency.

website

string

Website of the contact.

contact_type

string

Type of the contact. Allowed values are customer and vendor

custom_fields

array

Custom fields or Additional of the contact which we can create to add more information.

Show Sub-Attributes

value

string

Value of the custom field.

index

integer

Index of the custom field. It can hold any value from 1 to 10.

opening_balances

array

List of opening balances

Show Sub-Attributes

location_id

string

Location ID

exchange_rate

double

Exchange rate for the opening balance.

opening_balance_amount

double

Opening balance amount for a contact.

billing_address

object

Billing address of the contact.

Show Sub-Attributes

attention

string

Intended recipient at given address

address

string

Street address of the contact. Maximum length allowed [500]

street2

string

Additional Street address of the contact. Maximum length allowed [255]

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

shipping_address

object

Customer's shipping address to which the goods must be delivered.

Show Sub-Attributes

attention

string

Intended recipient at given address

address

string

Street address of the contact. Maximum length allowed [500]

street2

string

Additional Street address of the contact. Maximum length allowed [255]

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

contact_persons

array

Person/Individual who represents a company

Show Sub-Attributes

salutation

string

Salutation for the contact

first_name

string

First name of the contact. Maximum length [100]

last_name

string

Last name of the contact. Maximum length [100]

email

string

Search contacts by email id of the contact person. Variants: address_startswith and address_contains

phone

string

Search contacts by phone number of the contact person. Variants: phone_startswith and phone_contains

mobile

string

Search contacts by mobile number of the contact person.

is_primary_contact

boolean

To mark contact person as primary for contact. Allowed value is true only.

communication_preference

object

Preferred modes of communication for the contact person.

Show Sub-Attributes

is_sms_enabled

boolean

SMS integration
only

Used to check if SMS communication preference is enabled for the contact person.

is_whatsapp_enabled

boolean

WhatsApp integration
only

Used to check if WhatsApp communication preference is enabled for the contact person.

default_templates

object

Show Sub-Attributes

invoice_template_id

string

ID of the Invoice template used

invoice_template_name

string

Name of the invoice template used

estimate_template_id

string

ID of the estimate template used

estimate_template_name

string

Name of the estimate template used

creditnote_template_id

string

ID of teh credit note template used

creditnote_template_name

string

Name of the credit note template used

invoice_email_template_id

string

ID of the invoice email tempalte used

invoice_email_template_name

string

Name of the Invoice email template used

estimate_email_template_id

string

ID of the estimate email template used

estimate_email_template_name

string

Name of the estimate email template used

creditnote_email_template_id

string

ID of the credit note email template

creditnote_email_template_name

string

Name of the credit note email template

language_code

string

language of a contact. allowed values de,en,es,fr,it,ja,nl,pt,sv,zh

notes

string

Commennts about the payment made by the contact.

vat_reg_no

string

🇬🇧

United Kingdom

,
Avalara Integration
only

For UK Edition: VAT Registration number of a contact with length should be between 2 and 12 characters.
For Avalara: If you are doing sales in the European Union (EU) then provide VAT Registration Number of your customers here. This is used to calculate VAT for B2B sales, from Avalara.

tax_reg_no

string

🇲🇽

Mexico

only

12 digit Tax Registration number of a contact with Tax treatment as  home_country_mexico, border_region_mexico, non_mexico. Consumers generic RFC: XAXX010101000, Overseas generic RFC: XEXX010101000

country_code

string

🇬🇧

United Kingdom

,
Avalara Integration
only

For UK Edition: Two letter country code of a contact.
For Avalara: Two letter country code for the customer country, if your customer is not in US. Refer [AvaTax Codes for Countries and States][2].

vat_treatment

string

🇬🇧

United Kingdom

only

VAT treatment of the contact.Allowed Values:
uk (A business that is located in the UK.),
eu_vat_registered (A business that is reg for VAT and trade goods between Northern Ireland and EU. This node is available only for organizations enabled for NI protocal in VAT Settings.) and
overseas (A business that is located outside UK. Pre Brexit, this was split as eu_vat_registered, eu_vat_not_registered and non_eu ).

tax_treatment

string

🇲🇽

Mexico

only

VAT treatment of the contact.Allowed Values: vat_registered,vat_not_registered,gcc_vat_not_registered,gcc_vat_registered,non_gcc,dz_vat_registered and dz_vat_not_registeredhome_country_mexico (A business that is located within MX)border_region_mexico (A business that is located in the northern and southern border regions in MX)non_mexico (A business that is located outside MX).

tax_regime

string

🇲🇽

Mexico

only

Tax Regime of the contact.Allowed Values: general_legal_person, legal_entities_non_profit, resident_abroad, production_cooperative_societies, agricultural_livestock, optional_group_of_companies, coordinated, simplified_trust, wages_salaries_income, lease, property_disposal_acquisition, other_income, resident_abroad, divident_income, individual_business_professional, interest_income, income_obtaining_price, no_tax_obligation, tax_incorporation, income_through_technology_platform, simplified_trust.

legal_name

string

🇲🇽

Mexico

only

Legal Name of the contact.

is_tds_registered

boolean

🇲🇽

Mexico

only

Boolean to check if tax is registered.

avatax_exempt_no

string

Avalara Integration
only

Exemption certificate number of the customer.

avatax_use_code

string

Avalara Integration
only

Used to group like customers for exemption purposes. It is a custom value that links customers to a tax rule. Select from Avalara [standard codes][1] or enter a custom code.

tax_exemption_id

string

🇺🇸

United States

,
🇨🇦

Canada

,
🇦🇺

Australia

,
🇮🇳

India

only

ID of the tax exemption.

tax_authority_id

string

🇺🇸

United States

only

ID of the tax authority. Tax authority depends on the location of the customer. For example, if the customer is located in NY, then the tax authority is NY tax authority.

tax_id

boolean

🇺🇸

United States

,
🇮🇳

India

only

ID of the tax or tax group that can be collected from the contact. Tax can be given only if is_taxable is true.

is_taxable

boolean

🇺🇸

United States

,
🇨🇦

Canada

,
🇦🇺

Australia

,
🇮🇳

India

,
🇲🇽

Mexico

only

Boolean to track the taxability of the customer.

facebook

string

Facebook profile account of the contact. Maximum length [100]

twitter

string

Twitter account of the contact. MAximum length [100]

place_of_contact

string

🇮🇳

India

only

Location of the contact. (This node identifies the place of supply and source of supply when invoices/bills are raised for the customer/vendor respectively. This is not applicable for Overseas contacts)

gst_no

string

🇮🇳

India

only

15 digit GST identification number of the customer/vendor.

gst_treatment

string

🇮🇳

India

only

Choose whether the contact is GST registered/unregistered/consumer/overseas. Allowed values are  business_gst  ,  business_none  ,  overseas  ,  consumer .

tax_authority_name

string

Name of the Tax Authority

tax_exemption_code

string

🇺🇸

United States

,
🇨🇦

Canada

,
🇦🇺

Australia

,
🇮🇳

India

only

Enter tax exemption code

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
url: "https://www.zohoapis.com/inventory/v1/contacts?organization_id=10234695"
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
.url("https://www.zohoapis.com/inventory/v1/contacts?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts?organization_id=10234695', options)
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

conn.request("POST", "/inventory/v1/contacts?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"payment_terms": 15,
"currency_id": 460000000000097,
"website": "www.bowmanfurniture.com",
"contact_type": "customer",
"custom_fields": [
{
"value": "GBGD078",
"index": 1
}
],
"opening_balances": [
{
"location_id": "460000000038080",
"exchange_rate": 1,
"opening_balance_amount": 1200
}
],
"billing_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"shipping_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"contact_persons": [
{
"salutation": "Mr",
"first_name": "Will",
"last_name": "Smith",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"is_primary_contact": true,
"communication_preference": {
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"default_templates": {
"invoice_template_id": 460000000052069,
"invoice_template_name": "Custom Classic",
"estimate_template_id": 460000000000179,
"estimate_template_name": "Service - Professional",
"creditnote_template_id": 460000000000211,
"creditnote_template_name": "Fixed Cost - Professional",
"invoice_email_template_id": 460000000052071,
"invoice_email_template_name": "Custom Invoice Notification",
"estimate_email_template_id": 460000000052073,
"estimate_email_template_name": "Custom Estimate Notification",
"creditnote_email_template_id": 460000000052075,
"creditnote_email_template_name": "Custom Credit Note Notification"
},
"language_code": "en",
"notes": "Payment option : Through check",
"vat_reg_no": "string",
"tax_reg_no": 12345678912345,
"country_code": "US",
"vat_treatment": "string",
"tax_treatment": "string",
"tax_regime": "general_legal_person",
"legal_name": "ESCUELA KEMPER URGATE",
"is_tds_registered": true,
"avatax_exempt_no": "string",
"avatax_use_code": "string",
"tax_exemption_id": 11149000000061054,
"tax_authority_id": 11149000000061052,
"tax_id": 11149000000061058,
"is_taxable": true,
"facebook": "zoho",
"twitter": "zoho",
"place_of_contact": "TN",
"gst_no": "22AAAAA0000A1Z5",
"gst_treatment": "business_gst",
"tax_authority_name": "string",
"tax_exemption_code": "string"
}

Response Example

201 - Created

- 201 - Created

{
"code": 0,
"message": "The contact has been created",
"contact": {
"contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"has_transaction": true,
"contact_type": "customer",
"is_linked_with_zohocrm": false,
"website": "www.bowmanfurniture.com",
"primary_contact_id": 460000000026051,
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"currency_symbol": "$",
"language_code": "en",
"outstanding_receivable_amount": 250,
"outstanding_receivable_amount_bcy": 250,
"unused_credits_receivable_amount": 1369.66,
"unused_credits_receivable_amount_bcy": 1369.66,
"status": "active",
"payment_reminder_enabled": true,
"custom_fields": [
{
"value": "GBGD078",
"index": 1,
"label": "VAT ID"
}
],
"opening_balances": [
{
"location_id": "460000000038080",
"exchange_rate": 1,
"opening_balance_amount": 1200
}
],
"location_id": "460000000038080",
"location_name": "string",
"billing_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"shipping_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"facebook": "zoho",
"twitter": "zoho",
"contact_persons": [
{
"salutation": "Mr",
"first_name": "Will",
"last_name": "Smith",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"is_primary_contact": true,
"communication_preference": {
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"default_templates": {
"invoice_template_id": 460000000052069,
"invoice_template_name": "Custom Classic",
"estimate_template_id": 460000000000179,
"estimate_template_name": "Service - Professional",
"creditnote_template_id": 460000000000211,
"creditnote_template_name": "Fixed Cost - Professional",
"invoice_email_template_id": 460000000052071,
"invoice_email_template_name": "Custom Invoice Notification",
"estimate_email_template_id": 460000000052073,
"estimate_email_template_name": "Custom Estimate Notification",
"creditnote_email_template_id": 460000000052075,
"creditnote_email_template_name": "Custom Credit Note Notification"
},
"notes": "Payment option : Through check",
"created_time": "2013-08-05",
"last_modified_time": "2013-10-07",
"is_taxable": true,
"tax_id": 11149000000061058,
"tax_name": "CGST",
"tax_percentage": 12,
"tax_authority_id": 11149000000061052,
"tax_exemption_id": 11149000000061054,
"tax_authority_name": "string",
"tax_exemption_code": "string",
"place_of_contact": "TN",
"gst_no": "22AAAAA0000A1Z5",
"vat_treatment": "string",
"tax_treatment": "string",
"tax_regime": "general_legal_person",
"legal_name": "ESCUELA KEMPER URGATE",
"is_tds_registered": true,
"gst_treatment": "business_gst"
}
}

### List contacts

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

List all contacts with pagination.

OAuth Scope : ZohoInventory.contacts.READ

#### Query Parameters

organization_id

string

(Required)

ID of the organization

contact_name

string

Search contacts by contact name. Maximum length [100] Variants: contact_name_startswith and contact_name_contains. Maximum length [100]

company_name

string

Search contacts by company name. Maximum length [100] Variants: company_name_startswith and company_name_contains

first_name

string

Search contacts by first name of the contact person. Maximum length [100] Variants: first_name_startswith and first_name_contains

last_name

string

Search contacts by last name of the contact person. Maximum length [100] Variants: last_name_startswith and last_name_contains

address

string

Search contacts by any of the address fields. Maximum length [100] Variants: address_startswith and address_contains

email

string

Search contacts by email of the contact person. Maximum length [100] Variants: email_startswith and email_contains

phone

string

Search contacts by phone number of the contact person. Maximum length [100] Variants: phone_startswith and phone_contains

filter_by

string

Filter contacts by status. Allowed Values: Status.All, Status.Active, Status.Inactive, Status.Duplicate and Status.Crm

search_text

string

Search contacts by contact name or notes. Maximum length [100]

sort_column

string

Sort contacts. Allowed Values: contact_name, first_name, last_name, email, outstanding_receivable_amount, created_time and last_modified_time

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
url: "https://www.zohoapis.com/inventory/v1/contacts?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/contacts?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/contacts?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"contacts": [
{
"contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"contact_type": "customer",
"status": "active",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"outstanding_receivable_amount": 250,
"unused_credits_receivable_amount": 1369.66,
"first_name": "Will",
"last_name": "Smith",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"created_time": "2013-08-05",
"last_modified_time": "2013-10-07"
},
{...},
{...}
]
}

### Update a contact

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Update an existing contact. To delete a contact person remove it from the contact_persons list.

OAuth Scope : ZohoInventory.contacts.UPDATE

#### Arguments

contact_name

string

(Required)

Name of the contact. This can be the name of an organisation or the name of an individual. Maximum length [200]

company_name

string

Name of the conact's company. Maximum length [200]

payment_terms

integer

Net payment term for the customer.

currency_id

string

Currency ID of the customer's currency.

contact_type

string

Type of the contact. Allowed values are customer and vendor

website

string

Website of the contact.

custom_fields

array

Custom fields or Additional of the contact which we can create to add more information.

Show Sub-Attributes

value

string

Value of the custom field.

index

integer

Index of the custom field. It can hold any value from 1 to 10.

label

string

Label of the custom field.

opening_balances

array

List of opening balances

Show Sub-Attributes

location_id

string

Location ID

exchange_rate

double

Exchange rate for the opening balance.

opening_balance_amount

double

Opening balance amount for a contact.

billing_address

object

Billing address of the contact.

Show Sub-Attributes

attention

string

Intended recipient at given address

address

string

Street address of the contact. Maximum length allowed [500]

street2

string

Additional Street address of the contact. Maximum length allowed [255]

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

shipping_address

object

Customer's shipping address to which the goods must be delivered.

Show Sub-Attributes

attention

string

Intended recipient at given address

address

string

Street address of the contact. Maximum length allowed [500]

street2

string

Additional Street address of the contact. Maximum length allowed [255]

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

contact_persons

array

Person/Individual who represents a company

Show Sub-Attributes

salutation

string

Salutation for the contact

first_name

string

First name of the contact. Maximum length [100]

last_name

string

Last name of the contact. Maximum length [100]

email

string

Search contacts by email id of the contact person. Variants: address_startswith and address_contains

phone

string

Search contacts by phone number of the contact person. Variants: phone_startswith and phone_contains

mobile

string

Search contacts by mobile number of the contact person.

is_primary_contact

boolean

To mark contact person as primary for contact. Allowed value is true only.

communication_preference

object

Preferred modes of communication for the contact person.

Show Sub-Attributes

is_sms_enabled

boolean

SMS integration
only

Used to check if SMS communication preference is enabled for the contact person.

is_whatsapp_enabled

boolean

WhatsApp integration
only

Used to check if WhatsApp communication preference is enabled for the contact person.

default_templates

object

Show Sub-Attributes

invoice_template_id

string

ID of the Invoice template used

invoice_template_name

string

Name of the invoice template used

estimate_template_id

string

ID of the estimate template used

estimate_template_name

string

Name of the estimate template used

creditnote_template_id

string

ID of teh credit note template used

creditnote_template_name

string

Name of the credit note template used

invoice_email_template_id

string

ID of the invoice email tempalte used

invoice_email_template_name

string

Name of the Invoice email template used

estimate_email_template_id

string

ID of the estimate email template used

estimate_email_template_name

string

Name of the estimate email template used

creditnote_email_template_id

string

ID of the credit note email template

creditnote_email_template_name

string

Name of the credit note email template

language_code

string

language of a contact. allowed values de,en,es,fr,it,ja,nl,pt,sv,zh

notes

string

Commennts about the payment made by the contact.

vat_reg_no

string

🇬🇧

United Kingdom

,
Avalara Integration
only

For UK Edition: VAT Registration number of a contact with length should be between 2 and 12 characters.
For Avalara: If you are doing sales in the European Union (EU) then provide VAT Registration Number of your customers here. This is used to calculate VAT for B2B sales, from Avalara.

tax_reg_no

string

🇲🇽

Mexico

only

12 digit Tax Registration number of a contact with Tax treatment as  home_country_mexico, border_region_mexico, non_mexico. Consumers generic RFC: XAXX010101000, Overseas generic RFC: XEXX010101000

country_code

string

🇬🇧

United Kingdom

,
Avalara Integration
only

For UK Edition: Two letter country code of a contact.
For Avalara: Two letter country code for the customer country, if your customer is not in US. Refer [AvaTax Codes for Countries and States][2].

tax_treatment

string

🇲🇽

Mexico

only

VAT treatment of the contact.Allowed Values: vat_registered,vat_not_registered,gcc_vat_not_registered,gcc_vat_registered,non_gcc,dz_vat_registered and dz_vat_not_registeredhome_country_mexico (A business that is located within MX)border_region_mexico (A business that is located in the northern and southern border regions in MX)non_mexico (A business that is located outside MX).

tax_regime

string

🇲🇽

Mexico

only

Tax Regime of the contact.Allowed Values: general_legal_person, legal_entities_non_profit, resident_abroad, production_cooperative_societies, agricultural_livestock, optional_group_of_companies, coordinated, simplified_trust, wages_salaries_income, lease, property_disposal_acquisition, other_income, resident_abroad, divident_income, individual_business_professional, interest_income, income_obtaining_price, no_tax_obligation, tax_incorporation, income_through_technology_platform, simplified_trust.

legal_name

string

🇲🇽

Mexico

only

Legal Name of the contact.

is_tds_registered

boolean

🇲🇽

Mexico

only

Boolean to check if tax is registered.

vat_treatment

string

🇬🇧

United Kingdom

only

VAT treatment of the contact.Allowed Values:
uk (A business that is located in the UK.),
eu_vat_registered (A business that is reg for VAT and trade goods between Northern Ireland and EU. This node is available only for organizations enabled for NI protocal in VAT Settings.) and
overseas (A business that is located outside UK. Pre Brexit, this was split as eu_vat_registered, eu_vat_not_registered and non_eu ).

avatax_exempt_no

string

Avalara Integration
only

Exemption certificate number of the customer.

avatax_use_code

string

Avalara Integration
only

Used to group like customers for exemption purposes. It is a custom value that links customers to a tax rule. Select from Avalara [standard codes][1] or enter a custom code.

tax_exemption_id

string

🇺🇸

United States

,
🇨🇦

Canada

,
🇦🇺

Australia

,
🇮🇳

India

only

ID of the tax exemption.

tax_authority_id

string

🇺🇸

United States

only

ID of the tax authority. Tax authority depends on the location of the customer. For example, if the customer is located in NY, then the tax authority is NY tax authority.

tax_id

boolean

🇺🇸

United States

,
🇮🇳

India

only

ID of the tax or tax group that can be collected from the contact. Tax can be given only if is_taxable is true.

is_taxable

boolean

🇺🇸

United States

,
🇨🇦

Canada

,
🇦🇺

Australia

,
🇮🇳

India

,
🇲🇽

Mexico

only

Boolean to track the taxability of the customer.

facebook

string

Facebook profile account of the contact. Maximum length [100]

twitter

string

Twitter account of the contact. MAximum length [100]

place_of_contact

string

🇮🇳

India

only

Location of the contact. (This node identifies the place of supply and source of supply when invoices/bills are raised for the customer/vendor respectively. This is not applicable for Overseas contacts)

gst_no

string

🇮🇳

India

only

15 digit GST identification number of the customer/vendor.

gst_treatment

string

🇮🇳

India

only

Choose whether the contact is GST registered/unregistered/consumer/overseas. Allowed values are  business_gst  ,  business_none  ,  overseas  ,  consumer .

tax_authority_name

string

Name of the Tax Authority

tax_exemption_code

string

🇺🇸

United States

,
🇨🇦

Canada

,
🇦🇺

Australia

,
🇮🇳

India

only

Enter tax exemption code

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695"
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
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695', options)
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

conn.request("PUT", "/inventory/v1/contacts/460000000026049?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"payment_terms": 15,
"currency_id": 460000000000097,
"contact_type": "customer",
"website": "www.bowmanfurniture.com",
"custom_fields": [
{
"value": "GBGD078",
"index": 1,
"label": "VAT ID"
}
],
"opening_balances": [
{
"location_id": "460000000038080",
"exchange_rate": 1,
"opening_balance_amount": 1200
}
],
"billing_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"shipping_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"contact_persons": [
{
"salutation": "Mr",
"first_name": "Will",
"last_name": "Smith",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"is_primary_contact": true,
"communication_preference": {
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"default_templates": {
"invoice_template_id": 460000000052069,
"invoice_template_name": "Custom Classic",
"estimate_template_id": 460000000000179,
"estimate_template_name": "Service - Professional",
"creditnote_template_id": 460000000000211,
"creditnote_template_name": "Fixed Cost - Professional",
"invoice_email_template_id": 460000000052071,
"invoice_email_template_name": "Custom Invoice Notification",
"estimate_email_template_id": 460000000052073,
"estimate_email_template_name": "Custom Estimate Notification",
"creditnote_email_template_id": 460000000052075,
"creditnote_email_template_name": "Custom Credit Note Notification"
},
"language_code": "en",
"notes": "Payment option : Through check",
"vat_reg_no": "string",
"tax_reg_no": 12345678912345,
"country_code": "US",
"tax_treatment": "string",
"tax_regime": "general_legal_person",
"legal_name": "ESCUELA KEMPER URGATE",
"is_tds_registered": true,
"vat_treatment": "string",
"avatax_exempt_no": "string",
"avatax_use_code": "string",
"tax_exemption_id": 11149000000061054,
"tax_authority_id": 11149000000061052,
"tax_id": 11149000000061058,
"is_taxable": true,
"facebook": "zoho",
"twitter": "zoho",
"place_of_contact": "TN",
"gst_no": "22AAAAA0000A1Z5",
"gst_treatment": "business_gst",
"tax_authority_name": "string",
"tax_exemption_code": "string"
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Contact has been updated successfully",
"contact": {
"contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"has_transaction": true,
"contact_type": "customer",
"is_linked_with_zohocrm": false,
"website": "www.bowmanfurniture.com",
"primary_contact_id": 460000000026051,
"payment_terms": 15,
"payment_terms_label": "Net 15",
"opening_balances": [
{
"location_id": "460000000038080",
"exchange_rate": 1,
"opening_balance_amount": 1200
}
],
"location_id": "460000000038080",
"location_name": "string",
"currency_id": 460000000000097,
"currency_code": "USD",
"currency_symbol": "$",
"language_code": "en",
"outstanding_receivable_amount": 250,
"outstanding_receivable_amount_bcy": 250,
"unused_credits_receivable_amount": 1369.66,
"unused_credits_receivable_amount_bcy": 1369.66,
"status": "active",
"payment_reminder_enabled": true,
"custom_fields": [
{
"value": "GBGD078",
"index": 1,
"label": "VAT ID"
}
],
"billing_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"shipping_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"facebook": "zoho",
"twitter": "zoho",
"contact_persons": [
{
"salutation": "Mr",
"first_name": "Will",
"last_name": "Smith",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"is_primary_contact": true,
"communication_preference": {
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"default_templates": {
"invoice_template_id": 460000000052069,
"invoice_template_name": "Custom Classic",
"estimate_template_id": 460000000000179,
"estimate_template_name": "Service - Professional",
"creditnote_template_id": 460000000000211,
"creditnote_template_name": "Fixed Cost - Professional",
"invoice_email_template_id": 460000000052071,
"invoice_email_template_name": "Custom Invoice Notification",
"estimate_email_template_id": 460000000052073,
"estimate_email_template_name": "Custom Estimate Notification",
"creditnote_email_template_id": 460000000052075,
"creditnote_email_template_name": "Custom Credit Note Notification"
},
"notes": "Payment option : Through check",
"created_time": "2013-08-05",
"last_modified_time": "2013-10-07",
"is_taxable": true,
"tax_id": 11149000000061058,
"tax_name": "CGST",
"tax_percentage": 12,
"tax_authority_id": 11149000000061052,
"tax_exemption_id": 11149000000061054,
"tax_authority_name": "string",
"tax_exemption_code": "string",
"place_of_contact": "TN",
"gst_no": "22AAAAA0000A1Z5",
"tax_treatment": "string",
"tax_regime": "general_legal_person",
"legal_name": "ESCUELA KEMPER URGATE",
"is_tds_registered": true,
"vat_treatment": "string",
"gst_treatment": "business_gst"
}
}

### Get contact

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get details of a contact.

OAuth Scope : ZohoInventory.contacts.READ

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/contacts/460000000026049?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"contact": {
"contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"has_transaction": true,
"contact_type": "customer",
"is_linked_with_zohocrm": false,
"website": "www.bowmanfurniture.com",
"opening_balances": [
{
"location_id": "460000000038080",
"exchange_rate": 1,
"opening_balance_amount": 1200
}
],
"location_id": "460000000038080",
"location_name": "string",
"primary_contact_id": 460000000026051,
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"currency_symbol": "$",
"outstanding_receivable_amount": 250,
"outstanding_receivable_amount_bcy": 250,
"unused_credits_receivable_amount": 1369.66,
"unused_credits_receivable_amount_bcy": 1369.66,
"status": "active",
"facebook": "zoho",
"twitter": "zoho",
"payment_reminder_enabled": true,
"custom_fields": [
{
"value": "GBGD078",
"index": 1,
"label": "VAT ID"
}
],
"billing_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"shipping_address": {
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"zip": 94588,
"country": "U.S.A"
},
"contact_persons": [
{
"salutation": "Mr",
"first_name": "Will",
"last_name": "Smith",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"mobile": "+1-4054439562",
"is_primary_contact": true,
"communication_preference": {
"is_sms_enabled": true,
"is_whatsapp_enabled": true
}
}
],
"default_templates": {
"invoice_template_id": 460000000052069,
"invoice_template_name": "Custom Classic",
"estimate_template_id": 460000000000179,
"estimate_template_name": "Service - Professional",
"creditnote_template_id": 460000000000211,
"creditnote_template_name": "Fixed Cost - Professional",
"invoice_email_template_id": 460000000052071,
"invoice_email_template_name": "Custom Invoice Notification",
"estimate_email_template_id": 460000000052073,
"estimate_email_template_name": "Custom Estimate Notification",
"creditnote_email_template_id": 460000000052075,
"creditnote_email_template_name": "Custom Credit Note Notification"
},
"notes": "Payment option : Through check",
"created_time": "2013-08-05",
"last_modified_time": "2013-10-07",
"is_taxable": true,
"tax_id": 11149000000061058,
"tax_name": "CGST",
"tax_percentage": 12,
"tax_authority_id": 11149000000061052,
"tax_exemption_id": 11149000000061054,
"tax_authority_name": "string",
"tax_exemption_code": "string",
"place_of_contact": "TN",
"gst_no": "22AAAAA0000A1Z5",
"tax_treatment": "string",
"tax_regime": "general_legal_person",
"legal_name": "ESCUELA KEMPER URGATE",
"is_tds_registered": true,
"vat_treatment": "string",
"gst_treatment": "business_gst"
}
}

### Delete a contact

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Delete an existing contact.

OAuth Scope : ZohoInventory.contacts.DELETE

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695"
type: DELETE
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("DELETE", "/inventory/v1/contacts/460000000026049?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "DELETE",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The contact has been deleted."
}

### Get contact address

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the billing and shipping address of an existing contact

OAuth Scope : ZohoInventory.contacts.READ

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049/address?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049/address?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049/address?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/contacts/460000000026049/address?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049/address?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049/address?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"addresses": [
{
"address_id": 460000000026101,
"attention": "Mr.John",
"address": "4900 Hopyard Rd",
"street2": "Suit 310",
"city": "Pleasanton",
"state": "California",
"state_code": "CA",
"zip": 94588,
"country": "U.S.A",
"country_code": "US",
"phone": "+1-925-921-9201",
"fax": "+1-925-924-9600"
},
{...},
{...}
]
}

### Mark as active

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Mark a contact as active.

OAuth Scope : ZohoInventory.contacts.CREATE

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049/active?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049/active?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049/active?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/contacts/460000000026049/active?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049/active?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049/active?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The contact has been marked as active."
}

### Mark as Inactive

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Mark a contact as inactive.

OAuth Scope : ZohoInventory.contacts.CREATE

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049/inactive?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049/inactive?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049/inactive?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/contacts/460000000026049/inactive?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049/inactive?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049/inactive?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The contact has been marked as inactive."
}

### Email statement

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Email statement to the contact. If JSONString is not inputted, mail will be sent with the default mail content.

OAuth Scope : ZohoInventory.contacts.CREATE

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

(Required)

Subject of an email that has to be sent. Maximum length to be allowed [1000]

body

string

(Required)

Body/content of the email to be sent. Maximum length [5000]

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

start_date

string

If start_date and end_date are not given, current month's statement will be sent to contact. Date format [yyyy-mm-dd]

end_date

string

End date for the statement. Date format [yyyy-mm-dd]

multipart_or_formdata

string

Files to be attached along with the statement.

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695"
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
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695', options)
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

conn.request("POST", "/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"send_from_org_email_id": true,
"to_mail_ids": [
"willsmith@bowmanfurniture.com"
],
"cc_mail_ids": [
"peterparker@bowmanfurniture.com"
],
"subject": "Statement of transactions with Zillium Inc",
"body": "Dear Customer,     <br/>We have attached with this email a list of all your transactions with us for the period 01 Sep 2013 to 30 Sep 2013. You can write to us or call us if you need any assistance or clarifications.     <br/>Thanks for your business.<br/>Regards<br/>Zillium Inc"
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Statement has been sent to the customer."
}

### Get Statement mail content

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the mail content of a contacts billing statement.

OAuth Scope : ZohoInventory.contacts.READ

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

start_date

string

If start_date and end_date are not given, current month's statement will be sent to contact. Date format [yyyy-mm-dd]

end_date

string

End date for the statement. Date format [yyyy-mm-dd]

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049/statements/email?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"body": "Dear Customer,     <br/>We have attached with this email a list of all your transactions with us for the period 01 Sep 2013 to 30 Sep 2013. You can write to us or call us if you need any assistance or clarifications.     <br/>Thanks for your business.<br/>Regards<br/>Zillium Inc",
"subject": "Statement of transactions with Zillium Inc",
"to_contacts": [
{
"first_name": "Will",
"selected": true,
"phone": "+1-925-921-9201",
"email": "willsmith@bowmanfurniture.com",
"contact_person_id": 460000000026051,
"last_name": "Smith",
"salutation": "Mr",
"mobile": "+1-4054439562"
}
],
"file_name": "statement_BowmanandCo.pdf",
"from_emails": [
{
"user_name": "John Smith",
"selected": true,
"email": "willsmith@bowmanfurniture.com"
}
],
"contact_id": 460000000026049
}

### Email contact

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Send email to contact.

OAuth Scope : ZohoInventory.contacts.CREATE

#### Arguments

to_mail_ids

array

(Required)

Array of email addresses of the recipients.

subject

string

(Required)

Subject of an email has to be sent. Maximum length [1000]

body

string

(Required)

Body/content of the email to be sent. Maximum length [5000]

attachments

binary

Files to be attached to the email. It has to be sent in multipart/formdata

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

send_customer_statement

boolean

Send customer statement pdf with email.

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049/email?organization_id=10234695"
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
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049/email?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049/email?organization_id=10234695', options)
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

conn.request("POST", "/inventory/v1/contacts/460000000026049/email?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049/email?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049/email?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"to_mail_ids": [
"willsmith@bowmanfurniture.com"
],
"subject": "Welcome to Zillium Inc .",
"body": "Dear Customer,     <br/>We have attached with this email a list of all your transactions with us for the period 01 Sep 2013 to 30 Sep 2013. You can write to us or call us if you need any assistance or clarifications.     <br/>Thanks for your business.<br/>Regards<br/>Zillium Inc",
"attachments": "string"
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Email has been sent."
}

### List Comments

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

List recent activities of a contact.

OAuth Scope : ZohoInventory.contacts.READ

#### Path Parameters

contact_id

string

(Required)

Unique identifier of the contact.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

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
url: "https://www.zohoapis.com/inventory/v1/contacts/460000000026049/comments?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/contacts/460000000026049/comments?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/contacts/460000000026049/comments?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/contacts/460000000026049/comments?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/contacts/460000000026049/comments?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/contacts/460000000026049/comments?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"contact_comments": [
{
"comment_id": 460000000053131,
"contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"description": "",
"commented_by_id": 460000000024003,
"commented_by": "David John",
"date": "2013-11-19",
"date_description": "4 days ago",
"time": "6:03 PM",
"transaction_id": 460000000053123,
"transaction_type": "customer_payment",
"is_entity_deleted": false,
"operation_type": "added"
},
{...},
{...}
]
}

${resultObj.description}

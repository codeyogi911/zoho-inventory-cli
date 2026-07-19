<!-- Extracted from https://www.zoho.com/inventory/api/v1/locations/ by tools/fetch-api-docs.mjs. DERIVED, not authoritative — open the URL when it matters. -->

# locations

Source: <https://www.zoho.com/inventory/api/v1/locations/>

---

POST

/settings/locations/enable

Create a location

POST

/locations

List all locations

GET

/locations

Update location

PUT

/locations/{location_id}

Get a location

GET

/locations/{location_id}

Delete a location

DELETE

/locations/{location_id}

Mark as Active

POST

/locations/{location_id}/active

Mark as Inactive

POST

/locations/{location_id}/inactive

Mark as Primary

POST

/locations/{location_id}/markasprimary

List users of a location

GET

/locations/{location_id}/users

#### Attribute

address

object

Show Sub-Attributes

city

string

City Name of the location.

state

string

State Name of the location.

country

string

Country Name of the location.

attention

string

Attention of the location.

state_code

string

State code of the location.

street_address1

string

Street Name of the location.

street_address2

string

Street Name of the location.

email

string

Email id for the location

is_primary

boolean

Whether it is primary location or not

phone

string

Mobile number for location

status

Status of the locations. Allowed Values: active, inactive

location_id

string

Location ID

location_name

string

Name of the location

type

string

Type of the location

parent_location_id

string

Parent Location ID

associated_series_ids

array

List of associated series IDs

auto_number_generation_id

string

Autonumber generation group ID

associated_users

array

Show Sub-Attributes

user_id

string

User ID

user_name

string

User Name

tax_settings_id

string

🇮🇳

India

only

Tax Settings ID

Example

{
"address": {
"city": "New York City",
"state": "New York",
"country": "U.S.A",
"attention": "string",
"state_code": "NY",
"street_address1": "No:234,90 Church Street",
"street_address2": "McMillan Avenue"
},
"email": "willsmith@bowmanfurniture.com",
"is_primary": true,
"phone": "+1-925-921-9201",
"status": "active",
"location_id": "460000000038080",
"location_name": "Head Office",
"type": "general / line_item_only",
"parent_location_id": "460000000041010",
"associated_series_ids": [
"982000000870911",
"982000000870915"
],
"auto_number_generation_id": "982000000870911",
"associated_users": [
{
"user_id": "460000000036868",
"user_name": "John Doe"
}
],
"tax_settings_id": "460000000038080"
}

### Enable Locations

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Enable Locations for an organisation.

OAuth Scope : ZohoInventory.settings.CREATE

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
url: "https://www.zohoapis.com/inventory/v1/settings/locations/enable?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/settings/locations/enable?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/settings/locations/enable?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/settings/locations/enable?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/settings/locations/enable?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/settings/locations/enable?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "We're enabling locations for your organization."
}

### Create a location

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Create a location.

OAuth Scope : ZohoInventory.settings.CREATE

#### Arguments

type

string

Type of the location

email

string

Email id for the location

phone

string

Mobile number for location

address

object

Show Sub-Attributes

city

string

City Name of the location.

state

string

State Name of the location.

country

string

Country Name of the location.

attention

string

Attention of the location.

state_code

string

State code of the location.

street_address1

string

Street Name of the location.

street_address2

string

Street Name of the location.

location_name

string

(Required)

Name of the location

tax_settings_id

string

(Required)

🇮🇳

India

only

Tax Settings ID

parent_location_id

string

Parent Location ID

associated_series_ids

array

List of associated series IDs

auto_number_generation_id

string

Autonumber generation group ID

is_all_users_selected

boolean

Whether all users are selected or not

user_ids

string

Comma separated user ids.

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
url: "https://www.zohoapis.com/inventory/v1/locations?organization_id=10234695"
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
.url("https://www.zohoapis.com/inventory/v1/locations?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/locations?organization_id=10234695', options)
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

conn.request("POST", "/inventory/v1/locations?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/locations?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/locations?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"type": "general / line_item_only",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"address": {
"city": "New York City",
"state": "New York",
"country": "U.S.A",
"attention": "string",
"state_code": "NY",
"street_address1": "No:234,90 Church Street",
"street_address2": "McMillan Avenue"
},
"location_name": "Head Office",
"tax_settings_id": "460000000038080",
"parent_location_id": "460000000041010",
"associated_series_ids": [
"982000000870911",
"982000000870915"
],
"auto_number_generation_id": "982000000870911",
"is_all_users_selected": false,
"user_ids": "460000000036868,460000000036869"
}

Response Example

201 - Created

- 201 - Created

{
"code": 0,
"message": "Location has been created.",
"locations": {
"address": {
"city": "New York City",
"state": "New York",
"country": "U.S.A",
"attention": "string",
"state_code": "NY",
"street_address1": "No:234,90 Church Street",
"street_address2": "McMillan Avenue"
},
"email": "willsmith@bowmanfurniture.com",
"is_primary": true,
"phone": "+1-925-921-9201",
"status": "active",
"location_id": "460000000038080",
"location_name": "Head Office",
"type": "general / line_item_only",
"parent_location_id": "460000000041010",
"associated_series_ids": [
"982000000870911",
"982000000870915"
],
"auto_number_generation_id": "982000000870911",
"associated_users": [
{
"user_id": "460000000036868",
"user_name": "John Doe"
}
],
"tax_settings_id": "460000000038080"
}
}

### List all locations

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

List all the available locations in your zoho inventory.

OAuth Scope : ZohoInventory.settings.READ

#### Query Parameters

organization_id

string

(Required)

ID of the organization

is_hierarchical_response

boolean

When set to true, returns the locations in a parent-child hierarchical structure instead of a flat list.

location_type

string

Filter locations by type. Allowed Values: general and line_item_only.

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
url: "https://www.zohoapis.com/inventory/v1/locations?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/locations?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/locations?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/locations?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/locations?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/locations?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"locations": [
{
"type": "general / line_item_only",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"address": {
"city": "New York City",
"state": "New York",
"country": "U.S.A",
"attention": "string",
"state_code": "NY",
"street_address1": "No:234,90 Church Street",
"street_address2": "McMillan Avenue"
},
"location_id": "460000000038080",
"location_name": "Head Office",
"tax_settings_id": "460000000038080",
"parent_location_id": "460000000041010",
"associated_series_ids": [
"982000000870911",
"982000000870915"
],
"auto_number_generation_id": "982000000870911",
"is_all_users_selected": false,
"associated_users": [
{
"user_id": "460000000036868",
"user_name": "John Doe"
}
]
},
{...},
{...}
]
}

### Update location

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Update location

OAuth Scope : ZohoInventory.settings.UPDATE

#### Arguments

type

string

Type of the location

email

string

Email id for the location

phone

string

Mobile number for location

address

object

Show Sub-Attributes

city

string

City Name of the location.

state

string

State Name of the location.

country

string

Country Name of the location.

attention

string

Attention of the location.

state_code

string

State code of the location.

street_address1

string

Street Name of the location.

street_address2

string

Street Name of the location.

location_name

string

(Required)

Name of the location

tax_settings_id

string

(Required)

🇮🇳

India

only

Tax Settings ID

parent_location_id

string

Parent Location ID

associated_series_ids

array

List of associated series IDs

auto_number_generation_id

string

Autonumber generation group ID

is_all_users_selected

boolean

Whether all users are selected or not

user_ids

string

Comma separated user ids.

#### Path Parameters

location_id

string

(Required)

Unique identifier of the location.

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
url: "https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695"
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
.url("https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695', options)
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

conn.request("PUT", "/inventory/v1/locations/130426000000664020?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/locations/130426000000664020?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"type": "general / line_item_only",
"email": "willsmith@bowmanfurniture.com",
"phone": "+1-925-921-9201",
"address": {
"city": "New York City",
"state": "New York",
"country": "U.S.A",
"attention": "string",
"state_code": "NY",
"street_address1": "No:234,90 Church Street",
"street_address2": "McMillan Avenue"
},
"location_name": "Head Office",
"tax_settings_id": "460000000038080",
"parent_location_id": "460000000041010",
"associated_series_ids": [
"982000000870911",
"982000000870915"
],
"auto_number_generation_id": "982000000870911",
"is_all_users_selected": false,
"user_ids": "460000000036868,460000000036869"
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Location has been updated.",
"locations": {
"address": {
"city": "New York City",
"state": "New York",
"country": "U.S.A",
"attention": "string",
"state_code": "NY",
"street_address1": "No:234,90 Church Street",
"street_address2": "McMillan Avenue"
},
"email": "willsmith@bowmanfurniture.com",
"is_primary": true,
"phone": "+1-925-921-9201",
"status": "active",
"location_id": "460000000038080",
"location_name": "Head Office",
"type": "general / line_item_only",
"parent_location_id": "460000000041010",
"associated_series_ids": [
"982000000870911",
"982000000870915"
],
"auto_number_generation_id": "982000000870911",
"associated_users": [
{
"user_id": "460000000036868",
"user_name": "John Doe"
}
],
"tax_settings_id": "460000000038080"
}
}

### Get a location

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the details of a location.

OAuth Scope : ZohoInventory.settings.READ

#### Path Parameters

location_id

string

(Required)

Unique identifier of the location.

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
url: "https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/locations/130426000000664020?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/locations/130426000000664020?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"location": {
"location_id": "460000000038080",
"location_name": "Head Office",
"type": "general / line_item_only",
"parent_location_id": "460000000041010",
"address": {
"city": "New York City",
"state": "New York",
"country": "U.S.A",
"attention": "string",
"state_code": "NY",
"street_address1": "No:234,90 Church Street",
"street_address2": "McMillan Avenue"
},
"phone": "+1-925-921-9201",
"fax": "+1-925-921-9202",
"email": "willsmith@bowmanfurniture.com",
"website": "www.bowmanfurniture.com",
"tax_settings_id": "460000000038080",
"tax_reg_no": "29AAAAA0000A1Z5",
"is_primary_location": true,
"is_location_active": true,
"autonumbergenerationgroup_id": "982000000870911",
"autonumbergenerationgroup_name": "Default Series",
"associated_series_ids": [
"982000000870911",
"982000000870915"
],
"customer_id": "460000000038090",
"customer_name": "Bowman Furniture",
"vendor_id": "460000000038092",
"vendor_name": "Bowman Furniture",
"is_all_users_selected": false,
"associated_users": [
{
"user_id": "460000000036868",
"user_name": "John Doe"
}
],
"location_identification_number": "BR-001",
"location_identification_label": "BR"
}
}

### Delete a location

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Delete a location.

OAuth Scope : ZohoInventory.settings.DELETE

#### Path Parameters

location_id

string

(Required)

Unique identifier of the location.

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
url: "https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695"
type: DELETE
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("DELETE", "/inventory/v1/locations/130426000000664020?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "DELETE",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/locations/130426000000664020?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/locations/130426000000664020?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The location has been deleted.."
}

### Mark as Active

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Mark location as Active.

OAuth Scope : ZohoInventory.settings.CREATE

#### Path Parameters

location_id

string

(Required)

Unique identifier of the location.

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
url: "https://www.zohoapis.com/inventory/v1/locations/130426000000664020/active?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/locations/130426000000664020/active?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/locations/130426000000664020/active?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/locations/130426000000664020/active?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/locations/130426000000664020/active?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/locations/130426000000664020/active?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The location has been marked as active."
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

Mark location as Inactive.

OAuth Scope : ZohoInventory.settings.CREATE

#### Path Parameters

location_id

string

(Required)

Unique identifier of the location.

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
url: "https://www.zohoapis.com/inventory/v1/locations/130426000000664020/inactive?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/locations/130426000000664020/inactive?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/locations/130426000000664020/inactive?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/locations/130426000000664020/inactive?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/locations/130426000000664020/inactive?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/locations/130426000000664020/inactive?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The location has been marked as inactive."
}

### Mark as Primary

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Mark location as primary.

OAuth Scope : ZohoInventory.settings.CREATE

#### Path Parameters

location_id

string

(Required)

Unique identifier of the location.

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
url: "https://www.zohoapis.com/inventory/v1/locations/130426000000664020/markasprimary?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/locations/130426000000664020/markasprimary?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/locations/130426000000664020/markasprimary?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/locations/130426000000664020/markasprimary?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/locations/130426000000664020/markasprimary?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/locations/130426000000664020/markasprimary?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The location has been marked as primary."
}

### List users of a location

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

List the users associated with a location.

OAuth Scope : ZohoInventory.settings.READ

#### Path Parameters

location_id

string

(Required)

Unique identifier of the location.

#### Query Parameters

organization_id

string

(Required)

ID of the organization

page

integer

Page number for paginated results.

per_page

integer

Number of records to return per page.

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
url: "https://www.zohoapis.com/inventory/v1/locations/130426000000664020/users?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/locations/130426000000664020/users?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/locations/130426000000664020/users?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/locations/130426000000664020/users?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/locations/130426000000664020/users?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/locations/130426000000664020/users?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"users": [
{
"user_id": "460000000036868",
"name": "John Doe",
"email": "john.doe@bowmanfurniture.com",
"mobile": "+1-925-921-9201",
"user_role": "admin",
"status": "active",
"photo_url": "https://contacts.zoho.com/file?ID=12345"
},
{...},
{...}
],
"page_context": {
"page": 1,
"per_page": 50,
"has_more_page": false,
"report_name": "Users",
"sort_column": "name",
"sort_order": "A"
}
}

${resultObj.description}

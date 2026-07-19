<!-- Extracted from https://www.zoho.com/inventory/api/v1/users/ by tools/fetch-api-docs.mjs. DERIVED, not authoritative — open the URL when it matters. -->

# users

Source: <https://www.zoho.com/inventory/api/v1/users/>

---

POST

/users

List Users

GET

/users

Update a user

PUT

/users/{user_id}

Get a user

GET

/users/{user_id}

Delete a user

DELETE

/users/{user_id}

Get current user

GET

/users/me

Invite a user

POST

/users/{user_id}/invite

Mark user as active

POST

/users/{user_id}/active

Mark user as inactive

POST

/users/{user_id}/inactive

### Create a user

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Create a user for your organization.

OAuth Scope : ZohoInventory.settings.CREATE

#### Arguments

name

string

(Required)

name of the user

email

string

(Required)

email address of the user

user_role

string

The role of the user

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
url: "https://www.zohoapis.com/inventory/v1/users?organization_id=10234695"
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
.url("https://www.zohoapis.com/inventory/v1/users?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/users?organization_id=10234695', options)
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

conn.request("POST", "/inventory/v1/users?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/users?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/users?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"name": "David John",
"email": "johndavid@zilliuminc.com",
"user_role": "admin"
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Your invitation has been sent."
}

### List Users

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the list of all users in the organization.

OAuth Scope : ZohoInventory.settings.READ

#### Query Parameters

organization_id

string

(Required)

ID of the organization

filter_by

string

Criteria used to filter

sort_column

string

Sort users. Allowed Values: name, email, user_role and status

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
url: "https://www.zohoapis.com/inventory/v1/users?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/users?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/users?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/users?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/users?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/users?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"users": [
{
"user_id": "982000000554041",
"role_id": "982000000006005",
"name": "David John",
"email": "johndavid@zilliuminc.com",
"user_role": "admin",
"user_type": "zoho",
"status": "active",
"is_current_user": true,
"photo_url": "https://contacts.zoho.com/file?ID=d27344a22bad8bb83a03722b4aa5bc6967c3135f24307fe40db8572782432fd6aae0110f8bb9c4c79e8e0f0cca5904aecfacbf079f13b48c295bacc89ae91fca&fs=thumb"
},
{...},
{...}
]
}

### Update a user

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Update the details of a user.

OAuth Scope : ZohoInventory.settings.UPDATE

#### Arguments

name

string

(Required)

name of the user

email

string

(Required)

email address of the user

user_role

string

The role of the user

#### Path Parameters

user_id

string

(Required)

Unique identifier of the user.

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
url: "https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695"
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
.url("https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695', options)
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

conn.request("PUT", "/inventory/v1/users/982000000554041?organization_id=10234695", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "PUT",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/users/982000000554041?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f' \
--header 'content-type: application/json' \
--data '{"field1":"value1","field2":"value2"}'

Body Parameters

Click to copy

{
"name": "David John",
"email": "johndavid@zilliuminc.com",
"user_role": "admin"
}

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The user information has been updated."
}

### Get a user

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the details of a user.

OAuth Scope : ZohoInventory.settings.READ

#### Path Parameters

user_id

string

(Required)

Unique identifier of the user.

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
url: "https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/users/982000000554041?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/users/982000000554041?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"user": {
"user_id": "982000000554041",
"name": "David John",
"email_ids": [
{
"email": "johndavid@zilliuminc.com",
"is_selected": true
}
],
"status": "active",
"user_role": "admin",
"user_type": "zoho",
"role_id": "982000000006005",
"photo_url": "https://contacts.zoho.com/file?ID=d27344a22bad8bb83a03722b4aa5bc6967c3135f24307fe40db8572782432fd6aae0110f8bb9c4c79e8e0f0cca5904aecfacbf079f13b48c295bacc89ae91fca&fs=thumb",
"is_claimant": true,
"created_time": "2016-06-05",
"custom_fields": ""
}
}

### Delete a user

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Delete a user associated to the organization.

OAuth Scope : ZohoInventory.settings.DELETE

#### Path Parameters

user_id

string

(Required)

Unique identifier of the user.

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
url: "https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695"
type: DELETE
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("DELETE", "/inventory/v1/users/982000000554041?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "DELETE",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/users/982000000554041?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/users/982000000554041?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The user has been removed from your organization."
}

### Get current user

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Get the details of the current user.

OAuth Scope : ZohoInventory.settings.READ

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
url: "https://www.zohoapis.com/inventory/v1/users/me?organization_id=10234695"
type: GET
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/users/me?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/users/me?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("GET", "/inventory/v1/users/me?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "GET",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/users/me?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/users/me?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "success",
"user": {
"user_id": "982000000554041",
"name": "David John",
"email_ids": [
{
"email": "johndavid@zilliuminc.com",
"is_selected": true
}
],
"status": "active",
"user_role": "admin",
"user_type": "zoho",
"role_id": "982000000006005",
"photo_url": "https://contacts.zoho.com/file?ID=d27344a22bad8bb83a03722b4aa5bc6967c3135f24307fe40db8572782432fd6aae0110f8bb9c4c79e8e0f0cca5904aecfacbf079f13b48c295bacc89ae91fca&fs=thumb",
"is_claimant": true,
"created_time": "2016-06-05",
"custom_fields": ""
}
}

### Invite a user

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Send invitation email to a person, you wish to add as a user to your organisation. For example- an accountant.

OAuth Scope : ZohoInventory.settings.CREATE

#### Path Parameters

user_id

string

(Required)

Unique identifier of the user.

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
url: "https://www.zohoapis.com/inventory/v1/users/982000000554041/invite?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/users/982000000554041/invite?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/users/982000000554041/invite?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/users/982000000554041/invite?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/users/982000000554041/invite?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/users/982000000554041/invite?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "Your invitation has been sent."
}

### Mark user as active

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Mark an inactive user as active.

OAuth Scope : ZohoInventory.settings.CREATE

#### Path Parameters

user_id

string

(Required)

Unique identifier of the user.

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
url: "https://www.zohoapis.com/inventory/v1/users/982000000554041/active?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/users/982000000554041/active?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/users/982000000554041/active?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/users/982000000554041/active?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/users/982000000554041/active?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/users/982000000554041/active?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The user has been marked as active."
}

### Mark user as inactive

AI Tools

Open in ChatGPT

Open in ChatGPT to ask questions about this page

Open in Claude

Open in Claude to ask questions about this page

Copy as Markdown
Copy this page as markdown to use with AI assistants

View as Markdown

Open this page as markdown in a new tab

Mark an active user as inactive.

OAuth Scope : ZohoInventory.settings.CREATE

#### Path Parameters

user_id

string

(Required)

Unique identifier of the user.

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
url: "https://www.zohoapis.com/inventory/v1/users/982000000554041/inactive?organization_id=10234695"
type: POST
headers: headers_data
connection: <connection_name>
];
info response;

OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
.url("https://www.zohoapis.com/inventory/v1/users/982000000554041/inactive?organization_id=10234695")
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

fetch('https://www.zohoapis.com/inventory/v1/users/982000000554041/inactive?organization_id=10234695', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

import http.client

conn = http.client.HTTPSConnection("www.zohoapis.com")

headers = { 'Authorization': "Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f" }

conn.request("POST", "/inventory/v1/users/982000000554041/inactive?organization_id=10234695", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

const http = require("https");

const options = {
"method": "POST",
"hostname": "www.zohoapis.com",
"port": null,
"path": "/inventory/v1/users/982000000554041/inactive?organization_id=10234695",
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
--url 'https://www.zohoapis.com/inventory/v1/users/982000000554041/inactive?organization_id=10234695' \
--header 'Authorization: Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'

Response Example

200 - OK

- 200 - OK

{
"code": 0,
"message": "The user has been marked as inactive."
}

${resultObj.description}

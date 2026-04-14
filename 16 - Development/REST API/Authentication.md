---
title: REST API Authentication
tags:
  - dev
aliases:
  - API Auth
  - API Token
canonical: true
audience: dev
domain: development
---
# REST API Authentication

## Overview

Clarity REST APIs support three methods for authenticating user requests:

- **Token-based authentication** — Obtain an authentication token for a session and pass it for subsequent API requests. The token remains active until the session ends.
- **Basic authentication** — Pass user credentials in base64 encoding with every API request. Recommended for testing purposes only.
- **Key-based authentication** — Generate an API key based on a user's credentials, access rights, and status settings. Use for integrating Clarity with other client applications or if SSO is in use.

---

## Authorization — Access Rights Required

Regardless of the authentication method, you need:

- **API-Access** — Required to send requests to the Clarity APIs.
- **Functional access rights** — Required to view or update specific areas. For example, without the **Projects - Create** access right, a POST request to the Project resource returns a `401 Unauthorized` error.

---

## Token-Based Authentication

The Login and Logout API endpoints implement token-based login via the `/auth` context.

### Generate a Token (Login API)

The Login API requires basic authentication (Base64-encoded username and password) and returns an `authToken`.

**Request:**
```
POST http://<servername>:<port>/ppm/rest/v1/auth/login
Authorization: Basic YWRtaW46YWRtaW4=
```

**Response body:**
```json
{
  "authToken": "5096019__059A218A-360D-455B-8E6C-7625B7500A4A",
  "_self": "http://<servername>:8080/ppm/rest/v1/auth/login"
}
```

### Use the AuthToken

Pass the `authToken` in the `Authorization` header for subsequent API calls.

### Delete the Token (Logout API)

The Logout API invalidates the `authToken`.

**Request:**
```
DELETE http(s)://<servername>:<port>/ppm/rest/v1/auth/logout
Header: authToken = <authToken value from login>
```

A successful logout returns a blank response body with status `200 OK`.

---

## Basic Authentication

Pass the username and password with Base64 encoding in every REST API request. Recommended for testing only.

---

## Key-Based Authentication

Key-based authentication uses a personal API key generated for a specific client based on a user's SSO credentials, access rights, and status settings. Keys eliminate the need to generate and pass credentials for every session.

**Use key authentication when:**
- Integrating data between Clarity and other client applications.
- Your Clarity instance uses SSO for authentication.

### Setup Process (5 Steps)

1. **Administrator: Create an Integration User and Grant Access Rights**
2. **Administrator: Enable API Key Authentication**
3. **Administrator: Define REST API Client Applications**
4. **API Developer: Generate API Key for your Client**
5. **API Developer: Use the API Key to Integrate with the Client**

---

### Step 1 — Create an Integration User

The integration user must have:
- **API-Access**
- Functional access rights for the relevant objects (e.g., read access to Projects)

See the Create a New User section and [[Authentication and Keys]] for details.

---

### Step 2 — Enable API Key Authentication

Key-based authentication is **disabled by default**.

> [!NOTE]
> If you are using Clarity SaaS in a non-GCP environment, open a support ticket to enable API Key authentication. GCP environments can follow the steps below.

**Follow these steps:**
1. In Classic PPM, click **Administration > General Settings > System Options**.
2. Scroll to the **API** section and configure:
   - Select **Enable API key-based access**. Clearing this option later invalidates all existing keys.
   - Change the value in the **Salt for Encrypting API Keys** field from the default preset value.
   - Set the **Maximum expiration in days for API keys** (default: 90 days).
   - Set the **Maximum number of keys allowed per user** (per single client, max 20 keys per user).
3. Click **Save**.

> [!TIP]
> Minimize future changes to the salt field. If you change the salt after keys are created, you must regenerate all keys.

---

### Step 3 — Define REST API Client Applications

Define a client for each application you want to integrate with Clarity. This ensures only authorized clients can access data.

**Follow these steps:**
1. Log in to Clarity.
2. Click **Administration**.
3. Click **Authentication & Keys**.
4. Click **CLIENTS**.
5. Click **Add Row** and specify:
   - A unique **Client ID** and **Name**.

> [!NOTE]
> - The Client ID must be passed with the API key in future REST API calls.
> - This release does not support deleting a client — deactivate it instead.
> - If you clear the **Active** checkbox, all keys for that client are temporarily disabled.

---

### Step 4 — Generate an API Key

> [!NOTE]
> Each authorized user can store up to **20 active keys** per client. The global maximum across all clients is set in **System Options**.

**Follow these steps:**
1. Log in to Clarity using the integration user account.
2. Click your **name/avatar** in the top-right corner.
3. In the application menu, click **API KEYS**.
4. On the API Keys page, click **New Row** and fill in:
   - **Access Type**: `All Access`, `Read/Edit`, or `Read-Only`.
   - **Client**: Select the integrated client application.
   - **Name**: A name for this key-client pair.
   - **Expiration Date**: Cannot exceed the global limit.
5. After all required fields are complete, your API key appears.

> [!WARNING]
> The **New API Key** modal is the **one and only time** you can view and copy your key. Click **COPY KEY** immediately.

**Key properties:**
- Keys are self-contained and include their associated client, owner, expiration date, and access type.
- Keys run in the context of their owner — access rights are loaded dynamically.
- Keys are only available once. If lost, regenerate a new one.
- Keys are **not stored in the database** — only metadata is stored.

> [!TIP]
> When you refresh a Clarity SaaS instance (e.g., from staging to production), keys from the previous environment no longer work. A new salt value is applied. Administrators must manually delete old keys or deactivate the old client and create new ones.

---

### Step 5 — Use the API Key

**Information to have ready:**
- Client ID
- API Key
- Clarity URL
- REST API object path (e.g., `http://clarity.xyz.com:8080/ppm/rest/v1/projects`)

**REST client settings:**

| Setting | Parameter | Value |
|---------|-----------|-------|
| Method | Request URL | `GET http://<ppm_server>:<port>/ppm/rest/v1/<object_class>` |
| Header | `x-api-ppm-client` | `<my_client_ID>` |
| Header | `Authorization` | `Bearer <MY_REST_API_KEY>` |
| Header | `Content-Type` | `application/json` |

> [!TIP]
> In Postman, set the **Authorization Type** to **Bearer Token** and paste your key into the **Token** field.

**Example request headers:**
```
x-api-ppm-client: CLIENT_MY-APP-2
Authorization: Bearer J0eXAiOiJKV1QiLCJhbGciOiJeyJzdWIiOiJhZG1pbiIs...
```

**Example response body:**
```json
{
  "_pageSize": 25,
  "_self": "https://ppmstage02:8043/ppm/rest/v1/projects",
  "_totalCount": 50,
  "_next": "https://ppmstage02:8043/ppm/rest/v1/projects?offset=25",
  "_results": [
    {
      "_internalId": 5012672,
      "code": "csk.appChange",
      "name": "Application Change Template",
      "_self": "https://ppmstage02:8043/ppm/rest/v1/projects/5012672"
    }
  ]
}
```

---

## Using REST API Key in SSO Environments (On-Premise Only)

If you have a Clarity On-Premise setup with SSO, review the SSO-specific setup documentation before performing the integration steps.

---

## Related
- [[Getting Started]]
- [[_MOC Development]]

%%Source: p3949-3960%%

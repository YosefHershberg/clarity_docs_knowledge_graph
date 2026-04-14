---
title: REST API Enhancements
tags:
  - dev
aliases:
  - API Updates
canonical: true
audience: dev
domain: development
---
# REST API Enhancements

## Overview

Clarity REST APIs expose Clarity data to authorized, external systems for CRUD operations through REST methods. This page lists significant API enhancements by version.

### The `expand` Query Parameter

The `expand` parameter causes child resources associated with a parent resource to be represented inline within the response. This allows retrieving a parent and its children in a single HTTP request:

```
projects/5000001?expand=(tasks=(fields=(code,startDate,costType)),teams)
```

You can combine `expand` with other query parameters (`offset`, `limit`, `filter`, `fields`). Child resource parameters do not impact the parent resource response.

---

## Enhancements Introduced in 16.4.0

### Filtering Support for `_internalId` in `actualTransactions` API

The `actualTransactions` API now supports filtering on the `_internalId` field to retrieve specific transaction records by their internal IDs.

**Supported operators:** `=` (equals) and `in` only. Operators such as `!=`, `<`, `>`, or `contains` are **not** supported.

**Example 1 — Filter by a single internal ID:**
```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=(_internalId=5001123)
```

**Example 2 — Filter by multiple internal IDs:**
```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=(_internalId in (5003214,5003213))
```

> [!NOTE]
> The `_internalId` filter can be combined with other supported filters for `actualTransactions`.

---

## Enhancements Introduced in 16.3.3

### Overwrite Auto-Numbering Using API

You can now override auto-numbering when creating a new investment from a template using a private API.

- **Custom ID in payload:** The private API now uses the ID provided in the payload instead of the Studio-configured auto-numbering.
- **Fallback:** If no ID is specified, the system defaults to Studio-configured auto-numbering.
- **Error on missing values:** If neither the payload nor Studio provides an ID, the API request fails.

> [!NOTE]
> This enhancement applies to a **private API**. Broadcom reserves the right to change the payload structure without notice. Use with caution in production environments.

### Retrieve User Avatar Using API

You can now retrieve a resource's avatar using the enhanced **Resources API**.

- Use `GET` on the Resources API to retrieve avatar information.
- The API returns two avatar-specific fields:
  - `avatarData` — Avatar image in base64 format.
  - `avatar` — Metadata related to the avatar.
- Avatar is a **virtual attribute** (read-only via API; cannot be updated).

### Access `externalId` in Actual Transactions API

Retrieve the `externalId` field as part of the `actualTransactions` API response. This value traces the origin of a transaction (e.g., linking to a timesheet entry).

**Example:**
```
<Clarity URL>/actualTransactions?fields=investmentCode,externalId&limit=100
```

The `externalId` matches the corresponding entry in the **Posted Transactions** grid in Clarity. It often maps to the timesheet entry ID.

### View Multi-Valued Lookup Attributes in the Administration Grid

A new **Multi Valued** column is now available in the **Attributes** grid within Clarity Administration. The column is checked for attributes configured as multi-valued lookups. Add it manually to your grid view; supports sorting and filtering.

---

## Enhancements Introduced in 16.3.2

### Actuals API (`actualTransactions`)

The `actualTransactions` API is now available. Actuals are the real, recorded amounts of work, cost, or effort expended on an investment.

**Key benefits:**
- **Automation** — Automate the flow of actuals data between Clarity and other business applications.
- **Real-Time Data Access** — Retrieve actuals in real time for dashboards, reports, and analytics.
- **Custom Solutions** — Build tailored applications or workflows leveraging actuals data.

> [!NOTE]
> Because Clarity can contain millions of actuals transactions, you must provide a filter criterion with a specific **Transaction Date** or a **Transaction Date Range not exceeding 92 days** (governed by `POSTED_TXN_FILTER_TRANS_DATE_RANGE`).

**Error when no filter is provided:**
```
GET http://<hostname>:<port>/ppm/rest/v1/actualTransactions
→ "Actual/Posted Transactions request needs filter criteria with specific Transaction Date,
   or Transaction Date range not exceeding 92 days."
```

**Use Case 1 — Retrieve actuals for a specific date:**
```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=(transactionDate = '2025-01-01T00:00:00')
```

**Use Case 2 — Use greater/less-than conditions:**
```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=((transactionDate >= '2025-01-01T00:00:00') and (transactionDate <'2025-02-15T00:00:00'))
```

**Use Case 3 — Error when range exceeds 92 days:**
```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=((transactionDate > '2025-01-01T00:00:00') and (transactionDate <= '2025-04-15T00:00:00'))
→ Error: Cannot fetch Actual/Posted Transactions with Transaction Date range exceeding 92 days
```

---

## Enhancements Introduced in 16.2.2

### Update User Password Using REST API

A new API endpoint resets the user password (Clarity-defined passwords only, not Identity Provider passwords):

```
<Clarity REST API URL>/auth/userCredentials
```

> [!IMPORTANT]
> Two new access rights are required:
> 1. **Administration - Service Account** — Allows a user's Clarity password to be changed by an API call.
> 2. **Administration - Service Account Manager** — Allows invoking the REST API to change a user's Clarity password.

**Prerequisites:**
- Feature must be enabled in your Clarity environment (contact Broadcom Support if needed).
- Clarity must be configured for Single Sign-On (SSO) integration.
- Passwords must comply with Clarity's password rules.
- Passwords must be encrypted using encryption keys.

| Condition | Action |
|-----------|--------|
| No certificate configured | API expects password encoded in base64 |
| Certificate with code `USER_PWD_MGMT` exists in **Authentication & Keys > Certificates** | API expects password encrypted using that certificate |

Plain text passwords are **not** accepted.

**API usage:**

| Scenario | Method | URL | JSON Body |
|----------|--------|-----|-----------|
| Update password using username | `POST` | `<Clarity REST API URL>/auth/userCredentials` | `{"userName": "camos", "credential": "Q2xAcml0eQ=="}` |
| Update password using internal ID | `POST` | `<Clarity REST API URL>/auth/userCredentials` | `{"_internalId": "5003054", "credential": "Q2xAcml0eQ=="}` |

### Get Additional Metadata for User/Resource Object Lookups

The `expand` feature now extends to **lookup attributes of user or resource type objects**, returning additional metadata values.

**User Object-based lookup fields:** `username`, `email`, `resourceId`

**Resource Object-based lookup fields:** `userId`, `email`, `uniqueName`

**Syntax:**
```
<Clarity API URL>/<Object Alias>/<Object ID>?expandFields=(<Lookup Attribute ID>=(fields=(<metadata parameter>)))&<additional parameters>
```

**Examples:**

| Scenario | URL |
|----------|-----|
| Get project name + manager's email | `<Clarity REST API URL>/projects/5002054?expandFields=(manager=(fields=(email)))&fields=name` |
| Get project name + manager's email, username, resourceId | `<Clarity REST API URL>/projects/5002054?expandFields=(manager=(fields=(userName,email,resourceId)))&fields=name` |
| Get project name + sponsor's email, userId, uniqueName | `<Clarity REST API URL>/projects/5002054?expandFields=(businessOwner=(fields=(email,userId,uniqueName)))&fields=name` |

> [!NOTE]
> You can only retrieve whitelisted attributes (`"isExpandable": true`). Non-expandable attributes return error `API-1092`.

### Update Sub-Object Data Without Passing Parent Context

Sub-objects can now be read, created, and updated using only their internal ID — no need to pass the full parent context.

**Highlights:**
- Create sub-objects using the parent's internal ID.
- Update sub-objects using their internal ID.
- Supports **bulk updates** only (not individual instances).
- Supports **cross-parent updates** within the same call.
- Deletion and third-level objects are **not** supported.

**Syntax — GET or PATCH:**
```json
{
  "d": [
    { "_internalId": <Sub-object Internal ID>, "<Attribute API Alias>": "<Value>" },
    { "_internalId": <Sub-object Internal ID>, "<Attribute API Alias>": "<Value>" }
  ]
}
```

**Syntax — POST:**
```json
{
  "d": [
    { "_parentId": <Parent Internal ID>, "name": "<Name>", "<Attribute API Alias>": "<value>" }
  ]
}
```

### Update Clarity Impersonating As Another User

REST API calls can now be invoked on behalf of another user using the `x-api-impersonate-user` header.

**Header syntax:**
```
x-api-impersonate-user: <username>
```

**Highlights:**
- Changes made via API reflect the impersonated user, preserving audit integrity.
- Audit logs include a new **"Impersonated By"** column showing the admin who invoked the impersonation.
- Impersonation **cannot** be used for admin-specific APIs (e.g., SAML configuration, user management).

**Prerequisites:**
- Feature toggle `ADMIN_IMPERSONATE_USER_F31686` must be enabled.
- The impersonated user must have API access and permission to update the resource.

> [!IMPORTANT]
> The Impersonate User and User Password Change APIs are not exposed on the Feature Toggle page. Contact support to enable this functionality.

---

## Enhancements Introduced in 16.1.3

### Links API

A new public API manages links in Clarity for Projects, Ideas, Custom Investments, Menu Links, and Task Links.

**Supported HTTP methods:** `GET`, `PATCH`, `PUT`, `POST`, `DELETE`

**Endpoint:**
```
{{ClarityServer}}/ppm/rest/v1/links
```

**Describe endpoint:**
```
{{ClarityServer}}/ppm/rest/v1/describe/links
```

**Supported API fields:**

| Field | Type |
|-------|------|
| `_internalId` | NUMBER |
| `lastUpdatedDate` | DATE |
| `createdDate` | DATE |
| `instanceId` | NUMBER |
| `objectCode` | STRING (25) |
| `name` | STRING (80) |
| `investmentType` | STRING (20) |
| `category` | STRING (80) |
| `concreteUrl` | STRING (1333) |
| `categoryId` | NUMBER |
| `url` | STRING (1333) |
| `sequence` | NUMBER |

> [!IMPORTANT]
> - The Links API is designed **exclusively** for managing links within the **Links module**. It does not support creating or managing categories.
> - This API is **not** for URL attributes.
> - When creating a new link without specifying a sequence number, the system automatically assigns sequence `1`.

---

## Enhancements Introduced in 16.1.1

### Import Financial Transactions from External Systems

New public API endpoint for importing Financial Transactions (Inbound Transactions):

```
/ppm/rest/v1/inboundTransactions
```

> [!NOTE]
> You need the **Financial Process - Transaction Entry** access right to import Financial Transactions.

### Resource API — Financial Attributes

The Resources API (`/ppm/rest/v1/resources`) now supports additional financial attributes for both `GET` and `PATCH`:

| Attribute | API Alias | Data Type |
|-----------|-----------|-----------|
| Financially Active | `finActive` | Boolean |
| Department | `department` | Lookup |
| Location | `location` | Lookup |
| Resource Class | `resourceClass` | Lookup |
| Transaction Class | `transClass` | Lookup |
| Vendor | `vendor` | Lookup |

> [!NOTE]
> For **Labor** resources: Department, Location, Resource Class, and Transaction Class cannot be left empty.
> For **Non-Labor** resources (Equipment, Expense, Material): Resource Class and Transaction Class cannot be left empty.

---

## Enhancements Introduced in 16.1.0

### User Creation API

Create users programmatically and assign them to one or more user groups:

```
"<ClarityServer>"/ppm/rest/v1/users
```

- All mandatory values must be passed.
- You can assign users to multiple groups during creation.
- Supports **Bulk Creation** of up to 50 users at once.

---

## Enhancements Introduced in 16.0.3

### Action Item API Made Public

The Action Item API (introduced in 16.0.2) is now public. You can view action items and act on behalf of a specific user.

**Available endpoints:**
- `actionItems` — Provides information about action items.
- `actionItemAssignees` — Provides assigned information per action item.

### Update Custom Read-Only Attributes

Clarity REST APIs now allow updating custom read-only attributes, but only through **bulk APIs**.

> [!IMPORTANT]
> - Requires the **API Integration capabilities** access right.
> - The bulk API request payload requires the `"updateReadOnlyAttrs"` metadata directive.
> - Applies to bulk `POST` and `PATCH` calls only.

**Example payload:**
```json
{
  "d": [
    {"_internalId": 5070075, "manager": 5000001},
    {"_internalId": 5070076, "manager": 5000011}
  ],
  "_metadata": {
    "_directives": {
      "updateReadOnlyAttrs": true
    }
  }
}
```

---

## Enhancements Introduced in 16.0.2

### API Infrastructure Improvements

In releases prior to 16.0.2, some APIs required at least one stock attribute in a filter. This restriction is removed in 16.0.2+:

```
projects?filter=(myCustomAttribute = true)
```

### `exchangeRates` API

The `exchangeRates` API allows creating and updating exchange rates. Supports `GET`, `POST`, and `PUT/PATCH`. Deletion is **not** supported. No additional access rights are required.

---

## Enhancements Introduced in 15.9.3

### `assignInstanceRights` Flag for Custom Object Instances

When a user creates a custom object instance via REST API (`POST`), Clarity normally auto-assigns three creator instance rights to the user (adding records to `CMN_SEC_ASSGND_OBJ_PERM`).

The `assignInstanceRights` flag (in the `_directives` metadata) allows creating instances **without** auto-assigning these rights.

> [!IMPORTANT]
> - Only supported on **bulk insert** payloads.
> - Supported for bulk `PATCH` and `DELETE` as well.
> - Directives are **not** supported for non-bulk requests.

**Payload structure:**
```json
{
  "_metadata": {
    "_directives": {
      "assignInstanceRights": false
    }
  },
  "d": [
    { "attr1_code": "attr1_value", "attr2_code": "attr2_value" }
  ]
}
```

| Condition | Result |
|-----------|--------|
| `assignInstanceRights` directive missing | Instance rights are granted as before |
| `assignInstanceRights: true` | Instance rights are granted as before |
| `assignInstanceRights: false` | Instance rights are **not** granted |

---

## Related
- [[Using REST APIs]]
- [[_MOC Development]]

%%Source: p3982-4001%%

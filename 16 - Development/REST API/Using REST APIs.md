---
title: Using Clarity REST APIs
tags:
  - dev
  - howto
aliases:
  - API Usage
canonical: true
audience: dev
domain: development
---
# Using Clarity REST APIs

## HTTP Methods

| Method | Purpose |
|--------|---------|
| `GET` | Retrieve resources |
| `POST` | Create resources |
| `PUT` / `PATCH` | Update resources |
| `DELETE` | Remove resources |

## Filtering

Use the `filter` query parameter to narrow results:

```
/ppm/rest/v1/projects?filter=(name = 'My Project')
```

Combine multiple conditions:
```
/ppm/rest/v1/actualTransactions?filter=((transactionDate >= '2025-01-01T00:00:00') and (transactionDate < '2025-02-01T00:00:00'))
```

## Pagination

Control result pages using:
- `offset` — Number of records to skip
- `limit` — Maximum number of records to return

```
/ppm/rest/v1/projects?offset=25&limit=25
```

The response includes `_next` and `_totalCount` fields to support paging through large result sets.

## Field Selection

Use the `fields` parameter to request only specific attributes and reduce response size:

```
/ppm/rest/v1/projects?fields=name,code,status
```

## Expand (Child Resources)

Use the `expand` parameter to include child resources inline in a single request:

```
/ppm/rest/v1/projects/5000001?expand=(tasks=(fields=(code,startDate,costType)),teams)
```

## Bulk Operations

Many APIs support bulk create or update by passing an array in the request body:

```json
{
  "d": [
    { "_internalId": 5002001, "c_workStatus": "status02" },
    { "_internalId": 5003548, "c_workStatus": "status04" }
  ]
}
```

## Response Structure

A typical list response includes:
- `_pageSize` — Records returned in this page
- `_totalCount` — Total number of matching records
- `_self` — URL of this response
- `_next` — URL for the next page (if more records exist)
- `_results` — Array of resource objects

---

## Using OBS Attribute Filtering

When an OBS is associated with a Clarity object, an OBS attribute is created on that object. You can filter by this attribute using the `in` operator.

**Syntax:**

```
(obsAttributeAPIAlias in ((unitId1,unitId2,unitId3), 'MODE'))
```

**Example:**

```
(deptObs in ((5000001,5000002,5000003), 'U'))
```

### Mode Values

| Mode | Meaning |
|---|---|
| `'U'` | Units only (exact match) |
| `'UA'` | Units and Ancestors |
| `'UD'` | Units and Descendants |

> [!WARNING]
> Mode values are case sensitive. Only the `in` operator is supported for OBS filtering — any other operator returns an `invalid filter operator` error.

### Syntax Rules

- OBS filter value must be enclosed in parentheses.
- `unitId1`, `unitId2`, etc. are the OBS unit internal IDs. Single or multiple IDs separated by commas are accepted.
- OBS filters can be combined with other attribute filters:

```
((deptObs in ((5000001,5000002,5000003), 'U')) and (is_active != false))
```

### Staff OBS Filtering

Staff OBS is an attribute of type `number` / `extendedType lookup` on the Team object. It uses the same `in` syntax:

```
(staffObsUnit in ((5000001,5000002,5000003), 'UA'))
```

---

## Using Static Dependent Lookups

Static Dependent Lookups require two mandatory filter parameters: `entryType` and `exitType`. An optional `parentLookup` parameter can also be passed.

**Syntax:**

```
lookups/{LOOKUP_CODE}/lookupValues?filter=((entryType = 'ENTRY_TYPE') and (exitType = 'EXIT_TYPE'))
```

**Example:**

```
lookups/INV_TYPE/lookupValues?filter=((entryType = 'INV_PROCESS_TYPE') and (exitType = 'INV_STAGE_TYPE'))
```

---

## Using Parameterized Dynamic Lookups

Parameterized Dynamic Lookups allow filtering lookup values based on context-specific parameters. Find the parameter mapping in the `lookupParameters` section of the `describeAttributes` API response.

**Sample `describeAttributes` response for a parameterized dynamic lookup attribute:**

```json
{
  "dataType": "string",
  "isMultiValued": false,
  "lookupParameters": {
    "param_department_code_constrain": "departmentCode",
    "param_proj_id_constrain": "_internalId"
  },
  "lookupType": "dynamic",
  "lookupCode": "LOOKUP_PARAM_LOC_ID",
  "extendedType": "lookup",
  "name": "locationCode"
}
```

**Sample lookup API calls:**

```
lookups/OBJ_IDEA_PROJECT_CATEGORY_PARAM/lookupValues?filter=((searchText startsWith '%') and (param_type_constrain = 'type100'))
```

```
lookups/LOOKUP_PARAM_LOC_ID/lookupValues?filter=((searchText startsWith '%') and (param_department_code_constrain = 'Development') and (param_proj_id_constrain = 5001125))
```

Use the `searchText` parameter to search for values by display value:

```
lookups/OBJ_IDEA_PROJECT_CATEGORY_PARAM/lookupValues?filter=((searchText startsWith '%hy') and (param_type_constrain = 'type100'))
```

### Validation Rules

- All parameters the dynamic lookup expects must be provided. Missing parameters are treated as `NULL`.
- If a dependent attribute is not API-enabled, `describeAttributes` returns a `NULL` dependent attribute API ID — pass `NULL` for that parameter in the lookup call.
- Incorrect parameter names return an error response.

---

## Using REST APIs for TSV Attributes

A Time-Scaled Value (TSV) attribute is supported in REST APIs. By default, a TSV attribute in a response contains the **sum** of the TSV over its entire span.

**Example requests for `allocationCurve` on a team member:**

```
GET http://host/ppm/rest/v1/projects/5000001/teams?fields=allocationCurve,requirementName,bookingStatus
```

```
GET http://host/ppm/rest/v1/projects/5000001/teams/5020501
```

### tsvParams Formatting Options

Use the `tsvParams` query parameter to control how TSV output is returned. Three formatting modes are available:

| Mode | Description |
|---|---|
| `hours` / `fte` | Returns the total sum formatted as hours or FTE |
| Fiscal/calendar periods | Returns time-varying data broken out to specific fiscal periods |
| `raw` | Returns time-varying data exactly as stored in the curve |

**General `tsvParams` syntax:**

```
tsvParams=(periods=(alias1, type1, numberOfPeriods1, startDate1, [calendarType1]),(alias2, ...)), (workEffortUnit=fte)
```

- `alias` — API alias of the TSV attribute
- `type` — Period type (e.g., `monthly`, `weekly`)
- `numberOfPeriods` — How many periods to return
- `startDate` — Start date for the period range
- `calendarType` — (Optional) fiscal calendar type

**Example:**

```
http://host/ppm/rest/v1/projects/5000001/teams/5020501&tsvParams=(periods=(allocationCurve,monthly,3,2025-01-01)),(workEffortUnit=fte)
```

---

## Using REST APIs for Financials

### Cost Plans

Cost plans are associated with investments. Pass two mandatory filter parameters:
- `investmentId` — the internal ID of the investment
- `planType` — `FORECAST` for cost plans, `BUDGET` for budget plans

**Get all cost plans for an investment:**

```
GET http://<hostname>:<port>/ppm/rest/v1/costPlans?filter=((investmentId = 5002007) and (planType = 'FORECAST'))
```

### Budget Plans

Clarity does not have a separate Budget Plan object. Use the `/costPlans` endpoint with `planType = 'BUDGET'`:

```
GET http://<hostname>:<port>/ppm/rest/v1/costPlans?filter=((investmentId = 5002007) and (planType = 'BUDGET'))
```

**Get a single cost or budget plan by internal ID:**

```
GET http://<hostname>:<port>/ppm/rest/v1/costPlans/5011006
```

### Benefit Plans

Pass the mandatory `investmentId` filter:

```
GET http://<hostname>:<port>/ppm/rest/v1/benefitPlans?filter=(investmentId = 5001054)
```

---

## Retrieve User Profile Information

Retrieve the logged-in user's profile via the virtual endpoint. Use this to personalize the UI experience, set language preferences, and so on.

> [!NOTE]
> The logged-in user must have the **API-Access** permission for this endpoint to work.

```
GET http://ClarityHostName:Port/ppm/rest/v1/virtual/userProfile
```

**Sample response:**

```json
{
  "_internalId": 1,
  "firstName": "John",
  "lastName": "Doe",
  "language": "en",
  "_self": "http://ClarityHostName:Port/ppm/rest/v1/virtual/userProfile",
  "userName": "jdoe02",
  "locale": "en_US",
  "email": "jdoe02@mailserver.com"
}
```

---

## Related
- [[Authentication]]
- [[Enhancements]]
- [[OBS Configuration]]
- [[_MOC Development]]

%%Source: p3961-3981%%

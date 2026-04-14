---
title: REST API Performance and Load Testing
aliases: [API Performance, Load Testing, API Throughput]
tags: [dev, howto, reference]
canonical: true
audience: dev
domain: development
---
# REST API Performance and Load Testing

## Overview

This note covers performance considerations, query optimization strategies, pagination, bulk operations, and load testing guidance for Clarity 16.4.1 REST APIs. Understanding these patterns helps build efficient integrations and avoid common bottlenecks.

---

## Pagination Strategies

All list endpoints return paginated results. The default page size is **25** records. Use `offset` and `limit` together to page through large result sets.

### Pagination Query Parameters

| Parameter | Example | Description |
|-----------|---------|-------------|
| **limit** | `projects?limit=50` | Number of results per page. Default: 25. |
| **offset** | `projects?offset=100` | Zero-based record index to start from. Default: 0. Cannot exceed total record count. |

### Response Envelope

Every list response includes navigation metadata:

```json
{
  "_pageSize": 25,
  "_totalCount": 50,
  "_self": "http://<host>/ppm/rest/v1/projects?sort=name&limit=25",
  "_next": "http://<host>/ppm/rest/v1/projects?sort=name&limit=25&offset=25",
  "_previous": "<linktofetchpreviouspage>",
  "_results": [ ... ]
}
```

- `_next` and `_previous` links appear **only** when more records exist beyond the current page.
- `_totalCount` gives the total matching record count before pagination.
- `_recordsReturned` shows how many records are in the current page's `_results` array.

### Pagination Best Practices

> [!TIP]
> Always use explicit `limit` values rather than relying on the default of 25. Larger pages reduce round trips but increase response size and server memory usage. Balance based on your payload size.

- For initial discovery, use `limit=1` with a filter to get `_totalCount` before fetching all pages.
- Avoid large `offset` values on very large datasets — deep pagination can degrade query performance. Use filter-based approaches (e.g., filter by date range or ID range) to narrow result sets instead.
- Use the `_next` URL from each response directly rather than manually incrementing `offset` — the server URL-encodes special characters for you.

> [!NOTE]
> If the API endpoint URL contains special characters (spaces, `>`, `+`), encode the URL using UTF-8. Links in responses (`_self`, `_next`, `_previous`) are already URL-encoded and should not be re-encoded.

---

## Query Parameter Optimization

### Use `fields` to Reduce Payload Size

By default, responses include only `_internalId`, `_self`, and attributes defined in resource metadata. The `fields` parameter limits what is returned, reducing bandwidth and parse time:

```
projects?fields=name,isActive,scheduleStart,scheduleFinish
```

> [!TIP]
> Only request the attributes you actually need. Omitting large text fields (descriptions, notes) and computed fields can significantly reduce response size.

### Use `filter` to Reduce Record Count

Push filtering to the server rather than fetching all records and filtering client-side:

```
projects?filter=(isActive = true)
projects?filter=((scheduleStart >= '2024-01-01T00:00:00') and (isActive = true))
```

Combine `filter` with `fields` and `limit` for maximum efficiency:

```
projects?filter=(isActive = true)&fields=name,code,manager&limit=100
```

### Use `sort` for Predictable Pagination

Always sort on a stable, indexed field when paginating large result sets to avoid duplicate or skipped records across pages:

```
projects?sort=name&limit=50&offset=0
projects?sort=_internalId&limit=50&offset=50
```

### The `fields` Parameter on Single-Resource GET

When fetching a single resource by ID, `fields` is the **only** supported query parameter:

```
GET /ppm/rest/v1/projects/5002013?fields=name,isActive,manager
```

All other parameters (`filter`, `sort`, `offset`, `limit`) apply only to list endpoints.

---

## Reducing Round Trips with `expand`

The `expand` parameter retrieves a parent resource and its child resources in a **single HTTP request** instead of separate calls. This is a major throughput multiplier for integrations that need parent + child data.

```
projects/5000001?expand=(tasks=(fields=(code,startDate,costType)),teams)
```

Child resources inside `expand` support their own query parameters:

```
projects/5000001?expand=(tasks=(fields=(code,startDate)&filter=(isActive=true)&limit=10),teams)
```

> [!NOTE]
> Child resource query parameters inside `expand` do **not** affect the parent resource response. You can combine `expand` with `fields`, `offset`, `limit`, and `filter` on the parent.

### `expandFields` for Lookup Metadata

Use `expandFields` to retrieve additional metadata (email, username, etc.) from user/resource lookup attributes without a separate API call:

```
projects/5002054?expandFields=(manager=(fields=(email,userName)))&fields=name
```

> [!NOTE]
> Only attributes where `"isExpandable": true` in the describe response can be expanded. Non-expandable attributes return error `API-1092`.

---

## Bulk Operations

Bulk APIs reduce round trips for write operations. Instead of one POST/PATCH per record, send arrays of records in a single request.

### Bulk POST (Create)

Wrap multiple records in a `"d"` array:

```json
{
  "d": [
    { "code": "Alpha", "name": "Clarity Alpha", "manager": "jsmith" },
    { "code": "Beta", "name": "Clarity Beta", "manager": "jdoe" }
  ]
}
```

The response's `_results` array contains entries for each successfully processed record. Failed records appear under `_errors`; skipped records under `_skipped`.

### Bulk Update Without Parent Context (16.2.2+)

Sub-objects can be updated using only their `_internalId` — no parent context required. Supports cross-parent updates in a single call:

```json
{
  "d": [
    { "_internalId": 5090001, "status": "active" },
    { "_internalId": 5090002, "status": "closed" }
  ]
}
```

> [!WARNING]
> Bulk sub-object updates support PATCH and DELETE only. Individual (non-bulk) updates still require parent context. Third-level objects are not supported.

### Batch Size Limits

| Operation | Batch Limit |
|-----------|-------------|
| PUT (batch) | 50 records |
| User Creation (bulk POST) | 50 users |
| Sub-object bulk update | No explicit limit documented; test for your data volumes |

> [!TIP]
> For large data migrations, batch in chunks of 25–50 records to stay within documented limits and allow for error recovery per batch.

---

## Performance Headers

### `x-api-full-response`

By default, POST, PUT, and PATCH responses are **abbreviated** for performance — they do not return the full object. Pass this header to get the complete object back:

```
x-api-full-response: true
```

> [!TIP]
> Omit `x-api-full-response` in high-volume write operations (e.g., bulk imports) to reduce response payload size and server serialization overhead. Only request the full response when your integration needs to immediately use the returned data.

### `x-api-force-patch`

When network infrastructure blocks PATCH requests, use PUT with this header to behave as PATCH (partial update):

```
x-api-force-patch: true
```

---

## Actual Transactions — Governor Limits

The `actualTransactions` API has a mandatory date-range filter to protect against full-table scans on tables that can contain **millions of rows**.

> [!WARNING]
> Calling `GET /ppm/rest/v1/actualTransactions` without a filter always returns an error. A `transactionDate` filter is mandatory.

### Governor: `POSTED_TXN_FILTER_TRANS_DATE_RANGE`

| Parameter | Value |
|-----------|-------|
| Current limit | 92 days |
| Critical limit | 366 days |

```
# Valid — specific date
actualTransactions?filter=(transactionDate = '2025-01-01T00:00:00')

# Valid — range within 92 days
actualTransactions?filter=((transactionDate >= '2025-01-01T00:00:00') and (transactionDate < '2025-02-15T00:00:00'))

# Invalid — exceeds 92 days → error
actualTransactions?filter=((transactionDate > '2025-01-01T00:00:00') and (transactionDate <= '2025-04-15T00:00:00'))
```

For integrations pulling actuals incrementally, use narrow date windows (daily or weekly) combined with `limit` and `offset` to page through results efficiently.

---

## Load Test Scenarios (Broadcom Reference)

Broadcom performed load testing of Clarity 16.4.1 REST APIs using **2,450 concurrent users**. The test scenarios focused on user rights management operations (update description, add/remove users with varying granted-rights counts):

| Scenario Range | Description |
|----------------|-------------|
| Scenarios 9–10 | Update description, select 0 users (0 rights granted) |
| Scenarios 11–12 | Select/remove 1 user (1 right granted) |
| Scenarios 13–16 | Select/remove 5 users (5–10 rights granted) |
| Scenarios 17–22 | Select/remove 10 users (10–15 rights granted) |
| Scenarios 23–26 | Select/remove 10 users (20 rights granted) |
| Scenarios 27–31 | Deselect all users (1–20 rights revoked) |
| Scenario 32 | Logout |

> [!NOTE]
> Full detailed results for the 2,450-user load test are in the **Clarity 16.4.1 Load Tests** reference document (Broadcom support portal). Contact Broadcom Support for access.

---

## General Performance Best Practices

### Request Design

1. **Filter server-side.** Always push filter criteria into the `filter` parameter rather than retrieving full datasets and filtering in your client.
2. **Limit fields.** Use `fields` to return only the attributes your integration actually consumes.
3. **Use `expand` to batch child data.** One request with `expand` is faster than N+1 separate child requests.
4. **Page consistently.** Use a stable sort key and explicit `limit` to avoid skipped/duplicate records during pagination.
5. **Narrow date ranges on actuals.** Keep `transactionDate` filter windows small (daily/weekly) for the `actualTransactions` API.

### Write Operations

6. **Batch writes.** Use the bulk `"d"` array pattern for POST and PATCH instead of looping individual records.
7. **Omit `x-api-full-response` in bulk imports.** Reduces per-request overhead when you do not need the returned object.
8. **Use sub-object bulk updates.** The 16.2.2 enhancement allows cross-parent bulk sub-object updates in a single call — use it instead of iterating per parent.

### Authentication

9. **Use token-based auth for automated integrations.** Avoids base64 credential encoding overhead per request. Reuse the token for the session lifetime.
10. **Use key-based auth in SSO environments.** Token and basic auth are unavailable in SSO; API keys bypass SSO via the `/tokens/rest/v1` endpoint.

> [!NOTE]
> In SSO environments, REST calls must use `http://hostname:port/tokens/rest/v1` (not `/ppm/rest`). The `/tokens` path adds required headers and forwards to `/ppm/rest` internally.

---

## Related

- [[Using REST APIs]]
- [[Authentication]]
- [[Enhancements]]
- [[_MOC Development]]

%%Source: 23 - Source Documentation/REST API Reference.md%%

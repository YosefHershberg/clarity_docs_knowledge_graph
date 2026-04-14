---
title: Getting Started with Clarity APIs
tags:
  - dev
  - concept
aliases:
  - API Overview
  - REST API Getting Started
canonical: true
audience: dev
domain: development
---
# Getting Started with Clarity APIs

## Overview

Clarity provides RESTful APIs for programmatic access to data and operations. These APIs enable authorized external systems to perform CRUD operations on Clarity data.

## Base URL

The API base URL follows the pattern:

```
https://<clarity-host>/ppm/rest/v1/
```

To fetch a list of all public APIs:
```
http://<ClarityHostName>:<Port>/ppm/rest/v1/describe
```

To view interactive API documentation via the Swagger UI:
```
http://<ClarityHostName>:<Port>/niku/rest/describe/index.html
```

## Key Concepts

- RESTful endpoints for CRUD operations (`GET`, `POST`, `PUT/PATCH`, `DELETE`)
- JSON request/response format
- Token-based, basic, or key-based authentication (see [[Authentication]])
- Pagination support via `offset` and `limit` parameters
- Field selection using the `fields` parameter to reduce response size
- Filtering with the `filter` query parameter
- Child resource expansion using the `expand` query parameter

## Example: First API Call

After authenticating, send a `GET` request to the projects resource:

```
GET http://<ClarityHostName>:<Port>/ppm/rest/v1/projects
```

A successful response returns a paginated list of projects.

## Related
- [[Authentication]]
- [[Using REST APIs]]
- [[Enhancements]]
- [[_MOC Development]]

%%Source: p3946-3948%%

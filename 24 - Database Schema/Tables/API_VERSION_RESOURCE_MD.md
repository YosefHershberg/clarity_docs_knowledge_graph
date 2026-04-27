---
title: API_VERSION_RESOURCE_MD
type: db-table
table: API_VERSION_RESOURCE_MD
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# API_VERSION_RESOURCE_MD

> [!info] Description
> This table stores metadata information of each Rest API. The metadata is stored as a complete JSON produced by describe API.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Primary key for the record. |
| `API_VERSION_ID` | NUMERIC | NOT NULL | The ID of the API version record. |
| `API_ALIAS` | NVARCHAR | NOT NULL | The API alias of a rest resource whose metadata in JSON format will be captured. |
| `METADATA_JSON` | NVARCHARMAX | NULL | The metadata of a rest resource. |
| `METADATA_ATTR_JSON` | NVARCHARMAX | NULL | The metadata of all stock attributes of the rest resource. |
| `CREATED_DATE` | DATE | NOT NULL | Date the API resource metadata record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date the API resource metadata record was last updated. |
| `CREATED_BY` | NUMERIC | NOT NULL | User who created the API resource metadata record. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User who last updated the API resource metadata record. |

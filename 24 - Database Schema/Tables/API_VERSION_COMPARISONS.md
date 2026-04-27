---
title: API_VERSION_COMPARISONS
type: db-table
table: API_VERSION_COMPARISONS
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# API_VERSION_COMPARISONS

> [!info] Description
> This table stores the version comparison results of APIs.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Primary key for the record. |
| `INSTALLED_VER_RES_MD_ID` | NUMERIC | NOT NULL | The metadata of a resource from the installed version. This metadata will be compared with the metadata of same the resource from other version. |
| `OTHER_VER_RES_MD_ID` | NUMERIC | NOT NULL | The metadata of a resource from other version. This metadata will be compared with the metadata of same the resource from installed version. |
| `HAS_BREAKING_CHANGE` | NUMERIC | NOT NULL | The flag that tells if there is a breaking change(s) between two versions. The breaking change could be in resource or its attributes. |
| `CREATED_DATE` | DATE | NOT NULL | Date the API version comparison record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date the API version comparison record was last updated. |
| `CREATED_BY` | NUMERIC | NOT NULL | User who created the API version comparison record. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User who last updated the API version comparison record. |

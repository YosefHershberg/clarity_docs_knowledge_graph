---
title: API_VERSIONS
type: db-table
table: API_VERSIONS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# API_VERSIONS

> [!info] Description
> This table stores the general version information of Rest API releases.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Primary key for the record. |
| `API_VERSION` | NVARCHAR | NOT NULL | The version number of the Rest API release. Always enter version with at least one decimal, for example, 1.0 |
| `CLARITY_VERSION_ID` | NVARCHAR | NOT NULL | Refrence to the corresponding Clairty verion. It's a BASE_RELEASE column in CMN_INSTALL_HISTORY table. |
| `IS_INSTALLED_VERSION` | NUMERIC | NOT NULL | Is this the Rest APO version that customer installed? |
| `IS_ACTIVE` | NUMERIC | NOT NULL | Is this actively Rest API version? The version is decomissioned if the value is zero. |
| `CREATED_DATE` | DATE | NOT NULL | Date the API version record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date the API version record was last updated. |
| `CREATED_BY` | NUMERIC | NOT NULL | User who created the API version record. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User who last updated the API version record. |

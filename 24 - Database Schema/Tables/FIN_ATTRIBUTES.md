---
title: FIN_ATTRIBUTES
type: db-table
table: FIN_ATTRIBUTES
columns: 13
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# FIN_ATTRIBUTES

> [!info] Description
> This table has details about all financial plan grouping attributes. The data is seeded and is used for internal purpose only.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `NAME` | NVARCHAR | NOT NULL | Name of the financial attribute. The name is used as attribute Label. |
| `CODE` | NVARCHAR | NOT NULL | Unique code to represent financial attribute. |
| `COLUMN_NAME` | NVARCHAR | NOT NULL | Column name used in tables where attribute is used. |
| `LOOKUP_CODE` | NVARCHAR | NOT NULL | Field indicating the lookup for a financial attribute. |
| `RATE_MATRIX` | INTEGER | NOT NULL | This field is currently not used. |
| `TRANSACTIONS` | INTEGER | NOT NULL | This field is currently not used. |
| `PLANNING` | INTEGER | NOT NULL | A Boolean value to indicate if the attribute is used as grouping attribute in financial planning. |
| `IS_ACTIVE` | INTEGER | NOT NULL | The value should always be 1. This has been added for extensibility. |
| `CREATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that created the record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was last modified. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that last modified the record. |

---
title: FIN_BURDEN_CLASSES
type: db-table
table: FIN_BURDEN_CLASSES
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# FIN_BURDEN_CLASSES

> [!info] Description
> This table stores the burdening class information.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `NAME` | NVARCHAR | NOT NULL | The name of burdening class. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | Detailed description about the burdening class representing the record. |
| `BURDENING_TYPE` | NVARCHAR | NOT NULL | Indicates the type of burdening class. Possible values are COM, FEE, GA , OVERHEAD. |
| `ACTIVE` | INTEGER | NOT NULL | Boolean value indicating if burdening class is active. Only active classes can be used while creating burdening details. |
| `IS_SYSTEM` | INTEGER | NOT NULL | The value 1 indicates that burdening class is seeded and 0 means its user defined. |
| `CREATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that created the record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was last modified. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that last modified the record. |

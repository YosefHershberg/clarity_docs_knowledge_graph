---
title: FIN_BURDEN_DETAILS
type: db-table
table: FIN_BURDEN_DETAILS
columns: 19
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# FIN_BURDEN_DETAILS

> [!info] Description
> This table stores the burdening matrix detail rows.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `BASE_OBJECT_ID` | NUMERIC | NOT NULL | This column represents the ID of base object associated with this matrix detail. The name is generic for extensibility. Currently it points to investment ID only. |
| `BASE_OBJECT_TYPE` | NVARCHAR | NOT NULL | This column represents the type of base object associated with this matrix detail. The column exists for extensibility. Currently only possible value is INVESTMENT. |
| `OBJECT_ID` | NUMERIC | NOT NULL | This column represents the ID of object associated with this matrix detail. Possible values are ASSN_BAC and ASSN_ACWP. |
| `OBJECT_TYPE` | NVARCHAR | NOT NULL | This column represents the type of object associated with this matrix detail. The column exists for extensibility. Currently ASSIGNMENT is possible value. |
| `BURDENING_CLASS` | NUMERIC | NOT NULL | This column stores burdening class associated with this burdening level detail. |
| `BURDENING_TYPE` | NVARCHAR | NOT NULL | This column stores burdening type which is derived from burdening class |
| `ROLE` | NUMERIC | NOT NULL | This column represents the role ID associated with this record. |
| `ESCAL_BURDEN_COST` | BINARY | NULL | Represents the time scaled value for escalated burden cost. |
| `DEFAULT_BURDEN_COST` | BINARY | NULL | Represents the time scaled value for default burden cost. |
| `ESCAL_BURDEN_SUM` | NUMERIC | NULL | This column represents the total escalated burden sum for this burdening detail. |
| `DEFAULT_BURDEN_SUM` | NUMERIC | NULL | This column represents the total default burden sum for this burdening detail. |
| `MATRIX_ID` | NUMERIC | NOT NULL | This column represents the ID of burdening matrix for this burdening detail. |
| `CREATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that created the record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was last modified. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that last modified the record. |
| `ODF_SS_DEFAULT_BURDEN_COST` | NUMERIC | NULL |  |
| `ODF_SS_ESCAL_BURDEN_COST` | NUMERIC | NULL |  |

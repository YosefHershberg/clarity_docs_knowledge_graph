---
title: FIN_BURDEN_LEVELS
type: db-table
table: FIN_BURDEN_LEVELS
columns: 18
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# FIN_BURDEN_LEVELS

> [!info] Description
> This table stores details about levels for a burdening matrix.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `MATRIX_ID` | NUMERIC | NOT NULL | This column represents the ID of burdening matrix for this burdening level. |
| `BURDENING_LEVEL` | NUMERIC | NOT NULL | Level number for this record. |
| `BURDENING_CLASS` | NUMERIC | NOT NULL | This column represents the burdening class associated with the burdening level. |
| `ROLE` | NUMERIC | NULL | This column represents the role ID associated with this record. |
| `BURDENING_FORMULA` | NVARCHAR | NOT NULL | This column represents the formula used for burdening calculations. The value can be Simple or compound. |
| `APPLIED_AT` | NUMERIC | NULL | This column represents the level on which burden is applied. |
| `RATE_TYPE` | NVARCHAR | NOT NULL | This column represents the type of burden. This can be defined as FLAT or PERCENTAGE. |
| `FLAT_AMOUNT` | NUMERIC | NULL | This columns represents the flat burden amount. Based on rate_type, either FLAT_AMOUNT or PERCENTAGE will be applied. |
| `PERCENTAGE` | NUMERIC | NULL | This column represents the percentage burden that will be applied. |
| `ESCALATION_AMOUNT` | BINARY | NULL |  |
| `ESCALATION_PERCENT` | BINARY | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that created the record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was last modified. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that last modified the record. |
| `ODF_SS_ESCALATION_PERCENT` | NUMERIC | NULL |  |
| `ODF_SS_ESCALATION_AMOUNT` | NUMERIC | NULL |  |

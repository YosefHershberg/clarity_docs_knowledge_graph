---
title: FIN_BURDEN_ASSOCIATIONS
type: db-table
table: FIN_BURDEN_ASSOCIATIONS
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# FIN_BURDEN_ASSOCIATIONS

> [!info] Description
> This table stores investment and burdening matrix association.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `INV_ID` | NUMERIC | NOT NULL | The ID of investment for which burdening matrix association is stored. |
| `MATRIX_TYPE` | NVARCHAR | NOT NULL | This has been added for extensibility. The value is BURDENING for burdening matrix. |
| `TRANSACTION_TYPE` | NUMERIC | NOT NULL | This is numeric value representing one of labor, material, equipment and expense. |
| `COST_MATRIX_ID` | NUMERIC | NULL | The ID of matrix associated with the investment for particular transaction type. This is nullable. |
| `EXCHANGE_RATE_TYPE` | NUMERIC | NULL | This indicates exchange rate type used for currency conversion for a particular association. Can be AVERAGE, SPOT or FIXED. |
| `CREATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that created the record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was last modified. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that last modified the record. |

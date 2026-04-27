---
title: PPA_MATRIXVALUES
type: db-table
table: PPA_MATRIXVALUES
columns: 23
audience: dev
domain: development
canonical: true
erds:
  - Matrix Management
fk_targets:
  - CMN_SEC_USERS
  - COSTPLUS
  - PPA_MATRIX
fk_sources:
  - FIN_POSTED_TXNS
tags:
  - dev
  - schema
  - table
  - erd/matrix-management
---

# PPA_MATRIXVALUES

> [!info] Description
> This table stores the matrix values as defined by users for every matrix.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `MATRIXROWKEY` | NUMERIC | NULL | Unique identifier for the matrix row. |
| `MATRIXKEY` | NUMERIC | NOT NULL | The matrix for which the row exists. This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `FROMDATE` | DATE | NOT NULL | The date from which the matrix row rules are applied or validated. |
| `TODATE` | DATE | NOT NULL | The date until which the matrix row rules are applied or validated. |
| `VALUE1` | NVARCHAR | NULL | The value for the first column if any. |
| `VALUE2` | NVARCHAR | NULL | The value for the second column if any. |
| `VALUE3` | NVARCHAR | NULL | The value for the third column if any. |
| `VALUE4` | NVARCHAR | NULL | The value for the fourth column if any. |
| `VALUE5` | NVARCHAR | NULL | The value for the fifth column if any. |
| `VALUE6` | NVARCHAR | NULL | The value for the sixth column if any. |
| `VALUE7` | NVARCHAR | NULL | The value for the seventh column if any. |
| `VALUE8` | NVARCHAR | NULL | The value for the eighth column if any. |
| `VALUE9` | NVARCHAR | NULL | The value for the ninth column if any. |
| `VALUE10` | NVARCHAR | NULL | The value for the tenth column if any. |
| `NUMVAL1` | NUMERIC | NULL | Represents the rate column for the matrix row. |
| `NUMVAL2` | NUMERIC | NULL | Represents the standard cost column for the row. |
| `NUMVAL3` | NUMERIC | NULL | Represents the actual cost column for the row. |
| `STRVAL1` | NVARCHAR | NULL | The cost plus code column for the row. This refers to [[COSTPLUS]].COSTPLUSCODE. |
| `MATRIX_CURRENCY_CODE` | NVARCHAR | NULL | The currency code for this row. This refers to CMN_CURRENCIES.CURRENCYCODE. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column indicates the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column indicates the resource ([[CMN_SEC_USERS]].ID) who last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `MATRIXKEY` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `STRVAL1` | [[COSTPLUS]].`COSTPLUSCODE` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[FIN_POSTED_TXNS]] | `COST_MATRIXVALUES_ID` | `MATRIXROWKEY` |
| [[FIN_POSTED_TXNS]] | `RATE_MATRIXVALUES_ID` | `MATRIXROWKEY` |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[COSTPLUS]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIX]], [[TAXCODE]], [[TAXCODE_METHOD]], [[TAX_AUTHORITY]], [[TAX_METHOD]]

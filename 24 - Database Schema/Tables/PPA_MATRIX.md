---
title: PPA_MATRIX
type: db-table
table: PPA_MATRIX
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Matrix Management
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - ENTITY
  - FIN_POSTED_TXNS
  - NAMEOPTIONS
  - PAC_MNT_MATRIX_PERMISIONS
  - PPA_MATRIXCOLDEF
  - PPA_MATRIXVALUES
tags:
  - dev
  - schema
  - table
  - erd/matrix-management
---

# PPA_MATRIX

> [!info] Description
> This table stores matrix information.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `MATRIXKEY` | NUMERIC | NULL | A unique identifier for the matrix. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | The description for the matrix. |
| `MATRIXTYPE` | NVARCHAR | NOT NULL | Identifies if this is a cost or rate matrix, administration matrix, or a tax matrix. Values are: - 0 = R - 1 = A - 2 = T |
| `COMMENTS` | NVARCHAR | NULL | Any comments. |
| `ACCESSCODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `DEFAULT_CURRENCY_CODE` | NVARCHAR | NOT NULL | The default currency code for the matrix. This refers to CMN_CURRENCIES.CURRENCY_CODE. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column defines the ID of the resource ([[CMN_SEC_USERS]].ID) who last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[ENTITY]] | `TRANS_RATE_SOURCE_LABOR` | `MATRIXKEY` |
| [[ENTITY]] | `TRANS_COST_SOURCE_LABOR` | `MATRIXKEY` |
| [[ENTITY]] | `TRANS_RATE_SOURCE_MATERIALS` | `MATRIXKEY` |
| [[ENTITY]] | `TRANS_RATE_SOURCE_EQUIPMENT` | `MATRIXKEY` |
| [[ENTITY]] | `TRANS_RATE_SOURCE_EXPENSE` | `MATRIXKEY` |
| [[FIN_POSTED_TXNS]] | `COST_MATRIX_ID` | `MATRIXKEY` |
| [[FIN_POSTED_TXNS]] | `RATE_MATRIX_ID` | `MATRIXKEY` |
| [[NAMEOPTIONS]] | `TRANSRATESRCLBR` | `MATRIXKEY` |
| [[NAMEOPTIONS]] | `TRANSCOSTSRCLBR` | `MATRIXKEY` |
| [[NAMEOPTIONS]] | `TRANSRATESRCMTL` | `MATRIXKEY` |
| [[NAMEOPTIONS]] | `TRANSCOSTSRCMTL` | `MATRIXKEY` |
| [[NAMEOPTIONS]] | `TRANSRATELOCMTL` | `MATRIXKEY` |
| [[NAMEOPTIONS]] | `TRANSRATESRCEQUIP` | `MATRIXKEY` |
| [[NAMEOPTIONS]] | `TRANSCOSTSRCEQUIP` | `MATRIXKEY` |
| [[NAMEOPTIONS]] | `TRANSRATESRCEXPENSE` | `MATRIXKEY` |
| [[NAMEOPTIONS]] | `TRANSCOSTSRCEXPENSE` | `MATRIXKEY` |
| [[PAC_MNT_MATRIX_PERMISIONS]] | `MATRIX_ID` | `MATRIXKEY` |
| [[PPA_MATRIXCOLDEF]] | `MATRIXKEY` | `MATRIXKEY` |
| [[PPA_MATRIXVALUES]] | `MATRIXKEY` | `MATRIXKEY` |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[COSTPLUS]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIXVALUES]], [[TAXCODE]], [[TAXCODE_METHOD]], [[TAX_AUTHORITY]], [[TAX_METHOD]]

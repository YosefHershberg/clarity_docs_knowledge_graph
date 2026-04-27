---
title: COSTPLUS
type: db-table
table: COSTPLUS
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Matrix Management
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - FIN_POSTED_TXNS
  - NAMEOPTIONS
  - PPA_MATRIXVALUES
tags:
  - dev
  - schema
  - table
  - erd/matrix-management
---

# COSTPLUS

> [!info] Description
> This table stores the cost plus summary.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `COSTPLUSCODE` | NVARCHAR | NOT NULL | This column indicates the cost plus code. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | This column indicates the description of cost plus. |
| `SHORTDESC` | NVARCHAR | NOT NULL | This column indicates the short description of the cost plus code. |
| `APPLYTOACTUALSTDCOST` | NVARCHAR | NOT NULL | Indicates if the cost plus should be applied to actual or standard cost. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[FIN_POSTED_TXNS]] | `COSTRULE_CODE` | `COSTPLUSCODE` |
| [[NAMEOPTIONS]] | `TRAVCOSTCODE` | `COSTPLUSCODE` |
| [[NAMEOPTIONS]] | `MILECOSTCODE` | `COSTPLUSCODE` |
| [[NAMEOPTIONS]] | `DFLTBUDGETLEVELLBR` | `COSTPLUSCODE` |
| [[PPA_MATRIXVALUES]] | `STRVAL1` | `COSTPLUSCODE` |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIXVALUES]], [[PPA_MATRIX]], [[TAXCODE]], [[TAXCODE_METHOD]], [[TAX_AUTHORITY]], [[TAX_METHOD]]

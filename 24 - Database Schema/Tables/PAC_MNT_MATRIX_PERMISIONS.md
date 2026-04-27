---
title: PAC_MNT_MATRIX_PERMISIONS
type: db-table
table: PAC_MNT_MATRIX_PERMISIONS
columns: 7
audience: dev
domain: development
canonical: true
erds:
  - Matrix Management
fk_targets:
  - CMN_SEC_USERS
  - PPA_MATRIX
tags:
  - dev
  - schema
  - table
  - erd/matrix-management
---

# PAC_MNT_MATRIX_PERMISIONS

> [!info] Description
> This table stores the users who have permission to edit this matrix. This table is populated when access is restricted.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `MATRIX_ID` | NUMERIC | NOT NULL | This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `USER_ID` | NUMERIC | NOT NULL | The user who has permission. This refers to [[CMN_SEC_USERS]].ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `MATRIX_ID` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `USER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[COSTPLUS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIXVALUES]], [[PPA_MATRIX]], [[TAXCODE]], [[TAXCODE_METHOD]], [[TAX_AUTHORITY]], [[TAX_METHOD]]

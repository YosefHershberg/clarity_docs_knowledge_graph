---
title: TAXCODE_METHOD
type: db-table
table: TAXCODE_METHOD
columns: 4
audience: dev
domain: development
canonical: true
erds:
  - Matrix Management
tags:
  - dev
  - schema
  - table
  - erd/matrix-management
---

# TAXCODE_METHOD

> [!info] Description
> This table stores the association between the tax code and tax methods.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TAXCODE` | NVARCHAR | NOT NULL | This column refers to the tax code (TAXCODE). |
| `TAX_METHOD_CODE` | NVARCHAR | NOT NULL | This column refers to the code (TAXCODE_METHOD). |
| `USERID` | NVARCHAR | NOT NULL | This column refers to the user ID (CMN_SEC_USERS). |
| `ENTRYDATE` | DATE | NOT NULL |  |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[COSTPLUS]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIXVALUES]], [[PPA_MATRIX]], [[TAXCODE]], [[TAX_AUTHORITY]], [[TAX_METHOD]]

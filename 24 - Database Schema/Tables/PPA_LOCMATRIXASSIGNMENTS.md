---
title: PPA_LOCMATRIXASSIGNMENTS
type: db-table
table: PPA_LOCMATRIXASSIGNMENTS
columns: 7
audience: dev
domain: development
canonical: true
erds:
  - Matrix Management
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/matrix-management
---

# PPA_LOCMATRIXASSIGNMENTS

> [!info] Description
> This table stores the matrix location assignments. It stores information about restricting access to a matrix based on the resource's location.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `LOCATIONID` | NVARCHAR | NOT NULL | The ID of the location this row applies to. Only users with this financial location can view the matrix. |
| `MATRIXKEY` | NUMERIC | NOT NULL | The rate matrix key. This refers to the PPA_MATRIX table. |
| `MATRIXTYPE` | NVARCHAR | NOT NULL | The matrix type. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column indicates the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column defines the ID of the resource ([[CMN_SEC_USERS]].ID) who last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[COSTPLUS]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIXVALUES]], [[PPA_MATRIX]], [[TAXCODE]], [[TAXCODE_METHOD]], [[TAX_AUTHORITY]], [[TAX_METHOD]]

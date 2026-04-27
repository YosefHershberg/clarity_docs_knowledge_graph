---
title: PPA_MATRIXCOLDEF
type: db-table
table: PPA_MATRIXCOLDEF
columns: 12
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

# PPA_MATRIXCOLDEF

> [!info] Description
> This table stores the individual matrix column definitions.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `MATRIXCOLDEFKEY` | NUMERIC | NULL | A unique identifier. |
| `MATRIXKEY` | NUMERIC | NOT NULL | The matrix for which the definition exists. This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `COLUMNNO` | NUMERIC | NOT NULL | The position of the selected column in the matrix as arranged by the user. |
| `COLUMNNAME` | NVARCHAR | NOT NULL | The name of this column. Each column in the matrix represents a different column in a table. |
| `FIELDNAME` | NVARCHAR | NOT NULL | An alias given by the user for this column name. |
| `COMPARECOL` | INTEGER | NOT NULL | Indicates whether this column is compared when performing the rate matrix match. |
| `COMPAREOP` | NUMERIC | NOT NULL | The type of operator used during the comparison. |
| `DATATYPE` | NUMERIC | NOT NULL | The data type of the column (i.e., date, string, number, and so on.) |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column indicates the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column indicates the resource ([[CMN_SEC_USERS]].ID) who last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `MATRIXKEY` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[COSTPLUS]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXVALUES]], [[PPA_MATRIX]], [[TAXCODE]], [[TAXCODE_METHOD]], [[TAX_AUTHORITY]], [[TAX_METHOD]]

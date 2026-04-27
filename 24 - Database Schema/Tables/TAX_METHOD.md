---
title: TAX_METHOD
type: db-table
table: TAX_METHOD
columns: 18
audience: dev
domain: development
canonical: true
erds:
  - Matrix Management
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - PAC_BIL_INVOICE_TRN_DETAILS
tags:
  - dev
  - schema
  - table
  - erd/matrix-management
---

# TAX_METHOD

> [!info] Description
> This table stores the tax method information for matrices.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code for this tax method. |
| `TAX_AUTHORITY_CODE` | NVARCHAR | NULL | This column refers to the tax authority code in the TAX_AUTHORITY table. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | This column refers to the description of the tax method. |
| `AMOUNT` | NUMERIC | NOT NULL | This column refers to the percentage to apply for this tax method. |
| `ACTIVE` | INTEGER | NOT NULL | This column indicates whether the tax method is active. Values are: - 1 = Active - 0 = Inactive |
| `FROM_DATE` | DATE | NOT NULL | This column refers to the start date from which this tax method is valid. |
| `TO_DATE` | DATE | NOT NULL | This column refers to the end date to which this method is valid. |
| `NOTES` | NVARCHAR | NULL | This column refers to the notes for this tax method. |
| `USERID` | NVARCHAR | NOT NULL | This column refers to the user ID in the CMN_SEC_USERS table. |
| `ENTRYDATE` | DATE | NOT NULL | This column refers to the date the row was created. |
| `TAXTYPE` | NVARCHAR | NOT NULL | This column refers to the tax type. It is always of type TAX. |
| `ENTITY` | NVARCHAR | NULL | This column refers to the entity ID to which row applies. This refers to the entity in the ENTITY table. |
| `REGISTRANT_ID` | NVARCHAR | NULL | This column refers to the registrant ID entered by the user. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PAC_BIL_INVOICE_TRN_DETAILS]] | `TAX_METHOD_CODE` | `CODE` |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[COSTPLUS]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIXVALUES]], [[PPA_MATRIX]], [[TAXCODE]], [[TAXCODE_METHOD]], [[TAX_AUTHORITY]]

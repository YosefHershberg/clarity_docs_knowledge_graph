---
title: TAXCODE
type: db-table
table: TAXCODE
columns: 14
audience: dev
domain: development
canonical: true
erds:
  - Matrix Management
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - BILLINGSCHEDULE
  - PAC_BIL_INVOICE_TRN_DETAILS
  - PPA_INVOICEDETAILS
tags:
  - dev
  - schema
  - table
  - erd/matrix-management
---

# TAXCODE

> [!info] Description
> This table stores tax code details used in the matrix.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in this table. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code for this row. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | This column refers to the description. |
| `NOTES` | NVARCHAR | NULL | This column refers to the notes for the tax code. |
| `USERID` | NVARCHAR | NOT NULL | This column refers to the user ID ([[CMN_SEC_USERS]].ID). |
| `ENTRYDATE` | DATE | NOT NULL | This column refers to the date the entry was created. |
| `LASTUPDATE_DATE` | DATE | NOT NULL | This column refers to the date this row was last updated. |
| `ACTIVE` | INTEGER | NOT NULL | This column indicates whether the tax code is active. Values are: - 0 = Inactive - 1 = Active |
| `APPLY_TO_TAXCODE` | NVARCHAR | NULL | This column indicates whether the tax code to apply to this row. |
| `DEBIT_ACCOUNT_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `CREDIT_ACCOUNT_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `TAXTYPE` | NVARCHAR | NOT NULL | This column refers to the tax type. Values are: - TAX = Tax codes - ADM = Cost plus codes |
| `ENTITY` | NVARCHAR | NULL | This column refers to the entity (ENTITY). |
| `LASTUPDTDBY_RESOURCE_CODE` | NVARCHAR | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USERID` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[BILLINGSCHEDULE]] | `TAXCODE` | `CODE` |
| [[BILLINGSCHEDULE]] | `ADMINCODE` | `CODE` |
| [[PAC_BIL_INVOICE_TRN_DETAILS]] | `TAX_CODE` | `CODE` |
| [[PPA_INVOICEDETAILS]] | `TAXCODE` | `CODE` |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[COSTPLUS]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIXVALUES]], [[PPA_MATRIX]], [[TAXCODE_METHOD]], [[TAX_AUTHORITY]], [[TAX_METHOD]]

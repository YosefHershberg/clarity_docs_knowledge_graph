---
title: TAX_AUTHORITY
type: db-table
table: TAX_AUTHORITY
columns: 24
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

# TAX_AUTHORITY

> [!info] Description
> This table stores tax authority information.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in this table. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code for the tax authority. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | This column refers to the description. |
| `ADDRESS_1` | NVARCHAR | NULL | This column refers to line 1 of the address. |
| `ADDRESS_2` | NVARCHAR | NULL | This column refers to line 2 of the address. |
| `ADDRESS_3` | NVARCHAR | NULL | This column refers to line 3 of the address. |
| `CITY` | NVARCHAR | NULL | This column refers to the city. |
| `STATEPROV` | NVARCHAR | NULL | This column refers to the state or province. |
| `COUNTRYID` | NVARCHAR | NULL | This column refers to the country (CMN_COUNTRIES). |
| `ZIP` | NVARCHAR | NULL | This column refers to the zip code. |
| `PHONE` | NVARCHAR | NULL | This column refers to the phone number. |
| `FAX` | NVARCHAR | NULL | This column refers to the fax number. |
| `ATTENTION` | NVARCHAR | NULL | This column refers to the salutation used in the letter. |
| `ACTIVE` | INTEGER | NOT NULL | This column indicates whether the tax authority is active or inactive. Values are: - 0 = Inactive - 1 = Active |
| `USERID` | NVARCHAR | NOT NULL | This column refers to the [[CMN_SEC_USERS]].ID. |
| `ENTRYDATE` | DATE | NOT NULL | This column refers to the date the row was created. |
| `LASTUPDATE_DATE` | DATE | NOT NULL | This column refers to the date this row was last updated. |
| `NOTES` | NVARCHAR | NULL | This column refers to the comments for the tax authority. |
| `LASTUPDTDBY_RESOURCE_CODE` | NVARCHAR | NOT NULL | This column refers to the resource code in the PAC_MNT_RESOURCES table of the resource who last updated this row. |
| `VENDOR_CODE` | NVARCHAR | NULL | This column refers to the vendor_code in the APMASTER table. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USERID` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[COSTPLUSRULES]], [[COSTPLUS]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIXVALUES]], [[PPA_MATRIX]], [[TAXCODE]], [[TAXCODE_METHOD]], [[TAX_METHOD]]

---
title: APMASTER
type: db-table
table: APMASTER
columns: 64
audience: dev
domain: development
canonical: true
erds:
  - Financial Administration
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/financial-administration
---

# APMASTER

> [!info] Description
> This table stores vendor information.

## Subject areas (ERDs)
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `VENDOR_CODE` | NVARCHAR | NOT NULL | This column refers to the vendor code. |
| `ADDRESS_NAME` | NVARCHAR | NOT NULL | This column refers to the name of the vendor. |
| `SHORT_NAME` | NVARCHAR | NULL | This column refers to the short name of the vendor. |
| `ADDR1` | NVARCHAR | NULL | This column refers to line 1 of the address. |
| `ADDR2` | NVARCHAR | NULL | This column refers to line 2 of the address. |
| `ADDR3` | NVARCHAR | NULL | This column refers to line 3 of the address. |
| `ADDR4` | NVARCHAR | NULL | This column refers to line 4 of the address. |
| `ADDR5` | NVARCHAR | NULL | This column refers to line 5 of the address. |
| `ADDR6` | NVARCHAR | NULL | This column refers to line 6 of the address. |
| `ADDR_SORT1` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ADDR_SORT2` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ADDR_SORT3` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ADDRESS_TYPE` | NUMERIC | NOT NULL | This column is deprecated and should no longer be used. |
| `STATUS_TYPE` | NUMERIC | NOT NULL | This column refers to the status. Values are: - 0 = Active - 1 = Inactive - 2 = No New Business |
| `ATTENTION_NAME` | NVARCHAR | NOT NULL | This column refers to the attention name. |
| `ATTENTION_PHONE` | NVARCHAR | NOT NULL | This column refers to the phone number of the attention person. |
| `CONTACT_NAME` | NVARCHAR | NOT NULL | This column refers to the contact name. |
| `CONTACT_PHONE` | NVARCHAR | NOT NULL | This column refers to the contact's phone number. |
| `TLX_TWX` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PHONE_1` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PHONE_2` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `TAX_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `TERMS_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `FOB_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `POSTING_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `LOCATION_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ORIG_ZONE_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `AFFILIATED_VEND_CODE` | NVARCHAR | NULL | This column indicates the affiliated vendor code. |
| `ALT_VENDOR_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `COMMENT_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `VEND_CLASS_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `BRANCH_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PAY_TO_HIST_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `ITEM_HIST_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `CREDIT_LIMIT_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `CREDIT_LIMIT` | FLOAT | NULL | This column is deprecated and should no longer be used. |
| `AGING_LIMIT_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `AGING_LIMIT` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `RESTOCK_CHG_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `RESTOCK_CHG` | FLOAT | NULL | This column is deprecated and should no longer be used. |
| `PRC_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `VEND_ACCT` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `TAX_ID_NUM` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `FLAG_1099` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `EXP_ACCT_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `AMT_MAX_CHECK` | FLOAT | NULL | This column is deprecated and should no longer be used. |
| `LEAD_TIME` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `COMMENT_` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `DOC_CTRL_NUM` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ONE_CHECK_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `DUP_VOUCHER_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `DUP_AMT_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `CODE_1099` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `USER_TRX_TYPE_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PAYMENT_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `COMPANY_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PAY_TO_COMPANY_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | This column refers to the external source ID (CMN_EXTERNAL_SOURCES.ID). |
| `EXTERNAL_ID` | NVARCHAR | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PROJCLASS]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

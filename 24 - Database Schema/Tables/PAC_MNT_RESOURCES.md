---
title: PAC_MNT_RESOURCES
type: db-table
table: PAC_MNT_RESOURCES
columns: 55
audience: dev
domain: development
canonical: true
erds:
  - Departments
  - Financial Administration
  - Financial Configuration
fk_targets:
  - CMN_SEC_USERS
  - PAC_FOS_RESOURCE_CLASS
  - TRANSCLASS
fk_sources:
  - BB_BILLINGRUN
  - BB_HSINVOICELAYOUT
  - BB_HSINVOICELIST
  - BB_SELECTIVEBILLING
  - DWH_TMP_FIN_TRANSACTION
  - FIN_POSTED_TXNS
  - FIN_TXNS
  - INVOICEHEADER
  - LOCATIONS
  - OLB_GENERATEINFO
  - PAC_BB_SELECTBILL_CONSINV
  - PC_BILLINGSESSION
  - PPA_BILLINGS
  - PPA_TRANSBILL
  - PPA_TRANSCONTROLAPINFO
  - PPA_TRANSWIPADJUST
  - PPA_WIPAPINFO
tags:
  - dev
  - schema
  - table
  - erd/departments
  - erd/financial-administration
  - erd/financial-configuration
---

# PAC_MNT_RESOURCES

> [!info] Description
> This table stores the financial properties of resources.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 09 - Finance]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Departments ERD]]
- [[_MOC - Financial Administration ERD]]
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `INITIALS` | NVARCHAR | NULL | The resource code for the resource. |
| `SSN` | NVARCHAR | NULL | The social security number. |
| `EMPLYTYPE` | NVARCHAR | NULL | The employee type code. |
| `EMPLYSTATUS` | NVARCHAR | NULL | The employee status code. |
| `LOCATIONID` | NVARCHAR | NULL | The location code. It is the home location. |
| `DEPARTCODE` | NVARCHAR | NULL | The department code. This is the home department. |
| `UNIONCODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PAYTYPE` | NVARCHAR | NULL | Specifies the pay type option. Values are: - S = Salary - H = Hourly |
| `STANDARDCOST` | NUMERIC | NULL | The standard cost of the employee. The transaction entry applies this cost to standard. |
| `ACTUALCOST` | NUMERIC | NULL | The actual cost of the employee. The transaction entry applies this cost to standard cost. |
| `CURRENTRATE` | NUMERIC | NULL | The rate for the employee. This is not maintained by the system. The rate is be matched during financial processing using rate matrix. |
| `PREVIOUSRATE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `BILLINGLEVEL` | NVARCHAR | NULL | The billing level code. This column is used with the employee class and location to obtain the billing. |
| `AVGHRS` | FLOAT | NULL | The average hours expected to work on a weekly basis. The column is used in reports for the resource that has no entry for all required values. |
| `TARGETBILLRATE` | NUMERIC | NULL | The target billing rate of the employee. |
| `TARGETPERCENTBILLABLE` | FLOAT | NULL | The target billing percentage of the employee. |
| `BURDENCODE` | NVARCHAR | NULL | Reserved for internal use only. |
| `APPLYBLABOR` | INTEGER | NULL | Reserved for internal use only. |
| `OVERHEADCODE` | NVARCHAR | NULL | Reserved for internal use only. |
| `APPLYOLABOR` | INTEGER | NULL | Reserved for internal use only. |
| `ACTIVE` | INTEGER | NULL | Set to 1 when financial properties of this employee row is active. This column limits zoom selections in the budget. |
| `NOTES` | NVARCHAR | NULL | Any notes. |
| `ACCESSLEVEL` | NVARCHAR | NULL | The access level assigned to this employee. |
| `ENCRYPTEDPASSWORD` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `OVERRIDERATE` | NVARCHAR | NULL | Indicates if the rate is overridden. This is used during labor transaction entry. |
| `SUPERVISOR` | INTEGER | NULL | Set to 1 when the employee is a manager. |
| `UDF3` | NVARCHAR | NULL | A 40-character column that contains information about the employee. |
| `UDF4` | NVARCHAR | NULL | A 40-character column that contains information about the employee. |
| `UDF1` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `UDF2` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `EMPLYOVERRIDERATE` | NVARCHAR | NULL | The employee override rate. |
| `ATEMULTITIME` | INTEGER | NULL | This column is deprecated and should no longer be used. |
| `EX_CURRENCY_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `EX_COUNTRY_CODE` | NVARCHAR | NULL | The country code of user. This is an extensity integration column. |
| `EX_USER_PASSWORD` | NVARCHAR | NULL | The password is used for integration. This is an extensity integration column. |
| `EX_CREDIT_CARD_NUMBER` | NVARCHAR | NULL | The default credit card number for the user. This is an extensity integration column. |
| `EX_CC_PROCESSOR_NAME` | NVARCHAR | NULL | The credit card processor name. This is an extensity integration column. |
| `EX_CC_PAYMENT_TYPE` | NVARCHAR | NULL | The credit card payment type. This is an extensity integration column. |
| `EX_SET_OF_BOOKS_NAME` | NVARCHAR | NULL | The extensity set of books. This is an extensity integration column. |
| `EX_REPORT_PERIOD_NAME` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `EX_WORK_SCHED_NAME` | NVARCHAR | NULL | This column is used to look up the user's work schedule name. This is an Extensity integration column. Example values include: - Bi-Weekly: A - Bi-Weekly: B - Bi-Weekly: C - Weekly - Monthly - Semi-Monthly |
| `EX_HOLIDAY_SCHEDULE_NAME` | NVARCHAR | NULL | This column is used to look up the user's work schedule ID. This is an extensity integration column. |
| `EX_TAX_LOCATION` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `EX_LABOR_STATUS_NAME` | NVARCHAR | NULL | Indicates whether the user's labor status is Exempt or Non-Exempt. This is an extensity integration column. |
| `REPORTSTO_RESOURCE_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `RESOURCE_CODE` | NVARCHAR | NULL | The employee resource code. |
| `VENDOR_CODE` | NVARCHAR | NULL | The vendor code from accounts payable (AP) module. This column is used if the employee is paid as a private contractor. This refers to APMASTER_VENDOR_CODE. |
| `TARGETBILLRATE_CC` | NVARCHAR | NULL | The target billing rate currency code. |
| `RESOURCE_CLASS` | NVARCHAR | NULL | The resource class assigned to the resource. This column refers to [[PAC_FOS_RESOURCE_CLASS]].RESOURCE_CLASS. This column can be NULL. The default value is TRUE. |
| `TRANSCLASS` | NVARCHAR | NULL | The classification of the transaction. This column refers to [[TRANSCLASS]].TRANSCLASS. The default value is TRUE. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the date and time this row was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RESOURCE_CLASS` | [[PAC_FOS_RESOURCE_CLASS]].`RESOURCE_CLASS` | |
| `TRANSCLASS` | [[TRANSCLASS]].`TRANSCLASS` | |
| `CREATED_DATE` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[BB_BILLINGRUN]] | `USERID` | `RESOURCE_CODE` |
| [[BB_HSINVOICELAYOUT]] | `USERID` | `RESOURCE_CODE` |
| [[BB_HSINVOICELIST]] | `USERID` | `RESOURCE_CODE` |
| [[BB_SELECTIVEBILLING]] | `USERID` | `RESOURCE_CODE` |
| [[DWH_TMP_FIN_TRANSACTION]] | `INCURRED_BY` | `RESOURCE_CODE` |
| [[FIN_POSTED_TXNS]] | `RESOURCE_ID` | `ID` |
| [[FIN_TXNS]] | `RESOURCE_ID` | `ID` |
| [[INVOICEHEADER]] | `RESOURCE_CODE` | `RESOURCE_CODE` |
| [[LOCATIONS]] | `MANAGER_RESOURCE_CODE` | `ID` |
| [[OLB_GENERATEINFO]] | `USERID` | `RESOURCE_CODE` |
| [[PAC_BB_SELECTBILL_CONSINV]] | `USERID` | `RESOURCE_CODE` |
| [[PC_BILLINGSESSION]] | `USERID` | `RESOURCE_CODE` |
| [[PPA_BILLINGS]] | `RESOURCE_CODE` | `RESOURCE_CODE` |
| [[PPA_TRANSBILL]] | `RESOURCE_CODE` | `RESOURE_CODE` |
| [[PPA_TRANSCONTROLAPINFO]] | `INCURRED_BY` | `RESOURCE_CODE` |
| [[PPA_TRANSWIPADJUST]] | `INCURRED_BY` | `RESOURCE_CODE` |
| [[PPA_WIPAPINFO]] | `INCURRED_BY` | `RESOURCE_CODE` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CLNTCLASS]], [[CLNTRESPONS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[DPT_KEYMETRICS]], [[DPT_SUBSCRIPTIONS]], [[ENTITY]], [[FIN_FINANCIALS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_PURGE_FINANCIAL_LIST]], [[PPA_WIP]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PROJCLASS]], [[PROJCNTRTS]], [[PROJREVISION]], [[PROJSTAFF]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

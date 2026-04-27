---
title: CLNTSUPP
type: db-table
table: CLNTSUPP
columns: 31
audience: dev
domain: development
canonical: true
erds:
  - Departments
  - Financial Administration
  - Financial Configuration
fk_targets:
  - CLNTCLASS
  - DEPARTMENTS
  - LOCATIONS
  - PROJCLASS
  - WIPCLASS
fk_sources:
  - BB_BILLTRACKING
  - BB_SELECTIVEBILLING
  - BILLINGSCHEDULE
  - INVOICEHEADER
  - OLB_BILLINGCHECKOUT
  - PAC_BB_SELECTBILL_CONSINV
  - PAC_BIL_DETAIL_SUMMARY
  - PC_BILLINGDETAILALLOCATIONS
  - PC_BILLINGSESSION
  - PPA_BILLINGS
  - PPA_TRANSBILL
tags:
  - dev
  - schema
  - table
  - erd/departments
  - erd/financial-administration
  - erd/financial-configuration
---

# CLNTSUPP

> [!info] Description
> This table stores the supplemental customer information. This information is used for financial processing.

## Subject areas (ERDs)
- [[_MOC - Departments ERD]]
- [[_MOC - Financial Administration ERD]]
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `LOCATIONID` | NVARCHAR | NOT NULL | The location code of the location who owns this client. This refers to [[LOCATIONS]].LOCATIONID. |
| `DEPARTCODE` | NVARCHAR | NULL | The department code of the department who owns this client. This refers to [[DEPARTMENTS]].DEPARTCODE. |
| `CLNTRATE` | NUMERIC | NULL | The client rate. This column is used in budget and transaction entry for projects associated with this client. |
| `WIPTYPE` | NVARCHAR | NULL | The classifier for the work in progress (WIP) type for this client. |
| `CLNTWIPCLASS` | NVARCHAR | NOT NULL | This column classifies the work in progress (WIP) for this client. This refers to [[WIPCLASS]].WIPCLASS. |
| `CLNTCLASS` | NVARCHAR | NOT NULL | This refers to [[CLNTCLASS]].CLNTCLASS. |
| `PROJCLASS` | NVARCHAR | NOT NULL | This column refers to [[PROJCLASS]].PROJCLASS. |
| `CLNTSIC` | NVARCHAR | NULL | The standard industry code for this client. |
| `OPENEDDATE` | DATE | NULL | The date and time this row was created. |
| `LOSTDATE` | DATE | NULL | The user entered date and time client was lost. |
| `INACTIVEDATE` | DATE | NULL | The date the client becomes inactive. This column is user entered. |
| `TRAVELZONE` | NVARCHAR | NULL | The travel zone code used for mileage calculation. |
| `TRAVELHOURS` | NUMERIC | NULL | Reserved for internal use only. The travel time from home office to client. It is used for travel billings. |
| `TRAVELMINS` | NUMERIC | NULL | Reserved for internal use only. It is the travel time from home office to client. |
| `BILLCYCLE` | NVARCHAR | NULL | The billing cycle. It is one of the following values: - 1 = Test Batch Cycle - 2 = Twice a month - 3 = End of month - 4 = Middle of month - 5 = Periodic - 6 = Weekly |
| `DIRECTIONS` | NVARCHAR | NULL | This column refers to the notes with directions to the client's site. |
| `NOTES` | NVARCHAR | NULL | This column refers to the client's notes. |
| `DEACTIVATEMILEAGE` | INTEGER | NOT NULL | This column refers to the client mileage activation. A value of 1 indicates that the mileage expense calculation is deactivated for the client. |
| `DEACTIVATETRAVEL` | INTEGER | NOT NULL | This column refers to the client's travel activation. A value of 1 indicates that the travel time billing calculation for the client is deactivated. |
| `UDF3` | NVARCHAR | NULL | This 40-character, free-form column refers to the information about the client. |
| `UDF4` | NVARCHAR | NULL | This 40 character, free-form column refers to the information about the client. |
| `UDF1` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `UDF2` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `CLNTCOST` | NUMERIC | NULL | This column refers to the cost established for this client. |
| `CLNTSTDCOST` | NUMERIC | NULL | This column refers to the standard cost established for this client. |
| `STATUS_TYPE` | NUMERIC | NULL | This column has a value of one of the following: - 1 = Active - 2 = Inactive - 3 = No new business |
| `EMAILADDRESS` | NVARCHAR | NULL | This column refers to the email address for the customer. |
| `SRM_ID` | NUMERIC | NULL | The ID for the master SRM_COMPANIES row. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | This column refers to the unique company code. The code of identifier defined for the client. |
| `COMPANY_NAME` | NVARCHAR | NULL | This column refers to the long description of the client. |
| `INVOICE_TEMPLATE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `LOCATIONID` | [[LOCATIONS]].`LOCATIONID` | |
| `DEPARTCODE` | [[DEPARTMENTS]].`DEPARTCODE` | |
| `CLNTWIPCLASS` | [[WIPCLASS]].`WIPCLASS` | |
| `CLNTCLASS` | [[CLNTCLASS]].`CLNTCLASS` | |
| `PROJCLASS` | [[PROJCLASS]].`PROJCLASS` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[BB_BILLTRACKING]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[BB_SELECTIVEBILLING]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[BILLINGSCHEDULE]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[INVOICEHEADER]] | `BILL_TO_COMPANY_CODE` | `COMPANY_CODE` |
| [[INVOICEHEADER]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[OLB_BILLINGCHECKOUT]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[PAC_BB_SELECTBILL_CONSINV]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[PAC_BIL_DETAIL_SUMMARY]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[PC_BILLINGDETAILALLOCATIONS]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[PC_BILLINGSESSION]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[PPA_BILLINGS]] | `COMPANY_CODE` | `COMPANY_CODE` |
| [[PPA_TRANSBILL]] | `COMPANY_CODE` | `COMPANY_CODE` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CLNTCLASS]], [[CLNTRESPONS]], [[DEPARTMENTS]], [[DPT_KEYMETRICS]], [[DPT_SUBSCRIPTIONS]], [[ENTITY]], [[FIN_FINANCIALS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PPA_WIP]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PROJCLASS]], [[PROJCNTRTS]], [[PROJREVISION]], [[PROJSTAFF]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

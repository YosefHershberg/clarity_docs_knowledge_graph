---
title: SRM_COMPANIES
type: db-table
table: SRM_COMPANIES
columns: 12
audience: dev
domain: development
canonical: true
erds:
  - Document Manager
  - Financial Configuration
  - Links and Notes
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - ARMASTER
  - CLNTRESPONS
  - NBI_RESOURCE_CURRENT_FACTS
  - NBI_RT_FACTS
tags:
  - dev
  - schema
  - table
  - erd/document-manager
  - erd/financial-configuration
  - erd/links-and-notes
---

# SRM_COMPANIES

> [!info] Description
> This table stores the master companies. A row is created in this table when a new company is added.

## Subject areas (ERDs)
- [[_MOC - Document Manager ERD]]
- [[_MOC - Financial Configuration ERD]]
- [[_MOC - Links and Notes ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `COMPANY_NAME` | NVARCHAR | NOT NULL | User-entered when creating a company. It can be modified later. |
| `COMPANY_ID` | NVARCHAR | NOT NULL | User-entered when creating a company. It cannot be modified after creation. |
| `TYPE` | NUMERIC | NOT NULL | Type of company. Values are: - 412 = Competitor - 410 = Customer - 309 = Department - 1809 = Other - 414 = Project partner - 1808 = Prospect - 413 = Resource partner - 308 = Trusted client - 411 = Vendor |
| `STATUS` | NUMERIC | NULL | Indicates if a company is active and can be used. Values are: - Active - Inactive |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `IS_EXTERNAL` | NUMERIC | NOT NULL | Indicates if the company is external to the organization. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | The XML Open Gateway external source identifier. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The XML Open Gateway external ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[ARMASTER]] | `SRM_ID` | `ID` |
| [[CLNTRESPONS]] | `COMPANY_CODE` | `COMPANY_ID` |
| [[NBI_RESOURCE_CURRENT_FACTS]] | `RESOURCE_COMPANY_ID` | `ID` |
| [[NBI_RT_FACTS]] | `RESOURCE_COMPANY_ID` | `COMPANY_ID` |

## Related tables (same subject area)

[[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CLB_DMS_FILES]], [[CLB_DMS_FILE_STORE]], [[CLB_DMS_FLAT_HIERARCHY]], [[CLB_DMS_FOLDERS]], [[CLB_DMS_HISTORIES]], [[CLB_DMS_VERSIONS]], [[CLNTCLASS]], [[CLNTRESPONS]], [[CLNTSUPP]], [[CMN_SEC_GROUPS]], [[CMN_SEC_USERS]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PRLINK]], [[PRNOTE]], [[PROJCNTRTS]], [[PROJREVISION]], [[PROJSTAFF]], [[PRTASK]], [[PRTIMEENTRY]], [[PRTIMESHEET]], [[SRM_CONTACTS]], [[SRM_PROJECTS]], [[SRM_RESOURCES]], [[XDM_TSK_ITEM_ASSOCIATION]]

---
title: CLNTRESPONS
type: db-table
table: CLNTRESPONS
columns: 2
audience: dev
domain: development
canonical: true
erds:
  - Financial Configuration
fk_targets:
  - SRM_COMPANIES
tags:
  - dev
  - schema
  - table
  - erd/financial-configuration
---

# CLNTRESPONS

> [!info] Description
> This table stores the authorized resources for a company. It has a combination of company and resource codes.

## Subject areas (ERDs)
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | The company ID. This refers to [[SRM_COMPANIES]].COMPANY_ID. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `COMPANY_CODE` | [[SRM_COMPANIES]].`COMPANY_ID` | |

## Related tables (same subject area)

[[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CLNTCLASS]], [[CLNTSUPP]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PROJCNTRTS]], [[PROJREVISION]], [[PROJSTAFF]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

---
title: PROJSTAFF
type: db-table
table: PROJSTAFF
columns: 11
audience: dev
domain: development
canonical: true
erds:
  - Financial Configuration
tags:
  - dev
  - schema
  - table
  - erd/financial-configuration
---

# PROJSTAFF

> [!info] Description
> This table is deprecated and should no longer be used.

## Subject areas (ERDs)
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROJECTACCESS` | INTEGER | NOT NULL | This column indicates if the employee has access to the project. Values: - 0 = No - 1 = Yes |
| `PROJECTAPPROVAL` | INTEGER | NOT NULL | This column indicates if the employee approved the project. Values: - 0 = No - 1 = Yes |
| `BILLINGACCESS` | INTEGER | NOT NULL | Indicates if the employee has billing access for the project. Values are: - 0 = No - 1 = Yes |
| `BILLINGAPPROVAL` | INTEGER | NOT NULL | Indicates if the employee has billing approval rights for the project. - 0 = No - 1 = Yes |
| `PROJECTTOGO` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `INDIVIDUALTOGO` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | The client code. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project identifier. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL | The employee code. |
| `FORECASTACCESS` | INTEGER | NOT NULL | Indicates if this row has forecast access rights. |
| `FORECASTAPPROVAL` | INTEGER | NOT NULL |  |

## Related tables (same subject area)

[[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CLNTCLASS]], [[CLNTRESPONS]], [[CLNTSUPP]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PROJCNTRTS]], [[PROJREVISION]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

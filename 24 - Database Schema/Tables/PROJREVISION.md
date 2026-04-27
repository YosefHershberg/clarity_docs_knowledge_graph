---
title: PROJREVISION
type: db-table
table: PROJREVISION
columns: 25
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

# PROJREVISION

> [!info] Description
> This table stores the revision history of projects.

## Subject areas (ERDs)
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `CHANGEORDER` | NVARCHAR | NULL | Null or the change order code. |
| `PROJREVISIONID` | NUMERIC | NOT NULL | Null or the project revision code. |
| `BUDGETREVISION` | INTEGER | NOT NULL | Indicates if the budget was revised with this revision. Values are: - 0 = No - 1 = Yes |
| `DATESREVISION` | INTEGER | NOT NULL | Indicates if the dates were changed with this revision. Values are: - 0 = No - 1 = Yes |
| `CURRENTTARGETEDSTARTDATE` | DATE | NULL | If the date revision is active, this column indicates the current target start date for the revision. |
| `PREVIOUSTARGETEDSTARTDATE` | DATE | NULL | If the date revision is active, the previous target start date for the revision. |
| `ACTUALSTARTDATE` | DATE | NULL | The start date for the revision. |
| `CURRENTTARGETEDCOMPLDATE` | DATE | NULL | If the date revision is active, the current target completion date for the revision. |
| `PREVIOUSTARGETEDCOMPLDATE` | DATE | NULL | If the date revision is active, the previous target completion date for the revision. |
| `ACTUALCOMPLETIONDATE` | DATE | NULL | The completion date for the revision. |
| `INPROGRESS` | INTEGER | NOT NULL | Indicates if the revision is in progress. Values are: - 0 = No (does not exist) - 1 = Yes |
| `AWAITINGAPPROVAL` | INTEGER | NOT NULL | Indicates whether the revision waiting for approval. Values are: - 0 = No - 1 = Yes |
| `APPROVED` | INTEGER | NOT NULL | Indicates if the revision was approved. Values are: - 0 = No (initial setting) - 1 = Yes |
| `REVISIONDATETIME` | DATE | NULL | The date and time the revision was created. |
| `NEEDAPPROVALDATETIME` | DATE | NULL | The date and time the revision was submitted for approval. |
| `APPROVEDDATETIME` | DATE | NULL | The date and time the revision was approved. |
| `NOTES` | NVARCHAR | NULL | Any notes about the revision. |
| `COSTPLUS` | INTEGER | NOT NULL | The budgeting is done using cost with a markup. |
| `RATEMATRIX` | INTEGER | NOT NULL | Indicates that the budgeting and transaction entry will retrieve the rates from the rate matrix. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | The client code. |
| `MASTER_PROJECT_CODE` | NVARCHAR | NOT NULL | The project code. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project code. |
| `APPROVEDBY_RESOURCE_CODE` | NVARCHAR | NULL | The resource code of the user who approved the revision. |
| `AWAITAPPRVL_RESOURCE_CODE` | NVARCHAR | NULL | The resource code of the user who submitted the project revision for approval. |
| `RESOURCE_CODE` | NVARCHAR | NULL |  |

## Related tables (same subject area)

[[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CLNTCLASS]], [[CLNTRESPONS]], [[CLNTSUPP]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PROJCNTRTS]], [[PROJSTAFF]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

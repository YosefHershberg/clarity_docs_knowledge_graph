---
title: OLB_BILLINGCHECKOUT
type: db-table
table: OLB_BILLINGCHECKOUT
columns: 7
audience: dev
domain: development
canonical: true
fk_targets:
  - CLNTSUPP
  - PAC_MNT_PROJECTS
  - SRM_PROJECTS
tags:
  - dev
  - schema
  - table
---

# OLB_BILLINGCHECKOUT

> [!info] Description
> This table stores information on project locks during billing.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `USERID` | NVARCHAR | NOT NULL | This refers to PAC_MNT_RESOURCESRESOURCE_CODE . |
| `ACTIONID` | NVARCHAR | NOT NULL | This column refers to the internal column whose value is generated for traceability purposes. |
| `ACTIONDATE` | DATE | NOT NULL | The internal column that refers to the date when the project is locked for billing. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | This refers to [[CLNTSUPP]].COMPANY_CODE. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to [[PAC_MNT_PROJECTS]].PROJECT_CODE. |
| `PROJECT_ID` | NUMERIC | NULL | This column refers to [[SRM_PROJECTS]].ID. |
| `BILLING_PROJECT_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |
| `PROJECT_CODE` | [[PAC_MNT_PROJECTS]].`PROJECT_CODE` | |
| `PROJECT_ID` | [[SRM_PROJECTS]].`ID` | |

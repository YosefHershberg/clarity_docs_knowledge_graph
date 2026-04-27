---
title: PAC_BB_SELECTBILL_CONSINV
type: db-table
table: PAC_BB_SELECTBILL_CONSINV
columns: 5
audience: dev
domain: development
canonical: true
fk_targets:
  - CLNTSUPP
  - PAC_MNT_PROJECTS
  - PAC_MNT_RESOURCES
tags:
  - dev
  - schema
  - table
---

# PAC_BB_SELECTBILL_CONSINV

> [!info] Description
> This table stores information from batch billing when performing selective billing. It contains all the projects selected for billing during a particular billing session. The records in this table are also used for other validations during billing.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `USERID` | NVARCHAR | NOT NULL | This refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | This refers to [[CLNTSUPP]].COMPANY_CODE. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This refers to [[PAC_MNT_PROJECTS]].PROJECT_CODE. |
| `CURRENCY_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USERID` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |
| `PROJECT_CODE` | [[PAC_MNT_PROJECTS]].`PROJECT_CODE` | |

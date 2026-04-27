---
title: BB_SELECTIVEBILLING
type: db-table
table: BB_SELECTIVEBILLING
columns: 3
audience: dev
domain: development
canonical: true
fk_targets:
  - CLNTSUPP
  - PAC_MNT_RESOURCES
tags:
  - dev
  - schema
  - table
---

# BB_SELECTIVEBILLING

> [!info] Description
> This table stores the user-selected projects to bill during batch billing.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `USERID` | NVARCHAR | NOT NULL | This column refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | This column refers to [[CLNTSUPP]].COMPANY_CODE. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USERID` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |

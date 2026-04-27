---
title: PC_BILLINGSESSION
type: db-table
table: PC_BILLINGSESSION
columns: 8
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

# PC_BILLINGSESSION

> [!info] Description
> This table stores the billing session information.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BILLINGSESSIONKEY` | NUMERIC | NULL | The billing session key for the user who is running billing. |
| `USERID` | NVARCHAR | NOT NULL | This refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `ACTIONDATE` | DATE | NOT NULL | The date of billing. |
| `PROJECTLIST` | NVARCHAR | NOT NULL | This column refers to the concatenated list of projects selected for billing. |
| `CUTOFFDATE` | DATE | NULL | The cutoff date for transactions. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | This refers to [[CLNTSUPP]].COMPANY_CODE. |
| `FROMDATE` | DATE | NULL | The date from which to pick up transactions for billing. |
| `BILLING_CURRENCY_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USERID` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |

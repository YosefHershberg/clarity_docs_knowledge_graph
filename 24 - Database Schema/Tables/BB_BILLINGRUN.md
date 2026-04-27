---
title: BB_BILLINGRUN
type: db-table
table: BB_BILLINGRUN
columns: 5
audience: dev
domain: development
canonical: true
fk_targets:
  - PAC_MNT_RESOURCES
fk_sources:
  - BB_BILLTRACKING
  - BB_HSINVOICELAYOUT
  - BB_HSINVOICELIST
tags:
  - dev
  - schema
  - table
---

# BB_BILLINGRUN

> [!info] Description
> This table stores summary information for a batch billing job.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BILLINGRUNKEY` | NUMERIC | NULL | This column refers to the unique identifier of a row in this table. |
| `USERID` | NVARCHAR | NOT NULL | This column refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `ACTIONDATE` | DATE | NOT NULL | This column refers to the date of the batch run. |
| `COMPLETIONSTATUS` | NVARCHAR | NOT NULL | This column indicates whether a billing session run was successful or not. Values are: - E = Errors - N = No errors |
| `INVNUMBERSGENERATED` | INTEGER | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USERID` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[BB_BILLTRACKING]] | `BILLINGRUNKEY` | `BILLINGRUNKEY` |
| [[BB_HSINVOICELAYOUT]] | `BILLINGRUNKEY` | `BILLINGRUNKEY` |
| [[BB_HSINVOICELIST]] | `BILLINGRUNKEY` | `BILLINGRUNKEY` |

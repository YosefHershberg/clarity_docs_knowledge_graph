---
title: BILLINGSCHEDULE
type: db-table
table: BILLINGSCHEDULE
columns: 16
audience: dev
domain: development
canonical: true
fk_targets:
  - CLNTSUPP
  - PAC_MNT_PROJECTS
  - TAXCODE
tags:
  - dev
  - schema
  - table
---

# BILLINGSCHEDULE

> [!info] Description
> This table stores information for advanced bills.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BILLINGSCHEDULEKEY` | NUMERIC | NULL | This column refers to the unique identifier for a row in this table. |
| `CHANGEORDER` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `BILLDATE` | DATE | NOT NULL | This column refers to the date of the billing. |
| `BILLAMOUNT` | NUMERIC | NOT NULL | This column refers to the amount of scheduled bill. |
| `BILLED` | INTEGER | NOT NULL | This column indicates whether the item has been billed. Values are: - 0 = No - 1 = Yes |
| `ATF` | INTEGER | NOT NULL | This column indicates whether the item is an ATF (after-the-fact) invoice. Values are: - 0 = No - 1 = Yes |
| `INVOICENO` | NVARCHAR | NULL | This column refers to the invoice number of the bill, or Null. |
| `EVENT` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `NOTES` | NVARCHAR | NULL | This column refers to the notes relating to billing schedule. |
| `TAXCODE` | NVARCHAR | NULL | This column refers to [[TAXCODE]].CODE. |
| `ADMINCODE` | NVARCHAR | NULL | This column refers to [[TAXCODE]].CODE. |
| `TAXOVERRIDE` | FLOAT | NULL | This column is deprecated and should no longer be used. |
| `ADMINOVERRIDE` | FLOAT | NULL | This column is deprecated and should no longer be used. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | This column refers to [[CLNTSUPP]].COMPANY_CODE. |
| `MASTER_PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to [[PAC_MNT_PROJECTS]].PROJECT_CODE. |
| `PROJECT_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TAXCODE` | [[TAXCODE]].`CODE` | |
| `ADMINCODE` | [[TAXCODE]].`CODE` | |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |
| `MASTER_PROJECT_CODE` | [[PAC_MNT_PROJECTS]].`PROJECT_CODE` | |

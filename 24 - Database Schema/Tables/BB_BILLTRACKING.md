---
title: BB_BILLTRACKING
type: db-table
table: BB_BILLTRACKING
columns: 7
audience: dev
domain: development
canonical: true
fk_targets:
  - BB_BILLINGRUN
  - CLNTSUPP
tags:
  - dev
  - schema
  - table
---

# BB_BILLTRACKING

> [!info] Description
> This table stores detailed information for a batch billing job that may be used to reprint an invoice.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BILLINGRUNKEY` | NUMERIC | NOT NULL | This column refers to [[BB_BILLINGRUN]].BILLINGRUNKEY. |
| `INVOICENO` | NVARCHAR | NOT NULL | This column refers to the invoice number. |
| `ACTIONTYPE` | NVARCHAR | NOT NULL | This column indicates the type of bill. Values are: - B = Bill - M = Matching |
| `TRANCOUNT` | NUMERIC | NOT NULL | This column refers to the number of transactions generated for this invoice. |
| `AMOUNT` | NUMERIC | NOT NULL | This column refers to the amount of the invoice. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | This column refers to [[CLNTSUPP]].COMPANY_CODE. |
| `PROJECT_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `BILLINGRUNKEY` | [[BB_BILLINGRUN]].`BILLINGRUNKEY` | |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |

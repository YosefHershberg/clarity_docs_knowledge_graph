---
title: PAC_BIL_DETAIL_SUMMARY
type: db-table
table: PAC_BIL_DETAIL_SUMMARY
columns: 17
audience: dev
domain: development
canonical: true
fk_targets:
  - CLNTSUPP
  - PAC_MNT_PROJECTS
tags:
  - dev
  - schema
  - table
---

# PAC_BIL_DETAIL_SUMMARY

> [!info] Description
> This table stores billing detail summary. It is used in demand billing when processing billing transactions.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ROW1` | INTEGER | NULL | This column indicates if it is the first row. |
| `BILLINGSESSIONKEY` | NUMERIC | NULL | The unique key generated to maintain a billing session for the user. |
| `CANAPPROVEBILL` | NUMERIC | NULL | This column indicates if the bill can be approved. Values are: - 1 = Can be approved - 0 = Cannot be approved |
| `COMPANY_CODE` | NVARCHAR | NULL | This refers to [[CLNTSUPP]].COMPANY_CODE. |
| `PROJECT_CODE` | NVARCHAR | NULL | This refers to [[PAC_MNT_PROJECTS]].PROJECT_CODE. |
| `TITLE` | NVARCHAR | NULL | This refers to [[PAC_MNT_PROJECTS]].TITLE. |
| `TRANSTYPE` | NVARCHAR | NULL | Indicates the transaction type. Values are: - L = Labor - M = Material - Q = Equipment - X = Expense |
| `TOTALAMOUNT` | NUMERIC | NULL | The total amount of the transaction. |
| `AMOUNTREMAINING` | NUMERIC | NULL | The amount remaining on the transaction after billing. |
| `BILLAMOUNT` | NUMERIC | NULL | The amount billed for the transaction. |
| `ADJUSTAMOUNT` | NUMERIC | NULL | The amount entered by the user to adjust a transaction. |
| `LINE_NO` | INTEGER | NULL | This column indicates the line number as seen on the page. |
| `HASDETAILS` | INTEGER | NULL | This column indicates if the summary line contains details. Values are: - 0 = No details - 1 = Has details |
| `LASTROW` | INTEGER | NULL | This column indicates if this is the last row displayed on the page. Values are: - 1 = Is last row on the page - 0 = Is not the last row on the page |
| `RECORDTYPE` | INTEGER | NULL | The record type of the summary line item. |
| `BILLFLAGS` | NVARCHAR | NULL | The billing flag of the transaction. |
| `USERID` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |
| `PROJECT_CODE` | [[PAC_MNT_PROJECTS]].`PROJECT_CODE` | |
| `TITLE` | [[PAC_MNT_PROJECTS]].`TITLE` | |

---
title: PC_BILLINGDETAILALLOCATIONS
type: db-table
table: PC_BILLINGDETAILALLOCATIONS
columns: 13
audience: dev
domain: development
canonical: true
fk_targets:
  - CLNTSUPP
  - PPA_WIP
tags:
  - dev
  - schema
  - table
---

# PC_BILLINGDETAILALLOCATIONS

> [!info] Description
> This table stores billing information during demand billing.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BILLINGSESSIONKEY` | NUMERIC | NOT NULL | A unique key that represents the billing session. |
| `TRANSTYPE` | NVARCHAR | NOT NULL | The transaction type. Values are: - L = Labor - M = Material - Q = Equipment - X = Expense |
| `TRANSNO` | NUMERIC | NOT NULL | This refers to [[PPA_WIP]].TRANSNO. |
| `QUANTITY` | NUMERIC | NOT NULL | The bill units for the transaction. |
| `RATE` | NUMERIC | NOT NULL | The rate that is based on how much was billed on the transaction. |
| `TOTALAMOUNT` | NUMERIC | NOT NULL | The total amount of the transaction. |
| `AMOUNTREMAINING` | NUMERIC | NOT NULL | The remaining amount that is billable. |
| `BILLAMOUNT` | NUMERIC | NULL | The amount that has been billed. |
| `ADJUSTAMOUNT` | NUMERIC | NULL | The amount that needs to be adjusted. |
| `BILLFLAGS` | NVARCHAR | NULL | This column is reserved for internal use only. The billing flag on the billing row. |
| `PROJECTTYPE` | NVARCHAR | NULL | This column refers to the project type. Values: - S = Standard - P = Contract - R = Retainer - I = Internal |
| `COMPANY_CODE` | NVARCHAR | NULL | This refers to [[CLNTSUPP]].COMPANY_CODE. |
| `PROJECT_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TRANSNO` | [[PPA_WIP]].`TRANSNO` | |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |

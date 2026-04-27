---
title: BB_HSINVOICELIST
type: db-table
table: BB_HSINVOICELIST
columns: 3
audience: dev
domain: development
canonical: true
fk_targets:
  - BB_BILLINGRUN
  - PAC_MNT_RESOURCES
tags:
  - dev
  - schema
  - table
---

# BB_HSINVOICELIST

> [!info] Description
> This table stores the listing of the generated invoices.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BILLINGRUNKEY` | NUMERIC | NOT NULL | This column refers to [[BB_BILLINGRUN]].BILLINGRUNKEY. |
| `USERID` | NVARCHAR | NOT NULL | This column refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `INVOICENO` | NVARCHAR | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `BILLINGRUNKEY` | [[BB_BILLINGRUN]].`BILLINGRUNKEY` | |
| `USERID` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |

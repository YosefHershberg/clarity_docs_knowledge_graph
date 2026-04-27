---
title: BB_HSINVOICELAYOUT
type: db-table
table: BB_HSINVOICELAYOUT
columns: 6
audience: dev
domain: development
canonical: true
fk_targets:
  - BB_BILLINGRUN
  - INVOICEHEADER
  - PAC_MNT_RESOURCES
tags:
  - dev
  - schema
  - table
---

# BB_HSINVOICELAYOUT

> [!info] Description
> This table stores the layout for generated invoices.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BILLINGRUNKEY` | NUMERIC | NOT NULL | This column refers to [[BB_BILLINGRUN]].BILLINGRUNKEY. |
| `USERID` | NVARCHAR | NOT NULL | This column refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `INVOICENO` | NVARCHAR | NOT NULL | This column refers to [[INVOICEHEADER]].INVOICENO. |
| `SECTIONNO` | NUMERIC | NOT NULL | This column refers to a section on the generated invoice(s). |
| `LINESEQNO` | NUMERIC | NOT NULL | This column refers to the sequence number of the lines as they should appear on the generated invoice. |
| `PRINTLINE` | NVARCHAR | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `BILLINGRUNKEY` | [[BB_BILLINGRUN]].`BILLINGRUNKEY` | |
| `USERID` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |
| `INVOICENO` | [[INVOICEHEADER]].`INVOICENO` | |

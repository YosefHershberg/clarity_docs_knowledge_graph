---
title: OLB_GENERATEINFO
type: db-table
table: OLB_GENERATEINFO
columns: 13
audience: dev
domain: development
canonical: true
fk_targets:
  - PAC_MNT_RESOURCES
  - PPA_WIP
fk_sources:
  - IMP_TRANSACTIONIMPORT
tags:
  - dev
  - schema
  - table
---

# OLB_GENERATEINFO

> [!info] Description
> This table is an internal table that is used in demand billing.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `USERID` | NVARCHAR | NOT NULL | This refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `GROUPNO` | NVARCHAR | NOT NULL | The internal column that references the GROUPNO. |
| `WTRANSNO` | NUMERIC | NOT NULL | This refers to [[PPA_WIP]].TRANSNO. |
| `BILLAMT` | NUMERIC | NOT NULL | The amount that is being billed. |
| `ADJAMT` | NUMERIC | NOT NULL | The amount that is entered as an adjustment for the bill. |
| `BILLUNITS` | FLOAT | NULL | The number of units that is being billed. |
| `BILLRATE` | NUMERIC | NOT NULL | The billing rate for the transaction. |
| `BILLFLAGS` | NVARCHAR | NULL | This column indicates if the billing row is protected from billing. Value are: - 0 = Billing row is protected from billing - 1 = Billing row is not been protected from billing |
| `BILLDATE` | DATE | NOT NULL | The date of the bill. |
| `AMTREMAIN` | NUMERIC | NULL | The amount remaining to be billed. |
| `QUANTITY` | NUMERIC | NULL | The number of units in the transaction. |
| `TOTALAMT` | NUMERIC | NULL | The total amount of the transaction. |
| `QTYREMAIN` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USERID` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |
| `WTRANSNO` | [[PPA_WIP]].`TRANSNO` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[IMP_TRANSACTIONIMPORT]] | `WORKBUF` | `BILLFLAGS` |

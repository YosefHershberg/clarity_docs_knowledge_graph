---
title: IMP_TRANSACTIONIMPORTERRORS
type: db-table
table: IMP_TRANSACTIONIMPORTERRORS
columns: 3
audience: dev
domain: development
canonical: true
erds:
  - Transactions
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# IMP_TRANSACTIONIMPORTERRORS

> [!info] Description
> This table stores all the error codes and descriptions for transactions imported into CA Clarity PPM.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ERRORCODE` | NUMERIC | NOT NULL | The unique code for the error. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | The description of the error that has occurred. |
| `LOOKUP_CODE` | NVARCHAR | NULL |  |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

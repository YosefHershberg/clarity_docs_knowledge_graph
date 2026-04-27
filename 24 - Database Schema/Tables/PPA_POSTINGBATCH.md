---
title: PPA_POSTINGBATCH
type: db-table
table: PPA_POSTINGBATCH
columns: 7
audience: dev
domain: development
canonical: true
erds:
  - Transactions
fk_sources:
  - PAC_CHG_TRANSACTIONS
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# PPA_POSTINGBATCH

> [!info] Description
> This table stores the batch posting of work in process (WIP).

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BATCHNO` | NUMERIC | NULL | The batch number. It uniquely identifies this batch. |
| `POSTDATE` | DATE | NOT NULL | The date when the posting batch was executed. |
| `POSTTARGET` | NVARCHAR | NOT NULL | The target of the post. Value are: - IC = Incident cost - W = WIP transactions - TB = Billing - B = Final approval of billing - T = Individual transaction |
| `POSTPROCESS` | NVARCHAR | NOT NULL | Describes post process used in this batch. |
| `POST_RESOURCE_CODE` | NVARCHAR | NOT NULL | The resource code of the resource who imported this transaction. |
| `ACTUALS_UPDATED` | INTEGER | NULL | Indicates if actual values are updated as part of this batch when recalculating actuals is optional for batches where recalculating actuals is optional. Values are: - 0 = Not updated - 1 = Updated |
| `PMA_FINANCIALS_UPDATED` | NUMERIC | NULL |  |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PAC_CHG_TRANSACTIONS]] | `BATCH_ID` | `BATCHNO` |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

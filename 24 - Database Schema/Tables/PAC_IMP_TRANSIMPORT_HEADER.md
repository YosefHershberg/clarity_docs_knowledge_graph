---
title: PAC_IMP_TRANSIMPORT_HEADER
type: db-table
table: PAC_IMP_TRANSIMPORT_HEADER
columns: 9
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

# PAC_IMP_TRANSIMPORT_HEADER

> [!info] Description
> This table is a header record for transactions in IMP_TRANSACTIONIMPORT table. It stores information that is common for a set of transactions. Note that all transactions do not have a header record.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `VOUCHERNO` | NVARCHAR | NOT NULL | The voucher number for this header row. |
| `PONO` | NVARCHAR | NULL | The purchase order number for this header row. |
| `VENDOR_CODE` | NVARCHAR | NULL | The vendor code for this header record. The header is either incurred by or vendor code, but it cannot be both. |
| `INCURRED_BY` | NVARCHAR | NULL | The resource who incurred the expense transactions under this header row. The header is either incurred by or the vendor code, but it cannot be both. |
| `DOCUMENT_TYPE` | NUMERIC | NULL | The document type of this header. It is either voucher other or voucher expense. |
| `IMPORTSTATUS` | NVARCHAR | NULL | The import status. This column is updated by the system to determine if the header is a new transaction header or has a status error or hold. |
| `ERRORCODE` | NUMERIC | NULL | The placeholder of the error code if an error occurs during the processing of data that belongs to this header row. |
| `FATALERROR` | NVARCHAR | NULL |  |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

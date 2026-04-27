---
title: PPA_WIPAPINFO
type: db-table
table: PPA_WIPAPINFO
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Transactions
fk_targets:
  - CMN_SEC_USERS
  - PAC_MNT_RESOURCES
fk_sources:
  - PPA_WIP
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# PPA_WIPAPINFO

> [!info] Description
> This table stores supplemental accounts payable (AP) information for transactions imported from an AP system.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `VOUCHERNO` | NVARCHAR | NULL | The voucher number. |
| `PONO` | NVARCHAR | NULL | The purchase order (PO) number. |
| `VENDOR_CODE` | NVARCHAR | NULL | The vendor code. |
| `INCURRED_BY` | NVARCHAR | NULL | The resource who incurs the voucher amount. This refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `DOCUMENT_TYPE` | NUMERIC | NULL | The entry type of the voucher. This is selected from lookup 'PAC_DOCUMENT_TYPE'. |
| `CREATED_DATE` | DATE | NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `INCURRED_BY` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PPA_WIP]] | `PPA_WIPAPINFO_ID` | `ID` |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

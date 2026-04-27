---
title: PPA_BILLINGS
type: db-table
table: PPA_BILLINGS
columns: 29
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
fk_targets:
  - CLNTSUPP
  - PAC_MNT_PROJECTS
  - PAC_MNT_RESOURCES
  - PPA_WIP
  - PRCHARGECODE
fk_sources:
  - CBK_GL_TXNS
  - PAC_BIL_INVOICE_TRN_DETAILS
  - PAC_CHG_EXCEPTIONS
  - PPA_BILLING_VALUES
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
---

# PPA_BILLINGS

> [!info] Description
> This table stores billing-related records.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TRANSNO` | NUMERIC | NOT NULL | Uniquely identifies each transaction. |
| `APPLYTO` | NUMERIC | NOT NULL | The reference number that points back to the TRANSNO of the original transaction in the same table. |
| `SOURCEMODULE` | NUMERIC | NOT NULL | This column refers to the source of the transaction. Values are: - 6 = Demand billing - 9 = Advance Billing - 10 = Credit memo - 12 = Batch billing - 50 = WIP adjustment |
| `TRANSTYPE` | NVARCHAR | NOT NULL | The transaction type. Values are: - L = Labor - M = Material - X = Expense - Q =Equipment - B = Bill - BC = Credit memo - BR = Retainer bill - BP = Contract bill - AY = Matching - A = Adjustment - AU = Write-up - AD = Write down |
| `APPLYTOTRANSTYPE` | NVARCHAR | NOT NULL | The transaction type related to the APPLYTO column. |
| `INVOICENO` | NVARCHAR | NULL | The number to group the transactions under on a particular invoice. |
| `BATCHNO` | NUMERIC | NOT NULL | The number to group transactions have been billed. |
| `ENTRYDATE` | DATE | NOT NULL | The date on which the user originally entered the transaction. |
| `LASTUPDATEDATE` | DATE | NOT NULL | The date when transaction was last updated. |
| `EXTERNALTRANSNO` | NUMERIC | NULL | The transaction number (TRANSNO) in the external system. |
| `BILLINGDATE` | DATE | NOT NULL | The date when the transaction was billed. |
| `QUANTITY` | NUMERIC | NOT NULL | The number of units of labor or other items within the activity of this transaction. |
| `STATUS` | NUMERIC | NOT NULL | The current status of this billing transaction. Values are: - 0 = Available/billed - 2 = Reversed - 8 = Awaiting approval |
| `NOTES` | NVARCHAR | NULL | The comments by the user who entered the transaction. |
| `WORKINT` | NUMERIC | NULL | The working column used for internal processing. This refers to [[PPA_WIP]].TRANSNO. |
| `WORKBUF` | NVARCHAR | NULL | The working column for internal processing. |
| `GLPOSTED` | NVARCHAR | NOT NULL | The flag when set to 1 indicates that the transaction was successfully posted to general ledger. |
| `GLPERIOD` | NVARCHAR | NULL | The period during which the transaction was posted to the general ledger. |
| `COMPANY_CODE` | NVARCHAR | NULL | The company for which the activity on this transaction occurred. This column refers to [[CLNTSUPP]].COMPANY_CODE. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project for which the activity of this transaction occurred ([[PAC_MNT_PROJECTS]].PROJECT_CODE). |
| `ENTRY_RESOURCE_CODE` | NVARCHAR | NOT NULL | This column indicates the user who originally entered the transaction. |
| `LASTUPDTDBY_RESOURCE_CODE` | NVARCHAR | NOT NULL | The user who last updated the transaction. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL | The resource who performed the activity on this transaction. This refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | The XML Open Gateway external source identifier. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The XML Open Gateway external ID |
| `XOG_EXPORTED` | INTEGER | NULL | A Boolean value indicating whether the data row was exported using XOG. This column is only used for XOG reference and is not used by the application. |
| `XOG_EXPORTED_DATE` | DATE | NULL | The date of data export to this table using XOG. This column is only used for XOG reference and is not used by the application. |
| `CHARGE_CODE` | NVARCHAR | NULL | The charge code used for the bill. This column refers to [[PRCHARGECODE]].PREXTERNALID. |
| `INPUT_TYPE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `WORKINT` | [[PPA_WIP]].`TRANSNO` | |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |
| `PROJECT_CODE` | [[PAC_MNT_PROJECTS]].`PROJECT_CODE` | |
| `RESOURCE_CODE` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |
| `CHARGE_CODE` | [[PRCHARGECODE]].`PREXTERNALID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_TXNS]] | `TRANSACTION_ID` | `TRANSNO` |
| [[PAC_BIL_INVOICE_TRN_DETAILS]] | `TRANSNO` | `TRANSNO` |
| [[PAC_CHG_EXCEPTIONS]] | `TRANSNO` | `TRANSNO` |
| [[PPA_BILLING_VALUES]] | `TRANSNO` | `TRANSNO` |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[DEPARTMENTS]], [[ENTITY]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_MNT_PROJECTS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRTYPECODE]], [[TRANSCLASS]]

---
title: IMP_TRANSACTIONIMPORT
type: db-table
table: IMP_TRANSACTIONIMPORT
columns: 38
audience: dev
domain: development
canonical: true
erds:
  - Transactions
fk_targets:
  - OLB_GENERATEINFO
  - PRSITE
  - PRTASK
  - PRTIMESHEET
  - SRM_PROJECTS
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# IMP_TRANSACTIONIMPORT

> [!info] Description
> This table stores the transactions that are imported into CA Clarity PPM.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PAC_IMP_HEADER_ID` | NUMERIC | NULL | The ID of this transaction header. |
| `SOURCEMODULE` | NUMERIC | NULL | This column indicates the source of the transaction. The transaction could come from a time entry or external system through the CA Clarity PPM XOG. 50=Transaction originates from CA Clarity PPM XOG (unless otherwise specified) 51=Transaction originates from a CA Clarity PPM timesheet Note: This table does not include voucher source because the vouchers are validated at the time of user entry. Therefore, no records for 52 (transaction originates from voucher entry of type VOUCHER_EXPENSE) and 53 (transaction originates from voucher entry of type VOUCHER_OTHER) are created. |
| `TRANSIMPORTKEY` | NUMERIC | NOT NULL | The transaction import key. |
| `EXTERNALTRANSNO` | NUMERIC | NULL | If the external system has transaction number, then this column indicates the external transaction number as specified in XOG. |
| `EXTERNALBATCHID` | NVARCHAR | NULL | The External batch ID as specified in the XOG or timesheet. When a timesheet is posted, EXTERNALBATCHID=[[PRTIMESHEET]].PRID and the EXTERNALTRANSNO field is blank. |
| `TRANSTYPE` | NVARCHAR | NULL | The transaction type. Values are: - 0 = LABOR - 1 = MATERIAL - 2 = EXPENSE - 3 = EQUIPMENT |
| `TRANSDATE` | DATE | NOT NULL | The date of the transaction. |
| `QUANTITY` | NUMERIC | NULL | The quantity or the number of hours worked. |
| `RATE` | NUMERIC | NULL | The actual rate used for the transaction. |
| `COST` | NUMERIC | NULL | The actual cost on this transaction. |
| `CHARGEABLE` | NUMERIC | NULL | The flag indicating if the transaction can be charged and available for billing. |
| `NOTES` | NVARCHAR | NULL | Any notes for the transaction. |
| `SITE` | NVARCHAR | NULL | The reference to project site. This refers to [[PRSITE]].PRID. |
| `IMPORTSTATUS` | NVARCHAR | NOT NULL | The import status used to determine if the transaction is new, an error or on hold. |
| `IMPORTDATE` | DATE | NULL | The date the transaction was imported. |
| `ERRORCODE` | NUMERIC | NOT NULL | If an error occurs, the error code. |
| `WORKINT` | NUMERIC | NULL | The transaction number from the PPA_WIP table. |
| `WORKBUF` | NVARCHAR | NULL | This refers to [[OLB_GENERATEINFO]].BILLFLAGS. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project code to which the transaction is submitted. This refers to [[SRM_PROJECTS]].ID. |
| `COMPANY_CODE` | NVARCHAR | NULL | The company code to which the transaction is submitted. |
| `IMPORTEDBY_RESOURCE_CODE` | NVARCHAR | NULL | The resource code of the resource who imported these transactions. |
| `RESOURCE_CODE` | NVARCHAR | NULL | The resource who performed the transaction. |
| `ROLE_CODE` | NVARCHAR | NULL | The resource role code. |
| `JOB_ID` | NUMERIC | NULL | Reserved for internal use only. |
| `EXTERNAL_ID` | NVARCHAR | NOT NULL | The XML Open Gateway External ID. |
| `TASKID` | NUMERIC | NOT NULL | The task ID for which the time entry is entered. This refers to [[PRTASK]].PRID. |
| `RATE_CURRENCY` | NVARCHAR | NULL | The rate currency code for the transaction. This refers to the CMN_CURRENCIES table. |
| `COST_CURRENCY` | NVARCHAR | NULL | The cost currency code for the transaction. This refers to the CMN_CURRENCIES table. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | The XML Open Gateway External Source Identifier. |
| `APPLY_TO_EXTERNAL_ID` | NVARCHAR | NULL | The external ID as specified in XOG. |
| `CHARGE_CODE` | NVARCHAR | NULL | The charge code used for the transaction. This refers to the PRCHARGECODE table. |
| `INPUT_TYPE` | NVARCHAR | NULL | The input type. This refers to the PRTYPECODE table. |
| `FATALERROR` | NVARCHAR | NULL | This column indicates the error message in case of fatal error. |
| `TRANSCLASS` | NVARCHAR | NULL | The transaction class for the transaction. |
| `USER_LOV1` | NVARCHAR | NULL | The utility code 1. |
| `USER_LOV2` | NVARCHAR | NULL |  |
| `EXPENSE_TYPE` | NVARCHAR | NULL | The type of the expense transaction. Values are: - 1 = Capital Expense - 2 = Depreciation |
| `RESOURCE_TEAM_ID` | NUMERIC | NULL | This column refers to the Team ID that current transaction resource belongs to. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `EXTERNALBATCHID` | [[PRTIMESHEET]].`PRID` | |
| `SITE` | [[PRSITE]].`PRID` | |
| `WORKBUF` | [[OLB_GENERATEINFO]].`BILLFLAGS` | |
| `PROJECT_CODE` | [[SRM_PROJECTS]].`ID` | |
| `TASKID` | [[PRTASK]].`PRID` | |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

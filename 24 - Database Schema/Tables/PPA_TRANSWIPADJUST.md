---
title: PPA_TRANSWIPADJUST
type: db-table
table: PPA_TRANSWIPADJUST
columns: 58
audience: dev
domain: development
canonical: true
erds:
  - Transactions
fk_targets:
  - DEPARTMENTS
  - LOCATIONS
  - PAC_MNT_RESOURCES
  - PRTASK
  - PRTIMESHEET
  - SRM_RESOURCES
  - TRANSCLASS
  - WIPCLASS
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# PPA_TRANSWIPADJUST

> [!info] Description
> This table stores unapproved work in progress (WIP) adjustments.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TRANSNO` | NUMERIC | NOT NULL | Uniquely identifies each transaction. |
| `APPLYTO` | NUMERIC | NULL | For billing and adjustments, this column is used to reference the original transaction. |
| `SOURCEMODULE` | NUMERIC | NOT NULL | This column refers to the source module of the originating transaction. Values are: - 50 = Transaction originated from CA Clarity PPM XOG (unless otherwise specified) - 51 = Transaction originated from a timesheet in CA Clarity PPM - 52 = Transaction originated from a voucher entry of type VOUCHER_EXPENSE - 53 = Transaction originated from a voucher entry of type VOUCHER_OTHER |
| `TRANSTYPE` | NVARCHAR | NOT NULL | The type of transaction (i.e., labor, material, expenses, equipment, and adjustment). |
| `BATCHNO` | NUMERIC | NOT NULL | The number used to group the transactions that are posted from transaction entry to the work in progress (WIP). |
| `ENTRYDATE` | DATE | NOT NULL | The date when the user originally entered the transaction. |
| `LASTUPDATEDATE` | DATE | NOT NULL | The date when transaction was last updated. |
| `EXTERNALBATCHID` | NVARCHAR | NULL | The External batch ID as specified in the XOG or timesheet. When a timesheet is posted, EXTERNALBATCHID=[[PRTIMESHEET]].PRID and the EXTERNALTRANSNO field is blank. |
| `EXTERNALTRANSNO` | NUMERIC | NULL | The transaction number in external system. |
| `LOCATIONID` | NVARCHAR | NOT NULL | The location where the activity for this transaction occurred. |
| `DEPARTCODE` | NVARCHAR | NOT NULL | The department where the activity for this transaction occurred. |
| `ENTITY` | NVARCHAR | NOT NULL | The entity where the activity for this transaction occurred. |
| `TRANSDATE` | DATE | NOT NULL | The date when the activity for this transaction occurred. |
| `QUANTITY` | NUMERIC | NOT NULL | The number of units of labor or other items within the activity of this transaction. |
| `COSTRULECODE` | NVARCHAR | NULL | The code used to calculate the factor amount. |
| `BURDENCODE` | NVARCHAR | NULL | The code used to calculate the burden. |
| `OVERHEADCODE` | NVARCHAR | NULL | This column refers to the code used to calculate the overhead. |
| `CHARGEABLE` | INTEGER | NOT NULL | Indicates if the transaction can be charged. |
| `STATUS` | NUMERIC | NOT NULL | Indicates the current status of this transaction. Values are: - Adjusted = 1 - Reversed = 2 - Updated = 4 |
| `NOTES` | NVARCHAR | NULL | Any comments by the user who entered the transaction. |
| `INVOICENO` | NVARCHAR | NULL | A number used to group the transactions under a particular invoice. |
| `EMPLYHOMELOCATION` | NVARCHAR | NULL | The location of the employee who performed the activity for this transaction. This refers to [[LOCATIONS]].LOCATIONID. |
| `EMPLYHOMEDEPART` | NVARCHAR | NULL | The department of the employee who performed the activity for this transaction. This refers to [[DEPARTMENTS]].DEPARTCODE. |
| `PROJECTTYPE` | NVARCHAR | NOT NULL | This column refers to the type of project. Values: - Internal - Standard - Retainer - Contract |
| `CLIENTCLASS` | NVARCHAR | NULL | The classification of the client for which the activity of this transaction was performed. |
| `PROJECTCLASS` | NVARCHAR | NULL | This column refers to the classification of the project for this transaction. |
| `TRANSCLASS` | NVARCHAR | NOT NULL | The classification of the transaction. This refers to [[TRANSCLASS]].TRANSCLASS. |
| `RESOURCE_CLASS` | NVARCHAR | NOT NULL | The resource class. |
| `WIPCLASS` | NVARCHAR | NULL | The classification of the transaction in the work in progress (WIP). This refers to [[WIPCLASS]].WIPCLASS. |
| `WORKINT` | NUMERIC | NULL | The working column used for internal processing. |
| `WORKBUF` | NVARCHAR | NULL | The working column used for internal processing. |
| `GLPOSTED` | NVARCHAR | NOT NULL | The Flag when set to 1 indicates that the transaction was successfully processed by the general (GL) allocation chargeback module. |
| `GLPERIOD` | NVARCHAR | NULL | The period in which the transaction has been posted to the general ledger. |
| `ADJUSTGROUPNO` | NUMERIC | NOT NULL | The grouping number that relates the adjustment transaction types with the L, M, Q, X transaction types. |
| `TRANSDESCRIPTION` | NVARCHAR | NOT NULL | Specifies the type of description. Values are: - R = Reverse transaction (a transaction type) - RO = Reverse original (L, M, Q, X) |
| `DEL` | INTEGER | NOT NULL | If set, the original rows are replaced with the adjustment. |
| `ADJTYPE` | NVARCHAR | NOT NULL | The adjustment type. |
| `VOUCHERNO` | NVARCHAR | NULL | The voucher number. Values are: - M = Material - Q = Equipment - X = Expense |
| `PONO` | NVARCHAR | NULL | The purchase order (PO) number. |
| `COMPANY_CODE` | NVARCHAR | NULL | The client for whom the activity of this transaction was performed. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project for which the activity for this transaction was performed. |
| `ENTRY_RESOURCE_CODE` | NVARCHAR | NOT NULL | The user who originally entered the transaction. |
| `LASTUPDTDBY_RESOURCE_CODE` | NVARCHAR | NOT NULL | The user who last updated the transaction. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL | The employee who performed the activity in this transaction. |
| `VENDOR_CODE` | NVARCHAR | NULL | The vendor code for transactions. Values are: - M = Material - Q = Equipment - X = Expense |
| `TASK_ID` | NUMERIC | NULL | The task performed for this transaction. This refers to table [[PRTASK]].PRID. |
| `ROLE_CODE` | NVARCHAR | NULL | The role performed in the transaction. This refers to [[SRM_RESOURCES]].UNIQUE_NAME. |
| `APINFO_ID` | NUMERIC | NULL | The ID of the header (i.e., voucher) information. |
| `INCURRED_BY` | NVARCHAR | NULL | The resource who incurs the voucher amount. This refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `DOCUMENT_TYPE` | NUMERIC | NULL | The entry type of the voucher. This selected from lookup "PAC_DOCUMENT_TYPE." |
| `CHARGE_CODE` | NVARCHAR | NULL | The charge code. |
| `INPUT_TYPE` | NVARCHAR | NULL | The input type code. |
| `USER_LOV1` | NVARCHAR | NULL | This refers to the lookup PRTIMEENTRY_USERLOV1. This provides the extra flexibility for further categorizing a transaction for budgeting and chargeback purposes. |
| `USER_LOV2` | NVARCHAR | NULL |  |
| `EXPENSE_TYPE` | NVARCHAR | NULL | The expense type. Values are: - CAPEXP = Capital Expense - DEPRECIATION = Depreciation |
| `COST_TYPE` | NVARCHAR | NULL | This column specifies the cost type of transaction. |
| `FIN_WORK_TYPE` | NUMERIC | NULL | This column refers to the internal ID of lookup value of lookup type Financial Work Type. |
| `RESOURCE_TEAM_ID` | NUMERIC | NULL | This column refers to the Team ID that current transaction resource belongs to. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `EXTERNALBATCHID` | [[PRTIMESHEET]].`PRID` | |
| `EMPLYHOMELOCATION` | [[LOCATIONS]].`LOCATIONID` | |
| `EMPLYHOMEDEPART` | [[DEPARTMENTS]].`DEPARTCODE` | |
| `TRANSCLASS` | [[TRANSCLASS]].`TRANSCLASS` | |
| `WIPCLASS` | [[WIPCLASS]].`WIPCLASS` | |
| `TASK_ID` | [[PRTASK]].`PRID` | |
| `ROLE_CODE` | [[SRM_RESOURCES]].`UNIQUE_NAME` | |
| `INCURRED_BY` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

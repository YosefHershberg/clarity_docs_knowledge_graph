---
title: PPA_TRANSCONTROL
type: db-table
table: PPA_TRANSCONTROL
columns: 50
audience: dev
domain: development
canonical: true
erds:
  - Transactions
fk_targets:
  - CLNTCLASS
  - DEPARTMENTS
  - ENTITY
  - LOCATIONS
  - PAC_FOS_RESOURCE_CLASS
  - PPA_TRANSCONTROLAPINFO
  - PRCHARGECODE
  - PRTASK
  - PRTIMEENTRY
  - PRTIMESHEET
  - PRTYPECODE
  - SRM_RESOURCES
  - TRANSCLASS
  - WIPCLASS
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# PPA_TRANSCONTROL

> [!info] Description
> This table stores pending transactions that are ready to move to the PPA_WIP table.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TRANSNO` | NUMERIC | NULL | Uniquely identifies each transaction. |
| `SOURCEMODULE` | NUMERIC | NOT NULL | This column refers to the source module of the originating transaction. Values are: - 50 = Transaction originated from CA Clarity PPM XOG (unless otherwise specified) - 51 = Transaction originated from a timesheet in CA Clarity PPM - 52 = Transaction originated from a voucher entry of type VOUCHER_EXPENSE - 53 = Transaction originated from a voucher entry of type VOUCHER_OTHER |
| `TRANSTYPE` | NVARCHAR | NOT NULL | The type of transaction. Values are: - Labor - Material - Expenses - Equipment |
| `BATCHNO` | NUMERIC | NOT NULL | The number used to group transactions that are posted from transaction entry to WIP. |
| `ENTRYDATE` | DATE | NOT NULL | The date when the user originally entered the transaction. |
| `LASTUPDATEDATE` | DATE | NOT NULL | The date the transaction was last updated. |
| `EXTERNALBATCHID` | NVARCHAR | NULL | The External batch ID as specified in the XOG or timesheet. When a timesheet is posted, EXTERNALBATCHID=[[PRTIMESHEET]].PRID and the EXTERNALTRANSNO field is blank. If the transaction is sourced from a voucher, the EXTERNALBATCHID and EXTERNALTRANSNO fields are blank. |
| `EXTERNALTRANSNO` | NUMERIC | NULL | For a transaction that is from a time entry. This refers to [[PRTIMEENTRY]].PRID. For imported transactions, this could be a unique ID from an external system. |
| `LOCATIONID` | NVARCHAR | NOT NULL | The location where the activity for this transaction occurred. |
| `DEPARTCODE` | NVARCHAR | NOT NULL | The department where the activity for this transaction occurred. This refers to [[DEPARTMENTS]].DEPARTCODE. |
| `ENTITY` | NVARCHAR | NOT NULL | The entity where the activity for this transaction occurred. This refers to [[ENTITY]].ENTITY. |
| `TRANSDATE` | DATE | NOT NULL | The date when the activity for this transaction occurred. |
| `QUANTITY` | NUMERIC | NOT NULL | The number of units of labor or other items within the activity of this transaction. |
| `COSTRULECODE` | NVARCHAR | NULL | The code used to calculate the f actor amount. |
| `BURDENCODE` | NVARCHAR | NULL | The code used to calculate the burden. |
| `OVERHEADCODE` | NVARCHAR | NULL | This column refers to the code used to calculate the overhead. |
| `CHARGEABLE` | INTEGER | NOT NULL | Indicates if the transaction is chargeable. |
| `NOTES` | NVARCHAR | NULL | Any comments by the user who entered the transaction. |
| `INVOICENO` | NVARCHAR | NULL | A number used to group the transactions under a particular invoice. |
| `EMPLYHOMELOCATION` | NVARCHAR | NULL | The location of the employee who performed the activity for this transaction. This refers to [[LOCATIONS]].LOCATONID. |
| `EMPLYHOMEDEPART` | NVARCHAR | NULL | The department of the employee who performed the activity for this transaction. This refers to [[DEPARTMENTS]].DEPARTCODE. |
| `PROJECTTYPE` | NVARCHAR | NOT NULL | This column refers to the type of project. Values: - Internal - Standard - Retainer - Contract |
| `CLIENTCLASS` | NVARCHAR | NULL | The classification of the client for which the activity of this transaction was performed. This refers to [[CLNTCLASS]].CLNTCLASS. |
| `PROJECTCLASS` | NVARCHAR | NULL | This column refers to the classification of the project. |
| `TRANSCLASS` | NVARCHAR | NOT NULL | The classification of the transaction. This refers to [[TRANSCLASS]].TRANSCLASS. |
| `RESOURCE_CLASS` | NVARCHAR | NOT NULL | The resource class. This refers to [[PAC_FOS_RESOURCE_CLASS]].RESOURCE_CLASS. |
| `WIPCLASS` | NVARCHAR | NULL | The transaction work in progress (WIP) class. This refers to [[WIPCLASS]].WIPCLASS. |
| `WORKINT` | NUMERIC | NULL | The working column used for internal processing. |
| `WORKBUF` | NVARCHAR | NULL | The working column used for internal processing. |
| `COMPANY_CODE` | NVARCHAR | NULL | The client for whom the activity of this transaction was done. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project for which the activity of this transaction was done. |
| `ENTRY_RESOURCE_CODE` | NVARCHAR | NOT NULL | The user who originally entered the transaction. |
| `LASTUPDTDBY_RESOURCE_CODE` | NVARCHAR | NOT NULL | The resource code of the user who last updated the transaction. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL | The employee who performed the activity in this transaction. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The XML Open Gateway external ID. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | XML Open Gateway external source identifier. |
| `TASK_ID` | NUMERIC | NULL | This Task ID. This refers [[PRTASK]].PRID. |
| `PROJECT_LOCATION` | NVARCHAR | NULL | This column refers to the location ([[LOCATIONS]].LOCATIONID) of the project. |
| `PROJECT_DEPARTMENT` | NVARCHAR | NULL | This column refers to the department ([[DEPARTMENTS]].DEPARTCODE) of the project. |
| `ROLE_CODE` | NVARCHAR | NULL | The role used in the transaction. This refers to [[SRM_RESOURCES]].UNIQUE_NAME. |
| `CHARGE_CODE` | NVARCHAR | NULL | The charge code. This refers to [[PRCHARGECODE]].PREXTERNALID. |
| `INPUT_TYPE` | NVARCHAR | NULL | The input type code. This refers to [[PRTYPECODE]].PREXTERNALID. |
| `USER_LOV1` | NVARCHAR | NULL | This refers to the lookup PRTIMEENTRY_USERLOV1. This provides the extra flexibility for further categorizing a transaction for budgeting and chargeback purposes. |
| `USER_LOV2` | NVARCHAR | NULL |  |
| `EXPENSE_TYPE` | NVARCHAR | NULL | The type of expense. Values are: - CAPEXP = Capital Expense - DEPRECIATION = Depreciation |
| `PPA_TRANSCONTROLAPINFO_ID` | NUMERIC | NULL | A reference to header row of transaction if any. This refers to [[PPA_TRANSCONTROLAPINFO]].ID. |
| `COST_TYPE` | NVARCHAR | NULL | This column specifies the cost type of transaction. |
| `PARENT_CODE` | NVARCHAR | NULL | Holds the parent object code, defaulted to voucher. |
| `FIN_WORK_TYPE` | NUMERIC | NULL | This column refers to the internal ID of lookup value of lookup type Financial Work Type. |
| `RESOURCE_TEAM_ID` | NUMERIC | NULL | This column refers to the Team ID that current transaction resource belongs to. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `EXTERNALBATCHID` | [[PRTIMESHEET]].`PRID` | |
| `EXTERNALTRANSNO` | [[PRTIMEENTRY]].`PRID` | |
| `DEPARTCODE` | [[DEPARTMENTS]].`DEPARTCODE` | |
| `ENTITY` | [[ENTITY]].`ENTITY` | |
| `EMPLYHOMELOCATION` | [[LOCATIONS]].`LOCATONID` | |
| `EMPLYHOMEDEPART` | [[DEPARTMENTS]].`DEPARTCODE` | |
| `CLIENTCLASS` | [[CLNTCLASS]].`CLNTCLASS` | |
| `TRANSCLASS` | [[TRANSCLASS]].`TRANSCLASS` | |
| `RESOURCE_CLASS` | [[PAC_FOS_RESOURCE_CLASS]].`RESOURCE_CLASS` | |
| `WIPCLASS` | [[WIPCLASS]].`WIPCLASS` | |
| `TASK_ID` | [[PRTASK]].`PRID` | |
| `PROJECT_LOCATION` | [[LOCATIONS]].`LOCATIONID` | |
| `PROJECT_DEPARTMENT` | [[DEPARTMENTS]].`DEPARTCODE` | |
| `ROLE_CODE` | [[SRM_RESOURCES]].`UNIQUE_NAME` | |
| `CHARGE_CODE` | [[PRCHARGECODE]].`PREXTERNALID` | |
| `INPUT_TYPE` | [[PRTYPECODE]].`PREXTERNALID` | |
| `PPA_TRANSCONTROLAPINFO_ID` | [[PPA_TRANSCONTROLAPINFO]].`ID` | |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

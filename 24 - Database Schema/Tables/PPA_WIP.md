---
title: PPA_WIP
type: db-table
table: PPA_WIP
columns: 73
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
  - Financial Administration
  - Transactions
fk_targets:
  - CLNTCLASS
  - DEPARTMENTS
  - ENTITY
  - INV_INVESTMENTS
  - LOCATIONS
  - PPA_WIPAPINFO
  - PRCHARGECODE
  - PROJCLASS
  - PRTASK
  - PRTIMEENTRY
  - PRTIMESHEET
  - PRTYPECODE
  - SRM_RESOURCES
  - TRANSCLASS
  - WIPCLASS
fk_sources:
  - CBK_ERRORS
  - CBK_GL_TXNS
  - FIN_ERRORS
  - OLB_GENERATEINFO
  - PAC_CHG_EXCEPTIONS
  - PAC_CHG_TRANSACTIONS
  - PC_BILLINGDETAILALLOCATIONS
  - PPA_BILLINGS
  - PPA_TRANSBILL
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
  - erd/financial-administration
  - erd/transactions
---

# PPA_WIP

> [!info] Description
> This table stores all primary transactions (Labor, Materials, Equipment, and Expense).

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]
- [[_MOC - Financial Administration ERD]]
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TRANSNO` | NUMERIC | NOT NULL | Uniquely identifies each transaction. |
| `APPLYTO` | NUMERIC | NOT NULL | For billing and adjustments, this is a reference number to the TRANSNO column. |
| `SOURCEMODULE` | NUMERIC | NOT NULL | This column refers to the source module where the transaction originated. Values are: - 50 = Transaction originated from CA Clarity XOG (unless otherwise specified) - 51 = Transaction originated from a timesheet in CA Clarity PPM - 52 = Transaction originated from voucher entry of type VOUCHER_EXPENSE - 53 = Transaction originated from voucher entry of type VOUCHER_OTHER |
| `TRANSTYPE` | NVARCHAR | NOT NULL | The type of transaction. Values are: - Labor - Material - Expenses - Equipment - Adjustment |
| `BATCHNO` | NUMERIC | NOT NULL | The number used to group the transactions that are posted in the same batch between the transaction entry and the work in progress (WIP). |
| `ENTRYDATE` | DATE | NOT NULL | The date when the user originally entered the transaction. |
| `LASTUPDATEDATE` | DATE | NOT NULL | The date when the transaction was last updated. |
| `IN_ERROR` | INTEGER | NULL | The column indicates if the transaction is in error. Values are: - 1 = The WIP transaction is in error after getting processed for chargebacks. - 0 = The transaction was processed for chargebacks successfully. |
| `EXTERNALBATCHID` | NVARCHAR | NULL | The External batch ID as specified in the XOG or timesheet. When a timesheet is posted, EXTERNALBATCHID=[[PRTIMESHEET]].PRID and the EXTERNALTRANSNO field is blank. |
| `EXTERNALTRANSNO` | NUMERIC | NULL | For a transaction that is from a time entry, this refers to [[PRTIMEENTRY]].PRID. For imported transactions, this could be a unique ID from an external system. |
| `LOCATIONID` | NVARCHAR | NOT NULL | The location where the activity for this transaction occurred. |
| `DEPARTCODE` | NVARCHAR | NOT NULL | The department where the activity for this transaction occurred. This refers to [[DEPARTMENTS]].DEPARTCODE. |
| `ENTITY` | NVARCHAR | NOT NULL | The entity where the activity for this transaction occurred. This refers to [[ENTITY]].ENTITY. |
| `TRANSDATE` | DATE | NOT NULL | The date when the activity for this transaction occurred. |
| `QUANTITY` | NUMERIC | NOT NULL | The number of units of labor or other items within the activity in this transaction. |
| `COSTRULECODE` | NVARCHAR | NULL | The code used to calculate the factor amount. |
| `BURDENCODE` | NVARCHAR | NULL | The code used to calculate the burden. |
| `OVERHEADCODE` | NVARCHAR | NULL | The code used to calculate the overhead. |
| `CHARGEABLE` | INTEGER | NOT NULL | indicates if the transaction can be charged. |
| `STATUS` | NUMERIC | NOT NULL | Indicates the current status of this transaction. Values are: - 0 = No adjustment, no pending approval for billing - 1 = Adjusted - 2 = Reversed - 4 = Updated - 8 = Processed by billing, approval pending |
| `NOTES` | NVARCHAR | NULL | Any comments by the user who entered the transaction. |
| `INVOICENO` | NVARCHAR | NULL | A number used to group the transactions under a particular invoice. |
| `EMPLYHOMELOCATION` | NVARCHAR | NULL | The location of the employee who performed the activity for this transaction. This refers to [[LOCATIONS]].LOCATONID. |
| `EMPLYHOMEDEPART` | NVARCHAR | NULL | The department of the employee who performed the activity for this transaction. This refers to [[DEPARTMENTS]].DEPARTCODE. |
| `PROJECTTYPE` | NVARCHAR | NOT NULL | This column indicates the project type. Values: - Internal - Standard - Retainer - Contract |
| `CLIENTCLASS` | NVARCHAR | NULL | The classification of the client for whom the activity in this transaction was performed. This refers to [[CLNTCLASS]].CLNTCLASS. |
| `PROJECTCLASS` | NVARCHAR | NULL | This column refers to the project classification ([[PROJCLASS]].PROJCLASS) for this transaction. |
| `TRANSCLASS` | NVARCHAR | NOT NULL | The classification of the transaction. This refers to [[TRANSCLASS]].TRANSCLASS. |
| `RESOURCE_CLASS` | NVARCHAR | NOT NULL | The resource class. |
| `WIPCLASS` | NVARCHAR | NULL | The classification of the transaction in the work in progress (WIP). This refers to [[WIPCLASS]].WIPCLASS. |
| `WORKINT` | NUMERIC | NULL | The working column used for internal processing. |
| `WORKBUF` | NVARCHAR | NULL | The working column used for internal processing. |
| `GLPOSTED` | NVARCHAR | NOT NULL | A flag when set to 1 indicates that the transaction was successfully posted to the general ledger (GL) allocation chargeback module. |
| `GLPERIOD` | NVARCHAR | NULL | The period during which the transaction was posted to the general ledger. |
| `COMPANY_CODE` | NVARCHAR | NULL | The client for whom the activity in this transaction was performed. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project for which the activity in this transaction was performed. |
| `ENTRY_RESOURCE_CODE` | NVARCHAR | NOT NULL | The user who originally entered the transaction. |
| `LASTUPDTDBY_RESOURCE_CODE` | NVARCHAR | NOT NULL | The user who last updated the transaction. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL | The employee who performed the activity in this transaction. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The XML Open Gateway external ID. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | The XML Open Gateway external source identifier. |
| `TASK_ID` | NUMERIC | NULL | The task associated to the transaction. This refers to [[PRTASK]].PRID. |
| `PROJECT_LOCATION` | NVARCHAR | NULL | This column refers to the location ([[LOCATIONS]].LOCATIONID) of the project. |
| `PROJECT_DEPARTMENT` | NVARCHAR | NULL | This column refers to the department ([[DEPARTMENTS]].DEPARTCODE) of the project. |
| `ROLE_CODE` | NVARCHAR | NULL | The role used in the transaction. This refers to [[SRM_RESOURCES]].UNIQUE_NAME for role entries (where SRM_RESOURCES holds entries for both resources and roles). |
| `XOG_EXPORTED` | INTEGER | NULL | A Boolean value indicating if the data row was exported using XOG. It is only used for a XOG reference. It is not used by the application. |
| `XOG_EXPORTED_DATE` | DATE | NULL | The date when data was exported to this table using XOG. This column is used only for XOG reference. It is not used by the application. |
| `PPA_WIPAPINFO_ID` | NUMERIC | NULL | The optional header row for this transaction. This refers to [[PPA_WIPAPINFO]].ID. |
| `CHARGE_CODE` | NVARCHAR | NULL | The charge code. The refers to [[PRCHARGECODE]].PREXTERNALID. |
| `INPUT_TYPE` | NVARCHAR | NULL | The input type code. This refers to [[PRTYPECODE]].PREXTERNALID. |
| `INVESTMENT_ID` | NUMERIC | NULL | This refers to [[INV_INVESTMENTS]].ID and indicates the investment associated with this transaction. |
| `USER_LOV1` | NVARCHAR | NULL | This refers to the lookup PRTIMEENTRY_USERLOV1. This provides extra flexibility for further categorizing a transaction for budgeting and chargeback purposes. |
| `USER_LOV2` | NVARCHAR | NULL | This refers to the lookup PRTIMEENTRY_USERLOV2. This provides extra flexibility for further categorizing a transaction for budgeting and chargeback purposes. |
| `EXPENSE_TYPE` | NVARCHAR | NULL | The expense type. Values are: - CAPEXP = Capital Expense - DEPRECIATION = Depreciation |
| `ON_HOLD` | INTEGER | NULL | This column indicates if the WIP transaction resulted in error during processing of chargebacks. Values are: - 1 = The user acknowledged the chargeback failure on the transaction and put it on hold. - 0 = There is no chargeback failure on the transaction. |
| `WORKINT_SOURCE` | NVARCHAR | NULL | Indicates if a transaction was generated from an incident or an investment. A value of FIN_TXNS indicates an incident transaction. |
| `MONTH_BEGIN` | DATE | NOT NULL | The first date of the month in which the transdate occurs. |
| `MONTH_END` | DATE | NOT NULL |  |
| `COST_TYPE` | NVARCHAR | NULL | This column specifies the cost type of transaction. |
| `RESOURCE_ID` | NUMERIC | NOT NULL |  |
| `EMPLYLOCATIONID` | NUMERIC | NULL | This column refers to the Resource Location ID. |
| `EMPLYDEPARTID` | NUMERIC | NULL | This column refers to the Resource Department ID. |
| `TRANS_CLASS_ID` | NUMERIC | NULL | This column refers to the Transaction Class ID. |
| `RESOURCE_CLASS_ID` | NUMERIC | NULL | This column refers to Resource Class ID. |
| `CHARGE_CODE_ID` | NUMERIC | NULL | This column refers to Chargecode ID. |
| `INPUT_TYPE_ID` | NUMERIC | NULL | This column refers to Input Type ID. |
| `USER_VAL1_ID` | NUMERIC | NULL | This column refers to the User Value 1 ID. |
| `USER_VAL2_ID` | NUMERIC | NULL | This column refers to the User Value 2 ID. |
| `ROLE_CODE_ID` | NUMERIC | NULL | This column refers to Role Code ID. |
| `PROJECT_LOCATION_ID` | NUMERIC | NULL | This column refers to the Investment Location ID. |
| `PROJECT_DEPARTMENT_ID` | NUMERIC | NULL | This column refers to the Investment Department ID. |
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
| `PROJECTCLASS` | [[PROJCLASS]].`PROJCLASS` | |
| `TRANSCLASS` | [[TRANSCLASS]].`TRANSCLASS` | |
| `WIPCLASS` | [[WIPCLASS]].`WIPCLASS` | |
| `TASK_ID` | [[PRTASK]].`PRID` | |
| `PROJECT_LOCATION` | [[LOCATIONS]].`LOCATIONID` | |
| `PROJECT_DEPARTMENT` | [[DEPARTMENTS]].`DEPARTCODE` | |
| `ROLE_CODE` | [[SRM_RESOURCES]].`UNIQUE_NAME` | |
| `PPA_WIPAPINFO_ID` | [[PPA_WIPAPINFO]].`ID` | |
| `CHARGE_CODE` | [[PRCHARGECODE]].`PREXTERNALID` | |
| `INPUT_TYPE` | [[PRTYPECODE]].`PREXTERNALID` | |
| `INVESTMENT_ID` | [[INV_INVESTMENTS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_ERRORS]] | `TRANSNO` | `TRANSNO` |
| [[CBK_GL_TXNS]] | `TRANSACTION_ID` | `TRANSNO` |
| [[FIN_ERRORS]] | `PK_ID` | `TRANSNO` |
| [[OLB_GENERATEINFO]] | `WTRANSNO` | `TRANSNO` |
| [[PAC_CHG_EXCEPTIONS]] | `TRANSNO` | `TRANSNO` |
| [[PAC_CHG_TRANSACTIONS]] | `TRANSNO` | `TRANSNO` |
| [[PC_BILLINGDETAILALLOCATIONS]] | `TRANSNO` | `TRANSNO` |
| [[PPA_BILLINGS]] | `WORKINT` | `TRANSNO` |
| [[PPA_TRANSBILL]] | `WORKINT` | `TRANSNO` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_BILLINGS]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PROJCLASS]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

---
title: DWH_TMP_FIN_TRANSACTION
type: db-table
table: DWH_TMP_FIN_TRANSACTION
columns: 48
audience: dev
domain: development
canonical: true
fk_targets:
  - DEPARTMENTS
  - ENTITY
  - INV_INVESTMENTS
  - LOCATIONS
  - PAC_MNT_RESOURCES
  - PRCHARGECODE
  - PROJCLASS
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
---

# DWH_TMP_FIN_TRANSACTION

> [!info] Description
> Temporary table used to store the financial transactions that have changed or inserted.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TRANSNO` | NUMERIC | NOT NULL | Uniquely identifies each transaction. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project for which the activity in this transaction was performed. |
| `INVESTMENT_ID` | NUMERIC | NULL | This refers to [[INV_INVESTMENTS]].ID and indicates the investment associated with this transaction. |
| `TASK_ID` | NUMERIC | NULL | The task associated to the transaction. This refers to [[PRTASK]].PRID. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL | The employee who performed the activity in this transaction. |
| `RESOURCE_ID` | NUMERIC | NULL | The unique employee id who performed the activity in this transaction. |
| `TRANSCLASS` | NVARCHAR | NOT NULL | The classification of the transaction. This refers to [[TRANSCLASS]].TRANSCLASS. |
| `ENTITY` | NVARCHAR | NOT NULL | The entity where the activity for this transaction occurred. This refers to [[ENTITY]].ENTITY. |
| `WIPCLASS` | NVARCHAR | NULL | The classification of the transaction in the work in progress (WIP). This refers to [[WIPCLASS]].WIPCLASS. |
| `PROJECTCLASS` | NVARCHAR | NULL | This column refers to the project classification ([[PROJCLASS]].PROJCLASS) for this transaction. |
| `COMPANY_CODE` | NVARCHAR | NULL | The client for whom the activity in this transaction was performed. |
| `CHARGE_CODE` | NVARCHAR | NULL | The charge code. The refers to [[PRCHARGECODE]].PREXTERNALID. |
| `COST_TYPE` | NVARCHAR | NULL | This column specifies the cost type of transaction. |
| `INPUT_TYPE` | NVARCHAR | NULL | The input type code. This refers to [[PRTYPECODE]].PREXTERNALID. |
| `USER_LOV1` | NVARCHAR | NULL | This refers to the lookup PRTIMEENTRY_USERLOV1. This provides extra flexibility for further categorizing a transaction for budgeting and chargeback purposes. |
| `USER_LOV2` | NVARCHAR | NULL | This refers to the lookup PRTIMEENTRY_USERLOV2. This provides extra flexibility for further categorizing a transaction for budgeting and chargeback purposes. |
| `RESOURCE_CLASS` | NVARCHAR | NOT NULL | The resource class. |
| `ROLE_CODE` | NVARCHAR | NULL | The role used in the transaction. This refers to [[SRM_RESOURCES]].UNIQUE_NAME for role entries (where SRM_RESOURCES holds entries for both resources and roles). |
| `EMPLYHOMELOCATION` | NVARCHAR | NULL | The location of the employee who performed the activity for this transaction. This refers to [[LOCATIONS]].LOCATONID. |
| `EMPLYHOMEDEPART` | NVARCHAR | NULL | The department of the employee who performed the activity for this transaction. This refers to [[DEPARTMENTS]].DEPARTCODE. |
| `PROJECT_LOCATION` | NVARCHAR | NULL | This column refers to the location ([[LOCATIONS]].LOCATIONID) of the project. |
| `PROJECT_DEPARTMENT` | NVARCHAR | NULL | This column refers to the department ([[DEPARTMENTS]].DEPARTCODE) of the project. |
| `BATCHNO` | NUMERIC | NULL | The number used to group the transactions that are posted in the same batch between the transaction entry and the work in progress (WIP). |
| `STATUS` | NUMERIC | NULL | Indicates the current status of this transaction (0=No Adjustment, 1=Adjusted, 2=Reversed, 4=Updated, 8=Processed by Billing). |
| `INVOICENO` | NVARCHAR | NULL | A number used to group the transactions under a particular invoice. |
| `NOTES` | NVARCHAR | NULL | Any comments by the user who entered the transaction. |
| `EXTERNALBATCHID` | NVARCHAR | NULL | The External batch ID as specified in the XOG or timesheet. When a timesheet is posted, EXTERNALBATCHID=[[PRTIMESHEET]].PRID and the EXTERNALTRANSNO field is blank. |
| `EXTERNALTRANSNO` | NUMERIC | NULL | For a transaction that is from a time entry, this refers to [[PRTIMEENTRY]].PRID. For imported transactions, this could be a unique ID from an external system. |
| `VOUCHERNO` | NVARCHAR | NULL | The voucher number. |
| `PONO` | NVARCHAR | NULL | The purchase order (PO) number. |
| `VENDOR_CODE` | NVARCHAR | NULL | The vendor code. |
| `INCURRED_BY` | NVARCHAR | NULL | The resource who incurs the voucher amount. This refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `DOCUMENT_TYPE` | NUMERIC | NULL | The entry type of the voucher. This is selected from lookup PAC_DOCUMENT_TYPE |
| `WORKINT_SOURCE` | NVARCHAR | NULL | Indicates if a transaction was generated from an incident or an investment. A value of FIN_TXNS indicates an incident transaction. |
| `XOG_EXPORTED` | NUMERIC | NULL | A Boolean value indicating if the data row was exported using XOG. It is only used for a XOG reference. It is not used by the application. |
| `XOG_EXPORTED_DATE` | DATE | NULL | The date when data was exported to this table using XOG. This column is used only for XOG reference. It is not used by the application. |
| `ENTRYDATE` | DATE | NOT NULL | The date when the user originally entered the transaction. |
| `LASTUPDATEDATE` | DATE | NOT NULL | The date when the transaction was last updated. |
| `PPA_WIPAPINFO_ID` | NUMERIC | NULL | This column refers to the unique identifier for a row in the PPA_WIPAPINFO table. |
| `CHARGEABLE` | NUMERIC | NULL | Indicates if the transaction can be charged. |
| `TRANSACTION_DATE` | DATE | NULL | Date the transaction occurred on |
| `QUANTITY` | NUMERIC | NOT NULL | Quantity |
| `LOCATIONID` | NVARCHAR | NULL | The project or resource location depending on financial settings. |
| `DEPARTCODE` | NVARCHAR | NULL | The project or resource department depending on financial settings. |
| `FIN_WORK_TYPE_KEY` | NUMERIC | NULL | This column refers to the Financial Work Type ID. |
| `RESOURCE_TEAM_ID_KEY` | NUMERIC | NULL | This column refers to the Resource Team ID. |
| `RESOURCE_TEAM_NAME` | NVARCHAR | NULL | This column refers to the Resource Team Name. |
| `EXTERNAL_ID` | NVARCHAR | NULL | This column refers to the External ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `INVESTMENT_ID` | [[INV_INVESTMENTS]].`ID` | |
| `TASK_ID` | [[PRTASK]].`PRID` | |
| `TRANSCLASS` | [[TRANSCLASS]].`TRANSCLASS` | |
| `ENTITY` | [[ENTITY]].`ENTITY` | |
| `WIPCLASS` | [[WIPCLASS]].`WIPCLASS` | |
| `PROJECTCLASS` | [[PROJCLASS]].`PROJCLASS` | |
| `CHARGE_CODE` | [[PRCHARGECODE]].`PREXTERNALID` | |
| `INPUT_TYPE` | [[PRTYPECODE]].`PREXTERNALID` | |
| `ROLE_CODE` | [[SRM_RESOURCES]].`UNIQUE_NAME` | |
| `EMPLYHOMELOCATION` | [[LOCATIONS]].`LOCATONID` | |
| `EMPLYHOMEDEPART` | [[DEPARTMENTS]].`DEPARTCODE` | |
| `PROJECT_LOCATION` | [[LOCATIONS]].`LOCATIONID` | |
| `PROJECT_DEPARTMENT` | [[DEPARTMENTS]].`DEPARTCODE` | |
| `EXTERNALBATCHID` | [[PRTIMESHEET]].`PRID` | |
| `EXTERNALTRANSNO` | [[PRTIMEENTRY]].`PRID` | |
| `INCURRED_BY` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |

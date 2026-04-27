---
title: FIN_POSTED_TXNS
type: db-table
table: FIN_POSTED_TXNS
columns: 40
audience: dev
domain: development
canonical: true
erds:
  - Transactions
fk_targets:
  - BIZ_COM_PERIODS
  - CMN_SEC_USERS
  - COSTPLUS
  - DEPARTMENTS
  - IMM_INCIDENTS
  - LOCATIONS
  - PAC_FOS_RESOURCE_CLASS
  - PAC_MNT_RESOURCES
  - PPA_MATRIX
  - PPA_MATRIXVALUES
  - PRCHARGECODE
  - SRM_PROJECTS
  - TRANSCLASS
  - WIPCLASS
fk_sources:
  - FIN_POSTED_TXN_VALUES
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# FIN_POSTED_TXNS

> [!info] Description
> This table is deprecated and should no longer be used.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 09 - Finance]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `BATCH_NO` | NUMERIC | NOT NULL | The grouping number for transactions processed in a batch. Transactions processed in a single batch have the same batch number. |
| `SOURCE_MODULE` | NUMERIC | NOT NULL | The source module as specified in the XOG. |
| `TRANSACTION_TYPE` | NVARCHAR | NOT NULL | This column represents the type of the transaction. Values are: - 0 = LABOR - 1 = MATERIAL - 2 = EQUIPMENT - 3 = EXPENSE |
| `TRANSACTION_DATE` | DATE | NOT NULL | The actual date of the transaction. |
| `ENTRY_DATE` | DATE | NOT NULL | The date when the transaction was entered. |
| `EXTERNAL_BATCH_ID` | NVARCHAR | NULL | Any external batch ID specified in XOG. |
| `EXTERNAL_TRANSACTION_NO` | NUMERIC | NULL | Any external transaction number specified in XOG. |
| `QUANTITY` | NUMERIC | NOT NULL | The quantity of the transaction. |
| `COSTRULE_CODE` | NVARCHAR | NULL | This column is the cost plus code. This refers to [[COSTPLUS]].COSTPLUSCODE. |
| `TRANSCLASS_ID` | NUMERIC | NOT NULL | The transaction class ID. This refers to [[TRANSCLASS]].ID. |
| `WIPCLASS_ID` | NUMERIC | NOT NULL | The WIP class ID. This refers to [[WIPCLASS]].ID. |
| `PRCHARGECODEID` | NUMERIC | NULL | This column refers to the charge code ID. This refers [[PRCHARGECODE]].PRID. |
| `PRTYPECODEID` | NUMERIC | NULL | This column refers to the input type code ID. This refers to the PRTYPECODE table. |
| `INV_OBJECT_LOCATION_ID` | NUMERIC | NULL | The financial location of the investment object on which the transaction occurred. This refers to [[LOCATIONS]].ID. |
| `INV_OBJECT_DEPT_ID` | NUMERIC | NULL | The financial department of the investment object on which the transaction occurred. This refers to [[DEPARTMENTS]].ID. |
| `INV_OBJECT_ID` | NUMERIC | NOT NULL | The ID of the object in the transaction. Currently, this refers [[SRM_PROJECTS]].ID. |
| `INV_TYPE_CODE` | NVARCHAR | NOT NULL | The type of the investment object. Refers to [[SRM_PROJECTS]].INVESTMENT_CODE. The values are: - 0 = ASSET - 1 = APPLICATION - 2 = PRODUCT - 3 = OTHER INVESTMENT |
| `COST_MATRIX_ID` | NUMERIC | NULL | The matrix used for cost calculation. This column refers to [[PPA_MATRIX]].MATRIXKEY. |
| `COST_MATRIXVALUES_ID` | NUMERIC | NULL | The matched matrix row used for the cost calculation. This refers to [[PPA_MATRIXVALUES]].MATRIXROWKEY. |
| `RATE_MATRIX_ID` | NUMERIC | NULL | The matrix used for rate calculation. This refers to [[PPA_MATRIX]].MATRIXKEY. |
| `RATE_MATRIXVALUES_ID` | NUMERIC | NULL | The matched matrix row used for rate calculation. This refers to [[PPA_MATRIXVALUES]].MATRIXROWKEY. |
| `PK_ID` | NUMERIC | NOT NULL | This column refers to the source table for the transaction. Currently, it refers to [[IMM_INCIDENTS]].ID. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | The table name of the source table of the transaction. Currently, this column refers to the IMM_INCIDENTS table. |
| `RESOURCE_ID` | NUMERIC | NOT NULL | The resource performing the transaction. This refers to [[PAC_MNT_RESOURCES]].ID. |
| `RESOURCE_CLASS_ID` | NUMERIC | NOT NULL | The resource class of the resource performing the transaction. This refers to [[PAC_FOS_RESOURCE_CLASS]].ID. |
| `RESOURCE_HOME_LOCATION_ID` | NUMERIC | NULL | The financial location for the resource. This refers to [[LOCATIONS]].ID. |
| `RESOURCE_HOME_DEPT_ID` | NUMERIC | NULL | The financial location for the resource. This refers to [[DEPARTMENTS]].ID. |
| `REQUESTOR_ID` | NUMERIC | NOT NULL | This column represents the user who logged the incident. |
| `REQUESTOR_HOME_LOCATION_ID` | NUMERIC | NULL | The financial location for the requestor. This refers to [[LOCATIONS]].ID. |
| `REQUESTOR_HOME_DEPT_ID` | NUMERIC | NULL | The financial department for the requestor. This refers to [[DEPARTMENTS]].ID. |
| `STATUS` | NUMERIC | NOT NULL | The status of the transaction. |
| `GLPOSTED` | NVARCHAR | NULL | This column indicates if the transaction was processed by the GL Allocations job. Values are: - 0 = Y Posted - 1 = N Unposted |
| `GLPERIOD` | NVARCHAR | NULL | This column references the fiscal period. This refers to [[BIZ_COM_PERIODS]].ID. |
| `XOG_EXPORTED` | INTEGER | NULL | A flag to indicate if row was exported through XOG. Values are: - 0 = Not exported - 1 = Exported |
| `XOG_EXPORTED_DATE` | DATE | NULL | The date when the transaction was exported through XOG. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `COSTRULE_CODE` | [[COSTPLUS]].`COSTPLUSCODE` | |
| `TRANSCLASS_ID` | [[TRANSCLASS]].`ID` | |
| `WIPCLASS_ID` | [[WIPCLASS]].`ID` | |
| `PRCHARGECODEID` | [[PRCHARGECODE]].`PRID` | |
| `INV_OBJECT_LOCATION_ID` | [[LOCATIONS]].`ID` | |
| `INV_OBJECT_DEPT_ID` | [[DEPARTMENTS]].`ID` | |
| `INV_OBJECT_ID` | [[SRM_PROJECTS]].`ID` | |
| `INV_TYPE_CODE` | [[SRM_PROJECTS]].`INVESTMENT_CODE` | |
| `COST_MATRIX_ID` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `COST_MATRIXVALUES_ID` | [[PPA_MATRIXVALUES]].`MATRIXROWKEY` | |
| `RATE_MATRIX_ID` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `RATE_MATRIXVALUES_ID` | [[PPA_MATRIXVALUES]].`MATRIXROWKEY` | |
| `PK_ID` | [[IMM_INCIDENTS]].`ID` | |
| `RESOURCE_ID` | [[PAC_MNT_RESOURCES]].`ID` | |
| `RESOURCE_CLASS_ID` | [[PAC_FOS_RESOURCE_CLASS]].`ID` | |
| `RESOURCE_HOME_LOCATION_ID` | [[LOCATIONS]].`ID` | |
| `RESOURCE_HOME_DEPT_ID` | [[DEPARTMENTS]].`ID` | |
| `REQUESTOR_HOME_LOCATION_ID` | [[LOCATIONS]].`ID` | |
| `REQUESTOR_HOME_DEPT_ID` | [[DEPARTMENTS]].`ID` | |
| `GLPERIOD` | [[BIZ_COM_PERIODS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[FIN_POSTED_TXN_VALUES]] | `POSTED_TXN_ID` | `ID` |

## Related tables (same subject area)

[[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

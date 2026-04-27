---
title: PRCHARGECODE
type: db-table
table: PRCHARGECODE
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Applications
  - Assets
  - Chargebacks
  - Financial Planning
  - Ideas
  - Other Work
  - Products
  - Projects
  - Services
  - Transactions
fk_targets:
  - PRTYPECODE
fk_sources:
  - CBK_GL_ALLOCATION
  - DWH_TMP_FIN_TRANSACTION
  - FIN_POSTED_TXNS
  - INV_INVESTMENTS
  - PAC_FRC_FORECAST_DETAILS
  - PAC_FRC_PROJ_ASSOC
  - PFM_INVESTMENTS
  - PPA_BILLINGS
  - PPA_TRANSBILL
  - PPA_TRANSCONTROL
  - PPA_WIP
  - PRTASK
  - PRTIMEENTRY
tags:
  - dev
  - schema
  - table
  - erd/applications
  - erd/assets
  - erd/chargebacks
  - erd/financial-planning
  - erd/ideas
  - erd/other-work
  - erd/products
  - erd/projects
  - erd/services
  - erd/transactions
---

# PRCHARGECODE

> [!info] Description
> This table stores data on charge codes.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 04 - Time Timesheets and Slicing]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Applications ERD]]
- [[_MOC - Assets ERD]]
- [[_MOC - Chargebacks ERD]]
- [[_MOC - Financial Planning ERD]]
- [[_MOC - Ideas ERD]]
- [[_MOC - Other Work ERD]]
- [[_MOC - Products ERD]]
- [[_MOC - Projects ERD]]
- [[_MOC - Services ERD]]
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID values can be distinguished from a resource in Repository B who has the same prName, prExternalID, and prID values. Note: This value is no longer universally unique, but may be required by client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | A persistent, unique identifier for each row in a table. The system enters the value when you create a new row. It is referenced by other tables using columns to refer to a specific row (for example, PRRESOURCE.PRTYPECODEID refers to [[PRTYPECODE]].PRID). |
| `PREXTERNALID` | NVARCHAR | NULL | This is a user-entered, descriptive column internally forced to be unique and used to identify the object or entity for which the row's data is entered. It is used to reference the data in this table and to provide a shorthand, but meaningful way to refer to the object. |
| `PRNAME` | NVARCHAR | NULL | The name of the charge code. |
| `PRISOPEN` | NUMERIC | NOT NULL | Indicates whether a type code or charge code is used. Values are: - 0 = Not Used - 1, -1 = Used |
| `PRMODBY` | NVARCHAR | NULL | System-generated when a user modifies a row (for example, when a user modifies a time sheet or note). It is the name of the logged-in user. |
| `PRMODTIME` | DATE | NULL | System-generated when a user modifies a row. It is the date and time the last modification occurred. |
| `ALLOCATION_STATUS` | NVARCHAR | NOT NULL | The current allocation status. |
| `USE_IN_FRC_BUDGET` | INTEGER | NOT NULL | Indicates if charge code is used in forecasting or budgeting. Values are: - 0 = Not used in forecasting or budgeting - 1 = Used in forecasting or budgeting |
| `PRPROJECTID` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRID` | [[PRTYPECODE]].`PRID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_ALLOCATION]] | `PRCHARGECODE_ID` | `EXTERNA_ID` |
| [[DWH_TMP_FIN_TRANSACTION]] | `CHARGE_CODE` | `PREXTERNALID` |
| [[FIN_POSTED_TXNS]] | `PRCHARGECODEID` | `PRID` |
| [[INV_INVESTMENTS]] | `CHARGECODEID` | `PRID` |
| [[PAC_FRC_FORECAST_DETAILS]] | `DETAIL2_ID` | `ID` |
| [[PAC_FRC_PROJ_ASSOC]] | `DETAIL2_ID` | `ID` |
| [[PFM_INVESTMENTS]] | `CHARGECODEID` | `PRID` |
| [[PPA_BILLINGS]] | `CHARGE_CODE` | `PREXTERNALID` |
| [[PPA_TRANSBILL]] | `CHARGE_CODE` | `PREXTERNALID` |
| [[PPA_TRANSCONTROL]] | `CHARGE_CODE` | `PREXTERNALID` |
| [[PPA_WIP]] | `CHARGE_CODE` | `PREXTERNALID` |
| [[PRTASK]] | `PRCHARGECODEID` | `PRID` |
| [[PRTIMEENTRY]] | `PRCHARGECODEID` | `PRID` |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[CMN_LOOKUPS]], [[CMN_SEC_USERS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_FINANCIALS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[INV_APPLICATIONS]], [[INV_ASSETS]], [[INV_HIERARCHIES]], [[INV_IDEAS]], [[INV_INVESTMENTS]], [[INV_OTHERS]], [[INV_PRODUCTS]], [[INV_PROJECTS]], [[INV_SERVICES]], [[LOCATIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRASSIGNMENT]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]]

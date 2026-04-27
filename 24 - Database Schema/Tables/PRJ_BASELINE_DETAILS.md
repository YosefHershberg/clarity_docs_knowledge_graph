---
title: PRJ_BASELINE_DETAILS
type: db-table
table: PRJ_BASELINE_DETAILS
columns: 23
audience: dev
domain: development
canonical: true
erds:
  - Applications
  - Assets
  - Datamart
  - Other Work
  - Products
  - Projects
  - Services
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/applications
  - erd/assets
  - erd/datamart
  - erd/other-work
  - erd/products
  - erd/projects
  - erd/services
---

# PRJ_BASELINE_DETAILS

> [!info] Description
> This table stores baseline information for a project and some of its children. One row represents one baseline for one object. Supported objects are PROJECT, ASSIGNMENT, TASK, and TEAM.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 02 - Tasks Assignments and Team]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Applications ERD]]
- [[_MOC - Assets ERD]]
- [[_MOC - Datamart ERD]]
- [[_MOC - Other Work ERD]]
- [[_MOC - Products ERD]]
- [[_MOC - Projects ERD]]
- [[_MOC - Services ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `BASELINE_ID` | NUMERIC | NULL | This refers to a baseline revision row in the PRJ_BASELINES table of which this detail row is a member. |
| `OBJECT_ID` | NUMERIC | NULL | This refers to a row in the project, task, assignment or team table to which this baseline detail is related. |
| `OBJECT_TYPE` | NVARCHAR | NULL | The constant for the object this baseline detail is for. Values are: - ASSIGNMENT - PROJECT - TASK - TEAM |
| `USAGE_SUM` | FLOAT | NULL | Total baselined effort (i.e., actual plus the remaining work) in seconds. |
| `COST_SUM` | NUMERIC | NULL | The total baselined cost for the effort (i.e., the cost of the actual work plus the cost of remaining work). |
| `START_DATE` | DATE | NULL | The baselined start date of the object. |
| `FINISH_DATE` | DATE | NULL | The baselined finish date of the object. |
| `DURATION` | FLOAT | NULL | The baselined duration of the object. |
| `PREXTENSION` | BINARY | NULL | The curves for the baselined effort and the cost of the object. |
| `MSP_DIRTY` | NUMERIC | NOT NULL | Used for integration with Microsoft Project. When this column is non-zero, it indicates a change has been made to the row since the project was last opened in Microsoft Project. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `IS_CURRENT` | NUMERIC | NULL | Indicates if this row is part of a baseline revision currently marked as the current or active revision. |
| `SLICE_STATUS` | NUMERIC | NULL | This column is used by the time slicing job. |
| `EVM_MR_SUM` | NUMERIC | NULL | This column defines the total management reserve for this object at the time the baseline was taken. |
| `EVM_UB_SUM` | NUMERIC | NULL | This column defines the total undistributed budget for this object at the time the baseline was taken. |
| `EVM_BURDEN_FEE` | NUMERIC | NULL | This column defines the total burdening value for burden type Fee at the time this baseline was taken. |
| `EVM_BURDEN_COM` | NUMERIC | NULL | This column defines the total burdening value for burden type Cost of Money at the time this baseline was taken. |
| `EVM_BURDEN_GA` | NUMERIC | NULL | This column defines the total burdening value for burden type GA at the time this baseline was taken. |
| `EVM_BURDEN_OVHD` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_APPLICATIONS]], [[INV_ASSETS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[INV_OTHERS]], [[INV_PRODUCTS]], [[INV_PROJECTS]], [[INV_SERVICES]], [[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_RESOURCES]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]

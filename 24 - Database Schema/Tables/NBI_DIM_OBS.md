---
title: NBI_DIM_OBS
type: db-table
table: NBI_DIM_OBS
columns: 32
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - CMN_SEC_USERS
  - PRJ_OBS_UNITS
fk_sources:
  - NBI_FM_PROJECT_TIME_SUMMARY
  - NBI_RESOURCE_CURRENT_FACTS
  - NBI_RESOURCE_TIME_SUMMARY
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_DIM_OBS

> [!info] Description
> This dimension table stores organizational breakdown structure (OBS) unit information. This table is populated by extracting data from PRJ_OBS_TYPES and PRJ_OBS_UNITS during the datamart extraction.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `OBS_TYPE_ID` | NUMERIC | NOT NULL | This refers to PRJ_OBS_TYPE.ID. |
| `OBS_TYPE_NAME` | NVARCHAR | NOT NULL | The name of OBS type. |
| `OBS_UNIT_ID` | NUMERIC | NOT NULL | This refers to [[PRJ_OBS_UNITS]].ID for this OBS unit. |
| `IS_LEAF` | NUMERIC | NOT NULL | Indicates if the OBS unit is a leaf. Possible values include: - 0 = Is not a leaf OBS unit - 1 = Is a leaf OBS unit |
| `PATH` | NVARCHAR | NOT NULL | The flattened OBS path. |
| `LEVEL0_NAME` | NVARCHAR | NOT NULL | The OBS unit name of level 0. |
| `LEVEL1_NAME` | NVARCHAR | NULL | The OBS unit name of level 1. |
| `LEVEL2_NAME` | NVARCHAR | NULL | The OBS unit name of level 2. |
| `LEVEL3_NAME` | NVARCHAR | NULL | The OBS unit name of level 3. |
| `LEVEL4_NAME` | NVARCHAR | NULL | The OBS unit name of level 4. |
| `LEVEL5_NAME` | NVARCHAR | NULL | The OBS unit name of level 5. |
| `LEVEL6_NAME` | NVARCHAR | NULL | The OBS unit name of level 6. |
| `LEVEL7_NAME` | NVARCHAR | NULL | The OBS unit name of level 7. |
| `LEVEL8_NAME` | NVARCHAR | NULL | The OBS unit name of level 8. |
| `LEVEL9_NAME` | NVARCHAR | NULL | The OBS unit name of level 9. |
| `LEVEL10_NAME` | NVARCHAR | NULL | The OBS unit name of level 10. |
| `LEVEL0_UNIT_ID` | NUMERIC | NOT NULL | The OBS unit ID of level 0. |
| `LEVEL1_UNIT_ID` | NUMERIC | NULL | The OBS unit ID of level 1. |
| `LEVEL2_UNIT_ID` | NUMERIC | NULL | The OBS unit ID of level 2. |
| `LEVEL3_UNIT_ID` | NUMERIC | NULL | The OBS unit ID of level 3. |
| `LEVEL4_UNIT_ID` | NUMERIC | NULL | The OBS unit ID of level 4. |
| `LEVEL5_UNIT_ID` | NUMERIC | NULL | The OBS unit ID of level 5. |
| `LEVEL6_UNIT_ID` | NUMERIC | NULL | the OBS unit ID of level 6. |
| `LEVEL7_UNIT_ID` | NUMERIC | NULL | The OBS unit ID of level 7. |
| `LEVEL8_UNIT_ID` | NUMERIC | NULL | The OBS unit ID of level 8. |
| `LEVEL9_UNIT_ID` | NUMERIC | NULL | The OBS unit ID of level 9. |
| `LEVEL10_UNIT_ID` | NUMERIC | NULL | The OBS unit ID of level 10. |
| `HIERARCHY_LEVEL` | NUMERIC | NOT NULL | The hierarchy level. Possible values are 0 through 10. This column refers to the OBS level defined in the LEVELX_UNIT_ID columns. |
| `CREATED_DATE` | DATE | NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `OBS_UNIT_ID` | [[PRJ_OBS_UNITS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[NBI_FM_PROJECT_TIME_SUMMARY]] | `OBS1_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_FM_PROJECT_TIME_SUMMARY]] | `OBS2_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_FM_PROJECT_TIME_SUMMARY]] | `OBS3_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_FM_PROJECT_TIME_SUMMARY]] | `OBS4_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_FM_PROJECT_TIME_SUMMARY]] | `OBS5_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_CURRENT_FACTS]] | `OBS1_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_CURRENT_FACTS]] | `OBS2_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_CURRENT_FACTS]] | `OBS3_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_CURRENT_FACTS]] | `OBS4_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_CURRENT_FACTS]] | `OBS5_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_TIME_SUMMARY]] | `OBS1_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_TIME_SUMMARY]] | `OBS2_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_TIME_SUMMARY]] | `OBS3_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_TIME_SUMMARY]] | `OBS4_UNIT_ID` | `OBS_UNIT_ID` |
| [[NBI_RESOURCE_TIME_SUMMARY]] | `OBS5_UNIT_ID` | `OBS_UNIT_ID` |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]

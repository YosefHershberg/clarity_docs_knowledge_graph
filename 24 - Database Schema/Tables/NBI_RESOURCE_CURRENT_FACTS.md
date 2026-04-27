---
title: NBI_RESOURCE_CURRENT_FACTS
type: db-table
table: NBI_RESOURCE_CURRENT_FACTS
columns: 25
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - NBI_DIM_OBS
  - SRM_COMPANIES
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_RESOURCE_CURRENT_FACTS

> [!info] Description
> This table stores up-to-date information about all resources in the system.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `RESOURCE_ID` | NUMERIC | NOT NULL | The resource ID. This refers to [[SRM_RESOURCES]].ID. |
| `OBS1_UNIT_ID` | NUMERIC | NULL | The organizational breakdown structure (OBS) 1 unit ID. The refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS2_UNIT_ID` | NUMERIC | NULL | The OBS 2 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS3_UNIT_ID` | NUMERIC | NULL | The OBS 3 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS4_UNIT_ID` | NUMERIC | NULL | The OBS 4 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `OBS5_UNIT_ID` | NUMERIC | NULL | The OBS 5 unit ID. This refers to [[NBI_DIM_OBS]].OBS_UNIT_ID. |
| `MANAGER_ID` | NUMERIC | NULL | The resource's manager ID. This refers to [[SRM_RESOURCES]].ID. |
| `MANAGER_LAST_NAME` | NVARCHAR | NULL | The last name of the resource's manager. |
| `MANAGER_FIRST_NAME` | NVARCHAR | NULL | The first name of the resource's manager. |
| `RESOURCE_COMPANY` | NVARCHAR | NULL | The resource's company name. |
| `RESOURCE_COMPANY_ID` | NVARCHAR | NULL | The resource's company ID. This refers to [[SRM_COMPANIES]].ID. |
| `RESOURCE_CODE` | NVARCHAR | NULL | The resource code. This refers to [[SRM_RESOURCES]].UNIQUE_NAME. |
| `LAST_NAME` | NVARCHAR | NULL | The resource's last name. |
| `FIRST_NAME` | NVARCHAR | NULL | The resource's first name |
| `EXTERNAL_OR_INTERNAL` | NUMERIC | NULL | Determines the resource type. Values are one of the following: - 0 = Labor - 1 = Equipment - 2 = Material - 3 = Expense |
| `IS_ACTIVE` | NUMERIC | NULL | Determines if the row is active. Possible values: - 0 = Inactive - 1 = Active |
| `IS_ROLE` | NUMERIC | NULL | Determines if the resource is a role. Possible values: - 0 = Resource - 1 = Role |
| `ROLE_ID` | NUMERIC | NULL | The resource's role ID. This refers to SRM_RESOURCE.ID. |
| `ROLE_NAME` | NVARCHAR | NULL | The resource's role name. |
| `ENTITY` | NVARCHAR | NULL | The resource's entity. |
| `ENTITY_NAME` | NVARCHAR | NULL | The resource's entity name. |
| `LOCATION` | NVARCHAR | NULL | The resource's financial location. |
| `LOCATION_NAME` | NVARCHAR | NULL | The resource's location name. |
| `DEPARTMENT` | NVARCHAR | NULL | The resource's department. |
| `DEPARTMENT_NAME` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RESOURCE_ID` | [[SRM_RESOURCES]].`ID` | |
| `OBS1_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS2_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS3_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS4_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `OBS5_UNIT_ID` | [[NBI_DIM_OBS]].`OBS_UNIT_ID` | |
| `MANAGER_ID` | [[SRM_RESOURCES]].`ID` | |
| `RESOURCE_COMPANY_ID` | [[SRM_COMPANIES]].`ID` | |
| `RESOURCE_CODE` | [[SRM_RESOURCES]].`UNIQUE_NAME` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RT_FACTS]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]

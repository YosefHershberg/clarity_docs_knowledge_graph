---
title: NBI_RT_FACTS
type: db-table
table: NBI_RT_FACTS
columns: 25
audience: dev
domain: development
canonical: true
erds:
  - Datamart
fk_targets:
  - NBI_DIM_CALENDAR_TIME
  - SRM_COMPANIES
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/datamart
---

# NBI_RT_FACTS

> [!info] Description
> This table stores daily resource information. It stores one row for each resource for each calendar week and month.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `RESOURCE_ID` | NUMERIC | NOT NULL | The resource ID. This refers to [[SRM_RESOURCES]].ID. |
| `CALENDAR_TIME_KEY` | NVARCHAR | NOT NULL | The calendar time key. This refers to [[NBI_DIM_CALENDAR_TIME]].TIME_KEY. |
| `RESOURCE_CODE` | NVARCHAR | NULL | The resource's code. This refers to [[SRM_RESOURCES]].UNIQUE_NAME. |
| `LAST_NAME` | NVARCHAR | NULL | The last name. |
| `FIRST_NAME` | NVARCHAR | NULL | The first name. |
| `ROLE_ID` | NUMERIC | NULL | The role ID for the resource. This refers to [[SRM_RESOURCES]].ID. |
| `ROLE_NAME` | NVARCHAR | NULL | The role name of the resource. |
| `RESOURCE_COMPANY_ID` | NVARCHAR | NULL | The resource's company ID. This refers to [[SRM_COMPANIES]].COMPANY_ID. |
| `RESOURCE_COMPANY` | NVARCHAR | NULL | The resource's company. |
| `EXTERNAL_OR_INTERNAL` | NUMERIC | NULL | External or internal. Possible values: - 0 = Internal - 1 = External |
| `MANAGER_ID` | NUMERIC | NULL | The manager's ID. This refers to [[SRM_RESOURCES]].ID. |
| `MANAGER_LAST_NAME` | NVARCHAR | NULL | The manager's last name. |
| `MANAGER_FIRST_NAME` | NVARCHAR | NULL | The manager's first name. |
| `ENTITY` | NVARCHAR | NULL | The entity code. |
| `ENTITY_NAME` | NVARCHAR | NULL | The entity name. |
| `LOCATION` | NVARCHAR | NULL | The location code. |
| `LOCATION_NAME` | NVARCHAR | NULL | The location name. |
| `DEPARTMENT` | NVARCHAR | NULL | The resource's department code. |
| `DEPARTMENT_NAME` | NVARCHAR | NULL | The department name. |
| `IS_ROLE` | NUMERIC | NULL | Determines if the row refers to a resource or role. Values are: - 0 = Resource - 1 = Role |
| `AVAILABLE_HOURS` | NUMERIC | NULL | The available hours. |
| `ETC_HOURS` | NUMERIC | NULL | The estimate-to-complete (ETC) hours. |
| `ACTUAL_HOURS` | NUMERIC | NULL | The actual hours. |
| `BASE_HOURS` | NUMERIC | NULL | The baseline hours. |
| `ALLOCATED_HOURS` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RESOURCE_ID` | [[SRM_RESOURCES]].`ID` | |
| `CALENDAR_TIME_KEY` | [[NBI_DIM_CALENDAR_TIME]].`TIME_KEY` | |
| `RESOURCE_CODE` | [[SRM_RESOURCES]].`UNIQUE_NAME` | |
| `ROLE_ID` | [[SRM_RESOURCES]].`ID` | |
| `RESOURCE_COMPANY_ID` | [[SRM_COMPANIES]].`COMPANY_ID` | |
| `MANAGER_ID` | [[SRM_RESOURCES]].`ID` | |

## Related tables (same subject area)

[[NBI_CFG_OBS_ASSIGNMENTS]], [[NBI_CFG_STOPLIGHT_QUERIES]], [[NBI_DIM_CALENDAR_TIME]], [[NBI_DIM_FISCAL_TIME]], [[NBI_DIM_OBS]], [[NBI_DIM_OBS_FLAT]], [[NBI_FM_PROJECT_TIME_SUMMARY]], [[NBI_FM_PT_FACTS]], [[NBI_PM_PROJECT_TIME_SUMMARY]], [[NBI_PM_PT_FACTS]], [[NBI_PRJ_MATRIX_DATES]], [[NBI_PROJECT_CURRENT_FACTS]], [[NBI_PROJECT_FORECAST]], [[NBI_PRT_FACTS]], [[NBI_RESOURCE_CURRENT_FACTS]], [[NBI_RESOURCE_TIME_SUMMARY]], [[NBI_RUN_LOGS]], [[NBI_R_FACTS]], [[PRASSIGNMENT]], [[PRJ_BASELINE_DETAILS]], [[PRJ_BLB_SLICEREQUESTS]], [[PRJ_BLB_SLICES]], [[PRJ_RESOURCES]], [[PRTEAM]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]

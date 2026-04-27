---
title: PAC_FRC_FORECAST_PROPERTIES
type: db-table
table: PAC_FRC_FORECAST_PROPERTIES
columns: 25
audience: dev
domain: development
canonical: true
erds:
  - Financial Administration
fk_targets:
  - BIZ_COM_PERIODS
  - CMN_SEC_USERS
  - PAC_MNT_PROJECTS
fk_sources:
  - PAC_FRC_FORECAST_DETAILS
  - PAC_FRC_PROJ_ASSOC
tags:
  - dev
  - schema
  - table
  - erd/financial-administration
---

# PAC_FRC_FORECAST_PROPERTIES

> [!info] Description
> This table stores the general properties for a project plan.This table is obsolete for 8.0 and later releases.

## Subject areas (ERDs)
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to the project ID ([[PAC_MNT_PROJECTS]].ID) for which forecast properties are defined. |
| `REVISION` | NUMERIC | NOT NULL | The revision number. |
| `REVISION_DESCRIPTION` | NVARCHAR | NULL | The description of the plan revision. |
| `STATUS` | NUMERIC | NOT NULL | The status of the project plan. Values are: - 0 = Forecast not submitted - 1 = Submitted, but not approved - 2 = Approved |
| `PERIOD_TYPE` | NVARCHAR | NULL | This column indicates the plan period type. It is one of the values from the lookup values of lookup type PERIOD_TYPE. |
| `START_PERIOD` | NUMERIC | NOT NULL | The start time period. This refers to [[BIZ_COM_PERIODS]].ID. |
| `END_PERIOD` | NUMERIC | NOT NULL | The end time period. This refers to [[BIZ_COM_PERIODS]].ID. |
| `UNIT_OF_MEASURE` | NVARCHAR | NULL | The unit of measure, such as hour, day and so on. |
| `BUSINESS_UNIT_NUMBER` | NUMERIC | NULL | The OBS unit ID. This refers to the PRJ_OBS_UNITS table. |
| `DEFAULT_VIEW` | NVARCHAR | NULL | The default view of the plan. These are the lookup values for the lookup type PAC_FRC_PLAN_COMPARISONS. Values are: - 1 = All - 2 = Plan only - 3 = Plan and Actuals - 4 = Plan and Variance |
| `SHOW_UNITS` | INTEGER | NOT NULL | Indicates whether the units on the forecast view are displayed. |
| `SHOW_COST` | INTEGER | NOT NULL | Indicates whether the cost on the forecast view is displayed. |
| `SHOW_REVENUE` | INTEGER | NOT NULL | Indicates whether the revenue on the forecast view are displayed. |
| `EDIT_UNITS` | INTEGER | NOT NULL | Indicates whether you can edit units on the forecast edit page. |
| `EDIT_COST` | INTEGER | NOT NULL | Indicates whether you can edit cost from the forecast edit page. |
| `EDIT_REVENUE` | INTEGER | NOT NULL | Indicates whether you can edit revenue from the forecast edit page. |
| `PERIODS_PER_SCREEN` | NUMERIC | NOT NULL | Indicates the number of periods shown per page. |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. If project is not financially enabled then the value is "System". If the project is financially enabled then the value is one of the following: - 1 = Home - 2 = Billing |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `USE_DETAIL_TYPE` | NUMERIC | NOT NULL | Indicates the detail type or the plan by option. Value are: - 0 = Transaction class - 1 = Roles - 2 = Charge codes - 3 = Transaction class and charge codes |
| `FORECAST_TYPE` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PROJECT_ID` | [[PAC_MNT_PROJECTS]].`ID` | |
| `START_PERIOD` | [[BIZ_COM_PERIODS]].`ID` | |
| `END_PERIOD` | [[BIZ_COM_PERIODS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PAC_FRC_FORECAST_DETAILS]] | `FORECAST_ID` | `ID` |
| [[PAC_FRC_PROJ_ASSOC]] | `FORECAST_ID` | `ID` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PROJCLASS]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

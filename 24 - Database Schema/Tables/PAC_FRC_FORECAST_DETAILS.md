---
title: PAC_FRC_FORECAST_DETAILS
type: db-table
table: PAC_FRC_FORECAST_DETAILS
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Financial Administration
fk_targets:
  - BIZ_COM_PERIODS
  - CMN_SEC_USERS
  - PAC_FRC_FORECAST_PROPERTIES
  - PRCHARGECODE
fk_sources:
  - PAC_FRC_FORECAST_VALUES
tags:
  - dev
  - schema
  - table
  - erd/financial-administration
---

# PAC_FRC_FORECAST_DETAILS

> [!info] Description
> This table stores details for each line item of a plan during a particular period. This table is obsolete for 8.0 and later releases.

## Subject areas (ERDs)
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `FORECAST_ID` | NUMERIC | NOT NULL | This refers to [[PAC_FRC_FORECAST_PROPERTIES]].ID. |
| `PERIOD_ID` | NUMERIC | NOT NULL | This column refers to [[BIZ_COM_PERIODS]].ID. |
| `DETAIL_ID` | NUMERIC | NOT NULL | The ID of a table. The table is determined by the plan by the following options: - Transaction class = TRANSCLASS table - Chargecodes = PRCHARGECODE table - Roles = SRM_RESOURCES table |
| `DETAIL2_ID` | NUMERIC | NULL | The second detail level used to plan against when planning by transaction class and charge code. It is null when planning by transaction class, role or charge code only. This refers to the [[PRCHARGECODE]].ID. |
| `UNITS` | NUMERIC | NULL | Indicates the number of units. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `FORECAST_ID` | [[PAC_FRC_FORECAST_PROPERTIES]].`ID` | |
| `PERIOD_ID` | [[BIZ_COM_PERIODS]].`ID` | |
| `DETAIL2_ID` | [[PRCHARGECODE]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PAC_FRC_FORECAST_VALUES]] | `FORECAST_DETAILS_ID` | `ID` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PROJCLASS]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

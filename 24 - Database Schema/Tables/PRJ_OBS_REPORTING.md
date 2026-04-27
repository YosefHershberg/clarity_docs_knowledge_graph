---
title: PRJ_OBS_REPORTING
type: db-table
table: PRJ_OBS_REPORTING
columns: 19
audience: dev
domain: development
canonical: true
erds:
  - Organizational Breakdown Structure
fk_targets:
  - CMN_SEC_USERS
  - PRJ_OBS_TYPES
  - PRJ_OBS_UNITS
tags:
  - dev
  - schema
  - table
  - erd/organizational-breakdown-structure
---

# PRJ_OBS_REPORTING

> [!info] Description
> This table is obsolete. Use the NBI_DIM_OBS table, instead. This denormalized table was used for reporting and stores the names of all the levels that are parents of a given organizational breakdown structure (OBS) unit. Only levels that are above the unit have valid values.

## Subject areas (ERDs)
- [[_MOC - Organizational Breakdown Structure ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TYPE_ID` | NUMERIC | NOT NULL | This refers to [[PRJ_OBS_TYPES]].ID. |
| `UNIT_ID` | NUMERIC | NOT NULL | This refers to [[PRJ_OBS_UNITS]].ID. |
| `MAXIMUM_DEPTH` | NUMERIC | NOT NULL | The level of OBS unit. |
| `TEMP_PARENT_ID` | NUMERIC | NULL | Internal use only. |
| `LEVEL1_VALUE` | NVARCHAR | NULL | The name of level 1 unit in the tree down to this unit. |
| `LEVEL2_VALUE` | NVARCHAR | NULL | The name of level 2 unit in the tree down to this unit. |
| `LEVEL3_VALUE` | NVARCHAR | NULL | The name of level 3 unit in the tree down to this unit. |
| `LEVEL4_VALUE` | NVARCHAR | NULL | The name of level 4 unit in the tree down to this unit. |
| `LEVEL5_VALUE` | NVARCHAR | NULL | The name of level 5 unit in the tree down to this unit. |
| `LEVEL6_VALUE` | NVARCHAR | NULL | The name of level 6 unit in the tree down to this unit. |
| `LEVEL7_VALUE` | NVARCHAR | NULL | The name of level 7 unit in the tree down to this unit. |
| `LEVEL8_VALUE` | NVARCHAR | NULL | The name of level 8 unit in the tree down to this unit. |
| `LEVEL9_VALUE` | NVARCHAR | NULL | The name of level 9 unit in the tree down to this unit. |
| `LEVEL10_VALUE` | NVARCHAR | NULL | The name of level 10 unit in the tree down to this unit. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TYPE_ID` | [[PRJ_OBS_TYPES]].`ID` | |
| `UNIT_ID` | [[PRJ_OBS_UNITS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[OBS_UNITS_FLAT_BY_MODE]], [[PRJ_OBS_ASSOCIATIONS]], [[PRJ_OBS_LABELS]], [[PRJ_OBS_LEVELS]], [[PRJ_OBS_OBJECT_TYPES]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PRJ_OBS_UNITS_FLAT]]

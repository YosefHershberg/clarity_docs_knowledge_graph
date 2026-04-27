---
title: PRJ_OBS_LABELS
type: db-table
table: PRJ_OBS_LABELS
columns: 16
audience: dev
domain: development
canonical: true
erds:
  - Organizational Breakdown Structure
fk_targets:
  - CMN_SEC_USERS
  - PRJ_OBS_TYPES
tags:
  - dev
  - schema
  - table
  - erd/organizational-breakdown-structure
---

# PRJ_OBS_LABELS

> [!info] Description
> This table is obsolete. Use the NBI_DIM_OBS table, instead. This denormalized table was used for reporting and stores the names of all the levels in an organizational breakdown structure (OBS).

## Subject areas (ERDs)
- [[_MOC - Organizational Breakdown Structure ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TYPE_ID` | NUMERIC | NOT NULL | This refers to [[PRJ_OBS_TYPES]].ID. |
| `LEVEL1_LABEL` | NVARCHAR | NULL | The label for level 1 in the OBS. |
| `LEVEL2_LABEL` | NVARCHAR | NULL | The label for level 2 in the OBS. |
| `LEVEL3_LABEL` | NVARCHAR | NULL | The label for level 3 in the OBS. |
| `LEVEL4_LABEL` | NVARCHAR | NULL | The label for level 4 in the OBS. |
| `LEVEL5_LABEL` | NVARCHAR | NULL | The label for level 5 in the OBS. |
| `LEVEL6_LABEL` | NVARCHAR | NULL | The label for level 6 in the OBS. |
| `LEVEL7_LABEL` | NVARCHAR | NULL | The label for level 7 in the OBS. |
| `LEVEL8_LABEL` | NVARCHAR | NULL | The label for level 8 in the OBS. |
| `LEVEL9_LABEL` | NVARCHAR | NULL | The label for level 9 in the OBS. |
| `LEVEL10_LABEL` | NVARCHAR | NULL | The label for level 10 in the OBS. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TYPE_ID` | [[PRJ_OBS_TYPES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[OBS_UNITS_FLAT_BY_MODE]], [[PRJ_OBS_ASSOCIATIONS]], [[PRJ_OBS_LEVELS]], [[PRJ_OBS_OBJECT_TYPES]], [[PRJ_OBS_REPORTING]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PRJ_OBS_UNITS_FLAT]]

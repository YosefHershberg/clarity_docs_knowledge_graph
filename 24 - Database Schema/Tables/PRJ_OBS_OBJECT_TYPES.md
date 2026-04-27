---
title: PRJ_OBS_OBJECT_TYPES
type: db-table
table: PRJ_OBS_OBJECT_TYPES
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Organizational Breakdown Structure
fk_targets:
  - CMN_SEC_USERS
  - ODF_OBJECTS
tags:
  - dev
  - schema
  - table
  - erd/organizational-breakdown-structure
---

# PRJ_OBS_OBJECT_TYPES

> [!info] Description
> This table stores the list of object types that may be associated with an organizational breakdown structure (OBS).

## Subject areas (ERDs)
- [[_MOC - Organizational Breakdown Structure ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TYPE_ID` | NUMERIC | NOT NULL | This refers to the OBS_TYPES table. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | Defines the object that is linked to the specified OBS. This refers to [[ODF_OBJECTS]].OBS_CODE. |
| `IS_LEAF_ONLY` | NUMERIC | NOT NULL | If true, indicates that objects of this type may only be associated with leaf units within the OBS Type. The leaf unit is defined as a unit with no children units. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `ASSOC_ATT_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TABLE_NAME` | [[ODF_OBJECTS]].`OBS_CODE` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[OBS_UNITS_FLAT_BY_MODE]], [[PRJ_OBS_ASSOCIATIONS]], [[PRJ_OBS_LABELS]], [[PRJ_OBS_LEVELS]], [[PRJ_OBS_REPORTING]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PRJ_OBS_UNITS_FLAT]]

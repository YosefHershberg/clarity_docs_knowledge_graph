---
title: PRJ_OBS_LEVELS
type: db-table
table: PRJ_OBS_LEVELS
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Organizational Breakdown Structure
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/organizational-breakdown-structure
---

# PRJ_OBS_LEVELS

> [!info] Description
> This table stores the mapping of the tree depth to a description. This table is primarily for use in reporting.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 05 - OBS]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Organizational Breakdown Structure ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TYPE_ID` | NUMERIC | NOT NULL | This refers to the OBS_TYPES table. |
| `OBS_LEVEL` | NUMERIC | NOT NULL | The level of OBS to associate with this name (i.e., 1, 2, 3). This column maps to the depth of the OBS units at this level. This table must be non-sparse. That is, every depth in the OBS must be represented with no gaps or run-overs. This column must be maintained when manipulating this table and also when manipulating and building OBS units. |
| `NAME` | NVARCHAR | NULL | The value associated with this level of the OBS. It is used primarily for reporting purposes. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[OBS_UNITS_FLAT_BY_MODE]], [[PRJ_OBS_ASSOCIATIONS]], [[PRJ_OBS_LABELS]], [[PRJ_OBS_OBJECT_TYPES]], [[PRJ_OBS_REPORTING]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PRJ_OBS_UNITS_FLAT]]

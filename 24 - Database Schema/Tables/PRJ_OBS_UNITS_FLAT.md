---
title: PRJ_OBS_UNITS_FLAT
type: db-table
table: PRJ_OBS_UNITS_FLAT
columns: 7
audience: dev
domain: development
canonical: true
erds:
  - Organizational Breakdown Structure
fk_targets:
  - CMN_SEC_USERS
  - PRJ_OBS_UNITS
tags:
  - dev
  - schema
  - table
  - erd/organizational-breakdown-structure
---

# PRJ_OBS_UNITS_FLAT

> [!info] Description
> This table stores the flattened organizational breakdown structure (OBS) relationship. It holds one row for each child-to-ancestor relationship along the OBS hierarchy, including one for node-to-self.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 05 - OBS]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Organizational Breakdown Structure ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `UNIT_ID` | NUMERIC | NOT NULL | The unit ID. This refers to [[PRJ_OBS_UNITS]].ID. |
| `BRANCH_UNIT_ID` | NUMERIC | NOT NULL | The ancestor (or self) unit. This refers to [[PRJ_OBS_UNITS]].ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `UNIT_ID` | [[PRJ_OBS_UNITS]].`ID` | |
| `BRANCH_UNIT_ID` | [[PRJ_OBS_UNITS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[OBS_UNITS_FLAT_BY_MODE]], [[PRJ_OBS_ASSOCIATIONS]], [[PRJ_OBS_LABELS]], [[PRJ_OBS_LEVELS]], [[PRJ_OBS_OBJECT_TYPES]], [[PRJ_OBS_REPORTING]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]]

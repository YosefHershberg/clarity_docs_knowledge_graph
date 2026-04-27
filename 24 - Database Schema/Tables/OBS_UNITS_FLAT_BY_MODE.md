---
title: OBS_UNITS_FLAT_BY_MODE
type: db-table
table: OBS_UNITS_FLAT_BY_MODE
columns: 3
audience: dev
domain: development
canonical: true
erds:
  - Organizational Breakdown Structure
fk_targets:
  - PRJ_OBS_UNITS
tags:
  - dev
  - schema
  - table
  - erd/organizational-breakdown-structure
---

# OBS_UNITS_FLAT_BY_MODE

> [!info] Description
> This table stores all the possible straight line links from an OBS Unit via the parent and child relationships. It also defines how the two units are related.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 05 - OBS]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Organizational Breakdown Structure ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `UNIT_ID` | NUMERIC | NOT NULL | This is the source of the mapping pair. With this ID all related OBS units can be found. This refers to [[PRJ_OBS_UNITS]].ID. |
| `UNIT_MODE` | NVARCHAR | NOT NULL | Defines the relationship between the two unit IDs. Values are: - OBS_UNIT_ONLY - Unit Only - OBS_UNIT_AND_CHILDREN - Unit and descendants - OBS_UNIT_AND_ANCESTORS - Unit and ancestors - OBS_UNIT_CHILD_AND_ANCESTORS - Unit, descendants and ancestors |
| `LINKED_UNIT_ID` | NUMERIC | NOT NULL | This is destination of mapping pair. This is ID for unit that’s related to unit_id for this record. This refers to [[PRJ_OBS_UNITS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `UNIT_ID` | [[PRJ_OBS_UNITS]].`ID` | |
| `LINKED_UNIT_ID` | [[PRJ_OBS_UNITS]].`ID` | |

## Related tables (same subject area)

[[PRJ_OBS_ASSOCIATIONS]], [[PRJ_OBS_LABELS]], [[PRJ_OBS_LEVELS]], [[PRJ_OBS_OBJECT_TYPES]], [[PRJ_OBS_REPORTING]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PRJ_OBS_UNITS_FLAT]]

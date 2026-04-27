---
title: PRJ_OBS_UNITS
type: db-table
table: PRJ_OBS_UNITS
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Departments
  - Organizational Breakdown Structure
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - DEPARTMENTS
  - INV_INVESTMENTS
  - LOCATIONS
  - NBI_CFG_OBS_ASSIGNMENTS
  - NBI_DIM_OBS
  - OBS_UNITS_FLAT_BY_MODE
  - PFM_INVESTMENTS
  - PRJ_OBS_REPORTING
  - PRJ_OBS_UNITS_FLAT
  - PRTEAM
tags:
  - dev
  - schema
  - table
  - erd/departments
  - erd/organizational-breakdown-structure
---

# PRJ_OBS_UNITS

> [!info] Description
> This table stores the actual organizational breakdown structure (OBS) units including the parent mapping that gives the hierarchy.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 05 - OBS]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Departments ERD]]
- [[_MOC - Organizational Breakdown Structure ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TYPE_ID` | NUMERIC | NOT NULL | This refers to the OBS_TYPES table. |
| `UNIQUE_NAME` | NVARCHAR | NULL | This column refers to the user-entered unique identifier for this OBS unit. It must be unique within the OBS type. |
| `PARENT_ID` | NUMERIC | NULL | This refers to the OBS_UNIT parent record, which is the basis of hierarchy. |
| `NAME` | NVARCHAR | NULL | The name of OBS unit. |
| `DEPTH` | NUMERIC | NULL | An internal column indicating the depth of this node in the hierarchy. This column must be maintained at all times and recalculated upon any unit creation or reorganization. This value must map to a row in the OBS_LEVELS table. If none exists, a new record will be created in OBS_LEVELS to match the new depth with a name of "Unlabelled". |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[DEPARTMENTS]] | `OBS_UNIT_ID` | `ID` |
| [[INV_INVESTMENTS]] | `RSF_OBS_UNIT` | `ID` |
| [[LOCATIONS]] | `OBS_UNIT_ID` | `ID` |
| [[NBI_CFG_OBS_ASSIGNMENTS]] | `OBS_UNIT_DEFAULT` | `ID` |
| [[NBI_DIM_OBS]] | `OBS_UNIT_ID` | `ID` |
| [[OBS_UNITS_FLAT_BY_MODE]] | `UNIT_ID` | `ID` |
| [[OBS_UNITS_FLAT_BY_MODE]] | `LINKED_UNIT_ID` | `ID` |
| [[PFM_INVESTMENTS]] | `RSF_OBS_UNIT` | `ID` |
| [[PRJ_OBS_REPORTING]] | `UNIT_ID` | `ID` |
| [[PRJ_OBS_UNITS_FLAT]] | `UNIT_ID` | `ID` |
| [[PRJ_OBS_UNITS_FLAT]] | `BRANCH_UNIT_ID` | `ID` |
| [[PRTEAM]] | `RSF_OBSUNIT_ID` | `ID` |

## Related tables (same subject area)

[[CLNTSUPP]], [[DEPARTMENTS]], [[DPT_KEYMETRICS]], [[DPT_SUBSCRIPTIONS]], [[ENTITY]], [[FIN_FINANCIALS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[OBS_UNITS_FLAT_BY_MODE]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PRJ_OBS_ASSOCIATIONS]], [[PRJ_OBS_LABELS]], [[PRJ_OBS_LEVELS]], [[PRJ_OBS_OBJECT_TYPES]], [[PRJ_OBS_REPORTING]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS_FLAT]]

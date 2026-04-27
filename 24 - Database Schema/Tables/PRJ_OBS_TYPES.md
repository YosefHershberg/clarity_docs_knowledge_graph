---
title: PRJ_OBS_TYPES
type: db-table
table: PRJ_OBS_TYPES
columns: 12
audience: dev
domain: development
canonical: true
erds:
  - Departments
  - Organizational Breakdown Structure
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - ENTITY
  - NBI_CFG_OBS_ASSIGNMENTS
  - NBI_DIM_OBS_FLAT
  - PRJ_OBS_LABELS
  - PRJ_OBS_REPORTING
tags:
  - dev
  - schema
  - table
  - erd/departments
  - erd/organizational-breakdown-structure
---

# PRJ_OBS_TYPES

> [!info] Description
> This table stores the list of available organizational breakdown structure (OBS) hierarchies.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 05 - OBS]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Departments ERD]]
- [[_MOC - Organizational Breakdown Structure ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `UNIQUE_NAME` | NVARCHAR | NULL | This column refers to the user-entered unique identifier for this OBS. |
| `NAME` | NVARCHAR | NULL | The name of the OBS type. |
| `CATEGORY` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `DESCRIPTION` | NVARCHAR | NULL | The description of the OBS type. |
| `OBS_TYPE_CODE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | Indicates if this is a system row. Set to 0 since no OBSs are seeded. Values are: - 0 = Non-system row and can be edited - 1 = System (seeded) row and cannot be edited |
| `IS_SECURITY` | NUMERIC | NOT NULL | Indicates if security is enabled. Values are: - 0 = Not enabled - 1 = Enabled |
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
| [[ENTITY]] | `ORG_CHART_OBS_TYPE_ID` | `ID` |
| [[ENTITY]] | `GEO_CHART_OBS_TYPE_ID` | `ID` |
| [[NBI_CFG_OBS_ASSIGNMENTS]] | `OBS_TYPE_ID` | `ID` |
| [[NBI_DIM_OBS_FLAT]] | `PARENT_OBS_UNIT_ID` | `ID` |
| [[NBI_DIM_OBS_FLAT]] | `CHILD_OBS_UNIT_ID` | `ID` |
| [[PRJ_OBS_LABELS]] | `TYPE_ID` | `ID` |
| [[PRJ_OBS_REPORTING]] | `TYPE_ID` | `ID` |

## Related tables (same subject area)

[[CLNTSUPP]], [[DEPARTMENTS]], [[DPT_KEYMETRICS]], [[DPT_SUBSCRIPTIONS]], [[ENTITY]], [[FIN_FINANCIALS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[OBS_UNITS_FLAT_BY_MODE]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PRJ_OBS_ASSOCIATIONS]], [[PRJ_OBS_LABELS]], [[PRJ_OBS_LEVELS]], [[PRJ_OBS_OBJECT_TYPES]], [[PRJ_OBS_REPORTING]], [[PRJ_OBS_UNITS]], [[PRJ_OBS_UNITS_FLAT]]

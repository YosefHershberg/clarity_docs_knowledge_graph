---
title: PRJ_PROJECT_DEPENDS
type: db-table
table: PRJ_PROJECT_DEPENDS
columns: 7
audience: dev
domain: development
canonical: true
erds:
  - Projects
fk_targets:
  - CMN_SEC_USERS
  - SRM_PROJECTS
tags:
  - dev
  - schema
  - table
  - erd/projects
---

# PRJ_PROJECT_DEPENDS

> [!info] Description
> This table stores investment dependencies that are used by portfolio scenario generation.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 02 - Tasks Assignments and Team]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Projects ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `PRINCIPAL_ID` | NUMERIC | NOT NULL | The ID of the principal investment that the dependent investment depends on. This refers to [[SRM_PROJECTS]].ID. |
| `DEPENDENT_ID` | NUMERIC | NOT NULL | The ID of the investment that depends on the principal investment. This refers ID to [[SRM_PROJECTS]].ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRINCIPAL_ID` | [[SRM_PROJECTS]].`ID` | |
| `DEPENDENT_ID` | [[SRM_PROJECTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[INV_PROJECTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]]

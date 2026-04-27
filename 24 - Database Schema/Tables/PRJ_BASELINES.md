---
title: PRJ_BASELINES
type: db-table
table: PRJ_BASELINES
columns: 12
audience: dev
domain: development
canonical: true
erds:
  - Applications
  - Assets
  - Other Work
  - Products
  - Projects
  - Services
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - INV_INVESTMENTS
  - PFM_INVESTMENTS
tags:
  - dev
  - schema
  - table
  - erd/applications
  - erd/assets
  - erd/other-work
  - erd/products
  - erd/projects
  - erd/services
---

# PRJ_BASELINES

> [!info] Description
> This table stores multiple baseline revisions for projects. Each row represents one baseline revision for one project.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 02 - Tasks Assignments and Team]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Applications ERD]]
- [[_MOC - Assets ERD]]
- [[_MOC - Other Work ERD]]
- [[_MOC - Products ERD]]
- [[_MOC - Projects ERD]]
- [[_MOC - Services ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `PROJECT_ID` | NUMERIC | NULL | This column refers to the project for which this baseline revision is associated. |
| `OBJECT_TYPE` | NVARCHAR | NOT NULL |  |
| `NAME` | NVARCHAR | NULL | A name given to this baseline revision when it is created. |
| `CODE` | NVARCHAR | NOT NULL | A short name given to this baseline revision when it is created. It must be unique across all revisions for a given project. |
| `DESCRIPTION` | NVARCHAR | NULL | The long description given to this baseline revision when it was created. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `IS_CURRENT` | NUMERIC | NULL | Indicates whether this baseline revision is currently marked as the current or active revision. |
| `SLICE_STATUS` | NUMERIC | NULL | Used by the time slicing job. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[INV_INVESTMENTS]] | `BASELINE_ID` | `ID` |
| [[PFM_INVESTMENTS]] | `BASELINE_ID` | `ID` |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_APPLICATIONS]], [[INV_ASSETS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[INV_OTHERS]], [[INV_PRODUCTS]], [[INV_PROJECTS]], [[INV_SERVICES]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]]

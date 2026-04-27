---
title: INV_HIERARCHIES
type: db-table
table: INV_HIERARCHIES
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Applications
  - Assets
  - Ideas
  - Investments
  - Other Work
  - Products
  - Projects
  - Services
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/applications
  - erd/assets
  - erd/ideas
  - erd/investments
  - erd/other-work
  - erd/products
  - erd/projects
  - erd/services
---

# INV_HIERARCHIES

> [!info] Description
> This table stores hierarchical relationship information between investments. It maps the parent to child relationships and also indicates what percentage of a child investment is allocated.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 01 - Investments and Projects]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Applications ERD]]
- [[_MOC - Assets ERD]]
- [[_MOC - Ideas ERD]]
- [[_MOC - Investments ERD]]
- [[_MOC - Other Work ERD]]
- [[_MOC - Products ERD]]
- [[_MOC - Projects ERD]]
- [[_MOC - Services ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `PARENT_ID` | NUMERIC | NULL | This column provides a reference to the parent investment. The value corresponds to the ID found in INV_INVESTMENTS. |
| `CHILD_ID` | NUMERIC | NOT NULL | This column provides a reference to the child investment. The value corresponds to the ID found in INV_INVESTMENTS. |
| `DEFAULT_ALLOC_PCT` | NUMERIC | NULL | This column indicates the default percentage allocated from the child investment to the parent investment. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column provides the date when the record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column indicates the user who last updated the record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CMN_SEC_USERS]], [[FIN_FINANCIALS]], [[INV_APPLICATIONS]], [[INV_ASSETS]], [[INV_FLAT_HIERARCHIES]], [[INV_IDEAS]], [[INV_INVESTMENTS]], [[INV_INVESTMENT_ALLOCS_FLAT]], [[INV_OTHERS]], [[INV_PRODUCTS]], [[INV_PROJECTS]], [[INV_SERVICES]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[ODF_OBJECT_INSTANCE_MAPPING]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]]

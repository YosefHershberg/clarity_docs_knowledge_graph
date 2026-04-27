---
title: PRDEPENDENCY
type: db-table
table: PRDEPENDENCY
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Projects
tags:
  - dev
  - schema
  - table
  - erd/projects
---

# PRDEPENDENCY

> [!info] Description
> This table stores dependency relationships between project tasks and to enforce rules accordingly.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 02 - Tasks Assignments and Team]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Projects ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. While somewhat legacy in nature, this column ensures the row is unique across all rows in the table and can also be used as a foreign lookup by other tables. |
| `PRID` | NUMERIC | NULL | Uniquely identifies a row in this table. |
| `PRPREDTASKID` | NUMERIC | NULL | This ID refers to a row in the PRTASK table specified by the PRID column. The task referenced represents the predecessor of the dependency relationship. |
| `PRSUCCTASKID` | NUMERIC | NULL | This ID refers to a row in the PRTASK table specified by the PRID column. The task referenced represents the successor of the dependency relationship. |
| `PRTYPE` | NUMERIC | NULL | Describes the relationship between the predecessor and successor tasks in the dependency. Values are: - 0 = Finish - Start - 1 = Start - Start - 2 = Finish - Finish - 3 = Start - Finish |
| `PRAMOUNT` | FLOAT | NULL | The amount of gap, lag, or overlap in the dependency (negative amounts represent overlap). For example, if the lag is 3 and the type is "Finish-Start", the successor task will start three days after the predecessor task finishes. |
| `PRAMOUNTTYPE` | NUMERIC | NULL | Describes how the dependency lag (amount) is used and displayed. Values are: - 0 = Amount is in days - 1 = Amount is a percentage |
| `PRMODBY` | NVARCHAR | NULL | The resource who last updated this row. This refers to the CMN_SEC_USERS table. |
| `PRMODTIME` | DATE | NULL |  |
| `PRLAGFORMAT` | NUMERIC | NULL | This column indicates the format of the lead/lag value in a task dependency within a Microsoft Project plan. |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[INV_PROJECTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]]

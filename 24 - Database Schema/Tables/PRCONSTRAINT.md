---
title: PRCONSTRAINT
type: db-table
table: PRCONSTRAINT
columns: 11
audience: dev
domain: development
canonical: true
erds:
  - Projects
fk_targets:
  - CMN_SEC_USERS
  - PRTASK
tags:
  - dev
  - schema
  - table
  - erd/projects
---

# PRCONSTRAINT

> [!info] Description
> This table stores data project task constraint data. For example, a constraint may be used to start a given task on or before a given date. Constraints are used by schedulers (e.g., Microsoft Project and Open Workbench) and in .

## Subject areas (ERDs)
- [[_MOC - Projects ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row is unique across all rows in the table. It can also be used as a foreign lookup by other tables. |
| `PRID` | NUMERIC | NULL | Uniquely identifies a row in this table. |
| `PRTASKID` | NUMERIC | NULL | This refers to [[PRTASK]].PRID for the task this constraint is attached to. |
| `PRTYPE` | NUMERIC | NULL | Type of constraint. Values are: - 0 = Obsolete value means no constraint - 1 = Start as late as possible - 2 = Start as soon as possible - 3 = Finish no earlier than - 4 = Finish no later than - 5 = Must finish on - 6 = Must start on - 7 = Start no earlier than - 8 = Start no later than Note: Some types are paired with the constraint date (e.g., "Finish no earlier than"), while other types ignore the date if entered (e.g., "Start as late as possible"). |
| `PRTIME` | DATE | NULL | The date and time for this constraint. Some constraint types will not use a date (e.g., "Start as soon as possible"). For those types, if a date is given, it is ignored. |
| `PRMODBY` | NVARCHAR | NULL | The resource who last updated this row. This refers to CMN_SEC_USERS. |
| `PRMODTIME` | DATE | NULL | The date and time this row was last updated. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRTASKID` | [[PRTASK]].`PRID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[INV_PROJECTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_TASK_FORMULAS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]]

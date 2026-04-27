---
title: PRJ_TASK_FORMULAS
type: db-table
table: PRJ_TASK_FORMULAS
columns: 10
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

# PRJ_TASK_FORMULAS

> [!info] Description
> This table stores the estimating formulas for tasks. The estimating formulas on task comprise the estimating model for the project.

## Subject areas (ERDs)
- [[_MOC - Projects ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The internal ID of this task formula. |
| `TASK_ID` | NUMERIC | NOT NULL | A reference to the task row that this task formula applies to. This refers to [[PRTASK]].PRID of the associated task row. |
| `CONDITION_ID` | NUMERIC | NULL | A reference into the ODF_FILTER_EXPRESSIONS for an execution condition that may have been added to this task formula. The refers to ODF_FILTER_EXPRESSIONS.ID for the associated row. |
| `FORMULA` | NVARCHARMAX | NULL | The task formula as an expression. The formula is parsed and evaluated at runtime to determine the estimates for the task. |
| `IS_DEFAULT` | NUMERIC | NOT NULL | A flag indicating that this task formula is the default formula to use with this task when calculating estimates using the estimate model. A default task formula is one that has no executions defined for it. There may be only one default formula for a task. |
| `SEQUENCE` | NUMERIC | NOT NULL | The sequence is the order that this formula is evaluated when calculating the estimates for a task. Task formulas with execution conditions are evaluated in the order specified by the user with the first formula whose conditions are met. If no formulas have execution conditions that are met, then the default task formula is used. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TASK_ID` | [[PRTASK]].`PRID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[INV_PROJECTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRSUBPROJECT]], [[PRTASK]], [[PRTEAM]]

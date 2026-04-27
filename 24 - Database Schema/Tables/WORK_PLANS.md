---
title: WORK_PLANS
type: db-table
table: WORK_PLANS
columns: 21
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# WORK_PLANS

> [!info] Description
> This table contains the Plan information.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `NAME` | NVARCHAR | NOT NULL | Plan name |
| `PLAN_TYPE` | NVARCHAR | NOT NULL | Plan type |
| `IS_ACTIVE` | NUMERIC | NULL | Indicates if the plan is enabled or not |
| `ODF_BLUEPRINT_ID` | NUMERIC | NULL | This column refers to the blueprint that plan belongs to |
| `PARENT` | NUMERIC | NULL | This column refers to the parent plan |
| `FISCAL_YEAR` | NUMERIC | NULL | This column refers to the fiscal year for which the plan is targeted to |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `CONFIG_ID` | NUMERIC | NOT NULL | The id of the configuration of this plan. |
| `SYNC_JOB_ID` | NUMERIC | NULL | This column refers to the job identifier if the plan is synchronizing with the system |
| `PLAN_IN_HIERARCHY` | NUMERIC | NOT NULL | This column defines if the plan belongs to current hierarchy or not at the time of sync. |
| `PLAN_OF_RECORD` | NUMERIC | NOT NULL | This column refers to version identifier which is designated as plan of record. |
| `PLAN_OF_RECORD_STATUS` | NVARCHAR | NULL | This column refers the status of plan w.r.t. version and plan of record. |
| `TARGET` | NUMERIC | NULL | Target for the current plan which can be set by current owner. |
| `TOTAL_TARGET` | NUMERIC | NULL | Target for the current plan which can be set by parent. |
| `PLAN_ROUND` | INTEGER | NOT NULL | This column refers to the round the plan is part of. It is 1 to start with. |
| `SRC_PLAN_ID` | NUMERIC | NULL | This column refers to the plan which is source of this round's plan. |

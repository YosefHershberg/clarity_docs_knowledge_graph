---
title: NBI_PROJ_RES_RATES_AND_COSTS
type: db-table
table: NBI_PROJ_RES_RATES_AND_COSTS
columns: 20
audience: dev
domain: development
canonical: true
fk_targets:
  - PRTASK
tags:
  - dev
  - schema
  - table
---

# NBI_PROJ_RES_RATES_AND_COSTS

> [!info] Description
> This table stores denormalized billing and cost rate information in the datamart currency. It is used to improve the datamart extraction performance.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `PROJECT_ID` | NUMERIC | NOT NULL | This column refers to the project ID (in SRM_PROJECTS table) for which this rate is in effect. |
| `RESOURCE_ID` | NUMERIC | NOT NULL | The Resource ID for which this rate is in effect This refers to the SRM_RESOURCES table. |
| `TASK_ID` | NUMERIC | NOT NULL | The task ID for which this rate is in effect. This refers to [[PRTASK]].PRID. |
| `TEAM_ID` | NUMERIC | NOT NULL |  |
| `TASK_ROLE_ID` | NUMERIC | NULL | This column stores the role assigned to the resource on the task assignment. |
| `CHARGE_CODE` | NVARCHAR | NULL | Indicates the charge code used for this date range. This refers to the PRCHARGECODE table. |
| `FROM_DATE` | DATE | NULL | The date from which the rate is effective. |
| `TO_DATE` | DATE | NULL | The date until which the rate is effective. |
| `LAST_MODIFIED_DATE` | DATE | NOT NULL | The time this row was last modified. |
| `COST_RATE` | NUMERIC | NULL | The natural cost rate converted to datamart currency. |
| `BILL_RATE` | NUMERIC | NULL | The natural bill rate converted to datamart currency. |
| `NATURAL_COST_RATE` | NUMERIC | NULL | The best match natural cost rate from the matrix for the period. |
| `NATURAL_BILL_RATE` | NUMERIC | NULL | The best match natural bill rate from the matrix for the period. |
| `NATURAL_COST_RATE_CURR_CODE` | NVARCHAR | NULL | The currency code for the natural cost rate. |
| `NATURAL_BILL_RATE_CURR_CODE` | NVARCHAR | NULL | The currency code for the natural bill rate. |
| `PROJECT_COST_RATE` | NUMERIC | NULL | This column refers to the natural cost converted to the project currency. |
| `PROJECT_BILL_RATE` | NUMERIC | NULL | This column refers to the natural rate converted to the project currency. |
| `PROJECT_CURR_CODE` | NVARCHAR | NULL | This column refers to the currency code for the project. This currency code is used for both cost and rate within the project. |
| `EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The exchange rate type. Values are: - 0 = AVERAGE - 1 = FIXED - 2 = SPOT |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TASK_ID` | [[PRTASK]].`PRID` | |

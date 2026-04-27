---
title: RQP_PLANS_RELEASES
type: db-table
table: RQP_PLANS_RELEASES
columns: 8
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - RQP_RELEASES
  - RQP_RELEASE_PLANS
tags:
  - dev
  - schema
  - table
---

# RQP_PLANS_RELEASES

> [!info] Description
> This table maps release plans to releases included in the release plan.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `RELEASE_PLAN_ID` | NUMERIC | NOT NULL | This column refers to the ID ([[RQP_RELEASE_PLANS]].ID) of the release plan being mapped to releases. |
| `RELEASE_ID` | NUMERIC | NOT NULL | This column refers to the ID ([[RQP_RELEASES]].ID) of the releases being mapped to release plans. |
| `IS_POR` | NUMERIC | NOT NULL | This column is a flag to indicate if the release is the plan of record. - 1 = true - 0 = false |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The timestamp of when the record was last modified |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column defines the ID of the resource who last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RELEASE_PLAN_ID` | [[RQP_RELEASE_PLANS]].`ID` | |
| `RELEASE_ID` | [[RQP_RELEASES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

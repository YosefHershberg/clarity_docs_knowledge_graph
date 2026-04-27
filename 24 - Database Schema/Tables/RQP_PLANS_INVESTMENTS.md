---
title: RQP_PLANS_INVESTMENTS
type: db-table
table: RQP_PLANS_INVESTMENTS
columns: 7
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - INV_INVESTMENTS
  - RQP_RELEASE_PLANS
tags:
  - dev
  - schema
  - table
---

# RQP_PLANS_INVESTMENTS

> [!info] Description
> This table maps release plans to investments included in the release plan.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `RELEASE_PLAN_ID` | NUMERIC | NOT NULL | This column defines the ID ([[RQP_RELEASE_PLANS]].ID) of the release plan. |
| `INVESTMENT_ID` | NUMERIC | NOT NULL | This column defines the ID ([[INV_INVESTMENTS]].ID) of an investment that is part of the release plan. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The timestamp of when the record was last modified |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column defines the ID of the resource who last updated this row. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RELEASE_PLAN_ID` | [[RQP_RELEASE_PLANS]].`ID` | |
| `INVESTMENT_ID` | [[INV_INVESTMENTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

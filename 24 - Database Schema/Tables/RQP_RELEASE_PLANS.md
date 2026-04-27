---
title: RQP_RELEASE_PLANS
type: db-table
table: RQP_RELEASE_PLANS
columns: 9
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - RQP_PLANS_INVESTMENTS
  - RQP_PLANS_RELEASES
  - RQP_PLANS_REQUIREMENTS
tags:
  - dev
  - schema
  - table
---

# RQP_RELEASE_PLANS

> [!info] Description
> This table stores the basic attributes of a release plan.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code that identifies the release plan. |
| `NAME` | NVARCHAR | NULL | This column refers to the name of the release plan. |
| `MANAGER_ID` | NUMERIC | NULL | This column refers to the identifier for the manager of the release plan. |
| `CURRENCY_CODE` | NVARCHAR | NULL | This column refers to the currency code of the currency used in the release plan. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The timestamp of when the record was last modified |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column indicates the ID of the resource who last modified this release plan. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[RQP_PLANS_INVESTMENTS]] | `RELEASE_PLAN_ID` | `ID` |
| [[RQP_PLANS_RELEASES]] | `RELEASE_PLAN_ID` | `ID` |
| [[RQP_PLANS_REQUIREMENTS]] | `RELEASE_PLAN_ID` | `ID` |

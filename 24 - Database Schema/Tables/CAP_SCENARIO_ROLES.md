---
title: CAP_SCENARIO_ROLES
type: db-table
table: CAP_SCENARIO_ROLES
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Capacity
fk_targets:
  - CAP_SCENARIOS
  - CMN_SEC_USERS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/capacity
---

# CAP_SCENARIO_ROLES

> [!info] Description
> This table stores information about roles added to a scenario.

## Subject areas (ERDs)
- [[_MOC - Capacity ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `SCENARIO_ID` | NUMERIC | NOT NULL | This refers to [[CAP_SCENARIOS]].ID. |
| `ROLE_ID` | NUMERIC | NOT NULL | The role ID. This refers to [[SRM_RESOURCES]].ID. |
| `TOTAL_CAPACITY` | NUMERIC | NULL | The total capacity of the resource assuming this role. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `SCENARIO_ID` | [[CAP_SCENARIOS]].`ID` | |
| `ROLE_ID` | [[SRM_RESOURCES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CAP_SCENARIOS]], [[CAP_SCENARIO_ASSIGNMENTS]], [[CAP_SCENARIO_MEMBERS]], [[CAP_SCENARIO_TASKS]], [[CAP_SCENARIO_TEAM]], [[INV_INVESTMENTS]], [[PRASSIGNMENT]], [[PRTASK]], [[PRTEAM]]

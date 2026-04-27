---
title: CAP_SCENARIOS
type: db-table
table: CAP_SCENARIOS
columns: 12
audience: dev
domain: development
canonical: true
erds:
  - Capacity
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - CAP_SCENARIO_MEMBERS
  - CAP_SCENARIO_ROLES
  - PMA_SCENARIO_CONSTRAINTS
  - PMA_SCENARIO_OPT_PARAMS
tags:
  - dev
  - schema
  - table
  - erd/capacity
---

# CAP_SCENARIOS

> [!info] Description
> This table stores the information on the scenarios owned by users.

## Subject areas (ERDs)
- [[_MOC - Capacity ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to a system-generated, unique identifier for a row in this table. |
| `USER_ID` | NUMERIC | NOT NULL | This column refers to the user who owns this scenario. This refers to [[CMN_SEC_USERS]].ID. |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name of the scenario. |
| `DESCRIPTION` | NVARCHAR | NULL | This column refers to the user-entered, textual description of this scenario. |
| `BDGT_CST_TOTAL` | NUMERIC | NULL | This column refers to the budgeted costs of this scenario. |
| `BDGT_REV_TOTAL` | NUMERIC | NULL | This column refers to the targeted monetary benefits for this scenario. |
| `IS_PUBLIC` | INTEGER | NOT NULL | This column indicates whether the scenario is available to other users. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `IS_BEING_PUBLISHED` | INTEGER | NOT NULL | This column indicates if the scenario is being published. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CAP_SCENARIO_MEMBERS]] | `SCENARIO_ID` | `ID` |
| [[CAP_SCENARIO_ROLES]] | `SCENARIO_ID` | `ID` |
| [[PMA_SCENARIO_CONSTRAINTS]] | `SCENARIO_ID` | `ID` |
| [[PMA_SCENARIO_OPT_PARAMS]] | `SCENARIO_ID` | `ID` |

## Related tables (same subject area)

[[CAP_SCENARIO_ASSIGNMENTS]], [[CAP_SCENARIO_MEMBERS]], [[CAP_SCENARIO_ROLES]], [[CAP_SCENARIO_TASKS]], [[CAP_SCENARIO_TEAM]], [[INV_INVESTMENTS]], [[PRASSIGNMENT]], [[PRTASK]], [[PRTEAM]]

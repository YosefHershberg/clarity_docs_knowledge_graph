---
title: FIN_PLAN_DEFAULT_DETAILS
type: db-table
table: FIN_PLAN_DEFAULT_DETAILS
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Financial Planning
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/financial-planning
---

# FIN_PLAN_DEFAULT_DETAILS

> [!info] Description
> This table stores the default plan details.

## Subject areas (ERDs)
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `PLANDEFAULT_ID` | NUMERIC | NOT NULL | This refers to the internal ID of the table FIN_PLAN_DEFAULTS. |
| `PLAN_BY_1_CODE` | NVARCHAR | NOT NULL | This refers to the first plan by. |
| `PLAN_BY_2_CODE` | NVARCHAR | NULL | This refers to the second plan by. |
| `PLAN_DETAIL_1_ID` | NUMERIC | NOT NULL | The plan detail 1 ID. This refers to the internal ID of the plan by options related tables. |
| `PLAN_DETAIL_2_ID` | NUMERIC | NULL | The plan detail 2 ID. This refers to the internal ID of the plan by options related tables. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[INV_INVESTMENTS]], [[LOCATIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[PRCHARGECODE]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]]

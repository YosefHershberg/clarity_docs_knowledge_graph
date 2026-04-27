---
title: FIN_PLAN_DEFAULTS
type: db-table
table: FIN_PLAN_DEFAULTS
columns: 15
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

# FIN_PLAN_DEFAULTS

> [!info] Description
> This table stores the plan defaults for an entity.

## Subject areas (ERDs)
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `OBJECT_ID` | NUMERIC | NOT NULL | The object with which the defaults are associated. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | The object ID with which the defaults are associated. |
| `PERIOD_TYPE_CODE` | NVARCHAR | NULL | This column indicates the plan period type. It is one of the values from the lookup type "FIN_PLAN_TYPE". |
| `START_PERIOD_ID` | NUMERIC | NULL | The default start time period ID. This refers to the internal ID of the table BIZ_COM_PERIODS. |
| `END_PERIOD_ID` | NUMERIC | NULL | The default end time period ID. This refers to the internal ID of the table BIZ_COM_PERIODS. |
| `FREEZE_DATE` | DATE | NULL | The date prior to which all the plans are frozen. |
| `PLAN_BY_1_CODE` | NVARCHAR | NULL |  |
| `PLAN_BY_2_CODE` | NVARCHAR | NULL |  |
| `LOCK_PLAN_STRUCTURE` | INTEGER | NULL | This column indicates the lock plan structure for plans created under this entity. |
| `LOCK_PLAN_PERIODS` | INTEGER | NULL | This column is not used. |
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

[[BIZ_COM_PERIODS]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[LOCATIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[PRCHARGECODE]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]]

---
title: DPT_SUBSCRIPTIONS
type: db-table
table: DPT_SUBSCRIPTIONS
columns: 18
audience: dev
domain: development
canonical: true
erds:
  - Departments
fk_targets:
  - CMN_SEC_USERS
  - DEPARTMENTS
  - INV_INVESTMENTS
fk_sources:
  - DPT_KEYMETRICS
tags:
  - dev
  - schema
  - table
  - erd/departments
---

# DPT_SUBSCRIPTIONS

> [!info] Description
> This table stores the relationship of a department subscribing to a service, thus creating a subscription. A subscription identifies a consumer department subscribing to a service offered by a provider department.

## Subject areas (ERDs)
- [[_MOC - Departments ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `PK_ID` | NUMERIC | NOT NULL | The investment's internal ID ([[INV_INVESTMENTS]].ID). |
| `TABLE_NAME` | NVARCHAR | NOT NULL | The investment's table name as represented in OBS associations. The default is 'INV_SERVICES'. |
| `DEPARTMENT_ID` | NUMERIC | NOT NULL | The department ([[DEPARTMENTS]].ID) subscribing to this subscription. |
| `SLA_VIOLATIONS` | NUMERIC | NULL | The number of SLA violations. |
| `SLA_VIOLATIONS_THRESHOLD` | NUMERIC | NULL | The SLA violation threshold for this subscription. |
| `INCIDENTS` | NUMERIC | NULL | The total number of incidents logged against this subscription. |
| `INCIDENTS_THRESHOLD` | NUMERIC | NULL | The incident threshold value for this subscription. |
| `CHANGE_ORDERS` | NUMERIC | NULL | The total number of change orders logged for this subscription. |
| `CHARGES` | NUMERIC | NULL | The total charges (from chargebacks) against the investment (service) for this subscription. |
| `CUSTOMER_SATISFACTION` | NUMERIC | NULL | The customer satisfaction rating for this subscription. |
| `TOTAL_USERS` | NUMERIC | NULL | The total number of users utilizing this subscription. |
| `ACTIVE_USERS` | NUMERIC | NULL | The number of active users utilizing this subscription. |
| `PAGE_HITS` | NUMERIC | NULL | The page hits as captured for this subscription if applicable. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PK_ID` | [[INV_INVESTMENTS]].`ID` | |
| `DEPARTMENT_ID` | [[DEPARTMENTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[DPT_KEYMETRICS]] | `SUBSCRIPTION_ID` | `ID` |

## Related tables (same subject area)

[[CLNTSUPP]], [[DEPARTMENTS]], [[DPT_KEYMETRICS]], [[ENTITY]], [[FIN_FINANCIALS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]]

---
title: DPT_KEYMETRICS
type: db-table
table: DPT_KEYMETRICS
columns: 12
audience: dev
domain: development
canonical: true
erds:
  - Departments
fk_targets:
  - CMN_SEC_USERS
  - DPT_SUBSCRIPTIONS
tags:
  - dev
  - schema
  - table
  - erd/departments
---

# DPT_KEYMETRICS

> [!info] Description
> This table stores the metrics by which a particular subscription is measured. Based on the nature of the subscription, users are free to define any time- varying metrics to measure the performance of a subscription.

## Subject areas (ERDs)
- [[_MOC - Departments ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `METRIC_CODE` | NVARCHAR | NOT NULL | The metric (code) the subscription is to be evaluated for. |
| `NAME` | NVARCHAR | NOT NULL | The metric (name) for which the subscription will be evaluated. |
| `SUBSCRIPTION_ID` | NUMERIC | NOT NULL | The subscription for which this metric exists ([[DPT_SUBSCRIPTIONS]].ID). |
| `TARGET_VALUE` | BINARY | NULL | The expected value (time-scaled) for the given metric code for the chosen date range. |
| `ACTUAL_VALUE` | BINARY | NULL | The actual value (time-scaled) for the given metric code for the chosen date range. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row ([[CMN_SEC_USERS]].ID). |
| `ODF_SS_ACTUAL_VALUE` | NUMERIC | NULL |  |
| `ODF_SS_TARGET_VALUE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `SUBSCRIPTION_ID` | [[DPT_SUBSCRIPTIONS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CLNTSUPP]], [[DEPARTMENTS]], [[DPT_SUBSCRIPTIONS]], [[ENTITY]], [[FIN_FINANCIALS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]]

---
title: CLB_NOTIFICATION_DEFS
type: db-table
table: CLB_NOTIFICATION_DEFS
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Notifications
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - CLB_NOTIFICATION_ASSOCS
tags:
  - dev
  - schema
  - table
  - erd/notifications
---

# CLB_NOTIFICATION_DEFS

> [!info] Description
> This table stores notification definitions.

## Subject areas (ERDs)
- [[_MOC - Notifications ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `NOTIFICATION_EVENT` | NVARCHAR | NOT NULL | The notification type, such as SCHEDULER_TYPE. |
| `NOTIFICATION_KEY` | NVARCHAR | NOT NULL | The notification key for the message in the resource bundle. |
| `OBJECT_TYPE` | NVARCHAR | NOT NULL | The notifications object type, such as JOB_SCHEDULER. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CLB_NOTIFICATION_ASSOCS]] | `NOTIFICATION_DEF_ID` | `ID` |

## Related tables (same subject area)

[[CLB_NOTIFICATIONS]], [[CLB_NOTIFICATION_ASSOCS]], [[CLB_NOTIFICATION_PREFS]], [[CLB_PROJECT_GROUP_KEYS]], [[INV_INVESTMENTS]]

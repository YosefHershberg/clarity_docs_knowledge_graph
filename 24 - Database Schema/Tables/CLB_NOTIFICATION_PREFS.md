---
title: CLB_NOTIFICATION_PREFS
type: db-table
table: CLB_NOTIFICATION_PREFS
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Notifications
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/notifications
---

# CLB_NOTIFICATION_PREFS

> [!info] Description
> This table stores notification preferences.

## Subject areas (ERDs)
- [[_MOC - Notifications ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the date and time this row was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `USER_ID` | NUMERIC | NOT NULL | This ID refers to a row in [[CMN_SEC_USERS]].ID. |
| `NOTIFICATION_TYPE` | NVARCHAR | NOT NULL | The notification type such as, NOTIFICATION_DOCUMENT_TYPE and NOTIFICATION_PROJ_PARTICIPANTS. |
| `METHOD` | NVARCHAR | NOT NULL |  |
| `PRINCIPAL_TYPE` | VARCHAR | NOT NULL | The principal type such as, PUBLISH, SAVE and USER. |
| `STATUS` | NUMERIC | NOT NULL | The status such as, 0 and 1. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `USER_ID` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CLB_NOTIFICATIONS]], [[CLB_NOTIFICATION_ASSOCS]], [[CLB_NOTIFICATION_DEFS]], [[CLB_PROJECT_GROUP_KEYS]], [[INV_INVESTMENTS]]

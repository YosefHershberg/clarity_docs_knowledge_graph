---
title: CAL_EVENTS
type: db-table
table: CAL_EVENTS
columns: 23
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - CAL_EVENT_INVITEES
tags:
  - dev
  - schema
  - table
---

# CAL_EVENTS

> [!info] Description
> This table stores information about personal and project calendar events.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `EVENT_NAME` | NVARCHAR | NOT NULL | This column refers to the name of the event. |
| `START_DATE` | DATE | NOT NULL | This column refers to the start date of the event. This column stores the application server time. |
| `DURATION_MIN` | NUMERIC | NOT NULL | The duration of the event in minutes. For example, if the event duration is one hour, then this column is set to 60. |
| `END_DATE` | DATE | NOT NULL | This column refers to the end date of the event. This column stores the application server time. |
| `LOCATION` | NVARCHAR | NULL | This column refers to the location of the event. |
| `DESCRIPTION` | NVARCHAR | NULL | The description of the event. |
| `REMINDER_INTERVAL` | NUMERIC | NULL | The interval for sending reminders of the event. This number is combined with the [[CAL_EVENTS]].REMINDER_TYPE to determine when to send reminders. |
| `ACCESS_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `OTHER_INVITEES` | NVARCHAR | NULL | Other invitees of an event. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `PARENT_ID` | NUMERIC | NULL | The parent event ID. This column is Null if the event does not have a parent. |
| `LAST_REMINDER_DATE` | DATE | NULL | The last time a reminder was sent. |
| `OBJECT_ID` | NUMERIC | NULL | The object instance ID for events attached to objects. |
| `OBJECT_TYPE` | NUMERIC | NULL | The object type (e.g. CAL_PROJECT) for events attached to objects. |
| `REPEAT_TYPE` | NUMERIC | NULL | The lookup value from lookup type "CAL_RECUR_EVERY." |
| `REPEAT_INTERVAL` | NUMERIC | NULL | The interval between repeating event instances. |
| `REMINDER_TYPE` | NUMERIC | NULL | The lookup value from lookup type "CAL_REMINDER." |
| `NOTIFY_PARTICIPANTS` | INTEGER | NULL | A flag indicating if participants receive event alerts. |
| `ALL_DAY` | INTEGER | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CAL_EVENT_INVITEES]] | `CAL_EVENT_ID` | `ID` |

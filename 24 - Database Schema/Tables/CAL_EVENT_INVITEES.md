---
title: CAL_EVENT_INVITEES
type: db-table
table: CAL_EVENT_INVITEES
columns: 17
audience: dev
domain: development
canonical: true
fk_targets:
  - CAL_EVENTS
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
---

# CAL_EVENT_INVITEES

> [!info] Description
> This table stores information on the invitees to an event.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `USERID` | NUMERIC | NOT NULL | This column refers to the user ID of the event invitee. This refers to [[CMN_SEC_USERS]].ID. |
| `IS_OWNER` | NUMERIC | NOT NULL | This column identifies whether this invitee is the owner of the event or not. |
| `STATUS_ID` | NUMERIC | NOT NULL | This column refers to the status of the assignee's event. Values are: - Accept - Declined - Undecided |
| `TO_BE_DETERMINED` | INTEGER | NULL | This column is deprecated and should no longer be used. |
| `CHANGED_FIELDS` | NUMERIC | NULL | This column refers to associated with a number. When columns are updated, this column stores the sum of the changed column numbers. |
| `CAL_EVENT_ID` | NUMERIC | NULL | This column refers to [[CAL_EVENTS]].ID. |
| `START_DATE` | DATE | NULL | This column refers to start date of the event for this invitee. |
| `END_DATE` | DATE | NULL | This column refers to end date of this event for this invitee. |
| `UPCOMING_DATE` | DATE | NULL | This column refers to next upcoming date of an event for this invitee in a recurring event series. |
| `LAST_OCCURRENCE_DATE` | DATE | NULL | This column refers to last date the event occurred for a particular invitee in a recurring event series. |
| `INVITEE_EXCLUDED` | NUMERIC | NOT NULL | Indicates if the invitee is excluded. Values are: - 0 = Not an invitee exclusion - 1 = Invitee exclusion - 2 = Spinoff |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `PARENT_ID` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USERID` | [[CMN_SEC_USERS]].`ID` | |
| `CAL_EVENT_ID` | [[CAL_EVENTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

---
title: CAL_ACTION_ITEM_ASSIGNEES
type: db-table
table: CAL_ACTION_ITEM_ASSIGNEES
columns: 19
audience: dev
domain: development
canonical: true
erds:
  - Action Items
fk_targets:
  - CAL_ACTION_ITEMS
  - CMN_SEC_USERS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/action-items
---

# CAL_ACTION_ITEM_ASSIGNEES

> [!info] Description
> This table stores information for action item assignees.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 10 - Audit Documents Processes]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Action Items ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `ASSIGNEE_ID` | NUMERIC | NOT NULL | This column refers to the assignee user ID ([[CMN_SEC_USERS]].ID). |
| `STATUS_CODE` | NVARCHAR | NOT NULL | The status code is one of these values: - CAL_CLOSED - CAL_DEFERRED - CAL_DONE - CAL_IN_PROGRESS - CAL_OPEN Note: Process action items store object specific values which come from many lookups. |
| `CAL_ACTION_ITEM_ID` | NUMERIC | NOT NULL | This column refers to [[CAL_ACTION_ITEMS]].ID. |
| `DUE_DATE` | DATE | NULL | This column refers to the action item due date for this assignee. |
| `UPCOMING_DATE` | DATE | NULL | This column refers to the next upcoming due date in a recurring action item. |
| `RECURRING_END_DATE` | DATE | NOT NULL | This column refers to the recurring end date. |
| `LAST_OCCURRENCE_DATE` | DATE | NOT NULL | This column refers to the last occurrence date of a recurring action item for this assignee. |
| `ASSIGNEE_EXCLUDED` | NUMERIC | NOT NULL | This column indicates if the assignee is excluded from a particular exception of a recurring action item. |
| `IS_FLAGGED` | INTEGER | NULL | This column is deprecated and should no longer be used. |
| `IS_PROXY` | INTEGER | NULL | This column indicates whether this assignee is a proxy to another user. |
| `IS_ESCALATED` | INTEGER | NULL | This column indicates whether the action item assigned to this assignee has been escalated. |
| `PROXY_SOURCE_ID` | NUMERIC | NULL | This column refers to the user ID ([[SRM_RESOURCES]].USER_ID) whose behalf this proxy acts on. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `AI_SUBJECT` | NVARCHAR | NULL | This column refers to the localized action item subject for the user. |
| `AI_DESCRIPTION` | NVARCHAR | NULL | This column refers to the localized action item description for the user. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ASSIGNEE_ID` | [[CMN_SEC_USERS]].`ID` | |
| `CAL_ACTION_ITEM_ID` | [[CAL_ACTION_ITEMS]].`ID` | |
| `PROXY_SOURCE_ID` | [[SRM_RESOURCES]].`USER_ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[INV_INVESTMENTS]], [[SRM_RESOURCES]]

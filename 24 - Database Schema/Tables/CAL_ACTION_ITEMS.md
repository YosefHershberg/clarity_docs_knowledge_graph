---
title: CAL_ACTION_ITEMS
type: db-table
table: CAL_ACTION_ITEMS
columns: 34
audience: dev
domain: development
canonical: true
erds:
  - Action Items
  - ITIL
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - CAL_ACTION_ITEM_ASSIGNEES
tags:
  - dev
  - schema
  - table
  - erd/action-items
  - erd/itil
---

# CAL_ACTION_ITEMS

> [!info] Description
> This table stores information on the master table for action items.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 10 - Audit Documents Processes]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Action Items ERD]]
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `SUBJECT` | NVARCHAR | NOT NULL | This column refers to the subject of an action item. |
| `DESCRIPTION` | NVARCHAR | NULL | This column refers to the action item description. |
| `OBJECT_TYPE` | NVARCHAR | NOT NULL | The object type to which this action item belongs. This refers to lookup type "CAL_OBJECT_TYPE." |
| `SUB_OBJECT_ID` | NUMERIC | NULL | This column refers to the object instance ID of the sub-object to which this action item belongs. |
| `SUB_OBJECT_TYPE` | NVARCHAR | NULL | Contains the sub-object type code to which the action item belongs. The values are: - CAL_ISSUE - CAL_RISK |
| `OBJECT_ID` | NUMERIC | NULL | This column refers to the identifier for the object to which this action item belongs. The value is 0 for personal action items. |
| `DUE_DATE` | DATE | NULL | This column refers to the due date of the action item. |
| `HAS_DUE_TIME` | INTEGER | NULL | This column indicates whether the action item has any due time. |
| `RECURRING_END_DATE` | DATE | NULL | This column refers to the recurring end date. |
| `REMINDER_INTERVAL` | NUMERIC | NULL | This column refers to the reminder interval from the lookup type "CAL_REMINDER." |
| `REMINDER_MINUTE` | NUMERIC | NULL | This column refers to the number of minutes a reminder is sent before the action item is due. |
| `REPEAT_TYPE` | NUMERIC | NULL | This column refers to the lookup value from lookup type CAL_RECUR_EVERY. |
| `REPEAT_INTERVAL` | NUMERIC | NULL | This column refers to the numeric value for the repeat interval. |
| `IS_RECURRING` | NUMERIC | NULL | This column refers to the flag that checks whether an action item is recurring or not. |
| `NEED_REMINDER` | NUMERIC | NULL | This column refers to the flag that indicates if a reminder is sent to an action item assignee. |
| `LAST_REMINDER_DATE` | DATE | NULL | This column refers to the last reminder date when a background process sends reminder. |
| `PRIORITY_CODE` | NVARCHAR | NULL | This column refers to the priority code of the action item from lookup type CAL_ACTIONITEM_PRIORITY. |
| `ACCESS_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `PARENT_ID` | NUMERIC | NULL | This column refers to the parent action item ID in case of an exception for a recurring action Item. |
| `OWNER_ID` | NUMERIC | NOT NULL | This column refers to the owner of an action item ([[CMN_SEC_USERS]].ID). |
| `MULTIPLE_ASSIGNEE` | INTEGER | NOT NULL | This column refers to the flag to indicate if the action item is assigned to multiple assignees. |
| `PROCESS_HANDLER_ID` | NUMERIC | NULL | This column refers to the process step action results instance ID for process action items. This column is referenced by the ID column in the BPM_RUN_STEP_ACTION_RESULTS table. |
| `STATUS_TYPE_CODE` | NVARCHAR | NOT NULL | This column refers to the lookup type from which status values for this action item come. |
| `CUR_USER_STATUS_ONLY` | INTEGER | NULL | This column refers to which action items a user can see. When this column is set to True, the user logged in sees only the action items that belong to the user, not action items for other users. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `AI_DEF_TYPE` | NVARCHAR | NULL | The type of the definition from which action item is created. |
| `AI_DEF_ID` | NUMERIC | NULL | The id of the definition from which action item is created. |
| `ASSOC_OBJECT_CODE` | NVARCHAR | NULL | Contains the object type code to which the action item belongs. |
| `ASSOC_OBJECT_ID` | NUMERIC | NULL | This column refers to the object instance ID to which this action item belongs. |
| `STATUS_CODE` | NVARCHAR | NULL | The status code is one of these values: - CAL_CLOSED - CAL_DEFERRED - CAL_DONE - CAL_IN_PROGRESS - CAL_OPEN Note: Process action items store object specific values which come from many lookups. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `OWNER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CAL_ACTION_ITEM_ASSIGNEES]] | `CAL_ACTION_ITEM_ID` | `ID` |

## Related tables (same subject area)

[[CAL_ACTION_ITEM_ASSIGNEES]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PRTASK]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[SRM_CONTACTS]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]

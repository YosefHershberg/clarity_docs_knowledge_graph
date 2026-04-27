---
title: XDM_TSK_ITEM_ASSOCIATION
type: db-table
table: XDM_TSK_ITEM_ASSOCIATION
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Document Manager
fk_targets:
  - CLB_DMS_FOLDERS
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/document-manager
---

# XDM_TSK_ITEM_ASSOCIATION

> [!info] Description
> This table stores the association between a XDM form and a task. There could be multiple tasks associated with a single XDM form.

## Subject areas (ERDs)
- [[_MOC - Document Manager ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `TASK_ID` | NUMERIC | NOT NULL | This column refers to the project task ID associated with the XDM form. This refers to the PRTASK table. |
| `ITEM_ID` | NUMERIC | NOT NULL | This column refers to the folder ID corresponding to the XDM form. This refers to [[CLB_DMS_FOLDERS]].ID. |
| `OBJECT_INSTANCE_ID` | NUMERIC | NOT NULL | This column refers to the unique ID of the associated XDM form. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ITEM_ID` | [[CLB_DMS_FOLDERS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CLB_DMS_FILES]], [[CLB_DMS_FILE_STORE]], [[CLB_DMS_FLAT_HIERARCHY]], [[CLB_DMS_FOLDERS]], [[CLB_DMS_HISTORIES]], [[CLB_DMS_VERSIONS]], [[CMN_SEC_GROUPS]], [[CMN_SEC_USERS]], [[PRTASK]], [[SRM_COMPANIES]], [[SRM_PROJECTS]]

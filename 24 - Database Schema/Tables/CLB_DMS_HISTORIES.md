---
title: CLB_DMS_HISTORIES
type: db-table
table: CLB_DMS_HISTORIES
columns: 6
audience: dev
domain: development
canonical: true
erds:
  - Document Manager
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/document-manager
---

# CLB_DMS_HISTORIES

> [!info] Description
> This table stores document access history.

## Subject areas (ERDs)
- [[_MOC - Document Manager ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `VERSION_ID` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CLB_DMS_FILES]], [[CLB_DMS_FILE_STORE]], [[CLB_DMS_FLAT_HIERARCHY]], [[CLB_DMS_FOLDERS]], [[CLB_DMS_VERSIONS]], [[CMN_SEC_GROUPS]], [[CMN_SEC_USERS]], [[PRTASK]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[XDM_TSK_ITEM_ASSOCIATION]]

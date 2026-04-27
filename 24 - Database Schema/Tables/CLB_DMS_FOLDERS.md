---
title: CLB_DMS_FOLDERS
type: db-table
table: CLB_DMS_FOLDERS
columns: 20
audience: dev
domain: development
canonical: true
erds:
  - Document Manager
fk_targets:
  - CMN_SEC_GROUPS
  - CMN_SEC_USERS
fk_sources:
  - CLB_DMS_FILES
  - CLB_DMS_FLAT_HIERARCHY
  - XDM_TSK_ITEM_ASSOCIATION
tags:
  - dev
  - schema
  - table
  - erd/document-manager
---

# CLB_DMS_FOLDERS

> [!info] Description
> This table stores all attributes related to the folder.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 10 - Audit Documents Processes]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

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
| `OWNER_ID` | NUMERIC | NOT NULL | A foreign key to the owner of the folder. This key maps to the [[CMN_SEC_USERS]].ID |
| `NAME` | NVARCHAR | NOT NULL | The name of the folder as displayed to the user. |
| `PATH_NAME` | NVARCHAR | NOT NULL | The absolute path name to this folder. |
| `FOLDER_TYPE` | NVARCHAR | NOT NULL | This column refers to the folder type. The value for this column is one of the following: - ActivityFolder - ActivityItemFolder - ActivityTypeFolder - DiscussionFolder - ProjectFolder - ResourceFolder - StandardFolder - TemplateFolder - CompanyFolder |
| `IS_SEARCHABLE` | INTEGER | NOT NULL | This flag denotes whether the content of this folder is searchable. |
| `IS_SYSTEM_CREATED` | INTEGER | NOT NULL | This flag denotes whether this folder is created by the system, by seed data, and whether it can be modified. |
| `IS_VISIBLE` | INTEGER | NOT NULL | Indicates if the folder is visible or hidden. Value of 1 means visible. |
| `HAS_ALL_PARTICIPANTS` | INTEGER | NOT NULL | Indicates if this folder has all participants of the parent folder. |
| `PARENT_FOLDER_ID` | NUMERIC | NULL | The parent folder ID for this folder. Refers to [[CLB_DMS_FOLDERS]].ID. |
| `AREA_ID` | NUMERIC | NULL | This column refers to the area ID. Possible values are: - 500 = ROOT - 501 = TEMPLATES - 502 = DMS - 503 = PM - 504 = OM - 505 = RM - 506 = PROJECTS - 507 = COMPANIES - 508 = RESOURCES - 509 = KS |
| `OWNER_GROUP_ID` | NUMERIC | NULL | This column refers to the owner group ID of the folder. Refers to [[CMN_SEC_GROUPS]].ID. |
| `ASSOC_OBJ_ID` | NUMERIC | NOT NULL | The instance ID of the associated object. |
| `ASSOC_OBJ_TYPE` | NVARCHAR | NOT NULL | This column references the module with which the folder is associated. |
| `XDM_ITEM_STATUS` | NUMERIC | NULL | Indicates whether the XDM activity is open, closed, or in progress. |
| `ALLOW_NON_PARTICIPANTS` | INTEGER | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `OWNER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `OWNER_GROUP_ID` | [[CMN_SEC_GROUPS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CLB_DMS_FILES]] | `PARENT_FOLDER_ID` | `ID` |
| [[CLB_DMS_FLAT_HIERARCHY]] | `ANCESTOR_ID` | `ID` |
| [[XDM_TSK_ITEM_ASSOCIATION]] | `ITEM_ID` | `ID` |

## Related tables (same subject area)

[[CLB_DMS_FILES]], [[CLB_DMS_FILE_STORE]], [[CLB_DMS_FLAT_HIERARCHY]], [[CLB_DMS_HISTORIES]], [[CLB_DMS_VERSIONS]], [[CMN_SEC_GROUPS]], [[CMN_SEC_USERS]], [[PRTASK]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[XDM_TSK_ITEM_ASSOCIATION]]

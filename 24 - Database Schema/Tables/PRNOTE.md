---
title: PRNOTE
type: db-table
table: PRNOTE
columns: 11
audience: dev
domain: development
canonical: true
erds:
  - Links and Notes
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/links-and-notes
---

# PRNOTE

> [!info] Description
> This table stores data on notes.

## Subject areas (ERDs)
- [[_MOC - Links and Notes ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. |
| `PRID` | NUMERIC | NULL | System-entered when you create a new row. A persistent, unique identifier for each row in a table. It is referenced by other tables using columns to refer to a specific row. For example, the prTypeCodeID column in the PRResource table refers to a type code's prID column. |
| `PRTABLENAME` | NVARCHAR | NULL | Indicates the table within which the row is found. |
| `PRRECORDID` | NUMERIC | NULL | A reference to a row's prID entry. This column indicates the table within which the row is found. |
| `PRCATEGORY` | NVARCHAR | NULL | This column is intended to hold a category name for the object to which the row refers. For example, "Modifications" may be a category for a note. |
| `PRCREATEDTIME` | DATE | NULL | System-entered. The date and time when the user creates a note. |
| `PRMODTIME` | DATE | NULL | System-entered. The date and time when the user last modified a row. |
| `PRVALUE` | NVARCHARMAX | NULL | The text of a note. |
| `PRNOTEDATE` | DATE | NULL | This column defines the date this note was created. |
| `CREATED_BY` | NUMERIC | NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `UPDATED_BY` | NUMERIC | NULL | This column refers to resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[PRLINK]], [[PRTASK]], [[PRTIMEENTRY]], [[PRTIMESHEET]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]

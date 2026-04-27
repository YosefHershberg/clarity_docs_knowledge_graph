---
title: PRLINK
type: db-table
table: PRLINK
columns: 13
audience: dev
domain: development
canonical: true
erds:
  - Links and Notes
tags:
  - dev
  - schema
  - table
  - erd/links-and-notes
---

# PRLINK

> [!info] Description
> This table stores the attributes for a link

## Subject areas (ERDs)
- [[_MOC - Links and Notes ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. |
| `PRID` | NUMERIC | NULL | Internally generated key column that is internally unique. |
| `PRNAME` | NVARCHAR | NULL | The display name of the link. Limit of 80 characters. |
| `PRTABLENAME` | NVARCHAR | NULL | The table name for the object to which the link is attached. - PRJ_PROJECTS for projects - PRTASK for tasks - CMN_SEC_USERS for "Favorite Links" - PRSITE for "Site Links" |
| `PRRECORDID` | NUMERIC | NULL | A reference to the object to which the link is attached. It may be by prID into INV_PROJECTS or CMN_SEC_USERS, or by prID into PRTask or PRSite. |
| `PRURL` | NVARCHAR | NULL | The URL linked to the object. Limit of 1333 characters. |
| `CATEGORY_NAME` | NVARCHAR | NULL | The category within an instance of a master object such as a project. Used in the modern UI. |
| `SEQUENCE` | NUMERIC | NULL | Used in the modern UI to keep the order of the links within a section. |
| `CREATED_BY` | NUMERIC | NULL |  |
| `CREATED_DATE` | DATE | NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NULL |  |
| `LAST_UPDATED_DATE` | DATE | NULL |  |
| `CATEGORY_ID` | NUMERIC | NULL | The category id used to group links within an instance of an object such as a project. Used in the Modern UX. |

## Related tables (same subject area)

[[PRNOTE]], [[PRTASK]], [[PRTIMEENTRY]], [[PRTIMESHEET]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]

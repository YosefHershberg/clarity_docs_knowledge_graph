---
title: PRCALENDAR
type: db-table
table: PRCALENDAR
columns: 15
audience: dev
domain: development
canonical: true
erds:
  - Resources
fk_targets:
  - SRM_RESOURCES
fk_sources:
  - PRJ_RESOURCES
  - PRSITE
tags:
  - dev
  - schema
  - table
  - erd/resources
---

# PRCALENDAR

> [!info] Description
> This table stores data on calendars.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 03 - Resources Roles and Calendars]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Resources ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. |
| `PRID` | NUMERIC | NULL | A persistent, unique identifier for each row in a table. The system enters the value when you create a new row. It is referenced by other tables using columns to refer to a specific row. |
| `PRNAME` | NVARCHAR | NULL | The name of the calendar. |
| `PRRESOURCEID` | NUMERIC | NULL | This refers to [[SRM_RESOURCES]].ID. A value that cannot be Null. It indicates that this calendar is a resource-specific calendar. |
| `PRBASECALENDARID` | NUMERIC | NULL | This refers to [[PRCALENDAR]].PRID indicating that this calendar (e.g., calendar 2) is based on another calendar (e.g., calendar 1) and thus inherits calendar 1's attributes. |
| `PRMODBY` | NVARCHAR | NULL | System-generated. The name of the logged-in user who has modified the row. For example, when a user modifies a timesheet or note. |
| `PRMODTIME` | DATE | NULL | The date and time the last modification occurred. System-generated when a user modifies a row. |
| `PRVALUE` | BINARY | NULL | The contents of a calendar. |
| `SLICE_STATUS` | NUMERIC | NULL | The current state of the slices for this record. Values are: - Null = Slices are current - 1 = Slices may need to be updated because the row has changed since the slices were last created - 2 = Slices are in the process of being updated for this row - 3 = Slices are in the process of being rolled over |
| `HOURS_PER_DAY` | FLOAT | NULL | The default number of work hours per day. |
| `PRVERSION` | NUMERIC | NOT NULL | This column represents the the version of a PRCALENDAR record. |
| `SQLCURVE` | NVARCHARMAX | NULL |  |
| `ODF_CALENDAR` | BINARY | NULL | Blob representation of the calendar. |
| `ODF_NK_CALENDAR` | NVARCHARMAX | NULL | SQLCurve representation of the calendar. |
| `WORK_EFFORT_CONV_SLICE_STATUS` | NUMERIC | NULL | This column indicates that all scalar conversion factors must be recomputed. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRRESOURCEID` | [[SRM_RESOURCES]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PRJ_RESOURCES]] | `PRCALENDARID` | `PRID` |
| [[PRSITE]] | `PRCALENDARID` | `PRID` |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[INV_PROJECTS]], [[PRASSIGNMENT]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRTASK]], [[PRTEAM]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_RESOURCES]]

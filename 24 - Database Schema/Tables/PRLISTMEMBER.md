---
title: PRLISTMEMBER
type: db-table
table: PRLISTMEMBER
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - General
fk_targets:
  - PRLIST
tags:
  - dev
  - schema
  - table
  - erd/general
---

# PRLISTMEMBER

> [!info] Description
> This table along with the PRList table stores information on user hot lists.

## Subject areas (ERDs)
- [[_MOC - General ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID cannot be confused with a resource in Repository B that has the same prName, prExternalID, and prID. Note: This value is no longer universally unique, but may be required by client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | The persistent, unique identifier for each row in a table. It is the system-entered when you create a new row. It is referenced by other tables using columns to refer to a specific row. For example, prTypeCodeID column in the PRResource table refers to a type code's prID column. |
| `PRLISTID` | NUMERIC | NULL | This refers to PRList.prID. |
| `PRTABLENAME` | NVARCHAR | NULL | Indicates the table in which the row is found. |
| `PRRECORDID` | NUMERIC | NULL | A reference to a rows prID entry. The prTableName entry indicates the table in which the row is found. |
| `PRSEQUENCE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `PRMODBY` | NVARCHAR | NULL | System-entered. The name of the logged-in user when that person modifies a row, such as timesheet or note). |
| `PRMODTIME` | DATE | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRLISTID` | [[PRLIST]].`PRID` | |

## Related tables (same subject area)

[[PRLIST]]

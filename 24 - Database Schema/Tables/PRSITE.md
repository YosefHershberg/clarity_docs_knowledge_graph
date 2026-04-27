---
title: PRSITE
type: db-table
table: PRSITE
columns: 14
audience: dev
domain: development
canonical: true
fk_targets:
  - PRCALENDAR
fk_sources:
  - IMP_TRANSACTIONIMPORT
tags:
  - dev
  - schema
  - table
---

# PRSITE

> [!info] Description
> This table stores values used for the repository options as well as data in a repository. Note that for CA Clarity PPM, there is only a single row (i.e., single repository).

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID cannot be confused with a resource in Repository B that has the same prName, prExternalID, and prID. Note: This value is no longer universally unique, but may be required by some client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | System-entered when you create a new row. A persistent, unique identifier for each row in a table. It is referenced by other tables using columns to refer to a specific row (for example, PRTYPECODEID column in the PRRESOURCE table refers to a type code's PRID column). |
| `PRNAME` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PRTRACKSCALE` | NUMERIC | NULL | A unit that indicates the cycle of progress posting. The system uses the column to automatically increment the PRSTART and PRFINISH columns. |
| `PRWEEKSTART` | NUMERIC | NULL | A unit that indicates the day on which the week starts. Note: This column is used for scheduler interfaces only. In CA Clarity PPM, the start day of week is Monday. |
| `PRCALENDARID` | NUMERIC | NULL | The global calendar (i.e., site calendar). This refers to [[PRCALENDAR]].PRID. |
| `PRGUIDELINES` | NVARCHAR | NULL | A complete or partial reference, by URL or file name with extension to a guideline file. If the value does not define a complete reference or link, then the value is added to the link as defined by the hierarchy - first by work breakdown structure (WBS) (PRTASK), then by project (PRJ_PROJECTS), and finally by global (PRSITE) - until a complete link is defined. The site guideline may be the main file of URL, which may be sub-indexed by projects or tasks. Similarly, it represents the default guidelines for any task for which a guideline may not be specified. Note: See also PRGUIDELINES in the PRJ_PROJECTS and PRTASK tables. |
| `PRVERSION` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `PRROUNDALLOCPCT` | FLOAT | NULL | The rounding percentage that should be applied to the allocation curve when setting allocation based on estimates. |
| `PRMODBY` | NVARCHAR | NULL | System-entered when a user modifies a row. It is the name of the logged-in user who makes the modification. |
| `PRMODTIME` | DATE | NULL | System-entered when a user modifies a row. It is the date and time the last modification occurred. |
| `TOTAL_COST_OF_CAPITAL` | FLOAT | NULL | This column refers to the system-level annual cost of capital that is used for present value (PV) calculations in determining net present value (NPV), return on investment (ROI), breakeven date, modified internal rate of return (MIRR) and payback period. |
| `PRPLANTYPE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `REINVESTMENT_RATE` | FLOAT | NOT NULL | System level reinvestment rate % that will be used for financial metrics calculations based on value of IS_SYS_VAL_FOR_RR. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRCALENDARID` | [[PRCALENDAR]].`PRID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[IMP_TRANSACTIONIMPORT]] | `SITE` | `PRID` |

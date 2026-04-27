---
title: PRTIMESHEET
type: db-table
table: PRTIMESHEET
columns: 19
audience: dev
domain: development
canonical: true
erds:
  - Links and Notes
  - Transactions
fk_targets:
  - CMN_SEC_USERS
  - PRTIMEPERIOD
  - PRTYPECODE
fk_sources:
  - DWH_TMP_FIN_TRANSACTION
  - IMP_TRANSACTIONIMPORT
  - PPA_TRANSCONTROL
  - PPA_TRANSWIPADJUST
  - PPA_WIP
  - PRTIMEENTRY
tags:
  - dev
  - schema
  - table
  - erd/links-and-notes
  - erd/transactions
---

# PRTIMESHEET

> [!info] Description
> This table stores data viewed on timesheets.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 04 - Time Timesheets and Slicing]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Links and Notes ERD]]
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID cannot be confused with a resource in Repository B that has the same prName, prExternalID, and prID. Note: This value is no longer universally unique, but may be required by client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | A persistent, unique identifier for each row in a table. System-entered when you create a new row. It is referenced by other tables using columns to refer to a specific row (for example, PRRESOURCE.PRTYPECODEID refers to [[PRTYPECODE]].PRID). |
| `PRTIMEPERIODID` | NUMERIC | NULL | The time period this timesheet row is covering. This refers to [[PRTIMEPERIOD]].PRID. |
| `PRRESOURCEID` | NUMERIC | NULL | This refers to PRRESOURCE.PRID. Note: When creating assignments, first add the resource to the team. The API will allow you to use any resource when creating an assignment row, but Open Workbench will not open the project if the assignment row does not have a matching PRTeam row. |
| `PRSTATUS` | NUMERIC | NULL | The status of the timesheet. Values are: - 0 = Unsubmitted - 1 = Submitted - 2 = Rejected (returned) - 3 = Approved - 4 = Posted - 5 = Adjusted |
| `PRVERSION` | NUMERIC | NULL | The last stored version of a timesheet row. It is incremented by the system when the timesheet is modified. |
| `PRSUBMITTEDBY` | NUMERIC | NULL | System-entered. The name of the logged-in user when that user submits a timesheet. This refers to [[CMN_SEC_USERS]].ID. |
| `PRAPPROVEDBY` | NUMERIC | NULL | System-entered. The name of the logged-in user when that user approves a timesheet. This refers to [[CMN_SEC_USERS]].ID. |
| `PRISADJUSTMENT` | NUMERIC | NOT NULL | Indicates if a timesheet is an adjustment to a previous timesheet. Values are: - Yes - No |
| `PRADJUSTEDID` | NUMERIC | NULL | References the timesheet row replaced by this adjusted timesheet. This refers to [[PRTIMESHEET]].PRID. |
| `PRMODBY` | NUMERIC | NULL | System-entered. It is the name of the logged-in user when a user modifies a row, such as when a user modifies a timesheet or note. |
| `PRMODTIME` | DATE | NULL | System entered when a user modifies a row. It is the date and time the last modification occurred. |
| `POSTED_TIME` | DATE | NULL |  |
| `PRACTSUM` | FLOAT | NULL | The sum of actuals for this timesheet. The value is stored in seconds. |
| `FAILEDRULES` | NVARCHAR | NULL | A list of the IDs of the timesheet validation rules that did not pass. |
| `PRACTCURVE` | BINARY | NULL | Binary blob column for timesheet actuals curve. Legacy storage format for the actuals TSV attribute. |
| `ODF_NK_PRACTCURVE` | NVARCHARMAX | NULL | SQL curve column for timesheet actuals curve. Stores the nk_curve data type for the actuals TSV attribute. |
| `ODF_FTE_PRACTCURVE` | NUMERIC | NULL | FTE (Full-Time Equivalent) conversion factor for the timesheet actuals curve. Used when work effort unit is 'fte'. |
| `ODF_SS_ACTUALS` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRID` | [[PRTYPECODE]].`PRID` | |
| `PRTIMEPERIODID` | [[PRTIMEPERIOD]].`PRID` | |
| `PRSUBMITTEDBY` | [[CMN_SEC_USERS]].`ID` | |
| `PRAPPROVEDBY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[DWH_TMP_FIN_TRANSACTION]] | `EXTERNALBATCHID` | `PRID` |
| [[IMP_TRANSACTIONIMPORT]] | `EXTERNALBATCHID` | `PRID` |
| [[PPA_TRANSCONTROL]] | `EXTERNALBATCHID` | `PRID` |
| [[PPA_TRANSWIPADJUST]] | `EXTERNALBATCHID` | `PRID` |
| [[PPA_WIP]] | `EXTERNALBATCHID` | `PRID` |
| [[PRTIMEENTRY]] | `PRTIMESHEETID` | `PRID` |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRLINK]], [[PRNOTE]], [[PRTASK]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTYPECODE]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]

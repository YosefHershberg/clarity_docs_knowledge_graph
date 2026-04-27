---
title: PRTIMEENTRY
type: db-table
table: PRTIMEENTRY
columns: 33
audience: dev
domain: development
canonical: true
erds:
  - Links and Notes
  - Transactions
fk_targets:
  - IMM_INCIDENTS
  - PRASSIGNMENT
  - PRCHARGECODE
  - PRTIMESHEET
  - PRTYPECODE
fk_sources:
  - DWH_TMP_FIN_TRANSACTION
  - PPA_TRANSCONTROL
  - PPA_WIP
tags:
  - dev
  - schema
  - table
  - erd/links-and-notes
  - erd/transactions
---

# PRTIMEENTRY

> [!info] Description
> This table stores data viewed on time sheets (i.e., pending actuals). Each row in this table represents an entry on the timesheet.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 04 - Time Timesheets and Slicing]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Links and Notes ERD]]
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID cannot be confused with a resource in Repository B that has the same prName, prExternalID, and prID. Note: This value is no longer universally unique, but may be required by client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | A persistent, unique identifier for each row in a table. The system enters the value when you create a new row. It is referenced by other tables using columns to refer to a specific row (for example, PRRESOURCE.PRTYPECODEID refers to [[PRTYPECODE]].PRID). |
| `PRTIMESHEETID` | NUMERIC | NULL | Refers to [[PRTIMESHEET]].PRID. It is used to associate a time entry row with a timesheet. |
| `PRASSIGNMENTID` | NUMERIC | NULL | This refers to [[PRASSIGNMENT]].PRID. It is used to associate an object or row, such as actuals in a time sheet, with an assignment. |
| `PRCHARGECODEID` | NUMERIC | NULL | This refers to [[PRCHARGECODE]].PRID. It is used to associate the time entry row with a charge code. |
| `PRTYPECODEID` | NUMERIC | NULL | Refers to [[PRTYPECODE]].PRID. It is used to associate the time entry row with a type code. |
| `PRACTSUM` | FLOAT | NULL | The sum of actuals stored in binary column prActCurve for this row. The value is stored in seconds. |
| `PRSEQUENCE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `PRMODBY` | NVARCHAR | NULL | System-entered when a user modifies a row, such as when a user modifies a timesheet or note. It is the name of the logged-in user making the modification. |
| `PRMODTIME` | DATE | NULL | System-entered when a user modifies a row. It is the date and time the last modification occurred. |
| `PRACTCURVE` | BINARY | NULL | This binary column contains the actuals from time sheets. It is the curve equivalent of the entry users make when they enter time on a timesheet. It is the curve equivalent of the time (or other actuals) entered for an assignment. The system updates the assignment actuals (prAssignment, prActCurve) when a user with timesheet administrator rights posts a timesheet. When the actuals on a timesheet ends after the assignment end date (prActThru), the system changes assignment end date to a date that coincides with the end of the timesheet actuals. |
| `PRRMEXPORTED` | NUMERIC | NOT NULL | A flag that indicates whether the time entry row has been processed and data sent to the project accounting component. |
| `PRRMCKDEL` | NUMERIC | NOT NULL | A flag that determines whether the system needs to notify the project accounting system that a row was deleted. |
| `SLICE_STATUS` | NUMERIC | NULL | Indicates whether the information in this table is out-of-date, currently being updated, or up-to-date. Values are: - Null = Up-to-date - 1 = Out-of-date with information in the PRJ_BLB_SLICES table - 2 = Time slicing background process is currently updating the PRJ_BLB_SLICES table with this information |
| `ROLE_ID` | NUMERIC | NULL | The role for direct time entries. This refers to PRJ_RESOURECES.PRID for rows where the PRISROLE flag is set. |
| `USER_LOV1` | NVARCHAR | NULL | Holds customer-defined lookup values. The lookup values are defined in lookup PRTIMEENTRY_USER_LOV1. |
| `USER_LOV2` | NVARCHAR | NULL | Holds customer-defined lookup values. The lookup values are defined in lookup PRTIMEENTRY_USER_LOV2. |
| `INCIDENT_ID` | NUMERIC | NULL | The incident ID if the time entry is for an incident. This refers to [[IMM_INCIDENTS]].ID. |
| `INCIDENT_INVESTMENT_ID` | NUMERIC | NULL |  |
| `SOURCE` | NVARCHAR | NULL | Specifies the location from which the current time entry was created. Used when the Catalyst Addin is installed. |
| `ODF_SS_ACTUALS` | NUMERIC | NULL |  |
| `FIN_WORK_TYPE` | NUMERIC | NULL | This column refers to the internal ID of lookup value of lookup type Financial Work Type. |
| `PRPROJECTID` | NUMERIC | NULL | This column refers to the investment id. |
| `PRTASKID` | NUMERIC | NULL | This column refers to the task id. |
| `PRRESOURCEID` | NUMERIC | NULL | This column refers to the resource id. |
| `RESOURCE_TEAM_ID` | NUMERIC | NULL | This column refers to the Team ID that current timesheet resource belongs to. |
| `FWT_TASK_ID` | NVARCHAR | NULL | The financial work type task id. |
| `FWT_COST_TYPE` | NVARCHAR | NULL | The financial work type cost type. |
| `ENTRY_METHOD` | NVARCHAR | NULL | Time entries are manual or automated |
| `JOB_TYPE_CODE` | NVARCHAR | NULL | Automated time entries store populating job code |
| `ODF_NK_PRACTCURVE` | NVARCHARMAX | NULL | SqlCurve information for practcurve |
| `ODF_FTE_PRACTCURVE` | NUMERIC | NOT NULL | This column contains fte conversion factor for actuals curve. |
| `ODF_SS_SQLCURVE` | INTEGER | NULL | This column indicates rows where the sqlcurve needs to be generated. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRID` | [[PRTYPECODE]].`PRID` | |
| `PRTIMESHEETID` | [[PRTIMESHEET]].`PRID` | |
| `PRASSIGNMENTID` | [[PRASSIGNMENT]].`PRID` | |
| `PRCHARGECODEID` | [[PRCHARGECODE]].`PRID` | |
| `PRTYPECODEID` | [[PRTYPECODE]].`PRID` | |
| `INCIDENT_ID` | [[IMM_INCIDENTS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[DWH_TMP_FIN_TRANSACTION]] | `EXTERNALTRANSNO` | `PRID` |
| [[PPA_TRANSCONTROL]] | `EXTERNALTRANSNO` | `PRID` |
| [[PPA_WIP]] | `EXTERNALTRANSNO` | `PRID` |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRLINK]], [[PRNOTE]], [[PRTASK]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]], [[SRM_COMPANIES]], [[SRM_PROJECTS]], [[SRM_RESOURCES]]

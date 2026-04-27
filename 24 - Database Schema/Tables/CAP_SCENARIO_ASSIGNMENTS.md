---
title: CAP_SCENARIO_ASSIGNMENTS
type: db-table
table: CAP_SCENARIO_ASSIGNMENTS
columns: 16
audience: dev
domain: development
canonical: true
erds:
  - Capacity
tags:
  - dev
  - schema
  - table
  - erd/capacity
---

# CAP_SCENARIO_ASSIGNMENTS

> [!info] Description
> This table stores information in rows copied from the PRASSIGNMENT table when investments are added to a scenario. Any changes made to assignments while in scenario mode are made to rows in this table.

## Subject areas (ERDs)
- [[_MOC - Capacity ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `ASSIGNMENT_ID` | NUMERIC | NOT NULL | This field refers to the original assignment in PRASSIGNMENT that was added to a scenario. |
| `SCENARIO_ID` | NUMERIC | NOT NULL | This field links the assignment records to a specific scenario. |
| `TASK_ID` | NUMERIC | NOT NULL | This field refers to the original task to which this assignment belongs. |
| `RESOURCE_ID` | NUMERIC | NOT NULL | This field refers to the resource on the assignment in a scenario. |
| `TEAM_ID` | NUMERIC | NULL | This field refers to the team record for the resource and the investment in the scenario. |
| `START_DATE` | DATE | NULL | This field contains the start date for an assignment in a scenario. |
| `FINISH_DATE` | DATE | NULL | This field is the assignment finish date for an assignment in a specific scenario. |
| `ESTIMATE_SUM` | FLOAT | NULL | This field contains the total estimated value computed during slicing. |
| `ACTUAL_SUM` | FLOAT | NULL | This field is a copy of the field in the PRASSIGNMENT table. |
| `PRACTTHRU` | DATE | NULL | This column refers to the actuals for any timesheet posted to the assignment. This is a copy of the value from the assignment that was added to the scenario. |
| `PREXTENSION` | BINARY | NULL | This column refers to the effort curve for an assignment in a scenario. |
| `SLICE_STATUS` | NUMERIC | NULL | This field indicates that the PREXTENSION field needs to be sliced. |
| `ODF_NK_PRESTCURVE` | NVARCHARMAX | NULL | This column contains a sqlcurve copy of the estimates curve for an assignment |
| `ODF_FTE_PRESTCURVE` | NUMERIC | NOT NULL | FTE conversion factor for the estimate curve |
| `MODIFIED_STATUS` | NVARCHAR | NULL | This column indicates if an assignment has been modified. |

## Related tables (same subject area)

[[CAP_SCENARIOS]], [[CAP_SCENARIO_MEMBERS]], [[CAP_SCENARIO_ROLES]], [[CAP_SCENARIO_TASKS]], [[CAP_SCENARIO_TEAM]], [[INV_INVESTMENTS]], [[PRASSIGNMENT]], [[PRTASK]], [[PRTEAM]]

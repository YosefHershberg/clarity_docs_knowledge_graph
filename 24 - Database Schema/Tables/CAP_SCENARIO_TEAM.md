---
title: CAP_SCENARIO_TEAM
type: db-table
table: CAP_SCENARIO_TEAM
columns: 39
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

# CAP_SCENARIO_TEAM

> [!info] Description
> This table stores information in rows copied from the PRTEAM table when investments are added to a scenario. Any changes made to teams while in scenario mode are made to rows in this table.

## Subject areas (ERDs)
- [[_MOC - Capacity ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `TEAM_ID` | NUMERIC | NOT NULL | This field refers to the original team record that was copied to the scenario. |
| `SCENARIO_ID` | NUMERIC | NOT NULL | This field contains the ID of the scenario to which this team row has been added. |
| `PRPROJECTID` | NUMERIC | NULL | This column refers to the investment to which the resource is assigned. |
| `PRRESOURCEID` | NUMERIC | NULL | This column refers to the resource assigned to an investment. |
| `PRROLEID` | NUMERIC | NULL | This column refers to the role which the resource fulfills on this investment. |
| `PRAVAILSTART` | DATE | NULL | This column refers to the date on which the resource is available to the investment. |
| `PRAVAILFINISH` | DATE | NULL | This column refers to the date on which the resource is no longer available to the investment. |
| `PRBOOKING` | NUMERIC | NULL | This column refers to a copy of the data from the PRTEAM table. |
| `PRALLOCSUM` | FLOAT | NULL | This column contains a computed total of the allocation of a resource to an investment. |
| `PRALLOCCURVE` | BINARY | NULL | This column contains a copy of the allocation curve for a resource on a project. In scenario mode, it is modified to reflect what-if changes in allocations. |
| `HARD_CURVE` | BINARY | NULL | This field contains a copy of the hard allocation curve for a resource on an investment. |
| `HARD_SUM` | FLOAT | NULL | This is a copy of the data from the row in the PRTEAM table. |
| `HARD_START` | DATE | NULL | This field refers to the date when a resource is fully committed to the investment. |
| `HARD_FINISH` | DATE | NULL | This field contains the date on which the resource is not fully committed to the investment. |
| `SLICE_STATUS` | NUMERIC | NULL | This field indicates that the allocation curve needs to be re-sliced. |
| `HARD_CURVE_SLICE_STATUS` | NUMERIC | NULL | This field indicates that the hard allocation curve needs to be re-sliced. |
| `FORECAST_RATE` | NUMERIC | NULL | This field refers to the original forecast rate of the team record. Used in the Resource Management module. Not available in CA PPM Studio. |
| `ODF_PRALLOCCURVE` | BINARY | NULL | This column contains a copy of the instantiated allocation curve for a resource on a project in the context of a scenario |
| `ODF_NK_ODF_PRALLOCCURVE` | NVARCHARMAX | NULL | This column contains a sqlcurve copy of the instantiated allocation curve for a resource on a project in the context of a scenario |
| `ODF_HARD_CURVE` | BINARY | NULL | This column contains a copy of the instantiated hard allocation curve for a resource on a project in the context of a scenario |
| `ODF_NK_ODF_HARD_CURVE` | NVARCHARMAX | NULL | This column contains a sqlcurve copy of the instantiated hard allocation curve for a resource on a project in the context of a scenario |
| `ODF_FTE_ODF_PRALLOCCURVE` | NUMERIC | NOT NULL | This column contains a fte conversion factor for the allocation curve for the team in the context of a scenario |
| `ODF_FTE_ODF_HARD_CURVE` | NUMERIC | NOT NULL | This column contains a fte conversion factor for the allocation curve for the team in the context of a scenario |
| `ESTIMATES_CURVE` | BINARY | NULL | This column contains a copy of the aggregated estimate curve for assignments for the team in the context of a scenario |
| `ODF_NK_ESTIMATES_CURVE` | NVARCHARMAX | NULL | This column contains a sqlcurve copy of the aggregated estimate curve for assignments for the team in the context of a scenario |
| `ODF_FTE_ESTIMATES_CURVE` | NUMERIC | NOT NULL | This column contains a fte conversion factor for the aggregated estimate curve for assignments for the team in the context of a scenario |
| `ACTUALS_CURVE` | BINARY | NULL | This column contains a copy of the aggregated actuals curve for assignments for the team in the context of a scenario |
| `ODF_NK_ACTUALS_CURVE` | NVARCHARMAX | NULL | This column contains a sqlcurve copy of the aggregated actuals curve for assignments for the team in the context of a scenario |
| `ODF_FTE_ACTUALS_CURVE` | NUMERIC | NOT NULL | This column contains a fte conversion factor for the aggregated actuals curve for assignments for the team in the context of a scenario |
| `TOTAL_USAGE_CURVE` | BINARY | NULL | This column contains a copy of the aggregated total usage curve for assignments for the team in the context of a scenario |
| `ODF_NK_TOTAL_USAGE_CURVE` | NVARCHARMAX | NULL | This column contains a sqlcurve copy of the aggregated total usage curve for assignments for the team in the context of a scenario |
| `ODF_FTE_TOTAL_USAGE_CURVE` | NUMERIC | NOT NULL | This column contains a fte conversion factor for the aggregated total usage curve for assignments for the team in the context of a scenario |
| `REMAIN_ALLOC_CURVE` | BINARY | NULL | This column contains a copy of the remaining allocation for the team in the context of a scenario |
| `ODF_NK_REMAIN_ALLOC_CURVE` | NVARCHARMAX | NULL | This column contains a sqlcurve copy of there remaining allocation for the team in the context of a scenario |
| `ODF_FTE_REMAIN_ALLOC_CURVE` | NUMERIC | NOT NULL | This column contains a fte conversion factor for the remaining allocation for the team in the context of a scenario |
| `ODF_SS_REMAIN_ALLOC_CURVE` | INTEGER | NULL | This column contains a slice status for recomputing remaining allocation for the team in the context of a scenario |
| `ODF_SS_ASSGNS_CURVE` | INTEGER | NULL | This column contains a slice status for recomputing sqlcurve and aggregation values for the team in the context of a scenario |
| `MODIFIED_STATUS` | NVARCHAR | NULL | This column indicates if a team has been modified. |

## Related tables (same subject area)

[[CAP_SCENARIOS]], [[CAP_SCENARIO_ASSIGNMENTS]], [[CAP_SCENARIO_MEMBERS]], [[CAP_SCENARIO_ROLES]], [[CAP_SCENARIO_TASKS]], [[INV_INVESTMENTS]], [[PRASSIGNMENT]], [[PRTASK]], [[PRTEAM]]

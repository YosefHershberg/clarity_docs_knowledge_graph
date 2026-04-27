---
title: PRJ_RESOURCE_SNAPSHOTS
type: db-table
table: PRJ_RESOURCE_SNAPSHOTS
columns: 56
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRJ_RESOURCE_SNAPSHOTS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL |  |
| `PRID` | NUMERIC | NULL |  |
| `PRCATEGORY` | NVARCHAR | NULL |  |
| `PRTYPECODEID` | NUMERIC | NULL |  |
| `PRISOPEN` | NUMERIC | NOT NULL |  |
| `PRTRACKMODE` | NUMERIC | NULL |  |
| `PRAVAILCURVE` | BINARY | NULL |  |
| `PRCALENDARID` | NUMERIC | NULL |  |
| `PRISROLE` | NUMERIC | NOT NULL |  |
| `PRUSERTEXT1` | NVARCHAR | NULL |  |
| `PRUSERTEXT2` | NVARCHAR | NULL |  |
| `PRUSERTEXT3` | NVARCHAR | NULL |  |
| `PRUSERTEXT4` | NVARCHAR | NULL |  |
| `PRUSERFLAG1` | NUMERIC | NOT NULL |  |
| `PRUSERFLAG2` | NUMERIC | NOT NULL |  |
| `PRUSERNUMBER1` | FLOAT | NULL |  |
| `PRUSERNUMBER2` | FLOAT | NULL |  |
| `PRPARENTID` | NUMERIC | NULL |  |
| `PRPRIMARYROLEID` | NUMERIC | NULL |  |
| `SLICE_STATUS` | NUMERIC | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `ODF_PRAVAILCURVE` | BINARY | NULL |  |
| `ODF_NK_ODF_PRAVAILCURVE` | NVARCHARMAX | NULL |  |
| `ODF_SS_AVAIL_CURVE` | NUMERIC | NULL |  |
| `ODF_NK_TOTAL_ALLOC` | NVARCHARMAX | NULL |  |
| `ODF_TOTAL_ALLOC` | BINARY | NULL |  |
| `ODF_TOTAL_HARD_ALLOC` | BINARY | NULL |  |
| `ODF_NK_TOTAL_HARD_ALLOC` | NVARCHARMAX | NULL |  |
| `ODF_SS_TOTAL_ALLOC_CURVE` | INTEGER | NULL |  |
| `ODF_SS_TOTAL_HARD_ALC_CURVE` | INTEGER | NULL |  |
| `ODF_TOTAL_ETC` | BINARY | NULL |  |
| `ODF_TOTAL_ACTUALS` | BINARY | NULL |  |
| `ODF_TOTAL_USAGE` | BINARY | NULL |  |
| `ODF_NK_TOTAL_ETC` | NVARCHARMAX | NULL |  |
| `ODF_NK_TOTAL_ACTUALS` | NVARCHARMAX | NULL |  |
| `ODF_NK_TOTAL_USAGE` | NVARCHARMAX | NULL |  |
| `ODF_SS_TOTAL_ETC_CURVE` | INTEGER | NULL |  |
| `ODF_SS_TOTAL_ACTUALS_CURVE` | INTEGER | NULL |  |
| `ODF_SS_TOTAL_USAGE_CURVE` | INTEGER | NULL |  |
| `ODF_SS_TEAM_AVAIL_CURVE` | INTEGER | NULL |  |
| `ID` | NUMERIC | NULL |  |
| `VERSION_ID` | NUMERIC | NULL |  |
| `ODF_REMAIN_AVAIL` | BINARY | NULL | Sql Curve representation of the remaining availability curve. |
| `ODF_NK_REMAIN_AVAIL` | NVARCHARMAX | NULL | ODF representation of the remaining availability curve. |
| `ODF_SS_REMAIN_AVAIL_CURVE` | INTEGER | NULL | Slice status indicator for the remaining availability curve. |
| `ODF_FTE_REMAIN_AVAIL` | NUMERIC | NOT NULL | FTE Conversion factor for the remaining availability curve. |
| `ODF_FTE_TOTAL_ALLOC` | NUMERIC | NOT NULL | FTE Conversion factor for the total allocation curve. |
| `ODF_FTE_TOTAL_HARD_ALLOC` | NUMERIC | NOT NULL | FTE Conversion factor for the total hard allocation curve. |
| `ODF_FTE_TOTAL_ETC` | NUMERIC | NOT NULL | FTE Conversion factor for the total estimates curve. |
| `ODF_FTE_TOTAL_ACTUALS` | NUMERIC | NOT NULL | FTE Conversion factor for the total actuals curve. |
| `ODF_FTE_TOTAL_USAGE` | NUMERIC | NOT NULL | FTE Conversion factor for the total usage curve. |
| `ODF_FTE_ODF_PRAVAILCURVE` | NUMERIC | NOT NULL | FTE Conversion factor for the availability curve. |
| `ODF_SS_SQLCURVE` | NUMERIC | NULL |  |

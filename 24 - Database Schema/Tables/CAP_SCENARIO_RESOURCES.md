---
title: CAP_SCENARIO_RESOURCES
type: db-table
table: CAP_SCENARIO_RESOURCES
columns: 27
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# CAP_SCENARIO_RESOURCES

> [!info] Description
> This table stores information about resources on investments which have been added to a scenario.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The primary key for the table. |
| `SCENARIO_ID` | NUMERIC | NOT NULL | The scenario this row is associated with. |
| `RESOURCE_ID` | NUMERIC | NOT NULL | This field refers to the resource this row represents. |
| `ODF_TOTAL_ALLOC` | BINARY | NULL | ODF representation of the total allocation for this resource across all investments in the scenario. |
| `ODF_NK_TOTAL_ALLOC` | NVARCHARMAX | NULL | Sql Curve representation of the total allocation. |
| `ODF_SS_TOTAL_ALLOC_CURVE` | INTEGER | NULL | Slice status for the total allocation column |
| `ODF_FTE_TOTAL_ALLOC` | NUMERIC | NOT NULL | FTE Conversion factor for the total allocation curve. |
| `ODF_TOTAL_HARD_ALLOC` | BINARY | NULL | ODF representation of the total hard allocation for this resource across all investments in the scenario. |
| `ODF_NK_TOTAL_HARD_ALLOC` | NVARCHARMAX | NULL | Sql Curve representation of the total hard allocation. |
| `ODF_SS_TOTAL_HARD_ALC_CURVE` | INTEGER | NULL | Slice status for the total hard allocation column |
| `ODF_FTE_TOTAL_HARD_ALLOC` | NUMERIC | NOT NULL | FTE Conversion factor for the total hard allocation curve. |
| `ODF_TOTAL_ETC` | BINARY | NULL | ODF representation of the total ETC for this resource across all investments in the scenario. |
| `ODF_NK_TOTAL_ETC` | NVARCHARMAX | NULL | Sql Curve representation of the total assignment etc. |
| `ODF_SS_TOTAL_ETC_CURVE` | INTEGER | NULL | Slice status for the total assignment etc. |
| `ODF_FTE_TOTAL_ETC` | NUMERIC | NOT NULL | FTE Conversion factor for the total estimates curve. |
| `ODF_TOTAL_ACTUALS` | BINARY | NULL | ODF representation of the total assignment actuals. |
| `ODF_NK_TOTAL_ACTUALS` | NVARCHARMAX | NULL | Sql Curve representation of the total assignment actuals. |
| `ODF_SS_TOTAL_ACTUALS_CURVE` | INTEGER | NULL | Slice status for the total assignment actuals. |
| `ODF_FTE_TOTAL_ACTUALS` | NUMERIC | NOT NULL | FTE Conversion factor for the total actuals curve. |
| `ODF_TOTAL_USAGE` | BINARY | NULL | ODF representation of the total assignment usage. |
| `ODF_NK_TOTAL_USAGE` | NVARCHARMAX | NULL | Sql Curve representation of the total assignment usage. |
| `ODF_SS_TOTAL_USAGE_CURVE` | INTEGER | NULL | Slice status for the total assignment usage. |
| `ODF_FTE_TOTAL_USAGE` | NUMERIC | NOT NULL | FTE Conversion factor for the total usage curve. |
| `ODF_REMAIN_AVAIL` | BINARY | NULL | ODF representation of the remaining availability curve. |
| `ODF_NK_REMAIN_AVAIL` | NVARCHARMAX | NULL | ODF representation of the remaining availability curve. |
| `ODF_SS_REMAIN_AVAIL_CURVE` | INTEGER | NULL | Slice status indicator for the remaining availability curve. |
| `ODF_FTE_REMAIN_AVAIL` | NUMERIC | NOT NULL | FTE Conversion factor for the remaining availability curve. |

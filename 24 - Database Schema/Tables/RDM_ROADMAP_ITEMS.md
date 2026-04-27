---
title: RDM_ROADMAP_ITEMS
type: db-table
table: RDM_ROADMAP_ITEMS
columns: 119
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RDM_ROADMAP_ITEMS

> [!info] Description
> This table contain rows that describe roadmap items.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the roadmap item. |
| `NAME` | NVARCHAR | NULL | This column refers to the name of the roadmap item. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the roadmap item. |
| `ROADMAP_ID` | NUMERIC | NOT NULL | This column refers to the unique id of the roadmap that contains the roadmap item. |
| `SCENARIO_ID` | NUMERIC | NOT NULL | This column refers to the unique id of the scenario that contains the roadmap item. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the roadmap item was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the roadmap item. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the roadmap item was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the roadmap item. |
| `ACTUAL` | NUMERIC | NULL | This column refers to the actual capacity for the roadmap item. |
| `ACTUAL_CAPITAL_COST` | NUMERIC | NULL | This column refers to the actual capital cost of the roadmap item. |
| `ACTUAL_OPERATING_COST` | NUMERIC | NULL | This column refers to the actual opertaing cost of the roadmap item. |
| `BENEFIT` | NUMERIC | NULL | This column refers to the benefit of the roadmap item. |
| `CAPACITY` | NUMERIC | NULL | This column refers to the capacity of the roadmap item. |
| `CAPITAL_COST` | NUMERIC | NULL | This column refers to the capital cost of the roadmap item. |
| `CURRENCY_CODE` | NVARCHAR | NULL | This column refers to the ISO currency code of the roadmap item. |
| `DESCRIPTION` | NVARCHAR | NULL | This column refers to the description of the roadmap item. |
| `FINISH_DATE` | DATE | NULL | This column refers to the finish date of the roadmap item. |
| `IN_PLAN` | INTEGER | NULL | This column indicates whether the roadmap item is in plan and how it was added to the plan. |
| `IRR` | NUMERIC | NULL | This column refers to the internal rtate of return for the roadmap item. |
| `NOTE` | NVARCHAR | NULL | This column refers to a note for the roadmap item. |
| `NPV` | NUMERIC | NULL | This column refers to the NPV for the roadmap item. |
| `OPERATING_COST` | NUMERIC | NULL | This column refers to the operating cost of the roadmap item. |
| `OWNER` | NUMERIC | NULL | This column refers to the resource id of the owner of the roadmap item. |
| `PAYBACK_PERIOD` | NUMERIC | NULL | This column refers to the payback period of the roadmap item. |
| `RANK` | NUMERIC | NULL | This column refers to the rank of the roadmap item. |
| `ROI` | NUMERIC | NULL | This column refers to the return on investment for the roadmap item. |
| `SPONSOR` | NUMERIC | NULL | This column refers to the resource ID of the sponsor of the roadmap item. |
| `START_DATE` | DATE | NULL | This column refers to the starting date of the roadmap item. |
| `STATUS` | NVARCHAR | NULL | This column refers to the status of the roadmap item. |
| `TYPE` | NVARCHAR | NULL | This column refers to the type of the roadmap item. |
| `LINKED_INTERNAL_ID` | NUMERIC | NULL | This column refers to linked id with roadmap item |
| `SYNC` | NUMERIC | NOT NULL | This column indicates whether the roadmap item is enabled for syncing |
| `LAST_SYNCED_DATE` | DATE | NULL | This column indicates when the roadmap item was last synced to investment |
| `BENEFIT_TSV` | BINARY | NULL | This column defines the time-varying benefit of the roadmap item |
| `BENEFIT_CLIPPED` | NUMERIC | NULL | This column refers to the clipped value of roadmap item benefit |
| `CAPITAL_COST_TSV` | BINARY | NULL | This column defines the time-varying capital cost of the roadmap item |
| `CAPITAL_COST_CLIPPED` | NUMERIC | NULL | This column refers to the clipped value of roadmap item capital cost |
| `OPERATING_COST_TSV` | BINARY | NULL | This column defines the time-varying operating cost of the roadmap item |
| `OPERATING_COST_CLIPPED` | NUMERIC | NULL | This column refers to the clipped value of roadmap item operating cost |
| `ACTUAL_CAPITAL_COST_TSV` | BINARY | NULL | This column defines the time-varying actual capital cost of the roadmap item |
| `ACTUAL_CAPITAL_COST_CLIPPED` | NUMERIC | NULL | This column refers to the clipped value of roadmap item actual capital cost |
| `ACTUAL_OPERATING_COST_TSV` | BINARY | NULL | This column defines the time-varying actual operating cost of the roadmap item |
| `ACTUAL_OPERATING_COST_CLIPPED` | NUMERIC | NULL | This column refers to the clipped value of roadmap item actual operating cost |
| `ACTUAL_TSV` | BINARY | NULL | This column refers to the time-varying actuals |
| `ACTUAL_CLIPPED` | NUMERIC | NULL | This column refers to the clipped value of roadmap item actuals |
| `CAPACITY_TSV` | BINARY | NULL | This column refers to the time-varying capacity |
| `CAPACITY_CLIPPED` | NUMERIC | NULL | This column refers to the clipped value of roadmap item capacity |
| `ODF_SS_BENEFIT_TSV` | NUMERIC | NULL |  |
| `ODF_SS_ACTUAL_TSV` | NUMERIC | NULL |  |
| `ODF_SS_CAP_COST_TSV` | NUMERIC | NULL |  |
| `ODF_SS_ACTUAL_OP_COST_TSV` | NUMERIC | NULL |  |
| `ODF_SS_ACTUAL_CAP_COST_TSV` | NUMERIC | NULL |  |
| `ODF_SS_OP_COST_TSV` | NUMERIC | NULL |  |
| `ODF_SS_CAPACITY_TSV` | NUMERIC | NULL |  |
| `GOAL_CODE` | NVARCHAR | NULL | This column refers to the goal of the roadmap item. |
| `ODF_NK_ACTUAL_TSV` | NVARCHARMAX | NULL | SqlCurve information for ACTUAL_TSV |
| `ODF_NK_ACTUAL_CAPITAL_COST_TSV` | NVARCHARMAX | NULL | SqlCurve information for ACTUAL_CAPITAL_COST_TSV |
| `ODF_NK_ACTUAL_OPERATING_COST_TSV` | NVARCHARMAX | NULL | SqlCurve information for ACTUAL_OPERATING_COST_TSV |
| `ODF_NK_BENEFIT_TSV` | NVARCHARMAX | NULL | SqlCurve information for BENEFIT_TSV |
| `ODF_NK_CAPACITY_TSV` | NVARCHARMAX | NULL | SqlCurve information for CAPACITY_TSV |
| `ODF_NK_CAPITAL_COST_TSV` | NVARCHARMAX | NULL | SqlCurve information for CAPITAL_COST_TSV |
| `ODF_NK_OPERATING_COST_TSV` | NVARCHARMAX | NULL | SqlCurve information for OPERATING_COST_TSV |
| `MANAGER_ID` | NUMERIC | NULL | This column refers to the manager of the roadmap item. |
| `PRIORITY` | NUMERIC | NULL | This column refers to the priority of the roadmap item. |
| `STATUS_INDICATOR` | NUMERIC | NULL | value that indicates the overall status of the roadmap item. |
| `STAGE_CODE` | NVARCHAR | NULL | The current stage of this roadmap item in the process that it is following. |
| `INV_STATUS` | NUMERIC | NULL | The approval status of the roadmap item. |
| `FCST_CAP_COST` | NUMERIC | NULL | The rmi's forecast capital cost. |
| `FCST_OP_COST` | NUMERIC | NULL | The rmi's forecast operating cost. |
| `BUDGET_CAP_COST` | NUMERIC | NULL | The rmi's budget capital cost |
| `BUDGET_OP_COST` | NUMERIC | NULL | The rmi's budget operating cost |
| `BUDGET_CAP_COST_TSV` | BINARY | NULL | The time-sliced value of the rmi's budget capital cost value. |
| `BUDGET_OP_COST_TSV` | BINARY | NULL | The time-sliced value of the rmi's budget operating cost value. |
| `FCST_CAP_COST_TSV` | BINARY | NULL | The time-sliced value of the rmi's forecast capital cost value. |
| `FCST_OP_COST_TSV` | BINARY | NULL | The time-sliced value of the rmi's forecast operating cost value. |
| `ODF_NK_FCST_CAP_COST_TSV` | NVARCHARMAX | NULL | SqlCurve version of the rmi's forecast capital cost value. |
| `ODF_NK_FCST_OP_COST_TSV` | NVARCHARMAX | NULL | SqlCurve version of the rmi's forecast operating cost value. |
| `ODF_NK_BUDGET_CAP_COST_TSV` | NVARCHARMAX | NULL | SqlCurve version of the rmi's budget capital cost value. |
| `ODF_NK_BUDGET_OP_COST_TSV` | NVARCHARMAX | NULL | SqlCurve version of the rmi's budget operating cost value. |
| `LOCATIONID` | NVARCHAR | NULL | The location code of the investment this rmi is linked to. |
| `DEPARTCODE` | NVARCHAR | NULL | The department code of the investment this rmi is linked to. |
| `ODF_SS_FCST_CST_CAP_TSV` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_COST_CAP_TSV` | NUMERIC | NULL |  |
| `ODF_SS_FCST_CST_OP_TSV` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_COST_OP_TSV` | NUMERIC | NULL |  |
| `PARENT_ID` | NUMERIC | NULL | Parent Investment of linked investment |
| `ODF_FTE_CAPACITY_TSV` | NUMERIC | NOT NULL | This column is a FTE conversion factor for capacity curve. |
| `ODF_FTE_ACTUAL_TSV` | NUMERIC | NOT NULL | This column is a FTE conversion factor for actuals curve. |
| `ITEM_DESCRIPTION` | NVARCHARMAX | NULL | Rich text field to sync with external objects. |
| `PLAN_REV_TSV` | BINARY | NULL | The time-sliced value of the roadmap item's planned revenue value. |
| `PLAN_ACT_REV_TSV` | BINARY | NULL | The time-sliced value of the roadmap item's planned actual revenue value. |
| `BUDGET_REV_TSV` | BINARY | NULL | The time-sliced value of the roadmap item's budget revenue value. |
| `BUDGET_ACT_REV_TSV` | BINARY | NULL | The time-sliced value of the roadmap item's budget actual revenue value. |
| `PLAN_ACT_BEN_TSV` | BINARY | NULL | The time-sliced value of the roadmap item's planned actual benefit value. |
| `BUDGET_BEN_TSV` | BINARY | NULL | The time-sliced value of the roadmap item's budget benefit value. |
| `BUDGET_ACT_BEN_TSV` | BINARY | NULL | The time-sliced value of the roadmap item's budget actual benefit value. |
| `PLAN_REV` | NUMERIC | NULL | The roadmap item's planned revenue value. |
| `PLAN_ACT_REV` | NUMERIC | NULL | The roadmap item's planned actual revenue value. |
| `BUDGET_REV` | NUMERIC | NULL | The roadmap item's budget revenue value. |
| `BUDGET_ACT_REV` | NUMERIC | NULL | The roadmap item's budget actual revenue value. |
| `PLAN_ACT_BEN` | NUMERIC | NULL | The roadmap item's planned actual benefit value. |
| `BUDGET_BEN` | NUMERIC | NULL | The roadmap item's budget benefit value. |
| `BUDGET_ACT_BEN` | NUMERIC | NULL | The roadmap item's budget actual benefit value. |
| `ODF_NK_PLAN_REV_TSV` | NVARCHARMAX | NULL | SqlCurve version of the roadmap item's planned revenue value. |
| `ODF_NK_PLAN_ACT_REV_TSV` | NVARCHARMAX | NULL | SqlCurve version of the roadmap item's planned actual revenue value. |
| `ODF_NK_BUDGET_REV_TSV` | NVARCHARMAX | NULL | SqlCurve version of the roadmap item's budget revenue value. |
| `ODF_NK_BUDGET_ACT_REV_TSV` | NVARCHARMAX | NULL | SqlCurve version of the roadmap item's budget actual revenue value. |
| `ODF_NK_PLAN_ACT_BEN_TSV` | NVARCHARMAX | NULL | SqlCurve version of the roadmap item's planned actual benefit value. |
| `ODF_NK_BUDGET_BEN_TSV` | NVARCHARMAX | NULL | SqlCurve version of the roadmap item's budget benefit value. |
| `ODF_NK_BUDGET_ACT_BEN_TSV` | NVARCHARMAX | NULL | SqlCurve version of the roadmap item's budget actual benefit value. |
| `ODF_SS_BUDGET_REV_TSV` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_ACT_REV_TSV` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_BEN_TSV` | NUMERIC | NULL |  |
| `ODF_SS_PLAN_ACT_BEN_TSV` | NUMERIC | NULL |  |
| `ODF_SS_BUDGET_ACT_BEN_TSV` | NUMERIC | NULL |  |
| `ODF_SS_PLAN_ACT_REV_TSV` | NUMERIC | NULL |  |
| `ODF_SS_PLAN_REV_TSV` | NUMERIC | NULL |  |
| `ODF_SS_SQLCURVE` | NUMERIC | NULL |  |

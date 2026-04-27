---
title: PRTEAM_SNAPSHOTS
type: db-table
table: PRTEAM_SNAPSHOTS
columns: 70
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRTEAM_SNAPSHOTS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL |  |
| `PRID` | NUMERIC | NULL |  |
| `PRPROJECTID` | NUMERIC | NULL |  |
| `PRRESOURCEID` | NUMERIC | NULL |  |
| `PRISOPEN` | NUMERIC | NOT NULL |  |
| `PRAVAILSTART` | DATE | NULL |  |
| `PRAVAILFINISH` | DATE | NULL |  |
| `PRBOOKING` | NUMERIC | NULL |  |
| `PRSTATUS` | NUMERIC | NULL |  |
| `PRALLOCSUM` | FLOAT | NULL |  |
| `PRALLOCCURVE` | BINARY | NULL |  |
| `PRROLEID` | NUMERIC | NULL |  |
| `COPIED_FROM_TEMPLATE_ROLE` | NUMERIC | NULL |  |
| `SLICE_STATUS` | NUMERIC | NULL |  |
| `REQUIREMENT_NAME` | NVARCHAR | NULL |  |
| `TEAM_UID` | NVARCHAR | NULL |  |
| `INCIDENT_ACT_SUM` | FLOAT | NULL |  |
| `INCIDENT_ACT_CURVE` | BINARY | NULL |  |
| `INCIDENT_SLICE_STATUS` | NUMERIC | NULL |  |
| `RSF_OBSUNIT_ID` | NUMERIC | NULL |  |
| `RSF_PERSON_TYPE` | NUMERIC | NULL |  |
| `RSF_RESUME_KEYWORDS` | NVARCHAR | NULL |  |
| `HARD_SLICE_STATUS` | NUMERIC | NULL |  |
| `HARD_CURVE` | BINARY | NULL |  |
| `HARD_SUM` | FLOAT | NULL |  |
| `HARD_START` | DATE | NULL |  |
| `HARD_FINISH` | DATE | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `CAPITAL_PERCENTAGE` | NUMERIC | NOT NULL |  |
| `ALLOCCOST_CURVE` | BINARY | NULL |  |
| `ALLOCCOST_SUM` | NUMERIC | NULL |  |
| `HARDALLCCOST_CURVE` | BINARY | NULL |  |
| `HARDALLCCOST_SUM` | NUMERIC | NULL |  |
| `ODF_SS_ALLOCCOST_CURVE` | NUMERIC | NULL |  |
| `ODF_SS_HARDALLCCOST_CURVE` | NUMERIC | NULL |  |
| `ODF_PRALLOCCURVE` | BINARY | NULL |  |
| `ODF_HARD_CURVE` | BINARY | NULL |  |
| `FORECAST_RATE` | NUMERIC | NULL |  |
| `REQUESTED_MANAGER_ID` | NUMERIC | NULL |  |
| `ODF_SS_ALLOCATION_CURVE` | NUMERIC | NULL |  |
| `ODF_SS_HARD_ALLOC_CURVE` | NUMERIC | NULL |  |
| `ODF_NK_ALLOCCOST_CURVE` | NVARCHARMAX | NULL |  |
| `ODF_NK_HARDALLCCOST_CURVE` | NVARCHARMAX | NULL |  |
| `ODF_NK_ODF_PRALLOCCURVE` | NVARCHARMAX | NULL |  |
| `ODF_NK_ODF_HARD_CURVE` | NVARCHARMAX | NULL |  |
| `ESTIMATES_CURVE` | BINARY | NULL |  |
| `ODF_NK_ESTIMATES_CURVE` | NVARCHARMAX | NULL |  |
| `ACTUALS_CURVE` | BINARY | NULL |  |
| `ODF_NK_ACTUALS_CURVE` | NVARCHARMAX | NULL |  |
| `ODF_SS_ASSGNS_CURVE` | INTEGER | NULL |  |
| `ODF_SS_ESTIMATES_CURVE` | NUMERIC | NULL |  |
| `ODF_SS_ACTUALS_CURVE` | NUMERIC | NULL |  |
| `ID` | NUMERIC | NULL |  |
| `VERSION_ID` | NUMERIC | NULL |  |
| `ODF_FTE_ODF_PRALLOCCURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for allocation curve. |
| `ODF_FTE_ODF_HARD_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for hard allocation curve. |
| `ODF_FTE_ESTIMATES_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for estimates curve. |
| `ODF_FTE_ACTUALS_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for actuals curve. |
| `TOTAL_USAGE_CURVE` | BINARY | NULL | ODF representation of the total usage curve. |
| `ODF_NK_TOTAL_USAGE_CURVE` | NVARCHARMAX | NULL | Sqlcurve representation of the total usage curve. |
| `ODF_FTE_TOTAL_USAGE_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for total usage curve. |
| `REMAIN_ALLOC_CURVE` | BINARY | NULL | ODF representation of the remaining allocation curve. |
| `ODF_NK_REMAIN_ALLOC_CURVE` | NVARCHARMAX | NULL | Sqlcurve representation of the remaining allocation curve. |
| `ODF_SS_REMAIN_ALLOC_CURVE` | INTEGER | NULL | This column indicates that remaining allocation needs to be recomputed. |
| `ODF_FTE_REMAIN_ALLOC_CURVE` | NUMERIC | NOT NULL | This column is a FTE conversion factor for remaining allocation curve. |
| `ODF_SS_TOTAL_USAGE_CURVE` | INTEGER | NULL | This column indicates that total usage curve needs to be recomputed. |
| `ODF_SS_SQLCURVE` | NUMERIC | NULL |  |

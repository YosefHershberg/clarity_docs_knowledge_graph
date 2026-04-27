---
title: DWH_TRD_TREND
type: db-table
table: DWH_TRD_TREND
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_TRD_TREND

> [!info] Description
> Trending header table.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TREND_KEY` | NUMERIC | NOT NULL | Unique key of the trend. |
| `TREND_NAME` | NVARCHAR | NULL | Name of the trend. |
| `TREND_TYPE` | NVARCHAR | NOT NULL | Trend table grouping for processing. |
| `TREND_PERIOD` | NVARCHAR | NOT NULL | Scheduling period. |
| `TREND_START_DATE` | DATE | NOT NULL | Date and time the trending population started for the current table. |
| `TREND_END_DATE` | DATE | NOT NULL | Date and time the trending population ended for the current table. |
| `TREND_YEAR` | NUMERIC | NULL | Year for the trending data. |
| `IS_ACTIVE` | NUMERIC | NULL | Is the current trend active?. |
| `CREATED_DATE` | DATE | NOT NULL | Date and time the trending population was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date and time the trending population was last updated. |
| `FISCAL_YEAR_KEY` | NUMERIC | NULL | Year key for the trend |

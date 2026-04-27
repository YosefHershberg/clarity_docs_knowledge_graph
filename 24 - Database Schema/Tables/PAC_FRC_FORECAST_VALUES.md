---
title: PAC_FRC_FORECAST_VALUES
type: db-table
table: PAC_FRC_FORECAST_VALUES
columns: 7
audience: dev
domain: development
canonical: true
fk_targets:
  - PAC_FRC_FORECAST_DETAILS
tags:
  - dev
  - schema
  - table
---

# PAC_FRC_FORECAST_VALUES

> [!info] Description
> This table stores the monetary values for the different currency types for a plan detail. This table is obsolete for 8.0 and later releases.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `FORECAST_DETAILS_ID` | NUMERIC | NOT NULL | This refers to [[PAC_FRC_FORECAST_DETAILS]].ID. |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | The ISO 3-letter currency code. |
| `COST` | NUMERIC | NULL | The plan cost amount. |
| `REVENUE` | NUMERIC | NULL | The plan revenue amount. |
| `ACTUAL_BENEFITS` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `FORECAST_DETAILS_ID` | [[PAC_FRC_FORECAST_DETAILS]].`ID` | |

---
title: DWH_SETTINGS
type: db-table
table: DWH_SETTINGS
columns: 15
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_SETTINGS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `CORE_LANGUAGE_KEY` | NVARCHAR | NOT NULL |  |
| `ENTITY_KEY` | NVARCHAR | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `WEEKLY_SLICES` | NUMERIC | NOT NULL |  |
| `MONTHLY_SLICES` | NUMERIC | NOT NULL |  |
| `FISCAL_SLICES` | NUMERIC | NOT NULL |  |
| `ONE_SET_OF_FISCAL_PERIODS` | NUMERIC | NOT NULL |  |
| `DISABLE_RESOURCE_SECURITY` | NUMERIC | NOT NULL |  |
| `DISABLE_INVESTMENT_SECURITY` | NUMERIC | NOT NULL |  |
| `FIN_PLANS_POR_ONLY` | NUMERIC | NOT NULL | Flag to populate financial plans Plan of Records only. |
| `ENABLE_PLAN_ACTUALS` | INTEGER | NULL |  |

---
title: RDM_PRE_PROCESSED_ATTRS
type: db-table
table: RDM_PRE_PROCESSED_ATTRS
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RDM_PRE_PROCESSED_ATTRS

> [!info] Description
> Pocessed Actual costs, Capcity and actual of the Roadmap Items will be stored here before copied to RDM_ROADMAP_ITEMS table.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `INVESTMENT_ID` | NUMERIC | NOT NULL | Investment Id. |
| `SCENARIO_ID` | NUMERIC | NOT NULL | Roadmap Scenario Id. |
| `ACTUAL_CAPITAL_COST_TSV` | BINARY | NULL | Time scale values of actual capital cost of the roadmap item |
| `ACTUAL_CAPITAL_COST_TOTAL` | NUMERIC | NULL | Total value of roadmap item actual capital cost |
| `ACTUAL_OPERATING_COST_TSV` | BINARY | NULL | Time scale values of actual operating cost of the roadmap item |
| `ACTUAL_OPERATING_COST_TOTAL` | NUMERIC | NULL | Total value of roadmap item actual operating cost |
| `CAPACITY_TSV` | BINARY | NULL | Time scale values of capacity values of the roadmap item |
| `CAPACITY_TOTAL` | NUMERIC | NULL | Total value of roadmap item capacity |
| `ACTUAL_TSV` | BINARY | NULL | Time scale values of actual of the roadmap item |
| `ACTUAL_TOTAL` | NUMERIC | NULL | Total value of roadmap item actual |

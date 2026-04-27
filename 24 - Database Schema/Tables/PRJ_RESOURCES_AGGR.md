---
title: PRJ_RESOURCES_AGGR
type: db-table
table: PRJ_RESOURCES_AGGR
columns: 4
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRJ_RESOURCES_AGGR

> [!info] Description
> This table is used to record a list of resources to reaggregate total values.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRID` | NUMERIC | NOT NULL | This column refers to the primary key of the resource. |
| `AGGR_TYPE` | NVARCHAR | NOT NULL | The type of of aggregation required for the resource. |
| `SCENARIO_ID` | NUMERIC | NOT NULL | This column refers to the primary key of a scenario. |
| `CREATED_DATE` | DATE | NOT NULL | The date and time this row was created. |

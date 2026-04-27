---
title: PRJ_FISCAL_BLB_SLICES
type: db-table
table: PRJ_FISCAL_BLB_SLICES
columns: 5
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRJ_FISCAL_BLB_SLICES

> [!info] Description
> This table contains fiscal slice request data used by the data warehouse

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `SLICE_REQUEST_ID` | NUMERIC | NULL | This column refers to the slice request definition in PRJ_BLB_SLICEREQUESTS |
| `PRJ_OBJECT_ID` | NUMERIC | NULL | This column refers to the object id from which the slices are generated |
| `PERIOD_ID` | NUMERIC | NULL | This column is a foreign key into BIZ_COM_PERIODS with the definition of the period |
| `SLICE` | NUMERIC | NULL | This column is the numeric value generated from the object based on the slice request definition period |
| `CREATED_DATE` | DATE | NOT NULL | This column is date the slice was created |

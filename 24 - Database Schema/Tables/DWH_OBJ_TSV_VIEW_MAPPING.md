---
title: DWH_OBJ_TSV_VIEW_MAPPING
type: db-table
table: DWH_OBJ_TSV_VIEW_MAPPING
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_OBJ_TSV_VIEW_MAPPING

> [!info] Description
> This table holds the fact view mapping for custom TSV attributes on stock objects in JapserSoft domains

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The unique ID for this record. |
| `OBJECT_CODE` | NVARCHAR | NULL | The object code. |
| `PERIOD_FACT_VIEW` | NVARCHAR | NULL | The period fact view name for this object. |
| `PERIOD_VIEW` | NVARCHAR | NULL | The common period view name for this object. |
| `DWH_FACT_TABLE_NAME` | NVARCHAR | NULL | The fact table name for this object. |
| `DWH_FACT_KEY_NAME` | NVARCHAR | NULL | The key column name in fact table for this object. |
| `DISPLAY_SET_ID` | NVARCHAR | NULL | The display set id for TSV attribute on this object in the Jaspersoft domains. |
| `PERIOD_TYPE` | NVARCHAR | NULL | The period type. |
| `SUFFIX` | NVARCHAR | NULL | The suffix, in case TSV attributes for multiple objects are available from the same view. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Last updated date for this record. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Last updated by user. |

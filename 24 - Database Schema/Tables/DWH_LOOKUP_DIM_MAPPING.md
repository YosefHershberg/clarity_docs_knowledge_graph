---
title: DWH_LOOKUP_DIM_MAPPING
type: db-table
table: DWH_LOOKUP_DIM_MAPPING
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_LOOKUP_DIM_MAPPING

> [!info] Description
> This table stores the meta data for Clarity Lookup to Data Warehouse Dimension table mapping.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `LOOKUP_TYPE` | NVARCHAR | NOT NULL | This column signifies the Clarity Lookup Type. |
| `LKP_DIM_TABLE_NAME` | NVARCHAR | NOT NULL | This column refers the Dimension table in Data Warehouse which maps to the Lookup Type. |
| `DIM_KEY` | NVARCHAR | NOT NULL | This column refers to the column in the specified LKP_DIM_TABLE_NAME whose value should be used as key to update lookup value. |
| `DIM_DISPLAY` | NVARCHAR | NOT NULL | This column refers to the column in the specified LKP_DIM_TABLE_NAME whose value should be used as value to update lookup value. |
| `DIM_TGT_KEY` | NVARCHAR | NOT NULL | This column refers to the column in the DIM_TGT_TABLE whose value should be fetched as key value when populating Data Warehouse. |
| `DIM_TGT_DISPLAY` | NVARCHAR | NOT NULL | This column refers to the column in the DIM_TGT_TABLE whose value should be fetched as display value when populating Data Warehouse. |
| `DIM_TGT_TABLE` | NVARCHAR | NOT NULL | This column refers to the source table which maps to the LKP_DIM_TABLE_NAME in Data Warehouse. |
| `DIM_TGT_QRY_KEY` | NVARCHAR | NOT NULL | This column refers to the column in the DIM_TGT_TABLE whose value matches the Lookup attribute value. |
| `DIM_LKP_MULTI_LANG` | NUMERIC | NOT NULL | This column signifies if the LOOKUP_TYPE values are localized values. |

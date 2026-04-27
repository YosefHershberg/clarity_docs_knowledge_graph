---
title: INT_EXT_PFM_ITEMS
type: db-table
table: INT_EXT_PFM_ITEMS
columns: 14
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_EXT_PFM_ITEMS

> [!info] Description
> This table stores External Portfolio Item of the Integration.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `INTEGRATION_CODE` | NVARCHAR | NOT NULL | Code of the Integration Object stored in the NMC_INTEGRATIONS table. |
| `CODE` | NVARCHAR | NOT NULL | Code of the External Portfolio Item. |
| `NAME` | NVARCHAR | NOT NULL | Name of the External Portfolio Item. |
| `EXTERNAL_API_ALIAS` | NVARCHAR | NOT NULL | API alias or Element Name of the External Portfolio Item. |
| `TYPE_PATH` | NVARCHAR | NULL | TypePath of the External Portfolio Item. |
| `OBJ_UUID` | NVARCHAR | NULL | The Portfolio Item Object UUID. |
| `OBJ_ID` | NVARCHAR | NULL | The Portfolio Item Object ID. |
| `EXT_ORDINAL` | NUMERIC | NULL | The Ordinal number of a portfolio item. This helps to determine the order of parent and child |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |

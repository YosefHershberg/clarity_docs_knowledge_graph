---
title: INT_EXT_CLARITY_MAP
type: db-table
table: INT_EXT_CLARITY_MAP
columns: 13
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_EXT_CLARITY_MAP

> [!info] Description
> This table stores External to Clarity Lookup Option Mappings of the Integration.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the External to Clarity Mappings. |
| `NAME` | NVARCHAR | NULL | Name of the External to Clarity Mappings. |
| `LM_ID` | NUMERIC | NOT NULL | Parent id of the record. |
| `EXTERNAL_VALUE` | NVARCHAR | NULL | The External Lookup Value. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The External Lookup Id. |
| `CLARITY_VALUE` | NVARCHAR | NULL | The Clarity Dropdown Name. |
| `CLARITY_ID` | NVARCHAR | NULL | The Clarity Dropdown Id. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |

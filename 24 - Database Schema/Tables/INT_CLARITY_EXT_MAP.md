---
title: INT_CLARITY_EXT_MAP
type: db-table
table: INT_CLARITY_EXT_MAP
columns: 13
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_CLARITY_EXT_MAP

> [!info] Description
> This table stores Clarity to External Lookup Option Mappings of the Integration.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the Clarity to External Mappings. |
| `NAME` | NVARCHAR | NULL | Name of the Clarity to External Mappings. |
| `LM_ID` | NUMERIC | NOT NULL | Parent id of the record. |
| `CLARITY_VALUE` | NVARCHAR | NULL | The Clarity Lookup Value. |
| `CLARITY_ID` | NVARCHAR | NULL | The Clarity Lookup Id |
| `EXTERNAL_VALUE` | NVARCHAR | NULL | The External Dropdown Name. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The External Dropdown Id. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |

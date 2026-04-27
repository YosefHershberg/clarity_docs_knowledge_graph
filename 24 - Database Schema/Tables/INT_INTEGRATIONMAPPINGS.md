---
title: INT_INTEGRATIONMAPPINGS
type: db-table
table: INT_INTEGRATIONMAPPINGS
columns: 21
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_INTEGRATIONMAPPINGS

> [!info] Description
> This table stores Integration Mapping details between two systems.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the Integration Mapping. |
| `NAME` | NVARCHAR | NOT NULL | Name of the Integration Mapping. |
| `INTERNAL_URL` | NVARCHAR | NULL | The Source System URL |
| `INTEGRATION` | NVARCHAR | NOT NULL | The Integration Target Instance. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `STAGING_OBJECT_ALIAS` | NVARCHAR | NULL | The Staging Object alias for this integration mapping. |
| `STAGING_OBJECT_CODE` | NVARCHAR | NULL | The Staging Object code for this integration mapping. |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `CLARITY_STAGE_ALIAS` | NVARCHAR | NULL | Alias for clarity staging object for this integration mapping. |
| `CLARITY_STAGE_CODE` | NVARCHAR | NULL | Code for clarity staging object for this integration mapping. |
| `EXT_STAGE_CODE` | NVARCHAR | NULL | Code for external staging object for this integration mapping. |
| `EXT_STAGE_ALIAS` | NVARCHAR | NULL | Alias for external staging object for this integration mapping. |
| `EXT_IM_ATTR_OBJ_ID` | NVARCHAR | NULL | The External Integration Mapping Attribute Id. |
| `OBJ_IM_ATTR_OBJ_ID` | NVARCHAR | NULL | The Objective Integration Mapping Attribute Id. |
| `SYNCH_CHILDREN` | INTEGER | NULL | A flag to consider synchronizing children. |
| `PFI_SRC_FD_OBJ_ID` | NVARCHAR | NULL | The Portfolio Item's Source Field Object Id. |
| `OBJ_SRC_FD_OBJ_ID` | NVARCHAR | NULL | The Objective's Source Field Object Id. |

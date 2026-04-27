---
title: INT_CLARITYATTRIBUTES
type: db-table
table: INT_CLARITYATTRIBUTES
columns: 17
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_CLARITYATTRIBUTES

> [!info] Description
> This table stores clarity attributes data of Clarity Objects for the Integration Mapping

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Unique code of the record. |
| `NAME` | NVARCHAR | NOT NULL | Name of the Clarity Attribute. |
| `CLARITY_API_ALIAS` | NVARCHAR | NOT NULL | API alias or API attribute id of the Clarity Attribute. |
| `CLARITY_ATTR_CODE` | NVARCHAR | NOT NULL | Code of the Clarity Attribute. |
| `CLARITY_DATA_TYPE` | NVARCHAR | NOT NULL | Data type of Clarity Attribute. |
| `EXTENDED_TYPE` | NVARCHAR | NULL | Extended type of Clarity Attribute. |
| `CLARITY_OBJECT` | NVARCHAR | NULL | Clarity Object to which the Attribute belongs to |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `IS_MULTI_VALUED` | INTEGER | NOT NULL | A flag to identify the multi valued lookup. |
| `LOOKUP_TYPE` | NVARCHAR | NULL | Lookup Type of the Clarity Attribute. |
| `LOOKUP_CODE` | NVARCHAR | NULL | Lookup Code of the Clarity Attribute. |
| `IS_AUTO_NUMBERED` | INTEGER | NULL | A flag to identify the attribute is auto numbered or not. |

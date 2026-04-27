---
title: BLP_VISUAL_ENABLED_ATTRS
type: db-table
table: BLP_VISUAL_ENABLED_ATTRS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BLP_VISUAL_ENABLED_ATTRS

> [!info] Description
> This table contain visual enabled attributes. These attributes can come from ODF object or function based resources. This data is mainly used in modern UI.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the visual enabled attribute. |
| `ATTR_API_ALIAS` | NVARCHAR | NOT NULL | This column refers to the API alias of an attribute. |
| `RESOURCE_API_ALIAS` | NVARCHAR | NOT NULL | This column refers to the API alias of a resource whose attribute is being viusal enabled. |
| `ATTR_CODE` | NVARCHAR | NULL | This column refers to the code of an attribute which is enabled for visuals. |
| `ODF_OBJECT_CODE` | NVARCHAR | NULL | This column refers to the code of ODF object whose attribute is being viusal enabled. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the visual enabled attribute was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created visual enabled attribute record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the visual enabled attribute was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the visual enabled attribute. |

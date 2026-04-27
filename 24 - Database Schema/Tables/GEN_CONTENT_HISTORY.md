---
title: GEN_CONTENT_HISTORY
type: db-table
table: GEN_CONTENT_HISTORY
columns: 13
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# GEN_CONTENT_HISTORY

> [!info] Description
> This table contains the history of Gen AI content.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal identifier for the row. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code for the row. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | Object code for the attribute. |
| `ATTRIBUTE_CODE` | NVARCHAR | NULL | The contents will be generated for the Attribute specified in this column. |
| `GEN_ATTR_CONFIG_ID` | NUMERIC | NOT NULL | Reference to the ID in the table GEN_ATTR_CONFIG. |
| `STATUS_CODE` | NUMERIC | NOT NULL | Http response status code. |
| `PROMPT` | NVARCHARMAX | NOT NULL | The prompt that was used to generate the contents. |
| `RESPONSE` | NVARCHARMAX | NOT NULL | The contents that were generated for this row. |
| `INSTANCE_ID` | NUMERIC | NULL | This columns stores the instance id of the object representing executed gen ai action. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose. |

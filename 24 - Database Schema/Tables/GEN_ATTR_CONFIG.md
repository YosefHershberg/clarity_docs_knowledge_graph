---
title: GEN_ATTR_CONFIG
type: db-table
table: GEN_ATTR_CONFIG
columns: 18
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# GEN_ATTR_CONFIG

> [!info] Description
> This table stores configuration information for various Gen AI actions..

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | Object code for the attribute |
| `ATTRIBUTE_CODE` | NVARCHAR | NULL | The contents will be generated for the Attribute specified in this column |
| `ENABLED` | INTEGER | NOT NULL | If this specific configuration is enabled. |
| `PROMPT` | NVARCHARMAX | NULL | The prompt can be used to specify the various parts of the question that will be used to auto generate the contents. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `ACCESS_GROUPS` | NUMERIC | NULL | This column stores list of groups that have access to gen ai actions |
| `IS_SECURED` | NUMERIC | NOT NULL | This column indicates whether the Gen AI action configuration is secured. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | This column indicates whether the Gen AI action configuration is a system-level configuration. |
| `NAME` | VARCHAR | NOT NULL | This column stores the name of the AI Agent |
| `OUTPUT_LOCATION` | NVARCHAR | NULL | This column stores the output location of the AI Agent |
| `CONTEXT` | NVARCHAR | NULL | This column stores the context of the AI Agent |
| `ALLOW_USER_INPUT` | NUMERIC | NOT NULL | The user input box is rendered based on the state of this flag |
| `DESCRIPTION` | NVARCHAR | NULL | AI Agent Description. |

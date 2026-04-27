---
title: NMC_CONVERSATIONS
type: db-table
table: NMC_CONVERSATIONS
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_CONVERSATIONS

> [!info] Description
> Main Table for Conversations

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Internal ID of conversations |
| `RESOURCE_NAME` | NVARCHAR | NOT NULL | API resource name |
| `RESOURCE_ID` | NUMERIC | NOT NULL | API resource id |
| `MESSAGE` | NVARCHAR | NOT NULL | conversation message content |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date when the row was first created |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that first created the row |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date when the table was last updated |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the table |
| `PARTITION_CODE` | NVARCHAR | NOT NULL | This column refers to the Partition |
| `PARENT_ID` | NUMERIC | NOT NULL | Internal ID of the immediate parent conversation of this record |
| `TOP_PARENT_ID` | NUMERIC | NOT NULL | Internal ID of the top most parent conversation of this record |
| `CONV_LEVEL` | NUMERIC | NOT NULL | Depth of current record in the conversation hierarchy |
| `GRAND_PARENT_CODE` | NVARCHAR | NULL | Grand parent code |
| `GRAND_PARENT_ID` | NUMERIC | NULL | Grand parent id |
| `GREAT_GRAND_PARENT_CODE` | NVARCHAR | NULL | Great grand parent code |
| `GREAT_GRAND_PARENT_ID` | NUMERIC | NULL | Great grand parent id |

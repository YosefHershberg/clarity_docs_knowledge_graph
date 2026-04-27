---
title: NMC_CONV_REFERENCES
type: db-table
table: NMC_CONV_REFERENCES
columns: 7
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_CONV_REFERENCES

> [!info] Description
> This table stores references in a conversation like @mentions, #hashtags etc.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The primary key of the record |
| `CONVERSATION_ID` | NUMERIC | NOT NULL | The ID of the conversation this reference is associated with. |
| `REF_TYPE` | NVARCHAR | NOT NULL | The type of the reference as in #hashtag, @mention etc. |
| `DATA_TYPE` | NVARCHAR | NULL | The type of the data associated with the reference as in resource, team etc. |
| `DATA_ID` | NUMERIC | NULL | The actual ID of the instance of data type associated with the reference like ID of resource, ID of hashtag etc. |
| `REF_TEXT` | NVARCHAR | NOT NULL | The actual text of the reference |
| `REF_TEXT_START_INDEX` | NUMERIC | NOT NULL | The index at which the reference text starts in the actual message. |

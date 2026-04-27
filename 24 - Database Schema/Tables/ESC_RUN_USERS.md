---
title: ESC_RUN_USERS
type: db-table
table: ESC_RUN_USERS
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ESC_RUN_USERS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `RUN_LEVEL_ID` | NUMERIC | NOT NULL |  |
| `USER_ID` | NUMERIC | NOT NULL |  |
| `SOURCE_USER_ID` | NUMERIC | NOT NULL |  |
| `OBJECT_ID` | NUMERIC | NOT NULL |  |
| `OBJECT_TYPE_CODE` | NVARCHAR | NOT NULL |  |
| `IS_ESCALATED` | INTEGER | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

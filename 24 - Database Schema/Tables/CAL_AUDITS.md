---
title: CAL_AUDITS
type: db-table
table: CAL_AUDITS
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# CAL_AUDITS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `OBJECT_TYPE` | NUMERIC | NOT NULL |  |
| `OBJECT_ID` | NUMERIC | NOT NULL |  |
| `TABLE_NAME` | NVARCHAR | NOT NULL |  |
| `COLUMN_NAME` | NVARCHAR | NOT NULL |  |
| `VALUE_BEFORE` | NVARCHAR | NULL |  |
| `VALUE_AFTER` | NVARCHAR | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

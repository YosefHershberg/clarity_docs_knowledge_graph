---
title: OSF_RELATIONSHIPS
type: db-table
table: OSF_RELATIONSHIPS
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# OSF_RELATIONSHIPS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `CODE` | NVARCHAR | NOT NULL |  |
| `FROM_OBJECT_CODE` | NVARCHAR | NOT NULL |  |
| `TO_OBJECT_CODE` | NVARCHAR | NOT NULL |  |
| `FROM_ID` | NUMERIC | NOT NULL |  |
| `TO_ID` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

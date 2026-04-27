---
title: INV_INVESTMENT_PATHS
type: db-table
table: INV_INVESTMENT_PATHS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INV_INVESTMENT_PATHS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `PATH_ID` | NUMERIC | NOT NULL |  |
| `PATH_LEVEL` | NUMERIC | NOT NULL |  |
| `FROM_INV_ID` | NUMERIC | NULL |  |
| `TO_INV_ID` | NUMERIC | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

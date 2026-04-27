---
title: PRTASKESTIMATE
type: db-table
table: PRTASKESTIMATE
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PRTASKESTIMATE

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL |  |
| `PRID` | NUMERIC | NULL |  |
| `PRTASKID` | NUMERIC | NULL |  |
| `PRESTMODELID` | NUMERIC | NULL |  |
| `PRVALUE` | FLOAT | NULL |  |
| `PROVERRIDE` | NUMERIC | NOT NULL |  |
| `PRMODBY` | NVARCHAR | NULL |  |
| `PRMODTIME` | DATE | NULL |  |
| `PRFORMULA` | NVARCHARMAX | NULL |  |

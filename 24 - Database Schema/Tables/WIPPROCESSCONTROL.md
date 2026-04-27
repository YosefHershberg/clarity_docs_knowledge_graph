---
title: WIPPROCESSCONTROL
type: db-table
table: WIPPROCESSCONTROL
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# WIPPROCESSCONTROL

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `WIPBATCHID` | NUMERIC | NOT NULL |  |
| `USERID` | NVARCHAR | NOT NULL |  |
| `WIPDATE` | DATE | NOT NULL |  |
| `INPROGRESS` | INTEGER | NOT NULL |  |
| `TRANSTABLELOCKED` | INTEGER | NOT NULL |  |
| `COMPLETE` | INTEGER | NOT NULL |  |
| `RECORDCOUNT` | NUMERIC | NULL |  |
| `ALLTRANS` | NUMERIC | NULL |  |

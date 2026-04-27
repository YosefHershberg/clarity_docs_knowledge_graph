---
title: ARERRORLOG
type: db-table
table: ARERRORLOG
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ARERRORLOG

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ENTITY` | NVARCHAR | NOT NULL |  |
| `INVOICENO` | NVARCHAR | NOT NULL |  |
| `INVTYPE` | NVARCHAR | NOT NULL |  |
| `DBNAME` | NVARCHAR | NULL |  |
| `ERRORDATE` | DATE | NOT NULL |  |
| `ERRORTEXT` | NVARCHAR | NULL |  |
| `PLATERRORCODE` | NUMERIC | NULL |  |
| `COMPANY_CODE` | NVARCHAR | NOT NULL |  |
| `LASTUPDTDBY_RESOURCE_CODE` | NVARCHAR | NULL |  |

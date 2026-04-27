---
title: DWH_TMP_FIN_RECORD_KEYS
type: db-table
table: DWH_TMP_FIN_RECORD_KEYS
columns: 3
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DWH_TMP_FIN_RECORD_KEYS

> [!info] Description
> Temporary table used while processing financial facts that have changed.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `RECORD_KEY` | NUMERIC | NOT NULL | Generic record key. |
| `PERIOD_TYPE_KEY` | NVARCHAR | NULL | Financial period type key. |
| `LAST_UPDATED_DATE` | DATE | NULL | Date the record was changed. |

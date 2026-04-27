---
title: ORPHAN_DEL_RECORDS_LOG
type: db-table
table: ORPHAN_DEL_RECORDS_LOG
columns: 3
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ORPHAN_DEL_RECORDS_LOG

> [!info] Description
> This table holds logs to monitor how deletion is in progress.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROCESSSING_RECORD_TYPE` | NVARCHAR | NULL | This column refers to the type of action perform for instances. |
| `LOG_MESSAGE` | NVARCHAR | NULL | This column refers to the log message. |
| `LOG_DATE` | DATE | NOT NULL | This column refers to the log date. |

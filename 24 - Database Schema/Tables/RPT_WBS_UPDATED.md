---
title: RPT_WBS_UPDATED
type: db-table
table: RPT_WBS_UPDATED
columns: 1
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RPT_WBS_UPDATED

> [!info] Description
> This table is used for incremental updates of the Update WBS index portion of the Update Business Objects Report table job .

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `LAST_RUN_DATE` | DATE | NOT NULL | This column refers to the last date and time the job ran. Any PRTASK records with date and times prior are ignored. Time is relative to local database time . |

---
title: ORPHAN_DEL_RECORDS_LIST
type: db-table
table: ORPHAN_DEL_RECORDS_LIST
columns: 2
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ORPHAN_DEL_RECORDS_LIST

> [!info] Description
> This table holds orphan permissions to be deleted.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROCESSSING_RECORD_TYPE` | NVARCHAR | NULL | This column refers to the type of action perform for instances. |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the orphan permission. |

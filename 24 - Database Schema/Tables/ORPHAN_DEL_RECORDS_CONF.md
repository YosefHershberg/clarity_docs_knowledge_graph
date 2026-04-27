---
title: ORPHAN_DEL_RECORDS_CONF
type: db-table
table: ORPHAN_DEL_RECORDS_CONF
columns: 5
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ORPHAN_DEL_RECORDS_CONF

> [!info] Description
> This table holds configuration of selection criteria to delete the orphan permissions.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROCESSSING_RECORD_TYPE` | NVARCHAR | NULL | This column refers to the type of action perform for instances. |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the orphan permission. |
| `SELECT_CRITERIA` | NVARCHARMAX | NOT NULL | This column refers to the selection criteria to delete orphan permissions. |
| `STATUS` | NUMERIC | NOT NULL | This column refers to the status of the configuration. |
| `BATCH_SIZE` | NUMERIC | NOT NULL | This column refers to the batch size for the configuration. |

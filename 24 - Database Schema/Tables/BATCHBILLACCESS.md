---
title: BATCHBILLACCESS
type: db-table
table: BATCHBILLACCESS
columns: 2
audience: dev
domain: development
canonical: true
fk_targets:
  - BATCHSETTINGS
tags:
  - dev
  - schema
  - table
---

# BATCHBILLACCESS

> [!info] Description
> This table stores information on the users who can access a batch bill cycle.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `BATCHCYCLE` | NVARCHAR | NOT NULL | This column refers to the [[BATCHSETTINGS]].BATCHCYCLE. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `BATCHCYCLE` | [[BATCHSETTINGS]].`BATCHCYCLE` | |

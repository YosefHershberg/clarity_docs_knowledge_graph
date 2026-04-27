---
title: BATCHSETTINGS
type: db-table
table: BATCHSETTINGS
columns: 6
audience: dev
domain: development
canonical: true
fk_sources:
  - BATCHBILLACCESS
tags:
  - dev
  - schema
  - table
---

# BATCHSETTINGS

> [!info] Description
> This table stores the settings for a batch billing cycle.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `BATCHCYCLE` | NVARCHAR | NOT NULL | This column refers to the name of batch cycle. |
| `FULLBILL` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `BILLOPTION` | NUMERIC | NOT NULL | This column is deprecated and should no longer be used. |
| `SHORTDESC` | NVARCHAR | NULL | This column refers to the short description of a batch cycle. |
| `DESCRIPTION` | NVARCHAR | NULL |  |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[BATCHBILLACCESS]] | `BATCHCYCLE` | `BATCHCYCLE` |

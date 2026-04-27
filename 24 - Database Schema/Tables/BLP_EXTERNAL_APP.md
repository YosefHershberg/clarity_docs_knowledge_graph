---
title: BLP_EXTERNAL_APP
type: db-table
table: BLP_EXTERNAL_APP
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BLP_EXTERNAL_APP

> [!info] Description
> This table stores External app data.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `BLUEPRINT_VISUAL_ID` | NUMERIC | NOT NULL | Blueprint Visual id of the external app. |
| `BLUEPRINT_ID` | NUMERIC | NOT NULL | Blueprint id. |
| `BASE_URL` | NVARCHAR | NOT NULL | URL or Content of the external app. |
| `REFERRER_URLS` | NVARCHAR | NULL | Optional comma separated list of host:port for any referrer urls to reach the external app. |
| `NAME` | NVARCHAR | NOT NULL | Name of the external app. |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |

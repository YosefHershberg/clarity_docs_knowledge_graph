---
title: API_CLIENT
type: db-table
table: API_CLIENT
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# API_CLIENT

> [!info] Description
> This table stores client data.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Unique name of the client. |
| `NAME` | NVARCHAR | NOT NULL | Name of the client. |
| `ACTIVE` | NUMERIC | NOT NULL | Status of the Client |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |

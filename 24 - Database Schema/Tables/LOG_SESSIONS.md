---
title: LOG_SESSIONS
type: db-table
table: LOG_SESSIONS
columns: 3
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# LOG_SESSIONS

> [!info] Description
> This table stores the date and time, user ID, and token of each log session.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TOKEN` | NVARCHAR | NOT NULL | The CA Clarity PPM session token. |
| `USER_ID` | NUMERIC | NULL | The ID from CMN_SEC_USERS. |
| `CREATED_DATE` | DATE | NULL | The date and time the session was started. |

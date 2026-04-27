---
title: NMC_MESSAGES
type: db-table
table: NMC_MESSAGES
columns: 15
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_MESSAGES

> [!info] Description
> This table stores message data.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Unique code for the message. |
| `TITLE` | NVARCHAR | NULL | Title for the message. |
| `STATE` | NVARCHAR | NOT NULL | State type of message. |
| `TYPE` | NVARCHAR | NOT NULL | Display type of message. |
| `SEVERITY` | NVARCHAR | NOT NULL | Severity of message. |
| `MESSAGE` | NVARCHAR | NOT NULL | Body of the Message. |
| `DURATION` | NUMERIC | NOT NULL | Duration for which Message to be displayed. |
| `IS_SYSTEM` | NUMERIC | NOT NULL | Is this a system defined message |
| `START_DATE` | DATE | NULL | Start date for message. |
| `END_DATE` | DATE | NULL | End date for message. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |

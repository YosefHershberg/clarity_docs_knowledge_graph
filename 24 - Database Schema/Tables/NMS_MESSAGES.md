---
title: NMS_MESSAGES
type: db-table
table: NMS_MESSAGES
columns: 15
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMS_MESSAGES

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `TOPIC` | NVARCHAR | NOT NULL |  |
| `MESSAGE_CODE` | NVARCHAR | NOT NULL |  |
| `OBJECT_ID` | NUMERIC | NOT NULL |  |
| `OBJECT_CODE` | NVARCHAR | NOT NULL |  |
| `USER_ID` | NUMERIC | NOT NULL |  |
| `MESSAGE_TYPE_CODE` | NVARCHAR | NOT NULL |  |
| `MESSAGE` | NVARCHARMAX | NULL |  |
| `SEND_DATE` | DATE | NOT NULL |  |
| `EXPIRATION_DATE` | DATE | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `IMPERSONATED_BY` | NUMERIC | NULL | ID of the user impersonating another user when executing a process. |

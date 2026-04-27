---
title: NMS_MESSAGE_DELIVERY
type: db-table
table: NMS_MESSAGE_DELIVERY
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMS_MESSAGE_DELIVERY

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `MESSAGE_ID` | NUMERIC | NOT NULL |  |
| `TARGET` | NVARCHAR | NOT NULL |  |
| `PROCESSED` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

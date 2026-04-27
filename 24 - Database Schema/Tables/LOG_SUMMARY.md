---
title: LOG_SUMMARY
type: db-table
table: LOG_SUMMARY
columns: 12
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# LOG_SUMMARY

> [!info] Description
> This table stores log summary data by hour.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `HOST_NAME` | NVARCHAR | NOT NULL | The name of the host from which the access log was imported. |
| `LOG_DATE` | DATE | NULL | The date from the access log. |
| `LOG_HOUR` | DATE | NULL | The hour for which the data was summarized. |
| `AVG_RESP` | NUMERIC | NULL | The average page view response time in milliseconds for this hour. |
| `SESSION_COUNT` | NUMERIC | NULL | The total number of unique sessions seen during this hour. |
| `VIEW_COUNT` | NUMERIC | NULL | The total page view count for this hour. |
| `ENVIRONMENT` | NVARCHAR | NOT NULL | The name of the associated environment for the summary data. |
| `AVG_SOAP_RESP` | NUMERIC | NULL | The average XML Open Gateway (XOG) request response time in milliseconds for this hour. |
| `SOAP_VIEW_COUNT` | NUMERIC | NULL | The total number of XML Open Gateway (XOG) requests for this hour. |
| `TZ_OFFSET` | NVARCHAR | NULL | The time zone offset from the log file. |
| `MAX_SOAP_RESP` | NUMERIC | NULL | The maximum XML Open Gateway (XOG) response time during this hour. |
| `MAX_RESP` | NUMERIC | NULL | The maximum page view response time during this hour. |

---
title: LOG_DETAILS
type: db-table
table: LOG_DETAILS
columns: 19
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# LOG_DETAILS

> [!info] Description
> This table stores environment data for each log entry.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The primary key, based on database sequence Z_ES_ACCESSLOG_S1. |
| `TENNANT` | NVARCHAR | NULL | Reserved for future use. |
| `FILENAME` | NVARCHAR | NOT NULL | The access log filename. |
| `SERVICE_NAME` | NVARCHAR | NOT NULL | The CA Clarity PPM service the entry was from (app, app2, and so on). |
| `HOST_NAME` | NVARCHAR | NOT NULL | The host name with which the entry is associated. |
| `ENVIRONMENT` | NVARCHAR | NOT NULL | The environment name associated with this entry. |
| `START_TIME` | DATE | NULL | The start date and time of the web transaction. |
| `FINISH_TIME` | DATE | NULL | The finish date and time of the web transaction. |
| `LOG_DATE` | DATE | NULL | The date of the log entry. |
| `ACTION_METHOD` | NVARCHAR | NULL | The HTTP method (GET, POST, PUT). |
| `URL_ACTION` | NVARCHAR | NULL | The full URL that was requested. |
| `BROWSER_STATUS` | NUMERIC | NULL | The status that is returned to the browser. |
| `BYTES_SENT` | NUMERIC | NULL | The response size in bytes. |
| `ELAPSED_TIME` | NUMERIC | NULL | The elapsed time in milliseconds. |
| `SESSION_COOKIE` | NVARCHAR | NULL | The session cookie token. |
| `CREATED_DATE` | DATE | NULL | The date and time the row was created. |
| `URL_SHORT` | NVARCHAR | NULL | The shortened URL indicating the page action. |
| `REPORT_ID` | NUMERIC | NULL | The report definition ID if an immediate report was executed. |
| `USER_AGENT` | NVARCHAR | NULL | Information regarding the user agent for this entry |

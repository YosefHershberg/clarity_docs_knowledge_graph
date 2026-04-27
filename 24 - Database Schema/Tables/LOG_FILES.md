---
title: LOG_FILES
type: db-table
table: LOG_FILES
columns: 7
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# LOG_FILES

> [!info] Description
> This table stores environment data for each log file.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `FILENAME` | NVARCHAR | NOT NULL | The name of the access log input file. |
| `SERVICE_NAME` | NVARCHAR | NOT NULL | The name of the CA Clarity PPM service (app, app2, and so on). |
| `ENTRIES` | NUMERIC | NULL | The number of page views imported from this file. |
| `LOG_DATE` | DATE | NULL | The date of this access log. |
| `ENVIRONMENT` | NVARCHAR | NOT NULL | The environment name associated with this file. |
| `HOST_NAME` | NVARCHAR | NULL | The host name associated with this file. |
| `CREATED_DATE` | DATE | NULL | The date and time of the import. |

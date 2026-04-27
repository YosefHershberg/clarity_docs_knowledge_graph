---
title: EXT_INT_TIMESHEET_DATA_LOGS
type: db-table
table: EXT_INT_TIMESHEET_DATA_LOGS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# EXT_INT_TIMESHEET_DATA_LOGS

> [!info] Description
> This table logs the request and response data used to create frictionless timesheet.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal identifier for the row. |
| `JOB_ID` | NUMERIC | NOT NULL | Reference to the JOB_ID in the table CMN_SCH_JOB_RUNS. |
| `REQUEST_URL` | NVARCHAR | NULL | Http request URL. |
| `REQUEST_DATA` | NVARCHARMAX | NOT NULL | The data that was sent to the external system. |
| `RESPONSE_DATA` | NVARCHARMAX | NULL | The data returned by the external system. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose. |

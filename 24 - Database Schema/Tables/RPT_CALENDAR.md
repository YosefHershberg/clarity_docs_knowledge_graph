---
title: RPT_CALENDAR
type: db-table
table: RPT_CALENDAR
columns: 6
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RPT_CALENDAR

> [!info] Description
> This table stores the calendar information for reporting. Information is stored five years in the past and five years in the future.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PERIOD_TYPE` | NVARCHAR | NOT NULL | This column refers to the type or period. Values: DAILY, WEEKLY, MONTHLY or QUARTERLY |
| `START_DATE` | DATE | NOT NULL | This column refers to the start date for defined period. |
| `END_DATE` | DATE | NOT NULL | This column refers to the end date for defined period. |
| `FTE` | NUMERIC | NULL | This column refers to the Full Time Equivalent (FTE) hours for the defined period. The hours are derived from the availability of the CA Clarity PPM admin resource. |
| `CREATED_DATE` | DATE | NULL | This column refers to the date that the record was created. |
| `LAST_UPDATED_DATE` | DATE | NULL | This column refers to the date that the record was last updated. |

---
title: LOG_REPORTDEFS
type: db-table
table: LOG_REPORTDEFS
columns: 6
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# LOG_REPORTDEFS

> [!info] Description
> This table stores environment data for each report definition.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `JOB_DEFINITION_ID` | NUMERIC | NOT NULL | The ID of the report definition from CMN_SCH_JOB_DEFINITIONS. |
| `NAME` | NVARCHAR | NOT NULL | The report name. |
| `LANGUAGE_CODE` | NVARCHAR | NOT NULL | The code that represents the language of the file. |
| `ENVIRONMENT` | NVARCHAR | NOT NULL | The environment name associated with this report definition. |
| `SOURCE` | NVARCHAR | NOT NULL | The source of the report. |
| `CREATED_DATE` | DATE | NOT NULL | The date and time the row was inserted. |

---
title: OKR_ACTUAL_VALUES
type: db-table
table: OKR_ACTUAL_VALUES
columns: 17
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# OKR_ACTUAL_VALUES

> [!info] Description
> This table contains information about Actual Values

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | VARCHAR | NOT NULL | This column refers to the identifier for the row |
| `NAME` | VARCHAR | NOT NULL | Name of the Actual Value |
| `KEY_RESULT_ID` | NUMERIC | NOT NULL | The Key Result ID this Actual Value belongs to |
| `ACTUAL_DATE` | DATE | NULL | The date aligned with the actual value |
| `INTEGRATION_MAPPINGS` | VARCHAR | NULL | Integration mappings |
| `RALLY_OBJECT_ID` | VARCHAR | NULL | Object ID for Rally's Key Result |
| `LAST_SYNC_MSG` | VARCHAR | NULL | Indicates the last sync from Rally with date/time information |
| `LAST_SYNC_STATUS` | VARCHAR | NULL | Indicates the last sync from Rally was successful (or failed) |
| `IS_ACTIVE` | BOOLEAN | NOT NULL | Indicates if the key result is active or not |
| `SOURCE` | VARCHAR | NULL | Source system |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `LAST_SYNC_DT` | DATE | NULL | Indicates the last sync date from Rally with date information |
| `ACTUAL_VALUE` | NUMERIC | NULL |  |

---
title: OKR_TARGET_VALUES
type: db-table
table: OKR_TARGET_VALUES
columns: 17
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# OKR_TARGET_VALUES

> [!info] Description
> This table contains information about Target Values

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | VARCHAR | NOT NULL | This column refers to the identifier for the row |
| `NAME` | VARCHAR | NOT NULL | Name of the Target Value |
| `KEY_RESULT_ID` | NUMERIC | NOT NULL | The Key Result ID this Target Value belongs to |
| `TARGET_DATE` | DATE | NULL | The date aligned with the target value |
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
| `TARGET_VALUE` | NUMERIC | NULL |  |

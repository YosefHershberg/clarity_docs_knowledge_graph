---
title: OKR_KEY_RESULTS
type: db-table
table: OKR_KEY_RESULTS
columns: 23
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# OKR_KEY_RESULTS

> [!info] Description
> This table contains information about key result

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | VARCHAR | NOT NULL | This column refers to the identifier for the row |
| `NAME` | VARCHAR | NOT NULL | Name of the Key result |
| `OBJECTIVE_ID` | NUMERIC | NOT NULL | Objective Key result belongs to |
| `OWNER` | NUMERIC | NULL | Key Result Owner |
| `SCHEDULE_START` | DATE | NULL | Key Result Start |
| `SCHEDULE_TARGET` | DATE | NULL | Key Result End |
| `UNIT_OF_MEASURE` | VARCHAR | NULL | The unit of measure for a Key Result |
| `INTEGRATION_MAPPINGS` | VARCHAR | NULL | Integration mappings |
| `RALLY_OBJECT_ID` | VARCHAR | NULL | Object ID for Rally's Key Result |
| `LAST_SYNC_MSG` | VARCHAR | NULL | Indicates the last sync from Rally with date/time information |
| `LAST_SYNC_STATUS` | VARCHAR | NULL | Indicates the last sync from Rally was successful (or failed) |
| `IS_ACTIVE` | BOOLEAN | NOT NULL | Indicates if the key result is active or not |
| `SOURCE` | VARCHAR | NULL | Source system |
| `RALLY_FORMAT_ID` | VARCHAR | NULL | Rally Formatted ID |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `START_VALUE` | NUMERIC | NULL |  |
| `CURRENT_VALUE` | NUMERIC | NULL |  |
| `TARGET_VALUE` | NUMERIC | NULL |  |
| `LAST_SYNC_DT` | DATE | NULL |  |

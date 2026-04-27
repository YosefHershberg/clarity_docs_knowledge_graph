---
title: EVM_PERIOD_DEFS
type: db-table
table: EVM_PERIOD_DEFS
columns: 16
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
---

# EVM_PERIOD_DEFS

> [!info] Description
> This table stores the earned value reporting period's definition. Each reporting period defines the frequency (monthly, weekly, etc) along with information needed by CA Clarity PPM to automatically generate periods.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the primary key. |
| `CODE` | NVARCHAR | NOT NULL | This column defines the unique identifier for a definition. |
| `NAME` | NVARCHAR | NOT NULL | This column defines the name of the definition. |
| `DESCRIPTION` | NVARCHAR | NULL | This column defines the long description for a definition. |
| `PERIOD_TYPE` | NUMERIC | NOT NULL | This column defines the enumeration (via a lookup) which defines the frequence of this definition:1 = weekly2 = monthly3 = Quarterly4 = Annually |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column defines the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column indicates the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) who last updated this row. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | This column defines whether or not this definition is active and in use. |
| `OCCURRENCE_MONTH` | NUMERIC | NULL | Month [number] for the start of annual or quarterly definitions. |
| `WEEK_IN_MONTH` | NUMERIC | NULL | This column defines the week of the month for which this monthly definition refers. Example, 2nd Sunday - value = 2. |
| `WEEKDAY` | NUMERIC | NULL | Day of the week (0=Sunday) on which the definition starts (weekly or monthly definitions). |
| `OCCURRENCES` | NUMERIC | NULL | For weekly definitions, this defines the frequency (e.g. every 3 weeks). |
| `SPECIFIC_DAY_NUMBER` | NUMERIC | NULL | The day of the month (monthly, quarterly or annual) on which the definition starts. |
| `DAY_SELECTION` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

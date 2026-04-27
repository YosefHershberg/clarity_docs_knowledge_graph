---
title: PAC_CHG_RESCREDIT_DATES
type: db-table
table: PAC_CHG_RESCREDIT_DATES
columns: 8
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - PAC_CHG_RESOURCE_CREDITS
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_RESCREDIT_DATES

> [!info] Description
> This table is deprecated and should no longer be used.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `RESOURCE_CREDIT_ID` | NUMERIC | NOT NULL | This refers to [[PAC_CHG_RESOURCE_CREDITS]].ID. |
| `FROM_DATE` | DATE | NOT NULL | The start date in the range. |
| `TO_DATE` | DATE | NULL | To end date in the range. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RESOURCE_CREDIT_ID` | [[PAC_CHG_RESOURCE_CREDITS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

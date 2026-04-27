---
title: PAC_CHG_RESOURCE_CREDITS
type: db-table
table: PAC_CHG_RESOURCE_CREDITS
columns: 11
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - DEPARTMENTS
  - ENTITY
  - LOCATIONS
  - PAC_FOS_RESOURCE_CLASS
  - TRANSCLASS
fk_sources:
  - PAC_CHG_RESCREDIT_DATES
  - PAC_CHG_TRANSACTIONS
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_RESOURCE_CREDITS

> [!info] Description
> This table is deprecated and should no longer be used.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `ENTITY_ID` | NUMERIC | NULL | This refers to [[ENTITY]].ID. |
| `LOCATION_ID` | NUMERIC | NULL | This refers to [[LOCATIONS]].ID. |
| `DEPARTMENT_ID` | NUMERIC | NULL | This refers to [[DEPARTMENTS]].ID. |
| `TRANSACTION_CLASS_ID` | NUMERIC | NULL | This refers to [[TRANSCLASS]].ID. |
| `RESOURCE_CLASS_ID` | NUMERIC | NULL | This refers to [[PAC_FOS_RESOURCE_CLASS]].ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `STATUS` | NVARCHAR | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ENTITY_ID` | [[ENTITY]].`ID` | |
| `LOCATION_ID` | [[LOCATIONS]].`ID` | |
| `DEPARTMENT_ID` | [[DEPARTMENTS]].`ID` | |
| `TRANSACTION_CLASS_ID` | [[TRANSCLASS]].`ID` | |
| `RESOURCE_CLASS_ID` | [[PAC_FOS_RESOURCE_CLASS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PAC_CHG_RESCREDIT_DATES]] | `RESOURCE_CREDIT_ID` | `ID` |
| [[PAC_CHG_TRANSACTIONS]] | `SOURCE_ID` | `ID` |

---
title: PAC_CHG_GL_ACCOUNTS
type: db-table
table: PAC_CHG_GL_ACCOUNTS
columns: 14
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - ENTITY
fk_sources:
  - PAC_CHG_ALLOCS_DETAILS
  - PAC_CHG_RESCREDIT_DETAILS
  - PAC_CHG_TRANSACTIONS
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_GL_ACCOUNTS

> [!info] Description
> This table is deprecated and should no longer be used.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `ENTITY_ID` | NUMERIC | NULL | This refers to [[ENTITY]].ID. |
| `ACCOUNT_CODE` | NVARCHAR | NOT NULL | The general ledger (GL) account code |
| `ACCOUNT_DESCRIPTION` | NVARCHAR | NOT NULL | The description of this GL account code |
| `ACCOUNT_CLASS` | NVARCHAR | NULL | The account class. Values are: - BALANCE_SHEET = Balance sheet - PROFIT_AND_LOSS = Profit and loss |
| `ACCOUNT_TYPE` | NVARCHAR | NULL | The account type. Values are: - ASSET = Asset - LIABILITY = Liability - INCOME = Income - EXPENSE = Expense |
| `IS_ACTIVE` | INTEGER | NOT NULL | Indicates if the row is active. Values are: - 0 = Inactive - 1 = Active |
| `CHARGEBACK_ENABLED` | INTEGER | NOT NULL | Indicates if chargeback is enabled. Values are: - 0 = Disabled - 1 = Enabled |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers [[CMN_SEC_USERS]].ID. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | The XML Open Gateway external source identifier. |
| `EXTERNAL_ID` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ENTITY_ID` | [[ENTITY]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PAC_CHG_ALLOCS_DETAILS]] | `ACCOUNT_CODE_ID` | `ID` |
| [[PAC_CHG_RESCREDIT_DETAILS]] | `ACCOUNT_CODE_ID` | `ID` |
| [[PAC_CHG_TRANSACTIONS]] | `ACCOUNT_CODE_ID` | `ID` |

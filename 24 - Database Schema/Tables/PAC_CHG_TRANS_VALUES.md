---
title: PAC_CHG_TRANS_VALUES
type: db-table
table: PAC_CHG_TRANS_VALUES
columns: 9
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - PAC_CHG_TRANSACTIONS
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_TRANS_VALUES

> [!info] Description
> This table is deprecated and should no longer be used.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TRANSACTION_ID` | NUMERIC | NOT NULL | The transaction ID. This refers to [[PAC_CHG_TRANSACTIONS]].ID. |
| `CURRENCY_TYPE` | NVARCHAR | NULL | The currency type. Values are: - BILLING = Billing currency type - EUR = Euro currency type - HOME = Home currency type - NATURAL = Natural currency type - REPORTING = Reporting currency type |
| `CURRENCY_CODE` | NVARCHAR | NULL | The ISO 3-letter currency code. |
| `AMOUNT` | NUMERIC | NOT NULL | The original amount on the transaction. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TRANSACTION_ID` | [[PAC_CHG_TRANSACTIONS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

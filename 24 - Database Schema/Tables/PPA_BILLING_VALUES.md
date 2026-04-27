---
title: PPA_BILLING_VALUES
type: db-table
table: PPA_BILLING_VALUES
columns: 9
audience: dev
domain: development
canonical: true
fk_targets:
  - PPA_BILLINGS
tags:
  - dev
  - schema
  - table
---

# PPA_BILLING_VALUES

> [!info] Description
> This table stores the multi-currency values for rows in the PPA_BILLINGS table.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TRANSNO` | NUMERIC | NOT NULL | This column indicates the transaction number for a row in the PPA_BILLINGS table. This refers to [[PPA_BILLINGS]].TRANSNO. |
| `EXCHANGE_ID` | NUMERIC | NULL | The ID for the exchange rate record used to determine the exchange rates. |
| `AMOUNT` | NUMERIC | NOT NULL | The amount of the transaction bill. |
| `AMOUNTREMAINING` | NUMERIC | NOT NULL | The amount remaining (i.e., the original amount minus any credit memos). |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. Values are: - 0 = HOME - 1 = BILLING - 2 = REPORTING - 4 = NATURAL - 5 = EURO |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | The ISO 3-letter currency code. |
| `EXCHANGE_RATE` | NUMERIC | NOT NULL | The currency exchange rate. |
| `BILLRATE` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TRANSNO` | [[PPA_BILLINGS]].`TRANSNO` | |

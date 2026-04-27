---
title: PPA_TRANSBILL_VALUES
type: db-table
table: PPA_TRANSBILL_VALUES
columns: 8
audience: dev
domain: development
canonical: true
fk_targets:
  - PPA_TRANSBILL
tags:
  - dev
  - schema
  - table
---

# PPA_TRANSBILL_VALUES

> [!info] Description
> This table stores the multi-currency values table for PPA_TRANSBILL rows.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TRANSNO` | NUMERIC | NOT NULL | This column indicates the transaction number. This column refers to [[PPA_TRANSBILL]].TRANSNO. |
| `EXCHANGE_ID` | NUMERIC | NULL | The ID for the exchange rate row used to determine the exchange rate. |
| `AMOUNT` | NUMERIC | NOT NULL | The amount of the transaction bill. |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. Values are: - HOME - BILLING - NATURAL - REPORTING - EURO |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | The ISO 3-letter currency code. |
| `EXCHANGE_RATE` | NUMERIC | NOT NULL | The currency exchange rate. |
| `BILLRATE` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TRANSNO` | [[PPA_TRANSBILL]].`TRANSNO` | |

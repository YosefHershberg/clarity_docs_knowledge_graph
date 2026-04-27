---
title: INVOICEHEADER_VALUES
type: db-table
table: INVOICEHEADER_VALUES
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INVOICEHEADER_VALUES

> [!info] Description
> This table stores the multi-currency values for the invoice header record.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `INVOICENO` | NVARCHAR | NOT NULL | The invoice or credit memo number these amounts apply to. |
| `EXCHANGE_ID` | NUMERIC | NULL | The ID for the exchange rate record used to determine the exchange rates. This refers to CMN_EXCHANGE_RATES.ID. |
| `INVOICEAMOUNT` | NUMERIC | NOT NULL | The amount of the invoice. |
| `TAXAMOUNT` | NUMERIC | NULL | The amount of tax applied on this invoice. |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. Values are: - BILLING = Billing Currency - EURO = Euro Currency - HOME = Home Currency - NATURAL = Natural Currency - REPORTING = Reporting Currency |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | The ISO 3-letter currency code. |
| `EXCHANGE_RATE` | NUMERIC | NULL | The exchange rate. Values are: - AVERAGE = Average Exchange Rate Type - FIXED = Fixed Exchange Rate Type - SPOT = Spot Exchange Rate Type |
| `ADMINCHARGE` | NUMERIC | NULL | The administrative charges added to this invoice. |
| `AMOUNT_REMAINING` | NUMERIC | NULL |  |

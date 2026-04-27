---
title: PPA_INVOICEDETAILS_VALUES
type: db-table
table: PPA_INVOICEDETAILS_VALUES
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PPA_INVOICEDETAILS_VALUES

> [!info] Description
> This table stores invoice detail values.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `INVOICENO` | NVARCHAR | NOT NULL | The invoice number. |
| `EXCHANGE_ID` | NUMERIC | NULL | The exchange ID of the exchange rate. |
| `AMOUNT` | NUMERIC | NOT NULL | The amount of this invoice. |
| `TAXABLEAMT` | NUMERIC | NOT NULL | The taxable amount. |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | The ISO 3-letter currency code. |
| `EXCHANGE_RATE` | NUMERIC | NOT NULL | The currency exchange rate. |
| `ENTRYTYPE` | NVARCHAR | NULL |  |

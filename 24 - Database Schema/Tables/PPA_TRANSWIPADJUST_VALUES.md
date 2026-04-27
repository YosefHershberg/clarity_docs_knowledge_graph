---
title: PPA_TRANSWIPADJUST_VALUES
type: db-table
table: PPA_TRANSWIPADJUST_VALUES
columns: 27
audience: dev
domain: development
canonical: true
erds:
  - Transactions
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# PPA_TRANSWIPADJUST_VALUES

> [!info] Description
> This table stores multi-currency values for unapproved WIP adjustments.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TRANSNO` | NUMERIC | NOT NULL | The transaction number to which this row belongs. The transaction number combined with currency type uniquely identifies a row. |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. For each entry in the PPA_TRANSWIPADJUST table, there are five value rows with the currency type. Values are: - HOME - BILLING - NATURAL - REPORTING - EURO |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | The ISO 3-letter currency code. |
| `RATE_CURRENCY_CODE` | NVARCHAR | NOT NULL | The currency code for the rate currency. |
| `COST_CURRENCY_CODE` | NVARCHAR | NOT NULL | The currency code for the cost amounts. |
| `RATE_EXCHANGE_RATE` | NUMERIC | NOT NULL | The exchange rate for the rate. |
| `RATE_EXCHANGE_ID` | NUMERIC | NULL | The ID for the exchange rate row used to determine the exchange rates. |
| `COST_EXCHANGE_RATE` | NUMERIC | NOT NULL | The exchange rate for the cost. |
| `COST_EXCHANGE_ID` | NUMERIC | NULL | The ID for the exchange cost row used to determine the exchange rates. |
| `NATURAL_BILLRATE` | NUMERIC | NOT NULL | The natural amount of the billing rate. |
| `BILLRATE` | NUMERIC | NOT NULL | The billing rate. |
| `AMOUNT` | NUMERIC | NOT NULL | The amount. |
| `PRICE` | NUMERIC | NOT NULL | The price. |
| `FACTORAMOUNT` | NUMERIC | NOT NULL | The factor amount. |
| `BURDEN` | NUMERIC | NOT NULL | The burden amount. |
| `OVERHEAD` | NUMERIC | NOT NULL | This column refers to the overhead amount. |
| `TOTALAMOUNT` | NUMERIC | NOT NULL | The total amount. |
| `NATURAL_ACTUALCOST` | NUMERIC | NOT NULL | The natural amount of the actual cost. |
| `ACTUALCOST` | NUMERIC | NOT NULL | The actual cost. |
| `NATURAL_STDCOST` | NUMERIC | NOT NULL | The natural amount of the standard cost. |
| `STDCOST` | NUMERIC | NOT NULL | The standard cost. |
| `TOTALCOST` | NUMERIC | NOT NULL | The total cost. |
| `EMPLYACTUALCOST` | NUMERIC | NULL | The resource actual cost. |
| `EMPLYSTDCOST` | NUMERIC | NULL | The resource standard cost. |
| `AMOUNTREMAINING` | NUMERIC | NOT NULL | The amount remaining (i.e., the original amount minus any credit memos). |
| `STDCOST_CURRENCY_CODE` | NVARCHAR | NULL |  |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

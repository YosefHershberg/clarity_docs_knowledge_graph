---
title: FIN_POSTED_TXN_VALUES
type: db-table
table: FIN_POSTED_TXN_VALUES
columns: 29
audience: dev
domain: development
canonical: true
erds:
  - Transactions
fk_targets:
  - CMN_SEC_USERS
  - FIN_POSTED_TXNS
tags:
  - dev
  - schema
  - table
  - erd/transactions
---

# FIN_POSTED_TXN_VALUES

> [!info] Description
> This table is deprecated and should no longer be used.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 09 - Finance]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `POSTED_TXN_ID` | NUMERIC | NOT NULL | The posted transaction ID. This refers to [[FIN_POSTED_TXNS]].ID. |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. Values are: - 0 = NATURAL - 1 = BILLING - 2 = REPORTING - 3 = HOME - 4 = EURO |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | The currency code for the currency type. This refers to CMN_CURRENCIES.CURRENCY_CODE. |
| `RATE_CURRENCY_CODE` | NVARCHAR | NOT NULL | The currency code for the rate calculation. This refers to CMN_CURRENCIES.CURRENCY_CODE. |
| `COST_CURRENCY_CODE` | NVARCHAR | NOT NULL | The currency code for the cost calculation. This refers to CMN_CURRENCIES.CURRENCY_CODE. |
| `RATE_EXCHANGE_RATE` | NUMERIC | NOT NULL | The calculated rate used for rate currency conversion. |
| `RATE_EXCHANGE_ID` | NUMERIC | NULL | The exchange rate row. This refers to CMN_EXCHANGE_RATES.ID. |
| `COST_EXCHANGE_RATE` | NUMERIC | NOT NULL | The calculated rate used for rate currency conversion. |
| `COST_EXCHANGE_ID` | NUMERIC | NULL | The exchange cost row. This refers CMN_EXCHANGE_RATES.ID. |
| `BILL_RATE` | NUMERIC | NOT NULL | The billing rate for this transaction. |
| `AMOUNT` | NUMERIC | NOT NULL | The amount (i.e., quantity) for the transaction. |
| `PRICE` | NUMERIC | NOT NULL | This column refers to the price for this transaction. |
| `FACTOR_AMOUNT` | NUMERIC | NULL | The factor amount based on the cost plus code chosen. |
| `BURDEN` | NUMERIC | NULL | The burden based on the selected cost plus code. |
| `OVERHEAD` | NUMERIC | NULL | This column refers to the overhead based on the selected cost plus code. |
| `TOTAL_AMOUNT` | NUMERIC | NULL | The total amount calculated for the transaction for the currency type. |
| `NATURAL_ACTUAL_COST` | NUMERIC | NOT NULL | The actual cost in the natural currency. |
| `ACTUAL_COST` | NUMERIC | NOT NULL | The actual cost for this transaction. |
| `NATURAL_STANDARD_COST` | NUMERIC | NOT NULL | The natural standard cost. |
| `STANDARD_COST` | NUMERIC | NOT NULL | The standard cost for this transaction. |
| `TOTAL_COST` | NUMERIC | NOT NULL | The total cost for the transaction. |
| `RESOURCE_ACTUAL_COST` | NUMERIC | NULL | The actual cost for the resource. |
| `RESOURCE_STANDARD_COST` | NUMERIC | NULL | The standard cost for the resource. |
| `STANDARD_COST_CURRENCY_CODE` | NVARCHAR | NULL | The currency code for the standard cost calculation. This refers to CMN_CURRENCIES.currency_code. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `POSTED_TXN_ID` | [[FIN_POSTED_TXNS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[FIN_POSTED_TXNS]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRCHARGECODE]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[PRTYPECODE]]

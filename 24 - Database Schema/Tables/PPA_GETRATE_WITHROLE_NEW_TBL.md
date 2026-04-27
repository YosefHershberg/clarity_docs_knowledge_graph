---
title: PPA_GETRATE_WITHROLE_NEW_TBL
type: db-table
table: PPA_GETRATE_WITHROLE_NEW_TBL
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PPA_GETRATE_WITHROLE_NEW_TBL

> [!info] Description
> A temporary table to hold the intermediate results.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `RATE_OUT` | NUMERIC | NULL | This column refers to the Rate. |
| `COST_OUT` | NUMERIC | NULL | This column refers to the Cost. |
| `FACTORAMT_OUT` | NUMERIC | NULL | This column refers to the Factor Amount. |
| `BURDENAMT_OUT` | NUMERIC | NULL | This column refers to the Burden Amount. |
| `OVERHEADAMT_OUT` | NUMERIC | NULL | This column refers to the Overhead Amount. |
| `CRATECURRENCYCODE_OUT` | VARCHAR | NULL | This column refers to the Rate Currency Code. |
| `CCOSTCURRENCYCODE_OUT` | VARCHAR | NULL | This column refers to the Cost Currency Code. |
| `PERIODENDDATE_OUT` | DATE | NULL | This column refers to the Period End date. |
| `PERIODSSTARTDATE_OUT` | DATE | NULL | This column refers to the Period Start date. |
| `RATEFOUND_OUT` | NUMERIC | NULL | This column has a boolean value related to Rate Found. |
| `COSTMATCHROW_OUT` | NUMERIC | NULL | This column refers to the Cost Matrix Row Id. |

---
title: PAC_BIL_INVOICE_TRN_DETAILS
type: db-table
table: PAC_BIL_INVOICE_TRN_DETAILS
columns: 16
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - INVOICEHEADER
  - PPA_BILLINGS
  - TAXCODE
  - TAX_METHOD
tags:
  - dev
  - schema
  - table
---

# PAC_BIL_INVOICE_TRN_DETAILS

> [!info] Description
> This detail table stores information on invoice transactions.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TRANSNO` | NUMERIC | NOT NULL | This column refers to [[PPA_BILLINGS]].TRANSNO. |
| `INVOICE_NO` | NVARCHAR | NOT NULL | This refers to [[INVOICEHEADER]].INVOICENO. |
| `ENTRY_TYPE` | NVARCHAR | NOT NULL | The source of the invoice. |
| `TAX_CODE` | NVARCHAR | NOT NULL | This refers to the [[TAXCODE]].CODE. |
| `TAX_METHOD_CODE` | NVARCHAR | NOT NULL | This refers to [[TAX_METHOD]].CODE. |
| `PERCENTAGE` | NUMERIC | NOT NULL | This indicates what percentage of the tax should be applied. |
| `AMOUNT` | NUMERIC | NOT NULL | The total amount of the invoice. |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | The ISO 3-letter currency code. |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. Values are: - Billing = Billing - Euro = Euro - Natural = Natural - Home = Home - Reporting = Reporting |
| `EXCHANGE_ID` | NUMERIC | NULL | This refers to CMN_EXCHANGE_RATES.ID. |
| `EXCHANGE_RATE` | NUMERIC | NOT NULL | The currency exchange rate. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `TRANSNO` | [[PPA_BILLINGS]].`TRANSNO` | |
| `INVOICE_NO` | [[INVOICEHEADER]].`INVOICENO` | |
| `TAX_CODE` | [[TAXCODE]].`CODE` | |
| `TAX_METHOD_CODE` | [[TAX_METHOD]].`CODE` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

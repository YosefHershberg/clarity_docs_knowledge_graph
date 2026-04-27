---
title: ARMASTER
type: db-table
table: ARMASTER
columns: 71
audience: dev
domain: development
canonical: true
fk_targets:
  - SRM_COMPANIES
tags:
  - dev
  - schema
  - table
---

# ARMASTER

> [!info] Description
> This table stores billing address information of companies.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ADDRESS_NAME` | NVARCHAR | NOT NULL | This column refers to the name of the company. |
| `SHORT_NAME` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ADDR1` | NVARCHAR | NULL | This column refers to line 1 of the address. |
| `ADDR2` | NVARCHAR | NULL | This column refers to line 2 of the address. |
| `ADDR3` | NVARCHAR | NULL | This column refers to line 3 of the address. |
| `ADDR4` | NVARCHAR | NULL | This column refers to line 4 of the address. |
| `ADDR5` | NVARCHAR | NULL | This column refers to line 5 of the address. |
| `ADDR6` | NVARCHAR | NULL | This column refers to line 6 of the address. |
| `ADDR_SORT1` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ADDR_SORT2` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ADDR_SORT3` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ADDRESS_TYPE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `STATUS_TYPE` | NUMERIC | NULL | This column indicates whether company address is active or not. |
| `ATTENTION_NAME` | NVARCHAR | NULL | This column refers to the name of the user to whom the correspondence is sent. |
| `ATTENTION_PHONE` | NVARCHAR | NULL | This column refers to the phone number of the user to whom the correspondence is sent. |
| `CONTACT_NAME` | NVARCHAR | NULL | This column refers to the contact's name. |
| `CONTACT_PHONE` | NVARCHAR | NULL | This column refers to the contact's phone number. |
| `TLX_TWX` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PHONE_1` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PHONE_2` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `TAX_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `TERMS_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `FOB_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `FREIGHT_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `POSTING_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `LOCATION_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ALT_LOCATION_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `DEST_ZONE_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `TERRITORY_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `SALESPERSON_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `FIN_CHG_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PRICE_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `PAYMENT_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `VENDOR_CODE` | NVARCHAR | NULL | This column refers to the vendor code. |
| `PRINT_STMT_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `STMT_CYCLE_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `INV_COMMENT_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `STMT_COMMENT_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `DUNN_MESSAGE_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `COMMENT_` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `TRADE_DISC_PERCENT` | FLOAT | NULL | This column is deprecated and should no longer be used. |
| `INVOICE_COPIES` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `IV_SUBSTITUTION` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `SHIP_TO_HISTORY` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `CHECK_CREDIT_LIMIT` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `CREDIT_LIMIT` | FLOAT | NULL | This column is deprecated and should no longer be used. |
| `CHECK_AGING_LIMIT` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `AGING_LIMIT_BRACKET` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `BAL_FWD_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `SHIP_COMPLETE_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `RESALE_NUM` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `DB_NUM` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `DB_DATE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `DB_CREDIT_RATING` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `LATE_CHG_TYPE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `VALID_PAYER_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `VALID_SOLDTO_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `VALID_SHIPTO_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `PAYER_SOLDTO_REL_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ACROSS_NA_FLAG` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `DATE_OPENED` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `ADDED_BY_USER_NAME` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `ADDED_BY_DATE` | DATE | NULL | This column is deprecated and should no longer be used. |
| `MODIFIED_BY_USER_NAME` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `MODIFIED_BY_DATE` | DATE | NULL | This column is deprecated and should no longer be used. |
| `SRM_ID` | NUMERIC | NULL | This column refers to the company ID ([[SRM_COMPANIES]].ID). |
| `AFFILIATED_COMPANY_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `COMPANY_CODE` | NVARCHAR | NULL | This column refers to the company code. |
| `SHIP_TO_COMPANY_CODE` | NVARCHAR | NULL | This column refers to the code which indicates the company address to which bills are sent. |
| `LANGUAGE_CODE` | NVARCHAR | NULL | This column refers to the language code. |
| `LOCALE_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `SRM_ID` | [[SRM_COMPANIES]].`ID` | |

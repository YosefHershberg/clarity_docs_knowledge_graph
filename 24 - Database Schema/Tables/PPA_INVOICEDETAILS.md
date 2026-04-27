---
title: PPA_INVOICEDETAILS
type: db-table
table: PPA_INVOICEDETAILS
columns: 8
audience: dev
domain: development
canonical: true
fk_targets:
  - INVOICEHEADER
  - TAXCODE
tags:
  - dev
  - schema
  - table
---

# PPA_INVOICEDETAILS

> [!info] Description
> This table stores supplemental invoice details.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `INVOICENO` | NVARCHAR | NOT NULL | The invoice number. This column refers to [[INVOICEHEADER]].INVOICENO. |
| `ENTRYTYPE` | NVARCHAR | NOT NULL | The entry type. Values are: - T = Tax - A = Administration |
| `LEVELCODE` | NVARCHAR | NULL | This column refers to TAXMETHOD.CODE. |
| `PERCENTAGE` | NUMERIC | NOT NULL | The percentage applied to taxable amount. |
| `TAXCODE` | NVARCHAR | NULL | This column refers to [[TAXCODE]].CODE. |
| `GEOCODE_SHIP_TO` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `GEOCODE_SHIP_FROM` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `GEOCODE_ORDER_ACCEPTED` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `INVOICENO` | [[INVOICEHEADER]].`INVOICENO` | |
| `TAXCODE` | [[TAXCODE]].`CODE` | |

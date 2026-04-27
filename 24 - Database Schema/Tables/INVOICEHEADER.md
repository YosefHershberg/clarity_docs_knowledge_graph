---
title: INVOICEHEADER
type: db-table
table: INVOICEHEADER
columns: 20
audience: dev
domain: development
canonical: true
fk_targets:
  - CLNTSUPP
  - PAC_MNT_RESOURCES
fk_sources:
  - BB_HSINVOICELAYOUT
  - PAC_BIL_INVOICE_TRN_DETAILS
  - PPA_INVOICEDETAILS
  - PPA_TRANSBILL
tags:
  - dev
  - schema
  - table
---

# INVOICEHEADER

> [!info] Description
> This table stores invoice header records for all billings and credit memos.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `INVOICENO` | NVARCHAR | NOT NULL | The invoice or credit memo number. |
| `INVTYPE` | NVARCHAR | NOT NULL | The invoice type. Values are: - C = Credit Memo - I = Invoice |
| `CMSGROUPNO` | NVARCHAR | NULL | The invoice number in case of invoices and the credit memo number in case of credit memo. |
| `BATCHCTRLNO` | NVARCHAR | NULL | This column refers to Platinum's AR (account receivable) batch control number. |
| `DBNAME` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `INVOICEDATE` | DATE | NOT NULL | The date of the invoice. |
| `PRINTED` | NUMERIC | NOT NULL | This column indicates if the invoice was printed. Values are: - 0 = Invoice has not been printed - 1 = Invoice has been printed |
| `ARPOSTED` | INTEGER | NOT NULL | Indicates if the invoice was posted to accounts receivable (AR). Values are: - 0 = Invoice has not been posted to AR - 1 = Invoice has been posted to AR |
| `STATUS` | NVARCHAR | NOT NULL | The invoice status. Values are: - 0 = Invoiced - 1 = Underadjust - 2 = Reversed - 3 = Rebilled - 9 = Billed |
| `NOTES` | NVARCHAR | NULL | The notes related to the invoice. |
| `INVOICEIMAGE` | BINARY | NULL | Reserved for internal use only. An image of the invoice. |
| `INVOICENO_APPLYTO` | NVARCHAR | NULL | The invoice number to which this row applies. If this is a credit memo, the invoice number to which the credit memo is given credit. This refers to [[INVOICEHEADER]].INVOICENO. |
| `BILL_TO_COMPANY_CODE` | NVARCHAR | NULL | The bill applied to the invoice. This refers to [[CLNTSUPP]].COMPANY_CODE. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | This refers to [[CLNTSUPP]].COMPANY_CODE. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL | This refers to [[PAC_MNT_RESOURCES]].RESOURCE_CODE. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | The XML Open Gateway External Source Identifier. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The XML Open Gateway External ID. |
| `CONSOLIDATED` | INTEGER | NOT NULL | Indicates if the invoice is consolidated for multiple projects. Values are: - 0 = Invoice is not consolidated for multiple projects - 1 = Invoice is consolidated for multiple projects |
| `HAS_BILLING_SUBPROJECTS` | INTEGER | NOT NULL | Indicates if the invoice is for a project with sub-projects. Values are: - 0 = Invoice does not belong to a project that has sub-projects - 1 = Invoice belongs to a project that has sub-projects |
| `BILLING_PROJECT_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `BILL_TO_COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |
| `RESOURCE_CODE` | [[PAC_MNT_RESOURCES]].`RESOURCE_CODE` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[BB_HSINVOICELAYOUT]] | `INVOICENO` | `INVOICENO` |
| [[PAC_BIL_INVOICE_TRN_DETAILS]] | `INVOICE_NO` | `INVOICENO` |
| [[PPA_INVOICEDETAILS]] | `INVOICENO` | `INVOICENO` |
| [[PPA_TRANSBILL]] | `INVOICENO` | `INVOICENO` |

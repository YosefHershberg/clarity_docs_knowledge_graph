---
title: PPA_TRANSBILL
type: db-table
table: PPA_TRANSBILL
columns: 23
audience: dev
domain: development
canonical: true
fk_targets:
  - CLNTSUPP
  - INVOICEHEADER
  - PAC_MNT_PROJECTS
  - PAC_MNT_RESOURCES
  - PPA_WIP
  - PRCHARGECODE
fk_sources:
  - PPA_TRANSBILL_VALUES
tags:
  - dev
  - schema
  - table
---

# PPA_TRANSBILL

> [!info] Description
> This table stores unapproved billing records that are moved to the PPA_BILLINGS table when approved.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TRANSNO` | NUMERIC | NOT NULL | The transaction number. |
| `APPLYTO` | NUMERIC | NOT NULL | The transaction number to which this row applies. |
| `SOURCEMODULE` | NUMERIC | NOT NULL | This column refers to the source of the transaction. Values are: - 9 = Advance billing - 10 = Credit memo - 6 = Demand billing - 12 = Batch billing |
| `TRANSTYPE` | NVARCHAR | NOT NULL | The transaction type. Values are: - L = Labor - M = Material - X = Expense - Q = Equipment - B = Bill - BC = Credit memo - BR = Retainer bill - BP = Contract bill - Y = Matching - A = Adjustment - AU = Write-up - AD = Write down |
| `APPLYTOTRANSTYPE` | NVARCHAR | NOT NULL | The transaction class to which this row applies. Values are: - L = Labor - M = Materials - Q = Equipment - X = Expense |
| `INVOICENO` | NVARCHAR | NULL | The invoice number. This refers to [[INVOICEHEADER]].INVOICENO. |
| `BATCHNO` | NUMERIC | NOT NULL | The batch number from which this transaction was created. |
| `ENTRYDATE` | DATE | NOT NULL | The date the row was initially created. |
| `LASTUPDATEDATE` | DATE | NOT NULL | The date the row was last updated. |
| `EXTERNALTRANSNO` | NUMERIC | NULL | The transaction number in the external system. |
| `BILLINGDATE` | DATE | NOT NULL | The billing date. |
| `QUANTITY` | NUMERIC | NOT NULL | The quantity billed. |
| `NOTES` | NVARCHAR | NULL | Any notes for this billing transaction. |
| `WORKINT` | NUMERIC | NULL | The working column for internal processing. This column refers to [[PPA_WIP]].TRANSNO. |
| `WORKBUF` | NVARCHAR | NULL | The working column for internal processing. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | The company code. This column refers to [[CLNTSUPP]].COMPANY_CODE. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project code ([[PAC_MNT_PROJECTS]].PROJECT_CODE). |
| `ENTRY_RESOURCE_CODE` | NVARCHAR | NOT NULL | The resource who initially created this row. |
| `LASTUPDTDBY_RESOURCE_CODE` | NVARCHAR | NOT NULL | The resource who last updated the row. |
| `RESOURCE_CODE` | NVARCHAR | NOT NULL | The resource code for the bill. This column refers to [[PAC_MNT_RESOURCES]].RESOURE_CODE. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The XML Open Gateway external ID |
| `CHARGE_CODE` | NVARCHAR | NULL | The charge code. This column refers to [[PRCHARGECODE]].PREXTERNALID. |
| `INPUT_TYPE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `INVOICENO` | [[INVOICEHEADER]].`INVOICENO` | |
| `WORKINT` | [[PPA_WIP]].`TRANSNO` | |
| `COMPANY_CODE` | [[CLNTSUPP]].`COMPANY_CODE` | |
| `PROJECT_CODE` | [[PAC_MNT_PROJECTS]].`PROJECT_CODE` | |
| `RESOURCE_CODE` | [[PAC_MNT_RESOURCES]].`RESOURE_CODE` | |
| `CHARGE_CODE` | [[PRCHARGECODE]].`PREXTERNALID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PPA_TRANSBILL_VALUES]] | `TRANSNO` | `TRANSNO` |

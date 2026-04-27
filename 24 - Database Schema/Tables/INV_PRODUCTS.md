---
title: INV_PRODUCTS
type: db-table
table: INV_PRODUCTS
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Products
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/products
---

# INV_PRODUCTS

> [!info] Description
> This table stores CA Clarity PPM-defined product-specific data.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 01 - Investments and Projects]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Products ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the primary key ID used to join this investment to the master table INV_INVESTMENTS. It is unique for each row in the table. The system enters the corresponding value when you create a new row. |
| `VERSION` | NVARCHAR | NULL | The version of the product. |
| `TCO` | NUMERIC | NOT NULL | The total cost of ownership (TCO). |
| `CATEGORY_CODE` | NVARCHAR | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRTASK]], [[PRTEAM]]

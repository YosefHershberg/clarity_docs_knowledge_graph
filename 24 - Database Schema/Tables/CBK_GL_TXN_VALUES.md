---
title: CBK_GL_TXN_VALUES
type: db-table
table: CBK_GL_TXN_VALUES
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
fk_targets:
  - CBK_GL_TXNS
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
---

# CBK_GL_TXN_VALUES

> [!info] Description
> This table stores the detail GL transaction values for the five supported currency types.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `CBK_GL_TXN_ID` | NUMERIC | NULL | This column refers to the GL transaction ([[CBK_GL_TXNS]].ID) that is associated to this transaction. |
| `CURRENCY_TYPE` | NVARCHAR | NOT NULL | The currency type. Values are: - NATURAL - EURO - BILLING - REPORTING - HOME |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | This refers to CMN_CURRENCIES.CURRENCY_CODE. The supported active currencies. |
| `AMOUNT` | NUMERIC | NOT NULL | The amount that is being charged or credited. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CBK_GL_TXN_ID` | [[CBK_GL_TXNS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[DEPARTMENTS]], [[ENTITY]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRTYPECODE]], [[TRANSCLASS]]

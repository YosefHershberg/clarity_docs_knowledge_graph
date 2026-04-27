---
title: CBK_GL_ACCOUNT
type: db-table
table: CBK_GL_ACCOUNT
columns: 18
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
fk_targets:
  - CMN_SEC_USERS
  - ENTITY
fk_sources:
  - CBK_GL_ALLOCATION_DETAIL
  - CBK_GL_TXNS
  - CBK_SCALED_GL_TXNS
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
---

# CBK_GL_ACCOUNT

> [!info] Description
> This table stores information on the GL chart of accounts.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `ENTITY_ID` | NUMERIC | NULL | This refers to [[ENTITY]].ID. The entity with which the GL account is tied. |
| `MAIN_ACCOUNT_ID` | NVARCHAR | NOT NULL | A part of the natural GL account code. |
| `SUB_ACCOUNT_ID` | NVARCHAR | NOT NULL | A part of the natural GL account code. |
| `ACCOUNT_DESCRIPTION` | NVARCHAR | NULL | The description of the GL account. |
| `ACCOUNT_CLASS` | NUMERIC | NULL | This column indicates the class to which the GL account belongs. Values are: - BALANCE_SHEET = Balance Sheet - PROFIT AND LOSS = Profit and Loss |
| `ACCOUNT_TYPE` | NUMERIC | NULL | This column indicates the account type that the GL account belongs to. Values are: - ASSET = Asset - INCOME = Income - EXPENSE = Expense - LIABILITY = Liability |
| `CAPITAL_EXPENSE` | INTEGER | NOT NULL | This column indicates whether the GL account is a capital expense account. |
| `NONCASH_EXPENSE` | INTEGER | NOT NULL | This column indicates whether the GL account is a non-cash expense account. |
| `IS_ACTIVE` | INTEGER | NOT NULL | This column indicates whether the GL account is active. |
| `CHARGEBACK_ENABLED` | INTEGER | NOT NULL | Obsolete. |
| `OVERHEAD` | INTEGER | NULL | This column indicates whether this GL account is an overhead account. (BOOLEAN) |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time the record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this GL account. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time the record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this record. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | This column refers to the ID of an external source. GL accounts are typically imported from an external system. |
| `EXTERNAL_ID` | NVARCHAR | NULL | This refers to the ID of the external source. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ENTITY_ID` | [[ENTITY]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_ALLOCATION_DETAIL]] | `GL_ACCOUNT_ID` | `ID` |
| [[CBK_GL_TXNS]] | `GL_ACCOUNT_ID` | `ID` |
| [[CBK_SCALED_GL_TXNS]] | `GL_ACCOUNT_ID` | `ID` |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[DEPARTMENTS]], [[ENTITY]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRTYPECODE]], [[TRANSCLASS]]

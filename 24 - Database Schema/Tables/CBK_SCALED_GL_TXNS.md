---
title: CBK_SCALED_GL_TXNS
type: db-table
table: CBK_SCALED_GL_TXNS
columns: 20
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
fk_targets:
  - CBK_GL_ACCOUNT
  - CBK_GL_TXNS
  - CBK_INVOICE
  - CMN_SEC_USERS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
---

# CBK_SCALED_GL_TXNS

> [!info] Description
> This table stores the GL transaction values scaled according to the Bill of IT (BOI) percentages.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `INVOICE_ID` | NUMERIC | NOT NULL | This refers to [[CBK_INVOICE]].ID and indicates which invoice the GL transaction belongs to. |
| `FROM_INV_ID` | NUMERIC | NOT NULL | Identifier of the investment being credited by the chargeback. |
| `TO_INV_ID` | NUMERIC | NOT NULL | Identifier of the investment being debited by the chargeback. |
| `AMOUNT` | NUMERIC | NOT NULL | The scaled amount of the GL transaction. |
| `PERCENTAGE` | NUMERIC | NOT NULL | This column indicates the BOI percentage by which the amount should be scaled. |
| `SCALED_AMOUNT` | NUMERIC | NOT NULL | The scaled amount of the GL transaction. |
| `PRIOR_PERIOD_ADJUST` | NUMERIC | NOT NULL | This column indicates whether the scaled GL transaction is an adjustment from prior periods. |
| `CHARGEBACK_TYPE` | NVARCHAR | NULL | The type of chargeback. Values are: - DEBIT = Debit - CREDIT = Credit |
| `TYPE` | NVARCHAR | NOT NULL | The transaction type. Values are: - W = Work in Process - A = Adjusted - R = Reversed |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | This refers to CMN_CURRENCIES.CURRENCY_CODE, the supported, active currencies. |
| `GL_ACCOUNT_ID` | NUMERIC | NULL | This refers to [[CBK_GL_ACCOUNT]].ID and indicates which natural GL account the scaled transaction is charging. |
| `TRANSACTION_DATE` | DATE | NULL | The date of the scaled GL transaction. |
| `RESOURCE_CODE` | NVARCHAR | NULL | This refers to [[SRM_RESOURCES]].UNIQUE_NAME and indicates which resource generated this invoice. |
| `CBK_GL_TXN_ID` | NUMERIC | NULL | This column refers to the GL transaction ([[CBK_GL_TXNS]].ID) that is associated to the scaled transaction. |
| `BILL_EXPENSE_TYPE` | NVARCHAR | NULL | The bill expense type. Values are: - CAPEXP = Capital Expenditure - DEPRECIATION = Depreciation |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `INVOICE_ID` | [[CBK_INVOICE]].`ID` | |
| `GL_ACCOUNT_ID` | [[CBK_GL_ACCOUNT]].`ID` | |
| `RESOURCE_CODE` | [[SRM_RESOURCES]].`UNIQUE_NAME` | |
| `CBK_GL_TXN_ID` | [[CBK_GL_TXNS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[DEPARTMENTS]], [[ENTITY]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRTYPECODE]], [[TRANSCLASS]]

---
title: CBK_GL_TXNS
type: db-table
table: CBK_GL_TXNS
columns: 24
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
fk_targets:
  - CBK_GL_ACCOUNT
  - CBK_GL_ALLOCATION
  - CBK_GL_ALLOCATION_DETAIL
  - CBK_INVOICE
  - CMN_SEC_USERS
  - DEPARTMENTS
  - INV_INVESTMENTS
  - PPA_BILLINGS
  - PPA_WIP
fk_sources:
  - CBK_GL_TXN_VALUES
  - CBK_SCALED_GL_TXNS
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
---

# CBK_GL_TXNS

> [!info] Description
> This table stores information on the GL transactions.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `INVOICE_ID` | NUMERIC | NULL | This refers to [[CBK_INVOICE]].ID, the invoice that the GL transaction belongs to. |
| `JOB_RUN_ID` | NUMERIC | NULL | This refers to CBK_SCH_JOB_RUNS.ID and indicates which job run produced this GL transaction. |
| `PATH_ID` | NUMERIC | NULL | This column allows for developing future functionality related to presentation of invoices in a hierarchical fashion. |
| `CHARGEBACK_TYPE` | NVARCHAR | NOT NULL | The type of chargeback. Values are: - DEBIT = Debit - CREDIT = Credit |
| `ALLOCATION_ID` | NUMERIC | NOT NULL | This refers to [[CBK_GL_ALLOCATION]].ID and indicates which GL allocation rule generated this GL transaction. |
| `ALLOCATION_DTL_ID` | NUMERIC | NULL | This refers to [[CBK_GL_ALLOCATION_DETAIL]].ID and indicates which GL allocation detail generated this GL transaction. |
| `TRANSACTION_SOURCE` | NVARCHAR | NULL | Indicates the type of GL transaction. Values are: - W = Work in Process - R = Reversed - A = Adjusted - D = Debit |
| `TRANSACTION_ID` | NUMERIC | NOT NULL | This refers to [[PPA_WIP]].TRANSNO or [[PPA_BILLINGS]].TRANSNO based on whether the transaction is from PPA_WIP or PPA_BILLINGS. This column also refers to [[CBK_GL_TXNS]].ID in case of reversals or credits. |
| `TRANSACTION_DATE` | DATE | NULL | The date of the GL transaction. |
| `ENTITY_ID` | NUMERIC | NOT NULL | This refers to ENTITIES.ID and indicates which entity the GL transaction is for. |
| `GL_ACCOUNT_ID` | NUMERIC | NOT NULL | This refers to [[CBK_GL_ACCOUNT]].ID and indicates which natural GL account the GL transaction is charging or crediting. |
| `DEPARTMENT_ID` | NUMERIC | NOT NULL | This refers to [[DEPARTMENTS]].ID and indicates which department the GL transaction is charging or crediting. |
| `TRN_INV_ID` | NUMERIC | NOT NULL | This refers to [[INV_INVESTMENTS]].ID and indicates which transaction investment the GL transaction is for. |
| `CBK_INV_ID` | NUMERIC | NOT NULL | This column refers to the investment ([[INV_INVESTMENTS]].ID) that is associated to the GL transaction. |
| `DEBIT_ID` | NUMERIC | NOT NULL | This refers to [[CBK_GL_TXNS]].ID and indicates which debit transaction the credit row corresponds to. |
| `QUANTITY` | NUMERIC | NOT NULL | The quantity or number of units that the GL transaction is for. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this record. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | If the GL transactions are imported from an external system, this field is populated with the ID of the external source that the transactions are coming from. |
| `EXTERNAL_ID` | NVARCHAR | NULL | If the GL transactions are imported from an external system, this field is populated with the ID of the transaction from the external system. |
| `JOB_SOURCE` | NVARCHAR | NULL | This column indicates how the GL transaction was created. Values are: - UI = User Interface - JOB = Job |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `INVOICE_ID` | [[CBK_INVOICE]].`ID` | |
| `ALLOCATION_ID` | [[CBK_GL_ALLOCATION]].`ID` | |
| `ALLOCATION_DTL_ID` | [[CBK_GL_ALLOCATION_DETAIL]].`ID` | |
| `TRANSACTION_ID` | [[PPA_WIP]].`TRANSNO` | |
| `TRANSACTION_ID` | [[PPA_BILLINGS]].`TRANSNO` | |
| `GL_ACCOUNT_ID` | [[CBK_GL_ACCOUNT]].`ID` | |
| `DEPARTMENT_ID` | [[DEPARTMENTS]].`ID` | |
| `TRN_INV_ID` | [[INV_INVESTMENTS]].`ID` | |
| `CBK_INV_ID` | [[INV_INVESTMENTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_TXN_VALUES]] | `CBK_GL_TXN_ID` | `ID` |
| [[CBK_SCALED_GL_TXNS]] | `CBK_GL_TXN_ID` | `ID` |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[DEPARTMENTS]], [[ENTITY]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRTYPECODE]], [[TRANSCLASS]]

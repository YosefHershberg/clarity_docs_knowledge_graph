---
title: PAC_CHG_EXCEPTIONS
type: db-table
table: PAC_CHG_EXCEPTIONS
columns: 12
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_LOOKUPS
  - CMN_SEC_USERS
  - PAC_CHG_BATCH_HEADERS
  - PAC_CHG_TRANSACTIONS
  - PPA_BILLINGS
  - PPA_WIP
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_EXCEPTIONS

> [!info] Description
> This table is deprecated and should no longer be used.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `BATCH_ID` | NUMERIC | NOT NULL | This refers to [[PAC_CHG_BATCH_HEADERS]].ID. |
| `SOURCE_ID` | NUMERIC | NOT NULL | This column is always set to 0. |
| `TRANS_SOURCE` | CHAR | NOT NULL | The transaction source. Values are: - W = WIP - A = Adjusted - R = Reverse |
| `TRANSNO` | NUMERIC | NOT NULL | This refers to [[PPA_WIP]].TRANSNO, [[PPA_BILLINGS]].TRANSNO or [[PAC_CHG_TRANSACTIONS]].TRANSACTION_NO. |
| `ERROR_ID` | NUMERIC | NOT NULL | This refers to [[CMN_LOOKUPS]].ID. It is the error ID associated with this exception. |
| `ERROR_MESSAGE` | NVARCHAR | NOT NULL | The error message for this exception in the language of the person who generated the exception. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `SESSION_ID` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `BATCH_ID` | [[PAC_CHG_BATCH_HEADERS]].`ID` | |
| `TRANSNO` | [[PAC_CHG_TRANSACTIONS]].`TRANSACTION_NO` | |
| `TRANSNO` | [[PPA_WIP]].`TRANSNO` | |
| `TRANSNO` | [[PPA_BILLINGS]].`TRANSNO` | |
| `ERROR_ID` | [[CMN_LOOKUPS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

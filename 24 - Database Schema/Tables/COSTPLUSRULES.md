---
title: COSTPLUSRULES
type: db-table
table: COSTPLUSRULES
columns: 19
audience: dev
domain: development
canonical: true
erds:
  - Matrix Management
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/matrix-management
---

# COSTPLUSRULES

> [!info] Description
> This table stores the cost plus rules.

## Subject areas (ERDs)
- [[_MOC - Matrix Management ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `COSTPLUSCODE` | NVARCHAR | NOT NULL | This column indicates the cost plus code. |
| `SEQUENCE` | NUMERIC | NOT NULL | This column indicates the numeric sequence number. |
| `MULTFLATPERCENT` | NVARCHAR | NOT NULL | This column indicates whether the multiplier is flat or percentage. Values are: - F = Flat - P = Percent |
| `MULTAMOUNT` | FLOAT | NOT NULL | This column indicates the multiplier amount to apply. |
| `MULTEACHUNIT` | INTEGER | NOT NULL | Indicates if the cost plus rule should apply a multiplier for each unit. It is a Boolean column. |
| `BURDENFLATPERCENT` | NVARCHAR | NOT NULL | Indicates if the cost plus rule is flat or percentage based. Values are: - F = Flat - P = Percent |
| `BURDENAMOUNT` | FLOAT | NOT NULL | This column indicates the burden amount to apply. |
| `BURDENEACHUNIT` | INTEGER | NOT NULL | This column indicates if the cost plus rule should apply a burden for each unit. (Boolean) |
| `OVERHEADFLATPERCENT` | NVARCHAR | NOT NULL | This column refers to the overhead amount flat percent. Values are: - F = Flat - P = Percent |
| `OVERHEADAMOUNT` | FLOAT | NOT NULL | This column refers to the overhead amount to apply. |
| `OVERHEADEACHUNIT` | INTEGER | NOT NULL | This column indicates whether the cost plus rule should apply overhead for each unit. (Boolean) |
| `FROMRANGE` | NUMERIC | NOT NULL | This column indicates the low range inclusive. |
| `TORANGE` | NUMERIC | NOT NULL | This column indicates the high range inclusive. |
| `COSTPLUS_ID` | NUMERIC | NULL |  |
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

[[COSTPLUS]], [[PAC_MNT_MATRIX_PERMISIONS]], [[PPA_LOCMATRIXASSIGNMENTS]], [[PPA_MATRIXCOLDEF]], [[PPA_MATRIXVALUES]], [[PPA_MATRIX]], [[TAXCODE]], [[TAXCODE_METHOD]], [[TAX_AUTHORITY]], [[TAX_METHOD]]

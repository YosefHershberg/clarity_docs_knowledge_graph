---
title: INV_INVESTMENT_ALLOCS_FLAT
type: db-table
table: INV_INVESTMENT_ALLOCS_FLAT
columns: 15
audience: dev
domain: development
canonical: true
erds:
  - Investments
fk_targets:
  - CMN_SEC_USERS
  - INV_INVESTMENTS
tags:
  - dev
  - schema
  - table
  - erd/investments
---

# INV_INVESTMENT_ALLOCS_FLAT

> [!info] Description
> This table stores hierarchical data (that is, flattened allocations). In a hierarchical tree, it holds the allocations between every two investment if they are in same tree.

## Subject areas (ERDs)
- [[_MOC - Investments ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `FROM_INV_ID` | NUMERIC | NOT NULL | The ID of the child investment. This refers to [[INV_INVESTMENTS]].ID. |
| `TO_INV_ID` | NUMERIC | NOT NULL | This is the ID of the parent investment. This refers to [[INV_INVESTMENTS]].ID. |
| `PATH_ID` | NUMERIC | NULL | This column is not used. |
| `START_DATE` | DATE | NULL | This column is not used. |
| `END_DATE` | DATE | NULL | This column is not used. |
| `PERCENTAGE` | NUMERIC | NOT NULL | This indicates the child investment's allocation to its parent investment. |
| `ROOT_PERCENTAGE` | NUMERIC | NOT NULL | This indicates the child investment's allocation to its parent investment. |
| `FLAT_STATUS_CODE` | NVARCHAR | NOT NULL | The status code. Values are: - New - Aggregated - Deleted |
| `ALLOC_PCT_TSV` | BINARY | NULL | This column is not used. |
| `ROOT_ALLOC_PCT_TSV` | BINARY | NULL | This column is not used. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `FROM_INV_ID` | [[INV_INVESTMENTS]].`ID` | |
| `TO_INV_ID` | [[INV_INVESTMENTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_FLAT_HIERARCHIES]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[ODF_OBJECT_INSTANCE_MAPPING]]

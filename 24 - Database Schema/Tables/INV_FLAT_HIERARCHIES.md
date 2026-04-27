---
title: INV_FLAT_HIERARCHIES
type: db-table
table: INV_FLAT_HIERARCHIES
columns: 9
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

# INV_FLAT_HIERARCHIES

> [!info] Description
> This denormalized table stores data based on INV_HIERARCHIES. The flattened table contains parent_id and child_id entries for all descendants of a given investment parent_id that has a hierarchy. The link_source_id contains the ID of the immediate parent of the child. This table enables rapid retrieval of all descendants within a hierarchy. By examining the link_source_id, the original hierarchical order can also be retrieved.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 01 - Investments and Projects]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Investments ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `PARENT_ID` | NUMERIC | NOT NULL | This column contains a reference to the parent or root investment of the hierarchy. The parent_id value corresponds to the value in [[INV_INVESTMENTS]].ID |
| `CHILD_ID` | NUMERIC | NOT NULL | This column contains a reference to the child or descendant investment that is contained in the hierarchy rooted at parent_id. The child_id value corresponds to the value in [[INV_INVESTMENTS]].ID |
| `LINK_SOURCE_ID` | NUMERIC | NOT NULL | This column contains a reference to the immediate parent investment of the child. The link_source_id value corresponds to the value in [[INV_INVESTMENTS]].ID |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column contains the date when the record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column identifies the user who last updated the record. |
| `REF_COUNT` | NUMERIC | NOT NULL | This column stores the number of ways a child is associated with the parent |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PARENT_ID` | [[INV_INVESTMENTS]].`ID` | |
| `CHILD_ID` | [[INV_INVESTMENTS]].`ID` | |
| `LINK_SOURCE_ID` | [[INV_INVESTMENTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[INV_INVESTMENT_ALLOCS_FLAT]], [[ODF_OBJECT_INSTANCE_MAPPING]]

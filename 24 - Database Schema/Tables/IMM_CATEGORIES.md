---
title: IMM_CATEGORIES
type: db-table
table: IMM_CATEGORIES
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - ITIL
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - IMM_INCIDENTS
  - IMM_OBJECT_CATEGORIES
tags:
  - dev
  - schema
  - table
  - erd/itil
---

# IMM_CATEGORIES

> [!info] Description
> This table stores the various incident categories.

## Subject areas (ERDs)
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `NAME` | NVARCHAR | NOT NULL | The name of the incident category. |
| `CODE` | NVARCHAR | NOT NULL | A unique code for the incident category. |
| `DESCRIPTION` | NVARCHAR | NULL | The description of the category. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[IMM_INCIDENTS]] | `CATEGORY_ID` | `ID` |
| [[IMM_OBJECT_CATEGORIES]] | `CATEGORY_ID` | `ID` |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[FIN_TXNS]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PRTASK]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

---
title: IMM_OBJECT_CATEGORIES
type: db-table
table: IMM_OBJECT_CATEGORIES
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - ITIL
fk_targets:
  - CMN_SEC_USERS
  - IMM_CATEGORIES
  - SRM_PROJECTS
tags:
  - dev
  - schema
  - table
  - erd/itil
---

# IMM_OBJECT_CATEGORIES

> [!info] Description
> This table stores the mapping between incident categories and investment objects. This table specifies which investment objects fall under the generic category.

## Subject areas (ERDs)
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique ID for this table. |
| `CATEGORY_ID` | NUMERIC | NOT NULL | The ID of the category. This refers to [[IMM_CATEGORIES]].ID. |
| `OBJECT_TYPE` | NVARCHAR | NOT NULL | The investment type of the mapped investment. This refers to [[SRM_PROJECTS]].INVESTMENT_CODE. Currently, values are: - 0 = ASSET - 1 = APPLICATION - 2 = PRODUCT - 3 = OTHER INVESTMENT |
| `OBJECT_ID` | NUMERIC | NOT NULL | The ID of the investment object. Currently, this refers to [[SRM_PROJECTS]].ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CATEGORY_ID` | [[IMM_CATEGORIES]].`ID` | |
| `OBJECT_TYPE` | [[SRM_PROJECTS]].`INVESTMENT_CODE` | |
| `OBJECT_ID` | [[SRM_PROJECTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PRTASK]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

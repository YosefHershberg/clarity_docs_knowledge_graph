---
title: PRJ_ROLES_FLAT
type: db-table
table: PRJ_ROLES_FLAT
columns: 7
audience: dev
domain: development
canonical: true
erds:
  - Resources
fk_targets:
  - CMN_SEC_USERS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/resources
---

# PRJ_ROLES_FLAT

> [!info] Description
> This table stores flattened role hierarchy relationships. This table holds one row for every child-to-ancestor relationship along the role hierarchy, including one for role-to-self.

## Subject areas (ERDs)
- [[_MOC - Resources ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in this table. It is a primary key. |
| `ROLE_ID` | NUMERIC | NOT NULL | The role ID. This to [[SRM_RESOURCES]].ID. |
| `BRANCH_ROLE_ID` | NUMERIC | NOT NULL | This refers to [[SRM_RESOURCES]].ID the ancestor (or self) role. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ROLE_ID` | [[SRM_RESOURCES]].`ID` | |
| `BRANCH_ROLE_ID` | [[SRM_RESOURCES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[INV_PROJECTS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRJ_RESOURCES]], [[PRTASK]], [[PRTEAM]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_RESOURCES]]

---
title: RSM_SKILLS_ASSOCIATIONS
type: db-table
table: RSM_SKILLS_ASSOCIATIONS
columns: 11
audience: dev
domain: development
canonical: true
erds:
  - Resources
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/resources
---

# RSM_SKILLS_ASSOCIATIONS

> [!info] Description
> This table stores associate skills with resources.

## Subject areas (ERDs)
- [[_MOC - Resources ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in this table. |
| `SKILL_ID` | NUMERIC | NULL | The ID of the skill. |
| `PROFICIENCY_LEVEL_ID` | NUMERIC | NULL | The ID the lookup value for the type "RSM_RESOURCE_PROFLEV." |
| `INTEREST_LEVEL_ID` | NUMERIC | NULL | The ID of the lookup value for the type "RSM_RESOURCE_INTLEV." |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `OBJECT_ID` | NUMERIC | NULL | The associated object’s object code. Pre-existing RES_ID-based associations will default to ‘resource’. New associations may also be ‘team.' |
| `OBJECT_CODE` | NVARCHAR | NULL | The associated object’s PK ID. |
| `WEIGHT` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[INV_PROJECTS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRTASK]], [[PRTEAM]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[SRM_RESOURCES]]

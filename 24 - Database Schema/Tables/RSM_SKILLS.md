---
title: RSM_SKILLS
type: db-table
table: RSM_SKILLS
columns: 13
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

# RSM_SKILLS

> [!info] Description
> This table stores information about all skills in CA Clarity PPM.

## Subject areas (ERDs)
- [[_MOC - Resources ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `SKILL_CODE` | NVARCHAR | NOT NULL | The skill code. |
| `SKILL_NAME` | NVARCHAR | NOT NULL | The skill name. |
| `DESCRIPTION` | NVARCHAR | NULL | The description. |
| `PARENT_SKILL_ID` | NUMERIC | NULL | The parent skill ID. |
| `SKILL_PATH` | NVARCHAR | NOT NULL | The full path of the skill in the hierarchy. |
| `SKILL_SYNONYM` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | Indicates if the skill is active. Values are: - 0 = Inactive - 1 = Active |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in this table. |
| `PARENT_SKILL_PATH` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[INV_PROJECTS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRTASK]], [[PRTEAM]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_RESOURCES]]

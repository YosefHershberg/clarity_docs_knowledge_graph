---
title: ITL_OBJECT_ASSOCIATIONS
type: db-table
table: ITL_OBJECT_ASSOCIATIONS
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - ITIL
fk_targets:
  - CMN_SEC_USERS
  - SRM_PROJECTS
tags:
  - dev
  - schema
  - table
  - erd/itil
---

# ITL_OBJECT_ASSOCIATIONS

> [!info] Description
> This table stores the association between incidents, risks, issues, and the tasks or projects created for them.

## Subject areas (ERDs)
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `OBJECT_ID` | NUMERIC | NOT NULL | The ID of the object for the task or project that was created. It could be the incident ID, risk ID, or issue ID. |
| `OBJECT_TYPE` | NVARCHAR | NOT NULL | Indicates if the object is an incident, risk, or an issue. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | This column either refers to the PRTASK table or the SRM_PROJECTS table. This column helps determine whether the association represents a task or a project. |
| `PK_ID` | NUMERIC | NOT NULL | The ID of the project or task that was created. This refers to PRTASKS.PRID or [[SRM_PROJECTS]].ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PK_ID` | [[SRM_PROJECTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[PRTASK]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

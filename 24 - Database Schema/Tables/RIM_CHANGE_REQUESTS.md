---
title: RIM_CHANGE_REQUESTS
type: db-table
table: RIM_CHANGE_REQUESTS
columns: 16
audience: dev
domain: development
canonical: true
erds:
  - ITIL
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/itil
---

# RIM_CHANGE_REQUESTS

> [!info] Description
> This table stores extra information for change requests.

## Subject areas (ERDs)
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in this table. |
| `APPROVED_DATE` | DATE | NULL | The date the change request was approved. |
| `APPROVED_BY` | NUMERIC | NULL | This refers to [[CMN_SEC_USERS]].ID. |
| `CLOSURE_DATE` | DATE | NULL | The date when this change request was closed. |
| `REVIEW_DATE` | DATE | NULL | The date when this change request was reviewed. |
| `BENEFITS` | NVARCHAR | NULL | A description of the benefits. |
| `IMPACT_ON_BASELINE` | NVARCHAR | NULL | A description of the impact on baseline. |
| `EFFECT_ON_COST` | NUMERIC | NULL | The effect on cost. |
| `EFFECT_ON_SCHEDULE` | NUMERIC | NULL | The effect on schedule. |
| `EFFECT_ON_RESOURCES` | NUMERIC | NULL | The effect on resources. |
| `ASSESSOR` | NUMERIC | NULL | The assessor. This refers to [[CMN_SEC_USERS]].ID. |
| `ASSESSMENT_DATE` | DATE | NULL | The date when the change request was assessed. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `APPROVED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `ASSESSOR` | [[CMN_SEC_USERS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PRTASK]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

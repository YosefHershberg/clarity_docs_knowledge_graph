---
title: RIM_RISK_MITIGATIONS
type: db-table
table: RIM_RISK_MITIGATIONS
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - ITIL
fk_targets:
  - CMN_SEC_USERS
  - RIM_RISKS_AND_ISSUES
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/itil
---

# RIM_RISK_MITIGATIONS

> [!info] Description
> This table stores mitigations for risks.

## Subject areas (ERDs)
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in the table. |
| `RIM_RISK_ID` | NUMERIC | NOT NULL | This refers to the [[RIM_RISKS_AND_ISSUES]].ID. |
| `MITIGATION` | NVARCHAR | NULL | The mitigation. |
| `ASSIGNED_TO` | NUMERIC | NULL | The resource to whom the mitigation has been assigned. This column refers to [[SRM_RESOURCES]].ID. |
| `DUE_DATE` | DATE | NULL | The due date. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RIM_RISK_ID` | [[RIM_RISKS_AND_ISSUES]].`ID` | |
| `ASSIGNED_TO` | [[SRM_RESOURCES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PRTASK]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

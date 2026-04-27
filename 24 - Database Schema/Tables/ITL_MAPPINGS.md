---
title: ITL_MAPPINGS
type: db-table
table: ITL_MAPPINGS
columns: 9
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

# ITL_MAPPINGS

> [!info] Description
> This table stores the cross mapping between urgency and the impact to arrive at a calculated priority.

## Subject areas (ERDs)
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `X_CODE` | NUMERIC | NOT NULL | The urgency for incidents and risks and issues. |
| `Y_CODE` | NUMERIC | NOT NULL | The impact for incidents and for risks and issues. |
| `V_CODE` | NUMERIC | NOT NULL | The priority for incidents and for risks and issues. |
| `TYPE` | NVARCHAR | NOT NULL | The object being mapping. values are: - 0 = Incident - 1 = Risk - 2 = Issue |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[INV_INVESTMENTS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PRTASK]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

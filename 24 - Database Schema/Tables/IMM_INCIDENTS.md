---
title: IMM_INCIDENTS
type: db-table
table: IMM_INCIDENTS
columns: 28
audience: dev
domain: development
canonical: true
erds:
  - ITIL
fk_targets:
  - CMN_SEC_USERS
  - IMM_CATEGORIES
fk_sources:
  - FIN_POSTED_TXNS
  - PRTIMEENTRY
tags:
  - dev
  - schema
  - table
  - erd/itil
---

# IMM_INCIDENTS

> [!info] Description
> This table stores the incidents logged in the system.

## Subject areas (ERDs)
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for the incident. |
| `INCIDENT_CODE` | NVARCHAR | NOT NULL | The unique code for an incident. This can be auto-generated per scheme. |
| `SUBJECT` | NVARCHAR | NOT NULL | A short description for the incident. |
| `REPORTED_BY` | NUMERIC | NOT NULL | The user who reported the incident. this refers to CMN_SEC_USERS. |
| `DESCRIPTION` | NVARCHAR | NULL | The detailed description of the incident. |
| `STATUS_CODE` | NVARCHAR | NOT NULL | The current status of the incident. |
| `IMPACT_ENUM` | NUMERIC | NOT NULL | The impact represented by an enumeration. |
| `URGENCY_ENUM` | NUMERIC | NOT NULL | The urgency represented by an enumeration. |
| `PRIORITY_ENUM` | NUMERIC | NULL | This column refers to the priority represented by an enumeration. |
| `CATEGORY_ID` | NUMERIC | NULL | The incident category. This refers to [[IMM_CATEGORIES]].ID. |
| `INVESTMENT_ID` | NUMERIC | NULL |  |
| `RESOLUTION_DATE` | DATE | NULL | The date the incident was resolved. |
| `VERIFICATION_DATE` | DATE | NULL | This column represents the date when the resolution of the incident was verified. |
| `ASSIGNED_TO` | NUMERIC | NULL | The resource who was assigned to resolve the incident. |
| `TYPE_CODE` | NVARCHAR | NULL | The type of incident. |
| `START_DATE` | DATE | NULL | The date the assigned resource is scheduled to start work on the incident. |
| `ESTIMATED_EFFORT` | NUMERIC | NULL | The overall estimated effort required to resolve the incident. |
| `EXPECTED_RESOLUTION_DATE` | DATE | NULL | The date by which the incident should be resolved as requested by requestor. |
| `IS_PRIORITY_OVERRIDDEN` | NUMERIC | NOT NULL | This column indicates if the priority calculated by the system was overridden by anyone. |
| `DOCUMENT` | NUMERIC | NULL | Any attachments associated with incident. |
| `FLAG_FOR_CONVERSION` | NUMERIC | NOT NULL | This column indicates if the incident has been flagged for conversion to a task or project. |
| `ASSIGNED_PRJMGR_ID` | NUMERIC | NULL | This column represents the project manager who is responsible for converting the incident to a task or project. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | The external source ID as specified in the XOG. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The external ID as specified in the XOG. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CATEGORY_ID` | [[IMM_CATEGORIES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[FIN_POSTED_TXNS]] | `PK_ID` | `ID` |
| [[PRTIMEENTRY]] | `INCIDENT_ID` | `ID` |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_OBJECT_CATEGORIES]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PRTASK]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

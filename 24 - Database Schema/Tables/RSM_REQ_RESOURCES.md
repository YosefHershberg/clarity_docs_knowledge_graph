---
title: RSM_REQ_RESOURCES
type: db-table
table: RSM_REQ_RESOURCES
columns: 18
audience: dev
domain: development
canonical: true
erds:
  - Resources
fk_targets:
  - CMN_SEC_USERS
  - PRTEAM
  - RSM_REQ_REQUISITIONS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/resources
---

# RSM_REQ_RESOURCES

> [!info] Description
> This table stores the mapping of resources (RESOURCE_ID) to requisitions (REQUSITION_ID).This is the source table for the Requisition Resources ODF object.

## Subject areas (ERDs)
- [[_MOC - Resources ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | A unique, internal system-generated ID value. |
| `REQUISITION_ID` | NUMERIC | NOT NULL | The requisition ([[RSM_REQ_REQUISITIONS]].ID) to which the resource is attached. |
| `RESOURCE_ID` | NUMERIC | NOT NULL | The specific resource ([[SRM_RESOURCES]].ID) which has been added to the requisition. |
| `REQUIREMENT_ID` | NUMERIC | NULL | The team ID ([[PRTEAM]].PRID) indicating the source team row used to generate the requisition. |
| `TEAM_ID` | NUMERIC | NULL | The team ID ([[PRTEAM]].PRID) to which this resource was booked for the indicated amount. |
| `IS_SELECTED` | NUMERIC | NOT NULL | A flag indicating that the corresponding resource will be booked with the requisition. If not marked, the resource will not be booked. The default value is "1" or true. |
| `OVERALL_SCORE` | FLOAT | NULL | The overall match score from resource search at the time the resource was added to the requisition. |
| `AVAILABILITY_SCORE` | FLOAT | NULL | The availability match score from resource search at the time the resource was added to the requisition. |
| `SKILLS_SCORE` | FLOAT | NULL | The skills match score from resource search at the time the resource was added to the requisition. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this row. |
| `REQUEST_CURVE` | BINARY | NULL | The time-varying amount (percentage) that the resource will fill for against the requisition's requested amount. |
| `REQUEST_START` | DATE | NULL | The read-only value which is the minimum start date of the requested amount (per the REQUEST_CURVE). |
| `REQUEST_FINISH` | DATE | NULL | The read-only value which is the maximum finish date of the requested amount (per the REQUEST_CURVE). |
| `IS_PREFERRED` | NUMERIC | NOT NULL |  |
| `ODF_SS_REQUEST_CURVE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `REQUISITION_ID` | [[RSM_REQ_REQUISITIONS]].`ID` | |
| `RESOURCE_ID` | [[SRM_RESOURCES]].`ID` | |
| `REQUIREMENT_ID` | [[PRTEAM]].`PRID` | |
| `TEAM_ID` | [[PRTEAM]].`PRID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[INV_PROJECTS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRTASK]], [[PRTEAM]], [[PRTYPECODE]], [[RSM_REQ_REQUISITIONS]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_RESOURCES]]

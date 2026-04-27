---
title: PRJ_REQ_AUDIT
type: db-table
table: PRJ_REQ_AUDIT
columns: 17
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - PRTEAM
  - RSM_REQ_REQUISITIONS
  - SRM_PROJECTS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
---

# PRJ_REQ_AUDIT

> [!info] Description
> This table stores information at time of requisition booking. Currently, no CA Clarity PPM functionality is defined to use this data. It is expected that the requesting customer will provide reports.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in this table. This is the primary key. |
| `REQ_ID` | NUMERIC | NOT NULL | The requisition ID. This refers to [[RSM_REQ_REQUISITIONS]].ID. |
| `TEAM_ID` | NUMERIC | NOT NULL | The team row that resulted from this booking. This refers to [[PRTEAM]].PRID. |
| `ALLOC_AMT` | NUMERIC | NULL | The amount that was booked. |
| `ISOPEN` | NUMERIC | NOT NULL | The [[PRTEAM]].PRISOPEN status for the TEAM_ID booking at the time of booking. |
| `BOOKING` | NUMERIC | NOT NULL | The [[PRTEAM]].PRBOOKINGSTATUS for the TEAM_ID booking at the time of booking. |
| `AVAILSTART` | DATE | NULL | The [[PRTEAM]].PRAVAILSTART value for the TEAM_ID booking at the time of booking. |
| `AVAILFINISH` | DATE | NULL | The [[PRTEAM]].PRAVAILFINISH value for the TEAM_ID booking at the time of booking. |
| `REQ_PROJECT_ID` | NUMERIC | NOT NULL | The project that was booked to. This refers to [[SRM_PROJECTS]].ID. |
| `REQ_RESOURCE_ID` | NUMERIC | NOT NULL | The resource that was booked. This refers to [[SRM_RESOURCES]].ID. |
| `REQ_ROLE_ID` | NUMERIC | NOT NULL | The requisition's role ID. This refers to [[SRM_RESOURCES]].ID. |
| `REQUESTOR_USER_ID` | NUMERIC | NOT NULL | The user who originated the request. This refers to [[CMN_SEC_USERS]].ID. |
| `REQ_CREATED_DATE` | DATE | NOT NULL | The date the requisition was created |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `REQ_ID` | [[RSM_REQ_REQUISITIONS]].`ID` | |
| `TEAM_ID` | [[PRTEAM]].`PRID` | |
| `ISOPEN` | [[PRTEAM]].`PRISOPEN` | |
| `BOOKING` | [[PRTEAM]].`PRBOOKINGSTATUS` | |
| `AVAILSTART` | [[PRTEAM]].`PRAVAILSTART` | |
| `AVAILFINISH` | [[PRTEAM]].`PRAVAILFINISH` | |
| `REQ_PROJECT_ID` | [[SRM_PROJECTS]].`ID` | |
| `REQ_RESOURCE_ID` | [[SRM_RESOURCES]].`ID` | |
| `REQ_ROLE_ID` | [[SRM_RESOURCES]].`ID` | |
| `REQUESTOR_USER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

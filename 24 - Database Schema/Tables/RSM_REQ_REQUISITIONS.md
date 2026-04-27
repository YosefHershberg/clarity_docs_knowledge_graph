---
title: RSM_REQ_REQUISITIONS
type: db-table
table: RSM_REQ_REQUISITIONS
columns: 24
audience: dev
domain: development
canonical: true
erds:
  - Resources
fk_targets:
  - CMN_SEC_USERS
  - INV_INVESTMENTS
fk_sources:
  - PRJ_REQ_AUDIT
  - RSM_REQ_ITEMS
  - RSM_REQ_RESOURCES
tags:
  - dev
  - schema
  - table
  - erd/resources
---

# RSM_REQ_REQUISITIONS

> [!info] Description
> This table stores the resource requisitions created for staffing resources to projects.

## Subject areas (ERDs)
- [[_MOC - Resources ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The internal ID of this row. |
| `NAME` | NVARCHAR | NOT NULL | The name of this requisition. It is used for displaying the requisition in lists and lookups. |
| `REQUISITION_CODE` | NVARCHAR | NOT NULL | The unique ID of this requisition. It is required. |
| `OBJECT_ID` | NUMERIC | NOT NULL | This refers to [[INV_INVESTMENTS]].ID for the project that this requisition is based upon. This is a required value that is set when the requisition is created. |
| `OBJECT_TYPE` | NVARCHAR | NOT NULL | The value is always "SRM_PROJECTS" since all requisitions are associated with projects. This is not used anymore in 8.0 (see comment). |
| `STATUS_CODE` | NVARCHAR | NULL | The status of this requisition. The value of this column comes from the RSM_REQUISITION_STATUS lookup. |
| `PRIORITY_CODE` | NVARCHAR | NULL | The priority of this requisition. The value of this column comes from the RSM_REQ_PRIORITY lookup. |
| `DUE_DATE` | DATE | NULL | The date this requisition is due. It defaults to the day the requisition is created. |
| `DESCRIPTION` | NVARCHAR | NULL | A description of the requisition. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `REQUIREMENT_ID` | NUMERIC | NULL | This refers to the staffing requirement (team) on which this requisition is based. |
| `BOOK_MANAGER_ID` | NUMERIC | NULL | The dynamic lookup to resource (for example, the resource manager). Logically speaking, this is the "resource manager" for list filtering and notification purposes. The value defaults to the booking manager for the resource or role indicated by the staffing requirement. When the booking manager changes, an “open�? notification is sent to the new booking manager and the Requestor. |
| `REQUESTED_BY` | NUMERIC | NULL | The dynamic lookup to resource (for example, the project manager). Logically speaking, this is the project manager for list filtering and notification purposes. The value defaults to the current user when a requisition is created. |
| `REQUEST_CURVE` | BINARY | NULL | The requisition's requested amount, as a time-varying percentage, including the start and end dates. This value is stored as binary data. |
| `REQUEST_START` | DATE | NULL | A read-only value which is the minimum start date of the requested amount (per the REQUEST_CURVE). |
| `REQUEST_FINISH` | DATE | NULL | The read-only value which is the maximum finish date of the requested amount (per the REQUEST_CURVE). |
| `REQUEST_AVGRATE` | FLOAT | NULL |  |
| `SLICE_STATUS` | NUMERIC | NULL | An internal system value pertaining to REQUEST_CURVE. |
| `IS_UNBOOK` | NUMERIC | NOT NULL | The read-only flag indicating that the requisition is a request for unbooking. The value is established when the requisition is created. |
| `IS_REPLACE` | NUMERIC | NOT NULL | A read-only flag indicating that a requisition flagged as an unbooking should also be filled with a replacement. The value is established when the requisition is created. |
| `ODF_SS_REQUEST_CURVE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `OBJECT_ID` | [[INV_INVESTMENTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PRJ_REQ_AUDIT]] | `REQ_ID` | `ID` |
| [[RSM_REQ_ITEMS]] | `REQUISITION_ID` | `ID` |
| [[RSM_REQ_RESOURCES]] | `REQUISITION_ID` | `ID` |

## Related tables (same subject area)

[[INV_INVESTMENTS]], [[INV_PROJECTS]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRTASK]], [[PRTEAM]], [[PRTYPECODE]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_RESOURCES]]

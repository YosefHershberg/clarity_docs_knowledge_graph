---
title: RSM_REQ_ITEM_RESOURCES
type: db-table
table: RSM_REQ_ITEM_RESOURCES
columns: 12
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - PRJ_RESOURCES
  - RSM_REQ_ITEMS
  - SRM_RESOURCES
tags:
  - dev
  - schema
  - table
---

# RSM_REQ_ITEM_RESOURCES

> [!info] Description
> This table stores information about resources selected for requisitions. Information about the resource's availability score, skills match and overall score is stored in this table. These rows are associated with a particular requisition.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The internal ID of this row. |
| `REQ_ITEM_ID` | NUMERIC | NOT NULL | The requisition item this resource is associated with. This refers to [[RSM_REQ_ITEMS]].ID. Requisitions can have various items (lists) of resources associated with them to aid the resource manager when grouping resources who fulfill particular requests. |
| `RESOURCE_ID` | NUMERIC | NOT NULL | The ID of the resource associated with this row. The refers to [[SRM_RESOURCES]].ID and [[PRJ_RESOURCES]].ID. |
| `IS_SELECTED` | NUMERIC | NOT NULL | A flag indicating that this resource has been selected for fulfilling the requisition. |
| `ASSOCIATION_DATE` | DATE | NOT NULL | A time stamp indicating when this resource was added to the entry item for the requisition. |
| `OVERALL_SCORE` | NUMERIC | NULL | The overall score the resource had when the resource was added to the entry item. The overall score is a combination of the availability and skills score if any. |
| `AVAILABILITY_SCORE` | NUMERIC | NULL | The availability score the resource had when the resource was added to the entry item. The availability score is the percentage match that the resource obtained based on the availability dates and units entered in the search criteria. |
| `SKILLS_SCORE` | NUMERIC | NULL | The skills score the resource had when the resource was added to the entry item. The skills score is the percentage match the resource had to the skills listed in the search criteria for the entry item. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `REQ_ITEM_ID` | [[RSM_REQ_ITEMS]].`ID` | |
| `RESOURCE_ID` | [[SRM_RESOURCES]].`ID` | |
| `RESOURCE_ID` | [[PRJ_RESOURCES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

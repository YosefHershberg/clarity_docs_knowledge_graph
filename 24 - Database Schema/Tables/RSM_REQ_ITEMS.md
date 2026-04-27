---
title: RSM_REQ_ITEMS
type: db-table
table: RSM_REQ_ITEMS
columns: 9
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - RSM_REQ_REQUISITIONS
fk_sources:
  - RSM_REQ_ITEM_RESOURCES
tags:
  - dev
  - schema
  - table
---

# RSM_REQ_ITEMS

> [!info] Description
> This table stores the resource items required for a requisition. The item row contains how many resources are required for a particular requisition and a brief description of what these resources are needed for.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The internal ID of this row. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | A description of this entry item. The description helps to describe the kinds of resources that can be found in the entry item. |
| `NUM_RESOURCES` | NUMERIC | NOT NULL | The number of resources that this entry item is expected to contain. |
| `REQUISITION_ID` | NUMERIC | NOT NULL | A reference to the requisition that this entry item is associated with. This refers to [[RSM_REQ_REQUISITIONS]].ID that is associated with this row. |
| `SEARCH_ID` | NUMERIC | NOT NULL | A reference to CMN_ATTRIBUTE_VALUE_SETS that points to the saved search criteria values for this entry item. This refers to CMN_ATTRIBUTE_VALUE_SETS.ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `REQUISITION_ID` | [[RSM_REQ_REQUISITIONS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[RSM_REQ_ITEM_RESOURCES]] | `REQ_ITEM_ID` | `ID` |

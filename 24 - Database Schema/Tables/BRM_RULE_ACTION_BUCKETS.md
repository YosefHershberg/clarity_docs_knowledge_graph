---
title: BRM_RULE_ACTION_BUCKETS
type: db-table
table: BRM_RULE_ACTION_BUCKETS
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# BRM_RULE_ACTION_BUCKETS

> [!info] Description
> This table contains metadata of action buckets. Each action will belong to a bucket and the bucket metadata will decide when to execute the action.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique ID of the aciton bucket. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the code of the aciton bucket. |
| `EXEC_ORDER` | NUMERIC | NOT NULL | The orider in which the aciton buckets will be executed. The buckets will be executed in the reverse order. |
| `PRE_CREATE` | NUMERIC | NOT NULL | This column stores the flag which, if true, will execute the actions in the bucket just before creating a resource, i.e., ODF object instance. |
| `POST_CREATE` | NUMERIC | NOT NULL | This column stores the flag which, if true, will execute the actions in the bucket immediately after creating a resource, i.e., ODF object instance. |
| `PRE_UPDATE` | NUMERIC | NOT NULL | This column stores the flag which, if true, will execute the actions in the bucket just before updating a resource, i.e., ODF object instance. |
| `POST_UPDATE` | NUMERIC | NOT NULL | This column stores the flag which, if true, will execute the actions in the bucket immediately after updating a resource, i.e., ODF object instance. |
| `PRE_DELETE` | NUMERIC | NOT NULL | This column stores the flag which, if true, will execute the actions in the bucket just before deleting a resource, i.e., ODF object instance. |
| `POST_DELETE` | NUMERIC | NOT NULL | This column stores the flag which, if true, will execute the actions in the bucket immediately after deleting a resource, i.e., ODF object instance. |
| `POST_CUD_TXN` | NUMERIC | NOT NULL | This column stores the flag which, if true, will execute the actions in the bucket immediately after creating, updating or deleting a resource, i.e., ODF object instance. These rules will participate in create, update or delete transaction. |
| `POST_RETRIEVE_GRID` | NUMERIC | NOT NULL | This column stores the flag which, if true, will execute the actions in the bucket immediately after retrieving resources for the grid page. |
| `POST_RETRIEVE_PROP` | NUMERIC | NOT NULL | This column stores the flag which, if true, will execute the actions in the bucket immediately after retrieving a resource for the properties page. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose. |

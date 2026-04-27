---
title: SNAPSHOT_VERSIONS
type: db-table
table: SNAPSHOT_VERSIONS
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# SNAPSHOT_VERSIONS

> [!info] Description
> This table contain rows that describe versions associated with a plan.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the version |
| `CODE` | NVARCHAR | NOT NULL | Version ID |
| `OBJECT_INSTANCE_ID` | NUMERIC | NOT NULL | Foreign key to relate with plan |
| `NAME` | NVARCHAR | NOT NULL | Version Name |
| `TYPE` | NVARCHAR | NOT NULL | Type of Version |
| `DESCRIPTION` | NVARCHAR | NULL | This column refers to description of version. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | This column stores the object code of the object which created the version. |

---
title: OKR_OBJECTIVES
type: db-table
table: OKR_OBJECTIVES
columns: 26
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# OKR_OBJECTIVES

> [!info] Description
> This table contains information about objective

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `NAME` | NVARCHAR | NOT NULL | Objective name |
| `DESCRIPTION` | NVARCHARMAX | NULL | Objective description |
| `OWNER` | NUMERIC | NULL | Objective Owner |
| `IS_ACTIVE` | NUMERIC | NOT NULL | Indicates if the objective is active or not |
| `SCHEDULE_START` | DATE | NULL | Objective Start Date |
| `SCHEDULE_TARGET` | DATE | NULL | Objective Target Date |
| `CONFIDENCE_SCORE` | FLOAT | NULL | Objective Confidence Score |
| `OBJECTIVE_STATE` | NVARCHAR | NULL | Objective State |
| `INTEGRATION_MAPPINGS` | NVARCHAR | NULL | Integration mappings |
| `RALLY_OBJECT_ID` | NVARCHAR | NULL | Object ID for Rally's Objective |
| `LAST_SYNC_MSG` | VARCHAR | NULL | Indicates the last sync from Rally with date/time information |
| `LAST_SYNC_STATUS` | NVARCHAR | NULL | Indicates the last sync from Rally was successful (or failed) |
| `SOURCE` | NVARCHAR | NULL | Source system |
| `RALLY_FORMAT_ID` | NVARCHAR | NULL | Rally Formatted ID |
| `TYPE` | NVARCHAR | NULL | Objective Hierarchy Level |
| `ODF_BLUEPRINT_ID` | NUMERIC | NULL | This column refers to the blueprint that objective belongs to |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `PARENT_ID` | NUMERIC | NULL | This column refers to id of the parent objective. |
| `ODF_TEMPLATE_ID` | NUMERIC | NULL | When an objective is created from a template this field is populated with the template's internal id. |
| `ODF_TEMPLATE` | NUMERIC | NOT NULL | This column indicates if the objective is marked as a template or not. Templates are used to create new objective and are restricted from some objective functionality. |
| `LAST_SYNC_DT` | DATE | NULL | Indicates the last sync date from Rally with date information |

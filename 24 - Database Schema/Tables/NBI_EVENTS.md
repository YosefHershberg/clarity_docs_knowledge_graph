---
title: NBI_EVENTS
type: db-table
table: NBI_EVENTS
columns: 6
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NBI_EVENTS

> [!info] Description
> This table is used by datamart for tracking the updates when time slicing to the PRJ_BLB_SLICES table.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `PRJ_OBJECT_ID` | NUMERIC | NOT NULL | The ID of the timeslicing object that generated the event. |
| `PRJ_OBJECT_TYPE` | NVARCHAR | NULL | The timeslicing object that generated the event. Possible values include: - TEAM - ASSIGNMENT - PROJECT |
| `STATUS` | NVARCHAR | NULL | The status of the event. Possible values include: - NOT_PROCESSED - PROCESSING - Null (or empty value). An empty value indicates that the event is already processed. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |

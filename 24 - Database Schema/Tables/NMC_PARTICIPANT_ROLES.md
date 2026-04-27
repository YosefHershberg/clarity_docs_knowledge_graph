---
title: NMC_PARTICIPANT_ROLES
type: db-table
table: NMC_PARTICIPANT_ROLES
columns: 7
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_PARTICIPANT_ROLES

> [!info] Description
> This table contains various roles that particiate in collaboration.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column uniquely identifies the participant role. |
| `CODE` | NVARCHAR | NOT NULL | This column stores the code of the participant role. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | This column stores the object code to which the participants belong to. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |

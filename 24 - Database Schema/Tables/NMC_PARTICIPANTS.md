---
title: NMC_PARTICIPANTS
type: db-table
table: NMC_PARTICIPANTS
columns: 10
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_PARTICIPANTS

> [!info] Description
> This table contain rows that describe participants.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the participant entry. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the participant entry. |
| `USER_ID` | NUMERIC | NOT NULL | Internal Id of the user who is the participant. |
| `ROLE` | NVARCHAR | NOT NULL | Role of the participant. |
| `OBJECT_INSTANCE_ID` | NUMERIC | NOT NULL | This column refers to the internal id of the instance participants are added to. |
| `OBJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the object context participants belongs to. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the participant entry was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the participant entry. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the participant entry was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the participant entry. |

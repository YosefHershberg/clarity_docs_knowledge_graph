---
title: NMC_SECTIONS
type: db-table
table: NMC_SECTIONS
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_SECTIONS

> [!info] Description
> This table contain rows that describe sections.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal ID of the section. |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name of the section. |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code of the section. |
| `PARENT_PK` | NUMERIC | NULL | This column refers to the parent internal ID of the section. |
| `PARENT_CODE` | NVARCHAR | NULL | This column refers to the parent code of the section. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date the section was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that created the section. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date the section was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated the section. |

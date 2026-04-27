---
title: RPT_PROGRAM_HIERARCHY
type: db-table
table: RPT_PROGRAM_HIERARCHY
columns: 4
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RPT_PROGRAM_HIERARCHY

> [!info] Description
> This rollup table is used to group program content.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PROGRAM_ID` | NUMERIC | NULL | This column refers to the program identifier. |
| `PROJECT_ID` | NUMERIC | NULL | This column refers to the investment identifier of the portfolio member. |
| `IS_PROGRAM` | INTEGER | NULL | This column indicates whether the ID stored in the PROGRAM_ID is a program. Values: - 0 = No - 1 = Yes |
| `THE_LEVEL` | INTEGER | NULL | This column is used by the Update Business Objects Report Table job to recursively go down the list of programs and ensure that all projects are attached to each program. For example, if Program B is linked to Program A, and Program B has Project Z, the job ensures that Project Z is part of Program A. |

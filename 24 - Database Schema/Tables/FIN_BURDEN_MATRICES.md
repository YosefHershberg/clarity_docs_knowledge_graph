---
title: FIN_BURDEN_MATRICES
type: db-table
table: FIN_BURDEN_MATRICES
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# FIN_BURDEN_MATRICES

> [!info] Description
> This table stores burdening matrix general information.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `NAME` | NVARCHAR | NOT NULL | The name of burdening matrix. This is used as a label for the matrix. |
| `MATRIX_CODE` | NVARCHAR | NOT NULL | unique code for the matrix representing the record. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | Detailed description about the burdening matrix representing the record. |
| `CURRENCY_CODE` | NVARCHAR | NOT NULL | Currency code represents matrix currency. |
| `CREATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that created the record. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Audit field indicating the date the record was last modified. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Audit field indicating the user ID of the user that last modified the record. |

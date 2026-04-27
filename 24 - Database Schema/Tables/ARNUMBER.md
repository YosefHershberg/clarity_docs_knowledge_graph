---
title: ARNUMBER
type: db-table
table: ARNUMBER
columns: 4
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# ARNUMBER

> [!info] Description
> This table stores the auto-numbering information for invoice and credit memo numbers.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `NEXT_INV_DOC` | NUMERIC | NOT NULL | This column indicates the numeric number for the next invoice. |
| `INV_DOC_MASK` | NVARCHAR | NOT NULL | This column refers to the prefix for the invoice number. |
| `NEXT_CM_DOC` | NUMERIC | NOT NULL | This column refers to the numeric number for the next credit memo. |
| `CM_DOC_MASK` | NVARCHAR | NOT NULL |  |

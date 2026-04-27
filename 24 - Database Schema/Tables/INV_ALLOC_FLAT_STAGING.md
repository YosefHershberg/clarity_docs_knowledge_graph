---
title: INV_ALLOC_FLAT_STAGING
type: db-table
table: INV_ALLOC_FLAT_STAGING
columns: 11
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INV_ALLOC_FLAT_STAGING

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `SEL_ID` | NUMERIC | NOT NULL |  |
| `FROM_INV_ID` | NUMERIC | NOT NULL |  |
| `TO_INV_ID` | NUMERIC | NOT NULL |  |
| `STATUS_CODE` | NVARCHAR | NOT NULL |  |
| `PERCENTAGE` | NUMERIC | NOT NULL |  |
| `ROOT_PERCENTAGE` | NUMERIC | NOT NULL |  |
| `FILTERED_PERCENTAGE` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

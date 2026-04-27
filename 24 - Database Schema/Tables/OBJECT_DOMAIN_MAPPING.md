---
title: OBJECT_DOMAIN_MAPPING
type: db-table
table: OBJECT_DOMAIN_MAPPING
columns: 8
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# OBJECT_DOMAIN_MAPPING

> [!info] Description
> This table stores the mapping between ODF object and the Jaspersoft Domains

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column is the ID/Unique column for this table |
| `OBJECT_CODE` | NVARCHAR | NULL | This column refers to the ODF object code |
| `DOMAIN_CODE` | NVARCHAR | NULL | This column refers to the Jaspersoft Domain code |
| `CONCRETE_OBJ_CODE` | NVARCHAR | NULL | This column refers to the concrete object code for abstract objects |
| `DISPLAYSET_ID` | NVARCHAR | NULL | This column refers to the display set ID under which the object attributes should be added in the corresponding domain |
| `INTERNAL_OBJECT_CODE` | NVARCHAR | NULL | This column refers to the display name under which the object lookup attributes should be added in the corresponding domain |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date when the table was last updated |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the table |

---
title: RDM_ITEM_ATTR_ASSOCIATIONS
type: db-table
table: RDM_ITEM_ATTR_ASSOCIATIONS
columns: 6
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# RDM_ITEM_ATTR_ASSOCIATIONS

> [!info] Description
> This table stores mappings from roadmap item attributes to investment

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `MAPPING_ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `ROADMAP_ITEM_ATTR_CODE` | NVARCHAR | NOT NULL | Attribute code from Roadmap item |
| `INV_ATTR_CODE` | NVARCHAR | NULL | Mapped Attribute code from Investments |
| `TSV_ATTR_CODE` | NVARCHAR | NULL | TSV representation of the investment Attribute if exists |
| `CATEGORY` | NVARCHAR | NULL | Investment attributes grouped and named as Category |
| `IS_PROCESSING_REQUIRED` | INTEGER | NOT NULL | Is any pre-processing required or direct copy |

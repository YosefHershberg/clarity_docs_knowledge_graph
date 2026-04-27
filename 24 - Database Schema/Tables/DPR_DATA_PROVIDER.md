---
title: DPR_DATA_PROVIDER
type: db-table
table: DPR_DATA_PROVIDER
columns: 18
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# DPR_DATA_PROVIDER

> [!info] Description
> This table stores data provider information.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `CODE` | NVARCHAR | NULL | Unique code for the data provider. |
| `NAME` | NVARCHAR | NULL | This column refers to the Name of the data provider |
| `DESCRIPTION` | NVARCHAR | NULL | This column refers to the description message for the data provider |
| `IS_SECURE` | INTEGER | NOT NULL | This column refers to Data Provider security aspect. |
| `STATUS` | NVARCHAR | NOT NULL | This column refers to Data Provider mode |
| `TARGET` | NUMERIC | NULL | This column refers to Data Provider target id |
| `METADATA` | NVARCHARMAX | NOT NULL | This column refers to the data provider meta-data |
| `CREATED_DATE` | DATE | NOT NULL | Audit Column - Id of the user who created this record. |
| `CREATED_BY` | NUMERIC | NOT NULL | Audit Column - Date when this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Audit Column - User Id of the user who updated this record. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | Audit Column - Date when this record was last updated. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | This column refers the boolean value for active or non-active data provider instances |
| `IS_SYSTEM` | NUMERIC | NOT NULL | This column indicates whether the data provider is a system defined or not. |
| `PUBLISHED_DATE` | DATE | NULL | Audit Column - Id of the user who published this record. |
| `PUBLISHED_BY` | NUMERIC | NULL | Audit Column - Date when this record was published. |
| `INCLUDE_QUERY` | NUMERIC | NOT NULL | Flag for displaying Queries tab in Data Provider |
| `SOURCE_ID` | NUMERIC | NULL | Stores the ID of the source data provider from which this data provider was copied. |

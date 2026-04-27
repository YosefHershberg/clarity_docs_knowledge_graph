---
title: CMS_CONTENT_TYPES
type: db-table
table: CMS_CONTENT_TYPES
columns: 6
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# CMS_CONTENT_TYPES

> [!info] Description
> This table contains the content types that CA Clarity PPM supports.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TYPE` | NVARCHAR | NOT NULL | This column refers to the content type for a content add-in. Values: PAGE, TAB, PORTLET, QUERY, RESOURCE, ROLE, LOOKUP, PROCESS, ODF_OBJECT, ATTRIBUTE, USER, GROUP, RIGHT, PROJECT, JOBDEFINITION, CATEGORY, VIEW. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | The table name to be queried for the specific content type. |
| `NAME_COLUMN` | NVARCHAR | NOT NULL | The column name for the content item name to be queried for the specific content type. |
| `CODE_COLUMN` | NVARCHAR | NOT NULL | The column name for the content item code to be queried for the specific content type. |
| `DESCRIPTION_COLUMN` | NVARCHAR | NOT NULL | The column name for the content item description to be queried for the specific content type. |
| `I18N_SUPPORTED` | INTEGER | NOT NULL | This column indicates whether localization is supported. Values: 0=No i18N support, 1=i18N support. |

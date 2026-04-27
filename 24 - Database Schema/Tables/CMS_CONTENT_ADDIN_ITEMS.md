---
title: CMS_CONTENT_ADDIN_ITEMS
type: db-table
table: CMS_CONTENT_ADDIN_ITEMS
columns: 15
audience: dev
domain: development
canonical: true
erds:
  - Content Add-ins
tags:
  - dev
  - schema
  - table
  - erd/content-add-ins
---

# CMS_CONTENT_ADDIN_ITEMS

> [!info] Description
> This table contains the list of content items that are installed as part of an add-in or a content package. This table has a relationship with the CMS_CONTENT_ADDINS table.

## Subject areas (ERDs)
- [[_MOC - Content Add-ins ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique identifier for the content add-in item. |
| `CODE` | NVARCHAR | NOT NULL | The code for the content add-in item. Example: Page code if the add-in item is of type Page. |
| `TYPE` | NVARCHAR | NOT NULL | The type of the content add-in item. Values: Attribute, Object, Page, Portlet, Query, Link, Action Item, Lookup, View, TAB, ROLE, RESOURCE, USER, PROCESS, MENU, PROJECT, GROUP, OBS, RIGHT, JOBDEFINITION, CATEGORY. |
| `PARENT_ITEM_ID` | NUMERIC | NULL | Unique identifier of the parent item. Values: - Less than1=Standalone with no parent. - Greater than or equal to 1=Child item of the parent item ID. |
| `CONTENT_ADDIN_ID` | NUMERIC | NOT NULL | The content add-in internal ID. This ID is the reference to the add-in to which the item belongs. |
| `STATUS` | NVARCHAR | NOT NULL | The status of the content add-in item. Values: NOT_INSTALLED, INSTALLED, UPGRADE_READY. |
| `DATA` | NVARCHARMAX | NULL | The input XML of the content item is stored in this column. This data is created by the system and is used to import the item definitions when the item is installed. |
| `LEGACY_ITEM_NAME` | NVARCHAR | NULL | The name value for legacy add-in items. This column is used internally to support localization for the legacy item name field. |
| `LEGACY_ITEM_DESCRIPTION` | NVARCHAR | NULL | The description value for legacy add-in items. This column is used internally to support localization for the legacy item description field. |
| `FILENAME` | NVARCHAR | NULL | The file name for the content add-in item. |
| `IS_SUPPLEMENT` | INTEGER | NOT NULL | Identifies whether an item is a primary item or a supplementary item. Supplementary items are used internally during the installation of a primary item. These items help resolve cyclic dependencies between items. Values: 0=Primary item, 1=Supplementary item. |
| `CREATED_DATE` | DATE | NOT NULL | The date the content add-in item was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | The user who created the content add-in item. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date of the last update to the content add-in item. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The user who last updated the content add-in item. |

## Related tables (same subject area)

[[CMS_CONTENT_ADDINS]]

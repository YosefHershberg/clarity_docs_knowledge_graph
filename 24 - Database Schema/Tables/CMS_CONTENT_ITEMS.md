---
title: CMS_CONTENT_ITEMS
type: db-table
table: CMS_CONTENT_ITEMS
columns: 17
audience: dev
domain: development
canonical: true
erds:
  - Content Packages
tags:
  - dev
  - schema
  - table
  - erd/content-packages
---

# CMS_CONTENT_ITEMS

> [!info] Description
> This table contains the list of content items that are selected for a specific content package. This table has a relationship with the CMS_CONTENT_PACKAGES table.

## Subject areas (ERDs)
- [[_MOC - Content Packages ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The content item ID. |
| `ITEMPK_ID` | NUMERIC | NOT NULL |  |
| `TYPE` | NVARCHAR | NOT NULL | The content type of the item. Values: PAGE, TAB, PORTLET, QUERY, RESOURCE, ROLE, LOOKUP, PROCESS, ODF_OBJECT, ATTRIBUTE, USER, GROUP, RIGHT, PROJECT, JOBDEFINITION, CATEGORY, VIEW. |
| `UNIQUECODE` | NVARCHAR | NULL | A unique identifier for the content item added by the system. The identifier is used to handle the View content type. |
| `PARENT_ITEM_ID` | NUMERIC | NULL | The ID of the parent item for the content item. Values: - Less than1=Standalone with no parent. - Greater than or equal to 1=Child item of the parent item ID. |
| `PACKAGE_ID` | NUMERIC | NOT NULL | The unique identifier for the content package that contains the content item. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | The name of the table that contains the selected content item. |
| `IS_CONFIGURABLE` | INTEGER | NOT NULL | Indicates if the content item is configurable. Values: 0=Not configurable, 1=Configurable. |
| `IS_INCLUDED` | NUMERIC | NULL | Indicates whether the item is included in the package. The item definition can be altered from the Content Package Details Hierarchy List page by including or excluding child items of the parent. The inclusion or exclusion depends on whether the child is configurable regarding this issue. Values: 1=Included, 0=Excluded. |
| `ACTIVE` | NUMERIC | NOT NULL | Indicates whether the content item is active. Values: 0=Inactive, 1=Active |
| `MODIFIED` | NUMERIC | NOT NULL | Indicates whether the content item was modified. Values: 0=Nonmodified, 1=Modified. |
| `IS_NEW` | NUMERIC | NOT NULL | Indicates whether the content item is new. |
| `REVISION` | NUMERIC | NULL | A revision number if the content item has been revised. |
| `CREATED_DATE` | DATE | NOT NULL | The date the content item was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | The name of the the user who created the content item. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date when the content item was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The user who last updated the content item. |

## Related tables (same subject area)

[[CMS_CONTENT_PACKAGES]]

---
title: CMS_CONTENT_PACKAGES
type: db-table
table: CMS_CONTENT_PACKAGES
columns: 13
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

# CMS_CONTENT_PACKAGES

> [!info] Description
> This table contains information about content packages developed by content developers.

## Subject areas (ERDs)
- [[_MOC - Content Packages ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | The unique identifier for the content package. |
| `PACKAGE_CODE` | NVARCHAR | NOT NULL | The content package unique code that is defined by the content developer. |
| `PACKAGE_NAME` | NVARCHAR | NOT NULL | The name of the content package. |
| `PACKAGE_DESC` | NVARCHAR | NULL | The description of the content package. |
| `PACKAGE_BUILDS` | NVARCHAR | NULL | The path used to build the content package. |
| `NLS_EXTRACTED` | NVARCHAR | NULL | The content package NLS English strings are extracted by the sysem, and the output .jar file contents are stored in this column. |
| `NLS_UPLOADED` | NVARCHAR | NULL | The content NLS All Languages .jar file that is uploaded by the user. |
| `UPLOADED_FILE` | NUMERIC | NULL | The contents of the content package .jar file. |
| `VERSION` | NVARCHAR | NOT NULL | The version number for the content package. |
| `OWNER` | NVARCHAR | NOT NULL | The name of the user who is responsible for the content package. |
| `OWNER_EMAIL` | NVARCHAR | NOT NULL | The email address of the owner. |
| `STATUS` | NVARCHAR | NOT NULL | The content package status. Vaues: Approved, in Development, In Review, Ready to Package, Rejected. |
| `CONTACT_NUMBER` | NVARCHAR | NULL | The telephone number of the content package owner. |

## Related tables (same subject area)

[[CMS_CONTENT_ITEMS]]

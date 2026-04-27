---
title: GEN_ARTIFACTS_METADATA
type: db-table
table: GEN_ARTIFACTS_METADATA
columns: 14
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# GEN_ARTIFACTS_METADATA

> [!info] Description
> This table contains the meta data related to AI Agent artifact.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name for the Artifact MetaData |
| `GEN_ATTR_CONFIG_ID` | NUMERIC | NULL | This column refers to the reference to the internal identifier for the AI Agent |
| `ARTIFACT_TYPE` | NVARCHAR | NOT NULL | This column refers to the type of the artifact |
| `ARTIFACT_ID` | NVARCHAR | NOT NULL | This column refers to the internal id of the attachment |
| `EXT_ARTIFACT_REF` | NVARCHAR | NULL | This column refers to the URL or Id of the uploaded Artifact |
| `EXPIRATION_TIME` | DATE | NULL | This column refers to the expiry time of the uploaded artifact |
| `ARTIFACT_SIZE` | NUMERIC | NULL | This column refers to the Size of the Document |
| `MIME_TYPE` | NVARCHAR | NOT NULL | This column refers to the mime type of the Document |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |

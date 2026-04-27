---
title: GEN_AI_MODELS
type: db-table
table: GEN_AI_MODELS
columns: 18
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# GEN_AI_MODELS

> [!info] Description
> This table contains the AI models information related to auto content generation.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal identifier for the row. |
| `CODE` | NVARCHAR | NOT NULL | Unique code for the model. |
| `NAME` | NVARCHAR | NOT NULL | Name of the model. |
| `VENDOR_CODE` | NVARCHAR | NOT NULL | Vendor that owns the model. |
| `PARAMETERS` | NVARCHARMAX | NULL | Model specific parameters used as input in the payload. |
| `INTEGRATION_ID` | NUMERIC | NULL | Integration instance for this model. |
| `INTEGRATION_CONFIG` | NVARCHARMAX | NULL | Placeholder to persist the integration related parameters. |
| `IS_DEFAULT` | INTEGER | NOT NULL | If this is the default model to generate the contents. |
| `IS_HIDDEN` | INTEGER | NOT NULL | If this is the hidden and used for internal purpose only. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose. |
| `MAX_TOKENS` | NUMERIC | NULL | Max Tokens for the model. |
| `TEMPERATURE` | NUMERIC | NULL | Temperature for the model. |
| `FILE_EXTENSIONS` | NVARCHAR | NULL | Supported File Extensions is sub set of clarity configured Authorized File Extensions. |
| `FILE_UPLOAD_URL` | NVARCHAR | NULL | File Upload URL for the model. |
| `FILE_UPLOAD_MAX_SIZE` | NUMERIC | NULL | Maximum Document upload Size to LLM. |

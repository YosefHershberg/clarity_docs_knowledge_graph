---
title: GEN_CONTENTS_LOGS
type: db-table
table: GEN_CONTENTS_LOGS
columns: 13
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# GEN_CONTENTS_LOGS

> [!info] Description
> This table stores logs for Gen AI content generation requests and responses.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal identifier for the row. |
| `STATUS_CODE` | NUMERIC | NOT NULL | Http response status code. |
| `METADATA` | NVARCHARMAX | NULL | The Meta data included in the response. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose. |
| `GEN_HISTORY_ID` | NUMERIC | NULL | This column stores the history instance id. |
| `PROMPT_TOKEN_COUNT` | NUMERIC | NULL | This column stores number of tokens in the gen api prompt. |
| `RESPONSE_TOKEN_COUNT` | NUMERIC | NULL | This column stores number of tokens in the gen api response. |
| `PROJECT` | NVARCHAR | NULL | The project associated with the Gen AI request. |
| `MODEL` | NVARCHAR | NULL | The AI model used for the request. |
| `INTEGRATION_URL` | NVARCHAR | NULL | The integration URL used for the Gen AI request. |

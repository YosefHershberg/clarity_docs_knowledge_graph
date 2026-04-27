---
title: GEN_ARTIFACTS_CONFIG
type: db-table
table: GEN_ARTIFACTS_CONFIG
columns: 16
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# GEN_ARTIFACTS_CONFIG

> [!info] Description
> This table stores configuration information for various Gen AI actions.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the internal identifier for the row |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the identifier for the row |
| `GEN_ATTR_CONFIG_ID` | NUMERIC | NULL | This column refers to the reference to the internal identifier for the attribute configuration |
| `ARTIFACT` | NVARCHAR | NULL | This column stores the artifact associated with an artifact. |
| `TYPE` | NVARCHAR | NOT NULL | Type of the artifact ATTRIBUTE OR SUBOBJECT |
| `CLASSIFIER` | NVARCHAR | NULL | Classifier will identify the variation if required. |
| `INCLUDED` | INTEGER | NOT NULL | If this specific artifact is included as part of the input to generate the contents. |
| `CREATED_DATE` | DATE | NOT NULL | This column stores created date for audit purpose |
| `CREATED_BY` | NUMERIC | NOT NULL | This column stores the created by user for audit purpose |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column stores the last updated date for audit purpose |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column stores the last updated by user for audit purpose |
| `POSITION` | NUMERIC | NULL | This column stores position of placeholder artifacts for a gen ai configuration |
| `SOURCE` | NVARCHAR | NULL | This column stores the source associated with an artifact. Possible values are System and user. |
| `RELATED_TO` | NVARCHAR | NULL | This column stores whether the artifact is related to Instance or Config |
| `ACTION_MODE` | NVARCHAR | NULL | This column stores ai action mode |
| `LOOKUP_TYPE` | NVARCHAR | NULL | This column stores the type of the lookup if artifact type is lookup. |

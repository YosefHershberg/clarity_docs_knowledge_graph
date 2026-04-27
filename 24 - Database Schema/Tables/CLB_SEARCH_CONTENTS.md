---
title: CLB_SEARCH_CONTENTS
type: db-table
table: CLB_SEARCH_CONTENTS
columns: 18
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# CLB_SEARCH_CONTENTS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |
| `OBJECT_TYPE_ID` | NUMERIC | NOT NULL |  |
| `FEATURE` | NVARCHAR | NOT NULL |  |
| `FEATURE_TYPE` | NVARCHAR | NULL |  |
| `OBJECT_ID` | NUMERIC | NOT NULL |  |
| `NAME` | NVARCHAR | NOT NULL |  |
| `SEARCH_TEXT` | NVARCHARMAX | NULL |  |
| `OWNER_ID` | NUMERIC | NOT NULL |  |
| `PROJECT_ID` | NUMERIC | NULL |  |
| `SEC_OBJECT_TYPE_ID` | NUMERIC | NOT NULL |  |
| `SEC_OBJECT_ID` | NUMERIC | NOT NULL |  |
| `LANGUAGE` | NVARCHAR | NULL |  |
| `CONTENT_CREATED_DATE` | DATE | NULL |  |
| `CONTENT_LAST_UPDATED_DATE` | DATE | NULL |  |

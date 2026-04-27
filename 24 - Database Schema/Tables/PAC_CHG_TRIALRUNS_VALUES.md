---
title: PAC_CHG_TRIALRUNS_VALUES
type: db-table
table: PAC_CHG_TRIALRUNS_VALUES
columns: 9
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_TRIALRUNS_VALUES

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `TRIALRUN_ID` | NUMERIC | NOT NULL |  |
| `CURRENCY_TYPE` | NVARCHAR | NULL |  |
| `CURRENCY_CODE` | NVARCHAR | NULL |  |
| `AMOUNT` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

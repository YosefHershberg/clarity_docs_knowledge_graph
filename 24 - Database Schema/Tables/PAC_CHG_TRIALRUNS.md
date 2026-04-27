---
title: PAC_CHG_TRIALRUNS
type: db-table
table: PAC_CHG_TRIALRUNS
columns: 15
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# PAC_CHG_TRIALRUNS

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `SESSIONID` | NUMERIC | NOT NULL |  |
| `CHARGEBACK_TYPE` | CHAR | NOT NULL |  |
| `SOURCE_ID` | NUMERIC | NULL |  |
| `DATES_ID` | NUMERIC | NULL |  |
| `TRANS_SOURCE` | CHAR | NOT NULL |  |
| `TRANSNO` | NUMERIC | NOT NULL |  |
| `ENTITY_ID` | NUMERIC | NOT NULL |  |
| `ACCOUNT_CODE_ID` | NUMERIC | NOT NULL |  |
| `QUANTITY` | NUMERIC | NOT NULL |  |
| `ERROR_CODE` | NUMERIC | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL |  |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL |  |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

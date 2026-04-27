---
title: INT_FRICTIONLESS_ACCT_MAPS
type: db-table
table: INT_FRICTIONLESS_ACCT_MAPS
columns: 13
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# INT_FRICTIONLESS_ACCT_MAPS

> [!info] Description
> This table stores Integration Mapping details between two systems.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the Integration Mapping. |
| `NAME` | NVARCHAR | NOT NULL | Name of the Integration Mapping. |
| `INTEGRATION` | NVARCHAR | NOT NULL | The Integration Target Instance. |
| `IS_ACTIVE` | INTEGER | NOT NULL | A flag to disable/enable the record |
| `CAPITAL_ACTUAL_INVESTMENT` | NVARCHAR | NULL | Investment level at which an organization captures actuals for time entry and transactions |
| `CAP_ACTUAL_PORTFOLIO_ITEM` | NVARCHAR | NULL | Represents the lowest level Portfolio Item from the target Rally system |
| `CAPITAL_APPROVAL_INVESTMENT` | NVARCHAR | NULL | Investment level at which an organization authorizes capital expenditures |
| `CAP_APPROVAL_PORTFOLIO_ITEM` | NVARCHAR | NULL | Represents the configured Portfolio Item levels from the target Rally system |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |

---
title: INV_IDEAS
type: db-table
table: INV_IDEAS
columns: 21
audience: dev
domain: development
canonical: true
erds:
  - Ideas
fk_targets:
  - CMN_SEC_USERS
  - INV_INVESTMENTS
tags:
  - dev
  - schema
  - table
  - erd/ideas
---

# INV_IDEAS

> [!info] Description
> This table stores idea-specific data for an idea investment.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 01 - Investments and Projects]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Ideas ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. This value matches the value in [[INV_INVESTMENTS]].ID. |
| `PRIORITY` | NUMERIC | NULL | This column refers to the proposed priority of the idea, taken from the IDEAS_PRIORITY lookup. Values are: - 1 = LOW - 2 = MEDIUM - 3 = HIGH |
| `EST_TYPE` | NUMERIC | NULL | The type of estimate taken from the IDEAS_EST_TYPE lookup. Values are: - 1 = HIGH_LEVEL - 2 = ANALYTICAL - 3 = COMMITMENT - 4 = HISTORICAL |
| `EST_COST` | NUMERIC | NULL | The estimated cost for implementing this idea. |
| `EST_BENEFIT` | NUMERIC | NULL | The estimated monetary benefit for implementing this idea. |
| `EST_START_DATE` | DATE | NULL | The proposed beginning of the period during which the costs and benefits will be realized. |
| `EST_FINISH_DATE` | DATE | NULL | The proposed end of the period during which the costs and benefits will be realized. |
| `BENEFIT_DESC` | NVARCHAR | NULL | A textual description of the benefits of implementing this idea. |
| `GENERAL_NOTES` | NVARCHAR | NULL | General notes about this idea, which may include instructions to the idea owner if the idea was marked incomplete. |
| `BUS_UNIT` | NVARCHAR | NULL | A brief textual description of the business unit relevant to this idea. |
| `BREAKEVEN_DATE` | DATE | NULL | The anticipated date on which the cumulative benefits surpass the cumulative costs. |
| `IMPACT` | NVARCHAR | NULL | A textual description of the impact to the organization for implementing this idea. |
| `RISKS` | NVARCHAR | NULL | A textual description of the dependencies associated with implementing this idea. |
| `DEPENDENCIES` | NVARCHAR | NULL | A textual description of the dependencies associated with implementing this idea. |
| `CONVERSION_DATE` | DATE | NULL | The date when this idea was converted into another type of investment object, or blank if it was never converted. |
| `TARGET_MANAGER_ID` | NUMERIC | NULL | The resource ([[CMN_SEC_USERS]].ID) that is intended to become the manager of the investment when the idea is converted to a project or other investment type. |
| `INITIATOR_ID` | NUMERIC | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last modified this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ID` | [[INV_INVESTMENTS]].`ID` | |
| `TARGET_MANAGER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[CMN_SEC_USERS]], [[FIN_FINANCIALS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRJ_EV_HISTORY]], [[PRTASK]], [[PRTEAM]]

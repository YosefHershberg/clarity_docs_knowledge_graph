---
title: INV_SERVICES
type: db-table
table: INV_SERVICES
columns: 6
audience: dev
domain: development
canonical: true
erds:
  - Services
fk_targets:
  - CMN_SEC_USERS
  - INV_APPLICATIONS
tags:
  - dev
  - schema
  - table
  - erd/services
---

# INV_SERVICES

> [!info] Description
> This table extends from inv_investments table and stores service-specific information.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 01 - Investments and Projects]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Services ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `APPLICATION_ID` | NUMERIC | NULL | The foreign key of the main application ([[INV_APPLICATIONS]].ID) that the service is providing. Browsing of applications in the system is secured by view applications right. This is also used for calculating the utilization numbers on the service offered. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `APPLICATION_ID` | [[INV_APPLICATIONS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRTASK]], [[PRTEAM]]

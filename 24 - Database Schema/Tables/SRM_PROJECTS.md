---
title: SRM_PROJECTS
type: db-table-stub
table: SRM_PROJECTS
audience: dev
domain: development
canonical: false
erds:
  - Datamart
  - Document Manager
  - Financial Configuration
  - ITIL
  - Links and Notes
tags:
  - dev
  - schema
  - table
  - stub
  - erd/datamart
  - erd/document-manager
  - erd/financial-configuration
  - erd/itil
  - erd/links-and-notes
---

# SRM_PROJECTS

> [!warning] Off-screen / Referenced-only table
> This table is referenced by ERDs or the curated KB but is not present in the 16.4.1 schema dump. Column-level details should be looked up in the live database (`information_schema.columns`).

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 01 - Investments and Projects]] for the architectural narrative, gotchas, and idiomatic SQL involving this table.

## Subject areas (ERDs)
- [[_MOC - Datamart ERD]]
- [[_MOC - Document Manager ERD]]
- [[_MOC - Financial Configuration ERD]]
- [[_MOC - ITIL ERD]]
- [[_MOC - Links and Notes ERD]]

## Referenced by (from this dump)

| From table | From column | Target column |
| --- | --- | --- |
| [[CAP_SCENARIO_MEMBERS]] | `OBJECT_ID` | `ID` |
| [[FIN_ERRORS]] | `OBJECT_ID` | `ID` |
| [[FIN_OBJECT_PROPERTIES]] | `OBJECT_ID` | `ID` |
| [[FIN_OBJECT_PROPERTIES]] | `OBJECT_TYPE_CODE` | `INVESTMENT_CODE` |
| [[FIN_POSTED_TXNS]] | `INV_OBJECT_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `INV_TYPE_CODE` | `INVESTMENT_CODE` |
| [[IMM_OBJECT_CATEGORIES]] | `OBJECT_TYPE` | `INVESTMENT_CODE` |
| [[IMM_OBJECT_CATEGORIES]] | `OBJECT_ID` | `ID` |
| [[IMP_TRANSACTIONIMPORT]] | `PROJECT_CODE` | `ID` |
| [[ITL_OBJECT_ASSOCIATIONS]] | `PK_ID` | `ID` |
| [[NBI_PRJ_MATRIX_DATES]] | `PROJECT_ID` | `ID` |
| [[NBI_PROJECT_CURRENT_FACTS]] | `PROJECT_ID` | `ID` |
| [[NBI_PROJECT_FORECAST]] | `PROJECT_ID` | `ID` |
| [[OLB_BILLINGCHECKOUT]] | `PROJECT_ID` | `ID` |
| [[PMA_SCENARIO_CONSTRAINTS]] | `OBJECT_ID` | `ID` |
| [[PRJ_PROJECT_DEPENDS]] | `PRINCIPAL_ID` | `ID` |
| [[PRJ_PROJECT_DEPENDS]] | `DEPENDENT_ID` | `ID` |
| [[PRJ_REQ_AUDIT]] | `REQ_PROJECT_ID` | `ID` |
| [[PRTASK]] | `PRPROJECTID` | `ID` |
| [[PRTEAM]] | `PRPROJECTID` | `ID` |

---
title: PRTYPECODE
type: db-table
table: PRTYPECODE
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
  - Financial Planning
  - Resources
  - Transactions
fk_sources:
  - CBK_GL_ALLOCATION
  - DWH_TMP_FIN_TRANSACTION
  - PPA_TRANSCONTROL
  - PPA_WIP
  - PRCHARGECODE
  - PRJ_RESOURCES
  - PRTIMEENTRY
  - PRTIMESHEET
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
  - erd/financial-planning
  - erd/resources
  - erd/transactions
---

# PRTYPECODE

> [!info] Description
> This table stores the names of type codes.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 03 - Resources Roles and Calendars]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]
- [[_MOC - Financial Planning ERD]]
- [[_MOC - Resources ERD]]
- [[_MOC - Transactions ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID cannot be confused with a resource in Repository B that has the same prName, prExternalID, and prID. Note: This value is no longer universally unique, but may be required by client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | A persistent, unique identifier for each row in a table. System-entered when you create a new row. It is referenced by other tables using columns to refer to a specific row (for example, PRRESOURCE.PRTYPECODEID refers to [[PRTYPECODE]].PRID). |
| `PREXTERNALID` | NVARCHAR | NULL | A user-entered, descriptive column internally forced to be unique and used to identify the type code. |
| `PRNAME` | NVARCHAR | NULL | The name of the type code. |
| `PRISOPEN` | NUMERIC | NOT NULL | Indicates whether a type code can be used. Values are: - 0 = Not Used - 1, -1 = Used |
| `PRMODBY` | NVARCHAR | NULL | System-entered. The name of the logged-in user when that user modifies a row, such as when a user modifies a timesheet or note. |
| `PRMODTIME` | DATE | NULL | System-entered when a user modifies a row. It is the date and time the last modification occurred. |
| `IS_CHARGEABLE` | INTEGER | NOT NULL |  |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_ALLOCATION]] | `PRTYPECODE_ID` | `PREXTERNALID` |
| [[DWH_TMP_FIN_TRANSACTION]] | `INPUT_TYPE` | `PREXTERNALID` |
| [[PPA_TRANSCONTROL]] | `INPUT_TYPE` | `PREXTERNALID` |
| [[PPA_WIP]] | `INPUT_TYPE` | `PREXTERNALID` |
| [[PRCHARGECODE]] | `PRID` | `PRID` |
| [[PRJ_RESOURCES]] | `PRTYPECODEID` | `PRID` |
| [[PRTIMEENTRY]] | `PRID` | `PRID` |
| [[PRTIMEENTRY]] | `PRTYPECODEID` | `PRID` |
| [[PRTIMESHEET]] | `PRID` | `PRID` |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[FIN_POSTED_TXNS]], [[FIN_POSTED_TXN_VALUES]], [[FIN_TXNS]], [[IMP_TRANSACTIONIMPORTERRORS]], [[IMP_TRANSACTIONIMPORT]], [[INV_INVESTMENTS]], [[INV_PROJECTS]], [[LOCATIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_IMP_ACTUALS_EXPORT]], [[PAC_IMP_TRANSIMPORT_HEADER]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_POSTINGBATCH]], [[PPA_TRANSCONTROLAPINFO]], [[PPA_TRANSCONTROL]], [[PPA_TRANSCONTROL_VALUES]], [[PPA_TRANSWIPADJUST]], [[PPA_TRANSWIPADJUST_VALUES]], [[PPA_WIPAPINFO]], [[PPA_WIP]], [[PPA_WIP_VALUES]], [[PRASSIGNMENT]], [[PRCALENDAR]], [[PRCHARGECODE]], [[PRJ_RESOURCES]], [[PRJ_ROLES_FLAT]], [[PRTASK]], [[PRTEAM]], [[PRTIMEENTRY]], [[PRTIMEPERIOD]], [[PRTIMESHEET]], [[RSM_REQ_REQUISITIONS]], [[RSM_REQ_RESOURCES]], [[RSM_SKILLS]], [[RSM_SKILLS_ASSOCIATIONS]], [[SRM_RESOURCES]], [[TRANSCLASS]]

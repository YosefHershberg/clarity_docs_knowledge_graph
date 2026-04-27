---
title: BIZ_COM_PERIODS
type: db-table
table: BIZ_COM_PERIODS
columns: 15
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
  - Financial Administration
  - Financial Planning
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - CBK_INVOICE
  - FIN_POSTED_TXNS
  - PAC_CHG_BATCH_HEADERS
  - PAC_CHG_TRANSACTIONS
  - PAC_FRC_FORECAST_DETAILS
  - PAC_FRC_FORECAST_PROPERTIES
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
  - erd/financial-administration
  - erd/financial-planning
---

# BIZ_COM_PERIODS

> [!info] Description
> This table stores the fiscal time periods set up by the user.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]
- [[_MOC - Financial Administration ERD]]
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `PERIOD_NAME` | NVARCHAR | NULL | This column refers to the name of the period. The name is unique across time periods. |
| `PERIOD` | NUMERIC | NULL | Deprecated. No longer used. |
| `P_QUARTER` | NUMERIC | NULL | Deprecated. No longer used. |
| `P_YEAR` | NUMERIC | NOT NULL | This column refers to the year in which this period falls. |
| `START_DATE` | DATE | NOT NULL | This column refers to the start date of the period. |
| `END_DATE` | DATE | NOT NULL | This column refers to the end date of the period. |
| `P_DESCRIPTION` | NVARCHAR | NULL | This column refers to the description of the time period. |
| `PERIOD_TYPE` | NVARCHAR | NOT NULL | This column refers to the type of period. The values are: - 1 = Weekly - 2 = 13 Periods per Year - 3 = Monthly - 4 = Quarterly - 5 = Annually - 6 = Semi-Monthly |
| `ENTITY_ID` | NUMERIC | NULL | This column refers to the entity with which this time period is associated, and refers to the internal ID of the table ENTITY. |
| `IS_ACTIVE` | NUMERIC | NULL | This column indicates whether this time period is active. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_INVOICE]] | `PERIOD_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `GLPERIOD` | `ID` |
| [[PAC_CHG_BATCH_HEADERS]] | `GL_PERIOD` | `ID` |
| [[PAC_CHG_TRANSACTIONS]] | `GL_PERIOD` | `ID` |
| [[PAC_FRC_FORECAST_DETAILS]] | `PERIOD_ID` | `ID` |
| [[PAC_FRC_FORECAST_PROPERTIES]] | `START_PERIOD` | `ID` |
| [[PAC_FRC_FORECAST_PROPERTIES]] | `END_PERIOD` | `ID` |

## Related tables (same subject area)

[[APMASTER]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[CLNTSUPP]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PROJCLASS]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

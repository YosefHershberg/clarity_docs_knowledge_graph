---
title: ENTITY
type: db-table
table: ENTITY
columns: 34
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
  - Departments
  - Financial Administration
  - Financial Planning
fk_targets:
  - CLNTCLASS
  - CMN_SEC_USERS
  - LOCATIONS
  - PPA_MATRIX
  - PRJ_OBS_TYPES
  - PROJCLASS
  - WIPCLASS
fk_sources:
  - CBK_GL_ACCOUNT
  - CBK_GL_ALLOCATION
  - DEPARTMENTS
  - DWH_TMP_FIN_TRANSACTION
  - INV_INVESTMENTS
  - LOCATIONS
  - PAC_CHG_GL_ACCOUNTS
  - PAC_CHG_RESOURCE_CREDITS
  - PAC_CHG_TRANSACTIONS
  - PFM_INVESTMENTS
  - PPA_TRANSCONTROL
  - PPA_WIP
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
  - erd/departments
  - erd/financial-administration
  - erd/financial-planning
---

# ENTITY

> [!info] Description
> The unique entity code.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]
- [[_MOC - Departments ERD]]
- [[_MOC - Financial Administration ERD]]
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `ENTITY` | NVARCHAR | NOT NULL | The unique entity code. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | The entity description. |
| `SHORTDESC` | NVARCHAR | NOT NULL | The short description for the entity. |
| `FIN_PERIOD_CODE` | NVARCHAR | NULL |  |
| `HOME_CURRENCY_CODE` | NVARCHAR | NOT NULL | The home currency code. This column refers to CMN_CURRENCIES.currency_code. |
| `REPORTING_CURRENCY_CODE` | NVARCHAR | NULL | The reporting currency code. This column refers to CMN_CURRENCIES.currency_code. |
| `EXTERNAL_SOURCE_ID` | NUMERIC | NULL | The XML Open Gateway external source identifier. |
| `EXTERNAL_ID` | NVARCHAR | NULL | The XML Open Gateway (XOG) external ID. |
| `BILLING_CURRENCY_CODE` | NVARCHAR | NULL | The billing currency code. This column refers to CMN_CURRENCIES.currency_code. |
| `WIP_CLASS` | NVARCHAR | NULL | The default WIP class for the entity. This column refers to WIPCLASS.wipclass. |
| `CLIENT_CLASS` | NVARCHAR | NULL | Represents the client class for the entity. This column refers to the [[CLNTCLASS]].ID. |
| `PROJECT_CLASS` | NVARCHAR | NULL | This column refers to the project class ([[PROJCLASS]].ID) for the entity. |
| `REMIT_TO_LOCATION` | NVARCHAR | NULL | Represents the location to remit to. Refers to the [[LOCATIONS]].ID. |
| `TRANS_RATE_SOURCE_LABOR` | NUMERIC | NULL | The default rate matrix for labor transactions for the entity. The column refers to PPA_MATRIX.matrixkey. |
| `TRANS_COST_SOURCE_LABOR` | NUMERIC | NULL | The default cost rate matrix for labor transactions for the entity. This column refers to PPA_MATRIX.matrixkey. |
| `TRANS_LOCATION_LABOR` | NUMERIC | NULL | The default location for labor transactions for the entity. This column refers [[LOCATIONS]].ID. |
| `EXCHANGE_RATE_TYPE_LABOR` | NVARCHAR | NULL | The labor exchange rate type for the entity. |
| `TRANS_RATE_SOURCE_MATERIALS` | NUMERIC | NULL | The default rate matrix for rate of material transactions for the entity. This column refers to PPA_MATRIX.matrixkey. |
| `EXCHANGE_RATE_TYPE_MATERIALS` | NVARCHAR | NULL | The material exchange rate type. |
| `TRANS_RATE_SOURCE_EQUIPMENT` | NUMERIC | NULL | The default rate matrix ID for equipment transactions for the entity. This column refers to PPA_MATRIX.matrixkey. |
| `EXCHANGE_RATE_TYPE_EQUIPMENT` | NVARCHAR | NULL | The equipment exchange rate type. |
| `TRANS_RATE_SOURCE_EXPENSE` | NUMERIC | NULL | The default rate matrix for expense transactions for the entity. This column refers to PPA_MATRIX.matrixkey. |
| `EXCHANGE_RATE_TYPE_EXPENSE` | NVARCHAR | NULL | The expense exchange rate type. |
| `BATCH_CYCLE` | NVARCHAR | NULL | The batch cycle ID. |
| `ORG_CHART_OBS_TYPE_ID` | NUMERIC | NULL | The OBS that represents the department or organizational structure for this entity ([[PRJ_OBS_TYPES]].ID). |
| `GEO_CHART_OBS_TYPE_ID` | NUMERIC | NULL | The OBS that represents the location or geographical structure for this entity ([[PRJ_OBS_TYPES]].ID). |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `TRANS_LOCATION_MATERIAL` | NUMERIC | NULL |  |
| `TRANS_LOCATION_EQUIPMENT` | NUMERIC | NULL |  |
| `TRANS_LOCATION_EXPENSE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `WIP_CLASS` | [[WIPCLASS]].`WIPCLASS` | |
| `CLIENT_CLASS` | [[CLNTCLASS]].`ID` | |
| `PROJECT_CLASS` | [[PROJCLASS]].`ID` | |
| `REMIT_TO_LOCATION` | [[LOCATIONS]].`ID` | |
| `TRANS_RATE_SOURCE_LABOR` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANS_COST_SOURCE_LABOR` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANS_LOCATION_LABOR` | [[LOCATIONS]].`ID` | |
| `TRANS_RATE_SOURCE_MATERIALS` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANS_RATE_SOURCE_EQUIPMENT` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `TRANS_RATE_SOURCE_EXPENSE` | [[PPA_MATRIX]].`MATRIXKEY` | |
| `ORG_CHART_OBS_TYPE_ID` | [[PRJ_OBS_TYPES]].`ID` | |
| `GEO_CHART_OBS_TYPE_ID` | [[PRJ_OBS_TYPES]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_ACCOUNT]] | `ENTITY_ID` | `ID` |
| [[CBK_GL_ALLOCATION]] | `ENTITY_ID` | `ID` |
| [[DEPARTMENTS]] | `ENTITY_ID` | `ID` |
| [[DWH_TMP_FIN_TRANSACTION]] | `ENTITY` | `ENTITY` |
| [[INV_INVESTMENTS]] | `ENTITY_CODE` | `ENTITY` |
| [[LOCATIONS]] | `ENTITY_ID` | `ID` |
| [[PAC_CHG_GL_ACCOUNTS]] | `ENTITY_ID` | `ID` |
| [[PAC_CHG_RESOURCE_CREDITS]] | `ENTITY_ID` | `ID` |
| [[PAC_CHG_TRANSACTIONS]] | `ENTITY_ID` | `ID` |
| [[PFM_INVESTMENTS]] | `ENTITY_CODE` | `ENTITY` |
| [[PPA_TRANSCONTROL]] | `ENTITY` | `ENTITY` |
| [[PPA_WIP]] | `ENTITY` | `ENTITY` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[CLNTSUPP]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[DPT_KEYMETRICS]], [[DPT_SUBSCRIPTIONS]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_FINANCIALS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PROJCLASS]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

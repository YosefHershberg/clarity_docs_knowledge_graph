---
title: TRANSCLASS
type: db-table
table: TRANSCLASS
columns: 16
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
  - CBK_GL_ALLOCATION
  - DWH_TMP_FIN_TRANSACTION
  - FIN_POSTED_TXNS
  - PAC_CHG_RESOURCE_CREDITS
  - PAC_MNT_RESOURCES
  - PPA_BILLINGDETAILS
  - PPA_TRANSCONTROL
  - PPA_TRANSWIPADJUST
  - PPA_WIP
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
  - erd/financial-administration
  - erd/financial-planning
---

# TRANSCLASS

> [!info] Description
> This column refers to the code for the transaction class.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]
- [[_MOC - Financial Administration ERD]]
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `TRANSCLASS` | NVARCHAR | NOT NULL | This column refers to the code for the transaction class. |
| `TRANSTYPE` | NVARCHAR | NOT NULL | This column refers to the transaction type. Values are: - 0 = Labor - 1 = Material - 2 = Expense - 3 = Equipment Note: There may be additional values. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | This column refers to the long description of the transaction class. |
| `SHORTDESC` | NVARCHAR | NOT NULL | This column refers to the short description of the transaction class. |
| `APAVAILABLE` | INTEGER | NOT NULL | This column indicates whether this transaction can be entered in accounts payable (AP). Values are: - 0 = No - 1 = Yes |
| `BURDEN` | INTEGER | NOT NULL | Reserved for internal use only. The burden code for this transaction class row. |
| `OVERHEAD` | INTEGER | NOT NULL | Reserved for internal use only. This column refers to the overhead code for this transaction class row. |
| `GLTRX_TYPE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `BUILT_IN` | INTEGER | NULL | This column is deprecated and should no longer be used. |
| `USE_IN_FORECASTS` | INTEGER | NOT NULL | This column indicates whether this transaction class should be used in forecasts. Values are: - 0 = No - 1 = Yes |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that last updated this record. |
| `ACTIVE` | NUMERIC | NOT NULL | This column defines if the Transaction Class is Active. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_ALLOCATION]] | `TRANSCLASS` | `ID` |
| [[DWH_TMP_FIN_TRANSACTION]] | `TRANSCLASS` | `TRANSCLASS` |
| [[FIN_POSTED_TXNS]] | `TRANSCLASS_ID` | `ID` |
| [[PAC_CHG_RESOURCE_CREDITS]] | `TRANSACTION_CLASS_ID` | `ID` |
| [[PAC_MNT_RESOURCES]] | `TRANSCLASS` | `TRANSCLASS` |
| [[PPA_BILLINGDETAILS]] | `TRANSCLASS` | `TRANSCLASS` |
| [[PPA_TRANSCONTROL]] | `TRANSCLASS` | `TRANSCLASS` |
| [[PPA_TRANSWIPADJUST]] | `TRANSCLASS` | `TRANSCLASS` |
| [[PPA_WIP]] | `TRANSCLASS` | `TRANSCLASS` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[CLNTSUPP]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PROJCLASS]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[UNITMEASURE]], [[WIPCLASS]]

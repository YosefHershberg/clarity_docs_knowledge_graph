---
title: PAC_FOS_RESOURCE_CLASS
type: db-table
table: PAC_FOS_RESOURCE_CLASS
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
  - Financial Administration
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - CBK_GL_ALLOCATION
  - FIN_POSTED_TXNS
  - PAC_CHG_RESOURCE_CREDITS
  - PAC_MNT_RESOURCES
  - PPA_BILLINGDETAILS
  - PPA_TRANSCONTROL
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
  - erd/financial-administration
---

# PAC_FOS_RESOURCE_CLASS

> [!info] Description
> This table stores resource class information.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `RESOURCE_CLASS` | NVARCHAR | NOT NULL | The unique name of the resource class. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | The description of the resource class. |
| `RESOURCE_TYPE` | NVARCHAR | NOT NULL | The resource type. Value are: - labor - Material - Expense - Equipment |
| `ACTIVE` | INTEGER | NULL | Indicates if this resource class is active or inactive. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL |  |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_ALLOCATION]] | `RESOURCE_CLASS_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `RESOURCE_CLASS_ID` | `ID` |
| [[PAC_CHG_RESOURCE_CREDITS]] | `RESOURCE_CLASS_ID` | `ID` |
| [[PAC_MNT_RESOURCES]] | `RESOURCE_CLASS` | `RESOURCE_CLASS` |
| [[PPA_BILLINGDETAILS]] | `RESOURCE_CLASS` | `RESOURCE_CLASS` |
| [[PPA_TRANSCONTROL]] | `RESOURCE_CLASS` | `RESOURCE_CLASS` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PROJCLASS]], [[PRTYPECODE]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

---
title: WIPCLASS
type: db-table
table: WIPCLASS
columns: 10
audience: dev
domain: development
canonical: true
erds:
  - Financial Administration
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - CLNTSUPP
  - DWH_TMP_FIN_TRANSACTION
  - ENTITY
  - FIN_OBJECT_PROPERTIES
  - FIN_POSTED_TXNS
  - PPA_BILLINGDETAILS
  - PPA_TRANSCONTROL
  - PPA_TRANSWIPADJUST
  - PPA_WIP
tags:
  - dev
  - schema
  - table
  - erd/financial-administration
---

# WIPCLASS

> [!info] Description
> This column refers to the identifier (or code) for this WIP class.

## Subject areas (ERDs)
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the uniquely identifier of a row in this table. |
| `WIPCLASS` | NVARCHAR | NOT NULL | This column refers to the identifier (or code) for this WIP class. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | This column refers to the long description of this WIP class. |
| `SHORTDESC` | NVARCHAR | NOT NULL | This column refers to the short description of this WIP class. |
| `ALLOCATION_TYPE` | NVARCHAR | NOT NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the date and time this row was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `ACTIVE` | NUMERIC | NOT NULL | This column defines if the WIP Class is Active. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_DATE` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CLNTSUPP]] | `CLNTWIPCLASS` | `WIPCLASS` |
| [[DWH_TMP_FIN_TRANSACTION]] | `WIPCLASS` | `WIPCLASS` |
| [[ENTITY]] | `WIP_CLASS` | `WIPCLASS` |
| [[FIN_OBJECT_PROPERTIES]] | `WIP_CLASS_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `WIPCLASS_ID` | `ID` |
| [[PPA_BILLINGDETAILS]] | `WIPCLASS` | `WIPCLASS` |
| [[PPA_TRANSCONTROL]] | `WIPCLASS` | `WIPCLASS` |
| [[PPA_TRANSWIPADJUST]] | `WIPCLASS` | `WIPCLASS` |
| [[PPA_WIP]] | `WIPCLASS` | `WIPCLASS` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PROJCLASS]], [[TRANSCLASS]], [[UNITMEASURE]]

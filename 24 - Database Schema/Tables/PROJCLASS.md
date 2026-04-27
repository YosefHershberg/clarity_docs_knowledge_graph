---
title: PROJCLASS
type: db-table
table: PROJCLASS
columns: 20
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
  - PPA_BILLINGDETAILS
  - PPA_WIP
tags:
  - dev
  - schema
  - table
  - erd/financial-administration
---

# PROJCLASS

> [!info] Description
> The code of identifier for the project class.

## Subject areas (ERDs)
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in this table. |
| `PROJCLASS` | NVARCHAR | NOT NULL | The code of identifier for the project class. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | A long description. |
| `SHORTDESC` | NVARCHAR | NOT NULL | A short description. |
| `DATABASE2` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |
| `BURDENCODE` | NVARCHAR | NULL | Reserved for internal use only. |
| `APPLYBLABOR` | INTEGER | NULL | Reserved for internal use only. |
| `APPLYBMATERIALS` | INTEGER | NULL | Reserved for internal use only. |
| `APPLYBEQUIPMENT` | INTEGER | NULL | Reserved for internal use only. |
| `APPLYBEXPENSES` | INTEGER | NULL | Reserved for internal use only. |
| `OVERHEADCODE` | NVARCHAR | NULL | Reserved for internal use only. |
| `APPLYOLABOR` | INTEGER | NULL | Reserved for internal use only. |
| `APPLYOMATERIALS` | INTEGER | NULL | Reserved for internal use only. |
| `APPLYOEQUIPMENT` | INTEGER | NULL | Reserved for internal use only. |
| `APPLYOEXPENSES` | INTEGER | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the date and time this row was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `ACTIVE` | NUMERIC | NOT NULL | This column defines if the Investment Class is Active. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_DATE` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CLNTSUPP]] | `PROJCLASS` | `PROJCLASS` |
| [[DWH_TMP_FIN_TRANSACTION]] | `PROJECTCLASS` | `PROJCLASS` |
| [[ENTITY]] | `PROJECT_CLASS` | `ID` |
| [[PPA_BILLINGDETAILS]] | `PROJECTCLASS` | `PROJCLASS` |
| [[PPA_WIP]] | `PROJECTCLASS` | `PROJCLASS` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

---
title: CLNTCLASS
type: db-table
table: CLNTCLASS
columns: 11
audience: dev
domain: development
canonical: true
erds:
  - Financial Configuration
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - CLNTSUPP
  - ENTITY
  - PPA_BILLINGDETAILS
  - PPA_TRANSCONTROL
  - PPA_WIP
tags:
  - dev
  - schema
  - table
  - erd/financial-configuration
---

# CLNTCLASS

> [!info] Description
> The unique name of the company class.

## Subject areas (ERDs)
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique internal ID of the company class. It is the primary key. |
| `CLNTCLASS` | NVARCHAR | NOT NULL | The unique name of the company class. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | The description of the company class. |
| `SHORTDESC` | NVARCHAR | NOT NULL | The short description of the company class. |
| `RATEDISCOUNT` | FLOAT | NULL | This column is deprecated and should no longer be used. |
| `RATEPREMIUM` | FLOAT | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `ACTIVE` | NUMERIC | NOT NULL | This column defines if the Company Class is Active. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CLNTSUPP]] | `CLNTCLASS` | `CLNTCLASS` |
| [[ENTITY]] | `CLIENT_CLASS` | `ID` |
| [[PPA_BILLINGDETAILS]] | `CLIENTCLASS` | `CLNTCLASS` |
| [[PPA_TRANSCONTROL]] | `CLIENTCLASS` | `CLNTCLASS` |
| [[PPA_WIP]] | `CLIENTCLASS` | `CLNTCLASS` |

## Related tables (same subject area)

[[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CLNTRESPONS]], [[CLNTSUPP]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PROJCNTRTS]], [[PROJREVISION]], [[PROJSTAFF]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

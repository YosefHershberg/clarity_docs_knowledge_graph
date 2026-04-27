---
title: LOCATIONS
type: db-table
table: LOCATIONS
columns: 23
audience: dev
domain: development
canonical: true
erds:
  - Departments
  - Financial Administration
  - Financial Planning
fk_targets:
  - CMN_SEC_USERS
  - ENTITY
  - PAC_MNT_RESOURCES
  - PRJ_OBS_UNITS
fk_sources:
  - CBK_GL_ALLOCATION
  - CLNTSUPP
  - DWH_TMP_FIN_TRANSACTION
  - ENTITY
  - FIN_OBJECT_PROPERTIES
  - FIN_POSTED_TXNS
  - NAMEOPTIONS
  - PAC_CHG_RESOURCE_CREDITS
  - PPA_TRANSCONTROL
  - PPA_TRANSWIPADJUST
  - PPA_WIP
tags:
  - dev
  - schema
  - table
  - erd/departments
  - erd/financial-administration
  - erd/financial-planning
---

# LOCATIONS

> [!info] Description
> This table stores the financial locations.

## Subject areas (ERDs)
- [[_MOC - Departments ERD]]
- [[_MOC - Financial Administration ERD]]
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for the location. |
| `LOCATIONID` | NVARCHAR | NOT NULL | The unique code for the location. |
| `ENTITY` | NVARCHAR | NOT NULL | The financial entity to which this location belongs. This refers to the ENTITY table. |
| `LOCATIONDESCRIPTION` | NVARCHAR | NULL | The detailed description for this location. |
| `SHORTDESC` | NVARCHAR | NOT NULL | A short description for the location. |
| `ADDRESS1` | NVARCHAR | NULL | This column refers to line 1 of the address. |
| `ADDRESS2` | NVARCHAR | NULL | This column refers to line 2 of the address. |
| `ADDRESS3` | NVARCHAR | NULL | This column refers to line 3 of the address. |
| `CITY` | NVARCHAR | NULL | The name of city. |
| `STATEPROV` | NVARCHAR | NULL | The name of state. |
| `COUNTRYID` | NVARCHAR | NULL | The country for the location. |
| `ZIP` | NVARCHAR | NULL | The zip code for the location. |
| `PHONE` | NVARCHAR | NULL | The contact's phone number for the location. |
| `FAX` | NVARCHAR | NULL | The contact's fax number for the location. |
| `MANAGER_RESOURCE_CODE` | NVARCHAR | NULL | The resource code. This refers to [[PAC_MNT_RESOURCES]].ID. |
| `PARENT_LOCATION_ID` | NUMERIC | NULL | The parent location ([[LOCATIONS]].ID). |
| `OBS_UNIT_ID` | NUMERIC | NULL | The OBS unit ([[PRJ_OBS_UNITS]].ID) that the location represents. |
| `ENTITY_ID` | NUMERIC | NULL | The entity ([[ENTITY]].ID) that the location belongs to. |
| `LOCATION_MANAGER_ID` | NUMERIC | NULL |  |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `MANAGER_RESOURCE_CODE` | [[PAC_MNT_RESOURCES]].`ID` | |
| `OBS_UNIT_ID` | [[PRJ_OBS_UNITS]].`ID` | |
| `ENTITY_ID` | [[ENTITY]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_ALLOCATION]] | `LOCATION_ID` | `ID` |
| [[CLNTSUPP]] | `LOCATIONID` | `LOCATIONID` |
| [[DWH_TMP_FIN_TRANSACTION]] | `EMPLYHOMELOCATION` | `LOCATONID` |
| [[DWH_TMP_FIN_TRANSACTION]] | `PROJECT_LOCATION` | `LOCATIONID` |
| [[ENTITY]] | `REMIT_TO_LOCATION` | `ID` |
| [[ENTITY]] | `TRANS_LOCATION_LABOR` | `ID` |
| [[FIN_OBJECT_PROPERTIES]] | `LOCATION_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `INV_OBJECT_LOCATION_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `RESOURCE_HOME_LOCATION_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `REQUESTOR_HOME_LOCATION_ID` | `ID` |
| [[NAMEOPTIONS]] | `DEFAULTLOCATION` | `LOCATIONID` |
| [[PAC_CHG_RESOURCE_CREDITS]] | `LOCATION_ID` | `ID` |
| [[PPA_TRANSCONTROL]] | `EMPLYHOMELOCATION` | `LOCATONID` |
| [[PPA_TRANSCONTROL]] | `PROJECT_LOCATION` | `LOCATIONID` |
| [[PPA_TRANSWIPADJUST]] | `EMPLYHOMELOCATION` | `LOCATIONID` |
| [[PPA_WIP]] | `EMPLYHOMELOCATION` | `LOCATONID` |
| [[PPA_WIP]] | `PROJECT_LOCATION` | `LOCATIONID` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[DPT_KEYMETRICS]], [[DPT_SUBSCRIPTIONS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_FINANCIALS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[LOCATIONDEPT]], [[NAMEOPTIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PROJCLASS]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

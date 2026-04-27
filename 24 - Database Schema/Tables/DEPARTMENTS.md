---
title: DEPARTMENTS
type: db-table
table: DEPARTMENTS
columns: 18
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
  - Departments
  - Financial Administration
  - Financial Planning
fk_targets:
  - CMN_SEC_USERS
  - ENTITY
  - PRJ_OBS_UNITS
fk_sources:
  - CBK_GL_ALLOCATION
  - CBK_GL_ALLOCATION_DETAIL
  - CBK_GL_TXNS
  - CBK_INVOICE
  - CLNTSUPP
  - DPT_SUBSCRIPTIONS
  - DWH_TMP_FIN_TRANSACTION
  - FIN_OBJECT_PROPERTIES
  - FIN_POSTED_TXNS
  - LOCATIONDEPT
  - NAMEOPTIONS
  - PAC_CHG_RESOURCE_CREDITS
  - PPA_TRANSCONTROL
  - PPA_TRANSWIPADJUST
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

# DEPARTMENTS

> [!info] Description
> This table stores the department details for financial properties.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]
- [[_MOC - Departments ERD]]
- [[_MOC - Financial Administration ERD]]
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `DEPARTCODE` | NVARCHAR | NOT NULL | The department code. |
| `DESCRIPTION` | NVARCHAR | NULL | The detailed description for the department. |
| `SHORTDESC` | NVARCHAR | NOT NULL | The short description for the department. |
| `DEPARTIDENTIFIER` | NVARCHAR | NULL | This column indicates Null or the general ledger segment value mapped to this department. |
| `DEFAULT_REVIEWER` | NVARCHAR | NULL | The default reviewer for the department. |
| `ALT_DEFAULT_REVIEWER` | NVARCHAR | NULL | The alternate reviewer for the department. |
| `OBS_UNIT_ID` | NUMERIC | NULL | The OBS unit ([[PRJ_OBS_UNITS]].ID) that represents the department node. |
| `PARENT_DEPARTMENT_ID` | NUMERIC | NULL |  |
| `DEPARTMENT_MANAGER_ID` | NUMERIC | NULL | The department manager ([[CMN_SEC_USERS]].ID). |
| `BRM_ID` | NUMERIC | NULL | The business relationship manager ([[CMN_SEC_USERS]].ID). |
| `ENTITY_ID` | NUMERIC | NULL | The entity ([[ENTITY]].ID) to which the department belongs. |
| `DELEGATE_INV_APPR` | INTEGER | NOT NULL | The flag used for delegating invoice approval to child departments. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this record. |
| `IS_ACTIVE` | INTEGER | NOT NULL | Active/Inactive status of Departments |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `OBS_UNIT_ID` | [[PRJ_OBS_UNITS]].`ID` | |
| `DEPARTMENT_MANAGER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `BRM_ID` | [[CMN_SEC_USERS]].`ID` | |
| `ENTITY_ID` | [[ENTITY]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_GL_ALLOCATION]] | `DEPARTMENT_ID` | `ID` |
| [[CBK_GL_ALLOCATION_DETAIL]] | `DEPARTMENT_ID` | `ID` |
| [[CBK_GL_TXNS]] | `DEPARTMENT_ID` | `ID` |
| [[CBK_INVOICE]] | `DEPARTMENT_ID` | `ID` |
| [[CLNTSUPP]] | `DEPARTCODE` | `DEPARTCODE` |
| [[DPT_SUBSCRIPTIONS]] | `DEPARTMENT_ID` | `ID` |
| [[DWH_TMP_FIN_TRANSACTION]] | `EMPLYHOMEDEPART` | `DEPARTCODE` |
| [[DWH_TMP_FIN_TRANSACTION]] | `PROJECT_DEPARTMENT` | `DEPARTCODE` |
| [[FIN_OBJECT_PROPERTIES]] | `DEPARTMENT_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `INV_OBJECT_DEPT_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `RESOURCE_HOME_DEPT_ID` | `ID` |
| [[FIN_POSTED_TXNS]] | `REQUESTOR_HOME_DEPT_ID` | `ID` |
| [[LOCATIONDEPT]] | `DEPT_ID` | `ID` |
| [[LOCATIONDEPT]] | `DEPARTCODE` | `DEPARTCODE` |
| [[NAMEOPTIONS]] | `DEFAULTDEPARTMENT` | `DEPARTCODE` |
| [[PAC_CHG_RESOURCE_CREDITS]] | `DEPARTMENT_ID` | `ID` |
| [[PPA_TRANSCONTROL]] | `DEPARTCODE` | `DEPARTCODE` |
| [[PPA_TRANSCONTROL]] | `EMPLYHOMEDEPART` | `DEPARTCODE` |
| [[PPA_TRANSCONTROL]] | `PROJECT_DEPARTMENT` | `DEPARTCODE` |
| [[PPA_TRANSWIPADJUST]] | `EMPLYHOMEDEPART` | `DEPARTCODE` |
| [[PPA_WIP]] | `DEPARTCODE` | `DEPARTCODE` |
| [[PPA_WIP]] | `EMPLYHOMEDEPART` | `DEPARTCODE` |
| [[PPA_WIP]] | `PROJECT_DEPARTMENT` | `DEPARTCODE` |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[CLNTSUPP]], [[CMN_LOOKUPS]], [[DPT_KEYMETRICS]], [[DPT_SUBSCRIPTIONS]], [[ENTITY]], [[FIN_BENEFIT_PLAN_DETAILS]], [[FIN_COST_PLAN_DETAILS]], [[FIN_FINANCIALS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PROJCLASS]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

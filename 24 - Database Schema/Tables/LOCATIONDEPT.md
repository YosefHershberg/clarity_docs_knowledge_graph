---
title: LOCATIONDEPT
type: db-table
table: LOCATIONDEPT
columns: 11
audience: dev
domain: development
canonical: true
erds:
  - Departments
  - Financial Administration
fk_targets:
  - DEPARTMENTS
tags:
  - dev
  - schema
  - table
  - erd/departments
  - erd/financial-administration
---

# LOCATIONDEPT

> [!info] Description
> This table stores the department to locations assignment.

## Subject areas (ERDs)
- [[_MOC - Departments ERD]]
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `LOCN_ID` | NUMERIC | NULL |  |
| `DEPT_ID` | NUMERIC | NULL | The department ([[DEPARTMENTS]].ID) in this association. |
| `LOCATIONID` | NVARCHAR | NOT NULL | The location for which the association exists. |
| `DEPARTCODE` | NVARCHAR | NOT NULL | The department associated with the location. This refers in [[DEPARTMENTS]].DEPARTCODE. |
| `PERCBILLABLE` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `TARGETPERCBILLABLE` | FLOAT | NULL | This column is deprecated and should no longer be used. |
| `BILLRATE` | INTEGER | NOT NULL | This column is deprecated and should no longer be used. |
| `TARGETBILLRATE` | NUMERIC | NULL | This column is deprecated and should no longer be used. |
| `STARTDATE` | DATE | NOT NULL | The date the association was created. |
| `ENDDATE` | DATE | NULL | This column is deprecated and should no longer be used. |
| `MANAGER_RESOURCE_CODE` | NVARCHAR | NULL | This column is deprecated and should no longer be used. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `DEPT_ID` | [[DEPARTMENTS]].`ID` | |
| `DEPARTCODE` | [[DEPARTMENTS]].`DEPARTCODE` | |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[DPT_KEYMETRICS]], [[DPT_SUBSCRIPTIONS]], [[ENTITY]], [[FIN_FINANCIALS]], [[LOCATIONS]], [[NAMEOPTIONS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PRJ_OBS_TYPES]], [[PRJ_OBS_UNITS]], [[PROJCLASS]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

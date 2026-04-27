---
title: UNITMEASURE
type: db-table
table: UNITMEASURE
columns: 5
audience: dev
domain: development
canonical: true
erds:
  - Financial Administration
tags:
  - dev
  - schema
  - table
  - erd/financial-administration
---

# UNITMEASURE

> [!info] Description
> This table stores unit of measurement information.

## Subject areas (ERDs)
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the uniquely identifier of a row in this table. |
| `UOMCODE` | NVARCHAR | NOT NULL | This column refers to the code for this unit of measure. |
| `DESCRIPTION` | NVARCHAR | NOT NULL | This column refers to the long description of the unit of measure. |
| `MULTIPLIER` | FLOAT | NOT NULL | This column is deprecated and should no longer be used. |
| `EXTENDOUT` | INTEGER | NOT NULL |  |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_BATCH_OUTPUT]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PROJCLASS]], [[TRANSCLASS]], [[WIPCLASS]]

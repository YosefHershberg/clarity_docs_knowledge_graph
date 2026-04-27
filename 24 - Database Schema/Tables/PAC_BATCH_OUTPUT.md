---
title: PAC_BATCH_OUTPUT
type: db-table
table: PAC_BATCH_OUTPUT
columns: 8
audience: dev
domain: development
canonical: true
erds:
  - Financial Administration
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/financial-administration
---

# PAC_BATCH_OUTPUT

> [!info] Description
> This table stores the batch output file details.

## Subject areas (ERDs)
- [[_MOC - Financial Administration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NULL | This column refers to the unique identifier for a row in this table. |
| `TYPE` | NVARCHAR | NULL | The batch output type. Value are: - F = File - P = Printer |
| `CODE` | NVARCHAR | NULL | The code for the batch output. |
| `PATHNAME` | NVARCHAR | NULL | The name of the batch output. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[APMASTER]], [[BIZ_COM_PERIODS]], [[CLNTSUPP]], [[DEPARTMENTS]], [[ENTITY]], [[LOCATIONDEPT]], [[LOCATIONS]], [[NAMEOPTIONS]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_CHG_TRANSACTIONS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_FRC_FORECAST_DETAILS]], [[PAC_FRC_FORECAST_PROPERTIES]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PPA_WIP]], [[PROJCLASS]], [[TRANSCLASS]], [[UNITMEASURE]], [[WIPCLASS]]

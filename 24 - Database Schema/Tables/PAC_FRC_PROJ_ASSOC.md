---
title: PAC_FRC_PROJ_ASSOC
type: db-table
table: PAC_FRC_PROJ_ASSOC
columns: 9
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - PAC_FRC_FORECAST_PROPERTIES
  - PRCHARGECODE
tags:
  - dev
  - schema
  - table
---

# PAC_FRC_PROJ_ASSOC

> [!info] Description
> This table stores the plan associations to a project and the transaction classes, charge codes, or roles depending on the plan by option. This table is obsolete for 8.0 and later releases.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier for a row in this table. |
| `FORECAST_ID` | NUMERIC | NOT NULL | This refers to [[PAC_FRC_FORECAST_PROPERTIES]].ID. |
| `DETAIL_ID` | NUMERIC | NOT NULL | The ID of a table. The table is determined by the plan by option. Values are: - Transaction class = TRANSCLASS table - Charge codes = PRCHARGECODE table - Roles = SRM_RESOURCES table |
| `DETAIL2_ID` | NUMERIC | NULL | The second plan detail level when planning by transaction class and charge code. The value is null when planning by transaction class, role or charge code. This refers to the [[PRCHARGECODE]].ID. |
| `SORT_ORDER` | NUMERIC | NULL | The user defined sort order of the plan details. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `FORECAST_ID` | [[PAC_FRC_FORECAST_PROPERTIES]].`ID` | |
| `DETAIL2_ID` | [[PRCHARGECODE]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

---
title: FIN_OBJECT_PROPERTIES
type: db-table
table: FIN_OBJECT_PROPERTIES
columns: 16
audience: dev
domain: development
canonical: true
fk_targets:
  - CMN_SEC_USERS
  - DEPARTMENTS
  - LOCATIONS
  - SRM_PROJECTS
  - WIPCLASS
tags:
  - dev
  - schema
  - table
---

# FIN_OBJECT_PROPERTIES

> [!info] Description
> This table is deprecated and should no longer be used.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `OBJECT_ID` | NUMERIC | NOT NULL | The object to which these properties belong. This column refers to [[SRM_PROJECTS]].ID. |
| `OBJECT_TYPE_CODE` | NVARCHAR | NOT NULL | The type of object. This column refers to SRM_PROJECTS.investment_code. The values are: - 0 = ASSET - 1 = APPLICATION - 2 = PRODUCT - 3 = OTHER INVESTMENT |
| `COMPANY_ID` | NUMERIC | NULL | The financial company. |
| `WIP_CLASS_ID` | NUMERIC | NOT NULL | The WIP (work in progress) class for the object. This refers to [[WIPCLASS]].ID. |
| `LOCATION_ID` | NUMERIC | NOT NULL | The financial location for the object. This column refers to [[LOCATIONS]].ID. |
| `DEPARTMENT_ID` | NUMERIC | NOT NULL | The financial department for the object. This column refers to [[DEPARTMENTS]].ID. |
| `TRANS_LBR_RATE_SRC_ID` | NUMERIC | NULL | The rate matrix for labor transactions. This column refers to the PPA_MATRIX table. |
| `TRANS_LBR_COST_SRC_ID` | NUMERIC | NULL | The cost matrix for labor transactions. This column refers to the PPA_MATRIX table. |
| `LABOR_EXCHANGE_RATE_TYPE` | NVARCHAR | NULL | The exchange rate type. Values are: - 0 = AVERAGE - 1 = FIXED - 2 = SPOT |
| `BILLING_CURRENCY_CODE` | NVARCHAR | NOT NULL | The default billing currency code for the object. This column refers to CMN_CURRENCIES.currency_code. |
| `ALLOCATION_STATUS_CODE` | NVARCHAR | NULL | This column indicates the general ledger (GL) allocation status. The values are: - 0 = Active - 1 = Inactive - 2 = On Hold |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `OBJECT_ID` | [[SRM_PROJECTS]].`ID` | |
| `OBJECT_TYPE_CODE` | [[SRM_PROJECTS]].`INVESTMENT_CODE` | |
| `WIP_CLASS_ID` | [[WIPCLASS]].`ID` | |
| `LOCATION_ID` | [[LOCATIONS]].`ID` | |
| `DEPARTMENT_ID` | [[DEPARTMENTS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

---
title: FIN_BENEFIT_PLAN_DETAILS
type: db-table
table: FIN_BENEFIT_PLAN_DETAILS
columns: 24
audience: dev
domain: development
canonical: true
erds:
  - Financial Planning
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/financial-planning
---

# FIN_BENEFIT_PLAN_DETAILS

> [!info] Description
> This table stores the time-sliced and monetary details of the benefit plans.

> [!important] Curated SQL Knowledge (single source of truth)
> See [[Domain 09 - Finance]] for the architectural narrative, gotchas, and idiomatic SQL involving this table. Column-level details below come from the 16.4.1 dump and are authoritative for column names; the curated note explains *how* and *why*.

## Subject areas (ERDs)
- [[_MOC - Financial Planning ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `PLAN_ID` | NUMERIC | NOT NULL | The plan internal ID with which this row is associated. This refers to the internal ID of the table FIN_PLANS. |
| `DETAIL` | NVARCHAR | NOT NULL | The description of the detail line item. |
| `BENEFIT` | BINARY | NULL | The time-sliced value of the plan detail's benefit amount. |
| `ACTUAL_BENEFIT` | BINARY | NULL | Represents a time-scaled value for the actual benefit of a benefit plan. |
| `VARIANCE` | BINARY | NULL |  |
| `BILLING_BENEFIT` | BINARY | NULL | The time-sliced value of the plan detail's benefit amount in billing currency. |
| `PERCENTAGE` | NUMERIC | NULL | The ratio of the detail benefit to the total benefit of this plan. |
| `TOTAL_BENEFIT` | NUMERIC | NULL | The total benefit amount for the plan detail. |
| `TOTAL_BILLING_BENEFIT` | NUMERIC | NULL | The total benefit amount for the plan detail in billing currency. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | The resource that created this row. This refers to [[CMN_SEC_USERS]].ID. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `ODF_SS_BENEFIT` | NUMERIC | NULL |  |
| `ODF_SS_VARIANCE` | NUMERIC | NULL |  |
| `ODF_SS_BILL_BENEFIT` | NUMERIC | NULL |  |
| `ODF_SS_ACTUAL_BENEFIT` | NUMERIC | NULL |  |
| `TOTAL_ACTUAL_BENEFIT` | NUMERIC | NULL | The total actual benefit amount for the benefit plan detail. |
| `ODF_NK_BENEFIT` | NVARCHARMAX | NULL | The Sql Curve representation for the benefit curve. |
| `ODF_NK_ACTUAL_BENEFIT` | NVARCHARMAX | NULL | The Sql Curve representation for the actual benefit curve. |
| `ODF_NK_VARIANCE` | NVARCHARMAX | NULL | The Sql Curve representation for the variance curve. |
| `ODF_NK_BILLING_BENEFIT` | NVARCHARMAX | NULL | The Sql Curve representation for the billing benefit curve. |
| `ODF_SS_SQLCURVE` | NUMERIC | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CMN_LOOKUPS]], [[DEPARTMENTS]], [[ENTITY]], [[FIN_COST_PLAN_DETAILS]], [[FIN_PLANS]], [[FIN_PLAN_DEFAULTS]], [[FIN_PLAN_DEFAULT_DETAILS]], [[INV_INVESTMENTS]], [[LOCATIONS]], [[ODF_MULTI_VALUED_LOOKUPS]], [[PRCHARGECODE]], [[PRTYPECODE]], [[SRM_RESOURCES]], [[TRANSCLASS]]

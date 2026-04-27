---
title: BIZ_OPP_GEN_PROPERTIES
type: db-table
table: BIZ_OPP_GEN_PROPERTIES
columns: 35
audience: dev
domain: development
canonical: true
erds:
  - Financial Configuration
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/financial-configuration
---

# BIZ_OPP_GEN_PROPERTIES

> [!info] Description
> This table stores general information for opportunity.

## Subject areas (ERDs)
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `PARENT_ID` | NUMERIC | NOT NULL | This column refers to the ID of the parent project. |
| `COMPANY_ID` | NUMERIC | NULL | This column refers to the company ID of the company associated with the opportunity. |
| `TYPE` | NUMERIC | NULL | This column refers to the type of opportunity. This column is one of the following values: - 0 = Internal - 1 = External - 2 = Other |
| `STATUS` | NUMERIC | NULL | The status of the opportunity. It is one of the following values: - 0 = Active - 2 = Inactive |
| `ACCOUNT_MANAGER` | NUMERIC | NULL | This column refers to the resource ID of the account manager for the opportunity. |
| `DATE_OPENED` | DATE | NULL | This column refers to the date the opportunity was opened. |
| `EXPECTED_CLOSE_DATE` | DATE | NULL | This column refers to the date the opportunity is expected to close. |
| `ACTUAL_CLOSE_DATE` | DATE | NULL | This column refers to the date the opportunity actually closes. |
| `OPP_GROUP` | NUMERIC | NULL | This column refers to the opportunity group. It is one of the following values: - 0 = Finance - 1 = Human Resources - 2 = IT - 3 = Operations - 4 = Sales - 5 = Other |
| `OPP_CATEGORY` | NUMERIC | NULL | The opportunity category (i.e., business objective). The values are: - 0 = eBusiness Improvement - 1 = Quality - 2 = Customer satisfaction - 3 = Revenue - 4 = Cost control - 5 = Other |
| `OPP_CLASS` | NUMERIC | NULL | The opportunity class. |
| `NOTES` | NVARCHAR | NULL | Any notes about the opportunity. |
| `LEAD_SOURCE` | NVARCHAR | NULL | The lead source for the opportunity. Values are: - 0 = Advertisement - 1 = Direct Mail - 2 = Referral - 3 = Return Customer - 4 = Telemarketing - 5 = Web Site - 6 = Other |
| `PRIORITY` | NUMERIC | NULL | This column refers to the priority level of the opportunity. It is one of the following values: - 0 = Very High - 1 = High - 2 = Medium - 3 = Low |
| `PROBABILITY` | NUMERIC | NULL | This column refers to the probability percentage that this lead will close. |
| `STAGE` | NUMERIC | NULL | This column refers to the stage (phase) of the opportunity. It is one the following values: - 0 = Prospect - 1 = Qualification - 2 = Selling - 3 = Negotiation - 4 = Commitment - 5 = Contract Close - 6 = Won - 7 = Loss - 8 = Abandoned |
| `REVENUE` | NUMERIC | NULL | This column refers to the expected revenue from the opportunity. |
| `SPONSOR_NAME` | NUMERIC | NULL | This column refers to the sponsor name. This column refers to a row in the SRM_RESOURCES table specified by the ID column. |
| `SPONSOR_ORGANIZATION` | NVARCHAR | NULL | This column refers to the sponsor organization name. |
| `CONTRB_ORGANIZATION` | NVARCHAR | NULL | This column refers to the contributing organizations. |
| `SPONSOR_COMMITMENT` | NUMERIC | NULL | Indicates sponsor commitment level that the sponsor has set aside for the opportunity. It is one of the following values: - 0 = Very High - 1 = High - 2 = Medium - 3 = Low |
| `ESTIMATED_BUDGET` | NUMERIC | NULL | This column refers to the estimated budget for the opportunity. |
| `ROI` | NUMERIC | NULL | This column refers to the return on investment (ROI) percentage. |
| `ROI_TIME` | NUMERIC | NULL | This column refers to the time of the ROI (return on investment). |
| `DURATION` | NUMERIC | NULL | This column refers to the estimated duration of the opportunity. |
| `RISK` | NUMERIC | NULL | The risk percentage of pursuing the opportunity. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `TRK_PIPELINE_REPORT` | NUMERIC | NOT NULL | This column indicates whether the external opportunity will be included in the Sales Opportunity report. It is a Boolean column. |
| `RELATED_PROJECT` | NUMERIC | NULL | This column refers to the project code for the related project. |
| `REVENUE_CURRENCY_CODE` | NVARCHAR | NULL | The revenue currency code. |
| `EST_BUDGET_CURRENCY_CODE` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_SUP_PROPERTIES]], [[CLNTCLASS]], [[CLNTRESPONS]], [[CLNTSUPP]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PROJCNTRTS]], [[PROJREVISION]], [[PROJSTAFF]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

---
title: BIZ_COM_SUP_PROPERTIES
type: db-table
table: BIZ_COM_SUP_PROPERTIES
columns: 25
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

# BIZ_COM_SUP_PROPERTIES

> [!info] Description
> This table stores the supplemental information for the company. Note that main information is stored in SRM_COMPANIES.

## Subject areas (ERDs)
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column refers to the unique identifier of a row in this table. |
| `EXTERNAL_ID` | NVARCHAR | NULL | This column refers to the CA Clarity XML Open Gateway external ID. |
| `DESCRIPTION` | NVARCHAR | NULL | This column refers to the description for this company. |
| `RATING` | NUMERIC | NULL | The company rating. |
| `SIC_CODE` | NUMERIC | NULL | The company SIC (Standard Industrial Classification) code. |
| `PARENT_COMPANY` | NUMERIC | NULL | This column refers to the parent company name. |
| `AFFILIATE_COMPANY` | NUMERIC | NULL | This column refers to the affiliated company name. |
| `DIVISION` | NVARCHAR | NULL | This column refers to the company division. |
| `INDUSTRY` | NUMERIC | NULL | This column refers to the industry the company deals with. Values: - 0 = Consumer Products - 1 = Education - 2 = Financial - 3 = Government - 4 = Health care - 5 = Manufacturing - 6 = Other - 7 = Other service - 8 = Technology |
| `ACCOUNT_MANAGER` | NUMERIC | NULL | This column refers to the name of the company's account manager. |
| `NOTES` | NVARCHAR | NULL | This column refers to the notes for this company. |
| `CATEGORY` | NUMERIC | NULL | This column refers to the company category. The values are: - 1 = Merchandiser - 2 = Manufacturing - 3 = Others - 4 = Service |
| `NUMBER_OF_EMPLOYEES` | NUMERIC | NULL | This column refers to the number of employees in this company. |
| `OWNERSHIP` | NUMERIC | NULL | The type of ownership for this company. The values are: - 0 = Corporation - 1 = General Partnership - 2 = Limited Liability Company - 3 = Limited Proprietorship - 4 = Sole Proprietorship |
| `TICKER_SYMBOL` | NVARCHAR | NULL | This column refers to the stock ticker symbol for this company. |
| `COMPANY_DATE` | DATE | NULL | This column is deprecated and should no longer be used. |
| `REFERRAL_SOURCE` | NVARCHAR | NULL | This column refers to the company's referral source. |
| `PRIMARY_CONTACT_NAME` | NVARCHAR | NULL | This column refers to the name of primary contact for this company. |
| `PRIMARY_CONTACT_EMAIL` | NVARCHAR | NULL | This column refers to the email of the primary contact for this company. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the resource that last updated this row. This refers to [[CMN_SEC_USERS]].ID. |
| `PRIMARY_CONTACT_PHONE` | NVARCHAR | NULL | This column refers to the phone number of primary contact for this company. |
| `URL` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_OPP_GEN_PROPERTIES]], [[CLNTCLASS]], [[CLNTRESPONS]], [[CLNTSUPP]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PROJCNTRTS]], [[PROJREVISION]], [[PROJSTAFF]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

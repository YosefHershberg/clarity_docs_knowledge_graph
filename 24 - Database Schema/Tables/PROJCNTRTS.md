---
title: PROJCNTRTS
type: db-table
table: PROJCNTRTS
columns: 28
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

# PROJCNTRTS

> [!info] Description
> This table holds information related to project contracts.

## Subject areas (ERDs)
- [[_MOC - Financial Configuration ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `CHANGEORDER` | NVARCHAR | NULL | Null or the change order to which the contract applies. |
| `CONTRACTNBR` | NVARCHAR | NULL | The contract number. |
| `CONTRACTDATE` | DATE | NULL | The date the contract was signed. |
| `CONTRACTAMOUNT` | NUMERIC | NULL | The amount of the contract. |
| `BILLAMOUNT` | NUMERIC | NULL | The amount to be billed. |
| `BILLFREQ` | NUMERIC | NULL | The billing frequency. Values are: - 1 = Weekly - 2 = Monthly - 3 = Quarterly |
| `BILLNBR` | NUMERIC | NULL | The number of the billing relative to the other billings. |
| `BILLDATE` | DATE | NULL | The scheduled date of the billing. |
| `PAYDATE` | DATE | NULL | The date the payment is due. |
| `PAYEVENT` | NVARCHAR | NULL | The event to which the payment is tied. |
| `PAYAMOUNT` | NUMERIC | NULL | The amount of the payment. |
| `PAYNOTES` | NVARCHAR | NULL | Notes about the payment. |
| `RETENTIONPERCENT` | FLOAT | NULL | The percentage of retention for the contract. |
| `RETENTIONAMOUNT` | NUMERIC | NULL | The amount of retention for the contract. |
| `RETENTIONDATE` | DATE | NULL | The date when the retention will be released. |
| `RETENTIONEVENT` | NVARCHAR | NULL | The event to which the retention is tied. |
| `TAXCODE` | NVARCHAR | NULL | The tax code. |
| `ADMINCODE` | NVARCHAR | NULL | The administration code. |
| `NOTES` | NVARCHAR | NULL | General notes about the contract. |
| `COMPANY_CODE` | NVARCHAR | NOT NULL | The client code. |
| `MASTER_PROJECT_CODE` | NVARCHAR | NOT NULL | The project code. |
| `PROJECT_CODE` | NVARCHAR | NOT NULL | This column refers to the project identification (i.e., the project code). |
| `ENFORCE_CONTRACT_AMOUNT` | NUMERIC | NOT NULL | Indicates if the contract amount is enforced. Values are: - 1 = Yes - 0 = No |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource ([[CMN_SEC_USERS]].ID) that last updated this record. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CLNTCLASS]], [[CLNTRESPONS]], [[CLNTSUPP]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PROJREVISION]], [[PROJSTAFF]], [[SRM_COMPANIES]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

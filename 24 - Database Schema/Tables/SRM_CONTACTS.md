---
title: SRM_CONTACTS
type: db-table
table: SRM_CONTACTS
columns: 24
audience: dev
domain: development
canonical: true
erds:
  - Financial Configuration
  - ITIL
fk_targets:
  - CMN_SEC_USERS
tags:
  - dev
  - schema
  - table
  - erd/financial-configuration
  - erd/itil
---

# SRM_CONTACTS

> [!info] Description
> This table stores contact information. It can be used to link to any other table through the PRINCIPAL columns.

## Subject areas (ERDs)
- [[_MOC - Financial Configuration ERD]]
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRINCIPAL_ID` | NUMERIC | NOT NULL | The primary key of the entity that this contact is for. |
| `PRINCIPAL_TYPE` | NVARCHAR | NOT NULL | Refers to the entity that this contact is for. Possible values are: - USERS - RESOURCE - COMPANY_MAIN - COMPANY_POSTAL |
| `COMPANY_ID` | NUMERIC | NULL | The company. It is a foreign key to the SRM_COMPANIES table. |
| `JOB_TITLE` | NVARCHAR | NULL | The job title for this contact. |
| `ADDRESS1` | NVARCHAR | NULL | This column refers to line 1 of the address. |
| `ADDRESS2` | NVARCHAR | NULL | This column refers to line 2 of the address. |
| `ADDRESS3` | NVARCHAR | NULL | This column refers to line 3 of the address. |
| `CITY` | NVARCHAR | NULL | The city. |
| `STATE_PROVINCE` | NVARCHAR | NULL | The state or province. |
| `COUNTRY_ID` | NUMERIC | NULL | The country ID. It is a foreign key to the CMN_COUNTRIES table. |
| `POSTAL_CODE` | NVARCHAR | NULL | The postal code. |
| `PHONE_HOME` | NVARCHAR | NULL | The home phone number. |
| `PHONE_WORK` | NVARCHAR | NULL | The work phone number. |
| `PHONE_CELL` | NVARCHAR | NULL | The cell phone number. |
| `PHONE_FAX` | NVARCHAR | NULL | The fax number. |
| `PHONE_PAGER` | NVARCHAR | NULL | The pager number. |
| `URL` | NVARCHAR | NULL | The URL for this contact. |
| `IS_ACTIVE` | NUMERIC | NOT NULL | The active status. Values are - 0 = Inactive - 1 = Active |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this row. This refers [[CMN_SEC_USERS]].ID. |
| `EMAIL` | NVARCHAR | NULL | The email address of the contact. |
| `SMS_EMAIL` | NVARCHAR | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `LAST_UPDATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Related tables (same subject area)

[[BIZ_COM_SUP_PROPERTIES]], [[BIZ_OPP_GEN_PROPERTIES]], [[CAL_ACTION_ITEMS]], [[CLNTCLASS]], [[CLNTRESPONS]], [[CLNTSUPP]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PAC_MNT_PROJECTS]], [[PAC_MNT_RESOURCES]], [[PAC_PURGE_FINANCIAL_LIST]], [[PROJCNTRTS]], [[PROJREVISION]], [[PROJSTAFF]], [[PRTASK]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISKS_AND_ISSUES]], [[RIM_RISK_MITIGATIONS]], [[SRM_COMPANIES]], [[SRM_PROJECTS]]

---
title: CBK_GL_ALLOCATION
type: db-table
table: CBK_GL_ALLOCATION
columns: 22
audience: dev
domain: development
canonical: true
erds:
  - Chargebacks
fk_targets:
  - CMN_SEC_USERS
  - DEPARTMENTS
  - ENTITY
  - INV_INVESTMENTS
  - LOCATIONS
  - PAC_FOS_RESOURCE_CLASS
  - PRCHARGECODE
  - PRTYPECODE
  - TRANSCLASS
fk_sources:
  - CBK_ERRORS
  - CBK_GL_ALLOCATION_DETAIL
  - CBK_GL_TXNS
tags:
  - dev
  - schema
  - table
  - erd/chargebacks
---

# CBK_GL_ALLOCATION

> [!info] Description
> This table stores information on the GL allocation combinations for the rules.

## Subject areas (ERDs)
- [[_MOC - Chargebacks ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL |  |
| `ALLOCATION_CODE` | NVARCHAR | NOT NULL | A unique allocation code that can be auto-generated. |
| `ENTITY_ID` | NUMERIC | NULL | This refers to [[ENTITY]].ID and indicates the entity to which this rule is tied. |
| `LOCATION_ID` | NUMERIC | NULL | This refers to [[LOCATIONS]].ID. This only makes sense in the context of credits when a resource's location is matched against this location to find the best matching rule. |
| `DEPARTMENT_ID` | NUMERIC | NULL | This refers to [[DEPARTMENTS]].ID. This only makes sense in the context of credits, where this department is matched against the resource's department in order to give appropriate credit. |
| `RESOURCE_CLASS_ID` | NUMERIC | NULL | This refers to [[PAC_FOS_RESOURCE_CLASS]].ID and points to the resource class used in this combination. |
| `PRCHARGECODE_ID` | NUMERIC | NULL | This column refers to [[PRCHARGECODE]].EXTERNA_ID. This is one of the attributes based on which the users can define a rule. |
| `INVESTMENT_ID` | NUMERIC | NULL | This refers to [[INV_INVESTMENTS]].ID and identifies the investment that the rule is for. |
| `TABLE_NAME` | NVARCHAR | NULL | This is for future flexibility when the Chargebacks functionality will be extended to non-investments. |
| `UTILITY_CODE_1` | NVARCHAR | NULL | This refers to PRTIMEENTRY_USERLOV1. A utility code that can be used in defining a combination of attributes to setup time-varying distribution percentages. |
| `UTILITY_CODE_2` | NVARCHAR | NULL | This refers to PRTIMEENTTY_USERLOV2. This provides additional flexibility for defining rules on a variety of codes. |
| `TRANSCLASS` | NUMERIC | NULL | This refers to [[TRANSCLASS]].ID. This is one of the attributes based on which the user can define a credit rule. |
| `PRTYPECODE_ID` | NUMERIC | NULL | This column refers to [[PRTYPECODE]].PREXTERNALID. This gives the user more flexibility for defining rules on a variety of codes. |
| `STATUS_CODE` | NUMERIC | NULL | The status code. Values are: - ACTIVE = Active - INACTIVE = Inactive - ONHOLD = On Hold |
| `CHG_REM_TO_OVERHEAD` | NUMERIC | NOT NULL | This column indicates whether to charge the remainder to the overhead account or not. |
| `CHARGEBACK_TYPE` | NVARCHAR | NOT NULL | The type of chargeback. Values are: - STANDARD = Standard - INVESTMENT = Investment |
| `CHARGEBACK_SUBTYPE` | NVARCHAR | NOT NULL | The subtype of the chargeback. Values are: - CREDIT = Credit - DEBIT = Debit |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this record was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | The resource that last updated this record. |
| `COST_TYPE` | NVARCHAR | NULL | This refers to COST TYPE. Valid values are CAPITAL and OPERATING. |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `ENTITY_ID` | [[ENTITY]].`ID` | |
| `LOCATION_ID` | [[LOCATIONS]].`ID` | |
| `DEPARTMENT_ID` | [[DEPARTMENTS]].`ID` | |
| `RESOURCE_CLASS_ID` | [[PAC_FOS_RESOURCE_CLASS]].`ID` | |
| `PRCHARGECODE_ID` | [[PRCHARGECODE]].`EXTERNA_ID` | |
| `INVESTMENT_ID` | [[INV_INVESTMENTS]].`ID` | |
| `TRANSCLASS` | [[TRANSCLASS]].`ID` | |
| `PRTYPECODE_ID` | [[PRTYPECODE]].`PREXTERNALID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[CBK_ERRORS]] | `GL_ALLOCATION_ID` | `ID` |
| [[CBK_GL_ALLOCATION_DETAIL]] | `GL_ALLOCATION_ID` | `ID` |
| [[CBK_GL_TXNS]] | `ALLOCATION_ID` | `ID` |

## Related tables (same subject area)

[[BIZ_COM_PERIODS]], [[CBK_ERRORS]], [[CBK_ERROR_ARGUMENTS]], [[CBK_GL_ACCOUNT]], [[CBK_GL_ALLOCATION_DETAIL]], [[CBK_GL_TXNS]], [[CBK_GL_TXN_VALUES]], [[CBK_INVOICE]], [[CBK_SCALED_GL_TXNS]], [[DEPARTMENTS]], [[ENTITY]], [[PAC_CHG_BATCH_HEADERS]], [[PAC_FOS_RESOURCE_CLASS]], [[PAC_MNT_PROJECTS]], [[PPA_BILLINGS]], [[PPA_WIP]], [[PRCHARGECODE]], [[PRTYPECODE]], [[TRANSCLASS]]

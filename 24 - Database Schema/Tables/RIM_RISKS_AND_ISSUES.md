---
title: RIM_RISKS_AND_ISSUES
type: db-table
table: RIM_RISKS_AND_ISSUES
columns: 29
audience: dev
domain: development
canonical: true
erds:
  - ITIL
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - RIM_RISK_MITIGATIONS
tags:
  - dev
  - schema
  - table
  - erd/itil
---

# RIM_RISKS_AND_ISSUES

> [!info] Description
> This table stores the risks, issues, and change requests information.

## Subject areas (ERDs)
- [[_MOC - ITIL ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Uniquely identifies a row in the table. |
| `PK_ID` | NUMERIC | NOT NULL | A reference to the parent object ID. This refers to the ID of the table entered in the column TABLE_NAME. |
| `TABLE_NAME` | NVARCHAR | NOT NULL | A reference to the table name of the parent object of the risk, issue, or change request. |
| `RIM_RISK_ISSUE_CODE` | NVARCHAR | NOT NULL | The ID of the risk, issue, or change request. |
| `NAME` | NVARCHAR | NOT NULL | The name of the risk, issue, or change request. |
| `DESCRIPTION` | NVARCHAR | NULL | The description of the risk, issue. or change request. |
| `TYPE_CODE` | NVARCHAR | NOT NULL | Read-only. This column indicates if it is risk, issue, or change request. |
| `ASSIGNED_TO` | NUMERIC | NOT NULL | The owner of this risk, issue, or change request. This refers to SRM_RESOURCES and CMN_SEC_USERS.. |
| `CATEGORY_TYPE_CODE` | NVARCHAR | NULL | The category types. The list of values for lookup type RIM_CATEGORY_TYPE. |
| `PRIORITY_CODE` | NVARCHAR | NOT NULL | The priority. LOV - RIM_PRIORITY. Values are: - 0 = Low - 1 = Medium - 2 = High |
| `STATUS_CODE` | NVARCHAR | NOT NULL | The status. Values are: - 0 = Open - 1 = Work in progress - 2 = Closed - 3 = Resolved |
| `TARGET_RESOLUTION_DATE` | DATE | NULL | The targeted resolution date. |
| `IMPACT_DATE` | DATE | NULL | The date this risk, issue, or change request might impact. |
| `RESOLUTION` | NVARCHAR | NULL | A description of the resolution. |
| `RESOLVED_BY` | NUMERIC | NULL | The resource who resolved this risk, issue, or change request. This refers to [[CMN_SEC_USERS]].ID. |
| `RESOLVED_DATE` | DATE | NULL | The date the risks, issues, or change request was resolved. |
| `PARENT_RISK_ISSUE_ID` | NUMERIC | NULL | The parent ID of the risk, issue, or change request if this was created from one. This refers to [[RIM_RISKS_AND_ISSUES]].ID. |
| `PROBABILITY_ENUM` | NUMERIC | NULL | Indicates the degree of probability (i.e., the list of values for lookup type RIM_PROBABILITY). Values are: - 0 = Low - 1 = Medium - 2 = High |
| `IMPACT_ENUM` | NUMERIC | NULL | Indicates the degree of impact (i.e., the list of values for lookup type RIM_IMPACT). Values are: - 0 = Low - 1 = Medium - 2 = High |
| `RISK_THRESHOLD` | NUMERIC | NULL | The risk threshold. System-defined. |
| `APPROACH_CODE` | NVARCHAR | NULL | The approach to mitigate the risk (i.e., the list of values for lookup type RIM_APPROACH). Values are: - 0 = Watch - 1 = Accept - 2 = Transfer - 3 = Mitigate |
| `IMPACT_DESCRIPTION` | NVARCHAR | NULL | The impact description. |
| `ASSUMPTIONS` | NVARCHAR | NULL | The assumptions. |
| `RISK_SYMPTOMS` | NVARCHAR | NULL | The risk symptoms. |
| `DOCUMENT` | NUMERIC | NULL | A reference to the document ID. |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date and time this row was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the resource ([[CMN_SEC_USERS]].ID) that created this row. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | The date and time this row was last updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `RESOLVED_BY` | [[CMN_SEC_USERS]].`ID` | |
| `CREATED_BY` | [[CMN_SEC_USERS]].`ID` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[RIM_RISK_MITIGATIONS]] | `RIM_RISK_ID` | `ID` |

## Related tables (same subject area)

[[CAL_ACTION_ITEMS]], [[FIN_TXNS]], [[IMM_CATEGORIES]], [[IMM_INCIDENTS]], [[IMM_OBJECT_CATEGORIES]], [[INV_INVESTMENTS]], [[ITL_MAPPINGS]], [[ITL_OBJECT_ASSOCIATIONS]], [[PRTASK]], [[RIM_CHANGE_REQUESTS]], [[RIM_RISK_MITIGATIONS]], [[SRM_CONTACTS]], [[SRM_PROJECTS]]

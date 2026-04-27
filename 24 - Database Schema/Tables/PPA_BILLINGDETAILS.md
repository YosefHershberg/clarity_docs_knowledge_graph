---
title: PPA_BILLINGDETAILS
type: db-table
table: PPA_BILLINGDETAILS
columns: 11
audience: dev
domain: development
canonical: true
fk_targets:
  - CLNTCLASS
  - PAC_FOS_RESOURCE_CLASS
  - PROJCLASS
  - TRANSCLASS
  - WIPCLASS
tags:
  - dev
  - schema
  - table
---

# PPA_BILLINGDETAILS

> [!info] Description
> This table stores the financial details for billing rows that do not apply to work in progress (WIP) transactions (e.g., retainer bill or contract bill) that are used for general ledger (GL) posting and so on.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `TRANSNO` | NUMERIC | NOT NULL | This column uniquely identifies each transaction. |
| `LOCATIONID` | NVARCHAR | NOT NULL | The location where the activity for this transaction occurred. |
| `DEPARTCODE` | NVARCHAR | NOT NULL | The department where the activity for this transaction occurred. |
| `ENTITY` | NVARCHAR | NOT NULL | The entity where the activity for this transaction occurred. |
| `PROJECTTYPE` | NVARCHAR | NOT NULL | This column refers to the type of project. Values: - 0 = Internal - 1 = Standard - 2 = Retainer - 3 = Contract |
| `CLIENTCLASS` | NVARCHAR | NOT NULL | The classification of the client for which the activity of this transaction occurred. This refers to [[CLNTCLASS]].CLNTCLASS. |
| `PROJECTCLASS` | NVARCHAR | NOT NULL | This column refers to the classification of the project ([[PROJCLASS]].PROJCLASS) for which the activity of this transaction occurred. |
| `TRANSCLASS` | NVARCHAR | NOT NULL | The classification of the transaction. This column refers to [[TRANSCLASS]].TRANSCLASS. |
| `RESOURCE_CLASS` | NVARCHAR | NOT NULL | The resource class of the resource. This column refers to [[PAC_FOS_RESOURCE_CLASS]].RESOURCE_CLASS. |
| `WIPCLASS` | NVARCHAR | NOT NULL | The classification of the transaction for work in progress (WIP). This column refers to [[WIPCLASS]].WIPCLASS. |
| `BILLSCHEDULEDATE` | DATE | NOT NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `CLIENTCLASS` | [[CLNTCLASS]].`CLNTCLASS` | |
| `PROJECTCLASS` | [[PROJCLASS]].`PROJCLASS` | |
| `TRANSCLASS` | [[TRANSCLASS]].`TRANSCLASS` | |
| `RESOURCE_CLASS` | [[PAC_FOS_RESOURCE_CLASS]].`RESOURCE_CLASS` | |
| `WIPCLASS` | [[WIPCLASS]].`WIPCLASS` | |

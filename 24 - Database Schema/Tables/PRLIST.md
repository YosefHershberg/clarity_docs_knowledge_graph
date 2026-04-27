---
title: PRLIST
type: db-table
table: PRLIST
columns: 6
audience: dev
domain: development
canonical: true
erds:
  - General
fk_targets:
  - CMN_SEC_USERS
fk_sources:
  - PRLISTMEMBER
tags:
  - dev
  - schema
  - table
  - erd/general
---

# PRLIST

> [!info] Description
> This table stores each user's My Projects list and the list of activated methods.

## Subject areas (ERDs)
- [[_MOC - General ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. |
| `PRID` | NUMERIC | NULL | Internally generated key that is internally unique. |
| `USER_ID` | NUMERIC | NULL | The user who owns the list ("My Projects" only). This refers to [[CMN_SEC_USERS]].ID. |
| `PRNAME` | NVARCHAR | NULL | An internal identifier of the type of list. It may be either prHotList for "My Projects" or prMethodLoadList for activated methods. |
| `PRMODBY` | NVARCHAR | NULL | The name of the user who last modified this row. This refers to [[CMN_SEC_USERS]].USER_NAME. |
| `PRMODTIME` | DATE | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `USER_ID` | [[CMN_SEC_USERS]].`ID` | |
| `PRMODBY` | [[CMN_SEC_USERS]].`USER_NAME` | |

## Referenced by (inbound)

| From table | From column | Joins on local column |
| --- | --- | --- |
| [[PRLISTMEMBER]] | `PRLISTID` | `PRID` |

## Related tables (same subject area)

[[PRLISTMEMBER]]

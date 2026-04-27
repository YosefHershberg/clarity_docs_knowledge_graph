---
title: PRSUBPROJECT
type: db-table
table: PRSUBPROJECT
columns: 9
audience: dev
domain: development
canonical: true
erds:
  - Projects
fk_targets:
  - PRTASK
tags:
  - dev
  - schema
  - table
  - erd/projects
---

# PRSUBPROJECT

> [!info] Description
> This table stores information on tasks associated with another task. A subproject is an associative entity. This table describes the nature of the association.

## Subject areas (ERDs)
- [[_MOC - Projects ERD]]

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `PRUID` | NVARCHAR | NULL | This column refers to the universal ID. It ensures that this row does not have a duplicate row in another repository. For example, a resource in Repository A with the same prName, prExternalID, and prID cannot be confused with a resource in Repository B that has the same prName, prExternalID, and prID. Note: This value is no longer universally unique, but may be required by some client applications, such as Open Workbench. Avoid using in CA Clarity PPM. |
| `PRID` | NUMERIC | NULL | A persistent, unique identifier for each row in a table. System-entered enters when you create a new row. It is referenced by other tables using columns to refer to a specific row. For example, the PRTYPECODEID column in the PRRESOURCE table refers to a type code's PRID column. |
| `PRTASKID` | NUMERIC | NULL | Required. The task in the master project that hosts the subproject. This refers to the primary key [[PRTASK]].PRID. |
| `PRREFPROJECTID` | NUMERIC | NULL | Required. The subproject. This refers to the primary key PRJ_PROJECTS.PRID. |
| `PRREFTASKID` | NUMERIC | NULL | The referenced task in the subproject indicated by prrefprojectid. The column is Null if it is not an inter project dependency (IPD). This refers to the primary key [[PRTASK]].PRID. |
| `PRISREADONLY` | NUMERIC | NOT NULL | When set to yes (i.e. check box is selected), the subproject cannot be edited when editing the master project. |
| `PRISIPD` | NUMERIC | NOT NULL | This flag indicates that the subproject link represents an inter-project dependency (IPD). Values are: - 0 = Row indicates a nested subproject - 1 = Row indicates the IPD |
| `PRMODBY` | NVARCHAR | NULL | System-entered. The name of the logged-in user when this person modifies a row. For example, when a user modifies a timesheet or note. |
| `PRMODTIME` | DATE | NULL |  |

## Foreign keys (outbound)

| Local column | References | Notes |
| --- | --- | --- |
| `PRTASKID` | [[PRTASK]].`PRID` | |
| `PRREFTASKID` | [[PRTASK]].`PRID` | |

## Related tables (same subject area)

[[FIN_FINANCIALS]], [[INV_HIERARCHIES]], [[INV_INVESTMENTS]], [[INV_PROJECTS]], [[ODF_OBJECT_INSTANCE_MAPPINGS]], [[PAC_MNT_PROJECTS]], [[PRASSIGNMENT]], [[PRCHARGECODE]], [[PRCONSTRAINT]], [[PRDEPENDENCY]], [[PRJ_BASELINES]], [[PRJ_BASELINE_DETAILS]], [[PRJ_EV_HISTORY]], [[PRJ_PROJECT_DEPENDS]], [[PRJ_TASK_FORMULAS]], [[PRTASK]], [[PRTEAM]]

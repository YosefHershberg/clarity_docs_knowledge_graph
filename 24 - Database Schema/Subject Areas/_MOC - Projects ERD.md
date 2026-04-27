---
title: Projects ERD
type: moc
audience: pm
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/projects
---

# Projects ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_projects.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_projects.png

## Tables in this subject area

### Tables documented in this vault
- [[FIN_FINANCIALS]] — This table stores simple budget information for the investments.
- [[INV_HIERARCHIES]] — This table stores hierarchical relationship information between investments. It maps the parent to child relationships a…
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[INV_PROJECTS]] — This table stores CA Clarity PPM-defined project or program-specific data.
- [[PAC_MNT_PROJECTS]] — This satellite project table is used for financial processing.
- [[PRASSIGNMENT]] — This table stores data on tasks and resources who are assigned to fulfill those tasks.
- [[PRCHARGECODE]] — This table stores data on charge codes.
- [[PRCONSTRAINT]] — This table stores data project task constraint data. For example, a constraint may be used to start a given task on or b…
- [[PRDEPENDENCY]] — This table stores dependency relationships between project tasks and to enforce rules accordingly.
- [[PRJ_BASELINES]] — This table stores multiple baseline revisions for projects. Each row represents one baseline revision for one project.
- [[PRJ_BASELINE_DETAILS]] — This table stores baseline information for a project and some of its children. One row represents one baseline for one o…
- [[PRJ_EV_HISTORY]] — This table stores periodical earned value (EV) information for projects. This historical information can drive portlets …
- [[PRJ_PROJECT_DEPENDS]] — This table stores investment dependencies that are used by portfolio scenario generation.
- [[PRJ_TASK_FORMULAS]] — This table stores the estimating formulas for tasks. The estimating formulas on task comprise the estimating model for t…
- [[PRSUBPROJECT]] — This table stores information on tasks associated with another task. A subproject is an associative entity. This table d…
- [[PRTASK]] — This table stores tasks for projects.
- [[PRTEAM]] — This table is used to determine the resources allocated to which projects.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[ODF_OBJECT_INSTANCE_MAPPINGS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

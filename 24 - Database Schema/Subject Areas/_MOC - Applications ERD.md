---
title: Applications ERD
type: moc
audience: pm
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/applications
---

# Applications ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_applications.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_applications.png

## Tables in this subject area

### Tables documented in this vault
- [[FIN_FINANCIALS]] — This table stores simple budget information for the investments.
- [[INV_APPLICATIONS]] — This table stores CA Clarity PPM-specific data.
- [[INV_HIERARCHIES]] — This table stores hierarchical relationship information between investments. It maps the parent to child relationships a…
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[PAC_MNT_PROJECTS]] — This satellite project table is used for financial processing.
- [[PRASSIGNMENT]] — This table stores data on tasks and resources who are assigned to fulfill those tasks.
- [[PRCHARGECODE]] — This table stores data on charge codes.
- [[PRJ_BASELINES]] — This table stores multiple baseline revisions for projects. Each row represents one baseline revision for one project.
- [[PRJ_BASELINE_DETAILS]] — This table stores baseline information for a project and some of its children. One row represents one baseline for one o…
- [[PRJ_EV_HISTORY]] — This table stores periodical earned value (EV) information for projects. This historical information can drive portlets …
- [[PRTASK]] — This table stores tasks for projects.
- [[PRTEAM]] — This table is used to determine the resources allocated to which projects.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[ODF_OBJECT_INSTANCE_MAPPINGS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

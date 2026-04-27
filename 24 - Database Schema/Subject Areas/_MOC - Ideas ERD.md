---
title: Ideas ERD
type: moc
audience: pm
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/ideas
---

# Ideas ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_ideas.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_ideas.png

## Tables in this subject area

### Tables documented in this vault
- [[FIN_FINANCIALS]] — This table stores simple budget information for the investments.
- [[INV_HIERARCHIES]] — This table stores hierarchical relationship information between investments. It maps the parent to child relationships a…
- [[INV_IDEAS]] — This table stores idea-specific data for an idea investment.
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[PRASSIGNMENT]] — This table stores data on tasks and resources who are assigned to fulfill those tasks.
- [[PRCHARGECODE]] — This table stores data on charge codes.
- [[PRJ_EV_HISTORY]] — This table stores periodical earned value (EV) information for projects. This historical information can drive portlets …
- [[PRTASK]] — This table stores tasks for projects.
- [[PRTEAM]] — This table is used to determine the resources allocated to which projects.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[CMN_SEC_USERS]]
- [[ODF_OBJECT_INSTANCE_MAPPINGS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

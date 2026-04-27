---
title: Links and Notes ERD
type: moc
audience: everyone
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/links-and-notes
---

# Links and Notes ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_links_and_notes.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_links_and_notes.png

## Tables in this subject area

### Tables documented in this vault
- [[PRLINK]] — This table stores the attributes for a link
- [[PRNOTE]] — This table stores data on notes.
- [[PRTASK]] — This table stores tasks for projects.
- [[PRTIMEENTRY]] — This table stores data viewed on time sheets (i.e., pending actuals). Each row in this table represents an entry on the …
- [[PRTIMESHEET]] — This table stores data viewed on timesheets.
- [[SRM_COMPANIES]] — This table stores the master companies. A row is created in this table when a new company is added.
- [[SRM_RESOURCES]] — This table stores the master resources table. A row is created in this table when a new resource is added.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[SRM_PROJECTS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

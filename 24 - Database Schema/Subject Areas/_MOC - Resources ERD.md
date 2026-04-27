---
title: Resources ERD
type: moc
audience: rm
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/resources
---

# Resources ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_resources.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_resources.png

## Tables in this subject area

### Tables documented in this vault
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[INV_PROJECTS]] — This table stores CA Clarity PPM-defined project or program-specific data.
- [[PRASSIGNMENT]] — This table stores data on tasks and resources who are assigned to fulfill those tasks.
- [[PRCALENDAR]] — This table stores data on calendars.
- [[PRJ_RESOURCES]] — This table is used to generate lists of resources and to present information on assignments in various views, such as ti…
- [[PRJ_ROLES_FLAT]] — This table stores flattened role hierarchy relationships. This table holds one row for every child-to-ancestor relations…
- [[PRTASK]] — This table stores tasks for projects.
- [[PRTEAM]] — This table is used to determine the resources allocated to which projects.
- [[PRTYPECODE]] — This table stores the names of type codes.
- [[RSM_REQ_REQUISITIONS]] — This table stores the resource requisitions created for staffing resources to projects.
- [[RSM_REQ_RESOURCES]] — This table stores the mapping of resources (RESOURCE_ID) to requisitions (REQUSITION_ID).This is the source table for th…
- [[RSM_SKILLS]] — This table stores information about all skills in CA Clarity PPM.
- [[RSM_SKILLS_ASSOCIATIONS]] — This table stores associate skills with resources.
- [[SRM_RESOURCES]] — This table stores the master resources table. A row is created in this table when a new resource is added.

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

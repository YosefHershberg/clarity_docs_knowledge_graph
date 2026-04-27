---
title: Capacity ERD
type: moc
audience: rm
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/capacity
---

# Capacity ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_capacity.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_capacity.png

## Tables in this subject area

### Tables documented in this vault
- [[CAP_SCENARIOS]] — This table stores the information on the scenarios owned by users.
- [[CAP_SCENARIO_ASSIGNMENTS]] — This table stores information in rows copied from the PRASSIGNMENT table when investments are added to a scenario. Any c…
- [[CAP_SCENARIO_MEMBERS]] — This table stores information on the individual members of a scenario.
- [[CAP_SCENARIO_ROLES]] — This table stores information about roles added to a scenario.
- [[CAP_SCENARIO_TASKS]] — This table stores information in rows copied from the PRTASK table when investments are added to a scenario. Any changes…
- [[CAP_SCENARIO_TEAM]] — This table stores information in rows copied from the PRTEAM table when investments are added to a scenario. Any changes…
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[PRASSIGNMENT]] — This table stores data on tasks and resources who are assigned to fulfill those tasks.
- [[PRTASK]] — This table stores tasks for projects.
- [[PRTEAM]] — This table is used to determine the resources allocated to which projects.

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

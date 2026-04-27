---
title: Datamart ERD
type: moc
audience: admin
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/datamart
---

# Datamart ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_datamart.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_datamart.png

## Tables in this subject area

### Tables documented in this vault
- [[NBI_CFG_OBS_ASSIGNMENTS]] — This table stores the mappings of organizational breakdown structure (OBS) types to specific columns in the datamart pro…
- [[NBI_CFG_STOPLIGHT_QUERIES]] — This table stores the stoplight definitions whose values are stored in NBI_PROJECT_CURRENT_FACTS.
- [[NBI_DIM_CALENDAR_TIME]] — This dimension table stores calendar days, weeks, months, quarters and years. It is automatically populated when the dat…
- [[NBI_DIM_FISCAL_TIME]] — This dimension table stores fiscal periods, quarters and years. It is populated by extracting MONTHLY periods from BIZ_C…
- [[NBI_DIM_OBS]] — This dimension table stores organizational breakdown structure (OBS) unit information. This table is populated by extrac…
- [[NBI_DIM_OBS_FLAT]] — This table stores parent-child pairs for organizational breakdown structure (OBS) units. There are as many entries for a…
- [[NBI_FM_PROJECT_TIME_SUMMARY]] — This table stores summarized time-bucket financial project management (FM) information. No project detail is available f…
- [[NBI_FM_PT_FACTS]] — This table stores time-buckets for financial project management (FM) information. This table stores one row for each pro…
- [[NBI_PM_PROJECT_TIME_SUMMARY]] — This table stores summarized time-bucket for project management (PM) information. No project detail is available from th…
- [[NBI_PM_PT_FACTS]] — This table stores time-bucket information for project management (PM). This table stores one row for each project per we…
- [[NBI_PRJ_MATRIX_DATES]] — This table stores the project, resources working on the project, and contiguous date ranges covering the resource's invo…
- [[NBI_PROJECT_CURRENT_FACTS]] — This table stores both financial and project management information in as-of-today form. There is one row for each activ…
- [[NBI_PROJECT_FORECAST]] — This table stores budgeted cost and benefit financial planning information for each project.
- [[NBI_PRT_FACTS]] — This table stores project, resource and task information for each project on a daily basis. Questions like "What is the …
- [[NBI_RESOURCE_CURRENT_FACTS]] — This table stores up-to-date information about all resources in the system.
- [[NBI_RESOURCE_TIME_SUMMARY]] — This table stores summarized time-bucket resource management information. No resource detail is available in this table.…
- [[NBI_RT_FACTS]] — This table stores daily resource information. It stores one row for each resource for each calendar week and month.
- [[NBI_RUN_LOGS]] — This table stores messages logged during the datamart extraction. It can be used to determine where a job failed.
- [[NBI_R_FACTS]] — This table stores daily resource information. It stores one row for each resource for each day.
- [[PRASSIGNMENT]] — This table stores data on tasks and resources who are assigned to fulfill those tasks.
- [[PRJ_BASELINE_DETAILS]] — This table stores baseline information for a project and some of its children. One row represents one baseline for one o…
- [[PRJ_BLB_SLICEREQUESTS]] — This table stores resource time slice requests. Those requests are used to extract information from database columns tha…
- [[PRJ_BLB_SLICES]] — This table stores resource timeslice/value pairs that correspond to a slice request and to a specified row of the approp…
- [[PRJ_RESOURCES]] — This table is used to generate lists of resources and to present information on assignments in various views, such as ti…
- [[PRTEAM]] — This table is used to determine the resources allocated to which projects.
- [[SRM_RESOURCES]] — This table stores the master resources table. A row is created in this table when a new resource is added.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[SRM_PROJECTS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

---
title: Departments ERD
type: moc
audience: finance
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/departments
---

# Departments ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_departments.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_departments.png

## Tables in this subject area

### Tables documented in this vault
- [[CLNTSUPP]] — This table stores the supplemental customer information. This information is used for financial processing.
- [[DEPARTMENTS]] — This table stores the department details for financial properties.
- [[DPT_KEYMETRICS]] — This table stores the metrics by which a particular subscription is measured. Based on the nature of the subscription, u…
- [[DPT_SUBSCRIPTIONS]] — This table stores the relationship of a department subscribing to a service, thus creating a subscription. A subscriptio…
- [[ENTITY]] — The unique entity code.
- [[FIN_FINANCIALS]] — This table stores simple budget information for the investments.
- [[LOCATIONDEPT]] — This table stores the department to locations assignment.
- [[LOCATIONS]] — This table stores the financial locations.
- [[PAC_MNT_PROJECTS]] — This satellite project table is used for financial processing.
- [[PAC_MNT_RESOURCES]] — This table stores the financial properties of resources.
- [[PRJ_OBS_TYPES]] — This table stores the list of available organizational breakdown structure (OBS) hierarchies.
- [[PRJ_OBS_UNITS]] — This table stores the actual organizational breakdown structure (OBS) units including the parent mapping that gives the …

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[ODF_OBJECT_INSTANCE_MAPPINGS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

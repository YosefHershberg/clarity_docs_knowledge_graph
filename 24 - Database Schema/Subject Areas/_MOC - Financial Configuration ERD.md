---
title: Financial Configuration ERD
type: moc
audience: finance
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/financial-configuration
---

# Financial Configuration ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_financial_configuration.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_financial_configuration.png

## Tables in this subject area

### Tables documented in this vault
- [[BIZ_COM_SUP_PROPERTIES]] — This table stores the supplemental information for the company. Note that main information is stored in SRM_COMPANIES.
- [[BIZ_OPP_GEN_PROPERTIES]] — This table stores general information for opportunity.
- [[CLNTCLASS]] — The unique name of the company class.
- [[CLNTRESPONS]] — This table stores the authorized resources for a company. It has a combination of company and resource codes.
- [[CLNTSUPP]] — This table stores the supplemental customer information. This information is used for financial processing.
- [[PAC_MNT_PROJECTS]] — This satellite project table is used for financial processing.
- [[PAC_MNT_RESOURCES]] — This table stores the financial properties of resources.
- [[PAC_PURGE_FINANCIAL_LIST]] — This table stores purged financial information.
- [[PROJCNTRTS]] — This table holds information related to project contracts.
- [[PROJREVISION]] — This table stores the revision history of projects.
- [[PROJSTAFF]] — This table is deprecated and should no longer be used.
- [[SRM_COMPANIES]] — This table stores the master companies. A row is created in this table when a new company is added.
- [[SRM_CONTACTS]] — This table stores contact information. It can be used to link to any other table through the PRINCIPAL columns.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[SRM_PROJECTS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

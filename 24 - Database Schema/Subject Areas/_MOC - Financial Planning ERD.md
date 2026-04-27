---
title: Financial Planning ERD
type: moc
audience: finance
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/financial-planning
---

# Financial Planning ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_financial_planning.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_financial_planning.png

## Tables in this subject area

### Tables documented in this vault
- [[BIZ_COM_PERIODS]] — This table stores the fiscal time periods set up by the user.
- [[DEPARTMENTS]] — This table stores the department details for financial properties.
- [[ENTITY]] — The unique entity code.
- [[FIN_BENEFIT_PLAN_DETAILS]] — This table stores the time-sliced and monetary details of the benefit plans.
- [[FIN_COST_PLAN_DETAILS]] — This table stores the time-sliced and monetary details of the cost plans or budget plans.
- [[FIN_PLANS]] — This table stores the properties of the plans in the system.
- [[FIN_PLAN_DEFAULTS]] — This table stores the plan defaults for an entity.
- [[FIN_PLAN_DEFAULT_DETAILS]] — This table stores the default plan details.
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[LOCATIONS]] — This table stores the financial locations.
- [[PRCHARGECODE]] — This table stores data on charge codes.
- [[PRTYPECODE]] — This table stores the names of type codes.
- [[SRM_RESOURCES]] — This table stores the master resources table. A row is created in this table when a new resource is added.
- [[TRANSCLASS]] — This column refers to the code for the transaction class.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[CMN_LOOKUPS]]
- [[ODF_MULTI_VALUED_LOOKUPS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

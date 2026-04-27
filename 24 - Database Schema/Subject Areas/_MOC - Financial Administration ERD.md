---
title: Financial Administration ERD
type: moc
audience: finance
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/financial-administration
---

# Financial Administration ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_financial_administration.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_financial_administration.png

## Tables in this subject area

### Tables documented in this vault
- [[APMASTER]] — This table stores vendor information.
- [[BIZ_COM_PERIODS]] — This table stores the fiscal time periods set up by the user.
- [[CLNTSUPP]] — This table stores the supplemental customer information. This information is used for financial processing.
- [[DEPARTMENTS]] — This table stores the department details for financial properties.
- [[ENTITY]] — The unique entity code.
- [[LOCATIONDEPT]] — This table stores the department to locations assignment.
- [[LOCATIONS]] — This table stores the financial locations.
- [[NAMEOPTIONS]] — This table stores the CA Clarity PPM-wide options for financial processing.
- [[PAC_BATCH_OUTPUT]] — This table stores the batch output file details.
- [[PAC_CHG_BATCH_HEADERS]] — This table stores batch posting information.
- [[PAC_CHG_TRANSACTIONS]] — This table is deprecated and should no longer be used.
- [[PAC_FOS_RESOURCE_CLASS]] — This table stores resource class information.
- [[PAC_FRC_FORECAST_DETAILS]] — This table stores details for each line item of a plan during a particular period. This table is obsolete for 8.0 and la…
- [[PAC_FRC_FORECAST_PROPERTIES]] — This table stores the general properties for a project plan.This table is obsolete for 8.0 and later releases.
- [[PAC_MNT_PROJECTS]] — This satellite project table is used for financial processing.
- [[PAC_MNT_RESOURCES]] — This table stores the financial properties of resources.
- [[PPA_WIP]] — This table stores all primary transactions (Labor, Materials, Equipment, and Expense).
- [[PROJCLASS]] — The code of identifier for the project class.
- [[TRANSCLASS]] — This column refers to the code for the transaction class.
- [[UNITMEASURE]] — This table stores unit of measurement information.
- [[WIPCLASS]] — This column refers to the identifier (or code) for this WIP class.

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

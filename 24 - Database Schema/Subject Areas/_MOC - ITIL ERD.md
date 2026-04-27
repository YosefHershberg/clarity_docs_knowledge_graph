---
title: ITIL ERD
type: moc
audience: admin
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/itil
---

# ITIL ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_itil.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_itil.png

## Tables in this subject area

### Tables documented in this vault
- [[CAL_ACTION_ITEMS]] — This table stores information on the master table for action items.
- [[FIN_TXNS]] — This table stores incident related effort entries from both XOG and timesheets. Processed entries populate the FIN_POSTE…
- [[IMM_CATEGORIES]] — This table stores the various incident categories.
- [[IMM_INCIDENTS]] — This table stores the incidents logged in the system.
- [[IMM_OBJECT_CATEGORIES]] — This table stores the mapping between incident categories and investment objects. This table specifies which investment …
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[ITL_MAPPINGS]] — This table stores the cross mapping between urgency and the impact to arrive at a calculated priority.
- [[ITL_OBJECT_ASSOCIATIONS]] — This table stores the association between incidents, risks, issues, and the tasks or projects created for them.
- [[PRTASK]] — This table stores tasks for projects.
- [[RIM_CHANGE_REQUESTS]] — This table stores extra information for change requests.
- [[RIM_RISKS_AND_ISSUES]] — This table stores the risks, issues, and change requests information.
- [[RIM_RISK_MITIGATIONS]] — This table stores mitigations for risks.
- [[SRM_CONTACTS]] — This table stores contact information. It can be used to link to any other table through the PRINCIPAL columns.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[SRM_PROJECTS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

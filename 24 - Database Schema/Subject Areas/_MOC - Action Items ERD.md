---
title: Action Items ERD
type: moc
audience: everyone
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/action-items
---

# Action Items ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_action_items.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_action_items.png

## Tables in this subject area

### Tables documented in this vault
- [[CAL_ACTION_ITEMS]] — This table stores information on the master table for action items.
- [[CAL_ACTION_ITEM_ASSIGNEES]] — This table stores information for action item assignees.
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[SRM_RESOURCES]] — This table stores the master resources table. A row is created in this table when a new resource is added.

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

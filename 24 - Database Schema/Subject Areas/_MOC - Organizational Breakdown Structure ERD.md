---
title: Organizational Breakdown Structure ERD
type: moc
audience: admin
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/organizational-breakdown-structure
---

# Organizational Breakdown Structure ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_obs.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_obs.png

## Tables in this subject area

### Tables documented in this vault
- [[OBS_UNITS_FLAT_BY_MODE]] — This table stores all the possible straight line links from an OBS Unit via the parent and child relationships. It also …
- [[PRJ_OBS_ASSOCIATIONS]] — This table stores the associations between organizational breakdown structure (OBS) units and objects (such as resources…
- [[PRJ_OBS_LABELS]] — This table is obsolete. Use the NBI_DIM_OBS table, instead. This denormalized table was used for reporting and stores th…
- [[PRJ_OBS_LEVELS]] — This table stores the mapping of the tree depth to a description. This table is primarily for use in reporting.
- [[PRJ_OBS_OBJECT_TYPES]] — This table stores the list of object types that may be associated with an organizational breakdown structure (OBS).
- [[PRJ_OBS_REPORTING]] — This table is obsolete. Use the NBI_DIM_OBS table, instead. This denormalized table was used for reporting and stores th…
- [[PRJ_OBS_TYPES]] — This table stores the list of available organizational breakdown structure (OBS) hierarchies.
- [[PRJ_OBS_UNITS]] — This table stores the actual organizational breakdown structure (OBS) units including the parent mapping that gives the …
- [[PRJ_OBS_UNITS_FLAT]] — This table stores the flattened organizational breakdown structure (OBS) relationship. It holds one row for each child-t…

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

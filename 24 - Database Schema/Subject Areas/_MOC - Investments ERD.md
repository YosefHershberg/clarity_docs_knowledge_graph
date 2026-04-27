---
title: Investments ERD
type: moc
audience: pm
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/investments
---

# Investments ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_investments.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_investments.png

## Tables in this subject area

### Tables documented in this vault
- [[INV_FLAT_HIERARCHIES]] — This denormalized table stores data based on INV_HIERARCHIES. The flattened table contains parent_id and child_id entrie…
- [[INV_HIERARCHIES]] — This table stores hierarchical relationship information between investments. It maps the parent to child relationships a…
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[INV_INVESTMENT_ALLOCS_FLAT]] — This table stores hierarchical data (that is, flattened allocations). In a hierarchical tree, it holds the allocations b…

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[ODF_OBJECT_INSTANCE_MAPPING]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

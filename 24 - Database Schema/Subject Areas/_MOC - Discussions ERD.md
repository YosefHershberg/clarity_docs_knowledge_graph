---
title: Discussions ERD
type: moc
audience: everyone
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/discussions
---

# Discussions ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_discussions.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_discussions.png

## Tables in this subject area

### Tables documented in this vault
- [[CLB_DMS_FILES]] — This table stores all attributes of a document stored in Document Manager.
- [[NTD_CATEGORIES]] — This table stores discussion categories.
- [[NTD_MESSAGES]] — This table stores the discussion message.
- [[NTD_TOPICS]] — This table stores the discussion topic.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[CMN_SEC_GROUPS]]
- [[CMN_SEC_OBJECTS]]
- [[CMN_SEC_USERS]]
- [[RSM_REQ_REQUESTS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

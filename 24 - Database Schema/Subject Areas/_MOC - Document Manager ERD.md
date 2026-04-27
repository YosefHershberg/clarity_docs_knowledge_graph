---
title: Document Manager ERD
type: moc
audience: everyone
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/document-manager
---

# Document Manager ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_document_manager.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_document_manager.png

## Tables in this subject area

### Tables documented in this vault
- [[CLB_DMS_FILES]] — This table stores all attributes of a document stored in Document Manager.
- [[CLB_DMS_FILE_STORE]] — This table stores documents as blobs in the database.
- [[CLB_DMS_FLAT_HIERARCHY]] — This table stores information about the tree structure in the file directory tree. Instead of performing a tree search o…
- [[CLB_DMS_FOLDERS]] — This table stores all attributes related to the folder.
- [[CLB_DMS_HISTORIES]] — This table stores document access history.
- [[CLB_DMS_VERSIONS]] — This table stores a version of a particular file.
- [[PRTASK]] — This table stores tasks for projects.
- [[SRM_COMPANIES]] — This table stores the master companies. A row is created in this table when a new company is added.
- [[XDM_TSK_ITEM_ASSOCIATION]] — This table stores the association between a XDM form and a task. There could be multiple tasks associated with a single …

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[CMN_SEC_GROUPS]]
- [[CMN_SEC_USERS]]
- [[SRM_PROJECTS]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

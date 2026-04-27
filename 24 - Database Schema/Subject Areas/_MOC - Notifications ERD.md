---
title: Notifications ERD
type: moc
audience: admin
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/notifications
---

# Notifications ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_notifications.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_notifications.png

## Tables in this subject area

### Tables documented in this vault
- [[CLB_NOTIFICATIONS]] — This table stores notifications from all system components for all the users. This column is used to show the list of no…
- [[CLB_NOTIFICATION_ASSOCS]] — This table stores notifications associations with various principals.
- [[CLB_NOTIFICATION_DEFS]] — This table stores notification definitions.
- [[CLB_NOTIFICATION_PREFS]] — This table stores notification preferences.
- [[CLB_PROJECT_GROUP_KEYS]] — This table stores information related to the collaboration groups (i.e., participant, system, and project) related to a …
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns

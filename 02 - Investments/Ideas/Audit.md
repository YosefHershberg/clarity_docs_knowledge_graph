---
title: Audit Module for Ideas
tags:
  - admin
aliases:
  - Idea Audit
  - Ideas Audit Trail
canonical: true
audience: pm
domain: investments
---

# Audit Module for Ideas

## Overview

The Audit module for ideas tracks all changes made to an idea record, providing a complete change history including who changed what, when. This enables accountability and supports compliance requirements for the idea approval process.

## What is Captured

- Field changes (old value → new value)
- Record creation and deletion events
- User who made the change
- Date and time of each change

## Prerequisites

- The Audit module must be **enabled in the Idea Blueprint** by an administrator
- Specific attributes to audit must be **configured in Classic PPM** under the object's audit settings
- Users need at least **View** access to the idea to see audit data

## Using the Audit Grid

### Viewing the Audit Trail

1. Open the relevant idea
2. Click the **Audit** module (configured in the blueprint)
3. The grid displays all tracked changes for the idea

### Filtering Audit Records

- **Changed Date** — Default filter: last 10 days. Adjust the date range for broader or narrower views.
- **Attribute** — Filter to see changes to a specific field (e.g., Status, Manager, Priority)
- **User** — Filter by the user who made the change
- **Operation Type** — Filter by Create, Update, or Delete

### Exporting Audit Data

- Use **Export to CSV** to extract audit records for external analysis or compliance reporting

> [!warning]
> The Audit module can accumulate large amounts of data for active ideas. Always apply date filters to improve performance when loading the grid.

## Audit Grid Columns

| Column | Description |
|--------|-------------|
| Changed Date | Timestamp when the change occurred |
| Attribute | The field that was modified |
| Old Value | The previous value before the change |
| New Value | The new value after the change |
| Changed By | The user who made the change |
| Operation | Create, Update, or Delete |

## Configuration

Administrators configure the Audit module in two places:

1. **Idea Blueprint** (`12 - Administration > Blueprints`) — Add the Audit module to the idea blueprint to make it visible to users
2. **Classic PPM** — Configure which specific attributes are subject to auditing under the Idea object's settings

> [!note]
> Not all fields are auditable by default. An administrator must explicitly enable auditing for each attribute in Classic PPM.

## Limitations

- The Audit module captures changes made in **Clarity (new UX)** and **Classic PPM**
- Changes made via **GEL scripts, XOG imports, or direct database updates** may not appear in the audit trail depending on configuration
- The Audit grid is **read-only** — no editing is possible from within this module

## Related

- [[Getting Started]] — Idea prerequisites and blueprint overview
- [[_MOC Administration|Administration]]
- [[_MOC Investments]]

%%Source: p539-544%%

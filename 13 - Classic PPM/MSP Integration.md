---
title: MSP Manage Projects with Microsoft Project
tags:
  - howto
  - classic
aliases:
  - MSP Integration
source_pages: 1-200
---
# MSP: Manage Projects with Microsoft Project

Classic PPM integrates with Microsoft Project (MSP) to manage, schedule, and track projects using either tool. **Schedule Connect** provides a bidirectional connection between Classic PPM and MSP, synchronizing changes in both products.

> [!WARNING]
> After you schedule a project plan in one scheduler, do not open it in another scheduler for editing. Mixing the scheduling algorithms of Open Workbench and Microsoft Project can lead to data integrity issues.

## Benefits of Integrating with Microsoft Project

When you integrate MSP with Classic PPM, Microsoft Project becomes one of several integrated tools within the larger enterprise environment, providing:

- Resource management
- Time tracking
- Reporting
- Consistent scheduling
- Repeatable processes

## Key integration capabilities:

- Open, review, and edit Classic PPM projects in Microsoft Project
- Save projects created or updated in MSP back to Classic PPM
- Allocate Classic PPM resources to projects open in MSP
- Map custom fields, assign resources to tasks, and create baselines
- Improved performance: all data is sent in one block via XML
- SSL and secure proxy server support without opening special ports

## Legacy vs. New Microsoft Project Driver

The MSP Interface installer offers two options: **Microsoft Project Legacy Interface** (OLE) and **Microsoft Project Interface** (new XML driver). Key differences when upgrading to the new driver:

- Calendar changes in MSP are no longer saved to the MPP file; edit calendars in Classic PPM instead
- Resource pools are no longer available for master projects; all resources appear on the master resource sheet
- Custom views are no longer saved in the MPP file; use the `global.mpt` file instead

> [!TIP]
> Create custom views (and their associated tables) in the `global.mpt` file. When you open a project from Classic PPM, you can select the customized view.

- **Save As** no longer allows overwriting an existing project; the new driver applies the next sequential auto-numbered ID
- Elapsed Duration values are preserved between MSP and Classic PPM
- `Number1` and `Number2` fields are no longer mapped to Pending ETC and Pending Actual; add these mappings manually using any number field in MSPFIELD
- Tasks not pinned through a dependency that don't start on the project start date require a defined constraint; the new driver does not auto-add constraints

> [!WARNING]
> When upgrading from the legacy MSP driver to the new XML driver, values on unmapped fields may be lost. Any unmapped field values in the MPP file from the legacy driver are not part of the project when first exported with the new driver.
Values entered on unmapped fields after the first export are saved normally.

## Working Copies of Projects

A **working copy** lets you update a project offline. When you open and save a project as a file, Microsoft Project creates a working copy. The next time you save, MSP assumes you are saving back to Classic PPM.

---

# Microsoft Project (MSP) Integration

> [!info] This topic has been split into focused notes for easier navigation.

- [[MSP Integration Setup]] — Benefits, drivers, working copies, installation and configuration
- [[MSP Synchronization]] — Syncing projects, resources, and tasks between MSP and Classic PPM
- [[MSP Field Mappings]] — Default field mappings, data exchange, and administration

---
**Parent:** [[_MOC Classic PPM|Classic PPM]]

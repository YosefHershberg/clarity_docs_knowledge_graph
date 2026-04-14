---
title: Audit in Hierarchies
tags:
  - howto
  - admin
  - hierarchies
aliases:
  - Hierarchy Audit
  - Hierarchy Audit Trail
  - Hierarchy Change Tracking
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Audit in Hierarchies

The **Audit module** in Hierarchies provides a change log for the Hierarchy object, tracking who made changes, what was changed, and when. This supports accountability, compliance, and troubleshooting for hierarchy structures.

> [!info] Scope of Hierarchy Audit
> The Audit module tracks changes to **Hierarchy object attributes only**. If you update investment-specific data from within a hierarchy (e.g., editing a project field in the Cross-Object Grid), those changes are recorded in the **Audit module of the relevant investment workspace** — not the Hierarchy Audit module.

---

## Key Benefits of Auditing Hierarchies

- **Change Tracking and Accountability**: Know who changed hierarchy structures, what was changed, and when — ensuring accountability for modifications to organizational frameworks.
- **Compliance and Governance**: Provides documentation that hierarchical structures are properly maintained and that changes follow approved processes.
- **Troubleshooting**: When issues arise with a hierarchy, the audit trail identifies what changed and who made the change, allowing for faster resolution.

---

## Audit Grid Column Names

The Audit module uses Clarity-specific column names that differ from their Classic PPM equivalents:

| Clarity Audit Column | Classic PPM Audit Column |
|----------------------|--------------------------|
| Name | Object Name |
| Object ID | Object |
| Record | Name |
| Parent | Parent Name |
| Changed Date | Date |
| Attribute | Attribute |
| Attribute ID | Attribute Code |
| Changed By | Changed By |
| Operation | Operation |
| Old Value | Old Value |
| New Value | New Value |
| Record ID, Parent ID, Grandparent, Grandparent ID | Not visible in Classic |

> [!note]
> The fields **Record ID**, **Parent ID**, **Grandparent**, and **Grandparent ID** are new Clarity columns with no Classic PPM equivalent. These support richer context for understanding hierarchy-specific changes.

---

## Verify Prerequisites

Before using the Audit module in Hierarchies, ensure the following permissions are in place:

### Required User Access Right

- **Audit Trail - View - All**: Allows the user to view the Audit Trail for any object in Classic PPM and the Audit module for any object in Clarity.

### Administrator Configuration

To grant users access to both the Administration Audit tile **and** the Audit module in individual workspaces:

| Location | Access Right Required |
|----------|-----------------------|
| Administration → Audit tile | **Administration - Audit - Navigate** |
| Audit module within any workspace (including Hierarchy) | **Audit Trail - View - All** |

> [!note]
> The Audit module is available for all Blueprints and all API-enabled Objects. Besides Hierarchies, the Audit module is also available for: Agreements, Custom Investment Types, Custom Objects, Level 3 Sub-Objects (OOTB and Custom), Ideas, Pages, Projects, Roadmaps, Plans, Cost Plans / Cost Plan Details, Budget Plans / Budget Plan Details, and Benefit Plans / Benefit Plan Details.

---

## View Audit Details

1. Open the Hierarchy workspace.
2. Click **Audit**. The audit grid loads with the standard Clarity grid toolset.

Available grid capabilities in the Audit module:
- **Column configuration** — Add or remove columns from the grid
- **Details flyout** — View full record details in a panel
- **Saved views** — Save and share audit grid configurations
- **Robust filtering** — Filter by attribute, date, changed by, operation, etc.
- **Group By** — Group audit records by any column
- **Export to CSV** — Export audit data for reporting

> [!important] Standard View Filter (Changed Date)
> The Audit module includes a built-in **Standard View** filter:
> - **Changed Date** = 10 Days Before To Current Date
>
> This filter **cannot be removed**, but you can modify the values. This filter exists because hierarchies can accumulate very large amounts of audit data, and querying without any date filter can result in long load times or timeouts.

---

## Key Points to Remember

> [!note] Behavior Differences: Clarity vs. Classic
> When comparing the Clarity Audit module to Classic PPM:
> - In **Clarity**: When filtering to display sub-object details (e.g., a Risk record), the Parent information (e.g., the investment it belongs to) is **automatically populated** in the results.
> - In **Classic PPM**: You must select the Parent Object (e.g., Project) first, and sub-object (e.g., Risk) audit information is included within that parent's results.

> [!note] Resource Attribute on Assignment Object
> When enabling the **Resource** attribute on the Assignment object for Audit, ensure that change, insert, and delete operations are configured in Classic PPM. When properly configured, you will see Insert and Delete operations in the Audit grid indicating a resource was replaced on an assignment.

> [!warning] Known Limitations (as of Clarity 16.1.1)
> The following capabilities are **not supported** in the Clarity Audit grid:
> - Sort using the **Attribute** column.
> - Display scalar values (Totals) using FTE, Hours, or Days settings (values are shown in seconds).
> - Ability to configure the Audit module for **Plans**.
> - Include audit information for stock sub-sub-objects (e.g., Assignments, To Dos) and custom sub-sub-objects in the workspace Audit module.
>
> **Workaround for sub-sub-object audit**: View audit details for these objects under **Clarity → Administration → Audit**.

> [!note] Details Flyout and Global Date Settings
> You must close and reopen the Details Flyout to apply Global Date setting options to the **Record** field.

---

## Related Notes

- [[Create and Edit Hierarchies]] — Hierarchy setup and access rights overview
- [[Cross-Object Investment Grid]] — Investment-level data editing within hierarchies
- [[_MOC Hierarchies]] — Back to the Hierarchies MOC

%%Source: p2162–2241%%

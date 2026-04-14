---
title: Audit Log
tags:
  - admin
  - reference
aliases:
  - Audit
  - Project Audit
  - Audit Trail
  - Change History
canonical: true
audience: pm
domain: projects
---

# Audit Log

The **Audit** module in a project displays a chronological log of all significant changes made to the project. It provides full traceability of who changed what, when, and what the previous value was. The audit log is read-only and cannot be edited or deleted.

%%Source: p1218-1222%%

---

## Overview

The audit log is critical for:
- **Compliance and governance**: Demonstrating that changes followed proper procedures
- **Troubleshooting**: Understanding when and why a field value changed
- **Accountability**: Identifying who made a specific change
- **Post-mortem analysis**: Reviewing the project change history for lessons learned

> [!note] The Audit module must be enabled in the project's **Blueprint** to appear in project navigation. Audit logging itself is enabled/disabled at the system level by an administrator.

---

## Accessing the Audit Log

1. Open the project.
2. Click **Audit** in the left navigation panel (typically near the bottom of the navigation list).
3. The audit log grid loads showing all captured changes.

---

## What the Audit Log Captures

The audit log records changes to project fields and modules. Captured events typically include:

| Category | Examples |
|----------|---------|
| **Project header fields** | Status changed, Manager changed, Name changed, dates updated |
| **Tasks** | Task created, task deleted, task dates changed, % complete updated |
| **Team / Staffing** | Resource added, resource removed, allocation changed, booking type changed |
| **Financial Plans** | Cost plan created, budget plan approved, amounts changed |
| **Baselines** | Baseline created, baseline deleted |
| **Risks** | Risk created, risk status changed, risk score changed |
| **Issues** | Issue created, issue closed, priority changed |
| **Changes** | Change request created, status changed (approved/rejected) |
| **Documents** | Document uploaded, document deleted |
| **Status Reports** | Report created, report published |
| **Access / Security** | Access rights modified on the project |

> [!note] Not all fields are audited — administrators configure which fields are included in audit logging in system settings. Lookup field changes, custom fields, and some module changes may or may not be captured depending on configuration.

---

## Audit Log Grid

The audit log is displayed as a grid with the following columns:

| Column | Description |
|--------|-------------|
| **Date / Time** | Exact timestamp of the change (server time zone) |
| **User** | Name of the user who made the change |
| **Action** | Type of action: Created, Modified, Deleted |
| **Object Type** | What was changed: Project, Task, Team Member, Risk, etc. |
| **Object Name** | Name of the specific item that was changed |
| **Field** | The field that was modified (for Modified actions) |
| **Old Value** | The value before the change |
| **New Value** | The value after the change |

---

## Reading the Audit Log

### Example Audit Entries

| Date | User | Action | Object Type | Field | Old Value | New Value |
|------|------|--------|-------------|-------|-----------|-----------|
| 2024-03-15 09:32 | Jane Smith | Modified | Project | Status | Active | On Hold |
| 2024-03-15 10:05 | John Doe | Modified | Task | Finish Date | 2024-04-01 | 2024-04-15 |
| 2024-03-16 14:20 | Admin | Modified | Team Member | Allocation % | 100 | 50 |
| 2024-03-17 08:55 | Jane Smith | Created | Baseline | — | — | Post-Change Baseline |

---

## Filtering the Audit Log

Use the **Filter** panel to narrow the audit log to specific events:

| Filter | Options |
|--------|---------|
| **Date Range** | From date and To date |
| **User** | Filter by who made the change |
| **Action** | Created / Modified / Deleted |
| **Object Type** | Project / Task / Team Member / etc. |
| **Field** | Specific field name |

> [!tip] Filter by **User** and **Date Range** to quickly answer "what did this user change last week?"

> [!tip] Filter by **Object Type = Task** and **Field = Finish Date** to see all task date changes — useful for understanding schedule slippage history.

---

## Exporting the Audit Log

1. Apply any desired filters.
2. Click **Export** (or the download icon).
3. Select **Excel** or **CSV** format.
4. The log downloads to your browser.

> [!note] Exports respect the current filter — only visible rows are exported.

---

## Audit Log Retention

The audit log retains entries based on system configuration:
- Typical retention: 1–2 years, or all time (depending on system settings and database growth policies)
- Very old entries may be archived or purged by the administrator
- Contact your administrator for the specific retention policy at your organization

---

## Access Rights

| Right | What It Allows |
|-------|---------------|
| **Project - View** | View the audit log for projects you have access to |
| **Audit - Navigate** | May be a separate right depending on configuration |
| **System Administration** | Configure which fields are audited |

> [!note] The audit log is typically **read-only** for all users including administrators. It cannot be edited, cleared, or selectively deleted. This is by design to preserve audit integrity.

---

## Administrator Notes

Administrators configure audit logging in **Administration → Audit**:

- Enable/disable audit logging globally
- Select which object types and fields to audit
- Configure retention period
- Export system-wide audit logs (not just project-level)

See [[_MOC Administration]] for full audit configuration details.

---

## Related Notes
- [[Create a Project]] — Project creation appears as the first audit entry
- [[Tasks Phases Milestones]] — Task changes are captured in the audit log
- [[Staffing]] — Team member changes are audited
- [[Financial Plans]] — Financial plan changes are audited
- [[Baselines]] — Baseline creation/deletion is audited
- [[_MOC Administration]] — System-level audit configuration
- [[_MOC Projects]]

---
title: Risks, Issues, and Change Requests
tags:
  - howto
aliases:
  - Risks
  - Issues
  - Change Requests
  - Risk Log
  - Issue Log
  - Change Log
canonical: true
audience: pm
domain: projects
---

# Risks, Issues, and Change Requests

Clarity PPM provides dedicated modules for tracking **risks** (potential future problems), **issues** (current problems that need resolution), and **change requests** (formal requests to change project scope, schedule, or budget).
Together these form the project's change control and risk management framework.

---

## Overview

| Module | What It Tracks | When to Use |
|--------|---------------|-------------|
| **Risks** | Potential events that could negatively impact the project | Identified threats that have not yet occurred |
| **Issues** | Problems that have already materialized and need action | Active problems blocking or impacting the project |
| **Changes** | Formal requests to change approved scope/schedule/budget | Any deviation from the project baseline requiring approval |

> [!note] All three modules must be enabled in the project's **Blueprint** by an administrator to appear in project navigation.

---

## Risks

### What Is a Risk?
A risk is an **uncertain event or condition** that, if it occurs, would have a positive or negative effect on the project. Risk management involves identifying, assessing, and planning responses before the risk materializes.

### Navigating to Risks
1. Open the project.
2. Click **Risks** in the left navigation panel.

### Creating a Risk

1. Click **+ New Risk**.
2. Fill in the risk fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | Short, clear risk statement |
| **Description** | No | Detailed description of the risk |
| **Status** | Yes | Open / Closed / Mitigated |
| **Impact** | Yes | High / Medium / Low (effect if risk occurs) |
| **Probability** | Yes | High / Medium / Low (likelihood of occurrence) |
| **Risk Score** | Auto | Calculated from Impact x Probability |
| **Mitigation Plan** | No | Steps to reduce probability or impact |
| **Contingency Plan** | No | Steps if the risk occurs despite mitigation |
| **Owner** | No | Resource responsible for monitoring this risk |
| **Due Date** | No | Date by which mitigation should be complete |
| **Category** | No | Admin-configured risk category |

3. Click **Save**.

### Risk Score Matrix

| | **Low Impact** | **Medium Impact** | **High Impact** |
|--|:---:|:---:|:---:|
| **High Probability** | Medium | High | Critical |
| **Medium Probability** | Low | Medium | High |
| **Low Probability** | Low | Low | Medium |

> [!tip] Focus mitigation efforts on **High** and **Critical** risks. Assign an owner and a concrete mitigation plan for every risk above Medium.

### Risk to Issue Escalation
If a risk materializes (the threatening event occurs), it should be escalated to an **Issue**:

1. Open the risk record.
2. Click **Convert to Issue** (or **Actions -> Escalate to Issue**).
3. A new Issue record is pre-populated from the risk details.
4. Update the Issue with the actual impact and assign it for resolution.

---

## Issues

### What Is an Issue?
An issue is a **current problem** that is actively impacting the project - unlike a risk, an issue has already occurred and requires immediate action.

### Creating an Issue

1. Navigate to the **Issues** module (left nav).
2. Click **+ New Issue**.
3. Fill in the issue fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | Short summary of the problem |
| **Description** | No | Full description of the issue |
| **Status** | Yes | Open / In Progress / Closed |
| **Priority** | Yes | Critical / High / Medium / Low |
| **Impact** | No | Description of how the issue affects the project |
| **Resolution** | No | Steps being taken to resolve it |
| **Owner** | No | Resource responsible for resolving |
| **Due Date** | No | Target resolution date |
| **Category** | No | Admin-configured issue category |

4. Click **Save**.

### Resolving and Closing an Issue

1. Open the issue.
2. Update the **Resolution** field with how it was resolved.
3. Set **Status** to **Closed**.
4. Set the **Closed Date**.
5. Click **Save**.

> [!tip] Always document the resolution - even for simple issues. This creates an audit trail and helps with lessons learned.

---

## Change Requests

### What Is a Change Request?
A **change request** is a formal proposal to alter the project's approved baseline - scope, schedule, budget, or resources. Change requests go through an approval workflow before the project is updated.

### Creating a Change Request

1. Navigate to the **Changes** module (left nav).
2. Click **+ New Change Request**.
3. Fill in the fields:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Name** | Yes | Short title of the change |
| **Description** | No | Detailed description of what is being changed |
| **Status** | Yes | Draft / Submitted / Approved / Rejected / Withdrawn |
| **Priority** | No | Urgency of the change |
| **Impact** | No | Cost/schedule impact if approved |
| **Reason** | No | Justification for the change |
| **Requestor** | No | Who is requesting the change |
| **Owner** | No | Who is responsible for processing it |
| **Submitted Date** | No | When formally submitted |
| **Decision Date** | No | When approved or rejected |

4. Click **Save**.

### Change Request Workflow

A typical change request lifecycle:

1. Draft
2. Submitted
3. Under Review
4. Approved (or Rejected)
5. If approved: Project Updated -> New Baseline Created

> [!warning] Do not update the project plan (dates, budget, scope) based on an unsubmitted or unapproved change request. Wait for formal approval to maintain baseline integrity.

### Approved Changes
When a change request is approved:
1. Update the project tasks, dates, and/or budget to reflect the approved change.
2. Create a new [[Baselines|Baseline]] to capture the post-change plan.
3. Set the change request status to **Closed / Implemented**.

---

## Grid Views

All three modules use a **grid view** with:
- Configurable columns
- Sort and filter capabilities
- Color-coded status indicators
- Export to Excel option

### Common Grid Columns (All Modules)

| Column | Description |
|--------|-------------|
| **Name** | Record name; click to open |
| **Status** | Current status |
| **Priority / Impact** | Severity or importance |
| **Owner** | Responsible resource |
| **Due Date** | Target date |
| **Created On** | Record creation date |
| **Created By** | Who created it |

---

## Filtering Risks, Issues, and Changes

Use the **Filter** panel to narrow records by:
- Status (Open, Closed, etc.)
- Priority / Impact
- Owner
- Due Date range
- Category

> [!tip] Create a saved filter for **Open High-Priority Risks and Issues** to use as a quick dashboard view in your weekly project review.

---

## Access Rights

| Right | What It Allows |
|-------|---------------|
| **Project - View** | View all risks, issues, and changes |
| **Project - Edit** | Create, edit, and close records |
| **Risks - Manage** | Full management including deletion |

---

## Related
- [[Baselines]] - Create a new baseline after approving a change request
- [[Status Reports]] - Summarize open risks and issues in status reports
- [[Checklists]] - Use checklists for risk response tracking
- [[_MOC Projects]]

%%Source: p1162-1171%%

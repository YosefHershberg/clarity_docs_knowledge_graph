---
title: Requirements and Release Planning
tags:
  - concept
  - classic
aliases:
  - Requirements Planning
---

# Requirements and Release Planning

Comprehensive requirements, releases, and release plans help you manage the delivery of projects, services, products, programs, applications, and features. Classic PPM Requirements Planning provides a framework to define and track the deliverable requirements of your business.

Use requirements planning to:
- Deliver clear requirements to team members.
- Streamline the innovation process.
- Capture ideas and business value as requirements.
- Associate requirements with investments to flow into release planning cycles.
- Gather insight into how requirements fit into overall business goals.

> [!NOTE]
> Verify that each user has the appropriate access rights to create, edit, view, or delete requirements, releases, and release plans.

> [!NOTE]
> The documentation may not match what you see in the product. All access to features, menus, pages, buttons, and objects is determined by your access rights. Contact your administrator if you cannot complete any steps.

---

## Requirements Planning Workflow

Requirements planning typically follows this workflow:

1. Create the requirements.
2. Create one or more releases.
3. Create one or more release plans.
4. Add the releases to the release plans.
5. Add the requirements to a release or release plan.
6. Approve the release.

---

## Requirements

As a product manager or business analyst, you have visibility and control over your requirements from any source. Classic PPM automatically categorizes requirements to deliver a complete view of customer needs.
You can produce visual roadmaps, dashboards, and product plans. Define requirements and connect them to projects and their activities.

> [!TIP]
> Improve the effectiveness of the delivered product or service by connecting project work to the requirements defined by product owners, stakeholders, or customers.

## Requirements typically follow this workflow:

1. Create the requirements and set their business priority.
2. Define the requirement effort and cost budget and estimates.
3. Create the release plan and the release.
4. Add the requirements to the release or the release plan.
5. Approve the release.
6. Link each requirement to a project task.
7. Deliver the requirement and change the requirement status to **Implemented**.

### Create Requirements

**Steps:**
1. Open **Home**, and from **Requirements Planning**, click **Requirements**.
2. Click **New** and complete at least the required fields.
3. To categorize the requirement, complete the **Type**, **Theme**, and **Status** fields.
4. To specify an organizational commitment, select **Committed**.
5. Set the **Risk** field:
- **Low** ג€” Objectives, scope, and benefits are reasonable, clearly defined, measurable, and verifiable.
- **Medium** ג€” Objectives, scope, and benefits are fairly reasonable and defined.
- **High** ג€” Objectives, scope, and benefits are not clearly defined, measurable, or verifiable.
6. To link the requirement to an investment, complete the **Investment** field (product, application, asset, service, project, or program that delivers the requirement).
7. Click **Save**.
8. In the **Effort** section, define budgeted and estimated effort:
- **Budgeted effort** ג€” Allocated effort for top-down planning; does not aggregate up/down the hierarchy.
- **Estimated effort** ג€” Aggregated effort for bottom-up scoping cycles. Formula: `Aggregate Effort (Estimate) = Effort (Estimate) + Child Requirement Effort (Estimate)`
9. In the **Cost** section, define budgeted and estimated costs:

| Field | Description |
|---|---|
| **Operating Expense (Budget)** | Budgeted operating expense portion. |
| **Capital (Budget)** | Budgeted capital expense portion. |
| **Total (Budget)** | `Operating Expense (Budget) + Capital (Budget)` |
| **Operating Expense (Estimate)** | Estimated operating expense portion. |
| **Capital (Estimate)** | Estimated capital expense portion. |
| **Total (Estimate)** | `Operating Expense (Estimate) + Capital (Estimate)` |
| **Aggregate Operating Expense (Estimate)** | `Operating Expense (Estimate) + Child Requirement Operating Expense (Estimate)` |
| **Aggregate Capital (Estimate)** | `Capital (Estimate) + Child Requirement Capital (Estimate)` |
| **Aggregate Total (Estimate)** | `Aggregate Operating Expense (Estimate) + Aggregate Capital (Estimate)` |

10. In the **Organizational Breakdown Structures** section, define the OBS:
- **Department** ג€” Financial department and entity (must match the Location entity).
- **Location** ג€” Financial department location (must match the Department entity).
11. Click **Save and Return**.

> [!NOTE]
> You can add attachments to a requirement (e.g., a requirements document). Open the requirement, open the **Properties** menu, and click **Attachments**.

### Set the Requirement Business Priorities

A panel of stakeholders reviews and ranks requirements to assess their business impact.

**Steps:**
1. Open the requirement, open the **Properties** menu, and click **Business Priority**.
2. For each field, specify a value of **Low (1ג€“33)**, **Medium (34ג€“67)**, or **High (68ג€“100)**:
- **Innovation and User Experience**
- **Revenue Impact**
- **Developer Productivity**
- **Cost of Operations and Support**
3. Save the changes.

### Link Requirements to Project Tasks

You can link a requirement to a single project task. The linked task represents the effort to deliver the requirement as part of an implementation project. You can only initiate this relationship from the requirement.

> [!WARNING]
> If you delete the associated task, the requirement is no longer associated with it. The requirement itself is not deleted.

**Steps:**
1. Open the requirement.
2. Click **Link**.
3. Choose an existing or new task and click **Next**.
4. Follow the instructions to link to a task.

> [!NOTE]
> To unlink a requirement, open the requirement and click **Unlink**.

---

## Requirement Hierarchy

You can group requirements into hierarchies. For example, a requirement to deliver a new phone can be broken down into sub-requirements for each feature.

### Add a Requirement to a Hierarchy

**Steps:**
1. Open the requirement.
2. Click **Hierarchy**.
3. Click **Add**.
4. Select the check box next to the requirement and click **Add**.

Use the **+** and **גˆ’** icons to expand and collapse the hierarchy.

### Move a Requirement in a Hierarchy

When you move a requirement after another, it becomes a child of that requirement. When you move it before another, it becomes the parent.

**Steps:**
1. Open the requirement.
2. Click **Hierarchy**.
3. Select the check box and click **Move**.
4. Select the new position and click **Insert Before** or **Insert After**.

### Indent and Outdent a Requirement

**Steps:**
1. Open the requirement.
2. Click **Hierarchy**.
3. Select the check box and choose:
- **Indent** ג€” Makes the requirement one level below the nearest higher-level requirement.
- **Outdent** ג€” Moves the requirement one level up relative to the requirement above it.

You can create an unlimited number of hierarchy levels.

### Remove a Requirement from a Hierarchy

> [!NOTE]
> Removing a child requirement also removes any lower-level requirements relative to it. The requirement is not deleted; only its hierarchy position is removed.

**Steps:**
1. Open the requirement.
2. Click **Hierarchy**.
3. Select the check box and click **Remove**.

---

## Requirement Dependencies

### Add a Requirement Dependency

**Steps:**
1. Open the requirement.
2. Click **Dependencies**.
3. Click **Add**.
4. Select the check box next to the dependency requirement and click **Add**.
5. Choose the dependency type:
- **Mutual Dependency** ג€” Both requirements depend on each other.
- **Needed By** ג€” The selected requirement depends on the target requirement.
- **Depends Upon** ג€” The target requirement depends on the selected requirement.

> [!NOTE]
> To remove a dependency, open the requirement, click **Dependencies**, select the dependency, and click **Remove**.

### Delete a Requirement

**Restrictions:**
- You cannot delete a requirement assigned to a release.
- You cannot delete a requirement with **Approved** or **Rejected** status.
- Deleting a requirement linked to a project task removes the association but does not delete the task.

**Steps:**
1. Open **Home**, and from **Requirements Planning**, click **Requirements**.
2. Select the check box next to the requirement and click **Delete**.

---

## Releases

A release represents a new future deliverable and includes requirements, priorities, processes, an audit trail, and a dashboard.

## Releases typically follow this workflow:
1. Define the associated investments.
2. Create the release.
3. Define the implementing projects or programs.
4. Define effort and cost budgets and estimates.
5. Add the release to a release plan.
6. Add requirements to the release plan and approve the release.
7. Link the release to a project or program.

### Create a Release

**Steps:**
1. Open **Home**, and from **Requirements Planning**, click **Releases**.
2. Click **New**.
3. Complete the fields:
- **Investment** ג€” Product, application, asset, service, project, or program that owns the release.
- **Associated Project/Program** ג€” Project or program linked to the release (one only).
- **Currency Code** ג€” Currency for budget and estimate calculations.
- **Effort (Budget)** ג€” Budgeted effort to deliver the release.
- **Effort (Estimate)** ג€” Estimated effort to deliver the release.
4. Click **Save**.
5. In the **Cost** section, define cost fields:

| Field | Formula |
|---|---|
| **Operating Expense (Budget)** | Budgeted operating expenses. |
| **Capital (Budget)** | Budgeted capital expenses. |
| **Total Cost (Budget)** | `Operating Expense (Budget) + Capital (Budget)` |
| **Operating Expense (Estimate)** | Estimated operating expenses. |
| **Capital (Estimate)** | Estimated capital expenses. |
| **Total Cost (Estimate)** | `Operating Expense (Estimate) + Capital (Estimate)` |

6. In the **Organizational Breakdown Structures** section, define the OBS for security, organizational, or reporting purposes.
7. Click **Save and Return**.

> [!NOTE]
> You can add attachments to a release. Open the release, open the **Properties** menu, and click **Attachments**.

### Link a Release to a Project or Program

You can link an unlimited number of releases to a project or program, but each release can only be linked to one project or program.

**Steps:**
1. Open the release.
2. Click **Link**.
3. Click **Choose Existing** and click **Next**.
4. Select the project and click **Save and Return**.
5. To unlink, open the release and click **Unlink**.

### Define the Release Schedule

**Steps:**
1. Open the release.
2. Click **Properties > Schedule**.
3. Define the schedule:
- **Start** ג€” Scheduled start date.
- **Finish** ג€” Scheduled finish date.
- **Alpha** ג€” Alpha start date.
- **Beta** ג€” Beta start date.
- **Release to Market** ג€” Scheduled market release date.
4. Click **Save and Return**.

### Add Requirements to a Release

**Steps:**
1. Open the release.
2. Click **Requirements**.
3. Click **Add**.
4. Select the check box next to the requirement and click **Add**.
5. Change the requirement status to **Assigned to a Release**.

> [!NOTE]
> To remove a requirement from a release, open the release, click **Requirements**, select the requirement, and click **Remove**.

### Monitor Requirement Business Priorities

**Steps:**
1. Open the release.
2. Click **Priorities**.

View all requirements assigned to the release along with their overall business priority scores.

### Monitor Release Performance

**Steps:**
1. Open the release.
2. Click **Dashboard**.

## Available views:
- **Scorecard** ג€” Requirements linked to project tasks; status based on task status.
- **Requirements By Theme** ג€” Graph by theme.
- **Requirements By Priority** ג€” Graph by priority.
- **Business Priority** ג€” Grid by business priority.
- **Requirements By Risk** ג€” Graph by risk.

> [!TIP]
> You can customize this page using Classic PPM Studio. Open the **Release Layout** portlet page in Studio and modify the **Dashboard** tab content.

### Delete a Release

When you delete a release that has requirements, the requirements become unassigned.

**Steps:**
1. Open **Home**, and from **Requirements Planning**, click **Releases**.
2. Select the check box next to the release and click **Delete**.
3. Confirm the deletion.

---

## Release Plans

Release plans provide an intuitive way to assign requirements across upcoming releases on a per-investment basis. Use release plans to map one or more requirements to a release.

## Release plans typically follow this workflow:
1. Create the investments that comprise part of your release plan.
2. Create the release.
3. Create the requirements.
4. Create the release plan.
5. Add the investments to the release plan.
6. Add the release to the release plan.
7. Add the requirement to the release plan.

> [!TIP]
> Best practices for release plans:
> - Link release plans to a project plan and then implement them.
> - Link requirements to the project task that represents the effort to deliver them.
> - Use the **Release Dashboard** to monitor release performance.
> - Implementing a release plan enables full traceability of requirements.

### Create a Release Plan

**Steps:**
1. Open **Home**, and from **Requirements Planning**, click **Release Planning**.
2. Click **New**.
3. Enter the release plan information:
- **Currency Code** ג€” Currency for budget and estimate calculations.
4. Click **Save and Return**.

> [!NOTE]
> After creating a release plan, you can view and edit its details by opening it and clicking **Properties** from the **Release Planner** page. The **Total Cost (Budget)** field displays: `Total Cost (Budget) = Operating Expense (Budget) + Capital (Budget)`

### Add an Investment to a Release Plan

**Steps:**
1. Open the release plan and click **Contents**.
2. Click **Add**.
3. Select the investment and click **Add**.

> [!NOTE]
> To remove an investment, open the release plan, click **Contents**, select the investment, and click **Remove**.

### Update the Release Planner

**Steps:**
1. Open the release plan.
2. For **Releases**, edit the fields:
- **Operating Expense (Budget)**, **Capital (Budget)**, **Effort (Budget)**
- **Start Date**, **Finish**, **Alpha**, **Beta**, **Release to Market**
3. For **Requirements**, edit the fields:
- **Operating Expense (Budget)**, **Capital (Budget)**, **Effort (Budget)**
- **Release** ג€” Select a release to assign to the requirement.

### Add a Release to a Release Plan

**Steps:**
1. Open a release plan.
2. In the **Releases** portlet, click **Add Release**.
3. Select the check box next to the release and click **Add**.

> [!NOTE]
> When you add a requirement-linked release to a release plan, the associated requirement is automatically added to the release plan.

### Approve a Release in a Release Plan

**Steps:**
1. Open a release plan.
2. In the **Releases** portlet, select the check box next to the release and click **Approve Release**.

The release status changes to **Approved** and a yellow checkmark appears in the **Approved** column.

### Remove a Release from a Release Plan

**Steps:**
1. Open a release plan.
2. In the **Releases** portlet, select the check box and click **Remove Release**.

> [!NOTE]
> When you remove a requirements-linked release from the release plan, the requirements are also removed.

### Add a Requirement to a Release Plan

**Steps:**
1. Open a release plan.
2. In the **Requirements** portlet, click **Add Requirement**.
3. Select the check box and click **Add**.

> [!NOTE]
> If a release plan contains a release linked to a requirement, the associated requirement is automatically added to the release plan.

### View a Requirement Hierarchy in a Release Plan

Open a release plan and view the **Requirements** portlet. Use the **+** and **גˆ’** icons to expand and collapse the hierarchy.

### View a Requirement Dependency in a Release Plan

**Steps:**
1. Open a release plan.
2. In the **Requirements** portlet, click the **dependencies icon** next to the requirement.

### Remove a Requirement from a Release Plan

> [!NOTE]
> Removing a requirement from a release plan does not remove it from its associated release.

**Steps:**
1. Open the release plan.
2. In the **Requirements** portlet, select the check box and click **Remove Requirement**.

### View the Release Plan Roadmap

The release plan roadmap is a graphical, time-scaled representation of upcoming releases for a product, service, or other investment.

**Steps:**
1. Open the release plan.
2. Click **Roadmap**.

---

## Related

- [[_MOC Classic PPM]]

%%Source: p2605-2617%%


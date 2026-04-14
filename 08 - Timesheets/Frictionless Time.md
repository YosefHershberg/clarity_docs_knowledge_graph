---
title: Frictionless Time
tags:
  - concept
  - howto
aliases:
  - Frictionless Timesheets
  - Unstaffed Time Entry
  - Rally Timesheet Integration
canonical: true
audience: everyone
domain: timesheets
---

# Frictionless Time

Frictionless Time is a set of Clarity features that remove traditional barriers to timesheet creation. Normally a resource must be staffed on an investment and assigned to a task before they can log time. Frictionless Time removes those prerequisites in several ways: unstaffed entry directly on an investment, automatic timesheet population from Rally, and fully automated submit and approve jobs.

%%Source: p1607-1612%%

---

## Unstaffed Time Entry

When you enable the **Allow Time Entry for Unstaffed Resources** field on an investment, any resource with view access to that investment can log time — without being added to the Staff module or receiving a formal task assignment.

**How it works:**
- If the investment has no existing tasks, Clarity automatically creates a single effort task (internal Task ID `~rmw`).
- The resource can complete the full timesheet lifecycle (enter, submit, approve, post) against this task.
- Existing [[Enter Hours and Submit#OTE Field Impact|Open for Time Entry]] and Track Mode settings still apply — this feature does not override them.

**Prerequisites:**
- The resource must have view access to the investment instance.
- The investment must have **Open for Time Entry** enabled and **Track Mode** set to PPM.

**Steps to enable and use unstaffed time entry:**

1. Open the **Projects** or **Custom Investments** workspace.
2. Click **Columns** to add **Allow Time Entry for Unstaffed Resources** to the column panel.
3. Enable the field for the target investment (disabled by default).
4. As the resource, navigate to **Timesheets** in the main menu.
5. Click **Add Tasks** → **Select Tasks**.
6. In the filter panel, remove the default `Assigned Resource = Current User` filter; add `Investment Name = <target investment>`.
7. Select the displayed task and click **Add**.
8. Enter hours, then submit normally.

> [!important]
> The effort task created for unstaffed entry has Task ID `~rmw`. After the timesheet is posted, Clarity converts the Financial Work Types into real tasks, adds the resource as Staff, and populates Assignments and Actuals. The Task ID is updated at that point.

---

## Rally Integration: Create Timesheets from Rally

For teams using Rally (Broadcom Rally Agile), Clarity can automatically populate timesheets based on work tracked in Rally user stories. This is part of the Frictionless Accounting (FCA) integration.

### Prerequisites

Before using this workflow, ensure the following are in place:
- A Rally integration instance is created in Classic PPM.
- **Financial Work Types** lookup values are defined in Classic PPM.
- A **Frictionless Accounting Mappings** instance is created and activated in Clarity Administrator.
- An **Integration Mappings** instance is created with Object and Field Mappings configured.
- **Allow Time Entry for Unstaffed Resources** is enabled on the target investment.

### Setup: Configure the Investment

In the Projects or Custom Investments workspace, set the following fields:

| Field | Required Value |
|-------|----------------|
| Integration Mapping | Set to the Integration Mapping instance |
| Rally Object | Populated automatically after sync |
| Rally Formatted ID | Populated automatically after sync |
| Allow Time Entry for Unstaffed Resources | Enabled |
| Open for Time Entry | Enabled |
| Track Mode | PPM |

> [!note]
> Rally Object and Rally Formatted ID populate only after you run the **Synchronize Mapped Information** job.

### End-to-End Rally Timesheet Workflow

1. In Classic PPM, go to **Home > Reports and Jobs > Jobs** and execute the **Synchronize Mapped Information** job.
2. Log in to Rally. Create user stories under the feature, assigning each story a **Financial Work Type**.
3. Back in Classic PPM, execute the **Timesheet Integration** job with:
   - Integration = FCA
   - Time period = current period
4. In Clarity, verify that tasks named after each Financial Work Type appear on the resource's timesheet.
5. Submit the timesheet for approval and obtain approval.
6. In Classic PPM, execute the **Post Timesheets** job.

**After posting, Clarity automatically:**
- Converts Financial Work Type entries into real tasks within the investment.
- Adds the resource as a Staff member.
- Populates Assignments with the resource's details.
- Updates Actuals and Actual Cost for the frictionless timesheet.
- Updates Task IDs in the timesheet.

> [!note]
> The **Open for Time Entry** setting on Frictionless Work Type tasks is honored. If it is disabled on a task, the Timesheet Integration job will not populate hours for that task.

---

## How Rally Calculates Hours for Financial Work Types

When the Timesheet Integration job runs, Rally derives timesheet hours from story points in three steps:

1. **Sum eligible work items.** Rally totals the Plan Estimate of every user story that is In Progress or Accepted, carries a valid Financial Work Type, and has not been deleted.

2. **Derive work ratios.** Story points are grouped by Feature and Financial Work Type. Each group's total is divided by the project's overall total to produce a percentage (the *work ratio*).

3. **Allocate hours per team member.** Each work ratio is multiplied by the team member's available hours for the reporting period to produce the number of timesheet hours for that Financial Work Type.

> [!tip]
> If a team member's available hours change mid-period, re-running the Timesheet Integration job recalculates their allocated hours based on the updated availability.

---

## Auto-Submit Timesheets

The **Auto-submit Timesheets** job automatically submits all timesheets in **Open** or **Returned** status, without requiring the resource to click Submit manually.

**Workflow:**

1. The job runs and validates timesheet rules configured in Clarity.
2. **If validation errors exist:** The resource receives a notification, an **Errors** button appears on their timesheet, and the **Has Errors** field is checked. The timesheet is not submitted.
3. **If no errors:** The timesheet status changes to Submitted.

**Steps to run the job:**

1. In Classic PPM, navigate to **Home > Reports and Jobs > Jobs**.
2. Click **Auto-submit Timesheets**.
3. Enter the required fields (time period, resource filters as needed).
4. Click **Submit**.

> [!warning]
> Timesheets with rule violations are held back and flagged. Review the **Has Errors** column in the [[Grid Layout Management|Timesheet Grid]] to identify and fix them before re-running the job.

---

## Auto-Approve Timesheets

The **Auto-approve Timesheets** job automatically approves all timesheets in **Submitted** status, bypassing the manual review step.

**Steps to run the job:**

1. In Classic PPM, navigate to **Home > Reports and Jobs > Jobs**.
2. Click **Auto-approve Timesheets**.
3. Enter the required fields and click **Submit**.

After the job completes, the status of all processed timesheets updates to **Approved**.

> [!important]
> Auto-approve bypasses manager review entirely. Use this only for low-risk scenarios (e.g., Rally-populated frictionless timesheets where hours are system-generated) or when governance policy permits it.

---

## Related Notes

- [[Enter Hours and Submit]] — Standard timesheet entry and submission
- [[Advanced Timesheet Features]] — Charge codes, attestation, Enter Time for Others, field security
- [[Review and Approve]] — Manual approval workflow
- [[Grid Layout Management]] — Timesheet grid views, Has Errors filter
- [[_MOC Timesheets]]

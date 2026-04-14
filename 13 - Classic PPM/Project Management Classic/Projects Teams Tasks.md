---
title: Projects, Teams, and Tasks (Classic PPM)
tags:
  - classic
  - howto
  - project-management
source_pages: 2250-2296
---
# Projects, Teams, and Tasks (Classic PPM)

Classic PPM project management covers the full lifecycle from creating a project through closing and deletion. This note covers project setup, team staffing, task creation, subprojects, baselines, and earned value.

## Project Management Settings (System Level)

Before creating projects, administrators configure system-wide defaults.

1. Open **Administration > Project Management > Settings**
2. Configure:
- **Load Pattern** ג€” How resource work is distributed across the assignment (flat, front-loaded, back-loaded)
- **Default Booking Status** ג€” Soft or hard booking for new team members
- **% Complete Calculation Method** ג€” Manual, Duration, or Effort (see below)
- **EV Calculation Method** ג€” Default earned value method for new projects and tasks
- **Allow Marked Investments with Timesheet and Transaction Data to be Deleted** ג€” Enables deletion of projects that have actuals

> [!NOTE]
> Set the % Complete Calculation Method at the beginning of your project and do not change this value.

## Create a Project

1. Open **Home > Portfolio Management > Projects**
2. Click **New**
3. Complete the requested information:
- **Name / ID** ג€” Project name and unique identifier
- **Manager** ג€” Resource responsible for managing the project. Becomes project manager with automatic access rights. Default: resource creating the project
- **Page Layout** ג€” Page layout for viewing project information. Depends on company configuration and installed add-ins. Default: Project Default Layout
- **Start Date** ג€” Initial start date; autocalculated to the first task start date once tasks exist. Default: current date
- **Finish Date** ג€” Initial finish date; autocalculated to the last task finish date once tasks exist. Default: current date
- **Stage** ג€” Investment lifecycle stage (company-specific values)
- **Goal** ג€” Business purpose. Values: Cost Avoidance, Cost Reduction, Grow the Business, Infrastructure Improvement, Maintain the Business
- **Priority** ג€” Relative importance (0ג€“36, where 0 is highest). Controls autoscheduling order. Default: 10
- **Progress** ג€” Completion level. Values: Not Started, Started (1ג€“99%), Completed (100%). Default: Not Started
- **Required** ג€” Pins this investment when added to a portfolio during scenario generation. Default: Cleared
- **% Complete Calculation Method** ג€” See [% Complete Methods](#-complete-calculation-methods) below
- **Set Planned Cost Dates** ג€” Synchronizes planned cost dates with investment dates. Default: Selected
- **Assignment Pool** ג€” Resource pool for task assignments:
- *Team Only* ג€” Only existing staff members
- *Resource Pool* ג€” Staff members plus any resource you have rights to book; assigning adds them as staff automatically. Default: Resource Pool
- **Department / Location** ג€” OBS values for the project

> [!WARNING]
> Verify that task and assignment start dates are the same or later than the project start date. Otherwise, the project start date is automatically redefined.

> [!WARNING]
> Verify that task and assignment finish dates are the same or before the project finish date. Otherwise, the project finish date is automatically redefined.

4. In the **Organizational Breakdown Structures** section, define OBS associations for security, organization, and reporting
5. Save changes

## % Complete Calculation Methods

| Method | Description |
|--------|-------------|
| **Manual** | Enter % Complete for project, summary, and detail tasks manually. Required when using Classic PPM with Microsoft Project or an external job. Task status does not change automatically. |
| **Duration** | Tracks % Complete based on time span. Summary task % = Total Detail Task Duration Complete / Total Detail Task Duration |
| **Effort** | Calculates % Complete from resource assignment work units. Summary task % = Sum of Detail Task assignment Actuals / Sum of Detail Task assignment Effort. Nonlabor resources are excluded. |

> [!NOTE]
> Set this method at the beginning of the project and do not change it.

## Create a Project from a Template

Templates predefine project roles, WBS, financial plans, and documents for reuse across the organization.

1. Open **Home > Portfolio Management > Projects**
2. Click **New from Template**
3. Select a template
4. Complete additional fields:
- **Scale Work By** ג€” Percentage to increase or decrease work estimates relative to the template. Values: 0ג€“100 (0 = no change). Default: 0
- **Scale Budget By** ג€” Percentage (positive or negative) to scale dollar amounts in cost and benefit plans. Values: 0ג€“100 (0 = no change). Default: 0
- **Convert Resources to Roles** ג€” Replaces template resources with their primary roles or team roles on the new project. If a resource has no role, the named resource is retained.
> [!note]
> cost plan resource values are not converted ג€” duplicate detail rows may result if resource is the only differentiating attribute. Default: Cleared
5. Save changes

> [!NOTE]
> If a cost plan uses a resource as a grouping attribute, selecting **Convert Resources to Roles** copies the cost plan without converting those resource values.

## Add Team Members (Staff a Project)

1. Open the project
2. Click **Team**
3. Click **Add** and search for resources or roles
4. Set booking details:
- **Booking Status** ג€” Soft (tentative) or Hard (confirmed)
- **Allocation** ג€” Percentage of availability to allocate
- **Start / Finish** ג€” Dates for the team member's involvement
5. Save changes

## Create Tasks (WBS)

1. Open the project
2. Click **Tasks**
3. Open the **Tasks** menu and click **Gantt** (or **WBS**)
4. Click **Add Task** and complete:
- **Name** ג€” Task name
- **Start / Finish** ג€” Task dates
- **Duration** ג€” Calculated from start and finish
- **Task Type** ג€” Fixed Units, Fixed Duration, or Fixed Work
- **Milestone** ג€” Mark task as a milestone (zero duration)
5. To indent tasks as sub-tasks, use the indent/outdent toolbar buttons
6. Save changes

## Create Subprojects from WBS

You can create a subproject directly from the master project's WBS.

1. Open the project
2. Click **Tasks**, then open the **Tasks** menu and click **Gantt**
3. Click the down arrow for the **Add Existing Subproject** icon and select **Create New Project**
4. Complete the new project fields (same as creating a standalone project)
5. In the **Organizational Breakdown Structures** section, define OBS associations
6. Save changes

## View Combined Subproject Actuals and Estimates

The subprojects page on a master project aggregates data from all child projects.

| Column | Description |
|--------|-------------|
| **Project** | Project name linking to properties |
| **ID** | Project ID (typically autonumbered) |
| **Count** | Number of subprojects |
| **Actuals** | Posted actuals for tasks; Total cell = combined actuals |
| **ETC** | Estimate to Complete; Total cell = combined ETC |
| **Total Effort** | Actuals + Remaining ETC; Total cell = combined effort |
| **Percent Expended** | Percentage of resource usage expended |
| **Baseline** | Usage value for current baseline = Total Effort to date |
| **Total** | Stoplight indicator for overall approval status |
| **Read Only** | Whether subproject is accessible as read-only |

## Create Project Baselines

Baselines are static snapshots of planned and actual effort and costs at the time of capture. Create an initial baseline before resources enter time, then additional baselines at project milestones or phase completions.

> [!NOTE]
> The project must be unlocked before you can create a baseline. For detailed baselining, open the project in a desktop scheduler (Open Workbench or Microsoft Project).

1. Open the project
2. Open **Properties** menu > **Main** > **Baseline**
3. Click **New**
4. Complete:
- **Revision Name** ג€” Name for this baseline (e.g., Initial Baseline, Mid-Term Baseline). Required
- **Revision ID** ג€” Unique identifier (e.g., v1, v5). Required
- **Current Revision** ג€” Sets this as the current baseline. The most recently created baseline becomes current by default. Default: Selected
5. Save changes

### Edit, Update, and Delete Baselines

> [!NOTE]
> Updating a baseline includes changes to task assignments, estimates, and the financial summary since the last update. Updating makes the baseline the current revision.

1. Open the project > **Properties** > **Main** > **Baseline**
2. Click the baseline revision name
3. Edit fields as needed (Revision Name, Revision ID, Current Revision flag)
4. Save changes

To delete: select the baseline and click **Delete**. If the current baseline is deleted and another exists, the remaining baseline becomes current.

### Update Task Baselines

> [!NOTE]
> A task baseline update does not roll up to summary task, team, or project level. To update team ETC, update the project baseline instead.

1. Open the project > **Tasks** > **Gantt**
2. Select the check box next to the task to update
3. Click the down arrow for the **Create Baseline** icon and select **Update Task Baseline**
4. Click **Yes** to confirm

### Master Project and Subproject Baselines

- Master project baselines aggregate baseline data from all subprojects dynamically
- When a new subproject is added to a baselined master project, the subproject's current baseline is saved
- When the master project is baselined, the new baseline replaces the subproject baseline
- Subproject baselines inherit the name and ID of the master project baseline
- If a subproject already has a baseline with the same ID, that baseline is updated ג€” no new one is created
- Deleting a master baseline also deletes the corresponding subproject baseline

### Create an Initial Baseline With Costs

1. Create the project with staff, tasks, and assignments
2. Set up the project financial properties to associate rate and cost matrices for all resource types
3. Execute the **Rate Matrix Extraction** job
4. Run the **Update Earned Value and Cost Totals** job (or use the **Update Cost Totals** action)
5. Create the project baseline

## Earned Value (EV) Metrics

Earned value measures the true cost or value of work performed. EV is also called Budgeted Cost of Work Performed (BCWP).

> [!NOTE]
> Rolled-up cost or earned value data from child projects are not available on program or project list views. Program portlets show rolled-up data, but results are inaccurate for hierarchies of two or more levels. Use the Hierarchy tab for accurate rolled-up financial data.

### Update Project Task Cost Totals

Update cost totals when you create or update a baseline, or change task information. This is required to view earned value calculations (ACWP, BCWP, EAC, ETC).

1. Schedule the **Rate Matrix Extraction** job to run periodically
2. Open the project > **Tasks**
3. Open the **Actions** menu > **General** > **Update Cost Totals**

### EV Metrics Reference

| Metric | Formula | Baseline Required |
|--------|---------|-------------------|
| **BAC** (Budget at Completion) | `(Actuals + Remaining Work) ֳ— actual cost` at baseline time | Yes |
| **BCWS** (Budgeted Cost of Work Scheduled) | Sum of BAC through a point in time | Yes |
| **ACWP** (Actual Cost of Work Performed) | Sum of actual costs posted up to as-of date | No |
| **BCWP** (Budgeted Cost of Work Performed / EV) | Based on EV calculation method | Yes |
| **EAC** (Estimate at Completion) | `ACWP + [(BAC - BCWP) / CPI]` | ג€” |
| **EAC (T)** (Typical variances) | `ACWP + ETC` | No |
| **EAC (AT)** (Atypical variances) | `ACWP + (BAC - BCWP)` | Yes |
| **ETC (AT)** (Atypical) | `BAC - BCWP` | Yes |
| **ETC (Cost)** | `Remaining labor cost + remaining nonlabor cost` | No |
| **ETC (T)** (Typical) | `(BAC - BCWP) / CPI` | Yes |
| **CV** (Cost Variance) | `BCWP - ACWP` | Yes |
| **SV** (Schedule Variance) | `BCWP - BCWS` | Yes |
| **CPI** (Cost Performance Index) | `BCWP / ACWP` | Yes |
| **SPI** (Schedule Performance Index) | `BCWP / BCWS` | Yes |

> [!NOTE]
> ETC (Cost) uses a project-level or resource-level cost rate. If the project uses a cost/rate matrix with rates for charge codes and roles, the task-specific values are not used. Instead, the project charge code or resource primary role is used.

### EV Calculation Methods

| Method | BCWP Calculation | When to Use |
|--------|-----------------|-------------|
| **Percent Complete (PC)** | `BAC ֳ— % complete` | General use; system-calculated |
| **0/100** | `BAC` if 100% complete, else 0 | Work starting and completing in one reporting period |
| **50/50** | `BAC/2` if started but not complete; `BAC` if complete | Work spanning two reporting periods |
| **Level of Effort (LOE)** | `BCWS` | Ongoing support tasks |
| **Weighted Milestones** | User-defined; enter BCWP Override at task level | Organizations using formal EVM methodology |
| **Milestone Percent Complete (MPC)** | User-defined by dollar amount per milestone | Dollar-weighted milestone tracking |
| **Apportioned Effort (AE)** | User-defined; task effort tied to other task efforts | Discrete work related to other discrete work |

> [!NOTE]
> If using Classic PPM with Microsoft Project and specifying an EV method other than Percent Complete, use Classic PPM to calculate, display, and report EV metrics.

**Inheritance hierarchy:** task ג†’ parent task ג†’ project. If the project has no method defined, that task is ignored in EV calculations.

## Close, Deactivate, and Delete Projects

### Financially Close a Project

Prevents new transactions from booking against the project.

1. Open **Home > Portfolio Management > Projects** and open the project
2. Verify the project has no remaining ETC
3. Process all remaining financial transactions into WIP and post all actuals
4. Open **Properties > Settings**
5. In the **Financial** section, set **Financial Status** to **Closed**
6. In the **Time and Staff** section, clear the **Open for Time Entry** check box
7. Save changes

> [!NOTE]
> Actuals already booked and saved in timesheets will still post when timesheets are approved and the posting job runs.

### Deactivate a Project

Removes the project from default active-project views while keeping it in the database.

1. Open the project > **Properties > Settings**
2. In the **General** section, clear the **Active** check box
3. Save changes

Inactive projects can be reactivated at any time.

### Mark a Project for Deletion

Projects must be inactive before marking for deletion. They remain in the Projects list until the **Delete Investments and Time Reporting Periods** job runs.

1. Open **Home > Portfolio Management > Projects**
2. Filter the list for inactive projects
3. Select the check box next to a project and click **Mark for Deletion**
4. Click **Yes** to confirm

> [!TIP]
> Starting with Release 15.5.1, you can delete investments with timesheet or financial transaction data. Enable this with the **Allow Marked Investments with Timesheet and Transaction Data to be Deleted** setting on the Settings page.

### Cancel Project Deletion

Available when the Delete Investments job has not yet run and the project is still in the inactive list.

1. Filter for inactive projects
2. Select the project and click **Cancel Deletion**
3. Click **Yes** to confirm

> [!TIP]
> To see investments marked for deletion: configure the list to display the **Purge Flag** field, then filter or sort by it.

### Delete a Project or Investment

> [!NOTE]
> You need only the **Job - Run** access right to run the Delete Investments and Time Reporting Periods job. Review the job log after running to identify any investments that were not deleted.

**Prerequisites before deleting an investment with actuals:**
- Financial status is set to **Closed**
- Investment status is set to **Inactive**
- No process instances currently running on the investment
- You have access rights to: mark investments for deletion, run the Delete Investments job
- Parent-child hierarchy allocations are 0%, 100%, or removed
- (If using Release Planning) Delete associated releases and requirements

**Steps:**
1. Configure the project management setting to allow deletion with timesheet/transaction data
2. Mark investments for deletion
3. Review time reporting periods and investments marked for deletion; cancel any that should not be deleted
4. Run the **Delete Investments and Time Reporting Periods** job

### Deletion Conditions for Investments with Actuals

| Admin Setting | Mark for Deletion | Job Parameter | Investment Deleted? |
|---------------|------------------|---------------|-------------------|
| Checked | Yes | Checked | Yes |
| Checked | Yes | Unchecked | No |
| Unchecked | No | Unchecked | No |
| Unchecked | No | Checked | No |

> [!NOTE]
> If the admin setting is unchecked before the job runs, the investment is not deleted even if the job parameter is checked.

When deleted, all transaction entries are removed and the investment is purged from the database. The job log records: `REVMGR-20996: Purge Successful. Project Code: [ID]; Transactions Purged=N. [ID] has been deleted.`

When a project is deleted, its investment-specific charge codes are removed from the `PRCHARGECODE` table, and any rate matrix rows using those charge codes are also removed.

## Related Notes

- [[Autoschedule]] ג€” Autoscheduling projects and tasks
- [[WBS and Task Dependencies]] ג€” Work breakdown structure and dependencies
- [[Project Schedules Gantt]] ג€” Gantt chart and scheduling views
- [[Resource Assignments]] ג€” Assigning resources to tasks
- [[Project Estimates ETC]] ג€” Managing ETC
- [[Earned Value and Metrics]] ג€” Detailed EV reporting
- [[Project Templates]] ג€” Creating and managing templates
- [[Subprojects]] ג€” Subproject management
- [[Close Deactivate Delete]] ג€” Detailed closure procedures
- [[_MOC Classic PPM]]

%%Source: p2250-2296%%


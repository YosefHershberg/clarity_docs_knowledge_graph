---
title: Earned Value, EAC, and ETC (Classic PPM)
tags:
  - howto
  - classic
aliases:
  - Earned Value and Metrics
source_pages: 2288-2292
---
# Earned Value, EAC, and ETC (Classic PPM)

Earned value (EV) is a technique for determining the true cost or value of work performed. EV is expressed in terms of the approved budget assigned to a work breakdown structure activity. EV is also called Budgeted Cost of Work Performed (BCWP).

Use earned value metrics to review historical performance and predict future performance. EV fields can be displayed on any portlet or list page for tasks or projects.

## Create an Initial Baseline With Costs

Before earned value calculations are meaningful, create an initial baseline that includes financial data.

1. Create a project with staff, tasks, and assignments
2. Set up the project financial properties to associate rate and cost matrices for all resource types
3. Execute the **Rate Matrix Extraction** job
4. Run the **Update Earned Value and Cost Totals** job (or use the **Update Cost Totals** action)
5. Create the project baseline

## Default Earned Value Options

Set the project-level EV calculation method and associate the project to an earned value reporting period.

- Navigate to the project > **Properties > Scheduling** > **Earned Value** section
- Set the **EV Calculation Method** for the project
- Associate the project to an **EV Reporting Period**

The EV reporting period defines the frequency and interval for the **Update Earned Value History** job. The job takes historical EV snapshots and stores them in the earned value history table.

## Update Project Task Cost Totals

Update cost totals when you create a baseline, update a baseline, or change task information. This is required before viewing ACWP, BCWP, EAC, and ETC calculations.

> [!NOTE]
> Rolled-up cost or earned value data from child projects are not available on program or project list views. Program portlets display rolled-up data, but results are inaccurate for hierarchies of two or more levels.
Use the **Hierarchy** tab on projects and programs for accurate rolled-up financial data.

1. Schedule the **Rate Matrix Extraction** job to run periodically
2. Open the project and click **Tasks**
3. Open the **Actions** menu > **General** > **Update Cost Totals**
4. Open the **Tasks** menu and click **Gantt**

## Earned Value Metrics Reference

| Metric | Description | Formula | Baseline Required |
|--------|-------------|---------|-------------------|
| **BAC** | Budget at Completion ג€” budgeted total cost at baseline time | `(Actuals + Remaining Work) ֳ— actual cost` at baseline | Yes |
| **BCWS** | Budgeted Cost of Work Scheduled (planned value) | `Sum of BAC through a point in time` | Yes |
| **ACWP** | Actual Cost of Work Performed ג€” total direct cost of work performed | Sum of actual costs posted up to as-of date | No |
| **BCWP** | Budgeted Cost of Work Performed (earned value) | Based on EV calculation method | Yes |
| **EAC** | Estimate at Completion ג€” aggregate total cost over project life | `ACWP + [(BAC - BCWP) / CPI]` | ג€” |
| **EAC (T)** | EAC assuming typical variances | `ACWP + ETC` | No |
| **EAC (AT)** | EAC assuming atypical variances | `ACWP + (BAC - BCWP)` | Yes |
| **ETC (AT)** | Estimate to Completion ג€” atypical variances | `BAC - BCWP` | Yes |
| **ETC (T)** | Estimate to Completion ג€” typical variances | `(BAC - BCWP) / CPI` | Yes |
| **ETC (Cost)** | ETC based on cost rates | `Remaining labor cost + remaining nonlabor cost` | No |
| **CV** | Cost Variance ג€” value accomplished vs. amount spent | `BCWP - ACWP` | Yes |
| **SV** | Schedule Variance ג€” positive = ahead; negative = behind | `BCWP - BCWS` | Yes |
| **CPI** | Cost Performance Index ג€” ג‰¥1 = favorable | `BCWP / ACWP` | Yes |
| **SPI** | Schedule Performance Index ג€” <1 = behind schedule | `BCWP / BCWS` | Yes |

### ACWP Calculation Levels

| Level | Calculation |
|-------|-------------|
| Assignment | Calculated during actuals posting using the financial cost matrix |
| Detail task | `Sum of Actual Cost for all assignments on the task` |
| Summary task | `Sum of ACWP for all detail tasks` |
| Project | `Sum of ACWP for all summary tasks` |

### BCWP Calculation Levels

| Level | Calculation |
|-------|-------------|
| Task | Based on the selected EV calculation method |
| Project | Sum of BCWP for all WBS Level 1 tasks |

> [!NOTE]
> ETC (Cost) uses a project-level or resource-level cost rate. If the project is associated with a cost/rate matrix with rates for charge codes and roles, task-specific values are not used.
Instead, the project charge code or resource primary role is used. To generate ETC costs at team or task level, create financial plans populated by team allocations or task assignments.

## EV Calculation Methods

The calculation method determines how BCWP is computed. System-calculated methods derive BCWP automatically; user-defined methods require entering BCWP Override at the task level.

> [!NOTE]
> Regardless of the EV calculation method, a value entered in the **BCWP Override** field overrides the system-calculated BCWP and is used in all EV calculations.

| Method | BCWP Calculation | System-Calculated | When to Use |
|--------|-----------------|-------------------|-------------|
| **Percent Complete (PC)** | `BAC ֳ— % complete` | Yes | General use |
| **0/100** | `BAC` if 100% complete, else 0 | Yes | Work starting and completing in one reporting period |
| **50/50** | `BAC/2` if in progress; `BAC` if complete; `0` if not started | Yes | Work spanning two reporting periods |
| **Level of Effort (LOE)** | `BCWS` | Yes | Ongoing support/management tasks |
| **Weighted Milestones** | User-defined; enter BCWP Override at task level | No | Formal EVM ג€” milestone-weighted work |
| **Milestone Percent Complete (MPC)** | User-defined by dollar amount per milestone | No | Formal EVM ג€” dollar-weighted milestones |
| **Apportioned Effort (AE)** | User-defined; task effort tied to other task efforts | No | Discrete work related to other discrete work |

## How EV Calculation Methods Are Applied

## EV methods follow an inheritance hierarchy:

1. **Task-level setting** ג€” used directly in calculations
2. **Parent task** ג€” inherited if no method defined at task level
3. **Project** ג€” inherited if no summary task method defined
4. If no project-level method is set, the task is ignored in EV calculations

> [!TIP]
> Have your administrator define the object-level default EV calculation method for projects and tasks. Projects created after this change inherit the new default.

Projects created from templates inherit the EV calculation method set in the template.

> [!NOTE]
> If using Classic PPM with Microsoft Project and specifying an EV method other than Percent Complete, use Classic PPM to calculate, display, and report EV metrics.

## Related Notes

- [[Projects Teams Tasks]] ג€” Project creation and baseline setup
- [[Project Estimates ETC]] ג€” Managing ETC
- [[Financial Enablement]] ג€” Setting up financial properties for ETC cost calculations
- [[_MOC Classic PPM]]

%%Source: p2288-2292%%


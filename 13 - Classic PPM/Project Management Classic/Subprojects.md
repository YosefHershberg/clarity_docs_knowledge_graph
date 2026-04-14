---
title: Subprojects (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2280-2293
canonical: true
audience: everyone
domain: classic
---
# Define Subprojects (Classic PPM)

Subprojects let you group related projects under one master project for scheduling, tracking, and analysis. You can create plans and analyze individual projects in detail while also viewing, summarizing, and analyzing overall progress at the master project level.

**Key facts:**
- You can associate any number of projects together
- Information is not shared between subprojects, or between subprojects and the master project
- Subprojects are allocated at 100% to the master project (this cannot be changed)
- Subprojects participate in the master project baseline and earned value metrics

## Add Existing Subprojects to a Master Project

### Via Properties Page

1. Open the master project
2. Open **Properties** menu > **Subprojects**
3. Select the check box next to the project to add as a subproject
4. Click **Add**

### Via Gantt View

1. Open the master project
2. Open **Tasks** menu > **Gantt**
3. Click the **Add Existing Subproject** icon in the Gantt toolbar
4. Select the check box next to the project
5. Click **Add**

## Create Subprojects from Project Templates

1. Open the master project
2. Open **Tasks** menu > **Gantt**
3. Click the down arrow on the **Add Existing Subproject** icon > **Create New Project From Template**
4. Select a project template and click **Next**
5. Complete the project properties including:
   - **Assignment Pool** — Team Only or Resource Pool (Default: Resource Pool)
   - **Manager** — Resource responsible for managing the subproject (Default: current user)
   - **Page Layout** — Page layout for viewing project information
   - **Start Date** — Initial start date (Default: current date; Required)
   - **Finish Date** — Initial finish date (Default: current date)
   - **Set Planned Cost Dates** — Sync planned cost dates with investment dates (Default: Selected)
   - **Stage** — Investment lifecycle stage
   - **Goal** — Business case (Cost Avoidance, Cost Reduction, Grow the Business, etc.)
   - **Priority** — Relative importance for autoschedule (Values: 0-36, Default: 10)
   - **% Complete Calculation Method** — Manual, Duration, or Effort (Default: Manual)
   - **Department / Location** — OBS for the project
   - **Scale Work By / Scale Budget By** — Percentage adjustments relative to template
   - **Convert resources to roles** — Replace named resources with primary/team roles
6. Save changes

> [!WARNING]
> Verify that task and assignment start dates are on or after the project start date; otherwise, the project start date is automatically redefined.

## Create Subprojects from Project WBS

You can create a brand-new subproject directly from the master project's Gantt view.

1. Open the master project
2. Open **Tasks** menu > **Gantt**
3. Click the down arrow on **Add Existing Subproject** icon > **Create New Project**
4. Complete the project properties (same fields as above, without template options)
5. In the **Organizational Breakdown Structures** section, define OBS associations
6. Save changes

## View Combined Subproject Actuals and Estimates

From the master project, you can view combined actuals and effort for all subprojects. Use the **Hierarchy** tab to view effort rollup across subprojects.

## Lock Subprojects During Autoscheduling

You can set subprojects as read-only during autoscheduling of the parent project to prevent modifications.

1. Open the master project
2. Open **Properties** menu > **Subprojects**
3. Select the check box next to the subproject to lock during autoscheduling

> When a subproject is locked, a tentative schedule is not automatically published for it. The read-only setting is also honored by external schedulers (OWB, MSP).

## Control Access to Projects and Subprojects

Access to subprojects is governed by your standard access rights. Users need view access for subprojects and their tasks to access them in an external scheduler.

## Related Notes

- [[Project Templates]] — Create subprojects from templates
- [[Autoschedule]] — Autoscheduling with subprojects
- [[Program Grouping]] — Programs vs. master projects
- [[WBS and Task Dependencies]] — Gantt view operations
- [[_MOC Classic PPM]]

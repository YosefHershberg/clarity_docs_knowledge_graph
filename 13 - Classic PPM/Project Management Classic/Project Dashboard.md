---
title: Project Performance Dashboard (Classic PPM)
tags:
  - howto
  - classic
aliases:
  - Project Dashboard
source_pages: 2368-2370
canonical: true
audience: everyone
domain: classic
---
# Monitor Project Performance Dashboard (Classic PPM)

The Project Dashboard provides read-only summary views of project labor and team utilization data in graph and table format. Dashboard data updates automatically when you add or post new information to the project.

By default, the page displays three portlets: **General**, **Labor Resource Effort**, and **Team Utilization**. Administrators can add or remove portlets using the **Dashboard** tab of the Project Default Layout portlet in Studio.

## Program-Level Dashboard

At the program level, the dashboard shows summaries of total effort and actuals accumulated for all program projects. It also lets you compare overall benefit information with combined benefit data for all program projects.

Default program portlets:
- **General** — Read-only basic information about the program (name, ID, start/finish date, status)
- **Labor Resource Effort** — Up-to-date actuals, ETC, and allocation information
- **Team Utilization** — Total effort for each resource across all program tasks

## General Portlet

Displays basic project information.

| Field | Description |
|-------|-------------|
| **Start Date** | Initial start date; autocalculated to the first task start date once tasks exist |
| **Finish Date** | Initial finish date; autocalculated to the last task finish date once tasks exist |
| **Status Indicator** | Stoplight: Green = on track, Yellow = minor variance, Red = significant variance |

> [!WARNING]
> Verify that task and assignment start dates are the same or later than the project start date — otherwise the project start date is redefined automatically.

> [!WARNING]
> Verify that task and assignment finish dates are the same or before the project finish date — otherwise the project finish date is redefined automatically.

> [!NOTE]
> Starting with Release 14.4, default Status Report lookup values changed from "Minor Variance" to "Needs Help" and from "Significant Variance" to "At Risk". The "On Track" value remains unchanged.

## Labor Effort Portlet

Displays project actuals, ETC, and allocations. Use this portlet to compare up-to-date actuals and estimates, and to view baseline and allocation variances.

| Field | Formula / Description |
|-------|-----------------------|
| **Total Effort** | `Actuals + Remaining ETC` |
| **Actuals** | Total hours submitted and posted against project tasks |
| **ETC** | Current estimate to complete (from Estimating properties page) |
| **Baseline** | `Total of Actuals + ETC`; zero if no baseline is in use |
| **Baseline Variance** | `Baseline Usage - Total Effort` |
| **Remaining Allocation** | `Allocation - Actuals` |
| **Allocation Variance** | `Remaining Allocation - Total Effort` |

## Project Status Portlet (Interactive)

An interactive portlet containing an Xcelsius visualization with multiple components. Access it from the projects list by clicking the **Status Report** icon in the Overview column.

**Prerequisites:** Run the **Update Report Tables**, **Cost Matrix Extraction**, and **Time Slicing** jobs.

| Field | Description |
|-------|-------------|
| **Baseline Finish** | Completion date when the project was baselined |
| **Lifecycle Category** | Controls available lifecycle stages |
| **Lifecycle Stage** | Current stage; used in portfolio analysis |
| **Status** | Green / Yellow / Red stoplight |

**Components included:**
- **Investment Allocation Hours by Role** — Pie chart showing total allocation hours per role
- **Spending Plan by Month** — Bar chart of cost plan by month
- **Schedule Variance** — Gauge showing difference between baseline finish and current finish date (if no baseline: current date minus finish date)
- **Issues** — List of investment issues with name, status, and priority
- **Risks** — List of investment risks with name, status, and priority

### Issue and Risk Status Colors

| Color | Meaning |
|-------|---------|
| Green | No high or medium priority issues/risks |
| Yellow | Medium priority issues/risks exist |
| Red | High priority issues/risks exist |
| White | Status not defined |

## Team Utilization Portlet

Displays total effort for each resource across all project tasks. Drill down to view utilization by individual resource and task.

Some settings can be configured on the Team Utilization graph; the General and Labor Resource Effort portlets are read-only.

## Associated Releases

Releases represent new future deliverables. Link releases to a project or program to track implementation effort.

**Open a release associated with a project or program:**
1. Open the project or program
2. Open the **Properties** menu and click **Associated Releases**
3. Click the name of a release

**Unlink a release:**
- Open the release and remove the association from the release properties page
- The release is removed from the list on the release properties page and unlinked from the project or program

## Cancel Programs Marked for Deletion

> [!TIP]
> In Release 15.5.1, the Delete Investments job was renamed to **Delete Investments and Time Reporting Periods**.

You can cancel deletion of a program if:
- The Delete Investments job has not yet run
- The program remains inactive and listed
- You have not added time entries to the program

1. Click **Home > Portfolio Management > Programs**
2. Expand the filter and search for inactive programs
3. Select the check box next to the program and click **Cancel Deletion**
4. Click **Yes** to confirm

## Related Notes

- [[Program Grouping]] — Create and manage programs
- [[Projects Teams Tasks]] — Project creation and monitoring
- [[Risks Issues Changes]] — Managing risks and issues
- [[_MOC Classic PPM]]

%%Source: p2368-2370%%

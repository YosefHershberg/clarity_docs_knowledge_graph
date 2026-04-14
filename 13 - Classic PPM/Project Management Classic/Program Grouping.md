---
title: Group Projects Under a Parent Program (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2357-2362
canonical: true
audience: everyone
domain: classic
---
# Group Projects Under a Parent Program (Classic PPM)

Programs are a special type of top-level project that act as the parent or umbrella for one or more child investments. Project managers use programs to view combined actuals and effort for all child projects, providing an important top-down summary view of organizational goals.

## Programs vs. Master Projects vs. Projects

| Attribute | Program | Master Project | Project |
|-----------|---------|----------------|---------|
| Display sum of subproject values | Yes | Yes | N/A |
| Assign staff members | No | Yes | Yes |
| Add participants | Yes | Yes | Yes |
| Apply WBS | No | Yes | Yes |
| Create tasks | Key milestones only | Yes | Yes |
| Financial planning | Yes | Yes | Yes |
| Connect to scheduler | Read-only | Read/Write | Read/Write |
| Create from template | No | Yes | Yes |

**Key restrictions for programs:**
- Cannot staff at the program level (roles are aggregated from subprojects and are read-only)
- Cannot create non-milestone tasks
- Cannot be financially enabled
- Cannot be used as templates
- Can view combined actuals and effort from all projects in the program

## Create a Program

1. Click **Home > Portfolio Management > Programs**
2. Click **New**
3. Complete the fields:
   - **Assignment Pool** — Team Only or Resource Pool
   - **Dashboard View** — Select a dashboard layout:
     - PMO-Program Status, PMO-Project Status, PMO-Project Storyboard (with PMO Accelerator)
     - Program Layout (view budget data)
     - Project Default Layout (default labor/team utilization charts)
   - **Stage** — Company-defined stage for the program
   - **Priority** — Score for scheduling in Open Workbench (Values: 0-36, 0 = highest)
   - **% Complete Calculation Method** — Manual, Duration, or Effort (Default: Manual)
4. In the **Organizational Breakdown Structures** section, enter the OBS node (Department and Location OBS)
5. Save changes

> [!NOTE]
> After creating a program, you can open it in CA Open Workbench in read-only mode via the **Open in Scheduler** menu.

> [!TIP]
> You cannot use programs as templates. To standardize programs, designate a project template with default settings, remove any tasks and actuals, create a project from the template, then convert that project into a program.

## Convert a Project into a Program

Existing projects can be converted to programs from the project properties page.

1. Open the project
2. Open the **Actions** menu > **Convert to Program** (or use the project settings)
3. Confirm the conversion

> [!WARNING]
> Converting removes tasks (programs can only have milestones), financial enablement, and staffing. Plan accordingly.

## Define Program Start and Finish Dates

Program dates span the collective date range of all child projects. Adjust the program start and finish dates to encompass all child investments.

## Add Projects to Programs

1. Open the program
2. Navigate to the subprojects or team structure
3. Add existing projects as subprojects of the program

## Create Program Dependencies

Create key milestone tasks at the program level and link them as dependencies to child project milestones.

## Monitor Program Performance

View the program dashboard to see:
- Combined actuals across all child projects
- Budget vs. planned cost
- Effort rollup from all child projects
- Key milestones and their status

## View Combined Subproject Actuals and Estimates

From the master program, use the **Hierarchy** tab (if applicable) or the program dashboard to view aggregated effort and actuals across all child investments.

## Related Notes

- [[Subprojects]] — Technical details on creating subprojects
- [[Project Templates]] — Using templates before converting to programs
- [[Earned Value and Metrics]] — EVM at the master/program level
- [[Project Dashboard]] — Dashboard portlet configuration
- [[_MOC Classic PPM]]

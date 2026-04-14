---
title: OWB Manage Projects with Open Workbench
tags:
  - howto
  - classic
aliases:
  - Open Workbench
source_pages: 2466-2565
canonical: true
audience: everyone
domain: classic
---
# Open Workbench (OWB) ” Classic PPM Integration

CA Open Workbench (OWB) is a desktop project scheduling application that integrates with Classic PPM via Schedule Connect.
Use OWB to create and manage projects, populate them with tasks, define dependencies, assign resources, and autoschedule. When connected to Classic PPM, you can save and share projects in either tool.

## Glossary

| Term | Definition |
|------|------------|
| **Availability** | Amount of time a resource is available and can be allocated to a project |
| **Baseline** | Snapshot of the project schedule used to measure progress against earlier estimates |
| **Critical Path** | Set of tasks where any delay lengthens the project finish date |
| **Critical Task** | Task with float of zero or less; delays affect the project finish date |
| **Dependency** | Ordering relationship between tasks (internal or external) |
| **Duration** | Length of time (business days) a task requires, including start and finish dates |
| **ETC** | Estimate To Complete ” estimated time for a resource to complete an assignment |
| **Fixed Duration** | Task that must finish in a specific time regardless of resource assignments |
| **Float** | Days a task can be delayed without affecting the project finish: Late Start ’ Early Start |
| **Key Task** | Task marked as critically important; does not affect other OWB behavior |
| **Lag** | Predetermined time gap between the start/finish of two tasks |
| **Loading Pattern** | How work is spread across task duration (Fixed, Contour, Front, Back, Uniform) |
| **Negative Lag** | Time overlap where two tasks can be simultaneously in progress |
| **Pending Estimate** | ETC in pending state until the project manager accepts or rejects it |
| **Subnets** | Set of tasks with dependencies among themselves; each subnet can have its own critical path |
| **Variable Duration** | Task whose length can change based on resource availability during autoschedule |

### Dependency Types

| Type | Abbreviation | Description |
|------|-------------|-------------|
| Finish-Start | FS | Successor cannot start until predecessor finishes |
| Finish-Finish | FF | Successor cannot finish until predecessor finishes |
| Start-Start | SS | Successor cannot start until predecessor starts |
| Start-Finish | SF | Successor cannot finish until predecessor starts |

## Install and Configure Open Workbench

### System Requirements

- Windows 10 (mobile devices and tablets not supported due to screen resolution constraints)
- Power user rights: Registry Edit rights and read/write access to `%ProgramFiles(x86)%` folder
- Minimum 256 MB RAM

> [!NOTE]
> OWB is not accessibility compliant when the display setting is increased to more than 100%.

### Installation Steps

> [!WARNING]
> The OWB installer resets customized views saved in the library default views folder. Back up custom views before reinstalling.

1. Uninstall any existing version of Open Workbench and Classic PPM Schedule Connect from **Control Panel**
2. Download the latest version of OWB:
- From **Classic PPM DVD**: navigate to `Clients\OpenWorkbench` and run `owbsetup.exe`
- From **Classic PPM Application**: **Home > Personal > Account Settings > Software Downloads** tab (requires Software Download
- Open Workbench access right)
3. Save and double-click the executable file
4. Select language preference and click **OK**
5. Agree to the Open Workbench license
6. Follow on-screen instructions to complete installation

### Grant User Access Rights

As an administrator, grant users one of the following rights in Classic PPM:
- **Project
- Edit Management
- All** ’ Workbench [Read-Write]
- **Project
- View Management
- All** ’ Workbench [Read-Only]

### Configure Classic PPM Project Management Options

Before using OWB with Classic PPM, configure these options in Classic PPM:
- **Allow Edit of Allocations when replacing Role** ” allows editing resource allocation while a project is locked
- **Only Export Current Baseline When Opening Projects in a Scheduler** ” exports only the current baseline when multiple baselines exist

### Configure the Log on to Server Option

1. Click **Preferences** in the application menu
2. Select the **Log on to server** option and click **OK** (Default: Cleared)

## Configure Open Workbench

### General Options

Open **Preferences > General tab**. Key fields:

| Field | Description | Default |
|-------|-------------|---------|
| **Show Tips at Startup** | Show Tip of the Day on launch | Not selected |
| **Display Status Bar** | Show status bar at bottom | Selected |
| **Log on to server** | Open the Classic PPM login dialog on launch | Cleared |
| **View Shortcut Bar** | Show the Library shortcut bar | Selected |
| **Recent Project File List** | Number of recently opened files | 4 |
| **Default Project Format** | RMP / XML / Classic PPM | RMP |
| **First Week of Year** | User Locale / First Week Contains 1/1 / First Full Week After 1/1 / ISO | User Locale |
| **Default Currency** | Currency code for calculations | USD |
| **Note Categories** | Define categories for grouping project/task notes | ” |

### Default Options

Open **Preferences > Defaults tab**:

**Assignments section:**
- **Loading Pattern**: Fixed / Contour / Front / Back / Uniform. Default: Front
- **Fixed Duration**: Select to specify fixed resource duration type
- **Default Unit**: Days or Hours. Default: Hours
- **Auto Calculate ETC**: Auto-calculate ETC for all assignments. Default: Cleared

**Dependencies section:**
- **Type**: FS / SS / FF / SF. Default: Finish-Start
- **Lag**: Days after predecessor constraining date before successor starts
- **Lag Type**: Daily or Percent. Default: Daily

### File Locations

Open **Preferences > Locations tab**:
- Define default locations for libraries, calendars, note categories, and highlights
- Select a file path from the Description column and click **Browse** to set the location

### WBS Labels

Open **Preferences > WBS tab**:
- Define WBS level names; minimum 4 levels are always retained
- Defaults: Milestone, Task, Phase, Activity

### Display Colors

Open **Preferences > Display tab**:
- Set colors for horizontal/vertical lines (default: Light Gray / Dark Gray)
- Set row background colors; alternate by Line or Object
- Click **Other** to define custom colors

### Configure Time Scales

1. Open a spreadsheet view with a Gantt chart
2. Double-click the column heading that displays dates
3. Set **First Date Displayed** (Project Start, Today's Date, User Defined Date, etc.)
4. Set **Scale**: Weekly / Daily / Monthly / Quarterly / Semi-annually / Annually / Customized
5. Set **Number of Periods** (unavailable when Customized is selected)
6. Click **OK**

## Getting Started with Open Workbench

### File Menu (Application Menu)

**New** (Ctrl+N), **Open** (Ctrl+O), **Close**, **Save** (Ctrl+S), **Save As**, **Print Setup**, **Page Setup**, **Print Preview**, **Print** (Ctrl+P), **Quick Print**, **Project Properties**, **Preferences**, Recent File list, **Exit**

### Ribbon Bar

**Tasks ribbon:**
- **Clipboard**: Cut, Copy, Paste
- **Edit**: Delete, Modify, Insert, Phase, Milestone, Task, Indent, Outdent, Undo
- **Search**: Quick Search, Extended Find, Find Next
- **Quick Filter**: Filter by resource; Zoom In/Out

**Project ribbon:**
- **Schedule**: Autoschedule, Critical Path, Recalculate, Pending Estimates
- **Baselines**: Define, Manage
- **External**: Subprojects, Dependencies
- **Assignments**: Transfer
- **View**: New, New Filter, New Sort, Save, Refresh, Manage Library, Colors and Shapes
- **PPM (Clarity group)**: Update, Calendar, System Options, New Notes, Resources, Status, New Tasks and Assignments, Team Members
- **Calendar**: Edit

> [!WARNING]
> Using **System Options** in the PPM group can change the default options of your working copy.

### View Library

- Displays up to 32 groups of views, sorts, and filters
- Default groups:
  - **Favorites**: Gantt Chart, CPM Network, Phase Level Gantt
  - **Planning**: WBS Definition, Dependency Definition, Resource Assignment
  - **Executing**: Schedule and Dependency Status
  - **Controlling**: Status Update, Variance Analysis, Revise Schedule
  - **Filters & Sorts**: Clear Filters, Key Tasks, Sort by Resource, Pending ETC
- Reposition the library by dragging the top of the shortcut bar
- Hide/restore via **Preferences > General > View Shortcut Bar**

### Calendars

Open **Project ribbon > Calendar > Edit**:
- Create, edit, delete, and apply calendars
- Assign holidays and non-work days
- Calendar edits apply to all open projects in the session; changes are not saved back to Classic PPM

> [!NOTE]
> If you have not defined a global file location, calendar changes are lost when you close the session.

## Create, Open, and Save Projects

### Create a Project

**From application menu:**
1. Click **File > New**
2. Click **File > Project Properties** and complete the **Description** tab
3. Click **OK** and save

**From command line:**
- `npWBench /r [file].rmp + /rR CLARITY\[projectID]` ” creates a new master project with read-only file and read-only Classic PPM project

### Open Projects

**From Classic PPM:**
- Open the project in Classic PPM and select **Open in Scheduler > Workbench**
- Select **Read-Only** or **Read-Write**; Read-Write locks the project

**From Open Workbench:**
1. Click **Open** in the application menu
2. Click the **Clarity Host** icon to list available Classic PPM projects
3. Select a project file and file type
4. Select **Open as read-only** if needed
5. Select **Create Subprojects** to open as a subproject in a new master project
6. Click **Open**

> [!NOTE]
> When you open a project in Read-Write mode, it is locked. Other users can only open it as read-only.

**Events when opening a Classic PPM project in OWB:**
- All subprojects under the master project are loaded
- Dependent tasks from other projects are loaded (not the entire dependent project)
- All baseline data is loaded (or only the current baseline, if configured)

### Save Projects

| Option | Description |
|--------|-------------|
| **Workbench files (RMP)** | Save to computer or network as an OWB RMP project file |
| **Classic PPM Projects** | Save the project to Classic PPM |
| **XML Files** | Save as XML file; clears the Retain Lock option |

> [!WARNING]
> Always select the **Retain Lock** check box when saving to RMP or XML if you plan to save changes back to Classic PPM later. Without it, you may be unable to save changes.

**When saving to Classic PPM:**
- You become the project manager with view/edit access rights
- The project remains locked in Classic PPM with your user name
- The saved project reflects updated schedules; collaboration and financial information are not modified

**Save a copy as a new project:**
1. Open the project in OWB
2. Click **Save As** in the application menu
3. Enter a new, unique Classic PPM project ID
4. Click **Save**; choose to unlock the original and remove the working copy or hold the lock

### Project Locks

- **Read-Only** ” no lock placed; other users can still edit locally but cannot save to Classic PPM
- **Read-Write** ” project is locked; other users can open read-only but cannot save changes to Classic PPM

**Close and hold the lock:**
1. Click **Save As** in the application menu
2. Select **Workbench Files (*.rmp)** from the Save as type dropdown
3. Select the **Retain Lock** check box and click **Save**
4. Click **File > Close** to close without saving to Classic PPM

### Refresh Project Data

1. Open **Project ribbon > Update** (Clarity group)
2. Select which data to refresh:
- **Calendars** ” refresh project calendar with changes made in Classic PPM
- **System Options** ” update roles and custom data mapping
- **New Notes** ” include task notes created since last open/refresh
- **Resources** ” refresh resource attributes (not assignment revisions)
- **Status** ” include changes to Actual Usage, Pending Actuals, and Pending Estimates
- **New Tasks and Assignments** ” include new tasks/assignments created since last open
- **Team Members** ” include new or updated team members
3. Click **OK**

> [!NOTE]
> The project must be open in read/write mode to select or clear items in the Options for [Project] section.

## Add Tasks and Assign Resources

### WBS Structure

Default OWB WBS levels: **Phase > Activity > Task or Milestone**

### Insert Tasks

1. Open a spreadsheet view (e.g., Gantt Chart view) showing the task detail pane
2. Right-click the row above where you want the task and click **Insert Task**
3. Click in the new task cells to enter data, or right-click and click **Modify**

### Shift Tasks (Gantt Chart)

Drag Gantt bars to shift task dates:

- **Left edge of bar** ” changes start date only
- **Middle of bar** ” moves the entire task (preserves duration)
- **Right edge of bar** ” changes end date only

> [!NOTE]
> You cannot shift completed tasks or locked tasks if the **Freeze Gantt Bars** option is selected.

### Move Tasks in WBS

1. Click the task row header to select the task
2. Drag to the new position in the view

### Task Duration Types

| Type | Description |
|------|-------------|
| **Fixed Duration** | Duration is constant and not driven by resource assignments |
| **Variable Duration** | Duration adjusts based on resource availability during autoschedule |

### Edit Task Properties

Right-click a task > **Modify** to open the **Task Properties** dialog. Key fields on the **General** tab:

| Field | Description |
|-------|-------------|
| **Type** | Milestone / Task / Phase / Activity. Default: Task |
| **Key Task** | Mark task as critical; appears in Key Tasks list on Project Properties |
| **Duration** | Task length in business days (1“20,863) |
| **Fixed (Duration)** | Specifies fixed or variable duration. Default: Cleared (Variable) |
| **Priority** | 0“36; lower = higher priority. Default: 10 |
| **Inherited (Priority)** | Inherit priority from parent task. Default: Selected |
| **Status** | Not Started / Started / Completed |
| **% Complete** | Task progress. Auto-calculated if method = Effort or Duration |

**Task schedules displayed on the General tab:**
- **Current** ” values used when calculating critical path
- **Baseline** ” auto-generated during baselining (read-only)
- **Early** ” earliest possible completion based on dependencies (read-only)
- **Late** ” latest possible completion based on dependencies (read-only)

**Task Status rules:**
- You can enter 100% Complete for tasks with status of Started
- You can only mark tasks Completed if the resource has no remaining ETC
- If % Complete is reduced from 100, status changes back to Started

### Define Scheduling Constraints

On the **Advanced** tab of Task Properties, set constraint dates:

| Constraint | Description |
|------------|-------------|
| **Must Start On** | Exact required start date; overrides Start No Earlier/Later Than |
| **Start No Earlier Than** | Task must start on or after this date |
| **Start No Later Than** | Task must start on or before this date |
| **Must Finish On** | Exact required finish date; overrides Finish No Earlier/Later Than |
| **Finish No Earlier Than** | Task must finish on or after this date |
| **Finish No Later Than** | Task must finish on or before this date |

### Lock Tasks in Place

1. Open the **Advanced** tab on Task Properties
2. Select the **Lock for Scheduling?** check box

> [!NOTE]
> You can override this lock by autoscheduling with the **Schedule Assignments on Locked Tasks** option.

### Define Task Dependencies

Use the **Dependencies** tab on Task Properties or drag Gantt bar edges.

**Create internal dependencies:**
1. Right-click the task > **Dependencies**
2. Select the task in the **Project Tasks** grid
3. Double-click, drag to the Dependencies grid, or click **Add Predecessor** / **Add Successor**
4. Click **OK**

**Create a dependency chain (multiple tasks):**
1. Select the predecessor task
2. Hold **Ctrl** and click each successor task
3. Right-click > **Make Chain**

**Edit dependency fields:**

| Field | Options | Default |
|-------|---------|---------|
| **Pred/Succ** | Predecessor or Successor | Successor |
| **Type** | FS / SS / SF / FF | Finish-Start |
| **Lag** | Number of days or percent | ” |
| **Lag Type** | Daily or Percent | Daily |

**Lag examples:**
- Lag = 3, Type = Daily ’ 3-day gap between tasks
- Lag = -1, Type = Daily ’ tasks overlap by 1 day (negative lag)
- Lag = 0 ’ schedule first task on one day, successor starts the next day

**Create external dependencies:**
1. Right-click the task > **Insert External Dependency**
2. Locate and select the project and task in the WBS
3. Click **Select**

### Assign Resources to Tasks

1. Right-click a task > **Assignments**
2. Select the resource from the **Project Resources** grid
3. Click **Assign** then **OK**

### Resource Loading Patterns

| Pattern | Description |
|---------|-------------|
| **Front** | Allocate resource usage as early as possible. Default |
| **Back** | Allocate resource usage as late as possible |
| **Uniform** | Distribute work evenly across task on available days |
| **Contour** | Fit loading around remaining availability, smoothing peaks and valleys |
| **Fixed** | Manual allocation; locked during autoschedule and recalculate |

Set loading pattern: right-click the task > **Assignments** > edit **Loading** field for the resource.

### Define Resource ETC

- Enter ETC in the **Estimate** field on the **Assigned Resources** grid (via right-click > Assignments)
- Or select the **Schedule view** > enter ETC in the non-time-scaled or time-scaled ETC column
- Change the ETC format to **Cost** for cost-based expense resources

### Transfer Task Assignments

1. Open **Project ribbon > Assignments > Transfer**
2. Select the source resource from **Transfer assignments from this resource**
3. Select the task(s) to transfer
4. Select the target resource from **to this resource**
5. Click the arrow buttons to transfer selected or all assignments
6. Click **OK** (baselines are preserved by default)

> [!NOTE]
> If the source resource has posted actuals, they remain assigned; only remaining ETC transfers to the new resource.

### Define Advanced Task Properties

Open the **Advanced** tab on Task Properties to set values for EVA fields:
- **% Complete**, **Actual % Spent**, **ACWP**, **AV**, **BAC**, **BCWP**, **BCWS**, **EAC**, **Unplanned**

## Manage Resources and Roles

### Resource Types

| Type | Description |
|------|-------------|
| **Labor** | People who work on tasks |
| **Equipment** | Machinery used to perform a job |
| **Material** | Materials used to perform a job |
| **Expense** | Costs associated with a resource (e.g., travel) |

### Create Resources

> [!TIP]
> Best practice: Create resources in Classic PPM. Resources created in OWB must have matching IDs in Classic PPM to save the project back.

1. Open a view with the resource detail pane (e.g., Gantt Chart view)
2. Right-click a resource > **Insert**
3. Right-click the new empty resource row > **Modify**
4. Define general and advanced properties; click **OK**

### Add Resources from Classic PPM

1. Click **Project Properties** > **Resources** tab
2. In **Global Resources**, expand a role folder and select a resource or role
3. Click **Add** then **OK**

### Define Resource General Properties

Right-click the resource > **Modify > General tab**:

| Field | Description | Default |
|-------|-------------|---------|
| **Category** | Resource category for grouping/filtering | ” |
| **Rate** | Billing rate applicable today | 1.0 |
| **Type** | Labor / Equipment / Material / Expense | Labor |
| **Availability** | Default hours per day | 8.0 |
| **From / To** | Date range the resource is available | ” |

> [!NOTE]
> If using OWB with Classic PPM, only Availability, From, and To data are saved back. Other property changes are discarded ” make them in Classic PPM directly.

### Resource Role Assignments

There are three role types:

- **Primary** ” default role; cannot be saved back to Classic PPM
- **Project-level** ” role for a specific project; saved back to Classic PPM
- **Assignment-level** ” role for a specific task; saved back to Classic PPM

Edit project-level role: right-click resource > **Modify > Advanced tab** > scroll to **Project Role** field.

Edit assignment-level role: add the **Assignment Role** field to the task detail pane > select from dropdown.

### Cost Rates and Currency

- Cost rates are retrieved from the Classic PPM rate matrix when you open the project
- OWB supports time-varying and project-specific cost rates (changes are for what-if purposes only; cannot be saved to Classic PPM)
- Monetary values display in the home currency set in the project
- Currency conversions happen for resource rates (not expense assignments, budgets, or custom fields)

> [!NOTE]
> You cannot enter a zero billing rate in OWB. If a resource has a zero rate, add a row to the Classic PPM rate matrix and run the **Rate Matrix Extraction** job.

### Classic PPM Rate Matrix Extraction Job

Run this job each time the rate matrix changes, financial properties change, or resources are added to an investment.

Key parameters:

- **Extract Cost and Rate Information** ” generates rates for a wider range including dates before/after project start/finish
- **Prepare Rate Matrix Data** ” updates a copy of the rate matrix with the most recent information
- **Update Rate Matrix Data** ” copies the updated rate matrix copy to the live rate matrix

### Define Resource Calendar

1. Right-click the resource > **Modify > Calendar tab**
2. Select a base calendar from **Based on** (USA, United States, United Kingdom). Default: USA
3. Click dates to select them, then click **Workday** or **Holiday**
4. Click **Reset** to clear individual exceptions; **Reset All** to restore base calendar settings

### Pending Estimates

A pending estimate is the pending state of ETC submitted by a resource via their Classic PPM timesheet, awaiting project manager acceptance.

**Workflow:**
1. Resource creates a Classic PPM timesheet
2. Resource enters actuals and edits ETC to the pending ETC
3. Resource posts the timesheet
4. Project manager accepts or rejects the pending ETC in OWB
5. Project manager autoschedules the project

**Accept or reject pending estimates:**
1. (Optional) Select specific tasks
2. Open **Project ribbon > Pending Estimates** in the Schedule group
3. Select scope (project / view / selected tasks) and choose **Accept** or **Reject**
4. Click **OK**

**Add pending estimate fields to a view:**
- Task Estimate to Complete
- Task Pending Estimates
- Task Pending Estimate Override?
- Task Pending Actuals
- Task Pending Actuals?

## Schedule Projects

### Development Process (Best Practice)

1. Adjust resource calendars (work days and holidays)
2. Autoschedule without resource constraints
3. Autoschedule with resource constraints to eliminate overcommitment
4. Prioritize phases, activities, and tasks
5. Recalculate duration of overcommitted tasks
6. Lock tasks that should not be rescheduled
7. Refine loading patterns
8. Adjust task priority
9. Autoschedule again with constraints
10. If needed: manually shift tasks or adjust dependencies, then autoschedule again

### Define Project Scheduling Properties

Click **Project Properties > Scheduling tab**:

| Field | Description | Default |
|-------|-------------|---------|
| **Start** | Project start date | Current system date |
| **Imposed (Start)** | Fix the project start; autoschedule cannot change it | ” |
| **Finish** | Project completion date | ” |
| **Imposed (Finish)** | Fix the project finish; autoschedule cannot change it | ” |
| **As-of** | Reference date for EVA calculations; ETC not scheduled before this date | ” |
| **Priority** | Default priority for summary tasks (0“36; lower = higher priority) | 10 |
| **Critical Path Type** | Current or Baseline | Current |
| **Subnets (All Projects)** | Calculate separate critical paths for each subnet | Cleared |

### Autoschedule

1. Open **Project ribbon > Autoschedule**
2. Set the **Start Date**
3. Configure options:

| Option | Description | Default |
|--------|-------------|---------|
| **Resource Constraints** | Consider resource availability when scheduling | Selected |
| **Schedule from Finish Date** | Backwards schedule from a deadline | Cleared |
| **Honor Constraints on Started Tasks** | Honor constraints on started tasks | Cleared |
| **Schedule Assignments on Locked Tasks** | Move ETC within locked task boundaries | Cleared |
| **Start Successors on Next Day** | Successors with zero lag start the day after predecessor finishes | Cleared |

4. Click **OK**

**Autoschedule task scheduling order:**
1. Must Start On or Must Finish On constraints
2. Task priority (lower values rank higher)
3. Task float (lower values rank higher)
4. Task has started
5. Physical location in the WBS (higher = higher priority)

**Three-pass process:**
- Pass 1: Create baseline schedule; priority sort to resolve conflicts
- Pass 2: Create the schedule (with optional resource constraint pre-pass)
- Pass 3: Recalculate critical path based on pass 2 schedule

> [!WARNING]
> Dependencies, constraints, and resource availability can be set such that autoschedule cannot produce a schedule free of violations or resource overallocations.

### Recalculate Task Duration

Select one or more tasks > **Project ribbon > Recalculate** (Schedule group)

Formula: `Duration = (actuals + ETC) / (resource availability per day × max % per day)`

> [!NOTE]
> Locked tasks, completed tasks, and tasks with Contour loading patterns (recalculated as Uniform) are handled specially. Fixed tasks are excluded from recalculation.

### Schedule Subnets

1. Click **Project Properties > Scheduling tab**
2. Select **Subnets (All Projects)** in the Critical Path section
3. Autoschedule or Calculate Critical Path

## Multiple Projects and Subprojects

### Master Project Considerations

- Each time you open the master project, OWB retrieves all subproject data
- Autoscheduling the master project changes read-only subproject dates temporarily; changes are not saved unless you open and autoschedule the subproject directly
- A resource's default availability on a master project is capped at the highest default availability defined on any subproject

### Insert a Subproject

1. Right-click in the view > **Insert Subproject**
2. Select the file type (XML files cannot be inserted as subprojects)
3. Select the project from the list
4. Set **Open as read-only** and **Create Subprojects** as needed
5. Click **Select**

### Insert a Subproject Task (Partial Subproject)

1. Open a view with the task detail pane
2. Right-click the target task > **Insert Subproject**
3. Expand summary tasks to select the specific task to insert
4. Click **Select**

> [!NOTE]
> A partial subproject insertion is always read-only.

### Delete Subproject Links

1. Open **Project ribbon > External > Subprojects**
2. Select the subproject or subproject task
3. Click **Delete** then **OK**

> [!NOTE]
> This removes the link, not the subproject itself.

## Baseline Projects

When to Baseline

Set a baseline after management approves the project plan and before actuals are tracked. Rebaseline when management approves a new plan basis.

### Set a Baseline

1. Open **Project ribbon > Define** (Baselines group)
2. Select **Project** scope and **Set**
3. Click **OK**

Or use the **Multiple Baselines** dialog:
1. Open **Project ribbon > Manage** (Baselines group)
2. Click **New**; the new baseline is named Baseline1 (or Baseline2 if Baseline1 exists)
3. Edit the **Code**, **Name**, and **Description**
4. Click **OK**

### Manage Multiple Baselines

1. Open **Project ribbon > Manage** (Baselines group)
2. Select the **Current** check box next to the baseline to set as the current version
3. Click **OK**

> [!NOTE]
> Only one baseline can be marked as Current. The current baseline is used for EVA calculations.

### Display Baseline Data in a View

Add these fields to the task detail pane:

- Task Baseline Cost
- Task Baseline Usage
- Task Baseline Usage (aggregated)
- Assignment Baseline Cost
- Resource Baseline Cost (resource detail pane)

To show baseline bars on the Gantt chart: double-click the Gantt chart > select the **Baseline** check box.

### Rebaseline a Project

1. Open **Project ribbon > Define** (Baselines group)
2. Select **Project** and **Set**
3. Click **OK** and confirm with **Yes** to overwrite the prior baseline

### Clear Baseline Values

1. Open **Project ribbon > Define** (Baselines group)
2. Select scope (Project / View / Selected Tasks) and **Clear**
3. Click **OK** and confirm

### Multiple Baselines with Master Projects

- When you set a baseline for a master project, it is also set for all subprojects
- Master project baseline data is a dynamic aggregation of its own and all subproject baseline data
- If you rebaseline the master project, all subproject baselines are replaced

## Track and Analyze Projects

### Tracking Methods

| Method | Description |
|--------|-------------|
| **Total Actual Usage** | Track totals per resource per task; enter in views or Resource Properties |
| **Periodic Actual Usage** | Record actuals per time period; most comprehensive approach |
| **Task Status** | Monitor status, change dates, enter % complete; easiest method |

### Earned Value Analysis Fields

| Metric | Formula |
|--------|---------|
| **BCWS** | Cumulative baseline usage × resource billing rate through as-of date |
| **ACWP** | Total cost of completed work during a given period |
| **BCWP** | % of total budget = % of actual work performed |
| **CV** | BCWP ’ ACWP |
| **SV** | BCWP ’ BCWS |
| **CPI** | BCWP / ACWP |

> [!NOTE]
> OWB can only compute EVA variances if you have set a baseline. Also enter the project as-of date and resource billing rates for EVA to produce accurate results.

### % Complete Calculation Methods

| Method | Behavior |
|--------|---------|
| **Manual** | Manually enter % Complete for project and all tasks |
| **Duration** | % Complete = Completed Duration / Total Duration (auto for summary tasks; manual for detail tasks) |
| **Effort** | % Complete = Labor Actuals / (Labor Estimates + Labor Actuals) ” auto for all tasks |

## Display Project Data in Views

### View Types

- **Spreadsheet Views** ” display data in editable tables, optionally with Gantt charts and resource detail panes
- **CPM Network Views** ” graphical model of tasks and dependencies in org-chart format; read-only data entry

### Create a View

1. Open **Project ribbon > New** (View group)
2. On the **Layout** tab, expand information folders (Task, Resource, Project, Highlights) and drag field names to the grid
3. On the **Description** tab, set View Type (Spreadsheet / CPM), Level of Analysis, Name, and other settings
4. Click **OK** and save the view (.rwv file)

> [!TIP]
> Save frequently used views in the **Favorites** library group.

### Configure a Gantt View

1. Open a view with a Gantt chart
2. Double-click the Gantt chart
3. Set **% Displayed**: Pct Expend / No Pct / Pct Complete / Act Thru
4. Set display options: Baseline, Float, Stacked, Show Dependencies, Freeze Gantt Bars, Show Summary Task Progress, Discontinuous
5. Set **Display Dates**: Width, Today's Date / Project Start / As-of Date / Project Finish / Pending Finish

### Apply Formats to Cells

1. Open **Project ribbon > Manage Library** > select the view > **Edit**
2. Select the cell and click **Format Cell**
3. Set Width, Decimals, Alignment, Units/Format, Period Unit
4. Set options: Protect, Blank if Zero, Column Totals, Tabulate, WBS Indent
5. Click **OK**

### Filter, Search, and Sort

**Create a filter:**
1. Open **Project ribbon > New Filter**
2. Enter a name; drag field names to the **Field** column
3. Set Compare, Value, and And/Or for each row
4. Click **Save** and apply from the Library

**Search for data:**
1. Open **Tasks ribbon > Extended Find**
2. Drag field names to the Field column; set Compare, Value, And/Or
3. Click **OK**; use **Find Next** for subsequent matches

**Create a sort:**
1. Open **Project ribbon > New Sort**
2. Enter a name; drag field names to the **Field** column
3. Set Start Column, Sort Length, and Sequence (Ascending/Descending)
4. Click **Save** and apply from the Library

### Highlights, Colors, and Fonts

1. Open **Project ribbon > Colors and Shapes** (View group)
2. Expand folders and drag field names to the **Type of Element** column
3. Double-click the **Conditions** cell to define when the highlight is applied
4. Double-click the **Sample** cell to set font appearance (for text fields) or Gantt bar settings (for Gantt fields)

### Library Group Management

1. Open **Project ribbon > Manage Library** (View group)
2. Select a group and click **Add** to add views, filters, or sorts
3. Select file type (View Definition *.rwv, Sort *.rws, Filter *.rwf)
4. Click **Apply** then **OK**

## Related Notes

- [[WBS and Task Dependencies]] ” Classic PPM WBS and task dependency operations
- [[Autoschedule]] ” Classic PPM autoschedule
- [[Subprojects]] ” Classic PPM subproject management
- [[Resource Management Classic]] ” Resource management in Classic PPM
- [[MSP Integration]] ” Microsoft Project integration
- [[_MOC Classic PPM]]

%%Source: p2466-2565%%


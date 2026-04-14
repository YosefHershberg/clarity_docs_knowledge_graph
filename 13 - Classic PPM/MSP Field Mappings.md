---
title: MSP Field Mappings
tags:
  - classic
  - reference
aliases:
  - MSP Mappings
  - Microsoft Project Fields
canonical: true
audience: everyone
domain: classic
parent: "[[_MOC Classic PPM]]"
---

# MSP Field Mappings and Data Exchange

## Default Field Mappings

### Resource_Team Mapping

| Classic PPM Table: Field | MSP Field | Type | Notes |
|--------------------------|-----------|------|-------|
| SRM_RESOURCES: UNIQUE_NAME | Initials | Text(32) | Finds the corresponding resource in Classic PPM; no resource info is updated after save |
| SRM_RESOURCES: EMAIL | Email | Text(255) | None |
| SRM_RESOURCES: LAST_NAME | Resource Name | Text(30) | For non-labor resources: role name. For labor: last + first name without commas |
| SRM_RESOURCES: FIRST_NAME | Resource Name | Text(30) | Same as above |
| SRM_RESOURCES: RESOURCE_TYPE | Text3 / Group | Settings | Default mapping is Material for all non-labor resources |
| PRJ_RESOURCES: PRUID | ג€” | Text(32) | PRUID must be mapped; do not change value in MSP |
| PRJ_RESOURCES: PRCATEGORY | ג€” | ג€” | PRUID maps to Properties/prUID (internal) |
| PRJ_RESOURCES: PRAVAILCURVE | Resource Availability | Binary | Labor resources only; combined with project allocation when opening; factored out when saving |
| PRJ_RESOURCES: PRCALENDARID | Working Time | Text(32) | Resource calendar reflected in Base Calendar and Resource Information; labor resources only |
| PRJ_RESOURCES: PRISROLE | None | ג€” | Mapped to generic resource |
| PRTeam: PRALLOCCURVE | Resource Availability | Binary | Labor resources only; combined with availability on open; factored out on save |
| PRTeam: PRAVAILSTART | None | Time | When saving, set to earliest date of resource in MSP |

### Project0 Mapping

| Classic PPM Table: Field | MSP Field | Type | Notes |
|--------------------------|-----------|------|-------|
| INV_INVESTMENTS: NAME | Project Properties / Title | Text(80) | None |
| INV_INVESTMENTS: CODE | Text1 | Text(20) | Default mapping; can be changed |
| INV_PROJECTS: PRUID | Text3 | Text(32) | Can be changed; do not change the value in MSP |
| INV_PROJECTS: PRGUIDELINES | Project Properties / Hyperlink base | ג€” | None |
| INV_PROJECTS: PRDEPARTMENT | Project Properties / Company | Text(254) | None |
| INV_PROJECTS: PRVERSION | Custom property / prVersion | Text(32) / Short | Set when opening/saving; internal use |

### Project Scheduling Properties Mapping

| Classic PPM Table: Field | MSP Field | Notes |
|--------------------------|-----------|-------|
| INV_PROJECTS: SCHEDULE_START | Project Information / Start date | None |
| INV_PROJECTS: PRASOF | Project Information / Status date | If As of Date in Classic PPM is blank, existing value is retained; cannot be set to NA programmatically |
| INV_PROJECTS: SCHEDULE_FINISH | Project Information / Finish date | None |
| INV_PROJECTS: CHARGECODEID | No default mapping | Name of charge code appears in MSP; enter existing charge code name to modify |
| INV_PROJECTS: PRFORMAT | None | If format not supported in MSP, a warning appears; format is set to MSP after saving |
| INV_PROJECTS: PRPRIORITY | Project Information / Priority | Translated: 0-1000 in MSP ג†” 36-0 in Classic PPM |
| INV_INVESTMENTS: MANAGER_ID | File Properties / Manager | User name retrieved on open; not saved back |
| INV_PROJECTS: PRSTARTIMPOSED / PRFINISHIMPOSED | Project Information / Scheduling direction | When displayed, Schedule From is set to Start Date; otherwise set to Finish Date |
| PRJ_BASELINE_DETAILS: START_DATE / FINISH_DATE | Baseline Start / Baseline Finish | None |

### Task_Subproject Mapping

| Classic PPM Table: Field | MSP Field | Type | Notes |
|--------------------------|-----------|------|-------|
| PRTask: PRUID | Text3 | Text(32) | Default mapping; do not change value in MSP |
| PRTask: PRNAME | Name | Text(64) | Enter in all lowercase |
| PRTask: PREXTERNALID | Text1 | Text(16) | Default mapping; can be changed |
| PRTask: PRISMILESTONE | Milestone | Boolean | None |
| PRTask: PRPRIORITY | Priority | Short | Translated: 0-1000 in MSP ג†” 36-0 in Classic PPM |
| PRTask: PRSTART / PRFINISH | Start / Finish | Time | None |
| PRTask: PRDURATION | Duration | Double | Shown according to duration units set in MSP |
| PRTask: PRISFIXED | Task Type | Boolean | Fixed Duration = True in MSP; Fixed Unit and Fixed Work = False |
| PRJ_BASELINE_DETAILS: START_DATE / FINISH_DATE | Baseline Start / Baseline Finish | Time | Requires **Modify Baseline** right in MSP |
| PRTask: PRSTATUS | % Complete | Short | When saving: >0% ג†’ Started; 100% ג†’ Complete; otherwise ג†’ Not Started |
| PRTask: PRPCTCOMPLETE | % Complete | Short | Physical % complete is not mapped |
| PRTask: PRWBSLEVEL | Outline Level | Double | Represents outline structure with PRWBSSEQUENCE |
| PRTask: PRWBSSEQUENCE | ID | Short | Describes order of tasks in WBS |
| PRTask: PRISTASK | Summary | Boolean | Yes when PRISTASK is False |
| PRTask: PRISKEY | Flag1 | Boolean | Default mapping; identifies WBS item as key |
| PRTask: PRCHARGECODEID | Not mapped by default | Long | Enter existing Classic PPM charge code name in MSP to modify |

### Assignment Mapping

| Classic PPM Table: Field | MSP Field | Notes |
|--------------------------|-----------|-------|
| PRAssignment: PRUID | Text3 | PRUID and other attributes stored in Text3 (internal); do not change value in MSP |
| PRAssignment: PRESTMAX | Units | On open: set for non-contoured labor assignments on non-fixed tasks = Classic PPM value ֳ— max resource units. On save: set for labor resources = assignment units / max resource units |
| PRAssignment: PRPENDESTSUM | Any user-defined number field | When open: set to Classic PPM value, or -1 if blank. On save: set to -1 if Track Mode ג‰  None; otherwise saved. -1 clears Pending Estimates |
| PRAssignment: PRPENDACTSUM | Any user-defined number field | If Track Mode = None, Pending Actuals are mapped; otherwise not saved. -1 when blank |
| PRAssignment: PRACTSUM | None | Total actual work from PRACTCURVE; updated on save when Track Mode = None |
| PRAssignment: PRESTSUM | None | Total remaining work from PRESTCURVE; updated on save |
| PRJ_BASELINE_DETAILS: USAGE_SUM | Baseline Work | Total baseline work from PRBASECURVE; updated on save |
| PRAssignment: PRACTCURVE | Actual Work | Binary; on save, only set if Track Mode = None |
| PRAssignment: PRESTCURVE | Work | Binary; represents actual work + remaining work from Classic PPM |

### Other Fields Mapping

**Dependency Fields:**

| Classic PPM Table: Field | MSP Field | Notes |
|--------------------------|-----------|-------|
| PRDependency: PRTYPE | ג€” | None |
| PRDependency: PRAMOUNT | Lag | Non-daily lags converted to daily amounts on save |
| PRDependency: PRAMOUNTTYPE | Lag | Lag units set to days in Classic PPM; percent lags directly supported |

**Constraint and Note Fields:**

| Classic PPM Table: Field | MSP Field | Notes |
|--------------------------|-----------|-------|
| PRConstraint: PRTYPE | Constraint Type | Priority order: Must Finish On > Start No Later Than > Must Start On > Finish No Later > Finish No Earlier Than > Start No Earlier Than |
| PRConstraint: PRTIME | Constraint Date | None |
| PRNote: PRCREATEDBY | Notes | Set to current user name on save |
| PRNote: PRVALUE | Notes | Multiple notes concatenated; new notes added after the "Add new note(s)" tag |
| PRCalendar: PRNAME | None | Appears as **For** in Change Working Time dialog; not used for resource calendars |

### Roles Field and Naming Convention

The Classic PPM **Role** field (with resource name) is mapped to the MSP resource name field.

> [!NOTE]
> A role name cannot be longer than 27 characters (even though the maximum mapping length is 32).
When a role of the same type has multiple entries on the Team Staff Page, a unique 5-character extension is appended, which can exceed 32 characters and cause errors on import. Ensure each resource ID is no greater than 27 characters.

Recommended naming convention (27 characters total):

| Component | Max Length | Example |
|-----------|-----------|---------|
| Entity Level (3 digits) | 3 | RBC |
| Space | 1 | |
| Role Group | 19 | Analysts |
| Employee/Contractor + Country | 3 | EUS |

Example resource ID: `RBC Analysts EUS`

---

## Project Integration with Classic PPM

### Save a Project to Classic PPM

1. Open a project and click the **File** menu
2. Click **Save** in the **Classic PPM Integration** menu
3. (Optional) Click **Save As** to save as a new file (requires project create rights; enter a unique Project ID)
4. Select the **Tracked** check box to enable Track Mode in Classic PPM
5. Click **OK**

### Open a Project Plan Offline

1. Click **File > Save** ג€” saves the offline version locally (do NOT use Classic PPM Integration > Save)
2. Exit Microsoft Project; click **Yes** to retain the lock on the project
3. Make offline edits to the `.mpp` file
4. From the **Classic PPM Integration** tab, click **Save** ג€” offline changes are saved to Classic PPM
5. Reopen the plan to verify the latest updates from Classic PPM are present

### Manage Aggregated Projects

Classic PPM and MSP both support master projects and subprojects. The following table compares aggregation approaches:

| Attribute | Program | Master Project | Regular Project |
|-----------|---------|----------------|-----------------|
| Display sum of subproject values | Yes (see Manage Programs) | No | N/A |
| Assign staff to projects | No | Yes | Yes |
| View consolidated staff list | Yes (read-only) | No (master only) | N/A |
| Add participants (Collaboration) | Yes | Yes | Yes |
| Create and apply WBS | No | Yes | Yes |
| View collective WBS across projects | Yes | Yes | N/A |
| Create tasks | Milestones only | Yes | Yes |
| Use Planning features | Yes | Yes | Yes |
| Financially enable | No | Yes | Yes |
| Connect to scheduling tools | Read-only | Read/Write | Read/Write |
| Auto-schedule across related projects | No | Yes | N/A |
| Baseline across all grouped projects | Yes | Yes | N/A |
| Display consolidated view | Yes | Yes | N/A |

**Aggregation guidelines:**

- **Program**: Use for low-level detailed project metrics in rolled-up reporting
- **Master/Subproject**: Use when projects have scheduled relationships (e.g., Project 3 starts after Project 2)
- **Portfolio**: Use for scenario modeling and high-level rolled-up reporting

### Manage Master Projects

1. Create a master project in Classic PPM (acts as a framework; do not staff resources or create tasks)
2. Create subprojects in Classic PPM (working projects; staff resources and create tasks)
3. Add subprojects to the master project from the **Hierarchy** tab

> [!NOTE]
> When you open a master project in Microsoft Project, all related subprojects also open.

### Microsoft Project Shared Resource Pool

With the legacy MSP Interface, a shared resource pool project (`<project_name>_pool.mpp`) is created locally when resources are shared across multiple projects. This pool opens only when you open the master project.

**Resource sharing behavior:**

- When opening a master project for the first time, resources from all subprojects are merged into the master project resource sheet
- Subprojects can be opened independently
- When saving a master project to Classic PPM, all project teams are maintained on their respective projects
- The master project does not save the team list to Classic PPM when saved back; save a local copy using **File > Save**

### Export a Baseline

Classic PPM supports unlimited baselines; MSP supports only 11. Integration rules:

- Baselines are mapped to the 11 MSP baseline slots in descending order by last modified date
- If no baseline revisions are sent, all baseline information in the MPP is cleared
- If the current revision is used, it updates the project plan baseline; remaining revisions fill slots baseline through baseline10
- A baseline slot with no matching revision sends a Delete flag to Classic PPM

> [!TIP]
> Download only the current baseline revision for best performance. Go to **Administration > Project Management Settings** and select **Only Export Current Baselines When Opening Investments in a Scheduler**.

Classic PPM does not support partial task baselines. As a best practice, update only new tasks when adding to an existing baseline.

### Open and Save Subprojects

**Opening subprojects:**

- Subprojects open in read/write or read-only depending on how the master project was opened
- Subprojects opened independently have no associations to master projects or shared resource pools
- If a subproject is already open in read/write, that version is used

**Saving subproject prerequisites:**

- Subproject must exist in Classic PPM
- You must have sufficient access rights
- Subproject must be locked
- Subproject version in MSP must match the version in Classic PPM
- Resources and charge codes must exist in Classic PPM

**Access rights verification order when opening master projects:**

1. Insufficient rights to open as read-only ג†’ cannot open master project
2. Insufficient rights for read/write but sufficient for read-only ג†’ subprojects open read-only
3. Another user holds the lock ג†’ open as read-only
4. You hold the lock ג†’ prompted to reacquire lock and roll back to current Classic PPM version

---

## Resource Integration with Classic PPM

Classic PPM is the **single source of record** for all project resources. Do not create resources in Microsoft Project and attempt to upload them to Classic PPM. Make all resource changes in Classic PPM.

### Resource Field Mappings

**Resource fields:**

| MSP Field | Classic PPM Field |
|-----------|------------------|
| Resource Name | Resource first and last name |
| Initials | Resource ID |
| Text3 | Unique ID for the resource |
| Text5 | Resource or Role Assignment |
| Email | Email Address |

**Resource assignment fields:**

| MSP Field | Classic PPM Field |
|-----------|------------------|
| Text3 | Assignment ID (unique) |
| Number1 | Resource task Pending Estimate (גˆ’1 when no value) |
| Number2 | Resource task Pending Actuals (גˆ’1 when no value) |

**Resource allocation terms:**

| MSP Term | Classic PPM Term | Meaning |
|----------|-----------------|---------|
| Max % | Project Allocation | Quantity of a resource assigned to a project (100% = full day) |
| Units | Task Assignment | Subset of Max %; quantity of a resource assigned to a specific task |

### Assign a Resource to a Microsoft Project Team

We recommend using the Classic PPM **Team** tab for its rich filtering capabilities.

**From Classic PPM:**
1. Open the project, click **Team**, then click **Add**

**From Microsoft Project:**
1. Click **Classic PPM Integration > Browse Resources**
2. Select a resource or role to add

> [!NOTE]
> The Available Resources/Roles column shows only resources and roles to which you have booking rights.

When adding via Schedule Connect, resources are allocated to tasks manually and allocated 100% to the project.

To add a resource manually in MSP: create a resource and enter the resource ID in the **Initials** field (must match the resource ID in Classic PPM).

### Assign a Resource to a Microsoft Project Task

When you assign resources to a developed plan, you can balance the workload using resource leveling (MSP's solution to shift task schedules without changing durations).

**Work contour behavior when load pattern is set to Contoured:**

| Updating Task Status Updates Resource Status | Split In-progress Tasks | Work Contour Set To |
|----------------------------------------------|-------------------------|---------------------|
| Selected | Not Selected | Contoured |
| Selected | Selected | Flat |
| Not Selected | Not Selected | Flat |
| Not Selected | Selected | Flat |

> [!NOTE]
> If Track Mode in Classic PPM is set to Clarity or Other, the **Updating Task Status Updates Resource Status** check box is cleared regardless of user settings in MSP.

---

## Task Integration with Classic PPM

### Task Terms and Reserved Fields

Classic PPM and MSP use different terminology for common concepts:

| MSP Term | Classic PPM Term | Description |
|----------|-----------------|-------------|
| Work (Remaining Work + Actual Work) | Total Usage (ETC + Actuals) | Total effort scheduled for all assigned resources |
| Remaining Work | Estimate-to-Complete (ETC) | Estimated remaining hours to complete the task |
| Actual Work | Actuals | Actual hours reported and posted |
| Max Units | Project Allocation | % of resource time allocated to the project |
| Units | Task Assignment | % of Max Units applied to this task |
| Duration | Duration | MSP: working time between start and end. Classic PPM: business days inclusive of start and finish |
| % Work Complete | % Expended | MSP: Actuals / Total Work. Classic PPM: Actuals / Usage |
| Split task | Variable (resource availability driven) | Task with an interrupted schedule |
| Type (Fixed Work/Units/Duration) | Fixed Duration Boolean | MSP supports three types; Classic PPM stores in `msp_task_type` |

**Reserved MSP fields (do not change values ג€” breaking these can cause version control failures and incorrect reporting):**

| MSP Field | Classic PPM Field |
|-----------|------------------|
| File Menu / Properties / Summary / Title | Project Name |
| File Menu / Properties / Custom / prVersion and prUID | Reserved project properties |
| Text1 | Task ID (WBS Number) |
| Text2 | Guidelines URL |
| Text3 | Unique Task ID |
| Flag1 | Indicates a Key Task in Classic PPM |

### Work, Units, and Duration (WUD)

The core MSP equation: **Work = Units ֳ— Duration**

Changing one value causes MSP to recalculate another based on the fixed task type:

| Task Type | Change Duration | Change Work | Change Units |
|-----------|----------------|-------------|-------------|
| Fixed Duration | Work recalculates* | Work fixed | Work recalculates* |
| Fixed Work | Duration recalculates* | Work fixed | Duration recalculates* |
| Fixed Units | Duration recalculates* | Duration recalculates* | Units fixed |

> [!TIP]
> The word "fixed" is a misnomer ג€” MSP still allows you to overwrite the fixed value. Understanding which other field recalculates when you change a fixed value prevents frustrating plan corruption.
Practice with a standalone MSP project plan using all three task types before applying this in a Classic PPM-integrated project.

### Update a Task Status and Resource Status

The **Updating task status updates resource status** option in MSP automatically creates actuals when you type % Complete.
This is problematic when Classic PPM timesheets are enabled (Track Mode = Clarity) because Classic PPM owns actual hours ג€” any hours added by MSP are silently dropped when saving.

> [!WARNING]
> No error message appears when actual hours are dropped during save. MSP-generated actuals disappear, the Remaining Work decreases, task dates reschedule, and if on the critical path, the project finish date can shift.

**To avoid this:**

- Uncheck **Update Task Status Updates Resource Status** in **Tools > Options > Calculate**
- Only use this option when Track Mode = None

### Turn Off Time Tracking at the Task Level

To prevent resources from accidentally tracking time to future-phase or completed tasks:

1. In Classic PPM, place the **Open for Time Entry** field in your task view
2. Click the field and set it to checked (or unchecked to close the task)
3. Save

This feature is managed only in Classic PPM, not in Microsoft Project.

### Update a Task to Complete (Correct Process)

1. In Classic PPM, open the task
2. Clear the **Estimate to Complete (ETC)** value in the resource assignment area
3. Select **Completed** from the Status drop-down

> [!WARNING]
> Do not set % Complete to 100% first in MSP. MSP will move actual work to equal the full Work value, overwriting real actuals. Those inflated actuals are then dropped silently when saved to Classic PPM.

**Correct sequence in MSP:**
1. Change **Remaining Work** to 0 (MSP adjusts Work = Actuals + 0)
2. Change **% Complete** to 100%

### Loading Patterns and Contours

Classic PPM and MSP use different terms for loading patterns:

| Classic PPM Field | MSP Field (when created in Classic PPM) |
|-------------------|-----------------------------------------|
| Fixed | Contoured |
| Uniform | Flat |
| Front | Front |
| Back | Back |
| Contour | The specific work contour saved in MSP (Turtle, Bell, etc.) |

When tasks are created in MSP and saved to Classic PPM, the mapping reverses. Late Peak, Early Peak, Double Peak, Bell, and Turtle in MSP all become **Contour** in Classic PPM.

**Uniform is the recommended default loading pattern** when:
- MSP is the only scheduling tool
- Both MSP and Open Workbench are used

**Reason**: Front and Back Load patterns extend task duration in MSP (e.g., a 40-hour task scheduled 5 days in Classic PPM becomes 9 days in MSP). If these tasks are on the critical path, the project end date extends unexpectedly.

### Configure a Microsoft Project Milestone

**Recommended approach:**

1. Open the **Task Information** box
2. Click the **Advanced** tab
3. Check **Mark task as milestone**
4. Do NOT enter a zero value in the **Duration** box

> [!TIP]
> Entering zero duration in the Duration box is not recommended. If a non-zero value is later added to the Duration, the milestone check box is cleared and the milestone converts to a task.

**Classic PPM milestone business rules:**

- Milestones can be placed in the dependency chain
- You cannot post actuals against a milestone (except if a task with actuals is later converted to a milestone)
- You cannot assign remaining work to a resource on a milestone
- Minimum duration unit is one day (MSP supports hours/minutes ג€” small differences can appear in reports)

> [!WARNING]
> If a resource's assignment units are set to 0 on a task, MSP recalculates Duration = 0, converting the task to a milestone. To avoid: delete the resource assignment rather than zeroing out units.

### Manage Actual Hours for Time Tracking

| Scenario | Resource Track Mode | Project Track Mode |
|----------|--------------------|--------------------|
| All resources using Classic PPM timesheets | Clarity | Clarity |
| No timesheets; all hours manually entered in MSP | None | None |
| Employees use timesheets; contractors' time entered manually via Transaction Entry | Internal: Clarity; Contractors: None | Clarity |

> [!TIP]
> Impress upon your team members to track time accurately and on the correct day. Incorrectly logged actuals directly impact your project schedule and finish date.

**Adding actual hours directly into MSP** (when Track Mode = None):

- Setting Resource Track Mode = None and Project Track Mode = None allows manual entry of actuals in MSP
- If the project is configured to use Classic PPM timesheets but actuals are typed into MSP, the manually entered actuals are dropped silently on save to Classic PPM and the ETC becomes out of sync

### Task, Summary Task, and Milestone Configurations

Classic PPM enforces specific configuration rules:

- **Assigning a resource to a summary task**: Not allowed in Classic PPM. Error message: "Summary task assignments are not supported."
- **Placing actual hours on a milestone in MSP**: Saves successfully to Classic PPM and persists when reopened
- **Deleting resource assignments with actuals**: ETC is set to zero; the assignment cannot be deleted
- **Deleting tasks with actuals**: Task is marked Complete and relocated under a **Deleted Tasks** summary task

### Resource Task Assignments and Start/Finish Dates

Pay attention to resource assignment start and finish dates relative to task start and finish dates:

- **Slip scenario**: If a task starts Monday but a resource's assignment is adjusted to start Thursday, MSP shows the task starting Thursday (not Monday). If on the critical path, the project end date slips.
- **Pull-in scenario**: A task whose finish is after all of its assignments' finish dates gets a new earlier finish date matching the last assignment finish date. If on the critical path, the project end date pulls in.

---

## Manual Calculation Mode

By default, the Calculation option is **On** ג€” projects auto-recalculate when opened in MSP. When set to **Off** (manual):

- Tasks are not adjusted based on the dependency chain when opened
- Tasks remain stationary on the Gantt chart
- Summary task rolled-up values are not displayed (project % Complete may be inaccurate)
- You must press **F9** or use the **Calculation Needed** button to recalculate

### Configure Manual Calculation

1. In MSP, click **File > Project Options > Schedule**
2. Set **Calculate Project after each edit** to **Off**
3. Click **OK**
4. In Classic PPM, navigate to **Administration > Project Management > Settings** and set **Default Load Pattern** to **Uniform**

> [!NOTE]
> This setting is global and saved in the `.mpp` file. Projects created after configuring this setting inherit it.

### Manual Calculation Exceptions

The following can trigger calculation even in manual mode:

- **Classic PPM timesheets**: Actuals can change task start/finish dates regardless of calculation mode
- **Resource leveling**: Explicitly calculates the project; do not use resource leveling in manual mode
- **Task constraints**: Applying a constraint (e.g., Start No Earlier constraint via Gantt drag) triggers automatic calculation

---

## Data Exchange with Classic PPM

Schedule Connect coordinates data exchange between Classic PPM and MSP, even when changes occur concurrently. Key information (resources, costing rules) is controlled in Classic PPM ג€” modifications in MSP are not saved.

### Open Projects from MSP

- Only active projects with view or edit rights can be opened
- Tasks with dates different from the project start date receive **Start No Earlier** constraints to hold their position
- Work effort estimates for each role/task are loaded into MSP including time distribution

**Steps to open from MSP:**

1. In MSP, click the **Clarity Integration** tab and click **Open**
2. Review the project list (Project ID, Name, Locked By, Manager)
3. Select the project and click **Open**
4. Choose **Read-Only** or **Read/Write** (default); click **Go**

> [!NOTE]
> You cannot open projects with the same project ID and MPP filename from different Classic PPM servers. Delete the locally saved MPP file first.

### Save and Save As in MSP

- Use **Save** from the Classic PPM Integration menu to save to Classic PPM
- Use **Save As** to save a copy as a new project (requires project create rights; enter a unique Project ID)
- If you exit MSP without saving, you are prompted ג€” clicking **Yes** saves locally but not to Classic PPM

> [!NOTE]
> With the new MSP driver (not legacy), you cannot Save As over an existing Classic PPM project.

**Track Mode options when saving:**

- **Clarity** (Default): Resources use Classic PPM timesheets
- **None**: Actuals tracked from financial transactions or MSP/OWB
- **Other**: Actuals imported from a third-party application

### Concurrent Timesheet and Transaction Changes

When a project is locked, most timesheet and transaction updates are blocked. The following are retained and merged when saving:

- **Unplanned tasks**: Placed in an Unplanned Tasks summary task; marked as Planned when saved
- **Pending Estimates**: Changes from MSP are ignored on tracked assignments; accepted when no concurrent Classic PPM modification
- **Notes**: Added by team members from Classic PPM
- **Actuals**: Both approved and unapproved show as pending actuals

### Posted Timesheets and Actuals

When a timesheet is posted:

- ETC on assignments with actuals is reduced by the amount of actuals (total work remains the same)
- For **Contoured** assignments (Fixed in Classic PPM): ETC scheduled for that week is replaced with actuals; ETC after the week is retained
- Tasks not on a timesheet are assumed to have had no work done and are rescheduled forward

> [!TIP]
> Map the **Pending Actuals** field in Classic PPM to a custom number field in Microsoft Project.

After posting actuals, rework your plan to balance work and ensure progress rate is realistic.

### Elapsed Durations in Microsoft Project

Project managers can enter duration as working days or elapsed (calendar) days. Elapsed duration uses 24-hour days and 7-day weeks, including nonworking days. Syntax: `3ed` = three elapsed days.

The new MSP Interface (not Legacy) retains elapsed duration values when opening and saving from Classic PPM, including elapsed leads and lags for all four dependency types (FS, SS, SF, FF).

> [!NOTE]
> Microsoft Project 2010 or later is required to retain elapsed durations in Classic PPM.

**Classic PPM actions that override elapsed duration (converting to working days):**

- Running auto-schedule
- Changing task start or finish dates
- Editing task assignments that affect start/finish
- Changing project start/finish dates
- Posting actuals that change the task finish date
- Editing task dependencies (Gantt drag-and-drop, editing lead/lag time)

### External Dependencies in MSP

You can insert dependencies from other projects by entering the file name and task ID of the dependent task without opening the source project.

With the new MSP driver (Release 14.2+), only the task name displays (not the project ID prefix). When saving a project with external dependencies, external tasks are updated as needed.

---

## MSP Field Mappings Administration

### Configure Custom Field Mappings

**Prerequisites**: Administrator rights to view the **MSP Field Mappings** page.

1. Navigate to **Administration > Project Management > MSP Field Mappings**
2. Click **New**
3. Complete the following:

| Field | Description |
|-------|-------------|
| **Object Type** | Classic PPM object: Project, Task, Resource, Assignment, or Team |
| **Data Operation** | Import and Export / Import only / Export only |
| **Clarity Attribute ID** | Classic PPM attribute ID from the object's Attributes tab |
| **MSP Field Name** | MSP field to map to (Text4ג€“Text30; Flag2ג€“Flag20; Number1ג€“Number20; Date1ג€“Date10) |

**Business rules for custom mappings:**

- Static lookup string mapping requires the new MSP driver
- Changes to mapped resource fields are not saved to Classic PPM
- Duplicate lookup names display with an added "(1)" suffix; inactive lookups display with `(*)inactive`
- Can only map lookups to Text fields in MSP
- If an Object Type + Clarity Attribute ID combination already exists, Create/Update results in an error
- For `prUID` mappings, only the MSP Field Name can be modified on update

### Schedule Field Mappings

| MSP Field | Classic PPM Field | Notes |
|-----------|------------------|-------|
| Start Date | Start Date (PRJ_PROJECTS: PRSTART) | None |
| Finish Date | Finish Date (PRJ_PROJECTS: PRFINISH) | None |
| Schedule From | Start Imposed / Finish Imposed | When displayed, Schedule From = Start Date on open; otherwise = Finish Date |
| Status Date | As Of Date (PRJ_PROJECTS: PRASOF) | Cannot be set to NA programmatically; if blank in Classic PPM, existing value retained |
| Priority | Priority (PRJ_PROJECTS: PRPRIORITY) | Translated 0ג€“1000 (MSP) ג†” 36ג€“0 (Classic PPM) |

### Manager Field Mappings

| MSP Field | Classic PPM Field | Notes |
|-----------|------------------|-------|
| Manager | Manager | Set to user name of Classic PPM project manager on open; not saved back |
| Title | Project Name (SRM_PPROJECTS: NAME) | N/A |

### Calendar Field Mappings

> [!NOTE]
> The project calendar in MSP is always reset to the base calendar in Classic PPM.

The Standard calendar in MSP is updated by the settings for the standard calendar in Classic PPM. Calendar information is reflected in the **Set Working Time** options in the **Change Working Time** dialog.

---


---
**See also:** [[MSP Integration Setup]], [[MSP Synchronization]]
**Parent:** [[_MOC Classic PPM|Classic PPM]]

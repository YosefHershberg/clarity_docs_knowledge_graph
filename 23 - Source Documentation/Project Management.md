# Project Management

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[13 - Classic PPM/_MOC Classic PPM|Classic PPM]]
- Canonical notes:
- [[13 - Classic PPM/Project Management Classic/Project Schedules Gantt]]
- [[13 - Classic PPM/Project Management Classic/Project Estimates ETC]]
- [[13 - Classic PPM/Project Management Classic/Projects Teams Tasks]]
- [[13 - Classic PPM/Project Management Classic/Project Participants]]
- [[13 - Classic PPM/Project Management Classic/Project Dashboard]]
- [[13 - Classic PPM/Project Management Classic/Project Templates]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Portfolio Waterlines (#portfolio-waterlines)
- H3: Verify Your Waterline View Selections (#verify-your-waterline-view-selections)
- H3: Save or Discard Your Pending Edits (#save-or-discard-your-pending-edits)
- H2: Project Management Overview (#project-management-overview)
- H3: Prepare to Set Up a Project (#prepare-to-set-up-a-project)
- H3: Project Jobs (#project-jobs)
- H3: My Projects Portlet (#my-projects-portlet)
- H2: Define Default Project Settings (#define-default-project-settings)
- H3: Set System-Level Default Project Management Settings (#set-system-level-default-project-management-settings)
- H3: Set Default Staff OBS Unit (#set-default-staff-obs-unit)
- H3: Set the Default Earned Value Calculation Method (#set-the-default-earned-value-calculation-method)
- H3: Set Up Base Calendars (#set-up-base-calendars)
- H3: Modify a Resource Calendar (#modify-a-resource-calendar)
- H3: Add Risk Categories (#add-risk-categories)
- H3: Set the Risk Threshold (#set-the-risk-threshold)
- H3: Round the Calculations of Impact and Probability (#round-the-calculations-of-impact-and-probability)
- H3: Set Up Earned Value Reporting Periods (#set-up-earned-value-reporting-periods)
- H3: Generate Earned Value Periods (#generate-earned-value-periods)
- H2: Create Projects, Teams, and Tasks (#create-projects-teams-and-tasks)
- H3: Create a Project (#create-a-project)
- H3: Define the Project Properties (#define-the-project-properties)
- H3: Create the Project Team (#create-the-project-team)
- H3: Create Project Tasks (#create-project-tasks)
- H3: Manage Resource Utilization (#manage-resource-utilization)
- H3: Assign Resources (#assign-resources)
- H3: Control Access to Projects and Subprojects (#control-access-to-projects-and-subprojects)
- H3: Lock Subprojects During Autoscheduling (#lock-subprojects-during-autoscheduling)
- H2: Create Projects from Project Templates (#create-projects-from-project-templates)
- H3: Using Project Templates with Processes (#using-project-templates-with-processes)
- H3: Designate Projects as Templates (#designate-projects-as-templates)
- H3: Populate Projects from a Template (#populate-projects-from-a-template)
- H3: Rules for Copying Financial Plans from Project Templates (#rules-for-copying-financial-plans-from-project-templates)
- H3: Project Fields Used for Copying Financial Plans (#project-fields-used-for-copying-financial-plans)
- H3: Example: How Start Dates in Financial Plans Are Copied from a Template (#example-how-start-dates-in-financial-plans-are-copied-from-a-template)
- H3: Copy Financial Plans from Project Templates (#copy-financial-plans-from-project-templates)
- H2: Financially Enable Projects (#financially-enable-projects)
- H3: Verify the Prerequisites for Financially Enabling a Project (#verify-the-prerequisites-for-financially-enabling-a-project)
- H3: Define the Financial Properties of a Project (#define-the-financial-properties-of-a-project)
- H2: Define Project Estimates (ETC) (#define-project-estimates-etc)
- H3: ETC Calculation (#etc-calculation)
- H3: Modify ETC (Investments) (#modify-etc-investments)
- H3: Apply New ETC Across Tasks (#apply-new-etc-across-tasks)
- H3: Apply Top-Down Estimating (#apply-top-down-estimating)
- H2: Define Subprojects (#define-subprojects)
- H3: Add Subprojects to Master Projects (#add-subprojects-to-master-projects)
- H3: Create Subprojects from Project Templates (#create-subprojects-from-project-templates)
- H3: Create Subprojects from Project Work Breakdown Structure (WBS) (#create-subprojects-from-project-work-breakdown-structure-wbs)
- H3: View Combined Subproject Actuals and Estimates (#view-combined-subproject-actuals-and-estimates)
- H2: Create Project Baselines (#create-project-baselines)
- H3: Edit, Update, and Delete Project Baselines (#edit-update-and-delete-project-baselines)
- H3: Update Task Baselines (#update-task-baselines)
- H3: How Master Project and Subproject Baselines Work (#how-master-project-and-subproject-baselines-work)
- H3: Update and Display of Master Project Baselines (#update-and-display-of-master-project-baselines)
- H3: Create an Initial Baseline With Costs (#create-an-initial-baseline-with-costs)
- H2: Calculate Earned Value, EAC, ETC, and Other Metrics (#calculate-earned-value-eac-etc-and-other-metrics)
- H3: Default Earned Value Options (#default-earned-value-options)
- H3: Update Project Task Cost Totals (#update-project-task-cost-totals)
- H3: Earned Value Metrics (#earned-value-metrics)
- H3: Earned Value Calculation Methods (#earned-value-calculation-methods)
- H3: How Earned Value Calculation Methods are Applied (#how-earned-value-calculation-methods-are-applied)

## Portfolio Waterlines

The display settings of the Waterlines view affect aggregation rows. If you apply a filter to the view or you hide the Gantt chart, the aggregation rows do not appear.

The changes that you make to the investment data in the Waterlines view are reflected in the aggregation rows. For example, if you re-prioritize the investments list or you change the investment dates, the aggregation rows are recalculated.

The portfolio constraint that you select to aggregate applies to only one login session. If you log out, the aggregates are not saved. To display the values again, reselect a portfolio constraint to aggregate.

****Follow these steps:****

1. Open **Home** and from **Portfolio Management**, click **Portfolios**.
2. Open the portfolio and click **Waterlines**.
3. Click the **Aggregate constraint** drop-down list and select a portfolio constraint for which you want to view aggregated waterline values. The aggregation rows appear below the investments list and the Gantt chart.
4. To display the time-scaled aggregate numbers for each investment for a constraint, click **Show Values** on the toolbar. The aggregated numbers appear on top of the Gantt bars.

### Verify Your Waterline View Selections

Verify that the waterline results are what you expect. Any column constraints that you display in the list also display as constraint gauges at the bottom of the list. The gauges provide variance information about the totals above and below the waterline.

In case the constraint gauges are not visible, click **Show Totals** on the toolbar.

> [!NOTE]
> Investments added to the portfolio after the last ranking appear at the top of the list on the waterline view. The investments are assigned NR (not ranked) in the **Rank** column. The investments with this rank are not included in the waterline view totals. Run the ranking rules again to include newly added investments.

To determine the deficits or surpluses for a portfolio constraint in a time-scaled display, review the aggregation row values. To help balance the portfolio, make the necessary adjustments for the constraint.

### Save or Discard Your Pending Edits

The changes that you make to your Waterlines view are saved as pending edits that you can then either save permanently or discard. All the pending edits are saved in a temporary area until you can commit to them or can decide to lose them. The **Discard Changes** button is enabled whenever there are pending edits on the view.

If you move away from the Waterlines view or you log out from the application, your pending edits are saved. When you log back in, you can accept or discard the edits.

The pending edits appear with a red flag that disappears when you save them or you discard the changes. For example, these changes get saved as pending edits on the Waterlines view:
- You drag-and-drop investments to a new location to improve or lower their ranking.
- You change the investment attributes such as start and finish dates either by changing the Gantt bars or by editing the grid cells.

---

## Project Management Overview

Manage projects, project jobs, and the My Project Portlet. Projects are sets of activities that are designed to achieve a specific objective. Their key elements are tasks that define project work and staff members - the resources who perform them. Time and budget constraints guide projects. The constraints estimate and determine how long each task takes, and therefore, how long the entire project takes and how much it costs.

Projects are the core investment in the application. Understanding how to create projects enables you to properly manage them. Creating projects is the first step in the project management process.

As a project manager, define and track each aspect of your project from tasks and staff to budgets, actuals, and risks. In addition, you can create master projects that group related subprojects. The master projects let you view and analyze the combined costs, estimates, and actuals of their sub projects. Projects are used as the example investment. Project functionality and components apply to all investments that are based on the project, such as proposals.

> [!NOTE]
> The documentation may not match what you see in the product user interface. This difference can occur because all access to features, menus, pages, buttons, and objects is determined by your access rights. Your organization can also configure the application pages, objects, lookups, partitions, processes, and user interface. Contact your administrator if you are not able to complete any of the steps in the documentation.

### Prepare to Set Up a Project
- Have a general idea of the project scope, the tasks that resources perform, and a time frame to complete the tasks. This planning makes the initial field entry and setup easier.
- Provide accurate and detailed information in your project plan. For example, use system-generated work estimates, or create your own. A regularly maintained project plan is the most effective way to measure performance and status.
- Estimates (ETC) assist you when planning task and project duration, and allow for comparison with actuals after the project starts.
- Consider measuring progress using baselines. Creating the baselines takes some time, but the long-term benefits are substantial.
- All resources who participate in the project are defined. All the roles in the project are defined.
- Create a department for the project.
- You need specific access rights to set up a project.

### Project Jobs

The following jobs can influence the performance or timeliness of your project information:
- Clean User Session
- Rate Matrix Extraction
- Delete Investments
- Import Financial Actuals
- Index Contents and Documents for Searches
- Investment Allocation
- Post Timesheets
- Post Transactions to Financial
- Rate Matrix Extraction
- Time Slicing
- Update Aggregated Data
- Update Earned Value History
- Update Earned Value and Cost Totals
- Update % Complete
- Update Report Tables

### My Projects Portlet

The **My Projects** portlet on the Overview page displays a list of projects you have added to the My Projects list. Use this portlet to view the latest status of the projects that you want to track. For example, if you are managing the HR System Migration project, add it to the My Projects portlet to view the latest risk and business alignment status of the project from the portlet.

In addition, the portlet lets you complete the following tasks:
- Create new projects or use a template.
- Open a project in the Gantt view.
- Access and view any documents that are attached to a project.
- Collaborate on a project using documents, action items, or discussions.
- Open the properties of a project.

#### Add Projects to the My Projects Portlet

By default, projects that are created from the portlet do not display in this list. Projects display only if you add them to the portlet by selecting the **Add to My Projects** option from the **Actions** menu in the project properties.

After adding projects to the My Projects Portlet, you can remove them by selecting the **Remove from My Projects** option from the **Actions** menu.

---

## Define Default Project Settings

As an administrator or authorized project manager, you can specify default settings for all projects. You can allow mixed booking, set load pattern, and specify that only current baselines are exported when opening projects in the OWB or MSP desktop schedulers.

Other settings include base calendars, adding risk categories to group investment risks, risk thresholds, invalid project-related transactions, and earned value reporting periods. Most of these settings in Classic PPM also apply in Clarity; however, some do not. For example, you can define the options to book requisitions using allocation percentage or available work units only in Classic PPM, whereas requisitions are not supported in Clarity.

### Set System-Level Default Project Management Settings

As an administrator, you can set the default system-level project management options. For example, you can specify that only the current baseline is exported when opening projects in a desktop scheduler (Open Workbench or Microsoft Project) from Classic PPM.

****Follow these steps:****

1. Click **Administration**, **Project Management**, **Settings**.
2. In the **General** section, specify the following system-level options:
- **Default Load Pattern**: Specifies the system-level default resource load pattern. The load pattern that you set on the settings page is used by default when project managers assign resources, or change staffing assignment properties. Autoschedule uses the resource load pattern to determine the ETC that is distributed for a resource over a set date range. You can set the default resource load pattern at the system level and at the task assignment level. ETC is distributed first based on the resource load pattern that is defined at the task assignment level, and then at the system level. Values:
- **Back**: Work effort is loaded as close to the end of the task as possible, based on unused resource availability after autoscheduling. ETC is only decremented when actuals are posted on unadjusted timesheets. The remaining ETC is spread out past the timesheet period based on the load pattern type.
- **Uniform**: Work effort is loaded as evenly as possible based on total resource availability. ETC is only decremented when actuals are posted on unadjusted timesheets. The remaining ETC is spread out past the timesheet period based on the load pattern type.
- **Fixed**: Work effort distribution is user-defined. Autoschedule does not affect work effort distribution. ETC is decremented through the timesheet period (that is, Actuals through Date) if the resource posted actuals to the task. The remaining ETC remains fixed in the schedule, on the day the work was assigned. The remaining ETC is not reallocated to the remaining duration of the task.
- **Contour**: Work effort is loaded as evenly as possible across the duration of the task, based on unused resource availability after autoscheduling. ETC is only decremented when actuals are posted on unadjusted timesheets. The remaining ETC is spread out past the timesheet period based on the load pattern type. If you are using Microsoft Project, when you open the project the first time, the work contour for the new assignments is set to flat. If you previously opened the assignment in Microsoft Project and saved it to Clarity, the work contour does not change.
- **Front (Default)**: Work effort is loaded as close to the start of the task as possible, based on unused resource availability after autoschedule. ETC is only decremented when actuals are posted on unadjusted timesheets. The remaining ETC is spread out past the timesheet period based on the loading pattern type.
- **Guidelines URL**: Specifies the URL that is referenced in Classic PPM for the **[Guideline]** hyperlink on any project task in the task's general properties page.

> [!NOTE]
> When this field is blank, the **[Guideline]** hyperlink is NOT available in the project task's general properties page.
- **First Month of Financial Quarter**: Specifies the first month of the first quarter in your fiscal year. The value is used for scheduling projects in Microsoft Project.
- **First Day of Work Week**: Specifies the first day of the workweek in the resource calendars and scheduler interfaces.
- **Default Display Unit for Work Effort**: Specifies Hours or Days for the System Default value for the Work Effort Unit of Measure display option. The display option appears for list views such as Team Selection List or Task Assignments List in the List Column options. The setting is used to display actuals or ETC units for the project team, resource allocations, or task assignments. The user can change the configuration for a specific list view by changing the value in this field which in turn changes the value for the System Default option. The setting is also used to display values for the Effort Metrics group of information in the project status reports in Clarity.
- **Enable Investment-specific Charge Codes**: Allows you to associate charge codes with a project to represent any breakdown of work such as design, development, documentation, and so on. Charge codes are used in timesheets for payroll purposes.
- **Notify on Delete of Risk/Issue/Change Requests**: Specifies whether a notification is sent to the project manager on the deletion of an associated risk, issue, or change request.
- **Only Export Current Baselines When Opening Investments in a Scheduler**: If you are using Classic PPM with a desktop scheduler (Open Workbench or Microsoft Project), specifies to export only the current baseline in the desktop scheduler. This option applies when multiple baselines exist.
- **MSP Assignment Units Mapping with Clarity Assignment 'Max % Load'**: Specifies whether to use the Max % Load value on a task assignment to set the "assignment units" value in MSP. When exporting project assignments from Clarity to MSP, you can use one of the following mappings:
- The allocation of the resource to the project
- The Max Load% value of the task assignment in PPM
- **Agile Integration Owner**: Specifies a Clarity user as the owner of the integration with Agile Central. The integration owner is assigned the required access rights to schedule and run the background sync job that pulls information from Agile Central into PPM.
- **Allow Marked Investments with Timesheet and Transaction Data to be Deleted**: Allows the administrator to control the ability for an investment with actuals to be permanently deleted.
- When the option is checked, eligible users can mark inactive investments with either timesheets or financial transaction data or both to be deleted. The eligible users can then run the Delete Investments job which deletes the marked investments. The Purge Flag is set for the investment.
- When the option is unchecked, eligible users cannot mark inactive investments with either timesheets or financial transaction data or both to be deleted. The Purge Flag is not set for the investment.

3. In the **Staffing** section, specify the following system-level options and save:
- **Round Allocations to Nearest %**: Specifies the amount that you want to round allocations to when booking resources or teams to projects. The setting is used with the Allocate from Estimates action on the project team page. To determine the allocation rate, the sum of the estimates is divided by the availability of the resource for a day. The allocation rate is then rounded based on the value in this field. To allow this setting to produce a remaining allocation that is very close to the estimate, set the value as zero or 1, then no rounding is done.
- **Allow Effort Task Creation**: Specifies to create the effort task when you add a resource to a project that does not have tasks.
- **Reassign Tasks when replacing Role**: Specifies whether to allow the reassignment of tasks when a project manager replaces a role with another staff member.
- When the option is unchecked: The new staff member is allocated to the project using the Default Allocation % value from the source role and is not assigned to any tasks. The existing role remains on the project and on all tasks in the project. The Default Allocation % is reset to zero for the existing role. The task assignments are not changed for the existing role. If the existing role is assigned to the Effort Task, the role remains assigned to the task and the ETC amount is reset to zero.
- When the option is checked: The existing role is removed and the new staff member has the allocation and task assignments.

> [!NOTE]
> The setting is used when replacing a role with another staff member in Clarity, project Staff tab.
- **Allow Edit of Allocations when Investment is Locked**: Specifies to allow resources to edit allocations while projects are locked. When selected, project managers can:
- Edit existing team staff member allocations if the project is checked out in a desktop scheduler.
- Add new team staff members to the project.
- Replace roles if the Reassign Tasks when replacing Role option is selected.
- **Automatically Open Staff Members for Time Entry**: Specifies if you want staff members on project teams to be open to enter time on project tasks. Values:
- **Never**: Staff members are not automatically open for time entry to enter time on project tasks.
- **When Hard-Booked**: Staff members are automatically open for time entry when they are hard-booked. Hard-booking means when any amount is hard-booked, not when the booking status changes to hard.
- **When Request Status is Approved**: Staff members are automatically open for time entry when their request status changes to Approved.

  The default value on this field is used when a team member is staffed on a project. If the Open for Time Entry attribute on the Team object is selected (checked), this system setting is not used. If the Open for Time Entry attribute on the Team object is not selected (unchecked), the Open for Time Entry attribute for the team member is updated based on this system setting.
- **Show Tasks in Organizer**: Defines how projects tasks appear in the Organizer. Values:
- **When Assigned**: Project tasks are listed in the Organizer when resources are assigned to the task.
- **When Hard-Booked**: Project tasks are listed in the Organizer when resources are hard-booked to the tasks.
- **When Request Status is Approved**: Project tasks are listed in the Organizer when resources are approved.
- **Automatically Add Staff Members As Investment Participant**: Specifies how resources are assigned to investments as participants. When the project setting is enabled (that is, not set to Never), the Project Participant (Auto) right is automatically granted to the resource. Values:
- **Never**: Resources can never be automatically assigned to investments as participants. In this case, to provide project access to a resource, assign either the Project - View or Project View - Management access right.
- **When Added to Investment**: Resources can be automatically assigned to investments as participants when they are added to these investments. If this option is selected and project notifications are enabled, project participants receive a notification when they are added to the team staff page of a project.
- **When Hard Booked**: Resources can be automatically assigned to investments as participants when they are hard-booked for these investments. Hard-booking means when any amount is hard-booked, not when the booking status changes to hard.
- **Require Resource - Hard Book right to add participants**: Allows project managers to filter the participants list based on hard booking access rights. When the setting is checked, you only see resources for which you have hard booking rights on project team participants page.
- **Hide System Groups option when adding participants**: Allows users to show or hide System Groups as an option to add on the project team participants page.
- **Allow Override Requisition Approval**: Allows project managers to require requisition approval on individual projects.

> [!NOTE]
> Project managers and resource managers require the Project - Edit access right to book requisitions.
- **Allow Mixed Booking**: Lets project managers edit the planned or soft allocations and hard allocations of resources. The resulting disparity is known as a mixed booking and often extends a resource allocation to do additional project planning. If a mixed booking exists on a project, the field is read-only.

> [!NOTE]
> When you allow mixed bookings in Clarity, a user with 'Project - Manager (Auto)' rights can modify allocation data for resources in the Team Detail page. When you update the settings to prohibit mixed bookings, a user with 'Project - Manager (Auto)' rights will not be able to modify resource allocation data. Project Managers can adjust the planned allocation based on project requirements but cannot update the hard allocation field without the necessary booking rights. Resource Managers or users with relevant rights can update the hard allocation field after negotiations with the project manager. The Accept Hard Allocation and Commit Planned Allocation actions in Clarity enable resource managers to synchronize the planned and hard allocation curves.
- **Convert resources to roles when using templates (default)**: Converts all resources to project roles when the project manager creates a project from a project template. The project manager can override this default setting when creating projects from project templates.

> [!IMPORTANT]
> The project manager can select Copy Tasks from Template in PPM Gantt to copy tasks from any template or non-template project. Hence, the assigned resources convert to their primary role in the target investment. If a resource does not have a primary role in the target investment, it will not be converted into a role.
- **Requisition Booking**: Defines the options to book requisitions using allocation percentage or available work units. Classic PPM decrements the requested amount based on the booked amount. Values:
- **Use Allocation Percentage**
- **Use Available Work Units**

  Example: When using Allocation Percentage, a resource booked at 100 percent fully replaces another resource that is booked at 100 percent. The requisition is fully filled even if the hours they work each week are different. When using Available Work Units, if the new resource works fewer hours each week than the resource being replaced, the requisition is not fully filled.

### Set Default Staff OBS Unit

The **Default Staff OBS Unit** field defines the default OBS unit that is used when you add staff members to a project. This OBS unit describes a staffing requirement and can be a resource pool, a specific location, or a department.

****Follow these steps:****

1. Click **Home**, **Portfolio Management**, **Projects**.
2. Open a project.
3. Click **Properties**, **Settings**.
4. Expand the **Time and Staff** section.
5. In the **Default Staff OBS Unit** field, select the OBS unit using the browse icon.

> [!NOTE]
> We recommend using the top-level Resource Department OBS Unit as the default, and when the staff member is added, it pulls the unit set on the resource properties for that Resource Department OBS field.

6. Save the changes.

After setting the project default staff OBS Unit, when you add a resource in the Staff module, the Staff OBS Unit field shows the OBS unit for the resource.

### Set the Default Earned Value Calculation Method

An earned value calculation method is the method for calculating the various earned value (EV) metrics. Some of the methods are system calculated. For methods that are not system calculated, manually enter the Budgeted Cost of Work Performed (BCWP) for your project.

If you use an EV calculation method for your project and all of its tasks that are not system calculated, define your project BCWP value. To define the value, baseline the project or update the earned value totals. You can also override BCWP for specific tasks. You can define the default method in which earned value is calculated for projects and project tasks. The default setting for the earned value calculation method for projects and tasks is percent complete.

Regardless of the earned value calculation method that you set for your project, the value entered in the **BCWP Override** field overrides the system-calculated BCWP values. The value is used in all EV calculations that require BCWP as a parameter.

The following EV calculation methods are available:
- **Percent Complete (PC)**: Defines an estimate expressed as a percent of the amount of work that has been completed on a task or work breakdown structure. Formula: `BCWP = Budget at Completion (BAC) * % complete`
- **0/100**: If % complete = 100, then BCWP = BAC; otherwise, BCWP = zero. Use this method when project work begins and completes in a single reporting period, and when credit is only earned when the project or task is 100 percent complete.
- **50/50**: If % complete > 0 and < 100, then BCWP = BAC / 2. If % complete = 100, then BCWP = BAC. If % complete = 0, then BCWP = 0. Use this method when project work begins and completes within two reporting periods.
- **Level of Effort (LOE)**: `BCWP = Budgeted Cost of Work Scheduled (BCWS)`
- **Weighted Milestones**: BCWP is user-defined. The project manager assigns weights to milestones across the duration of the summary task. Use the **BCWP Override** field in the Earned Value section of the task properties page.
- **Milestone Percent Complete (PC)**: BCWP is not system calculated but user-defined. Dollar amounts are selected for the weighting of each time period, instead of a percentage.
- **Apportioned Effort (AE)**: BCWP is not system-calculated but is user-defined. Task work effort is tied to other task work efforts. As the base task completes work, the apportioned task earns completed work.

> [!NOTE]
> If you are using Classic PPM with Microsoft Project and you specify an earned value calculation method other than percent complete, use Classic PPM to calculate, display, and report earned value metrics.

### Set Up Base Calendars

A default standard base calendar determines FTE and other calculations. As a project manager or resource manager, verify that the base calendars show the correct work days, shifts, and nonworking days. Base calendars serve as templates for other calendars including specific resource calendars and role calendars. The selected base calendar for a resource or role determines FTE when you allocate a resource or role to a project team.

****Follow these steps:****

1. Click **Administration**, **Project Management**, **Base Calendars**.
2. Click a calendar or click **New**.
3. Modify the existing calendar, or enter the information for the new calendar.
4. Save the calendar.

### Modify a Resource Calendar

> [!NOTE]
> When you select a resource that is a predefined team, the Calendar tab is not available. Team resources can use their site calendar.

****Follow these steps:****

1. Click **Home**, **Resource Management**, **Resources**.
2. Select a resource or role.
3. Click the **Calendar** tab.
4. Modify the calendar.

### Add Risk Categories

As a project manager, add risk categories to group investment risks by a particular type. You can add additional risk categories, and then add these categories to object attributes, such as the Category Type lookup attribute.

As an administrator, add new risk categories or factors. The risk categories appear in the Contributing Factors section of the main risk page. The project **Risk** field displays a weighted average of all risk categories or factors on the page.

****Follow these steps:****

1. Create a number attribute (field) for the project object Properties view.
2. Add the attribute to the Contributing Factors section of the Risk subpage view. The new number attribute is a formula field that is calculated based on a weighted average formula.
3. Publish the view. The new risk category appears on the page. Users can now enter values for the risk category.

### Set the Risk Threshold

As a project manager, use the Risk Score matrix to determine the degree of risk (low, medium, or high) based on the risk impact and probability factors. The risk probability values are plotted against the risk impact values. The intersection of every probability and impact value is the risk score.

The risk threshold is the system-level default project risk score and overall risk threshold. The risk threshold defines the acceptable level of risk that can be tolerated without acting out the risk response strategy.

****Follow these steps:****

1. Click **Administration**, **Project Management**, **Risk Settings**.
2. Set the risk threshold for all projects.
3. Set the risk score for a given impact and probability combination.
4. Save the changes.

### Round the Calculations of Impact and Probability

When an Investment has detailed Risk Records, the Impact and Probability scores on the individual risks roll up to determine the Investment-level Risk Category Score. The administrator now has the option to change how the calculation is done for mapping the average scores to the Investment Risk Category. In previous releases, Clarity calculated the Investment Category Score and mapped to the Higher Score. The **Round the Calculations of Impact and Probability** setting calculates the Investment Category Score and maps to the closest score. The mapping is applied when you add, delete, or update risks.

### Set Up Earned Value Reporting Periods

The earned value reporting period defines the frequency and the interval for the Update Earned Value History job. The job takes historical earned value snapshots of performance and saves them in the earned value history table.

Set up the earned value reporting periods that are used by project managers for earned value analysis (EVA). When you define the reporting period, you define how often the report runs. Project managers associate their projects to defined reporting periods.

**Weekly Frequency Example:** For a weekly recurrence of the reporting period, enter 1 as the frequency. For a recurrence pattern of every other week, enter 2. For twice a year, enter 26, and for once a year, enter 52.

****Follow these steps:****

1. Click **Administration**, **Earned Value Management**, **Period Definitions**.
2. Click **New**.
3. Enter the basic information for the period definition:
- **Active**: Indicates if this reporting period is active. When active, project managers can associate projects to it.
- **Period Type**: Defines the period type. Once you select a period type, define the recurrence of the selected period:
- **Weekly Frequency**: Defines the weekly interval and the day of the week when the period starts. Interval Values: 1 - 52. Day of the Week Values: Sunday through Saturday. Default: Weekly on Sundays starting this Sunday.
- **Monthly Frequency**: Defines the monthly interval when the period starts. Day Interval Values: 1 - 31. Default: Monthly starting on the first day of the month.
- **Quarterly**: First Quarter Starts defines the month (January through December). Day Interval Values: 1 - 31. Default: Quarterly starting on January 1.
- **Annually**: Every defines the month when the period starts. Day Interval Values: 1 - 31. Default: Annually starting on January 1.
4. Save the changes.

### Generate Earned Value Periods

Earned value (EV) periods contain the earned value reporting period information. The Update Earned Value History job creates the periods as it needs them. You can only delete consecutive ending time EV periods.

****Follow these steps:****

1. Click **Administration**, **Earned Value Management**, **Period Definitions**.
2. Click the **Calendar** icon next to the earned value reporting period to generate a new EV period. The EV periods list page appears.
3. Click **Create**. The generate EV periods page appears.
4. Enter the number of new periods.
5. Save the changes.

---

## Create Projects, Teams, and Tasks

Set up a project, team, and tasks to plan and complete your work goals. Assign resources to project tasks. As a project manager, you prioritize and approve projects based on a number of key factors, including the following items:
- Business plans, IT strategy, and governance
- Budget, time, and resource constraints
- IT architecture guidelines, risk management policies, and standards
- Current and planned workloads

A project is typically derived from ideas, proposals, unapproved trial projects, your backlog, or service requests.

### Create a Project

You create the project to track the work plan for your investments. For example, you have a new development project that has been approved for the upcoming fiscal year.

Follow one of these methods:
- Create the project from a template.
- Create the project manually.

> [!TIP]
> You can also create a project using XOG, by converting an idea to a project, and with Open Workbench or Microsoft Project.

#### Create a Project from a Template

You can create the project from a template. Templates help enforce consistency and improve efficiency when creating projects. You can create a project and can save it as a template. Others can use this template to create a project.

When you create a project from a template, the following information is copied from the template to the new project:
- General project attributes and custom fields.
- Staff, participants, and participant groups.
- Work breakdown structure.
- Task assignments.
- Organizational Breakdown Structures (OBS) unit associations.
- Resource % Allocation and Allocation field values, so that the ETC lines up with these amounts.
- Cost and benefit plans.

> [!NOTE]
> Start and finish dates, baseline information, and financial properties are not copied from templates to new projects. If hard-booked resources are defined in the project template, the resources are copied as soft-booked.

****Follow these steps:****

1. Open **Home**, and from **Portfolio Management**, click **Projects**.
2. Click **New from Template**.
3. Filter to select a template and click **Next**.
4. Complete the fields in the **General** section. The following fields require explanation:
- **% Complete Calculation Method**: Specifies the method to calculate the % Complete value for the project and tasks. Values:
- **Manual**: Use this method to enter the % Complete for the project, summary, and detail tasks and milestones manually. Also, select this calculation method if you are using the product with Microsoft Project, or if you are using an external job to calculate % Complete.
- **Duration**: Use this method to track the % Complete based on the duration. Formula: `Summary Task % Complete = Total Detail Task Duration Complete / Total Detail Task Duration`
- **Effort**: Use this method to calculate the % Complete automatically, based on the work units completed by resource assignments. Formulas: `Summary Task % Complete = Sum of Detail Task resource assignment Actuals / Sum of Detail Task resource assignment EAC (Actuals + ETC)` and `Detail Task % Complete = Sum of resource assignment Actuals / Sum of resource assignment Effort`
- Default: Manual

> [!NOTE]
> Set the % Complete Calculation Method at the beginning of your project and do not change this value.
- **Assignment Pool**: Specifies the pool of resources allowed when assigning resources to tasks. Values:
- **Team Only**: Allow only staff members.
- **Resource Pool**: Allow team staff members and resources for whom you have access rights to book to a project. Default: Resource Pool
- **Set Planned Cost Dates**: Specifies if the planned cost dates are synchronized with the investment dates. Default: Selected

5. Complete the fields in the **Organizational Breakdown Structures** section:
- **Organizational**: Defines the lines of business for your organization.
- **Department**: Defines the department used during transaction processing of chargebacks.
- **Location**: Defines the location used to match the investment with debit and credit rules.

6. Complete the fields in the **Copy Template Project Options** section:
- **Scale Work By**: Defines the percentage by which the work estimate on each task is increased or decreased. Values: 0-100. Default: Zero
- **Scale Budget By**: Defines the percentage as the scaling factor for dollar amounts in cost plans and benefit plans. Values: 0-100. Default: Zero
- **Convert resources to roles**: Specifies to replace the resources in the new project with the primary roles, or team roles of the named resources on the project template. Default: Cleared

7. Save your changes.

#### Create a Project Manually

You can create the project manually, if you do not want to use an existing template.

****Follow these steps:****

1. Open **Home**, and from **Portfolio Management**, click **Projects**.
2. Click **New**.
3. Complete the fields in the **General** section (same fields as template creation: % Complete Calculation Method, Assignment Pool, Set Planned Cost Dates).
4. Complete the fields in the **Organizational Breakdown Structures** section.
5. Save your changes.

> [!TIP]
> As a project manager, use the My Projects portlet on the Overview (General) page to view a personal list of your favorite projects.

### Define the Project Properties

After you create a project with the basic information, define the project properties. Project properties include the following:
- A set of characteristics to manage and organize financial information.
- Risk factors that can occur over the course of the project.
- A baseline of project costs and work effort at various stages in the project lifecycle.

#### Define the General Properties

Specifying the general properties of a project help identify it and define its characteristics.

****Follow these steps:****

1. Open the project.
2. Complete the fields in the **General** section:
- **Manager**: Specifies the resource who manages the project. If you do not specify a project manager during project creation, the project creator becomes the project manager as a default.
- **Page Layout**: Specifies the page layout to view project information. Default: Project Default Layout
- **Risk**: Specifies the risk level of the project.
- **Goal**: Specifies the purpose or business case. Values: Cost Avoidance, Cost Reduction, Grow the Business, Infrastructure Improvement, and Maintain the Business
- **Alignment**: Specifies the alignment with corporate objectives. Stoplight values: 66-100 (Green) = Aligned, 33-65 (Yellow) = Alignment at risk, 0-32 (Red) = Out of alignment
- **Status**: Values: Approved, Rejected, Unapproved. Default: Unapproved
- **Active**: Specifies if the investment is active. Default: Selected
- **Program**: Specifies that you want to use a program. Default: Cleared
- **Template**: Specifies that you want to use the project as a template. Default: Cleared
- **Required**: Specifies to pin this investment when added to a portfolio. Default: Cleared

#### Define the Scheduling Properties

You define scheduling properties for the following reasons:
- Open or close the project for time tracking.
- Auto-schedule your project.
- Define the default staffing options.
- Set the project-level default earned value calculation method.
- Associate the project to an earned value reporting period.
- Override the earned value.

****Follow these steps:****

1. Open the project.
2. Open the **Properties** menu, and from **Properties**, click **Schedule**.
3. Complete the fields in the **Schedule** section:
- **As Of Date**: Defines the date to include data in time and budget estimates. This date is used in Earned Value Analysis (EVA) calculations.
- **% Complete**: Defines the percent of work completed. Default: 0. Values: 0 through 100
- **% Complete Calculation Method**: Values: Manual, Duration, Effort. Default: Manual

> [!NOTE]
> Set the % Complete Calculation Method at the beginning of your project and do not change this value.

> [!WARNING]
> Verify that the start and finish dates of tasks and assignments are the same or within the start and finish dates of the project. Otherwise, the start and end dates of the project are automatically redefined.

4. Complete the fields in the **Tracking** section:
- **Track Mode**: Values:
- **Clarity**: Resource assignments enter time against their assigned tasks using timesheets.
- **None**: Resources other than labor resources track actuals from financial transaction records or through a desktop scheduler.
- **Other**: Actuals are imported from a third-party application. Default: Clarity
- **Charge Code**: Defines the charge code against which transactions are charged.

5. Select the **Prevent Unassigned Timesheet Tasks** check box if you do not want to allow users to add unassigned timesheet tasks.

6. Complete the fields in the **Staffing** section:
- **Default Staff OBS Unit**: Defines the set default OBS unit used when you add team staff members.

7. Save your changes.

#### Define Risk Properties

****Follow these steps:****

1. Open the project, and from **Properties**, click **Risk**.
2. Rate the project risk by selecting the options for the Contributing Factors.
3. Save your changes.

#### Define the Budget Properties

Budget information is essential in managing and analyzing portfolios.

> [!NOTE]
> To see all data from an investment to a portfolio, your Classic PPM administrator must run the Synchronize Portfolio Investment job.

****Follow these steps:****

1. Open the project.
2. Open the **Properties** menu, and from **Properties**, click **Budget**.
3. Complete the fields:
- **Budget Equals Planned Values**: Indicates whether you want the budget cost and benefit values to be equal to the planned cost and budget values.
4. Save your changes.

#### Define Project Dependencies

Dependency relationships can exist between one investment and another in your portfolio.

****Follow these steps:****

1. Open the project.
2. Open the **Properties** menu, and from **Properties**, click **Dependencies**.
3. Select a mode to view or add:
- Investments that depend on this one.
- Investments this one depends on.
4. Click **Add** to add more dependencies.
5. Select an investment type from the **Type** drop-down, select an investment, and click **Add**.

### Create the Project Team

Project members and tasks are the core elements of a project. You can build a project team with the following members:
- **Team Staff**: The resources that the project manager assigns to tasks. Team staff members are allocated to the project.
- **Participants**: The resources that the project manager adds to the project. Participants can view project properties, generate ideas, and monitor progress.
- **Participant Groups**: A group of resources who are project participants.

> [!NOTE]
> All the team members become project participants if the default project management setting, Automatically Add Staff Members As Investment Participant is not changed under system options.

#### Add Resources, Roles, or Teams

****Follow these steps:****

1. Open the project and click **Team**.
2. Click **Add**.
3. Select the resources, roles, or predefined teams to add, and click **Add**.
4. Save your changes.

#### Define the Resource Allocation

****Follow these steps:****

1. Open the project and click **Team**.
2. Complete the fields in the **Project Team Staff** page:
- **Booking Status**: Values: Soft, Hard, Mixed. Default: Soft
- **% Allocation**: Defines the expected percentage of time. Default: 100 percent
3. Save your changes.

### Create Project Tasks

A project includes multiple tasks, which are activities that begin and end on defined dates. You can create tasks using the following methods:
- Insert a task to a specific WBS location.
- Insert a new task by using a keyboard shortcut key.
- Copy a task from a project template.
- Use XOG.

You can create the following types of project tasks:
- **Milestone**: Indicates a critical point in a project. Any task with zero duration is a milestone (Start date and Finish dates are the same).
- **Key Task**: Specifies whether a task is significant for other tasks.
- **Fixed Duration**: Specifies the fixed length of working time between the start and finish of a task.

> [!NOTE]
> For new projects, a new empty row (task) appears by default in the WBS.

#### Create a New Task

****Follow these steps:****

1. Open the project.
2. Click **Tasks**.
3. Click **New**.
4. Enter the name of the task.
5. Enter the ID of the task.
6. Enter the start and finish dates for the task.
7. Click **Save And Return**.

The newly created Task Properties includes:
- **[Guideline]**: If the Guidelines URL field has a URL value, the link opens that URL in a new tab.
- **[Links]**: You can add links for the specific task.
- **[Notes]**: You can add notes for the specific task.

#### Insert a Task to a Specific WBS Location

****Follow these steps:****

1. Open the project.
2. Open the **Tasks** menu and click **Gantt**.
3. Select the check box against the project name, or click anywhere on the task row to insert the new task row below it. Then perform one of these actions:
- Windows: Press **Insert**.
- Macintosh: Press **Ctrl+I**.
- Click the **Create New Task** icon on the Gantt view.
4. Complete the fields:
- **% Complete**: Values: Zero (not started), 1-99 (in progress), 100 (complete). Default: 0
5. Save using the **Save** icon or press **Enter** for a new task below.

#### Copy a Task from a Project Template

****Follow these steps:****

1. Open the project.
2. Open the **Tasks** menu and click **Gantt**.
3. Click the down arrow for the **Create New Task** icon, and click **Copy Task from Template**.
4. Select the project template containing the tasks and click **Next**.
5. Select the tasks to copy.
6. Click **Copy**.

### Manage Resource Utilization

Resource utilization is the amount of resource effort it takes, or is expected to take, to complete a task. Using the **Project: Tasks: Resource Utilization** page, you can:
- View and edit each task calculated total effort: `Total Effort = Actuals + Remaining ETC`
- Autoschedule the project.

> [!WARNING]
> Assign staff to tasks before viewing resource utilization.

****Follow these steps:****

1. Open the project.
2. Open the **Tasks** menu and click **Resource Utilization**.
3. Edit the fields:
- **Task**: Defines the task name.
- **ID**: Defines the task unique identifier (up to 16 characters).
- **Start**: Defines the date to start working on the task. Default: Current date
- **Finish**: Defines the date for completing the task. Default: Current date
4. Save your changes.

### Assign Resources

Assign labor resources to tasks so that they can perform work and record the work time in their timesheets. You can also assign expense, material, and equipment resources to tasks.

> [!NOTE]
> You cannot assign resources to milestone or summary tasks.

#### Assign Resources to the Project Tasks

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the **Tasks** menu and click **Assignments**.
3. From the Task Assignments page, you can:
- Replace resources assigned to a task.
- Remove resources assigned to a task.
- Assign resources from the Gantt view.

#### Assign Resources from the Gantt View

You can assign resources to detail tasks from the WBS using one of the following methods:
- **Inline editing**: Click in the **Assigned Resources** field and start entering the resource name. Autosuggest displays matching resources.
- **Gantt toolbar**: Select a task and click the **Assign Resources** icon.
- **Task properties**: Click a task name to open the task properties and assign resources.

The assignment pool setting determines the available resources:
- **Resource Pool**: Select from a general list of resources accessible to you.
- **Team Only**: Select from the available resources on the project team.

### Control Access to Projects and Subprojects

Use the **Access to this Project** pages to view, grant, and edit the instance-level access rights to your project.

### Lock Subprojects During Autoscheduling

During autoscheduling of projects, you can set subprojects as read-only so they are locked. If a subproject is locked during autoscheduling of the parent project, a tentative schedule is not automatically published for the subproject.

****Follow these steps:****

1. Open the project.
2. Open the **Properties** menu and click **Subprojects**.
3. Select the check box next to the subproject:
- **Set Read-Only**: The subproject is locked from publishing a tentative schedule to the plan of record.
- **Set Read/Write**: A user with edit access can publish a tentative schedule as plan of record.

---

## Create Projects from Project Templates

You can create projects from project templates based on standard task and role assignments. Templates help with consistency and efficiency. You can also scale the overall project work estimate and budget.

### Using Project Templates with Processes

Project templates can have associated processes. For staff and WBS to copy over, verify that your template process includes:
- **Copy WBS from Template**: Copies WBS tasks and any staff assigned to those tasks.
- **Copy Staff from Template**: Copies all staff from the template (regardless of task assignment).

### Designate Projects as Templates

Before designating a project as a template, verify:
- The project contains no time entries with a value greater than zero.
- The project is financially closed.
- The project is not associated with transactions (posted or not).

****Follow these steps:****

1. Open the project.
2. Select the **Template** check box.
3. Save the changes.

### Populate Projects from a Template

****Follow these steps:****

1. Open the project.
2. Open the **Actions** menu, and click **Copy Project from Template**.
3. Select the project template, and click **Next**.
4. Complete the fields:
- **Scale Work By**: Values: 0-100. Default: Zero
- **Scale Budget By**: Values: 0-100. Default: Zero
- **Convert resources to roles**: Default: Cleared
5. Click **Copy**.

### Rules for Copying Financial Plans from Project Templates
- The entity associated with the template requires matching the entity associated with the new project.
- The ID for a financial plan in the template must not match an ID in the new project. Otherwise, the plan ID is suffixed.
- If both the target project and template have a cost plan of record (POR), the target retains its POR.
- Active processes cannot run on the template. Otherwise, the financial plan does not copy.
- The template cannot include submitted, approved, or rejected budget plans.

### Project Fields Used for Copying Financial Plans
- **Start Date**: Time periods on the financial plans shift according to this start date.
- **Set Planned Cost Dates**: Only considered when no budget plans exist in the template.
- **Department**: If a Department OBS is defined in the template, this value is copied to the new project.
- **Scale Budget By**: Defines the percentage scaling factor.

### Example: How Start Dates in Financial Plans Are Copied from a Template

The template with a start date of December 2020 includes these financial plans:
- Cost Plan A is the POR, spans Jan 2021 - Dec 2022
- Cost Plan B spans June 2021 - June 2023
- Benefit Plan C spans Jan 2023 - Dec 2026
- Benefit Plan D spans July 2023 - July 2027
- Benefit Plan E spans June 2023 - June 2027

When copied to a new project with a start date in December 2021, the plans shift while maintaining the same time lapse:
- Cost Plan A: Jan 2022 - Dec 2023
- Cost Plan B: June 2022 - June 2024
- Benefit Plan C: Jan 2024 - Dec 2027
- Benefit Plan D: July 2024 - July 2028
- Benefit Plan E: June 2024 - June 2028

### Copy Financial Plans from Project Templates

****Follow these steps:****

1. Create the fiscal time periods that include the start dates of the template and target projects.
2. Do one of the following:
- Create a project using a template.
- Populate an existing project from a template.
- Create a process that copies financial information from a template into an existing project.

---

## Financially Enable Projects

To process financial transactions against a project, define the financial properties such as the financial department and location. Also, associate the project with a cost/rate matrix.

### Verify the Prerequisites for Financially Enabling a Project

Before defining the financial properties, verify:
- A financial entity associated with a department and a location OBS.
- Financial locations that set the geographical boundaries for the entity.
- Financial departments associated with the locations.
- A cost/rate matrix that determines cost and charge rates.

### Define the Financial Properties of a Project

Depending on what columns you configured in the cost/rate matrix, the financial properties can vary. For example, if the associated cost/rate matrix uses department and location from the investment, specify these properties for computing project rates.

---

## Define Project Estimates (ETC)

The Estimate-to-Complete (ETC) is the estimated time for a resource to complete an assignment. The value is important for both project planning and revenue recognition.

****Follow these steps:****

1. Open a project.
2. Assign resources to the tasks.
3. Generate the estimates.
4. Define estimates at the project level or at the task level.
5. Define allocations by individual resource.

### ETC Calculation

The ETC value for a task is obtained through conversations with the resources involved. When you initially assign a resource to a task, the application makes the following assumptions:
- They spend their entire allocation to the project on that particular task.
- They spend their entire allocation for the task duration (they work on only one task at a time).

The application considers:
- Calendar
- Daily availability
- Project allocation

Default calculation: `ETC = Assigned Work Days x Allocation (Daily Availability in Hours)`

> [!WARNING]
> The default calculation is intended merely as a shortcut method for entering estimates, not as a substitute for obtaining valid estimates through conversation with the assigned resources.

#### Clipping of Task Time

The start and finish time for all new tasks is fixed from 8:00 am to 5:00 pm. However, standard calendar work shifts can cause a task start and finish time to be clipped inward once assigned, but never outward.

#### Default ETC Examples
- Aaron Connors and Patty Chen each have eight hours daily availability. Aaron is allocated 100% for 5 days = 40 hours. Patty is allocated 50% for 5 days = 20 hours.
- A task scheduled 6/30/14 to 7/30/14 with 22 working days and one resource at 100% = 176 hours. Adding two extra resources (one at 100%, one at 50%) = 440 hours total.

### Modify ETC (Investments)

You can change the project-level ETC by:
- Applying new estimates across project tasks.
- Applying the ETC.
- Applying the estimating rules.

> [!WARNING]
> Assign staff to tasks before you can view and edit ETC.

### Apply New ETC Across Tasks

****Follow these steps:****

1. Open the project.
2. Open the **Properties** menu and click **Estimating**.
3. Complete the **New ETC** field.
4. Click **Apply**.

### Apply Top-Down Estimating

****Follow these steps:****

1. Open the project.
2. Open the **Properties** menu and click **Estimating**.
3. Complete the fields:
- **Mode**: Values: Top-Down Estimating, Estimating Rules. Default: Top-Down Estimating
- **Current ETC**: Displays the current estimate.
- **New ETC**: Defines the new estimate.
4. Click **Preview**.
5. View the fields: Task, ID, Current ETC, Top-down %, New ETC.
6. Click **Apply**.

---

## Define Subprojects

Use subprojects to group related projects under one master project for scheduling purposes. You can associate any number of projects together.

### Add Subprojects to Master Projects

#### Properties Page

****Follow these steps:****

1. Open the project.
2. Open the **Properties** menu, and click **Subprojects**.
3. Select the project to add as a subproject, and click **Add**.

#### Gantt View

****Follow these steps:****

1. Open the project.
2. Open the **Tasks** menu and click **Gantt**.
3. Click the **Add Existing Subproject** icon.
4. Select the project and click **Add**.

### Create Subprojects from Project Templates

****Follow these steps:****

1. Open the project.
2. Open the **Tasks** menu and click **Gantt**.
3. Click the down arrow for the **Add Existing SubProject** icon, and click **Create New Project From Template**.
4. Select a project template and click **Next**.
5. Complete the requested information (same fields as project creation: Assignment Pool, Manager, Page Layout, Start Date, Finish Date, etc.).
6. Save the changes.

### Create Subprojects from Project Work Breakdown Structure (WBS)

****Follow these steps:****

1. Open the project.
2. Open the **Tasks** menu and click **Gantt**.
3. Click the down arrow for the **Add Existing Subproject** icon, and click **Create New Project**.
4. Complete the requested information.
5. In the **Organizational Breakdown Structures** section, define the OBS to associate.
6. Save the changes.

### View Combined Subproject Actuals and Estimates

The following columns display on the subprojects page:
- **Project**: Displays the project name.
- **ID**: Displays the project ID.
- **Count**: Indicates the number of subprojects.
- **Actuals**: Displays the posted actuals for tasks.
- **ETC**: Displays the estimate to complete.
- **Total Effort**: `Total Effort = Actuals + Remaining ETC`
- **Percent Expended**: Displays the percentage of resource usage expended.
- **Baseline**: `Usage = Total Effort (Actuals + Remaining ETC) to date`
- **Total**: Displays a stoplight indicator with the overall approval status.
- **Read Only**: Specifies if the subproject is read-only.

---

## Create Project Baselines

Project baselines are snapshots of the total actual and planned effort and total actual and planned cost estimates for a project at the moment of capture. Baselines are static. Changes you make after creating a baseline do not affect the current baseline.

You can create an unlimited number of project baselines. Create an initial baseline before resources enter time on a project.

> [!NOTE]
> The project must be unlocked before you can create a baseline.

****Follow these steps:****

1. Open the project.
2. Open the **Properties** menu, and click **Baseline**.
3. Click **New**.
4. Complete the fields:
- **Revision Name**: Example: Initial Baseline, Mid-Term Baseline, or Final Baseline. Required: Yes
- **Revision ID**: Example: v1 or v5. Required: Yes
- **Current Revision**: Default: Selected
5. Save the changes.

### Edit, Update, and Delete Project Baselines

> [!NOTE]
> When you update a baseline, it becomes the current baseline revision and includes changes to task assignments, estimates, and the financial summary.

****Follow these steps:****

1. Open the project.
2. Open the **Properties** menu, and click **Baseline**.
3. Click the name of the baseline revision.
4. Edit the fields: Current Revision, Revision Name, Revision ID, Start, Finish, Usage (`Usage = Total of Actuals + ETC`), BCWP.
5. Save the changes.

### Update Task Baselines

> [!NOTE]
> A task baseline update does not roll up to the summary task, team, or project level.

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the **Tasks** menu and click **Gantt**.
3. Select the task, click the down arrow for the **Create Baseline** icon, and click **Update Task Baseline**.
4. Click **Yes** to confirm.

### How Master Project and Subproject Baselines Work

The master project baseline information is an aggregation of its own baseline information and subprojects. The baseline is dynamically aggregated at the time you set the baseline.
- If subprojects have more than one baseline, the current baseline displays in views.
- The subproject baseline inherits the name and ID of the master project baseline.
- When you delete a master baseline, the subproject baseline is also deleted.

### Update and Display of Master Project Baselines

When you update the baseline for a master project, the baselines for each subproject are also updated.
- **Subproject Baseline Information Roll up**: When you update a subproject baseline, baseline and earned value information are not rolled up. To update the master project, roll up the baseline information from the subprojects.

### Create an Initial Baseline With Costs

****Follow these steps:****

1. Create a Project with Staff, Tasks, Assignments.
2. Set up the Project Financial Properties to associate Rate and Cost Matrices for all resource types.
3. Execute the Rate Matrix Extraction job.
4. Run the Update Earned Value and Cost Totals job or use the Update Cost Totals action.
5. Create the Project Baseline.

---

## Calculate Earned Value, EAC, ETC, and Other Metrics

Earned value (EV) is a technique for determining the true cost or value of work. EV is expressed in terms of the approved budget assigned to a given work breakdown structure. Earned value is also referred to as the budgeted cost of work performed (BCWP).

### Default Earned Value Options

If your organization uses earned value management methodology, you can set the project-level default earned value calculation method using the **Earned Value** section of the scheduling properties page.

### Update Project Task Cost Totals

Update cost totals when you create a baseline, update a baseline, or change task information. This lets you view earned value calculations and costs such as ACWP, BCWP, EAC, and ETC.

> [!NOTE]
> Rolled-up cost or earned value data from child projects are not available on the program or project list views. To view rolled-up financial data from parent and child projects, use the **Hierarchy** tab.

****Follow these steps:****

1. Schedule the Rate Matrix Extraction job to run periodically.
2. Open the project and click **Tasks**.
3. Open the **Actions** menu, and click **Update Cost Totals**.
4. Open the **Tasks** menu and click **Gantt**.

### Earned Value Metrics

| Metric | Formula | Current Baseline Required |
|--------|---------|--------------------------|
| **BAC** | `BAC = ((Actuals + Remaining Work) x actual cost)` taken at time of baseline | Yes |
| **BCWS** | `BCWS = Sum of BAC through a point in time` | Yes |
| **ACWP** | Sum of Actual Cost at assignment, detail-task, summary-task, and project levels | No |
| **BCWP** | Based on selected EV calculation method (task level); sum of BCWP for all WBS Level 1 tasks (project level) | Yes |
| **EAC** | `EAC = ACWP + [(BAC - BCWP) / CPI]` | Yes |
| **EAC (T)** | `EAC (T) = ACWP + ETC` (typical variances) | No |
| **EAC (AT)** | `EAC (AT) = ACWP + (BAC - BCWP)` (atypical variances) | Yes |
| **ETC (AT)** | `ETC (AT) = BAC - BCWP` | Yes |
| **ETC (Cost)** | `ETC (Cost) = remaining labor cost + remaining non-labor cost` | No |
| **ETC (T)** | `ETC (T) = (BAC - BCWP) / CPI` (typical variances) | Yes |
| **CV** | `CV = BCWP - ACWP` (Cost Variance) | Yes |
| **SV** | `SV = BCWP - BCWS` (Schedule Variance) | Yes |
| **CPI** | `CPI = BCWP / ACWP` (Cost Performance Index) | Yes |
| **SPI** | `SPI = BCWP / BCWS` (Schedule Performance Index) | Yes |

### Earned Value Calculation Methods

The following EV calculation methods are available:
- **Percent Complete (PC)**: `BCWP = BAC * % complete`
- **0/100**: If % complete = 100, then BCWP = BAC; otherwise BCWP = zero.
- **50/50**: If % complete > 0 and < 100, then BCWP = BAC / 2; if = 100, then BCWP = BAC; if = 0, then BCWP = 0.
- **Level of Effort (LOE)**: `BCWP = BCWS`
- **Weighted Milestones**: BCWP is user-defined. Enter the BCWP at the task level using the **BCWP Override** field.
- **Milestone Percent Complete (PC)**: BCWP is user-defined. Dollar amounts are selected for weighting.
- **Apportioned Effort (AE)**: BCWP is user-defined. Task work effort is tied to other task work efforts.

### How Earned Value Calculation Methods are Applied

By default, the EV calculation method for projects and tasks is percent complete. You can override the object-level EV calculation method at the project and task level. The task-level setting is used, and results are rolled up to the project. If no method is defined for the task, it inherits from the parent task. If no method is defined for the summary task, it inherits from the project.

> [!NOTE]
> If you are using the product with Microsoft Project and specify an earned value calculation method other than percent complete, use Classic PPM to calculate, display, and report earned value metrics.

---

## Close, Deactivate, and Delete Projects and Investments

When the project lifecycle ends, perform one or more of the following closure activities. Closure typically takes place after final retrospectives, baselining, and analysis of posted actuals.

### Mark Investments for Deletion

You can mark an investment for deletion in Clarity 15.9.2 and higher. When you mark an investment for deletion, Clarity sets the **Purge Flag** field.

Before you mark an investment for deletion, ensure:
- The financial status is set to **Closed**.
- The investment status is set to **Inactive**.
- No process instances are currently running on the investment.

You need the `<Investment> - Delete - All` global access right and "View" access rights.

### Financially Close a Project

****Follow these steps:****

1. Click **Home**, **Portfolio Management**, **Projects**.
2. Open the project.
- Verify that the project has no ETC.
- Process all remaining financial transactions into WIP and post all actuals.
3. Click **Properties**, **Settings**.
4. Set the **Financial Status** field to **Closed**.
5. Clear the **Open for Time Entry** check box.
6. Save your changes.

### Deactivate a Project

****Follow these steps:****

1. Click **Home**, **Portfolio Management**, **Projects**.
2. Open the project.
3. Select **Properties**, **Settings**.
4. Clear the **Active** check box.
5. Save your changes.

### Mark a Project for Deletion

You can mark a project for deletion only when it is inactive.

****Follow these steps:****

1. Click **Home**, **Portfolio Management**, **Projects**.
2. Filter the list for inactive projects.
3. Select the project and click **Mark for Deletion**.
4. Click **Yes** to confirm.

> [!TIP]
> Starting with Release 15.5.1, you can delete investments with timesheet or financial transaction data. To enable this feature, select the **Allow Marked Investments with Timesheet and Transaction Data to be Deleted** check box on the Settings page.

### Cancel Project Deletion

****Follow these steps:****

1. Click **Home**, **Portfolio Management**, **Projects**.
2. Filter the list for inactive projects.
3. Select the project and click **Cancel Deletion**.
4. Click **Yes** to confirm.

> [!TIP]
> To see the list of marked-for-deletion investments, configure the list to display the **Purge Flag** field and filter or sort by it.

### Delete a Project or Investment

**Prerequisites:**
- The financial status is set to Closed.
- The investment status is set to Inactive.
- No process instances are running.
- You have the access rights to mark for deletion and run the Delete Investments job.
- Parent-child hierarchy allocations are 0%, 100%, or removed.

****Follow these steps:****

1. Configure the project management setting to allow marking investments with actuals for deletion.
2. Mark the investments for deletion.
3. Review the time reporting periods and investments marked for deletion.
4. Run the **Delete Investments and Time Reporting Periods** job.

#### Deleting Projects and NPIOs with Actuals

| PM Admin Setting | Mark for Deletion? | Delete Job Parameter | Investment Deleted? |
|------------------|--------------------|----------------------|---------------------|
| Checked | Yes | Checked | Yes |
| Checked | Yes | Unchecked | No |
| Unchecked | No | Unchecked | No |
| Unchecked | No | Checked | No |

> [!NOTE]
> If the project management admin setting is unchecked before the job runs, even with the job parameter checked, the investment is still not deleted.

### Delete Investment-Specific Charge Codes

When you delete a project, the application removes the investment-specific charge code from the database `PRCHARGECODE` table. Any rate matrix rows that used the investment-specific charge code are also removed.

> [!TIP]
> Investment-specific charge codes are available for projects but not for non-project investments or custom investment types.

---

## Manage Project Teams

### Add Resources to Projects by OBS Unit

You can add resources from a selected OBS to a project, extend or update resource allocations, start and finish dates, or remove resources.

> [!NOTE]
> The **Add/Update by OBS** button requires the Project - Edit Management access right and soft booking access rights to at least one resource.

****Follow these steps:****

1. Click **Home**, **Portfolio Management**, **Projects**.
2. Open a project and click the **Team** tab.
3. Click **Add/Update by OBS**.
4. In the **OBS Unit** field, browse available OBS units, select one, and click **Add**.
5. In the **OBS Filter Mode** field, set the scope to include resources in descendant or ancestor OBS units, or limit to the selected OBS unit only.
6. Complete the remaining fields and click **Apply**.
7. In the **Show** field, select: Updates, Additions, or Removals.
8. Click **Return**.
9. Save your changes.

### Specify Staffing Requirements

****Follow these steps:****

1. Click **Home**, **Portfolio Management**, **Projects**.
2. Open a project and click the **Team** tab.
3. Click the **Properties** icon for a resource or role.
4. Complete the fields:
- **Start Date**, **Finish Date**
- **Default Allocation %**: Defines the percentage of time. You can enter 0 percent.
- **Booking Status**: Soft, Hard, Mixed. Default: Soft
- **Request Status**: Displays the requisition status.
- **Investment Role**: The role requested for the investment.
- **Staff OBS Unit**: Defines the staff member OBS Unit affiliation.
- **Open for Time Entry**: Default: Selected
- **Planned Allocation** and **Hard Allocation**
5. Save your changes.

---

## Manage Requisitions

Requisitions are associated with single staffing requirements; they always contain references to a specific resource or role.

### Fulfill Project Staffing Requirements Through Requisitions

1. The project manager defines staffing requirements by adding soft-booked resources or roles.
2. The project manager creates requisitions based on the staffing requirements.
3. The project manager submits new requisitions. The requisition is routed to appropriate resource managers.
4. The resource manager proposes a list of resources (or declines).
5. The project manager reviews the proposed allocations and accepts or rejects.

### Create Requisitions

****Follow these steps:****

1. Open the project and click **Team**.
2. Select a soft-booked resource or role, and from the **Actions** menu, click **Create Requisitions**.
3. Select a requisition type:
- **Request Resources**: Create new requisitions.
- **Unbook Resources**: Create requisitions to unbook hard-booked time.
- **Replace Resources**: Unbook and replace a hard-booked resource.
4. Select a booking manager.
5. Click **Create** (New status) or **Create and Open** (Open status).
6. Save the changes.

### Edit Unopened Requisition Requests

You can only edit requisitions with a status of New.

****Follow these steps:****

1. Open the project and click **Team**.
2. Open the **Team** menu and click **Requisitions**.
3. Click the requisition name.
4. Complete the fields:
- **Requisition Name**: Required: Yes
- **Due Date**: The last date of filling the requisition.
- **Status**: Values: New, Open, Proposed, or Closed. Required: Yes
- **Requested Amount**: Define the period and percentage.
5. Save the changes.

### Review and Book Proposed Allocations

A committed (hard) allocation exists only when you accept the proposals.

#### View Resource Allocations

1. Open the project and click **Team**.
2. Click the **Resource Allocation** icon next to the resource.

#### Accept and Book a Single Requisition

1. Open the project and click **Team**.
2. Open the **Team** menu and click **Requisitions**.
3. Click the **Person with List** icon next to the requisition.
4. Click **Book** to accept.

#### Accept and Book Multiple Requisitions

1. Open the project and click **Team**.
2. Open the **Team** menu and click **Requisitions**.
3. Select the proposed requisitions, and click **Book**.

#### Reject a Requisition

1. Open the project and click **Team**.
2. Open the **Team** menu and click **Requisitions**.
3. Select proposed requisitions, and click **Reject**. Status changes from Proposed to Open.

### Unbook Hard-Booked Resources Using Requisitions

****Follow these steps:****

1. Open the project and click **Team**.
2. Select the hard-booked resource, then from the **Actions** menu, click **Create Requisitions**.
3. Select **Unbook Resources**.
4. Click **Create and Open** to unbook completely, or **Create** and then edit the unbooking amount to unbook partially.
5. Save the changes.

### Replace Unbooked Resource Requisitions

****Follow these steps:****

1. Open the project and click **Team**.
2. Select the hard-booked resource, then from the **Actions** menu, click **Create Requisitions**.
3. Select **Replace Resources**.
4. Click **Create and Open**.

### Request Additional Bookings

If the project gets extended, you can add additional planned allocation. To request additional booking, increase the planned booking compared to the hard-booking.

### Book Already-Booked Resources

You can add multiple instances of a role to a project but not multiple instances of the same named resource. When booking already-booked resources, the following error appears: "Resource not booked because it exists in the team."

---

## View and Edit Resource Roles and Role Capacity

Use a role as a placeholder when you do not know the name of a resource. You can staff a project with multiple instances of the same role.

****Follow these steps:****

1. From **Home**, click **Projects** under **Portfolio Management**.
2. Open the project.
3. Click **Team** and select **Role Capacity**.
4. Click the name of an over-allocated role to view the assigned resource.

### Edit Resource Roles

1. Open the project and click **Team**.
2. Edit the project role in the **Role** column.
3. Save the changes.

---

## Manage Resource Allocation

Resource allocation is the period during which a resource is staffed or booked to a project.

### Change Resource Default Allocation

****Follow these steps:****

1. Open the project and click **Team**.
2. Click the **Properties** icon for the resource.
3. Complete:
- **Default % Allocation**: Default: 100 percent
4. Create allocation rows in the **Planned Allocation** and **Hard Allocation** sections with Start, Finish, and % Allocation.
5. Save the changes.

### Planned and Hard Allocation

The **Planned Allocation** curve represents the default or total allocation amount requested by the project manager. The **Hard Allocation** curve represents the allocation amount committed by the resource manager.

### Shift and Scale Resource Allocations

****Follow these steps:****

1. Open the project and click **Team**.
2. Select the resource. Open the **Actions** menu and click **Shift allocation**.
3. Complete the **Time Span to Shift** section (Start Date, Finish Date).
4. Complete the **Time Shift Parameters** section:
- **Shift to Date**: When the shifted allocation should begin.
- **Shift Cut-off Date**: Last date for shifting allocations.
- **Scale Allocation % By**: Percentage change in allocation.
5. Save the changes.

### Edit Team Allocations

You can edit team allocation using time-varying cells on the project team detail page.

To give resource managers the ability to manage team allocations while the project is locked, verify the **Allow Edit of Allocations when Investment is Locked** setting is selected.

### Managing Resource Allocation

The project manager can:
- **Reduce the allocation**: Unbook a resource for a period.
- **Extend the allocation**: Request more booking.
- **Replace a resource or role**.

Additional methods:
- **Allocate Resources from Estimates**: Calculate planned allocation based on new estimates.
- **Generate Estimates Based on Resource Allocation**: Use the **Estimate from Allocation** option.
- **Set Resource Allocation for Multiple Staff Members**: Use the **Set Allocation** action.
- **Hard Book Resources**: Use the **Accept Hard Allocation** action.
- **Commit Planned Allocation**: Reset hard allocation to equal planned allocation.

---

## Manage Team Staff Members

### Define Team Staff Member Properties

****Follow these steps:****

1. Open a project and click the **Team** tab.
2. Click the **Properties** icon for a resource or role.
3. Complete the fields:
- **Default Allocation %**: Default: 100 percent
- **Booking Status**: Soft, Hard, Mixed. Default: Soft
- **Request Status**: New, Open, Proposed, Booked, Closed, Rejected. Default: New
- **Investment Role**, **Staff OBS Unit**, **Open for Time Entry**, **Resume Keywords**, **Planned Allocation**, **Hard Allocation**

### Configure Capitalization % of Cost for Team Staff Members

The **Capitalization %** value is used to retrieve the cost breakdown by cost type (capital vs. operating) from the associated cost/rate matrix.

Formula: `Capital Cost = (Capitalization % * Allocation) * Cost`

> [!NOTE]
> Editing the Capitalization % field requires the `<investment> - Edit Financial` access right.

### Open and Close Projects for Time Tracking

****Follow these steps:****

1. Open a project.
2. Click **Properties**, **Settings**.
3. In the **Time and Staff** section, complete:
- **Open for Time Entry**: Select to enable time entry.
- **Track Mode**: Clarity (Default), None, Other
- **Charge Code**: Select a default charge code.
4. Submit the changes.

### Remove Team Staff Members

You can remove team members provided there are no posted transactions or actuals.

1. Open a project and click **Team**.
2. Select a resource and click **Remove**.
3. Click **Yes** to confirm.

### Replace Staff Members on Task Assignments

You can replace a resource with a role or a different resource on the Tasks Assignments page.

#### How Information Transfers to Replacement Staff

Transferred:
- Available Start, Available Finish, Remaining Allocation, Percent Allocation, Remaining ETC, Assigned Tasks (if configured), Project Role

Not transferred:
- Completed Assignments, Existing Actuals, Pending Actuals, Pending Estimates, Baselines

### Replace Team Staff Members

Methods include:
- **Replace Resources on Tasks with Unassigned Team Staff Members**: Available when Assignment Pool is set to Resource Pool.
- **Replace Resources on Tasks with Assigned Team Staff Members**: Allows consolidation of members assigned to the same task.
- **Replace Roles on Tasks with Assigned Team Staff Member**: Allocation from the role is added to the existing allocation for the resource.
- **Replace Resources Using Availability Score**: An availability score indicates the nearest availability match between replaced and replacing resources.

---

## Manage Resource Assignments

### Modify the Resource Assignment Properties

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the **Tasks** menu and click **Assignments**.
3. Click the **Properties** icon for the resource.
4. Complete:
- **Loading Pattern**, **Actuals**, **Actuals Thru**
- **Status**: Completed, Not Started, Started. Default: Not Started
- **Start**: Default: Task start date
- **Finish**: Default: Task completion date
- **ETC**: Displays the estimate of remaining hours.
5. Save.

### Remove Resource Assignments from Tasks

1. Open the project and click **Tasks**.
2. Open the **Tasks** menu and click **Assignments**.
3. Select the resource and click **Remove**.
4. Click **Yes** to confirm.

### Replace Resources Assigned to Tasks

1. Open the project.
2. Open the **Tasks** menu and click **Assignments**.
3. Select the resource and click **Replace**.
4. Select the replacement resource or role and click **Replace**.

---

## Enter Time-Varying ETC Segments

You can configure ETC for assignments at the task level. You can also assign a resource to a task, start and stop work, and then resume work again.

### Enter Time-Varying ETC Segments for Task Assignments

****Follow these steps:****

1. Open a project and click **Tasks**.
2. In the Tasks menu, click **Assignments**.
3. Click the **Properties** icon next to the task.
4. In the **Assignments** section, complete fields for each resource:
- **Role**, **Start**, **Finish**, **ETC**, **Loading Pattern** (Select **Fixed** for manual distribution).
5. In the **Usage** column, enter the work effort for each segment.
6. Save the changes.

### Enter Time-Varying ETC Segments for Resource Assignments

The **ETC Detail** section displays time segments with start and finish dates and the ETC for each block of work.

****Follow these steps:****

1. Open a project and click **Tasks**.
2. Click **Assignments**.
3. Click the **Properties** icon next to the task, then the resource.
4. Set **Loading Pattern** to **Fixed**.
5. In the **ETC Detail** section, complete Start, Finish, and Value for each segment.
6. Save the changes.

### Update Total ETC from Time-Varying ETC

If you enter values into both the ETC field and the time-varying fields, the time-varying information is saved first. Then, the ETC field is updated with the sum.

### Evenly Distribute ETC Over Segments

Enter a total ETC for a resource assignment, and the ETC is evenly distributed over all time segments.

### ETC Distribution and Autoschedule

At the task assignment level, Autoschedule uses the resource loading pattern to distribute ETC. If set to **Fixed**, time segments are preserved during autoscheduling. If set to **Front**, **Back**, **Contoured**, or **Uniform**, Autoschedule does the load balancing.

### Run Autoschedule After Adjusting ETC

1. Adjust resource assignment ETC.
2. Define the autoschedule parameters and autoschedule the project.
3. Publish the tentative schedule or return to the plan of record (POR).

---

## Manage Project Participants

Participants are additional users beyond the core project team staff. These participants, such as stakeholders and senior management, require access to projects.

### Configure Project Staffing Settings for Team Participants

1. In Classic PPM, click **Administration**, **Project Management**, **Settings**.
2. Configure the **Require Resource - Hard Book right to add participants** setting.
3. Configure the **Hide System Groups option when adding participants** setting.

### Add Participants

****Follow these steps:****

1. Open a project and click **Team**.
2. Click the **Team** tab menu and click **Participants**.
3. In the **Show** field, select **Resources**, and use **Add by Resource ID** or click **Add** to select users.

### Add Participants in System Groups

1. Open a project and click **Team**.
2. Click **Participants**.
3. In the **Show** field, select **System Groups**.
4. Click **Add**, select the system group, and click **Add**.

### Create Participant Groups

1. Open a project and click **Team**.
2. In the **Team** menu, click **Participant Groups**.
3. Click **Add**.
4. Enter a group name and description.
5. Select participants and click **Add**.
6. Click **Submit**.

---

## Manage Time Recording for Team Members

As a resource manager, you can manage the time recording of employee resources who report to you. Resources use weekly timesheets to track their time and activities.

### Update Timesheet Permissions

#### Disable Time Entry for a Resource

1. Click **Home**, **Resource Management**, **Resources**.
2. Click the resource name.
3. Click **Properties**, **Settings**.
4. Clear the **Open for Time Entry** check box.
5. Click **Save**.

#### Disable Time Entry for a Project

1. Click **Home**, **Portfolio Management**, **Projects**.
2. Click the project name.
3. Click **Properties**, **Settings**.
4. Clear the **Open for Time Entry** check box.
5. Click **Save**.

#### Disable Time Entry for a Project Team

1. Open the project, click the **Team** tab.
2. For each resource, click the **Open for Time** cell and select **No**.
3. Click **Save**.

#### Disable Time Entry for a Task

1. Open the project, click **Tasks**.
2. Click the task name, then **Properties**, **Settings**.
3. Clear the **Open for Time Entry** check box.
4. Click **Save**.

### Notify Resources About Overdue Timesheets

1. Open the timesheet for the resource.
2. Click **Notify**. An overdue timesheet notification is sent.

### Process Submitted Timesheets

> [!NOTE]
> Project managers only receive timesheet submission notifications if the timesheet contains items to which they are associated. Notifications are sent to users who have Resource Timesheet - Approval access rights at the instance-level.

****Follow these steps:****

1. Open **Home**, and from **Personal**, click **Timesheets**.
2. Filter for submitted timesheets.
3. Open the timesheet.
4. (Optional) Click the **Timesheet Notes** icon.
5. Do one of the following:
- **Approve**: The timesheet is approved and time is added to actuals.
- **Return Timesheet**: The timesheet is returned for corrections.

### Restore Timesheet Defaults

1. Click **Administration**, **Project Management**, **Timesheet Options**.
2. Click **Restore Defaults**.
3. Click **Yes** to confirm.
4. Save the changes.

---

## Project Schedules in the Gantt View

As a project manager, you can create and manage all project tasks in the Gantt view. Use the Gantt chart to edit tasks and dependencies in a timeline.

### Working in the Gantt View

The Gantt view is divided into a Work Breakdown Structure (WBS) on the left and a Gantt chart on the right.
- The green progress bar above the task Gantt bar indicates how much work is complete.
- By default, no object actions display for the Gantt view.
- Changes are stored as pending edits until you explicitly save or discard.

> [!TIP]
> Maximize your work area by promoting the detail panel to the workspace, or by maximizing the page.

### The Gantt View Toolbar

| Icon | Action |
|------|--------|
| Save | Saves your changes (explicit save required) |
| Discard | Discards unsaved changes |
| Create New Task | Inserts a new task in the WBS |
| Copy Task from Template | Copies a task from a project template |
| Add Existing Subproject | Adds an existing subproject to the WBS |
| Create New Subproject | Creates a subproject and adds it to the WBS |
| Create Subproject from Template | Creates a subproject from a template |
| Assign Resource | Assigns a resource to the selected task |
| Outdent | Outdents the selected task |
| Indent | Indents the selected task |
| Move | Moves the selected task |
| Link | Creates a task dependency between selected tasks |
| Unlink | Removes task dependencies between selected tasks |
| Expand All | Expands all tasks in the WBS |
| Collapse All | Collapses all tasks in the WBS |
| Lock/Unlock | Indicates lock status; administrators can unlock |
| Autoschedule with Options | Auto-schedules with options |
| Autoschedule and Publish | Auto-schedules and publishes |
| Publish Tentative Schedule | Publishes the tentative schedule |
| Delete Tentative Schedule | Deletes the tentative schedule |
| Create Baseline | Creates a project baseline |
| Update Task Baseline | Updates the task baseline for selected task |
| Update Cost Totals | Updates cost totals |
| Delete Task | Deletes a task or removes a subproject |
| Legend | Displays the Gantt chart legend |
| Timescale | Defines the timescale for the Gantt chart |
| Collapse Gantt | Collapses the view to show only the WBS |

### Pending Edits in the Gantt View

Pending edits include: task creation, attribute edits, resource assignments, drag-and-drop operations, indent/outdent, moving tasks, baseline creation, autoscheduling, opening in external schedulers, and dependency changes.

### Locking Projects When Editing in the Gantt View

When you start making edits, the project is automatically locked. Only the current project is locked (subprojects are not). All project pages are locked for all users. The current user with the lock can edit in the Gantt view. As soon as edits are saved, the project is unlocked.

Administrators with the **Administration - Application Setup** right can unlock the project.

### Using the Gantt View in a Separate Window

You can open the Gantt view in a separate window:
- Click the Gantt icon from the projects list or My Projects portlet.
- Open a project, then open **Tasks** > **Gantt**.

Rules:
- You can open multiple Gantt windows for different projects simultaneously.
- You can open only one Gantt window per project.
- A Gantt window is not refreshed automatically.

### Gantt Chart Legend

| Indicator | Description |
|-----------|-------------|
| Progress Through Bar | Completed task with no remaining work |
| Late Task | Late task indicator |
| Summary Task | Summary task indicator |
| External Task (Gantt) | External task in the Gantt chart |
| Subproject (Gantt) | Subproject in the Gantt chart |
| External Task (WBS) | External task in the WBS |
| Subproject (WBS) | Subproject in the WBS |
| Milestone | Milestone indicator |
| External Milestone | External milestone indicator |
| Critical Path | Critical path indicator |
| Link to hidden task | Link to hidden task indicator |

### Change Gantt Chart Timescale

1. Open the project.
2. Open **Tasks** > **Gantt**.
3. Click the **Time Scale** icon and select the desired timescale.

### Printable Gantt View

You can print a Gantt view. The Printable View icon displays a read-only view (maximum 300 tasks). Before printing, select background colors and images in your browser settings.

### Task Cost Metrics

You can display cost metrics in the Gantt view without creating a current baseline:
- **ACWP**: `ACWP = Sum of Actual Cost for all the assignments on the task`
- **ETC (Cost)**: `ETC (Cost) = remaining labor cost + remaining non-labor cost`
- **EAC (T)**: `EAC (T) = ACWP + ETC`

---

## Project Tasks in the Work Breakdown Structure (WBS)

Tasks identify the work required to complete a project. The Work Breakdown Structure (WBS) is a hierarchical list of tasks showing relationships between the tasks.
- All tasks you create are added at the same level.
- You can group detail tasks under summary tasks.
- You can create unlimited hierarchical levels.

### Effort Task

When the **Allow Effort Task Creation** setting is selected, the product automatically creates an effort task when:
- You staff a project before creating any tasks.
- You staff a team for an idea and convert the idea to a project.
- All project tasks are flagged as key tasks.

### Summary Task

A summary task has one or more subtasks nested beneath it. Summary task dates are determined by detail task dates. Total Effort and cost for a summary task are calculated based on detail task information.

### Organize, Move, Expand and Collapse the WBS

Use the Gantt View Toolbar icons to organize tasks. Use Plus (+) or Minus (-) icons to expand and collapse summary tasks.

---

## Edit Project Tasks

### Edit Tasks in the Work Breakdown Structure

You can edit tasks directly in the WBS in the Gantt view. You can delete tasks and milestones from the WBS.

> [!NOTE]
> If a task has a resource assignment with posted actuals, you cannot delete the task. Instead, it is placed in a deleted tasks phase with ETC set to zero and status set to "Complete."

**Fields:**
- **Task**: Limit: 150 characters
- **Start**, **Finish**
- **% Complete**: Values: 0 (not started), 1-99 (in progress), 100 (complete)
- **Assigned Resources**

### Edit Tasks in the Gantt Chart

Drag the beginning, middle, or end of a taskbar to change dates. If a task has actuals, you cannot change the start date.

### Edit Task Properties

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Click the task name.
3. Edit the fields:
- **Start**, **Finish**, **Status**, **% Complete**
- **Guidelines**: File path for organizational guidelines. Example: `\\Clarity\Guidelines\Project\Plan.doc`
- **Charge Code**: Task-level charge codes supersede project-level codes.
- Date constraints: **Must Start On**, **Must Finish On**, **Start No Earlier Than**, **Start No Later Than**, **Finish No Earlier Than**, **Finish No Later Than**
- **Exclude from Autoscheduling**: Default: Cleared
4. Save the changes.

### Edit Task Duration in the Gantt Chart

The task duration represents the number of working days between Start and Finish dates.

| Field Edited | Result |
|-------------|--------|
| Task Duration | Task Finish Date and Gantt bar change |
| Task Finish Date | Task Duration changes |
| Task Start Date | Task Finish Date changes without impacting duration |

You cannot edit duration for Milestone or Summary tasks, or when a timesheet is already submitted.

### Set the Default Earned Value Options for Tasks

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Click the task name.
3. In the **Earned Value** section:
- **EV Calculation Method**: Values: Percent Complete, 0/100, 50/50, Level of Effort, Weighted Milestones, Milestone Percent Complete (PC), Apportioned Effort (AE). Default: Percent Complete
- **BCWP Override**: Overrides the system-calculated BCWP.
- **BCWP**: System-calculated value.
- **Earned Value Last Updated**: Date of last update.
4. Save the changes.

### Set Time Tracking at the Task Level

You can switch a task as open or closed to time tracking. Closing a task is useful when:
- The project is multi-phased and you do not want resources tracking time to future work.
- You complete a task and need to prevent further time tracked to it.

---

## Manage Project Task Dependencies and Relationships

Task dependencies allow you to designate successor or predecessor tasks.

| Relationship Type | Description |
|-------------------|-------------|
| **Finish-Start** | Predecessor must finish before successor can start (most common) |
| **Start-Start** | Predecessor must start before successor can start |
| **Start-Finish** | Predecessor must start before successor can finish |
| **Finish-Finish** | Predecessor must finish before successor can finish |

### Create Task Dependencies

****Follow these steps:****

1. Open the project.
2. Open **Tasks** > **Gantt**.
3. Either:
- In the WBS, select two tasks and click the **Link** icon.
- In the Gantt chart, drag-and-drop between taskbars:
- Right edge to left edge = Finish-Start
- Left edge to right edge = Start-Finish
- Left edge to left edge = Start-Start
- Right edge to right edge = Finish-Finish

### Edit Task Dependencies

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Click the task name.
3. Open **Properties** > **Dependencies**.
4. Click the dependent task link.
5. Edit:
- **Relationship**: Predecessor or Successor
- **Type**: Finish-Start, Start-Start, Start-Finish, Finish-Finish
- **Lag**: Default: 0.00
- **Lag Type**: Daily or Percent
6. Save the changes.

### Dependency Chains

A dependency chain is a relationship between multiple tasks or milestones. The type of dependency created is finish-start with zero lag.

### Create External Task Dependencies

You can create dependencies between tasks in different projects.

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Click the task name.
3. Open **Properties** > **Dependencies**.
4. Click **New**.
5. Select the task for the external dependency and click **Next**.
6. Complete the fields (same as regular dependencies plus Dependent Investment and Dependent Task).
7. Save the changes.

### Externally Dependent Tasks

The Gantt view displays externally dependent tasks. The dependent task is displayed before or after the task based on whether it is a predecessor or successor.

---

## Resource Utilization and Total Effort

Total Effort formula: `Total Effort = Actuals + Remaining ETC`

> [!WARNING]
> Assign staff to tasks before viewing resource utilization.

### Resource Utilization Color Coding
- **Blue**: Total amount of time staff resources are allocated to each task.
- **Yellow**: Resource is allocated at or under availability.
- **Red**: Resource is over-allocated.
- **Green**: Actuals recorded by the resource.

### Edit Resource Utilization

1. Open a project.
2. Click **Tasks** > **Resource Utilization**.
3. Edit **Start** and **Finish** dates.
4. Save the changes.

---

## Task Estimate to Complete (ETC)

### Set Up Tasks for Top-Down Estimating

#### Zero Out Existing Estimates

1. Open the project and click **Tasks**.
2. Open the task and click **Estimating**.
3. Verify the **ETC** field is set to zero (0.00).
4. Click **Apply**.

#### Enter Distribution Percentages

1. Open the project and click **Tasks**.
2. Open the task and click **Estimating**.
3. Complete the **Top-down %** field.
4. Save the changes.

### Apply Top-Down Estimates Using Estimating Rules

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the task and click **Estimating**.
3. Enter the ETC amount to distribute down to detail tasks.
4. Click **Preview**.
5. Click **Apply**.

### Task Estimating Rules

Create and apply estimating rules to calculate ETC automatically. You can create multiple task estimating rules for the same task, but only one can serve as the default rule.

### Create a Task Estimating Rule

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the task and click **Estimating**.
3. In the **Task Estimating Rules** section, click **New**.
4. Complete the fields:
- **Operator**: Values: addition, subtraction, multiplication, division, exponential, or modulus
- **Value**: Values: Estimate for Another Task, Constant, Project Attribute. Default: Estimate for Another Task
5. Click **Add**.
6. Click **Finish**.

### Create Execution Conditions

Create execution conditions for estimating rules that are not the default rule.

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the task and click **Estimating**.
3. Click **[Define execution conditions]** next to an existing rule.
4. Complete the **Object** field (Project or Task).
5. Complete **Operator** (= or !=) and **Right** (Constant or Object).
6. Click **Add**.
7. Click **Evaluate**.
8. Click **Save and Return**.

> [!NOTE]
> Enter or paste a formula directly into the Estimated Rule field to bypass the Operator and Value fields. Then, click **Evaluate**.

### Compare Generated ETC with Current ETC

1. Open the project and click **Tasks**.
2. Open the task and click **Estimating**.
3. Select the rule and click **Run**.
4. View **Current ETC** and **ETC from Rules**.

### Apply ETC from Task Estimating Rules

You can run an estimating rule at the phase, task, or project level.

1. Open the project and click **Tasks**.
2. Open the task and click **Estimating**.
3. Select the rule and click **Run**.
4. Select the tasks and click **Apply ETC from Rules**.

### Edit Task Estimating Rules or Conditions

1. Open a project and click **Tasks**.
2. Open a task and click **Estimating**.
3. Edit the fields: **Operator**, **Value**.
4. Click **Add**.
5. Click **Finish and Save**.
6. To edit an execution condition, click its name.

---

## Automatically Create Project Schedules with Autoschedule

Autoschedule is an automated way to create project schedules. It uses task duration, task date constraints, priority order, dependency information, and related date and resource logic to identify the project critical path.

Each task is scheduled:
- To use availability as early in the project as possible
- To start at the earliest or latest possible time, subject to date constraints
- To minimize the duration of the critical path

> [!NOTE]
> To autoschedule in the Gantt view, verify that you have the **Project - Schedule In Browser** access right.

> [!NOTE]
> Autoschedule prioritizes constrained tasks over non-constrained tasks. However, autoscheduling overrides this rule if it violates a dependency or over-allocates a resource.

### Autoschedule and Publish

1. Open the project and click **Tasks**.
2. Open the **Tasks** menu and click **Gantt**.
3. Click the down arrow for **Autoschedule With Options**, and click **Autoschedule with Publish**.
4. Create a tentative schedule.
5. Publish or delete the tentative schedule.

### Schedule Subnets

You can calculate separate critical paths for subnets.

****Follow these steps:****

1. Open the project and click **Tasks** > **Gantt**.
2. Click the down arrow for **Autoschedule With Options**.
3. Select the **Subnets** check box.
4. Click **Autoschedule**.

### Lock Tasks

Lock tasks to prevent date changes during autoscheduling.

1. Open an unlocked project and click **Tasks**.
2. Click **Open in Scheduler, Clarity Gantt**.
3. In the Gantt View, click **Options** and add the **Locked** field.
4. Set the **Locked** value to **Yes** for each task.
5. Click **Autoschedule With Options** > **Create Tentative Schedule** > **Publish Tentative Schedule**.

### Tentative Schedules

Autoschedule creates a tentative schedule that you can own and edit. The project is locked and in tentative-schedule mode. The WBS displays the tentative schedule with redlining of POR information.

### Create a Tentative Schedule

****Follow these steps:****

1. Open the project and click **Tasks** > **Gantt**.
2. Click **Autoschedule With Options**.
3. Complete the fields:
- **Project Start**, **Project Finish**
- **Autoschedule Date**: Default: Current Date
- **Ignore Tasks Starting Before** / **After**: Exclude tasks outside a date range
- **Resource Constraints**: Consider resource availability. Default: Selected
- **Schedule from Finish Date**: Backwards schedule from a deadline. Default: Cleared
- **Subnets**: Calculate critical path for each subnet. Default: Cleared
- **Honor Constraints on Started Tasks**: Default: Selected
- **Schedule Assignments on Excluded Tasks**: Default: Cleared
- **Start Successors on Next Day**: Default: Cleared
- **Publish After Scheduling**: Default: Cleared
4. Click **Autoschedule**.

### Publish a Tentative Schedule

1. Open the project and click **Tasks** > **Gantt**.
2. Click **Autoschedule With Options** > **Publish Tentative Schedule**.
3. Click **Yes** to confirm.

### Unlock Projects in Tentative Schedule Mode

Only the user who locked the project, or a resource with the Administration - Access right, can unlock.

1. Open the project and click **Tasks** > **Gantt**.
2. Click the **Lock** icon.
3. Click **Yes** to confirm.

---

## Manage Project Hierarchies

Use your project investment hierarchy to manage the investments and services that comprise your project.

### Project Investment Hierarchy

Add child investments, services, or ideas to your parent project. The costs associated with child investments are rolled up to the parent project as planned costs.

### View the Project Financial Rollup

The financial rollup aggregates costs (planned, actual, remaining) for child investments, services, or ideas.

****Follow these steps:****

1. Open the project.
2. Click **Hierarchy**.
3. View the following financial values:
- **Planned Cost**: Forecasted and budgeted
- **Actual Cost**: Costs incurred from chargebacks and invoices
- **Remaining Cost**: Planned costs minus actual costs
- **Planned Benefit**: Planned revenue
- **Planned NPV, Planned ROI, Planned IRR, Planned MIRR, Planned Payback Period**

> [!NOTE]
> Financial metric values are calculated at run-time based on total costs and benefits over time for child investments.

#### Example: Financial Rollup in a Multi-Level Program Hierarchy

| Hierarchy Level | Child Project | Planned Cost Before Conversion | Planned Cost After Conversion (USD) | Rolled Up Cost (USD) |
|-----------------|---------------|-------------------------------|--------------------------------------|----------------------|
| 1 | Projchild6 | 10,000 AED | 10,000 * 0.50 = 5,000 | 5,000 |
| 2 | Projchild5 | 4,000 EUR | 4,000 / 0.50 = 8,000 | 13,000 |
| 3 | ProjChild4 | 4,000 AED | 4,000 * 0.50 = 2,000 | 15,000 |
| 4 | ProjChild3 | 8,000 GBP | 8,000 / 0.50 = 16,000 | 31,000 |
| 5 | ProjChild1 | 10,000 ADP | 10,000 / 0.50 = 20,000 | 51,000 (program level) |

### Add and Remove Child Investments and Services

> [!NOTE]
> By default, the financial and effort rollup displays both approved and unapproved child investments. Use the Filter to select the status.

****Follow these steps:****

1. Open a project.
2. Click the **Hierarchy** tab.
3. To add: Click **Add Child**, select investments or services, and click **Add**.
4. To remove: Select the child and click **Remove**, then click **Yes**.

### Add an Investment from Another Entity

1. Click **Properties** > **Subprojects**.
2. Click **Add**.
3. Apply filter criteria and select investments.
4. Click **Add**.
5. Click the **Hierarchy** tab to view.

### Define Child Investment and Service Allocations

By default, child investment allocation is set at 100 percent.

1. Open a project.
2. Click the **Hierarchy** tab.
3. In the **Allocation** column, click the amount.
4. Enter the allocation amount.

> [!NOTE]
> The total allocation percentage for a parent investment must equal 100 percent.

5. Click **Save**.

### View a Project's Total Cost of Ownership (TCO)

The TCO is the aggregated amount of running or operating a project, including all investments, services, and ideas that support it.

### View a Project's Effort Rollup

1. Open the project.
2. Click the **Hierarchy** tab, then click **Hierarchy, Effort Rollup**.
3. View ETC, EAC, and Actual Work columns.

### Add and Remove Project Parent Investment Associations

1. Open the project.
2. Click the **Hierarchy** tab.
3. On the **Hierarchy** menu, click the **Parents** subtab.
4. Click **Add** to add parent investments, or select and click **Remove** to remove them.

### Share Projects Across Investments or Services

You can share projects between other investments, services, and ideas. The project's investment allocation percentage determines the amount allocated. All cost information is based on the allocation percentages.

## Task Estimating Rules (Continued)

### Execution Conditions

The field that appears or becomes available next depends upon the type of object selected.
- If **Project** is selected as the object, then select the **Field** or **Operation** field and select a value.
- If **Task** is the object, then select the field and select a value.

5. Complete the following field, and click **Add**:
- **Operator** - Displays the operator to use in the formula. Values: `=` or `!=`
- **Right** - Defines the Constant or an Object.
6. Click **Add** to add the expression to the Expression field.
7. Click **Evaluate** to evaluate the expression.
8. Click **Save and Return**.

If successful, the new rule displays in the Task Estimating Rules section. If the expression does not evaluate successfully, an error message displays in the field.

> [!NOTE]
> Enter or paste a formula directly into the Estimated Rule field to bypass the Operator and Value fields. Then, click **Evaluate** to evaluate the expression.

9. Save the changes.

### Compare Generated ETC with Current ETC

You can compare the ETC generated by the task estimating rule with the current ETC (the one in place before running the rules).

****Follow these steps:****

1. Open the project and click **Tasks**. The list page appears.
2. Open the task and click **Estimating**. The task estimating properties page appears.
3. Select the rule and click **Run**. The run estimating rules page appears.
4. View the following fields:
- **Current ETC** - Displays the total Estimate To Complete (ETC) for the task. The value for this field is derived from the ETC field on the task estimating properties page.
- **ETC from Rules** - Displays the total Estimate To Complete (ETC) for the task generated from the applied task estimating rule.

### Apply ETC from Task Estimating Rules

You can run an estimating rule at the phase, task, or project level, which applies ETC values to the task based on the rules. Use the following procedure to apply task estimating rules to the phase or summary task and to its detail tasks. To run a task estimating rule for a phase or summary task, select the required task to apply the rule to all its detail tasks. Or, select one or more of the detail tasks to apply the rule individually.

The order in which tasks are listed on the task estimating page is important. If none of the task estimating rules meets its execution conditions, the default rule is run. If only a default rule exists, then that rule is run. The process of applying ETC is executed automatically after verifying all the rules in the list in the order in which they are listed.

You can either run the task estimating rule on all listed tasks or select which tasks to run the rule. In the absence of a rule to run, all the rules are evaluated in the order in which they appear. Also, the first rule that meets the execution conditions is run.
- Create and apply estimating rules to distribute ETC values in a specific way. For example, you can create an estimating rule for a specific group of tasks that considers the planned cost of the tasks in the estimate.
- Create the estimating rules at the task level, and you can only run them for the tasks for which you created them.
- Though you can apply estimating rules at the project level, you cannot create them at the project level.

The names of the phases or groupings for which the rule is run are highlighted in a different color. Use the **ETC From Rules** column to compare the ETC previously generated for the phase with the ETC generated from the applied rules.

****Follow these steps:****

1. Open the project and click **Tasks**. The list page appears.
2. Open the task and click **Estimating**. The task estimating properties page appears.
3. Select the check box next to the rule and click **Run**. The run estimating rules page appears.
4. Select the check box next to the task to apply ETC, and click **Apply ETC from Rules**.

### Edit Task Estimating Rules or Conditions

Task estimating rules appear in the list on the task estimating properties page.

****Follow these steps:****

1. Open a project and click **Tasks**.
2. Open a task and click **Estimating**. The estimating rule page appears.
3. Edit the following fields:
- **Operator** - Displays the operator for the formula. Values: addition, subtraction, multiplication, division, exponential, or modulus
- **Value** - Defines the value for the estimating rule. Values:
- **Estimate for Another Task** - Select the field to use the estimates from another task on this project.
- **Constant** - Select the field and enter a number (integer or decimal) that serves as a fixed value for the estimating rule.
- **Project Attribute** - Select the field from the list of numeric project attributes. You can use any numeric attribute in the estimating rule.
- Default: Estimate for Another Task
4. Click **Add**. The expression is evaluated and, if successful, the new rule appears in the Estimated Rule field. If unsuccessful, an error message displays in the field.
5. Click **Finish and Save**.
6. To edit an execution condition, click its name.
   a. To define a condition for the default rule, click the **Define execution conditions** link.
   b. Edit the execution condition and save the changes.

---

## Automatically Create Project Schedules with Autoschedule

Autoschedule is an automated way to create project schedules. Autoscheduling helps model your plan and generate dates for your tasks and overall project. Autoschedule is designed to schedule project tasks while minimizing the delays and expansions that can cause deadline slippage, while eliminating or minimizing resource over-allocation.

Use Autoschedule to update the project schedule after you or others make small, quick changes to it. You can review your changes before publishing them as the plan or record (POR), and accordingly arrive at a practical result.

### Working with Autoschedule

Autoschedule uses task duration, task date constraints, priority order, dependency information, and related date and resource logic to identify the project critical path and schedules tasks. Each task is scheduled:
- To use availability as early in the project as possible
- To start at the earliest or latest possible time, subject to date constraints
- To minimize the duration of the critical path

> [!NOTE]
> To autoschedule in the Gantt view, verify that you have the **Project - Schedule In Browser** access right.

The critical path determines the earliest finish date of the project. Autoschedule uses the critical path information to make the following scheduling adjustments:
- Determines early and late start and finish dates for each task.
- Moves the early start forward or back, as applicable.
- Checks for load patterns that are set to fixed, and adjusts early start and finish dates to fit.
- Builds new ETC curves that are based on the recalculated early start and finish dates for the tasks, and subtracts as applicable from remaining resource availability.
- To eliminate or minimize resource over-allocation, calculations can move out a task finish date, or the project finish date.

Task date constraints are rules that help determine the project work sequence. For example, the task must start on, start or finish no later than a specific date. Set the date constraints on the task properties page.

> [!NOTE]
> Autoschedule prioritizes constrained tasks over non-constrained tasks. However, autoscheduling overrides this rule if it violates a dependency or over allocates a resource. For example, task 1 has a dependency on task 2 to finish before it can start. Task 1 also has a constraint that requires it to finish one day before task 2 finishes. In this case, the autoscheduler ignores the task constraint because it violates the dependency on task 2.

### Autoschedule and Publish

You can publish the tentative schedule using the default options. When you autoschedule and publish, the new schedule replaces the plan of record (POR) and the project is unlocked.

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the Tasks menu and click **Gantt**. The Gantt view appears.
3. Click the down arrow for the **Autoschedule With Options** icon in the Gantt view, and click **Autoschedule with Publish**.
4. Create a tentative schedule. When autoscheduling completes, the tentative schedule is created and the project is locked.
5. You can publish the tentative schedule or decide to delete it.

### Schedule Subnets

You can set up your project to calculate separate critical paths. Subnets are a set of project tasks that have dependencies among themselves, or a single task with no dependencies. During autoschedule, you can calculate and display separate critical paths for each subnet and for each task that does not have dependencies. Otherwise, only one critical path, the longest path, is calculated for the project.

Scheduling subnets has these key benefits:
- If you are working with a master project that contains multiple projects, you can calculate and display the critical path of each subproject, not only the longest critical path.
- If you are working with a project where you have structured the work breakdown structure to support multiple concurrent critical paths, you can display all critical paths.
- If you have a project that contains management tasks that span the project life, you can display the management tasks and the true critical path.

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the Tasks menu and click **Gantt**. The Gantt view appears.
3. Click the down arrow for the **Autoschedule With Options** icon in the Gantt view. The autoschedule page appears.
4. Select the **Subnets** check box:
- **Subnets** - Specifies to autoschedule to calculate the critical path for the entire project. When the field is selected, a separate critical path is calculated for each subnet. Default: Cleared
5. Click **Autoschedule**.

### Lock Tasks

You can lock one or more tasks to prevent task dates from changing when you are working with the autoschedule.

****Follow these steps:****

1. Open an unlocked project and click **Tasks**.
2. Click **Open in Scheduler**, **Clarity Gantt**.
3. In the Gantt View, click **Options**. Configure the page to add the **Locked** field to the list.
4. For each task, set the **Locked** value to **Yes**.
5. Make a note of the dates for these tasks.
6. Click **Autoschedule With Options**.
7. Click **Create Tentative Schedule**.
8. Click **Publish Tentative Schedule**. The dates for the tasks that are locked are not changed.

### Tentative Schedules

Autoschedule a project to create a tentative schedule that you can own and edit. The project is locked and is in tentative-schedule mode. Use a tentative schedule to see the effects of changes that you make to the project. For example, estimate to complete (ETC) changes, before publishing the schedule as the plan of record (POR). You can review the tentative schedule and can decide whether to accept them.

All locked project pages display the POR as read-only information. You can view and work with tentative schedules using the Gantt view, the task list page, and the task assignments page. You can change the tentative schedule by adjusting the scheduled tasks and assignment information, such as ETC.

The work breakdown structure (WBS) in the Gantt view displays the tentative schedule with redlining of POR information. Use the redlining to view the changes that you tentatively make to the schedule.

While the project is locked, the name of the resource that is holding the lock displays on the message bar. An **Unlock** button displays on this bar, which you can use to unlock the project. On the Gantt view, a lock icon displays on the toolbar, which you can use to unlock the project.

#### Tentative Schedules and Subprojects

Autoscheduling a master project creates a tentative schedule for the master project and publishable tentative schedules for all of its subprojects. If a subproject is locked when you autoschedule the master project, an unpublishable tentative schedule is created for the subproject. When you publish the tentative schedule for the master project, the plan of record (POR) for the subproject is replaced only if the tentative schedule is publishable.

During autoscheduling, a warning message appears with the names of the subprojects under the following circumstances:
- A subproject is locked through a process, by another user, or through scheduling in the Gantt or an external scheduler.
- A subproject is marked as Read Only on the Subprojects list page. This method of locking subprojects is also honored in the external schedulers such as OWB.
- The current user does not have appropriate edit rights to alter the subproject schedule.

The system generates the following alert:

> "The following subprojects are already locked, marked read-only, or you don't have rights to change them. If you create a tentative schedule now, changes to the tentative schedule for those subprojects will not be able to be published back to the plan of record. Do you still want to continue?"

#### Create a Tentative Schedule

You can specify scheduling criteria and can begin scheduling tasks using Autoschedule. You can autoschedule an entire project or only tasks that occur between ranges of dates. Use these steps to specify the deviations from the current schedule and automatically create a new tentative schedule. You can also create a tentative schedule by running the **Autoschedule Investment** job.

You can discard a tentative schedule and can delete projects that are tentative-scheduled. When you delete the tentative schedule, the project is unlocked and the plan of record (POR) information is displayed. To delete a tentative schedule, click the down arrow for the **Autoschedule With Options** icon on the Gantt view toolbar, and select **Delete Tentative Schedule**.

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the Tasks menu and click **Gantt**. The Gantt view appears.
3. Click the down arrow for the **Autoschedule With Options** icon in the Gantt view. The autoschedule page appears.
4. Complete the following fields:
- **Project** - Displays the name for the project. The value for the field is based on the Project Name field on the project properties page.
- **Project Start** - Displays the start date. The value for this field is based on the Start Date field on the project properties page.
- **Project Finish** - Displays the finish date. The value for this field is based on the Finish Date field on the general properties page.
- **Autoschedule Date** - Specifies the date to begin scheduling tasks. Default: Current Date
- If you have checked the box **Schedule from Finish Date** and you enter a date that you want the investment to "finish" in the **Autoschedule Date** field, then the new schedule will reflect this as the new finish date of the investment.
- If you enter the existing start date or a new start date, the Autoschedule algorithm will use the selected options in the modal to determine a new schedule. Ensure you do not select the Schedule from Finish Date option in this scenario.
- If the investment is already in progress, ensure you use the **Actuals Thru** attribute on the Assignments tab to understand how that date can impact some tasks in the new schedule when there are actuals posted. Then, enter the next working day that follows the last date shown for the **Actuals Thru** attribute.
- **Ignore Tasks Starting Before** - Specifies the date before which to exclude tasks. Example: You enter 7/3/15 as the Ignore Tasks Starting Before date, and you have a task that starts on 6/20/15. The task is excluded from the schedule.
- **Ignore Tasks Starting After** - Specifies the date after which to exclude all tasks. Example: You enter 7/3/15 as the Ignore Tasks Starting After date, and you have a task that starts on 8/14/15. The task is excluded from the schedule.
- **Resource Constraints** - Specifies if you want Autoschedule to consider resource availability when scheduling the project. Default: Selected

> [!NOTE]
> If you clear the check box, Autoschedule treats resources as if they have unlimited remaining availability. Each task is scheduled against the resource's total availability, taking into consideration the non-working days, but not against the remaining availability for the resource. Because it does not take other task assignments into consideration to compute remaining availability, this results in the shortest possible schedule, but it can cause overlapping scheduled tasks and over-commitment of resources.
- **Schedule from Finish Date** - Specifies if you want Autoschedule to perform a backwards schedule from a defined deadline date. Use this option if the last task must be complete by the project finish date. Default: Cleared. If you schedule from the finish date, enter the finish date into the **Autoschedule Date** field.
- **Subnets** - Specifies to autoschedule to calculate the critical path for the entire project. When the field is selected, a separate critical path is calculated for each subnet. Default: Cleared
- **Honor Constraints on Started Tasks** - Specifies if you want Autoschedule to consider resource availability when scheduling the investment. This option is selected by default. There are different factors that make a task "Constrained":
- A task can be constrained manually with the "Must" dates such as "Must Start No Later than" and similar options.
- Started Task dates are always honored. A Task can be constrained when Actuals have been posted and are considered excluded or ignored. Once Actuals have been posted, the Start date of the task is constrained. The Remaining ETC may or may not push out the "Finish" date depending on other factors such as the loading pattern of the assignment, availability, or manually constrained dates on the task.
- **Schedule Assignments on Excluded Tasks** - This indicates the assignments on an excluded task are scheduled. A task is excluded or ignored as a constrained task through the Autoschedule algorithm or based on the selected options in the Autoschedule modal, or if the task is marked "Locked." By picking this option, the assignments are scheduled within the dates of the excluded task. This field works with the **Exclude from Autoscheduling** field on the task properties page. Default: Cleared
- **Start Successors on Next Day** - Specifies to autoschedule to start successor tasks with zero lag the day after the predecessor task finishes. When cleared, successor tasks start the same day as the predecessor task finishes as long as the resource has availability that is left. Default: Cleared
- **Publish After Scheduling** - Specifies to publish the tentative schedule to the plan of record (POR) immediately. When selected, the tentative plan is created and immediately deleted, and the project gets unlocked. Default: Cleared
5. Click **Autoschedule**.

#### Publish a Tentative Schedule

Publishing the tentative schedule replaces the plan of record (POR) with your tentative schedule and unlocks the project.

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the Tasks menu and click **Gantt**. The Gantt view appears.
3. Click the down arrow for the **Autoschedule With Options** icon in the Gantt view, and click **Publish Tentative Schedule**.
4. Click **Yes** to confirm.

#### Unlock Projects in Tentative Schedule Mode

You can unlock projects that are in tentative-schedule mode. When you unlock the project, the tentative schedule is deleted. Only the user who locked the project, or a resource with the **Administration - Access** right, can unlock projects in tentative-schedule mode.

****Follow these steps:****

1. Open the project and click **Tasks**.
2. Open the Tasks menu and click **Gantt**. The Gantt view appears.
3. Click the **Lock** icon in the Gantt view.
4. Click **Yes** to confirm.

---

## Manage Project Hierarchies

Use your project investment hierarchy to manage the investments and services that comprise your project. You can track the costs incurred to build, maintain, and support the project. The hierarchical list includes projects, assets, applications, products, services, and other work. You can also see the project effort rollup from its child investments.

Both the financial rollup and the effort rollup are hierarchical representations of the investments, services, and ideas that comprise your project. In the hierarchy, the **Self** line displays, depending on the view you have selected, the work values or costs that are specific to your project or the parent investment. The line items below the Self line are the child investment or services that comprise your project and the work values or costs specific to those child investment and services.

### Project Investment Hierarchy

Add child investments, services, or ideas to your parent project to build your project investment hierarchy. The child investments, services, and ideas that you can add to your project hierarchy are limited by the following conditions:
- You have view access rights to the child investments, services, and ideas.
- The child investments, services, and ideas are associated to the same entity as the parent project.

The costs that are associated with the child investments (forecasted and budgeted) are rolled up to the parent project as planned costs. The planned costs appear on the financial rollup page of the project hierarchy. Similarly, the effort values associated with the child investments or services are rolled up to the parent project. The effort values appear on the effort rollup page of the project hierarchy.

You can also create a program that includes multiple projects in its hierarchy. The financial and effort values from the child projects are rolled up to the parent program.

### View the Project Financial Rollup

The financial rollup for a project hierarchy aggregates the costs (planned, actual, and remaining) for its child investments, services, or ideas. The displayed values are time-varying and factor in the allocation percentages that you define for your investments. The project hierarchy can include child investments, services, or ideas that are associated with multiple currencies. To provide the financial rollup from multiple currencies, the product completes the following tasks:

1. Converts the different currencies to the parent project currency using the foreign exchange rates defined under Finance Setup in the Administration tool.
2. Aggregates the converted values from the child investments and rolls up to the parent project.

For example, a parent project currency is US dollars. The project includes two child investments in its hierarchy that have Euro as their currency. To provide a financial rollup for this project, the product first converts the Euro values from the child investments to US Dollars. The product then aggregates the converted currency values from the child investments and reflects them at the parent project level in US Dollars.

****Follow these steps:****

1. Open the project for which you want to view the financial rollup.
2. Click **Hierarchy**.
3. View the following financial values that rolled up from the child investments:
- **Planned Cost** - Displays the planned costs (forecasted and budgeted).
- **Actual Cost** - Displays the costs that are incurred from chargebacks and invoices. If the project is unapproved, actual costs do not display on the financial rollup because costs are yet to incur.
- **Remaining Cost** - Displays the difference between the planned costs and the actual costs.
- **Planned Benefit** - Displays the planned revenue or the sum of the planned benefit and forecasted benefit.
- **Planned NPV, Planned ROI, Planned IRR, Planned MIRR, Planned Payback Period** - Displays the planned values for the metrics from the project financial summary.

> [!NOTE]
> The financial metric values are calculated at run-time based on the total costs and benefits over time for the child investments. The values are then rolled up to the parent investment. The calculation accounts for the timing for when the costs and benefits occur and their relative size. If the timing for a child investment extends beyond the timing for the parent investment, the calculation accounts for the extended time-frame. The calculation does not account for any interests, taxes, depreciation and amortization. To forecast the profitability of an investment accurately, consider adding these values to the investment cost and benefit plans.

#### Example: Financial Rollup in a Program Hierarchy with Multiple Levels

When aggregating values from the child projects to the parent project in a hierarchy, the product considers the child currencies and the foreign exchange rates. The same rule applies to projects rolled up to a program hierarchy or a portfolio. You can plan child project costs in their local currencies. However, the rolled up cost to the parent project considers the parent project currency.

**Prerequisites:**
- System is set up as a multi-currency environment
- Foreign exchange rates are defined for all supported currencies
- Projects and programs are defined with financial summaries
- Hierarchical structure is setup with child projects at desired levels

The following table shows how the system uses the foreign exchange rates to convert the child costs into the parent currency:

| Hierarchy Level | Child Project | Planned Cost Before Conversion | Planned Cost After Conversion (USD) | Rolled Up Cost at Each Level (USD) |
|---|---|---|---|---|
| 1 | Projchild6 | 10,000 AED | 10,000 * 0.50 = 5,000 | 5,000 |
| 2 | Projchild5 | 4,000 EUR | 4,000 / 0.50 = 8,000 | 13,000 |
| 3 | ProjChild4 | 4,000 AED | 4,000 * 0.50 = 2,000 | 15,000 |
| 4 | ProjChild3 | 8,000 GBP | 8,000 / 0.50 = 16,000 | 31,000 |
| 5 | ProjChild1 | 10,000 ADP | 10,000 / 0.50 = 20,000 | 51,000 (cost at the program level as there is no cost for the program itself) |

### Add and Remove Child Investments and Services from the Financial Rollup

Before you add investments, services, and ideas to a hierarchy, verify that you have already created them in the product. Work with your investment managers to determine and define the investment or service allocations for each of the child investments and services that you are adding to the hierarchy.

****Follow these steps:****

1. Open a project.
2. Click the **Hierarchy** tab.

> [!NOTE]
> By default, the financial and effort rollup displays a list of both approved and unapproved child investment and services. You can view only approved child investment and services, or unapproved. Open the Filter and select the status in the **Status** dropdown.

3. Do one of the following:

**Add a Child Investment and Service:**

   a. Click **Add Child**.
   b. Select one or more child investments or services to add to the project, and click **Add**. The child investment or service is added to the hierarchy.

**Remove a Child Investment and Service:**

   a. Select the check box next to the child investment or service to remove from the project, and click **Remove**.
   b. Click **Yes** to confirm the removal. The child investment or service is removed from the hierarchy.

### Add an Investment from Another Entity

When adding child investments to your project hierarchy not all investments are visible. The list of investments on the browse window for adding a child investment only shows investments in the same entity as the parent investment. The entity is determined by the department OBS. If the parent investment has no entity, the list includes all investments with no associated entity.

To add a project from another entity, use this procedure:

1. Click the **Properties** tab menu and select **Subprojects**.
2. Click **Add**.
3. Apply filter criteria to identify investments.
4. Select the check box for one or more investments and click **Add**.
5. Click the **Hierarchy** tab.
6. If your investments from different entities do not already appear as subprojects, you can click **Add Child** to add them.

### Define Child Investment and Service Allocations

When you first add a child investment or service to a project, its investment allocation is set at 100 percent by default. You can view the amount a child investment is allocated to a project from the allocation amount that is listed in the **Allocation** column on a project's financial and effort rollup.

****Follow these steps:****

1. Open a project.
2. Click the **Hierarchy** tab.

> [!NOTE]
> By default, the financial and effort rollup displays a list of both approved and unapproved child investment and services. You can view only approved child investment and services, or unapproved. Open the Filter and select the status in the **Status** dropdown.

3. In the **Allocation** column, click the amount for the child investment or service that you want to define. The Set Allocations page appears.
4. In the **Allocation** field for the project, enter the amount this child investment is allocated to the project, the parent investment.

> [!NOTE]
> You can allocate investments and services to one or more child investments or services. The total allocation percentage for a parent investment must equal 100 percent. You can view the project's parent investments allocation amounts on the Project: Hierarchy: Parents page.

5. Click **Save**.

### View a Project's Total Cost of Ownership (TCO)

The total cost of ownership (TCO) is the aggregated amount of running or operating a project, including the investments, services, and ideas that support the project. The TCO tracks where costs are being spent and how costs are being shared. You can manage costs proactively to keep on budget. Once you have added all child investments to the project, you can view the aggregated cost and labor totals from the hierarchical bill of investments to determine the project's TCO.

### View a Project's Effort Rollup

You can view the effort rollup of the investments, services, and ideas that comprise a project.

****Follow these steps:****

1. Open the project for which you want to view effort rollup.
2. Click the **Hierarchy** tab, and then click the **Hierarchy, Effort Rollup** subtab.

The aggregation of the project's child investment labor-related information displays, such as ETC, estimate at completion (EAC), and work variances, while considering the child investment or service's allocation percentages. View these totals in the **ETC**, **EAC**, and **Actual Work** columns.

The investments on this page are the same investments that are displayed on the Project: Hierarchy: Financial Rollup page. This page provides another view of your project's hierarchical list of child investments, services, and ideas.

3. View the list of investments.

### Add and Remove Project Parent Investment Associations

You can add and remove parent investment associations to and from a project that is based on your company's business rules.

****Follow these steps:****

1. Open the project for which you want to add or remove parent investments.
2. Click the **Hierarchy** tab.
3. Do one of the following:

**Add Parent Investments to a Project:**

You can add any investment to which you have access rights as a parent investment to a project. You can add one parent investment, or you can add multiple investments at one time. Before you add parent investments, services, and ideas to the hierarchy, verify that you have already added them.

   a. On the Hierarchy menu, click the **Parents** subtab. On this page, view a list of parent investments and services to which your project is allocated and to view the percentage that your project is allocated to each parent.
   b. Click **Add**.
   c. Select the check box next to the parent investment you want to add, then click **Add**. The parent investment is added to the project.

**Remove Parent Investments from a Project:**

   a. On the Hierarchy menu, click the **Parents** subtab.
   b. Select the check box next to the parent investment you want to remove, then click **Remove**.
   c. Click **Yes** to confirm the removal. The parent investment is removed from the project.

### Share Projects Across Investments or Services

You can share projects between other investments, services, and ideas. For example, you can share a database server that will support two software applications. To do this, first add the software applications as child investments to the database server's investment hierarchy. Then, edit the child investment or service's cost allocation percentage and time segments.

The project's investment allocation percentage determines the amount that the project is allocated to the investment, service, or idea. All cost information that is displayed in the investment hierarchy is based on the allocation percentages. Child investment cost totals are automatically aggregated to the parent investment based on the investment allocation percentages.

---

## Group Projects and Investments Under a Parent Program

Programs are a special type of top-level project. Programs act as the parent or umbrella for one or more child investments. Master projects serve as parent projects to child projects. Project managers use programs to view combined actuals and effort for all of the child projects. In this way, programs provide an important top-down summary view of organization goals and the plan to meet them.

### Difference Between Master Projects and Programs

A program shares much of the same functionality as projects. However, it is different from a project in a few significant ways. For example, you cannot create non-milestone tasks at the program level, and you cannot staff a program. While you cannot financially enable a program, you can create a financial plan for it and can view plan data in a graph format. In addition, you can view the combined actuals and other totals for all of the projects in a program.

The following table helps you compare programs, master projects, and subprojects:

| Attribute or Ability | Program | Master Project | Project |
|---|---|---|---|
| Display the Sum of Values from Subprojects | Yes | Yes | Not Applicable |
| Assign Staff Members | No | Yes | Yes |
| Add Participants | Yes | Yes | Yes |
| Apply a WBS | No | Yes | Yes |
| Create Tasks | Key Milestones Only | Yes | Yes |
| Financial Planning | Yes | Yes | Yes |
| Connect to a Scheduler | Read-only | Read/write | Read/Write |
| Create from Template | No | Yes | Yes |

**Notes on the comparison:**
- You can view the combined actuals and effort for all the team members that are associated with the projects included in a program. For master projects, you can view the effort rollup from all associated subprojects on the Hierarchy tab. The master project can have its own set of team members, actuals, and effort numbers.
- You cannot assign staff at the program level. The roles on the program team staff page are aggregated from the program subprojects and are read-only.
- Because you cannot staff or add non-milestone tasks to programs, they cannot include a work breakdown structure (WBS).
- You can add milestones to programs, but you cannot add tasks or task estimates.
- You can create budgets and forecasts for all three.
- Programs do not contain actuals. Programs can only be viewed in read-only mode in desktop schedulers such as CA Open Workbench or Microsoft Project.
- You cannot use programs as templates. You also cannot create programs from templates. However, you can create a project from a template and then convert that project into a program.

### Create a Program

As a project manager, you can create a program. Similar to projects, you can rate a predefined list of risks for programs, and can create and track risks, issues, and change requests.

> [!TIP]
> You cannot use programs as templates for new programs. However, you could use a project template for future programs by performing these steps:
> 1. Designate a project template with default settings for your future programs.
> 2. Remove any tasks and actuals. Programs are never financially enabled and cannot contain staff or tasks.
> 3. Create a project from the template.
> 4. Convert the new project into a program.

****Follow these steps:****

1. Click **Home**, **Portfolio Management**, **Programs**.
2. Click **New**.
3. Complete the following fields:
- **Assignment Pool** - Specifies the pool of resources that are allowed when assigning resources to programs.
- **Team Only** - Allow only staff members.
- **Resource Pool** - Allow team staff members and any additional resources that your project booking access rights provide.
- **Dashboard View** - Select a dashboard page layout to view project or program data. Values include the following two standard layouts and three PMO layouts from the PMO Accelerator add-in:
- **PMO-Program Status** - See the PMO Advanced Reporting documentation for details.
- **PMO-Project Status** - See the PMO Advanced Reporting documentation for an example.
- **PMO-Project Storyboard** - See the PMO Advanced Reporting documentation for an example.
- **Program Layout** - View budget data on the dashboard.
- **Project Default Layout** - View default labor and team utilization charts on the dashboard.
- **Stage** - Defines the company-defined stage for the program.
- **Priority** - Applicable only if you plan to work with the project in Open Workbench. The number that is entered is a score for the importance of the project relative to the other projects in your organization. This score controls the order in which tasks are scheduled during Autoschedule, subject to dependency constraints. Values: 0-36, with 0 being the highest.
- **% Complete Calculation Method** - Specifies the method to calculate the % Complete value for the project and tasks. Values:
- **Manual** - Use this method to enter the % Complete for the project, summary, and detail tasks manually. Also, select this calculation method if you are using Classic PPM with Microsoft Project, or if you are using an external job to calculate % Complete. When using the manual method, the status of a task does not change automatically.
- **Duration** - Use this method to track the % Complete based on the duration. The duration is a measure of the total span of active working time for a task from the start date to the finish date.
- **Effort** - Use this method to calculate the % Complete for summary and detail tasks, automatically, based on the work units that are completed by resource assignments. If you assign a nonlabor resource to a task, the effort and actuals for that resource are ignored in the calculation.
- Default: Manual

> [!NOTE]
> Set the % Complete Calculation Method at the beginning of your project and do not change this value.

4. In the **Organizational Breakdown Structures** section, enter the OBS node for the program. The OBS fields vary by organization to support your security, business unit, location, or reporting purposes.
5. Click **Save**.

> [!NOTE]
> After you create a program, you can open it in CA Open Workbench. Select **Workbench [Read-Only]** in the Open in Scheduler menu near the top right of the page.

### Program Dashboard Layout Examples

Select a dashboard page layout to view project or program data.

### Convert a Project into a Program

As a project manager, you can convert an existing project to a program in these circumstances:
- The project contains no tasks.
- The project contains no staff.
- The project is not financially enabled.

After conversion, you can open the program and can add subprojects and participants. You can also edit the program properties. The **Template** field, used to designate a project as a template, disappears. You cannot use programs as templates because you cannot financially enable them, and because they cannot contain staff or tasks.

****Follow these steps:****

1. Open a project.
2. Click the **Properties** tab menu and select **Settings**.
3. Select the **Program** check box.
4. Click **Save**. The project is converted to a program and no longer appears in the list of projects.

### Define Program Start and Finish Dates

As a project manager, you can define your program start and finish dates using the schedule page of program properties. The dates encompass the start and completion dates of all the projects that are contained in the program. Verify that you set the dates of any program milestone tasks considering the program duration.

> [!NOTE]
> The **As of Date** field does not apply to programs, which cannot contain task-level estimating.

****Follow these steps:****

1. Open a program.
2. Click the **Properties** menu and click **Schedule**.
3. Complete the Scheduling section:
- **Set Planned Cost Dates** - Specifies if the planned cost dates are synchronized with the investment dates. Selecting the option for a detailed financial plan does not affect the planned cost dates.
- **As Of Date** - Defines the date to include data in time and budget estimates. This date is used in Earned Value Analysis (EVA) calculations, such as Budgeted Cost of Work Scheduled (BCWS) and drives the calculations for costs. ETC for a project is not scheduled on or before the As of Date.
- **Progress** - Indicates the level of work that is completed on project tasks. Use the following guidelines: Not Started = 0 percent, Started = 1-99 percent, Completed = 100 percent.
- **Priority** - With CA Open Workbench, this field defines the relative importance of this project in relation to all other projects. Values: 0-36, where 0 is the highest. Default: 10
- **Status Indicator** - Indicates the project status. Stoplight values: Green (on track), Yellow (minor variance), Red (significant variance).
- **Status Comment** - Defines any comments about the project status.
4. Click **Save**.

> [!NOTE]
> Starting with Release 14.4, the default Status Report Status lookup values change from Minor Variance to Needs Help and from Significant Variance to At Risk. The On Track value remains the same.

### Define Default Staffing Options

As a project manager, you can define the project default staffing options in the Staffing section of the schedule page of the program properties. You can define a default staff OBS unit as a staffing requirement. You can map roles to OBS units with resource managers.

****Follow these steps:****

1. Open a project.
2. Click the **Properties** menu and select **Settings**.
3. In the Time and Staff section, complete the following fields:
- **Default Staff OBS Unit** - Defines a default OBS unit as a staffing requirement. The application uses this value when you add team staff members to this project. The default staff OBS unit could be a resource pool, a specific location, or a department.
- **Requisition Approval Required** - Specifies if resource requisitions require approval before they can be booked. When you select this option, resources need the **Project Edit** access right to book proposed resources to a project or reject them.
4. Save your changes.

### Open and Close Projects for Time Tracking

As a project manager, you can allow staff members to track the time that they spend on project tasks on their time sheets. The staff member profile must also be opened to enter time on project tasks.

****Follow these steps:****

1. Open a project.
2. Open the **Properties** menu and click **Settings**.
3. In the Tracking section of the page, complete the following fields:
- **Open for Time Entry** - Indicates if staff members can enter time on their timesheets for this investment. Select the check box to enable the investment for time entry.

> [!NOTE]
> The setting for this project field does not impact the time entry setting on the project team or task.
- **Track Mode** - Indicates the tracking method that is used to enter time for this investment. Values:
- **Clarity (Clarity)** - Staff members enter time against their assigned tasks using timesheets (default).
- **None** - Non-labor resources track actuals through transaction vouchers or through a scheduler.
- **Other** - Indicates that actuals are imported from a third-party program.
- **Charge Code** - Select a default charge code to use for all project tasks. If you enter different charge codes at the task level on timesheets, the task-level charge codes override the project-level charge code.
4. Submit the changes.

### Create a Program Budget

As a program manager, you can create a simple budget that applies only to the program and not to its subprojects. You can view program budget data and budget data that is generated from its subprojects, on the program Dashboard page.

> [!NOTE]
> Clear the **Calculate Financial Metrics** field and save your changes to make the following financial fields available for data entry: Planned NPV, Planned ROI, Planned Breakeven, Planned IRR, Planned MIRR, Planned Payback Period (Months).

****Follow these steps:****

1. Open a program.
2. Open the **Properties** menu and click **Budget**.
3. Set the **Currency** value used for calculating the program budget and forecast values.
4. The **Calculate Financial Metrics** field specifies whether the financial metric fields are auto-populated using formulas. This field is selected by default. To enter your own data, clear this field and save your changes.
5. Depending on your selection in the previous step, view or edit the following fields:
- **Planned Capital Cost** - Defines the planned capital cost amount distributed between the planned cost start and finish dates of the program.
- **Planned Operating Cost** - Defines the planned operating cost amount distributed between the planned cost start and finish dates of the program.
- **Planned Benefit** - Defines the anticipated financial benefit amount distributed between the planned benefit start and finish dates of the program.
- **Planned Benefit Start** - Defines the scheduled date when you are anticipating benefits to start for the program.
- **Planned Benefit Finish** - Defines the scheduled date when you are anticipating benefits to end for the program.
- **Planned NPV** - Defines the net present value (NPV) for the program.
- **Planned ROI** - Defines the planned return on investment (ROI) value for the program.
- **Planned Breakeven** - Defines the date when you expect to recover all of the initial costs of funding this program.
- **Planned IRR** - Defines the internal rate of return or discount rate that is used to achieve zero NPV for the program.
- **Planned MIRR** - Defines the modified internal rate of return that is used to measure the attractiveness of the program.
- **Planned Payback Periods (Months)** - Defines the number of monthly periods needed for the sum of the expected cash flows to equal the initial cash outlay for the program.
6. Save the changes.

### Add Projects to Programs

Like the subprojects that are added to projects, data is not shared between the projects that you add to programs. However, unlike master projects, programs generate and display combined actuals and estimates for all of the subprojects that it contains. You can also view program and project-level budget information on the program dashboard page.

The projects that you add to programs retain all of the data that they contained as independent projects. The data includes complex planning and financial information and work breakdown structures, and staff. You can post vouchers and timesheet transactions to the project. Projects that are contained in programs continue to be available from the projects list page.

****Follow these steps:****

1. Open a program.
2. Click **Properties**, **Main**, **Subprojects**.
3. Click **Add**.
4. Select the projects to add to the program, and click **Add**.

### View Combined Subproject Actuals and Estimates

The **Total** row on the subprojects properties page displays the total number of actuals and estimates that are accrued and entered for all of the projects in the program. The cells in the Total row display the combined total of the data in each column:
- **Count** - Subprojects can have their own subprojects. This number indicates the number of subprojects a subproject (or in the case of a program, a project) contains.
- **Actuals** - Displays the actuals that have been posted for the tasks in each project. The number in the Total cell reflects the combined actuals of all of the projects in the program.
- **ETC** - Displays the Estimated To Complete (ETC) number for each of the projects in the program.
- **Total Effort** - Total effort is Actuals + remaining ETC. The cells in the column reflect the total effort for each project.
- **% Expended** - Displays the percentage of resource usage expended on this project.
- **Baseline** - Displays the usage number for the most current project baseline. Usage is Total effort (actuals plus remaining ETC) to date.
- **Status** - This stoplight indicates if the project is approved (green), on-hold (yellow), or unapproved (red).
- **Schedule** - The stoplight indicates if a project is on schedule, or is in danger of being delayed.

### Create Program Dependencies

Like a project, a program is considered an investment in a portfolio. As a project manager, you can indicate dependency relationships that exist between investments in a portfolio using the dependencies page of program properties.

****Follow these steps:****

1. Open a program.
2. Click **Properties**, **Main**, **Dependencies**.
3. Select a dependency from the drop-down:
- **Investments that depend on this one** - Create one or more dependencies that depend on this program.
- **Investments this one depends on** - Create one or more dependencies that this program depends on.
4. Click **Add**. The select investments page appears.
5. Select the check box next to the program or investment to create a dependency, and click **Add**.
6. Filter the list by investment type.
7. Select the check box next to the investment to create the dependency, and click **Add**.
8. To remove a dependency, select the dependency and click **Remove**.

### Monitor Program Performance

When you select **Program Layout** as the layout option on the program properties page, you can view the Return on Investment (ROI) data on the program dashboard page. This applies if you create a program-level budget. You can view summaries of the total effort and actuals that are accumulated for all of the program projects.

By default, the page displays the following portlets:
- **General portlet** - Read-only view displaying basic information about the program, such as name, ID, start, and finish date. The icon in the Status Indicator field displays the program status.
- **Labor Resource Effort portlet** - Displays the program up-to-date actuals, ETC, and allocation information.
- **Team Utilization portlet** - Displays total effort for each resource across all of the program tasks to which the resource is assigned. You can drill down to view utilization by individual resource and task.

Add or remove portlets to customize the page. Your administrator can customize using the program layout portlet page of Dashboard content from Studio.

### Open a Release Associated with a Project or Program

Releases represent new future deliverables. As a project manager, you can link releases to the project or program to track the release implementation effort. There is no limit to the number of releases that you can associate to a project or program.

****Follow these steps:****

1. Open a project or program.
2. Open the **Properties** menu and click **Associated Releases**. The associated release properties page appears.
3. Click the name of a release.

#### Unlink Projects or Programs from Releases

You can unlink a release from the project or program to which it is associated using the release properties page. Open the release and unlink the release from the project or program.

### Cancel Programs Marked for Deletion

You can cancel a program that is marked for deletion in these situations:
- The Delete Investments job has not run from the time you marked the program for deletion.
- The program remains inactive and is listed on the programs list page.
- You have not added time entries to the program.

> [!TIP]
> In Release 15.5.1, the **Delete Investments** job is renamed to **Delete Investments and Time Reporting Periods**.

****Follow these steps:****

1. Click **Home**, **Portfolio Management**, **Programs**.
2. Expand the filter. Search the list for inactive programs.
3. Select the check box next to the program and click **Cancel Deletion**.
4. Click **Yes** to confirm.

---

## Monitor Project Performance on the Project Dashboard

You can monitor project performance on the Project Dashboard page by viewing read-only summary views of project labor and team utilization data in graph and table format. Dashboard data appears based on the information that you enter in the task and resource assignment fields, and based on the data that is submitted in staff member timesheets. The dashboard automatically updates when you add or post new information to the project.

By default, this page displays the **General**, **Labor Resource Effort**, and **Team Utilization** portlets. You can use these portlets to view resource allocation and availability information and to compare actuals to estimates. You cannot change the data or appearance in the General and Labor Resource Effort portlets. However, you can configure some of the settings on the Team Utilization graph.

Your Classic PPM administrator can use Studio to customize this page by adding or removing portlets from the Dashboard tab of the Project Default Layout portlet.

### General Portlet

The General portlet displays basic information about the project. These fields require a description:
- **Start Date** - Defines the initial start date for a project. As you create tasks and assignments, this date is auto-calculated to match the first date that a task is scheduled to start. Default: Current date. Required: Yes

> [!WARNING]
> Verify that the start dates of tasks and assignments are the same or later than the start date of the project. If not, the start date of the project is automatically redefined based on the start dates of the tasks and assignments.
- **Finish Date** - Defines the initial finish date for a project. As you create tasks and assignments, this date is auto-calculated to match the last date that a task is scheduled to finish. Default: Current date

> [!WARNING]
> Verify that the finish dates of tasks and assignments are the same or before the finish date of the project. If not, the end date of the project is automatically redefined based on the end dates of the tasks and assignments.
- **Status Indicator** - Indicates the project status. Stoplight values:
- **Green** - The project is on track.
- **Yellow** - A minor variance exists in the overall status of the projects.
- **Red** - A significant variance exists in the overall status of the project.

> [!NOTE]
> Starting with Release 14.4, the default Status Report Status lookup values change from Minor Variance to Needs Help and from Significant Variance to At Risk. The On Track value remains the same.

### Labor Effort Portlet

The Labor Effort portlet displays project actuals, ETC, and allocations. Use this information to compare up-to-date actuals and estimates, and to view the overall baseline and allocation variances.
- **Total Effort** - Defined by the formula: `Total Effort = Actuals + Remaining ETC`
- **Actuals** - Defines the total number of hours that have been submitted and posted against project tasks.
- **Estimate to Complete (ETC)** - Displays the current estimate to complete (ETC) for the project.
- **Baseline** - Displays the usage of the current baseline: `Usage = Total of Actuals + ETC; If a baseline is not being used, Usage = zero.`
- **Baseline Variance** - Displays the baseline variance: `Baseline Variance = Baseline Usage - Total Effort`
- **Remaining Allocation** - Displays the number of allocated hours remaining: `Remaining Allocation = Allocation - Actuals`
- **Allocation Variance** - Displays the allocation variance: `Allocation Variance = Remaining Allocation - Total Effort`

### Project Status Portlet (Interactive)

The Project Status portlet is an interactive portlet that you can use to analyze your investments, and contains an Xcelsius visualization with multiple components. You can access this portlet from the projects list page by clicking the **Status Report** icon in the Overview column.

Run the **Update Report Tables**, **Cost Matrix Extraction**, and **Time Slicing** jobs to display data in this portlet.
- **Baseline Finish** - Displays the completion date for baselining the project.
- **Lifecycle Category** - Displays the lifecycle category that controls the list of available lifecycle stages for this investment.
- **Lifecycle Stage** - Displays the lifecycle stage of the investment.
- **Status** - Displays a graphical representation of the status. Values: Red, Yellow, and Green.

The following components are included:
- **Investment Allocation Hours by Role** - Displays the roles that are assigned for an investment in hours. Each pie segment represents the total allocation for a role.
- **Spending Plan by Month** - Displays the cost plan for the month as a bar per month.
- **Schedule Variance** - Displays the difference between the baseline finish and the finish dates. If no baseline exists, the schedule variance is the current date minus the finish date.

**Issues:**

Displays the issue name, status, and priority. Stoplight values:
- Green - No high or medium priority issues exist.
- Yellow - Medium priority issues exist.
- Red - High priority issues exist.
- White - Issue status is not defined.

**Risks:**

Displays the risk name, status, and priority. Values:
- Green (0 to 33) - Project is low risk
- Yellow (34 to 68) - Project is medium risk
- Red (68 to 100) - Project is high risk
- White - Risk data undefined

### Team Utilization Portlet

Use the Team Utilization portlet to view total effort for each resource across all of the project tasks to which the resource is assigned. You can drill down to view utilization by individual resource and task.

Resource utilization is the amount of total effort it takes, or is expected to take, for a resource to complete a task. The information in this portal displays by resource by time period. By default, the time segments are weekly, and starts with the current week. The time segment values display as a histogram.

You can personalize any of the values in the Team Utilization portlet, including the color codes.
- **Properties Icon** - Click this icon to open the staff member properties page.
- **Resource Allocation Icon** - Click this icon to open the resource/role allocations page and edit investment allocations.
- **Resource** - Defines the names of the resources that are allocated to investments in the portfolio. You can click the name to open the resource properties page.
- **Avg Alloc %** - Displays the average percentage of time that a resource is allocated to work (as tentative or committed) on this project.

---

## Project Risks, Issues, Change Requests, and Action Items

As a project manager, you can identify and manage risks, issues, and change requests. You can also assign action items to themselves and other users.

A project risk management process includes identifying, analyzing, planning, tracking, and communicating risk. You want to make informed decisions by assessing potential problems and the severity of their impact. As a project manager, you create a risk or an issue and attempt to assess, measure, and manage the risk. You can identify risks at any time during a project lifecycle. You can escalate a risk to an issue when it appears likely to affect the project in a significant way. Change requests result from issues and can help facilitate effective resolutions.

### Example: Risk Management Process

The workflow for managing project risks, issues, and change requests typically follows this pattern:

For example, your project team is developing a new product using a new technology. The resources in the organization who have experience with this technology are limited. The team must use external resources to complete the project. The product is bundled with third-party APIs and require legal approvals. The team identifies two risks affecting this project:
- A limited number of qualified resources
- A dependency on the approval process

After an analysis of the impact of the risks on the project, the project manager creates a risk for the limited resources and an issue for the dependency.

> [!TIP]
> You can use processes to automate the project risk management workflow. For example, you can create processes to notify you when the audit trail for a risk has been modified. You can create a process to send notifications when issue-related tasks are completed. See Configure Processes.

### Review the Prerequisites

To complete all tasks in this article, you need the following access rights:
- Project: Risk, Issue, Change Request: Create/Edit
- Project: Risk, Issue, Change Request: Delete
- Project: Risk, Issue, Change Request: Delete: All
- Project: Risk, Issue, Change Request: Edit: All
- Project: Risk, Issue, Change Request: View
- Project: Risk, Issue, Change Request: View: All

### Create a Risk

A risk is a potential future event that has a positive or negative impact on a project objective. Identify the risks early in a project to become aware of potential effects on the project scope, schedule, budget, and other factors.

If the overall score for a detailed risk differs from the rating you assigned to it, the two risk management components interact. The score of the detailed risk overrides the rate that you assigned. If you create a detailed risk without assigning rates, scores from the risk entries color the appropriate factor in the list.

****Follow these steps:****

1. Open a project and click **Risks/Issues/Changes**.
2. Click **New**.
3. Complete the fields in the General section:
- **Category** - Defines the category to which the risk belongs. Values:
- **Flexibility** - The project is not adaptable.
- **Funding** - The project funding is not allocated or is available with constraints.
- **Human Interface** - The user interface (UI) is poorly defined.
- **Implementation** - Uncertainties exist in the implementation effort and user acceptance.
- **Interdependencies** - The project is dependent on other projects.
- **Objectives** - The requirements, objectives, scope, and benefits are unreasonable, unclear, not measurable, and not verifiable.
- **Organizational Culture** - The project requires changes to the organization culture, business processes, procedures, or policies.
- **Resource Availability** - The internal resource availability is uncertain and external resources are required.
- **Sponsorship** - The sponsorship is not clearly identified and committed.
- **Supportability** - It is not easy to support the project in the future and requires major updating.
- **Technical** - The project technology is unproven and new internal or external expertise is required.

> [!NOTE]
> When you specify a risk category, the overall risk score overrides any differing status selection that you make for the risk category or factor.
- **Owner** - Defines the name of the resource who is managing the risk. Default: The resource that is currently logged in.
- **Impact Date** - Defines the date by which repercussions from this risk could affect the project. Default: Current date
- **Response Type** - Defines the type of response you want to make with this risk. Values:
- **Watch** - You do not want to respond to a risk. Typically assigned for any risk whose calculated risk score is low.
- **Accept** - The risk exposure is accepted, and in some cases, there is no intent to pursue the risk.
- **Transfer** - You want to transfer the risk to a different project. Once transferred, you can close the risk.
- **Mitigate** - You want to apply a risk response strategy to resolve the risk.
- Default: Watch
4. Click **Save**.
5. Complete the fields in the Details section:
- **Assumptions** - Defines the assumptions that determine that this item could be a risk.
- **Associated Risks** - Defines the risks within the project that are associated with this risk. You can only link this risk to risks within this project.
- **Associated Issues** - Defines the issues within the project that are associated with this risk. You can only link this risk to issues within this project.
6. Complete the fields in the Quantify Risk section:
- **Probability** - Defines the probability that the risk can occur. Values: Low (1), Medium (2), or High (3). Default: Low
- **Calculated Risk** - Displays the score calculated based on the Probability and Impact fields. Values:
- 1-3 (Green) - The calculated risk is low.
- 4-6 (Yellow) - The calculated risk is medium.
- 7-9 (Red) - The calculated risk is high.
- **Impact** - Defines the effect of the risk on the project. Default: Low
7. Attach a document in the Attachments section if applicable.
8. Complete the following fields in the Resolution section:
- **Resolution** - Defines the final resolution of this risk once the risk is mitigated.
- **Residual Risks** - Specifies the risks encountered or created within the project as a result of the mitigation that is taken to resolve the risk.
9. Save your changes.

#### Create a Risk Response Strategy

After you decide to mitigate the risk, assign the owner of the risk to develop a response strategy. Risk response strategies document the actions, tracking requirements, and other supporting information that is required to reduce the risk probability and impact.

****Follow these steps:****

1. Open a project and click **Risks/Issues/Changes**.
2. Open the risk.
3. Open the **Properties** menu and click **Response Strategy**.
4. Complete the fields and click **Add** to save your changes.

#### Close a Risk

Once the risk is successfully mitigated, change the status of the risk to Closed and enter the final resolution.

****Follow these steps:****

1. Open a project and click **Risks/Issues/Changes**.
2. Open the risk.
3. Change the **Status** to **Closed**.
4. Enter how the risk was mitigated in the Resolution section.
5. Save your changes.

#### Create a Risk from an Issue

You can create risks from existing issues. Basic information from common fields is carried over to the new issue for easy setup.

****Follow these steps:****

1. Open a project and click **Risks/Issues/Changes**.
2. In the Risks/Issues/Changes menu, click **Issues**.
3. Click the name of the issue.
4. Click **Create Risk**.
5. Complete the fields in the General section.
6. Click **Save**.
7. Complete the fields in the Details section:
- **Risk Symptoms** - Defines the symptoms that identify this item as a risk.
- **Impact Description** - Displays a description of the result the risk had on the project.
- **Risk Impact Date** - Displays the date when the repercussions from the risk impacted the project.
- **Target Resolution Date** - Displays the target date of resolving the risk.
- **Assumptions** - Displays the assumptions that determined the risk.
- **Associated Risks** and **Associated Issues** - Link to risks and issues within this project.
- **Response Type** - Values: Watch, Accept, Transfer, Mitigate. Default: Watch
8. Complete the fields in the Quantify Risk section:
- **Probability** - Values: Low (1), Medium (2), or High (3). Default: Low
- **Calculated Risk** - Values: 1-3 (Green/Low), 4-6 (Yellow/Medium), 7-9 (Red/High)
- **Impact** - Values: Low (1), Medium (2), or High (3). Default: Low
9. Attach the documents, if any, in the Attachments section.
10. Complete the fields in the Resolution section.
11. Save the changes.

After creating a risk, it appears in the risk list. A check mark icon in the **Above Threshold** column indicates that the risk score exceeds the risk threshold.

#### Create a Risk from a Change Request

When you create a risk from a change request, some of the fields are populated with information from the related change request.

****Follow these steps:****

1. Open a project and click **Risks/Issues/Changes**.
2. Open the Risks/Issues/Changes menu and click **Change Requests**.
3. Click the name of the change request.
4. Click **Create Risk**.
5. Complete the fields in the General section.
6. Complete the fields in the Details section.
7. Complete the fields in the Quantify Risk section.
8. Attach any documents in the Attachments section.
9. Complete the fields in the Resolution section.
10. Save the changes.

### Assign Risk Ratings

Organizations typically prefer to fund projects which offer low and medium risks. You can rate a predefined list of possible risk factors for each project on the main risk page. The following colors are used to display the risk score:
- Red = High risk
- Yellow = Medium risk
- Green = Low risk

After you assign risk rates to the individual factors, an overall risk level for the project is calculated. The calculation is based on the combined risk levels of all the risk factors in the list.

****Follow these steps:****

1. Open the project and select **Risk** from **Properties**.
2. Select the options to rate the risk:
- **Objectives** - Specifies if the requirements, objectives, scope, and benefits are reasonable, clearly defined, measurable, and verifiable.
- **Sponsorship** - Specifies if the sponsorship is clearly identified and committed.
- **Funding** - Specifies if the project funding is available without constraints.
- **Resource Availability** - Specifies if internal resources are available without constraints.
- **Interdependencies** - Specifies if the project is not dependent on other projects.
- **Technical** - Specifies if the project technology is proven.
- **Human Interface** - Specifies if the project has a well-defined user interface (UI).
- **Organizational Culture** - Specifies if the project requires little change to the organization culture.
- **Supportability** - Specifies if the project is easy to support in the future.
- **Implementation** - Specifies if minor uncertainties exist in the implementation effort.
- **Flexibility** - Specifies if the project is easily adaptable.
3. Save your changes.

#### Calculated Risk Score

You can enter and view a detailed calculated risk score in the Quantify Risk section of the risk properties page. The risk score is calculated based on the Probability and Impact fields. Probability and impact levels are rated as follows:
- Low = 1
- Medium = 2
- High = 3

For example, you set the risk probability level to High (3) and the impact level to Medium (2). The calculated risk score is 6. The calculated risk score works with the system-level risk threshold value for all projects, set by your Classic PPM administrator.

> [!NOTE]
> For more information about how risk scores are calculated and what determines the color of the risk score, see KB27099 on Broadcom Support Online.

#### Set Up the Risk Score Matrix

Use the Risk Score Setup matrix to set up the risk score for a given impact and probability combination. The system uses the matrix to determine the degree of risk (High, Medium, Low) based on the impact and probability factors.

By default, you can use the following risk rating scores: Low, Medium, High.

****Follow these steps:****

1. From **Administration**, select **Risk Settings** under Project Management.
2. For each Risk Impact row (Low, Medium, and High), select a Risk Probability (Low, Medium, or High) for each column.

#### Configure the Risk Score Matrix Using Custom Values

By default, the Risk Rating lookup uses the following alphabetic IDs for the rating levels:
- L = 0 (low)
- M = 50 (medium)
- H = 100 (high)

You can configure the risk score matrix by adding custom values for the following lookups: Risk Rating, Risk Impact, Risk Probability.

The default Risk Impact and Risk Probability lookups use the following numeric IDs:
- 1 = Low (0)
- 2 = Medium (50)
- 3 = High (100)

****Follow these steps:****

1. From **Administration**, select **Lookups** under Data Administration.
2. Filter for the lookup that you want to configure (for example, Risk Rating - Standard LMH).
3. Click **Values** and then click **New** to define a custom value for the lookup.
4. Define the custom value attributes. For example:
- Lookup Value Name = Low-Medium
- ID = 25
- Partition = System
5. Click **Save and Return**.
6. Click **Reorder Values**.
7. Use the up and down arrows to place the new custom value in the right order.
8. Click **Save and Return**.

After adding custom values, go to the Risk Settings page under Administration and select the newly added values in the Risk Score Setup matrix.

### Add Notes for Risks, Issues, or Change Requests

You can add notes about a risk, issue, or change request. The notes appear in the order in which they were created, with the most recent note appearing at the top of the list. You can neither edit nor reply to these notes.

****Follow these steps:****

1. Open the project and click **Risks/Issues/Changes**.
2. Open the Risks/Issues/Changes menu and select an item.
3. Open the risk, issue, or change request to add a note.
4. Click **Notes**.
5. Complete the fields and click **Add** to save the notes.

### Associate Key Tasks with a Risk

You can assign a risk to an existing task, or can create a task. You can also assign risks to one or more key tasks. A key task is significant in some way. For example, the start date of other tasks can depend on the key task.

****Follow these steps:****

1. Open the project and click **Risks/Issues/Changes**.
2. Click the risk name.
3. Click **Associated Tasks**.
4. To add an existing task, click **Add Existing Tasks**. Select the check box next to the task to associate to the risk, and click **Link To**.
5. To add a new task association, click **New**.
6. Complete the fields in the General section:
- **Milestone** - Designate the task as a milestone task. Default: Cleared

> [!NOTE]
> You cannot assign staff to milestones or designate them as summary tasks.
- **Key Task** - Specifies whether you want to identify this task as a key task. Default: Selected
- **Status** - Displays the status of the task based on the value of % Complete. Values: Completed, Not Started, Started. Default: Not Started
- **% Complete** - Defines the percent of work completed. Values: Zero (not started), 1-99 (in progress), 100 (complete). Default: 0
- **Charge Code** - Defines the charge code for the task.
- **Must Start On** - Defines the date on which the task is required to start (autoschedule constraint).
- **Must Finish On** - Defines the date on which the task is required to finish (autoschedule constraint).
- **Start No Earlier Than** - Defines the earliest possible start date for a task (autoschedule constraint).
- **Start No Later Than** - Defines the latest possible start date for the task (autoschedule constraint).
- **Finish No Earlier Than** - Defines the earliest possible finish date for a task (autoschedule constraint).
- **Finish No Later Than** - Defines the latest possible finish date for a task (autoschedule constraint).
- **Exclude from Autoscheduling** - Specifies excluding the dates for this task during the auto-scheduling process. Default: Cleared

> [!NOTE]
> This field works with the **Schedule Assignments on Excluded Tasks** field on the auto-schedule page.

7. Save the changes.

### Manage the List of Values for the Risk Categories Lookup

The system-defined list of values for risk categories (`RIM_CATEGORY_TYPE` lookup) are suggested values. You can edit this list to meet the needs of your organization.

****Follow these steps:****

1. Click **Administration**, **Studio**, **Objects**.
2. Open the Project object and click the **Attributes** tab.
3. Create a new number attribute. For example, `My Risk Factor` with an ID of `my_risk_factor`.
   a. Click the **Add** button.
   b. Select the type of attribute (number).
   c. Complete all required fields and click **Save**.
4. Add this new attribute to the Risk Score Attribute (found in the Project Object Attribute listing).
5. Click on the **Risk Score** attribute (id = `risk`).
6. On the Risk Properties page, click the **Build Weighted Average Formula** link.
7. Add the new, user-defined attribute (`my_risk_factor`) to the weighted average formula.
8. You can remove other attributes and the system-defined values from the weighted average formula if you do not want them.
9. Click **Save** or **Submit**.
10. Check the Risk Category Type lookup list of values:
    a. Click **Administration**, **Data Administration**, **Lookups**.
    b. Search for ID = `RIM_CATEGORY_TYPE`, open the lookup, and navigate to the **Values** tab. You will now see your newly added attribute as a value on this lookup.
11. Place this new attribute on a subpage within the Project object so that users can enter a value in the field for the Risk Score calculation.
12. You can also remove any of the system-defined attributes for the Risk Score if you do not need to use them.
13. To update views, navigate to **Administration**, **Studio**, **Objects**, and open the Project object and click the **Views** tab.
14. Publish the modified project views if modifications are made to list views, filter views, or options. Publishing is not needed for modifications to property pages.

### Automate Risk Management

The **Assign Risks** process is an available risk management process. As a process administrator or manager, use the assign risks process to manage the assignment and resolution of project risks. By default, this process is not active.

The Assign Risks process completes the following steps:

1. A user creates a new project risk with an Open status and manually starts the Assign Risks process.
2. The process checks if a risk category is specified.
- If a risk category is specified, creates an action item for the project manager to assign a risk owner.
- If a risk category is not specified, creates an action item for the project manager to enter a risk category.
- The risk owner changes the risk status to Work in Progress.
3. Once a risk is assigned an owner, the process creates an action item for the risk owner to select an approach for risk resolution (mitigate, watch, transfer, or accept).
- If the risk is **accepted**, creates an action item for the project manager to approve risk acceptance. If approved, the risk is marked as Resolved. If denied, the action item goes back to the risk owner.
- If the risk is being **watched**, creates an action item for the risk owner to watch the risk. After the action is completed, the risk is marked as Resolved.
- If the risk is being **mitigated**, creates an action item for the risk owner to define mitigation steps. After the action is completed, the risk is marked as Resolved.
- If the risk is being **transferred**, creates an action item for the risk owner to transfer the risk. After the action item is complete, the risk is marked as Resolved.
4. After the risk is resolved, the risk owner changes the risk status to Closed.

### Create an Issue and Close a Risk

An issue is an event that has affected the project. When the risk mitigation plan fails, you can escalate the risk to an issue. Create an issue from the existing risk and then close the risk.

****Follow these steps:****

1. Open the project and click **Risk/Issues/Changes**.
2. Open the risk.
3. Click **Create Issue**.
4. Complete the fields in the General section:
- **Category** - Defines the category to which the issue belongs. Values: Flexibility, Funding, Human Interface, Implementation, Interdependencies, Objectives, Organizational Culture, Resource Availability, Sponsorship, Supportability, Technical.
- **Owner** - Defines the name of the resource managing the issue. Default: The resource that is currently logged in.
5. Complete the fields in the Details section.
6. Attach documents in the Attachments section.
7. Complete the Resolution section after the issue is resolved.
8. Click **Save and Return** to go to the Risk Properties page to close the risk.
9. Change the **Status** to **Closed**.
10. Save your changes.

### Create an Issue

Create an issue when the risk impacts the project in a significant way.

****Follow these steps:****

1. Open the project and click **Risks/Issues/Changes**.
2. Open the Risks/Issues/Changes menu and click **Issues**.
3. Click **New**.
4. Complete the fields in the General section:
- **Issue ID** - Defines the unique identifier for the issue. You cannot change the identifier once you save the issue.
- **Category** - Defines the category that the issue belongs to. Values: Flexibility, Funding, Human Interface, Implementation, Interdependencies, Objectives, Organizational Culture, Resource Availability, Sponsorship, Supportability, Technical.
- **Owner** - Defines the name of the resource managing the issue. Default: The resource that is currently logged in.
- **Creator** - Displays the name of the resource who created the issue.
5. Complete the fields in the Details section.
6. Attach documents in the Attachments section.
7. Complete the Resolution section after the issue is resolved.
8. Save your changes.

#### Close an Issue

Once the issue is resolved, change the status to Closed, and enter a final resolution.

****Follow these steps:****

1. Open the project and click **Risks/Issues/Changes**.
2. Open the Risks/Issues/Changes menu and click **Issues**.
3. Open the issue.
4. Change the **Status** to **Closed**.
5. Enter how the issue was resolved in the Resolution section.
6. Save your changes.

#### Create an Issue from a Risk or Change Request

You can create issues from risks or change requests to escalate a serious risk to a higher level.

****Follow these steps:****

1. Open the project and click **Risks/Issues/Changes**.
2. Open the Risks/Issues/Changes menu and click **Issues** or **Change Requests**.
3. Click **New** or click the name of a change request and then click **Create Issue**.
4. Complete the requested information.
5. Complete the fields in the Details section.
6. Attach any documents.
7. Complete the Resolution field in the Resolution section.
8. Save your changes.

#### Import an Issue from Another System of Record

If your organization uses a different system such as Microsoft Excel or Access to create and monitor issues, use the XML Open Gateway (XOG) to import them into Classic PPM.

### Close a Change Request and Track It as an Issue

You can quickly create a change request from an existing issue. A link back to the originating change request is provided on the issue properties page.

****Follow these steps:****

1. Open the change request.
2. Change the **Status** to **Closed**.
3. Save the changes.
4. Click **Create Issue**.
5. Complete the fields in the General section:
- **Owner** - Defines the name of the resource managing the risk. Default: The resource that is currently logged in.
6. Complete the fields in the Details section:
- **Target Resolution Date** - Defines the date for resolving the issue. Default: Current date
7. Attach any documents.
8. Complete the Resolution field in the Resolution section.
9. Save the changes.

### Associate Existing Tasks with Issues

You can associate tasks with the issue and can view a list of tasks that are associated with the issue. You can associate tasks, key tasks, and milestones with an issue.

****Follow these steps:****

1. Open the project and click **Risks/Issues/Changes**.
2. Open the Risks/Issues/Changes menu and click **Issues**.
3. Click the name of the issue.
4. Click **Associated Tasks**.
5. Click **Add Existing Tasks**.
6. Select the task check box to associate the task with the issue, and click **Link To**.

### Create a Change Request

A change request is an alteration to expand or contract the project scope, schedule, or budget. Create a change request when the issue resolution impacts the project scope, schedule, or budget or when the issue is not resolved.

****Follow these steps:****

1. Open the project and click **Risk/Issues/Changes**.
2. To create a change request from an issue, open the Risks/Issues/Changes menu and click **Issues**. Open an issue and click **Create Change Request**.
3. To create a new change request, open the Risks/Issues/Changes menu and click **Change Request**. Click **New**.
4. Complete the fields in the General and Details sections.
5. Attach documents in the Attachments section.
6. Complete the fields in the Effect section:
- **Impact on Baseline** - Describes how the changes in the request can affect the project baseline.
- **Impact on Other Projects** - Describes how the request can affect other projects.
- **Change in Cost** - Defines the amount by which the request can change the budget cost of the project.
- **Change in Schedule** - Defines the number of days by which the request can delay or accelerate the overall project schedule.
- **Change in Resources** - Defines a number that reflects the request for an increase or decrease in the number of resources.
7. Complete the fields in the Assessment section.
8. Click **Save and Return** to go to the issue properties page to close the issue.
9. Change the **Status** to **Closed**.
10. Save your changes.

#### Create a Change Request from a Risk

****Follow these steps:****

1. Open the project and click **Risk/Issues/Changes**.
2. Click the name of the risk.
3. Click **Create Change Request**.
4. Complete the fields on the page.
5. Save the changes.

#### Close a Change Request

After a change request is resolved, change its status to Closed, and enter a final resolution.

****Follow these steps:****

1. Open the change request.
2. In the General Properties section, change the status to **Closed** and enter a reason for the requested change.
3. Save the changes.

### View an Audit Trail for a Risk, Issue, or Change Request

You can view when and which user changed certain fields. Your administrator can set up the auditing to audit and preserve a record of operations.

****Follow these steps:****

1. Open the project and click **Risks/Issues/Changes**.
2. Open the Risks/Issues/Changes menu and click **Risks**, **Issues**, or **Change Request**.
3. Open the item and click **Audit**.
4. Filter the list.

### Assign an Action Item to Yourself or Other Users

Project action items are reminders about work that you assign to yourself or to others and that others assign to you.

****Follow these steps:****

1. Open **Home**, and from **Personal**, click **Organizer**.
2. Click **New**.
3. Complete the fields in the General section:
- **Recurring** - Indicates if the action item occurs at regular intervals.
- **Frequency** - Specifies how often the action item recurs. For example, enter 1 in the Frequency field for a weekly status report.
4. Complete the fields in the Notify section:
- **Notify Assignees** - Indicates if the assigned resource receives a notification. Default: Cleared
- **Send Reminder** - Indicates if a reminder email notification is sent. Default: Cleared
- **Time Before Reminder** - Defines the amount of time before the item is due for the reminder to occur.
5. Select the resources to assign the action item in the Assignees section. Click **Advanced Selection** to choose from a larger list.
6. Save your changes.

---

## MSP: Manage Projects with Microsoft Project

You can integrate Classic PPM with Microsoft Project (MSP) to manage, schedule, and track projects with either tool. Both Classic PPM and MSP provide similar project management features; however, their core business rules are different. Classic PPM is a centralized enterprise solution and MSP is a scheduling tool.

For large-scale replanning or automatic scheduling algorithms, Classic PPM Schedule Connect opens projects in MSP. Schedule Connect provides a bidirectional connection between Classic PPM and MSP and changes in both products are easily synchronized.

### Benefits of Integrating with Microsoft Project

When you install, configure, and integrate Microsoft Project with Classic PPM, the larger Classic PPM environment provides a complete project, program, and resource management system. Benefits include:
- Resource management
- Time tracking
- Reporting
- Consistent scheduling
- Repeatable processes
- Uniform behavior for the contributing project members

Functionality includes:
- Open, review, and edit projects in Microsoft Project.
- Save projects that you create and update in Microsoft Project back to Classic PPM.
- Allocate the Classic PPM resources to projects open in Microsoft Project.
- Map custom fields from Microsoft Project and Classic PPM, assign resources to tasks, and create baselines.
- Improved performance with all information sent in one large block.
- Simultaneous communication between Classic PPM and Microsoft Project.
- SSL and secure proxy servers are supported.

### Deciding Between the Legacy and New Microsoft Project Driver

The Microsoft Project Interface installation wizard provides two options: **Microsoft Project Legacy Interface** and **Microsoft Project Interface**. If you previously installed the legacy version and now install Microsoft Project Interface, the following changes apply:
- Any changes that you make to the project calendar in Microsoft Project are no longer saved in the MPP file.
- Resource pools are no longer available for master projects.
- Custom views are no longer saved in the MPP file.

> [!TIP]
> Create custom views (and the associated tables) and place them in the `global.mpt` file.
- To save new project plans from MSP to Classic PPM select the **Save As** button from the Clarity Integration menu.
- Elapsed Duration values are preserved between Microsoft Project and Classic PPM.
- `Number1` and `Number2` fields are no longer mapped to the Pending ETC and Pending Actual fields.
- If you create a task in Classic PPM that is not pinned through a dependency, and the task does not start on the project start date, define a constraint.

> [!WARNING]
> Be aware of the following behavior with unmapped fields if you upgrade from the legacy MSP driver. It is possible that after you upgrade and switch to the new driver, the values on your unmapped fields are lost.

### Working Copies of Projects in Microsoft Project

A working copy of a project lets you update the project offline. When you open and save a project as a file, Microsoft Project creates a working copy. Save projects locally as MPP files using Microsoft Project.

### Do Not Use Open Workbench and Microsoft Project for the Same Project

Classic PPM also supports full bi-directional connectivity with Open Workbench. However, the following use case is not supported: opening a project in one scheduler after it has been scheduled in another.

> [!WARNING]
> After you schedule a project plan in one of the schedulers, do not open it in another scheduler for editing. The scheduling algorithms for each scheduler are different. Mixing schedulers can lead to data integrity issues.

---

## MSP: Install and Configure the Microsoft Project Interface

As an administrator, you can install and configure Microsoft Project (MSP) as a scheduling tool to integrate with Classic PPM.

> [!WARNING]
> Changing the recommended settings and steps in this documentation can cause unexpected behavior. See KB 11553: How do Microsoft Project monthly patches impact Clarity?

### Install the Required Software

Before you install the Microsoft Project Interface, verify that you have installed:
- A supported version of Microsoft Project
- A supported version of the Microsoft .NET Framework for Windows
- A supported version of Microsoft Visual Studio Tools for Office Runtime

> [!IMPORTANT]
> If you upgrade from a previous release of Clarity, uninstall and re-install your Clarity Microsoft Project Interface software by using the version available after upgrading Clarity in **Account Settings > Software Downloads**.

### Configure the Microsoft Project Interface

#### Grant User Access Rights

The following Classic PPM access rights are required:

**Open a project:**
- Project - View Management - All (Read-Only)
- Project - Edit Management - All (Read/Write)

**Create a project:**
- Project - Create

**Display resources and roles:**
- Resource - Soft Book - All
- Resource - Hard Book - All

**Change the allocations of a resource:**
- Resource - Soft Book
- Resource - Hard Book

> [!NOTE]
> You must have Resource - Hard Book rights to change the allocation of a resource who is hard-booked.

**Set the baseline of a project:**
- Project - Edit Management - All
- Project - Modify Baseline

#### Set Internet Explorer Browser Options

The following steps apply only if using Internet Explorer 11 instead of a more modern browser.

****Follow these steps:****

1. In Internet Explorer, select **Tools**, **Internet Options** and click the **Advanced** tab.
2. Scroll to the Security section.
3. Clear the **Do not save encrypted pages to disk** check box.
4. Click **OK**.

#### Set the Windows Explorer Options

****Follow these steps:****

1. In Windows Explorer, click **Organize** and select **Folder and search options**.
2. Click **View**.
3. Clear the **Hide extensions for known file types** check box.
4. Click **OK**.

#### Set the Trust Center Level in Microsoft Project

****Follow these steps:****

1. Open Microsoft Project.
2. Select **File**, **Options**.
3. Click **Trust Center**, **Trust Center Settings**.
4. Click **Add-ins**. Clear the **require application add-ins to be signed by trusted publisher** option.
5. Return to the Trust Center page.
6. Click **Macro Settings** and select the **enable all macros** option.

### Install the Microsoft Project Interface with Schedule Connect

The Schedule Connect interface enables the exchange of data between Classic PPM and Microsoft Project.

Upgrading the Classic PPM Microsoft Project Interface / Schedule Connect is required when upgrading Classic PPM. Uninstall all the following components if they are present prior to upgrading:
- Clarity Microsoft Project Interface
- Clarity Schedule Connect
- ClarityAddin
- Open Workbench (if installed)

> [!NOTE]
> If you have any custom views for Open Workbench (OWB), ensure that you save the custom views in a separate folder before you uninstall.

****Follow these steps:****

1. Close all instances of Microsoft Project.
2. Download the Microsoft Project Interface using one of the following methods:
- **Classic PPM media:** Navigate to `Clients\MSPInterface\New` and click `mspsetup.exe`.
- **Classic PPM user interface:**
     a. Click **Home**, **Personal**, **Account Settings**.
     b. Click the **Software Downloads** tab.
     c. Click the appropriate compatible download link for either Microsoft Project Interface (x86) or Microsoft Project Interface (x64).
     d. Select **Run** or **Save** when prompted.
3. Select your language preference for the installer.

> [!WARNING]
> To reduce unexpected behavior and variability in troubleshooting, set the same language in your integrated applications (Microsoft Project, the MSP interface connector, Microsoft Windows, and Classic PPM).

4. Click **OK** to continue with the setup process.
5. Follow the on-screen instructions.
6. Click **Finish** and exit the wizard when the installation is complete.

### Configure Windows Regional Settings

Match your Windows Regional Settings to the language of your Microsoft Project installation. Non-matching Regional Settings can cause integration problems with decimal values such as % Complete or % Allocation.

****Follow these steps:****

1. In Windows 8.1 or 10, click **Start**, **Settings**. In Windows 7, open your control panel.
2. In Windows Settings, click **Time & Language** and then click **Region & language**.
3. Under Related settings, click **Additional date, time, & regional settings**.
4. (Optional shortcut) Open the Control Panel (`Windows + R`, type `control panel`).
5. In the Region dialog box, on the **Format** tab, change the language to match your Microsoft Project language setting. Click **OK**.

> [!TIP]
> Do not click **Additional settings**.

### Set Up the Server Connection

When you open a project from Classic PPM to update in Microsoft Project, you implicitly log in to Classic PPM. Schedule Connect remembers your settings.

> [!NOTE]
> If you are using federated single sign-on (SSO), you must have an open Classic PPM browser session in the environment to which you are trying to connect.

****Follow these steps:****

1. With Microsoft Project open, click the **Classic PPM Integration** menu or toolbar, and go to **Open**.
2. Enter your Classic PPM user name and password, and click **>>Setup**.
3. Complete the following fields:
- **SSL Handling** - Values: Full, Login, None. Default: Full
- **Clarity Host** - Defines the name of the Classic PPM server. Example: `corpName`
- **Port** - The port for the Classic PPM server. Example: 80 (default). Use 443 for SSL.

> [!NOTE]
> To determine the port number, verify the CSA application server settings, the application logon URL, or contact your Classic PPM administrator.
- **Proxy Host** - Defines the name of your proxy server (only required for authenticating proxy).
- **Port** - Defines the port for the proxy server.
- **Proxy User Name** / **Proxy Password** - Credentials for connecting to the proxy server.
4. Click **OK**. You are connected to the Classic PPM server.

### Configure Microsoft Project Options

****Follow these steps:****

1. In Microsoft Project, select **File**, **Options**.
2. Click **Schedule** to set the Calculation option:
- **On** - Microsoft Project automatically schedules the plan every time you open a project.
- **Off** - Microsoft Project does not schedule your plan automatically.
3. Click **Schedule** to configure the calendar. Verify that the values in the Calendar options map to the values set in Classic PPM.
4. Click **Advanced** and clear the **Show links between projects dialog on open** check box.
5. Click **Save** to update the file location based on your requirements.

### Configure Default Settings in Microsoft Project

To normalize the Microsoft Project integration with Classic PPM, configure the default settings.

****Follow these steps:****

1. In Microsoft Project, select **Tools**, **Options**, and click **Schedule**.
2. (Optional) Select **Percentage** for the Show assignment as option.
3. Select **Auto Scheduled** for the New tasks created option.
4. Select **Project Start Date** for the Auto scheduled tasks scheduled on option.
5. Select **Days** for the Duration is entered in option.
6. Enable the following options:
   a. **Split in-progress tasks**
   b. **Tasks will always honor their constraint dates**
   c. (Optional) Show that scheduled tasks have estimated durations
   d. **Calculate project after each edit**
7. Disable the following options:
   a. **New tasks are effort driven**
   b. (Optional) New scheduled tasks have estimated durations
   c. **Updating Task status updates resource status** (disable for time sheet tracking projects)

> [!NOTE]
> If you set a task as 100 percent complete, the remaining work is moved to actual work irrespective of the Update Task status update resource status setting.

   d. (Optional) Inserted projects are calculated like summary tasks
   e. (Optional) Actual costs are always calculated by Project
8. Select **Tools**, **Options**, and click **General**.

> [!NOTE]
> Do not use the Date Format as an option that includes a time stamp.

9. Select **Tools**, **Options** and click **Advanced**.
10. Enable the following options:
    a. **Allow cell drag and drop**
    b. (Optional) Move selection after enter
    c. (Optional) Ask to update automatic links
    d. (Optional) Edit directly in cell
    e. (Optional) Edits to total task % complete will be spread to the status date
    f. (Optional) Calculate multiple critical paths
11. (Optional) Select **% Complete** for the Default task Earned Value method option.
12. (Optional) Select **Baseline** for the Baseline for Earned Value calculation.

> [!NOTE]
> While configuring the options for an open project, a message "Options for this project: <project name>.mpp" appears. Change the message to "Options for this project: All New Projects" wherever required.

The Classic PPM repository owns the Company, Project, and Resource calendars. Make changes to these calendars only using Classic PPM. Changes made using Microsoft Project are dropped without an error message.

### Configure Project Properties in Microsoft Project

To ensure that the Microsoft Project fields are mapped to Classic PPM fields, configure the properties of the project in Microsoft Project.

1. In Microsoft Project, select **File**, **Info**, **Project Information** and click the **Summary** tab.
2. Verify that the fields from the Summary tab are mapped to Classic PPM:

| Microsoft Project Field | Classic PPM Field | Required |
|---|---|---|
| Title | ProjectName | Required |
| Subject | Optional | Not required |
| Author | Optional | Not required |
| Manager | Project Manager | Required |
| Company | Department | Not required |
| Category | Optional | Not required |
| Keywords | Optional | Not required |
| Comments | Optional | Not required |
| Hyperlink Base | Guidelines | Required |

> [!NOTE]
> Do not edit the Title, Manager, and Hyperlink Base.

### Configure Resource Leveling in Microsoft Project

1. Select **Tools**, **Resource Leveling** from Microsoft Project.
2. Set the **Leveling calculations** as **Manual**.
3. (Optional) Set the **Look for overallocations** on a Day by Day basis.
4. (Optional) Set the **Leveling order** to **Standard**.
5. Disable the **Leveling can create splits in remaining work** option.

---

## MSP: Upgrades from the Legacy Interface to the New XML Driver

This section explains some of the new driver behavior for users who upgrade to Clarity 15.5 or higher from previous releases where the legacy PPM-MSP driver was used.

### New Microsoft Project Task Type Attribute

You can indicate how a task is mapped to the Microsoft Project task type value. This release includes a new task attribute named **Microsoft Project Task Type** that represents the Microsoft Project task type. The new attribute derives its value from one of the following lookup values:
- 0 - Fixed Units
- 1 - Fixed Duration
- 2 - Fixed Work

The new `msp_task_type` attribute is supported by the Clarity integration with Microsoft Project and is available in Classic PPM, Clarity, Microsoft Project, and the XOG.

### Support for Fixed Work Task Types

You can import or export a project plan to or from Microsoft Project with all of the task types remaining intact.

Previous releases of Clarity supported only two task types: Fixed Duration and Non-Fixed Duration. A Boolean attribute (`prIsFixed`) on the Task object indicated which task type applied. However, Microsoft Project supported three task types: Fixed Duration, Fixed Work, and Fixed Units.

In 15.4.1 and previous releases with the old pre-XML legacy MSP adapter, Clarity stored the entire MPP file and overlaid changes onto the file using the OLE macro language. Task settings such as Fixed Work were preserved even if they were not stored in the database.

Clarity 15.5 and higher MSP integrations resolve this by providing:
- A new Task Type single-select lookup attribute that allows Clarity to store any of the three MSP task type options.
- A new Task Type attribute available for reads and writes through the XOG.
- A new MSP integration update to leverage this new Task Type lookup.
- A new upgrade script that interrogates projects with existing MPP files and populates the new Task Type field.

The new attribute is exposed in the Classic PPM user interface so that you can set it when creating a new task. The new task attribute is also tied in with the existing Fixed Duration attribute. If you set the Fixed Duration to true on the task, this new lookup switches to Fixed Duration. Setting Fixed Duration on this new lookup also sets the existing Fixed Duration to true (or false if one of the other two values is selected).

### MSP Support for the New Task Lookup Attribute

Users of the legacy Microsoft Project interface can upgrade to the new XML interface without losing the task types defined in their project. The legacy interface stored the task types in the MPP file. The new XML driver stores the values in the XML file but generates new MPP files when projects are opened from Clarity.

Key behaviors:
- **Upgrade:** A project saved with the legacy OLE driver can be opened in the new XML driver with the task types intact. When opening from Clarity, the XML driver will temporarily open the legacy MPP to get the task types, then close it.
- **Normal:** Values persisted in Clarity tasks for the "Microsoft Project Task Type" attribute are seen in MSP when opened in the XML driver.
- **Normal:** If no value is set in Clarity tasks for the attribute, the default task type defined in MSP is used.
- **Normal:** Task type values in MSP are saved to Clarity and stored in the "Microsoft Project Task Type" attribute.

---

## MSP: Synchronize Microsoft Project with Classic PPM

Classic PPM now supports the following connectivity with Microsoft Project (MSP):
- Full bidirectional synchronization
- One-way import (BETA)
- Lightweight (BETA)
- Copy and paste

Changes in one application synchronize with the other. Synchronization enables you to work on the most current information in either application.

> [!WARNING]
> Do not open a project in Open Workbench while using Classic PPM. Due to the conflicting scheduling algorithms, your project might become corrupted or lost.

### Ownership

To ensure project consistency and data integrity, Classic PPM primarily owns the following elements:
- Project plans
- Resources who work on the projects and their financial attributes
- Project budget and costs
- Calendars
- Attribute default values

Microsoft Project, when used as a stand-alone project scheduling tool, also supports these elements. However, when you integrate the two applications, Classic PPM becomes the primary record for this information.

### Open a Project in Classic PPM

You can open a project in Classic PPM using one of the following methods:
- Open a project from the Project Properties.
- Go to **Microsoft Project** option, Task List page, and click **Open in Scheduler**.

### Open a Project in Microsoft Project

1. In Microsoft Project, click the **Integration** menu.
2. Click **Open Project**.

When you open a project in Microsoft Project, the following processes run:
- All mapped fields (standard and user-defined) are exported from the repository to Microsoft Project.
- The Staff is exported to populate the Resource Sheet in Microsoft Project.
- The .mpp file is stored in the Classic PPM database and named based on the Classic PPM project ID number (e.g., `pr001.mpp`).

### Update a Microsoft Project Plan Offline

****Follow these steps:****

1. In Classic PPM, open the project plan.
2. Save the project plan to your computer.
3. Open and update the .mpp file as required.
4. Save the updated .mpp file from the Classic PPM Integration tab.

### Lock and Unlock Projects

You can open a project from Classic PPM in Microsoft Project in the following modes:
- **Read-only mode** - A lock is not placed on the project. You can edit locally but cannot save changes to Classic PPM.
- **Read/write mode** - A lock is placed on the project, preventing other users from updating it.

**Follow these steps (to unlock):**

1. Save the open project to Classic PPM.
2. Close the project without saving it in Microsoft Project. The project is unlocked in Classic PPM.

You can also manually unlock from Classic PPM:

1. On the Projects page, click the project you want to open.
2. Click **Unlock**.

> [!NOTE]
> You must have view rights and the Application Setup right to lock and unlock projects.

### Set One Way Import From MSP to Clarity (BETA)

The one way import allows you to push tasks, address unanticipated changes, and provide a greater degree of control over your project plan.

****Follow these steps:****

1. Uninstall MSP, Clarity Schedule Connect, and Clarity Addin.
2. Log in to Classic PPM.
3. Navigate to **Account settings**, **Software Downloads**, click **MSP DOWNLOAD**.
4. Run the .exe file to install the latest version.
5. Navigate to **Objects**, **Projects**, select a project.
6. Open the project.
7. Navigate to **Properties**, **Settings**, **Scheduler**, click the drop-down, and select **Microsoft Project One-Way**.

### Lightweight Integration (BETA)

The lightweight integration lets you pass data only to the following attributes: Task Name, Start, Finish, % Complete, Predecessor, Successor, Milestone (flag).

****Follow these steps:****

1. Log in to Classic PPM.
2. Navigate to **Objects**, **Projects**, select a project.
3. Open the project.
4. Navigate to **Properties**, **Settings**, **Scheduler**, click the drop-down, and select **Microsoft Project Lightweight**.
5. Navigate to **Open in Scheduler**, select the relevant option.
6. Open the MPP file again from the Scheduler. The file is downloaded with the suffix `L` to the project ID.
7. If you make changes and save, the system saves the file with a new name.

> [!NOTE]
> If you save the lightweight file after making changes to it, the file is saved with a new name.

### Copy and Paste Project Tasks in MSP

You can copy and paste tasks in a Microsoft Project. Ensure that you save the file for the copy-paste to complete.

> [!NOTE]
> Before you copy the tasks from source project to destination project, initially copy and paste resources (from resources sheet) from source to destination to avoid resource not found errors.

### Set the Default Load Pattern Field

As an administrator, you can set the default load pattern. The recommended setting for the Default Load Pattern is **Uniform**.

> [!WARNING]
> Project Managers may prefer to use Front Load because they want their project to finish as soon as possible. However, Microsoft Project curve for front load distributes ETC to extend the duration of the tasks. Use careful consideration when choosing Fixed Loading pattern. Any ETC remaining for the week during the time period posted is discarded.

****Follow these steps:****

1. In Classic PPM, select **Administration**, **Project Management**, **Settings**.
2. In the General Area, select a default load pattern.

### Set the Default Mapping to Assignment Units

Administrators can map the Microsoft Assignment Units with the Clarity Assignment Max % Load field.

****Follow these steps:****

1. In Classic PPM, select **Administration**, **Project Management**, **Settings**.
2. Select the **MSP Assignment Units Mapping with Clarity Assignment Max % Load** check box.

> [!NOTE]
> The Max % Load in the resource sheet is based on the date on the allocation that corresponds to the project export date.

### Prepare Legacy Microsoft Project Plans for Import

Before you import a Microsoft Project plan into Classic PPM, complete the following steps:

1. In Microsoft Project, select **File**, **Properties**, **Summary** tab. Verify the Project Title name matches the Classic PPM project name.
2. Ensure that Master and Subproject links are removed.
3. Validate the task level information.
4. Perform a progress review of the tasks.
5. Review and reassign Microsoft Project user-defined fields.
6. Validate resource information.
7. Adjust the resource names.
8. Import the converted Microsoft Project project plan into Classic PPM.
9. Configure the project tracking and collaboration features as a post-import activity.

> [!NOTE]
> Validate the Tools and Settings options on the Microsoft Project client version and for the project plan.

### Save Mapped Fields Between Classic PPM and Microsoft Project

Mapped fields are updated in the Classic PPM database. For the fields that are not mapped, do one of the following:
- Ask your Classic PPM administrator to map the fields into Classic PPM.
- View the fields in Microsoft Project.

> [!WARNING]
> We strongly recommend that you only map the additional fields that are necessary for the project manager to see or use in Microsoft Project. Adding additional fields to the map increases the processing effort of the interface.

### Default Field Mapping

The following tables display the out-of-the-box fields that are mapped between Classic PPM and Microsoft Project.

#### Resource_Team

| Classic PPM Table: Field | Microsoft Project Field | Type | Notes |
|---|---|---|---|
| SRM_RESOURCES: UNIQUE_NAME | Initials | Text (32) | Finds the corresponding resource in Classic PPM while saving the project. |
| SRM_RESOURCES: EMAIL | Email | Text (255) | None |
| SRM_RESOURCES: LAST_NAME | Resource Name | Text (30) | Concatenated last and first name without commas for labor resources. |
| SRM_RESOURCES: FIRST_NAME | Resource Name | Text (30) | Name of the role and non-labor resources in Classic PPM. |
| SRM_RESOURCES: RESOURCE_TYPE | Resource Type, Text3, Group | Settings | Default mapping is Material for non-labor resources. PRUID must be mapped. |
| PRJ_RESOURCES: PRAVAILCURVE | Resource Availability | Binary | Combined with resource-to-project allocation while opening in MSP. |
| PRJ_RESOURCES: PRCALENDARID | Working Time | Text (32) | The resource calendar reflected in the Base Calendar field. Only for labor resources. |
| PRJ_RESOURCES: PRISROLE | None | - | Mapped to generic resource. |
| PRTeam: PRALLOCCURVE | Resource Availability | Binary | Combined with resource availability while opening in MSP. |
| PRTeam: PRAVAILSTART | None | Time | Set to the earliest date of the resource in MSP when saving. |

#### Project0

**Project Object fields:**

| Classic PPM Table: Field | Microsoft Project Field | Type | Notes |
|---|---|---|---|
| INV_INVESTMENTS: NAME | Project Properties / Title | Text (80) | None |
| INV_INVESTMENTS: CODE | Text1 | Text (20) | Default mapping, can be changed. |
| INV_PROJECTS: PRUID | Text3 | Text (32) | Do not change the value in MSP. |
| INV_PROJECTS: PRGUIDELINES | Project Properties / Hyperlink base | Text (254) | None |
| INV_PROJECTS: PRDEPARTMENT | Project Properties / Company | Text (32) | None |
| INV_PROJECTS: PRVERSION | Custom property / prVersion | Short | Internal use only. |

**Scheduling Properties fields:**

| Classic PPM Table: Field | Microsoft Project Field | Type | Notes |
|---|---|---|---|
| INV_PROJECTS: SCHEDULE_START | Project Information / Start date | Time | None |
| INV_PROJECTS: PRASOF | Project Information / Status date | Time | If As of Date in Classic PPM is blank, existing value is retained. |
| INV_PROJECTS: SCHEDULE_FINISH | Project Information / Finish date | Time | None |
| INV_PROJECTS: CHARGECODEID | No default mapping | Long | Enter the name of an existing charge code from Classic PPM. |

**Project Object additional fields:**

| Classic PPM Table: Field | Microsoft Project Field | Type | Notes |
|---|---|---|---|
| INV_PROJECTS: PRFORMAT | None | Short | If format is not supported in MSP, a warning message appears. |
| INV_PROJECTS: PRPRIORITY | Project Information / Priority | Short | Priorities translated between range (0-1000) in MSP and range (36-0) in Classic PPM. |
| INV_INVESTMENTS: MANAGER_ID | File Properties / Manager | Numeric | The user name of the manager is retrieved when opening. Not saved to Classic PPM. |
| INV_PROJECTS: PRSTARTIMPOSED / PRFINISHIMPOSED | Project Information / Scheduling direction | Boolean | If displayed, Schedule From is set to Start Date; otherwise, Finish Date. |
| PRJ_BASELINE_DETAILS: START_DATE | Baseline Start | Time | None |
| PRJ_BASELINE_DETAILS: FINISH_DATE | Baseline Finish | Time | None |

#### Task_Subproject

| Classic PPM Table: Field | Microsoft Project Field | Type | Notes |
|---|---|---|---|
| PRTask: PRUID | Text3 | Text (32) | Default mapping. Do not change value in MSP. |
| PRTask: PRNAME | Name | Text (64) | prName must be entered in all lowercase characters. |
| PRTask: PREXTERNALID | Text1 | Text (16) | Default mapping, can be changed. |
| PRTask: PRISMILESTONE | Milestone | Boolean | None |
| PRTask: PRPRIORITY | Priority | Short | Priorities translated between range (0-1000) in MSP and range (36-0) in Classic PPM. |
| PRTask: PRSTART | Start | Time | None |
| PRTask: PRFINISH | Finish | Time | None |
| PRTask: PRDURATION | Duration | Double | Shown according to units set in Duration in MSP. |
| PRTask: PRISFIXED | Task Type | Boolean | Fixed duration set to True in MSP. Both fixed unit and fixed work are set to False. |
| PRJ_BASELINE_DETAILS: START_DATE | Baseline Start | Time | Requires Modify Baseline right. |
| PRJ_BASELINE_DETAILS: FINISH_DATE | Baseline Finish | Time | Requires Modify Baseline right. |
| PRTask: PRSTATUS | % Complete | Short | Task status set based on % complete value when saving. |
| PRTask: PRPCTCOMPLETE | % Complete | Double | Physical % complete field is not mapped in MSP. |
| PRTask: PRWBSLEVEL | Outline Level | Short | Represents the outline structure of the WBS. |
| PRTask: PRWBSSEQUENCE | ID | Short | Describes the order of the tasks in the WBS. |
| PRTask: PRISTASK | Summary | Boolean | Set to Yes when PRISTASK is False; No when PRISTASK is True. |
| PRTask: PRISKEY | Flag1 | Boolean | Identifies a WBS item as a key item. |
| PRTask: PRCHARGECODEID | Not mapped by default | Long | Enter an existing charge code from Classic PPM. |
| PRSubproject: PRISREADONLY | Subproject Read Only | Boolean | None |

#### Assignment

| Classic PPM Table: Field | Microsoft Project Field | Type | Notes |
|---|---|---|---|
| PRAssignment: PRUID | Text3 | Text (32) | Internal use only. Do not change value in MSP. |
| PRAssignment: PRESTMAX | Units | Double | Value set for non-contoured assignments of labor resources to non-fixed tasks. |
| PRAssignment: PRPENDESTSUM | User-defined number field | Double | When saving: if Track Mode is not None, value is set to -1. When -1 is saved, Pending Estimates are cleared. |
| PRAssignment: PRPENDACTSUM | User-defined number field | Settings | If Track Mode is None, Pending Actuals are mapped to MSP. Blank Pending Actuals are represented by -1. |
| PRAssignment: PRACTSUM | None | Double | Total actual work for the assignment. Updated when Track Mode is None. |
| PRAssignment: PRESTSUM | None | Double | Total remaining work for the assignment. Updated when saving to Classic PPM. |
| PRAssignment: PRACTCURVE | Actual Work | Binary | Only set if Track Mode is None. |
| PRAssignment: PRESTCURVE | Work | Binary | Represents actual work and remaining work from Classic PPM. |
| PRJ_BASELINE_DETAILS: USAGE_SUM | Baseline Work | Double | Total baseline work for the assignment. |
| PRJ_BASELINE_DETAILS: USAGE | Baseline Work | Binary | Requires Modify Baseline right. |

#### Other Fields

| Classic PPM Table: Field | Microsoft Project Field | Type | Notes |
|---|---|---|---|
| PRDependency: PRTYPE | Type | Short | None |
| PRDependency: PRAMOUNT | Lag | Double | Non-daily lags converted to daily amounts when saving. |
| PRDependency: PRAMOUNTTYPE | Lag | Short | Lag units set to days; elapsed time distinction is ignored. Percent lags are supported. |
| PRConstraint: PRTYPE | Constraint Type | Short | If multiple constraints exist, only one is mapped in the following priority: Must Finish On, Start No Later Than, Must Start On, Finish No Later, Finish No Earlier Than, Start No Earlier Than. |
| PRConstraint: PRTIME | Constraint Date | Time | None |
| PRNote: PRCREATEDBY | Notes | Text (32) | Set to the name of the current user when saving. |
| PRNote: PRVALUE | Notes | Memo | Multiple notes concatenated into a single Notes field with an "Add new note(s)" tag. |
| PRCalendar: PRNAME | None | Text (32) | Appears as "For" in the Change Working Time dialog. Not used for resource calendars. |
| PRCalendar: PRBASECALENDARID | Base Calendar | Long | Only resource calendars have base calendars in MSP. |
| PRCalendar / PRSite settings | See Comment | Setting | Calendar information reflected in the Change Working Time dialog. Standard calendar updated by Classic PPM settings. |

### Roles Field and Mapping Considerations

The Classic PPM Role field, with the name resource field, is mapped to the Microsoft Project resource name field. Use a unique naming convention for the roles within an organization.

> [!NOTE]
> A name cannot be longer than 27 characters. Even though the maximum character length supported for mapping is 32 characters.

The following table describes a sample resource ID naming convention (27 characters max):

| Component | Max Characters | Example |
|---|---|---|
| Entity Level 3 Digits | 3 | RBC |
| SPACE | 1 | - |
| Role Group | 19 | Analysts |
| (Employee or Contractor) + Country | 3 | EUS |
| **Total** | **27** | **RBC Analysts EUS** |

> [!NOTE]
> A name can be added multiple times, but a named resource can be added only once. When a role of the same type has multiple entries, a unique five-character extension is appended. To avoid system errors with IDs exceeding 32 characters, ensure each resource ID is no greater than 27 characters.

---

## MSP: Project Integration with Classic PPM

Integrate Classic PPM and Microsoft Project to manage aggregated projects, master projects, subprojects, and baselines.

### Save a Project to Classic PPM

****Follow these steps:****

1. Open a project.
2. Click the **File** menu.
3. Click **Save** in the Classic PPM Integration menu.
4. (Optional) Click **Save As** to save the project as a new file. Enter a unique identifier in the **Project ID** field.
5. Select the **Tracked** check box to enable track mode in Classic PPM. To preserve actual hours entered in MSP, do not select the Tracked check box.
6. Click **OK**.

### Open a Project Plan Offline

****Follow these steps:****

1. Click the **File** menu and select **Save** (not the Classic PPM Integration menu Save).
2. Exit Microsoft Project. The "Do you wish to retain the lock on <project name>" dialog appears.
3. Click **Yes** to prevent other users from editing the project.
4. Click **Save** from the Classic PPM Integration menu after you complete your offline edits.
5. Open the plan and verify changes from Classic PPM in Microsoft Project.

> [!NOTE]
> Do not save using the Save option from the Classic PPM Integration menu when saving locally.

### Manage Aggregated Projects

Both Classic PPM and Microsoft Project support the creation of master projects and subprojects. Classic PPM also supports portfolios and programs.
- **Project** - Tracks tasks, staff, forecast, budgets, actual work effort, costs, risks, issues, and change requests.
- **Program** - Identifies related projects and provides a top-down view.
- **Master project and Subproject** - A master project acts as a reference to subprojects. You can view combined actuals and ETC, establish subproject links, and analyze at the master project level.
- **Portfolio** - A collection of investments sharing a common budget. Used for scenario modeling and high-level reporting.

#### Aggregation Guidelines
- **Program** - Use for low-level detailed project metrics and rolled-up reporting.
- **Master and Subproject** - Use when grouping projects with a scheduled relationship.
- **Portfolio** - Use for scenario modeling and high-level rolled-up reporting.

The following table describes the attributes of programs and master projects:

| Attribute | Program | Master Project | Regular Project |
|---|---|---|---|
| Display sum of values from subprojects | Yes | No | Not Applicable |
| Assign staff members | No | Yes | Yes |
| View a consolidated list of staff members | Yes | No (only shows master project staff) | Not Applicable |
| Add participants in Collaboration | Yes | Yes | Yes |
| Create and apply a WBS | No | Yes | Yes |
| View a collective WBS across all projects in Gantt View | Yes | Yes | Not Applicable |

## Programs, Master Projects, and Regular Projects Comparison

The following table compares the attributes and capabilities of Programs, Master Projects, and Regular Projects:

| Attribute | Program | Master Project | Regular Project | Comments |
|---|---|---|---|---|
| Create Tasks | Milestones only | Yes | Yes | You can add key milestones to programs, but you cannot add key tasks or task estimates. |
| Use Planning features | Yes | Yes | Yes | You can create budgets and forecasts for programs and projects. |
| Display consolidated information across grouped projects | Yes | Yes | Not Applicable | The Program Dashboard view consolidates the data from across the multiple associated projects. |
| Financially enable or enable cost tracking from timesheets | No | Yes | Yes | A program cannot be financially enabled. |
| Connect to Scheduling Tools (Open Workbench and Microsoft Project) | Read-only | Read/Write | Read/Write | The program does not contain tasks of its own. You can view a program as read-only in Open Workbench and Microsoft Project. |
| Auto-schedule across all related projects | No | Yes | Yes | The key functional difference between a Program (cannot Autoschedule) and a Master/subproject. |
| Baseline across all grouped projects | Yes | Yes | Yes | No comments. |
| Displays a consolidated view of all grouped projects | Yes | Yes | Not Applicable | No comments. |

> [!NOTE]
> You can view the combined actuals and effort for all of the projects in a program. Not available from master projects.

> [!NOTE]
> The staff list that appears on a program is readonly and aggregated from the subprojects. You cannot edit this list. You can add participants to programs, master projects, and subprojects.

> [!NOTE]
> You cannot staff or add non-milestone tasks to programs, so you cannot create and apply a WBS to programs.

## Manage Master Projects Using Classic PPM

You can create a master project and configure it with subprojects in Classic PPM.

**Follow these steps:**

1. Create a project in Classic PPM. The new project is the master project and acts like a framework. Do not staff resources to the project team, create tasks, or track actuals to this master project.
2. Create subprojects in Classic PPM. The subprojects are the working projects. You can staff resources to the project team, create tasks, or track actuals to this master project.
3. After the subprojects are created, add them to the master project.

> [!NOTE]
> When you open a master project in Microsoft Project, all related subprojects also open.

## Microsoft Project Shared Resource Pool Project

With the legacy Microsoft Project Interface, you can have a shared resource pool project. When you open a master project in Microsoft Project, the subprojects are opened and linked to the master project. A shared resource pool project is created locally when resources are shared across multiple projects.

**Example:** Shared Resource Pool Project: `<project name>_pool.mpp`

This shared resource pool project allows the master project to share its resources with its subprojects. The shared resource pool is associated with the master project and opens only when you open the master project. When you save a master project in Microsoft Project back to Classic PPM, all project teams update with the resources from the shared resource pool. The subprojects must be read/write.

> [!NOTE]
> The Microsoft Project Interface (updated version) integrates resources that are shared across multiple projects through the master project resource sheet.

### Resource Sharing
- When you open a master project for the first time, the resources from all subprojects are merged into the master project resource sheet.
- You can open a subproject independently without opening the related master project and the sibling subprojects.
- When you save a master project back to Classic PPM, all project teams are maintained on their respective projects.
- When you save a master project back to Classic PPM, the master project does not save the team list to Classic PPM. In this case, the master project is saved to your computer. You can save a local copy of the master project to your computer using the **Save** option from the **Tools** menu.
- When you open a master project in Microsoft Project, the related subprojects open and link themselves to the master project.
- If there are no assignments for a team member, the team member is removed from the subproject when you save the subproject in Classic PPM.

## Export a Baseline

A baseline shows a snapshot of the entire project plan. When you export a current baseline revision to a MPP file from Classic PPM, a snapshot of the project is exported. Downloading a baseline for a large project might take several minutes. The application can support unlimited baselines, but Microsoft Project supports only 11 baselines. Classic PPM has integration business rules to manage and download the 11 baselines from Microsoft. The time that is required to export a project to Microsoft Project increases with each additional baseline.

Multiple baselines are managed by saving each revision in one of the 11 baseline slots in the MPP file. For example, the information for the current revision is saved to the baseline slot. The previous baseline revision is saved to the baseline 1 slot and the last baseline revision is saved to baseline 10 slot. A maximum of 11 baseline revisions are sent in a descending order by the last modified date. The baseline field without an appended number is marked as the current revision.

Information about each of the 11 baseline revisions is saved to the MPP file:
- The current revision is used to update the project plan baseline information. Any remaining baseline revisions are used to update the project plan other baseline slots (that is, baseline through baseline10) in the order that they are received.
- If the project in Microsoft Project has baseline information for which there is no matching revision information, that baseline is cleared.
- If no baseline revisions are sent, all baseline information in the MPP file is cleared in Microsoft Project.

We recommend that you download only the current baseline revision to Microsoft Project. The download current baseline setting impacts all users and all projects.

**Follow these steps:**

1. Select **Project Management Settings** in Classic PPM.
2. Click **Administration**.
3. Select the **Only Export Current Baselines When Opening Investments in a Scheduler** check box.

When saving the project to Classic PPM, Schedule Connect checks each possible baseline slot in the project. Classic PPM verification starts with the baseline slot and ends with the baseline10 slot.
- If a baseline slot has information, the revision information from the MPP file is sent to Classic PPM.
- If no information is available from a baseline slot from the MPP file, the revision is considered new. The default ID, name, and description of the baseline are used for the revision. For example, the information is from the baseline3 slot. The number 3 is appended to the default ID, name, and description.

> [!NOTE]
> If the MPP file contains information for a revision that has an empty baseline slot, Schedule Connect sends the revised information to Classic PPM. A Delete flag tells Classic PPM to delete the baseline revision.

Classic PPM does not support creating a partial baseline of tasks. You can update an existing baseline by baselining only the new tasks in Classic PPM or Microsoft Project when an initial baseline exists. As a best practice, update only the new tasks.

### Save Master Project Baselines in Microsoft Project

If you are using Classic PPM with Microsoft Project and creating multiple baselines for a master project, a baseline (Baseline1) is created for the master project and its subprojects. When you save the master project back to Classic PPM, the baseline information for the master includes the values from the subprojects. For example, a master project has a task with five hours of ETC, and its two subprojects have a task with ten hours ETC each. When you save the project back to Classic PPM, the master project baseline usage is 25 hours.

1. Open a project in Microsoft Project.
2. Navigate to **Tools**, **Tracking**, and select **Save Baseline** from the menu. For more information, see the Microsoft Project online help documentation.

### Open Subprojects in Microsoft Project

You can insert Classic PPM projects as subprojects into a project that you have open in Microsoft Project (MSP). Subprojects open as read/write or read-only depending on how you opened the master project from Classic PPM. The read/write status for each of the subprojects also determines how they open.

> [!NOTE]
> Use care when linking subprojects to multiple master projects. You can reference subprojects many times from different projects.

When you open a subproject from Classic PPM in Microsoft Project, you open it as read/write or read-only. The access depends on how you open the master project and the read/write status for each of the subprojects. Subprojects that you open as independent projects open without any associations to their master projects or shared resource pools. Opening a subproject and linking it to its master projects creates a shared resource pool project to share resources across multiple projects.

When you open a project in read-only mode, subprojects opened with it are loaded as separate MPP files and are also opened in Classic PPM in read-only mode. If the subproject is already open, it remains open in read/write mode with any of its subprojects.

> [!NOTE]
> You can update read/write master projects and subprojects, and link master projects to other master projects from different computers.

### Save Subprojects in Microsoft Project

You can save a subproject that you have open in read/write mode by saving the master project in Microsoft Project back to Classic PPM. The following conditions are verified before a subproject is saved:
- The subproject exists in Classic PPM. If it does not exist, you cannot update or create the project.
- You have sufficient access rights to update a subproject open in read/write mode. If you do not have sufficient access rights, you cannot update the referenced subprojects.
- The subproject is locked. If it is not locked, you cannot update the project.
- The subproject version in Microsoft Project matches the version in Classic PPM. If it does not match, you cannot update the project because newer versions of the subproject exist in Classic PPM. You cannot force a save on subprojects.
- The resource or charge code exists in Classic PPM. If it does not exist, you cannot update the project.

### Access Rights and Subproject Locks in Microsoft Project

Access rights and locks control subproject access. When you open a master project from Classic PPM in Microsoft Project, the access rights and locks are verified in all subprojects. The following information is verified:
- **Insufficient access rights to open the subproject as read-only.** If you do not have sufficient rights to the subprojects, you cannot open a master project. You are informed that you have insufficient rights to the subprojects.
- **Insufficient access rights to open the subproject as read/write, but sufficient access rights to open it as read-only.** If you try to open a master with subprojects as read/write when you only have read-only access rights, you are informed. If you have sufficient access rights, you can open the subprojects as read-only.
- **Unable to acquire a lock because another user locked the project.** If you open a master project with subprojects (locked by another user) as read/write, you are informed and can open them as read-only.
- **Unable to acquire a lock because the project is already locked.** If you open a master with subprojects (that you have locked) as read/write, you are prompted to reacquire the lock. You must also roll back the projects to their current versions in Classic PPM.

> [!NOTE]
> If you have the subproject already open as read/write in Microsoft Project, this version is used instead of opening another version from Classic PPM.

## MSP: Resource Integration with Classic PPM

The integration of Classic PPM and Microsoft Project (MSP) includes some resource management functions. Classic PPM is the single source of record for all project resources. Use Classic PPM to create, configure, and update resource names, IDs, calendars, access rights, and other information.

Do not create resources in Microsoft Project and attempt to upload them into Classic PPM. Make any resource changes in Classic PPM and not in Microsoft Project.

> [!TIP]
> To create user accounts for resources as an administrator, see Configure Secure Authentication, User Accounts, and Passwords. To create resource profiles for users as a project manager or resource manager, see Resource Management.

This section covers:
- Resource, Assignment, and Allocation Field Mappings
- Assign a Resource to a Microsoft Project Team
- Assign a Resource to a Microsoft Project Task
- Delete Tasks in Master Projects

### Resource, Assignment, and Allocation Field Mappings

> [!WARNING]
> Specific common fields act as primary key fields in the integration. Do not change any values in these reserved common resource fields. Changing reserved field values can adversely affect version control, project saving, and reporting.

The following table shows the mapping between the Microsoft Project and Classic PPM resource fields:

| Microsoft Project Field | Classic PPM Field |
|---|---|
| Resource Name | Resource first and last name |
| Initials | Resource ID |
| Text3 | Unique ID for the resource |
| Text5 | Resource or Role Assignment |
| Email | Email Address |

The following table shows the mapping between the Microsoft Project and Classic PPM resource assignment fields:

| Microsoft Project Field | Classic PPM Field |
|---|---|
| Text 3 | Assignment ID (unique) |
| Number1 | Resource task Pending Estimate. When no Pending Estimates value is available, the value of this field is -1. |
| Number2 | Resource task Pending Actuals. When no Pending Actuals value is available, the value of this field is -1. |

Classic PPM and Microsoft Project support the project management practices as endorsed by the Project Management Institute (PMI). Classic PPM and Microsoft Project have adopted different terms for some common concepts such as Work/Usage or Remaining Work/Estimate to Complete. Understand both terms when interpreting the same information in both applications.

The following table shows the mapping between the Microsoft Project and Classic PPM resource allocation fields:

| Microsoft Project Term | Classic PPM Term | Meaning |
|---|---|---|
| Max % | Project Allocation | Units represent the quantity of a resource that is assigned to a project. For example, a resource is available 8 hours each day. The resource allocation to a project is 100 percent. In this situation, Max % equals 100. The resource spends each full day on that particular project. A Max Units value of 25 percent means that the resource spends two hours of an eight-hour day on that project. |
| Units | Task Assignment | This field is a subset of Max Units. Units represent the quantity of a resource that is assigned to a task. A value of 100 percent indicates that the resource is using all its Max Units on that assignment. A value of 50 percent indicates that half of the resource allocation for the project is applied to that task. |

> [!NOTE]
> You staff a resource to a project team; you assign a resource to a task.

### Assign a Resource to a Microsoft Project Team

You can staff a project in either Classic PPM or Microsoft Project. However, because Classic PPM is easy to use and has rich filtering capabilities, we recommend that you use the Classic PPM **Team** tab. Classic PPM offers flexibility and filtered search capabilities when you staff a resource.

**Follow these steps:**

1. Open a project or investment in Classic PPM.
2. Click the **Team** tab.
3. Click the **Add** button to search for a resource.

The following steps apply if you prefer to staff a resource from Microsoft Project:

1. Click the **Classic PPM Integration** menu bar.
2. Select the **Browse Resources** button. The Classic PPM resource list appears, sorted by role.

> [!NOTE]
> The **Available Resources/Roles** column only shows those resources and roles to which you have booking rights.

3. Select a resource by role.
- You can add any Classic PPM resource or role to which you have access rights to hard or soft book to a project open in Microsoft Project.
- When you add a resource using Schedule Connect, the resources are allocated to the tasks manually.
- When you add a resource to the project, the resource information is downloaded from Classic PPM.
- The resource is allocated 100 percent to the project as if the resource were staffed in Classic PPM.
4. You can modify the resource availability in the project and implicitly change the allocation to another value.
5. To add a resource to a project in Microsoft Project, create a resource and enter the ID in the **Initials** field.
- The resource ID must match the resource ID in Classic PPM.
- The remaining resource attributes are set to match the Classic PPM information when you save and reopen the project in Classic PPM.
6. To save the project to Classic PPM, the resource must exist in the product.

### Assign a Resource to a Microsoft Project Task

You can assign resources to tasks from Classic PPM or from Microsoft Project (MSP). In Classic PPM, you can assign resources to tasks in the work breakdown structure (WBS) in the Gantt view. The resource assignments that you create default to the default resource load pattern. Your Classic PPM administrator can define this option using the **Default Load Pattern** field, which is a default project management setting.

When you assign resources to a fully developed plan, you can balance the workload. Resource-leveling is a Microsoft Project solution to balance the workload. Task schedules are shifted without changing task durations or the distribution of work. You can choose to not use resource leveling and manually reassign work by modifying the model.

When you open a Classic PPM project in Microsoft Project, your settings determine the resulting actions.

When you set the load pattern to **Contoured** in Classic PPM, the work contour in Microsoft Project is set to **Flat** in these situations:
- The assignment is created by completing the following tasks:
- Defining a task resource column with a resource in a manner that follows Classic PPM business rules.
- Saving or using the **Assign Resources** button.
- You open the project in Microsoft Project for the first time.

If the assignment exists (previously opened in Microsoft Project and saved to Classic PPM), the work contour in Microsoft Project does not change.

When the assignment is a split task (with a gap between the end of the actual work and the start of the remaining work) and the load pattern is Contoured, the settings of the following fields on the Microsoft Project Options dialog determine how the work contour is set in Microsoft Project:
- The **Updating Task Status Updates Resource Status** check box in the **Calculation** menu.
- The **Split In-progress Tasks** check box in the **Schedule** tab.

The following table illustrates how work contour is set:

| Updating Task Status Updates Resource Status | Split In-progress Tasks | Work Contour set to |
|---|---|---|
| Selected | Not Selected | Contoured |
| Selected | Selected | Flat |
| Not Selected | Not Selected | Flat |
| Not Selected | Selected | Flat |

> [!NOTE]
> If the project Track Mode field in Classic PPM is set to Clarity or Other, the **Updating Task Status Updates Resource Status** check box is cleared. This action happens regardless of the user settings in Microsoft Project.

**Example: Front-loaded Assignment**

You create a Front-loaded assignment in Classic PPM with 40 hours on a five-day task. Classic PPM schedules that work as full-time over those five days. Microsoft Project schedules those 40 hours over 8.33 days.

**Example: Uniformly Assigned Resource**

You assign a resource uniformly to a five-day task in Classic PPM and then change the task duration to ten days. The rate of work is reduced to half-time, retaining the total amount of work. Microsoft Project reschedules this change as full-time, shortening the task back to five days.

### Delete Tasks in Master Projects

When you delete master project tasks, the integration removes unassigned staff members from the resource pool (the staff list on the master project) when saving to Clarity. The interface cannot determine which projects the resources in the MSP resource pool belong to without assignments; they are all lumped together in one resource pool.

The following example illustrates this behavior:

1. Create a master project with a scheduler setting of Microsoft Project.
2. Add at least two resources on the **Team** tab and create two tasks.
3. (Optional) You can assign resources to the tasks; however, you already have two resources added to the project on the **Team** tab.
4. Navigate to the **Hierarchy** tab and add a child project.
5. Return to the **Task** tab and open the master project in MSP [Read-Write].
6. Select all the tasks for the master project and delete them.
7. Save the master project back to Clarity.
8. Open the **Team** tab and click **Show All**. The application deleted the resources on the Team tab of the master project when you deleted the tasks in MSP.

## MSP: Task Integration with Classic PPM

This article explores task terms and reserved fields in Classic PPM environments that are integrated with Microsoft Project (MSP). Use this article to learn about time tracking, completing tasks, and loading patterns and contours. This article also covers milestones, durations, actual hours, fixed work tasks, and resource task assignments.

This section covers:
- Task Terms and Reserved Fields
- Work, Units, and Duration (WUD)
- An Update to Task Status Also Updates Resource Status
- New Microsoft Project Task Type Attribute
- Turn Off Time Tracking at the Task Level
- Update a Task to Complete
- Loading Patterns and Contours
- Configure a Microsoft Project Milestone
- Copy and Paste Tasks
- Manage Actual Hours for Time Tracking
- Actual Hours Considerations
- Add Actual Hours Directly into Microsoft Project
- Task, Summary Task, and Milestone Configurations
- Resource Task Assignments and Start and Finish Dates

### Task Terms and Reserved Fields

Classic PPM and Microsoft Project support the Project Management Institute (PMI) methodologies for effective project management practices. Each application adopted different terminologies for common concepts such as work or usage, remaining work or estimate-to-complete (ETC). Learn both terms to interpret the same information in Classic PPM and Microsoft Project. For example, as a project manager, you want to know how much time a resource has to work on a task. Then, you can see the remaining work field in Microsoft Project and the ETC field in Classic PPM.

| MSP Term | Clarity Term | Description |
|---|---|---|
| Work (Remaining Work + Actual Work) | Total Usage (ETC + Actuals) | Work is the total amount of effort that is scheduled to be performed on a task in the specified duration of all assigned resources. |
| Remaining Work | Estimate-to-Complete (ETC) | The estimated remaining hours that is required to complete the task. |
| Actual Work | Actuals | The actual hours reported and posted by the team. |
| Max Units | Project Allocation | Units represent the quantity of a resource that is assigned to a project. For example, a resource has a daily availability of 8 hours. If the resource is allocated to a project for 100% or Max Units of the resource equals to 1, this means the resource spends a full day on that particular project. When the Max units of the resource is 25%, the resource spends 2 hours, out of total 8 hours per day on that project. |
| Assignment Units | Max % Load | Units represent the quantity of a resource assigned to a task. This is a subset of Max Units. For example, a value of 100% indicates that the resource is using all of the Max Units on that particular resource assignment. A value of 50% indicates that half of the resource's Project Allocation is applied to that task. |
| Duration | Duration | Classic PPM Definition: Calculates the number of business days inclusive of the Start Date and the Finish Date. Regardless of whether a split may or may not be located during the task. Microsoft Project Definition: Calculates the duration of a task by counting the amount of active working time between the scheduled start and end of the task. |
| % Complete | % Complete | You should manually specify the % Complete in Microsoft Project and Classic PPM. |
| % Work Complete | % Expended | Microsoft Project calculates this field as: Actuals / Total Work. Classic PPM calculates this field as: Actuals / Usage. |
| Type (Task Level) | Variable / Fixed Duration Boolean | Microsoft Project includes the following task types: Fixed Work, Fixed Units, Fixed Duration. In Microsoft Project, Work = Units * Duration. |
| Split task | Split task | Microsoft Project and Classic PPM share the same term. However, they differ in how they create the split. |

Common project task fields that are typically used by a project manager are reserved for the integration.

> [!WARNING]
> These common fields act as primary key fields in the integration. Do not change any values in these reserved common resource fields. The following negative impacts can occur if you change the values in these reserved fields:
> - A breakdown in version control
> - Inability to save the project in Classic PPM
> - Incorrect reporting out of Classic PPM

The following table shows the mapping between the Microsoft Project and Classic PPM project fields:

| MSP Field | Clarity Field |
|---|---|
| File Menu / Properties / Summary tab / Title field | Project Name |
| File Menu / Properties / Custom tab / Properties fields (`prversion` and `prUID`) | Version and Project ID. Reserved project properties. |
| Text1 | Task ID (WBS Number) |
| Text2 | Guidelines URL passed to Microsoft Project |
| Text3 | Unique Task ID |
| Flag1 | Indicates a Key Task in Classic PPM |

### Work, Units, and Duration (WUD)

WUD is an acronym that is derived from the following equation:

**Work = Units x Duration**

When you update one of these three fields, Microsoft Project recalculates the equation. So, given the equation: 40 hours work = 100% units x 5 days duration. When the project manager updates the duration to be 10 days by entering 10 in the duration field and then clicks out of that field, Microsoft Project will automatically update Work to equal 80 hours.

Things begin to go wrong for the unknowing project manager when he changes a value that is marked as the Fixed task type for that task. Is the word "fixed" a misnomer? Microsoft Project supports three task types: Fixed Work, Fixed Unit, and Fixed Duration. Although the word fixed is used, Microsoft Project permits the project manager to overwrite the value in the fixed field.

The duration is also fixed at the assignment level. It is possible to have one assignment start one week, and a second assignment start during a second week. Each assignment has a 5 day duration, but the overall task duration is 10 days.

> [!TIP]
> This section discusses important default Microsoft Project functionality. Interestingly, many Microsoft Project users have never learned the features discussed in this section. They report experiencing many frustrating hours with Microsoft Project while trying to reconcile their project plans.

The following table shows the values that Microsoft Project calculates. Microsoft Project updates the asterisked (*) fields when you change their fixed values. We recommend that you create a standalone MSP project plan that has a Fixed Work, Fixed Duration, and Fixed Units task type and become familiar with these calculations.

| Task Type | When You Change Fixed Units | When You Change Fixed Duration | When You Change Fixed Work |
|---|---|---|---|
| Duration | Work* | Duration* | Units |
| Work | Work | Units | Duration* |
| Units | Duration* | Work | Duration |
- In a **Fixed Duration** task, Microsoft Project recalculates Work when you overwrite the Fixed Duration value.
- In a **Fixed Work** task, Microsoft Project recalculates Duration when you overwrite the Fixed Work value.
- In a **Fixed Units** task, Microsoft Project recalculates Duration when you overwrite the Fixed Units value.

### An Update to Task Status Also Updates Resource Status

The **Updating task status updates resource status** feature in Microsoft Project automatically updates the status of projects. For example, you type 25% in the **% Complete** field for a 40-hour task. Microsoft Project automatically shows 10 hours of actuals in the **Actual Work** field. The program also decreases the **Remaining Work** field to 30 hours.

This behavior can introduce an issue when Microsoft Project is integrated with Classic PPM. When the Classic PPM time sheets are enabled (Track Mode = Clarity), Classic PPM becomes the owner of actual hours. Actual hours in the Microsoft Project project plan are not honored and are dropped when you save the project to Classic PPM.

> [!NOTE]
> No error message appears to indicate that the actual hours are dropped during the save. As a project manager, be aware of this behavior.

If this setting is enabled, the unknowing project manager might update the Microsoft Project **% Complete** field. Microsoft Project creates actual hours in the project plan which are then dropped upon saving to Classic PPM. If you open the project in Microsoft Project, the following can occur:
- Actual hours disappear from the plan
- The decremented Remaining Work field shows the reduced value
- Task dates are rescheduled
- If a rescheduled task is on the critical path, the project finish date might shift

To avoid this situation:
- Uncheck the **Update Task Status Updates Resource Status** field in the **Tools > Options > Calculate** tab.
- If you must use this field, only use it when the project's Track Mode = None.

### New Microsoft Project Task Type Attribute

In Clarity 15.5 and higher, you can indicate how a task is mapped to the Microsoft Project task type value. Clarity 15.5 and newer releases include a new task attribute named **Microsoft Project Task Type** that represents the Microsoft Project task type. The new attribute derives its value from one of the following lookup values:
- 0 - Fixed Units
- 1 - Fixed Duration
- 2 - Fixed Work

The new **Microsoft Project Task Type** (`msp_task_type`) attribute is supported by the Clarity integration with Microsoft Project and is available in Classic PPM, Clarity, Microsoft Project, and the XOG.

In previous releases, Microsoft Project task type values were lost when converting from the legacy driver to the new XML driver and Clarity was not aware of MSP task types. In 15.5 and newer releases, when using the new MSP driver to open an existing file saved in the legacy MSP format, the MSP task types are read from the saved file and merged into the new file. When the new file is saved back into PPM, the MSP task types are copied into Clarity and saved in the new Microsoft Project Task Type attribute using new synchronization rules.

Any legacy task type values are preserved after an upgrade. A project saved to Clarity with the legacy OLE driver can be opened with the new XML driver with the original task types intact.

**Example:**

1. Create a project in Clarity 15.4.1 or older with the legacy driver, before you upgrade to 15.5 or newer.
2. Create three tasks and configure the task type on the Task list page.
   a. Set Task1 `msp_task_type` to Fixed Duration.
   b. Set Task2 `msp_task_type` to Fixed Units.
   c. Set Task3 `msp_task_type` to Fixed Work.
3. Open the project with your legacy driver.
   a. Task1 should have type Fixed Duration.
   b. Task2 should have type Fixed Units.
   c. Task3 should have type Fixed Work.
4. Open the same project in Microsoft Project with the new driver after an upgrade to Clarity 15.5 or newer:
   a. Task1 still shows Fixed Duration.
   b. Task2 still shows Fixed Units.
   c. Task3 still shows Fixed Work.

#### MSP Task Type Behavior

Before Clarity 15.5, the application supported two different task types: Fixed Duration and Non-Fixed Duration. Whether a task is Fixed Duration or not was indicated using a Boolean attribute (`prIsFixed`) on the Task object in PPM. Microsoft Project supports three (3) task types: Fixed Duration, Fixed Work, and Fixed Units which correspond to the schedule, cost, and scope dimensions, respectively.

To resolve the mapping, Clarity 15.5 and the new MSP driver deliver the following enhancements:
- A new Clarity Task object attribute synchronized with the legacy Fixed Duration Boolean attribute.
- Adjustments to the MSP integration to leverage the new attribute.
- New processing that can read the legacy MSP XML files for task types and carry them into the New MSP Driver XML files.
- Exposure of the new Microsoft Project Task Type attribute in Clarity and in the Project XOG element.
- A new capability that allows project templates to bring the Microsoft Project Task Type attribute into new projects.

In environments that integrate with Microsoft Project, update your best practices so users know how your organization prefers them to set this value. When users change the value of the existing Fixed Duration task attribute or the new Microsoft Project Task Type attribute, the two attributes must remain in sync:
- If **Fixed Duration** is selected, when you click **Save**, Clarity sets the MSP Task Type to Fixed Duration.
- If **Fixed Duration** is false (not selected), Clarity resets the MSP Task Type to Fixed Units.
- If **MSP Task Type** is Fixed Duration, Clarity sets Fixed Duration to true (the check box is selected).
- If **MSP Task Type** is Fixed Units or Fixed Work, Clarity sets Fixed Duration to false (not selected).
- If both attributes are set to a new value, the existing value for the legacy Fixed Duration attribute prevails. In other words, when you select the Fixed Duration check box but the MSP Task Type is already set to Fixed Units or Fixed Work, the check box has precedence. When you save, the application resets the MSP Task Type to Fixed Duration.

If no value is set in Clarity tasks for the Microsoft Project Task Type (`msp_task_type`), the default task type defined in Microsoft Project is used for the task when you open it in Microsoft Project.

**Example:**

1. Create a project in Clarity 15.5 or newer.
2. Create two tasks.
3. Configure Fixed Duration and Microsoft project type on the task list page.
   a. Mark Task1 MPT for Fixed Duration.
   b. Do not mark Task2 with any type.
4. Open the project in Microsoft Project using the new driver.
5. Set the default task type in scheduling options to Fixed Unit and configure the type field.
   a. Task1 shows a type of Fixed Duration.
   b. Task2 shows Fixed Units.
6. Close Microsoft Project without saving.
7. Set the default task type in scheduling options to Fixed Work.
8. Open the project in Microsoft Project.
   a. Task1 now shows a Fixed Duration.
   b. Task2 shows Fixed Work.

#### New Task Object Attribute
- **Attribute Name:** Microsoft Project Task Type
- **Attribute ID:** `msp_task_type`
- **API Attribute ID:** `mspTaskType`
- **Default Value:** No default value. We recommend that you do not set a default value. This is not a required attribute. If you set a default value on this attribute, the Clarity attribute default will be set but it will not set the default value in Microsoft Project.
- **Lookup:** Microsoft Project Task Type (`MSP_TASK_TYPE`)
- **Valid Lookup values:** Fixed Units (0), Fixed Duration (1), Fixed Work (2)
- **Synchronization:** The legacy Fixed Duration Boolean attribute (ID: `prlsfixed`) is synchronized to the new MSP Task Type.

### Turn Off Time Tracking at the Task Level

You have seen in prior sections that applying errant actuals to a task could lead to a task's start or finish date shifting. And this could also shift the project's end date should it be on the critical path. To minimize this risk, Classic PPM provides a feature to the project manager to toggle a task as being either open or closed to time tracking. This way, project team members will only have access on their time sheets to the tasks which are open for time tracking, preventing hours from being placed accidentally on tasks which should not have actual hours applied against them.

For any task, the project manager can remove the ability to track time to it. This proves helpful when:
- Your project is multi-phased and you do not want resources to accidentally tracking time to work in the future phases.
- You complete a task and need to prevent further time tracked to it.

This feature is configured and managed within Classic PPM. To set it up in the Classic PPM Task UI:

1. Place the **Open for Time Entry** field into your task view.
2. Click into the field and set it to checked.
3. Save.

This feature is managed only in the Classic PPM UI; it is not found in Microsoft Project.

### Update a Task to Complete

Microsoft Project permits the project manager to status a task using several methods. When integrated with Classic PPM, we recommend using one specific approach. If not, Microsoft Project tries to add additional actual hours to the task which, upon save to Classic PPM, are dropped.

**Follow these steps:**

1. In Classic PPM, open a task.
2. Clear the **Estimate to Complete (ETC)** value in the resource assignment area.
3. Select **Completed** from the **Status** drop-down field in the task section.

> [!NOTE]
> Classic PPM displays an error message if the status Completed is selected before the ETC field is zeroed out. The thought here is that a task is not complete as long as there is ETC to be worked.

The scenario highlighting this issue:
- Work = 40 hrs. Your team member has finished the task and recorded Actual Work to be 19 hours on the time sheet. You want to close this task so that it reflects that the 19 hours of Actual Work was all that was required.
- Your first click in Microsoft Project is to change the **Remaining Work** value to 0. Microsoft Project will adjust the Work value to be the new sum of Remaining Work (0 hours) + Actual Work (19 hours).
- Change the **% Complete** field to 100%. This sequence ensures the resulting Work value to correctly reflect the number of hours recorded against it. In this example, 19 hours is correct.

#### Update a Task to Complete (Incorrect Process)

The scenario highlighting this issue:
- Work = 40 hours; the team member finishes after 19 hours; you want to close this task so that it reflects only 19 hours.
- If your first click in Microsoft Project is to change the **% Complete** field to 100%, Microsoft Project will respond by looking at the Work value and then make sure that the actual hours equals this value. In this case it will over-write the 19 hours with the 40 hours in the Actual Work field. This is not what the Project Manager expects! So, the task's duration will now be based on 40 hours, rather than 19 hours.
- When the project is saved to Classic PPM, two things happen:
- The additional actual hours which Microsoft Project just added (21 newly added hours) will be dropped without warning. So Classic PPM's actuals for this task will remain at 19 hours.
- When the project is reopened in Microsoft Project, the task is showing 19 hours of actuals and no remaining work.

This can confuse the project manager since it appears that they have lost actual hours.

### Loading Patterns and Contours

This section discusses the mapping between Classic PPM and Microsoft Project loading patterns, and Uniform, the recommended default loading pattern setting in Classic PPM.

Microsoft Project refers to resource assignment loading patterns as a contour. A contour is a manner in which a resource work on a task is scheduled over time. Both Classic PPM and Microsoft Project offer several types of loading patterns that can be applied to a resource's assignment.

When you create a task in the Classic PPM UI and open the project in Microsoft Project:

| Classic PPM Field | Microsoft Project Field |
|---|---|
| Fixed | Contoured |
| Uniform | Flat |
| Front | Front |
| Back | Back |
| Contour | The specific Work Contour (if the task was created in Microsoft Project when the project was saved). For example: Turtle, Bell, and so forth. |

When you create a task in Microsoft Project and save the project in Classic PPM, the mapping is reversed. Late Peak, Early Peak, Double Peak, Bell, and Turtle in Microsoft Project become Contour.

#### Uniform Recommended Default Loading Pattern

The Classic PPM Administrator will need to set the default loading pattern setting in Classic PPM (**Admin Tool > Project Management > Settings > Default Loading Pattern**). Of the five choices available, we recommend selecting **Uniform** when your company fits one of these scenarios:
- When Microsoft Project is your sole scheduling tool, or
- When Microsoft Project and Open Workbench are both being used by the enterprise as the schedulers

The reasons for this recommendation:
- Due to the way Microsoft Project distributes estimate to complete (ETC) when using both front and back contour patterns, and
- Performance when opening from and saving to Classic PPM.

**Scenario 1:** Microsoft Project is the only scheduler used. Recommendation: Uniform is the recommended Classic PPM default loading pattern. Microsoft Project's curve for Front loading and Back loading pattern will take a 40 hour task and actually extend the task's duration. Only the uniform task started on Monday and finished on Friday. The front and back loaded tasks both extend out over 9 days. If these tasks were on the critical path, the project's end date is now scheduled further into the future than expected.

**Scenario 2:** Open Workbench is the only scheduler used. Recommendation: Any loading pattern is fine -- front, back, contour, uniform, fixed. Most Project Managers prefer Front Load as the default.

**Scenario 3:** A combination of both Microsoft Project and Open Workbench will be used. Recommendation: Please refer to the comments made in Scenario 1.

### Configure a Microsoft Project Milestone

By definition, milestones have neither duration nor effort assigned to them. Rather, a milestone is a point in time which may or may not have a person responsible for it. Microsoft Project's fields are designed such that a project manager can create a milestone using more than one process.

If this is your sequence for creating a milestone, you are doing it in the safest way possible and you don't need to worry about the milestone turning into a task at a later time:

1. Open the **Task Information** box.
2. Click on the **Advanced** tab.
3. Click in the **Mark task as milestone** box.
4. Do NOT enter a zero value into the **Duration** box. If you do and at some time in the future another value is placed in the duration field, the milestone will convert into a task.

#### Example: Create a Milestone (Not Recommended)

> [!TIP]
> We do not recommend the steps in this example.

If this is your sequence for creating a milestone, you may find the milestone changing into a task under certain circumstances:

1. Open the **Task Information** box.
2. Click the **Advanced** tab.
3. Click in the **Mark task as milestone** box.
4. Enter a zero value into the **Duration** box. There could be subsequent actions you make that turn this milestone into a task. This is because later Microsoft Project will not retain the check you placed in the milestone box if you do one of the following actions. The milestone can become a task under the following conditions:
- A duration value other than zero is added to it
- Remaining work is added to a resource assignment on the milestone

#### Business Rules for Milestones

Classic PPM permits the Microsoft Project user to:
- Place the milestone into the dependency chain.

Classic PPM does not permit the Microsoft Project user to:
- Post actuals against a milestone. The exception would be if a task with assignments and actuals is later converted to a milestone. The actuals will be retained.
- Assign remaining work to a resource assigned to a milestone.

Classic PPM does not recommend the Microsoft Project user to:
- Place a duration on the milestone (by PMI's definition, a milestone has no duration). If the milestone is on the critical path and then accidentally converts into a task, the change could impact the project's finish date.

#### Smallest Duration Unit

The Classic PPM smallest duration value is one day. It does not recognize duration down to the hour level. The Microsoft Project lowest level is hours and minutes. This difference is typically small, but it could lead to different duration values in Classic PPM and Microsoft Project reports.

#### Durations Changed Unexpectedly to Zero Days

Durations changed unexpectedly to zero days causing the duration of the task to become zero, which then instantly converts the task to become a milestone! And now the finish date is not reflecting the true scheduling finish dates.

**Steps to reproduce:** This can happen in a rare case where a single resource is assigned to a task and the project manager then decides that the person is no longer needed on that task. Rather than deleting that assignment, the project manager zeros out the resource's assignment unit value.

**Result:** With the resource assignment zeroed out on the task, the duration of the task is recalculated to be zero. This is because Duration = Assignment Units (ETC) / Resource Availability, so in this case: Duration = 0 / 8 hrs = 0. And since a milestone has a duration of zero, Microsoft Project converts the task to a milestone!

### Copy and Paste Tasks

When copying or pasting rows in Microsoft Project, you should select the fields and not the grey numbered boxes on the left (which would highlight the complete row).

By selecting the grey numbered box on the left you are copying ALL fields related with that task. The problem is that you will be copying hidden fields which contain values that Classic PPM expects to be unique. The result is that there will now be duplicates of the unique values, specifically project text fields 1 and 3.

### Manage Actual Hours for Time Tracking

At times, project managers ask if they can manually add a person's time directly into the Microsoft Project plan. The answer is yes they can, but the configuration required to permit this may actually be too onerous to support in an ongoing way. The reason is that this would mean that the time from all the team members would need to be manually entered.

In summary:
- The most common scenario is when all resources, employees and/or contractors are required to track their time using the Classic PPM time sheet. This requires that each resource is licensed with a Classic PPM log-in.
- A less common scenario is when only the employees are licensed to have access to the Classic PPM time sheet. The contractors are asked to manually track their time and submit it to the Classic PPM Administrator to enter manually via the Transaction Entry screen.
- The least frequent scenario, but one which is supported is when the project manager will manually enter all project team member's time into the project plan. In this scenario, the Classic PPM timesheet is not employed.

The following table lists the Classic PPM field configurations required to support each scenario:

| Scenario | Resource Settings | Project Settings |
|---|---|---|
| Everyone using the Classic PPM Time sheet | Track mode = Clarity | Track mode = Clarity |
| No time sheets; manually enter time into the project plan | Track mode = None | Track mode = None |
| Every employee using Classic PPM Time sheet; Contractors do not have Classic PPM logins so their time needs to be entered manually. | Internal employees' Track mode = Classic PPM. Contractors' Track mode = None. Note: The contractors' time needs to be manually entered via the Transaction Entry screen in Classic PPM. | Track mode = Clarity |

> [!TIP]
> Be vigilant! Impress upon your team members to track their time accurately and on the appropriate day or your project finish date may unnecessarily be delayed. Your project team actual hours significantly impact your project schedule. Correctly recorded, your plan schedule is predictable. However, if they are logged incorrectly, you could certainly see unexpected scheduling behavior.

### Actual Hours Considerations

The resources assigned to your project likely use timesheets in Classic PPM to enter the weekly work they accomplish on their assigned project tasks. These timesheets automatically include tasks you have scheduled for that week. Timesheets are submitted and approved before they can be posted to the project plan. Pending actuals appear in Microsoft Project before posting actuals. The Pending Actuals field can be mapped to Microsoft Project.

When a timesheet is posted, the ETC (Estimate-to-Complete) field is modified on any assignment with actuals on that time sheet. The ETC is reduced by the amount of the actuals so that the total work on the assignment remains the same. In Microsoft Project, assignments with a work contour assigned as Contoured (Fixed in Classic PPM) are processed differently. In this case, any scheduled estimates for the week that was not entered as actual hours are removed. The result, depending on when the estimates were scheduled in Microsoft Project, can be a decrease of total work.

In Microsoft Project, work contour assignments are reset to Contoured if you edit the work distribution in the timescale view. If you modify the total actual or remaining work total for the assignment, the work contour is not modified.

Posting a time sheet will not immediately change the finish dates of the tasks that were on that time sheet.

Impacts of actual hours on task schedules:
- The day on which the first actuals are recorded impacts the task's start date, and ultimately, the project's finish date if this task is on the critical path.
- Conversely, should a task end on Friday and then a negligent team member tracks their hours on the following Wednesday, the task's finish date will fall on that Wednesday.
- Should partial days be worked, duration increases and ultimately shifts the project's finish date.

**Microsoft Project Impact of Actual Hours on Fixed Unit and Fixed Work Tasks:** Misplaced actual hours on a time sheet will impact the task duration on Fixed Unit and Fixed Work tasks.

**Microsoft Project Impact of Actual Hours on Fixed Duration Tasks:** Microsoft Project lets you select the task type of Fixed Duration.

> [!WARNING]
> The word "fixed" can be considered a misnomer. Many users anticipate that the task duration is actually frozen when using Fixed Duration. Misplaced actual hours change the duration of a Fixed Duration task.

### Add Actual Hours Directly into Microsoft Project

Classic PPM business rules determine how actual hours from timesheets are handled. The business rules are written such that either all project team members track their time using the Classic PPM time sheet, or none of them track their time using the time sheet and instead all hours are manually typed directly into the Microsoft Project project plan.

The following results illustrate the impact of adding actual hours into a Microsoft Project plan. The project is configured to only permit actual hours to come from Classic PPM time sheets. If you do type Actuals into the plan and then save in Classic PPM, the following processing occurs:
- The manually entered Actuals are not imported. Instead, these entries disappear (no error message). The ETC is no longer in sync with the original Effort estimation.
- Microsoft Project changes the task loading pattern when a user manually modifies the hours on an assignment in Microsoft Project. The pattern maps to the Fixed pattern in Classic PPM. Time posting behavior changes occur including the removal of the unused ETC in the current week.

The following table reflects the respective settings:

| Scenario | Classic PPM Field Settings |
|---|---|
| All project team members using Classic PPM time sheets | Resource Track Mode = Classic PPM. Project Track Mode = Classic PPM. You can manually enter actual hours into a project with this setting by using the Classic PPM Transaction Entry page. |
| All actual hours are manually entered into the Microsoft Project project plan | Resource Track Mode = None. Project Track Mode = None. |

### Task, Summary Task, and Milestone Configurations

Microsoft Project permits the project manager to be exceptionally flexible with how and where he places resources, actual hours, durations, and more. Classic PPM business rules are very specific and relatively restrictive when compared to Microsoft Project's business rules. There are specific configuration rules for what is and is not permitted in Microsoft Project in order for the Microsoft Project project plan to respect Classic PPM integration rules.

If these configuration rules are not followed, one of three things may happen:
- **Assigning a resource on a summary task.** Although this is allowed in Microsoft Project, the Classic PPM business rules do not allow summary task assignments. This action will result in the following error message when saving: "Summary task assignments are not supported."
- **Placing actual hours on a Milestone directly into the Microsoft Project project plan:** Regardless of whether a resource is assigned to the milestone and actual hours have been added to the milestone (Microsoft Project permits actual hours to be added to a task with no resource assignment), the project will save successfully into Classic PPM and the actual hours will continue to be there the next time you open the project in Microsoft Project.

### Resource Task Assignments and Start and Finish Dates

Pay attention to the resource assignment start and finish dates on a task. Do not have any tasks whose start date is before all of its assignment start dates or whose finish date is after all of its assignment finish dates. A probable slip in the project schedule or a probable schedule pull-in may occur.

**Slip:** Suppose that the task must begin on Monday. So you create the task and assign Sally. All is well. But then you learn that Sally cannot start until Thursday so you adjust her assignment start date accordingly. Be aware that Microsoft Project will show that the task is now starting on Thursday and not the Monday you needed it to begin. But if no one is there to work on it on Monday, logically the task should not start until the first person arrives. The project end date could slip if this task is on the critical path.

**Pull-in:** A task whose finish is after all of its assignments' finishes gets a NEW earlier finish date that will match the start date of the last assignment finish date. The project end date could pull in if this task is on the critical path.

## MSP: Microsoft Project Manual Calculation Mode

Manual calculation affects the schedule in Microsoft Project (MSP). The **Calculation** option is On by default. As a result, when you open a Classic PPM project in Microsoft Project, the project is recalculated. The task start and finish dates are automatically adjusted to respect the dependency chain between them.

This section covers:
- Configure Manual Calculation
- Microsoft Project Manual Calculation Exceptions

### Configure Manual Calculation

You can set the Calculation option in Microsoft Project to Off (manual). In manual calculation mode, a Classic PPM project is not recalculated when you open it in Microsoft Project. When you use manual calculation mode, Microsoft Project performs in the following ways:
- Tasks are not adjusted or updated based on the dependency chain when you open a Classic PPM project in Microsoft Project. The dependency chain becomes meaningless.
- Tasks remain stationary on the Gantt chart.
- You must schedule a project manually and must shift the task dates.
- The project appears as it was last saved in Classic PPM, provided you are not using Classic PPM timesheets.
- The summary task is not calculated. The rolled up values of the child tasks are not displayed. As a result, the project level % Complete field in Microsoft Project may display an inaccurate value.

> [!NOTE]
> For MPP projects (`filename.mpp`) that were created before configuring this setting, the project manager must update the global setting for that project.

To update the global setting, open the plan in Microsoft Project from Classic PPM.

**Follow these steps:**

1. In Microsoft Project, click **File**, **Project Options**, and then click **Schedule**.
2. Select **Off** for **Calculate Project after each edit** in the Calculation section.
3. Click **OK**.

> [!NOTE]
> This setting is global and is saved in the `.mpp` file of each project. Any `.mpp` project that is created after configuring this setting inherits this setting.

4. In Classic PPM, click **Administration**, **Project Management**, **Settings**.
5. Set the **Default Load Pattern** as **Uniform**.
6. Click **Save**.

**Example: No Calculation (0 Hours) for Remaining Work**

The remaining work for Project 1 and Summary is not calculated and displays zero hours. The project is not calculated when manual calculation is enabled. Press **F9** or use the **Calculation Needed** button in Microsoft Project to calculate the project.

**Example: Tasks Remain Stationary on the Gantt Chart**

When you enable manual calculation, tasks remain stationary on the Gantt chart and hours do not roll up to the summary task or project levels. Press **F9** to calculate the project.

**Example: Summary Task Is Not Automatically Calculated**

When you enable manual calculation, the summary task dates are not automatically calculated. Press **F9** to calculate the project.

### Microsoft Project Manual Calculation Exceptions

The following exceptions apply when manual calculation is enabled:
- **Classic PPM timesheets.** If you use timesheets, the actual hours that are recorded against tasks could override the configuration. The start date, finish date, or both can change.
- **Resource leveling.** Resource leveling calculates the project. Do not use resource leveling if you do not want Microsoft Project to calculate your project.
- **Task constraints.** Applying task constraints can trigger Microsoft Project to calculate the project even though the global setting for the Calculation option is set to Off.

**Example: Resource Leveling in Microsoft Project**

Resource leveling in Microsoft Project schedules the project based on the availability of the team members so that no resource is overallocated. Resource leveling delays tasks, splits tasks, and delays resource assignments to adjust the resource allocation. Resource leveling also calculates the project as it resource levels.

**Follow these steps:**

1. Set the Calculation option in Microsoft Project to Off.
2. Create two tasks, Task1 and Task2.
3. Assign the same resource to each task.
4. Manually level the resources. Microsoft Project automatically calculates or schedules the tasks so that the resource works eight hours a day of availability and therefore resolves the overallocation.

**Example: Task Constraints**

When you apply task constraints, automatic calculation can be triggered even if the global setting is manual.

**Follow these steps:**

1. Set the Calculation option in Microsoft Project to Off.
2. Create a task, Task 1. Move Task 1 to next Monday. Microsoft Project marks Task 1 with a **Start No Earlier** constraint.
3. Create another task, Task 2. Move Task 2 to next Monday. Microsoft Project marks Task 2 with a **Start No Earlier** constraint.
4. Create a Finish/Start dependency between Task 1 and Task 2. When you create task constraints, Microsoft Project automatically calculates the tasks, even though the global setting for the Calculation option is set to Off.

**Example: Reconciling Resource Overallocation**

Reconciling resource overallocations manually does not trigger automatic calculation.

**Follow these steps:**

1. Set the Calculation option in Microsoft Project to Off.
2. Create two tasks, Task1 and Task 2.
3. Assign a resource to Task1.
4. Assign the same resource to Task2.
5. Create a Finish/Start dependency between Task1 and Task2. The tasks remain stacked one upon the other, indicating that the plan must be calculated.
6. Drag Task 1 into Monday of the next week. The task remains frozen on the date you manually set, indicating that the plan must be calculated.

## MSP: Data Exchange with Classic PPM

When you open a project with Microsoft Project (MSP), or save a project, Schedule Connect coordinates the data exchange and updates between Classic PPM and MSP, even when changes occur concurrently. To enable this data exchange, map MSP fields to Classic PPM fields. Key information, such as resources and the costing rules, are controlled in Classic PPM. If you modify this information in MSP, your changes are not saved in Classic PPM.

This section covers:
- Open Projects in Microsoft Project
- Open Classic PPM Projects in Microsoft Project
- Microsoft Project Save and Save As
- Data Retrieval from Microsoft Project
- Concurrent Timesheet and Transaction Changes
- Posted Timesheets and Actuals
- Elapsed Durations in Microsoft Project
- Microsoft Project External Dependencies

> [!TIP]
> If you work in Classic PPM Studio, enter the `PRNAME` field in the `MSPField` table in lowercase and set the attribute ID value. Classic PPM Studio uses this value. However, Classic PPM does not map custom assignment attributes to Microsoft Project.

### Open Projects in Microsoft Project

You can open any active projects that you have rights to view or edit from Classic PPM. To open projects from Classic PPM, they must be formatted in MSP. Tasks that are created with dates set in Classic PPM that are different than the project start date get Start No Earlier constraints to hold them there.

> [!NOTE]
> You cannot open projects with the same project ID and the MPP file name in Microsoft Project from different Classic PPM servers on your computer. To correctly open a project in this situation, first delete the MPP file that you have saved locally. Then, open the project with the duplicate project ID from the other Classic PPM servers.

**Follow these steps:**

1. If the project is open in Microsoft Project, save and close it.
2. Close any open dialogs or let any interactions with Microsoft Project complete.
3. Complete these steps when attempting to open a project from a different Classic PPM server:
   a. Exit Microsoft Project.
   b. Change the server settings in Schedule Connect.
4. Select **Microsoft Project** from the **Open in Scheduler** menu.
5. Select one of the following options:
- **Read-Only.** Opens the project unlocked in Microsoft Project.
- **Read-Write.** (Default) Opens the project in Microsoft Project and locks the project in Classic PPM. If your access rights only allow you to view the project, or if another user locks the project, Read-Only is selected by default and the list box is unavailable.
6. Click **Go**.
7. When you open a project from Classic PPM in Microsoft Project, the following occurs:
- Your Classic PPM login is sent automatically to Microsoft Project. Logging in to Schedule Connect is not required to open a project from Classic PPM into Microsoft Project.
- The project opens in Microsoft Project. If Microsoft Project is already running, that instance of the Microsoft Project is used. Any projects already opened in Microsoft Project remain open.
- If you open the project from Classic PPM in Microsoft Project as read/write, other users can only open the project as read-only.

### Open Classic PPM Projects in Microsoft Project

After you have set up the connection to a Classic PPM server, you can open a Classic PPM project in Microsoft Project. You can open any active Classic PPM project to which you have view or edit rights.

**Follow these steps:**

1. Launch Microsoft Project.
2. Click the **Clarity Integration** tab, and click to **Open**.
3. View the following information:
- **Project ID:** Defines the unique identifier for the project that is typically auto-numbered. Limits: 20 characters. Required: Yes.
- **Name:** Displays the name for the project. This value is based on the Project Name field on the project properties page.
- **Locked By:** Defines the user name of the resource currently editing the project.
- **Manager:** Specifies the email address of the resource responsible for managing the project.
4. Select the project and click **Open**. If the project is locked and saved locally, you are prompted to open the Classic PPM version and replace the local version.
5. Click **Yes** to open the Classic PPM version.

### Microsoft Project Save and Save As

When you save a project that you updated in Microsoft Project (MSP) back to Classic PPM, the saved project reflects the updated schedule. The MPP project file is uploaded to Classic PPM including discrete information such as task schedules and resource work amounts.

> [!TIP]
> If you are using the Microsoft Project Interface (the newer version, not the Legacy version), you cannot perform Save As over an existing Classic PPM project.

Use **Save** and **Save As** in Microsoft Project to save the file locally. Use Schedule Connect to save projects to Classic PPM.

If you exit Microsoft Project without saving the project locally, you are asked to save the project. If you do, the project is saved locally but it is not saved back to Classic PPM. You save to Classic PPM using the **Save** button on the Classic PPM integration menu.

#### Save New Projects from Microsoft Project

You can create a project in Microsoft Project and then save it to Classic PPM. The following is assumed:
- You have access rights to create projects in Classic PPM.
- Any resources or charge codes that are referenced in the project exist in Classic PPM.
- The project is not password-protected. To verify whether the project is password-protected, select the Save option.

When you save a new project that is created in Microsoft Project to Classic PPM, the following actions automatically occur:
- You become the Classic PPM project manager.
- The project is locked in Classic PPM.
- The project remains open in Microsoft Project.

If the project ID exists in Classic PPM, you can save a project over an existing project by clicking **Save As...** from the Classic PPM Integration menu bar. If you save over an existing project, the new project information replaces the existing project information.

> [!NOTE]
> If you change the ID, the MPP file name changes to match it.

**Follow these steps:**

1. Open the project in Microsoft Project.
2. Click the **Clarity Integration** menu bar, and click **Save As...**. to view a list of active projects to which you have access rights.
3. Define the following information:
- **Project ID.** Defines the unique identifier for the project that is typically auto-numbered. Limits: 20 characters. Required: Yes.
- **Local file name.** Defines the default local path and the MPP file name of the project. The MPP file name defaults to the project ID.

> [!NOTE]
> The path and file name are based on the **Tools > Option > Save** settings in Microsoft Project. Any changes to the setting do not take effect until the next time you start Microsoft Project.
- **Track Mode.** Indicates the tracking method that resource assignments use to enter time that is spent on project tasks. Values:
- **Clarity.** (Default) Resource assignments enter time against their assigned tasks using timesheets.
- **None.** Resources other than labor resources track actuals from financial transaction records or through a desktop scheduler, such as Microsoft Project and Open Workbench.
- **Other.** Actuals are imported from a third-party application.
4. Save your project.

#### Save Copies of Existing Projects as New Projects

When you save a copy of an existing Classic PPM project as a new project, all of the project information is copied to the new project. Both projects exist independently of each other. No file sharing occurs. In addition, locks are removed from the project, unless you save it locally as an MPP file using the standard Microsoft Project saving functions.

**Follow these steps:**

1. Open the project in Microsoft Project from Classic PPM.
2. Click the **Classic PPM Integration** tab, and select **Save As...**.
3. Enter a new, unique Classic PPM project ID and click **Save As**. A copy of the project is saved as a new project in Classic PPM.

#### Save Existing Projects from Microsoft Project

To save an existing project to Classic PPM, you must have edit access rights and a lock option on the project. You cannot save when another user has locked the project, or when you did not lock it. If necessary, you can force a save. Once you save your existing project, you can continue to modify the project.

**Follow these steps:**

1. Open the project in Microsoft Project.
2. Click the **Classic PPM Integration** menu bar, and click **Save As...**. The project remains open and locked. If you do not have a lock on the project, you can force a save.
3. Click **Yes**.

### Data Retrieval from Microsoft Project

When saving a project to Classic PPM, information about a project is updated including its tasks and assignments. The following exceptions apply:
- Resource and charge code information is not updated or created.
- Time-tracking information about tracked assignments, such as actual hours, is not updated.
- Unplanned tasks and assignments are not updated or deleted, even when you force a save.
- Manual edits to the baseline information is not saved.

You cannot delete projects, tasks, and team staff members that have submitted timesheet actuals. You cannot remove resource assignments from tasks that have submitted actuals. When you try to delete an assignment with actuals, the estimates (ETC) are set to zero. When you try to delete a task with actuals, the task is marked as Complete.

When you open a project in Microsoft Project, cost information is retrieved from the financial cost matrix in Classic PPM. Cost rates determine the cost that is associated with a resource that is assigned to a project task. The changes that you make to the cost rates in Microsoft Project are for what-if purposes only and cannot be saved to Classic PPM.

### Concurrent Timesheet and Transaction Changes

Microsoft Project merges any concurrent timesheet and transaction changes. When a project is locked, most timesheet and transaction updates that affect a project are blocked. The following changes are retained and merged when saving projects to Classic PPM:
- **Unplanned tasks.** Unplanned tasks are placed in an Unplanned Tasks summary task in Microsoft Project until a project manager moves them. Unplanned tasks occur when staff members create new unplanned tasks or create an unplanned assignment by recording actual time against tasks to which team staff members are not assigned.
- **Pending Estimates.** Team staff members can set pending estimates (ETC) from Classic PPM. If you change this field from Microsoft Project on a tracked assignment, the change is ignored when you save the project back to Classic PPM with one exception: when you accept or reject the pending estimate values and a team staff member is not concurrently modifying the estimate in Classic PPM.
- **Notes.** Staff members can add notes to tasks from Classic PPM.
- **Actuals.** Both approved and unapproved actuals show as pending actuals in the project plan.

> [!NOTE]
> Assignments are tracked when the Track Mode field in Classic PPM for associated projects and resources is set to Clarity or Other. Actuals, Actuals Thru Date, Pending Actuals and for Pending Estimates field information (except for setting it to blank) is maintained from Classic PPM. Any field changes in Microsoft Project are ignored.

### Posted Timesheets and Actuals

Classic PPM timesheets affect actuals in Microsoft Project (MSP). The resource assignments on your project typically use timesheets in Classic PPM to enter their weekly work accomplishments on their assigned tasks.

> [!TIP]
> Map the Pending Actuals field in Classic PPM to a custom number field in Microsoft Project.

When a timesheet is posted, the estimates (ETC) on assignments for which a resource enters timesheet actuals is adjusted. Typically, the ETC reduces the amount of the actuals so that the total work on the assignment remains the same.

In Microsoft Project, assignments with a work contour assigned Contoured (Fixed in Classic PPM) are processed differently. In this case, the ETC that is scheduled on or before the week is replaced with the actuals. In addition, the ETC that is scheduled after the week is retained.

> [!NOTE]
> In Microsoft Project, work contour assignments are reset to Contoured if you edit the work distribution. If you modify the total actual or remaining work distributions, the work contour is not modified.

A posted timesheet is assumed to be a complete accounting of the project work that a resource did that week. A scheduled task that does not appear on the timesheet implies that the resource did not complete any work on that task. The project manager must reschedule the task for the following week or beyond.

> [!NOTE]
> When you open a project from Classic PPM in Microsoft Project, it is scheduled even if you use Manual Calculation in Microsoft Project. As a result, task finish dates and resource work distribution in Microsoft Project can be different than in Classic PPM. After posting actuals, rework your plan. Reworking the plan ensures that work is balanced.

### Elapsed Durations in Microsoft Project

Project managers can enter duration as working days or elapsed (calendar) days in Microsoft Project. An elapsed duration is the amount of time that a task takes to finish, based on a 24-hour day and a 7-day week, including holidays and other nonworking days. To schedule tasks to occur during working and nonworking time, the project manager assigns an elapsed duration to a task (by preceding the duration abbreviation with the letter `e`) in Microsoft Project. For example, `3ed` indicates three elapsed days, whether those days are working or nonworking days. You can define elapsed duration in days, weeks, or months only (hours is not supported).

The Microsoft Project Interface (not the Legacy version) retains the elapsed duration values when you open and save a project from Microsoft Project into Classic PPM. The following dependency types are supported:
- Finish to Start
- Start to Start
- Start to Finish
- Finish to Finish

However, you can view and edit the elapsed durations only in Microsoft Project. The Microsoft Project elapsed durations are maintained in Classic PPM, unless you modify the task start, finish, duration, or dependencies. If you do, the durations are converted to working days.

> [!NOTE]
> Microsoft Project 2010 or a later version is required to retain elapsed durations in Classic PPM.

#### Classic PPM Updates that Impact Elapsed Durations in MSP

Actions in Classic PPM that affect task start, finish, or duration values override the values that were saved from MSP:
- Running auto-schedule
- Changing the task start date
- Changing the task finish date
- Editing task assignments that affect task start or finish dates
- Changing the project start or finish dates (if the task falls outside the new dates)
- Posting actuals for task assignments:
- Depending on the ETC that remains after posting, the task finish date can change.
- If posting updates the Task Finish date, then elapsed duration is re-calculated as working days.
- Editing task dependencies as it converts the elapsed value into working days. For example:
- Using the Gantt view to drag-and-drop a task dependency
- Editing the dependency lead or lag time in the task properties or dependencies page

### Microsoft Project External Dependencies

You can insert dependencies into an open project without having to open the project from which the dependent relationship is created. In Microsoft Project (MSP), you can insert dependencies by entering the file name and task ID of the dependent task.

When you save a project with external dependencies, external tasks are updated as needed.

## MSP: Field Mappings Between MSP and Classic PPM

Many of the standard Microsoft Project (MSP) fields are mapped to Classic PPM fields. Schedule Connect exchanges data between MSP and Classic PPM.

This section covers:
- Project Information Field Mapping
- Resource Information Field Mapping
- Task Information Field Mapping
- Resource Assignment Information Field Mapping
- Notes Field Mapping
- Private Field Mapping

When mapping Microsoft Project fields, you can map only the existing Classic PPM attributes that have not been mapped and custom attributes of the Project, Resource, Task, Assignment, and Team objects with the Microsoft Project fields. Mapping is limited to the following attribute data types:
- Date
- Number
- String
- Boolean
- Lookup string

The following business rules apply when you map the fields:
- Static lookup string mapping requires the new MSP driver; you cannot map lookup strings with the legacy driver.
- Changes to any mapped resource fields are not saved to Classic PPM; because the product owns the resource record.
- You can specify whether the mapped data can be imported, exported, or both.
- If an Object Type and Clarity Attribute ID mapping already exist, the Create or Update operation results in an error.
- If an Object Type and MSP Field Name already exist, the Create or Update operation results in an error.
- For default mappings with the Clarity Attribute ID set to `prUID`, the Create or Update operation results in an error.
- For mappings with Clarity Attribute ID set to `prUID`, you can modify only the MSP Field Name for an update operation.

> [!NOTE]
> You must have the administrator rights to view the MSP Field Mappings page.

**Follow these steps:**

1. Open **Administration**, and from **Project Management**, click **MSP Field Mappings**.
2. Click **New** on the MSP Mapping list page.
3. Complete the following information and save:
- **Object Type:** Indicates the Classic PPM object to which the mapped attribute belongs. Values: Project, Task, Resource, Assignment, and Team
- **Data Operation:** Specifies the operation to perform. Values:
- **Import and Export:** Import and export data back and forth from Classic PPM to Microsoft Project.
- **Import:** Import data from the Microsoft Project field to Classic PPM.
- **Export:** Export data from the Classic PPM attribute to Microsoft Project.
- **Clarity Attribute ID:** Indicates the Classic PPM attribute ID of the attribute that is being mapped in Microsoft Project.
- **MSP Field Name:** Indicates the Microsoft Project field name that you want to map to the Classic PPM attribute.
- Text and Lookup String fields: Use `Text4` to `Text30`
- Boolean fields: Use `Flag2` to `Flag20`
- Number fields: Use `Number1` to `Number20`
- Date fields: Use `Date1` to `Date10`

> [!NOTE]
> Duplicates in the Lookup name display with an added "(1)", such as Capital(1), Capital(2). Inactive lookups display in MSP in the list, but are noted with an Asterisk, such as (*)inactive. You can only map lookups to Text fields in MSP.

### Project Information Field Mapping

The following fields map project information from Microsoft Project to Classic PPM:
- Schedule
- Project Baseline
- Manager
- Other Project Attributes
- Calendar

#### Schedule Field Mapping

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| Start Date | Start Date (`PRJ_PROJECTS: PRSTART`) | |
| Finish Date | Finish Date (`PRJ_PROJECTS: PRFINISH`) | |
| Schedule From | Start Imposed / Finish Imposed (`PRJ_PROJECTS: PRSTARTIMPOSED` / `PRFINISHIMPOSED`) | If this field is displayed, the Schedule From field is set to the Start Date when you open the project in Microsoft Project. Otherwise, Schedule From is set to the Finish Date. |
| Status Date | As Of Date (`PRJ_PROJECTS: PRASOF`) | You cannot programmatically set this field to NA in Microsoft Project. If the As of Date in Classic PPM is blank, the existing value in this field is retained. |
| Priority | Priority (`PRJ_PROJECTS: PRPRIORITY`) | Priorities are translated between the range (0-1000) in Microsoft Project and the range (36-0) in Classic PPM. |

#### Manager Field Mapping

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| Manager | Manager (`SRM_PPROJECTS: NAME`) | When opening the project in Microsoft Project, this field is set to the user name in Classic PPM identified as the project manager. This value is not saved back to Classic PPM. |
| Title | Title | Not Applicable |

#### Calendar Field Mapping

> [!NOTE]
> The project calendar in Microsoft Project is always reset to the base calendar in Classic PPM.

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| For Base Calendar | Calendar Name (`PRCalendar: PRNAME`), Base Calendar (`PRCalendar: PRBASECALENDARID`) | Not used for resource calendars. In Microsoft Project, only resource calendars have base calendars. |
| Set Working Time for Selected Dates | `PRCalendar: PRVALUE` | Calendar information that is defined in Classic PPM appears in the Set Working Time options in Microsoft Project. |

### Resource Information Field Mapping

#### General Tab

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| Resource Name | Resource/Role Name (`SRM_RESOURCE: Full_Name`) | The name of the role and non-labor resource in Classic PPM. For labor resources, the concatenated last and first name without commas. |
| Initials | Resource ID (`SRM_RESOURCE: UNIQUE_NAME`) | When saving the project to Classic PPM, this field checks for an existing Classic PPM resource ID. |
| Resource Type | Employment Type (`SRM_RESOURCE: RESOURCE_TYPE`) | In Classic PPM, this field is set to Work for labor resources and roles, and Material for all other resource types. |
| Generic | n/a | This field is set to On for roles and set to Off for resources. |
| Booking Type | n/a | Not mapped to Classic PPM, but the value is retained in the `.MPP` file. |
| Email | Email Address (`SRM_RESOURCE: EMAIL`) | Not Applicable |
| Group | Category (`PRJ_RESOURCES: PRCATEGORY`) | Not Applicable |
| Code | Input Type Code (`PRJ_RESOURCES: prTypeCode`) | Not Applicable |

#### Resource Availability

In Microsoft Project, resource availability is the units that a resource is available to work on the project. In Classic PPM, resource availability is based on the system-wide availability of the resource in hours, and the percent a resource is allocated to projects.

When opening a project in Microsoft Project, the resource availability is set from Classic PPM using the following formula:

**Resource systemwide Availability * Resource Project % Allocation**

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| Not Applicable | `PRJ_RESOURCE: PRAVAILCURVE` | Used only for labor resources in Microsoft Project. |
| Not Applicable | `PRTeam: PRALLOCCURVE` | Used only for labor resources in Microsoft Project. |
| Available From | Project Team: Staff: Start (`PRTeam: PRAVAILSTART`) | When saving the project to Classic PPM, this field is set to the date the resource is available. If set to NA in Microsoft Project, set to blank in Classic PPM. |
| Available To | Project Team: Staff: Finish (`PRTeam: PRAVAILFINISH`) | When saving the project to Classic PPM, this field is set to the date the resource is available to finish the project. If set to NA in Microsoft Project, set to blank in Classic PPM. |

**Working Time Tab:** Work Time information in Microsoft Project is set to the base calendar and any resource-specific exceptions from the resource calendar settings on the edit resource calendar page in Classic PPM.

**Costs Tab:** When opening the project in Microsoft Project, cost information is set to the first cost rate table from the Classic PPM cost matrix.

### Task Information Field Mapping

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| Name | Name (`PRTask: PRNAME`) | When saving to Classic PPM, if the Name field is blank, it is set to the Classic PPM internal ID. |
| Text1 | ID (`PRTask: PREXTERNALID`) | Task ID in the same project must be unique in Classic PPM (except blank). |
| Start | Start (`PRTask: PRSTART`) | |
| Finish | Finish (`PRTask: PRFINISH`) | |
| Duration | Duration (`PRTask: PRDURATION`) | Not displayed by default. Elapsed durations are converted to their equivalent in work time duration. |
| Priority | Priority (`PRTask: PRPRIORITY`) | Not displayed by default. Priorities are translated between range (0-1000) in MSP and (36-0) in Classic PPM. |
| Flag1 | Key Task (`PRTask: PRISKEY`) | The default mapping, which you can change. |
| Any user text field | Charge Code (`PRTask: PRCHARGECODEID`) | The name of the charge code appears in Microsoft Project. |
| % Complete | % Complete (`PRTask: PRSTATUS` and `PRTask: PRPCTCOMPLETE`) | The task status is set to "Started" when percent complete is greater than zero, "Complete" when it is 100, otherwise "Not Started". |
| Mark Task as Milestone (Advanced Tab) | Milestone (`PRTask: PRISMILESTONE`) | In Microsoft Project, any task can be flagged a milestone. Microsoft Project automatically sets this flag when a task acquires zero duration. |
| Calendar | Calendar | You can use calendars in Microsoft Project, but the list of available calendars comes from Classic PPM. |
| Task Type | Fixed Duration (`PRTask: PRISFIXED`) | Fixed duration task type maps to True. Fixed unit and fixed work maps to False. |
| Effort Driven | No Mapping | Tasks flagged as Effort Driven take more processing and can degrade performance. |

#### Constraints

The constraints that are defined in Microsoft Project are stored in Classic PPM, but you cannot edit them from Schedule Connect.

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| Constraint Type | `PRConstraint: PRTYPE` | When opening in Microsoft Project, if multiple constraints exist for a task, the first encountered is processed. |
| Constraint Date | `PRConstraint: PRTIME` | Not Applicable |

### Resource Assignment Information Field Mapping

> [!NOTE]
> Changes to any mapped resource fields are not saved to Classic PPM because the product owns the resource record.

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| Units | Max % Load (`PRAssignment: PRESTMAX`) | When opening, this field is set to the Classic PPM value multiplied by the resource maximum units. |
| Number1 | Task Assignment: Proposed ETC (`PRAssignment: PRPENDESTSUM`) | When opening, set to the value or -1 when Pending Estimates is blank. |
| Number2 | Pending Actuals (`PRAssignment: PRPENDACTSUM`) | This field is not saved back to Classic PPM. |
| Resume | Task Properties: Status (`PRAssignment: PRSTATUS`) / Actuals Thru Date (`PRAssignment: PRactThru`) | Status is set to Not Started, Started, or Complete based on actuals and remaining work. |
| Actual Work | Actuals (`PRJ_BASELINE_DETAILS: PREXTENSION`) | Saved to Classic PPM only if Track Mode is set to None. |
| Remaining Work | ETC (`PRASSIGNMENT: PREXTENSION`) | Only the Remaining Work portion is saved back unless Track Mode = None. |
| Work | Actuals and ETC (`PRASSIGNMENT: PREXTENSION`) | Combination of Actual Work and Remaining Work. |
| Baseline Start | Baseline Start Date (`PRJ_BASELINE_DETAILS: START_DATE`) | Not Applicable |
| Baseline Finish | Baseline Finish (`PRJ_BASELINE_DETAILS: FINISH_DATE`) | Not Applicable |
| Baseline Cost | Baseline Cost (`PRJ_BASELINE_DETAILS: COSTSUM`) | Not Applicable |
| Baseline Work | Baseline Usage (`PRJ_BASELINE_DETAILS: USAGESUM`) | You must have Modify Baseline rights to save a baseline to Classic PPM. |

### Notes Field Mapping

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| None | `PRNote: PRCREATEDBY` | Set to the name of the current user when saving to Classic PPM. |
| None | `PRNote: PRCREATEDTIME` | Set to the current system time when saving to Classic PPM. |
| Comments field for projects / Notes field for tasks, resources, and assignments | `PRNote: PRVALUE` | Concatenates multiple notes into a single Notes field when opening in Microsoft Project. |

**How Notes Are Saved Back:** The Internal ID is the key that is used to identify the note when the note is saved to Classic PPM. Do not edit the note or any information. New notes are added after the "Add new note(s)" marker. A hard return starts a new note. Blank lines are removed.

### Private Field Mapping

The `Text3` field is for Resource, Project, Task, and Assignment. This field is used for information that Schedule Connect requires. If your organization uses Text3 for another purpose, change the mapping. Relevant mapping is for `PRUID`. You must have it mapped. Do not remove it without remapping. These mappings are system-wide.

The `Text4` field is for the work breakdown structure (WBS). Schedule Connect uses this field internally to order the WBS when opening the project in Microsoft Project. You cannot remap this field.

| Microsoft Project | Classic PPM | Notes |
|---|---|---|
| Custom property / `prVersion` | `PRJ_PROJECTS: PRVERSION` | Sets the version (internal use only) when opening and saving. |

## OWB: Manage Projects with Open Workbench

As a project manager, use CA Open Workbench (OWB), the OWB Release Notes, and the OWB Glossary for project scheduling and management. Create projects, populate them with tasks, identify dependent tasks that are internal or external to the project, and assign resources. To integrate OWB with Classic PPM, review the Open Workbench Release Notes and glossary of terms.

Open Workbench conforms to and supports the underlying ideas of project management while presenting information in an intuitive and easy-to-learn format. You can also import data, such as tasks, from other projects. You can display project data in various ways, including in spreadsheet views that include Gantt charts and in Critical Path Method (CPM) network views. OWB provides standard views that you can use as is or can modify to meet your needs. When OWB is connected to Classic PPM, you can save and share projects in either tool.

### Open Workbench Release Notes

Use the following Classic PPM Open Workbench Release Notes to help your organization plan for the changes in this optional companion application.

#### What's New

**Resize Popup Windows:** In previous releases, popup windows were too small, did not resize, and required scrolling. You can now resize the following commonly used pop-up windows:
- Task Properties
- Resource Properties
- Project Properties
- External Dependencies
- Subprojects
- Manage, Multiple Baselines
- Preferences
- View Definition (Project - New or Project - Edit View)

On resizing, the controls inside the dialog box move in accordance with the drag.

**Aggregate custom numeric and money values:** In this release, you can decide if the numeric and money values need to be aggregated up the WBS. To enable this option, click **Preferences**, **Options**. In the resulting General dialog box, select the **Aggregate custom numeric and money values** check box. Summary values remain as is, and are not editable. By default this option will be unchecked for fresh install as well as upgrade. Once checked, its value will be persisted on upgrade.

> [!NOTE]
> Open Workbench is supported on Windows 10; however, mobile devices, tablets, and hybrid devices such as Surface Pro are not supported due to screen resolution constraints.

**Supported Languages:**

Open Workbench is available in: Brazilian Portuguese, English, French, German, Japanese.

The Open Workbench documentation is available in English.

> [!TIP]
> Previous versions of the Open Workbench documentation are available from `support.broadcom.com` in Brazilian Portuguese and Japanese.

**Access Product Documentation:**
- From any open dialog, click **Help**.
- Press **F1** on your keyboard.
- Navigate to `techdocs.broadcom.com/` and select your product edition and version. Expand the **Using, Project Management** section for documentation on Open Workbench.

### Open Workbench Glossary

The Open Workbench glossary contains a list of terms for OWB objects and concepts.
- **Availability:** Resource availability is the amount of time a resource is available and can be allocated to a project.
- **Baseline:** A baseline is a snapshot of the project schedule that is taken earlier in the project that you can later use to measure project progress against earlier estimates of project progress.
- **Category:** Use categories to select and filter different groups and classes of tasks, notes, or resources in the view.
- **Critical Path:** Critical path is a set of tasks in a project for which any delay or expansion lengthens the project or causes project deadlines to slip. The critical path determines the project's earliest finish date. Autoschedule uses the critical path value to determine the tasks that drive the project deadlines and constraints.
- **Critical Task:** Critical tasks have a float of zero or less; therefore, when a critical task is delayed, the project finish date or other deadlines are affected.
- **Dependency:** A dependency provides you with a means of ordering the relationship, timing, and logical sequence between a task within the same project (internal dependency) or between a task in your project and a task that is external to the project (external dependency).
- **Dependency Type:** Dependency Type is the constraint that you place on the detail task or milestone's start or finish date. Types include:
- **Finish-Start.** The predecessor task finish date determines the successor task earliest possible start date.
- **Finish-Finish.** The predecessor task finish date determines the successor task earliest possible finish date.
- **Start-Start.** The predecessor task start date determines the successor task earliest possible start date.
- **Start-Finish.** The predecessor task start date determines the successor task earliest possible finish date.
- **Dependency Violation:** A dependency violation is a dependency link that has been improperly set.
- **Duration:** Duration is the length of time, in business days, a task requires from conception to completion, including the start and finish dates.
- **Earned Value Analysis (EVA):** Earned Value Analysis (EVA) is a statistical operation that compares the project actuals against what was planned. EVA is also referred to as Performance Measurement.
- **Estimate To Complete (ETC):** Estimate To Complete (ETC) is the estimated time for a resource to complete an assignment.
- **Fixed Duration:** A fixed duration task is a constrained task that must finish in a specific amount of time. Fixed-duration tasks are constant and are not driven by resource assignments. Also referred to as a time-constrained task.
- **Float:** Float is the number of days that task initiation or completion can be delayed without adversely affecting the project finish date. Formula: Late Start - Early Start.
- **Global File:** The Global File is the default location of global settings, such as calendars, resource files, and note categories.
- **Global Resources:** Global resources are those resources available to you to staff on projects when using Open Workbench with Classic PPM.
- **Highlights:** Highlights are the fonts, colors, symbols, and patterns you can define for highlighting project data.
- **Key Task:** A key task is a task that you consider being of key importance to the project.
- **Lag:** Lag is the predetermined amount of time between the start, finish, or both of two tasks in a project plan.
- **Lag Type:** Lag Type is the unit of measure for the value you enter for lag. You can specify lag in terms of time or percent. Choices are Daily or Percent.
- **Library:** An Open Workbench library is a `.rwl` library file that stores view data, including the names of library groups that categorize views, sorts, and filters.
- **Loading Pattern:** A loading pattern defines how work is spread across the duration of a task.
- **Negative Lag:** Negative Lag is the amount of time or percentage of task duration in which two tasks can be simultaneously in process.
- **Notes:** Notes let you record project-specific information for yourself or for other staff members.
- **Pending Estimate:** A pending estimate is the pending state of ETC until a project manager accepts or rejects the new value.
- **Project Status:** A project status shows the results compared to the project plan.
- **Resources:** Resources are people that are required to complete a project on time. Resources are assigned to project tasks.
- **Roles:** Roles are generic resources that represent the job responsibilities of the resources assigned to a project.
- **Subnets:** Subnets are a set of tasks in a project that have dependencies among themselves.
- **Task Priority:** The task priority controls the order in which tasks are scheduled during autoschedule.
- **Variable Duration:** A variable duration task is a constrained task that can change when you autoschedule your project. Also referred to as a resource-constrained task.
- **Views:** Views are the means by which you display a project plan and other project data.

## OWB: Install and Configure Open Workbench

Install and configure the available Open Workbench (OWB) and Schedule Connect project scheduling software for use with Classic PPM. Configure Open Workbench defaults, file locations, WBS levels, and display options.

### Minimum System Requirements

Open Workbench runs on the Windows operating system. For information about the supported versions of Windows, see the Compatibilities, Client-Side Components section in the Release Notes. To install and run Open Workbench, you must be a power user with the following rights:
- Registry Edit rights
- Read/write access for the `%ProgramFiles%` folder (for x86 Windows) or the `%ProgramFiles(x86)%` folder (for x64 Windows)

We recommend at least 256 MB of RAM when using Open Workbench.

> [!NOTE]
> OWB is not accessibility compliant when the display setting is increased to more than 100%. The information displayed in tables/rows gets overlapped and is difficult to read.

### Uninstall Open Workbench and Schedule Connect

Uninstall any existing version of Open Workbench and Classic PPM Schedule Connect before installing a newer version.

**Follow these steps:**

1. Navigate to the **Control Panel**.
2. Remove the following programs:
- Open Workbench
- Classic PPM Schedule Connect

> [!WARNING]
> The Open Workbench installer resets any customized views that you have saved in the Open Workbench library default views folder. Any saved, customized views from a previous installation are removed from the library when you reinstall Open Workbench. After installing the updated version, you can add back your customized views to the default views folder.

### Install Open Workbench and Classic PPM Schedule Connect

To connect Open Workbench with Classic PPM, download the latest version from:
- **Classic PPM DVD Media:** Navigate to `Clients\OpenWorkbench` and click `owbsetup.exe`.
- **Classic PPM Application:** Open **Home**, and from the **Personal** menu, click **Account Settings** and then click the **Software Downloads** tab. You require the **Software Download - Open Workbench** access right.

> [!NOTE]
> If you already have Open Workbench installed, you can install only Schedule Connect.

**Follow these steps:**

1. Download the latest version of Open Workbench.
2. Save the executable file to your computer. This file includes Classic PPM Schedule Connect.
3. To start the installation process, double-click the executable file.
4. Select your language preference for the installer and click **OK**.
5. Agree to the Open Workbench license.
6. Follow the on-screen instructions to complete the installation.

### Grant User Access Rights

As an administrator, grant users (resources) one of the following access rights in Classic PPM:
- **Project - Edit Management - All** (corresponds to **Workbench [Read-Write]**)
- **Project - View Management - All** (corresponds to **Workbench [Read-Only]**)

### Start Open Workbench

You can start Open Workbench (OWB) from the Programs menu. If you are using Open Workbench with Classic PPM, you can open a project and can launch Open Workbench from Classic PPM.

The main window has the following items:
- An application menu which appears at the top left corner.
- A ribbon menu which appears below the application menu providing access to all the functions.
- A library on the left that contains views which you can apply to projects. The default view automatically appears even if you have not opened a project.

### Configure Open Workbench

If you are setting up Open Workbench (OWB) for the first time, define the program and project default preferences. Program preferences determine how the application behaves each time you start it. Project default options impact project settings, such as the default directory locations and the default dependency type.

Use the tabs on the **Options** dialog to define your preferences. To open the Options dialog, click the application menu, and then click **Preferences**.

> [!NOTE]
> Some of the dialogs allow you to override the default settings.

#### Configure Open Workbench General Options

Use the **General** tab of the Options dialog.

**Follow these steps:**

1. Click **Preferences** in the application menu.
2. Complete the fields in the **General** tab. Key fields:
- **Show Tips at Startup:** Default: Not selected
- **Display Status Bar:** Default: Selected
- **Log on to server:** Opens the Log on to Classic PPM dialog each time you launch Open Workbench
- **View Shortcut Bar:** Default: Selected
- **Recent Project File List Contains:** Default: 4
- **Default Project Format:** Default: `*.RMP`. Values: `*.RMP`, `*.XML`, Classic PPM
- **First Week of Year:** Default: User Locale. Values: User Locale, First Week Contains 1/1, First Full Week After 1/1, ISO
- **Default Currency:** Default: USD
- **Warn When Reading or Writing Different Currencies:** Default: Selected
- **Guideline URL:** Default: Cleared
- **Note Categories:** Define the note categories for grouping project and task notes.
3. Click **OK**.

#### Configure Open Workbench Default Options

Use the **Defaults** tab of the Options dialog.

**Follow these steps:**

1. Click **Preferences** in the application menu.
2. Open the **Defaults** tab.
3. Complete the **Assignments** section:
- **Loading Pattern:** Values: Fixed, Contour, Front, Back, or Uniform. Default: Front
- **Fixed Duration:** Select to specify fixed duration type.
- **Default Unit:** Values: Days or Hours. Default: Hours
- **Auto Calculate ETC:** Default: Cleared
4. Complete the **Dependencies** section:
- **Type:** Default: Finish-Start
- **Lag:** Define days or percent between tasks
- **Lag Type:** Default: Daily
5. Click **OK**.

#### Configure Open Workbench File Locations

Use the **Locations** tab of the Options dialog.

**Follow these steps:**

1. Click **Preferences** in the application menu.
2. Open the **Locations** tab.
3. Select the name of a library, file, view, or dictionary from the Description column, and click **Browse**.
4. Select the folder and click **OK**.
5. Click **OK**.

#### Configure Open Workbench WBS Labels

Use the **WBS** tab of the Options dialog to define the default Work Breakdown Structure (WBS) levels.

Rules:
- WBS level names must be unique.
- At least four levels are retained in the WBS when deleting levels.

WBS icons in master projects:
- **Subproject:** Specifies a proxy task within an inserted subproject.
- **Task in Subproject:** Specifies a task within an inserted subproject.
- **Subproject Task:** Specifies an individually inserted subproject task.

**Follow these steps:**

1. Click **Preferences** in the application menu.
2. Open the **WBS** tab.
3. Complete the following:
- **Milestone Label:** Default: Milestone
- **Task Label:** Default: Task
- **Summary Levels Label:** Default: Phase, Activity
4. Click **OK**.

#### Configure Open Workbench Display Colors

Use the **Display** tab of the Options dialog to set horizontal/vertical lines, alternating row colors, and custom colors.

#### Configure Open Workbench Time Scales

Use the **Time Scale** dialog to define time periods and scale information in Gantt charts and tabulated views.

**Follow these steps:**

1. Open a spreadsheet view that displays a Gantt chart.
2. Double-click the column heading that displays dates.
3. Complete the fields:
- **Start Date:** Defines the start date for the time scale.
- **First Date Displayed:** Default: Project Start. Values include Project Start, Today's Date, Project Committed Actuals Start, User Defined Date, and others.
- **Finish Date / Period Finish Date:** Defines the finish date.
- **Number of Periods:** Enter the number of time scale periods.
- **Scale:** Default: Weekly. Values: Weekly, Daily, Monthly, Quarterly, Semi-annually, Annually, or Customized.
- **Show Week Number:** Display week number in headings.
4. Click **OK**.

#### Configure Web Browsers to Support Both Classic PPM and Open Workbench

**Microsoft Internet Explorer:**

**Follow these steps:**

1. Open Microsoft Internet Explorer.
2. In the **Tools** menu, click **Internet Options**, **Advanced** tab.
3. In the Security section, clear the **Do not save encrypted pages to disk** check box.
4. Click **OK**.

#### Configure the Classic PPM Project Management Options

Before using Open Workbench with Classic PPM, set the following options:
- **Allow Edit of Allocations when replacing Role:** Allows you to edit resource allocation while a project is locked.
- **Only Export Current Baseline When Opening Projects in a Scheduler:** Allows you to export only the current baseline.

#### Configure the Log on to Server Option

**Follow these steps:**

1. Click **Preferences** in the application menu.
2. Select the **Log on to server** option and click **OK**. Default: Cleared

## OWB: Getting Started with Open Workbench

Learn about the Open Workbench (OWB) ribbon bar, view library, calendars, grid columns and rows, project data, and monitoring process progress.

### Open Workbench File Menu

The following commands are available from the application menu:
- **New** (Ctrl+N)
- **Open** (Ctrl+O)
- **Close**
- **Save** (Ctrl+S)
- **Save As**
- **Print Setup**
- **Page Setup**
- **Print Preview**
- **Print** (Ctrl+P)
- **Quick Print:** Prints the active view with last-used settings.
- **Project Properties**
- **Preferences:** Shows the Options dialog.
- **Recent File list**
- **Exit**

### Open Workbench Ribbon Bar

#### Tasks Ribbon

**Clipboard group:** Cut, Copy, Paste

**Edit group:** Delete, Modify, Insert, Phase, Milestone, Task, Indent, Outdent, Undo

**Search group:** Quick Search, Extended Find, Find Next

**Quickfilter group:** Resource filter drop-down, Zoom In/Out

#### Project Ribbon

**Schedule group:** Autoschedule, Critical Path, Recalculate, Pending Estimates

**Baselines group:** Define, Manage

**External group:** Subprojects, Dependencies

**Assignments group:** Transfer

**View group:** New, New Filter, New Sort, Save, Refresh, Manage Library, Colors and Shapes

**PPM group:** Update (Calendar, System Options, New Notes, Resources, Status, New Tasks and Assignments, Team Members)

> [!NOTE]
> You must have the project open in read/write mode to select or clear the PPM update check boxes.

**Calendar group:** Edit

### Open Workbench View Library

The views that you can apply to Open Workbench projects display in the view library. The view library can display up to 32 groups of views.

**Reposition the View Shortcut Bar:** By default, the View Library displays on the left side. To reposition, click the top of the bar and drag it.

**Hide or Restore the View Library:**

1. Click **Preferences** in the application menu.
2. Clear or select the **View Shortcut Bar** check box.

### Open Workbench Calendars

Open Workbench provides a standard calendar by default. Use the **Calendars** dialog to create, edit, select, and print calendars.

> [!NOTE]
> If you are using Open Workbench with Classic PPM, the changes you make to Classic PPM calendars are not saved back to Classic PPM.

#### Apply a Calendar to Projects

1. Open the **Project** ribbon.
2. Click **Edit** in the **Calendar** group.
3. Select the calendar from the **Current Calendar** drop-down.
4. Click **OK**.

#### Create a Calendar

1. Open the **Project** ribbon.
2. Click **Edit** in the **Calendar** group.
3. Click **New** in the Calendar Editing section.
4. Enter a name and select a base calendar.
5. Click **OK**.

#### Delete a Calendar

> [!NOTE]
> You cannot delete the standard calendar.

1. Click **Edit** in the **Calendar** group.
2. Select the calendar from the drop-down.
3. Click **Delete** and click **OK**.

### Open Workbench Grid Columns and Rows

You can change column width, insert/delete columns, determine display order, and sort order.

### Cut, Copy, and Paste Open Workbench Project Data

You can paste task data between view locations, between project files, and from Open Workbench to Windows applications. Supported formats: Tab-separated text, Open Workbench proprietary format, Objects, Gantt chart.

### Monitor Open Workbench Process Progress

Use the **Progress** dialog to review the approximate time for completing the current process. Click **Cancel** to end the process before completion.

## Filter, Search, and Sort in Open Workbench

### Filter Data in Open Workbench

**Follow these steps:**

1. Open the **Project** ribbon.
2. Click **New Filter** in the **View** group.
3. Enter a name for the filter.
4. Drag field names to the **Field** column.
5. Complete **Compare**, **Value**, and **And/Or** columns.
6. Click **Save**.

### Search Data in Open Workbench

**Follow these steps:**

1. Open the **Tasks** ribbon.
2. Click **Extended Find** in the **Search** group.
3. Drag field names to the **Field** column.
4. Select the relationship from the **Compare** column.
5. Enter a value and select **And/Or** as needed.
6. Click **OK**.

### Sort Data in Open Workbench

**Follow these steps:**

1. Open the **Project** ribbon.
2. Click **New Sort** in the **View** group.
3. Enter a name and drag field names.
4. Complete **Start Column**, **Sort Length**, and **Sequence**.
5. Click **Save**.

## Open Workbench Highlights, Colors, and Fonts

Set Open Workbench fonts, colors, symbols, and patterns to highlight project data.

### Define the Colors of Open Workbench Views

1. Click **Preferences** in the application menu.
2. Open the **Display** tab.
3. Select colors for horizontal and vertical lines.
4. Select background colors and alternation mode (Object or Line).
5. Click **OK**.

### Create Highlights

1. Open the **Project** ribbon.
2. Click **Colors and Shapes** in the **View** group.
3. Drag field names into cells in the **Type of Element** column.
4. Define highlight conditions and font settings.

### Define the Gantt Symbol and Color Settings

1. Click **Colors and Shapes** in the **View** group.
2. Expand the Highlight Information folder and select a Gantt view.
3. Double-click a Gantt element sample.
4. Configure Left Endpoint, Center Bar, and Right Endpoint symbols, patterns, and colors.
5. Click **OK**.

### Remove Highlights

1. Click **Colors and Shapes** in the **View** group.
2. Select the highlight row and press **Delete**.
3. Click **Save**.

## Print Project Data in Open Workbench

### Select Printer and Print Layout Options

Click **Print Setup** in the application menu to select a printer and layout options.

### Prepare Pages for Printing

1. Click **Page Setup** in the application menu.
2. Configure margins, page order, and centering.
3. Click **OK**.

### Print Projects from Views

Use the **Print** dialog in the application menu. Set print margins to at least 0.75 in.

## OWB: Create, Open, and Save Projects in Open Workbench

### Create Projects in Open Workbench

**From the Application Menu:**

1. Click **File**, **New**.
2. Click **File**, **Project Properties**.
3. Complete the fields in the **Description** tab.
4. Click **OK** and save your project.

**From the Command Line:**

```
npWBench /r [file].rmp + /rR CLARITY\[projectID]
```

This command creates a new master project with a Read-only project file and a Read-only Classic PPM project.

### Open Projects in Open Workbench

You can open projects from Classic PPM, Open Workbench, or the command line.

**From Classic PPM:**

Your Classic PPM login is sent automatically to Open Workbench. The project opens in the running Open Workbench instance.

**From the Command Line:**

```
npWBench file.rmp /R CLARITY\[projectID]
```

**From Open Workbench (Schedule Connect):**

1. Click **Open** in the application menu.
2. Select the project using the available views (project names, detailed list, or local files).
3. Optionally select **Open as read-only** or **Create Subprojects**.
4. Click **Open**.

### Save Projects in Open Workbench

**Save to XML or RMP Files:**

You can save projects in: Workbench files (RMP), Classic PPM Projects, XML Files.

> [!WARNING]
> If you do not select the **Retain Lock** check box, you can have issues saving your changes to Classic PPM.

**Save New Projects to Classic PPM:**

Requirements: access rights to create projects, resources/charge codes must exist in Classic PPM.

**Save Existing Projects Back to Classic PPM:**

Use the **Save As** option. You must have edit rights and a lock on the project.

### Project Locks in Open Workbench
- **Read-Only:** A lock is not placed on the project.
- **Read-Write:** A lock is placed on the project to prevent others from updating it.

**Close Projects and Hold the Lock:**

1. Open the project.
2. Click **Save As**, select **Workbench Files** from Save as type.
3. Select the **Retain Lock** check box.
4. Click **Save**, then **File > Close**.

**Close and Unlock Projects:**

Save the project back to Classic PPM and then close it in Open Workbench.

### Refresh Project Data in Open Workbench

1. Open the **Project** ribbon.
2. Click **Update** in the **Clarity** group.
3. Select the data to refresh: Calendars, System Options, New Notes, Resources, Status, New Tasks and Assignments, Team Members.
4. Click **OK**.

## Manage Multiple Projects and Subnets in Open Workbench

### Manage Multiple Projects

Open Workbench provides two methods:
- Create master project and subproject relationships.
- Create dependency relationships between tasks in the same or different projects.

### Master Projects and Subprojects

You can create links between a master project and subprojects or parts of a subproject. When you insert a whole subproject, you can choose read/write or read-only mode. Partial subprojects are always read-only.

#### Resource and Role Availability in Master Projects

A resource's default availability on a master project is capped at the highest default availability defined on the master's subprojects. A role's default availability is the sum of the role's default allocation on the subprojects.

#### Insert Subprojects in Master Projects

1. Right-click anywhere in the view, and click **Insert Subproject**.
2. Select the file type and the subproject.
3. Configure **Open as read-only** and **Create Subprojects** options.
4. Click **Select**.

> [!NOTE]
> If your master project is linked to an Open Workbench .rmp project file using a subproject association, you cannot save it back to Classic PPM. You cannot insert XML project files into master projects.

**Follow these steps:**

1. Right-click anywhere in the view, and click **Insert Subproject** in the shortcut menu.
2. Select the file type.

> [!NOTE]
> You cannot insert XML project files into master projects.

3. Click the name of the subproject you want to insert into the master project from the **Projects** list.
4. Complete the following fields, and click **Select**:
- **Open as read-only**: Specifies whether you want to add the project, subproject, or subproject task in read-only mode in the master project. When you insert a subproject into a master project in read-only mode, any changes you make to the subproject from the master project are not saved. Default: Cleared

> [!NOTE]
> This check box is only available if you have edit rights to the selected project, subproject, or subproject task. If you opened the master project in read-only mode, this check box is selected and is unavailable.
- **Create Subprojects**: Specifies if you want the ability to create subprojects from the inserted subproject. Default: Cleared

> [!NOTE]
> If you are inserting a partial subproject, this check box is selected and unavailable.

#### Insert Subproject Tasks in Master Projects

Inserting subproject tasks into a master project allows you to pull out sections of projects and evaluate the work being done by your team across many projects from the master project. You can insert a subproject task into your master project using the Open Subprojects dialog. This dialog is a version of the standard Windows Open dialog. If your master project is linked to an Open Workbench .rmp project file using a subproject association, you cannot save it back to Classic PPM.

**Follow these steps:**

1. Open a view that displays the task detail pane.
2. Right-click the task and click **Insert Subproject** in the shortcut menu.
3. Select the file type.

> [!NOTE]
> You cannot insert XML project files into master projects.

4. Click the name of the subproject from the **Projects** list.
5. Expand the summary level tasks to see and select the task you want to insert into the master project.
6. Complete the following fields, and click **Select**:
- **Open as read-only**: Specifies whether you want to add the project, subproject, or subproject task in read-only mode in the master project. When you insert a subproject into a master project in read-only mode, any changes you make to the subproject from the master project are not saved. Default: Cleared

> [!NOTE]
> This check box is only available if you have edit rights to the selected project, subproject, or subproject task. If you opened the master project in read-only mode, this check box is selected and is unavailable.
- **Create Subprojects**: Specifies if you want the ability to create subprojects from the inserted subproject. Default: Cleared

> [!NOTE]
> If you are inserting a partial subproject, this check box is selected and unavailable.
- **Task**: Displays the name of the selected task or summary task.

#### Insert and Open Subprojects in a New Master Project

You can open any project or a set of projects as subprojects in a new master project using the Open dialog. When you open the subprojects, the selected subprojects are inserted into a new unnamed master file. If you are using Open Workbench with Classic PPM, you can save the new master project back to Classic PPM.

**Follow these steps:**

1. Click **Open** in the application menu.
2. Select the project you want to open as a subproject.
3. Complete the following fields, and click **OK**:
- **Open as read-only**: Specifies whether to open the selected project without locking it.

> [!NOTE]
> This check box is available if you have edit rights for the selected project. If you have only view rights, the check box is selected by default and unavailable.
- **Create Subprojects**: Specifies whether to open the selected project as a subproject in a new master project.

#### Define Subproject Task Options

Use the **Subprojects** tab of the Task Properties dialog for a selected subproject or an external task to review or change the subproject options. When editing subprojects and subproject tasks in a master project:
- The changes you make to subprojects are reflected at the master-project level when you open the master project next, unless you have both the master and subproject open simultaneously.
- If you inserted the subproject as read-only into your master project, you can edit its option, but the changes you make cannot be saved.

**Follow these steps:**

1. Right-click a subproject task in the view and click **Modify** in the shortcut menu.
2. Open the **Subproject** tab.
3. Complete the following fields, and click **OK**:
- **Project**: Review the subproject's name.
- **Read-only**: Select to display the subprojects as read-only in the master project. When you mark a subproject read-only, any changes to it are not saved even if the master project is saved.

> [!NOTE]
> The value for this field cannot be changed if you inserted the subproject task as read-only.

#### Identify Subprojects in the Master Project WBS

You can identify which tasks in your master project WBS are subprojects by the icon in each row. Inside the master project, subprojects appear with a subproject icon on the proxy task header to indicate it is a task inside an inserted subproject.
- **Subproject**: Specifies a proxy task within an inserted subproject, as viewed from the master project.
- Tasks in subprojects are indicated by task icons showing they are part of a subproject and not tasks in the master.
- Unless you change the default Open Workbench colors, tasks in red indicate that the task is on the critical path.

#### Edit Subproject Access in Master Projects

Use the **Subproject** tab of the Project Properties dialog to change access to the subproject from read/write to read-only in a master project. When selected, any changes you make to the subproject from the master project are not saved when you close the master project.

> [!NOTE]
> This tab only appears on the Project Properties dialog for subprojects that were inserted as an entire project into a master project.

**Follow these steps:**

1. Open a view that displays the task detail pane.
2. Right-click the subproject (proxy task) and click **Modify** in the shortcut menu.
3. Open the **Subproject** tab.
4. Clear the **Read-only** check box, and click **OK**.

#### Edit Subprojects from Master Project

If you are working with a master project that contains a subproject, you can edit the subproject's properties only if you inserted the entire project as a subproject into the master project and the subproject's access status is set to read/write.

> [!NOTE]
> If the access status is set to read-only, you can make changes to the subproject from a master project but you cannot save those changes.

**Follow these steps:**

1. Open a view that displays the task detail pane.
2. Right-click the subproject (the proxy task), and click **Modify** in the shortcut menu.
3. Open the **Subproject** tab.
4. Click **Project**.
5. Edit the subproject, and click **OK** when finished.
6. Click **OK**.

#### Print a List of Subprojects from Master Project

Use the **Subprojects** dialog to print a list of subprojects. You can also use this dialog to review, add, or remove subprojects. To view this page, select **Tools**, **Subprojects**.

#### Delete Subprojects or Subproject Tasks from Master Projects

When you remove a subproject relationship from a master project, you do not delete the subproject. Instead, you delete the link between the projects. You can view a list of existing subprojects and subproject tasks that are associated with the master project in the dialog.

Use the **Subprojects** dialog to delete subprojects or subproject tasks from master projects. This dialog lists the names of the subprojects (proxy tasks) or subproject task in the Subprojects list. When you select a task in the Subprojects list, the corresponding subproject name displays in the **Project** field and the task name in the **Task** field.

**Follow these steps:**

1. Open the **Project** ribbon.
2. Click **Subprojects** in the **External** group.
3. Complete one of the following steps:
- To delete a subproject task, expand the summary level tasks to select the subproject task you want to delete from the **Tasks** list.
- To delete the entire subproject, select the subproject (proxy task) you want to delete from the **Subprojects** list.
4. Click **Delete** and click **OK**.

## Update Project Data in Open Workbench

As a project manager, you can update project data in Open Workbench (OWB):
- Define the Project Administrative Details
- Define the Scheduling Properties
- Define the Resources Properties
- View the List of Resources Staffed on Projects
- View Tasks Marked as Key Tasks
- Revert Key Tasks to Standard Tasks
- Define the Project Advanced Management Information
- Add Project-Specific Notes
- Define Note Categories
- Associate Notes with Note Categories

> [!NOTE]
> The Subproject tab displays only when you right-click a task in the view that has been added to a master project as a subproject and select Modify.

### Define the Project Administrative Details

**Follow these steps:**

1. Click **Project Properties** in the application menu.
2. Complete the fields in the **Description** tab. The following fields require explanation:
- **% Complete Calculation Method**: Specifies the method for calculating the % Complete value for the project and the associated tasks. Values:
- **Manual**: Use this method if you want to enter the % Complete value for the project and for tasks at any level in the WBS manually.
- **Duration**: Use this method if you track % Complete for the project and for summary tasks that are based on duration. Completed Duration is the percentage of the task duration that is considered to be complete. Completed Duration for a summary task is the sum of (% Complete * Duration) for all descendant detail tasks. Total Duration is the sum of the duration for all descendant detail tasks. You manually enter the percent complete value for detail tasks. The % Complete is automatically calculated based on the following formula: `% Complete = Completed Duration / Total Duration`
- **Effort**: Use this method to calculate the % Complete for all tasks automatically. Labor Actuals is the sum of all actuals posted for labor resources. Labor Estimates is the sum of all ETC for these resources. The % Complete is automatically calculated based on the following formula: `% Complete = Labor Actuals / (Labor Estimates + Labor Actuals)`
3. Click **OK**.

### Define the Scheduling Properties

Use the **Scheduling** tab on the Project Properties dialog to define or edit a project's scheduling properties, such as the project's start and finish date, as-of date, and priority.

### Define the Resources Properties

Resources are people that are required to ensure a project is completed on time. Resources are assigned to project tasks. Resources that you create are automatically available for use in your project. The resources that display in the Team Resources grid on the Resources tab are those resources that you have already added to the project.

Use the **Resources** tab on the Project Properties dialog to:
- Add or remove resources or roles from your project.
- Define the project resource properties, such as the resource ID, name, or category.
- View a list of resources added to the project.
- Select your project's team from a list of global resources.

You can manually enter resources in the resource detail pane of a view, define their properties, and assign them to tasks. Resources that you create in the Resource detail pane of a view display in the Team Resources grid on the Resources tab.

**Follow these steps:**

1. Click **Project Properties** in the application menu.
2. Open the **Resources** tab.
3. Complete the fields in the **Team Resources** grid:
- **ID**: Defines the resource's external ID.
- **Name**: Defines the resource's name.
- **Category**: Defines the category to which this resource is associated. Use Categories to select and filter different groups and classes of tasks, notes, or resources in the view.
4. Select **Display Resource By** to display resources by category or role hierarchy.
5. Click **OK**.

### View the List of Resources Staffed on Projects

You can view a list of resources that are staffed on your project.

**Follow these steps:**

1. Click **Project Properties** in the application menu.
2. Open the **Resources** tab.
3. View the list of resources that are staffed on your project in the **Team Resources** grid. Click the column heading to sort the list.
4. View the list of resources and roles to which you have booking rights in the **Global Resources** grid.
5. Select one of the following options from the **Display Resources By** drop-down list to view the Global Resources list by category or by role:
- **Roles**: All resources assigned a role are listed under their role. Resources that are not associated with a role are listed in the **No Role** folder.
- **Category**: All resources that are associated with a category appear in a list under their associated category. Resources that are not associated with a category are listed in the **No Category** folder.

> [!NOTE]
> If no categories exist, role is selected and the drop-down list is unavailable.

6. Click **OK**.

### View Tasks Marked as Key Tasks

A key task is a task that you consider being of key importance to the project. When you mark a task as a key task, its status does not affect any other Open Workbench behavior. You can:
- View a list of key tasks on your project
- Revert key tasks to standard tasks

To edit a key task, edit the task fields in a spreadsheet view, such as the Gantt Chart view.

**Follow these steps:**

1. Click **Project Properties** in the application menu.
2. Open the **Key Tasks** tab.
3. View the following key task data, and click **OK**:
- **ID**: Defines the key task's external ID.
- **Name**: Defines the key task's name.
- **Status**: Defines the key task's status. Values: Not started, Started, or Completed
- **Project**: Defines the project name that is associated with the key task.
- **Finish**: Defines the date when the key task is scheduled to finish.

> [!NOTE]
> You can edit the finish date provided you have not assigned a resource to the task and the task is a fixed duration task.
- **Baseline Finish**: Defines the date when the key task is scheduled to finish based on the current baseline.

### Revert Key Tasks to Standard Tasks

You can change a key task into a standard project task. Use the **Key Tasks** tab on the Project Properties dialog to remove the key task designation. You can view the changes that you make on the General tab on the Task Properties dialog and in any view that displays the key task field name.

> [!NOTE]
> When you remove key tasks from the grid on this tab, only the key task designation is removed from the task. The tasks are not removed from the project.

**Follow these steps:**

1. Click **Project Properties** in the application menu.
2. Open the **Key Tasks** tab.
3. Select the row for the key task you want to revert to a standard project task, and click **Remove**.
4. Click **OK**.

### Define the Project Advanced Management Information

You can define advanced management information for a project. The **Advanced** tab provides a central location where you can set project-related values. This tab displays all fields with the following columns:
- **Field**: Displays a list of all the advanced properties you can specify.
- **Value**: Enter or select values for the field. The field values that you can enter depend on the selected field. You can:
- Select displayed checkboxes.
- Enter numeric values, currency, or dates.
- Enter words or phrases.
- Select options from the drop-down lists.

You can manually edit the project % Complete value provided you have set the % Complete Calculation Method on the Description tab of the Project Properties dialog to **Manual**. Add the % Complete field to a view to edit the value from a view.

> [!NOTE]
> The fields that are available for editing depend on your access rights. If a field is not available for selection or editing, it is disabled (by default).

**Follow these steps:**

1. Click **Project Properties** in the application menu.
2. Open the **Advanced** tab.
3. Click a cell in the **Value** column and enter a value for the field, and click **OK**.

### Add Project-Specific Notes

Notes let you record project-specific information for yourself or for other staff members. You can view, add, edit, and remove notes. You can also change the notes categories, and see historical comments. The list of notes display in the History grid.

**Follow these steps:**

1. Open the **Project Properties**, **Task Properties**, or the **Resource Properties** dialog.
2. Open the **Notes** tab.
3. Complete the following steps and click **OK**:
   a. Enter the notes in the text box.
   b. Enter or select a category with which the note is associated from the **Category** drop-down list.

> [!NOTE]
> If you add a new notes category, specify a global file location to make it available for future use.

   c. Click **Add**.
4. To edit, select a note from the **History** grid, and click **Modify**:
- To change the content of the note, change the data in the text field, and click **Modify**.
- To change the note category, select a category from the **Category** list.

### Define Note Categories

You can define the note categories that you use to group project and task notes.

**Follow these steps:**

1. Click **Preferences** in the application menu.
2. Enter the new note category to which you want to associate notes in the **Note Categories** field.
3. Click **OK**.

### Associate Notes with Note Categories

You can associate a project note with a note category. Use Categories to select and filter different groups and classes of tasks, notes, or resources in the view. You can enter new categories to the **Category** drop-down list or you can use the categories that are already listed. The categories listed are those that you added when you defined the Open Workbench general options.

**Follow these steps:**

1. Open the **Project Properties**, **Task Properties**, or the **Resource Properties** dialog.
2. Open the **Notes** tab.
3. Complete one of the following steps:
- Add a note in the text box.
- Select a note in the **History** grid.
4. Enter or select a category with which the note is associated from the **Category** drop-down list.

> [!NOTE]
> If you add a new note category, specify a global file location to make it globally available for use.

5. Click **Add** and click **OK**.

## Track and Analyze Projects in Open Workbench

Tracking is the process for measuring project status and comparing it with the project plan to identify variances and take corrective actions. This process is repeated over the course of a project, allowing you to control and monitor project progress and cost. You can also use tracking information to generate project status reports.

Tracking consists of reviewing information about actuals. Tracking examples include the actual start and finish dates, the actual duration of tasks, the actual time worked by resources, and the actual cost of the project. Tracking also provides information about tasks in progress and those tasks that have been completed.
- Efficient Project Monitoring
- Track Projects
- Analyze Projects

### Efficient Project Monitoring

To ensure efficient monitoring of a project, make the lowest level of the Work Breakdown Structure (WBS) represent small amounts of work. Use milestones to indicate significant events and mark progress.

To monitor a project closely, you must be able to spot problems and trends that develop during the project's life cycle in time to do something about them. Periodic evaluations of your project data can help you pinpoint problems as they arise, letting you initiate the necessary corrective actions to bring the project back on target.

In instances where the word analysis is used, it signifies the review, examination, investigation, and evaluation of project data to:
- Identify deviations
- Determine causes of deviations
- Determine the importance of deviations
- Decide on corrective actions

Deviations are differences between expectations and actuality, including variances that are traditionally used by project managers to compare planned and actual performance. Open Workbench incorporates a number of field names that you can use in views to produce the analysis project managers require to track work performance, spot trouble areas, and account for cost and schedule variances. Use these fields in views to identify tasks with deviations.

### Track Projects

Open Workbench uses several methods to track the progress of a project. No single tracking method is appropriate for all projects because projects vary in size and complexity. In designing a tracking system for your project, determine which tracking method is best suited to your requirements. The tracking methods that you use depend on the size and complexity of the project. You can apply the method that you choose to individual projects and to projects that have master project and subproject relationships.

#### Track Projects by Total Actual Usage

Use this method to track projects based on actuals, pending actuals, and estimate to complete (ETC) entered in Open Workbench for each resource assigned to a task. You can view pending actual hours in the Open Workbench project plan as resources enter hours on their Classic PPM timesheets.

#### Track Projects by Periodic Actual Usage

Use this method to periodically enter resource actuals in the tabulated views and the ETC usage for each resource that is assigned to a task. Periodic recording of resource usage for every task to which a resource is assigned is the most comprehensive and accurate way to track your project.

The actual usage is the timesheet recording method where the actual time each resource spends on a task is recorded at the end of a specific time period. You can use the Gantt Chart view to track resource usage for all tasks to which a single resource is assigned. Use this view to track usage data for one resource across an entire project or group. When you use this view with the Quick Filter by Resource drop-down, you can display data for one resource at a time.

> [!NOTE]
> When tracking periodic actual usage, it is helpful to select the Resource LOA option on the Description tab of the View Definition dialog.

#### Track Projects by Task Status

Use this method to monitor the status of tasks, to change the start and finish dates, and to enter the percent complete values. You can set the task status on the General tab of the Task Properties dialog.

Tracking a project's task status is the easiest way for you to track a project, requiring only that you establish a periodic review cycle to update your project plan. For small to medium-sized projects, it may be enough for you to record only task status information.

When you start a task, the status of Started is recorded in the Status drop-down list on the General tab of the Task Properties dialog, or in any view which includes status data. When a task is completed, change its status to Completed. When you autoschedule a project, tasks that have a status of Started or Completed are unaffected by changes you make to the autoschedule start date.

#### Track and Analyze Projects with Current Baseline

When you have multiple baselines, you can analyze project data by altering the current baseline. You can display the current baseline in a Gantt chart view against the current status of the project.

### Analyze Projects

You can examine all or any part of your project at whatever level of detail you need using Open Workbench. The analysis you may want to perform on a periodic basis includes:
- **Situational**: Getting the project summary.
- **Problem Solving**: Determining what has gone wrong with the project and why.
- **Potential Problem Spotting**: Determining what might happen if you make a particular change.

### Determine When and What to Analyze

Project analysis minimizes or eliminates surprises by providing early warnings of trends and situations in a project. The frequency and extent of your analysis is up to you.

The following questions serve as a guideline for producing useful project health checks:
- Have you defined enough information for each task? (Initial project planning — use the Gantt Chart view)
- Who are the key resources? (While scheduling — use the Resource Assignment view)
- On which tasks are these resources working? (While scheduling — use the Resource Assignment view)
- Is everything on schedule? (Periodically during the project — use the Variance Analysis view)
- How did actual effort compare with the project plan? (Throughout the project — use the Variance Analysis view)

### Validate Project Plan Data

Before you analyze project plan data, verify that its quality is reliable. The data is valid when you have determined that it is complete, up to date, and consistent. You can solve problems with the data by entering corrections directly in views.

**Determine the Completion of Plan Data**

How you intend to use your project plan data determines how complete the data needs to be. For project plan data to be complete:
- All tasks should have assigned resources.
- All task dependencies should be defined.
- All tasks should have nonzero estimates.

**Determine the Accuracy of Plan Data**

For accurate analysis, verify that all of the plan data undergoing analysis is correct and is complete up to the same date:
- All tasks set to start or finish before the reference date have been tracked correctly.
- Actuals have been entered for all resources up to the reference date.

**Determine the Consistency of Plan Data**

To be consistent, verify that the project plan data does not contain:
- Dependency violations
- Overcommitted resources

### Analyze Projects with Earned Value Variances

The deviations between planned and actual performance in a project can be described mathematically as variances. In general, there are two types of variances to watch for: cost variances and schedule variances.

Open Workbench uses the cost and schedule variances to calculate performance and percent complete indices. These indices provide you with a useful indication of the extent to which your project is ahead or behind cost or schedule.

Open Workbench includes fields containing the fundamental calculations that are used for earned value analysis. Earned value calculates the following values for every scheduled activity:
- **Budgeted Cost of Work Scheduled (BCWS)**: The budgeted amount to be spent on the project in a given period.
- **Actual Cost of Work Performed (ACWP)**: The total direct and indirect cost that is incurred in performing work during a given period.
- **Budgeted Cost of Work Performed (BCWP)**: The percentage of the total budget equal to the percentage of the actual work performed.

These values are used together to determine if work is being performed as planned. The most frequently employed measures are:
- Cost Variance (CV), where `CV = BCWP - ACWP`
- Schedule Variance (SV), where `SV = BCWP - BCWS`
- Cost Performance Index (CPI), where `CPI = BCWP / ACWP`

#### Data Required for Earned Value Analysis

To perform optimal earned value analysis, enter valid project data. Certain variance formulas compare current data against baseline data.

> [!NOTE]
> Open Workbench can only compute these variances if you have set a baseline of task data.

Enter the following earned value data in your project:
- Project as-of date
- Resource actuals

> [!NOTE]
> If you are using Open Workbench with Classic PPM, record the resource's actuals in Classic PPM.
- Resource ETC
- Resource billing rate

> [!NOTE]
> If you are using Open Workbench with Classic PPM, define the resource's billing rate in the rate matrix.
- Task percent complete

#### Variance Analysis Indices

Use the variance analysis fields to calculate the deviations between actual and planned performance. These fields automatically compare current plan data against the baseline to quantify cost and schedule variations. Examples of variance analysis fields include Schedule Variance (SV), Cost Variance (CV), and Variance at Completion (VAC).

To view this data, first add the fields to a view.

#### Performance Indices

Variance analysis fields are also used to calculate a range of indices that provide a useful guide to evaluating project and resource performance. Examples of performance index fields are Schedule Performance Index (SPI), Cost Performance Index (CPI), and Schedule Variance Index (SVI).

To view this data, first add the fields to the view.

#### Percent Complete Indices

Use the **% Complete Calculation Method** field on the Description tab of the Project Properties dialog to specify how Open Workbench computes the % Complete value. Earned value data is used against the Budget at Completion (BAC) to calculate the percent complete indices.

The percent complete value is used in the following earned value calculations:
- Budgeted Cost of Work Performed (BCWP)
- Cost Variance (CV)
- Cost Variance Index (CVI)
- Schedule Variance (SV)
- Schedule Variance Index (SVI)
- Schedule Variance Performed (SVP)
- Cost Performance Index (CPI)
- Budgeted Cost of Work Scheduled (BCWS)
- Actual Cost of Work Performed (ACWP) as a percent of the baseline budget

Periodic reviews of these measures can help you uncover trends over time as your project progresses. Examples of percent complete index fields include Perform % Complete, Schedule % Complete, and Actual % Spent.

## Display Project Plan Data in Open Workbench Views

You can display project plan data in Open Workbench (OWB) views. Use views to enter project data, add or delete tasks, and modify a project plan. Open Workbench provides standard views, sorts, filters, and highlights to enter and organize project information.

You can display project data in two types of views:
- **Spreadsheet Views**: Can use Gantt charts to display project status and task relationships graphically. Most of the predefined views in Open Workbench are spreadsheet views.
- **Critical Path Method (CPM) Network Views**: Display task relationships and the critical path of the project. CPM Network views appear in an organizational chart format, with the boxes representing task dependencies rather than organizations.

Both types of views use field names in their definitions to determine what data they display, and both are created in the View Definition dialog.

### Open Workbench Spreadsheet Views

A spreadsheet view displays project data in a variety of ways. These views can appear as spreadsheets with editable cells. They can also display a Gantt chart that depicts the project schedule and the timing and relationships between tasks.

Depending on the field names used to define the view, spreadsheet view may contain several panes that display different types of project data. For example, a spreadsheet view may display any combination of the following:
- A task detail pane containing editable project data on tasks
- A pane displaying a Gantt chart and a time scale
- A resource detail pane containing editable data on resources that are available for task assignments or that are assigned to tasks

The default Gantt Chart view is available from the Favorites library group.

### Open Workbench CPM Network Views

A Critical Path Method (CPM) Network view displays data as a graphical model of tasks and their relationships. Each task is portrayed in a cell which may be linked to other cells in order of precedence. Unlike a spreadsheet view, you cannot enter, sort, or filter data directly in CPM Network views. However, you can create dependency relationships in a CPM Network view and you can edit task properties by opening the Task Properties dialog from the view.

The default CPM Network view is available from the Favorites library group.

#### View the CPM Network View from the Overview Window

Use the Overview Window to view a specific area of a CPM Network view. You can also select **Zoom In** from the shortcut menu to make objects in the current view larger, or **Zoom Out** to make the current view hold and display more data.

> [!NOTE]
> The Windows System Font does not scale and may be rendered unreadable by zooming out. One way to solve this is to change the Windows System Font to a scalable one, such as Arial. Another way is to zoom back in and manipulate your window on the CPM display.

**Follow these steps:**

1. Open the CPM Network view.
2. Right-click and click **Panning Overview** in the shortcut menu.
3. Drag the dotted square over the miniature CPM cells. The area within the cell scrolls into view in the current window.

> [!NOTE]
> You cannot sort or filter Critical Path Method (CPM) Network views. However, you can zoom in, zoom out, and use the Panning Overview option to focus on a smaller window of dependencies. The Panning Overview option appears when you right-click on a dependency box in a CPM view.

### Create a View in Open Workbench

You can create a view in Open Workbench (OWB). The view name appears at the top of the view after the project name and on the header when you print the view. The view status appears at the bottom of the view if you have the **Display Status Bar** option selected on the General tab of the Options dialog.

To create a view, first define the layout and then describe the view. You can edit the view layout, define the sort data, and define filters for views. The views that you create are saved as `.rwv` view files.

**Follow these steps:**

1. Open the **Project** ribbon, and click **New** in the **View** group. The View Definition dialog appears.
2. The **Layout** tab on the View Definition dialog displays a list of fields that appear as columns in a view. The Layout tab displays the following information folders:
- **Task Information**: Contains field names that comprise the body of the view; they are displayed in the task detail pane.
- **Resource Information**: Contains resource-specific field names and summary information by resource that displays in the resource detail pane or the task detail pane.
- **Project Information**: Contains project-specific field names.
- **Highlights Information**: Contains highlighting options that you can use to highlight field names that are used in a view.
3. Perform any of the following tasks using this tab:
   a. Insert a column. Select the column where you want the new column to appear and press the **Insert** key on your keyboard.
   b. Remove a column. Select the column and press the **Delete** key on your keyboard.
   c. Format the cells in a column. Click one of the cells in the column and click **Format Cell** to apply formatting options to the cells.
4. Double-click the information folders to display the field names. Select and drag the field name into cells in the layout selection grid. To replace an existing field cell, drag the field to that cell. To add the field as a new cell in the grid, drag it to an empty cell.
5. Click the **Description** tab and complete the following fields:
- **View Type**: Defines the view type. Values: Spreadsheet (table format) or CPM (graphical model). Default: Spreadsheet
- **Level of Analysis**: Specifies the WBS level that you want to display in the view. Values: Task, Project, Phase, Activity, and WBS Level
- **Resource LOA**: Indicates whether you can see consolidated data on resources. This field is used with the filter tool.
- **Name**: Defines the name of the view. If you create a new view and do not populate the name field, the name field automatically populates with the file name when you save it.
- **Author**: Defines the name or the resource designing the view or managing the project. Default: Classic PPM
- **View Status 1**: Defines the status of the current view.
- **View Status 2**: Defines the status of the current view.
- **Notes**: Enter any notes related to the view definition.
6. Click **OK**.
7. Enter a file name and click **Save**. You can save a view to any library group.

> [!TIP]
> If you use the view often, save it in the **Favorites** library group.

### Edit a View in Open Workbench

You can edit a view.

1. In the **Library** shortcut bar, select a view.
2. Click **Edit View** to edit the fields and columns in an existing view. After you have edited the view, you can replace the previous view settings or can save your changes as a new view.

### Set Up Sorts for Open Workbench Views

You can create sorts as part of a view, or as separate elements that you can apply to the current view. The sorts that you create as part of a view are saved and applied with the view. If you create a sort file, you can add it to your library file and can apply it to any window.

**Follow these steps:**

1. In the **Project** ribbon, click **Manage Library** in the **View** group.
2. Select the view from the Libraries dialog and click **Edit**.
3. Open the **Sort** tab.
4. Double-click the information folders to display the field names that are associated with the current view.


5. Drag the field names to the **Field** column to create or edit a sort.
6. Complete the following columns in the Sort grid section:
- **Start Column**: Enter the column number at which to start the sort.
- **Sort Length**: Enter the number of sort characters.
- **Sequence**: Select Ascending or Descending.
7. Click **OK**.

### Set Up Filters for Open Workbench Views

You can create filters as part of a view, or as separate elements that you can apply to the current view. The filters that you create as part of a view are saved and applied with the view. If you create a filter file, you can add it to your library file and can apply it to any window.

**Follow these steps:**

1. Open the **Project** ribbon.
2. Click **Manage Library** in the **View** group.
3. Select the view from the Libraries dialog and click **Edit**.
4. Open the **Filter** tab.
5. Double-click the information folders to display the field names that are associated with the current view.
6. Drag the field names to the **Field** column to create or edit a filter.
7. Complete the following columns in the Filter grid section:
- **Compare**: Select the appropriate relationship. For example, Equal to or Greater.
- **Value**: Select or enter the defining criteria.
- **And/Or**: Select from And or Or to add another row to the filter.
8. Click **OK**.

> [!NOTE]
> The data type of the value must correspond to the field name. For example, if the field name is numeric, the value must also be numeric. You can use wildcard characters (* for any number of characters or ? for single characters) to search for substrings within field names.

### Apply Filters to Open Workbench Views

You can refine the content of a view by selecting and applying filtering criteria that defines what project, task, or resource information to display. You can apply filters to any spreadsheet view, but not to a CPM view.

When you define a filter in the View Definition dialog, it is considered to be part of the view's definition and applied every time you apply the view. If you create a separate filter, you can add it to your library and apply it to any open project.

**Follow these steps:**

1. Open the **Project** ribbon.
2. Click **Manage Library** in the **View** group.
3. Select your filter in the **Favorites** folder, and click **Apply**.

### Add Fields to Open Workbench Views

Field names are the building blocks of views, sorts, filters, and highlights. They represent either distinct data fields or calculated values that are used in Open Workbench.

Use the **Layout** tab on the View Definition dialog to assign a field name to a view. The fields that are available for you to add to the view are displayed in bold.

**Follow these steps:**

1. Open the **Project** ribbon.
2. Click **Manage Library** in the **View** group.
3. Select the view from the Libraries dialog and click **Edit**.
4. Double-click the information folders to display the field names.
5. Complete one of the following steps:
- Select field names and drag them onto cells in the grid.
- Enter a field name in a grid cell. The field name must be preceded by `=`.
- Place the cursor in a cell, and double-click a field name.
- Place the cursor in a cell, and then select a field name and press the **Insert** key on your keyboard.
> [!NOTE]
> When you add a field to a blank column, a new column automatically appears to the right of that column. Column headings are automatically entered when you add the Task and Resource Detail field names to the grid. You can change a heading name by editing it in the column.

6. Click **OK**.

### Save Open Workbench Views

Use the Save View Definition dialog to specify the name of the view, its directory, and the library file where you want to save the active view. You can save the modifications that you make to a view as a new view, or you can replace the current view with your modified view.

**Follow these steps:**

1. Open and edit the current view.
2. Open the **Project** ribbon.
3. Click **Save** in the **View** group.
4. Click one of the following options:
- **Create**: Creates a new view without altering the existing view.
- **Replace**: Replaces the view with your changes.
5. Complete the fields in the Save View Definition dialog.

> [!NOTE]
> The Library Group determines the view's placement on the library. When you save a view, a file name is assigned to the view using the following convention: `filename.rwv`.

6. Click **OK**.

### Insert and Delete Rows in Open Workbench Views

Inserting a row in a view provides you with a way to add data to a specific place in a project. However, when you delete rows from a view, ensure they do not contain data that you will need later in the project.
- To insert a row, select a row header button, and then press **Insert** on your keyboard.
- To delete a row, select a row header button, and then press the **Delete** key on your keyboard.

> [!WARNING]
> If you delete a row you did not intend to delete, you can recover it by choosing **Undo** from the Edit menu.

### Apply Formats to Cells in Open Workbench Views

Use the Formatting Options dialog to apply formats to a cell in a view.

**Follow these steps:**

1. Open the **Project** ribbon.
2. Click **Manage Library** in the **View** group.
3. Select the view from the Libraries dialog and click **Edit**.
4. Select the cell to format and double-click the cell or click **Format Cell**.
5. Define the following information:

> [!NOTE]
> Settings and options that do not apply to the data in the selected cell are disabled.
- **Width**: Defines the numeric value for the width of the column (in pixels). You can change the column width in the view by dragging a column divider left or right.
- **Decimals**: Specifies the number of decimal places for data in the cell. Values: 0, 1, or 2
- **Alignment**: Specifies the alignment of data in the cell. Values: Left, Center, or Right
- **Units/Format**: Defines the unit or format for the data in the cell. Values: Days, Hours, Percent (of total availability), or As Is

> [!NOTE]
> The As Is option allows you to report mixed units of measure in a view.
- **Period Unit**: Defines the period unit for the data in the cell. Values: Per Day, Percent, or Per Period (for tabulated elements only).

6. Select the options in the **Options** section:
- **Protect**: Defines whether to make the field read-only. Default: Cleared
- **Blank if Zero**: Defines whether to make the field appear blank if its value is zero. Default: Cleared
- **Column Totals**: Defines whether to show the total for all the values in a column in a separate pane. Default: Cleared
- **Tabulate**: Defines whether to arrange data in a tabular format. Default: Cleared

> [!NOTE]
> The default is cleared unless there is another tabulated field name in the same column.
- **WBS Indent**: Defines whether to indent tasks that are based on the Work Breakdown Structure levels. Default: Cleared

7. Click **Time Scale** to specify how time scales appear in a view.
8. Click **OK**.

### Apply Open Workbench Views to Projects

You can apply views to a project in the following ways:
- **Display a single view**: From the Library, open a group and click a view to apply it, replacing the current view.
- **Display multiple views simultaneously**: In the Library, right-click a view icon and select **New Window** from the context menu.

### Remove Field Names and Columns from Open Workbench Views

**Follow these steps:**

1. Open the **Project** ribbon.
2. Click **Manage Library** in the **View** group.
3. Select the view from the Libraries dialog and click **Edit**.
4. Perform one of the following steps and click **OK**:
- Select the column and press the **Delete** key on your keyboard.
- Select the field and press the **Delete** key on your keyboard.
5. When prompted, you can:
- Override the old view with your changes, or
- Save your changes as a new file that you can apply later to other views.

### Configure a Gantt View in Open Workbench

You can see baseline data and configure a Gantt chart in Open Workbench (OWB). For Percent Complete to display correctly when rolled up to the activity or phase levels, first set a baseline. All dates that are displayed in the Gantt chart are equally distributed along its width.

**Follow these steps:**

1. Open a view that displays a Gantt chart.
2. Double-click the Gantt chart.
3. Complete the fields in the **Gantt Bars** section:
- **% Displayed**: Displays a bar indicating the percent of work. Values:
- **Pct Expend**: Displays the percentage of work expended on the task, compared to the estimated amount.
- **No Pct**: Does not display any percentages.
- **Pct Complete**: Displays the percentage of work completed to date.
- **Act Thru**: Displays the percentage of actuals posted against a task to date.
- **Baseline**: Specifies whether to display the baseline bars next to the task progress bars.
- **Float**: Specifies whether to display bars indicating the amount of float in tasks. Formula: `Late Start - Early Start`.
- **Stacked**: Specifies whether to superimpose baseline data on the existing project data.
- **Show Dependencies**: Specifies whether to display dependencies.
- **Freeze Gantt Bars**: Specifies whether to prevent users from manually extending or shortening the Gantt bars.
- **Show Summary Task Progress**: Specifies whether to show summary task progress.
- **Discontinuous**: Select to display bars indicating breaks in task-related work, such as holidays and weekends.
- **Filter segments less than**: Defines the maximum number of days to filter segments.
4. Complete the fields in the **Display Dates** section:
- **Width**: Defines the width of the Gantt chart in pixels.
- **Today's Date**: Specifies whether to use the current system date as the display date.
- **Project Start**: Specifies whether to use the start date of the first task as the display date.
- **As-of Date**: Specifies whether to use the As-of date as the display date.

> [!NOTE]
> Enter this date on the Advanced tab on the Project Properties dialog.
- **Project Finish**: Specifies whether to use the finish date of the last task as the display date.
- **Holiday**: Specifies whether to use nonwork days as the display date.
- **Pending Finish**: Specifies whether to use the end of the current time period as the display date.
5. Click **OK**.

### Open Workbench Library Groups

An Open Workbench (OWB) library is a `.rwl` library file that stores views and their library data. Library groups help you categorize views, sorts, and filters. The library stores all predefined and custom views, highlights, filters, and sorts in library groups.

#### Add a New Library Group

Library groups define the group or folder in the library where you access views. The changes that you make in the library group affect the library after you close the Library dialog. Up to 32 groups can appear on the Library shortcut bar. When you open a group, all its associated views, sorts, and filters appear.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Manage Library in the View group. 3. Select the Groups folder and click Add. 4. Click OK.

Use the Libraries dialog to create library groups and to view the folder layout of the library. The following library groups are available by default:
- Favorites. Contains the Gantt Chart, CPM Network, and Phase Level Gantt standard views. - Planning. Contains the WBS Definition, Dependency Definition, and Resource Assignment standard views. - Executing. Contains the Schedule and Dependency Status standard views. - Controlling. Contains the Status Update, Unused Availability, Variance Analysis, Revise Schedule standard views. - Filters & Sorts. Contains the Clear Filters, Clear Sorts, Key Tasks, Sort by Resource, and Pending ETC standard
views.
Change Items in the Library Groups
Use the Libraries dialog to create groups and add views and filters to them. Changes that you make in the library affect the library after you close the Library dialog.
> [!NOTE]
> You must have appropriate user rights to change items in the Corporate View Library. Changes to the Corporate View Library affect all its users.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Manage Library in the View group. 3. Change the following in the library:
- Groups list Select the groups or expand a group and select a view, sort, or filter. - Location Displays the directory path and file name for the selected view, filter, or sort.
Add Views, Filters, or Sorts to Library Groups
Use the Open dialog to add new views, filters, or sorts to a library group. Sort and filter files are views with sorting or filtering criteria that are specified. You can also define sorting and filtering criteria within a view definition as part of the view definition file.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Manage Library in the View group. 3. Select a group and click Add. 4. Select the file name from the File name drop-down list:
- View Definition (*.rwv): Adds a new view to the group. - Sort Definition Files (*.rws): Adds a new sort to the group. - Filter Definition Files (*.rwf): Adds a new filter to the group. 5. Select a path and file name and click Open. 6. To apply the selected view, filter, or sort, select the groups or expand a group and select a view, filter, or sort. 7. Click Apply. 8. Click OK.
Remove Groups, Views, Filters, or Sorts from the Library Groups
**Follow these steps:**
1. Open the Project ribbon. 2. Click Manage Library in the View group. 3. Select groups or expand a group and click Remove.


4. Click OK.


OWB: Add Project Tasks and Assign Resources
Tasks are the work items in your CA Open Workbench (OWB) project. During the project planning process, you define the tasks that are required to complete and accomplish the objectives of the project. In OWB, the project tasks are organized according to a Work Breakdown Structure (WBS). The default WBS for Open Workbench includes the following hierarchical levels:
- Phase - Activity - Task or Milestone
> [!NOTE]
> You can change the labels that are used to identify your WBS levels.
Phases are the major steps that are required to achieve the project's goal. Most well-defined projects have multiple phases with specific objectives. Within each phase, there are a number of activities leading to the completion of the phase's objectives. You can further divide each activity into tasks and milestones. A task is the smallest identifiable project component. A milestone marks significant events or dates that are used to measure the progress of a project.
Only the memory and disk space on your computer limit the number of tasks that you can add to a project or WBS.
- Insert New Project Tasks in Open Workbench - Establish Task and Resource Constraints - Edit Tasks in Open Workbench - Define the Resource Properties - Define Dependency Relationships - Define Advanced Properties - Add Project, Task, and Resource Notes in Open Workbench - Assign Resources to Tasks in Open Workbench - Set Resource Loading Patterns - Track Resource Progress in Open Workbench
Insert New Project Tasks in Open Workbench
Several methods are available to create project tasks in Open Workbench (OWB) on new and existing projects, move tasks around in projects, and delete tasks. At a minimum, you can add tasks and can define some of their properties directly in a spreadsheet view, depending on the task-specific field names the view displays. Or, you can add tasks and can define their properties in the Task Properties dialog. To view the Task Properties dialog, right-click any task row and click Modify in the shortcut menu.
The Task Properties dialog consists of the following tabs: General, Scheduling, Dependencies, Advanced, and Notes. The tabs that are available in this dialog depend on whether you are creating a phase or activity, a task, or a milestone.
- If you select a phase or activity that is part of a master project or a subproject, only the General, Advanced, and Notes tabs display.
- If you select a task or milestone that is part of a master project or a subproject, all tabs except the Subprojects tab display.
- If you select a single task that was inserted into a master project as a subproject, all of the tabs display, including the Subprojects tab.
You can add tasks to your project directly in a spreadsheet view, such as the Gantt Chart view.


**Follow these steps:**
1. Open a view that displays the task detail pane. 2. Right-click in a row above which you want to create your task, and click Insert Task in the shortcut menu. 3. If the view displays task-specific columns, click in the cells of the new task to enter task-related data. You can also
right-click the new task row and click Modify in the shortcut menu.
Shift Tasks
You can manually change a task schedule by dragging its Gantt bars to a new position. When you move Gantt bars, a pop-up window displays the new dates. The task start and finish dates change to reflect its new position in the Gantt. Changes that you make to the start and finish dates automatically update the task's start and finish dates. To view this information, open the General tab on the Task Properties dialog.
Shifting Task Start and Finish Dates Interactively (Gantt Chart) - You can shift the start or finish dates, extending the task duration relative to the surrounding time frame. - You can shift the entire task to a new position relative to the surrounding time frame, keeping the task duration intact.
Shifting Task Notes - Dependency relationships may affect your ability to change the task start and finish dates, and their duration. - You can shift only one task at a time. - You cannot:
- Shift tasks if you have selected the Freeze Gantt Bars check box in the Gantt dialog. - Move completed tasks. - Set the start dates of tasks to begin after the start date of their resource assignments. A task's start date can only
be before or on the assignment start date. - Set the finish date of tasks to end before the finish date of their resource assignments. A task's finish date can only
be on or after the last assignment date. - Change the end date of a variable-duration task to a date later than the end date of the last end date of the
assignments, regardless of the loading pattern. You can, however, change the end date on fixed-duration tasks. - Change the start and finish dates of variable-duration tasks that have resource assignments with ETC. Instead, you
can move these tasks. - Change the start date of tasks that have actuals entered against them, unless the task is of a fixed duration and the
start date is earlier than the earliest actuals entered. - Set task durations longer than the recalculated duration if the variable tasks have resource assignments with ETC.
However, you can drag Gantt bars to new positions on the Gantt chart, changing task start and finish dates.
Change Task Location in Project WBS
After you create a project task, you can change its position in a spreadsheet view that displays the task detail pane, such as the Gantt Chart view.
> [!NOTE]
> If you move a task to an empty location that is within a subproject or after the last line of a subproject, the task becomes part of that subproject.
**Follow these steps:**
1. Click the header for the task you want to change location to select the task, and then click the selected row and hold the mouse button.
2. Drag the task to the new location in the view, and release the mouse button.

Establish Task and Resource Constraints
During the planning process, you can establish and fine-tune task durations for all project tasks to obtain an acceptable total project duration. You can create tasks with either fixed or variable durations, sometimes referred to as timeconstrained and resource-constrained tasks, respectively. For example, a meeting task is time-constrained rather than resource-constrained. Use the General tab on the Task Properties dialog to define duration of a task.
Autoschedule handles the following task duration types differently:
- Fixed Duration. A fixed duration task is a constrained task that must finish in a specific amount of time. Fixed-duration tasks are constant and are not driven by resource assignments. A fixed-duration task is also referred to as a timeconstrained task. When you autoschedule, the length of the task is not changed on the project.
- Variable Duration. A variable duration task is a constrained task that can change when you autoschedule your project. Variable-duration tasks depend on the availability and the number of assigned resources. A variable-duration task is also referred to as a resource-constrained task. When you autoschedule, the length of the task is adjusted around the assigned resource's remaining availability, loading patterns, and maximum percent loading.
Edit Tasks in Open Workbench
You can select more than one task or resource to edit properties as a group. You can apply common properties or change properties for a selected group of tasks simultaneously, without having to open each task and edit properties.
Use the Task Properties - Multiple Selections dialog to edit multiple tasks. To view this dialog, from a view that displays the task detail pane, select the tasks you want to edit, right-click, and click Modify.
Use the Task Properties dialog to define or update task properties. To view this dialog, double-click the header button to the left of the task you want to update. Use the different tabs on this dialog to create and edit data that you may not find available in a view.
You can also update a task by right-clicking it in a spreadsheet view to access the shortcut menu which displays a list of task-related commands. You can edit subproject task properties if you have Read/Write access or if you save a master project as an Open Workbench project (.rmp) file. You can also select multiple tasks to define or to edit the common properties using the Task Properties - Multiple Selections dialog.
The properties that are displayed on the tabs on the Task Properties - Multiple Selections dialog are those that have the same entry or setting for all of the tasks you have selected. If a field is editable, but the selected tasks do not have the same entry or setting, the field displays blank. When you enter values in blank fields, the values for those fields change for all of the selected tasks. Non-editable fields are disabled. Check boxes appear disabled and selected if the selected tasks have different settings.
The tabs and fields on this dialog are the same as those on the Task Properties dialog, except the changes you make apply to all of the selected tasks.
Rules for Editing Multiple Tasks
- You cannot insert new tasks from this dialog. - If any of the selected tasks are subproject tasks, you cannot change the task properties. - If you select detailed tasks and summary tasks together, those tabs not applicable to summary tasks, such as the
Dependencies and Resources tabs do not display. - When entering a value in a field for which the value must be unique, the first selected task assumes the entered value,
and subsequent tasks assume unique incremental numbers. For example, if you enter an ID of ENG while editing a group of three tasks, Task 1 is given ENG as its ID, Task 2 an ID of ENG-0, and Task 3 an ID of ENG-1. - Some advanced properties are disabled because the value is not common to all selected tasks.
Use the General tab on the Task Properties dialog to define the basic attributes of a task, and to identify the task as a key task on the project. You can also use this tab to apply properties to more than one task.
The following task schedules are displayed on this tab:
- Current. The values that are displayed are the current values when calculating the critical path. - Baseline. The values that are displayed are automatically generated during project baselining and are read-only. - Early. The values that are displayed are automatically generated when you autoschedule your project and they are
read-only. An early schedule indicates the earliest a task can be completed, based on all the dependencies and constraints. - Late. The values that are displayed are automatically generated when you autoschedule your project and they are read-only. A late schedule indicates the latest a task can be completed, based on all the dependencies and constraints.
**Follow these steps:**
1. Open a view that displays the task detail pane. 2. Select one or more tasks. 3. Right-click the task that you want to define, and click Modify in the shortcut menu. 4. Complete the fields. The following fields require explanation:
- Category: Defines the name of the group or class to which this task belongs. - Type: Defines the task type. Values: Milestone, Task, Phase, Activity Default: Task - Key Task (Type): Specifies whether the task is essential to the project and if it is a key task. When you mark a
task as a key task, the task is listed on the Key Tasks tab on the Project Properties dialog. You can always revert tasks to standard tasks. - Duration: Defines the length of time, in number of business days that the task (if this task is fixed) takes to complete. Values: 1 through 20,863. - Fixed (Duration): Specifies whether the task duration is fixed or variable. Default: Cleared (Variable) - Priority: Defines the task priority or priority inheritance if the task does not inherit the priority from parent or any higher WBS level. Default: 10 if the parent task priority or any higher WBS level has not been set. Values: 0 through 36. The lower the number, the higher the priority.For example, if the task has a priority of 0 through 9, it is given the highest priority during scheduling. If the task has a priority of 11 through 36, it is given the lowest priority during scheduling. - Inherited (Priority): Specifies whether you want this task to assume the priority of its parent task, or the next highest WBS level. When selected, the Priority field is not available. Default: Selected 5. Complete the fields. The following fields require explanation: - Start: Defines the task start date for the current schedule. Default: Today's date or the next business date after today's date. - Finish: Defines the task finish date for the current schedule. Note: If you do not enter a finish date, Open Workbench calculates the date based on the tasks duration and start date. - Status: Defines the task completion status. Values: Not Started, Started, or Completed Default: Started - % Complete: Defines the progress of the task as a percentage. Regardless of the setting for the % Complete Calculation Method on the Description tab of the Project Properties dialog, you can always edit the percent complete value for any milestone tasks. This value can also be used in the earned value calculations. - If % Complete Calculation Method is set to Manual, you can edit this field for the project and for all summary
and detail tasks. The status of a summary level task changes only if either the status or the % Complete value is manually modified. - If % Complete Calculation Method is set to Effort, the value in this field is automatically calculated for the project and for all summary and detail tasks. - If % Complete Calculation Method is set to Duration, the value in this field is automatically calculated for the project and summary tasks based on the values manually entered for the detail tasks. Values: 0 through 100. 6. Click OK.

Task Duration
Duration is the length of time, in business days, a task requires from conception to completion, including the start and finish dates. You can change the task duration using different ways. You can edit it directly on the desired position on the timescale in a spreadsheet view, such as the Gantt view, by clicking and dragging the left or right side of the Gantt bar to the desired position on the timescale. You can also use the General tab on the Task Properties dialog to edit task duration.
When you add tasks to a project, the task's default start date is today's date, or the next working date after today's date if today is a holiday or a non-work day.
The maximum duration you can define can extend from present day to June 3, 2079. The duration for variable-duration tasks is automatically calculated. For fixed-duration tasks, the application automatically calculates the task's finish date. If the task is fixed and you change the finish date, the duration is automatically calculated.
During autoschedule, the duration is not changed for fixed-duration tasks, except when you enter an autoschedule start date that is greater than the task finish date. In this case, ETC is moved for resources and roles to start from the autoschedule start date and is spread to the task finish date, depending on the loading pattern. If the autoschedule start date is greater than the task finish date, then the finish date is moved to the autoschedule start date, and all ETC is placed on that date.
1. Right-click the task, and click Modify in the shortcut menu. 2. Complete the Duration field and the Fixed check box.
Task Priority
The task priority controls the order in which tasks are scheduled during autoschedule, subject to dependencies and task and resources constraints. Autoschedule, therefore, schedules tasks with higher priority ahead of tasks with lower priority. The priority value you enter in the Priority field is used when scheduling task.
If you do not define the task priority but instead select the Inherited (Priority) check box on this tab, the priority is inherited from its parent task or the next highest WBS level. By default, this check box is selected.
Task Status and Percent Complete
You can update the status of a task by setting the values in the Status and % Complete fields in the task properties. Depending on the setting for the % Complete Calculation Method on the Description tab of the Project Properties dialog, you can edit or automatically populate the % Complete field.
You can also define the task status by editing the task in a view that has the following data elements on its layout: Status, Start, Finish, and Percent (%) Complete.
When updating the task status, the following rules apply:
- You can enter 100 as the % Complete value for tasks with a status of Started. - You can only mark tasks as Completed if the resource assigned to the task has no remaining ETC on the task. - If you change the status of the task to Completed, the % Complete field automatically updates to 100. If you then
reduce the % Complete value, the status changes to Started. - If the task is a milestone, you can select the status as Completed or Not Started. - If the task has an ETC greater than zero or has actuals but it has not started, you cannot change the status to Not
Started unless you first remove the ETC and actuals from the task. - If the task has an ETC greater than zero, you cannot select a status as Completed.
Delete Tasks
You can delete a task from your project manually in the view, such as the Gantt Chart view. To delete the task, right-click the task, and click Delete Task in the shortcut menu.

Define the Resource Properties Use the Resources tab on the Task Properties dialog to define the assigned resource actual usage, ETC, and maximum percentage on tasks.
Use the Resources tab to: - Define the resource actual usage on tasks. - Define resource ETC on tasks. - Define resource maximum percentage on tasks. - Release resources from task assignments. - Transfer task assignments between resources.
Define Resource Actual Usage on Tasks If you previously recorded resource periodic actual usage, you cannot change the total actual usage directly in a view.
**Follow these steps:** 1. Open a view that displays the task detail pane. 2. Right-click a task and click Assignments from the shortcut menu. 3. Select the name of the resource for which you want to record total actual usage in the Assigned Resources grid. 4. Complete the following fields to update the resource detail section of the view to reflect the resource's actual usage on
the task: - Actual Defines the cumulative actual usage. - Act Thru Defines the last date through which actuals have been captured on the task for the resource. 5. Click OK.
Remove Resource Actual Usage on Tasks Use the following procedure to remove actuals for a specific resource that is assigned to a task. You can also use this procedure if you are using Open Workbench with Classic PPM and if the resource track mode, the method of time capture, is set to none in Classic PPM.
> [!NOTE]
> For more information, see Resource Management.
You can remove actuals or you can convert any actual usage that has been recorded after the date back to ETC usage.
**Follow these steps:** 1. Right-click a task in the view and click Assignments. 2. Complete one of the following steps in the Assigned Resources grid:
- Clear the Act Thru date to remove all actuals. - Change the Act Thru date to an earlier date to convert any actual usage that has been recorded after the date
back to ETC usage. 3. Click OK.
Define Resource Estimate to Complete on Task You can also define a resource's ETC on a task from the Schedule spreadsheet view. Enter hour or day ETC values depending on the Default Unit setting you defined in the Defaults tab of the Options dialog. If a task has an ETC value that exceeds zero, you cannot set the task status to Completed.
> [!NOTE]
> If the resource loading pattern is set to Fixed, you can only enter ETC in a tabulated view.

You can also remove a resource ETC on a task using this tab. If you are using Open Workbench with Classic PPM and you want to remove ETC that you have posted to a task that has not started, do this in Classic PPM by adjusting your posted timesheet. If you are using Open Workbench with Classic PPM, you must define a billing rate for cost-based resources in Classic PPM. If the resource does not have a defined billing rate, in Classic PPM, add an entry to the resource rate matrix and run the Rate Matrix Extraction job. **Follow these steps:** 1. Open a view that displays the task detail pane. 2. Right-click a task and click Assignments in the shortcut menu. 3. Enter ETC in the Estimate field in the Assigned Resources grid, and click OK. You can also define ETC on a task using this method. **Follow these steps:** 1. Select the Schedule view. 2. Change the time scale data, if necessary, and complete one of the following steps:
- Enter ETC in the non-time scaled ETC column to enter a total ETC value. - Enter ETC in the time scaled ETC column to enter ETC in a specific time period. 3. Change the ETC format from Hours or Days to Cost for cost-based resources, such as expense resources, and save the project.
Define Resource Maximum Percentage on Tasks The following procedure explains how to define a resource maximum percentage on a task. **Follow these steps:** 1. Open a view that displays the task detail pane. 2. Right-click a task and click Assignments in the shortcut menu. 3. Enter the maximum percentage amount in the Max % field in the Assigned Resources grid, and click OK.
> [!NOTE]
> If necessary, use the scroll bar to view this field.
Release Resources from Task Assignments When you release a resource from a task assignment, the resource is still available for assignment to other tasks in the project. **Follow these steps:** 1. Right-click a task and click Modify in the shortcut menu. 2. Open the Resources tab. 3. Select the resource assignment you want to release in the Assigned Resource grid, and click Release. 4. Click OK.
Transfer Task Assignments between Resources When you have resources of the same type assigned to work in your project, you can transfer those tasks from one resource to another on the project. You can choose to transfer all assigned work or specific tasks to a new resource. When you transfer assignments:
- If the resource from which you are transferring the assignment has not posted actuals on the task, the resource is removed from the task.
- If the resource from which you are transferring the assignment has posted actuals on the task, the resource remains assigned to the task and the remaining ETC is transferred to the new resource.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Transfer in the Assignments group. 3. Select the name of the resource from the Transfer assignments from this resource drop-down list to transfer the
assignment from. 4. Select the task to transfer to the new resource in the task grid. 5. Select the name of the resource from the to this resource drop-down list to transfer the assignment to. 6. Complete one of the following steps:
- Click the right arrow (>) to transfer the selected task from the assigned resource to the new resource. - Click the All right arrow (All >) to transfer all the listed assignments from the assigned resource to the new resource. - Click the left arrow (<) to transfer assignments from the resource listed in the to this resource drop-down list to the
resource listed in the Transfer assignments from this resource drop-down list. - Click the All left arrow (All <) to transfer all assignments from the resource listed in the to this resource drop-down
list to the resource listed in the Transfer assignments from this resource drop-down list. 7. Click OK. Note: The Keep Baselines check box is selected by default. This setting transfers the original assignment
baselines to the new resource.
Define Dependency Relationships
A dependency provides you with a means of ordering the relationship, timing, and logical sequence between a task within the same project (internal dependency) or between a task in your project and a task that is external to the project (external dependency). When you create an external dependency, you add the subproject task to your master project. Creating dependencies does not automatically adjust your project plan; you must autoschedule your project.
A dependency links one task to another where the start or finish date of the second task (the successor) is constrained by the start or finish date of the first task (the predecessor). Define dependency relationships to ensure that you can evaluate the cascading impact of changes to tasks when autoscheduling. If a task is isolated and is not needed by or is not dependent on another task, it can be independent.
You can create the following types of dependencies to establish the relationship between the start and finish dates of dependent tasks:
- Finish-Start. The predecessor task's finish date determines the successor task's earliest possible start date. With this dependency type, the successor task cannot start until its predecessor task finishes.
- Finish-Finish. The predecessor task's finish date determines the successor task's earliest possible finish date. With this dependency type, the successor task cannot finish until its predecessor task finishes.
- Start-Start. The predecessor task's start date determines the successor task's earliest possible start date. With this dependency type, the successor task cannot start until its predecessor task starts.
- Start-Finish. The predecessor task's start date determines the successor task's earliest possible finish date. With this dependency type, the successor task cannot finish until its predecessor task starts.
The dependency type that is used when creating dependency links is the default dependency type you defined in the Defaults tab of the Options dialog. The default dependency type is Finish-Start. Once you create the dependency, you can edit the dependency type.
Task Dependencies Properties
Use the Dependencies tab on the Task Properties dialog to add or remove task dependencies. To view this tab, rightclick the task in a view that displays the task detail pane, and click Dependencies in the shortcut menu.

This tab displays a hierarchical list of existing dependencies between the task you have selected and other tasks on the project. Use this tab to create, modify, or delete dependency relationships, and to review the task's name, relationship, dependency type, and the amount of lag. You can also apply dependencies to more than one task using this tab. The Dependencies grid on this tab displays the following icons that you can use to identify the task's dependency relationships: -
PredecessorThis icon indicates that the task is a predecessor to the selected task. -
Successor This icon indicates that the task is a successor to the selected task.
Lag and Negative Lag in Dependency Relationships You can define the lag between tasks as positive or negative. Lag is the predetermined amount of time between the start and/or finish time of two tasks in a project plan. Negative Lag is the amount of time or percentage of task duration in which two tasks can be simultaneously in process in a project plan. You define lag or negative lag on the Dependencies tab of the Task Properties dialog. Example - Positive Lag You have two tasks in your project, Task A and Task B, and you want Task B to start three days after Task A finishes. Define the dependency type as Finish-Start type and enter 3.00 as the lag. Example - Negative Lag You have two tasks in your project, Task A and Task B, and you want Task A to start two days before Task B ends. Define the dependency type as Finish-Start and enter -2.00 as the lag.
Internal Dependencies An internal dependency is a dependency relationship that you create between two or more tasks in the same project.
Create Internal Task Dependencies You can create and edit dependency relationships between tasks using different ways. You can create dependencies between tasks in the same project on Gantt charts, in spreadsheet views, and from a CPM network view to create internal task dependencies. Use the Dependencies tab on the Task Properties dialog to create dependencies.
> [!NOTE]
> You can create predecessor or successor dependency relationships in a spreadsheet view, only in a view that displays the task detail pane. **Follow these steps:** 1. Open a view that displays the task detail pane. 2. Right-click the task for which you want to create a dependency relationship and click Dependencies in the shortcut menu. 3. Click the task to which you want to create the dependency in the Project Tasks grid. 4. Select the task from the hierarchy: - Press the Shift key on your keyboard and click a range of tasks to select a contiguous range of tasks. - Press and hold the Ctrl key on your keyboard and click the tasks to select a noncontiguous range of tasks. 5. Complete one of the following steps to add task to the Dependencies grid:
- Double-click the task. - Select a task and drag your selection into the Dependencies grid. - Select a task and click Add Predecessor or Add Successor. - Right-click a task and click Add Predecessor(s) or Add Successor(s) in the shortcut menu. 6. Click OK.


Create Multiple Dependencies
You can create multiple dependencies between project tasks. You can add multiple predecessors for successors for a task or milestone or you can create a chain of dependencies.

Create Dependency Chains
As an alternative to individually creating dependency relationships, you can select multiple tasks simultaneously and can create a chain of predecessor-to-successor relationships. You can create in any spreadsheet view that displays the task detail pane.
> [!NOTE]
> You must have two or more tasks in a view to create a dependency chain.
**Follow these steps:**
1. Select the task you want to designate as the predecessor. 2. Press the Ctrl key on your keyboard and click each task that you want to make a successor. 3. Right-click one of the selected tasks, and click Make Chain in the shortcut menu.
The following procedure explains how to create multiple predecessors for a task or milestone.
**Follow these steps:**
1. Open a view that displays the task detail pane. 2. Select the tasks you want to add as predecessor tasks.
- Press the Shift key on your keyboard and click a range of tasks to select a contiguous range of tasks. - Press the Ctrl key and individually click tasks to select a non-contiguous range of tasks. 3. Right-click the successor task, and click Make Successor in the shortcut menu. 4. Right-click the successor task, and click Dependencies in the shortcut menu to verify your selection.
The following procedure explains how to create multiple successors for a task or milestone.
**Follow these steps:**
1. Open a view that displays the task detail pane. 2. Select the tasks you want to add as successor tasks. 3. Right-click the predecessor task, and click Make Predecessor in the shortcut menu. 4. Right-click the predecessor task, and click Dependencies in the shortcut menu to verify your selection.

Modify Internal Task Dependencies
The Dependencies tab on the Task Properties dialog displays dependency relationships for the selected task, including internal and external dependencies. You can use this tab to edit the dependency relationship and to add new dependency relationships.
> [!NOTE]
> If you specify percent as the lag type and Finish-Finish as the constraint type, you are specifying the percentage of the successor's duration. If you specify percent for any other constraint type, you are specifying the percentage of the predecessor's duration.


Overlap Tasks If you want two tasks to be scheduled on the same day because the resource has remaining availability on that day, enter -1.00 as the lag to overlap the tasks.
Zero Lag To schedule two dependent tasks, schedule first on one day and the next on the following day, enter zero as the lag amount.
**Follow these steps:** 1. Right-click the task from the view and click Dependencies. 2. Select the task you want to modify from the Project Tasks list, and modify the following fields:
- Pred/Succ: Specifies the task's dependency relationship. Default: Successor Options: Successor or Predecessor
- Type Specifies the constraint type to be placed on the task's start or finish date. Default: Finish-Start Options: Start-Start, Start-Finish, Finish-Start, or Finish-Finish
- Lag Defines the number that represents the days or percent to indicate the amount or time between, or overlapping, the task start or finish dates.
> [!NOTE]
> The constraint type used is the type you specify. - Lag Type Specifies the lag type. Default: Daily Options: Daily or Percent 3. Click OK.
Delete Internal Task Dependencies When you remove an internal dependency relationship, you do not delete any tasks from the project. Instead, you delete the dependency link between the tasks. After removing the dependency, you can change the scheduling and run autoschedule.
**Follow these steps:** 1. Open a view that displays the task detail pane. 2. Right-click the task and click Dependencies in the shortcut menu. 3. Select the task you want to delete from the Project Tasks list, and click Delete. 4. Click OK.
External Dependencies An external dependency is a constraint that you set outside of your project, such as a task on another project that defines when a task is completed. External dependencies are either predecessor or successor tasks on other projects.
If you are using Open Workbench with Classic PPM, you can insert Classic PPM project tasks as external dependencies into a project you have open in Open Workbench.
You can view a list of external dependencies on the External Dependencies page. To view this page, select Tools, External Dependencies. The externally linked project (through the external task dependency) lists the linked task on its project plan.
You can also view externally linked dependencies in your project WBS list. Dependencies appear below the linked task with a Linked Task icon on the task's header button to indicate that it is an external task.
The Linked Task icon appears as follows:
- Linked TaskThe linked task icon indicates that the task is an externally linked task.


Create External Task Dependencies
Use the External Dependencies dialog to review or create an external dependency relationship with an external project task. When you create an external task dependency, the external task is inserted as a read-only task; the relationship appears in both projects. Only the external task is linked to the master project, not the entire subproject or project.
The Dependencies grid displays fields that define each external dependency. Use this grid to view external dependency details such as the external task name, whether it is a predecessor or successor task, dependency type, lag type, and the external project name. The Project field displays the selected dependency task's project name. The Task field displays the selected dependency's task name.
**Follow these steps:**
1. Open a spreadsheet view that displays the task detail pane. 2. Right-click the task to which you want to insert an external dependency, and click Insert External Dependency in the
shortcut menu. 3. Locate and select the project, and the task to which you want to create the dependency from the WBS on the right
pane, and click Select.

Save Projects with External Dependencies
When you save a project, a copy of the external dependency data is also automatically added to the file. When you make changes to a task which impacts an external dependency, it is not updated in the project on which the task is dependent.

Modify External Task Dependencies
You can edit dependency relationships for external dependencies using the Dependencies tab on the Task Properties dialog or using the External Dependencies dialog. You cannot move the dates on external tasks or modify it within your project; the externally linked task's properties are read-only and do not include resource or dependency information.
> [!NOTE]
> You can only access the Dependencies tab on the Task Properties dialog if the externally dependent task has a predecessor relationship with the task in your project.
**Follow these steps:**
1. Open the Projects ribbon. 2. Click Dependencies in the External group. 3. Locate the external dependency task you want to modify, and complete the following fields:
- Pred/Succ: Specifies the task's dependency relationship. Default: Successor Options: Successor or Predecessor
- Type: Specifies the constraint type to be placed on the task's start or finish date. Default: Finish-Start Options: Start-Start, Start-Finish, Finish-Start, or Finish-Finish
- Lag: Defines the number that represents the days or percent to indicate the amount or time between, or overlapping, the task start or finish dates.
> [!NOTE]
> The constraint type used is the type you specify. - Lag Type: Specifies the lag type. Default: Daily Options: Daily or Percent 4. Click OK.


Delete External Task Dependencies Use the External Dependencies dialog to delete external dependencies. When you delete an external dependency relationship, you do not delete the task from the project. Instead, you delete the dependency link between the tasks. After removing the dependency, you can change the project's scheduling and run autoschedule. If you delete an external task from its originating project, which is an external dependency in a sub-project, the external dependency is removed from all of its related task records in all other projects. **Follow these steps:** 1. Open the Projects ribbon. 2. Click Dependencies in the External group. 3. Select the externally dependent task you want to delete, and click Delete.
Print Task Dependencies You can print a list of all task dependencies associated with your project. Use the CPM Network view or a spreadsheet view that displays a Gantt chart to print dependency relationships.
Display Dependency Relationships You can display dependency relationships on the Dependencies grid in the Dependencies tab of the Task Properties dialog or from a Gantt chart view. Before you can create dependency relationships from a Gantt chart view, you should first be able to view the relationship in the Gantt chart. When you show dependencies, the Gantt chart area of the view displays connecting arrows between tasks that have dependency relationships.
> [!NOTE]
> To display the dependency, first add the Task Name or Task ID field name to the view definition and place the fields in a column preceding the Type, Lag, Lag Type, and Project columns. **Follow these steps:** 1. Double-click anywhere on the Gantt chart. 2. Select the Show Dependencies check box. 3. Click OK to display the established dependency relationships in the view.
Dependency Relationships Between Master Projects and Subprojects If you work with master projects and subprojects, you can create dependency relationships between them. The method for creating dependencies between a master project and its subproject tasks is the same as that for creating dependencies between tasks in the same project. These relationships are reflected in the master project and the subproject's original project.
Define Advanced Properties Use the Advanced tab on the Task Properties dialog to define a task's advanced management details, such as defining, removing, or editing task scheduling constraints. The Advanced tab provides a central location from where you can set or change task-related values. All of the task's attributes display on this tab. This tab displays a Fields grid that contains the following columns: - Field. Displays a list of all the advanced properties you can specify. - Value. Displays cells, where you can enter or select values for the field. The field values that you can enter depend on
the field you have selected. You can:
- Select displayed check boxes. - Enter numeric values, currency, or dates. - Enter words or phrases. - Select options from drop-down lists.
> [!NOTE]
> The fields that are available for editing depend on your access rights. If a field is not available for selecting or editing, it is disabled (by default).
**Follow these steps:**
1. Open a view that displays the task detail pane. 2. Right-click a task and click Modify in the shortcut menu. 3. Open the Advanced tab. 4. Enter the values in the Value column for the following fields in the Fields grid. The value you can enter depends on
the field you have selected. - % Complete
Enter a value between 0 and 99 to identify the percentage of work that has been completed for a task. When the tasks are 100% complete, Open Workbench automatically inserts 100 into this field. - Actual % Spent Indicates the completeness of a task out of 100%. - ACWP Defines the actual cost of the work performed, which is the cost of the completed portion of assignments to a task based on the actual usage. - AV Defines the difference between the Budgeted Cost of Work Scheduled (BCWS) and the Actual Cost of Work Performed (ACWP). - BAC Defines the budget at completion, which is the budgeted cost of resource usage for the baseline plan. - Baseline Fixed Duration? Defines whether the baseline is set for a fixed duration. - BCWP Defines the budget cost of work performed. BCWP is the cost of the completed portion of a task based on baseline total usage. BCWP is also an earned value calculation. - BCWS Defines the budget cost of work scheduled, which is the cost of baseline total usage through the Project As-of date. - Category Defines the name of the group or class to which this task belongs. - EAC Defines the estimate at completion, which totals the cost incurred to date and the expected costs for incomplete tasks to give a projected figure. - Unplanned Defines whether the task is unplanned. 5. Click OK.
Define the Scheduling Constraints for the Task
You can set the task scheduling constraints that impact autoschedule using the Advanced tab on the Task Properties dialog. Constraining tasks allows you to indicate when a task should start or finish during autoscheduling. Scheduling constraints can override priority during autoschedule but cannot override tasks that are locked for scheduling.

When defining task scheduling constraints, the Start constraint date indicates that the task starts at the beginning of the work day, and the Finish constraint date indicates that the task finishes at the end of the work day. Note the following when constraining tasks:
- If a task's status is Started, the Start constraint date is read-only and you cannot edit it. - If a task's status is Completed, all constraint dates are read-only and you cannot edit them. - If a task is a summary task that constrains detail tasks, you cannot add the summary task constraints.
> [!NOTE]
> If a row in a column is gray, you cannot enter a value.
**Follow these steps:**
1. Open a view that displays the task detail pane. 2. Right-click the task you want to define scheduling constraints, and click Modify in the shortcut menu. 3. Open the Advanced tab. 4. Define the dates for the constraint types in the Constraints grid, and click OK:
- Must Start On: Defines the exact date on which the task must start. This date is always respected unless the task is locked to other dates or it causes a resource overload.
> [!NOTE]
> This constraint overrides the Start No Earlier Than and the Start No Later Than constraint dates. - Start No Earlier Than: Defines the date after which the task must start. - Start No Later Than: Defines the date before which the task must start. - Must Finish On: Defines the exact date on which the task must finish. This date is always respected unless the task is locked to other dates or it causes a resource overload.
> [!NOTE]
> This constraint overrides the Finish No Earlier Than and the Finish No Later Than constraint dates. - Finish No Earlier Than: Defines the date on or after which the task must finish. - Finish No Later Than: Defines the date on or before which the task must finish.
Lock Tasks in Place
You may want to lock certain tasks or milestones in place to prevent scheduling functions, such as Recalculate or Autoschedule, from moving the task. Use the Advanced tab on the Task Properties dialog to lock a task. You can still shift a locked task's start date, finish date, or both dates in views that display a Gantt chart, such as the Gantt Chart view.
When you lock a task and you autoschedule your project, autoschedule does not move the ETC. If you have roles that are assigned to the locked tasks, ETC does not move and is in the past. The same is true for a resource that has not tracked current timesheets; the ETC spreads from the task's Start Date to the task's Finish Date, depending on the loading pattern.
> [!NOTE]
> You can override this lock by autoscheduling your project.
**Follow these steps:**
1. Open a view that displays the task detail pane. 2. Right-click the task and click Modify. 3. Open the Advanced tab. 4. Scroll down the Fields list and select the Lock for Scheduling? check box, and click OK.
View Task Percent Expended Amount
You can view a task's % Expended amount on the Advanced tab on the Task Properties dialog. Unlike % Complete, % Expended is a calculated field that represents the percentage of resource usage expended on a task. Because %

Expended is calculated and can be more precise than % Complete, which is a user-defined value and is limited to 2 decimal places, earned value calculations such as BCWP may produce different results depending on which % Complete value you select.
Add Project, Task, and Resource Notes in Open Workbench Notes let you record project-specific information for yourself or for other staff members. You can view, add, edit, and remove notes. You can also change the notes categories, and see historical comments. The list of notes display in the History grid.
Use Categories to select and filter different groups and classes of tasks, notes, or resources in the view. You can enter new categories to the Category drop-down list or you can use the categories that are already listed. The categories listed are those that you added when you defined the Open Workbench general options.
**Follow these steps:** 1. Open the Project Properties, Task Properties, or the Resource Properties dialog. 2. Open the Notes tab. 3. Complete one of the following steps:
- Add a note in the text box. - Select a note in the History grid. 4. Enter or select a category with which the note is associated from the Category drop-down list.
> [!NOTE]
> If you add a new notes category, specify a global file location to make it available for future use. 5. Click Add and click OK. 6. To edit, select the note you want to modify from the History grid, and click Modify to complete one of the following steps: - To change the content of the note, change the data in the text field, and click Modify. - To change the note's category, enter or select a category from the Category drop-down list.
Delete Notes Use the Notes tab on the Project Properties, Task Properties, and the Resource Properties dialogs to delete a note. **Follow these steps:** 1. Open the Project Properties, Task Properties, or the Resource Properties dialog. 2. Open the Notes tab. 3. Select the note you want to delete from the History grid and click Delete. 4. Click OK.
Assign Resources to Tasks in Open Workbench As the project manager, you assign resources to tasks in Open Workbench (OWB). You can also assign resources to tasks from a view that displays the resource detail pane. Use this tab to apply properties to more than one task.
> [!NOTE]
> When you assign a resource to a key task, the ETC of the resource determines the Start and Finish dates.
**Follow these steps:** 1. Open a view that displays the task detail pane. 2. Right-click a task and click Assignments in the shortcut menu. 3. Select the resource you want to assign to your task from the Project Resources grid, and click Assign.


4. Click OK.


Set Resource Loading Patterns
A loading pattern defines how work is spread across the duration of a task. The loading pattern for a resource defines how resource assignments are used to complete tasks when you recalculate the task duration and you autoschedule your project. You have the following patterns available to help replicate how team members work on tasks.
You can assign resources to tasks using the following loading patterns. Use these loading patterns with autoschedule to produce a workable schedule automatically that allows for real-time variations in the way work is assigned and completed.
Use the Loading field on the Resources tab of the Task Properties dialog to set the loading pattern on a task for a resource.
**Follow these steps:**
1. Open a view that displays the task detail pane. 2. Right-click a task and click Assignments in the shortcut menu. 3. Select the name of the resource in the Assigned Resources grid for which you want to set the loading pattern. 4. Complete the Loading field in the grid, and click OK.

Uniform Loading Pattern
This pattern assigns resource time evenly across a task only on those days when the resource is available to meet the task requirements. For example, if a resource is scheduled to work four hours per day on a task, the resource will not be scheduled to work on that task on days when the resource is only available to work on the task for three hours. The maximum percentage and resource availability is taken into account when assigning resources to tasks using this loading pattern.
> [!NOTE]
> To use this loading pattern, set the maximum percentage of the resource on the task.

Front Loading Pattern
This pattern allocates resource usage as early in the task as possible. Resources are assigned to get work done as early as their availability permits. The maximum percentage of the resource on a task and the resource availability are taken into account when using this loading pattern.
> [!NOTE]
> To use this loading pattern, set the maximum percentage of the resource on the task.


Back Loading Pattern This pattern allocates resource usage as late as possible in the task. Resources are assigned to get work done as late as their availability permits. The Max % and resource availability is taken into account when assigning resources to tasks using this loading pattern.
> [!NOTE]
> To use this loading pattern, set the maximum percentage of the resource on the task.

Fixed Loading Pattern This pattern allocates resource usage to tasks according to your needs. Open Workbench automatically locks fixed resource assignments so that they are not changed when you autoschedule or when you recalculate task duration. When you use this pattern, you can create a discontinuous task, or one that starts and stops, and then starts again. You can display the pattern in views where ETC is tabulated.

Contour Loading Pattern This pattern fits resource loading around the remaining availability of the resource, smoothing out the peaks and valleys. This pattern is flexible and can appear as the reverse or mirror image of overlapping task patterns. The changes that you make to the task duration after it is scheduled causes resource assignments for each period to even out across the duration of the task. This pattern assumes the characteristics of the Uniform loading pattern in the following cases:
- Duration, start date, or finish date of a task changes - Autoschedule the task - Enter any new ETC values


Track Resource Progress in Open Workbench


Track Resources by Total Actual Usage
You can record periodic actual usage using the Resources tab on the Task Properties dialog or by editing a view that displays the Actual field name.
**Follow these steps:**
1. Open a view that displays the task detail pane. 2. Select a task and click in the cell displaying total actual usage. 3. Enter the total actual usage for each applicable cell on the timescale.

Track Resources by Periodic Actual Usage
Periodic recording of resource usage for every task to which a resource is assigned is the most comprehensive and accurate way to keep track of your project. Resources record actual usage by completing Classic PPM timesheets where the actual time each resource spends on a task is recorded at the end of a specific time period.
You can use the Gantt Chart view to track resource usage for all tasks to which a single resource is assigned. Use this view to track usage data for one resource across an entire project or group. When you use this view with the Quick Filter by Resource drop-down list, you can display data for one resource at a time.

Actual Cost of Resource Task Assignments
You can display the total actual cost data for resource task assignments in views. You must first add the Actual Cost field to your view layout. In the view definition, this field is available in the Assignment To Tasks and All subfolders of the Resource Information folder. You can format the Actual Cost field to display a single value or multiple time-scaled values.
The actual cost of a task assignment is used to determine the Actual Cost of Work Performed (ACWP) for a task, and is used to baseline costs for tasks and task assignments.
If you are using Open Workbench with Classic PPM, the actual cost of a task assignment in Open Workbench is the total actual cost of the task assignment from Classic PPM. This value is based on the actual work units posted against a resource assignment using timesheets, financial transactions, external schedulers, or XOG.
When building what-if scenarios using Actual Usage, the Actual Cost is calculated using the resource rate instead of actual work units. The following formula is used:
Actual Cost = Actual Usage * resource rate

OWB: Manage Resources and Roles in Open Workbench
Manage Open Workbench (OWB) resources to staff the roles needed to ensure that projects are completed on time and under budget. Global resources are those resources that are available to you to staff on projects when you are using Open Workbench with Classic PPM. You can select a team of resources from a list of global resources and can make them available to your project. The global list displays roles and resources to which you have booking rights.
When managing projects, Open Workbench (OWB) shares the Week Start, Base Calendar, and Guidelines URL project data globally across all of the open projects. This information is retrieved from these sources:
- Classic PPM when you use Open Workbench with Classic PPM. - The global file when you have specified a global file location.
You must have administrator access rights to edit global project settings in Classic PPM.
- Open Workbench Labor and Non-Labor Resource Types - Create Resources in Open Workbench - Add Resources and Roles to Projects - Edit Resource Role Assignments in Open Workbench - Cost Rate and Currency Data in Open Workbench - Define Resource and Role General Properties and Availability - Define Advanced Resource Properties - Define the Resource Calendar - Display Pending Estimates Data in Views - Accept or Reject Pending Estimates


Open Workbench Labor and Non-Labor Resource Types
Staff can consist of labor, materials, equipment, and expense resource or role types. If you are using Open Workbench with Classic PPM, include non-labor resources or roles in your Classic PPM project to be able to process financial transactions against them. For example, you may want to bill customers for the cost of traveling to customer sites.
You can add the following resource or role types to projects:
- Labor. Includes any person or role who works or completes tasks. - Equipment. Includes any type of machinery that is used to perform a job. For example, delivery trucks, printers, and
computers. - Material. Includes any type of material that is used to perform a job. For example, training guides, chemicals, or fuel. - Expense. Includes any cost that is associated with a resource or a role. For example, the cost of traveling to a
customer site.

Create Resources in Open Workbench
You can create resources in Open Workbench (OWB) manually in the resource detail pane of a view and define their properties. The resources that you create are automatically available for you to assign to tasks in your project.
Best Practice: If you are using Open Workbench with Classic PPM, create the resources in Classic PPM. Any new resources that you create in Open Workbench must have matching resource IDs in Classic PPM to save the project to Classic PPM.
> [!NOTE]
> If the Resource and Team objects have attributes with the same ID, Open Workbench picks the attribute in the Team object.
You can define resources by categories for reporting and analysis, as groups of more than one, or as roles such as Business Analyst. Resources can use different units of measure. Once you create a resource, you define its properties in the Resource Properties dialog. You can access the Resource Properties dialog from views that display the resource detail pane.
To view usage for material and expense non-labor resources, set the format of the view to cost. To view usage for expense non-labor resources, define the billing rate for resources.
**Follow these steps:**
1. Open a view that displays the resource detail pane, such as the Gantt Chart view. 2. Right-click a resource and click Insert in the shortcut menu. 3. Right-click the empty resource row that is added to the resource detail pane, and click Modify in the shortcut menu. 4. Define the general and advanced properties for the resource, and click OK.
> [!NOTE]
> For more information, see Using Resource Management.


Add Resources and Roles to Projects You can add staff to your project by manually inserting a resource line item and entering the resource details directly in the resource detail pane of a view, such as the Gantt Chart view. To add a resource, right-click anywhere in the resource section, and click Insert in the shortcut menu. You can also copy resources from another project you have open in Open Workbench and paste them into your project. You can add resources or roles to your project from: - Classic PPM. You can allocate a single role to the same project more than once. As a result, a role may appear more
than once on the project staff in Classic PPM. A number appends each additional occurrence of the same role. For example, Programmer 1, Programmer 2, and Programmer 3. - Open Workbench. You can add resources and roles to a project by browsing from a list of available Classic PPM resources. Use the Resources tab on the Project Properties dialog to add resources to your project. When you add resources to your project, they are allocated at 100 percent.
> [!NOTE]
> You can also add a resource to a project by creating a resource in Open Workbench and then adding the resource to Classic PPM. **Follow these steps:** 1. Click Project Properties in the application menu. 2. Open the Resources tab. 3. Select one of the following options to view the Global Resources list by role or by category: - Roles. All resources that are assigned a role are listed under their role. Resources that are not associated with a role are listed in the No Role folder. - Category. All resources that are linked to a category are listed under their category. Resources that are not associated with a category are listed in the No Category folder.
> [!NOTE]
> If you are using Open Workbench with Classic PPM and you have not defined resource categories in Classic PPM, roles is selected and the list box is unavailable.

4. In the Global Resources grid, expand a role folder and select a role or a resource. To expand a role folder, click the + square or double-click the role folder.
5. Click Add and click OK. Edit Resource Role Assignments in Open Workbench You can assign multiple roles to a resource in a single project. Roles are generic resources that represent the job responsibilities of the resources assigned to a project. A role defines the work function while a resource identifies the individual who performs that role. Examples of roles include project manager, programmer, and business analyst. The following types of resource roles are available: - Primary. The default role assigned to a resource. You cannot save changes to the primary role back to Classic PPM. - Project-level. A role assigned to a resource for a specific project. Changes are saved back to Classic PPM. - Assignment-level. A role assigned to a resource for a specific task. Changes are saved back to Classic PPM.

To view or edit the roles assigned to resources, you must edit the view in the application and add the Assignment Role field to the task detail pane. You can optionally add the Primary Role and Project Role fields to the resource detail pane.
Edit Resource Roles at the Project Level Edit the role using the Advanced tab on the Resource Properties dialog. You can also edit resource roles from the resource details pane if you have added the Primary Role and Project Role fields to the pane. **Follow these steps:** 1. Open a view that displays the resource detail pane. 2. Right-click the name of the resource whose role you want to change and click Modify in the shortcut menu. 3. Open the Advanced tab. 4. Complete one of the following steps and click OK.
- To edit the resource's primary role, scroll to the Primary Role field. - To edit the resource's role on the project, scroll to the Project Role field.
> [!NOTE]
> If you are using Open Workbench with Classic PPM, the project roles that are listed are the resource roles that are defined in Classic PPM from the drop-down.
Edit Resource Roles at the Assignment Level WARNING Before you can edit resource roles from the task detail pane, ensure you have added the Assignment Role field to the pane.
To edit a resource role at the assignment level, from a view that displays the task detail pane, in the resource row for which you want to change the role, select the role from the Assignment Role drop-down.
> [!NOTE]
> All Classic PPM roles display in the list.
Edit Multiple Resource Roles You can select more than one resource to edit properties as a group. Use the Multiple Selections dialog to edit multiple resources. To view this dialog, select the resources you want to edit from the resource detail pane, right-click, and click Modify. The following rules are applied when editing multiple resources: - You cannot insert a new resource from the Multiple Selections dialog. - Values are displayed if all the selected resources have the same entry or setting for that field. If a field is editable and if
the selected resources do not have the same entry or setting, the fields appear empty. Non-editable fields are disabled. - When changing fields for which the value must be unique, a series of entries is created. For example, if you assign an
ID of 12345 to a group of three resources, the entries for each task are 12345, 12345-0, and 12345-1. The unique field appears empty after the field no longer has the same entry. - If the selected resources have different settings, check boxes can appear disabled and selected. - On the Advanced tab of the Multiple Selections dialog, groups of options can appear shaded. You can select them to reset their attributes for all the selected resources.
Cost Rate and Currency Data in Open Workbench If you are using Open Workbench with Classic PPM, cost rate and currency data is retrieved from the Classic PPM rate matrix.

Cost Rates
Cost rates determine the cost that is associated with a resource assigned to a task in a project. Cost rates are also known as billing rates. The cost rates that are shown in Open Workbench are retrieved from the Actual Cost field in the Classic PPM rate matrix when you open the project. These costs are shown over time by task and at the project level.
Open Workbench supports time-varying and project-specific cost rates. The changes that you make from Open Workbench to the cost rates are for what-if purposes only and cannot be saved to Classic PPM.
> [!NOTE]
> You cannot enter a zero (0) billing rate in Open Workbench. If you encounter a zero billing rate for a resource on your project, define a row for the resource on the Classic PPM rate matrix and run the Rate Matrix Extraction job.
Currencies
Monetary values in Open Workbench are displayed in the home currency you set in the project. Monetary values of a project include actual, estimated, and baseline amounts for expense resource assignments, project budgets, custom field values, and resource cost rates. No conversion is required for expense resource assignments, project budgets, or custom fields values. Open Workbench converts resource rates since the home currency of the resource may not be the same as the home currency of the project.
Open Workbench uses a single, session-wide currency. If the Actual Cost field in the Classic PPM Rate Matrix contains multiple currencies, they are converted to the currency specified in the project. If you have specified a global file location, the session currency is used on starting Open Workbench. If you have not specified a global file location, Open Workbench uses the 3-character ISO code of the home currency set in the project.
If you have not set the conversion between the resource's rate and the project's home currency in Classic PPM, the conversion may fail. A message appears letting you know that the system was unable to convert the resource's cost rate to the source currency of the target currency. On loading different currencies in Open Workbench, a message appears if the project loaded does not use the system currency. You can set Open Workbench to show messages when loading projects with different currencies.
Rate Matrix
Cost and rate matrices are used in Classic PPM to determine costs and billing or charge rates during financial processing. You can create cost and rate matrices for labor, materials, equipment, and expense resource types. The cost or rate matrix is composed of columns that you can assign to identify the criteria that are used to match the billing rates and costs to transactions. You can establish default matrices at the system level, entity level, and the investment level. During financial processing, matrices determine cost and rates of transactions. Classic PPM looks for and applies matrices first at the investment level, then at the entity level, and lastly at the system level. You can set default rate locations at either the entity level or system level.
You must financially enable any resource that is involved with financial transactions. When a resource is financially enabled, that resource can be linked to Classic PPM rate matrix. You must also financially enable your project to process financial transactions on them.
> [!NOTE]
> For more information about financially enabling a resource or role, see Resource Management.
Classic PPM Rate Matrix Extraction Job
The Classic PPM Rate Matrix Extraction job extracts the rate matrix information and is run in Classic PPM. You can run this job each time the rate matrix has changed, when the financial properties of a project have changed, or when resources have been added to an investment.
You can set this job to do the following:
- Generate resource rates and costs for a project that includes rates for the time spanning the project's start and finish date or for a wider range that includes the time before the project start and after the project finish dates. Parameter: - Extract Cost and Rate Information. When selected, a wider range of rates and costs are generated, and allows Open Workbench to have access to valid rates outside the project's start and finish date.
- Refresh the rate matrix with the most recent rate information and avoid inaccessibility to the rate matrix which can lead to resources having a rate of zero. Parameters: - Prepare Rate Matrix Data. When selected, the Prepare Rate Matrix Data updates a copy of the rate matrix with the most recent rate information. - Update Rate Matrix Data. When selected, the Update Rate Matrix Data copies the contents of the rate matrix copy to the rate matrix.
> [!NOTE]
> For more information about this job, see Reference.
Display Resource Billing Rates in Views
If you want to view the resource financial rates in a view, first create a view and add the Billing Rate field to the view. This field displays the resource actual cost rate data.
You can vary a resource billing rate to show more accurately the total cost a resource has on your project. For example, you want to show a varying billing rate if a resource gets a pay raise mid-project. You can update a resource billing rate using:
- Classic PPM if you are using Open Workbench with Classic PPM. - Open Workbench for performing what-if scenarios on your project.
You can save the changes that you make to the resource's billing rate to an Open Workbench .rmp project file but you cannot save these changes back to Classic PPM.
Example
Suppose that a resource billing rate is based on the following rate matrices:
- 2006 Rate Matrix. $50 billing rate for all resources and roles from January 2006 to December 2006. - 2007 Rate Matrix. $55 billing rate for all resources and roles from January 2007 to December 2007. - Network Administrator Rate Matrix. $65 billing rate for resources who are network administrators from January 10,
2006 to January 28, 2006.
To vary a resource billing rate, in a view that displays resource billing rate data, double-click the resource's Billing Rate cell and enter the new rate. To change the altered billing rates back to a single rate for a resource, open the General tab on the Resource Properties dialog and edit the rate.
Define Resource and Role General Properties and Availability
As a project manager, update the resource data in Open Workbench (OWB). You define resources and update their data using the Resource Properties dialog. This dialog is available when you use a view with resource-specific fields or when you use a view with a resource detail pane.
If you are using Open Workbench with Classic PPM, Classic PPM controls all the resource data. You can edit data in Open Workbench, but when you save the changes back to Classic PPM, only the Availability, From, and To data on the General tab of the Resource Properties dialog are saved. Any other property changes, such as calendar changes, are discarded. To make other changes, edit the resource's properties in Classic PPM.
Use the General tab on the Resource Properties dialog to review or set basic resource or role attributes, such as the resource's tracking, financial, and availability data. When you define resource or role availability, it applies to all time periods except those explicitly specified to be different. If you assign usage to a resource which exceeds the resource's availability for a specific time period, the resource becomes over committed.

> [!NOTE]
> Resource IDs are held in memory during a given Open Workbench session. For example, if you create or open a project with a resource with the ID of jdoe on project A, and create the same resource on project B, the ID for the resource on project B is jdoe-0. To avoid this, create the resource record in project A, then copy and paste it into project B.
**Follow these steps:**
1. Open a view that displays the resource detail pane. 2. Right-click the resource and click Modify in the shortcut menu. 3. Complete the fields. The following fields require explanation:
- Category: Defines the resource category. Use categories to select and filter different groups and classes of resources in the view.
- Rate: Defines the resource's billing rate applicable today. If the resource has a variable rate over time, enter the variable rate in a time scaled view.
> [!NOTE]
> If you are using Open Workbench with Classic PPM, you can enter a zero billing rate.
Default: 1.0 - Type: Defines the resource's type. Default: Labor Values: Labor, Equipment, Material, or Expense. 4. Complete the following fields in the Availability section, and click OK: - Availability: Defines the resource's default availability in hours per day.
> [!NOTE]
> If you are using Open Workbench with Classic PPM, zero (0) availability is supported.
Default: The amount that is defined on the calendar, typically 8.0. Limits: Equal to or greater than zero - From: Enter the first date the resource is available to work on projects. - To: Enter the last date the resource is available to work on projects.
Edit the Resource Periodic Availability
Availability can vary during a project. Any resource that has scheduled holidays (other than weekends) or vacations has variable availability. You can change the availability for a resource for any given period by editing the resource calendar.
For example, a resource is available 8 hours per day for the first 20 days of a project, but for the next 10 days, the resource has a scheduled holiday. You can change a resource's periodic availability using the Availability field in a view, or by scheduling holidays in the resource's calendar.
Define Advanced Resource Properties
Use the Advanced tab of the Resource Properties dialog to define advanced management details, such as defining, removing, or editing resource scheduling constraints for a resource. The Advanced tab provides a central location from where you can set or change resource-related values. All of the attributes for a resource display on this tab.
This tab displays a Fields grid that contains the following columns:
- Field. Displays a list of all the advanced properties you can specify. - Value. Displays cells, where you can enter or select values for the field. The field values that you can enter depend on
the field you have selected. You can: - Select displayed check boxes. - Enter numeric values, currency, or dates. - Enter words or phrases. - Select options from drop-down lists.

> [!NOTE]
> The fields that are available for editing depend on your access rights. If a field is not available for selecting or editing, it is disabled (by default).
**Follow these steps:**
1. Open a view that displays the resource detail pane. 2. Right-click a resource and click Modify in the shortcut menu. 3. Open the Advanced tab. 4. Enter the values for the fields in the Value column, and click OK.
Define the Resource Calendar
Use the Calendar tab on the Resource Properties dialog to assign vacations, holidays, or other periods of unavailability. If you are using Open Workbench with Classic PPM, use this calendar only to perform what-if scenarios.
> [!NOTE]
> Set all days as either work days or holidays.
**Follow these steps:**
1. Open a view that displays the resource detail pane. 2. Right-click the resource and click Modify in the shortcut menu. 3. Open the Calendar tab. 4. Select a calendar from the Based on drop-down list.The resource calendar inherits the working days, holidays, and
shift settings of this calendar. Options: USA, United States, or United Kingdom Default: USA 5. Complete one of the following steps:
- Click the date to select a day. - Click the header for the day of the week to select a day of the week throughout all months and years of the
calendar. 6. Complete one of the following steps:
- Click Workday to set the selected day as a work day. The resource is available according to its availability setting. - Click Holiday to set the selected day as a non-work day. The resource is unavailable to work on the selected dates. - Click Reset to remove holiday and workday exceptions and return the selected day to the base calendar settings. - Click Reset All to remove all holiday and workday exceptions and return the calendar to its base calendar settings. 7. Click OK.
Display Pending Estimates Data in Views
To view pending estimates in a spreadsheet view, such as the Gantt Chart view, first create a new view that includes the fields that display pending estimate data. Add the following fields to the task detail pane:
- Task Estimate to Complete - Task Pending Estimates - Task Pending Estimate Override? - Task Pending Actuals - Task Pending Actuals?
As a project manager, you can enter pending estimates in Open Workbench (OWB). A pending estimate is the pending state of ETC until a project manager accepts or rejects the new value.
You can edit the ETC. However, only change the ETC if you complete the assignment ahead of schedule or if you need more hours. Resources enter pending ETC on their Classic PPM timesheet to reflect their completion of the task or to indicate the remaining ETC, and send this information to the project manager by posting the timesheet. The project manager can accept or reject ETC using Open Workbench or using Classic PPM.

Enter Pending Estimates
1. The resource creates a Classic PPM timesheet. 2. The resource enters actuals (pending actuals) into their timesheet and edits ETC to pending ETC when appropriate. 3. The resource posts the timesheet. 4. The project manager accepts or rejects the pending ETC. 5. The project manager autoschedules the project.
Accept or Reject Pending Estimates
Use the Pending Estimates dialog to accept or reject the pending estimates for the entire project, for the tasks in a view, or for selected tasks.
> [!NOTE]
> The Pending Estimates command is disabled if you are viewing a read-only copy of a project or if the project
does not include pending estimates. Pending estimates are updated only if you have saved changes to the current pending estimates
**Follow these steps:**
1. (Optional) To accept or reject pending estimates for selected tasks only, open the project and select the tasks. 2. Open the Project ribbon. 3. Click Pending Estimates in the Schedule group. 4. Define the scope for pending estimates by selecting project, view, or selected tasks, and select Accept Pending
Estimates or Reject Pending Estimates. 5. Click OK.
- When you accept pending estimates, Open Workbench adds the pending estimates and the pending actual amounts, and saves this value as the resource pending ETC in the pending estimate. Open Workbench also flags the pending estimate to change in the timesheet for the resource.
- When you reject pending estimates, Open Workbench removes the pending estimates and the pending actuals amounts. The resource pending ETC remains the same.
OWB: Schedule Projects in Open Workbench
After creating a project plan and dependency relationships, schedule the tasks and the resources that work on tasks in Open Workbench (OWB). If your project is large, scheduling can be a complex process that balances task relationships, resource availability, and task duration. Because scheduling is an iterative process, it typically takes several steps to balance resources working on a project. You may need to make several adjustments to your project plans. Adjustments can include changing resource availability, adjusting dependency links, and adding tasks. To help you schedule projects, Open Workbench uses an automated scheduling process named autoschedule.
- The Open Workbench Scheduling Process - Develop Project Schedules in Open Workbench - Manually Schedule Projects in Open Workbench - Recalculate Task Duration in Open Workbench - Schedule Subnets in Open Workbench
The Open Workbench Scheduling Process
The scheduling process involves the following steps and scheduling techniques that you can use to schedule your projects using Open Workbench:
1. Determine one of the following items:
- The minimum length of time that is required to complete each task (task duration). - The resource usage on each task (used to determine durations). 2. Determine the ETC for each resource. 3. Determine the resource loading pattern for each task from one of the available loading patterns. 4. Autoschedule the project.


Develop Project Schedules in Open Workbench
Follow these steps to develop a realistic schedule:
1. Adjust the resource calendars to define work days and holidays for each resource. 2. Autoschedule the project without constraints on resource availability. 3. Autoschedule the project again with constraints on resource availability to eliminate any resource overcommitment. 4. Prioritize phases, activities, and tasks. 5. Recalculate the duration of inherently overcommitted tasks, keeping in mind that you cannot recalculate the duration of
tasks with fixed resource assignments. 6. Lock tasks that you do not want rescheduled. 7. Refine your use of resource loading patterns. 8. Adjust task priority. 9. Autoschedule the project again with constraints to resource availability. 10. If necessary, complete one of the following steps, and autoschedule the project again:
- Manually adjust the schedule by shifting tasks. - Refine the dependency relationships.

Manually Schedule Projects in Open Workbench
Define the scheduling attributes, such as the start and finish dates of the project. This data is used when scheduling the project. Schedule all project tasks to begin and end during the project period.
> [!NOTE]
> If you use autoschedule, these dates may change according to the resource assignments, task dependencies, and constraints.
> [!TIP]
> For all projects in OWB, with or without autoschedule, be aware of the following relationship between task start and finish dates and project start and finish dates. If you do not set an imposed start or finish date for a project, the application sets the project start to match the earliest task start date and sets the project finish to the latest task finish date. The allocation start and finish values also shrink or stretch depending on the project start and finish unless you set fixed (imposed) dates. Your changes to a project start or finish date can result in recalculated time-sliced values that stretch outside of previously established time boundaries. For example, tasks in your project show finish dates in future months. You change the project finish to occur this month. However, the Allocation by Period on the Team Detail view might continue to show values for Aggregate Allocation and Aggregate Hard Allocation that extend into one or more future months.
**Follow these steps:**
1. Click Project Properties in the application menu. 2. Open the Scheduling tab. 3. Complete the fields in the Project section:
- Start: Defines the project start date. Default: The current system date. - Imposed (Start): Specifies whether you want to impose a fixed start date for the project. Without an imposed start,
the earliest task date is used as the project start.


> [!NOTE]
> You must select this field if you later autoschedule your project from its start date. When selected, autoschedule cannot change the project start date to accommodate any changes it makes to the start and end dates of the project's tasks, no matter when the first task starts. - Finish: Defines the anticipated project completion date. The project finish date must be equal to or greater than the finish date of the latest task. This date is used as the finish date for the last task in the CPM Network. - Imposed (Finish): Specifies whether you want to impose a fixed finish date for the project. Without an imposed finish, the latest task date is used as the project finish.
> [!NOTE]
> You must select this field if you later autoschedule your project from its finish date. When selected, autoschedule cannot change the project's end date to accommodate any changes it makes to the start and end dates of the project's tasks, no matter when the last task finishes. - As-of: Defines the date that is used as a reference point when performing Earned Value Analysis (EVA) calculations. If you do not enter an as-of date, zero (0) displays in the earned value fields such as Actual Cost of Work Performed (ACWP) and Budgeted Cost of Work Performed (BCWP).
> [!NOTE]
> When using autoschedule to schedule a project, the As-of date for the project defines the date to include data in time and budget estimates. This date is used in Earned Value Analysis (EVA) calculations, such as Budgeted Cost of Work Scheduled (BCWS) and drives the calculations for costs. ETC for a project is not scheduled on or before the As-of date. - Priority: Defines the order in which subprojects are scheduled within a master project. The priority amount that you enter here is used as the default priority for summary tasks. Any lower-level WBS tasks that have been marked as inheriting the priority of its parent assume this priority amount. For example, if the project has a priority of 0 through 9, its tasks are given the highest priority during scheduling. If the project has a priority of 11 through 36, its tasks are given the lowest priority during scheduling. Default: 10 Values: 0 through 36 (A lower number indicates a higher priority.) 4. Complete the fields in the Critical Path section: - Type: Defines on which dates to base the critical path during CPM calculations. Default: Current Values: - Current. The application uses the project task's current start and end dates to determine the critical path. - Baseline. The application uses the start and finish dates and durations from the current baseline to determine the critical path. - Subnets (All Projects): Specifies whether you want CPM to calculate the project's critical path separately for each subnet. When cleared, one critical path is calculated for the entire project. Default: Cleared 5. Click OK.
Recalculate Task Duration in Open Workbench
You can recalculate task duration so that the application calculates the shortest possible task duration. To recalculate task duration, select one or more tasks from the current view, and select Tools, Recalculate.
To eliminate resource over commitment and to maximize resource use, Open Workbench recalculates task duration according to the ETC, total resource availability, and maximum percentage load. The following mathematical calculation is used for recalculating task duration:
Duration = actuals + ETC/(resource availability per day) x (max % availability per day)
The recalculation process also maximizes resource use to shorten task duration whenever possible. If a task is inherently over committed, recalculating task duration can extend its duration to eliminate any inherent resource over commitment for that period. The exception is when the task is fixed.
When you assign multiple resources to a task and you recalculate the task's duration, Open Workbench computes the duration for each resource separately and selects the longest duration to determine the total task duration. All incomplete

tasks in the selected range are adjusted, except for fixed tasks. If you recorded resource actual usage on the task, the ETC is modified. Tasks with a Contour loading pattern are recalculated as Uniform. The recalculation process also replaces patterns created by autoschedule, and computes duration based on total availability per task. Locked or completed tasks are not impacted by the recalculation process. Instead, if the task has an ETC, the incomplete portion of the task is modified. Example: Resource Available 8 Hours a Day Resource availability is 8 hours a day and the maximum percentage is 50 percent (the resource can work on this task 4 hours a day). If usage is 12 days, when you recalculate the task duration, the task duration calculates to 24 business days. Example: Resource Available 4 Hours a Day Resource availability is 4 hours a day and the maximum percentage is 50 percent (the resource can work on this task 2 hours a day). If usage is 12 days, when you recalculate the task duration, the task duration calculates to 48 days.
Schedule Subnets in Open Workbench Subnets are a set of tasks in a project that have dependencies among themselves. During Autoschedule, you can calculate and display separate critical paths for each subnet and for each task that does not have dependencies. Otherwise, only one critical path, the longest path, is calculated for the project. Use the Subnets (All Projects) check box on the Scheduling tab to specify whether you want CPM to calculate the project's critical path separately for each subnet. Benefits - If you are working with a master project that contains multiple projects, you can calculate and display the critical path of
each subproject and not only the longest critical path. - If you are working with a project where you have structured the work breakdown structure to support multiple
concurrent critical paths, you can display all critical paths. - If you have a project that contains management tasks that span the project lifecycle, you can display the management
tasks and the true critical path. The following procedure explains how to set up your project to calculate separate critical paths. **Follow these steps:** 1. Click Project Properties in the application menu. 2. Open the Scheduling tab. 3. Select the Subnets (All Projects) check box in the Critical Path section. 4. Complete one of the following steps to calculate separate critical paths for your project:
- Autoschedule your project. - Calculate the critical path.
Autoschedule Projects in Open Workbench
You can autoschedule projects in Open Workbench (OWB). Autoschedule is an automated way to create project schedules. Autoschedule schedules tasks based on an internal set of rules the system sets. Each task is scheduled to: - Use availability as early in the project as possible. - Start at the earliest or latest possible time, subject to constraints. - Minimize the duration of the critical path.

Before scheduling, autoschedule automatically calculates the project's critical path. Autoschedule works in the following order:
1. Schedules work that has no flexibility, such as actual work, fixed assignments, and all work on locked tasks, and reduces the remaining availability accordingly.
2. Processes the remaining tasks in order of a calculated priority subject to task dependencies. As each task is processed, remaining availability is reduced accordingly.
How Autoschedule Determines the Subproject Task Scheduling Order
Autoschedule uses the following factors, in this order, to determine the order in which the subproject tasks are scheduled:
1. The task has a Must Start On or Must Finish On scheduling constraint 2. The task's priority (lower values rank higher) 3. The task's float (lower values rank higher) 4. The task has started 5. The task's physical location in the WBS. Tasks located toward the top of the WBS rank higher
If two or more tasks have equaling factors, the next factor in the queue is taken into account. For example, if you have two tasks, both with no defined scheduling constraints and priority as 5, and the first task's float is less than the second task's, the first task is scheduled before the second.
By default, Autoschedule operates on the entire project, but does not change tasks that:
- Start earlier than the date you enter for Ignore Tasks Starting Before - Start later than the date you enter for Ignore Tasks Starting After - Are marked as locked or completed
> [!NOTE]
> You can override the task lock. - Have actuals, except for the time period between the last actuals thru date and the finish date
How Autoschedule Creates a Schedule Satisfying All Dependencies
Autoschedule performs three passes of the project to create a schedule that satisfies all dependencies and does not overallocate selected resources. Each pass includes a forward pass and a backward pass. To develop a schedule, the following passes are performed whether you schedule from the project start or finish date:
- During the first pass, autoschedule creates a baseline schedule and performs a priority sort to resolve potential scheduling conflicts.
- During the second pass, the schedule is created. When autoschedule considers resource constraints, autoschedule first makes a pre-pass.
- During the third pass, autoschedule recalculates the critical path based on the schedule that was developed in the second pass.
> [!WARNING]
> You can set dependencies, constraints, and resource availability so that it is impossible for autoschedule to produce a schedule free of dependency violations or resource over allocations.
- Define Autoschedule Parameters and Schedule a Project - Autoschedule Master Projects - Autoschedule Projects from a Start Date - Autoschedule Projects from a Finish Date - Autoschedule by Task Priority - Override Task Lock During Autoschedule


Define Autoschedule Parameters and Schedule a Project

Use the Autoschedule dialog to specify the scheduling criteria and to begin scheduling tasks using autoschedule. You can autoschedule an entire project or only tasks that occur between ranges of dates.

**Follow these steps:**

1. Open the Project ribbon.
2. Click Autoschedule in the Schedule group.
3. Complete the fields. The following fields require explanation:
- Start Date: Defines the date from which to begin scheduling tasks. To schedule from the finish date, enter the date on or before which you want to begin scheduling tasks.
- Ignore Tasks Starting Before: Defines the date before which you want tasks to be excluded. For example, if you enter 4/3/2008 as the Ignore Tasks Starting Before date, and you have a task starting on 3/31/2008, this task is excluded from the schedule.
- Ignore Tasks Starting After: Defines the date after which you want tasks to be excluded. For example, if you enter 4/3/2008 as the Ignore Tasks Starting After date, and you have a task starting on 4/10/2008, this task is excluded from the schedule.
4. Select the following options.
- Resource Constraints: Specifies whether you want autoschedule to consider resource availability when scheduling the project. Default: Selected

> [!NOTE]
> If you clear this check box, autoschedule treats resources as having unlimited availability. Each task is scheduled against the resources total availability, not against the resources remaining availability which takes other task assignments into consideration. This results in the shortest possible schedule, but it may also cause resources to be overcommitted.
- Schedule from Finish Date: Specifies whether you want autoschedule to perform a backwards schedule from a defined deadline date. Default: Cleared

> [!NOTE]
> If you select this check box, the Start Date field toggles to the Finish Date field.
- Honor Constraints on Started Tasks: Specifies whether you want autoschedule to honor any constraints or dependencies you have on tasks with a status of Started. Default: Cleared

> [!NOTE]
> If you select this check box, you run the risk of overallocating resources or violating task dependencies.
- Schedule Assignments on Locked Tasks: Specifies whether you want autoschedule to move the assignment ETC within the scheduling Start Date and the task's Finish Date. Default: Cleared
- Start Successors on Next Day: Specifies whether you want autoschedule to start successor tasks with zero lag the day after the predecessor task finishes. When cleared, successor tasks start the same day as the predecessor task finishes as long as the resource has availability that is left. Default: Cleared

5. Click OK.

> [!NOTE]
> This applies to variable-duration tasks only.

Autoschedule Master Projects
You can autoschedule a group of subprojects from the master project to show the best fit of all tasks in all projects.
Best Practices: Before you autoschedule a master project, create a project start milestone for each subproject and link it to the first task in the master project. You can then lock or define a Start No Earlier Than date constraint to the milestone to assist with the individual project time frame constraints.


The master project's resource list contains the names of the resources assigned to work on the projects that are contained in the master projects, the subprojects.
Autoschedule Projects from a Start Date
When you schedule a project from its start date, autoschedule attempts to schedule all project tasks to start as early as possible. When you run autoschedule using a project's start date, it calculates the early start and early finish, moves the early start forward, checks for fixed loading pattern assignments, and adjusts the early start or early finish to ensure that fixed assignments are within the date range of the project.
When you autoschedule your project, the task start dates change to the date you enter or a later date, except in the following cases:
- The task has a status of Started or Completed. - The task has a Must Start On scheduling constraint. - The task is marked as Locked for Scheduling. - The task has resource assignments with fixed loading patterns before the entered start date.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Autoschedule in the Schedule group. 3. Enter the date on or after which you want to begin scheduling tasks in the Start Date field. 4. Make sure that the Schedule from Finish Date field is cleared, and click OK.
Autoschedule Projects from a Finish Date
You can autoschedule projects from a finish date to help you find out on which date your project has to start to meet a required finish date. When you schedule your project based on its finish date, autoschedule performs three traversals of the project. In the second and third traversals, it goes over the tasks backward first and enforces finish constraints over start constraints so that the project is scheduled to start as late as possible.
When you run autoschedule using a project's finish date, it does the following:
- Calculates the late finish and late start dates. - Moves the late finish date forward. - Checks for any fixed loading pattern assignments. - Adjusts the late start or late finish date to ensure the fixed assignments are within the project's date range.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Autoschedule in the Schedule group. 3. Select the Schedule from Finish Date check box to perform a backwards schedule from a defined deadline date.The
Start Date field toggles to the Finish Date field. The current project finish date displays in the Finish Date field. 4. Enter the project's anticipated finish date in the Finish Date field, and click OK.
Autoschedule by Task Priority
The task priority controls the order in which tasks are scheduled during autoschedule, subject to dependencies and task and resources constraints. Autoschedule, therefore, schedules tasks with higher priority ahead of tasks with lower priority. Use the General tab on the Task Properties dialog to define a task's priority or priority inheritance. If you do not specify priority for a task, autoschedule uses the priority of its parent task, or the next highest WBS level. If no priority is defined, autoschedule uses the default value (10).
Autoschedule schedules task priority as follows:
- Numbers 0 through 9 are given the highest priority level during scheduling. - Numbers 11 through 36 are given the lowest priority level during scheduling.
For dependencies, autoschedule assumes that a predecessor task has a priority at least equal to its successor. In some cases, dependency relationships override individual task priority during the scheduling process.
Override Task Lock During Autoschedule
You can override the lock on tasks while autoscheduling. For example, if you have a task that is locked between February 25, 2008 and April 4, 2008, autoschedule distributes the assignment's ETC to the task between the two dates. If you do not override the lock and autoschedule changes the task's end date to April 25, 2008, the assignment's ETC remains between February 25, 2008 and April 4, 2008. However, if you choose not to override the lock, the assignment's ETC is distributed between February 25, 2008 and April 25, 2008, based on the assignment's loading pattern.
When scheduling locked tasks using this option, autoschedule adheres to the following rules:
- Assignments that have a fixed loading pattern are not scheduled (No change in behavior). Variable assignments that have Front, Back, or Uniform loading are scheduled.
- Variable assignments that have a loading pattern other than fixed on the locked tasks are scheduled before any other assignments. If a variable assignment is on a fixed task, it is scheduled before any assignment on variable tasks.
- Variable assignments on the locked tasks are scheduled without regard to the resource's work on other tasks, within the same project.
- The assignment does not get over allocated and the assignment's loading pattern is honored. - When forward scheduling, work is distributed between the task's Actuals Thru date or the Autoschedule date,
whichever is later, and the task's finish date. If the Autoschedule date is later than the task's finish date, all work is placed on the task's Finish Date since the task duration cannot be extended as the task is fixed. - When backward scheduling, work is distributed between the task's Finish Date or the Autoschedule date, whichever is earlier, and the task's Start date or the Actuals Thru date. If the Autoschedule date is earlier than the latter of the task Start date and the Actuals Thru date, all work is placed on the later date. - When scheduling variable assignments on locked and fixed tasks, neither the task's start nor finish are changed.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Autoschedule in the Schedule group. 3. Select the Schedule Assignments on Locked Tasks check box, and click OK.
Baseline Projects in Open Workbench
You can baseline projects in Open Workbench (OWB). A baseline is a snapshot of the original project plan that you preserve for later comparison with the current plan. You can baseline to evaluate a project and compare it with an approved plan. Baselining preserves a version of the plan that does not change as work on the project progresses, unless you baseline the project again.
You can baseline a task, a selected range of tasks, all tasks in a view, or the entire project. When you create a baseline, you preserve information such as start dates, finish dates, and usage from that moment in time. You can then compare the current plan with the baseline plan to determine if the project is proceeding as expected.
When Is It Appropriate to Baseline?
The appropriate time for you to baseline a task or resource assignment data is after management approves the project plan and before the task starts and actuals are tracked. This gives you a reference against which to measure the project progress. If the plan goes through several review cycles, and management approves a new basis for measurement, you can rebaseline the task so that you can compare the revisions with the original plan.
Open Workbench supports multiple baselines so you can create new baselines as the project progresses.
- Baselines and Earned Value Computations - Set Baselines - Display Baseline Data in Views - Edit Baselines - Rebaseline Projects - Multiple Baselines - Clear Baseline Values - Delete Baselines


Baselines and Earned Value Computations
Open Workbench factors in baseline information in many calculations that are performed in the earned value analysis. Earned Value Analysis (EVA) is a statistical operation that compares the project's present actuals against what was planned. For example, it may compare the length of time a task would take, according to a baseline budget plan, with the actual length of time it took. EVA is also named Performance Measurement.
Open Workbench includes fields containing the fundamental calculations that are used for earned value analysis. These fields are available as discrete items for reporting purposes and you can add them to any view. These fields are used primarily as variables by other calculated fields to produce variance values.
Earned value calculates the following values for every scheduled activity:
- Budgeted Cost of Work Scheduled (BCWS). The budgeted amount to be spent on the project in a given period. - Actual Cost of Work Performed (ACWP). The total direct and indirect cost that is incurred in performing work during
a given period. - Budgeted Cost of Work Performed (BCWP). The percentage of the total budget equal to the percentage of the
actual work performed.
These values are used together to determine if work is being performed as planned. The most frequently employed measures are:
- Cost Variance (CV), where CV = BCWP - ACWP. - Schedule Variance (SV), where SV = BCWP - BCWS. - Cost Performance Index (CPI), where CPI = BCWP / ACWP.
Use the EVA fields to track work performance to account for cost and schedule variances. For example, Open Workbench computes BCWS using the following formula:
BCWS = (cumulative baseline usage from the start date through the Project as-of date) x (the resource billing
rate)
> [!NOTE]
> You must baseline your project to attain date or EAC variances.

Set Baselines
Use the Multiple Baselines dialog to set baselines and to rebaseline your project. This dialog lists the baselines that you have already set on the project. When you set a new baseline, its default name is Baseline1 and it is marked as the current baseline. If the project already has a baseline that is named Baseline1, then the new baseline you set is named Baseline2. You can edit the name after you capture the baseline.
Select all levels of the WBS to rebaseline your project, view, or selected tasks. When you rebaseline tasks that have changed, such as changes to a resource's ETC, the data is not rolled up to the summary task level. Data, however, is rolled down to a phase's tasks when you rebaseline at the summary task level.


**Follow these steps:**
1. Click Tools, Baselines, Multiple Baselines. 2. Click New. 3. Click OK.


Display Baseline Data in Views
You can display one baseline in a view at a time. To view baseline information, first include the fields that display baseline data in one of your views. You can display the current baseline in a spreadsheet view, such as the Gantt Chart view, against the current status of the project. Special baseline markers on Gantt bars indicate the baseline information to differentiate the baseline information from the current schedule.
Follow these steps to include the fields that display baseline data in a view:
1. Open a view that displays the task detail pane. 2. Add the following fields:
- Task Baseline Cost - Task Baseline Usage - Task Baseline Usage (aggregated) - Assignment Baseline Cost 3. Add the Resource Baseline Cost field in the resource detail pane.
Follow these steps to display a baseline:
1. Double-click the Gantt chart. 2. Select the Baseline check box in the Gantt Bars group and click OK.

Edit Baselines
Use the Multiple Baselines dialog to edit the name, description, and code, and to set a baseline as the current baseline.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Manage in the Baselines group. 3. Select the Current check box next to the baseline you want to set as the current baseline.
> [!NOTE]
> You can select one baseline as the current version. 4. Click OK.

Rebaseline Projects
Use the Set Baseline dialog to rebaseline your project. When you rebaseline your project, the current baseline is replaced with the new baseline data.
> [!NOTE]
> When you choose to rebaseline the view or selected tasks, the project baseline values are not updated.
You must select all levels of the WBS to rebaseline your project, view, or selected tasks. When you rebaseline tasks that have changed, such as changes to a resource's ETC, the data is not rolled up to the summary task level. Data, however, is rolled down to a phase's tasks when you rebaseline at the summary task level.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Define in the Baselines group.


3. Select the following options: - Project in the Scope section. - Set in the Baseline Settings section.
4. Click OK. 5. Click Yes to confirm that you want to overwrite the prior version of the baseline data with the new version, when
prompted.
Multiple Baselines You can create multiple baselines to track the progress of your projects from:
- Classic PPM. The project must be unlocked to create a new baseline. - Open Workbench. Baseline data is stored at the summary-task and project level. Cost data is stored with the baseline. If you make subsequent changes to rates, they do not retroactively modify baseline costs.
If you are using Open Workbench with Classic PPM and you rebaseline the master project, only the data you enter directly in the master project is captured and not the data you enter in the subprojects.
From Open Workbench you can:
- Set a baseline to save a range of tasks, all tasks in a view, or all tasks in a project to a baseline. - Create multiple baselines to maintain historical versions. - View or edit project baseline properties. To save a baseline in Classic PPM, you must have the access rights to modify baselines for the project.
Multiple Baselines with Master Projects and Subprojects When you set the baseline for a master project, you also set it for the project's subprojects. The master project's baseline data is an aggregation of its own baseline data and its subprojects. It is dynamically aggregated at the time you set the baseline. The master project's resource baseline data is an aggregation of the team baseline data.
When you open a master project that you have not baselined, but one of the subprojects has been baselined, the current baseline for that subproject is displayed in views. For example, if you have a master project with two subprojects, Subproject1 and Subproject2, and only Subproject1 has a current baseline, Baseline1. You rename that baseline and you baseline a selected task in Subproject2. Then Subproject1's baseline is deleted and is replaced with Subproject2's baseline. Subproject2's baseline is marked as the current baseline.
If you are using Open Workbench with Classic PPM and you create multiple baselines for a master project, a baseline (Baseline1) is created for the master project and its subprojects. When you save the master project back to Classic PPM, the baseline data for the master includes the values from the subprojects. For example, if you have a master project that has a task with 5 hours of ETC, and its two subprojects have a task with 10 hours ETC each, then on saving the project back to Classic PPM, the master project baseline usage is 25 hours.
If you open a master project that you have baselined, and then add a new subproject, the existing subproject's current baseline is saved. If you baseline the master project, the subproject's baseline is replaced by the new baseline. If the master project's subprojects have more than one baseline, the baseline that is marked as the current baseline displays in views.
> [!NOTE]
> To keep master project baselines in sync with the subproject baselines, do not change baselines that are marked current without first changing them in Classic PPM. When you open a Classic PPM project in Open Workbench, all baseline data that is defined in Classic PPM is loaded into Open Workbench.

Set Multiple Baselines
When you maintain multiple baseline versions, the current version is the version from which earned value analysis (EVA) is measured. You can change the current version any time. You can set multiple baselines and can save the project back to Classic PPM. By default, when you create a new baseline, it is selected as the current version. You can choose to select another baseline to be the current version.
When you create a new baseline, the name and code of the new baseline by default is baselineN, where N is an incremental number starting at 1. Double-click the cell to change the value.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Manage in the Baselines group. 3. Click New to add a new baseline to the grid. This baseline is selected as the current baseline version.
- Code: Defines the code for the baseline. - Name: Defines the name of the baseline. - Description: Defines the description of the baseline. 4. Click OK.
Analyze Data in Multiple Baselines
You can create a baseline to analyze the impact of the additional work. When you select only a few of the project tasks and baseline, the baseline values are updated for those tasks. The summary level baseline information remains the same until you update the baseline for the selected summary task, or the entire project. Use the summary level baseline to analyze the changes that have occurred at that level, even though they do not show at the task level.
Clear Baseline Values
Use the Set Baseline dialog to clear the baseline values or to rebaseline. Clearing baseline values replaces the existing baseline data that has been set for all of the tasks in a project, all of the tasks in the active view, or a selection of tasks. If you are using Open Workbench with Classic PPM, save the project to Classic PPM after you clear the current baseline values.
**Follow these steps:**
1. Open the Project ribbon 2. Click Define in the Baselines group. 3. Select one of the following options in the Scope section:
- Project to clear the baseline of all the tasks in the current project. - View to clear the baseline of the tasks in the active view. - Selected Task(s) to clear the baseline of the selected tasks. 4. Select Clear in the Baseline Settings section and click OK. 5. Click Yes to accept the change when prompted with a warning that clearing the baseline replaces your existing baseline data.
Delete Baselines
Use the Multiple Baselines dialog to delete a baseline or to edit your baseline. If you want to delete a previous baseline but that baseline is marked as current, clear the Current field before deleting. You can only delete the current baseline if it is the only baseline listed.
**Follow these steps:**
1. Open the Project ribbon. 2. Click Manage in the Baselines group.


3. Select the baseline row you want to delete, and click Delete.


Calculate Critical Path in Open Workbench
You can calculate critical path in Open Workbench (OWB). Critical path is a set of tasks in a project for which any delay or expansion lengthens the project or causes project deadlines to slip. The critical path determines the project's earliest finish date. Autoschedule uses the critical path value to determine the tasks that drive the project deadlines and constraints. The critical path is calculated using the dependency sequence and task duration. If you decide to schedule subnets, a separate critical path is calculated and displayed for each subnet and for each task that does not have dependencies.
To calculate the critical path, autoschedule your project or select Tools, Critical Path. You can view the project's critical path in a CPM Network view.
How Open Workbench Calculates Critical Path
Open Workbench calculates a project's critical path using a two-step process. The following rules govern how this twostep process is conducted:
- Tasks that are part of the longest duration chain are on the critical path. - Project finish date is the sole reference date used to calculate both the early and late schedules. - Float can be zero, lesser or greater than zero. - Task status has no bearing on dependency violations or the critical path calculation. - A task that is not on the dependency network cannot have an early schedule or late schedule; hence, it cannot be on
the critical path. - Resource constraints do not affect the critical path calculation.
To arrive at the critical path, the application performs two passes through the dependency network.
The First Pass
The first pass works forward through the network to determine the early start and early end dates for each task in the network, and calculates the longest duration path through the network. The project's reference end date is the project's defined finish date. If you did not define this date, the end date is the early end date of the last task in the network or, if there is more than one branch, the latest of the early end dates of the last task in each branch.
To calculate the early start date for the task's successor(s), the application starts with the first task in the network and adds the task's duration to the start date. Adjustments are made for gaps or overlaps by adding or subtracting from the duration. The early end date is calculated by adding the task's duration to the early start date. The application repeats this process for each task in the network.
> [!NOTE]
> The successor of a Start-Start dependency has the same early start date as the predecessor. The successor of a Finish-Finish dependency has the same early end date as the predecessor.
The Second Pass
The second pass works backward through the network starting from the project finish date to determine each task's late start and late end date. The last task of each branch of the network has a late end date equal to the project finish date. To calculate the late end date for a task's predecessor(s), the application subtracts the task's duration from the project finish date. Adjustments are made for gaps or overlaps by adding or subtracting from the duration. The late start date is calculated by subtracting the task's duration from the late end date. The application repeats this process for each task in the network.
> [!NOTE]
> The predecessor of a Start-Start dependency has the same late start date as the successor. The predecessor of a Finish-Finish dependency has the same late end date as the successor.

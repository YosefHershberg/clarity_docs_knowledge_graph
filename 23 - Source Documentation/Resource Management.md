# Resource Management

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[13 - Classic PPM/_MOC Classic PPM|Classic PPM]]
- Canonical notes:
- [[13 - Classic PPM/Resource Management Classic]]
- [[13 - Classic PPM/Project Management Classic/Resource Assignments]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Overview (#overview)
- H2: Prerequisites for Resource Management (#prerequisites-for-resource-management)
- H2: Resource Planning Portlets by Page (#resource-planning-portlets-by-page)
- H2: Create Resources and Roles (#create-resources-and-roles)
- H3: Review the Prerequisites (#review-the-prerequisites)
- H3: Create a Labor Resource or Role (#create-a-labor-resource-or-role)
- H3: Create a Nonlabor Resource or Role (#create-a-nonlabor-resource-or-role)
- H3: Assign Skills to Labor Resources (#assign-skills-to-labor-resources)
- H3: Financially Enable a Resource or Role (#financially-enable-a-resource-or-role)
- H3: Configure Booking Managers by OBS for a Role (#configure-booking-managers-by-obs-for-a-role)
- H3: Configure Teams (#configure-teams)
- H2: Configure Base Calendars, Shifts, and Work Days (#configure-base-calendars-shifts-and-work-days)
- H3: Create a Base Calendar (#create-a-base-calendar)
- H3: Define Work Shifts in a Calendar (#define-work-shifts-in-a-calendar)
- H3: Define Work Days in a Calendar (#define-work-days-in-a-calendar)
- H3: Edit Resource Availability in a Calendar (#edit-resource-availability-in-a-calendar)
- H3: Change or Delete a Base Calendar (#change-or-delete-a-base-calendar)
- H3: Reset Base Calendar Shifts (#reset-base-calendar-shifts)
- H2: Find, Book, and Allocate Resources (#find-book-and-allocate-resources)
- H3: Resource Allocations (#resource-allocations)
- H3: Find and Book a Labor Resource (#find-and-book-a-labor-resource)
- H3: Change the Default Resource Allocation (#change-the-default-resource-allocation)
- H3: Add Investments to Resource Workloads (#add-investments-to-resource-workloads)
- H3: Edit Investment Allocations (#edit-investment-allocations)
- H3: Shift a Resource Allocation (#shift-a-resource-allocation)
- H3: Remove Investments from Resource Workloads (#remove-investments-from-resource-workloads)
- H3: Replace a Role with a Named Resource (#replace-a-role-with-a-named-resource)
- H3: Replace Resources on Investments (#replace-resources-on-investments)
- H3: Deactivate a Resource or Role Profile (#deactivate-a-resource-or-role-profile)
- H2: Resource Availability Examples (#resource-availability-examples)
- H3: Example: Calendars with Irregular Shifts (#example-calendars-with-irregular-shifts)
- H3: Example: Monthly Resource Availability (#example-monthly-resource-availability)
- H3: Example: Resource Allocations (#example-resource-allocations)
- H2: Fill Resource Requisitions (#fill-resource-requisitions)
- H3: Resource Requisitions (#resource-requisitions)
- H3: Requisition Routing and Notification (#requisition-routing-and-notification)
- H3: Find Resources to Fill Role Requests (#find-resources-to-fill-role-requests)
- H3: Review Resource Requisitions (#review-resource-requisitions)
- H3: Propose Allocations to Fill a Resource Requisition (#propose-allocations-to-fill-a-resource-requisition)
- H3: Reduce Resource Allocations (#reduce-resource-allocations)
- H3: Participate in Requisition Discussions (#participate-in-requisition-discussions)
- H3: Types of Requisition Status (#types-of-requisition-status)
- H3: Set a Default Booking Manager for Resources (#set-a-default-booking-manager-for-resources)
- H3: Decline an Open Resource Requisition (#decline-an-open-resource-requisition)
- H3: Unbook a Requisition (#unbook-a-requisition)
- H3: Modify and Resubmit Proposals (#modify-and-resubmit-proposals)
- H3: Manage an Automated Requisition Process (#manage-an-automated-requisition-process)
- H3: Audit Requisitions (#audit-requisitions)
- H2: Manage Resource Capacity Planning Scenarios (#manage-resource-capacity-planning-scenarios)
- H3: Configure Settings for Resource Planning (#configure-settings-for-resource-planning)
- H3: View High-Level Capacity Planning Information (#view-high-level-capacity-planning-information)
- H3: View Detailed Capacity Planning Information (#view-detailed-capacity-planning-information)
- H3: View Other Resource Planning Portlets (#view-other-resource-planning-portlets)
- H3: Include Resources To-Be-Hired in Capacity Planning Portlets (#include-resources-to-be-hired-in-capacity-planning-portlets)
- H3: View Allocation Discrepancies (#view-allocation-discrepancies)
- H3: Capacity Planning Scenarios (#capacity-planning-scenarios)
- H2: Requirements and Release Planning (#requirements-and-release-planning)
- H3: Requirements Planning Workflow (#requirements-planning-workflow)
- H2: Requirements (#requirements)
- H3: Create Requirements (#create-requirements)

## Overview

Allocating the appropriate resources to the right project teams is essential for effective resource management. Classic PPM provides a flexible framework where you can perform the following resource management activities:
- Create and edit resource profiles with important details such as employee type, primary role, skills, and experience
- Identify one or more resources by searching on specific characteristics, skills, or availability
- View, edit, and track resource allocations and workloads
- Compare resource capacity with resource demand

> [!NOTE]
> The documentation may not match what you see in the product user interface. This difference can occur because all access to features, menus, pages, buttons, and objects is determined by your access rights. Your organization can also configure the application pages, objects, lookups, partitions, processes, and user interface. Contact your administrator if you are not able to complete any of the steps in the documentation.

As a resource manager, you manage the assignments of employees, contractors, and nonlabor assets. Resource managers can be temporary project leaders or full-time department heads. Project managers often use Resource Management features, such as creating requisitions and finding resources.

The Resource Planning pages offer the following ways to manage resource and role allocations:
- By investment by week
- By investment start and finish dates
- For a single investment or multiple investments
- In a graphic histogram that contrasts resource availability and allocation
- In a table that shows you allocation information by investment, resource, or role

Changes that you make on the Resource Planning pages also appear on the related investments. You can view the changes on the Team Staff page for an investment.

> [!TIP]
> **Best Practice:** As a resource manager, when you adjust resource allocations, inform the investment or project manager about your changes. The project manager can adjust task assignments and the schedule to accommodate the changes that you introduced for team members.

---

## Prerequisites for Resource Management

As a resource manager, work with your administrator to complete the following prerequisites:
- Verify with your administrator that scheduled jobs are running properly. If any data fails to appear on a page or in a report, contact your administrator.

> [!NOTE]
> The failure of certain jobs can affect the appearance of your data. For example, the Time Slicing job can affect the resource management data or the performance of the application. When the Time Slicing job fails to run, time-sliced data on resource planning pages cannot display properly.

To enable financial properties for resources and roles, verify that you have the following access right:
- **Resource - Navigate**

To edit financial attributes for a specific resource or role, verify that you have one of the following access rights:
- **Resource - Edit**
- **Resource - Edit Financial**

To edit financial attributes for all resources and roles, verify that you have one of the following access rights:
- **Resource - Edit - All**
- **Resource - Edit Financial - All**

To create, view, or edit resource properties, verify with your administrator that you have the following access rights:
- **Administration - Resources**
- **Resource - Create**
- **Resource - Edit**
- **Resource - Edit - All**
- **Resource - Edit Access Rights**
- **Resource - Edit Administration**
- **Resource - Edit Financial**
- **Resource - Edit Financial - All**
- **Resource - Edit General**
- **Resource - Edit General - All**
- **Resource - Enter Time**
- **Resource - Hard Book**
- **Resource - Hard Book - All**
- **Resource - Navigate**
- **Resource - Soft Book**
- **Resource - Soft Book - All**
- **Resource - Update Skills**
- **Resource - Update Skills - All**
- **Resource - View**
- **Resource - View - All**
- **Resource - View Access Rights**
- **Resource - View Financial**
- **Resource - View Financial - All**

To work with capacity planning scenarios, verify that you have the following access rights:
- **Scenario - Edit**
- **Scenario - Edit Access Rights**
- **Scenario - Manager - Automatic**
- **Scenario - Navigate**
- **Scenario - View**

> [!NOTE]
> You can limit resources or investments through a security OBS or through instance-level resource access rights. A more manageable amount of data appears for the resources and investments you manage. Capacity planning scenarios allow you to make what-if changes without impacting the plan of record data. Your access rights apply to the portlet that you view. If you select a scenario, the same access rights apply with the addition that you can view scenario data.

To manage requisitions, verify with your administrator that you have the following rights:
- **Project - Attach Requisitions Entry Resources - All**
- **Project - Create/Edit Requisitions - All**
- **Project - View Requisitions - All**
- **Process - Create Definition**
- **Process - Initiate**

---

## Resource Planning Portlets by Page

The following table lists the Resource Planning pages with portlets.

| Resource Planning Page | Description | Portlets |
|---|---|---|
| **Capacity** | Lists overall resource demand against resource capacity across all investments. The page aggregates information by role and presents information by month. You can view how total demand varies from total capacity for each role. | Role Capacity Histogram, Role Capacity |
| **Organizational Demand** | Lists the aggregated demand for all investments and resources by OBS. You can view allocation data at different levels within the selected OBS unit. | OBS Resource Aggregation, OBS Investment Aggregation |
| **Top Down Planning** | Lists investments and the resources and roles that are allocated to each investment. | Top Down Planning by Investment |
| **Workloads** | Displays the combined allocations across all investments for the assigned resource. | Resource Workloads |
| **Allocations** | Use this page to compare the availability with the number of hours that are allocated for a resource to an investment. Provides several options to view and edit resource allocations on individual investments. | Weekly Detail, Allocation Discrepancy |
| **Unfilled Allocations** | Provides a list of roles that are booked to all investments and displays unfilled demand across your organization. | Unfilled Requirements |
| **Bookings** | Provides a list of resources with information about their booking status for all investments. | Booking Status |

> [!NOTE]
> These portlets are designed for a resource planning user that has global access to all resources in the system. As a resource manager or administrator with global access, you can manage the planning aspect of investment work. We do not recommend configuring a user with instance or OBS unit access restrictions. This practice can reduce the performance of these portlets.

---

## Create Resources and Roles

As a resource manager or application administrator, create roles first as placeholders for the resources that your projects require. Then, create the resources that you hire to fill the demand that the role allocations represent. Finally, assign your resources to the right project teams.

For example, create a role for a field technician and then create resources for your staff and contractors. You can create an advanced role for a lead field technician with more skills. Create a nonlabor equipment role whenever a project requires machinery. Then create a resource entry for each available piece of equipment that your company owns or leases.

The application uses the financial properties of the resource to apply the correct rates and costs to their work transactions. To post time and appear in financial pages and reports, enable the financial properties for a resource. The financial actuals are visible in the product only for resources that are financially enabled.

The steps for creating resources and roles are:

1. Review the Prerequisites
2. Create a Labor Resource or Role
3. Create a Nonlabor Resource or Role
4. Assign Skills to Labor Resources
5. Financially Enable a Resource or Role
6. Configure Booking Managers by OBS for a Role
7. Configure Teams

### Review the Prerequisites

Verify that your administrator has satisfied the following prerequisites:
- Configure the skills hierarchy
- Assign the required access rights

### Create a Labor Resource or Role

You can create a labor resource using either the **Home** or **Administration** menus. Typically, a resource manager creates a labor resource from the **Home** menu. The administrator can then activate their user status and assign rights and login credentials.

Follow these steps:

1. As an administrator, you can create new users using the following substeps. If you are not an administrator, skip Step 1 and go to Step 2.
   a. Click **Administration**, **Organization and Access**, **Resources**.
   b. Click **New** and complete the required fields including a unique user name and resource ID.
   c. Click **Save and Continue** to navigate through the tabbed pages for the new resource.
   d. Click **Return** and confirm that your new resource appears in the list with active status. You created a new user record. A resource manager can continue to define the labor resource.
2. As a Resource Manager, click **Home**, **Resource Management**, **Resources**.
3. Click **New** or apply search filters to find the user resource entry that was created in Step 1 to define more details about the resource.
4. In the **Resource or Role** field, select **Resource**.
5. In the **Resource Type** field, select **Labor**.
6. Click **Next**.
7. Complete the Create Resource-Labor page including the following fields:
- **Primary Role:** Indicates the primary role for the resource. Roles can change from investment to investment. A primary role lets other resources see at a glance the primary area of expertise for this resource.
- **Category:** Defines the category that identifies the area of expertise of the resource. Example: Software Development or Product Marketing.
- **External:** Specifies whether the resource works for an outside company. Default: Cleared.
- **Availability:** Defines the number of hours in a business day that the resource is expected to work. The availability number is automatically multiplied by five, which is the number of days in a standard working week. Default: 8. Note: This field is mandatory and must be greater than zero for the Labor type of resource or role. ETC is based on the availability. An expense type of resource or role that is assigned to a task does not have a default ETC.
- **Input Type Code:** Specifies a code that is used for the resource in financial transactions.
- **Track Mode:** Indicates the tracking method used to enter time for this resource. Values:
- **PPM** (formerly Clarity): Staff members enter time against their assigned tasks using timesheets.
- **None:** Non-labor resources track actuals through transaction vouchers, or through a desktop scheduler such as Open Workbench and Microsoft Project.
- **Other:** Indicates that actuals are imported from a third-party program. Default: PPM.
- **Open for Time Entry:** Specifies if the resource can use timesheets to track time that is spent on task assignments. When cleared, the resource cannot log time on any project. Default: Cleared.
8. Click **Save**.
9. To define the resource or role availability, click the **Calendar** tab.
10. (Optional) Click the **Properties** tab, and click **Contact Information**. Complete the fields and save your changes.
11. As an administrator, activate the new resource and create their initial login password (unless you are using SSO):
    a. Click **Administration**, **Organization and Access**, **Resources**.
    b. Enter a filter to find the new resource by ID or by status.
    c. Open the resource and change the **Status** field to **Active**. You can also select the resource and click **Activate**.
    d. Set a password and confirm the password.
    e. Click **Save and Return**.

> [!NOTE]
> **Open for Time Entry** behavior:
> - When **Open for Time Entry** is selected, the **Resource - Enter Time** access right is auto-assigned to the resource. This action enables the resource to enter time in Clarity.
> - When **Open for Time Entry** is cleared, the **Resource - Enter Time** access right is auto removed from the resource. This action revokes the ability of a resource to enter time in Clarity.
> The **Include in Datamart** field specifies the resource for inclusion in the datamart. When cleared, the resource is not added in the datamart. Financial data for portlets and reports is included when the datamart extraction job runs.
> You cannot delete labor resources (users) because the system maintains their history to preserve referential integrity. If a user leaves your organization, an administrator can lock their user account. If a user defined as a labor resource leaves and comes back, we recommend creating a new resource record instead of reactivating the old one. Creating a new record preserves the history of the old record. Leave the old resource record in an inactive status. Similarly, when a resource or role is financially active, it includes financial management data. You cannot delete or edit the value of the Resource ID.

### Create a Nonlabor Resource or Role

You can create nonlabor resources and roles including equipment, material, or expense. Create a role as a placeholder in a project to help you plan for tasks and estimate the scope of work.

Follow these steps:

1. Click **Home**, **Resource Management**, **Resources**.
2. Click **New**.
3. In the **Resource or Role** field, select **Resource** or **Role**.
4. In the **Resource Type** field, select **Equipment**, **Material**, or **Expense**.
5. Click **Next**.
6. Complete the page including the following fields:
- **Parent Role:** Specifies the role one-level higher than this role in a hierarchy. Example: The Application Developer role is a parent to the Web Developer role.
- **Primary Role:** Indicates the primary role for the resource. Roles can change from investment to investment.
- **Category:** Defines the category that identifies the area of expertise of the resource. Example: projector, server, truck.
- **External:** Specifies whether the resource works for an outside company. Default: Cleared.
- **Availability:** Represents the number of hours in a business day that the resource is expected to work. The availability number is automatically multiplied by five, which is the number of days in a standard working week. ETC is based on availability calculations. A resource or role of type expense that is assigned to a task does not have a default ETC. Default: 8.
- **Resource Manager:** Identifies the name of the manager with access rights to perform duties such as setting the allocation for this resource. Default: The resource currently logged in.
- **Booking Manager:** Indicates the default booking manager for this labor resource.
7. Click **Save**.
8. To define the resource or role availability, click the **Calendar** tab.
9. (Optional) Click the **Properties** menu, and under **Main**, click **Financial**. Complete the fields and save your changes.
10. (Optional) For labor and expense resources only, click the **Properties** menu, and under **Main**, click **Contact Information**. Complete the fields and save your changes.

> [!NOTE]
> The **Availability** field is mandatory and must be greater than zero only for the Labor type of resource or role. Material and equipment (but not expenses) can also have an availability value.

### Assign Skills to Labor Resources

You can use skills to describe the talents a labor resource or role possesses for project tasks. Defining the skills of labor resources is helpful to other users who want to assign the most qualified resources to roles on projects.

Follow these steps:

1. Click **Home**, **Resource Management**, **Resources**.
2. Open a resource or role.
3. Click the **Skills** tab. The Resource Skills page appears showing the skills for the selected resource or role.
4. Enter filter criteria for an existing skill or click **Show All**.
5. To add a skill to the list, click **Add**. The Select Skills page appears showing all the skills available in the skills hierarchy for all resources and roles.
6. Enter filter criteria for an existing skill or click **Show All**.
7. Select a skill and click **Add**.
8. Click **Save**.
9. For each skill, select values for the **Proficiency Level**, **Interest**, and **Weighting** fields:
   a. Assign proficiency levels for labor resources as a rating that indicates how well the resource performs the skill.
   b. To indicate how important this skill is for the resource or role, assign an interest level. For example, a resource with an interest level of 7 - Medium has a greater interest in performing a skill.
   c. Use the weighting factor as a tiebreaker if there are multiple skills that have the same proficiency and interest.
10. Click **Save**.

> [!NOTE]
> To add a skill to the skills hierarchy, contact your administrator. Also be careful not to disable required system lookups for resource skills. If you disable Resource Interest Level or Resource Proficiency Level, or certain lookup values, users might not be able to add skills.

### Financially Enable a Resource or Role

You can financially enable any resource or role to track their financial transactions. Enabling the resource or role includes associated financial data in features such as financial planning and forecasting.

> [!NOTE]
> You cannot select a specific financial department or financial location for roles for the following reasons:
> - A single role can be shared with a number of resources on the same or different projects and on the same or different Departmental OBS.
> - You cannot post actual hours against roles (only against named resources or defined teams).

Follow these steps:

1. Click **Home**, **Resource Management**, **Resources**.
2. Open the resource or role.
3. Click the **Properties** tab and select **Financial** under **Main**.
4. Complete the **Supplemental** section including the following fields:
- **Financially Active:** Indicates whether the financial attributes for a resource or role are enabled to record financial management activities against an investment.
- **Transaction Class:** Specifies a user-defined value that groups transaction types for financial processing of the resource or role.
- **Resource Class:** Categorizes financially enabled resources and roles for financial processing.
5. If the resource type is labor, complete the **Financial Department** and **Financial Location** fields.
6. (Optional) For resources only, complete the following fields in the **Rates and Costs** section. These values are for your own informational and reporting needs as a Resource Manager. In financial transactions, the rate matrix is used.
- **Target Billing Rate:** Use this field to store the billing rate for this resource.
- **Target Billing Rate Currency:** In multi-currency environments, select the billing currency code to use throughout the application for this resource.
- **Target % Billing:** Enter the target percentage of the target billing rate for this resource, if applicable.
7. (Optional) For resources only, complete the fields in the **Expenses** section.
8. Save your changes.

### Configure Booking Managers by OBS for a Role

You can use this procedure to define one or more booking managers based on OBS units. For example, you have a single Business Analyst role but have Business Analysts in different locations. You can specify the Booking Manager for Business Analysts in each area, or node, of an OBS. Later, project and resource managers can create resource requisitions that use this booking information.

Follow these steps:

1. Click **Home**, **Resource Management**, **Resources**.
2. In the list of resources and roles, open a role.
3. Click the **Booking OBS** tab. The Booking OBS tab appears only when you open a role.
4. Click **Add**.
5. Select an OBS Unit and the Booking Manager for that unit.
6. Click **Save and Return**.
7. Click **Add** for each booking manager and OBS unit that you define.
8. To copy the booking manager and OBS unit mappings from another role, click **Copy from Role**.
9. To copy the booking manager and OBS unit mappings that you define to another role, click **Copy to Role**.
10. To remove booking OBS mappings, select them in the list and then click **Remove**.

### Configure Teams

Release 15.5 introduced the concept of a team resource - a defined team that can stand alone as a new type of resource, but also be populated by roles and named labor resources. Create teams in Clarity. With the following access rights, you can edit a team resource in Classic PPM:
- **Resource - Navigate:** This global right provides access to the Resource List in Classic PPM.
- **Resource - Edit:** This global, instance, or OBS-level right allows a user to edit the Team resource general properties in Classic PPM.
- **Resource - Edit Financial:** This global, instance, or OBS-level right allows a user to edit Team financial properties in Classic PPM.

**Navigate:** In the main menu, click **Administration** and then click **Teams**.

**Open a Team:** You can create a team (click **NEW TEAM**) or open an existing one by clicking its name.

**Staff a Team:** After you create a team, add resources and roles. As an administrator, manage the assignment of specific access rights for licensed users to access the team as a resource throughout the application. A user does not need access rights to the people on the team, only to the team resource.
- Assign the following access rights to enable a user to add team assignments on the **Staffing** page or the project **Staff** page; these rights also allow a user to allocate a team to an investment:
- **Resource - Soft Book**
- **Resource - Hard Book**
- Assign the following access right to enable a user to add a team as the owner for a task:
- **Resource - View**

**Reduced Set of Properties:** After you create a new team in Clarity, the team is available in the Classic PPM user interface as a team resource. The team resource does not require all the properties that appear for a human labor resource.

**Team Time Tracking:** You can enable Time Tracking for an entire team. For example, a resource manager sets up a team for seasonal work. The team is compensated at a flat rate and can determine on their own how to split the work tasks and compensation for team time entries. Assign the following access rights to enable a user to enter or approve timesheets for a team:
- **Resource - Time Entry**
- **Resource - Approve Time**

**Team Financial Properties:** You can edit the financial properties of the team resource. A team resource can have financial properties enabled and its own defined cost rate in the rate matrix. The characteristics of a team appear in financial plans. Team data can be populated into a cost plan using the population action from the Project Allocations or Assignments. When team actuals are posted in the financial module, they appear in the financial plans and in the Posted Transaction Review.

> [!NOTE]
> More Information: Clarity: Configure Teams | Clarity: Staff a Project | Configure User Accounts, Skills, and Access Rights | Clarity User Accessibility Features

---

## Configure Base Calendars, Shifts, and Work Days

The standard base calendar determines FTE and other calculations. As a project manager or resource manager, verify the base calendars show the correct work days, shifts, and nonworking days. You can change the workdays and nonworkdays of the week. You can define up to four standard work shifts.

### Create a Base Calendar

To manage shifts and work days, define a base calendar. For example, create calendars for different countries, departments, or seasons of the year.

You can designate only one base calendar as the standard. Base calendars serve as templates for other calendars including specific resource calendars and role calendars. The selected base calendar for a resource or role determines their FTE when you allocate them to a project team. Resource calendars also help calculate resource availability, capacity, demand, and allocation.

Follow these steps:

1. Click **Administration**, and from **Project Management**, click **Base Calendars**.
2. Click **New**.
3. Complete the following fields, and then click **Add**:
- **Calendar Name:** Defines the new calendar name.
- **Base Calendar:** Specifies the calendar to base this calendar. The base calendar is the parent to the new calendar. Example: Standard.
- **Standard:** Specifies the calendar as the standard calendar in Classic PPM. Default: Cleared.
4. Click **Save** and then click **Return**.

> [!NOTE]
> To delete one or more calendars, select their check boxes and then click **Delete**. You cannot delete the standard calendar. You also cannot delete a calendar that is defined as the base calendar (parent) for another calendar.

### Define Work Shifts in a Calendar

The default base calendar shows two 4-hour shifts with one hour for lunch for a total of eight work hours. You can set new shifts.

Follow these steps:

1. Click **Administration**, **Project Management**, **Base Calendars**.
2. Click the name of a calendar. The edit calendar exceptions page appears.
3. Select the month at the top of the calendar.
4. Select the check box next to the days having the same shift, and click **Set Shifts**.
5. Enter the start and end times for up to four shifts.
6. Save your changes.

> [!NOTE]
> Calendar updates appear in resource availability reports. For example, you might set a day as a morning shift or modify other shift information. Your supervisor can accurately determine your availability from the reports. Resource calendar updates appear in the resource availability and capacity after the Time Slicing Job is run.

To modify only one resource calendar:

1. Click **Home**, **Resource Management**, **Resources**.
2. Select a resource or role.
3. Click the **Calendar** tab.
4. Continue with Step 3 in the previous task documented above.

### Define Work Days in a Calendar

You can designate workdays and nonworkdays.

Follow these steps:

1. Click **Administration**, **Project Management**, **Base Calendars**.
2. Click the name of a calendar. The edit calendar exceptions page appears.
3. Select the month at the top of the calendar.
4. Indicate which days are standard workdays:
   a. To select dates by days of the week, select the check box next to the day of the week and click **Make Workday**.
   b. To change dates from workdays to non-workdays, select the check box next to each date and click **Make Non-Workday**.
5. (Optional) When you change a specific holiday on the resources calendar to a nonworkday, the shift information or availability is removed. If you change the day back to a workday, the software checks to see if a shift pattern exists for that day in that calendar (or parent). One of the following actions occurs:
- If a shift pattern does exist for that day, the day is set to use that shift pattern.
- If a shift pattern for the day does not exist, a check is made for a shift pattern for the corresponding day of the week for that calendar (or parent, as needed).
- If a shift pattern is found from the search, the day is set to use that shift pattern.
- If no shift pattern is found for that specific day of the week, then the first day of the week shift pattern that is found is used starting with the first day of the week (Sunday).
- If no shift pattern exists for any day of the week, then the default shift patterns of 8:00 AM - 12:00 PM and 1:00 PM - 5:00 PM are set for that day.

> [!TIP]
> If using Other Work to track personal time or vacation, mark those days as non-working days on your calendar to prevent the hours from being copied to your timesheet.

### Edit Resource Availability in a Calendar

You can review the calendar for a resource to determine their availability for various assignments.

Follow these steps:

1. Click **Home**, and from **Resource Management**, click **Resources**.
2. Select a resource or role.
3. Click the **Calendar** tab.
4. Change calendar information for a resource. For example, add working days, nonworking days, and shifts to the calendar.

> [!NOTE]
> The **Resource - Edit** access right is required.

### Change or Delete a Base Calendar

To delete a parent calendar or change to another parent, use the following procedure to change that relationship.

Follow these steps:

1. Click **Base Calendars** and click the name of a calendar. The edit calendar exceptions page appears.
2. Click **Edit Calendar Properties**. The edit calendar properties page appears.
3. Complete the following field:
- **Base Calendar:** Specifies the calendar to base this calendar. The base calendar is the parent to the new calendar. Example: Standard.
4. Save the changes.

### Reset Base Calendar Shifts

When you reset the shift by resetting a base calendar, the base calendar shift information is updated for that day. This information is important when you use a shift other than eight hours, and can affect resource availability and allocation.

Follow these steps:

1. Click **Base Calendars** and click the name of the calendar. The edit calendar exceptions page appears.
2. Select the check box next to each date to reset, and then click **Reset to Base**. The shift is reset to the base calendar.

---

## Find, Book, and Allocate Resources

As a Resource Manager, use this section to manage resource availability and allocations.

### Resource Allocations

For large organizations, finding and allocating the right people to investments is essential. Finding the correct resource can be more complex when workers are both inside and outside your company and when they are in different geographical locations. To simplify this process, use the **Resource Finder** to allocate internal and external resources to investments.

To view and edit information about the assigned investments for a resource or role, use the **Allocations** page. This page lists all the projects to which the resource or role has been added. You can make the following changes:
- Add and remove projects to and from the workload for a resource
- Add and remove investments
- Edit the amount of time the resource or role has been allocated to a project
- Change the start and finish dates for the investment allocation
- Change booking status, and edit allocations by date or percentage
- Change the percentage of time the resource or role is allocated to the investment. Resources and roles are booked to each project for 100 percent of their time. To reduce the amount of time a resource spends on each project, you can adjust the **% Allocations** field.
- Shift investment allocation periods

Roles can be allocated to a project or an investment with hard, soft, and mixed booking status. You often see both planned and hard allocations. Any unfilled roles represent all roles and their allocation which is based on the filtering criteria for the booking status.

### Find and Book a Labor Resource

After you create roles and resources, use **Resource Finder** to book resources to projects. Select available labor resources and book them to the right investments. A secondary use is to capture a snapshot or inventory of your labor resources that share certain attributes.

You can use the Resource Finder to identify labor resources by filter criteria such as:
- Employment status (employees or contractors)
- OBS
- Primary role
- Calendar availability
- Skills

For example, identify all employees with a specific certified skill in a specific technical role.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Finder**.
2. Click **Expand Filter**.
3. Click **Show All** or **Clear** to remove any existing filter criteria.
4. Define your filter criteria including any of the following fields:
- **OBS Unit:** Specifies the OBS for the labor resources.
- **OBS Unit - Filter Mode:** Specifies a limited search on the exact OBS unit or a wider search that includes OBS unit descendants or ancestors.
- **Role:** Searches by role.
- **Filter Mode:** Specifies a limited search on the exact role or a wider search that includes role descendants or ancestors.
- **Availability:** Specifies the required availability of matching resources by percent, hours, days, or FTE in one or more date ranges.
- **Availability Threshold:** Indicates the minimum required availability. For example, resources with less than 10 percent availability can be over-allocated or over-booked. Resources that match a 90 percent availability threshold are more readily available for a new project or task assignment.
- **Include Soft-booked Resources:** To include available resources that are already soft-booked for one or more investments, select this field. When you clear the check box, the filter excludes soft-booked resources from appearing in the results.
- **Skills:** Identifies the resources that match the assigned skills from the skills hierarchy.
- **Skills Threshold:** Specifies the percentage of skills that resources must possess. The Resource Finder excludes resources whose skill-match falls below the percentage specified.
- **Power Filter:** This link opens a page where you can build a custom filter. Create custom searches that are tailored to meet the more specific recruiting requirements.
5. Click **Filter**.
6. Select one or more resources and click **Book**.
7. Select an investment and click **Book**.

### Change the Default Resource Allocation

You can create planned and hard allocation curves for the time a resource works on an investment. These curves indicate any deviations from the **Default % Allocation** field. The Planned Allocation curve represents the default or total allocation amount that the investment manager is requesting. The Hard Allocation curve represents the allocation amount that the resource manager is able to commit.

For example, you have a resource with default allocation set at 100 percent. You booked this resource to work on your project from August 10 through November 10. The resource is also scheduled to work on another project 50 percent of the time through September 1. In addition, the resource plans to be on leave from September 15-22. In this case, you create two allocation curves for the resource: one that indicates a deviation to 50 percent from Aug 01 through Sep 1, and another that indicates a deviation to 0 percent from Sep 15-22.

When editing the default allocation for a resource, gaps can appear between allocation segments. The gaps are automatically filled by creating allocation segments.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Open the resource and click **Allocations**.
3. Click the **Properties** icon on the **Summary** or **Detail** page for the investment for which you want to edit resource allocation.
- **Summary:** The allocation information for a resource that is allocated to an investment. View and edit booking status and allocation information for each investment to which the resource or role is allocated.
- **Detail:** The allocation information for a role that is allocated to an investment. View and edit the allocation information for each investment by week in a histogram format.
4. Change the following field in the **General** section:
- **Default % Allocation:** Defines the percentage of time you want to allocate the resource to a project. You can enter zero (0). Any changes here appear in the **Allocation** and **Allocation %** columns on the resource/role allocations page or project team staff page.
5. Create one or more rows for deviations in the **Planned Allocation** and **Hard Allocation** sections.
6. To create a planned or hard allocation curve, complete the **Planned Allocation** and **Hard Allocation** sections.
7. In the **% Allocation** field, enter the expected percentage of time when the resources work (as tentative or committed) on the investment. You can enter zero (0) as the allocation percentage.
8. Save your changes.

When you change allocations from resource management pages, you only change investment-level information, specifically, the resource or role allocations to the investment. These dates can differ from the ones to which the resource or role has been assigned to project tasks. The changes that you make from the resource/role allocation pages appear on the team staff page for the investment.

> [!NOTE]
> **Best Practice:** Do not change the investment allocations for a resource or role from resource management pages. Only the manager of the investment to which the resource or role has been assigned can modify allocations. If you are the manager of the investment, change allocations from the team staff page of the investment. As a resource manager, if you edit allocations for a resource from the resource planning pages, communicate the changes to the manager of the investment. The manager can then adjust task assignments and the schedule for the investment, if necessary.
> If a project is locked and in tentative mode, you cannot change allocations for existing team members. To allow you to edit the team while the project is locked, the project manager can change the following default project management setting: **Allow Edit of Allocations when Investment is Locked**.

### Add Investments to Resource Workloads

You can add investments to the workload for a resource from both of the resource or role allocations pages. By default, the resources are allocated to work on the new project 100 percent of the time during the project. Sometimes, the default allocation overbooks the resource. When overbooked, reallocate the time for the resource or replace the resource with another resource.

> [!NOTE]
> Only the resources that are identified as staff members can perform a task for a project and can record their time on tasks. Project participants can use the collaboration tools of a project but are not always identified as staff members.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Open the resource and click **Allocations**.
3. Click **Add**.
4. Select the investment for the resource and click **Add**. The investment is added to the workload for the resource.

### Edit Investment Allocations

You can edit weekly allocations for a resource by investment. The allocations detail page displays resource and role allocations by investment and week in a histogram. Investments appear in rows and allocations appear in columns by week.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Open the resource and click **Allocations**, **Detail**.
3. Click in the field containing the data and edit the data. For example, change the weekly allocations, and click **Save**.
4. Confirm the changes in the **Aggregation** section at the bottom of the page.
- The red bar indicates the months in which the role is overbooked.
- The yellow bar indicates that no over allocations appear in that period.
5. Save your changes.

### Shift a Resource Allocation

To shift or scale all or a portion of the resource allocations in one project, use the **Shift Allocation** option. This option is useful when you want to extend project allocations beyond the allowable time-scaled view, which extends only for six months by default. You can move resource allocations both back and forward in time.

For example, suppose that an allocation period starts on May 1. The period continues at its default rate of 100 percent through the end of the month. The period then extends through June at the reduced allocation of 50 percent. You shift the allocation to start on June 1 and extend through July 2 (for 31 calendar days) at 100 percent. The period goes through August 2 at 50 percent. You can also shift allocations for time spans that contain no segments.

You cannot change the project schedule dates. Use these dates as guidelines on how far you can shift work back or forward. You cannot shift work before the start date, and you cannot shift work past the finish date.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Open the resource and click **Allocations**.
3. Select the investment whose allocations you want to shift.
4. Select **Shift Allocation** from the **Actions** menu.
5. Change the following fields as applicable. Data shifts according to the information you enter in these fields.
- **Start and Finish Dates:** Defines the start and finish dates of the project unless they have been changed. These dates create the period that can shift.
- **Shift to Date:** Defines the beginning date for the data being shifted. If you leave the field blank, no shifts occur.
- **Shift Cut-off Date:** Defines the last date for shifting allocations. Allocations cannot shift beyond the last date.
- **Scale Allocation % By:** Defines the percentage change in the allocation that is required for the shift. If you leave the field empty, no scaling occurs.
6. Save your changes.

### Remove Investments from Resource Workloads

You can remove projects and investments from the workload of a resource at any time. If a project is locked, you cannot remove that project from the workload of the resource.

> [!NOTE]
> When you staff a resource as a project participant, go to the team participants page to remove the resource from participant status.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Open the resource and click **Allocations**.
3. Select an investment and click **Remove**. The confirmation page appears.
4. Click **Yes** to remove the investment from the list of investments for the resource.

### Replace a Role with a Named Resource

You can replace a role in a project with a specific named resource. Replace a role with a resource when the team is ready to start the project and report approved actuals.

Follow these steps:

1. Click **Home**, and from **Portfolio Management**, select **Projects**.
2. Open a project.
3. Click the **Team** tab.
4. In a row for the soft-booked role that you want to replace, click **Resource Finder**. The Find Resources page filters on the selected role to display matching resources.
5. Examine the **Availability Match** column and determine the best resource. You can select any resource, even one that is already assigned to the project. Select one or more checkboxes and then click **Replace**. The Booking Confirmation page shows the Remaining Availability of each resource. A negative value indicates that the resource is overallocated.
6. To book the resource as a replacement for the role, click **Yes**. Contact the resource manager and discuss the booking status of the resource on other investments.
7. (Optional) If the resource is potentially over-allocated, click **Overallocate** or **Remaining Only**.
8. To transfer the ETC (assignments) from the generic role to the named resource:
   a. Click the **Task** tab and select **Assignments**.
   b. Filter for, and select, all the tasks that are assigned to the generic role.
   c. Reassign them to the named resource.

> [!NOTE]
> The **Include Soft-booked Resources** check box is not selected by default. When selected, the number of matching resources typically expands; however, the Availability Match scores decline. To evaluate the more accurate hard booking status, do not include soft-booked resources.
> If already assigned to the project team, the named resource takes on the full allocation of the generic role but not all the assignments. If you replace a role with a resource that is not already on the team, the allocation and assignments transfer to the new resource.

### Replace Resources on Investments

You can generate a list of resources with the same role and availability during the time of the investment. You can also use this procedure for replacing a resource on a project. The following rules apply:
- Replacing a resource does not transfer the actuals, pending actuals, and baseline of the original to the new staff member. Only the remaining ETC is transferred to the new staff member.
- The original staff member must complete any outstanding time entries so that the actual data is posted before the replacement occurs.
- The project role of the original staff member is transferred to the new staff member (unless you are replacing a role with a different role).
- If a project is locked, you cannot replace existing team members resulting in deleting a team member and transferring assignments. The **Replace** button appears disabled in this case.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Open the resource and click **Allocations**.
3. To replace a resource, click the **Resource Finder** icon next to the investment.
4. To narrow the resource list, enter filter values.
5. To view all resources, click **Show All**.
6. Examine the following fields:
- **Availability:** Identifies the project period and the number of hours the resource you are replacing was allocated to the project. Both the dates and the hours that are allocated are transferred to the new replacement.
- **Availability Match:** Displays a weighted average that factors in the work period and the availability of each resource. If you do not add any skill specifications to your search criteria, the Total Match column duplicates the Availability Match number.
7. Note: The following message can appear at the top of the page: `Match scores can be inaccurate if availability dates do not fall into the following range: ddmmyy - ddmmyy`. This message indicates a discrepancy between the date range in the message and the dates in the **Availability** field.
8. To replace the previous resource, select one or more resources and click **Replace**.
9. Confirm the selection by clicking **Yes**. The allocations page appears.
10. If the available hours for a resource are less than the total number of hours, the remaining availability confirmation page appears. Select one of the following values:
- **Over-allocate** to over-allocate the resource.
- **Remaining Only** to book the resource for the amount that is listed in the Remaining Availability column.

### Deactivate a Resource or Role Profile

When a resource or role is no longer needed, you can deactivate it. Other users cannot assign deactivated resources or roles to tasks. The inactive resource or role continues to appear in the resource list unless you filter it out.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Open the resource or role.
3. Clear the **Active** check box, and click **Save**.

---

## Resource Availability Examples

Use this topic to understand the relationship between a resource calendar with shift adjustments, a base calendar, and the **Availability** field. These related values influence resource availability calculations, planning graphs, and the Missing Time report. Resource availability is based on the calendar for the resource. If a resource has a calendar with shifts, their availability in resource planning portlets and reports reflects those shifts.

### Example: Calendars with Irregular Shifts

As a resource manager, you want to implement the following work shifts:

**Normal hours from Jan 1 to Jun 30 and from Sep 1 to Dec 31:**
- Monday to Thursday: 08:30-14:00 and 15:30-18:30
- Friday: 08:30-14:30

**Summer hours from Jul 1 to Aug 31:**
- Monday to Friday: 08:00-14:30

Follow these steps:

1. Click **Administration**. Under **Project Management**, click **Base Calendars**.
2. Create a base calendar for the normal workdays with two shifts and the unique short Friday-only shift.
3. Select Monday, Tuesday, Wednesday, and Thursday and set the two shifts in one calendar.
4. Select Friday and set the shift that begins at 08:30 in the same calendar.
5. Apply this arrangement for the following months: January to June, and September to December.
6. Create a base calendar for the two summer months.
7. For the months of July and August, set the new summer shift that begins at 08:00 on all workdays.
8. Navigate to the resource profile for each resource and assign a calendar. You see the shifts on their calendar. The **Resource Availability** field varies from one resource to another even though they are assigned to the same calendar:
- Each resource works 8.5 hours per day for 4 days, and 6 hours on Friday. Their availability is 40 hours per week or 160 hours each month.
- In the two summer months, each resource works 6.5 hours per day for five days. Their availability is 32.5 hours per week or 130 hours each month.
- You can have other resources who are assigned to a different calendar - for example, 8 hours per day and 5 days per week. Their availability is 40 hours per week or 160 hours each month.
9. You can adjust an assigned calendar at the resource level. For example, add one or more vacation days on the resource calendar. A resource on vacation for 2 days shows a decrease in availability.
10. Portlets, pages, and reports use the availability time slice for availability amounts. Availability is always derived from the resource calendar. The original value that you enter in the **Availability** field on the resource profile is not used in availability calculations.
11. Click the **Home** menu. Under **Resource Management**, click **Resources**.
12. Open a resource.
13. To reflect their current availability, set the **Availability** field for each individual resource.

> [!NOTE]
> Instead of hours, you can also use FTEs to measure resource availability. To calculate the FTE availability, the application divides the availability of the resource by the standard calendar.
> The availability values in portlets and reports are also calculated in the same manner. When a resource calendar includes irregular shifts, the hours that appear in the **Availability** field for the resources equal the longest work day in the calendar. You can also manually adjust the Availability value.

### Example: Monthly Resource Availability

This example demonstrates monthly resource availability calculations.

1. Create a base calendar for December with 5-hour shifts per day. December has 22 days. The total hours are `(5 x 22) = 110`.
2. Assign this base calendar to a resource. Daily resource availability is 5.
3. Change the **Availability** field value from 5 to 8. The calendar still displays 5-hour shifts. Portlets show December availability as `(8 x 22) = 176` hours.
4. Change the resource calendar to reflect 4-hour shifts for December for this resource. The availability of the resource is greater than 4 because you previously indicated a value of 8.
5. The **Availability** field shows 8, the base calendar shows 5, and the resource calendar shows 4. The calculated availability in hours for the resource for December is as follows: `(4/5) x 8 x 22 = 140.8`

### Example: Resource Allocations

You can book a resource as a staff member for an investment. The application generates an allocation amount for each resource. You can calculate resource allocation using the following equation:

`Resource allocation amount = (Availability) x (resource workdays in the investment time period)`

The number of working days for an individual resource during an investment is based on the resource calendar. All days that a resource is available during an investment time period are counted, including the start and finish dates.

For example, the following list shows the weekly availability of some resources during an investment time period:
- Resource A works four hours a day for five days a week
- Resource B works eight hours a day for five days a week
- Resource C works eight hours a day for three days a week

If all the resources are allocated at 100 percent to the investment for three weeks, their allocation is as follows:
- Resource A = 60 hours
- Resource B = 120 hours
- Resource C = 72 hours

If you attempt to over-allocate a resource by staffing the resource to extra investments, you are warned. An over-allocated resource cannot perform work efficiently or cannot complete work by the established end date.

In these examples, John, Bill, and Sue are the direct reports of Mary:
- John is hard-booked for 20 hours next week to project A, and soft-booked 10 hours to project B. The total demand for John next week is 30 hours.
- Bill is hard-booked for 40 hours next week to project A, and is mixed-booked for 20 hours to project B. The total demand for Bill next week is 60 hours.
- Sue is not allocated to any project. The demand for Sue is 0 hours.
- A role is designated and soft-booked for 35 hours next week to project A. In the role properties for that project, Mary is designated as the Staff OBS unit. The demand for that role on the team is 35 hours next week.
- The total allocation or demand next week for the resources is 125 hours: 60 hours hard-booked staff, 30 hours soft-booked staff, and 35 hours soft-booked unfilled roles.

---

## Fill Resource Requisitions

Assign team members to projects and other investments using one of two methods: **direct staffing** or **resource requisitions**.

With **direct staffing**, a project manager directly assigns team members to investments. Direct staffing works well when project managers tend to control their own resources. They have booking rights to the resources they need, and they can directly staff their projects.

Review of project staffing can be accomplished in a couple of ways. A resource manager can look for overbookings or capacity and demand imbalances by studying the Resource Planning pages that highlight staffing issues across all resources and projects. Resource managers can be given hard-booking rights. Even though project managers can plan (soft-book) their staffing, resource managers can retain the right to commit (hard-book) the individual team members.

> [!TIP]
> This method can also involve a multi-step staffing process. The project manager initially assigns roles and establishes other staffing requirements and then sets the request status to open. A resource manager fills the request either by hard-booking (committing) the resource, or by replacing the requested role with a specific resource.

With **requisitions**, a project manager requests resources and a resource manager assigns them to investments. As a project manager, you can create simple or detailed requisitions that request resources for multiple time periods. In addition to the functionality associated with direct staffing, requisitions also provide the following functionality:
- Routing and notification
- A review and approval process
- A history of staffing requests and allocations

### Resource Requisitions

A requisition is a request to staff a specific project with labor resources. The chief benefit of requisitions is planning. If you bypass a requisition and you assign a resource directly to a project, you could jeopardize your own project. Requisition recipients tend to be resource managers who are knowledgeable about the workloads and skills of their resources.

You can use resource requisitioning to:
- Create tailored resource requisitions that suit the needs of specific projects
- Perform an on-the-spot search for resources that fit requisition requirements
- Discuss a requisition with its recipients

Requisitions are project-specific, which means that you cannot create a requisition that staffs multiple projects at the same time. Each requisition contains a request for only one staffing requirement and can serve only one project.

### Requisition Routing and Notification

When a requisition is created, it is routed to the appropriate booking manager based on the following logic:
- If a default booking manager is defined for the resource or role, the requisition is routed to that booking manager. If no default booking manager is defined, then the staffing requirement OBS is combined with the staffing requirement role to determine the booking manager.
- If a booking manager mapping does not exist for a specific role and OBS, then the application looks up the OBS role chain until a manager is found. Role chain refers to roles that have parent roles. If a role cannot be associated with an OBS all the way up the role and OBS chains, the requisition is not routed.
- Both the project manager (requisition creator) and booking manager (resource manager) are notified of status changes in requisitions. If no booking manager is selected, no notification is sent.
- Users with appropriate access rights can view the requisition in their list by filtering on unassigned requisitions.
- The **Booking Manager** field can be changed at any time to reflect another resource manager. The facility to change allows resource managers to route the requisitions again.
- The **Requested By** field value on the Requisition Properties page defaults to the requisition creator.
- Only the users in the **Requested By** and **Booking Manager** fields receive notifications that pertain to open requisitions. Requested and booked resources are not notified.

The following table shows the parties that are notified when the requisition status changes:

| Requisition Status Change | Requested By | Booking Manager |
|---|---|---|
| Created | - | - |
| From New to Open | Notified | Notified |
| From Open to New | Notified | Notified |
| From Open to Propose | Notified | Notified |
| From Proposed to Booked | Notified | - |
| From Open to Book (if requisition approval is not required) | Notified | - |
| Booking Manager changes | - | New and old booking managers are notified |
| Requested By changes | Notified | - |
| Closed | Notified | - |
| Deleted | Notified | - |

> [!NOTE]
> - As a user, you can determine your requisition notification format, message layout, and delivery method from the **Notifications** page under **Account Settings**.
> - As an administrator, you can set up an automated process to identify the different stages in the lifecycle of a requisition. You can also automatically issue notifications at every stage.

### Find Resources to Fill Role Requests

As a resource manager, when you receive a role requisition, find and propose at least one resource that fits the role that is described in the staffing requirement. If you propose multiple resources, allocate the resources appropriately so the requisition amount is divided among the resources. For example, if one resource is required for a week, propose two resources as follows:
- Resource 1 from Monday to Wednesday
- Resource 2 from Thursday to Friday

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Requisitions**.
2. Click the name of the resource requisition and then click **Resources**, or click the **Person with List** icon next to the requisition.
3. Click **Add**. The information that appears on the Find Resources page is based on the requirements that were specified in the staffing request. You can modify the search criteria to find more eligible resources.
4. Select a resource and click **Add** to place them on the list of proposed resources. If a requisition has a single resource, the resource is selected as the proposed candidate in the shortlist.
5. Select the desired candidate and click **Add**. The Requisition Resources page appears with the **Resources** page active.
6. If multiple resources are added to the requisition, expand each resource to edit your calculated allocation amount.
7. Click **Propose**. The Resource Requisitions page appears and refreshes the status of the requisition to **Proposed**.

### Review Resource Requisitions

As a resource manager, you can view, propose, and book requisitions.

> [!NOTE]
> You can also receive notifications for each requisition that is assigned to you. Email notifications and notifications on your home page include a link to the Requisition Properties page. You can also use the Project Requisitions page to view requisitions.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Requisitions**.
2. Use the **Requisition Filter** section at the top of the page to locate one or more requisitions. You can search by requisition name, ID, associated project, status, or priority. Enter your search criteria and click **Filter**.
3. Click the requisition link to open the requisition and edit it. The page contains the following tabs:
- **Properties:** This page provides the details that the requisition requestor enters.
- **Resources:** Use this page to find and add resources to your requisitions.
- **Discussions:** Use this page to initiate and participate in the requisition discussions.
- **Processes:** Use this page to create, run, and track requisition processes.
- **Audit Trail:** Use this page to track changes on the requisition object (if requisition fields are enabled for auditing). For details, contact your administrator.
4. Depending on your access rights, you can change any of the fields available on any of the tabs.
5. Click **Save and Return**.

### Propose Allocations to Fill a Resource Requisition

Requests for named resources include a proposed resource making it easier for you to respond. To address requests for named resources, open a requisition and address it individually. Or, select multiple requisitions and propose them back to the project manager.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Requisitions**.
2. Click the **Person with List** icon next to a requisition.
3. Click **Propose** to propose the resource back to the project manager for the requested time and allocation amount. The Resource Requisitions page appears and refreshes the status of the requisition to **Proposed**.
4. To address multiple named requests:
   a. Select the list of named resources and click **Propose** to propose the allocations to the project manager.
   b. Edit the allocation amounts for the requested named resources directly in the grid.
   c. Select the list of named resources and click **Propose** again. The Resource Requisitions page appears and refreshes the status of the requisition to **Proposed**.
5. Confirm the changes in the resource histogram that displays how much the project manager requests on a weekly basis:
- The yellow part of the histogram represents the amount of hours that the resource is needed on this particular project.
- The green part represents the time needed on other projects.
- The red part shows where the resource is over-allocated.
6. If the **Requisition Approval Required** option for the project is turned off (no project manager approval required):
- The **Book** button appears on the page instead of the **Propose** button. To hard-book the resource onto the project automatically without project manager approval, click **Book**.
- If you do not have the **Project - Edit** access right, the **Propose** button appears on the page instead of the **Book** button. Click **Propose** to submit the booking for approval.

### Reduce Resource Allocations

After you open a requisition, if you decide that a resource is over-allocated, you can reduce their allocation.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Requisitions**.
2. Edit the fields on the page.
3. To avoid over-allocation, reduce the allocation of the resource.
4. Save the new allocation amount. The yellow shading represents the new booking amount to the project. Green represents the bookings to other projects. Red indicates over-allocation and no longer appears.

You can also use the following steps from an open resource:

1. Click the **Properties** icon to the left of the resource name.
2. Edit existing allocation segments, and add any new ones.
3. Click **Save and Return**.

### Participate in Requisition Discussions

You can exchange messages about requisitions with other stakeholders.
- A discussion thread begins with the first reply under the original message.
- Subsequent messages appear in descending order by date and time.
- Only users with access to the requisition can participate in discussions.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Requisitions**.
2. Open a requisition.
3. Click **Discussions**.
4. Click the message icon or click **Expand**:
   a. To start a discussion, click **New**.
   b. To reply to an existing message, click the subject line of the message.
5. Complete the following fields:
- **Subject:** Defines the subject of the message.
- **Message Text:** Defines the text of the message.
- **Attachments:** Click the **Browse** icon to attach a document.
- **Notify Participants:** Specifies if you want the discussion recipients to receive an email notification when a new message arrives for their review. Default: Selected.
6. Click **Save and Return** to send the message.
7. (Optional) To collapse all open threads, click **Discussions**.

> [!NOTE]
> Configure your notification and email settings from the **Account Settings: Notifications** page.

### Types of Requisition Status

The **Status** field of a requisition is located on the Requisition Properties page. The requisition owner (also named a requestor) is the only person who can change its initial status from **New** to something else (typically **Open**). Other recipients can then change the status.
- **New:** All requisitions begin with this status until the owner submits the requisition or manually changes the status. When you are ready for a booking manager to fill the request, change the status to **Open**.
- **Open:** This status indicates that the requisition is active and requires attention and fulfillment. The requestor who creates the requisition is the one who changes the status to Open. The booking manager is notified.
- **Proposed:** The booking manager proposes bookings to fulfill the requisition. The requestor is notified. The requestor reviews the proposed resources. If the requestor rejects the resources that the booking manager has identified, the requisition status changes back to **Open**. Note: The status **Proposed** is available if you have the **Project - Attach Requisition Entry Resources** access right, and the **Requisition Approval Required** setting is selected for the project.
- **Booked:** This status indicates that a project manager or resource manager has accepted (booked) the resource on the requisition. The requisition status automatically changes to "Booked" and the requester and booking manager are both notified. "Booked" status is available: if you have the **Project - Edit** access right and requisition approval is required; or if you have the **Project - Attach Requisition Resources** access right and requisition approval is not required.
- **Closed:** This status indicates that no more work is required. Only the requestor can close a requisition. If the booking manager declines an open requisition, the requisition status automatically changes to **Closed**.

### Set a Default Booking Manager for Resources

As a manager in charge of resources, you can define a default booking manager for each resource and role in the system. Hence, requisitions are routed automatically to the appropriate resource manager without any intervention from the project manager.

Defining the booking manager is optional. If defined, the **Booking Manager** field of a requisition defaults to this resource manager and appears on the resource properties page. If you do not define this field, the project manager can define it at the requisition level or leave it blank. If the field is left blank, the access rights of the available resource manager decide the allocation to this requisition.

For roles, a mapping between roles and an OBS structure can be used to define the default booking manager.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resources**.
2. Click a resource name to open the resource properties.
3. Specify the booking manager for the resource in the **General** section.
4. Save your changes.

### Decline an Open Resource Requisition

You can decline a requisition for several reasons. For example, the selection of resources was constrained or their availability was limited.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Requisitions**.
2. Click the link for that requisition.
3. Set the status to **Closed**, and click **Save and Return**.
4. (Optional) Post a note on the **Discussions** page explaining your reason for declining the requisition.

### Unbook a Requisition

Administrators, project managers, and resource managers can work together to unbook resource requisitions.
- As a **project manager**, sometimes you reduce the scope of a project or a resource is unavailable for a particular period. You can unbook hard-booked resources to use their unbooked time on another project. Unbooking a resource removes any hard allocation for the resource in the future.
- As a **resource manager**, work with the project manager to confirm resource booking and unbooking. Remind project managers that they cannot unbook a role or a soft-booked staffing requirement.
- As an **administrator**, you configure the application to support your users. Managers can unbook only if you enable the **Allow Mixed Booking** setting. Mixed bookings support differences between planned and hard allocations. Unbooking a resource resets the hard allocation to match the planned allocation.

Follow these steps:

1. As an Administrator:
   a. Open the **Administration** menu and under **Project Management** select **Settings**.
   b. Select the **Allow Mixed Booking** check box and click **Save**.
2. As a Project Manager:
   a. Open **Home** and from **Portfolio Management**, click **Projects**.
   b. Open a project and click the **Team** tab.
   c. Identify the specific hard allocation dates for the team member that you want to unbook. Adjust the Planned Allocation date segments to 0% (or a differential amount that removes the hard allocation).
   d. Save your changes. The booking status for the team member changes to mixed.
   e. Select the check box for one or more team members with a mixed booking status.
   f. Click the **Actions** menu and select **Create Requisitions**.
   g. Select **Unbook Resources** as a Requisition Type. Select a booking manager for each resource. The default booking manager automatically appears.
   h. Click **Create and Open** to create an Open requisition. You can also click **Create** to create requisitions with a **New** status.
   i. Click the **Team** tab menu and select **Requisitions**. The requisition is created on the Team Requisitions page of the project. If a requisition contains a request to unbook a specific resource, you see a checkmark in the **Unbook** column.
3. As a Resource Manager:
   a. Open **Home**, and from **Resource Management**, click **Resource Requisitions**. If a requisition contains a request to unbook a specific resource, you see a check mark in the **Unbook** column.
   b. Select the link for the requisition that you want to unbook. The Requisition Properties page displays the following message: `This requisition is for unbooking purposes only.`
   c. Click **Unbook**. The application removes or updates all future hard allocation segments to match the planned allocation segments. You can only unbook date ranges in the future. You cannot unbook dates in the past.
   d. Depending on the amount being unbooked, the Booking Status for the team member might show **Mixed**. The Project Manager can manually update the Booking Status to **Hard** or, if they follow a formal process, they can use the **Commit Hard Allocation** action.
4. (Optional) A requisition to replace resources selects both the **Unbook** and **Replace** check boxes on the Requisition Properties page. This type of requisition allows you to select a replacement resource for the person you are unbooking.
   a. Repeat the steps for a project manager listed in Step 2; however, this time select **Replace Resources** as a Requisition Type. On this type of requisition, the **Resources** tab appears.
   b. Click the **Resources** tab.
   c. Click **Add**.
   d. Apply filter criteria to narrow your search for a replacement resource.
   e. Add a new resource to best match the availability of the replaced resource.
   f. If you have the required access rights, the **Replace** button appears. Click **Replace** to replace the unbooked resource with the new resource.
   g. If you do not have the required access rights, the project manager can review the proposed replacement and can book that resource.
5. The software applies the following rules when you unbook resources on requisitions:
   a. The planned allocation curve represents the total allocation amount that the project manager requests for the resource. The hard allocation curve represents the allocation amount that the resource manager commits. The booking status for a resource changes if the allocation amounts differ between the planned and hard allocation segments.
   b. When you unbook resources, the application reduces the amount of committed or hard allocation that exceeds the planned allocation.
   c. When you select the **Replace Resources** requisition type, the Unbook feature on the requisition is automatically checked.
   d. The unbook amount defaults to the hard allocation of the team member minus the total allocation. If the total allocation equals or exceeds the hard allocation, the unbook amount is zero.
   e. The unbook amount defaults to unbookings from today forward. You can adjust the date and the requisition amount to only partially unbook.
   f. For a straight unbook (replace option is off) the application does not display a Resource tab. Instead of a propose option, you can unbook or decline. When you unbook, the team member allocation is decremented without project manager approval. When you decline, the team member allocation is not decremented. In both cases, notification is sent to the project manager and the requisition status is set to booked.
   g. For a replacement unbook, the Resource tab appears. You are assigning another resource to replace the original resource and take on the allocation. The requested amount is equal to the total allocation of the existing team members that you are unbooking. The team member being unbooked does not appear in the resource list.

> [!TIP]
> If you have booking rights, you can zero out the team member hard allocation without submitting a requisition.

### Modify and Resubmit Proposals

When you receive a notification that the project manager has rejected the resources on a requisition, you can modify and resubmit it.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Requisitions**.
2. Click the requisition link.
3. Click **Discussions** to see the reason behind the rejection.
4. Select and propose the resource that best matches the request. Delete the other resources. The Resource Requisitions page appears and refreshes the status of the requisition to **Proposed**.

### Manage an Automated Requisition Process

The trigger for a requisition notification is any user-initiated change in the status of the requisition. If the status of new requisitions is not changed to open, the recipients are not aware and cannot fulfill the new requisition. You can avoid notification uncertainty by configuring an automated notification process that identifies different stages in a requisition lifecycle.

> [!NOTE]
> When you create a process in a requisition, it is available only for that requisition. When an administrator creates a global requisition process, the process is available for use by all requisitions. Global access rights are required to create a global process.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Requisitions**.
2. Select a requisition and click the **Processes** tab. The processes page for the requisition appears. The **Processes** tab shows two menu choices: **Available** and **Initiated**.
3. To view running process instances, click **Initiated** (the default). Process instances that are scheduled to run or running appear. You can track their progress.
4. To view the local processes that apply only to this requisition and any global processes for any requisition, click **Available**.
   a. To define a new process, click **New**.
   b. Save your changes. The new process appears in the list of available requisition processes.
5. To start a process manually, select the check box and then click **Start**.
6. To set the object for the requisition process, click **Add Linked Object**.

### Audit Requisitions

The Requisition Audit Trail page allows you to see when certain issue fields were changed. You can also view who made the changes. In this way, you can track changes by resource and date. Your administrator determines the requisition fields that are available to you on the page.

Follow these steps:

1. Open **Home**, and from **Resource Management**, click **Resource Requisitions**.
2. Click a requisition and click **Audit**.
3. Filter the list. The audit fields for the requisition appear.

---

## Manage Resource Capacity Planning Scenarios

You can use scenarios to influence resource capacity planning decisions. Organizations often build their Resource OBS hierarchy to reflect real-world reporting relationships and org charts. Each node on the Resource OBS represents a department manager.

For example, a senior manager has a team of three direct report managers who work 40 hours each week. The capacity of the direct report managers for any given week is 120 hours. The senior manager also has 15 indirect employees who report to the three direct report managers. The total capacity of the organizational unit includes the units for each of the managers. The total capacity is the sum of the capacities of the direct reports (120) plus the indirect reports (600).

As a resource manager, you share a reporting structure that is similar to the one for the senior manager. You also share the following goals:
- View a complete picture of the capacity, demand, remaining bandwidth, and the actual hours
- Filter on a specific Resource OBS
- Understand the total investment demand for resources in your organizational unit and descendant units
- Examine allocated staff and unfilled roles
- Make informed decisions about team workload (allocation demand), capacity, booking status, and trends for posting actual work

The Capacity Planning Overview portlet provides a complete view of the capacity, demand, remaining bandwidth, and the actual hours. The capacity planning overview appears in an expandable hierarchy with a time-varying chart of capacity and demand metrics. To view more details, the portlet allows expansion of the following subportlets:
- **Staff Allocation:** Resources who are assigned to projects
- **Unfilled Roles:** Staffing requirements that are not yet filled
- **Investment Demand:** Staffing allocations by investment

### Configure Settings for Resource Planning

Before you begin managing resource capacity, work with your administrator to configure the following items.

Follow these steps:

1. Assign access rights to the users who manage capacity planning:
- **Resource - View - All**
- **Page - View**
- **Portlet - View**

   > [!NOTE]
   > To assign the access rights using a group, assign the user to one of the following groups: **Resource Manager** or **Resource Planner**.

2. Assign access rights to individual investment types:
- **Application - View - All**
- **Asset - View - All**
- **Other Work - View - All**
- **Products - View - All**
- **Program - View - All**
- **Project - View - All**
3. Define one or more Resource OBS levels.
4. Associate resources or roles with the appropriate OBS units on their Resource Properties pages.
5. Assign a primary role to all resources.
6. To staff open team roles:
   a. Open the Team Detail page and click the **Properties** icon.
   b. Indicate which Resource OBS unit to use to fill a role in the **Staff OBS** field. This setting appears in the Investment Demand metrics for the selected Staff OBS unit.
7. To display the filtered information in portlets, run the **Datamart Extraction** job. Verify that this job finishes successfully.

### View High-Level Capacity Planning Information

Use the Capacity Planning Overview page to see a high-level summary of resource capacity, unfilled roles, and resource demand. You can filter by the selected OBS level.

Follow these steps:

1. Click **Home**, **Resource Management**, **Capacity Overview**.
2. Select an OBS unit in the **Resource OBS** field.
3. Select other filter criteria to narrow the information about resources and investments that you want to view. Save your filter criteria.
4. Select an option for the **OBS - Filter Mode** field:
   a. To view the resource allocation for an individual OBS unit, select **Unit only**.
   b. To include any parent or child units in a hierarchy, select **Unit and Ancestors** or **Unit and Descendants**.
5. Click **Filter**.
6. To display capacity and demand metrics, click **Options** and then select **Configure**. Adjust the columns. When you add the following columns, totals appear for each OBS unit:
- **Capacity:** Includes Resources who are assigned to the Resource OBS Unit on their Resource Properties record.
- **Allocation:** Demand allocation as defined on the Team Detail - Properties page in the **Staff OBS Unit** field. For the allocation calculation, the staff OBS at the team level is considered first. If the staff OBS matches the filtering OBS, the named resource is included in the allocation calculation.
- **Hard-booked Staff:** Represents named resources with Hard booking status; does not include metrics for roles.
- **Soft-booked Staff:** Represents named resources with Soft or Mixed booking status; does not include metrics for roles. Mixed status is reported as soft-booked staff because it means that there is a change in the way the resource is planned to be allocated.
- **Unfilled Roles:** Represents roles which are allocated to investments irrespective of booking status.
- **Capacity - Allocation:** Calculated for each OBS Unit.
- **Actuals:** Represents posted work effort; not cost.
7. Click **Save**.

### View Detailed Capacity Planning Information

The Capacity Planning Overview portlet also provides detailed information about individual resources, unfilled roles, and demand for resources by investments. For example, select a Resource OBS and select **Unit and descendants** as the filter mode. You see the OBS unit and its descendants in the Capacity Planning Overview page.

Follow these steps:

1. Click **Home**, **Resource Management**, **Capacity Overview**.
2. Select an OBS unit in the **Resource OBS** field.
3. Select other filter criteria to narrow the information about resources and investments that you want to view. Save your filter criteria.
4. Click **Filter**.
5. Click one of the following three icons to adjust the Capacity Planning Overview portlet:
- **Resources icon:** The Staff Allocation list shows named resources where the Team Member Staff OBS matches the filter OBS. If the Staff OBS setting is blank, the Resource OBS Properties for the selected OBS unit are used for the filter criteria. The allocation data per resource is the aggregated allocation of the resource across all the investments against which this resource is allocated after any investment filtering criteria is applied.
- **Roles icon:** The Unfilled Roles list shows the unfilled roles where the Team Member Staff OBS matches to the filtering OBS. If the Staff OBS setting is blank, the Role OBS Properties for the selected OBS unit is used for the filter criteria.
- **Investment icon:** The Investment Demand list shows the investments which have named resources or roles as Team Staff Members where the Staff OBS setting matches the filter OBS. If the Staff OBS setting is blank, the resource OBS properties for the selected OBS unit are used for the filter criteria.

> [!NOTE]
> The filter criteria that are set for the Capacity Planning Overview page are passed down to the drill-down portlet to pre-filter the results. The drill-down portlets provide default values for their filter criteria based on the OBS Unit and Hierarchy Level from which you click to drill down.

### View Other Resource Planning Portlets

To view more detailed resource, investment, allocation, and booking information, use one or more of the resource management portlets.

Follow these steps:

1. Click **Home**, **Resource Management**, **Resource Planning**.
2. Click a tab on the Resource Planning page. From left to right, the tabs offer high-level organizational capacity and demand metrics down to detailed booking data.

| Tab | Portlets |
|---|---|
| **Capacity** | Role Capacity Histogram, Role Capacity |
| **Organizational Demand** | OBS Resource Aggregation, OBS Investment Aggregation |
| **Top Down Planning** | Top Down Planning by Investment |
| **Workloads** | Resource Workloads |
| **Allocations** | Weekly Detail, Allocation Discrepancy |
| **Unfilled Allocations** | Unfilled Requirements |
| **Bookings** | Booking Status |

For more information about each portlet, see Portlet Reference.

### Include Resources To-Be-Hired in Capacity Planning Portlets

Use the **To-Be-Hired** resource attribute to filter current and future capacity.

1. Click **Home** and under **Resource Management** select **Resources**.
2. Define one or more labor resources with a primary role and a hire date in the future.
3. Navigate to one of the following pages:
   a. Click **Home** and under **Resource Management** select **Resource Planning**.
   b. Click **Home** and under **Resource Management** select **Capacity Overview**. These portlets only include resources with assigned roles. If a resource has no primary role, it does not appear in these portlets.
4. Select a value in the **Include To-Be-Hired Resources** filter field:
   a. Select **No** to view the capacity and demand of your current employees.
   b. Select **Yes** to see how you can meet the demand with the new hires that you are considering in the future.

### View Allocation Discrepancies

You can view the team members with a discrepancy between their allocations and actuals, above or below a specified threshold. As a resource manager, you want to view the difference between allocated hours for a resource and the actual hours that the resource has logged against their assignments for investments.

1. Click **Home**, **Resource Management**, **Resource Planning**.
2. Click the **Allocations** tab.
3. In the **Allocation Discrepancy** portlet filter, specify the following values:
   a. Set the **Deviation Threshold** percentage value to determine which resources appear. By default, 20 percent is the deviation threshold.
   b. Set the **Duration** field to determine how many periods to use for the calculation of allocations and posted actuals.
   c. Set the **Time Scale** field to determine the length of time to use for the calculations.

> [!TIP]
> The default value is the previous period time scale. For example, you want to view the current week. You select one period for duration and Weekly for the time scale. The application shows the previous week and not the current week. To view the previous week and the current week, enter 2 periods for the time scale.

4. (Optional) Click **Configure** to add any additional optional fields as filters or columns. The following fields are examples:
- **Under Allocation:** The field is specific to both project and resource and compares allocation to availability. `Under Allocation = Resource Availability - Resource Aggregate Allocation`
- **Unused Allocation:** The field is specific to both the project and resource. `Unused Allocation = Total Planned Allocation - Total Usage` where `Total Usage = Actual + ETC`. Note: This field does not represent the difference between allocated and actual hours.
- **Remaining Allocation:** The field represents the difference between default allocation and the actual allocation. The remaining allocation is the planned allocation as of a specific date. The value for this field often equals the Unused Allocation.
- **Zero Allocation:** Add this Boolean check box to your filters on Team pages to exclude resources that have a zero (0) allocation. This field defaults to **No**. A **zero allocation = No** filter displays only the team members with non-zero allocations. This filter is useful because when a role is completely filled on a requisition, its allocation is zero. However, it is not removed from the team because it still holds the staffing requirements for the linked requisition.
- **Resource Availability:** The field derives its value from the availability on the resource page and the resource calendar. This field displays different values depending on the days in the month. The Start date is the project start or resource date of hire, whichever is older. The Finish date is the project finish or resource date of termination, whichever occurs first.
- **Other Allocation:** The field represents the resource total planned allocation outside of the current investment planned allocation. `Other Allocation = Resource Aggregate Allocation - Current investment allocation (planned allocation)`

### Capacity Planning Scenarios

To make informed decisions about resource demands and staffing, use capacity planning scenarios. Create a scenario and make temporary changes that assist you in decisions about which investments fit into your overall plans. You can modify team allocations, change investment start dates, and can switch investments between approved and unapproved status.

Applying planning scenarios is often known as performing **what-if analysis**. These scenarios answer questions such as, "What if we add 20 resources?" Based on your criteria, the capacity planning scenario changes the demand data that appears.

As a resource manager or project manager, use capacity planning scenarios to address the following sample situations:
- You have 20 direct reports and must frequently review the resource deployment status. You want to identify resources that are under-allocated or over-allocated for possible reallocation to new projects.
- You share resources with other departments and must have visibility into the demand on those resources. You receive requests for new projects that require staff. You want to see what effect approving new investments has on demand and capacity across resource OBS units.
- You want to see the effect on resource allocation and assignments when project dates are moved in or out.

> [!NOTE]
> As a best practice, use a capacity planning scenario for analysis before making actual changes.

#### Create Capacity Planning Scenarios

You can create capacity planning scenarios from any page that displays the Scenario toolbar. You can create, edit, delete, copy, or set a scenario as the current scenario or the current compare scenario. Share scenarios with other resources or keep them private. By default, scenarios are private.

Follow these steps:

1. Click **Home** and open an investment. For example, open a project, service, or idea.
2. Click the **Scenario** toolbar.
   a. Click **New**.
   b. Click the **Scenario** toolbar again, click **More**, and select **Edit**. The yellow toolbar indicates that you are in scenario mode and are acting on scenario data. Some data is read-only when you are working in scenario mode. Investment start date and team allocation are examples of data that you can modify in scenario mode.
3. Complete the fields on the properties page and click **Save**. Scenario mode activates when you create a scenario or select an existing scenario. The toolbar turns yellow to signify that you are viewing data with an applied scenario.
4. Click **Investments** and then click **Add**. You can add and then edit the investments, resources, or team information in the scenario. Later, you can compare these settings with the plan of record for a parent investment.
   a. (Optional) Click the **Edit Scenario Details** icon to modify the values for an investment in a scenario.
   b. (Optional) Click the **Financial Summary** icon to modify the financial data for a scenario.
5. Click **Save**.
6. Click **Access** to share the scenario with other users.
- Select **Full Access View** for a list of all resource and their rights to view or edit the scenario.
- Select **Resource** for resources with explicit rights to this scenario. You can also add resources and grant or remove their access to the scenario.
- Select **Group** for groups with explicit rights to the scenario. You can also add groups and grant or remove their access to the scenario.
7. Click **Save and Return**. Your new scenario appears in the Scenario toolbar.

> [!NOTE]
> Owners of capacity planning scenarios have implicit rights to edit their scenarios. Scenario owners can also grant instance access rights to their capacity planning scenarios. You can copy a scenario and can edit the new copy. You can edit a limited number of field values for scenario properties.

#### Copy Scenarios

You can also create a scenario by copying an existing one.

1. From any page that displays the scenario toolbar, click **More** and select **Manage Scenarios**.
2. Select the check box next to the scenario, click **More**, and select **Copy**. A private copy of the scenario is added to the list as `Copy of <Scenario Name>`.
3. Enter a unique name for the copied scenario, and click **Save**.

#### Compare Capacity Planning Scenarios

You can compare a scenario with the plan of record or with another scenario. Develop, refine, and adjust scenarios over time to examine changing business needs.

Follow these steps:

1. Set the active scenario and comparison scenario from any page that displays the scenario toolbar.
2. Select a scenario in the drop-down for **Scenario**.
3. Set the **Compare To** field to another scenario, no scenario, or the plan of record.
4. (Optional) To set these viewing options from the Manage Scenarios page:
   a. From any page that displays the scenario toolbar, click **More** and select **Manage Scenarios**.
   b. Select the check box next to the scenario, click **More**, and select **Set Current** or **Set Compare**.
5. Evaluate the anticipated changes in your scenarios. Scenario mode remains active as you navigate across resource planning and capacity planning portlets.
6. To see the scenario details as standalone entries without the red-lining:
   a. Select a scenario from the left **Scenario** drop-down.
   b. Select **None** from the **Compare To** scenario drop-down.
7. On pages and portlets that support scenarios, you can configure the page to show red-line comparisons of secondary values. You can include an additional attribute as a secondary comparison value. Scenario mode uses the secondary value to display the **Compare To** data. Select the attributes that have the words **(Compare To)** in their name.
8. To examine capacity, click **More** and select **Go to Capacity Planning**.
9. To add investments to a scenario, click **More** and select **Investments**.
10. To remove child investments from a scenario, click **More** and select **Edit**.
    a. Click the **Investments** tab.
    b. Select the check box for an investment and then click **Remove**. The parent investment reverts to displaying the plan of record values.
11. To reset a child investment without removing it, click **More** and select **Edit**.
    a. Click the **Investments** tab.
    b. Select an investment and then click **Reset**. The application deletes any changes in the scenario for that investment and refreshes it with data from the plan of record. The investment remains in the list of scenario investments.
12. You can ignore changes temporarily for an investment in a scenario and allow the plan of record values to appear. To hide that investment from the scenario, use the **Hidden** flag for the investment.

> [!NOTE]
> In scenario comparison mode, the Compare To data appears in red. Compare To data appears on any page that supports the red-lining of data.
> These configurations apply only when you are comparing a scenario with another scenario or with the plan of record. They do not apply when you select the plan of record or none.
> Null secondary values reveal data that was not present when the scenario was created. The data appears as a blank value with a red dashed line through the field. This convention is helpful for identifying changes that were made after the scenario was first created.

---

## Requirements and Release Planning

Comprehensive requirements, releases, and release plans help you manage the delivery of projects, services, products, programs, applications, and features. Classic PPM Requirements Planning provides a framework to define and track the deliverable requirements of your business. As a product owner or stakeholder, use requirements planning to achieve the following goals:
- Deliver intelligent requirements to team members
- Streamline the innovation process
- Capture ideas and business value in the form of requirements
- Associate the requirements with other investments and initiatives to flow into their release planning cycles
- Gather insight into how requirements fit into your overall business processes and goals

> [!NOTE]
> Verify that each user has the appropriate access rights to create, edit, view, or delete requirements, releases, and release plans.

### Requirements Planning Workflow

Requirements planning typically follows this workflow:

1. Create the requirements.
2. Create one or more releases.
3. Create one or more release plans.
4. Add the releases to the release plans.
5. Add the requirements to a release or a release plan.
6. Approve the release.

> [!NOTE]
> The documentation may not match what you see in the product user interface. This difference can occur because all access to features, menus, pages, buttons, and objects is determined by your access rights. Your organization can also configure the application pages, objects, lookups, partitions, processes, and user interface. Contact your administrator if you are not able to complete any of the steps in the documentation.

---

## Requirements

As a product manager or business analyst, you have visibility and control over your requirements from any source. Classic PPM can automatically categorize your requirements to deliver a complete view of customer needs. You can produce visual roadmaps, dashboards, and product plans. Define requirements and connect them to projects and their activities.

> [!TIP]
> Improve the effectiveness of the delivered product or service by connecting the project work of different teams to the requirements that your product owners, stakeholders, or customers define.

As projects move forward and requirements evolve, verify that changing requirements do not lose their original intent. You can apply versioning and track changes. To restore from previous versions, use the approval history. You can also restrict requirement changes to authorized editors and approvers.

Requirements typically follow this workflow:

1. Create the requirements and set their business priority.
2. Define the requirement effort and cost budget and estimates.
3. Create the release plan and the release.
4. Add the requirements to the release or the release plan.
5. Approve the release.
6. Link each requirement to a project task.
7. Deliver the requirement and change the requirement status to **Implemented**.

### Create Requirements

The first step in requirements planning is to create your requirements. The information that you define helps you trace each requirement from the planning to implementation phase.

Follow these steps:

1. Open **Home**, and from **Requirements Planning**, click **Requirements**.
2. Click **New** and complete at least the required fields.
3. To categorize the requirement, complete the **Type**, **Theme**, and **Status** fields.
4. To specify that the requirement must be delivered to satisfy an organizational commitment to a group or individual, select **Committed**.
5. To define the requirement risk, select one of the following values in the **Risk** field:
- **Low:** The requirement objectives, scope, and benefits are reasonable, clearly defined, measurable, and verifiable.
- **Medium:** The requirement objectives, scope, and benefits are fairly reasonable, clearly defined, measurable, and verifiable.
- **High:** The requirement objectives, scope, and benefits are not reasonable, clearly defined, measurable, and verifiable.
6. To link the requirement to an investment, complete the **Investment** field. Indicate the product, application, asset, service, project, or program that delivers the requirement.
7. Click **Save**.
8. In the **Effort** section, define your budgeted and estimated effort to deliver the requirement:
- The budgeted effort amount is the requirement budgeted effort. The effort does not aggregate up or down the hierarchy of requirements but is used in top-down planning cycles.
- The estimated effort is the aggregated effort for the hierarchy of requirements. Effort estimates are used in bottom-up scoping cycles and represent the planned work to deliver a requirement.
- The **Aggregate Effort (Estimate)** includes the estimated child requirement effort to deliver the requirement: `Aggregate Effort (Estimate) = Effort (Estimate) + Child Requirement Effort (Estimate)`
9. In the **Cost** section, define the budgeted and estimated operating expenses and capital:
- **Operating Expense (Budget):** Defines the requirement budgeted portion of the total cost for operating expenses.
- **Capital (Budget):** Defines the requirement budgeted portion of the total cost for capital expenses.
- **Total (Budget):** `Total Cost (Budget) = Operating Expense (Budget) + Capital (Budget)`
- **Operating Expense (Estimate):** Defines the requirement estimated portion of the total cost for operating expenses.
- **Capital (Estimate):** Defines the requirement estimated portion of the total cost for capital expenses.
- **Total (Estimate):** `Total (Estimate) = Operating Expense (Estimate) + Capital (Estimate)`
- **Aggregate Operating Expense (Estimate):** `Aggregate Operating Expense (Estimate) = Operating Expense (Estimate) + Child Requirement Operating Expense (Estimate)`
- **Aggregate Capital (Estimate):** `Aggregate Capital (Estimate) = Capital (Estimate) + Child Requirement Capital (Estimate)`
- **Aggregate Total (Estimate):** `Aggregate Total (Estimate) = Aggregate Operating Expense (Estimate) + Aggregate Capital (Estimate)`
10. In the **Organizational Breakdown Structures** section, define the OBS that you want to associate with the resource. Optional OBS settings are for security, organizational, or reporting purposes.
- **Department:** Defines the financial department and entity that is associated with the requirement. The department requires to belong to the same entity as the location.
- **Location:** Defines the location of the financial department that is associated with the requirement.
11. Click **Save and Return**.

> [!NOTE]
> You can add an attachment to a requirement, such as a requirements document or a detailed design document. Open the requirement, open the **Properties** menu, and click **Attachments**. Define the path of the document that you want to attach to the requirement and click **Save and Return**.

### Set the Requirement Business Priorities

Typically, a panel of key stakeholders reviews the requirements for an upcoming release. The stakeholders analyze the requirements and rank them after discussing the priorities. The rankings are edited and the overall priority is calculated immediately.

Follow these steps:

1. Open the requirement, open the **Properties** menu, and click **Business Priority**.
2. Complete these fields. For each field, specify a value of **Low** (1-33), **Medium** (34-67), or **High** (68-100):
- **Innovation & User Experience:** Defines the requirement business priority for innovation and user experience.
- **Revenue Impact:** Defines the requirement business priority for revenue impact.
- **Developer Productivity:** Defines the requirement business priority for developer productivity.
- **Cost of Operations & Support:** Defines the requirement business priority for cost of operations and support.
3. Save the changes.

### Link Requirements to Project Tasks

You can link a requirement to the project task. The task represents the effort to deliver this requirement as part of an implementation project. The linked project task is a separate relationship from the investment that owns the requirement. You can link a requirement to a task that is already linked to other requirements. However, you can only link a requirement to a single task.

> [!WARNING]
> If you delete the associated task, the requirement is no longer associated with the project task. The requirement is not deleted.

Follow these steps:

1. Open the requirement.
2. Click **Link**.
3. Choose an option for an existing or new task and click **Next**.
4. Follow the instructions to link to a task. The requirement is linked to the project task. The name of the project and task appear in the **Associated Task** field on the General page.

> [!NOTE]
> To unlink a requirement, open the requirement and click **Unlink**. The name of the project and task no longer appear in the **Associated Task** field on the properties page.

### Requirement Hierarchy

You can group requirements into requirement hierarchies. For example, a requirement to deliver a new phone comprises requirements that describe the features of the phone. Each requirement is split into sub-requirements. Together, the requirements form a hierarchy that represents the new phone.

#### Add a Requirement to a Hierarchy

Follow these steps:

1. Open the requirement.
2. Click **Hierarchy**.
3. Click **Add**.
4. Select the check box next to the requirement, and click **Add**. A child requirement is added to the hierarchy. To view the requirement hierarchy, open the requirement and click **Hierarchy**. To expand and collapse the list, use the plus and minus icons.

#### Move a Requirement in a Hierarchy

You can move a requirement from one location in a hierarchy to another location in a hierarchy. When you move a requirement after another requirement, it becomes a child to that requirement. When you move a requirement before another requirement, it becomes the parent to that requirement.

Follow these steps:

1. Open the requirement.
2. Click **Hierarchy**.
3. Select the check box next to the requirement and click **Move**.
4. Select a new requirement position. Click **Insert Before** or **Insert After**.

#### Indent and Outdent a Requirement in a Hierarchy

You can create hierarchical relationships between requirements. You can indent a requirement to make it a child of the requirement above it. You can designate individual requirements as parent or children. You can create an unlimited number of hierarchy levels.

Follow these steps:

1. Open the requirement.
2. Click **Hierarchy**.
3. Select the check box next to the requirement to indent or outdent, and select one of the following options:
- **Indent:** The selected requirement appears one level under the nearest higher-level requirement. A plus icon appears in front of the higher-level requirement.
- **Outdent:** The selected requirement appears as outdented relative to the requirement above it.

#### Remove a Requirement from a Hierarchy

You can reduce the aggregate totals for budget and estimated cost and effort for any parent (ancestor) requirements in the hierarchy by removing a requirement. Consider this information when removing requirements:
- Removal of a child requirement includes any lower-level requirements relative to the child.
- The requirement is not deleted; it is only removed.

Follow these steps:

1. Open the requirement.
2. Click **Hierarchy**.
3. Select the check box next to the requirement, and click **Remove**.

### Requirement Dependencies

You can indicate dependencies existing between requirements. A dependency can occur when a requirement requires completing before another can begin.

#### Add a Requirement Dependency

You can create dependencies to other requirements, or a mutual dependency between requirements. For example, you have a feature to build a new phone, requirement WOW Phone (RA). This requirement has a dependency on two other requirements: Security Requirement (R1), and Bluetooth Requirement (R2). The feature requires requirement R1 (needed by); however, R2 depends on the feature (depends upon).

Follow these steps:

1. Open the requirement to create a dependency relationship.
2. Click **Dependencies**.
3. Click **Add**.
4. Select the check box next to the requirement to add as a dependency, and click **Add**.
5. Choose one of the following options:
- **Mutual Dependency:** Defines the selected requirement as mutually dependent on the target requirement.
- **Needed By:** Defines the selected requirement as depending upon the target requirement.
- **Depends Upon:** Defines the selected requirement for the target requirement.

> [!NOTE]
> To remove a requirement dependency, open the requirement, click **Dependencies**, select a dependency, and click **Remove**.

### Delete a Requirement

You can delete a requirement at any time, with the following exceptions:
- You cannot delete a requirement that is assigned to a release.
- You cannot delete a requirement having the **Approved** or **Rejected** status.
- Deleting a requirement that is linked to a project task does not delete the task. Instead, the association with the linked task is removed.

Follow these steps:

1. Open **Home**, and from **Requirements Planning**, click **Requirements**.
2. Select the check box next to the requirement and click **Delete**.

---

## Releases

A release represents a new future deliverable and includes requirements, priorities, processes, an audit trail, and a dashboard. Releases typically follow this workflow:

1. Define the investments that are associated with the release.
2. Create the release.
3. Define the projects or programs that are implementing the release.
4. Define the release effort budget and estimates.
5. Define the release cost budget and estimates.
6. After you create the release plan, add the release to the release plan.
7. After you add the requirements to the release plan, approve the release.
8. Link the release to a project or program.

### Create a Release

The first step when working with releases is to create the basic information for a release.

Follow these steps:

1. Open **Home**, and from **Requirements Planning**, click **Releases**.
2. Click **New**.
3. Create the release. These fields require a description:
- **Investment:** Indicate the product, application, asset, service, project, or program representing the work to deliver a release. Unlike the project or program that tracks the release implementation effort, the investment that you define is the owner of the release.
- **Associated Project/Program:** Displays the name of the project or program that is linked to the release. The release can only be linked to one project or program.
- **Currency Code:** Defines the currency that is used to calculate the release budget and estimate values.
- **Effort (Budget):** Defines the budgeted effort to deliver the release.
- **Effort (Estimate):** Displays your organization estimated effort amount to deliver the release.
4. Click **Save**.
5. In the **Cost** section, define the budgeted and estimated capital and operating expenses for the release:
- **Operating Expense (Budget):** Defines the budgeted operating expenses from the total cost for a release.
- **Capital (Budget):** Defines the budgeted capital expenses from the total cost for a release.
- **Total Cost (Budget):** `Total Cost (Budget) = Operating Expense (Budget) + Capital (Budget)`
- **Operating Expense (Estimate):** Displays the estimated portion of the total cost attributed to operating expenses of the release.
- **Capital (Estimate):** Displays the estimated portion of the total cost attributed to capital expenses of the release.
- **Total Cost (Estimate):** `Total Cost (Estimate) = Operating Expense (Estimate) + Capital (Estimate)`
6. In the **Organizational Breakdown Structures** section, define the OBS that you want to associate with the resource for security, organizational, or reporting purposes.
7. Click **Save and Return**.

> [!NOTE]
> You can add an attachment to a release. Open the release, open the **Properties** menu, and click **Attachments**. Define the path of the document that you want to attach to the release and click **Save and Return**.

### Link a Release to a Project or Program

Link the release to a project or program to track the release implementation effort. When linked, the release is assigned to the project. The linked project or program is a separate relationship from the investment that owns the release. You can link an unlimited number of releases to a project or program. However, you can only link a release to one project or program.

Follow these steps:

1. Open the release.
2. Click **Link**.
3. Click the **Choose Existing** option and click **Next**.
4. Select the option next to the project, and click **Save and Return**. The release is linked to the project or program. The name of the project or program displays in the **Associated Project/Program** field on the General page.
5. To unlink a release, open the release and click **Unlink**. The name of the project or program no longer displays in the **Associated Project/Program** field on the properties page.

### Define the Release Schedule

Specify the release scheduling to define the release start and finish dates, alpha and beta start dates, and the scheduled date of release to the market.

Follow these steps:

1. Open the release.
2. Click **Properties**, **Schedule**.
3. Define the release schedule:
- **Start:** Defines the scheduled start date of the release.
- **Finish:** Defines the scheduled finish date of the release.
- **Alpha:** Defines the alpha start date of the release.
- **Beta:** Defines the beta start date of the release.
- **Release to Market:** Defines the scheduled date of release to the market.
4. Click **Save and Return**.

### Add Requirements to a Release

After associating requirements to investments, you can group them into releases. Add a requirement to a single release using the release or from the release plan.

Follow these steps:

1. Open the release.
2. Click **Requirements**.
3. Click **Add**.
4. Select the check box next to the requirement and click **Add**. The requirement displays on the release requirements page.
5. Change the requirement status to **Assigned to a Release**.

> [!NOTE]
> To remove a requirement from a release, open the release, click **Requirements**, select the check box next to the name of the requirement to remove, and click **Remove**.

### Monitor Requirement Business Priorities

You can monitor the requirement business priorities that are assigned to a release. You can view all of the requirements that you have assigned to the release, including the overall business priority, innovation and user experience, revenue impact, developer productivity, and cost of operations and support for the requirement.

Follow these steps:

1. Open the release.
2. Click **Priorities**.

### Monitor Release Performance

You can monitor a release performance to view the following information about the release:
- **Scorecard:** Displays the requirements that have been added to the release based on their scorecard. The requirements are linked to project tasks. The status is based on the associated tasks status.
- **Requirements By Theme:** Displays a graph displaying requirements by theme.
- **Requirements By Priority:** Displays a graph displaying requirements by priority.
- **Business Priority:** Displays a grid displaying requirements by business priority.
- **Requirements By Risk:** Displays a graph displaying requirements by risk.

You can customize the page using Classic PPM Studio. Open the **Release Layout** portlet page in Studio and modify the **Dashboard** tab content. You can configure the portlets on the page - for example, on the Scorecard you can reorder the columns, and on Requirements by Theme you can change the chart type.

Follow these steps:

1. Open the release.
2. Click **Dashboard**.

### Delete a Release

You can delete a release at any time. When you delete a release with added requirements, the requirements become unassigned to the release.

Follow these steps:

1. Open **Home**, and from **Requirements Planning**, click **Releases**.
2. Select the check box next to the release and click **Delete**.
3. Confirm the deletion.

---

## Release Plans

Release plans provide you with an intuitive and quick way to assign requirements across upcoming releases on a per-investment basis. Use release plans to map one or more requirements to a release. Release plans typically follow this workflow:

1. Create the investments that comprise part of your release plan.
2. Create the release.
3. Create the requirements.
4. Create the release plan.
5. Add the investments to the release plan that own the releases that comprise part of the release plan.
6. Add the release to the release plan.
7. Add the requirement to the release plan.

> [!TIP]
> Apply the following best practices when working with release plans:
> - Link release plans to a project plan and then implement them.
> - Link requirements to the project task that represents the effort to deliver this requirement.
> - Use the Release Dashboard to monitor the performance of a release. This dashboard shows the status of the tasks and provides insight into the execution of the deliverables.
> - Implementing a release plan allows for the traceability of requirements.

### Create a Release Plan

The first step when working with release plans is to create the basic information for the plan.

Follow these steps:

1. Open **Home**, and from **Requirements Planning**, click **Release Planning**.
2. Click **New**.
3. Enter the information for the release plan and click **Save**. The following field requires a description:
- **Currency Code:** Defines the currency to calculate the release plan budget and estimate values.
4. Click **Save and Return**.

The new release plan displays on the Release Plans page.

> [!NOTE]
> After you create a release plan, you can view and optionally edit the release plan details by opening the release plan and clicking **Properties** from the Release Planner page. On this page, the **Total Cost (Budget)** field displays the total budgeted cost for the release that is based on this formula: `Total Cost (Budget) = Operating Expense (Budget) + Capital (Budget)`

### Add an Investment to a Release Plan

You can add an investment to a release plan, and the investment forms part of the release plan.

Follow these steps:

1. Open the release plan, and click **Contents**.
2. Click **Add**.
3. Select the investment to add to the release plan, and click **Add**. The investment appears in the contents list.

> [!NOTE]
> You can remove an investment from the release plan. Open the release plan, and click **Contents** on the Release Planner page. Select the check box next to the investment and click **Remove**.

### Update the Release Planner

Plan releases using the **Releases** and **Requirements** portlets on the Release Planner page.

Follow these steps:

1. Open the release plan.
2. For **Releases**, edit these fields:
- **Operating Expense (Budget):** Defines the budgeted operating expenses from the total cost for a release.
- **Capital (Budget):** Defines the budgeted capital expenses from the total cost for a release.
- **Effort (Budget):** Defines the budgeted effort to deliver the release.
- **Start Date:** Defines the scheduled start date of the release.
- **Finish:** Defines the scheduled finish date of the release.
- **Alpha:** Defines the alpha start date of the release.
- **Beta:** Defines the beta start date of the release.
- **Release to Market:** Defines the scheduled date of release to the market.
3. For **Requirements**, edit these fields:
- **Operating Expense (Budget):** Defines the requirement budgeted portion of the total cost for operating expenses.
- **Capital (Budget):** Defines the requirement budgeted portion of the total cost for capital expenses.
- **Effort (Budget):** Defines your organization budgeted effort amount to deliver the requirement.
- **Release:** Specifies the name of the release that is assigned to the requirement. Select a release to assign to the requirement.

### Add a Release to a Release Plan

Add the existing releases to your release plan. Investments-owned releases that are linked to the release plan can be added to the release plan. When you add a requirement-linked release to a release plan, the associated requirement is automatically added to the release plan.

Follow these steps:

1. Open a release plan.
2. In the **Releases** portlet, click **Add Release**.
3. Select the check box next to the release and click **Add**. The release is added to the Releases portlet on the release plan Release Planner page.

### Approve a Release in a Release Plan

When appropriate, approve a release in the release plans.

Follow these steps:

1. Open a release plan.
2. In the **Releases** portlet, select the check box next to the release and click **Approve Release**. The release status changes to **Approved** and a yellow checkmark appears in the **Approved** column.

> [!NOTE]
> You can also approve a release using the releases list page and the release properties page.

### Remove a Release from a Release Plan

When appropriate, remove a release from the release plans.

Follow these steps:

1. Open a release plan.
2. In the **Releases** portlet, select the check box next to the release and click **Remove Release**. The release is removed from the Releases portlet. When you remove a requirements-linked release from the release plan, the requirements are also removed from the release plan.

### Add a Requirement to a Release Plan

When appropriate, add a requirement to the release plans.

Follow these steps:

1. Open a release plan.
2. In the **Requirements** portlet, click **Add Requirement**.
3. Select the check box next to a requirement and click **Add**. The requirement is added to the release plan and displays in the Requirements portlet. If a release plan contains a release that is linked to a requirement, the associated requirement is automatically added to the release plan.

### View a Requirement Hierarchy for a Release Plan

You can view a requirement hierarchy by opening a release plan and looking in the **Requirements** portlet. You can only view the requirement hierarchy on the page. Use the **Plus** and **Minus** icons to the left of the requirement name to expand and collapse the list.

### View a Requirement Dependency in a Release Plan

You can link directly to a requirement dependencies list from a release plan.

Follow these steps:

1. Open a release plan.
2. In the **Requirements** portlet, click the **dependencies** icon next to the requirement. The requirement dependencies page appears.

### Remove a Requirement from a Release Plan

When necessary, you can remove a requirement from the release plans. When you remove a requirement, the requirement is not removed from its associated release.

Follow these steps:

1. Open the release plan.
2. In the **Requirements** portlet, select the check box next to the requirement and click **Remove Requirement**. The requirement is removed from the Requirements portlet on the release plan release planner page.

### View the Release Plan Roadmap

The release plan roadmap is a graphical, time-scaled representation of upcoming releases for a product, service, or other investment. The release plan roadmap represents the game plan that your organization has to release the new product, service, or other investment.

Follow these steps:

1. Open the release plan.
2. Click **Roadmap**.

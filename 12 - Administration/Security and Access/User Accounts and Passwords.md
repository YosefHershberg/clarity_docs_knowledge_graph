---
title: Configure User Accounts and Passwords
tags:
  - admin
aliases:
  - User Security
canonical: true
audience: admin
domain: administration
---
# Configure User Accounts, Skills, and Access Rights

## Overview

As an administrator, you can configure user accounts and access rights. When you create an account for a new user, their resource manager can open their matching resource profile. Typically, you create the user account and a resource manager continues to define the properties for that user as a labor resource. As an administrator, you can also define skills in a formal hierarchy.

## Force a User to Reset Their Password

You can prompt a specific user to reset their password on next login (for example, as part of a security policy change).

Follow these steps:
1. Open the user record.
2. In the Change Password Options section, enable the option to force a password change.
3. During their next login, the user must authenticate with their current credentials before choosing a new password.
4. Save your changes.

## Force All Users to Reset Their Passwords

You can prompt all users to reset their passwords the next time they log in. For example, after increasing the password character length requirement.

Follow these steps:
1. Click Administration, General Settings, System Options.
2. In the Change Password Options section, click Force Password Change.
3. Save your changes.

## Create a New User (Resource)

As an administrator, you can create new user accounts. These entries simultaneously serve as records for labor resources.

Follow these steps:
1. Click Administration, Organization and Access, Resources.
2. Click New.
3. Complete the fields on the page:
   - **Last Name:** Defines the last name for the resource.
   - **User Name:** Defines the user name that the resource uses to log in. Limit: 80 characters.
   - **Resource ID:** Defines the unique identifier for the resource. Displayed on list pages and in portlets.

> [!note]
> The application uses the language selected for the computer operating system and browser to display the login window in the correct language. For example, if you add a resource with a non-English native language and require a password change at first login, the window for the new password can appear in English rather than the language selected by the resource. A new resource's information, including language, is not stored until the initial login is completed with the new password.

   - **Email Address:** Defines the accurate email address for notifications and other communications.
   - **External:** Specifies whether the resource works for an outside company.
   - **Status:** Defines the status for the resource:
     - **Active** (Default): Activates and enables the resource for assignment to projects.
     - **Inactive:** Deactivates and prevents the resource from being assigned to projects unless the filter is set to display inactive resources.
     - **Lock:** Prevents the resource from logging in to Classic PPM.
   - **Time Zone:** Defines the primary workplace time zone.
   - **Locale:** Defines the work locale, which controls number and date language formatting. Default: English (United States).
   - **Language:** Defines the language to use in the product. Default: English.

> [!note]
> A change in the language can take a few minutes to reflect.

   - **Home Page:** Defines your home page. Default: System Default or User Configured.
   - **Set to Current Timesheet:** Indicates if the home page is set to the current timesheet. Default: Cleared.
   - **Resource Manager:** Identifies the name of the resource designated as the resource manager.
   - **Screen Reader Optimized UI:** Determines whether the user interface is optimized for a screen reader. Select for any visually impaired user who is using a screen reader. Default: Cleared.
   - **High Contrast Color Mode:** Determines whether a specific UI theme is used to assist color-deficient users. Default: Cleared.
   - **Action Tracing:** Enables diagnostic tracing of system actions for this resource. Use under the direction of Broadcom Support. Tracing expires and reverts to Trace Off after 5 days. When System Action Tracing is disabled at the system level, this resource-level setting no longer applies. After enabling Action Tracing, the user must log out and log in again. See the output file `app-trace.xml` in `<Clarity Home>/logs/`.

4. Click Save and Continue. The OBS and partitions page appears.
5. Click Save and Continue. The Groups page appears.
6. Click Add and select the groups to which this user belongs. Click the Group check box at the top to select all groups on that page.
7. Click Add or Add and Select More. The group appears in the list.
8. Click Continue. The resource access rights page appears. The auto-assigned access rights for the user are:
   - Resource - Self (Auto)
   - User Favorites Menu - Edit
9. Open the Resource's Access Rights menu and click Global. The global access rights page appears.
10. Click Add and select the access rights to grant to this resource. Click the Access Right check box at the top to select all access rights on that page.
11. Click Add or Add and Select More.

> [!note]
> You cannot delete users (labor resources) because the system maintains their history to preserve referential integrity. If a user leaves your organization, you can lock their user account. If a user comes back, you can unlock their user account. If a user account defined as a labor resource leaves and comes back, we recommend creating a new resource record instead of reactivating the old one. Creating a new record preserves the history of the old record. Leave the old resource record in an Inactive status.

## (SaaS only) Change the Email Address for an On-Demand Portal User

In most environments, the email address for each user also serves as their username. You can change the email address for a single user. Contact Broadcom Support if you need to update the email address for many users.

1. Access the On Demand portal using tenant administrator privileges.
2. Open the control panel and click users in the portal navigation menu.
3. Locate the user that needs to be modified and click Actions, Deactivate.
4. Update the user record in each environment where the user with the changed email address has access:
   a. Log in to Clarity as an administrator with access rights to manage users.
   b. Click Administration, Organization and Access, Resources.
   c. Apply filters to search for the user. For Status, filter on All since the user is deactivated at this point in all Clarity instances.
   d. Open the user and clear the External Authentication check box.
   e. Save the user. The username is now editable.
   f. Edit the user name and email fields to the new email address. Enter the username in lowercase.
   g. Select the External Authentication check box and click Save. The user is still Inactive. Do not activate the user here; activation occurs in the On Demand portal.
5. Access the On Demand portal using tenant administrator privileges.
6. Open the control panel and click users in the portal navigation menu.
7. Locate the deactivated user. The old email address still appears.
8. Click Actions and select Edit.
9. Enter the new email address in the Email Address field.
10. Click on Password and enter password info.
11. Click Save.
12. Activate the user in the portal. Click Actions, Activate. The user is activated in the portal and in all assigned applications.

## Change the Status of a Resource

Creating a resource activates it by default. After you create a resource, it appears on the resource list even if you set the status to Inactive. Project managers can only assign a resource with an Active status to projects.

Follow these steps:
1. Open the resource. The properties page appears.
2. Complete the following information and save:
   - **Status:**
     - **Active:** Activates and enables the resource for project assignments.
     - **Inactive:** Deactivates and prevents the resource from being assigned to projects unless the filter is set to display inactive resources.
     - **Lock:** Prevents the resource from logging in.
   - Default: Active.

## Add Skills for a Resource

Skills describe the talent used to complete project tasks or investment-related talent a resource has. Examples of skills are Java, HTML, domain experience, and clerical. You can create individual skills, or optionally create a skills hierarchy for managers to select skills from a list.

> [!note]
> Best Practice: As you create skills, you can associate them to a parent skill. Create skills that appear at the top of the skill hierarchy first to select them as you create the lower-level skills. You can change but cannot delete skills.

Follow these steps:
1. Click Administration, Data Administration, Skills Hierarchy.
2. Click New.
3. Complete the following fields and save your changes:
   - **Skill Code:** Defines the unique code that identifies the skill.
   - **Active:** Specifies whether the skill is active. Default: Selected.

## Scope of Access Rights

Access rights allow users access to features and functions. You can assign access rights to enable widespread access within the organization, or limit the scope of access for a specific object instance to a specific resource.

| Scope | Granted Using | Level |
|---|---|---|
| All projects, reports, and resource instances | Access role | Broad |
| Projects, reports, and resources belonging to a specific OBS level | Access role | Broad |
| Projects, reports, and resources belonging to certain OBS units | Item-level access rights for a resource | Limited |
| Specific project, report, or resource instances | Item-level access rights for a resource or group | Very Limited |

## Enable and Disable OBS Access Rights

Enable access rights if the OBS requires managing access rights for objects such as resources, pages, and investments. Disable access rights to delete the OBS.

OBS types automatically become access rights-enabled when associated with a financial entity. Once the OBS and entity association occurs, you cannot disable access rights.

Follow these steps:
1. Click Administration, Organization and Access, OBS. The organizational breakdown structure list page appears.
2. Select the check box next to each OBS to enable or disable access rights.
3. Click Use for Access Rights to enable, or click Remove Use for Access Rights to disable.
4. Click Yes on the confirmation page.

## Grant User Access Rights by OBS Unit

Grant resources who are members of an OBS unit access to specific object instances, to object instances in specific OBS units, or globally.

Follow these steps:
1. Open the OBS type. The properties page appears.
2. Click Units and select the OBS unit to grant access.
3. Select one of the following from Access Rights for Unit.
4. Click Add.
5. For instance access, do the following:
   a. Select the object to grant access and click Next.
   b. Select the check box for each access right to grant and click Next.
   c. Select the check box for each instance to access.
6. For OBS Unit access, do the following:
   a. Select the check box next to each access right to grant to the OBS and click Next.
   b. Select the OBS to grant the access right, its association mode, and OBS unit.
7. For Global access, select the check box next to each access right to grant globally, and click Next.
8. Click Add.

## Grant User Access Rights to Object Instances in OBS Units

Follow these steps:
1. Open the resource. The properties page appears.
2. Open the Access to this Resource menu, and click OBS Unit. The OBS units with access page appears.
3. Click Add. The step 1 of 2 page appears.
4. Filter the access rights for the resource, select the check box next to each access right to grant, and click Add and Continue. The step 2 of 2 page appears.
5. Select the OBS from the Show OBS list.

> [!note]
> If the OBS is not listed, verify that at least one object is shared with Any Unit.

6. Select the default association mode:
   - **Unit only:** Resource is granted rights to object instances in the selected OBS unit.
   - **Unit and descendants** (Default): Resource is granted rights to object instances in the selected OBS unit and its descendants.
   - **Unit and ancestors:** Resource is granted rights to object instances in the selected OBS unit and its ancestors.
   - **Unit, descendants, and ancestors:** Resource is granted rights to object instances anywhere in the OBS.
7. Navigate to the OBS unit from which object instance rights are granted. Select the check box next to each OBS unit to grant the rights, and click Add.
8. Save the changes.

## Grant Instance-Level Access Rights to a User

You can give a resource instance-level access rights to a specific object, such as to a page or project.

Follow these steps:
1. Open the resource. The properties page appears.
2. Open the Resource Access Rights menu and click Instance. A list of instance rights associated with the resource appears.
3. Click Add.
4. Select the object from the Object drop-down list and click Next.
5. Select the access rights that you want to assign to the user and click Add and Continue.
6. Select the specific instances that you want to give the user permission to access and click Add.

> [!note]
> More Information: Create Resources and Roles, Clarity User Accessibility Features.

## View User Counts by License Type

Classic PPM assigns a license type to each named user to represent their consumption of product features and functionality. Access rights determine the license type assigned to each user.

> [!tip]
> The application associates a user with only one license type. As an administrator, you can adjust user access rights to change the total counts for each license type.

### License Types

The application examines user access rights to classify each named user into one of the following license types:

- **Full:** Full use of the functionality and any licensed options. These users typically configure the application and can create object instances such as projects. They can manage portfolios, projects, and resources.
- **Restricted:** Functionality is limited. These users typically enter time, update tasks, and view information.
- **View Only:** Potentially unlimited viewing of information; however, viewing is typically limited.
- **Other:** Used to associate users to other licensing not specific to the product.

If users have access rights that map to multiple license types, the highest license type prevails.

### View License Information

View the license Information to verify that your organization complies with your Classic PPM licensing agreement. License information helps to:
- View the license types and the number of users assigned to each license.
- Determine if new licenses are required.
- Identify the types of users consuming certain license types.

Available portlets:
- **User Count by License Type:** Lists the number of licensed users for a particular license type.
- **Rights by License Type:** Lists all access rights assigned to each license type for each user.
- **User List by License Type:** Lists the users and their details for a particular license type.
- **Rights by User:** Lists all the rights for each license type associated with a user.

The license information does not count inactive and locked users.

### View User Count by License Type

Follow these steps:
1. Open Administration, and from Organization and Access, click License Information.
2. Review the User Count by License Type portlet to get the user count for each license type.
3. Click each license type to view the list of resources assigned to it.
4. Click each user to view the list of access rights assigned to that user.

### View Access Rights by License Type

Follow these steps:
1. Open Administration, and from Organization and Access, License Information.
2. In the Rights by License Type portlet, view the access rights assigned to each license type. Sort by each license type to view the associated rights.
3. Optionally, click the Export to Excel icon to export your results to an Excel spreadsheet.

### View User List by License Type

Follow these steps:
1. Log into Classic PPM as an Administrator.
2. Select Administrator, Portlet Pages.
3. Filter and locate the License Information page.
4. Click the License Information page to open it.
5. Select the Content tab.
6. Click the Add button to add new content to the page.
7. On the title page, enter the name of the portlet you want to add.
8. Select the portlet and click the Add button to add it.

> [!tip]
> You can use the Add and Select More button to add multiple portlets to a page.

9. Click the Save button to finalize your changes.
10. Open Administration, and from Organization and Access, click License Information.
11. Review the information displayed in the portlet:
    - **User Status:** Indicates the user's status.
    - **Sub License Type:** Indicates the conditions that resulted in counting the user under the Restricted license type.

> [!note]
> Users will need to manually configure their view to include the above columns.

### User License Type Calculation

How Clarity calculates user license types:

| User Status | Highest License Type | In Transaction or Posted Timesheet? | Result |
|---|---|---|---|
| Active | Full | Not Applicable | Full |
| Active | Restricted | Not Applicable | Restricted |
| Active or Locked or Inactive | View | Yes | Restricted |
| Active | View | No | View Only |

**Scenario 01: Transition from View Only to Restricted**
When a user classified as View Only has an unposted transaction, executing the Post to WIP job changes the license type to Restricted based on the transaction history.

**Scenario 02: Transition from Restricted Access to Posted Timesheet**
If a user's status changes from Active to Inactive, but they have a posted timesheet, the Post Timesheet job updates the Sub License Type from "User with Restricted Access" to "User with Posted Timesheet."

### Sub License Type Values

- **User with restricted access:** All Active users with Restricted access rights without any Full access rights. Inactive or Locked Restricted users without Posted Timesheets or Financial Transactions within the current calendar month are not counted.
- **User in transaction tables:** Any Inactive or Locked Restricted user with Financial Transactions within the current calendar month is counted. Any Active user with View Only rights and Financial Transactions within the current calendar month is listed as Restricted.
- **User with Posted Timesheet:** Any Inactive or Locked Restricted user with posted timesheets within the current calendar month is counted. Any Active user with View Only rights and Posted Timesheets within the current calendar month is listed as Restricted.

> [!note]
> Auto-assigned rights are considered "View Only." The following changes apply to new Clarity users:
> - Clarity no longer auto-assigns Resource - Enter Time on the user instance.
> - Auto-assigned access rights for newly created users: Resource - Self (Auto), User Favorites Menu - Edit (both View Only license type).
> - Custom Sub-object License Type: Users with View access rights to a custom sub-object remain "View Only." Users with Create, Delete, Edit, and XOG access rights to a custom sub-object are tracked as "Restricted" instead of "Full."
> - To enable dynamic update of the License Type and Sub License Type, update the "User List By License Type" item in Content Add-Ins.

## View Agile Capitalization Teams

The Agile Capitalization Teams Summary portlet provides details about each team configured for Agile Capitalization, helping you monitor staffing levels, licensing limits, and integration readiness.

### Prerequisites

- Manually upgrade the License Information item from the Content Add-Ins page to display the Agile Capitalization Teams Summary portlet.
- Define Rally as the integration vendor on the Integrations page.
- Configure Frictionless Cost Accounting Mapping and Rally Team for Frictionless Cost Accounting for each team in the Team Investments workspace.

Follow these steps:
1. In Classic PPM, navigate to Administration > License Information.
2. Click Agile Capitalization Teams. You will see the following details for each team:
   - Team Investment Name
   - Team Investment ID
   - Team Members Count

> [!important]
> Teams with more than 15 labor resources are considered overstaffed, based on the governor's limit for Agile Capitalization licensing. These teams are highlighted on the Agile Capitalization Teams page.

> [!note]
> Inactive teams are excluded from the Agile Capitalization Teams Summary. Only labor-type resources are included in the Team Members Count. Roles and non-labor resources (for example, equipment) are excluded.

## View Telemetry Data

Telemetry is a capability integrated into Clarity to collect active user counts and minimal basic customer site information. No usage or other configuration data is collected. The Telemetry Data Export portlet allows you to view and export all the telemetry data saved in Classic PPM.

> [!note]
> To learn more about Telemetry, see Configure General System Settings. The Telemetry Data Export portlet is not configurable.

The Telemetry Data Export Portlet provides the following values:

| Name | Description | Source |
|---|---|---|
| Collection Date | Date on which telemetry data is collected | Generated by Clarity |
| Site ID | Your organization's site ID listed on the Broadcom Support portal | As configured by customers |
| Product Version | Version number of Clarity in your organization | Generated by Clarity |
| Product SKU | Stock Keeping Unit (SKU) of Clarity | Generated by Clarity |
| Monthly Usage | Count of active users with Full Function, Restricted Function, or View Function access | Generated by Clarity |
| PLA Enabled | Whether your organization has opted for the Subscription Portfolio License Agreement | As configured by customers |
| Instance ID | Type of installation instance (Development, Training, Business Unit, etc.) | Generated by Clarity |
| Domain ID | Primary App Service HTTP/HTTPS URL used to access Clarity | Generated by Clarity |
| Chargeback ID | Name or chargeback ID of a department associated with paying for Clarity usage | As configured by customers |
| SKU Description | Description of the SKU of Clarity | Generated by Clarity |
| Serial Number | Customer's active contract number and line number for the specific license SKU (SaaS) | Generated by Clarity |

Follow these steps:
1. Click Administration, Organization and Access, License Information.
2. Review the information in the portlet.
3. Click Options and use the export options to export the data in this portlet.

## Core Product License Functionality

The following key functionality is available in the core product license:
- Advanced Earned Value Management
- Advanced Reporting with Jaspersoft
- Application Portfolio Management
- Asset Portfolio Management
- Collaboration
- Configuration and Administration
- Demand Management
- Document Management
- Idea and Incident Submittals
- Idea-to-launch Management
- Integration through the XML Open Gateway
- Integration with Microsoft Project and Open Workbench
- Integration with Microsoft SharePoint
- IT Financial Management
- IT Service Portfolio Management
- PMBOK Best Practices Content
- PMO Best Practices Content
- PRINCE2 Best Practices Content
- Processes and Workflow
- Product Portfolio Management
- Program Management
- Project Financial Management
- Project Management
- Project Portfolio Management
- Requirements Planning
- Resource Management
- Unlimited Amount of Named Users Viewing Access

---

## Product Functionality by License Type

Use this matrix to determine whether a capability requires a Full, Restricted, or View Only license. The three classic license types map to SaaS license names as follows: **Full = Creator**, **Restricted = Participant**, **View Only = Viewer**.

> [!NOTE]
> All references to Studio pertain to Classic PPM Studio, not Jaspersoft Studio.

### IT Portfolio Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Establish a hierarchy of IT services | Yes | No | No |
| View the aggregate labor and costs | Yes | No | No |
| Create a hierarchy to capture department-level work, budgets, cost recovery, portfolio and capacity planning | Yes | No | No |
| View services, view departments, and subscribe to a service | Yes | Yes | Yes |
| Create multiple portfolios (applications, products, assets, services) | Yes | No | No |
| Create and edit portfolio analysis criteria | Yes | No | No |
| View portfolio scorecards | Yes | Yes | Yes |
| Conduct portfolio analysis | Yes | No | No |
| Create and manage portfolio plans | Yes | No | No |
| Run portfolio plans through Capacity Planning | Yes | No | No |
| Communicate portfolio decisions through workflow | Yes | No | No |
| Create portfolio fields/portlets in Studio | Yes | No | No |

### IT Financial Management

**Financial Planning**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Set up and view budgets and forecasts using simple budgets | Yes | No | No |
| Define detailed forecasts using cost plans | Yes | No | No |
| Conduct what-if analysis | Yes | No | No |
| Create and modify plans and budgets by Cost Type | Yes | No | No |
| View plans and budgets by Cost Types | Yes | Yes | Yes |

**Chargeback Allocations**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Charge back IT costs per service to subscribers | Yes | No | No |
| Define chargeback rules, debit transactions, and accounting credits | Yes | No | No |
| View customer invoice preview and chargeback line items | Yes | Yes | Yes |
| View cost recovery statements | Yes | Yes | Yes |
| Allocate costs to overhead and chargeback | Yes | No | No |
| Reverse past chargeback allocations | Yes | No | No |
| Allocate chargebacks to fiscal periods | Yes | No | No |

**Cost and Rate Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create multiple rate rules by investment, department, project, or client | Yes | No | No |
| Mark up costs by a specified percentage | Yes | No | No |

**Internal Chargeback**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create internal invoices | Yes | No | No |
| Review pro forma invoices | Yes | No | No |

### Project Portfolio Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and edit portfolio analysis criteria | Yes | No | No |
| View portfolio scorecards | Yes | Yes | Yes |
| Conduct portfolio analysis | Yes | No | No |
| Create and manage portfolio scenarios | Yes | No | No |
| Run portfolio scenarios through Capacity Planning | Yes | No | No |
| Compare portfolio plans | Yes | Yes | Yes |
| Edit portfolio target data | Yes | No | No |
| View portfolio target data | Yes | Yes | Yes |
| View portfolio data in waterline format | Yes | Yes | Yes |
| Configure Waterline view | Yes | No | No |
| Create portfolio fields/portlets in Studio | Yes | No | No |

### Project Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create projects and WBS | Yes | No | No |
| Create projects from predefined templates | Yes | No | No |
| Add tasks or subtasks to existing projects (Clarity only) | Yes | Yes | No |
| Create and update tasks and conversations (Clarity only) | Yes | Yes | No |
| Create and update To Do items (Clarity only) | Yes | Yes | No |
| Create and update project details and status reports (Clarity only) | Yes | Yes | Yes |
| Add unplanned tasks to projects through timesheets | Yes | No | No |
| Profile a project | Yes | No | No |
| Enter time against projects (Web or Mobile) | Yes | Yes | No |
| Approve time sheets (Web or Mobile) | Yes | No | No |
| Approve all time sheets | Yes | No | No |
| View key project status, tasks, milestones, WBS, and resources | Yes | Yes | Yes |
| Update task status and complete deliverables | Yes | Yes | Yes |
| Create and edit plans in Open Workbench or Microsoft Project | Yes | No | No |
| Baseline a project | Yes | No | No |
| Create project workflows and processes in Process Manager | Yes | No | No |
| Create new project fields/portlets in Studio | Yes | No | No |
| Capture time on nonproject investments | Yes | No | No |

**Resource Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Identify resource roles | Yes | No | No |
| Search for resources to staff projects | Yes | No | No |
| Save resource searches | Yes | No | No |
| Assign resources to projects | Yes | No | No |
| Manage resource availability calendars | Yes | Yes | No |

**Program Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and manage programs | Yes | No | No |
| View programs | Yes | Yes | Yes |

**Custom Investments (Clarity)**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and manage custom investments | Yes | No | No |
| View custom investments | Yes | Yes | Yes |

**Roadmaps (Clarity)**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create, import, and manage roadmaps, scenarios, and views | Yes | No | No |
| View roadmaps | Yes | Yes | Yes |

### Risk, Issue, and Change Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create risks, issues, and change requests | Yes | Yes | No |
| View risks, issues, and change requests | Yes | Yes | Yes |
| Promote risks to issues and issues to changes | Yes | No | No |

### Resource Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| View resource dashboards and portlets | Yes | Yes | Yes |
| View resource reports | Yes | Yes | Yes |
| Create new resource fields/portlets in Studio | Yes | No | No |

**Capacity Planning**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and view what-if scenarios | Yes | No | No |
| Evaluate capacity vs. demand | Yes | No | No |
| Manage resource supply and demand | Yes | No | No |

**Skills Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create skills database | Yes | No | No |
| Manage all resource skills | Yes | No | No |
| Manage own skills | Yes | Yes | No |
| Find resources by skills | Yes | No | No |

**Resource Requisitions**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and fulfill resource requisitions | Yes | No | No |
| Create resource requisition processes | Yes | No | No |

### Project Financial Management

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Define detailed budgets/forecasts using cost plans | Yes | No | No |
| Track actual project costs | Yes | No | No |
| Manage resource costs and rate matrices | Yes | No | No |
| Manage Financial OBS | Yes | No | No |
| Set up multiple currencies and conversions | Yes | No | No |
| View project cost accounting reports | Yes | Yes | Yes |

**Project Chargeback Allocations**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create chargeback accounts | Yes | No | No |
| Assign chargeback allocation rates | Yes | No | No |
| Generate and reverse chargebacks | Yes | No | No |
| Maintain and review audit trail | Yes | No | No |

### Demand Management

**Idea Creation and Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Enter new ideas | Yes | Yes | Yes |
| View status of submitted ideas | Yes | Yes | Yes |
| Set up idea review and approval processes | No | No | Yes |
| Approve or reject submitted ideas | Yes | No | No |
| Receive and respond to action items from idea processes | Yes | Yes | Yes |
| Create idea fields/portlets in Studio | Yes | No | No |
| Convert an idea to a project | Yes | No | No |
| Track time and enter budget against an idea | Yes | Yes | Yes |

**Incident Management**

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Enter new incidents | No | Yes | Yes |
| View status of submitted incidents | No | Yes | Yes |
| Receive and respond to action items from incident processes | Yes | Yes | No |
| View incident statistics | Yes | Yes | Yes |
| Assign incidents to resources | Yes | No | No |
| Update incident status | Yes | Yes | Yes |
| Record time against incidents | Yes | Yes | No |
| Set up incident workflows | Yes | No | No |

### Process Management (Workflow)

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Receive notifications | Yes | Yes | No |
| Receive and respond to action items | Yes | Yes | No |
| Create and edit process workflows | Yes | No | No |
| Set up and deploy phase-gate processes | Yes | No | No |
| View graphical workflow status | Yes | No | No |
| Manage process instances and metrics | Yes | No | No |

### Configuration with Classic PPM Studio

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Add custom fields; manage objects with PowerMods | Yes | No | No |
| Create portlets with graphs, charts, grids, and custom HTML | Yes | No | No |
| Build custom pages and dashboards | Yes | No | No |
| Configure menu items | Yes | No | No |
| Modify application look-and-feel | Yes | No | No |
| Create and manage local configurations through system partitions | Yes | Yes | No |
| Build user-defined objects (including custom investment types) | Yes | No | No |
| End users create or edit new custom objects | Yes | No | No |
| End users view custom objects | Yes | Yes | Yes |
| Manage content packages | Yes | No | No |

### Collaboration

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Utilize document management | Yes | Yes | No |
| Manage events and To Do items in calendars | Yes | No | No |
| Create threaded discussion topics | Yes | No | No |
| Participate in threaded discussions | Yes | Yes | Yes |
| Participate in workflow processes | Yes | Yes | No |
| Create and edit workflows using Process Manager | Yes | No | No |
| Receive and respond to action items | Yes | Yes | Yes |
| Search documents and discussions | Yes | Yes | Yes |
| Receive notifications | Yes | Yes | Yes |
| View project documents in Classic PPM | Yes | Yes | No |
| View project documents in SharePoint | Yes | Yes | No |

### Advanced Reporting with Jaspersoft

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Run reports | No | No | No |
| View report output | No | No | No |
| Access report repository | No | No | No |
| Create and update ad hoc views and dashboards | No | No | No |
| Create custom reports with Jaspersoft Studio | Yes | No | No |
| Create and update domains | Yes | No | No |
| Create data sources | Yes | No | No |
| Administer Advanced Reporting | Yes | No | No |

### Best Practice Accelerators

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| PMO Accelerator - Load best-practice content | Yes | No | No |
| PMO Accelerator - Enable portlets, dashboards, and processes | Yes | No | No |
| PMO Accelerator - View portlets and dashboards | Yes | Yes | Yes |
| PRINCE2 Accelerator - Load and enable best-practice content | Yes | No | No |
| PRINCE2 Accelerator - View and edit PRINCE2 subobjects | Yes | No | No |
| PRINCE2 Accelerator - View portlets and dashboards | Yes | Yes | Yes |

### Integrations

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| XML Open Gateway (XOG) - Run XOG processes | Yes | No | No |
| Create, edit, and manage GEL scripts | Yes | No | No |
| Access Open Workbench for desktop scheduling | Yes | No | No |
| Access Microsoft Project for desktop scheduling | Yes | No | No |

### System Administration

| Product Functionality | Full | Restricted | View Only |
|---|---|---|---|
| Create and manage the OBS | Yes | No | No |
| Manage users and groups | Yes | No | No |
| Manage security and privileges | Yes | No | No |
| Set up fiscal and time reporting periods | Yes | No | No |
| Set up GL accounts and charge codes | Yes | No | No |
| Configure the datamart | Yes | No | No |
| Schedule reports and jobs | Yes | No | No |

---

## Related
- [[_MOC Administration]]

%%Source: p2900-2920%%

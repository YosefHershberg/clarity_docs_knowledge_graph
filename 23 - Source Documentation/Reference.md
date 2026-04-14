# Reference

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[21 - Reference/_MOC Reference|Reference]]
- Canonical notes:
- [[21 - Reference/Access Rights/Administration Rights]]
- [[21 - Reference/Access Rights/Advanced Reporting Rights]]
- [[21 - Reference/Connectivity Diagrams]]
- [[21 - Reference/Database Schema Changes]]
- [[21 - Reference/Access Rights/Demand Management Rights]]
- [[21 - Reference/Access Rights/Earned Value Manager Rights]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Clarity Access Rights Reference (#clarity-access-rights-reference)
- H3: Assign Instance-Level Access Rights to a Resource (#assign-instance-level-access-rights-to-a-resource)
- H3: Assign Instance-Level Access Rights to a User Group (#assign-instance-level-access-rights-to-a-user-group)
- H3: Assign Global-Level Access Rights to a User Group (#assign-global-level-access-rights-to-a-user-group)
- H3: Filter for Specific Access Rights (#filter-for-specific-access-rights)
- H3: Auto-Access Rights (#auto-access-rights)
- H3: Basic User Group Access Rights (#basic-user-group-access-rights)
- H3: Basics User Access Rights (#basics-user-access-rights)
- H3: Clarity Access Rights (#clarity-access-rights)
- H2: Administration Access Rights (#administration-access-rights)
- H3: Clarity Administration Access Rights (#clarity-administration-access-rights)
- H3: Administration Access Rights (#administration-access-rights)
- H3: API Access Rights (#api-access-rights)
- H3: Audit Trail Access Rights (#audit-trail-access-rights)
- H3: Jobs Access Rights (#jobs-access-rights)
- H3: License Information Access Group Rights (#license-information-access-group-rights)
- H3: Page Access Rights (#page-access-rights)
- H3: Portlet Access Rights (#portlet-access-rights)
- H3: Portfolio Access Rights (#portfolio-access-rights)
- H3: Process Access Rights (#process-access-rights)
- H3: Scenario Access Rights (Capacity Planning) (#scenario-access-rights-capacity-planning)
- H3: Software Download Access Rights (#software-download-access-rights)
- H3: Advanced Reporting Access Rights (#advanced-reporting-access-rights)
- H2: Demand Management Access Rights (#demand-management-access-rights)
- H3: Idea Access Rights (#idea-access-rights)
- H3: Resource Roles (Idea) (#resource-roles-idea)
- H3: Resource Access Rights (Idea) (#resource-access-rights-idea)
- H3: Financial Access Rights for Ideas (#financial-access-rights-for-ideas)
- H3: Incident Access Rights (#incident-access-rights)
- H3: Resource Roles (Incident) (#resource-roles-incident)
- H2: Earned Value Manager (EVM) Add-In Access Rights (#earned-value-manager-evm-add-in-access-rights)
- H3: Earned Value Manager (EVM) Create, Edit, View, and Delete Access Rights (#earned-value-manager-evm-create-edit-view-and-delete-access-rights)
- H3: Earned Value Manager (EVM) Job Access Rights (#earned-value-manager-evm-job-access-rights)
- H2: Financial Management Access Rights (#financial-management-access-rights)
- H3: Financial Administration (#financial-administration)
- H3: Financial Management (#financial-management)
- H3: Financial Planning (#financial-planning)
- H3: Financial Departments (#financial-departments)
- H3: Financial Locations (#financial-locations)
- H2: IT Service Management Access Rights (#it-service-management-access-rights)
- H3: Service Access Rights (#service-access-rights)
- H3: Customer Department Manager Access Rights (#customer-department-manager-access-rights)
- H3: IT Manager Access Rights (#it-manager-access-rights)
- H3: Service Manager Access Rights (#service-manager-access-rights)
- H3: Provider Department Manager Access Rights (#provider-department-manager-access-rights)
- H2: New Product Development (NPD) Accelerator Access Rights (#new-product-development-npd-accelerator-access-rights)
- H3: Executive User Group Access Rights (#executive-user-group-access-rights)
- H3: Marketing Manager User Group Access Rights (#marketing-manager-user-group-access-rights)
- H3: Non-Clarity User Group Access Rights (#non-clarity-user-group-access-rights)
- H3: Product Portfolio Manager User Group Access Rights (#product-portfolio-manager-user-group-access-rights)
- H3: Project Portfolio Manager User Group Access Rights (#project-portfolio-manager-user-group-access-rights)
- H3: Team Member User Group Access Rights (#team-member-user-group-access-rights)
- H2: PMBOK Guide Accelerator Access Rights (#pmbok-guide-accelerator-access-rights)
- H3: PBK Administrator Group (#pbk-administrator-group)
- H3: PBK Executive Group (#pbk-executive-group)
- H3: PBK Project Manager Group (#pbk-project-manager-group)
- H3: PBK Team Member Group (#pbk-team-member-group)
- H2: PMO Accelerator Access Rights (#pmo-accelerator-access-rights)
- H3: PMO Financial Administrator (#pmo-financial-administrator)
- H3: PMO Portfolio Manager (#pmo-portfolio-manager)

Assign access rights, navigate to portlets, develop custom Studio content, migrate content using the XML Open Gateway (XOG), view ERD diagrams, and compare Oracle and SQL performance. Except for the glossary and portlet information, most of this content is for administrators, report designers, and application developers.

> [!NOTE]
> Find changes to the schema information on the Database Schema Changes page.

> [!TIP]
> Not all the Classic PPM Documentation is translated into your language. Reference content is only available in English.

## Clarity Access Rights Reference

System administrators can use access rights to assign read or write privileges to users for features and functions, including Clarity. For example, assign portfolio managers **Portlet - View** instance rights so users can access the portfolio pages. Assign **Portfolio - Edit - All** global rights so users can edit all portfolios.

You can assign access rights at these levels:
- **Instance**: Provides access to object instances. For example, a specific portfolio, rather than all portfolios.
- **Organization Breakdown Structure (OBS) Unit**: (Not typical for user groups.) Provides access rights to all instances in the selected OBS unit.
- **Global**: Provides unlimited access to an object. For example, all portfolios rather than a specific portfolio.

The same levels apply when you assign access rights for the pages and portlets included in an optional add-in.

> [!TIP]
> For new deployments, the default admin user includes a subset of rights to administer the application; however, this user is not a superuser with full access to all features. To create a superuser, assign all global access rights to a resource (the admin user). To create multiple superusers, assign all global access rights to a group such as System Administrator. Then, assign one or more resources (the admin users) to the group.

### Assign Instance-Level Access Rights to a Resource

You can assign a resource instance-level access rights to a specific object, such as to a page or project.

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **Resources**.
2. Click a resource name.
3. Open the **Access Rights** menu and click **Instance**.
4. Click **Add**.
5. Select the object from the drop-down list and click **Next**.
6. Select the access rights that you want to assign to the user, and click **Add and Continue**.
7. Select the specific instances that this user can access and click **Add**.

### Assign Instance-Level Access Rights to a User Group

Assign instance-level access rights to provide access to specific object instances. For example, assign portfolio managers instance-level access to the Portfolio portlet pages so they can work with portfolios.

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **Groups**.
2. Click a group name.
3. Open the **Access Rights** menu and click **Instance**. If the user group is new, no access rights appear.
4. Click **Add**.
5. Select an object from the drop-down list and click **Next**.
6. Select the access rights to assign to the user group and click **Add and Continue**.

> [!NOTE]
> If more access rights are available on additional pages, select the access rights and click **Add and Select More**. Continue assigning access rights until all appropriate access rights have been assigned.

7. Select the instances that you want by clicking the corresponding check boxes and click **Add**.

> [!NOTE]
> If more instances are available on additional pages, select the instances and click **Add and Select More**. Continue assigning instances until all appropriate instances have been added.

8. Complete one of these steps after you have finished assigning instance-level access rights to the user group:
- Click **Continue** to add global access rights, if the user group needs access rights for all instances of an object.
- Click **Return** to go back to the Groups page.

After you assign instance-level access rights to a user group, you have successfully created a user group with access rights. The users in the group can now perform their assigned tasks.

### Assign Global-Level Access Rights to a User Group

Assign global access rights for all instances of an object to system administrators or super users so that they can perform both end-user and administrative functions. For example, assign a user group, named Portfolio - Managers, global access rights to the Portfolios object. With this access, group members can create, edit, or remove portfolios.

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **Groups**.
2. Click the group name.
3. Open the **Access Rights** menu and click **Global**. If the user group is new, no access rights appear.
4. Click **Add**.
5. Select the appropriate global rights for the user group and click **Add**.
6. If more access rights are available on additional pages, click **Add and Select More**. Continue assigning access rights until all appropriate access rights have been assigned.
7. When you have finished assigning global rights to the user group, click **Return**.

After you assign global access rights to a user group, the users in the group can now perform their assigned tasks.

### Filter for Specific Access Rights

You can assign a group of access rights (for example, all roadmap access rights for Clarity) to a user. You can filter for these access rights and avoid browsing through pages of access rights.

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **Resources**.
2. Click the last name link for the user.
3. Click **Resource's Access Rights** and select **Global**.
4. Click **Add**.
5. In the **Description** field in the filter section, enter a description for the access rights. Use wildcard asterisks (*) before or after (or both) to return matching results. For example, enter the following value to search for all access rights for the Roadmaps feature: `*roadmap*`
6. Click **Filter**.

> [!TIP]
> Another popular example is to assign XOG global access rights to a user. Perform the same steps and enter `*XOG Access` in the Access Right field and click **Filter**. Select the appropriate XOG access rights and click **Add**.

### Auto-Access Rights

Auto-access rights are granted automatically when you are assigned to a role or when you perform a certain action. For example, if you are assigned as a project manager, you are automatically given the **Project - Manager (Auto)** access right. This right allows you to view and edit the general and management properties of the project.

To view the list of access rights for a resource (user), click **Administration**, **Organization and Access**, **Resources**. These rights become visible in a resource's list of assigned access rights only after the condition is met. If you are removed as the project manager, then this auto-access right is removed.

The application provides these auto-access rights:
- **Application - Manager (Auto)**: This right is equivalent to Application - Edit, and is automatically granted to an Application Manager. Type: Application
- **Asset - Manager (Auto)**: This right is equivalent to Asset - Edit, and is automatically granted to an Asset Manager. Type: Asset
- **Idea - Initiator (Auto)**: Automatic right that is granted to the initiator of an idea. Type: Idea
- **Idea - Manager (Auto)**: Automatic right that is granted to the manager of an idea. Type: Idea
- **Job Type Creator (Auto)**: This right is automatically granted to the creator of a job type when it is created. Type: Job
- **Other Work - Manager - Automatic**: Automatic right that is granted to the manager of Other Work; equivalent to Other Work - Edit. Type: Other Work
- **Page Creator (Auto)**: Allows a user to edit a page. Type: Page
- **Portfolio - Owner (Auto)**: Automatic right that is granted to the owner of a portfolio. Type: Portfolio
- **Portfolio - Stakeholder (Auto)**: Automatic right that is granted to a stakeholder of a portfolio. Type: Portfolio
- **Portlet Creator (Auto)**: Allows a user to edit a portlet. Type: Portlet
- **Product - Manager (Auto)**: Allows a user to baseline all products. This right does not include the Product - Navigate right, and requires the user to have the Product - Edit right. Type: Product
- **Project - Discussion Manager (Auto)**: This right is automatically created for the user who creates a project, and makes the creator of the project the Collaboration Manager. The user can subsequently grant Collaboration Manager rights to additional resources or revoke this right by changing it to participant. Type: Project
- **Project - Manager (Auto)**: The user who enables a project for management is automatically granted this right. The user becomes the Project Manager for the project. This right allows a user to view and edit the general and management properties of the project. The access right allows the user to edit only some limited financial fields. Type: Project
- **Project - Participant (Auto)**: A user who is assigned to a project as a project participant is automatically assigned this right. The right allows the user access to Action Items, Project Calendar, Document Manager, and Discussions. This right includes the Project - View right. The right does not include the access to view tasks. Type: Project
- **Project - Participant Groups (Auto)**: A user who is assigned to a project through a project group is automatically assigned this right. The right allows the user access to Action Items, Project Calendar, Document Manager and Discussions. Type: Project
- **Release - Manager (Auto)**: Automatic right that is granted to the manager of a Release. Type: Release
- **Release Plan - Manager (Auto)**: Automatic right that is granted to the manager of a Release Plan. Type: Release Plan
- **Requirement - Manager (Auto)**: Automatic right that is granted to the manager of a Requirement. Type: Requirement
- **Resource - Manager (Auto)**: The user creating a new resource is automatically granted this right. The user becomes the resource manager for the resource. This right allows the user to view and edit general resource properties. If the resource is assigned another resource manager, the current resource manager loses rights to the resource. Type: Resource
- **Resource - Self (Auto)**: Rights that are automatically granted to a resource when created and includes Resource Edit Ideas. Type: Resource
- **Scenario - Creator (Auto)**: This right includes Scenario - Edit and Scenario - Edit Access Rights, and is automatically granted to the Scenario creator. Type: Scenario
- **Service - Manager Auto**: Automatic right that is granted to the manager of a service. Type: Service

#### Auto-Access Rights Used in Clarity
- **Project - Manager (Auto)**: Automatic right that is granted when a user creates a project in Clarity or when the user is set as the project manager on a project.
- **Resource - Manager (Auto)**: Automatic right that is granted when a staff member is assigned a resource manager in Classic PPM. The right includes both soft and hard booking rights for the team member.

### Basic User Group Access Rights

When a user is created in Clarity or Classic PPM, the Basic group for user access is automatically assigned to all users. Initially, it doesn't have any specific access rights defined. However, the Administrator can customize it by adding access rights that might be common for all users. This group can be used to secure attributes, set up view sharing, and implement other functionalities.

It provides a flexible starting point for setting up basic user permissions across the system.

### Basics User Access Rights

#### Audit Trail Access Rights

The following access rights are available for audit:
- **Audit Trail - Access**: Allows users to access audit page. Type: Global
- **Audit Trail - View - All**: Allows users to view any audit page. Type: Global

#### Dashboard Access Rights

The following access rights are available for dashboards:
- **Dashboard - Create**: Allows users to create new dashboards in Classic PPM. Type: Global
- **Dashboard - Navigate**: Allows users to navigate to any dashboard page in Classic PPM. Type: Global
- **Dashboard - Edit All**: Allows users to edit the definition of all user-defined dashboard in the application. Type: Global
- **Dashboards - Copy**: Allows the user to copy Dashboard instances in the Clarity to which the user has access. Type: Global
- **Dashboards - Create**: Allows resources to create Dashboards objects. Type: Global
- **Dashboards - Delete All**: Allows resources to delete all Dashboard objects. Type: Global
- **Dashboards - Edit All**: Allows resources to edit all Dashboard objects. Type: Global
- **Dashboards - Navigate**: Allows resources to navigate to Dashboards object pages. Type: Global
- **Dashboards - View All**: Allows resource to view all Dashboard objects. Type: Global
- **Dashboards - Xog Access**: Allows users to import and export Dashboard instances using the XML Open Gateway interface. Type: Global

#### Knowledge Store Access Rights

Access to the Knowledge Store and to its folders and documents are provided at the following levels:
- Access rights at the Knowledge Store level
- Permissions at the folder and document levels

The following access rights are required to manage or view content in the Knowledge Store:
- **Knowledge Store - Administrate**: Allows you to access all of the folders and documents in the Knowledge Store. Only users with the Knowledge Store - Administrate access right can create folders at the top level of the Knowledge Store folder tree. Users with the Knowledge Store - Access right and with the appropriate permissions can add sub folders and documents to the folders.
- **Knowledge Store - Access**: Allows you to create, edit, and view documents and folders in the Knowledge Store to which you have access. Allows you to delete the folders you created, and the documents you added.
- **Knowledge Store - View All**: Allows you to view all documents in the Knowledge Store.

#### Page Access Rights

The following access rights are available for pages:
- **Page - View**: Allows users to view a general page in Classic PPM. For instance pages (such as portfolio pages), this right is not required. Type: Instance
- **Page Definition Editor**: Allows users to edit, view, and delete the definition of a specific page. Required: Administration - Studio access right to access the Studio menu. Type: Instance
- **Page - Delete**: Allows users to delete specific Pages in the Clarity. Type: Instance
- **Page - Edit**: Allows users to view and edit specific Pages in the Clarity. Type: Instance
- **Page Definition Viewer**: Allows the user to view the definition of a specific page. Required: Administration - Studio access right to access the Studio menu. Type: Instance
- **Page - Create**: Allows users to create Pages in the Clarity. Type: Global
- **Page - Delete - All**: Allows users to delete Pages in the Clarity. Type: Global
- **Page - Edit - All**: Allows users to view and edit all Pages in the Clarity. Type: Global
- **Page - Navigate**: Allows user access to the Pages in the Clarity. The user will only be able to view information for Pages to which the user has access. Type: Global
- **Page - View - All**: Allows users to view all Pages in the Clarity. Type: Global
- **Page Viewer - All**: Allows users to view all customized portlet pages. This right depends on portlet pages being linked to a menu before being displayed. If the portlet page is linked to the Administration Menu, then the user must also be granted the Administration - Access right. Type: Global
- **Page Definition Editor - All**: Allows users to edit, view, and delete the definition of all pages. Required: Administration - Studio access right to access the Studio menu. Type: Global
- **Page Definition Viewer - All**: Allows the user to view the definition of all pages. Required: Administration - Studio access right to access the Studio menu. Type: Global

#### Report and Job Access Rights

The following access rights are available for users who run and review reports:
- **Reports - Access**: Allows users to access reports pages and the My Reports portlet. This access right is dependent on one of the following access rights being granted to a user: the Reports - Run - All access right, or instance level access rights such as Report - Run, Report - View Output, or Report - Edit Properties. Type: Global
- **Reports - Run - All**: Allows users to run any report. This right also allows users to schedule, edit properties, and view the output of any report. Requires: Reports - Access right. Type: Global
- **Reports - View Output - All**: Allows users to view the output of any report. Requires: Reports - Access right. Type: Global
- **Reports and Jobs - Administrator Access**: Allows user to view report and job definitions. The right also allows user to view the reports and jobs categories. Type: Global
- **Reports and Jobs - Create Definition**: Allows user to create, edit, and view report or job definitions. Requires: Reports and Jobs - Administrator Access. Type: Global
- **Reports and Jobs - Edit Definition - All**: Allows user to edit any report or job definition. Requires: Reports and Jobs - Administrator Access. Type: Global
- **Report - Run**: Allows users to run specific reports, edit scheduled report properties, and review output. Requires: Reports - Access right. Type: Instance
- **Job - Run**: Run a specific job. Allows editing of the scheduled job properties and viewing of the output of the job. This right is dependent on Jobs - Access being granted. Requires: Reports - Access right. Type: Instance
- **Reports and Jobs - Edit Definition**: Allows the user to view and edit a report or job definition. Requires: Reports and Jobs - Administrator Access. Type: Instance

#### Software Download Access Rights

The following access rights are available for downloading software:
- **Software Download - Microsoft Project Interface**: Allows users to download the Classic PPM Microsoft Project Interface. Type: Global
- **Software Download - Open Workbench**: Required to download Open Workbench. Type: Global

#### Timesheet Access Rights

The following access rights are available for timesheets:
- **Timesheets - Navigate**: Allows you to navigate to timesheet pages. Type: Global
- **Timesheets - Edit All**: Allows users to edit all timesheets. Type: Global
- **Timesheets - Approve All**: Allows users to approve all submitted timesheets. Type: Global
- **Timesheet approval - XOG Access**: Allows users to export and approve timesheets using the XML Open Gateway interface. Type: Global
- **Resource - Enter Time**: Allows users to complete and submit timesheets for a specific resource. Type: Instance
- **Project - Edit Project Plan**: Allows users to add unplanned tasks to a specific project when completing their timesheets when they are a team member on the project. Type: Instance

### Clarity Access Rights

The following access rights control what users can do in Classic PPM and Clarity. Unless stated otherwise, all of the following access rights are global. Some rights are available at the instance-level, as noted. The access rights for the new user interface generally do not extend into Classic PPM, which has its own set of access rights.

#### Clarity: Navigation Access Rights
- **Administration - Access**: Allows administrators to access the Administration menus in both Classic PPM and Clarity. Users need additional rights to perform individual administrative actions.
- **Classic PPM - Navigate**: Allows users and administrators to access the Classic PPM features from the Clarity main menu.
- **Project Management - Navigate**: Allows users to access the Project grid page and related project management pages in Clarity. The pages include only the projects that the user has permission to access.
- **Project Management - Tiles Navigate**: Allows users to access the Project tiles page in Clarity where projects appear as tiles. The page includes only the project tiles that the user has permission to access.
- **Roadmap - Navigate**: Allows the user to access the roadmap pages. Users can only view information for roadmaps to which they have access. To create, edit, or delete roadmaps, users need additional access rights.
- **Staffing - Navigate**: Allows users to access the resource grid in Clarity. To use the resource management features, the user also needs resource booking and investment rights.
- **Timesheets - Navigate**: Allows users to access timesheets in Clarity provided the Timesheets feature is active in Classic PPM under System Options.
- **Tasks - Navigate**: Allows users to navigate to the Tasks page from the main menu of Clarity. Users require minimum access to view projects and tasks. Users are typically focused on their own assigned tasks; however, with this access right, a user or team member can view all the assigned tasks for the projects that they have access to view or edit. The Tasks grid does not include phases, milestones, or unassigned tasks. With additional rights, a project manager can view the tasks for all their project team members. For example, the Project - Task Management access right allows a user to add, edit, and delete tasks in Clarity and can be granted for specific projects or OBS units.
- **Custom Investment - Navigate**: Allows users to access the custom investment page in Clarity. Users require navigate and view rights for each custom investment type to access the custom investment instance information.
- **Resource Management - Navigate**: Allows users to access the Resources page in Clarity. Users can use the Resources page to create and view teams in Clarity.
- **Resource - Directory - Navigate**: Allows user to access the Resource directory workspace in the Clarity.
- **To Do - Navigate**: Allows user access to the To Do pages in Clarity.
- **Page - Navigate**: Allows user access to the Pages in Clarity. The user will only be able to view information for Pages to which the user has access.
- **Agreement - Navigate**: Allows user access to the Agreement pages in Clarity. The user will only be able to view information for Agreements to which the user has access.
- **My Workspace - Navigate**: Allows user access to my workspace pages in Clarity. The user will be able to access the checklists to which the user has access.
- **Hierarchy - Navigate**: Allows user access to the Hierarchies pages in the Clarity. The user will only be able to view information for Hierarchies to which the user has access.
- **Plan - Navigate**: Allows user access to the Plans page in the Clarity. The user will only be able to view information for Plans to which the user has access.
- **Team - Navigate**: Allows user to navigate to the team investment page in the Clarity. The user will only be able to view information for team investments to which the user has access.
- **Ideas - Navigate**: Allows user to navigate to Ideas pages. User will need additional rights to view individual Ideas.
- **Objectives - Navigate**: Allows resource to navigate to Objectives object pages.
- **Custom Object - Navigate**: Allows user access to the custom object page in the Clarity. The user will only be able to view information for custom objects to which the user has access.
- **Status Reports - Navigate**: Allows user access to view the status reports in the Clarity. The user will only be able to view status reports to which the user has access.
- **Transactions - Navigate**: Allows user to access the Transactions page in the Clarity.
- **Menu Links - Navigate**: Allows user to access the Menu Links page in the Clarity.

#### Clarity: Blueprint Access Rights

The following blueprint rights are typically assigned to an application owner, content designer, or administrator. Users assigned these access rights also require the **Administration - Access** right. Blueprint rights apply to projects and custom investment types.
- **Administration - Blueprints - Navigate**: Allows the user access to the Blueprints Tile under Administration in the Clarity. The user will be able to manage blueprints to which the user has access.
- **Blueprint - Create Copy**: Allows the user to create a copy of any existing blueprint including the standard blueprint. Includes Blueprint - View - All right.
- **Blueprint - Delete - All**: Allows the user to delete all blueprints except the standard blueprint. Includes Blueprint - View - All right.
- **Blueprint - Edit - All**: Allows the user to edit all blueprints except the standard blueprint. Includes Blueprint - View All right. The access right allows the user to delete fields or sections in the blueprint, rename the blueprint, associate templates to project blueprints, associate custom investment types with investment blueprints, or mark a blueprint as the default.
- **Blueprint - View - All**: Allows the user to view all blueprints and the names of the associated templates or custom investment types. This right also allows the user to view the published, detailed layout of all blueprints.

#### Clarity: Business Agreements Access Rights

The Business Agreements workspace in Clarity enables you to define and manage agreements between investments in Clarity.
- **Agreement - Create**: Allows users to create Agreements in Clarity.
- **Agreement - Create from Template**: Allows users to create Agreements from templates in Clarity.
- **Agreement - Delete - All**: Allows users to view and delete all Agreements in Clarity.
- **Agreement - Edit - All**: Allows users to view and edit all Agreements in Clarity.
- **Agreement - View - All**: Allows users access to the Agreement pages in Clarity. The user will only be able to view information for Agreements to which the user has access.

#### Clarity: Checklist Access Rights

The Checklist access right enables you to manage checklists in the Checklist module of investments and the My Workspace page in Clarity.
- **Checklist - Create**: Allows user to create Checklists in Clarity.

#### Clarity: Custom Investment Access Rights

The **Custom Investment - Navigate** access right allows users to see the main parent page for custom investments. To navigate to a specific type of investment, users require the corresponding navigation rights for each type of custom investment object.

The following sequence of steps describes how these access rights work:

1. In Classic PPM, an administrator creates a custom investment type. For example, the administrator creates a custom investment type named Product Demo.
2. The system generates a corresponding navigation access right: Product Demo - Navigate. The right is auto-assigned to the user who created the new investment type. The application also assigns the global create right and instance rights for viewing and editing.
3. In Classic PPM, an administrator assigns the new Product Demo - Navigate right to some users individually, in groups, or in OBS units. Other users do not have this right.
4. Both sets of users are granted the Custom Investment - Navigate global access right.
5. In Clarity, both sets of users can navigate to the Custom Investments page. However, only the first set of users can view and open the list of product demos. The second group cannot view that tile on the parent investment page. The custom investment type tiles are shown or hidden based on the system-generated navigation right for each type of custom investment.
6. When you create a custom investment type, the application also creates all the necessary rights you need to effectively administer access to the new custom investment. Assign the appropriate rights to users:
- `<custom_investment_type>` - Budget Plan - Approve All
- `<custom_investment_type>` - Budget Plan - Edit All
- `<custom_investment_type>` - Budget Plan - View - All
- `<custom_investment_type>` - Cost Plan - Edit - All
- `<custom_investment_type>` - Cost Plan - View - All
- `<custom_investment_type>` - Create
- `<custom_investment_type>` - Edit All
- `<custom_investment_type>` - Navigate
- `<custom_investment_type>` - Task Management - All
- `<custom_investment_type>` - View All
- `<custom_investment_type>` - XOG Access

#### Clarity: Ideas
- **Idea Management - Navigate**: Allows a user to access the idea management pages in Clarity. Additional access rights determine which ideas the user can view or edit. The PMO System Administrator Security group includes this access right. All users in the group inherit the group access rights.
- **Idea - Risk, Issue, Change Request - Create**: Allows user to create Idea risks, issues and change requests.
- **Idea - Risk, Issue, Change Request - Delete - All**: Allows user to delete all the Idea risks, issues and change requests.
- **Idea - Risk, Issue, Change Request - Edit - All**: Allows user to edit and view all the Idea risks, issues and change requests.
- **Idea - Risk, Issue, Change Request - View - All**: Allows user to view all the Idea risks, issues and change requests.
- **Idea - Delete - All**: Allows user to delete any Idea. Does not include the Idea - View right. This right is only applicable in Clarity.
- **Idea - Approve - All**: Allows user to approve all Ideas.
- **Idea - Benefit Plan - Edit All**: Allows resource to edit all the Idea benefit plans.
- **Idea - Benefit Plan - View All**: Allows resource to view all the Idea benefit plans.
- **Idea - Budget Plan - Approve All**: Allows resource to approve all the Idea budget plans.
- **Idea - Budget Plan - Edit All**: Allows resource to edit all the Idea budget plans.
- **Idea - Budget Plan - View All**: Allows resource to view all the Idea budget plans.
- **Idea - Copy**: Allows the user to copy an Idea in the Clarity.
- **Idea - Cost Plan - Edit All**: Allows resource to edit all the Idea cost plans.
- **Idea - Cost Plan - View All**: Allows resource to view all the Idea cost plans.
- **Idea - Edit - All**: Allows user to edit all Ideas.
- **Idea - Edit Access Rights - All**: Allows user to edit the access rights for all Ideas. Does not include the Ideas - Navigate or Idea - View rights.
- **Idea - Edit All - Assigned Releases**: Allows user to edit assigned releases for all Ideas.
- **Idea - Edit - Financial Information - All**: Allows resources to edit financial properties of all ideas.
- **Idea - Financial Plan - Submit All for Approval**: Allows resource to submit all the Idea financial plans for approval.
- **Idea - Hierarchy - Parents - Add - All**: Allows users to add investments to Parents Hierarchy for any idea.
- **Idea - Hierarchy - Parents - Edit - All**: Allows users to edit the Parents Hierarchy for any idea.
- **Idea - Hierarchy - Parents - View - All**: Allows user to view investments in Parent Hierarchy for any idea.
- **Idea - View - All**: Allows user to view all Ideas.
- **Idea - View All Assigned Releases**: Allows user to view assigned releases for all Ideas.
- **Idea - View Financial Information All**: Allows resources to view financial properties of all ideas.
- **Idea - XOG Access**: Allows user to import and export Idea instances using the XML Open Gateway interface.
- **Ideas - Create**: Allows user to create Ideas. Includes the Ideas - Navigate right.
- **Ideas - Create from Template**: Allows user to create Ideas from templates.
- **Ideas - Navigate**: Allows user to navigate to Ideas pages. User will need additional rights to view individual Ideas.

#### Clarity: Task Access Rights

To manage tasks, a user needs the **Tasks - Navigate** right and either the Participant (Auto) or explicit Project - View Management rights to the project. The following task rights are also available:
- **Project - Tasks View**: Allows the user to view the task inside the task details panel.
- **Project - Task Management - All**: Allows the user to create, edit, and delete task details and assignments in projects that they are permitted to view. This right includes the Project - Tasks View right. Use this global right in combination with instance, OBS, or global project view access rights to allow a user to manage their tasks and assignments in multiple projects.

> [!TIP]
> The Project - Edit access right is not required to access and manage tasks inside a project. A special PDF is available to show suggested access rights by typical user personas. See Clarity: Track Tasks and To-Do Items.

#### Clarity: Task Assignment Access Rights

To manage task assignments, a user needs the following access rights:
- Project - Task Management
- Project - Task Management - All
- Project - Edit Assigned Tasks
- Project - Edit Assigned Tasks All

To create an assignment, grant users the **Project - Edit Management** access right.

#### Clarity: Team Access Rights

The following Team rights are typically assigned to an application administrator. As the administrator, you can assign these access rights to an individual resource or a group.
- **Team - View - All**: Allows the user to view all existing teams.

> [!TIP]
> All of the following team rights include the Team - View - All global access right. To view the Team tiles, users also need the Administration - Access access right.
- **Team - Create**: Allows the user to create teams.
- **Team - Edit - All**: Allows the user to edit teams and their members. For example, the user can update team names, add or remove resources, and update resource allocation percentages.
- **Team - Delete - All**: Allows the user to delete teams not already allocated to an investment.

#### Clarity: Team Investment Access Rights

The following Team Investment rights are typically assigned to an application administrator. As the administrator, you can assign these access rights to an individual resource or a group.
- **Team Investment - Benefit Plan - Edit - All**: Allows resource to edit all the Team Investment benefit plans.
- **Team Investment - Benefit Plan - View - All**: Allows resource to view all the Team Investment benefit plans.
- **Team Investment - Budget Plan - Approve - All**: Allows resource to approve all the Team Investment budget plans.
- **Team Investment - Budget Plan - Edit - All**: Allows resource to edit all the Team Investment budget plans.
- **Team Investment - Budget Plan - View - All**: Allows resource to view all the Team Investment budget plans.
- **Team Investment - Copy**: Allows the user to copy Team Investment instances in the Clarity for which the user has access.
- **Team Investment - Cost Plan - Edit - All**: Allows resource to edit all the Team Investment cost plans.
- **Team Investment - Cost Plan - View - All**: Allows resource to view all the Team Investment cost plans.
- **Team Investment - Create**: Allows resource to create Team Investment objects. This includes the page navigation right.
- **Team Investment - Create from Template**: Allows resource to create Team Investment objects from templates.
- **Team Investment - Delete All**: Allows resource to delete all Team Investment objects.
- **Team Investment - Edit All**: Allows resource to edit all Team Investment objects. This includes the page navigation right.
- **Team Investment - Financial Plan - Submit All for Approval**: Allows resource to submit all the Team Investment financial plans for approval.
- **Team Investment - Navigate**: Allows resource to navigate to Team Investment object pages.
- **Team Investment - Risk, Issue, Change Request - Create**: Allows user to create Team Investment risks, issues and change requests.
- **Team Investment - Risk, Issue, Change Request - Delete - All**: Allows user to delete all the Team Investment risks, issues and change requests.
- **Team Investment - Risk, Issue, Change Request - Edit - All**: Allows user to edit and view all the Team Investment risks, issues and change requests.
- **Team Investment - Risk, Issue, Change Request - View - All**: Allows user to view all the Team Investment risks, issues and change requests.
- **Team Investment - Task Management - All**: Allows user to create, update, and delete tasks for all Team Investment objects they can view.
- **Team Investment - View All**: Allows resource to view all Team Investment objects. This includes the page navigation right.
- **Team Investment - Xog Access**: Allows user to import and export Team Investment instances using the XML Open Gateway interface.

#### Clarity: Staffing (Resource Management) Access Rights
- **Resource Forecast Rate - Edit**: Allows users to view and edit the resource forecast column in the Resources-to-Investments, Investments-to-Resources, and Role Requests views. Also allows users to view the Forecast check box and to edit the Forecast Rate field for a resource or role. Includes the Resource Forecast Rate - View right.
- **Resource Forecast Rate - View**: Allows users to view the resource forecast column in the Resources-to-Investments, Investments-to-Resources, and Role Requests views. To include forecast rate information in the grids in these views, users can select the Forecast check box. Users with this right can also view, but not edit, the Forecast Rate field for a resource or role.

#### Clarity: Roadmap Access Rights
- **Roadmap - Author**: Allows the user to view, edit, and delete the roadmap and manage roadmap-specific picklists. User can create views and edit or delete their own views. Also, allows user to create and manage scenarios within a roadmap. When you add a user as an author, the instance right is automatically granted to the user. When you remove a user as the author, the instance right is not automatically removed. The only way to revoke the right is for the system administrator to remove the right from the resource profile in Classic PPM. The system administrator can remove the instance right in Classic PPM from a user who is still an author on the roadmap. This is useful for reference purposes in case the user no longer needs access to the roadmap. Type: Instance
- **Roadmap - Author - All**: Allows the user to view, edit, and delete all roadmaps, to manage roadmap-specific picklists, and to create, edit, and delete views for all roadmaps.
- **Roadmap - Create**: Allows the user to create roadmaps. The creator of the roadmap automatically becomes the author and can edit or delete the roadmap.
- **Roadmap - Edit**: Allows the user to view and edit a roadmap and manage the roadmap-specific picklists. User can create views and edit or delete their own views. Also, allows user to create and manage scenarios within a roadmap. Type: Instance
- **Roadmap - Edit All**: Allows the user to view and edit all roadmaps and manage roadmap-specific picklists. The user can view roadmaps in the timeline, board, or grid views. This access right also allows the user to create, edit, and delete their own views, and edit data in the roadmap grid.
- **Roadmap - View**: Allows the user to view a roadmap and access the different views (timeline, board, and grid). Type: Instance
- **Roadmap - View - All**: Allows the user to view all roadmaps and access the different views (timeline, board, and grid). This access right also allows the user to create, edit, and delete their own views, and edit data in the roadmap grid.
- **Roadmap - Delete**: Allows the user to view and delete a roadmap.
- **Roadmap - Delete All**: Allows the user to view and delete all roadmaps and associated roadmap items.

#### Clarity: Custom Investments Access Rights
- **Custom Investment - Navigate**: Allows the user to access the menu link for the Custom Investments workspace.
- **Custom Investment Name - Budget Plan - Approve - All**: Allows a resource to approve all the Custom Investment Name budget plans.
- **Custom Investment Name - Budget Plan - Edit - All**: Allows a resource to edit all the Custom Investment Name budget plans.
- **Custom Investment Name - Budget Plan - View - All**: Allows a resource to view all the Custom Investment Name budget plans.
- **Custom Investment Name - Cost Plan - Edit - All**: Allows a resource to edit all the Custom Investment Name cost plans.
- **Custom Investment Name - Cost Plan - View - All**: Allows a resource to view all the Custom Investment Name cost plans.
- **Custom Investment Name - Create**: Allows a resource to create Custom Investment objects. This includes the page navigation right.
- **Custom Investment Name - Edit All**: Allows a resource to create Custom Investment objects. This includes the page navigation right.
- **Custom Investment Name - Financial Plan - Submit All for Approval**: Allows resource to submit all the Custom Investment Name financial plans for approval.
- **Custom Investment Name - Navigate**: Allows resource to navigate to Custom Investment Name object pages.
- **Custom Investment Name - Task Management - All**: Allows user to create, update, and delete tasks for all Custom Investment Name objects they can view.
- **Custom Investment Name - View - All**: Allows resource to view all Custom Investment Name objects. This includes the page navigation right.
- **Custom Investment Name - Xog Access**: Allows user to import and export Custom Investment Name instances using the XML Open Gateway interface.
- **Custom Investment Name - Risk, Issue, Change Request - Create**: Allows users to create risks, issues and change requests for custom investments.
- **Custom Investment Name - Risk, Issue, Change Request - Delete - All**: Allows users to delete all risks, issues, and change requests on custom investments for which they have access.
- **Custom Investment Name - Risk, Issue, Change Request - Edit - All**: Allows user to edit and view all risks, issues and change requests for a custom investment items.
- **Custom Investment Name - Risk, Issue, Change Request - View - All**: Allows user to view all risks, issues, and change requests for a custom investment items.
- **Custom Investment Name - Delete - All**: Allows user to delete any Custom Investment. Does not include the Custom Investment - View right.

#### Clarity: To-Dos Access Rights
- **To Do - Navigate**: Allows user access to the To Do pages in Clarity.
- **To Do - View All**: Allows user to view all To Dos in Clarity for which the user has access to view associated objects.
- **To Do - Create All**: Allows user to create To Dos in Clarity for which the user has access to view associated objects.
- **To Do - Edit All**: Allows user to view and edit all To Dos in Clarity for which the user has access to view associated objects.
- **To Do - Delete All**: Allows user to delete all To Dos in Clarity for which the user has access to view To Dos and to view associated objects.
- **Mobile - To Dos - Navigate**: Allows user to access To Dos in Clarity Mobile.

#### Clarity: Pages Access Rights
- **Page - Navigate**: Allows user access to the Pages in Clarity. The user will only be able to view information for Pages to which the user has access.
- **Page - View - All**: Allows user to view all Pages in Clarity.
- **Page - Edit - All**: Allows user to view and edit all Pages in Clarity.
- **Page - Delete - All**: Allows user to delete Pages in Clarity.
- **Page - Create**: Allows user to create Pages in Clarity.

#### Clarity: Integration Mapping Access Rights
- **Integration Mapping - Delete All**: Allows Clarity user to delete all Integration Mapping objects.
- **Integration Mapping - Edit All**: Allows Clarity user to edit all Integration Mapping objects. This includes the page navigate right.
- **Integration Mapping - View All**: Allows Clarity user to view all Integration Mapping objects. This includes the page navigate right.

#### Clarity: Hierarchies Access Rights
- **Hierarchy - Create**: Allows users to create Hierarchy in Clarity. The creator of the Hierarchy automatically becomes the Manager and can edit or delete the Hierarchy.
- **Hierarchy - Delete - All**: Allows users to view and delete all Hierarchies in Clarity.
- **Hierarchy - Edit - All**: Allows users to view and edit all Hierarchies in Clarity.
- **Hierarchy - Navigate**: Allows user access to the Hierarchies pages in Clarity. The user will only be able to view information for Hierarchies to which the user has access.
- **Hierarchy - View - All**: Allows users to view all Hierarchies in Clarity.
- **Hierarchy - Manage Metrics**: Allows users to create, update, and delete Hierarchy Metrics.

#### Clarity: Menu Links Access Rights
- **Menu Links - Create**: Allows users to create new section and new links in Clarity. Includes Menu Links - View - All global access right.
- **Menu Links - Delete - All**: Allows user to delete sections and links in Clarity. Includes Menu Links - View - All global access right.
- **Menu Links - Edit - All**: Allows user to edit the sections and links in Clarity. Includes Menu Links - View - All global access right.
- **Menu Links - Navigate**: Allows user to access the Menu Links page in the Clarity.
- **Menu Links - View - All**: Allows user to view all sections and links in Clarity.

## Administration Access Rights

Assign administrative access rights to grant a resource (user) more advanced permissions to pages, portlets, processes, and jobs. Audit trail, API, software download, license information, resource capacity planning, process, and portfolio access rights are also listed.
- Clarity Administration Access Rights
- Administration Access Rights
- API Access Rights
- Audit Trail Access Rights
- Jobs Access Rights
- License Information Access Group Rights
- Page Access Rights
- Portlet Access Rights
- Portfolio Access Rights
- Process Access Rights
- Scenario Access Rights (Capacity Planning)
- Software Download Access Rights

### Clarity Administration Access Rights

The following access rights are available to manage Clarity administrative tasks:
- **Administration - Navigate**: Allows user access to the Administration workspace in Clarity. The user will only be able to access administration tiles for which they have access. Type: Global
- **Administration - Action Items - Navigate**: Allows user access to Action Items under Administration in Clarity. Type: Global
- **Administration - Actions - Navigate**: Allows user access to the Actions tile under Administration in Clarity. Type: Global
- **Administration - Attributes - Navigate**: Allows user access to the Attributes management page under Administration in Clarity. The user will be able to view information related to attributes and configure attribute security via access groups. Type: Global
- **Administration - Audit - Navigate**: Allows user access to Audit under Administration in Clarity. Type: Global
- **Administration - Authentication & Keys - Navigate**: Allows user access to the Authentication & Keys tile under Administration in Clarity. The user will be able to manage keys, clients and certificates. Type: Global
- **Administration - Blueprints - Navigate**: Allows user access to the Blueprints tile under Administration in Clarity. The user will be able to manage blueprints to which they have access. Optional: Administrators with additional Blueprint access rights can create, edit or delete custom blueprints. Type: Global
- **Administration - Feature Toggles - Navigate**: Allows user access to Feature Toggles under Administration in Clarity. The user can enable or disable feature toggles. Type: Global
- **Administration - Integrations - Navigate**: Allows user access to Integrations under Administration in Clarity. Type: Global
- **Administration - Notifications - Navigate**: Allows user access to Notifications under Administration in Clarity. Type: Global
- **Administration - Plans - Navigate**: Allows user access to the Plans tile under Administration in Clarity. Type: Global
- **Administration - Saved Views - Navigate**: Allows user access to the Saved Views tile under Administration in Clarity. The user can view/edit information related to saved views and share them with specific users and groups. Type: Global
- **Administration - Skills - Navigate**: Allows user access to Skills under Administration in Clarity. Type: Global
- **Administration - Staffing - Navigate**: Allows user access to the Staffing tile under Administration in Clarity. The user must also have the Staffing Scenario - Access right to access the Scenarios tab within the Staffing tile. Type: Global
- **Administration - System Settings - Navigate**: Allows user access to the System Settings tile under Administration in Clarity. Type: Global
- **Administration - Timesheets - Navigate**: Allows user access to the Timesheets tile under Administration in Clarity. Type: Global
- **Administration - Users - Navigate**: Allows user access to the Users tile under Administration in Clarity. Type: Global
- **Administration - Vaia - Navigate**: Allows user access to the Vaia tile under Administration in Clarity. Type: Global
- **Views - Administer**: Allows a user to create and edit Recommended Views, share them with groups and individuals, and delete existing views created by others in Clarity pages where the user has access.

> [!NOTE]
> This permission overrides the Actions configuration in the Clarity. Type: Global

### Administration Access Rights

The following access rights are available to manage administrative tasks:
- **Administration - Access**: Allows the user to access the Administration menu. Users need additional rights to perform individual administrative actions. Type: Global
- **Administration - Application Setup**: Allows users to edit the following options: Classic PPM system options and settings (including Organization and Access menu), Timesheet options, and to create, close, and mark time reporting periods for deletion, Data Administration menu and General Settings menu. Users with this access right can also run the Health Report under the Administration, Security and Diagnostics menu. Includes: Administration - Access to access the Administration menu. Type: Global
- **Administration - Authorization**: Allows users to manage resources and groups. Includes: Administration - Access. Type: Global
- **Administration - Partition Models**: Allows users to manage partition models. Requires: Administration - Access. Type: Global
- **Administration - Resources**: Allows users to navigate to the administration pages for viewing and editing resources. Requires: Resource - Edit Administration right to view individual resources. Type: Global
- **Administration - Studio**: Allows user to access Classic PPM Studio pages. This right allows the user to create, edit, and delete UI Themes. The user can view queries, portlets, and portlet pages. To manage portlets, the user requires the appropriate instance or global rights as listed in the Portlets Access Rights section. To manage objects, the user requires the object Administration right. Type: Global
- **Administration - XOG**: Allows users to import and export information through the XML Open Gateway interface. Type: Global

### API Access Rights

The following access rights are required for REST API access and product integrations:
- **API - Access**: Allows the user to create API Token Keys for creating connections in application that uses the REST APIs. In addition, you need the appropriate application rights to view or update specific functional areas in the product. Note: Users can create API Token Keys with this access right by navigating to their Avatar, API keys page. The system must be enabled for using API Keys.
- **API Integration capabilities**: Allows specific capabilities for the API integration user, like the ability to update read-only custom attributes through REST APIs.

### Audit Trail Access Rights

The following access rights are available for audit:
- **Audit Trail - Access**: Allows users to access audit page. Type: Global
- **Audit Trail - View - All**: Allows users to view any audit page. Type: Global

### Jobs Access Rights

The following access rights are available for managing jobs:
- **Jobs - Access**: Allows users to access job pages. Additional rights such as the Jobs - Run - All right or instance level rights such as the Job - Run right, Job - View Output right, or Job - Edit Properties right are required. Type: Global
- **Job - Edit Properties**: Allows users to view and edit the job properties for specific jobs. This right also lets users reschedule jobs and view output. Type: Global
- **Job - Run**: Allows users to access and run jobs, edit job properties, and view job output. Requires: Jobs - Access access right. Some jobs may not require additional rights for successful execution. See Jobs Reference to review specific job parameters and requirements. Type: Instance
- **Jobs - Run - All**: Allows users to run any job. This right also allows users to schedule any job, edit properties for any job, and view the output of any job. Requires: Jobs - Access access right. Some jobs may not require additional rights for successful execution. See Jobs Reference to review specific job parameters and requirements. Type: Global
- **Jobs - View Output**: Allows users to view the output of the jobs to which they have access. Requires: Jobs - Access right. Type: Global
- **Jobs - View Output - All**: Allows users to view the output of any job. Requires: Jobs - Access right.
- **Jobs - Administrator**: Allows you to manage job definitions and job categories. Type: Global
- **Jobs - Administrator Access**: Allows users to view job definitions. With this right, users can also view jobs categories. Type: Global
- **Jobs - Create Definition**: Allows users to create, edit, and view job definitions. Requires: Jobs - Administrator Access right. Type: Global
- **Jobs - Edit Definition**: Allows users to view and change job definitions. Requires: Jobs - Administrator right. Type: Instance
- **Jobs - Edit Definition - All**: Allows users to edit any job definition. Requires: Jobs - Administrator Access right. Type: Global

### License Information Access Group Rights

To view license information, you must either be associated with the License Information Access group or be assigned each of the access rights. This access group allows users to view and navigate license information pages and portlets and includes the following access rights:
- **Page - View**: Allows users to view a general page in Classic PPM. For instance pages (such as portfolio pages), this right is not required. Type: Instance
- **Portlet - View**: Allows users to view a specific portlet. Type: Instance

### Page Access Rights

The following access rights are available for pages:
- **Page - Create**: Allows users to create Pages in the Clarity. Type: Global
- **Page - Delete - All**: Allows users to delete Pages in the Clarity. Type: Global
- **Page - Edit - All**: Allows users to view and edit all Pages in the Clarity. Type: Global
- **Page - Navigate**: Allows users access to the Pages in the Clarity. The user will only be able to view information for Pages to which the user has access. Type: Global
- **Page - View**: Allows users to view a general page in Classic PPM. For instance pages (such as portfolio pages), this right is not required. Type: Instance
- **Page Definition Editor**: Allows users to edit, view, and delete the definition of a specific page. Required: Administration - Studio access right to access the Classic PPM Studio menu. Type: Instance
- **Page Definition Editor - All**: Allows users to edit, view, and delete the definition of all pages. Required: Administration - Studio access right to access the Classic PPM Studio menu. Type: Global
- **Page Definition Viewer**: Allows the user to view the definition of a specific page. Required: Administration - Studio access right to access the Classic PPM Studio menu. Type: Instance
- **Page Definition Viewer - All**: Allows the user to view the definition of all pages. Required: Administration - Studio access right to access the Classic PPM Studio menu. Type: Global
- **Page Viewer - All**: Lets the user view any configured portlet page. Before the users can view them, link the portlet pages to a menu. The user requires the rights to navigate the menu. For example, if a page links to the Administration menu, the users require the Administration - Access right. Type: Global

### Portlet Access Rights

The following access rights are available for portlets:
- **Portlet - Create**: Allows user to create new portlets in the application. Type: Global
- **Portlet - Edit All**: Allows user to view and edit the definition of all user defined portlets in application. Type: Global
- **Portlet - Navigate**: Allows user to navigate to Portlet configuration pages. Type: Global
- **Portlet Definition Editor**: Allows the user to edit and view the definition of a specific portlet. Requires: Administration - Studio to access the Studio menu. Type: Instance
- **Portlet Definition Editor - All**: Allows a user to edit and view the definitions of all portlets available from Studio. Requires: Administration - Access to access the Administration and Studio menus. Type: Global
- **Portlet - View**: Allows users to view a specific portlet. Type: Instance
- **Portlet Viewer - All**: Lets you view and add stock portlets to portlet pages. The right helps add a stock portlet to a personal dashboard. Type: Global

### Portfolio Access Rights

The following access rights are available to resources, groups, and OBS units to create, view, and edit a portfolio:
- **Portfolio - Navigate**: Allows users to access the Portfolio Management menu. Type: Global
- **Portfolio - Create**: Allows users to create portfolios. Includes: Portfolio - Navigate to access Portfolio Management menu. Type: Global
- **Portfolio - Create Scenarios**: Allows user to create scenarios for a specific portfolio. Requires: Portfolio - Navigate to access the Portfolio Management menu, Portfolio - View to view a specific portfolio. Type: Instance
- **Portfolio - Edit**: Allows users to view, edit, and delete specific portfolios. This right also lets users change the portfolio layout and attach, modify, or delete a scenario. With this right, users can view investments, scenarios, and portlets in the portfolio to which they have access. Requires: Portfolio - Navigate to access the Portfolio Management menu. Type: Instance
- **Portfolio - Edit - All**: Allows users to view, edit, and delete all portfolios. Users can see only the investments, scenarios, and portlets to which they have access. Requires: Portfolio - Navigate to access the Portfolio Management menu. Type: Global
- **Portfolio - Edit Access Rights**: Allows users to view, edit, and delete the access rights for portfolios to which they have access. Requires: Portfolio - Navigate to access the Portfolio Management menu. Type: Instance
- **Portfolio - Edit Access Rights - All**: Allows users to view, edit, and delete the access rights for any portfolio to which they have access. Required: Portfolio - Navigate to access the Portfolio Management menu. Type: Global
- **Portfolio - Manager - Auto (Automatic)**: Automatically assigned when users create an investment or are assigned as the manager of an investment. This right allows users to view, edit, and delete the portfolios that they create. This right also lets users view, edit, and delete the access rights for the portfolio. The Portfolio - Navigate right is required. This access right is equivalent to the Portfolio - Edit access right, and includes the Portfolio - Read, Portfolio - Edit, Portfolio - Delete, and Portfolio - Navigate access rights. If you reassign the portfolio manager, this access right transfers to the new manager, and the previous manager's access rights to this portfolio is revoked. Type: Instance
- **Portfolio - View**: Allows you to view a specific portfolio. Required: Portfolio - Navigate to access the Portfolio Management menu. Type: Instance
- **Portfolio - View Access Rights - All**: Allows users to view the access rights for all Portfolios. Does not include the Portfolio - Navigate or Portfolio - View rights. Requires: Portfolio - Navigate to access the Portfolio Management menu. Type: Global
- **Portfolio - View - All**: Allows users to view all portfolios. Users can view only investments, scenarios, and portlets in the portfolio to which they have access. Requires: Portfolio - Navigate to access the Portfolio Management menu. Type: Global

### Process Access Rights

The following access rights are available to work with processes:
- **Process Access**: Allows the user to access the process pages. Type: Global
- **Process - AutoStart - All**: Allows resource to auto start a new process instance from any of the process definitions in the system. Type: Global
- **Process - Cancel**: Allows users to cancel process instances from a specific process definition. Type: Instance
- **Process - Cancel - All**: Allows users to cancel of all process instances. Type: Global
- **Process - Create Definition** (Instance): Allows users to create or change processes for any object type to which they have access. Users with this right can modify, copy, or start any process that they create. Users can create processes from the Processes page of an object or from the Data Administration, Processes menu. Type: Instance
- **Process - Create Definition** (Global): Allows user to create new process definitions or copy existing process definitions. Type: Global
- **Process - Delete**: Allows users to delete process instances from a specific process definition. Type: Instance
- **Process - Delete - All**: Allows users to delete a process instance from any process definition. Type: Global
- **Process - Edit Definition**: Allows users to edit a specific process definition, but cannot start any process instances. Type: Instance
- **Process - Edit Definition - All**: Allows users to edit all process definitions. Typically, this right is given to administrators and senior executives. Users with this right cannot start processes. Type: Global
- **Process - Manage**: Allows users to start automatically a process instance for the process definition to which they have access. Users can also start a new process instance, delete a process instance, or cancel a process instance. Type: Instance
- **Process - Manage - All**: Allows users to start automatically any process. This right is typically given to administrators and senior executives. Users with this right can change processes that they create and can start processes for objects to which they have access. This access right also allows users to start a new process instance, delete a process instance, or cancel a process instance. Type: Global
- **Process - Start**: Allows users to start a new process instance from a specific process definition. Type: Instance
- **Process - Start - All**: Allows users to start (that is, initiate) of all process instances. Type: Global
- **Process View Instance - All**: Allows users to view all process instances. Type: Global
- **Process - View Definition**: Allows users to view the process definition from the objects to which they have access. Users with this right cannot start processes. Type: Instance
- **Process - View Definition - All**: Allows users to view all process definitions. Typically, this right is administrators and senior executives. Users with this right cannot start processes. Type: Global
- **Process Engine Monitoring**: Allows users to navigate to process engine monitoring and administration. Type: Global
- **Process Notification - XOG Access**: Allows users to import and export Process Notification instances using the XML Open Gateway interface. Type: Global

### Scenario Access Rights (Capacity Planning)

> [!TIP]
> Best Practice: Capacity planning scenarios are designed for you to view a subset of all resources or investments. Limit resources or investments through a security OBS or through instance-level resource access rights. A more manageable amount of data displays for those resources and investments you manage. Additionally, avoid accessing capacity planning scenarios as a Classic PPM administrator or as a user with global access rights to all resources.

The following access rights are available to work with capacity planning scenarios:
- **Scenario - Edit**: Allows users to edit and delete a specific scenario. Includes: Scenario - View and the ability to delete the scenario. Requires: Portfolio - Navigate. Type: Global
- **Scenario - Edit Access Rights**: Allows users to edit access rights for a specific scenario. Requires: Portfolio - Navigate, Portfolio - View, or Scenario - View. Type: Instance
- **Scenario - Manager - Automatic**: When you create a scenario, access is automatically assigned. The access allows you to view, edit, and delete scenarios that you own. You can also view, edit, and delete access for that scenario. Type: Global
- **Scenario - Navigate**: Allows users to view the Scenario toolbar on capacity planning scenario-enabled pages and create new scenarios. Type: Global
- **Scenario - View**: Allows users to view a specific scenario. Requires: Portfolio - Navigate or Portfolio - View. Type: Instance

> [!NOTE]
> In Clarity 16.2.3, the names and descriptions of the Scenario access rights are updated, while the functionality remains unchanged (as detailed above). To learn more, see Change Impact and Upgrade.

### Software Download Access Rights

The following access rights are available for downloading software:
- **Software Download - Microsoft Project Interface**: Allows users to download the Classic PPM Microsoft Project Interface. Type: Global
- **Software Download - Open Workbench**: Required to download Open Workbench. Type: Global

### Advanced Reporting Access Rights

You require the following global access rights to work with this category:
- **Advanced Reporting - Navigate**: Allows the resource to navigate to the Advanced Reporting page. The resource is assigned the `ROLE_USER` Jaspersoft role.
- **Advanced Reporting - Report Create**: Allows the resource to create reports. The resource is assigned the `ROLE_REPORT_DESIGNER` Jaspersoft role. Required: Advanced Reporting - Navigate access right.
- **Advanced Reporting - Administer**: Allows the resource to administer Advanced Reporting. The resource is assigned the `ROLE_ADMINISTRATOR` Jaspersoft role. Required: Advanced Reporting - Navigate access right.
- **Advanced Reporting - Dashboard Create**: Allows the resource to create dashboards. The resource is assigned to the `ROLE_DASHBOARD_DESIGNER` Jaspersoft role. Required: Advanced Reporting - Navigate access right.
- **Advanced Reporting - Ad Hoc Create**: Allows the resource to create ad hoc views. The resource is assigned to the `ROLE_ADHOC_DESIGNER` Jaspersoft role. Required: Advanced Reporting - Navigate access right.
- **Advanced Reporting - Data Source Create**: Allows the resource to create data sources. The resource is assigned the `ROLE_DATASOURCE_DESIGNER` Jaspersoft role. Required: Advanced Reporting - Navigate access right.
- **Advanced Reporting - Domain Create**: Allows the resource to create domains. The resource is assigned the `ROLE_DOMAIN_DESIGNER` Jaspersoft role. Required: Advanced Reporting - Navigate access right.

## Demand Management Access Rights

You require the following demand management access rights to work with this category:
- Idea Access Rights
- Resource Roles (Idea)
- Resource Access Rights (Idea)
- Financial Access Rights for Ideas
- Incident Access Rights
- Resource Roles (Incident)

### Idea Access Rights

The following access rights are required to work with ideas:
- **Idea - Approve - All**: Lets you approve all ideas. Type: Instance
- **Idea - Approve**: Allows user to approve a specific idea. Type: Instance
- **Ideas - Create**: Allows you to create instances of the idea object. The right includes the Ideas - Navigate access. Type: Instance
- **Idea - Edit - All**: Lets you edit all ideas. The access right includes the Idea - View access and the ability to delete all ideas. Type: Instance
- **Idea - Edit**: Allows user to edit a specific idea. The access right includes the Idea - View access right and the ability to delete a specific idea. The right does not include the Ideas - Navigate access right. Type: Instance
- **Idea - Edit Access Rights - All**: Lets you edit the access rights for all ideas. The right does not include the Ideas - Navigate or Idea - View access. Type: Instance
- **Idea - Edit Access Rights**: Allows user to edit the access rights for a specific idea. The right does not include the Ideas - Navigate or Idea - View access rights. Type: Instance
- **Idea - Hierarchy - Parents - Add - All**: Lets you add investments to the Parent Hierarchy for any idea. Type: Instance
- **Idea - Hierarchy - Parents - Add**: Allows users to add investments to the Parent Hierarchy for a specific idea. Type: Instance
- **Idea - Hierarchy - Parents - Edit - All**: Lets you edit investments in the Parent Hierarchy for any idea. Type: Instance
- **Idea - Hierarchy - Parents - Edit**: Allows users to edit investments in the Parent Hierarchy for a specific idea. Type: Instance
- **Idea - Hierarchy - Parents - View - All**: Lets you view investments in the Parent Hierarchy for any idea. Type: Instance
- **Idea - Hierarchy - Parents - View**: Allows user to view investments in the Parent Hierarchy for a specific idea. Type: Instance
- **Idea - Initiator (Auto)**: The right is automatically granted to the Originating Requestor of the idea when an idea is created if an Idea Manager is not specified. Automatically, this right is revoked when an Idea Manager is specified. Type: Instance
- **Idea - Manager (Auto)**: The right is automatically granted to the Idea Manager. The Idea Manager can edit general Properties, Links, and Conversations on the Idea. This right allows the Idea Manager view the Idea's parents in the Hierarchy tab of the Idea in Classic PPM. However, the Idea Manager needs additional access rights to manage other aspects of the idea such as booking staff, managing Risks, Issues, and Change Requests, and managing financials. Type: Instance
- **Ideas - Navigate**: Lets the user navigate to the Ideas pages to include the right to view the Ideas link. Type: Instance
- **Idea - View**: Allows user to view a specific idea. The right does not include the Ideas - Navigate access right. Type: Instance
- **Idea - View - All**: Lets you view all ideas. The right includes the Ideas - Navigate access. Type: Instance
- **Idea Management - Navigate**: Allows user access to the Idea Management page in Clarity. The user will only be able to view information for ideas to which they have access. Type: Instance

### Resource Roles (Idea)

No idea-specific roles exist in Classic PPM. You can add the appropriate roles to work with ideas based on the instance and global access rights provided. For example, you can set up the following roles to work with ideas:
- **Manager**: The idea manager has implicit access rights to the ideas created.
- **Approver**: The approver of the idea has access to approve or reject ideas, or to set ideas as incomplete.

### Resource Access Rights (Idea)

The following resource rights are also available when managing ideas:
- **Resource - Approve Ideas**: Allows the user to approve Ideas for a specific Resource. Includes the Resource - Edit Ideas access right. Type: Instance
- **Resource - Approve Ideas - All**: Lets the user approve Ideas for all Resources. Includes the Resource - Edit Ideas All access right. Type: Global
- **Resource - Edit Ideas**: Allows the user to edit and delete ideas for a specific Resource. Includes the Resource - View Ideas access right but not the Ideas - Navigate access right. Type: Instance
- **Resource - Edit Ideas - All**: Allows the user to edit and delete ideas for all resources and the Resource - View Ideas All access right. Type: Global
- **Resource - Enter Time**: The right allows the user to complete, submit, and reject timesheets for a resource. The Timesheets link appears on the Personal page. Type: Instance
- **Resource - Self (Auto)**: The right is automatically granted to the resource and includes the Resource - Edit Ideas access right. Type: Instance
- **Resource - View Ideas**: Allows the user to view ideas for a specific resource. Includes the ability to delete Ideas, but does not include the Ideas - Navigate access right. Type: Instance
- **Resource - View Ideas - All**: Allows the user to view ideas for all resources. Includes the ability to delete ideas and the Ideas - Navigate access right. Type: Global

### Financial Access Rights for Ideas

You require the following access rights to work with the financial plans for ideas:
- **Idea - View Financial Information All**: Allows resources to view financial properties of all ideas.
- **Idea - Edit Financial Information All**: Allows resources to edit financial properties of all ideas. This right allows the resource to view the Financial subpage only for those ideas to which the resource has access. This access right does not allow the resource to view all the ideas.
- **Idea - Benefit Plan - Edit All**: Allows resource to edit all the Idea benefit plans.
- **Idea - Benefit Plan - View All**: Allows resource to view all the Idea benefit plans.
- **Idea - Budget Plan - Approve All**: Allows resource to approve all the Idea budget plans.
- **Idea - Budget Plan - Edit All**: Allows resource to edit all the Idea budget plans.
- **Idea - Budget Plan - View All**: Allows resource to view all the Idea budget plans.
- **Idea - Cost Plan - Edit All**: Allows resource to edit all the Idea cost plans.
- **Idea - Cost Plan - View All**: Allows resource to view all the Idea cost plans.
- **Idea - Financial Plan - Submit All for Approval**: Allows resource to submit all the Idea financial plans for approval.

### Incident Access Rights

Incidents are typically short-lived. You can have many incidents at any given time. The access rights to incidents are governed from incident categories. You can see only the incidents that are mapped to categories to which you have access rights. Your Classic PPM administrator can assign access rights to incidents, or the Incident Manager can assign access rights within the incident instance.

You require the following access rights to work with incidents and incident categories:
- **Incidents - Access**: Allows the user to access the incident pages. Type: Global
- **Incidents - Administrate**: Allows the user to access the incident administration pages, and administer the category-investment mapping, category-group mapping, and priority setup. Type: Global
- **Incidents - Create**: Allows the user to create and edit incidents, giving limited access to the incident properties. Includes the Incidents - Access access right. Type: Global
- **Incident - Create/Edit**: Allows the user to create new incidents and edit a specific incident. Type: Instance
- **Incidents - Create/Edit - All**: Allows the user to create and edit incidents on the incident pages. Includes the Incidents - Access and Incidents - Select Category - All access rights. Type: Global
- **Incidents - Manage Category Incidents**: Allows the user to manage incidents that are mapped to a specific category. Includes the Incidents - Select Category access right. Type: Instance
- **Incidents - Override Priority**: Allows the user to override the priority of the incident to which the user has access. Resources with the access right can view the Override Priority field on the Incident Properties page. Type: Global
- **Incidents - Select Category**: Allows a resource to select a specific incident category. Type: Instance
- **Incidents - Select Category - All**: Allows the user to select all categories on the incident pages. Includes the Incidents - Access access right. Type: Global

### Resource Roles (Incident)

No default incident-specific roles exist. You can add the appropriate roles to work with incidents based on the instance and global access rights provided. For example, you can set up the following roles to work with incidents:

| Role | Description |
|------|-------------|
| **IT Administrator** | Assign this role to resources responsible for setting up, administering, and assigning investments to incident categories. |
| **IT Manager** | Assign this role to resources responsible for assigning incidents. |
| **IT Worker** | Assign this role to resources responsible for working on and resolving incidents. The default page that appears for an IT worker is Assigned to Me. |
| **Requestor** | Assign this role to resources responsible for logging new incidents. Requestors have a limited view of the incident properties. |

## Earned Value Manager (EVM) Add-In Access Rights

You require the following Earned Value Manager (EVM) access rights to work with this add-in:
- Earned Value Manager (EVM) Create, Edit, View, and Delete Access Rights
- Earned Value Manager (EVM) Job Access Rights

### Earned Value Manager (EVM) Create, Edit, View, and Delete Access Rights

To create, edit, view, and delete EVM information, you must have the following access rights:
- **Agency - Create**: Allows you to create agencies. This right includes the page navigation right. Type: Global
- **Agency - Edit**: Allows you to edit a specific agency. This right does not include the Agency - Navigate access right. Type: Instance
- **Agency - Edit Access Rights**: Allows you to edit access rights for a specific agency. This right does not include the Agency - Navigate or the Agency - View access rights. Type: Instance
- **Agency - Edit - All**: Allows you to edit all agencies. This right includes the Agency - View - All access right. Type: Global
- **Agency - Navigate**: Allows you to navigate to agency pages. You need additional rights to view individual agencies. Type: Global
- **Agency - View**: Allows you to view a specific agency. This right does not include the Agency - Navigate access right. Type: Instance
- **Agency - View Access Rights**: Allows you to view access rights for a specific Agency. This right does not include the Agency - Navigate or the Agency - View access right. Type: Instance
- **Agency - View Access Rights - All**: Allows you to view access rights for all agencies. This right does not include the Agency - Navigate or the Agency - View access rights. Type: Global
- **Agency - View - All**: Allows you to view all agencies. This right includes the Agency - Navigate access right. Type: Global
- **Contract - Baseline Delete**: Allows you to delete baselines for a specific contract. This right requires you to have the Contract - Edit access right. Type: Instance
- **Contract - Baseline Delete - All**: Allows you to delete baselines for all contracts. This right requires you to have the Contract - Edit access right. Type: Global
- **Contract - Baseline Edit**: Allows resources to create and update baselines for a specific Contract. Requires the user to have the Contract - Edit access right. Type: Instance
- **Contract - Baseline Edit - All**: Allows resources to create and update baselines for all contracts. Requires users to have the Contract - Edit access right. Type: Global
- **Contract - Create**: Allows you to create contracts. This right includes the page navigation right. Type: Global
- **Contract - Edit**: Allows you to edit a specific contract. This right does not include the Contract - Navigate access right. This right includes the ability to edit and delete CWBS elements, control accounts, SLPPs, and work packages for a specific contract. Type: Instance
- **Contract - Edit - All**: Allows you to edit all contracts. This right includes the ability to delete contracts and the Contracts - View - All access right. This right includes the ability to edit and delete CWBS elements, control accounts, summary level planning packages (SLPP), and work packages. Type: Global
- **Contract - Edit Access Rights**: Allows you to edit access rights for a specific contract. This right does not include the Contract - Navigate or the Contract - View access rights. Type: Instance
- **Contract - Edit Access Rights - All**: Allows you to edit access rights for all contracts. This right does not include the Contract - Navigate or the Contract - View access rights. Type: Global
- **Contract - Edit only**: Allows you to edit but not delete a specific contract. This right does not include the Contract Navigate access right. This right includes the ability to edit but not delete CWBS elements, control accounts, SLPPs, and work packages for a specific contract. Type: Instance
- **Contract - Edit only - All**: Allows you to edit but not delete all contracts. Includes the Contracts - View - All access right. This right includes the ability to edit but not delete CWBS elements, control accounts, SLPPs, and work packages. Type: Global
- **Contract - Manager (Auto)**: Automatic access that is right granted to the manager of a specific contract. This right includes the ability to edit and delete CWBS elements, control accounts, SLPPs, and work packages on a specific contract. Type: Instance
- **Contract - Navigate**: Allows you to navigate to Contract pages. You need additional access rights to view individual contracts. Type: Global
- **Contract - View**: Allows you to view a specific contract. The right does not include the Contract - Navigate access right. Type: Instance
- **Contract - View - All**: Allows you to view all contracts. This right includes the Contract - Navigate access right. Type: Global
- **Contract - View Access Rights**: Allows you to view access rights for a specific contract. This right does not include the Contract - Navigate or the Contract - View access rights. Type: Instance
- **Contract - View Access Rights - All**: Allows you to view access rights for all contracts. This right does not include the Contract - Navigate or the Contract - View access rights. Type: Global
- **Control Account - Create**: Allows you to create control accounts. This right includes the ability to create work packages. Type: Global
- **Control Account - Edit**: Allows you to edit a specific control account. This right does not include the Control Account Navigate access right. The right includes the ability to edit and delete work packages on a specific control account. Type: Instance
- **Control Account - Edit - All**: Allows you to edit all control accounts. This right includes the Control Account - View All access right. The right includes the ability to edit and delete all work packages. Type: Global
- **Control Account - Edit Access Rights**: Allows you to edit access rights for a specific control account. The right does not include the Control Account - Navigate or Control Account - View access right. Type: Instance
- **Control Account - Edit Access Rights - All**: Allows you to edit access rights for all control accounts. This right does not include the Control Account - Navigate or the Control Account - View access rights. Type: Global
- **Control Account - Manager (Auto)**: Automatic right that is granted to the manager of a specific control account. This right includes the ability to create, edit, and delete work packages on a specific control account. Type: Instance
- **Control Account - Navigate**: Allows you to navigate to control account pages. You need additional access rights to view individual control accounts. Type: Global
- **Control Account - View**: Allows you to view a specific control account. This right does not include the Control Account - Navigate access right. The right includes the ability to view work packages on a specific control account. Type: Instance
- **Control Account - View Access Rights**: Allows you to view access rights for a specific control account. This right does not include the Control Account - Navigate or the Control Account - View access rights. Type: Instance
- **Control Account - View Access Rights - All**: Allows you to view access rights for all control accounts. This right does not include the Control Account - Navigate or the Control Account - View access right. Type: Global
- **Control Account - View - All**: Allows you to view all control accounts. This right includes the Control Account Navigate access right. This right includes the ability to view all work packages. Type: Global

### Earned Value Manager (EVM) Job Access Rights

To manage any EVM job, you must have the following access rights:
- **Jobs - Access**: Allows users access to jobs pages. Additional rights such as the Jobs - Run - All right or instance level rights such as the Job - Run right, Job - View Output right, or Job - Edit Properties right are required. Type: Global
- **Job - Edit Properties**: Allows users to view and edit the job properties for specific jobs. This right also lets users reschedule jobs and view output. Type: Global
- **Job - Run**: Allows users to access and run jobs, edit job properties, and view job output. Requires: Jobs - Access right. Type: Global
- **Jobs - Run - All**: Allows users to run any job. This right also allows users to schedule of any job, edit of job properties for any job and view the output of any job.
- **Jobs - View Output**: Allows users to view the output of the jobs to which they have access. Requires: Jobs - Access right. Type: Global
- **Jobs - View Output - All**: Allows users to view the output of any job. Requires: Jobs - Access right.
- **Jobs - Administrator Access**: Allows users to view job definitions. With this right, users can also view job categories. Type: Global
- **Jobs - Create Definition**: Allows users to create, edit, and view job definitions. Requires: Jobs - Administrator Access right. Type: Global
- **Jobs - Edit Definition**: Allows users to view and change job definitions. Requires: Jobs - Administrator right. Type: Instance
- **Jobs - Edit Definition - All**: Allows users to edit any job definition. Requires: Jobs - Administrator Access right. Type: Global

## Financial Management Access Rights

You require the following financial management access rights to work with this category:
- Financial Administration
- Financial Management
- Financial Planning
- Financial Departments
- Financial Locations

### Financial Administration

Users must be granted the following access rights if they are responsible for setting up structures:
- **Administration - Access**: Allows the user to access the Administration menu. Type: Global
- **Financial Maintenance - Financial Organizational Structure**: Allows user to configure financial setup and Chargebacks. This includes the ability to set up financial processing and setup, WIP settings, GL accounts, standard rules, credit rules, overhead rules, and messages. This right is dependent on the Administration - Access right being granted. This right does not include the Location - Navigate right to manage locations. Required: Administration - Navigate. Type: Global

### Financial Management

Users must be granted the following access rights to set up financial data, process and monitor transactions, and process and monitor the financial cost/rate matrix:
- **Financial Maintenance - Financial Management**: Allows users to access financial management setup features in the Administration menu. Type: Global
- **Financial Maintenance - Define Matrix**: Allows user to define financial cost plus codes. This right is dependent on the Administration - Access right being granted. Type: Global
- **Financial Maintenance - Manage Matrix**: Allows user to define financial cost or rate matrices. This right allows user to create, edit, and view cost or rate matrices; configure matrix columns; and enter rows to create matrix rules. The right also includes the capability to copy, delete, and lock or unlock matrices. This right is dependent on the Administration - Access right being granted. Type: Global

### Financial Planning

Users must be granted the following access rights to manage cost, benefit, and budget financial plans for any investment type:
- **`<Investment>` - Benefit Plan - Edit**: Allows the user to edit the benefit plans for a specific instance of the selected investment type. Type: Instance
- **`<Investment>` Benefit Plan - Edit All**: Allows the user to edit all benefit plans for the specified investment type. Type: Global
- **`<Investment>` - Benefit Plan - View**: Allows the user to view the benefit plans for a specific instance of the selected investment type. Type: Instance
- **`<Investment>` Benefit Plan - View All**: Allows the user to view all benefit plans for the specified investment type. Type: Global
- **`<Investment>` - Budget Plan - Approve**: Allows the user to approve the budget plans for a specific instance of the selected investment type. Type: Instance
- **`<Investment>` Budget Plan - Approve All**: Allows the user to approve all budget plans for the specified investment type. Type: Global
- **`<Investment>` - Budget Plan - Edit**: Allows the user to edit the budget plans for a specific instance of the selected investment type. Type: Instance
- **`<Investment>` Budget Plan - Edit All**: Allows the user to edit all budget plans for the specified investment type. Type: Global
- **`<Investment>` - Budget Plan - View**: Allows a resource to view the budget plans for a specific instance of the selected investment type. Type: Instance
- **`<Investment>` Budget Plan - View All**: Allows the user to view all budget plans for the specified investment type. Type: Global
- **`<Investment>` - Cost Plan - Edit**: Allows the user to edit the cost plans for a specific instance of the selected investment type. Type: Instance
- **`<Investment>` Cost Plan - Edit All**: Allows the user to edit all cost plans for the specified investment type. Type: Global
- **`<Investment>` - Cost Plan - View**: Allows the user to view the cost plans for a specific instance of the selected investment type. Type: Instance
- **`<Investment>` Cost Plan - View All**: Allows the user to view all cost plans for the specified investment type. Type: Global
- **Cost Plan - XOG Access**: Allows the user to import and export cost plan instances using the XML Open Gateway interface. Type: Global
- **Budget Plan - XOG Access**: Allows the user to import and export budget plan instances using the XML Open Gateway interface. Type: Global
- **Benefit Plan - XOG Access**: Allows the user to import and export benefit plan instances using the XML Open Gateway interface. Type: Global

### Financial Departments

Users must be granted the following access rights to work with departments:
- **Department - Create**: Allows users to create departments. Includes: Department - Navigate right. Type: Global
- **Department - Edit**: Lets the user edit and delete specific departments. Includes: Department - View access right. Requires: Department - Navigate right. Type: Instance
- **Department - Edit - All**: Allows users to edit and delete all departments. Includes: Department - View - All right. Type: Global
- **Department - Edit Access Rights**: Allows users to edit the access rights for a specific department. Requires: Department - Navigate right and Department - View right. Type: Instance
- **Department - Edit Access Rights - All**: Allows users to edit access rights for all departments. Requires: Department - Navigate right and Department - View right. Type: Global
- **Department - Navigate**: Lets the user navigate to department pages. Requires: Department - View - All right. Type: Global
- **Department - View**: Allows users to view specific departments. Requires: Department - Navigate right. Type: Instance
- **Department - View - All**: Allows users to view all departments. Includes: Department - Navigate right. Type: Global

### Financial Locations

Users must be granted the following access rights to work with locations:
- **Location - Create**: Allows users to create locations. Type: Global
- **Location - Edit**: Allows users to edit specific locations. Type: Instance
- **Location - Edit - All**: Allows users to edit all locations. Type: Global
- **Location - Navigate**: Allows users to navigate to location pages. This right is dependent on the Financial Maintenance - Financial Organizational Structure and the Administration - Access access rights being granted. To view or administer locations, the user requires the Location - View - All or the Location - Edit - All right access rights. Type: Global
- **Location - View**: Allows users to view specific locations. Type: Instance
- **Location - View - All**: Allows users to view all locations. Type: Global

## IT Service Management Access Rights

### Service Access Rights

Before you begin working with services, you must have the necessary access rights. If you require access to additional modules, contact your Classic PPM administrator. The following access rights are available to access, view, or edit services:
- **Service - Approve All**: Allows resource to approve all instances of this object type. Type: Global
- **Service - Create**: Lets the resource create service. This access right includes the right to navigate to the service pages. Type: Global
- **Service - Edit**: Lets the resource edit only selected service. Includes the ability to delete the service. Type: Instance
- **Service - Edit - All**: Lets the user edit all Services. Includes the ability to delete Services, and the Service - View - All access right. Type: Global
- **Service - Edit Access Rights**: Allows resource to edit only selected service access rights. Type: Instance
- **Service - Edit Access Rights - All**: Lets the user edit the access rights for all Services. Does not include the Service Navigate or Service - View access rights. Type: Global
- **Service - Edit Allocation Information**: Allows resource to edit chargeback rules only for selected service. Type: Instance
- **Service - Edit Chargebacks Information**: Allows user to edit chargeback rules for service. Type: Instance
- **Service - Edit Chargebacks Information All**: Allows user to edit chargeback rules for service. Type: Global
- **Service - Modify Baseline**: Allows resource to create and update baselines for a specific Service. Requires the user to have the Service - Edit access right. Type: Instance
- **Service Investment - Modify Baseline - All**: Allows resource to create and update baselines for all Projects. Requires the user to have the Project - Edit access right. Type: Global
- **Service - Navigate**: Lets the user navigate to Service pages. The user requires additional access rights to view individual Services. Type: Global
- **Service - Reverse Charges**: Allows resource to reverse charges only for selected service. Type: Instance
- **Service - View**: Lets the resource view only the selected service. Type: Instance
- **Service - View - All**: Lets the user view all Services. Includes the Service - Navigate access right. Type: Global
- **Service - View Allocations**: Allows resource to view allocations only for selected service. Type: Instance
- **Service - View Allocations - All**: Allows resource to access chargebacks for all services. Type: Global
- **Service - View Chargebacks Information**: Allows user to view chargeback rules for service. Type: Instance
- **Service - View Chargebacks Information All**: Allows user to view chargeback rules for service. Type: Global
- **Service Investment - Modify Baseline - All**: Allows a resource to baseline all service investments. The access right also allows a resource to view the general properties and processes for service investments. Type: Global

### Customer Department Manager Access Rights

The following access rights are required for a Customer Department Manager:
- **Department - Edit**: Lets the user edit and delete specific departments. Includes: Department - View access right. Requires: Department - Navigate right. Type: Instance
- **Department - Navigate**: Lets the user navigate to department pages. Requires: Department - View - All right. Type: Global
- **Department - View Chargeback Information**: Lets the user view invoices and recovery statements of specific departments. Type: Instance
- **Ideas - Create**: Allows you to create instances of the idea object. The right includes the Ideas - Navigate access. Type: Global
- **Ideas - Navigate**: Lets the user navigate to the Ideas pages to include the right to view the Ideas link. Type: Global
- **Page Viewer - All**: Lets the user view any configured portlet page. Type: Global
- **Portlet Viewer - All**: Lets you view and add stock portlets to portlet pages. Type: Global
- **Resource - Approve Ideas - All**: Lets the user approve Ideas for all Resources. Includes the Resource - Edit Ideas - All access right. Type: Global
- **Service - Edit**: Lets the resource edit only selected service. Includes the ability to delete the service. Type: Instance
- **Service - View**: Lets the resource view only the selected service. Type: Instance

### IT Manager Access Rights

The following instance-level access rights are required for an IT Manager:
- **Department - Edit**: Lets the user edit and delete specific departments. Type: Instance
- **Department - Navigate**: Lets the user navigate to department pages. Type: Global
- **Department - View Chargeback Information**: Lets the user view invoices and recovery statements of specific departments. Type: Instance
- **Ideas - Navigate**: Lets the user navigate to the Ideas pages. Type: Global
- **Page Viewer - All**: Lets the user view any configured portlet page. Type: Global
- **Portlet Viewer - All**: Lets you view and add stock portlets to portlet pages. Type: Global
- **Service - Create**: Lets the resource create service. Type: Global
- **Service - Edit - All**: Lets the user edit all Services. Type: Global
- **Service - Edit Access Rights - All**: Lets the user edit the access rights for all Services. Type: Global
- **Service - Navigate**: Lets the user navigate to Service pages. Type: Global
- **Service - View - All**: Lets the user view all Services. Type: Global
- **Service Investment - Modify Baseline - All**: Allows resource to create and update baselines for all Services. Type: Global

### Service Manager Access Rights

The following access rights are required for a Service Manager:
- **Timesheets - Navigate**: Allows you to navigate to timesheet pages. Type: Global
- **Department - View**: Allows users to view specific departments. Type: Instance
- **Department - View Chargeback Information**: Lets the user view invoices and recovery statements of specific departments. Type: Instance
- **Page Viewer - All**: Lets the user view any configured portlet page. Type: Global
- **Portlet Viewer - All**: Lets you view and add stock portlets to portlet pages. Type: Global
- **Service - Edit**: Lets the resource edit only selected service. Type: Instance
- **Service - Navigate**: Lets the user navigate to Service pages. Type: Global
- **Service - View**: Lets the resource view only the selected service. Type: Instance

### Provider Department Manager Access Rights

The following access rights are required for a Provider Department Manager:
- **Department - Edit**: Lets the user edit and delete specific departments. Type: Instance
- **Department - Navigate**: Lets the user navigate to department pages. Type: Global
- **Department - View Chargeback Information**: Lets the user view invoices and recovery statements of specific departments. Type: Instance
- **Page Viewer - All**: Lets the user view any configured portlet page. Type: Global
- **Portlet Viewer - All**: Lets you view and add stock portlets to portlet pages. Type: Global
- **Service - Edit**: Lets the resource edit only selected service. Type: Instance
- **Service - Navigate**: Lets the user navigate to Service pages. Type: Global
- **Service - View**: Lets the resource view only the selected service. Type: Instance

## New Product Development (NPD) Accelerator Access Rights

You require the following New Product Development (NPD) access rights to work with this accelerator:
- Executive User Group Access Rights
- Marketing Manager User Group Access Rights
- Non-Clarity User Group Access Rights
- Product Portfolio Manager User Group Access Rights
- Project Portfolio Manager User Group Access Rights
- Team Member User Group Access Rights

### Executive User Group Access Rights

The Executive user group access rights provide a collection of security rights for users at an executive, or director level and require insight into portfolios of projects, products, and ideas, and also participate in gate scoring.

**Instance Rights:**
- Page - View
- Process - Start (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Gate Scoring - View All
- Idea - Hierarchy - Parents - View - All
- Idea - View All
- Ideas - Create
- Portfolio - Navigate
- Portfolio - View All
- Portlet Viewer - All
- Product - View All
- Product - View Chargebacks Information All
- Product - View Financial Information All
- Product - Benefit Plan - View All
- Project Budget Plan - View All
- Project - Cost Plan - View All
- Project - Edit Management - All
- Project - Hierarchy - Financial Rollup - View - All
- Project - Risk, Issue, Change Request - View - All
- Project - View Financial - All
- Project - View Management - All
- Project - View Requisitions - All
- Project - View Tasks - All
- Project Benefit Plan - View All
- Resource - View All
- Resource - View Book - All
- Resource - View Financial - All

**Portlet Pages (Dashboards):** Executive Dashboard

### Marketing Manager User Group Access Rights

The Marketing Manager user group access rights provide a collection of security rights for users that manage ideas and facilitate movement of ideas into the scoring process.

**Instance Rights:**
- Page - View
- Process - Cancel (on each NPD Accelerator process)
- Process - Start (on each NPD Accelerator process)
- Process - View Definition (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Gate Scoring - Navigate
- Idea - Hierarchy - Parents - Add - All
- Ideas - Create
- Portlet Viewer - All
- Resource - Navigate
- Resource - View All
- Timesheets - Navigate

**Portlet Pages (Dashboards):** Idea Management Dashboard

### Non-Clarity User Group Access Rights

The Non-Clarity User group access rights provide a collection of security rights for users that infrequently access Classic PPM but still require submitting product ideas.

**Instance Rights:**
- Page - View
- Process - Start (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Ideas - Create
- Portlet Viewer - All

**Portlet Pages (Dashboards):** Idea Management Dashboard: Overview and Idea Vault

### Product Portfolio Manager User Group Access Rights

The Product Portfolio Manager user group access rights provide a collection of security rights for users that manage products and portfolios and participate in gate scoring.

**Instance Rights:**
- Page - View
- Portfolio - Create Scenarios (on Product Master)
- Portfolio - Edit (on Product Master)
- Process - Cancel (on each NPD Accelerator process)
- Process - Start (on each NPD Accelerator process)
- Process - View Definition (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Department - View - All
- Gate Scoring - Navigate
- Idea - Hierarchy - Parents - Add - All
- Ideas - Create
- Portfolio - Create
- Portfolio - View - All
- Portlet - Viewer - All
- Product - Benefit Plan - Edit All
- Product - Budget Plan - Edit All
- Product - Cost Plan - Edit All
- Product - Create
- Resource - Navigate
- Resource - Soft Book All
- Resource - View - All
- Timesheets - Navigate

**Portlet Pages (Dashboards):** Idea Management Dashboard, Executive Dashboard

### Project Portfolio Manager User Group Access Rights

The Project Portfolio Manager user group access rights provide a collection of security rights for users that manage projects and portfolios and participate in gate scoring.

**Instance Rights:**
- Page - View
- Portfolio - Create Scenarios (on Project Master)
- Portfolio - Edit (on Project Master)
- Process - Cancel (on each NPD Accelerator process)
- Process - Start (on each NPD Accelerator process)
- Process - View Definition (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Department - View - All
- Gate Scoring - Navigate
- Ideas - Create
- Portfolio - View - All
- Portlet Viewer - All
- Project - Benefit Plan - Edit All
- Project - Budget Plan - Edit All
- Project - Cost Plan - Edit All
- Project - Create
- Project - Create from Template
- Project - Risk, Issue, Change Request - Delete - All
- Project - Risk, Issue, Change Request - Edit - All
- Resource - External - Access
- Resource - Navigate
- Resource - Soft Book - All
- Resource - View All
- Timesheets - Navigate

**Portlet Pages (Dashboards):** Idea Management Dashboard, Portfolio Management Dashboard

### Team Member User Group Access Rights

The Team Member user group access rights provide a collection of security rights for users who are assigned as resources to projects and products in Classic PPM. The users also mainly enter timesheets and upload documents to a project.

**Instance Rights:**
- Page - View
- Process - Start (on each NPD Accelerator process)
- Project - Risk, Issue, Change Request - View (on the NPD Accelerator template)
- Project - View (on the NPD Accelerator template)
- Project - View Management (on the NPD Accelerator template)

**Global Rights:**
- Ideas - Create
- Portlet Viewer - All
- Project - View Tasks - All
- Timesheets - Navigate

**Portlet Pages (Dashboards):** Idea Management Dashboard: Overview and Idea Vault

## PMBOK Guide Accelerator Access Rights

The PMBOK Guide Accelerator includes access groups. Each access group includes access rights that allow group members access to secured Classic PPM pages, dashboards, portlets, and documents. The following access groups are included in the PMBOK Guide Accelerator:
- PBK Administrator Group
- PBK Executive Group
- PBK Project Manager Group
- PBK Team Member Group

### PBK Administrator Group

Members of this access group are administrators that set up Classic PPM and the PMBOK Guide Accelerator. The project team can then begin working with their projects. Members of this group are granted the following access rights:
- PMBOK Guide Accelerator Access Rights for Administrator Group
- Classic PPM Access Rights for Administrator Group

#### PMBOK Guide Accelerator Access Rights for Administrator Group

The following access rights are included with this group:
- **Lessons Learned - Create**: Allows the resource to create lessons learned documents. This includes the page navigation right. Type: Global
- **Lessons Learned - Edit All**: Allows the resource to edit all lessons learned documents. This includes the page navigation right. Type: Global
- **Lessons Learned - View All**: Allows resource to view all lessons learned documents. This includes the page navigation right. Type: Global
- **Lessons Learned - XOG Access**: Allows the user to import and export lessons learned data using the XML Open Gateway interface. Type: Global
- **Product Description - Create**: Allows the resource to create product description documents. This includes the page navigation right. Type: Global
- **Product Description - Edit All**: Allows the user to edit all product description documents. Type: Global
- **Product Description - View All**: Allows the user to view all product description documents. Type: Global
- **Product Description - XOG Access**: Allows the user to import and export product description documents using the XML Open Gateway interface. Type: Global
- **Project Charter - Create**: Allows the resource to create project charter documents. This includes the page navigation right. Type: Global
- **Project Charter - Edit All**: Allows the resource to edit all project charter documents. This includes the page navigation right. Type: Global
- **Project Charter - View All**: Allows resource to view all project charter documents. This includes the page navigation right. Type: Global
- **Project Charter - XOG Access**: Allows the user to import and export project charter documents using the XML Open Gateway interface. Type: Global
- **Project Closure - Create**: Allows the resource to create project closure documents. This includes the page navigation right. Type: Global
- **Project Closure - Edit All**: Allows the resource to edit all project closure documents. Type: Global
- **Project Closure - View All**: Allows resource to view all project closure documents. This includes the page navigation right. Type: Global
- **Project Closure - XOG Access**: Allows the user to import and export project closure documents using the XML Open Gateway interface. Type: Global
- **Project Conversion - Create**: Allows the resource to create project conversion objects. This includes the page navigation right. Type: Global
- **Project Conversion - Edit All**: Allows the resource to edit all project conversion objects. This includes the page navigation right. Type: Global
- **Project Conversion - Navigate**: Allows the resource to navigate to project conversion pages. Type: Global
- **Project Conversion - View All**: Allows the resource to view all project conversion objects. This includes the page navigation right. Type: Global
- **Project Conversion - XOG Access**: Allows the resource to import and export project conversion instances using the XML Open Gateway interface. Type: Global
- **Project Report - Create**: Allows the resource to create project reports. This includes the page navigation right. Type: Global
- **Project Report - Edit All**: Allows the resource to edit all project report documents. Type: Global
- **Project Report - View All**: Allows the user to view all project report documents. Type: Global
- **Project Report - XOG Access**: Allows the user to import and export project reports using the XML Open Gateway interface. Type: Global
- **Project Scope Statement - Create**: Allows the resource to create project scope statements. This includes the page navigation right. Type: Global
- **Project Scope Statement - Edit All**: Allows the resource to edit all project scope statements. This includes the page navigation right. Type: Global
- **Project Scope Statement - View All**: Allows the user to view all project scope statement documents. Type: Global
- **Project Scope Statement - XOG Access**: Allows the user to import and export project scope statements using the XML Open Gateway interface. Type: Global
- **Quality Management Plan - Create**: Allows the resource to create quality management plan documents. This includes the page navigation right. Type: Global
- **Quality Management Plan - Edit All**: Allows the resource to edit all quality management plan documents. This includes the page navigation right. Type: Global
- **Quality Management Plan - View All**: Allows the user to view all quality management plan documents. Type: Global
- **Quality Management Plan - XOG Access**: Allows the user to import and export quality management plan documents using the XML Open Gateway interface. Type: Global
- **Risk Identification - SWOT Analysis - Create**: Allows the resource to create risk identification - SWOT analysis documents. This includes the page navigation right. Type: Global
- **Risk Identification - SWOT Analysis - Edit All**: Allows the resource to edit all risk identification - SWOT analysis documents. This includes the page navigation right. Type: Global
- **Risk Identification - SWOT Analysis - View All**: Allows the user to view all risk identification - SWOT analysis documents. Type: Global
- **Risk Identification - SWOT Analysis - XOG Access**: Allows the user to import and export risk identification - SWOT analysis documents using the XML Open Gateway interface. Type: Global
- **Scope Management Plan - Create**: Allows the resource to create scope management plan documents. This includes the page navigation right. Type: Global
- **Scope Management Plan - Edit All**: Allows the user to edit all scope management plan documents. This includes the page navigation right. Type: Global
- **Scope Management Plan - View All**: Allows resource to view all scope management plan documents. This includes the page navigation right. Type: Global
- **Scope Management Plan - XOG Access**: Allows the user to import and export scope management plan documents using the XML Open Gateway interface. Type: Global

Additionally, the following project-level instance access rights are included (applied to PMBOK Guide Project Planning Checklist Template and PMBOK Guide Project Template):
- Project - Create - Lessons Learned
- Project - Create - Product Description
- Project - Create - Project Charter
- Project - Create - Project Closure
- Project - Create - Project Report
- Project - Create - Project Scope Statement
- Project - Create - Quality Management Plan
- Project - Create - Risk Identification - SWOT Analysis
- Project - Create - Scope Management Plan
- Project - Edit All - Lessons Learned
- Project - Edit All - Product Description
- Project - Edit All - Project Charter
- Project - Edit All - Project Closure
- Project - Edit All - Project Report
- Project - Edit All - Project Scope Statement
- Project - Edit All - Quality Management Plan
- Project - Edit All - Risk Identification - SWOT Analysis
- Project - Edit All - Scope Management Plan
- Project - View All - Lessons Learned
- Project - View All - Product Description
- Project - View All - Project Charter
- Project - View All - Project Closure
- Project - View All - Project Report
- Project - View All - Project Scope Statement
- Project - View All - Quality Management Plan
- Project - View All - Risk Identification - SWOT Analysis
- Project - View All - Scope Management Plan

Project subpage access rights (Edit, Edit All, View, View All) are also included for each of the following secured subpages: Lessons Learned, Product Description, Project Charter, Project Closure, Project Report, Project Scope Statement, Quality Management Plan, Risk Identification - SWOT Analysis, and Scope Management Plan.

#### Classic PPM Access Rights for Administrator Group

The following Classic PPM access rights are included with this access group. These include full administrative rights for processes, jobs, resources, timesheets, and project management. Notable rights include:
- **Administration - Access**: Type: Global
- **Audit Trail - View - All**: Type: Global
- **Custom Objects Editor**: Type: Global
- **Jobs - Access**: Type: Global
- **Jobs - Run - All**: Type: Global
- **Jobs - View Output - All**: Type: Global
- **Knowledge Store - View All**: Type: Global
- **Menu Definition Editor - All**: Type: Global
- **Object - Create Definition**: Type: Global
- **Object Administration**: Type: Global
- **Object Mapping - XOG Access**: Type: Global
- **Page Definition Editor - All**: Type: Global
- **Page Viewer - All**: Type: Global
- **Portlet Definition Editor - All**: Type: Global
- **Portlet Viewer - All**: Type: Global
- **Process - Cancel - All**: Type: Global
- **Process - Create Definition**: Type: Global
- **Process - Delete - All**: Type: Global
- **Process - Edit Definition - All**: Type: Global
- **Process - Manage - All**: Type: Global
- **Process - Start - All**: Type: Global
- **Process View Instance - All**: Type: Global
- **Process - View Definition - All**: Type: Global
- **Process Engine Monitoring**: Type: Global
- **Project - Approve - All**: Type: Global
- **Project - Create**: Type: Global
- **Project - Create from Template**: Type: Global
- **Project - Delete - All**: Type: Global
- **Project - Edit Access Rights**: Type: Global
- **Project - Edit Financial - All**: Type: Global
- **Project - Edit Management - All**: Type: Global
- **Project - View Financial - All**: Type: Global
- **Project - View Management - All**: Type: Global
- **Project - View Tasks - All**: Type: Global
- **Resource - Edit - All**: Type: Global
- **Resource - External Access**: Type: Global
- **Resource - Navigate**: Type: Global
- **Resource - Soft Book - All**: Type: Global
- **Resource - View - All**: Type: Global
- **Resource - View Book - All**: Type: Global
- **Resource - View Financial - All**: Type: Global
- **Timesheets - Approve All**: Type: Global
- **Timesheets - Edit All**: Type: Global
- **Timesheets - Navigate**: Type: Global
- **Jobs - Administrator Access**: Type: Global
- **Jobs - Create Definition**: Type: Global
- **Jobs - Edit Definition - All**: Type: Global

Instance access rights include Page - View, Portlet - View, Page Definition Editor, Page Definition Viewer, Portlet Definition Editor for various PMBOK pages and portlets, as well as Process rights (Cancel, Delete, Edit Definition, Manage, Start, View Definition) for all PMBOK processes including Change Request Review, Lessons Learned Review, Project Conversion, Product Description Approval, Project Charter Approval, Project Closure Review, Project Report Review, and Project Scope Statement Review.

### PBK Executive Group

Members of this access group monitor the progress of their projects and manage change in scope. They review and approve documents, and review project plan updates. Add this group to resources to be assigned as document reviewers or members of the change control board.

#### PMBOK Guide Accelerator Access Rights for Executive Group

This group includes Edit All and View All rights for all PMBOK document types (Lessons Learned, Product Description, Project Charter, Project Closure, Project Report, Project Scope Statement, Quality Management Plan, Risk Identification - SWOT Analysis, Scope Management Plan) and their corresponding project subpage access rights.

#### Classic PPM Access Rights for Executive Group
- **Knowledge Store - View All**: Type: Global
- **Page - View**: Type: Instance (applicable pages listed)
- **Page Viewer - All**: Type: Global
- **Portlet - View**: Type: Instance (applicable portlets listed)
- **Portlet Viewer - All**: Type: Global
- **Project - Approve - All**: Type: Global
- **Project - Budget Plan - View All**: Type: Global
- **Project - Cost Plan - View All**: Type: Global
- **Project - Hierarchy - Financial Rollup - View - All**: Type: Global
- **Project - Risk, Issue, Change Request - View - All**: Type: Global
- **Project - View Financial - All**: Type: Global
- **Project - View Tasks - All**: Type: Global
- **Project - View Management - All**: Type: Global
- **Resource - Navigate**: Type: Global
- **Resource - View - All**: Type: Global
- **Resource - View Book - All**: Type: Global
- **Resource - View Financial - All**: Type: Global

### PBK Project Manager Group

Members of this access group are project managers who are concerned with the direction and performance of their investments and the projects under them. They create, monitor, review, model, and approve portfolios of projects, projects and other work goals of project managers under them. The project managers also manage the schedule, resources, tasks, risks, and issues.

This group includes PMBOK Guide Accelerator Access Rights (Create, Edit All, View All, XOG Access for all document types and subpage access rights) and Classic PPM Access Rights similar to the Administrator Group but scoped to project management activities.

### PBK Team Member Group

Members of this access group work on individual tasks and action items. Each member enters time and updates tasks. This group includes view rights to PMBOK documents, project subpage view rights, and Classic PPM access rights including timesheets, resource view, and project view rights.

## PMO Accelerator Access Rights

The PMO Accelerator includes access groups that combine access rights for common user personas. Each group provides access to specific pages, portlets, and features.

### PMO Financial Administrator

Members of the PMO Financial Administrator group manage all financial aspects of investment management. The group includes rights for financial maintenance, administration access, project financial management, and portfolio management.

### PMO Portfolio Manager

Members of the PMO Portfolio Manager group create, view, and manage portfolios. The group includes portfolio navigation, creation, editing, and viewing rights along with project management access.

### PMO Project Creator

Members of the PMO Project Creator group create new projects. The group includes project creation, template usage, and basic project management rights.

### PMO Project Editor

Members of the PMO Project Editor group edit and manage projects. The group includes comprehensive project editing, financial, and management rights along with access to project-related pages and portlets.

### PMO Project Viewer

Members of the PMO Project Viewer group view all projects and project related portlets and reports. The group includes project view rights for management, financial, and task information along with access to project dashboard pages and portlets.

### PMO Resource Administrator

Members of the PMO Resource Administrator group create new resources or roles and edit the properties for any resource; view all projects and adjust resource allocations across projects. The group includes resource creation, editing, navigation, skill management, and team management rights along with access to resource planning and capacity planning pages and portlets.

### PMO Resource Manager

Members of the PMO Resource Manager group manage the schedules of direct reports, adjust their allocations on projects, and view all projects. The group includes resource view, hard book, and soft book rights along with project management view rights and access to resource planning and capacity planning pages.

### PMO Resource Manager Extended

Members of the PMO Resource Manager Extended group manage the schedules of direct reports, adjust their allocations on projects and skills, access requisitions, and view all projects. This extends the PMO Resource Manager group with additional requisition rights and timesheet management access.

### PMO System Administrator

Members of the PMO System Administrator group manage the system by having all global rights to access all features and edit all records in the product.

### PMO Team Member

Members of the PMO Team Member group create and submit timesheets. The group includes basic navigation, project view, resource view, and timesheet management rights.

### PMO Timesheet Administrator

Members of the PMO Timesheet Administrator group manage timesheet approval; submit and approve all timesheets. The group includes resource view, timesheet navigation, editing, and approval rights.

### PMO Vendor Management

Members of the PMO Vendor Management group access vendor related reports and views. The group includes basic project navigation and view rights.

### PMO Roadmap Creator

Members of the PMO Roadmap Creator group create, view, and edit new roadmaps. The group includes Roadmap - Navigate and Roadmap - Create rights.

### PMO Roadmap Viewer

Members of the PMO Roadmap Viewer group can view all roadmaps. The group includes Roadmap - Navigate and Roadmap - View All rights.

### PMO Roadmap Editor

Members of the PMO Roadmap Editor group can edit all roadmaps and manage roadmap-specific picklists. The group includes Roadmap - Navigate and Roadmap - Edit - All rights.

> [!NOTE]
> More Information: Add-in: PMO Accelerator
Team - Create Team - Edit - All Team - View - All Team - Delete - All
Resource Planning Capacity Organizational Demand Top Down Planning Workloads Allocations Unfilled Allocations Bookings
Capacity Planning Review
Role Capacity Histogram Role Capacity OBS Resource Aggregation OBS Investment Aggregation Top Down Planning by Investment Resource Workloads Weekly Detail Allocation Discrepancy Unfilled Requirements Booking Status
Capacity Overview
Action Items My Projects

PMO Resource Manager
Members of the PMO Resource Manager group manage the schedules of direct reports, adjust their allocations on projects, and view all projects. The group includes the following access rights.

Global Global

Type

Global

General

Area

Project Management

Resource Management

Access Right
Account Settings - Navigate Organizer - Access
Projects - Navigate Project Management - Navigate Project Management - Tiles Navigate Project - View Management - All Project - View Financial - All
Resource - View - All Resource - Hard Book All Resource - Soft Book All


Type Instance (Page - View)
Instance (Page - View) Instance (Portlet - View)
Instance (Portlet - View) Instance (Portlet - View) Instance (Portlet - View) Instance (Portlet - View)
Instance (Portlet - View) Global

Area Resource Planning Page and Tabs
Capacity Planning Overview Page Resource Planning Page Portlets
Capacity Planning Overview Portlets PMO-Project Status Portlets PMO-Project Storyboard Portlets Project Default Layout Portlets
Other Portlets - Classic PPM Tasks (Clarity )

Access Right
Resource Planning Capacity Organizational Demand Top Down Planning Workloads Allocations Unfilled Allocations Bookings
Capacity Planning Review
Role Capacity Histogram Role Capacity OBS Resource Aggregation OBS Investment Aggregation Top Down Planning by Investment Resource Workloads Weekly Detail Allocation Discrepancy Unfilled Requirements Booking Status
Capacity Overview
Team Utilization
Team Capacity
General Labor Effort Team Utilization granted above for the PMO-Project Status Portlets is also required for the Project Default Layout Portlets.
Action Items My Projects
Tasks - Navigate

PMO Resource Manager Extended
Members of the PMO Resource Manager Extended group manage the schedules of direct reports, adjust their allocations on projects and skills, access requisitions, and view all projects. The group includes the following access rights.

Global Global

Type

General

Area

Project Management

Access Right
Account Settings - Navigate Organizer - Access
Projects - Navigate Project Management - Navigate Project Management - Tiles Navigate Project - View Management - All Project - View Financial - All


Global

Type

Instance (Page - View)

Instance (Page - View) Instance (Page - View) Instance (Page - View)
Instance (Portlet - View)

Instance (Portlet - View) Instance (Portlet - View)
Instance (Portlet - View)
Instance (Portlet - View) Instance (Portlet - View)

Area Resource Management
Resource Planning Page and Tabs
Capacity Planning Overview Page Timesheet Overview Page Timesheet Review Page and Tab This page is a team object action. Resource Planning Page Portlets
Capacity Planning Overview Portlets Timesheet Overview Page Portlets Timesheet Review Page Portlets PMO-Project Status Portlets PMO-Project Storyboard Portlets

Access Right
Resource - View - All Resource - Hard Book All Resource - Soft Book All Resource - Update Skills - All Project - Create/Edit Requisitions - All Project - Attach Requisitions Entry Resources - All Project - View Requisitions - All
Resource Planning Capacity Organizational Demand Top Down Planning Workloads Allocations Unfilled Allocations Bookings
Capacity Planning Overview
Timesheet Overview Timesheet Details Timesheet Notes
Timesheet Review Timesheets Timesheet Notes granted above for the Timesheet Overview Page is also required for the Timesheet Review Page.
Role Capacity Histogram Role Capacity OBS Resource Aggregation OBS Investment Aggregation Top Down Planning by Investment Resource Workloads Weekly Detail Allocation Discrepancy Unfilled Requirements Booking Status
Capacity Overview
Timesheet Overview Filter Investment Timesheet Summary Investment Timesheet Review Timesheet Notes
Timesheet Review Timesheet Notes granted above for the Timesheet Overview Page Portlets is also required for the Timesheet Review Page Portlets.
Team Utilization
Team Capacity


Type Instance (Portlet - View)
Instance (Portlet - View) Global

Area Project Default Layout Portlets
Other Portlets - Classic PPM Tasks (Clarity )

Access Right
General Labor Effort Team Utilization granted above for the PMO-Project Status Portlets is also required for the Project Default Layout Portlets.
Action Items My Projects
Tasks - Navigate

PMO System Administrator
Members of the PMO System Administrator group manage the system by having all global rights to access all features and edit all records in the product.

PMO Team Member Members of the PMO Team Member group create and submit timesheets. The group includes the following access rights.

Global Global

Type

Global Global Instance (Portlet - View)
Instance (Portlet - View) Global

General

Area

Project Management

Resource Management Timesheet Management Other Portlets - Classic PPM
Other Portlets - PMO Accelerator Tasks (Clarity )

Access Right
Account Settings - Navigate Organizer - Access Projects - Navigate Project Management - Navigate Project Management - Tiles Navigate Resource - View - All
Timesheet Navigate Action Items My Projects My Timesheets
Tasks - Navigate

PMO Timesheet Administrator
Members of the PMO Timesheet Administrator group manage timesheet approval; submit and approve all timesheets. The group includes the following access rights.

Global
Global Global

Type

Instance(Portlet - View)

General

Area

Resource Management Timesheet Management

Other Portlets - Classic PPM

Access Right
Account Settings - Navigate Organizer - Access
Resource - View - All
Timesheet Navigate Timesheet - Edit All Timesheet - Approval All
Action Items My Projects


PMO Vendor Management Members of the PMO Vendor Management group access vendor related reports and views. The group includes the following access rights.

Global Global

Type

Instance (Portlet - View) Global

General

Area

Project Management

Other Portlets - Classic PPM Tasks (Clarity )

Access Right
Account Settings - Navigate Organizer - Access
Projects - Navigate Project Management - Navigate Project Management - Tiles Navigate
Action Items My Projects
Tasks - Navigate

PMO Roadmap Creator
Members of the PMO Roadmap Creator group create, view, and edit new roadmaps. The group includes the following access rights.

Global Global

Type

Area Roadmaps (Clarity ) Roadmaps (Clarity )

Access Right Roadmap - Navigate Roadmap - Create

PMO Roadmap Viewer Members of the PMO Roadmap Viewer group can view all roadmaps. The group includes the following access rights.

Global Global

Type

Area Roadmaps (Clarity ) Roadmaps (Clarity )

Access Right Roadmap - Navigate Roadmap - View All

PMO Roadmap Editor
Members of the PMO Roadmap Editor group can edit all roadmaps and manage roadmap-specific picklists. The group includes the following access rights.

Global Global

Type

Area Roadmaps (Clarity ) Roadmaps (Clarity )

> [!NOTE]
> More Information: - Add-in: PMO Accelerator

Access Right Roadmap - Navigate Roadmap - Edit - All


PRINCE2 Accelerator Access Rights
The PRINCE2 Accelerator includes access groups that organize the access rights that are required for user access to secure pages and portlets. Users also require access to the OBS for the PRINCE2 project. In addition to the required access rights, associate the group with the entity that is associated with the PRINCE2 project. This association ensures full visibility and access to a project.
The following access groups are included with the PRINCE2 Accelerator:
- PRINCE2 Administrator Group - PRINCE2 Executive/Senior User Group - PRINCE2 Project Manager Group - PRINCE2 Project Support Staff Group - PRINCE2 Senior Supplier Group
PRINCE2 Administrator Group
This group allows the user full access to the PRINCE2 sub-page under project properties, in addition to all other global rights on the PRINCE2 Project Manager.
PRINCE2 Executive/Senior User Group
This access group has the right to approve or reject the various PRINCE2 controls. The group also has access to all the PRINCE2 projects, sub objects, project dashboards, and executive dashboards. Members of this group are granted the following access rights:
- PRINCE2 Access Rights for Executive/Senior User Group - Clarity Access Rights for Executive/Senior User Group
PRINCE2 Access Rights for Executive/Senior User Group
The following PRINCE2 access rights are included with this group:
- Product Description - Edit All: Allows resource to edit all Product Description objects. This includes the page navigation right. Type: Global
- Product Description - View All: Allows resource to view all Product Description objects. This includes the page navigation right. Type: Global
- Project Initiation Document - Edit All: Allows resource to edit all Project Initiation Document objects. This includes the page navigation right. Type: Global
- Project Initiation Document - View All: Allows resource to view all Project Initiation Document objects. This includes the page navigation right. Type: Global
- Exception Report - Edit All: Allows resource to edit all Exception Report objects. This includes the page navigation right. Type: Global
- Exception Report - View All: Allows resource to view all Exception Report objects. This includes the page navigation right. Type: Global
- Lessons Learned - Edit All: Allows resource to edit all Lessons Learned objects. This includes the page navigation right.

Type: Global - Lessons Learned - View All: Allows resource to view all Lessons Learned objects. This includes the page navigation
right. Type: Global - Checkpoint Report - Edit All: Allows resource to edit all Checkpoint Report objects. This includes the page navigation right. Type: Global - Checkpoint Report - View All: Allows resource to view all Checkpoint Report objects. This includes the page navigation right. Type: Global - Highlight Report - Edit All: Allows resource to edit all Highlight Report objects. This includes the page navigation right. Type: Global - Highlight Report - View All: Allows resource to view all Highlight Report objects. This includes the page navigation right. Type: Global - Stage Plan - Edit All: Allows resource to edit all Stage Plan objects. This includes the page navigation right. Type: Global - Stage Plan - View All: Allows resource to view all Stage Plan objects. This includes the page navigation right. Type: Global - End Stage Report - Edit All: Allows resource to edit all End Stage Report objects. This includes the page navigation right. Type: Global - End Stage Report - View All: Allows resource to view all End Stage Report objects. This includes the page navigation right. Type: Global - Project - Subpage Checkpoint Report - Edit All: Allows resource to edit all project objects using secured subpage Checkpoint Report. Type: Global - Project - Subpage Checkpoint Report - View All: Allows resource to navigate to all project objects using secured subpage Checkpoint Report. Type: Global - Project - Subpage End Stage Report - Edit All: Allows resource to edit all project objects using secured subpage End Stage Report. Type: Global - Project - Subpage End Stage Report - View All: Allows resource to navigate to all project objects using secured subpage End Stage Report. Type: Global - Project - Subpage Exception Report - Edit All: Allows resource to edit all project objects using secured subpage Exception Report. Type: Global - Project - Subpage Exception Report - View All: Allows resource to navigate to all project objects using secured subpage Exception Report. Type: Global - Project - Subpage Highlight Report - Edit All: Allows resource to edit all project objects using secured subpage Highlight Report. Type: Global - Project - Subpage Highlight Report - View All: Allows resource to navigate to all project objects using secured subpage Highlight Report.

Type: Global - Project - Subpage Lessons Learned - Edit All: Allows resource to edit all project objects using secured subpage
Lessons Learned. Type: Global - Project - Subpage Lessons Learned - View All: Allows resource to navigate to all project objects using secured subpage Lessons Learned. Type: Global - Project - Subpage PRINCE2TM - Edit All: Allows resource to edit all project objects using secured subpage PRINCE2. Type: Global - Project - Subpage PRINCE2TM - View All: Allows resource to navigate to all project objects using secured subpage PRINCE2. Type: Global - Project - Subpage Product Description - Edit All: Allows resource to edit all project objects using secured subpage Product Description. Type: Global - Project - Subpage Product Description - View All: Allows resource to navigate to all project objects using secured subpage Product Description. Type: Global - Project - Subpage Project Initiation Document - Edit All: Allows resource to edit all project objects using secured subpage Project Initiation Document. Type: Global - Project - Subpage Project Initiation Document - View All: Allows resource to navigate to all project objects using secured subpage Project Initiation Document. Type: Global - Project - Subpage Stage Plan - Edit All: Allows resource to edit all project objects using secured subpage Stage Plan. Type: Global - Project - Subpage Stage Plan - View All: Allows resource to navigate to all project objects using secured subpage Stage Plan. Type: Global
Classic PPM Access Rights for Executive/Senior User Group
The following access rights are included with this access group:
- Page - View Allows users to view a general page in Classic PPM. For instance pages (such as portfolio pages), this right is not required. Type: Instance
- Portlet - View Allows users to view a specific portlet. Type: Instance
- Resource - View - All Allows users to view information, except the financial properties of all resources. Type: Global
PRINCE2 Project Manager Group
This access group is concerned with the direction and performance of investments under their scope. This type of resource can be non-technical. Members of the PRINCE2 Project Manager group monitor, review, and approve portfolios of projects under them. They have create, view, and edit access to PRINCE2 projects, sub objects, and project dashboards. This group does not have access to executive dashboard or portlets and other PRINCE2 management control dashboards. Members of this group are granted the following access rights:
- PRINCE2 Access Rights for Project Manager - Clarity Access Rights for Project Manager


PRINCE2 Access Rights for Project Manager Group
The following PRINCE2 access rights are included with this group:
- Product Description - Create: Allows resource to create Product Description objects. This includes the page navigation right.
Type: Global - Product Description - Edit All: Allows resource to edit all Product Description objects. This includes the page
navigation right.
Type: Global - Product Description - View All: Allows resource to view all Product Description objects. This includes the page
navigation right.
Type: Global - Project Initiation Document - Create: Allows resource to create Project Initiation Document objects. This includes the
page navigation right.
Type: Global - Project Initiation Document - Edit All: Allows resource to edit all Project Initiation Document objects. This includes
the page navigation right.
Type: Global - Project Initiation Document - View All: Allows resource to view all Project Initiation Document objects. This includes
the page navigation right.
Type: Global - Exception Report - Create: Allows resource to create Exception Report objects. This includes the page navigation
right.
Type: Global - Exception Report - Edit All: Allows resource to edit all Exception Report objects. This includes the page navigation
right.
Type: Global - Exception Report - View All: Allows resource to view all Exception Report objects. This includes the page navigation
right.
Type: Global - Lessons Learned - Create: Allows resource to create Lessons Learned objects. This includes the page navigation
right.
Type: Global - Lessons Learned - Edit All: Allows resource to edit all Lessons Learned objects. This includes the page navigation
right.
Type: Global - Lessons Learned - View All: Allows resource to view all Lessons Learned objects. This includes the page navigation
right.
Type: Global - Checkpoint Report - Create: Allows resource to create Checkpoint Report objects. This includes the page navigation
right.
Type: Global - Checkpoint Report - Edit All: Allows resource to edit all Checkpoint Report objects. This includes the page
navigation right.


Type: Global - Checkpoint Report - View All: Allows resource to view all Checkpoint Report objects. This includes the page
navigation right. Type: Global - Highlight Report - Create: Allows resource to create Highlight Report objects. This includes the page navigation right. Type: Global - Highlight Report - Edit All: Allows resource to edit all Highlight Report objects. This includes the page navigation right. Type: Global - Highlight Report - View All: Allows resource to view all Highlight Report objects. This includes the page navigation right. Type: Global - Stage Plan - Create: Allows resource to create Stage Plan objects. This includes the page navigation right. Type: Global - Stage Plan - Edit All: Allows resource to edit all Stage Plan objects. This includes the page navigation right. Type: Global - Stage Plan - View All: Allows resource to view all Stage Plan objects. This includes the page navigation right. Type: Global - End Stage Report - Create: Allows resource to create End Stage Report objects. This includes the page navigation right.Type: Global - End Stage Report - Edit All: Allows resource to edit all End Stage Report objects. This includes the page navigation right. Type: Global - End Stage Report - View All: Allows resource to view all End Stage Report objects. This includes the page navigation right. Type: Global - Project - Subpage Checkpoint Report - Edit All: Allows resource to edit all project objects using secured subpage Checkpoint Report. Type: Global - Project - Subpage Checkpoint Report - View All: Allows resource to navigate to all project objects using secured subpage Checkpoint Report. Type: Global - Project - Subpage End Stage Report - Edit All: Allows resource to edit all project objects using secured subpage End Stage Report. Type: Global - Project - Subpage End Stage Report - View All: Allows resource to navigate to all project objects using secured subpage End Stage Report. Type: Global - Project - Subpage Exception Report - Edit All: Allows resource to edit all project objects using secured subpage Exception Report. Type: Global - Project - Subpage Exception Report - View All: Allows resource to navigate to all project objects using secured subpage Exception Report. Type: Global - Project - Subpage Highlight Report - Edit All: Allows resource to edit all project objects using secured subpage Highlight Report.Type: Global - Project - Subpage Highlight Report - View All: Allows resource to navigate to all project objects using secured subpage Highlight Report.

Type: Global - Project - Subpage Lessons Learned - Edit All: Allows resource to edit all project objects using secured subpage
Lessons Learned. Type: Global - Project - Subpage Lessons Learned - View All: Allows resource to navigate to all project objects using secured subpage Lessons Learned Type: Global - Project - Subpage PRINCE2TM - Edit All: Allows resource to edit all project objects using secured subpage PRINCE2TM. Type: Global - Project - Subpage PRINCE2TM View All: Allows resource to navigate to all project objects using secured subpage PRINCE2TM. Type: Global - Project - Subpage Product Description - Edit All: Allows resource to edit all project objects using secured subpage Product Description.Type: Global - Project - Subpage Product Description - View All: Allows resource to navigate to all project objects using secured subpage Product Description. Type: Global - Project - Subpage Project Initiation Document - Edit All: Allows resource to edit all project objects using secured subpage Project Initiation Document. Type: Global - Project - Subpage Project Initiation Document - View All: Allows resource to navigate to all project objects using secured subpage Project Initiation Document. Type: Global - Project - Subpage Stage Plan - Edit All: Allows resource to edit all project objects using secured subpage Stage Plan. Type: Global - Project - Subpage Stage Plan - View All: Allows resource to navigate to all project objects using secured subpage Stage Plan. Type: Global
Classic PPM Access Rights for Project Managers Group
The following access rights are included with this access group:
- Page - View: Allows users to view a general page in Classic PPM. For instance pages such as portfolio pages, this right is not required. Type: Instance
- Portlet - View: Allows users to view a specific portlet. Type: Instance
- Application - Create: Allows users to create Applications. Includes the Application - Navigate right. Type: Global
- Application - Navigate: Allows users to navigate to Application pages. Users need additional rights to view individual Applications. Type: Global
- Asset - Create: Allows users to create Assets. Includes the Asset - Navigate right. Type: Global
- Asset - Navigate: Allows users to navigate to Asset pages. Users need additional rights to view individual Assets.

Type: Global - Company - Create: Allows a resource to view and edit all companies and to create new companies. Resources with
this access right cannot view documents unless specific access to the folders or documents is also granted. Type: Global - Company - Document Manager - Administrate - All: Allows resources with access to all documents and forms that are attached to companies (if other access rights that provide view capability for companies, such as Company - View All, are also granted). Resources with this access right can do the following: - Create new form and document folders - Add documents - Add forms to folders - Attach document templates to forms - Delete forms - Delete, copy and move documents - View document properties, history, versions, permissions, and workflows Type: Global - Knowledge Store - Access: Allows resources to create, edit, and view knowledge store documents for which the resource has been given permission. Type: Global - Knowledge Store - Administrate: Allows resources to administer knowledge store folders and documents for which the resource has been given permission. Type: Global - Other Work - Create: Allows resources to create other work. Type: Global - Other Work - Navigate: Allows resources access to the other work management pages.Type: Global - Product - Create: Allows users to create products. Includes the Product - Navigate right. Type: Global - Product - Navigate: Allows users to navigate to product pages. Users need additional rights to view individual products.Type: Global - Project - Create: Allows you to create new projects and define the general properties. Includes: Project - Create from Template right to create a project using a template. Type: Global - Project - Enable Financial: Enable financial properties for Projects. Requires:
- Project - View - Project - View Management or Project - Manager
Type: Global - Resource - Create: Allows users to create a resource or role, and edit properties. The right allows users to create
labor and nonlabor resources. Requires: Resource - Navigate right Type: Global - Resource - Navigate: Allows users to access resource management pages. Type: Global - Timesheets - Navigate: Allows you to navigate to timesheet pages. Type: Global
PRINCE2 Project Support Staff Group
This access group is concerned with monitoring and working on individual tasks and action items. Each member enters time and updates tasks. This type of resource is entitled to view rights to some portlets. In addition, the right to conduct

peer reviews of the various PRINCE2 controls within their projects. Members of this group are granted the following access rights:
- PRINCE2 Access Rights for Project Support Staff - Clarity Access Rights for Project Support Staff
PRINCE2 Access Rights for Project Support Staff Group
The following PRINCE2 access rights are included with this group:
- Product Description - View All: Allows resource to view all Product Description objects. This includes the page navigation right. Type: Global
- Project Initiation Document - View All: Allows resource to view all Project Initiation Document objects. This includes the page navigation right. Type: Global
- Exception Report - View All: Allows resource to view all Exception Report objects. This includes the page navigation right. Type: Global
- Lessons Learned - View All: Allows resource to view all Lessons Learned objects. This includes the page navigation right. Type: Global
- Checkpoint Report - View All: Allows resource to view all Checkpoint Report objects. This includes the page navigation right. Type: Global
- Highlight Report - View All: Allows resource to view all Highlight Report objects. This includes the page navigation right. Type: Global
- Stage Plan - View All: Allows resource to view all Stage Plan objects. This includes the page navigation right. Type: Global
- End Stage Report - View All: Allows resource to view all End Stage Report objects. This includes the page navigation right. Type: Global
- Project - Subpage Checkpoint Report - View All: Allows resource to navigate to all project objects using secured subpage Checkpoint Report. Type: Global
- Project - Subpage End Stage Report - View All: Allows resource to navigate to all project objects using secured subpage End Stage Report. Type: Global
- Project - Subpage Exception Report - View All: Allows resource to navigate to all project objects using secured subpage Exception Report. Type: Global
- Project - Subpage Highlight Report - View All: Allows resource to navigate to all project objects using secured subpage Highlight Report. Type: Global
- Project - Subpage Lessons Learned - View All: Allows resource to navigate to all project objects using secured subpage Lessons Learned. Type: Global
- Project - Subpage PRINCE2TM - View All: Allows resource to navigate to all project objects using secured subpage PRINCE2TM.

Type: Global - Project - Subpage Product Description - View All: Allows resource to navigate to all project objects using secured
subpage Product Description. Type: Global - Project - Subpage Project Initiation Document - View All: Allows resource to navigate to all project objects using secured subpage Project Initiation Document Type: Global - Project - Subpage Stage Plan - View All: Allows resource to navigate to all project objects using secured subpage Stage Plan. Type: Global
Classic PPM Access Rights for Project Support Staff Group
The following access rights are included with this access group.
- Page - View Allows users to view a general page in Classic PPM. For instance pages such as portfolio pages, this right is not required. Type: Instance
- Portlet - View Allows users to view a specific portlet. Type: Instance
- Resource - View - All Allows users to view information, except the financial properties of all resources. Type: Global
- Timesheets - Navigate Allows you to navigate to timesheet pages. Type: Global
PRINCE2 Senior Supplier Group
The PRINCE2 Senior Supplier Group members play a more senior supervisory or senior resource role in the project. Each member enters time and updates tasks. This type of resource has view access rights to some portlets and the right to conduct peer review of the various PRINCE2 controls. Members of this group are granted the following access rights:
- PRINCE2 Access Rights for Senior Supplier Group - Clarity Access Rights for Senior Supplier Group
PRINCE2 Access Rights for Senior Supplier Group
The following PRINCE2 access rights are included with this group:
- Product Description - Edit All: Allows resource to edit all Product Description objects. This includes the page navigation right. Type: Global
- Product Description - View All: Allows resource to view all Product Description objects. This includes the page navigation right. Type: Global
- Project Initiation Document - Edit All: Allows resource to edit all Project Initiation Document objects. This includes the page navigation right. Type: Global
- Project Initiation Document - View All: Allows resource to view all Project Initiation Document objects. This includes the page navigation right. Type: Global
- Exception Report - Edit All: Allows resource to edit all Exception Report objects. This includes the page navigation right.

Type: Global - Exception Report - View All: Allows resource to view all Exception Report objects. This includes the page navigation
right. Type: Global - Lessons Learned - Edit All: Allows resource to edit all Lessons Learned objects. This includes the page navigation right. Type: Global - Lessons Learned - View All: Allows resource to view all Lessons Learned objects. This includes the page navigation right. Type: Global - Checkpoint Report - Edit All: Allows resource to edit all Checkpoint Report objects. This includes the page navigation right. Type: Global - Checkpoint Report - View All: Allows resource to view all Checkpoint Report objects. This includes the page navigation right. Type: Global - Highlight Report - Edit All: Allows resource to edit all Highlight Report objects. This includes the page navigation right. Type: Global - Highlight Report - View All: Allows resource to view all Highlight Report objects. This includes the page navigation right. Type: Global - Stage Plan - Edit All: Allows resource to edit all Stage Plan objects. This includes the page navigation right. Type: Global - Stage Plan - View All: Allows resource to view all Stage Plan objects. This includes the page navigation right. Type: Global - End Stage Report - Edit All: Allows resource to edit all End Stage Report objects. This includes the page navigation right. Type: Global - End Stage Report - View All: Allows resource to view all End Stage Report objects. This includes the page navigation right. Type: Global - Project - Subpage Checkpoint Report - View All: Allows resource to navigate to all project objects using secured subpage Checkpoint Report. Type: Global - Project - Subpage End Stage Report - View All: Allows resource to navigate to all project objects using secured subpage End Stage Report. Type: Global - Project - Subpage Exception Report - View All: Allows resource to navigate to all project objects using secured subpage Exception Report. Type: Global - Project - Subpage Highlight Report - View All: Allows resource to navigate to all project objects using secured subpage Highlight Report. Type: Global - Project - Subpage Lessons Learned - View All: Allows resource to navigate to all project objects using secured subpage Lessons Learned. Type: Global - Project - Subpage PRINCE2TM - View All: Allows resource to navigate to all project objects using secured subpage PRINCE2TM.

Type: Global - Project - Subpage Product Description - View All: Allows resource to navigate to all project objects using secured
subpage Product Description. Type: Global - Project - Subpage Project Initiation Document - View All: Allows resource to navigate to all project objects using secured subpage Project Initiation Document. Type: Global - Project - Subpage Stage Plan - View All: Allows resource to navigate to all project objects using secured subpage Stage Plan. Type: Global
Classic PPM Access Rights for Senior Supplier Group
The following access rights are included with this access groups:
- Page - View: Allows users to view a general page in Classic PPM. For instance pages such as portfolio pages, this right is not required. Type: Instance
- Portlet - View: Allows users to view a specific portlet. Type: Instance
- Application - Create: Allows users to create Applications. Includes the Application - Navigate right. Type: Global
- Application - Navigate: Allows users to navigate to Application pages. Users need additional rights to view individual Applications. Type: Global
- Asset - Create: Allows users to create Assets. Includes the Asset - Navigate right. Type: Global
- Asset - Navigate: Allows users to navigate to Asset pages. Users need additional rights to view individual Assets. Type: Global
- Company - Create: Allows a resource to view and edit all companies and to create new companies. Resources with this access right cannot view documents unless specific access to the folders or documents is also granted. Type: Global
- Company - Document Manager - Administrate - All: Allows resources with access to all documents and forms that are attached to companies (if other access rights that provide view capability for companies, such as Company - View All, are also granted). Resources with this access right can do the following: - Create new form and document folders - Add documents - Add forms to folders - Attach document templates to forms - Delete forms - Delete, copy and move documents - View document properties, history, versions, permissions, and workflows Type: Global
- Knowledge Store - Access: Allows resources to create, edit, and view knowledge store documents for which the resource has been given permission. Type: Global
- Knowledge Store - Administrate: Allows resources to administer knowledge store folders and documents for which the resource has been given permission.

Type: Global - Other Work - Create: Allows resources to create other work.
Type: Global - Other Work - Navigate: Allows resources access to the other work management pages.
Type: Global - Product - Create: Allows users to create products. Includes the Product - Navigate right.
Type: Global - Product - Navigate: Allows users to navigate to product pages. Users need additional rights to view individual
products. Type: Global - Resource - Create: Allows users to create a resource or role, and edit properties. The right allows users to create labor and nonlabor resources. Requires: Resource - Navigate right Type: Global - Resource - Navigate: Allows users to access resource management pages. Type: Global - Timesheets - Navigate: Allows you to navigate to timesheet pages. Type: Global
Project and Portfolio Management Access Rights
The following access rights are required for users to work with projects, programs, timesheets, earned value, and portfolio management.
- Earned Value Definition Rights - Program Access Rights - Project Access Rights - Project Hierarchy Access Rights - Timesheets Access Rights - Portfolio Management Access Rights
Earned Value Definition Rights
The following access rights are available for users who work with earned value definitions:
- Earned Value Definition - Create Allows users to create a new earned value definition. Type: Global
- Earned Value Definition - Edit Access Rights - All Allows users to edit the access rights for all earned value definitions. Requires: Earned Value Definition - Navigate right or Earned Value Definition - View right Type: Global
- Earned Value Definition - Edit All Allows users to edit any earned value definition. Type: Global
- Earned Value Definition - Navigate Allows users to access any earned value definition pages. Type: Global
- Earned Value Definition - View All Allows users to view any earned value definition. Type: Global
Program Access Rights
The following access rights are available for users who create and edit programs and subprojects:
- Management - Programs Allows the user to navigate to Programs and access the programs to which they have access. This right is dependent on the user having project view or edit rights to the programs and subprojects. Type: Global
- Project - Approve Allows the user to approve a specific project. This right includes the Project - Edit access right. Type: Instance
- Project - Create - The Project - Create access right has been renamed to Project - Create and Create from Template. You can use this access right to: - Create a new project by using the "+" button in the Project Grid layout. - Create a project by using the Insert Row Below in the Project Grid layout. - Create a project by using the "New Card" button in the Project Board view. - Create a project by using the "New" button in Classic PPM. - Create a project by using the Create From Template button in Clarity and Classic PPM. Type: Global
- Project - Create from Template - The Project - Create from Template access right has been introduced in this release. It allows you to perform the following actions: - Create a new project by using the Create From Template button in Clarity and Classic PPM. - Create a new project by using the Convert an Idea to Project button Type: Global
- Project - Delete Combined with the Project - Edit access right, this right allows users to delete the projects and programs to which they have access.
- Project - Edit Allows user to edit all parts of a project or program except the collaboration tools (for example, Document Manager, Action Items, Calendar, and Discussion pages). Also, allows user to accept requisitions if project manager approval is required. Type: Instance
- Project - Edit Access Rights Combined with the Project - Edit Management access right, this right allows user to manage access rights to a project or program. Type: Global
- Project - Edit Management Allows user to edit general and management properties, to add staff, create tasks, and create and manage processes for the projects and programs to which the user has access. This includes the ability to add subprojects and to edit the project in Open Workbench or Microsoft Project. Type: Instance.
- Project - Manager (Auto) Allows user to view and edit general and management properties for the projects and programs to which they have access. Type: Instance
Project Access Rights
The following access rights are available for users who work with projects.
> [!NOTE]
> The billing access rights are deprecated. Billing functionality has been discontinued in the product.
- Project - Approve: Allows users to approve a specific project. Includes: Project - Edit right to edit the project. Type: Instance
- Project - Approve - All: Allows users to approve all projects. Includes: Project - Edit - All right to edit all projects.

Type: Global - Project - Benefit Plan - Edit: Allows users to edit the benefit plans for a specific project.
Type: Instance - Project - Benefit Plan - Edit - All: Allows users to edit the benefit plans for all projects.
Type: Global - Project - Benefit Plan - View: Allows users to view the benefit plans for a specific project.
Type: Instance - Project - Benefit Plan - View - All: Allows users to view the benefit plans for all projects.
Type: Global - Project - Billing Access: Allows users to access a billing for a specific project.
Type: Instance - Project - Billing Approval: Allows users to approve a billing for a specific project.
Type: Instance - Project - Budget Plan - Approve: Allows users to approve the budget plans for a specific project.
Type: Instance - Project - Budget Plan - Approve All: Allows users to approve the budget plans of any project.
Type: Global - Project - Budget Plan - Edit: Allows users to edit the budget plans for a specific project.
Type: Instance - Project - Budget Plan - Edit All: Allows users to edit the budget plans of any project.
Type: Global - Project - Budget Plan - View: Allows users to view the budget plans for a specific project.
Type: Instance - Project - Budget Plan - View All: Allows users to view budget plans for all projects.
Type: Global - Project - Cost Plan - Edit: Allows users to edit the cost plans for a specific project.
Type: Instance - Project - Cost Plan - Edit All: Allows users to edit cost plans for all projects.
Type: Global - Project - Cost Plan - View: Allows users to view the cost plans for a specific project.
Type: Instance - Project - Cost Plan - View All: Allows users to view cost plans for all projects.
Type: Global - Project - Create: Allows you to create new projects and define the general properties.
Includes: Project - Create from Template right to create a project using a template. Type: Global - Project - Create from Template: Allows user to create a new project by using only templates Type: Global - Project - Delete: Allows users to mark specific inactive projects for deletion or to cancel the Marked for Deletion flag before the Delete Investments job runs. Requires: Project - View to view the project. Type: Instance - Project - Delete - All: Allows users to mark any inactive project for deletion or to cancel the Marked for Deletion flag before the Delete Investments job runs. Requires: Project - View to view the project.

Type: Global - Project - Edit: Allows the user to edit all parts of a project including the following properties: - - Project financial settings
- Cost type Capitalization % on staff record - View and manage the Project Hierarchy
Type: Instance
- Project - Edit Access Rights - All: Allows users to manage access rights for project. Requires: Project - Edit Management right to manage access rights for all projects. Type: Global
- Project - Edit Assigned Tasks: Allows the user to edit assigned tasks on a specific project. Type: Instance
- Project - Edit Assigned Tasks - All: Allows the user to edit assigned tasks on all projects. Type: Global
- Project - Enable Financial: Allows user to edit the following financial properties on the project Settings page: - Company Name - Affiliated Project - Department - Location - WIP Class - Investment Class
This right also allows a user to edit the following project properties:
- Cost Type value at the project and task level - Capitalization % for project staff
- Requires: - Project - View - Project - View Management or Project - Manager Type: Global
- Project - Edit Financial Allows user to edit the general and management properties, roster and key tasks. This right also allows a user to edit the following project properties: - Cost Type value at the project and task level - Capitalization % for project staff Type: Instance
- Project - Edit Financial - All Allows users to view and edit the general properties, processes, and financial information about all projects. This right also allows the user to enable financial projects and secure the default and custom attributes available on the financial settings subpage in Classic PPM. This right also allows a user to edit the following project properties: - Cost Type value at the project and task level - Capitalization % for project staff Type: Global
- Project - Edit Management Allows users to edit general and management properties, to add staff, create tasks, and create and manage processes for the specific project. This right includes the ability to add subprojects and to edit the project in a project scheduler, such as Microsoft Project. Type: Instance
- Project - Edit Management - All: Allows the user to edit general and management properties for all projects. This right allows you to add staff and create tasks. This right also includes the right to add subprojects to the project. This right allows users to edit (read-write) the project in an integrated scheduler (Open Workbench or Microsoft Project).

Type: Global - Project - Edit Project Plan: Allows users to add unplanned tasks to a specific project when completing their
timesheets when they are a team member on the project. Type: Instance - Project - Edit Project Plan - All: Allows users to add unplanned tasks to any project when completing their timesheets when they are a team member of those projects. Type: Global - Project - Financial Plan - Submit for Approval: Allows users to submit the financial plans for approval for a specific project. Type: Instance - Project - Manager (Auto): Allows the user to view and edit general and management properties for the projects and programs to which they have access. Type: Instance - Project - Modify Baseline: Allows user to baseline a project. The right also allows a resource to edit the general project properties and processes. Type: Instance - Project - Modify Baseline All: Allows resource to create and update baselines for all Projects. Requires the user to have the Project - Edit access right. Type: Global - Project - Risk, Issue, Change Request - Create/Edit: Allows users to create and edit risks, issues, and changes for a specific project. Type: Instance - Project - Risk, Issue, Change Request - Delete: Allows users to delete risks, issues, and changes for a specific project on which they are a staff member. Type: Instance - Project - Risk, Issue, Change Request - Delete - All: Allows you to delete risks, issues, and change requests for all projects. Type: Global - Project - Risk, Issue, Change Request - Edit - All: Allows you to create and edit risks, issues, and change requests for any project. Type: Global - Project - Risk, Issue, Change Request - View: Allows users to view all risks, issues, and change requests for a specific project. Type: Instance - Project - Risk, Issue, Change Request - View - All: Lets you view all risks, issues, and change requests for a specific project. Type: Global - Project - Schedule in Browser: Allows user to auto-schedule a project in the Gantt view. Auto-scheduling a project is restricted to users with the Project - Edit Management access right. Type: Global - Project - View Base: Allow user to view the project overview and properties for the project. This access right serves as a minimal foundation right and can be used in combination with other access rights. Type: Instance - Project - View: Allows users to view management properties, roster, and key tasks of a specific project. This right also allows users to view the project in a project scheduler, such as Microsoft Project or OWB. This right also includes financial view rights for the project.

Type: Instance - Project - View Access Rights - All: Allows users to view access rights for a project. In the Home menu, this right
implies that users also have the Project - View access right to the project. In the Administration menu, users must also have the Resource - Edit Administration right. Type: Global - Project - View All Fields: Allows users to view all the general properties and custom defined fields for a specific project. This access right serves as a minimal foundation right and can be used in combination with other access rights. Type: Instance - Project - View Financial: Allows users to view the general and financial properties for a specific project. Type: Instance - Project - View Financial - All: Allows users to view the general and financial properties, and processes on all projects. This right does not include the Project - Budget Plan - View All access right. Type: Global - Project - View Management: Allows users to view management properties, roster, and key tasks of a specific project. This right also allows users to view the project in a project scheduler, such as Microsoft Project. To open a master project in an external project scheduler, the user also requires view or edit access to each sub-project. Type: Instance - Project - View Management - All: Allows users to view management properties and processes on any project that has been enabled for management. This right allows users to view (read-only) the project in an integrated scheduler (Open Workbench or Microsoft Project). To open a master project in an external project scheduler, the user also requires view or edit access to each sub-project. Type: Global - Project - View Tasks: Allows users to view all tasks for a specific project. This access right is dependent on the resource having the Project - View Base access right. Type: Instance - Project - View Tasks - All: Allows users to view tasks and work breakdown structure for any project the user has been granted access.
> [!NOTE]
> If you allocate this access rights to a user, they will see all the tasks for all projects in Clarity (formerly known as the New User Experience). If you want, users to access only tasks allocated to them, please use instance rights. Type: Global - Projects - Navigate: Allows users to navigate to the Projects list page and to the My Projects portlet in Classic PPM. Type: Global - Project - Risk, Issue, Change Request - Create: Allows users to create Project risks, issues, and change requests in Clarity. Type: Global - Project - Risk, Issue, Change Request - Delete - All: Allows users to delete all risks, issues, and change requests on projects in Clarity for which they have access. Type: Global - Project - Risk, Issue, Change Request - Edit - All : Allows users to edit and view all risks, issues and change requests in Clarity for a project instance Type: Global - Project - Risk, Issue, Change Request - View - All : Allows users to view all risks, issues, and change requests for a project instance Type: Global - Project - Delete - All : Allows users to delete any Project. Does not include the Project - View right Type: Global

Project Hierarchy Access Rights
The following access rights are available for the project hierarchy:
- Project - Hierarchy - Financial Rollup - Edit : Allows user to edit the financial rollup hierarchy for the project. Type: Instance
- Project - Hierarchy - Financial Rollup - Edit - All: Allows users to edit the financial rollup hierarchy for any project for which they have access rights. Type: Global
- Project - Hierarchy - Financial Rollup - View: Allows user to view the financial rollup hierarchy for the project. Type: Instance
- Project - Hierarchy - Financial Rollup - View - All: Allows user to view the financial rollup hierarchy for any project for which they have access rights. Type: Global
- Project - Hierarchy - Financial Rollup - Add : Allows user to add investments to the financial rollup hierarchy for the project. Type: Instance
- Project - Hierarchy - Financial Rollup - Add - All: Allows user to add investments to financial rollup hierarchy for any project for which they have access rights. Type: Global
- Project - Hierarchy - Parents - Add: Allows user to add investments to the parent hierarchy for the project. Type: Instance
- Project - Hierarchy - Parents - Add - All: Allows users to add investments to the parent hierarchy for any project for which they have access rights. Type: Global Project - Hierarchy - Parents - Edit: Allows user to edit the parent hierarchy for the project. Type: Instance
- Project - Hierarchy - Parents - Edit - All: Allows users to edit the parent hierarchy for any project for which they have access rights. Type: Global
Timesheets Access Rights
The following access rights are available for timesheets:
- Timesheets - Navigate Allows you to navigate to timesheet pages. Type: Global
- Timesheets - Edit All Allows users to edit all timesheets. Type: Global
- Timesheets - Approve All Allows users to approve all submitted timesheets. Type: Global
- Resource - Enter Time Allows users to complete and submit timesheets for a specific resource. Type: Instance
- Project - Edit Project Plan Allows users to add unplanned tasks to a specific project when completing their timesheets when they are a team member on the project. Type: Instance
Portfolio Management Access Rights
The following access rights are available for users who work on portfolios:
- Portfolio - Create: Allows a user to create Portfolios. Includes: Portfolio - Navigate right to navigate to the portfolio pages. Type: Instance
- Portfolio - Navigate: Lets a user access the portfolio pages. Type: Instance
- Portfolio - Edit All: Lets a user edit all Portfolios. Type: Global
- Portfolio - Edit Access Rights - All: Lets a user edit the access rights for all portfolios. This access right does not include the Portfolio - Navigate or Portfolio - View rights. Type: Global
- Portfolio - View Access Rights - All: Lets a user view the access rights for all portfolios. This access right does not include the Portfolio - Navigate or Portfolio - View rights. Type: Global
- Portfolio - View All: Lets a user view all portfolios. Type: Global
- Portfolio - XOG Access: Lets a user import and export portfolio instances using the XML Open Gateway interface. Type: Instance
You can define a portfolio user as a manager or a stakeholder on a portfolio properties page.
- Manager: As a manager, the user can edit information in the portfolio. - Stakeholder: As a stakeholder, the user can only view information in the portfolio.
If a user has rights to view or edit a portfolio, the user can view or edit all investments and plans in the portfolio.
Requirements Planning Access Rights
You require the following requirements for planning access rights to work with this category:
- Release Access Rights - Release Plan Access Rights - Requirement Access Rights
Release Access Rights
The following access rights allow you to create, edit, view, and delete releases:
- Release - Approve: Allows the user to approve specific instance of a release. Type: Instance
- Release - Approve All: Allows the user to approve all releases. Type: Global
- Release - Create: Allows the user to create a release. This right includes the Releases - Navigate access right. To create a new release, an investment is required. Hence, the user also requires investment view rights (instance or global) for one or more investments. Type: Global
- Release - Edit: Allows the user to edit specific instance of a release. Type: Instance
- Release - Edit All: Allows the user to edit all releases. Type: Global
- Release - Edit Access Rights: Allows the user to edit the access rights for a specific release. Does not include the Releases - Navigate or Release - View access rights.

Type: Instance - Release - Edit Access Rights - All: Allows the user to edit the access rights for all Releases. Does not include the
Releases - Navigate or Release - View access rights. Type: Global - Release - View: Allows the user to view specific instance of a release. This access right does not include the Releases - Navigate right required to access the list of releases for which you have view access. Type: Instance - Release - View All: Allows the user to view all releases. This access right does not include the Releases - Navigate right required to access the list of releases. Type: Global - Release - View Access Rights: Allows the user to view the access rights for a specific release. Does not include the Releases - Navigate or Release - View access rights. Type: Instance - Release - View Access Rights - All: Allows the user to view the access rights for all Releases. Does not include the Releases - Navigate or Release - View access rights. Type: Global - Release - Manager (Auto): Automatic right that is granted to the manager of a release. Type: Instance - Releases - Navigate: Allows the user to access the release planning pages. Type: Global - Release - XOG Access: Allows the user to import and export release instances using the XML Open Gateway interface. Type: Global
Release Plan Access Rights
The following access rights allow you to create, edit, view, and delete release plans:
- Release Plan - Create: Allows the user to create a release plan. This right includes the right to navigate to the release plan pages. Type: Global
- Release Plan - View: Allows the user to view specific instance of a release plan. Type: Instance
- Release Plan - View Access Rights: Allows user to view the access rights for a specific Release Plan. Does not include the Release Plan - Navigate or Release Plan - View rights. Type: Instance
- Release Plan - Edit Access Rights: Allows the user to edit the access rights for a specific release plan. Does not include the Release Plan - Navigate or Release Plan - View rights. Type: Instance
- Release Plan - Edit Access Rights - All: Allows the user to edit the access rights for all release plans. Does not include the Release Plans - Navigate or Release Plan - View rights. Type: Global
- Release Plan - Edit: Allows the user to edit specific instance of a release plan. Type: Instance
- Release Plan - Edit All: Allows the user to edit all releases plans. Type: Global
- Release Plan - Navigate: Allows the user to access the release planning pages.

Type: Global - Release Plan - View Access Rights - All: Allows the user to view the access rights for all release plans. Does not
include the Release Plans - Navigate or Release Plan - View rights. Type: Global - Release Plan - View All: Allows the user to view all release plans. Type: Global - Release Plan - XOG Access: Allows the user to import and export Release Plan instances using the XML Open Gateway interface. Type: Global
Requirement Access Rights
The following access rights allow you to create, edit, view, and delete requirements:
- Requirement - Approve: Allows the user to approve specific instance of a requirement. Type: Instance
- Requirement - Approve All: Allows the user to approve all requirements. Type: Global
- Requirement - Create: Allows the user to create a requirement. The right includes the right to navigate to the requirement pages. Type: Global
- Requirement - Edit: Allows the user to edit specific instance of a requirement. Does not include the Requirements Navigate access right. Type: Instance
- Requirement - Edit All: Allows the user to edit all requirements. Type: Global
- Requirement - Edit Access Rights: Allows the user to edit the access rights for a specific requirement. Does not include the Requirements - Navigate or Requirement - View access rights. Type: Instance
- Requirement - Edit Access Rights - All: Allows the user to edit the access rights for all requirements. Does not include the Requirements - Navigate or Requirement - View access rights. Type: Global
- Requirement - Manager (Auto): Automatic right that is granted to the manager of a requirement. Type: Instance
- Requirement - Prioritize: Allows the user to edit the priorities subpage for a specific instance of a requirement. Does not include the Requirements - Navigate access right. Type: Instance
- Requirement - Prioritize All: Allows the user to prioritize all requirements. Includes the Requirement - Edit All access right. Type: Global
- Requirement - View: Allows the user to view specific instance of a requirement. Does not include the Requirements Navigate access right. Type: Instance
- Requirement - View All: Allows the user to view of all requirements. Type: Global
- Requirement - View Access Rights: Allows the user to view the access rights for a specific requirement. Does not include the Requirements - Navigate or Requirement - View access rights.

Type: Instance - Requirement - View Access Rights - All: Allows the user to view the access rights for all requirements. Does not
include the Requirements - Navigate or Requirement - View access rights. Type: Global - Requirements - Navigate: Allows the user to access the requirements list page. Type: Global
Resource Management Access Rights
This page lists the required access rights for resource management, requisitions, and capacity planning scenarios.
- Resource Access Rights - Additional Access Rights for Requisitions - Scenario Access Rights (Capacity Planning)
Resource Access Rights
The following access rights allow you to create, view, and edit resource properties:
- Administration - Resources: Allows users to navigate to the administration pages for viewing and editing resources. Requires: Resource - Edit Administration right to view individual resources. Type: Global
- Resource - Approve Timesheet: Allows users to approve and reject timesheets for a specific resource. The right does not include the Resource - Enter Time right. Type: Instance
- Resource - Create: Allows users to create a resource or role, and edit properties. The right allows users to create labor and nonlabor resources. Requires: Resource - Navigate right Type: Global
- Resource - Delete - All: Allows user to delete inactive resources or roles (but not teams). Includes the Resource View - All global access right. Type: Global
- Resource - Edit: Allows users to view and edit general information, contact information, financial information, skills, and the calendar for a resource. Requires: Resource - Navigate right Type: Instance
- Resource - Edit - All: Allows users to view and edit general information, contact information, financial information, skills, and calendar for all resources. Requires: Resource - Navigate right Type: Global
- Resource - Edit Access Rights: Allows users to grant or revoke access rights for a specific resource. Requires: The Resource - Edit Administration right and either the Resource - View or the Resource - View - All right Type: Instance
- Resource - Edit Administration: Allows users to edit a specific resource from administration pages. NOTE
1. The 'Resource - Edit Administration' right is only available as an OBS Unit or Instance access right. Hence, you can use a combination of the Global 'Administration - Resources' access right and control access through OBS Unit or Instance rights to control which users can be managed in Administration.

2. The 'Administration - Authorization' global access right, allows users to update any resource in the system without additional access rights.
Requires: Administration - Resources right Type: Instance - Resource - Edit Calendar: Allows users to edit their own calendar. Requires: Resource - Navigate right Type: Instance - Resource - Edit Financial - All: Allows users to view general and financial properties, and to edit only the financial properties for all resources. Requires: Resource - Navigate right Type: Global - Resource - Edit General: Allows users to view and edit general information, contact information, skills, and the calendar of a resource. Requires: Resource - Navigate right Type: Instance - Resource - Edit General - All: Allows users to view and edit properties for a resource: general information, contact details, skills, and their calendar. Requires: Resource - Navigate right Type: Global - Resource - Enter Time: Allows users to complete and submit timesheets for a specific resource. Type: Instance - Resource - External Access: Allows users access to the Resources, Resource Finder, and Resource Requisitions menus and property pages under Resource Management in Classic PPM. Controls user read/write access to data on these pages by setting the instance and global access rights for resources, projects, and requisitions. Type: Global - Resource - Hard Book: Allows users to soft and hard book a specific resource for investments to which they have view or edit rights. Type: Instance - Resource - Hard Book - All: Allows users to soft and hard book all resources for investments to which they have view or edit rights. Type: Global - Resource - Navigate: Allows users to access resource management pages. Type: Global - Resource - Soft Book: Allows users to soft book a specific resource or role to an investment to which they have edit rights. Type: Instance - Resource - Soft Book - All: Allows a user to soft book resources to investments for which the user has project management edit rights (Project - Edit Management) or investment edit rights. The right also allows the user to edit or remove any soft-booking for the specified resource. Type: Global - Resource - Update Skills: Allows users to create, edit, and view the skills for a specific resource. This right also allows users to view information about the resource. Requires: Resource - View right for the resource Type: Instance - Resource - Update Skills - All: Allows users to create, edit, and view the skills of all resources. The right also allows users to view general information of resources. Requires: Resource - View right

Type: Global - Resource - View: Allows users to view all of information for a specific resource, except for financial information.
Type: Instance - Resource - View - All: Allows users to view information, except the financial properties of all resources. This right is
also required for an advanced user or manager to mark a resource or role for deletion in the system. Type: Global - Resource - View Access Rights: Allows users to view access rights for a specific resource. Requires: Resource - View right or Resource - Edit Administration right Type: Instance - Resource - View Book: Allows users to view bookings for a specific resource. Type: Instance - Resource - View Book - All: Allows users to view bookings for all resources. Type: Global - Resource - View Financial: Allows users to view general and financial information for a specific resource. Required: Resource - Navigate right Type: Instance - Resource - View Financial - All: Allows users to view financial properties for all resources. Required: Resource - Navigate right Type: Global - Resource Management - Navigate: Allows user access to the resource management pages in Clarity. The user can only view resource information for resources to which the user has access. Type: Global - Team - Delete - All: Allows user to delete teams in Clarity. Includes the Team - View - All global access right. Type: Global
Additional Access Rights for Requisitions
In addition to the Resource access rights, you may need the following rights to manage requisitions:
- Project - Attach Requisitions Entry Resources - All: Lets you attach resources to requisition entries and includes adding, editing, proposing, or deleting resources from the request results page. This right lets users change project status to Proposed and Booked. This right includes the Project - View Requisitions access right. Type: Global
- Project - Create/Edit Requisitions - All: Allows you to create new requisitions, edit existing requisitions, and delete requisitions. Also, allows you to view the requisition resources and change a requisition status at any time. With this access right, if you also have the Project - Edit rights, then you can also accept requisitions. Type: Global
- Project - View Requisitions - All: Allows the user to view requisitions and the requisition resources. Type: Global
- Process - Create Definition: Allows you to create new process definitions for a requisition. Type: Global
- Process - Initiate: Allows you to start a new process instance for a requisition. Type: Global
Scenario Access Rights (Capacity Planning)
Best Practice: Capacity planning scenarios are designed for you to view a subset of all resources or investments. Limit resources or investments through a security OBS or through instance-level resource access rights. A more manageable amount of data displays for those resources and investments you manage. Additionally, avoid accessing capacity planning scenarios as a Classic PPM administrator or as a user with global access rights to all resources.

The following access rights are available to work with capacity planning scenarios:
- Scenario - Edit: Allows users to edit and delete a specific scenario. Includes: Scenario - View and the ability to delete the Scenario Requires: Portfolio - Navigate Type: Global
- Scenario - Edit Access Rights: Allows users to edit access rights for a specific scenario. Requires: Portfolio - Navigate right, Portfolio - View right, or Scenario - View right Type: Instance
- Scenario - Manager - Automatic: When you create a scenario, access is automatically assigned. The access allows you to view, edit, and delete scenarios that you own. You can also view, edit, and delete access for that scenario. Type: Global
- Scenario - Navigate: Allows users to view the Scenario toolbar on capacity planning scenario-enabled pages and create new scenarios. Type: Global
- Scenario - View: Allows users to view a specific scenario. Requires: Portfolio - Navigate right or Portfolio - View right. Type: Instance
NOTICE
In Clarity 16.2.3, the names and descriptions of the Scenario access rights are updated, while the functionality remains unchanged (as detailed above).
To learn more, see Change Impact and Upgrade.
Studio Access Rights
You require the following Studio access rights to work with this category:
- Basic Studio Access Rights - Content Add-Ins Access Rights - Content Package Access Rights - Menu Manager Access Rights - Object Access Rights - Partition Model Access Rights - Portlet Access Rights - Portlet Pages Access Rights
Basic Studio Access Rights
The following basic access rights are required to access the Administration, Studio menu:
- Administration - Access Allows the user to access the Administration menu. Type: Global
- Administration - Studio Allows the user to access Classic PPM Studio menus and pages. This right allows the user to create, edit, and delete UI Themes. The user can view queries, portlets, and portlet pages. This page lists additional rights for editing portlets, custom objects, and other Studio items. This right is dependent on having a license to Studio. Type: Global
Content Add-Ins Access Rights
The following access right can be used to work with add-ins:
- Content Add-Ins - Administer Allows administration of content add-ins. Includes the Administration - XOG access right. Type: Global
Content Package Access Rights The following access right can be used to work with content packages: - Content Package - Administer Allows user to create, edit, delete, and view content packages.
Type: Global
Menu Manager Access Rights You require the following access rights to work with the menu manager: - Menu Definition Editor - All Allows a user to edit and view the definitions of all menu items for the Navigator or
Administration menu. Type: Global - Menu Definition Viewer - All Allows a user to view the definitions of all menu items for the Navigator or Administration menu. Type: Global
> [!NOTE]
> To see all menu items in Studio, you must have the following rights: - Administration - Access - Administration - Partition Models - Administration - Studio - Menu Definition Viewer - All
Object Access Rights The following access rights are required to work with objects in Studio: - Custom Objects Editor Allows users to edit the definition of a custom object.
Type: Global - Object - Create Definition Allows the user to administer and use their Studio custom objects. This right allows the
user to create, edit, and delete their custom objects and to use the objects within the application. This right includes the Administration - Access right. Type: Global - Object Administration Allows a user to administer and use Studio and custom objects and views. This right is dependent on the Administration - Access right being granted. Type: Global
Partition Model Access Rights You require the following access rights to work with partitions: - Administration - Partition Models Allows users to manage partition models.Requires: Administration - Access
Type: Global - System Partition - Administer Allows a user to administer the System partition.
Type: Global

Portlet Access Rights
The following access rights are available for working with portlets:
- Portlet Create: Allows a user to create new portlets. Type: Global
- Portlet Definition Editor: Allows the user to edit and view the definition of a specific portlet. Requires: Administration - Studio to access the Studio menu. Type: Instance
- Portlet Definition Editor - All: Allows a user to edit and view the definitions of all portlets available from Studio. Requires: Administration - Studio to access the Studio menu. Type: Global
- Portlet Navigate: Allows a user to navigate to the portlet configuration pages. Type: Global
- Portlet - View: Allows users to view a specific portlet. Type: Instance
- Portlet Viewer - All: Lets you view and add stock portlets to portlet pages. The right helps add a stock portlet to a personal dashboard. Type: Global
Portlet Pages Access Rights
The following rights can be used to work with portlet pages:
- Page Definition Editor: Allows users to edit, view, and delete the definition of a specific page. Required: Administration - Studio access right to access the Studio menu. Type: Instance
- Page Definition Editor - All: Allows users to edit, view, and delete the definition of all pages. Required: Administration - Studio access right to access the Studio menu. Type: Global
- Page Definition Viewer: Allows the user to view the definition of a specific page. Required: Administration - Studio access right to access the Studio menu. Type: Instance
- Page Definition Viewer - All: Allows the user to view the definition of all pages. Required: Administration - Studio access right to access the Studio menu. Type: Global
- Page - View: Allows users to view a general page in Classic PPM. For instance pages (such as portfolio pages), this right is not required. Type: Instance
- Page Viewer - All: Lets the user view any configured portlet page. Before the users can view them, link the portlet pages to a menu. The user requires the rights to navigate the menu. For example, if a page links to the Administration menu, the users require the Administration - Access right. Type: Global
XML Open Gateway (XOG) Access Rights
You require the following XML Open Gateway (XOG) access rights to work with this category:
- Access Rights to Run the XOG Client - XOG Access Rights for Individual Objects

Access Rights to Run the XOG Client Before you use the XOG client, you must have a valid Classic PPM login name and password. You must also have one of the following access rights: - Administration - Access - Administration - XOG XOG Access Rights for Individual Objects Before a resource can use the XOG to import or export data for a particular object, assign the resource the XOG access right for that object. For example, Asset - XOG Access, Project - XOG Access, Resource - XOG Access, and so on. XOG access rights for objects are listed in the global access rights list. For example, to support a custom desktop application that needs asset information, grant the Asset - XOG Access right to a resource. The resource can import and export instance data that is associated with the asset object. However, the resource is not able to import or export data on any other objects.
> [!TIP]
> Click Administration, select Resources, and then open a resource. On the Resource's Access Rights tab, click Global and then click Add. In the Access Right filter field, enter *XOG and click Filter.
- Accounts Receivable Transaction - XOG Access: Allows user to import and export Accounts Receivable

Transaction instances using the XML Open Gateway interface.
- Action Item approval - XOG Access: Allows user to export and approve action items using the XML Open Gateway

interface.
- Add-In Lookup Mapping - XOG Access: Allows user to import and export Add-In Lookup Mapping instances using

the XML Open Gateway interface.
- Admin Code - XOG Access: Allows user to import and export Admin Code instances using the XML Open Gateway

interface.
- Application - XOG Access: Allows user to import and export Application instances using the XML Open Gateway

interface.
- Asset - XOG Access: Allows user to import and export Asset instances using the XML Open Gateway interface.
- Benefit Plan - XOG Access: Allows user to import and export Benefit Plan instances using the XML Open Gateway

interface.
- Budget Plan - XOG Access: Allows user to import and export Budget Plan instances using the XML Open Gateway

interface.
- Burdening Class - XOG Access: Allows user to import and export Burdening Class instances using the XML Open

Gateway interface.
- Burdening Matrix - XOG Access: Allows user to import and export Burdening Matrix instances using the XML Open

Gateway interface.
- Business Process Definition - XOG Access: Allows user to import and export Business Process Definition instances

using the XML Open Gateway interface.
- Capacity Planning Scenario - XOG Access: Allows user to import and export Capacity Planning Scenario instances

using the XML Open Gateway interface.
- Category - XOG Access: Allows user to import and export Category instances using the XML Open Gateway

interface.
- Change Request - XOG Access: Allows user to import and export Change Request instances using the XML Open

Gateway interface.
- Charge Code - XOG Access: Allows user to import and export Charge Code instances using the XML Open Gateway

interface.
- Company - XOG Access: Allows user to import and export Company instances using the XML Open Gateway

interface.
- Company Class - XOG Access: Allows user to import and export Company Class instances using the XML Open

Gateway interface.
- Content Pack - XOG Access: Allows user to import and export Content Pack instances using the XML Open Gateway

interface.
- Cost Matrix - XOG Access: Allows user to import and export Cost Matrix instances using the XML Open Gateway

interface.
- Cost Plan - XOG Access: Allows user to import and export Cost Plan instances using the XML Open Gateway

interface.
- Cost Plus - XOG Access: Allows user to import and export Cost Plus instances using the XML Open Gateway

interface.
- Department - XOG Access: Allows user to import and export Department instances using the XML Open Gateway

interface.
- Document - XOG Access: Allows user to import and export Document instances using the XML Open Gateway

interface.
- Entity - XOG Access: Allows user to import and export Entity instances using the XML Open Gateway interface.
- EVMS Agency - XOG Access: Allows user to import and export EVMS Agency instances using the XML Open

Gateway interface.
- EVMS Contract - XOG Access: Allows user to import and export EVMS Contract instances using the XML Open

Gateway interface.
- Financial Planning - XOG Access: Allows user to import and export Financial Planning instances using the XML

Open Gateway interface.
- General Ledger Account - XOG Access: Allows user to import and export General Ledger Account instances using

the XML Open Gateway interface.
- General Ledger Transaction - XOG Access: Allows user to import and export General Ledger Transaction instances

using the XML Open Gateway interface.

Clarity Jobs Reference
Classic PPM includes stock jobs that you can configure, schedule, and run. As an administrator, use the following list of jobs, descriptions, and parameters for running jobs successfully.
- Anonymize Personally Identifiable Information (PII) - Auto-approve Timesheets Job - Autoschedule Project Job - Auto-submit Timesheets Job - Clean User Session Job - Purge Picklist Data Job - Convert Mixed Booking Status Job - Copy Cost Plan of Record Charge Code with Cost Type Job - Create Agile Central Investments - Create and Update Jaspersoft Users Job - Create Data Warehouse Trend Job - Database Optimization Job - Datamart Extraction Job - Datamart Rollup - Time Facts and Time Summary Job - Delete Investments and Time Reporting Periods Job - Delete Duplicate Timesheets Job - Delete Data Warehouse Trend Job - Delete Log Analysis Data Job - Delete Process Instance Job - Enable Capitalization Job - Execute a Process Job - Generate Invoices - Global Search Sync Job - Import Financial Actuals Job - Import Integration Mappings Job - Import Integrations Job - Index Contents and Documents for Searches Job - Update Investment Allocations and Usage - Load Data Warehouse Job - Load Data Warehouse Access Rights - LDAP - Synchronize New and Changed Users Job (On-Premise Only) - LDAP - Synchronize Obsolete Users Job (On-Premise Only) - Oracle Table Analyze Job (On-Premise Only) - Parallel Job Processor - Populate Timesheets Job - Populate Users User License Type - Post Actuals to Investment Job - Post Incident Financials Job - Post Timesheets Job - Post to WIP Job - Post Transactions to Financial Job - Post WIP Actuals to Financial Plans Job - PPM Customization Discovery Analysis Job - Purge Documents Job - Purge Audit Trail Job - Purge Action Items Job - Purge Financial Tables Job - Purge Notifications Job - Purge Report Output Job - Purge Temporary Aggregated Data Job - Rate Matrix Extraction Job - Rate Matrix Extraction Job - Refresh Resource Directory Job

Clarity - 16.4.1 3730

> [!TIP]
> The following list shows a typical sequence for scheduled jobs in a standard Classic PPM production environment: 1. Time Slicing job (run every minute) 2. Time Slicing Sync job (runs every five minutes) 3. Investment Allocation job (run every day) 4. Rate Matrix Extraction (also known as Incremental run) which runs with options:
a. Extract Cost for Schedulers (optional) b. Prepare Rate Matrix Data c. Update Rate Matrix Data d. Incremental 5. Post Timesheets 6. Purge Temporary Aggregated Data 7. Update Aggregated Data 8. Update Earned Value History 9. Create Earned-Value Snapshots 10. Update Business Objects Report Tables 11. If you use the financial posting module: a. Post Transactions to Financials b. Post to WIP c. Import Financial Actuals (Optional) Perform the following actions to obtain rates after the Incremental or Full Rate Matrix Extraction job is complete: - Run the Post Timesheets job - Baseline a project - Baseline a task - Run the Update Earned Value History job - Open one or more projects in Open Workbench or Microsoft Project (if using those integrations) The full Rate Matrix Extraction job must complete before the Post Timesheets job runs. Do not run the following jobs during normal peak production business hours: - Rate Matrix Extraction (also known as Full run) which runs with job parameters: - Extract Cost for Schedulers (optional) - Prepare Matrix Data - Update Matrix Data - Datamart Extraction - Datamart Rollup REMEMBER Follow these best practices when configuring job incompatibility settings:
- OOTB Jobs: Mark out-of-the-box (OOTB) jobs as Incompatible only if recommended by Broadcom Support or if a consistent issue is identified when specific jobs run in parallel.
- Custom Jobs: Set custom jobs as Incompatible only if they update the same database tables as an OOTB job or another custom job.
- Schedule Jobs: Schedule jobs strategically, preferably outside of business hours, and avoid changing incompatibility settings unless it is necessary or advised by Broadcom Support.
- Execution Intervals: When scheduling multiple jobs, ensure sufficient intervals between job executions, especially for larger jobs, to maintain optimal performance. Note: Marking long-running jobs as Incompatible with others can delay the execution of all remaining jobs.
Anonymize Personally Identifiable Information (PII)
This job permanently obfuscates attribute values that contain personal data for organizations with GDPR or other privacy policies. After running the job, the following attributes for designated resources are scrambled with serialized data:
- Resource Full Name - Resource First Name - Resource Last Name - Resource E-mail
Custom date, string, number, and money attributes are also scrambled.
Parameters
- Anonymize Only Inactive Resources with Anonymize PII Selected: Select this option to scramble the data for the resources flagged with the Anonymize Personally Identifiable Information (PII) option on the Resource Settings page.
- WARNING! Anonymize ALL Resources: Select this option to permanently obfuscate the resource data indicated in the job description for all internal resources.
Auto-approve Timesheets Job
The Auto-approve Timesheets job automatically approves individual timesheets that meet the configured parameters and have a status of Submitted.
Parameters:
- Time Period: Select from Previous, Current, Next, or another Time Period. - Resource OBS: Choose one or more Resource OBS units. - OBS Mode: Choose OBS Mode. The default value is set to UNIT ONLY - Resource Manager: Filter by assigned resource manager. - Booking Manager: Filter by assigned booking manager. - Team: Select the Team Investments. - Primary Role: Filter by one or more roles. - Resource: Select individual resources. - Person Type: Choose from options like Contractor or Employee. - Resource Active: Select All, Yes, or No.
Restrictions:
The Auto-approve Timesheets, Populate Timesheets, Post Timesheet, and Timesheet Integration jobs are marked as incompatible and cannot be executed simultaneously.
After Job Execution:
After the job runs, verify that the qualifying timesheets are updated with the status Approved in the Timesheets. This confirms successful processing through the Auto-approve Timesheets job.

Autoschedule Project Job
This job creates or overwrites tentative schedules by automatically scheduling tasks that are based on task dependencies, constraints, priority order, and related date and resource logic. This job can be run concurrently with other instances of this job.
Parameters
- Project: Defines the name of the investment to schedule. - OBS Unit: Defines the specific OBS unit to schedule. All projects that are contained in the OBS unit and for which
you have the Project - View Management right are auto scheduled. If both a project and an OBS unit are selected, the project is ignored and the OBS unit is used. - Autoschedule Date: Defines the date from which to schedule tasks. - Ignore Tasks Starting Before: Defines the date before which tasks are ignored during auto scheduling. - Ignore Tasks Starting After: Defines the date to begin excluding all tasks from the schedule. - Resource Constraints: Indicates if this job considers resource availability during auto scheduling. Default: Selected - Schedule from Finish Date: Indicates scheduling the job backwards from the finish to the start date, rather than from the start date to the finish date. Default: Cleared - Subnets: Indicates calculating the critical path for the entire project during auto schedule. Default: Cleared - Honor Constraints on Started Tasks: Indicates for the job to schedule the remaining work on this task according to its normal auto schedule logic, including any task constraints and dependencies. Default: Cleared - Schedule Assignments on Excluded Tasks: Indicates changing the task assignment dates for the job, as long as the new dates stay within the existing start and finish dates for the task. Default: Cleared - Start Successors on Next Day: Indicates starting all successor tasks for the job on the next day. Default: Cleared - Publish After Scheduling: Indicates if changes made to the tentative plan are automatically published to the Plan of Record at the end of auto scheduling. When selected, the tentative plan is deleted and the project is unlocked. Default: Cleared
Auto-submit Timesheets Job
The Auto-submit Timesheets job automatically submits timesheets for individuals. This job processes timesheets that match selected parameters and have a status of "Open" or "Returned".
Requirements:
- The job processes all Timesheets meeting specified parameters and with a status of "Open" or "Returned". - Configured Timesheet Rules are applied during job execution.
Parameters:
ParameterTypeDescription
- Time Period: Select from Previous, Current, Next, or another Time Period. - Resource OBS: Choose one or more Resource OBS units. - OBS Mode: Choose OBS Mode. The default value is set to UNIT ONLY. - Resource Manager: Filter by assigned resource manager. - Booking Manager: Filter by assigned booking manager. - Team: Select the Team Investments. - Primary Role: Filter by one or more roles. - Resource: Select individual resources. - Person Type: Choose from options like Contractor or Employee. - Resource Active: Select All, Yes, or No.
Restrictions:
- The Auto-submit Timesheets job should not run simultaneously with any custom processes defined in Clarity. - The Auto-submit Timesheets, Populate Timesheets, Post Timesheet, and Timesheet Integration jobs are marked as
incompatible and cannot be executed simultaneously. After Job Execution: - If no errors are found, the timesheet is automatically submitted. - Otherwise:
- Clarity sends a timesheet notification for errors. - The Errors button appears in Timesheet for error details. - The Has Errors field is checked for affected timesheets in the Timesheets grid.
Clean User Session Job This job removes the session-based user data stored in the product for the resource logged in. The criteria for removing the data is the creation date/time of the data, with the length of the session expiration time must be before the date/time this job runs. User data contains references to the resource logged in to the product and any session-based data, such as Shopping Carts and Search Results that have persisted.
Requirements None
Restrictions This job cannot run concurrently with other jobs including other instances of this job.
Parameters None
Purge Picklist Data Job This job removes purged picklist data that may have accumulated over time. The purge flag is set behind the scenes when specific delete picklist actions are taken.
Requirements None
Restrictions None
Parameters None
Convert Mixed Booking Status Job This job converts all unlocked investment team allocations with mixed booking status to hard or soft. This job also disables the Allow Mixed Booking option. Updates are made for both resource and role allocations for active and inactive investments.

> [!TIP]
> To view the Allow Mixed Booking check box, click Administration, Project Management, Settings. Use this job if you have activated Clarity and are using the new Staffing (Resource Management) features. The new features do not support mixed booking allocations. The job is inactive by default. As an administrator, activate and run this job so users can use the new features. The job log provides information about the total records that are updated and the total remaining unprocessed records. The mixed booking allocations are left unprocessed in the following cases: - A scheduler has locked the mixed booking allocations for a project. - The user selects the target booking status as Mixed instead of Soft or Hard. Because the mixed allocations are remaining in these cases, the Allow Mixed Booking option is also not disabled.
Requirements None
Restrictions None
Parameters - Target booking status: Specifies the booking status to which to convert the current mixed booking allocations. The
following options are available: - Soft: Any planned allocation on a project remains unchanged and the hard allocation is removed. For example, if
the planned allocation is 65 percent and the hard allocation is 100 percent, after all the mixed allocation status is converted to Soft, the planned allocation remains at 65 percent and the hard allocation is removed. We recommend that you select this option. - Hard: Any planned allocation on a project remains unchanged and the hard allocation is updated to match the planned allocation. For example, if the planned allocation is 75 percent and the hard allocation is 100 percent, after all the mixed allocation status is converted to Hard, both the planned and hard allocation become the same at 75 percent. - Mixed: The mixed booking allocations are left unprocessed. We recommend that you do not select this option.
Copy Cost Plan of Record Charge Code with Cost Type Job This job creates a copy of a plan of record and adds Cost Type to the existing grouping attributes. This job is intended to process only investments that were created before Release 13.2 or that have been enabled for capitalization. This job completes the following tasks: - The job processes only plans of record that have Charge Code as one of the grouping attributes. The job copies
the current plan of record and adds Cost Type to an existing set of grouping attributes. The newly added Cost Type grouping attribute is set to either Capital or Operating on every line. How the attribute is set depends on the charge codes you designate as Capital or Operating in the job parameters. If the charge code for a line is selected in the Capital Charge Code mapping, the cost type of the line is set to Capital. Otherwise, in all cases (including a null charge code), the cost type for the line is set to Operating. - The job creates a cost plan with the following name and ID:
- The new cost plan is named System Converted Cost Plan. - The new cost plan ID is created using the following format: COST_PLAN_CONV_<Year-Month-Day (####-##-##)>.
For example: COST_PLAN_CONV_2013-08-15. - If the check box named Set New Cost Plan as Plan of Record is selected, the new cost plan becomes the plan of
record. - When the Copy Latest Approved Budget Plan check box is selected, the following rule applies: The current approved
budget plan is copied only if it has a charge code selected as a grouping attribute. The newly created budget plan is marked as the approved and the current budget plan. If there is no approved budget (only a submitted budget plan), the job does not copy the submitted budget. If there are many approved budget plans and a submitted budget, the job copies the current approved budget plan and marks the newly created plan as the current approved budget plan. The rules to set the value of newly added Cost Type grouping attribute are same as explained previously for the newly added cost plan. The job creates a budget plan with the following name and ID: - The new budget plan is named System Converted Budget Plan. - The budget plan ID is created using the following format: BUDGET_PLAN_CONV_<Year-Month-day>.
> [!NOTE]
> The new copied budget is set as the current budget. The new copied cost plan is the plan of record only if the Set New Cost Plan as Plan of Record check box is selected. - If no failure occurs during the processing of an investment plan, the job marks the investment as successfully processed. Successfully processed investments are skipped in subsequent executions of the job even if these investments are selected again through an OBS Unit. Successfully processed investments stop appearing in the Investment browse on the job input screen. Therefore, it is important to select the correct options before submitting investments to the job.
This job updates financial plans for investments so that capital cost appears. When you perform an upgrade, the system builds an initial list of investments registered for the Enable Capitalization job. To enable charge codes from new investments for capitalization, run the Register New Investments for EnableCapitalization job. You can run the Copy Cost Plan... job as an ongoing function for bulk updates. You can deactivate the job after you have enabled investments for capitalization and have copied their plans of record.
> [!NOTE]
> The statistics of a job execution are printed in a BG log file for the job. You can open and read the log file. The log file contains information such as the number of processed, skipped, or failed investments.
Requirements
The Enable Capitalization job must be run on the investment before you can select the investment for this job. You can also run the Register New Investments for Enable Capitalization job.
Restrictions
If your investment cost plans contain a large amount of detail, process a few investments at a time.
Parameters
- Investment OBS: Specifies the OBS whose investments you want to process. The job processes all investments for the OBS and its descendants. Use this option if you do not want to select individual investments for processing.
- Investment: Specifies the individual investments that you want to process. - Capital Charge Code: Specifies the charge codes that you want to designate as the cost type Capital. If you do not
indicate a value for a specific charge code, the default cost type Operating is applied. - Operating Charge Code: Specifies the charge codes that you want to designate as operating cost. If you do not
indicate a value for a specific charge code, the default cost type Operating is applied.

Create Agile Central Investments
The job creates Agile Central investments in CA Agile Central from Clarity projects and associates them to the projects. The projects must meet the following criteria:
- Active project - Not a template - Synchronize flag is checked - Associated to an agile system - Integration type is Investment - The Create Agile Central Investment field is not blank
For each eligible project, the job completes the following tasks:
- Gets the project fields required to create the Agile Central investment in Agile Central - Creates the Agile Central investment in Agile Central using the Rally API - Creates the Agile Central investment in PPM with updated information from Agile Central - Updates the Agile Central Investments field in the PPM project. Associates the project with the new Agile Central
investments. - Populates the Last Agile Investment Status field in the PPM project with status information as follows:
- If investment is created successfully, the Create Agile Central Investment field is reset to blank. Also, the Last Agile Sync Status field displays the value "successful".
- If investment is not created successfully, the Create Agile Central Investment field is reset to blank. Also, the Last Agile Sync Status field displays the failure message and the reason for failure. For example, "<AC investment name> already exists".
- Populates the Last Agile Investment Created Date field in the PPM project with the investment creation date and time. - Adds the new Agile Central investment instance to the Agile Central Investment master object in PPM.
Requirements
Assign the following access rights to the integration owner to run the job:
- Agile Central Investment - Create - Agile Central Investment - Edit All
Parameters
- Project: Specifies the individual projects that you want to process. If no projects are selected, all projects that meet the required criteria are processed.
Create and Update Jaspersoft Users Job
To improve performance, the Create and Update Jaspersoft Users job does not create user-specific folders under the Users folder in Jaspersoft. At one point it did; however, this behavior ended in 14.2.0.8, 14.3.0.6, 14.4, and all higher releases.
For example, as an administrator, you create a resource in Classic PPM and provide the resource with Advanced Reporting access rights. The new resource does not automatically get a folder under the Users folder with the folder name matching the Classic PPM resource ID. However, the Jaspersoft administrator can create user-specific folders under the Users folder in Jaspersoft. The PPM administrator must always provide administrative rights to those resources for their user-specific folders so they can manage their folders. Ideally, only the specific Advanced Reporting user and the Jaspersoft administrator need access to the user-specific folders.
After a PPM upgrade, the content of the user-specific folders remains intact. However, after an upgrade, this job deletes any empty folders. The Full Sync option deletes any empty user-specific folders under the Users folder, including any

folders that might have been created by earlier releases of Classic PPM. The empty user-specific folders are deleted only if the folder names correspond to Classic PPM resource IDs. The user-specific folders are not deleted if the Jaspersoft administrator follows any other naming convention.
Run the Create and Update Jaspersoft Users job after creating or updating Classic PPM users with Advanced Reporting access rights to synchronize them with Jaspersoft. This job performs the following tasks: - Creates Advanced Reporting users if they do not already exist in Jaspersoft. - Passes and updates user properties from Classic PPM to Jaspersoft. It updates license types in Classic PPM and
assigns Jaspersoft Roles based on assigned Advanced Reporting access rights. - Disables users in Jaspersoft if they are inactive or locked in Classic PPM. - If a Jaspersoft superuser disables or deletes a valid Classic PPM user, this job makes the user active again in
Jaspersoft.
> [!TIP]
> Schedule this job to execute nightly (off peak hours). Select the Include Inactive and Locked Users checkbox, to synchronize all the Jaspersoft users (active, inactive and locked). If this option is not selected, only Classic PPM active users are synchronized with corresponding Jaspersoft users. Run this job before you run the Synchronize Jaspersoft Roles job.
> [!NOTE]
> The Jaspersoft User ID field is mapped to the User Name field in Classic PPM. In certain situations, such as when the User Name in Classic PPM has special characters, or if you change the User Name, the User Name value in Classic PPM and the User ID value in Jaspersoft do not match. For example, a Classic PPM user name of user@company.com populates the User ID field in Jaspersoft as user_company_com. In another example, the Classic PPM User Name changes from userABC to user XYZ. In this example, the User ID field in Jaspersoft is populated as userABC. This is the first User Name value you specified in Classic PPM. If you search in Jaspersoft for the Classic PPM user (user XYZ), you will not find the user. To resolve this situation, go back and change the User Name in Classic PPM to the original name. If this is not possible, search in Jaspersoft on another field, such as the User name. When you do this, you can find the Classic PPM user in Jaspersoft.
Create Data Warehouse Trend Job This job creates new snapshots of your trending data.
Requirements Run the Load Data Warehouse job before running this job.
Parameters Trend Type: Defines the type of snapshots to take: - All Trend Tables: Snapshots all tables to a trend. - Monthly Trend Tables: Snapshots tables with trend type of Monthly or All. - Summary Trend Tables: Snapshots tables with trend type of Summary or All. - Fiscal Trend Tables: Trend Tables with trend type of Fiscal or All. Trend Period: Use this field to populate a year of periods or a single period of data for fiscal and monthly trend types The field allows you to set up a schedule without having to change the trend period every month.
Trend Year: If the Trend Type is set to Monthly Trend Tables, a snapshot of those tables are taken for that year. The year is required for Monthly Trend Tables. If blank, the default value is the current year.

Trend Name: Use this field to name the trend. If filled in, this will be the trend name, otherwise, the trend name defaults to YYYY-MM-DD:[Trend_key]. For example, 2017-04-10:5000001.
Database Optimization Job Database Optimization Job Maintain the structural integrity of Clarity data using the Database Optimization job. This job targets metadata--including localized strings, instance security rights, and page instances--to purge obsolete records and prevent "ghost" data accumulation. Maintenance Activities The Database Optimization job performs the following maintenance tasks: - Caption Maintenance - Instance Rights Maintenance - Page Instances Maintenance Parameters - Enable Caption Maintenance: Manage the lifecycle of localized UI strings. - Caption Language: Specify which language captions the system processes during the maintenance run. - Delete Orphaned Captions: Identify and remove UI captions no longer associated with a valid attribute, object, or
lookup value. - Caption Limit: Set the maximum number of captions to process in a single run. The job processes remaining orphans
in subsequent runs to prevent table locking. - Clean Orphaned Instance Rights: Purge access rights records that reference deleted object instances. - Clean Orphaned Instance Rights (Limit): Specify the maximum number of orphaned instance rights to delete in one
execution to maintain database performance. - Clean Page Instances: Delete temporary user session page configurations and obsolete cached page instances. - Clean Page Instances (Limit): Specify the maximum number of page instances to purge per run to keep database
transactions manageable. Restriction Do not execute the Database Optimization and System Maintenance jobs simultaneously.
Datamart Extraction Job This job extracts data from the transaction database tables and stores it in the legacy datamart reporting tables. These tables were the foundation for most stock reports and were used for any legacy custom reports.
- NBI_R_FACTS - NBI_RUN_LOGS - NBI_ROLLUP_SQL - NBI_RESOURCE_TIME_SUMMARY - NBI_RESOURCE_CURRENT_FACTS - NBI_PRT_FACTS - NBI_PRTF_FM - NBI_PROJ_RES_RATES_AND_COSTSCP - NBI_PROJECT_FORECAST - NBI_PROJECT_CURRENT_FACTS - NBI_PM_PROJECT_TIME_SUMMARY - NBI_FM_PROJECT_TIME_SUMMARY - NBI_EVENTS - NBI_DIM_OBS_FLAT - NBI_DIM_OBS - NBI_DIM_CALENDAR_TIME - NBI_DIM_FISCAL_TIME
> [!NOTE]
> For Microsoft SQL Server with the SQL Server Agent enabled, add the Classic PPM administrator account to the SQLAgentUserRole role to run datamart extraction jobs. See the Microsoft SQL Enterprise Manager documentation for the details about adding user accounts to the SQLAgentUserRole role.
Requirements - (Recommended) Run this job after the Time Slicing job and after the Rate Matrix Extraction job. - Define daily time slice definitions with a start date at least three months before the current date. - (Optional) Set up datamart stoplights. - Configure the following Datamart settings: - - Datamart Currency
- Datamart Entity - Datamart Extraction Options - Project OBS Mapping - Resource OBS Mapping
Restrictions
This job cannot run concurrently with itself or any of the following jobs:
- Datamart Rollup - Time Facts and Time Summary - Delete Investments and Time Reporting Periods - Import Financial Actuals - Post Timesheets - Post Transactions to Financial - Recalculate Cost of Capital Fields - Time Slicing

Parameters - Extract Only OBS: Specifies that the job extracts only the OBS data if this option is selected. - Extract Only Calendars: Specifies that the job extracts only the calendar data if this option is selected.
> [!TIP]
> - To refresh NBI_DIM_OBS and NBI_DIM_OBS_FLAT, select Extract Only OBS. - To refresh NBI_DIM_CALENDAR_TIME and NBI_DIM_FISCAL_TIME, select Extract Only Calendars. - To refresh NBI_DIM_OBS, NBI_DIM_OBS_FLAT, NBI_DIM_CALENDAR_TIME, and
NBI_DIM_FISCAL_TIME, select both check boxes. - To refresh all tables, clear both check boxes. NOTE By default, the parameters are unchecked. The job executes completely and generates all datamart table data. After a full and successful execution of the job, the entity and currency fields on the Datamart Settings page under Administration are locked.
Datamart Rollup - Time Facts and Time Summary Job This optional job populates the following time facts and time summary tables for resources who want to develop custom reports: - NBI_PM_PT_FACTS - NBI_FM_PT_FACTS - NBI_RT_FACTS - NBI_PM_PROJECT_TIME_SUMMARY - NBI_FM_PROJECT_TIME_SUMMARY - NBI_RESOURCE_TIME_SUMMARY The populated data is not used in standard Classic PPM reports.
Requirements To generate time facts and time summary data, complete the following steps: 1. Click Administration, Data Administration, Datamart Settings. 2. In the Customization of Datamart Extraction section, select at least one check box. 3. (Recommended) Run this job after generating detailed facts from the Datamart Extraction job.
Restrictions Multiple instances of this job cannot run concurrently. This job cannot run with the following jobs: - Datamart Rollup - Time Facts and Time Summary - Datamart Extraction - Delete Investments and Time Reporting Periods
Parameters None
Delete Investments and Time Reporting Periods Job This job is commonly referred to as the Delete Investments or Delete Projects job. The job completes the following tasks:
- Deletes investments that were marked for deletion and includes an option to delete investment-specific financial transactions, actuals, timesheets, and time entries in time reporting periods
- Deletes time entries for specific time reporting periods that were marked for deletion. NOTE Before executing the job, review the following information: - The time reporting periods marked for deletion. The Marked for Deletion field identifies the periods that are marked for deletion. If necessary, you can cancel the deletion of a time reporting period. - The investments marked for deletion. The Purge Flag field on the investments list page identifies the investments that are marked for deletion. If necessary, you can cancel the deletion of an investment.
The job log includes details about the successful and unsuccessful deletions of investments and time reporting periods. You can take corrective action based on the messages.
Requirements Depending on whether you are deleting investments, time reporting periods, or both, verify that the following conditions are true before you run this job: - The projects and investments are inactive and marked for deletion. - The time reporting periods are closed and marked for deletion. - You have the Job - Run access right for this job.
> [!NOTE]
> Grant the Job - Run access right for this job to only the selected users who can govern the process of deleting the investments. Without proper governance, data that was not meant to be deleted can get accidentally deleted. Before running the job, review all items marked for deletion and backup the system.
Restrictions This job cannot run concurrently with other instances of itself or the following jobs: - Import Financial Actuals - Post Timesheets - Post Transactions to Financial - Time Slicing
Parameters - Delete Marked Investments with Timesheet and Transaction Data: When you select this parameter, the job deletes
previously marked inactive investments that have timesheets, financial transaction data, or both. Before you select this parameter and run the job, perform the following steps:
1. a. Select the project management setting Allow Marked Investments with Timesheet and Transaction Data to be Deleted.
b. Mark inactive investments, including any investments with timesheet and transaction data (actuals), for deletion.
When you clear this job parameter, investments with actuals that are marked for deletion are not deleted, even if the project management setting (Allow Marked Investments with Timesheet and Transaction Data to be Deleted) is selected. Marked time reporting periods are deleted regardless of whether this job parameter is selected or not.
> [!TIP]
> In Classic PPM 15.5.1, the Delete Investments job calls the Purge Financial Tables job which does not delete chargeback transactions or chargeback invoice transactions.

Delete Duplicate Timesheets Job In limited customer cases, Clarity erroneously creates duplicate timesheets for a given time period. Customers requested the capability to help identify duplicate timesheets associated with a single time period/resource and remove them from the system in order to improve their internal timesheet audit processes. The new job helps the administrator identify the duplicate timesheets associated with a single time period and a resourceID and removes them from the system. Like all Clarity jobs, it can be executed manually or via a pre-determined schedule.
Delete Data Warehouse Trend Job This job deletes previous snapshots of your trending data. You can specify the removal of a trend or all snapshots before a specific or relative date.
Requirements None Parameters Trend: Select one trend. All its snapshots and trending data are deleted. Delete Trends Created Prior To: If a Specific Date or Relative Date is chosen, then all trends and their snapshots are deleted where the Trend Start Date is before or equal to the date.
Delete Log Analysis Data Job This job removes the Classic PPM log analysis-related data. The criteria for removing the data is the LOG_DATE field on each of the log analysis tables. This job is scheduled automatically to run at 1:00 AM each day.
Requirements None
Restrictions None
Parameters - Log retention in days: Specifies the number of days that data is retained in the tables that are related to analyzed
access logs. The default value for this parameter is 30 days. - Session token retention in days: Specifies the number of days that data is retained in the table LOG_SESSIONS.
The data specifically stores a mapping of the PPM session token to CMN_SEC_USERS.ID for analysis and audit purposes. The default value for this parameter is 14 days.
Delete Process Instance Job This job deletes process instances with a status of Done or Aborted.
Requirements Run the Delete Process Instance job before you upgrade. Without performing this step, a series of full scans on the BPM_ERRORS table can slow performance. For every query, the database flushes all buffer data from the disk in order to load and read new rows. Run this job with date parameters to improve performance. For example, run in monthly time segments.


This job removes stale data from the following tables:


BPM_RUN_PROCESSES BPM_RUN_ASSIGNEE_NOTES BPM_RUN_REPLACE_ASSIGNEES BPM_RUN_ASSIGNEES BPM_RUN_STEP_TRANSITIONS BPM_RUN_STEP_COND_RESULTS BPM_RUN_STEP_COND_OBJECTS BPM_RUN_STEP_ACTION_RESULTS BPM_RUN_OBJECTS BPM_RUN_STEPS ESC_RUN_USERS ESC_RUN_LEVELS ESC_RUN_UNREG_OBJECTS BPM_RUN_OBJECTS BPM_RUN_THREADS BPM_ERRORS BPM_ERROR_ARGUMENTS BPM_RUN_PROCESSES
Restrictions
This job cannot run concurrently with other instances of this job.
Parameters
- Process Name: Defines the name of process instance to delete. - Process Instance Status: Defines the status of the process instances that you want to delete. Select Aborted or
Done. - Finish Date From: Defines the date from which all completed process instances within the selected date range are
deleted. Specify one of the following dates: - Specific Date: Enter a date or use the Calendar tool to select the date. - Relative Date: Select the appropriate relative date from the drop-down. - Finish Data To: Defines the date to which all process instances within the selected data range are deleted. Specify one of the following dates: - Specific Date: Enter a date or use the Calendar tool to select the date. - Relative Date: Select the appropriate relative date from the drop-down. Default: Start of Previous Quarter - Object Type: Defines the object type of process instance you want to delete, such as a project name. Enter the name of the object to process, or use the search tool to select an object. - Initiated By: Defines the name of the user who initiated the process instance you want to delete. Enter the resource name or use the search tool to select a resource. - Initiator OBS: Enter the OBS name or use the search tool to select the OBS name or OBS unit.
Enable Capitalization Job
This job enables you to set expenses in investments that were created before Release 13.2 as either Capital or Operating. Before Release 13.2, all expenses were Operating expenses by default. This job sets the cost type to Capital or Operating on the following items:
- Investments - Investment tasks - Investment transactions (actual posted WIP transactions)
The Enable Capitalization job changes the Cost Type value on the posted actual financial WIP transactions in bulk based on your defined job parameters; for example, from Operating to Capital or from Capital to Operating.
What the Job Does
- Sets the investment cost type to either Capital or Operating: If the charge code of the specified investment is selected in the Capital Charge Codes browse field on the job screen, the cost type of that investment is set to Capital. Otherwise, if the charge code of the specified investment is selected in the Operating Charge Code browse field or if the charge code is not chosen in either of the browses, the cost type of that investment is set to Operating.
- Sets the task cost type to Capital or Operating for each task according to charge codes: If the charge code of the specified task is selected in the Capital Charge Codes browse field on the job screen, the cost type of that task is set to Capital. Otherwise, if the charge code of the specified task is selected in the Operating Charge Code browse field or if the charge code is not chosen in either of the browses, the cost type of that task is set to Operating.
- Sets the transaction cost type for actual posted WIP transactions to Capital or Operating where appropriate: If the charge code of a transaction for a selected investment maps to a capital charge code, the cost type of that transaction is set to Capital. If the charge code of a transaction for a selected investment maps to an operating charge code or if the charge code is not chosen, the cost type of that transaction is set to Operating.
- Sets the team Capitalization % value to the value you enter in the Capitalization Percent parameter: This value is used to calculate the percentage of operating cost and capital cost for team allocations.
Example
The following table shows how the job processes two investments and the cost types that are assigned to tasks and transactions. In the job parameters, the following selections are specified.
Investments: eCommerce Portal Implementation, CRM Enhancement
Capital Charge Codes: eCom, Engineering, CRM
Operating Charge Codes: Operations, Maintenance

Investment

eCommerce Portal Implementation

Tasks

Development

Charge Code eCom

Cost Type Assigned
Capital

Engineering

Capital

How the Cost Type Was Assigned
The Development task has a charge code of Engineering which is designated as a Capital charge code; therefore, the task is assigned a Capital cost type.


Investment
Transactions
CRM Enhancement Tasks

Training

Charge Code Travel Expense

Cost Type Assigned
Operating

Miscellaneous

Null

Null

Software Purchase Engineering

Capital

Hardware Purchase Null

Operating

Attended Conference

Travel Expense

Operating

Resolve bugs

CRM Maintenance

Capital Operating

How the Cost Type Was Assigned
The Travel Expense charge code was not selected in either the Capital or Operating Charge Code parameter field; therefore, the Training task receives the default cost type of Operating.
The cost type for the Miscellaneous task is null because charge code is null on the task.
This transaction has a charge code of Engineering which is a Capital charge code.
The charge code was not selected in any charge code fields; therefore the job does not change the value of the cost type.
The charge code was not selected in any charge code fields; therefore, the job does not change the value of the cost type.
The Resolve Bugs task has a charge code of Maintenance which is designated as an Operating charge code; therefore, the task is assigned an Operating cost type.


Investment

Help Desk

Charge Code Operations

Cost Type Assigned
Operating

How the Cost Type Was Assigned
The Help Desk task has a charge code of Operations which is designated as an Operating charge code; therefore, the task is assigned an Operating cost type.

> [!NOTE]
> Job execution statistics are available in the BG log file for each job. You can open and read the log file. The log file contains information such as the number of investments that were processed, skipped, or failed.

Requirements
- After you run this job, run the Copy Cost Plan of Record Charge Code with Cost Type job to complete the capitalization feature setup.
- During an upgrade, the job takes into account the initial list of investments. To enable charge codes for capitalization for new investments post-upgrade, use the Register New Investments for Enable Capitalization job.

Restrictions
The length of time the job runs depends on the amount of data that is associated with the investments you select. If you have investments with a great amount of data, we recommend limiting the number of investments for a job run. We recommend running the job immediately after the upgrade before any modifications to investments, tasks, or transactions are made.

Parameters
- OBS Unit: Specifies the OBS units whose investments you want to process. The job processes all investments for the OBS units and their descendants. Use this option if you do not want to select individual investments for processing.
- Investment: Specifies the individual investments that you want to enable to display capital and operating expenses. - Capital Charge Code: Specifies the charge codes that you want to designate as the cost type Capital for the selected
investments (based on the OBS unit or individual investments). - Operating Charge Code: Specifies the charge codes that you want to designate as operating cost for the selected
investments (based on the OBS unit or individual investments). - Capitalization Percent: Specifies the amount of expense for an investment that is designated capital expense. This
number is used to calculate operating and capital expense.

Execute a Process Job This job executes a process that is not associated with any object.

Requirements None

Restrictions
- It can only execute the processes that you have access. - It can only execute non-object based processes (that is, processes without a primary object).


Parameters - Process ID The ID of the process to execute.


Generate Invoices
This job takes a set of unprocessed transactions, matches them with best-fitting chargeback rules from the investment hierarchies, and applies the rule to generate chargeback transactions. An invoice header is generated for every unique combination of department and fiscal time period.
If an invoice exists for the department-fiscal time period combination, and if the invoice is locked, the job cannot generate new chargeback transactions against the invoice. Instead new chargeback transactions are created for an invoice in the next, unlocked fiscal time period.
Your finance manager can view or monitor any errors or warnings that are caused by running this job.

Requirements
- Set up a financial structure, including entity, financial classes, and rate matrices. - Define credit and overhead rules. - Define investment debit or standard debit rules to process chargebacks. - Post the WIP transactions. - Optional. Run the Purge Temporary Aggregated Data job. - Run the Update Aggregated Data job.
> [!NOTE]
> See Using: Financial Management for more information.

Restrictions This job cannot run concurrently with other instances of this job.

Parameters
- Entity: Defines the entity for which to generate invoices. - Regenerate: Indicates if this job processes all transactions or only new and updated transactions.
- All: Regenerates the chargeback transactions by applying existing rules. - New Transactions/Adjustments: Processes only new unprocessed transactions or adjustments. - Lock/Submit: Indicates if all invoices from prior periods are automatically locked and submitted. If an invoice is already locked (for example, a user may be actively reviewing it), automatic submit may not occur. Options: Lock/ Submit or None - Override Manual Locks: Indicates if this job can temporarily unlock previously generated invoices and regenerate them.

Global Search Sync Job
The Global Search Sync job is designed to synchronize the search tables with the latest searchable attribute data.
Requirement
A backend feature toggle controls the global search feature. For Broadcom SaaS customers, this feature can be enabled by submitting a support ticket. Once the feature toggle is enabled, the following new components will be available:
- The Global Search icon in Clarity. - The Search Enabled attribute in the Attributes page of Clarity Administration. - The Global Search Sync job in the Classic PPM Jobs list.


Parameters - Select Objects: This parameter allows the admin to run the job for specific objects. It provides a list of all objects in
the Clarity instance. If no selection is made, the job will run for all objects and capture data from attributes enabled for search within those objects. - Full Load: This parameter triggers a resynchronization of all selected attributes. By default, this parameter is unchecked. It means only changes since the last successful run will be captured. Initial and Subsequent Runs - First Execution: When the Global Search Sync job is executed for the first time, it automatically runs a full load to synchronize all data for the selected attributes. - Subsequent Executions: After the first execution, the job will capture only the new or updated data elements. It will not resynchronize the entire set of data unless the Full Load parameter is selected.
> [!NOTE]
> Key Points to Remember - The Global Search Sync job should be executed regularly to ensure search results remain up-to-date. - The job only captures attribute changes made through the Clarity application. - Deleted attributes in the application will not be removed from the search results until a Full Load is executed.
Import Financial Actuals Job This job updates task assignments with the actuals entered in financial transactions and WIP adjustments. The assignment ETC is decremented through the transaction entry date (as in a Fixed Loading Pattern). ETC in the future is not decremented even if the actual amount is greater than the ETC amount for the period being posted.
Requirements None
Restrictions This job cannot run concurrently with other instances of itself or the following job: - Delete Investments and Time Reporting Periods
Parameters None
Import Integration Mappings Job The Import Integration Mappings job fetches the Milestones, Investment Categories, Date, and Project lookups from Rally and stores them in Clarity. These (4) dynamic lookups are now available as a part of the PMO Accelerator add-in and will be available to you when you install this add-in. The job also populates the Integration Mapping drop-down menu list in Rally.
> [!NOTE]
> The Import Integration Mappings Job has been enhanced to support the roadmap items object and its attributes. The Import Integration Mappings job also synchronizes Financial Work Type (FWT) Task Mappings between Clarity and Rally. Key Points to Remember:
- Sync Active Financial Work Type Task Mappings: The job syncs only the active Financial Work Type (FWT) Task Mappings to the Rally Lookup under User Story and Defect.
- Deactivated FWT Task Mappings: If a Financial Work Type Task Mapping is deactivated in Clarity, the job will leave the previously synced value in the Rally Lookup unchanged. No modifications will be made.
- Sync Only Complete and Active Mappings: The job will only send values for FWT Task Mappings that are fully defined and marked as active. Incomplete or inactive mappings will not be synced.
Parameters Integration Mapping: Provide the integration mapping instance.
Import Integrations Job Import Integrations job imports Rally Portfolio Items and Teams for Frictionless Cost Accounting. What Happens After Running the Import Integrations Job: - Financial Work Type Task Mapping entries in Clarity are synchronized to Rally. - Rally Portfolio Items are populated in the Capital Actuals and Capital Approval sections within the Frictionless
Accounting Mapping Settings. - All active Rally projects appear in the Rally Team for Frictionless Cost Accounting lookup attribute. - All active Frictionless Accounting Mappings in Clarity are available in the Frictionless Cost Accounting Mapping
lookup attribute. Parameters Integration: Provide the integration instance.
Index Contents and Documents for Searches Job This job indexes the search content (such as activities and action items) and documents.
Requirements None
Restrictions This job cannot run concurrently with other instances of this job.
Parameters None
Update Investment Allocations and Usage This job was previously called the Investment Allocation job. It updates labor allocations, Actuals, ETC, Total Usage, Baseline Usage and Baseline Variance on Projects, Custom Investments and NPIOs. The following fields are updated by this job:
- Actuals Sum for Labor Resources (number) - Actuals (time-varying) - ETC Sum for Labor Resources (number) - ETC (time-varying) - EAC Sum for Labor Resources (number) - Total Usage (time-varying) - Current Baseline Sum for Labor Resources (number) - Current Baseline for Labor Resources (time-varying) - Current Baseline Variance Sum for Labor Resources (number) - Current Baseline Variance for Labor Resources (time-varying) - Allocation (time-varying) - Hard Allocation (time-varying)
You can run this job immediately or on a scheduled basis.
If no parameters are set, do not set a frequent schedule for the Investment Allocation job, as Clarity will process all active investments. The lists of investments can display the updated investment actuals and ETC in intervals that approach a near real-time appearance of precision. However, for better performance, we recommend that you run the job for reporting on a daily schedule, and not more frequently. This job is database intensive because it aggregates data from multiple tables and updates every investment in the system.
If parameters are set, then you can execute the job more frequently. We recommend running this job after Posting Timesheets because it will update the Investments with the Actuals and ETC changes.
To view actuals and ETC at the project level, use a custom portlet. To achieve better real-time results, limit the data that you include in the portlet layout.
> [!NOTE]
> When you run the Investment Allocation job in between incremental runs of the Rate Matrix Extraction job, the incremental option behaves in the same manner as a full execution. In this case, the Investment Allocation job updates all projects.
Requirements
None
Restrictions
Incompatible with the Load Data Warehouse job
Parameters - Investment name - Manager name - OBS and OBS Mode
Load Data Warehouse Job
The Load Data Warehouse Job extracts data from the transactional database, transforms the data into a denormalized format, and loads the data into the data warehouse. The data warehouse uses referential integrity to ensure cleaner data in the data warehouse.
The Data Warehouse maintains referential integrity by using primary keys and foreign keys to ensure that orphan records are not created. For example, when you delete a roadmap, all roadmap items, and other tables referencing the roadmap are automatically removed.

Consider a scenario when you execute the Load Data warehouse job with a full load. Clarity captures the current date and time when the job starts. Let's call it the Cutoff Date 1. If you perform any action in Clarity, such as creating a roadmap item or a project, after the cutoff date, Clarity does not include it in the Data Warehouse. This helps Clarity maintain the referential integrity of the Data Warehouse. However, you may see a discrepancy between records in Clarity and the Data Warehouse if you have created records after Cutoff Date 1. The next time you run the Load Data Warehouse job with incremental load, Clarity uses the Cutoff Date1 and the current date/time to determine the records that been updated and populates the Data Warehouse.
> [!NOTE]
> The Load Data warehouse job does not consider the Lock flag associated with a project. Hence, if a project is locked, its content will be loaded into the Data Warehouse for both full and incremental runs.
For new installations, this job is active. In upgraded environments, the job state matches its original pre-upgrade state.
Only the most commonly used stock objects and attributes are enabled for inclusion in the data warehouse. Enable all custom objects and attributes before running this job to populate them in the data warehouse.
> [!TIP]
> The data warehouse is not designed to be a real-time data reference. If you need to run reports on live data, we recommend that you create ad hoc views and reports based on your Classic PPM data sources.
If you have any large string attributes that are enabled for the data warehouse, they cannot exceed 1,000 characters. The data warehouse includes only the first 1,000 characters from large string attributes and truncates the rest.
To populate the data warehouse with data from the PPM database, run the following jobs in the order given:
- Time Slicing - Load Data Warehouse
Calculated Risk and Requested Manager Added
Calculated Risk and Requested Manager attributes have been added to the data warehouse. These attributes will be added when you upgrade to Clarity 15.8 or above versions and run the Load Datawarehouse job.
Requirements
Run this job with the Full Load option selected in the following cases:
- You perform an upgrade or install a patch on Classic PPM. - You add a new language in the data warehouse system options. Running an incremental load of this job does not
update the data warehouse with the new language. - You delete an attribute or unselect the Include in the Data Warehouse option for the attribute in Studio. You cannot re-
enable the attribute for inclusion in the data warehouse unless at least this job has completed one run. - You change the entity for fiscal periods in the data warehouse options. - You change the timeslice dates to include a larger timeframe. - You change the First Day of Work Week. - You change any of the settings in the System Options, Data Warehouse Options. Also, run this job each time the data type of an attribute that is included in the data warehouse is changed in Studio. First disable the attribute, then run this job. Next, re-enable the attribute with the correct data type, and rerun this job for the changes to take effect.
Running this job with the Full Load option adds the following financial plans for applicable investments to the data warehouse:
- The Plan of Record - The current budget plan - All benefit plans


Restrictions
While the Load Data Warehouse job runs, any concurrent user edits may temporarily be excluded from the data warehouse.
> [!TIP]
> The job copies records based on their last_updated_date attribute. The job identifies all the object instances modified before the job start date and time. This tip may sound obvious to experienced database administrators; however, users should be made aware that any record modified while the job runs is not going to be populated. A unique situation arises with investments because they appear in two tables: one for investments and one for projects. If users are making concurrent updates, records in DWH_INV_INVESTMENT may not match in DWH_INV_PROJECT. The next instance of the full or incremental Load Data Warehouse job refreshes the data and corrects this common temporary condition.

Parameters
- Full Load: Rebuilds the data warehouse from scratch if selected. If the option is not selected, this job only looks for incremental changes since the last time you ran it. We recommend that you run the job with the Full Load option selected during off peak hours for better performance. At other times, run this job for incremental loads.
> [!WARNING]
> If you are running this job for the first time to populate the data warehouse, select the Full Load parameter. Also, if you had a failed run of the Load Data Warehouse job and you corrected the problem, select Full Load the first time that you run this job after the failure. For subsequent runs, you can run an incremental load by leaving the Full Load parameter unselected.
Database Size and Job Frequency
The size of your database determines how frequently you run this job.
- Full loads recreate the data warehouse from scratch. You can run this once a day during non-peak hours. For a global enterprise, you may decide to extend the frequency to once a week, or even longer.
- Incremental loads can be run more frequently, and the frequency is determined by the size of your database. The best way to determine the frequency is to run the incremental load and see how long it takes to complete. We recommend that you run incremental every 3-4 hours depending on the size of your database.
Custom Jobs and Processes
This job imports data into the data warehouse database based on the last_updated_date field on the object's instances. If you have any custom jobs and processes that are updating the last_updated_date field, we strongly advise you to reschedule those jobs and processes to run at a different time when the Load Data Warehouse job is not running. In addition, set the Load Data Warehouse job to be incompatible with your custom jobs and processes (Administration, Reports and Jobs). If you do not do this, data may not be updated in the data warehouse.
Server Time, Timezone, Date, and Time
To ensure the correct functionality and accuracy of data in Classic PPM and all jobs, including the Load Data Warehouse Job, verify the following:
- The server time is the same (preferable, down to the second) on the Classic PPM application server, Classic PPM database server, and Data Warehouse database server.
- The timezone, date, and time is the same on the Classic PPM application server and database servers in the same environment. Do not have any differences.


This synchronization is necessary because the Load Data Warehouse job imports data into the Data Warehouse database based on the last_updated_date field on the object instances. If the date and time on the servers do not match, data may not be loaded into the Data Warehouse. For other jobs, if the date and time do not match, the job may not start. Or, the job may start later than expected, leading to inaccurate data.
> [!TIP]
> Before running this job, view the system health report. After running this job, view the Load Data Warehouse Job Audit Dashboard. See Health Report, Job Monitor, Governor Settings, and Data Warehouse Audit Dashboard. NOTE More Information: The Load Data Warehouse job calls the Pentaho ETL job named dwh_etl_master.kjb which accepts one user parameter, FULL_RELOAD. - When the value is 1, the job truncates the data warehouse and then repopulates it. - When the value is 0, an incremental update is performed using last updated dates to determine if the data
needs to be processed. The ETL job also accepts the following system parameters: - BATCH_SIZE_ORACLE: Size of oracle batch to processed, defaults to 50000 - CLARITY_DB_TYPE: PPM DB type: oracle or mssql - DB_LINK: name of the created database link - DWH_DB_TYPE: Data Warehouse DB type: oracle or mssql - NO_LOG_DAYS: Number of days to keep log information - RUN_CUSTOM_TSV: Creates the TSVs - SRC_DATABASE_CLASS: PPM database class - SRC_DATABASE_PWD: PPM database password - SRC_DATABASE_URL: PPM database connection information - SRC_DATABASE_USER: PPM database user/owner - SRC_DBNAME: PPM database name - SRC_SCHEMA: PPM schema name - TGT_DATABASE CLASS: DWH database class - TGT_DATABASE_PWD: DWH database password - TGT_DATABASE_URL: DWH database connection information - TGT_DATABASE_USER: DWH database user or owner
Load Data Warehouse Access Rights The job extracts access rights for investments and resources from the Classic PPM database and loads them into the Classic PPM Data Warehouse. For new installations, this job is active. In upgraded environments, the job state matches its original pre-upgrade state. To populate the Data Warehouse with data from the database, run this job after running the Load Data Warehouse job and after running the Time Slicing job. You do not need to run this job each time after you run the Load Data Warehouse job.
LDAP - Synchronize New and Changed Users Job (On-Premise Only) This job synchronizes users that were added or modified in the LDAP server with the Classic PPM user table.


Requirements
- Configure LDAP to run this job. - You must be an authenticated LDAP user to view this report.


Restrictions This job cannot run concurrently with any other instances of this job.

Parameters No job parameters. Uses CSA settings.

LDAP - Synchronize Obsolete Users Job (On-Premise Only) This job deactivates users who are marked as inactive, or removed from the LDAP server through the Classic PPM user table. To schedule this job, select LDAP as an Available Job filter. Requirements Configure LDAP to run this job. Restrictions This job cannot run concurrently with other instances of this job. Parameters No job parameters. Uses CSA settings.
> [!TIP]
> To learn more about LDAP settings, see CSA: Security, Passwords, LDAP, SSL, SSO, XSS, and FIPS.

Oracle Table Analyze Job (On-Premise Only)
This job refreshes statistics that are used to determine the best path or execution for a query. The Oracle Table Analyze job gathers statistics, traditionally by Estimate Percent, and runs basic database optimization commands. By optimizing database statistics, queries can be opened more quickly resulting in general performance improvement. However, in 15.4 and previous releases, running this job by Estimate Percent was inefficient compared to running it by auto-sampling.
Requirements
- Clarity must be configured with an Oracle database. - You can analyze statistics under certain circumstances, such as when the schema or the data volume changed. - We recommend that you run this job at least once a week during off-peak hours or periods of light user activity, such as
on a weekend night. - If you have a large database with many users updating multiple tables daily, run the job at least once daily.
Restrictions
- You cannot run multiple concurrent instances of this job.
Parameters
None. Starting with Clarity 15.4.1, the Oracle Table Analyze job no longer includes the following legacy parameters:
- Schema Name - Estimate Percent


The new stored procedure uses the following default values:
- USER for Schema Name - AUTO_SAMPLE_SIZE for Estimate Percent
The CMN_GATHER_TABLE_STATS procedure now uses AUTO_SAMPLE_SIZE and all references have been updated.
> [!TIP]
> Running Oracle Stats includes histogram stats that increase input-output consumption and paging memory. Because the Clarity Oracle Table Analyze job does not gather histogram stats, it does not cause these performance issues. Broadcom recommends using the Clarity Oracle Table Analyze job.
Parallel Job Processor
Partners and developers often integrate solutions with Classic PPM. They typically map external system data to objects in Classic PPM. The preferred method of importing this data involves the XML Open Gateway (XOG). You can schedule a background server job to perform the import. In many cases, large volumes of data are imported using sequential jobs. To help speed these operations, a simple parallel job processor is now available to a limited audience.
> [!NOTE]
> This job is not available for general use. It is restricted to certified partners, support, and services personnel.
The job divides the workload in a target job into multiple threads inside the same single job. It processes the separate threads and units of work in parallel to save time. After it is XOG'd into Classic PPM, the job uses the job processor. The job processor passes the custom pre-processor and post-processor parameters to the job.
Requirements
- The job requires a large number of work units to justify its configuration and use. - The units of work cannot be dependent on each other. - The pre-processor and post-processor implement the interfaces that you provide. Make the corresponding library
available in the Clarity/PPM install path.
Restrictions
- This job is limited to authorized administrators only. It is not available for general use. - This job cannot run concurrently with other instances of this job.
Parameters
- Pre-Processor:The pre-processor implements the JobPreProcessor interface. The pre-processor gets the input data and converts it into different units of work that can be processed in parallel.
- Post-Processor: The post-processor implements the JobPostProcessor interface. The results/responses obtained by processing the units of work, are passed to the post-processor. The post-processor can analyze the results and take actions, like reporting. The post-processor needs to be implemented by the consumer of the job by implementing the interface provided. The default implementation parses the XOG responses and writes the status to a log file. Log should be configured in CSA for name 'com.ca.clarity.job'. It will also write the erroneous responses to the output file location, specified as a parameter to the Job.
- Input Parameters: The input data can contain different types of objects and can be organized in a specific order. The default implementation reads the XOG import files from the file location specified by this job parameter.
- Output Parameters: The output file location for the work units after they are processed. - Batch Size: The batch size is used to process the units of work in smaller segments or batches. When you do not
specify or pass a batch size, the system uses one tenth of the total number of input items as the default batch size.
> [!TIP]
> You can also pass the custom pre-processor, post-processor, and batch parameters to the job.

Populate Timesheets Job
The Populate Timesheets job automatically populates timesheets based on assigned tasks.
Requirements
- Execute Time Slicing Job and Datamart Extraction Job. - For Investment Time Entry:
- Assign resource to the investment - Define ETC for tasks of the investment - For Team Investment Time Entry: - Assign resources to the team investment - Define the default allocation for each resource
Restrictions
The Timesheet Integration Job and the Populate Timesheets Job are incompatible and cannot be executed simultaneously.
Parameters
- Time Period: Specify the time period for which timesheets will be populated. - Population Method: Choose the method for populating the timesheets:
- Add Assigned Tasks: Populate timesheets with the assigned tasks. - Add Assigned Tasks (with ETC): Populate timesheets with assigned tasks and Estimated Time to Complete
(ETC). - Override Time Entries:
- Select this flag if you want to overwrite manually edited data with the newly populated entries. - Leave this flag unchecked to retain manually edited data, preventing the job from updating those entries. - Investment Type: If you select a specific Investment Type, the job will modify time entries only related to that type. - Investment to Exclude: If you specify an Investment to Exclude, the job will exclude any time entries linked to that investment from being modified. - Team: Team: Select the team to populate timesheets for its resources.
> [!NOTE]
> Team Assignments
When a resource is part of a team, and the team assignment exists, the job calculates time entries based on the resource's allocation percentage relative to the team.
Example:
- Total hours allocated for the Mobile Team = 40 hours. - Amos, Cheryl (20% allocation)  8 hours. - Gillian, Erin (70% allocation)  28 hours. - Olney, Pam (10% allocation)  4 hours. - Based on your requirements, you can select additional parameters such as: - Resource - OBS Mode - Primary Role - Resource - Person Type - Resource Active

Populate Users User License Type Use the Populate Users User License Type job to update the License Type attribute in the Resources and Users grids based on user access rights and security group memberships. Parameters - Resource: Select one or more individual resources to update. - Resource OBS: Select one or more Resource OBS units. - OBS Mode: Choose the OBS mode. The default value is UNIT ONLY.
> [!NOTE]
> Some of the key points to remember are: - The job runs daily to keep license type information current. You can also run it on demand to populate
License Type information immediately. - The job populates the License Type for all users. Only users with no access rights will have a blank License
Type after completion.
Post Actuals to Investment Job The Post Actuals to Investment job generates the investment Actual and Forecast time-scaled varying (TSV) data in the investment and hierarchy grids such as: - Actual TSV Fields - Actual Capital Cost, Actual Operating Cost, Actual Cost, Actual Revenue - Forecast TSV Fields - Forecast Capital Cost, Forecast Operating Cost, Forecast Cost
Requirements - Set up Financial Management and Timesheets. - Run the Post to WIP job before running this job.
Restrictions This job cannot run concurrently with other instances of this job.
Parameters - Investment OBS: Specifies the OBS whose investments you want to process. The job processes all investments for
the OBS and its descendants. Use this option if you do not want to select individual investments for processing. - Investment: Specifies the individual investments that you want to process. - To Investment Last Updated Date: Defines the to-date to which financial details have been updated for this job to
process. Specify one of the following dates: - Specific Date: Enter a date or use the calendar tool to select the date. - Relative Date: Select the appropriate relative date from the drop-down. - From Investment Last Updated Date: Defines the from-date to which financial details have been updated for this job to process. Specify one of the following dates: - Specific Date: Enter a date or use the calendar tool to select the date. - Relative Date: Select the appropriate relative date from the drop-down. - Update Only Active Investments: Updates the planned, actual, and forecast TSV data of the active investments.
Post Incident Financials Job This financial processing job posts the transactions of incident effort entries to the general ledger account. Run this job when you want to track the cost of maintaining non-project investments in your organization.

Requirements Enter the effort for the incident. The following conditions apply: - Only a team member on an investment can enter and submit effort for incidents associated to the investment. - The investment must be financially active.
Restrictions This job cannot run concurrently with other instances of this job.
Parameters - Effort From Date Defines the from-date to which effort has been posted for this job to process. Click the Select Date
icon to select a specific date, or select a relative date from the drop-down. - Effort To Date Defines the to-date to which effort has been posted for this job to process. Click the Select Date icon to
select a specific date, or select a relative date from the drop-down.
Post Timesheets Job The Post Timesheets job is a background process that compiles and posts the actual values into the project plan. This job runs at scheduled intervals. It generates the timesheet for the resource assignment that is based on the actual hours approved and the time with finish dates in the past (at least five minutes ago). This job does the following: - Updates the resource assignment and the Transaction Import table with the actual values on the timesheets. The
timesheet status changes to "Approved". - Advances Estimate To Complete (ETC) past the time period for the posted timesheets on all task assignments of the
corresponding resources. REMEMBER Impact of running Post Timesheet job for Frictionless Cost Accounting are as follows: 1. Financial Work Types are converted into tasks within the respective investment 2. The user is added as Staff to the respective investment. 3. The Assignments of the Financial Work Type tasks display the user details 4. Clarity populates the Actuals and Actual Cost for frictionless timesheets in Assignments. 5. The Financial Work Type's Task IDs in the Timesheet are updated. It replaces the Financial Work Type Lookup ID with the Task ID of Financial Work Type defined in the Frictionless Accounting Mappings instance page. To learn more, see Frictionless Time: Create Timesheets from Rally for a Specific Time Period.
Requirements - Set up Timesheets. - Run the Rate Matrix Extraction job to ensure the rates and costs are current at the time the entries are posted to the
project. Running this job first helps avoid incorrect project task assignment actual costs.
Restrictions This job cannot run concurrently with other instances of itself or the following jobs: - Delete Investments and Time Reporting Periods

Parameters
- Location: You can process timesheets based on the location of the resource, using the Post Timesheets job. The batch processing ensures greater control in choosing one or more resource locations for which the timesheets must be posted.
Post to WIP Job
This job offers functionality that was previously only available on the Post to WIP page. That option required you to manually navigate to this page every time you wanted to run it. (Click Home, and under Financial Management, select Post to WIP.)
Use this job to automate Post to WIP functionality and ensure organizational financial information is up-to-date on a regular basis. To filter the data, use the Voucher Entry ID field. This job also provides the following benefits:
- You can schedule the job to run in the future, even to run recursively. - You can post all the transactions based on a selected investment. This option is not available on the Post to WIP page. - The investment and resource lookups available in the job parameters display all the investments and resources.
Processing does not check whether any transactions are currently waiting for Post to WIP. The page only displays resources and investments that are waiting to be posted. However, jobs can occur in the future. You have the flexibility of choosing any resources or investments. You are not restricted to viewing only transactions to be posted. - Refining and posting a particular transaction are much easier using this job. Every parameter that you select from top to bottom is a logical and condition. For example, this OBS and this investment and this Resource and This Date and so on.
Parameters
Only the Post Options parameter is required. When you define no parameter values, the job posts all the transactions (including Timesheets) through today.
- Investment OBS: Displays the Department OBS or Location OBS. The application includes the investments in that particular OBS unit and its descendants. Note: This parameter is not present on the Post to WIP page.
- Investment: Displays one or more investments from a list of all the financially active investments. It is not essential that at the time of scheduling the job, the investment has any posted transactions. Such a condition could prevent the administrator from autoscheduling the job.
- Resource: Displays one or more financially enabled resources (not roles). This lookup is useful in the scenario to fix up all the items related to the resource costs of a specific contractor.
- Entry Type: Displays the type of entries to include. For example, All, Imported, PPM, Voucher Expense, or Voucher Other.
- Transaction Type: Displays one or more types of transations to include. For example, Labor or Expense. - Voucher Entry Number: Displays one or more voucher entries based on your selection in the Entry Type field.
Use this parameter to execute the job manually for a specific set of transactions on a voucher. Transactions from Timesheets do not have Voucher IDs. You can still post them using this job. - From Transaction Date and To Transaction Date: Displays the beginning and ending dates to define an optional range of time for filtering the transactions. When you select no dates, the job automatically groups all the transactions ready for posting to WIP. - Post Options: Indicates whether the job recalculates the data using updated exchange rates before it is posted.
Restrictions
This job exhibits the same behavior as the Post to WIP page. All the rules that apply to that page also apply to the job. The Post to WIP job and Post to WIP page are not compatible. Use one or the other but not both at the same time.
The Post to WIP job does not display the number of transactions that are about to get posted.

Post Transactions to Financial Job This job verifies and transfers data from the Transaction Import tables to the Financial Management tables. This data could be the result of posted timesheets, or transactions that are imported from external systems.
Requirements Set up Financial Management and Timesheets. Restrictions This job cannot run concurrently with other instances of itself or the following jobs: - Datamart Extraction - Delete Investments and Time Reporting Periods Parameters - Transaction From Date: Defines the from date to which transactions are posted for this job to process. Click the
Select Date icon to define a specific date, or select a relative date from the drop-down. - Transaction To Date: Defines the to date to which transactions are posted for this job to process. Click the Select
Date icon to define a specific date, or select a relative date from the drop-down. If you do not enter the To Date value, this job posts transactions up to the current date.
PPM Customization Discovery Analysis Job This job is for use by Broadcom to analyze customizations to determine environment complexity. This job generates a report that was designed for Broadcom Global Delivery teams, Broadcom Support, and advanced administrators when preparing to migrate an on-premise environment to a SaaS environment. Some customizations allowed in an on-premise environment might not be permitted in a SaaS environment. Non-compliant objects and other factors determine an estimated level of complexity on the report cover page. The output contains about 20 tabs of data including non-compliant objects, data sources, and grid portlets. Discuss these customizations before upgrading or changing environments.
Requirements To prepare this report, select the Active check box for the PPM Customization Discovery Analysis job. The job results in an Excel spreadsheet which can also be emailed to the recipient as specified in the job parameters at the time of execution.
Parameters - Obfuscate Email Addresses: This setting applies to duplicate e-mail addresses in the Excel ouput
file in the zipped discovery report. When you select this option, e-mail addresses are obfuscated. For example, supervisor1@ca.com appears as su*********@ca.com - Recipient Email Address: Enter one or more e-mail addresses separated with a comma or semi-colon. Each recipient receives a zip file containing the Excel ouput.
Purge Documents Job This job permanently deletes documents.
Requirements As an administrator, back up all documents that are stored in the product or in the Knowledge Store.


Restrictions This job cannot run concurrently with other instances of itself.


Parameters
- Purge All Documents for the Following Objects - [Or] Purge Documents and Versions Not Accessed for [n] Days - [Or] Retain the [n] Most Recent Versions and Purge the Prior Versions - All Projects - Project OBS - Specific Project - All Resources - Resource OBS - Specific Resource - All Companies - Company OBS - Specific Company - Knowledge Store

Purge Audit Trail Job
This job removes all audit trail records according to specified job settings. You can set this job to run immediately or according to a set date and time, and you can run it on a recurring schedule.

Parameters None

Purge Action Items Job
This job enables you to directly delete and control the deletion of Action Items by Type, Status (Open or Closed), and Created Date range. Note that this job does not delete the action items if they are associated with any process instances that are not completed or canceled.

Parameters None

Purge Financial Tables Job
Use the Purge Financial Tables Job to permanently delete all financial transactions associated with a specified investment. This includes Projects, Ideas, Custom Investments, and other NPIOs
> [!NOTE]
> This job does not delete chargeback transactions or chargeback invoice transactions.

Requirements
- (Recommended) Back up all financial transactions before running this job. - Grant the Financial Maintenance - Financial Management access right. - Verify that the project has a status of "Closed" for the transactions you want to purge.
For more information, see Project Management.


Restrictions This job cannot run concurrently with other instances of this job.


Parameters Investment Defines the name of the investment on which this job runs.

Purge Notifications Job
This job performs a bulk deletion of notifications.
Requirements
None
Restrictions
This job cannot run concurrently with other instances of this job.
Parameters
- Notification Type: Defines the notification type to delete (for example, Timesheet). You can select multiple types. Click the Browse Notification Type icon (binoculars) and select the type. To delete all notification types, click the Select All checkbox.
- From Created Date, To Created Date:Defines the date range during which the notifications were created. If you do not specify a date range, the job deletes all notifications for the selected type, assignee, and assignee OBS. Specify one of the following dates: - Specific Date - Enter a date or use the Calendar tool to select the date. - Relative Date - Select the appropriate relative date from the drop-down list.
- Assignee: Defines the resource who receives the notifications. All resources (active, inactive, and locked) are listed. You can select multiple resources.
- Assignee OBS:Defines the Organizational Breakdown Structure (OBS) of the resource who receives the notifications. If you select the OBS and do not specify an assignee, the job deletes the notifications for all resources in the selected OBS.

Purge Report Output Job
This job permanently deletes the report output from the document management system based on the selected parameters.

Parameters
- Format - This is a mandatory parameter, and by default, ALL is selected. This parameter has four values- ALL, PDF, PPTX, XLSX. Execute this job with only the Report Type selected as ALL (with no other parameters selected), to permanently delete all saved report output from the document management system.
- Report - Report name given to the saved report output. - From Run Date and To Run Date - Select the date range (From Run Date and To Run Date) for which you want to
permanently delete the saved report output. Ensure that both parameters are selected for a specific date range. - Run By - This parameter lets you search for the user who executed the job.


Purge Temporary Aggregated Data Job This job cleans up the data that is created as a part of computing aggregated costs for generating chargeback invoices. The job is scheduled to run once a day automatically, but can be run on demand too. Run this job for multiple changes in the investment hierarchy, or in the properties of multiple investments.
Requirements Run this job prior to running the following jobs: - Update Aggregated Data - Generate Invoices
Restrictions This job cannot run concurrently with other instances of this job.
Parameters - Purging Option Indicates if all temporary data or outdated data has been cleared. Clearing all temporary data cleans
up all the temporary as well as cached data. Clearing outdated temporary data preserves the cached data that is still valid and deletes other temporary data.
Rate Matrix Extraction Job This job extracts rate matrix information and refreshes the rate matrix extraction tables. Run this job each time the rate matrix and the financial properties of a project change. The Rate Matrix Extraction job is required before retrieving rates on projects. You can prepare and update the rate matrix data. While the job is running, you can use the rate matrix data.
> [!TIP]
> Preparing the rate matrix data takes more time than updating the rate matrix data. To minimize the duration for which the rate matrix data is unavailable, schedule two instances of the job, each with only one of the two parameters (Prepare Rate Matrix Data and Update Rate Matrix Data) selected. For better performance, select the Team Rates Only option, along with the job instance which has Prepare Rate Matrix Data selected. The Rate Matrix Extraction functionality provides rates to the following system actions: - Posting Timesheets - Baselining a Project or Task - Updating Earned Value Totals using the user interface button or scheduling the job (the two methods yield the same result) - You can click Update Cost Totals from the project team or task action menu; or - You can run the Update Earned Value and Cost Totals job - Updating Earned Value History - Opening a project in Open Workbench or Microsoft Project NOTE We recommend scheduling the Rate Matrix Extraction job using the Incremental Update only option at intervals. This practice reduces the need for the application to extract the rates in real time for the actions. If the job refreshes the rates at regular intervals, the performance of the actions improves.
Requirements Set up a default matrix or a matrix associated with the entity or project. See Set Up a Financial Cost and Rate Matrix.

> [!TIP]
> In Release 15.3 or higher, the dynamic runtime or on-the-fly rate matrix is disabled by default. To enable the runtime on-the-fly rate matrix, see Health Report, Job Monitor, Governor Settings, and Data Warehouse Audit Dashboard.
We recommend that you run this job at least once a week prior to posting timesheets, but no more than once a day. For a system size with a large dataset, you should expect the job to take a fair amount of time and consume database resources. We recommend scheduling it every few days to run at night or during off-peak hours. Running the job during business hours can slow performance for all connected users.
You can also split the job with different combinations of options to prepare the data and update the data just in time for posting timesheets or working with project baselines.
1. Create a scheduled job with the option to incrementally prepare the matrix data for non-peak time. 2. Create a scheduled job with the options to incrementally update the matrix data for a time just prior to executing the
`Post Timesheets' job. 3. When splitting the job, advise your users to create or update project baselines after the incremental update has
completed to ensure that costs are computed as expected. Once a baseline is created, the snapshot costs cannot be changed.
Restrictions
- This job cannot run concurrently with other instances of itself. - Delete all scheduled instances of this job and reschedule the job using the Prepare Rate Matrix Data parameter or the
Update Rate Matrix Data parameter. - The Datamart Extraction job utilizes some of the data that the Rate Matrix Extraction job creates. Therefore, run the
Rate Matrix Extraction job successfully and then run the Datamart Extraction, Post Timesheets, and Update Earned Value and Costs Totals jobs.
Parameters
- Extract Cost and Rate Information for the Scheduler: Specifies whether to extract cost and rate information for a desktop scheduler. This field is a flag that triggers the job to generate resource rates for an investment that include rates prior to the start and after the finish date of the investment. If not using a scheduler it can be left unchecked. When you select this option, job performance is impacted because the rates for the resources who are assigned to a project are calculated beyond project start and end dates. These calculations add time to the processing for the job. The additional data beyond the project start and end dates is used by your choice of optional scheduler (Open Workbench or Microsoft Project) where users can shift the project start and end dates. Default: Cleared
- Prepare Rate Matrix Data: Specifies whether to add the updated rate matrix data to a temporary table (NBI_PROJ_RES_RATES_AND_COSTSCP). The data in the NBI_PROJ_RES_RATES_AND_COSTS table stays intact. The rate matrix data is available. Default: Cleared
- Update Rate Matrix Data: Specifies whether to copy the updated rate matrix data from the temporary table (NBI_PROJ_RES_RATES_AND_COSTSCP) to the NBI_PROJ_RES_RATES_AND_COSTS table. The rate matrix data is not available. Default: Cleared
- Incremental Update Only: Specifies whether the rate extraction occurs only for current incremental project and NPIO updates and not a full update. Running the incremental job takes less time than a full run. If you select, Incremental Update Only, inactive projects remain in the NBI_PROJ_RES_RATES_AND_COSTS table after the job runs. To have the job truncate the table and then rebuild it with only matrix rows for active projects and non-project investment objects, clear this check box to run the job in full update mode. Default: Selected
- Team Rates Only:Clear this check box to populate all the rates pertaining to the team and task assignments. Select this option to populate the rates related only to the team. It does not extract task assignment rates and does not use task assignment level rates. Performance is the same for either option. For better performance, select this option in conjunction with Prepare Rate Matrix Data. Selecting this option does not impact the stock product functionality which

uses the project and team level rates only. If you are using the rate matrix table for reporting or for querying the portlets and expect to see all assignment related rates, do not use this option. Default: Cleared.

Rate Matrix Extraction (RME) Job Parameter Examples

Full RME

Incremental RME

Full RME with Team Rates

Incremental RME with Team Rates

To learn more, see Rate Matrix Extraction Job Overview.
Datamart Table Updates For inactive investments with changes that require matrix rates, the datamart tables might not have financial updates. You would not see the final updated financial data for changes made while an investment is inactive and no rates exist in the Rate Matrix Extraction table. To apply accurate updates, perform the following steps: 1. Activate the investment. 2. Run the following jobs:
- Rate Matrix Extraction - Datamart Extraction - Datamart Rollup 3. You can now deactivate the investment. The updated data in the datamart tables remains unchanged. (SaaS only) Refresh Data Warehouse OData Model Job This job exposes OData entities for the objects that are enabled for the Data Warehouse as part of the Load Data Warehouse job. For example, if you enable a new custom object for the Data Warehouse, the job creates a OData model for the object so that you can access the object as an OData entity. Clarity SaaS customers can run this job to refresh the data warehouse OData model for entities added or removed as part of the Load Data Warehouse job. Users can then write queries and run reports against the OData entities using a reporting solution such as Microsoft Power BI. Restrictions - Before running this job, verify that the data warehouse read-only user has access to the tables and views in the data warehouse schema. - The job is incompatible with the Load Data Warehouse job. Run the job after the Load Data Warehouse job executes successfully.
Refresh Resource Directory Job The Refresh Resource Directory job ensures that the Resource Directory is updated with the latest data, including updates to Resource Manager or Booking Manager attributes. Requirements: Ensure to enable the Resource Directory feature in the Feature Toggles workspace until it expires in Clarity 16.3.3. Job Parameter:

Skip Circular Report: If you enable the Skip Circular Report parameter, the job will not generate the circular reference report.
Key Points:
1. Initial Job Completion: Ensure the Refresh Resource Directory job has completed at least once to display the respective resources in the Resource Directory.
2. Handle Circular References: The job detects circular references related to the Resource Manager or Booking Manager. It generates a downloadable CSV report with details of any circular references found. Review the report and resolve the issues promptly to maintain data accuracy. WARNING The presence of any cyclic references, such as mutual reporting relationships, in the system (Clarity Database) will prevent resource display. A No Resources message will appear until the references are resolved and the refresh job is executed.
Example: If Ian Arpel reports to Ray Fowler and Ray Fowler reports back to Ian Arpel, you must correct this cyclic reference and run the Refresh Resource Directory job for the respective resources to appear in the Resource Directory. 3. Manual Execution After Bulk Updates: After performing a bulk update via XOG or API, run the Refresh Resource Directory job to maintain accurate hierarchy data.
Additional Information:
Run the Purge Documents Job to clear any generated reports when needed.
> [!ATTENTION]
> From Clarity version 16.2.2 onwards, the Refresh Resource Directory job runs queries on the CMN_SCH_JOBS table more often. This happens because the job is required to populate data for the Resource Directory (Beta) feature. Please review the knowledge base article - Scheduled Refresh Resource Directory Jobs Cause High Load and Executions on CMN_SCH_JOBS for more information.
Register New Investments for Enable Capitalization Job
After processing investments, the Enable Capitalization job sets each investment to S (Successfully Processed) or F (Failed). Investments with a status of S are not considered by the Enable Capitalization job again. As an administrator, you expect the Enable Capitalization job to be available at a later time and not just one time after upgrade. This job identifies investments that would otherwise be excluded and registers them for the Enable Capitalization job.
You can run the Enable Capitalization job once after an upgrade to Release 13.2 or higher. That job enables the capitalization feature for existing investments that were created before Release 13.2. However, that job is not intended as an ongoing solution for bulk updates. The Register New Investments for Enable Capitalization job provides the functionality of the Enable Capitalization job at a later time even after upgrading from Release 13.1 and not just one time during the upgrade.
Beginning with Release 14.3, all investments created after an upgrade are available for processing by the Enable Capitalization job at any time. The new job stores investments created after an upgrade in the same temporary table that is the source for the Enable Capitalization job. After you run the Register New Investments for Enable Capitalization job, the table includes both the investments from any prior release not yet processed and the new investments created after the upgrade.
Requirements
To make post-upgrade bulk updates at a future time, perform the following sequence of steps:
1. Perform a Classic PPM upgrade. Weeks or months are likely to pass before your organization is ready for the next step.

2. Update the Cost Type and Team Capitalization % attributes for each investment. Also update the Cost Type values at the task level.
3. Run the following jobs: a. Register New Investments for Enable Capitalization b. Enable Capitalization c. Copy Cost Plan of Record Charge Code with Cost Type
The Copy Cost Plan of Record Charge Code with Cost Type job copies the investment plans of record (POR) and adds Cost Type as an additional grouping attribute.
> [!TIP]
> Unexpected results could occur if you attempt to run these bulk updates on a recurring basis. After upgrading, when your organization is ready to use new Cost Type functionality, run the sequence of jobs as suggested.
Example: Investment with Financial Data
Use this example to create a copy of the cost plan of record.
1. Create an investment with financial data. 2. Create a cost plan of record with charge code and cost type as grouping attributes. 3. Create a detail row for the cost plan with CC1 as charge code and Operating as the cost type. 4. Run the Register New Investments for Enable Capitalization job. 5. Select the investment and run the Enable Capitalization job. 6. Run the Copy Cost Plan of Record Charge Code with Cost Type job. Select the investment and the charge code (CC1)
as capital charge code.
Cost Type is not added again because it already exists in this new cost plan. On the detail page, the cost type is Capital because the user selected the CC1 charge code as capital type charge code in the job. You can create multiple detail rows such as CC2 and CC3 and set their Cost Type to Capital. However, those rows appear as Operating if you only select the CC1 charge code as Capital type for the cost type conversion job.
Example: Service Exception Error
In this example, the application does not create a copy of the cost plan of record. Use this example to troubleshoot the Service Exception error.
1. Create an investment with financial data. 2. Create a cost plan of record with charge code and cost type as grouping attributes. 3. Create a detail row for the cost plan with the following settings:
a. A Charge Code of CC1. b. A Cost Type of Capital. 4. Create a second detail row for the cost plan with the following settings: a. A Charge Code of CC1. b. A Cost Type of Operaing. 5. Run the Register New Investments for Enable Capitalization job. 6. Select the investment and run the Enable Capitalization job. 7. Run the Copy Cost Plan of Record Charge Code with Cost Type job. Select the investment and the charge code (CC1) as capital charge code. The job has to set both cost type values to Capital. The software does not allow duplicate rows in the detail so this job does not create a new cost plan.
The following message appears in the CSA logs for this job:
Error Msg : Service Exception Copy cost plan job results in creation of a duplicate detail entry.


The following message appears in the Job logs:
Execution of job failed


Example: Idea with Financial Data
In this example, the application does not create a cost plan. The Copy Cost Plan of Record Charge Code with Cost Type job is run on the same date for both an idea and a project. The project already has a cost plan with the same ID.
1. Create an idea with financial data. 2. Create a cost plan of record with charge code as a grouping attribute. 3. Run the Register New Investments for Enable Capitalization job. 4. Select the idea and run the Enable Capitalization job. 5. Select the idea and run the Copy Cost Plan of Record Charge Code with Cost Type job. The software creates a new
copy of the cost plan of record and adds cost type again to the new cost plan. 6. Convert the idea to a project and select the Copy Financial Properties and Financial Plans check box. The software
creates a new project and copies the financial properties from the idea. 7. Run the Register New Investments for Enable Capitalization job again. 8. Select the converted project and run the Enable Capitalization job. 9. Select the converted project and run the Copy Cost Plan of Record Charge Code with Cost Type job.

Remove Job Logs and Report Library Entries Job
This job removes old job log entries and report library entries from the database after they have exceeded a specified number of days.

Requirements None
Restrictions You cannot run this job concurrently with any other instance of the Remove Job logs job.

Parameters - Report age for delete - Job age for delete
Remove Job Logs and Report Library Entries Job by Type
The Remove Job Logs and Report Library Entries by Type job allows you to delete the job and report library entries. This job is similar to the "Remove Job Log and Report Library Entries" job except that it takes different input parameters and gives administrators more control of what logs should be created. The job has two required parameters:
- Job/Report Type: - Accepts multiple job types - Age to Delete: Age of entries
Restore Domains Job
When upgrading Jaspersoft and importing advanced reporting content, the domain data can become corrupted. Run the Restore Domains job to restore the domains to their original state with any custom objects and attributes. By default, the Restore Domains job is in an Active state. If you disable the job and upgrade your Jaspersoft version, the Restore Domains job remains disabled.


Requirements None


Restrictions None

Parameters
- Content Pack: Specifies the add-in that contains the domain data that you want to restore (for example, PMO Accelerator).

Send Action Item Reminder Job
Use this job to send action item reminder alerts, SMS, or email messages.
The removal of certain calendar functions in a previous generation of the product resulted in the removal of the Send Calendar Event Reminders job. However, this close sibling might still apply if your organization uses action items. You can open the Organizer and send a manual action item. You can also send a reminder at a specific time interval prior to the action item due date. For example, ten minutes, two hours, or three days before the action item is due.
This job notifies the recipients that the action item is due. The job adjusts any future reminders for recurring action items.
Requirements
One or more action items with reminders already set.
Restrictions
- This job cannot run concurrently with other instances of this job. - The job checks if the reminder event time is before or concurrent with the present time. It also checks that the action
item due date and time occurs at the present time or in the future. When these conditions are satisfied, the job sends a notification mail. The job does not send reminders for an action item which has already been completed. - As a best practice, run the job more frequently than the shortest reminder time you have in the system. If you have a reminder time of 1 day at the earliest, schedule this job to run every 6 hours. Reminders often need to reach people around the world in multiple time zones during their business hours.
Parameters
None. The job uses the properties of the action items.

Support Data Scan Job
The Support Data Scan job is available to assist administrators when troubleshooting issues with Broadcom Support. This job provides performance diagnostics and data integrity metadata for analysis by Broadcom Support technicians. The job also checks governor settings that exceed their default values.
The job title appears in the resulting email. Email messages to catechnicalsupport@ca.com with a subject line that begins with Case 123456 are uploaded automatically to the specified support case with their attached job logs. Administrators can configure the job to send an e-mail message to a support engineer with the diagnostics attached. The job supports multiple email recipients separated by a comma or semicolon.
The diagnostic file has the following naming format:
PPMSupport-GeneralPerfAudit.tab
The name begins with PPMSupport, is followed by the request type or class name, and ends in the .tab suffix. The tabdelimited format can be viewed in Microsoft Excel. A copy of the file also appears in the logs directory. The following requests are available for execution:
- general_perf_check performs a check to determine if areas of the product are configured in a sub-optimal manner. - orphan_record_check scans some common tables to determine if there are orphan records. - scan_large_tables performs an analysis on some common tables to determine their record counts. - oom_perf_check examines the configuration of the environment for areas that can contribute to high memory usage.
> [!NOTE]
> Run these requests only under the direction of Broadcom Support. The results may identify certain data conditions, but the conditions may not necessarily be a problem. Broadcom Support is trained on how to interpret the results of these scans.
Synchronize Agile Central Job This job processes all projects that are synchronized with Rally investments or portfolio items. When the job runs, it determines whether the Last Agile Sync Date for tasks in PPM is before the Last Updated Date for portfolio items and user stories in Agile Central. - If the Last Agile Sync Date is the same as the Last Updated Date, the tasks are not re-synchronized since there is
no change in Agile Central since the last update. - If the Last Agile Sync Date in PPM is before the Last Updated Date in Agile Central, then the PPM tasks are
updated with the latest changes from Agile Central. The ability to incrementally update the integrated tasks improves job performance.
Integration with Agile Central Investments The job synchronizes CA Agile Central investments to Clarity projects and tasks as follows: - Populates the CA Agile Central investment portfolio item hierarchy that you select to bring into Clarity. - For each CA Agile Central investment associated to the project, the job gets the linked portfolio items and creates
them as tasks in Clarity. - Adds or removes portfolio hierarchy items from the CA Agile Central investment. Updates the corresponding tasks in
Clarity. - Build the tasks WBS with parent and child tasks in Clarity. If a direct parent is skipped from the portfolio item hierarchy,
assumes its next parent as the direct parent. For example, if your portfolio item hierarchy includes only epics and features and skips the initiative level, then the job creates the feature tasks directly under the epic tasks. - Brings user stories and team members into Clarity when they are selected for CA Agile Central investments. - Updates the Last Agile Sync Date and Status attributes in the Clarity project. - If a Time Tracking Project Template is selected for the integration, creates tasks for the lowest level portfolio item type that is selected. - If the Create and Sync Stories option is checked for the project, creates tasks for each story of the feature that is associated to the Agile Central investment.
Integration with Agile Central Portfolio Items The job synchronizes CA Agile Central portfolio items to Clarity projects and tasks as follows based on the integration direction: Rally to Classic PPM Integration Direction In the CA Agile Central to Classic PPM integration direction, the job makes the following updates in the systems:
- Creates top-level CA Agile Central portfolio items (levels P2-P5) based on the information in the Clarity project. The job creates the portfolio items provided they do not already exist for the linked projects.
- Creates Classic PPM tasks from the lower level Rally portfolio items (level P1) based on the information in the portfolio items. The job creates the Classic PPM tasks provided they do not already exist. The synchronization depends on the selection of the Create and Sync Tasks option while configuring the Rally integration settings in Classic PPM.
- Creates Classic PPM tasks for the user stories associated to the lower level Rally portfolio items (level P1). The job creates the Classic PPM tasks provided they do not already exist. The synchronization depends on the selection of the Create and Sync Stories option while configuring the Classic PPM project. Also, the stories are synchronized provided the Create and Sync Task option is selected while configuring the Rally integration settings in Classic PPM. In case a Time Tracking Project Template is selected for the integration, the time tracking tasks are also created as sub tasks at the same level as the user story tasks.
> [!NOTE]
> In this integration direction, since you cannot specify which portfolio items (level P1) to synchronize with Classic PPM, you also cannot specify which user stories are brought over from Rally. All stories for all the features that are synchronized with Classic PPM are brought over from Rally. - Sets the initiative/feature ID of Rally portfolio item on the synchronized project properties on the Agile Summary subpage of Classic PPM. - Populates agile attributes from CA Agile Central to Classic PPM on the Agile Summary subpage of integrated projects and tasks. - Creates Classic PPM subtasks underneath the lower level Rally portfolio item. Values are preset from the Open for Time Entry, Charge Code, and Cost Type fields based on the project template that is associated with the Integration settings in Classic PPM. - Synchronizes Rally projects to Classic PPM project teams provided the Create and Sync Team option is selected while configuring the Rally integration settings in Classic PPM.
Clarity to CA Agile Central Direction
In the Classic PPM to Rally integration direction, the job makes the following updates in the systems:
- Creates top-level CA Agile Central portfolio items (levels P2-P5) based on the information in the Clarity project. The job creates the portfolio items provided they do not already exist for the linked projects.
- Creates lower level CA Agile Central portfolio items (level P1) based on the information in the Clarity tasks. The job creates the Clarity tasks provided they do not already exist. A corresponding portfolio Item is created in CA Agile Central only for tasks marked as Synchronize. This also depends upon the selection of the Create and Sync Tasks option while configuring the CA Agile Central integration settings from Clarity.
- Creates Classic PPM tasks for the user stories associated to the lower level Rally portfolio items (level P1). The job creates the Classic PPM tasks provided they do not already exist. The synchronization depends on the selection of the Create and Sync Stories option while configuring the Classic PPM project. Also, the stories are synchronized provided the Create and Sync Task option is selected while configuring the Rally integration settings in Classic PPM. In case a Time Tracking Project Template is selected for the integration, the time tracking tasks are also created as sub tasks at the same level as the user story tasks.
> [!NOTE]
> In this integration direction, you can select which tasks you want to push to Rally as a portfolio item (level P1). Accordingly, only the user stories for these synchronized tasks are brought over from Rally to Classic PPM. - Sets the Initiative/Feature ID of the CA Agile Central portfolio item on the synchronized project properties on the Agile Summary subpage of Clarity. - Populates Portfolio Item Name, Planned Start Date, and Planned End Date agile attributes from Clarity to CA Agile Central portfolio items. At the task level, Planned Start Date and Planned End Date are based on the task start and

finish dates. If these dates are modified in Clarity, the job overwrites the Planned Start Date and Planned End Date agile attributes in CA Agile Central. - Populates agile attributes from CA Agile Central to Clarity on the Agile Summary subpage of integrated projects and tasks. At the task level, the task ID is not overwritten by the portfolio item ID. - Synchronizes CA Agile Central projects to Clarity project teams provided the Create and Sync Team option is selected while configuring the CA Agile Central integration settings from Clarity.
Bidirectional Synchronization In the Bidirectional integration, the job makes the following updates in the systems: - For each task marked as Synchronize in a Clarity project that is associated to a CA Agile Central portfolio item,
creates a corresponding portfolio item in CA Agile Central. - For each portfolio item in CA Agile Central belonging to a parent portfolio item that is associated to a Clarity project,
creates a corresponding task in Clarity. - If the Create and Sync Stories option is selected for a project, creates Clarity tasks for the user stories associated to
each portfolio item in CA Agile Central.
The job logs error messages in English language only. The project manager can also run the job from the Actions menu of an individual project.
Requirements The Agile add-in must be installed. See Integrate Clarity with Rally.
Restrictions The job cannot run concurrently with any other instance of itself or the following jobs: - Post Timesheets - Time Slicing
> [!TIP]
> Try to avoid scheduling the Synchronize Agile Central job during weekends when Agile Central typically performs system maintenance (you can check status at http://status.rallydev.com/). Connections could be lost during job execution and could possibly cause failures. Because the Project object action Synchronize Agile Central only updates one project at a time and finishes quickly, we recommend that you use that option instead to synchronize projects during the weekend.
Parameters - Date Window: Defines the date window for the updated projects that you want to synchronize with CA Agile Central.
For example, if you select Projects updated in the last 12 months, only the Classic PPM projects updated in the last 12 months are synchronized. - Project Status: Defines the status of the projects that you want to synchronize with CA Agile Central. For example, if you select All Projects, both active and inactive projects are synchronized. - Synchronize Projects where Work Status is Complete: Specifies whether you want to synchronize only the completed projects. The parameter uses the project Progress attribute in the project summary to filter projects that are in Completed status.
Synchronize Jaspersoft Roles Job This job ensures that users of Classic PPM groups that have advance reporting rights and exist in Jaspersoft are matched to the corresponding roles in Jaspersoft. This job is driven by Classic PPM groups.

> [!NOTE]
> This job does not affect designer roles such as ROLE_ADHOC_DESIGNER, ROLE_ADMINISTRATOR, ROLE_ANONYMOUS, ROLE_DASHBOARD_DESIGNER, ROLE_DATASOURCE_DESIGNER, ROLE_DOMAIN_DESIGNER, ROLE_REPORT_DESIGNER, ROLE_USER. Any designer roles, either available by default or created by users at the tenant level, will not be impacted by this job. If this job is executed without selecting the system option, then the job fails and an error message is displayed -"Enable the system option 'Allow Jaspersoft Role synchronization and execute the job again'. The results of the Synchronize Jaspersoft Roles job vary based on the Classic PPM group in the following scenarios: 1. The Clarity group has a matching role in Jaspersoft: The users in Jaspersoft get overwritten based on the group users. If there is a group with users but no matching role in Jaspersoft, no users are transferred or impacted in Jaspersoft. 2. The Clarity group does not exist but the role exists in Jaspersoft: After the job completes successfully, the users with the assigned role in Jaspersoft are removed. 3. The Clarity group exists with corresponding Jaspersoft roles and some users are removed from the Clarity group: After the job completes successfully, the respective users are removed from the role in Jaspersoft. 4. The Clarity group is inactivated and changes are made to the group users: After the job completes successfully, all the roles in Jaspersoft are retained and there is no change to the user assigned to the roles in Jaspersoft. If the group is activated again, any removal and addition of users to the Classic PPM group are reflected in the Jaspersoft user roles. 5. The Clarity group exists with corresponding roles in Jaspersoft and a user role is manually updated in Jaspersoft: After the job completes successfully, then the updated roles are added to the user in Jaspersoft as per the users in Classic PPM groups.
Requirements For the job to match the corresponding users in Classic PPM groups with the Jaspersoft roles, verify the following prerequisites: - In Classic PPM, assign Advanced Reporting access rights to each report user. Without rights, those users are not
synchronized with Jaspersoft roles. - Add the report users to groups in Classic PPM and verify that the groups are active. - Select the Allow Jaspersoft Role Synchronization check box on the System Options page. - To ensure all Classic PPM users exist in Jaspersoft, run the Create and Update Jaspersoft Users job before you run
the Synchronize Jaspersoft Roles job. The Classic PPM access group ID is the same as the role name in Jaspersoft.
Restrictions None
Parameters None
Synchronize Portfolio Investments Job This job synchronizes the portfolio planning data with the latest data from the actual investments. The update is based on a sync schedule that the portfolio manager defines in the portfolio properties. Whenever the job runs based on the sync schedule, the latest data from the actual investments is reflected in the portfolio.

> [!NOTE]
> The job copies only those attributes from the actual investments that were registered to display on your portfolio investment pages and views. For more information about viewing the registered attributes or changing the list of registered attributes, see Clarity Studio Development.
Requirements None
Restrictions None
Parameters None
Synchronize Mapped Information The Synchronize Mapped Information job in Classic PPM enables administrators to synchronize the mapped information between Clarity and Rally. Depending upon the configured direction and Sync Option, the job may perform the various options. To learn more about these options, see Clarity Connections - Rally Integration.
> [!NOTE]
> Some of the key points to remember are: 1. The Synchronize Mapped InformationJob has been enhanced to support the roadmap items object and its
attributes. 2. The Import Staging Table Job runs automatically after the Synchronize Mapped Information job populates
the To Clarity and To Rally Staging tables.
Requirements None
Restrictions None
Parameters Full Load: The Synchronized Map Information job includes a FULL LOAD option. If you select this check box, all the records in Clarity and Rally that are associated with the integration mapping will be synchronized regardless of when both systems were last updated. This option is useful in case both systems are completely out of synchronization and you want to synchronize all records. If you clear the FULL LOAD check box, the job will run as an `Incremental' synchronization job option and process all records for data comparison that have been updated in the last 24 hours. Sync Children of Parent: You can now select the Sync Children of Parent option in the Synchronized Map Information job to automatically include all mapped children of Portfolio Items (e.g., Epics) in the synchronization process. This means that once you map a portfolio item in Rally to an investment in Clarity, you do not need to additionally map every child investment in Rally to an investment in Clarity. The Synchronized Map Information Job will automatically update Clarity and Rally based on your mappings. For all mapped child Portfolio Items, null values will not be populated, and existing values will be ignored.

System Maintenance Job System Maintenance Job Manage application background health by cleaning service-related data, Data Warehouse (DWH) tracking information, and process engine error history. Use this job to systematically purge transient operational data and maintain optimal system performance.
Cleanup Activities The System Maintenance job performs the following background tasks:
- PPM Broker Table Maintenance - Data Warehouse (DWH) Tracker Table Maintenance - BPM (Process Engine) Errors Table Maintenance Parameters - Maintain PPM Broker Service: Enable this to clean PPM Broker tables that store temporary session and service data. - PPM Broker Data Retention (days): Specify the retention period for broker data. Values greater than five reset to the
default to ensure performance. - Clean Data Warehouse Tracker Logs: Remove logs generated during DWH synchronization to keep metadata tables
lean. - Data Warehouse Instance Sync: Synchronize instance-level tracking records to align the DWH with the transactional
database state. - Data Warehouse Tracker Logs Retention (days): Define the number of days to retain DWH ETL and tracker logs
before purging. - Clean Process Error Logs: Purge historical records of failed or errored background processes managed by the
Process Engine. - Process Error Logs Retention (days): Determine the audit period for retaining process error logs before deletion. - Clean Orphaned Process Error Logs: Remove error logs no longer associated with an existing process instance. - Clean Orphaned Process Error Logs (Limit): Set the maximum number of orphaned records to delete per execution
to prevent long database transactions.
Restriction Do not execute the System Maintenance and Database Optimization jobs simultaneously.
Timesheet Integration Job The Timesheet Integration job enables seamless synchronization of timesheet details between Clarity and Rally. Key Features: - Create and update time entry using the Capital Actuals setting
- When the investment type matches the configured setting: - Create time entries in Clarity. - Update or delete matching entries if the job is re-run. - Delete copied time entries belonging to the matching investment type.
- When the investment type does not match: - Do not create time entries. - Retain existing entries without changes.
- Information Sent from Clarity to Rally:
- Team Name: (e.g., Rally Project ID, Clarity Team Resource ID) - Team Membership: (Resource ID, leveraging the Staff module) - Individual Team Member Allocation: (Allocated hours per team member, leveraging the Staff module) - Time Period: The time period for which the data is calculated. - Investment/Team Investment Association with Rally Project: - The Team Investment in Clarity will be associated with a Rally Project. - The Team Investment inherits an out-of-the-box lookup attribute (from the Investment Object) to link a Clarity Team
Investment with a Rally Project. - The Investment object will be updated to include the Rally Team lookup attribute. - Timesheet Details Sent Back to Clarity: - Rally will return the Timesheet data for each Resource, including hours allocated to each Financial Work Type for
each Investment (e.g., Feature). NOTICE The Financial Work Type's Task ID in the Timesheet shows the Financial Work Type Lookup ID values.
- For individuals allocated to more than one team, a single timesheet will be created for the resource, including the time period and hours allocated to each Financial Work Type for each Investment (e.g., Feature) across all teams.
Restrictions The Timesheet Integration Job and the Populate Timesheets Job are incompatible and cannot be executed simultaneously.
Parameters - Integration Type: Choose the integration type. - Time Period Choose the time period.
> [!NOTE]
> Previous Period and Current Period are available in the Time Period parameter. - Team Investments Choose the team investment. This parameter helps determine the specific team assignments and ensures that only relevant team members are considered when populating the timesheets. Example: If the job is run with the Team Investment parameter set to Mobile Team, it will only include team members who are assigned to the Mobile Team. For instance, if Adriana Ramos is not part of the Mobile Team, her timesheet data from Rally will not be included in the job execution, and therefore, will not appear in the resulting timesheet.
Time Slicing Job This job processes all configured time slices and updates discrete transactional data for the actual task assignment values, Estimate To Complete (ETC) and baselines, time sheet actuals, team and assignment data from a scenario, resource allocations to projects and resource availability.
Requirements None
Restrictions This job cannot run concurrently with other Time Slicing jobs. Other instances of this job cannot exist.
Parameters None

## Time Slicing Sync

The Time Slicing Sync job synchronizes and rebuilds the SQLcurve data that underpins timephased views in Clarity, such as per-period cost, work, allocation, and availability. The existing job parameters have been changed, and new parameters have been introduced to provide greater usability and control to the Clarity Administrator.

| Parameter | Purpose | Default Value | Optimized Value | Guidance |
|-----------|---------|---------------|-----------------|----------|
| **Parallel Processing Thread Count** | Controls concurrency | 1 Thread | 2-3 Threads | Increase this only if your database server has ample CPU/Memory available. While higher thread counts process data faster, going beyond 3 risks diminishing returns and table locking. |
| **Process Number of Rows per Batch** | Balances memory usage versus speed | 100 rows | 500 rows | Increase to 500 to speed up processing for large datasets. If you experience "Out of Memory" errors, table locking, or database timeouts, revert to using 100 for this parameter. |
| **Maximum Runtime (minutes)** | Ensures the job yields results after a set time, allowing greater control in overall scheduling | Blank (process all source curves, restricted for frequent runs; Max: 480 minutes = 8 hours) | 10 to 30 minutes | Schedule the job to run more frequently (e.g., every 15 minutes) with a short runtime cap, rather than once a day with no cap. |
| **Number of Prior Months for Limiting Investment Data** | This parameter replaces the "Earliest Investment Finish" parameter. Now, instead of using a specific date, the new parameter uses a relative date based on the current date when running the job. This parameter determines the 1st day of the month specified prior to the current month. Example: If the current month is January 2026, using the default of 60 months, the job will select and process Active Investments with a Finish Date >= January 1, 2021. | 60 months | 36 to 60 months | The parameter processes the following curves: Assignments (`prassignment`), Cost Plan Details (`fin_cost_plan_details`), Investments (`inv_investments`), and Staffing (`prteam`). |
| **Number of Prior Months for Limiting Timesheet Data** | This is a new, separate parameter that determines a relative date as the 1st day of the month specified prior to the current date when running the job. Example: If the current month is January 2026, using the default of 84 months, the job will select and process Timesheet Entries with a Finish Date >= January 1, 2019. | 24 months | 12-24 months | The parameter processes the following curves: Timesheet Entries (`prtimeentry`). If a blank value is entered, the code will process the default of 24 months. If a value >84 is entered, the job will fail with a log message indicating that 84 is the maximum number of months allowed. |

**Date Calculation to Determine which Active Investments or Timesheet Data is Processed:** A blank value for the parameter will process all Active Investments without limits.

> [!NOTE]
> Some key points to remember are:
> - To process curves, the investment must be Active and have a Finish Date on or after the date of the relevant parameter.
> - In previous releases, the "Earliest Investment Finish" parameter was used to limit both investment and timesheet data to a specific date. You now have separate parameters for investment data and timesheet data, enabling relative date determination. Both parameters determine a relative date that begins on the 1st of the determinative month and are used to select which records the job processes. Existing sliced SQLCurves that do not fall within the parameter limitations are not processed, not removed, not updated. If you set the parameter to 0, the system will process Timesheet Entries or Active Investments with a Finish Date >= 1st day of the current month.
> - Time Slicing Sync job ignores inactive investments. You should run this job before deactivating the investment to get up-to-date per-period metrics. When you deactivate an investment, the metrics remain unchanged; no updates are applied by the job that runs after deactivation.

**Requirements:** None

**Restrictions:** This job cannot run concurrently with other scheduled Time Slicing Sync jobs and scheduled Time Slicing jobs.

---

## Tomcat Access Log Import/Analyze Job

This job imports Tomcat access log files from the local Classic PPM environment (all app services), then stores and summarizes the data in designated tables (`LOG_DETAILS`, `LOG_SUMMARY`, `LOG_FILES`, `LOG_REPORTDEFS`). To view the resulting data, see Health Report, Job Monitor, Governor Settings, and Data Warehouse Audit Dashboard.

With the addition of custom portlets and queries or externally available content, this analysis data can provide helpful details regarding the performance of the Classic PPM system. If you are not running a Tomcat application server, the job runs but does not import any data.

**Requirements:** None

**Restrictions:** None

**Parameters:**
- **Log Date:** Specifies the date for the access logs that are imported and analyzed. If no date is specified, the default date is yesterday.

### Log Analysis Data Carried Forward After Data Movement

**Symptom:** If you are moving data from one environment to another environment, the log data related to servers from the first environment appear in the second environment.

**Solution:** To prevent the log data of one environment from appearing in another environment after data migration, run the **Delete Log Analysis Data** job.

**Example:** Consider a scenario where you have run a few jobs in your production environment and the following log tables are populated. If you migrate your data from your production environment to a non-production environment, the servers from your production environment are listed in the non-production environment logs. Before you move the data from the production environment ensure that you run the job **Delete Log Analysis Data**.

The following procedure helps you to verify whether the logs belong to the current environment.

1. Log in to Classic PPM.
2. Navigate to **ADMINISTRATION**, **Security and Diagnostics**, **Log Analysis**.
3. Click the **Hostname** drop-down list.
4. Verify that the server name for the current environment is listed.
5. If the **Hostname** drop-down list displays the server name of the previous environment, run the job **Delete Log Analysis Data**.

---

## Update % Complete Job

The Update % Complete job updates the percent (%) complete values whenever you change project or task data that affects the percent complete calculation. This job is only run if the **% Complete Calculation Method** is set to **Duration** or **Effort**. This is a field on the project scheduling properties page. Schedule this job to update the percent complete values automatically.

In addition, the following operations trigger this job to run:
- Publishing the tentative schedule.
- Posting actuals and distributing them to the project plan.
- Running the Update Earned Value and Cost Totals job or the Update Cost Totals job invokes this job to Update % Complete.

> [!NOTE]
> The job is invoked without any parameters.

This job is scheduled to run automatically every 30 minutes, but you can also run this job on demand.

**Requirements:** For best results, schedule this job to run recurrently at an appropriate interval; for example, every 10 minutes.

**Restrictions:** The Update % Complete job is incompatible with itself.

**Parameters:**
- **Investment Name:** Indicates the active investment to which the user has access rights to edit. The job processes the selected investment.
- **Manager:** Indicates the project/investment manager to which the user has access rights to view resource. The job processes all active investments which are assigned to the selected manager.
- **Investment OBS:** Indicates the Investment OBS Unit to which the user has access rights to view OBS. The job processes all active investments that are associated with the selected OBS unit, based on the OBS Mode setting.
- **OBS Mode:** Determines which branches of the selected OBS structure are processed when selecting investments using an OBS Unit. Values: Unit Only, Unit and Ancestors, Unit and Descendants. Default: Unit Only.
- **Include Milestones when Updating Tasks Status:** Ensure milestones contribute to the rolled-up Task Status and % Complete values. This ensures that zero-duration, high-value checkpoints meaningfully affect overall progress, improving accuracy, stakeholder visibility, and risk management across the WBS.

> [!IMPORTANT]
> If the job is run again without selecting the milestone parameter, it will recalculate the rolled-up Task Status, excluding milestone tasks.

---

## Update Aggregated Data Job

Use the Update Aggregated Data job to flatten the percentage allocations between investments. Run this job for multiple changes in investment data.

The job is only required for generating chargeback invoices. If you are not using chargebacks, this job is optional for you.

This job is scheduled to run automatically every 10 minutes, but you can also run this job on demand. Do not decrease the frequency of this job, as many objects depend on this job to get the flattened view of percentage allocation between the investments.

Run this job successfully before running the **Generate Invoices** job if using Chargebacks.

**Requirements:** None

**Restrictions:** This job cannot run concurrently with any other instance of itself or the Generate Invoices job.

**Parameters:** None

---

## Update Allocation from Estimates Job

The Update Allocation from Estimates Job updates team allocation to match remaining ETC starting from team member ActThrough date.

> [!TIP]
> This job processes team and task data and so run it during off-peak hours. Scheduling this job during normal work hours can affect the overall system performance.

**Restrictions:**

> [!NOTE]
> This job is available for all types of investments. The job updates the allocation values only for active investments and ignores all inactive investments.

**Parameters:**
- **Investment Name:** Indicates the active investment to which the user has access rights to edit. The job processes the selected investment.
- **Manager:** Indicates the project/investment manager to which the user has access rights to view resource. The job processes all active investments which are assigned to the selected manager.
- **Investment OBS:** Indicates the Investment OBS Unit to which the user has access rights to view OBS. The job processes all active investments that are associated with the selected OBS unit, based on the OBS Mode setting.
- **OBS Mode:** Determines which branches of the selected OBS structure are processed when selecting investments using an OBS Unit. Values: Unit Only, Unit and Ancestors, Unit and Descendants. Default: Unit Only.

### Error Handling

The user that schedules these jobs may not have the appropriate security rights to all the resources on the investments.

> [!TIP]
> When making resource staffing decisions, always have the manager with access rights make allocation and ETC decisions for their resources.

If the scheduler of the job does not have the appropriate access rights, the following action happens:
- The job proceeds through all resources on the designated investments.
- The job logs the error in the jobs log file and includes the following information:
- Investment Name
- Team Member Name
- Error Message

---

## Update Data Warehouse Trend Job

This job updates an existing snapshot of your trending data. The job deletes the previous trend snapshot data and then re-creates a new snapshot in its place.

**Requirements:** Run the Load Data Warehouse job before running this job.

**Parameters:**
- **Trend:** All the snapshots of the selected trend are refreshed.

---

## Update Report Tables Job

The Update Report Tables job is required for reports that display any of the following: monthly or weekly calendar periods; FTE amounts; and OBS level or phase grouping options. It is only required for Advanced Reporting reports that display resource skill relationships. The job populates reporting tables based on the parameters that you select when running the job. If these tables are not populated, reports dependent upon them display a "No Data Found" message. Schedule the job to run nightly to keep the reporting tables up to date.

**Requirements:** None

**Parameters:**

The following are the available parameters for this job, each one populating a different table:
- **Update Reporting Calendar:** Populates the calendar table (`rpt_calendar`) that stores date ranges for daily, weekly, monthly and quarterly calendar periods, and the FTE for the date range. The start day of the weekly periods is determined by the **First Day of Work Week** field set in the Administration tool under the Project Management settings. Selecting this option populates the table five years back and five years forward, based on the current date. Most of the reports displaying data by calendar period reference this table. The reports display a "No Data Found" message if this table is not populated. Run the job with this option selected at least once a month and if the availability of the admin resource changes. The admin resource calendar determines the FTE calculation. If you are using Advanced Reporting, this parameter is not applicable, so you can leave it unchecked. In the data warehouse, the `rpt_calendar` table is replaced by the `dwh_cmn_period` calendar table.
- **Update Investment Hierarchy:** Populates the investment hierarchy table (`rpt_inv_hierarchy`) that stores up to ten levels of investment hierarchical relationships and hierarchy allocation percentages. The investment hierarchy table is used by reports in the Classic PPM solution pack. The parameter also populates the program hierarchy table (`rpt_program_hierarchy`) that stores up to five levels of program and project hierarchical relationships. If you are using Advanced Reporting, this parameter is not applicable. In the data warehouse the `rpt_inv_hierarchy` table is replaced by the investment hierarchy table (`dwh_inv_hierarchy`).
- **Update WBS Index:** Populates the WBS index table (`rpt_wbsindex`) that stores relationships between phases and tasks. The option allows an incremental update so you can schedule the job to run frequently (for example, once every hour) if necessary. If you are using Advanced Reporting, this parameter is not applicable. In the data warehouse the `rpt_wbsindex` table is replaced by the task hierarchy table (`dwh_inv_task_hierarchy`).
- **Update Resource Skills Index:** Populates the resource skills tables (`rpt_res_skills_index` and `rpt_res_skills_flat`) that store relationships between resource skills and their parent skills. The job supports up to ten levels in the skills hierarchy. Run the job with this option selected when you create, delete, rename, or modify a skill in the Administration tool under Data Administration, Skills Hierarchy. You do not need to run the job after associating skills to resources. If you are using Advanced Reporting, this parameter is still applicable, so select it.
- **Update OBS:** Populates the data mart OBS table (`nbi_dim_obs`) that stores OBS unit information up to ten levels. The table is used in some reports for grouping by OBS level. Run the job with this option selected nightly or if there are changes to the OBS structure. If you are using Advanced Reporting, this parameter is not applicable. In the data warehouse the `nbi_dim_obs` table is replaced by the OBS Unit lookup table (`dwh_lkp_obs_unit`). For more information about the data warehouse, see PMO Accelerator Advanced Reporting Content and Configure the Data Warehouse and Advanced Reporting.

---

## Update Earned Value History Job

The Update Earned Value History job calculates earned value for a project or set of projects and creates earned value snapshots of the time sliced data. This data is based on the earned value reporting period that is assigned to the project and the parameters that you select. The earned value snapshot is used for historical earned value analysis (EVA) and reporting. The snapshots are stored in rows in the `PRJ_EV_HISTORY` (earned value history) table. You can use this reporting data in reports.

This job invokes the Update % Complete job on a recurring schedule that is based on how often your organization reports on your earned value data. This job uses the lag value to determine the day to take the snapshot. A snapshot is taken on the first day following the defined lag, providing you do not run the job on that day.

**Example: Monthly with Three Day Lag**

If you schedule this job to run monthly starting 2/1/15 with a lag of three days and you have associated the project to an earned value reporting period whose period type is defined as Monthly and frequency is the first day of the month, a snapshot for January 2015 is generated only when the job runs on 2/04/15 or later.

For each project that meets the job parameter criteria, this job:
- Finds the project associated earned value reporting period and saves the project tasks earned value data based on that period.
- Locks the project **Earned Value Reporting Period** field. For more information, see Classic PPM: Project Management.

**Requirements:** To create a historical snapshot, the project requires a current baseline. The project also requires an association with a valid historical earned value reporting period. No data is generated for new period definitions until they have occurred. Only the Period Number = 0 records are updated until the project is associated with at least one past period type definition. If you associate a new period type definition with investments and run the job, it generates no rows in the `PRJ_EV_HISTORY` table for past periods. However, you can wait until time has transpired and the current period is now in the past. When you next run the job, the periods are created for that project.

**Restrictions:** You cannot run more than one instance of this job at the same time.

**Parameters:**
- **Investment:** Defines the name of the investment on which this job runs.
- **OBS Unit:** Defines the name of the OBS Unit for the project on which this job runs.
- **Investment Manager:** Specifies the name of the resource managing the project.
- **Lag:** Determines the number of days to wait before taking the snapshot. Use this setting to defer taking a historical snapshot so that your organization can reconcile the actual values from one system to another.
- **Rewrite Existing Snapshot:** Indicates for the job to regenerate the current reporting period snapshot and replace the existing current periodic snapshot with updated data. When cleared, the projects having periodic snapshots are ignored. Default: Cleared.
- **Show Projected ACWP:** Indicates for the job to create data for the projected actual cost of work performed (ACWP) of all level-1 tasks in the work breakdown structure (WBS) for a project. Default: Cleared (disabled).
- **Show Projected BCWP:** Indicates whether you want this job to create data for the projected budgeted cost of work performed (BCWP) of all level-1 tasks in the work breakdown structure (WBS) for a project. Default: Cleared (disabled).
- **Show Projected BCWS:** Indicates for the job to create data for the projected budgeted cost of work scheduled (BCWS) as of the date for projects and project tasks. Default: Cleared (disabled).

If you do not complete any of the parameters, all investments are processed.

---

## Update Earned Value and Cost Totals Job

This job calculates the earned value and costs for projects and NPIOs. You can select the investment using the **Browse Investment** field on the Job Properties page.

This job tracks investment progress by calculating earned value and updating costs, and invokes the Update % Complete job before it runs. The current earned value totals are calculated and recorded through the current date for one or more investments. The data is stored in a reserved row in the `PRJ_EV_HISTORY` (earned value history) table. The saved current earned value data totals appear in fields on investments and tasks.

When no specific Investment for the job is selected, it processes all the active investments (it will skip inactive investments).

This job is scheduled to run regularly. You can schedule this job to run in the background. You can invoke this job on demand for an investment by selecting **Update Cost Totals** from the **Actions** menu. For more information, see Classic PPM: Project Management.

**Restrictions:** This job cannot run concurrently with any other instance of itself.

**Parameters:**
- **Investment:** Select one active or inactive investment. Without a selected investment, the job processes all active investments.
- **OBS Unit:** Defines the name of the OBS Unit for the project on which this job runs.
- **Investment Manager:** Specifies the name of the resource managing the investment.

> [!TIP]
> A large number of team members on investments can impact job performance. We recommend that you define the job using parameters to reduce the volume of updated data.

---

## Update Estimates from Allocations Job

Updates the Effort Task ETC to match Allocation starting from team member Act through date.

> [!IMPORTANT]
> Any staff member who is not already assigned to the Effort Task will be assigned when the job runs. This ensures the Effort Task includes all staff members, with updated Estimates based on their allocation as of their "Actuals Thru" date.

**Restrictions:**
- Projects without an Effort Task are not processed. The job updates the ETC values only for active investments and ignores all inactive investments.
- This job processes a high-volume of team and task data. Run it during off-peak hours. Scheduling this job during normal work hours can affect overall system performance.

**Parameters:**
- **Investment:** Indicates the active project or investment to which the user has access rights to edit.
- **Manager:** Indicates the project or investment manager to which the user has access rights to view resource. The job processes all active investments which are assigned to the selected manager.
- **Investment OBS:** Indicates the investment OBS Unit to which the user has access rights to view OBS. The job processes all active investments that are associated with the selected OBS unit, based on the OBS Mode setting.
- **OBS Mode:** Determines which branches of the selected OBS structure are processed when selecting investments using an OBS Unit. Values: Unit Only, Unit and Ancestors, Unit and Descendants. Default: Unit Only.
- **Investment Type:** Indicates the investment type: Applications, Assets, Ideas, Other Work, Portfolios, Programs, Services, Projects, and Products.

### Error Handling

The user that schedules these jobs may not have the appropriate security rights to all the resources on the investments.

When handling staffing decisions, we recommend that the appropriate manager (with the appropriate access rights) makes the allocation and ETC decisions for their resources.

If the scheduler of the job does not have the appropriate access rights, the following action happens:
- The job proceeds through all resources on the designated investments.
- The job logs the error in the jobs log file and includes the following information:
- Investment Name
- Team Member Name
- Error Message

The log file, `App-niku-xbl.log` is located at `<Clarity_Runtime>\logs`.

---

## Post WIP Actuals to Financial Plans Job

The Post WIP Actuals to Financial Plans job posts Actuals and Forecast attributes to Cost Plans and Budgets after they are posted to WIP. This applies to Projects, Ideas, Custom Investments and Team Investments in Clarity.

> [!ATTENTION]
> Prior to Clarity 16.4.0, Post WIP Actuals to Financial Plans was named Update Financial Plan Actuals and Forecast.

**Requirements:** Run the Post to WIP job before running this job.

**Parameters:**
- **Investment OBS:** Indicates the investment OBS Unit to which the user has access rights to view OBS. The job processes and calculates the actuals and forecast of all active investments associated with the selected OBS unit.
- **Investment:** Defines the name of the investment on which this job runs to calculate the actuals and forecast of the investment.
- **Update Only Plan of Record:** Updates the actuals and forecast for the cost plan of record of the investment. This option is selected by default.
- **Update Only Approved Budget:** Updates the actuals and forecast of the approved budget plan. This option is selected by default.
- **Update Only Active Investments:** Updates the actuals and forecast of the active investments. This option is selected by default.
- **From Financial Plan Last Updated Date:** Defines the from-date to which financial plan has been updated for this job to process. Specify one of the following dates:
- **Specific Date:** Enter a date or use the calendar tool to select the date.
- **Relative Date:** Select the appropriate relative date from the drop-down.
- **To Financial Plan Last Updated Date:** Defines the to-date to which financial plan has been updated for this job to process. Specify one of the following dates:
- **Specific Date:** Enter a date or use the calendar tool to select the date.
- **Relative Date:** Select the appropriate relative date from the drop-down.

---

## Validate Process Definitions Job

This job checks for the integrity of a process. For example, if a subprocess called by the process is active, or if a step action condition is valid. This job can be useful when you use process definition XOG to import many process definitions. All process definitions that are imported into the target system are not validated and in draft mode. You can then run this job to batch validate and activate process definitions.

In various cases, certain processes can be invalidated. For example, during ODF object deletion, object attribute deletion, or process deactivation. You can schedule this job regularly to validate the process definitions.

**Restrictions:** None

**Requirements:** Validate process definitions that the login user has Process Definition - View access rights. Optionally activate the process definitions when they validate.

**Parameters:**
- **Activate Process If Validated:** When enabled and Process Status is Validated, the job automatically activates the process definitions. Default: Cleared.
- **Process Status:** Specifies the status of process definitions that are imported into the target system. Values:
- Errors Encountered
- Not Validated
- Re-validation Required
- Validated

---

## SaaS User Sync Job

The SaaS User Sync job enables Clarity SaaS customers to synchronize Clarity users with Broadcom Okta and assign them to the appropriate Okta groups. Administrators should manually schedule this job to run regularly. In Clarity 15.9.1 and future releases, customers do not need to log in to Okta as tenant admin to add users such as contractors who don't have a federated SSO account.

> [!NOTE]
> Federated SSO users will use the JIT provisioning capability in Clarity. They can also use the SaaS User Sync job to pre-define all their users in OKTA. To learn more about using Federated SSO for Clarity SaaS, see Clarity SaaS Authentication in the Google Cloud Platform.

The SaaS User Sync job reads all active users from Clarity that have not been synced previously and then performs the following actions:
- Check if the Clarity user exists in Okta.
- If the username is not in the form of an email address, the user is skipped.
- If the user exists and is in the appropriate Okta group, then the job will not make any changes.
- If the user exists but is not in the appropriate Okta user group, the job will add the user to the appropriate Okta user group.
- If the user does not exist in Okta, the job will create the user and add them to the appropriate Okta user group.

If user status in Clarity is "inactive", then the job removes the user from the Okta user group, thus revoking their access to the Clarity PPM instance. The user will be marked as not having been synced in case they are reactivated at a future date.

**Requirements:** None

**Restrictions:** None

**Parameters:**
- **Email Address (Required):** Specify the user name of the users that need to be created in Okta. You can use wild cards to select a category of users. Some examples include `abc*@broadcom.com`, `*@avago.com`, or `*` (which will run for all users). You can also use a comma to manually specify multiple email addresses, for example, `user1@broadcom.com, user2@broadcom.com`.
- **Notify Users (Required):** When set to "Yes", Okta registration is sent to the user, unless their email domain is enabled for Federated SSO. When set to "No", the user is not notified for Okta registration.
- **Full Sync:** When this is not selected, Clarity will only consider users that match the email address criteria and have not been synchronized since the last time the job was run. When this is selected, Clarity will consider users that match the email address criteria and give no consideration to when the job was last executed.

> [!NOTE]
> In Clarity 15.9.1 and higher releases, you can specify a secondary email address for a user in Clarity. This is intended only for Clarity SaaS customers who want to create test user accounts in Clarity. In previous releases of Clarity SaaS, if customers created a test user with an invalid email address then they did not get any Okta activation information. In Clarity 15.9.1 and higher releases, you can create a test user in Clarity where the user name and primary email address are invalid and the secondary email will be a valid email. You can use the same secondary email address for all test accounts.

After you create the new user in Clarity, you can use the SaaS User Sync job to update the details in OKTA for non-federated users. Federated users can leverage Broadcom's Okta "Just in time" (JIT) user creation, which automatically creates the user (in Okta) after receiving a SAML request. The user's primary and secondary email is now configured in OKTA. However, once Clarity creates a user in OKTA, it will not update any details in OKTA. You need to work with your OKTA Group administrator to update user details in OKTA.

---

## Clarity Portlets Reference

This article provides a description, the default navigation steps, and supporting technical properties for each standard Classic PPM and PMO portlet. Select from two primary viewing options:
- Portlets by Role
- Portlets by Name

### Portlets by Role

#### All Roles

The following portlets are available and appropriate to all users in any role:
- Action Items Portlet
- Favorite Links Portlet
- Favorite Photo Portlet
- General Portlet
- My Projects Portlet
- Notifications Portlet
- Site Links Portlet

#### Administrators

The following portlets are available to administrators:
- Currently Running Jobs Portlet
- Data Warehouse Audit Portlet
- Data Warehouse Error Portlet
- Earned Value Reporting Periods Portlet
- Locked Users (90 Days Inactivity) Portlet
- Rights by License Type Portlet
- Site Links Portlet
- User Count by License Type Portlet

> [!TIP]
> The following access rights are helpful for administrators working with portlets and pages:
> - Administration - Access
> - Page Viewer - All
> - Portlet Viewer - All

#### Financial Managers

The following portlets are available to financial managers:
- Balance Portlet
- Capital and Operating Budget vs. Forecast Portlet
- Capital and Operating Cost Summary Portlet
- Change Request Management Portlet
- Investment Cost and Role Demand Portlet
- Investment Cost by Period Portlet
- Investment Financial Summary Portlet
- Investment Planning by Period Portlet
- Planned Benefit by Goal Portlet
- Posted Transaction Review Portlet
- Posted Transaction Review [Investment Level] Portlet
- Risk Management Portlet

#### Portfolio Managers

The following portlets are available to executives, senior directors, and portfolio managers.

> [!TIP]
> To compare forecasted amounts between different portlets in a portfolio, ensure that the same Forecast As Of Date is configured for each portlet in the filter. If the Forecast As Of Date is different, the forecasted amounts display values from investments in the past periods. Some portlets that include forecast fields are pre-configured with this filter setting by default.
- Actuals by Transaction Type Portlet
- Balance Portlet
- Capital and Operating Budget vs. Forecast Portlet
- Capital and Operating Cost Summary Portlet
- Change Request Management Portlet
- Cost and Schedule Overview Portlet
- Earned Value Analysis by Phase Portlet
- Investment Cost and Role Demand Portlet
- Investment Cost by Period Portlet
- Investment Financial Summary Portlet
- Investment Planning by Period Portlet
- Investment Schedule Portlet
- OBS Investment Aggregation Portlet
- Pending Estimates Review Portlet
- Planned Benefit by Goal Portlet
- Planned Cost by Goal Portlet
- Planned Cost by Project Type Portlet
- Planned Cost by Waterline Portlet
- Portfolio Capital and Operating Cost Analysis Portlet
- Portfolio Capital and Operating Costs Portlet
- Portfolio Cost and Benefit Analysis Portlet
- Portfolio Cost by Overall Health Portlet
- Portfolio Costs Portlet
- Portfolio Investment Count by Approval Portlet
- Portfolio Investment Count by Goal Portlet
- Portfolio Investment Count by Type Portlet
- Portfolio Investment Count by Waterline Portlet
- Portfolio Investment Count by Work Status Portlet
- Portfolio Planned Cost by Goal Portlet
- Portfolio Planned NPV by Goal Portlet
- Portfolio Role Analysis Portlet
- Portfolio Role Demand by Goal Portlet
- Portfolio Roles Portlet
- Posted Transaction Review Portlet
- Posted Transaction Review [Investment Level] Portlet
- Project Baselines Portlet
- Project Costs By Phase Portlet
- Project Cycle Time Analysis Portlet
- Project Indicators Portlet
- Project KPIs by OBS Portlet
- Project Schedule Portlet
- Resource Utilization Portlet

#### Project Managers

The following portlets are available to service, business unit, program, and project managers:
- Balance Portlet
- Change Request Management Portlet
- Current Issues Portlet
- Current Issues Listing Portlet
- Discussion Messages Portlet
- Idea List Portlet
- Idea Processes Portlet
- Issue Management Portlet
- Issues by Priority Portlet
- Issues Listing Portlet
- Labor Effort Portlet
- Late Status Reports Portlet
- Late Tasks and Milestones Portlet
- Milestones Portlet
- Missing Status Reports Portlet
- My Projects Portlet
- OBS Investment Aggregation Portlet
- OBS Resource Aggregation Portlet
- Pending Estimates Review Portlet
- Planned Benefit by Goal Portlet
- Planned Cost by Goal Portlet
- Planned Cost by Project Type Portlet
- Planned Cost by Waterline Portlet
- Posted Transaction Review Portlet
- Posted Transaction Review [Investment Level] Portlet
- Process Bottlenecks Portlet
- Program Manager Cost Dashboard Portlet
- Program Manager Schedule Dashboard Portlet
- Project Analysis Portlet
- Project Baselines Portlet
- Project Costs By Phase Portlet
- Project Costs by Task Portlet
- Project Cycle Time Analysis Portlet
- Project Document Review Portlet
- Project Indicators Portlet
- Project KPIs by OBS Portlet
- Project Lifecycle Review Portlet
- Project Manager Cost and Effort Dashboard Portlet
- Project Manager Schedule Dashboard Portlet
- Project Schedule Portlet
- Risk Management Portlet
- Schedule and Progress Portlet
- Schedule Performance Portlet
- Schedule Performance Details Portlet
- Site Links Portlet
- Status Report Indicators Portlet
- Status Report Listing Portlet
- Subprojects Portlet
- Unfilled Requirements Portlet
- Upcoming Milestones Portlet

#### Resource Managers

The following portlets are available to resource managers:
- Action Items Portlet
- Actuals by Transaction Type Portlet
- Allocation Discrepancy Portlet
- Booking Status Portlet
- Capacity Overview Portlet
- Change Request Management Portlet
- Investment Timesheet Review Portlet
- Investment Timesheet Summary Portlet
- Labor Effort Portlet
- Late Tasks and Milestones Portlet
- OBS Investment Aggregation Portlet
- OBS Resource Aggregation Portlet
- Pending Estimates Review Portlet
- Process Bottlenecks Portlet
- Project Costs By Phase Portlet
- Project Costs By Resource Portlet
- Project Schedule Portlet
- Resource Utilization Portlet
- Resource Utilization Percentage by Month Portlet
- Resource Workloads Portlet
- Role Capacity Portlet
- Role Capacity and Demand Portlet
- Role Capacity and Demand Histogram Portlet
- Role Demand by Goal Portlet
- Role Demand by Waterline Portlet
- Role Capacity Histogram Portlet
- Schedule Performance Portlet
- Schedule Performance Details Portlet
- Staffing Portlet
- Staffing Details Portlet
- Subprojects Portlet
- Team Capacity Portlet
- Team Member Task Summary Portlet
- Team Utilization Portlet
- Timesheet Notes Portlet
- Timesheet Review [Investment Level] Portlet
- Timesheets to Approve Portlet
- Top Down Planning by Investment Portlet
- Unfilled Requirements Portlet
- Upcoming Milestones Portlet
- Weekly Detail Portlet

#### Team Members

The following portlets are available to team members and other resources who contribute to a project:
- Action Items Portlet
- Discussion Messages Portlet
- Favorite Links Portlet
- Favorite Photo Portlet
- General Portlet
- Idea List Portlet
- My Projects Portlet
- My Timesheets Portlet
- Notifications Portlet
- Project Document Review Portlet
- Site Links Portlet
- Subprojects Portlet
- Team Utilization Portlet
- Timesheet Notes Portlet

---

### Portlets by Name
- Action Items Portlet
- Actuals by Transaction Type Portlet
- Allocation Discrepancy Portlet
- Balance Portlet
- Booking Status Portlet
- Capacity Overview Portlet
- Capacity Overview Portlet Investment Demand View
- Capacity Overview Portlet Staff Allocation View
- Capacity Overview Portlet Unfilled Roles View
- Capital and Operating Budget vs. Forecast Portlet
- Capital and Operating Cost Summary Portlet
- Change Request Management Portlet
- Cost and Schedule Overview Portlet
- Current Issues Portlet
- Current Issues Listing Portlet
- Currently Running Jobs Portlet
- Data Warehouse Audit Portlet
- Data Warehouse Error Portlet
- Discussion Messages Portlet
- Earned Value Analysis by Phase Portlet
- Earned Value Reporting Periods Portlet
- Favorite Links Portlet
- Favorite Photo Portlet
- General Portlet
- Idea List Portlet
- Idea Processes Portlet
- Investment Cost and Role Demand Portlet
- Investment Cost by Period Portlet
- Investment Financial Summary Portlet
- Investment Planning by Period Portlet
- Investment Schedule Portlet
- Investment Timesheet Review Portlet
- Investment Timesheet Summary Portlet
- Issue Management Portlet
- Issues by Priority Portlet
- Issues Listing Portlet
- Labor Effort Portlet
- Late Status Reports Portlet
- Late Tasks and Milestones Portlet
- Locked Users (90 Days Inactivity) Portlet
- Milestones Portlet
- Missing Status Reports Portlet
- My Projects Portlet
- My Reports Portlet
- My Timesheets Portlet
- Notifications Portlet
- OBS Investment Aggregation Portlet
- OBS Resource Aggregation Portlet
- Pending Estimates Review Portlet
- Planned Cost by Goal Portlet
- Planned Benefit by Goal Portlet
- Planned Cost by Project Type Portlet
- Planned Cost by Waterline Portlet

---

### Action Items Portlet

Use this portlet to view the action items that you create or that other users assign to you. This portlet displays the status, due date, and assignee for each action item.

**Navigation:** Click **Home**, **Personal**, **General**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `calendar.myActionItems` |
| Category | Collaboration |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### Actuals by Transaction Type Portlet

Use this portlet to view the actual quantity and cost for posted transactions. The portlet shows transaction type, resource, and transaction date.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Projects**.
2. Click a project. The project Dashboard tab appears.
3. Enable the page layout that displays this portlet if it does not appear:
   a. Click the **Properties** tab drop-down list, select **Main**, **Properties**, **General**.
   b. In the **Page Layout** field, select **Project Default Layout** or **PMO-Project Status**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjTrxTypeHierarchy` |
| Category | Productivity |
| Data Provider | Actuals by Transaction Type |
| Data Provider ID | `cop.trxTypeHierarchyLinkable` |
| Data Provider Type | Query |

### Allocation Discrepancy Portlet

Use this portlet to view the team members with a discrepancy between their allocations and actuals. The discrepancy is above or below a specified threshold. The portlet displays the difference between allocated hours for a resource and the actual hours that the resource has logged against their assignments for investments. You can specify which resources to display by altering the **Deviation Threshold** percentage value in the filter section. By default, 20 percent is the deviation threshold. The **Duration** field determines how many periods to use for the calculation of allocations and posted actuals. The **Time Scale** field determines the length of time to use for the calculations.

**Navigation:**
1. Click **Home**, **Resource Management**, **Resource Planning**.
2. Click the **Allocations** tab on the Resource Planning page.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.allocationDiscrepancy` |
| Category | Resource |
| Data Provider | Actuals vs Allocation Discrepancy |
| Data Provider ID | `allocationDiscrepancy` |
| Data Provider Type | System |

### Balance Portlet

Use this portlet to compare the planned cost and risk of investments with their business alignment and finish dates. Each bubble on the graph represents an investment. The size of the bubble measures the planned cost of the investment.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Scorecard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvBalance` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Booking Status Portlet

Use this portlet to view and edit resource booking status and other allocation information by investment. This portlet provides the following information for each resource by investment:
- Role
- Booking status
- Start and finish dates
- Allocation hours
- Allocation percentage

**Navigation:**
1. Click **Home**, **Resource Management**, **Resource Planning**.
2. Click the **Bookings** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.bookingStatus` |
| Category | Resource |
| Data Provider | Team Allocations |
| Data Provider ID | `teams` |
| Data Provider Type | System |

### Capacity Overview Portlet

Use this portlet to view the capacity, demand, remaining capacity, and actual hours that are provided by unit in the Resource OBS hierarchy. The portlet provides information at aggregated and detailed levels in three portlet views:
- Investment Demand View
- Staff Allocation View
- Unfilled Roles View

**Navigation:**
1. Click **Home**, **Resource Management**, **Capacity Overview**.
2. Select an OBS and click **Filter** in the **Resource OBS** field.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.obsCapacityPlan` |
| Category | Resource |
| Data Provider | `projmgr.obsCapacityOverview` |
| Data Provider ID | `obsCapacityOverview` |
| Data Provider Type | System |

### Capacity Overview Portlet Investment Demand View

Use this view from the Capacity Overview portlet to examine the following details for the selected OBS:
- Investment names
- Investment managers
- Investment start and finish dates
- Allocation of resources

The portlet displays a list of investments with the allocation data for named resources and roles. Each row in the portlet corresponds to an investment with the staff members of the selected OBS.

**Navigation:**
1. Click **Home**, **Resource Management**, **Capacity Overview**.
2. Click the **Investment Demand** icon in any OBS row in the Capacity Overview portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.obsCapacityPlan` |
| Category | Resource |
| Data Provider | `pma.capacityOverviewInvDemand` |
| Data Provider ID | `pma.capacityOverviewInvDemand` |
| Data Provider Type | Not Applicable |

### Capacity Overview Portlet Staff Allocation View

Use this view from the Capacity Overview portlet to examine the following details for the selected OBS:
- Name of each resource
- Primary role
- Allocation over the same time periods that appear in the Capacity Overview portlet

The portlet displays allocation data for the named resources that are assigned to a specific resource OBS. You select the resource OBS in the filter for the portlet.

> [!NOTE]
> The allocation is blank for resources that are associated with the Resource OBS but are not allocated to any projects.

**Navigation:**
1. Click **Home** and under **Resource Management** select **Capacity Overview**.
2. Click the **Staff Allocation** icon in any row for an OBS in the Capacity Overview portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.obsCapacityPlan` |
| Category | Resource |
| Data Provider | Not applicable |
| Data Provider ID | `projmgr.staffAllocationOverview` |
| Data Provider Type | System |

### Capacity Overview Portlet Unfilled Roles View

Use this view from the Capacity Overview portlet to examine the following details for the selected OBS:
- Unfilled role requests
- Investments that are requesting roles
- Allocation information for the role requests

Each row in the portlet corresponds to an unfilled role in an investment.

**Navigation:**
1. Click **Home** and under **Resource Management** select **Capacity Overview**.
2. Click the **Unfilled Roles** icon in a row for an OBS in the Capacity Overview portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.obsCapacityPlan` |
| Category | Resource |
| Data Provider | `projmgr.unfilledRequirements` |
| Data Provider ID | `projmgr.unfilledRequirements` |
| Data Provider Type | System |

### Capital and Operating Budget vs. Forecast Portlet

Use this portlet to view budgeted, actual, and forecast costs and the budget to forecast cost variances for investments in a portfolio.

**Navigation:**
1. Click **Home** and under **Portfolio Management** select **Portfolios**.
2. Click a portfolio.
3. Click the **Financials** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvCapitalOperatingBudgetForecast` |
| Category | Productivity |
| Data Provider | Portfolio Investment Financial Performance |
| Data Provider ID | `pfm_finperformance` |
| Data Provider Type | System |

### Capital and Operating Cost Summary Portlet

Use this portlet to view planned and actual investment costs including capital, operating, and total costs. View investment totals, distributed targets, and variances.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Financials** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvCapitalOperatingCostSummary` |
| Category | Productivity |
| Data Provider | Portfolio Investment Financial Performance |
| Data Provider ID | `pfm_finperformance` |
| Data Provider Type | System |

### Change Request Management Portlet

Use this portlet to view a list of change requests for a project. You can view the owner, status, category, and priority of each change request. The default filter for the portlet shows only the change requests with a status of Open or Work in Progress. When set to its default value of Yes, the **Include Programs** option also shows programs in the portlet.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **Risks, Issues, and Changes** tab.
3. Open a project.
4. Click the **Risks/Issues/Changes** tab. The tab shows three menu options: Risks, Issues, and Change Requests.
5. Click **Change Requests**.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.changeRequestManagement` |
| Category | Productivity |
| Data Provider | Risk Management Provider |
| Data Provider ID | `cop.riskManagement` |
| Data Provider Type | System |

### Cost and Schedule Overview Portlet

Use this portlet to view metrics, performance indicators, and risk information for each project that is associated with a program.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Programs**.
2. Select a program. The program Dashboard tab appears.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.dashboardProgramCSR` |
| Category | Productivity |
| Data Provider | Cost and Schedule Overview |
| Data Provider ID | `cop.dashboardProgramCSR` |
| Data Provider Type | Query |

### Current Issues Portlet

Use this portlet to view the number or percentage of issues in a pie chart that is grouped by priority. You can filter the data by OBS or Project Manager. You can also adjust the range of days (Days Outlook) from a starting point (As of Date).

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **PM Alerts** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.currentIssues` |
| Category | Productivity |
| Data Provider | Current Issues |
| Data Provider ID | `cop.currentIssues` |
| Data Provider Type | Query |

### Current Issues Listing Portlet

Use this portlet to view details about issues spanning one or more days. The portlet indicates whether the target resolution date of an issue is on track.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. On the Overview page, click the **PM Alerts** tab.
3. In the Current Issues portlet, click a visual data element. For example, click a slice in a pie chart, a bar in a bar chart, or a data point in a line graph.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.currentIssuesListingLinkable` |
| Category | Productivity |
| Data Provider | Current Issues Listing |
| Data Provider ID | `cop.currentIssuesLinkable` |
| Data Provider Type | Query |

### Currently Running Jobs Portlet

Use this portlet to view all jobs that are running at the current time.

**Navigation:** Click **Administration**, **Security and Diagnostics**, **Jobs Monitor**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `job_current_running` |
| Category | Business Intelligence |
| Data Provider | Currently Running Jobs query |
| Data Provider ID | `job_current_running` |
| Data Provider Type | System |

### Data Warehouse Audit Portlet

Available in Release 15.6, use this portlet to view the most recent progress of the individual steps processed by the Load Data Warehouse job.

**Navigation:**
1. Click **Administration**, **Security and Diagnostics**, **Data Warehouse**.
2. The Data Warehouse Audit portlet displays the following fields:
- Data Warehouse Table Name
- Update Date
- Load Start Date-Time Stamp
- Load End Date-Time Stamp
- Duration (seconds)
- Row Count
3. Any errors appear in the companion Data Warehouse Error portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.admDWHAudit` |
| Category | Productivity |
| Data Provider | Data Warehouse Audit |
| Data Provider ID | `cop.admDWHAudit` |
| Data Provider Type | Query |

### Data Warehouse Error Portlet

Available in Release 15.6, use this portlet to view any error messages for problems that might have occurred during recent Load Data Warehouse jobs.

**Navigation:**
1. Click **Administration**, **Security and Diagnostics**, **Data Warehouse**.
2. If any errors occurred, the Data Warehouse Error portlet displays the following fields:
- Data Warehouse Table Name
- Error Message
- Error Number
- SQL Command

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.admDWHError` |
| Category | Productivity |
| Data Provider | Data Warehouse Error |
| Data Provider ID | `cop.admDWHError` |
| Data Provider Type | Query |

### Discussion Messages Portlet

Use this portlet to view posted messages.

**Navigation:** Click **Home**, **Personal**, **General**.

> [!NOTE]
> By default, this portlet does not appear; however, you can add it to any page.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `ntd.homeMessages` |
| Category | Collaboration |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### Earned Value Analysis by Phase Portlet

Use this portlet to view the earned value metrics for each project phase.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Projects**.
2. Click a project. The Dashboard tab appears.
3. Enable the page layout that displays this portlet if it does not appear:
   a. Click the **Properties** tab drop-down list, select **Main**, and under **Properties** select **General**.
   b. In the **Page Layout** field, select **PMO-Project Storyboard**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjEarnedValuePhaseAnalysis` |
| Category | Productivity |
| Data Provider | Earned Value Analysis by Phase |
| Data Provider ID | `cop.earnedValuePhaseAnalysis` |
| Data Provider Type | Query |

### Earned Value Reporting Periods Portlet

As an administrator, use this portlet to view time periods for earned value reporting.

**Navigation:** Open **Administration** and under **Earned Value Management**, **Period Definitions**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | Not applicable |
| Category | Project |
| Data Provider | PeriodDef |
| Data Provider ID | Not applicable |
| Data Provider Type | Not applicable |

### Favorite Links Portlet

Use this portlet to store your favorite links to external web sites, intranet sites, or internal links to other application pages.

**Navigation:** Click **Home**, **Personal**, **General**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `nde.homeFavLinks` |
| Category | Personal |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | Not applicable |

### Favorite Photo Portlet

Use this portlet to display a single graphic to personalize your user interface. Valid picture file formats include `.jpg`, `.gif`, and `.png`.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click **Personalize** and then click **Add** to add the Favorite Photo portlet to the page.
3. Click **Options** and then select **Configure** to set a favorite photo.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `nde.homePhoto` |
| Category | Personal |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | Not applicable |

### General Portlet

Use this portlet to view the standard information for a project.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Projects**.
2. Click a project. The Dashboard tab appears.
3. Enable the page layout that displays this portlet if it does not appear:
   a. Click the **Properties** tab drop-down list, select **Main**, and under **Properties** select **General**.
   b. In the **Page Layout** field, select **Project Default Layout**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `project.General` |
| Category | Project |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### Idea List Portlet

Use this portlet to view a list of ideas by type, category, priority, cost, return, NPV, start date, and status. You can click an idea to view details and edit its properties.

**Navigation:** Click **Home** and under **Demand Management**, **Ideas**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `pma.ideaPortlet` |
| Category | Idea Management |
| Data Provider | Idea |
| Data Provider ID | Idea |
| Data Provider Type | Object |

### Idea Processes Portlet

As a marketing or product manager, use the Idea Processes portlet to view the status of the current ideas moving through the approval process. Click the process icon to see the progress of the idea and drill down to the idea properties page.

**Navigation:**
1. Configure and activate an idea process flow.
2. Navigate to the Idea Management Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | Accelerator for New Product Development (NPD) |
| Portlet ID | `pma.ideaPortlet` |
| Category | Idea Management |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### Investment Cost and Role Demand Portlet

Use this portlet to view the planned, actual, and remaining role amounts for investments in a portfolio.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Analysis** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvCostRoleDemand` |
| Category | Productivity |
| Data Provider | Portfolio Investment Financial Performance |
| Data Provider ID | `pfm_finperformance` |
| Data Provider Type | System |

### Investment Cost by Period Portlet

Use this portlet to view the planned, actual, remaining, and forecast cost for investments in a portfolio. View amounts by period or in total.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Financials** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvCostByPeriod` |
| Category | Productivity |
| Data Provider | Portfolio Investment Financial Performance |
| Data Provider ID | `pfm_finperformance` |
| Data Provider Type | System |

### Investment Financial Summary Portlet

Use this portlet to view financial amounts and metrics, including NPV and ROI, for investments in a portfolio.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Financials** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvFinancialSummary` |
| Category | Productivity |
| Data Provider | Portfolio Investment Financial Performance |
| Data Provider ID | `pfm_finperformance` |
| Data Provider Type | System |

### Investment Planning by Period Portlet

Use this portlet to edit the planned benefit, capital cost, and operating cost by period for investments in a portfolio.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Financials** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvPlanningByPeriod` |
| Category | Productivity |
| Data Provider | Portfolio Investment Financial Performance |
| Data Provider ID | `pfm_finperformance` |
| Data Provider Type | System |

### Investment Schedule Portlet

Use this portlet to view the schedule, planned cost, and role demand for investments in a portfolio. You can view the list of portfolio investments and can compare their schedules.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Capacity** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvSchedule` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Investment Timesheet Review Portlet

Use this portlet to view pending and posted actuals by task, resource, and time period with expandable notes.

**Navigation:**
1. Click **Home** and under **Resource Management**, **Timesheet Overview**.
2. Click the arrow icon in the **Timesheet Details** column of the Investment Timesheet Summary portlet. The Timesheet Details page appears including the Investment Timesheet Review portlet.
3. Click the check mark icon in the **Notes Attached** column to view the Timesheet Notes portlet.
4. (Optional) Click the clock icon in the **Timesheet** column to open the timesheet. Click the note icon to view or add a timesheet note.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjTimesheetReview` |
| Category | Productivity |
| Data Provider | Investment Timesheet Review |
| Data Provider ID | `cop.prjTimesheetReview` |
| Data Provider Type | Query |

### Investment Timesheet Summary Portlet

Use this portlet to view pending and posted actuals by investment, with expandable details.

**Navigation:** Click **Home** and under **Resource Management**, **Timesheet Overview**.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.invTimesheetReview` |
| Category | Productivity |
| Data Provider | Investment Timesheet Summary |
| Data Provider ID | `cop.invTimesheetReview` |
| Data Provider Type | Query |

### Issue Management Portlet

Use this portlet to view a list of issues, including risk items, by project. Default columns display the priority, schedule impact, category, owner, and resolution date. You can click the envelope icon in the **Email** column to send mail to the owner of the issue. Click an issue to open it. You can filter the data by OBS or Project Manager.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **Risks, Issues, and Changes** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.issueManagement` |
| Category | Productivity |
| Data Provider | Issue Management |
| Data Provider ID | `cop.issueManagement` |
| Data Provider Type | Query |

### Issues by Priority Portlet

Use this portlet to view a pie chart that shows the relative quantity of issues by priority. Each color-coded slice represents a priority value and the size of each slice represents the number of issues for that priority. Click a pie slice to open the details of the issue on the Current Issues Drill Down page. This portlet does not have filters; however, issues with a status of Resolved or Closed are excluded.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Projects**.
2. Click a project.
3. Enable the page layout that displays this portlet if it does not appear:
   a. Click the **Properties** tab drop-down list, select **Main**, and under **Properties** select **Settings**.
   b. In the **Dashboard View** field, select **PMO-Project Storyboard**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.issuesByPriorityLinkable` |
| Category | Productivity |
| Data Provider | Issues By Priority |
| Data Provider ID | `cop.issuesByPriorityLinkable` |
| Data Provider Type | Query |

### Issues Listing Portlet

Use this portlet to view details about issues indicating whether the target resolution date of an issue is on track.

**Navigation:**
1. Navigate to the Issues by Priority Portlet.
2. Click a pie chart slice in the Issues by Priority portlet for a project.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjCurrentIssuesLinkable` |
| Category | Productivity |
| Data Provider | Issues Listing |
| Data Provider ID | `cop.prjCurrentIssuesLinkable` |
| Data Provider Type | Query |

### Labor Effort Portlet

Use this portlet to view the labor resource effort for a project. You can compare up-to-date actuals and estimates, and view overall baseline and allocation variances.

**Navigation:**
1. Click **Home** and under **Portfolio Management**, **Projects**.
2. On the Projects page, click a project. The Dashboard tab appears.
3. Enable the page layout for this portlet if it does not appear:
   a. Click the **Properties** tab drop-down list, select **Main**, and under **Properties** select **General**.
   b. In the **Page Layout** field, select **Project Default Layout**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `project.Effort` |
| Category | Project |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### Late Status Reports Portlet

Use this portlet to identify the projects that have late status reports, based on the **Days Since Report** date filter.

**Navigation:**
1. Click **Home**, and under **Dashboards**, click **Status Report Review**.
2. Click the **Late and Missing Status Reports** tab on the Status Report Review page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjStatusReportsLate` |
| Category | Productivity |
| Data Provider | Late Status Reports |
| Data Provider ID | `cop.prjStatusReportsLate` |
| Data Provider Type | Query |

### Late Tasks and Milestones Portlet

Use this portlet to view a list of late tasks and milestones including a Gantt chart for a project.

> [!NOTE]
> This portlet is available with the PMO add-in but is not included on any pages. Contact your administrator or use Studio to add this portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.lateTasksMilestonesLinkable` |
| Category | Productivity |
| Data Provider | Late Tasks and Milestones |
| Data Provider ID | `cop.lateTasksMilestoneLinkable` |
| Data Provider Type | Query |

### Locked Users (90 Days Inactivity) Portlet

Administrators can configure this portlet to appear on any application page of their choice.

**(On-Premise only)** To populate the portlet, run the `admin lockuser` command. This command locks any active user accounts without a successful system login during the last 90 days.

> [!NOTE]
> Access to this feature, without the admin command, is also available in FedRAMP configurations of Classic PPM SaaS. This feature is not available in standard Classic PPM SaaS environments.

**(SaaS only)** This feature is only available in FedRAMP configurations of Classic PPM SaaS, or in the on-premise edition of Classic PPM. This feature locks any active user accounts without a successful system login during the last 90 days. SaaS administrators in FedRAMP environments can configure the Locked Users portlet to appear on any application page of their choice.

The portlet shows the following information for user accounts without a successful login event and user session in the last 90 days:
- Resource (Last Name, First Name)
- User Name
- Email Address
- Last Logged in Date
- Last Updated Date

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `adminLockedUsersPortlet` |
| Category | Business Intelligence |
| Data Provider | Admin Locked Users |
| Data Provider ID | `adminLockedUsers` |
| Data Provider Type | Query |

### Milestones Portlet

Use this portlet to view a list of projects and milestones including their planned finish date, schedule percent complete, and cumulative days late. You can filter the data by OBS or Project Manager. You can also adjust the range of days (Days Outlook) from a starting point (As of Date).

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **PM Alerts** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prt.upcomingMilestones` |
| Category | Productivity |
| Data Provider | Milestones |
| Data Provider ID | `cop.qry.upcomingMilestones` |
| Data Provider Type | Query |

### Missing Status Reports Portlet

Use this portlet to view projects that do not have at least one status report completed.

**Navigation:**
1. Click **Home**, and from **Dashboards**, click **Status Report Review**.
2. Click the **Late and Missing Status Reports** tab on the Status Report Review page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjStatusReportsMissing` |
| Category | Productivity |
| Data Provider | Missing Status Reports |
| Data Provider ID | `cop.prjStatusReportsMissing` |
| Data Provider Type | Query |

### My Projects Portlet

Use this portlet to view a personal list of your favorite projects. You can view the status of the projects that you want to track. For example, you are managing the HR System Migration project. Add this project to the My Projects portlet to view the latest risk and business alignment status. Other capabilities of the My Projects portlet include:
- Create projects from a blank new page or use a template.
- Open a project in the Gantt view.
- Access and view any documents that are attached to a project.
- Collaborate on a project using documents, action items, or discussions.
- Open the properties or dashboard for a project.

By default, projects that are created from the portlet when you click **New** do not appear in this portlet. You can add projects to the My Projects portlet.

**Navigation:**
1. Click **Home**, and under **Portfolio Management**, click **Projects**.
2. Open a project.
3. Click the **Actions** menu and select **Add to My Projects**.
4. Click **Home**, and under **Personal**, select **General**.
5. (Optional) You can also click the **Home** icon in the upper right corner of the page unless you set another page as your Home page.
6. To remove projects from the My Projects portlet:
   a. Click the project name to open the project.
   b. Select **Remove from My Projects** from the **Actions** menu.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.homeHotList` |
| Category | Project |
| Data Provider | Project Object - Views |
| Data Provider ID | `project` |
| Data Provider Type | Object |

### My Reports Portlet

Use this portlet to store your favorite reports. You can also save your own personal parameters so that the report output aligns with your expectations.

**Navigation:** Select **Home**, **Personal**, **General**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `reporting.myReports` |
| Category | Personal |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | Not applicable |

### My Timesheets Portlet

Use this portlet to view your timesheets.

**Navigation:** Select **Home**, **Personal**, **General**.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.invMyTimesheets` |
| Category | Productivity |
| Data Provider | My Timesheets |
| Data Provider ID | `cop.invMyTimesheets` |
| Data Provider Type | Query |

### Notifications Portlet

Use this portlet to view a summary count of notifications that are sent to you by category. Categories include Action Items, Change Requests, Discussions, Escalations, Finance, Timesheets, and other functional areas. Click a category to view more details about the notifications. You can configure this portlet to receive notifications by application alerts, email, or SMS text messages.

**Navigation:** Click **Home**, **Personal**, **General**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `personal.notificationsNugget` |
| Category | Collaboration |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### OBS Investment Aggregation Portlet

This portlet helps you determine the aggregate demand for investments by OBS. The portlet calculates demand using the planned allocation for all resources that are booked to investments for the selected OBS units.

**Navigation:**
1. Click **Home**, **Resource Management**, **Resource Planning**.
2. On the Resource Planning page, click the **Organizational Demand** tab.
3. (Optional) Expand and save a default filter for a specific OBS.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.OBSInvestmentAggregation` |
| Category | Project |
| Data Provider | OBS Investment Aggregation |
| Data Provider ID | `obsInvAggregate` |
| Data Provider Type | System |

### OBS Resource Aggregation Portlet

Use this portlet to view the resource demand and capacity for all investments by OBS. Expand the OBS hierarchy and view resource allocation by OBS unit. Allocations for each resource appear in the following full-time equivalent (FTE) measurements:
- 1.00 FTE = Full-time allocation (100 percent)
- 1.50 FTE = Over allocation (150 percent)
- 0.50 FTE = Half-time allocation (50 percent)

**Navigation:**
1. Click **Home** and under **Resource Management**, **Resource Planning**.
2. On the Resource Planning page, click the **Organizational Demand** tab.
3. (Optional) Click the **Expand Filter** icon in the toolbar. Save a default filter for a specific OBS.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.OBSResourceAggregation` |
| Category | Resource |
| Data Provider | OBS Resource Aggregation |
| Data Provider ID | `obsResAggregate` |
| Data Provider Type | System |

### Pending Estimates Review Portlet

Use this portlet to view pending actuals, ETC values, and recommended changes by project, task, and resource.

**Navigation:** Click **Home**, **Resource Management**, **Timesheet Overview**.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjPendingEstimates` |
| Category | Productivity |
| Data Provider | Pending Estimates |
| Data Provider ID | `cop.prjPendingEstimates` |
| Data Provider Type | Query |

### Planned Cost by Goal Portlet

Use the pie chart in this portlet to view planned cost grouped by goal for investments in a portfolio.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Analysis** tab.
4. Personalize the Analysis tab to include the Planned Cost by Goal portlet.
5. Map the **Above Waterline** filter attribute to the Above Waterline mapping field on the Page Filters tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvPlannedCostByGoal` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Planned Benefit by Goal Portlet

Use the pie chart in this portlet to view the planned benefit of investments in a portfolio, grouped by goal. Each slice represents the portion of the planned benefit amount that is distributed by goal. Mouse over a pie slice to display the total planned benefit amount for a goal. The portlet filters include Investment Type, Above Waterline, Approved, and Active.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Analysis** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvPlannedBenefitByGoal` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Planned Cost by Project Type Portlet

Use this portlet to identify what types of projects the organization is currently funding. A pie chart shows the planned cost of each project type expressed as a percentage of overall spending.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. On the Overview page, click the **Sponsor** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectsByBudgetedCost` |
| Category | Productivity |
| Data Provider | Project |
| Data Provider ID | `project` |
| Data Provider Type | Object |

### Planned Cost by Waterline Portlet

Use the pie chart in this portlet to view the planned costs above and below the waterline for investments in a portfolio.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Analysis** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvPlannedCostByWaterline` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Portfolio Capital and Operating Cost Analysis Portlet

Use this portlet to view planned, target, and actual costs and variances for total, capital, and operating cost amounts for each portfolio. Filter by portfolio, OBS, portfolio plan type, manager, stakeholder, above waterline, or active setting.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Capital and Operating** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmCapitalOperatingCostAnalysis` |
| Category | Productivity |
| Data Provider | Portfolio Provider |
| Data Provider ID | `pfmPortfolioDP` |
| Data Provider Type | System |

### Portfolio Capital and Operating Costs Portlet

Use this portlet to view the planned total, capital, and operating cost of each portfolio in an area chart. Determine the portion of planned cost that represents capital expense (CAPEX) and operating expense (OPEX) for investments in the portfolio. Filter by portfolio, OBS, portfolio plan type, manager, stakeholder, above waterline, or active setting.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Capital and Operating** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmCapitalOperatingCosts` |
| Category | Productivity |
| Data Provider | Portfolio Provider |
| Data Provider ID | `pfmPortfolioDP` |
| Data Provider Type | System |

### Portfolio Cost and Benefit Analysis Portlet

Use this portlet to view the target, distributed, and planned cost and benefit amounts for each portfolio. Assess the overall health, risk, and cost variances of portfolios. Filter by portfolio, OBS, portfolio plan type, manager, stakeholder, above waterline, or active setting.

> [!NOTE]
> By default, the Portfolio Plan Type filter is Portfolio and the costs and variances are calculated as of the last sync. When you set the filter to Plan of Record, the amounts are based on the portfolio plan that is marked as the plan of record. You must have a plan of record on the portfolio for it to appear in the portlet.

**Navigation:** Click **Home**, **Portfolio Management**, click **Portfolio Dashboard**.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmCostBenefitAnalysis` |
| Category | Productivity |
| Data Provider | Portfolio Provider |
| Data Provider ID | `pfmPortfolioDP` |
| Data Provider Type | System |

### Portfolio Cost by Overall Health Portlet

Use this portlet to view the planned cost of the portfolio investments and to compare the overall health with the target total cost. Each bubble in the chart represents a portfolio and the size of the bubble represents the planned cost of the portfolio investments. Filter by portfolio, OBS, portfolio plan type, manager, stakeholder, above waterline, or active setting.

> [!NOTE]
> By default, the Portfolio Plan Type filter is Portfolio and the costs and variances are calculated as of the last sync. When you set the filter to Plan of Record, the amounts are based on the portfolio plan that is marked as the plan of record. You must have a plan of record on the portfolio for it to appear in the portlet.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Cost and Health** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmCostByOverallHealth` |
| Category | Productivity |
| Data Provider | Portfolio Provider |
| Data Provider ID | `pfmPortfolioDP` |
| Data Provider Type | System |

### Portfolio Costs Portlet

Use this portlet to compare the target, distributed, and planned cost for each portfolio in a bar chart. Filter by portfolio, OBS, portfolio plan type, manager, stakeholder, above waterline, or active setting.

> [!NOTE]
> By default, the Portfolio Plan Type filter is Portfolio and the costs and variances are calculated as of the last sync. When you set the filter to Plan of Record, the amounts are based on the portfolio plan that is marked as the plan of record. You must have a plan of record on the portfolio for it to appear in the portlet.

**Navigation:** Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmCosts` |
| Category | Productivity |
| Data Provider | Portfolio Provider |
| Data Provider ID | `pfmPortfolioDP` |
| Data Provider Type | System |

### Portfolio Investment Count by Approval Portlet

Use this portlet to view the number of approved and unapproved portfolio investments in a donut chart. Filter by portfolio, portfolio plan type, above waterline, or active setting.

**Navigation:**
1. Click **Home**, **Portfolio Management**, click **Portfolio Dashboard**.
2. Click the **Investment Analysis** tab on the Portfolio Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvestmentCountByApproval` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Portfolio Investment Count by Goal Portlet

Use this portlet to view the number of portfolio investments that are grouped by goal in a bar chart.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Goal Analysis** tab on the Portfolio Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvestmentCountByGoal` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Portfolio Investment Count by Type Portlet

Use this portlet to view the number of portfolio investments grouped by investment type in a donut chart. Filter by portfolio, portfolio plan type, above waterline, or active setting.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Investment Analysis** tab on the Portfolio Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvestmentCountByType` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Portfolio Investment Count by Waterline Portlet

Donut Chart: Portfolio Investment Count by Waterline.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Investment Analysis** tab on the Portfolio Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvestmentCountByWaterline` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Portfolio Investment Count by Work Status Portlet

Donut Chart: Portfolio Investment Count by Work Status.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Investment Analysis** tab on the Portfolio Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvestmentCountByWorkStatus` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Portfolio Planned Cost by Goal Portlet

Pie Chart: Portfolio Planned Cost by Goal displays planned cost grouped by goal for portfolio investments.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Goal Analysis** tab on the Portfolio Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmPlannedCostByGoal` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Portfolio Planned NPV by Goal Portlet

Use this portlet to view planned NPV grouped by goal for portfolio investments in a bar chart.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Goal Analysis** tab on the Portfolio Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmPlannedNPVByGoal` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Portfolio Role Analysis Portlet

Use this portlet to assess health, risk, and role variances for portfolios. Examine target, distributed, and demand amounts for roles in each portfolio. Filter by portfolio, OBS, portfolio plan type, capacity unit type, manager, stakeholder, above waterline, or active setting. The **Capacity Unit Type** filter allows you to display only portfolios set to hours or FTE on the portfolio properties page.

> [!NOTE]
> By default, the Portfolio Plan Type filter is Portfolio and the costs and variances are calculated as of the last sync. When you set the filter to Plan of Record, the amounts are based on the portfolio plan that is marked as the plan of record. You must have a plan of record on the portfolio for it to appear in the portlet.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Roles** tab on the Portfolio Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmRoleAnalysis` |
| Category | Productivity |
| Data Provider | Portfolio Provider |
| Data Provider ID | `pfmPortfolioDP` |
| Data Provider Type | System |

### Portfolio Role Demand by Goal Portlet

The Portfolio Role Demand by Goal portlet displays a pie graph showing role demand, grouped by goal, for portfolio investments across portfolios. Filter by portfolio, portfolio plan type, capacity unit type, above waterline, or active setting.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. Click the **Goals Analysis** tab on the Portfolio Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmRoleDemandByGoal` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Portfolio Roles Portlet

Use the column chart in this portlet to view the roles for a portfolio.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolio Dashboard**.
2. On the Portfolio Dashboard page, click the **Roles** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmRoles` |
| Category | Productivity |
| Data Provider | Portfolio Provider |
| Data Provider ID | `pfmPortfolioDP` |
| Data Provider Type | System |

### Posted Transaction Review Portlet

Use this portlet to view financial transactions including quantity, cost, and currency information across investments by transaction date. You can compare transaction currency amounts to converted currency amounts by task and by resource.

**Navigation:** Click **Home**, **Financial Management**, **Posted Transaction Review**.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.finTransactionReview` |
| Category | Productivity |
| Data Provider | Transaction Review |
| Data Provider ID | `cop.finTransactionReview` |
| Data Provider Type | Query |

### Posted Transaction Review Investment Level Portlet

The Posted Transactions Review portlet at the investment level displays financial transactions for an investment by transaction date and includes quantity, cost, and currency information. Use this portlet to compare transaction currency amounts to converted currency amounts by task and resource.

> [!WARNING]
> This portlet references financial transaction data and may result in many rows of data being displayed in the portlet if filters are not applied. You should implement required filters in this portlet so that only reasonable amounts of transactional data are displayed. If you do not do this, then you may experience performance issues.

**Navigation:**
1. Open an investment and click **Financial Plans**.
2. Click a cost plan name.
3. In the **Actions** menu, click **Posted Transaction Review**.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.invTransactionReview` |
| Category | Productivity |
| Data Provider | Transaction Review |
| Data Provider ID | `cop.finTransactionReview` |
| Data Provider Type | Query |

### Process Bottlenecks Portlet

This portlet displays initiated processes and indicates how long an assigned resource took to respond to each milestone.

> [!NOTE]
> This portlet is available with the PMO add-in but is not included on any pages. Ask your administrator or use Studio to add this portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.processBottlenecks` |
| Category | Productivity |
| Data Provider | Process Bottlenecks |
| Data Provider ID | `cop.processBottlenecks` |
| Data Provider Type | Query |

### Program Manager Cost Dashboard Portlet

Use this portlet to view the cost, progress, and performance of projects in a specific program.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. On the Overview page, click the **Program Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.programManagerCostDashboard` |
| Category | Productivity |
| Data Provider | Program Manager Cost Dashboard |
| Data Provider ID | `cop.programCostDashboard` |
| Data Provider Type | Query |

### Program Manager Schedule Dashboard Portlet

Use this portlet to view the progress of programs and projects belonging to a program. Default columns display the overall status, schedule completion as a percentage, days late, and a summary Gantt schedule.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. On the Overview page, click the **Program Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.programManagerScheduleDashboard` |
| Category | Productivity |
| Data Provider | Program Manager Schedule Dashboard |
| Data Provider ID | `cop.programScheduleDashboard` |
| Data Provider Type | Query |

### Project Analysis Portlet

As a program manager, use this portlet to view the projects and tasks that are part of a program. The portlet displays data representing the different projects and change orders currently in progress. Anything that is canceled or completed is not used in the portlet. As a service owner, use this portlet to manage the planned modifications for your services.

> [!NOTE]
> This portlet is available with the PMO add-in but is not included on any page. Contact your administrator or use Studio to add this portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectAnalysis` |
| Category | Productivity |
| Data Provider | Project Analysis |
| Data Provider ID | `cop.projectAnalysis` |
| Data Provider Type | Query |

### Project Baselines Portlet

Line Chart: Project Baselines displays baseline activity against the usage or hours worked on the project.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Projects**.
2. Click a project on the Projects page. The project Dashboard tab appears.
3. Enable the page layout for this portlet if it does not appear:
   a. Click the **Properties** tab drop-down menu, select **Main**, and under **Properties** select **General**.
   b. In the **Page Layout** field, select **Project Default Layout** or **PMO-Project Status**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.dashboardProjectBaselines` |
| Category | Productivity |
| Data Provider | Project Baselines |
| Data Provider ID | `cop.dashboardProjectBaselines` |
| Data Provider Type | Query |

### Project Costs By Phase Portlet

Use this portlet to view cost performance amounts and variances by phase. You can identify the phases of the project plan that exceed baseline costs.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **Program Dashboard** tab on the Overview page.
3. Expand a cost line item in the Program Manager Cost Dashboard Portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectCostsByPhaseLinkable` |
| Category | Productivity |
| Data Provider | Project Costs By Phase |
| Data Provider ID | `cop.projectCostsPhaseLinkable` |
| Data Provider Type | Query |

### Project Costs By Resource Portlet

Use this portlet to view cost performance amounts and variances by resource.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. On the Overview page, click the **Program Dashboard** tab.
3. Expand a cost line item in the Program Manager Cost Dashboard Portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectCostsByResourceLinkable` |
| Category | Productivity |
| Data Provider | Project Costs By Resource |
| Data Provider ID | `cop.projectCostsResLinkable` |
| Data Provider Type | Query |

### Project Costs by Task Portlet

Use this portlet to view cost performance amounts and variances by task. You can identify tasks in the project plan that exceed baseline costs.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. On the Overview page, click the **Program Dashboard** tab.
3. Expand a cost line item in the Program Manager Cost Dashboard Portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectCostsByTaskLinkable` |
| Category | Productivity |
| Data Provider | Project Costs by Task |
| Data Provider ID | `cop.projectCostsTaskLinkable` |
| Data Provider Type | Query |

### Project Cycle Time Analysis Portlet

Use the bar chart in this portlet to view project duration by phase for projects using the same methodology.

> [!NOTE]
> This portlet is available with the PMO add-in but is not included on any page. Contact your administrator or use Studio to add this portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectCycleTimeAnalysis` |
| Category | Productivity |
| Data Provider | Project Cycle Time Analysis |
| Data Provider ID | `cop.projectCycleTimeAnalysis` |
| Data Provider Type | Query |

### Project Document Review Portlet

Use this portlet to view project documents, including links to the documents and folder locations.

> [!NOTE]
> This portlet is available with the PMO add-in but is not included on any page. Contact your administrator or use Studio to add this portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjDocumentReview` |
| Category | Productivity |
| Data Provider | Project Document Review |
| Data Provider ID | `cop.prjDocumentReview` |
| Data Provider Type | Query |

### Project Indicators Portlet

Use this portlet to view project key performance indicators such as Schedule, Risks, Issues, and Cost Variance.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Projects**.
2. On the Projects page, click a project. The project Dashboard tab appears.
3. Enable the page layout for this portlet if it does not appear:
   a. Click the **Properties** tab drop-down menu, select **Main**, and under **Properties** select **General**.
   b. In the **Page Layout** field, select **PMO-Project Status**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.dashboardProjectAlerts` |
| Category | Productivity |
| Data Provider | Project Indicators |
| Data Provider ID | `cop.dashboardProjectAlerts` |
| Data Provider Type | Query |

### Project KPIs by OBS Portlet

Use this portlet to display key performance indicators for projects organized by OBS. You can configure the metrics to display. For example, choose Days Late or Projected Cost Variance %.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **Sponsor** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectKPIHierarchy` |
| Category | Productivity |
| Data Provider | Project KPIs By OBS |
| Data Provider ID | `cop.projectKPIHierarchy` |
| Data Provider Type | Query |

### Project Lifecycle Review Portlet

Use this portlet to view the overall status of project phases.

> [!NOTE]
> This portlet is available with the PMO add-in but is not included on any pages. Contact your administrator or use Studio to add this portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectLifeCycleReview` |
| Category | Productivity |
| Data Provider | Project Life Cycle Review |
| Data Provider ID | `cop.projectLifeCycleReview` |
| Data Provider Type | Query |

### Project Manager Cost and Effort Dashboard Portlet

Use this portlet to view project cost and effort performance amounts and variances.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **Project Dashboard** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectManagerCostDashboard` |
| Category | Productivity |
| Data Provider | Project Manager Schedule Dashboard |
| Data Provider ID | `cop.projectScheduleDashboard` |
| Data Provider Type | Query |

### Project Manager Schedule Dashboard Portlet

Use this portlet to view projects at a high level with the option of expanding the WBS hierarchy to examine tasks and resource assignments. Default fields include start and finish dates, schedule percent complete, days late, and a Gantt schedule. You can filter by OBS or Project Manager.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **Project Dashboard** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjScheduleDashboard` |
| Category | Productivity |
| Data Provider | Project Manager Schedule Dashboard |
| Data Provider ID | `cop.projectScheduleDashboard` |
| Data Provider Type | Query |

### Project Schedule Portlet

Use this portlet to view a list of projects and a summary Gantt chart. By default, the portlet displays the project type, current risk level, and planned cost.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **Sponsor** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.projectsView` |
| Category | Productivity |
| Data Provider | Project |
| Data Provider ID | `project` |
| Data Provider Type | Object |

### Resource Utilization Portlet

Use the area chart in this portlet to compare allocations with assignments by month.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Programs**.
2. Select a program. The program Dashboard tab appears.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.invResourceUtilization` |
| Category | Productivity |
| Data Provider | Investment Resource Utilization |
| Data Provider ID | `cop.invResourceUtilization` |
| Data Provider Type | Query |

### Resource Utilization Percentage by Month Portlet

Use the column chart in this portlet to view resource assignments as a percentage of allocations by month.

> [!NOTE]
> This portlet is available with the PMO add-in but is not included on any pages. Contact your administrator or use Studio to add this portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.invResourceUtilizationPercentage` |
| Category | Productivity |
| Data Provider | Investment Resource Utilization |
| Data Provider ID | `cop.invResourceUtilization` |
| Data Provider Type | Query |

### Resource Workloads Portlet

Use this portlet to view the combined allocations across all the investments for the assigned resource by week. Compare the availability with the number of hours that are allocated for a resource by investment.
- Yellow indicates that a resource is allocated at or under availability for the time period.
- Red indicates that a resource is over-allocated (the amount of time booked exceeds resource availability).

**Navigation:**
1. Click **Home**, **Resource Management**, **Resource Planning**.
2. Click the **Workloads** tab on the Resource Planning page.
3. (Optional) Use the **Time-Scaled Value** option to change the time period to bi-weekly, monthly, or quarterly.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.resourceWorkloads` |
| Category | Resource |
| Data Provider | Resources with Aggregation |
| Data Provider ID | `resourceAggregate` |
| Data Provider Type | System |

### Rights by License Type Portlet

As an administrator, use this portlet to view the descriptions and license types for each access right. For example, the Resource - Create right belongs to the Manager license. The Resource - Enter Time access right belongs to the Team Member license.

**Navigation:** Open **Administration** and under **Organization and Access**, **License Information**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `rightsbylicensetype` |
| Category | Business Intelligence |
| Data Provider | Rights by License Type |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### Risk Management Portlet

Risk Management displays a list of risks associated to projects.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **Risks, Issues, and Changes** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.riskManagement` |
| Category | Productivity |
| Data Provider | Risk Management |
| Data Provider ID | `cop.riskManagement` |
| Data Provider Type | Query |

### Role Capacity Portlet

Use this portlet to view the overall demand against resource capacity across all investments organized by role and month. Use the role capacity capabilities to view the ability of your organization to take on additional work. Compare total demand and total capacity for each role. You can also consider resources that you plan to hire.

**Navigation:**
1. Click **Home**, **Resource Management**, **Resource Planning**.
2. Click the **Capacity** tab.
3. Click the **Expand Filter** icon in the toolbar and select your options. For example, select a value in the **Include To-be-hired Resources** field.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.roleCapacity` |
| Category | Resource |
| Data Provider | Roles with Resource Aggregation |
| Data Provider ID | `roleAggregate` |
| Data Provider Type | System |

### Role Capacity and Demand Portlet

Use this portlet to view the distributed target capacity and role demand by month for investments in a portfolio.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Capacity** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvRoleCapacityDemand` |
| Category | Productivity |
| Data Provider | Portfolio Role Capacity and Demand |
| Data Provider ID | `pfm_rolecap_demand` |
| Data Provider Type | System |

### Role Capacity and Demand Histogram Portlet

Use this portlet to view a histogram of distributed target capacity and role demand by month, and in total, for investments in a portfolio. You can view portfolio roles from the Targets tab and unplanned Other Roles which are allocated to portfolio investments but not included in targets.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolios**.
2. Click a portfolio.
3. Click the **Capacity** tab.
4. Personalize the Capacity tab to include the Role Capacity and Demand Histogram portlet.
5. Map the **Above Waterline** filter attribute to the Above Waterline mapping field on the Page Filters tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvRoleCapacityDemandHistogram` |
| Category | Productivity |
| Data Provider | Portfolio Role Capacity and Demand |
| Data Provider ID | `pfm_rolecap_demand` |
| Data Provider Type | System |

### Role Capacity Histogram Portlet

Use this portlet to view the overall demand against capacity for roles across all investments. The information is aggregated by role and is organized for each month and grouped by quarter. Compare total demand and total capacity for each role with data stacked vertically in each monthly column. Yellow indicates demand and red indicates where demand exceeds role capacity.

**Navigation:**
1. Click **Home**, **Resource Management**, **Resource Planning**.
2. On the Resource Planning page, click the **Capacity** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.roleCapacityHistogram` |
| Category | Resource |
| Data Provider | Roles with Resource Aggregation |
| Data Provider ID | `roleAggregate` |
| Data Provider Type | System |

### Role Demand by Goal Portlet

Use the pie chart in this portlet to view role demand grouped by goal for investments in a portfolio. Each slice represents the proportional role demand by goal. To view the total role demand amount, position your mouse over a slice.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolios**.
2. Click a portfolio on the Portfolios page.
3. Click the **Analysis** tab on the Portfolio page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvRoleDemandByGoal` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Role Demand by Waterline Portlet

Use the pie chart in this portlet to view role demand grouped by waterline for investments in a portfolio.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Portfolios**.
2. Click a portfolio on the Portfolios page.
3. Click the **Analysis** tab on the Portfolio page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.pfmInvRoleDemandByWaterline` |
| Category | Productivity |
| Data Provider | Portfolio Investment Provider |
| Data Provider ID | `pfm_investment` |
| Data Provider Type | System |

### Schedule and Progress Portlet

Use the bubble chart in this portlet to view the score of each project in terms of its scheduled variance and current finish date. Each bubble on the graph represents a project associated with the selected program. Rolling your cursor over a bubble in the graph displays project details such as the name, finish date, schedule %, and planned cost. Changing a project planned cost changes its bubble size. Clicking a bubble opens the project dashboard.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Programs**.
2. Select a program. The program Dashboard tab appears.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prt.prjReview` |
| Category | Productivity |
| Data Provider | Schedule and Progress |
| Data Provider ID | `cop.qry.prjReview` |
| Data Provider Type | Query |

### Schedule Performance Portlet

Use this portlet to view the number of tasks categorized as critical late, past due, scheduled late, or on schedule. You can filter the data by OBS or Project Manager and adjust the range of days (Days Outlook) from a starting point (As of Date). The Schedule Performance portlet displays the number of late tasks categorized as critical late, past due, or scheduled late within the next 45 days (default) or number of days entered in the Days Outlook filter. Portlet filters include: OBS, Manager, As of Date, and Days Outlook.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **PM Alerts** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prt.schedulePerformance` |
| Category | Productivity |
| Data Provider | Schedule Performance |
| Data Provider ID | `cop.qry.schedulePerformance` |
| Data Provider Type | Query |

### Schedule Performance Details Portlet

Use this portlet to view a list of the critical late, past due, or scheduled late tasks within the next 45 days by default. You can adjust the number of days in the Days Outlook filter. Filter by project, task, Finish Date, As of Date, and Days Outlook. You can also click projects or tasks in the portlet to open them.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **PM Alerts** tab on the Overview page.
3. Click a column in the Schedule Performance portlet. The Schedule Performance Drill Down page appears.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.schedulePerformanceLinkable` |
| Category | Productivity |
| Data Provider | Schedule Performance Details |
| Data Provider ID | `cop.scheduleLinkable` |
| Data Provider Type | Query |

### Site Links Portlet

Use this portlet to access the predefined links recognized by your project team. As an administrator, use this portlet to store one or more links that appear for all users. The links can be to external web sites, to intranet sites, or to other application pages.

**Navigation:**
1. As a user, to view the links in this portlet, click **Home**, **Personal**, **General**.
2. As an administrator, to add or remove these global links, open **Administration** and select **Site Links** under **General Settings**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `personal.siteLinks` |
| Category | Collaboration |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | Not applicable |

### Staffing Portlet

Use this portlet to view the number of unstaffed ETC hours by project. The hours represent tasks with a known role but no assigned resource. You can filter the data by OBS or Project Manager and adjust the range of days (Days Outlook) from a starting point (As Of Date).

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **PM Alerts** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prt.staffing` |
| Category | Productivity |
| Data Provider | Staffing |
| Data Provider ID | `cop.qry.staffing` |
| Data Provider Type | Query |

### Staffing Details Portlet

Use this portlet to view a list of unstaffed project roles for a selected project in the days outlook range.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. Click the **PM Alerts** tab on the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.staffingLinkable` |
| Category | Productivity |
| Data Provider | Staffing Details |
| Data Provider ID | `cop.staffingLinkable` |
| Data Provider Type | Query |

### Status Report Indicators Portlet

Use this portlet to view the most recent status report values for a project.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Projects**.
2. Click a project. The project Dashboard tab appears.
3. Enable the page layout that displays this portlet if it does not appear:
   a. Click the **Properties** tab menu, select **Main**, and under **Properties** select **General**.
   b. In the **Page Layout** field, select **PMO-Project Status**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prt.prjStatusReport` |
| Category | Productivity |
| Data Provider | Status Report Indicators |
| Data Provider ID | `cop.qry.prjStatusReport` |
| Data Provider Type | Query |

### Status Report Listing Portlet

Use this portlet to view the status of projects indicated by a series of color-coded icons and the Status Report Update text from status reports. By default, the portlet displays the manager, report date, status, and updated text. Click the updated text to view the full status report. The icons include schedule, scope, cost and effort, and overall status. You can filter by OBS or Project Manager.

**Navigation:**
1. Click **Home**, and under **Dashboards**, click **Status Report Review**.
2. Click the **Status Report Listing** tab on the Status Report Review page.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prjStatusReportListing` |
| Category | Productivity |
| Data Provider | Status Report Listing |
| Data Provider ID | `cop.prjStatusReportListing` |
| Data Provider Type | Query |

### Subprojects Portlet

Use this portlet to view a list of the subprojects for a project. The portlet includes the stoplights for subproject status and schedule.

> [!NOTE]
> This portlet is not placed anywhere as part of the standard product. It can be added to a Project Dashboard page.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `project.Subprojects` |
| Category | Project |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### Team Capacity Portlet

Use this area chart portlet to compare the team allocation capacity and the assignment demand on a project.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Projects**.
2. Click a project. The Dashboard tab appears.
3. Enable the page layout that displays this portlet if it does not appear:
   a. Click the **Properties** tab menu, select **Main**, and under **Properties** select **General**.
   b. In the **Page Layout** field, select **PMO-Project Storyboard**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.teamCapacityLinkable` |
| Category | Productivity |
| Data Provider | Team Capacity |
| Data Provider ID | `cop.teamCapacityLinkable` |
| Data Provider Type | Query |

### Team Member Task Summary Portlet

Use this portlet to view resource assignments, ETC, pending actuals, and actuals for project tasks.

> [!NOTE]
> This portlet is available with the PMO add-in but is not included on any pages. As a developer with administrative rights, use Studio to add this portlet.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.teamMemberOrganizer` |
| Category | Productivity |
| Data Provider | Team Member Organizer |
| Data Provider ID | `cop.teamMemberOrganizer` |
| Data Provider Type | Query |

### Team Utilization Portlet

Displays the team-based utilization for the current project. Provides a detailed picture of total usage and allocation.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Projects**.
2. On the Projects page, click a project. The project Dashboard tab appears.
3. Enable the page layout that displays this portlet if it does not appear:
   a. Click the **Properties** tab drop-down menu, select **Main**, and under **Properties** select **General**.
   b. In the **Page Layout** field, select **Project Default Layout** or **PMO-Project Status**.
   c. Click **Save**.
   d. Click the **Dashboard** tab.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.teamUtilization` |
| Category | Project |
| Data Provider | Team Allocations |
| Data Provider ID | `teams` |
| Data Provider Type | System |

### Timesheet Notes Portlet

This portlet provides a list of notes that team members attached to their timesheet entries.

**Navigation:**
1. Click **Home**, **Resource Management**, **Timesheet Overview**.
2. Click the arrow icon in the **Timesheet Details** column of the Investment Timesheet Summary portlet. The Investment Timesheet Review portlet appears on the Timesheet Details page.
3. Click the checkmark in the **Notes Attached** column in a row that represents a timesheet with optional notes.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.invTimesheetNotesLinkable` |
| Category | Productivity |
| Data Provider | Timesheet Notes |
| Data Provider ID | `cop.invTimesheetNotesLinkable` |
| Data Provider Type | Query |

### Timesheet Review Investment Level Portlet

Timesheet Review displays pending and posted actuals for a single project by task, resource, and time period with a notes drill down.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Projects**.
2. Click a project on the Projects page.
3. Click the **Team** tab on the Project page.
4. Click the **Actions** menu and under **Views** select **Timesheet Review**.
5. (Optional) Click the check mark icon in the **Notes Attached** column to view the Timesheet Notes portlet.
6. (Optional) Click the clock icon in the **Timesheet** column to open the timesheet. Click the note icon to view or add a timesheet note.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.invTimeReview` |
| Category | Productivity |
| Data Provider | Timesheet Review |
| Data Provider ID | `cop.invTimeReview` |
| Data Provider Type | Query |

### Timesheets to Approve Portlet

As a resource manager, use this portlet to view the timesheets that are awaiting your approval.

**Navigation:**
1. Click **Home**, **Personal**, **General**.
2. (Optional) Click the **More** link to filter your view of the Timesheets page.

> [!NOTE]
> This portlet is not placed anywhere as part of the standard product. You can add it to any page; for example, the Overview page.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.timesheetAdmin` |
| Category | Resource |
| Data Provider | Not applicable |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### Top Down Planning by Investment Portlet

Use this portlet to view resource allocation and capacity by investment for the time periods that you specify. This portlet lists the resources and roles for each investment and shows the allocation by month for each resource. You can edit the resources and allocations for each investment.

**Navigation:**
1. Click **Home**, **Resource Management**, **Resource Planning**.
2. Click the **Top Down Planning** tab on the Resource Planning page.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.topDownPlanning` |
| Category | Resource |
| Data Provider | Team Allocations |
| Data Provider ID | `teams` |
| Data Provider Type | System |

### Unfilled Requirements Portlet

Use this portlet to examine the unfilled allocations for a set of investments listed by requirement and role. The portlet displays roles that are booked to investments. The roles represent demand in the organization. Typically, named resources replace roles as part of staffing activities.

**Navigation:**
1. Click **Home**, **Resource Management**, **Resource Planning**.
2. Click the **Unfilled Allocations** tab on the Resource Planning page.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.unfilledAllocations` |
| Category | Resource |
| Data Provider | Team Allocations |
| Data Provider ID | `teams` |
| Data Provider Type | System |

### Upcoming Milestones Portlet

Use this portlet to view milestones, schedule indicators, and a Gantt chart for a project.

**Navigation:**
1. Click **Home**, **Portfolio Management**, **Projects**.
2. Select a project. The project Dashboard tab appears.

| Property | Value |
|----------|-------|
| Standard or Add-in | PMO |
| Portlet ID | `cop.prt.prjMilestones` |
| Category | Productivity |
| Data Provider | Upcoming Project Milestones |
| Data Provider ID | `cop.qry.prjMilestones` |
| Data Provider Type | Query |

### User Count by License Type Portlet

Use this portlet to view the total number of users for each type of license.

**Navigation:** Open **Administration**, **Organization and Access**, **License Information**.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `usercountbylicensetype` |
| Category | Business Intelligence |
| Data Provider | User Count by License Type |
| Data Provider ID | Not applicable |
| Data Provider Type | System |

### Weekly Detail Portlet

Use this portlet to view allocated hours by week for each resource. As a resource manager, use this information to assign work to individual resources and confirm that they are allocated appropriately.

> [!NOTE]
> Portlet data only appears after you allocate resources to projects.

**Navigation:**
1. Click **Home**, **Resource Management**, **Resource Planning**.
2. Click the **Allocations** tab on the Resource Planning page.
3. Examine the Weekly Detail histogram colors to identify allocations:
- Yellow indicates that the resource is allocated at or under availability for that time period.
- Red indicates that the resource is over-allocated for that time period.
- Green indicates actuals recorded by the resource for that time period. Only posted actuals appear in the chart. If no actuals have been posted, no actuals appear in the chart.
4. To view a note summarizing the allocation and availability of a resource for that period, scroll over the histogram for each week. Use the note to compare the availability of a resource with actual allocation for that period.
5. When a resource is overbooked, edit allocations to reduce the amount of time the resource is scheduled to work on an investment.

| Property | Value |
|----------|-------|
| Standard or Add-in | Standard |
| Portlet ID | `projmgr.weeklyDetail` |
| Category | Resource |
| Data Provider | Team Allocations |
| Data Provider ID | `teams` |
| Data Provider Type | System |

---

## Clarity Authentication Methods

> [!IMPORTANT]
> Broadcom will migrate its Federated SSO support for all of its SaaS offerings from Okta to the Broadcom VIP AuthHub (VIP) service. The SaaS team will migrate customers' current Okta configuration to VIP to minimize the impact, but customers will need to make adjustments to their IDP setup to complete the migration. To learn more, see Migrating to the VIP Auth Hub.

This document describes authentication methods (SSO, LDAP, SAML) available for the on-premise and SaaS editions of Classic PPM. Learn how SSO compares with other authentication methods.

Use this guide to decide the right authentication method for your organization. In general, we recommend centralized authorization and password management using single sign-on (SSO). However, your organization can prepare its own assessment to determine readiness.

Classic PPM offers an internal password security policy feature. You can also upgrade to a single sign-on (SSO) model. SSO reduces IT costs because fewer credentials to manage means fewer calls to the help desk for lockouts and resets. SSO is also more secure because it centralizes authorization policies. Finally, because users only need to remember one strong password, they no longer write them down, a common security risk.

This document answers the following questions:
- Which authentication methods enable SSO?
- Are third-party SSO solutions required?
- Which SSO options are supported?
- Will Classic PPM support federated SSO? If so, what type?

**On-Premise SSO Options:** Clarity 15.8.1 and higher releases allow on-premise customers to use the credentials issued by an IDP - that supports SAML 2.0 - and log into Clarity. Review On-Premise SAML Configuration for more information.

**On-Demand (SaaS) SSO Options:** Classic PPM includes two options:
- The Standard Clarity login page.
- Federated SAML SSO to provide a trusted integration between your enterprise directory and the Broadcom network.

> [!TIP]
> We highly recommend the following best practice for new and existing customers in on-premise or SaaS environments. Configure the **Username** field as seen on the Resources page under the Administration menu as the email address for each user. This important step is required for true single sign-on (SSO). This step resolves conflicts with duplicate domain accounts. The email format is the only supported username format for SSO in the CA SaaS environment. Licensed users can conveniently access Classic PPM SaaS and additional CA SaaS products with their single secure SSO credentials.

### Authentication Options Table

| Authentication Model | Environment | Advantages | Disadvantages |
|---------------------|-------------|------------|---------------|
| **Standard Authentication** | OP or SaaS | Simple configuration inside your Classic PPM product. No integration setup required. Fully supported by Broadcom. | Single sign-on is not enabled. Must use Clarity Login page. Multiple passwords to manage; may not follow company policies. |
| **LDAP Authentication** | OP | Configuration inside your Clarity product with CSA. Single enterprise passwords. Mixed-mode support for LDAP or internal authentication by user. | Single sign-on is not enabled. Must use Classic PPM Login page. Some limitations with multiple directories, forests, or domains. Not available for Clarity SaaS customers. |
| **SSO - On-Premise with CA Single Sign-On** | OP | Fully tested and supported by CA. Single enterprise passwords. Optional use of enterprise portal. Access to XOG and OWB/MSP through SSO nodes is supported. No custom code development work is required. | Customers must implement CA Single Sign-On (not provided with Clarity). Moderate solution complexity. |
| **SSO - Clarity SaaS using Federated Identities (SAML 2.0)** | SaaS | This is the only supported SSO method for SaaS customers. Fully supported and tested by Broadcom. Single enterprise passwords. Optional enterprise portal and management. Supports SAML 2.0. | Customers must support their side of the federated identity including SAML. Only SAML 2.0 is supported (OAuth, OpenID, and any other access tokens are not supported). |
| **SSO with a third-party solution that supports SAML 2.0** (Review On-Premise SAML Configuration for more information.) | OP | Seamless integration between networks and environments: All users can move easily between your organization's intranet and Clarity. Simplified password management: No need to manage user passwords separately from Clarity, because your existing user management system handles password management. | Usernames need to match for Clarity and IDP. |

### Authentication Methods

1. **Standard Authentication: Login Page with Authentication (OP/SaaS)**
   Presents an out-of-the-box login page to users. When a user logs out of Clarity they are sent back to the Clarity Login page. All the users' passwords are encrypted and stored in the Clarity database. Password management settings like password expiration, history, and other rules are configured in Clarity under Administration & General Setting. This is the default authentication method for Clarity.

2. **LDAP Authentication: Login Page with LDAP Directory Service (OP Only)**
   Clarity presents the out-of-the-box login page to users, however Clarity will query the customers LDAP v3 compliant directory servers to authenticate Clarity users. The LDAP compliant directory could be one of the following supported systems: CA Directory, Microsoft Active Directory, Novell eDirectory, Oracle Directory Server, Sun One Directory. The passwords stored in the Clarity database are not used in this configuration. The LDAP passwords are never stored in the Clarity Database. SSL enabled LDAP or LDAPS is supported. The Clarity configuration for LDAP is contained in the CSA.

   > [!NOTE]
   > This configuration is not SSO enabled, however, centralized password management is obtained.

   LDAP authentication is compatible with standard internal authentication in mix mode (i.e., when `Allow non-LDAP users` is enabled in CSA). This will allow users which are set as "externally authenticated" to authenticate against LDAP and other users to use standard internal authentication.

> [!INFO]
> Figure 3: View of Clarity CSA setting for LDAP configuration.

3. **SSO - On-Premise with CA Single Sign-On (formally CA Site Minder)**
   On-Premise customers may leverage Clarity in conjunction with CA Single Sign-On. Organizations may configure this solution with or without their own corporate login & logout portal page. The organization's CA Single Sign-On implementation will handle user authentication; Clarity will not challenge users for authentication in this mode. This is the only supported and tested SSO solution for on-premise Clarity. This configuration relies on an SSO WEB agent installed on Apache or Microsoft IIS HTTP proxy server. Note this configuration does not leverage SAML as the Clarity application is on-premise or contained within the organization's own network.

4. **SSO - SaaS - using Federated Identities (SAML 2.0)**
   Federated SSO integration creates a trusted relationship between Clarity SaaS and your organization's identity management solution. This relationship delivers the following benefits:
- Seamless integration between networks and environments: All users can move easily between your organization's intranet and Clarity SaaS.
- Simplified password management: No need to manage user passwords separately from Clarity SaaS, because your existing user management system handles password management.
- Broadcom Supported: A dedicated Broadcom support organization is available to provide technical support as needed.

   Customers can be assured the Identity management tool will authenticate users for access to Clarity only after being authorized by the IdP solution. To provide this functionality, Clarity SaaS supports federated single sign-on using SAML 2.0. This integration creates a trusted relationship between Broadcom's SaaS infrastructure and your organization's existing enterprise user management system, simplifying end-user password management.

   Review Clarity SaaS Authentication in the Google Cloud Platform for more information.

5. **SSO with a Third-Party Solution (OP Only)**
   Clarity 15.8.1 and higher releases allow on-premise customers to use the credentials issued by an IDP - that supports SAML 2.0 - and log into Clarity.

   Some key advantages of using SAML-based SSO login are:
- Seamless integration between networks and environments: All users can move easily between your organization's intranet and Clarity.
- Simplified password management: No need to manage user passwords separately from Clarity, because your existing user management system handles password management.

   Clarity supports SAML by using a virtual object and REST APIs that allow SAML metadata to be uploaded as a file into Clarity. After the file is successfully uploaded, a REST API call to that same virtual object will provide the SAML metadata from Clarity that can be used by the IDP to complete its connection to Clarity. Clarity also has additional REST API endpoints that allow you to modify and examine the metadata configured in Clarity.

   You need to perform two key actions to enable Clarity to Support SAML 2.0:
   1. Import the SAML Metadata for your IDP by using REST APIs.
   2. Configure Clarity to enable SAML authentication.

   Review On-Premise SAML Configuration for more information.

> [!NOTE]
> More Information: (On-Premise Only)
> - On-Premise SAML Configuration
> - CSA: Security, Passwords, LDAP, SSL, SSO, XSS, and FIPS
> - CA Single Sign-On Documentation

> [!NOTE]
> More Information: (SaaS Only)
> - Clarity SaaS Authentication in GCP
> - CA Single Sign-On Documentation

---

## Clarity SaaS Authentication in the Google Cloud Platform
- Syncing Users Between Clarity and Okta
- Revoking User Access to Clarity
- Accessing Clarity via XOG
- Common Questions

### Broadcom's Okta User Groups

Broadcom will create user groups in Okta, which map to a provisioned Clarity environment. A single user can be part of multiple user groups, allowing them to access multiple Clarity SaaS environments.

The Broadcom Okta user groups have the following nomenclature:

`ClarityPPM.tenant_name.tenant_domain.Clarity_instance_type`

**Example:** Consider a tenant named MyBank provisioned on the Clarity GCP infrastructure. MyBank needs DEV and PROD Clarity instances. The provisioning process assigned MyBank the tenant domain "cppm4758". In this example, the provisioning process will create two user groups for MyBank:
- `ClarityPPM.MyBank.cppm4758.dev`
- `ClarityPPM.MyBank.cppm4758.prod`

These user groups correspond to the two Clarity environments provisioned for MyBank. Clarity administrators define users in each Clarity environment. Users defined in the non-production environment will be added to the `ClarityPPM.MyBank.cppm4758.dev` group and users defined in the production environment will be added to the `ClarityPPM.MyBank.cppm4758.prod` group.

### User Management

In order for a user to access Clarity in SaaS, their information needs to exist in multiple systems. Review the process defined below to learn more about creating users in the appropriate systems:

1. **User Creation in IdP:** In a system authenticated by a single user management system, the user needs to be created in your IdP. This system will be used to authenticate a user before allowing the user to access the Clarity application in SaaS. User creation in this system is done by your SSO team.

2. **User Creation in Clarity:** Your organization's Clarity administrator can create and manage users directly within Clarity. When defining users in Clarity, the username must be in the form of an email address. If the user name is not defined as an email address, the user will not match Broadcom's Okta user definition and access will be denied.

3. **User Creation in Broadcom's Okta:** Broadcom uses Okta as the system of record for all users accessing Broadcom products in the GCP SaaS infrastructure. Every user accessing Clarity must be a user in Broadcom's Okta tenant. In addition, user groups within Okta determine the products and environments of those products a user can access. A user may be a member of one or more user groups depending on the products and instances they can access.

   Customers using a Federated SSO solution with Clarity do not need to additionally create users in Okta. Broadcom's Okta "Just in time" (JIT) user creation automatically creates users (in Okta) when a SAML request is received. The JIT functionality will perform the following actions:
- When a SAML request is received by Okta, JIT checks if the user exists in Okta.
- If the user exists, the user is navigated directly to the defined target Clarity environment (and page).
- If the user does not exist in Okta, the user is automatically created in Okta, added to the Okta user group, and the user is automatically navigated to the target Clarity environment.

4. **Non-Federated User Creation in Okta:** The SaaS User Sync job enables Clarity SaaS customers to synchronize Clarity users with Broadcom Okta and assign them to the appropriate Okta groups. Administrators should manually schedule this job to run regularly. In Clarity 15.9.1 and future releases, customers do not need to log in to Okta as tenant admin to add users.

   The SaaS User Sync job reads all users from Clarity that have not been synced previously and then performs the following actions:
- Check if the Clarity user exists in Okta.
- If the username is not in the form of an email address, the user is skipped.
- If the user exists and is in the appropriate Okta group, then the job will not make any changes.
- If the user exists but is not in the appropriate Okta user group, the job will add the user to the appropriate Okta user group.
- If the user does not exist in Okta, the job will create the user and add them to the appropriate Okta user group.

   If user status in Clarity is "inactive", then the job removes the user from the Okta user group, thus revoking their access to the Clarity PPM instance. The user will be marked as not having been synced in case they are reactivated at a future date. To learn more about the SaaS User sync job, see Clarity Jobs Reference. If you are using older releases of Clarity, or want to create users manually as an Okta tenant admin, see Nonfederated User Creation in Okta. To learn more about creating an Okta tenant admin, see Creating an OKTA Tenant Admin.

### Syncing Users Between Clarity and Okta

Using the JIT functionality, the system will automatically create users in Broadcom's Okta based on the SAML request. Remember that users must be defined in Clarity to leverage JIT.

> [!ATTENTION]
> In Clarity 15.9.1 and higher releases, you can specify a secondary email address for a user in Clarity. This is intended only for Clarity SaaS customers who want to create test user accounts in Clarity. In previous releases of Clarity SaaS, if customers created a test user with an invalid email address then they did not get any Okta activation information. In Clarity 15.9.1 and higher releases, you can create a test user in Clarity where the user name and primary email address are invalid and the secondary email will be a valid email. You can use the same secondary email address for all test accounts.

After you create the new user in Clarity, you can use the SaaS User Sync job to update the details in OKTA for non-federated users. Federated SSO users can leverage Broadcom's Okta "Just in time" (JIT) user creation, which automatically creates the user (in Okta) after receiving a SAML request. The user's primary and secondary email is now configured in OKTA. However, once Clarity creates a user in OKTA, it will not update any details in OKTA. You need to work with your OKTA Group administrator to update user details in OKTA.

### Revoking User Access to Clarity

In order to revoke user access from Clarity SaaS, remember the following points:

1. Federated users authenticating to Clarity using your IdP should be managed in your IdP.
2. User status in Clarity should be changed to "Inactive".
3. Your Okta tenant admin should remove the user from the Broadcom Okta user group.
   a. Log into Okta as a tenant administrator and navigate to the Admin link.
   b. Complete the multi-factor authentication.
   c. Select **People** under the **Directory** menu.
   d. Search for the resource whose access you want to revoke and click their name.
   e. Navigate to the **Groups** tab and remove the relevant groups.

> [!NOTE]
> Ensure you remove access to the Development group if you don't want resources to access the development environments.

### Accessing Clarity via XOG

The XML Open Gateway (XOG) is a Clarity web service interface typically used by partners and system administrators to import/export data or move configuration data from one environment to another. XOG uses XML and web services to perform these functions. This flow is used when a user or integrated system interacts with Clarity SaaS using the XOG endpoint. When accessing this XOG endpoint, the user or integrated system must specify a defined Clarity username and password.

> [!NOTE]
> XOG will not support SSO. The XOG transaction is achieved by specifying the Clarity username and password for the user who has the authorization to perform the requested XOG. The user will be authenticated using Clarity authentication.

### Common Questions
- **What happens if a user is defined in the IdP system, but not defined in Clarity?**
  If the user logs into the IdP and navigates to Clarity, but the user does not exist in Clarity, they will be presented with the Clarity login page. In this situation, Clarity received a SAML request for a user it could not identify.
- **Can I provide non-federated users access only to the Clarity non-production environment?**
  Yes, the tenant administrator can limit the non-federated user access to the non-production environment by only adding this user to the non-production Okta user group.
- **If we want to enable Federated SSO access to Clarity SaaS, then are we required to configure all of our Clarity environments with Federated SSO?**
  Yes, Broadcom requires Federated SSO for all Clarity environments. You cannot set up Federated SSO for only one environment.

> [!IMPORTANT]
> More Information:
> - Federated SSO With Clarity SAAS
> - Non-federated SSO With Clarity SAAS

---

## Federated SSO With Clarity SAAS

### Introduction

Federated SSO integration creates a trusted relationship between Clarity SaaS and your organization's identity management solution. This relationship delivers the following benefits:
- Seamless integration between networks and environments: All users can move easily between your organization's intranet and Clarity SaaS.
- Simplified password management: No need to manage user passwords separately from Clarity SaaS, because your existing user management system handles password management.
- Broadcom Supported: A dedicated Broadcom support organization is available to provide technical support as needed.

Customers can be assured the Identity management tool will authenticate users for access to Clarity only after being authorized by the IdP solution. To provide this functionality, Clarity SaaS supports federated single sign-on using SAML 2.0. This integration creates a trusted relationship between Broadcom's SaaS infrastructure and your organization's existing enterprise user management system, simplifying end-user password management.

Clarity SaaS currently supports IdP-initiated SAML version 2.0 with HTTP-POST Binding. SP initiated SSO can be enabled. However, the customer needs to understand and accept the following limitations:
- A user's favorite links (for projects or timesheets, etc.) saved in the browser can be used if the user double-clicks the link.
- In this scenario, Broadcom does not generate a SAML assertion from its servers. The user is simply redirected to the IdP URL.

> [!NOTE]
> The recommended solution is to use IdP-initiated SSO with Broadcom's Clarity SaaS.

Organizations that intend to leverage federated SSO with Clarity SaaS must implement the client-side (IdP) requirements and tools to support SAML federated SSO, such as CA Single Sign-On, Active Directory Federation Services (ADFS), or other vendors.

### Federated SSO Implementation

#### Requirements to Enable Federated SSO with Clarity SaaS

In order to enable Federated SSO, the following requirements should be met:
1. Customers must implement an Identity Management (IdP) solution for user management.
2. The customer's IdP solution must support SAML 2.0.
3. Customers must create IdP artifacts passing the required information to Clarity SaaS.
4. Federated SSO will be enabled for all Clarity SaaS environments.
5. All Clarity usernames must be defined in a valid email format.

#### Information Needed to Enable Federated SSO in Clarity SaaS

To enable the federated SSO service in GCP, customers start the process by creating a Broadcom Support ticket requesting Federated SSO to be setup. The Support ticket should include the following information:

| Information Needed | Summary |
|-------------------|---------|
| Clarity environment information | Provide the Clarity URLs for all environments (e.g., Test, Dev, and Prod). |
| Your SSO Solution Tenant Admin (Name, Email Address, Phone) | Identify one account. |
| Name of Identity Management Solution | This is the name of the IdP application used by your organization. The IdP application will issue a SAML request to Clarity SaaS. (e.g. ADFS, Okta, PingFederate, etc.). |
| Email domains your IdP is restricted to | If the user email address is not in these domains, Clarity authentication and access will be denied. (e.g., `abccompany.com`, `xyzcompany.com`) |
| Clarity landing page (Default is Modern UX) | Upon successfully logging into Clarity, the user lands on the defined Modern UX or Classic PPM page. Broadcom recommends users land on a defined Modern UX page. |
| Do you want to restrict user authentication to Federated SSO only? (Yes/No) | If yes, Service Provider initiated authentication will be set up. If no, users will be able to login using Broadcom Okta credentials in addition to IdP or Service Provider initiated authentication. |
| SAML IdP Issuer ID | The IdP ID can be unique for each environment. This information is needed for all your Clarity SaaS environments (e.g. Dev, Test, Prod will have unique values for each environment). |
| SSO Service URL for your IdP | This is the IdP URL. This information is needed for all your Clarity environments (e.g. Dev, Test, Prod will have unique values for each environment). |
| Signer Certificate | This is the certificate used to sign the (SAML) assertions. |
| Logout URL | This is the URL the end user should see when they log out of Clarity. |

#### Broadcom Setup

| Okta Settings | Value | Description |
|--------------|-------|-------------|
| SAML Binding | SAML2.0 HTTP-POST | Broadcom SaaS supported type of binding used to send SAML Assertion. |
| Skew time | 2 Minutes | Default - 2 minutes. |
| Target Page | Clarity URL | URL configured for either Clarity or Classic PPM based on the information provided by the customer. |
| NameId | NameID should contain OKTA/Clarity username (Email format) | `<saml2:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">abc@dummy.com</saml2:NameID>` |
| Is Assertion Encrypted? | No | Only signing of assertion is supported. |
| Assertion Consumer Service | (Customer specific) | This information (Service Provider metadata) will be provided to the customer once we set up the IdP information received from the customer. |
| Session Timeout on OKTA | 2 hrs | |
| Software Used to Setup Federation | | While Broadcom SaaS Portal Service uses SAML 2.0 standards to provide federated access, understanding the IdP used on the customer side will help Broadcom to better mitigate issues. |

Once Broadcom completes the setup process, the following information will be shared with the customer to proceed with their IdP setup:
- **RelayState:** Based on the customer supplied information provided, Broadcom will share instructions to setup relaystate. Broadcom will share relaystate information for each Clarity SaaS environment.
- **Federation Metadata File:** Service Provider metadata information.

#### Customer Setup

**Activities performed by your SSO Team:**

The customer's SSO team needs to create a new IdP Artifact for each Clarity environment. This artifact has the following SAML assertion requirements:
- NameID should contain the Clarity username in the form of an email address.
- The SAML Attributes are needed in the Assertion (These attributes will be used to provision and update user information in Broadcom Okta.):
- firstName
- lastName
- Email

> [!NOTE]
> - Encryption: Only the signing of assertion is supported.
> - Minimum Signature Algorithm when validating SAML Assertions: SHA-256.
> - RelayState (or TargetURL): This is needed to route the end-user to the Clarity environment.

**Activities Performed by Your Okta Tenant Admin:**

After the Broadcom team configures the tenant admin in Okta, an email will be sent to the tenant administrator by Okta. The Okta tenant admin needs to perform the following actions:
1. Select the link in the email to register in Okta.
2. Setup a new password for Okta.
3. Set up multi-factor authentication.

**Testing:** Try to login to your current non-production environment by using the new SSO configuration.

#### Post Setup Activities

Setting up Federated SSO is a coordinated activity between Broadcom and your SSO team. We recommend the following approach:

1. Setup an IdP artifact for each of your non-production environments. This should be tested first to ensure the deep linking is configured correctly between your IdP and Broadcom's Okta.
2. After a successful test, we recommend the following:
- Create an IdP artifact for Production and have it ready for Production Go-Live.
- Schedule a go-live weekend when Broadcom will enable SSO for the Production environment, and your team can enable the IdP artifact for all users.

### Authorization Flows

In Clarity SaaS, once Federated SSO has been set up, end users access Clarity using one of the following methods:
- IdP Initiated Flow (Accessing Clarity using Customer's IdP)
- SP Initiated Flow (Accessing Clarity using Clarity URL)

#### IdP Initiated Flow (Accessing using Customer's IdP)

The IdP initiated flow will be the typical method for all end-users to access Clarity.

1. End users navigate to the organization's IdP solution URL.
2. End users authenticate via the organization's IdP.
3. Depending on the IdP system in use, end users will typically see an application tile for each Clarity environment along with other application tiles for which they have access.
4. If end users are presented with multiple tiles/links, they select which Clarity environment they want to access.
5. If the IdP is configured to route end users directly to Clarity, they will land on the defined Clarity landing page.

#### SP Initiated Flow (Accessing using URL)

End-users can access Clarity directly from the Clarity URL. In this situation, the following will occur:

1. End users navigate to the Clarity environment.
2. If the user has a valid Clarity session, they will land on the defined Clarity page.
3. If the user does not have a valid Clarity session, they are routed to the IdP authentication page.
4. End users will authenticate using the organization's IdP.
5. Depending on the IdP system in use, end-users will either see an application tile for each Clarity environment, along with other application tiles for which they have access.
6. If end users are presented with multiple tiles/links, they can select the Clarity environment they want to access.
7. If the IdP is configured to route end users directly to Clarity, they will land on the defined Clarity landing page.

### Create a Clarity User Based on SAML Request

Clarity allows customers to log in using the credentials issued by an IdP that supports SAML 2.0. Some key advantages of using SAML-based SSO login are:
- Seamless integration between networks and environments
- Simplified password management

Some key requirements you need to configure before leveraging this capability are:
- Clarity System Administration (CSA) is configured to use Single Sign On to authenticate users.
- In the System Options page, ensure that the "Enable SAML Authentication" option must be enabled.
- In the System Options page, ensure that the "Allow Just-In-Time User Creation" option must be enabled.

When Clarity receives a SAML request from the IdP, it checks if the username exists in Clarity:
- If the username exists, the user is logged into Clarity.
- If the username does not exist in Clarity, checks if the additional required attributes are included in SAML Message.
- If the attributes are not included, the user receives an error message.
- If the user exists, a new user is created, and the status is set to Active.

**Required Attributes:**

| SAML Attribute | Can Default | New or Existing Attribute | Notes |
|---------------|-------------|--------------------------|-------|
| LastName | No | New | Last name of the new user to be created in Clarity |
| FirstName | No | New | First name of the new user to be created in Clarity |
| Login | No | Existing | Clarity username that is used to check whether the user exists in Clarity. If not, a new one will be created using this name. |
| ResourceID | Yes, to User Name | New | Resource ID of the user to be created in Clarity. If not found in the SAML data, it will be defaulted to username. |
| Email | No | New | Email address of the new user |

**Optional Attributes:**

| Attribute Name | SAML Attribute | Can Default | Validation |
|---------------|---------------|-------------|------------|
| TimeZone | TimeZone | No | The value provided must exist in the timeZone elements in the `i18n.xml` file. |
| EmploymentType | EmploymentType | Yes | Valid values are 300 (Employee) and 301 (Contractor). |
| Language | Language | Yes | The value must be one of the 21 language codes available in Clarity. |
| Locale | Locale | Yes | The value will be validated against the list of locales found in the `i18n.xml` file. |
| ResourceManager | ResourceManager | No | The value supplied must correspond to the username of a user in Clarity. |
| UserGroups | UserGroups | No | Comma separated list of Clarity User Group IDs, not names. If an individual group cannot be found, it will be skipped. All valid groups will be associated with the created User. |

> [!NOTE]
> Some key points you need to remember are:
> - This functionality is only available in Clarity instances that are enabled for SSO authentication.
> - When checking if Clarity is enabled for SSO, the `useSSO` attribute on the app element in `properties.xml` must be set to `true`.

---

## Migrating to the VIP Auth Hub

Broadcom will migrate its Federated SSO support for all of its SaaS offerings from Okta to the Broadcom VIP AuthHub (VIP) service. The SaaS team will be migrating customers' current Okta configuration to VIP to minimize the impact on customers, but customers will need to make adjustments to their IDP setup in order to complete the migration.

### VIP AuthHub Migration Timeline Overview

1. You will receive scheduling notices from the Service Status system; this is the same system that is used for upgrade and maintenance notices. These notices will provide the dates and times for the migrations of each of your environments.

2. A support ticket will be opened on your behalf starting with details for your non-production metadata, the non-production cutover date(s) with a one-hour duration, along with any other environmental details needed to configure and test your IDP and be used as the primary method of communication for the duration of the environment's migration.

   > [!NOTE]
   > This step will not impact how your users access your non-production environment.

3. Update your existing IDP configuration with the metadata provided in the support ticket and validate the updated SSO connection. As part of your validation, support and the Clarity SaaS team will be available to resolve any issues reported via the ticket. Two weeks will be provided to complete this step.

   > [!NOTE]
   > This step will interrupt your users' access to your non-production environment until the cutover is completed.

4. Upon the Broadcom-provided cutover date, the Clarity team will work interactively to complete the cutover and ensure the process goes smoothly.

5. A new Support ticket will be created on your behalf for the migration of your Production environment, including a scheduled cutover date.

6. On the cutover date, the Clarity team will work interactively to complete the cutover and ensure the process goes smoothly.

7. The process is completed upon Production cutover.

### Guidelines for Customers Using Azure

Please backup the current configuration (Entity ID, ACS URL, and certificate) and update the configuration details provided by the Broadcom SSO team.
- Locate the Enterprise SSO application the customer uses (currently pointing to okta-sandbox).
- Click on **Edit Basic SAML Configuration**. Update **Identifier (Entity ID)** from the metadata.
- Edit **Reply URL (Assertion Consumer Service URL)**.
- Click **Save**.

> [!NOTE]
> If your IDP has Verification certificates (optional) set to Yes, then import the SP cert from Broadcom VIP Auth Hub metadata.

### Guidelines for Customers Using Okta

The following values need to be updated for the current SAML Okta application on the customer side:
- Single Sign-On URL
- Recipient URL
- Destination URL
- Remove the current relay state and keep it as an empty value.

### FAQ

**Who needs to be involved?**
The Clarity SaaS Team will work with your company's Clarity Administrator(s), as well as your internal IT team and IdP administrator who manages your SSO configurations. You as the application owner will need to coordinate this activity between the two teams.

**How does this affect your end-user experience?**
Once your Clarity application is transitioned to VIP, there should be no change in how you access Clarity. You can continue to initiate a login either at your company's IdP or at Clarity. Users will continue using their current credentials.

**What are the impacts of this change on integrations?**
Integrations are not anticipated to be impacted by this change. All integrations should be tested to ensure functionality post-migration.

**Do we have to change our usernames and passwords for federated users?**
No, your SSO usernames and passwords will continue to be stored and managed by your own IdP, and you do not need to change them.

**What if we use both Federated SSO and Non-Federated SSO authentication?**
- Both Federated and Non-Federated Authentication will continue to be available.
- For new non federated users post migration to VIP, Broadcom will process the creation and management of Non-Federated SSO users in VIP via ticketed support requests.
- Existing Okta administrative user access will be removed.
- When authenticating non-federated users for the first time, post-migration passwords must be reset.
- Refer Non-Federated Access in VIP AuthHub for the Non-Federated user authentication flow.

**How do you reset passwords for non-federated SSO users in VIP?**
Refer Migrating Existing Non-Federated Users from OKTA to VIP to reset passwords for non-federated SSO users in VIP.

**Can we set up SP (Service Provider) and IdP-initiated logins?**
Yes, VIP supports both IdP and SP-initiated logins.

**Is there a charge for this migration?**
No. Clarity Support will manage this migration with customers at no charge.

**What do we need to do to initiate this change?**
Broadcom will initiate this change. A Status Page notice will be sent to provide the scheduling details for this change. The Clarity Support Team will contact you to initiate the transition to VIP SSO.

**How do I get support if there is a problem after hours?**
Contact Clarity Support.

---

## Non-Federated Access in VIP AuthHub

Follow these guidelines to manage non-federated access in VIP AuthHub effectively.

### Provisioning Non-Federated Users

To provision non-federated users, submit a support ticket with the following information for each user:
- First Name
- Last Name
- Email Address (used as the username)
- Clarity Environments required (Prod, Dev, Test, etc.)

> [!IMPORTANT]
> For multiple users, provide the information in an Excel format. Tenant Admin privileges to provision user accounts directly are no longer available.

Follow these steps for user provisioning and activation:
1. Open a support ticket and provide the list of users.
2. Broadcom provisions the user accounts.
3. Users receive an email to activate their accounts.
4. The email prompts users to:
   a. Set up local credentials on Broadcom VIP.
   b. Confirm that the password has been set up correctly.

### Accessing Clarity by Non-Federated Users

After setting up their password, non-federated users can access Clarity environments even if SSO is enabled, by directly navigating to the PPMSSO URL.

1. Navigate to the PPMSSO URL. Use one of the eight PPMSSO URLs corresponding to your region. Refer to the PPMSSO URL List for details.
2. Enter your username.
3. Enter your password.
4. Upon successful login, the PPMSSO Dashboard appears. Select the specific Clarity URL to access Clarity.

> [!NOTE]
> If you belong to a single group mapped to one Clarity tenant, you will not see the PPMSSO Dashboard and will be redirected directly to the Clarity screen.
- If you are locked, inactive, or not provisioned in Clarity, you will be redirected to the default page.
- If your account is active, you will proceed to the Clarity interface.

### Non-Federated User Access with Multi-Factor Authentication (MFA) Enabled

If MFA is enabled for your account, follow these steps:

1. Enter your credentials.
2. Choose an MFA option to authenticate from the list:
- Email a security code to me
- Use biometrics
- Use a code from a mobile app

For example, click **Email a security code to me** to receive the code in your email.

> [!IMPORTANT]
> If you belong to multiple groups, the PPMSSO Dashboard appears.

### Migrating Existing Non-Federated Users from OKTA to VIP

As part of the Okta to VIP Auth Hub migration, all existing non-federated users will be migrated automatically. Follow the steps below to activate the non-federated users after migration:

1. Enter your username on the login page.
2. If you see the error message "Your account is locked", click **Unlock Account** as prompted.
3. Click the **Email** link to receive an unlock email containing a password reset link.
4. Open the email with the subject "Reset Password" and click the provided link to reset your password.
5. Enter and confirm your new password.
6. Ensure your new password meets all requirements, then click **Reset Password**. A confirmation message appears: "Your password has been successfully reset."
7. Log in to the PPMSSO URL using your new password to access Clarity.

### List of URLs Across Various Regions for Non-Federated Access

| Clarity Domain | Region | PPMSSO URL |
|---------------|--------|------------|
| `cppm****.ondemand.ca.com` | US | `https://cppmssousah02.ondemand.ca.com/ppmsso/csso` |
| `cppm****.clarityppm.saas.broadcom.com` | US | `https://cppmssousah01.clarityppm.saas.broadcom.com/ppmsso/csso` |
| `cppm****.ondemand.ca.com` | EU | `https://cppmssoeuah02.ondemand.ca.com/ppmsso/csso` |
| `cppm****.clarityppm.saas.broadcom.com` | EU | `https://cppmssoeuah01.clarityppm.saas.broadcom.com/ppmsso/csso` |
| `cppm****.ondemand.ca.com` | AU | `https://cppmssoauah02.ondemand.ca.com/ppmsso/csso` |
| `cppm****.clarityppm.saas.broadcom.com` | AU | `https://cppmssoauah01.clarityppm.saas.broadcom.com/ppmsso/csso` |
| `cppm****.ondemand.ca.com` | Canada | `https://cppmssocaah02.ondemand.ca.com/ppmsso/csso` |
| `cppm****.clarityppm.saas.broadcom.com` | Canada | `https://cppmssocaah01.clarityppm.saas.broadcom.com/ppmsso/csso` |

> [!NOTE]
> Non-federated users should use the URL specific to the region where they are hosted.
> - US - United States of America
> - EU - Europe
> - CA - Canada
> - AU - Australia

### Summary
- Tenant Admin access to provision or manage non-federated users in VIP is unavailable. Submit a Support Ticket with Broadcom for user provisioning or updates.
- SSO user provisioning uses JIT (Just-in-Time) provisioning, functioning similarly to the current implementation.
- Ensure all non-federated users have access to the URLs across various regions for Non-Federated Access.

## On-Premise SAML Configuration

Clarity allows on-premise customers to use the credentials issued by an IdP - that supports SAML 2.0 - and log into Clarity.

Some key advantages of using SAML-based SSO login are:
- Seamless integration between networks and environments: All users can move easily between your organization's intranet and Clarity.
- Simplified password management: No need to manage user passwords separately from Clarity, because your existing user management system handles password management.

> [!ATTENTION]
> The screenshots of third-party applications on this page may not match exactly how they are implemented in your environment.

Some of the key areas covered in this topic are:
- Setting Up SAML Metadata
- Configuring to Support SAML 2.0
- Reviewing IdP Configuration Examples
- Create a Clarity User Based on SAML Request
- Update a Clarity User Based on SAML Request

### Setting Up SAML Metadata in Clarity

Every Identity Provider that supports SAML 2.0 provides a way to share the SAML metadata with other applications. Please ask the security administrator in your organization to provide you the SAML metadata for your IdP. You can then import the SAML metadata file into Clarity.

Clarity allows you to perform the following activities:
- Import SAML metadata into Clarity
- Manage security certificates
- Export service provider metadata
- Configure multiple Identity Providers

> [!NOTE]
> You can now bookmark various Clarity URLs for future reference after you have configured Clarity to support SAML. This capability was not available in older releases. You need to populate the **Signon URL** in the Clarity System Administrator to use this capability. To learn more, see *Configuring Azure to Issue Credentials for Clarity* and *Configuring Okta to Issue Credentials for Clarity*.

Let's review how we can perform each of these activities.

#### Import SAML Metadata into Clarity

Once you receive the SAML metadata file from your administrator, you can import it into Clarity by using the **Authentication and Keys** option on the **Administration** page. You can choose to either upload the SAML metadata or manually populate the various attributes needed to successfully establish a connection with your IdP.

#### Import SAML Metadata by using an XML File

You can use the **Import Identity Provider Metadata** button to import the SAML metadata into Clarity.

**Follow these steps:**

1. Log into Clarity.
2. In the main menu, click **Administration**.
3. Click **Authentication & Keys** and select **SAML CONFIGURATIONS**.
4. Click the **Import Identity Provider Metadata** button to import the SAML metadata.
5. Enter the **Configuration Identifier**, **Configuration Name**, and upload the SAML metadata file. Click **Done** to upload the file. The SAML configuration is now ready. The certificate associated with your SAML metadata is now available in the **CERTIFICATES** tab.
6. Use the column picker to add various attributes such as **Assertion Consumer URL**, **Authentication Context**, **Entity ID**, and **IdP Entity ID** to the grid. These are mandatory attributes and are populated based on the SAML metadata imported by you.
7. Use the column picker to add optional attributes such as **Organization Name** and **Support Contact Email**.

#### Manually Enter SAML Configurations

If you cannot generate the SAML metadata file from your IdP, or you wish to populate the SAML configurations manually, you will need the following details. You will need to get most of these details with the help of your Security Administrator.

| Clarity Attribute | Description | Example Value |
|---|---|---|
| **X509 Certificate** | The X509 certificate is a standard format for public-key encryption. | *(provided by IdP)* |
| **Authentication Context** | Authentication context allows IdPs to augment assertions with additional info. | `urn:oasis:names:tc:SAML:2.0:ac:classes:password` |
| **Assertion Consumer Binding** | Bindings help you define the format in which data is transferred between Clarity and the IdP. | `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` |
| **IdP Entity ID** | The IdP Entity ID is a globally unique name for each application created in the IdP. | `http://www.okta.com/temp1eeddw` |
| **Entity ID** | The Entity ID is a unique endpoint for Clarity. You can append the ID. | `http://ppmtemp.test.clarity.net:8080/niku/nu/sso/<ID>` |
| **Name ID Formats** | The Name ID Formats define the name identifier formats supported by the IdP. | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` |
| **SSO Service Binding** | The SSO Service Binding specifies the binding that exists between the IdP and Clarity. | `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect` |
| **SSO Service URL** | The SSO Service URL provides the URL for the SSO service of your IdP. | `https://dev-sample.okta.com/app/dummyorg388382_org_1/exk` |
| **IdP Single Logout Service Binding** | The IdP Single Logout Service Binding helps the IdP keep track of all sessions so that when the user subsequently logs out from Clarity, the IdP knows which other sessions to end. | `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect` |
| **Assertion Consumer URL** | The Assertion Consumer URL is the endpoint in Clarity to which the IdP sends the SAML assertion. | `http://ppmtemp.test.clarity.net:8080/niku/nu` |

**Follow these steps:**

1. Log into Clarity.
2. In the main menu, click **Administration**.
3. Click **Authentication & Keys** and select **CERTIFICATES**.
4. Click **Add Row** and enter the **Name**, the **Certificate Text**, and the **ID**. This information is typically provided by your security administrator.
5. Click **SAML CONFIGURATIONS** and then click **Add Row**.
6. Select the **Column Panel** to add the relevant attributes to the Clarity grid. You can now start adding the details provided by your security administrator.

> [!NOTE]
> The **SAML CONFIGURATIONS** page uses the Clarity common grid. To learn more about the Clarity Common Grid, see *Common Components*.

#### Manage Security Certificates

You can use Clarity to manage the security certificates in your organization. When you import the SAML metadata file into Clarity, the security certificate is automatically available on the **CERTIFICATES** page. If your organization wants to encrypt the communication between Clarity and your IdP, you can add the relevant certificate to the **CERTIFICATES** page. You can also use this page to maintain a list of certificates in your organization for other products.

**Follow these steps:**

1. Log into Clarity.
2. In the main menu, click **Administration**.
3. Click **Authentication & Keys** and select **CERTIFICATES**.
4. Click **Add Row** and enter the **Name**, the **Certificate Text**, and the **ID**. This information is typically provided by your security administrator.
5. Click **Column Panel** to add relevant attributes to the Clarity grid. You can add the **Starts On** and **Expires On** attributes to the grid to ensure administrators can review the validity of the certificate.
6. If you have added a Service Provider certificate to encrypt the communication between Clarity and your IdP:
   a. Click **SAML CONFIGURATIONS** and use the **Column Panel** to add the following attributes:
- **Service Provider Certificate**
- **Encrypt IDP Assertions**
- **Private Key**
   b. Double-click the **Service Provider Certificate** column to select the service provider certificate.
   c. Select the **Encrypt IDP Assertions** check box.
   d. Enter the private key.

> [!NOTE]
> The **CERTIFICATES** page uses the Clarity common grid. To learn more about the grid, see *Common Components*.

> [!IMPORTANT]
> To get lookup attributes of user or resource objects through an API, see *Get Additional Metadata for User/Resource Object Lookups*.

#### Export the Service Provider Metadata

After you have uploaded your SAML metadata into Clarity, you need to provide the relevant Clarity metadata to your IdP so that they can authenticate users to access Clarity.

**Follow these steps:**

1. Log into Clarity.
2. In the main menu, click **Administration**.
3. Click **Authentication & Keys** and select **SAML CONFIGURATIONS**.
4. Right-click the configuration you want to export and select **Export Service Provider Metadata**.
5. Save the file and share it with your security administrator.

#### Configure Clarity to Support Multiple IdPs

You can configure Clarity to support multiple IdPs. While most organizations use a single IdP, there are certain scenarios such as when you are migrating from one IdP to another where you may wish to support multiple IdPs.

**Follow these steps:**

1. Create a SAML configuration for the second IdP in Clarity. For more information see *Import SAML Metadata*.
2. Update the **Assertion Consumer URL** to append `?sso_code=<ID>` at the end of the URL. Example:
   `http://ppmtemp.test.clarity.net:8080/niku/nu?sso_code=IDP2`
   Ensure that you use the same ID that you used to set up the SAML Configuration in Clarity.
3. Export the Clarity metadata and use it to configure your IdP. To learn more about exporting Clarity metadata, see *Export Service Provider Metadata*.

> [!TIP]
> Consider an example where you have configured OKTA as your second IdP. When you configure OKTA, you will need to:
> - Update the **Single sign on URL** option to append `?sso_code=<ID>`.
> - Clear the **Use this for Recipient URL and Destination URL** check box.
> - Remove the `?sso_code=<ID>` parameter from the **Recipient URL** and **Destination URL**.
> To learn more about configuring other IdPs, see *SAML Configuration Examples*.

### Configuring Clarity to Support SAML 2.0

You need to perform the following actions to configure Clarity to support SAML 2.0:
- Update Settings in CSA
- Enable SAML authentication on the System Options page
- Ensure login details match for Clarity and IdP

#### Update Settings in Clarity System Administrator (CSA)

The final step for configuring Clarity to support SAML 2.0 is to enable Single Sign-On and set the Token Type in the Clarity System Administrator.

**Follow these steps:**

1. Log into the Clarity System Administrator by using the following link. The following default login URL is for CSA on servers running Apache Tomcat:
   `http://<hostname>:<port>/niku/app`
2. Select the relevant server.
3. Navigate to the **Application** tab and select the **Use Single Sign-On** check box in the **Application Instance: app** section.
4. Save your changes.
5. Navigate to the **Security** tab and set the value of the **token type** field to **Header**.
6. Save your changes.
7. Restart Clarity services.

#### Enable SAML Authentication

You need to enable SAML Authentication in Classic PPM.

**Perform these steps:**

1. Log in to Classic PPM and select **Administration**, **System Options** to open the System Options page.
2. Select the **Enable SAML Authentication** option.

#### Ensure Login Details Match for Clarity and IdP

You need to ensure that the login details in the IdP match the details associated with the **USER NAME** field of the resource in Clarity.

1. Log into Classic PPM with admin credentials.
2. Select **Administration**, **Resources** to open the Resources page.
3. Select a resource to open it and ensure the value of **USER NAME** field matches the login details associated with your IdP.

#### Key Points to Remember

Here are a few key points to remember while setting up Clarity to support SAML 2.0 authentication:
- Clarity uses the `CMN_SEC_CERTS` and `CMN_SEC_SAML_CONFIGS` tables to store SAML details in the database.
- If you have set up SAML 2.0 authentication on a development or test system and copy the production data to these systems, you need to:
- Delete the SAML configuration that has been copied over.
- Import SAML metadata again.
- Ensure you don't truncate the database tables.

### Reviewing IdP Configuration Examples

Let's review a few examples of how you can configure IdPs to work with Clarity:
- Configuring Okta
- Configuring Azure
- Configuring Clarity SAML 2.0 with Active Directory Federation Service (ADFS)

> [!NOTE]
> While Okta and Azure are used as examples, Clarity supports all identity providers that support SAML 2.0.

#### Configuring Okta to Issue Credentials for Clarity

You can work with the Security administrator to create a SAML 2.0 application in Okta and configure it so that enterprise users can use their credentials to log into Clarity.

**Perform the following steps:**

1. Log into the Okta administrator application.
2. On the top menu, click **Applications** and then select **Applications** again.
3. Click **Add Application** to create a new application.
4. Select the **SAML 2.0** radio button to create a SAML 2.0 application.
5. Specify the **Application Name** and upload the application logo.
6. In the **Configure SAML** window, enter the following information:
- **Single Sign-On URL**: It is the entry URL of the Clarity application. An example is `https://test.broadcom.com/niku/nu`
- Select the **Use this for Recipient URL and Destination URL** checkbox.
- In the **Audience URI (SP Entity ID)** field, enter the SP entity ID of your Clarity application. It's generally the Entry URL of your application pointing to `action union.samlMetadata`. An example is `https://testppm.broadcom.com/niku/nu#action:union.samlMetadata`.
- In the **Default RelayState** field, enter the URL where you want the application to be redirected after a successful SAML assertion. An example is `https://testppm.broadcom.com/pm`, which redirects users to Clarity.
- Do not update the following fields:
- **Name ID Format**
- **Application Username**
- **Update Application Username on**
- Under **Attribute Statements (Optional)** section:
- In the **Name** field, select **Login**.
- In the **Name format** field, select **Unspecified**.
- In the **Value** field, select **user email**.
7. In the **Are you a customer or partner** screen, select the option that is relevant to your scenario and click **Finish**.
8. Click **View Setup Instructions**, scroll to the bottom and copy the IdP metadata and save it as an XML file.
9. Use the `samlMetadata` API to import the IdP metadata into Clarity.

You can review the *Configure SAML by Using REST APIs* and *Configure Clarity to Support SAML 2.0* sections for detailed instructions.

> [!NOTE]
> If you want your users to leverage the URL Bookmarking capability, perform the following steps:
> 1. Import the Metadata from OKTA into Clarity.
> 2. In Clarity, click **Administration**, **Authentication & Keys**.
> 3. Click **Columns** and add the **SSO Service URL** attribute to the grid.
> 4. Copy the value of the **SSO Service URL** attribute.
> 5. Log into Clarity System Administrator, click the Clarity Server, and click the **Security** tab.
> 6. Paste the value of the **SSO Service URL** attribute into the **SignOn URL** field.
> 7. Click **Save** to finalize your changes.

#### Configuring Azure to Issue Credentials for Clarity

You can work with the Security administrator to create a SAML 2.0 application in Azure and configure it so that enterprise users can use their credentials to log into Clarity.

**Perform the following steps:**

1. Log into Azure Portal and click **Azure Active Directory**.
2. Select **Enterprise Applications**, **New Application**, and select **Non-gallery application**.
3. Enter the name of the application and click **Add**.
4. Click **Home**, **Azure Active Directory**, and **Enterprise Applications** and select the application you created.
5. Click **Single Sign-On** and then click **SAML**.
6. Under **Basic SAML Configuration**, click **Edit** to add the following values:
   a. **Identifier (Entity ID)**: This is the Entity ID of Clarity SAML. An example is `https://testppm.broadcom.net/niku/nu#action:union.samlMetadata`
   b. **Reply URL (ACS URL)**: This is the ACS URL or SP (Clarity) URL. An example is `https://testppm.broadcom.net/niku/nu`
   c. **Sign-on URL**: Blank
   d. **Relay State**: Specify the URL where Azure should redirect after they login successfully.
   e. **Logout URL**: Blank
7. Under **User Attributes and Claims**, the **Unique User Identifier** attribute cannot be edited. Remove the others and add a new Claim called "Login."
   a. The source Attribute should be the same as the username in Clarity PPM. Set the source attribute to `user.userprincipalname`.
8. Download the **Federation Metadata XML** from the link.
9. Edit the Federation Metadata XML file and navigate to the bottom of the file. Add the following information to the file:
   ```xml
   <NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</NameIDFormat>
   ```
10. Save your changes and close the file.
11. Use the `samlMetadata` API to import the IdP metadata into Clarity.

> [!NOTE]
> If you want your users to leverage the URL Bookmarking capability, perform the following steps:
> 1. Import the Metadata from Azure into Clarity.
> 2. Login to the Azure Portal and navigate to **Azure Active Directory**, **Enterprise Applications**, **Application Created for Clarity**.
> 3. In the **Properties** tab, copy the values of the **User Access URL**. Append `&RelayState=` to the User Access URL. Here is a sample URL:
>    `https://myapps.microsoft.com/signin/xxxxxx-6xxx-4xxx-8xxx-5xxxxxxx?tenantId=bxxxxx-1xxx-4xxxaxxx-4xxxxxxxx&RelayState=`
> 4. Log into Clarity System Administrator, click the Clarity Server, and click the **Security** tab.
> 5. Paste the value of the **SSO Service URL** attribute into the **SignOn URL** field.
> 6. Click **Save** to finalize your changes.

You can review the *Configure SAML by Using REST APIs* and *Configure Clarity to Support SAML 2.0* sections for detailed instructions.

#### Configuring SAML 2.0 with Active Directory Federation Service (ADFS)

Please see the following Knowledge Base article to learn more about configuring Clarity SAML 2.0 with Active Directory Federation Service (ADFS).

### Create a Clarity User Based on SAML Request

Creating a User on the fly in Clarity requires a small set of attributes to be present in any SAML Message or JWT token received by the SAMLFilter. In addition to the attributes required to create a basic User, an optional set of attributes can be provided to provide important information about the User. If these optional attributes are not provided, one of two things will happen: the attribute will be given a system default value, or it will be blank. No new system defaults are created as a result of this work.

Some key advantages of using SAML-based SSO login are:
- Seamless integration between networks and environments
- Simplified password management

Some key requirements you need to configure before leveraging this capability are:
- Clarity System Administration (CSA) is configured to use Single Sign-On for user authentication.
- In the **System Options** page, ensure that the **Enable SAML Authentication** option is enabled.
- In the **System Options** page, ensure that the **Allow Just-In-Time User Creation** option is enabled.

When Clarity receives a SAML request from the IdP, it checks if the username exists in Clarity:
- If the username exists, the user is logged into Clarity.
- If the username does not exist in Clarity, it checks whether the required additional attributes are included in the SAML Message.
- If the attributes are not included, the user receives an error message.
- If the user does not exist, a new user is created, and the status is set to Active.

#### Required Attributes

The following table displays the attributes required to create a user.

| Attribute | SAML Attribute | Can Default | New or Existing | Notes |
|---|---|---|---|---|
| **Last Name** | `LastName` | No | New | Last name of the new user to be created in Clarity |
| **First Name** | `FirstName` | No | New | First name of the new user to be created in Clarity |
| **User Name** | `Login` | No | Existing | Clarity username used to check whether the user exists in Clarity. If not, a new one will be created using this name. |
| **Resource ID** | `ResourceID` | Yes, to User Name | New | Resource ID of the user to be created in Clarity. If not found in the SAML data, it will be defaulted to username. |
| **Email Address** | `Email` | No | New | Email address of the new user |

#### Optional Attributes

The following optional attributes are supported.

| Attribute | SAML Attribute | Can Default | Validation |
|---|---|---|---|
| **Name** | *(standard)* | No | Will not be validated or defaulted |
| **Middle Name** | `MiddleName` | No | Will not be validated or defaulted |
| **TimeZone** | `TimeZone` | Yes | If not found in the SAML data, it defaults to the system default, which is "America/Chicago". The value provided must exist in the timeZone elements in the `i18n.xml` file. If the time zone cannot be validated against this list, the default value will be used. |
| **Employment Type** | `EmploymentType` | Yes | If not found in the SAML data, it defaults to 300. The valid values are 300 (Employee) and 301 (Contractor). |
| **Language** | `Language` | Yes | If not found in the SAML data, it defaults to "en", US English. The value must be one of the 21 language codes supported by Clarity. If not found in the list of 21 languages, it will default to "en". |
| **Locale** | `Locale` | Yes | If not found in the SAML data, it defaults to "en_US". The value will be validated against the locales list in the `i18n.xml` file. If validation fails, the default will be used. |
| **Resource Manager** | `ResourceManager` | No | The supplied value must match the User Name of a Clarity user. If it is not present, no value will be populated for the User's manager. |
| **User Groups** | `UserGroups` | No | This is a comma-separated list of Clarity User Group IDs, not names. If an individual group in the list cannot be found in the database, it will be logged at the debug level and skipped. All valid groups in the list will be associated with the created User. It is not necessary to supply the `baseUserGroup`, which is assigned to all users. This group will be automatically added. |

#### Resource Parameters Attribute

| Attribute | SAML Attribute | Can Default | Validation |
|---|---|---|---|
| **Resource Parameters** | `ResourceParams` | *(none)* | This parameter allows you to populate almost any editable field on a Clarity Resource. |

This parameter in the SAML message allows multiple values to be set on the Resource object. There is no default for this parameter. The only datatypes allowed to be set via this parameter are **Strings**, **Dates**, and **Numbers**. For this parameter, Numbers includes integers, doubles, and Booleans.

**Date Format:** Dates must be in ISO 8601 format: `YYYY-MM-DD'T'HH:mm:ss.SSSZ`. However, the millisecond portion of the time and the time zone information will be ignored. All dates will be assumed to be in the Clarity Instance's time zone. Both the full date and time, or just the date portion, are accepted. If the full date and time cannot be parsed, only the date will be attempted. A message will be logged when this happens.
- Date and time example: `"2025-09-08T14:32:21"`
- Date only example: `"2025-10-10"`

**JSON Format:** The format of this parameter is a JSON string. This consists of curly braces around a comma-separated list of colon-separated name-value pairs. For example:

```json
{"name1":"value1","name2":"value2"}
```

This JSON string is interpreted by Clarity as a single Attribute in the SAML message. The name part of the name/value pair comes from the **Attribute ID** column in the **Attribute** tab of the Resource Object in Clarity Studio.

Here is an example JSON String using actual Resource attributes and valid values:

```json
{"date_of_hire":"2023-09-08","date_of_termination":"2027-11-11T09:22:33","pruserflag1":"1","prusernumber1":"10.3","prisopen":"1"}
```

The following image shows a set of Custom Claims on the SAML tab of an application in VIP AuthHub that will provide all the information necessary to create a User in Clarity.

> [!NOTE]
> Some key points you need to remember are:
> - The following attributes are **allowed**:
>   - Strings
>   - Dates
>   - Numbers - Boolean, Integer, and Double only
> - The following attributes are **not allowed**:
>   - Virtual
>   - Non-Editable
>   - Lookups
>   - Calculated
>   - Time Varying
>   - Attachment
>   - Money
>   - Formula
>   - Percent
> - If a parameter name does not match one defined for the Resource object or if the given attribute does not fall into one of the permissible categories noted above, a message will be written to the log file.
> - All created users will be set to "Active".
> - All Users will be given the system default password. Since this is an SSO environment, the password within Clarity will not be used.
> - This functionality is available only in Clarity instances enabled for SSO authentication.
> - When checking if Clarity is enabled for SSO, the `useSSO` attribute on the app element in `properties.xml` must be set to `true`.

### Update a Clarity User Based on SAML Request

An existing Clarity User may be updated on the fly with data provided in the SAML message used to authenticate the User to Clarity. For an existing User, only two parameters in the SAML message will be considered: **User Groups** and **Resource Parameters**. If they are present in the SAML message, the values in the message will replace the existing values in the database. For Resource Parameters, this is a straight one-for-one replacement. For User Groups, all existing groups will be removed, and the values in the SAML message will be added to the User. Thus, it is imperative that the User Groups parameter always contains the entire set of groups to which a User belongs. The only exception is the `baseUserGroup`, which is never dropped.

**User Groups Update Example:** A new User is created with `UserGroups="cop.ideaCreator, cop.projectView, cop.teamMember"`. After creation, the User is a member of the three listed groups and the `baseUserGroup`. Later, a stakeholder decides to alter the User's Clarity access. In their IDP, the User's valid groups are all removed. The SAML message at their next login will contain `UserGroups=""`. After logging in, the user will belong only to the `baseUserGroup`. All other groups will be deleted from the User.

**Resource Parameter Update Example:** A new User is created as a Contractor with `ResourceParams={"date_of_hire":"2023-09-08","date_of_termination":"2027-11-11T09:22:33","prisopen":"1"}`. After creation, the User will have a Date of Hire of September 8th, 2023, a Date of Termination of November 11th, 2027, and will be open for time entry. Stakeholders decide to extend the contractor's termination date. In the IDP, the termination date value is updated to December 31st, 2028. The resulting ResourceParams value is: `{"date_of_hire":"2023-09-08","date_of_termination":"2028-12-31T17:00:00","prisopen":"1"}`. This will update the Date of Termination to December 31st, 2028, with no other changes. While it is not necessary to provide `date_of_hire` and `prisopen`, most likely an IDP will always send all current values.

## Oracle and SQL Server Connectivity Diagrams

### Oracle Connectivity

The following image shows the Oracle connectivity.

> [!INFO]
> Figure 37: This image illustrates the Oracle connectivity

### Microsoft SQL Server Connectivity

The following image shows the Microsoft SQL Server connectivity.

> [!INFO]
> Figure 38: This image illustrates the Microsoft SQL Server connectivity

## Database Schema Changes

The following Classic PPM database and data warehouse schema tables and columns are new, changed, or dropped in the specified release.

> [!TIP]
> This page summarizes the changes in recent releases. To view the complete detailed Classic PPM database and data warehouse schema files, see *Clarity Advanced Reporting and Database Schema Index*.

Database and Data Warehouse Schema Changes:
- **New!** Schema Changes from Release 16.4.0 to 16.4.1
- Schema Changes from Release 16.3.3 to 16.4.0
- Schema Changes from Release 16.3.2 to 16.3.3
- Schema Changes from Release 16.3.1 to 16.3.2
- Schema Changes from Release 16.3.0 to 16.3.1
- Schema Changes from Release 16.2.3 to 16.3.0
- Schema Changes from Release 16.2.2 to 16.2.3
- Schema Changes from Release 16.2.1 to 16.2.2
- Schema Changes from Release 16.2.0 to 16.2.1
- Schema Changes from Release 16.1.3 to 16.2.0
- Schema Changes from Release 16.1.2 to 16.1.3
- Schema Changes from Release 16.1.1 to 16.1.2
- Schema Changes from Release 16.1.0 to 16.1.1
- Schema Changes from Release 16.0.3 to 16.1.0

### Clarity Advanced Reporting and Database Schema Index

This page provides information about Classic PPM Advanced Reporting, database schemas, the PMO Accelerator, and Jaspersoft Studio Professional. Click the appropriate link to download or open a document.
- Clarity Oracle Database Schema
- Clarity MSSQL Database Schema
- Clarity PostgreSQL Database Schema (SaaS Only)
- Data Warehouse Oracle Database Schema
- Data Warehouse MSSQL Database Schema
- Data Warehouse PostgreSQL Database Schema (SaaS Only)

> [!NOTE]
> For the schema links, download the compressed files, extract the files to your desktop, and open the index file.

**Advanced Reporting Domain Field Descriptions:** For information, see *Advanced Reporting Domain Field Descriptions*.

**PMO Accelerator Overview:** The PMO Accelerator Overview documentation is no longer available as a separate guide. The content is included in the PMO Accelerator documentation.

**Tibco Jaspersoft Studio:** TIBCO Jaspersoft Studio Professional 7.9 with CA JDBC Adapter

> [!NOTE]
> You will be redirected to the Broadcom Support site. By downloading, each SaaS Customer acknowledges that (1) the Jaspersoft Studio software is provided to help Customer utilize certain applications and web services that may be available through SaaS, and (2) the right to use such software is solely in connection with SaaS and for the sole purpose of allowing Customer's applications or web services to utilize the SaaS offering.

## Database Performance Whitepapers

This page presents the database performance load testing and analysis whitepaper for Oracle, Microsoft SQL, and PostgreSQL (Containers and non-Containers) environments of Clarity 16.4.1.

**Table of Contents:**
- Executive Summary
- Performance Test Methodology
- Performance Test Results
- Performance Test Conclusion
- Database Performance Comparison by Release
- Comparison by Response Time
- Database Performance Test Environment
- Database Size Details
- Database and App Server Performance Graphs
- Database Performance Use Cases
- Use Cases: Detailed Steps
- Use Cases: Detailed Load Test Results

> [!IMPORTANT]
> **Disclaimer:** This document is not meant as a sizing guide or as a recommendation guide. Instead, it portrays possible user loads given a particular Clarity configuration. We understand that customer requirements and environments differ. The Clarity functionality that is exercised during these performance load tests may or may not match the functionality that individual companies deploy. Broadcom does not recommend that customers acquire hardware based on this document. Instead, seek the sizing expertise of our technical pre-sales and professional services personnel. The test environments outlined in this document do not consider reporting, process engine, and background service or failover requirements.
> This document is for your informational purposes only. Broadcom assumes no responsibility for the accuracy or completeness of the information. To the extent permitted by applicable law, Broadcom provides this document "as is" without warranty of any kind, including, without limitation, any implied warranties of merchantability, fitness for a particular purpose, or non-infringement. In no event will Broadcom be liable for any loss or damage, direct or indirect, from the use of this document, including, without limitation, lost profits, business interruption, goodwill or lost data, even if Broadcom is expressly advised in advance of the possibility of such damages.

### Executive Summary

To establish and publish performance benchmarks, the Clarity software engineering team conducted a series of tests for Clarity 16.4.1 in a clustered Linux environment. The following high-level enhancements were made to the test infrastructure:
- To simulate real-world activity, user concurrency was set to 2400 users. Existing customer application logs were analyzed to ensure test throughput (number of actions performed) is on par with a peak load for 2450 concurrent users.
- In addition to the user interface actions, a background process was also run in volume during the test. The process exported an updated project using the XML Open Gateway (XOG) and ran approximately 600 times per hour.
- Instant sync is enabled on all the load tests.

The test objectives were to:
- Demonstrate the ability of the product to serve a large-sized user base (24,000 users) on Intel-based hardware using either of the following databases:
- Oracle 19c (19.29.0.0.251021) and Apache Tomcat version 9.0.113 application servers on a Linux clustered environment.
- SQL Server 2022 EE 64-bit SP2 CU22 (16.0.4225.2) and Apache Tomcat version 9.0.113 application servers.
- PostgreSQL (16.4) and Apache Tomcat version 9.0.113 application servers.
- Establish performance benchmarks under load using a core set of application functionality on AMD-based hardware and a Linux environment.

### Performance Test Methodology

The load tests use a mixture of inquiry and update actions to simulate end-user interaction with the product. The tests used 2450 virtual users to simulate a peak usage period for a total user population of 24,500 registered users. Wait times ranged from 3 to 45 seconds, depending on the type of action. The performance test is measured for 180 minutes, including a ramp-up time of about 60 minutes.

The tests used a single database server with four application servers and with background instance on one of the application servers. All application servers and MS SQL DB, Oracle DB, PostgreSQL DB are running on virtual machines. The actual experience for you as a customer depends on how your hardware is set up, how many modules are deployed, how the user actions are distributed among the population, and the access rights that are granted to your users.

> [!NOTE]
> Testing at a 10% concurrency rate, 2450 virtual users represent 24,500 registered users (2450 / 0.10 = 24,500). The 10% concurrency rate is typical for peak usage times.

### Performance Test Results

AMD EPYC 7B12 CPU @ 2.20GHz servers, each running one 16.4.1 application instance, can support a simulated load for 24,500 registered users (2,450 simultaneous virtual users) with Oracle or Microsoft SQL Server or PostgreSQL. Results are drawn from the 2,450-virtual-user 2.0-hour load tests.

#### New UI: Summary of Test Results

| Metric | Oracle | MS SQL | PostgreSQL (SaaS) | PostgreSQL (Containers) |
|---|---|---|---|---|
| Average Transaction Response Time (in seconds) | 0.4 | 0.98 | 0.48 | 0.45 |
| Average Hits per second | 56.32 | 58.3 | 65.85 | 66.06 |
| Average Database Server CPU Utilization | 32.49% | 52.35% | 47.14% | 32.44% |
| Average Application Server 1 CPU Utilization | 10% | 7.8% | 7.2% | 8.8% |
| Average Application Server 2 CPU Utilization | 9.4% | 8.1% | 7.4% | 9.2% |
| Average Application Server 3 CPU Utilization | 8.4% | 9.2% | 7.6% | 9.5% |
| Average Application and Background Server 4 CPU Utilization | 8.8% | 8.8% | 7.7% | 8.3% |

### Performance Test Conclusion

After comparing the average response times for the functionality between 16.4.1 and the previous release, 16.4.1 performance is equal to the previous version.

**Oracle:** Clarity Release 16.4.1 performs similar to the previous release on similar hardware comparing the same counters.

> [!NOTE]
> Formula: `[(v16.4.0 avgresp - v16.4.1 avgresp) / v16.4.0 avgresp] = % improvement`
> Result: `(0.4 - 0.41) / 0.4 = -0.025`

**MS SQL:** Clarity Release 16.4.1 performs similar to the previous release on similar hardware comparing the same counters.

> [!NOTE]
> Formula: `[(v16.4.0 avgresp - v16.4.1 avgresp) / v16.4.0 avgresp] = % improvement`
> Result: `(0.98 - 0.96) / 0.98 = 0.02`

**PostgreSQL (SaaS):** Clarity Release 16.4.1 performs similar to the previous release on similar hardware comparing the same counters.

> [!NOTE]
> Formula: `[(v16.4.0 avgresp - v16.4.1 avgresp) / v16.4.0 avgresp] = % improvement`
> Result: `(0.48 - 0.48) / 0.48 = 0`

**PostgreSQL Containers:** Clarity Release 16.4.1 performs similar to the previous release on similar hardware comparing the same counters.

> [!NOTE]
> Formula: `[(v16.4.0 avgresp - v16.4.1 avgresp) / v16.4.0 avgresp] = % improvement`
> Result: `(0.45 - 0.45) / 0.45 = 0.00`

### Database Performance Comparison by Release

#### Total Average Response Time

The following table shows the total average response times:

| Functional Area | 16.4.0 Oracle | 16.4.1 Oracle | 16.4.0 MSSQL | 16.4.1 MSSQL | 16.4.0 PostgreSQL |
|---|---|---|---|---|---|
| Total Avg Response time | 0.4 | 0.41 | 0.98 | 0.96 | 0.48 |

#### Comparison by Functional Area

The following table shows the average response times by the major functional areas. (Increase in numbers may be due to addition of new scripts or re-grouping the scripts.)

| Functional Area | 16.4.0 Oracle | 16.4.1 Oracle | 16.4.0 MSSQL | 16.4.1 MSSQL |
|---|---|---|---|---|
| Agreements | 1.67 | 0.46 | 1.45 | 1.31 |
| Blueprints | 0.52 | 0.59 | 1.79 | 1.79 |
| Financial Management | 0.76 | 1.06 | 1.02 | 1.17 |
| General Navigation | 0.24 | 0.25 | 0.45 | 0.42 |
| Hierarchies | 1.07 | 1.49 | 5.03 | 6.55 |
| OBA/Custom Investments | 1.75 | 2.18 | 3.14 | 2.69 |
| Portfolio Management | 0.25 | 0.26 | 0.34 | 0.33 |
| Project Management | 0.80 | 0.89 | 2.62 | 1.95 |
| Resource Management | 1.37 | 1.87 | 7.40 | 8.39 |
| Roadmaps | 0.69 | 0.83 | 1.88 | 1.71 |
| Timesheets and Approvals | 0.49 | 0.59 | 1.82 | 2.96 |
| To Dos | 2.36 | 2.69 | 7.31 | 8.14 |

#### Comparison by Response Time

The following charts compare the response times for the two releases (shorter bars are better):
- Oracle
- MS SQL
- PostgreSQL (SaaS)
- PostgreSQL (Container + PPM Broker)

### Database Performance Test Environment

Load tests with 2,450 concurrent users are run. All tests are written and executed using JMeter v4.0. Each virtual user simulates one real user actively and repeatedly clicking through a given scenario. Wait times reflect only interaction delays (for example, completing a form before clicking Submit), not idleness and task interruption. The background server ran all jobs, reports, and processes to completion prior to the start of the performance test.

For the load tests, two application servers and one background server were used, each on their own hardware server.

#### Application and Background Server Software
- **OS:** ROCKY Linux 9.3
- **Java:** AdoptOpenJDK 17.0.17+10
- **App:** Tomcat 9.0.113

#### Application Server JVM Memory Parameters
- `Xms1024m`
- `Xmx6144m`

#### Oracle Database Server Software
- **OS:** ROCKY Linux 9.3
- **DB:** Oracle 19.29.0.0.251021 (with `optimizer_features_enable` value `19.1.0` string type)

#### MS SQL Server Software
- **OS:** ROCKY Linux 9.3
- **DB:** SQL Server 2022 64-bit CU22 (16.0.4225.2)

#### PostgreSQL Database Server Software
- **OS:** ROCKY Linux 9.3
- **DB:** PostgreSQL 16.4

#### Application and Background Server Hardware
- **CPU:** AMD EPYC 7B12 @ 2.20 GHz
- CPU(s): 8
- Core(s) per socket: 2
- Socket(s): 4
- **RAM:** 16 GB

#### Database Server Hardware

| Component | Oracle | MSSQL | PostgreSQL |
|---|---|---|---|
| **CPU** | AMD EPYC 7B12 @ 2.20 GHz | AMD EPYC 7B12 @ 2.20 GHz | AMD EPYC 7B12 @ 2.20 GHz |
| **CPU(s)** | 32 | 32 | 32 |
| **Core(s) per socket** | 16 | 16 | 16 |
| **Socket(s)** | 2 | 2 | 2 |
| **RAM** | 120 GB | 120 GB | 120 GB |

#### MS SQL Parameters

| Parameter | Value |
|---|---|
| System Memory | 120 GB |
| Processors | 32 |
| Min Server Memory | 5 GB |
| Max Server Memory | 100 GB |
| Max Worker Threads | 10000 |
| Cost Threshold for Parallelism | 50 |
| Max Degree of Parallelism | 0 (unlimited) |
| Connection Timeout | 0 (no timeout) |
| Max Number of Concurrent Connections | 0 (unlimited) |

### Database Size Details

#### Oracle

| Entity | Count |
|---|---|
| Projects | 20,313 |
| Resources | 55,526 |
| Teams | 457,370 |
| Assignments | 5,125,685 |
| Tasks | 1,478,406 |

#### MSSQL

| Entity | Count |
|---|---|
| Projects | 14,726 |
| Resources | 47,448 |
| Teams | 314,368 |
| Assignments | 961,123 |
| Tasks | 707,460 |
| Timesheets | 2,514 |

#### PostgreSQL (SaaS)

| Entity | Count |
|---|---|
| Projects | 20,478 |
| Resources | 55,601 |
| Teams | 458,462 |
| Assignments | 5,127,325 |
| Tasks | 1,477,049 |
| Timesheets | 1,045,767 |
| Timesheet Entries | 2,002,141 |
| DB Size | 2.5 GB |

### Database and App Server Performance Graphs
- App and Background Server CPU Utilization (Oracle)
- App and Background Server CPU Utilization (MSSQL)
- App and Background Server CPU Utilization (PostgreSQL SaaS)
- App and Background Server CPU Utilization on Containers (PostgreSQL)
- Broker CPU Utilization on Containers (PostgreSQL)
- DB Server CPU Utilization (Oracle) - The following graph displays the sum of CPU utilization over all CPUs (not the average).
- DB Server CPU Utilization (MSSQL) - The following graph displays the sum of CPU utilization over all CPUs (not the average).
- DB Server CPU Utilization (PostgreSQL) - The following graph displays the sum of CPU utilization over all CPUs (not the average).
- DB Server CPU Utilization (PostgreSQL - Containers + PPM Broker) - The following graph displays the sum of CPU utilization over all CPUs (not the average).

#### Heap Usage

The following graphs show the JVM heap usage during and after the load test for the application servers as well as the BG server:
- Oracle
- MSSQL
- PostgreSQL (SaaS)
- PostgreSQL (Containers)
- PPM Broker (PostgreSQL)

## Database Performance Use Cases

The same use cases apply to both Oracle, MS SQL, and PostgreSQL environments. Each functional area consists of the following use cases:

| Use Case | Project Management | Resource Management | Financial Management | General Navigation | Timesheets and Approvals | Portfolio |
|---|---|---|---|---|---|---|
| 1 | X | | | | | |
| 2 | | | X | | | |
| 3 | | | X | | | |
| 4 | | | X | | | |
| 5 | | | X | | | |
| 6 | | | X | | | |
| 7 | X | | | | | |
| 8 | X | | | | | |
| 9 | X | | | | | |
| 10 | X | | | | | |
| 11 | | | | X | | |
| 12 | | X | | | | |
| 13 | X | | | | | |
| 14 | | | X | | | |
| 15 | | | | | X | |
| 16 | | | | | | X |
| 17 | | | | | | X |
| 18 | | X | | | | |
| 19 | | X | | | | |
| 20 | | X | | | | |
| 21 | | X | | | | |
| 22 | X | | | | | |
| 23 | X | | | | | |
| 24 | X | | | | | |
| 25 | X | | | | | |
| 26 | | | | | X | |
| 27 | X | | | | | |
| 28 | | | X | | | |
| 29 | X | | | | | |
| 30 | | | | | X | |
| 32 | X | | | | | |
| 33 | X | | | | | |
| 34 | | | X | | | |
| 35 | | X | | | | |
| 36 | | | | X | | |
| 37 | | X | | | | |
| 38 | X | X | | | | |
| 39 | X | | | | | |
| 40 | X | | | | | |
| 41 | | | | | X | |
| 42 | X | | | | | |
| 43 | X | | | | | |
| 44 | X | X | | | | |
| 45 | | X | | | | |
| 46 | X | | | | | |
| 47 | X | | | | | |
| 48 | | | | | X | |
| 49 | X | | | | | |
| 50 | X | X | | | | |
| 51 | X | | | | | |
| 52 | X | | | | | |
| 53 | X | | | | | |
| 54 | | X | | | | |
| 55 | | X | | | | |
| 56 | X | X | | | | |
| 57 | X | | | | | |
| 58 | X | | | | | |
| 59 | X | | | | | |

### Use Cases: Detailed Steps

> [!IMPORTANT]
> There is a waiting time of 5 seconds for each step in Clarity test cases.
- Use Case 1: Administration - All Page Script (Classic)
- Use Case 2: PM Financial Planning (View and Edit Cost Plan) (Classic)
- Use Case 3: PM Financial Planning (Cost Plan 2) (Classic)
- Use Case 4: PM Financial Planning (Cost Plan 3) (Classic)
- Use Case 5: PM Financial Planning (Cost Plan 4) (Classic)
- Use Case 6: PM Financial Planning (Cost Plan 5) (Classic)
- Use Case 7: Gantt Toolbar (Classic)
- Use Case 8: Gantt WBS List (Classic)
- Use Case 9: Interactive Gantt Chart (Classic)
- Use Case 10: Auto-Schedule (Classic)
- Use Case 11: General UI Behavior (Classic)
- Use Case 12: Departments (Classic)
- Use Case 13: Navigator - All Page Script (Classic)
- Use Case 14: PM Rate Matrix (Classic)
- Use Case 15: Approve Timesheet (Classic)
- Use Case 16: New Portfolio (Classic)
- Use Case 17: New Portfolio (Classic)
- Use Case 18: PM Resource Management: Working with resources (Classic)
- Use Case 19: PM Resource Management: Hard book and staff a resource to an investment
- Use Case 20: PM Resource Management: Request a role from the ItoR view - View data in the RtoI view
- Use Case 21: PM Role Management: search resources, change booking status, replace allocation
- Use Case 22: Roadmaps
- Use Case 22a: Create and Update Roadmap Items
- Use Case 22b: Create and View Custom Global and Local Picklists
- Use Case 23: Tasks Board
- Use Case 24: Create Projects (Classic)
- Use Case 25: Create Projects
- Use Case 26: Timesheets (Classic)
- Use Case 26: Timesheets (Submit/Approve)
- Use Case 27: PM Projects (Classic)
- Use Case 27: Create Project from Template (Classic)
- Use Case 27: PM Projects - Project Tiles
- Use Case 28: PM Financial Transactions (Classic)
- Use Case 29: Conversations
- Use Case 30: Timesheet Grid, Approve Timesheets
- Use Case 32: Secure Attributes
- Use Case 33: FLS Consumption
- Use Case 34: Idea Financials - TSV aggregate
- Use Case 35: Project Staff - TSV aggregate
- Use Case 36: Navigate to Custom Objects and Sub Sub Objects
- Use Case 37: Resource Management Group By
- Use Case 38: Hierarchies
- Use Case 39: Blueprints - Rule Engine
- Use Case 40: Rule Engine Data Retrieval
- Use Case 41: Retrieve Todos - global and instance rights
- Use Case 42: Status Reports
- Use Case 43: Tasks workspace
- Use Case 44: Custom Investments - Navigate
- Use Case 45: Staffing Grid
- Use Case 46: Global ToDo Widgets
- Use Case 47: Roadmap Widgets
- Use Case 48: Timesheet Widgets
- Use Case 49: ObaStatus Reports
- Use Case 50: Canvas Widgets Hierarchy
- Use Case 51: Agreements
- Use Case 52: Task Bulk Edit
- Use Case 53: Project Rules
- Use Case 54: Staffing Workspace
- Use Case 55: Staffing Custom API's
- Use Case 56: Oba Investments
- Use Case 57: Project Nested Grids
- Use Case 59: Project Rules - Grant Revoke Rights

---

#### Use Case 1: Administration - All Page Script (Classic)

1. **Organization and Access** (Wait 2 seconds)
   a. **Resources**
- Select resource (Wait 2 seconds)
   b. **OBS and Partitions** (Wait 2 seconds)
   c. **Groups** (Wait 2 seconds)
- Add (Wait 2 seconds)
- Back (Wait 2 seconds)
   d. **Resource's Access Rights - global** (Wait 2 seconds)
- Add (Wait 2 seconds)
- Back (Wait 2 seconds)
   e. **Access to this resource - Full view** (Wait 2 seconds)
- Continue (Wait 2 seconds)
- Add (Wait 2 seconds)
- Exit (Wait 2 seconds)
   f. **Access to this resource - group** (Wait 2 seconds)
- Add (Wait 2 seconds)
- Exit (Wait 2 seconds)
   g. **Access to this resource - OBS unit** (Wait 2 seconds)
- Add (Wait 2 seconds)
- Exit
   h. **Groups** (Wait 2 seconds)
   i. **Select group** (Wait 2 seconds)
- **Resources** (Wait 2 seconds)
- Add (Wait 2 seconds)
- Back (Wait 2 seconds)
- **Group Access Rights - Instance** (Wait 2 seconds)
- Add (Wait 2 seconds)
- Back (Wait 2 seconds)
- **Group Access Rights - OBS Unit** (Wait 2 seconds)
- Add (Wait 2 seconds)
- Exit (Wait 2 seconds)
- **Group Access Rights - Global** (Wait 2 seconds)
- Add (Wait 2 seconds)
- Back (Wait 2 seconds)
   j. **OBS** (Wait 2 seconds)
- New (Wait 2 seconds)
- Back (Wait 2 seconds)

2. **Studio**
   a. **Objects** (Wait 2 seconds)
- Select **Project** (Wait 2 seconds)
- **Attributes** (Wait 2 seconds) - Select one (Wait 2 seconds), Back (Wait 2 seconds), New attribute (Wait 2 seconds), Back (Wait 2 seconds)
- **Linking** (Wait 2 seconds) - Select one (Wait 2 seconds), Back (Wait 2 seconds), New (Wait 2 seconds), Back (Wait 2 seconds)
- **Actions** (Wait 2 seconds) - Select one (Wait 2 seconds), Close (Wait 2 seconds), New (Wait 2 seconds), Close (Wait 2 seconds)
- **Views** (Wait 2 seconds)
- **Audit Trail** (Wait 2 seconds)
- Access To This Object (Wait 2 seconds): Full View (Wait 2 seconds), Resource (Wait 2 seconds), Group (Wait 2 seconds), OBS Unit (Wait 2 seconds)
   b. **Queries** (Wait 2 seconds) - New (Wait 2 seconds), Back (Wait 2 seconds)
   c. **Portlets** (Wait 2 seconds)
- Select One: Access To This Portlet - Full View (Wait 2 seconds), Resource (Wait 2 seconds), Group (Wait 2 seconds), OBS Unit (Wait 2 seconds), Properties (Wait 2 seconds), Back (Wait 2 seconds)
- New: Chart Portlet (Wait 4 seconds over 2 requests), Grid Portlet (Wait 4 seconds over 2 requests), Filter Portlet (Wait 4 seconds over 2 requests), HTML Portlet (Wait 4 seconds over 2 requests), Interactive Portlet (Wait 4 seconds over 2 requests)
   d. **Portlet Pages** (Wait 2 seconds)
- Select one (Wait 2 seconds): Link Parameters (Wait 2 seconds) - New (Wait 2 seconds), Back (Wait 2 seconds); Tabs (Wait 2 seconds) - New (Wait 2 seconds), Back (Wait 2 seconds); Access To This Object (Wait 2 seconds) - Back (Wait 2 seconds), New, Back
   e. **Add-Ins** (Wait 2 seconds)
   f. **UI Themes** (Wait 2 seconds)
   g. **Views** (Wait 2 seconds) - Select one (Wait 2 seconds), Exit (Wait 2 seconds)

3. **Data Administration**
   a. **Time Slices** (Wait 2 seconds) - Select one (Wait 2 seconds), Back (Wait 2 seconds); New (Wait 2 seconds), Back (Wait 2 seconds)
   b. **Lookups** (Wait 2 seconds) - Select one (Wait 2 seconds): Parent Window (Wait 2 seconds), Values (Wait 2 seconds) - Select one (Wait 2 seconds), Back (Wait 2 seconds); Auto Suggest (Wait 2 seconds), Back; General (Wait 2 seconds), Back (Wait 2 seconds); New (Wait 2 seconds), Back (Wait 2 seconds)
   c. **Reports and Jobs** (Wait 2 seconds) - Select one: Parameters (Wait 2 seconds) - Access one (Wait 2 seconds), Back (Wait 2 seconds); Parameter order (Wait 2 seconds); Incompatible Jobs (Wait 2 seconds) - Add (Wait 2 seconds), Back (Wait 2 seconds); Associated Categories (Wait 2 seconds) - Add (Wait 2 seconds), Back (Wait 2 seconds); Access to this Job (Wait 2 seconds) - Full View (Wait 2 seconds), Resource (Wait 2 seconds), Group (Wait 2 seconds), OBS Unit (Wait 2 seconds)
   d. **Skills Hierarchy** (Wait 2 seconds) - New (Wait 2 seconds), Back (Wait 2 seconds)
   e. **Notifications** (Wait 2 seconds) - Select one (Wait 2 seconds), Cancel (Wait 2 seconds)

4. **Project Management**
   a. **Timesheet Options** (Wait 2 seconds)
   b. **Time Reporting Periods** (Wait 2 seconds) - New (Wait 2 seconds), Back (Wait 2 seconds)
   c. **Charge Codes** (Wait 2 seconds) - New (Wait 2 seconds), Back (Wait 2 seconds)
   d. **Input Type Codes** (Wait 2 seconds) - New (Wait 2 seconds), Back (Wait 2 seconds)
   e. **Settings** (Wait 2 seconds)
   f. **Base Calendars** (Wait 2 seconds) - New (Wait 2 seconds), Close (Wait 2 seconds)
   g. **Migrate Methods** (Wait 2 seconds)
   h. **Risk Settings** (Wait 2 seconds)

5. **General Settings**
   a. **System Options** (Wait 2 seconds)
   b. **Site Links** (Wait 2 seconds) - New (Wait 2 seconds), Back (Wait 2 seconds)
   c. **Client Downloads** (Wait 2 seconds)

#### Use Case 2: PM Financial Planning (View and Edit Cost Plan) (Classic)

1. View Cost Plan list page with 500 rows of cost plans. Wait 60 seconds divided over 6 requests.
2. Open the detail of an existing Cost Plan. Wait 10 seconds.
3. Update cost plan by repopulating and adding 4 additional detail rows. Wait 60 seconds divided over 6 requests.
4. Auto-addition of 3 rows by re-populate and manual addition of 1 row. Repeat for both re-populate types. Wait 120 seconds divided over 12 requests.
5. View Benefit Plan list page (15 benefit plans). Wait 50 seconds over 5 requests.

#### Use Case 3: PM Financial Planning (Cost Plan 2) (Classic)

1. Create Cost Plan (Two grouping attributes) and add a cost plan detail row. Wait 235 seconds over 24 requests.

#### Use Case 4: PM Financial Planning (Cost Plan 3) (Classic)

1. Create Cost Plan from Investment Team (Project duration 1 year, # of team members = 15, FTP type - Monthly). Wait 27 seconds over 20 requests.

#### Use Case 5: PM Financial Planning (Cost Plan 4) (Classic)

1. Create Cost Plan from Task Assignments (Project duration 1 year, # of task assignments = 15, FTP type - Monthly) and open Benefit Plans page. Wait 90 seconds over 14 requests.

#### Use Case 6: PM Financial Planning (Cost Plan 5) (Classic)

1. Log in. Wait 5 seconds.
2. Click on **Projects** link. Wait 5 seconds.
3. Expand the Projects filter. Wait 5 seconds.
4. Filter for Project. Wait 5 seconds.
5. Open Project. Wait 5 seconds.
6. Click on **Financial Plans** tab. Wait 5 seconds.
7. Click on **New Cost Plan from Investment Team**. Wait 5 seconds.
8. Select Grouping Attributes. Wait 5 seconds.
9. Click **Save** for new Cost Plan from Investment Team. Wait 5 seconds.
10. Go to Cost Plan Detail 1. Wait 5 seconds.
11. Click **Return** for Cost Plan Detail 1. Wait 5 seconds.
12. Click **New Cost Plan from Task Assignments**. Wait 5 seconds.
13. Select Grouping Attributes 2. Wait 5 seconds.
14. Click **Save** for New Cost Plan from Task Assignments. Wait 5 seconds.
15. Go to Cost Plan Detail 2. Wait 5 seconds.
16. Click **Return** for Cost Plan Detail 2. Wait 5 seconds.
17. Filter for New Cost Plan 1. Wait 5 seconds.
18. Open New Cost Plan 1. Wait 5 seconds.
19. Select **Populate from Task Assignments**. Wait 5 seconds.
20. Click **Return** for Cost Plan 3. Wait 5 seconds.
21. Filter for New Cost Plan 2. Wait 5 seconds.
22. Open New Cost Plan 2. Wait 5 seconds.
23. Click **Populate From Investment Team**. Wait 5 seconds.
24. Click **Return** for Cost Plan 4. Wait 5 seconds.
25. Click **Project Properties**. Wait 5 seconds.
26. Click **Return** for Projects. Wait 5 seconds.
27. Log out of the application.

#### Use Case 7: Gantt Toolbar (Classic)

1. Open Clarity Login page. Wait 10 seconds.
2. Log in to the application with user having Project create access rights. Wait 5 seconds.
3. Click on **Home** > **Portfolio Management** > **Project** link. Wait 10 seconds.
4. Click on the Filter project (+) icon. Wait 5 seconds.
5. Filter for a project (with a min of 2000+ tasks associated to it). Wait 5 seconds.
6. Click on filtered Project link to open project properties page. Wait 5 seconds.
7. Click on **Task** tab. Wait 5 seconds.
8. Click on **Gantt** link under Tasks tab. Wait 5 seconds.
9. Click on **Create New Task** Icon on Gantt page. Wait 10 seconds.
10. Enter the task name as task-I and fill other required fields to create task, then click **Submit and Create New** button. Wait 10 seconds.
11. Enter the task name as task-II and fill other required fields, click **Submit and Create New**. Wait 10 seconds.
12. Enter the task name as task-III, click **Submit and Create New**. Wait 10 seconds.
13. Enter the task name as task-IV, click **Submit and Create New**. Wait 10 seconds.
14. Enter the task name as task-V, click **Submit and Create New**. Wait 10 seconds.
15. Enter the task name as task-VI, click **Submit and Create New**. Wait 10 seconds.
16. Enter the task name as task-VII, click **Submit and Create New**. Wait 10 seconds.
17. Enter the task name as task-VIII, click **Submit and Create New**. Wait 10 seconds.
18. Enter the task name as task-IX, click **Submit and Create New**. Wait 10 seconds.
19. Enter the task name as task-X, click **Save** button. Wait 10 seconds.
20. Click on filter Icon, enter the task name as `task` and click **Filter** button. Verify above tasks are available under search results. Wait 6 seconds.
21. Click on **Copy Task from Template** Icon on Gantt page. Wait 10 seconds.
22. Click on Filter Project Icon (+). Wait 5 seconds.
23. Filter for a project (with a min of 15+ resources and 80+ tasks). Wait 5 seconds.
24. Select the filtered project and click **Next** button. Wait 5 seconds.
25. Click on + button to expand tasks. Wait 6 seconds.
26. Select the tasks and click **Copy** button to copy tasks from template. Wait 6 seconds.
27. Click on **Add Existing SubProject** Icon on Gantt page. Wait 6 seconds.
28. Click on Filter Project Icon (+). Wait 10 seconds.
29. Filter for a project with a minimum of 15 resources and 80 tasks. Wait 5 seconds.
30. Select the filtered project and click **Add** button to add subproject. Wait 5 seconds.
31. Click on **Create New Project** icon on Gantt page. Wait 15 seconds.
32. Enter the required fields to create project and click **Save and Return** button. Wait 5 seconds.
33. Filter for the created project. Wait 5 seconds.
34. Select the filtered project and click **Assign Resources** icon. Wait 5 seconds.
35. Filter a dev role Resource. Wait 37 seconds.
36. Select the filtered resource and click **Assign** button. Wait 10 seconds.
37. On Gantt page, select 3 tasks and click **Indent** icon. Wait 5 seconds.
38. Click on expand button (+) of task having three indent tasks. Wait 5 seconds.
39. Select 2 tasks and click **Indent** icon. Wait 5 seconds.
40. Click on expand button (+) of task having two indent tasks. Wait 5 seconds.
41. Select one task and click **Indent** icon. Wait 10 seconds.
42. Click on expand button (+) of task having one indent task. Wait 10 seconds.
43. Select three top level tasks and click **Indent** icon. Wait 10 seconds.
44. Click on expand button (+) of task having three indent tasks. Wait 5 seconds.
45. Select above three indent tasks and click **Outdent** tasks. Wait 5 seconds.
46. Select a task and click **Move task** icon on Gantt page. Wait 5 seconds.
47. Click on **Insert Before** or **Insert After** buttons to move task to a particular place. Wait 5 seconds.
48. Select three tasks and click **Link** icon. Wait 10 seconds.
49. Select same three tasks which are linked and click **Unlink** icon. Wait 10 seconds.
50. Click on start date or finish date of task. Wait 5 seconds.
51. Edit start date or finish date of Task-I. Wait 10 seconds.
52. Edit start date or finish date of Task-II. Wait 10 seconds.
53. Edit start date or finish date of Task-III. Wait 10 seconds.
54. Edit start date or finish date of Task-IV. Wait 10 seconds.
55. Edit start date or finish date of Task-V. Wait 5 seconds.
56. Click on **Save** icon to save above changes for dates. Wait 5 seconds.
57. On Gantt page, click **Create Baseline** icon. Wait 10 seconds.
58. Enter the required fields to create baseline and click **Save** button. Wait 10 seconds.
59. Select five tasks and click **Update Task Baseline** icon. Wait 10 seconds.
60. Click **Yes** button to confirm update task baseline for tasks. Wait 10 seconds.
61. Select ten tasks and click **Delete** (x) icon. Wait 10 seconds.
62. Select three tasks and click **Delete** (x) icon. Wait 5 seconds.
63. Click on filter icon and click **Show all** button to show all 2000+ tasks. Wait 5 seconds.
64. Click on **Expand all** (+) icon. Wait 5 seconds.
65. Click on **Collapse all** (-) icon. Wait 5 seconds.
66. Log out.

#### Use Case 8: Gantt WBS List (Classic)

1. Open Clarity Login page. Wait 5 seconds.
2. Log in to the application with user having Project create access rights. Wait 5 seconds.
3. Click on **Home** > **Portfolio Management** > **Project** link. Wait 5 seconds.
4. Click on the Filter project (+) icon. Wait 5 seconds.
5. Filter for a project (with a min of 2000+ tasks associated to it). Wait 5 seconds.
6. Click on filtered Project link to open project properties page. Wait 5 seconds.
7. Click on **Task** tab. Wait 5 seconds.
8. Click on **Gantt** link under Tasks tab. Wait 5 seconds.
9. Select first task and click on Start date on Gantt page. Wait 5 seconds.
10. Edit Start date and finish date of first task. Wait 5 seconds.
11. Click on **Save** button to save dates for first task. Wait 5 seconds.
12. Edit start date and finish date of first task (Row no 1). Wait 5 seconds.
13. Edit start date and finish date of second task (Row no 2). Wait 5 seconds.
14. Edit start date and finish date of third task (Row no 3). Wait 5 seconds.
15. Edit start date and finish date of fourth task (Row no 4). Wait 5 seconds.
16. Edit start date and finish date of fifth task (Row no 5). Wait 5 seconds.
17. Edit start date and finish date of sixth task (Row no 6). Wait 5 seconds.
18. Edit start date and finish date of seventh task (Row no 7). Wait 5 seconds.
19. Edit start date and finish date of eighth task (Row no 8). Wait 5 seconds.
20. Edit start date and finish date of ninth task (Row no 9). Wait 5 seconds.
21. Edit start date and finish date of tenth task (Row no 10). Wait 5 seconds.
22. Edit start date and finish date of eleventh task (Row no 11). Wait 5 seconds.
23. Edit start date and finish date of twelfth task (Row no 12). Wait 5 seconds.
24. Edit start date and finish date of thirteenth task (Row no 13). Wait 5 seconds.
25. Edit start date and finish date of fourteenth task (Row no 14). Wait 5 seconds.
26. Edit start date and finish date of fifteenth task (Row no 15). Wait 5 seconds.
27. Edit start date and finish date of sixteenth task (Row no 16). Wait 5 seconds.
28. Edit start date and finish date of seventeenth task (Row no 17). Wait 5 seconds.
29. Edit start date and finish date of eighteenth task (Row no 18). Wait 5 seconds.
30. Edit start date and finish date of nineteenth task (Row no 19). Wait 5 seconds.
31. Edit start date and finish date of twentieth task (Row no 20). Wait 5 seconds.
32. Click on **Save** button to save all twenty changes and check the time taken for saving. Wait 5 seconds.
33. Select a task and click on Insert key/button on keyboard; a new row will be inserted under tasks to edit. Wait 5 seconds.
34. Enter task name, start date, and finish date. Wait 5 seconds.
35. Click on **Save** button on Gantt page. Wait 5 seconds.
36. Select a task, drag and drop into a new position (from top to bottom of the page). Wait 5 seconds.
37. Select a task, drag and drop into a new position (causing the list to scroll). Wait 5 seconds.
38. Click on scroll up to go to starting point of task. Wait 5 seconds.
39-57. Scroll down through the page to fetch next 100 records (repeat 19 times, I through XIX). Wait 5 seconds each.
58. Click on Filter icon, enter the task name (which has 4 levels of nested tasks) and click **Filter** button. Wait 5 seconds.
59. Click on the Expand (+) button of 4-level nested task which is filtered. Wait 5 seconds.
60. Click on the Expand (+) button for next 3 levels of nested task. Wait 5 seconds.
61. Click on the Expand (+) button for next 2 levels of nested task. Wait 5 seconds.
62. Click on the Expand (+) button for next 1 level of nested task. Wait 5 seconds.
63. Click on Filter (+) icon, enter a task name (which has no resources assigned) and click **Filter** button. Wait 5 seconds.
64. Select the task and click on the resources field. Wait 5 seconds.
65. Inline edit, enter resource name with dev role resource and select the resource to add to task. Wait 5 seconds.
66. Inline edit, enter resource name with QA role resource and select the resource to add to task. Wait 5 seconds.
67. Inline edit, enter resource name with lead role resource and select the resource to add to task. Wait 5 seconds.
68. Click on **Save** button to assign resources to task. Wait 5 seconds.
69. Click on Filter icon, select the check box for **List View** and click **Filter** button. Wait 5 seconds.
70. Click on Filter icon, enter the resource name under **Assigned to Resources** field and click **Filter** button. Wait 5 seconds.
71. Click on Filter (+) icon, enter the subproject name under **Task name** field and click **Filter** button. Wait 5 seconds.
72. Open Subproject which is filtered above; this opens a separate Gantt editing session. Wait 5 seconds.
73. Click on the task start date field. Wait 5 seconds.
74. Edit Start date of the task. Wait 5 seconds.
75. Edit Finish date of the task. Wait 5 seconds.
76. Click on **Save** button to save start and finish dates of task. Wait 5 seconds.
77. Close the subproject Gantt window. Wait 5 seconds.
78. Click on **Refresh** icon of master project. Wait 5 seconds.
79. Click on Expand (+) button of Subproject to check the dates of task. Wait 5 seconds.
80. Close Gantt window and Log out.

#### Use Case 9: Interactive Gantt Chart (Classic)

1. Open Clarity Login page. Wait 5 seconds.
2. Log in to the application with user having Project management access rights. Wait 5 seconds.
3. Click on **Home** > **Portfolio Management** > **Project** link. Wait 5 seconds.
4. Filter for a project (with a min of 10+ tasks). Wait 5 seconds.
5. Click on Project link to open project properties page. Wait 5 seconds.
6. Click on **Task** tab. Wait 17 seconds.
7. Click on **Gantt** link under Tasks tab. Wait 5 seconds.
8. On Gantt page, under Timescale section locate finish date of Gantt task bar. Wait 26 seconds.
9. Use Gantt task bar (drag to change), change finish date. Wait 5 seconds.
10. Click on **Save** button. Wait 27 seconds.
11. Use Gantt task bar (drag to change) change start date. Wait 23 seconds.
12. Click on **Save** button. Wait 36 seconds.
13. Use Gantt task bar (drag to change) move entire task to later dates. Wait 23 seconds.
14. Click on **Save** button. Wait 5 seconds.
15. Change timescale value (Random selection for each iteration to Days, Weeks, Month, Quarters, and Years) on the Gantt chart using the toolbar widget. Wait 32 seconds.
16. Move Gantt time periods forward one column by clicking **Next Period** (>) Icon. Wait 28 seconds.
17. Move Gantt timescale forward one set of time periods by clicking **Next 12 Periods** (>>) Icon. Wait 5 seconds.
18. Click on **Save** button to save the changes. Wait 42 seconds.
19. Link two tasks using drag and drop for Finish date of first task to Start date of second task (creates a dependency). Wait 29 seconds.
20. Link two tasks using drag and drop for Start date of first task to Start date of second task (creates a dependency). Wait 21 seconds.
21. Unlink above two tasks dependencies by selecting the tasks and click **Unlink** button. Wait 27 seconds.
22. Log out.

#### Use Case 10: Auto-Schedule (Classic)

1. Open Clarity Login page. Wait 5 seconds.
2. Log in with user having Project management access rights. Wait 5 seconds.
3. Click on **Home** > **Portfolio Management** > **Project** link. Wait 5 seconds.
4. Filter for a project (with a min of 15 resources and 50+ tasks). Wait 5 seconds.
5. Click on Project link to open project properties page. Wait 5 seconds.
6. Click on **Unlock project** button, if project is locked. Wait 5 seconds.
7. Click on **Task** tab. Wait 5 seconds.
8. Click on **Gantt** link under Tasks tab. Wait 5 seconds.
9. Click on **Autoschedule with Options** > **Create Tentative Schedule**. Wait 15 seconds.
10. Edit Start date and Finish date. Wait 5 seconds.
11. Click **Submit** button. Wait 15 seconds.
12. Click on **Autoschedule with Options** > **Publish tentative schedule**. Wait 5 seconds.
13. Click **Yes** button to publish tentative schedule. Wait 5 seconds.
14. Click on **Autoschedule with Options** icon. Wait 5 seconds.
15. Click on **Autoschedule** button. Wait 5 seconds.
16. Click on **Autoschedule with Options** > **Delete Tentative Schedule**. Wait 5 seconds.
17. Click **Yes** button to Delete tentative schedule. Wait 10 seconds.
18. Log out.

#### Use Case 11: General UI Behavior (Classic)

1. Page refresh on Project List page that is configured to list 50 projects per page. Wait 70 seconds over 6 requests.
2. Drill-down on a project, and click on the **Team** tab and **Detail** subtab. Wait 28 seconds over 3 requests.
3. Add a new TSV column in Detail page. Wait 83 seconds over 7 requests.
4. Replace Assignment Roles. Wait 20 seconds over 2 requests.
5. Select a Capacity Planning scenario from the **Team** tab. Wait 40 seconds over 2 requests.
6. Edit team member start date, team member finish date, and allocation for at least 5 team members in this scenario, then click **Save**. Wait 42 seconds over 6 requests.
7. Switch back to Plan of Record. Wait 10 seconds.

#### Use Case 12: Departments (Classic)

1. Navigator. Wait 15 seconds over 2 requests.
2. Departments (show 50 departments with 9 columns). Wait 5 seconds.
3. Select department. Wait 5 seconds.
4. Select resources. Wait 5 seconds.
5. Select investments. Wait 5 seconds.

#### Use Case 13: Navigator - All Page Script (Classic)

1. **Overview** (Wait 20 seconds over 3 requests)
2. **General** (Wait 5 seconds)
3. **Organizer** (Wait 5 seconds) - Tasks (Wait 5 seconds), Calendar (Wait 5 seconds), Process (Wait 5 seconds), Notifications (Wait 5 seconds)
4. **Dashboards** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
5. **Portlets** (Wait 5 seconds)
6. **Chart** (Wait 5 seconds) - Select one: Select Graph and Next (Wait 5 seconds), Back (Wait 5 seconds)
7. **Grid** (Wait 5 seconds) - Select one (Wait 5 seconds), Cancel (Wait 5 seconds)
8. **Filter** (Wait 5 seconds) - Cancel (Wait 5 seconds)
9. **Interactive** (Wait 5 seconds) - Cancel (Wait 5 seconds)
10. **Timesheets** (Wait 5 seconds)
11. **Reports and jobs** (Wait 5 seconds) - Jobs (Wait 5 seconds), Reports (Wait 5 seconds)
12. **Account settings** (Wait 5 seconds) - Proxy (Wait 5 seconds), Notifications (Wait 5 seconds), Software downloads (Wait 5 seconds), Personal information (Wait 5 seconds)
13. **Organization**
14. **Departments** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
15. **Knowledge Store** (Wait 5 seconds)
16. **IT Service Management** (Wait 5 seconds)
17. **Services** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
18. **Requirements Planning**
19. **Release Planning** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
20. **Releases** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
21. **Requirements** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
22. **Portfolios** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
23. **Projects** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
24. **New from template** (Wait 5 seconds) - Cancel
25. **Select project** (Wait 5 seconds):
- Dashboard (Wait 5 seconds)
- Team (Wait 5 seconds): Detail (Wait 5 seconds), Role Capacity (Wait 5 seconds), Participants (Wait 5 seconds), Participant Groups (Wait 5 seconds), Requisitions (Wait 5 seconds), Staff (Wait 5 seconds)
- Task (Wait 5 seconds): Task List (Wait 5 seconds), Assignments (Wait 5 seconds)
- Chargebacks (Wait 5 seconds): Options (Wait 5 seconds), Transactions (Wait 5 seconds), Debit Rules (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
- Processes (Wait 5 seconds)
- Properties (Wait 5 seconds) - Cancel (Wait 5 seconds)
26. **Programs** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
27. **Products** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
28. **Other Work** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds)
29. **Demand Management** (Wait 5 seconds) - Ideas (Wait 5 seconds), New (Wait 5 seconds), Cancel (Wait 5 seconds), Incidents (Wait 5 seconds)
30. **Resource Management** (Wait 5 seconds)
31. **Resources** (Wait 5 seconds) - New (Wait 5 seconds), Cancel (Wait 5 seconds); Select one (Wait 5 seconds); Skills (Wait 5 seconds) - Add (Wait 5 seconds), Back (Wait 5 seconds); Allocations (Wait 5 seconds) - Add (Wait 5 seconds), Back (Wait 5 seconds); Document Manager (Wait 5 seconds)
32. **Resource planning** (Wait 5 seconds) - Allocations (Wait 5 seconds), Capacity (Wait 5 seconds), Investments (Wait 5 seconds), Workloads (Wait 5 seconds)
33. **Resource Finder** (Wait 5 seconds) - Filter (Wait 5 seconds)
34. **Enter Resource ID** (Wait 5 seconds) - Search (Wait 5 seconds), Select one (Wait 5 seconds)
35. **Skills** (Wait 5 seconds) - Add (Wait 5 seconds), Back (Wait 5 seconds)
36. **Allocations** (Wait 5 seconds) - Add (Wait 5 seconds), Back (Wait 5 seconds)
37. **Document Manager Allocations** (Wait 5 seconds)
38. **Calendar** (Wait 5 seconds)
39. **Properties** (Wait 5 seconds) - Cancel (Wait 5 seconds)
40. **Resource Requisitions** (Wait 5 seconds)
41. **Transaction Entry** (Wait 5 seconds) - New (Wait 5 seconds), Transaction Entry (Wait 5 seconds)
42. **Post to WIP** (Wait 5 seconds)
43. **Create WIP Adjustment** (Wait 5 seconds)
44. **Approve WIP Adjustment** (Wait 5 seconds)
45. **Transactions** (Wait 5 seconds)
46. **Invoices** (Wait 5 seconds)

#### Use Case 14: PM Rate Matrix (Classic)

1. Open Rate/Cost Matrix. Wait 10 seconds.
2. Create a new Matrix row properties page (5 assigned columns). Wait 45 seconds over 5 requests.

#### Use Case 15: Approve Timesheet (Classic)

1. Open a Timesheet. Wait 40 seconds over 5 requests.
2. Approve Timesheet. Wait 5 seconds.

#### Use Case 16: New Portfolio (Classic)

1. Log in. Wait 10 seconds over 2 requests.
2. Click on **Portfolios** Link. Wait 5 seconds.
3. Click on **New portfolio** button. Wait 20 seconds.
4. Enter details and click **Save**. Wait 5 seconds.
5. Click on **Manual** link. Wait 20 seconds.
6. Click on **Contents Editor** tab. Wait 10 seconds.
7. Select Projects, Assets, and Applications and click **Include** button. Wait 5 seconds.
8. Click on **Build Power Filter** link for Projects. Wait 5 seconds.
9. Select Description as power filter. Wait 10 seconds.
10. Add Description to power filter. Wait 5 seconds.
11. Click **Evaluate** button to validate the filter. Wait 5 seconds.
12. Click **Save and Return** for Projects power filter. Wait 5 seconds.
13. Click on **Build Power Filter** link for Assets. Wait 5 seconds.
14. Select Description as power filter. Wait 10 seconds.
15. Add Description to power filter. Wait 5 seconds.
16. Click **Evaluate** button to validate the filter. Wait 5 seconds.
17. Click **Save and Return** for Assets power filter. Wait 5 seconds.
18. Click on **Build Power Filter** link for Applications. Wait 5 seconds.
19. Select Description as power filter. Wait 10 seconds.
20. Add Description to power filter. Wait 5 seconds.
21. Click **Evaluate** button to validate the filter. Wait 5 seconds.
22. Click **Save and Return** for Applications power filter. Wait 5 seconds.
23. Click on **Properties** tab. Wait 5 seconds.
24. Click on **Synchronization Schedule** link. Wait 10 seconds.
25. Click on **Sync Now** button. Wait 10 seconds over two requests.
26. Log out of the application.

#### Use Case 17: New Portfolio (Classic)

1. Log in. Wait 10 seconds over two requests.
2. Click on **Portfolios** link. Wait 5 seconds.
3. Expand the filter. Wait 3 seconds.
4. Filter for portfolio. Wait 3 seconds.
5. Open portfolio. Wait 3 seconds.
6. Click on **Plans** tab. Wait 5 seconds.
7. Click on **New** button for new plan. Wait 10 seconds.
8. Enter details and save plan 1. Wait 10 seconds.
9. Select the created plan and click **Copy** button. Wait 10 seconds.
10. Enter details and save plan 2. Wait 5 seconds.
11. Click on **Investments** tab. Wait 5 seconds.
12. Click on **Plans** tab. Wait 5 seconds.
13. Select plan 1 to edit. Wait 10 seconds.
14. Edit and save plan 1. Wait 5 seconds.
15. Click on **Targets** tab. Wait 10 seconds.
16. Select plan 2 to edit. Wait 20 seconds.
17. Edit and save plan 2. Wait 5 seconds.
18. Return to plans list. Wait 5 seconds.
19. Select plans 1 and 2 to delete. Wait 5 seconds.
20. Delete selected plans. Wait 5 seconds.
21. Log out of the application.

#### Use Case 18: PM Resource Management - Working with Resources (Classic)

1. Open Clarity Login page. Wait 10 seconds.
2. Log in with user having Resource management access rights. Wait 5 seconds.
3. Click on **Home** > **Resource Management** > **Resource** link to view the Resource List page. Wait 5 seconds.
4. Filter a resource which is allocated to at least 25 Projects. Wait 5 seconds.
5. Click on the Resource Link to navigate to Resource properties page. Wait 10 seconds.
6. Click on the **Resource Allocations** tab and view data on the Summary page. Wait 5 seconds.
7. Click on **Next Page** Icon to go to Page 2 (assumes rows per page is set to 20). Wait 5 seconds.
8. Click on **Previous Page** Icon to come back to Page 1. Wait 10 seconds.
9. Click on **Allocations - Detail** page (this one has a TSV on it). Wait 10 seconds.
10. Click on **Next Periods** (>) button under Allocation by Period section; advance time periods forward one set of periods. Wait 5 seconds.
11. Click on **Home** > **Resource Management** > **Resource Planning** link. Wait 10 seconds.
12. Click on **Resource Planning** > **Allocations** tab. Wait 5 seconds.
13. Click on **Resource Planning** > **Investments** tab. Wait 5 seconds.
14. Click on **Resource Planning** > **Capacity** tab. Wait 5 seconds.
15. Log out.

#### Use Case 19: PM Resource Management - Hard Book and Staff a Resource

1. Pin 20 resources from the Resources-to-Investments view.
2. Go to the **Pinned** tab to view the pinned resources.
   a. **Expand All** to see all of the investments that are allocated to each team member under the **Pinned** tab.
3. Search for investment name "Vacation".
   a. Expand one of the resources that has the "Vacation" investment.

#### Use Case 20: PM Resource Management - Request a Role from the ItoR View

1. Login as a resource manager and go to the RtoI view.
2. In the telescope, select all of the time periods.
3. Find a resource that is soft booked on the investment and make the resource hard booked for that investment.
4. From within the RtoI view for the investment in step 3, click on a DBA role request to replace with a resource.
   a. Replace role with a resource in the flyout menu.
   b. Click on the **Conversations** tab and enter, "Please let me know if there is anything else you need for staffing your investment."
5. Go to the role request view, click on an Architect role request to replace as a resource.
   a. Replace role with a resource in the flyout menu.
   b. Click on the **Conversations** tab and enter, "Please let me know if there is anything else you need for staffing your investment."

#### Use Case 21: PM Role Management - Search Resources, Change Booking Status, Replace Allocation

1. Go to the ItoR view under **Resource Management**.
2. In the telescope, select all of the time periods.
3. Expand an investment to see all of the resources under an investment.
4. For an investment, add an Architect role.
5. For the record added in step 3, click into row to expand the flyout to update the following:
   a. For each role added, set the **Resource Manager** field to appropriate `rm###_mgr###` user.
   b. Set **Forecast Rate** to $185.
   c. Click on the **Conversations** tab and enter, "Can I get an architect at this rate?"
6. For the Architect roles, set FTE to "1" for the first fiscal period.
7. Copy and paste the value of the first fiscal period to all of the other remaining fiscal periods.
8. In the role request view, select an investment and add a DBA role.
   a. For each role added, set the **Resource Manager** field to appropriate `rm###_mgr###` user.
   b. Set **Forecast Rate** to $175.
   c. When on the DBA role, click on the **Conversations** tab and enter, "I need a person for this role, ASAP."

#### Use Case 22: Roadmaps

##### Use Case 22a: Create and Update Roadmap Items

1. While in the timeline:
   a. Set **SWIMLANE** = Status and **Color** = Type.
   b. Under **Settings**, set **Metrics MVL** to Capacity, Capital Cost, and Operating Cost.
2. Create five roadmap items in the timeline, board, and grid layouts.
   a. Verify that 15 roadmap items are visible in all of the layouts.
3. In the grid layout, set five of the roadmap items to **Compliance** = Does Not Apply.

##### Use Case 22b: Create and View Custom Global and Local Picklists

1. Create a local picklist called "Approved" with values Yes, No.
   a. Set color mapping: Yes = Green, No = Red.
2. In the grid layout, set 10 of the roadmap items to **Approved** = Yes.
3. View in each layout the results when selecting the Compliance and Approved picklists:
   a. Select **Compliance** in the Column/Swimlane picklist on the Board and Timeline respectively. For **Color** picklist, select **Compliance** picklist.
   b. Select **Approved** in the Column/Swimlane picklist on the Board and Timeline respectively. For the **Color** picklist, select **Approved** picklist.

#### Use Case 23: Tasks Board

1. Click on **Tasks** tab and go to the Task List.
2. Create 5 Phases.
3. Create 2 milestones under different parent tasks.
4. Create 10 tasks under various phases.
   a. Add 5 assignments to each task.
5. Create 15 ToDos for each Phase, Milestone, and tasks.
6. For 5 tasks, delete the role and add a resource.
7. Mark 10 tasks completed.
8. Filter on **TYPE** = Task and **STATUS** = Open.
9. Click on the Task Board icon.
   a. Create 10 tasks under the "Incoming" column and an "Owner" for each task and 5 assignments to each task.
   b. Hover over the "Planned" column and click the checkbox to insert a new column.
   c. Drag-n-drop each task created under the "Incoming" column into the column created in the previous bullet.
   d. Create a task conversation for each of the 10 tasks created above.
10. Clear filter parameters.
11. Search for a task in the Search Task text box.
12. All of the steps above should be performed by every team member on a large project to test heavy load.

#### Use Case 24: Create Projects (Classic)

1. Open Clarity Login page. Wait 10 seconds.
2. Log in to the application as a user who has been granted the **Project - Create** access right. Wait 5 seconds.
3. Click **Home**, **Portfolio Management**, **Projects**. Wait 10 seconds.
4. Click **New** button on Project list page. Wait 20 seconds.
5. Enter all required fields to create project and click **Save** button. Wait 10 seconds.
6. Click **Team** tab. Wait 10 seconds.
7. Click **Add** button to add resources to project. Wait 15 seconds.
8. Filter for a Dev role resource to add to this project. Wait 15 seconds.
9. Click **Add and Select More** button to add Dev resources to project. Wait 10 seconds.
10. Filter for a QA role resource to add to this project. Wait 15 seconds.
11. Click **Add and Select More** button to add QA resources to project. Wait 10 seconds.
12. Filter for a Lead/Manager role resource to add to this project. Wait 15 seconds.
13. Click **Add and Select More** button to add Lead/Manager resources to project. Wait 10 seconds.
14. Click on **Task** tab. Wait 5 seconds.
15. Click on **Gantt** link from drop-down of Task tab to open the Gantt Editing Session. Wait 5 seconds.
16. Click on **Add Existing Subproject** icon on Gantt page. Wait 5 seconds.
17. Filter a Project (which has 3 tasks) to add as a Subproject for created project. Wait 10 seconds.
18. Select the filtered project and click **Add** button to add as a subproject. Wait 10 seconds.
19. Open the Subproject which is added; this opens a new Gantt editing window. Wait 10 seconds.
20. Click on **Add Existing Subproject** icon on Subproject Gantt page. Wait 10 seconds.
21. Filter a Project (which has 3 tasks) to add as a Subproject. Wait 10 seconds.
22. Select the filtered project and click **Add** button to add as a subproject. Wait 10 seconds.
23. Open the Subproject which is added to existing subproject; this opens a new Gantt editing window. Wait 10 seconds.
24. Change one of the tasks by editing the start and finish dates. Click **Save** button. Wait 55 seconds over 4 requests.
25. Close the Gantt window. Wait 10 seconds.
26. Refresh the parent Gantt window. Wait 10 seconds.
27. Close this Gantt window. Wait 10 seconds.
28. Refresh the master project Gantt window. Wait 10 seconds.
29. Click **Expand All**. Verify that the changed task dates appear. Wait 9 seconds.
30. Close the Gantt editing window. Wait 10 seconds.
31. Log out.

#### Use Case 25: Create Projects

1. Click on **Projects** from the left nav.
2. Search for **Add New Project** tile and click on that tile to create a project from template.
3. Select the project template that you created from the pre-requisites.
4. Add Project Name and update the **Start Date** to the project under the **Details** tab.

#### Use Case 26: Timesheets (Classic)

1. Open Clarity Login page. Wait 10 seconds.
2. Log in to the application with user having Timesheet submit access rights. Wait 3 seconds.
3. Click on **Home** > **Personal** > **Timesheet** link. Wait 10 seconds.
4. Filter Timesheet for same user and with a specific time period (e.g., start date 1/1/20xx and end date 1/7/20xx). Pre-condition: User should have 2 or more tasks associated to a project and also Timesheet should be in Returned state. Wait 3 seconds.
5. Click on Timesheet icon to open timesheet page with time entry details for editing. Wait 3 seconds.
6. Click on **Populate** button; this would try to re-populate timesheet page asking for a confirmation. Wait 3 seconds.
7. Confirm repopulate, click **Yes** button. Wait 5 seconds.
8. Select and delete time entries of a task from timesheet page; this would navigate to next page for a confirmation to delete. Wait 3 seconds.
9. Confirm Delete by clicking the **Yes** button. Wait 3 seconds.
10. Click on **Add Task** button to show tasks available for this resource for time entry. Wait 5 seconds.
11. Select the task which was deleted in a previous step (Step 8) and click **Add**. Wait 15 seconds.
12. Fill the time entry details with 8 hours each from Monday to Friday and click **Submit for Approval** button. Wait 3 seconds.
13. Open the Submitted timesheet by clicking on Timesheet icon. Wait 3 seconds.
14. Click on **Return timesheet** button. Wait 3 seconds.
15. Log out.

#### Use Case 26: Timesheets - Submit Timesheet (Use Case 01)

1. Login as one of the timesheet submitters and have them access their current time period's timesheet.
2. Click on **Populate Timesheet** button and select only "Include tasks assigned to me".
3. Enter 8h for Monday for "Vacation Time".
   a. Enter a timesheet line item note for this item saying, "Taking time off for my birthday."
4. For the 1st task enter 2h for Tues-Fri.
   a. Set **Input Type Code** = Billable; **Charge Code** = Planning.
5. For the 2nd task enter 3h for Tues-Fri.
6. For the 3rd task enter 3h for Tues-Fri.
   a. Set **Input Type Code** = Billable; **Charge Code** = Planning.
7. Delete the last timesheet line item.
8. Enter a timesheet note saying, "Please Approve ASAP."
9. Submit Timesheet.

#### Use Case 26: Timesheets - Submit Timesheet (Use Case 02)

1. Login as the same timesheet submitter from scenario 1 and access the next time period after what was selected from scenario 1.
2. Click on **Populate Timesheet** button and select "Copy entries from previous timesheet" and "Include hours."
3. Delete the "Vacation Time" time entry.
4. For the 1st task enter 2h for Tues-Fri.
   a. Set **Input Type Code** = Billable; **Charge Code** = Planning.
5. For the 2nd task enter 3h for Tues-Fri.
6. For the 3rd task enter 3h for Tues-Fri.
   a. Set **Input Type Code** = Billable; **Charge Code** = Planning.
7. Add the timesheet line item that was deleted in scenario 1 and add it to the timesheet; Enter 4h for Monday.
8. Enter a timesheet note saying, "Please Approve ASAP."
9. Submit Timesheet.
10. Click on **Return Timesheet**.
11. Change to 8h for the value in step 7 for Monday.
12. Submit Timesheet.

#### Use Case 26: Timesheets - Approve Timesheet (Use Case 03)

1. Login as Ray Jordan.
2. Click on **Review and Approve** tab.
3. Click on the **Open** and **Submitted** tile filter.
4. Drill down on the first record on the list and view the timesheet details.
   a. Click the **Approve** button.
5. Drill down on the 5th record on the list and view the timesheet details.
   a. Enter a timesheet note saying, "Please enter no more than 40 hours."
   b. Click the **Return** button.
6. Click on **Send Reminder** from the **Open** tile filter.
7. Click on **Submitted** tile filter.
   a. Click on **Approve All** from the tile filter.
8. Scroll through 5 pages of the approver list.
9. Navigate to the next time period in the timesheet period carousel.
10. Navigate again to the next time period in the timesheet period carousel.
11. Search for a resource in the search text box.

#### Use Case 27: PM Projects (Classic)

1. Go to Homepage. Wait 10 seconds.
2. Log in to the application. Wait 5 seconds.
3. View Project List. Wait 5 seconds.
4. Open an existing Project. Wait 5 seconds.
5. Access Project Dashboard tab with OOTB portlets. Wait 5 seconds.
6. Access **Project Properties** and **Project Team** tabs. Wait 15 seconds over 2 requests.
7. Use **Set Allocation** object action to update 15 selected team members to have 50% allocation. Wait 20 seconds over 2 requests.
8. Use object action for **Commit Planned Allocation** to hard book selected team members. Wait 10 seconds over 2 requests.
9. Log out.

#### Use Case 27: Create Project from Template (Classic)

1. Open Clarity Login page. Wait 10 seconds.
2. Log in with user having Project create access rights. Wait 5 seconds.
3. Click on **Home** > **Portfolio Management** > **Projects** link. Wait 10 seconds.
4. Click on **New from Template** button. Wait 5 seconds.
5. Click on Filter Project Icon (+) button. Wait 10 seconds.
6. Filter for Project template. (Three different templates are used for each iteration: first project has 15 resources and about 80 tasks; second project has 50 resources and 264 tasks; third project has 15 resources and 120 tasks.) Wait 10 seconds.
7. Select template and click **Next** button. Wait 10 seconds.
8. Enter all required fields to create a project and click **Save** button. Wait 5 seconds.
9. Log out.

#### Use Case 27: PM Projects - Project Tiles

1. In the main menu, click **Projects**.
2. Scroll down 85% of the page to trigger infinite scroll to view other projects. Trigger the infinite scroll 10 times to validate the performance of infinite scroll.
3. In the **Advanced Filter**, select **Active Status** filter parameter and select **Active**.
4. In the Search text box, search for some projects using:
   a. Alpha text
   b. Numeric text
5. Drill down into a large project representing heavy load using the module links:
   a. Drill-down on the **Project Details** and then go back to the Project Tiles page.
   b. Drill-down on the **Status Report** and then go back to the Project Tiles page.
   c. Drill-down on the **Project Tasks** and then go back to the Project Tiles page.

#### Use Case 28: PM Financial Transactions (Classic)

1. View Transaction Vouchers List Page (20 records on first page). Wait 25 seconds over 5 requests.
2. View Transactions (Detail) List Page - Should Include 20 Transactions. Wait 5 seconds.
3. Create a new transaction, retain values then click **Submit and Create new**. Wait 40 seconds over 7 requests.

#### Use Case 29: Conversations

1. Open a large project to test heavy load on the server.
2. Start 10 conversations.
3. Add 20 new team members to the project.
4. Edit a conversation.
5. Delete a conversation.
6. Change the Finish Date to finish two weeks later.

#### Use Case 30: Timesheet Grid, Approve Timesheets

1. Login.
2. Click on **Review and Approve**.
3. Submit Timesheet.
4. Navigate to previous time period.
5. Click on first record.
6. Click on detailed timesheet.
7. Click on **Approve** button.
8. Close Approve flyout.
9. Open another user timesheet.
10. Open detailed timesheet.
11. Enter timesheet Note.
12. Click **Return** button.
13. Close Review and approve flyout.
14. Hide submitted.
15. Click on **Open Timesheet** Tab.
16. Click on **Send reminder** button.
17. Remind all.
18. Click on **Approve all**.
19. Click on **Submitted Timesheet** Tab.
20. Scroll through pages 2.
21. Scroll through pages 3.
22. Scroll through pages 4.
23. Scroll through pages 5.
24. Scroll through pages 6.
25. Navigate back to page 1.
26. Navigate to next time period 1.
27. Navigate to next time period 2.
28. Click on next arrow.
29. Navigate to next time period 3.
30. Click on previous arrow.
31. Navigate to prev time period 1.
32. Navigate back to original time period.
33. Search for a resource.
34. Filter by `apits_2`.
35. Click on approved.
36. Filter by resource manager.
37. Filter by resource OBS.
38. Click on open.
39. Return and submit all approved timesheet.
40. Return and submit all approved timesheet.
41. Logout.
42. HomePage.
43. Login.
44. Navigate to timesheet grid.
45. Filter by resource manager.
46. Filter by resource name.
47. Logout.

#### Use Case 32: Secure Attributes

1. Login.
2. Click on **Administration**.
3. Click on **Attributes**.
4. Sort by `secure_idea`.
5. Sort by `secure_inv`.
6. Sort by `secure_project`.
7. Sort by `secure_task`.
8. Sort by `secure_team`.
9. Secure attributes_idea.
10. Secure attributes_inv.
11. Secure attributes_project.
12. Secure attributes_task.
13. Secure attributes_team.
14. Search For 10 groups.
15. Assign Access edit groups_idea.
16. Assign Access edit groups_inv.
17. Assign Access edit groups_project.
18. Assign Access edit groups_task.
19. Assign Access edit groups_team.
20. Search For 10 groups.
21. Assign Access view groups_idea.
22. Assign Access view groups_inv.
23. Assign Access view groups_project.
24. Assign Access view groups_task.
25. Assign Access view groups_team.
26. Sort by Attribute.
27. Check Pagination.
28. Unsecure the attributes_idea.
29. Unsecure the attributes_inv.
30. Unsecure the attributes_project.
31. Unsecure the attributes_task.
32. Unsecure the attributes_team.
33. Remove Access Edit Groups_idea.
34. Remove Access Edit Groups_inv.
35. Remove Access Edit Groups_project.
36. Remove Access Edit Groups_task.
37. Remove Access Edit Groups_team.
38. Remove Access View Groups_idea.
39. Remove Access View Groups_inv.
40. Remove Access View Groups_project.
41. Remove Access View Groups_task.
42. Remove Access View Groups_team.
43. Logout.

#### Use Case 33: FLS Consumption

**Data setup:**

1. Create two groups of users 50% each (GroupWithAttrRights and GroupWithoutAttrRights).
2. Create a project - AttrProject or take any already created project.
3. Create an idea - AttrIdea or take any already created Idea.
4. Give **Project Instance** rights and **Idea Instance** rights on the project and idea created above to GroupWithAttrRights and GroupWithoutAttrRights.
5. Navigate to **Blueprints** and create a copy of Standard project and Standard idea.
6. Open Details page and add **Approved By** field to both the template.
7. Login as admin and secure 10 project attributes and 10 idea attributes.
8. Navigate to **Projects** workspace and open AttrProject.
9. Create view1 with one of the secured attributes as column.
10. Create view2 with one of the secured attribute as filter.
11. Navigate to **Board** view and click on view options.
12. Create view3 with one of the secured attribute as **Columns** in Board options and **Card Fields** in Card options.
13. Navigate to **Ideas** workspace and open AttrIdea.
14. Repeat steps 3 to 6 for idea.

**Steps:**

1. Login as GroupWithAttrRights user.
2. Navigate to **Projects** workspace and open AttrProject.
3. Verify user is able to view all 3 views and all secured attributes.
4. Navigate to **Ideas** workspace and open AttrIdea.
5. Verify user is able to view all 3 views and all secured attributes.
6. Login as GroupWithoutAttrRights user.
7. Navigate to **Projects** workspace and open AttrProject.
8. Verify user is able to view all 3 views but not secured attributes.
9. Navigate to **Ideas** workspace and open AttrIdea.
10. Verify user is able to view all 3 views but not secured attributes.

#### Use Case 34: Idea Financials - TSV Aggregate

**Data setup:**

1. Created Location OBS, Department OBS, Entity, Idea, and cost plan for idea.
2. Users are created with following rights:
3. Global rights: `IdeasNavigate`, `ApiAccess`, `IdeaManagement`
4. Instance right: `IdeaCostPlanView` and `IdeaView` on PerfIdeaTsv (Idea)

**Steps:**

1. Log in to Clarity.
2. Navigate to **Idea** workspace.
3. Open PerfIdeaTsv idea and navigate to **Idea Financial** Tab.
4. Open costplan - Plan of record. Cost plan has 3030 detail rows and **Cost Type**, **Department**, **Resource** as grouping attributes.
5. Open View option.
6. Select cost, revenue, and units.
7. Group by department (after grouping, there are 110 groups created).
8. Expand one of the departments.
9. Remove Grouping.
10. Logout.

#### Use Case 35: Project Staff - TSV Aggregate

**Data setup:**

1. Created a project and added 280 staff members with 50% and 100% allocation.
2. Users are created with following rights:
3. Global rights: `Projects - Navigate`, `ApiAccess`, `Project Management - Navigate`
4. Instance right: `Project - View Management` on staffProject (Project)

**Steps:**

1. Log in to Clarity.
2. Change **General Settings** for half of the users: Change **UNIT OF MEASURE** to hours.
3. Navigate to **Project** workspace.
4. Open staffProject project and navigate to **Project Staff** Tab.
5. Staff Grid has 280 rows.
6. Open View option.
7. Select **Allocation** and **Hard Allocation**.
8. Group by role (after grouping, there are 110 groups created).
9. Remove Grouping.
10. Logout.

#### Use Case 36: Navigate to Custom Objects and Sub Sub Objects

1. Log in to Clarity.
2. Navigate to Custom Object.
3. Navigate to Custom Object Instance.
4. Navigate to Custom Sub Object.
5. Open Custom Sub Object Instance Details.
6. Open Custom Sub Sub Object 1 instances.
7. Open Custom Sub Sub Object 2 instances.
8. Open Custom Sub Sub Object 3 instances.
9. Close Details Tab.
10. Logout.

#### Use Case 37: Resource Management Group By

1. Log in to Clarity.
2. Filter Project.
3. Open Project.
4. Navigate To **Assignment** Tab.
5. Apply Resource Filter.
6. Save View 1.
7. Remove Filter.
8. Group By Resource.
9. Save View 2.
10. Remove Group By.
11. Add a row.
12. Edit a row.
13. Delete a row.
14. Group By Resource.
15. Remove Group By Resource.
16. Just Totals.
17. Totals + Per Period.
18. Totals + Per Period + Group By.
19. Remove Group By.
20. Just Per Period (Remove Totals).
21. Remove Per Period.
22. Logout.

#### Use Case 38: Hierarchies

1. Log in to Clarity.
2. Create Hierarchy.
3. Get projects.
4. Add projects to Hierarchy - 1st 50.
5. Add projects to Hierarchy - 2nd 50.
6. Add projects to Hierarchy - 3rd 50.
7. Add projects to Hierarchy - 4th 50.
8. Get ideas.
9. Add ideas to Hierarchy - 1st 50.
10. Add ideas to Hierarchy - 2nd 50.
11. Get customInv1.
12. Get customInv2.
13. Get customInv3.
14. Get customInv4.
15. Add custom investments to Hierarchy - 1st 50.
16. Add custom investments to Hierarchy - 2nd 50.
17. Add custom investments to Hierarchy - 3rd 50.
18. Add custom investments to Hierarchy - 4th 50.
19. Get Cross Investments.
20. Get projects single.
21. Add projects to Hierarchy single.
22. Get ideas single.
23. Add ideas to hierarchy single.
24. Get customInv single1.
25. Get customInv single2.
26. Get customInv single3.
27. Get customInv single4.
28. Add custom investments to Hierarchy single1.
29. Add custom investments to Hierarchy single2.
30. Add custom investments to Hierarchy single3.
31. Add custom investments to Hierarchy single4.
32. Get Cross Investments-single.
33. Logout.

#### Use Case 39: Blueprints - Rule Engine

1. Log in to Clarity.
2. Get a blueprint - project.
3. Create a blueprint - project.
4. Rename a blueprint - project.
5. Edit a blueprint - project.
6. Get Process - project.
7. Add actions - project.
8. Publish a blueprint - project.
9. Get projects - project.
10. Add project to blueprint - project.
11. Run action1 - project.
12. Run action2 - project.
13. Get a blueprint - Idea.
14. Create a blueprint - Idea.
15. Rename a blueprint - Idea.
16. Edit a blueprint - Idea.
17. Get Process - Idea.
18. Add actions - Idea.
19. Publish a blueprint - Idea.
20. Get ideas - Idea.
21. Add idea to blueprint - Idea.
22. Run action1 - Idea.
23. Run action2 - Idea.
24. Get a blueprint - custom investment.
25. Create a blueprint - custom investment.
26. Rename a blueprint - custom investment.
27. Edit a blueprint - custom investment.
28. Get Process - custom investment.
29. Add actions - custom investment.
30. Publish a blueprint - custom investment.
31. Get custom investment - custom investment.
32. Add custom investment to blueprint - custom investment.
33. Run action - custom investment.
34. Run action - custom investment.
35. Get a blueprint - custom object.
36. Create a blueprint - custom object.
37. Rename a blueprint - custom object.
38. Edit a blueprint - custom object.
39. Get Process - custom object.
40. Add actions - custom object.
41. Publish a blueprint - custom object.
42. Get custom objects - custom object.
43. Add custom objects to blueprint - custom object.
44. Run action - custom object.
45. Run action - custom object.
46. Logout.

#### Use Case 40: Rule Engine Data Retrieval

1. Log in to Clarity.
2. Open Project.
3. Project Tasks.
4. Open Project Properties.
5. Logout.

#### Use Case 41: Retrieve Todos - Global and Instance Rights

1. project Login - Global Right User
2. project Login - Instance Right User
3. project Filter Project - Global Right User
4. project Filter Project - Instance Right User
5. project Open Project - Global Right User
6. project Open Project - Instance Right User
7. project Navigate to project Todo List Page - Global Right User
8. project Navigate to project Todo List Page - Instance Right User
9. project filter by owner - Global Right User
10. project filter by owner - Instance Right User
11. project clear filter project - Global Right User
12. project clear filter project - Instance Right User
13. idea open idea - Global Right User
14. idea open idea - Instance Right User
15. idea navigate to idea todo list page - Instance Right User
16. idea navigate to idea todo list page - Global Right User
17. idea todo filter by owner - Instance Right User
18. idea todo filter by owner - Global Right User
19. idea clear filter idea - Instance Right User
20. idea clear filter idea - Global Right User
21. cust inv open cust inv instance - Instance Right User
22. cust inv open cust inv instance - Global Right User
23. cust inv navigate to todo list custom investment - Instance Right User
24. cust inv navigate to todo list custom investment - Global Right User
25. cust inv custom investment filter by owner - Instance Right User
26. cust inv custom investment filter by owner - Global Right User
27. cust inv clear filter cust inv - Global Right User
28. cust inv clear filter cust inv - Instance Right User
29. global investment navigate to global todo workspace - Global Right User
30. global investment navigate to global todo workspace - Instance Right User
31. global investment filter by owner - Global Right User
32. global investment filter by owner - Instance Right User
33. global investment clear filter - Global Right User
34. global investment clear filter - Instance Right User
35. global tasks Navigate to tasks global - Global Right User
36. global tasks Navigate to tasks global - Instance Right User
37. global tasks filter by owner - Global Right User
38. global tasks filter by owner - Instance Right User
39. global tasks clear filter - Global Right User
40. global tasks clear filter - Instance Right User
41. Logout - Global Right User
42. Logout - Instance Right User

#### Use Case 42: Status Reports

1. Login.
2. Project_list.
3. Search project.
4. Open project.
5. Click status.
6. Create status.
7. Open status report.
8. Configure status report.
9. Configure status report - add tasks.
10. Configure status report - add risks.
11. Configure status report - add issues.
12. Configure status report - add changes.
13. Click on **Done**.
14. Modify risk1.
15. Save view 1.
16. Modify risk2.
17. Save view 2.
18. View preview.
19. Logout.

#### Use Case 43: Tasks Workspace

1. Login.
2. Task Workspace.
3. Filter by status.
4. Filter by Finish Date.
5. Clear Filters.
6. Logout.

#### Use Case 44: Custom Investments - Navigate

1. Login.
2. Select custinv from investment workspace.
3. Open column picker.
4. Add Columns.
5. Sort by Manager.
6. Click on filter.
7. Filter by manager.
8. Remove filter.
9. Navigate to next page.
10. Logout.

#### Use Case 45: Staffing Grid

1. Login.
2. Navigate to staff Grid.
3. Add investment name column.
4. Add resource name column.
5. Add totals allocation.
6. Add totals remaining availability.
7. Save basic view 1.
8. Group by resource 1.
9. Save view group by 1.
10. Remove group by 1.
11. Open view settings.
12. Put start period to 2018.
13. Put end period to 2018.
14. Select grand totals.
15. Add allocation per period metrics.
16. Save basic view 2.
17. Group by resource 2.
18. Save group by resource view 2.
19. Add per period metrics remaining availability.
20. Remove group by 2.
21. Save basic view 3.
22. Group by resource 3.
23. Save group by view 3.
24. Logout.

#### Use Case 46: Global ToDo Widgets

1. Login.
2. Click on the **Global To Dos** menu.
3. Click on **Tasks**.
4. Click on view.
5. Create an empty Saved View called Test1.
6. Create an empty Saved View called Test2.
7. Switch to Test1 view.
8. Click on **Show Widget**.
9. Click on **Manage widgets**.
10. Click on **New Widget**.
11. Click on number tile Widget.
12. Create a number tile widget.
13. Save widget.
14. Add widget.
15. Filter on To Do Owner.
16. Save Test1 view.
17. Switch to test2 view.
18. Click on manage widget.
19. Add owners widget.
20. Add Open widget.
21. Add total widget.
22. Add Overdue widget.
23. Add completed tile widget.
24. Add completed ring widget.
25. Add open ring widget.
26. Filter on Due Date.
27. Save test2 view.
28. Switch to test1 view.
29. Switch to test2 view.
30. Logout.

#### Use Case 47: Roadmap Widgets

1. Login.
2. Go to roadmaps.
3. Open roadmap instance.
4. Switch scenario.
5. Import projects.
6. Select 5 projects and click on add.
7. Import ideas.
8. Select 5 ideas and click on add.
9. Import custom investments.
10. Select 5 custom inv and click on add.
11. Click on **Show widget**.
12. Click on **Manage widget**.
13. Click on **New widget**.
14. Click on target widget.
15. Create Capital Cost widget.
16. Click on **Create**.
17. Click on **New**.
18. Click on **Target**.
19. Create Operating Cost widget.
20. Click on **Create**.
21. Click on **New**.
22. Click on **Target**.
23. Create Benefit widget.
24. Click on **Create**.
25. Click on **New**.
26. Click on **Target**.
27. Create Actual widget.
28. Click on **Create**.
29. Click on **New**.
30. Click on **Target**.
31. Create Budget Cost widget.
32. Click on **Create**.
33. Add Capital cost widget.
34. Add Operating cost widget.
35. Add Benefit widget.
36. Add Actual widget.
37. Add Budget cost widget.
38. Change Target field 1.
39. Change Target field 2.
40. Change Target field 3.
41. Change Target field 4.
42. Change Target field 5.
43. Navigate to board layout.
44. Navigate to Grid layout.
45. Click on **Manage widget**.
46. Remove operating cost widget.
47. Delete benefit widget.
48. Click on delete.
49. Close widget box.
50. Logout.

#### Use Case 48: Timesheet Widgets

1. Login.
2. Navigate to **Timesheets**.
3. Navigate to **Timesheets** Tab.
4. Filter by resource manager.
5. Click on **Show widget**.
6. Click on **Manage widget**.
7. Click on **New widget**.
8. Click on number tile widget.
9. Create number tile widget.
10. Click on **New widget**.
11. Click on progress ring widget.
12. Create progress ring widget.
13. Click on **New widget**.
14. Click on Pie Chart widget.
15. Create Pie Chart widget.
16. Click on **New widget**.
17. Click on Bar chart widget.
18. Create Bar chart widget.
19. Add Bar chart widget.
20. Add number tile widget.
21. Add pie chart widget.
22. Add progress ring widget.
23. Navigate to my timesheets.
24. Navigate to timesheets tab.
25. Logout.

#### Use Case 49: ObaStatus Reports

1. Login and navigate to obaStatusReports workspace.
2. Group by is latest.
3. Remove Group by is latest.
4. Group by Type.
5. Remove Group by Type.
6. Filter by Report status.
7. Remove Filter by Report status.
8. Navigate to next page.
9. Logout.

#### Use Case 50: Canvas Widgets Hierarchy

1. Login.
2. Create Hierarchy.
3. Open Hierarchy.
4. Get projects.
5. Add projects to hierarchy 1st 100.
6. Get projects next 100.
7. Add projects to hierarchy 2nd 100.
8. Get ideas. Add ideas to hierarchy 1st 100.
9. Get customInv1.
10. Add custom investments to hierarchy 1st 50.
11. Get customInv2.
12. Add custom investments to hierarchy 2nd 50.
13. Get customInv3.
14. Add custom investments to hierarchy 3rd 50.
15. Get customInv4.
16. Add custom investments to hierarchy 4th 50.
17. Get Cross Investments.
18. Get projects single.
19. Add projects to hierarchy single.
20. Get ideas single.
21. Add ideas to hierarchy single.
22. Get customInv single1.
23. Add custom investments to hierarchy single1.
24. Get customInv single2.
25. Add custom investments to hierarchy single2.
26. Get customInv single3.
27. Add custom investments to hierarchy single3.
28. Get customInv single4.
29. Add custom investments to hierarchy single4.
30. Get Cross Investments single.
31. Click canvas - add number tile.
32. Add progress ring.
33. Add pie chart.
34. Add bar chart.
35. Add table.
36. Publish PDF.
37. Logout.

#### Use Case 51: Agreements

1. Login and land on Agreement workspace.
2. Filter by owner.
3. Remove Filter by owner.
4. Filter by successors.
5. Remove Filter by successors.
6. Navigate to next page.
7. Navigate to last page.
8. Logout.

#### Use Case 52: Task Bulk Edit

1. Home Page and Login.
2. Get Projects.
3. Create 50 tasks new.
4. Update 50 tasks new.
5. Logout.

#### Use Case 53: Project Rules

1. Home Page and Login.
2. Open any project.
3. Open Tasks.
4. Navigate to Tasks workspace.
5. Logout.

#### Use Case 54: Staffing Workspace

1. Staffing homepage.
2. Staffing login.
3. Navigate to staffing workspace: **Allocations by Investments**.
4. Allocations by Investments: Click on **Hide empty groups** button: Off.
5. Allocations by Investments: Click on next page.
6. Allocations by Investments: Click on **Hide empty groups** button: On.
7. Click on **Allocations by resource**.
8. Allocations by resource: Click on **Hide empty groups** button: Off.
9. Allocations by resource: Click on next page.
10. Allocations by resource: Click on **Hide empty groups** button: On.
11. Click on **Assignment by investment**.
12. Assignment by Investments: Click on **Hide empty groups** button: Off.
13. Assignment by Investments: Click on next page.
14. Assignment by Investments: Click on **Hide empty groups** button: On.
15. Click on **Assignment by resource**.
16. Assignment by resource: Click on **Hide empty groups** button: Off.
17. Assignment by resource: Click on next page.
18. Assignment by resource: Click on **Hide empty groups** button: On.
19. Click on **staff**.
20. Staff Grid: Group By.
21. Staff Grid: Remove Group By.
22. Logout.

#### Use Case 55: Staffing Custom API's

1. Login.
2. Allocation by Investment.
3. Assignments by Investment.
4. Allocations by Resource.
5. Assignments by Resource.
6. Staff.
7. Logout.
8. Login.
9. Allocation by Investment.
10. Assignments by Investment.
11. Allocations by Resource.
12. Assignments by Resource.
13. Staff Grid - No Grouping.
14. Staff Grid - Grouped By ResourceID.
15. Logout.

#### Use Case 56: Oba Investments

**Global User:**

1. Login Global User.
2. Get obaInvestments-1 Global User.
3. Get obaInvestments-2 Global User.
4. Get obaInvestments-3 Global User.
5. Get obaInvestments-4 Global User.
6. Logout Global User.
7. Home Page.

**Instance Right User:**

1. Login.
2. Get obaInvestments-1.
3. Get obaInvestments-2.
4. Get obaInvestments-3.
5. Get obaInvestments-4.
6. Get obaInvestments-Aggregation-1.
7. Get obaInvestments-Aggregation-2.
8. Get obaInvestments-Aggregation-3.
9. Get obaInvestments-Aggregation-4.
10. Create a scenario.
11. Get and update projects.
12. Get projects.
13. Update projects.
14. Get obaInvestments with scenario-1.
15. Get obaInvestments with scenario-2.
16. Get obaInvestments with scenario-3.
17. Get obaInvestments with scenario-4.
18. Get obaInvestments-Aggregation with scenario-1.
19. Get obaInvestments-Aggregation with scenario-2.
20. Get obaInvestments-Aggregation with scenario-3.
21. Get obaInvestments-Aggregation with scenario-4.
22. Logout.

**Global User (repeat):**

1. Login Global User.
2. Get obaInvestments-1 Global User.
3. Get obaInvestments-2 Global User.
4. Get obaInvestments-3 Global User.
5. Get obaInvestments-4 Global User.
6. Logout Global User.
7. Home Page.

**Instance Right User (repeat):**

1. Login.
2. Get obaInvestments-1.
3. Get obaInvestments-2.
4. Get obaInvestments-3.
5. Get obaInvestments-4.
6. Create a scenario.
7. Get and update projects.
8. Get obaInvestments with scenario-1.
9. Get obaInvestments with scenario-2.
10. Get obaInvestments with scenario-3.
11. Get obaInvestments with scenario-4.
12. Logout.

**Global User (staffing):**

1. Login Global User.
2. Navigate to staffing Global User.
3. Navigate to Investments Global User.
4. Navigate to grid view Global User.
5. Add investment and project fields Global User.
6. Change start date single Global User.
7. Open view options and update Global User.
8. Change description single Global User.
9. Sort by Type desc Global User.
10. Bulk edit start date Global User.
11. Deselect all and Filter by in Global User.
12. Sort by description ascending Global User.
13. Bulk edit by project objective attribute Global User.
14. Create a scenario Global User.
15. Scenario mode Change start date single Global User.
16. Scenario mode remove filter Global User.
17. Logout Global User.
18. Home page.

**Instance Right User (staffing):**

1. Login.
2. Navigate to staffing workspace.
3. Navigate to staffing Investments.
4. Navigate to grid view.
5. Navigate to view options.
6. Deselect show only for selected periods.
7. Add columns.
8. Change start date single.
9. Change description single.
10. Sort by type descending.
11. Bulk edit start date.
12. Filter by id.
13. Bulk edit by project objective attribute.
14. Remove filter.
15. Create a scenario.
16. Change start date single.
17. Change start date bulk patch.
18. Logout.

#### Use Case 57: Project Nested Grids

1. Home Page.
2. Login.
3. Navigate to project grid.
4. Add columns - Status reporting.
5. Add columns - has staff.
6. Add columns - per period metrics - Total usage.
7. Add columns - per period metrics - actuals.
8. Add columns - per period metrics - allocation.
9. Add columns - per period metrics - etc.
10. Add columns - per period metrics - Planned cost.
11. Add columns - per period metrics - Hard allocation.
12. Add columns - per period metrics - Open view options.
13. Change view options to 2010-01.
14. Change view options to 2011-12.
15. Save view: baseline view.
16. Change workspace to status reports.
17. Come back to this view and capture time.
18. Check nested grid options.
19. Save view and Nested view 2.
20. Change workspace1.
21. Come back to this view and capture time.
22. Add task to nested grid.
23. Sort by Has staff descending.
24. Save view.
25. Change workspace.
26. Come back to this view and capture time1.
27. Expand 1 project AAA Project Name.
28. Add columns actuals.
29. Add columns ETC.
30. Add columns Finish.
31. Add columns Start.
32. Add columns Status.
33. Save view as task view 1.
34. Change workspace.
35. Come back to this view and capture time1.
36. Expand 4 more projects.
37. Save view as task view 5.
38. Change workspace.
39. Come back to this view and capture time.
40. Change view options and select Status reports.
41. Sort by status reporting descending.
42. Save view.
43. Change workspace.
44. Come back to this view and capture time.
45. Expand 1 project BAA Project Name.
46. Add columns Investment name.
47. Add columns overall Status.
48. Add columns Latest.
49. Add columns Report Date.
50. Add columns Report status.
51. Save view as status report view 1.
52. Change workspace.
53. Come back to this view and capture time.
54. Expand 4 more projects.
55. Save view as status report view 5.
56. Change workspace.
57. Come back to this view and capture time.
58. Logout.

#### Use Case 59: Project Rules - Grant Revoke Rights

1. Home Page.
2. Login.
3. Get Projects.
4. Get Users.
5. Update description.
6. Update description and Select 0 users: rights granted 0.
7. Update description and Select 0 users: rights granted 0.
8. Update description and Select 0 users: rights granted 0.

---
title: Rally Cost Accounting
tags:
  - admin
  - howto
aliases:
  - Frictionless Cost Accounting
  - Rally Financial
canonical: true
audience: admin
domain: administration
parent: "[[_MOC Administration]]"
---

# Rally Cost Accounting

## Frictionless Cost Accounting

Frictionless Cost Accounting (FCA) is a method that enables organizations to seamlessly capture, track, and post timesheet data in alignment with work being done in Rally. It automates the integration between project management and financial systems, allowing work tracked in Rally (user stories, tasks, and portfolio items) to be directly linked to financial records and timesheets in Clarity.

### Verify Prerequisites

Ensure you have completed the following prerequisites:

- Contact Broadcom Support to turn ON the FCA module in Rally.
- Create the Rally integration instance in Classic PPM.

> [!important]
> Enter the ObjectID of the Rally instance in the Integration Instance field on the Integrations page.
>
> To get the Rally Object ID:
> 1. Log in to the Rally workspace with your credentials.
> 2. Access the following URL: `https://<Rally_Instance>/slm/webservice/v2.0/workspace?fetch=true`
> 3. A JSON response appears. Note down the value of ObjectID from the JSON response.

Additional prerequisites:

- Create values under the Financial Work Type (`fin_work_type`) lookup in Classic PPM.

> [!note]
> An out-of-the-box (OOTB) Financial Work Type lookup of Static Type is available without values in Classic PPM. The admin should create values in the Financial Work Type lookup. Examples: New Feature Development, Research, QA Testing, Technical Debt.

- Enable the **Allow Effort Task Creation** option in Administration, Project Management, Settings in Classic PPM.

### Create a Frictionless Accounting Mapping Instance

Follow these steps:

1. In Clarity, click Administration and click the Integrations tile to open the Integrations page.
2. Click the Frictionless Accounting Mappings tab.
3. Click the Add Row icon and enter the required details:
   - **Name:** Provide a name for the Frictionless Accounting Mappings instance.
   - **Integration:** Select the required Rally integration from the drop-down list.

> [!note]
> An Integration can only be selected ONCE.

4. Click the Frictionless Accounting Mappings instance.
5. Click + to add Financial Work Type Task Mapping.
6. Complete the following fields:
   - **Financial Work Type:** Select the Financial Work Type lookup values. You can only select each Financial Work Type once.
   - **Task ID:** Provide a unique ID.
   - **Cost Type:** Select Capital or Operating.
   - **Active:** Mark each selected value as active.

> [!important]
> The following details will not be populated until after executing the Import Integrations job:
> - Rally Portfolio Items
> - Rally Object ID

### Activate the Frictionless Accounting Mapping Instance

Follow these steps:

1. Execute the Import Integrations job after creating a Frictionless Accounting Mapping Instance.

> [!important]
> After executing the Import Integrations job, the following details will be populated in the Frictionless Accounting Mappings instance page:
> - Rally Portfolio Items
> - Rally Object ID

2. In the Frictionless Accounting Mappings instance page, choose the values for Clarity Investment and Rally Portfolio Item for Capital Actuals and Capital Approval:
   - **Capital Actuals:** Defines the investment level for capturing actuals for time entries and transactions.
     - **Clarity Investment:** Represents the list of Clarity Investments (e.g., Project, Custom Investment).
     - **Rally Portfolio Item:** The Portfolio Item level at which an organization captures actuals. This should be the Rally Lowest Level Portfolio Item (typically the Feature level).
   - **Capital Approval:** Specifies the investment level for authorizing capital expenditures.
     - **Clarity Investment:** Represents the configured Clarity Investments.
     - **Rally Portfolio Item:** The Portfolio Item level at which an organization authorizes capital expenditures. This should be higher than a Feature level.

> [!note]
> Key points:
> - Ideas, Custom Master Objects, and Team Investments are not supported in the Clarity Investment of Capital Actuals and Capital Approval.
> - The Capital Approval attribute will be available on the Clarity relative workspace where the attribute is created in Classic PPM.
> - Enable Open for Time Entry and set the Track Mode to PPM for the Clarity investment selected under Capital Actuals and Capital Approval.

3. Turn ON the toggle **Enable Frictionless Cost Accounting**. This will create a Capital Approval lookup attribute for the selected Capital Approval Clarity Investment.

> [!important]
> If you toggle Enable Frictionless Cost Accounting ON without providing the mandatory fields or if no Active Financial Work Type Task Mappings exist, an error message will appear: "Valid values for Capital Actuals, Capital Approval attributes, and Financial Work Type Task Mapping are required to enable Frictionless Cost Accounting."

### Scenario: Implementation of Frictionless Cost Accounting

A product development organization uses Clarity for funding and monitoring investments, and Rally for agile development and execution. The organization aims to integrate these systems to gain real-time visibility into investment execution and delivery information.

**Goal:** To seamlessly integrate financial data between Clarity and Rally, ensuring that time entry, financial work types (FWTs), and resource allocations are accurately tracked and aligned across both systems.

**Actors:**
- **Ian Arpel (Clarity Administrator):** Responsible for setting up and maintaining the integration between Clarity and Rally.
- **Adriana Ramos (End User):** A project team member who works with Rally and Clarity. Responsible for adding user stories in Rally and submitting timesheets in Clarity.

**Investment Type:** Project

#### Prerequisite

- Contact Broadcom Support to turn ON the FCA module in Rally.
- Create the Rally Integration Instance in Classic PPM.

Ian configures the integration attributes. Follow these steps:

a. Log into Clarity and open Classic PPM.
b. Click Administration, General Settings, Integrations.
c. Click New.
d. Update the following fields:

| Field | Value/Example |
|-------|---------------|
| Integration Name | Rally_Dev |
| Integration ID | RallyDev |
| Integration URL | (Check with your Administrator) |
| Integration Instance | (Check with your Administrator) |
| Integration Key | (Check with your Administrator) |
| Authentication Type | API Key |

> [!note]
> Ensure that you have entered the ObjectID of the Rally instance in the Integration Instance field.

e. Click Save.

Ian defines the necessary financial work type values in Classic PPM:

a. Click Administration, Data Administration, Lookups.
b. Open Financial Work Type lookup and click Values.
c. Click New.
d. Complete the following fields:

| Field | Value/Example |
|-------|---------------|
| Lookup Value Name | Defect BH4 |
| ID (LOOKUP_CODE) | Fin001 |

e. Save your changes.

#### 01. Setup Phase

The Setup Phase involves creating and activating the Frictionless Cost Accounting instance.

**Step 1: Create a Frictionless Accounting Mapping Instance**

Ian goes to the Integrations section in Clarity Administration and creates a Frictionless Accounting Mapping instance.

Follow these steps:

a. In Clarity, click Administration and click the Integrations tile to open the Integrations page.
b. Click the Frictionless Accounting Mappings tab.
c. Click the Add Row icon and enter the following details:

| Field | Value/Example |
|-------|---------------|
| Name | Rally_FAM |
| Integration | Rally_Dev |

d. Click the Frictionless Accounting Mappings instance (Rally_FAM).
e. Click + to add Financial Work Type Task Mapping.
f. Complete the following fields:

| Field | Value/Example |
|-------|---------------|
| Financial Work Type | Defect BH4 |
| Task ID | DefectBH4 |
| Cost Type | Capital |
| Active | Checked |

> [!note]
> An Integration can only be selected ONCE.

**Step 2: Execute the Import Integrations Job**

Ian runs the Import Integrations job to import Rally Portfolio Items and Teams.

Follow these steps:

a. In Classic PPM, click Home, Personal, and Reports and Jobs.
b. Click Jobs, Available Jobs.
c. Click the Import Integrations job.
d. Complete the following fields:

| Field | Value/Example |
|-------|---------------|
| Job Name | Import Integrations - 01 |
| Integration | Rally_Dev |
| When | Immediately |

e. Click Submit. Wait for the job to complete.

**Step 3: Activate the Frictionless Accounting Mapping Instance**

Ian enables Frictionless Cost Accounting on the Frictionless Accounting Mapping page.

Follow these steps:

a. In Clarity, click Administration and click the Integrations tile to open the Integrations page.
b. Click the Frictionless Accounting Mappings tab.
c. Click the Frictionless Accounting Mappings instance (Rally_FAM).
d. Complete the following fields (use the same options for Capital Actuals and Capital Approval):
   - Clarity Investment: Project
   - Rally Portfolio Item: Feature
e. Toggle Enable Frictionless Cost Accounting ON.

> [!important]
> Key points:
> - The "Enable Frictionless Cost Accounting" option is disabled until all sections are completed.
> - Enable Open for Time Entry and set the Track Mode to PPM for the Clarity Investment selected under Capital Actuals and Capital Approval.

#### 02. Configuration Phase

In this phase, Ian configures the detailed mappings between Clarity and Rally and adjusts permissions as needed.

**Step 1: Create an Integration Mapping Instance**

Ian creates a new Integration Mapping instance to configure how data flows between Clarity and Rally.

Follow these steps:

a. Click Administration and select the Integrations tile to open the Integrations page.
b. Click the Add Row icon and enter the following details:

| Field | Value/Example |
|-------|---------------|
| Name | Rally_IM |
| Integration | Rally_Dev |

c. Click Enter.

**Step 2: Run the Import Integration Mappings Job**

Ian executes the Import Integration Mappings job to synchronize mapping data between Clarity and Rally.

Follow these steps:

a. In Classic PPM, Click Home, Personal, Reports and Jobs.
b. Click Jobs, Available Jobs.
c. Click the Import Integration Mappings job.
d. Complete the following fields:

| Field | Value/Example |
|-------|---------------|
| Job Name | Import Integration Mappings - 01 |
| Integration Mapping | Rally_IM |
| When | Immediately |

e. Click Submit. Wait for the job to complete.

**Step 3: Define Object and Field Mappings in Clarity**

Ian maps Clarity investments (e.g., Projects) to the selected Rally Portfolio Items and defines field mappings to specify how data is exchanged. This ensures that time entry, work types, and financial data align.

Follow these steps:

a. In Clarity, click the newly created Integration Mapping instance (e.g., Rally_IM).
b. Click the Add Row icon and enter the following details:

| Field | Value/Example |
|-------|---------------|
| Name | ObjectMap01 |
| Clarity Object | Project |
| Rally Object | Feature |
| Direction | Clarity to Rally |

c. Click Enter.
d. Select the newly created object mapping instance and click Details.
e. Click Field Mappings in the Details panel.
f. Click the Add Row icon and enter the following details:

| Field | Value/Example |
|-------|---------------|
| Direction | Clarity to Rally |
| Sync Option | Create and Update |
| Clarity Field | Project Name |
| Rally Field | Name |

g. Click Enter.

**Step 4: Unsecure the Frictionless Accounting Attributes**

Ian unsecures two new attributes to enable smooth integration:
- **Frictionless Cost Accounting Mapping:** Configures the Clarity Frictionless Accounting Mapping instance.
- **Rally Team for Frictionless Cost Accounting:** Configures the Rally Frictionless Accounting Mapping instance.

> [!note]
> By default, these attributes are secured.

Follow these steps:

a. Click Administration and open the Attributes tile.
b. Apply the following filter: Attribute = Frictionless Cost Accounting Mapping, Rally Team for Frictionless Cost Accounting.
c. Drag the Object header into the Group By bar in the grid.
d. Uncheck Frictionless Cost Accounting Mapping, Rally Team for Frictionless Cost Accounting, and Rally Calculation Method under Project and Team Investment.

#### 03. Synchronization Phase

This phase ensures that Clarity and Rally data are fully synchronized.

> [!note]
> Consider an example where you create a New Team, "Doc Team," in the Team Investment Workspace. Configure the following fields:
>
> | Field | Value/Example |
> |-------|---------------|
> | Frictionless Cost Accounting Mapping | Rally_FAM |
> | Rally Team for Frictionless Cost Accounting | Business to Bank Engagement |
> | Rally Calculation Method | Points |
>
> - Add a Resource (Adriana Ramos) to the Staff Module under the Doc Team.
> - Allocate Resources to Adriana Ramos for the Current Time Period.
> - Enable Open for Time Entry and set the Track Mode to PPM for the resource.
> - The Team Investment should be active, with appropriate Start and Finish Dates.
> - Ensure that Adriana Ramos has the following access rights: Project - View Management - All, Timesheets - Navigate.
> - Set the Unit of Measure to Hours.

**Step 1: Link a Clarity Investment to the Integration Mappings Instance**

Ian configures the Projects Workspace to include Integration Mappings, Rally Object, and Rally Formatted ID.

Follow these steps:

- In the main menu, click Projects.
- Configure Integration Mappings, Rally Object, and Rally Formatted ID from the Columns Panel.
- For a project (e.g., Acme Managed Service), complete the following fields:

| Field | Value/Example |
|-------|---------------|
| Integration Mappings | Rally_IM |
| Active | Checked |
| Open for Time Entry | Checked |
| Track Mode | PPM |

> [!important]
> The Prevent Unassigned Timesheet Tasks field must be unchecked.

**Step 2: Run the Synchronize Mapped Information Job**

Ian runs the Synchronize Mapped Information job to sync configured data between Clarity and Rally.

Follow these steps:

a. In Classic PPM, click Home, Personal, Reports and Jobs.
b. Click Jobs, Available Jobs.
c. Select the Synchronize Mapped Information job.
d. Complete the following fields:

| Field | Value/Example |
|-------|---------------|
| Job Name | Synchronize Mapped Information - 01 |
| Integration Mapping | Rally_IM |
| When | Immediately |

e. Click Submit. Wait for the job to complete.

> [!note]
> The Rally Object and Rally Formatted ID fields will be updated in the Projects workspace once the Synchronize Mapped Information job is executed.

#### 04. Timesheet Integration Phase

This phase ensures that timesheets accurately reflect work completed on user stories and tasks.

> [!note]
> Before creating user stories, copy the Rally Formatted ID (Example: F25713) for the investment. Log in to Rally, select the required Rally Workspace from the left menu panel, paste the Rally Formatted ID in the search bar and click Enter.

**Step 1: Create User Stories in Rally**

Adriana Ramos creates user stories in Rally with the required details, including story points, Financial Work Types (FWT), and sets the Schedule State to "In Progress."

Follow these steps:

a. Click Add New.
b. Complete the required fields, including the Plan Estimate field to assign story points.
c. Click Create.
d. Complete the following fields:

| Field | Value/Example |
|-------|---------------|
| Name | Defect BH4 |
| Plan Estimate | (story points) |
| Schedule State | In-Progress |
| Financial Work Type | Defect |

**Step 2: Run the Timesheet Integration Job**

Ian executes the Timesheet Integration job to pull time entries from Rally into Clarity.

Follow these steps:

a. In Classic PPM, click Home, Personal, Reports and Jobs.
b. Click Jobs, Available Jobs.
c. Select the Timesheet Integration job.
d. Complete the following fields:

| Field | Value/Example |
|-------|---------------|
| Job Name | Timesheet Integration - 01 |
| Integration Type | Rally_Dev |
| Time Period | Current Period |
| When | Immediately |

e. Click Submit. Wait for the job to complete.

**Step 3: Verify and Submit the Timesheet**

Adriana Ramos logs into Clarity to verify that the tasks with Financial Work Types are correctly populated in the timesheet.

Follow these steps:

a. Log in as Adriana Ramos.
b. In Clarity, click Timesheets from the menu.
c. Open the current period in My Timesheet. The user stories entered in Rally appear in My Timesheet.
d. Verify the details.

> [!note]
> When the Timesheet Integration Job runs, the Financial Work Type's Task ID in the Timesheet shows the Financial Work Type Lookup ID values.

e. Submit the timesheet. The manager then approves Ramos's timesheet.

#### 05. Post Timesheet Phase

After the timesheet is approved, the system processes the data and reflects it in the respective modules.

**Step 1: Run the Post Timesheets Job**

Once the timesheet is approved, Ian runs the Post Timesheets job (after a 6-minute delay) to ensure that data is accurately processed in both Clarity and Rally.

Follow these steps:

a. In Classic PPM, click Home, Personal, Reports and Jobs.
b. Click Jobs, Available Jobs.
c. Select the Post Timesheets job.
d. Complete the following fields:

| Field | Value/Example |
|-------|---------------|
| Job Name | Post Timesheets - 01 |
| When | Immediately |

e. Click Submit. Wait for the job to complete.

**Step 2: Review the Tasks and Staff Modules**

Once the Post Timesheets job has been executed, Ian verifies that Financial Work Types (FWTs) have been converted into tasks and that users have been correctly assigned to the Staff module, along with Actuals and Actual Cost.

Follow these steps:

a. In the main menu, click Projects.
b. Open the project (e.g., Acme Managed Service).
c. Navigate to the Tasks module. Financial Work Types (FWTs) will have been converted into tasks.
d. Navigate to the Staff module. The user (e.g., Ramos) will be assigned in the Staff module.
e. Navigate to the Assignment module. Select the task converted from a FWT, click the Details panel, then the Assignments tab to verify that Actuals and Actual Cost have been populated.

Also note that the Financial Work Type's Task IDs in the Timesheet are updated. When the Post Timesheet job runs, it replaces the Financial Work Type Lookup ID with the Task ID of Financial Work Type defined in the Frictionless Accounting Mappings instance page.

To verify the updated Task IDs:

a. In the main menu, click Timesheets.
b. Navigate to My Timesheet.
c. Open a specific period in the My Timesheets tab. The effort tasks with Task IDs are updated.

| Status | Task ID |
|--------|---------|
| Before running the Post Timesheet Job | Defect BH4(Fin001), New Feature Development BH4(Fin002) |
| After running the Post Timesheet Job | Defect BH4(Defect BH4), New Feature Development BH4(NewBH4) |

### Modifications for Custom Investments

If you are using a Custom Investment to implement Frictionless Cost Accounting, follow the same steps as in the previous scenario with the following modifications:

> [!note]
> The following example uses the custom investment type named "Features."

| Task | Required Modifications |
|------|------------------------|
| Activate the Frictionless Accounting Mapping Instance | Select Features in Clarity Investment of the Frictionless Accounting Mappings instance page |
| Define Object and Field Mappings in Clarity | Select Features in Clarity Object of the Object Mapping Instance page; Select Name in Clarity Field of Field Mappings |
| Link a Clarity Investment to the Integration Mappings instance | Open an investment (e.g., Features) in Investments and then select an Investment Instance (e.g., Security preferences) |
| Synchronization Phase | No Change |
| Review the Tasks and Staff Modules | Ensure that Adriana Ramos has access rights to: Custom Investment - Navigate, Features - Navigate, Features - View All |

For the Review step, follow these steps:

1. In the main menu, click Investments.
2. Open the Investment (e.g., Features) and then click an Investment Instance (e.g., Security preferences).
3. Navigate to the Tasks module. Financial Work Types (FWTs) will have been converted into tasks.
4. Navigate to the Staff module. The user (e.g., Ramos) will be assigned in the Staff module.

## How Rally Calculates Hours for Financial Work Types

When the Timesheet Integration job runs, Rally converts story points into timesheet hours in three steps:

1. **Find & sum work items:** Rally totals the Plan Estimate of every user story that is In Progress or Accepted, carries a valid Financial Work Type, and is not deleted.
2. **Derive work ratios:** Those points are grouped by Feature and Financial Work Type; each group's total is divided by the project's overall total to produce a percentage (work ratio).
3. **Allocate team-member hours:** Rally multiplies every work ratio by each team member's available hours for the period. The resulting hours flow to Clarity timesheets.

**Example:** A Mobile team completes 220 story points in January. Fifty points fall under the "Research" work type for the feature "Integrate with Venmo," giving a work ratio of 23% (50 / 220). A developer with 144 available hours will see 33 h (144 * 0.23) of "Research - Integrate with Venmo" on her timesheet.

> [!tip]
> Watch the following video to learn about Frictionless Cost Accounting.

## Frictionless Cost Accounting Calculations

The primary objective of the calculations is to analyze work done within specific Rally Projects, categorized by financial work type, and calculate the proportion of work performed for each financial work type relative to the total work performed in that project.

> [!note]
> Rolling up data by portfolio item (Feature) includes the total count or points for all work items (user stories and defects) that are parented to each portfolio item. For a defect to be included in these roll-ups, it must be parented to the portfolio item, rather than being parented to a user story.

### Step 1: Find and Sum the Relevant Work Items

The incoming query provides Rally with:
- A list of Rally Projects
- Users allocated to those projects
- User allocation in hours
- Valid Financial Work Types
- A time period

Using this data, Rally identifies all artifacts (User Stories and Defects) that meet the following criteria:
- The artifact was In-Progress in specific projects before the end of the time period, OR was accepted between the start and end of the time period.
- The artifact has a Financial Work Type included in the list of valid types.
- The artifact contains a Plan Estimate other than NULL.
- The artifact is not in the recycle bin.

> [!note]
> In Rally, Completed is an In-Progress state. Artifacts are not reported as Done until they reach the Accepted state.

The calculation method (specified in Clarity) determines whether calculations are based on story points or story counts. For the story point method, Rally creates a sum of the Plan Estimate for each project. For the story count method, Rally creates a count of all artifacts for each project.

### Step 2: Calculate the Work Ratios

After items are grouped by project and a total sum is created, Rally determines the portion of work applied to each Financial Work Type per Feature worked on in the time period. Rally creates groups of items by Feature and then by Financial Work Type and sums the Plan Estimates for these groups. Rally then divides these sums by the total sum for the project to determine the ratio for each Feature's Financial Work Types.

### Example 1 (Points)

This example considers the team (Rally Project) Mobile, using story points.

- Sum of all work done by team Mobile = **220 story points**.
- Group: Financial Work Type = Research, Feature = Integrate with Venmo, Sum = 50 story points.
- Work ratio = 50 / 220 = **0.23 or 23%**.

This means 23% of planned work in team Mobile is attributed to Research work for the Feature "Integrate with Venmo." Rally multiplies 23% against each team member's hour allocation to determine hours worked.

**Mobile Team (Staff Module)**

| Resource | Role | Default Allocation | 2025-01 Allocation | 2025-02 Allocation | 2025-03 Allocation |
|----------|------|-------------------|-------------------|-------------------|-------------------|
| Amos, Cheryl | Engineer | 100% | 128 | 168 | 168 |
| Gillian, Erin | Engineer | 50% | 84 | 84 | 84 |
| McCarthy, John | Product Owner | 100% | 168 | 168 | 168 |
| Miller, Randyl | UX | 100% | 168 | 168 | 168 |
| **Total** | | | **548** | **588** | **588** |

> [!note]
> Cheryl Amos is on vacation for 40 hours in January (hence 128 hours instead of 168).

**API Team (Staff Module)**

| Resource | Role | Default Allocation | 2025-01 Allocation | 2025-02 Allocation | 2025-03 Allocation |
|----------|------|-------------------|-------------------|-------------------|-------------------|
| Gillian, Erin | Engineer | 50% | 84 | 84 | 84 |
| **Total** | | | **84** | **84** | **84** |

> [!note]
> Erin Gillian is 50/50 on two teams: Mobile and API.

**Rally execution percentages for 2025-01 (Points method):**

| Financial Work Type | Team (Project) | 2025-01 Stories/Defects (points) | Percentage |
|--------------------|----------------|----------------------------------|------------|
| New Feature Development | Mobile | 100 | 45% |
| Research | Mobile | 50 | 23% |
| Research | Mobile | 30 | 14% |
| Technical Debt | Mobile | - | 14% |
| Defect | Mobile | - | 4% |
| **Total Mobile** | | | **100%** |
| Technical Debt | API | - | 100% |
| **Total API** | | | **100%** |

> [!note]
> The Financial Work Type is set at the Story level, not the Feature level.

**Timesheet for: Amos, Cheryl — Time Period: 2025-01 (Jan 1 – Jan 31)**

| Feature (CIT) | Task (Financial Work Type) | Hours |
|---------------|---------------------------|-------|
| Integrate with Venmo | New Feature Development | 65.45 |
| Integrate with Venmo | Research | 32.73 |
| 2 Factor Authentication | Research | 19.64 |
| Alert Error Messaging | Technical Debt | 19.64 |
| Security Preferences | Defect | 6.55 |
| **Total** | | **144.00** |

**Timesheet for: Gillian, Erin — Time Period: 2025-01 (Jan 1 – Jan 31)**

| Feature (CIT) | Task (Financial Work Type) | Team | Hours |
|---------------|---------------------------|------|-------|
| Integrate with Venmo | New Feature Development | Mobile | 41.82 |
| Integrate with Venmo | Research | Mobile | 20.91 |
| 2 Factor Authentication | Research | Mobile | 12.55 |
| Alert Error Messaging | Technical Debt | Mobile | 12.55 |
| Security Preferences | Defect | Mobile | 4.18 |
| Capacity Analysis | Technical Debt | API | 92.00 |
| **Total on Timesheet** | | | **184.00** |
| Total to Allocate to Mobile team | | | 92 |
| Total to Allocate to API team | | | 92 |

### Example 2 (Count)

This example considers the team (Rally Project) Mobile, using story count.

- Sum of all work done by team Mobile = **24 stories**.
- Group: Financial Work Type = Research, Feature = Integrate with Venmo, Sum = 5 stories.
- Work ratio = 5 / 24 = **0.208 or 20.8%**.

This means 20.8% of planned work in team Mobile is attributed to Research work for "Integrate with Venmo."

**Rally execution percentages for 2025-01 (Count method):**

| Financial Work Type | Team (Project) | 2025-01 Stories/Defects (count) | Percentage |
|--------------------|----------------|----------------------------------|------------|
| New Feature Development | Mobile | 10 | 41.67% |
| Research | Mobile | 5 | 20.83% |
| Research | Mobile | 4 | 16.67% |
| Technical Debt | Mobile | 3 | 12.50% |
| Defect | Mobile | 2 | 8.33% |
| **Total Mobile** | | **24** | **100%** |
| Technical Debt | API | 2 | 100% |
| **Total API** | | **2** | **100%** |

**Timesheet for: Amos, Cheryl — Time Period: 2025-01 (Jan 1 – Jan 31, 23 working days)**

| Feature (CIT) | Task (Financial Work Type) | Hours | Per Day (Hours/Days) | Team |
|---------------|---------------------------|-------|---------------------|------|
| Integrate with Venmo | New Feature Development | 60.00 | 60/23 = 2.61 | Mobile |
| Integrate with Venmo | Research | 30.00 | 30/23 = 1.30 | Mobile |
| 2 Factor Authentication | Research | 24.00 | 24/23 = 1.04 | Mobile |
| Alert Error Messaging | Technical Debt | 18.00 | 18/23 = 0.78 | Mobile |
| Security Preferences | Defect | 12.00 | 12/23 = 0.52 | Mobile |
| **Total** | | **144.00** | | |

**Timesheet for: Gillian, Erin — Time Period: 2025-01 (Jan 1 – Jan 31, 23 working days)**

| Feature (CIT) | Task (Financial Work Type) | Hours | Per Day (Hours/Days) | Team |
|---------------|---------------------------|-------|---------------------|------|
| Integrate with Venmo | New Feature Development | 38.33 | 38.33/23 = 1.67 | Mobile |
| Integrate with Venmo | Research | 19.17 | 19.17/23 = 0.83 | Mobile |
| 2 Factor Authentication | Research | 15.33 | 15.33/23 = 0.67 | Mobile |
| Alert Error Messaging | Technical Debt | 11.50 | 11.50/23 = 0.50 | Mobile |
| Security Preferences | Defect | 7.67 | 7.67/23 = 0.33 | Mobile |
| Capacity Analysis | Technical Debt | 92.00 | 92/23 = 4.00 | API |
| **Total on Timesheet** | | **184.00** | | |
| Total to Allocate to Mobile team | | 92 | | |
| Total to Allocate to API team | | 92 | | |

**Resource Workload Details — January 2025**

*Cheryl Amos:*
- Total Working Days: 23
- Standard Monthly Hours: 23 * 8 = 184 hours
- Vacation Taken: 40 hours
- Net Available Hours: 184 - 40 = **144 hours**
- Daily Allocation: 144 / 23 = **6.25 hours per day**

*Erin Gillian:*
- Total Working Days: 23
- Standard Monthly Hours: 23 * 8 = 184 hours
- Vacation Taken: None
- Net Available Hours: **184 hours**
- Daily Allocation: **8 hours per day**

### FCA Conclusion

The Frictionless Cost Accounting process ensures the accurate tracking of time, costs, and resources across both Clarity and Rally systems.


---
**See also:** [[Rally Integration Setup]], [[Rally Synchronization]]
**Parent:** [[_MOC Administration|Administration]]

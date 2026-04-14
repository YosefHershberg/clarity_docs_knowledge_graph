# Demand Management

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[13 - Classic PPM/_MOC Classic PPM|Classic PPM]]
- Canonical notes:
- [[13 - Classic PPM/Demand Management]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Demand Management Prerequisites (#demand-management-prerequisites)
- H2: Configure Incident Categories (#configure-incident-categories)
- H2: Demand Management Troubleshooting (#demand-management-troubleshooting)
- H3: Incident Management: Check for Processing Errors (#incident-management-check-for-processing-errors)
- H3: Error ITL-0514: Incident Category Must Be Created Before Instance Can Be Created (#error-itl-0514-incident-category-must-be-created-before-instance-can-be-created)
- H3: Idea Management: Match Scores Can Be Inaccurate (#idea-management-match-scores-can-be-inaccurate)
- H2: Manage Incidents (#manage-incidents)
- H3: Create an Incident or Service Request (#create-an-incident-or-service-request)
- H3: View a List of Incidents (#view-a-list-of-incidents)
- H3: View a List of Notifications About Incidents (#view-a-list-of-notifications-about-incidents)
- H3: Update the Status of an Incident (#update-the-status-of-an-incident)
- H3: Assign Resources to Incidents (#assign-resources-to-incidents)
- H3: Add Notes to Incidents (#add-notes-to-incidents)
- H3: Enter the Time Spent Resolving Incidents (#enter-the-time-spent-resolving-incidents)
- H3: Convert Unplanned Incidents to Planned Projects or Tasks (#convert-unplanned-incidents-to-planned-projects-or-tasks)
- H3: Automate Incident Processes (#automate-incident-processes)
- H3: Delete Time Entries for Incidents Associated With Deleted Investments (#delete-time-entries-for-incidents-associated-with-deleted-investments)
- H2: Manage Ideas (#manage-ideas)
- H3: The Idea Approval Process (#the-idea-approval-process)
- H3: Create an Idea (#create-an-idea)
- H3: Update Idea Properties (#update-idea-properties)
- H3: Define Scheduling Information (#define-scheduling-information)
- H3: Define Budget Information (#define-budget-information)
- H3: Create a Cost Plan for an Idea (#create-a-cost-plan-for-an-idea)
- H3: Create a Benefit Plan for an Idea (#create-a-benefit-plan-for-an-idea)
- H3: Create a Budget Plan for an Idea (#create-a-budget-plan-for-an-idea)
- H3: Submit an Idea for Approval (#submit-an-idea-for-approval)
- H3: Approve an Idea (#approve-an-idea)
- H3: Request More Information About an Idea (#request-more-information-about-an-idea)
- H3: Reject an Idea (#reject-an-idea)
- H3: Deactivate an Idea (#deactivate-an-idea)
- H3: Delete an Idea (#delete-an-idea)
- H3: Staff a Team to Work on an Idea (#staff-a-team-to-work-on-an-idea)
- H3: Evaluate and Change Resource Allocations for an Idea (#evaluate-and-change-resource-allocations-for-an-idea)
- H3: Change Team Staff Roles (#change-team-staff-roles)
- H3: Reset Staff Allocations (#reset-staff-allocations)
- H3: Replace Team Staff Resources (#replace-team-staff-resources)
- H3: Remove Team Staff Resources (#remove-team-staff-resources)
- H3: Capacity Planning Scenarios for Ideas (#capacity-planning-scenarios-for-ideas)
- H3: View Role Capacity on Ideas (#view-role-capacity-on-ideas)
- H3: Associate Ideas with Parent Investments (#associate-ideas-with-parent-investments)
- H3: Convert an Idea into an Investment (#convert-an-idea-into-an-investment)

The Demand Management capabilities of Classic PPM help you capture, classify, evaluate, and resolve all sources of demand. The business demand on information technology (IT) departments can take any of the following forms:
- An idea for a new product, service, or strategic initiative
- An incident, issue, or problem
- A project request
- A service request
- A support request

The application recognizes two primary types of demand: **ideas** and **incidents**.

As an IT manager, analyst, or business user, you can capture information about an idea, request, or incident on Classic PPM forms. Forms are powerful and comprehensive; however, they are often not the primary data source for incidents. To capture help desk tickets, incidents, and service requests, your organization likely uses other systems. You can also integrate the data in these other systems.

In integrated environments, the incidents that are imported typically show missing or incomplete investment data. The incidents can have individual effort entries that are not associated with an investment. In this case, use Classic PPM to assign a single investment to all such effort entries. To enable system integrations, use the XML Open Gateway (XOG). The XOG helps you capture incident data from other systems and bring it to Classic PPM.

> [!NOTE]
> The documentation may not match what you see in the product user interface. This difference can occur because all access to features, menus, pages, buttons, and objects is determined by your access rights. Your organization can also configure the application pages, objects, lookups, partitions, processes, and user interface. Contact your administrator if you are not able to complete any of the steps in the documentation.

---

## Demand Management Prerequisites

To enable users to manage demand, complete the following list of administrative prerequisites:
- Verify that the Demand Management module is installed and that you have a valid license for it.
- See Access Rights Reference and verify that each user has the appropriate access rights for ideas or incidents:
- **Incidents - Access**: This access right allows the user to access the incident pages.
- **Ideas - Navigate**: This access right allows the user to navigate to the Ideas page and view the Ideas link.

> [!NOTE]
> Users can confirm their access rights by logging in and selecting **Ideas** or **Incidents** from the Demand Management menu.
- Complete the Configure Incident Categories procedure.
- To enable users to create incidents, assign access rights for at least one incident category:
- **Incidents - Create**
- **Incidents - Select Category**
- To enable users to view or edit financial plans for ideas, assign one or more of the following access rights:
- Idea - Financial Plan - Submit All for Approval
- Idea - View Financial Information All
- Idea - Benefit Plan - Edit All
- Idea - Benefit Plan - View All
- Idea - Budget Plan - Approve All
- Idea - Budget Plan - Edit All
- Idea - Budget Plan - View All
- Idea - Cost Plan - Edit All
- Idea - Cost Plan - View All
- Verify that the following jobs for incidents are scheduled to run:
- **Post Incident Financials** job
- **Post Incident Effort Chargebacks** job
- Configure a currency and a cost/rate matrix. Before a resource can enter financial data for incidents, create as many cost matrices as needed for each entity. Define the general properties and then assign columns to the matrix.

---

## Configure Incident Categories

Before resources can log incidents, create incident categories. Incident categories are logical groups of investments that help classify incidents of a particular type. Configure logical groupings of incidents that reflect the structure of your organization. Then create and associate investments with these incident categories.

Incident categories help to distinguish real incidents from IT service requests. All incidents must belong to an incident category. Incident category mapping can occur at the investment level or at the administration level. Both require particular access rights.

In small organizations, where resources work with all incident categories, you can add all resources to a group. Then assign the group to an incident category. In a larger organization where resources are specialists, you can create groups and add resources according to their expertise. Then assign the groups to different incident categories.

As an administrator, define the incident category properties and associate your investments with incident categories. Then grant resources, groups, and OBS units access to the incident category.

Follow these steps:

1. Open **Administration**, and from **Data Administration**, click **Incidents**.
2. Click **New** and complete the following fields:
- **Category Name**: Defines the short name for a related group of incidents. Examples include 2016 New System, Mobile Devices, or Access Issues.
- **Category ID**: Defines the unique identifier for the incident category.
- **Description**: Describes this category of incidents.
3. Click **Save**.
4. To create a category of your investments including assets, applications, products, services, and other work, repeat these steps.
5. Click the **Associated Investments** tab.
6. To associate investments with an incident category, click **Browse** and select the check box next to one or more investments.
7. Click **Add**. The investments are assigned to the incident category.
8. Click **Save**.
9. Click the **Access to this Category** tab and select one of the following menu options:
- **Full View**: Displays a list of all resources with access to the incident category. You can click the key icon to view the access rights that each resource has for the incident category. The resulting Access Rights Profile shows you how the rights were granted. For example, the **Granted Through** column shows a resource, OBS, or group name.
- **Resource**: Defines the resources that have access to this incident category.
- **Group**: Defines the groups that have access to this incident category.
- **OBS Unit**: Defines the OBS units that have access to this incident category.
10. Click **Continue**.
11. Click **Add**, select the check box next to each access right, and click **Add and Continue**.
    a. Select the check box next to each entity (resource, group, or OBS unit) and click **Add**.
    b. Click **Continue** to proceed from resources to groups to OBS units and click **Add** and then **Continue**. When finished, click **Exit**.
12. Repeat these steps to configure access to each category.
13. Click the **Priority Setup** tab.
    a. Select the incident priority for a given impact and urgency combination. The product uses your incident priority matrix to escalate incidents.

> [!NOTE]
> The impact values are plotted against the urgency values. The intersection of every impact and urgency value becomes the incident priority. When you save an existing incident, the incident priority is recalculated based on changes in the incident priority matrix.

    b. Click **Save**.

14. (Optional) To assign investments only to specific incidents, click **Assign Investment**, specify your filter criteria, and click **Apply**.

---

## Demand Management Troubleshooting

### Incident Management: Check for Processing Errors

Use this procedure to identify incident management errors.

Follow these steps:

1. Open **Administration**, and from **Data Administration**, click **Incidents**. The setup page appears.
2. Click **Processing Errors**.
3. Enter your filter criteria and click **Filter**, or click **Show All**.

### Error ITL-0514: Incident Category Must Be Created Before Instance Can Be Created

**Symptom**: When you try to access incidents for the first time, the following error message appears:

`ITL-0514: Incident category must be created before incident instance can be created. Please contact your administrator.`

**Solution**: As an IT worker or any user with access rights, you can log a new incident. You can view and edit the incidents that you have created in the **Reported by Me** menu. IT workers can view a list of all incidents in their assigned incident category from the **Assigned to Me** menu. As an administrator, set up the incident category mapping before these users attempt to report and manage incidents. Complete the steps in Demand Management Incident Categories.

### Idea Management: Match Scores Can Be Inaccurate

**Symptom**: You are using the Replace Resource page to replace staff members. The page lists all the resources that you can access. When you use the team staff page of an idea to replace the assigned staff members, you get the following error:

`Match scores can be inaccurate if availability dates do not fall into the following range: ddmmyy - ddmmyy.`

**Solution**: This message appears when there is a discrepancy between the date range in the message and the dates in the **Availability** field. The Availability Match score can be inaccurate.

Follow these steps:

1. As an administrator, adjust the dates in the daily resource allocation Time Slice Properties.

> [!NOTE]
> Changes to the **From Date** and **Number of Periods** can also affect the following items:
> - Time slicing jobs
> - Datamart extraction jobs
> - Portlets
> - Reports

2. As a resource manager or IT worker, open the idea and click **Team**.
3. Use the team staff page of an idea to replace the staff members that are assigned to the idea. Click the **Resource Finder** icon for a Resource/Role entry. A list of resources with the same role as the resource being replaced appears. This list shows their availability during the idea time period.
- The **Availability** field at the top right of the page identifies the assignment period. The page also displays the number of hours the resource is allocated to the idea. Both the allocated dates and the hours are transferred to the new replacement.
- The **Availability Match** column displays a score that factors in the work period and the availability of each resource. Availability is based on the duration of the assignment and the daily availability of the resource. The higher the score, the closer the match.
4. Enter filter criteria to find the replacement resource.
- You are not required to add any skill specifications to your search criteria. In this case, the **Total Match** column value duplicates the Availability Match score and renders the Skill Match column. If you search by skills criteria and availability criteria, the Total Match column displays an average of the two scores.
- The product uses the resource allocation data to find resources that match the criteria. The dates that appear in this message come from the Time Slice definition `DAILYRESOURCEALLOCCURVE` (Slice ID=10). The date range is determined by using the current From Date and the number of periods that are defined in the time slice.
5. Select the check box next to the resource and click **Replace**. The Booking Confirmation page appears.
6. Click **Yes**.

---

## Manage Incidents

Incidents represent events that do not form part of the standard operation of a service. The incident can potentially cause an interruption to or a reduction in the quality of that service. Incidents include hardware, software, service, and support requests. An IT service request is a type of incident from a user for support, delivery information, access, or documentation.

Classic PPM captures information about incidents and service requests from users. The application can then help you achieve the following goals:
- Assign the resources that are required to resolve the issue
- Record the exchange of comments between analysts and users
- Identify the resolution
- Track the time that was spent

Without incident management, users can experience unnecessary extended interruptions resulting in increased costs to the organization. IT organizations want to manage both the demand for services and supply of resources to fulfill incidents and other service requests.

Unplanned work includes incidents, ideas, or requests for enhancements that consume resources. The combination of unplanned work and planned project work represents the total IT demand. In addition to planned work, assess the cost of unplanned work resulting from incidents and monitor your resource utilization.

> [!NOTE]
> If your organization uses an existing service management vendor, use the XML Open Gateway (XOG) to capture data in Classic PPM. You can use the XOG to import incidents and any associated notes and effort. Once imported, the incidents are ready to be part of the demand management process.

---

### Create an Incident or Service Request

To report a new IT event, issue, or service request, create an incident.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Incidents**.

> [!TIP]
> You can also create an incident when viewing an investment.

2. Click **New**.
3. Complete the fields in the **General** section:
- **Short Description**: Defines the name of the incident. Make the name short and descriptive.
- **Tracking ID**: Defines the tracking number for this incident. If auto-numbering is enabled, the field is read-only.
- **Detailed Description**: Defines the detailed description for the incident.
- **Type**: Indicates a type for this incident. Select **Incident** or **Service Request** from the drop-down.
- **Category**: Defines the classification for this incident and helps to trace costs for unplanned work. Click the **Browse** icon to select the incident category for this incident.
- **Urgency**: Defines how critical the incident is, based on business needs. Values: Low, Medium, High. Default: Medium
- **Impact**: Defines the extent to which the incident leads to a distortion of expected service levels. Values: Low, Medium, High. Default: Medium
- **Override Priority**: Indicates if the priority of the incident can be overridden. Incident priority is ranked by the Incident Priority matrix based on urgency and impact selections. This field is displayed only if you have the **Incidents - Override Priority** access right. Select the check box to override the priority of the incident.
- **Priority**: Defines the order of resolving incidents based on impact and urgency. If you do not have the Incidents Override Priority access right, the priority is system-generated and read-only. Otherwise, first select the **Override Priority** check box and then select a priority from the drop-down: Low, Medium, High.

> [!NOTE]
> The priority of an incident is a function of its impact and urgency. As an administrator, configure the impact and urgency values for all incidents in the incident priority matrix. As an IT analyst, modify the priority for a single incident by altering the values in the **Impact** and **Urgency** fields.
- **Start Date**: Indicates the date the IT worker is expected to start working on the incident.
- **Expected End Date**: Indicates the date the IT worker is expected to complete the work and mark the incident resolved.
- **Estimated Total Effort**: Defines the estimated total amount of effort to resolve the incident.
- **Verified Date**: Indicates the date the incident resolution is accepted and verified for closure.
- **Attachment**: Indicates if a file relating to the incident is attached. Click the **Browse** icon and attach the file. You can add up to ten file attachments.

4. Complete the **Primary Contact** section:
- **Name**: Specifies the contact person for this incident. The default value is the resource who created the incident.
5. Save the changes.

---

### View a List of Incidents

Use this procedure to generate a list of incidents. You can view important details such as the description, category, status, urgency, and impact.

Follow these steps:

1. Open **Home** and from **Demand Management** click **Incidents**.
2. Select one of the following tabs:
- **Assigned to Me**: Displays the Incident List page with a list of incidents to which requestors or IT workers are assigned. If you are assigned an incident, the list also displays any incidents you report. You can specify how you are notified of new incidents or of incidents assigned to you. These account settings are handled on the **Account Settings: Notifications** page.
- **Reported by Me**: Displays a list of incidents you report to requestors and IT managers, and any assigned to you.
- **Reported by Others**: Displays a list of incidents assigned to you, or reported by other resources. The list includes incidents mapped to incident categories to which you have access rights, either directly or by your association to a group. The page appears if you have either the **Incidents - Create/Edit - All** access right, or the **Incidents - Manage Category Incidents** access right.
3. Open an incident and choose one of the following tabs:
- **Associations**: View a list of the projects and project tasks associated with the incident. An association occurs any time you create a project or project task for the incident.
- **Effort**: View a list of the resource effort on timesheets to resolve this incident.
- **Notes**: Add notes to your incident or view a list of notes posted to your incident.
- **Processes**: Create and run processes to automate certain elements of demand management. For example, create a process that notifies the incident manager when the incident status changes to Resolved.
- **Audit** (Optional): This tab provides a way to track the history of specific activities that occur for an incident. Your administrator determines which fields are audited and what information is stored in the audit trail.

---

### View a List of Notifications About Incidents

As an IT analyst, you can receive notifications when an IT manager assigns you work on an incident. The method of receiving notifications depends on the assigned user personal notification settings.

Follow these steps:

1. Open **Home**, and from **Personal**, click **Organizer**. The Action Items portlet appears with other portlets.
2. Click **Notifications**.
3. In the **Show** field, select **Incidents**. The number of incident notifications appears.
4. Click the **Incidents** link. The notifications page appears.

---

### Update the Status of an Incident

Users and processes can change the status of a new incident over time.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Incidents**.
2. Click the incident short description to open the incident.
3. Select a value in the **Status** field:
- **New**: The incident is new and has not been reviewed and resolved.
- **Assigned**: The incident is open and a resource is assigned (Assigned To field).
- **Work In Progress**: The incident is open and the IT worker is working on the incident.
- **Escalated**: The incident is open but requires a higher-level authority to invest resources.
- **On Hold**: The incident is open; however, the IT worker is waiting for information to resolve the incident.
- **Resolved**: The incident is no longer open. The IT worker cannot reproduce the incident and the requestor did not supply adequate information, or lost contact with the service desk. Or, the incident is closed but is pending verification from the requestor. If the Assign Incidents process is active and running, setting the status of an incident to Resolved triggers a notification asking the requestor to verify and confirm the resolution.
- **Closed**: The incident is no longer open. The requestor is satisfied with the resolution. Incidents imported into Classic PPM through the XML Open Gateway also have a Closed status.
4. Click **Save**.

---

### Assign Resources to Incidents

Verify that all incidents are assigned to a resource. When you assign an incident, a notification is sent to the assigned user. The method of receiving notifications depends on the assigned user personal notification settings.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Incidents**.
2. Click the incident short description.
3. Click the **Browse** icon in the **Assigned To** field.
4. Enter filter criteria and click **Filter** or click **Show All**.
5. Select a resource and click **Add**. The selected resource is assigned to the incident.
6. Save the changes.
7. To reassign, perform these steps again and select a different resource or continue to the next step.
8. Select the check box next to the incident you want to reassign.
9. Click **Reassign**.
10. Enter filter criteria and click **Filter** or click **Show All**.
11. Select a resource and click **Reassign**.
12. On the confirmation page, click **Reassign**.

---

### Add Notes to Incidents

Use the incident notes page to view or to add private and public notes. Notes record additional information about an incident. All the notes appear in chronological order. You can sort the list of notes and can add more notes. All incident notes are public by default and viewable to the requestor and to the IT worker. Once a note is saved, it becomes read-only and cannot be modified or deleted. A timestamp and the name of the resource who added the note is stored with the note.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Incidents**.
2. Click the incident short description to open the incident.
3. Click the **Notes** tab and enter a subject and description.
4. Select the **Internal** check box to make this note private and viewable only to the IT worker adding the note. When the requestor or other IT staff members view notes, they only see public notes.
5. Click **Add**. The new note appears in the list.
6. Click the note subject to open the note. Click **Return** to close the note.
7. Click a column header to sort the list.
8. Click **Return**.

---

### Enter the Time Spent Resolving Incidents

You can enter the time spent working on incidents from the incident or from your timesheet.
- Use the incident effort page to display a chronological list of the timesheet entries you recorded for this incident. The incident effort is used to calculate costs for unplanned work.
- Link directly to your timesheet to record the time you spend working on any of your assigned incidents.

> [!NOTE]
> You can post time entries either for the incident only or for both the incident and the associated investment. To post the incident actuals to the investment, you must be a team member on the investment. If the investment is financially enabled, you can post the incident actuals to the investment financials.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Incidents**.
2. Click the incident short description to open the incident.
3. Click the **Effort** tab. You can also click the **Enter Time** button. The result is the same.
4. On the Effort tab, click **Enter Time**. The Select Investment and Time Period page appears.
5. Complete the following fields:
- **Investment**: Specifies the investment to charge for the resulting cost. The investments that you can select are based on the associated incident category of the incident and the incidents to which you have access rights for incident tracking.
- **Time Period**: Select an open timesheet period from the drop-down.
6. Click **Next**. The selected timesheet opens.
7. Log the time that you spent working on the incident on your timesheet.
8. Click **Save**. The time that you entered in the timesheet is now associated with the incident and investment. After all timesheets are approved and posted, the application calculates the costs for this incident based on the rate matrix associated with the investment.

> [!TIP]
> The **Enter Time** button may not be available for the following reasons:
> - The category assigned to the incident is not assigned to any investments.
> - The user (resource) does not have access rights to the incident, investment, or timesheet.
> - The user (resource) does not have any available or open timesheets.

---

### Convert Unplanned Incidents to Planned Projects or Tasks

Incident scope can reach a point that requires management with your existing investments or pipeline. The IT worker that is assigned to the incident flags the incident for conversion and assigns it to a project manager. Depending on the personal notification settings of the project manager, a notification to convert the incident to a project or task is sent.

As a project manager, convert the unplanned incident or work request into a planned project or project task.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Incidents**.
2. Click the incident short description to open the incident.
3. Select the **Flagged for Conversion** check box.
4. Select a project manager in the **Assigned Project Manager** field.
5. Save the changes. You can close the incident.
6. As the project manager who is assigned to the incident, convert the incident to a project or task. Separate procedures are included below.
7. Track projects and tasks that are associated with the incident. After you convert an incident, use the **Incident Associations** page.

#### Convert Incidents into Projects

If you get a notification from an IT worker to convert an incident to a project task, use the notification to link to the incident.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Incidents**.
2. Click **Assigned To Me**.
3. Select the check box next to the incident, and click **Convert to Project**. The select conversion type page appears.
4. To convert the incident into a new project, select **Project**.
5. (Optional) You can convert the incident into a new project that is based on a project template. Select **Project from Template** and click **Next**. Select a project template.
6. Click **Next**. The create page appears. Details from the incident page (project, manager, start, and finish dates) are replicated on the project page.
7. Complete the remaining fields on the page.
8. Save the changes.

> [!NOTE]
> If more work is required to resolve the original incident, the IT project staff can reopen the incident.

#### Convert Incidents into Project Tasks

Each new project task is added to the bottom of the WBS in the project. Only the project manager assigned to the incident can convert it into a project task. A task can only be associated with an existing and active project. You can convert only one incident at a time.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Incidents**.
2. Click **Assigned To Me**.
3. Select the check box next to the incident, and click **Convert to Task**. The select project page appears.
4. Select a project.
5. Click **Add**. Details from the incident page (project, manager, start date, and finish date) are replicated on the Create Task page.
6. Complete the remaining fields on the page.
7. Save the changes.

> [!NOTE]
> If more work is required to resolve the original incident, the IT project staff can reopen the incident.

#### How Incident Data Converts to Project or Task Data

When you convert an incident to a project or a project task, some data is carried forward from the incident. The following table traces the conversion of data:

| Incident Data Field | Project Data Field | Project Task Field |
|---|---|---|
| Short Description | Project Name | Name |
| Tracking ID | Project ID | ID |
| Status | Status (Unapproved) | Status (Not Started) |
| Detailed Description | Description | N/A |
| Assigned Project Manager | Manager | N/A |
| Start date | Start Date | Start (date) |
| Expected End date | Finish Date | Finish (date) |

The following exceptions apply:
- Effort data is not carried forward to the project or project task during conversion. The time that you spend and enter for the incident does not get carried forward when the incident is converted. The incident effort and the new project or task effort represent separate activities and are time-tracked separately.
- Any custom attributes on the Incident object do not convert to identical custom attributes on the project or task.
- If the contact or assigned resource is not a team member of the project, data does not carry forward.
- A link limitation exists after you convert an incident into a project or project task. You cannot link back to the incident from the project or project task. A link exists only from the incident to the converted project or project task.

---

### Automate Incident Processes

You can create automated incident processes and can track their progress. As a process administrator, activate the **Assign Incidents** process to manage the assignment, review, and completion of incidents. When a user logs a new incident, the process starts automatically. You can customize the process with your own business rules.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Incidents**.
2. Click the incident short description.
3. Click **Processes**.
4. Click the **Processes** tab again and select one of the following menu options:
- Click **Available** to view processes that are already created for the incident.
- Click **Initiated** to view processes that have already started.
5. Select the check box for an available process and click **Start** to initiate it. An instance of the Assign Incidents process is created automatically each time an incident is submitted for approval.
6. When the IT analyst fixes the issue, open the incident and change the status to **Resolved**.

> [!NOTE]
> Setting the status of an incident to **Resolved** when the Assign Incidents process is active and running triggers a notification. The notification asks the requestor to verify and confirm the resolution.

7. Enter a date in the **Resolved Date** field.
8. When the original requestor has accepted the resolution for the incident, change the status of the incident to **Closed**.

> [!NOTE]
> Setting the status of an incident to **Closed** when the Assign Incidents process is active and running triggers a notification. The notification informs the requestor that the incident is closed. The automated process does not change the status of an incident to Closed.

9. The Assign Incident process ends when the Resolution Verification step is complete and the incident is resolved.

#### The Assign Incidents Process

The Assign Incidents process includes the following steps:
- **Assign IT Worker**: This step is triggered when an incident is first logged. It triggers the Assign Incidents job. When the job ends, this step sends an action item to the IT worker to review their assigned incident. Once this step is complete, the Acquire Incident step starts.
- **Acquire Incident**: This step is triggered when either the Assign IT Worker or the Incident Not Resolved step is complete. It sends an action item to the IT worker to review and accept the newly assigned incident. If the assignment is rejected, the Incident Escalated step starts. If the assignment is accepted, the Work On Incident step starts.
- **Work On Incident**: This step is triggered when the Acquire Incident step is complete. It sends an action item to the IT worker to work on the new assignment. Once marked as done, the Record Effort step starts.
- **Record Effort**: This step is triggered when the Work On Incident step is complete. It sends an action item to the IT worker to record the effort spent on the incident. Once marked as done, the Resolution Verification step starts.
- **Resolution Verification**: This step is triggered when the Record Effort step is complete. It sends an action item to the requestor to verify and confirm that the incident has been satisfactorily resolved. If the resolution is approved, the process ends. If rejected, the Incident Escalated step starts.
- **Incident Escalated**: This step is triggered when either the Acquire Incident or the Resolution Verification step is complete. It changes the status of the incident to Escalated. Once this step is complete, the Incident Not Resolved step starts.
- **Incident Not Resolved**: This step is triggered when the Incident Escalated step is complete. It sends a notification to the IT manager that the incident has not been resolved and to review and reassign the incident. When the IT manager marks the action item as done, the Acquire Incident step starts.

> [!TIP]
> With sufficient access rights, your administrator or manager can share, save, or copy this process for you to view how it appears at your organization with any customization applied. See Configure Processes - Process Flow Diagrams under Administration.

---

### Delete Time Entries for Incidents Associated With Deleted Investments

Beginning in Clarity 15.5.1, you can run the **Delete Investments** job to remove investments and their associated time entries. For incidents tied to investments, the job does not delete the original incident. The job deletes only the reference between the incident and an associated investment and deletes the investment and incident time entries.

The following steps demonstrate how you can achieve your goals for the removal of associated investments and time entries:

1. **Create an incident in Classic PPM:**
   a. Click **Home, Demand Management, Incidents**.
   b. Click **New**, enter required fields, and click **Save**.
   c. In the **Investment** field, select an investment such as an application.
   d. In the **Assigned To** field, search for a resource by name.

2. **Assign a resource to the application associated with the incident:**
   a. Click **Home, Portfolio Management, Applications**.
   b. Open the same application you selected for the incident.
   c. On the **Team** tab, click **Add**, and select the resource.

3. **Enter time for the resource working on the incident:**
   a. The resource opens their timesheet in Classic PPM, Clarity, or the mobile app. Time entries for tasks are supported by all three timesheet environments; however, incident time is only supported in Classic PPM timesheets.
   b. The resource can add work and report their time. In Classic PPM, click **Add Incident** or **Add Task** and select the application task and enter time.
   c. The manager approves the timesheet and the application posts actuals.

4. **Delete the investment:**
   a. Set the system option to delete investments with actuals. Click **Administration, Project Management, Settings** and select **Allow Marked Investments with Timesheet and Transaction Data to be Deleted**.
   b. Open the investment **Properties, Settings** page and set **Financial Status** to closed.
   c. Clear the **Active** check box and click **Save and Return**.
   d. Mark the application for deletion. Click **Show All** to see the inactive application. Select that same application and click **Mark for Deletion**.
   e. Run the **Delete Investment** job. The application is removed and all time entries are removed, even from posted timesheets.

---

## Manage Ideas

Ideas are the initial stage in the creation of opportunities for investment such as projects, applications, products, and services. An idea lays the foundation for a future investment by serving as a container for pertinent information. Develop and approve the best ideas and reject unwanted ideas before they become high-risk investments that consume resources.

You can track ideas and can convert them into investment opportunities. For example, you can evaluate an idea, decide that it has value, and convert it to a project. You can convert an idea into any of the following investment types:
- Projects
- Products
- Services
- Assets
- Applications
- Other work

These investment opportunities can then be approved as part of your portfolio. You can include ideas in an investment hierarchy, build a team and budget around them, and set up reports. Use the audit trail to track the history of specific activities that occur for an idea.

Ideas can originate in other systems. You can import ideas from another system using the XML Open Gateway. After you import them, the ideas are part of the portfolio management process.

---

### The Idea Approval Process

The Idea Approval process is an out-of-the-box Classic PPM idea management process. As a process administrator or manager, the idea approval process helps you manage the entry, review, and approval of ideas. By default, this process is not active. A process administrator activates it before the idea approval process can be started. You can customize the process using your own business rules.

> [!NOTE]
> You can only have access to one Idea Approval process at a time. The process administrator cannot grant access to more than one Idea Approval process. Otherwise, an error occurs when you click **Submit for Approval**.

Automated idea processes move the idea through an implicit workflow. The following steps summarize the process:

1. An instance of the Idea Approval process is created automatically each time a user creates an idea. A new idea has an **Unapproved** or **Submitted for Approval** status.
2. The approval process sends notifications for each action item or step to designated recipients. The process locks the idea status during the approval process. No one can change the idea status manually.
3. A user submits a proposed idea for approval. All required information is complete. The idea status changes to **Submitted for Approval**.
4. After a user submits an idea, you can also mark it rejected, incomplete, or approved.
5. An action item is sent to each reviewer who has the right to approve the idea, requesting that the approver review and then approve the idea.
6. The reviewer examines the idea. Set the idea status to approved or rejected. To request more information from the original person, choose incomplete.
7. Users can resubmit any Incomplete ideas. When a user resubmits an idea, its status is set to **Submitted for Approval** and it returns to the start of the process.
8. When an idea is approved, you can convert it into any project, service, or investment. Your access rights determine what entities you can create.
9. A user marks an idea approved, incomplete, or rejected. The system sends an action item notification to the original author of the idea.
10. Idea approval, rejection, or deletion terminates the process.

> [!NOTE]
> Multiple users can have the right to approve the same idea. Contradictory responses could get recorded. For example, one reviewer approves the idea and another rejects it before the background process engine cycles. In this case, the outstanding action items are closed, if any, and new copies of the same action item are sent. The new action item states that contradictory responses are received. As another example, a user with authorization can directly mark an incomplete idea as approved. If a user changes an Incomplete idea to Rejected, error message `INV-0007: Enter a valid status code` appears. To avoid this condition, mark the idea **Submitted for Approval** and change it to **Approved** or **Rejected**.

---

### Create an Idea

Use the create idea page to define the properties, estimated costs and benefits, and detailed description of an idea.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Click **New**.
3. Complete the **General** section:
- **Subject**: Defines the idea summary/name. When you convert the idea into a project, service, or investment, the subject is used as a link from the investment to the idea. During the conversion process, the subject becomes the description of the investment.
- **Idea ID**: Defines the idea unique ID. If auto-numbering is configured, the field displays as read-only. During the conversion process, the Idea ID is the name of the investment.
- **Idea Priority**: Defines the value assigned to the idea by the idea manager. Choices: Low (default), Medium, High.
- **Description**: Specifies the functionality and value to users of implementing the idea.
- **Manager**: Defines the name of the user who manages and owns the idea. The Idea Manager can edit general Properties, Links, and Conversations on the idea. However, the Idea Manager needs additional access rights to manage other aspects of the idea such as booking staff, managing Risks, Issues, and Change Requests, and managing financials.
- **Originating Requestor**: Defines the name of the resource who originated the idea request. By default, the field displays the name of the current user. When an idea is created without specifying a manager, the **Idea Initiator (Auto)** access right is granted to the Originating Requestor. When an Idea Manager is specified, the initiator access right is revoked.
- **Active**: Specifies if the idea is active. Activate the idea to allow resources to view the idea in any capacity planning portlet. Default: Selected
- **General Notes**: Specifies additional information about the idea not covered by the idea description.
4. Complete the **Estimated Costs and Benefits** section.

> [!NOTE]
> Some of the properties are used later in the approval process when you convert the idea into a project, service, or investment.

5. Complete the following fields in the **Detailed Description** section:
- **Impact on Existing Initiatives**: Defines the impact that the idea has on the existing initiatives.
- **Risks**: Defines the risks, whether the idea is implemented or not.
- **Dependencies**: Defines any dependencies for the idea.
6. Click the **Browse** icon in the **Organizational Breakdown Structure** section next to the OBS to associate with the idea for security, organizational, and reporting purposes.
7. To save the idea, click **Save**. The new idea appears on the Ideas page with an **Unapproved** status.
8. To save the new idea and submit it for approval, click **Submit for Approval**. The new idea appears on the Ideas page with a **Submitted for Approval** status.

---

### Update Idea Properties

To define the idea, update its properties when information becomes available.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Open an idea.
3. Click the **Properties** tab and select a menu item to update idea properties.
4. Edit general information, such as name, manager, goals, status, alignment, and OBS associations.
5. Select a resource in the **Target Manager** field. The target manager is the resource who manages the idea when it is converted into a project, service, or investment. Complete the field before you convert the idea. If you leave this field empty, the resource you select as the Idea Manager becomes the manager for the converted project or investment.
6. Complete the fields in the **Detailed Description** section of the properties page.
7. Define Scheduling Information such as start and finish dates, and tracking methods.
8. Define Budget Information such as planned cost and benefit, NPV, and breakeven metrics.

---

### Define Scheduling Information

Use this procedure to define the idea start and finish dates, open the idea for time entry, and define its charge code.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Open an idea.
3. Click the **Properties** tab and click **Schedule**.
4. In the **Schedule** section, complete the following fields:
- **Start Date**: Indicates the idea start date. When you convert the idea into an investment, the date is the investment start date.
- **Finish Date**: Indicates the idea finish date. When you convert the idea into an investment, the date becomes the investment finish date.
- **Set Planned Cost Dates**: Specifies if the planned cost dates are synchronized with the investment dates. Default: Selected
5. In the **Tracking** section, complete the following fields:
- **Time Entry**: Enables staff members to record the time that they spend working on the idea on their timesheets. Default: Selected
- **Track Mode**: Indicates the method for the staff members to enter time. Options:
- **PPM**: Staff members record time using timesheets.
- **None**: Non-labor resources track actuals through transaction vouchers or through a scheduler.
- **Other**: Import actuals from a third-party application.
- Default: PPM
- **Charge Code**: Select a default charge code to use for all idea tasks. If you enter a different charge code at the task level on timesheets, the task-level charge codes override the idea-level charge code.
6. Click **Save and Return** or **Submit for Approval**.

---

### Define Budget Information

To evaluate ideas for portfolio management, define the planned cost and benefit information for each idea. You can define budget information from the **Idea: Properties: Main - Budget** page. With budget properties, you can define metrics such as the idea planned cost, NPV, ROI, and breakeven information. You can also elect to have the application calculate budget metrics automatically using the cost of capital.

The values budget properties are applied to only one time period: from the idea start date to the finish date. The dates are applied only to your idea and not to its parent investments.

Follow these steps:

1. Open the idea and click its subject.
2. Open the **Properties** menu and then from Properties, click **Financial Summary**.
3. Complete the following fields:
- **Currency**: Defines the currency for the investment. Default: System currency
- **Budget equals Planned Values**: Specifies if the budget values match the planned values. If a detailed budget plan exists, all field values in the Budget section are display-only. Default: Selected
- **Calculate Financial Metrics**: Specifies if financial metrics are calculated automatically. Default: Selected
- **Use System Reinvestment Rate**: Select to calculate the total cost of capital at the system reinvestment rate.
- **System Rate**: Displays the system rate for calculating the total cost of capital.
- **Investment Rate**: Displays the investment rate for calculating the total cost of capital.
- **Initial Investment**: Defines the initial investment on the idea.
- **Planned Cost**: Defines the idea planned costs (sum of Planned Operating Cost and Planned Capital Cost).
- **Planned Cost Start / Planned Cost Finish**: Date range for the planned cost.
- **Planned Benefit**: Defines the total planned benefit that you receive from the idea.
- **Planned Benefit Start / Planned Benefit Finish**: Date range for the planned benefit.
- **Planned NPV**: Displays the planned Net Present Value.
- **Planned ROI**: Displays the planned Return on Investment.
- **Planned Breakeven**: The date when planned cost equals the planned benefit (read-only).
- **Planned IRR**: Displays the planned internal rate of return.
- **Planned MIRR**: Displays the planned modified internal rate of return.
- **Planned Payback Period**: Displays the date of the investment planned payback period.
- **Budgeted Cost**: Displays the budgeted cost amount (sum of Budgeted Operating Cost and Budgeted Capital Cost).
- **Budgeted Cost Start / Budgeted Cost Finish**: Date range for the budgeted cost.
- **Budgeted Benefit**: Displays the budgeted benefit amount.
- **Budgeted Benefit Start / Budgeted Benefit Finish**: Date range for the budgeted benefit.
- **Budgeted NPV**: Displays the budgeted Net Present Value.
- **Budgeted ROI**: Displays the budgeted Return on Investment.
- **Budgeted Breakeven**: Date when budgeted cost equals the planned benefit (read-only).
- **Budgeted IRR**: Displays the budgeted internal rate of return.
- **Budgeted MIRR**: Displays the budgeted modified internal rate of return.
- **Budgeted Payback in Months**: Displays the investment budgeted payback period.
4. Submit your changes.
5. View an Overview of Estimated Cost and Benefits.

---

### Create a Cost Plan for an Idea

Cost plans can go through an approval process to become a formal budget plan. You can submit cost plans for approval like any other type of investment. After approval, the cost plan becomes the current budget plan. You can also associate a benefit plan with a cost plan or a budget plan.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Open an idea.
3. Click the **Financial Plans** tab.
4. If you see the following error, click the **Properties** tab, assign a Department OBS, and click **Save**:
   `You must associate this investment with an entity before a financial plan can be set up.`
5. Click the **Financial Plans** menu and select **Cost Plans**.
6. Click **New Manual Plan**.
7. Complete the required fields.
8. To link the cost plan to a benefit plan, click **Browse** in the Benefit Plan field and select a plan.
9. Click **Save**.
10. Click the **Detail** tab.
11. Click **Add** to list the cost types and transaction classes for your plan. For example, you can add operating costs for hardware.
12. Click **Save and Return**.
13. On the Cost Plan Details page, click in the cells under **Amounts By Period**.
14. Add costs and units for each transaction class.
15. (Optional) To insert costs from an existing investment team, click the **Actions** menu and select **Populate from Investment Team**.
16. Click **Save**.

---

### Create a Benefit Plan for an Idea

To calculate ROI or NPV on an idea, create a benefit plan and associate it with a cost plan. You do not need approval for benefit plans.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Open an idea.
3. Click the **Financial Plans** tab.
4. If you see the entity association error, click the **Properties** tab, assign a Department OBS, and click **Save**.
5. Click the **Financial Plans** menu and select **Benefit Plans**.
6. Click **New**.
7. Complete the required fields.
8. To link the cost plan to a benefit plan, click **Browse** in the Benefit Plan field and select a plan.
9. Click **Save**.
10. Click the **Detail** tab.
11. Click **Add** to list the benefits by description, class, and subclass for your plan.
12. Click **Save and Return**.
13. On the Benefit Plan Details page, click in the cells under **Amounts By Period**.
14. Add benefits for each benefit class by time period.
15. Click **Save**.

---

### Create a Budget Plan for an Idea

When a cost plan is approved, it becomes the budget plan for an investment.

Follow these steps:

1. Open an idea.
2. Click the **Financial Plans** menu and select **Cost Plans**.
3. Open a cost plan.
4. From the **Actions** menu click **Submit for Approval**. The cost plan becomes the proposed submitted budget plan.
5. Click the **Financial Plans** menu and select **Budget Plans**.
6. Click **Approve**. The cost plan becomes the approved budget plan.

#### Financial Limitations for Ideas

The following limitations exist for a financial plan on an idea:
- The actuals in the financial plans, manual transactions, and the chargebacks are not financially enabled.
- Actuals using transactions are not possible.
- Only a manually created cost plan (plan of record) can be converted to a target investment. A cost plan created using the methods Populated from Investment Team or Task Assignment is not converted.
- A budget plan cannot be converted to a target investment.
- A workflow system action is not available to convert an idea financial plan to a target investment. An idea financial plan can only be converted through the user interface.

---

### Submit an Idea for Approval

After you develop a new idea, submit it for approval. You can also submit an idea for approval while still creating it.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Open an idea.
3. Do one of the following:
- Click the **Submit for Approval** button.
- Change the **Status** field to **Submitted for Approval** and click **Save and Return**.

---

### Approve an Idea

Only ideas with a status of **Submitted for Approval** can be approved.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. (Optional) Open an idea, select **Approved** from the Status drop-down list, and save your changes.
3. Select the check box next to the idea.
4. Click **Approve**.

---

### Request More Information About an Idea

Use this procedure if you believe that an idea requires more information before approval and conversion to a project or investment.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Open an idea. The properties page appears.
3. Change the submitted idea status to **Incomplete**.
4. In the **General Notes** field, enter any notes or directions about the additional information that you require from the idea manager.
5. Click **Save and Return**. The Ideas page appears and the idea status is **Incomplete**.
6. Send an action item and a notification to the idea manager to provide additional information and to resubmit the idea.

> [!NOTE]
> You can also achieve these goals using a process.

---

### Reject an Idea

You can reject an idea from the list page or from its properties page. An idea can only be rejected if its status is **Submitted for Approval**.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Select the check box next to the idea.
3. Click **Reject**.

> [!NOTE]
> You can also open the idea, select **Rejected** from the Status drop-down list, and save your changes.

---

### Deactivate an Idea

Deactivate an idea when you want to put it on hold indefinitely.

Follow these steps:

1. Open the idea. The list page appears.
2. Click the subject of the idea to deactivate. The properties page appears.
3. In the **General** section of the page, clear the **Active** check box.
4. Click **Save**.

---

### Delete an Idea

You can delete an idea, including an idea that has been converted to an investment. Deleting a converted idea removes the link to the investment. Deleting an idea does not delete the converted investment.

Follow these steps:

1. On the Ideas list page, select the check box next to an idea.
2. Set the **Active** field to **No** and click **Save**. You cannot delete an active idea.
3. Click **Mark for Deletion**. The idea no longer appears in the list.

> [!NOTE]
> The **Delete Investments** job must be executed for the investment to be permanently deleted.

---

### Staff a Team to Work on an Idea

#### Select Resources

To start capacity and portfolio planning, staff your most promising ideas with resources. Ideas are not associated with tasks and staffing them does not result in long-term commitments for that staff.

Add more staff to estimate and plan capacity before converting the idea into a project, investment, or service. You can allocate roles or resources, and labor or non-labor types. The staff can record the time that they spent working on an idea on their timesheet. Use a role as a placeholder when you do not know the named resource for the idea.

> [!NOTE]
> You cannot staff multiple instances of the same named resource to an idea.

Follow these steps:

1. Open the idea.
2. Click **Team**.
3. To select individual resources or roles for the idea staff, click **Add**. The Select Resources page appears.
4. To add all the resources in a selected OBS unit to the idea staff, click **Add/Update by OBS**.
5. Select the resources and roles to add to the idea staff. Use the Search Filter to find resources or roles by name or other criteria.
6. Click **Add** to add the resources and roles. All resources are automatically allocated at 100 percent of their available working days.
7. Adjust any of the following values:
- **Role**: Displays the role of the resource.
- **Time**: Displays a yellow checkmark if the resource or role is allowed to enter time for the idea.
- **Booking Status**: Displays the resource or role booking status:
- **Hard**: The resource is committed to the idea.
- **Soft**: The resource is tentatively scheduled for the idea.
- **Mixed**: Both soft and hard allocation exists for the resource.
- **Start**: Displays the team member allocation start date.
- **Finish**: Displays the team member allocation finish date.
- **% Allocation**: Displays the team member percent allocation to the idea. Default: 100 percent.
- **Allocation**: Displays the number of hours the resource has been tentatively booked to the idea. This field cannot be edited.
- **Allocated Actuals**: Displays the total number of hours the resource has recorded to date on this idea.
- **Incident Actuals**: Displays the time posted to incidents associated with this idea.
- **Total Actuals**: Displays the aggregated total actual time posted (sum of allocated actuals and incident actuals).
8. To open the resource profile and change planned and hard allocations, click the **Properties** icon.
9. To open the Find Resources page and to replace the resource or role, click the **Resource Finder** icon.
10. To edit the properties for a resource, click a resource name in the list.
11. To update the resource or role allocation, click an entry in the **Resource Allocation** column.

> [!NOTE]
> When adding resources to your idea staff, you could easily over-allocate the resource by mistake. In this case, a confirmation page appears. The available hours for a resource can be less than the total number of requested hours. Select one of the following options:
> - **Overallocate**: Over-allocates the resource.
> - **Remaining Only**: Books the resource for the amount listed in the Remaining Availability column.

12. Confirm that you want to over-allocate the resource, or accept the remaining availability.
13. (Optional) View the bottom-up aggregated work effort by role or switch the view to edit the planned work for the idea.

> [!NOTE]
> Staff allocation is the period during which a resource is booked to an idea. Unless you change the booking dates, staff members are automatically booked for the entire duration of the idea.

14. Save the changes.

---

### Evaluate and Change Resource Allocations for an Idea

You can adjust the default resource allocations. You can unbook a hard-booked resource, or extend a resource for additional planning. The team detail page of an idea lists planned and committed allocation for an idea by resource and by time period in a graph.

To view the page, select **Team**, and then click **Detail** from the page toolbar.

The team detail page displays data based on resource, allocation, and time period. The time period columns are, by default, set to weekly. The allocation color code is as follows:
- **Yellow**: Resource is allocated at or under availability for that time period.
- **Red**: Resource is over-allocated for that time period.
- **Green**: Allocation to other investments, ideas, or services.

Follow these steps:

1. Open the idea.
2. Click **Team**.
3. Click the **Properties** icon for the resource to change allocation.
4. In the **Default % Allocation** field, enter the percentage of that resource's total time to allocate to the idea. You can enter 0 (zero).
5. In the **Planned Allocation** and **Hard Allocation** sections, create a row for each deviation from the default allocation:
- **Planned Allocation**: A curve that represents the default or total allocation amount requested by the manager.
- **Hard Allocation**: A curve that represents the allocation amount that the resource manager commits.
- **Booking Status**: Indicates the kind of booking applied to a resource. This value changes according to the allocation amounts.
6. To create a planned or hard allocation period:
   a. Enter or select a **Start** date for the period.
   b. Enter or select a **Finish** date for the period.
   c. Enter the percentage of time in the **% Allocation** field. You can enter 0 (zero).
7. Click **New Row** to add another row and repeat.
8. Click **Save and Return**.

---

### Change Team Staff Roles

You can change a staff member role on an idea-by-idea basis. The change does not affect the role that is identified for them in their resource profile.

Follow these steps:

1. Open the idea.
2. Click **Team**. The staff list page appears.
3. Click the **Properties** icon for a resource.
4. In the **General** section, select a role in the **Investment Role** field.
5. Save the changes.

---

### Reset Staff Allocations

You move resource allocations backward or forward in time to shift or scale all or a portion of the resource allocations for an idea. As you move data, segmented allocation dates are kept intact, even when the percent allocated for each segment changes.

You can also reset the staff allocations for an idea in the following ways:
- **Set the allocation** to update the allocation of multiple team members.
- **Commit the planned allocation** to reset a resource hard allocation to be equal to the planned allocation.
- **Accept the hard allocation** to reset a resource planned allocation to be equal to the hard-booked allocation.

Follow these steps:

1. Open the idea.
2. Click **Team**.
3. Select the check box next to a resource.
4. To shift the allocation, click **Shift Allocation** from the **Actions** menu.
   a. Enter a start and finish date for the range that you want to shift.
   b. In the **Time Shift Parameters** section:
- **Shift to Date**: Enter a new start date. If left empty, no shifting occurs.
- **Shift Cut-off Date**: Enter the last date for the time shift range. You cannot shift allocations beyond this date.
- **Scale Allocation % By**: Enter the percentage change in the allocation for the shift. If left empty, no scaling occurs.
   c. Click **Save and Return**.
5. From the **Actions** menu, click **Set Allocation**.
   In the **General** section, set the following allocations for the selected team members:
- **Start Date**: Defines the date of starting work on the idea. Select the **Reset to Match Investment Start Date** check box to reset to match the idea start date.
- **Finish Date**: Defines the last date of working on the idea. Select the **Reset to Match Investment Finish Date** check box to reset to match the idea finish date.
- **Default % Allocation**: Defines the percentage of time for allocating the resource to the idea. You can enter 0 percent.
- **Booking Status**: Displays the resource or role booking status (Hard, Soft, Mixed).
6. (Optional) Commit the planned allocation:
   a. From the **Actions** menu, click **Commit Planned Allocation**. The confirmation page appears.
   b. Click **Yes**. A hard booking status for a resource signifies full commitment.

> [!NOTE]
> Committing planned allocation does not reset the default allocation percentage. This action copies the planned allocation into the Hard Allocation section of the resource Staff Member Properties page.

7. (Optional) Accept the hard allocation:
   a. Click the **Actions** menu and select **Accept Hard Allocation**. The confirmation page appears.
   b. Click **Yes**. All segments are then reset to equal the hard-booked segment.

8. Click **Save and Return**.

---

### Replace Team Staff Resources

Replace a staff member assignment from the team staff page of an idea. Use the availability score to find a replacement at the team level. During replacement, resources can become over-allocated.

Consider the following points before making a staff member replacement:
- Replacing a resource does not transfer the actuals and pending actuals of the original to the new staff member. Only the remaining ETC is transferred.
- The original staff member should complete their time entries so that the actual data posts before the replacement occurs.
- The role of the original staff member is transferred to the new staff member, unless you are replacing a role with a different role.

The following table identifies how data from the replaced staff member transfers to the new staff member:

| Data Type | Transfers to New Staff Member |
|---|---|
| Available Start | Yes, if this date has not passed and if the new resource is not booked on that date |
| Available Finish | Yes |
| Remaining Allocation | Yes |
| Percent (%) Allocation | Yes |
| Investment Role | Yes |
| Existing Actuals | No |
| Pending Actuals | No |
| Baselines | No |

---

### Remove Team Staff Resources

You can remove a staff member from your idea when the following conditions are true:
- The resource has not posted any actuals to the idea.
- The resource has no pending submitted actuals.

> [!NOTE]
> Removing a staff member from your idea does not:
> - Delete the resource from the application.
> - Change the staff member status to inactive.

Follow these steps:

1. Open the idea.
2. Click **Team**. The staff list page appears.
3. Select the check box next to the resource, and click **Remove**. The confirmation page appears.
4. Click **Yes**.

---

### Capacity Planning Scenarios for Ideas

Scenarios allow you to apply a systematic methodology to optimize your idea. Create a capacity planning scenario from any idea page that displays the scenario toolbar.

> [!NOTE]
> You cannot create portfolio scenarios from an idea. Create portfolio scenarios in a portfolio.

Apply capacity planning to ideas. Use the scenario toolbar to select any existing capacity planning scenarios to which you have access rights. Apply scenarios to your idea to analyze how staffing changes or shifts in dates affect the outcome of your idea or portfolio. You can evaluate your ideas by switching between a scenario and the plan of record.

---

### View Role Capacity on Ideas

You can view the aggregate role demand including role-based team members and named resources. You can compare the demand and the capacity of the resources that fill those roles.

Follow these steps:

1. Select **Role Capacity** on the toolbar from the idea **Team** menu. The Role Capacity page appears. Resources with no team role appear in the **[No Role]** row.
2. View role allocations for the idea, allocations to other investments, and over-allocations. Compare this information with the available role capacity for this idea.
3. (Optional) View this information from inside and outside of a scenario.
4. If a role appears over-allocated, click **Staff** to go to the team staff page. View all the resources using that role.

---

### Associate Ideas with Parent Investments

You can make an idea a child of any existing investment in the system except another idea. Ideas cannot have children. The hierarchical structure enables roll-up reporting at the parent level to show summarized cost and work values.

An idea can serve as a child for more than one investment. You set the allocation percentage for each relationship on the **Hierarchy** tab. Identify the ownership percentages only when more than one parent investment has been identified.

Follow these steps:

1. Open **Home**, and from **Demand Management**, click **Ideas**.
2. Open an idea.
3. Click the **Hierarchy** tab.
4. Click **Add** to add parent investments.
5. Select the check box for the parent and then click **Add**. You can select more than one parent investment.
6. If the idea has more than one parent, you can edit the allocation percentages. The total is always 100 percent.
7. Click **Save**.
8. Select one or more check boxes and then click **Remove** to remove parent investments. To remove a parent, adjust the allocations of the remaining parents so they total 100 percent. The allocation of the parent you want to remove must be set to 0 percent.
9. Click **Save**.

> [!NOTE]
> You can also add or remove child idea associations from the parent investment page.

---

### Convert an Idea into an Investment

You can convert an approved idea into another investment type such as a project. The same processing for projects occurs when ideas are converted to any other investment types.

Follow these steps:

1. Open an approved idea.
2. Click **Convert**. The select investment type page appears. The investment types that appear on the page are based on your access rights.
3. Select an investment type.
4. Select **Copy Financial Properties and Financial Plans** to include any financial data for the idea in the conversion to an investment. Select **Copy Team** to include any resource or role staffing data from the Team tab of the idea. These two check boxes are selected by default.
5. Click **Next**.
6. Complete the fields on the page to define the new investment, and click **Save**.
7. For conversions to a project from a template, select **Project from Template**. Project properties, such as budget data, transfer to the idea.

#### Copy Financial Properties and Financial Plans

When you select this option along with **Copy Team**, the following activity occurs during conversion:
- Allocation, Allocation %, and planned (not hard) Allocation Segments are copied to the new project.
- All the cost plans for the idea (created manually or auto-populated, plan-of-record or not) are copied to the new project.
- Any linked benefit plan is copied from the idea to the new project.
- Any budget plans for the idea are not copied.

Whether you select or clear this option, the following items are not copied:
- Budget plans
- Team information (see Copy Team to copy team information)

**Example 1**: Associate both the idea and the investment with the same OBS.
- **Selected**: All financial attributes, Department OBS, and financial plans are copied. The Simple Budget page on the target investment becomes read-only.
- **Cleared**: Only the Department OBS attribute and the Department attribute on the financial subpage are copied. Financial plans are not copied. The Simple Budget page can be edited.

**Example 2**: Associate with the same parent OBS but different units.
- **Selected**: All attributes on the financial subpage and financial plans are copied. The Department OBS changes to the new value. The Simple Budget page becomes read-only.
- **Cleared**: Financial plans are not copied. The Department OBS and Department field change to the new value. The Simple Budget page can be edited.

**Example 3**: Associate with more than one OBS of different entities.
- **Selected**: Financial plans are not copied. The Department OBS changes. All other financial subpage attributes are copied as-is except Department. The Simple Budget page can be edited.
- **Cleared**: Financial plans and financial subpage attributes are not copied. The Department OBS changes. The Simple Budget page can be edited.

**Example 4**: Associate the idea with one OBS and the investment with another OBS.
- **Selected**: All financial attributes and financial plans (only cost plan POR and linked benefit plan) are copied. The Department OBS field is blank after saving. The Simple Budget page becomes read-only.
- **Cleared**: Only the Department OBS attribute and Department attribute on the financial subpage are copied. Financial plans are not copied. The Department OBS field is blank after saving. The Simple Budget page can be edited.

#### Copy Team

When you select **Copy Team**, resources and roles from the template are combined with any resources and roles from the idea. The specific properties transferred from the idea generally supersede the properties from the project template.

> [!TIP]
> We do not recommend storing potential duplicate resources or roles in the template. Remove resources and roles from the template and assign them to the idea before or after conversion to avoid duplicate entries.

Your selection for the Copy Team option has an impact on the creation of effort tasks. By default, this check box is selected.

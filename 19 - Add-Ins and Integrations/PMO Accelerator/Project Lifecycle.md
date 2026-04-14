﻿---
title: PMO Project Lifecycle and Processes
tags:
  - concept
aliases:
  - Project Lifecycle
---
# PMO Project Lifecycle and Processes


The PMO Accelerator includes automated project lifecycle processes that manage the flow from idea creation through project execution and closure.

The idea can go through an approval process or can be fast-tracked to project creation.
When the idea is ready to be converted, the Idea Review process starts a project creation process based on the following idea type and idea category combinations.
The process converts the idea to a project using the applicable project template, and field values are copied from the idea to the project.

| Idea Type | Idea Category | Project Creation Process | Project Template |
|---|---|---|---|
| Major Project | Not applicable | Create Major Project | Major Project Template |
| Infrastructure Deployment | Not applicable | Create Infrastructure Project | Infrastructure Deployment Template |
| Application Change | Enhancement | Create Application Change Project | Application Change Template |
| Application Change | COTS Evaluation | Create Application COTS Project | Application COTS Template |

## Project Lifecycle Processes


The following automated processes are included to help you manage the project lifecycle:

### Document Review


The Document Review process manages the review workflow for **Proposal** or **Operations** types of documents. The process routes documents to the project manager for review and approval.

### Idea Review


Ideas let you conduct more expedient analysis at an earlier stage to filter out poor or financially unfeasible ideas before they become investments. You can track and convert ideas into investment opportunities.

**Process flow:**
1. Create the idea and submit it for approval
2. The Idea Review Process starts and either:
   - **Fast tracks to project creation** — if the Fast Track checkbox is selected, the project creation process starts based on the selected idea type and category. The process creates a WBS and baseline.
   - **Starts the Idea Review process** — if Fast Track is cleared, an action item is sent to the sponsor to review the idea.
3. The sponsor evaluates functional and technical benefits and analyzes the cost benefits, then selects one of:
   - **Reject** — idea status is set to Rejected and the process ends
   - **Incomplete** — idea status is set to Incomplete; an action item is sent to the originating requester to update the idea with additional information
   - **Approve** — idea status is set to Approved; an action item is sent to the originating requester to change the status of the action item to Done
4. The project creation process starts, based on the idea type and idea category. This process creates a WBS and baseline.
5. For major projects, the Project Gate Review Subprocess starts.

### Issue Review and Escalation


The Issue Review and Escalation process manages the review workflow for high-priority project issues.

### Create Application Change Project


Creates a project based on the **Application Change Template**.

### Create Application COTS Project


Creates a project based on the **Application COTS Template**.

### Create Infrastructure Project


Creates a project based on the **Infrastructure Deployment Template**.

### Create Major Project


Creates a project based on the **Major Project Template**. Also manages approval and gate review workflows.

## Project Templates


Project templates allow you to create projects based on standard tasks and role assignments for that project type.
Templates help ensure consistency and efficiency in creating projects. The Idea Review process uses these templates to create projects automatically.
You can change the templates to suit your organization's demands and requirements.
You can also duplicate these templates to create new project templates for each of your organization's project types.

> [!WARNING]
> To use the Major Project approval and gate review processes, change the names and properties of the last tasks in each phase — but do not change the IDs. The gate review process starts when tasks with the specific IDs are completed.

**Included project templates:**

- **Application Change** — Helps manage projects to change software applications. Used by the Create Application Change Project process.
- **Application COTS** — Designed to manage Commercial Off-the-Shelf (COTS) application selection. Use this template to manage the activities when you select a vendor to provide a new product. Used by the Create Application COTS Project process.
- **Infrastructure Deployment** — Helps manage the deployment of an infrastructure enhancement. Used by the Create Infrastructure Project process.
- **Major Project** — Provides a framework for the application enhancement and development processes. Helps project managers take the project through all gate reviews.
  Includes a sample work breakdown structure (WBS) with six major phases, each with subtasks. Used by the Create Major Project process.

## Idea Type and Idea Category Lookup Mapping


Use the lookup mapping object to manage the available list of values for **Idea Type** and **Idea Category**. These values appear when users create ideas on the Create Idea page.

**Default lookup values (Idea Type / Idea Category):**

- Application Change / COTS Evaluation
- Application Change / Enhancement
- Infrastructure Deployment / Desktop
- Infrastructure Deployment / Distributed
- Infrastructure Deployment / Network/Telecom
- Major Project / Compliance/Regulatory
- Major Project / New Development
- Major Project / New Product or Service
- Major Project / Other

**Steps to create a lookup mapping:**

1. From **Home**, click **Lookup Mapping** under Custom Objects
2. Click **New Lookup Mapping**
3. Complete the following fields:
   - **Mapping Type** — Defines the type of mapping the two lookup values represent. Default: Idea and Project Type/Category
   - **Parent Lookup** — Defines the primary lookup value. Values: Application Change, Infrastructure Deployment, or Major Project
   - **Child Lookup** — Defines the secondary lookup value. Values: New Development, Compliance/Regulatory, New Product or Service, Other, Enhancement, COTS Evaluation, Distributed, Network/Telecom, or Desktop
4. Save your changes

> [!NOTE]
> You can delete lookup mappings that you create. You cannot reactivate a deleted lookup mapping. You cannot delete a system or system-restricted lookup mapping.

## Add-In Lookup Mapping


Similar to the Idea object, use the add-in lookup mapping object to manage relationships between add-in lookup mapping values based on mapping types.
The mapping type determines the options available to create different combinations of parent and child lookup values. Mapping types can be seeded through add-ins.

The following mapping types are seeded in the PMO Accelerator as placeholders for other Classic PPM add-ins:

- **Application Software Categories/Sub-Categories**

> [!WARNING]
> Use the add-in lookup mapping object only for Classic PPM add-ins. Add values to the existing mapping types, but do not create new mapping types as they can affect the add-in functionality.

**Steps to create an add-in lookup mapping:**

1. From **Home**, click **Add-In Lookup Mapping** under Custom Objects
2. Click **New Add-In Lookup Mapping**
3. Complete the following fields:
   - **Mapping Type** — Defines the two lookup values (parent/child) for mapping
   - **Parent Lookup** — Defines the first lookup mapped. The value selected in Mapping Type determines the parent lookup value.
   - **Child Lookup** — Defines the second lookup mapped. The value selected in Mapping Type determines the child lookup value.
4. Save your changes

## PMO Idea Review Process


**Detailed process steps:**

1. Create the idea and, when ready, submit it for approval.
2. The Idea Review Process starts, and does one of the following:
   - **Fast tracks to project creation** — If the Fast Track checkbox is selected, the project creation process starts based on the selected idea type and category.
     The process creates a WBS and baseline. The process ends for all project creation processes except for the Create Major Project process.
   - **Starts the Idea Review process** — If Fast Track is cleared, an action item is sent to the sponsor to review the idea.
3. The sponsor evaluates benefits and selects one of the following options:
   - **Reject** — idea status is set to Rejected and the process ends
   - **Incomplete** — idea status is set to Incomplete; an action is sent to the originating requester to update the idea with additional information and change the status of the action item to Done; a new action is sent to the sponsor to review the idea
   - **Approve** — idea status is set to Approved; an action item is sent to the originating requester to change the status of the action item to Done
4. The project creation process starts. The type of process that starts is based on the idea type and idea category. This process creates a WBS and baseline.
5. For a major project, the Project Gate Review Subprocess starts.

### Create an Idea


**Steps:**

1. Open **Home**, and from **Demand Management**, click **Ideas**
2. Click **New**
3. Complete the following fields:

   | Field | Description |
   |---|---|
   | Subject | Summary/name for the idea. Becomes the description of the investment when converted. |
   | Idea ID | Unique ID for the idea |
   | Idea Type | Type of idea: Major Project, Infrastructure Deployment, or Application Change |
   | Idea Category | Category based on Idea Type. Values: New Development, Compliance/Regulatory, New Product or Service, Other, Enhancement, COTS Evaluation, Distributed, Network/Telecom, or Desktop |
   | Idea Priority | Priority of the idea: Low, Medium, or High |
   | Fast Track | Converts the idea to a project by bypassing review and approval. Default: Cleared |
   | Objective | Objective of the idea. Limits: 200 characters |
   | Requester | Name of the resource originating the idea. Default: Currently logged-in resource |
   | Sponsor | Name of the sponsor who owns the idea and approves conversion to a project. If Fast Track is cleared, this field is required by the Idea Review Process. |
   | Manager | Name of the resource that manages and owns the idea |
   | Start Date | Start date for the idea |
   | Finish Date | Finish date for the idea |
   | Organizational | Organizational OBS for the idea |
   | Department | Department OBS for the idea |

4. Do one of the following:
   - **Save** the idea
   - Click **Submit for Approval** to start the Idea Review process

## PMO Create Major Project Process


The **Create Major Project** and **Project Gate Review** processes help you manage major projects.

- **Create Major Project** — Starts when a project is created using the Major Project template
- **Project Gate Review** — Manages a gate review workflow for all major projects. It is a subprocess of Create Major Project and starts three times to manage the gate approvals as the project moves through: Planning, Building, and Closing

**Detailed process steps:**

1. After the Create Major Process starts and the project is created, the project manager defines the **Project Management Office (PMO) stakeholder** from the project properties
   page in the Stakeholders section, then clicks **Submit**.
   An action item is sent to the PMO stakeholder to review and approve the project.
2. The PMO stakeholder selects one of the following options:
   - **Approved** — An action item is sent to the project manager that the project has been approved. The project status is set to Approved. The Create Major Project process initiates the Planning stage.
   - **Rejected** — An action item is sent to the project manager that the project has been rejected. The project status is set to Rejected.
3. When the last task in the Planning phase is completed, the project manager updates the task, changes the **% Complete** field to 100 percent and the **Status** field to **Completed**. An action item is sent to the PMO stakeholder for approval to move to the next gate.
4. The PMO stakeholder selects one of the following options:
   - **Approved** — The Project Gate Review Subprocess initiates the next phase. Action items are sent to the originating requester (notified of PMO stakeholder approval) and the project manager (to complete the last task of the current phase at 100%).
   - **Rejected** — Action item sent to the project manager to revise the project information. When complete, the project manager changes the action item status to Done, and a new action item is sent to the PMO stakeholder to approve and proceed.
   - **Resubmit** — An action item is sent to the project manager to revise the project information.
5. The Project Gate Review Subprocess repeats for the remaining phases.
6. When the Closing phase is complete, the project manager closes the project.

## PMO Document Review Process


The Document Review process takes a submitted proposal or operations document through the following review cycle:

1. The team member uploads the document and submits it for review. An action item is sent to the project manager.
2. The project manager reviews the document and updates the status for the action item:
   - **Approve** — document status is set to Approved
   - **Reject** — document status is set to Rejected; an action is sent to the document owner notifying of the decision

### Upload and Submit Documents for Review


You can use the Document Review process to move project-related documents through a review and approval process. This process starts when the category is set to **Proposal** or **Operations** and the document status is set to **Submitted**.

**Steps:**

1. Open the project
2. Click **Collaboration**
3. Open the **Properties** menu and click **Add Documents**. The add multiple documents page appears.
4. Complete the following fields:

   | Field | Description |
   |---|---|
   | Current Location | Displays the current location of the document |
   | Select Files | Specifies the files to add to the folder. Limits: five files at a time |
   | Status | Status of the document. Values: Submitted, Approved, or Rejected. Starts Review Process: Submitted |
   | Category | Category for the document. Values: Proposal, Planning, Development, Implementation, and Operations. Starts Review Process: Proposal or Operations |
   | Date Created | Date the document is uploaded |
   | Owner | Owner who manages the document through its lifecycle |
   | Access | Type of access: **All Participants** (read/write access to all participants) or **Select Participants** (individual resources from the existing participant group). Default: All Participants |
   | Allow Non-Participants to Access Document | Indicates that non-participants can access the document. Default: Cleared |
   | Enable Check Out | Indicates if resources with appropriate access can check out and edit the document. Default: Selected |
   | Enable Versioning | Indicates if resources with appropriate access can create another version of the document. Default: Selected |
   | Notify Resources/Groups | Indicates if resources with access are notified when documents are added. Default: Cleared |
   | Description | Description of the document |
   | Comments | Any comments about the document |

5. Click **Add**. The document is uploaded and submitted for review.

## PMO Create Project from a Project Template


**Steps:**

1. Open **Home**, and from **Portfolio Management**, click **Projects**
2. Click **New from Template**
3. Select one of the following templates, and click **Next**:
   - Application Change Template
   - Application COTS Template
   - Infrastructure Deployment Template
   - Major Project Template
4. Complete the following fields on the create project page:

   | Field | Description |
   |---|---|
   | Project Name | Name for the project. Limits: 80 characters. Required. |
   | Project ID | Unique identifier for the project (typically auto-numbered). Limits: 20 characters. Required. |
   | Start Date | Starting date of the project |
   | Finish Date | Completion date of the project |
   | Objective | Objectives for this project. Limits: 200 characters |
   | Status | Status of the task. Values: Started, Not started, Completed |
   | Progress | Level of work completed. Values: Completed (100%), Started (1-99%), Not Started (0%). Default: Not Started. Required. |
   | Assignment Pool | Pool of resources allowed when assigning resources to projects. Values: **Team Only** (allow only staff members) or **Resource Pool** (allow team staff members and resources you have access to for booking — resource is also added as a team staff member when assigned). |
   | Dashboard View | Dashboard view selected for the project. Values: PMO-Project Status, PMO-Program Status, PMO-Project Storyboard, Program Layout, or Project Default Layout. Default: Project Default Layout |
   | % Complete Calculation | Method to calculate percentage completion of tasks. Values: Manual, Effort, Duration |
   | Organizational | Organizational OBS associated with the project |
   | Department | Departmental OBS associated with the project |
   | Template Name | Displays the name of the template |
   | Scale Work By | Percentage increase or decrease in work estimates on each task relative to the template. Default: 0% (no change) |
   | Scale Budget By | Percentage (positive or negative) as the scaling factor for dollar amounts in project cost plans and benefit plans. Default: 0% (no change) |
   | Convert resources to roles | Converts all resources from the project template into roles in the new project. Default: Cleared |

5. Save the changes. The project is created.

## PMO Issue Review and Escalation Process


Use the Issue Review and Escalation process for projects with high-priority issues. Each issue receives the attention it needs in a review and escalation workflow.

To start the process, open an issue and use the **Processes** menu.

**Process steps:**

1. The project manager verifies that the **Project Management Office** and **Sponsor** stakeholders are defined from the Stakeholder section of the general properties page.
2. A team member creates an issue and sets the **Priority** field to **High**. The Issue Review and Escalation process starts. An action item is sent to the project manager to review the issue.
3. The project manager reviews the issue and selects one of the following options:
   - **Rejected** — An action item is sent to the issue owner to resubmit the issue for review
   - **Resolved** — An action item is sent to the sponsor to sign off on the resolution of the issue
4. The sponsor selects one of the following options:
   - **Approved** — The status of the issue is set to Resolved. Action items are sent to the issue owner and project manager that the issue has been resolved.
   - **Rejected** — An action item is sent to the issue owner to update the resolution. The process is restarted when the issue owner changes the status of the action item to Done.

### Create a Detailed Issue


**Steps:**

1. Open the project and click **Risks/Issues/Changes**
2. Open the **Risks/Issues/Changes** menu and click **Issues**
3. Click **New**
4. Complete the fields in the **General** section. Note:
   - **Owner** — Name of the resource managing the risk/issue. Responsible for tracking the issue through its lifecycle. Default: Currently logged-in resource
   - **Creator** — Name of the resource who created the issue. Default: Currently logged-in resource
5. Complete the fields in the **Details** section
6. Attach any documents in the **Attachments** section

## Related
- [[_MOC Integrations]]

%%Source: p4658-4669%%

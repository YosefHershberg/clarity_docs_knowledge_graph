---
title: Configure Processes
tags:
  - admin
aliases:
  - Processes Configuration
canonical: true
audience: admin
domain: administration
---

# Configure Processes

## Overview

Processes automate repetitive steps that you perform manually through the user interface. To reproduce real business behavior, a process impersonates a user when performing the steps. Each process defines its objects, steps, actions, groups of steps, and joins. A process includes a series of steps that end with a specific result. All processes have a start and a finish step. Each step can perform one or more actions. Processes use preconditions and postconditions to connect their steps. You can create processes to act on any object type.

### Process Example: Conditional Automatic Approval

Classic PPM includes a sample process named **Conditional Automatic Approval**. This process sends a notification to the project manager when a resource submits a timesheet. The project manager must have the **Resource - Approve Time** instance access right for the resource. This process automatically starts when a resource submits their timesheet.

> [!note]
> This sample process is not active by default. You must manually activate it. You can also customize it with more business rules and approvals.

## Process Object Types

A process can work with the following types of objects:

- **Primary** — You can add only one primary object to a process. A project is an example of a primary object.
- **Linked** — Linked objects create links in the product and reference specific attributes of a primary object. Use linked objects to access data between two objects when building rules or action item messages. Before adding a linked object to a process, associate a primary object with the linked object in Studio. Examples: object lookups, parent objects, grandparent objects.
- **Implied** — An implied object is a type of linked object added automatically due to a direct relationship with the primary object. You cannot add or delete an implied object.

> [!note]
> When adding linked objects to a primary object, you cannot select Multi-Valued Lookup (MVL) attributes. You can only link a linked object to the primary object or a top-level linked object.

## Process Roles

| Role | Description |
|------|-------------|
| **Process Administrators** | Create, copy, delete, modify, and monitor processes started by other users. Requires the **Process - Manage - All** access right. |
| **Process Creators** | Create processes for objects to which they have access. Start, copy, modify, or delete their own processes. |
| **Process Initiators** | Start processes on objects for which they have access. Modify or address errors on processes they started. |
| **Process Editors** | Modify processes for objects to which they have access. Cannot create, start, copy, or delete processes. |
| **Process Participants** | Have no specific process access rights. Participate by receiving and acting on action items. |

## Process Groups

A group is a collection of steps with the following requirements:

- **Hard requirement** — Completes before the process can advance to the next step.
- **Soft requirement** — Does not prevent the process from advancing to the next step.

## View Available Processes

**Follow these steps:**

1. Open **Administration**, and from **Data Administration**, click **Processes**. The available processes list appears.
2. Click **Initiated** to view the list of process instances.
3. (Optional) Filter the list by clicking a field name. You can use wildcard characters; entries are not case-sensitive.

## Create a Process

Overview of tasks to define and run a process:

1. Define process properties.
2. (Optional) Add objects to the process.
3. Define step actions.
4. Create step-level escalation.
5. (Optional) Create process groups.
6. Validate processes and steps.
7. Activate processes.
8. Run processes.

### Define Process Properties

**Follow these steps:**

1. Open **Administration > Data Administration > Processes**.
2. Click **New**.
3. Complete the requested information. The **Mode** field values are:
   - Active
   - Draft
   - On Hold
4. In the **Organizational Breakdown Structure** section, complete:
   - **Department** — Financial department and entity associated with the process.
   - **Location** — Location of the financial department.
5. Save the changes.

### Add Objects to a Process

Add objects only if you define manual actions, system actions, or sub processes within your process steps.

**Follow these steps:**

1. With the process open, click **Objects**.
2. Click **Add Primary Object**.
3. Complete the fields:
   - **Object Type** — Defines the object type associated with the process.
   - **Associated Template** — Appears if the primary object is a project.
   - **Available for On-demand Start** — Yes or No.
4. Click **Save and Continue**.
5. To add linked objects: select the primary object, click **Add Linked Object**, select an attribute, and click **Save and Continue**.
6. Click **Continue**.

### Define a Process Start Option

**Follow these steps:**

1. With the process open, click **Start Options**.
2. Choose one of:
   - **On-demand** — Process can be activated manually.
   - **Auto-start** — Process activates automatically when start conditions are met (requires Event Enabled in Studio).
3. For Auto-start, click **Auto-start** and complete:
   - **Start Event** — Create, Update, or Create and Update.
   - **Start Condition** — Defines the conditions to auto-start the process.
4. Click **Save**.

> [!note]
> Multi-Valued Lookup (MVL) and OBS attributes are not supported for start conditions. Beginning with Release 15.4, virtual attributes and aggregated calculated attributes (ACAs) cannot be used in process start conditions for Task or Project objects.

## Process Step Actions

Each step can consist of multiple actions. A step action is a task which a process executes. Steps include:

- A **start step** (required)
- One or more **intermediate steps**
- A **finish step** (required)

The following actors can perform an action:

- An assignee (manual action)
- The system (system action)
- A job
- A script
- A subprocess

### Process Step Action Types

| Type | Description |
|------|-------------|
| **Manual Action** | Sends action items to resources, groups, roles, or profiles. Supports attribute tags for context-rich action items. |
| **System Action** | Includes attribute setters, lock/unlock attributes, system operations, object conversion, run job, custom script, and subprocess. |

### Create a Manual Step Action

**Follow these steps:**

1. Open the process and the step. In the **Actions** section, click **New**.
2. Select **Manual Action** and click **Next**.
3. Complete the requested information in the General section.
4. In the **Actions** section, select available actions and move them to the Selected list (hold Ctrl for multiple selections).
5. In the **Require Comment** list (New UX only), specify which decision actions require a mandatory comment.
6. Complete the **Action Item Message** section:
   - **Subject** — Name for this action item (supports attribute variables).
   - **Description** — Description (supports attribute variables).
   - **Priority** — Low, Medium, or High.
   - **Enter Assignees** — Enter user IDs and click **Quick Add Assignees**.
   - **Make Action Item Available to Other Steps** — Optional.
   - **Only Display Assignee Status for the Current User** — Default: Cleared.
7. Complete the **Notification** section and save:
   - **Send Notification** — When Step is started / completed / in error.
   - **Enter Recipients** — Names of notification recipients.
   - **Send Notification To** — Object roles to notify.
   - **Notify Owner** — Default: Cleared.

### Create a System Step Action

**Follow these steps:**

1. Open the process and the step. In the **Actions** section, click **New**.
2. Select **System Action** and click **Next**.
3. Complete the fields:
   - **Object** — Object attached to the system action.
   - **Action** — Action for the system action.
4. Save.

## Process Flow Splits and Joins

A process flow pattern composed of splits or joins is a condition assigned to an action that determines the process flow.

### Splits

| Split Type | Description |
|-----------|-------------|
| **Serial Split** | Activates only when another step in the same process completes. |
| **Parallel Split** | A workflow event where a thread splits into multiple steps that can execute simultaneously. |
| **Decision Point Split (XOR)** | One of several branches executes based on decision data. Exclusive choice — only one branch activates. |
| **Multi-Choice Split (OR)** | More than one branch can execute based on decision data. Multiple conditions can be true. |

### Joins

| Join Type | Matching Split | Description |
|-----------|---------------|-------------|
| **No join needed** | Sequence | N/A |
| **Rendezvous (AND)** | Parallel | Flow stops until all parallel threads complete, then a single thread continues. |
| **Merge (XOR)** | Decision Point | Multiple processes converge into a single thread. |
| **Wait and Merge** | Multiple Choice | Two or more alternate branches converge without synchronizing. |
| **Multi-Thread** | Multiple Choice | Two or more branches reconverge without synchronization; each activation starts a new copy of the next step. |
| **First-in-Line** | Multiple Choice | Waits for one of multiple branches to complete before starting the subsequent step; ignores remaining branches. |

## Process-Level Escalations

You can create escalations to execute an action item and notify resources when a process step is not completed.

> [!note]
> The method by which a recipient receives notifications depends on the notification method specified in account settings (alert, email, or SMS). As a best practice, if you plan to use escalations in processes, make **Due Date** a required field for the Action Item object.

### Add Process-Level Escalation Defaults

**Follow these steps:**

1. With the process open, click **Escalation Defaults**.
2. In the **General** section, complete:
   - **Escalation Type** — None, OBS Hierarchy, Resource Manager Hierarchy, or Specific Resource.
   - **Levels** — Number of levels to escalate. Select **No Limit** to escalate indefinitely.
   - **Initial Grace Period** — Time to wait before first escalation.
   - **Subsequent Grace Period** — Time to wait before each additional escalation.
   - **Active** — Select to activate.
3. In the **Additional Notification** section, complete the requested information and save.

## Process Validation and Runtime Errors

### Validation States

| Icon | State | Description |
|------|-------|-------------|
| Green diamond | Validated | The validation object is valid. |
| White diamond | Not Validated | The object has not been validated or has validation errors. |
| Yellow diamond | Revalidation Required | Changes were made after the last validation. |
| Red diamond | Errors Encountered | Errors were detected during validation. |

### Validate a Process

**Follow these steps:**

1. With the process open, click **Validation**.
2. Select each step to validate and click **Validate**.
3. Select the process and click **Validate** to validate the entire process.
4. Select the process and click **Activate Process**.
5. To validate all steps and activate in one step, click **Validate All and Activate**.

### View and Correct Runtime Errors

**Follow these steps:**

1. Open **Processes > Initiated**.
2. In the **Messages** column, hover over the icon to view error descriptions for each process instance.
3. Select the error icon and read the error message.
4. Resolve the problem:
   - **Retry** — Select the step and click Retry.
   - **Skip Problem** — Select the step and click Skip Problem.
   - **Delete** — Select the step associated with the error and click Delete.
   - **Cancel Process** — Click Cancel Process to cancel without fixing errors.

> [!warning]
> When you skip a runtime error, you can get unexpected results. The process may take another path or be unable to continue.

## Monitor Process Engines

**Follow these steps:**

1. Open **Administration > Data Administration > Process Engines**.
2. Review the metrics:
   - **Name** — Process engine name. Click to view pipeline details.
   - **Active Processes** — Click to view all running initiated process instances.
   - **Completed Processes** — Click to view all completed process instances.
   - **Last Heart Beat** — Date and time of the last heartbeat.
   - **Process Errors** — Click to view process instances with errors.
   - **Status** — Running, stopped, or indeterminate.
   - **Total Load** — Percentage of engine time used for processing.
   - **Pre Condition / Post Condition / Action Execution** — Queue lengths for each pipeline.

> [!tip]
> When monitoring for bottlenecks, look at the queue length of pipelines. Observe the time it takes to process steps between pipelines. Processes in the pipeline queue refresh every 30 seconds.

### Process Engine Pipeline Types

| Pipeline | Description |
|----------|-------------|
| **Processes Loaded** | Number of active processes currently loaded on the engine. Internal queue only. |
| **Event Wait List** | Step instances waiting for events (e.g., a user action to save a change). |
| **Retry Wait List** | Step instances waiting to be retried after database deadlocks. |
| **Precondition** | Queue of step instances in the "Ready to Evaluate Precondition" state. |
| **Action Execution** | Queue of step instances in the "Ready to Execute Action" state. |
| **Postcondition Transition** | Queue of step instances in the "Ready to Execute Postcondition" state. |

### Manage the Number of Pipelines in Queues

You can add or remove pipelines to reduce bottlenecks. Maximum: 5 pipelines per queue.

**Follow these steps:**

1. Open the process engine and click **Configure Pipelines**.
2. Select the number of pipelines for:
   - Number of Precondition Pipelines
   - Number of Action Execution Pipelines
   - Number of Postcondition Pipelines
3. Click **Save and Continue**.

## Process Definition Notification Templates

Use the process definition notification templates page to view and edit process notification templates. You can edit these types:

- Process Escalations
- System Actions
- Manual Actions
- Script Actions
- Subprocess Actions
- Job Actions
- Step Escalations

Modified notification templates display with a yellow checkmark icon in the **Modified** column.

**Follow these steps:**

1. With the process open, click **Notifications**.
2. Review the notification fields:
   - **Name** — Unique name of the template.
   - **Description** — Description of the template.
   - **Modified** — Indicates if the template has been modified from the default.

## Process Access Rights

### Grant Process Access Rights to a Resource

**Follow these steps:**

1. Open the process. Open **Access to the Process > Full View** to view resources with access.
2. Open **Access to the Process > OBS Unit**.
3. Click **Add**, select the access rights, click **Add and Continue**.
4. Select the resources and click **Add**.

### Grant Process Access Rights to a Group

**Follow these steps:**

1. Open the process. Open **Access to the Process > Group**.
2. Click **Add**, select the access rights, click **Add and Continue**.
3. Select the group and click **Add** or **Add and Select More**.

## Related

- [[_MOC Administration]]

%%Source: p3173-3207%%

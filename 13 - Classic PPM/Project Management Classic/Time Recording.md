---
title: Manage Time Recording for Team Members (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2322-2325
canonical: true
audience: everyone
domain: classic
---
# Manage Time Recording for Team Members (Classic PPM)

As a resource manager, you manage the time recording of the employee resources who report to you. As a project manager, you manage time recording for your project tasks. Resources use weekly timesheets to track actual time spent on task assignments, incidents, indirect work, and other activities.

## Prerequisites

- Resources, project tasks, and activities are configured
- Resources are configured to receive notifications for conditions such as overdue timesheets
- Resources complete and submit their timesheets

## Update Timesheet Permissions

As a resource or project manager, you continually adjust the ability of resources to enter time for specific projects and tasks.

### Disable Time Entry for a Resource

Prevents the resource from using timesheet functionality at all.

1. Click **Home > Resource Management > Resources**
2. Click the resource name
3. Click **Properties > Settings**
4. Clear the **Open for Time Entry** check box
5. Save

### Disable Time Entry for a Project

Prevents time entry for the entire project.

1. Click **Home > Portfolio Management > Projects**
2. Click the project name
3. Click **Properties > Settings**
4. Clear the **Open for Time Entry** check box
5. Save

### Disable Time Entry for a Project Team

Prevents time entry for a specific resource or the entire project team.

1. Click **Home > Portfolio Management > Projects**
2. Click the project name
3. Click the **Team** tab
4. For each resource or role, click the **Open for Time** cell and select **No**
5. Save

### Disable Time Entry for a Task

Prevents time entry for a specific task.

1. Click **Home > Portfolio Management > Projects**
2. Click the project name
3. Click **Tasks** to display the task list
4. Click the task name
5. Click **Properties > Settings**
6. Clear the **Open for Time Entry** check box
7. Save

## Notify Resources About Overdue Timesheets

Resources typically submit timesheets weekly. If a resource does not submit on time, send them a notification.

**Notification delivery methods** (based on resource settings):
- An alert in the application
- An email
- A text message (if a valid phone number is in the resource profile)

### Steps

1. Open the timesheet for the resource
2. Click **Notify** — an overdue timesheet notification is sent to the employee

> [!NOTE]
> Notification text is based on the **Timesheet — Overdue** notification template in the Administration tool.

## Process Submitted Timesheets

When a resource submits a timesheet, you receive a notification to review it.

> [!NOTE]
> Project managers only receive submission notifications if the timesheet contains items associated with their projects. Notifications go to users with **Resource Timesheet - Approval** access rights at the instance level (not global, to avoid excess emails).

### Steps

1. Open **Home > Personal > Timesheets**
2. Filter for submitted timesheets
3. Open the timesheet to process
4. (Optional) Click the **Timesheet Notes** icon to add/edit notes against individual entries or the whole timesheet
5. Do one of the following:
   - **Approve** — Time recorded is added to actuals for each task
   - **Return Timesheet** — Returns the timesheet to the resource for corrections with a notification

## Restore Timesheet Defaults

1. Click **Administration > Project Management > Timesheet Options**
2. Click **Restore Defaults**
3. Click **Yes** to confirm
4. Save changes

## How Actuals Flow

1. Resource enters time on weekly timesheet
2. Resource submits timesheet for approval
3. Manager reviews and approves (or returns for corrections)
4. **Post Timesheets** job runs and posts the approved time to actuals
5. Actuals appear on task assignments, cost plans, and reports

## Related Notes

- [[Timesheets Classic]] — Classic timesheet interface from resource perspective
- [[Resource Assignments]] — Assignment-level ETC and actuals
- [[Projects Teams Tasks]] — Project setup and team management
- [[_MOC Classic PPM]]

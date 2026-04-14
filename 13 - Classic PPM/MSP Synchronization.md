---
title: MSP Synchronization
tags:
  - classic
  - howto
aliases:
  - MSP Sync
  - Microsoft Project Sync
canonical: true
audience: everyone
domain: classic
parent: "[[_MOC Classic PPM]]"
---

# MSP Synchronization

## Synchronize Microsoft Project with Classic PPM

Classic PPM supports four connectivity modes with MSP:

| Mode | Description |
|------|-------------|
| **Full bidirectional** | Changes in either application sync with the other |
| **One-way import (BETA)** | Changes in MSP update Classic PPM only |
| **Lightweight (BETA)** | Passes only selected attributes |
| **Copy and paste** | Copy tasks between projects |

> [!WARNING]
> Do not open a project in Open Workbench while using Classic PPM. Conflicting scheduling algorithms can corrupt or lose the project.

### Classic PPM Ownership Model

## Classic PPM is the primary record owner for:

- Project plans
- Resources and their financial attributes
- Project budget and costs
- Calendars
- Attribute default values

> [!TIP]
> We recommend adding new resources in Classic PPM (**Project Team** page) rather than in Microsoft Project's resource sheet.

### Open a Project in Classic PPM

- Open a project from the **Project Properties**
- Navigate to **Tasks** and click **Open in Scheduler**

### Open a Project in Microsoft Project

1. In Microsoft Project, click the **Integration** menu
2. Click **Open Project**

When you open a project, the following occurs:
- All mapped fields are exported from Classic PPM to MSP
- The Staff list is exported to populate the MSP Resource Sheet
- MSP formats the data as an XML file, then saves it as an MPP file
- Both the MPP and XML files are stored in the Classic PPM database (named by project ID, e.g., `pr001.mpp`)
- Each time the project is opened in MSP, the MPP is overwritten with the latest data

### Update a Project Plan Offline

1. In Classic PPM, open the project and save it to your computer
2. Open and update the `.mpp` file as needed
3. From the **Classic PPM Integration** tab, click **Save** ג€” the updated data is saved back to Classic PPM
4. Reopen the plan to verify the changes from Classic PPM are reflected

### Lock and Unlock Projects

| Mode | Lock Behavior |
|------|--------------|
| **Read-only** | No lock placed; local edits cannot be saved to Classic PPM |
| **Read/write** | Lock placed on project; others can only open as read-only |

- The lock is held until you close the project in MSP
- The lock owner's name appears in the **Locked by** field in both applications
- Projects are automatically unlocked when you close the project or exit MSP

**To manually unlock from Classic PPM:**
1. On the Projects page, click the locked project
2. Click **Unlock**

> [!NOTE]
> You must have view rights and the **Application Setup** right to lock and unlock projects.

If you drop another user's lock and they try to save, they receive a "project not locked" message. They can perform a **force save**, which overwrites your changes made after dropping the lock.

### One-Way Import From MSP to Clarity (BETA)

1. Uninstall MSP, Clarity Schedule Connect, and Clarity Addin
2. Log in to Classic PPM; download and install the latest versions from **Account Settings > Software Downloads**
3. Open the project and navigate to **Properties > Settings > Scheduler**
4. Select **Microsoft Project One-Way** from the drop-down
5. All changes made in MSP update Clarity (actuals update via the **Update Actuals** button)

> [!NOTE]
> Ensure no local MSP file exists on your desktop. If a local copy exists and you click **Open in Scheduler**, MSP generates an error asking you to open the local copy.

### Lightweight Integration (BETA)

Passes only the following attributes between Clarity and MSP:

- Task Name
- Start / Finish
- % Complete
- Predecessor / Successor
- Milestone (flag)

**Setup:**
1. Open the project > **Properties > Settings > Scheduler**
2. Select **Microsoft Project Lightweight**
3. Click **Open in Scheduler** ג€” a lightweight MPP copy downloads with the suffix `L` (e.g., `PR1006L`)

### Copy and Paste Project Tasks in MSP

You can copy and paste tasks in Microsoft Project. Save the file for the copy-paste to complete.

> [!NOTE]
> Before copying tasks from a source project to a destination project, first copy and paste resources from the resource sheet to avoid "resource not found" errors.

### Set the Default Load Pattern

As an administrator, set the default load pattern at **Administration > Project Management > Settings**.

| Loading Pattern | Recommendation |
|----------------|----------------|
| **Uniform** | Recommended for MSP or combined MSP/OWB environments |
| **Front Load** | Not recommended with MSP (extends task duration) |
| **Fixed Loading** | Use with caution ג€” unused ETC in the current week is discarded |

> [!WARNING]
> Front Load distributes ETC to extend task duration in MSP. Fixed Loading discards ETC remaining for the week when actual hours worked are less than planned.

> [!NOTE]
> When using project templates, the Default Load Pattern is ignored if templates have existing assignments made before the default pattern is set. Set **Uniform** before creating templates.

### Set the Default Mapping to Assignment Units

Administrators can map MSP Assignment Units to the Clarity **Assignment Max % Load** field.

1. Navigate to **Administration > Project Management > Settings**
2. Select the **MSP Assignment Units Mapping with Clarity Assignment Max % Load** check box

> [!NOTE]
> Max % Load in the resource sheet is based on the allocation date corresponding to the project export date.

### Prepare Legacy Project Plans for Import

1. In MSP, verify **File > Properties > Summary** ג€” Project Title matches the Classic PPM project name
2. Remove all master and subproject links
3. Validate task-level information
4. Review and reassign user-defined fields
5. Validate and adjust resource names
6. Import the plan into Classic PPM
7. Configure tracking and collaboration features post-import

---


---
**See also:** [[MSP Integration Setup]], [[MSP Field Mappings]]
**Parent:** [[_MOC Classic PPM|Classic PPM]]

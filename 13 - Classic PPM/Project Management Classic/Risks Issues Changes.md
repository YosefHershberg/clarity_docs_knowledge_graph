---
title: Project Risks Issues and Changes (Classic PPM)
tags:
  - howto
  - classic
aliases:
  - Risks Issues Changes
source_pages: 2371-2387
canonical: true
audience: everyone
domain: classic
---
# Project Risks, Issues, and Change Requests (Classic PPM)

As a project manager, you can identify and manage risks, issues, and change requests throughout the project lifecycle. You can also assign action items to yourself and other users.

**Risk management process overview:**
1. Identify risks early to understand potential effects on scope, schedule, and budget
2. Analyze risk probability and impact
3. Plan a risk response strategy (Watch, Accept, Transfer, or Mitigate)
4. Track risk through its lifecycle
5. Escalate to an issue if the risk materializes
6. Resolve and close

> [!TIP]
> You can use processes to automate the project risk management workflow — for example, sending notifications when audit trail entries are modified or when issue-related tasks are completed. See **Configure Processes**.

## Access Rights Required

- Project: Risk, Issue, Change Request: Create/Edit
- Project: Risk, Issue, Change Request: Delete
- Project: Risk, Issue, Change Request: Delete: All
- Project: Risk, Issue, Change Request: Edit: All
- Project: Risk, Issue, Change Request: View / View: All

## Risk Score and Color Coding

| Score Range | Color | Risk Level |
|-------------|-------|------------|
| 0–33 | Green | Low risk |
| 34–68 | Yellow | Medium risk |
| 69–100 | Red | High risk |
| (none) | White | Risk data undefined |

**Calculated Risk Score** = Probability × Impact, where Low = 1, Medium = 2, High = 3.

Example: High probability (3) × Medium impact (2) = score of 6 (Medium/Yellow).

## Risk Categories

| Category | Description |
|----------|-------------|
| Flexibility | Project is not adaptable |
| Funding | Project funding not allocated or constrained |
| Human Interface | User interface poorly defined |
| Implementation | Uncertainties in effort and user acceptance |
| Interdependencies | Project depends on other projects |
| Objectives | Requirements/scope/benefits unclear or unmeasurable |
| Organizational Culture | Requires changes to culture, processes, or policies |
| Resource Availability | Internal resources uncertain; external resources required |
| Sponsorship | Sponsorship not clearly identified or committed |
| Supportability | Not easy to support in future; requires major updating |
| Technical | Unproven technology; new expertise required |

## Create a Risk

1. Open the project and click **Risks/Issues/Changes**
2. Click **New**
3. Complete the **General** section:
   - **Category** — Risk category (see table above)
   - **Owner** — Resource managing the risk. Default: current user
   - **Impact Date** — Date by which repercussions could affect the project. Default: current date
   - **Response Type** — Watch / Accept / Transfer / Mitigate. Default: Watch
4. Save
5. Complete the **Details** section:
   - **Assumptions** — Assumptions behind the risk identification
   - **Associated Risks** — Other risks in this project linked to this risk
   - **Associated Issues** — Issues in this project linked to this risk
6. Complete the **Quantify Risk** section:
   - **Probability** — Low (1), Medium (2), High (3). Default: Low
   - **Impact** — Low (1), Medium (2), High (3). Default: Low
   - **Calculated Risk** — System-calculated: 1–3 = Green, 4–6 = Yellow, 7–9 = Red
7. Attach supporting documents in the **Attachments** section
8. Complete the **Resolution** section (can be done now or before closing)
9. Save changes

> [!NOTE]
> When a risk category is specified, the overall risk score overrides any differing status selection you make for that risk category or factor. Detailed risks in a category override manually assigned ratings.

## Create a Risk Response Strategy

1. Open the project > **Risks/Issues/Changes** > open the risk
2. Open **Properties** menu > **Response Strategy**
3. Complete the fields and click **Add**

Assign response strategies to different resources; each can have its own due date for process notifications.

## Close a Risk

1. Open the risk
2. Change **Status** to **Closed**
3. Enter the final resolution in the **Resolution** section
4. Save changes

## Create a Risk from an Issue or Change Request

1. Open the project > **Risks/Issues/Changes** > open the issue or change request
2. Click **Create Risk**
3. Complete the General, Details, Quantify Risk, Attachments, and Resolution sections
4. Save changes

Basic information from the originating record is carried over. A link to the originating record is maintained for easy navigation.

## Assign Risk Ratings (Main Risk Page)

Rate predefined risk factors from the project's main risk page. The combined rating determines the overall project risk level.

1. Open the project > select **Risk** from **Properties**
2. Rate each risk factor (Objectives, Sponsorship, Funding, Resource Availability, Interdependencies, Technical, Human Interface, Organizational Culture, Supportability, Implementation, Flexibility)
3. Save changes — stoplights update next to each factor

> [!NOTE]
> Some risk categories in the Contributing Factors section become display-only once a detailed risk is created with that category assigned. Update the rating through the detailed risk record.

## Set Up the Risk Score Matrix

The risk score matrix maps Probability × Impact combinations to risk degrees (High/Medium/Low).

1. Open **Administration > Project Management > Risk Settings**
2. For each Risk Impact row (Low, Medium, High), select a Risk Probability (Low, Medium, High) per column
3. Save changes

### Configure Custom Risk Score Values

Default lookup IDs: L = 0 (low), M = 50 (medium), H = 100 (high).

1. Open **Administration > Data Administration > Lookups**
2. Filter for the lookup to configure (e.g., **Risk Rating - Standard LMH**)
3. Click **Values** > **New** to add a custom value (e.g., Low-Medium with ID 25)
4. Click **Save and Return**
5. Click **Reorder Values** and arrange the new value appropriately
6. After adding, go to **Administration > Project Management > Risk Settings** to assign the new values in the matrix

### Manage Risk Categories Lookup

1. Open **Administration > Studio > Objects** > **Project** > **Attributes** tab
2. Create a new number attribute (e.g., My Risk Factor with ID `my_risk_factor`)
3. Add this attribute to the **Risk Score** attribute's weighted average formula
4. Click the **Risk Score** attribute (id = `risk`) > click **[Build Weighted Average Formula]**
5. Add the new attribute; optionally remove system-defined attributes you don't need
6. Save or Submit
7. Verify the new attribute appears in **Administration > Data Administration > Lookups** for `RIM_CATEGORY_TYPE`
8. Add the attribute to a project subpage so users can enter values
9. To update views: **Administration > Studio > Objects > Project > Views** tab > publish modified views

## Automate Risk Management

The **Assign Risks** process automates the risk assignment and resolution workflow. Activate it from **Administration** before use; then start it from the risk's **Processes** tab.

**Process flow:**
1. User creates a risk with Open status and starts the Assign Risks process
2. Process creates an action item for PM to assign a risk owner (or enter category if missing)
3. Risk owner selects response approach:
   - **Accept** → PM approves; if approved, risk marked Resolved
   - **Watch** → Owner watches risk; marked Resolved when complete
   - **Mitigate** → Owner defines mitigation steps; marked Resolved when complete
   - **Transfer** → Owner transfers to new owner/group; marked Resolved when complete
4. Risk owner closes the risk (status → Closed)

## Add Notes to a Risk, Issue, or Change Request

Notes appear in reverse chronological order. You cannot edit or reply to existing notes.

1. Open the project > **Risks/Issues/Changes** > open the record
2. Click **Notes**
3. Complete the fields and click **Add**

## Associate Key Tasks with a Risk

1. Open the risk > click **Associated Tasks**
2. Click **Add Existing Tasks** > select tasks > click **Link To**
3. Or click **New** to create and associate a new task simultaneously

## Create an Issue

Issues are events that have already affected the project (vs. risks, which are potential future events).

1. Open the project > **Risks/Issues/Changes**
2. Open the **Risks/Issues/Changes** menu > **Issues** > **New**
3. Complete:
   - **Issue ID** — Unique identifier (cannot be changed after saving)
   - **Category** — Same categories as risks (see table above)
   - **Owner** — Resource managing the issue. Default: current user
   - **Creator** — Display-only. Default: current user
4. Complete the **Details** section
5. Attach documents if applicable
6. Complete the **Resolution** section after the issue is resolved
7. Save changes

**To create an issue from a risk:**
1. Open the risk > click **Create Issue**
2. Complete fields (many are pre-filled from the risk)
3. Return to the risk and change its **Status** to **Closed**

## Close an Issue

1. Open the issue
2. Change **Status** to **Closed**
3. Enter the final resolution in the **Resolution** section
4. Save changes

## Import Issues from External Systems

Use the **XML Open Gateway (XOG)** to import issues from systems such as Microsoft Excel or Access. See [[XML Open Gateway (XOG) Development]].

## Create a Change Request

Change requests document alterations to project scope, schedule, or budget.

1. Open the project > **Risks/Issues/Changes**
2. To create from an issue: open the issue > click **Create Change Request**
3. To create independently: open **Change Requests** menu > **New**
4. Complete General and Details sections
5. Attach documents
6. Complete the **Effect** section:
   - **Impact on Baseline** — How changes affect the project baseline
   - **Impact on Other Projects** — How changes affect other projects
   - **Change in Cost** — Dollar amount change to budget cost
   - **Change in Schedule** — Number of days delay or acceleration
   - **Change in Resources** — Increase or decrease in number of resources
7. Complete the **Assessment** section
8. Return to the originating issue and change its status to **Closed**
9. Save changes

**To create a change request from a risk:**
1. Open the risk > click **Create Change Request**
2. Complete all fields (risk name and ID are pre-filled)
3. Save changes

## Close a Change Request

1. Open the change request
2. In **General Properties**, change status to **Closed** and enter the reason
3. Save changes

**Close a change request and track as an issue:**
1. Open the change request > change status to **Closed** > Save
2. Click **Create Issue** and complete the issue fields
3. Save changes

## View an Audit Trail

View which users changed which fields and when.

1. Open the record > click **Audit**
2. Filter the list as needed

> [!NOTE]
> Audit trail must be set up by your administrator before use. See Studio Development documentation.

## Associate Tasks with Issues

1. Open the issue > click **Associated Tasks**
2. Click **Add Existing Tasks** > select task > click **Link To**

> [!NOTE]
> By default, not all associated tasks are shown. To view all: expand the filter, set **Key Task** to **All**, and click **Filter**.

## Assign Action Items

Project action items are reminders assigned to yourself or others.

1. Open **Home > Personal > Organizer**
2. Click **New**
3. Complete the **General** section:
   - **Recurring** — Whether the item repeats at intervals
   - **Frequency** — How often to recur (e.g., 1 = weekly)
4. Complete the **Notify** section:
   - **Notify Assignees** — Send notification to assignees. Default: Cleared
   - **Send Reminder** — Send reminder email when due. Default: Cleared
   - **Time Before Reminder** — Lead time for reminder (e.g., 15 Minutes)
5. Select assignees in the **Assignees** section (click **Advanced Selection** for a larger list)
6. Save changes

## Related Notes

- [[Project Dashboard]] — View risk status on project dashboard
- [[Projects Teams Tasks]] — Project management overview
- [[_MOC Classic PPM]]

%%Source: p2371-2387%%

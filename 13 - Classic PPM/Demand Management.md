---
title: Demand Management (Classic PPM)
tags:
  - concept
  - classic
  - howto
aliases:
  - Demand Management
source_pages: 2092-2120
canonical: true
audience: everyone
domain: classic
---
# Demand Management (Classic PPM)

Demand Management helps you capture, classify, evaluate, and resolve all sources of IT demand. Business demand takes many forms:
- Ideas for new products, services, or strategic initiatives
- Incidents, issues, or problems
- Project requests, service requests, and support requests

Classic PPM recognizes two primary types of demand: **ideas** and **incidents**. Use XOG to integrate data from external ticketing or service management systems.

## Prerequisites (Admin Setup)

Before users can manage demand:
1. Verify that the Demand Management module is installed and licensed
2. Assign appropriate access rights (see [[Access Rights Reference]])
3. Configure incident categories (see below)
4. Assign access rights for each incident category:
   - **Incidents - Create** and **Incidents - Select Category**
5. For idea financial plans, assign relevant Idea financial access rights
6. Schedule these jobs:
   - **Post Incident Financials** job
   - **Post Incident Effort Chargebacks** job
7. Configure a currency and cost/rate matrix for financial data entry

## Configure Incident Categories

Incident categories are logical groups that classify incidents by type. All incidents must belong to a category.

1. Open **Administration > Data Administration > Incidents**
2. Click **New** and complete:
   - **Category Name** — Short name (e.g., Mobile Devices, Access Issues)
   - **Category ID** — Unique identifier
   - **Description** — Category description
3. Click **Save**
4. Click the **Associated Investments** tab
5. Click **Browse** > select investments > click **Add**
6. Click **Save**
7. Click the **Access to this Category** tab > configure access:
   - **Resource** — Individual resource access
   - **Group** — Group access
   - **OBS Unit** — OBS-based access
8. Click **Add**, select access rights, then select entities and click **Add and Continue**
9. Click the **Priority Setup** tab
10. For each Risk Impact row, select a Risk Probability column value
11. Click **Save**

> [!NOTE]
> When you save an existing incident, the incident priority is recalculated based on changes in the priority matrix.

### Error: ITL-0514

If this error appears when accessing incidents for the first time: "Incident category must be created before incident instance can be created" — complete the Configure Incident Categories steps above before users attempt to report incidents.

### Troubleshooting: Match Scores Can Be Inaccurate

If you see match score warnings on the Replace Resource page for ideas, adjust the **From Date** and **Number of Periods** in the daily resource allocation **Time Slice Properties** (**DAILYRESOURCEALLOCCURVE**, Slice ID=10).

> [!NOTE]
> Changes to Time Slice Properties can affect time slicing jobs, datamart extraction jobs, portlets, and reports.

## Manage Incidents

Incidents represent events that interrupt or reduce the quality of a service. They include hardware, software, service, and support requests.

### Create an Incident or Service Request

1. Open **Home > Demand Management > Incidents**
2. Click **New**
3. Complete the **General** section:

| Field | Description |
|-------|-------------|
| **Short Description** | Incident name — keep short and descriptive |
| **Tracking ID** | Auto-numbered if configured |
| **Detailed Description** | Full description of the incident |
| **Type** | Incident or Service Request |
| **Category** | Incident category (browse to select) |
| **Urgency** | Low / Medium / High. Default: Medium |
| **Impact** | Low / Medium / High. Default: Medium |
| **Override Priority** | Appears only with Incidents - Override Priority access right |
| **Priority** | System-generated from impact × urgency matrix; or manual if Override Priority is selected |
| **Start Date** | Date IT worker is expected to start |
| **Expected End Date** | Date IT worker is expected to resolve the incident |
| **Estimated Total Effort** | Total estimated effort to resolve |
| **Verified Date** | Date the resolution is accepted and verified |
| **Attachment** | Up to 10 file attachments |

4. Complete the **Primary Contact** section (Name defaults to current user)
5. Save changes

> [!NOTE]
> Priority is a function of Impact and Urgency. Administrators configure the priority matrix in Administration.

### View Incidents

1. Open **Home > Demand Management > Incidents**
2. Select a tab:
   - **Assigned to Me** — Incidents assigned to you (requires category access rights)
   - **Reported by Me** — Incidents you reported
   - **Reported by Others** — Incidents in categories you have access to (requires Create/Edit All or Manage Category Incidents right)
3. Open an incident and click:
   - **Associations** — Linked projects and project tasks
   - **Effort** — Timesheet entries recorded for this incident
   - **Notes** — Notes on the incident
   - **Processes** — Automated processes for this incident
   - **Audit** — History of field changes (if audit is enabled)

### Incident Status Lifecycle

| Status | Description |
|--------|-------------|
| New | Not yet reviewed or resolved |
| Assigned | A resource has been assigned |
| Work In Progress | IT worker is actively working on it |
| Escalated | Requires higher-level authority |
| On Hold | Waiting for information |
| Resolved | IT worker considers it resolved; pending requestor verification |
| Closed | Requestor confirmed resolution |

### Update Incident Status

1. Open the incident
2. Select a value in the **Status** field
3. Click **Save**

> [!NOTE]
> Setting status to **Resolved** triggers a notification to the requestor to verify the resolution (when the Assign Incidents process is running).

### Assign Resources to Incidents

1. Open the incident
2. Click the **Browse** icon in the **Assigned To** field
3. Filter or click **Show All**
4. Select a resource and click **Add**
5. Save changes

To reassign: select the incident check box > click **Reassign** > filter and select the new resource > click **Reassign**.

### Add Notes to Incidents

Notes are public by default; check **Internal** to restrict to IT workers only. Notes are read-only after saving.

1. Open the incident > **Notes** tab
2. Enter a subject and description
3. (Optional) Select **Internal** to make it private
4. Click **Add**

### Enter Time Spent on Incidents

1. Open the incident > **Effort** tab (or click **Enter Time**)
2. Select the **Investment** to charge costs to
3. Select the **Time Period** from open timesheet periods
4. Click **Next** — the timesheet opens
5. Log time and click **Save**

> [!TIP]
> The **Enter Time** button may not appear if: the incident category has no associated investments, you lack access rights, or there are no open timesheets available.

> [!NOTE]
> You can post incident time to the incident only, or to both the incident and the associated investment. To post to investment financials, you must be a team member on the investment.

### Convert Incidents to Projects or Tasks

When incident scope requires planned investment, flag it for conversion.

**Flag for conversion:**
1. Open the incident
2. Select the **Flagged for Conversion** check box
3. Select a project manager in **Assigned Project Manager**
4. Save changes

**Convert to a project (as project manager):**
1. Open **Home > Demand Management > Incidents > Assigned to Me**
2. Select the incident > click **Convert to Project**
3. Select **Project** or **Project from Template**
4. Click **Next**, complete the project fields, and save

**Convert to a task (as project manager):**
1. Select the incident > click **Convert to Task**
2. Select an active project and click **Add**
3. Complete the task fields and save

> [!NOTE]
> If more work is needed after conversion, IT project staff can reopen the original incident.

**Data carried forward during conversion:**

| Incident Field | Becomes in Project | Becomes in Task |
|---------------|-------------------|-----------------|
| Short Description | Project Name | Task Name |
| Tracking ID | Project ID | Task ID |
| Status | Unapproved | Not Started |
| Assigned Project Manager | Manager | N/A |
| Start Date | Start Date | Start Date |
| Expected End Date | Finish Date | Finish Date |

Effort data, custom attributes, and links back to the incident are NOT carried forward.

### Automate Incident Processes

The **Assign Incidents** process automates incident assignment, review, and completion. Activate it in Administration first.

**Process steps:**
1. **Assign IT Worker** — Triggered on new incident; sends action item to IT worker
2. **Acquire Incident** — IT worker accepts or rejects. Rejection → Escalated step
3. **Work On Incident** — IT worker works on incident and marks action item done
4. **Record Effort** — IT worker records effort and marks done
5. **Resolution Verification** — Requestor approves or rejects resolution. Rejection → Escalated step
6. **Incident Escalated** — Changes status to Escalated; manager notified
7. **Incident Not Resolved** — Manager reviews and reassigns; returns to Acquire Incident

### Delete Time Entries for Incidents with Deleted Investments

Available in Release 15.5.1+. Running the **Delete Investments** job:
- Removes the investment and its time entries
- Does NOT delete the original incident
- Removes only the reference between the incident and investment

## Manage Ideas

Ideas are the initial stage of investment creation. Ideas can be evaluated, approved, and converted into projects, applications, products, services, or other investments.

### The Idea Approval Process

The **Idea Approval Process** is an out-of-the-box workflow. A process administrator must activate it before use.

**Process flow:**
1. User creates an idea (status: Unapproved)
2. User submits for approval (status: Submitted for Approval)
3. Reviewers receive action items to review the idea
4. Reviewers set status: **Approved**, **Incomplete**, or **Rejected**
5. Incomplete ideas can be resubmitted (status resets to Submitted for Approval)
6. Approved ideas can be converted to investments
7. Approval, rejection, or deletion terminates the process

> [!NOTE]
> Multiple users can approve the same idea. Contradictory responses (one approves, one rejects) cause the system to close outstanding action items and send new ones noting the contradiction.

> [!NOTE]
> You can only have access to one Idea Approval process at a time.

### Create an Idea

1. Open **Home > Demand Management > Ideas**
2. Click **New**
3. Complete the **General** section:
   - **Subject** — Idea name/summary; becomes description of the converted investment
   - **Idea ID** — Unique identifier; becomes name of the converted investment
   - **Idea Priority** — Low (default) / Medium / High
   - **Description** — Functionality and value description
   - **Manager** — Resource who manages and owns the idea
   - **Originating Requestor** — Resource who originated the request. Default: current user
   - **Active** — Activate to allow capacity planning portlet display. Default: Selected
   - **General Notes** — Additional information
4. Complete **Estimated Costs and Benefits**
5. Complete the **Detailed Description** section:
   - Impact on Existing Initiatives
   - Risks (if idea is implemented or not)
   - Dependencies
6. In the **OBS** section, associate the idea with OBS units
7. Click **Save** (Unapproved status) or **Submit for Approval** (Submitted for Approval status)

> [!NOTE]
> Some properties set here are used when converting the idea to a project or investment.

### Update Idea Properties

1. Open the idea > **Properties** tab > select a menu item
2. Update general info, name, manager, goals, status, alignment, OBS associations
3. Set **Target Manager** — the resource who will manage the idea when converted. If left empty, the Idea Manager becomes the investment manager
4. Define **Scheduling Information** (start/finish dates, time entry, charge code)
5. Define **Budget Information** (financial summary including planned costs, benefits, NPV, ROI, IRR, MIRR, payback)

### Define Scheduling Information

1. Open the idea > **Properties** > **Schedule**
2. Set **Start Date** and **Finish Date** (become investment dates on conversion)
3. Set **Set Planned Cost Dates** (sync planned cost dates with investment dates). Default: Selected
4. Set tracking fields:
   - **Time Entry** — Enable staff time tracking on timesheets. Default: Selected
   - **Track Mode** — PPM / None / Other. Default: PPM
   - **Charge Code** — Default charge code for all idea tasks

### Define Budget Information

1. Open the idea > **Properties** > **Financial Summary**
2. Complete fields for planned cost, planned benefit, budget cost, budget benefit, and financial metrics
3. Submit changes

> [!NOTE]
> Since Release 13.2, the **Planned Cost** field is not directly editable. It equals Planned Operating Cost + Planned Capital Cost.

### Financial Plans for Ideas

**Create a Cost Plan:**
1. Open the idea > **Financial Plans** tab > **Cost Plans** > **New Manual Plan**
2. Complete required fields and link to a benefit plan if needed
3. Click **Save** > **Detail** tab > **Add** cost types and transaction classes
4. Enter costs and units by period
5. (Optional) Use **Actions > Populate from Investment Team** to insert costs from the team

**Create a Benefit Plan:**
1. Open the idea > **Financial Plans** tab > **Benefit Plans** > **New**
2. Complete fields, link to a cost plan
3. Add benefits by description, class, and subclass
4. Enter benefit amounts by period

**Create a Budget Plan:**
1. Submit a cost plan for approval: open the cost plan > **Actions > Submit for Approval**
2. Open **Financial Plans > Budget Plans > Approve**

**Financial limitations for ideas:**
- Actuals in financial plans, manual transactions, and chargebacks are not financially enabled
- Actuals using transactions are not possible
- Only manually created cost plan (POR) can be converted to a target investment
- Budget plans cannot be converted to a target investment
- Workflow system actions cannot convert idea financial plans to target investments

### Idea Approval Workflow

| Action | Steps |
|--------|-------|
| **Submit for approval** | Open idea > click **Submit for Approval** or change Status to Submitted for Approval |
| **Approve** | Select idea check box > click **Approve** |
| **Request more info** | Open idea > change status to **Incomplete** > add notes > Save |
| **Reject** | Select idea check box > click **Reject** (or change status to Rejected) |
| **Deactivate** | Open idea > clear **Active** check box > Save |
| **Delete** | Set Active to No > click **Mark for Deletion** (Delete Investments job runs later) |

> [!NOTE]
> An idea can only be rejected if its status is Submitted for Approval.

### Staff a Team to Work on an Idea

1. Open the idea > **Team** > **Add**
2. Select resources or roles (use **Add/Update by OBS** to add an entire OBS unit)
3. All resources are allocated at 100% by default
4. Adjust Role, Booking Status, Start/Finish, and % Allocation as needed
5. Save changes

> [!NOTE]
> You cannot staff multiple instances of the same named resource to an idea.

**Allocation color coding:**
- Yellow: at or under availability
- Red: over-allocated
- Green: allocation to other investments

### Evaluate and Change Resource Allocations

1. Open the idea > **Team**
2. Click **Properties** icon for the resource
3. Adjust **Default % Allocation**
4. Create **Planned Allocation** or **Hard Allocation** curves for date-specific deviations
5. Save changes

**Allocation actions:**
- **Shift Allocation** — Move allocations forward or backward in time; optionally scale percentage
- **Set Allocation** — Bulk-set start/finish dates and allocation % for multiple team members
- **Commit Planned Allocation** — Copies planned allocation to hard allocation
- **Accept Hard Allocation** — Resets planned allocation to equal hard-booked allocation

### Replace Team Staff Resources

Replace a staff member while preserving transferred data.

**What transfers to new staff member:** Available Start, Available Finish, Remaining Allocation, % Allocation, Investment Role.

**What does NOT transfer:** Existing Actuals, Pending Actuals, Baselines.

### Remove Team Staff Resources

Resources can be removed only if they have not posted actuals and have no pending submitted actuals.

1. Open the idea > **Team**
2. Select the resource check box > click **Remove** > confirm

### View Role Capacity

1. Open the idea > **Team** menu > **Role Capacity**
2. View aggregate role demand compared to available role capacity
3. Click **Staff** for over-allocated roles to see resources using that role

### Associate Ideas with Parent Investments

Ideas can be children of any investment type except other ideas. Ideas cannot have children.

1. Open the idea > **Hierarchy** tab
2. Click **Add** > select parent investments > click **Add**
3. If multiple parents, edit allocation percentages (must total 100%)
4. Save changes

### Convert an Idea into an Investment

1. Open an approved idea > click **Convert**
2. Select an investment type
3. (Optional) Select:
   - **Copy Financial Properties and Financial Plans** — Copies cost plans, benefit plans, financial attributes
   - **Copy Team** — Copies resource/role staffing data (selected by default)
4. Click **Next** > complete the investment fields > Save

> [!TIP]
> Remove duplicate resources or roles from the project template before conversion to avoid duplicate entries when using **Copy Team**.

**Financial plan copy behavior by OBS match:**

| Scenario | "Copy Financial Plans" Selected | Not Selected |
|----------|-------------------------------|--------------|
| Same OBS for idea and investment | All financial attributes and plans copied | OBS attribute copied; plans not copied |
| Same parent OBS, different units | All attributes and plans copied; OBS updates to new value | Plans not copied; OBS updates |
| Different entity OBS | Plans not copied; other financial attributes copied | Nothing copied |

## Related Notes

- [[IT Service Management]] — ITSM integration and incident management
- [[Resource Management Classic]] — Resource allocation and staffing
- [[Financial Management Classic/Overview]] — Financial plan setup
- [[_MOC Classic PPM]]

%%Source: p2092-2120%%

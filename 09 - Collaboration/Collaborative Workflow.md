---
title: Collaborative Workflow Management
tags:
  - concept
  - howto
aliases:
  - Workflow
  - My Workspace
  - Checklists
  - Smartlists
canonical: true
audience: everyone
domain: collaboration
---

# Collaborative Workflow Management

**Collaborative Workflow Management (CWM)** creates a centralized place for creating, editing, and tracking Checklists and To Dos. It helps investment managers handle ad-hoc activities — unplanned tasks outside the formal project schedule — without disrupting the team's primary work. The **My Workspace** area serves as each user's personal hub.

CWM supports five core needs:
1. **Plan** ad-hoc activities by creating Checklists with To Dos.
2. **Prioritize** by sorting and blocking To Dos.
3. **Allocate** by assigning owners and due dates.
4. **Track** by sharing Checklists with stakeholders.
5. **Centralize** by aggregating all To Dos from Investments, Tasks, Risks, Issues, Changes, and Checklists.

## Overview: My Workspace Structure

My Workspace has two main areas:

| Area | Purpose |
|---|---|
| **Checklists** | Containers for To Dos; can be standalone or linked to an Investment/Agreement |
| **Smartlists** | Saved filters that surface To Dos matching defined conditions, across all Clarity areas |

> [!NOTE]
> Clarity provides a built-in **"My To Dos"** smartlist for every user. It shows all To Dos where you are the owner or creator. It cannot be deleted, but you can rename it or change its conditions.

## Prerequisites and Access Rights

### Template and Inactive Investment Behavior

| Scenario | Result in My Workspace |
|---|---|
| Investment is made a template or set inactive | Associated checklists disappear from My Workspace |
| Investment created from a template that has checklists | Template checklists appear in My Workspace |
| Idea with checklists is converted to a project | Idea checklists carry over to the project |
| Idea (with checklists) converted using a template (with checklists) | Both sets of checklists appear |

### Required Access Rights

| Access Right | Purpose |
|---|---|
| **My Workspace - Navigate** | Access My Workspace pages in Clarity |
| **Checklist - Create** | Create new Checklists |
| **To Do - Create - All** | Create To Dos for accessible objects |
| **To Do - Edit - All** | View and edit all accessible To Dos |
| **To Do - View - All** | View all accessible To Dos |
| **To Do - Delete - All** | Delete To Dos for accessible objects |

---

## Managing Checklists

Checklists are visible to the owner and any collaborators. Investment checklists (for Projects, Ideas, Custom Investments) also appear here.

### Create a Checklist

1. Open **My Workspace** in Clarity.
2. In the **Checklists** panel, click **+** to add a new Checklist.
3. Enter a name (maximum 256 characters).
4. Click **Create**.

### Set a Due Date for a Checklist

1. Open **My Workspace** and click the target Checklist.
2. Click the **Three-dot Action Menu** and select **Set Due Date**.
3. Pick a date from the calendar.

### Copy a Checklist

1. Open **My Workspace** and click the target Checklist.
2. Click **Three-dot Action Menu** → **Copy**.
3. Enter a name for the copy and click **Copy**.

> [!IMPORTANT]
> What is **copied**: due date, all To Dos with their owners, due dates, and links.
> What is **reset/removed**: collaborators are removed; blocked To Dos become unblocked; completed To Dos revert to not completed; attachments are removed.

### Rename a Checklist

1. Open **My Workspace** and click the target Checklist.
2. Click **Three-dot Action Menu** → **Rename**.
3. Edit the name and click **Save**.

### Change the Status of a Checklist

1. Open **My Workspace** and click the target Checklist.
2. Click **Three-dot Action Menu** → **Mark Complete**.

The checklist moves under the **Completed** heading in the panel (collapsed by default). Use **Mark Open** from the same menu to reopen a completed checklist.

### Move a Checklist to an Investment/Agreement

1. Open **My Workspace** and click the target Checklist.
2. Click **Three-dot Action Menu** → **Move Checklist**.
3. In the **Move Checklist to (Investment/Agreement)** pop-up, select the target.
4. Click **Move**.

> [!NOTE]
> - If a checklist is not yet associated with any investment/agreement, you will only see the **Move Checklist** option (no Remove option).
> - Moving a checklist to a template or inactive investment causes it to disappear from My Workspace.

### Remove a Checklist from an Investment/Agreement

1. Open **My Workspace** and click the target Checklist.
2. Click **Three-dot Action Menu** → **Remove Checklist from Investment/Agreement**.

The checklist remains in My Workspace but loses its link to the investment/agreement.

### Delete a Checklist

1. Open **My Workspace** and click the target Checklist.
2. Click **Three-dot Action Menu** → **Delete**.
3. Confirm the deletion. All To Dos inside the checklist are also deleted.

> [!WARNING]
> Deleting a checklist from My Workspace also deletes it from any associated Investment/Agreement.

### Transfer Checklist Ownership

- A **Co-Owner** has all the rights of an Owner, including the ability to delete the checklist and remove other collaborators.
- The **Owner cannot be removed** from the checklist.
- When you move a checklist to an investment, the investment's manager is automatically added as a **Co-Owner**.

---

## Managing Sections

Sections let you group To Dos within a checklist into logical categories. You can create, rename, reorder, and delete sections.

### Create a Section

1. Inside a Checklist, click **+Section**.
2. Enter the section name and press **Enter**.

You can drag existing To Dos and drop them under the new section.

### Create a To Do from a Section

1. Click the **Three-dot Action Menu** on the section.
2. Select **Insert To Do**.
3. Type the To Do name and press **Enter** (repeat to add more).

> [!NOTE]
> When you mark a To Do as complete, it moves to the Completed tab along with its section. Completed sections do not support drag-and-drop.

### Rename a Section

1. Click the section name.
2. Edit the text and press **Enter**.

### Reorder Sections

Drag a section header and drop it at the desired position.

> [!NOTE]
> **Supported drag-and-drop operations:**
> - Drag a section to a new position
> - Drag a To Do (Open state) into or out of a section
> - Drag a To Do between sections
> - Drag a To Do within a section
>
> **Not supported:**
> - Drag a completed To Do or section
> - Nest a section inside another section
> - Drop a To Do immediately below a section header

### Delete a Section

1. Select the section in the Checklist.
2. Click **Three-dot Action Menu** → **Delete**.
3. Confirm deletion.

> [!NOTE]
> Deleting a section removes it from both Open and Completed states regardless of which state you delete from. **The To Dos inside are not deleted** — they move out of the section and remain in the checklist.

---

## Managing To Dos

### Create a To Do

1. Open **My Workspace** and click the target Checklist.
2. Click **+ To Do** and type the name.
3. Press **Enter** to save.

### Assign a Resource (Owner) to a To Do

1. Click the To Do inside the Checklist.
2. Click **Assign Owner**.
3. Select a user from the list.

> [!NOTE]
> If you assign an owner but don't share the checklist with them, the owner can see the To Do in their My Workspace but cannot perform any actions on it.

### Set a Due Date for a To Do

1. Click the To Do inside the Checklist.
2. Click **Set Due Date**.
3. Select a date from the calendar.

> [!NOTE]
> Overdue dates display with a red background.

### Manage Notes in a To Do

**Add a note:**
1. Click the To Do → **Three-dot Action Menu** → **Add Note**.
2. Type your text and press **Enter**. Use **Shift+Enter** for a line break.

**Edit a note:**
- Method 1: **Three-dot Action Menu** → **Edit Note** → edit and press **Enter**.
- Method 2: Click directly on the note text to edit in-place.

**Delete a note:** Remove all text from the note field.

> [!NOTE]
> Maximum note length is 1333 characters. To Dos show up to three lines of notes; text beyond three lines is truncated with an ellipsis. The Note field supports field-level security.

### Add or Edit a Link for a To Do

**Add a link:**
1. Click the To Do → **Three-dot Action Menu** → **Add Link**.
2. Enter the URL in **Edit Link** and click **Done**.

**Remove a link:**
1. Click the To Do → **Three-dot Action Menu** → **Edit Link**.
2. Click **Remove**.

### Manage Attachments for a To Do

**Upload:**
1. Click **Three-dot Action Menu** on the To Do → **Attachments**.
2. Click **Choose Files**, select files, and click **Open**.

**View:** Open the **Attachments** menu and click the filename to download.

**Delete:** Open the **Attachments** menu and click the **Delete** icon next to the file.

> [!IMPORTANT]
> Maximum of **10 files per To Do**. Attempting to upload more triggers an error.

### Block and Unblock a To Do

**Block:**
1. Click the To Do → **Three-dot Action Menu** → **Block**.
2. Enter a blocked description explaining why it's blocked.

**Unblock:**
- Click the **Unlock** button on the blocked To Do, **or**
- Click **Three-dot Action Menu** → **Unblock**.

### Mark a To Do as Completed

1. Check **Mark Complete** next to the To Do.

The To Do moves to the **Completed** list. You can reverse this — mark a completed To Do as **Not Completed** to restore it to the active list.

### Rearrange To Dos

Drag and drop To Dos to reorder them within the Checklist.

---

## Working with Collaborators

A Checklist can be shared with one or multiple Clarity users. Users added to a checklist appear as avatars next to the Share button.

> [!NOTE]
> Only **Owners** can share a checklist or remove a collaborator.

### Share a Checklist

1. Click the target Checklist → click **Share**.
2. Search by name or email address in the **Share Checklist** pop-up.
3. Select users to add as collaborators (multiple selections allowed).
4. Click **Done**.

### Modify the Checklist Sharing Group

A seeded **Checklist Sharing** group in Clarity automatically receives users whenever a checklist is shared with them. Administrators can manage this group at **Administration → Organization and Access → Groups → Checklist Sharing**.

The group has these default access rights:
- Checklist - Create
- My Workspace - Navigate
- Resource - View - All
- To Do - Create / Edit / View / Delete - All

**Add rights:** Open the Access Rights menu → Global → click **Add** → select rights → click **Add** or **Add and Select More**.
**Remove rights:** Select the right from the list → click **Remove**.

### Remove a Collaborator

1. Click the Checklist → click **Share**.
2. In the **Share Checklist** pop-up, locate the collaborator.
3. Click their **Three-dot Action Menu** → **Remove**.

### Roles in Checklists

| Role | View | Share | Copy | Rename | Delete | Remove Collaborators |
|---|---|---|---|---|---|---|
| **Owner** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Co-Owner** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Collaborator** | Yes | Yes | Yes | Yes | No | No |

> [!NOTE]
> Collaborators see a collaborator icon on checklists shared with them. They can view other collaborators (read-only) but cannot add or remove anyone. If a collaborator copies a checklist, they become the **Owner** of the copy.

---

## Managing Smartlists

Smartlists are saved filters that surface To Dos matching defined conditions from across Clarity. They support three view layouts: **List**, **Board**, and **Calendar**.

### Create a Smartlist

1. Open **My Workspace** → in the **Smartlists** panel, click **+**.
2. Enter a name for the smartlist.
3. In **Show To Dos where**, define your filter conditions.
4. Click **Create**.

### Edit a Smartlist

1. Click the Smartlist → **Three-dot Action Menu** → **Edit**.
2. Update the name or filter conditions.

### Delete a Smartlist

1. Click the Smartlist → **Three-dot Action Menu** → **Delete**.

> [!NOTE]
> The built-in **"My To Dos"** smartlist cannot be deleted, only renamed or reconfigured.

### Sort To Dos in a Smartlist

Three sort options are available across all layouts:

| Sort By | Grouping |
|---|---|
| **Date** | Overdue / Next 7 Days / Later |
| **Name** | Alphabetical by To Do name |
| **Owner** | Grouped by user (sorted by last name) |

### Icons Next to To Dos in Smartlists

Each To Do displays an icon indicating its parent context:

| Icon | Parent Context |
|---|---|
| Task icon | Task To Do on an Investment |
| Workspace icon | My Workspace Checklist To Do |
| Investment Checklist icon | Investment Checklist To Do |
| Risk / Issue / Change icon | Risk, Issue, or Change To Do on an Investment |
| Project / Idea / Custom Investment icon | Investment-level To Do |
| Agreement icon | Agreement To Do |

### List Layout

Displays all matching To Dos in a single flat list. Available actions:
- Click a To Do to rename it.
- Click the investment hyperlink to navigate to the parent investment.
- Edit the due date by clicking it.
- Update the owner by clicking the avatar.
- Use the three-dot icon to add/edit a link, add/edit/delete a note, block/unblock, or delete.

### Board Layout

Displays To Dos as draggable cards in columnar swim lanes.
- Columns can be set to **Status** or **Owner**.
- Cards show name, investment, due date, link, and owner avatar.
- Double-click a card to edit it inline.
- Drag cards between columns.
- Collapse individual columns.

> [!NOTE]
> **Status column colors are automatic and cannot be configured:** Open = no color, Blocked = red, Completed = grey. Maximum 500 cards across all Smartlist layouts. Attachments are not available in the Board layout.

### Calendar Layout

Displays To Dos on a weekly or monthly calendar based on due date. To Dos without a due date appear in an **Unscheduled** section.
- Toggle between monthly and weekly views.
- Toggle weekends on/off.
- Drag To Dos from Unscheduled to a date on the calendar.
- Double-click a To Do to edit name, status, owner, due date, or notes.
- Right-click a To Do to edit or delete.

> [!NOTE]
> You cannot drag a To Do from the calendar back to the Unscheduled state. Maximum 500 cards. Attachments are not available in the Calendar layout. Field-level security applies, but custom keyboard navigation (508 compliance) is not supported in this release.

---

## Common Search Component

A search bar at the top of My Workspace filters Checklists and Smartlists by name. Type the first few characters of the name to locate the item. The search bar clears automatically when you navigate away from My Workspace.

---

## Related

- [[Action Items]]
- [[Conversations]]
- [[To Dos]]
- [[_MOC Collaboration]]

%%Source: Clarity 16.4.1 Documentation PDF, p758-781%%

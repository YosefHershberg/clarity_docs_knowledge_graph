---
title: Close, Deactivate, and Delete Projects (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2293-2297
---
# Close, Deactivate, and Delete Projects and Investments (Classic PPM)

When a project lifecycle ends, perform one or more closure activities. A valid policy might include closing inactive projects but retaining them for one year before deletion.

## Closure Activities Overview

| Activity | Purpose |
|----------|---------|
| Financially close | Prevent new financial transactions |
| Deactivate | Remove from active views without deleting |
| Mark for deletion | Flag for batch deletion job |
| Cancel deletion | Remove the flag if deletion should not proceed |
| Delete | Run the job to permanently remove from database |

## Financially Close a Project

Prevents booking more actuals against a project.

1. Click **Home > Portfolio Management > Projects**
2. Open the project
3. Verify the project has no ETC
4. Process all remaining financial transactions into WIP and post all actuals
5. Click **Properties > Settings**
6. In the **Financial** section: set **Financial Status** to **Closed**
7. In the **Time and Staff** section: clear the **Open for Time Entry** check box
   - (Note: Already saved actuals in approved timesheets will still post when the posting job runs)
8. Save changes

## Deactivate a Project

Removes the project from active list views (remains in the database; can be re-filtered and reactivated).

1. Click **Home > Portfolio Management > Projects**
2. Open the project
3. Click **Properties > Settings**
4. In the **General** section: clear the **Active** check box
5. Save changes

> Projects can be reactivated at any time.

## Mark a Project for Deletion

A project must be **inactive** before it can be marked for deletion. Projects marked for deletion still appear on the Projects list until the Delete Investments and Time Reporting Periods job runs.

1. Click **Home > Portfolio Management > Projects**
2. Filter for inactive projects
3. Select the check box next to a project
4. Click **Mark for Deletion**
5. Click **Yes** to confirm

**Required access rights:**
- `<Investment> - Delete - All` global access right
- View access rights on the investment

> **Tip (Release 15.5.1+):** You can delete investments with timesheet or financial transaction data. Enable the **Allow Marked Investments with Timesheet and Transaction Data to be Deleted** setting in Administration > Project Management > Settings.

## Cancel Project Deletion

You can cancel deletion if:
- The Delete Investments job has not yet run
- The project remains inactive and listed

1. Click **Home > Portfolio Management > Projects**
2. Filter for inactive projects
3. Select the check box next to a project
4. Click **Cancel Deletion**
5. Click **Yes** to confirm

## Delete a Project or Investment

### Prerequisites (Release 15.5.1+)

Before deleting an investment with actuals:
- Financial status is set to **Closed**
- Investment status is set to **Inactive**
- No process instances are currently running
- You have access rights to mark for deletion and run the delete job
- Parent-child hierarchy allocations are 0%, 100%, or removed (only one parent at 100%)
- If using Release Planning: delete releases and requirements associated with the investment

### Steps

1. Configure the project management setting to allow investments with actuals to be deleted
2. Mark the investments for deletion
3. Review time reporting periods and marked investments; cancel deletion if needed
4. Run the **Delete Investments and Time Reporting Periods** job (administrators can schedule this)
5. Review the job log for confirmation

### Deletion Logic (Release 15.5.1+)

| Admin Setting (Allow with Actuals) | Marked for Deletion | Job Parameter | Investment Deleted? |
|-------------------------------------|---------------------|---------------|---------------------|
| Checked | Yes | Checked | Yes |
| Checked | Yes | Unchecked | No |
| Unchecked | No | Any | No |

After the job runs, all transaction entries are deleted and the investment is removed from the database.

## Delete Investment-Specific Charge Codes

When a project is deleted, the application also removes:
- The investment-specific charge code from the `PRCHARGECODE` table
- Any rate matrix rows using that investment-specific charge code

> **Note:** Investment-specific charge codes are available for projects only, not for non-project investments or custom investment types.

## Mark Investments for Deletion in Clarity (Modern UI)

In Clarity 15.9.2+, you can also mark investments for deletion using the **Mark for Deletion** action button, which sets the Purge Flag field. Use the **Delete Investments and Time Reporting Period** job to process.

## Related Notes

- [[Financial Enablement]] — Financially close projects
- [[Projects Teams Tasks]] — Project lifecycle overview
- [[Jobs and Reports]] — Delete Investments job details
- [[_MOC Classic PPM]]

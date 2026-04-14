# Submit a Timesheet (Classic PPM)

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[08 - Timesheets/_MOC Timesheets|Timesheets]]
- Related domains: [[13 - Classic PPM/_MOC Classic PPM|Classic PPM]]
- Canonical notes:
- [[08 - Timesheets/Enter Hours and Submit]]
- [[13 - Classic PPM/Timesheets Classic]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Global Search Special Characters (#global-search-special-characters)
- H2: Submit a Timesheet (#submit-a-timesheet)
- H3: Open Your Timesheet to Submit Your Work Time (#open-your-timesheet-to-submit-your-work-time)
- H3: Configure Your Timesheet (#configure-your-timesheet)
- H3: Populate a Timesheet (#populate-a-timesheet)
- H3: Add Entries to a Timesheet Manually (#add-entries-to-a-timesheet-manually)
- H3: (Optional) Specify Entry Input Type and Charge Codes (#optional-specify-entry-input-type-and-charge-codes)
- H3: (Optional) Add a Timesheet Row Under an Indirect Category (#optional-add-a-timesheet-row-under-an-indirect-category)
- H3: Enter Your Work Time on Your Timesheet (#enter-your-work-time-on-your-timesheet)
- H3: Submit a Timesheet for Approval (#submit-a-timesheet-for-approval)
- H3: Correct a Returned Timesheet (#correct-a-returned-timesheet)

## Global Search Special Characters

The following table lists the special characters that you can use in global searches:

| Special Character | Description | Escaped Form |
|---|---|---|
| `+` | plus sign | `\+` |
| `-` | minus sign | `\-` |
| `&&` | double ampersand | `\&&` |
| `\|\|` | double solid vertical bars | `\|\|` |
| `!` | exclamation point | `\!` |
| `(` | left parenthesis | `\(` |
| `)` | right parenthesis | `\)` |
| `{` | left curly brace | `\{` |
| `}` | right curly brace | `\}` |
| `[` | left square bracket | `\[` |
| `]` | right square bracket | `\]` |
| `^` | circumflex | `\^` |
| `"` | quotes | `\"` |
| `~` | tilde | `\~` |
| `*` | asterisk | `\*` |
| `?` | question mark | `\?` |
| `:` | colon | `\:` |
| `\` | backslash | `\\` |

## Submit a Timesheet

As a project team member or staff, you are responsible for tracking the number of hours that you work on specific tasks and submitting a timesheet. Tracking work time using timesheets allows companies to plan budgets for complex projects, track the allocation of resources, implement charge codes, and so on.

Your manager might ask you to track the hours you spend on specific tasks for specific projects. Depending on the policy at your company, your manager might also want you to track the hours you spend on tasks under various charge codes and input methods. As an application user, you track your working hours using timesheets. Your resource manager is responsible for managing the time recording of their direct reports.

Timesheets are available in Clarity, Classic PPM, and in the mobile app. Your administrator or manager can advise you which options are available at your organization.

The following workflow shows the steps for submitting your timesheet:

1. Open Your Timesheet to Submit Your Work Time
2. Configure Your Timesheet
3. Populate a Timesheet
4. Add Entries to a Timesheet Manually
5. (Optional) Specify Entry Input Type and Charge Codes
6. (Optional) Add a Timesheet Row Under an Indirect Category
7. Enter Your Work Time on Your Timesheet
8. Submit a Timesheet for Approval
9. Correct a Returned Timesheet
10. Adjust a Posted Timesheet

### Open Your Timesheet to Submit Your Work Time

After your manager registers you as a user, you can start to work with Classic PPM. To start tracking time with timesheets, access your unsubmitted timesheets.

Follow these steps:

1. Click **Home**, **Personal**, **Timesheets**. The unsubmitted timesheets appear.
2. Click the **Timesheet** icon next to a timesheet.

> [!NOTE]
> You can also click the **Current Timesheet** icon (clock symbol) at the top right of the page to open your current week timesheet.

> [!TIP]
> In 15.1 and newer releases, you cannot use Classic PPM timesheets if your administrator turns on the timesheets in Clarity.

### Configure Your Timesheet

You can configure the default appearance and time entry options for all your timesheets. For example, change the layout of columns and set the sort order for rows (tasks) in your timesheets. You can also set options for automatically populating a new timesheet.

Follow these steps:

1. Log in to Classic PPM.
2. Open a timesheet. Your configuration changes apply to all your timesheets. You are only changing the way you view your timesheets. The timesheet data is not changed.
3. Click the **Configure** link on the lower right side of the page.
4. In the **Content and Layout** section, select the column labels to display on the timesheet from the **Available Columns** list. To move them to the **Selected Columns** list, click the **Move Right** arrow.
5. Specify the following sorting options:
- **Default Sorting Column**: Specifies the column to sort the tasks on the Timesheet page. For example, sort the tasks by their parent investment, description, short name, or start date. The values vary based on the Selected Columns list.
- **Sorting Order**:
- **Ascending**: Sorts the column from lowest value to highest value.
- **Descending**: Sorts the column from highest value to lowest value.
6. In the **Time Entry Options** section, select all options that you want for automatically populating a new timesheet.
- **Populate assigned tasks**: Automatically populates a new timesheet with task assignments that are currently open. The open assignments have a date range within the time period of the new timesheet and typically have non-zero pending or accepted ETC. The range also includes the number of days that your administrator set on the Timesheet Options page. The Populate Time Range field includes a setting for the days before and after the time period start (default = 7 days). If any open assignments have non-zero ETC, the tasks in any future time periods outside the range also appear.
- **Copy time entries from previous timesheet**: Automatically populates a new timesheet with the open task entries from your previous timesheet.
- **Include actuals from previous timesheet (except incidents)**: Automatically includes the actual hours from the previous timesheet with the following two exceptions:
- This option does not copy actuals for incidents.
- This option does not copy time entries for one-time actuals such as vacation or sick time from non-working days on the resource calendar.
- **Display Unit**: Indicates the unit of measure for time entries. Values include Hours or Days. Typically, time is entered in hours rounded to the nearest quarter-hour. For example, 8.00 hours or 4.25 hours.
- **Decimal Places**: Indicates the number of decimal places for the selected time entry display unit.
7. Click **Save**.

### Populate a Timesheet

When you first open a timesheet, the timesheet is blank, containing no tasks. You can automatically populate your current timesheet with tasks.

> [!NOTE]
> Depending on how you (or your administrator) set up your timesheet options, automatically populating a timesheet does one of the following tasks:
> - Copies all of your task assignments to your current timesheet.
> - Copies the timesheet entries from your most recently submitted timesheet (and optionally includes actuals) to your current timesheet.

Follow these steps:

1. Open your new current week timesheet. No task entries appear because the timesheet is new.
2. Click **Configure** if you want to set or change the options for automatically populating the new timesheet. For more information about configuring your timesheet populate options, see Configure Your Timesheet.
3. Click **Populate** to populate the timesheet based on the Configure options that you or your administrator set.

> [!NOTE]
> The **Populate** button appears only if the automatic populate options are set.

### Add Entries to a Timesheet Manually

After you populate your timesheet with tasks, you can add more tasks from your project. To add more tasks to a timesheet, use the add task feature.

Follow these steps:

1. Click the **Add Task** button on the open timesheet. A page opens with a list of tasks available to the user.
2. Select the check box next to the tasks that you want to add to the timesheet, and then click the **Add** button at the bottom of the page.

### (Optional) Specify Entry Input Type and Charge Codes

Input type and charge codes are used for payroll purposes. If your company uses these codes, your project manager can make them available to you in your timesheets. Your manager can also want you to split entries in this process. Verify the policy of your company on input type and charge codes before submitting your timesheets.

Follow these steps:

1. Open a timesheet.
2. Select an input type code or charge code from the **Input Type Code** or **Charge Code** drop-down in a time entry row.
3. (Optional) Select the check box next to the timesheet entry you want to split, and click **Split**.

> [!NOTE]
> This step is appropriate when your manager wants you to enter specific hours under two different charge codes. After you split the entry, you can select a type code or charge code from the **Input Type Code** or **Charge Code** field for the second entry.

4. Save the changes.

### (Optional) Add a Timesheet Row Under an Indirect Category

Your manager can ask you to add rows to a timesheet under an indirect category.

> [!TIP]
> The new timesheets in Clarity 15.x no longer support indirect time entries. Use **Other Work** instead. Be advised that you could observe differences in totals if you entered and approved indirect time using Classic PPM timesheets and later switch to the Clarity in Clarity 15.x.

Follow these steps:

1. Open a timesheet.
2. Click **New Indirect Row**.
3. Select the **Charge Codes** or **Input Type Codes** (if applicable).
4. Save the changes.

### Enter Your Work Time on Your Timesheet

To record the time you worked each day on specific task assignments, use the timesheet page of your current work period.

> [!NOTE]
> You can also distribute the number of hours for a single task evenly across all working days, by entering the total number of hours you worked in the **Total** column for the time entry row. If you enter values in both the Date and Total cells, the Date cell value overrides the Total cell value.

Follow these steps:

1. Open a timesheet.
2. Enter the number of hours you worked on each assignment each day in the Date cells of the timesheet.
3. Save the changes.

### Submit a Timesheet for Approval

Your submitted timesheet goes to the timesheet approver. The status of the timesheet is Unapproved until it is approved.

Do one of the following:
- From the timesheets list page, select the timesheet, and click **Submit for Approval**.
- Open the timesheet, and click **Submit for Approval**.

### Correct a Returned Timesheet

When your manager returns a timesheet for correction, you receive a notification. The method of this notification depends on your account settings.

Follow these steps:

1. Open your returned timesheet. For example, click the link in the notification from your manager.

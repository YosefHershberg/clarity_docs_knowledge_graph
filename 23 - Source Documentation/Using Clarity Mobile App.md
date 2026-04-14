# Using Clarity Mobile App

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[14 - Vaia AI/_MOC Vaia AI|Vaia AI]]
- Related domains: [[15 - Mobile App/_MOC Mobile App|Mobile App]]
- Canonical notes:
- [[15 - Mobile App/Conversations Mobile]]
- [[15 - Mobile App/Action Items Mobile]]
- [[15 - Mobile App/Timesheets Mobile]]
- [[15 - Mobile App/To Dos Mobile]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Introducing the Redesigned Clarity Mobile App 3.3.1 (#introducing-the-redesigned-clarity-mobile-app-331)
- H3: Key Updates (#key-updates)
- H2: Getting Started with Mobile App (#getting-started-with-mobile-app)
- H3: Requirements (#requirements)
- H3: Required Access Rights and Settings (#required-access-rights-and-settings)
- H3: Download and Configure the App (#download-and-configure-the-app)
- H2: Sign-In/Log-In (#sign-inlog-in)
- H3: Sign In and Get Started (#sign-in-and-get-started)
- H3: First-Time Users: Choose One of Two Login Methods (#first-time-users-choose-one-of-two-login-methods)
- H2: My Timesheet (#my-timesheet)
- H3: Prerequisite (#prerequisite)
- H3: Enter Your Time and Submit Your Timesheet (#enter-your-time-and-submit-your-timesheet)
- H3: Timesheet Rules Flow (#timesheet-rules-flow)
- H3: Enter One Total That Spreads Evenly Across Multiple Days (#enter-one-total-that-spreads-evenly-across-multiple-days)
- H3: Search and Select Tasks (#search-and-select-tasks)
- H3: Manage Frictionless or Virtual Time Entries from Rally (#manage-frictionless-or-virtual-time-entries-from-rally)
- H3: Add Task from Previous Timesheet (#add-task-from-previous-timesheet)
- H3: Add Task from Assignments (#add-task-from-assignments)
- H3: Add Task from Assignments (with ETC) (#add-task-from-assignments-with-etc)
- H3: Manage Timesheet Notes in My Timesheet (#manage-timesheet-notes-in-my-timesheet)
- H3: Manage Task Notes in My Timesheet (#manage-task-notes-in-my-timesheet)
- H3: View Future and Past Timesheets (#view-future-and-past-timesheets)
- H2: Review & Approve (#review-approve)
- H3: Introduction (#introduction)
- H3: Tap the Main Menu to Get Basic Info (#tap-the-main-menu-to-get-basic-info)
- H3: Manage Timesheet Notes in Review and Approve (#manage-timesheet-notes-in-review-and-approve)
- H3: Components on the Review & Approve Timesheets Page (#components-on-the-review-approve-timesheets-page)
- H3: Return Your Timesheets (#return-your-timesheets)
- H2: Conversations (#conversations)
- H3: Prerequisites (#prerequisites)
- H3: View Conversations (#view-conversations)
- H3: Post a Comment in the Conversation (#post-a-comment-in-the-conversation)
- H3: Upload an Attachment to a Comment (#upload-an-attachment-to-a-comment)
- H3: Edit/Delete a Comment or Entire Conversation (#editdelete-a-comment-or-entire-conversation)
- H2: Action Items (#action-items)
- H3: Prerequisites (#prerequisites)
- H3: View the Action Items Dashboard (#view-the-action-items-dashboard)
- H3: View the Action Item Cards (#view-the-action-item-cards)
- H3: Filtering and Sorting Action Items (#filtering-and-sorting-action-items)
- H3: View Action Item History (#view-action-item-history)
- H3: Page Refresh (#page-refresh)
- H3: Act on Action Items (#act-on-action-items)
- H2: To Dos (#to-dos)
- H3: Prerequisites (#prerequisites)
- H3: View the Checklists Page (#view-the-checklists-page)
- H3: Create a New Checklist (#create-a-new-checklist)
- H3: Managing Checklists (#managing-checklists)
- H3: Manage Sections (#manage-sections)
- H3: View the Smartlist (#view-the-smartlist)
- H2: Settings (#settings)
- H2: Technical Details for Administrators (#technical-details-for-administrators)
- H3: Supported Authentication Methods (#supported-authentication-methods)
- H3: Default Administrative Timesheet Options (#default-administrative-timesheet-options)
- H3: Mobile Specific URL (#mobile-specific-url)
- H2: Frequently Asked Questions and Troubleshooting (#frequently-asked-questions-and-troubleshooting)
- H3: Error Message: Your time tracking settings are not correct... (#error-message-your-time-tracking-settings-are-not-correct)
- H3: What Access Rights Are Required? (#what-access-rights-are-required)
- H3: I Cannot Enter My Time for a Task (#i-cannot-enter-my-time-for-a-task)
- H3: I Cannot Copy or Delete a Task (#i-cannot-copy-or-delete-a-task)
- H3: I Cannot Submit My Timesheet (#i-cannot-submit-my-timesheet)

## Introducing the Redesigned Clarity Mobile App 3.3.1

Clarity Mobile App 3.3.1 introduces enhancements designed to simplify and accelerate timesheet entry. You can now manage Frictionless (virtual) time entries sourced from Rally and quickly populate timesheets with tasks that have remaining effort (ETC). These features reduce manual effort, improve accuracy, and ensure a more seamless experience when tracking time on the go.

### Key Updates

#### 1. Manage Frictionless or Virtual Time Entries from Rally

You can now view and manage Frictionless (virtual) time entries sourced directly from Rally in your mobile timesheet:
- View Rally-based virtual time entries in the selected timesheet period.
- Edit actual hours, add notes, or delete entries as needed.
- Submit timesheets with Frictionless entries just like standard Clarity entries.

> [!NOTE]
> Virtual entries are automatically converted to tasks and assignments after the timesheet is submitted and posted.

#### 2. Add Task from Assignment with ETC

You can easily populate your timesheet with tasks from your assignments that have remaining effort (ETC):
- Use the **Add Task from assignments (with ETC)** option from the timesheet action menu.
- Tasks with ETC are automatically added and pre-filled with actual hours.
- If you have blank time entries, the app prompts you before replacing them.

> [!NOTE]
> Ensure the **Populate assigned tasks (with ETC)** option is enabled in Classic PPM Timesheet Options.

---

## Getting Started with Mobile App

### Requirements
- iOS 16.0 or higher for iPhone, iPad, and iPod touch
- Android OS 12.0 or higher
- Wireless or data network access
- Supported release of Clarity SaaS or On-Premise

| Your Release | Can We Use the Mobile App? |
|---|---|
| 16.0.3 or higher releases | Yes |
| 16.0.2 and earlier releases | No |

> [!ATTENTION]
> - To manage Frictionless (virtual) time entries from Rally in the Clarity Mobile App 3.3.1, ensure you are on Clarity release 16.3.1 or higher.
> - To use the Conversations feature in the Clarity Mobile App 3.3.1, ensure you are on Clarity release 16.2.3 or higher.

### Required Access Rights and Settings

Contact your administrator to verify that you have the required access rights and settings in Clarity that enable you to submit timesheets and approve timesheets in the new mobile app. Administrators can locate this information further down this page and can also refer to the Access Rights documentation in the Reference section (switch to the English language edition of this documentation).

### Download and Configure the App

Before you attempt to download the app, verify you are a licensed user of Clarity on-premise or SaaS with the required access rights.

1. On your mobile device, go to the Apple App Store or Google Play store.
2. Download the **Clarity Mobile** app.
3. Open the app to configure a connection to your Clarity system.

---

## Sign-In/Log-In

### Sign In and Get Started

1. Verify you are connected to a wireless network or mobile data plan. The app cannot be used offline.
2. Open the app.
3. Configure authentication using SSO/Username.
4. The mobile app timesheet landing page appears. You remain logged in for the duration of your user session.
5. Your session ends when either of the following events occurs:
- You log out of the app.
- Your session expires.

> [!TIP]
> The mobile app stores user authentication data in a temporary token. For your security, the session token expires after a defined period of inactivity set by your administrator. The default is 60 minutes; however, the timeout for SaaS environments of Clarity is reduced to 15 minutes.

### First-Time Users: Choose One of Two Login Methods

**SSO:** Tap the **Log in with SSO** option, enter your SSO URL, and select **Go**. The very first time, you see a configuration screen where you enter your single sign-on username and network password. Tap **Log in**. In the future, you can just tap **Log in with SSO** and then **Go**.

> [!NOTE]
> If the SSO URL is a URL to the direct Clarity server (and not an IDP URL), use a format like `https://<clarityserver.com>`.

**Username:** Tap the **Log in with Username** option, enter your server Clarity URL, your Clarity Username and Password, and select **Log in**.

You see the configuration screen:
- The very first time you set up SSO
- If your SSO password changes and the mobile app is still trying to authenticate your previous password
- If you tap **Change Login Method**

Enter your single sign-on username and network password. Tap **Log in**. The app remembers your configuration settings (server and username). The app masks your password with dots for security. The app remembers your last five (5) successful login credentials.
- To remove an old entry, tap **X Delete**.
- To change your settings, select **Edit**.

---

## My Timesheet

### Prerequisite

You need to have the following access rights to show the timesheet menu items in the Clarity Mobile App:
- **Timesheets - Navigate:** Allows you to navigate to timesheet pages. Type: Global
- **Timesheets - Approve All:** Allows users to approve all submitted timesheets. Type: Global

> [!IMPORTANT]
> Clarity Mobile App hides the timesheet menu items if you don't have the required access rights.

### Enter Your Time and Submit Your Timesheet

The **My Timesheet** tab is only accessible if the following conditions are met:
- The resource should be active.
- The Track Mode of the resource should be set to PPM, and **Open for Time Entry** should be checked in **Resource - Main - Settings**.

After you log in, you land on the My Timesheet landing page, which shows the following three timesheets:
- Current Period
- Next Period
- Previous Period

To view more timesheets, click **More Time Periods**.

> [!NOTE]
> - When you tap **More Time Periods**, it displays the list of timesheets of past time periods. The Clarity mobile app only shows Open time periods.
> - When you expand the list, the **Hide Additional Time Periods** button appears.
> - When you scroll down, the **Back to Top** button appears.

The lifecycle for a timesheet is typically: open - submitted - approved. If returned, the lifecycle typically changes to: open - submitted - returned - submitted - approved.

Tap **Current Period** and enter time for each task. Tap **Total** at the top to view all tasks and time entries for the time reporting period. Swipe left and right to view individual days. Tap a single day to view only the tasks for that day. Tap inside a cell to enter your time.

Swipe left to **Copy** or **Delete** a task. Tap the task name to open and view its details.

To submit your timesheet, review the totals for the time reporting period and each day to verify your entries are accurate. When ready, tap **Actions** and select **Submit**.

> [!TIP]
> You are not submitting time for individual days. When you tap Submit, you are submitting your total time entries for the entire time reporting period (typically one or two weeks). If tasks in the timesheet have no hours entered, a warning message will be displayed while submitting.

If your administrator configured the timesheet attestation feature, you might see a different confirmation message. Confirm the totals for the time period and tap **Submit**.

### Timesheet Rules Flow

1. After you submit the timesheet, you will get a confirmation message.
2. Tap **Submit** to proceed.
3. Clarity displays the error message if any condition in the timesheet rule is not satisfied.
4. Tap **Close**.
5. A Timesheet Rules Error icon will be displayed on the top-right within the timesheet.
6. You can review the errors anytime by tapping the Error icon.

> [!NOTE]
> If you notice an error icon displayed at the top right of a timesheet, it signifies that the timesheet couldn't be submitted due to an error related to timesheet rules.

### Enter One Total That Spreads Evenly Across Multiple Days

Your administrator can enable a setting that speeds time entry. With this setting, users can report their total time in hours or days for the same task and have the app evenly spread that total over multiple days.
- As an administrator, see Clarity: Administration and Configuration to configure the **Allow entry of line item totals** setting.
- As a user, you can report one total that is evenly spread across all the remaining days in the same time reporting period for that same task.

### Search and Select Tasks

1. After you log in, tap **Menu**, **My Timesheet**.
2. Tap Current/Previous/Next Period where you want to enter and submit your timesheet. The selected period opens with a message: "No tasks. Add tasks to work on your timesheet."
3. Tap the **Three-dot Action Menu**.
4. Tap **Search and Select Tasks**. You will see the list of investments along with tasks available to include in your timesheet, including task start and finish dates.

> [!NOTE]
> You can search for the specific investment/task using the Search bar.

5. Select the task(s) from the list.
6. Tap **Add Tasks**. A message appears: "Selected tasks have been added successfully."
7. Enter the time for the selected tasks.
8. To add more tasks, use the **Search and Select Tasks** option again.

### Manage Frictionless or Virtual Time Entries from Rally

Frictionless time entries are initially virtual. They are generated dynamically from Rally data and do not originate from predefined tasks or assignments in Clarity. After the timesheet is submitted and posted, these virtual entries are automatically converted into tasks and assignments within the associated investment.

**Prerequisite:** Implement Frictionless Cost Accounting in Clarity before proceeding.

1. Log in to Clarity.
2. Navigate to **Menu > My Timesheet**.
3. Select the appropriate timesheet period.
4. Review the Frictionless (Virtual) Time Entries imported from Rally.

> [!NOTE]
> - You can copy or delete time entries.
> - You can add notes to entries.
> - You can edit actual hours.
> - Submit your timesheet when ready.

### Add Task from Previous Timesheet

1. After you log in, tap **Menu**, **My Timesheet**.
2. Tap Current/Previous/Next Period.
3. Tap **Three-dot Action Menu**.
4. Tap **Add Tasks from Previous Timesheet**.
5. If you want to copy hours along with the previous timesheet, turn on **Copy Time**.
6. Tap **OK**. A message appears: "Tasks from the previous timesheet with time have been added successfully."

> [!NOTE]
> If you added tasks from a previous timesheet without copying hours and later want to include hours, select the **Add Tasks from Previous Timesheet** option again. A message will appear: "Tasks with no time entered will be removed. Do you want to continue?" Tap **OK** to proceed.

### Add Task from Assignments

1. After you log in, tap **Menu**, **My Timesheet**.
2. Tap Current/Previous/Next Period.
3. Tap **Three-dot Action Menu**.
4. Tap **Add Tasks from Assignments**. The application adds tasks automatically, and a message appears: "Tasks based on assignments have been added successfully."

### Add Task from Assignments (with ETC)

Use this option to automatically add tasks from your assignments with remaining effort (ETC) to your timesheet.

**Prerequisite:** Enable the **Populate assigned tasks with ETC** option in Timesheet Options of Classic PPM.

1. Log in to Clarity.
2. Navigate to **Menu > My Timesheet**.
3. Select the Current, Previous, or Next timesheet period.
4. Tap the **Three-dot Action Menu**.
5. Select **Add Task from assignment (with ETC)**. The application adds tasks automatically and populates actual hours based on the ETC.

> [!NOTE]
> - Modify or update the populated time entries as needed.
> - Submit the timesheet after completing your entries.
> - If any existing entry is blank, a confirmation message appears: "Tasks with no time entered will be removed. Do you want to continue?"

### Manage Timesheet Notes in My Timesheet

You can add notes at the timesheet level and edit or delete your notes.

1. After you log in, tap **Menu**, **My Timesheet**.
2. Tap Current Period or any time period.
3. Tap **Actions** and select **Notes**.
4. Enter text in the **Enter note here** area and choose the Date (optional).
5. Tap **Post**. The app arranges notes chronologically, with the most recent note on top.
6. Swipe left to **Edit** or **Delete** posted notes.
7. If you choose delete, you will get a confirmation message. Tap **Confirm** to delete.

### Manage Task Notes in My Timesheet

You can add notes at the task level and edit or delete your notes.

1. After you log in, tap **Menu**, **My Timesheet**.
2. Tap Current Period or any time period.
3. Tap a **Task**.
4. Enter text in the **Enter note here** area and choose the Date.
5. Tap **Post** and the note will be available at the end of the task details.
6. Swipe left to **Edit** or **Delete** the posted note.
7. Edit the Note or change the Note Date and tap **Post**.

### View Future and Past Timesheets

The My Timesheet page has filter options that allow you to view past and future timesheets. Click the **Filter** option to open the My Timesheet Filter page. Select the relevant statuses and time period, then select **Apply**.

> [!NOTE]
> - Status is not required for filtering. When left unselected, Clarity will filter for all available statuses.
> - You can touch the **Clear** button to reset the filter option.
> - The **Apply** button will be disabled until the time period values are populated.
> - Start and End dates for Time Period are required to filter for any specific reporting period.

---

## Review & Approve

### Introduction

As a manager, you can review the timesheets submitted by team members. You can either approve their entries or return a timesheet to route it back to the original user to make adjustments.

> [!NOTE]
> You need to be on Clarity 15.9.2 or higher releases and use Clarity Mobile App 3.1.2 to review and approve timesheets from the mobile application.

After you log in, tap **Menu** to navigate to the **Review & Approve** page. The page shows the timesheets of the Current Period by default. You can scroll left/right to view past/future time periods.

Each period has four statuses:

1. **Open** - Timesheets not yet submitted.
2. **Returned** - Returned timesheets are considered Open; they must be updated and resubmitted.
3. **Submitted** - Timesheets that have been submitted.
4. **Approved** - Timesheets that have been approved.

#### Open Timesheets

On the Review & Approve page, tap **Open** to expand it. Choose a timesheet to review. The **Total** tab shows all tasks and time entries. You can:
- Tap **Remind** to send a reminder to the user (multiple reminders are supported).
- Use arrows to navigate to the previous/next timesheet.
- Tap the back arrow to navigate back to the Review & Approve page.

> [!IMPORTANT]
> - Any timesheet that could not be submitted will have a new indicator on the top right due to timesheet rules error.
> - The error icon will persist until the user resolves the issues and resubmits the timesheet.

#### Returned Timesheets

On the Review & Approve page, tap **Returned** to expand it and choose a timesheet to review.

#### Submitted Timesheets

On the Review & Approve page, tap **Submitted** to expand it. You can review the detailed timesheet before approving or returning. Tap the task name to:
- Open and view task details
- View notes submitted by the user (you can reply to notes)

After reviewing, you can:
- Tap **Approve** to approve the timesheet.
- Tap **Return** to return the timesheet for corrections.

If you approve a timesheet by mistake, tap **Return** to recall it.

#### Approved Timesheets

On the Review & Approve page, tap **Approved** to expand it. You can review the approved timesheet and tap **Return** if you find any mistakes.

### Tap the Main Menu to Get Basic Info

Tap the main menu to:
- View the Clarity server URL for the current session
- View the current mobile app version
- Navigate to the My Timesheet landing page
- Navigate to the Review & Approve landing page
- Logout

### Manage Timesheet Notes in Review and Approve

You can add and reply to notes at the timesheet level. You can also edit or delete your notes.

1. After you log in, tap **Menu**.
2. Tap **Review & Approve**.
3. Tap the **Notes** icon on the top right corner.

> [!NOTE]
> The counter indicates if there are any notes to review.

4. Reply by entering text in the **Enter note here** area and tap **Post**.
5. Swipe left to **Edit/Delete** posted notes.
6. If you choose delete, you will get a confirmation message. Tap **Confirm**.

### Components on the Review & Approve Timesheets Page

#### Search Timesheets

1. Tap **Review & Approve**.
2. Navigate to the required period and tap **Search**.
3. Enter the First Name/Last Name/Full Name/User ID of the resource. The search result expands the status tab containing the required timesheet.

#### Filter Timesheets

1. In the Main Menu, tap **Review & Approve**.
2. Navigate to the required period, and tap the **Filter** icon.
3. Select the Resource Manager(s) from the list.
4. Tap the **Back Arrow** icon. The applied filter criteria appears with results below the search box.
5. Remove the applied filter by tapping the **Clear Filter** icon.

> [!IMPORTANT]
> Clarity retains the applied filter criteria even if you close and relaunch (or log out and log in) the App.

#### Bulk Actions

1. In the Main Menu, tap **Review & Approve**.
2. Navigate to the required period, and tap on the Submitted/Approved status.
3. Tap **Approve All** or **Return All** in Status. Clarity prompts with a pop-up to confirm.
4. Tap **OK**.

### Return Your Timesheets

You can use the Mobile App to return approved timesheets if you have **Timesheets - Approve** access right. The returned timesheets have the "returned" status and are editable.

---

## Conversations

### Prerequisites

Ensure you have the **My Workspace - Navigate** access right to view and manage conversations through the Clarity Mobile app.

### View Conversations

1. Log in to the Clarity Mobile App.
2. Tap **Menu**, **Conversations**. You will find the Conversation list.

> [!NOTE]
> - The list includes conversations where you started a thread, replied to a thread, or were mentioned in a thread.
> - Each conversation appears as a card displaying the context/object, last updated date, and user avatar.

### Post a Comment in the Conversation

1. Tap **Menu**, **Conversations**.
2. Tap the conversation card where you want to post a comment. Existing comments and timestamps are displayed.
3. Type your comment in the Comment Box at the bottom.
4. Tap **Post**.

### Upload an Attachment to a Comment

1. Tap **Menu**, **Conversations**.
2. Tap a conversation card.
3. Tap **Attach** below the comment box.
4. Choose one of the following options:
- **Upload a file:** Select a file from your mobile device.
- **Open the camera:** Capture a photo or video to upload.
5. After selecting, tap **Post** to upload the attachment and comment.

> [!NOTE]
> Only one attachment can be added at a time, with a maximum of 5 attachments per comment. To delete an attachment, tap the Trash icon.

### Edit/Delete a Comment or Entire Conversation

The author of a comment or thread can edit or delete using the left-swipe gesture.

**To edit/delete a comment:**

1. Tap **Menu**, **Conversations**.
2. Tap a conversation card.
3. Swipe left to choose **Edit** or **Delete**.

**To edit/delete a complete conversation thread:**

1. Tap **Menu**, **Conversations**.
2. Tap a conversation card.
3. Swipe left on the thread to choose **Edit** or **Delete**.

---

## Action Items

### Prerequisites

You need to be on Clarity 16.1.1 or higher releases and use Clarity Mobile App 3.2.3 to access action items from the mobile application.
- Clarity Mobile App 3.2.3 supports Clarity 16.0.3 and higher.
- Action Items cannot be filtered using action item status when connecting to Clarity version less than 16.1.1.
- The action item history page will not show initiated process name or parent type when connecting to Clarity version less than 16.1.1.

> [!IMPORTANT]
> - Starting Mobile App 3.2.3, mobile-specific access rights are no longer used to limit menu options. Users see all menu items but can only act if they have Clarity-specific access rights.
> - This makes all mobile app functionality backward compatible with Clarity version 16.0.3 and higher.

### View the Action Items Dashboard

The Action Item dashboard displays action items based on received date and status.

1. After you log in, tap **Menu**, **Action Items**.

**Top section** has three tiles:

1. **Open:** Number of open action items assigned to you.
2. **Pending:** Number of pending action items.
3. **Closed:** Number of closed action items.

**Middle section:**

1. **Received this week:** Open action items received this week with percentage change from the previous week.
2. **Received last week:** Open action items received last week with percentage change from two weeks ago.

**Bottom section:** Most recent open action items (up to 10). Slide left or right to review, or tap to open.

### View the Action Item Cards

Each Action Item card displays: Subject, Description, Object and its name, Status, Priority, and Priority color.

### Filtering and Sorting Action Items
- Quick search by typing in the search bar (searches Subject or Description).
- Sort by date or alphabetically.
- Filter by one or multiple statuses.
- Filter by actions received in the last 7, 14, 30, 60 days, or anytime.
- Filter by one or multiple priorities.

> [!NOTE]
> - You can combine search bar with additional filter criteria.
> - When filters are applied, a counter indicates how many criteria are active.
> - The sub-title page header changes to "Filtered" when additional filters are applied.

### View Action Item History

The View History page displays:
- Action Item initiated date and time
- Initiated process or user
- Number of assignees (with name, avatar, and email address)
- Actions taken by assignees and action dates

### Page Refresh

Pull down the screen to refresh the Action Items Dashboard or action item list page.

### Act on Action Items

**Open Action Items:**

1. Tap **Menu**, **Action Items**.
2. Open an action item with open status.
3. Select an action (Approved/Rejected) and tap **Submit**.

**Pending Action Items:**

1. Open an action item with pending status (shows last action taken).
2. Select an action and tap **Submit**.

**Closed Action Items:**

You can view closed action items and their details but cannot take action on them. View history to see historical details.

---

## To Dos

### Prerequisites
- Clarity Mobile App 3.2.3 supports Clarity 16.0.3 and higher.
- Badges in Checklist Page require Clarity 16.1.3 or higher.
- To-Do Notes require Clarity 16.1.3 or higher.

> [!IMPORTANT]
> Starting Mobile App 3.2.3, mobile-specific access rights are no longer used. Users see all menu items but need Clarity-specific access rights to perform actions.

### View the Checklists Page

After you log in, tap **Menu**, **To Dos**.

The Checklist page displays:

1. Search for Checklist by name
2. Open and Completed Checklists
3. Individual Checklist Cards
4. Owner of the Checklist
5. Checklist Due Date
6. Checklist Parent
7. Counter showing completed To Dos vs. Total To Dos
8. Badge showing blocked and/or overdue To Dos
9. Create a new Checklist button

Available actions:
- Pull-down to refresh the page.
- Swipe left to mark a checklist as complete.
- Swipe right to delete the checklist.
- Quick search using the search bar (searches Open and Completed checklists).

### Create a New Checklist

1. Click the **Plus (+)** button in the Checklist page.
2. Enter the name of the Checklist.
3. Set a Due Date (optional).
4. Tap **Create**.

> [!NOTE]
> The Create button will not be enabled until the name is populated.

> [!IMPORTANT]
> If you enter more than 256 characters, an in-line error message appears.

### Managing Checklists

#### Create a New To Do

1. Tap **Menu**, **To Dos**, then tap a checklist.
2. Tap the **Three-dot floating menu**.
3. Tap **New To Do**.
4. Type the Name of the To Do (Create button enables once name is populated).
5. Set the To Do Due Date.
6. Tap **Create**.

#### Manage To Dos

1. Toggle ON the **Mark Complete** button to mark the To Do as complete.
2. Tap **To Do Name** to edit the name.
3. Tap **Set Owner** to assign an owner.
4. Tap **Set Due Date**.
5. Populate the **Link** field and tap the arrow to open the link.
6. Toggle ON the **Blocked** button and mention the reason.
7. Tap **Notes** to add a note.
8. Tap the floating icon to delete the To Do.

#### Manage Attachments for a To Do

An out-of-the-box Attachments attribute for To Dos in Checklists is available.

> [!NOTE]
> - You can upload any attachment that meets admin-configured upload requirements.
> - Up to 10 attachments per To Do.
> - You can view attachments uploaded in Clarity and vice versa.
> - The app will prompt for file, photo, and camera permissions when used the first time.

**Upload:** Tap the **Upload** button from the three-dot menu. Choose **Upload a file** or **Open the Camera**.

**View:** Tap the **View** button from the three-dot menu. Tap a file to open it in the default app.

**Delete:** Tap the **View** button, then tap the **Delete** icon.

> [!NOTE]
> Upload is disabled if 10 attachments are already uploaded. A paperclip icon appears for To Dos with attachments.

#### Reorder To Dos

You can move a To Do by dragging and dropping it up or down within the Checklist, within a section, or out of a section.

> [!NOTE]
> To Dos within the completed tab cannot be dragged and dropped to reorder.

#### Mark a Checklist as Complete

1. Tap **Menu**, **To Dos**, then tap a checklist.
2. Tap the **Three-dot floating menu**.
3. Tap **Mark Complete**.

#### Edit a Checklist

1. Tap the **Three-dot floating menu**, then **Edit**.
2. Change the Checklist Name and/or Due Date.
3. Tap **Save**.

#### Copy a Checklist

1. Tap the **Three-dot floating menu**, then **Copy**.
2. Change the Checklist Name and Due Date for the new Checklist.
3. Tap **Save**.

#### Delete a Checklist

1. Tap the **Three-dot floating menu**, then **Delete**.
2. Tap **OK**.

#### Delete a To Do

1. Swipe left on the To Do in the Checklist.
2. Tap **Delete**, then **OK**.

#### Share a Checklist

1. Tap the User avatars or the share icon to view the existing checklist owner and collaborator details.
2. Tap **Share** to add a new user.
3. Search for new collaborators by name or email.
4. Check to add and uncheck to remove a collaborator.

### Manage Sections

You can group To Dos into sections for better organization.

#### Create a Section

1. Tap the **Three-dot floating menu**, then **New Section**.
2. Enter the name and tap **Create**.

#### Edit a Section

1. Swipe right to left on a section, tap **Edit**.
2. Modify the name and tap **OK**.

#### Reorder Sections

Drag and drop sections when in a collapsed state, up or down relative to other sections.

> [!NOTE]
> - Sections within the completed tab cannot be reordered.
> - Sections cannot be dragged inside another section. If dragged within another section, it will be placed below it.

#### Delete a Section

1. Swipe left to right on a section, tap **Delete**.
2. Confirm with **OK**.

> [!IMPORTANT]
> - To-Dos remain in the Checklist without the section, maintaining the same order.
> - Deleting a section from one tab (Open or Completed) also deletes it from the other.

#### Create a New To Do Within a Section

1. Tap **New To Do** from the three-dot menu.
2. Enter the name and set a Due Date.
3. Tap the **Section** drop-down to select an existing section.
4. Tap **Create**.

#### Move a To Do To An Existing Section

1. Tap a To Do.
2. In the **Section** field, select the existing Section from the list. The To Do moves to that section.

### View the Smartlist

Smartlists help you quickly see To Dos based on conditions. In **My To Dos**, you can see all To Dos associated with Investments, Tasks, Risks, Issues, Changes, and Checklists where you are assigned as Owner or created the To Do.

1. Tap **Menu**, **To Dos**.
2. Tap the **Smartlist** tab.

> [!NOTE]
> Smartlists are listed alphabetically, consistent with Clarity.

#### Search for Smartlists

Type the name in the search bar. Checklist and Smartlist share the search bar, ensuring seamless retention of search criteria.

#### Sort To Dos in Smartlist

Three sorting options are available:
- **Date:** Displays To Dos by due date, categorized as Overdue, Next 7 Days, Later.
- **Name:** Displays To Dos by name.
- **Owner:** Displays To Dos grouped by user name (sorted by last name).

> [!NOTE]
> The default display is sorted by Date.

#### Manage To Dos in Smartlist

Tap any Smartlist, then tap a To Do. You can interact with it the same way as from the Checklist page.

---

## Settings

The User Settings page displays the user's avatar and full name. It also allows you to set the default landing page for the application. The landing page is saved in the user profile within the mobile application.

> [!NOTE]
> - You do not require additional access rights to view the Settings page.
> - If your default landing page becomes inaccessible due to updated access rights, Clarity automatically displays the first available menu link.

---

## Technical Details for Administrators

### Supported Authentication Methods
- **Direct:** Direct Clarity Authentication
- **SSO On Premise:** Clarity Integrated with CA Single Sign-On (on-premise)
- **Federated SSO:** Clarity SaaS with federated CA SSO authentication (SaaS)

Federated SSO with IDPs for ADFS and CA SSO are supported. SaaS IDP support includes Okta, Azure SSO, SecureAuth, Centrify, and PingIdentity. After the initial setup, a mobile app user continues to authenticate in the same way. Even users with no Clarity REST API access rights can sign in to the mobile app.

### Default Administrative Timesheet Options

#### Configure Timesheet Options

The selections made in Timesheet Options can influence the functionality of the Clarity Mobile App:

1. In **Review and Approve**, the Hours gauge will be displayed when **Display Efforts Gauge** is enabled.
2. Check **Display Time Errors As a Toast Message On Submit** to show toast messages. Uncheck to show timesheet rules error messages.
3. Define **Time Entry Increment** to support rounding based on the Decimal Places configuration.

> [!NOTE]
> When populating the Totals value, the number is first distributed to each day, then rounded based on the setting. Navigate to Classic PPM: **Administration, Project Management, Timesheet Options**.

> [!IMPORTANT]
> Timesheet Options set in Classic PPM apply to Classic PPM, Clarity, and Mobile App timesheets.

#### Timesheet Rules

When you define a rule for timesheets in Clarity Administration, you can customize error messages in the rule. Timesheet users see an error icon if they cannot submit due to a rules error.

> [!IMPORTANT]
> If you are utilizing the **Timesheet Hook** add-in, you must decide whether to continue using the Hook or to use Timesheet Business Rules. You cannot use both.

### Mobile Specific URL

The Mobile Specific URL feature enables seamless navigation directly to the Clarity mobile app.

**Key Features:**

1. Direct navigation to Clarity Mobile App using specially crafted URLs.
2. Broadcom URL with dynamic re-routing to customer-specific URLs.
3. Compatibility with Android and Apple devices.
4. No changes to Clarity out-of-the-box notification settings required.
5. Ability to prepopulate the Clarity URL.
6. Route users to specific pages in mobile.

**URL Syntax:**

```
https://clarity.broadcom.com/<Mobile Menu Page>/?url=<Specific Clarity URL encoded>&sso=<true|false>
```

**Parameters:**

1. Replace `<Mobile Menu Page>` with one of: `/login`, `/conversations`, `/actionItems`, `/myTimesheets`, `/approveTimesheets`, `/todos`
2. Replace `<Specific Clarity URL>` with the encoded URL.
3. The `sso` parameter specifies whether SSO is enabled (`true` or `false`).

**Examples (for Clarity hosted at `https://myclarity.domain.com`):**

| URL | Mobile Page |
|---|---|
| `https://clarity.broadcom.com/login?url=https%3A%2F%2Fmyclarity.domain.com%2F&sso=false` | Default landing page |
| `https://clarity.broadcom.com/actionItems?url=https%3A%2F%2Fmyclarity.domain.com%2F&sso=false` | Action Items page |
| `https://clarity.broadcom.com/myTimesheets?url=https%3A%2F%2Fmyclarity.domain.com%2F&sso=false` | My Timesheet page |
| `https://clarity.broadcom.com/approveTimesheets?url=https%3A%2F%2Fmyclarity.domain.com%2F&sso=false` | Review & Approve page |
| `https://clarity.broadcom.com/todos?url=https%3A%2F%2Fmyclarity.domain.com%2F&sso=false` | To Dos page |

---

## Frequently Asked Questions and Troubleshooting

### Error Message: Your time tracking settings are not correct...

If the app detects missing settings for you or your project tasks, you might see this error. Verify settings have **Open for Time Entry** turned on, the **Track Mode** is set, and the **Active** flag is set.
- As a **project manager:** Open the project properties in Classic PPM. Only when the project is active, Track Mode is set to PPM, and Open for Time Entry is selected, can users record time for tasks.
- As a **resource manager:** Open the resource properties in Classic PPM. Only when the resource is active, Track Mode is set to PPM, and Open for Time Entry is selected, can the user record time.

### What Access Rights Are Required?

**To submit timesheets:**
- Resource - Enter Time (instance)
- Timesheets - Navigate

**To approve timesheets:**
- Timesheets - Navigate
- Timesheets - Approve (OBS, Instance, or Global rights)

### I Cannot Enter My Time for a Task

You can only enter time on an open or returned timesheet. If already approved, contact your administrator. If already submitted, contact your supervisor to return the timesheet.

### I Cannot Copy or Delete a Task

You can only copy or delete a task on an open or returned timesheet. Open the timesheet and swipe left on a task.

### I Cannot Submit My Timesheet

When you tap **Actions**, the Submit option only appears for open or returned (and corrected) timesheets.

### The App Shows "No Internet Connection"

The mobile app requires a network connection and cannot be used offline. Try:
- Moving toward a wireless access point or hotspot.
- Contacting your data provider.
- Tapping **Try Again** later.

> [!TIP]
> The app requires wireless or data plan network access. Without connectivity, you cannot enter timesheet values or edit task details.

### The App Shows "Timesheet Not Submitted"

This can occur if your connection went down after tapping Submit, the backend server lost its connection, or a database error occurred. Try again in a few minutes. If the issue persists, contact your administrator.

### What Kind of Performance Can I Expect?

Most user actions complete in under three seconds, some in less than one second. The slowest scenario (loading 100 tasks) clocked in at around 20 seconds. Performance is also affected by network bandwidth, background activity, and OS health.

### Match Your Application Locale Setting With Your Mobile App Locale

If your Classic PPM locale uses commas instead of decimal points (e.g., French), set your mobile device locale to match your Classic PPM locale to ensure the correct decimal separator is available on the numeric keypad.

### How Do I Get Updates for the Clarity Mobile App?

You can manually check for updates or enable the **Auto-update apps** OS-level setting on your Android or iOS device.

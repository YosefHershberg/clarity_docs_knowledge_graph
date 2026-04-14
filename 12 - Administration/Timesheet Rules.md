---
title: Setting Up Rules for Timesheets
tags:
  - admin
aliases:
  - Timesheet Rules
canonical: true
audience: admin
domain: administration
---
# Setting Up Rules for Timesheets

## Overview

Consider a scenario where you want to enforce an organizational mandate that employees should not work for more than fifty hours a week. You can use the Timesheets tab on the Administration workspace to define Business Rules in Clarity to enforce such mandates.

Whenever users submit a timesheet, Clarity will validate it against the defined business rules. Users can only submit Timesheets after they meet all the requirements defined by the Business rules.

Some key benefits of using Timesheet rules are:

- Enforcing the business rules early in the timesheet workflow process helps to improve the efficiency of tracking actual work effort.
- Administrators can create rules without having to rely on understanding complex coding and have the ability to quickly edit customized error messages and enable or disable rules.
- Timesheet users will be guided with customized error messages in their preferred language and learn what data is appropriate and valid based on feedback from the application when they submit their timesheet for approval.

> [!important]
> If 'Timesheet Hook' is installed, Clarity will use that instead of the rules defined in Clarity. If Clarity rules are defined and enabled when customized 'Hook' files exist, the Clarity rules will be ignored.
>
> To use Clarity Timesheet Rules:
> - Remove the custom 'Hook' files.
> - Ensure the 'Alias.xml' file has not been customized to point to a custom file.
> - Remove any reference to the customized files from the properties.xml file.

This page contains the following sections:

- Managing Records By Using the Grid Layout
- Creating Rules for Timesheets
- Examples of Leveraging Business Rules
- Key Points to Remember

## Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:

- Format a particular cell or row in a grid to help you analyze your data quickly. Use the Conditional Formatting dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the Column Panel to show or hide columns on the grid.
- Drag up to three column headers to use the Group By capability. Then, view the data in the grid as rows of logical groups.
- Use the out-of-the-box charting experience, which is very similar to the capabilities you find in spreadsheet applications like Microsoft Excel or Google Sheets but is directly embedded within Clarity.
- Export the common grid data to a CSV file.
- Use the Search bar available to filter values based on the name or ID.
- Use Filters to quickly identify records that match your selection criterion. The advanced filtering capability allows you to define complex filter conditions.
- Use the Details Panel, which is available as a two-column layout, to edit fields.
- You can save and modify multiple views that help you achieve your business goals, and you can share these views with other users.

To learn more about the grid layout and associated capabilities, see:

- [[Clarity Grids]]
- Conditional Formatting
- Details Panel
- Saved Views
- Filters

> [!note]
> In addition to those actions, you can also use the Bulk Delete capability in the Common Grid to delete multiple records.

## Creating Rules for Timesheets

When you define a rule, you need to provide the following information:

- **Rule Name and Description** that explains the intent of the rule.
- **Error Message** that will be displayed to end users. You can change your language setting and localize the error message for various target languages.
- **Conditions** triggering the business rule. You can specify Timesheet Error Conditions and Timesheet Entry Error Conditions.

**Follow these steps:**

1. Log into Clarity and click Administration, Timesheets (Beta) to open the Timesheets (Beta) workspace.
2. Click New Rule to open the New Rule dialog box.
3. Enter the Rule Name and the appropriate description that will help other administrators understand the purpose of the rule.
4. Enter the Error Message that should be displayed if all the conditions specified in the Timesheet Error Conditions are met.
5. In the Timesheet Error Condition section, configure the rules that apply to the entire timesheet.
6. In the Time Entry Error Condition section, configure the rules that apply to individual entries.
7. Click Create to create the rule.

> [!note]
> Some key points to remember when creating rules:
> - Errors are generated when all conditions within the defined rule are met.
> - Each rule is evaluated separately.
> - The Timesheet Error Conditions area focuses on rules that apply to the whole timesheet. For example, you can specify a rule that will not allow you to submit a timesheet where the Timesheet Grand Total exceeds 40 hours.
> - The Time Entry Error Conditions area focuses on rules that apply to individual entries. For example, you can specify a rule that will not allow you to submit a timesheet when you enter time for tasks that are locked.
> - When you define multiple conditions, the business rule will only execute when all of the conditions are met.
> - Task-level rules will not apply when Tasks are created via the Timesheet Integration job as part of Frictionless Accounting. The rules will apply on subsequent updates.

## Examples of Leveraging Business Rules

### Validating Daily Totals or Grand Totals

This is the most straightforward use case for most organizations where they want to implement rules that govern the total time submitted by resources.

**Rule 1:** You want to ensure that contractors cannot submit timesheets if they enter more than 12 hours per day.

- Use the Resource drop-down list to ensure you select the "Contractor" field. This will ensure the rule executes only for contractors.
- Use the Timesheet Total drop-down list to ensure that the rule will execute only when the Timesheet Daily total is more than 12 hours.

**Rule 2:** You want to ensure that employees cannot submit timesheets for more than 40 hours for future time periods.

- Use the Resource drop-down list to ensure you select the "Employee" field. This will ensure the rule executes only for employees.
- Use the Time Period drop-down list to ensure that the rule executes only for future timesheets.
- Use the Timesheet Total drop-down list to ensure that the rule will execute only when the Timesheet Grand total is more than 40 hours.

> [!note]
> The 'Timesheet Total' condition cannot be used with any of the 'Time Entry Error Conditions'.

### Validating the Sum of Entries

In this scenario, organizations want to govern the daily totals submitted by the resources.

**Rule 1:** You want to ensure that Daily Totals for Billable work cannot exceed 8 hours per day.

- In the Time Entry Error Conditions section, select Sum of Entries and configure it to ensure that the rule will execute when the Daily Sum is greater than 8 hours.
- In the Where Time Entry option, set the Input Type Code to Billable to ensure the rule executes only when resources enter more than 8 hours of daily billable work.

**Rule 2:** You want to ensure that contractors cannot submit timesheets with more than 5 hours of non-billable time per timesheet.

- Use the Resource drop-down list to ensure you select the "Contractor" field. This will ensure the rule executes only for contractors.
- In the Time Entry Error Conditions section, select Total Sum and configure it to ensure that the rule will execute when the Total Sum is greater than 5 hours.
- In the Where Time Entry option, set the Input Type Code to Non-Billable to ensure the rule executes only when contractors enter more than 5 hours of total non-billable work for the timesheet.

> [!note]
> Some key points to remember about Sum of Entries rules:
> - When creating this type of rule, if no additional conditions are defined for the 'Where' conditions, it produces the same results as the rule using the 'Timesheet Total' condition.
> - Only one condition can be defined per rule for the 'Sum of Entries' — either Daily Sum or Total Sum.
> - Other conditions can be defined for Resource, Time Period, Time Entry, Task or Investment.
> - The 'Sum of Entries' condition cannot be used with the 'Timesheet Total' condition.

### Checking Data Integrity of Fields

You can use 'Any Entry' when you want a rule that just checks specific properties and are not concerned with checking the Timesheet Total or Sum of Entries totals.

**Rule 1:** You want to ensure that Tasks from Non-Admin 'Miscellaneous Work' investments cannot be submitted for future time periods.

- Use the Time Period drop-down list to ensure that the rule will only execute for future time periods.
- Use the Where Investment drop-down list to ensure that this rule executes only for the Investment type Miscellaneous Work.
- Use the Where Task drop-down list to ensure that this rule executes for tasks where the charge code is not equal to out-of-office.

**Rule 2:** You want to ensure that users cannot submit timesheets if they have not entered the charge code for investments, tasks, and time entry.

- Use the Where Time Entry drop-down list to ensure that the rule will only execute when the charge code is empty.
- Use the Where Investment drop-down list to ensure that the rule will only execute when the charge code is empty.
- Use the Where Task drop-down list to ensure that the rule will only execute when the charge code is empty.

> [!note]
> Some key points to remember about Any Entry rules:
> - For Any Entry, multiple conditions can be defined on property fields from the Resource, Time Period, Time Entry, Investment, or Task objects.
> - The Any Entry condition cannot be used with the 'Timesheet Total' condition.

### Checking Time Entry Totals

You can use 'Any Entry' when you want a rule that just checks specific properties and are not concerned with checking the Timesheet Total or Sum of Entries totals.

- The "Total" field on the Time Entry Object allows you to check the totals per row.
- The Time Entry 'Total' field can be defined using 'Any Entry' to check the total amount for any row that matches the total amount condition and any other property field conditions.
- It is recommended that when using this field in a rule, only use it for the 'Any Entry' type; not with the 'Sum of Entries' rule type. Using the Time Entry 'Total' field with the 'Sum of Entries' condition may not produce the expected results.

**Rule:** You want to ensure that each time entry row must have time entered.

- Select the Any Entry Time Entry Error Condition.
- Use the Where Time Entry drop-down list to ensure that this rule executes only when the Time Entry total is equal to zero.

### Time Entry Field Reference

The following table describes the various fields available in the Where Time Entry drop-down list.

| Time Entry Field | Description |
|------------------|-------------|
| Baseline | Current Baseline from Task |
| Charge Code (Editable) | Populated from Task or Investment or prior period |
| ETC (Editable) | Populated from Assignment. When actual time is entered, the field displays the decremented amount down to 0 (original - actual). When the ETC field is directly updated, it becomes 'Pending ETC' (blue color treatment with tooltip). |
| Start & Finish | Populated from Assignment |
| Input Type Code | Populated from Resource properties or prior period |
| Number of Notes | Total number of notes entered for the row |
| Posted Actuals | Populated from Assignment |
| Role (Editable) | Populated from Assignment or Allocation or Resource or prior timesheet |
| Short Name | Populated from Task |

## Related
- [[_MOC Administration]]

%%Source: p1887-1893%%

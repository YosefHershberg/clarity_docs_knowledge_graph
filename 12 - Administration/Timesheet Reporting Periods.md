---
title: Configure Timesheet Reporting Periods
tags:
  - admin
aliases:
  - Timesheet Reporting Periods
---
# Configure Timesheet Reporting Periods

Fiscal Time Slices Configure the following recommended FISCAL time slice IDs:

TIME SLICE:
Fiscal (7-year range) DAILYRESOURCEESTCURVE

FROM DATE:
Start of the current month. Going back one (1) year.

NUMBER OF PERIODS: 72 months

> [!tip]
> After you make any changes, always resume or unpause the Time Slicing job to allow it to regenerate your new data.

Deadlock Errors in bg-ca.logs
The bg-ca.logs might show the following deadlock error when a large amount of XOG activity takes place while the Time Slicing job is running.
Error processing slices com.niku.union.persistence.PersistenceDeadlockException: SQL error code: 60
Error message: [CA Clarity][Oracle JDBC Driver] [Oracle]ORA-00060: deadlock detected while waiting for resource
The failure is not critical. The job recovers and processes the records the next time it runs.

As a rule, pause the Time Slicing job or set the process calling XOG, as there is such a large amount of XOG activity that needs to be processed by the Time Slicing job, which is typically set to run every minute.
Configure Timesheet Reporting Periods
Users can submit their timesheets in Classic PPM or Clarity mobile apps. As an administrator, configure time reporting periods and other timesheet options.
- Create Time Reporting Periods - Close Time Reporting Periods - Mark and Delete Time Reporting Periods - Configure Timesheet Options

Create Time Reporting Periods
Create time reporting periods for users to track time for their assignments using timesheets. The time periods can cover varying durations such as few days, a week, a month, and so on. The time periods must be consecutive and cannot overlap an exiting time period.
Follow these steps:
1. Click Administration, Project Management, Time Reporting Periods.
2. Click New.
3. Select the scale and specify the duration.
4. Click Save and Return.
5. Create additional time reporting periods.

1. Click Administration, Project Management, Time Reporting Periods.
2. Select the reporting periods and click Close.
The closed time periods are no longer listed with the open time periods. 3. To display the closed time periods, select Closed from the Status drop-down and click Filter.
1. Click Administration, Project Management, Time Reporting Periods.
2. Filter by Status for all Closed reporting periods.
3. Select the reporting periods and click Mark for Deletion.
4. Confirm the deletion.
The Marked for Deletion flag appears checked for the time period. 5. Run the Delete Investments and Time Reporting Periods job.

Before running the job, you can cancel the deletion using one of the following options: - Select the reporting period and click Cancel Deletion. - Reopen the closed period to cancel the deletion automatically.
1. Click Administration, Project Management, Timesheet Options.
2. Specify the default sorting column and sorting order.
3. In the Default Time Entry Options section, select all options that you want for automatically populating a new
timesheet. - Populate assigned tasks: Enables the Add Assigned Tasks option in the Add Tasks button of Clarity
Timesheets.

- Populate assigned tasks(with ETC): Enables the Add Assigned Tasks(with ETC) option in the Add Tasks button of Clarity Timesheets.
- Copy time entries from previous timesheet: Automatically populates a new timesheet with the task entries from the previous timesheet. TIP The KB article Clarity: Timesheet Population - What Determines Tasks To Display on a Timesheet? explains the required conditions for tasks on timesheets.
- Include actuals from previous timesheet: Automatically includes the actual hours from the previous timesheet (actuals are not copied for incidents). Actuals for one-time time entries, such as vacation or sick time, are not copied.
- Display Unit: Indicates the measure of time entries by hours or days. The setting is used for timesheets in both Classic PPM and Clarity.
- Decimal Places: Indicates the number of decimal places for the selected time entry display unit. - Enable Note Date: Enables note date in the Clarity Timesheets. - Allow posting of future Timesheets: Allows user to submit and post timesheets for future periods, not just current
4. Save the changes.
5. Click Apply to All Resources.
6. Click Yes to confirm.
1. Click Administration, Project Management, Timesheet Options.
2. Select the Allow submission of timesheets with no tasks option to enable the submission of empty timesheets.
When this option is enabled, the Submit button will be active even if the timesheet has no tasks. 3. Select the Allow entry of line item totals option allow users to enter an optional single total value (in hours or days)
4. Select the Display time attestation message on submit option if you want to prompt the user to confirm an attestation statement for compliance requirements.
5. Select Display time errors as a toast message on submit if you are not using Timesheet Rules since the rules display customize error messages.

## Related
- [[_MOC Administration]]

%%Source: p3218-3220%%



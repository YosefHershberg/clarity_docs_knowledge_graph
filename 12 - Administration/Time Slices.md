---
title: Configure Time Slices
tags:
  - admin
aliases:
  - Time Slices
---
# Configure Time Slices

Create Datamart Stoplights
You can create datamart stoplights to flag projects that meet certain criteria.
Follow these steps:
1. Open Administration, and from Data Administration, click Datamart Stoplights.
2. Click New.
3. Complete the following fields, and save
- Name: Defines the name for the stoplight. Examples: Project on Target, Project Over Budget, or Resource Overbooked.
- Description: Defines the description for the stoplight. Limits: 256 characters - Red SQL Rule: Defines the SQL formula that defines the red stoplight. - Yellow SQL Rule: Defines the SQL formula that defines the yellow stoplight.
> [!note]
> No green SQL rule exists. A stoplight is green when both the red and yellow stoplights evaluate to false.
> Configure Time Slices
> A time slice is a flat table that contains data that is derived from a sliced binary large object (BLOB). A BLOB is a collection of binary data that is stored as a single entity in a database. You can use a BLOB to store curve and calendar data.
> The data model contains several BLOBs that most reporting tools cannot read. Configure a time slice request to specify the objects and fields, the slicing frequency, and the granularity to store the data. After you define the Time Slicing job, it extracts data. This job displays a readable flat table that is based on the criteria you set in the time slice request. You can then query the time slice to run reports. For more information, see Clarity Studio Development.
> - Objects That Require Time Slices - Create a Time Slice Request - Query Time Slices to Run Reports - Daily Time Slices - Allocation Time Slices - Fiscal Time Slices - Deadlock Errors in bg-ca.logs
> Objects That Require Time Slices
> The following objects require time slicing:
> - prAllocCurve The percentage of a resource availability that is allocated for a project (as a rate curve). Source table: PRTeam
> - prActCurve Actuals posted to an assignment. Database Column: prExtension Source table: PRAssignment
> - prEstCurve Estimates for an assignment. Database Column: prExtension Source table: PRAssignment
> - prBaseCurve Baselines for an assignment.

Database Column: prExtension Source table: PRAssignment - prAvailCurve The resource availability (as rate curve). Source table: PRResource - prValue Work time information, such as shifts, days off, and holidays.

While this table calculates resource availability and allocation, you cannot select the table for time slicing. Source table: PRCalendar - prAllocCurve Values on timesheet time entries. Source Table: PRTimeentry
Create a Time Slice Request The initial time slicing process can take several minutes. Once you write time-slice data, the next time the job runs, it only checks for updated objects. The time slice updates whenever the content of an object changes. For example, adding ETC to an assignment.
Between the time that you create a time slice request and then refresh it, many database transactions can occur. To preserve systems resources, disable temporarily transaction logging.

Verify with your database administrator before changing a time slice request or anything that can cause a large number of database transactions to occur.
1. Open Administration, and from Data Administration, click Time Slices.
2. Click New.
3. Complete the following fields:
- Time Slice Name Defines the name for time slice request. - Rollover Interval Defines the frequency that the From Date updates for processing an updated time slice request.
Define the option when doing ongoing reports, such as end-of-month reports. Values: - Daily: Updates the time slice every calendar day. - Weekly: Updates the time slice every week.

- Bi-Weekly: Updates the time slice every 14 calendar days. - Monthly: Updates the time slice every calendar month (recommended frequency). - Bi-Monthly: Updates the time slice every two calendar months.

- Quarterly: Updates the time slice every three calendar months. - Semi-Annually: Updates the time slice every six calendar months. - Yearly: Updates the time slice every year. - None: The time slice never updates.

Default: Daily For ad-hoc reporting: None - From Date: Defines the date from when the time slice period begins. Example: To have time slice data start the first day of each month, enter the first day of the month.

Then, select Monthly as the slice period. - Slice Period: Specifies the period to use for each time slice request. Values:

- Daily - Weekly: Seven calendar days. - Bi-Weekly: 14 calendar days. - Monthly: One calendar month. - Bi-Monthly: Two calendar months. - Quarterly: Three calendar months. - Semi-Annually: Six calendar months.

- Yearly: 12 calendar months - None - Number of Periods: Defines the number of periods for each time slice request. Examples: 12 (months), 52 (weeks), 5 (years) - Item: Defines the object, or data element, to time slice.

Values: - Actuals: Defines the hourly time posted for an assignment on a project. The element sets up by default. - Estimates: Defines the hourly estimate for an assignment on a project. The element sets up by default.

- Baseline: Defines the baseline (in hours) for a project assignment. The element sets up by default. - Availability: Defines the hours per day that a resource is available to work on a project. The element sets up by
default. - Allocation: Defines the percentage time that a resource allocates to a project. The element sets up by default. - Time Entries: Defines the time entry value for a timesheet. - Current: Data identified for the current baseline. For example, when you have multiple baselines, select the
baseline to consider the current baseline for each project. - Non-Current: Data not identified for the current baseline. - Expiration Date: Use the field for ad-hoc reports.

Specifies the date when data gets deleted from the database. The date automatically displays for rollover time slices. 4. Save the changes.The new time slice request records and time slicing begins immediately.
> [!tip]
> After you make any changes, always resume or unpause the Time Slicing job to allow it to regenerate your new data.
> Query Time Slices to Run Reports
> Follow these steps:
> 1. Create the time slice request. 2. Schedule the Time Slicing job. 3. After the Time Slicing job performs time slicing, you can query the time slice to run reports.
> - Each record in the time slice table contains an object ID that corresponds to a data element. - The report writer uses the object IDs to identify the resource that is associated with the slice record.
> Daily Time Slices
> Based on the amount of data and the reporting needs of each implementation, the time slices need to be configured properly.
> - Limit the number of DAILY slices to create fewer records for reporting historical data within the recommended configurations.
> - Do not define any daily slices that cover a range of over 2 years, especially the team slices. - If you need past historical data to be sliced for dates further back than what is recommended here, consult our
> Broadcom Service partners for advice on alternative configurations or use MONTHLY time slices.

Configure the following recommended DAILY time slice IDs:

TIME SLICE:
Estimates (1-year range) DAILYRESOURCEESTCURVE
Actuals (2-year range) DAILYRESOURCEACTCURVE
Baseline (2-year range) DAILYRESOURCEBASECURVE
Availability (2-year range) DAILYRESOURCEAVAILCURVE
Allocation (2-year range) DAILYRESOURCEALLOCCURVE

FROM DATE:
Start of the current month. No need to slice estimates far in the past. Start of the current month. Going back one (1) year. Start of the current month. Going back one (1) year. Start of the current month. Going back one (1) year. Start of the current month. Going back one (1) year.

NUMBER OF PERIODS: 400 days 740 days 740 days 740 days 740 days

> [!tip]
> When a resource has a Hire Date or Termination Date, the Availability slices are bound for the resource within this date range.

Allocation Time Slices
If your organization is not maintaining allocation at the project level, you may have no need to maintain slice data for allocation.

Allocation is by far the largest portion of slice data, and if it is not entirely valid it can be dramatically reduced.

We recommend that if you do not set project-level allocations you should set the Number of Periods to four (4) for the Allocation slice request.

This will minimize the amount of data that is being stored for allocation slices and populated in the datamart or data warehouse tables.
If you are truly using this allocation data it should also be in the same range as your baseline and availability time slice definitions.

We recommend that you enforce setting project allocations company-wide and zero out any remaining or unused allocations.

When allocations are set properly on active projects, only valid data is stored in timeslices, dramatically reducing the amount of records needed to maintain allocations.
We also recommend that you zero out Remaining Allocation as seen on the Project Team page (or project roster), for inactive and closed projects.
To zero out the remaining allocation for resources, set the allocation finish date to the last date the resource worked on the project.
- Remaining Allocation takes into account the last date the actuals were tracked by the resource. This date should be set as the allocation finish date if the resource is no longer working on the project.
- Zeroing out any unnecessary Remaining Allocation reduces the amount of data stored in the timeslice and makes your data more realistic.
> [!tip]
> Tip: As a shortcut, you can also set ETC to zero (0) and then click the Allocate From Estimates button on the Team page. Although this method is somewhat less accurate, it is the easiest way to release unused resource allocation.

## Related
- [[_MOC Administration]]

%%Source: p3214-3217%%



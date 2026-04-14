---
title: Configure a Global Audit Trail
tags:
  - admin
aliases:
  - Audit Trail
---
# Configure a Global Audit Trail

6. The Allow end user column configuration, Display effort gauge, and Display project time gauge settings determine if these options are available to users when they create Timesheets in Clarity.
7. Select the appropriate value in the Time entry increment rounding option to provide real-time data entry adjustments when the user fills out the timesheets.

The rounding of values is based on the configuration of the Decimal Places option.

The following increments are permitted: - Any: Entered values are rounded based on the `Decimal Places' setting (0-5 places) - 0.25*: Entered values are rounded to the nearest quarter number (hours or days).

Minimum Decimal Places = 2 - 0.5* = Entered values are rounded to the nearest half number (hours or day). Minimum Decimal Places = 1 - 1* = Entered values are rounded to the nearest whole number (hours or days).

Minimum Decimal Places = 0 NOTE
To enable the Time Entry Increment feature in Clarity Timesheet:
1. Ensure you have the Administration - Feature Toggles - Navigate access right to access the Feature Toggles tile in Clarity Administration.
2. Navigate to Clarity Administration and click Feature Toggles.
3. Check the Enabled field for Time Entry Decimal Precision and Increments.
If Time Entry Decimal Precision and Increments feature is disabled in the Feature Toggles workspace, then the Time Entry Increment option disappears in the Timesheet Options. 8.

Select the Timesheet actual costs will use resource rates, not team rates, for team assignments option to ensure that actual costs for timesheets are calculated using individual resource rates instead of team rates for team assignments.

For Example: When an individual resource (Cheryl Amos) manually enter time on a task assigned to a team (e.g., Mobile Team as the Assignment Resource ID): - Planned Cost Rate is derived from the rate of the Mobile Team.

- Actual Cost Rate is calculated using your individual rate from the rate matrix (e.g., Cheryl's rate).
Configure a Global Audit Trail
The global audit trail provides a log of all audit records for all objects that are configured for auditing. The log is a record of additions, deletions, and changes for audited objects.

The records for an instance of an audited object remain in the global audit trail, even after you delete the instance. In addition, the system keeps a record of the individual who deleted the instance.
You need the Audit Trail - View - All access right to view the global audit trail.
> [!note]
> For more information about setting up an audit trail, see the following topic in the English edition of the documentation:
> 1. Switch to the English documentation. 2. Expand the Reference section. 3. Log in to view all content. 4. Navigate to Classic PPM Studio Development, Classic PPM Studio Objects and Attributes, Audit an Object.
> Follow these steps:
> 1. Open Administration, and from Data Administration, click Audit Trail. 2. Search for the object instance that you want to view. You can use any or all of the following parameters (and wildcard
> characters) as search criteria: - Object: Specifies the object for which audit trail information is requested. For example, Task or Project. Only the
> objects that are configured for auditing appear in the selection list.

> [!note]
> We recommend that you select a value for this field to limit the number of objects that are searched and to make your search faster. - Object ID: Specifies the object ID of the specific instance of the object. For example, a specific project ID or task ID. - Object Name: Specifies the name of the specific instance of the object. For example, the name of a specific project or a task. - Changed by: Specifies the name of the user who created the records. - Date range: Specifies a time period for the records you want to view. To select the start and finish dates for the date range, click the Date icon. - Operation: Specifies the action that was performed on an object. Values: Insert, Update, Delete, or All. 3. Click Filter to view the audit records.

## Related
- [[_MOC Administration]]

%%Source: p3221-3222%%



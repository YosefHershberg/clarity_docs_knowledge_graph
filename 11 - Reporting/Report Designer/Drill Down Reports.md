---
title: Working with Drill Down Reports
tags:
  - howto
aliases:
  - Drill Down
---

# Working with Drill Down Reports

**Drill-down Reports** allow you to right-click on a widget dimension and pass the dimension filter to another report. The drill-down icon displays next to the widget title when a drill-down report is configured on that widget.

When you select a drill-down report, the cursor focuses on the dimension, passing its value to filter the widgets in the linked report. You can configure up to three drill-down reports per widget.

## Constraints and Behavior

- Interactive filtering is only available when the report **Layout Format** is set to **Responsive**.
- Interactive filtering is disabled for Bar/Column widgets where the **Periods** toggle is enabled.
- You can only initiate filtering on one dimension value per tab (e.g., one slice or one bar).
- You can have more than one active interactive filter on a report, but only one per tab.
- To initiate filtering on another dimension, you must first reset or unselect the current selection for that tab.
- The interactive filter dimension selection under each tab is preserved when navigating between tabs.
- You can only perform interactive filtering when viewing a published report from the **Report Viewer** or from the **Report Designer** in **Preview** mode.

> [!warning]
> In Clarity's Report Designer, you can use the **Group Others** option in charts to combine smaller segments into an "Others" category.
>
> However, when you create drill-down reports for the "Others" category and set the dimension to an OBS attribute, Clarity will not display any data.
>
> This is a known issue and will be addressed in upcoming releases.

## Steps to Configure Drill-Down Reports

1. Log in to Clarity, click **Reporting**, and click **Report Designer**.
2. Click the report you want to add drill-down reports to, then click **Edit**.
3. Select the widget you want to associate with a drill-down report and choose **Add drill-down report** from the toolbar.
4. Enter the name of the report and click **Create**.
5. Add the relevant widgets to the canvas and configure them. See [[Creating Your First Report]] for guidance.
6. Finalize and preview the drill-down report.
7. Use the breadcrumb to navigate back to the parent report and click **Publish**. This also publishes the drill-down report.

> [!note]
> After the report is published, a drill-down icon appears on all widgets that support drill-down. Right-click a dimension and select the relevant drill-down report to access it.

## Additional Constraints

- You can navigate to the top-level report using the breadcrumb link.
- Dimensions cannot be configured on **Number Tile** or **Progress Ring** widgets ג€” the drill-down passes widget filters to the linked report instead.
- You must select data providers for the drill-down report.
- Publishing a top-level report also publishes its drill-down report(s).
- If the widget dimension from the top-level report is present in the drill-down report's data provider, it will be filtered in the drill-down report.
- You can define up to **three drill-down reports** per widget.
- You can only drill down **one level**.

## Related

- [[Widgets]]
- [[_MOC Reporting]]

%%Source: p1758%%


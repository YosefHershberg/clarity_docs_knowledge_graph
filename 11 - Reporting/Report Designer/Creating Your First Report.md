---
title: Creating Your First Report
tags:
  - howto
aliases:
  - First Report
canonical: true
audience: pm, admin
domain: reporting
---

# Report Designer: Creating Your First Report

Creating a report begins with naming it, selecting the layout format, and choosing a Data Provider. You then enter the report design interface, where you can add multiple tabs, widgets, filters, and formatting options to build a comprehensive report.

## Topics Covered

- [[#Creating a Report]]
- [[#Selecting a Data Provider]]
- [[#Tab Settings]]
- [[#Configuring the Report Canvas]]
- [[#Adding Widgets]]
- [[#Configuring Widgets Using the Toolbar]]
- [[#Setting Up Attribute Groups]]
- [[#Configuring Filters]]
- [[#Adding Additional Data Providers]]
- [[#Previewing and Publishing]]

---

## Creating a Report

1. Log in to Clarity and navigate to the **Reporting** section from the main navigation pane.
2. Click **Report Designer**.
3. Click the **New Report** button. The **New Report** modal appears.
4. Provide basic details:
   - **Name:** Enter a unique, descriptive name.
   - **Description** *(optional)*: Explain the report's purpose or key metrics.
   - **Layout Format:** Select one of the following:

| Layout | Description |
|--------|-------------|
| **Responsive** *(default)* | Dynamically adjusts for various screen sizes. Does not support export or scheduling. Offers Maximum Width options: HD Display (1920px), Laptop (1440px), Tablet (1024px). |
| **Fixed** | Static layout with precise content placement. Supports export to PDF/PPTX. Options: Size (Letter, Legal, A4) and Orientation (Landscape, Portrait). |
| **Data Extraction (CSV)** | Single-pane layout with a table widget optimized for CSV export. |

5. Click **Create** to proceed.

> [!NOTE]
> - Report Scheduling and Export to PPTX are only supported for **Fixed** layouts.
> - When **Fixed** layout is selected, the "Fit-to-width" option is applied automatically.

---

## Selecting a Data Provider

Data Providers act as the foundational data sources for reporting. They aggregate data from Clarity's Data Warehouse and transform it into a secure, customizable format.

1. After creating the report, the **Select Data Provider** dialog opens.
2. Search or browse the available data providers.
3. Select the desired data provider by clicking the checkbox next to its name.
4. Click **Save**. You are directed to the default **Untitled** tab in the report canvas.

> [!NOTE]
> Report designers cannot use system data providers directly. They must copy a system data provider and create a custom version first.

---

## Tab Settings

In the report canvas, the default **Untitled** tab is visible. Hover over the tab and click the menu icon to access the following options:

- **Rename:** Change the name of the tab.
- **Copy:** Create a duplicate of the tab.
- **Delete:** Remove the tab from the report.
- **Tab Settings:** Opens the Tab Settings panel to select the **Report Type**:
  - **Summary** *(default)*: Standard report controls with a scrollable layout.
  - **Attribute Based**: Paginated report where each page's data is determined by added attributes. Required when using Attribute Groups.

> [!NOTE]
> When changing the report type or data provider in an existing tab, a confirmation message warns that all existing Attribute Containers will be deleted. Click **Confirm** to proceed.

---

## Configuring the Report Canvas

The report canvas includes the following tools:

- **+ Add Widgets** — Add visual components to the canvas.
- **Filters** — Define report-level filters.
- **+ Data Provider** — Add additional data sources.
- **Layout** — Control report structure and presentation.

---

## Adding Widgets

Widgets are the primary visual building blocks of a report.

1. Click **+ Add Widgets** to open the Widgets panel.
2. Choose from the following widget categories:

| Category | Options |
|----------|---------|
| **Charts** | Pie, Bar, Donut, Number Tile, Progress Ring |
| **Tables** | Detailed data rows and attributes |
| **Text, Line, Link, Image** | Personalize and add context to reports |
| **Attribute Group** | Interactive filter container that affects other widgets on the same tab |

3. Click the desired widget type to add it to the report canvas.

---

## Configuring Widgets Using the Toolbar

Each widget must be configured to define how it aggregates and presents data.

1. Click a widget to expose the toolbar.
2. Use the following toolbar options:

| Option | Description |
|--------|-------------|
| **Configure** | Opens the properties panel (data provider, dimensions, metrics, display settings) |
| **Add Columns** *(Table only)* | Add specific columns from the data provider |
| **Copy** | Duplicate the widget within the same report |
| **Delete** | Remove the widget from the canvas |

---

## Setting Up Attribute Groups

Attribute Groups organize related attributes into logical sets and filter the contents of other widgets on the same tab based on selected values.

### Configure the Data Provider

1. After adding the Attribute Container, click **Tab Settings**.
2. In the Tab Settings panel, select **Attribute Based** as the Report Type.
3. Choose the appropriate data provider from the **Data Provider** dropdown.

> [!NOTE]
> If you change the data provider, all existing Attribute Containers will be deleted. Click **Confirm** to proceed.

### Configure the Attribute Group

1. Hover over the top-middle border of the attribute container and click the **Configure** icon.
2. In the **Attribute Container Properties** panel, enter a **Title**.
3. Click **+ Add Attributes** and choose the attributes to include. You can resize and rearrange them.
4. Click **+ Add Metrics** to add numeric attributes without impacting grouping and filtering.

### Configure Attribute Widgets Within the Group

1. Hover over an attribute widget inside the container and click the **Configure** icon.
2. Use the **Label Position** dropdown to set the label position (e.g., **Top** or **Left**).

### Interactivity

Once configured, the Attribute Group filters and groups the contents of other widgets on the same tab based on selected attribute values. As you interact with the container (e.g., selecting a Manager), other widgets dynamically update.

> [!NOTE]
> Use **Add Metrics** to add numeric attributes to an Attribute Group without affecting its grouping and filtering behavior. Numeric attributes can be renamed and configured with an operation (Maximum, Minimum, Average, etc.).

---

## Configuring Filters

Filters enable you to focus on relevant subsets of data within a report.

1. Click **Filters** to open the Filters panel on the right side of the screen.
2. Set filters at different levels:
   - **Report-Level Filters:** Apply to the entire report across all widgets.
   - **Tab-Level Filters:** Apply to all widgets on a specific tab.
   - **Widget-Level Filters:** Apply to an individual widget.
3. Define filter logic (**All** or **Any**) based on how strictly the data should meet conditions.

See [[Filters]] for detailed steps and precedence rules.

---

## Adding Additional Data Providers

You can add Data Providers at the widget level when different widgets require distinct data sets.

1. If your report requires more than one data source, click **+ Data Provider**.
2. In the Data Providers panel, click **Select Data Provider**.
3. Search for and select additional data providers, then click **Save**.

---

## Previewing and Publishing

1. Preview the report to ensure all widgets, filters, and layouts are correctly configured.
2. Make any necessary adjustments.
3. When satisfied, click **Publish**.
4. Confirm the publish action. The report status updates to **Published** and appears in the **Available Reports** tab.

---

## Related

- [[Getting Started]]
- [[Widgets]]
- [[_MOC Reporting]]

%%Source: p1721-1730%%

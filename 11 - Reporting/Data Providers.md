---
title: Working with Data Providers
tags:
  - howto
  - concept
aliases:
  - Data Sources
  - Data Provider
canonical: true
audience: pm, admin
domain: reporting
---

# Working with Data Providers

## Overview

Data Providers are the foundational data sources that power reports and widgets in Clarity's Reporting workspace. They define what data is available for reporting by querying Clarity's Data Warehouse, transforming it into a customizable, secure format that report creators can use without writing SQL queries. Each Data Provider is built from Data Warehouse (DWH) objects, defines relationships between objects through joins, applies pre-filters, and manages data access through security settings.

> [!tip]
> Data Providers can support Per-Period Metrics (TSV) updated through Timeslicing jobs, enabling near-real-time data updates without full Data Warehouse loads.

---

## Prerequisites

Before creating or using Data Providers, an administrator must complete the following setup:

### 1. Feature Toggle

The **Reporting > Data Providers** workspace is controlled by a Feature Toggle and is **disabled by default**. Enable it under **Administration > Feature Toggles > Reporting: Data Providers**.

### 2. Data Warehouse Setup

- Verify the Data Warehouse is installed and configured.
- Run the **Load Data Warehouse** job with a **Full Load** and confirm it completes successfully.
- Run the **Load Data Warehouse Access Rights** job to ensure user security is honored.
- Enable SQL curve data: navigate to **Administration > System Options > Data Warehouse Options** and select **Include Sql Curve Data**, then run a Full Load again.
- Enable instantaneous sync: select **Enable Instantaneous Sync** in the same settings.

### 3. Access Rights

Administrators assign the following rights based on role:

| Right | Description |
|-------|-------------|
| `Reporting - Data Providers - Navigate` | Access the Data Providers tile under Reporting |
| `Reporting - Data Providers - View - All` | View all Data Providers |
| `Reporting - Data Providers - Create` | Create new Data Providers |
| `Reporting - Data Providers - Edit - All` | Edit all Data Providers |
| `Reporting - Data Providers - Copy` | Copy Data Providers |
| `Reporting - Data Providers - Delete - All` | Delete all Data Providers |
| `Reporting - Query - Create` | Create new queries within Data Providers |
| `Reporting - Query - View - All` | View queries in the Queries tab |
| `Reporting - Query - Edit - All` | Edit existing queries |
| `Reporting - Query - Delete - All` | Delete queries |
| `Reporting - Query - Copy` | Duplicate queries |

> [!note]
> `Reporting - Data Providers - Navigate` does not include `Reporting - Data Providers - View - All`. Both rights may be needed.

---

## Types of Data Providers

| Type | Description |
|------|-------------|
| **OOTB (Stock) Data Providers** | Built-in, system-level providers shipped with Clarity. System-protected: cannot be edited or deleted. |
| **Custom Data Providers** | Created by users or copied from OOTB providers; can be fully configured for specific reporting needs. |

> [!note]
> OOTB Data Providers cannot be used directly in reports. Copy an OOTB provider first, then customize and publish the copy.

### Out-of-the-Box (OOTB) Data Providers

Clarity ships **23 OOTB Data Providers** as templates covering common reporting needs. Examples include:

- **Investments** — Investment data across all investment types
- **Projects** — Project-specific attributes and metrics
- **Resources** — Resource and staffing data
- **Financial Plans** — Cost plan and budget data
- **Timesheets** — Time entry and timesheet data
- **Posted Transactions** — Actual financial transactions posted across investments

These templates demonstrate configurations such as object selection, joins, and pre-filters. Copy and customize them to meet specific requirements.

---

## Use Case: Creating a Customized Data Provider for Investments

**Scenario:** A Project Manager needs an executive report consolidating active investments (Projects, Ideas, Status Reports), highlighting Cost Type, Investment Type, and Investment Manager — filtered to Capital cost type only, with security limiting access to authorized users.

**Solution:** Copy the OOTB "Investments" Data Provider and customize it.

### Step-by-Step Guide

1. **Access the Reporting Workspace**
   - Log in to Clarity and navigate to **Reporting** from the left menu.
   - Select **Data Providers** to open the Data Providers grid.

2. **Copy the OOTB "Investments" Data Provider**
   - Locate **Investments** in the grid.
   - Select the checkbox and click **Copy Data Provider**.
   - A copy is created as "Copy of Investments."

3. **Edit the Copied Data Provider**
   - Open the copy. Navigate to the **Details** tab.
   - Update **Name** to "Customized Investment Data Provider."
   - Update **Description** to describe its purpose. Click **Save**.

4. **Select Objects (Objects Tab)**
   - Verify that Investment, Project, Idea, and Status Report objects are in the Selected section.
   - For **Investment**: select Cost Type, Investment Manager, Investment ID, Investment Type.
   - For **Project** and **Idea**: select relevant attributes.
   - Move selected attributes to the Selected Objects section.

   > [!tip]
   > Selecting only the necessary attributes improves performance by reducing data volume.

5. **Define Joins (Joins Tab)**
   - Review auto-generated joins (system creates joins for common keys, e.g., Investment to Project).
   - Add additional joins if needed: click **+ Add Join**, specify Left Object, Right Object, Join Condition, and Join Type (Inner, Left, etc.).

6. **Apply Pre-Filters (Pre-Filters Tab)**
   - Default filters typically include: Active Investments = Yes, Template = 0.
   - Click **Add Filter Group** and add: **Cost Type = "Capital"**.
   - Ensure logical grouping (AND/OR) is correct. Click **Save**.

7. **Configure Security (Security Tab)**
   - Toggle on **Secure this Data Provider**.
   - Select **Investment** as the Master Object to enforce object-level security.

8. **Validate in Preview (Preview Tab)**
   - Use the Column Picker to add Cost Type, Investment ID, Investment Type, Investment Manager.
   - Set **Show Data** to **Partial** (100 rows) or **Full**.
   - Click **View Query** to review the generated SQL.
   - Confirm the data matches expectations.

9. **Publish the Data Provider**
   - Click **Publish**. Status changes to **Published**.
   - The Data Provider is now available for report creation.

> [!note]
> Once published, a Data Provider cannot be edited without switching to Edit Mode.

---

## Creating a Data Provider (From Scratch)

1. Log in to Clarity and navigate to **Reporting > Data Providers**.
2. Click **New Data Provider**. Enter a unique **Name** and optional **Description**.
3. Optionally, select **Include Queries** to add custom SQL query objects. When selected, the **Queries** tab appears.
4. Click **Create** to save and open the full configuration screen.

### Tab-by-Tab Configuration

#### Details Tab
- Update Name and Description.
- Enable or disable **Include Queries** (toggling off hides the Queries tab but does not delete existing queries).

#### Queries Tab *(appears when Include Queries is enabled)*
1. Click **New Query**. Enter a name and description. Click **Create**.
2. In the query editor, use the **Data Warehouse Schema panel** (left side) to browse Tables, Views, and Functions.
3. Write the SQL query using DWH schema objects. Queries can only access DWH objects — transactional database objects are not accessible.
4. Click **Validate** to validate the query.
   - If valid: proceed to the **Attributes** tab to inspect Data Type, Key, Label, and Tooltip.
   - If invalid: a database error message appears. Fix the query and re-validate.
5. Mark **Key Attribute** for attributes used in joins with other objects.
6. Queries can be used independently in the Objects tab, without requiring regular objects.

> [!important]
> Only valid queries and their attributes appear in other tabs (Objects, Joins, Pre-Filters). Invalid query attributes are hidden.

#### Objects Tab
- Select DWH-enabled objects from the **Available** list and move them to **Selected**.
- Expand each object to select specific attributes.
- Data Provider supports OBS attributes (e.g., Department for project objects).
- To add a **Calculated Attribute**, click **+ Add calculated attribute** (see [[#Add Calculated Attributes]]).

#### Joins Tab
- Configure relationships between selected objects and queries.
- Fields: **Join Type** (Inner, Left, Right, Full), **Left Object**, **Left Attribute**, **Join Condition** (Equals), **Right Object**, **Right Attribute**.
- Use **+ Add Join** for additional joins.
- All query objects must be joined with regular objects.
- Key attributes defined in queries show the **Key** icon and are required for joining.

#### Pre-Filters Tab
- Create filter groups to limit the dataset before reporting.
- Specify **All** (AND) or **Any** (OR) conditions within each group.
- Query attributes are also available for pre-filtering.
- Filter list includes all available Query Attributes, not only selected ones.

#### Security Tab
- Toggle on security to restrict data access.
- Select a **Master Object** (Investment or Resource) for object-level security.
- Query data can only be secured when joined to Investment and/or Resource objects (Inner Join required).

> [!note]
> Data Warehouse security supports only Investment and Resource master objects. No field-level security is available.

#### Preview Tab
- Click **Show Data**: **Partial** (100 rows default) or **Full** (all rows).
- Use the **Column Panel** to select attributes for display. Columns respect the object order from the Objects tab; attributes are listed alphabetically, with per-period metrics at the bottom.
- Click **View Query** to see the generated SQL. Click **Copy Query** to copy it for external testing.
- Export preview data to CSV if needed.
- Grid supports **Wrap Text**, **Search**, and **Group By**.

#### Publishing
1. Review all tabs for accuracy.
2. Click **Publish**. Confirm when prompted.
3. Status changes to **Published**. The Data Provider is now available for reports.

---

## Add Calculated Attributes

Calculated attributes let you derive values not available as stock or custom attributes. They are defined at the Data Provider level and scoped to that Data Provider and its reports.

### Before You Begin
- Data Provider must be in **Edit mode**.
- Must include at least one regular object (not query-only).
- No additional access rights are required beyond Data Provider edit rights.

### Steps to Create a Calculated Attribute

1. Go to **Reporting > Data Providers**. Open the Data Provider and click **Edit**.
2. Click the **Objects** tab.
3. Click **+ Add calculated attribute**.
4. In the dialog, complete:
   - **Title**: Name for the calculated attribute.
   - **Type**: **Dimension** or **Metric**.
   - **Expression**: Build the calculation logic.
5. Build the expression:
   - Type `=` to view supported operations.
   - Type `#` to view available attributes (grouped by object).
   - Per-period metrics are unavailable when Type is Dimension.
   - Click the arrow icon next to an operation to view its syntax.
6. Click **Validate** to validate the expression.
7. Click **Create** to save.

> [!important]
> Closing the dialog without clicking **Create** does not save the calculated attribute.

### Per-Period Metric Rules
- Cannot combine OOTB and custom per-period metrics in the same expression.
- **Sum**: supports more than one per-period metric.
- **Subtract**: supports exactly two per-period metrics.
- **Multiply / Divide**: one per-period metric only; second operand must be numeric.

### Date Operations
- Type `=` to select `Now()` for date operations.
- `DateAdd`: adds/subtracts a number of units from a date.
- `DateDiff`: returns the numeric difference between two date attributes in the specified unit.

### Where Calculated Attributes Appear
- **Objects tab**: under **Calculated Dimensions** or **Calculated Metrics**.
- **Pre-Filters tab**: available for filtering, grouped accordingly.
- **Preview tab**: available in filters and the column panel.

### Where Calculated Attributes Do Not Apply
- Not available in the **Joins** tab.
- Not available in the **Security** tab.

---

## Managing Data Providers

### Testing — Preview Tab

1. Open the Data Provider and go to the **Preview** tab.
2. Use the **Column Panel** to select attributes.
3. Set **Show Data** to **Partial** (100 rows) or **Full**.
4. Use **Wrap Text**, **Search**, and **Export to CSV** for testing.

> [!note]
> Preview Tab configurations are for testing only and do not affect report output or user data.

### Troubleshooting — View Query

1. In the Preview tab, click **View Query** to see the generated SQL.
2. Review joins, filters, and selected attributes in the query.
3. Click **Copy Query** to copy the SQL to your clipboard for testing in a database tool.

> [!note]
> The generated SQL uses standard syntax — no special changes needed for compatibility.

### Editing Data Providers

1. Select the Data Provider in the grid.
2. Click **Edit** to enter Edit Mode.
   - Published Data Providers require switching to Edit Mode.
   - Draft Data Providers can be edited directly.
3. Make changes across the relevant tabs.
4. If missing attributes/objects are detected, a **Missing Data** popup appears. Click **Remove** to delete missing items, or **Close** to exit without changes.
5. Click **Exit** to save and exit Edit Mode, or **Discard Edits** to cancel.
6. Click **Publish** to publish the updated configuration.

### Copying Data Providers

1. Select the Data Provider in the grid. Click **Copy** (or right-click > **Copy Action**).
2. In the Copy Modal, enter a new name. Click **Copy**.
3. A confirmation message appears. The copy is created with **Draft** status.

> [!note]
> For published Data Providers with unpublished edits ("Has Edits" tag), unpublished edits are **not** copied to the new copy. Valid queries are copied with Valid status, including labels and tooltips.

### Deleting Data Providers

1. Select the Data Provider in the grid. Click **Delete** (or right-click > **Delete Row**).
2. Confirm in the popup.

> [!warning]
> Data Providers currently in use within reports **cannot be deleted**.

### Inactivating Data Providers

1. In the Data Provider grid, uncheck the **Active** checkbox for the Data Provider.
2. The inactivated provider appears in italics in the grid.
3. Inactive Data Providers can still be accessed, copied, edited, or reactivated.

> [!note]
> If a Data Provider is inactivated, existing reports using it continue to function, but new reports cannot use it.

---

## Key Points to Remember

- **Per-Period Metric Limits**: Maximum 100 periods per attribute; maximum 900 cumulative periods/metrics across all attributes in the Preview tab.
- **Published Edits**: "Has Edits" tag appears on published Data Providers with unpublished changes. The Last Updated Date in the grid does not reflect these pending changes until published.
- **Instance Security**: Logged-in user's instance security rights are applied to Preview Tab results.
- **Linking / Drill-Downs**: Not supported within Data Providers.
- **Key Attributes**: Attributes labeled "Key" represent hidden internal ID values (e.g., Investment Key) — useful for developer testing.
- **Lookup Attributes**: Act as dual-purpose — as keys in query generation (using IDs) and as human-readable values in filters and Preview results. Grouped under Key Attributes.
- **OBS Attributes**: Currently hidden for all objects within a Data Provider. OBS-based security can still be applied.
- **Data Warehouse Dependency**: Only DWH-enabled objects and attributes (stock and custom) are available in Data Providers.
- **Joining Requirement**: All objects in a Data Provider must be joined for proper data retrieval.
- **Field-Level Security**: Not available in Data Providers.
- **Queries**: Cannot retrieve the logged-in user context or their language.
- **Calculated Attributes Note**: The key points section notes that users cannot create new calculated attributes — this refers to the limitation that they are scoped to the Data Provider where they are created (not shared globally).

---

## Support for Read-Only Database User

Clarity supports a dedicated read-only database user for executing Data Provider queries and NSQL queries, enforcing separation between read-only reporting and transactional operations.

- **Read-Only User**: Has SELECT-only privileges. Cannot perform INSERT, UPDATE, DELETE, or schema changes.
- **Validation Modal**: When a query is validated in **Administration > Queries** or **Reporting > Queries**, a "Validating query... Please wait" modal prevents navigation until validation completes.
- **Provisioning**: Administrators must provision the read-only user in each environment (development, test, production) with SELECT rights on the Clarity schema.
- **Error Handling**: If the read-only user is missing, locked, or lacks privileges, Clarity surfaces a clear error and logs diagnostic information. The system does not fall back silently to a more privileged account.

---

## Exporting Data Providers (Beta)

Data Providers can be exported as a ZIP archive for migration between Clarity environments.

- **Eligibility**: Only non-system, published Data Providers with a unique **Migration Key** can be exported.
- **Limit**: Up to 30 Data Providers per export operation.
- **Package**: ZIP file containing JSON representations and a manifest.
- **Import**: Supported via the Data Provider grid (**Actions > Import**). Imported providers are published immediately (creation only — not replace/merge). Requires identical Clarity versions between source and destination.
- **Limitations**: Query validation is not performed during import. Manual verification is recommended. Beta feature intended primarily for non-production use.

> [!note]
> Enable export/import under **Administration > Actions** workspace. Studio or Lookup definitions are excluded from the package and must be migrated separately.

---

## Related

- [[_MOC Reporting]]
- [[Working with Reports]]
- [[NSQL Queries]]
- [[_MOC Advanced Reporting]]

%%Source: p1684-1779%%

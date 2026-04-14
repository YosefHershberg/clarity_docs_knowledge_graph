---
title: Skills
tags:
  - admin
aliases:
  - Skills Management
canonical: true
audience: admin
domain: administration
---
# Skills

## Overview

Administrators can create, view, and manage a comprehensive skills inventory for resources, roles, and teams. This inventory helps align the right skills with the appropriate resources, facilitating better project staffing decisions and enhancing resource management.

This section contains the following topics:

- Verify Prerequisites
- Managing Records By Using the Grid Layout
- View Skills
- CSV Import for Skills (Beta)
- Introducing Support for Lookups and OBS
- Importing TSVs by Using CSV Files

## Verify Prerequisites

Before you begin using the feature, ensure that you have the following permissions:

- You need to have **Administration - Skills - Navigate** to access the Skills tile.

## Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:

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
- Details Panel
- Saved Views
- Filters

## View Skills

**Follow these steps:**

1. In the main menu, click Administration > Skills. The Skills page is displayed.
2. Review the Skills grid with columns for Name, ID, Description, Active Status, Last Updated By, and Starred.
3. Use the Search bar to find specific skills in the inventory.
4. Manage the skills inventory directly from the grid:
   - To add a new skill, click the + button on the left side.
   - To update an existing skill, click on the skill's Name to open and edit its details.
   - To delete a skill, select the checkbox next to the skill and click Delete.

### Automated Color Assignment for Skills Badges

The Clarity 16.2.3 release introduces an automated color assignment for Skills badges, enhancing the visual organization of skills data across the application.

A new **Resources: Automatically assign colors to Skills badge** feature toggle controls the display of the Skills MVL attribute in grids as colored badges or as a semi-colon separated list. This feature toggle is available in Clarity > Administration > Feature Toggles to enable or disable this functionality, with the default setting being Off.

## CSV Import for Skills (Beta)

Customers use Microsoft Excel to manipulate data before entering it into Clarity. You can now use the Generic CSV Import ability to import data into investments in Clarity.

Some key points to remember are:

- The CSV file's data must be correctly formatted. Ensure your CSV file includes all the mandatory fields associated with the Custom Master Object.
- Set the CSV Export format to Export/Import in the General tab of the Settings panel.
- You can import a maximum of 250 records.
- Clarity will not import Business rules on CSV import.
- The import action will fail if you have duplicate lookups in the CSV file.

The following data types are supported:

- Number
- Percentage
- Strings
- Dates (Fixed)
- Boolean
- Lookups - Static Dynamic (SVL/MVL)
- Money (Single currency Clarity System)
- TSV

### Export/Import Option

A new Export/Import option has been introduced in Clarity. When you are exporting a CSV in Clarity to import it back again, you need to select this option. Clarity will export the necessary header rows to allow you to import the CSV file into Clarity.

When you have to export or import CSV files with dynamic lookups:

- Clarity will only export records that are displayed on the grid.
- End-users can copy and paste lookup labels and IDs from other records to change dynamic lookup values.

> [!note]
> Some key points to remember about CSV Import:
> - Business Rules are not enforced during CSV Import.
> - Clarity does not compare the values in the CSV import file with the values on the Clarity server before importing them. Hence, the Last Updated Date and Last Updated By fields are updated for every imported record.
> - If you are auto-numbering IDs, leave the ID value blank in the CSV Import file to create a record — entering the value of the ID will update the record.
> - When using CSV Import, the user must use the same language/locale as the exported CSV file, or incorrect import results may occur.
> - The following data types are not supported: Rich Text/Long String, OBS, Picklist, Attachment, URL, Parameterized, and Static Dependent Lookups.
> - When you Import Updates to MVLs, it will overwrite the existing values.

**Follow these steps:**

1. Click Avatar, Settings, Generic, and select Export/Import.
2. Click any investment in Clarity.
3. Configure the grid with the attributes you want to be populated when you insert.
4. Filter the grid for records to use as a template for creating new records.
5. Select Actions and click Export to CSV.
6. Update the CSV file with the relevant information.
7. Click Import CSV and select the relevant CSV file.
8. Click Open to complete the import process.
9. You will get an Import Successful message.

## Introducing Support for Lookups and OBS

When you export a CSV file from a workspace that includes OBS data associated with an entity, Clarity will not include the forward slash in the CSV export. However, the CSV Import will support the OBS value with or without the forward slash. Enter the full path of the OBS value in your CSV Import file.

The Lookup ID format has been enhanced to support curly braces instead of parentheses. You will now need to enter `Berks, Paul {pberks}` instead of `Berks, Paul (pberks)` while adding lookup values to the CSV Import file.

> [!note]
> Some key points to remember about Lookup and OBS support:
> - You can now enter the lookup label value for dynamic lookups in the CSV Import file. In previous versions, you had to enter both the lookup label value and the associated lookup ID. You can continue to use the lookup ID format in case there are duplicate label names. In summary, the following formats are now supported:
>   - Lookup Label Value
>   - Lookup Label Value {lookup ID}
> - On investments, the "Default Resource OBS Unit" is technically a dynamic lookup, but it is displayed like an OBS. If you Export to CSV and then Import from CSV, the import from this attribute will fail. Users will need to remove path information to only show the base label.

## Importing TSVs by Using CSV Files

Clarity now enables customers to add Time Scaled Values (TSVs) into CSV files and import them into Clarity. You can navigate to the Custom Objects grid and click Export to CSV to download the CSV file. The file includes three-row headers that allow customers to input TSV information:

- First Row — TSV period name
- Second Row — TSV API attribute name
- Third Row — TSV attribute name

When you upload the CSV file, Clarity uses the first row to determine the period (week/month/quarter/years) and then processes the period value. The CSV import is based on the language and locale of the end users.

> [!note]
> Some key points to remember about TSV CSV Import:
> - TSV Number, Money, and Percentage data types are supported for the CSV import capability.
> - TSV Total values are not supported in CSV Import and are ignored during import.
> - If Clarity detects duplicate Fiscal Period Names on the default entity, it will abort the CSV Import. You must fix the duplicate period names to use CSV Import capability.
> - TSV Money attributes only support single currency Clarity instances.
> - Clarity will use the system currency defined in Financial Management while processing TSV Money attributes during the CSV Import.
> - You do not need to provide contiguous values in the TSV Import file.
> - Clarity allows users to specify TSV Period labels in the language specified in a user's language setting. Clarity uses the translation specified in the Entity Fiscal Time Periods to match the user's language to the translation.
> - You cannot update any attributes using the "Active Currencies" lookup definition via CSV import.
> - CSV Import Files does not support TSVs with different period types within the same file.
> - Custom master objects only support calendar TSV, but Clarity leverages the fiscal TSV configuration from the default entity when using CSV Import for TSVs.
> - Business Rules on custom master objects are not enforced during CSV Import.

## Related
- [[_MOC Administration]]

%%Source: p1926-1931%%

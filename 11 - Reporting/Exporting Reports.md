---
title: Exporting Reports and Data Providers (Beta)
tags:
  - howto
aliases:
  - Export Data
canonical: true
audience: pm, admin
domain: reporting
---

# Exporting Reports and Data Providers

You can export reports and data providers from their associated grids, allowing users to share, migrate, or back up reporting assets more efficiently. A unique migration key can be specified for every report or data provider that you export.

When Clarity encounters the same migration key while importing on the target server, it replaces the existing report or data provider. Otherwise, it creates a new one.

## Key Capabilities

- **Eligibility and Scope:** Only non-system, published reports and data providers with a unique migration key are exportable. The export supports up to 10 reports at a time and automatically includes drill-down or sub-reports.
- **Export Package:** Reports are packaged as JSON files in a ZIP archive, along with a manifest. The manifest includes names of reports, data providers, and images. Administrators can use it to verify report content before importing.
- **Custom Images:** You can export and import custom images added to reports using the Image widget. The report import file can be up to 50 MB, configured via the **Maximum reporting package import file size** setting.
- **Replace on Import:** If the Migration Key matches items on the target server, Clarity replaces existing reports and data providers. If no match is found, new items are created.
- **Import Workflow:** Reports are imported as Drafts, while linked Data Providers are imported as Published. The Import wizard includes a **Publish report after import** option.
- **Error Reporting:** If Clarity encounters an issue during import, it generates a CSV error file that you can download and review.
- **Export Queries and Metadata:** The migration package includes data provider query attribute metadata — attribute labels, tooltips, and associated lookups.

## Steps to Export and Import

1. Log in to Clarity and ensure that the **Export** and **Import** actions for **Report** and **Data Provider** are enabled in the **Actions** workspace (**Administration > Actions**).
2. Click **Reporting** to navigate to the Reporting workspace, then click **Data Providers** or **Report Designer**.
3. Identify the asset to export and ensure it has a value in the **Migration Key** attribute.
4. Click **Export**. For reports, choose from:
   - **Report Design Only**
   - **Report Design and Data Provider**
5. Click **Notifications** and download the package.
6. Navigate to the target service and open the **Data Provider** or **Report Designer** workspace.
7. Click **Actions > Import** to import the asset.

> [!NOTE]
> **Key points to remember:**
>
> - A maximum of 10 reports can be exported at a time, with or without their data providers.
> - Export packages exclude Studio or Lookup definitions — migrate these before importing.
> - Editing the ZIP file is not supported; the import action may fail if you do.
> - Existing report schedules do not need to be cancelled if the report or data provider is replaced during import.
> - If you export a report with associated data providers, ensure the data providers have a migration key.
> - When importing to replace an existing report, verify the following to avoid import errors:
>   - Both the report and data provider **Status** must be **Published**.
>   - You do not have any unsaved edits in the published report.
>   - Upcoming report schedules will not be impacted, assuming the import has not changed the schedule filters.
>   - If the import deletes or modifies report filters that are used by a schedule, a warning will appear when accessing the schedule filters.
> - When an SQLQuery exceeds 50 attributes, the import to the target system fails. This is a known issue to be fixed in an upcoming release.

## Related

- [[_MOC Reporting]]

%%Source: p1702-1703%%

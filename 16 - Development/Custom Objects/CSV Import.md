---
title: CSV Import for Custom Master Objects (Beta)
tags:
  - dev
  - howto
aliases:
  - Custom Object Import
canonical: true
audience: dev
domain: development
---
# CSV Import for Custom Master Objects (Beta)

## Overview

Customers often use Microsoft Excel to manipulate data before entering it into Clarity. The **Generic CSV Import** capability allows importing data into investments in Clarity directly from a CSV file.

> [!NOTE]
> - This feature uses a **Generative AI service**. AI-generated output may be inaccurate and is not designed for regulatory, legal, or compliance obligations. Always review AI-generated content for accuracy.
> - This feature is **toggled off** by default — create a support ticket to enable it in your environment.
> - Users need a Google Cloud Platform or OpenAI service account with appropriate permissions.
> - If the AI API key is not configured correctly, an error message appears on screen.
> - If the configuration under "Vaia (Beta)" is disabled, users see: `API 1019: Could not process the request due to internal error.`

---

## Key Rules and Limitations

- The CSV file's data must be correctly formatted and include all mandatory fields for the Custom Master Object.
- Set the **CSV Export format** to **Export/Import** in the **General** tab of the **Settings** panel.
- Maximum import: **250 records**.
- Business rules are **not** enforced during CSV import.
- Import fails if the CSV file contains duplicate lookups.

**Supported data types:**
- Number, Percentage, Strings, Dates (Fixed), Boolean
- Lookups — Static Dynamic (SVL/MVL)
- Money (Single currency Clarity System)
- TSV (Time Scaled Values)

**Unsupported data types:**
- Rich Text/Long String, OBS, Picklist, Attachment, URL, Parameterized, and Static Dependent Lookups.

---

## How to Import a CSV File

**Follow these steps:**
1. Click **Avatar > Settings > Generic** and select **Export/Import**.
2. Click any investment in Clarity.
3. Configure the grid with the attributes you want to populate.
4. Filter the grid for records to use as a template.
5. Select **Actions** and click **Export to CSV**.
6. Update the CSV file with the relevant information.
7. Click **Import CSV** and select the relevant CSV file.
8. Click **Open** to complete the import process.
9. You will see an **Import Successful** message.

> [!NOTE]
> - Business Rules are not enforced during CSV Import.
> - Clarity does not compare CSV values with server values before importing — the **Last Updated Date** and **Last Updated By** fields are updated for every imported record.
> - For auto-numbered IDs, leave the ID value blank to create a record — entering an existing ID will update that record instead.
> - Use the same language/locale as the exported CSV file, or incorrect import results may occur.
> - When importing updates to MVLs, existing values are overwritten.

---

## Lookups and OBS Support

- **OBS values:** Enter the full OBS path in the CSV Import file. CSV Import supports OBS values with or without a forward slash (the export omits the forward slash).
- **Lookup ID format:** Use curly braces instead of parentheses — e.g., `Berks, Paul {pberks}` instead of `Berks, Paul (pberks)`.

**Supported lookup formats:**
- Lookup Label Value
- `Lookup Label Value {lookup ID}`

> [!NOTE]
> On investments, the "Default Resource OBS Unit" is technically a dynamic lookup but displayed like an OBS. If you export and then reimport from CSV, remove path information to only show the base label.

---

## Importing Time Scaled Values (TSVs) via CSV

Clarity enables customers to add **Time Scaled Values (TSVs)** into CSV files for import. The CSV file includes three header rows:

- **Row 1** — TSV period name
- **Row 2** — TSV API attribute name
- **Row 3** — TSV attribute name

Clarity uses Row 1 to determine the period (week/month/quarter/year) and processes the period value. Import is based on the language and locale of the end user.

> [!NOTE]
> - Supported TSV types: **Number**, **Money**, and **Percentage**.
> - TSV Total values are **not** supported and are ignored during import.
> - Duplicate Fiscal Period Names on the default entity will abort the CSV Import — fix duplicates first.
> - TSV Money attributes only supported in **single currency** Clarity instances.
> - Clarity uses the system currency from Financial Management when processing TSV Money attributes.
> - Contiguous values are not required — you can provide non-contiguous TSV values.
> - Clarity allows TSV Period labels in the user's language setting (matched via Entity Fiscal Time Periods translations).
> - You **cannot** update attributes using the "Active Currencies" lookup definition via CSV import.
> - CSV Import Files do **not** support TSVs with different period types within the same file.
> - Custom master objects support calendar TSV only, but Clarity leverages fiscal TSV configuration from the default entity.
> - Business Rules on custom master objects are **not** enforced during CSV Import.

---

## Related
- [[Viewing and Managing]]
- [[_MOC Development]]

%%Source: p1661-1664%%

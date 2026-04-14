---
title: Accessibility Features in Clarity
tags:
  - reference
aliases:
  - Accessibility
canonical: true
audience: admin
domain: reference
---
# Accessibility Features in Clarity

## Customer-Reported Defect Resolution Policy

Broadcom validates patches with the following scope:

- Verification of the specific fix resolved in the patch
- Regression and integration test coverage limited to the impacted product areas

Broadcom does not perform full regression and performance tests on each patch.
Patches are cumulative; however, if there is enough content to warrant full regression and performance testing, or if a specific defect warrants special testing, additional testing will be conducted.
Any patch that has been performance and regression tested will be noted in the patch README.

> [!WARNING]
> Customers should not apply software patches directly to production systems without first verifying them in a test environment that represents their production system in terms of configuration and data volumes.

### Third-Party Product Defects

For products like Microsoft Project (MSP), Broadcom performs high-level tests on newly released updates approximately monthly.
If a defect in an MSP update impacts the integration and does not deliver a quality experience, that update level will not be recommended or supported.
An updated list of supported MSP updates is maintained on the Broadcom Support website.

For Jaspersoft, a quarterly patch cadence is generally planned.

### Service Level Objective for Delivery of Customer Reported Defects

Defects fixed as part of a patch will also be included in the next available upcoming release or service pack. Delivery method varies by severity:

- **S1:** patch
- **S2:** patch or product release
- **S3:** future product release or closed
- **S4:** possible future product release or closed

## Accessibility Overview

Broadcom is committed to ensuring all customers can successfully use its products. Classic PPM provides standard user assistance features and selectively inherits accessibility features of the OS, browser, and device in use.

When screen reader and text magnification software is used with the Mozilla Firefox browser, the Classic PPM user interface in Release 15.5.1 and higher is generally considered compliant with the majority of the Clarity VPAT guidelines for Section 508 compliance.

> [!NOTE]
> The Microsoft Edge browser is not recommended for use with third-party assistance technologies such as ZoomText and JAWS due to known compatibility issues.

## Accessibility Features in Clarity

The Clarity product team is committed to ensuring support for the **WCAG 2.1 AA** standard. From release 15.9.1, accessibility enhancements are released incrementally. The table below summarizes the areas addressed:

| What is it about? | Who is it for? | What's the change? |
|---|---|---|
| Visual design | Users with color blindness | Color contrast and visible focus |
| Responsive design | Users with limited vision or partial blindness | Popup windows, text areas, and browser zoom |
| Keyboard navigation | Users with mobility impairments | Key input, tab order, focus |
| Screen reader support | Users with partial or complete blindness | Semantics, hierarchy, page structure |

> [!IMPORTANT]
> To learn more about Clarity accessibility compliance, download the **VPAT Report for Clarity**, which indicates conformance with:
> - Section 508 — the main accessibility act for the US
> - WCAG 2.0, 2.1, and 2.2, levels A and AA success criteria
> - EN 301549 Standards — the European Standard for Digital Accessibility
> - European Accessibility Act (EAA) (Directive (EU) 2019/882)

## Getting Started with Accessibility in Clarity

### Supported Platforms

- **Operating System:** Windows
- **Browsers:** Chrome, Firefox, Edge
- **Screen Reader:** JAWS, NonVisual Desktop Access (NVDA)

> [!IMPORTANT]
> Clarity's grids contain significant functional density and do not incorporate semantic elements required for screen reader shortcuts.
> When using screen readers with **My Timesheet** or configurable grids, users should leverage Clarity's supported grid keyboard shortcuts.
> See Keyboard Shortcuts for Clarity Grid Navigation.

### Supported Accessibility Combinations

| Operating System | Browser | Screen Reader |
|---|---|---|
| Windows | Chrome, Firefox, and Edge | JAWS and NVDA |
| MacOS | Safari, Chrome | VoiceOver |

> [!NOTE]
> Screen reader support is limited to the combinations above. Visual and keyboard navigation requirements are also supported for both Mac and Windows users.

### Supported Components

The following components support all four aspects of accessibility — visual, responsive design, keyboard navigation, and screen reader support:

- Text Box
- Text Area
- Single-Value Lookup
- Multi-Value Lookup
- Check Box *
- Radio Group
- Date Picker
- Button
- File Attachment *
- Color Picker Component *
- Main Left Navigation Menu
- View Options
- Money and Number decimal display
- Per-Period Metrics (Periods, Start Period, End Period, Totals Columns)
- Saved Views
- Item Action Bar (multi-select grid) — Select All, Deselect All, Edit, Mark for Deletion, Clear Deletion
- Color Picker — Pick List Color
- Toast Message
- Generic Filter
- Layout Switch (Board, Grid, Timeline)
- Attachment (Grid)
- Search

> [!NOTE]
> * In limited instances, these components may not meet color contrast, keyboard, or screen reader accessibility. This limitation will be addressed in a future release.

## Color Consolidation and Mapping

Clarity is introducing a new color palette to improve the overall visual experience for all users including those with accessibility requirements. The following element types have been updated:

- Project banner and Documents tags
- Custom picklists
- Classic display
- Sequential colors

As part of the upgrade, previously selected colors are mapped to the new colors and automatically updated.

## Clarity 16.4.1: Accessibility and Usability Improvements

### Accessibility Enhancements

- **Accessibility Remediation:** This release addresses multiple issues reported by customers and findings from the May 2024 (Clarity 16.2.2) accessibility audit. Updates ensure compliance with various WCAG success criteria.
- **Increased Compliance for User Adoption:** Accessibility improvements drive adoption by meeting organizations' demands for compliance with accessibility standards.

## Accessibility Remediation Details — 16.4.1

| WCAG (Level) | Issue Description | Impact Area | Remediation |
|---|---|---|---|
| 1.3.1 (A) | Certain ARIA roles must contain children. | Timesheets (grid) | Role changed from 'list box' to 'presentation', which need not contain children. |
| 1.3.1 (A) | Text should not be marked as a heading. | Project Milestone Timeline | Corrected to enable screen reader to properly announce each milestone Name and Date as an element of a Group. |
| 1.3.1 (A) | Unnecessary table structure defined for the link. | Saved Views — Copy Link | Removed the unnecessary table structure which impedes accessibility for screen reader users. |
| 1.3.1 (A) | Empty table header defined in the table. | Manage Views | Updated to remove the empty table header to properly support screen reader announcement. |
| 1.3.1 (A) | 'To' combo box doesn't use associated label. | Grid — Conditional Formatting | Correct field name now announced by the screen reader when focus lands on the 'To' combo box. |
| 2.4.3 (A) | Keyboard navigation was not operating as expected within the column header hamburger menu. | Grid column menu options | Corrected so that keyboard navigation operates as expected within the column header hamburger menu. |
| 2.5.3 (A) | Visual text is not included for the 'Copy link' control programmatically. | Saved Views — Copy Link | Updated to include `aria-label="Copy link"` so screen reader labels match visible text. |
| 4.1.2 (A) | Elements must only use supported ARIA attributes. | Grid columns rows — check box | Corrected the row-level check box cell 'state' of checked or unchecked to ensure it is correctly announced by the screen reader. |
| 4.1.2 (A) | Role is not defined for the checkboxes e.g., 'Starred' in the table. | Grid columns rows — Starred | Corrected the row-level check box cell 'state' of starred or not starred to ensure it is correctly announced by the screen reader. |
| 4.1.2 (A) | Required ARIA attributes must be provided and conform to valid values. | Common Drop-down menu | Applied missing `aria-controls` attribute to support screen reader announcements across Investment, Roadmap, Reporting, Staffing, and Administration workspaces. |
| 4.1.2 (A) | Role is not defined for the 'Format' control. | Avatar — Settings | Corrected by replacing invalid ARIA attribute value `aria-posinset="0"` with valid value `aria-posinset="1"`. |
| 4.1.2 (A) | Incorrect name is defined for the expand/collapse button. | Grid — Conditional Formatting | Corrected so Format options (Bold, Italics, Underline, etc.) are properly announced by the screen reader. |
| 4.1.2 (A) | Expand/collapse button name incorrect. | Grid — Conditional Formatting | Screen reader now correctly announces 'Expand button' or 'Collapse button' based on button state. |
| 4.1.3 (AA) | Filters button does not convey its expanded/collapsed state to screen reader users. | — | — |
| 4.1.3 (AA) | Focus is lost when a user collapses the Actions dropdown. | — | — |
| 4.1.3 (AA) | The selected or pressed state of the 'Match Filters' All or Any toggle button is not conveyed to screen reader users. | — | — |

## Related
- [[_MOC Release Info]]

%%Source: various%%

---
title: Configure Earned Value Management
tags:
  - admin
aliases:
  - Earned Value Management
canonical: true
audience: admin
domain: administration
---

# Configure Earned Value Management

## Overview

The Earned Value Management (EVM) feature in Clarity Administration allows administrators to define the reporting periods used for earned value analysis. The earned value reporting period defines the frequency and interval for the **Update Earned Value History** job, which takes historical earned value snapshots of project performance and saves them in the earned value history table.

Navigate to **Administration > Earned Value Management > EV Reporting Periods** to manage these settings.

## How Earned Value Reporting Periods Work

When project managers use earned value methodologies to analyze project performance, the Update Earned Value History job uses the configured reporting period to take performance snapshots. The snapshot is saved based on the project's association to the period.

Project managers associate the following to defined reporting periods:

- **Projects**: The reporting period is the basis for historical earned value snapshots of project performance.
- **Contracts**: For more information, see the Earned Value Manager (EVM) Add-In.

Setting up reporting periods defines the time intervals (such as weekly or monthly) used to store and calculate historical earned value data.

> [!note]
> When tracking for compliance with ANSI/EIA-748-A earned value management requirements, the project manager must associate all projects and contracts to a reporting period. Some United States Federal regulations require contract performance reports recording performance to date and for the current period.

As a best practice, associate a project — comprising tasks and associated with a contract — to the same earned value reporting period as the contract.

## Create Earned Value Reporting Periods

Create the earned value reporting periods that project managers use for earned value analysis (EVA). Defining the reporting period also defines how often the report runs.

**Follow these steps:**

1. Open **Administration**, and from **Earned Value Management**, click **EV Reporting Periods**.
2. Click **New**.
3. Complete the following general fields:

   | Field | Description |
   |-------|-------------|
   | **Name** | Defines the reporting period name |
   | **ID** | Defines the unique identifier for the reporting period |
   | **Description** | Specifies the reporting period description |
   | **Active** | When selected, project managers can associate projects to this period. Default: Selected |

4. Select one of the following period types: **Weekly**, **Monthly**, **Quarterly**, or **Annually**.
5. Define the recurrence for the selected period type:

   - **Weekly Frequency**: Defines the weekly interval (range 1–52) and the day of the week on which the period starts. Default: Weekly on Sundays starting this Sunday.
   - **Monthly Frequency**: Defines the monthly interval on which the period starts. Set recurrence on a specific day (range 1–31) each month, or at monthly intervals (First, Second, Third, Fourth, or Last) on a specific day of the week. Default: Monthly starting on the first day of the month.
   - **Quarterly**: Defines the month when the first quarter starts. **Frequency** defines the quarterly interval. Default: Quarterly starting January 1.
   - **Annually**: Defines the month when the annual period starts. **Frequency** defines the annual interval. Default: Annually starting January 1.

6. Click **Save and Return**. The new reporting period is created and displayed in the list.

### Example: Weekly Frequency

For the reporting period recurrence to occur every week, enter **1** as the frequency. To set it for every other week, enter **2**. To set the recurrence to twice a year, enter **26**. For once a year, enter **52**.

## View a List of Earned Value Reporting Periods

View all earned value reporting periods on the Earned Value Reporting Periods list page.

**Follow these steps:**

Open **Administration**, and from **Earned Value Management**, click **EV Reporting Period**.

## Related Jobs

The following jobs interact with Earned Value Management configuration:

| Job | Description |
|-----|-------------|
| **Update Earned Value and Cost Totals** | Updates current earned value and cost totals for projects |
| **Update Earned Value Totals for Contracts** | Updates earned value totals for contract records |
| **Update Earned Value History for Contracts** | Captures historical earned value snapshots for contracts |

## Related

- [[_MOC Administration]]

%%Source: p3107-3108%%

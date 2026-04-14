---
title: Creating Queries for Transactional Schema (Beta)
tags:
  - admin
  - dev
aliases:
  - Queries Transactional Schema
canonical: true
audience: admin
domain: administration
---

# Creating Queries for Transactional Schema (Beta)

## Overview

Clarity includes a **Queries** capability in the Administration workspace. This feature allows administrators to create simple queries to view data within the Transactional Schema. It is intended for troubleshooting and data validation, not for replacing standard reports.

### Key Use Cases

- Quickly examine raw transactional data to identify discrepancies.
- Validate data reported in user issues.
- Use the **Customizations Overview** system query to compare customizations between environments.
- Extract specific data combinations not available in standard reports.
- Pull historical data for analysis in external tools (Excel, BI platforms).

### Capabilities

- Create, view, edit, copy, and delete user-defined queries in the Administration workspace.
- Search and explore tables and fields from the Transactional Schema using an intuitive **Schema Browser**.
- Validate query syntax with meaningful feedback before execution.
- Preview partial or complete result sets and export data to CSV format.
- Add language-specific labels for query attributes (translatable via the Language Translator).
- Apply string, number, and date filters; save personalized grid views per query, per user.
- Access the pre-built **Customizations Overview** system query to view all custom content and database objects.

## Access Rights

You must be assigned the **Administration - Queries - Navigate** access right to access the Queries workspace.

## Accessing the Queries Workspace

**Follow these steps:**

1. Click **Administration > Queries** to open the Queries workspace.
2. Click the **Customizations Overview** query to open it and view its details. It is modeled after the existing Jaspersoft report that provides a list of custom content created in a customer's environment. This helps administrators identify configuration elements to compare with other environments.

## Create a User-Defined Query

### Example Scenario

A Resource Manager wants to identify users who are not using the default Unit of Measure (UoM) general setting.

**Follow these steps:**

1. Click **New Query** and populate the **Query Name** and **Description** fields.
2. Navigate to the **Query** tab and use the Schema Browser to search Tables, Views, and Functions and build the relevant query.

> [!note]
> - The Clarity Query tool currently supports **String**, **Number**, and **Date** data types.
> - Queries are strictly **read-only** and must start with one of the following keywords (comments are allowed):
>   - `SELECT` statements
>   - `WITH` statements (Common Table Expressions)
>   - `VALUES` statements
>   - SQL comments (`/* */`)
> - The Queries feature accesses **only the Transactional Schema** (not the Data Warehouse). Binary fields, time-varying fields (BLOB), CLOB fields, calculated fields, and aggregated fields can be included but will not display data in the output unless accessed through Clarity-generated database views.
> - Use `/* Comments */` instead of `--` for comments. The `( /* */ )` syntax is recommended, especially at the beginning or end of a query, to ensure the query validator finds the query valid.

3. Click **Validate** to validate the query. After successful validation, Clarity creates a list of attributes.
4. Click **Attributes** and add associated labels to help other stakeholders associate meaning with the attribute. Labels are personalized for the specific user and the specific query. Other users must set up their own labels.

> [!warning]
> If you change the query and revalidate it, the labels and column layout will be reset for all users with a personalized configuration.

5. Click **Preview** to preview the query results. Click **Columns** to add relevant attributes to the grid. The layout is personalized per query per user. Use the filter capability to identify specific records.
6. Click **Export to CSV** to export your results and share them.

## Key Points to Remember

> [!important]
> - Grant security access only to targeted administrator users. This feature is **not** meant for typical users.
> - This feature is intended for troubleshooting and provides basic functionality for pulling data for further analysis or export to CSV.
> - **Quick Search**, **Group By**, and the ability to create and manage Saved Views are **not available**.
> - The Query Name and Description can be localized. Making Localization entries for Query Name and Description is visible to other users accessing the query in the associated language. Updating the name and description in English will **not** automatically update other languages.
> - Each user can enter personal attribute labels in their own language.
> - Making any changes in the Queries tab and revalidating will remove all personalizations for Attribute Labels and the Preview Layout for all users.
> - Clarity will **not** copy any personalizations when you copy a query.

## Best Practices

> [!tip]
> - Building queries can be an iterative process. Wait until you are satisfied the query will not change before adding personal labels.
> - If you have a working query with personal labels and want to alter it, use the **Copy** action first. This preserves the original personalized configuration.
> - Due to a single security access right for managing all queries, develop best practices among the few users granted access. Use **Copy** to do your own query analysis without affecting others' work.

## Sample Scenario: Identify Users Not Using the Default UoM

Derrick, a Resource Manager, wants to understand why team members see availability in different units (hours, FTE, percent). He needs to identify users who have changed their Unit of Measurement from the default setting.

Derrick can use the Queries module in Clarity to run a query that returns each user's personalized UoM value.

### PostgreSQL Query

```sql
WITH u AS (
  SELECT p.user_id,
    LOWER(TRIM(p.personalizations::json->>'units')) AS units
  FROM cmn_ui_personalizations p
  WHERE p.component = 'general'
)
SELECT p.user_id,
  r.unique_name AS resource_code,
  r.full_name,
  p.last_updated_date,
  CASE u.units
    WHEN 'pct' THEN '% Availability'
    WHEN 'hours' THEN 'Hours'
    WHEN 'fte' THEN 'FTE'
    WHEN 'days' THEN 'Days'
    ELSE u.units
  END AS units
FROM cmn_ui_personalizations p
JOIN srm_resources r ON r.user_id = p.user_id
JOIN u ON u.user_id = p.user_id
WHERE p.component = 'general'
  AND u.units IN ('hours', 'fte', 'days', 'pct');
```

### AI Consumption Tracking Query

Use the following query to track AI consumption in Clarity:

```sql
SELECT gh.OBJECT_CODE, gl.created_by, u.full_name, gh.ATTRIBUTE_CODE,
  gh.STATUS_CODE, gl.PROMPT_TOKEN_COUNT, gl.RESPONSE_TOKEN_COUNT,
  gl.project, gl.model, gl.integration_url, gl.created_date
FROM gen_content_history gh
JOIN gen_contents_logs gl ON gl.GEN_HISTORY_ID = gh.id
JOIN cmn_sec_users u ON u.id = gl.created_by
ORDER BY gl.created_date DESC
```

## Related

- [[_MOC Administration]]

%%Source: p1915-1921%%

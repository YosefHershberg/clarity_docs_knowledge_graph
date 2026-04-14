---
title: Configure Lookups
tags:
  - admin
aliases:
  - Lookups Configuration
canonical: true
audience: admin
domain: administration
---

# Configure Lookups

## Overview

A lookup is a list of values that you want other users to see in drop-down and multi-select lists. Create and configure lookups in custom fields, reports, queries, and in list or chart portlet filters.

For example, a custom field named **Document Status** can contain a drop-down with lookup values such as Draft, Review, or Approved. Auto-suggest displays a list of possible matching values when the user enters the first few characters in a static list, dynamic query, or parameterized lookup.

## Partitions and Lookups

Partitions help you create different views of a page for different users. The underlying structures are object attributes and lookup values.

- You cannot partition static dependent list or dynamic query lookup values.
- You can create static list lookups that contain partitioned values.

## Lookup Types

| Lookup Type | Description |
|---|---|
| **Static Lists** | A standard set of choices that appear as a drop-down list. |
| **Static Dependent Lists** | A hierarchy of lookups and values. Items in subsequent lists depend on a previously selected value. Example: User selects USA from a country list, then a list of states appears. |
| **Dynamic Queries** | Fetches data from the database in real-time using NSQL. Provides the most up-to-date values. |

> [!tip]
> You can nest a static lookup inside a dynamic query lookup. You cannot nest a static dependent list lookup inside a dynamic query lookup. Auto-suggest does not work with static dependent lists.

The following table describes how each type of lookup can be edited or deleted:

| Lookup Type | Edit | Delete |
|---|---|---|
| **System-restricted lookups** | You can only change the labels and layout. All stock dynamic query lookups are system-restricted. | No |
| **System lookups** | You can add and deactivate values. You cannot deactivate the default values provided with the application. | No |
| **User-defined lookups** | You can add and deactivate values. Use your own lookups to extend the stock lookups. | Yes |

## Create Static List Lookups

**Follow these steps:**

1. Click **Administration**, **Data Administration**, **Lookups**.
2. Click **New**.
3. Complete the following fields:
   - **Lookup Name**: Defines the unique name for the lookup.
   - **Lookup ID**: Defines the unique ID. Typically uppercase. Example: `LOOKUP_ACTION_STATUS`.
   - **Content Source**: Specifies the data source. Values: Customer, FM Stock Reports, CPIC Accelerator, PMO Accelerator, Clarity Stock Reports. Default: Customer.
4. In the **Source** field, select the type and specify sort order:
   - **Alphanumeric**: Displays items in alphanumeric order. You cannot reorder alphanumeric list lookups.
   - **Manual**: Allows you to determine and change the sort order. Default: Alphanumeric.
   - **Static Dependent Lists**: Select to create a hierarchy of lookups and values.
   - **Dynamic Query**: Select to fetch data from the database in real time.
5. Enter a **Description** for the lookup.
6. Save the changes. The parent window appears for the new list lookup.

### Create Static List Lookup Values

You can create and edit the values that appear in lookups. You can create any number of values for a lookup.

**Follow these steps:**

1. Open a static list lookup and click **Values**.
2. Click **New**.
3. Complete the following fields:
   - **Lookup Value Name**: Defines the name for the lookup value.
   - **ID (LOOKUP_CODE)**: Defines the ID. Can be a number or string.
   - **Partition**: Defines the partition. Default: System (if partitioning is not enabled).
   - **Partition Association Mode**: Defines the visibility level. Values: Partition, ancestors, and descendants / Partition and ancestors / Partition and descendants / Partition only. Default: Partition, ancestors, and descendants.
   - **Description**: Additional information about the lookup value.
   - **Active**: Whether the value is visible. Default: Selected.
4. Save your changes.

### Manually Reorder Static List Lookup Values

Use a manual sort order when you first create your static list lookup.

**Follow these steps:**

1. With the static list lookup open, click **Reorder Values**.
2. Click the name of the value and use the arrows to move the value up and down in the list.
3. Save the changes.

## Static Dependent List Lookups

A static dependent list (SDL) lookup consists of a hierarchy of levels and values. Plan your hierarchy carefully — you cannot move levels and values up or down in the structure once created.

### Create or Edit Static Dependent List Lookups

**Follow these steps:**

1. Click **Administration**, **Data Administration**, **Lookups**.
2. Click **New** to create, or click the lookup name to edit.
3. For the **Source**, select **Static Dependent Lists** and complete:
   - **Lookup Name**, **Lookup ID**, **Content Source**, **Description**.
4. Save the changes.

### Create Dependency Levels for Static Dependent List Lookups

**Follow these steps:**

1. Open the static dependent list lookup.
2. Click **Levels**.
3. Click **New**.
4. Complete the following fields:
   - **Lookup Name**: Name for the lookup level.
   - **Lookup ID**: Unique ID for the lookup level.
   - **Description**: Brief description of the lookup level.
5. Save the changes.

### Create Lookup Values for Static Dependent Lists

**Follow these steps:**

1. Open a static dependent list lookup and click **Values**.
2. Click **New**.
3. Complete:
   - **Lookup Value Name**, **Lookup Value ID**, **Description**, **Active** (Default: Selected).
4. Save the changes.

## Dynamic Query Lookups

A dynamic query lookup contains a list of items displayed in a drop-down, powered by NSQL (Classic PPM's version of SQL).

> [!note]
> You cannot modify the NSQL query for a dynamic query lookup if the lookup is associated with an object attribute.

### Create or Edit Dynamic Query Lookups

**Follow these steps:**

1. Click **Administration**, **Data Administration**, **Lookups**.
2. Click **New** to create, or click the lookup name to edit.
3. Complete **Lookup Name**, **Lookup ID**, **Content Source**.
4. Select **Dynamic Query** for the Source and complete:
   - **Object**: If you want the hidden key value to return the primary key value of an object, select the object.
   - **Description**: Brief description of the lookup.
5. Save the changes.

> [!warning]
> Key requirements for dynamic lookups to work in Clarity Auto-Suggest:
> - The NSQL must contain the `@SELECT@` tag on select fields/columns:
>   ```sql
>   SELECT @SELECT:I.ID:ID@, @SELECT:I.CODE:CODE@ from INV_INVESTMENTS I
>   ```
> - Adding `ORDER BY` in the NSQL is redundant. Clarity adds the default `ORDER BY` clause dynamically based on the Default Sorting Column and Default Sort Order configurations in the lookup definition.

### Dynamic Lookups and Export Configurations

If the purpose of a dynamic lookup is to link an object to a unique instance of another record, Broadcom recommends:
- Use the internal ID generated by Classic PPM as the hidden key.
- Add the user-defined ID/unique code as the column `UNIQUE_CODE` in the query select clause.

Example:

```sql
SELECT @SELECT:r.id:id@
  ,@SELECT:r.full_name:full_name@
  ,@SELECT:r.unique_name:unique_name@
  ,@SELECT:r.unique_name:unique_code@
  ,@SELECT:r.last_name:last_name@
  ,@SELECT:r.first_name:first_name@
FROM srm_resources r
WHERE 1=1 AND @FILTER@
```

### Include Dynamic Query Lookup Attributes in the Data Warehouse

1. Create the dynamic query lookup definition following the rules below.
2. Create an attribute of data type "lookup" and enable it for the Data Warehouse.
3. Run the **Load Data Warehouse** job with the **Full Load** option selected.

**Rules for Dynamic Query Lookups for the Data Warehouse:**
- Always include a select column named `LAST_UPDATED_DATE` with a valid date value.

**Rules for Including Language Translations in the Data Warehouse:**
- Always include select columns named `LANGUAGE_CODE` and `LANGUAGE_ID`.
- Always include the following in the WHERE clause: `@WHERE:PARAM:LANGUAGE@`

## Define NSQL Queries

Use the Query tab of a lookup to define lookup queries. Classic PPM only supports NSQL statements.

> [!warning]
> Always include the phrase `@FILTER@` in the WHERE clause of the query.

**Example NSQL Statement:**

```sql
SELECT @SELECT:c.currency_code:currency_code@,
  @SELECT:c.currency_code:currency_name@
FROM cmn_currencies c
WHERE c.is_active = 1
  AND @FILTER@
```

### BROWSE-ONLY Construct

For dynamic query lookups, when you display a record in Classic PPM, the value may not appear if no match exists between the stored value and the list value. To retain inactivated values in the record, use the `@BROWSE-ONLY` construct:

**Syntax:**
```sql
@BROWSE-ONLY: /* include SQL statement here to look at active results only */ :BROWSE-ONLY@
```

**Example:**
```sql
SELECT... FROM... WHERE @FILTER@ @BROWSE-ONLY: AND IS_ACTIVE = 1 :BROWSE-ONLY@
```

## Define Browse Window Characteristics

> [!tip]
> Do not include an `ORDER BY` clause on a dynamic query used in a lookup. The Browse Window tab already includes a **Default Sorting Column** field.

**Follow these steps:**

1. Open a dynamic query lookup and click **Browse Window**.
2. In the **Filter Layout** section, select the fields to display in the Available Filter Fields list.
3. Click the right arrow to move them to the Selected Filter Fields list.
4. Use the up and down arrows to set the field order.
5. In the **List Layout** section, use the arrow keys to select and arrange the list columns.
6. Click **Apply** to update.
7. Select a **Default Sorting Column** and **Default Sort Order** (Ascending or Descending).
8. Click **Preview** to preview the browse window.
9. Click **Save and Exit** (if no pull-down values) or **Save** and then click **Lookup Filters** (if the lookup contains pull-down values).

## Define Lookup Filters for Dynamic Query Lookups

**Follow these steps:**

1. With the dynamic query open, click **Lookup Filters**.
2. For each field, click the **Browse** icon in the Lookup column to select and associate the lookup with that filter.
3. Click **Exit**.

## Configure Auto-Suggest Settings

Auto-suggest displays matching values when a user starts typing in lookup text fields. By default, auto-suggest is enabled for all system lookups and any new lookups you create.

The following lookup sources work with auto-suggest:
- Static List
- Dynamic Query
- Parameterized

Auto-suggest does NOT work with Static Dependent List lookup sources.

**Follow these steps:**

1. With the lookup open, click **Auto Suggest**.
2. Complete the following fields and save:
   - **Auto Suggest Enabled**: Default: Selected.
   - **Number of displayed suggestions**: Default: 20.
   - **Attribute Search Keys**: Search keys used when the user enters text. Multiple keys use an OR expression. Default: Name.
   - **Attribute Suggestion List Display**: Keys that display in the suggestion list, separated by the pipe (`|`) character. Default: Name.
3. Select the attribute from the **Attributes Available** list and add it to the **Attributes Selected** list.

## Create Parameterized Lookups

Parameterized lookups are based on dynamic query lookups and control the results that display based on other values entered in a view.

> [!note]
> For a parameterized lookup, you cannot use a multi-value lookup as the source that determines the display in the secondary target lookup. Use a single-value lookup for the source.

**Process:**

1. Create a dynamic query lookup.
2. Create an NSQL query with lookup parameters in the WHERE clause that references attributes in the object.
3. Create a parameterized lookup attribute on the object and map the NSQL query lookup parameters to the appropriate object attributes.

Whenever you update the source field, Clarity will:
- Keep the current value in the parameterized lookup if it is still valid; clear it if invalid.
- If the parameterized lookup is read-only and the source changes, Clarity will clear the parameterized lookup.
- If the parameterized lookup is secured using FLS and the source attribute changes, Clarity will clear the parameterized lookup.

> [!note]
> Key points for parameterized lookups:
> - Bulk edit, copy-paste, and fill handle operations for source attributes for required parameterized lookups are disabled.
> - For parameterized lookups with a date source attribute, there are limitations when dragging and dropping cards on the calendar layout.
> - If you use business rules to set attributes on a parameterized lookup or its source attribute, set both the source and parameterized lookup attributes in the same set attribute rule.

## Related

- [[_MOC Administration]]

%%Source: p3136-3152%%

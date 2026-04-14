---
title: Clarity Studio Objects and Attributes
tags:
  - dev
aliases:
  - Objects and Attributes
canonical: true
audience: dev
domain: development
---
# Clarity Studio Objects and Attributes

Objects define the attributes, linked subpages, page layout, audit trail, and views for your configured version of Classic PPM pages. Studio provides stock objects and allows you to create custom objects.

**Object hierarchy (up to three levels):**
- **Master Object** — Parent of Subobject 1 and grandparent of Subobject 2. A user with access rights to this object automatically has the same rights to all subobjects.
- **Subobject 1** — Child of the master object; parent of Subobject 2.
- **Subobject 2** — Child of Subobject 1; grandchild of the master object.

When you add a master object to a partition model, subobjects are automatically assigned to that model. Changes to the master object are automatically available to subobjects.

---

## Prerequisites for Custom Object Development

- Set up partitions if you want to associate object attributes with a particular partition.
- Create NSQL queries in advance if you plan to use parameterized lookups.
- Create your OBS hierarchy in advance for access control and reporting.
- Create lookups before adding single-value or multi-value lookup attributes.
- Do not create more attributes than you need — the number of attributes affects page load performance.
- Do not use the following **reserved words** for object names or IDs:

```
application    asset         company       contract      discussion
document       glallocation  idea          incident      incidentcategory
investmentallocation  investmenthierarchy  invoice  invoiceitem  invoicetransaction
job            other         product       release       releaseplan
report         requirement   requisition   resourcecredit  service
subscription   timesheet
```

> [!WARNING]
> The product supports up to 500 total attributes per object. We recommend no more than **100 attributes** on a single custom object. A high number of attributes can cause performance issues and potential upgrade failures. Consider using subobjects instead.

---

## Create an Object

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click **New**.
3. Enter an object name, a unique ID, and a content source.
4. (Optional) Enter a description.
5. Select **Master** for a new parent object. In the **Partition Model** field, select a partition model or leave empty for the default system partition.
6. Select **Subobject** if the object is the child of another object specified in the **Master Object** field.
7. Select the checkboxes to enable features:
   - **Event Enabled** — The process engine is notified of object instances created or updated.
   - **Include in the Data Warehouse** — Object instance data is included in the data warehouse for reporting.
   - **Copy Enabled** — Copies can be made of object instances.
   - **Export Enabled** — Object instances can be exported to XML.
   - **View All Enabled** — Object instances can have a single-page view with all properties, subobject lists, and portlets.
8. Save your changes.

> [!TIP]
> The **Include in the Data Warehouse** checkbox does not appear until you click **Save**. A subobject can only be data warehouse enabled when its parent is already enabled.

> [!NOTE]
> System subobjects (objects already having a parent) cannot have subobjects. Examples include: `benefitplandetail`, `costplandetail`, `task`, `risk`, `issue`, `assignment`, and others.

---

## Create Attributes

Attributes store information associated with object views. You can change how a default attribute appears but cannot change its name, ID, data type, or lookup.

> [!NOTE]
> When you specify a default value and click **Save**, Clarity creates the attribute with that default. If you select **Populate Null Values with the Default**, Clarity updates all existing records with the default value.

**Supported attribute types:**
- Attachment
- Boolean
- Calculated
- Aggregate (ACA)
- Date
- Formula
- Lookups: Single Value, Multi-Value, Parameterized
- Money
- Number
- String / Large String / Large String - Rich Text
- Time-Varying
- URL Link
- Virtual

---

### Attachment Attribute

Allows users to upload and view files in a field (single or multiple files).

- File extensions and size limits are governed by global settings — not configurable at the attribute level.
- Upload one file at a time; a maximum of **10 files** per attribute.
- Once API enabled, attachments are viewable in Clarity, except:
  - Not available for objects without a Details panel or Properties page (e.g., Roadmap Items, Cross-Project Tasks).
  - Cannot be added to Board Layout cards.
  - Cannot be used in filters to search by attachment name.
  - CSV export shows the file name, MIME type, and download URL.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of an object.
3. Click **Attributes** > **New**.
4. Enter an attribute name and unique ID.
5. Set the **Data Type** to **Attachment**.
6. Complete remaining fields and click **Save and Return**.

---

### Boolean Attribute

Indicates one of two exclusive conditions (e.g., an **Active** checkbox — true when selected, false when cleared).

**Follow these steps:**
1-6. Same as Attachment steps above.
6. Set the **Data Type** to **Boolean**.
7. Complete remaining fields and configure optional display mappings (icons or colors).
8. Click **Save and Return**.

---

### Calculated Attributes

A calculated attribute uses the values of other attributes to calculate its value dynamically at runtime. The value is **not** stored in the database, so you cannot sort, use a power filter, or manually update it.

**Cannot be used with:**
- Formula, Time-varying, Attachment, Long String, Multi-Value Lookups, Virtual attributes

**Result data types:** Number, String, Date

**Available functions:**

| Function | Description |
|----------|-------------|
| `Absolute(number)` | Absolute value |
| `Add(number1, number2)` | Sum |
| `Average(number1, number2...)` | Average |
| `Concat(string1, string2...)` | Concatenation |
| `DateAdd(date, unit, number)` | Add time to a date |
| `DateDiff(date1, date2, unit)` | Difference between dates |
| `Divide(number1, number2)` | Division |
| `Max(number1, number2...)` | Maximum value |
| `Min(number1, number2...)` | Minimum value |
| `Multiply(number1, number2)` | Multiplication |
| `Now()` | Current date |
| `Percentage(number1, number2)` | Percentage |
| `Power(number, power)` | Exponentiation |
| `Round(number, digits)` | Rounding |
| `Sqrt(number)` | Square root |
| `Subtract(number1, number2)` | Subtraction |
| `Sum(number1, number2...)` | Sum |
| `Trunc(number, digits)` | Truncation |

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the object name, then **Attributes** > **New**.
3. Enter a name and unique ID.
4. Set the **Data Type** to **Calculated**.
5. Set the **Result Data Type** to Number, String, or Date.
6. Complete optional fields and click **Save**.
7. Click **Build Calculated Attribute**.
8. Select a function, argument count, and define each argument as a Constant, Attribute Name, or Sub-expression.
9. Click **Generate** to build the expression.
10. Click **Validate** to verify the expression syntax.
11. Click **Save and Return**.
12. (Optional) Configure display mappings (icons or colors for numeric ranges).
13. Click **Save and Return**.

---

### Aggregate Calculated Attributes (ACA)

An ACA rolls up an attribute value from subobject instances to the master object.

**Supported functions:**

| Function | Result |
|----------|--------|
| `AGG_Average` | Average across all subobject instances |
| `AGG_Count` | Count of non-null instances |
| `AGG_Sum` | Sum across all instances |
| `AGG_Min` | Minimum value across instances |
| `AGG_Max` | Maximum value across instances |

**Supported data types:** Number, Calculated (Number result), Money, Boolean, Single Value Numeric Lookups

**Limitations:**
- Rollup supports only one level (master → subobject, not grandparent → grandchild).
- Cannot configure virtual attributes in ACA functions.
- Display conditions and access rights for aggregated attributes are disregarded by ACAs.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the object name, then **Attributes** > **New**.
3. Enter a name and unique ID.
4. Set the **Data Type** to **Aggregated** (Result Data Type auto-sets to Number).
5. Save changes.
6. Click **Build Aggregated Calculated Attribute**.
7. Select the **Function**, **Sub Object**, and **Attribute**.
8. Click **Generate** to build the expression.
9. Validate and click **Save and Return**.
10. Configure object views to display the ACA.

**To add a filter condition on ACA subobject instances:**
1. Open the ACA attribute properties.
2. Next to **Filter**, click **Define filter condition**.
3. Define And/Or conditions on subobject attributes.

> [!NOTE]
> Filter conditions cannot be applied to attributes of these data types: Formula, Time Varying, Attachment, Long String, MVL.

---

### Date Attribute

**Follow these steps:**
1-6. Standard steps. Set the **Data Type** to **Date**.
7. Complete **Validation From** and **To** fields (Rolling Date or Specific Date).
8. Save your changes.

---

### Formula Attribute

Calculates the weighted average of two or more attributes in the same object.

**Follow these steps:**
1-8. Standard steps. Set the **Data Type** to **Formula**.
8. (Optional) Configure display mappings (colors or icons).
9. Click **Save**.
10. In the **Formula** field, click **[Build Weighted Average Formula]**.
11. For each attribute, specify the **Attribute** and **Weighting** value.
12. Click **New Row** to add more attributes.
13. Click **Recalculate** to test the formula.
14. Save your changes.

---

### Single-Value Lookup Attribute

Displays a drop-down list from which users select one value.

**Source types:**
- **Static List** — Fixed values (e.g., action item statuses). Supports display mappings (colors/icons).
- **Dynamic Query** — Values from an NSQL query (e.g., active resources). Does not support display mappings.

**Follow these steps:**
1-6. Standard steps. Set the **Data Type** to **Lookup**.
7. In the **Lookup** field, specify the static list or dynamic query.
8. Configure optional display mappings.
9. Save your changes.

---

### Multi-Value Lookup Attribute

Displays a browse field or drop-down allowing multiple selections.

> [!NOTE]
> Multi-value lookup attributes cannot be used in display mappings.

**Follow these steps:**
1-6. Standard steps. Set the **Data Type** to **Multi-Valued Lookup**.
7. Save your changes.

---

### Parameterized Lookup

Restricts values in one field based on the selection in another field. For example, selecting a Region constrains the City drop-down to cities in that region.

Parameterized lookups are built using:
1. A **static lookup** for the constraining field (e.g., Global Markets).
2. A **dynamic NSQL lookup** with a parameterized construct (e.g., cities filtered by market).

**Example NSQL for parameterized lookup:**
```sql
SELECT DISTINCT @SELECT:CITY.ID:CITY_ID@, @SELECT:CITY.NAME:CITY_NAME@
FROM odf_ca_cities CITY
WHERE @FILTER@
  AND (@WHERE:PARAM:USER_DEF:STRING:CITY_CONSTRAIN@ = CITY.cities_by_market)
```

---

### Money Attribute

**Follow these steps:**
1-6. Standard steps. Set the **Data Type** to **Money**.
7. In the **Currency Code Location** field, specify the currency code source.
8. Define a **Validation Range** (minimum and maximum values).
9. Configure optional display mappings.
10. Save your changes.

---

### Number Attribute

**Follow these steps:**
1-6. Standard steps. Set the **Data Type** to **Number**.
7. Define a **Validation Range** (optional).
8. Configure optional display mappings.
9. Save your changes.

---

### String and Large String Attributes

**Follow these steps:**
1-6. Standard steps. Set the **Data Type** to **String**.
- For more than 2,000 characters, use **Large String**.

> [!NOTE]
> Large String attributes cannot be displayed in list filter views and cannot be sorted.

---

### Large String - Rich Text Attribute

**Follow these steps:**
1-6. Standard steps. Set the **Data Type** to **Large String - Rich Text**.
7. Complete remaining fields and save.

---

### Auto-Numbered Attributes

Auto-numbering automatically assigns unique sequential identifiers to string attributes when object instances are created.

> [!WARNING]
> If auto-numbering is used across multiple object types, verify that generated numbers are not the same across types. Use a unique prefix (e.g., `PRJ` for projects, `TSK` for tasks) to avoid collisions.

**Configure an auto-numbering scheme:**
1. Open an object, click the **Attributes** tab.
2. Click the name of a string attribute.
3. Click the **Auto-numbering** tab.
4. In the **Schemes** section, click **New**.
5. Enter a scheme name (up to 30 characters) and click **Save**.
6. Click **New** to add segments. Choose from:
   - **Text** — Fixed string prefix/suffix.
   - **Numeric Counter** — Incrementing number.
   - **Alphanumeric Counter** — Letters and numbers.
   - **Instance Creation Date** — Timestamp (e.g., `20180929`).
   - **Parent Object Attribute Reference** — Value from a parent object attribute (subobjects only).
7. Configure segment options (counter length, starting number, segment max length, etc.).
8. Click **Save and Return**. Create as many segments as needed.
9. (Optional) Click **Reorder** to arrange segments.
10. Select a **Partition** for the scheme.
11. To activate, select the **Auto-numbered** checkbox in the **General** section.
12. Save your changes.

---

### Time-Varying Attributes

Time-varying attributes store values that change over time. Two types:

- **Calendar** — Tied to a resource calendar. Used in list column views or grid portlets.
- **Fiscal** — Tied to fiscal time periods. Used on list views of subobjects only.

> [!WARNING]
> Custom time-varying attributes span the entire calendar — Clarity does not honor non-working days for custom TSVs.

> [!NOTE]
> Investment Parents and Investment Rollup objects do not support custom TSV attributes. Custom TSV values appear as zero (0) in the Investment Hierarchy Financial Rollup page. Stock time-varying attributes display correctly.

**Attributes automatically added to the master object for fiscal TSVs:**
- **Entity Code** — Associated entity for the fiscal period.
- **Fiscal Period Type** — Time period duration (monthly, quarterly, annually).
- **Fiscal Period Start Date** — Start of the time-scaled value range.
- **Fiscal Period End Date** — End of the time-scaled value range.

**Create a time-varying attribute:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Open an object and click **Attributes** > **New**.
3. Enter a name, unique ID, and description. Use only alphanumeric and underscore (`_`) characters for the ID. Avoid SQL reserved words.
4. Set the **Data Type** to **Time-varying**. (Cannot be changed after saving.)
5. (Optional) Associate with a partition.
6. Complete remaining fields:
   - **Time-varying Data Units** — Number, Money, or Percentage.
   - **Time-varying Unit Conversion** — Per hour or per second.
   - **Time-varying Date Constraints** — Optional date validation range.
7. For multi-currency systems with Money data unit, select currency code source.
8. Save your changes.

**Create a virtual column for a time-scaled value:**
1. For a list view: open the object, click **Views**, then **[Fields]** for the list view.
   For a grid portlet: open the portlet, open the **List Column Section** menu, and click **Fields**.
2. Click **New**.
3. Select **Time Scaled Value** and click **Save and Continue**.
4. In the **General** section, configure **Value Attributes**, **Column Label**, **Display Type**, and other display options.
5. In the **Time Scale** section, set **Start Date**, **Time Scale**, **Number of Time Periods**, and **Time Period Offset**.
6. Save your changes.
7. Add the virtual column to the layout and click **Publish** to replace personalized user views.

---

### URL Link Attribute

Provides a link to a web page or a virtual attribute (e.g., progress bar, Gantt chart, or calculated value).

**Follow these steps:**
1-6. Standard steps. Set the **Data Type** to **URL**.
7. Complete remaining fields.
8. Save your changes.

---

### Virtual Attribute

A read-only attribute on a subobject that is linked to a specific attribute on the master object.

> [!NOTE]
> Custom virtual attributes can only be defined on subobjects.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the subobject (e.g., Task).
3. Click **Attributes**.
4. Click **New Virtual**.
5. Select the **Master Object** and **Data Type**.
6. Select the **Attribute(s) of Referenced Items**.
7. Click **Add**.
8. Enter the **Attribute Label** and **Attribute ID**.
9. Click **Finish**.
10. Open the newly created virtual attribute.
11. Enter the **API Attribute ID** and click **Save and Return**.

---

## API Enable Custom Attributes

Custom attributes must be API enabled to appear in Clarity and be accessible via API calls.

**Follow these steps:**
1. Log in to Classic PPM.
2. Navigate to **Administration > Studio > Objects**.
3. Open the object and navigate to the **Attributes** tab.
4. Open the custom attribute.
5. In the **API Attribute ID** field, enter a unique ID starting with a lowercase letter and underscore (e.g., `p_uploadImage`).

> [!TIP]
> Prefix all API Attribute IDs with a consistent short string to prevent conflicts during future upgrades. For example: `p_acmeCompliance`. Use CamelCase notation.

6. Save the changes.

---

## Configure Display Mappings for Attributes

Use icons or colors to represent value ranges for number, money, static lookup, and Boolean attributes.

- You can define up to **10 ranges** plus an optional **Default Bucket**.
- Ranges must not overlap (e.g., 0-100, 101-200, 201-300).

> [!NOTE]
> Once you select a display-mapping type and begin defining ranges, you cannot switch types. Clear the existing mapping, save, then define a new one.

**Follow these steps:**
1. Open the object attribute and navigate to the **Display Mapping** section.
2. In the **Type** field, select **Color** or **Icon**.
3. For each range: select a color or icon, enter a description, and enter **From** and **To** values.
4. Repeat for all ranges.

---

## Register Portfolio Investment Object Attributes

Required Portfolio Investment attributes display by default. Register additional attributes (stock or custom) you want to show in portfolio investment pages.

> [!NOTE]
> Maximum **700 attributes** can be registered per portfolio. A counter on the attribute registry shows the current count.
>
> After changing the attribute registry, run the **Synchronize Portfolio Investments** job.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the **Portfolio Investment** object.
3. Click **Attribute Registry**.
4. Move attributes from the **Available Attributes** list to the **Selected Attributes** list.
5. Click **Save**.

---

## Add Attributes to Views

### Add to the Object Properties View

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Views**.
4. Locate the **Properties** view and click **[Layout:Create]** or **[Layout:Edit]** in the **Setup** column.
5. Select a section and click the **Properties and Layout** icon.
6. Move attributes from **Available** to **Selected** (left or right column).
7. Click **Save and Return**.
8. Click **Return**, then click **[Layout:Edit]** to repeat for the edit layout.
9. Save your changes.

### Add to the Object List Filter View

**Follow these steps:**
1-4. Standard steps. Locate the **List Filter** view and click **[Layout]**.
5. Move attributes from **Available** to **Selected**.
6. In the **Settings** section, configure:
   - **Section Title** — Header text for the filter section.
   - **Default Filter State** — Expanded or collapsed.
   - **Allow Power Filter** — Enables advanced search features.
7. Save your changes.

### Add to the Object List Column View

**Follow these steps:**
1-4. Standard steps. Next to the **List Column** view, click the **Layout** link.
5. In the **Column Sorting** section, select the primary sort attribute in the **First Field** row.
6. Select **Ascending** or **Descending**.
7. Select additional sort fields.
8. Save your changes.

---

## Grant Access to the Object

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the object name, then click **Access to this Object** and select:
   - **Resource** — Grants access to individual resources.
   - **Group** — Grants access to defined groups.
   - **OBS Unit** — Grants access to defined OBS units.
3. Click **Add**. A list of access rights appears.
4. Select the access rights checkboxes and click **Add and Continue**.
5. Select the resources, groups, or OBS units.
6. Click **Add**.

---

## Edit the Default Custom Object Menu Link

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Menu Manager**.
2. Click **Application Menu**. New custom objects appear under **Custom Objects** by default.
3. Scroll down and click your custom object.
4. Edit the menu item properties:
   - **Link Name** — Display label for the menu link.
   - **Page Name** — Target destination page.
   - **Parent Menu Item** — Menu section where the link appears.
5. Click **Save and Return**.
6. Click **Home** or **Administration**, then click **Refresh** to see the updated menu.

---

## Audit an Object

Configure auditing to preserve a record of operations on an object. When enabled, instances display an **Audit Trail** tab.

**Follow these steps:**
1. Open your object and click **Audit Trail**.
2. In the **Attribute Audit** section, move attributes to the **Audited Attributes** list.
3. In the **Object Audit** section:
   - Move attributes to **Logged Attributes for Insert Operation**.
   - Move attributes to **Logged Attributes for Delete Operation**.
4. In the **Purge Audit Trail** section, enter the number of days to keep records before purging (leave blank to keep indefinitely).
5. Save your changes.

---

## Delete an Object

You can delete user-defined objects. Deleting an object also deletes its views, database tables, page sets, and portlets that used it through an object data provider.

**You cannot delete:**
- Objects or attributes referenced in reports.
- References in custom database code.
- Object or attribute instances in NSQL queries.

> [!NOTE]
> Queries that use the database table or column created for the object/attribute are identified so you can remove them manually.

---

## Related
- [[_MOC Development]]

%%Source: p4009-4040%%

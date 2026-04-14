---
title: Configure an Organizational Breakdown Structure
tags:
  - admin
  - concept
  - howto
aliases:
  - OBS
  - Organizational Breakdown Structure
canonical: true
audience: admin
domain: administration
---
# Configure an Organizational Breakdown Structure (OBS)

The OBS is a hierarchical representation of your company used to align investments, grant access rights, and categorize data.

## Key Uses
- Categorize objects for filtering and reporting
- Grant access rights based on OBS membership
- Align investments with organizational units
- Associate groups of resources with partitions

## OBS Concepts

Every OBS is composed of three parts:

| Term | Description |
|---|---|
| **OBS Type** | The named OBS itself. Example: "Location" defines an OBS type for geographical locations. |
| **OBS Levels** | The hierarchical structure. Example: Country (level 1), State (level 2), City (level 3). |
| **OBS Units** | Individual nodes within the hierarchy. Units can be ancestors, descendants, or both relative to other units. |

> [!WARNING]
> OBS unit, department, and location names cannot contain the following special characters: slash (`/`), colon (`:`), double quotes (`"`), less than (`<`), or greater than (`>`).

Clarity supports two types of OBS:

| OBS Type | Purpose |
|---|---|
| **Financial OBS** | Linked to a financial entity. Used for cost plans, chargebacks, and financial reporting. Includes Department OBS and Location OBS. |
| **Non-Financial OBS** | Used for categorization, security, and reporting — not tied to financial planning. |

---

## Set Up a Financial OBS

A financial OBS consists of a **Department OBS** (organizational chart) and a **Location OBS** (geographical location). Both are associated with a financial entity.

### Prerequisites

Required access rights:
- Administration - Access
- Administration - Application Setup
- Financial Maintenance - Financial Organizational Structure
- Department - Create
- Location - Create
- Object Administration
- Administration - XOG

### Step 1: Create Department and Location OBS

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **OBS**.
2. Click **New**.
3. Complete the fields in the **General Information** section. Give the OBS a descriptive name indicating its purpose.
4. Enter labels in the **Levels** section (for example, Department at level 1 and Team at level 2 for a Dept OBS; Country at level 1 and State at level 2 for a Loc OBS).
5. Perform one of the following:
   - To associate objects with the OBS now, click **Save**.
   - To create another OBS first, click **Save and Return**.

### Step 2: Associate Objects with the Financial OBS

Associating an object with a financial OBS enables security and reporting capabilities for that object.

When you associate an object with the **Department OBS**:
- The object appears as a hyperlink under **Associated Objects** on the OBS Properties page.
- An attribute named **Department OBS** of data type **OBS Entity - Lookup** is created on the associated object. This data type is reserved for OBS attributes only.

When you associate an object with the **Location OBS**:
- No hyperlink or attribute is created on the associated object.

> [!NOTE]
> The hyperlink and Department OBS attribute are **not** created for these objects: Company, Incident Category, Job/Report, Page, Portfolio, Portlet, Process Definition, Release, Release Plan, and Requirement.
> The Department OBS attribute is only created on the **first** association — not for subsequent associations.

**Financial OBS attribute data created after association:**

| Field | Dept | Loc |
|---|---|---|
| OBS Name | Dept | Loc |
| Object Name | Project | Project |
| Attribute Name | Department OBS | Not Applicable |
| Attribute ID | `odf_obs_fin_dept` | Not Applicable |
| Data Type | OBS Entity - Lookup | Not Applicable |

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **OBS**.
2. Open the OBS and click **Add** under the **Associated Objects** section.
3. Select the objects to associate and click **Add**.
4. Select an **Association Mode**:
   - **Any Unit**: All units from all levels are available for selection.
   - **Lowest Unit**: Only units at the lowest level are available for selection.
5. Save your changes.

> [!NOTE]
> When you disassociate an object from a financial OBS, the Department OBS attribute is deleted. The attribute is deleted only after the object is disassociated from the **last** financial OBS it was associated with.

### Step 3: Create the OBS Units

Units are the individual nodes within the OBS hierarchy.

> [!NOTE]
> You cannot create or delete units from an OBS that is already linked to an entity. Create all OBS units **before** associating the OBS with an entity.

**Follow these steps:**

1. Click **Administration**, **Organization and Access**, **OBS**.
2. Open the OBS and click **Units**.
3. Click **New** and complete the fields to create units at level 1.
4. To create child units, use the **Parent** field. Use **Quick Create** to create multiple units at once.
5. To attach an object instance to an OBS unit, click **Save and Continue**. Use the **Attached Instances** tab to control resource access.
6. To add more units, click **Save And Return**.

### Step 4: Create an Entity

An entity defines the financial boundary and associates a Department OBS and Location OBS together for financial planning.

> [!IMPORTANT]
> When you create an entity, the selected Department and Location OBS are converted to financial OBS. Any nonfinancial OBS attributes on associated objects are deleted. A Department OBS attribute is created on associated objects.

> [!TIP]
> If you do not set a default entity, it impacts Staffing and Roadmaps capabilities in Clarity.

**Follow these steps:**

1. Click **Administration**, **Finance**, **Setup**.
2. Click **Entities** and click **New**.
3. Complete the **General** section fields:
   - **Fiscal Period Type**: Monthly, Quarterly, Annually, Weekly, Semi Monthly, or 13 Periods.
   - **Home Currency**: Cannot be changed after entity creation.
   - **Reporting Currency**: Cannot be changed after entity creation.
   - **Location OBS**: The existing Location OBS to associate.
   - **Department OBS**: The existing Department OBS to associate.
   - **Default**: Sets this entity as the system default.
4. Complete the **Defaults** section (Investment Class, Company Class, WIP Class).
5. Complete rate/cost defaults for Labor, Material, Equipment, and Expense:
   - **Rate Source**: Cost/rate matrix for benefit calculations.
   - **Cost Source**: Cost/rate matrix for cost calculations.
   - **Source Location**: Resource location or project location as the rate source.
   - **Exchange Rate Type**: Average, Fixed, or Spot.
6. Save your changes.

### Step 5: Associate Departments with Locations

**Follow these steps:**

1. Click **Home**, **Organization**, **Departments**.
2. Open the department to associate with locations.
3. Click the **Properties** tab and click **Locations**.
4. Click **Add**, select the locations, and click **Add**.

### Step 6: Associate Locations with Departments

**Follow these steps:**

1. Click **Administration**, **Finance**, **Setup**.
2. Click **Locations** in the Organizational Structure section.
3. Open the location to associate with departments.
4. Open the **Properties** menu, from **Main**, click **Departments**.
5. Click **Add**, select the departments, and click **Add**.

### Step 7: (Optional) Configure the OBS Attribute

After the OBS attribute is created, you can configure it like other attributes:
- Make mandatory or read-only
- Set default and override default values
- Hide the field
- Change the label
- Move the OBS section to a subpage or secured subpage
- Rename or delete the OBS section
- Move OBS fields out of the OBS section
- Configure on list pages with inline editing
- Enable audit trail
- Use auto-suggest
- Use language translation
- Use in process definition system or manual actions

> [!NOTE]
> The Department attribute on the financial subpage and the Department OBS attribute are kept in sync. Even if Department OBS is read-only in the UI, it updates when the Department is changed on the financial subpage.

---

## Set Up a Non-Financial OBS

A non-financial OBS is used for categorization, security, and reporting — not for financial planning or entity association.

### Prerequisites

Required access rights:
- Administration - Application Setup
- Administration - XOG
- Object Administration

### Step 1: Create an OBS

**Follow these steps:**

1. Open **Administration**, from **Organization and Access**, click **OBS**.
2. Click **New**.
3. Complete the **General Information** section. Best practice: use a descriptive name indicating the OBS purpose (for example, "Resource Pool" or "Geographies").
4. Enter labels in the **Levels** section.
5. Save your changes.

### Step 2: Associate Objects with the OBS

When you associate an object with a non-financial OBS:
- The object appears as a hyperlink under **Associated Objects** on the OBS Properties page.
- An attribute with the OBS name and data type **OBS - Lookup** is created on the associated object.

> [!NOTE]
> The hyperlink and OBS attribute are **not** created for: Company, Incident Category, Job/Report, Page, Portlet, and Process Definition.

**Attribute created after object-OBS association:**

| Field | Value |
|---|---|
| OBS Name | Resource Pool |
| Object Name | Project |
| Attribute Name | Resource Pool |
| Attribute ID | `odf_<first four valid chars of OBS_ID>_<#code of OBS ID>` |
| Data Type | OBS - Lookup |

**Follow these steps:**

1. Open **Administration**, from **Organization and Access**, click **OBS**.
2. Open the OBS and click **Add** under **Associated Objects**.
3. Select the objects to associate and click **Add**.
4. Select **Association Mode**:
   - **Any Unit**: All units from all levels available.
   - **Lowest Unit**: Only units at the lowest level available.
5. Save your changes.

> [!NOTE]
> When you disassociate an object from an OBS, the OBS attribute is deleted along with all related views, database tables, and instance-level data.

### Step 3: Create the OBS Units

**Follow these steps:**

1. Open **Administration**, from **Organization and Access**, click **OBS**.
2. Open the OBS and click **Units**.
3. Click **New** and complete the fields to create units at level 1.
4. To create child units, use the **Parent** field. Use **Quick Create** for multiple units at once.
5. To attach an object instance to an OBS unit, click **Save and Continue**. Use the **Attached Instances** tab.
6. To add more units, click **Save And Return**.

### Step 4: (Optional) Configure the OBS Attribute

Same options as for financial OBS attributes:
- Mandatory, read-only, enter-once
- Default and override default values
- Hide, rename, move, or delete the OBS section
- Move to a subpage; use **Restore Defaults** to return it to General Properties
- Configure on list pages with inline editing
- Enable audit trail
- Auto-suggest and language translation
- Use in process definitions

---

## Upgrade Impacts on OBS Properties

After upgrading to this release:
- Any `{}` (braces) in OBS names are changed to `()` (parentheses).
- The pre-installation check **fails** if OBS names contain: `/`, `:`, `"`, `<`, or `>`.

---

## Constraints on Audit Trail-Enabled OBS Attributes

You can enable an audit trail for OBS attributes in this release. However:

> [!WARNING]
> You **cannot delete** an OBS attribute that has audit trail enabled.

The following actions are **blocked** when an OBS attribute is audit trail-enabled:
- Delete a non-financial OBS
- Disassociate objects from the OBS
- Create an entity
- Delete an entity

---

## Configure the OBS Section

When you associate an object with an OBS for the first time, an OBS section is automatically created in the Create View and Edit View of the object. Subsequent associations add OBS attributes to the same section.

Key behaviors:
- If you delete the OBS section and then reassociate the object, the section reappears with only the new OBS attribute.
- You can move the OBS section to any subpage. Use **Restore Defaults** to move it back to General Properties with all OBS attributes in the Selected column.

> [!NOTE]
> The System Partition can have **only one** OBS section at any time.

**Restore Defaults behavior:**

| Action | Result |
|---|---|
| Administrator has not configured the OBS section; user uses the default view. | No changes — user sees the same OBS section on General Properties. |
| Administrator moves OBS section/attributes to another subpage; object is in a partition model. | OBS section moves back to General Properties; all OBS attributes restored to Selected column in creation order. |
| Partition model is disassociated from the object after OBS section was configured. | Changes removed; parent partition configuration restored. No impact on instances created while the partition model was associated. |

### XOG Impact

You can move the OBS section using XOG like other sections. When you XOG in an OBS with associated objects, attributes are created and added to the OBS section. The OBS section appears in XOG output with attribute code `ODF_OBS_SECTION`.

**Version-based XOG behavior:**

| XOG Version Attribute | OBS Section Behavior |
|---|---|
| Less than 13.2 | OBS section on target system is **preserved** |
| 13.2 or higher (section not in XOG file) | OBS section is **deleted** on target system |
| `complete="preserveOBS"` set | OBS section is **preserved regardless** of version |

To preserve the OBS section regardless of version, add the `complete="preserveOBS"` attribute:

```xml
<property code="custCreate" componentId="odf" complete="preserveOBS" objectCode="cust" partitionCode="NIKU.ROOT" type="create">
  <section code="ODF_OBS_SECTION" currentState="collapsed" sequence="3">
    ...
  </section>
</property>
```

> [!NOTE]
> You can copy an OBS section multiple times in a XOG file. However, only the **last instance** is applied, since the System Partition can have only one OBS section.

### Delete OBS Types

**Follow these steps:**

1. Open **Administration**, from **Organization and Access**, click **OBS**.
2. Select the check box next to each OBS to delete.
3. Click **Delete** and confirm.

> [!NOTE]
> If the OBS is enabled for access rights, remove the access rights association before deleting. An OBS associated with a financial entity **cannot be deleted**.

---

## Related
- [[_MOC Administration]]
- [[User Accounts and Passwords]]
- [[Blueprints and Object Configuration]]

%%Source: p3088-3097%%

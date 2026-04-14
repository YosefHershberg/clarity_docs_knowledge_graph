---
title: Clarity Studio Partitions
tags:
  - dev
aliases:
  - Partitions
canonical: true
audience: dev
domain: development
---

# Clarity Studio Partitions

Partitions create different views of the same objects for different users. You can use partitions to simplify the user interface by controlling what each group of users sees - by department, geography, division, legal structure, or any other enterprise-defined segmentation.

> [!NOTE]
> Partitions are optional. They are not required as part of the product setup.

A **partition model** is the top node (parent) of a partition hierarchy.
All partition models belong to the **System** partition (the default product partition).
You can add nested partitions to create a multilevel hierarchy.
Each partition can contain its own version of content-specific information.

**Content items that can be customized per partition:**
- Attributes, Processes, Lookups, Portlets, UI Themes, Views, Links

---

## Prerequisites

Required access rights:
- **Administration - Studio**
- **Administration - Partition Models**

Planning considerations:
- Identify the number and hierarchy of partitions needed.
- Determine what to include in each partition.
- Identify which users belong to each partition.

**Key rules:**
- A user can be assigned to only one partition. If assigned to more than one, they must select a default partition in their account settings.
- An object can be assigned to only one partition model at a time.
- When an object is assigned to a partition model, default associations (attributes, views, links) are visible to all partitions in that model.
- A partition's location in the hierarchy is fixed once created - it cannot be moved.
- Partition models cannot be deleted, but they can be deactivated.
- A child partition inherits what its parent can view unless the child has been modified.
- A user not a member of any partition sees the default System partition views.
- You can export partition models using the XML Open Gateway (XOG). Only the partition model and its partitions are exported - not associated objects or settings.

> [!NOTE]
> You do not need to restart the product to enable partitioning. All partition configuration changes are immediately available.

---

## Create a Partition Model and Add Partitions

**Follow these steps:**
1. Click **Administration > Studio > Partition Models**.
2. Click **New** and specify the required information.
3. Click **Save and Continue**. The **Partitions** tab activates.
4. Click **New**.

> [!NOTE]
> To add multiple partitions simultaneously, click **Quick Create**.

5. Enter the information for the new partition:
   - **Parent Partition:** Position in the hierarchy.
   - **UI Themes:** Color theme for the partition user interface.
6. Save your changes.

---

## Associate Objects with a Partition

The **Standard** partition contains default objects associated with all partitions through inheritance. An object can only be associated with one partition model.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Select a partition model.
4. Save your changes.

---

## Include Attributes in a Partition

Include object attributes in a partition to make them visible only to users in that partition.

> [!NOTE]
> You can change the partition assignment or association mode of an attribute at any time, but consider the impact on items that reference the attribute (portlets, processes, calculations).

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Attributes** to display the object's attributes.
4. Click the attribute to assign to a partition.
5. Complete the following fields:
   - **Partition:** The partition to associate with the attribute.
   - **Partition Association Mode:** Which additional partitions can include this attribute.
6. Save your changes.

---

## Modify Views for a Partition

Views determine how object information displays for users in a specific partition. If a partition has no views for an object, it inherits the views of the nearest ancestor partition. If no ancestor partitions have views, the System partition views are used.

> [!TIP]
> Define partitioned views at the top of the partition model first before configuring child partitions.

**Follow these steps:**
1. Click **Administration > Studio > Objects**.
2. Click the name of the object.
3. Verify that a partition model is assigned to the object. If not, assign the correct partition model.
4. Click **Views**. The list of views appears.
5. In the **Partition** field above the list, select the partition to which the view modifications apply.
6. Use the view links to modify the layout for the selected partition.

---

## Include Object Links in a Partition

Include object links in a partition to provide shortcuts to subpages or external web pages.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of the object.
3. Click **Linking**.
4. Click the link to assign to a partition.
5. Complete the following fields:
   - **Partition:** The partition to associate with the object link.
   - **Partition Association Mode:** Which additional partitions can include the link.
6. Save your changes.

---

## Define Static Lookup Values for a Partition

Users in a partitioned lookup see different values depending on the partition to which an object instance belongs. If an object instance is not partitioned, the lookup shows only System partition values.

**Follow these steps:**
1. Open **Administration**, and from **Data Administration**, click **Lookups**.
2. Click a static lookup.
3. Click **Values** to see the assigned values.
4. Click the name of the value to assign to a partition.
5. Complete the following fields:
   - **Partition:** The partition for the lookup value.
   - **Partition Association Mode:** Which additional partitions can include this value.
6. Save your changes.

---

## Select a UI Theme for a Partition

UI themes vary the look of the user interface - colors, login information, branding, and other visual elements.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Partition Models**.
2. Click the name of the partition model.
3. Click **Partitions**.
4. Click the name of the partition for which you want to set the UI theme.
5. Select a UI theme.
6. Save your changes.

---

## Test the Partitions

**Follow these steps:**
1. Create a test user with the appropriate access rights and assign them to the partition.
2. Log out as an admin and log in as the test user.
3. Verify that the configured partition modifications are visible.
4. Repeat for each partition.

---

## Assign User Access to Partitions

Partitioning affects what objects are exposed to users. If a user has access rights to an instance of a partitioned object, they can see the partitioned views of that instance - even if they are not a member of the partition.

**Partitioning affects users' ability to:**
- Create partitioned attributes.
- Change the layout and appearance of attributes for partitioned objects.
- Assign an object instance to a partition.
- Select a default partition.
- Switch partition views.
- See and personalize partitioned List Column and List Filter views.
- Create or see partitioned values for lookups.

---

## Related
- [[_MOC Development]]

%%Source: p4041-4046%%



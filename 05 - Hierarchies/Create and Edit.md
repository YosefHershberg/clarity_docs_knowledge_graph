---
title: Create and Edit Hierarchies
tags:
  - howto
  - hierarchies
aliases:
  - Creating Hierarchies
  - Edit Hierarchy
  - New Hierarchy
  - Investment Hierarchy Setup
---

# Create and Edit Hierarchies

This note covers how to create a new hierarchy, add investments to it, structure the hierarchy tree, and manage hierarchy properties in Clarity PPM.

> [!info] Prerequisites
> You need the **Hierarchy - Create** access right. The investments you want to add to the hierarchy must be accessible to you (within your OBS scope). Hierarchy types and available fields are configured by an administrator in the Blueprint.

---

## What is a Hierarchy?

A **Hierarchy** is a named multi-level tree of investments. For example:

```
Digital Transformation Program (Root - Custom Investment)
├── Customer Portal Project (Project)
│   ├── UI Redesign (Project)
│   └── API Integration (Project)
└── Data Analytics Platform (Custom Investment)
    ├── Data Lake Setup (Project)
    └── BI Dashboard Build (Project)
```

Hierarchies allow you to:
- See rolled-up financials for the entire program.
- Track status across all child investments.
- Analyze capacity demand across the full tree.
- Align investments to strategic objectives.

---

## Creating a New Hierarchy

1. Navigate to **Hierarchies** in the main navigation.
2. Click **+ New Hierarchy**.
3. Fill in the creation form:
   - **Name** *(required)* — The hierarchy name (e.g., "Digital Transformation FY2025").
   - **Hierarchy Type** — Select from admin-configured types (e.g., Program Hierarchy, Portfolio Hierarchy).
   - **Description** — Purpose and scope of the hierarchy.
   - **OBS Unit** — Controls access and reporting context.
   - **Manager** — Person responsible for the hierarchy.
   - **Start Date / End Date** — The planning horizon of the hierarchy.
4. Click **Save** — the hierarchy is created and opens in the detail view.

> [!tip] Hierarchy Name Conventions
> Use a naming convention that includes the type and fiscal year: "[Program Name] - [FY]" (e.g., "Cloud Migration Program - FY2026"). This makes hierarchies easy to find in search and reports.

---

## Adding the Root Investment

1. In the hierarchy detail view, click **+ Set Root** or **+ Add Root Investment**.
2. Search for and select the top-level investment (typically a Program or Portfolio investment).
3. The root investment appears at the top of the hierarchy tree.

> [!note] One Root Per Hierarchy
> Each hierarchy has exactly one root investment. All other investments are children or descendants of the root. If you need multiple top-level items, consider creating multiple hierarchies or using a placeholder root investment.

---

## Adding Child Investments

### From the Hierarchy Tree

1. In the hierarchy view, hover over a node (investment) in the tree.
2. Click the **+** icon or **Add Child** button that appears.
3. Search for an existing investment to add as a child.
4. Select it — it appears as a child node under the selected parent.

### Creating a New Investment as a Child

1. Hover over the parent node.
2. Click **+ New Child** (creates a new investment directly within the hierarchy).
3. Fill in the required fields for the new investment.
4. Click **Save** — the new investment is created and linked as a child.

---

## Restructuring the Hierarchy (Moving Nodes)

### Moving a Node to a Different Parent

1. In the hierarchy tree view, click the **node** you want to move.
2. Click **Actions** → **Move**.
3. Select the **new parent** from the investment search.
4. Click **Move** to confirm — the node and all its descendants move to the new parent.

### Promoting a Node (Moving Up)

1. Select the node.
2. Click **Actions** → **Promote** — the node moves up one level (its parent becomes its sibling's parent).

> [!warning] Impact on Rollup
> Moving nodes changes which investments' data rolls up to which parent. Financial rollups, effort rollups, and status aggregations all update automatically after moving.

---

## Removing an Investment from the Hierarchy

1. Click the investment node in the hierarchy tree.
2. Click **Actions** → **Remove from Hierarchy**.
3. Confirm removal.

The investment is **unlinked** from the hierarchy (it continues to exist as a standalone investment). If the removed investment had children, those children are also removed from the hierarchy (they don't automatically attach to the removed node's parent).

---

## Deleting a Hierarchy

1. From the Hierarchies list, select the hierarchy.
2. Click **Actions** → **Delete**.
3. Confirm deletion.

> [!danger] Deletion Removes the Tree Structure Only
> Deleting a hierarchy removes the hierarchy definition and all parent-child links. The investments themselves are NOT deleted — they continue to exist as standalone investments.

---

## Editing Hierarchy Properties

1. Open the hierarchy detail view.
2. Click the **Properties** tab or click the header fields directly.
3. Edit: Name, Description, Manager, OBS Unit, Dates.
4. Click **Save**.

---

## Hierarchy Access Control

Access to a hierarchy is controlled by:
- **Hierarchy - View** access right + OBS scope → Can view the hierarchy and all its nodes.
- **Hierarchy - Edit** access right → Can add/remove investments, restructure the tree.
- **Hierarchy - Create** access right → Can create new hierarchies.

Access to **individual investments within the hierarchy** is still governed by the investment's own access rights and OBS settings.

---

## Related Notes

- [[Objectives Hierarchy]] — Mapping investments to strategic objectives
- [[Cross-Object Investment Grid]] — Analyzing all hierarchy investments in one grid
- [[Timeline Layout]] — Viewing all hierarchy investments on a Gantt chart
- [[Financial Plans in Hierarchy]] — Rolled-up financial analysis
- [[_MOC Hierarchies]] — Back to the hierarchies MOC

%%Source: p627–642%%

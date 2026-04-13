---
title: Getting Started with Custom Investments
tags:
  - concept
  - howto
aliases:
  - Custom Investments Overview
  - Custom Investment Types
---

# Getting Started with Custom Investments

## Overview

Custom Investments allow organizations to create specialized categories of investments that align with unique business processes and strategic objectives. Unlike traditional project categories, custom investments let you use your own terminology.

**Examples of custom investment types:**
- Strategic Themes — High-level organizational priorities
- Digital Transformation Initiatives — Technology-focused investments
- Market Expansion Programs — Geographic or demographic growth investments
- Product Innovation Pipelines — R&D investments for new offerings

## Prerequisites and Access Rights

| Access Right | Description |
|-------------|-------------|
| Custom_Investment_type - Create | Create new custom investments |
| Custom_Investment_type - Edit All | Edit all investment attributes |
| Custom_Investment_type - View All | View all investment instances |
| Custom_Investment_type - Xog Access | XOG import/export access |
| Custom_Investment_type - Task Management | Manage tasks on investments |

## Blueprint Configuration

> [!important]
> Custom investment blueprints are automatically created when administrators establish new custom investment types. Customize them to reflect business requirements:
> - Configure the Details layout with relevant sections and fields
> - Add modules: Tasks, Staff, Financials, Risks, Issues, Changes
> - Publish the blueprint and mark as default

## Navigating Layouts

Custom investments support multiple layouts:

| Layout | Best For |
|--------|----------|
| **Tiles** | Quick visual overview with status indicators |
| **[[Grids\|Grid]]** | Detailed spreadsheet-like data management |
| **[[Board Layout\|Board]]** | Drag-and-drop status management (Kanban) |
| **Timeline** | Chronological schedule visualization |

### Reordering Investment Tiles
1. Navigate to the Custom Investments workspace
2. Drag and drop tiles to reorder them
3. The order is saved per user

## Creating Custom Investments

### From Scratch
1. Click **+** in the Grid layout or **New** in the toolbar
2. Fill in required fields (Name, Investment Type, etc.)
3. Click **Save**

### From Template
1. Click **+ New from Template**
2. Select an available template
3. The new investment inherits the template's configuration

### CSV Import (Beta)
1. Click **Import** > **CSV Import**
2. Download the CSV template
3. Fill in data following the template format
4. Upload the completed CSV file

### Copy an Investment
1. Open the source investment
2. Click **Actions** > **Copy**
3. Select which elements to copy (tasks, staff, financials, etc.)

## OBS Association

Associate investments with the **Organizational Breakdown Structure (OBS)** to:
- Categorize objects for filtering and reporting
- Grant access rights based on OBS membership

## Related
- [[_MOC Investments]]
- [[Create and Edit]]
- [[Staffing]]
- [[Tasks and Phases]]
- [[Financial Plans]]

%%Source: p330-367%%

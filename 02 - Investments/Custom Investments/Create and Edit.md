---
title: Create and Edit Custom Investments
tags:
  - howto
aliases:
  - Create Investment
  - Edit Investment
canonical: true
audience: pm
domain: investments
---

# Create and Edit Custom Investments

## Creating a Custom Investment

### Method 1: From Grid Layout
1. Navigate to the Custom Investments workspace
2. Click **+** (Add) in the grid toolbar
3. Enter the investment name and required fields
4. Press **Enter** or click **Save**

### Method 2: From Template
1. Click **+ New from Template**
2. Select a template from the list
3. Templates copy: blueprint elements, task hierarchies, roles, financial plans, and other components

### Method 3: CSV Import (Beta)
1. Click **Import** in the toolbar
2. Download the CSV template for the investment type
3. Populate the template with your data
4. Upload and map columns to Clarity fields

> [!tip]
> Always create investments from templates when possible — saves time and ensures standardization.

## Editing Investments

### Inline Editing
- Click any editable cell in the [[Grids|Grid]] layout to edit directly
- Changes are saved automatically

### Details Panel
- Click a row to open the [[Details Panel]]
- Edit attributes in the slide-out panel
- Navigate between sections using the panel tabs

### Properties Module
- Open an investment to access its full Properties view
- Edit all available attributes organized by sections

## Executing Processes

You can execute processes from the Properties module:
1. Open the investment instance
2. On Properties, select **Actions** and click the relevant process

> [!warning]
> - Only processes where `Active=TRUE` and `Available for On-Demand Start=Yes` are available
> - Maximum 50 processes per blueprint
> - Processes do NOT enforce partition logic when executed via Actions

## Related
- [[Getting Started]]
- [[_MOC Investments]]
- [[_MOC Administration|Blueprints Configuration]]

%%Source: p352-367%%

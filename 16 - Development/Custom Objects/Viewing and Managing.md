---
title: Viewing Custom Objects and Subobjects
tags:
  - dev
  - howto
aliases:
  - Custom Objects
canonical: true
audience: dev
domain: development
---

# Viewing Custom Objects and Subobjects

Custom objects extend Clarity with organization-specific data structures. You can create master objects and subobjects in Studio, then expose them through the REST API.

## API Attribute ID for REST API Access

> [!IMPORTANT]
> When adding an attribute to a custom object, set the **API Attribute ID** to `p_<attribute_id>` (e.g., `p_my_custom_field`). Without the `p_` prefix, the REST API will not expose the attribute and it will be invisible to API consumers.

## Object Hierarchy

You can create a hierarchy of up to three levels:

- **Master Object** - Parent object; users with access rights automatically have the same rights to all subobjects.
- **Subobject 1** - Child of the master object and parent of subobject 2.
- **Subobject 2** - Child of subobject 1 and grandchild of the master object.

## Drag-and-Drop Order

You can select the **Drag-and-Drop Order Enabled** attribute in Classic PPM for a custom object.
Clarity creates a virtual **Order** attribute for the associated object, allowing end users to prioritize records by dragging and dropping in the grid.
Use the **Recalculate Order from Sort** option to automatically sort records based on the value in the Order column.

## Related
- [[CSV Import]]
- [[Objects and Attributes]]
- [[_MOC Development]]

%%Source: p1649-1660%%



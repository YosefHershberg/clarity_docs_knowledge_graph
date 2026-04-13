---
title: Viewing Custom Objects and Subobjects
tags:
  - dev
  - howto
aliases:
  - Custom Objects
---
# Viewing Custom Objects and Subobjects

Custom objects extend Clarity with organization-specific data structures.

## API Attribute ID for REST API Access

> [!important] When adding an attribute to a custom object, set the **API Attribute ID** to `p_<attribute_id>` (e.g., `p_my_custom_field`). Without the `p_` prefix, the REST API will not expose the attribute and it will be invisible to API consumers.

## Related
- [[CSV Import]]
- [[_MOC Development]]

%%Source: p1649-1660%%

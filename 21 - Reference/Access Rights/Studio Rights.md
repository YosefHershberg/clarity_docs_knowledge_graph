---
title: Studio Access Rights
tags:
  - reference
  - admin
  - dev
aliases:
  - Studio Rights
canonical: true
audience: everyone
domain: reference
---
# Studio Access Rights

Studio access rights control who can create, edit, and administer custom objects, portlets, pages, and other Studio content in Classic PPM.

## Basic Studio Access Rights

Prerequisites to access the Administration, Studio menu:

| Right Name | Type | Description |
|---|---|---|
| Administration - Access | Global | Allows the user to access the Administration menu. |
| Administration - Studio | Global | Allows access to Classic PPM Studio menus and pages. Allows creating/editing/deleting UI Themes. Allows viewing queries, portlets, and portlet pages. Requires a Studio license. |

## Content Add-Ins Access Rights

| Right Name | Type | Description |
|---|---|---|
| Content Add-Ins - Administer | Global | Allows administration of content add-ins. Includes the Administration - XOG access right. |

## Content Package Access Rights

| Right Name | Type | Description |
|---|---|---|
| Content Package - Administer | Global | Allows creating, editing, deleting, and viewing content packages. |

## Menu Manager Access Rights

| Right Name | Type | Description |
|---|---|---|
| Menu Definition Editor - All | Global | Allows editing and viewing the definitions of all menu items for the Navigator or Administration menu. |
| Menu Definition Viewer - All | Global | Allows viewing the definitions of all menu items for the Navigator or Administration menu. |

> **Note:** To see all menu items in Studio, you must have: Administration - Access, Administration - Partition Models, Administration - Studio, and Menu Definition Viewer - All.

## Object Access Rights

| Right Name | Type | Description |
|---|---|---|
| Custom Objects Editor | Global | Allows users to edit the definition of a custom object. |
| Object - Create Definition | Global | Allows the user to administer and use their Studio custom objects (create, edit, delete, and use). Includes Administration - Access. |
| Object Administration | Global | Allows a user to administer and use Studio and custom objects and views. Requires Administration - Access. |

## Partition Model Access Rights

| Right Name | Type | Description |
|---|---|---|
| Administration - Partition Models | Global | Allows users to manage partition models. Requires Administration - Access. |
| System Partition - Administer | Global | Allows a user to administer the System partition. |

## Portlet Access Rights

| Right Name | Type | Description |
|---|---|---|
| Portlet Create | Global | Allows a user to create new portlets. |
| Portlet Definition Editor | Instance | Allows editing and viewing the definition of a specific portlet. Requires Administration - Studio. |
| Portlet Definition Editor - All | Global | Allows editing and viewing the definitions of all portlets in Studio. Requires Administration - Studio. |
| Portlet Navigate | Global | Allows navigation to the portlet configuration pages. |
| Portlet - View | Instance | Allows users to view a specific portlet. |
| Portlet Viewer - All | Global | Lets you view and add stock portlets to portlet pages. |

## Portlet Pages Access Rights

| Right Name | Type | Description |
|---|---|---|
| Page Definition Editor | Instance | Allows editing, viewing, and deleting the definition of a specific page. Requires Administration - Studio. |
| Page Definition Editor - All | Global | Allows editing, viewing, and deleting the definition of all pages. Requires Administration - Studio. |
| Page Definition Viewer | Instance | Allows viewing the definition of a specific page. Requires Administration - Studio. |
| Page Definition Viewer - All | Global | Allows viewing the definition of all pages. Requires Administration - Studio. |
| Page - View | Instance | Allows viewing a general page in Classic PPM. Not required for instance pages (such as portfolio pages). |
| Page Viewer - All | Global | Lets the user view any configured portlet page. The portlet pages must be linked to a menu before being displayed. Requires rights to navigate the target menu. |

## Related
- [[Overview]]
- [[Administration Rights]]
- [[_MOC Reference]]
- [[_MOC Development]]

%%Source: p3724-3725%%

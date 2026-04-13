---
title: PRINCE2 Accelerator Access Rights
tags:
  - reference
  - admin
aliases:
  - PRINCE2 Rights
  - PRINCE2 Accelerator Rights
---
# PRINCE2 Accelerator Access Rights

The PRINCE2 Accelerator includes access groups organizing access rights for secured pages and portlets. Users also require access to the OBS for the PRINCE2 project, and the group must be associated with the entity tied to the PRINCE2 project.

## Access Groups Overview

| Group | Role |
|---|---|
| PRINCE2 Administrator Group | Full access to PRINCE2 sub-pages plus all global rights of the Project Manager group |
| PRINCE2 Executive/Senior User Group | Approve/reject PRINCE2 controls; access to all PRINCE2 projects, sub-objects, dashboards |
| PRINCE2 Project Manager Group | Direction and performance monitoring; create, view, and edit PRINCE2 projects |
| PRINCE2 Project Support Staff Group | Monitor tasks, enter time, conduct peer reviews of PRINCE2 controls |
| PRINCE2 Senior Supplier Group | Senior supervisory role; enter time, update tasks, peer review of controls |

## PRINCE2 Administrator Group

This group allows the user full access to the PRINCE2 sub-page under project properties, in addition to all other global rights on the PRINCE2 Project Manager.

## PRINCE2 Executive/Senior User Group

### PRINCE2-Specific Rights (all Global)

| Right Name | Description |
|---|---|
| Product Description - Edit All | Edit all Product Description objects. Includes page navigation. |
| Product Description - View All | View all Product Description objects. Includes page navigation. |
| Project Initiation Document - Edit All | Edit all Project Initiation Document objects. Includes page navigation. |
| Project Initiation Document - View All | View all Project Initiation Document objects. Includes page navigation. |
| Exception Report - Edit All | Edit all Exception Report objects. Includes page navigation. |
| Exception Report - View All | View all Exception Report objects. Includes page navigation. |
| Lessons Learned - Edit All | Edit all Lessons Learned objects. Includes page navigation. |
| Lessons Learned - View All | View all Lessons Learned objects. Includes page navigation. |
| Checkpoint Report - Edit All | Edit all Checkpoint Report objects. Includes page navigation. |
| Checkpoint Report - View All | View all Checkpoint Report objects. Includes page navigation. |
| Highlight Report - Edit All | Edit all Highlight Report objects. Includes page navigation. |
| Highlight Report - View All | View all Highlight Report objects. Includes page navigation. |
| Stage Plan - Edit All | Edit all Stage Plan objects. Includes page navigation. |
| Stage Plan - View All | View all Stage Plan objects. Includes page navigation. |
| End Stage Report - Edit All | Edit all End Stage Report objects. Includes page navigation. |
| End Stage Report - View All | View all End Stage Report objects. Includes page navigation. |
| Project - Subpage Checkpoint Report - Edit All | Edit all project objects using secured Checkpoint Report subpage. |
| Project - Subpage Checkpoint Report - View All | Navigate to all project objects using secured Checkpoint Report subpage. |
| Project - Subpage End Stage Report - Edit All | Edit all project objects using secured End Stage Report subpage. |
| Project - Subpage End Stage Report - View All | Navigate to all project objects using secured End Stage Report subpage. |
| Project - Subpage Exception Report - Edit All | Edit all project objects using secured Exception Report subpage. |
| Project - Subpage Exception Report - View All | Navigate to all project objects using secured Exception Report subpage. |
| Project - Subpage Highlight Report - Edit All | Edit all project objects using secured Highlight Report subpage. |
| Project - Subpage Highlight Report - View All | Navigate to all project objects using secured Highlight Report subpage. |
| Project - Subpage Lessons Learned - Edit All | Edit all project objects using secured Lessons Learned subpage. |
| Project - Subpage Lessons Learned - View All | Navigate to all project objects using secured Lessons Learned subpage. |
| Project - Subpage PRINCE2TM - Edit All | Edit all project objects using secured PRINCE2 subpage. |
| Project - Subpage PRINCE2TM - View All | Navigate to all project objects using secured PRINCE2 subpage. |
| Project - Subpage Product Description - Edit All | Edit all project objects using secured Product Description subpage. |
| Project - Subpage Product Description - View All | Navigate to all project objects using secured Product Description subpage. |
| Project - Subpage Project Initiation Document - Edit All | Edit all project objects using secured Project Initiation Document subpage. |
| Project - Subpage Project Initiation Document - View All | Navigate to all project objects using secured Project Initiation Document subpage. |
| Project - Subpage Stage Plan - Edit All | Edit all project objects using secured Stage Plan subpage. |
| Project - Subpage Stage Plan - View All | Navigate to all project objects using secured Stage Plan subpage. |

### Classic PPM Rights for Executive/Senior User Group

| Right Name | Type |
|---|---|
| Page - View | Instance |
| Portlet - View | Instance |
| Resource - View - All | Global |

## PRINCE2 Project Manager Group

### PRINCE2-Specific Rights (all Global)

Same as Executive/Senior User Group but also includes **Create** rights for each document type:

| Document Type | Create | Edit All | View All |
|---|---|---|---|
| Product Description | Yes | Yes | Yes |
| Project Initiation Document | Yes | Yes | Yes |
| Exception Report | Yes | Yes | Yes |
| Lessons Learned | Yes | Yes | Yes |
| Checkpoint Report | Yes | Yes | Yes |
| Highlight Report | Yes | Yes | Yes |
| Stage Plan | Yes | Yes | Yes |
| End Stage Report | Yes | Yes | Yes |

Also includes all corresponding Project - Subpage Edit All and View All rights (same as Executive/Senior User Group).

### Classic PPM Rights for Project Manager Group

In addition to Page - View, Portlet - View, and Resource - View - All, also includes:

| Right Name | Type | Description |
|---|---|---|
| Application - Create | Global | Allows creating Applications. Includes Application - Navigate. |
| Application - Navigate | Global | Allows navigating to Application pages. |
| Asset - Create | Global | Allows creating Assets. Includes Asset - Navigate. |
| Asset - Navigate | Global | Allows navigating to Asset pages. |
| Company - Create | Global | Allows viewing, editing, and creating companies. |
| Company - Document Manager - Administrate - All | Global | Allows full access to company documents and forms. |
| Knowledge Store - Access | Global | Allows creating, editing, and viewing accessible knowledge store documents. |
| Knowledge Store - Administrate | Global | Allows administering knowledge store folders and documents. |
| Other Work - Create | Global | Allows creating other work. |
| Other Work - Navigate | Global | Allows access to other work management pages. |
| Product - Create | Global | Allows creating products. Includes Product - Navigate. |
| Product - Navigate | Global | Allows navigating to product pages. |
| Project - Create | Global | Allows creating new projects. Includes Project - Create from Template. |
| Project - Enable Financial | Global | Enables financial properties for Projects. |
| Resource - Create | Global | Allows creating resources or roles. Requires Resource - Navigate. |
| Resource - Navigate | Global | Allows access to resource management pages. |
| Timesheets - Navigate | Global | Allows navigating to timesheet pages. |

## PRINCE2 Project Support Staff Group

### PRINCE2-Specific Rights (all Global - View only)

| Document Type | View All |
|---|---|
| Product Description | Yes |
| Project Initiation Document | Yes |
| Exception Report | Yes |
| Lessons Learned | Yes |
| Checkpoint Report | Yes |
| Highlight Report | Yes |
| Stage Plan | Yes |
| End Stage Report | Yes |

Also includes all corresponding Project - Subpage View All rights.

### Classic PPM Rights for Project Support Staff Group

| Right Name | Type |
|---|---|
| Page - View | Instance |
| Portlet - View | Instance |
| Resource - View - All | Global |
| Timesheets - Navigate | Global |

## PRINCE2 Senior Supplier Group

### PRINCE2-Specific Rights (all Global)

Same as Executive/Senior User Group (Edit All + View All for all document types and subpages). Does NOT include Create rights.

### Classic PPM Rights for Senior Supplier Group

Same as the Project Manager Group's Classic PPM rights (Application - Create, Application - Navigate, Asset - Create, Asset - Navigate, Company - Create, Company - Document Manager - Administrate - All, Knowledge Store - Access, Knowledge Store - Administrate, Other Work - Create, Other Work - Navigate, Product - Create, Product - Navigate, Resource - Create, Resource - Navigate, Timesheets - Navigate, Page - View, Portlet - View).

## Related
- [[Overview]]
- [[Project Portfolio Rights]]
- [[_MOC Reference]]

%%Source: p3700-3717%%

---
title: XML Open Gateway (XOG) Access Rights
tags:
  - reference
  - admin
  - dev
aliases:
  - XOG Rights
  - XML Open Gateway Rights
---
# XML Open Gateway (XOG) Access Rights

XOG access rights control who can import and export data through the XML Open Gateway interface. There are two categories of rights: rights to run the XOG client itself, and object-specific XOG access rights.

## Access Rights to Run the XOG Client

| Right Name | Type | Description |
|---|---|---|
| Administration - XOG | Global | Allows users to import and export information through the XML Open Gateway interface. |

## XOG Access Rights for Individual Objects

Each object in Clarity has a corresponding XOG Access right (Global type). These rights are named in the pattern `<Object> - Xog Access` or `<Object> - XOG Access`. Examples:

| Right Name | Type | Description |
|---|---|---|
| Cost Plan - XOG Access | Global | Allows importing and exporting cost plan instances using XOG. |
| Budget Plan - XOG Access | Global | Allows importing and exporting budget plan instances using XOG. |
| Benefit Plan - XOG Access | Global | Allows importing and exporting benefit plan instances using XOG. |
| Idea - XOG Access | Global | Allows importing and exporting Idea instances using XOG. |
| Portfolio - XOG Access | Instance | Allows importing and exporting portfolio instances using XOG. |
| Release - XOG Access | Global | Allows importing and exporting release instances using XOG. |
| Release Plan - XOG Access | Global | Allows importing and exporting Release Plan instances using XOG. |
| Team Investment - Xog Access | Global | Allows importing and exporting Team Investment instances using XOG. |
| Timesheet approval - XOG Access | Global | Allows exporting and approving timesheets using XOG. |
| Object Mapping - XOG Access | Global | Allows importing and exporting object mapping instances using XOG. |
| Process Notification - XOG Access | Global | Allows importing and exporting Process Notification instances using XOG. |
| Dashboard - Xog Access | Global | Allows importing and exporting Dashboard instances using XOG. |
| Lessons Learned - XOG Access | Global | Allows importing and exporting lessons learned data using XOG. |
| Project Charter - XOG Access | Global | Allows importing and exporting project charter documents using XOG. |
| Project Closure - XOG Access | Global | Allows importing and exporting project closure documents using XOG. |
| Project Report - XOG Access | Global | Allows importing and exporting project reports using XOG. |
| Project Scope Statement - XOG Access | Global | Allows importing and exporting project scope statements using XOG. |
| Quality Management Plan - XOG Access | Global | Allows importing and exporting quality management plan documents using XOG. |
| Risk Identification - SWOT Analysis - XOG Access | Global | Allows importing and exporting risk identification SWOT analysis documents using XOG. |
| Scope Management Plan - XOG Access | Global | Allows importing and exporting scope management plan documents using XOG. |
| Product Description - XOG Access | Global | Allows importing and exporting product description documents using XOG. |
| Project Conversion - XOG Access | Global | Allows importing and exporting project conversion instances using XOG. |
| Custom Investment Name - Xog Access | Global | Allows importing and exporting custom investment instances using XOG. |

> **Tip:** To quickly find all XOG-related rights in Clarity, go to Administration, Organization and Access, Resources or Groups. In the Access Right filter field, enter `*XOG Access` and click Filter to display all XOG access rights.

## Notes

- Most XOG rights are Global type, but some (like Portfolio - XOG Access) are Instance type.
- The `Administration - XOG` right is required to run the XOG client tool itself.
- Individual object XOG rights are required to import/export specific object types via XOG or REST API integrations.
- XOG rights can be assigned to integration users or administrators who manage data migrations and integrations.

## Related
- [[Overview]]
- [[Administration Rights]]
- [[_MOC Reference]]
- [[_MOC Development]]

%%Source: p3726%%

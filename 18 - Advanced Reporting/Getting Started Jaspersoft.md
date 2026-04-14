---
title: Recommended Jaspersoft Training
tags:
  - reference
aliases:
  - Getting Started Jaspersoft
canonical: true
audience: admin
domain: reporting
---

# Recommended Jaspersoft Training


Jaspersoft training is available from Broadcom and TIBCO Software, Inc. The following recommended training courses will help you succeed with your Jaspersoft implementation.

---

## Data Warehouse Database Schema


Schema information for Classic PPM and the data warehouse is available on the **Advanced Reporting and Database Schema Index** page. You can download and view the following information:

- Database schema information for the application and data warehouse
- An ERD diagram for the data warehouse
- Advanced Reporting domain field descriptions
- PMO Accelerator add-in information
- Jaspersoft Studio Professional Client and Report Development Guide

---

## Custom Master Objects Domain Notes


> [!note]
> Custom Master Objects do not have parent objects and are not related to any other objects in Classic PPM. Each custom object has a corresponding set in this domain. The objects in this domain are not related to each other.

**When using the Custom Master Objects domain:**

- View one custom master object at a time. When you select this domain in the Ad Hoc Viewer/Editor, select one of the custom master objects to view.
- You cannot view data for multiple custom master objects simultaneously, because the custom master objects do not have relationships with each other.
- **Data security** is determined by custom master object-level access rights. If you have rights to view a custom master object in Classic PPM, you see all data related to that custom master object in this domain, including all subobject data enabled for the data warehouse.

> [!warning]
> Do not mix calendar types. When looking at periodic data (for example, monthly data), do not mix calendar types.
> Use calendar period measures (Measures area) for calendar period fields (Fields area), and fiscal period measures for fiscal period fields.
> Do not mix period types (week, calendar, fiscal) — this produces unexpected repeated results.

---

## Training by Role


### Recommended Training for Project Managers, Business Analysts, and Portfolio Managers


| Training Material | Type | Description | Duration | Where to Find |
|---|---|---|---|---|
| Ad Hoc Views Tutorial | Video | Learn how to create and configure Ad Hoc views using the Ad Hoc Editor. Also available from the **Ad Hoc Views** tile when navigating to Advanced Reporting (requires **Advanced Reporting — Ad Hoc Create** access right). | 8 minutes | Ad Hoc Views Tutorial |
| Reports Tutorial | Video | Learn how to create and format reports from existing Ad Hoc views. Also available from the **Reports** tile in Advanced Reporting (requires **Advanced Reporting — Report Create** access right). | 9 minutes | Ad Hoc Reports Tutorial |
| Dashboards Tutorial | Video | Learn how to create dashboards and dashlets. Also available from the **Dashboards** tile in Advanced Reporting (requires **Advanced Reporting — Dashboard Create** access right). | 9 minutes | Dashboards Tutorial |

---

### Recommended Training for Administrators and General Technical Users


All of the training materials listed above plus the following:

| Training Material | Type | Description | Duration | Where to Find |
|---|---|---|---|---|
| Domains Tutorial | Video | Learn how to create domains. Also available from the **Domains** tile in Advanced Reporting (requires **Advanced Reporting — Domain Create** access right). | 8 minutes | Domains Tutorial |
| JasperReports Server How-to Videos Playlist | Video | A playlist of how-to videos for the JasperReports Server. Includes: home page and menus, Ad Hoc table view, Ad Hoc crosstab view, Ad Hoc chart view, report scheduler, and more. | — | How-to Videos Playlist |
| JasperReports Server User Guide | User Guide | Covers: Getting Started and Library pages, searching the repository, running reports, working with the Ad Hoc Editor, adding reports, creating domains, and advanced domain features. | — | JasperReports Server User Guide |
| JasperReports Server Administration Guide | Administration Guide | Detailed information about: overview of the repository, users and roles, and security; user and role management; repository administration and other resources; import and export. | — | JasperReports Server Administration Guide |

---

### Recommended Training for Report Developers


| Training Material | Type | Description | Where to Find |
|---|---|---|---|
| Getting Started Tutorials | Tutorial | Introduction topics: What is Jaspersoft Studio, Getting started, Designing a Report, Report Structure, Drag & Drop, Exporting, Expression Editor, Report variables/parameters/groups, Element styles. | Jaspersoft Community |
| Additional Tutorials | Tutorial | Advanced topics on the Jaspersoft Community site. | Jaspersoft Community |
| Jaspersoft Studio User Guide | User Guide | Covers: Studio UI, requirements, report structure, export options; JRXML, expressions, element properties, formatting, fields, parameters, variables, templates, queries, and charts. | Jaspersoft Studio User Guide |

---

## Related

- [[_MOC Advanced Reporting]]

%%Source: p3240-3244%%

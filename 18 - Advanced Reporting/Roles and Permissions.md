---
title: Advanced Reporting Roles and Permissions
tags:
  - reference
  - admin
aliases:
  - Reporting Roles
  - Jaspersoft Roles
---
# Advanced Reporting Roles and Permissions


Advanced Reporting access is controlled through Jaspersoft roles that grant both **create permissions** and **repository item permissions** (No Access, Read Only, Read and Write, Execute Only). Permissions can be granted at the role or user level.

> Source: Clarity 16.4.1 documentation, pp. 3305–3306

## Role Types


### Classic PPM Default Roles (ROLE_ prefix)
These roles are included with Classic PPM and provide **create permissions** only (not repository item permissions):

| Role | Description |
|---|---|
| ROLE_USER | Navigate to the Advanced Reporting page |
| ROLE_ADMINISTRATOR | Administer the Jaspersoft system |
| ROLE_ADHOC_DESIGNER | Create Ad Hoc views |
| ROLE_DASHBOARD_DESIGNER | Create dashboards |
| ROLE_DATASOURCE_DESIGNER | Create data sources |
| ROLE_DOMAIN_DESIGNER | Create domains |
| ROLE_REPORT_DESIGNER | Create reports |

### PMO Accelerator Roles (CSK_ prefix)
These roles are included with the PMO Accelerator add-in and set **permissions for repository items** (reports, domains, etc.).
They also update repository item permissions for the default ROLE_ roles.
These roles are designed to be used in a **matrix fashion** — a user can belong to multiple roles to accumulate permissions.

| Role | Permissions |
|---|---|
| CSK_ROLE_ADMINISTRATION | View items in Ad Hoc Views and Dashboards folders; run administration reports. Corresponds to "PMO Advanced Reporting Administration" access group. |
| CSK_ROLE_ALL_REPORTS_DOMAINS | View items in Ad Hoc Views and Dashboards; view all domains; run administration, investment, project, resource, time, and financial reports. Corresponds to "PMO Advanced Reporting All Reports and Domains" access group. |
| CSK_ROLE_APPLICATION_MANAGEMENT | View items in Ad Hoc Views and Dashboards; view the Application Management domain. Corresponds to "PMO Advanced Reporting Application Management" access group. |
| CSK_ROLE_CUSTOM_MASTER_OBJECTS | View items in Ad Hoc Views and Dashboards; view the Custom Master Objects domain. Corresponds to "PMO Advanced Reporting Customer Master Objects" access group. |
| CSK_ROLE_FINANCIAL_MANAGEMENT | View items in Ad Hoc Views and Dashboards; view the Financial Management domain; run financial reports. Corresponds to "PMO Advanced Reporting Financial Management" access group. |
| CSK_ROLE_IDEA_MANAGEMENT | View items in Ad Hoc Views and Dashboards; view the Idea Management domain. Corresponds to "PMO Advanced Reporting Idea Management" access group. |
| CSK_ROLE_INVESTMENT_MANAGEMENT | View items in Ad Hoc Views and Dashboards; view the Investment Management domain; run investment reports. Corresponds to "PMO Advanced Reporting Investment Management" access group. |
| CSK_ROLE_PROGRAM_MANAGEMENT | View items in Ad Hoc Views and Dashboards; run program reports. Corresponds to "PMO Advanced Reporting Program Management" access group. |
| CSK_ROLE_PROJECT_MANAGEMENT | View items in Ad Hoc Views and Dashboards; view the Project Management domain; run project reports. Corresponds to "PMO Advanced Reporting Project Management" access group. |
| CSK_ROLE_RESOURCE_MANAGEMENT | View items in Ad Hoc Views and Dashboards; view the Resource Management domain; run resource reports. Corresponds to "PMO Advanced Reporting Resource Management" access group. |
| CSK_ROLE_TIME_MANAGEMENT | View items in Ad Hoc Views and Dashboards; view the Time Management domain; run time reports. Corresponds to "PMO Advanced Reporting Time Management" access group. |

## How Roles Are Assigned


- Classic PPM **access rights** automatically assign users to Jaspersoft roles via the **Create and Update Jaspersoft Users** job
- Users added to a role **automatically inherit** that role's permissions
- Roles are **matrix-based**: users can be in multiple roles to accumulate permissions from each
- Users can also be granted permissions individually at the user level

## Repository Item Permissions


| Permission Level | Description |
|---|---|
| No Access | Cannot see or interact with the repository item |
| Read Only | Can view and run reports/domains but not modify |
| Read and Write | Can view, run, and modify repository items |
| Execute Only | Can run reports but cannot view the repository item in the browser |

## Access Groups in Classic PPM


CSK_ roles correspond to Classic PPM access groups under "PMO Advanced Reporting":
- PMO Advanced Reporting Administration
- PMO Advanced Reporting All Reports and Domains
- PMO Advanced Reporting Application Management
- PMO Advanced Reporting Customer Master Objects
- PMO Advanced Reporting Financial Management
- PMO Advanced Reporting Idea Management
- PMO Advanced Reporting Investment Management
- PMO Advanced Reporting Program Management
- PMO Advanced Reporting Project Management
- PMO Advanced Reporting Resource Management
- PMO Advanced Reporting Time Management

## Report-Level Security


Individual PMO Accelerator reports use their own security mechanisms independent of Jaspersoft roles:

| Report Category | Security Method |
|---|---|
| Project reports | Project view rights |
| Investment reports | Investment view rights |
| Resource reports | Resource view rights |
| Financial reports | Investment view rights |
| Program reports | Project view rights |
| Portfolio reports | Portfolio view rights |
| Administration reports | No security (admin access implied by role) |

## Related

- [[_MOC Advanced Reporting]]
- [[PMO Accelerator Setup]]
- [[Getting Started Jaspersoft]]

%%Source: p3305-3306%%

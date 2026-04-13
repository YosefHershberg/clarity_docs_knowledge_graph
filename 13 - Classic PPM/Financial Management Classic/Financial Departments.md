---
title: Financial Departments Setup (Classic PPM)
tags:
  - classic
  - howto
  - admin
source_pages: 2176-2179
---
# Set Up Financial Departments (Classic PPM)

Financial departments represent units in the organizational structure of your company. A department can be:
- **IT Provider** — Owns investments or services to which other departments can subscribe
- **IT Customer** — Subscribes to investments or services that an IT provider department provides

## Prerequisites

Before working with departments:
- Create a financial entity
- (Optional) Associate the department with locations
- (Optional) Associate resources with the department
- (Optional) Associate investments with the department

## Create Departments

When you create a department, a corresponding OBS unit is also created based on the selected entity and the parent department.

### Steps

1. Open **Home > Organization > Departments**
2. Click **New**
3. Complete the requested information:
   - **Entity** — Entity for the department (cannot be changed after creation)
   - **Parent Department** — Parent department if this is a sub-department
   - **IT Customer** — Mark if subscribes to services from other departments
   - **IT Provider** — Mark if owns investments/services for other departments to subscribe
   - **Department Manager** — Automatically granted the Department - Edit access right (Default: current user)
   - **Business Relationship Manager** — Liaison between departments; automatically granted Department - View access right
   - **Delegate Invoice Approval** — Whether invoice approval delegates to sub-departments (if unselected, charges roll up to top-level parent)
4. Save changes

### Deletion Rules

A department can be deleted only when:
- Not referenced in the financial cost/rate matrix
- No associated financial transactions (posted or unposted)
- Not set as a default system department
- No financially enabled resource using this department
- No financially enabled project using this department
- Not associated with a location

## Define the Department Budget

1. Open **Home > Organization > Departments**
2. Click the department
3. Click **Properties > Budget**
4. Complete or review the fields:
   - **Currency** — System currency (display-only)
   - **Budget Equals Planned Values** — If cleared, you can manually define budget values
   - **Planned Cost / Planned Cost Start / Planned Cost Finish** — Planned cost and date range
   - **Planned Benefit / Planned Benefit Start / Planned Benefit Finish** — Planned benefit and date range
   - **Budget Cost / Budget Cost Start / Budget Cost Finish** — Budgeted cost and date range
   - **Budget Benefit / Budget Benefit Start / Budget Benefit Finish** — Budgeted benefit and date range
5. Save changes

> **Note:** Financial metrics such as NPV, IRR, MIRR, Breakeven, and Payback Period are not available on department properties by default. Configure the Department Properties view in Studio to display them.

## Manage Department Locations

A department can be associated with multiple locations (from the same entity).

- Open the department > click **Locations** to view, add, or remove locations
- You can remove a department-location association only if:
  - No resources are using that location and department
  - No projects are using that location and department
  - No posted or unposted transactions use that location and department

## Manage Department Resources

Resources become members of a department by associating them with a department OBS on their resource properties page. A resource can belong to only one department.

### View Resource Allocation for Departments

1. Open the department > click **Resources**
2. In the **Department Resource Aggregation** section, review:
   - **Department** — Current department and sub-departments
   - **Allocation** — Aggregated FTE availability per time period
3. In the **Department Resources** section, click a resource link to view/edit properties or allocations

### Plan Resource Capacity

1. Open the department > click **Resources**
2. Open the **Scenario** menu to create/manage capacity planning scenarios

## Manage Department Investments

Investments are tied to a department via the investment's department OBS. An investment can belong to only one department.

1. Open the department > click **Investments**
2. Click an investment link to view or edit it

## Related Notes

- [[Financial Locations]] — Set up geographic locations
- [[Financial Processing Setup]] — Enable investments and resources
- [[Overview]] — Full financial management setup order
- [[_MOC Classic PPM]]

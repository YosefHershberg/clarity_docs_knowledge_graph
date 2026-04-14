---
title: Set Up Financial Departments
tags:
  - admin
  - howto
aliases:
  - Financial Departments
  - Departments
canonical: true
audience: finance, admin
domain: financials
---
# Set Up Financial Departments

Financial departments represent units in the organizational structure of your company. You can set up a department as one of the following types:

- **IT Provider** — The department owns investments or services to which other departments can subscribe.
- **IT Customer** — The department subscribes to investments or services that an IT provider department provides.

> [!NOTE]
> Financial departments are step 4 in the [[Financial Entity Setup|Financial Management setup sequence]]: Currencies → Entity → Locations → **Departments** → Classes → Matrix → Cost Plus Codes → Defaults.

## Prerequisites

Set up the following items before working with departments:

1. Create a [[Financial Entity Setup|financial entity]].
2. (Optional) Associate the department with [[Financial Locations|locations]].
3. (Optional) Associate resources with the department.
4. (Optional) Associate investments with the department.

---

## Create Departments

You create a department by naming it, associating it with an entity, and optionally selecting a parent department, department manager, and business relationship manager.

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Click **New**.
3. Complete the requested information:

| Field | Description |
|-------|-------------|
| **Entity** | Defines the entity to associate an organizational structure and financial planning defaults. Cannot be changed after creation. |
| **Parent Department** | Specifies the parent department for this department. |
| **IT Customer** | Indicates the department is a subscriber. |
| **IT Provider** | Indicates the department owns investments or services. |
| **Department Manager** | Specifies the department manager. Automatically granted the Department - Edit access right. |
| **Business Relationship Manager** | Defines the liaison between this department and other departments. |
| **Delegate Invoice Approval** | Indicates if invoice approval must be delegated to sub departments. |

4. Save the changes.

> [!NOTE]
> You can edit a department after creating it. If you have not associated a department with a location, you can delete it. When you delete a department, its sub departments are also deleted.

### Conditions for Deleting a Department

You can delete a department only when ALL of the following are true:

- The department is not referenced in the financial cost/rate matrix.
- The department does not have associated financial transactions.
- The department is not set as a default system department.
- A financially enabled resource is not using the department.
- A financially enabled project is not using the department.
- The department is not associated with a location.

---

## Define the Department Budget

You can plan for and track budgeted costs and benefits for your department.

> [!NOTE]
> Financial metrics (NPV, ROI, Breakeven, IRR, MIRR, Payback Period) are not displayed on department properties by default. Configure the Department Properties view for the Department object to display these metrics.

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Click the department.
3. Click **Properties**, **Budget**. The budget properties page appears.
4. Complete or review the following fields:

| Field | Description |
|-------|-------------|
| **Currency** | Displays the selected system currency. |
| **Budget Equals Planned Values** | Indicates whether budget cost and benefit values equal planned cost and budget values. |
| **Planned Cost** | Defines the planned costs for the department. |
| **Planned Cost Start / Finish** | Defines the dates when the planned cost starts and finishes. |
| **Planned Benefit** | Defines the total planned benefit the department receives. |
| **Planned Benefit Start / Finish** | Defines the dates when planned benefit starts and finishes. |
| **Budget Cost** | Defines the budgeted cost for the department. |
| **Budget Cost Start / Finish** | Defines the dates when the budget cost starts and finishes. |
| **Budget Benefit** | Defines the total budgeted benefit the department receives. |
| **Budget Benefit Start / Finish** | Defines the dates when budgeted benefit starts and finishes. |

5. Save the changes.

---

## Manage Department Locations

You can associate a department to multiple locations by opening the department and clicking **Locations**. The locations must be from the same entity as the department.

> [!TIP]
> See [[Financial Locations]] for how to create locations and manage the reverse association (from location to department).

---

## Manage Department Resources

Resources become members of a department when you associate them with a department OBS in the resource properties page. A resource can belong to only one department.

### View Resource Allocation for Departments

Follow these steps:

1. Open **Home**, and from **Organization**, click **Departments**.
2. Click the department and click **Resources**. The department resources page appears.
3. In the **Department Resource Aggregation** section, review the following fields:
   - **Department** — Displays the department or any of its sub departments.
   - **Allocation** — Displays the aggregated full-time employee availability for each time period.
4. In the **Department Resources** section, view the list of resources associated with the department.

### Plan Resource Capacity

Follow these steps:

1. With the department open, click **Resources**. The department resources page appears.
2. Open the **Scenario** menu and use scenarios to plan resource capacity.

> [!TIP]
> Scenarios allow you to model different staffing configurations before committing to a plan. See [[_MOC Resource Management]] for more on resource capacity planning.

---

## Manage Department Investments

Investments are tied to a department when they are associated with a department OBS in the investment properties. An investment can belong to only one department.

Follow these steps:

1. With the department open, click **Investments**. The investments list appears.
2. Click an investment link to view or edit the investment.

---

## Related

- [[Financial Entity Setup]] — Prerequisites: entity must exist before departments
- [[Financial Locations]] — Associate locations with departments
- [[Cost Rate Matrix]] — Departments can be columns in cost/rate matrices
- [[GL Accounts and Chargebacks]] — Chargebacks transfer costs between departments
- [[Financial Rights]] — Access rights for departments
- [[_MOC Financials]] — Financial Management overview

%%Source: p2154-2162%%

---
title: Set Up Financial Locations
tags:
  - admin
  - howto
aliases:
  - Financial Locations
  - Locations
canonical: true
audience: finance, admin
domain: financials
---
# Set Up Financial Locations

Financial locations represent the geographical locations where a company conducts its business — such as a city, state, or country. Locations are uniquely associated with one [[Financial Entity Setup|financial entity]].

> [!NOTE]
> Financial locations are step 3 in the [[Financial Entity Setup|Financial Management setup sequence]]: Currencies → Entity → **Locations** → Departments → Classes → Matrix → Cost Plus Codes → Defaults.

## Overview

Locations serve as a key dimension in the financial organizational structure. They:
- Are owned by exactly one entity.
- Can be organized in a parent-child hierarchy.
- Can be associated with multiple [[Financial Departments|departments]] (which must belong to the same entity).
- Are used as a grouping attribute in cost plans and financial reporting.
- Feed into [[GL Accounts and Chargebacks|chargeback]] rules and [[Cost Rate Matrix|cost/rate matrices]].

---

## Create Locations and Associate Them to an Entity

Follow these steps:

1. Open **Administration**, and from **Finance**, click **Setup**. The financial organizational structure appears.
2. Click **Locations**.
3. Click **New** and complete the requested information:

| Field | Description |
|-------|-------------|
| **Entity** | Specifies the entity to which this location belongs. This field cannot be changed after saving. |
| **Parent** | Specifies the parent location to which this location belongs (builds the location hierarchy). |
| **Name** | A descriptive name for the location (e.g., New York, EMEA, North America). |

4. Save the changes.

> [!WARNING]
> After you create a location, you cannot delete it if it is associated with any department, entity, system defaults, resources, chargebacks, or GL allocation.

---

## Location Hierarchy

Locations support a parent-child hierarchy, allowing you to model your geographic structure at multiple levels of granularity. For example:

```
North America (parent)
├── United States
│   ├── New York
│   └── San Francisco
└── Canada
    └── Toronto
```

To build the hierarchy, set the **Parent** field when creating each child location.

---

## Associate Departments with Locations

You can link departments to a location from the location properties page. Departments and locations must belong to the same entity.

Follow these steps:

1. Open the location.
2. Click **Properties**, **Departments**.
3. Click **Add**.
4. Select the check box next to each department and click **Add**.

> [!TIP]
> You can also manage location associations from the department side. Open a department, click **Locations**, and add locations from there.

---

## Remove Department Associations from Locations

You can remove the association between a department and a location only if ALL of the following are true:

- Financially enabled investments are not using it.
- Financial transactions are not associated with it.
- A financially enabled resource is not using it.

---

## Using Locations in Financial Planning

Once locations are created and linked to departments, they become available as:

- **Grouping attributes** in [[Cost Plans|cost plans]] and [[Budget Plans|budget plans]] — allows cost plan line items to be broken down by location.
- **Columns** in the [[Cost Rate Matrix]] — allows different rates to be applied per location.
- **Dimensions** in [[GL Accounts and Chargebacks|chargeback rules]] — allows inter-department charge allocation by geography.

---

## Related

- [[Financial Entity Setup]] — Entity must exist before locations can be created
- [[Financial Departments]] — Associate departments with locations
- [[Cost Rate Matrix]] — Locations as cost/rate matrix dimensions
- [[GL Accounts and Chargebacks]] — Locations in chargeback rules
- [[Financial Rights]] — Access rights for locations
- [[_MOC Financials]] — Financial Management overview

%%Source: p2162-2163%%

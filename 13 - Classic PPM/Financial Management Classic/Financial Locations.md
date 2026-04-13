---
title: Financial Locations Setup (Classic PPM)
tags:
  - classic
  - howto
  - admin
source_pages: 2179-2181
---
# Set Up Financial Locations (Classic PPM)

Financial locations represent the geographical locations where a company conducts its business (city, state, or country). Locations are uniquely associated with one entity. If multiple entities share the same physical location, define separate location entries for each entity.

## Key Concepts

- Each location can have an address, telephone number, and manager name
- A location can be associated with many departments, and a department with many locations
- Locations can be parent locations to other locations (e.g., country → state → city), automatically creating OBS structure
- Locations are uniquely named per entity using unique identifiers

**Example:** If two entities share the same office building, create two location OBS structures (e.g., `frd_locations` and `fi_locations`) and name the city locations uniquely.

## Create Locations and Associate with an Entity

1. Open **Administration > Finance > Setup**
2. Click **Locations**
3. Click **New** and complete:
   - **Entity** — The entity this location belongs to (cannot be changed after saving)
   - **Parent** — The parent location this location belongs to (optional)
   - Other identifying information (name, address, phone, manager)
4. Save changes

> **Note:** After creating a location, you can edit some attributes. You **cannot delete** a location that is used or associated with: departments, supplemental customer information, entities, system defaults, unposted/adjustment transactions, resources, chargebacks, or GL allocations.
>
> To view sub-locations of a parent location: Open the parent location > Properties menu > **Sub-locations**.

## Associate Departments with Locations

A location can be associated with multiple departments from the same entity.

1. Open the location
2. Click **Properties > Departments**
3. Click **Add**
4. Select departments and click **Add**

## Remove Department Associations from Locations

You can remove a department-location association only when **all** of the following are true:
- No financially enabled investments are using it
- No financial transactions are associated with it
- No financially enabled resource is using it

## Common Location Architecture

For organizations with multiple entities in the same geography:

```
Entity A Locations (frd_locations)
├── US
│   ├── New York - FRD
│   └── Boston - FRD

Entity B Locations (fi_locations)
├── US
│   ├── New York - FI
│   └── Boston - FI
```

Each entity's location hierarchy creates the matching location OBS structure for financial processing.

## Related Notes

- [[Financial Departments]] — Set up departments and associate with locations
- [[Financial Processing Setup]] — Enable investments, resources, roles
- [[Overview]] — Full financial management setup order
- [[_MOC Classic PPM]]

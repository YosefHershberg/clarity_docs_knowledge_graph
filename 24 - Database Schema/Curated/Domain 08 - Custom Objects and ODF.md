---
title: Domain 08 - Custom Objects and ODF
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 8
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/odf
---

# Domain 08 — Custom Objects and ODF Metadata

The Object Definition Framework (ODF) is what Studio configures: custom objects, custom attributes on built-in objects, sub-objects, lookups, processes, etc. **Metadata** lives in `ODF_*` tables; **user data** for each object lives in `ODF_CA_<object_code>`.

> [!warning] Most ODF metadata tables are off-screen in 16.4.1
> [[ODF_OBJECTS]], [[ODF_ATTRIBUTES]], and the per-object `ODF_CA_*` tables are not in the 16.4.1 dump. The mapping bridge [[ODF_OBJECT_INSTANCE_MAPPINGS]] (and [[ODF_OBJECT_INSTANCE_MAPPING]] singular variant) is in the dump and is heavily used. **Verify column names via `INFORMATION_SCHEMA.COLUMNS`** before relying on the legacy KB lists below.

## Tables in this domain

- [[ODF_OBJECTS]] — master list of every Studio object (off-screen)
- [[ODF_ATTRIBUTES]] — catalog of every attribute (off-screen)
- `ODF_CA_<object_code>` — per-object custom-attribute data (one such table per object, off-screen)
- [[ODF_OBJECT_INSTANCE_MAPPINGS]] — bridge for typed cross-object links (in dump)
- [[ODF_MULTI_VALUED_LOOKUPS]] — multi-value attribute storage (in dump)
- [[ODF_BLUEPRINT_DETAILS]] — blueprint configuration (in dump)

## ODF_OBJECTS

> [!info] Purpose
> Master list of every Studio object (built-in and custom).

- **Primary key.** `ID`.
- **Key columns (legacy KB — verify on [[ODF_OBJECTS]]).** `CODE` (the object code, used as suffix in `ODF_CA_<code>`), `OBJECT_NAME`, `IS_CUSTOM`, `PARTITIONABLE`, `PARENT_OBJECT_CODE` (for sub-objects).

## ODF_ATTRIBUTES

> [!info] Purpose
> Catalog of every attribute (column) on every object — both built-in and custom.

- **Primary key.** `ID`.
- **Key columns (legacy KB — verify).** `OBJECT_CODE` → [[ODF_OBJECTS]].`CODE`, `ATTRIBUTE_CODE` (column suffix or actual column name), `DATA_TYPE`, `IS_REQUIRED`, `IS_CUSTOM`, `LOOKUP_TYPE` (if attribute is lookup-driven), `MAX_LENGTH`, `IS_VIRTUAL`.

## ODF_CA_<object_code>

> [!info] Purpose
> Per-object custom-attributes data. **One such table per object**, named by suffix.

- **Examples (all off-screen in 16.4.1 dump):**
  - [[ODF_CA_PROJECT]] — custom attributes on projects (joins `ID = INV_INVESTMENTS.ID`)
  - [[ODF_CA_RESOURCE]] — custom attributes on resources (joins `ID = SRM_RESOURCES.ID`)
  - [[ODF_CA_APPLICATION]], [[ODF_CA_IDEA]] — same pattern for other built-in investments
  - `ODF_CA_<your_object_code>` — for custom Studio objects
- **Primary key.** `ID` — same as the parent object's `ID`.
- **Custom attribute column prefix.** Historically `Z_` (depends on configuration); built-in objects' "stock custom" attributes show with their attribute code.

## ODF_OBJECT_INSTANCE_MAPPINGS

> [!info] Purpose
> Polymorphic typed bridge between two object instances. Used for many-to-many or typed-relationship cases (e.g. investment ↔ financial properties).

- **In dump.** [[ODF_OBJECT_INSTANCE_MAPPINGS]] (and the singular variant [[ODF_OBJECT_INSTANCE_MAPPING]]).
- **Pattern.** Two `(Code, ID)` pairs identify the source and target objects:
  - `Primary_Object_Instance_Code` + `Primary_Object_Instance_Id`
  - `Secondary_Object_Instance_Code` + `Secondary_Object_Instance_Id`
- **Example.** Project ↔ Financials mapping uses `('project', INV_INVESTMENTS.ID)` ↔ `('financials', FIN_FINANCIALS.ID)`.

## ODF_SUBOBJECTS / ODF_OBJECT_INSTANCES

> [!info] Purpose
> For Studio-defined sub-objects (e.g. "Risk" as a sub-object of Project), the Studio-generated table is named like the object: `ODF_CA_<sub_object_code>`. The link to parent is via `ODF_PARENT_ID`.

## Finding the table/column for a Studio attribute (the documented procedure)

1. Studio → Objects → `<object>` → Attributes.
2. Each attribute row shows **Database Table** and **Database Column** explicitly.
3. For custom attributes on built-in objects, the table is `ODF_CA_<built_in_code>`.
4. For sub-objects, the table is `ODF_CA_<sub_object_code>` and the link to parent is `ODF_PARENT_ID`.

## Typical query

```sql
-- Project + custom attributes (LEFT JOIN because the table may have no row for some projects)
SELECT  i.ID, i.CODE, i.NAME, op.*
FROM    INV_INVESTMENTS  i
JOIN    INV_PROJECTS     p   ON p.PRID = i.ID
LEFT    JOIN ODF_CA_PROJECT op ON op.ID = i.ID
WHERE   i.ODF_OBJECT_CODE = 'project'
  AND   i.IS_ACTIVE       = 1
  AND   p.IS_TEMPLATE     = 0;
```

## Gotchas

> [!warning] `ODF_CA_*` tables exist only after at least one row is created
> On a vanilla install, the table for a stock object may have no rows even though every project has an ID — that's fine; LEFT JOIN.

> [!warning] Lookup-typed custom attributes
> Store the **lookup code** or **lookup ID** depending on attribute config — check [[ODF_ATTRIBUTES]] for the attribute's `LOOKUP_TYPE` and `DATA_TYPE`.

> [!warning] Multi-valued attributes go to a side table
> `ODF_MVA_<object>_<attr>` (or [[ODF_MULTI_VALUED_LOOKUPS]] for shared MVA storage), rather than a column on `ODF_CA_*`.

## See also
- [[Domain 01 - Investments and Projects]] — `ODF_OBJECT_CODE` discriminator
- [[Domain 07 - Lookups and NLS]] — lookup-typed attributes resolve through [[CMN_LOOKUPS_V]]
- [[Universal Conventions]]
- [[_MOC - Curated SQL Knowledge]]

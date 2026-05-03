---
title: Dummy Lookups (Dynamic Calculated Values on Object Pages)
tags:
  - dev
  - howto
aliases:
  - Dummy Lookup
  - Dummy Lookups
  - Dynamic Calculated Lookup
  - Auto Generated Lookup
  - Dynamic Lookup Trick
canonical: true
audience: dev
domain: development
---
# Dummy Lookups — Dynamic Calculated Values on Object Pages

## What this technique does

Displays **any dynamically-derived value** on a Clarity object's edit/properties page — values that the stock attribute toolkit (calculated, formula, virtual) cannot produce.

Use it for:
- Derived values from arbitrary SQL against the current object (richer than a stock Calculated attribute)
- "Looked-up" values from another related object
- Dynamically-generated **hyperlinks** to other Clarity pages (e.g., a portlet page with URL parameter)
- Dynamically-generated hyperlinks to external systems
- Aggregated HTML fragments (e.g., a `<table>` of related rows)
- Results from a database function (use this for complex logic — see "Tip: push complexity into a DB function")

The trick is to abuse a **dynamic NSQL lookup** so that:
- The lookup's **hidden key is always a constant** (`1`)
- The lookup's **display attribute is whatever you want to compute** (text, HTML, link)
- The current object's ID is fed in as the lookup parameter

The attribute on the object is a regular single-value lookup with default `1` and read-only — so every record renders the computed value at page-load time.

> [!NOTE] Origin
> Technique documented by David Morton (Capgemini) in 2012. Verified working from Clarity v13 onward, both Oracle and SQL Server. Applies to Classic PPM object edit pages.

---

## How it works (mental model)

A normal lookup says: *"the user picks one of N rows; we store its hidden key and show its display attribute."*

A dummy lookup inverts that:
- There is **exactly one row** the user can ever pick: hidden key `1`.
- The display attribute is **computed at query time** from a parameter (the object's ID).
- The attribute's stored value is always `1` — the rendered text is the calc result.

Because the lookup is parameterized and read-only, the calculation re-runs every time the page renders, giving you a live derived field.

---

## The four steps

### Step 1 — Work out the SQL that derives your value

Write the bare SQL that, given an object's ID, returns the value you want to show. Validate it against the database directly first.

**Oracle example** — last time the STATUS attribute on a Risk record was changed (audit trail lookup):

```sql
SELECT TO_CHAR(MAX(created_date), 'dd/mm/yyyy') AS calc_value
FROM CMN_AUDITS
WHERE object_code = 'risk'
  AND object_id   = <<my parameter id>>
  AND table_name  = 'rim_risks_and_issues'
  AND column_name = 'STATUS_CODE'
```

Performance matters — this query runs on **every page render** for every record displayed. Make sure it hits an index.

### Step 2 — Wrap the SQL in a Dynamic NSQL Lookup

Create a new lookup in **Administration > Studio > Lookups**, choosing **Dynamic Query**.

Wrap your SQL in this NSQL skeleton:

```sql
SELECT
  @SELECT:1:DUMMY_ID@,
  @SELECT:X.CALC_VALUE:CALC_VALUE@
FROM (
    -- << your SQL from Step 1, with the parameter spliced in >>
    UNION
    SELECT TO_XXXX(NULL) FROM DUAL
    WHERE @WHERE:PARAM:USER_DEF:INTEGER:parm_id@ IS NULL
) X
WHERE @FILTER@
```

Notes on the skeleton:

1. **`@SELECT:1:DUMMY_ID@`** — hard-codes `1` as the hidden key. Every row this lookup can ever return has hidden key `1`.
2. **The `UNION` branch** — guarantees that when no parameter is passed (i.e. the lookup browse window opens with nothing in URL context), at least one row exists with hidden key `1` so the user can pick the default. Without it, the lookup browser is empty and you cannot set the default.
3. **`TO_XXXX(NULL)`** — must be cast to the **same data type** as `CALC_VALUE`. `TO_CHAR(NULL)` for strings, `TO_NUMBER(NULL)` for numbers, etc. SQL Server: `CAST(NULL AS NVARCHAR(MAX))`.
4. **`parm_id`** — the parameter name you'll reference in Step 3. The data type (here `INTEGER`) must match what the parameter mapping will send (object ID is integer).
5. **`@FILTER@`** — required by NSQL; goes outside the inline view.

**Filled-in Oracle example** for the Risk audit case:

```sql
SELECT
  @SELECT:1:DUMMY_ID@,
  @SELECT:X.CALC_VALUE:CALC_VALUE@
FROM (
    SELECT TO_CHAR(MAX(created_date), 'dd/mm/yyyy') AS calc_value
    FROM CMN_AUDITS
    WHERE object_code = 'risk'
      AND object_id   = @WHERE:PARAM:USER_DEF:INTEGER:ri_id@
      AND table_name  = 'rim_risks_and_issues'
      AND column_name = 'STATUS_CODE'
    UNION
    SELECT TO_CHAR(NULL) FROM DUAL
    WHERE @WHERE:PARAM:USER_DEF:INTEGER:ri_id@ IS NULL
) X
WHERE @FILTER@
```

In the lookup's **Parent Window** tab:
- **Hidden Key** = `dummy_id`
- **Display Attribute** = `calc_value`

(Other lookup settings — sort columns, browse layout — do not matter; the user never browses this lookup in practice.)

### Step 3 — Create the Dummy Attribute on the Object

Open the target object in Studio and create a new attribute:

| Field | Value |
|-------|-------|
| Name / ID | Use a clear `dummy_*` naming convention (e.g., `dummy_status_change_date`) |
| Data Type | **Lookup — Single Value** |
| Lookup | Select the lookup you built in Step 2 |
| API Attribute ID | `p_<attribute_id>` per [[Objects and Attributes#API Enable Custom Attributes\|project convention]] |

Click **Save**. The page redraws with extra sections.

In the **Parameter Mappings** section (bottom of the page):
- Map your parameter (e.g., `ri_id`) to **Object Id** — assuming the SQL keys off the current object's ID. (You can map to a different attribute if your derivation keys off something else.)

Click **Save** again.

In the **Default** field, click the binoculars and pick `1` — the only available value (the one provided by the `UNION` branch of the lookup).

> The default may **display as empty** after you pick it. That is normal — the chosen "1" row's display attribute is `NULL` (because the parameter is `NULL` when browsing).

Check **Populate Null Values with the Default** — this back-fills the `1` value into existing records so the calc fires for them too.

Check **Read-Only** — critical. If left editable the field appears as an editable lookup on screen.

Click **Save** again. (On a high-volume object the back-fill may take a moment.) After the save, the default may now display as `null` and the **Populate Null Values with the Default** checkbox un-checks itself — both are normal.

### Step 4 — Display on the Edit View

Add the dummy attribute to the object's **Edit View** layout in Studio.

Don't bother adding it to the Create View — the parameter (the object's ID) doesn't exist yet at create time, so the calc is meaningless there. The only exception is if you're using this trick to render a system-wide value that doesn't depend on the object instance.

That's it. Reload the object and the field will show your computed value.

---

## Common variations

### Variation 1 — Dynamic hyperlink to an external/internal URL

Display a clickable link whose `href` is built from data on the current object.

```sql
SELECT
  @SELECT:1:DUMMY@,
  @SELECT:X.details:template_details@
FROM (
    SELECT
      '<a href="' || T.template_link || '" target="_blank">Link to TEMPLATE</a>' AS details
    FROM odf_ca_XXXXXX T
    JOIN odf_ca_YYYYYY R ON R.item = T.ID
    WHERE R.ID = @WHERE:PARAM:USER_DEF:INTEGER:object_id@
    UNION
    SELECT 'DUMMY' FROM DUAL
    WHERE @WHERE:PARAM:USER_DEF:INTEGER:object_id@ IS NULL
) X
WHERE @FILTER@
```

### Variation 2 — Link to a Clarity portlet page passing object ID as a drill-through

```sql
SELECT
  @SELECT:1:DUMMY@,
  @SELECT:X.link_details:link_details@
FROM (
    SELECT
      '<a href="' ||
      TO_CHAR(SUBSTR(VALUE,
        INSTR(VALUE, 'schedulerUrl="') + 14,
        INSTR(SUBSTR(VALUE, INSTR(VALUE, 'schedulerUrl="') + 14), '"') - 1
      )) ||
      '/niku/nu#action:MY_PORTLET_PAGE&drill_prj=' ||
      @WHERE:PARAM:USER_DEF:INTEGER:object_id@ ||
      '" target="_blank">Link to PORTLET PAGE</a>' AS link_details
    FROM cmn_config
    WHERE NAME = 'properties.xml'
    UNION
    SELECT 'N/A - No link available' FROM DUAL
    WHERE @WHERE:PARAM:USER_DEF:INTEGER:object_id@ IS NULL
) X
WHERE @FILTER@
```

The `cmn_config` lookup pulls the configured Clarity scheduler URL so the link is environment-portable.

### Variation 3 — HTML table of related rows (SQL Server)

Aggregate multiple related rows into a single HTML `<table>` inside the calc value. SQL Server uses `FOR XML PATH` + `STUFF` to concatenate.

This is the actual production query that lives at `dynamic lookup with link.txt` in the workspace:

```sql
SELECT
  @SELECT:1:DUMMY@,
  @SELECT:Q.calc_value:calc_value@
FROM (
    SELECT
      N'<table>' +
      STUFF(
        REPLACE(
          (SELECT N'<tr><td><a href="/pm/#/project/' + CAST(id AS NVARCHAR) + N'/details">' + code + ' - ' + name + N'</a></td></tr>'
           FROM (
               SELECT DISTINCT id, code, name
               FROM niku.inv_investments inv
               WHERE IS_ACTIVE = 1
                 AND ODF_OBJECT_CODE = 'project'
                 AND IDEA_ID = @WHERE:PARAM:USER_DEF:INTEGER:ID@
               UNION ALL
               SELECT DISTINCT inv_prj.id, inv_prj.code, inv_prj.name
               FROM niku.INV_HIERARCHIES ih
               JOIN niku.INV_INVESTMENTS inv_idea
                 ON ih.CHILD_ID = inv_idea.id
                AND inv_idea.IS_ACTIVE = 1
                AND inv_idea.ODF_OBJECT_CODE = 'idea'
               JOIN niku.INV_INVESTMENTS inv_prj
                 ON ih.PARENT_ID = inv_prj.id
                AND inv_prj.IS_ACTIVE = 1
                AND inv_prj.ODF_OBJECT_CODE = 'project'
               WHERE inv_idea.id = @WHERE:PARAM:USER_DEF:INTEGER:ID@
           ) a
           FOR XML PATH(''), TYPE).value('(./text())[1]', 'NVARCHAR(MAX)'),
          ' | ', '/'
        ),
        1, 0, ''
      ) + N'</table>' AS calc_value
    UNION
    SELECT ' '
    FROM dual
    WHERE @WHERE:PARAM:USER_DEF:INTEGER:ID@ IS NULL
) Q
WHERE @FILTER@
```

What this does: from a given **Idea** instance, render an HTML table linking to every related **Project** — both directly via `IDEA_ID` and indirectly via the [[INV_HIERARCHIES]] parent/child graph.

> [!NOTE] SQL Server `dual` quirk
> SQL Server has no built-in `DUAL`. Clarity environments running on MSSQL typically have a one-row `niku.dual` view defined for portability with Oracle-style queries. If your environment doesn't, substitute `(SELECT 1) dual` or similar.

### Variation 4 — Push complexity into a database function

When the calc logic gets gnarly, write a stored function and call it from the lookup. Keeps the NSQL trivial and the logic version-controlled in your DB scripts.

```sql
SELECT
  @SELECT:1:DUMMY_ID@,
  @SELECT:X.CALC_VALUE:CALC_VALUE@
FROM (
    SELECT Z_my_package.Z_my_function(@WHERE:PARAM:USER_DEF:INTEGER:obj_id@) AS CALC_VALUE
    FROM dual
) X
WHERE @FILTER@
```

### Variation 5 — Parameter sourced from another attribute (not Object Id)

The standard recipe maps the lookup parameter to **Object Id** so the calc keys off the current record. But the parameter can be mapped to **any attribute on the object** — including a foreign-key picker. This lets you compute a value derived from the *picked* entity rather than the current record.

Example: on a custom object that has a **Resource picker** attribute, show the count of active projects the picked resource works on (is a team member of).

```sql
SELECT
  @SELECT:1:DUMMY_ID@,
  @SELECT:X.CALC_VALUE:CALC_VALUE@
FROM (
    SELECT CAST(COUNT(DISTINCT t.PRPROJECTID) AS NVARCHAR(20)) AS CALC_VALUE
    FROM   niku.PRTEAM           t
    JOIN   niku.INV_INVESTMENTS  i
           ON  i.ID              = t.PRPROJECTID
           AND i.IS_ACTIVE       = 1
           AND i.ODF_OBJECT_CODE = 'project'
    WHERE  t.PRRESOURCEID = @WHERE:PARAM:USER_DEF:INTEGER:resource_id@
    UNION
    SELECT CAST(NULL AS NVARCHAR(20))
    FROM   niku.dual
    WHERE  @WHERE:PARAM:USER_DEF:INTEGER:resource_id@ IS NULL
) X
WHERE @FILTER@
```

In Studio, **Parameter Mappings** for this attribute → map `resource_id` to your **Resource picker attribute** (NOT Object Id). Everything else (default `1`, Read-Only, Populate Nulls, Edit View) follows the standard four-step recipe.

> [!warning] Parameter type must match the picker's hidden key
> Standard Resource Browse lookups store [[SRM_RESOURCES]].`ID` (integer) — use `INTEGER`. If your picker is a custom NSQL lookup that stores `UNIQUE_NAME` (string), use `STRING` for the parameter and join through `SRM_RESOURCES.UNIQUE_NAME` to get the ID.

> [!info] Recompute requires a save + reload
> The dummy lookup re-runs only at page render. Changing the picker in-place does **not** refresh the count — the user must save and reopen the record. This is a hard limit of the technique, not something you can work around without a custom UI.

The same pattern works for any picker → derived value: pick an OBS unit and show its descendant count, pick an investment and show its open task count, pick a manager and show their direct-report count, etc. The recipe is mechanical — only the SQL and parameter mapping change.

---

## Pitfalls and limitations

| Issue | Cause | Fix |
|-------|-------|-----|
| Field shows blank on **List Views** | The parameter (object ID) is not passed in the list-view context — the lookup runs with `parm_id IS NULL` and falls into the `UNION` branch. | Don't use this trick on list views. Properties / Edit views only. |
| Field is **editable** on the page | Read-Only checkbox not set on the attribute. | Set Read-Only on the attribute. (Alternative: configure `[Fields]` settings to enter-once + drop-down display, but Read-Only is simpler.) |
| Lookup browser is **empty**, can't set default `1` | Missing the `UNION ... WHERE ... IS NULL` branch in the NSQL. | Add the `UNION` branch — it provides the seed `1` row when the parameter is null. |
| `to_char(null)` cast error | Returned `calc_value` is not a string — type mismatch in the `UNION`. | Cast the `NULL` to the same type as `calc_value`. `TO_CHAR`/`TO_NUMBER`/`TO_DATE` for Oracle; `CAST(NULL AS ...)` for SQL Server. |
| Date `calc_value` displays badly | Clarity formats lookup values via locale rules that don't always honour explicit date masks. | Return the date as a pre-formatted string (`TO_CHAR(d, 'dd/mm/yyyy')`) instead of a native `DATE`. |
| Page is slow | The calc SQL runs on every page render. | Profile the query, ensure it hits indexes, push heavy logic into a DB function with proper caching, or accept the trade-off. |
| Hidden key exceeds 30 chars | Not relevant here — hidden key is always `1`. | N/A. |

---

## When NOT to use this technique

- **Anything filterable, sortable, or aggregatable.** The calc value is not stored — Clarity only stores `1`. Power filters, sort columns, ACAs, and reports cannot see the rendered value.
- **List-view display.** Parameter doesn't get passed. Use a different mechanism (object view virtual columns, portlets).
- **Cross-environment XOG portability** of the attribute itself is fine, but any hard-coded object IDs inside your calc SQL will not port. Key everything off `unique_code` or business keys, not internal IDs.
- **When a stock attribute will do.** [Calculated attribute](Objects%20and%20Attributes.md#calculated-attributes), [Formula attribute](Objects%20and%20Attributes.md#formula-attribute), [Virtual attribute](Objects%20and%20Attributes.md#virtual-attribute), or a stock [parameterized lookup](NSQL%20Queries.md#dynamic-nsql-query-lookups) is always the first choice. Reach for the dummy-lookup hack only when those can't express what you need (multi-row aggregations, HTML rendering, dynamic links, complex SQL, function calls).

---

## Adapting to a specific custom object

For any custom object, the recipe is mechanical:

1. **Find the object's database table.** Custom objects live in `odf_ca_<object_code>` (e.g., object code `user_object_id` → table `odf_ca_user_object_id`). The instance ID column is `id`.
2. **Decide your derivation.** What calc, lookup, link, or aggregate do you want, keyed off `id`?
3. **Write the bare SQL** against `odf_ca_<object_code>` (and any joins you need), with `id = <<the object instance id>>` as the predicate.
4. **Wrap in the NSQL skeleton** (Step 2 above), substituting your SQL and choosing a parameter name.
5. **Create the attribute** on the object with the `dummy_*` naming convention, map the parameter to **Object Id**, set default to `1`, mark Read-Only, and save.
6. **Add to Edit View** and you're done.

For the audit-trail variation against a custom object, swap `object_code = 'risk'` → `object_code = '<your_object_code>'` and `table_name = 'rim_risks_and_issues'` → `table_name = 'odf_ca_<your_object_code>'`. The `column_name` filter targets whichever attribute's history you want.

---

## Related

- [[Objects and Attributes]] — Full attribute-type reference. Consult before reaching for this hack.
- [[NSQL Queries]] — NSQL syntax, `@SELECT@`/`@WHERE@`/`@FILTER@` constructs. Required reading.
- [[Stock Objects]] — Names of stock objects and their `odf_object_code` values.
- [[INV_INVESTMENTS]] — The `inv_investments` table used in Variation 3.
- [[INV_HIERARCHIES]] — Investment parent/child graph used in Variation 3.
- [[CMN_AUDITS]] — Audit-trail table used in the Risk example. Note this is a stub — verify columns from `information_schema`.
- [[_MOC Development]]

%%Source: David Morton (Capgemini), "How To Put Any Dynamically Generated Value On A Clarity Object", 2012-11-22. Local copy: `C:\Users\yosefh\Downloads\dynamic lookup auto generated.doc` and `C:\Users\yosefh\Downloads\dynamic lookup with link.txt`.%%

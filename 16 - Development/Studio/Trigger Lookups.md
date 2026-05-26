---
title: Trigger Lookups (Button Pattern on Object Pages)
tags:
  - dev
  - howto
aliases:
  - Trigger Lookup
  - Trigger Lookups
  - Button Lookup
  - Button Lookups
  - Process Trigger Lookup
  - Clarity Button
canonical: true
audience: dev
domain: development
---
# Trigger Lookups — The "Clarity Button" Pattern

> [!info] Disambiguation: two patterns share the "dummy lookup" label
> Clarity has no native button or action attribute, and no first-class "computed display" attribute. Both gaps are commonly worked around by abusing a **lookup attribute** — but they are *different* hacks:
>
> - **This note** — a lookup whose value is *settable by the user* and triggers a process. Used as a **clickable action** ("Send to SAP", "Generate Report", "Approve").
> - [[Dummy Lookups]] — a lookup whose value is *fixed* at `1` and whose **display attribute is computed** at page render. Used as a **read-only derived field** (audit dates, dynamic links, HTML aggregates).
>
> Pick the right one: if the user has to *click* something, you want a Trigger Lookup. If you want to *show* something, you want a Dummy Lookup.

---

## What this technique does

Adds a clickable hyperlink on an object's properties / edit / subpage layout that, when picked, fires a Clarity **process** via auto-start. The lookup is the "button"; the process is the action.

Use it for:
- One-shot actions: "Send to SAP", "Generate Report", "Run Validation", "Send Documents to DMS"
- Destructive admin actions: "Unlock Project", "Clear Todo Flags", "Reset Plan of Record"
- Workflow triggers: "Submit for Approval", "Mark as Reviewed"
- Multi-action button groups (one attribute → several actions, branched in the process)

The trick:
- A lookup that returns **exactly one row** (`'1' AS id, 'Click Me' AS name`) — or several, for a button group.
- The attribute is a regular single-value lookup, **not** required, **not** read-only, **not** defaulted.
- A process auto-starts when the field changes from `NULL` to the value.
- The process's first step **clears the field** so the button can be pressed again.

---

## Two flavors of dummy/trigger lookup

| Flavor | Settable? | Use case | Notes |
|---|---|---|---|
| **Empty static stub** | No | Layout anchor, future field, attribute-level security target | Static List lookup with zero values. Mark Read-Only on layout. |
| **Single-value NSQL trigger** | Yes (one click target) | "Button" — fires a process | This note's primary subject. |
| **Multi-action NSQL trigger** | Yes (N click targets) | Button group, one attribute slot | Branch in the process on `gel_newValue`. |

For the *display-anything* flavor (constant key, computed display), see [[Dummy Lookups]].

---

## The four steps (button pattern)

### Step 1 — NSQL for the single-value trigger lookup

Create a **Dynamic Query** lookup with this NSQL:

```sql
SELECT
    @SELECT:DIM:USER_DEF:IMPLIED:TRIGGER:'1':ID@,
    @SELECT:DIM_PROP:USER_DEF:IMPLIED:TRIGGER:'Click to Run':NAME@
FROM dual
WHERE @FILTER@
```

Settings on the lookup:
- **Source**: Dynamic Query
- **Display Attribute**: `NAME`
- **Hidden Key**: `ID`
- **Display Type**: **Browse** (renders as a hyperlink — the clickable affordance). Drop-down with one value pre-selects it and confuses users.
- **Multi-Valued**: No

> [!NOTE] `dual` on SQL Server
> Oracle has `DUAL` built in. SQL Server doesn't, but Clarity environments on MSSQL typically have a one-row `niku.dual` view. If yours doesn't, substitute `(SELECT 1) dual`.

### Step 2 — Attribute on the object

In Studio → Objects → your object → Attributes → New:

| Field | Value |
|---|---|
| Attribute Name | e.g. `Send to SAP` |
| Attribute ID | e.g. `send_to_sap` (lowercase, underscored) |
| Data Type | **Lookup — String** |
| Lookup | the trigger lookup from Step 1 |
| Required | **No** *(critical — see Pitfalls)* |
| API Attribute ID | `p_send_to_sap` per [[Objects and Attributes#API Enable Custom Attributes\|project convention]] |
| Audit Trail | **Yes** *(see Audit-as-click-log below)* |

Add to the relevant Layout (Properties view, Subpage, etc.) where you want the button to appear. Do **not** mark it Read-Only — the user has to be able to set it.

### Step 3 — Auto-start process

Studio → Processes → New:

1. **Object**: same as the attribute's parent object.
2. **Mode**: Auto-Start.
3. **Start Condition**: `[YourField] Changes` AND `[YourField] is not NULL`.
   - Some teams write `[YourField] = '1'` for explicitness; both work.
4. **Step 1 — clear the field** (GEL or System Action). Without this, the button only works once per row.
5. **Step 2+** — the real work (XOG, REST call, email, lock/unlock, etc.).
6. **Validate** and **Activate**.

### Step 4 — Test

Open a record as a non-admin user → see the field rendered as a hyperlink → click → pick the value from the browse popup → save → process fires → field clears → effects happen. Test in both **Classic** and **Modern UX**.

---

## Clearing the field — the GEL first step

The canonical clear step. `${gel_objectInstanceId}` is Clarity-injected and holds the internal ID of the row that triggered the process.

```xml
<gel:script
    xmlns:core="jelly:core"
    xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"
    xmlns:sql="jelly:sql">

    <gel:setDataSource dbId="niku"/>

    <sql:update var="cleared">
        UPDATE ODF_CA_PROJECT
        SET    SEND_TO_SAP = NULL
        WHERE  ID = ${gel_objectInstanceId}
    </sql:update>

    <gel:log level="INFO">Cleared trigger field for project ${gel_objectInstanceId}</gel:log>
</gel:script>
```

Notes:
- For custom attributes on a stock object (Project, Idea, Resource, etc.), the column lives on the matching `ODF_CA_*` table — see [[ODF_CA_PROJECT]] for the project case. The master object table ([[INV_INVESTMENTS]] for project) holds *stock* attributes only.
- Always include an explicit `WHERE ID = ${gel_objectInstanceId}` — never a column-list update without a row predicate.
- See [[GEL Database Operations]] for `<sql:update>` mechanics and [[GEL Scripting Basics]] for the script skeleton.

> [!warning] Async commit race
> If you trigger heavy work *before* clearing, the user sees the button stuck on `Click to Run` for the duration. If you clear *after* heavy async work, you can race Clarity's own commit and produce ghost values. Safest is to clear in step 1, then proceed; alternatives include using a System Action **Set Attribute Value** step before any GEL business logic.

---

## NSQL variants

### Truly empty stub (no clickable value)

When you need an attribute slot purely as a layout anchor or security target:

```sql
SELECT
    @SELECT:DIM:USER_DEF:IMPLIED:EMPTY:CAST(NULL AS VARCHAR2(1)):ID@,
    @SELECT:DIM_PROP:USER_DEF:IMPLIED:EMPTY:CAST(NULL AS VARCHAR2(1)):NAME@
FROM dual
WHERE 1 = 0
  AND @FILTER@
```

A static-list lookup with zero values does the same job; the NSQL form is preferred when the rest of the project's lookups are dynamic and you want consistency.

### Conditional button (visible only to authorized users)

```sql
SELECT
    @SELECT:DIM:USER_DEF:IMPLIED:TRIGGER:'1':ID@,
    @SELECT:DIM_PROP:USER_DEF:IMPLIED:TRIGGER:'Approve':NAME@
FROM dual
WHERE EXISTS (
    SELECT 1
    FROM   CMN_SEC_USERS u
    WHERE  u.ID = @WHERE:PARAM:USER_ID:USER_ID@
    AND    u.IS_ACTIVE = 1
    -- additional predicates: group membership, OBS unit, custom flag, etc.
)
AND @FILTER@
```

The browse popup is empty for unauthorized users, so they can't fire the process. Combine with attribute-level security for defense in depth — the NSQL hides the affordance, the security stops a determined user from setting the value via XOG/REST. See [[CMN_SEC_USERS]].

### Multi-action button group

Return one row per action:

```sql
SELECT * FROM (
    SELECT '1' AS ID, 'Send to SAP'      AS NAME, 1 AS SORT_ORDER FROM dual UNION ALL
    SELECT '2' AS ID, 'Send to DMS'      AS NAME, 2 AS SORT_ORDER FROM dual UNION ALL
    SELECT '3' AS ID, 'Unlock Project'   AS NAME, 3 AS SORT_ORDER FROM dual UNION ALL
    SELECT '4' AS ID, 'Clear Todo Flags' AS NAME, 4 AS SORT_ORDER FROM dual
) T
WHERE @FILTER@
```

Then in the auto-start process, branch on the chosen value:

```xml
<core:choose>
    <core:when test="${gel_newValue == '1'}">
        <!-- SAP flow -->
    </core:when>
    <core:when test="${gel_newValue == '2'}">
        <!-- DMS flow -->
    </core:when>
    <core:when test="${gel_newValue == '3'}">
        <!-- Unlock flow -->
    </core:when>
    <core:otherwise>
        <!-- Clear todo flags -->
    </core:otherwise>
</core:choose>
```

This consolidates several "buttons" into one attribute slot — useful when layout real estate is tight or when actions belong together logically.

---

## Audit trail as click log

Set **Audit Trail = Yes** on the trigger attribute. Every press is captured as a `NULL → '1'` change in [[CMN_AUDITS]] *before* the GEL clear step rewrites it back to `NULL`. The audit row survives, giving you a "who clicked, when" history for free.

For destructive actions, this is your accountability record — the field itself shows nothing after the click, but the audit table tells the full story.

---

## Security on destructive triggers

- Apply **attribute-level security** so only the intended role can edit the trigger. Without this, any user with object edit rights fires the process.
- Clarity has **no native client-side confirm dialog**. For irreversible actions, route the work through an **Action Item** or **Email Approval** step inside the process — the click becomes a request, not an immediate execution.
- For high-blast-radius operations (mass update, unlock, delete), pair the trigger with an OBS- or unit-level access check inside the conditional NSQL — see "Conditional button" above.

---

## Pitfalls

| Pitfall | Why it hurts | Fix |
|---|---|---|
| Forgetting `@FILTER@` in NSQL | Lookup save fails or returns nothing | Always end the WHERE with `AND @FILTER@` |
| Trigger attribute marked **Required** | Process fires on every save; users blocked from saving until they "click" | Keep it non-required |
| Skipping the clear-first step in the process | Button only works once per row | First step always clears the field; branching/work comes after |
| Clearing the field *after* heavy async work | Race condition with Clarity's own commit | Clear in step 1 (or via System Action **Set Attribute Value** before any GEL business logic) |
| Hardcoding `ODF_CA_<object>` table name | Breaks if the object is renamed | Resolve table from object metadata, or use XOG writeback instead of direct SQL |
| One dummy lookup reused across many objects | Cross-object debugging becomes confusing | One dedicated lookup per use case, named for its purpose (`lookup.<domain>.<action>`) |
| Trigger field rendered weirdly in Modern UX or mobile | Some custom layouts don't honour Browse-display lookups consistently | Test in both Classic and Modern UX before go-live |
| Trigger attribute on List Views | Empty-row lookups break inline editing | Mark non-displayable in lists |
| Trigger attribute used as a portlet filter | Always `NULL` between clicks → portlet returns no rows | Don't filter portlets on trigger attributes |
| `API Attribute = Yes` polluting XOG export | Field appears in every project XOG even when unused | Only enable API on triggers that integrations actually need |
| Stuck process instance after a fix | Cleared field but the BPM run is still alive | Check [[BPM_RUN_PROCESSES]] for stuck instances and abort them |

---

## Worked example: "Send Documents to DMS" on Project

End-to-end. Adapt to any object by swapping the table and column names.

### Lookup

- **Lookup ID**: `lookup.holca.send_to_dms`
- **Source**: Dynamic Query
- **NSQL**:

```sql
SELECT
    @SELECT:DIM:USER_DEF:IMPLIED:TRIGGER:'1':ID@,
    @SELECT:DIM_PROP:USER_DEF:IMPLIED:TRIGGER:'Send Documents to DMS':NAME@
FROM dual
WHERE @FILTER@
```

### Attribute on Project

- **Attribute ID**: `holca_send_to_dms`
- **API Attribute ID**: `p_holca_send_to_dms`
- **Data Type**: Lookup — String
- **Lookup**: `lookup.holca.send_to_dms`
- **Audit Trail**: Yes
- **Layout**: Project Properties → "Holca Actions" section, Browse display

### Process

1. **Start Condition**: `holca_send_to_dms is not NULL`
2. **Step 1 — clear the field** (GEL):
   ```xml
   <sql:update>
       UPDATE ODF_CA_PROJECT
       SET    HOLCA_SEND_TO_DMS = NULL
       WHERE  ID = ${gel_objectInstanceId}
   </sql:update>
   ```
3. **Step 2** — build the document manifest (query attachments for the project).
4. **Step 3** — HTTP POST the manifest to the DMS REST endpoint.
5. **Step 4** — email the project manager with success/failure detail.
6. **Step 5** — write a row to a custom audit subobject so the export history persists beyond Clarity's audit trail (which only records the click, not the outcome).

### User experience

PM opens a project → sees "Send Documents to DMS" rendered as a hyperlink in the Holca Actions section → clicks → picks "Send Documents to DMS" from the browse popup → saves → process fires → field clears → email arrives within a few minutes confirming the export.

---

## Decommissioning

Trigger lookups accumulate. To safely retire one:

1. Search **all processes** in Studio for references to the attribute (Studio process search by attribute).
2. Search **NSQL queries** for the attribute or column — see [[NSQL Queries]] and check process step bodies for any GEL `<sql:update>` referencing the column.
3. Check **XOG content packs** in source control for the attribute ID and lookup ID.
4. Remove from layouts → remove the attribute from the object → delete the lookup → deactivate or delete the process.
5. If `API Attribute = Yes` was set, also check downstream integrations (SAP, BI, data warehouse ETL) for the column before dropping it.
6. Inspect [[BPM_DEF_PROCESSES]] for any process still keyed off the attribute and [[BPM_RUN_PROCESSES]] for stuck instances.

---

## When NOT to use this pattern

- **When you need a value** rather than an action. Use [[Dummy Lookups]] (display-anything) or a stock attribute.
- **When the action should run on a schedule** rather than on demand. Use a job, not a trigger.
- **When the action is not idempotent and the user might double-click**. Either make the action idempotent, gate the second click via a state flag on the object, or move the work behind an Action Item / Email Approval.
- **For client-side validation or confirmation.** There is no native confirm dialog; the click *is* the commit. Build approval into the process.

---

## Related

- [[Dummy Lookups]] — Sibling pattern: same lookup-abuse trick, used to *display* computed values rather than fire actions.
- [[NSQL Queries]] — `@SELECT@` / `@WHERE@` / `@FILTER@` syntax. Required reading.
- [[Objects and Attributes]] — Custom attribute fundamentals; API Attribute ID convention.
- [[GEL Scripting Basics]] — GEL script skeleton.
- [[GEL Database Operations]] — `<sql:update>` mechanics and `${gel_objectInstanceId}`.
- [[BPM_DEF_PROCESSES]] — Process definitions; auto-start conditions.
- [[BPM_RUN_PROCESSES]] — Running/completed process instances; debug button presses here.
- [[CMN_AUDITS]] — Audit history for attributes flagged with audit (your click log).
- [[CMN_SEC_USERS]] — User table for conditional-button NSQL.
- [[CMN_LOOKUPS]] — Master list of lookup definitions.
- [[ODF_CA_PROJECT]] — Custom attribute storage on Project; pattern repeats per object.
- [[_MOC Development]]

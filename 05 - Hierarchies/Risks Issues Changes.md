---
title: Risks, Issues, and Changes in Hierarchy
tags:
  - howto
  - hierarchies
aliases:
  - Hierarchy Risks
  - Hierarchy Issues
  - Hierarchy RIC
  - Program Risk Register
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Risks, Issues, and Changes in Hierarchy

The **Risks, Issues, and Changes (RIC) in Hierarchy** view consolidates all risk, issue, and change records from every investment in the hierarchy into a unified register. Program managers can see the complete risk landscape across all child projects and investments without opening each one individually.

---

## Accessing RIC in a Hierarchy

1. Open the hierarchy from the Hierarchies list.
2. Click the **Risks**, **Issues**, or **Changes** tab in the hierarchy detail view (or a combined **RIC** tab, depending on Blueprint configuration).
3. The consolidated register loads showing records from all investments in the hierarchy.

---

## Consolidated Risk Register

The risk register shows all risks from all hierarchy investments:

### Key Columns

| Column | Description |
|--------|-------------|
| **Name** | Risk/Issue/Change name |
| **Investment** | Which investment the record belongs to |
| **Investment Level** | Hierarchy depth of the parent investment |
| **Category** | Risk/Issue/Change type |
| **Priority** | Low / Medium / High / Critical |
| **Probability** | (Risks only) Low / Medium / High |
| **Impact** | (Risks only) Low / Medium / High |
| **Risk Score** | (Risks only) Probability × Impact |
| **Status** | Open / In Progress / Mitigated / Closed |
| **Owner** | Responsible person |
| **Due Date** | Target resolution or mitigation date |

---

## Filtering the Consolidated Register

1. Click **Filter** in the toolbar.
2. Common filters:
   - **Status = Open** — Show only unresolved items.
   - **Priority = High or Critical** — Focus on most severe items.
   - **Investment Level = 1** — Show items from first-level investments only (not deeply nested).
   - **Owner = [Resource]** — All items owned by a specific person (accountability view).
   - **Due Date < Today** — Overdue items (past due date but not resolved).

> [!tip] Program Risk Dashboard
> Filter to: Status = Open, Risk Score = High or Critical. Sort by Risk Score descending. This gives you the program's top risks in priority order for executive review.

---

## Sorting and Grouping

### Sorting

Click any column to sort. Sort by **Risk Score** (descending) to surface highest-priority risks first.

### Grouping

1. Click **Group By** → select a field:
   - **Investment** — Group items by their parent investment (standard program view).
   - **Priority** — All critical items together, then high, then medium, etc.
   - **Status** — Open vs. In Progress vs. Closed.
   - **Owner** — Accountability view by responsible person.

---

## Creating Hierarchy-Level Risks

In addition to risks on individual investments, you can create **hierarchy-level risks** (program-wide risks that span multiple investments):

1. In the Risks tab, click **+ New Risk**.
2. Set **Investment** to the **root** or top-level hierarchy investment.
3. Fill in the risk details.
4. Save — the risk appears in the consolidated register associated with the root investment.

> [!note] Program-Level vs. Investment-Level Risks
> A program-level risk (e.g., "Key vendor may not deliver platform on time, impacting 3 projects") is logged on the root or program investment. Individual project risks (e.g., "Developer availability risk for API project") are logged on the specific project.

---

## Escalating a Risk to Program Level

When an investment-level risk grows to affect multiple investments:

1. Open the risk record.
2. Click **Actions** → **Escalate to Program**.
3. Select the hierarchy level to escalate to (parent or root).
4. A copy of the risk is created at the higher level; the original remains on the child investment.
5. The escalated risk is marked with an **Escalated** flag.

---

## Change Request Tracking Across the Program

The Changes tab works identically to Risks — all change requests from all investments appear in one grid. This is valuable for:

- **Scope change governance** — Seeing all pending change requests across the program at once.
- **Budget impact assessment** — Summing the financial impact of all open change requests.
- **Approval workflow tracking** — Monitoring change requests awaiting approval.

---

## Exporting RIC Data

1. Click **Actions** → **Export to CSV**.
2. The export includes all visible columns and rows (respecting filters).
3. The **Investment** column identifies which investment each record belongs to.
4. Use for program risk reports, governance board presentations, or audit evidence.

---

## Related Notes

- [[Risks Issues Changes|Investment Risks Issues Changes]] — Managing RIC on individual investments
- [[Status Reports]] — RIC items surface in hierarchy status reports
- [[Cross-Object Investment Grid]] — Investment-level analysis view
- [[_MOC Hierarchies]] — Back to the hierarchies MOC

%%Source: p682–686%%

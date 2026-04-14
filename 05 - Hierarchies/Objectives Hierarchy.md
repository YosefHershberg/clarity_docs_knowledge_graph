---
title: Objectives Hierarchy
tags:
  - concept
  - howto
  - hierarchies
aliases:
  - OKR Hierarchy
  - Strategic Objectives Hierarchy
  - Investment Objectives
canonical: true
audience: pm, leadership
domain: hierarchies
---

# Objectives Hierarchy

The **Objectives Hierarchy** is a special hierarchy type in Clarity PPM that maps investments to **strategic objectives** — implementing an OKR (Objectives and Key Results) or strategic alignment framework. It allows leadership to see which investments are contributing to which strategic goals, and to measure progress against objectives.

> [!info] OKRs in Clarity
> Clarity's Objectives feature is part of the [[10 - Pages and Objectives|Pages and Objectives]] section. The Objectives Hierarchy (covered here) is the integration point between the hierarchy framework and the objectives framework — showing investments grouped by the objectives they support.

---

## What is the Objectives Hierarchy?

An **Objectives Hierarchy** structures the hierarchy tree with **Objectives at the top levels** and **Investments as leaf nodes**. For example:

```
Strategic Objective: "Improve Customer Experience" (Objective)
├── Key Result: "Reduce support ticket volume by 30%" (Key Result)
│   ├── Customer Self-Service Portal (Project)
│   └── Knowledge Base Redesign (Custom Investment)
└── Key Result: "Increase NPS to 75" (Key Result)
    └── Customer Feedback Analytics (Project)
```

This structure answers: *"Which investments are we funding to achieve this strategic objective?"*

---

## Creating an Objectives Hierarchy

1. Navigate to **Hierarchies** in the main navigation.
2. Click **+ New Hierarchy**.
3. Set **Hierarchy Type** to **Objectives Hierarchy** (must be configured by an admin).
4. Enter the hierarchy name (e.g., "FY2025 Strategic Objectives").
5. Click **Save**.

### Setting the Root Objective

1. Click **+ Set Root**.
2. Select an **Objective** (from the configured objectives list) as the root.
3. The root objective appears at the top of the tree.

---

## Adding Objectives and Key Results

1. Hover over the root objective node.
2. Click **+ Add Child** → **Objective** to add a sub-objective.
3. Click **+ Add Child** → **Key Result** to add a key result under an objective.
4. Build out the objective tree to match your organization's strategic plan.

---

## Linking Investments to Objectives

1. Hover over a **Key Result** node (or an Objective node, depending on configuration).
2. Click **+ Add Child** → **Investment**.
3. Search for and select the investment that contributes to this key result.
4. The investment appears as a leaf node under the key result.

> [!tip] One Investment, Multiple Objectives
> An investment can appear under multiple key results (if it contributes to multiple objectives). Unlike a standard hierarchy (where an investment can only have one parent), the Objectives Hierarchy allows **multiple parent nodes** for investments.

---

## Viewing Objective Progress

Once investments are linked, the Objectives Hierarchy calculates and displays:

| Metric | Calculation |
|--------|------------|
| **Investment Contribution** | How much each investment contributes to the key result (configurable weighting) |
| **Key Result Progress** | Aggregated % complete from all contributing investments |
| **Objective Progress** | Aggregated from all child key results |
| **Budget Alignment** | Total planned and actual spend against each objective |

These rollup values appear in the hierarchy tree nodes and in the [[Cross-Object Investment Grid]].

---

## Objective Status and Scoring

Each objective node can have:

- **Target Value** — The quantitative goal for the key result (e.g., "NPS = 75").
- **Current Value** — The actual current value (entered manually or connected to a data source).
- **Status** — On Track / At Risk / Off Track (manual or calculated from % progress).
- **Score** — A 0–100 score showing progress toward the target.

---

## Reporting on Strategic Alignment

The Objectives Hierarchy enables these reports:

1. **Strategic Alignment View** — Which investments map to which objectives.
2. **Investment Portfolio by Objective** — Grouped investment list with budgets, showing spend per strategic goal.
3. **Objective Progress Dashboard** — Via the hierarchy's [[Canvas Dashboard|Canvas]] or [[Status Reports]] module.

> [!tip] Executive Communication
> Export the Objectives Hierarchy tree or canvas as a PDF for executive presentations showing how the investment portfolio maps to the strategic plan.

---

## Configuring Objectives Hierarchies (Admin)

1. Navigate to **Administration** → **Blueprints** → [Hierarchy Type].
2. Enable **Objectives Hierarchy** type.
3. Configure:
   - Which investment types can be linked to objectives.
   - Contribution weighting method (equal weight or custom percentages).
   - Progress calculation rules (weighted average, minimum, etc.).
4. See [[_MOC Administration]] for details.

---

## Related Notes

- [[Create and Edit]] — General hierarchy creation (non-objectives)
- [[Cross-Object Investment Grid]] — Analyze investments linked to objectives in a grid
- [[10 - Pages and Objectives|Pages and Objectives]] — The Objectives feature in Clarity (OKRs)
- [[_MOC Hierarchies]] — Back to the hierarchies MOC

%%Source: p643–649%%

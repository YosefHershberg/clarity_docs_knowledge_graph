---
title: Roadmap Checklists
tags:
  - howto
  - roadmaps
aliases:
  - Roadmap Gates
  - Roadmap Governance
  - Roadmap Quality Checks
---

# Roadmap Checklists

The **Checklists module** for roadmaps provides governance gate checklists at the **roadmap level** (rather than per-investment). These are used to verify that the roadmap itself meets planning quality standards before it is published, approved, or acted upon. Conceptually similar to [[Checklists|Investment Checklists]], but scoped to the roadmap as a whole.

> [!info] Blueprint Dependency
> Roadmap checklists must be enabled in the roadmap's Blueprint. The checklist template (questions and gate structure) is configured by an administrator.

---

## Roadmap Checklists vs. Investment Checklists

| Aspect | Roadmap Checklists | Investment Checklists |
|--------|-------------------|-----------------------|
| **Scope** | Validates the entire roadmap / portfolio plan | Validates a single investment |
| **Purpose** | Portfolio governance, planning quality | Investment lifecycle gates |
| **Approver** | PMO or Portfolio Governance Board | Investment Manager or Sponsor |
| **Timing** | Before roadmap approval / publish | Before investment status changes |

---

## Accessing Roadmap Checklists

1. Open the roadmap.
2. Click the **Checklists** tab (in the roadmap-level tabs, not within an individual investment).
3. The checklist list shows all roadmap-level checklists with their status.

---

## Common Roadmap Checklist Types

Administrators configure checklist templates. Common roadmap checklist examples:

- **Portfolio Review Readiness** — "Are all active investments' statuses current?" "Are all investments with Red status documented with mitigation plans?"
- **Annual Planning Gate** — "Have all proposed investments been scored and prioritized?" "Is the portfolio within approved budget limits?"
- **Scenario Approval** — "Has the approved scenario been reviewed by the Governance Board?" "Are all resource conflicts resolved?"
- **Publishing Checklist** — "Has the roadmap been reviewed by all stakeholders?" "Are all placeholder items converted to real investments or removed?"

---

## Completing a Roadmap Checklist

1. Open the **Checklists** tab on the roadmap.
2. Click the checklist name to open it.
3. For each item:
   - Select **Yes / No / N/A**.
   - Add a **Comment** explaining the response.
   - Attach evidence (documents, screenshots) if required.
4. When all required items are answered, click **Complete Checklist**.
5. Submit for approval if required.

---

## Checklist Items That Reference Portfolio Data

Some roadmap checklist items may be **linked to portfolio data** and auto-evaluated:

- "All active investments have a manager assigned" → Clarity checks all investments in the roadmap for a non-null Manager field.
- "Total portfolio budget is within the approved envelope" → Clarity compares total investment budgets against the roadmap's budget cap.

These automated checks appear with a **green checkmark** (pass) or **red X** (fail) automatically, without requiring manual input.

> [!note] Automated vs. Manual Items
> Automated items are validated by Clarity's rules engine. Manual items require human judgment and a yes/no response. Both types can coexist in the same checklist.

---

## Approving a Roadmap Checklist

1. Complete all checklist items.
2. Click **Submit for Approval**.
3. The configured **Governance Approver** (e.g., PMO Director, Portfolio Governance Board) receives a notification.
4. The approver reviews the completed checklist and either:
   - **Approves** → Roadmap checklist is marked Passed; the roadmap may advance to the next state.
   - **Rejects** → Feedback is provided; the roadmap owner must address the issues and resubmit.

---

## Checklist History

All completed roadmap checklists are preserved as a historical record:
- View all past checklist completions in the Checklists tab.
- Each historical entry shows the date, approver, and all responses.
- Useful for audit trails and governance evidence during portfolio reviews.

---

## Configuring Roadmap Checklists (Admin)

1. Navigate to **Administration** → **Blueprints** → [Roadmap Type] → **Checklists**.
2. Create a new checklist template.
3. Add sections and items (manual or automated rule-based).
4. Set required/optional status and pass/fail rules.
5. Assign approvers.

See [[_MOC Administration]] for Blueprint administration guidance.

---

## Related Notes

- [[Top-Down Planning]] — Roadmap creation and governance concepts
- [[Canvas Dashboard]] — Dashboard showing checklist status alongside portfolio metrics
- [[Checklists|Investment Checklists]] — Per-investment checklists (different scope)
- [[_MOC Roadmaps]] — Back to the roadmaps MOC

%%Source: p617–626%%

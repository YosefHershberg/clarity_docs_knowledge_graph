---
title: Camtek Task Completion and Actuals
tags:
  - camtek
  - howto
aliases:
  - update actual by pct complete
  - Camtek Actual
  - השלמת משימה
canonical: true
client: camtek
audience: dev
domain: client
---

# Camtek Task Completion and Actuals

Camtek does not use timesheets for feature work. When a task is marked **100 % complete**, a process converts the remaining **ETC** into a custom **Camtek Actual** on the assignment, clears ETC, snapshots the original ETC, and sets the task status to Completed. Two flavours exist: a real-time trigger and a nightly sweep.

## Trigger — *update actual by pct complete V2* (Task, Active; v1 On Hold)
Fires when a user sets `prpctcomplete = 100` on a task where `Is Task = Yes`, `Milestone = No`, `On Leave` empty, and the investment's `type_in ≠ Feature` (spec) — i.e. in regular projects and in the On Going masters.
1. Set `Fixed Duration = Yes`.
2. **If the task does not lie entirely in the future**: take the ETC; on each assignment copy ETC → Camtek Actual **week by week per resource from task start to today**; any ETC left after today is deleted. Finish date in the past is left alone.
3. **If start and finish are both in the future** (completed early): `Original ETC` (`original_etc`) = 1 and Camtek Actual = 1, split equally across assignments (two resources → 0.5 each). Finish is moved to today.
4. Status → Completed.

## Nightly — *update actual by pct complete - ALL* (JOB, 03:45; spec 02:20)
Sweeps all tasks with `% = 100`, status ≠ Completed, `Is Task = Yes`, `Milestone = No` and applies the same logic, additionally writing `original_etc` on the task before moving ETC to actuals, and setting finish = today.

## Companion processes
- *update Task when Completed change* (Task, Active) — reacts to status changes.
- *process complete task report - mail for us* (Task, Active) — mails the Proceed team when % complete drops from 100 to 0.
- *Update original etc by ETC* (one-off, still scheduled 21:14) — back-fill of `original_etc` from resource data.
- *Sum Etc Feature* (06:10) and *Feature Size of project New- JOB* (05:40) — aggregate ETC-derived values per hammock into the feature's `feature_size` (S/M/L) and `total_original_etc`.
- *Saving ETC* (`etc_save`) and *ETC TFS* (`etc_tfs`) task attributes support these flows; `etc_tfs` feeds *update etc from clarity to tfs* (On Hold).

## Where the data lands
| Field | Object | Attribute | Verified |
|---|---|---|---|
| Original ETC | Task | `original_etc` | dev |
| Total Original ETC | Project | `total_original_etc` | dev |
| Camtek Actual | Assignment | not harvested (Attributes grid filtered to Project/Task) | **spec only** — confirm under Administration › Attributes, Object = Assignment |

> [!tip] Reporting
> Because actuals are written as custom weekly values, stock Actuals/EV fields stay empty. Reports should read Camtek Actual on the assignment, not `PRASSIGNMENT.PRACTSUM`.

Related: [[Custom Autoschedule]] · [[Camtek Data Model]] · [[Process and Job Catalog]]

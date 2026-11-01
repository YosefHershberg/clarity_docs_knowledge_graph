---
title: Camtek Custom Autoschedule
tags:
  - camtek
  - howto
aliases:
  - Custom Autoschedule
  - אוטוס' מקוסטם
  - Autoschedule on All in Going
canonical: true
client: camtek
audience: dev
domain: client
---

# Camtek Custom Autoschedule (אוטוס' מקוסטם)

Camtek does not run the stock [[Autoschedule]] directly. GEL processes **prepare** every task (set or clear *Must Start On*, fix durations and finish dates), then invoke the Autoschedule Investment job with the investment's start date as the autoschedule date, then unlock. Goal (spec): stop started tasks from drifting forward, pull unstarted work to today, complete tasks and preserve their actuals.

## Populations and schedules
| Process (dev) | Population | Spec schedule | Dev job |
|---|---|---|---|
| *Autoschedule on All Projects* (Active) | `type_in = 1`, Active, not template, % < 100, **`auto_auto = Yes`** | every 3 h / 3× day | 20:00 |
| *Autoschedule on All in Going* (Active) | On Going Feature (`type_in = 3`) | 04:00, 20:30 | 00:00 |
| *Autoschedule on All in Going cmm* (Active) | On Going CMM (`type_in = 6`) | 05:00, 21:30 | 02:00 |
| *Autoschedule on All Features* (On Hold) | features (`type_in = 2`) | nightly | not scheduled |
| *Autoschedule on Project / on Feature / on in Going* | single investment | manual action | Project version Active; others Draft |
| *Unlock Projects after Autoschedule* (+ "2") | — | — | 21:30, 02:15 |

Runs one investment at a time. The *Audit* copies (Draft) are the pre-1 Apr 2026 versions kept as rollback.

For the On Going variants the process first **turns off `flegtfs`** ("fleg task tfs") on all features in status Active/In Progress so the mass date changes do not fire the Clarity → TFS triggers, and turns it back on when done (spec).

## Preparation steps (spec, parts א–ח)
| Part | Select tasks where | Action |
|---|---|---|
| A | no predecessor, no *Start No Earlier Than*, % = 0, task or milestone | `Must Start On` = today |
| B | ≥ 1 predecessor not Not Started that finishes before today, no predecessor Not Started, no SNET, % = 0 | `Must Start On` = today |
| C | no predecessor, 0 < % < 100, no SNET | clear `Must Start On` |
| D | SNET in the future, % = 0 | clear `Must Start On` |
| E | SNET in the past, % = 0 | `Must Start On` = today |
| F | has predecessors, at least one finishing in the future, % = 0, MSO not empty | clear `Must Start On` |
| G | `Assigned Resources` = a **Team** (contractor) | `Fixed Duration = Yes`; `Duration` = `ETC` |
| H | task, not milestone, 0 < % < 100, finish < today | finish = today |
| run | investment start date | run Autoschedule Investment with that date; On Going only: set `flegtfs` back on |

## Related nightly steps
- *Update milestone on in Going and CMM* (02:30) — hammocks at 100 % get their last milestone completed and the feature set to Completed → return home. See [[On Going Feature Project]].
- *Update Assigned Resources by Camtek Investment Type* (every 2 min except 04:00–07:00 in spec) — fills `ass_res_feature` on tasks (= assignments) and on hammocks (union of children) so the master Gantt can be filtered by resource.
- *Add Icon Task When Critical - JOB* (after project autoschedule) — flags critical-path tasks.
- *Change complete to 100 in On Leave tasks - JOB* — closes absence tasks.
- *AutoscheduleDate - job new* (18:30) — older date job still scheduled; its process is On Hold ("decided to do with a trigger").

## Caveats
- Spec table maps On Going Feature to lookup 2 and On Going CMM to 3; dev lookup `INV_TY` has 3 and 6. Use dev.
- Autoschedule locks the project; the two *Unlock* jobs exist because locks were left behind. If projects appear read-only in the morning, check those jobs ran.
- Project autoschedule is opt-in per project via `auto_auto` (Auto Autoschedule).

Related: [[Autoschedule]] · [[Task Completion and Actuals]] · [[Process and Job Catalog]]

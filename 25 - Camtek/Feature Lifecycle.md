---
title: Camtek Feature Lifecycle
tags:
  - camtek
  - howto
aliases:
  - Feature Lifecycle
  - ניהול פיצ'רים
  - Feature Management Stages
canonical: true
client: camtek
audience: dev
domain: client
---

# Camtek Feature Lifecycle (spec stages A–G)

The spec *ניהול פיצ'רים - קמטק* is organised in seven stages. Process names below are as they appear in dev (Administration › Processes); mode in parentheses. "spec" marks behaviour described but not verified.

```
A  Create feature (type_in=2) ── tasks from template, 2 locked milestones, TFS work items
B  Custom Gantt management ──── autoschedule jobs, task completion → actuals
C  Active ────────────────────► Move Gant to On Going  (feature → hammock)
D  In On Going: TFS processes ─ task create/update/delete → TFS, TFS status → Clarity
E  In On Going: Clarity procs ─ feature ⇄ hammock propagation, Ready for Validation, Delivery, In Progress
F  Close ─────────────────────► hammock returns, feature Completed
G  Schedule plan for all jobs
```

## Stage A — Open and manage a feature as a feature
### A1. New feature — *Create task from feature template to project feature V1* (Project, Active)
Trigger: Create-from-Template of a Project with `type_in = Feature (2)`.
1. **Find the template** in the custom investment object **Features** (`features`, 64 instances, codes FEA000…) by exact match on six attributes:

| Features object | Project |
|---|---|
| `proc_sw` SW version for process (multi) | `sw_version` SW Version |
| `feature_type` | `feature_type` |
| `app_validation` System Validation on Private Branch | `app_validation` |
| `sup_validation` Support Validation on Private Branch | `sup_validation` |
| `app_valid` Application Validation on Private Branch | `app_valid` |
| `machine_type` | `machine_type` |

   Templates are named by type and number (*CMM Feature 21*, *Configurator 9*, *DevOnly 12*, *AutoTest 25*, *Feasibility 1* …); `proc_sw` lists the SW versions a template serves (e.g. `10.1; EXT; PRV; SMG`).
2. **Copy tasks** from the template. Where the template task has `init_proc` (feature initiator for process) = Yes, set `assigned_resources` to the feature's `feat_init`, or to `created_by` if Feature Initiator is empty.
3. **Ready For Delivery** (`release_date_string`, label "Ready For Delivery" on Project): find the task with `proj_term1 = Yes`, take its `prfinish`, and write "Month Year": day < 20 → same month; day ≥ 20 → next month; day ≥ 20 in December → January of next year. Maintained later by *Release date Feature when edit task* (Task, Active).
4. **Feature Initiator**: if `feat_init` empty → `created_by`.
5. **Machine Type**: copy project `machine_type` to every created task (tasks linked by Internal Link). V2 (Draft) adds this; *Machine type update from project object* (Active) keeps it in sync and updates TFS for tasks with `tool_required = true`.
6. **Create in TFS** by calling the create process (A2).
7. **Two extra locked milestones** are created with `phase_milestone` set and `delete_task` (TFS Active) = Yes, `prislocked = Yes`, `prismilestone = Yes`:
   - `Ready For Validation - TFS NUMBER <tfs> STATUS <status>` → `phase_milestone = 1` (Development Phase End)
   - `Feature Completion - TFS NUMBER <tfs> STATUS <status>` → `phase_milestone = 2` (Validation Phase End)
   Names are refreshed by *Update name millstone when change feature status* (Project, Active).

> [!warning] Spec vs dev
> The spec says the default STATUS text is *Backlog (Lookup ID-5)*. In dev `CAMTEK_FEATURE_STATUS` has Backlog = **1** (5 is Rejected).

### A2. Create TFS items for an existing feature — *Tfs create feature in project object* (Project, Draft in dev) / action "Create: Clarity > TFS"
Checks `type_in = 2` and empty `tfs_num`, creates a *Clarity Feature* work item, writes `tfs_num`, `linktotfs`, `tfs_crea_date`; for each task with `delete_task = True` and `Is Task = Yes, Milestone = No` creates a *Clarity Task* work item, writes `tfs_tasknum`, `linktotfs`, links children ⇄ parent; if `orig_tfs` is filled, adds a *Duplicate of* relation. Field mappings in [[TFS Integration]]. Resources missing in TFS are left blank, not failed.

### A3. Real-time task updates → TFS — *Update task - tfs project type feature new triger v3 include also copy task* (Task, Active)
Preconditions: task `delete_task = True`, `tfs_tasknum` filled, feature `tfs_num` filled, `type_in = 2`, `move_yn = No`. Trigger on create / update of mapped fields / copy. Create → new work item, `feature_status` (Task Phase) = In Progress (2), child link. Update → if Status changed copy everything, else copy everything except Status; stamp `tfs_update`. Copy → clear `tfs_tasknum`, inherit feature's `tfs_parent`, run create.

### A4. Real-time feature updates → TFS — *TFS update project type feature and change name &status task v1* (Project, Active)
On change of mapped feature fields with `tfs_num` filled: update the Feature work item; a name change renames all child task titles; a Feature Status change updates `System.State` on children. `System.State` = **Resolved** when `valid_ready = Yes` and status = In Progress.

### A5. Delete — *TFS - delete task from project type feature* (Task, Active)
`delete_task` set False on a task with `tfs_tasknum` → clear `tfs_tasknum` and `linktotfs`, delete the work item.

### A6. One-time / support processes
*Adjustments in the TFS system : Title & State* and *: Duplicate* (On Hold), *Change releaseDate to commitment_date_string TFS PROJECT type feature* (On Hold), *Create Project type feature in tfs by ID - loop* (On Hold), *Delete work items from TFS* (Active, Excel-driven), *Delete TFS num from project & task - DEV ONLY !* (Active — dev safety: strips TFS numbers so dev processes never touch live Azure DevOps items), *TFS -Data Cleanup job* (spec: delete test work items; Azure DevOps has no dev instance).

## Stage B — Custom Gantt management
Autoschedule jobs and the completion/actuals logic. See [[Custom Autoschedule]] and [[Task Completion and Actuals]]. Also: *Update milestone on in Going and CMM* (hammock completion), *Update Assigned Resources by Camtek Investment Type* (resource filter field `ass_res_feature`).

Pre-step for C (spec): a dynamic lookup over `comm_date` of the Commitment Date object, used to route hammocks.

## Stage C — Feature becomes a hammock
*Move Gant to On Going* (Project, Active). Full algorithm in [[On Going Feature Project]].

## Stage D — Managing the hammock: TFS processes
| Process (dev) | Trigger | Behaviour |
|---|---|---|
| *Update task - tfs project type On going new trigert v3* (Active) | update of mapped Task fields, copy, move between hammocks, in `type_in ∈ {3,6}` | preconditions `delete_task = True`, `tfs_tasknum` and `tfs_parent` filled, `Is Task = Yes`; Status-changed vs other-field rule as A3; stamps `tfs_update`. Move between hammocks (Parent Name change) → relink parent/child in TFS, rename, re-copy feature attrs (`tfs_parent`, `parent_link`, `release_date_string`, `parent_feat_stat`, `commitment_date`, `assigned_group`, `sw_version`, `task_priority`) |
| *create task - tfs project type On going* (Active) | task created in On Going with empty `tfs_tasknum` | finds the feature via the hammock's `tfs_parent`, copies feature attrs into the task, sets Task Phase = In Progress, creates the work item, links child |
| *TFS - delete task from project type On Going* (Active) | `delete_task` → False with `tfs_tasknum` and `tfs_parent` filled | clears ids, deletes work item |
| *Change status from TFS to clatiry task of project On Going- JOB* (Active) | every 10 min | for work items changed since last run: compare Clarity Status vs TFS "Clarity Status"; if different, set `delete_task = False`, apply: Not Started → status; Started (from Not Started) → status, 1 %, `prstart` = today; Completed → status, 100 %, `prfinish` = today; then `delete_task = True`. Also clears `admin_tfs` |

## Stage E — Managing the hammock: Clarity processes
| Process (dev) | Trigger | Behaviour |
|---|---|---|
| *Update feature properties for task in On Going* (Active) | change in one of nine feature attrs, `move_yn = Yes`, `type_in = 2` | find hammock via `feat_int`, write to hammock + children: `cmtk_feature_status→parent_feat_stat`, `commitment_date`, `sw_version`, `project_priority→task_priority`, `valid_ready→valid_ready1`, `feat_init→feat_init1`, `cust_ready→cust_ready1`, `customer_camtek`, `odf_assoc_parent→assoc_parent`, `project_source`; feature `name` → hammock `prname` only |
| *Update project feature from task summery project On Going -JOB* (Active) | scheduled (dev 19:50; spec twice daily) | for each hammock (not Hold/Rejected): `prstart→schedule_start`, `prfinish→schedule_finish`, `prpctcomplete→inv_percent_complete`; 1–99 % and status not In Progress/Hold/Rejected → In Progress; hammock finish → finish of the `phase_milestone = 2` task; latest finish of In-Progress tasks → finish of the `phase_milestone = 1` task, and 100 % when all are done |
| *Population of the Validation field in the Features object On Going* (Active) | task in On Going with Task Phase = In Progress reaches 100 % | if all In-Progress tasks of the hammock are 100 % → feature `valid_ready = Yes`, Dev Phase End milestone updated, TFS `System.State` → Resolved, notification + mail to dmitrid@camtek.com: "Feature $[tfs_num] is ready for validation" |
| *… On Going - change No* (Active) | % drops below 100 on such a task | `valid_ready = No`, TFS state → In Progress, mail "no longer Ready for Validation" |
| *Change feature status in project by prcompleate on going - JOB* (Active, 01:00) | scheduled, `type_in ∈ {3,6}` | per hammock: any task with `for_sta = No` and % > 0 → feature In Progress (3); all at 0 → Active (2) |
| *update delivery finish date On Going* (On Hold) / *update delivery finish date - Job* (Active, 13:20) | finish change of the `proj_term2` task | feature `delivery_finish_date` = finish; `release_date_string` = Month Year rule |
| *Move project feature to Non Active and create tasks - JOB* (Active, 03:00) | Hold (6) or `is_active = No` with `move_yn = Yes` | hammock returns home (see [[On Going Feature Project]]) |
| *Update name millstone when change feature status* (Active) | feature status change, `type_in = 2` | renames the two phase milestones: `… - TFS No. <tfs_num> Status <status>` |
| *Turn on/off Ready For Customer by complete attribute* (Task, Active) | CMM Feature/CMM Bug only; `proj_term1` task hits / leaves 100 % | toggles feature `cust_ready` |

## Stage F — Closing a feature
*Update milestone on in Going and CMM* (02:30) detects hammocks at 100 % (level-1 summary tasks), completes any remaining milestone (100 %, finish = today), sets the linked feature to **Completed (4)**, and calls *Move project feature to Non Active and create tasks* to bring the Gantt home and delete it from On Going.

## Stage G — Schedule plan (spec) vs dev
| Process | Spec | Dev scheduled job (next run seen) |
|---|---|---|
| Autoschedule on All Features | nightly | **not scheduled** (process On Hold) |
| Autoschedule on All Projects | every 3 h | 20:00 |
| Autoschedule on in Going | 04:00, 20:30 | 00:00 |
| Autoschedule on All in Going cmm | 05:00, 21:30 | 02:00 |
| Update milestone on in Going | 02:30 | 02:30 |
| Move project feature to Non Active … - JOB | 03:00 | 03:00 |
| Update Assigned Resources by Camtek Investment Type | every 2 min, not 04–07 | 10:28 (recurring) + Retro 21:30 |
| update actual by pct complete - ALL | nightly 02:20 | 03:45 |
| Update assigned_resources from task to TFS - JOB | every 3 h 08–17 | 12:43 (process On Hold) |
| Change status from TFS to Clarity - JOB | every 10 min | 10:30 (recurring) |
| Update project feature from task summery … -JOB | 10:00, 13:00, 16:00 | 19:50 |
| Add Icon Task When Critical – JOB | evening after project autoschedule | 08:09 |
| Change complete to 100 in On Leave tasks – JOB | evening | 03:56 |

Full list of the 36 scheduled jobs in [[Process and Job Catalog]].

Related: [[Camtek Overview]] · [[TFS Integration]] · [[Camtek Glossary]]

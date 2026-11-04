---
title: On Going Feature Project
tags:
  - camtek
  - concept
aliases:
  - On Going
  - On Going Feature
  - On Going CMM
  - Ongoing Feature
  - ערסל
  - Hammock
canonical: true
client: camtek
audience: dev
domain: client
---

# On Going Feature Project

The **On Going** projects are ordinary Project-object instances that act as containers. Each active feature appears inside one of them as a **hammock** (Hebrew ערסל): a summary task (`Is Task = No`, not a milestone) named after the feature, with the feature's tasks as its children. This is where day-to-day feature work is scheduled, so most Camtek customization targets this object.

| Master project | Code | `type_in` | Blueprint | Holds |
|---|---|---|---|---|
| **On Going Feature** | CL00001708 (id 5183026) | 3 | On Going (BP5541) | features whose Feature Type is *not* CMM Feature/CMM Bug |
| **On Going CMM** | CL00001705 | 6 | On Going CMM (BP5547) | features with Feature Type = CMM Feature (1) or CMM Bug (4) |
| On Going Bug | — | 5 | — | lookup value exists, no project seen in dev |

Source: dev. The spec mentions "On Going" splitting further by **Commitment Date**: within the On Going Feature family the process looks up the custom object *Commitment Date* (6 instances named 1–6, each with a start–finish window and a `comm_date`) and copies the hammock to the On Going project whose commitment date matches. In dev only one On Going Feature project exists, so treat the commitment-date routing as spec-only until confirmed.

## Anatomy of a hammock (dev sample "TEST 29/10/2026 10AM")
| Level | Name | Task Phase | TFS Parent | TFS Number | Notes |
|---|---|---|---|---|---|
| hammock | TEST 29/10/2026 10AM | — | 130532 | **130532** | carries the *feature's* TFS id; `parent_link` → `/pm/#/project/5303311/details` |
| task | Feature Requirements | In Progress | 130532 | — | no work item yet |
| task | Provide Time Estimation and Allocation | In Progress | 130532 | — | |
| task | SW Development | In Progress | 130532 | 130533 | |
| task | SW Development on Tool | In Progress | 130532 | 130534 | |
| task | SW Integration on tool | In Progress | 130532 | 130535 | |
| task | QA Verification on Private Branch | Validation | 130532 | 130536 | |
| task | SW Validation - Bugs Fixing | Validation | 130532 | — | |
| task | SW Merge to 10.1 Release version | Validation | 130532 | 130537 | |
| task | QA Validation on Rel Branch | Validation | 130532 | 130538 | |
| milestone | SW MS Release | Validation | 130532 | — | `Milestone = Yes` |

Every task under the hammock carries copies of the feature's attributes (Feature Status, Commitment Date, SW Version, Customer, Priority, Feature Initiator, Ready For Customer/Validation, Project Request, Parent) so users can filter the master Gantt without opening features. The default view *Proceed* filters `Feature Status = Backlog; Hold`.

Grid columns in dev: Row, Name, Commitment Date, TFS Active/Non Active, ETC, Original ETC, TFS Parent, TFS Number, Start, Finish, Assigned Resources, Assigned Resource Filter, Customer, Feature Status, Created By, % Complete, Status, Assigned Resource for Feature, Fixed Duration, Duration, Task ID, Created Date, Start No Earlier Than, Task Phase, Predecessors, Successors, Milestone, Must Start On, Parent Link, Ready For Customer, Ready For Delivery, Ready For Validation, Reason for Delay, Current Phase, Start No Later Than, Is Task, Locked, Last Updated By, Last Updated Date, Must Finish On, Admin TFS monitoring, Last Update From TFS, Task Type.

## How a hammock gets in — *Move Gant to On Going* (Project, Active, dev)
Trigger (spec): feature project with `type_in = 2` changes `cmtk_feature_status` → **Active (2)**, and `move_yn = No`.

The GEL body (dev, read 2026-11-04) runs these steps in order against the feature (`gel_objectInstanceId`). All writes go through the REST API with an admin session minted via `UserSessionControllerFactory` (see [[Calling REST from GEL]]); every call sends `x-api-force-patch: true`.

1. **Pick the target master** by feature type: `feature_type ∈ {1,4}` → the investment with `type_in = 6` (On Going CMM), otherwise `type_in = 3` (On Going Feature). **dev:** the script takes the *first* row of `SELECT id FROM odf_ca_inv WHERE type_in = …` with no ORDER BY and no date filter — the spec's "matched on Commitment Date" is not implemented; with two masters of one type the pick is arbitrary.
2. **Renumber colliding codes.** For each feature task whose Code (`prexternalid`) already exists on a task in the target master, call `CMN_AUTONUM_GET_NEXT_SP('task','prexternalid',…)`, read `next_value` from `CMN_AUTONUM_SCHEMES`, and PUT it as the task's new `code`. **dev:** codes are *not* cleared as the spec says — only colliding ones change, and the surviving codes are what step 8 matches on. (*Next code in task* still exists as a separate process for tasks with no code.)
3. **Read the feature** from `odf_ca_project ⋈ inv_investments`: `tfs_num`, name (newlines/quotes stripped), `release_date_string`, `cmtk_feature_status`, `commitment_date`, `sw_version`, `project_priority`, `linktotfs`, `orig_tfs`, `customer_camtek`, `valid_ready`, `cust_ready`, `parent_id`, `project_source`, `feat_init`. `feat_init` is nulled unless that user is still `ACTIVE`/`LOCK` and not hidden (so an inactive initiator is never written to tasks). A second query builds a JSON array of the feature's `assigned_group` multi-values but the result is **never used**.
4. **Set `move_yn = Yes`** on the feature (PUT `/projects`, `p_move_yn: true`).
5. **Create the hammock** (POST `/projects/{id}/tasks`): `name` = feature name, `p_parent_link` = `/pm/#/project/{id}/details`, `p_feat_int` = feature id, `p_valid_ready1`, and every non-empty feature attribute copied: `feat_init→p_feat_init1`, `sw_version→p_SW_version`, `project_priority→p_Feature_priority`, `commitment_date→p_commitment_date`, `cmtk_feature_status→p_parent_Feat_stat`, `linktotfs→p_LinkToTFS`, `tfs_num→p_tfs_parent` **and** `p_tfs_tasknum`, `orig_tfs→p_orig_tfstask`, `customer_camtek→p_Customer_camtek`, `parent_id→p_parenTest_`, `project_source→p_project_source`. `linktotfs` and `tfs_tasknum` are written **only here**. **dev:** `cust_ready1` and `assoc_parent` are *not* written to the hammock.
6. **Stamp the child tasks.** For every task in the feature that is not the hammock and has no `phase_milestone`: PUT the same attribute set as step 5 minus `linktotfs`/`tfs_tasknum`/`parent_link`, plus `p_cust_ready1` and `p_proj_term2 = (proj_term1 = 4039)` — i.e. the task marked Ready For Delivery becomes Ready For Delivery Feature.
7. **Nest under the hammock.** Every top-level task (`wbs_parseq = -1`) that is not the hammock and has no `phase_milestone` gets `parentTask = <hammock id>`, in `prwbssequence` order. The two locked phase-end milestones stay home because every task query excludes `phase_milestone` (also on Reopen).
8. **Copy to the master**: PUT `/ppm/rest/v1/private/copyTasksTo/{masterId}` with `srcProjectID` and `srcTaskIDList.d = [{_internalId}, …]` of all non-milestone tasks (the hammock is in the list, so it carries its children). This is the private endpoint behind the UI's *Copy Tasks To*.
9. **Only if the copy returned 200**: for each original task, find its copy in the master by equal `prexternalid`, PUT the original's `startDate`, `finishDate` and `etc` (from `ODF_TASK_V2.prestsum`) onto the copy, sleep 2 s, then DELETE the original from the feature. The feature's Gantt ends up holding only the phase-end milestones.

Spec items **not** in the dev script: the Commitment Date match (step 1), clearing all codes (step 2), `odf_assoc_parent→assoc_parent`, `cust_ready1` on the hammock, and spec step 7 "refresh Ready For Delivery on feature and hammock" (handled by the separate *update delivery finish date* processes).

Known weaknesses in the script (dev):
- Every task filter is written `… AND ot.phase_milestone IS NULL OR ot.phase_milestone = ''` without parentheses, so the `OR` binds last and a task in *any* project with an empty-string milestone would be swept in. Dormant on Postgres as long as the column holds NULL, but fix with parentheses if touched.
- No error handling after login: a failed single-task PUT/DELETE is logged (`NOT success`) and the loop continues; only the copy step gates the deletes.
- The `move_yn` PUT is logged as "Put delete task for Delete summery task" — misleading, it only sets the flag.

Companion jobs in dev: *Move Gant to On Going Status 2- JOB*, *Status 2 Delete- JOB*, *Status 3- JOB*, *Status 3 Delete- JOB* and their *CMM* variants — batch migrations for features already in status 2/3 (spec calls them "conversion-support processes"). *Move feature and task when change Feature Type* moves a hammock between masters when Feature Type changes.

## What runs on the master project
| Concern | Process (dev mode) | Cadence | Note |
|---|---|---|---|
| Task → TFS real time | *Update task - tfs project type On going new trigert v3* (Active), *create task - tfs project type On going* (Active), *TFS - delete task from project type On Going* (Active) | trigger | see [[TFS Integration]] |
| TFS → Clarity status | *Change status from TFS to clatiry task of project On Going- JOB* (Active) | every 10 min (spec) | also clears `admin_tfs` on all tasks |
| Feature → hammock attrs | *Update feature properties for task in On Going* (Active) | trigger on 9 feature attributes | only when `move_yn = Yes` |
| Hammock → feature rollup | *Update project feature from task summery project On Going -JOB* (Active) | spec: 10:00, 13:00, 16:00; dev schedule 19:50 | copies Start/Finish/% Complete to `schedule_start/schedule_finish/inv_percent_complete`; sets In Progress; updates Dev/Validation Phase End milestones |
| Ready for Validation | *Population of the Validation field in the Features object On Going* + *… - change No* (Active), *Population of the Validation - JOB* (Active, 17:30) | trigger / daily | all In-Progress tasks at 100 % → `valid_ready = Yes`, TFS state → Resolved, mail to dmitrid@camtek.com |
| Status → In Progress | *Change feature status in project by prcompleate on going - JOB* (Active) | 01:00 | any task with `for_sta = No` and % > 0 → feature In Progress (3), else back to Active (2) |
| Delivery fields | *update delivery finish date On Going* (On Hold in dev), *update delivery finish date - Job* (Active, 13:20) | trigger / daily | `proj_term2` task finish → `delivery_finish_date` + `release_date_string` |
| Autoschedule | *Autoschedule on All in Going* (Active, 00:00), *Autoschedule on All in Going cmm* (Active, 02:00) | nightly | see [[Custom Autoschedule]] |
| Close completed hammocks | *Update milestone on in Going and CMM* (Active, 02:30) | nightly | hammock at 100 % → complete last milestone, feature → Completed (4), trigger return |
| Return home | *Move project feature to Non Active and create tasks - JOB* (Active, 03:00) | nightly | Completed / Hold (6) / `is_active = No` → copy tasks back, delete hammock |
| Resource filter field | *Update Assigned Resources by Camtek Investment Type* (Active) | spec every 2 min except 04:00–07:00 | fills `ass_res_feature` on tasks and union on hammock |
| Feature size | *Feature Size of project New- JOB* (Active, 05:40) | daily | sums ETC-derived field per hammock → `feature_size` |
| Ready for QA | *Ready For QA - JOB* (Active, 17:42), *update qa in tasks in on going* | daily / trigger | tasks with `is_private_branch = 1` drive project `ready_for_qa` |

## How a hammock gets out — *Move project feature to Non Active and create tasks* (JOB, 03:00)
Trigger: feature with `move_yn = Yes` reaches Feature Status **Completed (4)** (set by the nightly milestone job), **Hold (6)**, or `is_active = No`.
1. Find the hammock whose tasks have `feat_int` = feature id.
2. Copy all tasks back into the feature; copy % complete; copy Start/Finish matched by task `prexternalid`. On *Completed*, tasks may instead be forced to 100 % (excluding phase-milestone tasks).
3. Delete the whole hammock from On Going; in the feature delete only the summary task.
4. Set `move_yn = No`. For Completed features, locate the Validation Phase End milestone (`phase_milestone = 2`).

A repair process *Copying tasks from On Going to Feature Not transfer correctly - TIFULI* re-runs the copy for hammocks whose `parent_feat_stat` is Completed.

## Gotchas
- Trigger-based TFS processes are intentionally scoped by excluded attributes; **new Task attributes must be added to the exclusion list in the process code** or every edit fires a sync (spec).
- Attributes used by the real-time triggers must stay in the **Audit Trail** (spec).
- The hammock's `tfs_tasknum` equals the feature's `tfs_num`; children have `tfs_parent` = that id. Deleting `delete_task` (TFS Active/Non Active) on a task deletes the Azure DevOps work item.
- Dev contains hammocks whose `parent_link` points at the **prod** host (data copied from prod).
- Several same-named processes exist in different modes (e.g. three *Update feature properties for task in On Going*: one Active, two On Hold). Always check **Mode** before editing.

Related: [[Feature Lifecycle]] · [[Camtek Data Model]] · [[Process and Job Catalog]] · [[Tasks Phases Milestones]]

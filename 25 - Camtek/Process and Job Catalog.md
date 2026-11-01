---
title: Camtek Process and Job Catalog
tags:
  - camtek
  - reference
aliases:
  - Camtek Processes
  - Camtek Jobs
  - Process Catalog
canonical: true
client: camtek
audience: dev
domain: client
---

# Camtek Process and Job Catalog

Source: dev, Administration › Processes (232 definitions) and Home › Reports and Jobs › Scheduled Jobs (filter: Execute a Process, Scheduled, Recurring → 36) on 2026-11-01. **Mode** matters: many processes exist in several versions and only one is Active. "JOB" in a name means it has no primary object and is run by a scheduled *Execute a Process* job; "tifuli" (טיפולי) means a one-off repair run; "Once"/"Retro" are back-fills.

## A. Feature flow — Active processes by stage
| Stage | Process | Object | Mode |
|---|---|---|---|
| A create | Create task from feature template to project feature V1 | Project | Active |
| A create | Create task from feature template to project feature test | Project | Active |
| A create | Release date Feature when edit task | Task | Active |
| A create | Update name millstone when change feature status | Project | Active |
| A create | Machine type update from project object / from task object - TFS | Project / Task | Active |
| A TFS | create task - tfs project type feature | Task | Active |
| A TFS | Update task - tfs project type feature new triger v3 include also copy task | Task | Active |
| A TFS | Update task - tfs project type feature new - job | — | Active |
| A TFS | TFS update project type feature and change name &status task v1 | Project | Active |
| A TFS | TFS - delete task from project type feature | Task | Active |
| A TFS | Delete work items from TFS | — | Active |
| A TFS | Delete TFS num from project & task - DEV ONLY ! | — | Active (dev safety) |
| B autos | Autoschedule on All Projects / on All in Going / on All in Going cmm | — | Active |
| B autos | Autoschedule on Project | Project | Active |
| B autos | Unlock Projects after Autoschedule; שחרור נעילת פרויקט / … כל הפרויקטים - JOB | Project / — | Active |
| B complete | update actual by pct complete V2 | Task | Active |
| B complete | update actual by pct complete - ALL | — | Active |
| B complete | update Task when Completed change | Task | Active |
| B | Update milestone on in Going and CMM | — | Active |
| B | Update Assigned Resources by Camtek Investment Type (+ - job, Retro, Retro -V2) | — | Active |
| B | Feature Size of project New- JOB; Sum Etc Feature | — | Active |
| C move | Move Gant to On Going | Project | Active |
| C move | Move Gant to On Going Status 2/3 (Delete) (CMM) - JOB ×8 | — | Active |
| C move | Move feature and task when change Feature Type | Project | Active |
| D TFS | create task - tfs project type On going | Task | Active |
| D TFS | Update task - tfs project type On going new trigert v3 | Task | Active |
| D TFS | Update task - tfs project type On going new - job | — | Active |
| D TFS | TFS - delete task from project type On Going | Task | Active |
| D TFS | Change status from TFS to clatiry task of project On Going- JOB | — | Active |
| E | Update feature properties for task in On Going | Project | Active (2 On Hold copies) |
| E | Update field from feature to on going (+ tifuli) | — | Active |
| E | Update project feature from task summery project On Going -JOB | — | Active |
| E | Population of the Validation field in the Features object On Going / … - change No / … (plain) / … - job / … - JOB / … - AI | Task / — / Project | Active |
| E | Change feature status in project by prcompleate on going - JOB | — | Active |
| E | update delivery finish date - Job; Update delivery finish date- tifuli | — | Active |
| E | Turn on/off Ready For Customer by complete attribute | Task | Active |
| E | Ready For QA - JOB; update qa in tasks in on going; update qa in summery task … - Once; Update Ready For QA - Once | — / Project | Active |
| E | Update customer fiels in On going; Update project source fiels in On going | — | Active |
| F close | Move project feature to Non Active and create tasks - JOB | — | Active |
| F close | Copying tasks from On Going to Feature Not transfer correctly - TIFULI | — | Active |
| misc | Commitment date -JOB; Cross Dependency Count Field; Update predecssor_; Next code in task; Creating dependencies from custom project; DeleteDependencies - project; import task from feature to project; Update parent in task from project owner; הוספת אבני דרך לפיצ'רים קיימים; Update original etc by ETC | — | Active |

## B. Superseded / On Hold versions (do not edit — history)
Create task from feature template to project feature (v0) · Create tasks when create features (in project) and create in TFS · Tfs create feature (Features object era) · create task - tfs feature / feature new · Update task - tfs feature … (all variants) · Update task - tfs project type feature new (include also copy task / triger / triger v2) · Update task - tfs project type On going new / trigert / trigert v2 · TFS update feature and change name &status task · TFS update project type feature and change name &status task (v0) · TFS update project type feature - remove originaTFSnumber · TFS - delete task from feature · update and create task - tfs feature · Adjustments in the TFS system ×4 · Change releaseDate to commitment_date_string TFS ×2 · Create (Project type) feature in tfs by ID - loop ×2 · Autoschedule on All Features · AutoscheduleDate - job / feature job / all feature job · auto_sch · Arrange Task By Date (Features) · Creating dependencies from custom feature · DeleteDependencies - feature · Massage to manger role feature · Move project feature to Non Active and create tasks (trigger version; replaced by JOB) · update actual by pct complete (v1) · update delivery finish date / … On Going (trigger versions) · Update feature properties for task in On Going ×2 · Update assigned_resources from task to TFS - JOB · Update Assigned Resources on in Going · Update link tfs on project · Update Retro TFS Tasks · update etc from clarity to tfs · update all work items tasks · Insert Area field to TFS - tifuli · Feature Size of project - JOB · Change status from TFS to clatiry - JOB (v0) · Hold in task - feature? (Active) · Reason for delay · Reset ETC · Task Complete Process (+ job) · priority attribute … ×2 · proceed retro release date · שליחת התראה למשתמשים בסיום פרויקט (old copy).

The *Features* custom-investment object was the **first-generation** home of features (processes with primary object *Features*: Tfs create feature, Create tasks when create features…, Arrange Task By Date, Creating dependencies from custom feature). Features were then moved to the Project object ("PROJECT type feature" in names); the Features object now only holds templates.

## C. Draft / in development
Autoschedule on Feature, Autoschedule on in Going (action versions), Autoschedule on All in Going (cmm) Audit (backups dated 1.4.26), Create task from feature template to project feature V2 (adds Machine Type), Tfs create feature in project object, TFS - update prcomplete from tfs, Update task - tfs feature Comp and status V2, Update task - tfs going comp and status v2, Update Task Status by Pct complete, Update work item Tfs from clarity tasks (weekly reconciliation), Complete all task, Copy staff to project staff on project - ACTION, create action item on task 1.3, import external dependencies from features to project, Current Phase complete and Markup is null, Project type Customer IS Evaluation AND Completed is 100, BC Autoschedule on All Projects.

## D. Regular-project processes (not feature flow)
Camtek Status gates: case1 change current phase, case2 and 3 completed 100, case3 create project type 14, case4 current phase G0, case4 part2 Ready for Delivery is yes, Current phase change markup / complete / Termination Markup change / was complete, Open New Project case 1.1/1.2/1.4/2.3/3.3, Update Blueprint by Project Type, Update Customer Territory in Project, Product owner in project by product (+ -project), create action item on project 1.3, Add Icon Task When Critical (+ JOB), put icon critical task - tifuli, Hold in Task, duration and finish on task by baseline, save baseline auto, creat baseline and duration - tifuli, Is Above Threshold risk, priority attribute in risk object - triger risk, Delivery Deviation and Delivery Compliance - job, Mail to manager project change commitment date / Delivery Finish date, Update original delivery finish date (+ job), אכלוס שדה Success at first time, Availability percentage calculation by project manager (p / PC / JOB), PM Balance object resource (+ all data), Prototype order (+ job), samples attribute, Feature Backlog / Feature Backlog new, On Leave: Change name On Leave, change name by on leave in task, Mange Calender resource (+ create), Change complete to 100 in On Leave tasks - JOB, copy name in customer object, Copy staff to project staff on project, Delete resources permissions, change resource name, process complete task report - mail for us, process daily report, Retry Process error, run query from gel, remove all bomb from task, reset_psw, sent email to manager project, update_, test, testh.

## E. Scheduled jobs (dev, all *Execute a Process*, recurring)
| Job name | Next run seen |
|---|---|
| Autoschedule on All in Going | 00:00 |
| Update predecssor_ | 00:30 |
| Cross Dependency Count Field | 00:33 |
| Change feature status in project by prcompleate on going – JOB | 01:00 |
| Autoschedule on All in Going cmm | 02:00 |
| Unlock Projects after Autoschedule 2 | 02:15 |
| Update milestone on in Going | 02:30 |
| Move project feature to Non Active and create tasks - JOB | 03:00 |
| update actual by pct complete - ALL | 03:45 |
| Change complete to 100 in On Leave tasks - JOB | 03:56 |
| process daily report | 04:00 |
| שחרור נעילת כל הפרויקטים - JOB | 05:10 |
| Feature Size of project New- JOB | 05:40 |
| Sum Etc Feature | 06:10 |
| Delivery Deviation and Delivery Compliance - job | 07:25 |
| Add Icon Task When Critical - JOB | 08:09 |
| Update Assigned Resources by Camtek Investment Type | 10:28 (spec: every 2 min, paused 04–07) |
| Change status from TFS to clatiry task of project On Going- JOB | 10:30 (spec: every 10 min) |
| update etc from clarity to tfs | 11:00 |
| Update assigned_resources from task to TFS - JOB | 12:43 |
| update delivery finish date - Job | 13:20 |
| Adjustments in the TFS system : Duplicate - JOB | 14:23 |
| Update original delivery finish date - job | 17:00 |
| Population of the Validation - JOB | 17:30 |
| ready for qa -JOB | 17:42 |
| priority attribute in task object - tifuli | 18:00 |
| AutoscheduleDate - job new | 18:30 |
| Task Complete Process - job | 18:49 |
| is above Thresholed | 19:21 |
| Update project feature from task summery project On Going -JOB | 19:50 |
| Autoschedule on All Projects | 20:00 |
| Update delivery finish date- tifuli | 20:05 |
| Commitment date -JOB | 21:12 |
| Update original etc by ETC | 21:14 |
| Unlock Projects after Autoschedule | 21:30 |
| Update Assigned Resources by Camtek Investment Type Retro | 21:30 |

Times are the *next scheduled* instant seen on 2026-11-01; recurrence intervals were not opened. Note several "tifuli"/"Once" repair processes are still scheduled daily in dev.

## F. Where to look in the UI
- Definitions: Classic › Administration › Data Administration › **Processes** (`#action:bpm.processDefinitions`). Filter by *Primary Object* or *Mode*.
- Schedules: Classic › Home › **Reports and Jobs** › Scheduled Jobs (`#action:nmc.schJobSearch`), Job Type = Execute a Process.
- Instances/errors: process instance list on the object, or Classic › Organizer › Processes.

Related: [[Feature Lifecycle]] · [[On Going Feature Project]] · [[Processes Configuration]] · [[Reports and Jobs Config]]

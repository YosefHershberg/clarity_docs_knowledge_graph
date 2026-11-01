---
title: Camtek Glossary
tags:
  - camtek
  - reference
aliases:
  - Camtek Terms
  - מילון קמטק
canonical: true
client: camtek
audience: everyone
domain: client
---

# Camtek Glossary (Hebrew ⇄ English)

Terms as used in the spec *ניהול פיצ'רים - קמטק*, in process names, and in conversations with Camtek. English column is the wording used across this vault.

| Hebrew | English used here | Meaning in Camtek's Clarity |
|---|---|---|
| פיצ'ר | **Feature** | A Project instance with `type_in = 2` (also Bug = 4). Blueprint *Features Camtek* |
| ערסל | **Hammock** (summary task) | A summary task in an On Going master project named after a feature, holding that feature's tasks. `Is Task = No`, `Milestone = No` |
| On Going / און גוינג | **On Going master project** | Container projects *On Going Feature* (`type_in = 3`) and *On Going CMM* (`type_in = 6`) |
| פיצ'ר ראשי | master feature | Older name for the On Going project |
| אוטוס' / אוטוסקדיול מקוסטם | **Custom Autoschedule** | The GEL-prepared autoschedule jobs |
| ג'וב | **Job** (scheduled process) | A process without a primary object, run by *Execute a Process* on a schedule; suffix "- JOB" |
| טריגר | **Trigger** | Process started by an object event (create/update) with a start condition |
| אקשן / Action | **Action** | Process started manually from the object's Actions menu |
| תבנית | **Template** | A Features-object instance (FEA000…) whose tasks are copied into a new feature |
| משימה | task | Clarity task (`Is Task = Yes`) |
| אבן דרך | milestone | `Milestone = Yes` |
| תת-משימה | child task | task nested under a hammock |
| גאנט | Gantt | the task list of a project |
| העברת הגאנט לערסל | move Gantt to On Going | *Move Gant to On Going* |
| החזרת הערסל לבית | return home | *Move project feature to Non Active and create tasks* |
| השלמה | completion (100 %) | `prpctcomplete = 100` |
| אחוז השלמה | % complete | |
| קומיטמנט דייט / תאריך קומיטמנט | **Commitment Date** | `commitment_date`; also the custom object with 6 date windows |
| דליוורי / Ready For Delivery | Ready For Delivery | `release_date_string` ("Month Year") and the task flag `proj_term1` / `proj_term2` |
| ולידציה | Validation | Task Phase 3; *Ready for Validation* `valid_ready` |
| סטטוס פיצ'ר | Feature Status | `cmtk_feature_status` (Backlog, Active, In Progress, Completed, Rejected, Hold) |
| פעיל / לא פעיל | Active / Non Active | project `is_active`; on tasks "TFS Active/Non Active" = `delete_task` |
| הסבות | migration / conversion | one-off processes that back-filled existing data ("תהליכים תומכי הסבות") |
| טיפולי (tifuli) | repair run | one-off fix process; suffix "- tifuli" |
| חד פעמי | one-time | run once, then On Hold |
| שדה | attribute / field | |
| לוקאפ | lookup | |
| משאב | resource | |
| פרד' (פרידססור) | predecessor | task dependency |
| TFS | **Azure DevOps** (Falcon project) | the developers' work-item system |
| Work Item / וורק אייטם | work item | Azure DevOps item: *Clarity Feature* or *Clarity Task* |
| CMM | CMM | Camtek product line (metrology); Feature Types *CMM Feature* and *CMM Bug* route to On Going CMM |
| MRK / MRD | marketing requirement dates | `mrk_req_date`, `mrd_received` on regular projects |
| Proceed | **Proceed** (implementation partner) | user *PPM Proceed*, author of most processes |
| הילל, מאי, רחלי | Hillel, May, Racheli | consultants named in spec/attribute names (process authorship), not system terms |

## Abbreviations in process names
| Token | Meaning |
|---|---|
| `PROJECT type feature` | second-generation implementation on the Project object (vs first generation on the *Features* object) |
| `On going` / `in Going` | runs on the On Going master projects |
| `new`, `v1`, `v2`, `v3`, `triger(t)` | successive versions; check **Mode** to find the live one |
| `JOB` | scheduled, no primary object |
| `Once`, `Retro`, `tifuli`, `loop` | back-fill / repair, usually On Hold after use |
| `DEV ONLY` | dev-environment safety process |
| `Audit` | frozen backup copy of a process before a change |

Related: [[Camtek Overview]] · [[Camtek Data Model]]

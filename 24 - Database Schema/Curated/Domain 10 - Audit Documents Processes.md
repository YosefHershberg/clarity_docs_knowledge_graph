---
title: Domain 10 - Audit Documents Processes
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 10
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/audit
---

# Domain 10 — Audit, Documents, Action Items, Processes

## Tables in this domain (16.4.1 reality)

In dump:
- [[CAL_ACTION_ITEMS]] — action items / to-dos (legacy KB calls this `SRM_ACTIONITEMS`)
- [[CAL_ACTION_ITEM_ASSIGNEES]] — assignees of action items
- [[CAL_AUDITS]] — calendar audit trail
- [[CAL_EVENTS]], [[CAL_EVENT_INVITEES]], [[CAL_EVENT_DELETION_LOGS]], [[CAL_SCHEDULED_EVENTS]] — calendar events
- [[CLB_DMS_FOLDERS]] — knowledge-store folders
- [[CLB_DMS_FILES]] — knowledge-store documents (legacy KB calls this `CLB_DMS_OBJECTS`)
- [[CLB_DMS_FILE_STORE]] — physical file storage
- [[CLB_DMS_FLAT_HIERARCHY]] — folder closure
- [[CLB_DMS_HISTORIES]], [[CLB_DMS_VERSIONS]] — version/history

Off-screen (legacy KB names; verify columns via `INFORMATION_SCHEMA.COLUMNS`):
- [[CMN_AUDITS]] — Studio-attribute audit-trail (off-screen)
- [[BPM_DEF_PROCESSES]], [[BPM_RUN_PROCESSES]] — workflow definitions and runtime instances (off-screen)
- [[CMN_SCH_JOBS]], [[CMN_SCH_JOB_RUNS]] — scheduler (off-screen — though [[CBK_SCH_JOB_RUNS]] for chargeback jobs is in dump)

## CMN_AUDITS

> [!info] Purpose
> Audit-trail rows — every Studio-tracked attribute change creates one.

> [!warning] Off-screen / not in 16.4.1 dump

- **Primary key (legacy KB).** `ID`.
- **Key columns (legacy KB).** `OBJECT_CODE`, `OBJECT_INSTANCE_ID`, `ATTRIBUTE_CODE`, `OLD_VALUE`, `NEW_VALUE`, `CHANGED_BY` ([[CMN_SEC_USERS]].`ID`), `CHANGED_DATE`. **Verify against environment.**

## CLB_DMS_FOLDERS / CLB_DMS_FILES

> [!info] Purpose
> Knowledge Store / document management — folders and documents attached to investments, resources, etc.

- [[CLB_DMS_FOLDERS]] — folders. Verified in vault.
- [[CLB_DMS_FILES]] — files (legacy KB calls these "objects"). Verified in vault.
- [[CLB_DMS_FILE_STORE]] — physical bytes / blob storage.
- [[CLB_DMS_VERSIONS]] — file versions.
- [[CLB_DMS_HISTORIES]] — change history.
- [[CLB_DMS_FLAT_HIERARCHY]] — folder closure for hierarchy lookups.

## CAL_ACTION_ITEMS

> [!info] Purpose
> Action items / to-dos attached to investments, processes, etc. **Legacy KB calls this `SRM_ACTIONITEMS`** — in 16.4.1 the table is named [[CAL_ACTION_ITEMS]].

> [!example] Verified columns live in [[CAL_ACTION_ITEMS]]

### Polymorphic pattern

Action items reference their parent via `OBJECT_ID` / `SUB_OBJECT_ID` (which point at [[INV_INVESTMENTS]].`ID`). Assignees are in [[CAL_ACTION_ITEM_ASSIGNEES]] with a `PROXY_RESOURCE_ID` / `PROXY_SOURCE_ID` pair pointing at [[SRM_RESOURCES]] / [[CMN_SEC_USERS]].

```sql
-- All open action items for a project, with assignees
SELECT  i.CODE, ai.SUBJECT, ai.STATUS, ai.PRIORITY, ai.DUE_DATE,
        r.UNIQUE_NAME AS assignee
FROM    INV_INVESTMENTS    i
JOIN    CAL_ACTION_ITEMS   ai  ON ai.OBJECT_ID = i.ID
LEFT    JOIN CAL_ACTION_ITEM_ASSIGNEES ass ON ass.CAL_ACTION_ITEM_ID = ai.ID
LEFT    JOIN SRM_RESOURCES r   ON r.USER_ID = ass.PROXY_SOURCE_ID
WHERE   i.CODE = 'PR1001';
```

## BPM_DEF_PROCESSES / BPM_RUN_PROCESSES

> [!info] Purpose
> Process definitions and runtime instances (the workflow engine).

> [!warning] Off-screen / not in 16.4.1 dump

- **Key columns — definition (legacy KB).** `CODE`, `NAME`, `OBJECT_CODE`, `IS_ACTIVE`, `VERSION`.
- **Key columns — runtime (legacy KB).** `PROCESS_ID`, `OBJECT_INSTANCE_ID`, `STATUS`, `START_DATE`, `END_DATE`, `INITIATED_BY`. **Verify against environment.**

## CMN_SCH_JOBS / CMN_SCH_JOB_RUNS

> [!info] Purpose
> Scheduled jobs (datamart, time slicing, posting) and their run history. Status, error log, last/next run.

> [!warning] Off-screen / not in 16.4.1 dump
> [[CBK_SCH_JOB_RUNS]] (chargeback-specific) is in the dump and may give you the column shape; the global `CMN_SCH_JOBS` table is not.

## See also
- [[Domain 04 - Time Timesheets and Slicing]] — slicer is one of these scheduled jobs
- [[Domain 06 - Security]] — `CHANGED_BY` joins to users
- [[Universal Conventions]] — polymorphic `OBJECT_CODE` / `OBJECT_INSTANCE_ID` pattern
- [[_MOC - Curated SQL Knowledge]]

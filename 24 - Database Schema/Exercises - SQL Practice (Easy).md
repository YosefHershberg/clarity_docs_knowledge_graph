---
title: SQL Practice — Easy (Resources, OBS, Tasks, Assignments)
type: exercise
audience: dev
domain: development
canonical: false
tags:
  - dev
  - schema
  - exercise
  - sql
  - practice
  - easy
---

# SQL Practice — Easy

Ten **easy** exercises across `SRM_RESOURCES`, `CMN_SEC_USERS`, `PRJ_OBS_UNITS`, `PRJ_OBS_ASSOCIATIONS`, `PRTASK`, `PRASSIGNMENT`, and `ODF_CA_TASK`. Single-table queries and simple two-table joins only — no CTEs, no window functions, no recursion.

## Schema diagram

![[Diagram - Resources OBS Tasks Assignments.svg]]

> [!warning] Quick reminders before you start
> - `IS_ACTIVE = 1` for active rows.
> - `PRTASK` columns have **no underscore** after `PR`: `PRID`, `PRPROJECTID`, `PRNAME`, `PRWBSLEVEL`, `PRWBSSEQUENCE`, `PRISTASK`.
> - `PRISTASK = 1` → detail (leaf) task. `PRISTASK = 0` → summary task.
> - `SRM_RESOURCES.MANAGER_ID` points to `CMN_SEC_USERS.ID`, **not** `SRM_RESOURCES.ID`.
> - `PRJ_OBS_ASSOCIATIONS.TABLE_NAME` is a string. For resources use `'SRM_RESOURCES'` (case-sensitive).

---

## Exercise 1 — All active resources

List the `UNIQUE_NAME`, `FULL_NAME`, and `EMAIL` of every active resource, sorted by `FULL_NAME`.

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  UNIQUE_NAME, FULL_NAME, EMAIL
FROM    SRM_RESOURCES
WHERE   IS_ACTIVE = 1
ORDER   BY FULL_NAME;
```

</details>

---

## Exercise 2 — Find one resource by `UNIQUE_NAME`

Return all columns for the resource whose `UNIQUE_NAME = 'jdoe'`.

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  *
FROM    SRM_RESOURCES
WHERE   UNIQUE_NAME = 'jdoe';
```

</details>

---

## Exercise 3 — Count active vs inactive resources

Return two rows: one for `IS_ACTIVE = 1`, one for `IS_ACTIVE = 0`, with the row count of each.

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  IS_ACTIVE,
        COUNT(*) AS resource_count
FROM    SRM_RESOURCES
GROUP   BY IS_ACTIVE
ORDER   BY IS_ACTIVE;
```

</details>

---

## Exercise 4 — Resources with their login user

Show every active resource that has a login user — `UNIQUE_NAME`, `FULL_NAME`, `USER_NAME`, `LAST_LOGIN_DATE`. Resources without a login should not appear.

> [!hint] Hint
> An `INNER JOIN` filters out resources whose `USER_ID IS NULL`.

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  r.UNIQUE_NAME,
        r.FULL_NAME,
        u.USER_NAME,
        u.LAST_LOGIN_DATE
FROM    SRM_RESOURCES r
JOIN    CMN_SEC_USERS u ON u.ID = r.USER_ID
WHERE   r.IS_ACTIVE = 1
ORDER   BY u.LAST_LOGIN_DATE DESC;
```

</details>

---

## Exercise 5 — Root OBS units

List every OBS unit that is at the top of its tree (no parent) — return `ID`, `UNIQUE_NAME`, `NAME`, `DEPTH`.

> [!hint] Hint
> Roots have `PARENT_ID IS NULL`.

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  ID, UNIQUE_NAME, NAME, DEPTH
FROM    PRJ_OBS_UNITS
WHERE   PARENT_ID IS NULL
ORDER   BY NAME;
```

</details>

---

## Exercise 6 — Direct children of an OBS unit

Given an OBS unit with `ID = 5000123` (substitute your own), list its **direct** children (one level down only) — `ID`, `UNIQUE_NAME`, `NAME`, `DEPTH`.

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  ID, UNIQUE_NAME, NAME, DEPTH
FROM    PRJ_OBS_UNITS
WHERE   PARENT_ID = 5000123
ORDER   BY NAME;
```

</details>

---

## Exercise 7 — Resources tagged to one OBS unit

Given an OBS unit with `ID = 5000123`, list every resource directly associated with it — `UNIQUE_NAME`, `FULL_NAME`.

> [!hint] Hint
> Filter `PRJ_OBS_ASSOCIATIONS.TABLE_NAME = 'SRM_RESOURCES'`. The `RECORD_ID` is then `SRM_RESOURCES.ID`.

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  r.UNIQUE_NAME,
        r.FULL_NAME
FROM    PRJ_OBS_ASSOCIATIONS oa
JOIN    SRM_RESOURCES        r ON r.ID = oa.RECORD_ID
WHERE   oa.UNIT_ID    = 5000123
  AND   oa.TABLE_NAME = 'SRM_RESOURCES'
ORDER   BY r.FULL_NAME;
```

</details>

---

## Exercise 8 — All tasks of a project

Given project `PRPROJECTID = 5001234`, list every task — `PRID`, `PRNAME`, `PRWBSLEVEL`, `PRSTART`, `PRFINISH` — ordered by WBS sequence.

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  PRID, PRNAME, PRWBSLEVEL,
        PRSTART, PRFINISH
FROM    PRTASK
WHERE   PRPROJECTID = 5001234
ORDER   BY PRWBSSEQUENCE;
```

</details>

---

## Exercise 9 — Assignments on a task with the resource name

Given task `PRTASKID = 6000456`, list every assignment with the assigned resource's `FULL_NAME`, plus `PRESTSUM` and `PRACTSUM`.

> [!hint] Hint
> `PRASSIGNMENT.PRRESOURCEID` joins to `SRM_RESOURCES.ID` (despite the legacy column comment).

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  r.FULL_NAME,
        a.PRESTSUM,
        a.PRACTSUM,
        a.PRSTATUS
FROM    PRASSIGNMENT  a
JOIN    SRM_RESOURCES r ON r.ID = a.PRRESOURCEID
WHERE   a.PRTASKID = 6000456
ORDER   BY r.FULL_NAME;
```

</details>

---

## Exercise 10 — Tasks plus their custom attributes

For project `PRPROJECTID = 5001234`, list every detail task and any custom-attribute row from `ODF_CA_TASK`. Tasks with no row in `ODF_CA_TASK` must still appear.

> [!hint] Hint
> `ODF_CA_TASK.ID = PRTASK.PRID`. Use `LEFT JOIN` because not every task has a row. Replace `Z_RISK_LEVEL` with the real custom attribute column from your install (Studio → Objects → Task → Attributes → Database Column).

<details>
<summary><b>Show solution</b></summary>

```sql
SELECT  t.PRID,
        t.PRNAME,
        odf.Z_RISK_LEVEL          -- replace with your real column
FROM    PRTASK          t
LEFT    JOIN ODF_CA_TASK odf ON odf.ID = t.PRID
WHERE   t.PRPROJECTID = 5001234
  AND   t.PRISTASK    = 1
ORDER   BY t.PRWBSSEQUENCE;
```

</details>

---

## See also
- [[Exercises - SQL Practice (Resources, OBS, Tasks, Assignments)]] — medium/hard exercises on the same tables
- [[SRM_RESOURCES]], [[PRJ_OBS_UNITS]], [[PRJ_OBS_ASSOCIATIONS]], [[PRTASK]], [[PRASSIGNMENT]]
- [[Domain 02 - Tasks Assignments and Team]], [[Domain 05 - OBS]], [[Domain 03 - Resources Roles and Calendars]]

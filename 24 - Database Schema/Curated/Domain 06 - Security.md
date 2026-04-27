---
title: Domain 06 - Security
type: reference
audience: dev
domain: development
canonical: true
sot: true
domain_index: 6
tags:
  - dev
  - schema
  - reference
  - sot
  - curated
  - domain/security
---

# Domain 06 — Security: Users, Groups, Rights

> [!warning] Most security tables are off-screen in 16.4.1
> The Niku 16.4.1 schema dump filters out shared infrastructure tables — most `CMN_SEC_*` tables are not in the dump. The descriptions below come from the curated KB; **column-level details must be confirmed via `INFORMATION_SCHEMA.COLUMNS`** against your environment.
>
> The two security tables that DO have full notes in the vault are [[CMN_SEC_USERS]] and [[CMN_SEC_GROUPS]] — both stub-grade.

## Tables in this domain

- [[CMN_SEC_USERS]] — login user accounts (off-screen stub; covered in [[Domain 03 - Resources Roles and Calendars]])
- [[CMN_SEC_GROUPS]] — security groups (off-screen stub)
- [[CMN_SEC_USER_GROUPS]] — user/group M:N (off-screen)
- [[CMN_SEC_RIGHTS]] — catalog of all rights (off-screen)
- [[CMN_SEC_ASSGND_RIGHTS]] — granted global rights (off-screen)
- [[CMN_SEC_ASSGND_OBJ_PERM]] — instance-level permissions (off-screen)
- [[CMN_SEC_ASSGND_OBS]] — OBS-based rights (off-screen)
- [[CMN_PARTITIONS]] — multi-tenant partitions (off-screen)

## CMN_SEC_GROUPS

> [!info] Purpose
> Security groups — collections of users / resources that receive bundled rights.

- **Primary key.** `ID`.
- **Key columns (legacy KB).** `GROUP_CODE`, `NAME`, `DESCRIPTION`, `IS_ACTIVE`, `IS_GLOBAL`. Verify on [[CMN_SEC_GROUPS]].

## CMN_SEC_USER_GROUPS

> [!info] Purpose
> M:N membership — which user belongs to which group.

- **Key columns (legacy KB).** `USER_ID` → [[CMN_SEC_USERS]].`ID`, `GROUP_ID` → [[CMN_SEC_GROUPS]].`ID`, `IS_ACTIVE`.

## CMN_SEC_RIGHTS

> [!info] Purpose
> Catalog of all available rights in the system (global rights, OBS-instance rights, object-instance rights).

- **Primary key.** `ID`.
- **Key columns (legacy KB).** `RIGHT_CODE`, `NAME`, `DESCRIPTION`, `RIGHT_TYPE` (`Global` / `Instance` / `OBS`).

## CMN_SEC_ASSGND_RIGHTS

> [!info] Purpose
> Granted global rights — which user/group has which right.

- **Key columns (legacy KB).** `PRINCIPAL_ID` (user or group), `PRINCIPAL_TYPE` (`USER` / `GROUP`), `RIGHT_ID`.

> [!info] Polymorphic principal pattern
> The `PRINCIPAL_TYPE` + `PRINCIPAL_ID` pair is a polymorphic FK. Same pattern in [[CMN_SEC_ASSGND_OBJ_PERM]] and [[CMN_SEC_ASSGND_OBS]]. See [[Universal Conventions]].

## CMN_SEC_ASSGND_OBJ_PERM

> [!info] Purpose
> Instance-level permissions (e.g. "user X has Edit on project Y").

- **Key columns (legacy KB).** `PRINCIPAL_ID`, `PRINCIPAL_TYPE`, `RIGHT_ID`, `OBJECT_INSTANCE_ID`, `OBJECT_CODE`.

## CMN_SEC_ASSGND_OBS

> [!info] Purpose
> OBS-based rights — grant a right scoped to an OBS unit (with mode: this only / and children / and parents / and descendants).

- **Key columns (legacy KB).** `PRINCIPAL_ID`, `PRINCIPAL_TYPE`, `RIGHT_ID`, `OBS_UNIT_ID`, `OBS_ASSOC_MODE`.

## CMN_PARTITIONS

> [!info] Purpose
> Multi-tenant partitions — system-wide data slicing (different from OBS).

- **Primary key.** `CODE`.
- **Key columns (legacy KB).** `NAME`, `PARENT_CODE`, `IS_DEFAULT`.

## Effective security computation

> [!warning] Don't compute effective security in raw SQL
> Effective rights are the **union** of: global rights, instance grants, OBS grants (with mode), and group memberships expanded. Computing this correctly in raw SQL is expensive and error-prone. Use the API or pre-built views (`CMN_SEC_*_VW`).

> [!info] User with no rights still logs in
> A user with no rights at all can still log in but sees nothing — distinct from `IS_ACTIVE = 0`.

## See also
- [[Domain 03 - Resources Roles and Calendars]] — `CMN_SEC_USERS` profile
- [[Domain 05 - OBS]] — OBS-scoped grants
- [[Universal Conventions]] — polymorphic principal pattern
- [[_MOC - Curated SQL Knowledge]]

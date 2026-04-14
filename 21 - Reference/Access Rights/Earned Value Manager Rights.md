---
title: Earned Value Manager (EVM) Add-In Access Rights
tags:
  - reference
  - admin
aliases:
  - EVM Rights
  - Earned Value Rights
canonical: true
audience: everyone
domain: reference
---
# Earned Value Manager (EVM) Add-In Access Rights

The EVM add-in provides access rights for Agencies, Contracts, and Control Accounts.

## Agency Access Rights

| Right Name | Type | Description |
|---|---|---|
| Agency - Create | Global | Allows creating agencies. Includes page navigation right. |
| Agency - Edit | Instance | Allows editing a specific agency. Does not include Agency - Navigate. |
| Agency - Edit Access Rights | Instance | Allows editing access rights for a specific agency. |
| Agency - Edit - All | Global | Allows editing all agencies. Includes Agency - View - All. |
| Agency - Navigate | Global | Allows navigation to agency pages. Additional rights required to view individual agencies. |
| Agency - View | Instance | Allows viewing a specific agency. Does not include Agency - Navigate. |
| Agency - View Access Rights | Instance | Allows viewing access rights for a specific Agency. |
| Agency - View Access Rights - All | Global | Allows viewing access rights for all agencies. |
| Agency - View - All | Global | Allows viewing all agencies. Includes Agency - Navigate. |

## Contract Access Rights

| Right Name | Type | Description |
|---|---|---|
| Contract - Baseline Delete | Instance | Allows deleting baselines for a specific contract. Requires Contract - Edit. |
| Contract - Baseline Delete - All | Global | Allows deleting baselines for all contracts. Requires Contract - Edit. |
| Contract - Baseline Edit | Instance | Allows creating and updating baselines for a specific Contract. Requires Contract - Edit. |
| Contract - Baseline Edit - All | Global | Allows creating and updating baselines for all contracts. Requires Contract - Edit. |
| Contract - Create | Global | Allows creating contracts. Includes page navigation right. |
| Contract - Edit | Instance | Allows editing a specific contract. Includes ability to edit/delete CWBS elements, control accounts, SLPPs, and work packages. |
| Contract - Edit - All | Global | Allows editing all contracts. Includes ability to delete contracts and Contracts - View - All. |
| Contract - Edit Access Rights | Instance | Allows editing access rights for a specific contract. |
| Contract - Edit Access Rights - All | Global | Allows editing access rights for all contracts. |
| Contract - Edit only | Instance | Allows editing but not deleting a specific contract and its CWBS elements. |
| Contract - Edit only - All | Global | Allows editing but not deleting all contracts. Includes Contracts - View - All. |
| Contract - Manager (Auto) | Instance | Automatic right granted to the manager of a specific contract. |
| Contract - Navigate | Global | Allows navigation to Contract pages. |
| Contract - View | Instance | Allows viewing a specific contract. Does not include Contract - Navigate. |
| Contract - View - All | Global | Allows viewing all contracts. Includes Contract - Navigate. |
| Contract - View Access Rights | Instance | Allows viewing access rights for a specific contract. |
| Contract - View Access Rights - All | Global | Allows viewing access rights for all contracts. |

## Control Account Access Rights

| Right Name | Type | Description |
|---|---|---|
| Control Account - Create | Global | Allows creating control accounts. Includes ability to create work packages. |
| Control Account - Edit | Instance | Allows editing a specific control account. Includes editing/deleting work packages. |
| Control Account - Edit - All | Global | Allows editing all control accounts. Includes Control Account - View - All and all work packages. |
| Control Account - Edit Access Rights | Instance | Allows editing access rights for a specific control account. |
| Control Account - Edit Access Rights - All | Global | Allows editing access rights for all control accounts. |
| Control Account - Manager (Auto) | Instance | Automatic right granted to the manager of a specific control account. |
| Control Account - Navigate | Global | Allows navigation to control account pages. |
| Control Account - View | Instance | Allows viewing a specific control account. Includes viewing work packages. |
| Control Account - View Access Rights | Instance | Allows viewing access rights for a specific control account. |
| Control Account - View Access Rights - All | Global | Allows viewing access rights for all control accounts. |
| Control Account - View - All | Global | Allows viewing all control accounts. Includes Control Account - Navigate and all work packages. |

## EVM Job Access Rights

To manage any EVM job, the following access rights are required:

| Right Name | Type | Description |
|---|---|---|
| Jobs - Access | Global | Allows access to jobs pages. |
| Job - Edit Properties | Global | Allows viewing and editing job properties, rescheduling, and viewing output. |
| Job - Run | Global | Allows running jobs, editing job properties, and viewing job output. Requires Jobs - Access. |
| Jobs - Run - All | Global | Allows running, scheduling, and editing properties for any job. |
| Jobs - View Output | Global | Allows viewing output of accessible jobs. Requires Jobs - Access. |
| Jobs - View Output - All | Global | Allows viewing output of any job. Requires Jobs - Access. |
| Jobs - Administrator Access | Global | Allows viewing job definitions and categories. |
| Jobs - Create Definition | Global | Allows creating, editing, and viewing job definitions. Requires Jobs - Administrator Access. |
| Jobs - Edit Definition | Instance | Allows viewing and changing job definitions. Requires Jobs - Administrator. |
| Jobs - Edit Definition - All | Global | Allows editing any job definition. Requires Jobs - Administrator Access. |

## Related
- [[Overview]]
- [[_MOC Reference]]

%%Source: p3630-3632%%

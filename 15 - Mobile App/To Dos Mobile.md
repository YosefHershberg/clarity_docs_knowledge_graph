---
title: To Dos (Mobile)
tags:
  - howto
aliases:
  - To Dos Mobile
canonical: true
audience: everyone
domain: mobile
---

# To Dos (Mobile)

## Overview

This page covers:

- Prerequisites
- Checklist page usage
- Checklist and To Do management
- Attachment handling
- Sections management
- Smartlist usage

## Prerequisites

For Mobile App 3.2.3:

- Supported with Clarity 16.0.3 and higher.
- On older servers, some features can be limited.

Examples of version-dependent behavior:

- Checklist badges (blocked/overdue/open/total counters) may not function correctly before Clarity 16.1.3.
- To Do notes require versions after 16.1.3.

> [!important]
> Starting in Mobile App 3.2.3, mobile-specific rights are no longer used to control visibility of mobile menu options. Users can see menu entries, but actions still depend on Clarity access rights.

## View the Checklists Page

1. Log in.
2. Tap `Menu` > `To Dos`.

Checklist page information includes:

1. Search by checklist name.
2. Open and Completed checklist tabs.
3. Checklist cards.
4. Checklist owner.
5. Due date.
6. Parent context.
7. Completed vs total To Do counter.
8. Blocked/overdue badge counters.
9. Create checklist action.

Checklist page actions:

- Pull down to refresh.
- Swipe left to mark checklist complete.
- Swipe right to delete checklist.
- Search across `Open` and `Completed` checklists.

## Create a New Checklist

1. Tap `+` on Checklist page.
2. Enter checklist name.
3. Optionally set due date.
4. Tap `Create`.

> [!note]
> `Create` is enabled only after a name is entered.

> [!important]
> If name length exceeds 256 characters, an inline validation error appears.

## Checklist Detail Page

1. Tap `Menu` > `To Dos`.
2. Tap a checklist card.

In checklist detail, you can create/manage To Dos and perform checklist-level actions.

## Manage Checklist and To Dos

### Create a new To Do

1. Open a checklist.
2. Tap three-dot floating menu.
3. Tap `New To Do`.
4. Enter name.
5. Set due date.
6. Tap `Create`.

### Manage a To Do

On a To Do record, you can:

1. Toggle `Mark Complete`.
2. Edit To Do name.
3. Set owner.
4. Set due date.
5. Add link and open it via arrow button.
6. Toggle `Blocked` and add reason in comments.
7. Add notes.
8. Delete using floating delete action.

### Mark checklist complete

1. Open checklist.
2. Tap three-dot menu.
3. Tap `Mark Complete`.

### Edit checklist

1. Open checklist.
2. Tap three-dot menu > `Edit`.
3. Update name and/or due date.
4. Tap `Save`.

### Copy checklist

1. Open checklist.
2. Tap three-dot menu > `Copy`.
3. Update name and/or due date for the copy.
4. Tap `Save`.

### Delete checklist

1. Open checklist.
2. Tap three-dot menu > `Delete`.
3. Tap `OK`.

### Delete a To Do

1. Open checklist.
2. Swipe left on the To Do.
3. Tap `Delete`.
4. Tap `OK`.

### Share a checklist

1. Tap user avatars or share icon.
2. Review current owner/collaborators.
3. Tap `Share`.
4. Search users by name or email.
5. Check to add or uncheck to remove collaborator.

## Manage Attachments for a To Do

The out-of-the-box `Attachments` attribute supports file uploads. It is system-defined and not customizable.

> [!note]
> - Uploads must match administrator-configured upload constraints.
> - Maximum 10 attachments per To Do.
> - Attachments are visible both in Clarity and mobile.
> - Mobile app requests file/photo/camera permissions on first use.

### Upload attachment

1. Open checklist and target To Do.
2. Tap three-dot floating menu.
3. Tap `Upload`.
4. Select one option:
   - Upload a file.
   - Open camera (iOS can also show Images).

> [!note]
> Upload is disabled when 10 attachments already exist.

After upload, a paperclip icon appears for that To Do.

### View attachment

1. Open checklist and target To Do.
2. Tap three-dot floating menu.
3. Tap `View`.
4. Tap file to open with default app.

### Delete attachment

1. Open checklist and target To Do.
2. Tap three-dot floating menu > `View`.
3. Tap attachment delete icon.

## Reorder To Dos

You can drag and drop a To Do:

- up/down within checklist,
- within a section,
- out of a section.

> [!note]
> To Dos in the `Completed` tab cannot be reordered via drag and drop.

## Manage Sections

Sections let you organize To Dos within a checklist.

Supported actions:

- View sections and contained To Dos
- Create, rename, delete sections
- Create To Dos inside sections
- Move To Dos within/outside/between sections

### Create a section

1. Open checklist.
2. Tap three-dot menu.
3. Tap `New Section`.
4. Enter section name.
5. Tap `Create`.

### Edit a section

1. Swipe right-to-left on section.
2. Tap `Edit`.
3. Update section name.
4. Tap `OK`.

### Reorder sections

You can drag/drop sections when collapsed to reorder them above/below other sections.

> [!note]
> - Sections in Completed tab cannot be reordered.
> - Sections cannot be nested. If dropped onto another section, the moved section is placed below it.

### Delete a section

1. Swipe left-to-right on section.
2. Tap `Delete`.
3. Confirm with `OK`.

> [!important]
> - To Dos remain in checklist without a section and preserve order.
> - Deleting section from Open or Completed removes it in both tabs.

### Create a new To Do within a section

1. Open checklist.
2. Tap three-dot menu > `New To Do`.
3. Enter To Do name and due date.
4. Select section from section dropdown.
5. Tap `Create`.

### Move a To Do to an existing section

1. Open a To Do.
2. Change section field to another existing section.

## Smartlist

Smartlists help you view To Dos by conditions. `My To Dos` includes To Dos tied to investments, tasks, risks, issues, changes, and checklists where you are owner, plus To Dos created by you.

### View Smartlist

1. Tap `Menu` > `To Dos`.
2. Tap `Smartlist` tab.

Smartlists created in Clarity appear alphabetically in mobile.

### Search Smartlist

1. Open `Smartlist` tab.
2. Type Smartlist name in search bar.

> [!note]
> Checklist and Smartlist share one search bar, and criteria are retained across both.

### Sort To Dos in Smartlist

1. Open `Smartlist` tab.
2. Open `My To Dos`.
3. Choose sort option: `Date`, `Name`, or `Owner`.

Date sort groups by:

- Overdue
- Next 7 Days
- Later

> [!note]
> Default sort is `Date`.

### Manage To Dos in Smartlist

1. Open `Smartlist` tab.
2. Tap a Smartlist.
3. Tap a To Do to open and manage it.

## Related
- [[_MOC Mobile App]]

%%Source: p2714-2736%%


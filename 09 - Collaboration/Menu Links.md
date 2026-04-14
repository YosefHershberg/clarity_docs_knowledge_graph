---
title: Menu Links
tags:
  - howto
  - concept
aliases:
  - Menu Links Workspace
canonical: true
audience: everyone
domain: collaboration
---

# Menu Links

The **Menu Links** workspace provides a centralized hub for accessing both internal and external resources directly from the Clarity main menu. Users can create, organize, and share links to frequently visited pages — inside or outside Clarity — without navigating through multiple modules. Administrators can also configure **dynamic URLs** that automatically inject context like the logged-in user's name or a project's internal ID.

## Prerequisites

You need the following access rights to work with Menu Links:

| Access Right | What It Grants |
|---|---|
| **Menu Links - Navigate** | Access the Menu Links page in Clarity |
| **Menu Links - Create All** | Create new sections and links |
| **Menu Links - Edit All** | Edit existing sections and links |
| **Menu Links - View All** | View all sections and links |
| **Menu Links - Delete All** | Delete sections and links |

## Create and Update Menu Links

Sections help you categorize and group related links. Links can be freely reordered within the page.

**Follow these steps:**

1. Log in to Clarity.
2. From the main menu, click the **Menu Links** icon. The Menu Links page opens.
3. Click **NEW SECTION** to add a grouping container for your links.
4. Click **NEW LINK** to add a link to an internal page or external website.
5. Drag and drop links to reorder them within the page.
6. Hover over a link — click the **Edit** (pencil) icon to update the link name or URL.
7. Hover over a link — click the **Delete** (×) icon to remove the link.

> [!TIP]
> Use sections to organize links by business area, project, or workflow stage. For example: "Finance Tools", "Project Dashboards", "External Portals".

## Create a Dynamic Menu Link

Dynamic links use **URL variables** that Clarity resolves at runtime based on the logged-in user or the context of the current investment. This lets you create a single shared link that personalizes itself for every user who clicks it.

**Follow these steps:**

1. Log in to Clarity.
2. From the main menu, click the **Menu Links** icon.
3. Click **NEW LINK**.
4. In the URL field, embed one or more variables using the `${variableName}` syntax.
   **Example:** `https://some.link?userName=${userName}`
5. When a user clicks the link, Clarity replaces `${userName}` with the user's actual login name before loading the URL.

### Supported Dynamic Variables

| Variable | Resolves To |
|---|---|
| `${userName}` | The logged-in user's username |
| `${_userInternalId}` | The logged-in user's internal user ID |
| `${_resourceInternalId}` | The logged-in user's internal resource ID |
| `${internalID}` | The current project's internal ID |
| `${code}` | The current project's code |
| `${name}` | The current project's name |
| `${manager}` | The current project's manager |

> [!NOTE]
> Dynamic variables are resolved when the user clicks the link. If a variable has no value in the current context (for example, `${internalID}` clicked outside a project), Clarity may pass an empty value to the target URL.

**Example use cases:**
- `https://analytics.example.com/user?id=${_resourceInternalId}` — opens a personal analytics dashboard for the logged-in user.
- `https://jira.example.com/projects/${code}` — links directly to a JIRA project matching the Clarity project code.

## Related

- [[_MOC Collaboration]]
- [[12 - Administration/System Settings]]

%%Source: Clarity 16.4.1 Documentation PDF%%

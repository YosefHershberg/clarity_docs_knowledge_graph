---
title: Clarity Information Centre (ICE)
tags:
  - concept
  - howto
  - admin
aliases:
  - Information Centre
  - ICE
  - Custom Help
  - Information Center
canonical: true
audience: everyone
domain: ui
---
# Clarity Information Centre (ICE)

The **Clarity Information Centre (ICE)** is a context-sensitive help panel that surfaces curated documentation, videos, product announcements, and — for administrators — allows full customization of what users see in the help panel.

> [!NOTE]
> This capability is available in Clarity 16.2.1 and higher. Custom Help Content specifically requires 16.2.1+.

---

## Enable the Information Centre

By default, the ICE is **off**. Administrators must enable it using a Feature Toggle.

**Prerequisites:**
- Access right: **Administration - Feature Toggles - Navigate**

**Steps:**

1. Navigate to **Clarity Administration** > **Feature Toggles**.
2. Find **Global Header Help Icon for Information Center**.
3. Check the **Enabled** field.

> [!TIP]
> When toggled off, Help remains accessible only under the User Avatar (legacy behavior). When toggled on, a new **Question Mark icon** appears on every Clarity page next to the Notifications icon.

---

## Overview: What ICE Provides

When the ICE is enabled, clicking the **Question Mark (?)** icon opens the ICE panel. The panel is **context-sensitive** — it refreshes based on your current location in Clarity.

**Content available in the ICE panel:**

| Content Type | Description |
|---|---|
| **Integrated Content Experience** | Contextual help based on your current page location |
| **Product Announcements** | Details of PMO Office Hours sessions and product updates |
| **What's New Videos** | Product managers explaining key new capabilities |
| **Enhancements** | What changed in the new release for the current capability |
| **Getting Started** | Quick-start guidance for the current page |
| **Key Points for Administrators** | Admin-focused callouts |
| **Troubleshooting KB Articles** | Links to Broadcom Support Knowledge Base |
| **Videos** | Capability-specific video walkthroughs |

**Counter badge:** A counter appears on the help icon when there is a new announcement; it clears once the user reads it.

---

## Who Sees What

| User Type | Experience |
|---|---|
| **End users** | Opens the ICE panel directly with contextual help content |
| **Administrators** | See the Information Centre **menu** (with access to the Admin view) |

Clarity considers the following access rights as administrator-level:
- **Administration - Application Setup**
- **Administration - Access**

> [!NOTE]
> The ICE will **not open** if your organization has blocked web calls to Pendo. The User Admin flag is cached — users switching roles should refresh the page to apply the correct view.

**On-Premise customers** must allow outbound web access to:
- `.ipce.broadcom.com` — loads ICE content
- `i.ytimg.com` — YouTube thumbnail repository
- `www.youtube.com` — YouTube video playback

---

## Creating Custom Help Content

The **Custom Help Content** feature lets administrators design and manage contextual help that aligns with their organization's processes. Custom help can be targeted to specific product areas (Clarity pages), so users see relevant guidance based on where they are working.

**Custom help delivery modes:**

| Mode | Description |
|---|---|
| **Custom Cards** | Cards appear alongside standard Clarity help; users click to expand guidance |
| **Custom Sections** | Display directly in the help panel without user interaction; for always-visible guidance |
| **Custom Videos** | Training or walkthrough videos hosted on internal platforms (e.g., Google Drive) |

Custom content can appear **above** or **below** standard Clarity help, or **replace** the default help entirely.

---

## Request Access to the ICE Admin Tool

To configure custom help, you need access to the **ICE Admin tool** hosted by Broadcom.

1. Submit a request through **Broadcom Support**.
2. Provide:
   - Your organization name and environment types (dev, test, prod).
   - Your **Broadcom SSO email address** (must match your Broadcom Support login).
   - Your preferred **ICE Admin hosting region**: US, EMEA, or AU.
3. After approval, you receive an **onboarding email** with ICE Admin access credentials.

Once access is granted, sign in at: `https://admin.ipce.broadcom.com/`

ICE Admin lists **configurations** corresponding to each of your Clarity environments. Changes in one configuration apply **only** to that environment.

---

## Access Your ICE Environment

1. Navigate to `https://admin.ipce.broadcom.com/` using your Broadcom Support credentials.
2. In the **Products** area, select **Clarity**.
3. In the **Configurations** pane, search for or select the environment you want to configure (dev, test, or prod).
4. Select the configuration to view its administration tabs.

> [!IMPORTANT]
> Always confirm which environment (DEV, TEST, or PROD) you are working in before making changes.

---

## Configure Custom Help for a Product Area

**Step 1: Identify the Clarity page to target**

1. Navigate to the Clarity page where you want to add custom help.
2. Open the **Help panel** on that page.
3. Click the **Copy URL/UID** icon to copy the product area path.

Typical paths:
```
/projects/common
/roadmaps
/roadmap/5017000/common
/timesheets/timesheets
/todos/allTodos
```

> [!TIP]
> If the path contains a record-specific ID (e.g., `5017000`), replace it with `*` in ICE Admin so the help applies to all similar records.
> Example: `/roadmap/5017000/common` → `/roadmap/*/common`

**Step 2: Open the Custom Content tab in ICE Admin**

1. In ICE Admin, open your configuration.
2. Select the **Custom Content** tab.
   - **Product Area(s)** — lists Clarity pages where custom help is configured.
   - **Custom Content** — shows help items for the selected product area.
   - **Show Default Content** — toggle:
     - **On:** Users see both standard Clarity help and your custom help.
     - **Off:** Users see only your custom help items.

**Step 3: Add or select a product area**

1. If the product area exists, select it from the **Product Area(s)** list.
2. If it does not exist:
   a. Click **Add New**.
   b. Paste the product area URL or UID from the Clarity Help panel.
   c. Replace any record-specific value with `*`.
   d. Click **Update** to save the product area, or **Add Content** to immediately start adding help items.

**Step 4: Add Sections and Cards**

1. In the **Custom Content** panel, click **Add Content**.
2. Use **Show as** to choose:
   - **Card** — appears as a selectable card for users to expand.
   - **Section** — always visible content in the help panel.
3. Fill in the title, description, optional link, and content.
4. Repeat to add multiple cards or sections. Drag items to reorder.
5. Click **Update** to save and publish. After a short delay, users see the updated help.

---

## Manage and Reuse Custom Help Content

### Edit a Product Area or Help Item

**Edit a Product Area** (update the URL/UID):
1. In **Configurations > Custom Content**, locate the product area.
2. Open **More actions (...)** > **Edit**.
3. Update the URL or UID and click the checkmark to save.

**Edit a Help Item:**
1. Select the product area.
2. In **Custom Content**, open **More actions (...)** for the item > **Edit**.
3. Make changes and click **Update**.

### Duplicate a Help Item

Creates a copy within the same product area.

1. Select a product area.
2. Open **More actions (...)** for the content item > **Duplicate**.
3. Review and click **Update**.

### Copy a Help Item to Another Area

1. Select a product area.
2. Open **More actions (...)** > **Copy**.
3. Choose:
   - **Copy to Existing Area** — copies the item to an existing product area.
   - **Copy to New Area** — creates a new product area and copies the item in one step.
4. Review the summary and click **Confirm**.
5. Click **Update**.

### Copy an Entire Product Area to Another Area

1. In the **Product Area(s)** list, locate the source product area.
2. Open **More actions (...)** > **Copy to New** or **Copy to Existing**.
3. If **Copy to Existing**: choose **Merge** (keep existing items and add) or **Replace** (remove existing and replace).
4. Click **Update**.

### Delete a Help Item or Product Area

**Delete a Help Item:**
1. Select the product area.
2. Open **More actions (...)** for the help item > **Delete** > Confirm.

**Delete a Product Area:**
1. In the **Product Area(s)** list, open **More actions (...)** > **Delete** > Confirm.
2. All associated help items are removed. You can recreate the product area later if needed.

---

## Import and Merge Custom Help Between Configurations

Use this workflow to move custom help from a test environment to production.

1. In ICE Admin, open the **destination** configuration (e.g., production).
2. Go to the **Custom Content** tab.
3. Click **Import Content**.
4. Select the **source configuration** (e.g., test or demo).
5. Choose:
   - **Merge** — combines the source product areas and custom content with the current configuration.
   - **Replace** — removes all existing content in the destination and replaces it with the source content.
6. Review the summary showing the number of product areas (URLs) and help items (cards) to be imported.
7. Click **Confirm**. A confirmation message indicates the merge or replacement was successful.

---

## Related
- [[First Time Login]]
- [[_MOC Getting Started]]
- [[Feature Toggles]]

%%Source: p291-296, p314-421%%

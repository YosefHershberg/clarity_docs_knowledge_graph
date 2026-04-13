---
title: Project Participants (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2319-2322
---
# Manage Project Participants (Classic PPM)

Participants are additional users beyond the core project team staff — such as project stakeholders and senior management — who require access to project information and documentation without being assigned to tasks. You can add users as participants and organize them into participant groups to control access collectively.

## Prerequisites

- The project is set up
- The users to be added as participants are set up as resources

> **Note:** By default, the product adds project employee resources as project participants when they are added as team staff. Administrators can change the **Automatically Add Staff Members As Investment Participant** project management setting to modify this behavior.

## Configure Project Staffing Settings for Participants

Administrators or senior project managers can configure settings that affect the Team Participants page behavior.

1. In Classic PPM, click **Administration > Project Management > Settings**
2. Configure **Require Resource - Hard Book right to add participants**:
   - **Cleared (default)** — Show all participants visible to the user based on Resource - View access rights
   - **Selected** — More restrictive: requires both Resource - View AND Resource - Hard Book access rights to see a participant
3. Configure **Hide System Groups option when adding participants**:
   - **Cleared (default)** — System groups are shown on the Project Team Participants page
   - **Selected** — System groups are hidden

> **Tip:** Even if Hidden, previously added system groups still appear when "All" is selected in the Show field. Remove them manually if no longer needed.

## Add Participants

1. Open a project and click **Team**
2. Click the **Team** tab menu > **Participants**
3. In the **Show** field, select **Resources**
4. Add participants using any of the following methods:
   - **Add by Resource ID** — Enter resource ID and click Add (not available when Hard Book right is required)
   - **Add** — Opens the Add Resources page; select users and click Add (filtered by Hard Book rights if that setting is enabled)
   - **Add Staff** — Adds all existing team staff as participants
5. (Optional) Select participants and click **Make Collaboration Manager** — grants additional rights on the Collaboration tab

> **Tip:** The creator of the project is the default collaboration manager.

## Add Participants in System Groups

1. Open a project > **Team** > **Participants**
2. In the **Show** field, select **System Groups**
3. Click **Add**, select the system group, and click **Add**

## Create Participant Groups

Participant groups let you manage access rights for participants collectively.

1. Open a project > **Team**
2. In the **Team** menu, click **Participant Groups**
3. Click **Add**
4. Enter a group name and description
5. Click the binoculars icon at **Select Participants**
6. From the **Resources** tab, select participants and click **Add**
7. (Optional) From the **System Groups** tab, select system groups and click **Add**
8. Click **Submit**

To manage participant groups, use the **Team** menu > **Participant Groups** option.

## Related Notes

- [[Projects Teams Tasks]] — Manage core project team staff
- [[Requisitions]] — Formal resource booking through requisitions
- [[_MOC Classic PPM]]

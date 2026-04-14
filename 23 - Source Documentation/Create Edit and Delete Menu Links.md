# Create, Edit, and Delete Menu Links

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[09 - Collaboration/_MOC Collaboration|Collaboration]]
- Related domains: [[12 - Administration/_MOC Administration|Administration]]
- Canonical notes:
- [[09 - Collaboration/Action Items]]
- [[09 - Collaboration/Business Agreements]]
- [[09 - Collaboration/Collaborative Workflow]]
- [[09 - Collaboration/Conversations]]
- [[09 - Collaboration/Status Reports Overview]]
- [[09 - Collaboration/To Dos]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Prerequisites (#prerequisites)
- H2: Create and Update Menu Links (#create-and-update-menu-links)
- H2: Create a Dynamic Menu Link (#create-a-dynamic-menu-link)

The **Menu Links** workspace in Clarity provides users with a centralized hub to access both internal and external resources directly from the main menu. This feature is designed to streamline navigation by enabling users to create, edit, delete, and organize links without having to rely on navigating through multiple modules or workspaces. With proper permissions, users can easily add links to important web pages, frequently visited Clarity modules, or even external applications, making workflow and information access more efficient.

Within this workspace, Menu Links can be grouped into sections that reflect specific business areas, projects, or common tasks. Administrators have robust control to customize these links and sections by configuring dynamic URLs -- including variables like usernames or project IDs -- allowing for personalized link targets. The drag-and-drop interface supports intuitive rearrangement of links, ensuring that the workspace remains tailored to the evolving needs of the organization. Overall, the Menu Links workspace acts as an adaptable, user-friendly navigation system that enhances productivity and collaboration within Clarity.

This section contains the following topics:
- Prerequisites
- Create and Update Menu Links
- Create a Dynamic Menu Link

## Prerequisites

Ensure that the following prerequisites are provided to access and perform various tasks using the Menu Links:
- **Menu Links - Navigate** - Allows user to access the Menu Links page in Clarity.
- **Menu Links - Create All** - Lets you create new section and new links in Clarity.
- **Menu Links - Edit All** - Lets you edit the sections and links in Clarity.
- **Menu Links - View All** - Lets you view all sections and links in Clarity.
- **Menu Links - Delete All** - Lets you delete sections and links in Clarity.

## Create and Update Menu Links

The following procedure helps you create, update, and delete menu links in Clarity.

**Follow these steps:**

1. Log in to Clarity.
2. From the main menu click **Menu Links** icon. The Menu Links page opens.
3. Click **NEW LINK** to add a link to another website.
4. Click **NEW SECTION** to add a new section. Sections help you to categorize and group your links based on your preferences.
5. Drag and drop the links to reorder them in the page.
6. Hover over the link and the **Edit** (pencil icon) option appears to let you edit the link.
7. Hover over the link and click the **Delete** (x icon) to delete the link.

## Create a Dynamic Menu Link

**Follow these steps:**

1. Log in to Clarity.
2. From the main menu click the **Menu Links** icon. The Menu Links page opens.
3. Click **NEW LINK** to add a link to another website. Specify the following in the link URL to ensure the username variable is applied: `https://some.link?userName=${userName}`
4. In this example, we are only concerned with access to the external application in the context of the following users:
- `https://some.link?userName=admin`
- `https://some.link?userName=patelSid`

When each user clicks the same link, Clarity checks their user name before returning any site information.

This feature supports the following dynamic link data:

| Link Goal or Target | Description |
|---|---|
| **Project ID** | To link to content for the current project by ID, insert the `internalID` variable. |
| **Project Code** | To link to content for the current project by code, insert the `code` variable. |
| **User** | To personalize the link for the current user, insert the `userName` variable. |
| **Project Manager** | To link to content for the current project manager, insert the `manager` variable. |
| **Project Name** | To link to content for the current project by name, insert the `name` variable. |
| **User ID** | To link to the logged-in user's internal user ID, insert the `_userInternalId` variable. |
| **Resource ID** | To link to the logged-in user's internal resource ID, insert the `_resourceInternalId` variable. |

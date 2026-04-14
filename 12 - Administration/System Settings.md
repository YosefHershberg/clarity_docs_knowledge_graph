---
title: System Settings
tags:
  - admin
aliases:
  - System Configuration
canonical: true
audience: admin
domain: administration
---
# System Settings

## Overview

You can use the System Settings page to customize Clarity to reflect your organization's branding by updating the header logo, the login logo, theme colors, custom display message, and default homepage. You can customize the background color and the foreground colors to reflect your organization's branding, and also use it to differentiate between various environments, such as development, QA, and production.

You can also select the light or dark color scheme for menu icons, text, and login logo. You can specify a message that every user in your organization would see whenever they log into Clarity, and define the homepage based on User Access groups.

This section contains the following topics:

- Customize Header and Logo
- Customize Theme Colors
- Specify Login Message
- Define User Homepage
- Configure Main Navigation Menu

## Customize Header and Logo

You can customize the header logo and login logo for Clarity to reflect your organization's branding and differentiate between environments such as development, QA, and production.

**Follow these steps:**

1. In Clarity, click Administration, and then click System Settings.
2. In the Branding tab, under Header Logo, click Upload New Logo to upload the new header logo.
3. Under Login Logo, click Upload New Logo to upload the new login logo. This logo will appear on a dark background color — we recommend a light color logo.
4. You can also specify the tooltip in the IMAGE TOOLTIP field.

> [!note]
> Some key points to remember when you update logos:
> - Your change will be visible immediately after you update the logo. If you want to try different options, please use the test or development instances of Clarity.
> - You can upload PNG or transparent GIF formats. Clarity will honor all the restrictions imposed by Classic PPM on file types and file size. For more information about allowed file types and size, see Set Document Management Options.
> - Clarity includes extra logo space so that you can use it to add classification text to the logo itself.
> - If you try to use images that do not follow these recommendations, you will get an API error.

## Customize Theme Colors

You can customize the background color and the foreground colors to reflect your organization's branding, or to differentiate between various environments such as development, QA, and production. You can also select the light or dark color scheme for menu icons, text, and login logo.

**Follow these steps:**

1. In Clarity, click Administration, and then click System Settings.
2. Under Theme colors, select the relevant background color. The background color will appear on the left navigation and login screen.
3. Under Theme colors, select the relevant foreground color. The foreground color applies to icons and text in the left navigation menu.

## Specify Login Message

You can specify a message that every user in your organization would see whenever they log into Clarity.

**Follow these steps:**

1. In Clarity, click Administration, and then click System Settings.
2. Select the Login Message tab.
3. Select the Start and the End dates for the message.
4. In the Type drop-down list, ensure Toast is selected.
5. In the Severity drop-down list, select the relevant option based on the content of your message. This setting controls how the message is displayed.
6. Enter the message text in the body text box.
7. Select the duration for which you want the message to be displayed on the user's screen.

> [!important]
> The Login message is displayed for:
> - Basic authentication login
> - SSO authentication login
> - Navigating from Classic PPM to Clarity
>
> Clarity does not support multiple languages for the login message.

## Define User Homepage

With the Clarity 16.0.2 release, as an admin, you can configure home pages in Clarity for Clarity security access groups. You can also configure a home page by default if a user's access security group does not have a home page defined.

If a security access group has more than one home page defined, the home page navigation will take the user to the first home page specified for their security group.

You can:

- Define a new home page entry based on User Access groups. When defining a page for the homepage, any of the following can be selected:
  - Any item available in the menu link
  - Pages defined under Clarity Pages
- Define a Clarity menu item or a page from pages.
- Select one or multiple user groups.
- Change the order of the homepage definition by dragging them up or down.
- Delete any defined homepage setting using the Delete icon.
- Edit the Homepage definition by clicking on the Page or the Access Groups field.

> [!important]
> An Administrator with access to Clarity System Settings can define a Homepage where users can land on a custom page defined in the system.
>
> Note: If the Administrator does not have rights to custom pages, the Administrator cannot see or configure custom pages in System Settings.

**Follow these steps:**

1. In Clarity, click Administration, and then click System Settings.
2. Select the Homepage tab.
3. Select the Add Page button. A new row entry with a search option appears in the table.
4. In the Page drop-down list, select a module that you want to set as a homepage.
5. In the Access Groups drop-down list, select one or more access groups for whom you want to set the homepage.
6. Drag-and-drop rows within the table to change the priority.

> [!note]
> Some key points to remember about User Homepage:
> - Any administrator with access to the Clarity system settings page can access the homepage setting page.
> - The default home page is set to current functionality where the user will land on the first page in the menu. This default setting cannot be removed.
> - For Custom Investment Types, admins can only define the homepage to the main Investments page and not to a specific investment. Admins can only define the homepage to the main Custom Master Object page and not to a specific custom object inside.
> - Homepage definition is not saved till both the Page and Access Group drop-downs are populated.
> - When defining the homepage to a page instance within Pages, the user will land on the first tab within that page.
> - Once the homepage is defined then the user will always land on that page when they log into Clarity.
> - This will work for basic and SSO-based login.
> - The homepage setting does not take effect till the user re-logins to Clarity.
> - You can click on the Home link to navigate to the defined homepage at any time.
> - Users belonging to multiple user groups will get the homepage set to the page defined first on the list (top to bottom).
> - If a user is not part of any User Group, the user will be navigated to the default page.
> - Each homepage can have one or multiple user groups defined.
> - When the homepage is set based on the user group, the respective application is launched when the user logs in or when the Home button is clicked.
> - Once a page is set as a homepage then it will not be available in the selection list.
> - A maximum of 100-page definitions can be created for homepages. However, in this release, you can only see 25 pages. This limit will be increased in future releases.
> - Link to Classic UI will not be available in the homepage definition.

## Configure Main Navigation Menu

From Clarity 16.2.0 and higher releases, you can easily customize the main menu to better suit your organizational needs. Administrators can add, remove, and manage menu items — including various custom elements like investments and page instances — activate or deactivate items, update their icons, and change their order to enhance the user experience.

This section covers:

- Configure the Main Menu in Clarity and Tiles in Workspaces
- Setting New Menu Items as Homepage
- Change Icons of Main Menu Navigation from Icon Library
- Reorder and Remove Menu Items
- Create a Custom Label for the Stock Menu Links with Localization

### Configure the Main Menu in Clarity and Tiles in Workspaces

You can modify the main menu in a manner that best fits your work practices, adding and removing custom menu items tailored to your role and tasks. Each of these items can be added to the main menu once and will remain accessible in their usual Workspaces.

This includes configuration options for:

- Custom Investments
- Team Investments
- Custom Master Objects
- Page Instances

### Setting New Menu Items as Homepage

Administrators now have the option to configure new menu items as the homepage. This enables administrators to designate the most relevant page as the homepage based on the different roles and groups within the organization. By doing so, users are immediately directed to the most useful and pertinent information tailored to their specific needs.

Note that the menu item must be activated before the new homepage setting is operational for users. This allows configurations to be made without disrupting the current user experience until the changes are ready to be implemented.

### Change Icons of Main Menu Navigation from Icon Library

The icon library provides a refreshed set of visuals for your main menu navigation, making it easier to find and switch to the pages you need. The icon selection process is made user-friendly through the icon library interface, which provides visual previews and file names to facilitate the correct icon choice.

Available icons include: attachment, bug, bullseye, chart-area, chart-line, briefcase, building, cabinet, chart-bar, chart-pie, check, clipboard, clipboard-connector, cloud, connector, dashboard-graph, database, display, file, globe, check-list, clipboard-check, clock, compass, cube, dashboard-grid, dependency, dollars, folder, hammer, health, hub, lightbulb, link, map, page-alarms, page-logs, page-user, report, shape-diamond, shape-rocket, hierarchy, key, lightning-bolt, location, money, page-inspect, page-service, plans, shape-circle, shape-flag, shape-square, shape-star, teams, todos, view-tiles, shape-triangle, ticket, user-edit, and more.

> [!note]
> Some key points to remember about icons:
> - You can select new icons from a pre-populated icon library to better represent the functions of your main menu items.
> - Custom icons cannot be added to the library, but you can reuse any of the existing icons.
> - When selecting icons, administrators will see the file names of images, which are not localized, to ensure you choose the correct visual representation for your menu items.

### Reorder and Remove Menu Items

Your main menu can reflect the way you work, with the ability to reorder and remove items as needed. You can prioritize the menu based on your daily activities, moving the most used items to the forefront for quick access.

- Menu items can be dragged and dropped into new positions, allowing you to prioritize the tools and pages you access most frequently.
- Home and Classic PPM menu items are fixed, but the Administration Menu Item can be reordered.
- You can remove any custom menu items that you have added, keeping your menu streamlined and relevant.

### Create a Custom Label for the Stock Menu Links with Localization

Administrators can use the System Settings workspace to customize the labels of the left navigation menu. This allows them to customize their implementation and give end users a more personalized experience. Administrators can also localize the custom labels for the navigation menu so that users can read the labels in their preferred language.

> [!note]
> Some key points to remember about custom labels:
> - If the label column is blank, Clarity uses the stock page name.
> - The change will apply to any stock or custom non-locked left navigation menu link.
> - The administrator can change their language setting to create language-specific labels.
> - The Home, Administration, and Classic PPM menu links are locked.

## Related
- [[_MOC Administration]]

%%Source: p1944-1957%%

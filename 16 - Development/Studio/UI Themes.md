---
title: Studio UI Themes
tags:
  - dev
aliases:
  - UI Themes
canonical: true
audience: dev
domain: development
---

# Studio UI Themes

User interface (UI) themes determine the look and feel of the Classic PPM application pages for all users.
The application includes stock UI themes that you can select to change color, login information, branding, and other visual aspects.
You can also create a custom UI theme specific to your organization's needs.

A custom UI theme can adjust or extend any stock theme. Customizable elements include: logo, application name, tabs, buttons, icons, login page, and other UI features.

> [!NOTE]
> If a custom UI theme does not exist in a third-party application integrated with Classic PPM, the default UI theme in that application is used.

You can import or export UI themes using the XML Open Gateway (XOG). Use the specific UI themes XML read/write files provided with XOG.

---

## Stock UI Themes

The following standard UI themes are included with Classic PPM:

- **Navy Blue**
- **Red**
- **Blue**
- **Black and White**
- **High Contrast**
- **Teal and Grey**
- **Phoenix UI**

> [!NOTE]
> You cannot edit or delete the original stock UI themes. However, you can copy a stock theme to create your own custom UI theme.

---

## Apply a UI Theme

When you select a new UI theme, you see the change reflected immediately. Other users see the change on their next login.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **UI Themes**. The UI themes list appears.
2. Select the theme you want to apply.
3. Click **Save**.

---

## Apply a UI Theme to a Partition

You can apply a distinctive UI theme - including a logo and colors - to a partition. Partitions without a designated UI theme inherit the theme of their closest ancestor partition.

- Users who are members of the partition see the new appearance.
- Users who belong to multiple partitions with different UI themes can go to **Account Settings** and select a default partition to determine their primary UI theme.
- Users not a member of any partition always see the UI theme of the system partition.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Partition Models**.
2. Click the name of a partition model.
3. Click **Partitions**.
4. Click the name of a partition.
5. In the **UI Theme** field, select a theme.
6. Click **Save and Return**.

---

## Custom UI Themes

If the stock themes do not meet your needs, you can create a custom UI theme by copying and modifying the CSS of an existing stock theme.

### Customizable Page Areas

| Section | Area | Possible Modifications |
|---------|------|------------------------|
| I | Main page header | Logo, company name, links, icons, fonts, colors (application background) |
| II | Main menu bar | Menu bar icons (Back, Recent Pages, Refresh, Home, Search), menu icons (Next, Previous, Refresh), fonts, colors |
| III | Workspace | Fonts, colors (background, buttons, headers, tabs, portlets), tab styles, button styles, portlet headers |

You can also adjust fonts, colors, sizes, and other properties in the `/* Login page CSS styles */` section.

---

### Create a Custom UI Theme

Modify the stock theme closest in appearance to the look you want. This gives you predefined UI features you can adjust incrementally.

> [!WARNING]
> You can edit styles in the CSS stylesheet, but do **not remove them**. Removing a style can cause the UI to render incorrectly. Classic PPM always expects a theme to be applied, and styles specified in the Default UI theme are required.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, select **UI Themes**.
2. Click the name of the UI theme closest to the look you want. The properties page displays the CSS stylesheet.
3. Select and copy all the code in the CSS text box and click **Return**.
4. Click **New**.
5. Paste the copied text into the CSS text box.
6. Modify the standard CSS property values. Comments in the stylesheet identify the UI area each section controls.
7. Enter a name in the **Name** field.
8. Enter a unique alphanumeric string of up to 60 characters in the **ID** field.
9. Select **Active** to make the theme available to others. Clear the checkbox to hide the theme.
10. Click **Save and Return**.
11. Select the theme and click **Save**. The selected theme is applied.

---

### CSS Customization Examples

#### Product Name

To change the product name, replace `Clarity` in the following section:

```css
/* The product name itself */
#ppm_header_product span:before,
#ppm_header_product_small span:before {
  content: "Clarity ";
}
```

The product name appears in the page title, page header, and Login page.

> [!NOTE]
> If a syntax error prevents the custom name from being parsed, the default value of `Clarity` appears and an error is logged.

#### Main Page Background Color

```css
/* The main page background color */
.ppm_page_bg {
  background: #04152d;
  background: -webkit-gradient(radial,50% 10, 1, 50% 100, 600, from(#052E5F), to(#04152D));
  background: -moz-radial-gradient(50% 10% 0deg,ellipse contain, #052E5F, #04152D);
}
```

#### Logo

Convert your image to a base64 string using an online tool, then paste it into the CSS:

```css
/* The logo in the upper left corner of the page header */
#ppm_header_logo {
  background: url(data:image/png;base64,<base64_encoded_string>);
  margin: 6px 0px 0px 15px;
  width: 50px;
  height: 42px;
}
```

#### Custom Image Override

To override any image in Classic PPM, identify the CSS class name using browser developer tools and override it:

```css
/* Example: portlet Options button */
.caui-workspaceWorkspaceHeadBtn {
  background: url(data:image/png;base64,<base_64_encoded_source_text>);
  margin: <intended_margin_coordinates>;
  width: <intended_width>;
  height: <intended_height>;
}
```

#### Main Menu Font and Color

```css
/* The main omnibar/navigation bar below the header */
#ppm_omnibar {
  background-color: #7791AB;
  background: -moz-linear-gradient(#7791AB, #4C6786);
  background: -webkit-gradient(linear, center top, center bottom, from(#7791AB), to(#4C6786));
  background: linear-gradient(#7791AB, #4C6786);
  color: #001122;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: bold;
}
```

#### Main Menu Hover Styles

```css
/* Omnibar button hover styles */
.ppm_omnibar_button:hover {
  border: 1px solid #566a7c;
}

/* Primary navigation menu hover styles */
.ppm_nav_menu_hover {
  background-color: #f5f8fa;
  color: #335588;
}
```

#### Tab Style

```css
/* Top-level tabs */
.ppm_tab {
  background-color: #B3C8DB;
  background: linear-gradient(#B3C8DB, #92A8BE);
}

/* Top-level selected tab */
.ppm_sel_tab {
  background-color: #E8EBF2;
  background: linear-gradient(#FFF, #e3e7ec);
}
```

#### Button Style

```css
/* Button styles */
.ppm_button {
  border-top: 1px solid #c4d1e1;
  border-bottom: 1px solid #889ab5;
  border-left: 1px solid #bccee4;
  border-right: 1px solid #889ab5;
  background: linear-gradient(center top, #ebf4fc 0%, #d9e9fc 50%, #c6ddf6 52%, #c3d3eb 100%);
}

/* Button hover styles */
.ppm_button:hover {
  background: linear-gradient(center top, #f8fbff 0%, #e4effb 50%, #d1e4f8 52%, #c5d5eb 100%);
}
```

---

### Custom Login Page

You can customize the login page appearance using the UI theme CSS.

#### Login Page Top Message

```css
/* Login service message at the top */
#ppm_login_message_top span:before {
  content: "The system will be unavailable from Sun April 15 at 11:30 pm until Mon April 16 at 3:30 am.";
}
```

#### Login Page Bottom Message

```css
/* Login service message at the bottom */
#ppm_login_message_bottom span:before {
  content: "Custom UI Theme Message 2 at the bottom";
}
```

#### Login Page Logo

Convert your logo to a base64 encoded string and paste it into the following section:

```css
/* Login page logo */
#ppm_login_logo {
  background: url(data:image/filetype;base64, my_image_base64_string);
  margin: 6px 0px 0px 15px;
  width: 150px;
  height: 50px;
}
```

The `filetype` string (e.g., `gif`, `jpeg`, `png`) is included in the base64 conversion result. The encoded string can be up to 30,000 characters - scroll right in the CSS text box to view it.

> [!NOTE]
> Optimize your image before converting it to a base64 string. An image optimization tool such as Smush.it can produce a smaller encoded string.
>
> Online conversion utilities: http://webcodertools.com or http://www.base64-image.de

---

## Phoenix UI Theme

The 15.5.1.1 patch introduced the **Phoenix UI theme**, designed to align Classic PPM users with the new aesthetics and styling introduced in Clarity Release 15.1. Clarity 15.5.1.1, 15.6, and higher releases include this optional theme.

The Phoenix UI theme updates styling for the main page header, navigation, workspace, and other UI elements to match the modern Clarity look and feel.

---

## Related
- [[_MOC Development]]

%%Source: p4129-4136%%



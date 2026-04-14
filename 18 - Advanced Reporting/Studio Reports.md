﻿---
title: Create and Publish Jaspersoft Studio Reports
tags:
  - howto
  - dev
aliases:
  - Studio Reports
---

# Create and Publish Jaspersoft Studio Reports


Use **Jaspersoft Studio Professional** to connect to Advanced Reporting to create, download, upload, and publish reports. You need a report developer user and a server connection to connect to Advanced Reporting. You can also create data adapters in Jaspersoft Studio to test report queries.

This article assumes that you have successfully installed Jaspersoft Studio Professional.

---

## Topics


- [[#Create an Advanced Reporting Developer User]]
- [[#Set Up the JasperReports Server Connection]]
- [[#Create a Simple Report]]
- [[#Create a Report Unit]]
- [[#Create a Parent Report with Child Subreports]]
- [[#Add Resources to a Report]]
- [[#Tips for Creating and Publishing Reports]]
- [[#Jaspersoft Report Page Limits]]

---

## Create an Advanced Reporting Developer User


Create a report developer user who can log in to Jaspersoft Studio directly.
Users created in Jaspersoft from Classic PPM are created with an encrypted password and maintained by Classic PPM — you cannot use them for report development in Jaspersoft Studio.
You need a user that is not maintained by Classic PPM.

The report developer user has no more rights than the Advanced Reporting administrator user in Classic PPM, but can connect through Jaspersoft Studio.

> [!note]
> Do not use this user to log in to Clarity.

**Follow these steps:**

1. Log in to Classic PPM as a user with Advanced Reporting administration rights.
2. Click **Home**, **Advanced Reporting**.
3. Click **Manage**, **Users** and then click **Add User**.
4. Enter the user name and password information (for example, `report_developer`).
5. To add the user to your organization, click **Add User to org**. The report developer user is created.
6. Click **Edit** on the right side of the properties page.
7. Locate the **ROLE_ADMINISTRATOR** role, click the right arrow to assign the permission, and click **Save**.

`ROLE_ADMINISTRATOR` grants permission to modify and administer Advanced Reporting items in your organization.

> [!note]
> Due to a known Jaspersoft issue, the **Roles Available** list might not include all roles or roles might not appear correctly.
> Resize the browser application window until the scroll bar appears, then scroll down to **ROLE_ADMINISTRATOR**.
> If you still do not see the scroll bar after resizing, type `ROLE_ADMINISTRATOR` in the search box and click the search icon.
> The known issue can also cause roles to be listed multiple times.

---

## Set Up the JasperReports Server Connection


**Follow these steps:**

1. In Classic PPM, click **Administration**, **System Options**. Set up the **Advanced Reporting Server URL** and **Organization ID**. See Configure General System Settings.
2. In Jaspersoft Studio, in the **Repository Explorer**, right-click **Servers** and select **Create JasperReports Server Connection**.
3. Complete the following information:
   - **Name:** Defines the name for the server connection (for example, `Advanced Reporting Test Environment`).
   - **URL:** Defines the Advanced Reporting Server URL exactly as it is defined in Classic PPM.
   - **Organization:** Defines the Organization ID exactly as it is defined in Classic PPM.
   - **User:** Defines the report developer user name.
   - **Password:** Defines the report developer user password.
4. Click **Test**.
5. Click **Finish**.

> [!note]
> If the connection is unsuccessful, verify that the report developer user exists and the password is correct. Also verify that the URL and Organization values are correct.
> For Jaspersoft 7.1, ensure the **Use SOAP Protocol Only** option is not selected (expand **Advanced Settings** to check this). A 401 error is displayed if that option is checked.

---

## Create a Simple Report


After installing Jaspersoft Studio, creating a report developer user, and configuring a data adapter and server connection, you can create reports in Advanced Reporting.

**Follow these steps:**

1. In Jaspersoft Studio, select **File**, **New**, **Jasper Report**. The **New Report Wizard** displays the report templates page.
2. Select a template (for example, **Blank A4**) and click **Next**. The New Report Wizard displays the report file page.
3. Select a local folder to save the report and provide a file name with the `.jrxml` extension. Avoid spaces and special characters in the JRXML file name.
4. Click **Next**. The New Report Wizard displays the data source page.
5. Select the **One Empty Record — Empty rows** data adapter for now. You can change it later.
6. Click **Next** and then click **Finish**. Jaspersoft Studio generates the report and opens it in the Design area.

You can work locally designing the report, adding fields and other elements from the palette. Use the **DataSet and Query editor dialog** (upper-right corner of the Design area) to add and test the report query.

> [!warning]
> Do not develop reports in Jaspersoft Studio using domains as a data source, as this can severely impact performance. SQL is the preferred language for developing reports in Jaspersoft Studio. For more details about the DataSet and Query editor dialog, see [[Getting Started Jaspersoft]].

---

## Create a Report Unit


Create a report unit by publishing a report to Advanced Reporting using a previously created JRXML file. A report unit contains:

- Main JRXML file
- Input controls and other controls
- Report resource bundles
- Data sources
- References to resources such as sub reports

> [!note]
> The data source is not the same as the data adapter. The data adapter is only necessary when running the report in Jaspersoft Studio locally. Associate the report to a data source from the repository when you publish it.

### Publish a Report


**Follow these steps:**

1. In Jaspersoft Studio, open the report (JRXML file).
2. Click **Publish Report to JasperReports Server** in the upper-right corner of the Design area. The **Report Publishing Wizard** opens.
3. Select the server and location where you want to publish the report. Avoid publishing reports under the Classic PPM folder.
4. Select **Create Report Unit** if it is not already selected.
5. Complete the following information:
   - **Report Unit Label:** Defines the report name displayed in the repository and when searching the library in Advanced Reporting.
   - **Report Unit Name (ID):** Defines the report internal ID. Provide an ID that does not contain spaces or special characters, and prefix it with your company initials. You cannot modify the ID later.
   - **Report Unit Description:** (Optional) Defines the report description. Provide meaningful keywords that can be helpful when searching.
6. Click **Next**. The **Select Resources to Publish** window opens.
7. Select **Ignore** from the drop-down (instead of **Overwrite**) for all resources in the window.
8. Click **Next**. The **Configure the data source** window opens.
9. Select **Data Source from Repository**.
10. Navigate to the **Clarity /Data Sources** folder and select one of the following options:
    - **Clarity BEAN** — for the transactional database
    - **Clarity DWH BEAN** — for the Data Warehouse

    Select a data source even if the following message appears: `"There is a problem with selected Datasource which is not valid"`. The message disappears when you select the correct data source.

11. Click **Finish**. The report is uploaded to the server. A `"Successful!"` message displays if there are no errors.
12. Click **OK**.

---

## Add Resources to the Report


Add resources such as filter options to a report you previously published. You need the **Advanced Reporting Administer** access right to complete this procedure.

**Follow these steps:**

1. In Classic PPM, click **Home**, **Advanced Reporting**.
2. Select **View**, **Repository**.
3. Navigate to the folder where the report is located.
4. In the Repository, right-click the report and select **Edit**. The **Set Up the Report** page displays.
5. Click **Controls & Resources**. Click one of the following links:
   - **Add Resource** — to add resources from the repository such as report bundles.
   - **Add Input Control** — to add input controls from the repository.
6. Click **Submit**.

> [!note]
> You do not need to publish the report every time you edit it. Once you have created the report unit, you can simply upload the JRXML file from Jaspersoft Studio instead.
> You can also upload a local JRXML file from the **Set Up the Report** page when editing the report.
> However, the report server does not validate the JRXML file when you upload it. Use Jaspersoft Studio to validate the JRXML before uploading it.

---

## Create a Parent Report with Child Subreports


You can create a parent report and add child subreports to it. The **Project Storyboard** report, included with the Advanced Reporting content installed with the PMO Accelerator add-in, is used here as an example.

### Download the Main and Subreports JRXML


**Follow these steps:**

1. In Jaspersoft Studio, in the **Repository Explorer**, expand **Servers** and the server connection.
2. Navigate to the **Clarity /Reports/Project Management** folder and expand the **Project Storyboard** report. The resources in the report unit display.
3. Right-click **Main jrxml** and select **Download To File**. The **Save As** window opens.
4. Select a folder and provide a file name without spaces and special characters (for example, `My_ProjectStoryboard.jrxml`). Prefix your report names with your company initials.
5. Click **OK**. Jaspersoft Studio saves the report JRXML file in your local folder and opens it in the editor.
6. In the Project Storyboard report folder, right-click the **Project Storyboard Earned Value Analysis** subreport and select **Download To File**.
7. Select a folder and keep the file name provided, replacing `CSK` with your company initials (for example, `My_PRJ_ProjectStoryboard_EVAnalysis_Subreport.jrxml`).
8. Click **OK**.
9. In the Project Storyboard report folder, right-click the **Project Storyboard Issues** subreport and select **Download To File**.
10. Select a folder and keep the file name provided, replacing `CSK` with your company initials (for example, `My_PRJ_ProjectStoryboard_Issues_Subreport.jrxml`).
11. Click **OK**.

Now you have all source files open in the editor and saved in your local folder. Use these copies to create your own version of the Project Storyboard report.

### Create Report Unit for Main Report


**Follow these steps:**

1. In Jaspersoft Studio, verify that you have all the report source files open in the editor and saved in your local folder.
2. Select the tab where the main report is open.
3. Select **Outline** and click the report name at the top level of the hierarchy. The **Properties** tab displays the report properties.
4. Select **Properties**, **Report** and then change the report name by replacing `CSK` with your company initials. Keep the resource bundle as `CSK`.
5. Select **Outline** and expand **GroupDetail Group Footer 1** until the subreport elements appear.
6. Click the first subreport. The subreport properties appear.
7. Navigate to the first subreport element properties and change the expression, replacing `CSK` with your company initials.
8. Repeat to change the expression for the second subreport.
9. Save your changes locally. If the **Save** option is not available, navigate to the **Source** tab in the designer area and try to save.
   If still unable to save, make a small change in the report source and click **Save** from the toolbar.
   The report is saved when the `*` in front of the report tab name disappears.
   When the message `Do you want to publish this report to JasperReports Server?` appears, click **No**.
10. Click **Publish Report to JasperReports Server** in the upper-right corner of the Design area. The **Report Publishing Wizard** opens.
11. Select the server and location. Avoid publishing reports under the Classic PPM folder.
12. Select **Create Report Unit** if it is not already selected.
13. Complete the following information:
    - **Report Unit Label**
    - **Report Unit Name (ID)** — prefix with your company initials; cannot be modified later
    - **Report Unit Description** (Optional)
14. Click **Next**. The **Select Resources to Publish** window opens.
15. Select **Ignore** from the drop-down (instead of **Overwrite**) for all resources.
16. Click **Next**. The **Configure the data source** window opens.
17. Select **Data Source from Repository**.
18. Navigate to the **Clarity /Data Sources** folder and select **CA_PPM_DWH_BEAN** for the Data Warehouse. Select the data source even if the message `"There is a problem with selected Datasource which is not valid"` appears — it disappears when you select the correct data source.
19. Click **Finish**. The report is uploaded to the server. A `"Success!"` message appears if there are no errors.
20. Click **OK**.

At this point, the Project Storyboard report unit exists in Advanced Reporting, but it does not yet include the subreports.

### Add Subreports to Main Report Unit


**Follow these steps:**

1. In Jaspersoft Studio, verify that you have all the report source files open in the editor and saved in your local folder.
2. Select the tab where the first subreport is open.
3. Select **Outline** and click the report name at the top level of the hierarchy.
4. Select **Properties**, **Report**, and change the report name by replacing `CSK` with your company initials. Keep the resource bundle as `CSK`.
5. Save your changes locally. When the message `Do you want to publish this report to JasperReports Server?` appears, click **No**.
6. Repeat the steps to change the name for the second subreport.
7. In the **Repository Explorer**, expand **Servers** and the server connection.
8. Navigate to the folder where your copy of the Project Storyboard report is located.
9. Right-click the report unit folder and select **New**.
10. Select **JRxml**.
11. Click **Next**. The **Add Resource** wizard appears.
12. Complete the following information:
    - **Name:** Internal name for the subreport (does not display in the repository).
    - **ID:** Internal ID used by the main report when calling the subreport. Provide an ID without spaces or special characters, prefixed with your company initials. Cannot be modified later.
    - **Description:** (Optional) Internal description.
13. Click **Next**. The **Report file** window opens.
14. Select **Upload from File System** from the drop-down list.
15. Click **Finish**.
16. Repeat for the **Project Storyboard Issues** subreport.

The report unit with the main and subreports is now created.

> [!note]
> Do not publish reports that include subreports from Jaspersoft Studio. To modify reports that include subreports, download them to your local system and upload the updated JRXML files. Follow this practice for both the main and subreports.

---

## Tips for Creating and Publishing Reports


- Keep a backup copy of the JRXML files you create or modify. Store these copies in a source control tool.
- Some input controls (such as **Project**, **Investment**, **Resource**) have dependencies on other input controls. They are cascading input controls. These input controls require that all dependencies are added to the report.
- The `$R{}` expression used in input control names is for localization purposes. Do not use `$R{}` in your input controls unless you want them localized to other languages.
- The keyword included in the `$R{}` expression is available in the **Report Resource Bundle**. The base Report Resource Bundle should be associated to a report that includes at least one input control referencing the `$R{}` expression.
- The base Report Resource Bundle contains labels in English. Report Resource Bundles from other supported languages are available under the **Clarity /Resources/Localization** folder.
- If a report unit is corrupted, a `java.lang.Exception: Attachment not present!` error appears — this is more common with reports published from Jaspersoft Studio that contain subreports.

  **To resolve:**
  a. Upload the main JRXML file and all corresponding JRXML files of each subreport.
  b. If this is a new report you just published, publish the report a second time.

> [!tip]
> - To learn more about input controls and other resources for developing reports in Jaspersoft Studio, see [[Getting Started Jaspersoft]].
> - To learn more about the input controls used by the Project Storyboard report, see the Advanced Reporting Product Guide on Broadcom Support.

---

## Jaspersoft Report Page Limits


The Classic PPM page where you generate a report determines the maximum number of pages for very large reports:

| Application Page | Method | Page Limit |
|---|---|---|
| Advanced Reporting (Release 14.2+) | Run or Export (Save As) | 500 |
| Reports and Jobs (Release 15.3+) | Schedule a Report | 1,000 |
| Reports and Jobs (Release 15.3+) | Run Immediately | 1,000 |

---

## Related

- [[_MOC Advanced Reporting]]

%%Source: p3256-3268%%

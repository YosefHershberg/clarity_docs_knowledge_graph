# Clarity Studio Development

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[16 - Development/_MOC Development|Development]]
- Canonical notes:
- [[16 - Development/REST API/Authentication]]
- [[16 - Development/XOG/Client and SOAP]]
- [[16 - Development/Studio/Content Packages]]
- [[16 - Development/REST API/CORS]]
- [[16 - Development/Custom Objects/CSV Import]]
- [[16 - Development/REST API/Enhancements]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Clarity Studio Development (#clarity-studio-development)
- H2: Studio Access Rights (#studio-access-rights)
- H2: Install or Update Content Add-ins (#install-or-update-content-add-ins)
- H2: Attribute Value Protection (AVP) Performance Tip (#attribute-value-protection-avp-performance-tip)
- H2: Clarity Studio Objects and Attributes (#clarity-studio-objects-and-attributes)
- H3: Prerequisites for Custom Object Development (#prerequisites-for-custom-object-development)
- H3: Create an Object (#create-an-object)
- H3: Create Attributes (#create-attributes)

## Clarity Studio Development

As a developer with administrative rights, use the integrated Classic PPM Studio tools to customize your environment. Deploy local configurations and user interfaces that align the application with your exact business processes and information requirements.

You can propagate the objects and attributes that you create to portlets, pages, custom content packages, and the XML Open Gateway (XOG). Your custom configurations automatically carry forward to future versions of Classic PPM.

For example, use Studio to design a new portlet with custom filter options. Enable users to view the portlet data in their choice of a grid or chart including bar, bubble, column, funnel, line, pie, or scatter chart. Portlets dynamically adjust the data in charts and tables that are based on the access rights of the current user.

> [!TIP]
> **Documentation Tips:**
> - When you log in at techdocs.broadcom.com, all content appears (including restricted content). However, some of the product documentation is not available in your language. For example, the Studio content is only available in English.
> - Be aware of two popular Studio environments. Content developers can modify the application using the main Classic PPM Studio features. Report designers can develop custom reports using the separate JasperSoft Studio application. Be advised that other third-party tools may also use the popular name Studio in their titles.

This section covers:
- Studio Access Rights
- Install or Update Content Add-ins
- Attribute Value Protection (AVP) Performance Tip

---

## Studio Access Rights

As an administrator, verify that Studio developers have the appropriate access rights.

**Studio Access Rights**
- Administration - Access
- Administration - Studio Object Access Rights
- Custom Objects Editor
- Object - Create Definition
- Object Administration

**Portlet Access Rights**
- Portlet Create
- Portlet Definition Editor
- Portlet Definition Editor - All
- Portlet Navigate
- Portlet - View
- Portlet Viewer - All

**Portlet Page Access Rights**
- Page Definition Editor
- Page Definition Editor - All
- Page Definition Viewer
- Page Definition Viewer - All
- Page - View
- Page Viewer - All

**Partition Model Access Rights**
- Administration - Partition Models
- System Partition - Administer

**Menu Manager Access Rights**
- Menu Definition Editor - All
- Menu Definition Viewer - All

**Content Add-in Access Rights**
- Content Add-Ins - Administer
- Administration - XOG

**Content Package Access Rights**
- Content Package - Administer
- Content Pack - XOG Access

> [!WARNING]
> Install and configure the Document Management System before using content package JAR files built in Studio.

---

## Install or Update Content Add-ins

Developers often require custom content from your choice of new or upgraded add-ins. An add-in is a collection of content that can include portlets, pages, access groups, processes, and jobs. The content in an add-in provides an efficient way to get started with specific functionality in Classic PPM.

The content from an add-in is available to users when the administrator deploys it to your environment. As an administrator or developer, install and apply updates for each add-in before development starts. After installation, you have an opportunity to review and to accept the changes being delivered in the add-in. This option is not always available. For example, a fix being delivered is installed directly to the database.

> [!WARNING]
> If your environment was customized before installing or updating an add-in, note the following points:
> - When you apply an add-in, the customization of objects such as portlets and pages in Studio can be overwritten. Your user interface changes.
> - You cannot uninstall an add-in.
> - To avoid overwriting any Studio customizations, consider what the add-in is going to change before installing or applying it.

**Follow these steps:**

1. Open **Administration**, and from **Studio**, click **Content Add-ins**.
2. Click the name of the add-in. The add-in details page appears showing the following columns:
- **Status**: Indicates whether the add-in item is applied in Classic PPM. Values:
- **Not Installed**: The items are new to this add-in version or you did not apply them from a previous version.
- **Upgrade Ready**: Modified items that you applied from a previous add-in version and then configured. An update is included in the current version.
- **Installed**: Items that are installed.
- **Type**: Indicates the item type. Values: Object, Lookup, Tab, Query, Portlet, Page, Custom View, Group, Menu, Project, Process, Role, and Job.
- **ID**: Displays the add-in item code, which becomes the ID of the applied add-in item.
3. Review each selected item. Accept only those changes you want. Only the items that you select are updated.

> [!NOTE]
> When the items are selected to be updated, any items that are dependent on the selected items are also selected to be updated.

4. Click **Apply**.

---

## Attribute Value Protection (AVP) Performance Tip

Avoid heavy use of secure subpages and AVP display conditions.

> [!TIP]
> Limit the number of secure subpages. When configuring object views, also minimize your use of the **Use display conditions and secured subpages to protect attribute values on this list** AVP setting.

You can secure object subpage views. Each secure subpage results in a sub-query to check security. On the Project List and other large object list views, heavy use of secure subpages combined with AVP settings to enforce secure subpages might reduce performance.

> [!NOTE]
> More information:
> - Studio Access Rights
> - Clarity Studio Object Views and Attribute Value Protection

---

## Clarity Studio Objects and Attributes

Objects define the attributes, linked subpages, page layout, audit trail, and views for your configured version of Classic PPM pages. The studio provides stock objects that are available for your use. For example, you can use the Audit stock object to create pages that manage audit trail information. Use the Audit object as is or create a subobject that has only some of the characteristics of the master Audit object. You can also create your own custom objects.

You can create a hierarchy of up to three levels of objects. Any child objects inherit properties and access rights from their parent objects:
- **Master Object**: This object is the parent of subobject 1 and grandparent of subobject 2. A user with access rights to this object has the same rights to all its subobjects.
- **Subobject 1**: This object is the child of the master object and parent of subobject 2.
- **Subobject 2**: This object is the child of subobject 1 and the grandchild of the master object.

If you add a master object to a partition model, any subobjects you create are automatically assigned to that model. When you change the master object, those changes are automatically made available to the subobject. After you select an object to use, create an instance of the object to use in your application.

As the creator of an object, you automatically have access rights that allow you to view and change the object. For other users to view and change the new object, grant them access rights to it.

The following graphic shows the relationship of partitions, objects, attributes, views, and subpages. A partition contains the object and the other components that make up the pages that a user sees. *(
> [!INFO]
> Figure 39: Relationship of Partitions, Objects, Attributes, Views, Subpages
Create a custom object in Studio to define the attributes or fields that make up your configured version of Classic PPM pages. Use the default objects or create custom objects and subobjects to create and manage information for your specific business needs.

**Example:** A project manager wants to provide a retrospective summary report at the end of a product release. To help the project manager manage the retrospectives, the system administrator sets up the following framework in Studio:

1. A master object named **Survey** with the following attributes:
- Project Name (lookup attribute)
- Start Date and End Date (date attribute)
- Project Manager (lookup attribute)
- Team Members (lookup attribute)
2. A subobject named **Retrospective** with Survey as its parent object and the following attributes:
- What Went Well (string attribute)
- Areas for Improvement (string attribute)

This section covers:
- Prerequisites for Custom Object Development
- Create an Object
- Create Attributes
- API Enable Custom Attributes to Display them in Clarity
- Configure Display Mappings for Attributes
- Register Portfolio Investment Object Attributes
- Add Attributes to the Object Properties View
- Add Attributes to the Object List Filter View
- Add Attributes to the Object List Column View
- Grant Access to the Object
- Edit the Default Custom Object Menu Link
- Audit an Object
- Delete an Object
- Update Translation Strings for Custom Objects and Attributes

### Prerequisites for Custom Object Development

Review the applicable prerequisites in this list:
- Set up partitions if you want to associate the object attributes with a particular partition. You can associate object attributes with partitions and then create different presentations of the same objects for different users.
- If you plan to use a parameterized lookup, create the NSQL queries ahead of time. You can map the query parameters to the object.
- Create your OBS hierarchy in advance for the following purposes:
- To control access and enable organizational reporting, associate an OBS with your object instances.
- Create fiscal time-scaled values using the time-varying attribute data type.
- Create the lookup that you want to add to a single value or multi-value lookup data type attribute.
- Verify that the attributes you create meet the needs of your users. The number of attributes affects the amount of time it takes to display pages. Do not create more attributes than you need.
- Verify that you do not use the following reserved words for an object name or object ID:

```
application, asset, company, contract, discussion, document, glallocation, idea,
incident, incidentcategory, investmentallocation, investmenthierarchy,
invoice, invoiceitem, invoicetransaction, job, other, product, release, releaseplan,
report, requirement, requisition, resourcecredit, service, subscription, timesheet
```

> [!WARNING]
> The product supports up to 500 total attributes for each object. However, we recommend that you do not assign more than 100 attributes to a single custom object. A high number of attributes can result in performance issues and the potential failure of subsequent upgrades. Consider creating a subobject rather than assigning many custom attributes to a single object.

### Create an Object

After you create an object in Studio, users can create instances of the object whenever they need. For example, create an object that is named Survey so that users can create multiple surveys.

**Follow these steps:**

1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click **New**.
3. Enter an object name, a unique ID, and a content source.
4. (Optional) In the **Description** field, enter any details that remind you and other developers of the purpose of the object.
5. Select **Master** for a new parent object. In the **Partition Model** field, select a partition model or leave empty for the default system partition.
6. Select **Subobject** if the object is the child of another object that you specify in the **Master Object** field.
7. Select the check boxes to enable any of the following features:
- **Event Enabled**: Specifies that the process engine is notified of object instances that are created or updated.
- **Include in the Data Warehouse**: Includes the object instance data in the data warehouse for reporting.
- **Copy Enabled**: Specifies that copies can be made of the object instances.
- **Export Enabled**: Specifies that object instances can be exported to XML.
- **View All Enabled**: Specifies that the object instances can have a view containing all properties, subobject lists, and page portlets that can be personalized on a single page.
8. Save your changes.

> [!TIP]
> The **Include in the Data Warehouse** check box does not appear until you click **Save**. This expected behavior occurs because this same page creates objects and subobjects. A subobject can only be data warehouse enabled when its parent object is already enabled. The delayed appearance of the check box prevents any potential conflict in your settings.

> [!ATTENTION]
> Any system object that already has a parent (it is a system subobject to a system master object) cannot have any subobjects. Some examples of system subobjects (with their parent object code) are:
> | Subobject Code | Parent Object Code |
> |---|---|
> | benefitplandetail | benefitplan |
> | burdeninglevel | burdeningmatrix |
> | costplandetail | costplan |
> | glallocationdetail | glallocation |
> | risk, issue, baseline, change, team, task | inv (project/investment) |
> | pfm_role_demand, pfm_role_capacity, pfm_plan | pfm_portfolio |
> | pfm_investment | pfm_portfolio |
> | rdm_roadmap_item | rdm_roadmap |
> | resourcecreditdetail | resourcecredit |
> | keymetric, assignment | task / project |
> | requisition, reqresource | requisition |
> | subscription | subscription |

### Create Attributes

Attributes store information that is associated with object views on pages. For example, Start Date and End Date are attributes of the Project object. You can change how a default attribute appears but you cannot change its properties including the name, ID, description, data type, or lookup.

> [!NOTE]
> When you specify a default value for an attribute and click **Save**, Clarity creates a new attribute and assigns it the default value. If you have selected the **Populate Null Values with the Default** checkbox, Clarity then reviews all the existing records of the object associated with the attribute. Since the existing records do not have any value associated with the new attribute you created, Clarity replaces the NULL value with the default value specified by you.

**Example:** The administrator creates a new user-defined attribute on the Project Object and specifies a default value. Since the organization already has many projects, the default value associated with the new attribute will not be automatically attached to those objects. The administrator can use the **Populate Null Values with the Default** checkbox to update existing projects with the default value for the attribute.
You can create any of the following types of attributes:
- Attachment
- Boolean
- Calculated
- Aggregate
- Date
- Formula
- Lookups:
- Single Value Lookup
- Multi-Value Lookup
- Parameterized Lookup
- Money
- Number
- String
- Large String
- Rich Text
- Time-Varying
- URL Link
- Virtual

#### Attachment Attribute

Create an attachment attribute to allow users to upload and view files in a field. You can configure the attribute to allow the upload of a single file or multiple files. The following considerations apply to the attachment attributes:
- The file extensions and file size limits are governed by the global settings. They cannot be set at the attribute-level. For more information on the global settings, see Set Document Management Options.
- Multiple files cannot be uploaded in one go when uploading files to an attribute that supports multiple documents. Upload one file at-a-time.
- A maximum of 10 files can be uploaded to an attribute. You can configure this number at the attribute-level.
- Once the attribute is API enabled, you can view and manage the attachment attributes in Clarity with the exception of the following:

> [!ATTENTION]
> - The attachment attribute cannot be made available in Clarity for objects that do not have the Details panel or Properties page. For example, Roadmap Items and Cross-Project Tasks. Use Classic PPM to manage the attachment attributes for these objects.
> - The attachment attribute cannot be added to the cards in the Board Layout. Use the Grid, Details panel or the Properties page to view, upload, or delete attachments.
> - When you create an instance (such as a Project or Idea) from the Board layout in Clarity, the attachment attributes appear disabled until all the mandatory fields are filled out.
> - The attachment attribute cannot be used in filters to search for objects with an attachment name.
> - When you export the grid data to CSV, the corresponding attachment attribute columns in the CSV will display the details of the file name, mime type, and the URL to download the file.

**Follow these steps:**

1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of an object.
3. Click **Attributes**.
4. Click **New**.
5. Enter an attribute name and a unique ID.
6. Set the **Data Type** field to **Attachment**.


7. Complete any of the remaining fields.
8. Click **Save and Return**.

#### Boolean Attribute

Create a Boolean attribute to indicate one of two exclusive conditions. For example, an Active check box for a project is true when selected and false when cleared.

**Follow these steps:**

1. Open **Administration**, and from **Studio**, click **Objects**.
2. Click the name of an object.
3. Click **Attributes**.
4. Click **New**.
5. Enter an attribute name and a unique ID.
6. Set the **Data Type** field to **Boolean**.
7. Complete any of the remaining fields and configure optional display mappings (icons or colors).
8. Click **Save and Return**.

#### Calculated Attributes

A calculated attribute uses the values of other attributes to calculate its value dynamically. For example, you can create a Remaining Budget attribute that calculates its value from the following formula:

```
Remaining Budget = Planned Cost - Actual Cost
```

The Remaining Budget value depends on the value of two other attributes (Planned Cost and Actual Cost). The value of a calculated attribute is not stored in the database. The value is determined at runtime by extracting the value from an equation set up for the attribute. Therefore, you cannot sort, use a power filter, or manually update calculated attributes.

You can use one or more functions for calculating an attribute value. The functions can be compounded to produce complex calculations. For example:

```
Remaining Budget = Absolute (Planned Cost - Actual Cost)
```

A calculated attribute can include other calculated attributes. The expression that you write determines the order of operations and precedence of the calculated attributes.
The following attribute types cannot be used with calculated attributes:
- Formula
- Time-varying
- Attachment
- Long String
- Multi-Value Lookups
- Virtual
The result of the calculation can be one of the following data types, depending on the function:
- Number: Use this data type for a calculation that requires a number value such as a sum or an average of other numbers.
- String: Use this data type for a calculation that requires the concatenation of two or more values. For example, the value of the attribute created_by and the constant 2018. An example of the value that is produced by the concatenation is ssmith2018 .
- Date: Use this data type to calculate dates using basic arithmetic or to provide the current date.


If the value of a parameter (field source) in an expression is null, you can receive a null result. A null result also occurs when the expression cannot be resolved. For example, division by zero produces a null result.

Calculated Attribute Functions

Absolute value Add Average Concatenate Date Add
Date Difference
Divide Maximum

Function

Absolute(number) Absolute(Aggregate Calculated A Add(number1, number 2)
Add(Aggregate Calculated attribu Add(number1, number2) Add(number1, <constant>)
Average(number1, number2 ...) Average(number1, Aggregate Cal
Concat(string1, string2 ... ) Concat(string1, <constant> ...)
DateAdd(date attribute, unit, numb Date attribute: This value can be a Unit: Day, Hour, Minute, or Secon Number: Number of units to add t
DateDiff(date attribute1, date attri Date attribute1: The date you are Date attribute2: The date you are Result unit: Day, Hour, Minute, or
Divide(number1, Aggregate Calcu Divide(number1, number2) Divide(number1, <constant>) for e
Max(number1, number2 ...) Max(number1, Aggregate Calcula

Minimum

Min(number1, number2 ... ) Min(number1, Aggregate Calculat

Multiply
Now Percentage
Power Round Square Root

Multiply(number1, Aggregate Calc Multiply(number1, number2) Multiply(number1, <constant> ) (e
Now()
Percentage(number1, Aggregate Percentage(number1, number2) (ex: Percentage (A,B)) Percentage(number1, <constant>
Power(number, power) Power(Aggregate Calculated Attri
Round(number, <number of digits Round(Aggregate Calculated Attri
Sqrt(number) Sqrt(Aggregate Calculated Attribu


Subtract Sum

Function

Subtract(number1, number2) Subtract(number1, <constant>) Subtract(number1, Aggregate Cal Sum(number1, number2, ...) Sum(number1, Aggregate Calcula

Truncate

Trunc(number, <number of digits> Trunc(Aggregate Calculated Attrib

Example: Building Calculations
You want to create an expression for the absolute value of the difference between planned cost and actual cost. The following equation expresses the calculation:
Remaining Cost = Absolute(Planned Cost - Actual Cost)
The absolute value of the difference between two numbers is the desired result. When you select the Absolute function, the appropriate fields for defining the function argument appear. The Absolute function has only one argument. Select the sub-expression option to represent the expression for the difference between the numbers. When you click Generate, the expression appears in the Expression text box.
When you include a sub-expression in a generated expression, the Generate Expression for field appears at the top of the dialog box. To define the sub-expression, select its name in the Generate Expression for field and select the function for the sub-expression (Subtract in this example) in the Function field. Select the arguments for the Subtract function (Planned Cost and Actual Cost) from the available list of attribute names for the object using the drop-down list. When you click Generate, the entire expression with the sub-expression defined appears in the Expression text box as follows:
Absolute(Subtract(planned_cst_total-aggr_actual_cost))

Create a Calculated Attribute
Create a calculated attribute to display a field with a read-only value that is calculated dynamically. For example, create a Variance attribute that is calculated as Planned Cost minus Actual Cost in the project budget page.
To view the calculated attribute in the product pages, include the attribute in the layout of the object properties view. For example, to display the calculated attribute on project properties, list, and filter pages, configure the project views to include the attribute. See Clarity Clarity Studio Object Views for more information.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of an object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to Calculated. 7. Set the Result Data Type to one of the following calculated data types:
- Number
- String
- Date 8. Complete any of the optional fields. 9. Click Save.


10. Click the Build Calculated Attribute link. 11. Select a function in the Function field. 12. Select the number of arguments in the Argument Number field. Some functions have a specific number of arguments
that you cannot change. 13. Create the arguments for the function expression by selecting one of the following options for each argument listed:
- Constant: Enter a value that remains the same for all calculations.
- Attribute Name (ID): Select a valid field from the drop-down list.
- Sub-expression: Embed another expression in the expression that you are building for the calculated attribute. 14. Click Generate to build the arguments in the Expression field. For example, the average of a constant, a field value, and a sub-expression appears in the following expression:
[45+my_field+(start_field + 365)]/3
When the result data type is Number, you can also manually insert the following operators: +, -, *, and / . For example, you can enter the sum of three numbers in the Expression text box as (num1+num2+num3). 15. Repeat the following steps to define all sub-expressions for the whole expression: a. In the Generate Expression for field, select the name of the sub-expression. b. In the Function field, select the function that defines the purpose of the sub-expression. c. Define the arguments for the sub-expression. d. Click Generate. The defined arguments for the sub-expression are included in the whole expression. 16. Click Validate to verify that the expression syntax is correct and make any necessary adjustments. A message appears indicating the expression syntax is valid. 17. Click Save and Return. 18. In the Display Mappings section, configure a series of icons or colors to represent specific ranges of numerical values. 19. Click Save and Return.
Aggregate Calculated Attributes An aggregate calculated attribute (ACA) rolls up an attribute value from many subobject instances to the master object. For example, you can define an ACA that rolls up the following values from the subobject instances to the master object:
- Cost values from subobject instances to provide the total cost for the master object.
- Count the number of high priority risks to report on the count for the master object. Enable an ACA for the data warehouse to include it in the advanced reporting domains that are used by report builders. See Configure the Data Warehouse and Advanced Reporting for more information on enabling custom attributes for the data warehouse.
ACA Calculations To define an ACA calculation, define the subobject, function, and subobject attributes in the calculation. The following rules apply when you define an ACA:
- The ACA functions are available for both stock and custom attributes and support the following data types:
- Number
- Calculated with Result Data Type of Number (for example, the Business Alignment value for a project)
- Money
- Boolean
- Single Value Numeric Lookups (static and dynamic; for example, the Track Mode options for a project)
- The rollup supports only one level in the master and subobject relationship. The ACA aggregates values from the subobject to the master object or from the child object to the subobject.
- You cannot configure virtual attributes in an ACA function.
- The ACA reads through all the subobject instances of the master object instance that satisfy the ACA filtering criteria. Any display conditions or secured subpage rights for the aggregated attribute that hide the value from users are disregarded. An ACA also disregards user access rights for subobjects.

ACA Functions The following table describes the available ACA functions:

Function AGG_Average
AGG_Count

Attribute Parameter Data Types
AGG_Average(Number) AGG_Average(Numeric Calculated Attribute)
AGG_Count(Number) AGG_Count(Numeric Calculated Attribute)

Number Number

Result

AGG_Sum AGG_Min AGG_Max

AGG_Sum(Number1)

Number

AGG_Sum(Numeric Calculated

Attribute)

AGG_Min(Numeric)
AGG_Min(Numeric Calculated Attribute)

Number

AGG_Max(Numeric)
AGG_Max(Numeric Calculated Attribute)

Number

Return Value
The average of the attribute parameter across all of the subobject instances.
The count of the number of records across all subobject instances. Note: Only counts instances where the parameter is not null.
The sum of the attribute parameter across all sub object instances.
The minimum value from all the subobject instances based on the attribute parameter.
The maximum value from all the subobject instances based on the attribute parameter.

Example: Create an ACA to Show Overall Business Value for an Application
The Application object has two subobjects, Business Value and Technology Fit. The subobjects include some calculated attributes. The calculated attributes get their values based on questions that users answer when they create instances of the subobjects.
You can create an ACA that sums the various business value scores for all application instances.
Follow these steps:
1. Create an attribute that is named Business Value Score for the Application object. 2. Select Aggregated for the attribute data type. 3. Build the ACA by selecting the following values in the Expression Builder:
- Function=AGG_Sum (aggregating by sum)
- Subobject= Business Value
- Subobject attributes= Business Criticality, Market Differentiators, Financial Model, Resources, and Business Value.


4. Select the attributes in succession. 5. Click Generate after selecting the first attribute and then Append for the subsequent ones. The function is always
AGG_Sum. 6. Create the following function syntax to aggregate the sum of all business value attribute scores:
AGG_Sum(apm_business_value.apm_market_diff)+AGG_Sum(apm_business_value.apm_bus_criticality) +AGG_Sum(apm_business_value.apm_business_value)+AGG_Sum(apm_business_value.apm_financial_model) +AGG_Sum(apm_business_value.apm_resources)
You can add a filter condition to the ACA to request a score for only approved and final instances of the business values.
Follow these steps:
1. Open the ACA attribute properties. 2. Next to Filter, click Define filter condition. 3. For the Business Value subobject, define an And condition. For example, select the following attributes values to filter
the subobject instances:
- Approved=yes
- Report Status= Final 4. Verify that the filter expression looks like the following example: apm_business_value.apm_approved == 1 && (apm_business_value.apm_report_status == lookup("OBJ_STATUSREPORT_REPORT_STATUS", "FINAL"))
Create an ACA
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes and then click New. 4. Enter an attribute name and a unique ID. For example, to create an ACA that calculates the average task duration for
a project, call the attribute Average Task Duration. 5. Set the Data Type field to Aggregated. The Result Data Type is automatically set to Number. 6. Complete any of the remaining fields and save changes. 7. Next to Calculation, click the Build Aggregated Calculated Attribute link. 8. Complete the requested information. The following fields require explanation:
- Function. Defines the function that the ACA performs. For example, select AGG_Average if you want your ACA to calculate the average task duration value for projects.
- Sub Object. Defines the sub object for the instances of which the ACA returns a value. For example, for the Average Task Duration ACA, select Task as the sub object for the instances of which the ACA returns a value.
- Attribute. Defines the sub object attribute for which the ACA returns a value. For example, for the Average Task Duration ACA, select Duration as the task attribute for which the ACA returns an average value. The list of available attributes is based on the function and the sub object that you select. For example, select an Average function for the Task sub object. The available attributes are the ones for which you can provide an average value.
9. Click Generate to build the arguments in the Expression field. For example, the following expression creates an ACA that calculates the average task duration for project tasks:
AGG_Average(task.prduration)
10. Validate your expression syntax and click Save and Return. 11. Configure the object views (properties, list, and filter) to add and display the ACA on the object pages in the
application. For example, to display the Average Task Duration ACA on project properties, list, and filter pages, configure the project views to include the attribute. See Clarity Studio Object Views for more information.

Limit SubObject Instances Included in an ACA
To limit what subobject instances are included in a roll-up calculation for an ACA, create a condition based on the attribute values of the sub object instances. For example, create a condition for the Average Task Duration ACA to calculate the aggregated average task duration for key tasks only, not all tasks.
To filter the subobject instances in the roll up, you can create compound filter conditions using the And/Or operators. For example, you can create a condition to select the most recent subobject instance and where status of the subobject equals Complete.
You can configure the filter conditions on all sub object attributes except for attributes with the following data types:
- Formula
- Time Varying
- Attachment
- Long String
- MVL
You can create an Average Task Duration ACA for key tasks only.
Follow these steps:
1. Create an ACA named Average Task Duration for Key Tasks. 2. Build the ACA by selecting the following values:
- Function= AGG_Average.
- Sub Object= Task
- Attribute=Duration 3. Generate and validate the expression. 4. Click Save and Return. 5. Define a filter condition for the sub object instances. a. Next to Filter, click Define filter condition. b. For the selected sub object, select the field by which to filter the sub object instances. For example, for the Task
sub object, select Key Task as the attribute by which to filter all tasks. The ACA now considers only key tasks in the calculation. c. Click Add to add the expression in the Expression box. 6. Evaluate the expression for the filter condition. 7. Click Save and Return. 8. Configure the object views to display the ACA on the object pages in the application.
Configure ACA Output as Input for Standard Calculated Attributes
Configure a standard calculated attribute to use an ACA value as an input parameter. For example, create a standard calculated attribute to generate an overall application health score as a sum of the business value score and the technology fit score. In this case, you can use the Business Value Score and the Technology Fit Score ACAs:
Overall Application Health Score (Standard) = Business Value Score (ACA) + Technology Fit Score (ACA)
Follow these steps:
1. Create a standard calculated attribute at the master object level (for example, Application). See Create a Calculated Attribute for more information.
2. Define the attribute name and ID (for example, Overall Health Score (health_scr)). 3. Build the calculated attribute as follows:
a. Select Sum for Function. b. Select Argument Number 1.

c. Select the attribute name and ID for argument 1. For example, select the ACA "Business Value Score". d. Click Generate to add the sub expression to the Expression box. e. Select Argument Number 2. f. Select the attribute name and ID for argument 2. For example, select the ACA "Technology Fit Score". g. Click Generate to add the final expression to the Expression box. 4. Verify that the expression specifies the function that the standard calculated attribute performs. For example, the following expression specifies that the function sums the Business Value Score and Technology Fit Score ACAs:
Sum(bus_val_scr,tech_fit_scr)
5. Validate the expression and save.
Configure Standard Calculated Attribute Output as ACA Input Configure an ACA to use a standard calculated attribute value as an input parameter. For example, create an ACA that retrieves a total task cost variance score using the standard Cost Variance% calculation as shown below:
Total Task Cost Variance (ACA) = Sum of all the task Cost Variance% (Standard) subobject instances
Follow these steps: 1. Create an ACA for the Project object. 2. Define the attribute name and ID (for example, Total Cost Variance (tl_cst_var)). 3. Build the ACA by selecting the following values:
- Function= The function that the ACA performs on the sub object instances (for example, ACG_Sum)
- Sub Object= The sub object for the ACA (for example, Task)
- Attribute= The sub object attribute for the ACA. For example, select the standard calculation, Cost Variance %. 4. Click Generate to add the expression to the Expression box. For example, generate the following expression to retrieve the average task cost variance for the project:
AGG_Sum(task.obj_ev_cv_pct)
5. Validate the expression and save.
Display ACAs in a Portfolio Add an ACA to a portfolio to display summary information that is rolled up from the child investments. For example, to display status information at the portfolio level, use an ACA that rolls up the information from the project and task levels. Follow these steps: 1. Create the ACA on the Investment, Project, or a non-project investment object. 2. Make the ACA available on the attribute registry on the Portfolio Investment object. See Register Portfolio Investment
Object Attributes . 3. Configure the portfolio pages to display the ACA in the properties, targets, waterline, and data providers. See
Configure Chart, Filter, and List Portlets . NOTE The portfolio investment ACA value is a snapshot of the investment ACA value at the time the Synchronize Portfolio Investments job runs. The ACA value in the actual investment can be different from the portfolio investment because the value rolled up from the actual investment subobjects can change. To get the latest ACA value in the portfolio, run the synchronize job to synchronize the portfolio with the actual investments.

Example: Display a Total Allocations ACA at the Portfolio Level that Sums the Project Team Allocations
Follow these steps:
1. Create an ACA named Total Allocations on the Project object. Build the ACA by selecting the following values in the Expression Builder:
- Function= AGG_Sum
- Subobject= Team
- Attribute= Allocation (prallocsum)
2. On the Portfolio Investment object, select Attribute Registry. 3. In the Available Attributes list, select Total Allocation and move it to the Selected Attributes list. 4. Synchronize the portfolio so the latest investment attributes become available to the portfolio. 5. Configure the portfolio views to display the Total Allocation attribute. For example, configure the Waterlines view to
display Total Allocation as an extra column heading for the investments.

#### Date Attributes

Create a date attribute to provide a field where users can enter a date or can select a date by clicking a calendar icon. For example, you can provide fields for the Start Date or End Date attributes on the project schedule page.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to Date. 7. Complete any of the remaining fields:
- Validation From and To Specifies the earliest and latest date to include in the date attribute. Select Rolling Date or Specific Date and the specific values that you want for your selection. If needed, specify the hour and minute.
8. Save your changes.

#### Formula Attributes

Create a formula attribute to calculate the weighted average of two or more attributes in the same object. This attribute is similar to a calculated attribute, but you can build a weighted average. For example, the value for the Risk Drivers attribute is based on the Risk Likelihood and Risk Priority attributes with Risk Likelihood weighing twice as much as Risk Priority.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to Formula. 7. Complete any of the remaining fields. 8. (Optional) To display the field in color or as an icon, complete the following steps in the Display Mapping section:
a. In the Type field, select Color or Icon. b. Select the appropriate color or icon. c. Enter a brief description of the color or icon representation in the Description field. d. Enter a number for the beginning of the range that the color or icon represents in the From field.

e. Enter a number for the end of the range that the color or icon represents in the To field. f. Repeat these steps to define any other ranges of numbers to color-code or represent by an icon. 9. Click Save. 10. In the Formula field, click [Build Weighted Average Formula] to add a weighted average formula. 11. Complete the following fields:
- Attribute Specifies the attribute that you want to give consideration in the weighted average calculation.
- Weighting Specifies the value to multiply by the value of the attribute you selected to compute the weighted
average for a row. The product adds the weighted values from all rows and computes the average. The entries that you make in the Weighting column prioritize the attribute over other attributes when calculating the weighted average. If you leave the Weighting column empty, an ordinary arithmetic average is computed. Example: weighted ave=[(Risk * 4) + (Customer Satisfaction * 2) + (Alignment * 1)] /3 12. To add weights to additional attributes, click New Row for each attribute. 13. To see if the formula for the weighted average works as expected, click Recalculate. 14. Save your changes. The page displays the formula results in the Test section.

#### Single-Value Lookup Attributes

Create a single-value lookup attribute to display a drop-down list. Users can select only one value. For example, the Status attribute on a project contains the values Approved, Not Approved, and Rejected.
A single-value lookup attribute can include the following source types:
- Static List. Provides a list of values that do not change (for example, action item status). If you select a static list lookup, you can set up a display mapping to associate a value with a description and a color or icon. These colors or icons can be used in many places throughout the product, such as in stoplight icons, filters, progress bars, Gantt charts, and chart backgrounds.
- Dynamic Query. Provides a list of values that are dynamic based on the NSQL query; for example, a list of active and locked resources.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to Lookup. 7. In the Lookup field, specify the static list or dynamic query lookup that displays a list of options that the user can select. 8. Complete any of the remaining fields and configure optional display mappings (icons or colors).
> [!NOTE]
> You cannot set up a display mapping for a dynamic query.

9. Save your changes.

#### Multi-Value Lookup Attributes

Create a multi-value lookup attribute to display a drop-down list or a browse icon. Users can select one or more items. On a properties page, the multi-value lookup attribute displays as a multiple select browse field. In a filter, the attribute can display as a drop-down list, select box, or a multiple select browse field.
Multi-value lookup attributes are frequently used in filters. For example, the Approvers field on a project where you assign a list of resources as approvers for the project is a multi-value lookup attribute.


> [!NOTE]
> You cannot use multi-value lookup attributes in display mappings.

**Follow these steps:**
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to Multi-Valued Lookup. 7. Save your changes.

#### Parameterized Lookups

Create a parameterized lookup to map values between NSQL query parameters and the appropriate object attributes. This construct restricts the available values in one field that is based on the selection in another field. For example, the user selects a region from a list of global markets. In a City field, the list of cities is dynamically constrained to include only cities in that market region. Another example of a parameterized lookup is the Location OBS. It is parameterized to show values that are based on the Department OBS. Another example is the PMO attribute Project Type which is dependent on Project Category.
A data type for this type of lookup construct is not available. Instead, you can create one static lookup and a second, dynamic NSQL lookup that refers to the first. The attribute refers to a data type of lookup. The Parameter Mapping section automatically appears on the lookup definition if the NSQL lookup definition contains the parameterized lookup construct.
In this example procedure, you want to track assets by city in the global markets where you do business. Use the Asset object in Studio and create the market and city data. Add a parameterized lookup on the Asset object. When a user selects a market, the list of available cities is reduced to only the cities in that region.
You configure your parameterized lookup with data from static lookups and object instance data and establish a relationship between two attributes in a single record.
Follow these steps:
1. Open Administration, and from Data Administration, click Lookups. 2. Click New. Create a static lookup for a list of global markets. Click Save and Continue. 3. Select LOOKUP_CODE as the Hidden Key. 4. Set the Display Attribute to NAME. 5. Click Save and Continue. 6. On the Values tab, click New and enter each global market in the Lookup Value Name field. For example, Europe,
Africa, Asia, North America, South America, and Latin America.
NOTE You can create a user-defined object for global markets and then use object instances instead. Use this option to add more attributes to the market object or if you want to allow users to add them. 7. Open Administration, and from Studio, click Objects. 8. Create a custom object for City. Update the properties and list views to add this new attribute for data entry. 9. Add the security access rights to users for creating and maintaining the City instance data. 10. Click the Attributes tab and click New. Create an attribute that is named cities_by_market in the City object using the static global market lookup. a. Set the Data Type field to Lookup. b. In the Lookup field, select the lookup that you created in the first step. c. Click Save and Return. 11. Open Administration, and from Data Administration, click Lookups.


12. Create a dynamic query lookup to use in an attribute on the asset object for selecting a city that is based on the market. a. Set the Lookup Name field to Parameterized City Lookup by Market. b. Set the ID field to City_Param_Lookup. c. Click the Query tab. Set the definition of this dynamic query to a parameterized lookup NSQL construct such as the following example:
SELECT DISTINCT @SELECT:CITY.ID:CITY_ID@, @SELECT:CITY.NAME:CITY_NAME@ FROM odf_ca_cities CITY WHERE @FILTER@ AND (@WHERE:PARAM:USER_DEF:STRING:CITY_CONSTRAIN@ = CITY.cities_by_market)
d. Click the Parent Window tab and set the Display Attribute field to city_name. 13. Open Administration, and from Studio, click Objects. 14. Open the asset object.
a. Create an attribute for Global Market (asset_market). The asset market attribute uses the global markets lookup that you created in an earlier step.
b. Create an attribute for City (asset_city). The asset city attribute uses Parameterized City Lookup by Market and is constrained by the asset_market attribute.
c. Update the asset object properties and list views to add these two new attributes for data entry. 15. Open the Home menu and under Custom Objects click City List. Create the detailed City instance records.
a. Enter a name and identifier for each city. b. Select the global market for each city. 16. Log out as administrator. Log in as a user with access to create and edit asset investments. 17. Open Home and under Portfolio Management, click Assets. 18. Create or update existing asset records. Select a Global Market value and then select a City in that region. The City lookup value list is constrained by the Global Market attribute.

#### Money Attributes

Create a money attribute that lets users enter a currency value in a field. For example, the Planned Cost field for a project allows users to enter a planned cost amount in dollars. The application associates money attributes with a currency code so that you can convert the value to another unit of currency.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to Money. 7. In the Currency Code Location field, specify whether the attribute has its own currency code field. Select the default
currency code in the Default Currency Code field. 8. In the Validation Range field, define the range of values that is permitted for the attribute. Enter the lowest value in the
first box and the highest value in the second box. 9. Complete any of the remaining fields and configure optional display mappings (icons or colors). 10. Save your changes.

Number Attributes Create a number attribute that lets users enter a numeric value in a field. For example, the Priority field lets users prioritize a project using a numeric value where a higher number indicates a higher priority. Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to Number. 7. To constrain the values that are permitted, enter the lowest value in the first box and the highest value in the second
box of the Validation Range fields. 8. Complete any of the remaining fields and configure optional display mappings (icons or colors). 9. Save your changes.
String Attributes Create a string attribute to permit users to enter text. For example, the Description field allows users to describe the purpose of a project or include any additional details. Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to String. If you need more than 2,000 characters, set the Data Type field to Large String.
NOTE You cannot display the large string attributes in list filter views. You cannot sort large string attributes. 7. Complete any of the remaining fields. 8. Save your changes.
Large String
- Rich Text attributes Create a Large String
- Rich Text attribute to permit users to enter large text in rich text format. Follow these steps: 1. From Classic PPM, go to Administration. 2. Go to Studio and click Objects. 3. Click the name of the object. 4. Click Attributes. 5. Click New. 6. Enter an attribute name and a unique ID. 7. Set the Data Type field to Large String
- Rich Text. 8. Complete the remaining fields. 9. Save your changes.

#### Auto-Numbered Attributes

You can use the auto-numbering feature to automatically name and number object attributes that have a data type of string. For example, you can auto-number the string attribute Project ID. When you create a new project, the Project ID field is automatically populated with a unique sequential identifier. You can also name and number attributes for subobjects and their children.
You can use auto-numbering with or without partitions. If you do not use a partition, the System Partition is the default. When an object is associated with a partition model, you can create different auto-numbering schemes in each partition for attributes that are associated with different aspects of your business.
For example, create a partition model that has partitions that are named Sales, Marketing, and Engineering. Configure an auto-numbering scheme that assigns a unique number for attributes that are created in the partition such as SAL-00001, MKT-00001, or ENG-00001. When a user creates an object instance, designated attributes are automatically numbered using the auto-numbering scheme that is created for the appropriate partition.
The following questions and answers explain the rules that apply when using auto-numbering with partitions:
- What happens if an attribute is set to auto-numbered but there is no auto-numbering scheme defined? When
the application creates an object instance, it applies the auto-numbering scheme of the closest ancestor partition.
- What happens if a deactivated partition has active descendant partitions that have no auto-numbering scheme
in place? When descendant partitions of the application create an object instance, the application applies the closest ancestor auto-numbering scheme.
- What happens if an attribute belongs to a subobject that has multiple master objects (potentially in different partition models) and the attribute is created in the context of a specific master object? The auto-numbering schemes are only applied when an instance of the subobject is created under an instance of the specific master object.

#### Configure an Auto-Numbering Scheme

You can configure an auto-numbering scheme for a string attribute that consists of one or more segments. For example, the scheme for a project number such as PROJ001 consists of two segments. One segment is for the prefix PROJ. A second segment is for the three-digit number 001.
> [!WARNING]
> If you use auto-numbering with two or more object types, verify that generated numbers for different object types are not the same. The application does not verify that numbers are unique for different types of objects. You can avoid duplications by using an alphanumeric numbering scheme so that object types have a unique prefix such as PRJ for project followed by a numeric counter.
Follow these steps: 1. Verify that you have the Object Administration or the Attribute Create access right. 2. Open an object and click the Attributes tab. 3. Click the name of a string data type attribute. 4. Click the Auto-numbering tab. 5. In the Schemes section, click the New link. To edit an existing scheme, click the Edit link. 6. In the Scheme Name field, enter a 30-character descriptive title for this scheme. 7. Click Save. The scheme is created and a section appears for adding segments. The numeric counter is a default
segment. 8. Click New to create another segment for the autonumbering scheme. 9. In the Type of Segment field, choose one of the following values:
- Text: Creates a segment that contains the same string of letters.
- Numeric Counter: Creates a segment that contains a starting number of varying lengths to be incremented.
- Alphanumeric Counter: Creates a segment that contains letters and numbers.
- Instance Creation Date: Creates a segment that is a time stamp for the instance being auto-numbered. For
example, an object that is created on September 29, 2018 is stamped 20180929.
- Parent Object Attribute Reference: (Subobject string attributes only) Creates a segment that has the value of a
unique attribute of the parent object. This segment is a constant that cannot be incremented. 10. Complete any of the following fields. The fields that appear depend on the segment type you select.
- Auto-extended Specifies the counted length is to be extended when the limit of the counter length is reached.
- Counter Length Specifies the number of digits to use for the segment. The maximum is 22 digits.
- Counter Starting Number Defines the starting number for a numeric or alphanumeric segment.
- Referenced Attribute Specifies the attribute to be referenced in the parent object. The value of the referenced
attribute is included in the numbering segment. For example, if the referenced attribute is Name and the referenced object is Project, when an instance of the specific sub-object attribute (for example, a new task) is created in the application, the name of the Project (up to 8 characters) is part of the numbering scheme. For example, NewNet00000001.
- Referenced Object Specifies the parent object from which the referenced attribute is selected. By selecting a parent object, you set the attributes that appear for selection in the Referenced Attribute lookup.
- Segment Max Length Specifies the length that you want the segment to be. The maximum length is 30 characters. The replacement value (the referenced attribute) is truncated if it is longer than the length selected.
- Value Defines the text value to be included in the segment. For example, PRJ. 11. Click Save and Return. 12. Create as many segments as necessary. 13. Preview the next assignment of the scheme in the Next Number field. 14. (Optional) Click Reorder to arrange the segments in the appropriate order. 15. Click Save and Return. 16. In the Schemes section, in the Partition field, select a partition for the numbering scheme.
NOTE When an attribute object is not associated with a partition, only the system partition is available. 17. To activate a scheme, select the Auto-numbered check box in the General section. When active, this setting applies IDs as you have configured them and users cannot enter their own values. 18. To deactivate a scheme, clear the Auto-numbered check box. 19. Click Save and Return. 20. (Optional) Verify the auto-numbering segments in the scheme are working as required. Confirm that each time a user creates an instance of an object, the object ID automatically displays the next value in your active auto-numbering scheme.

#### Time-Varying Attributes

To show a value for a specific calendar or fiscal time period, use a time-scaled value field. A time-scaled value is based on a time-varying attribute. Users can enter values for the attribute. You can create two kinds of time-varying attributes:
- Calendar: This time-varying attribute is tied to a resource calendar that represents work or availability. The calendar displays time away, vacation time, and holiday exceptions. The calendar and its exceptions determine the values of the time-varying attribute. You can design calendar time-scaled values on list column views or grid portlets.
- Fiscal: This time-varying attribute is tied to a fiscal time period and is typically associated with changing costs or values in units of currency. The fiscal time-periods are associated with an instance of an entity. Fiscal time periods have no relationship to a standard calendar. A fiscal time-scaled value can appear only on the list view of a subobject.

> [!WARNING]
> When you create a custom time-varying attribute, the daily time-slices span across the entire calendar. Clarity does not honor the non-working days specified in the calendar because every customer has the flexibility to design custom time-varying attributes based on their requirements.
A time-slice job calculates the value that appears for each time period in the virtual column on a list page or portlet.
A custom fiscal time-scaled value is always created on a subobject. When the time-scaled value is created, attributes are automatically created and populated on the master object. (Or, these attributes could already exist.) These attributes control the span of time-scaled values. The attribute values must be modified with the correct information about the master object for fiscal time-scaled values to work.
The attributes that get populated on the master object include:
- Entity Code: This value indicates the associated entity for the fiscal period. This value is automatically populated when an instance of the master object is associated with a Department OBS unit.
- Fiscal Period Type: This value defines the time period duration such as monthly, quarterly, or annually.
- Fiscal Period Start Date: This value defines the beginning of the time-scaled value range. Users cannot scroll to
periods before this date.
- Fiscal Period End Date: This value defines the end of the time-scaled value range. Users cannot scroll to periods
after this date.
NOTE If you do not provide a start or end date, the time-scaled values are not limited. Users can scroll in the past or future except where fiscal time periods do not exist.
Example 1: Fiscal Time-Scaled Values in the Subobject: The master object Cost Plan has a subobject named Cost Plan Detail. A designer creates a time-scaled value field and then places the field on the list column view of the subobject Cost Plan Detail. The master object attributes that are required for the time-scaled value appear on the Cost Plan properties view. When an instance of the Cost Plan object is created, the period type value is quarterly and the period start date is defined as September 1, 2019. When the user opens the Cost Plan Detail for the new instance for the first time, the timescale period shows:
- a start date of September 1, 2019
- quarterly periods.
Example 2: Custom Fiscal Time-varying Attribute: A financial manager wants to use a custom fiscal time-varying attribute to enter financial information for a project cost plan. The manager creates a cost plan for the project for the year 2015. The Development group indicates that the total cost for this project for the first three months of the year is $60,000. The financial manager uses two custom fiscal time-varying attributes, Committed and Actual in the Cost Details column. The manager enters the following monthly breakdown of the total cost:
- The amount that was originally assigned (committed)
- The amount that was spent (actual)
This information allows the finance manager to monitor the variance between actual costs and committed costs.
Example 3: Multiple Time-Scaled Values: You can display multiple time-scaled values in the same list column view. The attributes are stacked on the page with the information for each time-scaled value appearing in the same virtual column. The data can appear in units of currency, as numbers, or as percentages. If you export to Microsoft Excel, each time-varying value that is stacked in a virtual column appears in its own column. For example, you have time slices A, B, C, and D with three time-varying attributes that are configured in a virtual list view column. An export produces 12 spreadsheet columns: A1, A2, A3, B1, B2, B3, C1, C2, C3, D1, D2, and D3.

##### Create a Time-Varying Attribute

Time-varying attributes allow users to enter information that changes over time. For example, use a time-varying attribute to track resource allocation as a percentage over the lifecycle of a project task.

Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Open an object and click Attributes. 3. Click New. 4. Enter an attribute name, a unique ID, and a description. Use only alphanumeric and underscore (_) characters when
entering a unique ID for a time-varying attribute. Also, avoid SQL reserved words such as SELECT or STRING. 5. Set the Data Type field to Time-varying. After you save, you cannot change the data type. 6. (Optional) To associate this attribute with a particular partition, complete the following fields:
- Partition: Specifies the partition to associate with the attribute.
- Partition Association Mode: Specifies which partitions can include the attribute, in addition to the selected
partition. 7. Complete any of the remaining fields.
- Time-varying Data Units Specifies the unit that the time-scaled value represents, such as a number value, a monetary value, or a percentage. A fiscal time-scaled value that is created with a time-varying data unit set to Money has its currency code set to the system currency. When you create an instance of this fiscal time-scaled value, the currency code is set to the home currency of the associated financial entity.
- Time-varying Unit Conversion Specifies whether the time-varying data units are for each hour or for each second.
- Time-varying Date Constraints (Optional) This is a date validation constraint rule for entering amounts. When left
undefined, amounts can be entered in any time-varying period. Selecting stock or user-defined date fields from this object validates the date range of the amounts entered in the time-varying periods. Entering a total amount will clip the amounts to fall within the range of the date constraints. Changing the dates of the referenced date fields will not change the time-varying data. Removing or adding the date constraints on the attribute will not change the existing time-varying data. 8. This step applies to multi-currency systems. If you select Money as the time-varying data unit, to provide a currency code for the attribute, do one of the following:
- Select the Attribute has its Own Currency Code Field check box. Then select the default currency code.
- If the currency code is held in an existing attribute of the same object, select the Reference Another Attribute of this Object check box. Then in the Which Field field, select the attribute that contains the currency code. 9. Save your changes.
NOTE
Investment Parents and Investment Rollup objects do not support custom time-scaled value (TSV) attributes. For example, the investment hierarchy does not support custom TSVs. In Studio, the Investment (Project) Hierarchy Financial Rollup page does not display valid values for custom TSVs. The values appear as zero (0), instead of showing their correct data. The stock time-varying attributes (for example, Actuals for Labor Resources or ETC for Labor Resources) do display their correct values.
TIP
Two or more attributes could have the same name or label in the user interface but represent different data types. For example, in Release 15.6.1 the Assignment object shows Actual Cost as a Money data type and Actual Cost as a time-varying attribute for the actual cost curve data that appears in per-period metrics. Other examples include Actuals, ETC, and ETC Cost.

##### Create a Calendar Time-Scaled Value Field

As a developer in Studio, you can set up a calendar time-scaled value field in a list column view or a grid portlet.
Follow these steps:
1. Create the time-varying attribute that you want to associate with a time-scaled value.

2. Add Attributes to the Object Properties View. The time-varying attribute must appear in the properties view for the user to enter values for the attribute.
3. Create a Virtual Column for a Time-Scaled Value. 4. Set up a time slice request for each time-varying attribute. 5. Run or schedule the Time Slicing job. 6. Test a New Time-Scaled Value Field.
Create a Virtual Column for a Time-Scaled Value Create a virtual column and add the time-scaled value fields to the column for both the list column view and for a grid portlet. If you are configuring the list view for a subobject, you see additional fields not available for a master object. The fields allow you to select an attribute from the master object whose value sets the start time or the time scale for the subobject. Follow these steps: 1. Complete one of the following actions:
- For an object list view, open the object, click Views, and click Fields in the object's list view.
- For a grid portlet, open the portlet, open the List Column Section menu, and click Fields. 2. Click New. 3. Select Time Scaled Value and click Save and Continue. 4. In the General section, complete the following fields:
- Value Attributes: Specifies the time-scaled values that are to display in the virtual column. In the Available list box,
select the attributes you want to list in the column and use the arrow buttons to move the attributes to the Selected list box.
- Column Label: Defines the name of the virtual column in which the time-scaled value appears.
- Display Type: Specifies how the time-scaled value is to display, as a number, a column, or a bar chart.
- Secondary Value: Specifies the secondary value that you want to display in the virtual column. (Optional)
- Link: Specifies the page that appears when the user clicks the link.
- Open as Pop-up: Specifies whether the page opens as a pop-up. Select the check box to open the page as a popup.
- Allow Editing: Specifies whether a user can edit fields. Select the check box to allow editing.
- Show Legend Column: Indicates whether the field label appears next to the time-scaled value in the virtual column. Select the check box to display the field label.
- Show Column Label: Indicates whether the column label displays at the top of the virtual column. Select the check box to display the column label. 5. In the Time Scale section, complete the following fields:
- Start Date Indicates the start date for the time period for the virtual-scaled value.
NOTE The Other Date option appears only if you select a start date for a time-scaled value for a subobject. This field lets you select a field from the master object on which to base the start date. This option only appears when a subobject has time-scaled value attributes.
- Time Scale Specifies the length of time the time-scaled value covers. Values:
- Specific Time Scale. Specifies the period (length of time) for the time-scaled value.
- Other Time Scale. This option appears only if you select a time scale for a time-scaled value. Select a field from
the master object on which to base the time scale.
- Number of Time Periods: Defines the number of time periods to be reported in the virtual column.
- Time Period Offset: Defines the number of time periods you want to offset what displays from the start date. For
example, if you want to start the display two time periods from the indicated start date, enter 2.
- Show Group Row Header: Specifies a timescale to be displayed above the virtual column. Select the check box to
display a timescale and select the period type. 6. In the Display Options sections, select the appropriate settings for displaying the time-scaled value in Classic PPM. 7. Save your changes. 8. Continue to add the virtual column to the layout by completing one of the following actions:
- For a list column view, open the object, then open the Views menu and click Layout.
- For a grid portlet, open the portlet, then open the List Column Section menu and click Layout. The layout page appears. 9. In the Column Layout section, use the arrow buttons to move the name of the virtual column to the Selected Columns list box. 10. Set any other options on the page that apply. 11. Click Save. 12. Click Publish to replace personalized changes users have made to this view.
Test a New Time-Scaled Value Field
Test a new time-scaled value field after adding it to a list column view for an object.
Follow these steps:
1. Create an instance of the object that is associated with the time-scaled value. For example, if the time-scaled value is associated with the project object, create a project in Classic PPM.
2. Include the values in the new instance for the time-scaled value field you want to test. For example, if the time-scaled value field is Actual Cost, enter a value in the field.
3. View the list page or the grid portlet page and examine the virtual column for the time-scaled value.
Create a Fiscal Time-Scaled Value Field
You can create custom fiscal timescale values. Instead of operating on the standard annual calendar, fiscal time-scale values are based on the fiscal calendar. You can configure time-scale values that begin on a specific Start Date. These values are tied to fiscal time-periods and represent data that changes over time. For example, you can track the year-todate units and revenue of a project as this data changes over time. The fiscal time-periods are associated with a financial entity and have no relationship to a standard calendar.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click New and create a master object. 3. Verify that the master object is associated with a Department OBS and a financial entity:
a. Click Administration, and under Organization and Access, click OBS. b. Open a financial OBS (a Department OBS that is linked to an entity). c. Scroll to the bottom of the Associated Objects section and click Add. d. Select your master object and click Add. 4. Create a subobject for your master object.
NOTE You can only add a time-varying attribute to a subobject.

5. Complete the following tasks for the subobject: a. Create one or more time-varying fiscal attributes for the subobject. For example, create a number attribute for Units_Shipped and create a money attribute for Revenue. Use the same partition and partition association mode as the master object. b. Add the time-varying attribute to the subobject properties view. c. Create a virtual column for the time-scaled value and add the time-varying attributes to the column. d. Add the virtual column to the subobject list column view.
6. Add one or more attributes to the master object properties view.
The last step is not required for the Cost Plan and Benefit Plan objects because they already include the following attributes:
- Fiscal Period Type
- Fiscal Period Start Date
- Fiscal Period End Date When your users create an object instance, the values for these attributes determine the timescale for the fiscal timescaled values on the subobject. For the objects other than the Cost Plan or Benefit Plan, the addition of a time-varying attribute to the subobject also adds the required attributes. When you create a fiscal time-varying attribute on one of the subobjects, the application automatically adds the attributes for the object. In this step, add the three listed attributes to the object properties view.
Display Fiscal Time-Scaled Values After users enter data that extends over time, you can create portlets or reports that display the fiscal data by period. As a developer, use this procedure to identify the time-varying fiscal attributes. Fiscal time-scale attributes are not available to users so they cannot define time slices. An internal insta-slice request table stores the data for the Fiscal Period Type used in the configuration. The table stores the slice data as a daily amount. When you create a query to retrieve the full amount for the Fiscal Period, use the number of days to multiply the daily slice amount.
Follow these steps: 1. Locate the name of the slice table for the fiscal time-scale value attribute that you created on your subobject. 2. Enter the following NSQL code:
SELECT ID, REQUEST_NAME, TABLE_NAME FROM PRJ_BLB_SLICEREQUESTS WHERE REQUEST_NAME LIKE '<subobject>::<subobject_tsv_attribute_id>%'
3. Replace <subobject>::<subobject_tsv_attribute_id> with the name of your subobject::attribute designation. This query return 2 rows.
4. Locate the internal insta-slice request name.
<subobject>::<subobject_tsv_attribute_id>::segment
5. Locate the table name for the request. For example, the TABLE_NAME column shows:
ODF_SSL_5007002
6. Create a query similar to the following example to view the data using this table.
SELECT PRJ_OBJECT_ID subobject_pkid,
START_DATE, FINISH_DATE, ROUND((TRUNC(FINISH_DATE) - TRUNC(START_DATE)) * SLICE,2) CALC_SLICE FROM ODF_SSL_500702 WHERE PRJ_OBJECT_ID = 5002000

NOTE Replace the example insta-slice table name (ODF_SSL_500702) with the one that you created in your system. Replace the 5002000 with your SUBOBJECT_PKID. 7. The calculated slice (CALC_SLICE) values from your internal query match the values that a user sees for the subobject record in a portlet.
Display Multiple Time-Scaled Values in a List Column You can display multiple time-scaled values in the same list column view. The data for the attributes is stacked on the page, with the information for each time-scaled value appearing in the same virtual column. The data appears in units of currency, numbers, or percentages. If you export data to Microsoft Excel, each time-varying value that is stacked in a Classic PPM virtual column is given an Excel column of its own. For example, if you have time slices A, B, C, and D with 3 time-varying attributes configured in a virtual list view column, an export produces 12 Excel columns: A1, A2, A3, B1, B2, B3, C1, C2, C3, D1, D2, and D3.
Edit a Time-Scaled Value When you edit a time scaled value using Studio, the setting applies to all users. All users include users for all sessions subject to any partitioning of the object views. Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. 4. In the Category column, locate the Properties view, and click the [Fields] link in that row. 5. Click the Properties icon of the Time Scaled Value and edit the values. 6. Save the changes. You can also edit a time-scaled value using the Home menu. Two options are available in the Options menu on the portlet toolbar.
Edit a Time-Scaled Value: Configure Option When you edit a time scaled value using this option, the setting applies to all the sessions for only that user that are subject to any partitioning of the object views. Follow these steps: 1. Open Home, and from Resource Management, click Resources. 2. Click the name of a resource. 3. Click Allocations, Detail. 4. Open the Options menu that appears on the portlet toolbar, and click Configure. 5. Open the List Column Section menu, and click Fields. 6. Click the Properties icon of the Time Scaled Value and edit the values. 7. Save the changes.
Edit a Time-Scaled Value: Time-scaled Value Option When you edit a time-scaled value using this option, the setting applies to that user and only for that session, subject to any partitioning of the object views. This setting supersedes the values set using the previous method. Follow these steps: 1. Open Home, and from Resource Management, click Resources.


2. Click the name of a resource. 3. Click Allocations, Detail. 4. Open the Options menu that appears on the portlet toolbar, and click Time-scaled Value. 5. Edit the values and save the changes.


URL Link Attributes
Create a URL Link attribute to provide links to web pages or virtual attributes.
- A link attribute provides a link to a web page that is outside of the product.
- A virtual attribute references data attributes of items that exist outside of the Classic PPM database. Examples of
virtual attributes include progress bars, Gantt charts, or attributes that display the calculated results for other attributes.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to URL. 7. Complete any of the remaining fields. 8. Save your changes.

Virtual Attribute
Custom Virtual attributes can only be defined on sub-objects. The virtual attribute is a read-only attribute on the sub-object that is "linked" to a specific attribute on the master object.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the subobject (Example: Task). 3. Click Attributes. 4. Click New Virtual. 5. Select the Master Object (Example: Investment) and Data Type (Example: String) from the list. 6. Select Attribute(s) of Referenced Items (Example: A custom attribute that is created under project). 7. Click Add. 8. Enter Attribute Label and Attribute ID to define the label. 9. Click Finish. 10. Open the newly created virtual attribute. 11. Enter the API Attribute ID and click Save And Return.
NOTE API Alias for virtual attributes will work as the other customer attributes. This enables the virtual attribute for Clarity.

API Enable Custom Attributes to Display them in Clarity When you create a custom attribute, you must API enable the attribute to make it available in Clarity. This setting will also let you access the attribute through API calls.
Follow these steps: 1. Log in to Classic PPM.


2. Navigate to Administration, Studio, Objects. 3. Search for the object (such as Project) that has the custom attribute. 4. Open the object and navigate to the Attributes tab. 5. Search for the custom attribute and click to open. 6. Specify a unique ID in the API Attribute ID field. The value must begin with a lowercase letter and an underscore. For
example, p_uploadImage. TIP The API Attribute ID is the reference key for an attribute that appears in the result set of an API call. To identify your custom attributes and validate the uniqueness, we recommend that you prefix your API Attribute IDs with a consistent short string. Making your API Attribute IDs unique prevents conflicts during a future upgrade when new attributes are introduced. For example, ACME Corporation can assign the following unique API Attribute ID to its Compliance attribute: p_acmeCompliance. We also recommend that you use Camel Case notation to name your custom attributes.
7. Save the changes.
The attribute is enabled for API access and is also made available in Clarity. You can configure the attribute to be visible in the Board Layout, Grid layout, and Detail panel. To view the attribute in the Properties page, configure the blueprint of the object. For more information, see the Edit a Blueprint section.
Configure Display Mappings for Attributes
You can use a series of icons or colors to represent a value range for an attribute. Colors and icons appear in stoplight icons, filters, progress bars, Gantt charts, and graph backgrounds. You can create display mappings for the following attribute types: number, money, static lookup, and Boolean.
When you define ranges that are adjacent to one another, verify that the ranges do not overlap. For example, the following ranges are correctly defined to avoid number overlap: 0-100, 101-200, 201-300. You can define up to ten ranges in a mapping plus an optional Default Bucket for all values that do not fall into defined ranges.
Follow these steps:
1. Open your object attribute and navigate to the Display Mapping section. 2. In the Type field, select Color or Icon. 3. Select the first color or icon in the first range or Boolean value. 4. Enter a brief description of the color or icon representation in the Description field. 5. Enter a number for the beginning of the range that the color or icon represents in the From field. 6. Enter a number for the end of the range that the color or icon represents in the To field. 7. Repeat these steps to define any other ranges of numbers to color-code or represent by an icon.
NOTE Once you select a display-mapping type and begin defining a display mapping, you cannot switch displaymapping types. You can clear your existing mapping, click Save, and then define a new mapping.
Register Portfolio Investment Object Attributes
The required Portfolio Investment attributes are displayed by default. Register any other Portfolio Investment attributes (stock or custom) that you want to display in your portfolio investment pages and views. You can change the display setting for any attributes that you register, but you cannot change the display setting of the required attributes. When you save attribute registry changes, the Portfolio Investment object is updated to include the latest registered attributes.
NOTE When you change the attribute registry, run the Synchronize portfolio investments job. The job refreshes the investments in the portfolio pages with information from actual investments. For example, you remove Charge Code from the Selected Attributes in the attribute registry. This changes the portfolio pages after the next sync or refresh of the Portfolio Investment object from the actual investments.

The number of attributes that can be registered for a portfolio is limited to 700. The limit helps to ensure better performance when you work with a portfolio. A counter on the attribute registry indicates the current number of attributes that are registered for the Portfolio Investment object.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the Portfolio Investment object. 3. Click Attribute Registry. The attribute registry page appears. 4. Select the attributes from the Available Attributes list and move them to the Selected Attributes list. 5. Click Save. The attribute registry page refreshes to show the current number of attributes available for display in
portfolio investments.
Add Attributes to the Object Properties View
Add the attributes to the properties view of the new object so users can complete the following tasks from the object properties page:
- Create an initial instance of the object.
- Modify an instance of the object.
You can configure attribute visibility, location on the page, and layout.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. The list of views appears. 4. In the Category column, locate the Properties view and click the [Layout:Create] link from the Setup column in that
row. 5. In the property layout, select a section, and click the Properties and Layout icon next to the item. List boxes of
available and selected attributes appear. 6. In the Available list, select the attributes that you want to add and use the arrows to move the attributes into the correct
Selected list. 7. Click Save and Return. 8. Click Return. The list of views appears. 9. In the Category column, locate the Properties view and click the [Layout:Edit] link from the Setup column in that row. 10. Repeat these steps as often as required. 11. Save your changes.
Add Attributes to the Object List Filter View
Add attributes to the list filter view of the object so that users can complete the following tasks:
- Search for information that is based on object attributes.
- Use a filter to limit the information that they want to view. For example, users can filter the project team staff page to
view only unfilled roles.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. 4. In the Category column, locate the List Filter view and click the [Layout] link from the Setup column in that row. The list
filter layout page appears.

5. In the Available list, select the attributes that you want to add to the list filter, and use the arrows to move the attributes to the appropriate columns.
6. Complete the following fields in the Settings section:
- Section Title: Defines the text that appears at the top of the section for the filter.
- Default Filter State: Specifies whether the initial display of the filter is expanded or collapsed.
- Allow Power Filter: Specifies whether the filter provides advanced search features.
7. Save your changes.
Add Attributes to the Object List Column View Add attributes to the list column view of the object to define the sorting of the attributes that are displayed as columns on list pages. For example, you can sort the list of projects primarily by the Project Name attribute in ascending order.
You can add up to four attributes that sort a List Column view. The attributes can be user-defined, default, or both.
Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. The list of views appears. 4. Next to the List Column view, click the Layout link. The list column layout page appears. 5. Specify the primary sort column in the Column Sorting section by selecting an attribute in the First Field row. 6. To indicate the direction of the sort, select Ascending or Descending. 7. To indicate more sort columns, select attributes for the remaining fields in the Column Sorting section. 8. Save your changes.
Grant Access to the Object Configure the access rights of users, OBS units, or groups for the object.
Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Click the name of the object, click Access to this Object, and select one of the following options:
- Resource: Grants access to individual resources.
- Group: Grants access to defined groups of resources.
- OBS Unit: Grants access to defined OBS units containing resources. 3. Click Add. A list of access rights appears. 4. Select the check boxes next to the access rights you want to grant, and click Add and Continue. A list appears with a list of resources, groups, or OBS units. 5. Select the check boxes next to each resource, group, or OBS unit to which you want to grant access. 6. Click Add.
Edit the Default Custom Object Menu Link Edit the default menu link for the object so that users can access it under the Home (Application Menu) or Administration Menu. For example, rename the link and move it to the most appropriate section of the menu.
Follow these steps: 1. Open Administration, and from Studio, click Menu Manager. 2. Click the name of the menu you want to edit. Click Application Menu. The menu hierarchy appears. The application
displays all new custom object list entries under the Custom Objects section by default. 3. Scroll down and click your custom object list.

4. Edit the menu item properties:
- Link Name: Defines the label for the page link that appears in the menu.
- Page Name : Specifies the target destination page that appears when users click the link from the menu.
- Parent Menu Item: Specifies the source menu section for the new menu link.
5. Click Save and Return. 6. To update the menu click Home or Administration and then click Refresh.
Audit an Object
You can configure the application to audit and preserve a record of operations that are performed on an object. When an object is configured for auditing, instances of the object display an Audit Trail tab. Use the audit trail to perform any of the following tasks:
- Track operations: Select the operations and attributes that you want audited. Operations include inserts, deletes, and changes. For example, you might track changes for a specific risk named High Defect Count that you create and might add to a project. You can also configure auditing operations for a subobject like a task. Instance security is also enforced on the Audit Trail tab. The user must have the right to view the subobject or it is not visible on the Audit Trail tab for the master object.
- Track time varying attributes: Budgeting and resource planning use time varying attributes. You can configure these attributes to track the history of changes.
- View and Maintain a Global Audit Trail: As an administrator, you can view a log of all insert, delete, and change records across all objects. You can purge unneeded audit records by running the Purge Audit Trail job.
Follow these steps:
1. Open your object and click Audit Trail. 2. In the Attribute Audit section, select the attributes that you want to audit and move them to the Audited Attributes list. 3. In the Object Audit section, do the following:
a. Select the attributes that you want audited for insertions and move them to the Logged Attributes for Insert Operation list.
b. Select the attributes that you want audited for deletions and move them to the Logged Attributes for Delete Operation list.
4. In the Purge Audit Trail section, enter a number to indicate how many days a record for this object is to be kept before being purged when the Purge Audit Trail job is run. Leave the field blank to keep records indefinitely.
5. Save your changes.
Delete an Object
You can delete user-defined objects or attributes. You can delete any object that you create. When you delete an object, the database also deletes its views, tables, page sets, and any portlets that used the object through an object data provider. When you delete an attribute, the attribute is removed from the object view and the database. Any attributes that are derived from the deleted attribute are deleted. Calculated and formula attributes that use the attribute prompt a warning message.
You cannot delete the following object and attribute information:
- Objects or attributes in reports.
- References to the object or attribute in custom database code
- Object or attribute instances in NSQL queries.
Although audit trail records for the object are deleted, a record of the object or attribute deletion itself is stored in the Audit Trail log. Queries that use the database table that is created for the object are identified so that they can be removed manually. Queries that use the database table column that is created for the attribute are also identified so that they can be removed manually.

To delete an object that is created by another user, you must have the appropriate access rights to the object. You cannot delete stock objects and attributes.
WARNING As a precaution, remove any use of the object or attribute in a query, portlet, or calculation before you delete. Deleting an object that is used to provide information to other parts of Classic PPM can produce unintended results. The same is true if you delete an attribute that is used by a query or is included in a calculation. Once the deletion occurs, the only way to retrieve the data is through a database backup restoration.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Select the check box next to an object and click Delete. Or, open the object and click the Attributes tab. In the list of
attributes, select the check box for an attribute and click Delete. The confirmation page appears listing the dependent items for the object that will also be deleted. 3. Review the list of associated items and verify that none have dependencies such as portlets, queries, or other attributes that use the attribute you are deleting. 4. Complete one of the following actions:
- If you find dependencies, click No to exit the page, then remove the dependencies and repeat the procedure to
delete the object or attribute.
- If no dependencies are listed, click Yes to delete the object or attribute.
Update Translation Strings for Custom Objects and Attributes
When you update the translated text string for a custom object or attribute, you can push the new captions to instances of those objects and attributes in your views. You cannot change the names of stock objects.
1. Create a custom object. 2. Create one or more custom attributes. 3. Create and configure the object views. For example, you decide to put the custom object in a list view. 4. On the custom object or attribute properties page, click Translate. Enter the translation text and click Save and Return. 5. Click Push Object Captions for objects and Push Captions to Views for attributes. The new translated strings
appear in all instances of those custom objects and attributes.
Clarity Studio Partitions
To create different views of the same objects for different users, you can use partitions. Your users are likely not using every field on every page in the application. You can simplify the user interface by defining what can be viewed in a partition. You can give a user or a group of users access to one or more partitions. You can set up partitions by department, geography, industry, division, legal structure, or any other method that your enterprise requires.
This explanation of partitions assumes the items that you want to include in the partition (for example, objects or attributes) exist. This explanation does not explain how to create items to include in the partitions.
NOTE
Partitions are an optional way to manage and extend the presentation of information. They are not required as part of the product setup.
A partition model is the top node (parent) of a partition hierarchy. All partition models belong to the System partition, the default product partition. You can create a partition model to fit any structure that your enterprise needs. You can add as many partitions as necessary to a partition model. You can also add partitions to partitions so that you can create a multilevel hierarchy if necessary. Each partition can contain its own version of information that is specific for its environment.
Example: A Partition Model

The following image shows a simple partition model. An administrator creates partition A for global company operations. Partition A has child partitions for regions in the USA (B) and Europe (C). The European partition (C) has two child partitions for offices in London (D) and Paris (E). The partitions contain project object attributes that are specific to those office locations. The administrator adds custom attributes to the project object and assigns them only to the appropriate partition. The functionality and other aspects of the project object are shared across all users with the appropriate access rights. However, specific view settings are available only to users who are assigned access to those partitions.
> [!INFO]
> Figure 40: Image showing a simple partition model

The following table shows how you can customize the content items in each partition.

Content Items
Attributes Processes Lookups Portlets UI Theme Views Links

A: Global

B: USA

C: Europe

D: London

E: Paris
- Review Partition Prerequisites
- Create a Partition Model and Add Partitions
- Associate Objects with a Partition
- Include Attributes in a Partition
- Modify Views for a Partition
- Include Object Links in a Partition
- Define Static Lookup Values for a Partition
- Select a UI Theme for a Partition
- Test the Partitions
- Assign User Access to Partitions


Review Partition Prerequisites
Review the applicable prerequisites in this list:
- Enable the following access rights:
- Administration - Studio
- Administration - Partition Models
- Identify the number of partitions needed.
- Identify the hierarchical structure of the partitions.
- Determine what to include in each partition.
- Identify the users for each partition. Users can be assigned to only one partition. This single partition assignment
means that they do not have to select a partition. A user who is a member of more than one partition must select a default partition in their account settings so that the application will render views and data properly.
- Consider the following rules when planning your partitions:
- You can set up multiple partition models.
- An object can be assigned to only one partition model at a time.
- When an object is assigned to a partition model, default associations apply. For example, attributes, views, and links
are visible to all partitions in the partition model.
- When you include a partition in a partition model, its location in the hierarchy is fixed. You cannot move the partition.
- You cannot delete a partition model; however, you can deactivate it.
- A child partition can inherit what can be viewed in its parent, depending on the association mode selected. If the
child partition has been modified, changes to the parent partition are not applied to the child partition.
- A user who is not a member of any partition sees the default System partition views.
- A user with Studio access rights can be a member of more than one partition in a partition model. However, when
the user creates an object, the user selects the partition to use. For example, a user can be a member of two partitions. The user selects one partition to use when creating a project.
- You can export partition models and other items that are created during partitioning. Use the XML Open Gateway (XOG). When you export a partition model, only the partition model and its partitions are exported. Any objects or other settings that are associated with the partition are not exported.
NOTE You do not need to restart the product to enable partitioning; all partitioning configuration changes are immediately available.
Create a Partition Model and Add Partitions
Create a partition model and add a partition for each different presentation of the user interface your enterprise requires.


Follow these steps:
1. Click Administration, Studio, Partition Models. 2. Click New and specify the required information. 3. Click Save and Continue.The Partitions tab is activated. You can add partitions to the new partition model. 4. Click New.
NOTE To add multiple partitions to the new partition model simultaneously, click Quick Create. 5. Enter the information for the new partition.
- Parent Partition Specifies the position of the new partition in the hierarchy by identifying the parent partition.
- UI Themes Specifies the color theme for the partition user interface. 6. Save your changes.
Associate Objects with a Partition
The Standard partition contains default objects that are associated with all partitions through inheritance. This procedure explains how to associate a custom object with a partition. You do not have to be a member of a partition to perform this task. An object can be associated with only one partition model.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of an object.The properties page appears. 3. Select a partition model. 4. Save your changes.
Include Attributes in a Partition
Create attributes to collect specific information. For example, the London office of an enterprise has different project requirements than the Paris office. The administrator creates attributes for the project object that are specific to the London office and includes them in the London partition. Only the users who are included in the London partition see the attributes.
You can change the partition assignment or partition mode of an attribute at any time. Carefully consider the impact that changes can have on items that reference an attribute. For example, a grid portlet using a user-defined date attribute for Gantt chart columns does not display if the required date attribute becomes absent. A process instance can fail if it can no longer evaluate or set an attribute.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object whose attribute you want to add to a partition. 3. Click Attributes to display the object attributes. 4. Click the attribute that you want to assign to a partition. 5. Complete the following fields:
- Partition Specifies the partition to associate with the attribute.
- Partition Association Mode Specifies which partitions can include the attribute, in addition to the selected
partition. 6. Save your changes.
Modify Views for a Partition
Views determine how information displays in the product for a specific object. You can determine the attributes that display for the object and the arrangement of attributes on the page. Each object has the following default views:
- Properties: Lets a user enter information for an object instance. For example, the properties view for the project object lets a user enter information for a specific project.
- List Column: Displays the instances of an object in rows and columns.
- List Filter: Lets a user search for information about the list column page.
If a partition does not have views for an object, the partition inherits the object views of the nearest ancestor partition. If no ancestor partitions have views for the object, the partition uses the System partition views.
Best Practice: Define partitioned views for objects at the top of the partition model first. For example, if you are using a geographical partition model with World at the top and United States and Europe as children partitions, define the World views first.
Follow these steps:
1. Click Administration, Studio, Objects. 2. Click the name of the object whose views you want to modify for a partition. 3. In the object properties, verify that a partition model is assigned to the object.If a partition model is not assigned,
assign the correct partition model to the object. 4. Click Views.The list of views for the object appears. 5. In the Partition field above the list, select the partition to which the view modifications apply. 6. Use the view links to modify the layout of the object for the selected partition.
Include Object Links in a Partition
Include object links in a partition to provide shortcuts to subpages of the object page or to external web pages.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object whose link you want to add to a partition. 3. Click Linking. 4. Click the link that you want to assign to a partition. 5. Complete the following fields:
- Partition: Specifies the partition to be associated with the object link.
- Partition Association Mode: Specifies which partitions can include the object link other than the selected partition. 6. Save your changes.
Define Static Lookup Values for a Partition
You can partition static lookup values. Users of a partitioned lookup see different values in the lookup, depending on the partition to which an object instance belongs. Partitioned lookups allow you to enforce standard options throughout an entire branch of a partition model. You can also add lookup values to meet the unique requirements of a business unit partition.
You can add partitioned values to default static lookups or to user-defined static lookups. If an object instance is not partitioned, the lookup shows only values for the System partition. You can assign a lookup to a partition when you create it, or you can modify an existing lookup and then assign it to a partition.
Follow these steps:
1. Open Administration, and from Data Administration, click Lookups. 2. Click a static lookup. 3. Click Values to see the values that are assigned to the lookup. 4. Click the name of the value that you want to assign to a partition. 5. Complete the following fields:
- Partition Defines the partition for a lookup value.
- Partition Association Mode Specifies which partitions can include the lookup value other than the selected
partition. 6. Save your changes.
Select a UI Theme for a Partition A UI theme varies the look of the user interface. Default UI themes allow you to change the user interface colors, login information, branding, and other visual elements. Any custom UI themes can apply changes to the logo, the application name, tabs, buttons, icons, and other features. When creating a partition, you can select a UI theme or you can accept the default theme. This procedure explains how to select a UI theme after you create a partition. Follow these steps: 1. Open Administration, and from Studio, click Partition Models. 2. Click the name of the partition model. 3. Click Partitions. 4. Click the name of the partition for which you want to set the UI theme. 5. Select a UI theme. 6. Save your changes.
Test the Partitions When a partition is complete, test it in the product user interface. Testing verifies that all of the information that you want presented in the partitions is available. Follow these steps: 1. Create a test user with the appropriate access rights and assign the user to the partition. 2. Log out as a user with Studio access rights and log in to the product as the test user. 3. Verify that the modifications that you made to the partition are available. 4. Repeat this procedure for each partition.
Assign User Access to Partitions Access rights determine what information users can see and the functions they can perform. The administrator can grant access rights to users (resources), groups, OBS units, or globally to all users. Partitioning affects what objects are exposed to users. Therefore, partitioning and access rights work together. If a user has access rights to an instance of a partitioned object, the user can see partitioned views of the instance. The user can see the instance even if the user is not a member of the partition to which the object instance belongs. Partitioning affects user ability to do the following tasks:
- Create partitioned attributes.
- Change the layout and appearance of attributes for partitioned objects.
- Assign an object instance to a partition.
- Select a default partition.
- Switch partition views.
- See and personalize partitioned List Column and List Filter views.
- Create or see partitioned values for lookups.

Follow these steps:
1. Click Administration, Studio, Partition Models. 2. Click the name of a partition model. 3. Click Partitions. 4. (Optional) Click the + icon next to a partition to see child partitions. 5. In the row that contains the partition you want, click the Properties icon. 6. To assign an individual user (resource), a group, or an OBS unit access to the partition, complete the following steps:
a. Open the Partition Members menu and click one of the following menu options: Resources, Groups, or OBS Units. b. Click Add. c. Select the appropriate check boxes and click Add.If you have more selections than appear on a single selection
page, use Add and Select More. 7. After you add all selections, click Return.You have completed the configuration of partitions.
Clarity Studio Object Views
Configure the default views in Studio to determine how object information appears on a page. The following default views appear for any object:
- Properties View: This view allows users to enter information about an object instance. The properties view controls the information that you see when you create an object instance or when you edit an existing instance.
- List View: This view displays information about object instances in rows and columns.
- Filter View: This view appears as a section at the top of a list and allows users to search for information.
- Example: Track Project Release Information in a Retrospective
- Object View Prerequisites
- Configure the Properties View
- Configure the List View
- Configure the Filter View
- Verify the Views for Custom Objects
- (Optional) Apply Changes to Object Views
Example: Track Project Release Information in a Retrospective
Project Managers want to provide a retrospective report to upper management at the end of a project release cycle. As an administrator or content developer, create a custom object that is named Retrospective to allow project managers to capture the information for their projects. When project managers create an instance of a retrospective, they enter the following information in the fields that the Retrospective object provides:
- Project Name
- Project Start Date and End Date
- Project Manager
- Team Members
- What Went Well
- Areas for Improvement
Upper management wants to track the length of the release cycle in the retrospective. To meet this objective, the system administrator configures the properties view for the Retrospective object to include the following new attributes:
- Release Start Date
- Release End Date

Object View Prerequisites
Review and complete the applicable prerequisites in this list:
- Enable the following access rights:
- Administration - Studio
- Object - Create Definition
- Object Administration
- Enable applicable global object rights to work with the object instances. For example, to work with the custom Retrospective object, you need the following access rights:
- Retrospective - Edit All
- Retrospective - Navigate
- Retrospective - View All
- Retrospective - XOG Access
- Create the attributes that you want to add to the view in advance.
Configure the Properties View
The properties view for an object defines the following information for object instances:
- Which attributes display on the create or edit pages.
- The order and location in which attributes display on the page.
Configure the properties view to change which attributes display and how they display. For example, you can configure the properties view of the Retrospective object to include release-specific attributes. Including the release attributes allows users to provide release information for a project when creating a retrospective.
To configure the properties view, complete one or more of the following tasks:
- Add Attributes to a View
- Add Sections to a View
- Add a Subpage to a View
Add Attributes to a View
Configure the Properties view to add attributes to the create or edit pages of an object instance. For example, add release-specific attributes to the properties view of the Retrospective object to allow users to provide the release start and end date information.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of an object. 3. Click Views. 4. In the Category column, locate the Properties view and click one of the following links from the Setup column in that
row:
- [Layout:Create] Adds attributes to the properties page a user uses to create an instance initially for the object.
- [Layout:Edit]. Adds attributes to the properties page a user uses to change the created instance of the object. 5. In the property layout, select the section to which you want to add the attribute, and click the Properties and Layout icon next to the item. 6. In the Available list, select the attributes that you want to add and move them into the Selected list box. You can move fields to the left or right column. 7. Save your changes.

Static lookups that you configure with the Pull-Down display type can automatically change to Browse. This change in display type improves performance and usability. This automatic change in appearance only occurs when all of the following conditions exist:
- You develop an editable list view. This behavior does not occur on other types of views.
- Your list view contains a static lookup with the Display Type set to Pull-Down.
- Your lookup contains 20 original values.
- You add at least one additional lookup value. When the number of possible lookup values exceeds 20, the Pull-Down changes to a Browse type.
The display type for OBS, dynamic, and dependent lookups on editable list views is always Browse. If you add a lookup attribute to a properties view, we recommend the Pull-Down display type for 20 or fewer lookup values. When the number of potential lookup values exceeds 20, we recommend the Browse display type.
You can also manually change the display type.
Follow these steps: 1. On the Views tab, in the General row, click [Fields]. 2. Click the Properties icon for the lookup attribute. 3. In the Display Type field, select Pull-Down or Browse. 4. Click Save and Return.
Add Sections to a View Configure the Properties view to add a section that lets you group certain attributes that appear on a page in meaningful ways. For example, all the organizational breakdown structure fields (Department, Location, and so on) can appear in a separate OBS section on the project properties page.
Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. 4. In the Category column, locate the Properties view and click one of the following links from the Setup column in that
row:
- [Layout:Create]. Adds sections to the properties page a user uses to create an instance initially for the object.
- [Layout:Edit]. Adds sections to the properties page a user uses to change the created instance of the object. 5. Open a subpage. 6. In the property layout, click Create Sections. 7. In the Section Names field, enter the name for each new section on the page. 8. Save your changes.
Add a Subpage to a View You can group specific information for the user on its own subpage. The Finance subpage for a project is an example. This page groups all financial information for a project. The general Properties page is generic and users go to the Finance page to view or define any financial data.
Verify that you have the following information to use the condition builder for a subpage:
- The rules for manually entering an expression in the condition builder.
- The operands that allow you to create a display condition.

Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of an object and then click Views. 3. In the Category column, locate the Properties view. Click the Layout:Edit link from the Setup column in that row. 4. In the property layout, click Create Subpages and complete the required information.
- Subpage Name: Defines the linked name of the subpage that appears in an object menu. Users can select the link to navigate to the subpage.
- Subpage ID: Defines the unique ID for the subpage. If you do not specify an ID, the system automatically assigns an ID to the subpage.
5. Click Save and Return. 6. (Optional) Add sections to a subpage to group attributes in meaningful ways.
a. In the Category column, locate the Properties view. Click the [Layout:Edit] link from the Setup column in that row. b. In the property layout, click the name of the subpage. c. Click Create Sections. Enter the name for up to five sections in the Section Names field. d. Click Save and Return. e. To add attributes to a section, complete the following steps:
- Click the Properties and Layout icon next to the section.
- In the Available list, select the attributes that you want to add to the section.
- Move the attributes to the appropriate column and place them in the proper order in the column. f. Save your changes. 7. Define the subpage properties to determine the layout, security, and view conditions. a. In the Category column, locate the Properties view. Click the Layout:Edit link from the Setup column in that row. b. In the property layout, click the Properties and Layout icon of the subpage. Complete the requested information.
- Sections: Defines the order in which the subpage sections appear on the subpage. Use the arrows to place the
sections in the order that you want them.
- Current Location: Displays the path for the current subpage in relation to the parent page. Example: /Edit
Project Properties/General
- Subpage Name: Defines the linked name of the subpage that appears in an object menu. Users can select the
link to navigate to the subpage.
- Linkable: Specifies whether you can link to the subpage from other pages.
- Secure: Specifies whether the subpage has associated access rights. If you secure the subpage, access rights
(view and edit) are generated for the subpage. Grant access rights to allow users to view or edit the subpage. c. (Optional) You can define a set of conditions that determines when the subpage appears. Click Define display
conditions in the Display Conditions section. d. Click Save and Return.
Configure the List View
The list view appears when you select an object link from the Home menu. The view lists all of the created instances of the object. For example, if you select Projects from the Home menu, the projects list page appears displaying all of the created project instances.
Configure the list view to change how the list page appears for your object instances. The following rules apply when adding a lookup attribute to the list view of an object:
- Static dependent list lookups that are configured as multivalue lookups are not supported in list views.
- Autosuggest or the ability to populate fields automatically is not supported for static dependent lists.

Configure Attributes and Options for a View
You can set up your list views in the following ways:
- Add attributes to display additional fields in the list. For example, configure the projects list view to include a Change Request field to display any associated change requests for any of the projects. You can also add virtual attributes (for example, progress bars, or Gantt charts) to display aggregations, comparisons, and variances.
- Define options for your lists such as how to display secondary values, filter results, and protect or display certain attributes. For example, if you have two fields that are named Cost and Baseline Cost, you can display both values in a cell. Select Baseline Cost as the secondary value. The Cost value displays as usual. When you move the cursor over a cell in the grid, the Baseline Cost also displays.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. 4. In the Category column, locate the desired List view and click the [Layout] link from the Setup column in that row.The
list column layout page appears. 5. In the Available Columns list, select the attributes that you want to add and move them to the Selected Columns list. 6. Click Save and Return.The views list page appears. 7. In the Category column, locate the desired List view and click the [Options] link from the Setup column in that row. 8. Complete the requested information. The following fields require explanation:
- Secondary Value Display Indicates the way that secondary values display in a grid cell. Values:
- Mouseover only. Displays no secondary value.
- Mouseover and redline text. Displays a secondary, comparison value when you place the cursor over a cell in a grid.
- Show Null Secondary Values. Displays the secondary value even when there is no number value to show.
- Allow Configuration: Specifies whether users can change the appearance of the page.
- Allow Label Configuration: Specifies whether users can change the page label. If you select the Allow
Configuration option and clear the Allow Label Configuration option, users cannot configure labels but they can configure other items.
- Attribute Value Protection: Indicates whether an attribute is protected or displayed. You can protect attributes from appearing using display conditions, secured subpages, or both. 9. Save your changes.
NOTE Protected views are not automatically updated when a new content package add-in is installed. You can upgrade individual views when new views are available in a new content add-in.
Attribute Value Protection (AVP)
The list view options for the display of object attributes include a setting called Attribute Value Protection (AVP). The default AVP setting applies to all new objects, subobjects, and grid portlets that display attributes. AVP settings include:
1. a. Use display conditions and secured subpages to protect attribute values on this list. b. Use only secured subpages to protect attribute values on this list. c. Display all attribute values on this list.
Since release 14.3, the default AVP setting for new customer deployments changed from (a) to (b). The change improves performance and simplifies maintenance.
For existing customer deployments after an upgrade from 14.2 or an older release to any newer release, the AVP setting before the upgrade is preserved after the upgrade.

You can secure object subpage views. Each secure subpage results in a sub-query to check security. If you place an attribute on a secure subpage, to be secured properly, the field must not be accessible on any other subpage layout. It is important to note that if the data is seen by a restricted user, it indicates the field is on another subpage that is accessible by the user.
On the Project List and other large object list views, heavy use of secure subpages combined with AVP settings to enforce secure subpages might reduce performance. As a best practice, minimize your use of the AVP option named Use display conditions and secured subpages to protect attribute values on this list.
Configure Sorting Attributes for a View
You can define up to four attributes (default, custom, or both) to sort a list view. For example, you can set up the project list page so that it sorts primarily by project name and then by project manager in alphabetical order.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. 4. In the Category column, locate the List view and click the [Layout] link from the Setup column in that row. 5. In the column layout, select an attribute to indicate the primary sort column in the First Field row of the Column Sorting
section. 6. Indicate the direction of the sort by selecting Ascending or Descending. 7. Indicate additional sort columns by selecting attributes for the remaining fields in the Column Sorting section. 8. Save your changes.
Configure the Appearance of a View
You can use the following types of graphics to represent data in a list view:
- Colors. Represents data ranges by different colors where each color defines an attribute and a range of data. For example, you can configure an attribute so that the numbers 1-5 display in red, while the numbers 6-10 display in green.
- Icons. Represents ranges of values using a standard set of icons including colored checkmarks, discussion bubble, attachment icon, lock icon, and many others.
- Bar or column charts. Displays numbers, formulas, or money attributes as bar or column charts. Column charts are like bar charts, except that they are oriented up-and-down instead of left-to-right. You can add a stacked bar to bar charts that start at the right end of the primary bar. For example, add a stacked bar in the Primary Column to show cost to the date and another in the Secondary Column to show cost remaining.
The following rules apply when displaying graphics in list views:
- Virtual columns containing Gantt charts, progress bars, time sliced values, or virtual images cannot display graphics.
- Only number data type attributes can display graphics.
- Any changes that you make to the appearance of an attribute apply only to the specific view. You can set different
appearance options for the same attribute in different views.
To display graphics in the list view, complete one or more of the following tasks:
- Display an Attribute as a Bar or Column Chart
- Display a Progress Bar
- Configure Display Mappings
- Display a Gantt Chart
- Display an Image Link

Display an Attribute as a Bar or Column Chart
To represent the values of an attribute visually, display an attribute as a bar or column chart. Number, formula, and money attributes work well with bar or column charts. For example, you can graphically display the Cost to Date attribute for a project instance.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of an object. 3. Click Views. 4. In the Category column, locate the List view and click the Fields link in that row. 5. Click the Properties icon in the row that contains the attribute you want to change. 6. Complete the requested information depending on the attribute data and display type. The following fields require
explanation:
- Display Type: Specifies the type of chart for the attribute. The list of display type values is based on the attribute
data type. For example, if the attribute data type is numeric, the display type values are Number, Percent, Calculated Percent, Column Graph, and Bar Graph.
- Secondary Value: Defines the attribute whose value displays as a secondary value when the user moves a cursor over the primary bar.
- Length Scaling: Defines the length scaling for the bars in the chart. Values:
- Relative to Same Column. Makes the bar length proportional to other bars in the same column. Select this option
when displaying horizontal bars. For example, the Budget Cost bar in a row for $500,000 shows twice as tall as the Budget Cost bar in a row for $250,000.
- Relative to Same Row. Makes the bar proportional to all other bars in the same row. Select this option when displaying vertical bars. For example, the Budget Cost bar with a value of $500,000 shows twice as tall as the Budget Benefit bar with a value of $250,000.
- Relative to Entire Table. Makes the bar proportional to all bars of the same type (vertical or horizontal) in the entire table. For example, in a grid with the Budget Cost column as a vertical bar, a row with a Budget Cost of $500,000 appears twice as tall as the Budget Cost of $250,000 in another row.
- No Scaling. Draws all bars to the maximum length. Select this option to create progress bars.For example, you can have an ETC (estimated time of completion) column with actuals as the threshold value. The part under the threshold shows how much work is already done. The part over the threshold shows how much work remains to be done. By looking at a column of these bar charts, you can quickly see how close each task is to being complete relative to the others.
- Color: Specifies the color for the primary bar.
- Threshold Line Attribute: Defines the attribute that holds the threshold value. In bar charts, a vertical line marks the threshold value.
- Over-threshold Color: Defines the color to represent values greater than the threshold value. Any portion of the primary bar that extends past the threshold is drawn in the over-threshold color. Any portion of the secondary bar that extends past the threshold is drawn in a darker shade of the same color.
- Link: Specifies the page to display when the user clicks the primary bar. To open the page in a pop-up window, select Open as Pop-up.
- Stacked Attribute: Specifies the attribute to represent as a stacked bar.
- Color: Specifies the color for the stacked bar.
- Secondary Value: Specifies the value to display when the user moves a cursor over the secondary bar.
- Link: Specifies the page to display when the user clicks the secondary bar. 7. Save your changes.

Display a Progress Bar Add a progress bar field to a list view to show progress over time. The new virtual field displays in the far right column of the list by default. You can move the virtual field to a different position in the list.
NOTE The option to display progress bars is not available for custom objects.
Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. The list of views appears. 4. In the Category column, locate the List view and click the [Fields] link in that row.The list column fields page appears. 5. Click New. 6. Click Progress Bar, and click Next. 7. Complete the requested information. The following fields require explanation:
- Current Stage Name: Specifies the field value to use for each stage in the progress bar. The value displays below the column label.
- Current Stage Number: Specifies the field value to use for the current stage in the progress bar.
- Number of Stages: Specifies the field value that defines the total number of stages in the progress bar.
- Show Label: Indicates whether the name of the current stage is displayed in the progress bar.
- Column Width: Defines the percentage of the row width that is allocated to the progress bar column. 8. Save your changes.
Configure Display Mappings To indicate a range of values using icons or colors, configure the display mappings for an attribute. You can visually represent specific information in the following ways to enable users to scan a list quickly:
- Select whether to place the graphic before or after the content.
- Set up an unlimited number of graphics for a list column.
NOTE You can only display attributes as graphics if their data type is number.
Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click the attribute for which you want to display a graphic. 5. Complete the following steps in the Display Mapping Section:
a. In the Type field, select Color or Icon. b. For each range beginning with the default bucket, select the appropriate color or icon. c. Enter a brief description about the color or icon in the Description field. d. Enter a number for the beginning of the range that the color or icon represents in the From field. e. Enter a number for the end of the range that the color or icon represents in the To field. 6. Repeat Step 5 to define any other ranges of numbers to color-code or represent by an icon. 7. Save your changes.You configured the display mapping for an attribute. You can now add the attribute to the list view and configure it to display a range of values using icons and colors.

Display a Gantt Chart
Use a Gantt chart to show duration and progress over time in a list view. The Gantt chart appears by default in the far right column of the list. You can move the chart to a different position in the list.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. 4. In the Category column, locate the List view and click the [Fields] link in that row. 5. Click New. 6. Select Gantt, and click Next. 7. Complete the requested information. The following fields require explanation:
- Start Date: Indicates the start date for the column spread.
- Time Scale: Specifies the time period by which data displays (for example, days or weeks).
- Number of Time Periods: Defines the number of time periods that display.
- Time Period Offset: Defines how to shift the beginning of the Gantt bar relative to the start date. Enter a positive or
negative number of time periods into the field. A negative number in relation to the start date takes you back in time (days) from the actual start date. A positive number takes you forward from the start date.
- Show Group Header Row: Indicates whether the timescale displays above the Gantt bar. If you select this option, select a timescale value.
- Item Name Attribute: Defines the type of information to display in the corresponding Gantt bar.
- Start Date Attribute: Defines the start date of the corresponding Gantt bar display.
- Finish Date Attribute: Defines the finish date of the corresponding Gantt bar display.
- Milestone Attribute: Defines the attribute to designate as a milestone. You can only assign a milestone attribute for a task.
- Progress Through Date Attribute: Defines the length of the black overlay line that shows how much work is complete. If you select the Progress Through Date Attribute, it overrides the Progress Percent Attribute.
- Progress Percent Attribute: Defines the percentage that is used to move the green progress line relative to the length of the taskbar to indicate the completed work. If you select a value for this field, it overrides the Progress Through Date Attribute selection.
- Label for Bar: Specifies the label text to display above each taskbar.
- Additional Information Attribute: Specifies the field used in the text note when you hover over a taskbar. For example, to display the assigned resources for a task, when the cursor is over a taskbar, complete the following steps:
- Select Assigned Resources from the Additional Information Attribute field.
- Select Additional Information in the Show Mouseover field.
- Show Mouseover: Specifies the information that you want to display in a text note when the mouse scrolls over an area of the Gantt chart.
- Show Dates on Primary Bar: Indicate the dates to show in the primary bar by selecting the desired dates in the Available section and adding the dates to the Selected section. Change the order of the dates in the list using the arrows in the Selected section.
- Secondary Bar: Specifies whether to display a second bar below the primary bar for comparison purposes. To show a secondary bar, specify the following information for the bar:
- The type of information to display.
- The start and finish dates for the bar.
- The progress through date attribute.
- The progress percent attribute. 8. Save your changes.

Display an Image Link
Add an image link that users can click to access another page. When you add an image link to a list view, the new virtual field displays in the far right column of the list by default. You can move the virtual field to a different position in the list. For example, you can add a resource icon next to each task name on the project tasks page. When a user clicks the resource icon, the task assignments page appears.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. 4. In the Category column, locate the List view and click the [Fields] link in that row. 5. Click New. 6. Select Image and click Next. 7. Complete the requested information. The following fields require explanation:
- Image: Specifies the image to use in the grid column.
- Link: Specifies the page to which you can navigate by clicking the image.
- Open as Pop-up: Indicates whether the target page of the image link appears as a pop-up.
- Disable Link Attribute: Disables the image link. If after creating the link you want to disable it, select this option. 8. Save your changes.
Add Aggregation Rows to a View
You can add aggregation rows to a list view for attributes that display monetary or numeric values. For example, you can add a Total Cost row to show the aggregated value for the Planned Cost column. The Total Cost row displays the total planned costs for all projects in a given fiscal year.
NOTE The following procedure assumes that numeric attributes exist and you have added them to the list view.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. The list of views appears. 4. In the Category column, locate the List view and click the [Aggregation] link from the Setup column in that row.The list
aggregation page appears. 5. Click Add. 6. Complete the requested information. The following fields require explanation:
- Label: Defines the name for the aggregation row.
- Show: Indicates whether to display the name of the aggregation row.
- Attribute: Defines the field value to use for aggregation.
- Function: Specifies the aggregation function to calculate values for a selected field (cell) in the row. For example,
Sum adds up all the values of the field for all instances on the view. 7. Save your changes.
Configure the Filter View
The filter view displays on list pages and helps users filter the items that are displayed in a list. You can specify whether the list filter is collapsed and shows only the filter field or expanded to show the filter options.
You can add a link that is named Build Power Filter in the filter views for users to build and save complex queries. For example, with a power filter, users can filter in the following ways:
- Use boolean operators
- Select the fields to search
- Specify whether to search on exact phrases or any word in a search phrase
Configure the filter view to add filtering attributes and link to the power filter builder.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. The list of views appears. 4. In the Category column, locate the Filter view and click the [Layout] link in that row.The layout page appears. 5. In the Available list, select the attributes that you want to add to the list filter and move them to the Selected list. 6. Complete the requested information. The following fields require explanation:
- Section Title: Defines the text that appears at the top of the section for the filter.
- Default Filter State: Specifies whether the initial display of the filter is expanded or collapsed.
- Allow Power Filter: Specifies whether the filter provides advanced search features. 7. Save your changes.
Verify the Views for Custom Objects
To display the views that you configured for your custom object, place the custom object in the Application menu. By default, all custom objects are added to the Custom Objects menu item in the Application menu hierarchy.
For example, if you create a Retrospective object to capture retrospective information for projects, the object is added to the Custom Objects menu item by default. To display the views that are associated with the Retrospective object, add this object to the Portfolio Management menu item. Project managers can then view and access the Retrospective object and views from the Portfolio Management menu item in the Home menu.
NOTE When you configure the views for an existing object, you do not have to complete the steps in this procedure.
Follow these steps:
1. Open Administration, and from Studio, click Menu Manager. 2. Click Application Menu in the list.The menu hierarchy appears. 3. Scroll to the Custom Objects menu item at the bottom of the page. 4. Select the custom object and click Move. 5. Select the new menu item where you want to place your custom object. 6. Click Save and Return. 7. Open Home, and click the custom object name from the appropriate menu item. For example, from Portfolio
Management, click Projects.
NOTE If you do not see your changes reflected in the menu, click Refresh. 8. Create object instances and verify the views that you configured. For example, click New to create a project instance and verify the project view configurations.After you display and verify all views for your custom object, the configuration of object views is complete.
NOTE Some fields are read-only when you create an object and accept a value when you edit the object. This condition applies to a non-project investment object such as an application, asset, incident, or idea. For example, when a user creates a new idea, the Planned Cost Start and the Planned Cost Finish fields are readonly. After the user saves the idea and then edits it, those fields are available for input.


(Optional) Apply Changes to Object Views
You can apply one or more of the following changes to object views:
- Edit an Attribute Label in a View
- Override an Attribute Default value in a View
- Edit Field Properties for Attributes
- Publish Changes to List and Filter Views
- Restore Defaults for Object Views
- Restore Defaults for Selected Views


Edit an Attribute Label in a View
The label for a field or column does not have to be the actual attribute name. You can change the label of a stock or userdefined attribute. The same attribute can also appear with a different label in different views.
Follow these steps:
1. With the object open, click Views. 2. Locate the view that you want to change in the Category column, and click Fields in the same row. A list of attributes
for the view appears. 3. In the list, locate the attribute whose label you want to change, and enter a new label. 4. Save your changes.

Override an Attribute Default Value in a View
You can define a default value for an attribute in the attribute properties for an object view. The default attribute value is used when users create an object instance. You can override the default attribute value with a different value in the the layout for the object properties view. If you are using partitions, you can configure a different default value for the same attribute for the different partitions.

Example
You want to override the default attribute value for Work Status from Requested to On Hold for all IT projects. The attribute is currently available but unused on the create project views. You configure the view to add the attribute. When you create new IT projects, the newly added Work Status attribute appears with the new default value of On Hold. Existing projects do not display the new Work Status attribute.
If you create a new project in a different partition (for example, All Organizations), the attribute is also not available. You can configure the Work Status attribute to display a default value (for example, Active) for projects that users create in the All Organization partition.
Follow these steps:
NOTE
If the attribute is already available in the object Create view and users can see it when creating object instances, you do not need to add it to a section layout. You can proceed to overriding the attribute default value.
1. In Studio, open the object (for example, Project) and click Attributes. 2. Note the default value for the attribute that you want to configure. For example, Work Status has a default value of
Requested. 3. Click Views. 4. Select a partition for the view. For example, if you select IT, all projects that you create in the IT partition display the
configuration. 5. Next to the Project Properties view, click Layout: Create.


6. Click the Properties and Layout icon for the section that you want to configure (for example, General). 7. Find the attribute in the Available list and add it to a selected list. Click Save and Return. 8. Click Return to return to the object views list. 9. Next to the Project Properties view, click Fields. 10. Find the desired attribute and click the properties icon. 11. In the Override Default field, browse and select a different default value for the attribute. Click Save. 12. Create a project in the IT partition. Verify that the newly added attribute with the configured default value appears on
the create page.
Edit Field Properties for Attributes
You can configure some of the field properties for the attributes that you add to your views. For example, you can add hint text or provide a tool tip for the field. Depending on the attributes, you can also configure other properties such as the default value and whether the field is required.
Follow these steps:
1. With the object open, click Views. 2. Locate the view that you want to change in the Category column, and click Fields in the same row. A list of attributes
for the view appears. 3. In the list, locate the attribute whose properties you want to edit. 4. Click the Properties icon for the attribute. 5. Edit the following field properties and save your changes.
- Property Label: Defines the attribute name that users see on the object pages.
- Display Type: Defines how the attribute field appears to the users. For example, if an attribute has multiple values that users can select from, then the values can display in a pull-down or browse menu.
- Hint: Defines the hint text for the attribute to display to users.
- Hint Position: Defines the position for displaying the hint text for the attribute.
- Tooltip: Defines the tool tip for the attribute that displays when the user hovers over it.
- Override Default: Defines the new default value for the attribute to override the existing default.
- Value Required: Specifies if a value if required for the attribute.
- Enter Once: Defines an attribute where a user can enter a value only once. The user cannot change the value after entering it. Use this attribute for business processes that rely on the value not changing once the field is set.
- Hidden: Defines an attribute that is hidden from the users. The administrator can configure a field on a page with a default value and hide it from the users. A hidden attribute is used commonly for filtering purposes. For example, you can use it to always exclude inactive records that you do not want users to see.
Publish Changes to List and Filter Views
You can overwrite list and filter views for users who have personalized views by publishing new views. A user who has not personalized a view sees the changes immediately when you save changes to a view in Studio. A user who has personalized the view does not see changes to the new view until you publish the changes. If you are using partitions, the new published view affects only the partition you select.
During an upgrade or when installing add-ins, personalized user views are not upgraded. To keep users current, you can publish any new views that are included in an upgrade or from an add-in.
NOTE Upgrade or new system changes to attributes for a view can be required. In these cases, the changes are merged with the configured views of users during an upgrade. The merge of required changes does not overwrite the user views and does not cause the views to be marked as upgraded.

The Views page shows a list of system views and their current status. Custom views are not listed. Use the following columns on this page to assess whether you need to publish a view to users:
- View::Code Identifies the view name. View is the nonspecific part of the name and many views can exist in different partitions or the same partition that have this portion of the name. Code is a name that is attached in Classic PPM that identifies the view. Using the view::code name, object, category, and partition, each view can be fully identified.
- Object: Identifies the object on which the view is created.
- Category: Identifies whether the view is a filter, list, or property view.
- Type: Identifies whether the view is for creating or editing an instance of an object. Only a property view has data in
this column.
- Partition: Identifies the partition to which the view pertains.
- Personalized: Indicates with a checkmark that at least one user has configured the view in the user interface.
Publishing a new view or restoring the view default removes the checkmark from this field.
- Modified: Indicates with a checkmark the presence of changes by an administrator after the view was originally
installed or the last time defaults were restored.
- Upgraded: Indicates with a checkmark that an upgrade has occurred for the view after its original installation.
- Last Restored: Indicates the last date that view defaults were restored. Restoring defaults overwrites all user and
administrator modifications and clears the checkmark from the Modified column.
- Last Version: Indicates the last release version in which changes were made to the out-of-the-box view. The version
number in this read-only field is updated only when changes for a view occur in a release.
NOTE Only the System partition has its views updated when an upgrade occurs. If views from other partitions are in the list, the Last Version field for these views shows no value.
Follow these steps:
1. Click the Administration menu, and select Views from the Studio menu. 2. Select the views that you want to publish to users, and click Publish. 3. At the Confirmation page, click Yes.
Restore Defaults for Object Views
You can restore the original default settings for object views. Restoring the defaults for an object restores the properties, list, and filter views to their original properties for all users. Any personalized user changes to the object view are overwritten with the defaults. If you are using partitions, the defaults are restored only in the selected partition. This procedure removes all changes that were made at the administrator level or by users to views in the current partition.
Follow these steps:
1. Click the Administration menu, and select Objects from the Studio menu. 2. Select an object. 3. Click Views. 4. Click Restore Defaults.The default settings replace any changes that had been applied to the layout, labels,
appearance of fields, and options.
Restore Defaults for Selected Views
You can restore the original defaults for multiple views, including property views, list views, and filter views. When you restore the default views, any changes to a view made by users or administrators are overwritten.
Follow these steps:
1. Open Administration, and from Studio, click Views. 2. Select one or more views.


3. Click Restore Defaults. 4. Click Yes when the confirmation message appears.


Clarity Studio Portlets
As a Classic PPM Studio developer, use this article to develop and configure portlets. The software supports the following portlet types:
- Chart portlets are graphic views into your data. Examples include heat maps, tree maps, bubble charts, and pie charts.
- Grid portlets provide lists or tables of data that can be filtered on demand.
- Filter portlets coordinate filtering operations between portlets on a page.
- HTML portlets capture web page content and plug it into a page in HTML format. Data can be extracted from internal
or external web sites.
- Interactive portlets display dynamic imported content including Flash-based .swf or Xcelsius visualizations. Legacy
Xcelsius features are deprecated; they are available only for users of a previous release. Advanced reporting functionality supersedes Xcelsius.
NOTE
Interactive portlets are no longer supported in any environment. In FedRAMP environments, HTML portlets are also not supported.
Similar to reports, portlets provide snapshots of data and can appear as grids, as charts, or as any HTML content on a page. As a portlet designer, you select the data to display in the portlet. You can design a portlet page with one or more portlets that appear automatically for other users with the appropriate access. Users can personalize their portlet pages by deciding which portlets to show or hide and where to show them on the page.
Portlets can collect data and business intelligence from:
- The Classic PPM database.
- Other enterprise databases.
- Optional external sources available in HTML, such as business news and network status information.
An object or an NSQL query provides the data for the portlet. An object automatically becomes a data provider when you create it. Identify a data provider or create an object or an NSQL query for the portlet data. Users can populate portlets with charts, tables, workflows, best practices, documents, and forms. Portlet data can refresh automatically.
- Develop Chart Portlets
- Develop Grid Portlets
- Develop Filter Portlets
- Develop HTML Portlets
- Develop Interactive Portlets (Legacy Feature)
- Portlet Configuration
> [!INFO]
> Figure 41: This diagram shows the steps involved in developing Clarity portlets


Develop Chart Portlets Charts are best for displaying data that contains several dimensions and metrics. Dimensions are related data elements. For example, project-related data (Project ID, name, or start date) is a dimension. If a query also contains resource data, then the data contains two dimensions. Metrics are measured query values. For example, Actual Hours is a metric. Studio allows you to generate a chart portlet dynamically, so that you can add it to your local configuration and personalized user interface. Each chart portlet appears in a three-dimensional and animation display. You can create a chart portlet to display information about business intelligence, collaboration, project, resource, or personal information. You can add a chart to a custom dashboard or a portfolio management page. Use the chart type that best suits the way you want to visualize the metrics in query data. Configure at least the minimum number of metrics in the query data. The following image describes the different chart types:


The following table explains the attributes of the available chart types:

Serial Number

Chart Type


Area


Bar


Bubble

Description

Onedimensional
Minimum Metrics

Displays data


points that are

connected by

lines along the

axes.

Displays different colors to fill in the

area below the line.

Displays each 1 dimension of the data in a horizontal bar.

Displays metrics 3 on the horizontal and vertical axes.
The size of each bubble represents a third metric.

Onedimensional
Maximum Metrics
Unlimited
Unlimited

Threedimensional
Minimum Metrics 1

Threedimensional
Maximum Metrics
Unlimited


Serial Number

Chart Type


Column


Donut


Funnel


Heat Map


Line


Pie


Scatter

Description

Onedimensional
Minimum Metrics

Displays each 1 dimension of the data in a vertical bar.

Displays the data 1 dimension objects in proportional segments, like a pie chart.

Displays the data 1 dimension objects in proportional rows in a funnel shape similar to a pie chart.

Displays a


primary attribute

or metric in a two-

dimensional grid

with values along

the X-axis and Y-

axis. The primary

attribute values

are represented

using colors or

shades of the

same color.

Displays data


points connected

by lines along the

axes.

Displays the data 1 dimension objects in proportional slices.

Displays metrics 2 across the X-axis and Y-axis.

Onedimensional
Maximum Metrics
Unlimited 1
Unlimited 1 2

Threedimensional
Minimum Metrics 1 1
1 1 2

Threedimensional
Maximum Metrics
Unlimited 1
1 1 2


Serial Number

Chart Type


Tree Map

Description

Onedimensional
Minimum Metrics

Displays data in a 3 hierarchical tree with branched nodes. Chart values appear in different colors and can include clickable shapes that show the relative size of each subgroup. Tree maps progressively reveal more detailed information in deeper levels. The user can expand each subgroup to reveal the child data points in deeper levels.

Onedimensional
Maximum Metrics

Threedimensional
Minimum Metrics

Threedimensional
Maximum Metrics

Create a Chart Portlet in Studio
You can create a chart portlet and can populate it with data from an object or query. Decide the type of chart you want based on the dimensions and metrics in the query.
Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Click New, select Chart Portlet, and complete the following fields:
- Portlet Name: Defines the name of the portlet. This name appears on the title bar of the portlet and in the list of available portlets.
- Portlet ID: Defines a unique alphanumeric identifier for the portlet.
- Content Source: Specifies where the data that appears in a portlet or portlet page originates. Default: Customer
- Category: Specifies the general area on which the portlet reports data. Default: Business Intelligence
- Description: Defines the purpose of the item being created and provides any relevant information.
- Base Size: Specifies the initial size for the portlet. To create a single chart portlet on a page that users can
personalize, select Large as the base size. To share a page with other portlets, select Small. Default: Small
- Active: Specifies whether the portlet is active and users can see the portlet. You can edit inactive portlets and
activate them later. Default: Selected
- Instance Type: Specifies the type of page on which a portlet can be placed. If you select General for this field, the
portlet can be placed on any page. Default: General
- Data Provider Indicates the data construct that provides information to the portlet. Specify a provider by type:
- Queries: Use the built-in data providers and NSQL query language to create queries.
- System: System types are data providers for the restricted portlets. You can use these data providers in addition
to stock object data providers.
- Objects: The stock object and any objects that you create contain fields that you can use to access database
information. 3. (Optional) Click Browse in the Data Provider field to specify a query, object, or system provider. Select a provider and
then click Add. 4. Click Next and specify a chart type. The type of charts that you can create varies based on the dimensions and
metrics of the data provider.
NOTE If the chart type is similar to another type, you can change the chart type later. Open the portlet and click the Chart Section tab and select Chart Type. 5. Click Next. 6. Depending on the type of chart, complete the Select Metrics page. The metrics page is specific to the type of chart that you are creating. a. If you are creating a bubble chart, complete the following fields: X Axis: Specifies the metric to display on the Xaxis for the chart. Y Axis: Specifies the metric to display on the Y-axis for the chart. Bubble Radius: Specifies the metric to display in each bubble for a bubble chart. The relative size of each bubble corresponds to the value for the selected field. b. If you are configuring a heat map, complete the following fields: X Axis: Select the metric that you want to track along the horizontal axis of the heat map. For example, to view the projects that are Started from those that are Not Started, choose Progress. Y Axis: Select the metric that you want to track along the vertical axis of the heat map. For example, to view the metric that you select next in color-coded cells, choose Technical Risk. Metric: Select the metric that you want to track using a color scale to group values in the heat map. This metric is also known as the Z Axis value. For example, choose Planned Cost. Grouping Function: Select an optional function that you want to apply to the metric in the heat map. Values include Sum, Count, Average, Maximum, or Minimum. To view the combined planned costs of all projects choose Sum. The examples cited here define a heatmap that color-codes the metric, applies a function to group the data, and plots it along the X and Y axes. This heatmap shows the sum of planned cost data for projects by technical risk and by progress. c. If you are creating a tree map, complete the following fields: Metric: Select the primary attribute that you want to track. For example, to track the remaining cost of projects select Estimate-to-Complete (ETC). First Grouping: Select the attribute that you want to use to categorize the data shown in units of the metric you selected. For example, to view project ETC by organizational breakdown structure, select OBS. You can also select a second and even a third grouping level. For example, you might want to view ETC for projects by OBS (level 1), then by manager (level 2), and then by status (level 3). 7. Click Next or Finish and Open.
Configure a Chart Portlet Filter
A chart can be complex if it contains a lot of data. Filters help users view only the information that is important to them. For each chart, you can select the specific data that you want to display from the available data that are provided by a query. You can also specify if you want the filter options to appear on the portlet or on a separate page. You can display filters on a separate page if the filter will not change often. The filter options are still available, but hidden.
Follow these steps:
1. Continue from the previous procedure or open Administration, and from Studio, click Portlets and open the chart portlet.
2. Click the Chart Filter Section tab and click Layout. The Chart Filter Layout page appears. 3. Select the fields that you want to appear in the filter in the Available column and move the fields to the appropriate
column using the arrows. 4. Complete the following fields:
- Section Title: Defines the text that appears at the top of the section for the filter.
- Default Filter State: Specifies whether the initial display of the filter is expanded or collapsed.
- Allow Power Filter: Specifies whether the filter provides advanced search features. 5. Click Save. 6. Click the Chart Filter Section tab and click Fields. The Chart Filter Fields page appears.
7. From the Display menu, select one of the following values:
- All: Displays all data that are provided by the query.
- Selected: Displays only the fields that you selected in the Layout menu (above).
- Available: Display all available data that are provided by a query.
8. Click the Properties icon for a field to modify its behavior in the filter.
9. Click Save and Return.


Configure the Chart Portlet Source Data and Appearance Options
You can determine the data that appears in a portlet and how you want the data to be presented to users.
NOTE This procedure explains the basic procedure for all charts. All fields for all chart types are included. The current chart that you are configuring may not display all of the same options.
Follow these steps:
1. Continue from the previous procedure or open Administration, and from Studio, click Portlets and open the chart portlet.
2. Click the Chart Section tab and click Source Data. 3. Select the metrics that you want included in the chart. 4. Click Save. 5. Click the Chart Section tab and click Options. 6. In the Options field, select one of the following:
- Entire Chart
- X-Axis
- Y-Axis 7. Depending on the type of chart that is selected, complete the following display options and save your changes:
NOTE
The options appear in alphabetic order in the documentation. Their appearance on the Chart Section Options page varies.
- Allow Configuration: Indicates that users can modify the appearance of a portlet. Default: Selected
- Allow Label Configuration: Indicates that users can modify portlet labels.
- Allow Drilldown: Enables users to click data slices in a tree map to view the next level in more detail.
- Angle of First Slice: Defines the position of the first slice or wedge. Use with pie and donut charts. Values: 0 to 360 degrees Default: 0
- Axis Label: Displays the metric name along the X-axis, Y-axis, or both axes. Use this option with: Bar. X-axis, Yaxis. Column. X-axis, Y-axis. Line. X-axis, Y-axis. Bubble and Scatter. X-axis.
- Category Labels: Specifies the labels that appear along the category axis for the X-axis of column and line graphs and the Y-axis of bar graphs. For example, consider a column graph that shows five months of data with three


metrics (shown as red, green, and blue bars). The months are the categories, and this field determines the label that appears on each one.
- Crosses Opposite Axis At: Defines the intersection point of the axis. Use with bubble and scatter charts.
- Datapoint Labels: To show the data at specific points in the chart, select Value. To hide the values, select None. To allow the user to see a value when their mouse pointer is over a point, set the Mouseover Labels.
- Decimal Places: Defines the number of decimal places to display for numbers. Use this option with: Bar. Xaxis. Column. Y-axis. Line. Y-axis. Bubble and Scatter. X-axis, Y-axis. Also available for heat maps and tree maps.
- Display Units: Specifies how values are rounded up. Select a value for rounding from the drop-down list. Use this option with: Bar. X-axis. Column. Y-axis. Line. Y-axis. Bubble and Scatter. X-axis, Y-axis.
- Filter: Indicates how the results appear initially on a page.
- Group By Column: Specifies a column from the data provider that is used to organize the chart metrics data. This field is designated to provide a data scaling mechanism for chart display. For example, if you are using the Project object data provider, you can select Manager as the group-by column. The metrics that you select for the x-axis or y-axis are then organized by manager. The data provider that is selected determines the columns that are available as group-by columns. This option is not available for scatter charts or bubble charts.
- Group By Function: Specifies the default aggregate function that is applied to the Group By metric results. The field defaults to Sum unless you change the value. For example, if you select Manager in the Group By Column field and Sum in the Group by Function field, the SUM aggregate is applied to the results of the chosen metrics. The totals can be displayed as values on the chart using labels. This field has an override function in the Metrics section of the Options page. You can override the default functions for individual metrics. If you select a date metric, the override is automatically set to Maximum. The only aggregate functions available for date fields in the metrics are Maximum and Minimum.
- Layout Type: Determines the appearance of the proportional shapes that represent the relative value of the data to the whole group in tree maps. Use the default Slice and Dice setting to best view the implied hierarchy that the data suggests. For example, the groupings with the most values will appear larger and smaller groupings can appear divided into two or more rows. Choose Squarified to compare the data points and attempt to normalize your view of the parts relative to the whole. Rectangular shapes in the Slice and Dice layout are adjusted to appear more like squares. Groupings appear in normalized aspect ratios to help you better visualize and compare proportional values. The Strip layout adjusts the Squarified shapes so they fit side by side in subgrouped columns and in one

primary row or strip. Choose Stripes to compare the data in vertical columns. The width of the stripe represents the proportion of the part to the whole.
- Logarithmic: Plots the data points on the graph using a logarithmic scale for the Y-axis and major grid lines. Instead of a standard linear scale, the graph measures the relationship between data points using a power of 10 rather than a regular linear scale.
- Link: Specifies a page link that appears as a secondary value that the user can select.
- Major Unit Increment: Defines the interval of major ticks on the axis. Use this option with: Bar. X-axis. Column. Yaxis. Line. Y-axis. Bubble and Scatter. X-axis, Y-axis.
- Maximum Value: Defines the greatest value to display on the axis. Use this option with: Bar. X-axis. Column. Yaxis. Line. Y-axis. Bubble and Scatter. X-axis, Y-axis.
- Mouseover Labels: To enable the user to see the value at specific points in the chart with their mouse, select Value. To hide the values, select None. To display values at all major data points, set the Datapoint Labels.
- Number of Rows: Divides the data points along the Y axis of a heat map into groups or ranges of values. As a suggestion, set this to a low number such as 2, 3, or 4 to aid in visualizing the data. If you do not set a value, the heat map plots each unique data value along the Y axis.
- Other Category Threshold: Defines the data point at which all records for a specified value are grouped into a category named Other. Use this option if too many items appear on the chart. Use this option with the following chart types: Bar Column Line Pie and Funnel
- Reverse: Shows the data points aligned to the Y-axis scale in reverse order from the maximum value to the minimum value. The axis values typically appear in order from the minimum value to the maximum value.
- Show Axis: Indicates whether the Axis line displays. Use this option with: Bar. X-axis, Y-axis. Column. X-axis, Yaxis. Line. X-axis, Y-axis. Bubble and Scatter. X-axis, Y-axis.
- Show Legend: Specifies whether to display a legend for the chart. Use with bar, bubble, column, heat map, line, and scatter chart types.
- Show Line Markers: Indicates data points on the chart; otherwise, only a line displays. Available for line charts. Select the check box to show line markers. Default: Selected
- Show Lines: Indicates that lines are to connect the data points. Available for line charts. Default: Selected
- Show Major Grid Lines: Indicates whether major grid lines display on the chart. Use this option with: Bar. X-axis, Y-axis. Column. X-axis, Y-axis. Line. X-axis, Y-axis. Bubble and Scatter. X-axis, Y-axis.
- Show Separator: Specifies that a comma separates values greater than 999 (for example, 1,000). Use this option with: Bar. X-axis. Column. Y-axis. Line. Y-axis. Bubble and Scatter. X-axis, Y-axis.
- Show Tick Labels: Indicates whether tick labels display on the chart. Use this option with: Bar. X-axis, Yaxis. Column. X-axis, Y-axis. Line. X-axis, Y-axis. Bubble and Scatter. X-axis, Y-axis.
- Show Title: Displays the chart portlet name above the chart.
- Show Subtitle: Displays the subtitle for heat maps and tree maps. The subtitle shows the chart metric and indicates the grouping function for heat maps and grouping attributes for tree maps.
- Sort Column: Indicates that a column is the default sort item. This option is available for column and line charts.
- Sub-type: Indicates the metrics that display as separate bars rather than a single merged bar. Select the sub-type that is desired. This option is available for bar and column charts.
- Tick Label Angle: Sets the angle of a label that is used with tick marks. Use this option with: Bar. X-axis. Column. X-axis. Line. X-axis. Bubble and Scatter. X-axis.
Example Chart Portlet
In this example, the following chart displays the sum of effort data by manager. Red lines appear only in this example to demonstrate the concept of data in groups by manager.

Configure a Line Chart 1. (Optional) If you are configuring a line chart, select Guides in the Options field and click New, then complete the
following fields:
- Axis: Specifies the axis for which guides are being set.
- Label: Defines the name for the axis.
- Show Label: Determines whether the name of the axis displays.
- Type: Identifies the source of the information that displays on the guide. Select the appropriate option. If you are
selecting a type for an X-axis, you can only select an attribute. If you are selecting a type for a Y-axis, select either the fixed value or the percent value and enter the amount. Default: Attribute
- Color: Specifies the color for the guide. Default: Black 2. Click Save. Configure Consistent Colors for Studio Chart Portlets You can configure color options for the standard chart portlets so that the values of common attributes appear in a consistent color. For example, you have a portlet page that contains multiple chart portlets. Each portlet uses the same attribute named Priority. For each chart portlet, you can specify Priority as the key attribute in each portlet. In all charts, High priority values appear in red and Low priority values appear in gray.
NOTE Before you can configure consistent colors for chart portlets, you must select the Use Consistent Chart Colors option under Administration, General Settings, System Options. See Configure General System Settings for details. Follow these steps: 1. Continue from the previous procedure or open Administration, and from Studio, click Portlets. 2. Click the Chart Section tab and select Options. 3. Complete the following fields:
- Consistent Color Key Specifies a metric or an attribute that determines which colors are assigned to the attribute values in all charts in the portlet. Select an attribute, such as Priority.
- Use Consistent Colors Enables consistent chart colors for the chart portlet that are based on the color key. Select Yes.
4. Save your changes. 5. Repeat for each chart portlet that uses the same color key, using the same attribute value. When you display the
portlet page with chart portlets, the values for the attribute key have consistent colors on each chart.
NOTE
The color consistency fields do not apply to heat map and tree map charts.
Configure the Colors for Heat Maps
You can determine the color gradients that are used to represent data values in a heat map.
NOTE
If your heat map uses an attribute with its own colors derived from custom-defined display mappings, you cannot change the map colors. These values are read-only. However, you can change the display mappings.
Follow these steps:
1. Click Administration, and from Studio, click Portlets and open the heat map chart portlet. 2. Click the Chart Section tab and click Options. 3. In the Options field, select Map Colors.
a. In the Select Color field for row one, select a color. b. (Optional) Enter a description to explain what the color value means in the chart. c. In the From field, enter the low end of the range of values to appear in the lightest shades of this color. d. In the To field, enter the high end of the range of values to appear in the darkest shades of this color. 4. Click Save and Return.
Configure the Chart Color Palette
You can specify chart colors at the system level or at the Studio chart portlet level. When you create custom colors, they override the default palette. You can configure the chart color palette to achieve the following goals:
- Represent a common attribute with the same color consistently in all chart portlets.
- Create a chart palette by adding custom colors.
- Remove colors from the custom palette.
Create a chart color palette at the system level to specify which colors, and in what order, the system assigns colors to a chart. You can add an unlimited number of colors to a color palette. For example, specify colors that represent your corporate identity.
NOTE You can use only one palette at a time. The values that you specify for these settings affect all users.
Follow these steps:
1. Open Administration, and from General Settings, click System Options. 2. In the Other section, select Use Consistent Chart Colors. When you enable this option, settings for using consistent
colors become available when you create and configure the chart portlets. If Use Consistent Chart Colors is disabled, the chart portlet settings are not available. 3. Click Save and Return. To customize the colors, continue to the next step. 4. In the Chart Colors field, click the [Color Palette] link. The chart colors page appears. 5. Click New and complete the following fields:
- Name: Specifies the name of the custom color value.
- RGB: Specifies the hexadecimal value that represents a color for your chart. For example, 0000FF specifies the
color blue. 6. Click Save and Return. 7. Repeat for each additional color that you want to add to the palette. 8. To change the sequence of colors, click Order and move the colors up or down in the list. 9. (Optional) To restore the default color palette, select all of the custom colors in the palette list and click Delete. 10. Click Save and Return.
Develop Grid Portlets
To display data in rows and columns, use a grid portlet. For example, you can use a grid portlet to display the following information:
- Lists of resources or transactions
- Capacity and assignment demand for resources over time
- The number of overdue action items for each resource for each OBS unit
Grid portlets are suitable when query data contains only one or two dimensions. For example, project-related data such as the project ID, name, and start date is one dimension of data. You can present the following information elements in a virtual column in the grid:
- Gantt charts
- Progress bars
- Bar or column charts
- Aggregation rows
- Links to other information
Refer to the following guidelines when designing grid portlets:
- Static dependent list lookups that are configured as multi-valued lookups are not supported in grid portlets.
- Autosuggest is not supported with static dependent lists.
- If the data used in a grid portlet comes from a secured subpage, the access restrictions for the subpage are enforced
in a grid portlet. That means a user who cannot view a subpage cannot view data from the subpage in a grid portlet.
- Use a hierarchical grid portlet to show the structure of data that has more than one level. A parent row can have
multiple child rows, and the data that shows in the parent row can be an aggregate of the child data.
- A grid portlet can also include time-scaled values that cover specific time periods in a virtual column.
Follow these steps:
1. Create a Grid Portlet in Studio 2. Configure the Column Layout and Appearance of a Grid Portlet 3. Add any of the following display options:
a. Add a Gantt Chart to a Studio Grid Portlet b. Add a Bar or Column Graph to a Studio Grid Portlet c. Add a Progress Bar to a Studio Grid Portlet d. Add an Image Link to a Studio Grid Portlet e. Add an Aggregation Row to a Studio Grid Portlet 4. Configure the Studio Grid Portlet Display Options 5. Configure the Filter for a Studio Grid Portlet

Create a Grid Portlet in Studio
Use grid portlets to display lists of data for users. For example, you can create a grid portlet to show the following information for all of your projects: planned cost, actual cost, planned hours, and actual hours. You can include a Gantt chart in the portlet to show project milestones and highlight how the milestones are being met.
Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Click New and select Grid Portlet. 3. Complete the fields.
- Content Source Specifies where the data that appears in a portlet or portlet page originates. Default: Customer
- Category Specifies the general area on which the portlet reports data. Default: Business Intelligence
- Instance Type Specifies the type of page on which a portlet can be placed. If you select General for this field, the
portlet can be placed on any page. Default: General
- Data Provider Indicates the data construct that provides information to the portlet.
- Queries: Use the built-in data providers and NSQL query language to create queries.
- System: System types are data providers for the restricted portlets. You can use these data providers in addition
to stock object data providers.
- Objects: The stock object and any objects that you create contain fields that you can use to access database
information.
- Partition Specifies the partition that is associated with the portlet. After you specify a partition, the portlet is aware
of partition-specific lookup values. If you are using partitions and create a system partition portlet, it will not behave like stock list pages which recognize the partition membership of the logged in user.
NOTE
- The source data for virtual columns must be defined in the query that supplies data to the grid.
- The Y-axis (rows) of the grid can contain only one dimension of data.
- If your query data contains two dimensions, either dimension can be displayed in the rows. The second
dimension is displayed on the X-axis (columns). Queries that contain three or more dimensions display one dimension in the rows and all other dimensions in the columns.
- Metrics display in the first or last header row of columns when the query data contains two or more dimensions. If the query contains three or more dimensions, the dimensions are placed in order along the X-axis. 4. Click Next. The portlet finish page appears. 5. Click Finish and Open.
Configure the Column Layout and Appearance of a Grid Portlet
Specify the fields that appear in the columns and the order in which they appear.
Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Open the portlet. 3. Click the List Column Section tab, and click Layout. 4. In the Column Layout section, select the attributes to include in the portlet in the Available Columns and move the
attributes to the Selected Columns list. 5. Click Save. 6. In the Column Sorting section, indicate the primary sort column by selecting an attribute in the First Field row. 7. To indicate the direction of the sort, select Ascending or Descending. 8. To indicate additional sort columns, select attributes for the Second Field, Third Field, and Fourth Field rows. 9. Save your changes.


10. Click the List Column Section tab and click Fields. 11. For each field that you selected as a column:
a. To edit the field label, enter the existing label. b. To change the appearance of the field in a column of the grid, click Properties. c. To designate that the field data appears as an icon in the grid, click Indicator Images. 12. Click Save and Return.


Add a Gantt Chart to a Studio Grid Portlet
Use a Gantt chart in a grid portlet to show the duration and progress over time. For example, you can use a Gantt chart to show the milestone completions for each project that is included in a grid portlet. The Gantt chart appears in a virtual column on the row for each project.
The default position for a Gantt chart in a grid portlet is a virtual column in the far right column of the grid. You can move the virtual column containing the Gantt chart to a different position in the List Column layout.
Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Open the portlet. 3. Open the List Column Section menu, and click Fields. The List Column Fields page appears. 4. Click New. 5. Select Gantt, and click Next. 6. Complete the General section, including the following fields:
- Show Column Label: Indicates whether the column label appears at the top of the column list.
- Allow Word Wrapping in Column Header: Indicates whether you want text in the column label to wrap. 7. Complete the requested information in the Time Scale section. The following fields require explanation:
- Start Date: Indicates the start date for the column spread.
- Time Scale: Specifies the time period by which data displays (for example, days or weeks).
- Number of Time Periods: Defines the number of time periods that display.
- Time Period Offset: Defines how to shift the beginning of the Gantt bar relative to the start date. Enter a positive or
negative number of time periods into the field.
- Show Group Header Row: Indicates whether the timescale displays above the Gantt bar. If you select this option,
select a timescale value. 8. Complete the requested information in the Primary Bar section. The following fields require explanation:
- Item Name Attribute: Defines the type of information to display in the corresponding Gantt bar.
- Start Date Attribute: Defines the start date of the corresponding Gantt bar display.
- Finish Date Attribute: Defines the finish date of the corresponding Gantt bar display.
- Milestone Attribute: Defines the attribute to designate as a milestone. You can only assign a milestone attribute
for a task.
- Progress Through Date Attribute: Defines the length of the black overlay line that shows how much work is
complete. If you select the Progress Through Date Attribute, it overrides the Progress Percent Attribute.
- Progress Percent Attribute: Defines the percentage that is used to move the green progress line relative to the
length of the taskbar to indicate the completed work. If you select a value for this field, it overrides the Progress Through Date Attribute selection.
- Label for Bar: Specifies the label text to display above each taskbar.
- Additional Information Attribute: Specifies the field that is used in the text note when you hover over a taskbar. For example, to display the assigned resources for a task, when the cursor is over a taskbar, complete the following steps:
- Select Assigned Resources from the Additional Information Attribute field.
- Select Additional Information in the Show Mouseover field.
- Show Mouseover: Specifies the information that you want to display in a text note when the mouse scrolls over an area of the Gantt chart. 9. Indicate the dates to show in the primary bar by selecting the desired dates in the Available list and moving the dates to the Selected list. Change the order of the dates in the Selected list to suit your Gantt chart needs. 10. To display a second bar below the primary bar (for comparison purposes), select the Show Secondary Bar check box and repeat the previous primary bar steps for the secondary bar section. 11. Save your changes.
Add a Bar or Column Graph to a Studio Grid Portlet To compare values for the same attribute spanning multiple entries in a list, use a bar or column graph. For example, you can display the planned cost for projects over a period of time. The default position for a bar or column chart in a grid portlet is a virtual column in the far right column of the grid. Follow these steps: 1. Open Administration, and from Studio, click Portlets. 2. Open the portlet. 3. Open the List Column Section menu, and click Fields. 4. Click the Properties icon in a row. 5. Change any of the following options. The options that appear depend on the data and display type of the attribute.
- Column Label: Defines the name that appears at the top of the column.
- Show Column Label: Indicates whether the column label appears at the top of the column list.
- Allow Word Wrapping in Column Header: Indicates whether the text in the column label wraps within the column. 6. Select the type of chart in the Display Type field, and click Save. 7. Complete the Primary Bar or Column section including the following fields:
- Thickness: Specifies the width of the bar or column graph.
- Maximum Length: Define the length of the bar (in pixels).
- Length Scaling: Select from the following options:
- Relative to Same Column: Makes the bar length proportional to other bars in the same column. This option is most useful when displaying horizontal bars. For example, a bar that represents $500,000 displays as twice the height of a bar that represents $250,000.
- Relative to Same Row: Makes the bar proportional to all other bars in the same row. This option is most useful when displaying vertical bars. For example, a bar that represents $500,000 displays as twice the height of a bar that represents $250,000 in the same row.
- Relative to Entire Table: Makes the bar proportional to all bars of the same type (vertical or horizontal) in the entire table. For example, a vertical bar that represents $500,000 displays as twice the height of a bar that represents $250,000 in another row.
- No Scaling Draws all bars to the maximum length. This option can be used to create progress bars. For example, you could have an ETC column with actuals as the threshold value. The part below the threshold shows how much work is already done; the part above the threshold shows how much work remains to be done.

By looking at a column of these bar charts, you can quickly see how close each task is to being complete relative to the others.
- Color: Specifies a color for the primary bar.
- Threshold Line Attribute: Specifies the attribute whose value is the threshold value. The threshold line attribute must be in the same object as the attribute that is being measured. In bar charts, a vertical line marks the threshold value.
- Over-threshold Color: Specifies a color to represent values greater than the threshold value. Any portion of the primary bar that extends past the threshold is drawn in the over-threshold color. Any portion of the secondary bar that extends past the threshold is drawn in a darker shade of the same color.
- Secondary Value: Specifies the attribute whose value displays when the user moves a cursor over the primary bar.
- Link: Specifies a page to display when the user clicks the primary bar. If you want the page to open in a pop-up window, select the Open as Pop-up check box. 8. To create a stacked bar, complete the following fields:
- Stacked Attribute: Specifies the attribute to be represented as a stacked bar.
- Color: Specifies a color for the stacked bar.
- Secondary Value: Specifies a value to display when the user moves a cursor over the secondary bar.
- Link: Specifies a page to display when the user clicks the secondary bar. 9. Save your changes.
Add a Progress Bar to a Studio Grid Portlet
Use the following procedure to add a progress bar field to a grid portlet. The progress bar shows progress over time. The default position for a progress bar in a grid portlet is a virtual column in the far right column of the grid.
Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Open the portlet. 3. Open the List Column Section menu, and click Fields. 4. Click New. 5. Click Progress Bar and click Next. 6. Complete the Progress Bar Column Settings page including the following fields:
- Show Column Label: Indicates whether the column label appears at the top of the column list.
- Allow Word Wrapping in Column Header: Indicates whether the text in the column label wraps within the column.
- Current Stage Name: Specifies the field value to use for each stage in the progress bar. The value displays below
the column label.
- Current Stage Number: Specifies the field value to use for the current stage in the progress bar.
- Number of Stages: Specifies the field value that defines the total number of stages in the progress bar.
- Color Attribute: Specifies the color of the progress bar.
- Show Label: Indicates whether the name of the current stage is displayed in the progress bar.
- Column Width: Defines the percentage of the row width that is allocated to the progress bar column. 7. Save your changes.
Add an Image Link to a Studio Grid Portlet
To allow users to navigate to another page from the portlet, add an image link. For example, add an image link that lets a user go to a specific dashboard page. When you add an image link to a grid portlet, the link automatically displays in a new virtual field in the far right column.
Follow these steps:
1. Open Administration, and from Studio, click Portlets.

2. Open the portlet. 3. Open the List Column Section menu, and click Fields. 4. Click New. 5. Select Image and click Next. 6. Complete the List Column Field page including the following fields:
- Column Label: Defines the name that appears at the top of the column.
- Show Column Label: Indicates whether the column label appears at the top of the column list.
- Allow Word Wrapping in Column Header: Indicates whether the text in the column label wraps within the column.
- Image: Specifies the image to use in the grid column.
- Link: Specifies a page link that appears as a secondary value that the user can select.
- Open as Pop-up: Indicates whether the target page of the image link appears as a pop-up.
- Disable Link Attribute: Specifies an attribute to indicate whether the value in the Link field appears in a list or grid
as text only or as a hyperlink. The following values determine how the attribute appears:
- Text only. The value of the attribute that is selected equals zero.
- Hyperlink. The value of the attribute is not zero or a value is not selected. This field applies only when the Link field has a value that is selected. 7. Save your changes.

Add an Aggregation Row to a Studio Grid Portlet
You can show collective information about the number or money attributes in the rows of a grid portlet. You can create virtual columns with aggregated data derived from query data. The following table describes the available virtual column types.

Aggregation
Comparison Variance

Virtual Column

Description
Operates on a large set (column) of data and typically returns a single value. You can have multiple rows of aggregated data.
Compares two or more query data fields.
Displays the difference between the aggregation and comparison columns or rows.

Depending upon the type of data that is involved, you can select from the following functions:
- Sum
- Average
- Count
- Minimum
- Maximum
- Variance
- Standard deviation
NOTE String attributes cannot be aggregated. When the query data is a date, only the COUNT, MIN, and MAX functions are available.
For data with at least two dimensions, you can create a virtual column that compares and aggregates the two attributes. Depending upon the data, you can display the results as a number or a bar or column chart.


Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Open the portlet. 3. Open the List Column Section tab, and click Aggregation. 4. Click Add. 5. Complete the page including the following fields:
- Label: Defines the name for the aggregation row. Enter the name that you want to appear.
- Show: Indicates whether to display the name of the aggregation row.
- Attribute: Defines the field value to use for aggregation.
- Function: Specifies the aggregation function to use to calculate values for a selected field (cell) in the row. 6. Save your changes. The aggregation row list appears. 7. To show the difference between two rows, select the Variance check box. This check box is available only if two aggregation rows are selected as Show. 8. To reorder the rows, click Reorder. 9. Save your changes.
Configure the Grid Portlet Display Options
Display options determine how the product appears to users. For example, you can control how secondary values in a grid cell appear, how specific data appears, and whether users can change a portlet.
Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Open the portlet. 3. Select the List Column Section tab, and click Options. 4. Complete the page, including the following fields:
- Secondary Value Display: Indicates how the secondary values display in a grid cell. Values:
- Mouseover only. Specifies no secondary value display.
- Mouseover and redline text. Specifies the display of a secondary, comparison value when you place the cursor over a cell in a grid. For example, if you have two columns that are named Cost and Baseline Cost, you can display both values in a cell. To display both, select Baseline Cost as the secondary value. The Cost value displays as usual. However, when you move the cursor over a cell in the grid, the Baseline Cost also displays.
- Show Null Secondary Values. Specifies that the secondary value displays even when there is no number value to show.
- Filter: Indicates how the results appear initially on a page.
- Rows per Page: Specifies the number of rows to display per page.
- Highlight Row by Attribute: Specifies the attribute whose row is highlighted when the attribute value is not zero.
- Display Currency Code in Column: Specifies whether to display the currency code in the column for money
attributes.
- Allow Configuration: Specifies if a user can change the appearance of a page or a portlet.
- Allow Label Configuration: Specifies whether a user can change a page or portlet label. This option works with
the Allow Configuration option. To make labels unconfigurable while other items can be configured, select the Allow Configuration option and clear the Allow Label Configuration option.
- Attribute Value Protection: Indicates whether an attribute is protected or displayed. You can protect attributes from appearing using display conditions, secured subpages, or both. 5. Save your changes.

Configure the Filter for a Studio Grid Portlet
Display a filter to help users manage the volume of information in a grid portlet. For example, if the portlet displays a list of projects, users can filter by specific criteria. The filter can appear in a collapsed state that shows only the filter field or in an expanded state that shows filter options.
When you set up a list filter, you can display a Build Power Filter link that users can click to build and save complex queries. You can add virtual fields to a list filter; however, some virtual fields are not available for use in a power filter.
You can display the filter fields and can adjust their properties. For example, decide if a filter field is required in a filter and specify a filter default value. To improve performance, reduce the amount of data in the results. Select the fields that you want to display in the filter. For example, you can select from the fields that are selected for the filter layout or you can select from other options.
Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Open the portlet. 3. Click the List Filter Section tab and select Layout. 4. In the Available list, select the attribute or attributes you want to add to the list filter, then move the attributes to the
appropriate columns. 5. Complete the following fields in the Settings section:
- Section Title: Defines the text that appears at the top of the section for the filter.
- Allow Power Filter: Specifies whether the filter provides advanced search features. 6. Click Save. 7. Click the List Filter Section tab and select Fields. The List Filter Fields page appears. 8. In the Display field, select one of the available options to identify the fields that you want to display. 9. Save your changes.
Develop Filter Portlets
A filter portlet coordinates the filtering of data in portlets. You can configure a filter portlet to share filter values at the following levels:
- Page Level: Filter values are not shared across pages.
- Application Level: Filter values are shared across pages. To implement an application level filter, add the same filter
portlet to each page.
The scope, precedence, and persistence of the filter determine how it behaves. The scope of filter portlets is based on the use of the same filter portlet across pages. Different filter portlets cannot be configured to share and persist filter request values. The scope across pages is determined by the selection of the Persist option for the filter portlet and the mapping of the filter portlet fields to the attributes of portlets on the pages.
When a user clicks the Filter button, all portlets that are configured to work with the filter portlet are filtered using the filter portlet values. Filter portlet values appear in the filters of portlets on the page. The portlet attribute must be mapped to the filter portlet field for the value to display. A filter portlet can contain fields that do not display in all portlets. The affected portlets still filter on the filter portlet values, even if the values do not appear.
When multiple filters are mapped to a filter portlet, the filter portlet has precedence and determines the filter values for all portlet attributes mapped to filter portlet fields. The user sees the following behavior:
- Show All selected at the filter portlet level initiates a Show All behavior for all portlets that are mapped to the filter portlet. Any portlet attribute that is not mapped does not have its value overridden.
- Data that displays in an individual portlet is reset, and the result set that appears is determined by the filter criteria of the filter portlet that is combined with the portlet's filter criteria of unmapped portlet attributes.
- Portlets that have no mapped attributes are not affected by the filter portlet.

In a grid or chart portlet filter, the portlet filter has precedence.
- If a user clicks Show All on the portlet filter, all the filter records for the portlet appear. Portlet filter values always
override the filter values of previously submitted filter portlet requests. The following rules determine which filter values persist as filter criteria:
- If the scope of a filter portlet is page level, the filter portlet field values persist only within that page.
- If the scope is application level, the filter portlet used last has its field values persisted across pages.
- If multiple filter portlets are present on a page, the fields of the most recently used filter portlet are persisted. This is
true for both page-level and application-level cases.
Create a Filter Portlet in Studio Use this procedure to create a filter portlet that can be used to filter the content of all portlets that appear on a page. Follow these steps: 1. Open Administration, and from Studio, click Portlets. 2. Click New, select Filter Portlet, and complete the following fields:
- Portlet Name: Defines the name of the portlet. This name appears on the title bar of the portlet and in the list of available portlets.
- Portlet ID: Defines a unique alphanumeric identifier for the portlet.
- Content Source: Specifies where the data that appears in a portlet or portlet page originates. Default: Customer
- Category: Specifies the general area on which the portlet reports data.
- Description: Defines the purpose of the field and provides any relevant information.
- Active: Indicates that the portlet is active and is visible to users. You can edit inactive portlets and activate them
later. Default: Selected
- Instance Type: Specifies the type of page on which a portlet can be placed. If you select General for this field, the
portlet can be placed on any page. Default: General 3. Save your changes.
Add a Field to a Filter Portlet in Studio Add the fields that you want to include in the filter. Follow these steps: 1. Open Administration, and from Studio, click Portlets. 2. Open a filter portlet and click the Fields tab. 3. Click Add. 4. Complete the following fields. The fields vary according to the data type selected.
- Field Name: Defines the name that appears in the filter portlet.
- Field ID: Defines a unique alphanumeric identifier for the field.
- Description: Defines the purpose of the item being created and provides any relevant information.
- Data Type: Specifies the data type for the field. Once you save, you cannot change the data type.
- Display Type: Specifies how the field is used (Text Entry or Exact Text).
- Show as Percent: Indicates if the value entered in the field displays as a percent.
- Filter Default: Defines the value that you want to appear in the filter field as the default value. If the filter
portlet associated with this field is published to a page as the filter default, this value is applied to the portlet attributes mapped to this field.
- Lookup: Specifies a list of lookup values that appears in the field for the user to select. The user views the list according to the display type selected.
- Lookup Style: Indicates how many items a user can select for the field when the lookup is executed.
- Width: Defines the width of the field. If you leave the field blank, the field receives the default, which is 30 pixels. The default for date fields is 20 pixels.
- Required in Filter: Specifies that a value is required in the field when a filter request is executed. If you select this check box, enter a value in the Filter Default field.
- Hidden in Filter: Specifies that the field does not display in the filter at runtime, but the default value of the field is included when you execute a filter request. Select the check box to hide the field in the filter.
- Read-Only in Filter: Specifies that the field displays with a default value that you cannot edit. Select the check box to make the field read-only in the filter.
- Hint: Defines a short message of no more than 512 characters that reminds other users of the purpose of the field.
- Tooltip: Provides a short message that displays when the user moves their cursor over the field. 5. Save your changes.
Configure the Filter Portlet Layout
Configure the placement of the fields in the filter portlet. The displayed list order of fields is how the fields appear in the Section view on a portlet page. If the Toolbar view is selected for the filter portlet, the fields display in a different order. The left column is equivalent to the top row and the right column is equivalent to the bottom row on the portlet. The left and right columns represent where the fields display on the portlet page.
Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Open a filter portlet and click the Layout tab. The layout page appears. 3. Click the left or right arrows to move the fields to the Selected (Left Column) or Selected (Right Column) lists. 4. Click the up or down arrows to set the order of appearance in the filter portlet. 5. Complete the following fields:
- Render As Indicates how you want the filter portlet to appear on the published page or dashboard. Select Toolbar or Section. If you select Toolbar, the default filter state is fixed as Expanded.
- Default Filter State Specifies whether the initial display of the filter is expanded or collapsed. 6. Save your changes.
Add a Studio Filter Portlet to a Portlet Page
Use this procedure to add a filter portlet to a page and to map the filter portlet fields to the attributes of other portlets that appear on the page. You can configure a filter portlet to appear on a page in the following ways:
- Standalone filter section for a tabbed or non-tabbed page
- Toolbar section in a tabbed or non-tabbed page

Follow these steps: 1. Open Administration, and from Studio, click Portlet Pages. The portlet pages list page appears. 2. Select a page. If you are adding the filter portlet to a tab, click Tabs, then click the name of the tab in the list to display
the tab's properties page. 3. Click Page Filters. 4. Click Add. 5. Select the check box next to the filter portlet you want to add and click Add. You can add multiple filter portlets to a
page. The page filters list page appears showing the filter portlet name in the list. 6. Make the following adjustments.
- (Optional) If you are adding the filter portlet to pages and you want the values in the filter to persist when you move from one page to another, select the Persist check box. Filter values will persist only across pages that use the same filter portlet.
- (Optional) Select the Default option for the desired page filter default. The first filter that is published to the page is the page filter default unless a selection indicates otherwise.
7. Click the Filter Mappings icon next to the filter portlet name. The mapping page appears. This page shows the filter portlet fields that are listed under each portlet on the page and allows you to map to corresponding portlet fields.
8. In the Mapping Field drop-down, for each entry, select the portlet attribute that you want to map to the filter portlet field. The values that appear in the drop-down are filtered based on the data type of the filter portlet field being mapped.
- If you are mapping lookup attributes, the filter portlet field and the portlet attribute must have the same lookup ID.
- If a filter portlet field is not mapped to at least one portlet attribute on the page, the field does not display in the filter portlet.
- If a filter portlet does not have at least one field that is mapped, the filter portlet does not display on the page.
9. Select the Hide If Empty check box to hide the portlet if a value is not entered in the corresponding filter portlet field during a filter request. If you select the check box for multiple attributes in a portlet, a blank corresponding filter portlet field for any of the attributes causes the portlet not to appear.
10. Save your changes.
View the Portlet Pages for a Filter Portlet Use this procedure to view the list of portlet pages that contain a specific filter portlet. Follow these steps: 1. Open Administration, and from Studio, click Portlets. The portlet list page appears. 2. Select a filter portlet. The properties page appears. 3. Click the Portlet Pages tab.
Develop HTML Portlets You can use an HTML portlet to display web or network data including the following examples:
- News from a company intranet site
- Corporate telephone information
- Portions of external web sites
- A pre-recorded message
TIP
- Static Data: The primary purpose of HTML portlets is to display static data.
- No Custom Javascript: Do not introduce your own embedded Javascript inside HTML portlets. The injection
of custom code with redirected links or references to dynamic external resources is not supported.
- Do not reload the current page: Clarity is a single-page Ajax-style application. Reloading the page such as
setting window.location.href in Javascript. is not optimal and can result in loss of application state data.
- Not Supported in All Environments: HTML portlets are not supported in FedRAMP environments.
- Test Your CSS: Always test and verify the compatibility of your CSS style names.
- Avoid Weak Security Syntax: For security, the application does not allow you to use the following syntax
inside an HTML portlet script:
- alert|eval|expression|prompt|confirm)[\r\n\s]*\((.*?)\)
- javascript|vbscript)[\r\n\s]*:
- document.write
- </script[\r\n\s]*>
- <base[^>]*href[\s]*=[^>]*>
- <script(.*?)>
- No Comments: Do not use <!-- or --> to include comments. For example, in the following image, remove all of the red lines:
Create an HTML Portlet in Studio Use this procedure to create an HTML portlet. Follow these steps: 1. Click Administration, Studio, Portlets. 2. Click New and select HTML Portlet. 3. Complete the following fields:
- Portlet Name: Defines the name of the portlet. This name appears on the title bar of the portlet and in the list of available portlets. Required: Yes
- Portlet ID: Defines a unique alphanumeric identifier for the portlet. Required: Yes
- Content Source: Specifies where the data that appears in a portlet or portlet page originates. Default: Customer
- Category: Specifies the general area on which the portlet reports data.
- Description: Defines the purpose of the item being created and provides any relevant information.
- Active: Specifies whether the portlet is active and users can see the portlet. You can edit inactive portlets and
activate them later. Default: Selected
- Instance Type: Specifies the type of page the portlet can be placed on. If you select General for this field, the
portlet can be placed on any page. Values: Department, General, Location, Standard Rule, Portfolio, and Project Default: Department Required: Yes
- HTML Code : Defines the HTML you want to display in the portlet. Required: Yes 4. Save your changes.
Develop Interactive Portlets (Legacy Feature) Use an interactive portlet to display robust Xcelsius visualizations of your project and portfolio data. An Xcelsius developer exports their visualization as a vector-based Adobe Flash (.SWF) file. As a Classic PPM Studio developer, you can import the visualization into an interactive portlet. Global and object parameters with associated Flash variables create contextaware visualizations and establish secure data transfer. Use interactive portlets to:
- Perform what-if analyses
- Set up alerts
- Drill down to more detailed information
- Mouseover areas to view more information After your Xcelsius visualizations are imported into the interactive portlets, associate them with objects, such as the Project object or Resource object. You can make Xcelsius visualizations available on object pages. Users can add interactive portlets and personalize pages including their Overview page.
NOTE Interactive portlets are not supported in release 14.4 or newer. As an existing customer on a previous release, you might already have Xcelsius software licensed and installed. However, Xcelsius Designer and other Business Objects products are no longer available or supported by CA Technologies. This software is not available to new customers who are installing for the first time. All customers can take advantage of the new Advanced Reporting features.
Create an Interactive Portlet in Studio Use this procedure to create an interactive portlet and import the Xcelsius visualization. Before you start, create the Xcelsius visualization and export it to the Flash (.SWF) format. Follow these steps: 1. Open Administration, and from Studio, click Portlets. 2. Click New and select Interactive Portlet. 3. Complete the following fields:
- Portlet Name: Defines the name of the portlet. This name appears on the title bar of the portlet and in the list of available portlets. Required: Yes
- Portlet ID: Defines a unique alphanumeric identifier for the portlet. Required: Yes
- Content Source: Specifies where the data that appears in a portlet or portlet page originates. Default: Customer
- Category: Specifies the general area on which the portlet reports data.
- Description: Defines the purpose of the portlet and provides any relevant information.
- Active: Specifies whether the portlet is active and users can see the portlet. You can edit inactive portlets and
activate them later. Default: Selected
- Instance Type: Specifies the type of page the portlet can be placed on. If you select General for this field, the
portlet can be placed on any page. Values: Department, General, Location, Standard Rule, Portfolio, and Project Default: Department Required: Yes
- Dashboard File (.swf): Specifies the Flash (.SWF) file used as the data source for the interactive portlet. Add the file using the Upload SWF icon. Do not enter or copy the file path. Required: Yes 4. Save your changes. The Xcelsius visualization is imported into the interactive portlet.
Create an Object or Global Parameter for an Interactive Portlet
Interactive portlet object parameters or global parameters define the data that is exchanged between the application and the Xcelsius visualization. Your administrator defines the Flash variables in Xcelsius while designing the visualization. The Flash variables allow the visualization to accept data. You use the Flash variable name when you create the interactive portlet.
Before you can create object or global parameters, your administrator must first create the Xcelsius visualization and the required Flash variables and you must create the interactive portlet.
WARNING You can delete object and global parameters from the parameters list page. Use care. Deleting global and object parameters can cause data instability in the Xcelsius visualization.
Follow these steps:
1. Open the interactive portlet. 2. Click Parameters. 3. Click New and select either Object Parameter or Global Parameter. 4. Complete the following required fields:
- Global Parameter: (Global Parameter only) Specifies the global parameter. Use this field to map the name you used to define the Flash variable in Xcelsius to this global parameter. Values: Clarity (formerly Clarity) Session ID in SOAP Header, Clarity User Internal ID, Clarity User Name, Clarity Web Service URL, and Language
- Object: (Object Parameter only) Displays the name of the object to which this object parameter is associated. Default: Department
- Field: (Object Parameter only) Specifies the field name. Values: The values displayed are associated with the selected object.
- Flash Variable Name: Defines the name for the flash variable. This name must be the same as the Flash Variable Name associated with the visualization.
5. (Optional) In the Description field, enter no more than 240 characters to describe the parameter. 6. Save your changes.
Portlet Configuration
After you design a portlet, perform one or more post-design configuration tasks.

Add a Portlet to a Page
Add the portlet to a page so that it can be placed into the menus and viewed in the product. For example, you can add a portlet page to serve as a dashboard for several project-level portlets.
Follow these steps:
1. Open Administration, and from Studio, click Portlet Pages. 2. Click New. 3. Complete the information on the page.
- Content Source: Identifies where the content for the portlet originates.
- Type: Specifies the type of page you want to create. Select Page with Tabs to create a tabbed page or Page
without Tabs to create a single page. You can also select default portlet pages for master objects and custom objects.
- Layout: Specifies how portlets added to a page or a tab appear. The number of columns indicates the number of portlets for each row and the percentage of the page that is given to each portlet. The Row layout can have one to three portlets in a row with equal space provided for each portlet.
- Personalizable: Specifies if a user can make personal changes to a page or a tab. Only the user who changes the page or tab sees the changes. 4. Click Save and Continue. The properties page for the portlet page appears. 5. Click Content. 6. Click Add. 7. Select the portlet to add and click Add. 8. Click Layout. 9. Use the arrows to move the portlet to the appropriate column on the page. If you have multiple portlets to lay out on the page, use the arrows to order the portlets in the columns. 10. Save your changes. 11. Add the page to the main menu or the actions menu.
Assign User Access to a Portlet
You can restrict access to portlets for individual users, groups, or OBS units. You can assign restrictions that prevent users from adding portlets to their personal pages. If a user has access to a page, they can view all the portlets on the page.
As an administrator, you have different access to user portlets based on where you are in the application. In Studio, you can view all user portlets, make changes to the portlets, and publish the changes. In the application, you can view only the portlets that you created or portlets that are shared.
Assign access for users so that they can see one or more portlets and the content that appears inside them. For example, if you create a portlet to show project data, provide access for users to see the portlet and the project data. You can assign access in the following ways:
- Assign the global access right Portlet - Viewer - All to let users view all portlets in the product.
- Assign the access right to view a specific portlet only.
To assign individual users access to a specific portlet, complete this procedure. You can also assign access by group or OBS unit.
Follow these steps:
1. Open Administration, and from Studio, click Portlets. 2. Open the portlet. 3. Click the Access to this Portlet tab and select one of the following options:
- Full View
- Resource
- Group
- OBS Unit 4. Click Add. 5. Select the rights that you want to enable:
- Portlet - Edit: Allows a user to edit and view the definition of a portlet.
- Portlet - View: Allows a user to view a portlet in the application.
- Portlet Definition Editor: Allows a user to view and edit the definition of a portlet. This right is dependent on the
Administration - Studio right. 6. Click Add and Continue. A list of resources, groups, or OBS units appear.
NOTE Click the + icon to expand an OBS unit to see child OBS units. 7. Select the check box next to each resource, group, or OBS unit to be granted access rights. 8. (OBS units only) For each OBS unit, select one of the following OBS association modes in the Default Association Mode field:
- Unit and ancestors, grants rights to the OBS unit and all of its parent OBS units.
- Unit and descendants, grants rights to the OBS unit and all of its child OBS units.
- Unit, descendants, and ancestors, grants rights to the OBS unit and all of its parent and child OBS units.
- Unit only, grants rights to the OBS unit only, not to any parent or child. 9. Click Add. 10. Select one or more users, groups, or units and click Add. If you have a long list of users to add, click Add and Select More. 11. Save your changes.
Test the Portlet in the Application
Test the new portlet by viewing it in the user interface.
Follow these steps:
1. Log in as a user with permissions that represent the target users of the portlet. 2. Verify that the data in the portlet is accurate and meaningful to users. 3. Verify that the filter is useful and allows users to adjust what is in the portlet. 4. If changes are required, log in as a developer. 5. Open the portlet and make the appropriate changes to the layout or appearance. When the portlet appears as you
intended, you have successfully created and displayed the portlet.
Static lookups that you configure with the Pull-Down display type can automatically change to Browse. This change in display type improves performance and usability. This automatic change in appearance only occurs when all of the following conditions exist:
- You develop an editable list view. This behavior does not occur on other types of views.
- Your list view contains a static lookup and the Display Type field is set to the Pull-Down value.
- Your lookup contained up to 20 original values.
- You add at least one additional lookup value.
When the number of possible lookup values exceeds 20, the display type changes from Pull-Down changes to Browse. The display type for OBS, Dynamic, and Dependent lookups on editable list views is always Browse. If you add a lookup attribute to a properties view, we recommend the Pull-Down display type for 20 or fewer lookup values. When the number of potential lookup values exceeds 20, we recommend the Browse display type. You can also manually change the display type.

Publish Changes to a Portlet
You can update portlets for users by publishing the portlet. When you publish changes to a portlet, the new portlet overwrites the existing portlet. Publishing overwrites the following changes:
- Changes a user has created by personalizing the portlet
- Changes an administrator has created and previously published.
If you are using partitions, the new published portlet affects only the partition you have selected.
During a release upgrade or when installing add-ins, personalized user portlets are not upgraded. To keep users current, you may want to publish any new portlets that are provided by an upgrade or from an add-in.
Follow these steps:
1. Click Administration, Studio, Portlets. 2. Select the check box next to the name of the portlet you want to publish, and click Publish. The changes are
published to future instances of the portlet as seen by users.
Restrict User Configuration of Portlets
When you create a portlet, users can configure the portlet by default. You can restrict the ability to configure an individual portlet grid, graph, or filter view.
Follow these steps:
1. In Studio, open a portlet. 2. For a grid portlet, open the List Column Section menu, and click Options. 3. For a chart portlet, open the Chart Section menu, click Options. 4. On the options page for the portlet, clear one or both of the following check boxes:
- Allow Configuration: When this option is turned off for a portlet, users cannot see the Configure icon in the Options toolbar. When turned on, this option allows users to:
- Configure column layout
- Configure column names and display properties
- Configure display options
- Add aggregation rows
- Allow Label Configuration: This option works with the Allow Configuration option. If the Allow Configuration option is selected and the Allow Label Configuration option is cleared, field labels become unavailable for configuration while other items can still be configured. Specifically, this option determines whether the following items can be edited:
- List column fields
- List column field labels
- List filter fields
- List filter field properties (filter label field only)
- Graph options (metrics section for 1D bar, column, and line graphs)
- Graph filter fields
- Graph filter field properties (filter label field only)
5. Save your changes.
Set a System View for a Portlet
You can design a grid or chart portlet that has the same view for all users.
Follow these steps:
1. In Studio, open the portlet.


2. For a grid portlet, open the List Column Section menu, and click Options. 3. For a chart portlet, open the Chart Section menu, and click Options. 4. On the options page for the portlet, clear the Allow Configuration check box. 5. Click Save. 6. Click General. 7. Click Publish.


Relabel Attribute Names for User Portlet Data Providers
When a user creates a portlet to be used in a dashboard, the user must select a data provider. Query data providers can be used to provide information to user portlets for dashboards. You can prohibit the use of a query data provider by clearing the Available for User Portlets check box on the query properties page.
When users select a data provider for a user portlet, the attributes for each provider appear to help them select the correct provider. You can provide more user-friendly attribute names to help users select the correct data provider.
Follow these steps:
1. Open Administration, and from Studio, click Queries. 2. Select a query. 3. Click Attributes. 4. Click the name of the attribute you want to relabel. 5. Click the Translate icon next to the Attribute Name field. 6. Enter the name that you want to appear for users in the data provider attribute list. 7. Save your changes.

Clarity Studio Pages and Tabs
Portlets are small windows or snapshots into your data such as grids or charts. While portlets do not replace reports, they can be considered mini-reports. You can arrange portlets on pages with or without tabs.
- Portlet Page Prerequisites
- Create a Portlet Page with Tabs
- Configure a Tab
- Create a Portlet Page Without Tabs
- Configure a Portlet Page Without Tabs
- Set Up Link Parameters for the Portlet Page
- Assign User Access to the Portlet Page
- Add a Portlet Page to Menu Manager
- Configure a Portlet Page Tab Set
- Personal Portlets and Dashboards
A portlet page is composed of a set of portlets that appear for users with the appropriate access rights. You can configure a portlet page to allow users to personalize the page as follows:
- Decide which portlets to show or hide on the page.
- Decide where to show the portlets on the page.
Create a portlet page to collect and update information for users.
- Create a portlet page without tabs to display a single page containing a few portlets. For example, one page with two portlets that display agile retrospective metrics for projects.
- Create a portlet page with tabs to display a wide range of project information . For example, one page with separate tabs for Team, Tasks, and Financial Plans. Each tab collects a specific type of information about projects.


The following diagram describes how to create a portlet page:
> [!INFO]
> Figure 42: This image shows the steps for creating a portlet page with or without tabs


Portlet Page Prerequisites You can create portlet pages for master objects (for example, Project) or custom objects. You can add portlets on a Dashboard tab or any custom tab you create when creating a portlet page. Consider the following planning information before creating a portlet page:
- Decide whether the new page contains tabs.
- Pages without tabs display all of the content by organizing it on a single page. Use a portlet page without tabs when the amount of content is minimal and you do not need to group information under different tabs. The System Options page under the Administration menu is a good example of a portlet page without tabs. The page simply groups all of the information under different sections on the same page.
- Pages with tabs help you group several related pages of information under a single menu item. When you click a project instance from the Projects list page, the resulting page is an example of a portlet page with tabs. The following tabs help group various project information on the page:
- Team: Groups all project team-related information.
- Tasks: Groups all tasks and assignments information.
- Financial Plans: Groups all types of financial plans (cost plans, budgets plans, and benefit plans).
- Determine how a page is used to decide where to place it in the main menu. Place end-user pages in the Home menu. Place administrative pages in the Administration menu.
- Decide how much control users have for the page. You can control whether a page can be personalized so that users can add portlets and can create additional tabs. Once a user personalizes a page, changes made in Studio (except the addition of required portlets) do not affect those changes. To ensure that all users see the same page and any future changes, disable the Personalizable option.
- Verify that the portlets exist that you want to display on the portlet page as content. Also verify that the page filters exist that you want to display on the portlet page to allow users to filter the information on the page. This article does not explain how to create portlets and page filters.
- Verify that any user object actions exist that you add to the portlet page. For example, the project properties page includes the following user object actions by default:
- Add to My Projects
- Copy Project from Template Without these object actions, users have to navigate to the page that has the Add to My Projects or the Copy Project from Template option to perform these actions. Adding object actions to a page allows users to place the actions where it is most appropriate. They do not need to navigate away from the page they are working on.
- Assign the following access rights to users so they can access the portlet page and portlets:
- Portlet - View
- Portlet - Navigate
- Page - View
Create a Portlet Page with Tabs
Create a portlet page with tabs to group several related pages under a menu item. For example, the Team tab on the project page groups staff-related information; the Task tab groups all project tasks. If you have numerous portlets, create a portlet page with tabs to help improve the organization of the information. For example, the project properties page is a portlet page with tabs that groups various project information under tabs such as Team, Task, or Financial Plans.
Follow these steps:
1. Open Administration, and from Studio, click Portlet Pages. 2. Click New. 3. Complete the requested information. The following fields require explanation:
- Content Source: Specifies where the data that appears in a portlet or portlet page originates. Default: Customer
- Type: Specifies the type of page you want to create. Select Page with Tabs to create a portlet page with tabs.
- Layout: Specifies how portlets added to a page or a tab appear. The number of columns indicates the number of
portlets for each row and the percentage of the page that is given to each portlet. The Row layout can have one to three portlets in a row with equal space provided for each portlet.
- Personalizable: Specifies if a user can make personal changes to a page or a tab. Only the user who changes the page or tab sees the changes. 4. Click Save and Continue. The OBS section appears. 5. If you are using OBS, select an OBS. 6. To create additional tabs after the initial default tab, enable the Allow End Users to Add Tabs option. 7. Click Save and Continue. 8. Click the Tabs tab. 9. Click New. 10. Enter a name, ID, content source, and layout for the tab. 11. To allow users to link to the tab from another page, click the Linkable option.


12. Click Save and Return to create additional tabs.


Configure a Tab
For a portlet page with tabs, you can configure the tabs to enhance them in the following ways:
- Add a link parameter to create a link to the tab.
- Add existing portlets to the tab.
- Add a filter to filter information on the tab.
- Design the portlet layout.
For example, to create a portlet page with tabs displaying project retrospective information using Project, Release, and Retrospective tabs, configure the Retrospective as follows:
- Add a link to the tab from the Project tab.
- Add existing Release and Project portlets to the tab.
- Add a filter to allow users to filter on specific project retrospective fields.
- Arrange the portlets on the tab so that content is evenly distributed.
Follow these steps:
1. Open Administration, and from Studio, click Portlet Pages. 2. Click the name of the portlet page. 3. Click Tabs. 4. Click the name of the tab to configure. 5. (Optional) Complete the following steps to add a linkable parameter:
a. Click Link Parameters. b. Click New and complete the requested information. c. Click Save and Return. 6. (Optional) Complete the following steps to add portlets: a. Click Content. b. Click Add. c. Select the portlets that you want to add and click Add. 7. (Optional). Complete the following steps to add a filter: a. Click Page Filters. b. Click Add. c. Select the appropriate page filter and click Add. 8. (Optional) Complete the following steps to design the portlet layout: a. Click Layout. b. Place the portlets in the desired columns by selecting them and moving them to the appropriate columns. c. Change the number of columns using the Layout field at the top of the page. d. Click Save and Return.

Create a Portlet Page Without Tabs
Create a portlet page without tabs to organize the content that you want to display to the users on a single page. The content is organized across one or more portlets on the same page. For example, the License Information page in the Administration menu is a portlet page without tabs.
Follow these steps:
1. Open Administration, and from Studio, click Portlet Pages. 2. Click New.


3. Complete the requested information. The following fields require explanation:
- Content Source: Specifies where the data that appears in a portlet or portlet page originates. Default: Customer
- Type: Specifies the type of page you want to create. Select Page without Tabs to create a single page.
- Layout: Specifies how portlets added to a page or a tab appear. The number of columns indicates the number of portlets for each row and the percentage of the page that is given to each portlet. The Row layout can have one to three portlets in a row with equal space provided for each portlet.
- Personalizable: Specifies if a user can make personal changes to a page or a tab. Only the user who changes the page or tab sees the changes.
4. Click Save and Continue. The Linkable option and the OBS section appear. 5. Specify if you want users to be able to link to the portlet page from another page. If you select the Linkable option, the
Link Parameters tab activates and you can set up link parameters for the page. 6. If you are using an OBS, complete the following fields:
- Department Specifies the OBS department that is associated with the portlet page.
- Location Specifies the OBS location that is associated with the portlet page. 7. Save your changes.
Configure a Portlet Page Without Tabs
Configure the portlet page without tabs so that you can add existing portlets and can design their layout. You can also add an optional page filter. For example, to create a portlet page without tabs that displays project retrospective information, configure the page as follows:
- Add portlets to the page displaying content about projects, releases, and retrospectives.
- Add a filter to allow users to filter on specific project retrospective fields.
- Arrange the portlets on the page so that content is evenly distributed.
Follow these steps:
1. Open Administration, and from Studio, click Portlet Pages. 2. Click the name of the portlet page you want to configure. 3. Click Content. 4. Click Add. 5. Select the portlets that you want to add and click Add. The portlets appear in the content list. 6. Click Save and Continue. The Page Filters tab activates, and the list of page filters appears. 7. Click Add. 8. Select the appropriate filter for the page and click Add. The filter is added to the list of filters. 9. Click Save and Continue. The Layout tab activates, and the layout page appears. Any content portlets and filter
portlets you selected are listed in the layout columns. 10. Place the portlets in the columns that you want them by selecting and moving them to the appropriate columns. You
can change the column layout using the Layout field at the top of the page. 11. Click Save and Return.
Set Up Link Parameters for the Portlet Page
If you want users to be able to link to the portlet page, assign a link parameter that users can see in a selection list.
Set up link parameters so users can link to the portlet page from another page in the product. For example, if you create a resource status portlet page, you can create a link to that portlet page from the project team staff page.
Follow these steps:
1. Open Administration, and from Studio, click Portlet Pages. 2. Click the name of the portlet page.


3. Click Link Parameters. 4. Click New and complete the requested information. 5. Click Save and Return.


Assign User Access to the Portlet Page
Assign access to the portlet page so that users can see the portlet page containing the tabs and portlets. For example, if you assign access, the user can see a link to the portlet page in menus. The user can also open the page and can view the page contents. You can assign access in the following ways:
- Assign the global access right Page - Viewer - All to let users view all pages in the product.
- Assign instance-level access right to view a specific page only.
NOTE Users must have access rights to the data and the portlet page.
The following procedure explains how to assign individual users access to a specific page. You can also assign access by group or OBS unit. For more information about assigning access by group or OBS unit, see Administrating.
Follow these steps:
1. Open Administration, and from Studio, click Portlet Pages. 2. Click the name of the portlet page. 3. Open the Access to this Page menu and click Resource. 4. Click Add. The first step of a two-step process appears. 5. Select Page - View and click Add and Continue. If you want users to be able to edit the page, select all access rights.
The second step of the two-step process appears. 6. Select the names of the users to whom you want to assign access and click Add. If you have a long list of users to
add, click Add and Select More. 7. Click Return when you are done.

Add a Portlet Page to Menu Manager
Add the portlet page to the menu manager so users can access it using the main menu. For example, if you create a portlet page named Project Retrospective, add the portlet page to the Home menu under the Portfolio Management menu.
Follow these steps:
1. Open Administration, and from Studio, click Menu Manager. 2. Click a menu. The menu hierarchy appears. 3. Click Add. 4. Select Page Link and click Next. 5. Complete the page:
- Link Name: Defines the label for the page link that appears in the menu.
- Page Name: Specifies the page that appears when the link is clicked.
- Parent Menu Item: Specifies the menu section in which the link appears. 6. Click Save and Return. 7. Open Home, and click the link name under the parent menu item you specified. For example, click Retrospective from Portfolio Management.
NOTE If you do not see your changes reflected in the menu, click Refresh. 8. Verify that the portlet page that appears includes the appropriate portlets with the correct configurations.


Configure a Portlet Page Tab Set You can configure how a tab set for a portlet page appears to users. The following table shows the tab set configuration actions and the tabbed portlet pages that allow the actions.

Portlet page: Custom tabbed portlet page Default portlet page (all objects)
Project Default Layout page Default portlet page

What you can configure:
- Add or delete custom tabs
- Reorder Tabs
- Add or delete custom tabs
- Reorder Tabs
- Activate or deactivate tabs to control what displays
- Set a default tab to display initially
- Add or delete custom tabs
- Reorder Tabs
- Activate or deactivate tabs to control what displays
- Set a default tab to display initially
- Add object actions to the tab menu

Create a Tab
You can add a tab to the following page types:
- A custom portlet page with the page type Page with Tabs.
- A default layout page for an object; for example, the Project Default Layout page.
Follow these steps:
1. With the portlet page open, click Tabs. 2. Click New. 3. Complete the following fields:
- Tab Name: Defines the name of the tab as it appears to users in the application.
- Tab ID: Defines a unique alphanumeric identifier for the tab.
- Content Source: Specifies where the data that appears in a portlet or portlet page originates. Default: Customer
- Description: Defines the purpose of the item being created and provides any relevant information.
- Layout: Specifies how portlets added to a page or a tab appear. The number of columns indicates the number of
portlets for each row and the percentage of the page that is given to each portlet. The Row layout can have one to three portlets in a row with equal space provided for each portlet.
- Personalizable: Specifies if a user can make personal changes to a page or a tab. Only the user who changes the page or tab sees the changes.
- Linkable: Specifies a tab can be linked to from another location in the application. 4. Save your changes.

Reorder Tabs You can set the order in which tabs display in the application. Some default portlet pages have a set order for tabs and do not permit you to reorder those tabs. You can reorder tabs that you create. Follow these steps: 1. 1. With the tabbed portlet page open, click Tabs.
1. 1. Click Reorder.


1. The Tabs list appears with the tabs in the current order. Any fixed tabs that you cannot reorder are listed above the Tabs list .
2. Select the tabs that you want to move and use the arrow keys to move them into the correct order. 3. Save your changes.
Activate or Deactivate Tabs Deactivate a tab to leave it in the tab list but keep it from displaying to users. You can activate the tab if you want to include it in the application for users in the future. Follow these steps: 1. With the tabbed portlet page open, click Tabs. 2. For each tab, select the Active option to display the tab or clear the check box to hide it. 3. Select the Default option to indicate the tab that is to display initially when the portlet page opens. 4. Save your changes.
Select User Object Actions for a Tab Menu You can select user object actions to appear on the menu that appears for each tab. Follow these steps: 1. With the tabbed portlet page open, click Configure Tabs. 2. Click Actions for the tab you want to configure. 3. In the Default column, select the object actions that you want for the tab menu. 4. Click Save.
Set Multilingual Names for a Portlet Page Tab You can rename any stock or custom tab. Follow these steps: 1. Open Administration, and from Studio, click Portlet Pages. 2. Open the portlet page. 3. Click Tabs. 4. Click the Translate icon next to the name of the tab you want to rename. 5. Enter the new tab name in the appropriate language or languages, and click Save and Return. 6. Click Properties. 7. To make the changes visible to other users, click Publish.
Add Subpages to a Portlet Page Tab Use a custom properties view to display multiple subpages on a custom portlet page tab. The custom properties view can be used for custom objects only, not stock objects. You can display subpage links on the tab as a menu option or a submenu option The process for displaying multiple subpages on multiple tabs using custom properties views includes the following basic steps. 1. Create a custom properties view. The custom properties view defines a set of subpages and the content that appears
on each subpage. 2. Add subpages to the custom properties view. 3. Define the display of custom subpage links that appear on a custom portlet page tab.

Create a Custom Object Properties View
You can create one or more property views for a custom object on the System partition. The custom object properties view applies to all child partitions.
Only the Layout:Edit option under Setup in the Views definition is available for a custom properties view. You can use the new custom view on a page or tab layout.
NOTE The Copy, View All, and Export to XML options are not available for custom properties pages.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Open a custom object. 3. On the Properties page, click the Views tab. 4. Click New. Enter the name of the new properties view and a unique ID. 5. Click Save. The new properties view is added to the views list page. 6. To use the new view, open Administration, and from Studio, click Portlet Pages. 7. Open the default layout for your custom object and click the Tabs tab. 8. Click New. 9. In the Layout field, select Properties or Subtabs. 10. In the View field, select the custom object view that you created. 11. Click Save and Return. Instances of your custom object data appear on the new tab.
Add a Subpage to a Custom Properties View
You can add five subpages at a time to a custom properties view. The number of subpages you can add to a properties view is unlimited.
The custom properties view applies to custom objects only, not stock objects.
Follow these steps:
1. With the custom object open, click Views. 2. Locate the custom properties view and click [Layout:Edit] in the Setup column. The create page for subpages appears. 3. Enter a name and ID for each subpage you want to create and click Save and Return. The layout page appears
showing the new subpages. 4. Populate the subpages with sections and attributes, and set up display conditions, if needed.
Move a Subpage Between Properties Views
If you have multiple properties views, you can move subpages from one properties view to another. You can change which view data appears for a tab. You can move subpages between stock and custom properties views.
NOTE If a subpage is associated with a subobject, it cannot be deleted from a properties view. In this case, you can move the subpage to another properties view. A custom properties view applies to custom objects only, not stock objects.
Follow these steps:
1. With the custom object open, click Views. 2. Locate the custom properties view and click [Layout:Edit] in the Setup column. 3. Select the check box next to the subpages you want to move to another properties view, and click Move. 4. Select the option next to the properties view you want to move the subpages to, and click Move. The layout page
reappears showing the subpage list without the moved subpages.

5. Click Return. The views list page appears. 6. Click [Layout: Edit] in the row of the properties set (view) where you moved the subpages. The moved subpages are
listed in the layout page of the new view.
Delete a Custom Properties View The following rules apply when deleting a custom properties view:
- Subpages linked to a subobject associated with the custom properties view must be moved to another properties view
before the custom properties view can be deleted. Subpages that are linked to a subobject cannot be deleted.
- You cannot delete a custom properties view when it is associated with a custom tab. After you remove all associations,
a check box appears that allows you to select the view for deletion.
- You can only delete a custom properties view from the System partition.
- When you delete a custom properties view from the System partition, the view is also deleted from child partitions.
NOTE A custom properties view applies to custom objects only, not stock objects. Follow these steps: 1. With the custom object open, click Views. 2. Select the check box for the custom properties view, and click Delete.
Restore Defaults for a Custom Properties View You can restore the defaults for a custom view as you can for other views. Click Restore Defaults.
- Restoring the defaults reinstates the original view properties for all users.
- Any personalized user changes to the view are overwritten with the defaults.
- If the custom properties view is associated with a portlet page tab, the Restore Defaults button does not appear.
Display Custom Subpage Links on a Tab For a custom object, you can display links for custom subpages on a tab in the tab menu or as a submenu item. Follow these steps: 1. Create custom object views and subpages. 2. Verify that the associated page for a tab has a Type value that is equal to the custom object. The Type value is
assigned when a page is created. If the Type value for the page you are adding subpages to is not equal to the object on which you created the custom views, continue with the following steps. 3. Create a new page. 4. Set the Type value equal to the custom object.
Display Custom Subpage Links as Menu Options This procedure explains how to display a link for a custom subpage in the menu for a tab. This procedure assumes:
- The subpage links are being added to a custom object default portlet page.
- The custom object has had a custom property view added. Follow these steps: 1. Open Administration, and from Studio, click Portlet Pages. 2. Click the name of the default custom portlet page. 3. Click Tabs. 4. Click New.

5. Complete the following fields:
- Tab Name: Defines the name of the tab as it appears to users in the application.
- Tab ID: Defines a unique alphanumeric identifier for the tab.
- Content Source: Specifies where the data that appears in a portlet or portlet page originates. Default: Customer
6. In the Layout field, select Properties. The View field appears directly below the Layout field. 7. In the View field, select the custom view with subpages. For information purposes, the individual subpages are listed
out for each view with the subpages in parentheses. The subpage that you select is the default that appears for the view when you click the tab. 8. Save your changes. 9. View the changes in the application.
Display Subpage Links as Submenu Options
This procedure explains how to display a link for a custom subpage in a tab menu. This procedure assumes:
- The subpage links are being added to a custom object default portlet page.
- The custom object has had a custom property view added.
Follow these steps:
1. Click Portlet Pages from the Studio menu. 2. Click the name of the default custom portlet page. 3. Click Tabs. 4. Click New. 5. Complete the following fields:
- Tab Name: Defines the name of the tab as it appears to users in the application.
- Tab ID: Defines a unique alphanumeric identifier for the tab.
- Content Source: Specifies where the data that appears in a portlet or portlet page originates. Default: Customer 6. In the Layout field, select Subtabs. The View field appears directly below the Layout field. 7. In the View field, select the custom view with subpages you want to appear on the tab menu. For information purposes, the individual subpages are listed out for each view with the subpages in parentheses. The subpage you select is the default that displays for the view when you click the tab. 8. Select Save and Continue. The Content tab activates. Use this page to define submenu options. 9. Click New. A new row appears where you can define additional submenu options. 10. Complete the following actions for each submenu you want to add for the tab menu: a. Enter a name in the Subtab field. The name in the subtab field appears as the submenu name in the tab menu. b. Enter a unique identifier in the Subtab field. c. Select a property set (view) in the View (Subpage) field. The property view that you select appears in the submenu
that is defined by the Subtab field. d. Click Save. 11. Click Return. 12. View the changes in the application.
Personal Portlets and Dashboards
Users can create their own portlets and pages in the application using the same functionality that is available in Studio. A personal dashboard is a type of portlet page. An end user can share a dashboard with other end users.
An end user can export all the content of some portlet pages (for example, the Overview page). The export includes any custom tabs added by the end user. The export is limited to pages of type Page with Tabs or Page Without Tabs. The Fit to page option always applies where all portlets for a tab are exported to one page.

TIP Configure the portlet Chart Section and specify Datapoint Labels and Mouseover Labels. These labels and values also appear when exported to Excel or PowerPoint.

Access Rights for Personal Dashboards The following table shows the administrator access rights that are required for personal dashboards.

Access Right Portlet Definition Editor Page Definition Editor

What it does in the application
Lets an administrator edit a portlet. Gives a user manager access to a dashboard.

Scope Global/OBS/Instance Global/OBS/Instance

The following table shows the user access rights required for personal dashboards.

Access Right Dashboard - Navigate
Portlet - Navigate
Dashboard - Create Portlet - Create Portlet - View Page - View

What it does in the application

Scope

Shows the Dashboards link for a user in the Global Home menu.

Shows the Portlets link for a user in the Home menu.

Global

Lets a user create a dashboard.

Global

Lets a user create a portlet.

Global

Lets a user view a portlet.

Global/OBS/Instance

Lets a user view a dashboard.

Global/OBS/Instance

Administrator Access to User Portlets
An administrator has different access to user portlets based on where access is attempted:
- In Classic PPM Studio, an administrator can view all user portlets, make changes to the portlets, and publish the changes.
- In the application, the administrator can view only those portlets the administrator has created or portlets that have been shared.

Personal Dashboard Operations by User Type The following table shows which dashboard functions can be performed by different types of users.

Dashboard Function Share Edit properties Publish Personalize Export

Studio Administrator Yes Yes Yes No No

Dashboard Manager Yes Yes Yes Yes Yes

Dashboard Viewer No No No Yes Yes


Personal Dashboard Properties A dashboard has the following properties:
- The portlet page type is either Page with Tabs or Page Without Tabs.
- The dashboard layout can only be one of the following layouts: Two-column (50-50 percent), two-column (66-34
percent), three-column (25-50-25 percent), or three-column (33-33-33 percent).
- The portlet page template is always Application Page Template. A dashboard has the following options when exported to Excel or PowerPoint:
- Fit to page: Exports all portlets on a tab to a single page.
- One portlet per Slide/Sheet: Exports each portlet to its own page. If both options are selected, this option takes
precedence.
Clarity Studio Menus and Links
Users can navigate using menus and links. You can configure the main menu and the object action menus. You can also create object links to the following types of pages:
- A subpage of the object page.
- A web page that users access by a URL address.
- A properties page of an object instance record. You can use these links internally or from external applications.
- Customize the Actions Menu Using Studio
- Customize the Main Menu Using Studio
- Customize Page Links Using Studio
Customize the Actions Menu Using Studio The Actions menu appears on the list and properties views of most pages. This menu provides quick access to actions that a user can take directly from the page. As a developer, you can modify the list of options that appears by default under the General submenu, or you can create additional submenus with options. The Actions menu is specific to an object. The menu options are actions that you can perform on the object. The menu is controlled from the properties and list views of the object. For example, to add options to the Actions menu for projects, you complete the following tasks:
- Create the options for the Project object in Studio
- Add the options to the Projects list view and properties view The following graphic shows the default Actions menu for a project properties page.

Follow these steps: 1. Review the prerequisites. 2. Create a job option. 3. Create a process option. 4. Create an internal link option. 5. Create an external link option. 6. Add options to the Actions menu:
- Create a submenu.
- Update existing submenus. 7. Test the updates to the Actions menu.
Review the Prerequisites Review and complete the applicable prerequisites in this list:
- Assign the Administration - Studio access right.
- Determine which tasks or locations a user needs access to from the page.
- Determine the next logical location in the product that a user needs after completing tasks on the page.
- Verify that a user has access rights to view the page to which an internal link refers. The option for the link displays
in the Action submenu only when the user has access rights to the target page. Verify that internal links exist and are valid.
- Provide a link to return a user to the source page after viewing an internal destination.
- Verify that users have the appropriate access rights to use options that you create. For example, if you provide a link to a page, a user must have rights to view the page. Assign access rights to the job or process definition for users to run a job or process.
- Jobs and process options must be active.
- You can only map job and process parameters to value attributes inside the partition to which the object view belongs.
- The option for a process appears in the Action submenu only when the user has access rights to start the process.
- Consider the following information as you plan custom options and submenus:
- When you place an option in a submenu in the Actions menu, it is immediately visible to users, even users with
personalized views.
- An option can be placed in a submenu on the Actions menu on any page that corresponds to a view in the object
definition.
- The following page types do not have an Actions menu available:
- Pages that do not have a view.
- Pages that have one or more portlets (for example, dashboards).
- Pages that combine a view and portlets.


Create a Job Option
Create a job option to let a user run a job automatically from the Actions menu. For example, if you add a job option for the Update Earned Value Totals job, a user can run the job directly from the menu. Without the option, the user is required to go to the Jobs option in the Home menu, open the jobs page, and start the job from that location. You provide job parameters when you create the option by mapping them to value attributes on the object instance.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Open the object and click Actions. 3. Click New. 4. Complete the requested information. The following fields require explanation:
- Type: Specifies the type of action. Select Job.
- Select Job: Specifies the job that is launched from the Actions menu by the user.
- Alert users before running the job: Specifies whether the user is alerted before the job runs.
- Scope: Specifies whether an action is global or limited to a specific instance. Values:
- Global: Allows the user to run the action without having to select a specific instance. This option also makes the action available to be added to any view within any object and to the Home menu.
- Instance-specific: Allows the user to select a specific instance before running the action. An instance-specific action can only be added to the views for the object under which the action was created. Instance-specific actions cannot be added to the Home menu.
5. Complete the following fields in the Attribute Mapping section:
- Parameters: Displays the parameter fields that appear when you run an instance-specific action. The parameters vary depending on the action.
- Default Values: Displays the global default values that are entered for parameters of an instance-specific action. You can change the default values for the action.
- Object Attribute Overrides: Specifies the object attributes that can override the default values for instance-specific actions. Within an Object Attribute Overrides field, map the object attributes only to attributes of the same data type as the Parameter field value.
6. Save your changes.

Create a Process Option
Set up a process option to let a user start a process from the Actions menu. For example, if you add a process option to the Actions menu for the Idea Approval process, a user can run the process directly from the Actions menu. The option in the Actions menu keeps the user from leaving the page. Without the option, the user is required to go to the Organizer option in the Home menu, open the processes page, and start the process from that location.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Open the object and click Actions. 3. Click New. 4. Complete the requested information. The following fields require explanation:
- Type: Specifies the type of action. Select Process.
- Alert users before running the process: Specifies whether the user is alerted before the process runs. Select the
check box to alert the user.


5. (Optional) Complete the field in the Define Primary Object section to run this option outside the primary object view. For example, consider the case where you run an option named Approve Risk (where Risk is the primary object) from the Project object view. To set up the option properly, map to an attribute that belongs to the Project object.
6. Save your changes.
Create an Internal Link Option
Create an internal link option to let a user navigate to a specific page from the current page. For example, you can add an option to a project properties page that links to the Knowledge Store page.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Open the object and click Actions. 3. Click New. 4. Complete the requested information. The following fields require explanation:
- Type: Specifies the type of action. Select Internal Link.
- Select Link: Specifies the page that a user opens from the Actions menu. Select the page from the drop-down list.
The list includes all links that are displayed on the Linking tab for the object. 5. Save your changes.
Create an External Link Option
Create an external link to let a user navigate to an external URL outside of the product. The external link object action displays in a pop-up page.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Open the object and click Actions. 3. Click New. 4. Complete the requested information. The following fields require explanation:
- Type: Specifies the type of action. Select External Link.
- Scope: Specifies whether an action is global or limited to a specific instance. Values:
- Global: Allows the user to run the action without having to select a specific instance. This option also makes the action available to be added to any view within any object and to the Home menu.
- Instance-specific: Allows the user to select a specific instance before running the action. An instance-specific action can only be added to the views for the object under which the action was created. Instance-specific actions cannot be added to the Home menu.
- Enter URL: Defines the URL that appears on the Actions menu. For example: https://support.broadcom.com/. 5. If you selected instance-specific for the scope, complete the following fields in the Define URL Arguments section:
- Number of Arguments: Specifies the number of arguments (name+value pairs) to be included as parameters. Select a number to indicate how many name+value pairs that you want to include. The name+value pairs are appended to the end of the URL. Name+value pairs are separated by an ampersand (&). The values are URLencoded when they are appended to the URL.
- Argument #: Indicates the name in the name+value pair that is used as a parameter for an external link option. Enter a name.
- Argument # - Value: Indicates the value in the name+value pair that is used as a parameter for an external link option. Select an option to indicate whether the value is a constant or an instance-specific value, and provide the value. Select an object attribute for the instance-specific value. The attributes listed in the drop-down list are associated with the object on which the option is being created.

6. Save your changes.

Create a Submenu Create submenus on the Actions menu to group menu options. For example, if you have multiple portlets to add as options, you can create a submenu named My Portlets. Place the portlet options together under one submenu as a convenience to users.
Active options and global options that are defined in any object are available for addition to a submenu in an object list or properties view.
NOTE If you want a submenu to appear on the list and the properties view, create a menu for each view.
Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Open the object and click Views. 3. Click Actions Menu in the Setup Column of the appropriate view. 4. Click New. 5. Complete the requested information for the menu name, menu code, and description. 6. Move the appropriate menu options to the Selected Actions list box.
NOTE Use the arrows to place the menu options into the correct order in the Selected Actions list box. 7. Click Save and Return. The new menu is created and appears in the Actions menu list for the view. 8. Click Menu Layout. The list of submenus appears in the order that appears on the Actions menu for the view. 9. Move the submenus into the appropriate order using the arrows. 10. Save your changes.
Update a Submenu Update existing submenus to add or remove options. For example, you can add options to the default General submenu.
Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Open the object and click Views. 3. Click Actions Menu in the Setup Column of the appropriate view. The actions submenu menu list appears. 4. Click the name of the menu you want to update. 5. Update the submenu by moving the appropriate options into the Selected Actions list box. 6. Save your changes.
Verify the Actions Menu Navigate to the page that contains the updated Actions menu and verify the following points:
- Menu options display and launch correctly.
- For missing options, verify that you have the appropriate rights to perform the menu option. For example, the access right to work with processes is required for an option for processes to display.
- For an option that does not launch correctly, verify the properties for the option.
- For a job or process option that does not work, verify the parameter settings by opening the option.
- For an external link that does not work, verify the URL.
- For an internal link that does not work, verify the link settings.
- Submenus display correctly.
- For a missing submenu, verify that you placed the submenu on the correct view.
- If a submenu is not in the correct place, repeat the procedure to determine the submenu location on the Actions
menu. When updates to submenus or options display and start properly, you have successfully customized the Actions menu.
Customize the Main Menu Using Studio To simplify the organization and accessibility of information for users by role, you can configure the Home and Administration menus. You can configure the following changes to these menus:
- Add a link to a page or a user action.
- Add a section.
- Remove and reorder a section or link. To change the Home or Administration menu, use the Menu Manager in Studio.
- To configure the Administration menu, use the Administration Tool menu. For example, you can add a link to the
Create Project page on the Administration menu.
- To configure the Home menu, use the Application menu. For example, you can add a link to the Resource List page on
the Home menu. NOTE You can also use the Favorites menu to store a link to any page for easy access. This article does not describe how to use the Favorites menu. For more information about using the Favorites menu, see Getting Started.
Follow these steps: 1. Review the prerequisites. 2. Add a page link. 3. Add an action link. 4. Add a section. 5. Reorder a section or a link. 6. Remove a section or a link. 7. Verify the menu.
Review the Prerequisites Review and complete the applicable prerequisites in this checklist:
- As an administrator, verify you have the following access rights:
- Administration - Access
- Administration - Studio
- Administration - Partition Models
- Menu Definition Viewer - All
- Determine the menu that you want to customize (Home or Administration).
- Determine how to display the menu item:
- as a section
- as a page link
- as an action link
- Verify that the menu item that you want to add exists.

Add a Page Link Add a link in the Home or Administration menu so that users can access your pages. Use the Administration Tool Menu to manage the Administration menu and the Application Menu to manage the Home menu.
For example, if a project manager accesses the Resource Allocations page regularly, you can add a link to that page on the Home menu. Adding a link to the Resource Allocations page allows the project manager to access this page without navigating through multiple pages.
Follow these steps: 1. Open Administration, and from Studio, click Menu Manager. 2. Click the menu name that you want to configure. The menu hierarchy page appears. 3. Click Add. 4. Select Page Link and click Next. 5. Enter the information for the new page link:
- Link Name : Defines the name of the page link in the menu.
- Page Name : Specifies the target destination page that appears when users click the link from the menu.
- Parent Menu Item: Specifies the source menu section for the new menu link. 6. Save the changes.
NOTE Log out and log in again to view the new menu.
Add an Action Link Add an action link to the menu to access that action from the Home or Administration menu. When you click the link, the associated page to create that action appears.
For example, if a project manager creates action items regularly, you can add a link to the Create Action Item page on the Home menu. Adding a link to the Create Action Item page allows the project manager to access this page without navigating through multiple pages.
Follow these steps: 1. Open Administration, and from Studio, click Menu Manager. 2. Click the menu name that you want to configure. The menu hierarchy page appears. 3. Click Add. 4. Select Action Link and click Next. 5. Complete the requested information. The following fields require explanation:
- Link Name: Defines the name of the link that appears in the menu.
- Action Name: Specifies the action when you click the action link.
- Parent Menu Item: Specifies the parent menu item in which this link appears. For example, if you select Personal,
the action link appears grouped under the Personal menu item in the Home menu. 6. Save your changes.
Add a Section The menus are divided into menu items by section. For example, the Home menu includes the following sections: Personal, Organization, IT Service Management, and so on.
Add a section to add page links and action links as menu items. For example, you can add a section named Current Project for a project in the Home menu. You can then add page and action links associated with the project to this section. Adding this section allows the project manager to access project-related information from the Home menu.


Follow these steps:
1. Open Administration, and from Studio, click Menu Manager. 2. Click the menu name that you want to configure. The menu hierarchy page appears. 3. Click Add. 4. Select Section and click Next. 5. Complete the requested information. 6. Save your changes.


Reorder a Section or a Link
Reorder the sections or links to change the way they appear in the menu. For example, you can reorder the sections in the Administration menu to display Portfolio Management above IT Service Management on the Menu Hierarchy page.
Follow these steps:
1. Open Administration, and from Studio, click Menu Manager. 2. Click the menu name that you want to reorder. 3. Click Reorder. 4. Select the menu item in the list and click the arrows to move the item to a new position. 5. Save your changes.
NOTE If you do not see your changes reflected in the menu, click Refresh.

Remove a Section or a Link
Remove a section or a link if it is no longer needed. For example, you can remove the Current Project sectionyou added after the completion of the project.
You can only remove sections or links that you have created, and not the default sections or links. If you remove a section or a link that a user is viewing, they do not see the change until the next time they log in.
Follow these steps:
1. Open Administration, and from Studio, click Menu Manager. 2. Select the menu on the Menu Manager page. 3. Select the check box next to the section or link that you want to remove, and click Remove. The Confirm Menu Item
Delete page appears. 4. Click Yes.

Verify the Menu Configurations
After configuring the menus, verify your changes to verify they are correct. For example, verify that the Current Projects section is added to the Home menu.
Follow these steps:
1. Log in to Classic PPM. 2. Verify that the link appears in the menu. 3. Click the link to verify that it navigates to the correct page.
After you verify all menu configurations, you have successfully configured the menus.


Customize Page Links Using Studio


Link from an Object Page to a Subpage
You can designate a new page as a subpage. For example, you want only certain users performing a specific task and you want to provide a link only to that subpage.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of an object. 3. Click Linking. 4. Click New and complete the fields:
- Link Name: Defines the label for the page link that appears in the menu.
- Link ID: Defines a unique alphanumeric identifier for the link.
- Description: Defines the purpose of the item being created and provides any relevant information.
- Action: Specifies the page that appears when the link is clicked in the menu. Depending upon the action you
select, you are asked to select values for attributes that the subpage has in common with the object. Both objects must have these values in common for linking to work. 5. Click Save and Return.

Link to a Web Page You can create a link to an external website and place it on the Properties view for an object. Follow these steps: 1. Create a URL Link Attribute. 2. Add Attributes to the Object Properties View.

Create a URL Link Attribute
Create a URL Link attribute to provide links to web pages or virtual attributes.
- A link attribute provides a link to a web page that is outside of the product.
- A virtual attribute references data attributes of items that exist outside of the database. Examples of virtual attributes
include progress bars, Gantt charts, or attributes that display the calculated results for other attributes.
Follow these steps:
1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Attributes. 4. Click New. 5. Enter an attribute name and a unique ID. 6. Set the Data Type field to URL. 7. Complete any of the remaining fields. 8. Save your changes.

Add Attributes to the Object Properties View
Add the attributes to the properties view of the new object so users can complete the following tasks from the object properties page:
- Create an initial instance of the object.
- Modify an instance of the object.


You can configure attribute visibility, location on the page, and layout. Follow these steps: 1. Open Administration, and from Studio, click Objects. 2. Click the name of the object. 3. Click Views. 4. In the Category column, locate the Properties view and click the [Layout:Create] link from the Setup column in that
row. 5. In the property layout, select a section, and click the Properties and Layout icon next to the item. List boxes of
available and selected attributes appear. 6. In the Available list, select the attributes that you want to add and use the arrows to move the attributes into the correct
Selected list. 7. Click Save and Return. 8. Click Return. The list of views appears. 9. In the Category column, locate the Properties view and click the [Layout:Edit] link from the Setup column in that row. 10. Repeat these steps as often as required. 11. Save your changes.
Link to Properties Pages from External Applications You can link to the properties page of an object instance record from external applications. You can use any unique attribute value to identify the object instance and view its properties page. The action is consistent for all objects including stock, custom, and subobjects. The following example URL links to a project stock object:
http://my_ppm.somebiz.com/niku/app?action=odf.customObjectInstance&odf_code=project&unique_code=myproject
- odf_code=project: Defines the stock object ID as defined in the administration pages. In the example, project is the code for the Project stock object.
- unique_code=myproject: Determines how the object instance is retrieved. The parameter name unique_code identifies the name of the unique attribute on the object which in turn identifies the object instance that you want to reference. The parameter name you use here depends solely on the object that you want to reference as identified by the odf_code parameter. The object is Project, and unique_code is used to identify a project instance with the unique_code value of myproject.
The following example URL links to a business workflow custom object:
http://my_ppm.somebiz.com/niku/app?action=odf.customObjectInstance&odf_code=custom_workflow&release=1.0.1A
- odf_code=custom_workflow: Specifies the custom object definition ID as defined in the Studio object administration pages. In this example, custom_workflow is the name for the Custom Workflow custom object.
- release=1.0.1A: Defines a custom string attribute release with a value of 1.0.1A for this instance of a custom object custom_workflow.
URLs with properly escaped or coded parameter values are also valid. For example, if you use the attribute name with the value My Custom Page, the URL is constructed as follows:
...name=My%20Custom%20Page
Add an Object Action Link to the Home Menu You can create a link that performs a specific action and add it to the main menu.

Follow these steps: 1. Open Administration, and from Studio, click Menu Manager. 2. Click Application Menu. 3. Click Add. 4. Select Action Link and click Next. 5. Complete the fields:
- Link Name: Defines the name of the link for the action. The link name is the label that displays in the menu.
- Description: Defines the purpose of the link.
- Action Name: Specifies the action that occurs when the link is clicked in the menu.
- Parent Menu Item: Specifies the section in which the link appears. 6. Click Save and Return.
Clarity Studio NSQL Queries
Before you create a portlet to extract and display data, write a query that defines the data. Leverage the Classic PPM data model and its primary database tables to build NSQL queries and lookups that extract data. Knowledge of SQL is not required to work in Studio, but some familiarity is helpful in setting up and managing data.
Beginning with Classic PPM 15.3, you can define dynamic lookups against the data warehouse and in 15.4, you can now define NSQL queries for portlets against the data warehouse.
Your NSQL queries are read-only operations; they do not change data, they only retrieve it. Anything in the database can be used to call stored procedures. When you define an NSQL query, identify the query segments and designate them as metric values, dimensions, dimension properties, or parameters. Because the queries are not directly associated with a single portlet, the same query can be used to produce data for multiple portlets. All these terms, and the overall query definition process, are described in the following sections.
- NSQL Syntax
- User-Defined NSQL Constructs
- Advanced NSQL Construct Examples
- Dynamic NSQL Query Lookups
- Hierarchical NSQL Queries
- Create a Simple NSQL Query
- The STRING_LIST NSQL Construct
- Example: STRING_LIST
- Example: STRING_INLINE_LIST
- Row Limit for Studio NSQL Queries
- Row Limit for Large Queries with Aggregated Calculations
- NSQL Queries Against the Data Warehouse
- NSQL Troubleshooting and Tips
NSQL Syntax The main NSQL keywords are the same as standard SQL keywords.
SELECT The SELECT statement retrieves column data from tables. NSQL statements fail with an error message when a query statement does not start with @SELECT.

FROM The FROM clause is a standard SQL statement. It identifies the required tables and includes tables that contain the fields in the SELECT statement lists and any additional required tables.
SELECT @Select:DIM:USER_DEF:IMPLIED:PRJ:P.ID:ProjectID@, @Select:DIM_PROP:IMPLIED:PRJ:P.Name:ProjectName@
FROM SRM_PROJECTS P
------------------------------------------------------------SELECT
@Select:DIM:USER_DEF:IMPLIED:PRJ:SRM_PROJECTS.ID:ProjectID@, @Select:DIM_PROP:IMPLIED:PRJ:SRM_Projects.Start:ProjectStart@, @Select:DIM:USER_DEF:IMPLIED:RES:R.Unique_Name:ResourceID@, @Select:DIM_PROP:IMPLIED:RES:R.Full_Name:ResourceName@ FROM SRM_PROJECTS, SRM_RESOURCES, PRTEAM

WHERE
The WHERE statement filters data returned by a query to be used on portlets. NSQL follows the same syntax with one exception, each WHERE statement must contain a @FILTER@ parameter.

Select

@Select:DIM:USER_DEF:IMPLIED:PRJ:P.ID:ProjectID@,

@Select:DIM_PROP:IMPLIED:PRJ:P.Name:ProjectName@

FROM SRM_PROJECTS P

WHERE @FILTER@ AND P.Is_Active=1

-------------------------------------------------------------------------

Select

@ Select:DIM:USER_DEF:IMPLIED:PRJ:SRM_PROJECTS.ID:ProjectID@,

@Select:DIM_PROP:IMPLIED:PRJ:SRM_Projects.Start:ProjectStart@,

@ Select:DIM:USER_DEF:IMPLIED:RES:R.Unique_Name:ResourceID@,

@Select:DIM_PROP:IMPLIED:RES:R.Full_Name:ResourceName@

FROM

SRM_PROJECTS, SRM_RESOURCES, PRTEAM

WHERE

@FILTER@

AND SRM_PROJECTS.ID=PRTeam.prProjectID

AND SRM_RESOURCES.ID=PRTeam.prResourceID

XPATH (XML Parameter) Construct
Use this syntax construct in the WHERE clause to enable a portlet to retrieve a name-value pair from the XML page URL to a user-defined portlet. The XPATH or XML Parameter construct has the following lowercase format:
@where:param:xml:string:/data/id/@value@
This construct can only be used on a specific portlet instance type, not the General portlet instance type. This construct expects the internal ID value to come from the URL that is displaying the page that contains the portlet. Therefore, the portlet must be created as a specific portlet instance type, such as the Project object portlet instance type to be placed on one of the pages from the project object. If you create and place a General portlet on a general page, there will not be a specific internal ID value in the URL that displays the page containing the portlet.
The following example shows how an NSQL query would use the XPATH construct. The example assumes a portlet is placed on the Project Dashboard. In the example, ID is the name of the parameter that appears in the Project Dashboard that must be used for this particular query to filter the data.


SELECT @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:P.ID:PID@, @SELECT:DIM_PROP:USER_DEF:IMPLIED:PROJECT:P.UNIQUE_NAME:PNAME@, @SELECT:METRIC:USER_DEF:IMPLIED:COUNT(*):TEAM_COUNT:AGG@ FROM SRM_PROJECTS P, PRTEAM T WHERE P.ID = @where:param:xml:string:/data/id/@value@ AND P.ID = T.PRPROJECTID AND @FILTER@ GROUP BY P.ID, P.UNIQUE_NAME HAVING @HAVING_FILTER@
When using this construct, identify the name-value pair that you want to retrieve from the URL on the page where the portlet is placed. If you do not specify the correct named parameter, the portlet does not generate the expected result set.

GROUP BY and HAVING
The GROUP BY clause is typically used to combine database records with identical values in a specified field into a single record, usually for the purposes of calculating some sort of aggregate function. For example, to summarize all hours for each role on each project, group data by project and then by role.
HAVING is typically used only when GROUP BY is used and when the purpose is to filter data based on the fields that are being grouped. In NSQL, HAVING is required whenever a GROUP BY metric is used. The syntax for the HAVING statement is @HAVING_FILTER@.

SELECT

@SELECT:DIM:USER_DEF:IMPLIED:PROJECT:P.PROJECT_CODE:ProjID@,

@SELECT:DIM_PROP:USER_DEF:IMPLIED:PROJECT:P.PROJECT_NAME:ProjName@,

@select:metric:user_def:implied:P.ACTUAL_HOURS:Actuals:agg@

FROM

NBI_PROJECT_CURRENT_FACTS P

WHERE

@FILTER@

HAVING @HAVING_FILTER

-------------------------------------------------------------------------

SELECT

@SELECT:DIM:USER_DEF:IMPLIED:PROJECT:C.MANAGER_LAST_NAME:MANAGER@,

@SELECT:METRIC:USER_DEF:IMPLIED:SUM(C.ACT_HOURS):Actuals:AGG@,

FROM

NBI_PROJECT_CURRENT_FACTS C

WHERE

C.MANAGER_LAST_NAME is not null

AND

@FILTER@

GROUP BY

C.MANAGER_LAST_NAME

HAVING

@HAVING_FILTER@

ORDER BY
Use ORDER BY to specify requirements for sorting by one or more attributes. However, do not use an ORDER BY clause on a dynamic query that is used in a lookup. The Browse Window tab for the dynamic query already includes a Default Sorting Column field.
If your query requires nested sorting by more than one field, the following advanced example offers one coding possibility:
SELECT @select:odf_object_code:type@, @select:name:inv_prefix@, @select:num_inv:inv_count@, @select:sort_string:sort_string@ FROM ( SELECT Row_number() OVER ( ORDER BY inv_data_grouped.sort_string) row_num,
Count(*) OVER ( partition BY inv_data_grouped.total_invs ) total_count, inv_data_grouped.* from (
select i.odf_object_code


, substring(i.NAME,0,4) name , concat(i.odf_object_code, substring(i.NAME,0,4)) sort_string , count(*) num_inv , 'x' total_invs from inv_investments i where 1 = 1 group by i.odf_object_code, substring(i.NAME,0,4) having count(*) > 1 ) inv_data_grouped ) inv_results where 1 = 1 and @FILTER@


User-Defined NSQL Constructs All parts of the SELECT clause must use special NSQL syntax and be specified with an NSQL @SELECT@ construct.

Data Types
The following data types are supported in NSQL. They are valid only as part of the Dimension, Properties, and Metrics columns, and cannot be used as parameters.
- IMPLIED indicates there is no need to qualify a data type; the database uses what it contains. This data type is allowed only in @SELECT...@ constructs because the NSQL engine can retrieve information about the data type from this location only.
- MONEY (<currency column>) specifies that the value is a monetary amount. The column alias in parentheses specifies the currency. The currency must also be part of the SELECT statement.
- STRING specifies a basic string that cannot be manipulated.
- INTEGER represents a whole number that has no fraction or decimal component. The minimum and maximum limits
depend on the capabilities of your database. As an example, use a unique integer data type for an employee ID field.
- FLOAT represents a decimal or floating-point number (for example, 2.375). The minimum and maximum limits, and the
precision of values, depend on the capabilities of your database.
- DATE represents a date and time value. The default data format and supported conversion functions depend on the
capabilities of your database. Typically, the default date-time format is YYYY-MM-DD HH:MM:SS.

Dimensions
A dimension is a grouping of similar data elements from one or more tables. For example, Project may be one dimension and OBS or Tasks could be other dimensions. Dimensions are defined in the SELECT statement using specific syntax. First, you define a key value for the dimension and then you can define the other data elements in the dimension.

Defining the Dimension Column
Each dimension must contain a definition for the dimension column. Typically, this is the table's primary key, though that may not always be the case. Use the following syntax to define a dimension column:
SELECT @SELECT:DIM:USER_DEF:IMPLIED:<Dimension>:<Table.Field>:<label>@
When defining dimensions:
- Each statement must begin and end with the @ character.
- Use IMPLIED if the data type values can be derived from the database and do not need to be further quantified.
- <Dimension> is a user-defined name such as RES.
- <Table.Field> is the table or alias name provided by Classic PPM.
- <label> is a user-defined name or the field that appears in the query.


NOTE Portlets based on a query only work as expected when the dimension is comprised of unique values.
For example:

Select

@Select:DIM:USER_DEF:IMPLIED:Project:SRM_PROJECTS.ID:ProjectID@

Select

@Select:DIM:USER_DEF:IMPLIED:PRJ:P.ID:ProjectID@

Select

@Select:DIM:USER_DEF:IMPLIED:MyDim:SRM_Projects.Name:ProjectName@

Select

@Select:DIM:USER_DEF:IMPLIED:PRJ:SRM_PROJECTS.ID:ProjectID@

@Select:DIM:USER_DEF:IMPLIED:RES:R.Unique_Name:ResourceID@

The following statement defines the resource dimension as the full name of the resource:

SELECT @SELECT:DIM:USER_DEF:IMPLIED:RESOURCE:R.FULL_NAME:RSRC@

The following construct defines the resource dimension as the primary key of the resource table (SRM_RESOURCES). The dimension is comprised of unique values.
- R.ID is the actual column expression.
- RSRC_RD is the alias that the column receives.
The actual SQL for this NSQL expression is as follows:

SELECT R.ID RSRC_ID,

Defining the Dimension Properties Column Once the dimension is defined, all other fields are referred to as dimension properties. The syntax that you use to define the dimension column is the same as the one you use to define the dimension properties column(s) with one exception. Instead of using DIM after the select statement, use DIM_PROP.
SELECT @SELECT:DIM:USER_DEF:IMPLIED:<Dimension>:<Table.Field>:<label>@ @SELECT:DIM_PROP:USER_DEF:IMPLIED:<Dimension>:<Table.Field>:<label>@
When defining the Dimension Properties column:
- Each statement begins and ends with the @ character.
- Use IMPLIED if the data type does not need to be further quantified (than what can be derived from the database).
- <Dimension> must be the same Dimension name as for the Dimension column
- <Table.Field> is the Table or Alias name and field from Classic PPM.
- <label> is the user-defined name or the field that appears in the query.
SELECT @SELECT:DIM_PROP:USER_DEF:IMPLIED:<Dimension>:<Table.Field>:<label>@
Using the sample dimension statement from above, we add the names of the resource and the Manager dimension properties, resulting in the following example:
SELECT @SELECT:DIM:USER_DEF:IMPLIED:RESOURCE:R.ID:RSRC_ID@, @SELECT:DIM_PROP:USER_DEF:IMPLIED:RESOURCE:R.FULL_NAME:RSRC@, @SELECT:DIM_PROP:USER_DEF:IMPLIED:RESOURCE:MR.FULL_NAME:MANAGER@
In the preceding statement, the unique name of the dimension is the same for the three columns. This convention tells the NSQL engine that the three columns belong together.
Metrics Column A metric column is similar to a dimension property in that it belongs in the SELECT section of the query, but metric column values can be totaled on a grid or displayed as value(s) on the chart. Use the following syntax to define a metric column:


@SELECT:METRIC:USER_DEF:IMPLIED:<Table.Field>:<label>:agg@
When defining metric columns:
- Each statement must begin and end with the "@" character.
- The keyword <METRIC> must be present. Do not use the dimension name because metrics cross dimensions.
- Use IMPLIED if the data type does not need to be further quantified (than what can be derived from the database).
- <Table.Field> is the table or alias name provided by Classic PPM.
- <label> is a user-defined name or the field that appears in the query.
- Use agg to allow the metric to be totaled when used in a grid. For example:
@Select:METRIC:USER_DEF:IMPLIED:NBI_PROJECT_CURRENT_FACTS.ACTUAL_HOURS:hrs:agg@ @Select:METRIC:USER_DEF:IMPLIED:PRASSIGNMENT.PRACTSUM/3600:Actuals:agg@, @Select:METRIC:USER_DEF:IMPLIED:PRASSIGNMENT.PRESTSUM/3600:ETC:agg@ @Select:METRIC:USER_DEF:IMPLIED:Count(*):Project_Count:agg@
Specifying a metrics column (or columns) is very similar to specifying a dimension. For example, to add the Project Count (the number of projects this resource has created) metric to the example above:
@SELECT:METRIC:USER_DEF:IMPLIED:COUNT(*):PROJECT_COUNT[:AGG]@
The last segment of the metric SELECT syntax is optional and determines if the column expression uses an aggregation function such as COUNT, AVG, SUM, or is a plain column expression. This is required for Metric Column filters. If the expression uses an aggregate function, the filter is part of the HAVING clause of the query. Otherwise, it becomes part of the WHERE clause. Adding this to the example presented above produces the following query:
SELECT R.ID RSRC_ID, R.FULL_NAME RSRC, MR.FULL_NAME MANAGER, COUNT(*) PROJECT_COUNT
Parameters Parameters are substitution variables that you use in a query to pass values. Parameters only appear in the SELECT list and in the WHERE clause. There are two kinds of parameters:
- User-supplied parameters are used as filters in portlets and are either based on the query or are fixed when the
portlet is created. User-supplied parameters are specified using the following syntax: @SELECT:PARAM:USER_DEF:DATA_TYPE:PARAM_NAME[:ALIAS]@ or, @WHERE:PARAM:USER_DEF:DATA_TYPE:PARAM_NAME@ Where: DATA_TYPE is the data type for the parameter, and PARAM_NAME is the unique identifier for the parameter.
- Built-in parameters, which automatically take their values at run-time based on the current user settings or system context. Built-in parameters are specified using the following syntax:
@SELECT:PARAM:PARAM_IDENTIFIER[:ALIAS]@ or,
@WHERE:PARAM:PARAM_IDENTIFIER@
Where: PARAM_IDENTIFIER is one of the following:
- USER_ID
- USER_NAME
- LANGUAGE
- LOCALE
Example:
i.xdm_priority = prio.id and prio.language_code = @where:param:language@ and i.act_status = s.id and s.language_code = @where:param:language@ and i.xdm_impact = imp.id and imp.language_code = @where:param:language@ and i.xdm_issue_type = isstype.id and isstype.language_code = @where:param:language


Advanced NSQL Construct Examples
NSQL provides several special constructs to make building reports easier. Constructs are available for the following types of data:
- OBS
- Calendar Time
- Fiscal Time
- Security
Advanced NSQL constructs are often datamart-specific in nature. The construct uses the following syntax:
@SELECT:DIM:DATA_MART:construct_type:{entity}@
The DATA_MART part of the NSQL construct is required. The construct type can be OBS, CALENDAR_TIME, or FISCAL_TIME. The entity for the OBS type is either PROJECT or RESOURCE.

General Examples
@SELECT:DIM:DATA_MART:OBS:PROJECT@ @SELECT:DIM:DATA_MART:CALENDAR_TIME@ @SELECT:DIM:DATA_MART:FISCAL_TIME@

OBS Construct Use the OBS construct with datamart tables to retrieve data at an OBS unit level. In the SELECT statement, specify either a project or a resource OBS. In the WHERE statement, specify the datamart table. Use the following syntax for the OBS construct:
@SELECT:DIM:DATA_MART:OBS:{entity}@, @FROM:DIM:DATA_MART:OBS@ @WHERE:DIM:DATA_MART:OBS:datamart_table@ @GROUP_BY:DIM:DATA_MART:OBS@
Set the datamart_table parameter to one of the datamart tables.

OBS Example
SELECT @SELECT:DIM:DATA_MART:OBS:PROJECT@, @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:P.PROJECT_CODE:ProjID@, @select:metric:user_def:implied:Sum(P.ACTUAL_HOURS):Actuals:agg@, @select:metric:user_def:IMPLIED:Sum(P.ETC_Hours):ETC:agg@
FROM NBI_PROJECT_CURRENT_FACTS P, @FROM:DIM:DATA_MART:OBS@


WHERE @FILTER@ AND @WHERE:DIM:DATA_MART:OBS:P@
GROUP BY @GROUP_BY:DIM:DATA_MART:OBS@, P.Project_Code
HAVING @HAVING_FILTER@


Calendar Time Use the CALENDAR TIME construct with the following datamart time tables to show hours or costs across a time scale:
- NBI_PM_PT_FACTS
- NBI_PM_PROJECT_TIME_SUMMARY
- NBI_RT_FACTS
- NBI_RESOURCE_TIME_SUMMARY Use the following syntax for the CALENDAR TIME construct:
@SELECT:DIM:DATA_MART:CALENDAR_TIME@ @FROM:DIM:DATA_MART:CALENDAR_TIME@ @WHERE:DIM:DATA_MART:CALENDAR_TIME: <Datamart TIME Table>@ @GROUP_BY:DIM:DATA_MART:CALENDAR_TIME@
Calendar Time Example
SELECT @SELECT:DIM:DATA_MART:CALENDAR_TIME@, @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:T.PROJECT_ID:ProjID@, @select:metric:user_def:implied:Sum(T.ACTUAL_HOURS):Actuals:agg@
FROM NBI_PM_PT_FACTS T, @FROM:DIM:DATA_MART:CALENDAR_TIME@
WHERE @FILTER@ AND @WHERE:DIM:DATA_MART:CALENDAR_TIME:T@
GROUP BY @GROUP_BY:DIM:DATA_MART:CALENDAR_TIME@, T.PROJECT_ID
HAVING @HAVING_FILTER@
Fiscal Time Use the FISCAL TIME construct when dealing with fiscal periods. Use the following syntax for the FISCAL TIME construct:
@SELECT:DIM:DATA_MART:FISCAL_TIME[:<name>]@ @FROM:DIM:DATA_MART:FISCAL_TIME[:<name>]@ @WHERE:DIM:DATA_MART:FISCAL_TIME:F[:<name>]@ @GROUP_BY:DIM:DATA_MART:FISCAL_TIME[:<name>]@
Fiscal Time Example
SELECT @SELECT:DIM:DATA_MART_TEST:FISCAL_TIME@, @SELECT:METRIC:USER_DEF:IMPLIED:SUM(P.ACT_BILLING):ACT_BILLING:AGG@, @SELECT:METRIC:USER_DEF:IMPLIED:SUM(P.REV_ACT_LABOR):REV_ACT_LABOR:AGG@


FROM NBI_FM_PROJECT_TIME_FACTS P, @FROM:DIM:DATA_MART_TEST:FISCAL_TIME@
WHERE @WHERE:DIM:DATA_MART_TEST:FISCAL_TIME:P@ AND @FILTER@
GROUP BY @GROUP_BY:DIM:DATA_MART_TEST:FISCAL_TIME@
HAVING @HAVING_FILTER@


Security Use the following syntax for the Security construct:
@WHERE:SECURITY:<entity type>:<entity id>@
When defining a Security construct, apply the following guidelines:
- Each statement begins and ends with the @ character.
- WHERE, must appear in the WHERE section of the NSQL construct.
- <entity type> is either PROJECT or RESOURCE.
- <entity id> is the project or resource ID (for example, SRM_PROJECTS.ID or
NBI_PROJECT_CURRENT_FACTS.Project_ID).
- Projects or resources appear only in a grid or chart when a user has sufficient access rights. To verify the user access
rights, use SECURITY in the WHERE clause.
Security Joins Some entities enforce instance-level security for certain objects. You can slice queries that are based on the security information of the user who executes the query. NSQL provides the following construct:
@WHERE:SECURITY:<entity type>:<entity id>]@
- <entity type> is either PROJECT or RESOURCE
- <entity id> is the query expression that represents the primary key of the entity. For example:
@WHERE:SECURITY:PROJECT:SRM.PROJECTS.ID@
Dynamic NSQL Query Lookups You can use NSQL to create lookups that dynamically filter portlet data. These lookups fetch data from the database in real time to populate the drop-down or browse lists. Dynamic lookups provide the most up-to-date values possible. The following example shows a dynamic query that returns a list of resources and filters out all resources with a null user_id value. The result set contains resources with a user account to log in to Classic PPM.
SELECT @SELECT:r.user_id:user_id@, @SELECT:r.unique_name:unique_name@, @SELECT:r.first_name:first_name@, @SELECT:r.last_name:last_name@, @SELECT:r.full_name:full_name@


FROM srm_resources r WHERE r.user_id IS NOT NULL AND @FILTER@
NOTE For more information about lookup types, see Configure Lookups in the Administration section.


BROWSE-ONLY Construct for Dynamic Query Lookups
For dynamic query lookups, browsing works in a specific way. When a record appears in the application, the value does not appear in the lookup field. There is no match between the value stored on the record and the list value in the lookup. The old values are retained in the database table for the instance record. However, if a record with the old value is retrieved and is not seen in the application, clicking the Save button removes the old value from the record.
To retain inactivated values in the record and see them in the application, you must change the lookup query definition. For this case, the definition must include the specific NSQL construct @BROWSE-ONLY. When a user uses the lookup on new records, active values are displayed. And, when an existing record is shown with inactive values, the inactive value remains on the record.
The syntax for this construct is :
@BROWSE-ONLY: /* include SQL statement here to look at active results only */ :BROWSE-ONLY@
The following example shows the BROWSE-ONLY construct with a value included that defines the results that appear:
SELECT ...... FROM ..... WHERE @FILTER@ @BROWSE-ONLY: AND IS_ACTIVE = 1 :BROWSE-ONLY@

Create Dynamic Lookups and Export Configurations
If the purpose of a dynamic lookup is to link an object to a unique instance of another object or record, we recommend the following approach:
- Use the internal id that the Classic PPM environment generates as the hidden key.
- The column, function, or expression you designate as a unique hidden key cannot exceed 30 characters.
- Add the user-defined id/unique code as the column UNIQUE_CODE in the query select clause
Include the NSQL query column UNIQUE_CODE in a query to prevent the XOG from exporting the lookup attribute using the literal hidden key value. Instead of the hidden key value, the XOG uses the value of UNIQUE_CODE. Using this value avoids exporting primary key ID values in the XML that are impossible to import into another Classic PPM environment.
For example, the following lookup query selects the SRM_RESOURCES.ID as its hidden key.
SELECT @SELECT:r.id:id@ ,@SELECT:r.full_name:full_name@ ,@SELECT:r.unique_name:unique_name@ ,@SELECT:r.last_name:last_name@ ,@SELECT:r.first_name:first_name@ FROM srm_resources r WHERE 1=1 AND @FILTER@
When the preceding lookup is used, the hidden key is selected and stored as the lookup value. When this lookup query is exported using the XOG, the attribute that is associated with the lookup contains the internal id of the resource. When


importing this data into a different environment, the effort can fail. The exported record can even become associated with the wrong target record because the internal id in the target system differs from the source system. By including the UNIQUE_CODE column in the select clause, the XOG export substitutes the unique user-defined id (SRM_RESOURCES.unique_name) into the attribute in the XOG output.
SELECT @SELECT:r.id:id@ ,@SELECT:r.full_name:full_name@ ,@SELECT:r.unique_name:unique_name@ ,@SELECT:r.unique_name:unique_code@ ,@SELECT:r.last_name:last_name@ ,@SELECT:r.first_name:first_name@ FROM srm_resources r WHERE 1=1 AND @FILTER@
When the data is imported, the Classic PPM architecture uses the UNIQUE_CODE value to query the system and store the SRM_RESOURCES.ID for the lookup value.
Hierarchical NSQL Queries Use a hierarchical query to display parent values that expand to reveal child values that are grouped together in a grid portlet. The following dimension property can be of any data type but is usually number or string:
hg_has_children
This property must be a unique value for all rows in the dimension or it can be null. A value at runtime for this property signifies that the row has children and the row in the grid shows the [+] expand icon for expanding and collapsing. A NULL value means the row does not have children. The data type for the following parameter must match the data type of hg_has_children and indicates the current row:
hg_row_id
When a user clicks the [+] expand icon in the grid, the id of the expanded row is passed into the query as this parameter. The value that is passed is the same value that was previously returned as hg_has_children. The following rules apply when using this parameter:
- When hg_row_id is null, you return only the top-level rows in the hierarchy.
- When hg_row_id has a value, you return only the immediate child rows and no grandchildren or further descendants.
NOTE Investment Parents and Investment Rollup objects do not support custom time-scaled value (TSV) attributes. For example, the investment hierarchy does not support custom TSVs. In Studio, the Investment (Project) Hierarchy Financial Rollup page does not display valid values for custom TSVs. The values all display as zero (0), instead of showing their correct data. The out-of-the-box stock time-varying attributes (for example, Actuals for Labor Resources or ETC for Labor Resources) do display their correct values.
Hierarchical Query Filters Filter values are passed into the hierarchical queries as they are for regular queries. The standard hierarchical grids return all ancestor rows when a leaf row matches the filter criteria. For example, consider this simple hierarchy:
North America Canada Ontario

Toronto
If you filter on name=Toronto the query returns North America, Canada, Ontario, and Toronto, one level at a time. Expand the hierarchy to find the rows that match the filter criteria and view the data in a hierarchical format. You can structure a query to provide similar functionality. Hierarchical Portlets This example shows the NSQL query behind the following multidimensional hierarchical grid portlet:
Use the following NSQL code for the first dimension that includes the expanding hierarchical entities in the red box. For example, the user expands a location, then a department, and then sees a list of investments.
select @Select:dim:USER_DEF:IMPLIED:HIER:EDI.ID:UNIQUE_ID@, @Select:dim_prop:USER_DEF:IMPLIED:HIER:EDI.SHORTDESC:SHORTDESC@, @Select:dim_prop:USER_DEF:IMPLIED:HIER:EDI.LOCATION.LOCATION@, @Select:dim_prop:USER_DEF:IMPLIED:HIER:EDI.hg_has_children:hg_has_children@,
Use the following NSQL code for the second dimension that includes the row of monthly time periods in the blue box. For example, 01-2017, 02-2017, and additional months in the format MM-YYYY.
@Select:dim:USER_DEF:IMPLIED:timeperiod:period_key:period_key@, @Select:dim_prop:USER_DEF:IMPLIED:timeperiod:to_char(edi.start_date, 'MM-YYYY'): month_year@,
Use the following NSQL code for the metrics that include the columns in the green box. For example, Actual (A), Budget (B), and Cost (C).
@Select:metric:user_def:implied:sum(edi.actuals):actuals:agg@, @Select:metric:user_def:implied:sum(edi.budgets):budgets:agg@, @Select:metric:user_def:implied:sum(edi.cost_plan):cost_plan:agg@,
You can also show cost plan data as a percentage:
@Select:metric:user_def:implied:sum(edi.cost_plan):cost_plan:agg@,
The remaining NSQL code is included to complete the example:
from ( /*** Level 1 Entity ***/ select distinct E.id || 'E' id, E.shortdesc, E.entity, E.id || ' ' hg_has_children,
to_char(CT.start_date, 'YYYY-MM') period_key, CT.start_date start_date,


z_cp_entity_total(E.id,CT.start_date) cost_plan, 0 cp_pct, z_tx_entity_act(E.id, CT.start_date) actuals, z_bdgt_entity_total(E.id, CT.start_date) budgets from entity E, departments D, ( select first_day(add_months(SYSDATE, -6)) start_date from dual union


Export Construct for Hierarchical Grids
Include the construct hg_all_rows in an NSQL query to export all the child rows in a hierarchical grid. In normal execution mode, a hierarchical query returns only the rows for the current level of the hierarchy. The current level is typically the toplevel rows that are viewed when a user first navigates to the grid. When the user makes a child row the current-level, the query returns only the immediate child rows.
However, when Export to Excel is invoked in a hierarchical grid, the query exports all rows in a flat list. The order of the rows is not specified, but the user receives all rows of the hierarchy in the resulting spreadsheet. To provide data in both use cases, the NSQL query returns different result sets for each one. A special construct named hg_all_rows is passed into the query to signify which mode the query is to use, normal execution mode or Export to Excel.
The following table explains the possible values for this construct:

Value 1 Any other value, including null

Result
The query returns all rows for the export request.
The query returns only the rows for the current level, typically toplevel rows. If child rows are selected, only the immediate child rows are returned.

NOTE This construct can have a performance impact.
The use of hg_all_rows usually means that the NSQL query must use a UNION SQL construct where:
- The first part of the union returns only the current-level rows when hg_all_rows is not equal to 1.
- The second part of the union returns all rows when hg_all_rows is equal to 1.
The application does not dictate the specific SQL syntax to achieve this functionality. As the author of the NSQL query, you can use any valid SQL construct to achieve the behavior that you prefer.

Create a Simple NSQL Query
To help you get started, Studio provides query templates for the following types of data:
- Collaboration
- Project
- Productivity
- Resource
- Business Intelligence
- Framework
Each of the query templates specifies typical data elements for that type of query. After you create your query, you can use it to populate data in a portlet. You cannot modify a query that is associated with an object, and you cannot delete a query that has an association with a portlet.


Follow these steps: 1. Open Administration, and from Studio, click Queries. 2. Click New. 3. Complete the following fields:
- Query Name: Defines the name of the query.
- Query ID: Defines a unique alphanumeric identifier for the query.
- Content Source: Specifies where the data for a query originates.
- Category: Specifies the general area that a query reports data on.
- Description: Defines the purpose of the item being created and provides any relevant information. 4. Click Save and Continue. The NSQL tab appears. 5. Enter your NSQL statement in the query window. 6. Click Save and Continue. The Attributes tab appears. 7. Review the data to be included in the query and identify which of the columns can be filtered, which are required, and which can be used as lookups. 8. Click Continue. The Linking tab appears. 9. To define links to another table, click New and complete the following fields:
- Name: Defines the name of the link.
- Link ID: Defines a unique alphanumeric identifier for the link.
- Description: Defines the purpose of the item being created and provides any relevant information.
- Action: Specifies a destination for the link. When the link is selected, additional fields can appear to complete the
link definition. Complete the fields as needed. 10. Save your changes. 11. Click Return.
WARNING If an NSQL query SELECT statement includes too many columns or aggregate functions at runtime, a system error occurs. The total amount of actual data for sorting (plus the aggregates) cannot be greater than the current database block size.
The STRING_LIST NSQL Construct To offer users multi-select lookup values in the filter of a portlet, use the following construct:
@WHERE:PARAM:USER_DEF:STRING_LIST:parameter_id@
Add the the following parameter to the WHERE clause of the NSQL query:
AND @FILTER@
IMPORTANT The STRING_LIST and STRING_INLINE_LIST constructs behave differently when used in queries.
- STRING_LIST: Use STRING_LIST to automatically add the condition to the WHERE clause. The system
adds the filter regardless of where you place it in the query.
- STRING_INLINE_LIST: Use STRING_INLINE_LIST to keep the filter exactly where you place it in the query.
This option gives you precise control of query evaluation order.
Example: STRING_LIST In this example, you want to display only the list of projects matching a project name filter. Your project name filter is titled project_name_in.


Follow these steps: 1. Click Administration, and from Studio, select Queries. 2. Click New and create a query titled string_list_test. Query:
SELECT DISTINCT @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:inv.id:KEY_ID@, @SELECT:DIM_PROP:USER_DEF:IMPLIED:PROJECT:inv.name:PROJECT_NAME@
FROM inv_investments inv
WHERE inv.is_active = 1
AND @WHERE:SECURITY:PROJECT:inv.ID@ AND (inv.name IN (@WHERE:PARAM:USER_DEF:STRING_LIST:projnamelist@)
OR @WHERE:PARAM:USER_DEF:STRING_LIST:projnamelist@ IS NULL) AND @FILTER@
Next Steps: 1. Install a SOAP client such as SOAP UI. 2. Log into Classic PPM using the SOAP client and note the returned session ID. 3. Run the following query using the noted session ID: SOAP Request Example:
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:quer="http://www.niku.com/xog/Query">
<soapenv:Header> <quer:Auth> <quer:SessionID>5250602__1B908028-0359-471A-920B-9207E0E8A900</quer:SessionID> </quer:Auth>
</soapenv:Header> <soapenv:Body>
<quer:Query> <quer:Code>string_list_test</quer:Code>
<quer:Filter> <quer:project_name_in>stringlisttest</quer:project_name_in>
</quer:Filter> </quer:Query> </soapenv:Body> </soapenv:Envelope>


Example: STRING_INLINE_LIST The STRING_INLINE_LIST construct can be used in a filter portlet as well as on the portlet filter itself. When associated with a lookup and used on a portlet, the field can be configured to be either single or multi-select. Follow these steps: 1. Click Administration, and from Studio, select Queries. 2. Click New and create the following query:


Query:
SELECT @SELECT:DIM:USER_DEF:IMPLIED:RESOURCE:R.FULL_NAME:RSRC@, @SELECT:DIM_PROP:USER_DEF:IMPLIED:RESOURCE:MR.FULL_NAME:MANAGER@, @SELECT:METRIC:USER_DEF:IMPLIED:COUNT(*):PROJECT_COUNT:AGG@
FROM INV_INVESTMENTS I, SRM_RESOURCES R, SRM_RESOURCES MR, CMN_SEC_USERS U
WHERE I.CREATED_BY = U.ID AND U.ID = R.USER_ID AND R.MANAGER_ID = MR.USER_ID AND @WHERE:PARAM:USER_DEF:STRING_INLINE_LIST:MR.UNIQUE_NAME:managers@ AND @FILTER@ GROUP BY R.FULL_NAME,
MR.FULL_NAME HAVING @HAVING_FILTER@


Next Steps:
1. After saving, associate the resulting param_managers field with a lookup. 2. When the query is used as the data provider for a portlet, the param_managers field can be configured to be either
single or multi-select.
NOTE INTEGER_INLINE_LIST and FLOAT_INLINE_LIST are also supported and can be associated with corresponding lookup datatypes.
Row Limit for Studio NSQL Queries
To reduce the demand on server resources, a row limit governor is applied to the NSQL query results in grid portlets, chart portlets, and cases where XOG query tags are used. The governor restricts the number of rows that are processed to 50,000 (MAX_FETCH_LIMIT). The row limit is applied in the following cases:
- Scenario 1: A portlet is running a single dimension NSQL data provider, and the portlet has an aggregation row defined.
- Scenario 2: A portlet is running a multidimensional NSQL data provider.
When the system detects Scenario 1, a warning message appears when the row limit is exceeded. The results up to the row limit (including the aggregation row total) are processed. You can enter filter criteria to display the specific rows you want. This action reduces the number of rows in the result.
When the system detects Scenario 2, a warning message appears when the row limit is exceeded. The system does not display any results or aggregation row totals. Because of the nature of multidimensional NSQL queries, the correct result set or aggregation row cannot be determined.
Row Limit for Large Queries with Aggregated Calculations
To reduce your exposure to potential out-of-memory errors for aggregations on large datasets, a row limit governor is applied to stock and custom object portlets. The MAX_FETCH_LIMIT value is applied in the CMN_OPTIONS_VAL table. When aggregation is applied to any stock or custom attributes on a list page, the query ignores pagination and


attempts to retrieve all the rows from the database. When the number of rows is larger than 50,000, a memory error can occur. The row limit is applied to reduce the chance of getting this error. We recommend that you do not adjust the limit.
TIP To calculate aggregate totals on large datasets, use a report or summary portlet instead of paging through a standard grid portlet.
NSQL Queries Against the Data Warehouse As a Studio developer, you can design portlet queries in the application that use the data warehouse as their source. The steps for defining NSQL queries remain the same for database (Niku) or data warehouse sources. The same NSQL constructs, syntax, validation rules, and error messages apply to queries against either data source. All NSQL constructs that are available when the source database is Niku are also available when the source database is set to Data Warehouse, with the exception of security. The default security clause (@security@) is not supported with the data warehouse data source. To implement your own security, create your query with all the required WHERE clauses. You can also implement security the same way that it is implemented in reports. Data warehouse NSQL queries are available for the following portlet types: single dimension grid, two dimension grid, hgrids, drill-down portlets, and graphs. Note: DBLINK is not permitted in data warehouse NSQL queries. To see this change, perform the following steps after the upgrade: 1. Log in to Classic PPM 15.4 and navigate to Administration, Studio, Queries. 2. Open a query or create one. 3. Click the NSQL tab. 4. In the Source Database field, select Data Warehouse. In previous releases, selection was limited to the Niku
database. When you create a query in Studio, the application sets the default source database to Niku and provides a database query template. When you switch the source to Data Warehouse, a data warehouse query template appears. During creation, you can switch back and forth and the corresponding query template appears. After you save the NSQL query, you can still switch the data source; however, the matching query template no longer appears. Your last saved query continues to appear. As a developer or content administrator, you can also create or update these queries using the XML Open Gateway (XOG). You can import and export portlets and queries against the data warehouse using the XOG or a content package. You can also use the XOG to make structural changes to a query. The same validation rules apply to your queries whether you use Studio or XOG.
TIP If you do decide to create data warehouse queries or switch existing ones, verify your NSQL query logic, clauses, and statements are written against the correct tables by name in the selected source database. The following NSQL features are supported:
SELECT Clause (both single and multi-dimensional)
@SELECT:DIM:USER_DEF_IMPLIED:<DimensionName>:<TableName.Field>:<label>@ @SELECT:DIM_PROP:USER_DEF_IMPLIED:<DimensionName>:<TableName.Field>:<label>@ @SELECT:METRIC:USER_DEF:IMPLIED:<TableName.Field>:<label>:agg@


WHERE Clause
@WHERE:PARAM:USER_DEF:<data_type>:<PARAM_NAME>@ @WHERE:PARAM:XML:<data_type>:/data/<filter_option>/@value@ @FILTER@ @HAVING_FILTER@
Valid data types are STRING, INTEGER, FLOAT, and DATE.


Built-in Parameters
@WHERE:PARAM:<param_identifier>@
Valid param_identifier can be USER_ID, USER_UID, USER_NAME, LANGUAGE, or LOCALE.

Hierarchical Queries The hg_has_children parameter is supported:
@WHERE:PARAM:USER_DEF:STRING:hg_row_id@

Miscellaneous Constructs:
@DBUSER@ (calling a DB function)

Built-in Database Functions
@NVL@ @SUBSTR@ @SYSDATE@ @UPPER@ @LOWER@ @STDDEV@ @VARIANCE@ @+@ @MINUS@

Security Construct (Not Supported) The NSQL security construct feature is not supported. You must manually add a security query. For example, to secure investments:
AND EXISTS (SELECT 1 FROM dwh_inv_security_v WHERE user_uid = @WHERE:PARAM:USER_UID@
AND investment_type_key = 'project' AND investment_key = i.investment_key)

NSQL Troubleshooting and Tips The following errors can occur when you are working with NSQL: NSQL Error 1: This query produced duplicate dimensional data. The results shown here may be invalid or incomplete. Resolution: The unique key in the Dimension property cannot contain duplicate values. Verify that the tables joins are correct.
Error when trying to execute the query.


Resolution:
- A field listed in the SELECT or WHERE clause does not specify the table name. Because the field name appears in
multiple tables, the table name must precede the field name.
- A comma appears after the last @SELECT statement. Remove it.
- A comma appears after the last table listed in the FROM clause. Remove it.
- Verify the table names are correct.
TIP
- Only SELECT statements that specify which rows and columns to fetch from one or more tables are
permitted. NSQL statements fail with an error message if a statement does not start with @SELECT. This means that UPDATE, INSERT, and DELETE operations cannot be performed in NSQL.
- Do not use NSQL for reporting or for stored procedures.
- When you create queries for use with pie charts and funnel charts, verify that the metric does not contain negative values by filtering all values greater than zero.
- NSQL adds SQL constructs to the end of the statement for automated filtering and other statements. This can create problems when you use UNION in NSQL. As a workaround, use the @SELECT@ in the outer select of an inline view that encapsulates the UNION statement.
Studio UI Themes
User interface (UI) themes determine the look and feel of the Classic PPM application pages for all users as seen through their web browsers. The application includes stock UI themes that you can select to change the color, log-in information, branding, and other aspects of the user interface. You can also create a custom UI theme that is specific to your business needs. Your custom UI theme can adjust or extend the settings that are present in the stock themes. You can customize the logo, the application name, tabs, buttons, icons, login page, and other features.
If a custom UI theme does not exist in a third-party application that is integrated with Classic PPM, the default UI theme in the third-party application is used.
You can import or export a UI theme using the XML Open Gateway. Use the specific UI themes XML read and write files for UI themes that are provided with the XML Open Gateway.
- Stock UI Themes
- Apply a UI Theme
- Apply a UI Theme to a Partition
- Custom UI Themes
- Phoenix UI Theme
Stock UI Themes
The following standard UI themes are included with Classic PPM:
- Navy Blue
- Red
- Blue
- Black and White
- High Contrast
- Teal and Grey
- Phoenix UI

NOTE You cannot edit or delete the original stock UI themes. However, you can make a copy to create your own UI theme.
Apply a UI Theme When you select a new UI theme, you see the change reflected in the application immediately. Other users see the change on their next login. Follow these steps: 1. Open Administration, and from Studio, click UI Themes. The UI themes list appears. 2. Select the theme that you want to apply. 3. Click Save. Apply a UI Theme to a Partition You can apply a distinctive UI theme, including a logo and colors, to a partition. Partitions without a designated UI theme inherit the UI theme of their closest ancestor partition.
- Users who are members of the partition see the new appearance.
- Users who belong to multiple partitions with different UI themes can go to Account Settings and select a default
partition to determine their primary UI theme.
- Users who are not members of any partition always see the UI theme of the system partition. Follow these steps: 1. Open Administration, and from Studio, click Partition Models. 2. Click the name of a partition model. 3. Click Partitions. 4. Click the name of a partition. 5. In the UI Theme field, select a theme. 6. Click Save and Return. Custom UI Themes If the stock UI themes do not meet your business needs, you can create a custom UI theme by copying and modifying the CSS text of one of the stock themes. The following graphic shows the page areas in the application that you can customize:


The following table describes the page areas in the application that you can customize:

Section: |
||

Area: Main page header
Main menu bar

Possible Modifications:
- Logo
- Company name
- Links
- Icons
- Fonts
- Colors (application background)
- Menu bar icons (Back, Recent Pages,
Refresh, Home, Search)
- Menu icons (Next, Previous, Refresh)
- Fonts
- Colors


Section: |||

Workspace

Area:

Possible Modifications:
- Fonts
- Colors (background, buttons, headers,
tabs, portlets)
- Tab styles
- Button styles
- Portlet headers

You can adjust fonts, colors, sizes, and other properties under the /* Login page CSS styles */ section.

Create a Custom UI Theme in Studio
Modify an existing custom or stock UI theme that is closest in appearance to the new theme you want to create. This method provides you with predefined UI features that you can adjust until you have the look you want.
WARNING You can edit styles in the CSS style sheet, but do not remove them. Removing a style can cause the UI to render incorrectly. Classic PPM always expects a theme to be applied, and the styles that are specified in the Default UI theme are required.
Follow these steps:
1. Open Administration, and from Studio, select UI Themes. 2. Click the name of the UI theme that is closest to the look that you want. The properties page appears displaying the
CSS style sheet. 3. Select and copy all of the code in the CSS text box and click Return. 4. Click New. 5. Paste the copied text into the CSS text box. 6. Modify the standard CSS style sheet property values. Use the examples in this article to guide you. Comments in the
stylesheet identify the area in the user interface that you can modify. 7. Enter a name for the UI theme in the Name field. 8. Enter a unique alphanumeric string of up to 60 characters to identify the UI theme in the ID field. 9. The Active check box determines if users can select the UI theme. Select Active to make the theme available to
others. Clear the check box to hide the theme. 10. Click Save and Return. 11. Select the theme and click Save. The selected theme is applied.

Custom UI Theme Main Page Header The following examples show how you can modify the CSS text from a stock UI theme to alter items in the main page header. Product Name To change the product name, replace Clarity with a new name in the following section:
/* The product name itself */ #ppm_header_product span:before, #ppm_header_product_small span:before {
content: "Clarity "; }
The product name appears in the page title, the page header, and the Login page.


NOTE If a syntax error prevents your custom name from being parsed and applied, the default value of Clarityappears. The following error appears in the application log file:
Error getting product name from the selected default ui theme. Ensure that the section used to set the product name is valid.
Main Page Background Color To change the background color of the main page, locate the following statement and define the color that you want.
/* The main page background color */ .ppm_page_bg {
background: #04152d; background: -webkit-gradient(radial,50% 10, 1, 50% 100, 600, from(#052E5F), to(#04152D )); background: -moz-radial-gradient(50% 10% 0deg,ellipse contain, #052E5F, #04152D); }
Logo Several tools are available on the Internet that let you convert an image to a base64 string. Paste the base64 encoded string in the CSS as shown in the following example. The example shows an abbreviated base64 string.
/* The logo in the upper left hand corner of the page header */ #ppm_header_logo {
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAqCAYAAADxughHAAAKMElEQVRo3s1Z93eT5xX+ AFvykoe85C3b2tuSLMmSB95gbMwIJcwwbGagISRAFg0JK6xAmGGUk7TNaU8TaEvapOn4157eez/ ... 3QxXFJCmwgpmVNd0BSMAc3z2HD1EQCydTsFoC19qcQPq+Wi9Ks4LzvZQtY52Fz7+QFmW
+DxMx2vJe43816f1xNGKfhAAAAABJRU5ErkJggg==); margin: 6px 0px 0px 15px; width: 50px; height: 42px;
}
Custom UI Theme Image Most images in Classic PPM have corresponding cascading style sheet (CSS) class names. These classes can be added or overridden in the CSS code that you provide for the custom UI theme. For example, if you want to change the image for the portlet Options button (the button at the top right corner of a portlet), you can identify the class name for that UI element using browser built-in developer tools or an external third-party plugin. You can override the stock class definition, as shown in the following example:
/* The image for the portlet options button in the upper right corner of the page header */ .caui-workspaceWorkspaceHeadBtn {
background: url(data:image/png;base64,<base_64_encoded_source_text_of_the_intended_image>); margin: <intended_margin_coordinates>; width: <intended_width>; height: <intended_height>; }
Custom UI Theme Main Menu Font and Color The following section controls the color and fonts used in the main menu bar.
/* The main omnibar/navigation bar below the header */ #ppm_omnibar {
background-color: #7791AB;


background: -moz-linear-gradient(#7791AB, #4C6786); background: -webkit-gradient(linear, center top, center bottom, from(#7791AB), to(#4C6786)); background: linear-gradient(#7791AB, #4C6786); -pie-background: linear-gradient(#7791AB, #4C6786); color: #001122; font-family: Helvetica Neue,Arial,sans-serif; font-weight: bold; }


Change Main Menu Hover Styles
/* The omnibar button hover styles */ .ppm_omnibar_button:hover {
border: 1px solid #566a7c; }
/* The styles of the primary navigation menus when hovered */ .ppm_nav_menu_hover {
background-color: #f5f8fa; color: #335588; }

Custom UI Theme Workspace Background Color
/* Button styles */ .ppm_button {
border-top: 1px solid #c4d1e1; border-bottom: 1px solid #889ab5; border-left: 1px solid #bccee4; border-right: 1px solid #889ab5; background: -webkit-gradient(linear, center top, center bottom, color-stop(0, #ebf4fc), color-stop(.5, #d9e9fc), color-stop(.52, #c6ddf6), color-stop(1,#c3d3eb)); background-image: -moz-linear-gradient(center top, #ebf4fc 0%, #d9e9fc 50%, #c6ddf6 52%, #c3d3eb 100%); background: linear-gradient(center top, #ebf4fc 0%, #d9e9fc 50%, #c6ddf6 52%, #c3d3eb 100%); -pie-background-image: linear-gradient(center top, #ebf4fc 0%, #d9e9fc 50%, #c6ddf6 52%, #c3d3eb 100%); }

Custom UI Theme Tab Style
/* Top-level tabs */ .ppm_tab {
background-color: #B3C8DB; background: linear-gradient( #B3C8DB, #92A8BE ); background: -moz-linear-gradient(#B3C8DB, #92A8BE); background: -webkit-gradient(linear, 0% 100%, 0% 0%, from(#B3C8DB), to(#92A8BE)); filter: progid:DXImageTransform.Microsoft.Gradient( GradientType=0, startColorStr='#B3C8DB', endColorStr='#92A8BE' ); }
/* Top-level selected tab */ .ppm_sel_tab {
background-color: #E8EBF2; background: -moz-linear-gradient(#FFF, #e3e7ec); background: -webkit-gradient(linear, center top, center bottom, from(#FFF), to(#e3e7ec)); background: linear-gradient(#FFF, #e3e7ec);


filter: progid:DXImageTransform.Microsoft.Gradient( GradientType=0, startColorStr='#FFFFFF', endColorStr='#e3e7ec' ); }
/* The top-level tab labels */ .ppm_tab > a, .ppm_sel_tab > a { }


Custom UI Theme Button Style
/* Button styles */ .ppm_button {
border-top: 1px solid #c4d1e1; border-bottom: 1px solid #889ab5; border-left: 1px solid #bccee4; border-right: 1px solid #889ab5; background: -webkit-gradient(linear, center top, center bottom, color-stop(0, #ebf4fc), color-stop(.5, #d9e9fc), color-stop(.52, #c6ddf6), color-stop(1,#c3d3eb)); background-image: -moz-linear-gradient(center top, #ebf4fc 0%, #d9e9fc 50%, #c6ddf6 52%, #c3d3eb 100%); background: linear-gradient(center top, #ebf4fc 0%, #d9e9fc 50%, #c6ddf6 52%, #c3d3eb 100%); -pie-background-image: linear-gradient(center top, #ebf4fc 0%, #d9e9fc 50%, #c6ddf6 52%, #c3d3eb 100%); }
/* Button styles when hovered */ .ppm_button:hover {
background: -webkit-gradient(linear, center top, center bottom, color-stop(0, #f8fbff), color-stop(.5, #e4effb), color-stop(.52, #d1e4f8), color-stop(1,#c5d5eb));
background-image: -moz-linear-gradient(center top, #f8fbff 0%, #e4effb 50%, #d1e4f8 52%, #c5d5eb 100%); background: linear-gradient(center top, #f8fbff 0%, #e4effb 50%, #d1e4f8 52%, #c5d5eb 100%); -pie-background-image: linear-gradient(center top, #f8fbff 0%, #e4effb 50%, #d1e4f8 52%, #c5d5eb 100%); }

Custom UI Theme Login Page You can also use the UI theme CSS to customize the appearance of the login page. For example, set a custom logo for an organization or set a message for all users to view when they log in. A sample system maintenance message appears as follows:
The system will be unavailable from Sun April 15 at 11:30 pm until Mon April 16 at 3:30 am.
The following image shows a custom UI theme login page.
> [!INFO]
> Figure 43: 1. Login Page Top Message You can add a service announcement or custom message at the top of the login page.
/* The login service message */ #ppm_login_message_top span:before{
content: "Custom UI Theme Message 1 at the top"; }
2. Login Page Bottom Message You can add a service announcement or custom message at the bottom of the login page.
/* The login service message */


#ppm_login_message_bottom span:before{ content: "Custom UI Theme Message 2 at the bottom";
}

3. Login Page Logo Convert your custom logo image to a base64 encoded string and paste it into the following section:

/* Clarity Logo */ #ppm_login_logo {
background: url(data:image/filetype;base64, my_image_base64_string); width: 150px; height: 50px; }

margin: 6px 0px 0px 15px;

The image filetype string is included in the base64 conversion result and represents the original image type. For example, gif, jpeg, or png. Copy and paste the base64 string over my_image_base64_string in the code. The string can be long (30,000 characters). To view it, scroll to the right. Also specify the width and height values for your image.
NOTE We recommend that you optimize your image before you convert it to the base64 string. An image optimization tool such as Smush.it can produce a smaller encoded string.
To convert your image to a base64 encoded string, use an online conversion utility available at the following sites:
- http://webcodertools.com
- http://www.base64-image.de

Phoenix UI Theme The 15.5.1.1 patch introduced a new Phoenix UI theme designed to invite Classic PPM users into the new aesthetics and styling of the Clarity which made its debut in Release 15.1 as Clarity. Clarity 15.5.1.1, 15.6, and higher releases include this new optional UI theme.
To preview the theme, watch the following demo video:
https://communities.ca.com/videos/7811
The following image highlights some of the new styling and compares traditional Clarity UI themes with the new Phoenix UI theme:
> [!INFO]
> Figure 44: Phoenix UI Theme


TIP
- The new UI theme provides an attractive visual skin over Classic PPM functionality. In addition to its new
styling, Clarity offers a completely redesigned set of features. Clarity and Classic PPM remain two distinct user interfaces, and some users will prefer to keep them visually distinct; however, for users who prefer consistency, the Phoenix UI theme helps unify the user experience.
- Documentation, training, and Support KBs continue to specify when steps must be performed in Clarity and when they must be performed in Classic PPM. When using both Classic PPM and Clarity, users must be aware of which interface they are using. In addition, their access rights and other configuration options determine which features and options appear in their user interface.
- Classic PPM with the Phoenix UI theme applied does not support Internet Explorer 11. Minor Known Issue with Links and Notes on Task Properties Dialog In Clarity 15.5.1 and newer releases, when the Phoenix UI theme is applied over the Classic PPM interface, the modal window for Task Properties might not display the two small links for Links and Notes.
Clarity Studio Content Packages
Use content packages to deploy multiple versions of content between development, test, and production environments. Content packages help you collect, export, and distribute custom content to internal teams or external third parties. The content package provides an easy mechanism for importing and exporting Classic PPM content. Develop and assemble specific content items in a content package. You can deliver the content package and achieve the following goals:
- Developers can import the package as a content package and continue development.
- Administrators can import the package as a content add-in for their environments and then users can use the content.

For example, you can develop a series of pages, portlets, and queries at one site and can continue development at another site. You can even include resources and roles in your packages. You can also declare the content to be final and offer such pages, portlets, and queries to internal users or external customers. Add or modify content and use versions to track multiple builds of your content packages.
NOTE Note: (SaaS only) Clarity in FedRAMP compliant environments does not support the creation or editing of HTML or interactive portlets from content packages or any other method. The Add Content and Auto-Populate options on the Details tab for content packages are not supported. The following image shows the steps for developing and installing a content package:
> [!INFO]
> Figure 45: Image showing how to develop and install a content package
- Content Package Prerequisites
- Create a Content Package
- Add Content Items to a Package
- Include or Exclude Item References in Packages
- Build a New Instance of a Content Package
- Modify a Content Item in a Package
- Migrate a Content Package for Development
- Upload a Content Package as an Add-in for Users

Content Package Prerequisites Review the following prerequisites before working with content packages:
- This functionality requires the Content Package - Administer and Administration - Access global access rights.
- To build and view content package JAR files, contact your administrator to install and configure the Document
Management System.
- Content packages do not support custom partition models for content items. Partition model information is not
extracted as part of a package even when you have views and other object types defined for a custom partition. Only the default system partition configuration for the item is migrated as part of a content package. To move any content items from custom partitions, use the XML open gateway (XOG).
Create a Content Package Before you can add content and export content items, create a content package. Follow these steps: 1. Open Administration, and from Studio, select Content Packages. 2. Click New. 3. Enter a name and unique identifier for the content package. 4. Select an option in the Status field to indicate the level of progress in your content development stages. This field is for
your own knowledge as a reminder and is not used by any process. 5. In the Version field, enter the initial value in the versioning series in the format xx.x.x. For example, 1.0.0. For the next
incremental update to the package in this series enter 1.0.1. For the next minor version, enter 1.1.0, and for the next major version, enter 2.0.0. 6. In the Content Provider Details section: a. Enter the Contact Name that you want to publish as the owner or source of the content add-in. b. Enter the Email Address for a customer to contact you to obtain support for the content add-in. c. (Optional) Enter a phone number in the Contact Phone Number field. 7. Click Save.
Add Content Items to a Package You can add or remove the content in a package. Add content by type, by name, or by browsing for matching items. As a developer, verify that you have the corresponding access right for each content item that you want to add. Without access rights, you cannot add that specific content item to a content package. Follow these steps: 1. Open Administration, and from Studio, select Content Packages. 2. Open a content package. 3. Click the Details tab and select List or Hierarchy from the Details menu. 4. (Optional) As a shortcut for the previous step, you can click the List or Hierarchy icons in the content package list. 5. To add content by type, by name, or to browse content in a list, click the Add Content menu. To add multiple types of
items, skip to the next step. a. Select one of the following types of content:
- Pages
- Portlets
- Queries
- Resources or Roles
- Lookups
- Processes
- Objects
- Views b. To add content by name, enter the name of the content item to view a list of matching entries. Select an entry from the list of matching entries and then click Add. A menu appears in the Add button when descendants are available.
- Select Item to add only the selected item.
- Select Item and descendants to add the selected item and its descendants such as portlets, lookups, queries,
and other items lower in the hierarchy.
NOTE
When you add only an item, the hierarchy shows you the descendants for your convenience. For example, the subobjects for a master object appear for your reference as a developer. However, they are not included in the object definitions for the package and are not included when the package is exported. When you add an item and its descendants, all subobjects and child items are included in the package definition hierarchy. For example, a lookup for an attribute appears in the hierarchy. Descendants also appear on the Package Details - List page. For example, the portlets on a parent page appear.
You cannot add references to System Restricted Lookups and Restricted Portlets in your content package. However, if an item refers to a System Restricted Lookup or Restricted Portlet and that item is added with its descendants, the reference is included. For example, you create a portlet page and add two portlets. You add a Restricted Portlet such as Action Items and a grid portlet such as Budget vs. Cost. You add the portlet page to your package as a content item by selecting Item and descendants. The Action Items portlet is not available on the Package Details - List page. It appears as a reference of its parent on the Package Details - Hierarchy page. c. To add content from a list, click Browse. A page appears for you to browse and add content.
- Enter filter criteria and click Filter or click Show All to display all of the matching content.
- Select one or more check boxes for the content that you want to add. Click Add or click Add and Select More. Both buttons provide options to add items with or without descendants.
- Click Return. 6. To add all matching content of any type by ID, Name, or Source click the Auto Populate menu: a. In the required list, select Content ID, Content Name, or Content Source. b. Enter the identifier, name, or source of the content. You can use the * character for a wildcard in your search. For example, enter the following string to find matching content with the letters region in the name:
*region*
All content items of multiple types with a matching name, id, or source are automatically added to the current package. For example, all of the following items are added to the package:
Sales by Region page Regional Sales portlet Users in Region 7 portlet Regional Users query
NOTE Some items, for example objects, do not have a content source. As a best practice, do not use open-ended filter expressions such as * to add all the available items. Apply strict naming conventions to Studio objects and other content items. Consistent names help you identify your content and add it to a package. For example, apply the names pj2.MyPortlet, pj2.MyQuery, and pj2.MyPage. Then, use the Auto Populate menu to add all items and descendants with pj2 in their ID.
- To review the content items in a package, click the Details tab and select Hierarchy. Expand an entry to view its descendants.
- To remove a content item from a package, click the Details tab and select List. Select one or more check boxes and click Remove. The items are removed from both the List and Hierarchy pages. The original objects remain in the system and can be added again later if necessary.
Include or Exclude Item References in Packages You can include or exclude content item references in the content package. When you create a package and add content items, their Studio object definitions are included by default. As a content developer or administrator, you can choose which content item references are included or excluded. Icons in the Included column indicate the current inclusion status of each item.
- The reference to a content item with no icon is always included and cannot be excluded. Examples include master
objects and parent portlet pages. You also cannot exclude the lowest level item in a hierarchy if it is required by the parent. For example, you cannot exclude a query if the parent portlet is based on it.
- The reference to a content item with a green check mark (
) is included in the content package.
- The reference to a content item with a red circle and white x (
) is excluded from the content package. Follow these steps: 1. Open Administration, and from Studio, select Content Packages. 2. Click the Hierarchy icon for a content package. 3. Expand an entry to view its descendants. 4. To exclude an item:
a. Select its check box. b. Click Exclude. The selected item and any descendants in the hierarchy are excluded from the package. 5. To include an item: a. Select its check box. b. Click Include. The child item and its ancestor items in the hierarchy are included in the package. 6. Click Return.
NOTE When you change the inclusion status of an item, in an indirect way, you are modifying the parent item definition in the package. To alert you, a check mark icon appears in the Modified column of the Package Details - List page.
Build a New Instance of a Content Package When you build a content package, the application creates a JAR file with XML files for the selected content. As a developer, you can design content items, build and export a package, and then re-import the content in another environment. Follow these steps: 1. Open Administration, and from Studio, select Content Packages. 2. Open a content package and verify the version. To build a new version, update the Version field. 3. Click the Details tab.

NOTE Only the content items that appear on the Details - List page are exported with the next build of the package. 4. Click the Package button. The Processes tab appears. 5. (Optional) You can examine the export progress or allow it to continue unattended in the background. a. To determine status, view the Progress bar, Steps in Progress, Status, Start Date, and Finish Date columns. b. To view messages, click the icon in the Messages column. For example, a validation message appears if you exclude a dependent subobject or lookup from another object definition in the package. You can go back and include it in the export or choose to leave it out.
- To view more details, click Show Details.
- To return to the previous page, click Return. c. To update the progress, click the Refresh button periodically. 6. Click the Properties tab. a. Click the Package file link. You can identify different packages by the following naming structure:
<content_package_ID>_<version>_<datetime_stamp>.jar
For example, MyPackage1_2.0.1_20150929163055.jar. b. To view the Extracted Language File for your original source strings, click its JAR file. This file has the following
naming structure:
<content_package_ID>_nls.jar
NOTE
We recommend localizing the content items strings for each target language. To localize the strings, download this file and then unjar it. Translate the target language file strings and create a JAR file with the updated localized strings.
When you develop the next version of a delivered package, the extracted language file contains the <CAPPM> translated properties. You do not need to translate these strings again. If you do make changes to the strings, the system automatically detects the modification to a content item. The next version (revision) number is set and the latest translations are applied to the affected content items. When the administrator installs the new instance of the add-in, the status of the content items appear as Upgrade Ready. c. To upload a Translated Language File, click Choose File and select the translated JAR file. d. Click Save e. To re-package the content with a new translated language file, repeat Step 4 (click the Package button again). 7. Right-click the package JAR file and choose Save link as. a. Select a folder. b. Click Save. Your content is now available to share with others and to upload as an add-in in another environment. 8. (Optional) Examine the XML files in the JAR file to view the content elements and attributes in the package. Only the items that you designated as included appear. Excluded references do not appear. In the XML for the exported JAR, the version appears as a 4-digit number in the revision attribute. For example, version 12.0.3 appears as follows:
revision="1203"
Modify a Content Item in a Package
You can modify the content item definitions after you build a package. The original package JAR file serves as a baseline for the version. If you update the package version, only the items marked Modified are updated in the next build. Unmodified content items remain in the package and their definitions are not updated in the next build.
Follow these steps:
1. Open the content package and update the version number in sequence.

2. Change one or more content items. 3. Click Details and select List. 4. On the Details List page, select the items that were modified and that you want to update in the next version of the
package. 5. Click Modifications and select Set. Check marks appear in the Modified column.
NOTE If no check mark appears when you set an item, that item is new and was not present in the original baseline content package.
Another way to capture modified content in the package is to exclude and then include the items in the hierarchy.
Follow these steps:
1. Click Details and select Hierarchy. 2. Exclude one or more items and then include the new or changed items. When you include them again, the item
references include any changes. The new or modified content is included in your next package.
NOTE When you exclude and then include items, the Modified column is automatically updated.
Migrate a Content Package for Development
You can import content from packages that were developed internally or by third parties. For example, import a content package from team A on one environment and continue development by team B on another environment.
Follow these steps:
1. Build a new instance of the package. You can also update the version. 2. Upload the package as an add-in. See Upload a Content Package as an Add-in for Users.
WARNING Select Install in Migration Mode. This option forces all content items in the package to install and upgrades any existing content from a previous version. New content items overwrite old ones on the target system. Upgrade Ready status does not apply in migration mode. After installation, all content items display the Installed status. 3. Open Administration, and from the Studio menu select Content Packages. 4. Click Upload Package. 5. On the Upload Content Package page: a. Click Choose File. b. Select a content package JAR file and click Open. c. Click Save. 6. Click the Properties tab. a. Verify the value in the Status field (for example, set to In Development). b. Verify that the correct version information appears. c. Click Save. 7. To view the installed objects and attributes in the package, click Items and select List or Hierarchy. 8. To verify that the content appears correctly: a. Navigate to a known page or portlet in the package. b. Log in using several users with different access rights.
Upload a Content Package as an Add-in for Users
As an administrator, you can import content from packages that were developed internally or by third parties. Like other add-ins, the content add-in extends the functionality of the application.

NOTE This procedure requires the Content Add-Ins - Administer and Administration - XOG global access rights.
Follow these steps:
1. Open Administration, and from the Studio menu, select Content Add-ins. 2. Click Upload Content Package. 3. On the Upload Content Package page, click Choose File. 4. Select a content package JAR file and click Open. 5. To force all content items in the package to install and upgrade any existing content from a previous version, select
Install in Migration Mode. 6. Click Save. The Processes tab appears.
NOTE The Processes tab does not appear for legacy add-ins that are bundled with Classic PPM. 7. To determine status, view the Progress bar, Steps in Progress, Status, Start Date, and Finish Date columns. 8. To view content installation messages, click the icon in the Messages column.
- To view more details, click a line item and then click Show Details.
- To return to the previous page, click Return. 9. Click the Properties tab. a. Verify that the Status field shows Installed. b. Verify that the correct version information appears. c. Click Return. 10. To view the installed content items in the package, click Items and select List or Hierarchy. Examine the Status field. a. Upgrade Ready appears when a new item is available in a new version of a package you uploaded. These items were modified in the new version. To install items in an Upgrade Ready state, select them and click Install. Any new versions of items overwrite old items. Click Yes to confirm. The Status changes to Installed or Processed. b. Not Installed appears when the new item is not installed. c. Upgrade Pending appears only for content add-ins that are available with the Classic PPM application. 11. To verify that the content appears correctly: a. Navigate to a known page or portlet in the package. b. Log in using several users with different access rights. 12. (Optional) To examine the history, open Administration, and from Studio select Content Add-ins. Open an add-in, click History, and select Content Items.
NOTE Any protected items show a 1 in their Revision column. For example, objects with protected views are not updated with a new version. Click the Items tab and select the Upgrade Ready items that you want to install. For example, you can upgrade and overwrite protected views with object views in the new version of the package. On the Content Add-Ins History page content items are not localized. They are shown as they appear in the database tables.
TIP
The system cannot update an Active process. To update a process with content from an add-in or Studio content package, set the process to On Hold. Running instances are not disturbed. The process definition is updated when the content add-in is applied on the target system. Then, set the updated process back to Active.
Content Add-in Versions
The following version information appears on the Properties page for a content add-in:
- Content Add-in Base Version The original version of the content add-in or package when it was first installed.
- Clarity Base Version The original version of Classic PPM when the content add-in or package was first installed.
- Content Add-In Installed Version The current installed version of the content add-in.
- Clarity Installed Version The current installed version of Classic PPM that was active when the selected add-in was
last installed.
- Content Add-In Installed Date The date and time when the content add-in or package was installed.
- Sample Data Installed Date The date and time when the optional PMO add-in sample data was installed.
For new installations, only the base versions appear. For Classic PPM upgrades with no corresponding upgrade to the add-in, the add-in continues to show only its base version. In other words, the installed version fields appear only when they are different from the base version.
Example
Your organization upgraded from Classic PPM Version 13.0 to Release 13.2. At the same time, you upgraded from PMO add-in 3.0 to 3.2. You did not upgrade to release 14.x yet. The 14.x version applies to both Classic PPM and the PMO add-in. As an administrator, you attempt to upload the PMO 14.x add-in. The Status field for the PMO add-in shows Upgrade Pending because it requires an application upgrade. The following version information appears:
- Content Add-In Base Version: 3.0.00
- Clarity Base Version: 13.0.00
- Clarity Installed Version: 13.2.00
When you install Classic PPM 14.x, the status of the PMO 14.x add-in upgrade changes to Upgrade Ready.
- Content Add-In Base Version: 3.0.00
- Content Add-In Installed Version: 14.x.00
- Clarity Base Version: 13.0.00
- Clarity Installed Version: 14.x.00
After installation, the status changes to Installed.
Troubleshoot Package Validation Message Dependent Items Are Missing
Symptom:
I receive the following validation warning message when I attempt to export a content package:
...installation might fail because some of the dependent items are missing. For more information, click 'Show Details' button.
Solution:
One or more descendants for one or more items in your content package are missing. For example, you or another content developer uploaded a portlet but did not upload its associated query. When the exported package is installed in a target destination, it can fail. The reason it can fail is because the same query does not already exist on the target system. Reset the content in the latest version of the package and build the package again.
Follow these steps:
1. Wait for the status of the export to appear as Completed. 2. On the Content Package Processes page in the Messages column, click the warning flag icon. 3. Click Show Details. 4. Identify the name of the parent item in the Message column and the child item in the Exception column. For example,
the message shows [Validation] Portlet - 'portlet_name'. To help you identify the descendant, Query - query_name appears in the Exception column. 5. Add the parent item and descendants to the package again so that nothing is missing.

Troubleshoot Package Status Installation Failed Symptom: When I upload a content package, its status shows Installation Failed. Solution: A likely cause of failure is a missing parent for a descendant item. For example, you are uploading a package with a view definition for an object that does not exist in the target environment. Follow these steps: 1. Open Administration, and from the Studio menu select Content Add-ins. 2. Click Upload Content Package and select a package JAR file. Installation Failed appears in the Status column. 3. Open the contents of the package. Examine the type and ID of the items to determine the missing entity. 4. Create or modify the missing item. For example, create a new parent object for a view that failed to install. 5. You can also try re-adding the items and descendants to the original package and then exporting it again. 6. Open Administration, and from the Studio menu select Content Add-ins. 7. Click Upload Content Package and select the same or a new package JAR file. Installed appears in the Status column.
Clarity Studio Stock Objects, Actions, and Data Providers
The Classic PPM application provides stock objects, actions, and data providers. As a Studio developer, use these items to customize the application at your organization.
- Studio Stock Objects
- Studio Stock Object Actions
- Studio System Data Providers
NOTE Studio also includes stock portlets. For more information about the stock portlets, see Portlet Reference.
Studio Stock Objects The following stock objects are provided with the application: Action Item: Action items are the units of work, or tasks, that you assign to members of a project, or to yourself. Action items allow you to track the progress of investments and help you complete investments on time. The product supports the following action items: personal, project, and process. All action items can be viewed from the Action Item area of the Organizer. Assignment: Assignments describe how a staff member works on a task and they include the following attributes:
- the start and finish dates
- the start and finish times
- the actual and remaining work
- the status Baseline: The baseline object contains a subset of the project object fields and is a snapshot of a project over time. Benefit Plan: This object contains benefit plan information that is used for the Benefit Plan list page. Benefit Plan Detail: This object describes benefit plan information that is used to enter proposed returns on an investment.

Change Requests: This object describes the evaluation and approval criteria for change requests. The change request object is a subobject of the Project object.
Company: This object provides descriptive information about companies including as Account Manager, Category, Company Type, Industry, Contact, and Rating.
Cost Plan: This object contains the attributes that are used on the Cost Plan and Budget list pages.
Cost Plan Detail: This object details the cost plan information that is used to create cost projection scenarios and budget revisions for an investment.
Department: This object represents a place in the company organizational chart. This object is used primarily as a point of responsibility for staff and budgeting.
Financial Properties: This object stores financial properties information that is displayed on the Financial subpage for NPIOs.
Financials: This object stores the attributes for the Simple Budget page.
Fiscal Time Period: This object stores the fiscal time periods that are used in financial plans and chargebacks.
GL Account: This object represents the general ledger account. A GL account is used when charging departments costs delivered work, and for crediting departments for the cost of resources.
Investment: This abstract object contains the base attributes for all investments.
Issue: This object is a risk that has been realized. This object enables risk property management to help increase the likelihood of project success.
Location: This object represents a geographical location for a company. This object can also be a unit in the organizational breakdown structure (OBS) by location.
Portfolio: This object represents a portfolio of investments. Portfolio managers evaluate this object to make the following portfolio management process decisions for each investment:
- Start
- Continue
- Discontinue
- Postpone
Portfolio Investment: This object is a subobject of the Portfolio object. This subobject represents any investment (for example, project, asset, application) you can add to a portfolio.
Portfolio Investment Role Demand: This subobject of the Portfolio Investment object represents the role demand for any investment in a portfolio.
Portfolio Plan: This object which is a subobject of the Portfolio object represents a portfolio plan.
Project: This object represents a project.
Project Financial Properties: This object stores project properties information that appears on the Financial subpage for projects.
Resource: This object represents a resource.
Risk: This object measures the likelihood of meeting project expectations for budget, time, and quality. The Risk Indicator reflects the highest risk of component projects. This object is a subobject of the Project object.
Task: This object describes activities that span a specific time. Tasks are part of the WBS and feed the project plans. Time can be tracked for a task. The task object is a subobject of the Project object.
Team: The Team object is a subobject of a Project. The Team subobject describes the four types of labor resources that can be added to a team:
- Staff: A member of the project (resource or role) who is assigned tasks.
- Participant: A person who can access a project to look at documents, discussions, calendars, and properties, but is not
assigned tasks.
- Project Groups: A grouping of participants that can be assembled for the project.
- Collaboration Manager: A project role that allows you to create project groups and grant participants.

Studio Stock Object Actions
The following table lists the stock object actions that are available with the application. The following definitions apply:
- Generic indicates that you can add an object action to tabs on the Project Default Layout portlet page.
- Global indicates that you can add an object action to any view for any object and to the Home menu.

Action Item Baseline Baseline Baseline Benefit Plan Detail Cost Plan Cost Plan Cost Plan Cost Plan Cost Plan Detail Cost Plan Detail Cost Plan Detail Cost Plan Detail Cost Plan Detail Department

Object:

New Action ItemCreates a new action item. npt.setObjectUserPartitions
New BaselineCreates a new baseline. projmgr.baselineRevisionProperties
Update BaselineUpdates a baseline. projmgr.baselineRevisionUpdateClick
Update Cost Totals Update earned value cost totals. projmgr.baselineRevisionEarnedValueUpdate
Add Benefit Plan Detail Adds benefit plan detail rows to a benefit pl revmgr.benefitplandetailProperties
Approve Budget Approves the budget. revmgr.costplanListApproveBudget
Reject Budget Rejects the budget. revmgr.costplanListRejectBudget
Set as Plan of Record Sets the selected cost plan as the plan of rec revmgr.markPlanCurrent
Submit Plan of Record for Approval Submits the cost plan of recor revmgr.submitForApproval
Add Cost Plan Detail Adds cost plan detail rows to a detail cost plan revmgr.costplandetailNew
New Budget Plan Detail Adds budget plan detail rows to a budget p revmgr.budgetplandetailNew
Populate from Investment Team Creates cost plan detail rows from revmgr.populateFromResourcePlan
Populate from Task Assignments Creates cost plan detail rows fro revmgr.populateFromTaskAssignments
Submit for Approval Submits the cost plan of record for budget app revmgr.submitForApproval
Add Department Adds a department. revmgr.locationDepartmentsToAdd


Department Fiscal Time Period Fiscal Time Period Fiscal Time Period GL Account Location Location Portfolio Project Project Project Project Project Project Project Project Project Project Project Project

Object:

New Department Creates a new department. revmgr.departmentPropertiesNew
Activate Makes the fiscal time period active. revmgr.activateTimePeriods
Deactivate Makes the fiscal time period inactive. revmgr.deactivateTimePeriods
New Fiscal Time Period Creates a new fiscal time period. revmgr.timePeriodNew
New GL Account Creates a new GL account. revmgr.glAccountNew
Add Location Adds a location. revmgr.departmentAddLocations
New Location Creates a new location. revmgr.locationNew
New Portfolio Creates a new portfolio pma.portfolioNewObjectAction
Add Dependency Adds a dependent project. projmgr.selectProjectDependencies
Add Subproject Adds a subproject to the project. projmgr.selectSubProjects
Add to My Projects Adds the project to the My Projects portlet. projmgr.hotListMemberInsert
Copy Project from Template Creates a project from the selected pro projmgr.selectProjectTemplate
Create Baseline Creates a new project baseline. projmgr.createBaseline
Go to Links page Navigates to the Links page. projmgr.linkList
Go to Notes page Navigates to the Notes page. projmgr.noteList
New Benefit Plan Creates a new benefit plan. revmgr.newBenefitplan
New Change Request Creates a new change request. itl.changeNew
New from Investment Team Creates a new cost plan from the Inves revmgr.newCostplanFromInvTeam
New from Task Assignments Creates a new cost plan from the task revmgr.newCostplanFromTaskAssgn
New Issue Creates a new issue. itl.issueNew


Project Project Project Project Project Project Resource Resource Resource Task Task Task Task Task Task Task Task Team Team Team

Object:

New Manual Plan Creates a new manual cost plan revmgr.newCostplan
New Project Creates a new project. projmgr.projectNew
New Risk Creates a new risk. itl.riskNew New Task Creates a new task.
projmgr.newTask New WBS Task Creates a new task and adds it to the WBS page. projmgr.newWBSTask Remove from My ProjectsRemoves the project from the My Project
projmgr.hotListItemDelete Book Resources Books the resources for the project.
resource.loadResourcesForBooking New Resource Creates a new project resource.
projmgr.resourceNewOptions_odf Replace Replaces the resource.
resource.replaceResources Add Existing Tasks Adds selected tasks.
projmgr.wbsLinkToTasks Add Hyperlinks to Task Adds hyperlinks to the task.
projmgr.linkList Add Notes to Task Adds notes to the task.
projmgr.noteList Assign Resource to Task Assigns the resource to the task.
projmgr.wbsTaskListAssignClick Copy Task from Template Creates a new task as a copy of a templa
projmgr.selectProjectTemplate Link Tasks Creates task dependencies for selected tasks
projmgr.wbsGridCreateDependency Update Cost Totals Updates the earned value cost totals in the Task
projmgr.updateEarnedValueAction Update Cost Totals Updates the earned value cost totals on the WB
projmgr.wbsupdateEarnedValueAction Accept Hard Allocation Confirms acceptance of a hard allocation
projmgr.resourceProjectsSelitemCheckConfirm2 Accept Hard Allocation Accepts hard allocation for the selected tea
projmgr.teamSelitemCheckConfirm Add Resource Allocation Allocates the selected team resource.
pma.selectResourceInvestments


Team Team Team Team Team Team Team Team Team Team Transaction Header Transaction Header Transaction Header Transaction Line Transaction Line Transaction Line

Object:

Add Team Member Adds a team member. projmgr.resourceObjectSelectionList
Add/update by OBS Adds or updates team properties by OBS. projmgr.staffOBSUpdateProperties
Allocate from Estimates Updates the team's allocation based on the projmgr.teamUpdateForAllocation
Assignment Roles Selects a role to assign. projmgr.assnRoleSwapClick
Commit Planned Allocation Commits the planned allocation for the projmgr.resourceProjectsSelitemCheckConfirm3
Commit Planned Allocation Commits the planned allocation for the projmgr.teamSelitemCheckConfirm1
Estimate from Allocation Generates resource estimates based on a projmgr.teamUpdateForEstimate
Set Allocation Sets the staff allocation. projmgr.staffSetAllocationClick
Shift Allocation Shift or scale the selected resource allocation. projmgr.resourceShiftScaleSelection
Shift Allocation Shift or scale the selected team allocation. projmgr.teamShiftScaleSelection
New Transaction Creates a new transaction. npt.setObjectUserPartitions
Post Selected Posts the selected transaction. revmgr.postSelectedHeaders
Recalculate Selected Recalculates the selected transaction. revmgr.recalculateSelectedHeaders
New Transaction Line Inserts a new transaction line. npt.setObjectUserPartitions
Post Selected Lines Posts the selected transaction lines. revmgr.postSelectedLines
Recalculate Selected Lines Recalculates the selected transaction li revmgr.recalculateSelectedLines


Studio System Data Providers Data providers are the source behind all list and chart portlet data. They are special data constructs that can be accessed directly through portlets or through queries. System types are data providers that are not based on a specific object. The following table describes each system data provider.

Type Action Item System Data Provider Actuals vs Allocation Discrepancy
Aggregation Investment List Assigned Change Requests Assigned Issues Assigned Risks Entity Hierarchy
Key Tasks
OBS Investment Aggregation OBS Resource Aggregation Resources with Aggregation
Resources with Availability Roles with Resource Aggregation
Scenario List
Task Dependencies Team Allocations

Description
The data provider recommended for building action item portlets.
Data provider for the Team object that can be filtered to show team members that have an actual vs allocation discrepancy over a certain threshold.
Data provider for displaying a list of investments aggregation.
Data provider for displaying assigned change requests.
Data provider for displaying assigned issues.
Data provider for displaying assigned risks.
Data provider for displaying hierarchical entities such as investments.
This is a subset of the Task object and contains data about key tasks.
Data provider for displaying investments OBS aggregation.
Data provider for displaying resources OBS aggregation.
Data provider for resources with time-scaled and team-based aggregation support.
Data provider to showing a list of resources with availability.
Data provider for role resources with time-scaled and resource/ team-based aggregation support.
Data provider for the list of portfolio and capacity planning scenarios.
Data provider for displaying task dependencies.
Data provider for the Team object with time-scaled and aggregation support.

Clarity Studio Portfolio Data Providers
This page lists the portfolio attributes by Classic PPM Studio data provider. You can use these attributes as fields, filters, or both in the portfolio portlets that you design.
- Portfolio Provider
- Portfolio Plan Provider
- Portfolio Investment Provider
- Portfolio Investment Financial Performance Provider
- Portfolio Role Capacity and Demand


Portfolio Provider
Use the 123 attributes in this data provider to develop chart and grid portlets for displaying data about one or more portfolios. This provider includes fields for displaying investment, distributed, and target portfolio data.
- Above Waterline (Filter) Data Type: Boolean Display Type: Pull-Down Use this portfolio investment object attribute to filter the investments that are included in the investment aggregation amounts. This filter enables users to view the role capacity, demand, and remaining amounts for all investments (All), or only investments above (Yes) or below (No) the waterline.
- Active (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate the status of a portfolio. Portfolios are either active or inactive. You can also filter by this field.
- Capacity Unit Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to determine whether portfolio resource capacity values appear in hours or FTE.
- Cost Health (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to determine if overall health scores appear based on planned or target total costs.
- Created By (Field and Filter) Data Type: String Display Type: Text Use this attribute to display the full name (Last Name, First Name - SRM_RESOURCES.FULL_NAME) of the resource who created the portfolio.
- Created By Resource (Filter) Data Type: Number Display Type: Text Entry Use this attribute to display the name of the resource who created the portfolio.
- Created Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when this portfolio was created.
- Currency (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the type of currency for the portfolio.
- Department (Field and Filter) Data Type: Lookup - String Display Type: Text

Use this attribute to display the customer or provider department portfolios. The department attribute acts as a provider type field where users can select Customer or Provider. The portfolios for departments that fund investments are called customer portfolios. The costs of shared investments in each related portfolio appear. Investments are included in the customer department portfolios as long as chargeback rules exist to charge that department. The portfolios for departments that own the investments are called provider department portfolios. All of the investments that the department owns are included in the portfolio. Investments are included in the provider department portfolios as long as they are owners of those investments.
- Description (Field and Filter) Data Type: String Display Type: Text Use this attribute to display a description for each portfolio.
- Distributed Benefits (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed target benefits of the portfolio. Apply the Portfolio Plan Type filter to this amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter. It is a scalar value and not a time-sliced value.
- Distributed Benefits (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) This attribute displays a total if placed in a grid and a time-sliced value if placed in a virtual time-sliced value attribute. It appears in the filter section of grid portlets as a numeric or numeric range filter, filtering on the total (not the time-sliced value).
- Distributed Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed capital cost in units of currency for a portfolio. Apply the Portfolio Plan Type filter to this amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter. It is a scalar value and not a time-sliced value.
- Distributed Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) This attribute displays a total if placed in a grid and a time-sliced value if placed in a virtual time-sliced value attribute. It appears in the filter section of grid portlets as a numeric or numeric range filter, filtering on the total (not the time-sliced value).
- Distributed Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed cost in units of currency for a portfolio. This attribute is clipped for the portfolio planning horizon. It is a scalar value and not a time-sliced value. Apply the Portfolio Plan Type filter to this

amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter.
- Distributed Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) This attribute displays a total if placed in a grid and a time-sliced value if placed in a virtual time-sliced value attribute. This attribute is clipped for the investment dates. It appears in the filter section of grid portlets as a numeric or numeric range filter, filtering on the total (not the time-sliced value).
- Distributed Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed operating cost in units of currency for a portfolio. This attribute is clipped for the portfolio planning horizon. It is a scalar value and not a time-sliced value. Apply the Portfolio Plan Type filter to this amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter.
- Distributed Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) This attribute displays a total if placed in a grid and a time-sliced value if placed in a virtual time-sliced value attribute. This attribute is clipped for the investment dates. It appears in the filter section of grid portlets as a numeric or numeric range filter, filtering on the total (not the time-sliced value).
- Distributed Overall Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the distributed overall roles in FTE or hours for a portfolio. This attribute is clipped for the portfolio planning horizon. It is a scalar value and not a time-sliced value. Apply the Portfolio Plan Type filter to this amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter.
- Distributed Overall Roles (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) Apply the Portfolio Plan Type filter to this amount to view the portfolio or the plan of record distributed amount based on the filter selected. This attribute displays a total if placed in a grid and a time-sliced value if placed in a virtual timesliced value attribute. This attribute is clipped for the investment dates. It appears in the filter section of grid portlets as a numeric or numeric range filter, filtering on the total (not the time-sliced value).
- Distributed Overall Roles to Investment Demand Variance (Filter) Data Type: Number Display Type: Text Entry Use this attribute to display the difference between planned distributed capacity expressed in hours or FTE and the actual investment allocations. Calculation:
DOR to IDV = Distributed Overall Roles - Investment Role Allocation Demand
- Distributed Overall to Total Roles Variance (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by the value of the difference between the distributed overall roles and the total roles. Calculation:
DOR to TRV = Distributed Overall Roles - Distributed Total Roles
- Distributed to Investment Planned Benefits Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by the difference between the distributed benefits and the investment planned benefits for a portfolio. Calculation:
D to IPBV = Distributed Benefits - Investment Planned Benefits
- Distributed to Investment Planned Capital Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by the difference between their distributed capital cost and their investment planned capital cost. Calculation:
D to IPCCV = Distributed Capital Cost - Investment Planned Capital Cost
- Distributed to Investment Planned Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by the difference between distributed total cost and the investment total cost. Calculation:
D to IPCV = Distributed Total Cost - Investment Total Cost
- Distributed to Investment Planned Operating Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by the difference between the distributed and planned operating costs for their investments. Calculation:
D to IPOCV = Distributed Operating Cost - Investment Planned Operating Cost
- Distributed Total Roles (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter on the total distributed roles in FTE or hours for a portfolio. This attribute is clipped for the portfolio plan planning horizon. It is a scalar value and not a time-sliced value. This attribute appears in the Role: Portfolio Role Totals section when you select a plan in the filter on the upper right side of the portfolio Targets page. The value of the Distributed Total Roles attribute matches the entry in the Totals row under the Distributed Target column.
- Distributed Total Roles (Total) (Filter) Data Type: Number

Display Type: Text Entry (Matching attribute for totals and time-sliced values.) This attribute is clipped for the investment dates.
- Distributed Total Roles to Investment Demand Variance (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by the difference between their distributed total roles and their investment role allocation demand. Calculation:
DTR to IDV = Distributed Total Roles - Investment Role Allocation Demand
- Financial Entity (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolios by their associated financial entities. Each entity is financially aware of a unique set of geographical OBS locations and OBS departments. Entity definitions are the foundation for financial plans and help make sense of investment costs. You can set up defaults at the entity level to suggest the recommended cost plan structure for your organization. For example, predefine the fiscal time period type and the grouping attributes for all cost plans. The default values are automatically populated for individual investment cost plans at the time you create them. Project managers can change these defaults for their specific investments.
- Finish Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the finish date for the portfolio.
- Fiscal Period End Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolios by their fiscal time period finish date.
- Fiscal Period Start Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolios by their fiscal time period start date.
- Fiscal Period Type (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolios by their period type, such a monthly or quarterly.
- Goal Alignment (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the defined goal of the portfolio investment. Values: Cost Avoidance, Cost Reduction, Grow the Business, Infrastructure Improvement, or Maintain the Business
- Innovation Level (Field and Filter) Data Type: Lookup - String Display Type: Text

Use this attribute to display the value of the portfolio in terms of innovation. Portfolios with high innovation levels offer higher risk and rewards. Portfolios with low innovation levels offer lower risk and rewards.
- Investment Actual Capital Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by the aggregate amount of posted capital costs for investments in the portfolio. Apply the Above Waterline and Portfolio Plan Type filters to this amount to include or exclude specific investments.
- Investment Actual Capital Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Actual Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter on portfolios by the aggregate amount of posted actual costs for investments in the portfolio. Apply the Above Waterline and Portfolio Plan Type filters to this amount to include or exclude specific investments.
- Investment Actual Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Actual Operating Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Actual Operating Cost.
- Investment Actual Operating Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Budgeted Benefit (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Budgeted Benefit.
- Investment Budgeted Benefit (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Budgeted Capital Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Budgeted Capital Cost.
- Investment Budgeted Capital Cost (Total) (Filter) Data Type: Money

Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Budgeted Capital Cost Remaining (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter by the remaining capital cost budgeted for the investments in the portfolio. Calculation:
Budgeted Capital Cost Remaining = Budgeted Capital Cost - Actual Capital Cost
- Investment Budgeted Capital Cost Remaining (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Budgeted Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Budgeted Cost.
- Investment Budgeted Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Budgeted Cost Remaining (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Budgeted Cost Remaining.
- Investment Budgeted Cost Remaining (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Budgeted Operating Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the budgeted cost where cost type is Operating in the current approved budget revision for an investment.
- Investment Budgeted Operating Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Budgeted Operating Cost Remaining (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Budgeted Operating Cost Remaining.
- Investment Budgeted Operating Cost Remaining (Total)


(Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Planned Benefit (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Planned Benefit.
- Investment Planned Benefit (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Planned Capital Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Planned Capital Cost.
- Investment Planned Capital Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Planned Capital Cost Remaining (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Planned Capital Cost Remaining.
- Investment Planned Capital Cost Remaining (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Planned Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Planned Cost.
- Investment Planned Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Planned Cost Remaining (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Planned Cost Remaining.
- Investment Planned Cost Remaining (Total) (Filter) Data Type: Money

Clarity - 16.4.1 4160


Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Planned Operating Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Planned Operating Cost.
- Investment Planned Operating Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Planned Operating Cost Remaining (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Planned Operating Cost Remaining.
- Investment Planned Operating Cost Remaining (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Realized Budgeted Benefit (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Realized Budgeted Benefit.
- Investment Realized Budgeted Benefit (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Realized Planned Benefit (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Investment Realized Planned Benefit.
- Investment Realized Planned Benefit (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Role Actuals (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by Investment Role Actuals.
- Investment Role Actuals (Total) (Filter) Data Type: Number Display Type: Text Entry

Clarity - 16.4.1 4161

(Matching attribute for totals and time-sliced values.)
- Investment Role Allocation Demand
(Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by Investment Role Allocation Demand.
- Investment Role Allocation Demand (Total) (Filter) Data Type: Number Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Investment Role Demand Remaining (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by Investment Role Demand Remaining.
- Investment Role Demand Remaining (Total) (Filter) Data Type: Number Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Last Sync Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when the portfolio investment data was last updated by the sync job. The portfolio data represents a snapshot of the actual investment data in real time. You can update the portfolio data with the actual investment data by running a sync job. Syncing is important because portfolio stakeholders want current data. You can configure a sync job schedule to refresh a portfolio automatically at a recurring time interval such as weekly. You can also run the sync job manually.
- Last Updated By (Field and Filter) Data Type: String Display Type: Text Use this attribute to display the full name (Last Name, First Name - SRM_RESOURCES.FULL_NAME) of the resource who last updated the portfolio.
- Last Updated By Resource (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by the name of the most recent resource who updated the information.
- Last Updated Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when this portfolio was last modified.
- Managers (Field and Filter) Data Type: Lookup - String Display Type: Text

Use this attribute to display the managers who are assigned to the portfolio.
- OBS Unit
(Filter) Data Type: Lookup - Number Display Type: Browse Use this attribute to filter portfolios by OBS Unit.
- Organizational (Field) Data Type: OBS - Lookup Display Type: Text Use this attribute to display the full path for the OBS hierarchy for one or more portfolios. Example: /All OBS Units/Infrastructure Group/Facilities
- Overall Health (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the overall health score for a portfolio. Portfolios with high overall health scores (68 - 100) appear in the green zone on the upper third of the y-axis in bubble charts. Portfolios with mid-level health (34 - 67) appear in yellow in the middle third of bubble charts. Portfolios with low overall health scores (0 - 33) appear in the red zone in the lower third of bubble charts.
- Page Layout (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the page layout or to filter on the page layout for the portfolio data. For example, default page layout, PMO Program Status page layout, or PMO Project Storyboard page layout.
- Partition (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the portfolio partition and to enable users to filter portfolio data for a selected partition only.
- Plan of Record (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to indicate whether a portfolio plan is the recognized plan of record (when checked, true, or 1) or just another plan (when clear, false, or 0).
- Portfolio (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter plans or investments by the name of the associated portfolio.
- Portfolio ID (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the unique identifier for a portfolio. This field was formerly known as Portfolio Code.
- Portfolio Name (Field and Filter) Data Type: String

Display Type: Text Use this attribute to display or filter by the name of the portfolio.
- Portfolio Plan Type (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute from the Portfolio Investment provider to filter the investments that appear in the investment aggregation amounts defined for this provider. Portfolio plan types filter the target and distributed amounts that appear in portlets. The user can select a Portfolio Plan Type filter value of portfolio or plan of record. Portfolio: The provider displays investment data, target amounts, and distributed amounts from the portfolio (not from a plan). By default, if the user does not select a value in the filter, the provider returns portfolio values. This rule applies to all of the target, distributed, and investment amounts in this provider. Plan of Record: The provider displays investment data, target amounts, and distributed amounts from the portfolio plan that is marked as the plan of record.
- Probability of Success (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by this score for a portfolio. A display mapping converts this metric into one of three traffic light colors:
Green (High). The portfolio will probably succeed in meeting established goals.
Yellow (Medium). The portfolio could succeed or fail to meet established goals.
Red (Low). The portfolio has a low chance of meeting established goals.
- Resource Health (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the resource health score for a portfolio.
- Risk (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the portfolio risk score represented by the following traffic light colors:
Red: High risk.
Yellow: Medium risk.
Green: Low risk.
- Risk for Charts (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the project risk score. The numeric project risk score often appears in one of three traffic light colors: Green (0 through 33). The project risk is low. Yellow (34 through 67). The project risk is medium. Red (68 through 100). The project risk is high.
- Schedule Health (Field and Filter) Data Type: Lookup - String Display Type: Text

Use this attribute to display the schedule health score for a portfolio.
- Stakeholders
(Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the names of people who are interested in the portfolio. Stakeholders include executives, sponsors, managers, select customers, and key IT, business, legal, and supporting representatives with an active vested interest in the status of the investment.
- Start Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the start date for the portfolio investment.
- Sync Error (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the sync error.
- Sync Schedule (Field and Filter) Data Type: String Display Type: Text Use this attribute to display the sync schedule for a portfolio.
- Target Benefits (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the total amount of money that the portfolio will return by the end of the planning horizon. Apply the Portfolio Plan Type filter to display the portfolio or the plan of record target amount.
- Target Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the total amount of money that the portfolio will spend on capital expenditures during the planning horizon. Apply the Portfolio Plan Type filter to display the value from the portfolio or the plan of record.
- Target Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the total amount of money that the portfolio will spend on operations during the planning horizon. Apply the Portfolio Plan Type filter to display the value from the portfolio or the plan of record.
- Target Overall Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the total amount of effort that the portfolio requires during the planning horizon. The effort is based on all portfolio roles and is expressed in hours or FTE units. By comparing the target with the distributed target, you can determine if you have enough capacity to fill the required roles. Apply the Portfolio Plan Type filter to display the portfolio or the plan of record target amount.
- Target Overall Roles to Investment Demand Variance (Filter) Data Type: Number


Display Type: Text Entry Use this attribute to filter portfolios by Target Overall Roles to Investment Demand Variance.
- Target Overall to Total Roles Variance (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by Target Overall to Total Roles Variance.
- Target to Distributed Benefits Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Target to Distributed Benefits Variance.
- Target to Distributed Capital Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Target to Distributed Capital Cost Variance.
- Target to Distributed Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Target to Distributed Cost Variance.
- Target to Distributed Operating Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Target to Distributed Operating Cost Variance.
- Target to Distributed Overall Roles Variance (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by Target to Distributed Overall Roles Variance.
- Target to Distributed Total Roles Variance (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by Target to Distributed Total Roles Variance.
- Target to Investment Planned Benefits Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Target to Investment Planned Benefits Variance.
- Target to Investment Planned Capital Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Target to Investment Planned Capital Cost Variance.
- Target to Investment Planned Operating Cost Variance (Filter) Data Type: Money Display Type: Text Entry

Clarity - 16.4.1 4166

Use this attribute to filter portfolios by Target to Investment Planned Operating Cost Variance.
- Target to Investment Planned Total Cost Variance
(Filter) Data Type: Money Display Type: Text Entry Use this attribute to filter portfolios by Target to Investment Planned Total Cost Variance.
- Target Total Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the total amount of money that the portfolio will spend on capital and operating expenditures during the planning horizon. Apply the Portfolio Plan Type filter to display the value from the portfolio or the plan of record.
- Target Total Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the total amount of effort that the investment requires during the planning horizon. The effort is based on investment roles and is expressed in hours or FTE units. By comparing the target with the distributed target, you can determine if you have enough capacity to fill the required roles. Apply the Portfolio Plan Type filter to display the portfolio or the plan of record target amount.
- Target Total Roles to Investment Demand Variance (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by Target Total Roles to Investment Demand Variance.
Portfolio Plan Provider
Use the 66 attributes in this data provider to develop chart and grid portlets that capture portfolio plan data for multiple portfolios.
- Approved (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate that a portfolio plan is approved (when checked, true, or 1) or unapproved (when clear, false, or 0).
- Capacity Unit Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to determine whether portfolio resource and role capacity values appear in hours or FTE.
- Created By (Field and Filter) Data Type: String Display Type: Text Use this attribute to display the full name (Last Name, First Name - SRM_RESOURCES.FULL_NAME) of the resource who created the portfolio plan.
- Created By Resource (Filter) Data Type: Number Display Type: Text Entry

Use this attribute to filter portfolio plan data by the resource who created the plan.
- Created Date
(Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when this portfolio plan was created.
- Currency (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the type of currency for the portfolio plan.
- Current Selected Plan (Filter) Data Type: Boolean Display Type: Pull-Down Use this attribute to identify the plans that are currently selected for inclusion in comparison reports.
- Description (Field and Filter) Data Type: String Display Type: Text Use this attribute to display a description for each portfolio plan.
- Distributed Benefits (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed target benefits of the portfolio plan. Apply the Portfolio Plan Type filter to this amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter. It is a scalar value and not a time-sliced value.
- Distributed Benefits (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Distributed Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed capital cost in units of currency for a portfolio plan. Apply the Portfolio Plan Type filter to this amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter. It is a scalar value and not a timesliced value.
- Distributed Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Distributed Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed cost in units of currency for a portfolio plan. This attribute is clipped for the portfolio planning horizon. It is a scalar value and not a time-sliced value. Apply the Portfolio Plan Type filter to this

amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter.
- Distributed Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) This attribute is clipped for the investment dates.
- Distributed Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed operating cost in units of currency for a portfolio plan. This attribute is clipped for the portfolio planning horizon. It is a scalar value and not a time-sliced value. Apply the Portfolio Plan Type filter to this amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter.
- Distributed Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) This attribute is clipped for the investment dates.
- Distributed Overall Roles (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed overall roles in FTE or hours for a portfolio plan. This attribute is clipped for the portfolio planning horizon. It is a scalar value and not a time-sliced value. Apply the Portfolio Plan Type filter to this amount to view the portfolio or the plan of record distributed amount based on the filter selected. This field appears in the filter section of grid portlets as a numeric or numeric range filter.
- Distributed Overall Roles (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) This attribute is clipped for the investment dates.
- Distributed Total Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the total distributed roles in FTE or hours for a portfolio plan. This attribute is clipped for the portfolio planning horizon. It is a scalar value and not a time-sliced value. This attribute appears in the Role: Portfolio Role Totals section when you select a plan in the filter on the upper right side of the portfolio Targets page. The value of the Distributed Total Roles attribute matches the entry in the Totals row under the Distributed Target column.
- Distributed Total Roles (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.) This attribute is clipped for the investment dates.
- Financial Entity (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio plan data by Financial Entity.
- Finish Date

(Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the finish date for the portfolio plan.
- Fiscal Period End Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio plan data by Fiscal Period End Date.
- Fiscal Period Start Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio plan data by Fiscal Period Start Date.
- Fiscal Period Type (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio plan data by Fiscal Period Type.
- Last Updated By (Field and Filter) Data Type: String Display Type: Text Use this attribute to display the full name (Last Name, First Name - SRM_RESOURCES.FULL_NAME) of the resource who last updated the portfolio plan.
- Last Updated By Resource (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by Last Updated By Resource.
- Last Updated Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when this portfolio plan was last modified.
- Page Layout (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the page layout or to filter on the page layout for the portfolio plan data. For example, default page layout, PMO Program Status page layout, or PMO Project Storyboard page layout.
- Partition (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the portfolio partition or to enable users to filter portfolio plan data by a selected partition only.
- Plan ID (Field and Filter) Data Type: String Display Type: Text

Use this attribute to display or filter by the unique identifier for each portfolio plan.
- Plan Name
(Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the name for each portfolio plan.
- Plan of Record (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate whether a portfolio plan is the recognized plan of record (when checked, true, or 1) or just another plan (when clear, false, or 0).
- Portfolio (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the name of the associated portfolio for the plan.
- Portfolio Active (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate whether a portfolio plan is active (when checked, true, or 1) or inactive (when clear, false, or 0). You can use this attribute to filter portfolio plan records.
- Portfolio Distributed Benefits (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed benefits in units of currency for a portfolio. This attribute is from the portfolio object, which is the master object of the portfolio plan object.
- Portfolio Distributed Benefits (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter portfolio plans by their distributed capital cost.
- Portfolio Distributed Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter portfolios by their distributed cost.
- Portfolio Distributed Cost (Total) (Field and Filter) Data Type: Time-varying

Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the distributed operating cost.
- Portfolio Distributed Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Overall Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the overall total role effort spread over multiple time periods. The distributed effort is expressed in hours or FTE units.
- Portfolio Distributed Overall Roles (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Total Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter plans by the total amount of labor effort for all roles distributed across multiple time periods. Role effort values are expressed in hours or FTE units.
- Portfolio Distributed Total Roles (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Portfolio Finish Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the end date for the portfolio plan.
- Portfolio ID (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the unique identifier for a portfolio. Note: This field was formerly known as Portfolio Code.
- Portfolio Managers (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the names of the resources who are managing the investments in the portfolio.
- Portfolio Name (Field and Filter)

Data Type: String Display Type: Text Use this attribute to display or filter by the name of the portfolio.
- Portfolio Stakeholders (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the resources that are designated as stakeholders for the portfolio plan.
- Portfolio Start Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter by the month, day, and year that marks the start date for the portfolio plan.
- Portfolio Target Benefits (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the target amount of financial benefits that is expected from the portfolio plan.
- Portfolio Target Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the amount of capital costs that is expected from the portfolio plan during a specific planning period.
- Portfolio Target Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the amount of operating costs that is expected from the portfolio plan during a specific planning period.
- Portfolio Target Overall Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter the target role capacity for the portfolio plan expressed in the selected capacity unit type (hours or FTE).
- Portfolio Target Total Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the amount of total costs that is expected from the portfolio plan during a specific planning period.
- Portfolio Target Total Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total number of hours or FTE set as a planned target for the portfolio plan from all identified roles.
- Start Date (Field and Filter) Data Type: Date Display Type: Date Text

Use this attribute to display or filter by the date when a portfolio plan begins.
- Target Benefits
(Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the target amount of financial benefits that is expected from the portfolio plan.
- Target Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the target amount of capital cost spending for the portfolio plan.
- Target Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the target operating cost for the portfolio plan.
- Target Overall Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the target overall roles of the portfolio plan.
- Target Total Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by target cost of a portfolio plan.
- Target Total Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the target capacity and role demand by month, and in total, for investments in a portfolio plan. Portfolio roles from the Targets tab are included. Unplanned roles, referred to as Other Roles, are allocated to portfolio investments but are not included in targets.
Portfolio Investment Provider
Use the 244 attributes in this data provider to develop chart and grid portlets for portfolio investments. This provider includes fields for planned, budgeted, and actual costs, NPV, ROI, payback, and role allocations. All the attributes in this provider also appear in the Portfolio Investment Financial Performance data provider.
NOTE
If you add an aggregate calculated attribute (ACA) to the Portfolio Investment object, the ACA is also available to the Portfolio Investment data provider. See Clarity Studio Objects and Attributes for more information about ACA.
- Above Waterline (Field and Filter) Data Type: Boolean Display Type: Boolean

Use this portfolio investment object attribute to filter the investments that are included in the investment aggregation amounts. This filter enables users to view the role capacity, demand, and remaining amounts for all investments (All), or only investments above (Yes) or below (No) the waterline.
- Above Waterline Caption (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments in a portfolio by their status relative to the waterline expressed as text. The Above Waterline attribute appears as a Boolean field with a simple Yes or No for investments. Use the Above Waterline Caption field to show the words Above Waterline or Below Waterline.
- Active (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate the status of a portfolio investment. Investments are either active or inactive.
- Actual Capital % (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of actual costs that are actual capital costs. Calculation: Actual Capital Cost divided by Actual Cost.
- Actual Capital % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Actual Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the total actual cost for the investment from the financial transaction (ppa_wip) table where the Cost Type is Capital. The amount is clipped for the planning horizon.
- Actual Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) The amount is clipped by the investment dates.
- Actual Cost (Field and Filter) Data Type: Money Display Type: Number This is the total actual cost for the investment from the financial transaction (ppa_wip) table to display the total cost of the investment regardless of cost type. This is not the same as ACWP, which is already on the portfolio investment object. If the user enters a date in the Forecast As Of Date filter attribute, the Actual Cost represents the total up to that date. If the user does not enter a filter date, this field displays the entire Actual Cost.
- Actual Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Actual Operating %

(Field and Filter) Data Type: Percent Display Type: Number Actual Operating Cost / Actual Cost
- Actual Operating % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Actual Operating Cost (Field and Filter) Data Type: Money Display Type: Number This is the total actual cost for the investment from the financial transaction (ppa_wip) table where the cost type is operating. If the user enters a date in the Forecast As Of Date filter attribute, the Actual Operating Cost represents the total only up to that date. If the user does not enter a filter date, this field displays the entire Actual Operating Cost. The amount is clipped for the portfolio planning horizon.
- Actual Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) The amount is clipped by the investment dates.
- Actuals (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display aggregated actuals for all roles in the selected investments. To filter the investments, use the Above Waterline attribute.
- Actuals As Of Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to filter posted actuals by a specific date.
- ACWP(Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the actual cost of work performed (ACWP). This value is the total direct cost (based on posted actuals) that is incurred in performing work during a specified period. The cost calculation includes all actuals posted up until the as-of date or the system date (if no as-of date is provided). Calculation:
ACWP (Assignment) = Calculated as part of the posting process for actuals that are based on the financial
cost matrix.
ACWP (Detail Task) = Sum of ACWP for all the assignments on the task.
ACWP (Summary Task) = Sum of ACWP for all detail tasks in the project.
ACWP (Project) = Sum of ACWP for all summary tasks in project.
- Alignment (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the overall alignment score for the investment represented by the following numeric values:

Red (0 - 33): The investment is poorly aligned to the business.
Yellow (34 - 67): The investment has average alignment to the business.
Green (68 - 100): The investment is aligned to the business.
- Approved (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate that a portfolio plan is approved (when checked, true, or 1) or unapproved (when clear, false, or 0).
- Approved Caption (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments in a portfolio by their approved status expressed as text. The Approved attribute appears as a Boolean image with a green check mark icon for investments that are set to Approved. Use the Approved Caption field to show the words Approved or Unapproved.
- Approved Flag (Filter) Data Type: Boolean Display Type: Pull-Down Use this attribute to filter portfolio investments by their approval status.
- Architectural Fit (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the architectural fit for an investment. This relative value measures how well the investment aligns with the structure of your organization and the architecture of similar projects. The fit is represented by the following traffic light colors:
Green: Based on its architecture, the investment is a high fit.
Yellow: Based on its architecture, the investment is a medium fit.
Red: Based on its architecture, the investment is a low fit.
- BAC (Field and Filter) Data Type: Money Display Type: Number Budget at Completion
- Baseline Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the baseline finish date for a portfolio investment such as a project.
- Baseline Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the baseline start date for a portfolio investment such as a project.
- Baseline Usage (Field and Filter) Data Type: Number

Display Type: Number Use this attribute to display the resource utilization for a portfolio investment when it was baselined. In lists and portlets, this field displays the value from the Baseline Usage field on the baseline revision properties page. Calculation: Baseline Usage = Total of Actuals + ETC
- BCWP (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the earned value metric named Budgeted Cost of Work Performed (BCWP). The value is calculated and recorded when you baseline a project, or when you update earned value totals. BCWP is also referred to as the earned value (EV). BCWP represents the budget at completion (BAC) costs based on performance as measured using the Task EV Calculation method. Calculation: For tasks, BCWP is based on the selected EV calculation method. For projects, BCWP is the sum of BCWP for all WBS Level 1 tasks in the project.
- BCWS (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the system-calculated value of Budgeted Cost of Work Scheduled (BCWS). BCWS is the budgeted amount to spend on the project in a given time period according to plan. If not specified, the date is either the current date for the project, or the system date. BCWS is also referred to as the planned value (PV). Calculation: BCWS = Sum of BAC (for tasks or investments) at a specific point in time
- Budget to Forecast Capital Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the difference in capital costs between the original budget and updated forecast for a portfolio investment. Calculation: Budgeted Capital Cost - Forecast Capital Cost
- Budget to Forecast Capital Cost Variance (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Budget to Forecast Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the difference between the original budget and updated forecast cost for a portfolio investment. Calculation: Budgeted Cost - Forecast Cost
- Budget to Forecast Cost Variance (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Budget to Forecast Operating Cost Variance

(Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the difference in operating costs between the original budget and updated forecast for a portfolio investment. Calculation: Budgeted Operating Cost - Forecast Operating Cost
- Budget to Forecast Operating Cost Variance (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Budgeted % Spent (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to display the portion of the original budgeted costs that have been spent. For example, you set an original budget of $100,000. When your actual costs are $40,000, this attribute shows a value of 40%. When your actual costs are $120,000, a value of 120% appears to let you know that you are over budget. Calculation: Actual Cost / Budgeted Cost
- Budgeted Benefit (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the budgeted benefit in units of currency for an investment. By default, the Budgeted Benefit is equal to the Planned Benefit from the benefit plan associated with the current approved budget revision for the investment.
- Budgeted Benefit (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Budgeted Benefit Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the end date for the budgeted benefit.
- Budgeted Benefit Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the start date for the budgeted benefit.
- Budgeted Breakeven (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when you expect the cash flow returned from investment revenue to equal the expense (sunk costs) of funding the investment. The budgeted breakeven date represents the end of the budgeted payback period.
- Budgeted Capital % (Field and Filter) Data Type: Percent

Display Type: Number Use this attribute to display the portion of total budget costs that come from capital. Calculation: Budgeted Capital % = Budgeted Capital Cost / Budgeted Cost
- Budgeted Capital % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Capital % Spent (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to filter investments by the portion of their original budgeted capital costs that have been spent. For example, you set an original capital cost budget of $100,000. When your actual capital costs are $40,000, this filter shows matching values of 40%. When your actual capital costs are $120,000, a value of 120% appears to let you know that you are over budget. Calculation: Budgeted Capital % Spent = Actual Capital Cost / Budgeted Capital Cost
- Budgeted Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the budgeted cost where cost type is Capital in the current approved budget revision for an investment.
- Budgeted Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Budgeted Capital Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the remaining capital cost budgeted for the investments in the portfolio. Calculation: Budgeted Capital Cost Remaining = Budgeted Capital Cost Actual Capital Cost
- Budgeted Capital Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the budgeted cost from the current approved budget revision for the investment.
- Budgeted Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text

(Matching attribute for totals and time-sliced values.)
- Budgeted Cost Finish
(Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the ending date for the budgeted costs of an investment.
- Budgeted Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the budgeted cost remaining when actuals are substracted from planned amounts for the current approved budget, or financial summary amount. The budgeted cost is the total of the Budgeted Capital and Operating cost amounts.
- Budgeted Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Cost Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the starting date for the budgeted costs.
- Budgeted IRR (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the budgeted internal rate of return (IRR) or the discount rate used to evaluate the NPV of an investment.
- Budgeted MIRR (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the budgeted modified internal rate of return (MIRR) used to evaluate investments. During the capital budgeting process, use MIRR to rank alternative investments. IRR assumes the cash flows from an investment are reinvested at the same rate. MIRR assumes that all cash flows are reinvested at the cost of capital.
- Budgeted NPV (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the budgeted net present value (NPV) of the investment based on a budgeted discount rate and term.
- Budgeted Operating % (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of total budget costs that are operating costs. Calculation: Budgeted Operating % = Budgeted Operating Cost / Budgeted Cost
- Budgeted Operating % (Total) (Field and Filter)

Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Operating % Spent (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to filter investments by the portion of their original budgeted operating costs that have been spent. For example, you set an original operating cost budget of $100,000. When your actual operating costs are $40,000, this attribute shows a value of 40%. When your actual operating costs are $120,000, a value of 120% appears to let you know that you are over budget. Calculation: Actual Operating Cost / Budgeted Operating Cost
- Budgeted Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter the budgeted cost where cost type is Operating in the current approved budget revision for an investment.
- Budgeted Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Budgeted Operating Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the budgeted operating cost remaining when actuals are substracted from planned amounts for the current approved budget, or financial summary amount.
- Budgeted Operating Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Payback Period (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the number of periods (months) to budget for an investment before it can recover all expenses. The payback period ends when the sum of the expected revenue is equal to the initial funding and expenses since inception for an investment. The last day of the budgeted payback period is the budgeted breakeven date.
- Budgeted ROI (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the budgeted return on investment (ROI) expressed as a percentage of the original funds used to finance the investment.
- Business Alignment (Field) Data Type: Calculated - Number

Display Type: Number Use this attribute to display the business alignment score for the investment represented by the following traffic light colors:
Red (0 - 33): The investment is poorly aligned to the business.
Yellow (34 - 67): The investment has average alignment to the business.
Green (68 - 100): The investment is aligned to the business.
- Business Unit Priority (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the business unit priority score for an investment. This relative value measures how well the investment aligns with the core competencies and goals of the business unit. The priority is represented by the following traffic light colors:
Green: The investment is a high priority.
Yellow: The investment is a medium priority.
Red: The investment is a low priority.
- Charge Code (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the project or task charge code. For projects, this field is auto-populated with the project charge code if the project is assigned a charge code and the project is selected as the task associated with the transaction. If a task is selected that is assigned a different charge code, this field is auto-populated with the task-level charge code. For other investments, this field is auto-populated with the investment charge code if one is assigned.
- Commercial Value (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the commercial value score for an investment. This relative value measures how well the investment aligns with the future growth of similar investments in that market segment. The commercial value is represented by the following traffic light colors:
Red: The investment has low commercial value.
Yellow: The investment has medium to high commercial value.
Green: The investment is expected to yield high commercial value.
- % Complete (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display or filter by the percentage of work that is complete.
- Corporate Priority (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the corporate priority score for an investment. This relative value measures how well the investment aligns with the priority ranking of similar investments in that market segment. The corporate priority is represented by the following traffic light colors:

Red: The investment is a low priority.
Yellow: The investment is a medium or mid-level priority.
Green: The investment is a high priority.
- Cost Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the cost type attribute for investments in a portfolio. The Cost Type value is either operating or capital.
- Cost Variance % (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display or filter by the cost variance (CV), an essential metric in Earned Value Analysis. CV measures the alignment between spending (AC) and the value of work accomplished (EV). Clarity often expresses this value as a percentage and displays projected CV values on the Schedule and Performance properties page for a project. Use CV% to determine if a project is within budget or over budget. A positive value indicates a project is under budget; a negative value indicates a project is over budget. Calculation:
Cost Variance (CV) = Earned Value (EV) - Actual Cost (AC)
CV = BCWP - ACWP
CV% = (EAC - Baseline / Baseline) x 100
CV% = CV/BCWP x 100
- CPI (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the Cost Performance Index (CPI), an efficiency rating for work accomplished. A value greater than or equal to one (CPI 1) indicates a favorable condition. A value less than one (CPI < 1) indicates an unfavorable condition. Calculation:
CPI = BCWP / ACWP
- Created Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when this portfolio investment was created.
- Currency Code (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments by their designated currency code.
- CV (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the cost variance (CV), an essential metric in Earned Value Analysis. CV measures the alignment between spending (AC) and the value of work accomplished (EV). Clarity often expresses this value as a percentage and displays projected CV values on the Schedule and Performance properties page for a

project. Use CV to determine if a project is within budget or over budget. A positive value indicates a project is under budget; a negative value indicates a project is over budget. Calculation:
Cost Variance (CV) = Earned Value (EV) - Actual Cost (AC)
CV = BCWP - ACWP
CV% = (EAC - Baseline / Baseline) x 100
CV% = CV/BCWP x 100
- Description (Field and Filter) Data Type: String Display Type: Text Use this attribute to display a description for each portfolio investment.
- EAC (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the estimate at completion (EAC). This attribute represents the aggregate total cost of all project actuals over the entire life of the project. Calculation:
EAC = ACWP + (BAC - BCWP) / CPI
CPI = BCWP / ACWP
Baseline Required: Yes
- EAC (AT) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the system-calculated atypical estimate at completion value. This attribute is most often used when current variances are not typical. For example, the project management team expects that similar variances will not occur in the future. This EAC value represents the estimated final cost of the project without allowing unusual past performance to unnecessarily influence future projections. Calculation:
EAC (AT) = (ACWP + (BAC - BCWP))
Current Baseline Required: Yes
- EAC (T) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the system-calculated typical estimate at completion (EAC) value. This attribute is most often used when current variances are typical of future variances. EAC indicates how much the project will cost based on progress to date. Calculation:
EAC (T) = ACWP + ETC
Current Baseline Required: No
- EAC for Labor Resources (Field and Filter) Data Type: Time-varying Display Type: Text Use this attribute to display or filter by the system-calculated value of the estimated effort at completion (actuals plus remaining ETC) of the project. This time-varying value represents the aggregate total cost of all actuals over time. Calculation:

EAC = ACWP + (BAC - BCWP) / CPI
CPI = BCWP / ACWP
Baseline Required: Yes
- EAC Sum for Labor Resources (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total EAC for all labor resources. Estimate-at-Completion (ETC) is a timevarying curve representing the total work for all labor resources assigned to the investment team if current trends continue. The curve is stored as a BLOB with 0 to n segments of EAC. The total EAC for labor (LABOR_EACSUM) is the sum of EAC for all labor resources assigned to all teams for the current set of investments under review. The value is stored in seconds.
- ETC (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the estimate to complete (ETC) value for all resources and all tasks. This attribute expresses ETC in units of time or FTE. Calculation: ETC = (the number of working days for all resources on tasks) * (the number of hours for all remaining days when resources are available to work on the project, often known as allocation)
- ETC (AT) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter on the system-calculated value of estimate to complete (ETC) using earned value and baseline data. This calculation is most often used when current variances are not typical. For example, the project management team does not expect similar variances to occur in the future. Calculation: ETC (AT) = BAC - BCWP Current Baseline Required: Yes
- ETC (Cost) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the estimated cost to complete the project. Calculation: ETC (Cost) = remaining labor cost (ETC * billing rate) + remaining non-labor cost Current Baseline Required: No
- ETC (T) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the system-calculated typical estimate to complete (ETC) cost using earned value and baseline data. This calculation is most often used when current variances are seen as typical of future variances. Calculation:
ETC (T) = (BAC - BCWP)/CPI
- ETC Sum for Labor Resources (Field and Filter) Data Type: Number

Display Type: Number Use this attribute to display or filter by the total ETC for all labor resources. Estimate-to-Complete (ETC) is a timevarying curve representing the remaining work for all labor resources assigned to the investment team. The curve is stored as a BLOB with 0 to n segments of ETC. The total ETC for labor (LABOR_ETCSUM) is the sum of ETC for all labor resources assigned to all teams for the current set of investments under review. The value is stored in seconds.
- % Expended (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display or filter by the percentage of total assets that are expended to date.
- Financial Entity (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio investments by Financial Entity.
- Financial Plans (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter investments by any predefined financial plans.
NOTE
Other field values can change based on your selection. For example, the Planned Benefit (FORECAST_REV_TOTAL) attribute shows the total revenue from the latest forecast revision when at least one financial plan exists. If no financial plan is selected, the forecasted monetary benefits revert to only the amount specified in the original project or investment record.
- Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter by the date when each investment is scheduled to end.
- Fiscal Period End Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio investments by Fiscal Period End Date.
- Fiscal Period Start Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio investments by Fiscal Period Start Date.
- Fiscal Period Type (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio investments by Fiscal Period Type.
- Forecast % of Budgeted (Filter) Data Type: Percent Display Type: Text Entry

Use this attribute to filter investments by the portion of their original budget that you estimate will be spent. For example, you set an original budget of $100,000. When your updated forecast costs are $40,000, this attribute shows a value of 40%. When your updated forecast costs are $120,000, a value of 120% appears to let you know that your forecast is over budget. Calculation: Forecast Cost / Budgeted Cost
- Forecast % of Budgeted Capital (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to filter portfolios by Forecast % of Budgeted Capital.
- Forecast % of Budgeted Operating (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to filter portfolio investments by Forecast % of Budgeted Operating.
- Forecast % of Planned (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to filter portfolio investments by Forecast % of Planned.
- Forecast % of Planned Capital (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to filter portfolio investments by Forecast % of Planned Capital Costs as of a specific date.
- Forecast % of Planned Operating (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to filter portfolio investments by Forecast % of Planned Operating Cost as of a specific date.
- Forecast As Of Date (Filter) Data Type: Date Display Type: Date Use this attribute as a filter to enable users to enter a date for the calculation of time-sensitive metrics such as Actual Cost, Forecast Cost, and Forecast Cost Remaining.
- Forecast Capital Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the estimated future capital cost for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Cost equals the Actual Capital Cost + Forecast Capital Cost Remaining. If the user does not enter a filter date, this field displays the Actual Capital Cost + Planned Capital Cost.
- Forecast Capital Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Forecast Capital Cost Remaining (Filter)

Data Type: Money Display Type: Text Entry Use this attribute to display the estimated future capital cost remaining for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Capital Cost Remaining equals the planned capital cost from the curve after that date. If the user does not enter a filter date, this field displays the entire Planned Capital Cost.
- Forecast Capital Cost Remaining (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Forecast Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the estimated future cost for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Cost equals the Actual Cost (to-date) + Forecast Cost Remaining. If the user does not enter a filter date, this field displays the Actual Cost + Planned Cost.
- Forecast Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Forecast Cost Remaining (Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the estimated future cost remaining for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Cost Remaining equals the planned cost from the curve after that date. If the user does not enter a Forecast As Of Date filter, this field displays the entire Planned Cost.
- Forecast Cost Remaining (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Forecast Operating Cost (Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the estimated future operating cost for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Cost equals the Actual Operating Cost + Forecast Operating Cost Remaining. If the user does not enter a filter date, this field displays the Actual Operating Cost + Planned Operating Cost.
- Forecast Operating Cost (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Forecast Operating Cost Remaining (Filter) Data Type: Money

Display Type: Text Entry Use this attribute to display the estimated future operating cost remaining for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Operating Cost Remaining equals the planned operating cost from the curve after that date. If the user does not enter a filter date, this field displays the entire Planned Operating Cost.
- Forecast Operating Cost Remaining (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Goal (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments by one of several predefined goals. Use this attribute to help you group investments that share a common theme or goal.
- Idea Category (Idea) (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the idea category for an investment that originated as an idea. The category value depends on the value in the Idea Type field. As an administrator, you can define the field associations. For example, if the idea type is set to Infrastructure Improvements, the idea category choices can show Transportation, Networking, or Telecommunications.
- Idea Type (Idea) (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the idea type for an investment that originated as an idea. The type value determines the values available in the Idea Category field. As an administrator, you can define the field associations. For example, if the idea type is set to Infrastructure Improvements, the idea category choices can show Transportation, Networking, or Telecommunications.
- Initial Investment (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the original cost that is calculated to fund an investment. If you do not specify a value, initial investment is treated as zero (0). A negative initial investment value is allowed. For example, if an outside investor contributes $15,000 in nonrefundable startup costs, your initial investment can be entered as $0 or -$15,000.
- Investment ID (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the short code that serves as a unique identifier for each investment. For example, your team follows a convention where each investment ID begins with TEST. When you enter a filter value of TEST, you get the following results: TESTPROJECT1, TESTIDEA2, TEST3.
- Investment ID (Filter) Data Type: Number Display Type: Text Entry

Use this attribute to filter investments by the short code that serves as a unique identifier for each investment. For example, your team follows a convention where each investment ID begins with TEST. When you enter a filter value of TEST, you get the following results: TESTPROJECT1, TESTIDEA2, TEST3.
- Investment Name (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the common name that users recognize to identify the investment.
- Investment Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments by their type. This attribute appears in the database schema as SRM_PROJECTS.INVESTMENT_CODE and helps you classify projects, incidents, ideas, and other investments. Valid default values include asset (0), application (1), product (2), and other investment (3).
- Last Synchronized Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter investments by the date and time when the row was last synchronized. This attribute is used only for expression rows.
- Last Updated Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when this portfolio investment was last modified.
- Manager (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the manager assigned to the investment.
- Modified in plan (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to display or filter by investments that changed in their portfolio plans.
- Number of Incidents (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total number of incidents logged against this investment.
- Object (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the source financial entity for the investment.
- Objective (Idea) (Field and Filter) Data Type: String Display Type: Text

Use this attribute to display or filter by the business objective of the original idea before it was converted to an investment.
- Objective (Project) (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the project objective. The opportunity category or business objective for a project can have the following values: 0 = eBusiness Improvement; 1 = Quality; 2 = Customer Satisfaction; 3 = Revenue; 4 = Cost control; 5 = Other. The objective of a project can be measured by its objective risk score.
- OBS Unit (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio investments by OBS Unit.
- Partition (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the portfolio partition and to enable users to filter portfolio investment data for a selected partition only.
- Planned % Spent (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to filter portfolio investments by Planned % Spent.
- Planned Benefit (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter portfolio investments by their expected gross revenues.
- Planned Benefit (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Planned Benefit Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the end date for the planned benefit period. This date reflects the last day of recognized revenues, cost savings, or ROI for this investment.
- Planned Benefit Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the start date for the planned benefit period. This date reflects the start of recognized revenues, cost savings, or ROI for this investment.
- Planned Breakeven (Field and Filter) Data Type: Date Display Type: Date Text

Use this attribute to display the date when you expect the cash flow from an investment to equal the expense of funding the investment. The planned breakeven date represents the end of the planned payback period.
- Planned Capital % (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of total planned costs that represent planned capital costs.
- Planned Capital % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Capital % Spent (Filter) Data Type: Percent Display Type: Text Entry Use this attribute to filter portfolio investments by Planned Capital % Spent.
- Planned Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter investments by their planned capital cost. The amount is clipped for the portfolio planning horizon.
- Planned Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.). The amount is clipped for the investment dates.
- Planned Capital Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the remaining portion of planned capital costs.
- Planned Capital Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the Planned Cost from the plan of record cost plan.
- Planned Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) Use this attribute to display the total Planned Cost from the plan of record cost plan.
- Planned Cost Finish (Field and Filter) Data Type: Date

Display Type: Date Text Use this attribute to display the end date for the planned cost.
- Planned Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the remaining portion of planned costs for an investment.
- Planned Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Cost Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the start date for the planned cost.
- Planned IRR (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the planned internal rate of return (IRR) or the discount rate used to evaluate the NPV of an investment.
- Planned MIRR (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the planned modified internal rate of return (MIRR) used to evaluate investments. During the capital budgeting process, use MIRR to rank alternative investments. IRR assumes the cash flows from an investment are reinvested at the same rate. MIRR assumes that all cash flows are reinvested at the cost of capital.
- Planned NPV (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the planned net present value (NPV) of the investment based on a planned discount rate and term.
- Planned Operating % (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of planned costs that are operating costs.
- Planned Operating % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Operating % Spent (Filter) Data Type: Percent Display Type: Text Entry

Use this attribute to display or filter portfolio investments by the planned portion of operating costs to be spent by a given date. You can compare this value to actual operating costs and determine which investments are over-budget.
- Planned Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the planned operating cost. The amount is clipped for the portfolio planning horizon.
- Planned Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values). The amount is clipped by the investment dates.
- Planned Operating Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the planned operating cost remaining in the overall budget as of a specific date.
- Planned Operating Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Payback Period (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the number of periods (months) that you plan to fund an investment before it can recover all expenses. The payback period ends when the sum of the expected revenue is equal to the initial funding and expenses since inception for an investment. The last day of the planned payback period is the planned breakeven date.
- Planned ROI (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the planned return on investment (ROI) expressed as a percentage of the original planned funds used to finance the investment.
- Planned to Forecast Capital Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the difference in capital costs between the planned and updated forecast for a portfolio investment. Calculation:
Plan to Forecast Capital CV = Planned Capital Cost - Forecast Capital Cost
- Planned to Forecast Capital Cost Variance (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Planned to Forecast Cost Variance

(Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the difference between the planned and updated forecast cost for a portfolio investment. Calculation:
Planned Cost - Forecast Cost
- Planned to Forecast Cost Variance (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Planned to Forecast Operating Cost Variance (Filter) Data Type: Money Display Type: Text Entry Use this attribute to display the difference in operating costs between the planned and updated forecast for a portfolio investment. Calculation:
Planned Operating Cost - Forecast Operating Cost
- Planned to Forecast Operating Cost Variance (Total) (Filter) Data Type: Money Display Type: Text Entry (Matching attribute for totals and time-sliced values.)
- Planning Horizon Finish Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter by the ending date of your own custom planning window.
- Planning Horizon Start Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter by the starting date of your own custom planning window.
- Portfolio (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the name of the associated portfolio for the investment.
- Portfolio Active (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate whether a portfolio plan is active (when checked, true, or 1) or inactive (when clear, false, or 0). You can use this attribute to filter portfolio investment records.
- Portfolio Capacity Unit Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter portfolio capacity role amounts by hours or FTE units.
- Portfolio Category 1

(Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the custom categories that you can define for portfolio investments. You can define up to four (4) custom portfolio categories. The configuration and usage of these categories are completely determined by your organization. You can define partitions and custom lookups where users select from a list of values that you define. Examples include industry code, client type, compliance level, funding source, sales opportunity type, probability, impact, region code, and objective.
- Portfolio Category 2 (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the custom categories that you can define for portfolio investments. You can define up to four (4) custom portfolio categories. The configuration and usage of these categories are completely determined by your organization. You can define partitions and custom lookups where users select from a list of values that you define. Examples include industry code, client type, compliance level, funding source, sales opportunity type, probability, impact, region code, and objective.
- Portfolio Category 3 (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the custom categories that you can define for portfolio investments. You can define up to four (4) custom portfolio categories. The configuration and usage of these categories are completely determined by your organization. You can define partitions and custom lookups where users select from a list of values that you define. Examples include industry code, client type, compliance level, funding source, sales opportunity type, probability, impact, region code, and objective.
- Portfolio Category 4 (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the custom categories that you can define for portfolio investments. You can define up to four (4) custom portfolio categories. The configuration and usage of these categories are completely determined by your organization. You can define partitions and custom lookups where users select from a list of values that you define. Examples include industry code, client type, compliance level, funding source, sales opportunity type, probability, impact, region code, and objective.
- Portfolio Currency Code (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter portfolio investments by their supported active type of currency.
- Portfolio Distributed Benefits (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed benefits in units of currency for a portfolio. This attribute is from the portfolio object, which is the master object of the portfolio investment object.
- Portfolio Distributed Benefits (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Capital Cost

(Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter investments by their distributed capital cost.
- Portfolio Distributed Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter portfolios by their distributed cost.
- Portfolio Distributed Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the distributed operating cost.
- Portfolio Distributed Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Overall Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the overall total role effort spread over multiple time periods. The distributed effort is expressed in hours or FTE units.
- Portfolio Distributed Overall Roles (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Total Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter plans by the total amount of labor effort for all roles distributed across multiple time periods. Role effort values are expressed in hours or FTE units.
- Portfolio Distributed Total Roles (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.
- Portfolio ID

(Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the unique identifier for a portfolio. This field was formerly known as Portfolio Code.
- Portfolio Managers (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the names of the resources who are managing the investments in the portfolio.
- Portfolio Name (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the name of the portfolio.
- Portfolio Plan Type (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter the investments that appear in the investment aggregation amounts defined for this provider and the portfolio provider. Portfolio plan types filter the target and distributed amounts that appear in portlets. The user can select a Portfolio Plan Type filter value of portfolio or plan of record.
- Portfolio: The provider displays investment data, target amounts, and distributed amounts from the portfolio (not from a plan). By default, if the user does not select a value in the filter, the provider returns portfolio values. This rule applies to all of the target, distributed, and investment amounts in this provider.
- Plan of Record: The provider displays investment data, target amounts, and distributed amounts from the portfolio plan that is marked as the plan of record.
- Portfolio Stakeholders (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the resources that are designated as stakeholders for the portfolio plan.
- Portfolio Target Benefits (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the target amount of financial benefits that is expected from the portfolio investments.
- Portfolio Target Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the amount of capital costs that is expected from the portfolio investment during a specific planning period.
- Portfolio Target Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the amount of operating cost that is expected from the portfolio investment during a specific planning period.
- Portfolio Target Overall Roles

(Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter the target role capacity for the portfolio plan expressed in the selected capacity unit type (hours or FTE).
- Portfolio Target Total Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the amount of total costs that is expected from the portfolio investment during a specific planning period.
- Portfolio Target Total Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total number of hours or FTE set as a planned target for the portfolio investment from all identified roles.
- Project Category (Project) (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the types of projects that your organization recognizes. Examples include Planning, Development, or Implementation projects.
- Project Gantt (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by investments with an associated project Gantt chart.
- Project Type (Project) (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter project investments by type. Examples of project types include major projects, new applications, application changes, or infrastructure deployments.
- Project/Idea Category (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the category of the idea or project.
- Project/Idea Objective (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the business objective of the idea or project.
- Project/Idea Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the types of projects and ideas recognized by your organization. For example, your organization may define the following types of projects or ideas: Small Project, Major Project, Application Change, or Infrastructure Deployment.
- Projected Cost Variance

(Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the projected time-varying curve representing the total baseline variance for all past, present, and future costs. The variance is the estimated cost at completion minus the baseline cost and is also expressed as a percentage where lower values represent better alignment with planned business goals.
TIP
You can view Projected Cost Variance, Projected Effort Variance, and other KPIs on the Project Indicators portlet.
- Projected Cost Variance % (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the projected time-varying curve representing the total baseline variance for all past, present, and future costs. The variance is the estimated cost at completion minus the baseline cost and is expressed as a percentage where lower values represent better alignment with planned business goals.
- Projected Effort Variance (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the projected time-varying curve representing the total baseline variance for all labor resources assigned to an investment team. The curve is stored as a BLOB and consists of 0 to n segments of variance for all labor resources assigned to the investment team. The variance is the EAC minus the baseline and is also expressed as a percentage where lower values represent better alignment with planned business goals.
- Projected Effort Variance % (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the projected time-varying curve representing the total baseline variance for all labor resources assigned to an investment team. The curve is stored as a BLOB and consists of 0 to n segments of variance for all labor resources assigned to the investment team. The variance is the EAC minus the baseline and is expressed as a percentage where lower values represent better alignment with planned business goals.
- Rank (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the relative ranking of investments in a portfolio. Rank examples include first (1), second (2), third (3), and so on. The application ranks the investments in a portfolio on the Waterlines page. You can use the rankings to prioritize investments, make better decisions, and improve overall portfolio management. By default, a portfolio has no ranking rules defined. To establish criteria for the investment rankings, you can define and run your own ranking rules.
- Realized Budgeted Benefit (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the time-varying actual revenue from a benefit plan associated with an approved budget plan.
- Realized Budgeted Benefit (Total) (Field and Filter)

Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Realized Planned Benefit (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the PLANNED_ACTUAL_BENEFIT.
- Realized Planned Benefit (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Regulatory Compliance (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the level of SLA compliance for the investment expressed using the colors of a traffic light:
Green (0 through 33). Low compliance.
Yellow (34 through 67). Medium compliance.
Red (68 through 100). High compliance.
- Reinvestment Rate (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display or filter by the reinvestment rate defined for each investment. For example, 3.5%. The application uses this rate in financial calculations when the value of IS_SYS_VAL_FOR_RR is set to its default value of True (1).
- Required (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to display or filter investments in a portfolio based on whether the investment is required for portfolio management scenarios.
- Risk (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the risk score for an investment.
- Role Actuals (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the sum of the actual time spent by all roles on an investment.
- Role Actuals (Total) (Field and Filter) Data Type: Time-varying Display Type: Text

(Matching attribute for totals and time-sliced values.)
- Role Allocation Demand
(Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the sum of team allocations grouped by investment.
- Role Allocation Demand (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Role Allocation Remaining (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the difference between the allocation demand and the actuals to date for a portfolio role. Calculation:
Role Allocation Remaining = Role Allocation Demand - Role Actuals
Units: Hours or FTE.
- Role Allocation Remaining (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Schedule to Baseline (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the number of days in the current investment duration as compared to the duration recorded in the active baseline. This difference indicates whether the project is ahead of schedule or slipping, and if so, by how many days.
- Schedule Variance % (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the value of completed work relative to planned work for a specific date. The schedule variance (SV) can be expressed in units of time or currency. The SV % is expressed as a percentage. Positive values indicate progress that is ahead of schedule and negative values indicate the investment is behind schedule. Values in a range from 10% to -10% are generally on target with 0 in the middle. Calculations:
SV = BCWP - BCWS
SV = EV - PV
SV% = (SV/BCWS) * 100
SV% = (SV/PV) * 100
- SPI (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the Schedule Performance Index (SPI), the ratio of work performed to work scheduled. A value less than one (SPI < 1) indicates the work is behind schedule.

Calculation:
SPI = BCWP / BCWS
- Stage (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter on the current stage of the investment in its overall process. For example, an IT process can consist of the following four investment stages:
- Initiation
- Planning
- Building
- Closing
- Stage Count (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter on the total number of available stages in the parent process for an investment. The progress or status of an investment is a measure of its current stage in a sequence of stages. For example, an IT process can consist of the following four investment stages:
- Initiation
- Planning
- Building
- Closing
If the current stage is Building, the Stage Number attribute would have a current value of 3. The Stage Count for this process is 4 because it contains four stages.
- Stage Number (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the value of the investment opportunity stage number. Also called phases, the stages can include the following values:
0: Prospect 1: Qualification 2: Selling 3: Negotiation 4: Commitment 5: Contract Close 6: Won 7: Loss 8: Abandoned A process that is set to Contract Close has a Stage Number of 5.
- Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter by the portfolio investment start date.
- Status

(Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter on the status of an investment.
- Status Indicator (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter on the status of the investment.
- SV (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display of filter by the schedule variance (SV) expressed in units of currency. The SV measures the difference between completed work to date and planned work. In more detailed financial terms, SV is the difference between the budgeted cost of work performed (BCWP) and the budgeted cost of work scheduled (BCWS). Calculation:
Schedule Variance (SV) = BCWP - BCWS
- TCO Currency (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the currency code associated with the total cost of ownership value.
- Technology Compliance (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the technology alignment score for an investment. This relative value measures how well the investment aligns with the platform and architecture standards of similar investments. The technology compliance alignment factor is represented by the following traffic light colors:
Red: The investment is not in compliance with supported technology..
Yellow: The investment is not in compliance; however, it is stable.
Green: The investment is in compliance with supported platform and architecture standards
- Total Cost of Capital (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display or filter by the total capital costs of the investment.
- Total Effort (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the total effort in hours or FTE units that has been applied to the investment.
- Total Incident Actual Effort (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total actuals expressed in hours or FTE units for investments based on incidents.
- Total Labor Effort (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total labor effort expressed in hours or FTE units. Calculation:

Total Labor Effort = Actuals + ETC
- Total Ownership Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the total cost of ownership. Typically used to assess the cost of operating a service and related investments, this aggregate value helps you compare costs that are shared or incurred over time.
- Work Status (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the work status of the investments in the portfolio. Work status values include Active, Cancelled, On Hold, Complete, and Requested.
Portfolio Investment Financial Performance Provider
Use the 245 attributes in this data provider to develop chart and grid portlets for portfolio investments with financial performance metrics including forecasts and financial percentages. Note: This provider also includes all the attributes listed under the Portfolio Investment provider.
NOTE
If you add an aggregate calculated attribute (ACA) to the portfolio investment object, the ACA is also available to the Portfolio Investment data provider. See Clarity Studio Objects and Attributes for more information about ACA.
- Above Waterline (Field and Filter) Data Type: Boolean Display Type: Boolean Use this portfolio investment object attribute to filter the investments that are included in the investment aggregation amounts. This filter enables users to view the role capacity, demand, and remaining amounts for all investments (All), or only investments above (Yes) or below (No) the waterline.
- Above Waterline Caption (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments in a portfolio by their status relative to the waterline expressed as text. The Above Waterline attribute appears as a Boolean field with a simple Yes or No for investments. Use the Above Waterline Caption field to show the words Above Waterline or Below Waterline.
- Active (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate the status of a portfolio investment. Investments are either active or inactive.
- Actual Capital % (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of actual costs that are actual capital costs.
Actual Capital Cost / Actual Cost
- Actual Capital % (Total)

(Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Actual Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the total actual cost for the investment from the financial transaction (ppa_wip) table where the Cost Type is Capital. If the user enters a date in the Forecast As Of Date filter attribute, the Actual Capital Cost equals the actual capital cost from the curve up to (less than or equal to) that date. If the user does not enter a filter date, this field displays the entire Actual Capital Cost.
- Actual Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Actual Cost (Field and Filter) Data Type: Money Display Type: Number This is the total actual cost for the investment from the financial transaction (ppa_wip) table to display the total cost of the investment regardless of cost type. This is not the same as ACWP, which is already on the portfolio investment object. If the user enters a date in the Forecast As Of Date filter attribute, the Actual Cost represents the total up to that date. If the user does not enter a filter date, this field displays the entire Actual Cost. The amount is clipped for the portfolio planning horizon.
- Actual Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) The amount is clipped by the investment dates.
- Actual Operating % (Field and Filter) Data Type: Percent Display Type: Number
Actual Operating Cost / Actual Cost
- Actual Operating % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Actual Operating Cost (Field and Filter) Data Type: Money Display Type: Number This is the total actual cost for the investment from the financial transaction (ppa_wip) table where the cost type is operating. If the user enters a date in the Forecast As Of Date filter attribute, the Actual Operating Cost represents the total up to that date. If the user does not enter a filter date, this field displays the entire Actual Operating Cost.
- Actual Operating Cost (Total) (Field and Filter)

Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Actuals (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display aggregated actuals for all roles in the selected investments. To filter the investments, use the Above Waterline attribute.
- Actuals As Of Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to filter posted actuals by a specific date.
- ACWP (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the actual cost of work performed (ACWP). This value is the total direct cost (based on posted actuals) that is incurred in performing work during a specified period. The cost calculation includes all actuals posted up until the as-of date or the system date (if no as-of date is provided). Calculation:
ACWP (Assignment) = Calculated as part of the posting process for actuals that are based on the financial cost matrix. ACWP (Detail Task) = Sum of ACWP for all the assignments on the task. ACWP (Summary Task) = Sum of ACWP for all detail tasks in the project. ACWP (Project) = Sum of ACWP for all summary tasks in the project.
- Alignment (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the overall alignment score for the investment represented by the following numeric values:
Red (0 - 33): The investment is poorly aligned to the business.
Yellow (34 - 67): The investment has average alignment to the business.
Green (68 - 100): The investment is aligned to the business.
- Approved (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate that a portfolio plan is approved (when checked, true, or 1) or unapproved (when clear, false, or 0).
- Approved Caption (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments in a portfolio by their approved status expressed as text. The Approved attribute appears as a Boolean image with a green check mark icon for investments that are set to Approved. Use the Approved Caption field to show the words Approved or Unapproved.
- Approved Flag (Filter)

Data Type: Boolean Display Type: Pull-Down Use this attribute to filter portfolio investments by Approved Flag.
- Architectural Fit (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the architectural fit for an investment. This relative value measures how well the investment aligns with the structure of your organization and the architecture of similar projects. The fit is represented by the following traffic light colors:
Green: Based on its architecture, the investment is a high fit.
Yellow: Based on its architecture, the investment is a medium fit.
Red: Based on its architecture, the investment is a low fit.
- BAC (Field and Filter) Data Type: Money Display Type: Number Budget at Completion
- Baseline Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the baseline finish date for a portfolio investment such as a project.
- Baseline Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the baseline start date for a portfolio investment such as a project.
- Baseline Usage (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the resource utilization for a portfolio investment when it was baselined. In lists and portlets, this field displays the value from the Baseline Usage field on the baseline revision properties page. Calculation:
Baseline Usage = Total of Actuals + ETC
- BCWP (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the earned value metric named Budgeted Cost of Work Performed (BCWP). The value is calculated and recorded when you baseline a project, or when you update earned value totals. BCWP is also referred to as the earned value (EV). BCWP represents the budget at completion (BAC) costs based on performance as measured using the Task EV Calculation method. For tasks, BCWP is based on the selected EV calculation method. For projects, BCWP is the sum of BCWP for all WBS Level 1 tasks in the project.
- BCWS (Field and Filter) Data Type: Money Display Type: Number

Use this attribute to display the system-calculated value of Budgeted Cost of Work Scheduled (BCWS). BCWS is the budgeted amount to spend on the project in a given time period according to plan. If not specified, the date is either the current date for the project, or the system date. BCWS is also referred to as the planned value (PV). Calculation: BCWS = Sum of BAC (for tasks or investments) at a specific point in time
- Budget to Forecast Capital Cost Variance (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the difference in capital costs between the original budget and updated forecast for a portfolio investment. Calculation: Budgeted Capital Cost - Forecast Capital Cost
- Budget to Forecast Capital Cost Variance (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budget to Forecast Cost Variance (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the difference between the original budget and updated forecast cost for a portfolio investment. Calculation: Budgeted Cost - Forecast Cost
- Budget to Forecast Cost Variance (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budget to Forecast Operating Cost Variance (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the difference in operating costs between the original budget and updated forecast for a portfolio investment. Calculation: Budgeted Operating Cost - Forecast Operating Cost
- Budget to Forecast Operating Cost Variance (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted % Spent (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of the original budgeted costs that have been spent. For example, you set an original budget of $100,000. When your actual costs are $40,000, this attribute shows a value of 40%. When your actual costs are $120,000, a value of 120% appears to let you know that you are over budget. Calculation: Actual Cost / Budgeted Cost
- Budgeted Benefit (Field and Filter)

Data Type: Money Display Type: Number Use this attribute to display the budgeted benefit in units of currency for an investment. By default, the Budgeted Benefit is equal to the Planned Benefit from the benefit plan associated with the current approved budget revision for the investment.
- Budgeted Benefit (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Budgeted Benefit Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the end date for the budgeted benefit.
- Budgeted Benefit Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the start date for the budgeted benefit.
- Budgeted Breakeven (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when you expect the cash flow returned from investment revenue to equal the expense (sunk costs) of funding the investment. The budgeted breakeven date represents the end of the budgeted payback period.
- Budgeted Capital % (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of total budget costs that come from capital. Calculation: Budgeted Capital % = Budgeted Capital Cost / Budgeted Cost
- Budgeted Capital % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Capital % Spent (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to filter investments by the portion of their original budgeted capital costs that have been spent. For example, you set an original capital cost budget of $100,000. When your actual capital costs are $40,000, this filter shows matching values of 40%. When your actual capital costs are $120,000, a value of 120% appears to let you know that you are over budget. Calculation: Budgeted Capital % Spent = Actual Capital Cost / Budgeted Capital Cost
- Budgeted Capital Cost (Field and Filter) Data Type: Money Display Type: Number

Use this attribute to display the budgeted cost where cost type is Capital in the current approved budget revision for an investment.
- Budgeted Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Budgeted Capital Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the remaining capital cost budgeted for the investments in the portfolio. Calculation: If the user enters a date in the Forecast As Of Date filter attribute, the Budgeted Capital Cost Remaining equals the Budgeted Capital Cost - Actual Capital Cost from the curve up to (less than or equal to) that date. If the user does not enter a filter date, this field displays the entire value of the Budgeted Capital Cost Actual Capital Cost.
- Budgeted Capital Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the budgeted cost from the current approved budget revision for the investment.
- Budgeted Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Budgeted Cost Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the ending date for the budgeted costs of an investment.
- Budgeted Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the budgeted cost remaining when actuals are substracted from planned amounts for the current approved budget, or financial summary amount. The budgeted cost is the total of the Budgeted Capital and Operating cost amounts.
- Budgeted Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Cost Start (Field and Filter) Data Type: Date Display Type: Date Text

Use this attribute to display the starting date for the budgeted costs for the invesment.
- Budgeted IRR
(Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the budgeted internal rate of return (IRR) or the discount rate used to evaluate the NPV of an investment.
- Budgeted MIRR (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the budgeted modified internal rate of return (MIRR) used to evaluate investments. During the capital budgeting process, use MIRR to rank alternative investments. IRR assumes the cash flows from an investment are reinvested at the same rate. MIRR assumes that all cash flows are reinvested at the cost of capital.
- Budgeted NPV (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the budgeted net present value (NPV) of the investment based on a budgeted discount rate and term.
- Budgeted Operating % (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of total budget costs that are operating costs for an investment. Calculation: Budgeted Operating % = Budgeted Operating Cost / Budgeted Cost
- Budgeted Operating % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Operating % Spent (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of the original budgeted operating costs that have been spent. For example, you set an original operating cost budget of $100,000. When your actual operating costs are $40,000, this attribute shows a value of 40%. When your actual operating costs are $120,000, a value of 120% appears to let you know that you are over budget. Calculation: Actual Operating Cost / Budgeted Operating Cost
- Budgeted Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter the budgeted cost where cost type is Operating in the current approved budget revision for an investment.
- Budgeted Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text

(Matching attribute for totals and time-sliced values.)
- Budgeted Operating Cost Remaining
(Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the budgeted operating cost remaining when actuals are substracted from planned amounts for the current approved budget, or financial summary amount.
- Budgeted Operating Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Budgeted Payback Period (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the number of periods (months) to budget for an investment before it can recover all expenses. The payback period ends when the sum of the expected revenue is equal to the initial funding and expenses since inception for an investment. The last day of the budgeted payback period is the budgeted breakeven date.
- Budgeted ROI (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the budgeted return on investment (ROI) expressed as a percentage of the original funds used to finance the investment.
- Business Alignment (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the business alignment score for the investment represented by the following traffic light colors:
Red (0 - 33): The investment is poorly aligned to the business.
Yellow (34 - 67): The investment has average alignment to the business.
Green (68 - 100): The investment is aligned to the business.
- Business Unit Priority (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the business unit priority score for an investment. This relative value measures how well the investment aligns with the core competencies and goals of the business unit. The priority is represented by the following traffic light colors:
Green: The investment is a high priority.
Yellow: The investment is a medium priority.
Red: The investment is a low priority.
- Charge Code (Field and Filter) Data Type: Lookup - String

Display Type: Text Use this attribute to display or filter by the project or task charge code. For projects, this field is auto-populated with the project charge code if the project is assigned a charge code and the project is selected as the task associated with the transaction. If a task is selected that is assigned a different charge code, this field is auto-populated with the task-level charge code. For other investments, this field is auto-populated with the investment charge code if one is assigned.
- Commercial Value (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the commercial value score for an investment. This relative value measures how well the investment aligns with the future growth of similar investments in that market segment. The commercial value is represented by the following traffic light colors:
Red: The investment has low commercial value. Yellow: The investment has medium to high commercial value. Green: The investment is expected to yield high commercial value.
- % Complete (Field and Filter) Data Type: Percent Display Type: Number Defines the percent of work that has been completed on the investment, based on the percentage of completion of the tasks and subprojects. This field requires that the % Complete Calculation Method field is set to Duration or Effort.
- Corporate Priority (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the corporate priority score for an investment. This relative value measures how well the investment aligns with the priority ranking of similar investments in that market segment. The corporate priority is represented by the following traffic light colors:
Red: The investment is a low priority. Yellow: The investment is a medium or mid-level priority. Green: The investment is a high priority.
- Cost Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the cost type attribute for investments in a portfolio. The Cost Type value is either operating or capital.
- Cost Variance % (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display or filter by the cost variance (CV), an essential metric in Earned Value Analysis. CV measures the alignment between spending (AC) and the value of work accomplished (EV). Clarity often expresses this value as a percentage and displays projected CV values on the Schedule and Performance properties page for a project. Use CV% to determine if a project is within budget or over budget. A positive value indicates a project is under budget; a negative value indicates a project is over budget. Calculations:
Cost Variance (CV) = Earned Value (EV) - Actual Cost (AC)
CV = BCWP - ACWP
CV% = (EAC - Baseline / Baseline) x 100

CV% = CV/BCWP x 100
- CPI (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the Cost Performance Index (CPI), an efficiency rating for work accomplished. A value greater than or equal to one (CPI 1) indicates a favorable condition. A value less than one (CPI < 1) indicates an unfavorable condition. Calculation:
CPI = BCWP / ACWP
- Created Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when this portfolio investment was created.
- Currency Code (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments by their designated currency code.
- CV (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the cost variance (CV), an essential metric in Earned Value Analysis. CV measures the alignment between spending (AC) and the value of work accomplished (EV). Clarity often expresses this value as a percentage and displays projected CV values on the Schedule and Performance properties page for a project.
Use CV to determine if a project is within budget or over budget. A positive value indicates a project is under budget; a negative value indicates a project is over budget.
Calculation: Cost Variance (CV) = Earned Value (EV) - Actual Cost (AC) CV = BCWP
- ACWP CV% = (EAC
- Baseline / Baseline) x 100 CV% = CV/BCWP x 100
- Description (Field and Filter) Data Type: String Display Type: Text Use this attribute to display a description for each portfolio investment.
- EAC (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the estimate at completion (EAC). This attribute represents the aggregate total cost of all project actuals over the entire life of the project.
Calculation: EAC = ACWP + (BAC
- BCWP) / CPI CPI = BCWP / ACWP

Baseline Required: Yes
- EAC (AT) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the system-calculated atypical estimate at completion value. This attribute is most often used when current variances are not typical. For example, the project management team expects that similar variances will not occur in the future. This EAC value represents the estimated final cost of the project without allowing unusual past performance to unnecessarily influence future projections.
Calculation: EAC (AT) = (ACWP + (BAC - BCWP))
Baseline Required: Yes
- EAC (T) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the system-calculated typical estimate at completion (EAC) value. This attribute is most often used when current variances are typical of future variances. EAC indicates how much the project will cost based on progress to date.
Calculation: EAC (T) = ACWP + ETC
Current Baseline Required: No
- EAC for Labor Resources (Field and Filter) Data Type: Time-varying Display Type: Text Use this attribute to display or filter by the system-calculated value of the estimated effort at completion (actuals plus remaining ETC) of the project. This time-varying value represents the aggregate total cost of all actuals over time.
Calculation: EAC = ACWP + (BAC
- BCWP) / CPI CPI = BCWP / ACWP
Baseline Required: Yes
- EAC Sum for Labor Resources (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total EAC for all labor resources. Estimate-at-Completion (ETC) is a timevarying curve representing the total work for all labor resources assigned to the investment team if current trends continue. The curve is stored as a BLOB with 0 to n segments of EAC. The total EAC for labor (LABOR_EACSUM) is the sum of EAC for all labor resources assigned to all teams for the current set of investments under review. The value is stored in seconds.
- ETC (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the estimate to complete (ETC) value for all resources and all tasks. This attribute expresses ETC in units of time or FTE.

Calculation: ETC = (the number of working days for all resources on tasks) * (the number of hours for all remaining days when resources are available to work on the project, often known as allocation)
- ETC (AT) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter on the system-calculated value of estimate to complete (ETC) using earned value and baseline data. This calculation is most often used when current variances are not typical. For example, the project management team does not expect similar variances to occur in the future. Calculation:
ETC (AT) = BAC - BCWP
Current Baseline Required: Yes
- ETC (Cost) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the estimated cost to complete the project. Calculation:
ETC (Cost) = remaining labor cost (ETC * billing rate) + remaining non-labor cost
Current Baseline Required: No
- ETC (T) (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the system-calculated typical estimate to complete (ETC) cost using earned value and baseline data. This calculation is most often used when current variances are seen as typical of future variances. Calculation:
ETC (T) = (BAC - BCWP)/CPI
- ETC Sum for Labor Resources (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total ETC for all labor resources. Estimate-to-Complete (ETC) is a timevarying curve representing the remaining work for all labor resources assigned to the investment team. The curve is stored as a BLOB with 0 to n segments of ETC. The total ETC for labor (LABOR_ETCSUM) is the sum of ETC for all labor resources assigned to all teams for the current set of investments under review. The value is stored in seconds.
- % Expended (Field and Filter) Data Type: Percent Display Type: Number Displays the percentage of resource usage expended on the subproject. The value in the Total cell reflects the combined percentage for all the subprojects in the investment.
- Financial Entity (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio investments by Financial Entity.
- Financial Plans

(Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter investments by any predefined financial plans. Other field values can change based on your selection. For example, the Planned Benefit (FORECAST_REV_TOTAL) attribute shows the total revenue from the latest forecast revision when at least one financial plan exists. If no financial plan is selected, the forecasted monetary benefits revert to only the amount specified in the original project or investment record.
- Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter by the date when each investment is scheduled to end.
- Fiscal Period End Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio investments by Fiscal Period End Date.
- Fiscal Period Start Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio investments by Fiscal Period Start Date.
- Fiscal Period Type (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolio investments by Fiscal Period Type.
- Forecast % of Budgeted (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of the original budget that you estimate will be spent. For example, you set an original budget of $100,000. When your updated forecast costs are $40,000, this attribute shows a value of 40%. When your updated forecast costs are $120,000, a value of 120% appears to let you know that your forecast is over budget. Calculation: Forecast Cost / Budgeted Cost
- Forecast % of Budgeted Capital (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to filter portfolios by Forecast % of Budgeted Capital.
- Forecast % of Budgeted Operating (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to filter portfolio investments by Forecast % of Budgeted Operating.
- Forecast % of Planned (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to filter portfolio investments by Forecast % of Planned.
- Forecast % of Planned Capital

(Field and Filter) Data Type: Percent Display Type: Number Use this attribute to filter portfolio investments by Forecast % of Planned Capital Costs as of a specific date.
- Forecast % of Planned Operating (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to filter portfolio investments by Forecast % of Planned Operating Cost as of a specific date.
- Forecast As Of Date (Filter) Data Type: Date Display Type: Date Use this attribute as a filter to enable users to enter a date for the calculation of time-sensitive metrics such as Actual Cost, Forecast Cost, and Forecast Cost Remaining.
- Forecast Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the estimated future capital cost for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Cost equals the Actual Capital Cost + Forecast Capital Cost Remaining. If the user does not enter a filter date, this field displays the Actual Capital Cost + Planned Capital Cost.
- Forecast Capital Cost (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Forecast Capital Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the estimated future capital cost remaining for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Capital Cost Remaining equals the planned capital cost from the curve after that date. If the user does not enter a filter date, this field displays the entire Planned Capital Cost.
- Forecast Capital Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Forecast Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the estimated future cost for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Cost equals the Actual Cost (to-date) + Forecast Cost Remaining. If the user does not enter a filter date, this field displays the Actual Cost + Planned Cost.
- Forecast Cost (Total) (Field and Filter) Data Type: Money Display Type: Number

(Matching attribute for totals and time-sliced values.)
- Forecast Cost Remaining
(Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the estimated future cost remaining for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Cost Remaining equals the planned cost from the curve after that date. If the user does not enter a Forecast As Of Date filter, this field displays the entire Planned Cost.
- Forecast Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Forecast Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the estimated future operating cost for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Cost equals the Actual Operating Cost + Forecast Operating Cost Remaining. If the user does not enter a filter date, this field displays the Actual Operating Cost + Planned Operating Cost.
- Forecast Operating Cost (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Forecast Operating Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the estimated future operating cost remaining for a portfolio investment. If the user enters a date in the Forecast As Of Date filter attribute, the Forecast Operating Cost Remaining equals the planned operating cost from the curve after that date. If the user does not enter a filter date, this field displays the entire Planned Operating Cost.
- Forecast Operating Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Goal (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments by one of several predefined goals. Use this attribute to help you group investments that share a common theme or goal.
- Idea Category (Idea) (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the idea category for an investment that originated as an idea. The category value depends on the value in the Idea Type field. As an administrator, you can define the field associations. For

example, if the idea type is set to Infrastructure Improvements, the idea category choices can show Transportation, Networking, or Telecommunications.
- Idea Type (Idea) (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the idea type for an investment that originated as an idea. The type value determines the values available in the Idea Category field. As an administrator, you can define the field associations. For example, if the idea type is set to Infrastructure Improvements, the idea category choices can show Transportation, Networking, or Telecommunications.
- Initial Investment (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the original cost that is calculated to fund an investment. If you do not specify a value, initial investment is treated as zero (0). A negative initial investment value is allowed. For example, if an outside investor contributes $15,000 in nonrefundable startup costs, your initial investment can be entered as $0 or -$15,000.
- Investment ID (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the short code that serves as a unique identifier for each investment. For example, your team follows a convention where each investment ID begins with TEST. When you enter a filter value of TEST, you get the following results: TESTPROJECT1, TESTIDEA2, TEST3.
- Investment Name (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the common name that users recognize to identify the investment.
- Investment Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter investments by their type. This attribute appears in the database schema as SRM_PROJECTS.INVESTMENT_CODE and helps you classify projects, incidents, ideas, and other investments. Valid default values include asset (0), application (1), product (2), and other investment (3).
- Last Synchronized Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter investments by the date and time when the row was last synchronized. This attribute is used only for expression rows.
- Last Updated Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when this portfolio investment was last modified.
- Manager (Field and Filter) Data Type: Lookup - String Display Type: Text

Use this attribute to display or filter by the manager assigned to the investment.
- Modified in plan
(Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to display or filter by investments that changed in their portfolio plans.
- Number of Incidents (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total number of incidents logged against this investment.
- Object (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the source financial entity for the investment.
- Object Code (Filter) Data Type: String Display Type: Text Entry Use this attribute to filter portfolio investments by Object Code.
- Objective (Idea) (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the business objective of the idea before it was converted to an investment.
- Objective (Project) (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the project objective. The opportunity category or business objective for a project can have the following values: 0 = eBusiness Improvement; 1 = Quality; 2 = Customer Satisfaction; 3 = Revenue; 4 = Cost control; 5 = Other. The objective of a project can be measured by its objective risk score.
- OBS Unit (Field and Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to display or filter portfolio investments by a specific unit in your company's organizational breakdown structure (OBS). For example, under an OBS named New Investments you could have an OBS Unit named Retail Division.
- Partition (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the portfolio partition and to enable users to filter portfolio investment financial data for a selected partition only.
- Planned % Spent (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to filter portfolio investments by Planned % Spent.
- Planned Benefit

(Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter portfolio investments by their expected gross revenues.
- Planned Benefit (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Planned Benefit Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the end date for the planned benefit period. This date reflects the last day of recognized revenues, cost savings, or ROI for this investment.
- Planned Benefit Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the start date for the planned benefit period. This date reflects the start of recognized revenues, cost savings, or ROI for this investment.
- Planned Breakeven (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the date when you expect the cash flow from an investment to equal the expense of funding the investment. The planned breakeven date represents the end of the planned payback period.
- Planned Capital % (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of total planned costs that represent planned capital costs.
- Planned Capital % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Capital % Spent (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to filter portfolio investments by Planned Capital % Spent.
- Planned Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter investments by their planned capital cost.
- Planned Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text

(Matching attribute for totals and time-sliced values.)
- Planned Capital Cost Remaining
(Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the remaining portion of planned capital costs.
- Planned Capital Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the Planned Cost from the plan of record cost plan. The amount is clipped for the portfolio planning horizon.
- Planned Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.) Use this attribute to display the total Planned Cost from the plan of record cost plan. The amount is clipped by the investment dates.
- Planned Cost Finish (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the end date for the planned cost of an investment.
- Planned Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the remaining portion of planned costs for an investment.
- Planned Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Cost Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display the start date for the planned cost of an investment.
- Planned IRR (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the planned internal rate of return (IRR) or the discount rate used to evaluate the NPV of an investment.
- Planned MIRR (Field and Filter) Data Type: Percent

Display Type: Number Use this attribute to display the planned modified internal rate of return (MIRR) used to evaluate investments. During the capital budgeting process, use MIRR to rank alternative investments. IRR assumes the cash flows from an investment are reinvested at the same rate. MIRR assumes that all cash flows are reinvested at the cost of capital.
- Planned NPV (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the planned net present value (NPV) of the investment based on a planned discount rate and term.
- Planned Operating % (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the portion of planned costs that are operating costs.
- Planned Operating % (Total) (Field and Filter) Data Type: Percent Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Operating % Spent (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display or filter portfolio investments by the planned portion of operating costs to be spent by a given date. You can compare this value to actual operating costs and determine which investments are over-budget.
- Planned Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the planned operating cost.
- Planned Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Planned Operating Cost Remaining (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the planned operating cost remaining in the overall budget as of a specific date.
- Planned Operating Cost Remaining (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned Payback Period (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the number of periods (months) that you plan to fund an investment before it can recover all expenses. The payback period ends when the sum of the expected revenue is equal to the initial funding and

expenses since inception for an investment. The last day of the planned payback period is the planned breakeven date.
- Planned ROI (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display the planned return on investment (ROI) expressed as a percentage of the original planned funds used to finance the investment.
- Planned to Forecast Capital Cost Variance (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the difference in capital costs between the planned and updated forecast for a portfolio investment. Calculation:
Planned Capital Cost - Forecast Capital Cost
- Planned to Forecast Capital Cost Variance (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned to Forecast Cost Variance (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the difference between the planned and updated forecast cost for a portfolio investment. Calculation: Planned Cost - Forecast Cost
- Planned to Forecast Cost Variance (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planned to Forecast Operating Cost Variance (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the difference in operating costs between the planned and updated forecast for a portfolio investment. Calculation: Planned Operating Cost - Forecast Operating Cost
- Planned to Forecast Operating Cost Variance (Total) (Field and Filter) Data Type: Money Display Type: Number (Matching attribute for totals and time-sliced values.)
- Planning Horizon Finish Date (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter by the ending date of your own custom planning window.
- Planning Horizon Start Date (Field and Filter)

Data Type: Date Display Type: Date Text Use this attribute to display or filter by the starting date of your own custom planning window.
- Portfolio (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the name of the associated portfolio for the investment.
- Portfolio Active (Field and Filter) Data Type: Boolean Display Type: Boolean Use this attribute to indicate whether a portfolio plan is active (when checked, true, or 1) or inactive (when clear, false, or 0). You can use this attribute to filter portfolio investment records.
- Portfolio Capacity Unit Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter portfolio capacity role amounts by hours or FTE units.
- Portfolio Category 1 (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the custom categories that you can define for portfolio investments. You can define up to four (4) custom portfolio categories. The configuration and usage of these categories are completely determined by your organization. You can define partitions and custom lookups where users select from a list of values that you define. Examples include industry code, client type, compliance level, funding source, sales opportunity type, probability, impact, region code, and objective.
- Portfolio Category 2 (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the custom categories that you can define for portfolio investments. You can define up to four (4) custom portfolio categories. The configuration and usage of these categories are completely determined by your organization. You can define partitions and custom lookups where users select from a list of values that you define. Examples include industry code, client type, compliance level, funding source, sales opportunity type, probability, impact, region code, and objective.
- Portfolio Category 3 (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the custom categories that you can define for portfolio investments. You can define up to four (4) custom portfolio categories. The configuration and usage of these categories are completely determined by your organization. You can define partitions and custom lookups where users select from a list of values that you define. Examples include industry code, client type, compliance level, funding source, sales opportunity type, probability, impact, region code, and objective.
- Portfolio Category 4 (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the custom categories that you can define for portfolio investments. You can define up to four (4) custom portfolio categories. The configuration and usage of these categories are completely

determined by your organization. You can define partitions and custom lookups where users select from a list of values that you define. Examples include industry code, client type, compliance level, funding source, sales opportunity type, probability, impact, region code, and objective.
- Portfolio Currency Code (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter portfolio investments by their supported active type of currency.
- Portfolio Distributed Benefits (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display the distributed benefits in units of currency for a portfolio. This attribute is from the portfolio object, which is the master object of the portfolio investment object.
- Portfolio Distributed Benefits (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter investments by their distributed capital cost.
- Portfolio Distributed Capital Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter portfolios by their distributed cost.
- Portfolio Distributed Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the distributed operating cost.
- Portfolio Distributed Operating Cost (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Overall Roles (Field and Filter) Data Type: Number

Display Type: Number Use this attribute to display or filter by the overall total role effort spread over multiple time periods. The distributed effort is expressed in hours or FTE units.
- Portfolio Distributed Overall Roles (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Portfolio Distributed Total Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter plans by the total amount of labor effort for all roles distributed across multiple time periods. Role effort values are expressed in hours or FTE units.
- Portfolio Distributed Total Roles (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Portfolio ID (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the unique identifier for a portfolio. This field was formerly known as Portfolio Code.
- Portfolio Managers (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the names of the resources who are managing the investments in the portfolio.
- Portfolio Name (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the name of the portfolio.
- Portfolio Plan Type (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute from the Portfolio Investment provider to filter the investments that appear in the investment aggregation amounts defined for this provider. Portfolio plan types filter the target and distributed amounts that appear in portlets. The user can select a Portfolio Plan Type filter value of portfolio or plan of record.
- Portfolio: The provider displays investment data, target amounts, and distributed amounts from the portfolio (not from a plan). By default, if the user does not select a value in the filter, the provider returns portfolio values. This rule applies to all of the target, distributed, and investment amounts in this provider.
- Plan of Record: The provider displays investment data, target amounts, and distributed amounts from the portfolio plan that is marked as the plan of record.
- Portfolio Stakeholders (Field and Filter) Data Type: Lookup - String Display Type: Text

Use this attribute to display or filter by the resources that are designated as stakeholders for the portfolio plan.
- Portfolio Target Benefits
(Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the target amount of financial benefits that is expected from the portfolio investments.
- Portfolio Target Capital Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the amount of capital costs that is expected from the portfolio investment during a specific planning period.
- Portfolio Target Operating Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the amount of operating cost that is expected from the portfolio investment during a specific planning period.
- Portfolio Target Overall Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter the target role capacity for the portfolio plan expressed in the selected capacity unit type (hours or FTE).
- Portfolio Target Total Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the amount of total costs that is expected from the portfolio investment during a specific planning period.
- Portfolio Target Total Roles (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total number of hours or FTE set as a planned target for the portfolio investment from all identified roles.
- Project Category (Project) (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the types of projects that your organization recognizes. Examples include Planning, Development, or Implementation projects.
- Project Gantt (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by investments with an associated project Gantt chart.
- Project Type (Project) (Field and Filter) Data Type: Lookup - String Display Type: Text

Use this attribute to display or filter project investments by type. Examples of project types include major projects, new applications, application changes, or infrastructure deployments.
- Project/Idea Category (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the category of the idea or project.
- Project/Idea Objective (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the business objective of the idea or project.
- Project/Idea Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the types of projects and ideas recognized by your organization. For example, your organization may define the following types of projects or ideas: Small Project, Major Project, Application Change, or Infrastructure Deployment.
- Projected Cost Variance (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the projected time-varying curve representing the total baseline variance for all past, present, and future costs. The variance is the estimated cost at completion minus the baseline cost and is also expressed as a percentage where lower values represent better alignment with planned business goals.
TIP
You can view Projected Cost Variance, Projected Effort Variance, and other KPI metrics on the Project Indicators portlet.
- Projected Cost Variance % (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the projected time-varying curve representing the total baseline variance for all past, present, and future costs. The variance is the estimated cost at completion minus the baseline cost and is expressed as a percentage where lower values represent better alignment with planned business goals.
- Projected Effort Variance (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the projected time-varying curve representing the total baseline variance for all labor resources assigned to an investment team. The curve is stored as a BLOB and consists of 0 to n segments of variance for all labor resources assigned to the investment team. The variance is the EAC minus the baseline and is also expressed as a percentage where lower values represent better alignment with planned business goals.
- Projected Effort Variance % (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the projected time-varying curve representing the total baseline variance for all labor resources assigned to an investment team. The curve is stored as a BLOB and consists of 0 to n segments of variance

for all labor resources assigned to the investment team. The variance is the EAC minus the baseline and is expressed as a percentage where lower values represent better alignment with planned business goals.
- Rank (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the relative ranking of investments in a portfolio. Rank examples include first (1), second (2), third (3), and so on. The application ranks the investments in a portfolio on the Waterlines page. You can use the rankings to prioritize investments, make better decisions, and improve overall portfolio management. By default, a portfolio has no ranking rules defined. To establish criteria for the investment rankings, you can define and run your own ranking rules.
- Realized Budgeted Benefit (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the time-varying actual revenue from a benefit plan associated with an approved budget plan.
- Realized Budgeted Benefit (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Realized Planned Benefit (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the PLANNED_ACTUAL_BENEFIT.
- Realized Planned Benefit (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Regulatory Compliance (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the level of SLA compliance for the investment expressed using the colors of a traffic light:
Green (0 through 33). Low compliance. Yellow (34 through 67). Medium compliance. Red (68 through 100). High compliance.
- Reinvestment Rate (Field and Filter) Data Type: Percent Display Type: Number Use this attribute to display or filter by the reinvestment rate defined for each investment. For example, 3.5%. The application uses this rate in financial calculations when the value of IS_SYS_VAL_FOR_RR is set to its default value of True (1).
- Required (Field and Filter)

Data Type: Boolean Display Type: Boolean Use this attribute to display or filter investments in a portfolio based on whether the investment is required for portfolio management scenarios.
- Risk (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the risk score for an investment.
- Role Actuals (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the sum of the actual time spent by all roles on an investment.
- Role Actuals (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Role Allocation Demand (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the sum of team allocations grouped by investment.
- Role Allocation Demand (Total) (Field and Filter) Data Type: Time-varying Display Type: Text (Matching attribute for totals and time-sliced values.)
- Role Allocation Remaining (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the difference between the allocation demand and the actuals to date for a portfolio role. Calculation:
Role Allocation Remaining = Role Allocation Demand - Role Actuals
Units: Hours or FTE.
- Role Allocation Remaining (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Schedule to Baseline (Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the number of days in the current investment duration as compared to the duration recorded in the active baseline. This difference indicates whether the project is ahead of schedule or slipping, and if so, by how many days.
- Schedule Variance %

(Field) Data Type: Calculated - Number Display Type: Number Use this attribute to display the value of completed work relative to planned work for a specific date. The schedule variance (SV) can be expressed in units of time or currency. The SV % is the SV expressed as a percentage. Positive values indicate progress that is ahead of schedule and negative values indicate the investment is behind schedule. Values in a range from 10% to -10% are generally on target with 0 in the middle. Calculations:
SV = BCWP - BCWS
SV = EV - PV
SV% = (SV/BCWS) * 100
SV% = (SV/PV) * 100
- SPI (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the Schedule Performance Index (SPI), the ratio of work performed to work scheduled. A value less than one (SPI < 1) indicates the work is behind schedule. Calculation: SPI = BCWP / BCWS
- Stage (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter on the current stage of the investment in its overall process. For example, an IT process can consist of the following four investment stages:
- Initiation
- Planning
- Building
- Closing
- Stage Count (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter on the total number of available stages in the parent process for an investment. The progress or status of an investment is a measure of its current stage in a sequence of stages. For example, an IT process can consist of the following four investment stages:
- Initiation
- Planning
- Building
- Closing
If the current stage were Building, the Stage Number attribute would have a current value of 3. The Stage Count for this process is 4 because it contains four stages.
- Stage Number (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the value of the investment stage number in a process. Also called phases, the stages in an investment opportunity sales process can include the following example values:
0: Prospect

1: Qualification 2: Selling 3: Negotiation 4: Commitment 5: Contract Close 6: Won 7: Loss 8: Abandoned
In this example, a process that is set to Contract Close has a Stage Number of 5. The Stage Count is nine (9).
- Start (Field and Filter) Data Type: Date Display Type: Date Text Use this attribute to display or filter by the portfolio investment start date.
- Status (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter on the status of an investment.
- Status Indicator (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter on the status of the investment.
- SV (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display of filter by the schedule variance (SV) expressed in units of currency. The SV measures the difference between completed work to date and planned work. In more detailed financial terms, SV is the difference between the budgeted cost of work performed (BCWP) and the budgeted cost of work scheduled (BCWS). Calculation: Schedule Variance (SV) = BCWP - BCWS
- TCO Currency (Field and Filter) Data Type: String Display Type: Text Use this attribute to display or filter by the currency code associated with the total cost of ownership value.
- Technology Compliance (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the technology alignment score for an investment. This relative value measures how well the investment aligns with the platform and architecture standards of similar investments. The technology compliance alignment factor is represented by the following traffic light colors:
Red: The investment is not in compliance with supported technology. Yellow: The investment is not in compliance; however, it is stable. Green: The investment is in compliance with supported platform and architecture standards.
- Total Cost of Capital (Field and Filter) Data Type: Percent

Display Type: Number Use this attribute to display or filter by the total capital costs of the investment.
- Total Effort (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the total effort in hours or FTE units that has been applied to the investment.
- Total Incident Actual Effort (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total actuals expressed in hours or FTE units for investments based on incidents.
- Total Labor Effort (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter by the total labor effort expressed in hours or FTE units. Calculation: Total Labor Effort = Actuals + ETC
- Total Ownership Cost (Field and Filter) Data Type: Money Display Type: Number Use this attribute to display or filter by the total cost of ownership. Typically used to assess the cost of operating a service and related investments, this aggregate value helps you compare costs that are shared or incurred over time.
- Work Status (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display or filter by the work status of the investments in the portfolio. Work status values include Active, Cancelled, On Hold, Complete, and Requested.
Portfolio Role Capacity and Demand
Use the 29 attributes in this data provider to develop chart and grid portlets that capture capacity and demand by role in a single portfolio.
NOTE
This provider works with the Plan filter in the upper right corner of a page. Place your portlet on a tab in an instance of a portfolio. When users select a plan, the portlet displays plan amounts instead of portfolio amounts.
- Above Waterline (Filter) Data Type: Boolean Display Type: Pull-Down Use this portfolio investment object attribute to filter the allocation demand and actual amounts for roles in this provider. This filter enables users to view all the role allocation and actuals for investments (All), or only the investments above (Yes) or below (No) the waterline.
- Actuals (Field and Filter) Data Type: Number Display Type: Number

Use this attribute to display aggregated actuals for all roles in the selected investments. To filter the investments, use the Above Waterline attribute.
- Actuals (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Allocation Demand (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display aggregated allocation demand for the roles in the selected investments. To filter the investments, use the Above Waterline attribute.
- Allocation Demand (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Allocation Remaining (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the remaining capacity allocation for roles in the selected investments. Calculation: Allocation Remaining = Allocation Demand - Actuals Units: Hours or FTE.
- Allocation Remaining (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Capacity for Role (Filter) Data Type: Time-varying Display Type: Time-varing Use this attribute to filter portfolios by Capacity for Role.
- Capacity Target (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolios by Capacity Target.
- Capacity Unit Type (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to determine whether portfolio resource and role capacity values appear in hours or FTE.
- Distributed Target (Field and Filter) Data Type: Number Display Type: Number Use this attribute to adjust or to scale the distributed target for a role in a portfolio plan.
- Distributed Target (Total)

(Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Distributed to Allocation Demand Variance (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display the difference between the distributed target and the allocation demand for a portfolio role. Calculation: Distributed to Allocation Demand Variance = Distributed Target - Allocation Demand Units: Hours or FTE.
- Distributed to Allocation Demand Variance (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Exclude Other Roles (Filter) Data Type: Boolean Display Type: Pull-Down Use this attribute to filter chart and grid portlets that display roles from multiple investments. This filter enables users to view other roles by default (check box is not selected). When selected, this attribute excludes other roles from the results.
- Financial Entity (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolios by Financial Entity.
- Fiscal Period End Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolios by Fiscal Period End Date.
- Fiscal Period Start Date (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolios by Fiscal Period Start Date.
- Fiscal Period Type (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute to filter portfolios by Fiscal Period Type.
- Partition (Field and Filter) Data Type: Lookup - String Display Type: Text Use this attribute to display the portfolio partition and to enable users to filter portfolio role capacity and demand data for a selected partition only.
- Plan Id (Filter)

Data Type: Number Display Type: Text Entry Use this attribute to filter portfolio role capacity and demand data by a unique identifier for a portfolio plan.
- Portfolio ID (Filter) Data Type: Number Display Type: Text Entry Use this attribute to filter portfolio role capacity and demand data by Portfolio ID, the unique identifier for a portfolio.
- Role (Filter) Data Type: Lookup - String Display Type: Browse Use this attribute as a filter to enable users to browse a list of roles. The selected role filters the resulting portlet data.
NOTE
The Portfolio Role Capacity and Demand provider includes the Other Roles row. It aggregates allocation demand and actual amounts across investments for the roles that users exclude from portfolio targets.
- Role ID (Field and Filter) Data Type: Lookup - String Display Type: Browse Use this attribute as a unique identifier for each role.
- Role Name (Field and Filter) Data Type: String Display Type: Text Use this attribute to display the name of a role or to filter by the name of a role. Examples of role names include analyst or hardware technician.
- Target (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter on the target for the role.
- Target to Allocation Demand Variance (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter on the difference between the target and allocation demand for a role. Calculation:
Target to Allocation Demand Variance = Target - Allocation Demand
Units: Hours or FTE
- Target to Allocation Demand Variance (Total) (Field and Filter) Data Type: Number Display Type: Number (Matching attribute for totals and time-sliced values.)
- Target to Distributed Variance (Field and Filter) Data Type: Number Display Type: Number Use this attribute to display or filter on the difference between the target role capacity and the distributed target.

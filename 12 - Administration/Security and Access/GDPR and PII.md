---
title: GDPR - Protect Personally Identifiable Information
tags:
  - admin
aliases:
  - GDPR
  - Data Protection
  - PII
canonical: true
audience: admin
domain: administration
---
# GDPR: Protect Personally Identifiable Information

## Overview

To help your organization protect the personally identifiable information (PII) of resources, Classic PPM includes data protection features. The availability of these features coincides with the May 2018 General Data Protection Regulation (GDPR) in the European Union. GDPR is also included in the United Kingdom Data Protection Act.

Compliance is required from any international firm with ties to data in the European Union. GDPR data protection laws were enacted to provide EU citizens in all member states with greater control over their personal data. Businesses that compromise or misuse personal data are subject to possible fines.

To mitigate these risks — including hacking, data breaches, and other cyber threats — Classic PPM allows administrators to anonymize (randomize or scramble) specific PII data for inactive resources.

> [!warning]
> This feature permanently protects certain data by scrambling it. Access to original data is irretrievably lost. As an administrator, it is your responsibility to make a secure backup, if permitted by your security policies, before using this feature.

This section contains the following topics:

- GDPR: Feature Highlights
- Install the PII Content Items
- Create Custom Attributes for Personally Identifiable Information
- Add Personally Identifiable Information Fields to a Page Layout
- Select the Protected Resources
- Run the Job to Scramble the Data
- Attachments for Anonymized Resources
- Database and Data WareHouse Fields With Personal Data

## GDPR: Feature Highlights

- **Installation:** Install the new content items for personally identifiable information (PII) from the PMO Accelerator. Installation is handled for SaaS customers. On-premise customers can decide when to install the content, or to decline.
- **Configuration:** To organize the subset of attributes subject to protection, add any new attributes that you create for resource anonymization to this list. By default, the application is configured to anonymize the following attributes for inactive resources that you select: resource ID, resource full name, resource first name, resource last name, resource email address, and username. The complete list of obfuscated data appears further down this page.
- **New Protected Attributes:** You can create a custom attribute on the Resource object in Studio. Click Administration, Studio, Objects and filter the object list to open the Resource object. For example, create an attribute for the last four digits of a personal ID number or a five-digit pin. Then click Home, Custom Attributes, PII Attributes and add your new attribute to the Personally Identifiable Information (PII) Attribute List page.
- **User Access:** Configure the personal attributes on a page where other authorized users can access them. We recommend that you keep them together for easy access. For example, you want resource managers to edit a personal pin number or to set the Anonymize Personally Identifiable Information (PII) check box. Add the Anonymize PII and PII Last Anonymized Date fields to the right side of the General section of the Resource Settings page.
- **Manage Protection:** Authorized users (for example, resource managers) can select the Anonymize Personally Identifiable Information (PII) check box to flag this resource for protection. The next time an administrator runs the Anonymize Personally Identifiable Information (PII) job, the Resource Settings page will show the date in the PII Last Anonymized Date field. Unless you plan on anonymizing all resources, to apply protections you must clear the Active check box. Typically, only inactive resources are subject to anonymization.
- **Administration:** The lead system administrator configures the availability of the Anonymize Personally Identifiable Information (PII) job. They answer the following important questions:
  - Who can run this job?
  - Can those authorized users anonymize only inactive resources who are flagged for protection?
  - Can those authorized users anonymize all resources?
  - Do the data protection policies in place at my organization warrant such use?

  To anonymize all resources, the system administrator clears the read-only constraint on the parameter named "WARNING! Anonymize ALL Resources." The administrator makes an optional secure backup. Before the job runs, an administrator determines if that instance of the job is going to scramble only the subset of selected inactive resources, or all resources.

- **Protection:** After all these levels of security, the designated resources show a serialized coded value to protect their original data, which is now obfuscated forever.

## Install the PII Content Items

> [!important]
> Anonymize Personally Identifiable Information (PII) is not active by default, even after installing the PII add-in items.

The PMO Accelerator add-in is required. The content items for on-premise customers are automatically installed in new environments when you install the PMO Accelerator; however, upgrading customers can choose when to perform these steps.

**Follow these steps:**

1. Log in to Classic PPM as an administrator.
2. Click Administration, Studio, Content Add-ins.
3. Open the Accelerator - Program Management Office add-in and click the Items tab.
4. In the Content Item Name filter field, enter `*pii*`. The following content items appear:
   - Anonymize PII - Job
   - PII Attribute - Lookup
   - PII Attribute Filter View - View
   - PII Attribute List View - View
   - PII Attribute Object - Object
   - PII Attribute Property Views - View
   - PII Attributes - Menu
5. Select all seven items and click Install. The items show a Status of Installed.

## Create Custom Attributes for Personally Identifiable Information

You can create a custom attribute on the Resource object in Studio.

**Follow these steps:**

1. Click Administration, Studio, Objects.
2. Filter the object list to open the Resource object.
3. Click the Attributes tab.
4. Create an attribute. For example, create an attribute for the last four digits of a personal ID number or a five-digit pin.

Anonymization supports the following custom attribute types: string, large string, number, date, and URL. Custom object attachments are not included.

See the Studio documentation in the Reference section of the English edition of the documentation.

5. Click Home, Custom Attributes, PII Attributes. Add your new attribute to the Personally Identifiable Information (PII) Attribute List page.

> [!tip]
> You can also use the XOG to import custom attributes in bulk.
>
> After you anonymize a resource, you do not have to continue to mark them for repeated scrambling. Anonymized resources are automatically re-anonymized when you add a new custom attribute to the list of protected data. The logical explanation is that the resource has already been flagged for protection of all personal data.

## Add Personally Identifiable Information Fields to a Page Layout

You can organize the personal information in one convenient place.

**Follow these steps:**

1. Click Administration, Studio, Objects.
2. Filter the object list and open the Resource object.
3. Click the Views tab.
4. Click [Layout-Edit] setup for the Resource Labor view.
5. Choose Settings, General page or, for stronger security, use a secure subpage.

> [!tip]
> We recommend that you add the personal data attributes to a subpage and set access rights to protect the subpage.

6. Click the Properties and Layout icon.
7. Add the Anonymize Personally Identifiable Information (PII) and PII Last Anonymized Date fields.
8. Click Save and Return.

## Select the Protected Resources

Advise resource managers and other users with access rights that they can now flag one or more resources for protection.

**Follow these steps:**

1. Click Home, Resource Management, Resources.
2. Open a labor resource. You can anonymize only resources of type labor.
3. Click Properties, Settings.
4. The resource manager can select the Anonymize Personally Identifiable Information (PII) check box to flag this resource for protection.
5. The PII Last Anonymized Date shows 1/1/1900 by default. After you run the Anonymize Personally Identifiable Information (PII) job, the PII Last Anonymized Date field displays the date. The Anonymize Personally Identifiable Information (PII) check box is cleared.
6. In the future, you can select the check box again — for example, if you add a new attribute with personal data and would like to anonymize it for the selected resource.

> [!note]
> Seeded admin resources are not anonymized. The system does not allow you to anonymize the admin and csk.admin (PMO Accelerator) users.

## Run the Job to Scramble the Data

As a prerequisite, set up DBLINK. The job fails without DBLINK.

> [!warning]
> Verify that you have backed up all your resource data before you run the Anonymize Personally Identifiable Information (PII) job. When you run this job, the designated personal resource data is permanently obfuscated. You cannot undo this operation. Broadcom Support and Broadcom Service partners cannot help you retrieve lost data unless you made a reliable secure backup.

**Follow these steps:**

1. Click Home, Reports and Jobs, and click the Jobs tab.
2. Run or schedule the Anonymize Personally Identifiable Information (PII) job. The Resource Settings page shows the updated PII Last Anonymized Date.
3. To anonymize the same data in the data warehouse, run the Load Data Warehouse job in full mode. An incremental load is not sufficient for pushing out the changes in resource data.

## Attachments for Anonymized Resources

The feature handles any attachments on the resource object. However, attachment custom attributes for the resource object or subobjects are not available for selection in the PII Attribute object lookup. Instead of scrambling data in attachments, they are deleted. Attachments include any files that the user uploaded, including their personal avatar image.

- The Anonymize Personally Identifiable Information (PII) job flags resource custom attributes defined as attachments to be purged.
- The Purge Documents job purges these documents for all anonymized resources. The job purges the attachments of all protected resources whenever it runs. The job parameters you select for projects or other criteria do not limit this behavior.
- **Exception:** Any attachments in custom attributes for resource subobjects are not flagged or purged.

## Database and Data WareHouse Fields With Personal Data

The following schema tables and fields are subject to obfuscation. These attributes can be protected by replacing the original data with an encoded serialized number.

**CMN_AUDITS**
- value_before
- value_after
- raw_value_before
- raw_value_after

**CMN_SEC_USERS**
- user_name
- first_name
- middle_name
- last_name
- email_address
- sms_email_address
- photo_file
- full_name
- bo_user
- user_uid
- favorite_photo

**NBI_PROJECT_CURRENT_FACTS**
- ae_last_name
- ae_first_name
- manager_last_name
- manager_first_name

**NBI_RESOURCE_CURRENT_FACTS**
- manager_last_name
- manager_first_name
- resource_code
- last_name
- first_name

**NBI_RT_FACTS**
- resource_code
- last_name
- first_name
- manager_last_name
- manager_first_name

**NMC_CONVERSATIONS**
- resource_name

**NMC_INTEGRATIONS**
- user_name
- proxy_user_name

**ODF_CA_RESOURCE**
- obj_bi_user_id

**PAC_MNT_PROJECTS**
- resource_code
- approvedby_resource_code
- awaitapprvl_resource_code

**PAC_MNT_RESOURCES**
- resource_code
- reportsto_resource_code

**PPA_BILLING**
- resource_code
- entry_resource_code
- lastupdtdby_resource_code

**PPA_MATRIXVALUES**
- value1...value10

**PPA_POSTINGBATCH**
- post_resource_code

**PPA_TRANSBILL**
- resource_code
- entry_resource_code
- lastupdtdby_resource_code

**PPA_TRANSCONTROL**
- resource_code
- entry_resource_code
- lastupdtdby_resource_code

**PPA_TRANSWIPADJUST**
- resource_code
- entry_resource_code
- lastupdtdby_resource_code

**PPA_WIP**
- resource_code
- entry_resource_code
- lastupdtdby_resource_code

**PROJSTAFF**
- resource_code

**PROJREVISION**
- approvedby_resource_code
- awaitapprvl_resource_code
- resource_code

**SRM_CONTACTS**
- (see source documentation for full field list)

## Related
- [[_MOC Administration]]

%%Source: p3098-3106%%

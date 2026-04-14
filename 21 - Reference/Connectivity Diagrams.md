---
title: Oracle and SQL Server Connectivity Diagrams
tags:
  - reference
  - onprem
aliases:
  - Architecture Diagrams
canonical: true
audience: everyone
domain: reference
---
# Oracle and SQL Server Connectivity Diagrams

- Virtual - Non-Editable - Lookups - Calculated - Time Varying - Attachment - Money - Formula - Percent - If a parameter name does not match one defined for the Resource object or if the given attribute does not fall into one of the permissible categories noted above, a message will be written to the log file. - All created users will be set to "Active". - All Users will be given the system default password. Since this is an SSO environment, the password within Clarity will not be used. - This functionality is available only in Clarity instances enabled for SSO authentication. - When checking if Clarity is enabled for SSO, the "useSSO" attribute on the app element in properties.xml must be set to `true'.
Update a Clarity User Based on SAML Request
An existing Clarity User may be updated on the fly with data provided in the SAML message used to authenticate the User to Clarity.
For an existing User, only two parameters in the SAML message will be considered: User Groups and Resource Parameters.
If they are present in the SAML message, the values in the message will replace the existing values in the database. For Resource Parameters, this is a straight one-for-one replacement.
For User Groups, all existing groups will be removed, and the values in the SAML message will be added to the User.
Thus, it is imperative that the User Groups parameter always contains the entire set of groups to which a User belongs. The only exception is the baseUserGroup, which is never dropped.
User Groups Update Example: A new User is created with UserGroups=" cop.ideaCreator, cop.projectView, cop.teamMember". After creation, the User is a member of the three listed groups and the baseUserGroup.
Later, a stakeholder decides to alter the User's Clarity access. In their IDP, the User's valid groups are all removed. The SAML message at their next login will contain UserGroups="".
After logging in, the user will belong only to the baseUserGroup. All other groups will be deleted from the User.
Resource Parameter Update Example: A new User is created as a Contractor with ResourceParams={"date_of_hire":"2023-09-08","date_of_termination":"2027-11-11T09:22:33","prisopen":"1"}.
After creation, the User will have a Date of Hire of September 8th, 2023, a Date of Termination of November 11th 2027 and will be open for time entry. Stakeholders decide to extend the contractor's termination date.
In the IDP, the termination date value is updated to December 31st, 2028. The resulting ResourceParams value is: {"date_of_hire":"2023-09-08","date_of_termination":"2028-12-31T17:00:00","prisopen":"1"}.
This will update the Date of Termination to December 31st, 2028, with no other changes. While it is not necessary to provide date_of_hire and prisopen, most likely an IDP will always send all current values.
Oracle and SQL Server Connectivity Diagrams
Oracle Connectivity
The following image shows the Oracle connectivity.

Figure 37: This image illustrates the Oracle connectivity

Microsoft SQL Server Connectivity The following image shows the Microsoft SQL Server connectivity.

## Related
- [[_MOC Reference]]

%%Source: p3885-3886%%

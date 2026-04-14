# XML Open Gateway (XOG) Development

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[16 - Development/_MOC Development|Development]]
- Canonical notes:
- [[16 - Development/XOG/Schema and XML]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: XOG Client (#xog-client)
- H2: XOG Web Services (#xog-web-services)
- H2: Web Services Descriptive Language (WSDL) (#web-services-descriptive-language-wsdl)
- H2: Assign XOG Access Rights (#assign-xog-access-rights)

The XML Open Gateway (XOG) is a Classic PPM web service interface that integrators and system administrators can use to import data, export data, and move configuration data from one system to another. The XOG uses XML and web services to perform these actions. Before you begin using the XOG, verify that you are familiar with XML code, web services, and Classic PPM. Classic PPM web services are available on the same HTTP or HTTPS port as the HTML web browser interface. You can access a web service using one of these methods:
- XOG client. Download the XOG client to your computer and use it to run the XOG. - Simple Object Access Protocol (SOAP). Access and run the XOG directly using SOAP without using the XOG client.
Classic PPM web services use XML messages that comply with the SOAP standard.
TIP
This content is only available in English.
- XOG Client - XOG Web Services - Web Services Descriptive Language (WSDL) - Assign XOG Access Rights - Defects Fixed for XOG - Clear MVL fields with XOG

## XOG Client

The XOG client is a Java program that you can install on your computer and can use to import and export data using the XOG. The XOG client communicates with the Classic PPM server on the standard HTTP port using the SOAP protocol. Using the client, you can perform these steps:
- Log in to start an authenticated session. - Execute requests to read or write Classic PPM data. - Log out to end the session.

## XOG Web Services

The following web services are available from the XOG API:
- Object API. Includes all read and write services for objects for which the data can be imported or exported using the XOG.
- InvokeAction API. Supports administrative actions that are beyond the categories of data import and export. This API includes the Process root element.
- Query API. Supports the execution of NSQL-based queries from the XOG. You can use this API to select and export the information that you need from Classic PPM.

## Web Services Descriptive Language (WSDL)

The Web Services Description Language (WSDL) describes the available XOG services and indicates how to communicate with them. WSDL is used with SOAP and the XML schema to provide web services over the Internet. You can connect to a web service and can read the appropriate WSDL file to learn what functions are available on the server.

## Assign XOG Access Rights

Before you use the XOG client, you must have a valid Classic PPM login name and password. You must also be assigned one of these access rights: - Administration - Access - Administration - XOG Before a resource can use the XOG to import or export data for a particular object, assign them the XOG access right for that object. For example, you can assign the resource the Asset - XOG Access, Project - XOG Access, and Resource XOG Access access right. You can grant the Asset - XOG Access right to a resource to support a custom Classic PPM desktop application that needs asset information. The resource can import and export instance data that is associated with the asset object. However, the resource cannot import or export data on any other objects. You can find XOG access rights (global rights) for objects in the access rights list in the Administration Tool, in addition to the other supported access rights. Follow these steps: 1. Open Administration, and from Organization and Access, click Resources. 2. Click the resource last name. 3. Open the Resource's Access Rights menu and click Global. 4. Click Add. 5. Enter *XOG Access in the Access Right field and click Filter. 6. Select the appropriate XOG access rights and click Add. The XOG access right is assigned to the resource.
Defects Fixed for XOG
DE60354 and DE55248: XOG has no Option to Update Default Resource OBS, Staff OBS Unit When Multiple Units have Same Name Steps to Reproduce 1. Create an OBS and associate it with the resource object. 2. Create multiple units with the same name 3. Try to update the default Staff OBS Unit/ Staff OBS Unit name by using XOG
Expected Results: You should be able to XOG to update the Staff OBS Unit name. Actual Results: The Default Resource OBS Unit, Staff OBS Unit has only the unit name and XOG cannot identify the units if there are multiple units with the same name. Fix Included: XOG now includes the defaultStaffOBSUnitPath attribute, where the user can give the whole path for the OBS Unit. If the user does not specify the defaultStaffOBSUnitPath attribute, the XOG will consider the defaultStaffOBSUnit attribute.


Clear MVL fields with XOG


In previous releases, you could not remove a value populated in a multi-value lookup using XOG. In Clarity 16.0.0 and higher releases, the XOG API has been updated to allow removal of all values populated within a multi-value lookup. The multi-value lookup will accept the new flag "complete="true" that will replace the passed values with existing values. If no values are passed then the API will remove all existing values.
Upgrade Impact: When you upgrade to this release, you can enable to remove values associated with multi-value lookups.
XOG Client Installation
Download and install the XML Open Gateway (XOG) client, test connectivity, and verify the XOG client version. You can also configure FIPS 140-2 mode.
- Download and Install the XOG Client - Verify the XOG Client Version and Connectivity - (Optional) Set Up FIPS 140-2 Mode
Download and Install the XOG Client Follow these steps: 1. Click Administration, General Settings, Client Downloads. 2. For the Windows operating system:
a. Click the Windows Installer Download link. b. Save the XOG.exe file to a directory on your local computer. c. Run the XOG.exe file and follow the on-screen instructions. 3. For other supported operating systems: a. Click the Cross-platform ZIP Download link. b. Save the xogclient.zip file to your local computer.


c. Create a local folder that is named xogclient and extract the xogclient.zip files to that folder. 4. (UNIX only) Run the chmod +x run.sh command from the bin directory.


XOG Client Directories
The following directories are copied to your computer when you run the XOG client installer:
- bin (batch files to run the XOG client; you can also run the XOG client using the test.properties file) - lib (libraries that are required to run the XOG client) - wsdl (the XOGService.wsdl file) - xml (sample XML read and write files for the XOG-supported objects) - xsd (XML schemas for the XOG-supported objects)
Verify the XOG Client Version and Connectivity
After you install the XOG client, test its connectivity to the Classic PPM server. Over time, a mismatch between Classic PPM and the XOG client can occur if the product is upgraded but the XOG client is not. Verify that the XOG client version that you are using matches your version of Classic PPM.
WARNING
After you download and install the XOG client, download the Java Runtime Environment (JRE) and set the JAVA_HOME variable. Complete this step before you verify the XOG client version and the connectivity.
Follow these steps:
1. In Classic PPM, determine your release version number by clicking About in the upper-right corner of any page. 2. Open a command prompt.
- Windows: From the Start menu, select All Programs, CA, Clarity, Classic PPM XML Open Gateway. - UNIX: Navigate to the XOG client home directory. 3. Issue the following commands to see the XOG client version number: - HTTP enabled
- xog
- HTTPS enabled
- xog -sslenabled true

4. If the version numbers do not match, download and reinstall the XOG client. 5. Issue the following command to verify the connection:
login <username>/<mypassword>@<myserver>:<port>
For example, if you are connecting to https://cppm-testsite-1234.ca.com/niku with the username and password of admin1/password2, issue the following command:
login admin1/password2@cppm-testsite-1234.ca.com:443

(Optional) Set Up FIPS 140-2 Mode
The FIPS 140-2 standard defines U.S. federal government requirements for encrypting sensitive data. If this standard is required for your business, set up FIPS 140-2 mode. (For SaaS) Contact Broadcom Support to let them know if you are a Clarity customer who wants to enable FIPS mode.
TIP
In Classic PPM 15.3 (released in September 2017), a new Bouncy Castle Cryptography Package for FIPS replaced the RSA B-SAFE FIPS provider from previous releases.


See CSA: Security, Passwords, LDAP, SSL, SSO, XSS, and FIPS.
XOG Client Shell, Command Line, Properties File, and SOAP
Integrators and system administrators can run XOG commands in the following ways: - Run the XOG from the Command Line - Run the XOG Using a .Properties File - Run the XOG Client as a Shell - Run the XOG Using SOAP


Run the XOG from the Command Line
You can enter the parameters that are required to import and export data directly in the command line. You can also store the parameters in a .properties file and call the file from the command line.
Follow these steps:
1. Open a command prompt: - Windows - From the Start menu, select All Programs, CA, Classic PPM, Classic PPM XML Open Gateway. - UNIX - Navigate to the XOG client home directory.
2. Type the XOG command with the parameters for the operation that you want to perform and press Enter.

Command-Line Parameters (XOG Client) The XOG client command line uses the parameters in the following table:

-servername -portnumber -sslenabled -output
-input -username
-password -propertyfile
-fipsenabled

Command

Description
Indicates the name of the server that is running Classic PPM.
Indicates the port number that is used on the server. Default: 80. The typical value for an SSL-enabled server is 443. Indicates if the server is an SSL-enabled server. Default: False Identifies the path to a file where the output of the operation is written. Any existing file is overwritten.
Indicates the path to the file that contains the XOG request.
Indicates the username that is required for the authentication. This user must have XOG administration access rights.
Indicates the user password.
(Optional) The properties file that contains any of the previous parameters.
Indicates that the client must operate in a FIPS 140-2 compliant mode. Default: False

Basic Operations These XOG commands for basic operations are provided for your reference. - To see the command usage, issue this command:


xog -?
- To read an object through the XOG, issue this command:
xog -servername <host> -portnumber <port> -username <adminuser> -password <password> -input xml/ prj_projects_read.xml
- To write output to a file (instead of displaying it in the console), issue this command:
xog -servername <host> -portnumber <port> -username <adminuser> -password <password> -input xml/ prj_projects_read.xml -output xml/prj_project_write.xml
By default, the output is saved to the directory location where you are currently when you run the command.


Run the XOG Using a .Properties File
You can pass the command-line parameters to the XOG client from a .properties file. You can create your own .properties file from the example file that is in the XOG client bin directory. The advantage of this method is that you can store the parameters for common XOG requests in multiple .properties files and you can reuse them. This method saves the effort of writing out the parameters on the command line each time that you want to use them. For example, if you are using XOG to import users, companies, resources, and content items, create the following files:
- users.properties - companies.properties - resources.properties - content.properties
Each file contains different input and output property values that are appropriate for the type of data that you are importing.
Properties File Example
This .properties file example contains the parameters that are required to read project data. The values that are provided for the parameters appear in bold.

# --- server host name you want to test against

servername=localhost
portnumber=80
#default port number for ssl
#portnumber=443
#set to true if running against a SSL enabled server
sslenabled=false
#set to true if running against a SSL enabled server in FIPS 140-2 mode
fipsenabled=false
output=out.xml
username=admin
password=admin


Create a .Properties File To create a properties file, make a copy of the example test.properties file that is located in the bin directory of the XOG client. Then, modify the copy to import or export specific data that you need. Remember these points as you modify the file: - Use the equal sign (=) to assign parameters in the properties file. For example, password=admin. - Use the number sign (#) for comments. For example, in the following illustration #portnumber=443 is a comment that
will not be read as an input value. - The XML input file that is required when you run XOG from the command line must be specified in the .properties file.
The list of all the read and write file examples are provided in the xml folder are included. Uncomment the file that you want to use for input. Be sure to comment out any files that are not being used as input. The following image shows the test.properties file with the default parameter values.
Run the XOG Using the .Properties File Follow these steps: 1. Modify the test.properties file or make your own .properties file and save it in the bin directory. 2. Do one of the following:
- Windows - From the Start menu, select All Programs, CA, Classic PPM, Classic PPM XML Open Gateway. - UNIX - Navigate to the XOG client home directory. 3. Issue this command at the XOG prompt: xog -propertyfile test.properties 4. View the output

Run the XOG Client as a Shell
Typically, the XOG client is used as a non interactive command-line tool. When you develop integrations or test XOG requests, you may want to run the XOG client as a shell. The shell lets you log in once and execute multiple requests before logging out.
Follow these steps:
1. Open the command prompt: - Windows - From the Start menu, select All Programs, CA, Classic PPM, Classic PPM XML Open Gateway. - UNIX - Navigate to the XOG client home directory.
2. Issue this command: xog

XOG Client Shell Commands
Use the XOG client shell commands when you develop integrations or when you test XOG requests. The XOG client shell uses the commands in the following table:

? login
logout output call
exit

Command

Description
Displays the command usage screen.
Retrieves a new session ID by logging in to one of the Classic PPM servers. The login command string is variable.
Example: > login admin/mypassword@myserver:80
Closes any active sessions.
Sets the path and file name where the results of the XOG call are captured. Example: > output c:\xog\xml\out.xml Invokes a XOG request file. The file path may be absolute or relative to the working directory. Example: > call xml/biz_companies_read.xml > call D:/Integrations/<CAPPM>/write.xml
Logs out of active sessions and quits the shell.

Run the XOG Using SOAP
XOG is a web service interface that provides a SOAP API for communication with Classic PPM over the web. The XOG SOAP API is documented in the WSDL and the XSD files. Any client tool, in addition to the XOG client, can send and receive SOAP messages using the XOG.
These steps describe the general process to invoke XOG directly using SOAP.
Follow these steps:
1. Call Login to establish a session.
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"> <SOAP-ENV:Header/>


<SOAP-ENV:Body> <Login xmlns="http://www.niku.com/xog"> <Username>admin</Username> <Password>admin</Password> </Login>
</SOAP-ENV:Body> </SOAP-ENV:Envelope>
In this example, the following items are the Login input elements: - Login: The main body element of the login request. Login returns a SessionID that you may use in subsequent
requests. - Username: The name of the user doing the work. - Password: The password for the user. 2. Invoke the request using the SessionID.
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xog="http://www.niku.com/xog"> <SOAP-ENV:Header> <xog:Auth><xog:SessionID>[session id]</xog:SessionID></xog:Auth> </SOAP-ENV:Header> <SOAP-ENV:Body> <obj:WriteChange xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_change.xsd"> <Header version="12.0.0.5028" externalSource="ORACLE-FINANCIAL"/ <changeRequests> <changeRequest benefits="change request for xog test" code="change request for xog test" description="change request for xog test" impactBaseline="change request for xog test" impactDescription="change request for xog test" name="change request for xog test" ownerCode="admin" priorityCode="LOW" projectCode="riskIssueProject" reasons="change request for xog test" targetResolutionDate="2004-10-15" statusCode="OPEN"> </NikuDataBus> </obj:WriteChange> </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
In this example, the following items are the RequestSessionAL input elements: - SessionAL: The authentication string. - NikuDataBus: The main body element of the Write object request. When making multiple requests with the same
SessionID such as when an external process wakes up at defined intervals, the SessionID may time out. This is the equivalent of a Logout request. To establish a new SessionID, log in again. The session timeout duration is the same as that set for web browser user sessions; you can configure this setting from the System Options in the Administrator Tool. 3. Call Logout to invalidate the SessionID and close the session.
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"

xmlns:obj="http://www.niku.com/xog/Object"> <soapenv:Header/> <soapenv:Body> <obj:Logout> <obj:SessionID>[SessionID]</obj:SessionID> </obj:Logout> </soapenv:Body>
</soapenv:Envelope>
In this example, the following items are the Logout input elements: - SessionID: The authentication string that identifies the session to be invalidated. - Logout: The main body element of the Logout request.
XOG Schema, Sample XML Files, and Special Characters
Use these XOG tips and guidelines to learn how to use schema files, read and write files, special characters, date and time format, filtering, and values to pass with the XOG. - Schema Files - XML Read and Write Files - Special Characters - Date and Time Format - Use of EQUALS, OR, BETWEEN, AFTER, and BEFORE - Values to Pass
Schema Files Schemas are templates that contain the rules for creating valid XML files that are run using XOG. The schema definitions apply to all read and write requests and responses. You can access the schemas from the Classic PPM server or from the XOG client directories on your computer. To find the schema definitions on the Classic PPM server, navigate to the $installDir/webroot/WEB-INF/xog/xsd directory. In this directory, $installDir is the customer installation directory. For example, E:/niku/install. To find the schema definitions in the XOG client directories on your computer, navigate to the directory where the XOG client is installed and look in the xsd directory. The directory contains common schema definitions and object-specific definitions.
NOTE The xsd folder contains schema definitions which assist you to create valid XML files. However, we recommend you to verify that the attributes are documented in the XOG Object Reference before proceeding to use them. Some attributes in the xsd files might be deprecated or unsupported.
Schema Definitions These schema definitions are found in the xsd folder: - nikuxog_read.xsd (read request). This schema definition includes these items:
- nikuxog_readTypes.xsd. This schema defines the NikuDataBus request element. - nikuxog_readQueryTypes.xsd. This schema defines the Query request element. The nikuxog_readQueryTypes.xsd also includes the XSD files that define the read/write schemas for special stock objects.
- nikuxog_<object>.xsd (read response and write request). This schema definition applies to a read object response or a write object request.
- status.xsd (write response). This schema definition applies to all write object responses. NikuDataBus Header Element All read and write objects require the header element. This element is also common to all request schemas. The header defines the base version of the XOG service and the external source. The header element has these attributes: - version. Required. The version of the XOG in standard XML format. Type: String - externalSource. Required for Writes only. Here are the supported values:
- NIKU - ORACLE-FINANCIAL - PEOPLESOFT - SAP - OTHER - OTHER-EXPENSE - OTHER-TIME - REMEDY Default: NIKU when reading from Classic PPM. Type: String Attribute Information in the Schema You can find the following attribute information in the schema: - Sequence - Attribute name - Maximum field length - Required field indicator The following image shows attribute information in a schema file.

XML Read and Write Files You can use the sample XML read and write files for Classic PPM objects that are provided with the XOG client to import or export data. These files are stored in the xml directory that was created when you installed the XOG client. XML Read Files You can edit an example XML read file to create a new XML read file or to export the information that you want for an object. Each example read file contains the necessary header information, arguments, and query filters to complete a read for the object the file represents. The following image shows an example XML read file for the project object (prj_projects_read.xml).
- In the header section, the action read and the objectType project indicate that this file is for exporting (reading) project data.
- The arguments indicate the type of project information that you want included in the data export. The default is to order the output first by name (order_by_1) and then by project ID (order_by_2). You can change the order by swapping the numbers 1 and 2 in the argument names. The default value for arguments that include data is true. Set arguments to false if you do not want to include project information in the output.
- The query section and its filter criteria selection limit the data to only what is necessary. XML Write Files You can create an XML write file in these ways: - Manually. You can use the XML write file examples in the xml folder that were created when the XOG client was
installed. These files are templates that can be modified to create XML files for almost any write purpose. - Use the output of an XML read file. The output file of an XML read file is returned in the well-formed format of an
XML write file. Edit the output file to create a new XML write file. We recommend that you use an advanced XML editor to edit this file. Example: Create an XML Write File from the Output of an XML Read File The following example illustrates how to create an XML write file for the project object using the output file of an XML read file.


Follow these steps:

1. Create an example project in Classic PPM that contains the information that you want in the final XML write file.In this example, a project that is named project1 is created, with two resources and a task with assignments. This project information appears in the correct XML write format in the output file.
2. Create the XML read file. This code sample shows the XML read file for the project object.

<?xml version="1.0" encoding="UTF-8"?>

<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/

nikuxog_read.xsd">

<Header version="6.0.11" action="read" objectType="project" externalSource="NIKU">

<!-- you change the order by simply swap 1 and 2 number in the name attribute

-->

<args name="order_by_1" value="name"/>

<args name="order_by_2" value="projectID"/>

<args name="include_tasks" value="true"/>

<args name="include_dependencies" value="true"/>

<args name="include_subprojects" value="true"/>

<args name="include_resources" value="true"/>

<args name="include_baselines" value="true"/>

<args name="include_allocations" value="true"/>

<args name="include_estimates" value="true"/>

<args name="include_actuals" value="true"/>

<args name="include_custom" value="true"/>

<args name="include_burdening" value="false" />

</Header>

<Query>

<Filter name="projectID" criteria="EQUALS">project1</Filter>

</Query>

</NikuDataBus>

The header section indicates a read action for the object type project with the list of arguments for the data. The query section indicates the name of the project for the returned data. 3. Run the XOG using the read file for the project object as input to create the output XML file. 4. Examine the output XML file and make any necessary edits so that you can use the file as an XML write file. 5. Save the changes. This code sample shows the well-formed XML output file.

<?xml version="1.0" encoding="UTF-8"?>

<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/

nikuxog_project.xsd">

<Header version="6.0.11" action="write" objectType="project" externalSource="NIKU">

<Projects>

<Project active="true" alignment="100" approved="true"

approvedForBilling="1" asOf="2009-01-02T00:00:00"

billingCurrencyCode="USD" billingType="S"

calculateFinancialMetrics="true" chargeCodeExtID="Expense"

clientID="Internal" clientName="Internal" closed="false"

currencyISOcode="USD"

description="A Test Project Description" entityCode="CORP"

equipmentCostSource="Financial Cost and Rate Matrix"

equipmentExchageRateType="AVERAGE"

equipmentRateSource="Financial Cost and Rate Matrix"

expenseCostSource="Financial Cost and Rate Matrix"

12.0.0.5028

expenseExchageRateType="AVERAGE"

expenseRateSource="Financial Cost and Rate Matrix"


financialStatus="O" finish="2009-12-31T17:00:00" flexibilityRisk="0" setBudgetValuesEqualToPlannedValues="true" format="0" fundingRisk="0" goalCode="IMPROVE_INFRASTRUCTURE" humanInterfaceRisk="0" implementationRisk="0" interdependenciesRisk="0" laborCostSource="Financial Cost and Rate Matrix" laborExchageRateType="AVERAGE" laborRateSource="Financial Cost and Rate Matrix" lastUpdatedBy="admin" lastUpdatedDate="2009-02-11T09:42:05" managerResourceID="paulMartin" materialCostSource="Financial Cost and Rate Matrix" materialExchageRateType="AVERAGE" materialRateSource="Financial Cost and Rate Matrix" name="A Test Project" objectivesRisk="0" openForTimeEntry="true" organizationalCultureRisk="0" pageLayoutCode="projmgr.projectPageFrame" plannedBenFinish="2010-01-01T00:00:00" plannedBenStart="2009-12-01T00:00:00" plannedBenTotal="1000" plannedBreakEven="2010-01-01T00:00:00" plannedCostFinish="2010-01-01T00:00:00" plannedCostStart="2009-01-01T00:00:00" plannedCostTotal="1000" plannedNPV="0" plannedROI="0" priority="10" processCode="IT" program="false" progress="0" projectID="project1" requiredForScenarios="false" resourceAvailabilityRisk="0" sponsorshipRisk="0" stageCode="CSK_INITIATION" start="2009-01-01T08:00:00" status="1" statusComment="Status Comment Text" statusIndicator="1" supportabilityRisk="0" syncInvestmentAndBudgetDates="true" technicalRisk="0" template="false" trackMode="2"> <ProjectBaselines/> <Resources>
<Resource availFrom="2009-01-01T08:00:00" availTo="2009-12-31T17:00:00" bookingStatus="5" defaultAllocation="1" isProjectManager="false" lastUpdatedBy="admin" lastUpdatedDate="2009-02-11T09:39:40" openForTimeEntry="true" projectRoleID="csk.Architect" resourceID="artKatect"> <Baselines/> <AllocCurve/> <CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> <SkillAssocs/>
</Resource> <Resource availFrom="2009-01-01T08:00:00"
availTo="2009-12-31T17:00:00" bookingStatus="5" defaultAllocation="1" isProjectManager="true" lastUpdatedBy="admin" lastUpdatedDate="2009-02-11T09:40:11" openForTimeEntry="true"

Clarity - 16.4.1 4255


projectRoleID="csk.Project Manager" resourceID="paulMartin"> <Baselines/> <AllocCurve/> <CustomInformation>
<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> <SkillAssocs/> </Resource> </Resources> <Tasks> <Task finish="2009-12-31T17:00:00" internalTaskID="5000578" key="false" lastUpdatedBy="admin" lastUpdatedDate="2009-02-11T09:39:40" lockedForScheduling="false" milestone="false" name="A Test Project" orderID="1" outlineLevel="1" percComp="0" start="2009-01-01T08:00:00" status="0" summary="false" taskID="~rmw" topDownPercent="0"> <Baselines/> <Assignments>
<TaskLabor actualWork="0" baselineWork="0" estPattern="3" finish="2009-12-31T17:00:00" lastUpdatedBy="admin" lastUpdatedDate="2009-02-11T09:39:41" remainingWork="2088" resourceID="artKatect" roleID="csk.Architect" start="2009-01-01T08:00:00" unpostedActuals="0"> <Baselines/> <EstCurve> <Segment finish="2010-01-01T00:00:00" start="2009-01-01T00:00:00" sum="2088.0000"/> </EstCurve> <ActCurve/> <CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation>
</TaskLabor> <TaskLabor actualWork="0" baselineWork="0"
estPattern="3" finish="2009-12-31T17:00:00" lastUpdatedBy="admin" lastUpdatedDate="2009-02-11T09:40:11" remainingWork="2088" resourceID="paulMartin" roleID="csk.Project Manager" start="2009-01-01T08:00:00" unpostedActuals="0"> <Baselines/> <EstCurve>
<Segment finish="2010-01-01T00:00:00" start="2009-01-01T00:00:00" sum="2088.0000"/>
</EstCurve> <ActCurve/> <CustomInformation>
<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation>

Clarity - 16.4.1 4256


</TaskLabor> </Assignments> <estimateRules/> <CustomInformation>
<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> </Task> <Task chargeCodeExtID="Expense" finish="2009-12-31T17:00:00" internalTaskID="5000585" key="true" lastUpdatedBy="admin" lastUpdatedDate="2009-02-11T09:41:22" lockedForScheduling="false" milestone="false" name="Task1" nextSiblingOf="~rmw" orderID="2" outlineLevel="1" percComp="0" start="2009-01-01T08:00:00" status="0" summary="false" taskID="Task1"> <Baselines/> <Assignments>
<TaskLabor actualWork="0" baselineWork="0" estPattern="3" finish="2009-12-31T17:00:00" lastUpdatedBy="admin" lastUpdatedDate="2009-02-11T09:41:03" remainingWork="2088" resourceID="artKatect" roleID="csk.Architect" start="2009-01-01T08:00:00" unpostedActuals="0"> <Baselines/> <EstCurve> <Segment finish="2010-01-01T00:00:00" start="2009-01-01T00:00:00" sum="2088.0000"/> </EstCurve> <ActCurve/> <CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation>
</TaskLabor> <TaskLabor actualWork="0" baselineWork="0"
estPattern="3" finish="2009-12-31T17:00:00" lastUpdatedBy="admin" lastUpdatedDate="2009-02-11T09:41:03" remainingWork="2088" resourceID="paulMartin" roleID="csk.Project Manager" start="2009-01-01T08:00:00" unpostedActuals="0"> <Baselines/> <EstCurve>
<Segment finish="2010-01-01T00:00:00" start="2009-01-01T00:00:00" sum="2088.0000"/>
</EstCurve> <ActCurve/> <CustomInformation>
<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> </TaskLabor>

Clarity - 16.4.1 4257


</Assignments> <estimateRules/> <CustomInformation>
<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> </Task> </Tasks> <Dependencies/> <Subprojects/> <Allocations/> <scenarioDependencies/> <InvestmentAssociations> <Allocations/> <Hierarchies/> </InvestmentAssociations> <CustomInformation> <ColumnValue name="obj_align_factor1">50</ColumnValue> <ColumnValue name="obj_align_factor2">50</ColumnValue> <ColumnValue name="obj_align_factor3">50</ColumnValue> <ColumnValue name="obj_align_factor4">50</ColumnValue> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> <General addedBy="admin" addedDate="2009-02-11"/> <OBSAssocs complete="false"> <OBSAssoc id="Business Unit" name="Business Unit" unitPath="/All Business Units/Business Operations/Operational Systems"/> <OBSAssoc id="corp_dept" name="CORP Department OBS" unitPath="/CORP IT"/> <OBSAssoc id="Security OBS" name="Security OBS" unitPath="/Corporate/IT/Portfolio"/> </OBSAssocs> <BurdeningAssocs> <BurdeningAssoc transactionType="Labor"/> <BurdeningAssoc transactionType="Material"/> <BurdeningAssoc transactionType="Expenses"/> <BurdeningAssoc transactionType="Equipment"/> </BurdeningAssocs> </Project> </Projects> <XOGOutput> <Object type="project"/> <Status state="SUCCESS"/> <Statistics failureRecords="0" insertedRecords="0" totalNumberOfRecords="1" updatedRecords="0"/> <Records/> </XOGOutput> </NikuDataBus>


Special Characters
Escape special characters in XOG requests to ensure a successful XOG read or write request. You can escape special characters or can use CDATA.


Escape Rules You can use one of the escape rules in the following table to escape special characters in the XML file:


& (Ampersand) ' (Apostrophe) > (Greater-than) < (Less-than) " (Quotes)

Special Character

&amp; &apos; &gt; &lt; &quot;

Rule

Example: This example shows how to handle the term E1&P2 in the XML text by escaping the term:
<ColumnValue name ="abn_vendor_names">E1&amp;P2</ColumnValue> CDATA You can use CDATA instead of escaping special characters. CDATA is a section of the element content in XML that is marked so that it is interpreted only as character data, and not as markup data. To start a CDATA section, use <![CDATA[. To end a CDATA section, use ]] >.
CDATA Example This example shows how to handle the term E1&P2 in the XML text using CDATA.
<ColumnValue name ="abn_vendor_names"><![CDATA[E1&P2]] ></ColumnValue>

Date and Time Format
Use this standard format for date and time strings for the XOG:
- Date format: YYYY-MM-DD - Time format: HH24MMSS
Consider this important information:
- Date and time values for custom objects. The date and time value of a date attribute is stored in Greenwich Mean Time (GMT). For a custom object, offset the date and time value that is being stored from your locale to GMT. For example, if the date and time that you want is November 20th, 2008, 15:15 (3:15PM) in Tokyo, the date and time value in the XOG write file must be formatted and adjusted to GMT time (which in Tokyo is +9 hours). The resulting offsetformatted value to be entered in the XOG import file is 2008-11-21T00:15:00.
- Timestamps for task finish dates. Include a timestamp for task finish dates in the prj_projects_write.xml file. If you do not, the time defaults to 00:00:00. The effect of the default is that in the Portfolio portlets, the finish dates with the default timestamp applied display a day later. For example, The Portfolio portlets show 2009-01-01, when the actual finish date is 2008-12-31. To avoid the addition of an extra day to a finish date, use 17:00:00 as the timestamp when one is not provided.

Use of EQUALS, OR, BETWEEN, AFTER, and BEFORE Filtering in a XOG read request requires criteria values. Here are some possible criteria values:
- EQUALS - OR - BEFORE - AFTER - BETWEEN Examples: <Filter name="projectID" criteria="EQUALS">test</Filter> <Filter name="projectID" criteria="OR">project1,project2</Filter> <Filter name="projectID" criteria="AFTER">A</Filter> <Filter name="projectID" criteria="BEFORE">Z</Filter> <Filter name="start" criteria="BETWEEN">2007-01-07,2009-01-15</Filter>
WARNING Do not use spaces around comma-separated entries for OR and BETWEEN filters.
Values to Pass The following table shows the values that the XOG expects in specific cases:


Lookup Custom Boolean field

Field Type

Value Type Passed
lookup_code, lookup_enum, or lookup ID. The type that is passed depends on the configuration of the lookup. 1 or 0

XOG Services: Object API
The structure for each XOG object is defined in its corresponding schema (XSD). One general schema definition is defined for all read object requests. However, the schema definition for each read object response and each write object request varies based on the object that is accessed. This variation happens because the structure for each object is defined in its own corresponding schema.
For a complete list of available XOG objects, see XOG Object Reference.
- XOG Object Types - ActionObject Element - Read Standard Stock Objects - Write Standard Stock Objects - Partitioning and Standard Stock Objects - Read and Write Custom Object Instances - ContentPack Service - Autonumbering and Custom Attributes - Import and Export Custom Fiscal Time-Varying Attributes - Import and Export UI Themes - Include New and Delete Buttons - Passing XDM Custom Fields


XOG Object Types The Object API includes these groups of XOG objects: - Standard stock objects: Refers to actual objects in the XOG. You can communicate with these standard stock
objects by reading and writing data using a valid interface. - Custom objects and add-ins: These objects have unique schemas that are different from the standard stock object
schema. First create custom objects in Studio before you can invoke them through the XOG. Add-in schemas allow you to read and write Studio components such as objects, pages, and portlets. For more information, see Classic PPM Studio Development.
ActionObject Element All read and write XOG objects use an <ActionObject> element to define the action to be taken and the object to take it on. An action can be either a read or write. An object can be any XOG object that is available under the Objects API category such as department and companies. For example, the <ReadProject> element indicates read as the action to take, and Project is the XOG object against which the action is taken. The <ActionObject> element is the parent element that wraps around the NikuDataBus header attributes. This example shows the structure that is used for requesting a read action on the Project object:
<obj:ReadProject xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus> <Header/> <Query/> </NikuDataBus>
</obj:ReadProject>
The namespace http://www.niku.com/xog/Object must be localized in your request file to the <ActionObject> element. This localization is accomplished with the obj prefix. If you do not include this prefix, you see an error during the processing of the request.
Read Standard Stock Objects Read object requests are used to extract specific object records from Classic PPM. Example XML Read Request The read object request services reference the nikuxog_read.xsd schema in this example:
<obj:ReadUser xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd"> <Header version="12.0.0.5028" externalSource="NIKU"/> <Query> <Filter name="userName" criteria="EQUALS">admin</Filter> </Query> </NikuDataBus> </obj:ReadUser>
Example XML Read Response In this example, the nikuxog_user.xsd defines the NikuDataBus read response element.
<ReadUserResponse xmlns="http://www.niku.com/xog/Object"> <NikuDataBus

xsi:noNamespaceSchemaLocation="../xsd/nikuxog_user.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <Header externalSource="NIKU" version="12.0.0.5028"/>
<Users> <User externalId=" " userLanguage="English" userLocale="en_US" userName="admin" userStatus="ACTIVE" userTimezone="Europe/London" userType="INTERNAL"> <PersonalInformation emailAddress="test@ca.com" firstName="ca" lastName="Administrator"/> <Resource resourceId="admin"/> <Company/> <General addedBy="admin" addedDate="2005-03-12"/> <OBSAssocs> <OBSAssoc id="loc" name="Location" unitPath="/ USA"/> </OBSAssocs> <Groups> <Group id="ApplAdminRl"/> </Groups> <GlobalRights/> <InstanceRights/> <InstanceOBSRights> </User>
</Users> <XOGOutput>
<Status state="SUCCESS"/> <Statistics failureRecords="0"insertedRecords="0" totalNumberOfRecords="1" updatedRecords="0"/> <Records/>' </XOGOutput> </NikuDataBus> </ReadUserResponse>
Write Standard Stock Objects Write object requests are used to insert and update records into another system. Example XML Write Request In the XML write requests, the unique record identifier varies based on the object. In this example, the identifier is the userName attribute. This example is an update, and it includes only a subset of the information that is exported in the read request example. The nikuxog_user.xsd defines the NikuDataBus write request element.
<obj:WriteUser xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus xsi:noNamespaceSchemaLocation="../xsd/nikuxog_user.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <Header externalSource="NIKU" version="12.0.0.5028"/> <Users> <User externalId=" " userLanguage="English" userLocale="en_US" userName="admin" userStatus="ACTIVE" userTimezone="Europe/London"> <PersonalInformation emailAddress="admin@ca.com"/> </User> </Users>

</NikuDataBus> </obj:WriteUser>
Example XML Write Response This example is the result from the example write request.
<WriteUserResponse xmlns="http://www.niku.com/xog/Object"> <XOGOutput xsi:noNamespaceSchemaLocation="../xsd/status.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <Object type="user"/> <Status state="SUCCESS"/> <Statistics failureRecords="0" insertedRecords="0" totalNumberOfRecords="1" updatedRecords="1"/
> <Records> <Record> <KeyInformation> <column name="ALL">ALL RECORDS</column> </KeyInformation> <ErrorInformation> <Severity>WARNING</Severity> <Description>New Users Password will be Defaulted to Value ca2000</
Description> </ErrorInformation>
</Record> </Records> </XOGOutput> </WriteUserResponse>
Partitioning and Standard Stock Objects The read object response services provide partition view information for each object instance. Similarly, you can write a partition view to each write object instance request. If you do not specify a partition view in your write request, all of the instances that you create are automatically assigned to the default system partition value NIKU.ROOT. To specify a new partition, replace NIKU.ROOT with your partition code. Before you can specify a partition view, create a partition model and associate it with your objects in Studio. For more information, see Classic PPM Studio Development. Example Partition XML This example shows how partition information is specified for each object instance (for each Project) using the <CustomInformation> element.
<obj:WriteProject xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus xsi:noNamespaceSchemaLocation="../xsd/nikuxog_user.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <Header externalSource="NIKU" version="8.0"/> <Projects> <Project> . . . . <CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue>


. . . . </Project> </Projectss> </NikuDataBus> </obj:WriteProject>

</CustomInformation>


Read and Write Custom Object Instances
The CustomObjectInstances service is an entry point to enable XOG communication with instances of custom objects. Instances represent data that is held within custom objects, not the definition of the objects.
For more information, see Classic PPM Studio Development.

Read CustomObjectInstances
A CustomObjectInstances read request requires the namespace niku_xog_read.xsd and then the <CustomObjectInstanceQuery> element. The CustomObjectInstanceQuery element allows you to filter on instances of one or more custom objects using these filter attributes:
- objectCode: Refers to the custom object ID as defined in Studio. - instanceCode: Refers to the custom object instance ID as defined in Studio.
For more information, see Classic PPM Studio Development.
Example XML Read Request
This XML sample shows an example read CustomObjectInstance request and how it uses the <CustomObjectInstanceQuery> element.
<obj:ReadCustomObjectInstance xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/
nikuxog_read.xsd"> <Header version="12.0.0.5028" externalSource="NIKU"/> <CustomObjectInstanceQuery> <Filter name="objectCode" criteria="EQUALS">training_modules</Filter> <Filter name="instanceCode" criteria="EQUALS">Business Ethics </Filter> </CustomObjectInstanceQuery>
</NikuDataBus> </obj:ReadCustomObjectInstance>

Write CustomObjectInstances The write CustomObjectInstances request services are defined by the nikuxog_customObjectInstance.xsd schema. Example Write XML This example shows an XML write request:
<obj:WriteCustomObjectInstance xmlns:obj="http://www.niku.com/ xog/Object"> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/ nikuxog_customObjectInstance.xsd"> <Header externalSource="NIKU" version="12.0.0.5028"/> <customObjectInstances objectCode="movies"> <instance instanceCode="Star Wars" objectCode="movies11">


<CustomInformation> <ColumnValue name="category">Science Fiction</ ColumnValue> <ColumnValue name="code">Star Wars</ColumnValue> <ColumnValue name="cost">20000000</ColumnValue> <ColumnValue name="cost_currency">USD</ ColumnValue> <ColumnValue name="name">Star Wars</ColumnValue> <ColumnValue name="page_layout">odf.moviesFrame</ColumnValue> <ColumnValue name="partition_code">US</ ColumnValue> <ColumnValue name="us_rating">PG-13</ ColumnValue>
</CustomInformation> <OBSAssocs/>
</instance> </customObjectInstances> </NikuDataBus> </obj: WriteCustomObjectInstance>
Partitioning Like standard stock objects, the read CustomObjectInstances response service provides partition view information for each custom object instance. You can write a partition view to each write CustomObjectInstances instance. In the previous XML write request example, the partition view of US is specified for the Star Wars movie instance definition.
assignInstanceRights Flag When a user creates an instance of a custom object, three additional records will be added to the CMN_SEC_ASSGND_OBJ_PERM table while creating the instance. It happens because Clarity grants three creator instance rights to the user while creating the instance. The assignInstanceRights flag allows custom object instances to be created through XOG without auto-assigning the creator instance rights to the user.
FDieltdails
aSsestignInstanceRights | to bfoaollesane to avoid unnecessary records being added to the Clarity. Default: True For example:
<instance instanceCode="ABC" objectCode="manufacturer" assignInstanceRights="false">

ContentPack Service The ContentPack service is an entry point to enable XOG communication with Studio components, such as objects, object views, NSQL queries, portlets, process definitions, report definitions, lookups, and portlet pages.
For more information, see Classic PPM Studio Development.
Read Content Pack Objects Like standard stock objects, the read ContentPack request service is also defined by the nikuxog_read.xsd schema as shown in this example. However, for the ContentPack service, the schema is unique because it includes several possible query type elements. The query elements allow you to read Studio components.
The query types are cumulative, this allows, for example, query for a page and a separate query for a portlet not on that page.
The following query types are supported: - JobQuery - LookupQuery - MenuQuery - PageQuery - PartitionModelQuery - PortletQuery - ProcessQuery - QueryQuery - ViewQuery
NOTE For more information about reading the query types using ContentPack XOG, see the nikuxog_readTypes.xsd and nikuxog_readQueryTypes files. These files are stored in the xsd directory that was created when you installed the XOG client.
Example XML Read Request This example shows ViewQuery for reading the property and list components of the custom object myObject_v1.
<obj:ReadContentPack xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd"> <Header version="12.0.0.5028" externalSource="NIKU"/> <ViewQuery> <Filter name="code" criteria="EQUALS">property</Filter> <Filter name="object_code" criteria="EQUALS">myObject_v1</Filter> </ViewQuery> <ViewQuery> <Filter name="code" criteria="EQUALS">list</Filter> <Filter name="object_code" criteria="EQUALS">myObject_v1</Filter> </ViewQuery> </NikuDataBus>
</obj:ReadContentPack>
Read Content Pack Objects with Partitioning You can filter on partition views from a ContentPack read request by including the <ViewQuery> filter condition attribute. To read specific partitioned views using the ContentPack XOG, you must explicitly request these partitions in a ViewQuery by including the partition_code.

Specify these items in the file: - object_code. Indicates the Classic PPM identifier for the object. - partition_code. Indicates the Classic PPM identifier for the partition. If the partition_code is not specified, views for all
partitions are exported. Example XML Read Request with Partitioning This read ContentPack request specifies the ABC partition for the custom object myObject_v1.
<obj:ReadContentPack xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd"> <Header version="12.0.0.5028" externalSource="NIKU"> <!-- the contentType is used to determine which filter goes where --> <args contentType="job_definition" name="order_by_1" value="code"/> <args contentType="menu" name="order_by_1" value="code"/> <args contentType="view" name="order_by_1" value="code"/> <args contentType="process" name="order_by_1" value="code"/> <args contentType="object" name="order_by_1" value="code"/> </Header> <ViewQuery> <Filter name="code" criteria="EQUALS">property</Filter> <Filter name="object_code" criteria="EQUALS">myObject_v1</Filter> <Filter name="partition_code" criteria="EQUALS">ABC</Filter> </ViewQuery> <ViewQuery> <Filter name="code" criteria="EQUALS">list</Filter> <Filter name="object_code" criteria="EQUALS">myObject_v1</Filter> <Filter name="partition_code" criteria="EQUALS">ABC</Filter> </ViewQuery> <ObjectQuery> <Filter name="object_code" criteria="EQUALS">myObject_v1</Filter> </ObjectQuery> </NikuDataBus> </obj:ReadContentPack>
Export Content Types Without Dependencies You can use these arguments, singleContentType and no_dependencies, to export individual content types and to limit the amount of data that is exported for each type. These arguments should be used only for small, incremental updates to content.
WARNING Use care when applying these arguments. The user performing the export must have a thorough understanding of content data on the source and target systems. - singleContentType. Exports a specific content type. Specify the singleContentType argument in the XML read file. This is the format for the argument in the XML read file: <args name="singleContentType" value="content type"> In this argument, content type can be any of these supported content types:
- Job Definitions - Lookups - Menu Manager - Objects - Portlet Pages - Portlets - Processes - Queries - No_dependencies. Limits the amount of data that is exported for a specific content type. This is the format for the argument in the XML read file: <args name="no_dependencies" value="true/false"/> In this argument, true exports incremental changes for a content type without dependencies. By default, the no_dependencies flag is false, which means any dependencies that exist for the value that is specified in the singleContentType argument are exported if the value is not specified.
The following table shows the content types that are exported when the no_dependencies argument is set to true.

job_definition lookup menu object page [portlet page] portlet

Content Type

process query
Example: XML Read File for Exporting a Portlet Without Dependencies This example shows an XML read file where portlet data without any dependency data is requested.
<?xml version="1.0" encoding="UTF-8" ?> - <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd">

active, executable, isHidden code, hiddenAttributename, code, source, description, na code, source, description, na tabbedPage, code, customiz allowConfigure, allowConfig firstSliceAngle, forceFilter, lin Note: Attributes can vary de code, endStep, allowOneRu category, code, description,
- <Header version="12.0.0.5028" action="read" objectType="contentPack" externalSource="NIKU">

<!-- Provide following argument with singlecontenttype to retrieve only portlet. --> <args name="singleContentType" value="portlet" /> <!-- May specify following OPTIONAL argument no_dependencies to exclude dependent content. --> <args name="no_dependencies" value="true" /> </Header> - <PortletQuery>

<Filter name="code" criteria="EQUALS">balance</Filter>

</PortletQuery> </NikuDataBus>


Export Portlet Data from Studio to an XML File To facilitate the export of portlets, you can export this content type from Studio. The Portlets list page has an Export button that lets you export basic data on the portlets as individual XML files. The output XML files, which are packaged into a zip file, contain basic information with no dependencies.
Autonumbering and Custom Attributes The flag overrideAutoNumbering is an argument that is defined in the XOG header that determines whether the source XOG content overrides autonumbering in the target content. This flag is available for the custom attributes of custom objects. These rules apply: - If the flag is set to TRUE, the XOG content from the source is applied to the target. - If the flag is set to FALSE, the autonumbering scheme that is defined on the target is applied. - The flag is specified in the XOG import file. By default, OverrideAutoNumbering is set to TRUE. The following example shows the overrideAutoNumbering argument in the header:
<Header action="write" externalSource="NIKU" objectType="customObjectInstance" version="14.3.0"> <args name="overrideAutoNumbering" value="true"/>
</Header>
This section describes how to set up XOG for custom object instances (both master and sub-objects) with autonumbering true and false. For the following scenarios, we have created a custom master object with id "custommaster" and a custom sub-object with id "customsub".
Scenario 1: Custom Master Object with overrideAutoNumbering Set to 'true' (Auto-numbering disabled) The following XML code snippet is used in a XOG write file for adding a custom master object instance with autonumbering OFF.
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_customObjectInstance.xsd"> <Header action="write" externalSource="NIKU" objectType="customObjectInstance" version="13.2.0.472">
<!-- when you are overriding autonumbering, following header is optional as the default settings for 'overrideAutoNumbering' is anyways 'true' ->
<args name="overrideAutoNumbering" value="true"/> </Header>
<customObjectInstances objectCode="custommaster">
<!-- leave instanceCode as "" ->
<instance instanceCode="" objectCode="custommaster"> <CustomInformation>
<!-- when you are overriding autonumbering, you have to provide a code here ->


<ColumnValue name="code">manual</ColumnValue> <ColumnValue name="name">cm5</ColumnValue> <ColumnValue name="odf_period_end"/> <ColumnValue name="odf_period_start"/> <ColumnValue name="page_layout">odf.custommasterFrame</ColumnValue> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> <OBSAssocs complete="false"/> <Security> <UserSecurity rightCode="odf_cst_custommaster_edit" userName="admin"/> </Security> </instance> </customObjectInstances> </NikuDataBus>


Scenario 2: Custom Master Object with overrideAutoNumbering Set to 'false' ( Auto-numbering enabled) The following XML code snippet is used in a XOG write file for adding a custom master object instance (for Autonumbering enabled)
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_customObjectInstance.xsd"> <Header action="write" externalSource="NIKU" objectType="customObjectInstance" version="13.2.0.472">
<!-- when you are NOT overriding autonumbering, following header is mandatory as the default settings for 'overrideAutoNumbering' is 'true' ->
<args name="overrideAutoNumbering" value="false"/> </Header> <customObjectInstances objectCode="custommaster">
<!-- leave instanceCode as "" ->
<instance instanceCode="" objectCode="custommaster"> <CustomInformation>
<!-- when you are NOT overriding autonumbering, you have to provide -1 as code here and system will generate an autonumbered code ->
<ColumnValue name="code">-1</ColumnValue> <ColumnValue name="name">cm4</ColumnValue> <ColumnValue name="odf_period_end"/> <ColumnValue name="odf_period_start"/> <ColumnValue name="page_layout">odf.custommasterFrame</ColumnValue> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue>


</CustomInformation> <OBSAssocs complete="false"/> <Security> <UserSecurity rightCode="odf_cst_custommaster_edit" userName="admin"/> </Security> </instance> </customObjectInstances> </NikuDataBus>


Scenario 3: Custom sub object with overrideAutoNumbering true (Auto-numbering disabled) The following XML code snippet is used in a XOG write file for adding a custom sub-object instance (for Auto-numbering disabled)
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_customObjectInstance.xsd"> <Header action="write" externalSource="NIKU" objectType="customObjectInstance" version="13.2.0.472">
<!-- when you are overriding autonumbering, following header is optional as the default settings for 'overrideAutoNumbering' is 'true' ->
<args name="overrideAutoNumbering" value="true"/> </Header> <customObjectInstances objectCode="customsub"> <!-- leave instanceCode and parentInstanceCode as "" -- > <instance instanceCode="" objectCode="customsub" parentInstanceCode=""
parentObjectCode="custommaster"> <CustomInformation>
<!-- when you are overriding autonumbering, you have to provide a code here ->
<ColumnValue name="code">manual</ColumnValue> <ColumnValue name="name">cs15</ColumnValue> <ColumnValue name="odf_cncrt_parent_id">5000000</ColumnValue> <!-- this is the instanceId for the parent instance --> <ColumnValue name="odf_parent_id">5000000</ColumnValue> <!-- this is the instanceId for the parent instance -->
<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation>
<OBSAssocs complete="false"/> <Security> <UserSecurity rightCode="odf_cst_customsub_edit" userName="admin"/> </Security> </instance> </customObjectInstances>


</NikuDataBus>


Scenario 4: Custom Sub Object with overrideAutoNumbering false (Auto-numbering enabled) The following XML code snippet is used in a XOG write file xog write file for adding a custom sub-object instance Autonumbering enabled
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_customObjectInstance.xsd"> <Header action="write" externalSource="NIKU" objectType="customObjectInstance" version="13.2.0.472">
<!-- when you are NOT overriding autonumbering, following header is mandatory as the default settings for 'overrideAutoNumbering' is 'true' ->
<args name="overrideAutoNumbering" value="false"/> </Header> <customObjectInstances objectCode="customsub">
<!-- leave instanceCode and parentInstanceCode as "" ->
<instance instanceCode="" objectCode="customsub" parentInstanceCode="" parentObjectCode="custommaster">
<CustomInformation>
<!-- when you are NOT overriding autonumbering, you have to provide -1 as code here and system will generate an autonumbered code ->
<ColumnValue name="code">-1</ColumnValue> <ColumnValue name="name">cs14</ColumnValue> <ColumnValue name="odf_cncrt_parent_id">5000000</ColumnValue> <!-- this is the instanceId for the parent instance --> <ColumnValue name="odf_parent_id">5000000</ColumnValue> <!-- this is the instanceId for the parent instance --> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> <OBSAssocs complete="false"/> <Security> <UserSecurity rightCode="odf_cst_customsub_edit" userName="admin"/> </Security> </instance> </customObjectInstances>
</NikuDataBus>


Import and Export Custom Fiscal Time-Varying Attributes You can export or import custom fiscal time-varying attributes as part of the import or export of a standard or custom subobject with which the attributes are associated. When a subobject is exported, the XOG export file includes these elements: - Custom attributes and modified views for the subobject - Custom attributes and modified views for the master object - Referenced lookups If a subobject includes custom fiscal time-varying attributes, the master object export file includes these additional elements: - Fiscal entity - Fiscal time period - Department OBS associations
Import and Export UI Themes You can import and export UI themes through the XOG. The XOG client provides sample UI theme XML files. The import file for UI themes is cmn_ui_themes_write.xml. The default attribute on the UITheme element determines whether a UI theme that is being imported is the default theme for the system. If the default attribute is set to true, the theme becomes the system default theme. If you are importing multiple UI themes in one import file, only one UI theme is expected to have the default attribute set to true. If multiple themes in a single import have the default attribute set to true, the last theme processed with the attribute set to true becomes the default theme. Sample Import File cmn_UI_themes_write.xml This section of the cmn_ui_themes_write.xml shows the default attribute set to false. In this case, the UI theme that is being imported is not the default Classic PPM UI theme.
<?xml version="1.0" encoding="UTF-8"?> <!-- Copyright (c) 2011, CA Inc. All rights reserved. --> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/ nikuxog_uitheme.xsd">
<Header action="write" externalSource="NIKU" objectType="uitheme" version="13.0"/> <UIThemes>
<UITheme active="true" default="false" id="sample_ui_theme"> <nls description="A sample UI Theme" languageCode="en" name="Sample UI Theme"/> <css><![CDATA[
Include New and Delete Buttons When you are importing a new custom object, the New button and the Delete button are deselected. You cannot immediately create an instance of the object. To make the New and Delete buttons available immediately for the new object, include these two lines in the script:
<action code="odf.@objectCode@Create"/> <action code="odf.deleteObjectInstancesConfirm"/>
Example:
<list> ....
<action code="odf.testCreate"/> <action code="odf.deleteObjectInstancesConfirm"/>


.... </list>


Passing XDM Custom Fields
XDM configuration changes are automatically handled by the Object API. These rules apply:
- For the Name and Values fields, use those defined in the customFieldsMetadata.xml file. - For lookups, pass the lookup code and dates (in YYYY-MM-DD format). - For check box fields, pass 1 or 0. Example
<CustomInformation> <ColumnValue name="CEO_NAME">ceo2</ColumnValue> <ColumnValue name="DEFAULTWEBSITE">http://www1</ColumnValue> <ColumnValue name="NUM_OF_EMPLOYEES">100</ColumnValue> <ColumnValue name="OPPORTUNITY">1</ColumnValue>
</CustomInformation>

XOG Services: InvokeAction API
The InvokeAction API is a general-purpose area for XOG administrative actions that fall outside the categories of data import and export. No corresponding schema (XSD) exists for this API and accordingly there is no XSD validation.
InvokeAction API Root Element - Process. This action schedules integration processes or initiates them in real time. The Process element includes the following root elements: - code (Required) Identifies the process ID. Type: String - request (Optional) Identifies the root element of the process input document. Type: Any
Example: Process Request In this example, remedy_writeIncident is the process ID that is required to invoke the process action. A process may or may not include a request. An action can be invoked by specifying the process ID. This example includes a request.
<Process xmlns="http://www.niku.com/xog/InvokeAction">> <code>remedy_writeIncident</code> <request> <incidents> <incident assignedTo="jstewart" categoryCode="telcom" estimatedEffort="240" estimatedEffortUnit="MINUTES" externalId="tc421" impactCode="High" incidentCode="RMD-TC421" priorityCode="Medium" reportedBy="rcordry" resolutionDate="2005-03-03T12:30:00" sourceCode="REMEDY" startDate="2005-03-01T08:00:00" statusCode="Closed"


subject="Phone system down" typeCode="incident" urgencyCode="High">
<description> Tried making call, no dial tone.
</description> <notes/> <efforts enterOnce="true"> <effort quantity="3.5" quantityUnit="HOURS" resourceCode="jstewart" transactionDate="2005-03-03"/> </efforts> <contacts/>
</incident> </incidents> </request> </Process>


XOG Services: Query API
Use the Query API to execute Studio NSQL-based queries from the XOG. The Studio Query is referenced by its code. The response is formatted as record elements. It is often not sufficient to read data only as predefined objects. For example, full object instance data that includes dependencies may be too much detail. Or, you may need data from multiple objects or from database tables that have no defined objects.
NOTE The Query API requires a valid license for Studio.
- Query API Root Elements - The Query Filter - Example: Exporting Query Results to a Tab-Delimited Text File

Example: Studio Query code: sample.getresources NSQL:

SELECT

@SELECT:DIM:USER_DEF:IMPLIED:RESOURCE:R.FULL_NAME:RSRC@,

@SELECT:DIM_PROP:USER_DEF:IMPLIED:RESOURCE:MR.FULL_NAME:MGR@,

@SELECT:METRIC:USER_DEF:IMPLIED:COUNT(*):PROJECT_COUNT:AGG@

FROM

SRM_PROJECTS P,

SRM_RESOURCES R,

SRM_RESOURCES MR,

CMN_SEC_USERS U

WHERE P.CREATED_BY = U.ID

AND

U.ID = R.USER_ID

AND

R.MANAGER_ID = MR.USER_ID

AND

@FILTER@

GROUP BY R.FULL_NAME,

MR.FULL_NAME

HAVING @HAVING_FILTER@

Example: XML Query

<Query xmlns="http://www.niku.com/xog/Query">


<Code>sample.getresources</Code> </Query>
Example: Result
<QueryResult xmlns="http://www.niku.com/xog/Query"> <Code>sample.getresources</Code> <Records> <Record> <rsrc>Administrator, Niku</rsrc> <project_count>178</project_count> <manager>Administrator, Niku</manager> </Record> </Records>
</QueryResult>


Query API Root Elements These are the Query API root elements: - Code (Required) Identifies the NSQL unique identifier that is defined in Studio. Type: String - Filter (Optional) Identifies the NSQL filter columns that are defined in Studio. Type: User-defined
The Query Filter The WSDL for queries defines filter parameters in addition to the code identifier, allowing ad-hoc queries that are based on a Studio Query using the XOG. For every column that is selected in the query, you are given multiple filter possibilities.

Example: Exact Match
To filter on a specific value for a column, use the column name directly and pass the value in which you are interested. This example retrieves a single row for resource CorpApp Administrator. Any deviation in the rsrc value of 'Administrator, CorpApp' returns nothing.
Example
<Query xmlns="http://www.niku.com/xog/Query"> <Code>sample.getresources</Code> <Filter> <rsrc>Administrator, CorpApp</rsrc> </Filter>
</Query>

Example: Wildcard Query The wildcard filter behaves like any grid filter field. The filter automatically appends a wildcard asterisk (*) to the end of a value. You can also insert your own asterisk anywhere in the filter string, including at the beginning. This approach is not recommended when filtering large data sets, as performance is severely degraded.
The wildcard filter is available only on columns of type String.
Example: From the sample.getresources
<Query xmlns="http://www.niku.com/xog/Query"> <Code>sample.getresources</Code> <Filter> <rsrc_wildcard>Admin</rsrc_wildcard>


</Filter> </Query>
Example
<Query xmlns="http://www.niku.com/xog/Query"> <Code>sample.getresources</Code> <Filter> <rsrc_wildcard>Admin*CorpApp</rsrc_wildcard> </Filter>
</Query>


Capture Bounded and Unbounded Ranges The from and to filters perform a greater than or equal to and less than or equal to operation on a given value. Use these filters to capture a bounded range or separately for an unbounded range.
Example: From Filter This unbounded example returns all records with project_count greater than or equal to 1:
<Query xmlns="http://www.niku.com/xog/Query"> <Code>sample.getresources</Code> <Filter> <project_count_from>1</project_count_from> </Filter>
</Query>

Example: To Filter This bounded example returns all records with rsrc values that start with the letters A through E:
<Query xmlns="http://www.niku.com/xog/Query"> <Code>sample.getresources</Code> <Filter> <rsrc_from>A</rsrc_from> <rsrc_to>E</rsrc_to> </Filter>
</Query>
Example: Exporting Query Results to a Tab-Delimited Text File This example uses GEL to execute the NSQL query "xog_query_test", which is the default NSQL query. This example shows how to retrieve the query results and export them to a tab-delimited text file. For information about using GEL with the XOG, see GEL Scripting. Example
<gel:script xmlns:core="jelly:core" xmlns:xog="http://www.niku.com/xog" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:f="jelly:com.niku.union.gel.FileTagLibrary" xmlns:nikuq="http://www.niku.com/xog/Query"


xmlns:util="jelly:util">
<!-- Construct the Query API request for the NSQL query "xog_query_test" --> <gel:parse var="xoginput">
<Query xmlns="http://www.niku.com/xog/Query"> <Code>xog_query_test</Code>
</Query> </gel:parse>
<soap:invoke endpoint="http://localhost/niku/xog" var="xogresponse"> <soap:message> <soapenv:Envelope> <soapenv:Header> <Auth> <Username>admin</Username> <Password>niku2000</Password> </Auth> </soapenv:Header> <soapenv:Body> <gel:include select="$xoginput"/> </soapenv:Body> </soapenv:Envelope> </soap:message>
</soap:invoke>
<!-- Extract the sessionID so we may logout later --> <gel:set asString="true" select="$xogresponse/soapenv:Envelope/soapenv:Body/xog:SessionID/text()" var="sessionID"/> <gel:out>SessionID = ${sessionID}</gel:out>
<!-- Extract the records --> <gel:set select="$xogresponse/soapenv:Envelope/soapenv:Body/nikuq:QueryResult/nikuq:Records" var="records"/> <gel:set asString="true" select="$records" var="recordstext"/> <gel:out>${recordstext}</gel:out>
<!-- Create a tab-delimited file from the results --> <f:writeFile fileName="projectData.txt" delimiter="&#x9;" embedded="true"> <gel:forEach select="$records//nikuq:Record" var="xog_record">
<f:line> <gel:forEach select="$xog_record/*" var="xog_data">
<gel:set var="xog_data" select="$xog_data/text()" asString="true"/> <f:column value="${xog_data}"/> </gel:forEach> </f:line> </gel:forEach> </f:writeFile>
<!-- Now log out --> <soap:invoke endpoint="http://localhost/niku/xog" var="logout">
<soap:message> <soapenv:Envelope> <soapenv:Header> <Auth>


<xog:SessionID>${sessionID}</xog:SessionID> </Auth> </soapenv:Header> <soapenv:Body> <xog:Logout/> </soapenv:Body> </soapenv:Envelope> </soap:message> </soap:invoke>
</gel:script>


XOG Governor Node Limit
When you import or export many instances using the XOG, you can encounter out-of-memory or timeout exceptions. The Maximum XML Node Limit setting helps handle these issues. This limit specifies the number of XML nodes that can be imported or exported at any given time. Often called a XOG governor limit, the default value for the limit is 150,000 nodes.
TIP
Do not confuse this node limit with similar row limits such as the 50,000-row NSQL limit in a list view or grid portlet.
- XML Element and Attribute Nodes - XOG Read - XOG Write - XOG Governor Limit Benchmarks - Calculate the Node Limit for XOG Exports

XML Element and Attribute Nodes
A node is the sum of the XML elements and all their attributes. For example, the following fictional example shows XML code for project output. This example represents 22 nodes for 21 attributes plus the project element.
<Project active="true" allowAssignedTasksOnly="0" approved="true" approvedForBilling="1" assgnPool="0" billingCurrencyCode="USD" billingType="S" calculateFinancialMetrics="true" costType="OPERATING" investmentDefinedReinvestmentRate="0" investmentDefinedTotalCostOfCapital="0" laborExchageRateType="AVERAGE" lastUpdatedBy="admin" projectID="pitcProject001" setBudgetValuesEqualToPlannedValues="true" start="2013-08-01T08:00:00" status="1" syncInvestmentAndBudgetDates="true" template="false" trackMode="2" useSystemDefinedReinvestmentRate="true"


useSystemDefinedTotalCostOfCapital="true">


XOG Read
For a XOG read request, the server processes the instances until the node limit is reached. The response is sent back to the client in chunks using pagination. For the next set of instances, send a new read request to the server with the appropriate information using pagination.
After processing the instances, the number of processed instances is updated in the skip element of the XOG output. Before Release 13.3, the entire requested information was sent in a single response which resulted in out-of-memory or time-out exceptions.
The following example explains the pagination process. The read request is for 1000 project instances and the node limit is reached after processing the 24th instance. This sample code shows the XML output:
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd">
<Projects> <Project ...> .... </Project>
<XOGOutput> <Object type="project" /> <Status state="SUCCESS" /> <Skip value="24"/> <XOGTotalFilteredRecords value="267"/> <Statistics failureRecords="0" insertedRecords="0" totalNumberOfRecords="24" updatedRecords="0"/>
</XOGOutput>
The <Skip value="24"/> element in the XML signifies the number of instances that are processed in the request. To request the next set of instances, add the skip argument in the header of the XOG read request. In this example, 24 instances are processed. To request the next set, add the <args name="skip" value="24"/> argument to the header in the next read request as shown in this example:
<?xml version="1.0" encoding="UTF-8"?> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd">
<Header version="6.0.11" action="read" objectType="project" externalSource="NIKU"> <args name="skip" value="24"/>
</Header> <Query>
<Filter name="projectID" criteria="EQUALS">ank00_1*</Filter> </Query> </NikuDataBus>
NOTE If the <XOGOutput> element in the XML output does not contain the skip argument, this indicates that the server has processed all the requested instances.
The pagination process works differently for WSDL, GEL, and XOG.
- WSDL and GEL Add the <args name="skip" value="n"/> element to the header element in the next read request manually. This sample code shows the GEL script for pagination:
<gel:script xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary"


xmlns:file="jelly:com.niku.union.gel.FileTagLibrary" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sql="jelly:sql" xmlns:xog="http://www.niku.com/xog" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

<gel:parameter default="http://clrtstage02:80" var="XOGURL"/> <gel:parameter default="addsr02" var="XOGUsername"/> <gel:parameter default="admin" var="XOGPassword"/>

<!-- Log into XOG and get a session ID -->

<soap:invoke endpoint="${XOGURL}/niku/xog" var="auth">

<soap:message>

<soapenv:Envelope

xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"

xmlns:xog="http://www.niku.com/xog">

<soapenv:Header/>

<soapenv:Body>

<xog:Login>

<xog:Username>${XOGUsername}</xog:Username>

<xog:Password>${XOGPassword}</xog:Password>

</xog:Login>

</soapenv:Body>

</soapenv:Envelope>

</soap:message>

</soap:invoke>

<!-- Checking whether a sessionID is returned. If not, it means that Login was unsuccessful --> <gel:set asString="true" select="$auth/SOAP-ENV:Envelope/SOAP-ENV:Body/xog:SessionID/text()" var="sessionID"/> <core:choose>
<core:when test="${sessionID == null}"> <gel:out>Couldn't Log in. Check the username/password.</gel:out>
</core:when> <core:otherwise></core:otherwise> </core:choose>

<core:set var="skipValue" value="0"/>

<core:set var="inc" value="1"/>

<core:choose>

<core:while test="${skipValue != null}">

<!--Run XOG and attach an input file...alternatively the Body section can be the NikuDatabus section of an

input file-->

<soap:invoke endpoint="${XOGURL}/niku/xog" var="runresult">

<soap:message>

<soapenv:Envelope

xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"

xmlns:xog="http://www.niku.com/xog">

<soapenv:Header>

<xog:Auth>

<xog:SessionID>${sessionID}</xog:SessionID>

</xog:Auth>

</soapenv:Header>

<soapenv:Body>

<!--Paste your read XML here-->

</soapenv:Body>


</soapenv:Envelope> </soap:message> </soap:invoke>
<!-- Read the output and extract some information from it --> <gel:set asString="true" select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/Status/
@state" var="XOGoutcome"/> <core:switch on="${XOGoutcome}"> <core:case value="SUCCESS"> <gel:set asString="false" select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/
XOGTotalFilteredRecords/@value" var="XOGTotalFilteredRecords"/> <gel:set asString="false" select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/
XOGOutput/Statistics/@totalNumberOfRecords" var="totalNumberOfRecords"/> <core:choose>
<core:when test="${skipValue == 0}"> <gel:out>Total number of Instances = <gel:expr select="$XOGTotalFilteredRecords"/></gel:out> </core:when> <core:otherwise> </core:otherwise> </core:choose>
<gel:out>------------------</gel:out> <gel:out>Instances XOGed-out this request <gel:expr select="$totalNumberOfRecords"/></gel:out> <gel:set asString="false" select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/ XOGOutput/Skip" var="skip"/> <gel:set asString="false" select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/ XOGOutput/Skip/@value" var="skipToken"/> <core:set var="skipValue" value="${skipToken.getValue()}"/> <core:choose> <core:when test="${skipValue == null}"> <gel:out>Skip Token is null</gel:out> </core:when> <core:otherwise> <gel:out>Skip Token = <gel:expr select="$skip/@value"/></gel:out> </core:otherwise> </core:choose> </core:case> <core:case value="FAILURE"> <gel:set asString="false" select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/ Statistics" var="stats"/> <gel:out>XOG failed. Out of <gel:expr select="$stats/@totalNumberOfRecords"/> records, <gel:expr select="$stats/@failureRecords"/> failed.</gel:out> </core:case> </core:switch> <core:catch var="XOGoutcome"> <gel:serialize fileName="C:\GEL_TEST\testGel_${inc}.xml" var="${runresult}"/> </core:catch> <core:set var="inc" value="${inc+1}"/> <core:if test="${XOGoutcome != null}"> <gel:out>Caught Exception: ${XOGoutcome}</gel:out> </core:if> </core:while> <core:otherwise></core:otherwise> </core:choose>


<!-- Log out of the XOG -->

<soap:invoke endpoint="${XOGURL}/niku/xog" var="logoutresult">

<soap:message>

<soapenv:Envelope

xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"

xmlns:xog="http://www.niku.com/xog">

<soapenv:Header>

<xog:Auth>

<xog:SessionID>${sessionID}</xog:SessionID>

</xog:Auth>

</soapenv:Header>

<soapenv:Body>

<xog:Logout/>

</soapenv:Body>

</soapenv:Envelope>

</soap:message>

</soap:invoke>

</gel:script>

The GEL script version does not incorporate the skip value into the subsequent requests in the loop. A placeholder indicates where the read request goes. A variable holds this value, and that variable should have a gel:set applied to it. The variable updates or inserts the args value for skip on each iteration. Without it, the script continuously fetches the initial page of results over and over again in an endless loop.
- XOG client The XOG client handles the pagination automatically. The requested instances are processed in iterations internally and the output contains all the requested instances. This process eliminates adding the <skip> argument manually in the header element of the read request.

NOTE A progress bar displays the status of the XOG client.

If any instance in the read request exceeds the node limit, that instance is not processed. The following error message appears in the XOG output for that instance:

XOG-9059: The system cannot export this instance with the current configuration. Increase the 'Maximum XML Nodes' value in CSA and try again.

However, all the other instances are processed successfully. You can use the following methods to export the unprocessed instances:
- Change the Maximum XML Nodes limit. - Use filters so that the requested information does not exceed the node limit.
Additional Information
The output file is not indented. You can use any third-party plug-in to convert the output to an XML format.
The default session timeout is one hour. When the node limit is high and the internal XOG request is taking more than the Global Session Timeout set in CSA, this error appears:

XOG-9062: The requested data failed to export because the processing time exceeded the session timeout interval. Contact your administrator to update the XML Node Limit.

The node limit is not enabled for the following XOG categories:
- Company Class - Content Pack - Documents - Forms - Notifications - Portfolios - Process Notifications - Resource Class - Timesheets - Transaction Class - UI Theme - Vendor - WIP Class
As a result, you can encounter an out-of-memory exception when you export many instances.


XOG Write
When you import instances, the server processes 20 instances for each iteration. If the node limit is reached before the 20 instances are loaded, the server processes only the loaded instances for the current iteration. The remaining instances are considered automatically for the next iteration.
If you use SOAP and GEL, there is no change in the XOG write process. If the server goes down while processing the instances, the latest instances in the current iteration are not saved. However, all the instances in the earlier iterations are saved.
NOTE The progress bar does not display for the XOG client.
If the input XML content has any instance that exceeds the defined node limit, the XOG write does not process this instance. This message displays in the XML output:
XOG-9060: The system cannot import this instance with the current configuration. Increase the 'Maximum XML Nodes' value in the CSA and try again.
For all the XOG categories (except the content pack) that do not have the Governor Limit enabled, if the input XML content exceeds the defined node limit, then the input is not processed. This message displays in the XML output:
XOG-9061: The system cannot import the contents of the file with the current configuration. Either increase the 'Maximum XML Nodes' value in the CSA or reduce the file size and try again.

XOG Governor Limit Benchmarks
Use the recommended node limits from the following table. This table bases values on the percentage of the JVM heap space that you want to allocate for XOG processing.

Used JavaHeap Space
192 256 512 1024

Custom Objects 4,800
42,000 160,000 375,000

XML Node Counts

Cost Plans

Users


36,000

56,000

190,000

247,000

700,000

609,600

1,360,000

RecommendedNode

Projects

Limit

22,000

4,800

128,000

42,000

780,000

160,000

2,000,000

375,000


620,000

960,000


620,000


860,000

1,300,000


860,000

For example, an instance is running on the JVM whose total heap space is 2 GB. The administrator wants to allocate 10 percent of the total heap space for XOG processing. In this case, the JVM heap space is 204 (10 percent of 2048). Select the nearest heap space value from the table, which is 192. For 192 MB JVM heap space, the recommended node limit is 4800.

Calculate the Node Limit for XOG Exports
Use the following steps to count the number of XML nodes in an XOG Import file:
1. Connect to the Clarity server. 2. Prepare large XML files and place them in a known location on the server. 3. Navigate to the \xog-unzipped\bin directory under the Clarity installation folder. 4. Run the command:
xog -analyze <Your file path>
Example: Review the output to see the node count:
C:\clarity\xog-unzipped\bin>xog -analyze C:\TestFiles\Test_status.xml
Output:

=======File Analysis========= File : C:\TestFiles\Test_status.xml Node Count: 1491934

Configure Logging and JVM Parameters to Monitor XOG Memory Usage
1. Update the logger.xml file with the following category and appender.
<category additivity="false" name="xog.usage.memory"> <priority value="debug"/> <appender-ref ref="XOGMEMORY"/>
</category> <appender class="org.apache.log4j.RollingFileAppender" name="XOGMEMORY">
<param name="File" value="../logs/xog-usage-memory.xml"/> <param name="Append" value="true"/> <param name="MaxFileSize" value="5MB"/> <param name="MaxBackupIndex" value="3"/> <layout class="com.niku.union.log.NikuLayout">
<param name="ConversionPattern" value="%m\r\n"/> </layout> </appender>
2. Update jvmParamters in properties.xml as shown in this example:
Xms64m -Xmx1536m -XX:MaxPermSize=192m -XX:-UseGCOverheadLimit -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.port=14010 -Dsun.lang.ClassLoader.allowArraySyntax=true -XX:+HeapDumpOnOutOfMemoryError


-XX:HeapDumpPath=C:\ca\clarity\trunk\build\install\logs -Xloggc:C:\ca\clarity\trunk\build\install\logs\xog_gc.log -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintHeapAtGC
NOTE Change the HeapDumpPath & loggc directory location accordingly. 3. Restart the application and perform garbage collection from Jconsole before you start the XOG request. NOTE Back up all the log files for each combination. 4. Verify that the app-xog-usage-memory.xml and xog_gc.log is created in the log folder of the Classic PPM installation directory. 5. Check the node limits for the different JVM heap sizes. This example shows the logging information that is related to benchmarking in the app-xog-usage-memory.xml file:
Starting Xog Request..... XML Node count : 0 Initial Used memory : 480 MB ***************************************************** ----- Loading the new XQLObjectSet ------Before start doing the read:252 MB ----- Loaded the new XQLObjectSet ------Query: objectInstances Page : 0 : Records fetched: 1000 : Total records: 126534 The used memory after loading set and running GC: 250 MB ----- End of pre-processing ----------- XML Node Count after processing this paged records = 35005 And used memory = 372 MB
6. When you encounter an out-of-memory exception, capture the XML Node Count ( _xogOutputCnt in the UtilityThreadLocal class) from the heap dump using a Java profiler.
XOG Object Reference
You can process the following data objects or transactions using the XOG: - Base XOG Objects - Stock XOG Object Summary - Enable a Custom Object or Attribute for Data Warehouse - Nested OBS Units in XOG Files - XOG Custom Content Objects - Custom Investment Types
Click a XOG object in the table of contents to the left and read a description and other important information about each XOG object.


Base XOG Objects The following table describes the base XOG objects:


Object or Transaction

Process

Yes

In (Write)

Content Pack

Yes

customObjectInstance Yes

group

Yes

User

Yes

Location

Yes

Resource

Yes

Out (Read) Yes Yes
Yes Yes Yes Yes Yes

Scope

Master System
- Multiple actions

Classic PPM
- Step-level escalations
- Multiple objects
- Sub-processes

The transactions include the following items:
- Read and write the
filter portlet type with its fields.
- Read and write
page and tab level metadata concerning filter portlet instance properties.
- Read and write
page and tab level metadata concerning grid or graph portlet filter mappings.

Classic PPM

Custom object instance None

Groups

None
- Basic User Properties Enterprise systems
- OBS association
fields
- Location properties
- Association with
departments

Classic PPM
- Basic and non-labor Enterprise systems
resources properties
- Basic management
properties
- Financial properties - Resource contact
properties

Stock XOG Object Summary The following table describes the product stock XOG object summary:

Object or Transaction

Benefit Plan

Yes

Budget Plan

Yes

In (Write)

Out (Read) Yes Yes

Scope Financial benefit plans Financial budget plans

Master System Accounting systems Accounting systems


Object or Transaction

Capacity Planning

Yes

Scenario

In (Write)

Cost plan

Yes

Department

Yes

Entity

Yes

Financial Transaction

Yes

General Ledger Account Yes

General Ledger

Yes

Allocation Rule

General Ledger Period General Ledger Transaction Inbound Transaction Investment

Yes No
Yes None

Invoices

Yes (status)

Non-Project investment Yes

Outbound Transaction No

Portfolio

Yes

Out (Read) Yes
Yes Yes Yes Yes Yes Yes
No Yes Yes None
Yes Yes
Yes
No


Scope

Master System

Public or private

Enterprise systems

scenarios

Scenarios that contain

an arbitrary number

of project members or

expression members with

an arbitrary number of

terms

Financial cost plans

Accounting systems

Department properties Classic PPM

Basic entity properties Classic PPM

Financial Transactions Accounting systems

GL Accounts
- Standard GL
allocation rules and credit rules
- Investment-specific
GL allocation debit rules

Accounting systems Accounting systems

GL periods

Enterprise

GL transactions

Accounting systems

Financial transactions None

Import and export of investment objects (for example, asset, application, project, and so on).

Classic PPM

Invoices

Enterprise systems

Includes non-project

None

investment objects

such as assets, applications, products, and so on.

Exports financial transactions from other systems

None

Import and export portfolios

None


Object or Transaction

Project

Yes

In (Write)

Requisition

Yes

Role

Yes

Skill

Yes

Type Code

Yes

Out (Read) Yes
Yes Yes Yes Yes

Scope

Master System

Project schema:
- Export project data
including tasks, assignments, custom fields, management and financial properties, OBS association fields
- Import basic
properties, tasks, assignments, management properties, financial properties, custom fields, and OBS association fields
- Participants import

ERP system Timesheet system Oracle Financials Accounting system

Import/export requisitions None
- Basic role information Enterprise systems - Non-labor roles

Skills hierarchy

None

Typecodes

None

Enable a Custom Object or Attribute for Data Warehouse
Using XOG, you can enable or disable only a custom object or attribute for the Data Warehouse. The Boolean dwEnabled attribute is added for both the custom object and custom attribute to include and exclude them from the Data Warehouse. To enable the object or attribute for the Data Warehouse, set the dwEnabled attribute to true. To disable the object or attribute, set the dwEnabled attribute to false.

Example
<object code="customobject" dwEnabled="true" ... > <customAttribute code="customattribute" dwEnabled="true"...>
The following rules apply when you enable or disable an object or an attribute for the data warehouse using XOG. You can:
- Enable or disable custom objects or custom attributes. - Enable a custom attribute only when its associated object is enabled. - Enable a custom subobject only when its parent or master object is enabled. - Disable a master object only when all its subobjects are disabled.
Note: To disable a master object, disable all its subobjects by marking them as dwEnabled="false" in the same XOG file.
When these rules are not met, warning messages appear in the XOG output file.


Nested OBS Units in XOG Files Pay special attention when performing OBS import operations using the XOG. If you are changing the level of one or more OBS units, maintain all the existing child units in your XML. If you skip a unit, the depth for the missed unit can change in unexpected ways. Create and move OBS units together. Incomplete XML structure for the root unit you move can also move child units. Example: You specify the following OBS structure for unit 1:
/unit1 .. /unit11 .... /unit111 /unit2 .. /unit22 /unit3 .. /unit33 .... /unit333 ...... /unit3333
You want to move unit3 one level lower by making it a child of unit2. In the same operation, you want to add a child unit 3333x under unit333. You specify the following XML for this XOG import:
/unit2 .. /unit22 .. /unit3 .... /unit33 ...... /unit333 ........ /unit3333 ........ /unit3333x
You might exclude /unit3333 because it is not changing. Why include it in my XML if it is not changing? If you forget to include a child unit, your import indirectly changes. For example, without /unit3333, the original level of / unit3333 changes because you changed the level of /unit3. To avoid unexpected results, include the full unit hierarchy in the XML file.
XOG Custom Content Objects The XOG CustomObjectInstances service is an entry point to enable XOG communication with instances of custom objects. Instances represent data in custom objects, not the definition of the objects. A collection of content objects (portlets, reports, queries, and pages) enhance project and portfolio management. This content includes sample data that is designed for test environments. The following content objects are included with Classic PPM:
Business Alignment Use the CustomObjectInstances base XOG object to view inbound and outbound Business Alignment instances. Business Alignment instances are created for existing projects and proposals. Schema Name The following schema files are part of this XOG object:
- A CustomObjectInstances read request requires the namespace nikuxog_read.xsd and then the <CustomObjectInstanceQuery> element.
- The write CustomObjectInstances request services are defined by the nikuxog_customObjectInstance.xsd schema. Read and Write XML Files The following XML files are included: - custom_object_instances_read.xml. Use this file to export business alignment instances from Classic PPM. - custom_object_instances_write.xml. Use this file to import business alignment instances that were previously exported
from Classic PPM. Prerequisites Before you use this XOG object, the referred instances should exist in Classic PPM. Business Rules and Processing The following business rules and processing apply to this XOG object: - Project or proposal parent instance must exist. - Existing business alignment instances are not deleted. Read Filters The CustomObjectInstanceQuery element allows you to filter on instances of one or more custom objects using the following filter attributes: - objectCode: Refers to the custom object ID as defined in Studio. - instanceCode: Refers to the custom object instance ID as defined in Studio. Error Handling The following errors can be thrown: - Project does not exist in the system - Invalid parent object instance project code for object project while importing
instance instance code for object cbi_biz_alignment. - Invalid Lookup value
Corporate Objectives Use the CustomObjectInstances base XOG object to view inbound and outbound Corporate Objectives instances. Schema Name The following schema files are part of this XOG object: - A CustomObjectInstances read request requires the namespace nikuxog_read.xsd and then the
<CustomObjectInstanceQuery> element. - The write CustomObjectInstances request services are defined by the nikuxog_customObjectInstance.xsd schema. Read and Write XML Files The following XML files are included: - custom_object_instances_read.xml. Use this file to export corporate objectives instances from Classic PPM. - custom_object_instances_write.xml. Use this file to import corporate objectives instances that were previously
exported from Classic PPM. Prerequisites None. Business Rules and Processing

The following business rules and processing apply to this XOG object: - Existing corporate objectives instances are not deleted. Read Filters The CustomObjectInstanceQuery element allows you to filter on instances of one or more custom objects using the following filter attributes: - objectCode: Refers to the custom object ID as defined in Studio. The object id is cbi_corp_objectives. - instanceCode: Refers to the custom object instance ID as defined in Studio. Error Handling The following error can be thrown: - Invalid Lookup value
Documents Use the CustomObjectInstances base XOG object to view inbound and outbound documents instances. Documents instances are created for existing projects and proposals. Schema Name The following schema files are part of this XOG object: - A CustomObjectInstances read request requires the namespace nikuxog_read.xsd and then the
<CustomObjectInstanceQuery> element. - The write CustomObjectInstances request services are defined by the nikuxog_customObjectInstance.xsd schema. Read and Write XML Files The following XML files are included: - custom_object_instances_read.xml. Use this file to export documents instances from Classic PPM. - custom_object_instances_write.xml. Use this file to import documents instances previously exported from Classic
PPM. Prerequisites Before you use this XOG object, the referred instances should exist in Classic PPM. Business Rules and Processing The following business rules and processing apply to this XOG object: - Project or proposal parent instance must exist. - Existing document instances are not deleted. Read Filters The CustomObjectInstanceQuery element allows you to filter on instances of one or more custom objects using the following filter attributes: - objectCode: Refers to the custom object ID as defined in Studio. - instanceCode: Refers to the custom object instance ID as defined in Studio. Error Handling The following errors can be thrown:
- Project does not exist in the system - Invalid parent object instance project code for object project while importing instance instance code for object cbi_documents.
- Invalid Lookup value
Status Updates Use the CustomObjectInstances base XOG object to view inbound and outbound Status Update instances. Status Updates instances are created for existing projects and proposals. Schema Name The following schema files are part of this XOG object: - A CustomObjectInstances read request requires the namespace nikuxog_read.xsd and then the
<CustomObjectInstanceQuery> element. - The write CustomObjectInstances request services are defined by the nikuxog_customObjectInstance.xsd schema. Read and Write XML Files The following XML files are included: - custom_object_instances_read.xml. Use this file to export status updates instances from Classic PPM. - custom_object_instances_write.xml Use this file to import status updates instances that were previously exported from
Classic PPM. Prerequisites Before you use this XOG object, the referred instances should exist in Classic PPM. Business Rules and Processing The following business rules and processing apply to this XOG object: - Project or proposal parent instance must exist. - Existing status updates instances are not deleted. Read Filters The CustomObjectInstanceQuery element allows you to filter on instances of one or more custom objects using the following filter attributes: - objectCode: Refers to the custom object ID as defined in Studio. - instanceCode: Refers to the custom object instance ID as defined in Studio. Error Handling The following errors can be thrown: - Project does not exist in the system - Invalid parent object instance project code for object project while importing
instance instance code for object cbi_status_report. - Invalid Lookup value
Custom Investment Types Clarity 15.5 introduced support for custom investment types; however, no XOG support was available for the data for any instances of an investment type. The application did not disable the ability to import or export Studio views through XOG; however, the application disabled the ability to display views in Classic PPM and configure views in Studio for new investment types. Therefore, XOG import and export of views has no impact on investment type functionality.

In 15.5.1, you can create new investment types through XOG and view the new Include in Roadmaps settings (selected by default) on the object properties page. The Include in Roadmaps attribute is available only for custom investment extension objects. If the upgrade is from 15.5.0 to 15.6.0: It comes through 15.5.0 to 15.5.1 and then 15.5.1 to 15.6.0 so the behavior is sameIf the upgrade is from 15.5.1 to 15.6.0: the 15.5.1 version data already has INCLUDE_IN_ROADMAPS. It could have been populated either by the 15.5.0 to 15.5.1 upgrade process or in 15.5.1 itself. So 15.5.1 to 15.6.0 upgrade does not need to do any defaulting for this column anymore.
NOTE When you upgrade from 15.5.0 to 15.5.1, then all the Custom Investment Objects are moved to the upgraded version i.e. 15.5.1. By default, 'Include In Roadmaps' option is unchecked and enabled is set to "0". If you XOG out from previous version and XOG in a custom investment object then, this capability is not added by default ('Include In Roadmaps' option is unchecked).
XOG: Application and Asset
Use the application or asset XOG objects to view inbound and outbound application or asset object instances. Schema Name nikuxog_application.xsd nikuxog_asset.xsd Read and Write XML Files The following XML files are included: - inv_applications_read.xml file. Use this file to export application object instances from Classic PPM. - inv_applications_write.xml. Use this file to import application object instances that were previously exported
from Classic PPM. - inv_assets_read.xml. Use this file to export asset object instances from Classic PPM. - inv_assets_write.xml. Use this file to import asset object instances that were previously exported from Classic PPM. Prerequisites The prerequisites (if any) are the same as that of other non-project investment objects (NPIO). Business Rules and Processing The business rules and processing are the same as that of other NPIOs. Read Filters The read filters are the same as that of other NPIOs. Error Handling The error handling is the same as that of other NPIOs.
TIP New disableTSVUpdate Attribute in XOG Import Files for Projects and Investments In releases before 15.6, a XOG import (write) file, specifically for a project or non-project investment that included the optional openForTimeEntry attribute and associated resources who were also being allocated to a team (a special type of resource) through the same XOG import file, would cycle through all the assignments in the investment. This behavior could result in performance issues, especially during attempts to import large numbers of resources (for example, more than 10,000).
- When adding a resource to a team for an investment in the new or Classic PPM user interface, the application appends the ETC or actuals to the previously-generated slice curve.
- When adding a resource through the XOG, the existing time-scaled value (TSV) curves are unknown and cannot be accessed; instead, the XOG import causes the application to regenerate all TSV curves for all assignments in the investment.
When you upgrade to Clarity 15.6 or higher, you can improve XOG performance by including the new disableTSVUpdate XOG attribute: - If set to true, the XOG import does not attempt to process the aggregated TSV values; instead,
administrators would run the Investment Allocation job to update the aggregated totals. - If the attribute is set to false or excluded from the import file, the functionality remains the same as the
previous release.
Example File: The following file represents a XOG import (write) example for an application and includes the new disableTSVUpdate attribute for 15.6 and newer releases. Remove that attribute before attempting to use this file with previous releases.
Example
XOG: Benefit Plan
Use the benefit plan XOG object to view inbound and outbound financial benefit plans. Benefit plans are created for existing investments.
Schema Name nikuxog_benefitPlan.xsd
Read and Write XML Files The following XML files are included: - benefitPlan_read.xml. Use this file to export financial benefit plans from Classic PPM. - benefitPlan_write.xml. Use this file to import financial benefit plans that were previously exported from Classic PPM. Prerequisites Before using this XOG object, verify that the following objects exist in Classic PPM: - Investments - Entity - Time periods Business Rules and Processing The following business rules and processing apply to this XOG object: - A Benefit Plan object is created by setting up the benefit plan default properties. - Plan details (line items) are added to the benefit plan. - Existing plan detail records are not deleted. Read Filters The following explicit read filters are used: - code: The code for the benefit plan. - name: The name of the benefit plan. - investmentCode: The investment code with which the plan is associated. Error Handling


The following errors can be thrown:
- You must have plan XOG access rights to perform this action. - Plan code is required. - Investment code is missing or invalid. - Period type cannot be changed once defined. - Investment must be associated with an entity before setting up financial plans. - Period date is missing or invalid. - Finish time period is invalid. - Start time period is invalid. - Cannot modify plan periods prior to the freeze date. - Valid fiscal period does not exist for start and end dates for plan detail.
- BenefitPlan Schema Tag - Description Schema Tag - Detail Schema Tag - Segment Schema Tag


BenefitPlan Schema Tag
The BenefitPlan tag is part of the schema mapping for the benefit plan XOG object. It has the following attributes:
- Code: Required. Defines the unique code of the benefit plan. Table and Column: CODE Type: String - FinishPeriod: Required. Defines the finish time period name. Table and Column: END_PERIOD_ID Type: String - Investment Code: Required. Defines the Investment code. Table and Column: OBJECT_ID Type: String - Investment Type: Required. Defines the investment type. Table and Column: OBJECT_CODE Type: String - Name: Required. Defines the benefit plan name. Table and Column: NAME Type: String - Period Type: Defines the time period type (for example, monthly). Table and Column: PERIOD_TYPE_CODE Type:
String - Revision: Used only in XOG read result. Represents the revision of the budget plan. Table and Column: REVISION
Type: Integer - StartPeriod: Required. Defines the start time period name. Table and Column: START_PERIOD_ID Type: String
Description Schema Tag
This schema tag is part of the schema mapping for the Benefit Plan XOG object. This schema tag is a text node.
The following attribute is included in the schema tag:
- Description Defines the benefit plan description. Table and Column: description Type: String
Detail Schema Tag
The detail tag is part of the schema mapping for the benefit plan XOG object. This tag defines a benefit plan detail row and is composed primarily of schema tags.
The Detail schema tag includes the following schema tags
- Benefit: Defines the benefit for the specific time period segments. Table and Column: BENEFIT
- ActualBenefit: Defines the actual benefit for the specific time period segments.


Table and Column: ACTUAL_BENEFIT - Custom Information: Defines the field names for the custom information.
The Detail schema tag includes the following attribute:
- detailName: Required. Defines the name of the benefit plan detail row. Table and Column: DETAIL Type: String


Segment Schema Tag
This tag is part of the schema mapping for the Benefit Plan XOG object. The Benefit and Actual Benefit tags can include one or more segments. This tag has the following attributes:
- start Defines the start period for the benefit or actual benefit. Type: String
- finish Defines the end period for the benefit or actual benefit. Type: String
- value Defines the value for the benefit or actual benefit. Type: String

XOG: Budget Plan
Use the budget plan XOG object to view inbound and outbound budget plans. A budget plan is created for an existing investment. The structure of a budget plan must meet the following criteria:
- When the forceReplace value is true, the budget plan must match the associated source cost plan. - When the Replace value is false, the budget plan must match the associated source cost plan and the latest approved
budget. If there is no latest approved budget, the structure must match the current cost plan of record.
Schema Name
nikuxog_budgetPlan.xsd
Read and Write XML Files
The following XML files are included:
- budgetPlan_read.xml. Use this file to export budget plans from Classic PPM. - budgetPlan_write.xml. Use this file to import budget plans that were previously exported from Classic PPM.
Prerequisites
Before you use this XOG object, verify that the following objects exist in Classic PPM:
- Investments - Entity - Time periods - Details that are used in the plan
Business Rules and Processing
The following business rules and processing apply to this XOG object:
- A budget plan uses the Cost Plan object internally. - The budget plan structure must match the cost plan of record structure and potentially the latest approved budget plan
structure, depending on the value of the forceReplace attribute. - Cost plan details (line items) are added to the budget plan. - Existing plan detail records are not deleted.
Read Filters
The following explicit read filters are used:
- code. The code of the budget plan. - name. The name of the budget plan. - investmentCode. The investment code with which the plan is associated.
Error Handling
The following error messages can be thrown:
- You must have Budget Plan - XOG Access Rights to perform this action. - Plan code is required. - Grouping attribute is missing or invalid. - Investment code is missing or invalid. - Period type cannot be changed once defined. - Grouping attributes cannot be changed once defined. - Investment must be associated with an entity before setting up financial plans. - Benefit plan ID is missing or invalid. - Period date is missing or invalid. - Grouping attributes in plan details do not match plan grouping attributes. - GL account is missing or invalid. - Missing or invalid value for grouping attribute. - Finish time period is invalid. - Start time period is invalid. - Grouping attributes do not match locked plan structure for associated entity. - Cannot modify plan periods prior to the freeze date. - Valid fiscal period does not exist for start and end dates for plan detail. - Submit for Approval requires a cost plan of record. - A submitted budget already exists. - You cannot submit a plan for approval whose total cost is zero. - The structure of the existing budget and the cost plan of record do not match.
Schema Mapping
Mappings for the following schema tag names are provided.
- BudgetPlan Schema Tag - Description Schema Tag - Grouping Attributes Schema Tag - Detail Schema Tag - Segment Schema Tag
BudgetPlan Schema Tag
The budgetPlan tag is part of the schema mapping for the Budget Plan XOG object. This tag has the following attributes:
- benefitPlanCode: Defines the ID of the benefit plan that is associated with the budget plan. Table and Column: BENEFIT_PLAN_ID Type: String
- code: Required. Defines the unique code of the cost plan. Table and Column: CODE Type: String
- finishPeriod: Required. Defines the finish time period name. Table and Column: END_PERIOD_ID Type: String
- forceReplace: Required. Specifies whether the existing budget structure and period types can be different from the latest approved budget plan. XOG out always uses the value of True. Field: forceReplace Type: Boolean Possible Values: True, False
- investmentCode: Required. Defines the Investment code Table and Column: OBJECT_ID Type: String
- investmentType: Defines the investment type. This attribute is used only in the XOG read result. Type: String
- name: Defines the budget plan name Table and Column: NAME Type: String
- revision: Used only in XOG read results. Represents the revision of the budget plan. Field Name: REVISION Type: Integer
- periodType: Defines the time period type. Field Name: PERIOD_TYPE_CODE Type: String
- sourceCostPlanCode: Defines the ID of the source cost plan for the submitted budget. Table and Column: SOURCE_COST_PLAN_ID Type: String
- startPeriod: Required. Defines the start time period name. Field Name: START_PERIOD_ID Type: String
- status: Defines the status of the plan. Possible Values: Submitted, Approved, Rejected. Table and Column: STATUS_CODE Type: String
Description Schema Tag
This schema tag is part of the schema mapping for the Budget Plan XOG object. This is a text node. The schema tag includes the following attribute.
- Description Defines the Budget Plan description. Table and Column: description Type: String

Grouping Attributes Schema Tag
This tag is part of the schema mapping for the Budget Plan XOG object. This tag is used to define grouping attributes for a budget plan. The grouping attributes for a budget plan must match the grouping attributes of the cost plan of record for the investment.
- Grouping Attribute: Defines a grouping of attributes for a budget plan. Possible Values: charge_code_id role_id resource_id department_id location_id transaction_class_id resource_class_id input_type_code_id cost_type_id lov1_id lov2_id Table and Column: The value is stored in ODF_MULTI_VALUED_ATTRIBUTES table. Type: String
Detail Schema Tag
This tag is part of the schema mapping for the Budget Plan XOG object. This tag defines a budget plan detail row and is composed primarily of schema tags.
NOTE The Detail schema tag also has two attributes: glAccountMain and glAccountSub. These attributes define the GL Account that is associated with the Detail schema tag. The attributes map to the GL_ACCOUNT_ID column.
The Detail schema tag includes the following tags:
- Cost: Defines the cost for specific time period segments. Table and Column: COST
- Units: Defines the quantity for a specific time period segment. Table and Column:UNITS
- Revenue: Defines the revenue for a specific time period segment. Table and Column: REVENUE
- Grouping Attributes: Defines the grouping attribute codes and values for the grouping attributes selected for the cost plan. Each grouping attribute represents a code and value pair for an attribute. Table and Column: The value is stored in the column corresponding to the grouping attribute code. For example, location_id, charge_code_id. Type: String
- Custom Information: Defines the field names for the custom information.
Segment Schema Tag
This tag is part of the schema mapping for the Budget Plan XOG object. The Unit, Cost, and Revenue schema tags will include one or more Segment schema tags. This tag has the following attributes:
- start: Defines the start period for the unit, cost, or revenue.


Type: String - finish: Defines the end period for the unit, cost, or revenue.
Type: String - value: Defines the value for the unit, cost, or revenue.
Type: String


XOG: Capacity Planning Scenario
Use the Capacity Planning Scenario XOG object to view inbound and outbound capacity planning scenario attributes. Scenarios are defined for inbound (write) and outbound (read) processing.
Schema Name
nikuxog_capplanScenario.xsd
Read and Write XML Files
The following XML files are included:
- caplan_scenarios_read.xml. Use this file to export capacity planning scenarios from Classic PPM. - caplan_scenarios_write.xml. Use this file to import capacity planning scenarios that were previously exported from
Classic PPM.
Prerequisites
The following conditions must be met before importing capacity planning scenarios:
- You must create the scenario. - Some of the fields that a scenario can include are objects that must already exist in Classic PPM to be imported.
These include projects that are identified by SRM_PROJECTS.UNIQUE_NAME. - If Classic PPM is built using XOG imports, charge codes and projects must be imported before importing capacity
planning scenarios. - The maximum number of OBS levels you can XOG is 10.
Read Filters
The XOG processes outbound capacity planning schemas are based on the following field:
- ownerID The ID of a valid user (CMN_SEC_USERS.ID).
Error Handling
The following fields are written to the Success and Error files when the XOG process generates an error or warning:
- ID. For all errors, the scenario ID is posted to the Success and Error files. - Name. For all errors, the scenario name is posted to the Success and Error files.
Schema Mappings
Mappings for the following schema tag names are provided.
- Scenario Schema Tag - Segment Schema Tag

Scenario Schema Tag
This tag is part of the schema mapping for the capacity planning scenario XOG object and is composed of the Member element.
The Scenario schema tag has the following attributes:
- name: Required. Defines the scenario name. This does not have to be unique. Table and Column: CAP_SCENARIOS.NAME Type: String
- ownerUserName: Required. Defines the user who owns the scenario. The user_id is found in the CMN_SEC_USERS table. Table and Column: CAP_SCENARIOS.USER_ID Type: Number
- description: Describes the scenario. Table and Column: CAP_SCENARIOS.DESCRIPTION Type: String
- budgetBenefit: Contains the scenario (that is, what-if) value for benefit amount. Table and Column: CAP_SCENARIOS.BDGT_CST_TOTAL Type: Number
- budgetCost: Contains the scenario (that is, what-if) amount for budget cost. Table and Column: CAP_SCENARIOS.BDGT_REV_TOTAL Type: Number
- isPublic: Currently not used. Table and Column: :CAP_SCENARIOS.IS_PUBLIC Type: Number
Member Element
The Member is the sub-element of the Scenario schema tag. It is composed of the following elements:
- Expression. A power filter expression that determines which investments to include. - Investment. A specific instance of an investment to include in the scenario.
The member element has the following attributes:
- investmentType: Required. Defines the type of investment. Table and Column: CAP_SCENARIO_MEMBERS.MEMBER_TYPE Type: String
- isExcluded: Required. Indicates if the member is excluded or not considered in this scenario. Values: - 1. True - 0. False Table and Column: CAP_SCENARIO_MEMBERS.IS_EXCLUDED Type: Boolean.
- isActive: Required. Indicates if the member is included in the scenario or hidden. Values: - 1. True - 0. False Table and Column: CAP_SCENARIO_MEMBERS.IS_ACTIVE Type: Boolean
- isApproved: Required. Indicates if the member is considered approved in this scenario. Values: - 1. True - 0. False Table and Column: CAP_SCENARIO_MEMBERS.IS_APPROVED

Type: Boolean - priority: Required. Defines the priority.
Values: 0-36, where: - 0. Highest priority - 36. Lowest priority Table and Column: CAP_SCENARIO_MEMBERS.PRIORITY Type: Integer - lastSynchDate: Required. Defines the last time that an expression was synchronized against the pool of available investments. Table and Column: CAP_SCENARIO_MEMBERS.LAST_SYNC_DATE Type: Date
Expression Element:
This is the sub-element of the Member element. The Expression element has the following attribute:
- Expression: Required. Defines the text view of the ODF-based power filter. Table and Column: ODF_FILTER_EXPRESSIONS.EXPRESSION Type: String
Investment Element:
This is the sub-element of the Member element. The Investment element is composed of the following elements:
- Resources. A list of resources that are allocated to the investment. - Tasks. A list of tasks and assignments for the investment.
The Investment element has the following attributes:
- start: Defines the start date for the investment. Table and Column: CAP_SCENARIO_MEMBERS.START_DATE Type: Date
- finish: The finish date for the investment. Table and Column: CAP_SCENARIO_MEMBERS.FINISH_DATE Type: Date
- investmentID: Required. Defines the criteria for specifying the investment.
NOTE The OBJECT_ID contains the actual key for the investment.
Table and Column: CAP_SCENARIO_MEMBERS.OBJECT_ID Type: Number
Resource Element:
This is a sub-element of the Investment element. Resource is composed of the AllocCurve (Segment) element which is a time-scaled value.
The Resource element has the following attributes:
- bookingStatus: Required. The booking status of the resource (hard, soft, or mixed). Table and Column: CAP_SCENARIO_TEAM.PRBOOKING Type: Number
- defaultAllocation: Required. Defines the repeating segments that represent a resource's allocation to an investment (that is, start, finish, and allocation percentage) stored in the allocation curve. Table and Column: CAP_SCENARIO_TEAM.PRALLOCCURVE


Type: Number - projectRoleID: Required. Defines the role ID or key.
Table and Column: CAP_SCENARIO_TEAM.PRROLEID Type: Number - resourceID: Required. Defines the resource ID or key. Table and Column: CAP_SCENARIO_TEAM.PRRESOURCEID Type: Number


Segment Schema Tag
This tag is part of the schema mapping for the capacity planning scenario XOG object. Segment is also known as the Time Scale Value.
The Segment schema tag has the following attributes:
- finish: Required. Stored as BLOB. Table and Column: PRALLOCCURVE Type: Date
- start: Required. Stored as BLOB. Table and Column: PRALLOCCURVE Type: Date
- sum: Required. Stored as BLOB. Table and Column: PRALLOCCURVE Type: Float

Task Element
Task is composed of the Assignments (TaskLabor) element, a list of the resources that are assigned to the task.
The Task element has the following attributes:
- duration: Defines the duration of the task in the scenario. Table and Column: CAP_SCENARIO_TASKS.DURATION Type: Number
- start: Required. Defines the start date of the task in the scenario. Table and Column: CAP_SCENARIO_TASKS.START_DATE Type: Date
- finish: Required. Defines the finish date of the task in the scenario. Table and Column: CAP_SCENARIO_TASKS.FINISH_DATE Type: Date
- name: Output only. Derived from PRTASK.PRNAME. Table and Column: N/A Type: String
- milestone: Required. Indicates if the task is a milestone. Values: - 1 (true) - 0 (false) Table and Column: CAP_SCENARIO_TASKS.IS_MILESTONE Type: Boolean
- taskID: Defines the link to a specific task on the investment. Table and Column: CAP_SCENARIO_TASKS.EXTERNAL_ID


Type: String


EstCurve (Segment) Element
Segment (EstCurve) element is also known as Time Scale Value. The EstCurve element has the following attributes:
- finish: Required. This is stored as BLOB. Table and Column: CAP_SCENARIO_ASSIGNMENTS.PREXTENSION Type: Date
- start: Required. This is stored as BLOB. Table and Column: CAP_SCENARIO_ASSIGNMENTS.PREXTENSION Type: Date
- sum: Required. Defines the amount of work remaining. It is stored as BLOB. Table and Column: CAP_SCENARIO_ASSIGNMENTS.PREXTENSIONT ype: Float

TaskLabor Element
TaskLabor is composed of the Segment (EstCurve) element, which is a list of segments inside the Estimate Curve. The TaskLabor has the following attributes:
- start: Required. Defines the start date of the task in the scenario. Table and Column: CAP_SCENARIO_ASSIGNMENTS.START_DATE Type: Date
- remainingWork: Derived from the assignment curve. Table and Column: CAP_SCENARIO_ASSIGNMENTS.PREXTENSION Type: Number
- actualWork: Derived from the assignment curve. Table and Column: CAP_SCENARIO_ASSIGNMENTS.PREXTENSION Type: Number
- resourceID: Required. Defines the resource ID or key that is assigned to the task. Table and Column: CAP_SCENARIO_ASSIGNMENTS.RESOURCE_ID Type: Number

XOG: Change Request
Use the change request XOG object to view inbound and outbound change request instances. Schema Name nikuxog_change.xsd Read and Write XML Files The following XML files are included: - change_read.xml. Use this file to export change request instance from Classic PPM. - change_write.xml. Use this file to import change request instances that were previously exported from Classic PPM. Prerequisites Before you use this XOG object, verify the referenced objects, such as the project, user, and category, exist in Classic PPM. Read Filters


The following explicit read filters are used:
- projectCode: Defines the code for the associated project. - Name: Defines the name of the change request. - riskCode: Defines the risk of the change request. - statusCode: Defines the status of the change request. - priorityCode: Defines the priority of the change request. - ownerCode: Defines the name of the owner or assignee of the change request.
Error Handling
The following errors can be thrown:
- Assessor does not exist in the system. - Approved By does not exist in the system. - Project does not exist in the system. - Category type is not valid. - Status is not valid. - Priority is not valid. - Approach code is not valid. - Owner does not exist in the system. - Impact is not valid. - Probability is not valid. - Resolved By does not exist in the system. - Task does not exist for the given project. - Failed to import risk/issue/change request.
Schema Mapping
Mappings for the following schema tag names are provided:
- Change Request


Change Request Schema Tag
The change request tag is part of the schema mapping for the change request XOG object. It has the following attributes:
- name: Required. Defines the name of the change request. Table and Column: NAME Type: String
- code: Required. Defines the unique identifier for this change request. Table and Column: RIM_RISK_ISSUE_CODE Type: String
- projectCode: Required. Defines the project that is associated with this change request. Table and Column: INV_INVESTMENTS.CODE Type: String
- approvedBy: Defines the name of the resource who has approved the request. Table and Column: APPROVED_BY Type: String
- approvedDate: Defines the date that the request was approved. Table and Column: APPROVED_DATE Type: Date
- assessmentDate: Defines the date that the request was assessed.


Table and Column: ASSESSMENT_DATE Type: Date - assessor: Defines the name of the resource who assessed the request. Table and Column: ASSESSOR Type: String - ownerCode: Required. Defines the name of the resource that is assigned to this change request. Table and Column: ASSIGNED_TO Type: String - benefits: Defines the benefits of this request. Table and Column: BENEFITS Type: String - categoryTypeCode: Defines the category of this request. Table and Column: CATEGORY_TYPE_CODE Type: String - effectOnCost: Change in cost (if any) for this request Table and Column: EFFECT_ON_COST Type: Money - effectOnResources: Change in resources (if any) for this request Table and Column: EFFECT_ON_RESOURCES Type: Integer - effectOnSchedule: Defines the effect on the schedule in days for this request. Table and Column: EFFECT_ON_SCHEDULE Type: number (floating point) - closureDate: Defines the date that this request was closed. Table and Column: CLOSURE_DATE Type: String - description: Defines the description of this change request. Table and Column: DESCRIPTION Type: String - targetResolutionDate: Defines the date this change request is targeted to close. Table and Column: TARGET_RESOLUTION_DATE Type: Date - impactBaseline: Defines the impact this change request has on the baseline. Table and Column: IMPACT_ON_BASELINE Type: String - impactDescription: Defines the impact this change request has on other projects. Table and Column: IMPACT_DESCRIPTION Type: String - priorityCode: Defines the priority of this change request. Table and Column: PRIORITY_CODE Type: String - reasons: Defines the reason for the change request. Table and Column: ASSUMPTIONS Type: String - reviewDate: Defines the date that the request was reviewed. Table and Column: REVIEW_DATE

Clarity - 16.4.1 4307


Type: Date - statusCode: Defines the status of this change request.
Table and Column: STATUS_CODE Type: String


XOG: Charge Code
Use the charge code XOG object to view inbound and outbound charge code instances.
Schema Name
nikuxog_chargecode.xsd
Read and Write XML Files
The following XML files are included:
- prj_chargecodes_read.xml. Use this file to export charge codes from Classic PPM. - prj_chargecodes_write.xml. Use this file to import charge codes that were previously exported from Classic PPM.
Prerequisites
None.
Read Filters
The following explicit read filters are used:
- open Specifies whether the charge code has a status of "Open". - chargeCodeID Defines the unique identifier for the charge code.
Error Handling
The following errors can be thrown:
- Project does not exist in the system. - Cannot change the project for the charge code. - Failed to import Charge Codes.
Schema Mapping
Mappings for the following schema tag name are provided:
- Charge Code
Charge Code (Chargecode) Schema Tag
The charge code tag is part schema mapping for the charge code XOG object. It has the following attributes:
- chargeCodeID: Required. Defines the charge code's unique identifier. Table and Column: CHARGECODE Type: String
- name: Required. Defines the charge code's name. Table and Column: NAME Type: String
- openForTimeEntry: Not required. Defines the charge code open status. Table and Column: OPENFORTIMEENTRY Type: Boolean
- allocationStatus: Not required. Defines the allocation status.


Values: ACTIVE, INACTIVE, ONHOLD Default: INACTIVE Table and Column: ALLOCATIONSTATUS Type: String - projectCode: Not required. Defines the code of the project that is associated with this charge code. Table and Column: PROJECTCODE Type: String


XOG: Company and Company Class
Use the Company Class XOG object to view inbound and outbound Company Class instances. Use the company XOG object to view inbound and outbound company attributes.
- Company Class - Company

Company Class Schema Name nikuxog_companyclass.xsd Read and Write XML Files The following XML files are included: - companyClass_read.xml. Use this file to export Company Class instances from Classic PPM. - companyClass_write.xml. Use this file to import Company Class instances that were previously exported from Classic
PPM. Prerequisites None. Read Filters The following explicit read filters are used: - companyclass: Defines the company class name. - description: Defines the description for the Company Class. - shortdesc: Defines the short description for the Company Class. Error Handling The following errors can be thrown: - Could not xog-in item because size of some attributes [description] is not within valid range. Schema Mapping Mappings for the following schema tag name are provided.
Company Class Schema Tag The Company Class tag is part of the schema mapping for the Company Class XOG object. It has the following attributes: - companyclass: Required. Defines the unique company class name.
Table and Column: CLNTCLASS


Type: String - description: Required. Defines the description of the company class.
Table and Column: DESCRIPTION Type: String - shortdesc: Required. Defines the summary of the company class description. Table and Column: SHORTDESC Type: String


Company
Use the company XOG object to view inbound and outbound company attributes. Companies are defined for inbound (write) and outbound (read) processing.
Schema Name
nikuxog_company.xsd
Read and Write XML Files
The following XML files are included:
- biz_companies_read.xml. Use this file to export companies from Classic PPM. - biz_companies_write.xml. Use this file to import companies that were previously exported from Classic PPM.
Terms
The following terms are used with Company XOG object:
- Parent and Affiliate Company: These browse fields are used to associate a company with a parent or affiliate company and are used to perform validation against SRM_COMPANIES table.If the company does not exist, no information is posted to the company supplemental fields and a warning is written to the Success and Error file. If the company exists, the field is populated.
- Account Manager: This browse field is used to associate a company with a project manager and to perform validation with uniqueName in the SRM_RESOURCES table.If the resource does not exist, no information is posted to the company supplemental fields and a warning is posted to the Success and Error file. If the resource uniqueName is contained in Classic PPM, the field is populated.
- Internal Contact: This browse field is used to associate an internal contact with a company and perform validation on Last_Name in SRM_RESOURCES.If the resource does not exist, a blank field is posted to company custom-defined fields and a warning is written to the Success and Error file. If the resource last_name exists, the field is populated.
- Billing Address: The billing address of the company. A company can have more than one billing address. If more than one billing address exists, each is associated with the same company.
- Custom Fields: Use these to import custom-defined fields. First generate the custom-defined fields with XDM. The XOG allows for an unlimited number of custom-defined fields if you map the generated field to the XML schema. Within the schema for custom-defined fields, you must provide the Column Name, Attribute Name, and Value.
- Financial Properties: Prior to importing companies, the following financial properties must be set up in the Financial Administration module. The Default Values must be populated in the Administration Tool's Application Administration/ Financial Management/Defaults section. The Location, Department, WIP Class, Project Class, and Company Class values are not required in the XML schema but are required within Classic PPM.
- Lookup values: The XML schema requires lookup codes that are provided later. These are validated against the values in CMN_LOOKUPS.
- OBS association: There is an OBS Associations portlet that contains the OBS unit that is associated with the company, if any. The OBS association fields can be used for import and export.
Read Filters
The XOG supports outbound processing of companies that are based on the following fields:
- Company Status - Company Type And and Or processing is supported between these two fields (listed above) and for processing within Company Type. The following combinations are supported:
Company Status = x
where x = Active or Inactive
Company Type = x
where x = Prospect, Other, Competitor, Customer, Department, Marketplace Buyer, Marketplace Supplier, Resource Partner, Project Partner, Trust Client, Vendor
Company Status = x AND Company Type = y
where x = Active or Inactive where y = one of many Company Types
Error Handling The following fields are written to the Success and Error file when the XOG process generates an error or warning: - companyId - companyName - externalId - externalSource The Company XOG object handles errors and warnings. If an error occurs, the table is not updated. You must fix the error and must run the XOG again. If a warning occurs, the record is posted but the non-required fields are defaulted because of inconsistencies in the data.
The following errors are validated against Company: - companyId: The unique identifier for the company.The company ID is validated against the companyId field. If the
company ID is not unique, the company is not imported and an error is posted to the Success and Error file. - parentCompany: The name of the parent company associated with the company.The parent company name is
validated against the parentCompany field. If the parent company does not exist, the company is imported without any association to a parent company. - affiliateCompany: The name of the affiliate company associated with the company.The affiliate company is validated against the affiliateCompany field. If the affiliate company does not exist, the company is imported without any association to an affiliate company.
Schema Mappings The following schema mappings are provided for the company XOG.
Company Schema Tag The Company tag is part of the schema mapping for the Company XOG object. It has the following attributes: - companyId: Required. Defines the unique, primary key for the company.
Table and Column: SRM_COMPANIES.Company_ID Type: String - name: Required. Defines the company name. Table and Column: SRM_COMPANIES.Company_Name Type: String - type: Required. Defines the company type.

Values: Prospect, Other, Competitor, Customer, Department, Marketplace Buyer, Marketplace Supplier, Resource Partner, Project Partner, Trusted Client, Vendor Table and Column: SRM_COMPANIES.Type Type: String - status: Required. Defines the status for the company. Values: Active and Inactive Default: Active Table and Column: SRM_COMPANIES.Status Type: String - externalSource: Required by the schema. The lookup value specifies the originating system ID. For example, Oracle. Table and Column: SRM_COMPANIES.External_Source_ID Type: String (in schema) and Number (in Classic PPM ) - externalId: Required. Defines the originating unique identifier that is required by the XML schema. Table and Column: SRM_COMPANIES.External_ID Type: String
Contact Information Schema Tag
The Contact Information tag is part of the schema mapping for the Company XOG object. Contact information includes phone and fax numbers and mail and email addresses.
This schema tag has the following attributes:
- address1: Defines the first line of the address. Table and Column: SRM_CONTACTS.Address1 Type: String
- address2: Defines the second line of the address. Table and Column: SRM_CONTACTS.Address2 Type: String
- city: Defines the city. Table and Column: SRM_CONTACTS.City Type: String
- county: Defines the county. Table and Column: SRM_CONTACTS.County Type: String
- state: Defines the state. Table and Column: SRM_CONTACTS.State_Province Type: String
- postalCode: Defines the postal code. Table and Column: SRM_CONTACTS.Postal _Code Type: String
- country: Defines the country. Table and Column: SRM_CONTACTS.Country_ID Type: Number
- workPhone: Defines the work phone number. Table and Column: SRM_CONTACTS.Phone_Work Type: String
- fax: Defines the fax number. Table and Column: SRM_CONTACTS.Phone_Fax


Type: String - webAddress: Defines the Web address.
Table and Column: SRM_CONTACTS.URL Type: String
Supplemental Information Schema Tag
This tag is part of the schema mapping for the Company XOG object. It has the following attributes:
- description: Describes the company. Table and Column: BIZ_COM_SUP_PROPERTIES.Description Type: String
- rating: Lookup values include: - High - Medium - Low Table and Column: BIZ_COM_SUP_PROPERTIES.Rating Type: String
- sicCode Lookup values include: - SIC Code 1 - SIC Code 2 - SIC Code 3 Table and Column: BIZ_COM_SUP_PROPERTIES.SIC_Code Type: String
- parentCompany: Browse this field to specify the parent with which the company is associated. Table and Column: BIZ_COM_SUP_PROPERTIES.Parent_Company Type: String
- affiliate Company: Browse this field to specify the affiliate with which the company is associated. Table and Column: BIZ_COM_SUP_PROPERTIES.Affiliate_Company Type: String
- division: Defines the company division. Table and Column: BIZ_COM_SUP_PROPERTIES.Division Type: String
- category: Defines the company category. Table and Column: BIZ_COM_SUP_PROPERTIES.Category Type: String
- industry: Defines the industry in which the company operates. Table and Column: BIZ_COM_SUP_PROPERTIES.Industry Type: String
- numberOfEmployees: Defines the number of employees in the company. Table and Column: BIZ_COM_SUP_PROPERTIES.Number_of_Employees Type: Number
- ownership: The Lookup value is "Corporation". Table and Column: BIZ_COM_SUP_PROPERTIES.OwnerShip Type: String
- tickerSymbol: Defines the ticker symbol of the company Table and Column: BIZ_COM_SUP_PROPERTIES.Ticker_Symbol

Clarity - 16.4.1 4313

Type: String - referralSource: Defines the referral source.
Table and Column: BIZ_COM_SUP_PROPERTIES.Referral_Source Type: String - accountManager: Browse this field to identify the account manager who is associated with the company. Table and Column: BIZ_COM_SUP_PROPERTIES.Account_Manager Type: String - primaryContactName: Defines the primary contact in the company. Table and Column: BIZ_COM_SUP_PROPERTIES.Primary_Contact_Name Type: String - primaryContact Email: Defines the email address of the company's primary contact. Table and Column: BIZ_COM_SUP_PROPERTIES.Primary_Contact_Email Type: String - primaryContact Phone: Defines the phone number of the company's primary contact. Table and Column: BIZ_COM_SUP_PROPERTIES.Primary_Contact_Phone Type: String - notes: Defines any company notes. Table and Column: BIZ_COM_SUP_PROPERTIES.Notes Type: String
Custom Information Schema Tag
The Custom Information tag is part of the schema mapping for the Company XOG object. This tag stores custom-defined fields (CDF). You must allow several CDFs for each company.
This schema tag has the following attributes:
- ceoName: Defines the name of the company's Chief Executive Officer. Table and Column: XDM_CDF_SRM_COMPANIES.XDM_CEO_NAME Type: String
- defaultWebSite: Defines the company's default Web address. Table and Column: XDM_CDF_SRM_COMPANIES.XDM_DEFALUTWEBSITE Type: String
- numberOfEmployees: Defines the number of employees in the company. Table and Column: XDM_CDF_SRM_COMPANIES.XDM_NUM_OF_EMPLOYEES Type: Number
- opportunity: Defines the opportunity for the company. Table and Column: XDM_CDF_SRM_COMPANIES.XDM_OPPORTUNITY Type: Boolean Default: False
- internalContact: Defines the name of the internal contact for the company. This is a browse field. Table and Column: XDM_CDF_SRM_COMPANIES.XDM_PRIM_INTERNAL_CONTACT Type: String
- agreementStartDate: Defines the agreement start date for the company. Table and Column: XDM_CDF_SRM_COMPANIES.XDM_AGREEMENT_START_DATE Type: Date
- industry: Defines the industry type for the company. This is a lookup value. Table and Column: XDM_CDF_SRM_COMPANIES.XDM_INDUSTRY Type: String

Financial Information Schema Tag
The Financial Information tag is part of the schema mapping for the Company XOG object. The attribute values are unlike other lookup values. They require you to provide a text string instead of a lookup code.
This tag has the following attributes:
- status: Defines the company's status. Values: - Active - Inactive - No new business Default: Active Table and Column: CLNTSUPP.STATUS_TYPE Type: String
- location: Indicates the company location. This is a browse field. Table and Column: CLNTSUPP.LOCATIONID Type: String
- department: Indicates the department associated with the company. This is a browse field. Table and Column: CLNTSUPP.DEPARTCODE Type: String
- wipClass: Defines the WIP Class associated with the company. This is a browse field. Table and Column: CLNTSUPP.CLNTWIPCLASS Type: String
- projectClass: Defines the project class associated with the company. This is a browse field. Table and Column: CLNTSUPP. PROJCLASS Type: String
- companyClass: Defines the company class associated with the company. This is a browse field. Table and Column: CLNTSUPP.COMPCLASS Type: String
- batchCycle: (Optional) Defines the batch cycle associated with the company. Table and Column: CLNTSUPP. BILLCYCLE Type: String
- dateOpened: Defines the opened date for the company. Table and Column: CLNTSUPP. OPENEDDATE Type: Date
Billing Address Schema Tag
The Billing Address tag is part of the schema mapping for the company XOG object. This is the Billing Address header. Each company can have one or many billing addresses.
This schema tag has the following attributes:
- billingCompanyName: Required. Defines the Bill To company name. Table and Column: CLNTBILLTO.COMPANY_CODE Type: String
- billingCode: Required. Defines the billing code for the company. Table and Column: CLNTBILLTO.BILL_TO_COMPANY_CODE Type: String

Billing Address Detail Schema Tag
The Billing Address Detail tag is part of the schema mapping for the company XOG object. It has the following attributes:
- address1: Defines the first line of the billing address for the company. Table and Column: ARMASTER.ADDR1 Type: String
- address2: Defines the second line of the billing address for the company. Table and Column: ARMASTER.ADDR2 Type: String
- address3: Defines the third line of the billing address for the company. Table and Column: ARMASTER.ADDR3 Type: String
- address4: Defines the fourth line of the billing address for the company. Table and Column: ARMASTER.ADDR4 Type: String
- address5: Defines the fifth line of the billing address for the company. Table and Column: ARMASTER.ADDR5 Type: String
- attentionName: Defines the name of the individual responsible for the company's billing. Table and Column: ARMASTER.ATTENTION_NAME Type: String
- attentionPhone: Defines the phone number for the individual responsible for the company's billing. Table and Column: ARMASTER.ATTENTION_PHONE Type: String
OBS Associations Schema Tag
The OBS Associations tag is part of the schema mapping for the Company XOG object. The OBS Associations tag is also a shared xsd type and a wrapper for the OBSAssoc elements.
Example:
<xs:complexType name="OBSAssocsType"> <xs:annotation> <xs:documentation xml:lang="en"> <... list of OBS Associations ...> <OBSAssocs complete="false"> </xs:documentation>
The OBS Associations tables include:
- PRJ_OBS_ASSOCIATIONS - PRJ_OBS_TYPES - PRJ_OBS_UNIT - PRJ_OBS_UNITS_FLAT
Attributes: - complete Defines whether the OBS associations are complete. This field is optional. When complete is true, existing
OBS associations that are not listed in the import are deleted. When the value is false, the operation inserts and/or updates any existing OBS associations.

NOTE Complete replaces deprecated forms completed and IsComplete.
Table and Column: Not applicable Type: String Default: False - id: Required. Defines the unique ID for the OBS type.
Table and Column: PRJ_OBS_TYPES.UNIQUE_NAME Type: String - name: Defines the name of the OBS type. Table and Column: PRJ_OBS_TYPES.NAME Type: String - unitPath: Required. This is a slash-delimited list of unit names that lead to the unit with which the object is associated. Example: "CAN/BC/VAN". Table and Column: PRJ_OBS_UNITS.NAME Type: String
XOG: Content Pack
Use the Content Pack XOG object to create new content for Classic PPM. A content item is any item that displays in Classic PPM but is not considered data. For example, a graph portlet is considered a content item, but a project is considered data.
Use this object to view inbound and outbound add-in items.
Schema Names
The following schema names are associated with the content pack XOG object:
- nikuxog_contentPack.xsd - nikuxog_pageTypes.xsd - nikuxog_filter_portlet.xsd
Read and Write XML Files
The following XML files are included:
- content_pack_read.xml. Use this file to export content packs from Classic PPM. - content_pack_write.xml. Use this file to import content packs that were previously exported from Classic PPM.
Terms
The following terms are used when describing the content pack XOG object:
- Content Item Defines the user-defined add-in item that adds or extends Classic PPM. - Queries Defines the queries. - Reports and Jobs Defines the reports or jobs. You can migrate (import and export) report and job definitions using the
XOG. - Portlets (graph or grid) Defines the portlets. You cannot import or export system-supplied portlets using the XOG.
They are not considered user-defined add-in items. - Pages Defines the pages. - Lookups Defines the lookups. You can export system-supplied lookups. - Menus (menu manager sections and links) Defines the menus. - Content Pack Defines the collection of content that is bundled into a single distributable package.
Business Rules and Processing
The following business rules and processing apply to this XOG:
- When creating add-in items, set up a staging server that is separate from the production server. After reviewing, testing, and verifying the effectiveness and usability of the new add-in items, you can determine that the add-in items are ready for production. You can then transfer the items to the production server. During this process, the items are exported from the staging server and imported to a production server.
- Instead of exporting and importing a series of add-in item XML (XOG) files, you can export many add-in items, then import them as a single XML file.
For example, you can do the following:
1. Create a page that contains add-in items (portlets, queries, and lookups). 2. Add the portlets to a menu. 3. Run the XOG and export the content.The resulting XML file contains all of the add-in items. The file is fully annotated
to describe how each element is filtered.
The attribute values for the filterMapping element (part of the PortletReferenceType complex type) have the following prerequisites that are unique to the filter portlet type:
- The filterPortletCode attribute value must match the portlet code of a valid filter portlet that is defined in the filter portlet schema.
- The fieldCode attribute value must match the field code of a valid filter portlet that is defined in the filter portlet schema. - The dataProviderItemCode attribute value must match the column code of a valid grid or graph portlet column. - The dataProviderItemCode and fieldCode attribute values must reference an attribute of the same data type. - If the data type is a lookup, then the lookup type codes must be the same between the attributes.
Dependencies
Add-in items have dependencies that are automatically resolved by the XOG. For example, if a query depends on a lookup and the query is imported, the lookup must also be imported (if it does not already exist). The dependencies in the following table exist when exporting add-in items:

Content Item Depends On
Queries Graphs and Grids Jobs Pages, Portlets, and Queries Menu Links All items Objects

Content Item
Lookups Queries or Lookups Lookups Lookups (sometimes Objects if data provider of portlet is object) Pages Security Lookups

OBS associations for pages, portlets, and jobs are exported. They are also imported if the OBS and OBS unit (including parentage) exist in Classic PPM. The same is true of security, which is imported if the user, group, or OBS unit exists.
Import Rules
Each add-in import request is regarded as a single transaction. If one item fails, the entire add-in is not imported. Add-in items are imported from XML files, which can be produced during the export or created manually.
If an item is modified to include new entries before an item is imported, the new entry is not affected by the import process; the import operation ignores the new entry.
Example
Consider a static lookup that is named SAMPLE_LOOKUP that contains the following values:
- OPEN - CLOSED - IN PROGRESS
You add a new lookup value of SUSPENDED and change the existing label from CLOSED to FINISHED. You import a Best Practice Accelerator that includes the definition for SAMPLE_LOOKUP. That lookup contains three lookup values (OPEN, CLOSED, and IN PROGRESS) and the new lookup value (DELAYED). When the import operation completes, Classic PPM contains the following lookup values:
- OPEN - CLOSED (the change is overwritten) - IN PROGRESS - SUSPENDED (addition made to Classic PPM using the application user interface is preserved) - DELAYED (new item that was present in the input Best Practice Accelerator file is also added)
When you import an add-in item, it is updated with the definition that is present in the file. If a content item contains a new addition that does not exist in Classic PPM, the new addition is also created in Classic PPM. When importing an existing lookup, all rules that are described in the following table apply. The following table shows the various import rules that are associated with a lookup and the lookup values. The user interface honors these rules. As a result, the XOG import process for lookups honors the rules in the following table:

Function

Static List Lookups

Change Lookup Name and

Yes

Description

Change Sort Order (Manual or No Alphanumeric)

Deactivate or Activate Lookup No

Delete Lookup

No

Change Lookup Value Name Yes and Description

Create New Lookup Values

No

Deactivate or Activate Lookup No Values

Reorder Lookup Values

Yes

Dynamic Niku Query Lookups

Change Lookup Name and

Yes

Description

Edit Query

No

Edit Parent Window Fields

No

Edit Browse Window Name and Yes Label Fields

Edit Browse Window Field

No

Element Type

Edit Browse Window Selected No Fields for Filter and List

Edit Browse Window Filter Field, Yes List Column Order

Restricted

System
Yes
Yes
No No Yes
Yes Yes (user-defined values) No (seeded values) Yes
Does not apply
Does not apply Does not apply Does not apply
Does not apply
Does not apply
Does not apply

User-defined
Yes Yes No Yes Yes Yes Yes
Yes
Yes Yes Yes Yes Yes Yes Yes


Function
Edit Browse Window Default Yes Sort Column/Order

Restricted

System Does not apply

User-defined Yes

Export Rules
You can export multiple add-in items simultaneously. Add-in items can be filtered so that a subset of items can be exported. For example, a system may contain four HTML portlets. The export interface allows for two HTML portlets to be exported simultaneously.
- Portlets This feature does not implement business rules for portlets. Most of the attributes and elements are either optional or have default values. While the XML schema does not validate such instances, the import mechanism does validate and generate an error for invalid grids or graphs.For example, if a grid portlet is based on a query that does not contain metrics, then no <metricColumn> elements should be present in the imported XML schema.
- Job definitions During import, the imported attributes of the definition match the user interface exactly. When parameters are changed, the old parameters are deleted and new ones are added. Existing scheduled jobs are canceled, because the parameters no longer exist. All saved parameters are deleted. If the update flag is set to True, then only captions (job and parameters) can be changed. If the update flag is set to False, the content item is assumed to contain all the parameters and existing parameters are deleted as described above.
- Pages The export of a page includes all non-system portlets. OBS and security associations can be specified and, as with other items, a Warning is written to the log file if the target principal (OBS unit, Group, or User) does not exist.
- Lookups Lookups are either static or dynamic. Dynamic lookups are based on NSQL. Static lookups do not contain the NSQL values that are contained in dynamic lookups. Static lookups are generated by executing the NSQL at runtime when they are rendered on a page as a pull-down or as a browse page. Static lookup values are seeded and persist as individual rows in Classic PPM (in the table named CMN_LOOKUPS).While it is true that for any content item that is part of a Best Practice Accelerator, system objects are not imported or exported, there are exceptions for lookups. Lookups are classified into three categories: System-restricted, System, and User-defined. All lookup types (dynamic and static) can be exported.
- Queries This feature follows all business rules for the query user interface. Items that can be updated using the user interface can be updated with an import request. Although the queries schema allows for multiple, vendor-specific NSQL text, only valid text is imported into Classic PPM. For example, an import request on an Oracle system that contains both dbVendor="mssql" and dbVendor="oracle" imports only the dbVendor="oracle".Text with dbVendor="all" is always imported.When creating queries, the user interface in the Administration Tool always sets dbVendor="all". This value cannot be changed in the user interface. Should a query be vendor-specific, you can set the dbVendor attribute value in the XML document.When querying for items to create a Best Practice Accelerator, you must explicitly query for each type of item in the export (read) request. The following statement returns all portlets that include source="acme.com". Without the <PortletQuery> element in the read request, no portlets are imported. For example:<PortletQuery> <Filter name="source" criteria="EQUALS">acme.com</Filter></PortletQuery>
All add-in items have a source attribute which is used to differentiate originating-system items from Classic PPM -supplied items. The source attribute maps to the column source in various database tables. To change the source for add-in items that are created with the user interface, use SQL to change the defaultValue for this column; then new add-in items will have the source specified.
This applies to the following tables:
- CMN_PORTLETS - CMN_PAGES - CMN_SCH_JOB_DEFINITIONS - CMN_LOOKUP_TYPES - CMN_GG_NSQL_QUERIES
The SQL to change this is:


ALTER TABLE CMN_LOOKUP_TYPES MODIFY SOURCE VARCHAR (80) DEFAULT 'acme.com'
Error Handling PageTypes filter mappings that do not meet the dependencies (described earlier), will not throw an error, but the mapping will not be implemented. Schema Mapping The following schema tags and attributes define the ContentPack filter portlet schema (nikuxog_pageTypes.xsd). - Filter Mapping (filterMapping) Schema Tag - portlet Schema Tag
Filter Mapping (filterMapping) Schema Tag The filter mapping tag is part of the schema mapping for the Content Pack XOG object. The following attributes describe the mapping of a field on a filter portlet to a data provider attribute of a grid or graph portlet. This element is only valid as a child of a grid or graph portlet reference. The filerMapping schema tag has the following attributes: - filterPortletCode: (Required) Defines the code of the filter portlet.
Table and Column: Portlet ID Type: String - fieldCode: (Required) Defines the code of the filter field. Table and Column: Field ID Type: String - dataProviderItemCode: (Required) The code of the data provider property or metric. Table and Column: Attribute ID Type: String - hidePortletWhenEmpty: When true, the referenced grid or graph portlet is hidden when no filter value is present. Table and Column: Hide If Empty Type: Boolean
portlet Schema Tag This tag is part of the schema mapping for the Content Pack XOG object. The following schema tags and attributes define the ContentPack filter portlet schemas (nikuxog_contentPack.xsd and nikuxog_filter_portlet.xsd): - filterPortlet - Field - lookupParam The Portlet schema tag has the following attributes: - defaultFilter The default filter for the page. It can be true for only one portlet on the page. Table and Column: Default
Type: Boolean - pageLevelFilter Defines whether the filter values persist across the page. Values:
- True. The filter values persist across this page only. - False. The filter values apply throughout Classic PPM. Table and Column: Persist Type: Boolean

filterPortlet Schema Tag
The filterPortlet schema tag inherits existing PortletAttributesTypes found in nikuxog_portlet.xsd and NLS, OBSAssocs, Security, and FilterViewTypes. These items are consistent across all portlets and not specific to filterPortlet. They are not explicitly listed.
The filterPortlet schema tag has the following attributes:
- uiType: Defines the UI rendering type. Table and Column: Render As Type: FilterPortlet UI Type (section, toolbar)
- isCollapsed: Defines the default section state. Table and Column: Default Filter State Type: Boolean
- bgColorKey: The session key that controls the background color of the toolbar filter portlets. Table and Column: None Type: String
Field Schema Tag
The Field schema tag is a filter field, and has the following attributes:
- nls Required. The name and description of the field. Table and Column: Field Name/Description Type: NlsType
- tip Defines the tool tip. Table and Column:Tooltip Type: NlsType
- hint Defines the hint or instructional text. Table and Column: Hint Type: NlsType
- defaultValue Defines the default value for the field. Table and Column: Filter Default Type: Any type
- lookupParam Defines a parameter of a parameterized lookup. Table and Column: Lookup Parameter Mappings Type: See the lookupParam table
- code Required. Defines the code of the field. Table and Column: Field Id Type: String
- dataType Required. Defines the data type of the field. Table and Column: Data Type Type: String
- extDataType Defines the extended type of the field. Table and Column: N/A Type: String
- widgetType Required. Defines the display type of the field. Table and Column: Display Type Type: String
- extWidgetType Required. The extended display type of the field. Table and Column: N/A


Type: String - lookupTypeCode Defines the lookup code for a lookup field.
Table and Column: Lookup Type: String - width Defines the width of the filter field. Table and Column: Width Type: Integer - position Defines the position of the filter field. Table and Column: Layout Type: Integer - multiValued Defines the lookup style of a lookup field. Table and Column: Lookup Style Type: Boolean - multiValuedLookup Indicates if the lookup field is a Multi Valued Lookup data type. Table and Column: N/A Type: Boolean - fixedWidget Indicates if the field is fixed. Table and Column: N/A Type: Boolean - hidden Indicates if the field is hidden. Table and Column: Hidden in filter Type: Boolean - required Indicates if the field requires a value. Table and Column: Required in Filter Type: Boolean - readOnly Indicates if the field's value is read only. Table and Column: Read-Only in Filter Type: Boolean - minValue Defines the minimum default value of a date or numeric range field. Table and Column: Filter Default From Type: String - maxValue Defines the maximum default value of a date or numeric range field. Table and Column: Filter Default To Type: String - columnNumber Defines the field's column or row in the corresponding section or toolbar filter. Table and Column: Layout Type: Integer - depParentLookupTypeCode Defines the lookup code of a dependent lookup. Table and Column: Lookup Type: String - depEntry Defines the lookup code for entry into dependent lookup. Table and Column: Entry Type: String - depExit Defines the lookup code for exit into dependent lookup. Table and Column: Exit Type: String

Clarity - 16.4.1 4323


lookupParam Schema Tag
The lookupParam schema tag is a parameter of a parameterized lookup, and has the following attributes:
- code: Required. Defines the field code of the parameter. Table and Column: Field Code Type: String
- dpCode: Required. Defines the NSQL parameter that is specified in the lookup. Table and Column: Lookup Parameter Type: String


XOG: Cost Plan
A cost plan is created for an investment that already exists. Use the Cost Plan XOG object to view inbound and outbound financial cost plans.
Schema Name
nikuxog_costPlan.xsd
Read and Write XML Files
The following XML files are included:
- costPlan_read.xml. Use this file to export cost plans from Classic PPM. - costPlan_write.xml. Use this file to import cost plans that were previously exported from Classic PPM.
Prerequisites
Before you use this XOG object, verify the following objects already exist in Classic PPM:
- Investments - Entity - Time periods - Grouping attributes
Business Rules and Processing
The following business rules and processing apply to this XOG:
- A Cost Plan object is created by configuring the cost plan setup properties. - Cost plan details (line items) are added to the plan. - Existing plan detail records are not deleted.
Read Filters
The following explicit read filters are used:
- code. The code for the cost plan. - name. The name of the cost plan. - investmentCode. The investment code with which the plan is associated.
Error Handling
When importing or exporting the cost plan, the following errors can be thrown:
- You must have Plan XOG access rights to perform this action. - Plan code is required. - Grouping Attribute is missing or invalid. - Investment Code is missing or invalid. - Period Type cannot be changed once defined. - Grouping Attributes cannot be changed once defined. - Investment must be associated to an Entity before setting up financial plans. - Benefit plan ID is missing or invalid. - Period Date is missing or invalid. - Grouping Attributes in Plan Details do not match Plan Grouping Attributes. - GL Account is missing or invalid. - Missing or invalid value for Grouping Attribute. - Finish time period is invalid. - Start time period is invalid. - Grouping Attributes do not match locked plan structure for associated entity. - Cannot modify plan periods prior to the freeze date. - Valid Fiscal Period does not exist for start and end dates for plan detail.
Schema Mappings
The following schema tag names are described.
- CostPlan Schema Tag - Description Schema Tag - Grouping Attributes Schema Tag - Detail Schema Tag - Segment Schema Tag


CostPlan Schema Tag
The Cost Plan tag is part of the schema mapping for the Cost Plan XOG object. This tag has the following attributes:
- benefitPlanCode: Defines the ID of the benefit plan that is associated with the cost plan. Table and Column: BENEFIT_PLAN_ID Type: String
- Code: Required. Defines the unique ID of the cost plan for XOG. Table and Column: CODE Type: String
- FinishPeriod: Required. Defines the finish time period name. Table and Column: END_PERIOD_ID Type: String
- Investment Code: Required. Defines the investment code. Table and Column: OBJECT_ID Type: String
- Investment Type: Defines the investment type. This is used only in the XOG read result. Type: String
- isPlanOfRecord: Indicates if the cost plan is the plan of record. If this is not set and it is the first plan of the investment, then the plan is marked as the plan of record. Table and Column: IS_PLAN_OF_RECORD


Type: String - Name: Required. Defines the name of the cost plan.
Table and Column: NAME Type: String - Period Type: Required. Defines the time period type. Table and Column: PERIOD_TYPE_CODE Type: String - Revision: This is used only in XOG read result. It represents the revision of the cost plan. Table and Column: REVISION Type: Integer - StartPeriod: Required. Defines the start time period name. Table and Column: START_PERIOD_ID Type: String


Description Schema Tag This tag is part of the schema mapping for the Cost Plan XOG object. This schema tag is a text node. - Description: Defines the cost plan description. Table and Column: description Type: String

Grouping Attributes Schema Tag
This tag is part of the schema mapping for the Cost Plan XOG object. This tag is used to define grouping attributes for a cost plan. The tag includes the following attribute:
- Grouping Attribute: Specifies grouping attributes for a cost plan. Possible Values: charge_code_idrole_idresource_id department_idlocation_idtransaction_class_idresource_class_idinput_type_code_idcost_type_idlov1_idlov2_id Table and Column: The value is stored in the ODF_MULTI_VALUED_ATTRIBUTES table. Type: String

Detail Schema Tag
This tag is part of the schema mapping for the Cost Plan XOG object. This tag defines a cost plan detail row and is composed primarily of schema tags.
NOTE The Detail schema tag also has two attributes: glAccountMain and glAccountSub. These attributes define the GL Account that is associated with the Detail schema tag. The attributes map to the GL_ACCOUNT_ID column.
The Detail schema tag includes the following tags:
- Cost: Defines the cost for specific time period segments. Table and Column: COST
- Units: Defines the quantity for a specific time period segment. Table and Column: UNITS
- Revenue: Defines the revenue for a specific time period segment. Table and Column: REVENUE
- Grouping Attributes: Defines the grouping attribute codes and values for the grouping attributes selected for the cost plan. Each Grouping Attribute represents a code and value pair for an attribute. Table and Column: The value is stored in the column corresponding to the groupingAttribute code (for example, location_id, charge_code_id). Type: String
- Custom Information Defines the field names for the custom information.


Segment Schema Tag This tag is part of the schema mapping for the Cost Plan XOG object. The Unit, Cost, and Revenue schema tags will include one or more Segment schema tags. This tag has the following attributes: - start: Defines the start period for the unit, cost, or revenue.
Type: String - finish: Defines the end period for the unit, cost, or revenue.
Type: String - value: Defines the value for the unit, cost, or revenue.
Type: String
XOG: Cost Plus Code
Use the cost plus code XOG object to view inbound and outbound cost plus code object instances. Cost Plus Codes are an alternate method of determining rates by adding markups to either the Standard or Actual cost. Schema Name nikuxog_costPlusCode.xsd Read and Write XML Files The following XML files are included: - costPlusCodes_read.xml. Use this file to export cost plus codes from Classic PPM. - costPlusCodes_write.xml. Use this file to import cost plus codes that were previously exported from Classic PPM. Prerequisites None Read Filters The following explicit read filters are used: - code: Defines the code for the cost plus code. - description: Defines the description for the cost plus code. - appliesTo: Defines the apply to Actual/Standard parameter (values are StandardCost or ActualCost). Error Handling When importing or exporting the cost plan, the following error can be thrown:
Failed to export cost plus codes.
Schema Mapping Mappings for the following schema tag name are provided.
Cost Plus Rule (costplusrule) Schema Tag The cost plus rule tag is part schema mapping for the Cost Plus Code XOG object. It has the following attributes: - unitsFrom: Required. Defines the beginning units of the cost plus rule.
Table and Column: COSTPLUSRULES.FROMRANGE Type: Date - unitsTo: Required. Defines the end units of the cost plus rule. Table and Column: COSTPLUSRULES.TORANGE


Type: Date - multiplierAmount: Defines the multiplier amount for the cost plus rule.
Table and Column: COSTPLUSRULES.MULTAMOUNT Type: Double - burdenAmount: Defines the burden amount for the cost plus rule. Table and Column: COSTPLUSRULES.BURDENAMOUNT Type: Double - overheadAmount: Defines the overhead amount for the cost plus rule Table and Column: COSTPLUSRULES.OVERHEADAMOUNT Type: Double


XOG: Department
Use the department XOG object to view inbound and outbound department attributes.
Schema Name
nikuxog_department.xsd
Read and Write XML Files
The following XML files are included:
- department_read.xml. Use this file to export departments from Classic PPM. - department_write.xml. Use this file to import departments that were previously exported from Classic PPM.
Prerequisites
Before you use this XOG object, verify that an entity exists.
Business Rules and Processing
When a department is created, a corresponding OBS unit is created in the department OBS referred to by the department's entity.
Read Filters
The following explicit read filter is used:
- Entity The unique entity code for which the departments should be read out.
Error Handling (Writes & Updates)
Errors are thrown based on the following checks:
- Entity: Checks if the entity is valid and exists. - Required fields: Ensures that all required fields have values. - Location associations: Ensures that locations belong to the same entity. If the location does not exist, a warning is
output.
Schema Mappings
The following schema tag names are provided to XOG departments.
- Departments Schema Tag - Description Schema Tag - LocationAssociations Schema Tag - Department (Child Department) Schema Tag - obsTypes Schema Tag


Departments Schema Tag
This tag is part of the schema mapping for the Department XOG object. This is a placeholder tag for multiple departments.
Department
The actual department object. Department has the following attributes:
- department_code: Required. Defines the unique department code. Table and Column: DEPARTMENTS.departcode Type: String
- short_description: Required. Defines the department name. Table and Column: DEPARTMENTS.shortdesc Type: String
- dept_identifier: Defines the general ledger segment value that is mapped to this department. Table and Column: DEPARTMENTS.departidentifier Type: String
- default_reviewer: Defines the default reviewer for the department. Table and Column: DEPARTMENTS.default_reviewer Type: String
- alt_default_reviewer: Defines the alternate reviewer for the department. Table and Column: DEPARTMENTS.alt_default_reviewer Type: String
- parent_department_code: Defines the code for parent department. Table and Column: parent_department_id Type: String
- dept_manager_code: The department manager resource code. Table and Column: DEPARTMENTS.department_manager_id Type: String
- brm_code: Defines the business relationship manager. Table and Column: brm_id Type: String
- entity: Required. The identity for the entity to which the department belongs. Table and Column: DEPARTMENTS.entity_id Type: String
Description Schema Tag
This tag is part of the schema mapping for the Department XOG object. It is used for the department description. This tag has the following attribute.
- Description Required. Defines the description tag. Table and Column: description Type: String
LocationAssociations Schema Tag
This tag is part of the schema mapping for the department XOG object. The placeholder tag for multiple location associations.
LocationAssociation
A location that is associated with a department. This has the following attribute.
- locationcode Required. Defines the location code. Location must belong to the same entity as the department. Table and Column: locn_id Type: String

Budget Schema Tag
The budget tag is part of the schema mapping for the department XOG object. A simple budget including the project's planned cost, NPV, ROI, and breakeven information. The values apply to only one time period from the start date to the finish date of the project.
Subscriptions Schema Tag
The subscriptions tag is part of the schema mapping for the department XOG object.
It is a placeholder tag for the services to which the department subscribes.
Subscription
The service to which the department subscribes and its properties. This has the following attributes.
- sla_violations: Defines the number of SLA violations. Table and Column: DPT_SUBSCRIPTIONS.sla_violations Type: Integer
- sla_violations_th: Defines the threshold for SLA violations. Table and Column: DPT_SUBSCRIPTIONS.sla_violations_threshold Type: Integer
- incidents: Defines the number of incidents. Table and Column: DPT_SUBSCRIPTIONS.incidents Type: Integer
- incidents_threshold: Defines the threshold for incidents. Table and Column: DPT_SUBSCRIPTIONS.incidents_threshold Type: Integer
- change_orders: Defines the number of change orders. Table and Column: DPT_SUBSCRIPTIONS.change_orders Type: Integer
- charges: Defines the total charges (from chargebacks) against the investment (service) for this subscription. Table and Column: DPT_SUBSCRIPTIONS.charges Type: Integer
- cust_satisfaction: Defines the customer satisfaction rating for this subscription. Table and Column: DPT_SUBSCRIPTIONS.customer_satisfaction Type: Integer
- total_users: Defines the total number of users utilizing this subscription. Table and Column: DPT_SUBSCRIPTIONS.total_users Type: Integer
- active_users: Defines the number of active users utilizing this subscript. Table and Column: DPT_SUBSCRIPTIONS.active_users Type: Integer
- page_hits: Defines the page hits as captured for this subscription if applicable. Table and Column: DPT_SUBSCRIPTIONS.page_hits Type: Integer
- entityId: Required. Defines the entity to which the service belongs. Table and Column: This is a derived attribute. Type: String
- departmentId: Required. Identifies the subscribing department. Table and Column: DPT_SUBSCRIPTIONS.department_id

Type: String - serviceId: Required. Defines the identifier that makes it unique in combination with the table_name column.
Column: pk_id Type: String
Department (Child Department) Schema Tag This tag is part of the schema mapping for the Department XOG object. A child department has all the elements and attributes of the parent department.
obsTypes Schema Tag This tag is part of the schema mapping for the Department XOG object. It is a placeholder for the two OBS types that represent the Location and Department OBS's. This is similar to the generic OBS XOG structure. This schema tag is composed of the following elements: - obs - level - obsAssociations - obs The obsTypes schema tag has the following attributes: - code: Required. Defines the unique code for OBS type.
Table and Column: PRJ_OBS_TYPES.unique_name Type: String - name: Required. Defines the name of the OBS type. Table and Column: PRJ_OBS_TYPES.name Type: String - description: Required. Describes the OBS type. Table and Column: PRJ_OBS_TYPES.description Type: String level Level represents a level in the OBS type. At least one level is required. Level has the following attributes. - Name Required. The name for the level. Table and Column: Prj_Obs_Levels.Name. Type: String - depth: Required. The depth of the OBS level. Table and Column: Prj_Obs_Levels.obs_level Type: Integer obsAssociation The object types that are associated to this OBS type. This tag is optional. - object Required. The name of the object type that is associated with this OBS. Table and Name: Prj_Obs_Associations.table_name Type: String
- associationType: Required. Table and Name: Prj_Obs_Associations.is_leaf_only Type: String
TIP If you are changing the level of one or more OBS units, maintain all the existing child units in your XML. If you skip a unit, the depth for the missed unit can change in unexpected ways. Create and move OBS units together. Incomplete XML structure for the root unit you move can also move child units. See XOG Object Reference: Nested OBS Units in XOG Files.
XOG: Entity
Use the entity XOG object to view inbound and outbound entity attributes. Schema Name nikuxog_entity.xsd Read and Write XML Files The following XML files are included: - entity_read.xml. Use this file to export entities from Classic PPM. - entity_write.xml. Use this file to import entities that were previously exported from Classic PPM. Prerequisites None. Business Rules and Processing The following business rules and processing apply to this XOG object: - The entity inherits the currency type from the system settings. - In entity create mode, if the OBS types in the XOG file do not exist, they are created automatically. - Structural updates to OBS types are not allowed if they are referred to by the entities. Use the location and department
XOG files for structural changes. - Ensures that the OBS types are not referred to by another entity. - Creates departments and locations for the OBS units (when in create mode). - You can only set one entity as the default entity at any time. - Setting an entity as the default results in any other entity that was marked as the default to no longer be the default. - A single entity with isDefault="false" does not mark this entity as the default even if this entity is the first one in the
system. - Multiple entities with isDefault="true" set for one or more of the entities results in the last entity with isDefault="true" to
be marked as the default. Read Filters The following explicit read filter is used: - Entity: Defines the unique entity code to read out. - Description: Defines the description of the entity. Schema Mappings The following schema tag attributes are described.
- Entity Schema Tag - Description Schema Tag - Short Description (shortDescription) Schema Tag - OBS Types (obsTypes) Schema Tag - GL Periods GLPeriods Schema Tag - Plan Defaults PlanDefaults Schema Tag - Grouping Attributes Schema Tag


Entity Schema Tag
This tag is part of the schema mapping for the Entity XOG object. It is a placeholder tag for multiple entities.
Entity
The actual entity object. The entity schema mapping includes definitions for the home and reporting currencies. This schema tag has the following attributes:
- entity: Required. Defines the name of the entity. Do not allow truncation. Table and Column: ENTITY.entity Type: String
- finPeriodCode: Optional. Defines the fiscal time period type of the entity. Possible Values: WEEKLY, 13_PERIODS_PER_YEAR, SEMI_MONTHLY, MONTHLY, QUARTERLY, and ANNUALLY. Table and Column: ENTITY.FIN_PERIOD_CODE Type: String
- geoOBS: Required. Refers to the OBS that will represent the geographical structure (that is, locations). Table and Column: ENTITY.geo_chart_obs_type_id Type: String
- orgOBS: Required. Refers to the OBS that will represent the organizational structure (that is, departments). Table and Column: ENTITY.org_chart_obs_type_id Type: String
- homeCurrency: Required. Defines the lookup values for each ISO standard code. Validate that it is an active currency. Table and Column: ENTITY.Home_Currency_Code Type: String
- reportingCurrency: Required. Defines the lookup values for each ISO standard code. Validate that it is an active currency. Table and Column: ENTITY.Reporting_Currency_Code Type: String
- billingCurrency: Optional. Defines the lookup values for each ISO standard code. Validate that the billing currency is an active currency. Table and Column: ENTITY.Billing_Currency_Code Type: String
- externalID: Required. Refers to the originating system set of books ID. Table and Column: ENTITY.External_ID Type: String
- defaultProjectClass: Represents the project class for the entity. Validated against project classes. > Table and Column: ENTITY.PROJECT_CLASS Type: String
- defaultWIPClass: Represents the default WIP class for the entity. Validated against WIP classes Table and Column: ENTITY.WIP_CLASS


Type: String - defaultClientClass: Represents the default client class for the entity.
Table and Column: ENTITY.CLIENT_CLASS Type: String - defaultBatchCycle: Represents the default batch cycle for the entity. Table and Column: Type: String - defaultLaborRateSource: Defines the default rate matrix for labor transactions for the entity. Validated against matrices. Table and Column: ENTITY.TRANS_RATE_SOURCE_LABOR Type: String (in schema). Number (in Classic PPM ). - defaultLaborCostSource: Defines the default cost rate matrix for labor transactions for the entity. Validated against matrices. Table and Column: ENTITY.TRANS_COST_SOURCE_LABOR Type: String (in schema). Number (in Classic PPM ). - defaultLaborSourceLocation: Defines the default location for labor transactions for the entity. Table and Column: ENTITY.TRANS_LOCATION_LABOR Type: String Values: Project and Resource - defaultMaterialRateSource: Optional. Defines the default rate matrix for rate of material transactions for the entity. Validated against matrices. Table and Column: ENTITY.TRANS_RATE_SOURCE_MATERIALS Type: String (in schema). Number (in Classic PPM ). - defaultEquipmentRateSource: Optional. Defines the default rate matrix ID for equipment transactions for the entity. Validated against matrices. Table and Column: ENTITY.TRANS_RATE_SOURCE_EQUIPMENT Type: String (in schema). Number (in Classic PPM ). - defaultExpenseRateSource: Optional. Defines the default rate matrix for expense transactions for the entity. Validated against matrices. Table and Column: ENTITY.TRANS_RATE_SOURCE_EXPENSE Type: String (in schema). Number (in Classic PPM ). - exchangeRateTypeLabor: Optional. Defines the labor exchange rate type for the entity. Table and Column: ENTITY.EXCHANGE_RATE_TYPE_LABOR Type: String - exchangeRateTypeMaterials: Optional. Defines the materials exchange rate type for the entity. Table and Column: ENTITY. EXCHANGE_RATE_TYPE_ MATERIALS Type: String - exchangeRateTypeEquipment: Optional. Defines the equipment exchange rate type for the entity. Table and Column: ENTITY. EXCHANGE_RATE_TYPE_ EQUIPMENT Type: String - exchangeRateTypeExpense: Optional. Defines the expense exchange rate type for entity. Table and Column: ENTITY.EXCHANGE_RATE_TYPE_ EXPENSE Type: String - isDefault: Optional. Defines the default entity when set to true. To undo the default entity, set the attribute to false. Table and Column: Type: String


Description Schema Tag This tag, part of the schema mapping for the Entity XOG object, has the following attribute: - Description: Required. A description of the entity. Table and Column: ENTITY.description Type: String


Short Description (shortDescription) Schema Tag
This tag is part of the schema mapping for the Entity XOG object. The short description for the entity. It has the following attribute:
- short description: Required. Defines the short description tag. Table and Column: ENTITY.shortdesc Type: String

OBS Types (obsTypes) Schema Tag
This tag is part of the schema mapping for the Entity XOG object. The tag describes the OBS types that are associated with the entity.
This obsTypes schema tag can include 0 to n number of obs tags.
Each obs tag is composed of the following child elements:
- level (minimum 1, maximum 10) - objectAssociation (minimum 0, maximum unbounded) - unit (minimum 0, maximum unbounded)
obs
The obs tag has the following attributes:
- code: Required. Defines the unique code for OBS type. Table and Column: PRJ_OBS_TYPES.unique_name Type: String
- name: Required. Defines the name of the OBS type. Table and Column: PRJ_OBS_TYPES.name Type: String
- description: Optional. Describes the OBS type. Table and Column: PRJ_OBS_TYPES.description Type: String
level
This child element represents a level in the OBS type. At least one level is required. level has the following attributes:
- Name: Required. The name for the level. Table and Column: Prj_Obs_Levels.Name Type: String
- depth: Required. The depth of the OBS level. Table and Column: Prj_Obs_Levels.obs_level Type: Integer from 1 to 10
objectAssociation
This optional child element represents the object types that are associated with the OBS type.
- object: Required. The name of the object type that is associated to this OBS. Table and Name: Prj_Obs_Associations.table_name Type: String
- associationType: Required.


Possible Values: Any Unit, Lowest Level Table and Name: prj_obs_object_types.is_leaf_only Type: String
unit
This optional tag represents the units for this OBS type.
Each unit is composed of the following child elements:
- associatedObject - rights - Security
The unit schema tag has the following attributes:
- code: Required. Defines the unique code for OBS unit. Table and Column: PRJ_OBS_UNITS.unique_name Type: String
- name: Required. Defines the name of the OBS unit. Table and Column: PRJ_OBS_UNITS.name Type: String


GL Periods GLPeriods Schema Tag
This tag is part of the schema mapping for the Entity XOG object. The tag describes the GL periods that are associated with the entity. This schema tag has the following attributes:
- periodName: Required. Defines the GL period name. Table and Column: Type: String
- period: Required. Defines the GL period. Table and Column: Type: Non-negative integer
- quarter: Defines the GL quarter. Table and Column: Type: Non-negative integer
- year: Defines the GL year. Type: Non-negative integer
- startDate: Required. Defines the GL period start date. Type: String
- endDate: Required. Defines the GL period end date. Type: String
- description: Optional. Describes the GL period. Type: String
- periodType: Required. Describes the GL period type. Table and Column: BIZ_COM_PERIODS.PERIOD_TYPE Type: String
- entityId: Required. Provides a unique ID for the GL period. Table and Column: BIZ_COM_PERIODS.ENTITY_ID Type: String (Number in database)
- isActive: Optional. Indicates if the GL period is active


Table and Column: BIZ_COM_PERIODS.IS_ACTIVE Type: Boolean (Number in database)


Plan Defaults PlanDefaults Schema Tag
This tag is part of the schema mapping for the Entity XOG object. The tag describes the plan defaults associated with the entity. An entity can have only one planDefaults.
This tag includes the child element GroupingAttributes.
The planDefaults schema tag includes the following attributes:
- periodTypeCode: The fiscal time period type for planDefaults. Table and Column: FIN_PLAN_DEFAULTS.PERIOD_TYPE_CODE Possible Values: WEEKLY, 13_PERIODS_PER_YEAR, SEMI_MONTHLY, MONTHLY, QUARTERLY, and ANNUALLY. Type: String
- startPeriodName: The start period name for planDefaults. Table and Column: FIN_PLAN_DEFAULTS. START_PERIOD_ID Type: String (Number in database)
- endPeriodName: The end period name for planDefaults. Table and Column: FIN_PLAN_DEFAULTS. END_PERIOD_ID Type: String (Number in database)
- lockPlanStructure: Flag to identify whether to lock the plan structure (grouping attributes) for planDefaults. Table and Column: FIN_PLAN_DEFAULTS. LOCK_PLAN_STRUCTURE Type: Boolean (Number in database)
- freezeDate: The freeze date for planDefaults. Financial plans for this entity can be edited only if the startDate of a period is after this freeze date. Table and Column: FIN_PLAN_DEFAULTS. FREEZE_DATE Type: Date

Grouping Attributes Schema Tag
This tag is a child element of the Plan Defaults schema tag. The tag can have a minimum of one and up to ten grouping attributes.
This tag has the following attributes:
- Grouping Attribute: Specifies the grouping attributes for the plan defaults for an entity. Table and Column: ODF_MULTI_VALUED_LOOKUPS.VALUE Type: String

XOG: Financial Transaction
Use the financial transaction XOG object to view inbound and outbound financial transaction attributes for investments. This XOG object exports WIP transactions from PPA_WWP table so that the data can be imported into an ERP or other enterprise system.
Schema Name
nikuxog_commonTransaction.xsd
Read and Write XML Files
The following XML files are included:
- imp_transactions_read.xml. Use this file to export financial transaction attributes for investments from Classic PPM. - imp_transactions_write.xml. Use this file to import financial transaction attributes for investments that were previously
exported from Classic PPM.
Prerequisites
Before you use this XOG object, verify that all foreign key references of the financial transaction (for example, resource, investment, and others) have been defined.
Business Rules and Processing
The following business rules and processing apply to this XOG object:
- The XOG processes WIP transactions that are based on the following fields: - transactionType: Defines the financial transaction type. Values: L, M, X, or Q. - projectID: The valid project ID. - clientID: The valid company ID. - transactionDate: Enter Start Date, and End Date to get transaction data for all projects between the dates specified.
- And and Or processing is supported among these fields. - Transactions on hold or in error are not processed. - Once a transaction is exported, XOG_EXPORTED is flagged and EXPORTED_DATE is stamped with the time and
date in the PPA_WIP and PPA_BILLINGS tables. For adjustments and reversals, a negative amount is exported (or a positive amount if the posting was negative).
Read Filters
None
Schema Mappings
The schema mappings are provided for the following Financial Transaction tag names.
- Transactions Schema Tag - Transaction Import Schema Tag
Transactions Schema Tag
This tag is part of the schema mapping for the Financial Transaction XOG object. It has the following attributes:
- transactionID: Required. The transaction identifier. It must be unique. Table and Column: TRANSNO Type: Number
- applyToTransactionID: Optional. If the transaction is an adjusted, reversed, or transferred transaction, then applyToTransactionID refers to the parent transaction. Otherwise this field is not public. Table and Column: APPLYTO Type: Number
- clientID: Required. The company identifier. Table and Column: COMPANY_CODE Type: String
- clientName: Required. Derived from company ID. Table and Column: CLNTSUPP.COMPANY_NAME Type: String
- projectID: Required. The project identifier. Table and Column: PROJECT_CODE


Type: String - projectName: Required. Derived from project ID
Table and Column: SRM_PROJECTS.NAME Type: String - taskID: Optional. A valid task identifier. Table and Column: TASK_ID Type: Number - taskName: Optional. Derived from task ID. Table and Column: PRTASK. PRNAME Type: String - transactionDate: Required. The date of the transaction. Table and Column: TRANSDATE Type: Date - resourceID: Required. The resource identifier. Table and Column: RESOURCE_CODE Type: String - resourceName: Required. Derived from resource ID. Table and Column: SRM_RESOURCES.FULL_NAME Type: String - roleID: Optional. The role identifier. Table and Column: ROLE_CODE Type: String - transactionType: Required. The transaction type. Table and Column: TRANSTYPE Type: String - chargeCode: Required. A valid charge code. Table and Column: COSTCODE Type: String - inputTypeCode: Optional. Valid input type code Table and Column: INPUT_TYPE Type: String - chargeable: Required. Indicates if the transaction can be charged to the company. Values:
- 0. Not chargeable - 1. chargeable
Table and Column: CHARGEABLE Type: Number - units: Required. The number of units.
Table and Column: QUANTITY Type: Number - CurrencyValue ->actualCostRate: Required. Table and Column: PPA_WIP_VALUES.ACTUALCOST Type: Number - CurrencyValue ->actualCostRateCurrency: Required. Currency code for actual cost rate Table and Column: PPA_WIP_VALUES.COST_CURRENCY_CODE Type: String - CurrencyValue ->stdCostRate: Required. The cost rate per unit.

Clarity - 16.4.1 4339

Table and Column: PPA_WIP_VALUES.STDCOST Type: Number - CurrencyValue ->stdCostRateCurrency: Optional. The cCurrency code for standard cost rate. Table and Column: PPA_WIP_VALUES.STDCOST_CURRENCY_CODE Type: String - CurrencyValue ->billRate: Required. The billing rate per unit. Table and Column: PPA_WIP_VALUES.BILLRATE Type: Number - CurrencyValue ->billRateCurrency: Required. The currency code for bill rate. Table and Column: PPA_WIP_VALUES.RATE_CURRENCY_CODE Type: String - CurrencyValue-> currencyType: Required. Indicates the currency transaction in the values table. This picks up the HOME, BILLING & NATURAL transaction lines. Table and Column: PPA_WIP_VALUES.CURRENCY_TYPE Type: String - CurrencyValue ->totalCost: Required. The ActualCost x quantity. Table and Column: PPA_WIP_VALUES.TOTALCOST Type: Number - CurrencyValue ->totalAmount: Required. The (BillRate x quantity) + Factor + Burden + Overhead Table and Column: PPA_WIP_VALUES.TOTALAMOUNT Type: String - vendorCode: Optional. The vendor code that is associated with the transaction. Table and Column: PPA_WIP_APINFO.VENDOR_CODE Type: String - notes: Optional. Additional information. Table and Column: NOTES Type: String - transactionStatus: Required. The status of the transaction. Values:
- 0. Normal - 1. Adjusted - 2. Reversed - 4. Under-adjust - 8. Under-bill
Table and Column: STATUS Type: Number - CurrencyValue ->amountRemaining: Required. The Total Amount - Amount Billed.
Table and Column: PPA_WIP_VALUES.AMOUNTREMAINING Type: Number - userLov1: Optional. Refers to PRTIMEENTRY_USERLOV1. Table and Column: USER_LOV1 Type: String - userLov2 : Optional. Refers to PRTIMEENTRY_USERLOV2. Table and Column: USER_LOV2 Type: String - expenseType: Optional. Either CAPITAL_EXPENDITURE or DEPRECIATION. Table and Column: EXPENSE_TYPE

Type: String
Transaction Import Schema Tag
The transaction import tag is part of the schema mapping for the Financial Transaction XOG object. It has the following attributes:
- externalID: Required. The external identifier. The value must be unique. Table and Column: EXTERNALID Type: String
- clientID: Optional. The valid company ID. If the client ID is empty, the value is taken from the project. Table and Column: COMPANY_CODE Type: String
- projectID: Required. The valid project ID. Table and Column: PROJECT_CODE Type: String
- taskID: Required. The valid internal task ID. Table and Column: TASKID Type: Number
- transactionDate: Required. The date of the transaction. It must be between the project start and end dates. Table and Column: TRANSDATE Type: Date
- resourceID: Optional. The resource ID associated with the transaction, when applicable. Otherwise, the resource ID from Cost Key Definition default. Table and Column: RESOURCE_CODE Type: String
- roleID: Optional. The valid role identifier. Table and Column: ROLE_CODE Type: String
- transactionType: Required. Defines the transaction type. Values: L, M, X, and Q Table and Column: TRANSTYPE Type: String
- chargeCode: Optional. A valid charge code. Table and Column: CHARGE_CODE Type: String
- inputTypeCode: Optional. A valid input type. Table and Column: INPUT_TYPE Type: String
- Chargeable: Optional. Indicates if the transaction is chargeable to the company. Values:
- 0. Not chargeable - 1. chargeable
Default: 0 Table and Column: CHARGEABLE Type: Number - Units: The number of units (for all expense transactions). Not required for expense transactions, but required for all
other transaction types. Values: L, M, and Q (Quantity) Table and Column: QUANTITY

Type: Number - actualCostRate: Optional. Cost rate per unit. It must be a valid number. If not specified, the cost is taken from the rate
matrix. Table and Column: PPA_WIP_VALUES.ACTUALCOST Type: Number - actualCostRateCurrency: Optional. ISO currency code for actual cost rate. Table and Column: PPA_WIP_VALUES.COST_CURRENCY_CODE Type: String - BillRate: Optional. The billing rate per unit; must be a valid number. If not specified, the rate is picked up from the rate matrix. Table and Column: RATE Type: Number - billRateCurrency: Optional. ISO currency code for the bill rate. Table and Column: RATE_CURRENCY Type: String - notes: Optional. Additional information. Table and Column: NOTES Type: String - importStatus: Optional. The allowed value is N for New. Table and Column: IMPORTSTATUS Type: String - importDate: Optional. The date the transaction was imported. If not specified, the current server date is used. Table and Column: IMPORTDATE Type: Date
XOG: General Ledger Account
You can use the XOG for general ledger (GL) accounts, allocation rules, periods, and transactions.
- XOG: General Ledger Account - XOG: General Ledger Allocation Rule - XOG: General Ledger Period - XOG: General Ledger Transaction
XOG: General Ledger Account
The general ledger (GL) account XOG object represents the chart of accounts that are used to process chargebacks. Use this XOG object to view inbound and outbound general ledger account attributes.
Schema Name
nikuxog_glaccount.xsd
Read and Write XML Files
The following XML files are included:
- pac_glaccount_read.xml. Use this file to export GL accounts from Classic PPM. - pac_glaccount_write.xml. Use this file to import GL accounts that were previously exported from Classic PPM.
Prerequisites
The following conditions must be met before using this XOG:
- The entities that the GL Accounts reference must exist before importing GL accounts. - The Account Class must be a valid lookup value in Classic PPM. - The Account Type must be a valid lookup value in Classic PPM.
Business Rules and Processing
The following business rules and processing apply to this XOG object:
- The GL chart of accounts is imported into Classic PPM from an external accounting system. The Chargeback feature uses these accounts to capture charges and credits.
- The GL accounts schema is defined as part of the first step to GL integration. - To enable GL transactions between systems, Classic PPM allows for inbound processing to define GL Accounts,
Periods, and Entities. GL Accounts establish the accounts to which transactions can be posted.
Read Filters
The following explicit read filters are used:
- MAIN_ACCOUNT_ID. This is used for filtering by mainAcctId, which is a part of the natural GL account code. - SUB_ACCOUNT_ID. This is used for filtering by subAcctId, which is a part of the natural GL account code. - ACCOUNT_DESCRIPTION. This is used for filtering by description.
Error Handling
If a GL Account file is unsuccessful due to an error, the following fields are output:
- entity - accountNumber - externalId - externalSource
Schema Mappings
The following schema mapping is provided for the outbound Financial Transaction tag name, GLAccount.
GLAccount Schema Tag
This tag is part of the schema mapping for the General Ledger XOG object. The values in this table are unlike other lookup values. A text string must be provided, not a lookup code.
The GLAccount schema tag has the following attributes:
- entity: Defines the entity name for the GL account code. This attribute is a unique primary key, browse field. Lookup to DPT_ENTITY_DEPT. Table and Column: Entity Type: Lookup
- mainAcctId: Required. Part of the natural GL account code. Table and Column: MAIN_ACCOUNT_ID Type: String
- subAcctId: Required. Part of the natural GL account code. Table and Column: SUB_ACCOUNT_ID Type: String
- Overhead: Optional. Indicates if the GL account is an overhead account. Table and Column: OVERHEAD Type: Boolean
- Capitalexpense: Indicates if the GL account is a capital expense account. Table and Column: CAPITAL_EXPENSE

Type: Boolean - noncashexpense: Indicates if the GL account is a non-cash expense account.
Table and Column: NONCASH_EXPENSE Type: Boolean - description: Defines the description of the general ledger account. Table and Column: Description Type: String - Account Type Required. Defines the GL account type. This attribute determines whether the GL account is a Balance Sheet account or a P&L account. A default is set in the background. Lookup to PAC_CHG_GL_ACCOUNT_TYPE Table and Column: ACCOUNT_TYPE Type: Number Default: Lookup - accountClass: Optional. This attribute determines whether the GL account is an asset or liability. A default is set in the background. Lookup to PAC_CHG_GL_ACCOUNT_CLASS. Default: 0 Table and Column: ACCOUNT_CLASS Type: Lookup - Active: Indicates if the general ledger account is active. Values:
- 0. Not Active - 1. Active
Table and Column: Active Type: Boolean Default: 1 - externalID: Defines the originating unique identifier.
Table and Column: External_ID Type: String - externalSource: Defines the external source. The lookup value is the originating system ID. Example: Oracle Table and Column: External_Source_ID Type: String in Schema, but stored as Number in Classic PPM.
XOG: General Ledger Allocation Rule
The GL Allocation Rule XOG object represents the debit and credit rules in chargebacks. Use the General Ledger Allocations Rule XOG object to import and export GL allocation rules.
Schema Name
nikuxog_glallocation.xsd
Read and Write XML Files
The following XML files are included:
- cbk_allocation_read.xml. Use this file to export GL allocations from Classic PPM. - cbk_allocations_read.xml. Use this file to import GL allocations that were previously exported from Classic PPM.
Prerequisites
Before you import the GL allocation rules, verify that the entities that are referenced by these rules exist.
Business Rules and Processing

The insert or update of GL Allocation rules are based on the existence of the GL Allocation code in Classic PPM. The GL Allocation code is unique.
Read Filters
The following explicit read filters are used:
- ALLOCATION_CODE. A unique code that is used for filtering by the allocation code. - STATUS. This is used for filtering by status (Active, Inactive, or On Hold). - CBK_TYPE. This is used for filtering by chargeback type (Debit, Credit). - CBK_SUB_TYPE. This is used for filtering by chargeback sub type (Standard, Investment, or Overhead).
Schema Mapping
The following schema tag is included.
GL Allocation Rule Schema Tag
The GL allocation rule tag is part of the schema mapping for the General Ledger Allocation Rule XOG object. It has the following attributes:
- entityCode: Optional. Defines the unique identifier of the entity that is tied to the GL allocation rule. Table and Column: ENTITY_ID Type: String
- locationCode: Optional. Defines the location unique identifier that is tied to the GL allocation rule. Table and Column: LOCATION_ID Type: String
- departmentCode: Optional. Defines the department unique identifier that is tied to the GL allocation rule. Table and Column: DEPARTMENT_ID Type: Boolean
- resourceClassCode: Optional. Defines the resource class unique identifier that is tied to the GL allocation rule. Table and Column: RESOURCECLASS_ID Type: Boolean
- chargeCode: Optional. Defines the charge code unique identifier that is tied to the GL allocation rule. Table and Column: PRCHARGECODE_ID Type: Boolean
- investmentCode: Optional. Defines the investment unique identifier that is tied to the GL allocation rule. Table and Column: INVESTMENT_ID Type: Number
- utilityCode1: Optional. The lookup to BROWSE_USR_VAL1_ALL. Table and Column: UTILITY_CODE_1 Type: Lookup
- utilityCode2: Optional. The lookup to PRTIMEENTRY_USERLOV2. Table and Column: UTILITY_CODE_2 Type: Lookup
- transactionClassCode: Optional. The lookup to FIN_TRANSCLASSES. Table and Column: TRANSCLASS Type: Lookup
- typeCode: Optional. The lookup to LOOKUP_INPUT_TYPES. Table and Column: PRTYPECODE_unique identifier Type: Lookup
- statusCode: Required. The lookup to STATUS_CODE.

Values: Open and Closed Table and Column: PAC_CHG_STATUS Type: Lookup - chargeRemToOverhead: Optional. Indicates if the rule charges the reminder to overhead. Table and Column: CHG_REM_TO_OVERHEAD Type: Boolean - cbkType: Required. Specifies the chargeback type. Values: DEBIT and CREDIT Table and Column: CHARGEBACK_TYPE Type: String - cbkSubtype: Required. Specifies the chargeback subtype. Values: STANDARD, INVESTMENT, and OVERHEAD Table and Column: CHARGEBACK_SUBTYPE Type: String
Allocation Details - glAccountMain, glAccountSub: Required. Defines the main GL account. Lookup to SCH_BROWSE_GL_ACCTS.
Table and Column: GL_ACCOUNT_ID Type: Lookup - department: Required. Defines the unique identifier of the department to charge. Lookup to SCH_BROWSE_DEPT. Table and Column: DEPARTMENT_ID Type: Lookup - flatAmount: Optional. This attribute is not used. Table and Column: FLAT_AMOUNT Type: Numeric - weightable: Optional. This attribute is not used. Table and Column:WEIGHTAGE Type: Numeric
XOG: General Ledger Period
Use the general ledger period XOG object to view inbound and outbound general ledger period attributes.
Schema Name
xog_glperiod.xsd
Read and Write XML Files
The following XML files are included:
- pac_glperiod_read.xml. Use this file to export GL periods from Classic PPM. - pac_glperiod_write.xml. Use this file to import GL periods that were previously exported from Classic PPM.
Business Rules and Processing
GL Periods are only defined for inbound (write) processing to Classic PPM. This schema is defined as part of the first step to GL integration.
Read Filters
None
Error Handling


If a GL Period file is unsuccessful due to an error, the following fields are output:
- Period Name - Period Type - Period Number - Description - Quarter - Year - Start Date
Schema Mappings
Schema mappings are described for the following outbound General Ledger Period tag name.


Glperiod Schema Tag
This tag is part of the schema mapping for the General Ledger Period XOG object. This tag has the following attributes:
- entity: Required. The unique primary key. A browse field associating the period to an entity. Table and Column: Entity Type: String
- Period: Required. Defines the unique primary key. The fiscal period (that is, date) posted for the selected entity. Table and Column: Period Type: Date
- currentPeriod: Required. Defines the status of the resource. Values:
- 1. True - 0. False
Default: 1 Table and Column: Currentperiod Type: Boolean - externalId: Required. The originating unique ID. Table and Column: External_ID Type: String - externalSource: Required. A lookup value is the originating system ID (for example, Oracle). Table and Column: External_Source_ID Type: String in schema, but stored as Number in the database.

XOG: General Ledger Transaction
GL transactions represent an entry in the General Ledger. The transaction includes information such as the accounts credited or debited and other financial transaction information. Use the general ledger transaction XOG object to view outbound general ledger attributes.
Schema Names
nikuxog_transaction.xsd
Read and Write XML Files
The following XML files are included:
- pac_gltransactions_read.xml. Use this file to export GL transactions from Classic PPM. - pac_gltransactions_write.xml. Use this file to import GL transactions that were previously exported from Classic PPM.


Prerequisites
The GL transaction must belong to an invoice.
Business Rules and Processing
The GL Transactions schema is defined for outbound (read) GL processing. The GL Transaction object is used to export the data from the CBK_GL_TXNS and CBK_GL_TXN_VALUES tables.
Read Filters
The following explicit read filters are used:
- transactionSource. Filters GL transactions by the transaction source (W for WIP, A for Adjusted, or R for Reversed). - entity. Filters by GL transactions by entity. - periodStart. Filters GL transactions by the fiscal period start date, a date filter. - periodEnd. Filters GL transactions by the fiscal period end date, a date filter. - investment_id. Filters GL Transactions by the investment.
XOG allows for outbound processing of GL Transactions that are based on the value within the glposted field.
When querying the database, by default the query returns all GL transactions where glposted is not equal to 'Y' (that is, transactions are awaiting posting). Once selected and invoices processes, the glposted field is updated to 'Y' to indicate that they have been sent to the GL.
Error Handling
Read Transactions
Error handling for read transactions from Classic PPM databases are due to an invalid formats or database unavailability. The adaptor or middleware must handle transaction-level error handling when mapping and transporting into the accounting system. If one transaction is found to be in error, the entire file is not committed. The file must be fixed and resubmitted to keep the balance of debits and credits.
XOG does not have control of processing once an output file is successfully created. If you find an error in the output, rollback the entire batch to keep debits and credits intact.
If a single record within the batch is found to be in error, the entire batch is rejected. Then:
- The external system (adaptor or middleware) must call the Update Transactions schema and must provide the error information element tag and the key fields of the error records.
- XOG processes the input file and copies all the GL transaction records from the GLCONTROL table into the GLEXCEPTION table.
- XOG deletes the records from the GL Control table so they exist in the GLException table. - XOG resets the GLPOSTED field for the transactions from the batch in the PPA_WIP and PPA_BILLING table to 'N'
from 'P' (depending if the transaction source is B or W).
Fix the error batches using Classic PPM, re-post to GLControl, and rerun the XOG to extract the GL transaction records.
Update Transactions
If the entire file cannot be committed, it must be fixed and resubmitted. This is important as all debits and credits must be kept in sync across applications. If an error is found, it is written to the error log. The following fields help to identify the transaction in error:
- transactionNumber - transactionSource - sequenceNumber
Schema Mappings


Schema mappings are described for the following outbound General Ledger Transaction tag name.


GLtransaction Schema Tag
This tag is part of the schema mapping for the General Ledger Transaction XOG object. This tag has the following attributes:
- entity: Optional. The name of the entity for the GL transaction. Table and Column: CBK_GL_TXNS.ENTITY_ID Type: String
- accountCode: Required. The GL account code. Table and Column: CBK_GL_TXNS.GL_ACCOUNT_ID Type: String
- amount: Optional. The amount of the transaction. Table and Column: CBK_GL_TXN_VALUES.AMOUNT Type: Float
- currency: Optional. The currency code of the transaction amount. Table and Column: CBK_GL_TXN_VALUES.CURRENCY_TYPE, CBK_GL_TXN_VALUES.CURRENCY_CODE Type: String
- transactionNumber: Required. A unique primary key. The transaction number from WIP or PPA-billings. Table and Column: CBK_GL_TXN_VALUES.TRANSACTION_ID Type: Positive Integer
- transactionSource: Required. A unique primary key. This key allows you to define the GL distribution of a transaction that is based on the module where it originated. Values:
- W. From WIP. - A. From billing. - D. From credit.
Table and Column: TRANSACTION_SOURCE Type: String - period: Required. The gl period for the transaction. Table and Column: PPA_WIP.GLPERIOD Type: String - InvoiceDate: Required. The date of the invoice to which the GL transaction belongs. This date must be between the project start and end dates. Table and Column: CBK_INVOICE.INVOICE_DATE Type: Date - department: Required. The department id of the transaction Table and Column: CBK_GL_TXNS.DEPARTMENT_ID Type: String - transactionDate: Required. The date of the transaction. Table and Column: CBK_GL_TXNS.TRANSACTION_DATE Type: Date - investment: Required. The investment on which the transaction is posted. Table and Column: CBK_GL_TXNS.TRN_INV_ID Type: String


XOG: Idea
The Idea XOG object extends the common investment object as Ideas are a type of investment. Use this XOG object to view inbound (write) and outbound (read) idea processing. Schema Names - nikuxog_idea.xsd. Use to view inbound idea attributes. Determines which XML elements and attributes are required to
import idea information from an external system into Classic PPM. - nikuxog_read.xsd. Use to view outbound idea attributes. Determines the XML format that is required to export idea
information from Classic PPM to another system. Read and Write XML Files The following XML files are included: - ideas_read.xml. Use this file to export idea object instances from Classic PPM. - ideas_write.xml. Use this file to import idea object instances that were previously exported from Classic PPM. Prerequisites The manager username should exist. Business Rules and Processing Before you import ideas, the following items must be correctly set up: - ID The unique identifier for the idea. If the ID does not exist, the XML schema creates a new idea record unless auto-
numbering is enabled (then an error is generated and posted to the Success and Error files). If the XOG input includes an idea ID, and an idea with the same ID is found, that record is updated. - Summary The summary of the idea. - Finish date The completion date for the idea. If a finish date exists, there must also be a start date. The finish date must also be greater than the start date. - Break-even date The date when the idea is to break-even. If a break-even date exists, it must be greater than or equal to the start date. Read Filters The following explicit read filters are used with this XOG: - objectId - managerUserName - lastUpdatedDate Error Handling Manager username must be set to NULL if it does not exist in Classic PPM. Schema Mappings Idea is composed of the following elements, which are inherited from the investment object, and idea-specific mapping that is found in the Idea Schema tag:
- Allocations - scenarioDependencies - InvestmentAssociations - InvestmentBaselines - InvestmentResources - InvestmentTasks - General - OBSAssocs - CustomInformation
Ideas are different from other investments because they do not include child investments. You can only associate ideas with a simple budget, and they do not have full financial planning capabilities like other investment types.
- Idea Schema Tag - Investments Schema Tag - Budget Schema Tag
Idea Schema Tag
This tag is part of the schema mapping for the Idea XOG object. This tag has the following attributes:
NOTE The import validation rule applies only if it is different from the object attribute-level validation rule.
- ideaspriority Optional. Defines the priority for the idea. Table and Column: INV_IDEAS.PRIORITY Values: High, Medium, Low
- estimateType Optional. Table and Column: INV_IDEAS.EST_TYPE Type: Number Values: Historical, Analytical, High Level, and Commitment
- estimatedCost Optional. Table and Column: INV_IDEAS.EST_COST Type: nonNegativeDouble
- estimatedBenefit Optional. Table and Column: INV_IDEAS.EST_BENEFIT Type: nonNegativeDouble
- benefitDescription Optional. Table and Column: INV_IDEAS.BENEFIT_DESC Type: String
- generalNotes Optional. Table and Column: INV_IDEAS.GENERAL_NOTES Type: String
- businessUnit Optional. Table and Column: INV_IDEAS.BUS_UNIT Type: String
- breakevenDate Optional. Table and Column: INV_IDEAS.BREAKEVEN_DATE Type: investmentDateTimeType
- impact Optional.

Table and Column: INV_IDEAS.IMPACT Type: String - risks Optional. Table and Column: INV_IDEAS.RISKS Type: String - dependencies Optional. Table and Column: INV_IDEAS.DEPENDENCIES Type: String - estimatedStartDate Optional. Table and Column: INV_IDEAS.EST_START_DATE Type: investmentDateTimeType - estimatedFinishDate Optional. Table and Column: INV_IDEAS.EST_FINISH_DATE Type: investmentDateTimeType - conversionDate Optional. Table and Column: INV_IDEAS.CONVERSION_DATE Type: investmentDateTimeType - createdDate Optional. Table and Column: INV_IDEAS.PMA_IDEA.CREATED_DATE - createdBy Optional. Table and Column: INV_IDEAS.PMA_IDEA.CREATED_BY - lastUpdatedDate Optional. Table and Column: INV_IDEAS.PMA_IDEA.LAST_UPDATED_DATE - lastUpdatedBy Optional. Table and Column: INV_IDEAS.PMA_IDEA.LAST_UPDATED_BY - ideaspriority Optional. Table and Column: INV_IDEAS.PRIORITY Type: Number Import Validation Rule: The priority range that is used in ideas differs from the range that is used for investments. - targetManagerUserName Optional. Table and Column: INV_IDEAS.TARGET_MANAGER_ID Type: String Import Validation Rule: The name of the manager who is targeted to manage the investment after conversion from an idea.
Investments Schema Tag
This tag is part of the schema mapping for the Idea XOG object. The INV_INVESTMENTS table contains the shared investment attributes. This tag has the following attributes:
- status Optional. Defines the status of the investment. Values: Open, Unapproved, Rejected, Approved, Incomplete, Submitted for Approval, and Converted Default: Open Table and Column: INV_INVESTMENTS.STATUS Type: Number
- name Required. Table and Column: INV_INVESTMENTS.NAME


Type: String - objectID Optional. Autonumbering is required if it is not present.
Table and Column: INV_INVESTMENTS.CODE Type: String - description Optional. Table and Column: INV_INVESTMENTS.DESCRIPTION Type: String - priority Optional. Table and Column: INV_INVESTMENTS.PRIORITY Type: Number - managerUserName Optional. Table and Column: INV_INVESTMENTS.MANAGER_ID Type: String - approvedById Optional. Table and Column: INV_INVESTMENTS.APPROVEDBY_ID Type: String - chargeCodeExtID Optional. Table and Column: INV_INVESTMENTS.CHARGECODEID Type: String - approvedTime Optional. Table and Column: INV_INVESTMENTS.APPROVEDTIME Type: investmentDateTimeType - processCode Optional. Table and Column: INV_INVESTMENTS.PROCESS_CODE Type: investmentCodeType - stageCode Optional. Table and Column: INV_INVESTMENTS.STAGE_CODE Type: investmentCodeType - goalCode Optional. Table and Column: INV_INVESTMENTS.GOAL_CODE Type: investmentCodeType - alignment Optional. Table and Column: INV_INVESTMENTS.ALIGNMENT Type: iNumber - risk Optional. Table and Column: INV_INVESTMENTS.RISK Type: Number - statusIndicator Optional. Table and Column: INV_INVESTMENTS.STATUS_INDICATOR Type: Number - statusComment Optional. Table and Column: INV_INVESTMENTS.STATUS_COMMENT Type: String - progress Optional. Default: 0 - Not Started Table and Column: INV_INVESTMENTS.SPROGRESS

Clarity - 16.4.1 4353


Type: Number - currencyISOcode Optional.
NOTE This attribute replaces currencyCode.
Table and Column: INV_INVESTMENTS.CURRENCY_CODE Type: String


Budget Schema Tag
This tag is part of the schema mapping for the Ideas XOG object. The FIN_FINANCIALS table contains the shared budget attributes.
The Budget schema tag has the following attributes:
- plannedCostStart Optional. Table and Column: FIN_FINANCIALS.PLANNED_CST_START Type: investmentDateTimeType
- plannedCostFinish Optional. Table and Column: FIN_FINANCIALS.PLANNED_CST_FINISH Type: investmentDateTimeType
- plannedBenTotal Optional. Table and Column: FIN_FINANCIALS.PLANNED_BEN_TOTAL Type: nonNegativeDouble
- plannedBenStart Optional. Table and Column: FIN_FINANCIALS.PLANNED_BEN_START Type: investmentDateTimeType
- plannedBenFinish Optional. Table and Column: FIN_FINANCIALS.PLANNED_BEN_FINISH Type: investmentDateTimeType
- budgetCostStart Optional. Table and Column: FIN_FINANCIALS.BUDGET _CST_START Type: investmentDateTimeType
- budgetCostFinish Optional. Table and Column: FIN_FINANCIALS.BUDGET _CST_FINISH Type: investmentDateTimeType
- budgetCostOnHold Optional. Table and Column: FIN_FINANCIALS.BUDGET _CST_ONHOLD Type: investmentDateTimeType
- budgetCostResumed Optional. Table and Column: FIN_FINANCIALS.BUDGET _CST_RESUMED Type: investmentDateTimeType
- budgetRevTotal Optional. Table and Column: FIN_FINANCIALS.BUDGET_REV_TOTAL Type: nonNegativeDouble
- budgetRevStart Optional Table and Column: FIN_FINANCIALS.BUDGET_REV _START Type: investmentDateTimeType
- budgetRevFinish Optional. Table and Column: FIN_FINANCIALS.BUDGET_REV _FINISH


Type: investmentDateTimeType - budgetRevOnHold Optional.
Table and Column: FIN_FINANCIALS.BUDGET _REV_ONHOLD Type: investmentDateTimeType - budgetRevResumed Optional. Table and Column: FIN_FINANCIALS.BUDGET _REV_RESUMED Type: investmentDateTimeType - forecastCostTotal Optional. Table and Column: FIN_FINANCIALS.FORECAST _CST_TOTAL Type: nonNegativeDouble - forecastCostStart Optional. Table and Column: FIN_FINANCIALS.FORECAST _CST_START Type: investmentDateTimeType - forecastCostFinish Optional. Table and Column: FIN_FINANCIALS.FORECAST _CST_FINISH Type: investmentDateTimeType - forecastCostOnHold Optional. Table and Column: FIN_FINANCIALS.FORECAST _CST_ONHOLD Type: investmentDateTimeType - forecastCostResumed Optional. Table and Column: FIN_FINANCIALS.FORECAST _CST_RESUMED Type: investmentDateTimeType - forecastRevTotal Optional. Table and Column: FIN_FINANCIALS.FORECAST _REV_TOTAL Type: nonNegativeDouble - forecastRevStart Optional. Table and Column: FIN_FINANCIALS.FORECAST _REV _START Type: investmentDateTimeType - forecastRevFinish Optional. Table and Column: FIN_FINANCIALS.FORECAST _REV _FINISH Type: investmentDateTimeType - forecastRevOnHold Optional. Table and Column: FIN_FINANCIALS.FORECAST _REV_ONHOLD Type: investmentDateTimeType - forecastRevResumed Optional. Table and Column: FIN_FINANCIALS.FORECAST _REV_RESUMED Type: investmentDateTimeType - plannedNPV Optional. Table and Column: FIN_FINANCIALS.PLANNED_NPV Type: Number - plannedROI Optional. Table and Column: FIN_FINANCIALS.PLANNED_ROI Type: Number - plannedBreakEven No Optional. Table and Column: FIN_FINANCIALS.PLANNED_BREAKEVEN Type: investmentDateTimeType - budgetNPV Optional.

Clarity - 16.4.1 4355

Table and Column: FIN_FINANCIALS.BUDGET_NPV Type: Number - budgetROI Table and Column: FIN_FINANCIALS.BUDGET_ROI Type: Number - budgetBreakEven Optional. Table and Column: FIN_FINANCIALS.BUDGET_BREAKEVEN Type: investmentDateTimeType - setBudgetValuesEqualToPlannedValues Optional. Table and Column: Type: Boolean - calculateFinancialMetrics Optional. Table and Column: Type: Boolean - initialInvestment This column refers to the initial, lump sum cost that is associated with an investment Table and Column: FIN_FINANCIALS.INITIAL_INVESTMENT Type: Number - plannedIRR Internal Rate of Return on investment as calculated from the planned costs and planned benefits. Used only in a XOG read result. Table and Column: FIN_FINANCIALS.PLANNED_IRR Type: Number - plannedMIRR Modified internal rate of return on an investment as calculated from the planned costs and planned benefits. Used only in a XOG read result. Table and Column: FIN_FINANCIALS.PLANNED_MIRR Type: Number - plannedPaybackPeriod Payback period of investment as calculated from the planned costs and planned benefits. Used only in a XOG read result. Table and Column:FIN_FINANCIALS.PLANNED_PAYBACK_PERIOD Type: Number - budgetIRR Internal rate of return on an investment as calculated from the budgeted costs and budgeted benefits. Used only in a XOG read result. Table and Column: FIN_FINANCIALS.BUDGET _IRR Type: Number - budgetMIRR Modified internal rate of return on an investment as calculated from the budgeted costs and budgeted benefits. Used only in a XOG read result. Table and Column: FIN_FINANCIALS.BUDGET_MIRR Type: Number - budgetPaybackPeriod Payback Period of investment as calculated from the budgeted costs and budgeted benefits. Used only in XOG read result. Table and Column: FIN_FINANCIALS.BUDGET _PAYBACK_PERIOD Type: Number - useSystemDefinedTotalCostOfCapital This column indicates whether an investment uses the system-defined reinvestment rate % for financial metrics calculations. Table and Column: FIN_FINANCIALS.IS_SYS_VAL_FOR_TCC Type: Boolean - investmentDefinedTotalCostOfCapital Investment-specific total cost of capital percentage that is used for financial metrics calculations that are based on the value of IS_SYS_VAL_FOR_TCC.

Table and Column: FIN_FINANCIALS.TOTAL_COST_OF_CAPITAL Type: Number - useSystemDefinedReinvestmentRate Indicates whether an investment uses the system-defined total cost of capital percentage for financial metrics calculations. Table and Column: FIN_FINANCIALS.IS_SYS_VAL_FOR_RR Type: Boolean - investmentDefinedReinvestmentRate Investment-specific reinvestment rate percentage that is used for financial metrics calculations that are based on the value of IS_SYS_VAL_FOR_RR Table and Column: FIN_FINANCIALS.REINVESTMENT_RATE Type: String
XOG: Inbound Transaction - inboundTransactionType Schema Tag
Use the inbound transaction XOG object to view inbound and outbound inbound transactions. Inbound transactions are the cost and revenue that is posted for tasks or investments. Schema Name nikuxog_inboundTransaction.xsd Read and Write XML Files The following XML files are included: - imp_transactions_read.xml. Use this file to export inbound incident attributes from Classic PPM. - imp_transactions_read.xml. Use this file to import inbound incident attributes that were previously exported from
Classic PPM. Prerequisites None Read Filters The following explicit read filters are used: - projectID: Defines the name of the investment. - clientID: Defines the company unique identifier. - transactionSource: Defines the transaction source. - transactionDate: Defines the date of the transaction. Error Handling The following error can be thrown: - Wip Transaction Object read failed.
inboundTransactionType Schema Tag The inboundTransactionType tag is part of the schema mapping for the inbound transaction XOG object. This schema tag has the following attributes: - groupId: Optional. The unique group identifier for the voucher entry. Use the same ID if more than one detail row is
available. Table and Column: PPA_TRANSCONTROLAPINFO.ID

Type: Double - voucherNumber: Optional. The unique voucher number for the voucher entry. Use the same ID if more
than one detail row is available. The value is mandatory if a group ID is specified.Table - Field Name: PPA_TRANSCONTROLAPINFO.VOUCHERNO Type: String - poNumber: Optional. The PO number for the voucher entry. Table and Column: PPA_TRANSCONTROLAPINFO.PONO Type: String - vendorCode: Optional. The vendor code or the incurred by value for expense type of transactions. Table and Column: PPA_TRANSCONTROLAPINFO.VENDOR_CODE Type: String - incurredBy: Optional. The vendor code or the incurred by value for expense type of transactions. Table and Column: PPA_TRANSCONTROLAPINFO.INCURRED_BY Type: String - externalId: Optional. The unique external ID for the voucher entry. The value is Mandatory. Table and Column: IMP_TRANSACTIONIMPORT.EXTERNAL_ID Type: String - actualCostRate: Optional. The cost rate per unit for the voucher entry (must be a valid number). If a value is not specified, then cost is retrieved from the rate matrix. Table and Column: IMP_TRANSACTIONIMPORT.COST Type: Double - actualCostRateCurrency: Optional. The ISO Currency code for actual cost rate. Table and Column: IMP_TRANSACTIONIMPORT.COST_CURRENCY Type: String - billRate: Optional. The billing rate per unit for the voucher entry (must be a valid number). If a value is not specified, then rate is retrieved from the rate matrix. Table and Column: IMP_TRANSACTIONIMPORT.RATE Type: Double - billRateCurrency: Optional. The ISO currency code for bill rate. Table and Column: IMP_TRANSACTIONIMPORT.RATE_CURRENCY Type: String - importStatus: Optional. The import status for the voucher entry. The only value that is allowed is 'N' which means New. Table and Column: IMP_TRANSACTIONIMPORT.IMPORTSTATUS Type: String - importDate:Optional. The date the transaction was imported. If a value is not specified, then current server date is used. Table and Column: IMP_TRANSACTIONIMPORT.IMPORTDATE Type: String
XOG: Incident
Use the incident XOG object to view inbound and outbound incident instances.
- Incidents Schema Tag - Incident Description Schema Tag
Schema Name

nikuxog_incident.xsd
Read and Write XML Files
The following XML files are included:
- incident_read.xml. Use this file to export incident object instances from Classic PPM. - incident_write.xml. Use this file to import incident object instances that were previously exported from Classic PPM.
Prerequisites
The referred investment must exist in the system.
Read Filters
None
Error Handling
The following errors can be thrown:
- Required fields: Ensures all required fields have values. - Incident type is not valid. - Status is not valid. - Priority is not valid. - Urgency is not valid. - Impact is not valid. - Category is not valid. - Assigned To Code is not valid. - Reported By Code is not valid. - Assigned Project Manager Code is not valid. - External Source is not valid. - Investment Object {0} is not valid. - Resource for Effort is not valid. - Failed to export incident. - Failed to export category. - Failed to import incident. - Failed to import category. - Estimated Time to Complete cannot be negative. - Investment ID is not valid. - Required attribute categoryCode is missing.
Incidents Schema Tag
The incidents tag is part of the schema mapping for the incident XOG object. This tag is a placeholder for multiple incidents.
incident
The actual incident object. Incident has the following attributes:
- incident_code: Required. Defines the unique incident code. Table and Column: incidents.departcode Type: String
- short_description: Required. Defines the incident name. Table and Column: incidents.shortdesc


Type: String - dept_identifier: Defines the general ledger segment value that is mapped to this incident.
Table and Column: incidents.departidentifier Type: String - default_reviewer: Defines the default reviewer for the incident. Table and Column: incidents.default_reviewer Type: String - alt_default_reviewer: defines the alternate reviewer for the incident. Table and Column: incidents.alt_default_reviewer Type: String - parent_incident_code: Defines the code for the parent incident. Table and Column: parent_incident_id Type: String - dept_manager_code: The incident manager resource code. Table and Column: incidents.incident_manager_id Type: String - brm_code: Defines the business relationship manager. Table and Column: brm_id Type: String - entity: Required. Identity for the entity to which the incident belongs. Table and Column: incidentS.entity_id Type: String - delegate_invoice_approval: Indicates if the incident delegates invoice approval. Table and Column: incidentS.delegate_inv_appr Type: Integer


Incident Description Schema Tag
The description tag is part of the schema mapping for the incident XOG object. This tag is a placeholder tag for multiple incidents, and has the following attributes:
- description Optional. Defines the description of the incident. Table and Column: IMM_INCIDENTS.DESCRIPTION Type: String

XOG: Investment
Multiple objects use the investment XOG object, all of which share a common foundation and common schema (nikuxog_inv_common.xsd). The schema definition that is contained in this common file with the extended schema definition in a specialized investment file together make up the schema for a particular investment type.
The investment object is an abstract object that you can only create as one of the following objects which extend the base investment object:
- Project - Classes
Schema Name
nikuxog_inv_common.xsd
Read and Write XML Files


You can read or write investments in their specific investment type, such as application, asset, or product. Generic read and write XML example files for investments are included with the XOG client application. Prerequisites Any referenced resources (for example, managerName) should already exist in Classic PPM. Business Rules and Processing Objects which are based on the Investment object are defined for inbound (write) and outbound (read) processing. The abstract Investment object itself cannot be written to or read from Classic PPM. Read Filters The following explicit read filters are used: - objectID. The investment object's unique ID. - managerUserName. The name of the investment manager. - lastUpdatedDate. The date when the investment was last modified. Error Handling The following errors can be thrown:
- Exports are truncated if the number of Application objects retrieved is larger than the system default: 5000. This setting

can be overridden by setting the argument args_maxrecords with a new max.
- Charge code does not exist in the System.
- Goal code does not exist in the System.
- Category code does not exist in the System.
- Process code does not exist in the System
- Stage code does not exist in the System.
- Approver does not exist in the System.
- Currency must be active; on a multicurrency system it must have an exchange rate configured against the base

currency.
- Entity Code 'XXX' does not exist in the System at this time. Please re-run the XOG if it exists now.
- Invalid Chargeback Type with name 'XXX'. This Chargeback Type could not be found in the System
- Invalid Bill Expense Type with name 'XXX'. This Bill Expense Type could not be found in the System.
- XOG user does not have Approval right for objects of type 'XXX'; status of 'YYY' remains unchanged.
- Application with code 'XXX' does not exist in the System, and hence the Service is not updated with Application Code.
- Target Manager User Name 'XXX' passed in does not exist in the system.
- Investment has financial plans hence entityCode value "XXX" cannot be changed to YYY"
- Investment has posted transactions hence entityCode value "XXX" cannot be changed to YYY".
- OBS is Lowest Unit for 'XXX'. This unit path is not the lowest unit in its branch
- OBS unit (XXX) is invalid.
- OBS unit path (XXX) is invalid. So, the OBS Association was not made.
- OBS id (XXX) is invalid. So, the OBS Association was not made.
- OBS unit path is invalid. So the OBS security was not setup.
- OBS unique name is invalid. So the OBS security was not setup.
- Group is invalid. So the Group security was not setup.
- User is invalid. So the User security was not setup.
- {$departcode} and {$locationid} are not associated
- {$locationid} cannot be found
- {$departcode} cannot be found
- Rate Matrix with name XXX referenced in field YYY does not exist in the System at this time. Please re-run the XOG if

it exists now.
- Invalid Exchange Rate Type with name XXX found for YYY. Default value Average will be used instead.
- The allocation status: 'XXX' is invalid.
- The chargeback type: 'XXX' is invalid. Should be DEBIT or CREDIT.
- The chargeback subtype: 'XXX' is invalid. Should be STANDARD or INVESTMENT or OVERHEAD.
- The chgRemtoOverhead has to be 0 or 1.
- The allocation code is required.
- Cannot determine allocation type from {$cbk_type} and {$cbk_subtype}.
- Resource Class -- XXX is invalid.
- Charge Code -- XXX is invalid.
- Investment -- XXX is invalid.
- Investment -- XXX contains Allocation -- YYY that is already in use by another investment.
- Investment - XXX contains Allocation -- YYY that is already in use by global allocation.
- User Value 1 -- XXX is invalid.
- User Value 2 -- XXX is invalid.
- Transaction Class -- XXX is invalid.
- Input Type -- XXX is invalid.
- Gl Account -- {$acctMain} - {$acctSub} is invalid.
- Department -- XXX is invalid.
- The Scenario Dependency specified - XXX- would cause a circular reference; not added.
- The Scenario Dependency specified - XXX - is not active or does not exist.
- Missing Edit permission on XXX object; Scenario Dependencies not added.
- Specified parent investment XXX does not exist in the System at this time. Please re-run the XOG if it exists now.
- Unable to add XXX as a parent investment, due to circular dependencies.

<ErrorInformation> <Severity>FATAL</Severity> <Description>[Error] :1:1: attribute "disableTSVUpdate" has a bad value: "yes" does not satisfy the
"boolean" type Invalid attribute in input document. Please remove all instances of attribute from document elements
and try again. [Element : Asset, Attribute : disableTSVUpdate ].
</Description> <Exception type="java.lang.Exception">Invalid xml data</Exception> </ErrorInformation>
Schema Mapping The Investment XOG object is composed of the following. - Investment Schema Tag - Allocations Schema Tag - Details Schema Tag - Financial Transaction (scenarioDependencies) Schema Tag - InvestmentAssociations Schema Tag - InvestmentBaselines Schema Tag - UsageCurve and CostCurve Schema Tags - InvestmentResources Schema Tag - InvestmentTasks Schema Tag - General Schema Tag - OBSAssocs Schema Tag - Custom Information Schema Tag
Investment Schema Tag This tag is part of the schema mapping for the investment XOG object. The actual tag is Asset, Idea, Project, or any other investment object. The abstract investment object includes attributes that are related to general properties of the investment, budgeting for the investment, and financial charges information. An investment is composed of the following sub elements: - Allocations - scenarioDependencies - InvestmentAssociations - InvestmentBaselines - InvestmentResources - InvestmentTasks - General - OBSAssocs - CustomInformation For the Idea object, the Allocations element is not supported and InvestmentAssociations may only include parents. The following tables are references in the Investment schema tag:
- INV_INVESTMENTS table contains the shared investment attributes. - FIN_FINANCIALS table contains the shared budget attributes. - PAC_MNT_PROJECTS table contains the shared financial attributes (not applicable for Idea)
The Investment schema tag has the following attributes:
- ID: Required. Specifies the unique ID for the investment. Table and Column: PROJCLASS.ID Type: Number
- investmentClass: Required. Specifies the investment class for the investment. Table and Column: PROJCLASS.PROJCLASS Type: String
- status: Optional. Defines the status of the investment. Values: Unapproved, Approved, Rejected, and CancelledAn idea has three additional statuses: Submitted For Approval, Incomplete, and Converted Table and Column: INV_INVESTMENTS.STATUS Type: Number
- name: Required. The name of the investment. Table and Column: INV_INVESTMENTS.NAME Type: String
- objectID: Optional. Autonumbering is required if it is not present. Table and Column: INV_INVESTMENTS.CODE Type: String
- description: A text description of the investment. Table and Column: INV_INVESTMENTS.DESCRIPTION Type: String
- shortdesc: A short description of the investment. Table and Column: PROJCLASS.SHORTDESC Type: String
- priority: Optional. Defines the priority. Values: 0-36, where:
- 0. Highest priority - 36. Lowest priority
Table and Column: INV_INVESTMENTS.PRIORITY Type: Number - managerUserName: Optional. The name of the manager for the investment. Table and Column: INV_INVESTMENTS.MANAGER_ID Type: String - approvedById: Optional. The name of the Classic PPM user who approved the investment. Table and Column: INV_INVESTMENTS.APPROVEDBY_ID Type: String - chargeCodeExtID: Optional. Table and Column: INV_INVESTMENTS.CHARGECODEID Type: String - createdDate: Optional. Specifies the date that the investment was created. Table and Column: PROJCLASS.CREATED_DATE Type: Date - createdBy: Optional. Specifies who created the investment.


Table and Column: PROJCLASS.CREATED_BY Type: String - updatedBy: Optional. Specifies who last updated the investment. Table and Column: PROJCLASS.UPDATED_BY Type: String - lastUpdatedBy: Optional. The name of the user who last modified the investment. Table and Column: INV_INVESTMENTS.LAST_UPDATED_BY Type: String - lastUpdatedDate: Optional. The date and time when the investment was last modified. Table and Column: INV_INVESTMENTS.LAST_UPDATE_DATE Type: investmentDateTimeType - approvedTime: Optional. The date and time when the investment was approved. Table and Column: INV_INVESTMENTS.APPROVEDTIME Type: investmentDateTimeType - processCode: Optional. The process that is associated with the investment. Table and Column: INV_INVESTMENTS.PROCESS_CODE Type: investmentCodeType - stageCode: Optional. The stage within the investment process. Table and Column: INV_INVESTMENTS.STAGE_CODE Type: investmentCodeType - goalCode: Optional. The business goal of the investment. Table and Column: INV_INVESTMENTS.GOAL_CODE Type: investmentCodeType - alignment: Optional. The numeric indicator of alignment with business goals from 0 through 100. Table and Column: INV_INVESTMENTS.ALIGNMENT Type: Number - risk: Optional. The risk that is associated with the investment. Table and Column: INV_INVESTMENTS.RISK Type: Number - statusIndicator: Optional. The graphical indicator of the investment status. Table and Column: INV_INVESTMENTS.STATUS_INDICATOR Type: Number - statusComment: Optional. The text description of investment status. Table and Column: INV_INVESTMENTS.STATUS_COMMENT Type: String - progress: The numeric code for investment progress (Not Started, Started, or Completed). Default: 0 - Not Started. Table and Column: INV_INVESTMENTS.PROGRESS Type: Number - currencyISOcode: Optional. The ISO code for the currency that is associated with the investment. Table and Column: INV_INVESTMENTS.CURRENCY_CODE Type: String - openForTimeEntry: Optional. Table and Column: INV_INVESTMENTS.IS_OPEN_FOR_TE Type: Boolean - start: Optional. Table and Column: INV_INVESTMENTS.SCHEDULE_START

Clarity - 16.4.1 4365


Type: investmentDateTimeType - finish: Optional.
Table and Column: INV_INVESTMENTS.SCHEDULE_FINISH Type: investmentDateTimeType - cbkType: Optional. Refers to PRTIMEENTRY_USERLOV1. Table and Column: INV_INVESTMENTS.CBK_TYPE Type: String - entityCode: Optional. Table and Column: INV_INVESTMENTS.ENTITY_CODE Type: String - BillExpenseType: Optional. Either CAPITAL_EXPENDITURE or DEPRECIATION. Table and Column: INV_INVESTMENTS.BILL_EXPENSE_TYPE Type: String - trackMode: Optional. Table and Column: INV_INVESTMENTS.TRACK_MODE Type: Number - chargeCodeID: Optional. Table and Column: INV_INVESTMENTS.CHARGECODEID Type: String - requiredForScenarios: Optional. Type: Boolean - plannedCostStart: Optional. Table and Column: FIN_FINANCIALS.PLANNED_CST_START Type: investmentDateTimeType - plannedCostFinish: Optional. Table and Column: FIN_FINANCIALS.PLANNED_CST_FINISH Type: investmentDateTimeType - plannedBenTotal: Optional. Table and Column: FIN_FINANCIALS.PLANNED_BEN_TOTAL Type: nonNegativeDouble - plannedBenStart: Optional. Table and Column: FIN_FINANCIALS.PLANNED_BEN_START Type: investmentDateTimeType - plannedBenFinish: Optional. Table and Column: FIN_FINANCIALS.PLANNED_BEN_FINISH Type: investmentDateTimeType - budgetCostStart: Optional. Table and Column: FIN_FINANCIALS.BUDGET_CST_START Type: investmentDateTimeType - budgetCostFinish: Optional. Table and Column: FIN_FINANCIALS.BUDGET_CST_FINISH Type: investmentDateTimeType - budgetCostOnHold: Optional. Table and Column: FIN_FINANCIALS.BUDGET_CST_ONHOLD Type: investmentDateTimeType - budgetCostResumed: Optional. Table and Column: FIN_FINANCIALS.BUDGET_CST_RESUMED

Clarity - 16.4.1 4366


Type: investmentDateTimeType - budgetRevTotal: Optional.
Table and Column: FIN_FINANCIALS.BUDGET_REV_TOTAL Type: nonNegativeDouble - budgetRevStart: Optional. Table and Column: FIN_FINANCIALS.BUDGET_REV_START Type: investmentDateTimeType - budgetRevFinish: Optional. Table and Column: FIN_FINANCIALS.BUDGET_REV_FINISH Type: investmentDateTimeType - budgetRevOnHold: Optional. Table and Column: FIN_FINANCIALS.BUDGET_REV_ONHOLD Type: InvestmentDateTimeType - budgetRevResumed: Optional. Table and Column: FIN_FINANCIALS.BUDGET_REV_RESUMED Type: investmentDateTimeType - forecastCostTotal: Optional. Table and Column: FIN_FINANCIALS.FORECAST_CST_TOTAL Type: nonNegativeDouble - forecastCostStart: Optional. Table and Column: FIN_FINANCIALS.FORECAST_CST_START Type: investmentDateTimeType - forecastCostFinish: Optional. Table and Column: FIN_FINANCIALS.FORECAST_CST_FINISH Type: investmentDateTimeType - forecastCostOnHold: Optional. Table and Column: FIN_FINANCIALS.FORECAST_CST_ONHOLD Type: investmentDateTimeType - forecastCostResumed: Optional. Table and Column: FIN_FINANCIALS.FORECAST_CST_RESUMED Type: investmentDateTimeType - forecastRevTotal: Optional. Table and Column: FIN_FINANCIALS.FORECAST_REV_TOTAL Type: nonNegativeDouble - forecastRevStart: Optional. Table and Column: FIN_FINANCIALS.FORECAST_REV_START Type: investmentDateTimeType - forecastRevFinish: Optional. Table and Column: FIN_FINANCIALS.FORECAST_REV_FINISH Type: investmentDateTimeType - forecastRevOnHold: Optional. Table and Column: FIN_FINANCIALS.FORECAST_REV_ONHOLD Type: investmentDateTimeType - forecastRevResumed: Optional. Table and Column: FIN_FINANCIALS.FORECAST_REV_RESUMED Type: investmentDateTimeType - plannedNPV: Optional.

Clarity - 16.4.1 4367


Table and Column: FIN_FINANCIALS.PLANNED_NPV Type: Number - plannedROI: Optional. Table and Column: FIN_FINANCIALS.PLANNED_ROI Type: Number - plannedBreakEven: Optional. Table and Column: FIN_FINANCIALS.PLANNED_BREAKEVEN Type: investmentDateTimeType - plannedIRR Optional. Table and Column: FIN_FINANCIALS.PLANNED_IRR Type: Number - plannedMIRR: Optional. Table and Column:FIN_FINANCIALS.PLANNED_MIRR Type: Number - plannedPaybackPeriod: Optional. Table and Column:FIN_FINANCIALS.PLANNED_PAYBACK_PERIOD Type: string - budgetNPV: Optional. Table and Column: FIN_FINANCIALS.BUDGET_NPV Type: Number - budgetROI: Optional. Table and Column: FIN_FINANCIALS.BUDGET_ROI Type: Number - budgetBreakEven: Optional. Table and Column: FIN_FINANCIALS.BUDGET_BREAKEVEN Type: investmentDateTimeType - budgetIRR: Optional. Table and Column: FIN_FINANCIALS.BUDGET_IRR Type: Number - budgetMIRR: Optional. Table and Column: FIN_FINANCIALS.BUDGET_MIRR Type: Number - budgetPaybackPeriod: Optional. Table and Column: FIN_FINANCIALS.BUDGET_PAYBACK_PERIOD Type: String - forecastNPV: Optional. Table and Column: FIN_FINANCIALS.FORECAST_NPV Type: Number - forecastROI: Optional. Table and Column: FIN_FINANCIALS.FORECAST_ROI Type: Number - forecastBreakEven: Optional. Table and Column: FIN_FINANCIALS.FORECAST_BREAKEVEN Type: investmentDateTimeType - forecastEqualsBudget: Optional. Table and Column: FIN_FINANCIALS.IS_FCST_EQ_BDGT

Clarity - 16.4.1 4368


Type: Boolean - calculatePresentValueInfo: Optional.
Table and Column: FIN_FINANCIALS.IS_CALC_PV_INFO Type: Boolean - financialLocation: Optional. Table and Column: PAC_MNT_PROJECTS.LOCATIONID Type: String - financialDepartment: Optional. Table and Column: PAC_MNT_PROJECTS.DEPARTCODE Type: String - financialProjectClass: Optional. Table and Column: PAC_MNT_PROJECTS.CLASS Type: String - financialWipClass: Optional. Table and Column: PAC_MNT_PROJECTS.WIPCLASS Type: String - laborRateSource: Optional. Table and Column: PAC_MNT_PROJECTS.TRANSRATESOURCELABOR Type: String - laborCostSource: Optional. Table and Column: PAC_MNT_PROJECTS.TRANSCOSTSOURCELABOR Type: String - laborExchangeRateType: Optional. Table and Column: PAC_MNT_PROJECTS.LABOR_EXCHANGE_RATE_TYPE Type: String - materialRateSource: Optional. Table and Column: PAC_MNT_PROJECTS.TRANSRATESOURCEMATERIALS Type: String - materialCostSource: Optional. Table and Column: PAC_MNT_PROJECTS.TRANSCOSTSOURCEMATERIALS Type: String - materialExchangeRateType: Optional. Table and Column: PAC_MNT_PROJECTS.MATERIALS_EXCHANGE_RATE_TYPE Type: String - equipmentRateSource: Optional. Table and Column: PAC_MNT_PROJECTS.TRANSRATESOURCEEQUIPMENT Type: String - equipmentCostSource: Optional. Table and Column: PAC_MNT_PROJECTS.TRANSCOSTSOURCEEQUIPMENT Type: String - equipmentExchangeRateType: Optional. Table and Column: PAC_MNT_PROJECTS.EQUIPMENT_EXCHANGE_RATE_TYPE Type: String - expenseRateSource: Optional. Table and Column: PAC_MNT_PROJECTS.TRANSRATESOURCEEXPENSES Type: String - expenseCostSource: Optional.

Clarity - 16.4.1 4369

Table and Column: PAC_MNT_PROJECTS.TRANSCOSTSOURCEEXPENSES Type: String - expenseExchangeRateType: Optional. Table and Column: PAC_MNT_PROJECTS.EXPENSE_EXCHANGE_RATE_TYPE Type: String - expenseExchangeRateType: Optional. Table and Column: Type: - plannedCostOperatingTotal: Optional. Refers to planned operating cost of an investment. Table and Column: FIN_FINANCIALS.PLANNED_CST_OPERATING_TOTAL Type: Double - plannedCostCapitalTotal: Optional. Refers to planned capital cost of an investment. Table and Column: FIN_FINANCIALS.PLANNED_CST_CAPITAL_TOTAL Type: Double - budgetCostOperatingTotal: Optional. Refers to budget operating cost of an investment. Table and Column: FIN_FINANCIALS.BUDGET_CST_OPERATING_TOTAL Type: Double - budgetCostCapitalTotal: Optional. Refers to budget capital cost of an investment. Table and Column: FIN_FINANCIALS.BUDGET_CST_CAPITAL_TOTAL Type: Double
- disableTSVUpdate Optional. Available in Classic PPM 15.6 or newer. Table and Column: Not applicable for this virtual attribute. Type: Boolean
TIP
New disableTSVUpdate Attribute in XOG Import Files for Projects and Investments
In releases before 15.6, a XOG import (write) file, specifically for a project or non-project investment that included the optional openForTimeEntry attribute and associated resources who were also being allocated to a team (a special type of resource introduced in 15.5) through the same XOG import file, would cycle through all the assignments in the investment. This behavior could result in performance issues, especially during attempts to import large numbers of resources (for example, more than 10,000).
- When adding a resource to a team for an investment in the new or Classic PPM user interface, the application appends the ETC or actuals to the previously-generated slice curve.
- When adding a resource through the XOG, the existing time-scaled value (TSV) curves are unknown and cannot be accessed; instead, the XOG import causes the application to regenerate all TSV curves for all assignments in the investment.
To improve XOG performance in Clarity 15.6 or higher, include the new disableTSVUpdate XOG attribute in your XOG import file:
- If set to true, the XOG import does not attempt to process the aggregated TSV values; instead, administrators run the Investment Allocation job to update the aggregated totals.
- If the attribute is set to false or excluded from the import file, the functionality remains the same as the previous release.
Allocations Schema Tag
This tag is part of the schema mapping for the financial transaction XOG object.
The Allocations element consists of zero or more allocations. Each Allocation can contain zero or more Detail objects and zero or more CustomInformation objects. The Allocations element at this level indicates the financial allocations that are

used to track charges against different organizational units (for example, a department). The attributes of this tag do not reference tables or columns.
The Allocations schema tag has the following attributes:
- allocationCode: Required. Type: String
- entityCode: Optional. Type: String
- locationCode: Optional. Type: String
- departmentCode: Optional. Type: String
- resourceClassCode: Optional. Type: String
- chargeCode: Optional. Type: String
- investmentCode: Optional. Type: String
- tableName: Optional. Type: String
- utilityCode1: Optional. Type: String
- utilityCode2: Optional. Type: String
- transactionClassCode: Optional. Type: String
- transactionClassCode: Optional. Type: String
- statusCode: Optional. The status of the allocation. Type: String
- chgRemtoOverhead: Optional. Type: Boolean
- cbkType: Required. Type: String
- cbkSubtype: Required. Type: String
Details Schema Tag
This tag is part of the schema mapping for the Financial Transaction XOG object.
The Details element consists of zero or more allocations. Each Detail object can contain zero or more CustomInformation objects. The Detail object can contain a TSV curve consisting of a percentage. The attributes of this tag do not reference tables or columns.
The Details schema tag has the following attributes:
- glAccountMain: Required. Type: String
- glAccountSub: Required.


Type: String - department: Required.
Type: String - flatAmount: Optional.
Type: Number - weightable: Optional.
Type: Number


Financial Transaction (scenarioDependencies) Schema Tag
This tag is part of the schema mapping for the Financial Transaction XOG object.
The scenarioDependencies element consists of zero or more scenarioDependency elements. This tag reads data from Classic PPM and confirms that the dependency exists when writing to Classic PPM. If the dependency does not exist, a warning is logged.
The scenarioDependencies schema tag has the following attributes:
- objectInstanceCode: Required. Table and Column: INV_INVESTMENTS.CODE Type: String
- name: Optional. Table and Column: INV_INVESTMENTS.NAME Type: String
- objectType: Optional. Table and Column: ODF_CA_INV.NAME Type: investmentObjectCodeType
- delete: Optional. Table and Column: not applicable Type: Boolean

InvestmentAssociations Schema Tag
This tag is part of the schema mapping for the Financial Transaction XOG object.
The InvestmentAssociations element consists of zero or more Allocations and Hierarchies elements. Allocations refer to the parent investments of the current investment and Hierarchies to the child investments of the current investments.
Allocations
The Allocations element at this level determines what percentage of the cost of an investment will be included in any parent investment (for example, Oracle may be used by three different applications, so the cost of Oracle can be split between the three applications). The allocations element is a wrapper for zero or more ParentInvestment elements.
- ParentInvestment: The ParentInvestment element can contain the following attributes, in addition to zero or more CustomInformation elements: - InvestmentID: Required. The ID of the immediate parent of the current investment. Table and Column: INV_HIERARCHIES.PARENT_ID Type: investmentIDType - InvestmentType: Required. Table and Column: None


Type: investmentObjectCodeType - defaultAllocationPercent: Required. The percentage of the child budget and staff cost to allocate to the parent.
This attribute must total to either "0" or "1" because an investment must be either completely allocated to its parents or completely unallocated. Table and Column: INV_HIERARCHIES.DEFAULT_ALLOC_PCT Type: Number
Hierarchies
The Hierarchies element is a wrapper for zero or more ChildInvestment elements.
ChildInvestment
The ChildInvestment element can contain zero or more CustomInformation elements and the following attributes:
- InvestmentID: Required. The ID of the immediate child of the current investment. Table and Column: INV_HIERARCHIES.CHILD_ID Type: investmentIDType
- InvestmentType: Required. Table and Column: None Type: investmentObjectCodeType
- defaultAllocationPercent: Optional. The percentage of the child budget and staff cost to allocate to the parent. Table and Column: INV_HIERARCHIES.DEFAULT_ALLOC_PCT Type: Number
InvestmentBaselines Schema Tag
This tag is part of the schema mapping for the Financial Transaction XOG object.
The InvestmentBaselines schema tag contains the following attributes including zero or more InvestmentBaseline elements. Each InvestmentBaseline element can contain a BaselineDetails element.
- revisionID: Required. Table and Column: PRJ_BASELINES.CODE Type: String
- delete: Optional. Table and Column: None Type: Boolean
- currentRevision: Required. Table and Column: PRJ_BASELINES.IS_CURRENT Type: Boolean
- name: Required. Table and Column: PRJ_BASELINES.NAME Type: String
- description: Optional. Table and Column: PRJ_BASELINES.DESCRIPTION Type: String
BaselineDetails
The BaselineDetails element contains detailed usage or cost curves for a baseline.
- start: Optional. Table and Column: PRJ_BASELINES_DETAILS.START_DATE


Type: projectDateTimeType - finish: Optional.
Table and Column: PRJ_BASELINES_DETAILS.FINISH_DATE Type: projectDateTimeType - usageSum: Optional. Table and Column: PRJ_BASELINES_DETAILS.USAGE_SUM Type: Number - costSum: Optional. Table and Column: PRJ_BASELINES_DETAILS.COST_SUM Type: Number - duration: Optional. Table and Column: PRJ_BASELINES_DETAILS.DURATION Type: Number


UsageCurve and CostCurve Schema Tags
These tags are part of the schema mapping for the Financial Transaction XOG object. The curve elements contain segment objects which specify cost or usage over a period of time. The UsageCurve and CostCurve schema tags have the following attributes:
- start: Required. Table and Column: None Type: projectDateTimeType - finish: Required. Table and Column: None Type: projectDateTimeType - sum: Required. Table and Column: None Type: Number

InvestmentResources Schema Tag
This tag is part of the schema mapping for the Financial Transaction XOG object. The InvestmentResources element contains zero or more Resource elements that make up the Team element for an investment. This tag includes the following attributes:
Resource
- availFrom: Optional. If the Team field is not set, use the investment start. Table and Column: PRTEAM.pravailstart Type: Date
- availTo: Optional. If the team field is not set, use the investment finish. Table and Column: PRTEAM.pravailfinish Type: Date
- openForTimeEntry: Optional. Table and Column: PRTEAM.prisopen Type: Boolean
- bookingStatus: Optional. Table and Column: PRTEAM.prbooking Type: Integer
- requestStatus: Optional. Table and Column: PRTEAM.prstatus Type: Integer
- defaultAllocation: Optional. Table and Column: PRTEAM.pralloccurve Type: Float
- resourceID: Required.


Table and Column: PRTEAM.prresourceid Type: String - projectRoleID: Optional. Table and Column: PRTEAM.prroleid Type: String - isProjectManager: Optional. Indicates if the resource is the project manager. Table and Column: Not applicable Type: Boolean - lastUpdatedBy: Optional. Table and Column: PRTEAM.last_updated_by Type: String - lastUpdatedDate: Optional. Table and Column: PRTEAM.last_updated_date Type: Date - teamId: Optional. The unique identifier for each team member on an investment. Table and Column: PRTEAM.team_uid Type: String - requirementName: Optional. Table and Column: PRTEAM.requirement_name Type: String
Subelement <Baselines>
A subelement for Resource or Task. This subelement has the following attributes:
- revisionID: Required. Table and Column: PRJ_BASELINES.code Type: String
- costSum: Optional. Table and Column: PRJ_BASELINE_DETAILS.cost_sum Type: Float
- duration: Optional. Table and Column: PRJ_BASELINE_DETAILS.duration Type: Float
- start: Optional. Table and Column: PRJ_BASELINE_DETAILS.start_date Type: Date
- finish: Optional. Table and Column: PRJ_BASELINE_DETAILS.finish_date Type: Date
- usageSum: Optional. Table and Column: PRJ_BASELINE_DETAILS.usage_sum Type: Float
Subelement <AllocCurve>
AllocCurve is a sub element of the Resource element.
- AllocCurve: Optional. A subelement of the Resource element. Table and Column: PRTEAM.prAllocCurve Type: Varied
Subelement <HardAllocCurve>

HardAllocCurve is a sub element of the Resource element.
- HardAllocCurve: Optional. A subelement of the Resource element. Table and Column: PRTEAM.prAllocCurve Type: Varied
Subelement <SkillAssocs>
SkillAssocs is a sub element of the Resource element.
- SkillAssocs: A subelement of the Resource element.
InvestmentTasks Schema Tag
This tag is part of the schema mapping for the Financial Transaction XOG object. The InvestmentTasks element contains zero or more Task elements.
Task
The attributes of the task element are not associated with any table or column. The Task element has the following attributes
- internalTaskID: Optional. Type: String
- delete: Optional. Type: Boolean
- taskID: Optional. Type: String
- name: Optional. Type: String
- parent: Optional. Type: String
- firstChildOf: Optional. Type: String
- lastChildOf: Optional. Table and Column: Not applicable Type: String
- nestSiblingOf: Optional. Type: String
- orderID: Optional. Type: Number
- outlineLevel: Optional. Type: Number
- start: Optional. Type: projectDateTimeType
- baseStart: Optional. Type: projectDateTimeType
- finish: Optional. Type: projectDateTimeType
- baseFinish: Optional. Type: projectDateTimeType
- milestone: Optional. Type: Boolean
- summary: Optional.


Type: Boolean - key: Optional.
Type: Boolean - category: Optional.
Type: String - status: Optional.
Type: Number - percComp: Optional.
Type: Number - lastUpdatedBy: Optional.
Type: String - lastUpdatedDate: Optional.
Type: projectDateTimeType - priority: Optional.
Type: Number - earlyStart: Optional.
Type: projectDateTimeType - lateStart: Optional.
Type: projectDateTimeType - earlyFinish: Optional.
Type: projectDateTimeType - lateFinish: Optional.
Type: projectDateTimeType - duration: Optional.
Type: Number - baselineDuration: Optional.
Type: Number - totalSlack: Optional.
Type: Number - unplanned: Optional.
Type: Boolean - shortName: Optional.
Type: String - guidelines: Optional.
Type: String - fixed: Optional.
Type: Boolean - lockedForScheduling: Optional.
Type: Boolean - baseFixed: Optional.
Type: Boolean - baseTime: Optional.
Type: projectDateTimeType - critical: Optional.
Type: Boolean - chargeCodeID: Optional.

Clarity - 16.4.1 4377


Type: Number - subproject: Optional.
Type: Boolean - subprojectID: Optional.
Type: String - subprojectTaskID: Optional.
Type: String - subprojectReadOnly: Optional.
Type: Boolean - subprojectIPD: Optional.
Type: Boolean - userText1: Optional.
Type: String - topDownPercent: Optional.
Type: Number - chargeCodeExtID: Optional.
Type: String


General Schema Tag
This tag is part of the schema mapping for the Financial Transaction XOG object. This tag is not associated with tables and columns. This tag has the following attributes:
- addedBy: Optional. Type: String - addedDate: Optional. Type: Date

OBSAssocs Schema Tag This tag is part of the schema mapping for the Financial Transaction XOG object. The OBS Associations tag is also a shared xsd type and a wrapper for the OBSAssoc elements.
Example:
<xs:complexType name="OBSAssocsType"> <xs:annotation> <xs:documentation xml:lang="en"> <... list of OBS Associations ...> <OBSAssocs complete="false"> </xs:documentation>
The OBSAssocs element contains the following element, plus zero or more OBSAssoc subelements. - complete: An optional field that defines whether the OBS associations are complete. When complete is true, existing
OBS associations that are not listed in the import are deleted. When the value is false, the operation inserts and/or updates any existing OBS associations.
NOTE Complete replaces deprecated forms completed and IsComplete.
Default: False Table and Column: None Type: Boolean OBSAssoc Element No tables or columns are associated with the OBSAssoc element. This element has the following attributes: - name: Optional.


Type: String - id: Optional.
Type: String - unitPath: Required. Slash-delimited list of OBS unit names leading to the associated unit for the object. For example:
Example: CAN/BC/VAN Type: String - mode: Optional. Type: OBSRightMode
Custom Information Schema Tag This tag is part of the schema mapping for the Financial Transaction XOG object. The CustomInformation element contains data for custom attributes added to the Investment object.
XOG: Issue - Issue Schema Tag
Use the issue XOG object to view inbound and outbound issue instances. Schema Name nikuxog_issue.xsd Read and Write XML Files The following XML files are included: - issue_read.xml. Use this file to export issue instances from Classic PPM. - issue_write.xml. Use this file to import issue instances that were previously exported from Classic PPM. Prerequisites Before you use this XOG object, verify the referenced objects, such as the project, user, and category, exist in Classic PPM. Read Filters The following explicit read filters are used: - projectCode: Defines the code for the associated project. - Name: Defines the name of the issue. - riskCode: Defines the risk of the issue. - statusCode: Defines the status of the issue. - priorityCode: Defines the priority of the issue. - ownerCode: Defines the name of the owner or assignee of the issue. Error Handling The following errors can be thrown:
- Project does not exist in the system. - Category type is not valid. - Status is not valid. - Priority is not valid. - Owner does not exist in the system. - Impact is not valid. - Resolved By does not exist in the system. - Failed to import risk/issue/change request.
Issue Schema Tag
The issue tag is part of the schema mapping for the issue XOG object. This tag has the following attributes:
- ownerCode: Required. Defines the name of the resource that is assigned to this issue. Table and Column: ASSIGNED_TO Type: String
- categoryTypeCode: Defines the category of this issue. Table and Column: CATEGORY_TYPE_CODE Type: String
- description: Defines the description of this issue. Table and Column: DESCRIPTION Type: String
- code: Required. Defines the unique identifier for this issue. Table and Column: RIM_RISK_ISSUE_CODE Type: String
- impactDate: Defines the impact date for this issue. Table and Column: IMPACT_DATE Type: Date
- name: Required. Defines the name of the issue. Table and Column: NAME Type: String
- priorityCode: Defines the priority of this issue. Table and Column: PRIORITY_CODE Type: String
- projectCode: Required. Defines the project that is associated with this issue. Table and Column: INV_INVESTMENTS.CODE Type: String
- statusCode: Defines the status of this issue. Table and Column: STATUS_CODE Type: String
- resolution: Defines the description of the resolution for this issue. Table and Column: RESOLUTION Type: String
- resolvedBy: Defines the name of the resource who resolved the issue. Table and Column: RESOLVED_BY Type: Number
- resolvedDate: Defines the date when the issue was resolved. Table and Column: RESOLVED_DATE


Type: Date - targetResolutionDate: Defines the date when the issue is expected to be resolved and closed.
Table and Column: TARGET_RESOLUTION_DATE Type: Date


XOG: Location
Use the location XOG object to view inbound and outbound location attributes.
Schema Name
nikuxog_location.xsd
Read and Write XML Files
The following XML files are included:
- locations_read.xml. Use this file to export locations from Classic PPM. - locations_write.xml. Use this file to import locations that were previously exported from Classic PPM. Prerequisites
An entity must exist in Classic PPM.
Business Rules and Processing
When a location is created, a corresponding OBS unit is created in the location OBS referred to by the location's entity.
Read Filters
The following explicit read filter is used:
- Entity The unique entity code for which the locations should be read out. Error Handling
The following attribute values are validated against Classic PPM. If the values do not exist, XOG displays an error message and does not import or update the record.
- Entity Checks if the entity is valid and exists in the system. - Required fields Verifies that all required fields have values. - Department associations Verifies that departments belong to the same entity. In addition, if the department does not
exist, a warning is output.
Schema Mappings
The following schema mappings are provided for locations.
- Locations Schema Tag - Description Schema Tag - DepartmentAssociations Schema Tag - Child Location Schema Tag

Locations Schema Tag The Locations tag is part of the schema mapping for the Location XOG object. A placeholder element for multiple locations. This schema tag has the following elements:
- Location - Description Schema Tag - DepartmentAssociations Schema Tag
Location Element
The Location element is the actual Location object. This element has the following attributes.
- locationCode: Required. The unique code for location. Table and Column: locations.locationid Type: String
- entity: Required. The entity to which the location belongs. Table and Column: locations.entity Type: String
- description: Required. Table and Column: locations.locationdescription Type: String
- shortdescription: Required. Table and Column: locations.shortdesc Type: String
- address1: Optional. Table and Column: locations.address1 Type: String
- address2: Optional. Table and Column: locations.address2 Type: String
- address3: Optional. Table and Column: locations.address3 Type: String
- city: Optional. Table and Column: locations.city Type: String
- zip: Optional. Table and Column: locations.zip Type: String
- countryid: Optional. Table and Column: locations.countryid Type: String
- phone: Optional. Table and Column: locations.phone Type: String
- fax: Optional. Table and Column: locations.fax Type: String
- managerResourceCode: Optional. The manager for location department associations. Table and Column: locations.manager_resource_code Type: String
- name: Required. The name of the location. Table and Column: locations.shortdesc

Clarity - 16.4.1 4382


Type: String - locationManagerCode: Optional. The resource code for location manager.
Table and Column: locations.location_manager_id Type: String - stateprov: Optional. Table and Column: locations.stateprov Type: String


Description Schema Tag The Description schema tag contains the attribute for the location description. - Description: Required. The description of the location. Table and Column: description Type: String

DepartmentAssociations Schema Tag
The placeholder element for multiple department associations. This tag has the following attribute.
- DepartmentAssociation: Represents the department that is associated to the location. This element has the following attribute: - departmentCode: Required. The association to department code. The department must belong to the same entity as the location. Table and Column: LocationDept.dept_id Type: String

Child Location Schema Tag A child location. This element contains all the elements and attributes that the enclosing location has.

XOG: Matrix
Use the matrix XOG object to view inbound and outbound cost/rate matrix instances. Rate matrices give you flexibility in defining cost for particular services or resources.
- Rate Matrix XOG Updates - nikuxog_matrix.xsd Schema - columnType Schema Tag - MatrixRowType Schema Tag - Incremental Rate Matrix Attribute - Incremental Rate Matrix XOG File Examples

Rate Matrix XOG Updates
To update a rate matrix using XOG, unless you use the new incremental flag, include all the rows in the matrix in the XOG input file. The rows in the matrix do not include unique IDs for each row. The update causes a full replace of all rows in the matrix. If you do not include all the matrix rows in the XOG input file, the update removes the existing rows from the matrix and adds only the new rows.
We recommend that you complete the following steps to update an existing rate matrix:
1. Perform a XOG read action to create an output file of all the existing rows in the rate matrix. 2. Update the output file to include any additional rows that you want to add. 3. Perform the XOG write action to update the matrix.


nikuxog_matrix.xsd Schema Read and Write XML Files The following XML files are included: - matrices_read.xml. Use this file to export matrices from Classic PPM. - matrices_write.xml. Use this file to import matrices that were previously exported from Classic PPM. Filters The following explicit read filters are used: - name: The name of the matrix. - type: The type of the matrix (Cost or Rate). - location: The location of the matrix. Error Handling The following errors can be thrown when importing or exporting the cost plan: - Failed to export matrices. - Failed to import matrices. Schema Mappings Mappings for the schema tags are provided.


columnType Schema Tag
This tag is part of the schema mapping for the matrix XOG object. The columns that you assign to a matrix through the XOG are saved to the PPA_MATRIXCOLDEF table.
This tag has the following attribute:
- name: Optional. Defines the list of columns to be added to the matrix rows and has the following attributes: - chargeCode: Defines the charge code for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - clntclass: Optional. Defines the client class for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - company_code: Defines the company code for the matrix row. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - departcode: Defines the department code for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - entity: Defines the entity for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - inputtype: Defines the input type code for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - locationid: Defines the location unique identifier for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME


Type: String - projclass: Defines the project class for the matrix column.
Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - project_code: Defines the project code for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - resourceClass: Defines the resource class for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - resource_code: Defines the resource code for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - resourceRole: Optional. Defines the resource role for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - transactionClass: Optional. Defines the transaction class for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String - projsitecode: Defines the project site code for the matrix column. Table and Column: PPA_MATRIXCOLDEF.FIELDNAME Type: String
MatrixRowType Schema Tag
The MatrixRowType tag is part of the schema mapping for the matrix XOG object. The values for the rows you add to the matrix are saved to a column in the PPA_MATRIXVALUES table.
NOTE
A specific attribute is not tied to a specific ordered value ( VALUE1, VALUE2, and so on) in the matrix. You can configure the columns in a matrix in any order. For example, you can configure a matrix with columns for Resource, Role, Charge Code, and Transaction Class. In this case, the respective attribute data is stored in VALUE1, VALUE2, VALUE3, and VALUE4 for the matrix rows. If you do not define additional columns, the other value fields are not used for that matrix.
This tag has the following attributes:
- fromDate: Optional. Defines the date from which to apply the matrix row. Table and Column: PPA_MATRIXVALUES.FROMDATE Type: Date
- toDate: Optional. Defines the date until which to apply the matrix row. Table and Column: PPA_MATRIXVALUES.TODATE Type: Date
- chargecode: Optional. Defines the chargecode for the matrix row. Table and Column: PPA_MATRIXVALUES.VALUE1 Type: String
- Department: Optional. Defines the department for the matrix row. Table and Column: PPA_MATRIXVALUES.VALUE2 Type: String
- entity: Optional. Defines the entity for the matrix row.


Table and Column: PPA_MATRIXVALUES.VALUE3 Type: String - Input type code: Optional. Defines the input type code for the matrix row. Table and Column: PPA_MATRIXVALUES.VALUE6 Type: String - location: Optional. Defines the location for the matrix row. Table and Column: PPA_MATRIXVALUES.VALUE9 Type: String - Project class: Optional. Defines the project class for the matrix row. Table and Column: PPA_MATRIXVALUES.VALUE8 Type: String - Project : Optional. Defines the project for the matrix row. Table and Column: PPA_MATRIXVALUES.VALUE7 Type: String - Resource class: Optional. Defines the resource class for the matrix row. Table and Column: PPA_MATRIXVALUES.VALUE9 Type: String - Resource: Optional. Defines the resource or team for the matrix row. Table and Column: PPA_MATRIXVALUES.VALUE10 Type: String - rate: Optional. Defines the rate for the matrix row. Table and Column: PPA_MATRIXVALUES.NUMVAL1 Type: Double - standardCost: Optional. Defines the standard cost for the matrix row. Table and Column: PPA_MATRIXVALUES.NUMVAL2 Type: Double - actualCost: Optional. Defines the actual cost for the matrix row. Table and Column: PPA_MATRIXVALUES.NUMVAL3 Type: Double - currencyCode: Optional. Defines the currency code for the matrix row. Table and Column: PPA_MATRIXVALUES.MATRIX_CURRENCY_CODE Type: String - typeCode: Optional. Defines the cost plus code for the matrix row. Table and Column: PPA_MATRIXVALUES.STRVAL1 Type: String


Incremental Rate Matrix Attribute
Clarity 15.4 introduced a new incremental attribute that makes it easier to keep your rate matrix up-to-date at your organization. As an administrator or content developer, you can perform an incremental update or insert to the rate matrix using XOG.
In previous releases, the rate matrix XOG required sending the entire list of rate matrix rows for all matrix columns. To change or add a single rate matrix row, you had to replace the entire list including the past history. Out-of-memory exception errors might occur due to the large size of the XML or the quantity of rate matrix rows in the system. In very large Clarity deployments, you might have used stored procedures or direct insert and update statements.
Rate matrix XOG functionality is enhanced to allow you to specify only an incremental subset of selected rows for insert or update.
- This enhancement supports any previous functionality you already had in place. For example, you can continue to use a legacy process with stored procedures for rate matrix integration.
- The new incremental flag indicates that you want to use the new functionality. Use this setting for incremental inserts of new matrix rows or updates to existing rows instead of replacing the entire rate matrix.
- You can apply the flag at the rate matrix level in the same XOG file.
You can import one rate matrix with the flag while importing another rate matrix in the same XOG file without the flag.
- If your XML content does not include the incremental element, the XOG functionality remains as it was before (full replacement). The full replacement behavior also occurs if your matrix XML header contains incremental = false.
- If your XML content includes incremental = true, the new insert or update operation occurs on the partial rows. The system uses the existing matrix column configuration.
- If no rate matrix exists, the XOG operation creates a new matrix.
The system determines the uniqueness of each rate matrix row. The system checks existing matrix rows for the following data: the From Date plus the selected columns configured in the rate matrix. You can configure each matrix with up to ten optional columns.
- If the system finds an existing matrix row, it updates the static fields on the record. - If the system does not find an existing matrix row, it inserts a new matrix row.
The system continues to use existing static messages and error codes upon completion of XOG actions. For overlapping data ranges, the system also performs all existing validations as it did in previous releases.
When the incremental attribute is true, the system updates existing records with the following information:
- Actual Cost - Standard Cost - Rate - To Date - Currency - Cost Plus Code
You are not required to replace the entire list.
Incremental Rate Matrix XOG File Examples
Example 1: In this case, we set the flag to true. If we need to add a new row or update an existing row, we can import only those rows.
<?xml version="1.0" encoding="UTF-8"?> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/ nikuxog_matrix.xsd">
<Header action="write" externalSource="NIKU" objectType="matrix" version="12.1.1.1047"/> <matrices>
<matrix defaultCurrencyCode="USD" name="RMEXYZLaborMatrix" incremental="true" notes="RMEXYZLaborMatrix" type="Cost/Rate">
<columns> <column name="chargeCode"/>
</columns> <matrixRows>
<matrixRow actualCost="1" chargeCode="*" currencyCode="USD" fromDate="1990-01-01" rate="5" standardCost="3" toDate="2017-12-31"/>
<matrixRow actualCost="1" chargeCode="rmexyz00002" currencyCode="USD" fromDate="1990-01-01" rate="18" standardCost="3" toDate="2017-12-31"/>
</matrixRows>

</matrix> </matrices> </NikuDataBus>
Example 2: In this case, we also set the flag to true. This file inserts the new matrix row with rmexyz00001 and also modifies the row with charge code rmexyz00002. The row with chargeCode="*" remains unchanged.
<?xml version="1.0" encoding="UTF-8"?> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/ nikuxog_matrix.xsd">
<Header action="write" externalSource="NIKU" objectType="matrix" version="12.1.1.1047"/> <matrices>
<matrix defaultCurrencyCode="USD" name="RMEXYZLaborMatrix" incremental="true" notes="RMEXYZLaborMatrix" type="Cost/Rate">
<columns> <column name="chargeCode"/>
</columns> <matrixRows>
<matrixRow actualCost="2" chargeCode="rmexyz00002" currencyCode="USD" fromDate="1990-01-01" rate="28" standardCost="13" toDate="2017-12-31"/>
<matrixRow actualCost="11" chargeCode="rmexyz00001" currencyCode="USD" fromDate="1990-01-01" rate="7" standardCost="22" toDate="2017-01-31"/>
</matrixRows> </matrix> </matrices> </NikuDataBus>
XOG: Non-Project Investment
Use the Non-project Investments XOG object to view inbound and outbound non-project investment object (NPIO) attributes. NPIOs include: - Asset - Application - Product - Other Work Schema Names The following schema files are part of this XOG object: - nikuxog_asset.xsd - nikuxog_application.xsd - nikuxog_product.xsd - nikuxog_otherInvestment.xsd Read and Write XML Files None Business Rules and Processing The following business rules and processing apply to this XOG:
- The non-project investments are flat objects with no hierarchical data. - Each object contains many of the same fields and has essentially the same behavior. - NPIOs are defined for both inbound (write) and outbound (read) processing. On import, if the NPIO exists, it is posted.
Classic PPM verifies that the object type and name matches. If the NPIO does not exist, Classic PPM verifies that the name is unique. If the check passes, the NPIO is created and posted. - The XOG imports and exports the team members, if the NPIO has been staffed. The resources must exist on the target system during an import or the import XOG will fail if the NPIO has team members.
Read Filters
The XOG supports the outbound processing of NPIOs based on the following fields:
- ObjectId: The unique ID for the NPIO. - managerUserName: The name of the NPIO manager. - lastUpdatedDate: The last date when the NPIO was updated.
If all filters are commented out, all NPIOs for the defined type are exported.
Terms
The following terms are used in this section:
- managerUserName: The name of the NPIO manager.The manager is validated against the CMN_SEC_USERS.USER_NAME field. If the manager does not exist, the NPIO is imported without a manager and a warning is posted to the Success and Error file.
- approvedByID: The unique identifier for the NPIO approver.The approver is validated against the CMN_SEC_USERS.USER_NAME field. If the approver does not exist, the NPIO is not imported and a warning is posted to the Success and Error file.
- objectID: The unique identifier for the object.If the objectID:Exists and it matches the ID on a different object type, the object is not imported and an error is posted to the Success and Error file.Does not exist and auto-numbering is not active for the object type, the object is not imported and an error is posted to the Success and Error file.
- chargeCodeExtID: The charge code associated to the NPIO.The charge code is validated against the PRChargeCode table. If the charge code does not exist, the NPIO is not imported and an error is posted to the Success and Error file.
- goalCode: The goal code associated with an NPIO.Validated against the CMN_LOOKUP_TYPE/CMN_LOOKUPS table. If the charge code does not exist, the NPIO is not imported and an error is posted to the Success and Error file.
- processCode: The process code associated with an NPIO.Validated against the CMN_LOOKUP_TYPE/ CMN_LOOKUPS table. If the process code does not exist, the NPIO is not imported and an error is posted to the Success and Error file.
- stageCode: The stage code associated with an NPIO.The stage code is validated against the CMN_LOOKUP_TYPE/ CMN_LOOKUPS table. If the stage code does not exist, the NPIO is not imported and an error is posted to the Success and Error file.
- categoryCode: The category code associated with an NPIO.Validated against the CMN_LOOKUP_TYPE/ CMN_LOOKUPS table. If the category code does not exist, the NPIO is not imported and an error is posted to the Success and Error file.
- currencyISOcode: The currency code associated to the NPIO.The currency code is validated against the CMN_OPTIONS/ CMN_OPTION_VALUES/ CMN_CURRENCIES tables. If the currency is not active or cannot be converted into the base currency, the NPIO is not imported and an error is posted to the Success and Error file.
Schema Mappings
Mappings for the following schema tag names are provided.
- Asset Schema Tag - Application Schema Tag - Product Schema Tag - Other Work Schema Tag - NPIO Common Fields Schema Tag - Service Schema Tag


Asset Schema Tag
This tag is part of the schema mapping for the Non-project Investment XOG object. The asset schema tag has the following attribute:
- totalCostOfOwnership Optional. The minimum is 0. Table and Column: PRJ_PROJECTS.INV_TCO Type: Double
Application Schema Tag
This tag is part of the schema mapping for the Non-project Investment XOG object.
The Application schema tag has the following attributes
- totalCostOfOwnership: Optional. The minimum is 0. Table and Column: PRJ_PROJECTS.INV_TCO Type: Double
- investmentVersion: Table and Column: PRJ_PROJECTS.INV_VERSION Type: String
- supplier: Table and Column: PRJ_PROJECTS.PRJ_PROJECTS.INV_SUPPLIER Type: String
- populationServed: The minimum is 0. Table and Column: Type: Number
- licenseCount: The minimum is 0. Table and Column: Type: Number
- functionPoints: The minimum is 0. Table and Column: Type: Number
- technology: Defines the technology. Values:
- 0. data - 1. desktop - 2. video - 3. voice
Table and Column: Type: Number - platform: Defines the platform. Values:
- 0. HP-UX - 1. Macintosh - 2. Sun - 3. Windows - 4. other Table and Column: Type: Number


Product Schema Tag The product tag is part of the schema mapping for the Non-project Investment XOG object. The product schema tag has the following attribute: - investmentVersion: Optional. Table and Column: PRJ_PROJECTS.INV_VERSION Type: String Schema Name: nikuxog_product.xsd
Read and Write XML Files The following XML files are included: - inv_products_read.xml. Use this file to export product instances from Classic PPM. - inv_products_write.xml. Use this file to import product instances that were previously exported from Classic PPM.

Other Work Schema Tag
This tag is part of the schema mapping for the Non-project Investment XOG object. There are no specific attributes for the Other Work schema.
Schema Name:
nikuxog_otherInvestment.xsd
Read and Write XML Files
The following XML files are included:
- inv_others_read.xml. Use this file to export other investment instances from Classic PPM. - inv_others_write.xml. Use this file to import other investment instances that were previously exported from Classic
PPM.

NPIO Common Fields Schema Tag
The NPIO Common Fields tag is part of the schema mapping for the non-project investment XOG object. This schema tag has the following attributes:
- name: Required. Defines the name of the investment. Table and Column: SRM_PROJECTS.NAME Type: String - objectId: Required. Defines the unique identifier for the investment. You must provide a unique identifier if Classic PPM is not configured for autonumbering. Table and Column: SRM_PROJECTS.UNIQUE_NAME Type: String - status Optional. Defines the status of the investment. Values: - 0. Unapproved - 1. Approved - 2. On Hold - 3. Rejected - 4. Cancelled - 5. Resumed


Table and Column: PRJ_PROJECTS.STATUS Type: Number - description: Optional. Table and Column: SRM_PROJECTS.DESCRIPTION Type: String - priority: Optional. Defines the priority of the investment. Values: 0-36, where:
- 0. Highest priority - 36. Lowest priority Table and Column: PRJ_PROJECTS.prPRIORITY Type: Number - managerUserName: Optional. Defines the name of the resource managing the investment. The manager's user name must match an existing user name in Classic PPM. Table and Column: PRJ_PROJECTS.MANAGER_ID Type: String - approvedById: Required. Defines the name of the resource who approved the investment. The user name must match an existing user name in Classic PPM. Table and Column: PRJ_PROJECTS.APPROVEDBY_ID Type: String - chargeCodeExtId: Required. Table and Column: PRJ_PROJECTS.PRCHARGECODEID Type: String - lastUpdatedBy: Optional. Defines the name of the resource who last updated the investment. Default: The name of the resource that is logged in to Classic PPM. Table and Column: PRJ_PROJECTS.LAST_UPDATED_BY Type: String - lastUpdatedDate: Optional. Defines the date that the investment was last updated. Default: Today's date Table and Column: SRM_PROJECTS.LAST_UPDATED_DATE Type: dateTime - approvedTime: Optional. Defines the time that the investment was approved. Table and Column: PRJ_PROJECTS.PRAPPROVEDTIME Type: dateTime - processCode: Required. Defines the process code of the investment. The code must exist in Classic PPM. Table and Column: PRJ_PROJECTS.PROCESS_CODE Type: String - stageCode: Required. Defines the stage code of the investment. The code must exist in Classic PPM. Table and Column: PRJ_PROJECTS.STAGE_CODE Type: String - categoryCode: Required. Defines the category code of the investment. The code must exist in Classic PPM. Table and Column: PRJ_PROJECTS.CATEGORY_CODE Type: String - goalCode: Required. Defines the goal code of the investment. The code must exist in Classic PPM. Table and Column: PRJ_PROJECTS.GOAL_CODE Type: String - alignment: Optional. Defines the alignment of the investment. Table and Column: PRJ_PROJECTS.ALIGNMENT Type: Number - risk: Optional. Defines the risk of the investment. Table and Column: PRJ_PROJECTS.RISK Type: Number - statusIndicator: Optional.

Table and Column: PRJ_PROJECTS.STATUS_INDICATOR Type: Number - statusComment: Optional. Table and Column: PRJ_PROJECTS.STATUS_COMMENT Type: String - progress: Optional. Values:
- 0. Not Started - 1. Started - 2. Completed
Table and Column: PRJ_PROJECTS.PROGRESS Type: Double - budgetCostStart: Optional.
Table and Column: PRJ_PROJECTS.BDGT_CST_START Type: dateTime - budgetCostFinish: Optional. Table and Column: PRJ_PROJECTS.BDGT_CST_FINISH Type: dateTime - budgetCostOnHold: Optional. Table and Column: PRJ_PROJECTS.BDGT_CST_ONHOLD Type: dateTime - budgetCostResume: Optional. Table and Column: PRJ_PROJECTS.BDGT_CST_RESUME Type: dateTime - budgetRevTotal: Optional. The minimum is 0. Table and Column: PRJ_PROJECTS.BDGT_REV_TOTAL Type: Double - budgetRevStart: Optional. Table and Column: PRJ_PROJECTS.BDGT_REV_START Type: dateTime - budgetRevFinish: Optional. Table and Column: PRJ_PROJECTS.BDGT_REV_FINISH Type: dateTime - budgetRevOnHold: Optional. Table and Column: PRJ_PROJECTS.BDGT_REV_ONHOLD Type: dateTime - budgetRevResume: Optional. Table and Column: PRJ_PROJECTS.BDGT_REV_RESUME Type: dateTime - budgetNPV: Optional. If the Calculate Present Value Info flag is set, the budgetNPV is recalculated after import. Table and Column: PRJ_PROJECTS.BDGT_NPV Type: Float - budgetROI: Optional. If the Calculate Present Value Info flag is set, the budgetROI is recalculated after import. 1.0 is 100 percent. Table and Column: PRJ_PROJECTS.BDGT_ROI Type: Percent - budgetBreakEven: Optional. Recalculated after import if Calculate Present Value Info flag is set.

Table and Column: PRJ_PROJECTS.BDGT_BREAKEVEN Type: dateTime - forecastCostTotal: Optional. The minumum is 0. Table and Column: PRJ_PROJECTS.FCST_CST_TOTAL Type: Double - forecastCostStart: Optional. Table and Column: PRJ_PROJECTS.FCST_CST_START Type: dateTime - forecastCostFinish: Optional. Table and Column: PRJ_PROJECTS.FCST_CST_FINISH Type: dateTime - forecastCostOnHold: Optional. Table and Column: PRJ_PROJECTS.FCST_CST_ONHOLD Type: dateTime - forecastCostResume: Optional. Table and Column: PRJ_PROJECTS.FCST_CST_RESUME Type: dateTime - forecastRevTotal: Optional. Table and Column: PRJ_PROJECTS.FCST_REV_TOTAL Type: dateTime - forecastRevStart: Optional. Table and Column: PRJ_PROJECTS.FCST_REV_START Type: dateTime - forecastRevFinish: Optional. Table and Column: PRJ_PROJECTS.FCST_REV_FINISH Type: dateTime - forecastRevOnHold: Optional. Table and Column: PRJ_PROJECTS.FCST_REV_ONHOLD Type: dateTime - forecastRevResume: Optional. Table and Column: PRJ_PROJECTS.FCST_REV_RESUME Type: dateTime - forecastNPV: Optional. Recalculated after import if Calculate Present Value Info flag is set. Table and Column: PRJ_PROJECTS.FCST_NPV Type: Float - forecastROI: Optional. Recalculated after import if Calculate Present Value Info flag is set. 1.0 is 100 percent. Table and Column: PRJ_PROJECTS.FCST_ROI Type: Percent - forecastBreakEven: Optional. Recalculated after import if Calculate Present Value Info flag is set. Table and Column: PRJ_PROJECTS.FCST_BREAKEVEN Type: dateTime - currencyISOcode: Required. The three-character ISO currency code that must be an active currency in Classic PPM. Table and Column: PRJ_PROJECTS.CURRENCY_CODE Type: String - calculatePresentValueInfo: Required. If selected, calculates the NPV, ROI, and breakeven after import. Table and Column: PRJ_PROJECTS.IS_CALC_PV_INFO


Type: Boolean - forecastEqualsBudget: Optional. If selected, forecast values will track the budget values.
Table and Column: PRJ_PROJECTS.IS_CALC_PV_INFO Type: Boolean - plannedCostStart: Optional. Table and Column: FIN_FINANCIALS.PLANNED_CST_START Type: Date
- plannedCostFinish: Optional. Table and Column: FIN_FINANCIALS.PLANNED_CST_FINISH Type: Date
- plannedBenTotal: Optional. Table and Column: FIN_FINANCIALS.PLANNED_BEN_TOTAL Type: Double
- plannedBenStart: Optional. Table and Column: FIN_FINANCIALS.PLANNED_BEN_START Type: Date
- plannedBenFinish Optional. Table and Column: FIN_FINANCIALS.PLANNED_BEN_FINISH Type: Date
- budgetCostStart: Optional. Table and Column: FIN_FINANCIALS.BUDGET_CST_START Type: Date
- budgetCostFinish: Optional. Table and Column: FIN_FINANCIALS.BUDGET_CST_FINISH Type: Date
- budgetRevTotal: Optional. Table and Column: FIN_FINANCIALS.BUDGET_REV_TOTAL Type: Double
- budgetRevStart: Optional. Table and Column: FIN_FINANCIALS.BUDGET_REV_START Type: Date
- budgetRevFinish: Optional. Table and Column: FIN_FINANCIALS.BUDGET_REV_FINISH Type: Date
- forecastCostTotal: Optional. Table and Column: FIN_FINANCIALS.FORECAST_CST_TOTAL Type: Double
- forecastCostStart: Optional. Table and Column: FIN_FINANCIALS.FORECAST_CST_START Type: Date
- forecastCostFinish: Optional. Table and Column: FIN_FINANCIALS.FORECAST_CST_FINISH Type: Date
- forecastRevTota:l Optional. Table and Column: FIN_FINANCIALS.FORECAST_REV_TOTAL Type: Double
- forecastRevStart: Optional.

Clarity - 16.4.1 4395

Table and Column: FIN_FINANCIALS.FORECAST_REV_START Type: Date - forecastRevFinish: Optional. Table and Column: FIN_FINANCIALS.FORECAST_REV_FINISH Type: Date - plannedNPV: Optional. If the Calculate Present Value Info flag is set, this value is recalculated after import. Table and Column: FIN_FINANCIALS.PLANNED_NPV Type: Double - plannedROI: Optional. If the Calculate Present Value Info flag is set, this value is recalculated after import. 1.0 is 100 percent. Table and Column: FIN_FINANCIALS.PLANNED_ROI Type: Double - plannedBreakEven: Optional. This is recalculated after import if Calculate Present Value Info flag is set. Table and Column: FIN_FINANCIALS.PLANNED_BREAKEVEN Type: Date - budgetNPV: Optional. If the Calculate Present Value Info flag is set, this value is recalculated after import. Table and Column: FIN_FINANCIALS.BUDGET_NPV Type: Double - budgetROI: Optional. If the Calculate Present Value Info flag is set, this value is recalculated after import. 1.0 is 100 percent. Table and Column: FIN_FINANCIALS.BUDGET_ROI Type: Double - budgetBreakEven: Optional. This is recalculated after import if Calculate Present Value Info flag is set. Table and Column: FIN_FINANCIALS.BUDGET_BREAKEVEN Type: Date - forecastNPV: Optional. If the Calculate Present Value Info flag is set, this value is recalculated after import. Table and Column: FIN_FINANCIALS.FORECAST_NPV Type: Double - forecastROI: Optional. If the Calculate Present Value Info flag is set, this value is recalculated after import. 1.0 is 100 percent. Table and Column: FIN_FINANCIALS.FORECAST_ROI. Type: Double - forecastBreakEven: Optional. Recalculated after import if Calculate Present Value Info flag is set. Table and Column: FIN_FINANCIALS.FORECAST_BREAKEVEN Type: Date - forecastEqualsBudget: Optional. If selected, forecast values will track the budget values. Table and Column: FIN_FINANCIALS.IS_FCST_EQ_BDGT Type: Boolean - currencyISOcode: Optional. A three-character ISO currency code that must be an active currency in Classic PPM. Table and Column: FIN_FINANCIALS.CURRENCY_CODE Type: String - calculatePresentValueInfo: Optional. If checked, calculates the NPV, ROI, and breakeven after import. Table and Column: FIN_FINANCIALS.IS_CALC_PV_INFO Type: Boolean

Service Schema Tag The service tag is part of the schema mapping for the Non-project Investment XOG object. This tag has the following attribute: - applicationCode Optional. Defines the unique identifier for the service. Table and Column:
INV_SERVICES.APPLICATION_ID Type: String Schema Name nikuxog_service.xsd Read and Write XML Files The following XML files are included: - inv_services_read.xml. Use this file to export service instances from Classic PPM. - inv_services_write.xml. Use this file to import service instances that were previously exported from Classic PPM.
XOG: Notifications - Notification Schema Tag
Use the Notification XOG object to view inbound and outbound configurable notification templates. Schema Name nikuxog_notification.xsd Read and Write XML Files The following XML files are included: - notification_read.xml. Use this file to export notification templates from Classic PPM. - notification_write.xml. Use this file to import notification templates that were previously exported from Classic PPM. Prerequisites None. Read Filters The following explicit read filters are used: - functionalAreaCode: Defines the functional area code that refers to the notification template. The values can be
obtained from the CMN_LOOKUPS_V table with lookup_type set to `NOTIFICATION_TYPE'. - notificationCode: Defines the ID of the notification. - languageCode: Defines the language code of the notification for extracting the name and description fields. This
parameter is not required if reading the notification in all languages. Error Handling No errors are thrown. If the filter includes invalid values, no records are read. Schema Mapping Mappings for the following schema tag names are provided.
Notification Schema Tag The notification tag is part of the schema mapping for the notification XOG object. This tag has the following attributes: - notificationCode: Required. Defines the code for the notification template.
Table and Column: CMN_NOTIFICATIONS.NOTIFICATION_CODE

Type: String - functionalAreaCode: Required. Defines the functional area code that refers to the notification template.
Table and Column: CMN_NOTIFICATIONS.FUNCTIONAL_AREA_ID Type: String - isCustomized: Identifies if the notification template is customized or not. Table and Column: CMN_NOTIFIACTIONS.IS_CUSTOMIZED Type: Boolean - notificationNameDesc: Required. Defines the name and description of the notification template. Table and Column: CMN_CAPTIONS_NLS.NAME and DESCRIPTIONS with TABLE_NAME mapped to CMN_NOTIFICATIONS Type: String - notificationSubjectBody: Required. Defines the subject and message body text of the the notification template. Table and Column: CMN_CAPTIONS_NLS.NAME and DESCRIPTIONS with TABLE_NAME mapped to CMN_NOTIFICATIONS. Type: String
XOG: Portfolio
Use the portfolio XOG object for outbound (read) and inbound (write) processing.
Schema Name nikuxog_pfm_portfolio.xsd
Read and Write XML Files The following files are included. - portfolio_read.xml. Use this file to export portfolios data. Business Rules and Processing The Portfolios schema is defined for inbound (write) processing only. Some of the portfolio fields (for example, budgetType, capacityType, capacityUnitType, invType) are optional on the schema but are required fields in the database table. If they are not provided in the input xml, the default values are used for these fields.
Schema Mappings The following schema mappings are described. - Portfolio Schema Tag - Contents Schema Tag
Portfolio Schema Tag The portfolio tag is part of the schema mapping for the portfolio XOG object. It has the following attributes: - code: Required. Defines the unique ID of this portfolio.
Table and Column: pfm_portfolio.code Type: String - name: Required. Defines the name of this portfolio. Table and Column: pfm_portfolio.name Type: String - description: Optional. Defines the description of this portfolio. Table and Column: pfm_portfolio.description


Type: String - syncschedule_cron: Optional. Defines the portfolio synchronization cadance in a cron like format.
Table and Column: pfm_portfolio.syncschedule_cron Type: String - department: Optional. Defines the department (if any) associated with the portfolio. Table and Column: pfm_portfolio.department_id Type: String - currency_code: Optional. Defines the currency code for the portfolio. Table and Column: pfm_portfolio.currency_code Type: String - is_active: Optional. Defines the active status of the portfolio. Table and Column: pfm_portfolio.is_active Type: Boolean - page_layout: Optional. Defines the page layout of the portfolio. Table and Column: Type: String - partition_code: Optional. Defines the partition where the portfolio resides. Table and Column: odf_ca_pfm_portfolio.partition_code Type: String - cap_unit_type: Optional. Defines the capacity unit type for the portfolio (FTE or Hours). Table and Column: pfm_portfolio.capacity_unit_type Type: String - operating_cost_target: Optional. Defines the operating cost target for the portfolio. Table and Column: pfm_portfolio.operating_cost_target Type: Float - benefits_target: Optional. Defines the benefits target for the portfolio. Table and Column: pfm_portfolio.benefits_target Type: Float - resources_target: Optional. Defines the roles target for the portfolio. Table and Column: pfm_portfolio.resources_target Type: Float - operating_cost_curve: Optional. Defines the operating cost target for the portfolio as a curve. Table and Column: pfm_portfolio.operating_cost_curve Type: CurveType - capital_cost_curve: Optional. Defines the capital cost target for the portfolio as a curve. Table and Column: pfm_portfolio.capital_cost_curve Type: CurveType - benefits_curve: Optional. Defines the benefits target for the portfolio as a curve. Table and Column: pfm_portfolio.benefits_curve Type: CurveType - resources_curve: Optional. Defines the roles target for the portfolio as a curve. Table and Column: pfm_portfolio.resources_curve Type: CurveType - manager: Required. Defines the User ID of the portfolio manager who will manage this portfolio. Table and Column: PMA_PORTFOLIOS. MANAGER_ID Type: String - id: Required. Defines the unique identifier for this portfolio.

Clarity - 16.4.1 4399

Table and Column: PMA_PORTFOLIOS.ID Type: String - parentPortfolioID: Optional. Defines the unique identifier of the parent portfolio (if this a child portfolio). Table and Column: PMA_PORTFOLIOS. PARENT_ID Type: String - budgetCost: Required. Defines the budgeted cost of this portfolio. Table and Column: PMA_PORTFOLIO. BDGT_CST_TOTAL Type: Number - budgetBenefit: Required. Defines the budgeted benefit of this portfolio. Table and Column: PMA_PORTFOLIOS. BDGT_REV_TOTAL Type: Number - budgetType: Optional. Defines the budget type for this portfolio. Values:
- BUDGET_TYPE_TOTAL - BUDGET_TYPE_REMAINING
Default: BUDGET_TYPE_TOTAL Table and Column: PMA_PORTFOLIOS. BUDGET_TYPE Type: String - capacityType: Optional. Defines the capacity type for this portfolio. Values:
- CAPACITY_TYPE_TOTAL - CAPACITY_TYPE_REMAINING Default: CAPACITY_TYPE_TOTAL Table and Column: PMA_PORTFOLIOS. CAPACITY_TYPE Type: String - invType: Optional. Defines the investment type for this portfolio. Values: all, application, asset, idea, other, product, project, and service Default: all Table and Column: PMA_PORTFOLIOS. PORTFOLIO_INV_TYPE Type: String - start_date: Required. Defines the start date for the portfolio horizon. Table and Column: pfm_portfolio.start_date Type: dateTime - finish_date: Required. Defines the finish date for the portfolio horizon. Table and Column: pfm_portfolio.finish_date Type: dateTime - currencyISOcode: Required. Table and Column: PMA_PORTFOLIOS.CURRENCY_CODE Type: String - pageLayoutCode: Optional. Table and Column: CMN_INSTANCE_PAGES. PAGE_FRAME_ID Type: String
Contents Schema Tag
This tag is part of the schema mapping for the Portfolio XOG object. This tag has the following attributes:
- isIncluded: Defines whether portfolio content types are included. Table and Column: PMA_PRTFLIO_INCL_CTNT_TYPES.IS_INCLUDED
- investmentType: Required. On include tag. Table and Column: PMA_PRTFLIO_INCL_CTNT_TYPES.OBJECT_TYPE_CODE
- lastSyncDate: Defines the date the portfolio contents were last updated.

Table and Column: PMA_PRTFLIO_INCL_CTNT_TYPES.LAST_SYNC_DATE - runSync: This value is used only while processing.
Table and Column: Not Applicable - investmentID: Required. On contents/include/expression/investment tag and contents/investment tag.
Table and Column: PMA_PORTFOLIO_CONTENTS.INVEST_ID - investmentType: Required. On contents/include/expression/investment tag and contents/investment tag.
Table and Column: PMA_PORTFOLIO_CONTENTS.INVEST_TYPE
XOG: Process Notification
Use the Process Notification XOG object to view inbound and outbound configurable notification templates for processes. Schema Name nikuxog_processnotification.xsd Read and Write XML Files The following XML files are included: - processnotification_read.xml. Use this file to export notification templates from Classic PPM. - processnotification_write.xml. Use this file to import notification templates that were previously exported from Classic
PPM. Prerequisites Before you use this XOG object, verify that the referenced object, such as the process, exists in Classic PPM. Read Filters The following explicit read filters are used: - notificationCode: Defines the ID of the notification template. - languageCode: Defines the language code of the notification template for extracting the name and description fields.
The parameter is not required if reading the notification template in all languages. - processCode: Defines the process code for which the notification template was defined. Error Handling No errors are thrown. If the filter includes invalid values, no records are read. Schema Mapping Mappings for the following schema tag names are provided. - Process Notification Schema Tag
Process Notification Schema Tag The process notification tag is part of the schema mapping for the process notification XOG object. This tag has the following attributes: - notificationCode: Required. Defines the code for the notification template.
Table and Column: CMN_PROCESS_NOTIFICATIONS.NOTIFICATION_CODE Type: String - functionalAreaCode: Required. Defines the functional area code that refers to the notification template. Table and Column: CMN_PROCESS_NOTIFICATIONS.FUNCTIONAL_AREA_ID to the CMN_LOOKUPS_V table with lookup_type set to NOTIFICATION_TYPE

Type: String - isCustomized: Defines if the notification template is customized or not.
Table and Column: CMN_PROCESS_NOTIFICATIONS.IS_CUSTOMIZED Type: Boolean - notificationNameDesc: Required. Defines the name and description of the notification template. Table and Column: CMN_CAPTIONS_NLS.NAME and DESCRIPTIONS with TABLE_NAME mapped to CMN_PROCESS_NOTIFICATIONS. Type: String - notificationSubjectBody: Required. Defines the subject and message body texts of the notification template. Table and Column: CMN_CAPTIONS_NLS.NAME and DESCRIPTIONS with TABLE_NAME mapped to CMN_PROCESS_NOTIFICATIONS. Type: String - process_code: Required. Defines the process code to which the current notification is associated with. Table and Column: BPM_DEF_PROCESSES.PROCESS_CODE that associates to the CMN_PROCESS_NOTIFICATIONS.PROCESS_ID Type: String
XOG: Project
Use the Project XOG object to view inbound and outbound project attributes. Projects are defined for inbound (write) and outbound (read) processing. Common reasons to import and export project data include:
- To deliver project plans to drive external systems such as time sheet tools. - To integrate with Oracle Projects and other project systems. - To supply data for sophisticated reporting requirements.
Schema Name
nikuxog_project.xsd
- SRM_PROJECTS Schema Tag - Project (PRJ_PROJECTS) Schema Tag - Project (PAC_MNT_PROJECTS) Schema Tag - Project Location Schema Tag - Project (CLNTSUPP) Schema Tag - Resource (PRTEAM) Schema Tag - SRM_RESOURCES Schema Tag - Task (PRTask) Schema Tag - TaskLabor (PRAssignment) Schema Tag - OBS Associations Schema Tag (Project XOG) - Project (PRJ_PROJECTS) Schema Tag - PAC_MNT_PROJECTS Schema Tag - Resource (PRTeam) Schema Tag - PRTask Schema Tag - TaskLabor (PRAssignment) Schema Tag - Example 1: Export (XOG-out) a Project with a Resource Team - Example 2: Import (XOG-in) a Custom Subobject for a Project
Read and Write XML Files
The following XML files are included:
- prj_projects_read.xml. Use this file to export project attributes. - prj_projects_write.xml. Use this file to import business processes that were previously exported. Import Rules When importing project management information, the user importing the project (XOG user) or the user passed in the Addedby attribute on the project XML must have the Administration - XOG or Project - XOG Access and Project - Create access rights. To update an existing project using XOG, you must have the Project - Edit access right.
The following import rules are applied while importing or updating project financial information: - The Username attribute must be passed and the user must be financially-enabled. - If the project is financially approved, changes to Client, Type, Billing Currency, Forecasting flag Template Flag, Billing
Project Code, and Exchange Rate Type are not allowed. - An imported task with no start and finish dates in the inbound XML file inherits the project Start Date and Finish Date
values. - A project cannot be closed if
- There are transactions on the Post to WIP (PPA_WIP) list with amounts not equal to zero. - There are transactions on the Invalid Transaction list (PPA_TRANSCONTROL). - The Client, Project Class, WIP Class, Location, Department, and Currency that is used for a project must exist. - Contract Type, Project Document Number, Contract Amount, and Date are required. - Bill Amount, Number of Bills, Bill Frequency, and First Bill Date are entered once. After import, you cannot change the value. - If the rate/cost matrix is used in project financials, the specified rate matrix must be validated with all of the columns that are mentioned in the rate or cost matrix.
Deletion Rules You can delete tasks, assignments, and resources by passing the Deletion attribute (which takes True or False). Only the following delete operations are allowed: - Delete Task: This task also deletes all assignments for the task. - Remove a staff member from a project: When you remove staff from a project team, it also removes assignments for
the resource. - Remove assignment from task: The task deletes the assignment from the task. You cannot delete teams, tasks, or assignments that are referenced by a time entry with non-zero actuals on a submitted timesheet with a status other than Not Submitted or Rejected.
Exporting Project Data When exporting project data from Classic PPM, the following elements are included: - Basic project information - Tasks - Resource Team (Staff) information - Assignments - Management information - Financial information Read Filters The following arguments are taken:
- Tasks: include_tasks - Resources: include_resources - Baselines: include_baselines - Allocations: include_allocations - Custom: include_custom - Tasks: include_tasks - Estimate date: include_estimate_after_date - Estimates: include_estimates - Actuals: include_actuals - Dependencies: include_dependencies - Subprojects: include_subprojects Consider this information when using these arguments: - When include_tasks and include_resources are Off, only project master record and financial information is exported. - When include_tasks and include_resources arguments are On, all project information is exported, including
assignments. - When include_tasks is On and include_resources is Off, the Work Breakdown Structure (WBS) is exported, but not
assignments or resource information. - When include_tasks is Off and include_resources is On, project-level resource assignments are exported, but not the
WBS or task-level assignments. The following implicit filter is used: - The project is enabled for management. The following explicit filters are used: - projectID - approved (Management) - approvedForBilling (Financial) - start date - end date - lastUpdatedDate: This filter is the most recent date of lastUpdatedDate in the SRM_PROJECTS table or PRModTime
in the PRJ_PROJECTS table. - active project - management functionality is enabled Schema Mappings - Outbound Schema mappings are described for the following outbound Project tag names:
- SRM_PROJECTS - SRM_RESOURCES (Manage Resource ID) - PRJ_PROJECTS - PAC_MNT_PROJECTS - Project Location - CLNTSUPP - PRTEAM - SRM_RESOURCES (Team Resource ID) - SRM_RESOURCES (Project Role ID) - SRM_RESOURCES (Assignment Resource ID) - PRTask - PRAssignment - OBS Association - OBSAssoc
Schema Mappings - Inbound
Schema mappings are described for the following inbound Project tag names:
- PRJ_PROJECTS - PAC_MNT_PROJECTS - Resource - Task - TaskLabor
TIP
Tag attributes are optional unless Required appears on this page.


SRM_PROJECTS Schema Tag
This tag is part of the outbound schema mapping for the Project XOG object.
- projectID: Required. Table and Column: SRM_PROJECTS.UNIQUE_NAME Type: String - name: Required. Table and Column: SRM_PROJECTS.NAME Type: String - description: Table and Column: SRM_PROJECTS.DESCRIPTION Type: String - createdBy: Table and Column: SRM_PROJECTS.CREATED_BY Type: String - createdDate: Table and Column: SRM_PROJECTS.CREATED_DATE Type: dateTime - lastUpdatedDate: Uses PRJ_PROJECTS.prModTime
Table and Column: SRM_PROJECTS.LAST_UPDATED_DATE Type: dateTime - lastUpdatedBy: Uses PRJ_PROJECTS.prModBy if PRJ_PROJECTS.prModTime is later than LAST_UPDATED_BY.
Table and Column: SRM_PROJECTS.LAST_UPDATED_BY Type: String - Active: Table and Column: SRM_PROJECTS.IS_ACTIVE Type: Boolean - program: Indicates if the project is a program Table and Column: SRM_PROJECTS.IS_PROGRAM Type: Boolean

Project (PRJ_PROJECTS) Schema Tag
The PRJ_PROJECTS tag is part of the outbound schema mapping for the project XOG object and has the following attributes:
- start Table and Column: PRJ_PROJECTS.prStart Type: dateTime - finish Table and Column: PRJ_PROJECTS.prFinish Type: dateTime - approved True only if prApproveTime is not null.


Table and Column: PRJ_PROJECTS.prApproveTime Type: Boolean - OpenForTimeEntry Table and Column: PRJ_PROJECTS.prIsOpen Type: Boolean - Closed True only if prClosedTime is not null.
Table and Column: PRJ_PROJECTS.prClosedTime Type: Boolean


Project (PAC_MNT_PROJECTS) Schema Tag
The PAC_MNT_PROJECTS tag is part of the outbound schema mapping for the project XOG object and has the following attributes:
- financialLocation Table and Column: PAC_MNT_PROJECTS.LOCATIONID Type: String - financialDepartment Table and Column: PAC_MNT_PROJECTS.DEPARTCODE Type: String - clientID Table and Column: PAC_MNT_PROJECTS.COMPANY_CODE Type: String - affiliatedProjectID Table and Column: PAC_MNT_PROJECTS.AFFILIATEPROJECT Type: String - financialStatus Table and Column: PAC_MNT_PROJECTS.STATUS Type: String - approvedForBilling Table and Column: PAC_MNT_PROJECTS.APPROVED Type: Boolean - billingType Defines the billing type. Values: S, I, and C Table and Column: PAC_MNT_PROJECTS.TYPE_ Type:
String - billingCurrencyCode Table and Column: PAC_MNT_PROJECTS.BILLLING_CURRENCY_CODE Type: String - costType Refers to Cost type for the investment. Possible values are OPERATING/CAPITAL. Default value is
OPERATING. Table and Column: PAC_MNT_PROJECTS.cost_type Type: String

Project Location Schema Tag
The Project Location tag is part of the outbound schema mapping for the project XOG object. This tag uses the LOCATIONS table, where LOCATIONS.LOCATIONID = PAC_MNT_PROJECTS.LOCATIONID. This schema tag has the following attribute.
- Entity Optional Table and Column: LOCATIONS.ENTITY Type: String

Project (CLNTSUPP) Schema Tag
This tag is part of the outbound schema mapping for the Project XOG object and uses the CLNTSUPP table, where CLNTSUPP.COMPANY_CODE = PAC_MNT_PROJECTS.COMPANY_CODE. This tag has the following attribute.
- clientName Optional Table and Column: CLNTSUPP.COMPANY_NAME Type: String

Resource (PRTEAM) Schema Tag This tag is part of the outbound schema mapping for the Project XOG object and has the following attributes: This tag uses the PRTeam table with zero to many records and where PRTeam.prProjectID = PRJ_PROJECTS.prID.
- availFrom: Optional Table and Column: PRTeam.prAvailStart Type: dateTime - availTo: Optional Table and Column: PRTeam.prAvailFinish Type: dateTime - openForTimeEntry: Optional Table and Column: PRTeam.prIsOpen Type: Boolean - lastUpdatedBy: Optional Table and Column: PRTeam.prModBy Type: String - lastUpdatedDate: Optional Table and Column: PRTeam.prModTime Type: dateTime - capitalPercentage: Capitalization percent of planned cost at team level. The valid value of this attribute
can be any float value from 0 (0 percent) to 1 (100 percent). The default value is 0. Table and Column: PRTEAM.CAPITAL_PERCENTAGE Type: Float - forecastRate: The allocation hourly forecast rate. You can export the field only if it contains a value.. Table and Column: PRTEAM.FORECAST_RATE Type: Double - requestedManagerID: The resource manager requested for fulfilling a role request. You can export the field only if it contains a value.. Table and Column: PRTEAM.REQUESTED_MANAGER_ID Type: String - teamDefinitionId: The teamDefinitionId attribute contains the code of the team definition associated with the labor resource in the system. During export, if the resource is a team definition, the attribute is added to the <Resource> element into the resulting XML document. For a successful import, verify that all the following conditions are true: - If a <Resource> element has the teamDefinitionId attribute, then that team definition exists in the target system. - The associated resource ID for the team definition in the target system matches the resource ID on the <Resource>
element in the import file. If necessary, use the REST API to create the team definition on the target system prior to importing. - Resources that are also team definitions cannot change the first name, last name, display name, resourceID, isActive flag, or availability of the resources in the target system. Any updates to these fields are ignored. Table and Column: TEAM_DEFINITIONS.CODE Type: String
SRM_RESOURCES Schema Tag The SRM_RESOURCES tag is part of the outbound schema mapping for the project XOG object. This tag uses the following table joins: - SRM_RESOURCES.USER_ID = CMN_SEC_USERS.ID - CMN_SEC_USERS.USER_NAME = PRJ_PROJECTS.MANAGER_ID - SRM_RESOURCES.ID = PRTeam.prResourceID, or PRTeam.prRoleID, or PRAssignment.prResourceID This schema tag has the following attributes: - manageResourceID: Optional Table and Column: SRM_RESOURCES.UNIQUE_NAME Type: String - resourceID: Required. Table and Column: SRM_RESOURCES.UNIQUE_NAME Type: String - projectRoleID Table and Column: SRM_RESOURCES.UNIQUE_NAME Type: String
Task (PRTask) Schema Tag This tag is part of the outbound schema mapping for the Project XOG object and uses the PRTask table, with 0 to many records, and where PRTask.prProjectID = PRJ_PROJECTS.prID. This schema tag has the following attributes:
- taskID: Defines the unique identifier for the task. If no value is provided, a new task record is created during import. If a value is provided and there is an existing task with a matching ID the task data is updated. Table and Column: PRTask.prExternalID Type: String
- name: Defines the name for the task. Table and Column: PRTask.prName Type: String - orderID: Defines the unique order identifier for the task. Table and Column: PRTask.prWBSSequence Type: Integer - owner: Optional. The Resource Code for a Labor Resource or Defined Team. Table and Column:
PRTask.task_owner Type: String - outlineLevel: Defines the outline level for the task. Table and Column: PRTask.prWBSLevel Type: Integer - start: Defines the start date and time for the task. Table and Column: PRTask.prStart Type: dateTime - baseStart: Defines the base start date and time for the task. Table and Column: PRTask.prBaseStart Type: dateTime - finish: Defines the finish date and time for the task. Table and Column: PRTask.prFinish Type: dateTime - baseFinish: Defines the base finish date and time for the task. Table and Column: PRTask.prBaseFinish Type:
dateTime - milestone Table and Column: PRTask.prIsMilestone Type: Boolean - summary: True only if prIsTask is false. Table and Column: Not applicable Type: Boolean - key: Table and Column: PRTask.prIsKey Type: Boolean - category: Table and Column: PRTask.prCategory Type: String - status: Defines the status of the task. Values:
- 0. Not Started - 1. Started - 2. Complete Table and Column: PRTask.prStatus Type: Integer - percComp: Valid values are between 0 and1 inclusive, where 00 percent is shown as 1.0. Table and Column: PRTask.prPctComplete Type: Float - lastUpdatedBy: Table and Column: PRTask.prModBy Type: String - lastUpdatedDate: Table and Column: PRTask.prModTime Type: dateTime - costType: Refers to Cost type for the task. Possible values are OPERATING/CAPITAL. Table and Column: PRTASK.cost_type Type: String - fixed: Optional. Determines if the task duration is fixed. Possible values are true/false.Table and Column: PRTASK.prIsFixedType:Boolean - mspTaskType: Optional. Microsoft Project task type. Values: - 0. Fixed Units - 1. Fixed Duration - 2. Fixed Work Table and Column: PRTASK.msp_task_type Type: Number
TaskLabor (PRAssignment) Schema Tag This tag is part of the outbound schema mapping for the Project XOG object and has the following attributes:
This tag uses the PRAssignment table, which can have 0 to many records, and where PRAssignment.prTaskID = PRTask.prID.
- start: Optional. Table and Column: PRAssignment.prStart Type: dateTime - finish: Optional. Table and Column: PRAssignment.prFinish Type: dateTime - actualWork: Optional. Table and Column: PRAssignment.prActSum Type: Float - remainingWork: Optional. Table and Column: PRAssignment.prEstSum Type: Float - baselineWork: Optional. Table and Column: PRAssignment.prBaseSum Type: Float - actualThrough: Optional. Table and Column: PRAssignment.prActThru Type: dateTime - lastUpdatedBy: Optional. Table and Column: PRAssignment.prModBy Type: String - lastUpdatedDate: Optional. Table and Column: PRAssignment.prModTime Type: dateTime - teamDefinitionId: Optional. The teamDefinitionId attribute contains the code of the team definition associated with
the labor resource in the system. During export, if the resource is a team definition, the attribute is added to the <TaskLabor> element into the resulting XML document. For a successful import, verify that all the following conditions are true: - If a <Resource> element has the teamDefinitionId attribute, then that team definition exists in the target system. - The associated resource ID for the team definition in the target system matches the resource ID on the <Resource>
element in the import file. If necessary, use the REST API to create the team definition on the target system prior to importing. - Resources that also team definitions cannot change the first name, last name, display name, resourceID, isActive flag, or availability of the resources in the target system. Any updates to these fields are ignored. Table and Column: TEAM_DEFINITIONS.CODE Type: String
OBS Associations Schema Tag (Project XOG)
The OBS Associations tag is part of the outbound schema mapping for the Project XOG object. This tag is a shared xsd type and a wrapper for the OBSAssoc elements.
Example:
<xs:complexType name="OBSAssocsType"> <xs:annotation> <xs:documentation xml:lang="en"> <... list of OBS Associations ...> <OBSAssocs complete="false"> </xs:documentation>
The OBSAssocs element contains the following element, plus zero or more OBSAssoc subelements.
- complete: (Optional) Defines whether the OBS associations are complete. When complete is true, existing OBS associations that are not listed in the import are deleted. When the value is false, the operation inserts and/or updates any existing OBS associations.
NOTE Complete replaces deprecated forms completed and IsComplete.
Default: False Table and Column: None Type: Boolean
The OBS association tag is part of the outbound schema mapping for the project XOG object. The following tables are used in this tag:
- PRJ_OBS_ASSOCIATIONS (OBS associations) - PRJ_OBS_TYPES (OBS) - PRJ_OBS_UNITS (OBS Units) - PRJ_OBS_UNITS_FLAT (OBS Units Flat Hierarchy)
This tag has the following attributes:
- id: Required. Table and Column: PRJ_OBS_TYPES.UNIQUE_NAME Type: String - name: Optional. Table and Column: PRJ_OBS_TYPES.PRJ_OBS_TYPES.NAME Type: String - unitPath: Required. A slash-delimited list of unit names that points to the OBS unit for the object. Table and Column:
PRJ_OBS_TYPES.PRJ_OBS_UNITS.NAME Type: String Example: CAN/BC/VAN
Project (PRJ_PROJECTS) Schema Tag
The PRJ_PROJECTS tag is part of the inbound schema mapping for the project XOG object and has the following attributes:
- Name Required. Table and Column: PRJ_PROJECTS.NAME Type: String
- projectID Required. Uniquely identifies this project and is used as key for sub-project references. Table and Column: PRJ_PROJECTS.UNIQUE_NAME Type: String
- description Optional. Table and Column: PRJ_PROJECTS.DESCRIPTION Type: String
- AddedBy Optional. When AddedBy (CreatedBy in Classic PPM ), the default Collaboration Manager is assigned to the project. Table and Column: PRJ_PROJECTS.CREATED_BY Type: String
- AddedDate Optional. Table and Column: PRJ_PROJECTS.CREATED_DATE Type: dateTime
- lastUpdatedDate Optional. Uses PRJ_PROJECTS.prModTime if later. Table and Column: PRJ_PROJECTS.LAST_UPDATED_DATE Type: dateTime
- lastUpdatedBy Optional. Uses PRJ_PROJECTS.prModBy if PRJ_PROJECTS.prModTime is later than LAST_UPDATED_BY. Table and Column: PRJ_PROJECTS.LAST_UPDATED_BY Type: String
- Active Optional. Table and Column: PRJ_PROJECTS.IS_ACTIVE Type: Boolean
- Type Required. Table and Column: PRJ_PROJECTS.TYPE Type: String
- stageIdentifier Required. Table and Column: PRJ_PROJECTS.STAGE_IDENTIFIER Type: String
- start Required.

Table and Column: PRJ_PROJECTS.prStart Type: dateTime - finish Required. Table and Column: PRJ_PROJECTS.prFinish Type: dateTime - approved Optional. True only if prApprovedTime is not null. On import, prApprovedTime is set to the current time if it was previously null. Table and Column: None Type: Boolean - openForTimeEntry Optional. Table and Column: PRJ_PROJECTS.prIsOpen Type: Boolean - closed Optional. True only if prClosedTime is not null. On import, prClosedTime is set to the current time if it was previously null. Table and Column: None Type: Boolean - guidelines Optional. Table and Column: PRJ_PROJECTS.prGuidelines Type: String - department Optional. Table and Column: PRJ_PROJECTS.prDepartment Type: String - asOf Optional. Table and Column: PRJ_PROJECTS.prAsOf Type: dateTime - cpmType Optional. Table and Column: PRJ_PROJECTS.prCPMType Type: Integer - trackMode Optional. Table and Column: PRJ_PROJECTS.prTrackMode Type: Integer - sponsoredBy Optional. Table and Column: PRJ_PROJECTS.prSponsoredBy Type: String - requestedBy Optional. Table and Column: PRJ_PROJECTS.prRequestedBy Type: String - requestedTime Optional. Table and Column: PRJ_PROJECTS.prRequestedTime


Type: dateTime
- userText1 Optional. Table and Column: PRJ_PROJECTS.prUserText1 Type: String
- userText2 Optional. Table and Column: PRJ_PROJECTS.prUserText2 Type: String
- userText3 Optional. Table and Column: PRJ_PROJECTS.prUserText3 Type: String
- userText4 Optional. Table and Column: PRJ_PROJECTS.prUserText4 Type: String
- userText5 Optional. Table and Column: PRJ_PROJECTS.prUserText5 Type: String
- userText6 Optional. Table and Column: PRJ_PROJECTS.prUserText6 Type: String
- userText7 Optional. Table and Column: PRJ_PROJECTS.prUserText7 Type: String
- Format Optional. Table and Column: PRJ_PROJECTS.prFormat Type: Integer
- Priority Optional. Defines the priority. Values: 0-36, where:
- 0. Highest priority
- 36. Lowest priority
Table and Column: PRJ_PROJECTS.prPriority Type: Integer
- username Optional. On import, the ProjectManagerMgmt access right is granted to this user. Table and Column: PRJ_PROJECTS.prUsername Type: String
- startImposed Optional. Table and Column: PRJ_PROJECTS.prStartImposed Type: Boolean
- finishImposed Optional. Table and Column: PRJ_PROJECTS.prFinishImposed

Clarity - 16.4.1 4412


Type: Boolean
- baseTime Optional. Table and Column: PRJ_PROJECTS.prBaseTime Type: dateTime
- baseStart Optional. Table and Column: PRJ_PROJECTS.prBaseStart Type: dateTime
- baseFinish Optional. Table and Column: PRJ_PROJECTS.prBaseFinish Type: dateTime
- Chargecode Optional. Validate the existence with PRChargeCode.prID Table and Column: PRJ_PROJECTS.PrChargeCodeID Type: String
- ManagerResource Optional. Must be a valid resource. Table and Column: PRJ_PROJECTS.PrUserName Type: String


PAC_MNT_PROJECTS Schema Tag
The PAC_MNT_PROJECTS tag is part of the inbound schema mapping for the project XOG object and has the following attributes:
- financialLocation Defines the financial location for the project. Table and Column: PAC_MNT_PROJECTS.LOCATIONID Type: String
- financialDepartment Optional. Defines the financial location for the project. Table and Column: PAC_MNT_PROJECTS.DEPARTCODE Type: String
- clientID Defines the unique client identifier for the project. If other financial properties fields are present, then clientId is required. Otherwise, clientID and all financial properties are optional. Table and Column: PAC_MNT_PROJECTS.COMPANY_CODE Type: String
- affiliatedProjectID Optional. Defines the affiliated project unique identifier for the project. Table and Column: PAC_MNT_PROJECTS.AFFILIATEPROJECT Type: String
- financialStatus Optional. Defines the financial status for the project. Table and Column: PAC_MNT_PROJECTS.STATUS Type: String
- approvedForBilling Optional. Table and Column: PAC_MNT_PROJECTS.APPROVED


Type: Boolean - billingType
Optional. Defines the billing type for the project. Values: S, I. Table and Column: PAC_MNT_PROJECTS.TYPE_ Type: String - billingCurrencyCode Required only when Classic PPM is set for multi-currency. Defines the billing currency code for the project. Table and Column: PAC_MNT_PROJECTS.BILLLING_CURRENCY_CODE Type: String - ProjectClass Optional. Defines the project class for the project. This column defaults to clientID if Projectclass is not supplied. Table and Column: PAC_MNT_PROJECTS.CLASS Type: String - WIP Class Optional. Defines the WIP class for the project. This column defaults to clientID if WIP Class is not supplied. Table and Column: PAC_MNT_PROJECTS.WIPCLASS Type: String - UseBudget Optional. Table and Column: PAC_MNT_PROJECTS.BUDGET Type: Number - Billing Project Optional. Table and Column: PAC_MNT_PROJECTS.BILLING_PROJECT_ID Type: Number - Send Bill To Optional. Table and Column: PAC_MNT_PROJECTS.BILL_TO_COMPANY_CODE Type: String - billExpenses Optional. Table and Column: PAC_MNT_PROJECTS.EX_BILL_EXPENSES Type: Number - Document number Optional. Table and Column: PAC_MNT_PROJECTS.CONTRACTNBR Type: String - Contract amount Optional. Table and Column: PAC_MNT_PROJECTS.Contract Amount Type: Number - Enforce Contract amount Optional. Values: - 0. Do not enforce - 1. Enforce Default: 0 Table and Column: PAC_MNT_PROJECTS.ENFORCE_CONTRACT_AMOUNT Type: Number - Date


Optional. Table and Column: PAC_MNT_PROJECTS.Contract Date Type: Date
- Labor Rate Source Optional. Table and Column: PAC_MNT_PROJECTS.TRANSRATESOURCELABOR Type: Number
- Labor Cost Source Optional. Table and Column: PAC_MNT_PROJECTS.TRANSCOSTSOURCELABOR Type: Number
- Labor Exchange Rate Optional. Table and Column: PAC_MNT_PROJECTS.LABOR_EXCHANGE_RATE_TYPE Type: Number
- Materials Rate Source Optional. Table and Column: PAC_MNT_PROJECTS.TRANSRATESOURCEMATERIALS Type: Number
- Materials Cost Source Optional. Table and Column: PAC_MNT_PROJECTS.TRANSCOSTSOURCEMATERIALS Type: Number
- Materials Exchange Rate Optional. Table and Column: PAC_MNT_PROJECTS.MATERIALS_EXCHANGE_RATE_TYPE Type: Number
- EXPENSES Rate Source Optional. Table and Column: PAC_MNT_PROJECTS.TRANSRATESOURCELABOR Type: Number
- EXPENSES Cost Source Table and Column: PAC_MNT_PROJECTS.TRANSCOSTSOURCE EXPENSES Type: Number
- EXPENSES Exchange Rate Table and Column: PAC_MNT_PROJECTS.EXPENSE_EXCHANGE_RATE_TYPE Type: Number
- EQUIPMENT Rate Source Table and Column: PAC_MNT_PROJECTS.TRANSRATESOURCE EQUIPMENT Type: Number
- EQUIPMENT Cost Source Table and Column: PAC_MNT_PROJECTS.TRANSCOSTSOURCE EQUIPMENT Type: Number
- EQUIPMENT Exchange Rate Table and Column: PAC_MNT_PROJECTS.EQUIPMENT_EXCHANGE_RATE_TYPE Type: Number
- Submitted for Approval Set to 1 if the project financial properties will be marked submitted for approval. Table and Column: PAC_MNT_PROJECTS.AWAITINGAPPROVAL Type: Number
- Submitted and Approved

Clarity - 16.4.1 4415

Set to 1 if the project financial properties will be marked submitted and approved Table and Column: PAC_MNT_PROJECTS.APPROVED Type: Number - batchCycle Defines the batch cycle that is associated with the project. Table and Column: Type: String
Resource (PRTeam) Schema Tag
This tag is part of the inbound schema mapping for the Project XOG object. PRTeam is populated when you staff a resource to a project. This tag uses the PRTeam table, which can have 0 to many records and where PRTeam.prProjectID = PRJ_PROJECTS.prID. This schema tag has the following attributes:
- availFrom Uses the PRJ_PROJECTS.prStart if prAvailStart is not set. Table and Column: PRTeam.prAvailStart Type: dateTime
- availTo Uses PRJ_PROJECTS.prFinish if prAvailFinish is not set. Table and Column: PRTeam.prAvailFinish Type: dateTime
- openForTimeEntry Table and Column: PRTeam.prIsOpen Type: Boolean
- lastUpdatedBy Table and Column: PRTeam.prModBy Type: String
- lastUpdatedDate Table and Column: PRTeam.prModTime Type: dateTime
- bookingStatus Table and Column: PRTeam.prBooking Type: Integer
- requestStatus Table and Column: PRTeam.prStatus Type: Integer
- defaultAllocation The default allocation for this team member. Table and Column: PRTeam.prAllocCurve Type: Float
- resourceID May be more than one resource in the prTeam. Table and Column: PRTeam.prResourceID Type: String
- ProjectRoleID May be more than one role in prTeam. Table and Column: PRTeam.PrRoleId Type: String
- teamDefinitionId

The teamDefinitionId attribute contains the code of the team definition associated with the labor resource in the system. During export, if the resource is a team definition, the attribute is added to the <Resource> element into the resulting XML document. For a successful import, verify that all the following conditions are true: - If a <Resource> element has the teamDefinitionId attribute, then that team definition exists in the target system. - The associated resource ID for the team definition in the target system matches the resource ID on the <Resource>
element in the import file. If necessary, use the REST API to create the team definition on the target system prior to importing. - Resources that also team definitions cannot change the first name, last name, display name, resourceID, isActive flag, or availability of the resources in the target system. Any updates to these fields are ignored. Table and Column: TEAM_DEFINITIONS.CODE Type: String
PRTask Schema Tag
This tag is part of the inbound schema mapping for the Project XOG object. PRTeam is populated when you staff a resource to a project. This tag uses the PRTask table, which can have 0 to many records and where PRTask.prProjectID = PRJ_PROJECTS.prID. This schema tag has the following attributes:
- taskID Defines the unique identifier for the task. Required, if referenced by Relation tag or as a sub-project. Table and Column: PRTask.prExternalID Type: String
- name Defines the name for the task. Table and Column: PRTask.prName Type: String
- orderID Table and Column: PRTask.prWBSSequence Type: Integer
- outlineLevel Table and Column: PRTask.prWBSLevel Type: Integer
- start Table and Column: PRTask.prStart Type: dateTime
NOTE An imported task with no start and finish dates in the inbound XML file inherits the project Start Date and Finish Date values.
- baseStart Table and Column: PRTask.prBaseStart Type: dateTime
- finish Table and Column: PRTask.prFinish Type: dateTime
- baseFinish Table and Column: PRTask.prBaseFinish Type: dateTime
- milestone Table and Column: PRTask.prIsMilestone


Type: Boolean
- summary Set to True only if prIsTask is False. Table and Column: Not Applicable Type: Boolean
- key Table and Column: PRTask.prIsKey Type: Boolean
- category Table and Column: PRTask.prCategory Type: String
- status Defines the status of the task. Values:
- 0. Not Started
- 1. Started
- 2. Complete
Table and Column: PRTask.prStatus Type: Integer
- percComp Valid values are between 0 and 1 inclusive, where 100 percent is shown as 1.0. Table and Column: PRTask.prPctComplete Type: Float
- lastUpdatedBy Table and Column: PRTask.prModBy Type: String
- lastUpdatedDate Table and Column: PRTask.prModTime Type: dateTime
- earlyStart Table and Column: PRTask.prEarlyStart Type: dateTime
- lateStart Table and Column: PRTask.prLateStart Type: dateTime
- earlyFinish Table and Column: PRTask.prEarlyFinish Type: dateTime
- lateFinish Table and Column: PRTask.prLateFinish Type: dateTime
- Duration Table and Column: PRTask.prDuration Type: Float
- baselineDuration Table and Column: PRTask.prBaseDuration Type: Float
- totalSlack Table and Column: PRTask.prTotalFloat

Clarity - 16.4.1 4418


Type: Float
- Unplanned If the task is being updated, set to False". Table and Column: PRTask.prIsUnplanned Type: Boolean
- shortName Table and Column: PRTask.prShortname Type: String
- Guidelines Table and Column: PRTask.prGuidelines Type: String
- Fixed Table and Column: PRTask.prIsFixed Type: Boolean
- Locked Table and Column: PRTask.prIsLocked Type: Boolean
- baseFixed Table and Column: PRTask.prBaseIsFixed Type: Boolean
- baseTime Table and Column: PRTask.prBaseTime Type: dateTime


TaskLabor (PRAssignment) Schema Tag
This tag is part of the inbound schema mapping for the Project XOG object and the PRAssignment table is populated when a resource is assigned to a task. This feature is not supported in Classic PPM but can be accomplished with Open Workbench or the Classic PPM Microsoft Project interface. This tag uses the PRAssignment table, which can have 0 to many records, and where PRAssignment.prTaskID = PRTask.prID. This tag has the following attributes:
- Start Table and Column: PrAssignment.prStart Type: dateTime
- finish Table and Column: PrAssignment.prFinish Type: dateTime
- actualWork Table and Column: PrAssignment.prActSum Type: Float
- remainingWork Table and Column: PrAssignment.prEstSum Type: Float
- baselineWork Table and Column: PrAssignment.prBaseSum Type: Float
- actualThrough Table and Column: PrAssignment.prActThru Type: dateTime
- lastUpdatedBy Table and Column: PrAssignment.prModBy


Type: string
- lastUpdatedDate Table and Column: PrAssignment.prModTime Type: dateTime
- Unplanned During update Unplanned is False. Table and Column: PrAssignment.prIsUnplanned Type: Boolean
- estPattern Table and Column: PrAssignment.prEstPattern Type: Integer
- basePattern Table and Column: PrAssignment.prBasePattern Type: Integer
- estMax Table and Column: PrAssignment.prEstMax Type: Float
- baseMax Table and Column: PrAssignment.prBaseMax Type: Float
- pendEstSum Table and Column: PrAssignment.prPendEstSum Type: Float
- pendActSum Table and Column: PrAssignment.prPendActSum Type: Float
- pendStart Table and Column: PrAssignment.prPendStart Type: dateTime
- pendFinish Table and Column: PrAssignment.prPendFinish Type: dateTime
- Status Table and Column: PrAssignment.prStatus Type: Integer
- curveType Required. Table and Column: PrAssignment.prExtension Type: Integer
- Start Required. Table and Column: PrAssignment.prExtension Type: dateTime
- Finish Required. Table and Column: PrAssignment.prExtension Type: dateTime
- Sum Required. Table and Column: PrAssignment.prExtension

Clarity - 16.4.1 4420

Type: Float - resourceID
Required. Table and Column: PrAssignment.prResourceID Type: String - teamDefinitionId The teamDefinitionId attribute contains the code of the team definition associated with the labor resource in the system. During export, if the resource is a team definition, the attribute is added to the <TaskLabor> element into the resulting XML document. For a successful import, verify that all the following conditions are true: - If a <Resource> element has the teamDefinitionId attribute, then that team definition exists in the target system. - The associated resource ID for the team definition in the target system matches the resource ID on the <Resource>
element in the import file. If necessary, use the REST API to create the team definition on the target system prior to importing. - Resources that also team definitions cannot change the first name, last name, display name, resourceID, isActive flag, or availability of the resources in the target system. Any updates to these fields are ignored. Type: String
Example 1: Export (XOG-out) a Project with a Resource Team
The following example shows an exported project with assignment and staff records from a defined resource of type team. In this example, the Resource and TaskLabor elements contain their own teamDefinitionId attribute.
<?xml version="1.0" encoding="UTF-8"?> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/ nikuxog_project.xsd"> <Header action="write" externalSource="NIKU" objectType="project" version="15.5.0.1"/>
<Projects> <Project active="true" allowAssignedTasksOnly="0" approved="false" approvedForBilling="1" assgnPool="0"
billingCurrencyCode="USD" billingType="S" budgetCostFinish="2018-07-09T17:00:00" budgetCostStart="2018-07-09T00:00:00"
calculateFinancialMetrics="true" closed="false" costType="OPERATING" currencyISOcode="USD" equipmentExchageRateType="AVERAGE" evCalcMethod="0"
expenseExchageRateType="AVERAGE" financialStatus="H" finish="2018-07-09T17:00:00" format="0" investmentDefinedReinvestmentRate="0"
investmentDefinedTotalCostOfCapital="0" laborExchageRateType="AVERAGE" lastUpdatedBy="admin" lastUpdatedDate="2018-07-09T10:11:38"
managerResourceID="admin" materialExchageRateType="AVERAGE" name="My FooBar 2" openForTimeEntry="true"
pageLayoutCode="projmgr.projectPageFrame" percentCalcMode="0" percentComplete="0" plannedCostFinish="2018-07-09T17:00:00" plannedCostStart="2018-07-09T00:00:00"
priority="10" progress="0" projectID="foobar" requiredForScenarios="false" setBudgetValuesEqualToPlannedValues="true" start="2018-07-09T08:00:00"
status="0" syncInvestmentAndBudgetDates="true" template="false" trackMode="2" useSystemDefinedReinvestmentRate="true"
useSystemDefinedTotalCostOfCapital="true"> <Resources> <Resource availFrom="2018-07-09T08:00:00" availTo="2018-07-09T17:00:00" bookingStatus="5"
capitalPercentage="0" defaultAllocation="1" isProjectManager="false" lastUpdatedBy="admin" lastUpdatedDate="2018-07-09T10:11:13"
openForTimeEntry="true" resourceID="TM00005" teamDefinitionId="TM00005"> <CustomInformation>

<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> <SkillAssocs/> </Resource> </Resources> <Tasks> <Task evCalcMethod="0" finish="2018-07-09T17:00:00" fixed="false" internalTaskID="5020060" key="false" lastUpdatedBy="admin" lastUpdatedDate="2018-07-09T10:11:13" lockedForScheduling="false" milestone="false" name="My FooBar" openForTimeEntry="true" orderID="1" outlineLevel="1" percComp="0" start="2018-07-09T08:00:00" status="0" summary="false" taskID="~rmw" topDownPercent="0"> <Assignments>
<TaskLabor actualWork="0" estMax="1" estPattern="3" finish="2018-07-09T17:00:00" lastUpdatedBy="admin" lastUpdatedDate="2018-07-09T10:11:13" remainingWork="16" resourceID="TM00005"
start="2018-07-09T08:00:00" teamDefinitionId="TM00005" unpostedActuals="0"> <CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue>
</CustomInformation> </TaskLabor> </Assignments> <estimateRules/> <CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> </Task> <Task evCalcMethod="0" finish="2018-07-09T17:00:00" fixed="false" internalTaskID="5020061" key="true" lastUpdatedBy="admin" lastUpdatedDate="2018-07-09T10:11:30" lockedForScheduling="false" milestone="false" name="Test Task 1" nextSiblingOf="~rmw" openForTimeEntry="true" orderID="2" outlineLevel="1" percComp="0" start="2018-07-09T08:00:00" status="0" summary="false" taskID="tt1"> <Assignments> <TaskLabor actualWork="0" estMax="1" estPattern="3" finish="2018-07-09T17:00:00" lastUpdatedBy="admin" lastUpdatedDate="2018-07-09T10:11:38" remainingWork="16" resourceID="TM00005" start="2018-07-09T08:00:00" teamDefinitionId="TM00005" unpostedActuals="0"> <CustomInformation>
<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> </TaskLabor> </Assignments> <estimateRules/> <CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> </Task> </Tasks> <Allocations/> <scenarioDependencies/> <InvestmentAssociations> <Allocations/> <Hierarchies/> </InvestmentAssociations>

<General addedBy="admin" addedDate="2018-07-09"/> <OBSAssocs complete="false"/>
</Project> </Projects> </NikuDataBus>
In addition, capacity scenarios can be exported/imported and these also may have TaskLabor elements that reference team definitions. They require the teamDefinitionId attribute during export and are subject to team definition validation on import.
Example 2: Import (XOG-in) a Custom Subobject for a Project Clarity 15.5.1 introduced a new XOG attribute called apiEnabled . When true, this flag API-enables a new custom subobject, or can be used to update an existing custom subobject. You can API-enable any custom subobject if the parent object is a Project or an Abstract object such as an investment or custom investment type. When API-enabled, all HTTP commands including GET, POST, PUT, and DELETE are available.
TIP Once you API-enable an object, you cannot undo or disable it from the API. The API alias follows the same naming rules introduced in 15.5.0 for custom investment types. The object code is used to create an API alias with cust (short for custom) inserted as a prefix before the plural form of the object name. The final API alias appears in mixed case (CamelCase). For example, if the object code is demand , the generated API is custDemands . The following XML creates a custom subobject of a Project parent object:
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/ nikuxog_contentPack.xsd">
<Header action="write" externalSource="NIKU" objectType="contentPack" version="15.5.1.1"/> <contentPack update="true">
<objects> <object code="base1" apiEnabled="true" entityCodeAttribute="odf_entity_code"
fiscalPeriodTypeAttribute="odf_period_type" pageInstanceType="delme1" pageLayoutAttribute="page_layout" parentObjectCode="project"
periodEndAttribute="odf_period_end" periodStartAttribute="odf_period_start" raiseEvents="false" source="customer" update="true"> <nls languageCode="en" name="base1"/> <displayMappings/> <scoreContributions/> <autonumbering/>
</object> </objects> </contentPack> </NikuDataBus>
TIP New disableTSVUpdate Attribute in XOG Import Files for Projects and Investments In releases before 15.6, a XOG import (write) file, specifically for a project or non-project investment that included the optional openForTimeEntry attribute and associated resources who were also being allocated to a team (a special type of resource) through the same XOG import file, would cycle through all the assignments in the investment. This behavior could result in performance issues, especially during attempts to import large numbers of resources (for example, more than 10,000).
- When adding a resource to a team for an investment in the new or Classic PPM user interface, the application appends the ETC or actuals to the previously-generated slice curve.
- When adding a resource through the XOG, the existing time-scaled value (TSV) curves are unknown and cannot be accessed; instead, the XOG import causes the application to regenerate all TSV curves for all assignments in the investment.
When you upgrade to Clarity 15.6 or higher, you can improve XOG performance by including the new disableTSVUpdate XOG attribute: - If set to true, the XOG import does not attempt to process the aggregated TSV values; instead,
administrators would run the Investment Allocation job to update the aggregated totals. - If the attribute is set to false or excluded from the import file, the functionality remains the same as the
previous release.
See XOG: Investment.
XOG: Requirement
Use the requirement XOG object to view inbound and outbound requirements. The requirement read XOG reads all data from existing requirements and writes them to an xml format. The requirement write XOG writes new requirements or updates existing requirements.
Schema Name nikuxog_requirement.xsd
Read and Write XML Files The following XML files are included: - requirements_read.xml. Use this file to export requirements from Classic PPM. - requirements_write.xml. Use this file to import requirements that were previously exported from Classic PPM. Prerequisites None
Business Rules and Processing The following business rules and processing apply to this XOG: - Classic PPM users must have the appropriate access rights to read or write requirements using the XOG. - Referenced investments, releases, and users (for example, manager) must exist in Classic PPM before xogging in the
requirement or they will not be added. - Requirements are defined for inbound (write) and outbound (read) processing. Read Filters The following read filters are used: - objectID - investmentID - managerName - requirementTitle - requirementStatus (New, Need Additional Information, In Pipeline, Active Candidate, Assigned to Release, Approved,
Implemented, Duplicate, Rejected, and Draft) - requirementType (Feature, Requirement, User Story) Error Handling

The following fields are written to the Success and Error files when referenced objects such as users, investments, and releases or lookup values cannot be found, and the XOG process generates a warning:
- created_by - currency_code - last_updated_by - manager - requested_by - risk - status - theme - type - release_id - project_id - task_name - investment_id
If dependencies or hierarchy links are included in the inbound XOG file, a warning is written to the Success and Error files if either one of the associated requirements does not exist. Since you can add the missing requirement later to the file, this warning does not imply that the association will not be made when xogging in many requirements. The intention of the warning is to provide information to the administrator so that they can confirm that all associations have been made.
Schema Mappings
The requirement element can contain link and dependency elements which relate requirements to one another. The following tables are mapped to requirements.
- RQP_RELEASES Schema Tag - RQP_REQUIREMENTS Schema Tag - RQP_REQ_DEPENDENCIES Schema Tag - PRTASK Schema Tag - SRM_RESOURCES Schema Tag - INV_INVESTMENTS Schema Tag
RQP_RELEASES Schema Tag
The RQP_RELEASES tag is part of the schema mapping for the requirement XOG object and has the following attributes:
- release_id Table and Column: RQP_RELEASES.CODE Type: String
RQP_REQUIREMENTS Schema Tag
The RQP_REQUIREMENTS tag is part of the schema mapping for the requirement XOG object and has the following attributes:
- title Required. Table and Column: RQP_REQUIREMENTS.TITLE Type: String
- object_id Required. Must be unique. Table and Column: RQP_REQUIREMENTS.CODE Type: String
- child


Required. Table and Column: RQP_REQUIREMENTS.CODE Type: String
- parent Required. Table and Column: RQP_REQUIREMENTS.CODE Type: String
- requirement Required. Table and Column: RQP_REQUIREMENTS.CODE Type: String
- dependent Required. Table and Column: RQP_REQUIREMENTS.CODE Type: String
- description Required. Must be unique. Table and Column: RQP_REQUIREMENTS.DESCRIPTION Type: String
- committed Required. Must be unique. Table and Column: RQP_REQUIREMENTS.COMMITTED Type: Boolean
- est_op_cost Table and Column: RQP_REQUIREMENTS.EST_OP_COST Type: Non-negative number
- est_cap_cost Table and Column: RQP_REQUIREMENTS.EST_CAP_COST Type: Non-negative number
- est_effort Table and Column: RQP_REQUIREMENTS.EST_EFFORT Type: Non-negative number
- est_hlm_size Table and Column: RQP_REQUIREMENTS.EST_HLM_SIZE Type: Integer
- est_size Table and Column: RQP_REQUIREMENTS.EST_SIZE Type: Non-negative number
- bgt_op_cost Table and Column: RQP_REQUIREMENTS.BGT_OP_COST Type: Non-negative number
- bgt_cap_cost Table and Column: RQP_REQUIREMENTS.BGT_CAP_COST Type: Non-negative number
- bgt_effort Table and Column: RQP_REQUIREMENTS.BGT_EFFORT Type: Non-negative number
- bgt_size Table and Column: RQP_REQUIREMENTS.BGT_SIZE Type: Non-negative number
- priority_1

Clarity - 16.4.1 4426


Table and Column: RQP_REQUIREMENTS.PRIORITY_1 Type: Integer (allowed range 0-100)
- priority_2 Table and Column: RQP_REQUIREMENTS.PRIORITY_2 Type: Integer (allowed range 0-100)
- priority_3 Table and Column: RQP_REQUIREMENTS.PRIORITY_3 Type: Integer (allowed range 0-100)
- priority_4 Table and Column: RQP_REQUIREMENT.PRIORITY_4 Type: Integer (allowed range 0-100)
- feature_overview Table and Column: RQP_REQUIREMENTS.FEATURE_OVERVIEW Type: String
- feature_driver Table and Column: RQP_REQUIREMENTS.FEATURE_DRIVER Type: String
- feature_vision Table and Column: RQP_REQUIREMENTS.FEATURE_VISION Type: String
- req_impl_plan Table and Column: RQP_REQUIREMENTS.REQ_IMPL_PLAN Type: String
- req_impact_analysis Table and Column: RQP_REQUIREMENTS.REQ_IMPACT_ANALYSIS Type: String
- req_comments Table and Column: RQP_REQUIREMENTS.REQ_COMMENTS Type: String
- story_text_1 Table and Column: RQP_REQUIREMENTS.STORY_TEXT_1 Type: String
- story_text_2 Table and Column: RQP_REQUIREMENTS.STORY_TEXT_2 Type: String
- story_text_3 Table and Column: RQP_REQUIREMENTS.STORY_TEXT_3 Type: String


RQP_REQ_DEPENDENCIES Schema Tag
The RQP_REQ_DEPENDENCIES tag is part of the schema mapping for the requirement XOG object and has the following attributes:
- is_mutual Table and Column: RQP_REQ_DEPENDENCIES.IS_MUTUAL Type: Boolean

PRTASK Schema Tag The PRTASK tag is part of the schema mapping for the requirement XOG object and has the following attributes: - task_name


Table and Column: PRTASK.PRNAME Type: String


SRM_RESOURCES Schema Tag
The SRM_RESOURCES tag is part of the schema mapping for the requirement XOG object and has the following attributes:
- requested_by Table and Column: SRM_RESOURCES.UNIQUE_NAME Type: String
- manager Table and Column: SRM_RESOURCES.UNIQUE_NAME Type: String
- approved_by Table and Column: SRM_RESOURCES.UNIQUE_NAME Type: String
- created_by Table and Column: SRM_RESOURCES.UNIQUE_NAME Type: String
- last_updated_by Table and Column: SRM_RESOURCES.UNIQUE_NAME Type: String

INV_INVESTMENTS Schema Tag
The INV_INVESTMENTS tag is part of the schema mapping for the requirement XOG object and has the following attributes:
- project_id Defines the unique identifier for the project. Table and Column: INV_INVESTMENTS.CODE Type: String
- investment_id Defines the unique identifier for the investment. Table and Column: INV_INVESTMENTS.CODE Type: String

XOG: Resource
Use the resource XOG object to view inbound (write) and outbound (read) resource attributes. This XOG object does not allow you to create a resource for a specific partition; it only supports the _ROOT partition code. You can, however, use the content pack XOG to add a resource as a member of a partition.
Schema Name
nikuxog_resource.xsd
Read and Write XML Files
The following XML files are included:
- rsm_resources_read.xml. Use this file to export resource attributes from Classic PPM. - rsm_resources_write.xml. Use this file to import resource attributes that were previously exported from Classic PPM.
Business Rules and Processing


Before you import resources, set up the following items:
- Manager Defines the manager for the resource by the username for the manager. In the user interface, the manager browse field is a lookup against the CMN_SEC_USERS table. If the manager does not exist, the XML schema posts the resource without the manager username and a warning is posted to the Success and Error file. If the username exists, the XML schema fills the field. When this XML schema is run for the first time, many records may be posted without values for the manager. After the schema is run, user profiles are updated to include a value for the manager (provided the user was added during the first pass).
- Company ID Defines the unique identifier for the company that is associated with the resource, which is a browse field against the SRM_COMPANIES table. If the company does not exist, the schema posts the resource, leaves this field blank, and posts a warning to the Success and Error file. If the company exists, the schema fills the field. When this schema is run the first time, many records are posted without values for the company. After when the schema is run, user profiles are updated to include the company information (provided the user was added during the first pass).
- Financial Properties The financial properties associated with the resource. Before resources can be imported into Classic PPM, the following financial properties are set up in the Financial Administration module. If the financial properties are not found in Classic PPM, the resource financial properties are not imported and an error is written to the Success and Error file. These properties are optional: - Financial Location - Financial Department - Resource Class
- Vendor This item is an exception and is not required for the financial properties. The resource is added without a vendor and a warning is posted to the Success and Error file.
- Transaction Class The transaction class that is associated with the resource. The value in the XOG is found in the TRANSCLASS table.
- Management Properties Defines the management properties that are associated with the resource. The XOG assumes that a resource is associated with the standard calendar that is available for a typical work day's standard number of hours (based on the standard calendar settings). The value is based on the default Allocation percentage.
- OBS association The OBS that is associated with the resource. A Security OBS is required for labor resources; all resources can have OBS associations. To accommodate, there is an OBS Associations portlet that you can use to import and export.
- Custom Attributes The custom fields that are associated with the resource. The XOG allows for an unlimited number of custom-defined fields. However, you must map the generated field to the schema. Within the schema for customdefined fields, provide the Column Name, Attribute Name, and Value (because these can be modified by Classic PPM users).
- Lookup values Any lookup values that are associated with the resource. Lookup codes must be provided when appropriate and are validated against CMN_LOOKUPS. Lookups are extracted for a set of lookup codes.
- Primary RoleId The primary role of this resource, which is a browse field against SRM_RESOURCES. If the primary RoleId passed does not exist, this field is left blank and a warning message is posted to the Success and Error file (the field is filled when the role exists).
- teamDefinitionId Optional. A resource that represents a team is exported with a teamDefinitionId attribute that contains the code of the associated team definition. This applies to exporting resources, exporting allocations on projects, or exporting task labor resources for assignments. During export, if the resource is a team definition, the attribute is added to the <Resource> element into the resulting XML document.For a successful import, the following conditions must be true: - If a <Resource> element has the teamDefinitionId attribute, then that team definition exists in the target system. - The associated resource ID for the team definition in the target system matches the resource ID on the <Resource> element in the import file. If necessary, use the REST API to create the team definition on the target system prior to importing. - Resources that are also team definitions cannot change the first name, last name, display name, resourceID, isActive flag, or availability of the resources in the target system. Any updates to these fields are ignored.

Table and Column: TEAM_DEFINITIONS.CODE Type: String
Read Filters
The XOG allows for outbound processing of users who are based on the following fields:
- Resource Type - Active - And and Or processing is supported between the two fields and for processing within Type. The following combinations
are supported:isActive = x
where x = Active, Inactive
ResourceType = x
where x = LABOR, MATERIAL, EQUIPMENT or EXPENSE
isActive = x AND ResourceType = y
where x = Active, Inactive where y = one of many Resource Types
The following arguments are accepted: - Contact: include_contact - Management: include_management - Financials: include_financial - Custom Information: include_custom The following statements concern these two arguments:When all arguments are "Off", only resource basic information is exported.When all arguments are "On", all resource information is exported.
Error Handling
The following fields are written to the Success and Error file when the XOG process generates an error or warning:
- externalId - externalSource - resourceId - lastName
If an error occurs, the table is not updated. Fix the error and run the XOG again. When a warning occurs because of inconsistencies in the data, the record is posted and the non-required fields are defaulted. Validate the errors in the following table against the resource:

Error or Warning Type resourceId
managerUserName

Description
The unique identifier for the resource. The resource is validated against the resourceId field. If the resource ID:
- Is not unique, then the resource is not imported and an error is
posted to the Success and Error file.
- Unique, then the resource is imported.
The unique identifier for the manager who is associated with the resource. The manager is validated against the companyId field. If the manager:
- Is not found, then the resource is imported without any
association to a manager.
- Exists, then the resource is also imported.


companyId
vendorCode
PAC_MNT_RESOURCES
- Example: Resource Team Definition - Personal Information Schema Tag - Contact Information Schema Tag (Resources XOG) - Management Information Schema Tag - Financial Information Schema Tag - Expenses Schema Tag - Rates and Costs Schema Tag - Custom Information Schema Tag (Resources XOG) - OBS Associations Schema Tag (Resources XOG) - SkillAssocs Schema Tag (Resource XOG)

The unique identifier for the company that is associated with the resource. The company ID is validated against the companyId field. If the company:
- Is not found, then the resource is imported without any
association to a company.
- Exists, then the resource is also imported.
The unique code for the vendor that is associated with the resource. The vendor code is validated against the vendorCode field. If the vendor:
- Is not found, then the resource is imported without any
association to a vendor.
- Exists, then the resource is also imported.
The financial properties that are related to the resource. If the financial properties:
- Do not exist, then the resource is imported without any
association to financial properties.
- Exist, then they are also imported.

Example: Resource Team Definition
The following example shows an exported resource team definition. The teamDefinitionId attribute is on the <Resource> element and contains the code of the team definition instance.
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/ nikuxog_resource.xsd">
<Header action="write" externalSource="NIKU" objectType="resource" version="15.5.0.1"/> <Resources>
<Resource externalId=" " includeInDatamart="true" isActive="true" isExternal="false" resourceId="TM00001"
resourceType="LABOR" teamDefinitionId="TM00001"> <PersonalInformation displayName="TeamResourceXOGSTest" lastName="TeamResourceXOGSTest"/> <ManagementInformation availability="100" openForTimeEntry="false" trackMode="None" userFlag1="false" userFlag2="false" userNumber1="0" userNumber2="0"/> <General addedBy="admin" addedDate="2018-07-03"/> <OBSAssocs complete="false"/> <SkillAssocs/> <Calendar baseCalendar="Standard" resetCalendar="false"/>
</Resource> </Resources> </NikuDataBus>


TIP When importing a resource that is a team definition the following fields are not updated even if they differ from the existing team definition in the target system: - ID - Full Name - Availability - Active flag Changes are ignored, no update is made, and no warning or error message appears. The following example shows an exported project with assignment and staff records that are team definitions. The <Resource> and <TaskLabor> elements have the teamDefinitionId attribute.
<?xml version="1.0" encoding="UTF-8"?> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/ nikuxog_project.xsd">
<Header action="write" externalSource="NIKU" objectType="project" version="15.5.0.1"/> <Projects>
<Project active="true" allowAssignedTasksOnly="0" approved="false" approvedForBilling="1" assgnPool="0" billingCurrencyCode="USD" billingType="S"
budgetCostFinish="2018-07-09T17:00:00" budgetCostStart="2018-07-09T00:00:00" calculateFinancialMetrics="true" closed="false"
costType="OPERATING" currencyISOcode="USD" equipmentExchageRateType="AVERAGE" evCalcMethod="0" expenseExchageRateType="AVERAGE"
financialStatus="H" finish="2018-07-09T17:00:00" format="0" investmentDefinedReinvestmentRate="0" investmentDefinedTotalCostOfCapital="0"
laborExchageRateType="AVERAGE" lastUpdatedBy="sasire" lastUpdatedDate="2018-07-09T10:11:38" managerResourceID="sasire"
materialExchageRateType="AVERAGE" name="My FooBar 2" openForTimeEntry="true" pageLayoutCode="projmgr.projectPageFrame" percentCalcMode="0"
percentComplete="0" plannedCostFinish="2018-07-09T17:00:00" plannedCostStart="2018-07-09T00:00:00" priority="10" progress="0" projectID="foobar"
requiredForScenarios="false" setBudgetValuesEqualToPlannedValues="true" start="2018-07-09T08:00:00" status="0"
syncInvestmentAndBudgetDates="true" template="false" trackMode="2" useSystemDefinedReinvestmentRate="true" useSystemDefinedTotalCostOfCapital="true">
<Resources> <Resource availFrom="2018-07-09T08:00:00" availTo="2018-07-09T17:00:00" bookingStatus="5"
capitalPercentage="0" defaultAllocation="1" isProjectManager="false" lastUpdatedBy="sasire" lastUpdatedDate="2018-07-09T10:11:13"
openForTimeEntry="true" resourceID="TM00005" teamDefinitionId="TM00005"> <CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> <SkillAssocs/>
</Resource> </Resources> <Tasks>
<Task evCalcMethod="0" finish="2018-07-09T17:00:00" fixed="false" internalTaskID="5020060" key="false" lastUpdatedBy="sasire"
lastUpdatedDate="2018-07-09T10:11:13" lockedForScheduling="false" milestone="false" name="My FooBar" openForTimeEntry="true" orderID="1"

outlineLevel="1" percComp="0" start="2018-07-09T08:00:00" status="0" summary="false" taskID="~rmw" topDownPercent="0">
<Assignments> <TaskLabor actualWork="0" estMax="1" estPattern="3" finish="2018-07-09T17:00:00"
lastUpdatedBy="sasire" lastUpdatedDate="2018-07-09T10:11:13" remainingWork="16" resourceID="TM00005"
start="2018-07-09T08:00:00" teamDefinitionId="TM00005" unpostedActuals="0"> <CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation>
</TaskLabor> </Assignments> <estimateRules/> <CustomInformation>
<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> </Task> <Task evCalcMethod="0" finish="2018-07-09T17:00:00" fixed="false" internalTaskID="5020061" key="true" lastUpdatedBy="sasire" lastUpdatedDate="2018-07-09T10:11:30" lockedForScheduling="false" milestone="false" name="Test Task 1" nextSiblingOf="~rmw" openForTimeEntry="true" orderID="2" outlineLevel="1" percComp="0" start="2018-07-09T08:00:00" status="0" summary="false" taskID="tt1"> <Assignments>
<TaskLabor actualWork="0" estMax="1" estPattern="3" finish="2018-07-09T17:00:00" lastUpdatedBy="sasire"
lastUpdatedDate="2018-07-09T10:11:38" remainingWork="16" resourceID="TM00005" start="2018-07-09T08:00:00" teamDefinitionId="TM00005" unpostedActuals="0">
<CustomInformation> <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue>
</CustomInformation> </TaskLabor> </Assignments> <estimateRules/> <CustomInformation>
<ColumnValue name="partition_code">NIKU.ROOT</ColumnValue> </CustomInformation> </Task> </Tasks> <Allocations/> <scenarioDependencies/> <InvestmentAssociations> <Allocations/> <Hierarchies/> </InvestmentAssociations> <General addedBy="sasire" addedDate="2018-07-09"/> <OBSAssocs complete="false"/> </Project> </Projects> </NikuDataBus>

TIP You can import and export resource capacity planning scenarios and can even include a <TaskLabor> element that references team definitions. Tag these scenarios with the teamDefinitionId attribute during export. Imported items are subject to team definition validation.
Personal Information Schema Tag The personal information tag is part schema mapping for the resource XOG object and has the following attributes:
resource xog attribute--External Source ExternalSource Required. Required by the schema lookup value and is the originating system ID (for example, Oracle). Table and Column: SRM_RESOURCES.External_Source_ID Type: String in the XML Schema and Number in Classic PPM.
resource xog attribute--ExternalId ExternalId Required. Required by the XML schema and is the originating unique identifier. Table and Column: SRM_RESOURCES.External_ID Type: String
resource xog attribute--isActive isActive Optional. Defines the status of the resource. Values: - 1. True - 0. False Default: 1 Table and Column: SRM_RESOURCES.Is_Active Type: Boolean
resource xog attribute--resourceType resourceType Optional. Defines the resource type. Values: LABOR, MATERIAL, EQUIPMENT, and EXPENSE Default: LABOR Table and Column: SRM_RESOURCES.Resource_type Type: String

resource xog attribute--forecastRate forecastRate Optional. Defines the resource allocation hourly forecast rate. You can export this field only if it contains a value. Table and Column: SRM_RESOURCES.Forecast_Rate Type: Double
resource xog attribute--employmentType employmentType Optional. Defines the employment type. Values: employee and contractor Default: employee Table and Column: SRM_RESOURCES.Person_Type Type: String
resource xog attribute--hireDate hireDate Optional. Table and Column: SRM_RESOURCES.Date_of_Hire Type: Date
resource xog attribute--terminationDate terminationDate Optional. Table and Column: SRM_RESOURCES.Date_of_Termination Type: Date
resource xog attribute--managerUserName managerUserName Optional. Identifies the manager of the resource. Table and Column: SRM_RESOURCES.Manager_ID(User Name) Type: String
resource xog attribute--isExternal isExternal Optional. Defines the status of the resource. Values: - 1. True - 0. False


Default: 0 Table and Column: SRM_RESOURCES.Is_External Type: Boolean
resource xog attribute--firstName firstName Optional. Table and Column: SRM_RESOURCES.First_Name Type: String
resource xog attribute--lastName lastName Optional. Validates this field for LABOR resources Table and Column: SRM_RESOURCES.Last_Name Type: String
resource xog attribute--middleName middleName Optional. Table and Column: SRM_RESOURCES.Middle_Name Type: String
resource xog attribute--displayName displayName Optional. The name to display on the interface. Table and Column: SRM_RESOURCES.Full_Name Type: String
resource xog attribute--emailAddress emailAddress Optional. The email address of the resource. Table and Column: SRM_RESOURCES.Email Type: String
Contact Information Schema Tag (Resources XOG) This tag is part schema mapping for the resources XOG object and has the following attributes: - companyName
Optional. The association of a resource to a company. Table and Column: SRM_CONTACTS.Company _ID

Clarity - 16.4.1 4436


Type: String
- jobTitle Optional. Table and Column: SRM_CONTACTS.Job_Title Type: String
- address1 Optional. Table and Column: SRM_CONTACTS.Address1 Type: String
- address2 Optional. Table and Column: SRM_CONTACTS.Address2 Type: String
- address3 Optional. Table and Column: SRM_CONTACTS.Address3 Type: String
- city Optional. Table and Column: SRM_CONTACTS.City Type: String
- state Optional. Table and Column: SRM_CONTACTS.State_Province Type: String
- postalCode Optional. Table and Column: SRM_CONTACTS.Postal _Code Type: String
- countryId Optional. Lookup values for all countries. Table and Column: SRM_CONTACTS.Country_ID Type: Number
- homePhone Optional. No format is enforced. Table and Column: SRM_CONTACTS.Phone_Home Type: String
- workPhone Optional. No format is enforced. Table and Column: SRM_CONTACTS.Phone_Work Type: String
- mobilePhone Optional. No format is enforced. Table and Column: SRM_CONTACTS.Phone_Cell Type: String
- fax Optional. No format is enforced. Table and Column: SRM_CONTACTS.Phone_Fax Type: String
- pager Optional. No format is enforced.

Clarity - 16.4.1 4437


Table and Column: SRM_CONTACTS.Phone_Pager Type: String - webAddress Optional. Table and Column: SRM_CONTACTS.URL Type: String
Management Information Schema Tag
This tag is part schema mapping for the resources XOG object and has the following attributes:
- category Optional. Defines the management category for this resource. Table and Column: PRJ_RESOURCES.PRCATEGORY Type: String
- defautlAllocationPercentage Optional. Defines the default allocation percentage for this resource. Default: 100 Table and Column: PRJ_RESOURCES.DEFAULTALLOCATION Type: Number
- trackMode Optional. Specifies the method in which this resource tracks time. Values: Clarity, None, and Other. Default: Clarity Time Table and Column: PRJ_RESOURCES.PRTRACKMODE Type: Number
- openForTimeEntry Optional. Defines whether this resource is open for time entry. Values: - 1. True - 0. False
Default: 1 Table and Column: PRJ_RESOURCES.PRISOPEN Type: Boolean - primaryRoleId Optional. Indicates the role to which the resource belongs. Table and Column: PRJ_RESOURCES.PRPRIMARYROLEID Type: Number - inputTypeCode Optional. Defines the default input type code for the resource. Table and Column: PRJ_RESOURCES.PRTYPECODEID Type: Number - userText1 Optional. A user-defined field. Table and Column: PRJ_RESOURCES.PRUSERTEXT1 type: String - userText3 Optional. A user-defined field. Table and Column: PRJ_RESOURCES.PRUSERTEXT2 type: String - userText3 Optional. A user-defined field.

Clarity - 16.4.1 4438


Table and Column: PRJ_RESOURCES.PRUSERTEXT3 type: String
- userText4 Optional. A user-defined field. Table and Column: PRJ_RESOURCES.PRUSERTEXT4 type: String
- userFlag1 Optional. A user-defined field. Table and Column: PRJ_RESOURCES.PRUSERFLAG1 Type: Boolean
- userFlag2 Optional. A user-defined field. Table and Column: PRJ_RESOURCES.PRUSERFLAG2 Type: Boolean
- userNumber1 Optional. A user-defined field. Table and Column: PRJ_RESOURCES.PRUSERNUMBER1 Type: Number
- userNumber1 Optional. A user-defined field. Table and Column: PRJ_RESOURCES.PRUSERNUMBER1 Type: Number


Financial Information Schema Tag
This schema tag is part schema mapping for the resource XOG object and has the following attributes:
- FinancialCode Required. A unique primary key that is equal to the Resource ID. This field is not exposed in the schema. Table and Column: PAC_MNT_RESOURCES.RESOURCE_CODE Type: String
- location Optional. The location association to the resource. Table and Column: PAC_MNT_RESOURCES.LOCATIONID Type: String
- department Optional. The department association to the resource. Table and Column: PAC_MNT_RESOURCES.DEPARTCODE Type: String
- resourceClass Required. The resource class that is association with the resource. Table and Column: PAC_MNT_RESOURCES.RESOURCE_CLASS Type: String
- transactionClass Required. The transaction class that is associated with the resource. Table and Column: PAC_MNT_RESOURCES.TRANSCLASS Type: String
- vendorCode Optional. The vendor association with the resource. Table and Column: PAC_MNT_RESOURCES.VENDOR_CODE Type: String
- Active


Optional. Defines the status of the resource. Values: - 1. True - 0. False
Default: 1 Table and Column: PAC_MNT_RESOURCES.ACTIVE Type: Boolean


Expenses Schema Tag
This tag is part schema mapping for the Resources XOG object and has the following attributes:
- reimbursementCurrency Optional. The lookup value equal to the ISO standard code. This is the currency that is used to calculate reimbursements that are made to the resource. This code is not subject to multi-currency rules. This field is specific to the resource and can vary from the system settings. Table and Column: PAC_MNT_RESOURCES.EX_CURRENCY_CODE Type: String
- employeeCountryCode Optional. The reimbursement country code. Table and Column: PAC_MNT_RESOURCES.EX_COUNTRY_CODE Type: String

Rates and Costs Schema Tag
This schema tag is part schema mapping for the resource XOG object and has the following attributes:
- targetbillingRate Optional. Defines the target billing rate for this resource. Table and Column: PAC_MNT_RESOURCES.TARGETBILLRATE Type: Float
- targetPercentageBillable Optional. Defines the billable percentage for this resource. Table and Column: PAC_MNT_RESOURCES.TARGETPERCENTBILLABLE Type: Float

Custom Information Schema Tag (Resources XOG)
This tag is part schema mapping for the resource XOG object, describes custom-defined fields, and has the following attributes:
- Mentor Optional. Identifies the mentor that is associated with this resource. Table and Column: XDM_CDF_SRM_RESOURCES.XDM_RESOURCE_MENTOR Type: String
- WillingTravel Optional. Defines the willingness to travel for the resource. Values: - 1. True - 0. False Default: 0 Table and Column: XDM_CDF_SRM_RESOURCES.XDM_WILLING_TRAVEL Type: Boolean
- ResourceIndustry


Optional. Defines the industry that is related to this resource. Table and Column: XDM_CDF_SRM_RESOURCES.XDM_RESOURCE_INDUSTRY Type: String
- ResourceGrade Optional. Defines the grade that is related to this resource. Values: Bronze, Silver, Gold, and Platinum. Table and Column: XDM_CDF_SRM_RESOURCES.XDM_RESOURCE_GRADE Type: String


OBS Associations Schema Tag (Resources XOG)
The OBS Associations tag is part of the schema mapping for the resource XOG object. The OBS Associations tag is a shared xsd type and a wrapper for the OBSAssoc elements.
Example:
<xs:complexType name="OBSAssocsType">
<xs:annotation>
<xs:documentation xml:lang="en">
<... list of OBS Associations ...>
<OBSAssocs complete="false">
</xs:documentation>
The OBSAssocs tag contains the following element, plus zero or more OBSAssoc subelements.
- complete Defines whether the OBS associations are complete. This field is optional. When complete is true, existing OBS associations that are not listed in the import are deleted. When the value is false, the operation inserts and/or updates any existing OBS associations.
NOTE Complete replaces deprecated forms completed and IsComplete.
The OBSAssoc element is associated with the following tables:
- PRJ_OBS_ASSOCIATIONS (OBS Associations) - PRJ_OBS_TYPES (OBS) - PRJ_OBS_UNITS (OBS Units) - PRJ_OBS_UNITS_FLAT (OBS Units Flat Hierarchy)
This element has the following attributes:
- id Required. Defines the OBS association ID. Table and Column: PRJ_OBS_TYPES.UNIQUE_NAME Type: String
- name Optional. Defines the OBS association name. Table and Column: PRJ_OBS_TYPES.PRJ_OBS_TYPES.NAME Type: String
- unitPath Required. Slash-delimited list of unit names leading up to the associated OBS unit for the object. Table and Column: PRJ_OBS_TYPES.PRJOBS_UNITS.NAME Type: String Example: CAN/BC/VAN


SkillAssocs Schema Tag (Resource XOG)
This tag is part of the schema mapping for the resources XOG object and is not mapped to any tables or columns. This tag is also a shared xsd type and is a wrapper for the SkillAssocs elements.
Example:
<xs:complexType name="SkillAssocsType"> <xs:annotation> <xs:documentation xml:lang="en"> <... list of Skill Associations ...> <SkillAssocs complete="false"> </xs:documentation>
This schema tag has the following attributes:
- complete Optional. When set to true, the list of skill associations completely replaces any existing skills that are associated with the resource.
NOTE Complete replaces deprecated forms completed and IsComplete.
Default: False Table and Column: None Type: Boolean - SkillAssoc Element The skills that are associated with each resource. The skillAssoc element has the following attributes: - skillCode
Required. Defines the code for this skill. Table and Column: rsm_skills_associations.skill_id Type: String - interestLevel Optional. Defines the interest level in this skill for the resource. Table and Column: CMN_LOOKUPS
NOTE The lookup code from the cmn_lookups table is based on interest_level_id from the rsm_skills_associations table.
Type: String - proficiencyLevel
Optional. Defines the proficiency level in this skill for the resource. Table and Column: CMN_LOOKUPS Note: The Lookup code from the cmn_lookups table is based on proficiency_level_id from the rsm_skills_associations table. Type: String - weight Optional. Used when searching to produce a weighted average. Table and Column: rsm_skills_associations.weight Type: Number
XOG: Resource Class
Use the resource class XOG object to view inbound and outbound resource class instances.
Schema Name

nikuxog_resourceclass.xsd
Read and Write XML Files
The following XML files are included:
- resourceclass_read.xml. Use this file to export resource class instances from Classic PPM. - resourceclass_write.xml. Use this file to import resource class instances that were previously exported from Classic
PPM.
Prerequisites
None.
Read Filters
The following explicit read filters are used:
- resource_class Defines the resource class name. - Resource_type Defines the resource class type. - description Defines the description for the resource class. - active Specifies whether the resource class is active.
Error Handling
The following error can be thrown:
- Resource class or description is out of bound.
Resource Class (resourceclass) Schema Tag
The resource class tag is part schema mapping for the resource class XOG object and has the following attributes:
- id Required. Defines the unique resource ID. Table and Column: PAC_FOS_RESOURCE_CLASS .ID Type: String
- resource_class Required. Defines the unique resource class name. Table and Column: PAC_FOS_RESOURCE_CLASS.Resource_Class Type: String
- resource_type Required. Defines the resource type for the resource class. Values: Q, L, X, and M Table and Column: PAC_FOS_RESOURCE_CLASS.RESOURCE_TYPE Type: String
- description Required. Defines the description of the resource class. Table and Column: PAC_FOS_RESOURCE_CLASS.DESCRIPTION Type: String
- active Required. Defines the status of the resource class. Values: 0 and 1 Table and Column: PAC_FOS_RESOURCE_CLASS.ACTIVE Type: String

XOG: Risk
Use the risk XOG object to view inbound and outbound risk attributes that are associated with projects.
Schema Name
nikuxog_risk.xsd
Read and Write XML Files
The following XML files are included:
- risk_read.xml. Use this file to export risk object instances from Classic PPM. - risk_write.xml. Use this file to import risk object instances that were previously exported from Classic PPM.
Prerequisites
Before you use this XOG object, verify that referenced objects, such as projects, users, and categories, exist in Classic PPM.
Read Filters
The following explicit read filters are used:
- projectCode: Defines the code for the associated project. - name: Defines the name of the change request. - riskCode: Defines the risk of the change request. - statusCode: Defines the status of the change request. - priorityCode: Defines the priority of the change request. - ownerCode: Defines the name of the owner or assignee of the change request.
Error Handling
The following errors can be thrown:
- Assessor does not exist in the system. - Approved By does not exist in the system. - Project does not exist in the system. - Category type is not valid. - Status is not valid. - Priority is not valid. - Approach code is not valid. - Owner does not exist in the system. - Impact is not valid. - Probability is not valid. - Resolved By does not exist in the system. - Task does not exist for the given project. - Failed to import risk/issue/change request.
Risk Schema Tag
This tag is part of the schema mapping for the risk XOG object, and includes mapping for:
- associatedTasks - associatedRisks - associatedIssues - residualRisks - responseStrategies


This tag has the following attributes:
- name Required. Defines the risk name. Table and Column: NAME Type: String
- code Required. Defines the code for the risk. Column and Table: CODE Type: String
- description Defines the description of this risk. Table and Column: DESCRIPTION Type: String
- projectCode Defines the code for the associated project Table and Column: INV_INVESTMENTS.CODE Type: String
- categoryTypeCode Defines the category of this request. Table and Column: CATEGORY_TYPE_CODE Type: String
- ownerCode Defines the name of the owner or assignee of the change request. Column and Table: Type: String
- statusCode Risk status. Table and Column: STATUS_CODE Type: String
- priorityCode Defines the priority of the risk (lookup). Table and Column: PRIORITY_CODE Type: String
- assumptions Defines the assumptions for this risk. Table and Column: ASSUMPTIONS Type: String
- riskSymptoms Risk symptoms. Table and Column: RISK_SYMPTOMS Type: String
- impactDescription Description of the impact. Table and Column: IMPACT_DESCRIPTION Type: String
- approachCode Response type (lookup) Table and Column: APPROACH_CODE Type: String
- probabilityCode Defines the probability code.

Clarity - 16.4.1 4445


Table and Column: PROBABILITY_ENUM Type: number - impactCode Impact of this risk (lookup). Table and Column: IMPACT_ENUM Type: String - impactDate Defines the impact date. Table and Column: IMPACT_DATE Type: date - targetResolutionDate Targeted date of resolution of this risk. Table and Column: TARGET_RESOLUTION_DATE Type: Date - resolvedDate Date the risk was resolved. Table and Column: RESOLVED_DATE Type: Date - resolution Defines the description or how the risk was resolved. Table and Column: RESOLUTION Type: String - resolvedBy Defines the name of the resource who resolved the risk. Table and Column: RESOLVED_BY Type: number
risk Element
The following attribute is part of the associatedRisks schema tag:
- code Required. Defines the code for the associated risk. Column and Table: CODE Type: String
issue Element
The following attribute is part of the associatedIssues schema tag:
- code Required. Defines the code for the associated issue. Column and Table: CODE Type: String
responseStrategy Element
The following attributes are part of the responseStrategies schema tag:
- description Description of this risk response strategy. Column and Table: DESCRIPTION Type: String
- assignedTo Defines the name of the resource that is assigned to this risk. Column and Table: ASSIGNED_TO Type: String
- resolveBy Targeted date of resolution of this risk.

Clarity - 16.4.1 4446


Column and Table: TARGET_RESOLUTION_DATE Type: Date


XOG: Role
Use the role XOG object to view inbound and outbound role attributes.
Schema Name
nikuxog_role.xsd
Read and Write XML Files
The following XML files are included:
- roles_read.xml. Use this file to export role attributes from Classic PPM. - roles_write.xml. Use this file to import role attributes that were previously exported from Classic PPM.
Business Rules and Processing
The roles schema is defined for both inbound (write) and outbound (read) processing.
WARNING Set up the following items correctly before importing resources:
- Financial Properties The financial properties that are associated with the role.Before you can import roles into the product, set up the following financial properties in the Financial Administration module. The required property values must be present; otherwise, the financial properties are not imported and an error is written to the Success and Error File. - Transaction Class Required if the role is financially active. The transaction class that is associated with the role. The value in the XOG can be found in the TRANSCLASS table. - Resource Class Required if the role is financially active. The resource class that is associated with the role. The value in the XOG can be found in the PAC_FOS_RESOURCE_CLASS table. - Vendor Optional: The vendor that is associated with the role. This property is not required for the financial properties. If the vendor property value is missing, the role is added without a vendor property and a warning is posted to the Success and Error file.
Read Filters
The XOG allows or outbound processing of roles that are based on the following fields:
- active. The possible values for this field are: Active and Inactive. - resourceId. The resourceId corresponds to unique_name in SRM_RESOURCES.
Error Handling
If the parent role or the standard calendar does not exist, the XOG displays an error message and it does not import or update the record.
Schema Mappings
These tables and schema tags are mapped to roles:
- PRJ_RESOURCES Schema Tag - SRM_RESOURCES Schema Tag - PRJ_ROLES_FLAT Schema Tag - Financial Information Schema Tag - SkillAssocs Schema Tag


PRJ_RESOURCES Schema Tag
This tag is part schema mapping for the role XOG object and has the following attributes:
- category Optional. Table and Column: PRJ_RESOURCES.PRCategory Type: String
- availability Required. This attribute is stored as a blob internally and it uses the standard calendar for conversion. Table and Column: PRJ_RESOURCES.PRAvailCurve Type: Double


SRM_RESOURCES Schema Tag
This tag is part schema mapping for the role XOG object and has the following attributes:
- name Required. Must be unique. Table and Column: SRM_RESOURCES.Last_Name,Full_Name Type: String
- resourceId Required. Table and Column: SRM_RESOURCES.Unique_Name Type: String
- active Optional. Table and Column: SRM_RESOURCES.Is_Active Type: Boolean
- forecastRate Optional. You can export this field only if it contains a value. Table and Column: SRM_RESOURCES.Forecast_Rate Type: Double

PRJ_ROLES_FLAT Schema Tag
This tag is part schema mapping for the role XOG object and has the following attribute:
- parentRole Optional. Table and Column: PRJ_RESOURCES.Branch_Role_Id
NOTE The ID of the parent role is stored as the branch_role_id.
Type: String

Financial Information Schema Tag
The Financial Information schema tag is part schema mapping for the role XOG object and has the following attributes:
- Active Required. Defines the status of the role. Values:
- 1. True - 0. False


Table and Column: PAC_MNT_RESOURCES.ACTIVE Type: Boolean
- resourceClass Required. The resource class association with the role. Table and Column: PAC_MNT_RESOURCES.RESOURCE_CLASS Type: String
- transactionClass Required. The transaction class that is associated with the role. Table and Column: PAC_MNT_RESOURCES.TRANSCLASS Type: String
- vendorCode Optional. The vendor association with the role. Table and Column: PAC_MNT_RESOURCES.VENDOR_CODE Type: String


SkillAssocs Schema Tag
The SkillAssocs tag is part of the schema mapping for the role XOG object. The Skill Associations tag is also a shared xsd type and a wrapper for the SkillAssocs elements.
Example:
<xs:complexType name="SkillAssocsType"> <xs:annotation> <xs:documentation xml:lang="en"> <... list of Skill Associations ...> <SkillAssocs complete="false"> </xs:documentation>
The SkillAssocs schema tag has the following attribute:
- complete Optional. If true, this set of skill associations completely replaces any existing skills that are associated with the role.
NOTE Complete replaces deprecated forms completed and IsComplete.
Default: False Table and Column: None Type: Boolean
The SkillAssocs element represents the skills that are associated with each role. This element has the following attributes:
- skillCode Required. The code for the skill. Table and Column: rsm_skills_associations.skill_id Type: String
- interestLevel Optional. The interest level in this skill for the role. Table: CMN_LOOKUPS
NOTE The Lookup code from the cmn_lookups table is based on the interest_level_id from the rsm_skills_associations table.
Type: String - proficiencyLevel


Optional. The proficiency level in this skill for the role. Table: CMN_LOOKUPS
NOTE The Lookup code from the cmn_lookups table is based on the proficiency_level_id from the rsm_skills_associations table.
Type: String - weight
Optional. Used when searching to produce a weighted average. Table and Column: rsm_skills_associations.weight Type: Number


XOG: Skill
Use the skill XOG object to view inbound and outbound skill object instances.
Schema Name
nikuxog_skill.xsd
Read and Write XML Files
The following XML files are included:
- rsm_skills_read.xml. Use this file to export skill object instances from Classic PPM. - rsm_skills_write.xml. Use this file to import skill object instances that were previously exported from Classic PPM.
Prerequisites
None
Read Filters
The following explicit read filters are used:
- skillName - isActive
Error Handling
A basic import failure error can be thrown.
Skill Schema Tag
The skill tag is part of the schema mapping for the skill XOG object and has the following attributes:
- isActive Defines the status of the skill. Table and Column: IS_ACTIVE Type: Boolean
- description Defines the description of skill. Table and Column: DESCRIPTION Type: String
- skillCode Required. Defines the unique identifier for the skill. Table and Column: SKILL_CODE


Type: String
- name Defines the skill name. Table and Column: SKILL_NAME Type: String


XOG: Subproject (Program)
- PRSubproject Schema Tag (Inbound and Outbound) - PRSubproject Schema Tag (Inbound only)
Use the subproject (program) XOG object for inbound (write) and outbound (read) processing of subproject and program data. Subprojects are the links between master projects and the projects they contain.
Schema Name
nikuxog_project.xsd
Read and Write XML Files
The following XML files are included:
- prj_programs_read.xml. Use this file to export programs from Classic PPM. - prj_programs_write.xml. Use this file to import programs that were previously exported from Classic PPM.
Business Rules and Processing
The following business rules and processing apply to this XOG:
- When you import a subproject, data for the subproject is: - Updated (if it has already been imported). - Created (if it has not already been imported).
- The only field that is supported during an update is read-only. To change the content of other fields during an update, delete the existing sub-project and create a new one (all fields are refreshed, not only the read-only field).
- When you create a subproject, a proxy task is also created in the WBS of the master project that serves as a place holder for the sub-project. When you remove the sub-project, the proxy is also removed.
- When you import a proxy task, the WBSSequence for all subsequent tasks increments by 1.
Read Filters
To allow for outbound processing of programs, the XOG adds the isProgram filter to projects. This filter performs the following actions. When:
- isProgram is commented out, all appropriate programs and projects are exported. - isProgram=1, programs only are exported. - isProgram=0, projects only are exported.
Schema Mappings
The prSubProject table contains information about subprojects. The data that it contains is primarily linking information that specifies if the subproject is partial or complete. The link also specifies if the subproject is read-only. By definition, partial subprojects are read-only.

PRSubproject Schema Tag (Inbound and Outbound) This tag is part schema mapping for the PRSubp XOG object and has the following attributes: - projectID


Required. The UNIQUE_NAME of the project that becomes the sub-project of the project when imported. Table and Column: PRSubproject.prRefProjectID Type: String - TaskID Optional. The prExternalID of the task that represents the portion of the Work breakdown structure (WBS) that becomes the sub-project of the project. This attribute can be defined at any level of the WBS. Table and Column: PRSubproject.prRefTaskID Type: String - succeedingTaskID Optional. The prExternalID of the task that follows the sub-project in the WBS. If the sub-project is (or should be) the last item in the WBS, the value is not present. Table and Column: None Type: String - ReadOnly Optional. This element specifies if changes made to the master project are persisted when the master project is saved from Open Workbench or Microsoft Project. For partial sub-projects, this value is always False. Table and Column: PRSubproject.prReadOnly Type: Boolean
PRSubproject Schema Tag (Inbound only)
This tag is part schema mapping for the PRSubp XOG object. This tag is associated with the PRSubproject table and has the following attributes:
- delete Optional. When this attribute is present on an inbound transaction, the sub-project link is deleted with the associated proxy. Table and Column: None Type: Boolean
XOG: Subscription - Subscription Schema Tag
Use the subscription XOG object to view inbound and outbound department subscription attributes.
Schema Name
nikuxog_subscription.xsd
Read and Write XML Files
The following XML files are included:
- subscription_read.xml. Use this file to export department subscription attributes from Classic PPM. - subscription_write.xml. Use this file to import department subscription attributes that were previously exported from
Classic PPM. Entity, department, and service must exist in Classic PPM.
Read Filters
The following explicit read filters are used:
- departmentId The code of the department for which the subscriptions should be read out.
Error Handling
The errors are thrown based on the following checks:
- Required fields. Ensures that all required fields have values. - Entity. Checks if the entity is valid and exists. - Department. Checks if the department is valid and exists. - Service. Checks if the service is valid and exists.


Subscription Schema Tag
The subscription tag is part of the schema mapping for the subscription XOG object. This is a placeholder tag for multiple subscriptions.
Subscription element
There can be zero or more subscription elements, with each having an optional keymetrics element. Here are the attributes of a subscription element:
- sla_violations Defines the number of SLA violations. Table and Column: DPT_SUBSCRIPTIONS.sla_violations Type: Integer
- sla_violations_th Defines the threshold for SLA violations. Table and Column: DPT_SUBSCRIPTIONS.sla_violations_threshold Type: Integer
- incidents Defines the number of incidents. Table and Column: DPT_SUBSCRIPTIONS.incidents Type: Integer
- incidents_threshold Defines the threshold for incidents. Table and Column: DPT_SUBSCRIPTIONS.incidents_threshold Type: Integer
- change_orders Defines the number of change orders. Table and Column: DPT_SUBSCRIPTIONS.change_orders Type: Integer
- charges Defines the total charges (from chargebacks) against the investment (service) for this subscription. Table and Column: DPT_SUBSCRIPTIONS.charges Type: Integer
- cust_satisfaction Defines the customer satisfaction rating for this subscription. Table and Column: DPT_SUBSCRIPTIONS.customer_satisfaction Type: Integer
- total_users Defines the total number of users utilizing this subscription. Table and Column: DPT_SUBSCRIPTIONS.total_users Type: Integer
- active_users Defines the number of active users utilizing this subscript. Table and Column: DPT_SUBSCRIPTIONS.active_users Type: Integer
- page_hits Defines the page hits as captured for this subscription if applicable.


Table and Column: DPT_SUBSCRIPTIONS.page_hits Type: Integer - entityId Required. Defines the entity to which the service belongs. Table and Column: Derived attribute. Type: String - departmentId Required. Identifies the subscribing department. Table and Column: DPT_SUBSCRIPTIONS.department_id Type: String - serviceId Required. Defines the identifier that makes it unique in combination with the table_name column. Table and Column: pk_id Type: String keymetrics Tag The keymetrics element consists of zero or more keymetric elements. This element contains an optional targetCurve and an actualCurve and may have zero or more CustomInformation elements. This tag has the following attributes: - metrics_code Required. Code of the metric. Table and Column: DPT_KEYMETRICS.METRIC_CODE Type: String - metrics_code Optional. Table and Column: DPT_KEYMETRICS.NAME Type: String targetCurve and actualCurve Schema Tag The curve elements contain segment objects which specify target metrics and actual metrics over a period of time.
XOG: Time Period and Time Slice
Use the time slice XOG object to view inbound and outbound time slice requests. Use the time period (timesheet) XOG object to view inbound and outbound timesheet attributes.
XOG: Time Slice Use the time slice XOG object to view inbound and outbound time slice requests.
Schema Name nikuxog_sliceRequest.xsd
Read and Write XML Files The following XML file is included:
nikuxog_read.xsd
XOG: Time Period Use the time period (timesheet) XOG object to view inbound and outbound timesheet attributes. Timesheet information includes time periods and resources that are assigned to tasks. You can export the data for system integration purposes.

For example, you may export the data for system integration purposes when you need the information to drive internal or external billing systems. You do not need to export all timesheets in a system or export timesheets individually. The XOG provides filtering options to streamline the export requests.
Schema Name nikuxog_timeperiod.xsd
Read and Write XML Files The following XML file is included:
olts_timeperiods_read.xml
Use this file to export time period instances from Classic PPM.
Read Filters The XOG processes outbound capacity planning schemas that are based on the following fields: - isPublic 1 or 0 - ownerID Valid user (CMN_SEC_USERS.ID) The XOG uses no implicit filters for timesheets (timesheets for non-labor resources are excluded). The explicit filters that are used are: - Start Date - resourceID - postedInTimePeriodStart Time Periods You can use the XOG to create time periods. To create a time period, set the create attribute to true. If the time period does not exist, the import process creates it. The same rules that appear in the application apply for time period start and end dates (no overlapping).
Schema Mappings Mappings for the following schema tags are provided: - XOG: Time Slice - XOG: Time Period - TimePeriod Schema Tag - PRTimeSheet Schema Tag - SRM_RESOURCES Schema Tag - PRTimePeriod Schema Tag - PRTimeEntry Schema Tag - PRTypeCode Schema Tag - PRChargeCode Schema Tag - PRJ_Projects Schema Tag - PRTask Schema Tag - PRAssignments Schema Tag - NoteData Schema Tag
TimePeriod Schema Tag The TimePeriod XOG object has the following attributes: - start
Required.

Table and Column: PRTimePeriod.prStart Type: DateTime - finish Required. Table and Column: PRTimePeriod.prFinish Type: DateTime - openForTimeEntry Optional. Table and Column: PRTimePeriod.prIsOpen Type: Boolean - create Optional. Type: Boolean - scale Optional. If the time period does not exist, it is created using the specified scale. Type: timeReportingPeriodType - timeReportingPeriodType Optional. This tag identifies Time Reporting period types to create a series of time periods of the proper scale (for example, daily or monthly). Type: string Valid values include: - annually - semi_annually - monthly - quarterly - daily - weekly - bi_weekly - postedTime Optional. Table and Column: PRTimePeriod.prPostedTime Type: DateTime
PRTimeSheet Schema Tag
This tag is part schema mapping for the time period XOG object and has the following attributes:
- ID Required. An internally-generated unique identifier. Table and Column: PRTimeSheet.prID Type: Integer
- status Optional. Values: Unsubmitted, Submitted, Rejected, Approved, and Posted Table and Column: PRTimeSheet.prStatus Type: Integer
- submittedBy Optional. Table and Column: PRTimeSheet.prSubmittedBy Type: String
- approvedBy Optional.


Table and Column: PRTimeSheet.prApprovedBy Type: String
- adjustedTimeSheetID Optional. Refers to the ID attribute of the timesheet that this timesheet is adjusted by, if any. Table and Column: PRTimeSheet.prAdjustedId Type: Integer


SRM_RESOURCES Schema Tag
The SRM_RESOURCES tag is part schema mapping for the time period XOG object and has the following attributes:
This tag uses the SRM_RESOURCES table where SRM_RESOURCES.ID = PRTimeSheet.prResourceID.
- resourceID Required. Table and Column: SRM_RESOURCES.UNIQUE_NAME Type: String

PRTimePeriod Schema Tag
This tag is part of the schema mapping for the TimePeriod XOG object. This tag uses the PRTimePeriod table where PRTimePeriod.ID = PRTimeSheet.prPostedPeriodID and has the following attributes:
- postedInTimePeriodStart Optional. The time period in which the timesheet was posted. This period may differ from the time period in which this attribute is found if the timesheet was approved late, as with an adjustment. Table and Column: PRTimePeriodprStart Type: dateTime

PRTimeEntry Schema Tag
The PRTimeEntry tag is part schema mapping for the time period XOG object. This tag uses the PRTimeEntry table, 0 to many where PRTimeEntry.prTimeSheetID = PRTimeSheet.prID and has the following attributes:
- totalActuals Optional. The total actuals in hours. Table and Column: PRTimeEntry.prActSum Type: float
- taskID Optional. For existing assignments: you can use projectID and taskID; or assignmentID. For new assignments: you must use projectID and internalTaskID. Table and Column: prTask.prExternalID Type: string
- projectID Optional. For existing assignments: you can use projectID and taskID; or assignmentID. For new assignments: you must use projectID and internalTaskID. Table and Column: srm_projects.unique_name Type: string
- internalTaskID Optional. For existing assignments: you can use projectID and taskID; or assignmentID. For new assignments: you must use projectID and internalTaskID. Table and Column: srm_projects.prTask.prID Type: Integer
- assignmentID Optional. You can achieve a timesheet entry without creating an assignment first, but you must specify the task by its internal numeric ID number, such as internalTaskID = "5000876". If an assignment exists, you can use taskID = "abc". Table and Column: prAssignment.prID


Type: Integer - actualDate
Required. Zero to many records for each day during this time period for which this time entry has actuals. Table and Column: None Type: Date - amount Optional. The data is entered as hours, and is the amount for the date only. Table and Column: prActCurve Type: Float
PRTypeCode Schema Tag
The PRTypeCode tag is part schema mapping for the time period XOG object. This tag uses the PRTypeCode table where PRTimeEntry.prTypeCodeID = PRTypeCode.prID and has the following attributes:
- typeCodeID Optional. Table and Column: PRTypeCode.prExternalID Type: String
- typeCodeName Optional. Table and Column: PRTypeCode.prName Type: String
PRChargeCode Schema Tag
This tag is part schema mapping for the time period XOG object and has the following attributes:
This tag uses the PRChargeCode table where PRTimeEntry.prChargeCodeID = PRChargeCode.prID.
- ChargeCodeID Optional. Table and Column: PRChargeCode.prExternalID Type: String
- ChargeCodeName Optional. Table and Column: PRChargeCode.prName Type: String
PRJ_Projects Schema Tag
This tag is part schema mapping for the time period XOG object. The following item is true regarding the attributes that follow this statement:
From PRJ_PROJECTS, where PRTimeEntry.prAssignmentID = PRAssignment.prID and PRAssignment.prTaskID = PRTask.prID and PRTask.prProjectID = PRJ_PROJECTS.prID.
When prAssignmentID is not set (as for indirect time entries), these fields are not included.
- projectID Optional. Table and Column: PRJ_PROJECTS.UNIQUE_NAME Type: String
- projectName Optional. Table and Column: PRJ_PROJECTS.NAME


Type: String
PRTask Schema Tag
This tag is part schema mapping for the time period XOG object.
The following items are true regarding the attributes that follow this statement:
- This tag uses the PRTask table where PRTimeEntry.prAssignmentID = PRAssignment.prID and PRAssignment.prTaskID = PRTask.prID).
- When prAssignmentID is not set (as for indirect time entries), these fields are not included.
This tag includes the following attributes:
- taskID Optional. Table and Column: PRTask.prExternalID Type: String
- taskName Optional. Table and Column: PRTask.prName Type: String
PRAssignments Schema Tag
The PRAssignments tag is part schema mapping for the time period XOG object.
The following items are true regarding the attributes that follow this statement:
- This tag uses the PRAssignments table where PRTimeEntry.prAssignmentID = PRAssignment.prID. - When prAssignmentID is not set (as for indirect time entries), these fields are not included.
This tag includes the following attributes:
- assignmentStart Optional. Table and Column: PRAssignments.prStart Type: dateTime
- assignmentFinish Optional. Table and Column: PRAssignments.prFinish Type: dateTime
- assignmentPendingEstimates Optional. The value is in hours. Table and Column: PRAssignments.prPendEstSum Type: Float
- assignmentEstimate Optional. The value is in hours. Table and Column: PRAssignments.prEstSum Type: Float
- assignmentEstimateForTimePeriod Optional. The value is in hours, where the total within this time period only Table and Column: PRAssignments.prEstCurve Type: Float


NoteData Schema Tag
The NoteData tag is part schema mapping for the time period XOG object. This tag uses the PRNote, which is 0 to many, and where PRNote.prRecordID = PRTimeSheet.prID and PRNote.prTableName = 'PRTimeSheet. These values are contained in the TimeSheet Notes tag.
- category Optional. Defines the category for the timesheet note. Table and Column: NoteData.prCategory Type: String
- noteText Optional. Defines the text for the timesheet note. Table and Column: NoteData.prValue Type: String
- createdBy Optional. Defines the name of the resource who created the timesheet note. Table and Column: NoteData.prCreatedBy Type: String
- createdTime Optional. Defines the date the timesheet note was created. Table and Column: NoteData.prCreatedTime Type: dateTime
XOG: Transaction Class
Use the transaction class XOG object to view inbound and outbound transaction class instances.
Schema Name
nikuxog_transactionclass.xsd
Read and Write XML Files
The following XML files are included:
- transactionclass_read.xml. Use this file to export transaction class instances from Classic PPM. - transactionclass_write.xml. Use this file to import transaction class instances that were previously exported from
Classic PPM.
Prerequisites
None.
Read Filters
The following explicit read filters are used:
- transclass: Defines the transaction class name. - transtype: Defines the transaction class type. - description: Defines the transaction class descriptions. - shortdesc: Defines the summary of the transaction class description.
Error Handling
The following errors can be thrown:
- Description or short description is out of bound.
Schema Mapping


Mappings for the following schema tag name is provided: - Transaction Class


Transaction Class (transactionclass) Schema Tag
The transaction class tag is part schema mapping for the transaction class XOG object and has the following attributes:
- transactionclass Required. Defines the unique transaction class name. Table and Column: TRANSACTIONCLASS Type: String
- transactiontype Required. Defines the transaction type for the transaction class. Values: Q, L, X, and M Table and Column: RESOURCE_TYPE Type: String
- description Required. Defines the description of the transaction class. Table and Column: DESCRIPTION Type: String
- shortdesc Required. Defines the summary of the transaction class description. Table and Column: SHORTDESC Type: String

XOG: Type Code
Use the type code XOG object to view inbound and outbound type code object instances. Schema Name nikuxog_typecode.xsd Read and Write XML Files The following XML files are included: - prj_typecodes_read.xml. Use this file to export type codes from Classic PPM. - prj_typecodes_write.xml. Use this file to import type codes that were previously exported from Classic PPM. Prerequisites None Read Filters The open explicit read filter is used. Error Handling A basic import failure error can be thrown.
Type Code Schema Tag The Type Code XOG is composed of the TypeCode element, which has the following attributes: - Id
Defines the unique identifier for the type code.


Table and Column: prID Type: Integer
- typeCodeID Required. Defines the external unique identifier for the type code. Table and Column: prExternalID Type: String
- name Required. Defines the name of the type code. Table and Column: prName Type: String
- openForTimeEntry Defines whether the type code is open for timesheet use. Table and Column: prIsOpen Type: Boolean
- isChargeable Defines whether the type code is chargeable in financial systems. Table and Column: IS_CHARGEABLE Type: Boolean


XOG: UI Themes
Use the UI Themes XOG object for outbound (read) and inbound (write) processing. Schema Name nikuxog_uitheme.xsd Read and Write XML Files The following files are included. - cmn_ui_themes_read.xml. Use this file to export UI themes. - cmn_ui_themes_write.xml. Use this file to import UI themes that were previously exported. Prerequisites None Business Rules and Processing The last UI theme that is imported with an attribute value of default=true is the default UI theme for the system. Read Filters The following explicit read filter is used: - uiThemeID Defines the unique UI theme ID that must be read out. Schema mappings The following schema mappings are described. - UITheme Schema Tag - NLS Schema Tag - CSS Schema Tag


UITheme Schema Tag
The UITheme schema tag is part of schema mapping for the UI Theme XOG object. The schema tag has the following attributes:
- id Required. Defines the unique ID of the UI theme. Table and Column: CMN_UI_THEMES.CODE Type: String
- active Required. Defines whether the UI theme is active. Table and Column: CMN_UI_THEMES.IS_ACTIVE Type: String Default: True
- default Optional. Defines whether the UI theme is the default UI theme. Table and Column: CMN_UI_THEMES.IS_DEFAULT Type: String Default: False
NLS Schema Tag
The UITheme tag is part of schema mapping for the UI Theme XOG object and has the following attributes:
- Name Required. Defines the name of the UI theme. Table and Column: CMN_CAPTIONS_NLS.NAME Type: NlsType
- Description Required. Provides a description of the UI theme. Table and Column: CMN_CAPTIONS_NLS.DESCRIPTION Type: NlsType
CSS Schema Tag
This required schema tag defines the CSS code of the UI theme. The content of this element should always be enclosed in a CDATA section so that CSS code is not part of the markup of this schema.
TIP
If a XOG import for your UI theme fails, copy and paste the CSS into the Studio editor to view the validation problems and resolve them. Try the XOG import again using the corrected CSS.
XOG: User
Use the user XOG object to view inbound and outbound user object instance attributes.
Schema Name
nikuxog_user.xsd
Read and Write XML Files
The following XML files are included:
- cmn_users_read.xml. Use this file to export users from Classic PPM. - cmn_users_write.xml. Use this file to import users that were previously exported from Classic PPM.

Business Rules and Processing
Users are defined for both inbound (write) and outbound (read) processing. Password and Password_Confirm, used to validate the user, are not exposed but are populated with default values (2000). When a user first logs in, they are prompted to reset this default password.
- Resource: A labor resource is automatically created for every user who is imported through XOG. - Company ID: A browse field that is used to associate a user with a company is run against SRM_COMPANIES. If the
company does not exist, the user is posted without a company and a warning message is posted to the Success and Error file. If the company_id exists, the field is populated with that value. - Lookup values: The schema requires lookup codes that are validated against CMN_LOOKUPS. - User type: If not provided, this entry defaults to internal. There is no admin type. - OBS association: With the new OBS Security, a Security OBS is required and any OBS can be associated with a user. To accommodate this situation, there is an OBS Associations portlet. The OBS association fields can be used for import and export.
Read Filters
This XOG allows for outbound (read) processing of users who are based on the following two fields: User Status and User Type. And and Or processing is supported between these two fields and for processing within Type. The following combinations are supported:
- User Status = x
where x = Active, Inactive, or LOCK
- User Type = x
where x = Internal, External
- User Status = x AND User Type = y
where x = Active, Inactive, or LOCK where y = one of many User Types
Error Handling
If an error occurs for a user transaction, the following information is written to the Success and Error file:
- externalId - ExternalSource
Schema Mappings
The following schema mappings are described.
- Personal Information (CMN_SENC_USERS) Schema Tag - OBS Associations (OBSAssocs) Schema Tag - Group Assignments Schema Tag - Global Access Right Assignments (GlobalRights) Schema Tag - Instance Access Right Assignments (InstanceRights) Schema Tag - Instance OBS Access Right Assignments (InstanceOBSRights) Schema Tag - Instance Object (InstanceObject) Schema Tag - Language Support (nls) Schema Tag
Personal Information (CMN_SENC_USERS) Schema Tag
This tag is part schema mapping for the user XOG object and has the following attributes:
- firstName Required.


Table and Column: CMN_SEC_USERS.First Name Type: String
- lastName Required. Table and Column: CMN_SEC_USERS.Last Name Type: String
- userName Required. A unique primary key. Table and Column: CMN_SEC_USERS.User_Name Type: String
- userType Optional. Values: Internal and External Default: Internal Table and Column: CMN_SEC_USERS.User_Type_Id Type: String
- userStatus Required. Values: Active, Inactive, and LOCK Default: Active Table and Column: CMN_SEC_USERS.User_Status_ID Type: String
- emailAddress Required. Table and Column: CMN_SEC_USERS.Email Address Type: String
- userLocale Optional. The Java Locale format, for example, en_US. Table and Column: CMN_SEC_USERS.locale Type: String
- userTimezone Optional. The Java TimeZone format, for example, Europe/London, PST. Table and Column: CMN_SEC_USERS.timezone Type: String
- userLanguage Required. Defines the language that is displayed when the user first logs in. Values: English, German, Spanish, and French Default: English Table and Column: CMN_SEC_USERS.Language Type: String
- resource Optional. A browse field with a one-to-one relationship between users and resources. Table and Column: CMN_SEC_USERS.Resource Type: String
- companyId Optional. Browse field. The company association with the user. Table and Column: CMN_SEC_USERS.Company_ID Type: String
- externalSource Required by the schema. A lookup value that is the originating system ID (for example, Oracle). Table and Column: CMN_SEC_USERS.External_Source_ID

Clarity - 16.4.1 4465


Type: String (in the schema) and Number (in the application)
- externalId Required by the XML schema. The originating unique identifier. Table and Column: CMN_SEC_USERS.External_ID Type: String


OBS Associations (OBSAssocs) Schema Tag
This tag is a part of the schema mapping for the user XOG object. The OBS Associations tag is also a shared xsd type and a wrapper for the OBSAssoc elements.
Example:
<xs:complexType name="OBSAssocsType">
<xs:annotation>
<xs:documentation xml:lang="en">
<... list of OBS Associations ...>
<OBSAssocs complete="false">
</xs:documentation>
The OBSAssocs tag contains the following element, plus zero or more OBSAssoc subelements.
- complete Defines whether the OBS associations are complete. This field is optional. When complete is true, existing OBS associations that are not listed in the import are deleted. When the value is false, the operation inserts new OBS units or updates any existing ones.
NOTE Complete replaces deprecated forms completed and IsComplete.
Default: False Table and Column: None Type: Boolean
The OBSAssoc element contains the following attributes:
- id Required. Table and Column: PRJ_OBS_TYPES.UNIQUE_NAME Type: String
- name Optional. Table and Column: PRJ_OBS_TYPES.PRJ_OBS_TYPES.NAME Type: String
- unitPath Required. Slash-delimited list of unit names leading up to the unit to which the object is associated. Table and Column: PRJ_OBS_TYPES.PRJ_OBS_UNITS.NAME Type: String Example: CAN/BC/VAN

Group Assignments Schema Tag
This tag is part of the schema mapping for the user XOG object. The Group Assignments schema tag is not mapped to any table and is a wrapper for the Group elements. This tag has the following attribute:
- complete Optional. If complete and set to true, any existing Group assignments that are not listed in the import are deleted.
NOTE Complete replaces deprecated forms completed and IsComplete.


Default: False Table and Column: none Type: String
The Group Assignments element has the following attribute:
- id Required. Table and Column: CMN_SEC_GROUPS.GROUP_CODE Type: String


Global Access Right Assignments (GlobalRights) Schema Tag
This tag is part of the schema mapping for the user XOG object. This tag is a wrapper element for one or more Right elements. The Global Access Right Assignments schema tag is not mapped to any table and has the following attribute:
- complete Optional. When this value is true, any existing Right assignments that are not listed in the import are deleted.
NOTE Complete replaces deprecated forms completed and IsComplete.
Default: False Table and Column: None Type: String
Right Assignment (Right) Element
- id Required. Table and Column: CMN_SEC_GROUPS.GROUP_CODE Type: String

Instance Access Right Assignments (InstanceRights) Schema Tag
This tag is part of the schema mapping for the user XOG object. It is a wrapper element for one or more Right elements. The Instance Access Right Assignments schema tag is not mapped to any table and has the following attribute:
- complete Optional. When this value is true, any existing Right assignments that are not listed in the import are deleted.
NOTE Complete replaces deprecated forms completed and IsComplete.
Default: False Table and Column: None Type: String
Right Assignment (Right) Element
- id Required. Table and Column: CMN_SEC_GROUPS.GROUP_CODE Type: String

Instance OBS Access Right Assignments (InstanceOBSRights) Schema Tag
This tag is part of the schema mapping for the user XOG object and is a wrapper element for the Right elements. The Instance OBS Access Right Assignments schema tag is not mapped to any table and has the following attribute:
- complete Optional. If complete and set to true, any existing Right assignments that are not listed in the import are deleted.
NOTE Complete replaces deprecated forms completed and IsComplete.
Default: False Table and Column: None Type: String


Right Assignment (Right) Element - id Required. Table and Column: CMN_SEC_GROUPS.GROUP_CODE Type: String


Instance Object (InstanceObject) Schema Tag
This tag is part schema mapping for the user XOG object. This tag has the following attributes that are mapped to any of the following tables, unless otherwise noted:
- SRM_RESOURCES - SRM_PROJECTS - BPM_DEF_PROCESSES - CMN_PAGES - CMN_PORTLETS - CMN_SCH_JOB_DEFINITIONS - INV_APPLICATION - INV_ASSET - INV_OTHER - INV_PRODUCT - SCENARIO - id
Required. The unique code from one of the listed tables. Type: String - name Optional. The name from one of the listed tables. Type: String - type Required. The key to determine which table is mapped. This attribute is not mapped to any table. Type: String

Language Support (nls) Schema Tag
This tag is part schema mapping for the user XOG object and has the following attributes:
- name Optional. Table and Column: CMN_CAPTIONS_NLS.NAME Type: String
- description Optional. Table and Column: CMN_CAPTIONS_NLS.DESCRIPTION Type: String
- languageCode Optional. Table and Column: CMN_CAPTIONS_NLS.LANGUAGE_CODE Type: String

XOG: Vendor - Vendor Schema Tag
Use the Vendor XOG object to view inbound and outbound vendor instances. Schema Name


nikuxog_vendor.xsd
Read and Write XML Files
The following XML files are included:
- vendor_read.xml. Use this file to export Vendor instances from Classic PPM. - vendor_write.xml. Use this file to import Vendor instances that were previously exported from Classic PPM.
Prerequisites
None
Read Filters
The following explicit read filters are used:
- code Defines the unique vendor code.
- name Defines the name of the vendor.
- status Defines the status of the vendor.
Error Handling
The following errors can be thrown:
- Could not xog-in item because size of some attributes [description] is not within valid range.
Vendor Schema Tag
The Vendor tag is part schema mapping for the Vendor XOG object and has the following attributes:
- code Required. Defines the unique vendor code. Table and Column: VENDOR_CODE Type: String
- name Required. Defines the name of the vendor. Table and Column: ADDRESS_NAME Type: String
- affiliation Optional. Table and Column: AFFILIATED_VEND_CODE Type: String
- status Required. Defines the status of the vendor. Valid Values: Active, Inactive, and No New Business Table and Column: STATUS_TYPE Type: String
- address1 Optional. Table and Column: ADDR1 Type: String
- address2 Optional. Table and Column: ADDR2


Type: String
- address3 Optional. Table and Column: ADDR3 Type: String
- address4 Optional. Table and Column: ADDR4 Type: String
- address5 Optional. Table and Column: ADDR5 Type: String
- address6 Optional. Table and Column: ADDR6 Type: String
- attentionName Optional. Table and Column: ATTENTION_NAME Type: String
- attentionPhone Optional. Table and Column: ATTENTION_PHONE Type: String
- contactName Optional. Table and Column: CONTACT_NAME Type: String
- contactPhone Optional. Table and Column: CONTACT_PHONE Type: String


XOG: WIP Class
Use the WIP class XOG object to view inbound and outbound WIP class instances. Schema Name nikuxog_wipclass.xsd Read and Write XML Files The following XML files are included: - wipClass_read.xml. Use this file to export WIP class instances from Classic PPM. - wipClass_write.xml. Use this file to import WIP class instances that were previously exported from Classic PPM. Prerequisites None. Read Filters The following explicit read filters are used:
- wipclass Defines the WIP class name.
- description Defines the description for the WIP class.
- shortdesc Defines the short description for the WIP class.
Error Handling
The following errors can be thrown:
- Wipclass or description or short description is out of bound.
WIP Class (wipclass) Schema Tag
The WIP class tag is part schema mapping for the WIP class XOG object and has the following attributes:
- wipclass Required. Defines the unique WIP class name. Table and Column: WIPCLASS Type: String
- description Required. Defines the description of the WIP class. Table and Column: DESCRIPTION Type: String
- shortdesc Required. Defines the summary of the WIP class description. Table and Column: SHORTDESC Type: String


XOG WSDL
Each XOG service includes a Web Service Description Language (WSDL) file. The WSDL describes the available XOG services and how to communicate with them.
- View the XOG WSDL Files - WSDL Emitter Tools - Example: Process WSDL - <xsd any> and Process WSDL - Example: Demand for Resource Query WSDL - Generate Supporting API

View the XOG WSDL Files You can access the XOG WSDL on the Classic PPM application server at the following URL:
http://<servername:port>/niku/wsdl
The resulting XOG WSDL web page shows a list of three XOG service category links. - InvokeAction - Query - Object


To view the included services, click a category link. For example, if you click InvokeAction, you see the Process service. Click the Object link and then select the All Objects link to access the WSDL for all objects on a single page.
The WSDL for queries is not prepackaged. A WSDL for a query only exists if you created an NSQL query in Studio. Depending on the number of NSQL queries already defined in Studio, you see the corresponding number of WSDLs.
Each service appears in HTML in your browser and includes a (save as...) option to download the XML file. Many tools exist that you can use to improve the readability and display of the WSDL. You can use a stand-alone viewer. To map data from one system to another, use Enterprise Application Integration (EAI) software. For more information about web services and WSDL, see the W3C website at w3.org.
WSDL Emitter Tools A client program connecting to the XOG can read the WSDL to determine what functions are available on the server. Any special data types that are used are embedded in the WSDL file in the form of XML Schema. The XOG WSDL has been validated against these platforms: - Apache Axis 1.3 or newer - Microsoft Visual Studio 2005 (.NET) or newer These emitter tools can interpret the XOG WSDL to enable communication with Classic PPM as a web service. Because the XOG WSDL is compatible with Axis and .NET, these emitter tools generate an accurate and usable proxy API from the XOG WSDL. This capability facilitates interaction with the XOG services in the context of Axis or .NET.
Example: Process WSDL This example illustrates the WSDL for the Process service:
<definitions xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tns="http://www.niku.com/xog/InvokeAction" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://schemas.xmlsoap.org/wsdl/" name="InvokeActionProcess" targetNamespace="http://www.niku.com/xog/InvokeAction">
<types> <xsd:schema elementFormDefault="qualified" targetNamespace="http://www.niku.com/xog/InvokeAction"> <xsd:complexType name="Process"> <xsd:sequence> <xsd:element name="code" type="xsd:string" minOccurs="1" maxOccurs="1"/> <xsd:element name="request" minOccurs="0" maxOccurs="1"> <xsd:complexType> <xsd:sequence> <xsd:any/> </xsd:sequence> </xsd:complexType> </xsd:element> </xsd:sequence> </xsd:complexType> <xsd:element name="Process" type="tns:Process"/> <xsd:element name="Auth"> <xsd:complexType> <xsd:sequence> <xsd:element minOccurs="0" name="SessionID" type="xsd:string"/> <xsd:element minOccurs="0" name="Username" type="xsd:string"/> <xsd:element minOccurs="0" name="Password" type="xsd:string"/>

</xsd:sequence> </xsd:complexType> </xsd:element> <xsd:element name="Login"> <xsd:complexType>
<xsd:sequence> <xsd:element minOccurs="1" name="Username" type="xsd:string"/> <xsd:element minOccurs="0" name="Password" type="xsd:string"/>
</xsd:sequence> </xsd:complexType> </xsd:element> <xsd:element name="SessionID" type="xsd:string"/> <xsd:element name="Logout"> <xsd:complexType>
<xsd:sequence> <xsd:element maxOccurs="1" minOccurs="0" name="SessionID" type="xsd:string"/>
</xsd:sequence> </xsd:complexType> </xsd:element> </xsd:schema> </types> <message name="Process"> <part element="tns:Process" name="body"/> <part element="tns:Auth" name="header"/> </message> <message name="Auth"> <part element="tns:Auth" name="header"/> </message> <message name="Login"> <part element="tns:Login" name="parameters"/> </message> <message name="LoginResponse"> <part element="tns:SessionID" name="body"/> </message> <message name="Logout"> <part element="tns:Logout" name="parameters"/> </message> <portType name="ProcessPort"> <operation name="Process"> <input message="tns:Process"/> </operation> <operation name="Login"> <input message="tns:Login"/> <output message="tns:LoginResponse"/> </operation> <operation name="Logout"> <input message="tns:Logout"/> </operation> </portType> <binding name="ProcessSoapBinding" type="tns:ProcessPort"> <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/> <operation name="Process"> <soap:operation soapAction="http://www.niku.com/xog/InvokeAction/Process" style="document"/>

<input> <soap:body parts="body" use="literal"/> <soap:header message="tns:Auth" part="header" use="literal"/>
</input> </operation> <operation name="Login">
<soap:operation soapAction="http://www.niku.com/xog/InvokeAction/Login" style="document"/> <input>
<soap:body use="literal"/> </input> <output>
<soap:body use="literal"/> </output> </operation> <operation name="Logout"> <soap:operation soapAction="http://www.niku.com/xog/InvokeAction/Logout" style="document"/> <input>
<soap:body use="literal"/> </input> </operation> </binding> <service name="ProcessService"> <documentation>Invoke Action Process Service </documentation> <port binding="tns:ProcessSoapBinding" name="ProcessService"> <soap:address location="http://<servername:port>//xog"/> </port> </service> </definitions>
<xsd any> and Process WSDL The request and response types of the Object WSDL are defined as <xsd:any> as illustrated in the Process WSDL example. However, the schema of these request/response types must be consistent with the corresponding XOG Object schema (as seen in the .xsd file). This example shows the SOAP representation of the Project object WSDL for the ReadProject operation. The bold DataBus document shows the correct representation of the DataBus <xsd:any> type. <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"> <soap:Header> <Auth xmlns="http://www.niku.com/xog/Object"> <SessionID>5000156__171120a:10a241ff830:-7f711143139816999</SessionID> </Auth> </soap:Header> <soap:Body> <ReadProject xmlns="http://www.niku.com/xog/Object">

<DataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/ xog_read.xsd" xmlns=""> <Header version="12.0.0.5028" externalSource="NIKU" /> <Query> <Filter name="subject" criteria="EQUALS">admin</Filter> </Query> </DataBus> </ReadProject> </soap:Body> </soap:Envelope>
Example: Demand for Resource Query WSDL This example illustrates the WSDL for the Demand for Resource query service:
<definitions xmlns:tns="http://www.niku.com/xog/Query" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://schemas.xmlsoap.org/wsdl/" name="DemandforResourceQuery" targetNamespace="http://www.niku.com/xog/Query">
<types> <xsd:schema elementFormDefault="qualified" targetNamespace="http://www.niku.com/xog/Query"> <xsd:complexType name="DemandforResourceFilter"> <xsd:sequence> <xsd:element maxOccurs="1" minOccurs="0" name="actual_hours" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="actual_hours_from" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="actual_hours_to" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="allocated_hours" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="allocated_hours_from" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="allocated_hours_to" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="estimated_effort" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="estimated_effort_from" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="estimated_effort_to" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="resource_name" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="resource_name_from" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="resource_name_to" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="resource_name_wildcard" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="resource_id" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="resource_id_from" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="resource_id_to" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_key" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_key_from" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_key_to" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_key_wildcard" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_level" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_level_from" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_level_to" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_level_wildcard"

type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_label" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_label_from" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_label_to" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_label_wildcard"
type="xsd:string"/> </xsd:sequence> </xsd:complexType> <xsd:complexType name="DemandforResourceQuery"> <xsd:sequence>
<xsd:element maxOccurs="1" minOccurs="1" name="Code" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="0" name="Filter" type="tns:DemandforResourceFilter"/> </xsd:sequence> </xsd:complexType> <xsd:element name="Query" type="tns:DemandforResourceQuery"/> <xsd:complexType name="DemandforResourceRecord"> <xsd:sequence> <xsd:element maxOccurs="1" minOccurs="1" name="actual_hours" type="xsd:decimal"/> <xsd:element maxOccurs="1" minOccurs="1" name="allocated_hours" type="xsd:decimal"/> <xsd:element maxOccurs="1" minOccurs="1" name="estimated_effort" type="xsd:decimal"/> <xsd:element maxOccurs="1" minOccurs="1" name="resource_name" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="1" name="resource_id" type="xsd:long"/> <xsd:element maxOccurs="1" minOccurs="1" name="calendar_time_key" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="1" name="calendar_time_level" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="1" name="calendar_time_label" type="xsd:string"/> </xsd:sequence> </xsd:complexType> <xsd:complexType name="DemandforResourceRecords"> <xsd:sequence> <xsd:element maxOccurs="unbounded" minOccurs="0" name="Record"
type="tns:DemandforResourceRecord"/> </xsd:sequence> </xsd:complexType> <xsd:complexType name="DemandforResourceQueryResult"> <xsd:sequence>
<xsd:element maxOccurs="1" minOccurs="1" name="Code" type="xsd:string"/> <xsd:element maxOccurs="1" minOccurs="1" name="Records" type="tns:DemandforResourceRecords"/> </xsd:sequence> </xsd:complexType> <xsd:element name="QueryResult" type="tns:DemandforResourceQueryResult"/> <xsd:element name="Auth"> <xsd:complexType> <xsd:sequence>
<xsd:element minOccurs="0" name="SessionID" type="xsd:string"/> <xsd:element minOccurs="0" name="Username" type="xsd:string"/> <xsd:element minOccurs="0" name="Password" type="xsd:string"/> </xsd:sequence> </xsd:complexType> </xsd:element> <xsd:element name="Login"> <xsd:complexType> <xsd:sequence> <xsd:element minOccurs="1" name="Username" type="xsd:string"/>

<xsd:element minOccurs="0" name="Password" type="xsd:string"/> </xsd:sequence> </xsd:complexType> </xsd:element> <xsd:element name="SessionID" type="xsd:string"/> <xsd:element name="Logout"> <xsd:complexType> <xsd:sequence>
<xsd:element maxOccurs="1" minOccurs="0" name="SessionID" type="xsd:string"/> </xsd:sequence> </xsd:complexType> </xsd:element> </xsd:schema> </types> <message name="Query"> <part element="tns:Query" name="body"/> <part element="tns:Auth" name="header"/> </message> <message name="QueryResult"> <part element="tns:QueryResult" name="body"/> </message> <message name="Auth"> <part element="tns:Auth" name="header"/> </message> <message name="Login"> <part element="tns:Login" name="parameters"/> </message> <message name="LoginResult"> <part element="tns:SessionID" name="body"/> </message> <message name="Logout"> <part element="tns:Logout" name="parameters"/> </message> <portType name="DemandforResourceQueryPort"> <operation name="Query"> <input message="tns:Query"/> <output message="tns:QueryResult"/> </operation> <operation name="Login"> <input message="tns:Login"/> <output message="tns:LoginResult"/> </operation> <operation name="Logout"> <input message="tns:Logout"/> </operation> </portType> <binding name="DemandforResourceQuerySoapBinding" type="tns:DemandforResourceQueryPort"> <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/> <operation name="Query"> <soap:operation soapAction="http://www.niku.com/xog/Query/DemandforResource" style="document"/> <input> <soap:body parts="body" use="literal"/> <soap:header message="tns:Auth" part="header" use="literal"/>


</input> <output>
<soap:body use="literal"/> </output> </operation> <operation name="Login"> <soap:operation soapAction="http://www.niku.com/xog/Query/Login" style="document"/> <input>
<soap:body use="literal"/> </input> <output>
<soap:body use="literal"/> </output> </operation> <operation name="Logout"> <soap:operation soapAction="http://www.niku.com/xog/Query/Logout" style="document"/> <input>
<soap:body use="literal"/> </input> </operation> </binding> <service name="DemandforResourceQueryService"> <documentation>Demand for Resource Query Service </documentation> <port binding="tns:DemandforResourceQuerySoapBinding"
name="DemandforResourceQueryService"> <soap:address location="http://<servername:port>//xog"/> </port> </service> </definitions>


Generate Supporting API
Both Apache Axis and Microsoft Visual Studio have emitter tools that generate proxy classes that are based on service descriptions that conform to the WSDL.
Generate a Proxy API from Axis
The emitter tool that is packaged with Apache AXIS is WSDL2Java. The following example shows how to initiate this tool from the command line against the All Objects XOG WSDL.
java -cp lib\wsdl4j-1.5.1.jar;lib\commons-discovery-0.2.jar;lib\axis.jar;lib\log4j-1.2.8.jar;lib\commons-logging-1.0.4.jar;lib \jaxrpc.jar org.apache.axis.wsdl.WSDL2Java -W [url]
WARNING
You must include the -W flag when generating the proxy API from the XOG WSDL definitions. This flag indicates that the WSDL is the document/literal style. If you do not include the -W flag, it is assumed that the WSDL is the wrapped/literal style, which is incorrect. If you do not include this flag, an error is thrown in the proxy generation but the resulting API will cause runtime errors when trying to communicate with the XOG interfaces.
The default output location of the proxy files follows the namespace convention that is defined in the WSDL. Because the targetNamespace that is defined in the All Object WSDL is http://www.niku.com/xog/Object, the resulting proxy classes from the command-line request reside in D:\axis\com\niku\www\xog\Object.
For exact syntax to use with Apache Axis2 for generating a proxy API, refer to the Apache documentation.


For details and sample Java on how to consume Classic PPM web services using Apache Axis or Apache Axis2, refer to the Classic PPM Gobal user community and search using "apache".
Add a Web Reference from Microsoft Visual Studio The emitter tool that is packaged with Microsoft Visual Studio is implemented as a web reference. The reference is developed from within a project that is within the Microsoft Visual Studio user interface. Follow these steps: 1. From Project, select Add Web Reference. 2. In URL, enter the desired XOG WSDL URL and click Go. 3. In Web Reference Name, enter a name for the service and click Add Reference.
NOTE The generated proxy API for the All Objects Web Reference is on the left side of the page. This enables a developer to communicate programmatically with the services that are defined in the All Objects Web Reference.
XOG GEL Scripting
Generic Execution Language (GEL) is a tool that you can use to turn XML into executable code. GEL has been extended and embedded into Classic PPM to enable custom logic to solve complex business problems not already addressed by the out-of-the-box product. As an enterprise application integration framework within Classic PPM, GEL provides a collection of standard integration libraries that provide connectors to enterprise applications including Finance, HR, and General Ledger. Popular integrations have included BMC Remedy Help Desk, CA Service Desk, ServiceNow, SAP, Oracle, and Workday. GEL scripts are used in many additional third-party integrations. With GEL, you can invoke and process various data sources: - Web services: Read or write to any SOAP-based web service, including the XOG web services. - File system: Read or write to any delimited file including those on local disks, network disks, or disk arrays. - FTP: Upload or download to FTP servers. - JDBC: Leverage JDBC to access relational database systems to read or write data.
TIP GEL is based on Jelly, a jakarta.apache.org Commons project. TIP Until you upgrade to 15.5.1, avoid creating GEL scripts that attempt to read, run, or append records in very large CSV files. Out-of-memory errors and application outages can occur.
Video: GEL Webinar The following third-party video is provided by IT-ROI. This video is provided by CA Technologies "AS IS" and without warranty.
TIP To play this video in full screen mode, click the YouTube logo. WARNING Before you use GEL, read the Customization, Modification, and Configuration Policy that is available in this documentation. For more information, search for Customization. Also, contact your CA account representative.

GEL Setup The GEL run-time is packaged with XOG in the XOG client. Once the client is installed, you can use the GEL command in the bin directory of the XOG client to validate and execute GEL scripts. Make sure that the JRE is installed on your computer. GEL Script Validation and Execution The GEL validator reads scripts, confirms that the scripts are well-formed XML, and determines that all referenced tags and tag libraries are valid and are available in the runtime environment. The validator does not execute scripts. In this example, the hello.xml script is first validated, and then the hello.xml script, which is located in the XOG client home directory, is executed.
E:\XOG>bin\gel -script hello.xml -validate File geltest.xml validated.
E:\XOG>bin\gel -script hello.xml Hello World 1! Hello World 2! Hello World 3!
GEL Basics
Learn here about GEL Basics; including the basic structure for a GEL script, GEL script tags, GEL conditionals and loops, GEL variables, GEL built-in parameters, GEL considerations, using SSL with GEL, and GEL tag restrictions. - GEL Script Structure - GEL Script Tags - GEL Conditionals and Loops - GEL Variables - GEL Built-in Parameters - GEL Considerations - Using SSL with GEL - GEL Tag Restrictions
GEL Script Structure The following image shows the basic structure for a GEL script.

You can add a comment anywhere in a GEL script by using the structure <!-- comment -->.
GEL Script Tags A GEL script is an executable XML file that is built from qualified elements that are bound to Java code named tags. Using namespace declarations, tags are organized into tag libraries which are made available in a script. In this Hello World example, two tag libraries are defined for the script: Core and GELTagLibrary as seen in tag pairs such as: <core:???></ core:???> and <gel:???></gel:???>.
NOTE A script always resides within the GEL script tag. Hello World Example
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <core:forEach indexVar='i' begin='1' end='3'> <gel:out>Hello World ${i}!</gel:out> </core:forEach>
</gel:script>
Variables are used extensively throughout GEL scripts. Many tags can set variables. An example of a tag that can set variables is core:set. You can use the common syntax ${variable_name} to reference variables. In the Hello World example, 'i' is a variable which is set by the forEach tag and is incremented with each loop. Core is a built-in Jelly library that contains general-purpose tags (such as forEach that is used in the previous example). GELTagLibrary is the primary GEL library; and it contains general-purpose tags that are not found in core and tags that are particular to Classic PPM.
GEL Conditionals and Loops GEL contains the following tags for performing conditional processing: - <core:if>
<core:if test="${hasDocs}"> ...
</core:if>
- <core:choose>
<core:choose> <core:when test="${row[6].equals(&#34;&#34;)}"> ...


</core:when> <core:otherwise>
... </core:otherwise> </core:choose>
- <core:switch>
<core:switch on="${caseType}"> <core:case fallThru="true" value="Incident"/> <core:case value="Problem"> ... </core:case> <core:case fallThru="true" value="Question"/> <core:default> ... </core:default>
</core:switch>
- <core:forEach>
<core:forEach trim="true" items="${queryResult.rowsByIndex}" var="row"> ...
</core:forEach>


GEL Variables
Variables in GEL scripts are declared at the time of use. There are no declaration blocks, like the ones you may find in other languages. GEL provides the following ways to store a variable value:
- <gel:parameter>: This tag allows values to be passed into a GEL script from a Classic PPM process. Inside the GEL script, you can refer to the parameter as you would with any other variable (that is, using the ${variablename} syntax). The optional attribute secure="true" causes Classic PPM to hide the actual value in the user interface with asterisks (*).
<gel:parameter var="XOGUsername" default="admin"/>
<gel:parameter var="XOGPassword" default="password" secure="true"/>
- <core:set>: This tag is used to set basic variables; that is, ones that do not need to be extracted from an XML document. Refer to the variable using the ${variablename} syntax.
<core:set value="1" var="yes"/>
<gel:out>${yes}</gel:out>
You can do some basic math on the variable:
<gel:out>${yes+2}</gel:out>
- <gel:set>: This tag is necessary to extract the value of the variable from an XML document. This tag differs from the <core:set> tag in that it takes a select attribute which in turn requires an XPath statement. If you are unfamiliar with XPath, think of it as a hierarchy mapping of the XML document. In this example, the select statement points the way to the Statistics node of a XOG output file.
<gel:set asString="false"
select="$XOGresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/Statistics"
var="stats"/>
- <gel:persist>: This tag allows you to set variables with a scope that extends beyond the current script. - <gel:parse>: This tag is used to create an XML document in memory, and this is how you build XOG requests. The
tag can be used to generate an XML document, or specific nodes that can later be attached into an existing XML document.
<gel:parse var="loadContent">
<NikuDataBus xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance


xsi:noNamespaceSchemaLocation="../xsd/nikuxog_resource.xsd"> <Header version="12.0.0.5028" action="write" objectType="resource" externalSource="ORACLE-FINANCIAL"/> <Resources> <Resource resourceId="abc" isActive="true"> <PersonalInformation lastName="doe" firstName="john" emailAddress="jdoe@ca.com"/> </Resource> </Resources>
</NikuDataBus> </gel:parse>
GEL Built-in Parameters Custom Action GEL scripts that are associated with processes have the following parameters available to them: - Object instance ID: If no object is associated with the process, the ID is -1. Otherwise, the ${gel_objectInstanceId}
parameter contains the object instance ID. - Process ID: ${gel_processId} is the process identifier; all instances of this process share this identifier. - Process instance ID: ${gel_processInstanceId} is the process instance identifier; all instances have a unique value. All built-in parameters have a "gel_" prefix and are of data type - numeric.
GEL Considerations Consider this information when working with GEL: - GEL is case-sensitive. This statement includes variable names. - All GEL scripts are contained in XML. Therefore, all XML rules apply to structure, tags, and special characters. - In the Jelly <sql:query> tag, you cannot use the less than (<) and greater than (>) operators. Use BETWEEN instead of
these operators or escape the special characters using &lt; or &gt;.
Using SSL with GEL When interacting with SOAP services in GEL, you may need to complete more steps when using the secure sockets layer (SSL) with web services. If the SSL certificate in use by the web service host has been issued by a well-known certificate authority (for example, Verisign or Thawte), no more steps are necessary, provided the appropriate certificate already exists in the cacerts keystore in the Java SDK that is running the GEL script. However, you may need to complete more steps in these situations to ensure that the proper trust is established between the GEL script and web service host: - The SSL certificate is self-signed, which means you generated the certificate using your own certificate authority. - The expiration date on a certificate that is issued by a well-known certificate authority has been reached.
Set Up a Self-Signed SSL Certificate on a Web-Service Host For this setup, identify the Java SDKs that will run the GEL scripts: - If GEL scripts are being run outside of the application using the XOG client, the first Java SDK that is listed in your
PATH is the one that is running the scripts. - If GEL scripts are running inside a process in the application, typically the Java SDK that is running the BG service on
the application server is the one that is running the scripts. Complete these steps: 1. Locate the Java SDK installation directory. For example, C:\jdk1.5.0_17. 2. Export the SSL certificate or any updated certificate-authority certificate that you need to import to a file.For example,
mycert.cer.

3. Change directories to the Java SDK JRE security directory.
cd c:\jdk1.5.0_17\jre\lib\security
This directory is where the cacerts Java keystore resides. The keystore holds certificate-authority certificates that are used for establishing trust. The keystore password for this keystore is always changeit. 4. Import your certificate into the cacerts keystore with the Java keytool command.
keytool -keystore cacerts -storepass changeit -import -file c:\temp\mycert.cer -trustcacerts -alias mycert
Assign the alias value to a value that is not currently in use in the keystore.You may be prompted if you want to trust this certificate. If so, answer Yes. 5. If you are setting up the self-signed certificate for the BG service for GEL scripts that run in processes, restart the BG service. The keystore is loaded one time when the Classic PPM services are started.
GEL Tag Restrictions To control the GEL tag restriction, use these commands: - admin general restrict-gel-tags. Sets the value of the gelTagRestriction property to on. - admin general allow-gel-tags. Sets the value of the gelTagRestriction property to off. The property gelTagRestriction is referenced to determine whether gel tags are restricted. The property is on the system element. The element is optional. Use the values on or off to set GEL tag restrictions for the environment. Specifying any value other than off enables the GEL tag restriction. GEL tag restrictions are off by default.
NOTE Altering GEL tag restrictions requires that you restart the app and bg services. Examples Properties.xml file with no GEL tag restriction:
<system online="true" multiCurrency="false" licenseTypes="old" singleTenantMode="true"/>
or
<system online="true" multiCurrency="false" licenseTypes="old" singleTenantMode="true" gelTagRestriction="off"/>
Properties.xml file with GEL tags restricted:
<system online="true" multiCurrency="false" licenseTypes="old" singleTenantMode="false" gelTagRestriction="on"/>
GEL Examples: Running the XOG
To allow GEL to communicate with the XOG web service, include the SOAP and XOG namespaces in your GEL scripts. Package each invocation in a proper SOAP envelope. The following GEL examples for running the XOG are provided: - Example: Log in to and Run the XOG to Read the List of Resources (Individual Calls) - Example: Log in to and Make a XOG Request (Single Invocation)
Example: Log in to and Run the XOG to Read the List of Resources (Individual Calls) This example logs in to Classic PPM and runs the XOG to read the list of resources. The script performs each of these actions as individual calls to the XOG server.
<gel:script xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"


xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sql="jelly:sql" xmlns:xog="http://www.niku.com/xog" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

<gel:parameter default="http://nikuvm:80" var="XOGURL"/> <gel:parameter default="svong" var="XOGUsername"/> <gel:parameter default="svong" secure="true" var="XOGPassword"/>

<!-- Log into XOG and get a session ID -->

<soap:invoke endpoint="${XOGURL}/niku/xog" var="auth">

<soap:message>

<soapenv:Envelope

xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"

xmlns:xog="http://www.niku.com/xog">

<soapenv:Header/>

<soapenv:Body>

<xog:Login>

<xog:Username>${XOGUsername}</xog:Username>

<xog:Password>${XOGPassword}</xog:Password>

</xog:Login>

</soapenv:Body>

</soapenv:Envelope>

</soap:message>

</soap:invoke>

<!-- Checking whether a sessionID is returned. If not, it means that Login was unsuccessful --> <gel:set asString="true" select="$auth/SOAP-ENV:Envelope/SOAP-ENV:Body/xog:SessionID/text()" var="sessionID"/> <core:choose>
<core:when test="${sessionID == null}"> <gel:out>Couldn't Log in. Check the username/password.</gel:out>
</core:when> <core:otherwise></core:otherwise> </core:choose>

<!--Run XOG and attach an input file...alternatively the Body section can be the NikuDatabus section of an

input file-->

<soap:invoke endpoint="${XOGURL}/niku/xog" var="runresult">

<soap:message>

<soapenv:Envelope

xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"

xmlns:xog="http://www.niku.com/xog">

<soapenv:Header>

<xog:Auth>

<xog:SessionID>${sessionID}</xog:SessionID>

</xog:Auth>

</soapenv:Header>

<soapenv:Body>

<gel:parse var="xmlindoc" file="C:\Clarity\XOG\xml\rsm_resources_read.xml"/>

<gel:include select="$xmlindoc"/>

</soapenv:Body>

</soapenv:Envelope>


</soap:message> </soap:invoke>


<!-- Read the output and extract some information from it --> <gel:set asString="true" select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/Status/
@state" var="XOGoutcome"/> <core:switch on="${XOGoutcome}"> <core:case value="SUCCESS"> <gel:forEach select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/Resources/Resource"
var="outputnode"> <gel:out><gel:expr select="$outputnode/PersonalInformation/@displayName"/></gel:out>
</gel:forEach> <gel:set asString="false" select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/ Statistics" var="stats"/> <gel:out>Success! Total number of records: <gel:expr select="$stats/@totalNumberOfRecords"/></gel:out> </core:case> <core:case value="FAILURE"> <gel:set asString="false" select="$runresult/SOAP-ENV:Envelope/SOAP-ENV:Body/NikuDataBus/XOGOutput/ Statistics" var="stats"/> <gel:out>XOG failed. Out of <gel:expr select="$stats/@totalNumberOfRecords"/> records, <gel:expr select="$stats/@failureRecords"/> failed.</gel:out> </core:case> <core:default> <gel:out>Couldn't find XOG output summary. Please check the output file manually.</gel:out> </core:default> </core:switch>

<!-- Log out of the XOG -->

<soap:invoke endpoint="${XOGURL}/niku/xog" var="logoutresult">

<soap:message>

<soapenv:Envelope

xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"

xmlns:xog="http://www.niku.com/xog">

<soapenv:Header>

<xog:Auth>

<xog:SessionID>${sessionID}</xog:SessionID>

</xog:Auth>

</soapenv:Header>

<soapenv:Body>

<xog:Logout/>

</soapenv:Body>

</soapenv:Envelope>

</soap:message>

</soap:invoke>

</gel:script>

Example: Log in to and Make a XOG Request (Single Invocation) In this example, the script logs in and makes a XOG request in a single invocation. The XOG request is also included inline, which means it is included in the script instead of being retrieved from a file.
<gel:script xmlns:x="jelly:xml"


xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary" xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xog="http://pmo.sec.samsung.net/niku/xog">
<gel:parameter var="XOGusername" default="admin"/> <gel:parameter var="XOGpassword" default="admin"/>
<soap:invoke endpoint="http://pmo.sec.samsung.net/niku/xog" var="result"> <soap:message> <soap-env:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xog="http://www.niku.com/xog"> <soap-env:Body> <xog:Login xmlns="http://www.niku.com/xog"> <xog:Username>${XOGusername}</xog:Username> <xog:Password>${XOGpassword}</xog:Password> </xog:Login> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd"> <Header version="12.0.0.5028" action="read" objectType="resource" externalSource="NIKU"> <args name="include_contact" value="false"/> <args name="include_management" value="false"/> <args name="include_custom" value="false"/> <args name="include_financial" value="false"/> </Header> <Query> <Filter name="isActive" criteria="EQUALS">true</Filter> </Query> </NikuDataBus> </soap-env:Body> </soap-env:Envelope> </soap:message>
</soap:invoke>
<gel:out><gel:expr select="$result"/></gel:out> </gel:script>
GEL Database Operations
GEL can connect to one or more databases, and it is not limited to Classic PPM databases. Both Oracle and SQL Server are supported. - Example: JDBC Error - Example: Connect to a Database and Print the Results of a Basic Query
Example: JDBC Error Most connection issues are a result of either login errors or JDBC issues. This example shows a JDBC error:
E:\Clarity\XOG\bin>gel -script gelsqlexample.xml ERROR 2005-08-31 16:45:40,549 [main] sql.SetDataSourceTag Could not load driver class: java.lang.ClassNotFoundException: oracle.jdbc.driver.OracleDriver java.lang.ClassNotFoundException: oracle.jdbc.driver.OracleDriver...

If you see a similar error, find the necessary JDBC classes and copy them to the GEL classpath. The GEL engine does not search the environment path for these files. GEL only looks in the lib folder (and the Classic PPM server classpath, if it has been installed on the local computer). For Oracle, ojdbc14.jar should be copied to the lib folder. For SQLServer, the Microsoft JDBC drivers must be made available to the GEL engine. Copy the files msbase.jar, mssqlserver.jar, and msutil.jar to the lib directory (after you have installed the latest JDBC driver from Microsoft, or copy the files from the lib directory within Classic PPM ).
Example: Connect to a Database and Print the Results of a Basic Query
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:sql="jelly:sql">
<gel:parameter default="svong" var="ClarityUser"/> <gel:parameter default="svong" secure="true" var="ClarityPassword"/>
<sql:setDataSource url="jdbc:oracle:thin:@localhost:1521:NIKU" driver="oracle.jdbc.driver.OracleDriver" user="${ClarityUser}" password="${ClarityPassword}"/>
<sql:query var="result"> select name, unique_name from srm_projects
</sql:query> <core:forEach trim="true" items="${result.rowsByIndex}" var="row">
<core:forEach var="field" items="${row}"> <gel:out>${field}</gel:out>
</core:forEach> </core:forEach>
<!--core:forEach trim="true" items="${result.rowsByIndex}" var="row"> <core:forEach var="columnName" items="${result.columnNames}" indexVar="i"> <field column="${columnName}">${row[i]}</field> <gel:out>${row[i]}</gel:out> </core:forEach>
</core:forEach-->
</gel:script>
The sql:setDataSource statement makes the connection to the database. Note the use of parameters for the login credentials. Using gel:parameter allows the UserID and Password to be set from within Classic PPM. In addition, the secure="true" declaration masks the password in the user interface, if this script is called from a Classic PPM process. sql:query encloses the query, and the two core:forEach loops cycle through the result. The first core:forEach loop runs through the rows; the embedded core:forEach reads the columns in each row. The results set for this code print one field for each line. The output looks similar to this example:
Project ABC P001 Consumer Confidence Project P002 John's Super Special Project P003 .

One alternative solution for this issue is to programmatically create rows of data. This example is for a query that returns three columns for each row. By using step="3", you can process one logical row at a time. Each item is referred to by using an index offset.
<core:forEach trim="true" items="${queryResult.rowsByIndex}" var="row">
<!-- 3 fields per row, so jump by 3 to build the next row --> <core:forEach var="field" items="${queryResult.columnNames}" indexVar="i" step="3">
<file:line> <file:column value="${row[i]}"/> <file:column value="${row[i+1]}"/> <file:column value="${row[i+2]}"/> </file:line>
</core:forEach>
</core:forEach>
GEL File Operations
GEL can open a file (and if it is an XML file or a comma-delimited file, parse out all of the nodes and attributes), read the file, and write to it. GEL can also perform FTP operations on files. GEL cannot, however, create a directory to put files in, move files around, or delete files after it is done with them. This limitation can be a problem when working with the Documents XOG. - Example: Create a Rate Matrix XOG File - Example: Output Delimited Files - Example: Create a File to Write in Documents for Multiple Projects
Example: Create a Rate Matrix XOG File This example creates a rate matrix XOG file. The file opens a tab-delimited text file as input, and creates a matrixRow node for each row of input data.
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:file="jelly:com.niku.union.gel.FileTagLibrary"> <gel:parameter default="niku" var="clarityUser"/> <gel:parameter default="nikuadmin" secure="true" var="clarityPassword"/> <gel:parameter default="E:\Clarity\XOG\bin" var="infolder"/> <gel:parameter default="E:\clarity\xog\bin\rateMatrixLoadFile.xml" var="XOGloadfile"/> <gel:parameter default="${infolder}\rateMatrix.tab" var="infile"/> <gel:formatDate format="yyyyMMdd" stringVar="today"/>
<!-- Open up the input file --> <file:readFile fileName="${infile}" delimiter="\t" var="infileParsed" embedded="false"/>
<!-- The GEL parse statement can be given the name of an XML file, or, as shown below, an XML node structure. -->
<!-- Use it to create the main XML shell and add in non-repetitive sections like the columns section below -->
<gel:parse var="loadContent"> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

xsi:noNamespaceSchemaLocation="../xsd/nikuxog_matrix.xsd"> <Header action="write" externalSource="NIKU" objectType="matrix" version="12.0.0.5028"/> <matrices>
<matrix defaultCurrencyCode="USD" name="D&#38;B COST/RATE MATRIX" type="Cost/Rate"> <columns> <column name="entity"/> <column name="department"/> <column name="resourceClass"/> <column name="transactionClass"/> <column name="resourceRole"/> <column name="resource"/> <column name="inputTypeCode"/> </columns> <matrixRows> </matrixRows>
</matrix> </matrices> </NikuDataBus> </gel:parse>
<!-- Build the sections. Skip the headers on the first line --> <core:forEach items="${infileParsed.rows}" var="row" indexVar="i" begin="1" step="1">
<!-- This GEL:parse statement creates the node in memory --> <gel:parse var="matrixRowNode">
<matrixRow actualCost="${row[11]}" currencyCode="${row[12]}" entity="${row[2]}" department="${row[3]}" fromDate="${row[0]}" rate="${row[9]}" transactionClass="${row[5]}" resourceClass="${row[4]}" resourceRole="${row[6]}" inputTypeCode="${row[8]}" resource="${row[7]}" standardCost="${row[10]}" toDate="${row[1]}"/> </gel:parse>
<!-- GEL:set below adds the node in memory to the main XML file we're building --> <gel:set value="${matrixRowNode}" select="$loadContent/NikuDataBus/matrices/matrix/matrixRows" insert="true"/> </core:forEach>
<!-- Now write it all to a file --> <gel:serialize fileName="${XOGloadfile}" var="${loadContent}"/> </gel:script>
Example: Output Delimited Files This example shows how to output delimited files using GEL.
<!-- Open up the output file --> <file:writeFile fileName="${doclistfile}" delimiter=",">
Example: Create a File to Write in Documents for Multiple Projects This example creates a file to write in documents for a number of projects. This example takes a XOG file for a project as input, extracts each project ID in sequence, and creates a parent node for the Documents XOG. Consider this information:
- The Document XOG requires the internal database ID of the project, not the UNIQUE_NAME that appears as the project ID in the input file. Use the GEL JDBC connection to retrieve the corresponding DBID for each project as the Documents XOG XML file is built.
- The Document XOG only loads data at the folder level, which means it takes a source folder and uploads it into a target folder. If you want to upload documents for multiple projects, the documents for each project must be placed into an individual temporary folder. GEL does not currently support these steps (creating folders, copying files into them, and so on), so you must prepare the documents elsewhere.
In addition, this example illustrates another way to build the XML file using the GEL:set tag.

<gel:script

xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:file="jelly:com.niku.union.gel.FileTagLibrary" xmlns:sql="jelly:sql">

<gel:parameter default="jdbc:microsoft:sqlserver://myserver:1433;DatabaseName=pmodev;SelectMethod=cursor" var="clarityURL"/>
<gel:parameter default="niku" var="clarityUser"/> <gel:parameter default="niku" secure="true" var="clarityPassword"/> <gel:parameter default="D:\App\pmo\xog\xml" var="infolder"/> <gel:parameter default="${infolder}\prj_projectswrite.xml" var="infile"/> <gel:parameter default="D:\App\pmo\xog\xml" var="XOGlogFolder"/> <gel:parameter default="${infolder}\DocumentsXOGLoad.xml" var="docXOGloadfile"/> <gel:parameter default="${infolder}\docslist.gel" var="doclistfile"/>

<gel:formatDate format="yyyyMMdd" stringVar="today"/>

<!-- Get a DB Connection to Clarity --> <sql:setDataSource url="${clarityURL}" driver="com.microsoft.jdbc.sqlserver.SQLServerDriver" user="${clarityUser}"
password="${clarityPassword}" var="clarityDS"/>

<!-- Open up the Project Plans input file --> <gel:parse var="projectsParsed" file="${infile}"/>

<!-- Open up the output file --> <file:writeFile fileName="${doclistfile}" delimiter=",">

<!-- set up the document XOG shell --> <gel:parse var="docsParsed">
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/nikuxog_document.xsd">
<Header action="write" externalSource="OS" objectType="document" version="12.0.0.5028"/> <Documents> </Documents> </NikuDataBus> </gel:parse>

<!-- Define a variable for the Documents node --> <gel:set select="$docsParsed/NikuDataBus/Documents" var="docnode"/>

<!-- set up a template Parent node --> <gel:parse var="parentNode"><Parent documentLocation="" parentObjectId="" parentObjectType="Projects"/></ gel:parse>


<!-- Loop thru each project ID in the input file --> <gel:forEach select="$projectsParsed/NikuDataBus/Projects/Project" var="currentPrj">
<gel:set asString="true" select="$currentPrj/@projectID" var="currentPrjID"/> <!-- reset the test flag --> <core:set value="false" var="hasDocs"/>
<!-- Build the XOG file for the documents. The process is to insert a copy of the node --> <!-- currently in memory, then modify the attributes as necessary. After that, the --> <!-- node in memory is reset to the current one. Also note that the Documents XOG --> <!-- requires the DBID of the project ...so we have to connect to Clarity first. --> <core:if test="${hasDocs}">
<sql:query var="prjIDquery" dataSource="${clarityDS}"> SELECT ID FROM niku.SRM_PROJECTS WHERE UNIQUE_NAME = ? <sql:param value="${row[i]}"/>
</sql:query>
<!-- there should only be one result value... --> <core:forEach trim="true" items="${prjIDquery.rowsByIndex}" var="idrow">
<core:forEach var="idfield" items="${prjIDquery.columnNames}" indexVar="j"> <gel:set value="${parentNode}" select="$docsParsed/NikuDataBus/Documents" insert="true"/>
<gel:set value="${infolder}\docimporttemp\${currentPrjID}" select="$docnode/Parent/@documentLocation"/>
<gel:set value="${idrow[i]}" select="$docnode/Parent/@parentObjectId"/> <gel:set var="parentNode" select="$docnode/Parent"/> </core:forEach> </core:forEach>
</core:if>
</gel:forEach>
<!-- Write the XOG file for documents --> <gel:serialize fileName="${docXOGloadfile}" var="${docsParsed}"/>
<!-- Close the output file --> </file:writeFile>
</gel:script>
GEL Integration Processes - Integration Process Checklist
A GEL integration process is a way to automate repetitive steps that would otherwise be performed manually using Classic PPM. A process can act on any object type. The process includes a series of steps that result in a completed end point. A process has a start step (required), an end step (required), and one or more intermediate steps. Each step included in the process performs one or more actions that moves the process toward its completion. The following process actions are available:
- Manual. Performed by a user in the user interface. - System. Completed by a Classic PPM system action. - Job. Completed by running a job that is either scheduled or started manually from the user interface. - Custom action. Available for normal process steps that include custom GEL code. These GEL snippets use tag
libraries to interact with various data sources and data destinations. You can disconnect integration processes from any specific object. This flexibility allows you to do the following steps: - Schedule integration processes in Classic PPM - Initiate integration processes in real time in one of these ways:
- Manually from the user interface. - Using a XOG web service request. From a background job, real-time integrations enable external applications to send data proactively. The request starts an integration process and then passes the incoming data.
NOTE For performance reasons, the XOG web service request does not initiate integration processes for all objects. The objects that can have integration processes that the XOG web service initiates are projects and incidents.
Integration Process Checklist Use this checklist to set up and run integration processes: 1. Create the process. 2. (Optional) Create groups to represent larger segments of the process. 3. Create start, intermediate, and finish steps. 4. Include actions on steps. GEL can be used through Custom Actions. 5. Connect the steps with splits and joins. 6. Validate the process. For more information about this step, see Administrating. 7. Use the web service API to start the process, and then register the web service request to invoke the process.
NOTE
- Web service requests do not need to conform to any product API. They need only be valid SOAP requests.
- The external application maps incoming SOAP message with a process. - The SOAP listener servlet responds to incoming web service requests. - The Catalog Listener and the Ad-Hoc Query listener are built-in listeners. You can register subsequent
listeners in the database using an XPath expression, a target namespace, or both to match the listener to an incoming service request. The following image describes the XOG realtime integration:
> [!INFO]
> Figure 46: Image describing XOG Realtime Integration


The following image describes the XOX scheduled or manual process:
> [!INFO]
> Figure 47: Image describing XOG Scheduled or Manual Process


XOG GEL Tag Library
Every GEL tag is associated with a tag library. The GEL Tag library on this page is a collection of general-purpose, frequently-used tags for XML manipulation. These tags also handle variables, expressions, logging, and JDBC datasources for Classic PPM. The following XOG GEL libraries are also available: To use the GEL tag library, include the following namespace declaration in your script.
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
XOG GEL Tag Library:
- gel:script - Defining GEL Scripts - gel:parse Parsing XML - gel:set Setting XML Document Values - gel:expr Evaluating Expressions - gel:parameter - Defining Parameters - gel:getDocument Requesting XML Documents - gel:setDocument Passing XML Documents - gel:persist Persisting Variables - gel:notify Sending Notifications - gel:email Sending Email Messages - gel:formatDate Formatting Time Strings - gel:parseDate Parsing Time Strings - gel:setDataSource Specifying Data Sources - gel:nsqlQuery Executing NSQL Queries - gel:log Logging Messages - gel:out Printing to the Console


gel:script - Defining GEL Scripts
gel:script is the root element for all GEL scripts.
This element is the core:jelly:
- escapeText Values: - true. The tag body is escaped (interpreted as text). - false. The body is interpreted as XML. Default: true Type: Boolean
- trim Values: - true. The white space inside this tag is trimmed. - false. The white space is not trimmed. Default: true Type: Boolean
gel:parse Parsing XML
gel:parse generates an XML document in memory from a file, InputStream (obtained with ftp:get tag), or from GEL script content.
Using other get tags, you can:
- Save the output. - Generate an XML document from an InputStream. - Generate an XML document from GEL script content.
This tag has the following attributes:
- file Optional. The file to read. Specify the input path and file name or the InputStream from the ftp:get tag. If this attribute is not set, the content of this tag is used. Type: File or InputStream
- var Required. The name of the variable that contains the XML document to be generated. Type: String
Example 1


<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <gel:parse var="xmldoc" file="e:\temp\BB1.xml"/>
Example 2
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:parse var="xmldoc"> <groups> <group code="CTU">CTU Team</group> <group code="DS23">SWAT Team</group> </groups>
</gel:parse> </gel:script>
gel:set Setting XML Document Values After you use gel:parse or soap:invoke and have an XML node or document, you can use gel:set to retrieve certain element content or attributes and set the value to a variable. You can also use gel:set to change content (including text and attributes) or add an element with its full structure as a child into another element.
WARNING Clarity 15.9.2 and higher releases include the JAXEN 1.2.0 library. The following syntax for GEL scripts is no longer supported: Not Supported:
<gel:set select="$groupNode/@code/text()" var="code" asString="true"/>
Supported in 15.9.2 and higher releases:
<gel:set select="$groupNode/@code" var="code" asString="true">
Example
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<!-- point A --> <gel:parse var="groups">
<groups> <group code="DS23">SWAT Team</group>
</groups> </gel:parse>
<!-- point B --> <gel:set select="$groups/groups/group" var="groupNode"/>
<!-- point C --> <gel:set select="$groupNode/@code" var="code" asString="true"/>
<!-- point D --> <gel:set value="${groupNode}" select="$groups/groups" insert="true"/>
<!-- point E --> <gel:set value="CTU Team" select="$groupNode/text()"/>

<!-- point F --> <gel:set value="CTU" select="$groupNode/@code"/>
<!-- point G --> <gel:set select="$groups/groups" var="x" asString="true"/>
<gel:out>${x}</gel:out>
</gel:script>
The GEL context contains these values: - Point A. An XML document, referred by groups, with the specified content. The root element is <groups> and has one
<group> sub-element. - Point B. The document groups are not changed. An XML node, groupNode, is the first <group> element in the
document groups. - Point C. A variable code is created with the content of the code attribute from the node groupNode (that is, DS23). - Point D. A new XML node with the content specified in the groupNode node is added to the <groups> element of
groups. The groups now refer to an XML document whose root element is <groups> that has two sub-elements with the same content. The groupNode still refers to the first [set the product group or family] element. Example: Groups is the whole XML document, and groupNode is the element:
<groups> <group code="DS23">SWAT Team</group> <group code="DS23">SWAT Team</group>
</groups>
- Point E. The text content of groupNode is changed to CTU Team because groupNode is an element within groups. Document is also changed.
- Point F. The code attribute of groupNode is changed to CTU. - Point G. The entire XML structure is captured as text to the variable x. When you print the document referred by groups, you see:
<?xml version="1.0" encoding="UTF-8"?> <groups>
<group code="CTU">CTU Team</group> <group code="DS23">SWAT Team</group> </groups>
Retrieve XML Document Values Use the attributes var and select to retrieve values from an XML document. If the select refers to a non-existing path, no value setting is performed. If var refers to a variable that is not set in another place, it will be null. To retrieve the text content of a node:
<set var="..." select="$doc/.../node_name/text()" asString="true"/>.
To retrieve a certain attribute:
<set var="..." select="$doc/.../node_name/@attribute_name" asString="true"/>
To retrieve a node, including its sub-nodes:

<set var="..." select="$doc/.../node_name"/>.
Modify XML Document Values Use the attributes var and select together to set values in an XML document. The select attribute must refer an existing path. If select = "$doc/group" and there is not an element that is named group in the document or node that is referred by doc, an exception is thrown. If select="$doc/group/text()" and the <_group> element does not contain text content, an exception is thrown.
If the node does not have text content, to set the text content of a node:
<set value="..." select="$doc/.../node_name"/> -or<set value="..." select="$doc/.../node_name/text()"/>
If you reverse the previous two examples, you get an exception. This happens because a node does not have any child text but you referred to it with text(), or the item you tried to set will be appended to the previous text content.
If you are not sure if the node for which you want to set text content has text content already, it is best to retrieve its text value first and then use core:if to verify if it exists before proceeding.
To set the attribute value of node:
<set value="..." select="$doc/.../node_name/@attribute_name"/>.
To set a node into another document:
<set value="${node_var}" select="$doc/.../node_name"/>
You can use attribute insert if you are adding a node to a path or to have this node replace whatever is referred to by the path. This information describes the gel:set: - var
Either var or value is required. The variable to export for the item being iterated over. The variable can be a string, a number, and so forth. Type: String - value Either var or value is required. If the value is a node, it is inserted into the position that is specified by select. Otherwise, the string value is set as the text content or attribute that is specified by select. Type: Object - select Required. The XPath expression to use to retrieve a value. Type: org.jaxen.XPath - asString Optional. If set to "true", the value that is specified by select is converted to a string and is saved into the variable referred to by var. If set to "false", the node that is specified by select is set to the variable referred by var. Default: false. Ignored when var is not set. Type: Boolean - insert Optional. If set to "true", the node referred to by value is inserted as a child node to the node specified by select. If set to "false", the node that is referred to by value is used to replace the node that is specified by select. Default: false. Ignored when value is not set, or set but not with a node value. Type: Boolean

gel:expr Evaluating Expressions Use this tag to evaluate an expression as text. Most often the expression resolves to an XML element as illustrated in these examples. Example 1
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:parse var="group"> <group code="CTU">CTU Team</group>
</gel:parse>
<core:comment> The code is <gel:expr select="$group//@code"/>
</core:comment>
</gel:script>
Example 2 The previous example is equivalent to the following gel:set example:
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:parse var="group"> <group code="CTU">CTU Team</group>
</gel:parse>
<gel:set var="code" select="$group//@code" asString="true"/>
<core:comment> The code is ${code}
</core:comment>
</gel:script>
The following information describes gel:expr - select
Required. The XPath expression to retrieve the value. Type: XPath
gel:parameter - Defining Parameters Use this tag to define parameters that can be used in a GEL script. Example
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:parameter var="hostname" default="http://localhost/niku/xog"/> <gel:parameter var="username" default="admin"/>


<gel:parameter var="password" default="niku2000" secure="true"/>
<gel:out>Host = ${hostname}</gel:out> <gel:out>User = ${username}</gel:out>
</gel:script>


Use gel:parameter Instead of core:set
When a GEL script is executed from the console, there is no difference between using gel:parameter and core:set. When gel:parameter is executed as a process, all parameters that were defined using the <gel:parameter> tag appear with input boxes on the action definition page. You can enter a value for a parameter to override the default value in the script.
You should use gel:parameter for values that may be changed by process administrators (such as URL, hostname, username, and so forth.). In addition, use this parameter for values which should be kept discrete, like passwords. You can only define one parameter name at a time. For example, if you use logic such as "if a certain condition, log in as userA, otherwise userB," instead of defining "username" in two places, use this parameter to log in, define two properties "usernameA" and "usernameB", and then use the <core:set> tag to pick one of those two properties to set into a variable in the "if" block.
A parameter can be used later just like other variables (that is, ${var}). This information describes gel:parameter:
- var Required. The parameter name. Type: String
- default Optional. The parameter default value. Provide this value if you want the script to be executable from the console, even if this parameter is not secure. Type: Object
- secure Required. Set this attribute to "true" if the parameter content should not be shown in plain text to process administrators. Default: false Type: Boolean
gel:getDocument Requesting XML Documents
A process can be invoked in these ways:
- Manually. - Invoked by a job scheduler. - Invoked by a request on the web service around the process engine.
When a process is invoked as a web service, the request is an XML document. You can use this tag to get that document, find what needs to be done, and then perform actions accordingly. If an XML document is set using the gel:setDocument tag in one step of a process, you can use this tag to retrieve the document a later step of the same process.
- var Required. The name of an XML document variable which was set in the previous step of the same process. If this step is the first step, this variable is the body of the SOAP request that is sent to the process engine web service. Type: String


gel:setDocument Passing XML Documents
Use this tag to pass an XML document that was generated in one step of a process to the next step. You can write the processing logic in separate steps. For example, you can invoke one web service, save the response in a step, and then retrieve it and use it to invoke XOG in another step.
- var Required. The name of an XML document variable to pass to the next step in the same process. Type: String
gel:persist Persisting Variables
When you set a variable in a GEL script, you can only use it when executing that script. Sometimes when the GEL script is executed in a process engine, you must share a value in other scopes such as:
- Globally among all process GEL scripts. - Only with GEL scripts in a certain process within all process executions (such as a single variable that stores the time
a Remedy Clarity Incident Sync process was most recently launched). - Only with GEL scripts in different steps of a process during one process execution. - Use <gel:persist> to achieve variable value sharing. Once a value is persisted, you can use it directly in proper
scripts without defining any special tags. For example, after <gel:persist var="hostname" value="localhost" scope="INSTANCE"/> is processed, you can refer to ${hostname} directly in any GEL script of this process during this process execution.
You can access a persisted value with a PROCESS scope using scripts from that process (even if the process, its steps, and GEL scripts change). If a process is deleted and then recreated, it is considered to be a new process. All values that are persisted before with PROCESS scope are not available to the new process, even if the new process has the same process name, code, or steps as the deleted one.
- var Required. The variable to be persisted. Type: String
- value Optional. The value of the variable. Must be a string; formatted date strings are acceptable. When this attribute is not set, the tag content is used as the value to be persisted. If the value being persisted contains special characters, such as a new line, do not use this attribute, use the text content instead. Maximum Length: 4000 characters. Longer strings are truncated. Type: String
- scope Required. Specifies the scope of the variable. Values: - GLOBAL. Set once, use it anywhere. - PROCESS. Set once, use it anywhere in the same process. - INSTANCE. Set once, use it anywhere in the same process during the current execution. Type: String
Example
The following example persists the Classic PPM built-in variables gel_objectInstanceId and gel_processInstanceId throughout this process instance as myObjectId and myProcessId.
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:persist var="myObjectId" value="${gel_objectInstanceId}" scope="INSTANCE"/>


<gel:persist var="myProcessId value="${gel_processInstanceId}" scope="INSTANCE"/>
</gel:script>


gel:notify Sending Notifications
Use this tag to send email. The email content is the text content of this tag, followed by process messages that are logged so far during the current process. Email server information is derived from the properties.xml file of the installation.
- from Required. The email address of the sender. Type: String
- fromName Optional. The name of the sender. Type: String
- to Required. The email addresses of the recipient (delimited by commas, semicolons, or spaces). Type: String
- subject The email subject. Type: String
- level Optional. Here are the valid entries: - WARNING. The email is sent only if there are warning or error messages. - ERROR. The email is sent only if there are error messages. Only error messages are included in the message. If this attribute is not specified, an email is sent no matter how many log messages are retrieved. All process messages that are logged so far are included. Type: String
Example
This example sends a notification if an error had been logged with <gel:log>:
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:notify from="username@mailserver.com" fromName="Clarity Admin" to="user@somedomain " subject="There was a process error" level="ERROR"> A process error was received.
</gel:notify>
</gel:script>

gel:email Sending Email Messages
Use this tag to send an email. The email content is the text content of this tag. Email server information is derived from the properties.xml of the installation.
- from Required. The email address of the sender.


Type: String - fromName
Optional. The name of the sender. Type: String - to Required. The email addresses of the recipient (delimited by commas, semicolons, or spaces). Type: String - subject Required. The email subject. Type: String
Example
This example sends a simple email:
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:email from="username@mailserver.com" fromName="Clarity Admin" to="user@somedomain " subject="Simple email"> Hello World.
</gel:email>
</gel:script>


gel:formatDate Formatting Time Strings
This tag provides a formatted time string which you can use as a part of a file name, appended to a comment line, or inserted into a database.
<gel:out>Hello World! Now it is <gel:formatDate format=" h 'o''clock' a, zzzz, d MMM yyyy"/>.</gel:out>
The previous example generates this output:
Hello World! Now it is 4 o'clock PM, Pacific Standard Time, 24 Mar 2005.
This tag has the following attributes:
- format Optional. Specifies how time displays in java.text.SimpleDateFormat format. For more information about this format, search the Oracle website. Default: yyyy-MM-dd HH:mm:ss Type: String
- stringVar Optional. This variable refers a formatted date string. If this attribute is not set, the formatted string is used in the content of this tag's parent element. Type: String
- dateVar Optional. The variable, of type java.util.Date, referred to by this name is formatted as a string. If this attribute is not set, the current time is used. Type: String
Example 1
This example formats the current date and time into the format the XOG requires for investment start/finish dates.


<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:out> <gel:formatDate format="yyyy-MM-dd'T'HH:mm:ss"/>
</gel:out>
</gel:script>
Example 2 This example formats the specified date and time into the format the XOG requires for investment start/finish dates. Notice the use of the Java class java.util.Date and the <core:new>, <core:invoke> and <core:arg> tags.
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<core:new className="java.util.Date" var="date"/> <core:invoke on="${date}" method="parse">
<core:arg value="2009/03/27"/> </core:invoke>
<gel:out> <gel:formatDate format="yyyy-MM-dd'T'HH:mm:ss" dateVar="date"/>
</gel:out>
</gel:script>
gel:parseDate Parsing Time Strings This tag takes a formatted string and generates a date instance. This tag uses the following attributes: - format
Optional. Indicates how the string is formatted in java.text.SimpleDateFormat format. For more information about this format, search the Oracle website. Default: yyyy-MM-dd HH:mm:ss Type: String - stringVar Optional. This variable refers to the string to be parsed. If the string does not have the format that is specified by the format attribute, a parsing exception is thrown. If this attribute is not set, the text content of this tag is used as the string. Type: String - dateVar Required. The parsed date is stored as a java.util.Date and referred to by this variable name. Type: String Example This example parses a date from a string, and then formats that date using <gel:formatDate>.
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:parseDate dateVar="date" format="yyyy-MM-dd">2009-03-27</gel:parseDate>


<gel:out> My date was: <gel:formatDate format="yyyy-MM-dd'T'HH:mm:ss"
dateVar="date"/> </gel:out>
</gel:script>

gel:setDataSource Specifying Data Sources Use this tag to identify the Classic PPM database.
<gel:setDataSource dbId="niku"/>
When you access the Classic PPM database, you only need to know its database ID. You do not need to provide other access information such as username.
This tag uses the following attribute: - dbId
Required. The database ID. Type: String

gel:nsqlQuery Executing NSQL Queries Use this tag to execute an existing NSQL query, or define a new ad-hoc query to retrieve data from the database, storing the results to the specified variable. Examples
<gel:setDataSource dbId="niku" var="dataSource"/>

<gel:nsqlQuery queryId="usercountbylicensetype" var="resultSet"> <gel:nsqlParameter name="license_wildcard" value="*"/>
</gel:nsqlQuery> <core:forEach items="${resultSet}" var="row">
<gel:out>Row Contents: '${row}'.</gel:out> </core:forEach>

<gel:nsqlQuery var="resultSet">

<![CDATA[

SELECT @SELECT:U.USER_NAME:USER_NAME@,

@SELECT:U.ID:USER_ID@

FROM

CMN_SEC_USERS U

WHERE @FILTER@ ]] >

<gel:nsqlParameter name="user_name_wildcard" value="admin*"/>

</gel:nsqlQuery>

<core:forEach items="${resultSet}" var="row">

<gel:out>Row Contents: '${row}'.</gel:out>

</core:forEach>

gel:log Logging Messages Use this tag to insert status messages into the process engine log table.
<gel:script

xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<gel:log level="warn" category="Employee Data" message="No record returned."/>
</gel:script>
This tag logs messages as a process message in the BPM_ERRORS table when this script runs as a custom step in a process. If the process is running from the console, the message is inserted into the standard log file.
- message Optional. The message to log. The message can be set as a value attribute or as the content of this tag. Type: String
- category Optional. Use to distinguish logs; can be concatenated from business data type, file name, developer ID, and so forth. Type: String
- level Optional. The warning level. The following values are supported: - DEBUG - ERROR - FATAL - INFO - WARN This attribute is not case-sensitive. For example, WARN, warn, and Warn are the same. A process message has only three levels: INFO, WARNING, and ERROR, while a logger message in the log file can have all levels. When a message is logged as a process message, DEBUG and INFO messages are logged as INFO messages, WARN messages are logged as WARNING messages, and ERROR and FATAL messages are logged as ERROR messages. Default: INFO Type: Level
- var Optional. A variable name into which the log message should be stored. Use when you want to save log messages for other purposes such as sending emails. If the variable is: - Not set. A StringBuffer is created for storing the message; it can later be referred to using this variable name. - Already a StringBuffer. The StringBuffer is appended to the log message. - A string. A StringBuffer is created for storing the string referred to by this variable followed by the log message. It can later be referred to using this variable name. Type: String
gel:out Printing to the Console
This tag prints the content of this tag to the system console. This tag does not have any attributes. Use this tag only when you are using the console to debug and the GEL script is not running as a process. For example:
<core:set var="x" value="file.rows[2][3]"/> <gel:out>${x}</gel:out>
If you have a variable that contains an XML Node, including an XML document and you want to print it, combine gel:out with gel:expr:
<gel:parse var="doc"> <groups>...</groups>
</gel:parse>


<gel:out><gel:expr select="$doc/groups"/></gel:out>


XOG Core Tag Library
These tags are a useful subset of the jelly:core tag library. For a description of the Jakarta Jelly tags, see http:// jakarta.apache.org/commons/jelly/tags.html. - core:catch - Catching Exceptions - core:set - Setting Variables - core:forEach - Iterating over Elements - core:if - Evaluating Conditionally
The following additional tags can invoke Java class methods directly: - core:new - core:invoke - core:invokeStatic The following tags are also useful for controlling flow in your script: - core:if - core:switch, core:case, core:default - core:choose, core:when, core:otherwise - core:forEach - core:while - core:break Include the following namespace declaration in your script to use this tag library:
<gel:script xmlns:core="jelly:core"...>
core:catch - Catching Exceptions Use the Jelly fault-handling tags to catch exceptions and exit gracefully when a process failure occurs. Use the <j:catch> tag to capture exceptions in the ex variable. In addition to the catch tags, you can check the ex variable and write it to the console using gel:out. Example
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<!-- this gel:set will throw an exception --> <core:catch var="exception">
<gel:set select="$bad/text()" var="mynode"/> </core:catch>
<core:if test="${exception != null}"> <gel:out>Caught Exception was: ${exception}</gel:out>
</core:if>
</gel:script>


core:set - Setting Variables
This tag sets a variable from the result of an expression.
- defaultValue Sets the default value to use if the value expression results in a null value or blank string. Type: org.apache.commons.jelly.expression.Expression
- encode When set to: "1", the body of the tag is encoded as XML text. When "<" and ">" are encountered in the tag body, they are encoded as "&lt;" and "&gt;". "0", the body is not encoded.
NOTE Use this only if this tag is specified with no value so that the text body of this tag can be used as the body.
Type: Boolean - escapeText
When set to: "1", the body of the tag is escaped (interpreted as text). "0", the body is interpreted as XML. Default: "1" (text) Type: Boolean - property Indicates the property name to set on the target object. Type: java.lang.String - scope Sets the scope of this variable. For example, when set to "parent", this value is in the parent scope. When Jelly is run from inside a servlet, then other scopes are available such as "request", "session", or "application". Other applications may implement their own scopes. Type: java.lang.String - target Sets the target object on which to set a property. Type: java.lang.Object - trim When set to: "1", whitespace inside this tag is trimmed. "0", whitespace is not trimmed. Default: "1" (trimmed). Type: Boolean - value Sets the expression to evaluate. Type: org.apache.commons.jelly.expression.Expression - var Sets the variable name to define for this expression. Type: java.lang.String
Example
This example shows setting strings and numbers:
<gel:script
xmlns:core="jelly:core"
xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">


<core:set var="color" value="blue"/> <gel:out>Color is ${color}</gel:out>
<core:set var="age" value="39"/> <gel:out>My age is ${age - 18}</gel:out>
</gel:script>


core:forEach - Iterating over Elements
This tag iterates over elements and has the following attributes:
- begin Sets the starting index value (for first element in the array). Type: int
- end Sets the last index value. Type: int
- escapeText When set to:
- 1 - The body of the tag is escaped (interpreted as text). - 0 - The body is interpreted as XML.
Default: 1 Type: Boolean - indexVar Sets the variable into which the current index counter is exported. Type: java.lang.String - items Sets the expression that is used to iterate over. This expression may resolve to an iteration, collection, map, array, enumeration, or comma-delimited string. Type: org.apache.commons.jelly.expression.Expression - step Sets the index increment step. Type: int - trim Values: - 1. The whitespace inside this tag is trimmed. - 0. The whitespace is not trimmed.
Default: 1 Type: Boolean - var Sets the variable into which the item being iterated over. Type: java.lang.String - varStatus Sets the variable into which the current status is exported. The status is an implementation of the JSTL LoopTagStatus interface that provides the following bean properties:
- current. The current value of the loop items being iterated. - index. The current index of the items being iterated. - first. If true, this is the first iteration. - last. if true, this is the last iteration. - begin. This indicates the starting index of the loop. - step. This indicates the number by which the loop is iterated, for example:
- 1. Indicates each loop increments by one index (for example: 1, 2, 3). - 2 indicates each loop increments by two index numbers (for example: 1, 3, 5). - end. Indicates the last index in the loop. Type: java.lang.String
Example
This example iterates through the properties in the file test.properties that ships with the XOG client and prints out each property.
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <!-- print out each value we find --> <core:forEach items="A, B, C, 1, 2, 3" var="value"> <gel:out>Value = ${value}</gel:out> </core:forEach>
</gel:script>
core:if - Evaluating Conditionally
This tag evaluates the body that is based on some condition and has the following attributes:
- escapeText When set to: - 1. The body of the tag is escaped (interpreted as text). - 0. The body is interpreted as XML. Default: 1 Type: Boolean
- trim When set to: - 1. The whitespace inside this tag is trimmed. - 0. The whitespace is not trimmed. Default: 1. Type: Boolean
- test Sets the Jelly expression to evaluate. If this returns true, the body of the tag is evaluated. Type: org.apache.commons.jelly.expression.Expression
Example 1
This example tests the value of a variable in a <core:if> statement.
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<core:set var="color" value="blue"/>

<core:if test="${color == 'blue'}"> <gel:out>Color matched blue!</gel:out>
</core:if>
</gel:script>
Example 2 This example tests the numeric value. Notice that the > symbol has been escaped in the XML as > is a reserved character.
<gel:script xmlns:core="jelly:core" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary">
<core:set var="age" value="10"/>
<core:if test="${age &#62; 5}"> <gel:out>Age is greater than 5</gel:out>
</core:if>
</gel:script>
XOG File Tag Library (On-Premise Only)
Use delimited file tags to read from and write to delimited files, such as comma-delimited (CSV) files. Use these tags for reading, writing, and manipulating files in tabular format. You might use these tags to map columns in a table to elements in an XML document, or parameters in a JDBC update statement. You can also use these tags to parse CSV files for import into a database. Include the following namespace declaration in your script to use this tag library:
<gel:script xmlns:file="jelly:com.niku.union.gel.FileTagLibrary">
NOTE File Tag is deprecated. - file:readFile - Reading Delimited Files - file:writeFile - Writing Delimited Files - file:comment - Commenting Files - file:set - Changing Files in Memory - file:line - Specifying Lines Files - file:column - Specifying Column Contents - Example: Writing Line-by-line to a File
file:readFile - Reading Delimited Files Use this tag to read the contents of a delimited file. This tag has the following attributes: - fileName Not required if you specify the inputVar attribute. Defines the source file name. Type: String
- inputVar Not required if you specify the fileName attribute. Defines the variable set by the ftp:get tag (from an FTP get operation). Type: InputStream - delimiter Optional. This script is a regular expression that represents the delimiter in each line of text. Example: If the values are separated by commas, set this attribute to ",". If values are separated by commas or pipes, use ",|\|" when the first pipe means "or" in regular expression, and the backslash to escape the second.
NOTE Go to http://java.sun.com/j2se/1.4.2/docs/api/java/util/regex/Pattern.html for more information. Type: String - commentIndicator Optonal. Lines that start with the value specified here are ignored. Default: # Type: String - var Required. The variable to use to later retrieve the file's contents. This variable has a rows attribute which can be iterated; each row is an array of values in the corresponding file line. Rows can also be used to refer to a certain cell. For example "${data.rows[0][2]}" refers to the third column in the first row. This variable can be considered as a representation of the file in memory. Type: StringMatrix (a data type) - embedded Required. This indicates if the values are embedded in double quotes. Default: true. Type: Boolean Example: Comma-delimited File This example uses the following comma-delimited file named sampledata.csv.

sampledata.csv File: admin,Niku,Administrator,1 testuser,Test,User,5000000 testuser2,Test,User2,5000001 readFile Example for sampledata.csv: <gel:script xmlns:core="jelly:core" xmlns:file="jelly:com.niku.union.gel.FileTagLibrary" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <file:readFile fileName="sampledata.csv" embedded="false" var="input"/> <gel:out>Input has ${input.size()} rows.</gel:out> <core:forEach items="${input.getRows()}" var="row"> <gel:out>Username = ${row[0]}</gel:out> <gel:out>First = ${row[1]}</gel:out>

<gel:out>Last = ${row[2]}</gel:out> <gel:out>ResourceID = ${row[3]}</gel:out> </core:forEach> </gel:script>
TIP Clarity 15.5.1 introduced a new processFileLines GEL tag that allows you to read one record at a time from a file. Without this tag, previous releases required reading the whole file at once and then iterating through the file. See the before and after examples below. BEFORE: <f:readFile fileName="${logdir}${thislogfile}" delimiter=" " embedded="false" var="logfiledata" /> <core:forEach trim="true" items="${logfiledata.rows}" indexVar="d" var="logfilerow"> <!-- do steps/ activities here -- > </core:forEach> AFTER: <f:processFileLines fileName="${logdir}${thislogfile}" delimiter=" " indexVar="d" embedded="false" var="logfilerow"> <!-- do steps/activities here --> </f:processFileLines>
file:writeFile - Writing Delimited Files Use this tag used to write to a delimited file. This tags uses the following attributes: - fileName Required. The name of the target file. Type: String - delimiter Optional. Specifies the character used to separate columns of data (for example ","). Delimiters in writeFile tags are used differently from those in readFile tags. In readFile tags delimiter=",|;" means that a comma or a semicolon is used as a delimiter; in a writeFile tag, delimiter=",|;" places both a comma and semicolon between each column. Default: "," (comma) Type: String - commentIndicator Optional. Lines that start with the value specified here are ignored. Default: # Type: String - var Optional. This variable is set only by the file:readFile tag. If this attribute is set, the variable's content is used to populate the generated file after sub-tags are processed. Type: StringMatrix - embedded Optional. This indicates if values are embedded in double quotes (i.e. values contain delimiters).

For example: "abc, def","123". When comma is the delimiter, all double quotes are replaced with two single quotes in the generated file. Default: true Type: Boolean Sub tags include: - file:comment - file:line Example
<gel:script xmlns:core="jelly:core" xmlns:file="jelly:com.niku.union.gel.FileTagLibrary" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <file:readFile fileName="sampledata.csv" embedded="false" delimiter="," var="input"/> <gel:out>Input has ${input.size()} rows.</gel:out> <file:writeFile fileName="sampledata2.csv" embedded="false" delimiter=":" var="${input}"/> </gel:script> </gel:script>
file:comment - Commenting Files Comments cause content to be written to the output file without modification (this is not part of the CSV standard). For example, if you place the string "# Salary reported, generated on 12-13-2003" at the top of a CSV file, Excel will not ignore that line when it imports this CSV file. - value Optional. The comment text. The comment can be set as "value", or to the content text of this tag. Do not include "commentIndicator" in the comment. Type: String Example

<gel:script xmlns:core="jelly:core" xmlns:file="jelly:com.niku.union.gel.FileTagLibrary" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <file:readFile fileName="sampledata.csv" embedded="false" delimiter="," var="input"/> <gel:out>Input has ${input.size()} rows.</gel:out> <file:writeFile fileName="sampledata2.csv" embedded="false" delimiter=":" var="${input}"> <file:comment value="This is a comment"/> </file:writeFile> </gel:script>
file:set - Changing Files in Memory Use this tag to change data in memory (that is, change the variable set in the file:readFile tag).


This tag has the following attributes: - var Required. This variable is set by the file:readFile tag or a row in the file. Type: StringMatrix or String[] - rowIndex Required when var is a file. Specifies the row to change. Type: int - colIndex Required. Specifies the column to change. Type: int - value Required. This is the value to set in the specified cell. Type: Expression Example
<gel:script xmlns:core="jelly:core" xmlns:file="jelly:com.niku.union.gel.FileTagLibrary" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <file:readFile fileName="sampledata.csv" embedded="false" delimiter="," var="input"/> <gel:out>Input has ${input.size()} rows.</gel:out> <!-- Change "admin" to "processadmin" --> <file:set var="${input}" rowIndex="0" colIndex="0" value="processadmin"/> <file:writeFile fileName="sampledata2.csv" embedded="false" delimiter=":" var="${input}"> <file:comment value="This is a comment"/> </file:writeFile> </gel:script>


file:line - Specifying Lines Files Use the f:line tag to specify lines in the generated file. You will then use the f:column tag (see next section) to specify the contents of each column.
Example
<gel:script xmlns:core="jelly:core" xmlns:file="jelly:com.niku.union.gel.FileTagLibrary" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <file:readFile fileName="sampledata.csv" embedded="false" delimiter="," var="input"/> <gel:out>Input has ${input.size()} rows.</gel:out> <file:writeFile fileName="sampledata2.csv" embedded="false" delimiter=":" var="${input}"> <file:comment value="This is a comment"/>


<!-- Add a new line --> <file:line> <file:column value="superuser"/> <file:column value="Super"/> <file:column value="User"/> <file:column value="5000001"/> </file:line> </file:writeFile> </gel:script>


file:column - Specifying Column Contents The f:column tag corresponds to a value field in the generated file. Value fields are separated by delimiters as defined in the writefile tag. This tag does not convert the value. - value Required. The value to set in the selected cell. Type: Expression Example See the example for file:line.
Example: Writing Line-by-line to a File The following example shows how comma-delimited content is written to a generated file, line by line from an SQL query:
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary" xmlns:file="jelly:com.niku.union.gel.FileTagLibrary" xmlns:core="jelly:core" xmlns:sql="jelly:sql"> <sql:setDataSource url="jdbc:clarity:oracle://dbserver:1521;SID=clarity" driver="com.ca.clarity.jdbc.oracle.OracleDriver" user="niku" password="niku"/> <sql:query var="results"> SELECT first_name, last_name, unique_name FROM SRM_RESOURCES WHERE is_active=? <sql:param value="1"/> </sql:query> <file:writeFile fileName="c:/temp/resourceData.csv" delimiter="," embedded="false"> <file:comment value="FIRST_NAME, LAST_NAME, UNIQUE_NAME"/> <core:forEach items="${results.rowsByIndex}" var="row"> <file:line> <file:column value="${row[0]}"/> <file:column value="${row[1]}"/> <file:column value="${row[2]}"/> </file:line> </core:forEach>


</file:writeFile> </gel:script>


XOG FTP Tag Library (On-Premise Only)
Use FTP tags to read and write files on an FTP server. Include the following namespace declaration in your script to use this tag library:
<gel:script xmlns:gel="jelly:com.niku.union.gel.FTPTagLibrary">
NOTE FTP Tag is deprecated. - ftp:open - Opening FTP Connections - ftp:put - Putting Files on Remote Servers - ftp:get - Getting Files from Remote Servers - Example: FTP

ftp:open - Opening FTP Connections This tag opens an FTP connection on a remote server. This tag uses the following attributes: - hostName Required. The name/IP of the host server (with port specified). Type: String - port Optional. The FTP server port. The default is 21. Type: int - user Required. The username for accessing the remote server. Type: String - password Required. The password for accessing the remote server. Type: String This tag also has the following subtags: - ftp:put - ftp:get Example
<gel:scriptxmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <ftp:open hostName="localhost" port="21" user="niku" password="clarity"/> </gel:script>
ftp:put - Putting Files on Remote Servers Include this tag in an ftp:open tag to put a file on a remote FTP site. It has the following attributes:
- fileName Required. The name of file to send. Type: String - remoteDir Required. The directory on the FTP server where the file should be placed. Type: String - localDir The local directory where the file is located. If not specified, this is the JVM default temporary file directory. Only one of these can be set at a time. If none is set, the system default temporary directory is used as localDir. Type: String - var This variable is set by the file:readFile tag or an XML document. The content represented by this variable is sent to the FTP server. Type: StringMatrix or org.w3c.dom.Node - delimiter Optional. If var is set and refers to a variable set by file:readFile, this is used to delimit the file on the FTP server. Default: , (comma) Type: String - embedded Optional. If var is set and refers to a file variable assigned by file:readFile, this is used to indicate if values are embedded in double quotes. If this attribute is set to "true", all double quotes in values are replaced by two single quotes in the generated file. Type: Boolean Example
<gel:scriptxmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <ftp:open hostName="localhost" user="niku" password="clarity"> <ftp:put localDir="/home/niku/xog/bin" fileName="gel.bat" remoteDir="/tmp"/> </ftp:open> </gel:script>
ftp:get - Getting Files from Remote Servers Include this tag with the ftp:open tag to get a file from a remote FTP site. It has the following attributes: - fileName Required. The name of file to get via FTP. Type: String - remoteDir Required. The directory where this file is located on the FTP server. Type: String
- localDir The local directory into which the file is to be saved. Only one of these can be set at a time. If none is set, the system default temporary directory will be used as localDir. Type: String - var If this is set, the file retrieved from the FTP server must be XML or a delimited file. The variable is actually an InputStream. You can use this variable as the inputVar attribute in a file:readFile tag or with gel:parse. This InputStream variable has to be used before the ftp:open tag is closed. If not, the GEL script will hang because inputStream is waiting and you will not be able to use the generated file or XML document variable until the ftp:open tag is closed. The generated file (StringMatrix) or XML document (Node) variable can be used after the ftp:open tag is closed. Type: InputStream Example
<gel:script xmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <ftp:open hostName="myclarityserver" user="niku" password="clarity"> <ftp:get localDir="c:/temp" fileName="app-niku.log" remoteDir="/niku/clarity/logs"/> </ftp:open> </gel:script>
Example: FTP The following example illustrates how to construct a document from a JDBC data source, save it to local machine, and send the document as a file to a remote FTP site.
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:ftp="jelly:com.niku.union.gel.FTPTagLibrary" xmlns:file="jelly:com.niku.union.gel.FileTagLibrary" xmlns:core="jelly:core" xmlns:sql="jelly:sql"> <sql:setDataSource url="jdbc:clarity:oracle://dbserver:1521;SID=clarity" driver="com.ca.clarity.jdbc.oracle.OracleDriver" user="niku" password="niku"/> <sql:query var="results"> SELECT first_name, last_name, unique_name FROM SRM_RESOURCES WHERE is_active=? <sql:param value="1"/> </sql:query> <!-- Write the file locally and then FTP it --> <file:writeFile fileName="c:/temp/resourceData.csv" delimiter="," embedded="false"> <!-- Add a comment header to the file -->


<file:comment value="FIRST_NAME, LAST_NAME, UNIQUE_NAME"/> <core:forEach items="${results.rowsByIndex}" var="row"> <file:line> <file:column value="${row[0]}"/> <file:column value="${row[1]}"/> <file:column value="${row[2]}"/> </file:line> </core:forEach> </file:writeFile> <ftp:open hostName="ftpserver" port="21" user="niku" password="clarity"> <ftp:put fileName="resourceData.csv" localDir="c:/temp" remoteDir="/tmp"/> </ftp:open> </gel:script>


XOG SOAP Tag Library
Use the XML SOAP tags to invoke a SOAP-based external or internal web service such as the XOG API. These tags can store the results in GEL variables for subsequent processing.
- soap:invoke - Invoking SOAP Web Services - soap:envelope - Generating a SOAP Envelope - soap:header - Specifying the SOAP Header - soap:body - Specifying the SOAP Body - soap:attachment - Attaching Files to SOAP Requests - soap:message - Specifying SOAP XML Messages - Example: XOG Login and Read Objects - Example: Execute External Web Services with Attachments
Include the following namespace declaration in your script to use this tag library:
<gel:script xmlns:gel="jelly:com.niku.union.gel.SOAPTagLibrary">
soap:invoke - Invoking SOAP Web Services
Use this tag to invoke a web service at a specified endpoint and assign a name to the resulting XML document. You can use subsequent tags to access the tag's variables and extract data from the document. The invoke tag can contain subtags, including soap:envelope and soap:attachment.This tag has the following attributes:
- endpoint Required. Specifies either the keyword 'internal' or the URL of the web service to be invoked. Values: - 'internal'. Classic PPM endpoint URL is used automatically. - Fully qualified URL. Type: String
- var Optional. Contains the response from the web service. The response is of type org.w3c.dom.Document. Type: String
This tag has the following subtags:
- soap:message - soap:attachment Example
<soap:invoke endpoint="internal" var="result"> <soap:message>...</soap:message>
</soap:invoke>
<soap:invoke endpoint="${serviceUrl}" var="result"> <soap:message>...</soap:message>
</soap:invoke>


soap:envelope - Generating a SOAP Envelope This tag generates a SOAP envelope which can be used by soap:invoke to send a SOAP request. This tag includes the following header and body tags: - soap:header - soap:body
soap:header - Specifying the SOAP Header This tag contains the SOAP header, which should be included in a SOAP envelope. You select which data to include.

soap:body - Specifying the SOAP Body This tag controls the SOAP body (which should be included in a SOAP envelope). You can control which data to include. You can write content into this tag as illustrated in the SOAP Examples, or you can write content as an attribute of this tag as illustrated in the following example.
This tag has the following attribute:
- xml Optional. Sets the source of the soap:body. If this attribute is set, the content of the document variable, which can be set by gel:parse or ftp:get, is used as the content of this soap:body tag (and the body of this tag is ignored). If there is an XML file that you want to use as the content of SOAP body, use gel:parse to read the file and set this attribute. Type: org.w3c.dom.Document
Example This example executes an NSQL query through the XOG web service and writes the results to a tab-delimited file.
<gel:script xmlns:core="jelly:core" xmlns:xog="http://www.niku.com/xog" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:f="jelly:com.niku.union.gel.FileTagLibrary" xmlns:nikuq="http://www.niku.com/xog/Query"
<!-- Construct the Query API request for the NSQL query "xog_query_test" -->
<gel:parse var="xoginput"> <Query xmlns="http://www.niku.com/xog/Query"> <Code>cats.resourceProfile</Code> </Query>


</gel:parse>
<soap:invoke endpoint="internal" var="xogresponse"> <soap:message> <soapenv:Envelope> <soapenv:Header> <Auth> <Username>admin</Username> <Password>niku2000</Password> </Auth> </soapenv:Header> <soapenv:Body> <gel:include select="$xoginput"/> </soapenv:Body> </soapenv:Envelope> </soap:message>
</soap:invoke>
<!-- Extract the sessionID so we may logout later --> <gel:set asString="true"
select="$xogresponse//xog:SessionID/text()" var="sessionID"/> <gel:out>SessionID = ${sessionID}</gel:out>
<!-- Extract the records --> <gel:set select="$xogresponse//nikuq:QueryResult/nikuq:Records"
var="records"/>
<!-- Create a tab-delimited file from the results --> <f:writeFile fileName="projectData.txt"
delimiter="&#x9;" embedded="true"> <gel:forEach select="$records//nikuq:Record" var="xog_record">
<f:line> <gel:forEach select="$xog_record/*" var="xog_data">
<gel:set var="xog_data" select="$xog_data/text()" asString="true"/>
<f:column value="${xog_data}"/> </gel:forEach> </f:line> </gel:forEach> </f:writeFile>
<!-- Now log out --> <soap:invoke endpoint="internal" var="logout">
<soap:message> <soapenv:Envelope> <soapenv:Header> <Auth> <xog:SessionID>${sessionID}</xog:SessionID> </Auth> </soapenv:Header> <soapenv:Body> <xog:Logout/>

Clarity - 16.4.1 4523


</soapenv:Body> </soapenv:Envelope> </soap:message> </soap:invoke>
<gel:out>Output written to projectData.txt</gel:out>
</gel:script></gel:script>
soap:attachment - Attaching Files to SOAP Requests This tag specifies the file to be attached in the SOAP request. This tag has the following attributes: - dir
Required. The directory on the local disk where the attachment file is located. Type: String - fileName Required. The file to be attached with the SOAP request. Type: String Example
<soap:attachment dir="${dir} " fileName="${file}"/>
soap:message - Specifying SOAP XML Messages The tag contains the SOAP XML message, including the SOAP envelope, header, and body tags. Example
<soap:message> <obj:ReadGroup xmlns:obj="http://www.niku.com/xog/Object">
<DataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/xog_read.xsd">
<xog:Header version="7.5" externalSource="NIKU"/> <xog:Query> <xog:Filter name="code" criteria="OR"> ProjectManager,PortfolioManager,XOGTestGroup </xog:Filter> </xog:Query> </xog:DataBus>
</obj:ReadGroup> </xog:processRequest> </soap:message>
Example: XOG Login and Read Objects
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xog="http://www.niku.com/xog">
<soap:invoke endpoint="internal" var="auth"> <soap:message>

Clarity - 16.4.1 4524


<soapenv:Envelope> <soapenv:Header>
<Auth xmlns="http://www.niku.com/xog"> <Username>admin</Username> <Password>clarity</Password>
</Auth> </soapenv:Header> <soapenv:Body/> </soapenv:Envelope> </soap:message> </soap:invoke>
<soap:invoke endpoint="internal" var="result"> <soap:message> <soapenv:Envelope> <soapenv:Header> <Auth> <xog:SessionID> <gel:expr select="$auth//xog:SessionID/text()"/> </xog:SessionID> </Auth> </soapenv:Header> <soapenv:Body> <obj:ReadGroup xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/xog_read.xsd"> <Header version="7.5" externalSource="NIKU"/> <Query> <Filter name="code" criteria="OR"> ProjectManager,PortfolioManager,XOGTestGroup </Filter> </Query> </NikuDataBus> </obj:ReadGroup> </soapenv:Body> </soapenv:Envelope> </soap:message>
</soap:invoke>
<soap:invoke endpoint="internal" var="auth"> <soap:message> <soapenv:Envelope> <soapenv:Header> <Auth> <xog:SessionID> <gel:expr select="$auth//xog:SessionID/text()"/> </xog:SessionID> </Auth> </soapenv:Header> <soapenv:Body> <xog:Logout/>

Clarity - 16.4.1 4525


</soapenv:Body> </soapenv:Envelope> </soap:message> </soap:invoke>
</gel:script>


Example: Execute External Web Services with Attachments The following example places the XOG output as an XML document in the variable result. This example uses a hypothetical external web service "UploadFile."
<gel:script xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary" xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/"
> <soap:invoke endpoint="${serviceUrl}" var="result">
<soap:message> <soap-env:Envelope> <soap-env:Header> AuthId>${authId}</AuthId> <Locale>en_US</Locale> </soap-env:Header> <soap-env:Body> <UploadFile xmlns="xxx"> <NewFile> <Name>/${file}</Name> <ReplaceExisting>true</ReplaceExisting> </NewFile> </UploadFile> </soap-env:Body> </soap-env:Envelope>
</soap:message> <soap:attachment dir="${dir}" fileName="${file}"/> </soap:invoke>
<gel:out>Out: <gel:expr select="$result"/></gel:out> </gel:script>

XOG SQL Tag Library (On-Premise Only)
The Jakarta Jelly project provides a set of SQL tags that you can use to query or update the database. For example, you can use JDBC datasources.
Drivers are included for Oracle and MSSQL databases. To use other databases, install the appropriate driver on the Classic PPM server and place the driver libraries in the server class path. Then include the following namespace declaration in your script to use this tag library:
<gel:script xmlns:sql="jelly:sql">
NOTE SQL Tag is deprecated.
- sql:setDataSource - Setting Data Sources - sql:update - Updating Tables - sql:query - Querying Tables - Example: JDBC - Examples: Execute Stored Procedure


sql:setDataSource - Setting Data Sources This tag allows you to set the data source. You can provide a JNDI name or DriverManager parameters. To access a database, use the gel:setDataSource tag. See the following examples. Example 1
<sql:setDataSource dataSource="jdbc/BookDB" />
Example 2 Make sure that your CLASSPATH contains the Classic PPM database drivers (c-base.jar, c-clarity.jar, c-oracle.jar, cspy.jar, c-sqlserver.jar, c-util.jar). These can simply be placed into the JAVA_HOME/jre/lib/ext directory of the Java SDK being used to execute GEL from the command line.
<gel:scriptxmlns:core="jelly:core" xmlns:sql="jelly:sql" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <sql:setDataSource url="jdbc:clarity:oracle://localhost:1521;SID=niku" driver="com.ca.clarity.jdbc.oracle.OracleDriver" user="niku" password="niku"/> <sql:query var="test"> SELECT 1 FROM DUAL </sql:query> </gel:script>
sql:update - Updating Tables This tag allows you to update a single or multiple records in a table. Example This example shows an update of a custom Classic PPM object called "myobj". Notice the use of the "?" characters in the update query. These characters are placeholders for the bind variables. The included <sql:param> tags provide the values that are substituted when the SQL update is executed. Using SQL parameters help the database server cache the SQL queries and also protect the GEL code from any special characters that are contained by the bind variables.
<gel:scriptxmlns:core="jelly:core" xmlns:sql="jelly:sql" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <sql:setDataSource url="jdbc:clarity:oracle://localhost:1521;SID=niku" driver="com.ca.clarity.jdbc.oracle.OracleDriver" user="niku" password="niku"/> <sql:update> UPDATE ODF_CA_MYOBJ SET my_custom_attribute=? WHERE CODE=? <sql:param value="red"/> <sql:param value="MYOBJ001"/> </
sql:update> </gel:script>
sql:query - Querying Tables This tag allows you to query a table and 's the results to the specified variable. Example
<sql:query var="result"> select id, name from my_table </sql:query>
Example: JDBC The following example shows how to drop and recreate a table using a response from a SOAP web service, and then conduct a query on that table. The query result is used to construct an XML element dataset.
<gel:script


xmlns:j="jelly:core" xmlns:sql="jelly:sql" xmlns:xog="http://www.niku.com/xog" xmlns:obj="http://www.niku.com/xog/Object" xmlns:soap="jelly:com.niku.union.gel.SOAPTagLibrary" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <sql:setDataSource url="jdbc:clarity:oracle://localhost:1521;SID=niku"
driver="com.ca.clarity.jdbc.oracle.OracleDriver" user="niku" password="niku"/> <!-- verify data source before continuing --> <sql:query var="dual"> select 1 from dual </sql:query> <j:set var="clarityHost" value="common05"/> <j:set var="clarityUser" value="admin"/> <j:set var="clarityPass"
value="admin"/> <j:catch> <!-- Ignore errors in case the table already exists --> <sql:update> create table MY_GROUPS ( code
varchar(64), name varchar(255) ) </sql:update> </j:catch> <soap:invoke endpoint="http://${clarityHost}/niku/xog" var="result"> <soap:message> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xog="http://www.niku.com/xog"> <soapenv:Header> <xog:Auth> <xog:Username>${clarityUser}</xog:Username> <xog:Password>${clarityPass}</xog:Password> </xog:Auth> </soapenv:Header> <soapenv:Body> <obj:ReadGroup xmlns:obj="http://www.niku.com/xog/Object"> <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../xsd/xog_read.xsd"> <Header version="8.0" externalSource="NIKU"/> </NikuDataBus> </obj:ReadGroup> </soapenv:Body> </soapenv:Envelope> </soap:message> </soap:invoke> <!-- Clear out any existing groups and insert --> <sql:update> delete from MY_GROUPS </sql:update> <gel:forEach select="$result//obj:group" var="group"> <gel:set select="$group/@code" asString="true" var="code"/> <gel:set select="$group/obj:nls[@languageCode='en']/@name" asString="true" var="name"/> <sql:update> insert into MY_GROUPS(code, name) values (?, ?) <sql:param value="${code}"/> <sql:param value="${name}"/> </sql:update> </gel:forEach> <sql:query var="results"> select code, name from MY_GROUPS


</sql:query> <dataSet> <j:forEach trim="false" items="${results.rowsByIndex}" var="row"> <row> <j:forEach var="columnName" items="${results.columnNames}" indexVar="i"> <field column="${columnName}">${row[i]}</field> </j:forEach> </row> </j:forEach> </dataSet> </gel:script> </gel:script>


Examples: Execute Stored Procedure The following example shows the syntax for executing a stored procedure using GEL script.
Example 1: MS SQL Server For MS SQL Server, use the following syntax, where prior is a parameter.
<gel:script xmlns:core="jelly:core" xmlns:sql="jelly:sql" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <sql:setDataSource url="jdbc:clarity:oracle://localhost:1521;SID=niku" driver="com.ca.clarity.jdbc.oracle.OracleDriver" user="niku" password="niku"/> <sql:update> EXEC Z_MY_CUSTOM_SP ? <sql:param value="prior"/> </sql:update> </gel:script> Example 2: Oracle Database Server For Oracle Database Server, use the following syntax. References within the parentheses are parameters. <gel:script xmlns:core="jelly:core" xmlns:sql="jelly:sql" xmlns:gel="jelly:com.niku.union.gel.GELTagLibrary"> <sql:setDataSource url="jdbc:clarity:oracle://localhost:1521;SID=niku" driver="com.ca.clarity.jdbc.oracle.OracleDriver" user="niku" password="niku"/> <sql:update> CALL Z_MY_CUSTOM_SP(?) <sql:param value="prior"/> </sql:update> </gel:script>


XOG Utility Tag Library (On-Premise Only)
Utility tags provide useful miscellaneous functionality.
NOTE Utility Tag is deprecated.
- util:available - Testing for the Existence of a File - util:file - Create a java.io.File from a Given Name - util:unloadText - Load the Contents of a File into a Variable - util:properties - Load a Properties File into a Properties Object - util:replace - Replace Instances of a Character or String - util:sleep - Sleep for a Given Number of Milliseconds


util:available - Testing for the Existence of a File You can use this tag to test for the existence of a file on the file system. It will evaluate the body if the given file is available. The util:available tag has the following attributes: - file Optional. The file to be read. A file object can be generated automatically if the file name and path are provided. An InputStream is obtained using the ftp:get tag. If this attribute is not set, the tag's content is used. Type: java.io.File - uri Sets the URI to use to test for availability. The URI can be a full file-based URL, a relative URI, or an absolute URI from the root context. Type: String Example
<gel:scriptxmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:util="jelly:util"> <util:available uri="file:///temp/resourceData.csv"> <gel:out>File exists!</gel:out> </util:available> </gel:script>
util:file - Create a java.io.File from a Given Name You can use this tag to create a java.io.File from a given name. The util:file tag has the following attributes: - name Required. The name of the file to create. Type: String - var The name of the variable to contain the file. Type: java.io.File Example
<gel:scriptxmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:core="jelly:core" xmlns:util="jelly:util"> <util:file name="c:/temp/newfile.txt" var="myfile"> </gel:script>


util:unloadText - Load the Contents of a File into a Variable You can use this tag to load the contents of a file (without parsing) into a variable. The util:loadText tag has the following attributes: - file Optional. The java.io.File to load text from. Type: java.io.File - uri Optional. The URI to be parsed as text. This can be an absolute URL or a relative or absolute URI from this Jelly script or the root context. Type: String - encoding Optional. The encoding scheme to use when loading the file. Type: String - var The name of the variable to contain the file. Type: String Example 1: Loading from a java.io.File
<gel:scriptxmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:util="jelly:util"> <!-- create a java.io.File from the existing file --> <util:file name="c:/temp/resourceData.csv" var="myfile"/> <!-- load this files content into a variable --> <util:loadText file="${myfile}" var="mytext"/> <gel:out>${mytext}</
gel:out> </gel:script>
Example 2: Loading from a URI
<gel:scriptxmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:util="jelly:util"> <!-- load this files content into a variable --> <util:loadText uri="file:///temp/resourceData.csv" var="mytext"/>
<gel:out>${mytext}</gel:out> </gel:script>
util:properties - Load a Properties File into a Properties Object You can use this tag to load the contents of a properties file into a java Properties object variable. The util:properties tag has the following attributes: - file Optional. The java.io.File to load the properties from. Type: java.io.File - uri Optional. The URI to be parsed as text. This can be an absolute URL or a relative or absolute URI from this Jelly script or the root context. Type: String - var

The name of the variable to contain the Properties object. Type: String Example: Loading a XOG Properties File
<gel:scriptxmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:util="jelly:util"> <!-- load this files content into a variable --> <util:properties uri="file:///xog/bin/test.properties" var="xogproperties"/> <!-- Print out the "servername" property --> <gel:out>${xogproperties.getProperty("servername")}</gel:out> </
gel:script>
util:replace - Replace Instances of a Character or String You can use this tag to replace instances of a character or string in its body or value and place the result into the context. The util:replace tag has the following attributes: - new Optional. Sets the new String. Type: String - newChar Optional. Sets the new Character. Type: String - old Optional. Sets the old String. Type: String - oldChar Optional. Sets the old Character. Type: String - value Optional. Sets the value to operate on. Type: org.apache.commons.jelly.expression.Expression - var Optional. Sets the var. Type: String Example: Replacing the string ",admin" with the string ",newadmin" in a CSV File
<gel:scriptxmlns:gel="jelly:com.niku.union.gel.GELTagLibrary" xmlns:util="jelly:util"> <!-- load this files content into a variable --> <util:loadText uri="file:///temp/resourceData.csv" var="mytext"/> <util:replace new=",newadmin" old=",admin" value="${mytext}" var="newtext"/> <gel:out>${mytext}</gel:out> <gel:out>
${newtext}</gel:out> </gel:script>
util:sleep - Sleep for a Given Number of Milliseconds You can use this tag to cause a script to sleep for a given amount of time. For example, this tag might be helpful in a case where a script is polling a remote site for the presence of an FTP file. The script might retry a number of times if the file does not yet exist and sleep between attempts.


The util:sleep tag has the following attributes: - millis Required. Number of milliseconds to sleep. Type: String Example - Sleeping for 30 Seconds
<gel:scriptxmlns:util="jelly:util"> <util:sleep millis="30000"/> </gel:script>


Clarity Glossary
The Classic PPM glossary contains an alphabetical list of common abbreviations, terms, and definitions.

access right An access right determines the object instances that users can access and the actions they can take on them. Action examples include viewing, editing, and approving. You can assign access rights to the following objects: - An individual resource - A group - Members of an OBS unit for an object instance. You can also assign rights for all instances in an OBS unit or all
instances at a global level.
actuals The term actuals refers to the reported time spent, cost incurred, or revenue that is generated on an investment. In contrast, before teams can record actuals, their times, costs, and revenues are estimated, budgeted, planned, or forecasted.
actuals (TSV) Per-Period TSV Actual Units aggregated from assignments for a resource.
actuals through (act thru) The last date through which actuals have been captured on the task for a resource. If you are using timesheets for posting actuals, then it is the last date of the latest timesheet reporting period. If you are using manual transactions for posting actuals, then it is the last or greatest date of the transaction posted into WIP and imported into the project.
adjustment An adjustment is a correction that you make for a timesheet or a manual financial transaction through the WIP adjustment process. You can adjust transactions that were inadvertently charged to the incorrect project. When a user selects an incorrect cost code for a transaction, you can apply an adjustment. Apply this type of corrective action before the billing cycle procedures begin. After it has been approved, an adjustment becomes available for billing.
agent proxy server HTTP WEB Server used with the SSO Agent.
allocation Per-Period TSV Planned or Soft Allocation.


Allocation to Actuals Variance Represents the difference between planned allocation and actual effort. Allocation to Actuals Variance = Allocation - Actuals
Allocation to Actuals Variance % Shows the percentage variance between allocated and actual effort to assess proportional deviations in work execution. Allocation to Actuals Variance % = Allocation to Actuals Variance / Allocation.
apache mod_proxy Apache HTTP Server Proxy Module is used to configure Apache as a proxy server.
as-of date An as-of date is a reference date that separates actual data from future data. This date is the key date for Earned Value Analysis (EVA).
attribute An attribute is information that is associated with an object. The attribute information for an object appears in fields on one or more pages.
autoschedule The autoschedule feature is an Open Workbench capability that allows you to schedule a project automatically. Automatic scheduling is subject to dependency relationships, task priorities, and optional resource availability constraints. Autoscheduling with resource constraints is similar to Resource Leveling in Microsoft Project.
availability Availability is the total amount of time a resource is available for booking. The availability rate is determined by the configuration of the resource's calendar. Availability defines the number of hours that a resource is available or is expected to work in one business day. Default: Eight (8) hours Calculation:
Weekly Availability = (Availability) x (Number of business days per week in the assigned resource calendar)
For example, the Availability value for a resource is set to 8. The number of business days per week in the assigned resource calendar is set to 5. The weekly availability for the resource is 40 hours.
Weekly Availability = 8 x 5 = 40 hours per week
back loading pattern Back loading pattern is an assignment loading pattern. This pattern schedules a resource as late as possible in the process of completing a task.
base calendar A base calendar is the calendar from which another calendar receives its default values.

baseline A baseline is a snapshot of a project. Baselines help you monitor changes to the total effort and costs. The term also applies to snapshots of data in roadmap scenarios.
blueprint A blueprint is a configuration layout for displaying relevant data on projects created from different templates.
booking A booking occurs when a manager assigns a resource to a project for a specified duration. The status values of all resource bookings are hard (committed), soft (planned), or mixed (a variation of soft and hard). Roles are booked as a requirement for the work, and the manager fills out the role request with a named resource or team. - Hard-booked staff represents named resources with a hard booking status. The hard allocations are the same as the
planned allocations. - Soft-booked staff represents named resources with a soft or mixed booking status. The soft-booked staff has only
planned allocations and no hard allocations. A team member is mixed-booked when the planned allocation and hard allocation are not equal. Mixed booking status is often the result of changes in the planned allocation of a resource.
NOTE To use mixed bookings, enable the Allow Mixed Booking option in the Settings under Project Management in the Administration menu. The Allow Mixed Bookings option helps to manage the planned allocation and hard allocation separately.
budget remaining The remaining budget for a project.
Budget Remaining = Total Budget - Total Budget Spent
budget remaining percent The remaining budget for a project is expressed as a percentage.
Budget Remaining Percent = 100 * (Remaining Cost - Budgeted Cost)
If the budget cost total is zero or null, the value for the budget remaining percent is zero. If the actual cost is greater than the budget cost total, the value for the remaining budget percent is negative.
business day A business day is also named a workday. A non-working day is considered a holiday.
calendar A calendar is a set of dates that stores working and nonworking days. The application includes default calendars. You can create new calendars, including custom resource calendars.
capacity The capacity for a resource is computed based on the resource's calendar settings and daily availability rate. It represents the total amount of time that the resource is available to the organization. The total capacity for all resources is also known as aggregated availability. The capacity for an organizational unit is the total amount of collective time for all resources in that unit. Capacity also measures the number of resources that are available to accommodate the demand in an investment or portfolio.

You can define resource OBS hierarchies to model staffing needs and to represent reporting relationships, geographies, or business units. Resource OBS hierarchies filter capacity results in portlets. Capacity includes named resources that belong to an OBS or descendant OBS and does not include roles. For example, a resource with a contract to work 40 hours each week has 40 hours of capacity. A team of three similar resources has 120 hours of capacity for any given week. Typically, resource capacity does not include the resource manager. Total capacity for a manager or OBS unit includes the capacity of all directs and their staff in the hierarchy. Remaining Capacity is the total amount of time that an organization has available to work on projects. Any remaining capacity has not already been booked or requested of that OBS unit. Remaining capacity is the difference between capacity and demand as follows:
Remaining Capacity = Capacity - Demand
For example, the total demand for three full-time resources in an organization for next week is 105 hours: - 60 hours represent hard-booked staff - 10 hours represent soft-booked staff - 35 hours represent an unfulfilled role The organization has 15 hours of available capacity for next week.
Remaining Capacity = (120 - 105) = 15
capacity (roadmap item) The term Capacity refers to the planned roadmap item capacity in terms of headcount.
Remaining Capacity = Capacity - Actual
capacity planning Capacity Planning is the practice of evaluating resources, demand, and performance to improve utilization for maximum productivity. Capacity planning includes the following processes: - Establishing utilization targets for resources according to role or skill. - Continuously analyzing project metrics to adjust utilization targets, resource assignments, and project goals to
maximize productivity. - Finalizing a release roadmap that maximizes resource utilization.
category (notes) A category helps you organize items such as notes, ideas, reports, or jobs. For example, when writing a note, you can classify the note by category. Categories are useful when filtering to find related values sharing the same category.
charge code A charge code is used to classify planned or actual costs. Typical charge code values are capital and expense. These values indicate whether the costs are capitalized or expensed.
contour loading pattern A contour loading pattern is an assignment loading pattern. A resource completes a task at a rate that varies with resource availability. For example, a developer is available three hours on Monday and four hours on Tuesday. The developer is assigned to the task for three hours on Monday and four hours on Tuesday. The autoscheduling process of the project scheduling tool can apply this loading pattern.


cost code A cost code represents the services, tasks, activities, or third-party expenses for a project.


critical path
A critical path is a set of important tasks in the project. The delay or expansion of a critical path lengthens the project or causes the project deadlines to slip. The critical path determines the earliest finish date of the project and does not take resource constraints into account.

critical path method
The critical path method (CPM) is a project scheduling option that calculates project duration. The critical path of a project is the longest path or duration for the completion of a set of tasks. The project scheduling tool uses the critical path value to determine the tasks that drive the project deadlines and constraints.

data provider
A data provider is the source of data for a portlet as defined in Studio. Data providers can be objects, queries, or system providers. If you use queries to provide data, use NSQL to define them. The data model supports most of the business objects you need. You can create constructs to meet unique business goals.

date range A date range is a span of time between start and finish dates.

days remaining The number of days remaining until the project finish date. The value is calculated as the Finish date - current date.

days to start
The number of days till the start of a project. Assuming that the Start date is later than the current date, the value is calculated as project Start date - current date.

default
A default value is the value that is entered in a field by the system when you create a record. Typically, you can change this value. In some cases, you can reset the field to restore the default value.

deliverable
A deliverable is a measurable result or work product of a task. Examples include reports, documents, units of code, and prototypes.

demand
Demand is the total amount of time that is requested and planned for resources or roles to complete tasks. Demand is based on the planned allocation values for team members who are allocated to investment. Demand includes allocations for both named staff and requested roles from an organizational unit. Role allocations for investments address what is known as unfilled demand.
Demand is made up of hard-booked time and soft-booked time. You can use the Team Staff OBS unit to qualify demand when filtering by OBS. If the Team Staff OBS is blank, demand calculations refer to the Resource OBS.
For example, John, Susan, and Bill are on a team.
- John has been hard-booked to project A for 20 hours next week and soft-booked to project B for 10 hours next week. The total demand for John for next week is 30 hours.
- Susan has been hard-booked 40 hours next week only to project A. The total demand for Bill for next week is 40 hours. - Bill has not been allocated to any project. The demand for Bill is 0 hours. - A role has been designated and hard-booked to project A at 35 hours for next week. In the properties of the role for
that project, the team is designated as the Staff OBS unit. The demand for the role on that team for next week is 35 hours. The total demand for the resources on that team for the next week is 105 hours: - 60 hours represent hard-booked staff - 10 hours represent soft-booked staff - 35 hours represent the unfulfilled role. This example also illustrates that the organization has 15 hours of available or remaining capacity for next week. That available capacity can be used to address more demand.
dependency type A dependency type is a type of constraint that is placed on the start or finish date of the detailed task or milestone. The product supports the following dependency types: - + Finish-Start The successor task cannot finish until its predecessor has started. - + Finish-Finish The successor task cannot finish until its predecessor is finished. - + Start-Start The successor task cannot start until its predecessor has started. - + Start-Finish The successor task cannot start until its predecessor is finished.
dimension A dimension is a related data element in a query. For example, project-related data such as project ID, name, and start date is considered a single dimension. If a query contains project and resource data, it contains two dimensions.
duration A duration is the length of time, in business days, that a task requires from conception to completion, including the start and finish dates.
edit mode The term edit mode applies to the state in which user keystrokes, such as entering or deleting text, affect the contents of cells. Edit mode is different from navigation mode.
effort remaining The remaining effort for a project is calculated as Remaining Units/Budgeted Units.
effort remaining percent The remaining effort for a project is expressed as a percentage. The value is calculated as follows: 100 * (EAC - Actual)/EAC If the value for EAC is zero or null, the Effort Remaining Percent value is zero. If the value for Actual is greater than EAC, the Effort Remaining Percent value is negative.

entity An entity is an organizational unit that has its own set of locations and departments. An entity is associated with only one Department OBS and Location OBS that establishes its financial boundary. You can create financial plans and can establish costs for investments after you define an entity. An entity has a currency defined for financial planning and transaction processing purposes.
equipment Equipment represents a type of resource or role that is associated with physical assets. Examples include machinery, delivery trucks, printers, and computers.
estimate-at-completion (EAC) Estimate-at-completion (EAC) is the expected total hours for a task, phase, or project based on the performance to date.
EAC = Actuals + ETC
estimate-to-complete (ETC) Estimate-to-complete (ETC) is the estimated time that is required for a resource to complete a task assignment. ETC is used for project planning and revenue recognition. The ETC value reduces when you post actual hours.
ETC TSV Per-Period TSV Estimate Units aggregated from assignments for the team member.
expense An expense is a type of resource or role that represents a required cost for completing a project. Examples of expenses include permits, training, or travel to a customer site.
federated identity SSO Federated identity single sign-on (SSO) is a user authentication architecture that trusts a single user authentication assertion or token across multiple IT systems, networks, or organizations.
financial attribute A financial attribute is a property that is used for grouping cost plan data or to drive costs and revenues using the rate matrix. Examples of financial attributes include department, location, charge code, WIP class, resource, role, input type code, and transaction class.
financial organization structure (FOS) The financial organization structure (FOS) is the segment of the OBS that relates to project accounting. FOS creates the relationship between entities, locations, and departments.
financial plan A financial plan is a management tool that allows you to estimate the funding for your investments using cost plans. You can get approval for the funding using budget plans.
financial plan grouping attribute A grouping attribute is any one of several financial attributes that can be used to organize cost plan detail records.

financially-enabled The term financially-enabled indicates that a resource or role has financial properties. The activation of financial properties enables cost plans, transactions, and the application of costs and rates from the rate matrix.
finish date A finish date is the current planned, budgeted, or actual date when a task or project ends.
fixed duration A fixed duration task is constant. Resource assignments do not determine their length. A fixed-duration task is also named a time-constrained task.
float The term float represents the time when the initiation or completion of a task can be delayed without adversely affecting the project finish date. The calculation for the float in a scheduled task is Late Start - Early Start and is expressed in days or hours.
forecast (calculated) Forecast is a future amount that is planned or budgeted. In financial plans or reports, the forecast amount is calculated as the Actual Cost to-date plus the Remaining planned or budgeted amount. Some portlets or reports allow you to specify a 'Forecast As Of Date' filter to view past or future forecast amounts.
forecast variance Forecast variance is defined as the difference between the planned cost and forecast. Here is the formula for Forecast Variance:
Forecast Variance = Planned Cost - Forecast
%forecast variance %Forecast Variance for a fiscal period is defined as the variance for the fiscal period/ Planned or Budgeted Cost for the same period multiplied by 100.
%Forecast Variance = (Planned Cost - Forecast)*100
front loading pattern A front loading pattern is the rate at which a resource is used to complete a task. In this case, the resource is scheduled to work on the task as soon as possible.
full-time equivalent (FTE) Full-time equivalent (FTE) is a method for normalizing data for full and part-time resources and is calculated based on the standard calendar. It uses the Standard Calendar so that you can compare FTE across all resources in the system. For example, the capacity of a part-time resource is counted as 0.5 FTE. The following formula is used to calculate the allocation value in FTE: (available hours for a resource to work on an investment based on the resource calendar)/(available hours for a resource based on the standard base calendar).

Example: Resource A is 50 percent allocated to a project. A is working 20 days for November 2017 with 7 hours/ day availability based on the resource calendar. In the standard calendar, there are 20 working days and 8 hours/day availability for all resources. Using the formula, the allocation FTE for resource A is approximately 0.44, which is 70 hours (50% * 7 hours/day * 20 days) divided by 160 hours(8 hours/day* 20 days).
gantt chart A Gantt chart is a common scheduling tool graph with a timeline on the horizontal or x-axis. This chart displays the status of multiple tasks. The duration of each task appears as a horizontal bar in the Gantt chart. The ends of the bar correspond to the start and finish dates of the tasks.
group A group is a collection of resources that require the same set of access rights. A group can also refer to a logical grouping of steps in a process.
guideline A guideline refers to any instructions that advise a resource and explain how to perform a project task. Guidelines include general statements about a policy.
guidelines The Guidelines field is an attribute defined in the Task object.
NOTE Some of the key points to remember while using the Guidelines field are: - If the Guidelines field has a URL specified, it will use that URL from the Task Properties page [Guideline] link
or the Tasks Grid from the Guidelines field placed on the grid in the Classic PPM. - In Classic PPM, the Guidelines field in the Task object is defined as a String and allows up to 254 characters
(shorter than the allowable length of the Project Management Settings entry). Therefore, it is possible to set the value to a NON-URL value. - If you add the Guidelines field to the Task Grid in Clarity, it will NOT act like a hyperlink even though the string value is a URL value because Clarity checks for the field's data type from the API metadata. - In Clarity, the Guidelines field is also available in Tasks of Custom Investments, and it behaves the same as in Clarity projects.
holiday A holiday can be defined as a non-working day in either a base calendar or a resource calendar.
hard allocation Specifies that a resource is committed to a project.
hard allocation (TSV) Per-Period TSV for hard allocations.
idea An idea is the initial stage for creating new opportunities for investment.

IdP federation server Identity provider is also known as Identity Assertion Provider. A security domain (Customer Side) for the IdP Server, where the user has an account and authentication will occur.
impact date An Impact date is a future date by which repercussions from a Risk or Issue could affect the investment if it is not mitigated.
incident An incident is an unscheduled event that is not part of the standard operation of a service. An incident can interrupt or reduce the quality of service.
indirect entry An indirect entry is a time entry on a timesheet that is not directly related to a project. Examples of indirect entries include taking vacation time or participating in a mandatory training class.
instance An instance is a particular application service with its own data store. Most CA SaaS application services are available to customers in production and non-production environment. For example, Classic PPM can be configured for customers with separate production, development, and test instances.
investment An investment is a project, program, asset, or product that corporations fund to help achieve their business goals. A portfolio inventory consists of investments.
Staffing Workspace Blueprint - Investments tab Provides a timeline view of various investments (Projects, Ideas, Custom Investments, and Teams) to which the user has access. It explicitly does not provide detailed Investment Allocation data. It's about the investments themselves.
Project, Idea, CIT Blueprint - Staff module, Details Flyout - Investments subtab Shows a list of Investment Allocations for a specific staff member who is allocated to that particular project/investment. It focuses on the allocations of an individual staff member from the context of a specific project.
JSP Java Server Pages, programming script based on Java programming language.
key task A key task indicates an important task in the work breakdown structure (WBS).
labor Labor represents a type of resource or role that is associated with human capital. Labor includes people with different titles, experiences, and skills who work on projects.

lag The term lag represents the amount of time between two dependent tasks. For example, you want Task B to start three days after Task A ends. Make the relationship Finish-Start and enter 3 as the lag. Alternatively, you can enter a negative number to indicate a negative lag. If you want Task B to start two days before Task A ends, enter -2 as the lag. You can also specify a lag or a negative lag as a percentage of the task duration.
late finish date The late finish date is the latest date when a task can be completed without adversely affecting the critical path of a project.
LDAP LDAP is an abbreviation for Lightweight Directory Access Protocol. LDAP is a directory server for global resource attributes, certificates, and passwords.
level of analysis A level of analysis controls the level of consolidation of project data in a view before applying filter and sort criteria.
loading pattern A loading pattern is the utilization model that arranges resources to complete project tasks. The product supports the following loading patterns: - Back - Contour - Fixed - Front - Uniform
lookup A lookup is a data relationship often visible to users as a drop-down list or a browse list that filters portlet data. A lookup uses a key value in one table to show related information from a second table. For example, you have a list of investments. Each record in the investments table includes a sponsor ID that indicates who owns the investment. When presenting a list of investments, you want to display the sponsor by name and not ID. The sponsor name is in the sponsors table. You are presenting data from the investments table. You create a lookup. The lookup takes the sponsor ID value in the investment record and returns the sponsor name.
master project A master project is the top-level or parent project of one or more child subprojects in a hierarchy.
material Material represents a type of resource or role that is associated with inventory or parts. Examples include training guides, fabrics, chemicals, or fuel.
menu A menu is a navigational element of the user interface that provides links to other product pages.

message area The message area is the portion of a page in a software application that shows messages to a user. Examples include descriptions for selected objects, commands, available keys, and error messages
metric A metric is a measurable value in a data set, such as booked hours, capacity, or a number of tasks.
metric (roadmap item) A numeric or monetary value is represented by an icon or badge for a roadmap item in the timeline layout. Use any attribute on the Roadmap Item object with the following data types to display as a metric: number, the number shown as percent, money, calculated with the result data type of number, and formula.
milestone A milestone is a reference point for measuring the progress of a project. A milestone is a task that has no duration; its start date and finish date are the same.
module A module is any component in the product that can be accessed using the main menu.
multi-tenancy A software architecture principle where a single instance of a computing resource serves multiple client organizations (the tenants), providing a separate environment for each. How cloud multi-tenancy is enabled depends on the service model. In the case of IaaS, multi-tenancy of the infrastructure is enabled by the virtualization of the infrastructure resources. For PaaS, multi-tenancy of a platform is enabled by the platform software providing separate environments for its user organizations. In this sense, a multi-user operating system can be regarded as multi-tenant by definition. For SaaS, the multi-tenancy of a software application depends on the application being designed to partition its configuration and data for the client organizations. Most applications today are still designed for a single tenant and cannot be changed to multitenant operation without significant architectural modifications.
navigation mode Navigation mode is a state in which keystrokes affect table cells, columns, and rows rather than their contents. For example, you select multiple cells in navigation mode. You edit the value for a cell in edit mode.
net present value (NPV) Net present value is a measure of the current value of an investment given its future revenues and costs.
NPIO Non-project investment object. Certain functionality for projects is different from other types of investments. NPIOs include applications, assets, products, services, and other work. To the extent they can be funded, NPIOs can also include programs, ideas, and custom subobjects of other NPIOs.
NSQL NSQL is an extension of the SQL language. As a Studio developer, use NSQL to define and execute queries in the Classic PPM database.

object An object defines the fields (attributes), links, and page layouts that make up the product pages. Resources, projects, documents, companies, and ideas are all examples of objects.
object action An object action is an action for an object that you can perform by clicking a link in a menu. Classic PPM provides system object actions such as New Project, Create Baseline, and Add Subproject. You can create custom object actions and place them in a menu.
object definition framework (ODF) The Object Definition Framework is the internal component of the platform that manages the definitions of objects such as projects, tasks, and other data structures. It provides the foundation for creating, customizing, and configuring these objects, including their attributes, relationships, and behaviors. ODF ensures consistency in how objects are structured and extended across the system and may also appear in error codes or logs when object definition issues occur.
object instance An object instance is a unique item of an object. For example, the Wireless Network project is an instance of the project object and Inga Swenson is an instance of the resource object.
organizational breakdown structure (OBS) An OBS is a hierarchical structure that controls security, drives reporting, and organizes resources and other objects. The OBS often represents the organizational structure of an enterprise.
OBS level An OBS level represents the depth of the OBS hierarchy.
OBS unit An OBS unit is the basic building block in an OBS hierarchy.
OData(Open Data protocol) OData is an ISO/IEC/OASIS standard for building and consuming RESTful APIs. OData helps you focus on business logic while building RESTful APIs without worrying about the various approaches to define request and response headers, status codes, HTTP methods, URL conventions, media types, payload formats, or query options. OData also provides guidance for tracking changes, defining functions/actions for reusable procedures, and sending asynchronous/batch requests. The OData metadata, a machine-readable description of the data model of the APIs, enables the creation of powerful generic client proxies and tools.
overallocation Overallocation occurs when a resource is booked or allocated more project hours than the hours the resource is available to work.
partition A partition is a local configuration of Classic PPM that can have its own forms, attributes, processes, branding, and security rules. Partitions are often used in a hierarchical structure or partition model to control how objects are managed and appear. Partitions enable enterprise deployment of standards, processes, and policies. These standards and policies can apply at the local, regional, business, or industry levels.

percent of completion Percent of completion is a method of revenue recognition. Revenue on certain types of projects, primarily long-term and retainer contracts, is calculated on a percentage of completion basis.
personal calendar A personal calendar is a calendar for a specific user. The calendar is a consolidation of the project events of all the users and any additional personal events.
phase A phase is the top-level default value for Project-Phase-Activity-Task. Levels can be changed and added as required to match WBS conventions.
picklist A picklist is a new static lookup field added to an object through Clarity without asking the administrator to create it in Studio. It is only visible in Clarity and available where the workspace has a generic Board layout to allow the user to Manage Picklists. For sub-objects that have a picklist, like Tasks and Roadmap Items, are 'local' to a specific investment or Roadmap and are not shared with other instances.
portfolio A portfolio is an inventory of investments that determines where to invest funds or when to delay or cancel investments. Scorecards and scenarios are used to evaluate the financial health of investments in portfolios and their alignment to corporate goals.
portlet A portlet is a snapshot into the product data and is a window pane of information. A portlet can be a chart, table, or web page snippet.
portlet page A portlet page is an application page with content comprised of portlets or views. A portlet page can be configured to have one or more tabs.
posting Posting is the process of committing actual time data (actuals) on approved timesheets from a specified time period.
power filter A power filter is advanced filtering based on the user-defined criteria.
predecessor A predecessor is a task that precedes another (successor) task. A predecessor is related to a successor by a dependency type link.
primary role A primary role is the role that a resource performs most often. Primary roles are used in project planning.

process A process is a series of steps that are used to automate a workflow. Each step in a process performs a single action that is intended to move the process to completion. Processes can route actions items and notifications to users when it is their turn to complete a request.
program A program (initiative) is a top-level project that is the parent project to child projects. Unlike a master project, a program shows actuals and effort for all of the projects it contains.
project A project is a set of related tasks that are designed to achieve a specific objective. A project is composed of tasks, staff who complete the tasks, financials, collaboration, document sharing, and so forth.
project calendar A project calendar is a calendar for members of a project group. A project calendar is accessible to all project members to create and collaborate on events.
project links Project links include links to external systems, sites, or locations that the team members use as they work on the project.
project management Project management is a body of knowledge dealing with the planning and control of projects. A set of principles, techniques, and tools are used to manage projects.
project plan A project plan contains basic information about projects, such as start and finish dates. Third-party scheduler products (for example, Microsoft Project and Open Workbench) can be used to create tasks and assignments in a project plan.
query A query is a set of conditions to retrieve specific information from a database.
rate matrix A rate matrix is a user-configurable engine that uses financial attributes to return the planned and actual costs and rates for a given period.
remaining allocation The remaining allocation is the effort remaining on the investment shown in the effort unit of measures such as Hours or FTE.
Remaining Allocation = Allocation - Total Usage
remaining availability The remaining availability is the Resource Availability minus the resource's aggregated allocations across investments. Negative values indicate over-allocation..

Remaining Availability = Availability - Aggregated Allocations
remaining cost The remaining cost is the amount of budgeted funds available to cover the remaining expenses for the project.
Remaining Cost = Budget Cost Total - Actual Cost
remaining work Remaining work is the future work for a resource on an investment. This term is also known as estimate-to-complete (ETC).
resource A resource is a person or an object, such as equipment, that is used to fill a project role or perform a work task. Resources and roles are categorized into labor and non-labor types. Non-labor resources and roles include equipment, material, and expense. Labor resources have a primary role and belong to one or more OBS units or an optional resource pool. Labor resources and roles can have financial properties. Resource profiles include the following properties: - resource name - contact information - employment type - manager - available hours per day
resource allocation amount Allocation amount is the total number of working days between and including the project start and finish dates multiplied by the number of hours the resource is available to work each day.
Resource allocation amount = (Availability) x (resource workdays in the investment time period)
The number of working days for an individual resource is based on the resource calendar. All days that a resource is available during an investment time period are counted, including the start and finish dates. Clarity represents allocation amount in hours or FTE. Classic PPM represents allocation amount in hours, days, or FTE.
resource calendar A resource calendar is a calendar that defines the availability of a resource, including non-working days, holidays, weekends, and resource shifts. A resource calendar drives resource allocation and availability for resource staffing.
resource management Resource Management is the practice of assigning the appropriate resources to projects and tasks. Resource Management includes the following processes: - Resource and role administration - Resource planning and allocations - Resource and role assignments - Capacity planning
resource requisition A requisition is a formal request for one or more resources.

resource task assignment When a resource is assigned to a task, the task becomes an assignment. A task can contain multiple assignments.
resource usage Resource usage is a term with variable definitions ranging from general project management concepts to specific instances in the context of assignments, teams, tasks, and projects. In simple terms, resource usage is the amount of one or more resources that were used or that will be used. All of the following examples are valid expressions of resource usage: - Hours an employee worked. - Number of employees that worked. For example, 20 assignments from a resource pool of 100 indicates low usage. - Portion of a fleet of cars that are driven. - Amount spent on resources relative to a planned or budgeted amount. - Specific named resource allocations relative to unstaffed role allocations. - Resource utilization and demand relative to capacity. (For example, due to high demand or poor planning, our resource
usage for project A is 98% and still trending up.) Other common examples: - Assignment, task, team, and project usage values appear in the PRJ_BLB_SLICEREQUESTS table. - The Percent Expended field displays the percentage of resource usage expended on a project. - The Baseline field displays a usage value that combines to-date actuals plus remaining ETC to get Total Effort.
return on investment (ROI) Return on investment (ROI) is the profit or loss that results from an investment transaction.
reverse proxy Apache HTTP Server configured as a reverse proxy server.
risk A risk is a measurement of an investment's likelihood of meeting expectations. For example, finishing on time, within the budget, and with the expected quality level.
roadmap A plan or guide listing roadmap items and data that can be accomplished within a certain time frame. A single roadmap can be viewed in the Timeline, Board, or Grid views.
roadmap scenario A roadmap copy that is created when a user selects Save As, creates a unique name, and makes changes to its roadmap items in the context of a 'what if scenario'.
roadmap item actual The term actual refers to the actual roadmap item capacity in terms of headcount.
roadmap item target A target is a number or monetary value that you can set for your roadmap (for example, Capital expenses, Operating Expenses, or Revenue) to plan your roadmap items. You can then monitor the impact on these targets as you add, move,

and remove items from your roadmap. You can also set goals as part of your targets. The idea is to stay under the target and go over the goal.
role A role describes the work function or job responsibilities of a resource.
role request A staffing request for one or more resources to perform an investment-specific role. It is also a request to staff an investment with a named resource or a predefined team as part of staffing (resource management) activities.
SAML SAML is an abbreviation for Security Assertion Markup Language. SAML is an open standard XML data format for exchanging authentication data between different networks.
scalar A scalar is a real number used to compare a number field to a time-varying (TSV) or per-period metrics field. This applies to stock fields that are separate fields and do not represent the 'Sum of Periods' or 'Grand Totals' of a TSV field. The scalar field always represents the grand total amount as a real number. Example of a scalar field compared to the TSV field: - Allocation (prallocsum) - Number (referred to as a scalar field) - Allocation (allocation_curve) - Time-varying
schedule A schedule is a timetable for performing tasks, utilizing resources, or allocating facilities.
schedule variance (SV) The schedule variance (SV) is a measure of what you have accomplished to date used in Earned Value. It is a comparison with what you planned to have accomplished on a specific date.
SV = BCWP - BCWS
scheduler tool A scheduler tool is a third-party product, such as Open Workbench or Microsoft Project, that can be used with the product for project scheduling and planning.
shortlist A shortlist is a list of resources that resulted from searching for resources to book to projects or to attach to requisitions.
SaaS (Software-as-a-Service) A subscription-based software licensing and cloud delivery model.
SP federation server The is the service provider for the Classic PPM SaaS side of integration with SSO.

SSO (Single Sign-On) A method of centralized enterprise authentication. One username and password provides authorization to multiple systems.
staff Staff is a group of resources, roles, or predefined teams allocated to an investment and assigned to perform work. Resource staffing activities include direct allocations and requests for resources, roles, or teams. Resource managers and investment managers collaborate to staff investments with specific resources.
Staffing Workspace - Staff tab Provides a comprehensive view of all allocated staff across all investments the user has access to within the workspace. Allows hyperlinking into Resource or Investment modules.
Project, Idea, CIT Blueprint - Staff module Investment-centric; displays only the staff members who are allocated to that specific Project, Idea, or Custom Investment.
Project, Idea, CIT Blueprint - Staff module - Details Flyout - Staff subtab Investment-centric; displays only the staff members who are allocated to that specific Project, Idea, or Custom Investment.
status A status is the project results compared to the project plan. Status is determined in terms of costs, resources, deliverables, and whether the project is started, not started, or complete. In Open Workbench, a status indicator reflects the status of a project, or for a program, the status of its component projects.
subnet A subnet is a group of tasks in a project that have dependencies among themselves. During autoschedule, a separate critical path can be calculated for each subnet.
subproject A subproject is a child project contained in a master project or a program.
successor A successor is a task that follows another task (predecessor) and is related to it by a dependency type link.
system partition A system partition is the default partition that exists in each Classic PPM enterprise installation. Any partitions that you create become children to this partition.
target resolution date A Target Resolution Date is the date by when the Risk or Issue should be resolved or closed. By default, the target date should occur on or before the Impact Date to mitigate the repercussions of the Risk or Issue, unless the setting to allow later dates is enabled. If the Allow Risk and Issue Target Resolution Date to be Greater than the Impact Date option is enabled in Project Management Settings, the Target Resolution Date can be set after the Impact Date.

task A task is a unit of work in an investment plan that is assigned to one or more resources for a specified period. An Investment can have milestone tasks to measure progress.
task board A task board allows a user to manage project tasks using a board that categorizes task cards into columns or swim lanes.
team A team is a predefined group of resources with planned capability. Project managers can allocate and assign the predefined teams to tasks using the project Staff capability.
team member or participant A team member or participant is a member of the investment team who can access the investment tasks, conversations, timesheets, and other assigned application pages. This participant may not necessarily be assigned any investment tasks. In Classic PPM, team participants might have access to calendars, documents, processes, action items, discussions, and other Classic PPM investment portlets and pages.
NOTICE In Clarity (MUX), the term team member is often referred to as a staff member.
tenant administrator A tenant administrator is a person who administers the Broadcom On-Demand Portal or Okta Tenant Admin for their organization.
timesheet A timesheet enables resources to record and submit the time spent (actuals) on the tasks that are assigned to them.
total effort Total effort (also sometimes referred to as total usage) calculates the amount of effort that is required to complete a project or a task.
Total Effort = Actuals + Remaining ETC
total forecast Total Forecast is defined as the sum of all forecast amounts between the enclosing fiscal periods (respecting the Sum of Periods and Grand Totals setting in View Options).
total forecast variance Total Forecast Variance is defined as the difference between Total Planned/Budgeted Cost and Total Forecast.
Total Forecast Variance = Total Planned Cost - Total Forecast
total %forecast variance Total %Forecast Variance is defined as Total Variance for the fiscal period/ Total Planned or Budgeted Cost for the same period multiplied by 100.
Total %Forecast Variance = (Total Planned Cost - Total Forecast)*100

total usage ETC plus Actuals in the specific unit of measurement (FTE, Hours, or Days) for a resource assignment and aggregated up to the Task, Staff, and Investment.
total usage (TSV) Total usage (TSV) = ETC plus Actuals.
To-Do list A list of open and completed to-do activities can be managed with an owner, a due date, and categorized with additional properties as configured by the Clarity Administrator.
tracking Tracking is the process of measuring the status of a project and comparing the status with the plan. Tracking is used to identify variances and to take corrective action.
transaction A transaction is where you apply financial costs and rates to time and expenses. To change a manual transaction posted to WIP, create a WIP adjustment or a WIP reversal entry. To change a timesheet transaction, post to WIP, create a timesheet adjustment, and post the change to WIP.
transaction class A transaction class defines the type of financial transaction. For example, billable or non-billable.
type code A type code (also known as input type code) is an abbreviation, acronym, short phrase, or a number that refers to a certain description of payroll time. For example, standard time, overtime, holiday pay, travel pay, straight commission, and consultant fees.
uniform loading pattern A uniform loading pattern is an assignment loading pattern by which the time of a resource is scheduled evenly across a task. The time is scheduled only on those days when the resource is available to meet the task requirements.
unstructured project An unstructured project (collaboration project) is a project that does not include any tasks. This project can include a calendar, documents (including processes), discussions, and project roster features. No transaction processing occurs in an unstructured project.
unused allocation The unused allocation is the amount of allocation that is not actually used up (based on actual effort) or planned to be used up (based on ETC).
Unused Allocation = Allocation - (ETC + Actuals)
usage Usage is the total effort (actuals plus remaining ETC) to date for labor or non-labor resource. See also total effort.

TIP
How are total effort and total usage related? Although they share the same formula, the two terms exhibit subtle differences. Total effort includes only the values for labor resources (including defined resource teams). The application computes total usage for both labor and non-labor resources. See their entries on this page and the following table:

Calculation:
Includes Labor? Includes Non-Labor? Visibility Level:

Total Effort Total Effort = Actuals +
Remaining ETC Yes No
Projects or Tasks

Total Usage Total Usage = Actuals +
Remaining ETC Yes Yes
Assignments

user A user is the labor resource who has access rights to use the product. A user can participate on a collaboration project and can also be a resource.
resource utilization Utilization is the total usage per time period for a resource resulting from the summation of all tasks in the project.
versioning Versioning refers to retaining and accessing prior iterations of a document. The term is also associated with Studio content packages to track iterative builds.
view A view is a framework that determines how information such as tasks or roadmap items appears on a page. Views include lists, grids, property pages, and boards.
virtual attribute A virtual attribute is a field that displays to the user as a read-only field because the value is generated at run time. For example, Planned Total Cost is a virtual attribute that displays the sum of the planned operating cost and planned capital cost for an investment.
visual A graphic that provides a specific metric such as Effort Spent or Budget Spent. The metric is represented as a donut chart, a timeline, or a stoplight.
WBS activity WBS stands for 'Work Breakdown Structure'. A WBS Activity is a grouping of tasks, and depending on the level of the grouping, it may be referred to as a Phase, Summary, or Activity grouping.
WBS object A WBS object is a step in the Work Breakdown Structure (WBS) used as a building block in Open Workbench and Microsoft Project. Organizations use different terms to refer to WBS objects. For example, Summary tasks or Parent


tasks, Child tasks, or Detail tasks. Each WBS object contains information about its dependencies, role assignments, initial estimates, and deliverables.
WIP adjustment transaction A WIP adjustment transaction is created through the WIP Adjustment process to correct an error in a transaction that has been posted to WIP but not billed or invoiced.
WIP adjustment type The product supports the following types of WIP adjustments: - Modify Changes the data in a transaction, such as the number of hours that are worked in a labor transaction. Modify
does not involve a transfer of data between different groups that define the transaction. - Reverse Enters a counter-balancing transaction to cancel the original transaction. - Transfer Occurs when a transaction is moved from one client, project, cost code, or employee to another.
WIP class A WIP class is primarily used for the financial reporting of projects, but can also be used to drive planned and actual costs and revenues. WIP class is used for grouping WIP transactions for the general ledger.
WIP reversal transaction A WIP reversal transaction reverses a financial transaction that has been posted to WIP, but has not been billed to a client. A WIP reversal completely removes a financial transaction from the project. A WIP reversal refers to the action of reversing a WIP transaction and a WIP reversal transaction refers to the transaction that was reversed. WIP reversal is permanent even though the record is not physically removed from the database. If the financial transaction originated from a timesheet, a WIP reversal does not remove the corresponding timesheet entry.
work breakdown structure (WBS) A work breakdown structure (WBS) refers to the organization of tasks into a hierarchy that typically includes phases, key tasks, milestones, and subsequent tasks (child tasks that fall under a parent task).
Product Names and Abbreviations
This documentation references the following products, add-ins, and abbreviations: - Rally (formerly CA Agile Central) - CA Application Portfolio Management (CA APM) - CA Business Intelligence (CABI) - CA Open Workbench (OWB) - Clarity Business Objects (BO) - Clarity Business Relationship Manager (BRM) - Clarity Earned Value Manager (EVM) - Clarity System Administration (CSA) - CA Single Sign-On (formerly CA SiteMinder) - Data Warehouse (DWH) - Microsoft Project (MSP) - Microsoft SharePoint - Project Management Body of Knowledge (PMBOK)

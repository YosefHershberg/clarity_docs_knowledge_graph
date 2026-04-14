---
title: XOG Client Shell Command Line and SOAP
tags:
  - dev
aliases:
  - Client and SOAP
canonical: true
audience: dev
domain: development
---

# XOG Client Shell, Command Line, and SOAP

The XML Open Gateway (XOG) is a web service interface that provides a SOAP API for communication with Classic PPM over the web.
Integrators and system administrators can run XOG commands in multiple ways: from the command line, using a `.properties` file, as an interactive shell, or directly via SOAP.

> [!NOTE]
> **New in Clarity 16.0.0:** The XOG API now supports removal of multi-value lookup (MVL) field values. Include `complete="true"` in the XOG request to replace existing values with the passed values. If no values are passed, all existing values are removed.

---

## XOG Client Installation

### Download and Install the XOG Client

**Follow these steps:**
1. Click **Administration > General Settings > Client Downloads**.
2. **For Windows:**
   - Click the **Windows Installer Download** link.
   - Save the `XOG.exe` file to a local directory.
   - Run `XOG.exe` and follow the on-screen instructions.
3. **For other operating systems:**
   - Click the **Cross-platform ZIP Download** link.
   - Save `xogclient.zip` to your local computer.
   - Create a folder named `xogclient` and extract the zip files into it.
4. **(UNIX only)** Run `chmod +x run.sh` from the `bin` directory.

### XOG Client Directory Structure

| Directory | Contents |
|-----------|----------|
| `bin` | Batch files to run the XOG client; also contains `test.properties` |
| `lib` | Libraries required to run the XOG client |
| `wsdl` | The `XOGService.wsdl` file |
| `xml` | Sample XML read and write files for XOG-supported objects |
| `xsd` | XML schemas for XOG-supported objects |

---

## Verify the XOG Client Version and Connectivity

After installing the XOG client, test connectivity to the Classic PPM server. The XOG client version must match your version of Classic PPM.

> [!WARNING]
> Before verifying the XOG client version and connectivity, download the Java Runtime Environment (JRE) and set the `JAVA_HOME` variable.

**Follow these steps:**
1. In Classic PPM, determine your release version by clicking **About** in the upper-right corner.
2. Open a command prompt:
   - **Windows:** Start > All Programs > CA > Clarity > Classic PPM XML Open Gateway
   - **UNIX:** Navigate to the XOG client home directory.
3. Issue the following commands to see the XOG client version:
   - HTTP: `xog`
   - HTTPS: `xog -sslenabled true`
4. If the version numbers do not match, download and reinstall the XOG client.
5. Verify the connection:

```
login <username>/<password>@<server>:<port>
```

For example:

```
login admin1/password2@cppm-testsite-1234.ca.com:443
```

---

## (Optional) Set Up FIPS 140-2 Mode

FIPS 140-2 defines U.S. federal government requirements for encrypting sensitive data. If required for your organization, configure FIPS 140-2 mode.

> [!TIP]
> In Classic PPM 15.3 (September 2017), a new Bouncy Castle Cryptography Package for FIPS replaced the RSA B-SAFE FIPS provider from earlier releases.

For SaaS customers, contact Broadcom Support to enable FIPS mode.

---

## Run the XOG from the Command Line

You can enter parameters directly in the command line to import and export data.

**Follow these steps:**
1. Open a command prompt (Windows: Start > All Programs > CA > Classic PPM > XML Open Gateway; UNIX: navigate to the XOG client home directory).
2. Type the XOG command with the required parameters and press **Enter**.

### Command-Line Parameters

| Parameter | Description |
|-----------|-------------|
| `-servername` | Name of the server running Classic PPM. |
| `-portnumber` | Port number on the server. Default: 80. SSL: 443. |
| `-sslenabled` | Whether the server is SSL-enabled. Default: False. |
| `-output` | Path to file where output is written. Any existing file is overwritten. |
| `-input` | Path to the file containing the XOG request. |
| `-username` | Username for authentication. Must have XOG administration access rights. |
| `-password` | User password. |
| `-propertyfile` | (Optional) Properties file containing any of the above parameters. |
| `-fipsenabled` | Whether to operate in FIPS 140-2 compliant mode. Default: False. |

### Basic Command Examples

**Show command usage:**
```
xog -?
```

**Read an object:**
```
xog -servername <host> -portnumber <port> -username <adminuser> -password <password> -input xml/prj_projects_read.xml
```

**Write output to a file:**
```
xog -servername <host> -portnumber <port> -username <adminuser> -password <password> -input xml/prj_projects_read.xml -output xml/prj_project_write.xml
```

By default, output is saved to the current working directory.

---

## Run the XOG Using a .Properties File

Store command-line parameters in a `.properties` file and call it from the command line. This lets you save parameters for common XOG requests and reuse them without retyping them each time.

**Example use case:** If you import users, companies, resources, and content items regularly, create separate files:
- `users.properties`
- `companies.properties`
- `resources.properties`
- `content.properties`

### Properties File Example

```properties
# Server host name
servername=localhost
portnumber=80
# Default port for SSL: 443
#portnumber=443
# Set to true for SSL-enabled servers
sslenabled=false
# Set to true for FIPS 140-2 mode
fipsenabled=false
output=out.xml
username=admin
password=admin
```

### Create a .Properties File

**Follow these steps:**
1. Copy the example `test.properties` file from the `bin` directory.
2. Modify the copy:
   - Use `=` to assign parameter values (e.g., `password=admin`).
   - Use `#` for comments.
   - Specify the XML input file you want to use. Comment out files you are not using.

### Run the XOG Using the .Properties File

**Follow these steps:**
1. Modify `test.properties` or create your own `.properties` file and save it in the `bin` directory.
2. Open a command prompt (Windows or UNIX as above).
3. Issue this command:

```
xog -propertyfile test.properties
```

4. View the output.

---

## Run the XOG Client as a Shell

The XOG client can be run as an interactive shell, allowing you to log in once and execute multiple requests before logging out. This is useful when developing integrations or testing XOG requests.

**Follow these steps:**
1. Open a command prompt.
2. Issue this command: `xog`

### XOG Client Shell Commands

| Command | Description |
|---------|-------------|
| `?` | Displays the command usage screen. |
| `login` | Retrieves a new session ID by logging in. Example: `login admin/mypassword@myserver:80` |
| `logout` | Closes any active sessions. |
| `output` | Sets the path and file name where results are captured. Example: `output c:\xog\xml\out.xml` |
| `call` | Invokes a XOG request file. Path may be absolute or relative. Example: `call xml/biz_companies_read.xml` |
| `exit` | Logs out of active sessions and quits the shell. |

---

## Run the XOG Using SOAP

Any client tool - not just the XOG client - can send and receive SOAP messages using the XOG. The XOG SOAP API is documented in the WSDL and XSD files.

### Step 1: Call Login

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    <Login xmlns="http://www.niku.com/xog">
      <Username>admin</Username>
      <Password>admin</Password>
    </Login>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

Login input elements:
- **Login** - Main body element. Returns a `SessionID` for use in subsequent requests.
- **Username** - Name of the user performing the operation.
- **Password** - Password for the user.

### Step 2: Invoke a Request Using the SessionID

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xog="http://www.niku.com/xog">
  <SOAP-ENV:Header>
    <xog:Auth><xog:SessionID>[session id]</xog:SessionID></xog:Auth>
  </SOAP-ENV:Header>
  <SOAP-ENV:Body>
    <obj:WriteChange xmlns:obj="http://www.niku.com/xog/Object">
      <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../xsd/nikuxog_change.xsd">
        <Header version="12.0.0.5028" externalSource="ORACLE-FINANCIAL"/>
        <changeRequests>
          <changeRequest
            benefits="change request for xog test"
            code="change request for xog test"
            name="change request for xog test"
            ownerCode="admin"
            priorityCode="LOW"
            projectCode="riskIssueProject"
            statusCode="OPEN"/>
        </changeRequests>
      </NikuDataBus>
    </obj:WriteChange>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

> [!NOTE]
> When making multiple requests with the same `SessionID` (for example, when an external process runs at intervals), the `SessionID` can time out.
> This is equivalent to Logout. To establish a new `SessionID`, log in again.
> Session timeout duration matches the web browser user session timeout configured in System Options.

### Step 3: Call Logout

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:obj="http://www.niku.com/xog/Object">
  <soapenv:Header/>
  <soapenv:Body>
    <obj:Logout>
      <obj:SessionID>[SessionID]</obj:SessionID>
    </obj:Logout>
  </soapenv:Body>
</soapenv:Envelope>
```

Logout input elements:
- **SessionID** - The authentication string identifying the session to invalidate.
- **Logout** - Main body element of the Logout request.

---

## XOG Schema, Sample XML Files, and Special Characters

### Schema Files

Schemas are templates that define valid XML structures for XOG requests. Schema definitions apply to all read and write requests and responses.

**Schema locations:**
- On the Classic PPM server: `$installDir/webroot/WEB-INF/xog/xsd/`
- In the XOG client directory: `xsd/`

**Key schema files:**

| File | Purpose |
|------|---------|
| `nikuxog_read.xsd` | Read request schema. Includes `nikuxog_readTypes.xsd` and `nikuxog_readQueryTypes.xsd`. |
| `nikuxog_<object>.xsd` | Read response and write request schema for specific objects. |
| `status.xsd` | Write response schema (applies to all write object responses). |

> [!NOTE]
> Verify that attributes are documented in the XOG Object Reference before using them. Some attributes in the XSD files may be deprecated or unsupported.

### NikuDataBus Header Element

All read and write operations require the `<Header>` element. Header attributes:

| Attribute | Required | Description |
|-----------|----------|-------------|
| `version` | Yes | Version of the XOG service. Type: String. |
| `externalSource` | Write only | Source system. Values: `NIKU` (default), `ORACLE-FINANCIAL`, `PEOPLESOFT`, `SAP`, `OTHER`, `OTHER-EXPENSE`, `OTHER-TIME`, `REMEDY`. |

---

### XML Read and Write Files

Sample XML read and write files are stored in the `xml` directory created during XOG client installation.

**XML Read Files** contain the header, arguments, and query filters needed to read an object. Arguments control what data is included in the export.

**XML Write Files** can be created by:
- Modifying the example write files in the `xml` folder.
- Using the output of an XML read file (which is returned in valid write file format).

#### Example: Create an XML Write File from a Read File Output

1. Create an example project in Classic PPM with the data you want in the final write file.
2. Create an XML read file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd">
  <Header version="6.0.11" action="read" objectType="project" externalSource="NIKU">
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
    <args name="include_burdening" value="false"/>
  </Header>
  <Query>
    <Filter name="projectID" criteria="EQUALS">project1</Filter>
  </Query>
</NikuDataBus>
```

3. Run the XOG using the read file as input.
4. Examine and edit the output XML file as needed.
5. Save the edited file as your XML write file.

---

### Special Characters

Escape special characters in XOG requests to ensure successful reads and writes.

| Character | Escape Rule |
|-----------|-------------|
| `&` (Ampersand) | `&amp;` |
| `'` (Apostrophe) | `&apos;` |
| `>` (Greater-than) | `&gt;` |
| `<` (Less-than) | `&lt;` |
| `"` (Quotes) | `&quot;` |

**Escape example:**
```xml
<ColumnValue name="abn_vendor_names">E1&amp;P2</ColumnValue>
```

**CDATA example** (alternative to escaping):
```xml
<ColumnValue name="abn_vendor_names"><![CDATA[E1&P2]]></ColumnValue>
```

---

### Date and Time Format

Use the following standard formats for date and time strings in XOG:
- **Date format:** `YYYY-MM-DD`
- **Time format:** `HH24MMSS`

**Important notes:**

- **Custom object date/time values** are stored in GMT. Offset your locale's date and time to GMT before writing. For example, to store November 20, 2008 at 3:15 PM Tokyo time (UTC+9), use `2008-11-21T00:15:00`.
- **Task finish date timestamps** - Always include a timestamp in `prj_projects_write.xml`. Without a timestamp, the time defaults to `00:00:00`, which causes Portfolio portlets to display the finish date one day later. Use `17:00:00` as the timestamp when none is provided.

---

### Filter Criteria for XOG Read Requests

Supported filter criteria values for XOG read requests: `EQUALS`, `OR`, `BETWEEN`, `AFTER`, `BEFORE`.

---

## Related
- [[_MOC Development]]

%%Source: p4243-4259%%



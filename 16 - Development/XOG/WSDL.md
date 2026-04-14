---
title: XOG WSDL
tags:
  - dev
aliases:
  - WSDL
canonical: true
audience: dev
domain: development
---

# XOG WSDL

Each XOG service includes a Web Service Description Language (WSDL) file. The WSDL describes the available XOG services and how to communicate with them.

---

## View the XOG WSDL Files

Access the XOG WSDL on the Classic PPM application server at:

```
http://<servername:port>/niku/wsdl
```

The resulting page shows three XOG service category links:
- **InvokeAction**
- **Query**
- **Object**

Click a category link to view its included services. For example, clicking **InvokeAction** shows the Process service. Click **Object** then **All Objects** to access the WSDL for all objects on a single page.

> [!NOTE]
> The WSDL for queries is not prepackaged. A WSDL for a query only exists if you created an NSQL query in Studio. The number of query WSDLs corresponds to the number of NSQL queries defined in Studio.

Each service appears in HTML in your browser and includes a **save as...** option to download the XML file. To map data from one system to another, use Enterprise Application Integration (EAI) software. For more information, see the W3C website at w3.org.

---

## WSDL Emitter Tools

A client program connecting to the XOG can read the WSDL to determine what functions are available on the server. Special data types are embedded in the WSDL as XML Schema.

The XOG WSDL has been validated against these platforms:
- **Apache Axis 1.3 or newer**
- **Microsoft Visual Studio 2005 (.NET) or newer**

These emitter tools interpret the XOG WSDL to enable communication with Classic PPM as a web service. Because the XOG WSDL is compatible with Axis and .NET, these tools generate an accurate and usable proxy API. This facilitates interaction with the XOG services in the context of Axis or .NET.

---

## Example: Process WSDL

This example illustrates the WSDL for the Process service:

```xml
<definitions xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
  xmlns:tns="http://www.niku.com/xog/InvokeAction"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns="http://schemas.xmlsoap.org/wsdl/"
  name="InvokeActionProcess"
  targetNamespace="http://www.niku.com/xog/InvokeAction">
  <types>
    <xsd:schema elementFormDefault="qualified"
      targetNamespace="http://www.niku.com/xog/InvokeAction">
      <xsd:complexType name="Process">
        <xsd:sequence>
          <xsd:element name="code" type="xsd:string" minOccurs="1" maxOccurs="1"/>
          <xsd:element name="request" minOccurs="0" maxOccurs="1">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:any/>
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="Process" type="tns:Process"/>
      <xsd:element name="Auth">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element minOccurs="0" name="SessionID" type="xsd:string"/>
            <xsd:element minOccurs="0" name="Username" type="xsd:string"/>
            <xsd:element minOccurs="0" name="Password" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Login">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element minOccurs="1" name="Username" type="xsd:string"/>
            <xsd:element minOccurs="0" name="Password" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="SessionID" type="xsd:string"/>
      <xsd:element name="Logout">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element maxOccurs="1" minOccurs="0" name="SessionID" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:schema>
  </types>
  <message name="Process">
    <part element="tns:Process" name="body"/>
    <part element="tns:Auth" name="header"/>
  </message>
  <message name="Auth">
    <part element="tns:Auth" name="header"/>
  </message>
  <message name="Login">
    <part element="tns:Login" name="parameters"/>
  </message>
  <message name="LoginResponse">
    <part element="tns:SessionID" name="body"/>
  </message>
  <message name="Logout">
    <part element="tns:Logout" name="parameters"/>
  </message>
  <portType name="ProcessPort">
    <operation name="Process">
      <input message="tns:Process"/>
    </operation>
    <operation name="Login">
      <input message="tns:Login"/>
      <output message="tns:LoginResponse"/>
    </operation>
    <operation name="Logout">
      <input message="tns:Logout"/>
    </operation>
  </portType>
  <binding name="ProcessSoapBinding" type="tns:ProcessPort">
    <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
    <operation name="Process">
      <soap:operation soapAction="http://www.niku.com/xog/InvokeAction/Process" style="document"/>
      <input>
        <soap:body parts="body" use="literal"/>
        <soap:header message="tns:Auth" part="header" use="literal"/>
      </input>
    </operation>
    <operation name="Login">
      <soap:operation soapAction="http://www.niku.com/xog/InvokeAction/Login" style="document"/>
      <input>
        <soap:body use="literal"/>
      </input>
      <output>
        <soap:body use="literal"/>
      </output>
    </operation>
    <operation name="Logout">
      <soap:operation soapAction="http://www.niku.com/xog/InvokeAction/Logout" style="document"/>
      <input>
        <soap:body use="literal"/>
      </input>
    </operation>
  </binding>
  <service name="ProcessService">
    <documentation>Invoke Action Process Service</documentation>
    <port binding="tns:ProcessSoapBinding" name="ProcessService">
      <soap:address location="http://<servername:port>//xog"/>
    </port>
  </service>
</definitions>
```

---

## `<xsd:any>` and Process WSDL

The request and response types of the Object WSDL are defined as `<xsd:any>`. However, the schema of these request/response types must be consistent with the corresponding XOG Object schema (as defined in the `.xsd` file).

The following example shows the SOAP representation of the Project object WSDL for the `ReadProject` operation. The `DataBus` document shows the correct representation of the DataBus `<xsd:any>` type:

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Header>
    <Auth xmlns="http://www.niku.com/xog/Object">
      <SessionID>5000156__171120a:10a241ff830:-7f711143139816999</SessionID>
    </Auth>
  </soap:Header>
  <soap:Body>
    <ReadProject xmlns="http://www.niku.com/xog/Object">
      <DataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../xsd/xog_read.xsd" xmlns="">
        <Header version="12.0.0.5028" externalSource="NIKU"/>
        <Query>
          <Filter name="subject" criteria="EQUALS">admin</Filter>
        </Query>
      </DataBus>
    </ReadProject>
  </soap:Body>
</soap:Envelope>
```

---

## Example: Demand for Resource Query WSDL

This example illustrates the WSDL for the Demand for Resource query service:

```xml
<definitions xmlns:tns="http://www.niku.com/xog/Query"
  xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns="http://schemas.xmlsoap.org/wsdl/"
  name="DemandforResourceQuery"
  targetNamespace="http://www.niku.com/xog/Query">
  <types>
    <xsd:schema elementFormDefault="qualified"
      targetNamespace="http://www.niku.com/xog/Query">
      <xsd:complexType name="DemandforResourceFilter">
        <xsd:sequence>
          <xsd:element maxOccurs="1" minOccurs="0" name="actual_hours" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="actual_hours_from" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="actual_hours_to" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="allocated_hours" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="allocated_hours_from" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="allocated_hours_to" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="estimated_effort" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="estimated_effort_from" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="estimated_effort_to" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="resource_name" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="resource_name_from" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="resource_name_to" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="resource_name_wildcard" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="resource_id" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="resource_id_from" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="resource_id_to" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_key" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_key_from" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_key_to" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_key_wildcard" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_level" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_level_from" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_level_to" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_level_wildcard" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_label" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_label_from" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_label_to" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="calendar_time_label_wildcard" type="xsd:string"/>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:complexType name="DemandforResourceQuery">
        <xsd:sequence>
          <xsd:element maxOccurs="1" minOccurs="1" name="Code" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="0" name="Filter" type="tns:DemandforResourceFilter"/>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="Query" type="tns:DemandforResourceQuery"/>
      <xsd:complexType name="DemandforResourceRecord">
        <xsd:sequence>
          <xsd:element maxOccurs="1" minOccurs="1" name="actual_hours" type="xsd:decimal"/>
          <xsd:element maxOccurs="1" minOccurs="1" name="allocated_hours" type="xsd:decimal"/>
          <xsd:element maxOccurs="1" minOccurs="1" name="estimated_effort" type="xsd:decimal"/>
          <xsd:element maxOccurs="1" minOccurs="1" name="resource_name" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="1" name="resource_id" type="xsd:long"/>
          <xsd:element maxOccurs="1" minOccurs="1" name="calendar_time_key" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="1" name="calendar_time_level" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="1" name="calendar_time_label" type="xsd:string"/>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:complexType name="DemandforResourceRecords">
        <xsd:sequence>
          <xsd:element maxOccurs="unbounded" minOccurs="0" name="Record"
            type="tns:DemandforResourceRecord"/>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:complexType name="DemandforResourceQueryResult">
        <xsd:sequence>
          <xsd:element maxOccurs="1" minOccurs="1" name="Code" type="xsd:string"/>
          <xsd:element maxOccurs="1" minOccurs="1" name="Records" type="tns:DemandforResourceRecords"/>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="QueryResult" type="tns:DemandforResourceQueryResult"/>
      <xsd:element name="Auth">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element minOccurs="0" name="SessionID" type="xsd:string"/>
            <xsd:element minOccurs="0" name="Username" type="xsd:string"/>
            <xsd:element minOccurs="0" name="Password" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Login">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element minOccurs="1" name="Username" type="xsd:string"/>
            <xsd:element minOccurs="0" name="Password" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="SessionID" type="xsd:string"/>
      <xsd:element name="Logout">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element maxOccurs="1" minOccurs="0" name="SessionID" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:schema>
  </types>
  <message name="Query">
    <part element="tns:Query" name="body"/>
    <part element="tns:Auth" name="header"/>
  </message>
  <message name="QueryResult">
    <part element="tns:QueryResult" name="body"/>
  </message>
  <message name="Auth">
    <part element="tns:Auth" name="header"/>
  </message>
  <message name="Login">
    <part element="tns:Login" name="parameters"/>
  </message>
  <message name="LoginResult">
    <part element="tns:SessionID" name="body"/>
  </message>
  <message name="Logout">
    <part element="tns:Logout" name="parameters"/>
  </message>
  <portType name="DemandforResourceQueryPort">
    <operation name="Query">
      <input message="tns:Query"/>
      <output message="tns:QueryResult"/>
    </operation>
    <operation name="Login">
      <input message="tns:Login"/>
      <output message="tns:LoginResult"/>
    </operation>
    <operation name="Logout">
      <input message="tns:Logout"/>
    </operation>
  </portType>
  <binding name="DemandforResourceQuerySoapBinding" type="tns:DemandforResourceQueryPort">
    <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
    <operation name="Query">
      <soap:operation soapAction="http://www.niku.com/xog/Query/DemandforResource" style="document"/>
      <input>
        <soap:body parts="body" use="literal"/>
        <soap:header message="tns:Auth" part="header" use="literal"/>
      </input>
      <output>
        <soap:body use="literal"/>
      </output>
    </operation>
    <operation name="Login">
      <soap:operation soapAction="http://www.niku.com/xog/Query/Login" style="document"/>
      <input>
        <soap:body use="literal"/>
      </input>
      <output>
        <soap:body use="literal"/>
      </output>
    </operation>
    <operation name="Logout">
      <soap:operation soapAction="http://www.niku.com/xog/Query/Logout" style="document"/>
      <input>
        <soap:body use="literal"/>
      </input>
    </operation>
  </binding>
  <service name="DemandforResourceQueryService">
    <documentation>Demand for Resource Query Service</documentation>
    <port binding="tns:DemandforResourceQuerySoapBinding"
      name="DemandforResourceQueryService">
      <soap:address location="http://<servername:port>//xog"/>
    </port>
  </service>
</definitions>
```

---

## Generate Supporting API

Both Apache Axis and Microsoft Visual Studio have emitter tools that generate proxy classes based on WSDL service descriptions.

### Generate a Proxy API from Apache Axis

The emitter tool packaged with Apache Axis is `WSDL2Java`. The following example shows how to initiate this tool from the command line against the All Objects XOG WSDL:

```
java -cp lib\wsdl4j-1.5.1.jar;lib\commons-discovery-0.2.jar;lib\axis.jar;lib\log4j-1.2.8.jar;lib\commons-logging-1.0.4.jar;lib\jaxrpc.jar org.apache.axis.wsdl.WSDL2Java -W [url]
```

> [!WARNING]
> You must include the `-W` flag when generating the proxy API from XOG WSDL definitions.
> The flag indicates document/literal WSDL style.
> Without it, the tool assumes wrapped/literal style, which is incorrect.
> Omitting `-W` causes proxy-generation errors and runtime failures when calling XOG interfaces.

The default output location follows the namespace convention defined in the WSDL. Because the `targetNamespace` in the All Object WSDL is `http://www.niku.com/xog/Object`, the resulting proxy classes reside in `D:\axis\com\niku\www\xog\Object`.

For exact syntax to use with Apache Axis2, refer to the Apache documentation.

### Generate a Proxy API from Visual Studio

Use Visual Studio's **Add Web Reference** feature to generate a proxy API from the XOG WSDL. Connect Visual Studio to the XOG WSDL URL and follow the on-screen instructions to generate the proxy classes.

---

## Related
- [[_MOC Development]]

%%Source: p4471-4478%%


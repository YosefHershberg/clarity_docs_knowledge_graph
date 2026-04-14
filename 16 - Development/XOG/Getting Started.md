---
title: XML Open Gateway (XOG) Development
tags:
  - dev
aliases:
  - Getting Started
canonical: true
audience: dev
domain: development
---
# XML Open Gateway (XOG) Development

The XML Open Gateway (XOG) is a Classic PPM web service interface that integrators and system administrators use to import data, export data, and move configuration data from one system to another. XOG uses XML and web services to perform these operations.

Classic PPM web services are available on the same HTTP or HTTPS port as the HTML web browser interface.

> [!TIP]
> This content is only available in English.

---

## Access Methods

You can access XOG web services using one of these methods:

- **XOG client** — Download the XOG client to your computer and use it to run XOG operations.
- **SOAP** — Access and run the XOG directly using SOAP without the XOG client. Classic PPM web services use XML messages that comply with the SOAP standard.

---

## XOG Client

The XOG client is a Java program you install on your computer to import and export data using the XOG. It communicates with the Classic PPM server on the standard HTTP port using the SOAP protocol.

**The XOG client allows you to:**
- Log in to start an authenticated session.
- Execute requests to read or write Classic PPM data.
- Log out to end the session.

For installation and usage instructions, see [[Client and SOAP]].

---

## XOG Web Services

The following web services are available from the XOG API:

| Web Service | Description |
|-------------|-------------|
| **Object API** | All read and write services for objects that can be imported or exported using the XOG. |
| **InvokeAction API** | Supports administrative actions beyond standard data import and export. Includes the Process root element. |
| **Query API** | Supports execution of NSQL-based queries from the XOG. Use this API to select and export specific information from Classic PPM. |

---

## Web Services Description Language (WSDL)

The WSDL describes the available XOG services and indicates how to communicate with them. WSDL is used with SOAP and the XML schema to provide web services over the Internet. Connect to the web service and read the WSDL file to learn what functions are available on the server.

For more information, see [[WSDL]].

---

## Assign XOG Access Rights

Before using the XOG client, you must have a valid Classic PPM login name, password, and one of these access rights:
- **Administration - Access**
- **Administration - XOG**

Before a resource can use the XOG to import or export data for a specific object, assign them the XOG access right for that object.

**Examples:**
- `Asset - XOG Access` — Allows importing and exporting asset instance data. The resource cannot import or export any other objects.
- `Project - XOG Access`
- `Resource - XOG Access`

You can find XOG access rights (global rights) for objects in the access rights list in the Administration Tool.

**Follow these steps:**
1. Open **Administration**, and from **Organization and Access**, click **Resources**.
2. Click the resource last name.
3. Open the **Resource's Access Rights** menu and click **Global**.
4. Click **Add**.
5. Enter `*XOG Access` in the **Access Right** field and click **Filter**.
6. Select the appropriate XOG access rights and click **Add**. The XOG access right is assigned to the resource.

---

## Defects Fixed for XOG

**DE60354 and DE55248 — XOG no Option to Update Default Resource OBS / Staff OBS Unit When Multiple Units Have Same Name**

**Problem:** When multiple OBS units share the same name, XOG could not identify which unit to update for `defaultStaffOBSUnit` or `staffOBSUnitName`.

**Fix:** XOG now includes the `defaultStaffOBSUnitPath` attribute, which accepts the full path for the OBS unit. If `defaultStaffOBSUnitPath` is not specified, the XOG falls back to the `defaultStaffOBSUnit` attribute.

---

## New in Clarity 16.0.0: Clear MVL Fields with XOG

In previous releases, you could not remove a value populated in a multi-value lookup (MVL) using XOG. Clarity 16.0.0 and higher now support removal of all MVL values.

The XOG API accepts the new flag `complete="true"` on multi-value lookup elements. This flag replaces existing values with the passed values. If no values are passed, all existing values are removed.

---

## Related
- [[_MOC Development]]

%%Source: p4241-4242%%

---
title: Install Clarity OData Service on Windows
tags:
  - admin
  - onprem
aliases:
  - OData Service Windows
---
# Install Clarity OData Service on Windows


Use this topic to install the Clarity OData Service on Windows for accessing the Clarity Data Warehouse in on-premise environments.

**Installation Checklist:**
- Prerequisites
- Download and Extract
- Create AES Key and Secrets
- Configure install.properties
- Configure Tenants
- Run the Installation Script
- Verify Installation
- Post-Installation
- Troubleshooting
- Notes

---

## Prerequisites


Before you begin, ensure that the following prerequisites are met:

- **Operating System:** A compatible Windows Server distribution, for example, Windows Server 2022.
- **Network Connectivity:** The server requires access to the internet to download required packages.

**Required Software:** Install the following software:

- Visual C++ 2017 Redistributable
- Microsoft Visual C++ Build Tools
- Microsoft ODBC Driver 17 for SQL Server
- Microsoft ODBC Driver 18 for SQL Server
- Microsoft Command Line Utilities 15 for SQL Server
- Oracle Instant Client

- **Python:** Python 3.12.5 (build-standalone) is required. The embeddable package is not recommended.
- **Poetry:** Poetry 1.4.2 is required for dependency management. For example:
  ```bat
  <path\to\python\bin>\python3 -m pip install poetry==1.4.2
  ```

- **Oracle Instant Client:** The Oracle Instant Client `instantclient-basiclite-windows.x64-21.18.0.0.0dbru.zip` is required. If the download fails due to Oracle download restrictions, download it manually and extract it to:
  ```
  C:\oracle\instantclient
  ```

---

## Download and Extract


Download and extract the Clarity OData Service installer archive to a temporary directory.

Follow these steps:

1. Download the installer archive:
   ```
   clarity_odata_windows_install_<clarity_odata_version>.zip
   ```

2. Extract the archive to a temporary directory. For example:
   ```
   TEMP_SCRIPT_DIR=C:\temp\clarity_odata_install
   ```

3. Navigate to the directory that contains the `install.py` script.

---

## Create AES Key and Secrets


Create an AES key and encrypted secrets that will be used for Clarity OData Service credentials and database passwords.

Follow these steps:

1. Navigate to the scripts directory:
   ```bat
   cd <TEMP_SCRIPT_DIR>\scripts
   ```

2. Create and activate a virtual Python environment and install the `pycryptodome` library:
   ```bat
   <Path to python 3.12.5> -m venv venv
   .\venv\Scripts\activate.bat
   pip install pycryptodome
   ```

3. Edit the `aes_key_util.bat` file and update the script references to use the compiled Python files.

4. Generate the AES key and encrypted secrets:
   ```bat
   aes_key_util.bat gen-key <your-passphrase>
   aes_key_util.bat enc-wkey <your-aes-key> <string-to-encrypt>
   aes_key_util.bat denc-wkey <your-aes-key> "<encrypted-string>"
   ```

   Store the generated AES key and encrypted values securely. These values are required during installation.

5. Deactivate the virtual environment:
   ```bat
   .\venv\Scripts\deactivate.bat
   ```

---

## Configure install.properties


Use the `install.properties` file to control how the Clarity OData Service is installed.

Set the following properties in `install.properties`:

| Property | Description | Example |
|---|---|---|
| `INSTALL_DIR` | Directory where Clarity OData Service is installed | `C:\clarity\odata` |
| `CLARITY_ODATA_PORT` | Port on which the service listens | `8043` |
| `SSL_CERTFILE` | Path to the SSL certificate file | |
| `SSL_KEYFILE` | Path to the SSL key file | |
| `SSL_KEYFILE_PASSWORD` | Password for the SSL key file | |
| `THREAD_LIMIT` | Optional. Specifies the limit of concurrent threads. | |
| `MT_ADMIN_USER` | Admin username for the Clarity OData Service | |
| `MT_ADMIN_PW` | AES encrypted admin password | |
| `AES_KEY` | AES key used during installation | |
| `REGISTER_AS_SYSTEM_SERVICE` | Set to `true` to register the service as a Windows service | |
| `RLS_ENABLED` | Enable Row Level Security. Set to `true` to enforce row-level data security. If not specified, RLS is treated as disabled. | `false` |
| `RLS_FULL_ACCESS_USER_GROUP` | Full access user group used when RLS is enabled | `odata_full_access_group` |
| `RLS_NON_RLS_TABLES_ACCESSIBLE` | Allow non-RLS tables to be accessible by all users when RLS is enabled | `true` |
| `RLS_FUNCTIONS_ACCESSIBLE_FOR_ALL` | Allow RLS functions to be accessible by all users | `true` |

---

## Configure Tenants


Tenants can be optionally configured during the Clarity OData Service installation process. For detailed steps, see the OData Tenant Configuration section below.

---

## Run the Installation Script


Run the installation script to install the service and optionally register it as a Windows service.

Follow these steps:

1. Run the installation script:
   ```
   install.py
   ```

2. The script installs binaries, prepares start and stop scripts, and optionally registers the service.

---

## Verify Installation


After installation, verify that the Clarity OData Service is running.

1. Check the installation log file:
   ```
   <INSTALL_DIR>\logs\clarity_odata_install.log
   ```

2. If registered as a system service, verify the service status from **Windows Services**.

3. If not registered as a service, verify the port is listening:
   ```bat
   netstat -aon | find ":<CLARITY_ODATA_PORT>"
   ```

4. Access the service using a browser:
   ```
   http(s)://<SYSTEM_DNS_OR_IP>:<CLARITY_ODATA_PORT>
   ```

---

## Post-Installation


- **Adding or Removing Tenants:** See the OData Tenant Configuration section below.
- **Security:** Verify SSL configuration if HTTPS is enabled.
- **Uninstall:** Navigate to `<INSTALL_DIR>` and run `uninstall.py`.

---

## Troubleshooting


- **Installation errors:** Review the installation log file at `<INSTALL_DIR>\logs\clarity_odata_install.log`.
- **Service start errors:** Check **Windows Event Viewer** logs.
- **Connectivity issues:** Verify port access and firewall rules.

---

## Notes


- The installation creates an `env.bat` file in the installation directory.
- Restart the service after configuration changes.
- Use the `start.bat` and `stop.bat` scripts for manual control.
- The `tenants_config` and `tenants_secret` directories store tenant files.
- The `scripts` directory contains supporting utilities.

---

## OData Tenant Configuration on Windows


Use this topic to configure Clarity tenants for use with the OData Service in an on-premise Windows environment.
These steps explain how to create tenant configuration files, update the required tenant secrets, integrate the OData service with Clarity PPM, and verify that the OData endpoints
are available to Clarity users.

**Tenant Configuration Checklist:**
- Prerequisites
- Configure Tenants During Installation
- Configure Tenants After Installation
- Delete Tenant Configuration
- Configure Clarity for OData
- Verify the Tenant Integration

### Prerequisites


Before configuring tenants, ensure the following conditions are met:

- Complete all steps in the installation procedure above, including installation prerequisites, user setup, and service deployment.
- Verify that the OData service is installed, registered, and running on your Windows server.
- Ensure that you have access to the tenant examples shipped with the installer:
  - `tenants_config_example\tenantA.config`
  - `tenants_secret_example\tenantA.config`

> [!NOTE]
> Tenant configuration is optional for OData startup, but required for Clarity tenants to connect to OData endpoints.

### Configure Tenants During Installation


You can configure tenants before running the installation script. This method is recommended if you already know the Clarity tenants that will connect to OData. The installer reads these files and loads the tenant information during the installation process.

Follow these steps:

1. Navigate to the OData Service installer directory where the installation archive was extracted:
   ```bat
   TEMP_SCRIPT_DIR=C:\temp\clarity_odata_install
   cd %TEMP_SCRIPT_DIR%
   ```

2. Copy the example tenant configuration file into the active configuration directory:
   ```bat
   copy tenants_config_example\tenantA.config ^
     tenants_config\<your_clarity_tenant_name>.config
   ```

3. Copy the example tenant secret file:
   ```bat
   copy tenants_secret_example\tenantA.config ^
     tenants_secret\<your_clarity_tenant_name>.config
   ```

4. Open the tenant configuration file:
   ```
   tenants_config\<your_clarity_tenant_name>.config
   ```
   Update all required values for your Clarity tenant or instance, including Data Warehouse schema details, authenticator values, and tenant identifiers.

5. Open the tenant secret file:
   ```
   tenants_secret\<your_clarity_tenant_name>.config
   ```
   Update the following fields:
   - **MT_TENANT_ID:** Set this to the Clarity tenant name.
   - **DB_DWH_PW:** Set this to the AES-encrypted value of the Data Warehouse password.

6. If you have multiple Clarity tenants or instances, repeat the above steps for each tenant and ensure that each configuration file is updated with tenant-specific values.

7. Continue with the remaining steps in the OData Service installation procedure.

### Configure Tenants After Installation


You can add new Clarity tenants after the OData Service has been installed. In this approach, you manually create the required tenant configuration and secret files directly in the OData Service installation directory.

Follow these steps:

1. Create a tenant configuration file in the multi-tenant configuration directory:
   ```
   <INSTALL_DIR>\tenants_config\multi_tenant_config\<your_clarity_tenant_name>.config
   ```
   Refer to the sample file: `tenants_config_example\tenantA.config`.

2. Create the tenant secret file:
   ```
   <INSTALL_DIR>\tenants_config\multi_tenant_secret\<your_clarity_tenant_name>.config
   ```
   Refer to the sample file: `tenants_secret_example\tenantA.config`.

3. After updating both files with the correct tenant values, restart the OData service so that the new tenant information is loaded. For restart instructions, see the Notes section above.

### Delete Tenant Configuration


To remove a tenant from OData, delete both the tenant configuration file and the corresponding secret file. OData Service reloads the tenant list after a restart.

Follow these steps:

1. Delete the tenant configuration file:
   ```
   <INSTALL_DIR>\tenants_config\multi_tenant_config\<your_clarity_tenant_name>.config
   ```

2. Delete the tenant secret file:
   ```
   <INSTALL_DIR>\tenants_config\multi_tenant_secret\<your_clarity_tenant_name>.config
   ```

3. Restart the OData Service. For restart instructions, see the Notes section above.

### Configure Clarity for OData


Beginning in Clarity PPM 16.3.2, a new properties element named `<odataServer>` is used to configure the OData Service details. Update this section in the Clarity properties file to establish the connection between Clarity tenants and OData.

Follow these steps:

1. Open the Clarity properties file located at:
   ```
   <CLARITY_RUNTIME_DIR>\config\properties.xml
   ```

2. Locate the following element:
   ```xml
   <odataServer id="ofast"
     externalUrl="http://<my_clarity_odata_server>"
     internalUrl=""
     odataTenantContextPath="tenant-identifier"
     odataAuthenticator=""
     adminUsername=""
     adminPassword=""/>
   ```

3. Update the attributes as follows:

   | Attribute | Description |
   |---|---|
   | `externalUrl` | The full OData Service URL. |
   | `internalUrl` | Optional. Use only if internal routing is required. |
   | `odataTenantContextPath` | Must match the `MT_TENANT_ID` value in the tenant configuration file. |
   | `odataAuthenticator` | Must match the `MT_ODATA_AUTHENTICATOR` value in the configuration file. |
   | `adminUsername` | OData admin user. |
   | `adminPassword` | OData admin password. |

4. Navigate to:
   ```
   <CLARITY_RUNTIME_DIR>\bin
   ```

5. Set the correct `JAVA_HOME` and update the `PATH` environment variable to match the Java runtime used by Clarity.

6. Enable the OData service:
   ```bat
   admin toggle-feature ODATA_SERVICE_FEATURE 1
   ```

7. Repeat these steps for each Clarity tenant that must connect to OData.

### Verify the Tenant Integration


After completing the configuration steps, verify that OData Service has successfully loaded the tenant information and that Clarity can establish an OData connection.

Follow these steps:

1. Verify all tenants loaded into OData Service:
   ```
   <externalUrl>/$admin/$tenants
   ```
   Log in with OData admin credentials when prompted.

2. Verify a specific tenant:
   ```
   <externalUrl>/$admin/$tenants/<your_clarity_tenant_name>
   ```

3. Log in to Clarity PPM using a user account that has OData access rights.

4. Navigate to:
   ```
   <Clarity_URL>/niku/nu#action:nmc.odataService
   ```

5. Note the following information displayed on the page:
   - OData Authenticator
   - Data Warehouse OData v2 Endpoint URL
   - Data Warehouse OData v4 Endpoint URL

6. Test the OData endpoints using a supported browser or BI tool. When prompted for authentication, use:
   - **Username:** `<clarity_login_username>|<OData_Authenticator>`
   - **Password:** `<clarity_login_password>`

---

## Related
- [[_MOC Install Upgrade]]

%%Source: p2845-2851%%

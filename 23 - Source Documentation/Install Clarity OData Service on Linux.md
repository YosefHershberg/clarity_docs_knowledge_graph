# Install Clarity OData Service on Linux (On-Premise Only)

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[17 - Installation and Upgrade/_MOC Install Upgrade|Installation and Upgrade]]
- Canonical notes:
- [[17 - Installation and Upgrade/OData Service Linux]]
- [[17 - Installation and Upgrade/OData Service Windows]]
- [[17 - Installation and Upgrade/Install with SQL Server]]
- [[17 - Installation and Upgrade/Install with PostgreSQL]]
- [[17 - Installation and Upgrade/Install with Oracle]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Prerequisites (#prerequisites)
- H2: Download and Extract (#download-and-extract)
- H2: Create OS User and Group (#create-os-user-and-group)
- H2: Create AES Key and Secrets (#create-aes-key-and-secrets)
- H2: Configure install.properties (#configure-installproperties)
- H2: Configure Tenants (#configure-tenants)
- H2: Run the Installation Script (#run-the-installation-script)
- H2: Verify Installation (#verify-installation)
- H2: Post-Installation (#post-installation)
- H2: Troubleshooting (#troubleshooting)
- H2: Notes (#notes)
- H2: Prerequisites (#prerequisites)
- H2: Configure Tenants During Installation (#configure-tenants-during-installation)
- H2: Configure Tenants After Installation (#configure-tenants-after-installation)
- H2: Delete Tenant Configuration (#delete-tenant-configuration)
- H2: Configure Clarity for OData (#configure-clarity-for-odata)
- H2: Verify the Tenant Integration (#verify-the-tenant-integration)

Use this topic to install the Clarity OData Service (OFast application) on Linux for accessing the Clarity Data Warehouse in on-premise environments. This procedure follows the same sequence of steps as the engineering installation guide and includes all required commands and configuration details.

This section contains the following topics:
- Prerequisites
- Download and Extract
- Create OS User and Group
- Create AES Key and Secrets
- Configure install.properties
- Configure Tenants
- Run the Installation Script
- Verify Installation
- Post-Installation
- Troubleshooting
- Notes

## Prerequisites

Before you begin, ensure that the following prerequisites are met:
- **Operating System**: A compatible Linux distribution, for example, RHEL 8.
- **Root or Sudo Access**: You require root or sudo privileges to install packages and configure the system.
- **Network Connectivity**: The server requires access to the internet to download required packages.
- **Required Packages**: Install the following packages on the server:

```
openssl-devel bzip2-devel libffi-devel zlib-devel gcc wget tar gzip make findutils curl libaio unzip postgresql-devel python3-devel msodbcsql18 mssql-tools18 unixODBC-devel
```
- **Python 3.12**: Python 3.12 is required.
- **Poetry**: Poetry 1.4.2 is required for dependency management. Use the following example to install Poetry:

```bash
export POETRY_HOME=/usr/local/poetry
curl -sSL https://install.python-poetry.org/ -o get-poetry.py
/path/to/python/bin/python3 get-poetry.py --version 1.4.2 --yes
```
- **Oracle Instant Client**: The Oracle Instant Client `instantclient-basiclite-linux.x64-21.14.0.0.0dbru` is required for database connectivity. For example:

```bash
curl -sSL https://download.oracle.com/otn_software/linux/instantclient/2114000/instantclient-basiclite-linux.x64-21.14.0.0.0dbru.zip -o instantclient-basiclite.zip
```

## Download and Extract

Download and extract the OData Service installer archive to a temporary directory.

**Follow these steps:**

1. Download the installer archive: `clarity_odata_install_<clarity_odata_version>.tar.gz`
2. Extract the file to a temporary directory. For example:

```bash
TEMP_SCRIPT_DIR=/tmp/clarity_odata_install
```

3. Navigate to the directory that contains the `install.sh` script.

## Create OS User and Group

Create the OS user and group that will run the Clarity OData Service. You must be a privileged user to create the user and group. You can skip these steps if you plan to run Clarity OData Service as a privileged user.

**Follow these steps:**

1. Run the following commands to create the group and user:

```bash
groupadd "${CLARITY_ODATA_USER_GROUP}"
useradd -g "${CLARITY_ODATA_USER_GROUP}" "${CLARITY_ODATA_USER}"
```

## Create AES Key and Secrets

Create an AES key and encrypted secrets that will be used for Clarity OData Service credentials and database passwords.

**Follow these steps:**

1. Navigate to the scripts directory:

```bash
cd <TEMP_SCRIPT_DIR>/scripts
```

2. Create and activate a virtual Python environment and install the `pycryptodome` library:

```bash
cd <TEMP_SCRIPT_DIR>/scripts
<Path to python 3.12.5> -m venv ./venv
source ./venv/bin/activate
pip install pycryptodome
```

3. Generate the AES key and encrypted secrets using the `aes_key_util.sh` script:

```bash
cd <TEMP_SCRIPT_DIR>/scripts
./aes_key_util.sh gen-key <your-passphrase>
./aes_key_util.sh enc-wkey <your-aes-key> <string-to-encrypt>
./aes_key_util.sh denc-wkey <your-aes-key> <encrypted-string>
```

Replace `<your-passphrase>`, `<your-aes-key>`, and `<string-to-encrypt>` with values specific to your environment.

4. When you are done, deactivate the virtual environment:

```bash
deactivate
```

## Configure install.properties

Use the `install.properties` file to control how the Clarity OData Service is installed.

Set the following properties in `install.properties`:

| Property | Description | Example |
|---|---|---|
| **INSTALL_DIR** | Directory where Clarity OData Service is installed. | `INSTALL_DIR=/opt/clarity/odata` |
| **CLARITY_ODATA_PORT** | Port on which the service listens. | `CLARITY_ODATA_PORT=8043` |
| **SSL_CERTFILE** | Path to the SSL certificate file. | |
| **SSL_KEYFILE** | Path to the SSL key file. | |
| **SSL_KEYFILE_PASSWORD** | Password for the SSL key file. | |
| **SEPARATE_CLEANUP** | Set to `false` to disable Page Cache cleanup. | |
| **CLARITY_ODATA_USER** | OS user that runs the service. | |
| **CLARITY_ODATA_USER_GROUP** | OS group for the service user. | |
| **MT_ADMIN_USER** | Admin username for the OData Service. | |
| **MT_ADMIN_PW** | AES encrypted admin password. | |
| **AES_KEY** | AES key used during installation. | |
| **CONFIG_DIR** | Directory where tenant configuration files are stored. | |
| **REGISTER_AS_SYSTEM_SERVICE** | Set to `true` to register the service using systemd. | |
| **RLS_ENABLED** | Enable Row Level Security (RLS). Set to `true` to enforce row-level data security based on tenant configuration. If not specified, RLS is treated as disabled. | `RLS_ENABLED=false` |
| **RLS_FULL_ACCESS_USER_GROUP** | Full access user group used when RLS is enabled. | `RLS_FULL_ACCESS_USER_GROUP=odata_full_access_group` |
| **RLS_NON_RLS_TABLES_ACCESSIBLE** | Allow non-RLS tables to be accessible by all users when RLS is enabled. | `RLS_NON_RLS_TABLES_ACCESSIBLE=true` |
| **RLS_FUNCTIONS_ACCESSIBLE_FOR_ALL** | Allow RLS functions to be accessible by all users. | `RLS_FUNCTIONS_ACCESSIBLE_FOR_ALL=true` |

## Configure Tenants

Tenants can be optionally configured during the Clarity OData Service installation process. For detailed steps, see OData Tenant Configuration on Linux (On-Premise Only).

## Run the Installation Script

Run the installation script to install the service and optionally register it as a system service.

**Follow these steps:**

1. If running with a non-privileged user, create the required directories and update ownership:

```bash
sudo mkdir -p /opt/ofast <INSTALL_DIR>
sudo chown -R <CLARITY_ODATA_USER>:<CLARITY_ODATA_USER_GROUP> /opt/ofast <INSTALL_DIR>
sudo chown -R <CLARITY_ODATA_USER>:<CLARITY_ODATA_USER_GROUP> .
```

2. Switch to the service user and run the script:

```bash
sudo su <CLARITY_ODATA_USER>
chmod +x install.sh
./install.sh
```

## Verify Installation

Verify that the Clarity OData Service is installed and running.

1. Check the installation log file:

```
<INSTALL_DIR>/logs/clarity_odata_install.log
```

2. Check service status:

```bash
sudo systemctl status clarity-odata
```

3. Verify the service is listening on the configured port:

```bash
lsof -i :<CLARITY_ODATA_PORT>
```

4. Access the service:

```
http(s)://<SYSTEM_DNS_OR_IP>:<CLARITY_ODATA_PORT>
```

## Post-Installation
- **Adding or Removing Tenants**: See OData Tenant Configuration on Linux (On-Premise Only).
- **Security**: Verify SSL configuration if HTTPS is enabled.
- **Uninstall**: Run `uninstall.sh` from `<INSTALL_DIR>` as a privileged user.

## Troubleshooting
- **Installation errors**: Review `<INSTALL_DIR>/logs/clarity_odata_install.log`.
- **Service start issues**: Review system logs using `journalctl -xe`.
- **Connectivity issues**: Verify port access and firewall rules.

## Notes
- The installation creates an `env.config` file in `<INSTALL_DIR>`.
- Restart the service after configuration changes.
- The `start.sh` and `stop.sh` scripts can be used for manual control.
- The `tenants_config` and `tenants_secret` directories store tenant files.
- The `scripts` directory contains supporting utilities.

---

# OData Tenant Configuration on Linux (On-Premise Only)

Use this topic to configure Clarity tenants for use with the OData Service in an on-premise Linux environment. The steps in this guide explain how to create tenant configuration files, update the required tenant secrets, integrate the OData service with Clarity PPM, and verify that the OData endpoints are available to Clarity users.

This section contains the following topics:
- Prerequisites
- Configure Tenants During Installation
- Configure Tenants After Installation
- Delete Tenant Configuration
- Configure Clarity for OData
- Verify the Tenant Integration

## Prerequisites

Before configuring tenants, ensure the following conditions are met:
- Review the Clarity OData Service OnPrem Installation Guide to install the prerequisites.
- Complete all steps in Install Clarity OData Service on Linux (On-Premise Only), including installation prerequisites, user setup, and service deployment.
- Verify that the Clarity OData Service is installed, registered, and running on your on-premise server.
- Ensure that you have access to the tenant examples shipped with the installer:
- `tenants_config_example/tenantA.config`
- `tenants_secret_example/tenantA.config`

> [!NOTE]
> Tenant configuration is optional for Clarity OData Service startup, but required for Clarity tenants to connect to OData endpoints.

## Configure Tenants During Installation

You can configure tenants before running the `install.sh` script. This method is recommended if you already know the Clarity tenants that will connect to OData. The installer reads these files and loads the tenant information during the installation process.

**Follow these steps:**

1. Navigate to the Clarity OData Service installer directory where the installation archive was extracted:

```bash
TEMP_SCRIPT_DIR=/tmp/clarity_odata_install
cd $TEMP_SCRIPT_DIR
```

2. Copy the example tenant configuration file into the active configuration directory:

```bash
cp tenants_config_example/tenantA.config \
   tenants_config/<your_clarity_tenant_name>.config
```

3. Copy the example tenant secret file:

```bash
cp tenants_secret_example/tenantA.config \
   tenants_secret/<your_clarity_tenant_name>.config
```

4. Update the tenant configuration file with the correct values for your Clarity tenant or instance:

```
tenants_config/<your_clarity_tenant_name>.config
```

5. Open the tenant secret file:

```
tenants_secret/<your_clarity_tenant_name>.config
```

Update the following fields:
- **MT_TENANT_ID**: Set this to the tenant name, for example, `<your_clarity_tenant_name>`.
- **DB_DWH_PW**: Set this to the AES-encrypted value of your Data Warehouse credentials password.

6. If you have multiple Clarity tenants or instances, repeat these steps for each additional tenant and update them with the appropriate values.
7. Continue with the remaining steps in the Clarity OData Service installation procedure.

## Configure Tenants After Installation

You can add new Clarity tenants after the Clarity OData Service has been installed. In this approach, you manually create the required tenant configuration and secret files directly in the Clarity OData Service installation directory.

**Follow these steps:**

1. Create a tenant configuration file in the multi-tenant configuration directory:

```
<INSTALL_DIR>/tenants_config/multi_tenant_config/<your_clarity_tenant_name>.config
```

Refer to the sample file: `tenants_config_example/tenantA.config`.

2. Create the tenant secret file in the multi-tenant secret directory:

```
<INSTALL_DIR>/tenants_config/multi_tenant_secret/<your_clarity_tenant_name>.config
```

Refer to: `tenants_secret_example/tenantA.config`.

3. After updating both files with the correct tenant values, restart the Clarity OData Service so that the new tenant information is loaded. For restart instructions, see the Notes section of Install Clarity OData Service on Linux (On-Premise Only).

## Delete Tenant Configuration

To remove a tenant from Clarity OData Service, delete both the tenant configuration file and the corresponding secret file. Clarity OData Service reloads the tenant list after a restart.

**Follow these steps:**

1. Delete the tenant configuration file from:

```
<INSTALL_DIR>/tenants_config/multi_tenant_config/<your_clarity_tenant_name>.config
```

2. Delete the tenant secret file from:

```
<INSTALL_DIR>/tenants_config/multi_tenant_secret/<your_clarity_tenant_name>.config
```

3. Restart the Clarity OData Service. For restart instructions, see the Notes section of Install Clarity OData Service on Linux (On-Premise Only).

## Configure Clarity for OData

Beginning in Clarity PPM 16.3.2, a new properties element named `<odataServer>` is used to configure the Clarity OData Service details. Update this section in the Clarity properties file to establish the connection between Clarity tenants and the Clarity OData Service.

**Follow these steps:**

1. Open the Clarity properties file located at:

```
<CLARITY_RUNTIME_DIR>/config/properties.xml
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
- **externalUrl**: The Clarity OData Service URL. Ensure that this URL is accessible from all Clarity tenant hosts that are required to be loaded.
- **internalUrl**: Optional. Generally not recommended for use in on-premise environments. Clarity attempts to connect to the Clarity OData Service using this URL when specified, or falls back to `externalUrl`.
- **odataTenantContextPath**: Must match the `MT_TENANT_ID` value in the tenant configuration file, for example, `<your_clarity_tenant_name>`.
- **odataAuthenticator**: Must match the `MT_ODATA_AUTHENTICATOR` value in the tenant configuration file.
- **adminUsername**: Clarity OData Service admin user.
- **adminPassword**: Clarity OData Service admin password.

4. Navigate to:

```
<CLARITY_RUNTIME_DIR>/bin
```

5. Set the correct `JAVA_HOME` and update the `PATH` environment variable to match the Java runtime used by the Clarity application.

6. Enable the OData capability:

```bash
admin toggle-feature ODATA_SERVICE_FEATURE 1
```

7. Repeat these steps for each Clarity tenant that must connect to the Clarity OData Service. Ensure that these tenants are already configured and loaded in the Clarity OData Service.

## Verify the Tenant Integration

After completing the configuration steps, verify that the Clarity OData Service has successfully loaded the tenant information and that Clarity can establish an OData connection.

**Follow these steps:**

1. Verify all tenants loaded into the Clarity OData Service:

```
<externalUrl>/$admin/$tenants
```

Log in with Clarity OData Service admin credentials when prompted.

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
- **Username**: `<clarity_login_username>|<OData_Authenticator>`
- **Password**: `<clarity_login_password>`

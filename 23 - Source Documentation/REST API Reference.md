# REST API Reference

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[16 - Development/_MOC Development|Development]]
- Canonical notes:
- [[16 - Development/REST API/Using REST APIs]]
- [[16 - Development/XOG/InvokeAction API]]
- [[16 - Development/XOG/Object API]]
- [[16 - Development/XOG/Query API]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Load Test Scenarios (#load-test-scenarios)
- H3: Detailed Load Test Results (#detailed-load-test-results)
- H2: REST API Overview (#rest-api-overview)
- H2: Getting Started with Clarity APIs (#getting-started-with-clarity-apis)
- H3: URI Structure (#uri-structure)
- H3: Authenticate and Authorize (#authenticate-and-authorize)
- H3: Make Your First API Call (#make-your-first-api-call)
- H2: REST API Authentication (#rest-api-authentication)
- H3: Authorization - Access Rights Required to Consume APIs (#authorization---access-rights-required-to-consume-apis)
- H3: Token-Based Authentication with Login and Logout API End Points (#token-based-authentication-with-login-and-logout-api-end-points)
- H3: Basic Authentication (#basic-authentication)
- H3: Key-Based Authentication (#key-based-authentication)
- H3: Using REST API Key in SSO Environments (On-Premise only) (#using-rest-api-key-in-sso-environments-on-premise-only)
- H2: Using Clarity REST APIs (#using-clarity-rest-apis)
- H3: Discover REST APIs (#discover-rest-apis)
- H3: Standard REST API Methods (#standard-rest-api-methods)
- H3: REST API Operations (#rest-api-operations)
- H3: Request Headers for REST APIs (#request-headers-for-rest-apis)
- H3: Query Parameters for REST APIs (#query-parameters-for-rest-apis)
- H3: Using OBS Attribute Filtering in REST APIs (#using-obs-attribute-filtering-in-rest-apis)
- H3: Using Static Dependent Lookups in REST APIs (#using-static-dependent-lookups-in-rest-apis)
- H3: Using Parameterized Dynamic Lookups (#using-parameterized-dynamic-lookups)
- H3: Using REST APIs for TSV Attributes (#using-rest-apis-for-tsv-attributes)
- H3: Using REST APIs for Financials Associated with Investments (#using-rest-apis-for-financials-associated-with-investments)
- H3: API Enable Custom Objects and Custom Investments (#api-enable-custom-objects-and-custom-investments)
- H3: API Enable Custom Attributes (#api-enable-custom-attributes)
- H3: Retrieve User Profile Information using API (#retrieve-user-profile-information-using-api)
- H3: Sample API Requests for Multiple Instances (#sample-api-requests-for-multiple-instances)
- H2: REST API Enhancements (#rest-api-enhancements)
- H3: Enhancements Introduced in 16.4.0 (#enhancements-introduced-in-1640)
- H3: Enhancements Introduced in 16.3.3 (#enhancements-introduced-in-1633)
- H3: Enhancements Introduced in 16.3.2 (#enhancements-introduced-in-1632)
- H3: Enhancements Introduced in 16.2.2 (#enhancements-introduced-in-1622)
- H3: Enhancements Introduced in 16.1.3 (#enhancements-introduced-in-1613)
- H3: Enhancements Introduced in 16.1.1 (#enhancements-introduced-in-1611)
- H3: Enhancements Introduced in 16.1.0 (#enhancements-introduced-in-1610)
- H3: Enhancements Introduced in 16.0.3 (#enhancements-introduced-in-1603)
- H3: Enhancements Introduced in 16.0.2 (#enhancements-introduced-in-1602)
- H3: Enhancements Introduced in 15.9.3 (#enhancements-introduced-in-1593)
- H2: REST API: Cross-Origin Resource Sharing (CORS) (#rest-api-cross-origin-resource-sharing-cors)
- H3: Introduction (#introduction)
- H3: Origins (#origins)
- H3: CORS Support in the REST API (#cors-support-in-the-rest-api)
- H3: CORS In Action: Clarity and CA Agile Central (#cors-in-action-clarity-and-ca-agile-central)
- H3: Configure CORS in On-Premise Environments (#configure-cors-in-on-premise-environments)
- H3: Edit a Configuration (#edit-a-configuration)
- H3: On-Premise Non-Production Development and Testing (#on-premise-non-production-development-and-testing)
- H3: Test App (#test-app)
- H3: Troubleshooting REST API Errors (#troubleshooting-rest-api-errors)

## Load Test Scenarios

The following numbered scenarios were used for performance validation of the REST API:

9. Update description and Select 0 users - rights granted 0
10. Update description and Select 0 users - rights granted 0
11. Update description and Select 1 users - rights granted 1
12. Update description and Select 1 user and remove 1 user - rights granted 1
13. Update description and Select 5 users - rights granted 5
14. Update description and Select 5 users and remove 5 - rights granted 5
15. Update description and Select 5 users - rights granted 10
16. Update description and Select 5 users and remove 5 users - rights granted 10
17. Update description and Select 10 users - rights granted 10
18. Update description and Select 10 users and remove 10 users - rights granted 10
19. Update description and Select 5 users - rights granted 15
20. Update description and Select 5 users and remove 5 users - rights granted 15
21. Update description and Select 10 users - rights granted 15
22. Update description and Select 10 users and remove 10 users - rights granted 15
23. Update description and Select 5 users - rights granted 20
24. Update description and Select 5 users and remove 5 users - rights granted 20
25. Update description and Select 10 users - rights granted 20
26. Update description and Select 10 users and remove 10 users - rights granted 20
27. Update description and Select 0 users - Deselect All - 5 - Rights revoked 5
28. Update description and Select 0 users - Deselect All 10 - Rights revoked 10
29. Update description and Select 0 users - Deselect All 10 - Rights revoked 20
30. Update description and Select 0 users - Deselect All 10 - Rights revoked 1
31. Update description and Select 0 users - Deselect All 10 - Rights revoked 15
32. Logout

### Detailed Load Test Results

The following file provides the 2,450-user load test results for each transaction: **Clarity 16.4.1 Load Tests**.

---

## REST API Overview

This section provides information about the REST APIs that Clarity exposes. You can use these APIs in client applications to pull from and push data to Clarity. The following resources can be accessed through the APIs:
- Project
- Roadmap
- Timesheets
- Financials
- Other resources

To view the list of APIs, see **Discover REST APIs for Clarity**. Learn more about Clarity APIs in the following sections.

---

## Getting Started with Clarity APIs

Clarity REST APIs expose Clarity data to be consumed by third-party client applications. The APIs enable authorized, external systems to perform CRUD operations on Clarity through REST methods. The current API version is **v1**.

### URI Structure

The URIs for Clarity REST API resources have the following format:

```
http://<ClarityHostName>:<Port>/ppm/rest/version/context/api-name
```

Examples:

```
http://clarity.xyz.com:8080/ppm/rest/v1/projects
http://clarity.xyz.com:8080/ppm/rest/v1/auth/login
```

In the above examples, `project` and `login` are API names and `auth` is an optional resource context.

### Authenticate and Authorize

You can use your Clarity user account to authenticate. However, you need the **API-Access** right to use the APIs. Click here to view a short animation that shows how your administrator can assign this access to you.

APIs leverage the same access rights that your user account has on Clarity UI. For example, if you are able to view, create, and edit projects in the UI, you will be able to perform these operations using the APIs too. Use one of the following authentication types to use Clarity APIs:
- **Basic authentication**
- **Token-based authentication**
- **Key-based authentication**

> [!NOTE]
> If your organization is using SSO for Clarity, you must use key-based authentication. In this section, we will use basic authentication to keep things simple.

### Make Your First API Call

Let us try to retrieve the first ten projects in alphabetical order. Ensure that you have permission to read project data. Click here to view a short animation that shows how to make your first API call.

Follow these steps to access the Project API:

1. Open a REST Client and call the following Project API:
   ```
   GET http://<ClarityHostName>:<Port>/ppm/rest/v1/projects?limit=10&sort=name
   ```
2. In the **Authorization** tab, select **Basic Auth** and specify your credentials.
3. Send the request.

The response body lists the first ten projects in alphabetical order. Click here to view the sample response.

```json
{
  "_pageSize": 10,
  "_self": "http://<ClarityHostName>:<Port>/ppm/rest/v1/projects?sort=name&limit=10",
  "_totalCount": 50,
  "_next": "http://<ClarityHostName>:<Port>/ppm/rest/v1/projects?sort=name&limit=10&offset=10",
  "_results": [
    {
      "_internalId": 5001125,
      "code": "PR1001",
      "name": "4G Upgrade Readiness",
      "_self": "http://<ClarityHostName>:<Port>/ppm/rest/v1/projects/5001125"
    },
    {
      "_internalId": 5000003,
      "code": "csk.appChange",
      "name": "Application Change Template",
      "_self": "http://<ClarityHostName>:<Port>/ppm/rest/v1/projects/5000003"
    },
    {
      "_internalId": 5000002,
      "code": "csk.appCOTS",
      "name": "Application COTS Template",
      "_self": "http://<ClarityHostName>:<Port>/ppm/rest/v1/projects/5000002"
    }
  ]
}
```

Congratulations! You have completed your first hands-on trial with Clarity APIs. If you do not have the permission to access Projects, use one of the following methods to view the list of all public APIs. You can then perform a basic GET operation on the objects to which you have access.

Send the following request URL in the REST client to fetch a list of Clarity APIs:

```
http://<ClarityHostName>:<Port>/ppm/rest/v1/describe
```

Alternatively, use the Swagger UI in the following URL to view the interactive API documentation:

```
http://<ClarityHostName>:<Port>/niku/rest/describe/index.html
```

---

## REST API Authentication
- Authentication and API Keys
- Authorization - Access Rights Required to Consume APIs
- Token-Based Authentication with Login and Logout API End Points
- Basic Authentication
- Key-Based Authentication
- Using REST API Key in SSO Environments (On-Premise only)

Clarity REST APIs support the following methods for authenticating user requests:
- **Token-based authentication** - This method lets you obtain the authentication token for a session, and pass the token for subsequent API requests. The token remains active until the session ends.
- **Basic authentication** - This method lets you pass the user credentials in base64 encoding, with every API request. We recommend that you use this method for testing purposes.
- **Key-based authentication** - This method lets you generate an API key based on a user's credentials, access rights, and status settings. Use this method for integrating Clarity with other client applications or if you have SSO implementation for Clarity.

### Authorization - Access Rights Required to Consume APIs

Irrespective of the authentication method you choose, you need the following access rights to use the APIs:
- **API-Access** - Ensure that you have this access right to be able to send requests to the Clarity APIs.
- **Functional access rights** - Ensure that you have appropriate access rights to view or update the specific functional areas in the product. For example, if you have the API - Access right but do not have the Projects - Create access right, your POST request for the Project resource will return a 401 unauthorized error message.

### Token-Based Authentication with Login and Logout API End Points

The Login and Logout API endpoints are used to implement token-based login. You can access the endpoints using `/auth` context.

#### Generate the Token using Login API

The Login API requires you to pass the user name and password in a basic authentication header with Base64 encoding. The API returns an authorization token that can be passed as a header parameter to identify the user in subsequent REST calls to Clarity.

**Request URL:**

```
POST http://<servername>:<port>/ppm/rest/v1/auth/login
Authorization: Basic YWRtaW46YWRtaW4=
```

**Response Body:**

The response body includes the `authToken` that can be passed to subsequent API requests:

```json
{
  "authToken": "5096019__059A218A-360D-455B-8E6C-7625B7500A4A",
  "_self": "http://<servername>:8080/ppm/rest/v1/auth/login"
}
```

#### Use the AuthToken to Make a REST Call

After the `authToken` is generated, you can use it to call the resources that you have access to. In the REST client, pass the `authToken` in the **Authorization** header.

#### Delete the Token Using Logout API

The Logout API invalidates an auth token and prevents the user from making further calls using the token.

**Request URL:**

```
DELETE http(s)://<servername>:<port>/ppm/rest/v1/auth/logout
Header: Name = authToken, value = <authToken value from login>
```

If the request is successful, you will get a blank response body with a response code as **200**.

### Basic Authentication

For Basic authentication, provide the username and password with Base64 encoding for every REST API request.

### Key-Based Authentication

Key-based authentication uses a personal API key that is generated for a specific client based on a user's SSO credentials, access rights, and status settings. Key authentication eliminates the need to generate and pass credentials or token for every session.

Use key authentication in the following scenarios:
- You want to integrate data between Clarity and other client applications. Integration architectures can allow users to authenticate through the REST API and accomplish certain Clarity actions without going into the user interface.
- Your Clarity instance is using SSO for authentication. For example, Rally integration could make webhook calls to read Clarity project data personalized for the current user. For project managers, third-party integration could read and update resource allocation data in Clarity based on external application triggers such as other users updating a JIRA Kanban board.

The process of generating and using the API key for authentication involves the following steps:

1. **Administrator:** Create an Integration User and Grant Access Rights
2. **Administrator:** Enable API Key Authentication
3. **Administrator:** Define REST API Client Applications
4. **API Developer:** Generate API Key for your Client
5. **API Developer:** Use the API Key to Integrate with the Client

#### Administrator: Create an Integration User and Grant Access Rights

To access Clarity data from another application, the API developers will require an integration account with the appropriate access rights. For information on creating user accounts, see the **Create a New User** section.

The integration user must have the following access rights:
- **API-Access**
- **Functional access rights** - For example, if the developer is trying to read the project data from Clarity and display it in their application, the integration user needs to be given read access to Projects. For more information, see **Clarity Access Rights Reference** in the Reference section.

After you have created the user account and granted access rights, send the user information to the developer.

#### Administrator: Enable API Key Authentication

Key-based authentication is disabled by default. As a Clarity administrator, enable key-based authentication so that your API developers can generate API keys and use it for authentication.

> [!NOTE]
> If you are using the Clarity SaaS, non-GCP environment, open a support ticket to enable the API Key authentication feature in your environment. If you are on the GCP environment, follow the steps below to enable the feature.

Follow these steps:

1. In Classic PPM, click **Administration**, **General Settings**, **System Options**.
2. Scroll down to the **API** section and specify the following configuration:
- Select **Enable API key-based access**. If you clear this option later, users can no longer generate API keys and all the existing keys are invalidated.
- Change the value in the **Salt for Encrypting API Keys** field. By default, each new installation receives a preset salt value for key encryption. We recommend that you change the value after an installation or upgrade to satisfy the security requirements in place at your organization.

> [!TIP]
> Be careful to minimize future changes to the salt field. If you change the salt value after the keys are created, you must regenerate all the keys.
- Set the expiration limit for the API keys in the **Maximum expiration in days for API keys** field. You can adjust the default value of 90 days to set your own maximum number of days. The value that you set determines the maximum possible duration or lifespan for each active key from its creation date. When a user generates a key, they will have an option to set the **Expiration Date** for that specific key, but it cannot exceed the limit set in this field. Keys expire automatically when the expiration date arrives.
- In the **Maximum number of keys allowed per user** field, specify the maximum number of active keys that a user can generate for all clients defined in the system. For any single client, no more than 20 keys can be created and stored for each user.
3. Click **Save**.

#### Administrator: Define REST API Client Applications

Define a client for each application that you want to integrate with Clarity. This process helps Clarity to allow only authorized clients to access data through REST APIs.

Follow these steps:

1. Log in to Clarity.
2. In the main menu, click **Administration**.
3. Click **Authentication & Keys**.
4. Click **CLIENTS**.
5. Click **Add Row** to define a new client.
   a. Specify a unique identifier and name for the client application that you want to integrate.

Key points:
- Your client ID must be passed with the API key in future REST API calls.
- This release does not support deleting a client. Instead, you can deactivate it.
- If you clear the **Active** checkbox, the client is now inactive and all keys created by all users for that client are temporarily disabled. Users cannot generate new keys while a client is disabled. When the administrator reactivates the client, the previous keys start working again.

#### API Developer: Generate API Key for your Client

REST API keys serve as tokens that permit authorized users to exchange data between Clarity and a pre-defined client application. As a developer, you can use the integration user account that your administrator had created, for generating the keys.

> [!NOTE]
> At any given time, each authorized user can only store up to 20 active keys for each client. The maximum number of keys that a user can generate across clients is defined in the **Maximum number of keys allowed per user** field in System Options.

Follow these steps:

1. Log in to Clarity using the integration user account.
2. Click the name and avatar image in the top-right corner. The application menu appears.
3. In the application menu, click **API KEYS**.
4. On the **API Keys** page, click **New Row**.
   a. In the required **Access Type** field, select the type of access you want to allow with this key:
- **All Access:** All Access means that the key authorizes each user to perform the maximum amount of functionality as determined by their Clarity access rights. Even users with Delete access rights on one or more objects (such as projects or resources) cannot delete items through an integration unless they have an All Access key.
- **Read/Edit:** This type of access allows users to read, create, and update Clarity data.
- **Read-Only:** With this access type, users can only read data in Clarity; they cannot make any changes.
   b. In the **Client** field, select an integrated client application to pair with this API key. Get the client name for your applications from your administrator.
   c. Enter a required **Name** for this integration (key-client pair) and an **Expiration Date** for the key. This date cannot exceed the global expiration limit set by the administrator. The system prompts you if you exceed the limit.
   d. The application selects the **Active** checkbox for you. You cannot disable a key.
   e. The application fills in your name in the **Owner** field. You cannot change the owner.

5. After all required fields are complete, your API key appears.

> [!WARNING]
> This exclusive appearance of the New API Key modal pop-up is the one and only time you can view and copy your key.

6. Click **COPY KEY**.

> [!NOTE]
> Also make a note of the Clarity server URL and your Client ID for this key. If you have a credentials application or secure password database, you can use it to store your server URL, client ID, and API key. You may also want to make a note of the expiration date. If you paste your key into a temporary application such as Notepad, be sure to use it in your client application.

Key points about API keys:
- Keys are self-contained entities and include their associated client, owner, expiration date, and user access type.
- Keys in queries run in the context of their owner. Clarity access rights for the owner apply dynamically and are loaded from the database for each instance of a REST API call.
- Keys are only available once. If you lose a key, regenerate a new one.
- Keys are not stored in the database. Only the metadata about the key is available in the database.
- Keys from Company A cannot be used with the Clarity server for Company B. The encrypted keys contain their own key-level salt codes for added security.

> [!TIP]
> When you refresh a Clarity SaaS hosted instance (for example, from staging to production), the key metadata moves from the source environment to your new target environment; however, the keys from the previous environment no longer work. A new salt value takes the place of any older value and only new keys will work. As part of your post-refresh cleanup activities, administrators must manually delete the old keys for users. Another option is to deactivate the client for those old keys. Then, create new clients and keys.

#### API Developer: Use the API Key to Integrate with the Client

After you have generated the API key, you can use it to securely access Clarity data from the client.

> [!NOTE]
> If you have a Clarity On-Premise setup with SSO, review the **Using REST API Key in SSO Environments (On-Premise only)** section before you perform the steps in this section.

Follow these steps:

1. Keep the following information handy:
   a. Client ID
   b. API Key
   c. Clarity URL
   d. REST API object path. For example, `http://clarity.xyz.com:8080/ppm/rest/v1/projects`

2. To verify the calls, use a REST client with the following settings:

| Setting | Parameter | Value |
|---------|-----------|-------|
| Basic REST Structure | Method | `GET` |
| | Request URL | `http://<ppm_server>:<port>/ppm/rest/v1/<object_class>` Example: `http://clarity.xyz.com:8080/ppm/rest/v1/projects` |
| Headers | x-api-ppm-client | `<my_client_ID>` |
| | Authorization | `Bearer <MY_REST_API_KEY>` |
| | Content-Type | `application/json` |

3. Click **Send**.
4. Verify that the response Status shows **200 OK**.

The following two screenshots show an example of a REST API GET call for a list of projects using Postman.

> [!TIP]
> In Postman, set the **Authorization Type** to **Bearer Token** and paste your key into the **Token** field.

The following image shows a similar example using Advanced REST Client.

The following sections show the request headers for an integration call with a client named `CLIENT_MY-APP-2`:

**Request Header:**

```
x-api-ppm-client: CLIENT_MY-APP-2
Authorization: Bearer J0eXAiOiJKV1QiLCJhbGciOiJeyJzdWIiOiJhZG1pbiIs...0MTU2NTMyMzIwMCwCcUxxvX260ObmURVRzzY
```

**Response Body:**

```json
{
  "_pageSize": 25,
  "_self": "https://ppmstage02:8043/ppm/rest/v1/projects",
  "_totalCount": 50,
  "_next": "https://ppmstage02:8043/ppm/rest/v1/projects?offset=25",
  "_results": [
    {
      "_internalId": 5012672,
      "code": "csk.appChange",
      "name": "Application Change Template",
      "_self": "https://ppmstage02:8043/ppm/rest/v1/projects/5012672"
    },
    {
      "_internalId": 5013763,
      "code": "PR1027",
      "name": "Data Warehouse Performance Tuning",
      "_self": "https://ppmstage02:8043/ppm/rest/v1/projects/5013763"
    }
  ]
}
```

### Using REST API Key in SSO Environments (On-Premise only)

Some of the key points you need to remember while using API keys in an SSO environment are:
- You should make REST calls to Clarity by using the `http://hostname:port/tokens/rest/v1` request. The `/tokens` parameter works only in an SSO environment. When you use the `/tokens` parameter in an SSO environment, Clarity adds additional headers to force token-based authorization and then forwards the request to `/ppm/rest` thus allowing access to the same REST API endpoints.
- You need to create a new SSO policy to ensure that any request directed to the `http://hostname:port/tokens/rest/v1` endpoint is not protected. This will allow requests that use tokens to bypass SSO and enable users to be authenticated based on Clarity API keys.
- Unprotecting the `http://hostname:port/ppm` endpoint will not enable you to use REST APIs and API keys in an SSO environment.

---

## Using Clarity REST APIs

Clarity REST API web services deliver online data and functionality over a system of Uniform Resource Identifiers (URIs), typically through a series of web links. You can use Clarity REST APIs to leverage the power of Clarity by integrating it with our products, build your user interface to interact with Clarity's functionality, and bring data in and out of Clarity.

> [!WARNING]
> Disclaimer: Clarity only supports public REST APIs that are listed in the interactive REST API documentation.

Topics covered in this section:
- Discover REST APIs
- Standard REST API Methods
- REST API Operations
- Request Headers for REST APIs
- Query Parameters for REST APIs
- Using OBS Attribute Filtering in REST APIs
- Using Static Dependent Lookups in REST APIs
- Using Parameterized Dynamic Lookups
- Using REST APIs for TSV Attributes
- Using REST APIs for Financials Associated with Investments
- API Enable Custom Objects and Custom Investments
- API Enable Custom Attributes
- Retrieve User Profile Information using API
- Sample API Requests for Multiple Instances

### Discover REST APIs

You can discover the public REST APIs supported by Clarity by:

1. Reviewing the interactive REST API documentation in Clarity
2. Using the "describe" URL to discover APIs in Clarity

#### Review the Interactive REST API Documentation in Clarity

The link to the interactive REST API documentation for your system is specified in the **API** section of the **System Options** page.

> [!NOTE]
> You can access the interactive REST API documentation only when you have the **API - Access** right.

Follow these steps:

1. Click **Administration**, **General Settings**, **System Options**.
2. In the **API** section, review the following fields:
- **REST API Status** - Specifies whether the REST API infrastructure is enabled for the system. If the **Disable Rest API Access** option is checked in CSA, the REST API status is disabled. SaaS customers should contact Broadcom Support to enable or disable the REST APIs. By default, the REST API infrastructure is enabled.
- **API URL** - Defines the URL for accessing the REST APIs.
- **API Documentation URL** - Defines the URL for accessing the REST API reference documentation.

> [!NOTE]
> You can click the highlighted blue icon to learn more about using the interactive REST API documentation available with Clarity.

#### Use the "describe" URL to Discover APIs

You can discover supported APIs by appending `/describe` to the API URL specified in the **API** section to view the list of supported public APIs for Clarity.

Example: If the base URL for a system is `http://<hostname>:<port>/ppm/rest/v1`, you can use the following request with the GET operation in an API Development tool like Postman to view the list of supported APIs:

```
http://<hostname>:<port>/ppm/rest/v1/describe/
```

You can also use `/describe/{resourceName}` to return a JSON representation of the metadata for a specific resource. The response includes metadata for the resource (such as supported HTTP methods) and metadata for the API enabled attributes of the resource.

Example: You can use the following GET operation to see the metadata for the API enabled attributes for the Project object:

```
http://<hostname>:<port>/ppm/rest/v1/describe/projects
```

You can review the details in the response to understand the various HTTP methods supported by the project object. You can also scroll down to review the various attributes associated with the project object. Some of the details you would be able to learn about each attribute are:
- Data Type
- Mandatory or optional
- Attribute Label
- Read-only or editable

All these details are extremely useful when you want to understand the metadata associated with objects and attributes.

### Standard REST API Methods

You can use REST APIs to develop web applications because REST APIs support CRUD (create, retrieve, delete, and update) operations. You can use a set of HTTP methods known as HTTP verbs to perform CRUD operations. Let's review the different methods supported in Clarity.

> [!NOTE]
> Remember to review the **REST API Authentication** topic to ensure that you can use the GET, POST, PUT, PATCH, and DELETE methods successfully.

**GET:** You can use it to retrieve resources and not modify any information. A GET request never changes the state of a resource.

Example 1: Get the list of all the projects on the system:

```
http://<hostname>:<port>/ppm/rest/v1/projects
```

Example 2: Get detailed information about a project with the internal id 5002013:

```
http://<hostname>:<port>/ppm/rest/v1/projects/5002013
```

**POST:** You can use a POST request to create new resources in the system.

Example: Use the following POST method and enter the project name and project ID in the body to create a new project (single POST):

```
http://<hostname>:<port>/ppm/rest/v1/projects/
```

**PUT:** You can use PUT to update existing resources. Remember that when you use a PUT request, you need to enter details for the complete REST resource that you want to update.

> [!NOTE]
> - You can use the header `x-api-force-patch=true` to use PUT as PATCH.
> - There is a batch size limit of 50 when using a PUT operation.

**PATCH:** You can use a PATCH request to make a partial update on a resource.

Example: Use the following PATCH method and enter the new project name in the body to update the name of the project whose internal ID is 5052000:

```
http://<hostname>:<port>/ppm/rest/v1/projects/5052000
```

**DELETE:** You can use the DELETE requests to delete resources.

Example: Use the following DELETE method to delete a specific task from a specific project. In this scenario, 5052000 is the internal ID of the project and 5090001 is the internal ID of the task:

```
http://<hostname>:<port>/ppm/rest/v1/projects/5052000/tasks/5090001
```

### REST API Operations

Clarity REST APIs support numerous API operations for various Clarity Objects. Check the tables given below to validate if the operation you want to perform is supported.

> [!NOTE]
> Please use the Clarity Interactive REST API documentation to view the latest supported APIs and associated operations.

#### General API Calls

| Resource | GET | POST | PATCH | PUT | DELETE |
|----------|-----|------|-------|-----|--------|
| login | Yes | Yes | | | |
| logout | | | | | |
| attachments | Yes | | | | Yes |
| lookupValues | Yes | | | | |
| timePeriods | Yes | | | | |
| describe | Yes | | | | |
| Integration | Yes | Yes | Yes | Yes | Yes |

#### Project API Calls

| Resource | GET | POST | PATCH | PUT | DELETE |
|----------|-----|------|-------|-----|--------|
| project | Yes | Yes | Yes | Yes | |
| tasks | Yes | Yes | Yes | Yes | Yes |
| todos | Yes | Yes | Yes | Yes | Yes |
| assignments | Yes | Yes | Yes | Yes | Yes |
| projectStatusReports | Yes | Yes | Yes | Yes | |
| benefitPlans | Yes | Yes | | | Yes |
| costplans | Yes | Yes | | | Yes |
| costplandetails | Yes | Yes | | | Yes |
| issues | Yes | Yes | Yes | Yes | Yes |
| changes | Yes | Yes | | | |
| risks | Yes | Yes | | | |

> [!NOTE]
> To create, update, or retrieve project status reports, install the PMO Accelerator add-in.

#### Resource/Timesheet API Calls

| Resource | GET | POST | PATCH | PUT | DELETE |
|----------|-----|------|-------|-----|--------|
| timesheets | Yes | Yes | Yes | Yes | Yes |
| timeEntries | Yes | Yes | Yes | Yes | Yes |
| timesheetNotes | Yes | Yes | Yes | Yes | Yes |
| timeEntryNotes | Yes | Yes | Yes | Yes | Yes |
| teams | Yes | Yes | Yes | Yes | |
| teamdefinitions | Yes | Yes | Yes | Yes | |
| teamdefallocations | Yes | Yes | Yes | Yes | |
| resources | Yes | Yes | Yes | Yes | Yes |

#### Roadmap/Custom Investment API Calls

| Resource | GET | POST | PATCH | PUT | DELETE |
|----------|-----|------|-------|-----|--------|
| roadmaps | Yes | Yes | Yes | Yes | |
| roadmapItems | Yes | Yes | Yes | Yes | |
| roadmapDependencies | Yes | Yes | | | Yes |
| scenarios | Yes | Yes | Yes | Yes | |
| scenarioTargets | Yes | | Yes | Yes | |
| \<Custom Investment\> | Yes | Yes | Yes | Yes | |

> [!NOTE]
> For data lookup values and error messages, the REST APIs support all the languages supported by Classic PPM. However, for metadata, the label and resource description are available in end-user's localized language. The remaining are supported in English language. The default language for the end-user is the language selected in the Classic PPM account settings.

### Request Headers for REST APIs

| Header | Value | Method | Description |
|--------|-------|--------|-------------|
| **Content-Type** | `application/JSON` | Required | Base64 encoded username/password. |
| **Authorization** | `Basic YWRtaW46YWRtaW4=` | Required | Base64 encoded username/password. |
| **x-api-force-patch** | `true` | PUT | In cases where network infrastructure blocks the PATCH request, PUT can be used to update an existing resource without passing all the attributes. In order for PUT to behave as PATCH, include this header in the request. |
| **x-api-full-response** | `true` | POST, PUT, PATCH | For performance reasons we do not return full responses for these requests, passing this header will return the full object in the response. |

### Query Parameters for REST APIs

All query parameters listed below are supported for GET requests for a resource list. Remember that `fields` is the only query parameter supported for a GET request for only a single resource.

| Parameter | Example | Description |
|-----------|---------|-------------|
| **offset** | `projects?offset=100` | The record range for results in context to the limit value. The default value is 0 and cannot be larger than the total number of records. |
| **limit** | `projects?limit=50` | Limits the number of results to be returned. The default value is 25. |
| **sort** | `projects?sort=code desc` or `projects?sort=name,code desc` | Determines the order of the data returned. The default order is asc. |
| **fields** | `projects?fields=name,isActive` | Determines the attributes that will be part of the response. |
| **filter** | `projects?filter=(isActive = true)` | Limit the returned resource to those that match the filter expression. |
| **links** | `projects?links=true` | The links array contains the URLs to access all associated lookups for a single GET resource. |
| **expand** | `projects/5000001?expand=(tasks=(fields=(code,startDate,costType)),teams)` | The expand query parameter in URL indicates that resources associated with the REST resource must be represented inline within the response. |
| **tsvParams** | `projects/5000001/teams/5020501&tsvParams=(periods=(...),(...)),(workEffortUnit=fte)` | The general form of the periods parameter is: `(alias1, type1, numberOfPeriods1, startDate1, [calendarType1])`, where alias is the API alias of the tsv attribute. |

> [!NOTE]
> Please review the interactive REST API documentation and click the blue icon to read more about query parameters, query expressions, and query value formats supported for REST APIs.

### Using OBS Attribute Filtering in REST APIs

When we associate an OBS to a Clarity object, an attribute gets created in the object. The OBS filter expression has OBS attribute API alias, operator and value. You can use the following syntax:

```
(obsAttributeAPIAlias in ((unitId1,unitId2,unitId3), 'U'))
```

Example:

```
(deptObs in ((5000001,5000002,5000003), 'U'))
```

#### Syntax Rules for Using OBS Attribute Filtering
- We can always filter by OBS attribute with OBS units and mode.
- OBS filter supports the use of only the `IN` operator. Any operator other than this will result in 'invalid filter operator' error.
- OBS filter value should be enclosed in open and closed parenthesis.
- `unitId1`, `unitId2`, and `unitId3` are the OBS unit ids. We can give a single unit Id or multiple unit Ids separated by a comma.
- The mode can be `'U'`/`'UA'`/`'UD'`, which are the short forms of 'UNITS'/'UNITS AND ANCESTORS'/'UNITS AND DESCENDANTS' respectively. They are case sensitive.

> [!NOTE]
> OBS filters can be used with other attribute filters. Example:
> ```
> ((deptObs in ((5000001,5000002,5000003), 'U')) and (is_active != false))
> ```

#### Staff OBS Filtering

Staff OBS is an attribute of type number and extendedType lookup in Team object, which is different from normal OBS attribute.

Example:

```
(staffObsUnit in ((5000001,5000002,5000003), 'UA'))
```

### Using Static Dependent Lookups in REST APIs

Static Dependent Lookups are supported with REST APIs. In order to access the values of a static dependent lookup, you must pass two mandatory filter parameters `entryType` and `exitType`, and optionally a `parentLookup` parameter.

Example:

```
lookups/INV_TYPE/lookupValues?filter=((entryType = 'INV_PROCESS_TYPE') and (exitType = 'INV_STAGE_TYPE'))
```

### Using Parameterized Dynamic Lookups

You can use the Parameterized Dynamic Lookups feature using an API. You can find the lookup parameter mapping information from the `lookupParameters` section in the `describeAttributes` API. It contains parameters name and dependent attribute's API ID.

**Sample describeAttributes API response for an attribute of parameterized dynamic lookup:**

```json
{
  "dataType": "string",
  "isMultiValued": false,
  "lookupParameters": {
    "param_department_code_constrain": "departmentCode",
    "param_proj_id_constrain": "_internalId"
  },
  "lookupType": "dynamic",
  "lookupCode": "LOOKUP_PARAM_LOC_ID",
  "extendedType": "lookup",
  "name": "locationCode"
}
```

**Sample lookup API URLs:**

```
lookups/OBJ_IDEA_PROJECT_CATEGORY_PARAM/lookupValues?filter=((searchText startsWith '%') and (param_type_constrain = 'type100'))
```

```
lookups/LOOKUP_PARAM_LOC_ID/lookupValues?filter=((searchText startsWith '%') and (param_department_code_constrain = 'Development') and (param_proj_id_constrain = 5001125))
```

You can search for the parameterized dynamic lookups through the `searchText` filter parameter. It returns the values containing the user entered text in its `displayValue`.

Example:

```
lookups/OBJ_IDEA_PROJECT_CATEGORY_PARAM/lookupValues?filter=((searchText startsWith '%hy') and (param_type_constrain = 'type100'))
```

Validations applicable for parameters that dynamic lookup expects:
- To access the values of a parameterized dynamic lookup, it's important that the API call must pass values for the parameters that the dynamic lookup expects. If not, the parameter is considered as NULL.
- If a dependent attribute is not API enabled, the `describeAttributes` API returns a NULL dependent attribute API ID. User can then pass a value for that parameter as NULL with the lookup API call.
- If the parameter that the dynamic lookup expects is incorrect, the response is an error message.

### Using REST APIs for TSV Attributes

A TSV attribute is supported when you use REST APIs in Clarity. Let's review a couple of examples where you want to see the `allocationCurve` of a team instance on a project.

```
http://host/ppm/rest/v1/projects/5000001/teams?fields=allocationCurve,requirementName,bookingStatus
```

```
http://host/ppm/rest/v1/projects/5000001/teams/5020501
```

Both requests will return the `allocationCurve` TSV value in the response. Since `allocationCurve` is defined as a TSV, the response will contain the sum of the TSV over the entire span of the TSV.

#### Optional Formatting Parameters for TSV Output

When you get TSV attributes as an output with REST APIs, it can be formatted in three distinct ways:
- The total 'sum' of the attribute can be formatted as 'hours' or 'fte'.
- The attribute's time-varying data can be included and formatted to specific fiscal periods.
- The attribute's time-varying data can be included in the 'raw' format, matching exactly how it's stored in the curve.

All of these options are activated via the `tsvParams` parameter.

### Using REST APIs for Financials Associated with Investments

#### For Cost Plans

Since cost plans are associated with investments in Clarity, you need to pass a mandatory filter parameter `investmentId`. Also, to differentiate between cost plans and budget plans, you also need to pass the `planType` mandatory filter parameter in the GET request. The value of the `planType` filter parameter should be `FORECAST` for cost plans and `BUDGET` for budget plans.

Example: Get a list of all the cost plans associated with an investment whose investment ID is 5002007:

```
http://<hostname>:<port>/ppm/rest/v1/costPlans?filter=((investmentId = 5002007) and (planType = 'FORECAST'))
```

#### For Budget Plans

Since Clarity does not have a separate Budget Plan object, you can use the following GET request to get a list of all the budget plans associated with an investment whose investment ID is 5002007:

```
http://<hostname>:<port>/ppm/rest/v1/costPlans?filter=((investmentId = 5002007) and (planType = 'BUDGET'))
```

In case you want to get all the details associated with a single cost plan or budget plan, you can use the following GET request. In this case, 5011006 is the internal ID of your target cost plan or budget plan:

```
http://<hostname>:<port>/ppm/rest/v1/costPlans/5011006
```

#### For Benefit Plans

For benefit plans in Clarity, you need to pass the mandatory filter parameter `investmentId`.

Example: Get a list of benefit plans associated with an investment whose investment ID is 5001054:

```
http://<hostname>:<port>/ppm/rest/v1/benefitPlans?filter=(investmentId = 5001054)
```

### API Enable Custom Objects and Custom Investments

You can API-enable custom master objects, custom and stock sub-objects, and custom or stock virtual attributes so that they are available in Clarity. You can use Classic PPM or XOG to set the API-enabled flag.
- **Custom master object:** You can API enable a custom master object from the studio or using XOG. The API alias will be auto-generated for the API enabled custom master object.
- **Custom Subobjects:** You can API enable a custom subobject if it belongs to a Project or investment (or supported abstract objects) or an API enabled custom master object.
- **Custom Investment Objects:** You can create a custom master object with an investment extension. Your custom investment objects are API enabled by default as part of Clarity. Other types of custom master objects cannot be API enabled.

> [!NOTE]
> The only significant difference while using REST APIs for custom objects and custom investments is that the extension parameter is `null` for custom objects and `inv` for custom investments.

> [!NOTE]
> The request-response format for custom objects and custom investment objects is consistent with out-of-the-box objects. The REST API for a custom object with API Alias `custAccounts` can be used exactly like a project object.

```
http://<hostname>:<port>/ppm/rest/v1/custAccounts/"id"/"subObject"/"id"
```

### API Enable Custom Attributes

When you create a custom attribute, you must API enable the attribute to make it available in Clarity. This setting will also let you access the attribute through API calls.

Follow these steps:

1. Log in to Classic PPM.
2. Navigate to **Administration**, **Studio**, **Objects**.
3. Search for the object (such as Project) that has the custom attribute.
4. Open the object and navigate to the **Attributes** tab.
5. Search for the custom attribute and click to open.
6. Specify a unique ID in the **API Attribute ID** field. The value must begin with a lowercase letter and an underscore. For example, `p_uploadImage`.

> [!TIP]
> The API Attribute ID is the reference key for an attribute that appears in the result set of an API call. To identify your custom attributes and validate the uniqueness, we recommend that you prefix your API Attribute IDs with a consistent short string. Making your API Attribute IDs unique prevents conflicts during a future upgrade when new attributes are introduced. For example, ACME Corporation can assign the following unique API Attribute ID to its Compliance attribute: `p_acmeCompliance`. We also recommend that you use Camel Case notation to name your custom attributes.

7. Save the changes.

The attribute is enabled for API access and is also made available in Clarity. You can configure the attribute to be visible in the **Board Layout**, **Grid Layout**, and **Detail Panel**. To view the attribute in the Properties page, configure the blueprint of the object. For more information, see the **Edit a Blueprint** section.

The following custom attribute data types are **not** supported for the REST APIs:
- Time-Varying

Also, the following project attributes that are available with the product as a default are **not** accessible by the REST APIs:
- Page Layout

The interactive REST API reference documentation allows you to query the attributes that the REST APIs support. You can also query your custom attributes.

### Retrieve User Profile Information using API

You can retrieve the user profile information of the logged-in user using a REST API. You can use the profile information to personalize the experience for the user such as displaying a personalized message on the UI, set the language preference of the user, and so on.

> [!NOTE]
> The logged-in user must have the **API-Access** permission for this API to work.

Use the following API:

```
GET http://ClarityHostName:Port/ppm/rest/v1/virtual/userProfile
```

A successful call returns the following response:

```json
{
  "_internalId": 1,
  "firstName": "John",
  "lastName": "Doe",
  "language": "en",
  "_self": "http://ClarityHostName:Port/ppm/rest/v1/virtual/userProfile",
  "userName": "jdoe02",
  "locale": "en_US",
  "email": "jdoe02@mailserver.com"
}
```

### Sample API Requests for Multiple Instances

#### Create Projects

The following sample request and response is applicable for creating multiple projects.

**Request:**

```
POST http://samplehost:8080/ppm/rest/v1/projects HTTP/1.1
```

```json
{
  "d": [
    {
      "code": "Alpha",
      "name": "Clarity Alpha",
      "scheduleStart": "2015-04-01T08:00:00",
      "scheduleFinish": "2015-09-30T17:00:00",
      "description": "New enhancements to Clarity Alpha",
      "priority": 10,
      "isActive": true,
      "manager": "jsmith"
    },
    {
      "code": "Beta",
      "scheduleStart": "2015-04-30T08:00:00",
      "scheduleFinish": "2015-07-31T17:00:00",
      "description": "Feature development",
      "priority": 10,
      "isActive": false,
      "manager": "jdoe"
    }
  ]
}
```

**Response:**

The `_results` array has a separate entry for every successfully processed record. The `_links` object lists the links to each lookup attribute type of resource. Any failed and skipped records are listed under the `_errors` and `_skipped` objects respectively. If there are no failed and skipped records, the `_errors` and `_skipped` objects are omitted in the response. If the complete batch fails, for example, due to a parsing error, the response returns the HTTP status code. The response also returns an error JSON, rather than a separate error object for each record.

```json
{
  "_self": "http://samplehost:8080/ppm/rest/v1/projects",
  "_links": {
    "trackMode": "http://samplehost:8080/ppm/rest/v1/lookups/prTrackMode/lookupValues",
    "manager": "http://samplehost:8080/ppm/rest/v1/lookups/BROWSE_PROJMGR/lookupValues",
    "pageLayout": "http://samplehost:8080/ppm/rest/v1/lookups/LOOKUP_PROJECT_PAGE_LAYOUT/lookupValues",
    "costType": "http://samplehost:8080/ppm/rest/v1/lookups/LOOKUP_FIN_COSTTYPECODE/lookupValues",
    "financialStatus": "http://samplehost:8080/ppm/rest/v1/lookups/PAC_PROJECT_STATUS/lookupValues",
    "progress": "http://samplehost:8080/ppm/rest/v1/lookups/INVESTMENT_OBJ_PROGRESS/lookupValues",
    "percentCompleteCalcMethod": "http://samplehost:8080/ppm/rest/v1/lookups/PRJ_PERCENT_CALC_MODE/lookupValues",
    "currencyCode": "http://samplehost:8080/ppm/rest/v1/lookups/LOOKUP_ACTIVE_CURRENCIES/lookupValues",
    "assignmentPool": "http://samplehost:8080/ppm/rest/v1/lookups/ASSGN_POOL_TYPE/lookupValues",
    "status": "http://samplehost:8080/ppm/rest/v1/lookups/INVESTMENT_OBJ_STATUS/lookupValues",
    "chargeCode": "http://samplehost:8080/ppm/rest/v1/lookups/LOOKUP_CHARGE_CODES/lookupValues"
  },
  "_results": [
    {
      "_self": "http://samplehost:8080/ppm/rest/v1/projects/5000001",
      "_internalId": "5000001",
      "code": "Alpha",
      "name": "Clarity Alpha",
      "description": "New enhancements to Clarity Alpha",
      "priority": 10,
      "isActive": true,
      "scheduleStart": "2015-04-01T08:00:00",
      "scheduleFinish": "2015-09-30T17:00:00",
      "isOpenForTimeEntry": true,
      "etc": 0,
      "costType": {
        "displayValue": "Operating",
        "_type": "lookup",
        "id": "OPERATING"
      },
      "isApproved": false,
      "tasks": {
        "_self": "http://samplehost:8080/ppm/rest/v1/projects/5000001/tasks"
      },
      "actuals": 0,
      "manager": {
        "displayValue": "John, Smith",
        "_type": "lookup",
        "id": "1"
      },
      "pageLayout": {
        "displayValue": "Project Default Layout",
        "_type": "lookup",
        "id": "50240"
      },
      "totalLaborEffort": 0,
      "percentComplete": 0,
      "priority": 10,
      "assignmentPool": {
        "displayValue": "Team Only",
        "_type": "lookup",
        "id": "0"
      },
      "lastUpdatedDate": "2015-04-01T08:38:31",
      "createdDate": "2015-04-01T08:38:31",
      "trackMode": {
        "displayValue": "PPM",
        "_type": "lookup",
        "id": "2"
      },
      "name": "CSM",
      "financialStatus": {
        "displayValue": "Hold",
        "_type": "lookup",
        "id": "H"
      },
      "progress": {
        "displayValue": "Not Started",
        "_type": "lookup",
        "id": "0"
      },
      "risk": null,
      "percentCompleteCalcMethod": {
        "displayValue": "Manual",
        "_type": "lookup",
        "id": "0"
      },
      "currencyCode": {
        "displayValue": "USD",
        "_type": "lookup",
        "id": "USD"
      },
      "status": {
        "displayValue": "Unapproved",
        "_type": "lookup",
        "id": "0"
      },
      "chargeCode": null
    }
  ],
  "_errors": [
    {
      "resourceId": "Beta",
      "errorMessage": "CMN-0007: Attribute 'name' is required.",
      "errorCode": "validation.requiredFieldMissing"
    }
  ]
}
```

#### Read Projects

**Request:**

```
GET http://samplehost:8080/ppm/rest/v1/projects HTTP/1.1
```

> [!NOTE]
> If the API endpoint that you construct has sensitive characters, encode the URL using UTF-8 character encoding. For example, while filtering resources, the filter criteria can include sensitive characters such as space, greater than symbol (>), plus symbol. By default, links in the response of all endpoints (such as `_self`, `_next`, `_previous`) are URL encoded when they contain sensitive characters. You do not need to encode these links again.

**Response:**

By default, the response includes `_internalId`, `_self`, and specific attributes as specified in the resource metadata. You can retrieve only selective attributes of a resource by providing comma-separated attribute names in the `fields` request parameter. By default, the `_links` and child resource objects such as `_tasks` are not included in the response. You can retrieve these objects by providing `links` request parameter with value as `true`. Currently, the child resource objects only have a link to retrieve actual child resource instances. The `_next` and `_previous` pagination links appear only when records larger than a page size exist.

```json
{
  "_self": "http://samplehost:8080/ppm/rest/v1/projects",
  "_totalCount": 1,
  "_recordsReturned": 1,
  "_pageSize": 25,
  "_next": "<linktofetchnextpage>",
  "_previous": "<linktofetchpreviouspage>",
  "_results": [
    {
      "_self": "http://samplehost:8080/ppm/rest/v1/projects/5000001",
      "_internalId": "5000001",
      "code": "Alpha",
      "name": "Clarity Alpha",
      "tasks": {
        "_self": "http://samplehost:8080/ppm/rest/v1/projects/5000001/tasks"
      }
    }
  ]
}
```

#### Expand Query Parameter

The `expand` query parameter in the API URL indicates that any child resources associated with the parent resource must be represented inline within the response. For example, to retrieve a project and its tasks, you can send one API request for the project and another one for the tasks list associated with the project. Alternatively, you can use an expand syntax to retrieve both the project and its tasks with a single HTTP request as shown in the following sample:

```
projects/5000001?expand=(tasks=(fields=(code,startDate,costType)),teams)
```

You can use other query parameters like `offset`, `limit`, and `filter` in the same way that `fields` is used in the preceding example. Each associated child resource that uses an expand syntax can include its own query parameters. The query parameters that retrieve child resources in an expand syntax do not impact the parent resource response result.

---

## REST API Enhancements

Clarity REST APIs expose Clarity data to be consumed by third-party client applications. The APIs enable authorized, external systems to perform CRUD operations on Clarity through REST methods. This page lists the significant enhancements made to APIs in Clarity. To learn more about using APIs, see **Getting Started with Clarity REST APIs**.
- Enhancements Introduced in 16.4.0
- Enhancements Introduced in 16.3.3
- Enhancements Introduced in 16.3.2
- Enhancements Introduced in 16.2.2
- Enhancements Introduced in 16.1.3
- Enhancements Introduced in 16.1.1
- Enhancements Introduced in 16.1.0
- Enhancements Introduced in 16.0.3
- Enhancements Introduced in 16.0.2
- Enhancements Introduced in 15.9.3

### Enhancements Introduced in 16.4.0

#### Filtering Support for _internalId in actualTransactions API

The `actualTransactions` API now supports filtering on the `_internalId` field. This enhancement allows users to retrieve specific transaction records by their Internal IDs.

**Supported Operators:**
- equals (`=`)
- `in`

**Examples:**

**Example 01: Filter by a Single Internal ID**

```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=(_internalId=5001123)
```

This returns the transaction record where `_internalId` equals 5001123.

**Example 02: Filter by Multiple Internal IDs**

```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=(_internalId in (5003214,5003213))
```

This returns all transaction records where `_internalId` matches any of the specified values (5003214 or 5003213).

> [!NOTE]
> Some of the key points to remember are:
> - Only the `=` and `in` operators are supported for `_internalId`.
> - Other operators such as `!=`, `<`, `>`, or `contains` are NOT supported.
> - The `_internalId` filter can be combined with other supported filters for `actualTransactions`.

### Enhancements Introduced in 16.3.3
- Overwrite Auto-Numbering Using API
- Retrieve User Avatar Using API
- Access externalId in Actual Transactions API
- View Multi-Valued Lookup Attributes in the Administration Grid

#### Overwrite Auto-Numbering Using API

You can now override auto-numbering when creating a new investment from a template using a private API.

**Key Enhancements:**
- **Use Custom ID in Payload** - When using the private API to create an investment from a template, Clarity now uses the ID provided in the payload instead of the Studio-configured auto-numbering.
- **Fallback to Studio Configuration** - If no ID is specified in the payload, the system defaults to using the Studio-configured auto-numbering.
- **Error on Missing Values** - If neither the payload nor the Studio provides an ID, the API request will fail.

> [!NOTE]
> This enhancement applies to a private API. Broadcom reserves the right to change the payload structure without notice. Use with caution in production environments.

#### Retrieve User Avatar Using API

You can now retrieve a resource's avatar using the enhanced Resources API.

**Key Enhancements:**
- **Access Avatar via GET Call** - Use the GET method in the Resources API to retrieve a user's avatar information.
- **Receive Avatar Data and Metadata** - The API returns two avatar-specific fields:
- **avatarData** - Contains the avatar image in base64 format.
- **avatar** - Provides metadata related to the avatar.
- **Read-Only Access** - Avatar is a virtual attribute. You can read this data using the API, but you cannot update it.

#### Access externalId in Actual Transactions API

Use the enhanced Actual Transactions API to retrieve the `externalId` field as part of the API response. This value is commonly used to trace the origin of the transaction, such as linking it to a timesheet entry.

**Key Enhancements:**
- **Retrieve externalId Field** - Call the Actual Transactions API with the `fields` parameter to include `externalId` in the response:
  ```
  <Clarity URL>/actualTransactions?fields=investmentCode,externalId&limit=100
  ```
- **Align with Posted Transactions Grid** - The `externalId` value shown in the API response matches the corresponding entry in the Posted Transactions grid in Clarity.
- **Common Usage** - The `externalId` often maps to the timesheet entry ID, allowing you to trace actual transactions to their source.

#### View Multi-Valued Lookup Attributes in the Administration Grid

You can now quickly identify multi-valued lookup attributes using the new **Multi Valued** column in the Attributes grid within Clarity Administration.

**Key Enhancements:**
- **Use the New "Multi Valued" Column** - A new column labeled **Multi Valued** is now available in the Attributes grid.
- **Easily Identify Multi-Valued Lookups** - The column is checked for attributes configured as multi-valued lookups.
- **Manually Add the Column** - Edit your grid view to manually add the **Multi Valued** column as needed.
- **Sort and Filter** - Use the new column to sort and filter attributes by their multi-valued status.

### Enhancements Introduced in 16.3.2

#### Actuals API Enhancements

The `actualsTransaction` API is now available. Actuals refer to the real, recorded amounts of work, cost, or effort that have been expended on an investment. These are critical for tracking investment progress, financial performance, and for comparing planned outcomes with actual results.

Some key benefits of leveraging the API are:
- **Automation:** Allows you to automate the flow of actuals data between Clarity and other business applications.
- **Real-Time Data Access:** Enables the real-time retrieval of actuals, ensuring that dashboards, reports, and analytics tools always reflect the most current investment and financial information.
- **Custom Solutions and Flexibility:** Customers can build tailored applications, custom workflows, or user interfaces that leverage actuals data in ways that suit their unique business needs.

Since Clarity can sometimes contain millions of actuals transactions, you will need to provide a filter criterion with a specific Transaction Date or a Transaction Date Range not exceeding 92 days. The `POSTED_TXN_FILTER_TRANS_DATE_RANGE` governor limit governs this 92-day period. The current limit is 92, and the critical limit is 366.

Using the standard GET request without a filter will produce an error:

```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions
```

Error message: "Actual/Posted Transactions request needs filter criteria with specific Transaction Date, or Transaction Date range not exceeding 92 days."

**Use Case 1: Retrieve Actuals for a Specific Date**

```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=(transactionDate = '2025-01-01T00:00:00')
```

**Use Case 2: Use Greater and Less Than Conditions**

```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=((transactionDate >= '2025-01-01T00:00:00') and (transactionDate < '2025-02-15T00:00:00'))
```

```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=((transactionDate > '2025-01-01T00:00:00') and (transactionDate <= '2025-02-15T00:00:00'))
```

> [!NOTE]
> You will receive an error message when the transaction date range exceeds 92 days.

**Use Case 3: Date Range is Exceeding 92 Days**

```
http://<hostname>:<port>/ppm/rest/v1/actualTransactions?filter=((transactionDate > '2025-01-01T00:00:00') and (transactionDate <= '2025-04-15T00:00:00'))
```

Error Message: Cannot fetch Actual/Posted Transactions with Transaction Date range exceeding 92 days.

### Enhancements Introduced in 16.2.2
- Update User Password Using REST API
- Get Additional Metadata for User/Resource Object Lookups
- Update Sub-Object Data Without Passing Parent Context
- Update Clarity Impersonating As Another User

#### Update User Password Using REST API

A new API endpoint is introduced to reset the user password, provided the necessary setup is complete.

```
<Clarity REST API URL>/auth/userCredentials
```

You can reset the Clarity user password as defined in Clarity, but not in Identity Provider (IdP).

> [!IMPORTANT]
> The following two new access rights are introduced as part of this functionality:
> 1. **Administration - Service Account:** Allows the user to have their Clarity password changed by an API call. Users invoking the change password need additional rights.
> 2. **Administration - Service Account Manager:** Allows user to invoke the REST API to change Clarity password of a user.

**Prerequisites:**
- Ensure the feature is enabled in the Clarity environment. Please contact Broadcom Support to request activation if needed.
- Configure the Clarity environment for Single Sign-On (SSO) integration.
- Assign appropriate access rights to both the user and administrator.
- Ensure that passwords adhere to Clarity's defined password rules.
- Encrypt the password using encryption keys.

| # | Condition | Action |

|---|-----------|--------|
| 01 | If a certificate is not available | The API will expect the password to be encrypted in base64 format |
| 02 | If you are using a certificate to encrypt passwords | Create an entry in Clarity > **Administration** > **Authentication & Keys** > **Certificate** with the code value set to `USER_PWD_MGMT` and populate the certificate information in the "Certificate Text" column |

> [!NOTE]
> Some of the key points to remember are:
> - This API exclusively supports changing (POST) user passwords. Reading or deleting operations are NOT allowed.
> - Bulk updates are also NOT allowed.
> - The API will accept passwords that are either base64 encoded or encrypted using the specified certificate.

| # | Condition | Action |

|---|-----------|--------|
| 01 | If an entry is found in Authentication & Keys > Certificates with the code `USER_PWD_MGMT` | Clarity expects the password to be encrypted using the certificate |
| 02 | If no entry is found in Authentication & Keys > Certificates with the code `USER_PWD_MGMT` | Clarity expects the password to be encoded in base64 |

Additional rules:
- Plain text passwords are not accepted.
- API will accept the following input:
- User's Internal ID (`_internalId`) or username (`userName`)
- New password (`credential`)

| Scenario | Method | URL | JSON Body |
|----------|--------|-----|-----------|
| Update the password using the username | POST | `<Clarity Rest API URL>/auth/userCredentials` | `{ "userName": "camos", "credential": "Q2xAcml0eQ==" }` |
| Update the password using the user's internal ID | POST | `<Clarity Rest API URL>/auth/userCredentials` | `{ "_internalId": "5003054", "credential": "Q2xAcml0eQ==" }` |

#### Get Additional Metadata for User/Resource Object Lookups

The aim is to provide additional data points when making an API call to lookup objects of user or resource types.

**What's Existing?** In the earlier releases, Clarity offers the option to retrieve subobject information through a GET call by utilizing the `expand` parameters.

**What's New?** From this release onwards, Clarity has extended similar functionality to lookup attributes of user or resource objects. The `expand` feature enables the API to return additional requested values for specific lookups.

When passing the additional parameter, you can request to get the following metadata:

**User Object-based lookup:**
- **username:** User name as defined in Clarity
- **email:** Email address of the user
- **resourceId:** Internal resource ID of the user

**Resource Object-based lookup:**
- **userId:** Internal user ID of the resource
- **email:** Email address of the resource
- **uniqueName:** Resource ID of the resource

**Syntax:**

| Method | URL |
|--------|-----|
| GET | `<Clarity API URL>/<Object Alias>/<Object ID>?expandFields=(<Lookup Attribute ID>=(fields=(<Specific metadata parameter>)))&<Any additional parameters>` |

**Examples:**

| Scenario | URL | Notes |
|----------|-----|-------|
| Get the Project name, along with the email address of the manager | `<Clarity Rest API URL>/projects/5002054?expandFields=(manager=(fields=(email)))&fields=name` | `email` is the User Object based lookup. |
| Get the Project name, along with the email, user name, and resource ID of the manager | `<Clarity Rest API URL>/projects/5002054?expandFields=(manager=(fields=(userName,email,resourceId)))` | `userName`, `email` and `resourceId` are User Object based lookups. |
| Get the Project name, along with the email, user ID, and unique name of the sponsor | `<Clarity Rest API URL>/projects/5002054?expandFields=(businessOwner=(fields=(email,userId,uniqueName)))` | `email`, `userId` and `uniqueName` are Resource Object based lookups. |
| Get all the whitelisted fields of the Task Owner and the email address of the Investment Manager | `<Clarity Rest API URL>/tasks?expandFields=(taskOwner=(fields=()),investmentManagerID=(fields=(email)))&limit=2` | `email` is the Resource Object based lookup. |
| Get the user name of the roadmap author | `<Clarity Rest API URL>/roadmaps?expandFields=(author=(field=(userName)))` | `userName` is Resource Object based lookup. |

> [!NOTE]
> You can only retrieve the whitelisted attributes for User/Resource lookups (i.e., `"isExpandable": true`) else an error message appears: "API-1092: Attribute fullName is not a valid expandable attribute on Object resource."

#### Update Sub-Object Data Without Passing Parent Context

Previously, updating a sub-object required the full parent information to be passed as part of the REST API call. This limitation posed challenges for integrations, such as ConnectALL, which required the ability to pass only sub-object information. With the Clarity 16.2.2 release, the API has been enhanced to support reading, creating, and updating subobjects using their internal ID. This enhancement simplifies the process of managing sub-objects by allowing for more direct interactions.

Below are the highlights:
- **Create Sub-Objects:** You can create new sub-objects using the parent's internal ID.
- **Update Sub-Objects:** You can update any sub-object using its internal ID.
- **Bulk Update:** This feature only supports bulk updates, not individual instances.
- **Cross-Parent Updates:** Supports creating and updating sub-objects across different parents within the same call.
- **Deletion Not Supported:** Deleting an instance using this method is not supported currently but is planned for a future release.
- **Third-Level Objects:** Creating or updating third-level objects using this method is not supported.

**Syntax:**

| Method | URL | JSON Body |
|--------|-----|-----------|
| GET | `<Clarity API URL>/<Sub-object Alias>` | |
| PATCH | `<Clarity API URL>/<Sub-object Alias>` | `{ "d": [ { "_internalId": <Sub-object Internal ID>, "<Attribute API Alias>": "<Value>" }, { "_internalId": <Sub-object Internal ID>, "<Attribute API Alias>": "<Value>" } ] }` |
| POST | `<Clarity API URL>/<Sub-object Alias>` | `{ "d": [ { "_parentId": <Parent Internal ID>, "name": "<Name Value>", "<Attribute API Alias>": "<value>" }, { "_parentId": <Parent Internal ID>, "name": "<Name Value>", "<Attribute API Alias>": "<value>" } ] }` |

**Examples:**

| Scenario | URL | JSON Body |
|----------|-----|-----------|
| Read multiple task name and shortname | `<Clarity REST API URL>/tasks?fields=name,shortName&filter=(_internalId in (5003214,5003213))` | |
| Update multiple tasks across different projects | `<Clarity REST API URL>/tasks` | `{ "d": [ { "_internalId": 5002001, "c_workStatus": "status02" }, { "_internalId": 5003548, "c_workStatus": "status04" } ] }` |
| Create new task across different projects | `<Clarity REST API URL>/tasks` | `{ "d": [ { "_parentId": 5000005, "name": "Documentation", "phaseId": "LM.001.010", "c_workStatus": "status01" }, { "_parentId": 5002087, "name": "QA Testing", "phaseId": "LM.008.000", "c_workStatus": "status02" } ] }` |

#### Update Clarity Impersonating As Another User

With the Clarity 16.2.2 release, the REST API has been enhanced to support invoking calls on behalf of another user. This feature benefits customers integrating Clarity with third-party applications, where data is often pulled into Clarity using a generic service account. This new capability ensures that changes made via API calls reflect the actual user making the updates, preserving audit integrity.

Below are the highlights:
- **Impersonation Header:** The existing API now supports a new header `x-api-impersonate-user: <User name of the user under who the call should be invoked>`, allowing you to execute API calls as another user.
- **Audit Enhancements:** The audit logs have been enhanced to report if a change was made by a user impersonating another user, ensuring transparency and traceability.
- **Restrictions:** The impersonation method cannot be used to invoke admin-specific APIs, such as those related to SAML configuration or user management.

**Prerequisites:**
- **Feature Toggle:** The impersonation feature must be toggled ON in the Clarity environment. You can enable this feature using the Command Prompt. To learn more, see **Enable/Disable a Feature Using the Command Prompt**.

> [!IMPORTANT]
> The `<feature name>` is `ADMIN_IMPERSONATE_USER_F31686`.
- **Access Rights:** Appropriate access rights must be assigned to the administrator. The impersonated user must have API access and permission to update the resource.
- **Header Syntax:** Use the following header syntax to impersonate another user: `x-api-impersonate-user: <username>`

**Examples:**

| Scenario | Method | URL | Header | JSON Body |
|----------|--------|-----|--------|-----------|
| Admin updates project description on behalf of Cheryl Amos (camos) | PATCH | `<Clarity REST API URL>/ppm/rest/v1/projects/5002054` | `x-api-impersonate-user: camos` | `{ "description": "Expansion of payments processing systems across all platforms and operating systems." }` |
| Admin updating multiple task short names on behalf of Cheryl Amos | PATCH | `<Clarity REST API URL>/ppm/rest/v1/projects/5002054/tasks` | `x-api-impersonate-user: camos` | `{ "d": [ { "_internalId": 5003213, "shortName": "Initiation" }, { "_internalId": 5003214, "shortName": "Initiating" } ] }` |

**Audit Enhancements:**

A new column, **Impersonated By**, has been introduced in the audit grid to capture the full name of the admin who invoked the API to make a change as another user. The **Changed By** column captures the name of the user who was impersonated.

For example:
- An admin user updates the project description as "camos," and the audit module will reflect this within the Project.
- The admin impersonated "camos" to make multiple changes, and the data will reflect in **Audit** under administration in Clarity and **Audit Trail** in Classic PPM.

> [!IMPORTANT]
> The Impersonate User and User Password Change APIs are not exposed on the Clarity's Feature Toggle page. Contact support to enable this functionality in your specific environment.

### Enhancements Introduced in 16.1.3

#### Introducing the New Public API for Managing Links

This API increases the flexibility and control over managing links within various aspects of Projects, Ideas, Custom Investments, Menu links, and Task Links. This helps in a seamless experience for retrieving, updating, creating, and deleting links through a standardized set of API methods.

**Key features:**
- **Supported API Methods:** The new Links API offers support for the following HTTP methods:
- GET: Retrieve link information
- PATCH: Update existing link
- PUT: Create or update a link
- DELETE: Delete a link
- POST: Create a new link
- **Endpoint:** The new Links API can be accessed through the endpoint:
  ```
  {{ClarityServer}}/ppm/rest/v1/links
  ```
- **Payload Syntax:** To retrieve a description of the payload syntax for API calls, use the following endpoint:
  ```
  {{ClarityServer}}/ppm/rest/v1/describe/links
  ```
- **Enhanced Link Management:** In the 16.1.2 release, we have updated the value for `INV_INVESTMENTS` to `PROJECT` within the PRLINK table to ensure consistency. In this release (16.1.3), the PRLINK table includes additional columns to help users easily locate specific object instances and their associated links:
- **prtablename:** Indicates the name of the object where the link is created, with possible values including:
- `PROJECT`: Links created within a project's links module
- `IDEA`: Links created within an idea's links module
- `<Custom Investment Object Code>`: Links created within a Custom Investment's links module
- `MENU`: Links created within Menu Links
- `TASK`: Links created within the Task Links module
- **category_name:** Stores the name of the category within the Links module
- **category_id:** Holds the ID of the category within the Links module
- **sequence:** Specifies the location of the link within a category

> [!IMPORTANT]
> Some of the key points to remember while using the API to manage links within the Links module:
> - **Scope Limited to Links Module:** The Links API is designed exclusively for managing links within the Links module. It does not support the creation or management of categories within the Links API.
> - **Not for URL Attributes:** This API is solely intended for managing links and is not meant for handling URL attributes. To work with URL attributes, you should explore other suitable methods or APIs offered by the Clarity application.
> - **Default Sequence Number:** When creating a new link and not specifying a sequence number, the system will automatically assign a default sequence number of 1.
> - **Sorting with Duplicate Sequence Numbers:** In cases where multiple links have the same sequence number, the system will sort them based on the link names.

#### Supported API Fields

| Field | Type |
|-------|------|
| **_internalId** | NUMBER |
| **lastUpdatedDate** | DATE |
| **createdDate** | DATE |
| **instanceId** | NUMBER |
| **objectCode** | STRING (25) |
| **name** | STRING (80) |
| **investmentType** | STRING (20) |
| **category** | STRING (80) |
| **concreteUrl** | STRING (1333) |
| **categoryId** | NUMBER |
| **url** | STRING (1333) |
| **sequence** | NUMBER |

#### Sample GET Calls

| Call Type | Method | End Point |
|-----------|--------|-----------|
| Describe | GET | `{{ClarityServer}}/ppm/rest/v1/describe/links` |
| Get a list of all object codes in Links | GET | `{{ClarityServer}}/ppm/rest/v1/links?fields=objectCode` |
| Get all links within a specific project | GET | `{{ClarityServer}}/ppm/rest/v1/links?filter=(instanceId = <Project ID>) and (objectCode = 'project')` |
| Get all links within a specific category under a project | GET | `{{ClarityServer}}/ppm/rest/v1/links?filter=(instanceId = <Project ID>) and (objectCode = 'project') and (categoryId = <Category ID>)` |
| Read a specific link values | GET | `{{ClarityServer}}/ppm/rest/v1/links/<Link ID>` |
| Read specific columns of Link | GET | `{{ClarityServer}}/ppm/rest/v1/links/<Link ID>?fields=objectCode,url,category,categoryId,sequence` |

#### Sample CUD Calls

| Call Type | Method | End Point | Body |
|-----------|--------|-----------|------|
| Create a new Link within an object instance | POST | `{{ClarityServer}}/ppm/rest/v1/links` | `{"name":"<Link Name>","instanceId":<Object Instance ID>,"objectCode":"<Object Type>","url":"<URL Value>"}` |
| Create a link within a specific category in an object instance | POST | `{{ClarityServer}}/ppm/rest/v1/links` | `{"name":"<Link Name>","instanceId":<Object Instance ID>,"objectCode":"<Object Type>","url":"<URL Value>","sequence":<Sequence Number>,"categoryId":<Category ID>}` |
| Update an existing Link | PATCH | `{{ClarityServer}}/ppm/rest/v1/links/{{LinkID}}` | `{"name":"<Link Name>","instanceId":<Object Instance ID>,"objectCode":"<Object Type>","url":"<URL Value>","sequence":<Sequence Number>}` |
| Delete a specific link | DELETE | `{{ClarityServer}}/ppm/rest/v1/links/{{LinkID}}` | |

### Enhancements Introduced in 16.1.1
- Import Financial Transactions into Clarity from external systems
- Resource API to View and Update Financial Attributes

#### Import Financial Transactions into Clarity from External Systems

A new public API endpoint has been introduced for importing Financial Transactions (or Inbound Transactions) into Clarity from external systems.

**API endpoint:** `/ppm/rest/v1/inboundTransactions`

The following are the fields served by the API:

| Attribute | Data Type |
|-----------|-----------|
| **externalSourceId** | String |
| **externalID** | String |
| **transactionDate** | Date |
| **investmentID** | Lookup |
| **taskID** | Lookup |
| **resourceID** | Lookup |
| **roleID** (Optional) | Lookup |
| **transactionType** | Lookup |
| **importStatus** | Lookup |
| **inputTypeCode** (Optional) | Lookup |
| **transactionClass** (Optional) | Lookup |
| **chargeCode** (Optional) | Lookup |
| **userLov1** (Optional) | Lookup |
| **userLov2** (Optional) | Lookup |
| **chargeable** (Optional) | Boolean |
| **notes** (Optional) | String |
| **units** | Number |
| **actualCostRate** | Number |
| **actualCostRateCurrency** | Lookup |
| **billRate** | Number |
| **billRateCurrency** | Lookup |
| **voucherNumber** (Optional) | String |
| **groupID** (Optional) | String |
| **poNumber** (Optional) | String |
| **incurredBy** (Optional) | Lookup |
| **vendorCode** (Optional) | Lookup |
| **clientID** (Optional) | String |
| **expenseType** (Optional) | Lookup |

> [!NOTE]
> You need **Financial Process - Transaction Entry** access right for importing Financial Transactions to Clarity.

#### Resource API to View and Update Financial Attributes

The existing resources API (`/ppm/rest/v1/resources`) supports the following additional financial attributes for both GET and PATCH methods.

| Attribute | API Alias | Data Type |
|-----------|-----------|-----------|
| **Financially Active** | `finActive` | Boolean |
| **Department** | `department` | Lookup |
| **Location** | `location` | Lookup |
| **Resource Class** | `resourceClass` | Lookup |
| **Transaction Class** | `transClass` | Lookup |
| **Vendor** | `vendor` | Lookup |

> [!NOTE]
> Some of the key points to remember while updating the financial attributes are:
> 1. For **Labor** type of Resources: Attributes such as Department, Location, Resource Class, and Transaction Class cannot be left empty.
> 2. For **Non-Labor** type of Resources (Equipment, Expense, Material): Attributes such as Resource Class and Transaction Class cannot be left empty.

### Enhancements Introduced in 16.1.0

#### Introducing the User API

The User Creation API has been introduced to help you create users programmatically by using APIs. You can assign users to one or more user groups while creating them.

Some key points to remember:
- You can create and manage users by using the `"ClarityServer"/ppm/rest/v1/users` API.
- You need to pass all mandatory values to create a user.
- You can use the API to assign users to multiple user groups during the time of creation.
- You can use the Bulk Creation capability in Clarity to create up to 50 users in one go.

### Enhancements Introduced in 16.0.3
- Action Item API Has Been Made Public
- Update Custom Read-only Attributes

#### Action Item API Has Been Made Public

Action Item, in the form of a widget, was introduced in the Clarity 16.0.2 version. With the Clarity 16.0.3 release, Action Item API has been made public. You can view action items and act on behalf of a specific user.

Action Item API requires multiple reads on the Action Items based on different assignment IDs to determine which assignment ID must be acted on behalf of the user.

**Available API Endpoints:**
- **actionItems:** Provides information about the action items.
- **actionItemAssignees:** Provides assigned information per action item.

#### Sample Action Item API Calls

| Call Type | Method | Sample |
|-----------|--------|--------|
| Describe | GET | `http://<CLARITY SERVER>/ppm/rest/v1/describe/actionItems` and `https://<CLARITY SERVER>/ppm/rest/v1/describe/actionItemAssignees` |
| Get a list of all action items | GET | `https://<CLARITY SERVER>/ppm/rest/v1/actionItems?fields=subject,description,priority,status,aiStatusList,_internalId,assocObjectId,assocObjectCode` |
| Get Specific Action Item | GET | `https://<CLARITY SERVER>/ppm/rest/v1/actionItems/<Action Item ID>` |
| Get Action Items that are still open | GET | `https://<CLARITY SERVER>/ppm/rest/v1/actionItems?filter=(status = 'Open')` |
| Get Open Action Items that are still open | GET | `https://<CLARITY SERVER>/ppm/rest/v1/actionItems?fields=subject,description,priority,status,assocObjectId,assocObjectCode,assocInstanceName&objFilter=(...)` |
| Get on specific action item assignee | GET | `https://<CLARITY SERVER>/ppm/rest/v1/actionItems/<Action Item ID>/actionItemAssignees` |
| Get on specific action item assignee ID | GET | `https://<CLARITY SERVER>/ppm/rest/v1/actionItems/<Action Item ID>/actionItemAssignees/<Action Item Assignee ID>` |
| Act on a specific Action Item | PATCH | `https://<CLARITY SERVER>/ppm/rest/v1/actionItems/<Action Item ID>/actionItemAssignees/<Action Item Assignee ID>` with body: `{ "assigneeStatus": "APPROVED" }` |

> [!NOTE]
> Some key points to remember are:
> - **Get Action Items that are still open:** This API call is used at the overall system level to learn the progress of a process (Open or Close).
> - **Get Open Action Items that are still open:** This API call is used to display the Pending status under the Pending tab for action items that have been acted by an assignee (logged-in user) but are either awaiting to satisfy the build condition or a response from other assignees.
> For example: Assume that a process has three assignees. If one assignee responded and the other two are yet to respond, then:
> - The assignee who has responded (logged-in user) will see the status as Pending in the Pending tab, as the other two assignees have not acted on this yet.
> - The other two Assignees (who are yet to respond) see this process still in the Open state under the Open tab in their respective sessions.

#### Update Custom Read-only Attributes

Clarity REST APIs allow updating the custom read-only attributes using the REST APIs. This is only supported through the bulk APIs.

> [!IMPORTANT]
> Some of the key points to remember are:
> 1. Ensure that you have **API Integration capabilities** access right. It allows specific capabilities for API integration users.
> 2. The bulk API request payload needs additional metadata i.e., `updateReadOnlyAttrs`.
> 3. The bulk API request applies to bulk POST and PATCH calls only.

Here is the sample payload:

```json
{
  "d": [
    { "_internalId": 5070075, "manager": 5000001 },
    { "_internalId": 5070076, "manager": 5000011 }
  ],
  "_metadata": {
    "_directives": {
      "updateReadOnlyAttrs": true
    }
  }
}
```

### Enhancements Introduced in 16.0.2
- API Infrastructure Improvements
- Introducing the exchangeRates API

#### API Infrastructure Improvements

In the previous releases, some APIs associated with Master Objects (Projects, Resources, and Timesheets) enforced a restriction to include at least one stock attribute in a filter. This restriction is no longer applicable in Clarity 16.0.2 and higher releases.

```
projects?filter=(myCustomAttribute = true)
```

In Clarity 16.0.1 or older releases, this API call would display an error stating that users must include at least one stock attribute to the filter.

#### Introducing the exchangeRates API

The `exchangeRates` API allows you to create and update exchange rates. You cannot delete exchange rates using this API. You do not need additional access rights to work with this API. It supports the GET, POST and PUT/PATCH operations.

### Enhancements Introduced in 15.9.3

#### Introduced a New Flag (assignInstanceRights)

When a user creates an instance of a custom object, three additional records will be added to the `CMN_SEC_ASSGND_OBJ_PERM` table while executing a POST request. It happens because Clarity grants three creator instance rights to the user during the POST request. The `assignInstanceRights` flag allows custom object instances to be created using the REST API without auto-assigning the creator instance rights to the user during the POST request. This complements adding a flag to the custom object instance XOG that allows instances to be imported without auto-assigning instance rights.

> [!IMPORTANT]
> Some of the key points to remember are:
> 1. You can use `assignInstanceRights` on the bulk insert payload only.
> 2. You can use `assignInstanceRights` with other bulk requests, such as PATCH and DELETE.

**Implementation:**

In this implementation, the `assignInstanceRights` directive will be supported to allow the user to direct the request to assign an instance or not.

```json
{
  "_metadata": {
    "_directives": {
      "assignInstanceRights": true
    }
  },
  "d": [
    {
      "attr1_code": "attr1_value",
      "attr2_code": "attr2_value",
      "attrN_code": "attrN_value"
    }
  ]
}
```

#### Rules Related to assignInstanceRights Directive for Bulk Insert of Custom Object Instances

| Condition | Result |
|-----------|--------|
| If the `assignInstanceRights` directive is missing | The instance rights are granted as before |
| If the `assignInstanceRights` directive is `true` | The instance rights are granted as before |
| If the `assignInstanceRights` directive is `false` | The instance rights are NOT granted |

> [!IMPORTANT]
> 1. The directives apply to ALL instances in the bulk request.
> 2. Directives are supported for bulk requests. Directives are not supported for non-bulk requests.

---

## REST API: Cross-Origin Resource Sharing (CORS)

As a developer, refer to this page for information about CORS and the Clarity REST API. Cross-Origin Resource Sharing (CORS) uses additional HTTP headers to instruct a web browser to grant permission to Classic PPM or another application running at one origin or domain to access certain resources from a server in a different origin or domain.

A web application makes a cross-origin HTTP request when interfacing with a resource in a different origin, domain, protocol, or port from its own. For security reasons, browsers restrict cross-origin HTTP requests initiated from inside scripts.

### Introduction

Network administrators commonly apply same-origin restrictions to network requests. These restrictions prevent a client-side web application from obtaining data retrieved from another origin, and also limit unsafe HTTP requests that can be automatically launched toward destinations that differ from the original running application.

Network requests have historically included user credentials with cross-origin requests, including HTTP authentication and cookie information. With CORS, our REST APIs benefit from the following improvements:
- A response can include an `Access-Control-Allow-Origin` header with the original value of the request acting as a key to allow access to the resource content. As an administrator or developer, you can validate that the key value and origin for the request match.
- You can use a preflight request to discover whether a cross-origin resource is prepared to accept requests, using a non-simple method, from a given origin. As an administrator or developer, you can verify that the preflight request and the origin for the request are valid.
- Server-side applications like Clarity are now able to discover that an HTTP request was deemed a cross-origin request by another user agent (for example, from a CA Agile Central request), through the `Origin` header. With CORS, Clarity can enforce limitations on the cross-origin requests that they are willing to service. For example, the application might return data for a specific user or project, or return no data.
- CORS serves as a building block for other CORS API specifications such as the Clarity CORS REST API which defines how CORS can be used. Other examples are Server-Sent Events and XMLHttpRequest.

A web application makes a cross-origin HTTP request when it requests a resource in a different origin or domain. CORS allows your web browser to trust that a web application running in an original domain is authorized to access selected resources from a server at a different domain.

### Origins

When comparing origins, examine the following three components:
- **Protocol:** When one app is hosted with HTTPS and another is hosted with HTTP, this protocol scenario represents two different origins.
- **Domain:** When a request from domain 2 arrives at domain 1, this domain scenario represents two different origins. It is two different addresses in itself.
- **Port:** When two applications are hosted on the same server with two separate tomcat application server instances, this port scenario represents two different origins. For example, you are running a new REST API app on port 8082 and another legacy application on port 8095.

When requests have greater significance than simple retrieval and involve coordination between or data originating from more than two origins, design the requests to set an omit credentials flag. Resources must perform authorization using security tokens explicitly provided in the content of the request, especially if the origins are not all mutually and completely trusted. These multi-origin scenarios include integrations between resources enabling editing, printing, and storage, each at distinct origins.

In such multi-origin scenarios, a malicious resource at one of the origins may be able to enlist the user-agent as a confused deputy and elevate its privileges by abusing user credentials sent with cross-origin requests. Avoiding such attacks requires that the coordinating applications have explicit knowledge of the scope of privilege for each origin and that all parameters and instructions received are carefully validated at each step in the coordination to ensure that effects implied do not exceed the authority of the originating principal. Given the difficulty of avoiding such vulnerabilities in multi-origin interactions we recommended that, instead of using user credentials attached to the request by the user agent, pass security tokens which specify the particular capabilities and resources authorized as part of the explicit content of a request. OAuth provides an example of such a pattern.

Authors of client-side applications are strongly encouraged to validate content retrieved from a cross-origin resource as it might be harmful. Web applications that are not uniquely identified by specific host names, or mapped to specific ports, do not necessarily have a unique origin, and thus are not able to securely utilize CORS. This is because an origin is composed of only the scheme, hostname, and port. For example, a web application whose URL is of the type `example.org/app-name/` and the app-name portion is necessary to distinguish the web application from other web applications also running at `example.org`, might be unable to securely employ CORS. Mapping web applications to distinct origins is vital for secure web applications.

### CORS Support in the REST API

To improve Clarity integration capabilities, Clarity includes support for Cross-Origin Resource Sharing (CORS) with external applications. Clarity allows you to define external domains and accept external URL requests in PPM. CORS support extends to all Clarity environments including on-premise, SaaS, and our new mobile app.

With CORS, all of the following use cases are now possible:
- **Improved Clarity Integration with CA Agile Central:** The CA Agile Central (formerly Rally) agile application can make webhook calls to Clarity to read project data that is personalized for the current user.
- **Improved Integrations by Broadcom Service partners:** If you can imagine an integration solution, our Broadcom Service partners and Global Delivery teams have probably already worked on it. We can help you leverage the CA Services Live API team to build integrations between Clarity and other applications.
- **Improved Third-Party Integrations:** Leverage the power of Clarity as a business platform with third-party integrations with an array of traditional products and new solutions. Examples include FlowDock, Slack, Microsoft Team, Atlassian JIRA, ITDesign, and OpsHub.

### CORS In Action: Clarity and CA Agile Central

Clarity allows other applications to integrate with it by means of the REST interfaces in each application user interface. As a primary example, in Agile Central integrations, users might want to view Clarity project data without leaving Agile Central. Since the two applications are typically hosted across different origins, requests are almost always considered cross-origin.

The on-premise domain does not match the SaaS domain for the other application, or ports do not match. Simple cross-origin requests including form submissions using GET or POST and cross-origin GET requests resulting from script elements typically include user credentials. Application resources must be prepared to expect simple cross-origin requests with credentials; however, they must also protect themselves from Cross-Site Request Forgery (CSRF) by requiring the inclusion of an unguessable token in the explicitly provided content of the request.

CORS defines how to authorize an instance of an application from another origin, executing in the original web browser, to access a representation of the resource in an HTTP response. Some exceptions are allowed where certain types of resources do not attempt to specify particular authorized origins, but instead either deny or allow all origins.

The following steps illustrate the process:

1. The administrator configures the origin information using commands for system options.
2. When an external request is received, the Clarity application reads and caches the original permitted origin value or values.
3. A CORS filter intercepts every request to the REST API and validates if it is a valid preflight OPTIONS request by examining the origin and request headers.
4. The CORS filter responds with required information back to the browser.
5. The browser reviews the response and decides whether to accept or to reject the origin of the actual request.

> [!TIP]
> Unless you implement a method for monitoring cache refreshes, if you change the origin information in system options, you must also restart the app server to pick up the new settings.

### Configure CORS in On-Premise Environments

The following command options, available in on-premise editions of Clarity 15.6 and newer releases, let you add or delete system options and values:

```
admin system-options -add <option code> <option value>
```

Example: The following command adds a new `ca.com` domain option value for the `CONTENT_SECURITY_DOMAINS` setting in the `cmn_option_values` table:

```
admin system-options -add CORS_ALLOW_ORIGIN ca.com
```

Example: The following commands add `localhost:8011` to your `CORS_ALLOW_ORIGIN` configuration settings for Clarity 15.6 non-production SaaS environments integrated with Rally (CA Agile Central):

```bash
admin system-options -delete CORS_ALLOW_ORIGIN
admin system-options -add CORS_ALLOW_ORIGIN 'http://localhost:8011'
service stop start app
```

To configure the supported types of cross-origin requests, use the following system options:
- **CORS_ALLOW_ORIGIN:** A comma-separated list of allowed origins.
- **CORS_ALLOW_SUBDOMAINS:** Set this Boolean property to `true` or `false`. When `true`, requests from applications in subdomains are allowed. For example, in domain `a1.ppm.com` this setting allows requests from `b2.ppm.com`.
- **CORS_SUPPORTED_METHODS:** A comma-separated list of permitted HTTP methods such as GET, POST, and PUT. As an example, using this property, you could restrict or allow a DELETE call from another domain.
- **CORS_SUPPORTED_HEADERS:** A comma-separated list of headers allowed for a request.
- **CORS_ALLOW_GENHTTP_REQUESTS:** Set this Boolean property to `true` or `false`. When `true`, non-CORS requests are allowed.
- **CORS_CACHE_AGE:** Indicates how long the results of a preflight request can be cached by the web browser, in seconds. If not specified, 7200 is the default, equivalent to 120 minutes or two hours. This information is passed to the browser in the `Access-Control-Max-Age` header.

Example: The following default configuration allows CA Agile Central SaaS users to make requests in an associated Clarity environment:
- `CORS_ALLOW_GENHTTP_REQUESTS`: `true`
- `CORS_ALLOW_ORIGIN`: `https://rallydev.com,https://ca.com`
- `CORS_ALLOW_SUBDOMAINS`: `true`
- `CORS_CACHE_AGE`: `7200`
- `CORS_SUPPORTED_HEADERS`: `Content-Type, User-Agent, Accept, X-Requested-With, Accept-Language, Accept-Encoding, Origin, Referer, Access-Control-Request-Method, Access-Control-Request-Headers, Connection, Pragma, Cache-Control, Authorization, AuthToken`
- `CORS_SUPPORTED_METHODS`: `GET, POST, HEAD, OPTIONS, PUT, DELETE`

### Edit a Configuration

Changes can be made using the admin utility. For example, to set up a development environment, issue the following commands:

```bash
$ admin system-options -delete CORS_ALLOW_ORIGIN
$ admin system-options -add CORS_ALLOW_ORIGIN https://rallydev.com
```

Restart the Clarity app server:

```bash
service stop start app
```

> [!TIP]
> After editing the configuration, clear your browser cache or open your browser in incognito mode and then refresh the page.

### On-Premise Non-Production Development and Testing

During development of your integration, you might host applications using `http://localhost:7001` or `http://localhost:8020`. In this case, add the URL and port to the allowed origins. You might also need to add more headers or methods.

The following two scenarios are common during installation of an on-premise integration:
- **Application 1** (for example, Agile Central) and **Application 2** (PPM) are hosted as `https://rally.forwardinc.com` and `https://ppm.forwardinc.com` and both are routed by a reverse proxy setup. In this scenario, add `https://forwardinc.com` to the allowed origins and Clarity will allow requests from Agile Central.
- If both apps are deployed in separate domains and ports (which would cover on-premise and SaaS hybrid cases), then add those URLs to the configuration.

### Test App

You can edit and then use the following test app to simulate access to your Clarity test instance through a subdomain such as `localhost:7001`:

`test_app.html`

For example, set `CORS_ALLOW_SUBDOMAINS: false`. If you attempt access from a different subdomain such as `my.localhost:7001`, you will get a blocked by CORS policy error in the browser console as expected.

Other valid test examples:
- Make a XOG import or export call to a Clarity instance using custom scripting in another application such as SharePoint.
- Restrict access to HTTP delete methods by external domains.
- Test integrations with and without SSO.

### Troubleshooting REST API Errors

| Error | Explanation | Corrective Action |
|-------|-------------|-------------------|
| Cross-Origin Resource Sharing (CORS) Filter: CORS origin denied. CORS 403 Forbidden error. | Invalid origin in header. | Specify a valid origin in the header. |
| My API call is never made. | You might be making an API call to a server but did not set the CORS origin for the port you are using. | Set the CORS origin for the port you are using. |
| My API call returns an error. | Your origin is valid but your host name is not. | Specify a valid host name or add the host name in your hosts configuration. |
| The command (HTTP method) you are using (for example, GET) has been disabled on the target server (or the SSO server if using SSO). | | Enable the REST API command you want to use on the server. |

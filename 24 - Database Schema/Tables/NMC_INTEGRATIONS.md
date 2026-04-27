---
title: NMC_INTEGRATIONS
type: db-table
table: NMC_INTEGRATIONS
columns: 23
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_INTEGRATIONS

> [!info] Description
> This table stores information about how to connect to external execution systems for clarity integrations

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | This column is the ID/Unique column for this table |
| `CODE` | NVARCHAR | NOT NULL | This column refers to the unique code. It can be used to uniquely identify any entry in this table |
| `NAME` | NVARCHAR | NOT NULL | This column refers to the name given to this entry |
| `ENDPOINT_URL` | NVARCHAR | NOT NULL | This column refers to the endpoint URL used to connect to the remote system. |
| `INTEGRATION_SUPPLIER_CODE` | NVARCHAR | NOT NULL | This column refers to the area of remote system. |
| `INTEGRATION_VENDOR_CODE` | NVARCHAR | NOT NULL | This column refers to the vendor of the remote system. |
| `INTEGRATION_AREA_CODE` | NVARCHAR | NOT NULL | This column refers to the area of remote system. |
| `IS_ACTIVE` | NUMERIC | NOT NULL |  |
| `API_KEY` | NVARCHAR | NULL | This column refers to the API key that is used as credentials for invoking web services on the remote system |
| `INTEGRATION_INSTANCE` | NVARCHAR | NULL | This column refers to the integration instance/workspace of the remote integration system |
| `CREATED_DATE` | DATE | NOT NULL | This column refers to the date when the row was first created |
| `CREATED_BY` | NUMERIC | NOT NULL | This column refers to the user that first created the row |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | This column refers to the date when the table was last updated |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | This column refers to the user that last updated the table |
| `USER_NAME` | NVARCHAR | NULL | This column refers to the user name that is used as credentials for invoking web services on the remote system |
| `PASSWORD` | NVARCHAR | NULL | This column refers to the pass word that is used as credentials for invoking web services on the remote system |
| `AUTH_TYPE` | NVARCHAR | NOT NULL | This column refers to the authentication type for invoking web services on the remote system |
| `PROXY_SERVER` | NVARCHAR | NULL | This column refers to the proxy server address used to connect to the remote system required if your network traffic is routed through a proxy. |
| `PROXY_PORT` | NUMERIC | NULL | This column refers to the proxy server port number used to connect to the remote system required if your network traffic is routed through a proxy. |
| `PROXY_USER_NAME` | NVARCHAR | NULL | This column refers to the proxy user name used to connect to the remote system through an authenticated proxy. |
| `PROXY_USER_PASSWORD` | NVARCHAR | NULL | This column refers to the proxy user password used to connect to the remote system through an authenticated proxy. |
| `REFERRER_URL` | NVARCHAR | NULL | This column refers to the referrer URL in the HTTP request. Useful when New UX timsheet or any other page is embedded in other applications that are running in SSO environments. |
| `REQUEST_DATA` | NVARCHARMAX | NULL | A placeholder to persist the request data (like headers) in JSON. |

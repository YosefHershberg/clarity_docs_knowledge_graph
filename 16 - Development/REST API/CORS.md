---
title: REST API Cross-Origin Resource Sharing
tags:
  - dev
aliases:
  - CORS
canonical: true
audience: dev
domain: development
---
# REST API: Cross-Origin Resource Sharing (CORS)

## Overview

Cross-Origin Resource Sharing (CORS) uses additional HTTP headers to instruct a web browser to grant permission for an application at one origin or domain to access resources from a server at a different origin or domain.

A web application makes a cross-origin HTTP request when it interfaces with a resource in a different origin, domain, protocol, or port from its own. For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.

---

## Introduction

Network administrators commonly apply same-origin restrictions to network requests. These restrictions prevent a client-side web application from obtaining data from another origin, and also limit unsafe HTTP requests toward different destinations.

With CORS, Clarity REST APIs gain the following improvements:

- A response can include an `Access-Control-Allow-Origin` header allowing access to resource content based on the request origin.
- A **preflight request** can discover whether a cross-origin resource accepts requests from a given origin.
- Server-side applications like Clarity can discover when an HTTP request is a cross-origin request (via the `Origin` header) and enforce limitations accordingly.
- CORS serves as a building block for other API specifications such as Server-Sent Events and XMLHttpRequest.

### Understanding Origins

When comparing origins, examine three components:

- **Protocol** — HTTPS vs. HTTP represents two different origins.
- **Domain** — A request from domain 2 to domain 1 represents two different origins.
- **Port** — Two applications on the same server with different ports (e.g., 8082 and 8095) represent two different origins.

> [!NOTE]
> A web application whose URL contains a path component (e.g., `example.org/app-name/`) may not have a unique origin and may be unable to securely employ CORS. Mapping web applications to distinct origins is vital for secure web applications.

---

## CORS Support in the REST API

Clarity supports CORS for integration with external applications across all environments: on-premise, SaaS, and mobile.

**Enabled use cases:**
- **Clarity + CA Agile Central (Rally):** Agile Central can make webhook calls to Clarity to read project data personalized for the current user.
- **Broadcom Service Partner integrations:** CA Services Live API team builds integrations between Clarity and other applications.
- **Third-party integrations:** FlowDock, Slack, Microsoft Teams, Atlassian JIRA, ITDesign, OpsHub, and more.

---

## CORS In Action: Clarity and CA Agile Central

In Agile Central integrations, users want to view Clarity project data without leaving Agile Central. Since the two applications are typically hosted across different origins, requests are almost always cross-origin.

**Process flow:**
1. The administrator configures the origin information using system options commands.
2. When an external request is received, the Clarity application reads and caches the permitted origin value(s).
3. A CORS filter intercepts every request to the REST API and validates it as a preflight `OPTIONS` request by examining the origin and request headers.
4. The CORS filter responds with required information back to the browser.
5. The browser reviews the response and decides whether to accept or reject the origin of the actual request.

> [!TIP]
> If you change the origin information in system options, you must also restart the app server to pick up the new settings.

---

## Configure CORS in On-Premise Environments

The following command options (available in on-premise Clarity 15.6+) let you add or delete system options:

```
admin system-options -add <option code> <option value>
```

**Example — Add a new domain:**
```
admin system-options -add CORS_ALLOW_ORIGIN ca.com
```

**Example — Configure for Rally integration (non-production SaaS, Clarity 15.6):**
```
admin system-options -delete CORS_ALLOW_ORIGIN
admin system-options -add CORS_ALLOW_ORIGIN 'http://localhost:8011'
service stop start app
```

### CORS System Options

| Option | Description |
|--------|-------------|
| `CORS_ALLOW_ORIGIN` | Comma-separated list of allowed origins |
| `CORS_ALLOW_SUBDOMAINS` | `true`/`false` — when `true`, requests from subdomains are allowed |
| `CORS_SUPPORTED_METHODS` | Comma-separated list of permitted HTTP methods (GET, POST, PUT, DELETE, etc.) |
| `CORS_SUPPORTED_HEADERS` | Comma-separated list of headers allowed in a request |
| `CORS_ALLOW_GENHTTP_REQUESTS` | `true`/`false` — when `true`, non-CORS requests are allowed |
| `CORS_CACHE_AGE` | Seconds to cache preflight request results in the browser. Default: `7200` (2 hours) |

**Default CA Agile Central SaaS configuration:**
```
CORS_ALLOW_GENHTTP_REQUESTS: true
CORS_ALLOW_ORIGIN: https://rallydev.com,https://ca.com
CORS_ALLOW_SUBDOMAINS: true
CORS_CACHE_AGE: 7200
CORS_SUPPORTED_HEADERS: Content-Type, User-Agent, Accept, X-Requested-With, Accept-Language,
  Accept-Encoding, Origin, Referer, Access-Control-Request-Method,
  Access-Control-Request-Headers, Connection, Pragma, Cache-Control, Authorization, AuthToken
CORS_SUPPORTED_METHODS: GET, POST, HEAD, OPTIONS, PUT, DELETE
```

---

## Edit a Configuration

**Example — Set up a development environment:**
```
$ admin system-options -delete CORS_ALLOW_ORIGIN
$ admin system-options -add CORS_ALLOW_ORIGIN https://rallydev.com
service stop start app
```

> [!TIP]
> After editing the configuration, clear your browser cache or open your browser in incognito mode and refresh the page.

---

## On-Premise Non-Production Development and Testing

During development, you might host applications on `http://localhost:7001` or `http://localhost:8020`. Add the URL and port to the allowed origins; you may also need to add additional headers or methods.

**Common installation scenarios:**
- **Reverse proxy:** Application 1 (e.g., `https://rally.forwardinc.com`) and Application 2 (`https://ppm.forwardinc.com`) are routed by a reverse proxy. Add `https://forwardinc.com` to allowed origins.
- **Separate domains and ports:** Add those URLs to the configuration (covers on-premise + SaaS hybrid cases).

**Test app:** Use the `test_app.html` file provided to simulate access through a subdomain such as `localhost:7001`.

---

## Troubleshooting REST API Errors

| Error | Explanation | Corrective Action |
|-------|-------------|-------------------|
| `CORS 403 Forbidden` — CORS origin denied | Invalid origin in header | Specify a valid origin in the header |
| API call is never made | The CORS origin for the port was not set | Set the CORS origin for the port you are using |
| API call returns an error | Origin is valid but hostname is not | Specify a valid host name or add it to your hosts configuration |
| HTTP method (e.g., GET) is blocked | The command is disabled on the target server | Enable the REST API command you want to use on the server |

---

## Related
- [[Authentication]]
- [[_MOC Development]]

%%Source: p4002-4006%%

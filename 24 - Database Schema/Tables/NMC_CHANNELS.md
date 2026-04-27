---
title: NMC_CHANNELS
type: db-table
table: NMC_CHANNELS
columns: 13
audience: dev
domain: development
canonical: true
tags:
  - dev
  - schema
  - table
---

# NMC_CHANNELS

> [!info] Description
> This table stores External app data.

## Columns

| Column | Type | Null | Comment |
| --- | --- | --- | --- |
| `ID` | NUMERIC | NOT NULL | Unique id of the record. |
| `CODE` | NVARCHAR | NOT NULL | Code of the channel. |
| `NAME` | NVARCHAR | NULL | Name of the channel. |
| `BASE_URL` | NVARCHAR | NOT NULL | Base URL with place holder parameters. |
| `REFERRER_URLS` | NVARCHAR | NULL | Comma separated list of host:port for any referrer urls to reach the external app. |
| `BLUEPRINT_ID` | NUMERIC | NULL | Associated blueprint to the channel. |
| `CREATED_DATE` | DATE | NOT NULL | Date on which record was created. |
| `CREATED_BY` | NUMERIC | NOT NULL | User id by whom this record was created. |
| `LAST_UPDATED_DATE` | DATE | NOT NULL | Date on which record was updated. |
| `LAST_UPDATED_BY` | NUMERIC | NOT NULL | User id by whom this record was updated. |
| `SOURCE_CHANNEL` | NUMERIC | NULL | ID of the channel used while copying the blueprint. |
| `SINGLE_SIGNON_URL` | NVARCHAR | NULL | Single Sign On URL |
| `SESSN_VALIDATION_EP` | NVARCHAR | NULL | Session Validation Endpoint URL for SSO |

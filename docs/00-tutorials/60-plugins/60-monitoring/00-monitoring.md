---
title: Deepstream Monitoring
---

Deepstream allows you to gather detailed insights into what the server is actually doing. How detailed is really up to you, since you can aggregate data by topic, action or actually go far enough to log each individual subscription name, user, message, anything that goes through the system in one place thus giving complete observability and auditing capabilities.

The monitoring core plugin will be called whenever a message is received, a message is sent, a message is broadcasted to subscriptiors, a client logs in, and the server encounters an error. Based on those core actions, one can monitor and extend the server capabilities in order to build data replication plugins, auditing, more fine grained presence functionality, etc. Using the monitoring plugin it's straightforward to implement an audit log of every user message (event, record, rpc request and data) that goes through the server for compliance purposes.

Since version 7.0.4 deepstream allows for multiple monitoring plugins, thus enabling a clear separation of functionalities and capabilities that the plugins can handle. For instance you can set the built-in http monitoring plugin that presents key server metrics alongside a custom plugin that will save every record modification message into a third party database for independent auditing.

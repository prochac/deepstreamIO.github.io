"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[3265],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function N(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function E(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):N(N({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},T={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},i=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=E(t,["components","mdxType","originalType","parentName"]),i=p(a),k=r,o=i["".concat(d,".").concat(k)]||i[k]||T[k]||l;return a?n.createElement(o,N(N({ref:e},m),{},{components:a})):n.createElement(o,N({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,N=new Array(l);N[0]=i;var E={};for(var d in e)hasOwnProperty.call(e,d)&&(E[d]=e[d]);E.originalType=t,E.mdxType="string"==typeof t?t:r,N[1]=E;for(var p=2;p<l;p++)N[p]=a[p];return n.createElement.apply(null,N)}return n.createElement.apply(null,a)}i.displayName="MDXCreateElement"},137:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return E},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return i}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),N=["components"],E={title:"Constants",description:"A list of all constants deepstream uses"},d=void 0,p={unversionedId:"docs/common/constants",id:"docs/common/constants",title:"Constants",description:"A list of all constants deepstream uses",source:"@site/docs/10-docs/40-common/10-constants.md",sourceDirName:"10-docs/40-common",slug:"/docs/common/constants",permalink:"/docs/docs/common/constants",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/10-docs/40-common/10-constants.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Constants",description:"A list of all constants deepstream uses"},sidebar:"tutorialSidebar",previous:{title:"HTTP API",permalink:"/docs/docs/client-http/v1"},next:{title:"Guides",permalink:"/docs/guides/"}},m=[{value:"Server Log Level",id:"server-log-level",children:[],level:2},{value:"Server State",id:"server-state",children:[],level:2},{value:"Server Event",id:"server-event",children:[],level:2},{value:"Client Connection State",id:"client-connection-state",children:[],level:2},{value:"Client Event",id:"client-event",children:[],level:2}],T={toc:m};function i(t){var e=t.components,a=(0,r.Z)(t,N);return(0,l.kt)("wrapper",(0,n.Z)({},T,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Constants are used throughout deepstream. Common ones are defined in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io-protobuf-js"},"@deepstream/protobuf")," repository where binary message parsers are also defined."),(0,l.kt)("p",null,"Enums and interfaces are defined on the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io-types"},"deepstream-types")," repository."),(0,l.kt)("h2",{id:"server-log-level"},"Server Log Level"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL.DEBUG"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL.INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL.WARN"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL.ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG_LEVEL.OFF"),(0,l.kt)("td",{parentName:"tr",align:null},"100")))),(0,l.kt)("h2",{id:"server-state"},"Server State"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.CONFIG_LOADED"),(0,l.kt)("td",{parentName:"tr",align:null},"'CONFIG_LOADED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.LOGGER_INIT"),(0,l.kt)("td",{parentName:"tr",align:null},"'LOGGER_INIT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.SERVICE_INIT"),(0,l.kt)("td",{parentName:"tr",align:null},"'SERVICE_INIT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.HANDLER_INIT"),(0,l.kt)("td",{parentName:"tr",align:null},"'HANDLER_INIT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.CONNECTION_ENDPOINT_INIT"),(0,l.kt)("td",{parentName:"tr",align:null},"'CONNECTION_ENDPOINT_INIT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.PLUGIN_INIT"),(0,l.kt)("td",{parentName:"tr",align:null},"'PLUGIN_INIT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.RUNNING"),(0,l.kt)("td",{parentName:"tr",align:null},"'RUNNING'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.PLUGIN_SHUTDOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"'PLUGIN_SHUTDOWN'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.CONNECTION_ENDPOINT_SHUTDOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"'CONNECTION_ENDPOINT_SHUTDOWN'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.HANDLER_SHUTDOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"'HANDLER_SHUTDOWN'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.SERVICE_SHUTDOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"'SERVICE_SHUTDOWN'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.LOGGER_SHUTDOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"'LOGGER_SHUTDOWN'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATES.STOPPED"),(0,l.kt)("td",{parentName:"tr",align:null},"'STOPPED'")))),(0,l.kt)("h2",{id:"server-event"},"Server Event"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Not to be confused with pub/sub events."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"'INFO'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"'ERROR'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.DEPRECATED"),(0,l.kt)("td",{parentName:"tr",align:null},"'DEPRECATED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.DEEPSTREAM_STATE_CHANGED"),(0,l.kt)("td",{parentName:"tr",align:null},"'DEEPSTREAM_STATE_CHANGED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.INCOMING_CONNECTION"),(0,l.kt)("td",{parentName:"tr",align:null},"'INCOMING_CONNECTION'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CLOSED_SOCKET_INTERACTION"),(0,l.kt)("td",{parentName:"tr",align:null},"'CLOSED_SOCKET_INTERACTION'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CLIENT_DISCONNECTED"),(0,l.kt)("td",{parentName:"tr",align:null},"'CLIENT_DISCONNECTED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CONNECTION_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"'CONNECTION_ERROR'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.AUTH_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"'AUTH_ERROR'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.AUTH_RETRY_ATTEMPTS_EXCEEDED"),(0,l.kt)("td",{parentName:"tr",align:null},"'AUTH_RETRY_ATTEMPTS_EXCEEDED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.REGISTERING_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"'REGISTERING_USER'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.FATAL_EXCEPTION"),(0,l.kt)("td",{parentName:"tr",align:null},"'FATAL_EXCEPTION'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.NOT_VALID_UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"'NOT_VALID_UUID'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CONFIG_TRANSFORM"),(0,l.kt)("td",{parentName:"tr",align:null},"'CONFIG_TRANSFORM'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CONFIG_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"'CONFIG_ERROR'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.PLUGIN_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"'PLUGIN_ERROR'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.PLUGIN_INITIALIZATION_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"'PLUGIN_INITIALIZATION_ERROR'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.PLUGIN_INITIALIZATION_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"'PLUGIN_INITIALIZATION_TIMEOUT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.HTTP_REQUEST_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"'HTTP_REQUEST_TIMEOUT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.LOCK_RELEASE_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"'LOCK_RELEASE_TIMEOUT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.LOCK_REQUEST_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"'LOCK_REQUEST_TIMEOUT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.LEADING_LISTEN"),(0,l.kt)("td",{parentName:"tr",align:null},"'LEADING_LISTEN'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.LOCAL_LISTEN"),(0,l.kt)("td",{parentName:"tr",align:null},"'LOCAL_LISTEN'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.INVALID_CONFIG_DATA"),(0,l.kt)("td",{parentName:"tr",align:null},"'INVALID_CONFIG_DATA'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.INVALID_STATE_TRANSITION"),(0,l.kt)("td",{parentName:"tr",align:null},"'INVALID_STATE_TRANSITION'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.INVALID_LEADER_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"'INVALID_LEADER_REQUEST'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CLUSTER_LEAVE"),(0,l.kt)("td",{parentName:"tr",align:null},"'CLUSTER_LEAVE'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CLUSTER_JOIN"),(0,l.kt)("td",{parentName:"tr",align:null},"'CLUSTER_JOIN'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CLUSTER_SIZE"),(0,l.kt)("td",{parentName:"tr",align:null},"'CLUSTER_SIZE'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.UNSUPPORTED_ACTION"),(0,l.kt)("td",{parentName:"tr",align:null},"'UNSUPPORTED_ACTION'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.UNKNOWN_ACTION"),(0,l.kt)("td",{parentName:"tr",align:null},"'UNKNOWN_ACTION'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CLOSED_SOCKET"),(0,l.kt)("td",{parentName:"tr",align:null},"'CLOSED_SOCKET'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.TELEMETRY_DEBUG"),(0,l.kt)("td",{parentName:"tr",align:null},"'TELEMETRY_DEBUG'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.TELEMETRY_UNREACHABLE"),(0,l.kt)("td",{parentName:"tr",align:null},"'TELEMETRY_UNREACHABLE'")))),(0,l.kt)("h2",{id:"client-connection-state"},"Client Connection State"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.CLOSING"),(0,l.kt)("td",{parentName:"tr",align:null},"'CLOSING'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.CLOSED"),(0,l.kt)("td",{parentName:"tr",align:null},"'CLOSED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.INITIALISING"),(0,l.kt)("td",{parentName:"tr",align:null},"'INITIALISING'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.AWAITING_CONNECTION"),(0,l.kt)("td",{parentName:"tr",align:null},"'AWAITING_CONNECTION'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.CHALLENGING"),(0,l.kt)("td",{parentName:"tr",align:null},"'CHALLENGING'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.AWAITING_AUTHENTICATION"),(0,l.kt)("td",{parentName:"tr",align:null},"'AWAITING_AUTHENTICATION'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.AUTHENTICATING"),(0,l.kt)("td",{parentName:"tr",align:null},"'AUTHENTICATING'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.OPEN"),(0,l.kt)("td",{parentName:"tr",align:null},"'OPEN'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"'ERROR'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.RECONNECTING"),(0,l.kt)("td",{parentName:"tr",align:null},"'RECONNECTING'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.REDIRECTING"),(0,l.kt)("td",{parentName:"tr",align:null},"'REDIRECTING'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.CHALLENGE_DENIED"),(0,l.kt)("td",{parentName:"tr",align:null},"'CHALLENGE_DENIED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS"),(0,l.kt)("td",{parentName:"tr",align:null},"'TOO_MANY_AUTH_ATTEMPTS'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.AUTHENTICATION_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"'AUTHENTICATION_TIMEOUT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.PAUSING"),(0,l.kt)("td",{parentName:"tr",align:null},"'PAUSING'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTION_STATE.OFFLINE"),(0,l.kt)("td",{parentName:"tr",align:null},"'OFFLINE'")))),(0,l.kt)("h2",{id:"client-event"},"Client Event"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Not to be confused with pub/sub events."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_READ_ONLY_MODE"),(0,l.kt)("td",{parentName:"tr",align:null},"'RECORD_READ_ONLY_MODE'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.UNSOLICITED_MESSAGE"),(0,l.kt)("td",{parentName:"tr",align:null},"'UNSOLICITED_MESSAGE'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.IS_CLOSED"),(0,l.kt)("td",{parentName:"tr",align:null},"'IS_CLOSED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.MAX_RECONNECTION_ATTEMPTS_REACHED"),(0,l.kt)("td",{parentName:"tr",align:null},"'MAX_RECONNECTION_ATTEMPTS_REACHED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CONNECTION_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"'CONNECTION_ERROR'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.ACK_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"'ACK_TIMEOUT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.UNKNOWN_CORRELATION_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"'UNKNOWN_CORRELATION_ID'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.HEARTBEAT_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"'HEARTBEAT_TIMEOUT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.LISTENER_EXISTS"),(0,l.kt)("td",{parentName:"tr",align:null},"'LISTENER_EXISTS'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.NOT_LISTENING"),(0,l.kt)("td",{parentName:"tr",align:null},"'NOT_LISTENING'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CLIENT_OFFLINE"),(0,l.kt)("td",{parentName:"tr",align:null},"'client offline'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.INVALID_AUTHENTICATION_DETAILS"),(0,l.kt)("td",{parentName:"tr",align:null},"'INVALID_AUTHENTICATION_DETAILS'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CONNECTION_LOST"),(0,l.kt)("td",{parentName:"tr",align:null},"'connectionLost'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CONNECTION_REESTABLISHED"),(0,l.kt)("td",{parentName:"tr",align:null},"'connectionReestablished'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.EXIT_LIMBO"),(0,l.kt)("td",{parentName:"tr",align:null},"'exitLimbo'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CONNECTION_STATE_CHANGED"),(0,l.kt)("td",{parentName:"tr",align:null},"'connectionStateChanged'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.CLIENT_DATA_CHANGED"),(0,l.kt)("td",{parentName:"tr",align:null},"'clientDataChanged'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.REAUTHENTICATION_FAILURE"),(0,l.kt)("td",{parentName:"tr",align:null},"'reauthenticationFailure'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.AUTHENTICATION_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"'AUTHENTICATION_TIMEOUT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_ALREADY_DESTROYED"),(0,l.kt)("td",{parentName:"tr",align:null},"'RECORD_ALREADY_DESTROYED'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_DELETE_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"'RECORD_DELETE_TIMEOUT'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"'error'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_READY"),(0,l.kt)("td",{parentName:"tr",align:null},"'ready'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_DELETED"),(0,l.kt)("td",{parentName:"tr",align:null},"'delete'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_DISCARDED"),(0,l.kt)("td",{parentName:"tr",align:null},"'discard'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_VERSION_EXISTS"),(0,l.kt)("td",{parentName:"tr",align:null},"'versionExists'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_HAS_PROVIDER_CHANGED"),(0,l.kt)("td",{parentName:"tr",align:null},"'hasProviderChanged'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.RECORD_STATE_CHANGED"),(0,l.kt)("td",{parentName:"tr",align:null},"'onRecordStateChanged'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.EVENT.ENTRY_ADDED_EVENT"),(0,l.kt)("td",{parentName:"tr",align:null},"'entry-added'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.ENTRY_REMOVED_EVENT"),(0,l.kt)("td",{parentName:"tr",align:null},"'entry-removed'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EVENT.ENTRY_MOVED_EVENT"),(0,l.kt)("td",{parentName:"tr",align:null},"'entry-moved'")))))}i.isMDXComponent=!0}}]);
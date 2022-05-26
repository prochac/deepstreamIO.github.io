"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[2446],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(n),d=o,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9276:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"HTTP and Log Monitoring",description:"Learn how to use monitor deepstream using http or logs",logoImage:"http.png"},l=void 0,u={unversionedId:"tutorials/plugins/monitoring/monitoring",id:"tutorials/plugins/monitoring/monitoring",title:"HTTP and Log Monitoring",description:"Learn how to use monitor deepstream using http or logs",source:"@site/docs/00-tutorials/60-plugins/60-monitoring/60-monitoring.md",sourceDirName:"00-tutorials/60-plugins/60-monitoring",slug:"/tutorials/plugins/monitoring/",permalink:"/docs/tutorials/plugins/monitoring/",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/00-tutorials/60-plugins/60-monitoring/60-monitoring.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"HTTP and Log Monitoring",description:"Learn how to use monitor deepstream using http or logs",logoImage:"http.png"},sidebar:"tutorialSidebar",previous:{title:"Vertical Cluster Connector",permalink:"/docs/tutorials/plugins/clusternode/vertical"},next:{title:"Plugin Introduction",permalink:"/docs/tutorials/custom-plugins/an-overview"}},c=[{value:"So how can I visualise this?",id:"so-how-can-i-visualise-this",children:[],level:4},{value:"Http monitoring",id:"http-monitoring",children:[],level:3},{value:"Log monitoring",id:"log-monitoring",children:[],level:3}],p={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Deepstream allows you to gather detailed insights into what the server is actually doing. How detailed is really up to you, since you can aggregate data by topic, action or actually go far enough to log each individual subscription name, user, message, anything that goes through the system in one place thus giving complete observability and auditing capabilities."),(0,i.kt)("p",null,"With most users in production we realized the sweet spot in metrics in the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clusterSize": 1,\n  "stateMetrics": {\n    "STATE_REGISTRY": 2,\n    "EVENT_LISTEN_PATTERNS": 0,\n    "EVENT_PUBLISHED_SUBSCRIPTIONS": 0,\n    "RPC_SUBSCRIPTIONS": 1,\n    "RECORD_SUBSCRIPTIONS": 1,\n    "RECORD_LISTEN_PATTERNS": 0,\n    "RECORD_PUBLISHED_SUBSCRIPTIONS": 0,\n    "PRESENCE_SUBSCRIPTIONS": 0,\n    "LOCK": 1\n  },\n  "errors": {\n    "NO_RPC_PROVIDER": 1\n  },\n  "recieved": {\n    "RPC": {\n      "REQUEST": 1,\n      "PROVIDE": 1\n    },\n    "EVENT": {\n      "SUBSCRIBE": 1,\n      "EMIT": 1\n    },\n    "RECORD": {\n      "SUBSCRIBECREATEANDREAD": 1\n    }\n  },\n  "send": {\n    "CONNECTION": {\n      "ACCEPT": 1\n    },\n    "AUTH": {\n      "AUTH_SUCCESSFUL": 1\n    },\n    "RPC": {\n      "NO_RPC_PROVIDER": 1,\n      "PROVIDE": 1\n    },\n    "EVENT": {\n      "SUBSCRIBE": 1\n    },\n    "RECORD": {\n      "SUBSCRIBECREATEANDREAD": 1,\n      "READ_RESPONSE": 1\n    }\n  },\n  "logins": {\n    "websocket": {\n      "allowed": 1,\n      "declined": 0\n    }\n  }\n}\n')),(0,i.kt)("p",null,"This provides us good insight into what the server is actually doing, but doesn't care about the actual subscription names. It's also worth noting that it returns an object with the current state and size of the cluster. This is critical to ensure things are working as expected, essentially making sure all nodes in the cluster are always in the same state."),(0,i.kt)("h4",{id:"so-how-can-i-visualise-this"},"So how can I visualise this?"),(0,i.kt)("p",null,"Usually by using a poll agent like logstash, this takes the json object, transforms it slightly to add some useful meta data and then sends it off to elasticsearch to visualise via Kibana."),(0,i.kt)("p",null,"Deesptream has two prebuilt services for monitoring."),(0,i.kt)("h3",{id:"http-monitoring"},"Http monitoring"),(0,i.kt)("p",null,"Enables an endpoint to get the metrics. After the endpoint is called, metrics are reseted.\nAuthentication can be open or setting a ",(0,i.kt)("inlineCode",{parentName:"p"},"key:value")," in the request header."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"monitoring:\n  type: http\n  # the endpoint url\n  url: /monitoring\n  headerKey: string\n  headerValue: string\n  # for dev purposes in order to skip authentication\n  allowOpenPermissions: false\n\n")),(0,i.kt)("h3",{id:"log-monitoring"},"Log monitoring"),(0,i.kt)("p",null,"Logs the monitoring metrics to be retrieved by a log transport every ",(0,i.kt)("inlineCode",{parentName:"p"},"logInterval")," milliseconds. After the metrics are logged they are reseted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"monitoring:\n  type: log\n  # milliseconds\n  logInterval: number\n  # log key for metrics, defaults to 'DEEPSTREAM_MONITORING'\n  monitoringKey: string\n")))}g.isMDXComponent=!0}}]);
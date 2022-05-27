"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[5928],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6282:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(267),l=n(6125),s=["components"],u={title:"Configuration",description:"The available configuration options to customize deepstream"},p=void 0,d={unversionedId:"docs/server/configuration",id:"docs/server/configuration",title:"Configuration",description:"The available configuration options to customize deepstream",source:"@site/docs/10-docs/10-server/20-configuration.mdx",sourceDirName:"10-docs/10-server",slug:"/docs/server/configuration",permalink:"/docs/docs/server/configuration",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/10-docs/10-server/20-configuration.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Configuration",description:"The available configuration options to customize deepstream"},sidebar:"tutorialSidebar",previous:{title:"Command Line Interface",permalink:"/docs/docs/server/command-line-interface"},next:{title:"Node API",permalink:"/docs/docs/server/node-api"}},c=[{value:"Macros",id:"macros",children:[],level:2},{value:"General Configuration",id:"general-configuration",children:[{value:"serverName",id:"servername",children:[],level:3},{value:"showLogo",id:"showlogo",children:[],level:3},{value:"logLevel",id:"loglevel",children:[],level:3},{value:"dependencyInitializationTimeout",id:"dependencyinitializationtimeout",children:[],level:3},{value:"exitOnFatalError",id:"exitonfatalerror",children:[],level:3},{value:"libDir",id:"libdir",children:[],level:3}],level:2},{value:"Features configuration",id:"features-configuration",children:[],level:2},{value:"RPC Configuration",id:"rpc-configuration",children:[{value:"ackTimeout",id:"acktimeout",children:[],level:3},{value:"responseTimeout",id:"responsetimeout",children:[],level:3},{value:"provideRequestorName",id:"providerequestorname",children:[],level:3},{value:"provideRequestorData",id:"providerequestordata",children:[],level:3}],level:2},{value:"Record Configuration",id:"record-configuration",children:[{value:"cacheRetrievalTimeout",id:"cacheretrievaltimeout",children:[],level:3},{value:"storageRetrievalTimeout",id:"storageretrievaltimeout",children:[],level:3},{value:"storageExclusionPrefixes",id:"storageexclusionprefixes",children:[],level:3},{value:"storageHotPathPrefixes",id:"storagehotpathprefixes",children:[],level:3}],level:2},{value:"Listening",id:"listening",children:[{value:"shuffleProviders",id:"shuffleproviders",children:[],level:3},{value:"responseTimeout",id:"responsetimeout-1",children:[],level:3},{value:"rematchInterval",id:"rematchinterval",children:[],level:3},{value:"matchCooldown",id:"matchcooldown",children:[],level:3}],level:2},{value:"Connection Endpoint Configuration",id:"connection-endpoint-configuration",children:[{value:"Websockets",id:"websockets",children:[{value:"urlPath",id:"urlpath",children:[],level:4},{value:"heartbeatInterval",id:"heartbeatinterval",children:[],level:4},{value:"unauthenticatedClientTimeout",id:"unauthenticatedclienttimeout",children:[],level:4},{value:"maxAuthAttempts",id:"maxauthattempts",children:[],level:4},{value:"logInvalidAuthData",id:"loginvalidauthdata",children:[],level:4},{value:"maxMessageSize",id:"maxmessagesize",children:[],level:4},{value:"outgoingBufferTimeout",id:"outgoingbuffertimeout",children:[],level:4}],level:3},{value:"http",id:"http",children:[],level:3},{value:"mqtt",id:"mqtt",children:[],level:3}],level:2},{value:"Custom Plugin Configuration",id:"custom-plugin-configuration",children:[{value:"path",id:"path",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"options",id:"options",children:[],level:3}],level:2},{value:"Logger",id:"logger",children:[{value:"colors",id:"colors",children:[],level:3}],level:2},{value:"Authentication",id:"authentication",children:[],level:2},{value:"Permissioning",id:"permissioning",children:[{value:"path",id:"path-1",children:[],level:3},{value:"maxRuleIterations",id:"maxruleiterations",children:[],level:3},{value:"cacheEvacuationInterval",id:"cacheevacuationinterval",children:[],level:3}],level:2},{value:"Storage and Cache",id:"storage-and-cache",children:[],level:2},{value:"Monitoring",id:"monitoring",children:[],level:2},{value:"Clusternode",id:"clusternode",children:[{value:"Lock registry",id:"lock-registry",children:[],level:3},{value:"Cluster registry",id:"cluster-registry",children:[],level:3},{value:"Cluster States",id:"cluster-states",children:[],level:3}],level:2},{value:"Custom Plugins",id:"custom-plugins",children:[],level:2}],m={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can make any configuration changes you need for your deepstream setup in the\n",(0,o.kt)("em",{parentName:"p"},"config.yml")," file or in the options object passed to the deepstream constructor when using the node API.\nDepending on the installation sources, the configuration can\nbe found in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"conf")," in the Node.js module directory if you installed with\n",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),", or"),(0,o.kt)("li",{parentName:"ul"},"in the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"conf")," after unpacking the standalone server binary.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default server configuration can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io/blob/master/src/default-options.ts"},"source code here")))),(0,o.kt)("h2",{id:"macros"},"Macros"),(0,o.kt)("p",null,"Before we start diving into config, lets look at the current macros we have in order\nto make our lives a little bit easier:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"${ENVIRONMENT_VARIABLE}"))),(0,o.kt)("p",null,"This is the usual replace environment variable into my config before running, useful\nin around 100% of deployment usecases."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"file(relative/path)"))),(0,o.kt)("p",null,"This allows the server to binary to point to the file relative to your config file. This\nis pretty useful for global and binary installs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fileLoad(relative/path)"))),(0,o.kt)("p",null,"This is more of a utility for us plugin developers, it automatically loads up the data\nand parses it (if json or yml). This means node developers can now just deal with writing\neverything as parsed data and leave loading / parsing and errors to deepstream startup."),(0,o.kt)("h2",{id:"general-configuration"},"General Configuration"),(0,o.kt)("p",null,"In this section you can change general settings for each server in a cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# general configuration with default values\nserverName: UUID\nshowLogo: true\ndependencyInitializationTimeout: 2000\nexitOnFatalError: false\nlogLevel: INFO\n#libDir: ../lib\n")),(0,o.kt)("h3",{id:"servername"},"serverName"),(0,o.kt)("p",null,"Every server in a cluster of servers needs a unique name. You can add your own or set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")," to let deepstream auto-generate a unique ID."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UUID")),(0,o.kt)("h3",{id:"showlogo"},"showLogo"),(0,o.kt)("p",null,"When starting, a server can show the deepstream logo. This setting is best left enabled."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("h3",{id:"loglevel"},"logLevel"),(0,o.kt)("p",null,"The logLevel to use across the application. Sets at what level and above the server should log messages. Valid levels are ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"WARN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"OFF"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": INFO"),(0,o.kt)("h3",{id:"dependencyinitializationtimeout"},"dependencyInitializationTimeout"),(0,o.kt)("p",null,"Sets how long deepstream will wait for dependencies to initialize."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),":",(0,o.kt)("inlineCode",{parentName:"p"},"2000")),(0,o.kt)("h3",{id:"exitonfatalerror"},"exitOnFatalError"),(0,o.kt)("p",null,"Exit if a fatal error occurs"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": false"),(0,o.kt)("h3",{id:"libdir"},"libDir"),(0,o.kt)("p",null,"The directory where all the plugins reside, this is used in standalone binaries"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": None, it assumes all plugins are installed via npm"),(0,o.kt)("h2",{id:"features-configuration"},"Features configuration"),(0,o.kt)("p",null,"This disables specific feature in deepstream, which is a more performant way than disabling via permissions and is also how telemetry figures out what features are enabled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"enabledFeatures:\n  record: true\n  event: true\n  rpc: true\n  presence: true\n")),(0,o.kt)("h2",{id:"rpc-configuration"},"RPC Configuration"),(0,o.kt)("h3",{id:"acktimeout"},"ackTimeout"),(0,o.kt)("p",null,"Sets how long deepstream will wait for a RPC provider to acknowledge receipt of a request."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),":",(0,o.kt)("inlineCode",{parentName:"p"},"1000")),(0,o.kt)("h3",{id:"responsetimeout"},"responseTimeout"),(0,o.kt)("p",null,"Sets how long deepstream will wait for RPCs to complete before sending a response timeout error."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),":",(0,o.kt)("inlineCode",{parentName:"p"},"10000")),(0,o.kt)("h3",{id:"providerequestorname"},"provideRequestorName"),(0,o.kt)("p",null,"Send requestorName by default."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),":",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("h3",{id:"providerequestordata"},"provideRequestorData"),(0,o.kt)("p",null,"Send requestorData by default."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),":",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("h2",{id:"record-configuration"},"Record Configuration"),(0,o.kt)("h3",{id:"cacheretrievaltimeout"},"cacheRetrievalTimeout"),(0,o.kt)("p",null,"Sets how long deepstream will wait when retrieving values from the cache."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),":",(0,o.kt)("inlineCode",{parentName:"p"},"1000")),(0,o.kt)("h3",{id:"storageretrievaltimeout"},"storageRetrievalTimeout"),(0,o.kt)("p",null,"Sets how long deepstream will wait when retrieving values from the database."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),":",(0,o.kt)("inlineCode",{parentName:"p"},"2000")),(0,o.kt)("h3",{id:"storageexclusionprefixes"},"storageExclusionPrefixes"),(0,o.kt)("p",null,"A list of prefixes that, when a record starts with one of the prefixes the\nrecords data won't be stored in the db"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")),(0,o.kt)("h3",{id:"storagehotpathprefixes"},"storageHotPathPrefixes"),(0,o.kt)("p",null,"A list of prefixes that designate a record for direct writes to storage.\nWhen a correctly permissioned matching record is updated via ",(0,o.kt)("inlineCode",{parentName:"p"},"setData()"),", it will be written\ndirectly to the cache and storage without a record transition. This can be up to twice as fast as\nupdating a normal record using ",(0,o.kt)("inlineCode",{parentName:"p"},"setData()")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")),(0,o.kt)("h2",{id:"listening"},"Listening"),(0,o.kt)("h3",{id:"shuffleproviders"},"shuffleProviders"),(0,o.kt)("p",null,"Try finding a provider randomly rather than by the order they subscribed to."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": true"),(0,o.kt)("h3",{id:"responsetimeout-1"},"responseTimeout"),(0,o.kt)("p",null,"The amount of time to wait for a provider to acknowledge or reject a listen request"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": 500"),(0,o.kt)("h3",{id:"rematchinterval"},"rematchInterval"),(0,o.kt)("p",null,"The amount of time before trying to reattempt finding matches for subscriptions. This\nis not a cheap operation so it's recommended to raise keep this at minutes rather then\nsecond intervals if you are experiencing heavy loads"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": 30000"),(0,o.kt)("h3",{id:"matchcooldown"},"matchCooldown"),(0,o.kt)("p",null,"The amount of time a server will refuse to retry finding a subscriber after a previously\nfailed attempt. This is used to avoid servers constantly trying to find a match without a\ncooldown period"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": 10000"),(0,o.kt)("h2",{id:"connection-endpoint-configuration"},"Connection Endpoint Configuration"),(0,o.kt)("p",null,"Deepstream (v5 and later) runs all websocket / HTTP services in one server to which they hook to provide their own functionality. This means you can run all the services at the same time on the same port if you want (for example text, binary and JSON). The idea is that ",(0,o.kt)("em",{parentName:"p"},"EVERYTHING")," (minus MQTT) runs on port 6020, which makes deployments much easier."),(0,o.kt)(r.ZP,{mdxType:"NodeHttpServerConfig"}),(0,o.kt)("p",null,"OR"),(0,o.kt)(l.ZP,{mdxType:"UwsHttpServerConfig"}),(0,o.kt)("p",null,"The server can be configured with custom connection endpoints. You can supply as many as you want, each as any individual list entry below the ",(0,o.kt)("inlineCode",{parentName:"p"},"connectionEndpoints")," key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Connection Endpoint Configuration\nconnectionEndpoints:\n  - type: ws-binary\n    options:\n      # url path websocket connections connect to\n      urlPath: /deepstream\n      # the amount of milliseconds between each ping/heartbeat message\n      heartbeatInterval: 30000\n      # the amount of milliseconds that writes to sockets are buffered\n      outgoingBufferTimeout: 0\n      # the maximum amount of bytes to buffer before flushing, stops the client from large enough packages\n      # to block its responsiveness\n      maxBufferByteSize: 100000\n\n      # Security\n      # should the server log invalid auth data, defaults to false\n      logInvalidAuthData: false\n      # amount of time a connection can remain open while not being logged in\n      unauthenticatedClientTimeout: 180000\n      # invalid login attempts before the connection is cut\n      maxAuthAttempts: 3\n      # maximum allowed size of an individual message in bytes\n      maxMessageSize: 1048576\n\n  - type: ws-text\n    options:\n      # url path websocket connections connect to\n      urlPath: /deepstream-v3\n      # the amount of milliseconds between each ping/heartbeat message\n      heartbeatInterval: 30000\n      # the amount of milliseconds that writes to sockets are buffered\n      outgoingBufferTimeout: 0\n      # the maximum amount of bytes to buffer before flushing, stops the client from large enough packages\n      # to block its responsiveness\n      maxBufferByteSize: 100000\n\n      # Security\n      # should the server log invalid auth data, defaults to false\n      logInvalidAuthData: false\n      # amount of time a connection can remain open while not being logged in\n      unauthenticatedClientTimeout: 180000\n      # invalid login attempts before the connection is cut\n      maxAuthAttempts: 3\n      # maximum allowed size of an individual message in bytes\n      maxMessageSize: 1048576\n\n  - type: ws-json\n    options:\n      # url path websocket connections connect to\n      urlPath: /deepstream-json\n      # the amount of milliseconds between each ping/heartbeat message\n      heartbeatInterval: 30000\n      # the amount of milliseconds that writes to sockets are buffered\n      outgoingBufferTimeout: 0\n      # the maximum amount of bytes to buffer before flushing, stops the client from large enough packages\n      # to block its responsiveness\n      maxBufferByteSize: 100000\n\n      # Security\n      # should the server log invalid auth data, defaults to false\n      logInvalidAuthData: false\n      # amount of time a connection can remain open while not being logged in\n      unauthenticatedClientTimeout: 180000\n      # invalid login attempts before the connection is cut\n      maxAuthAttempts: 3\n      # maximum allowed size of an individual message in bytes\n      maxMessageSize: 1048576\n")),(0,o.kt)("h3",{id:"websockets"},"Websockets"),(0,o.kt)("p",null,"The websocket endpoints share the following options:"),(0,o.kt)("h4",{id:"urlpath"},"urlPath"),(0,o.kt)("p",null,"Sets which URL path Websocket connections should connect to."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"/deepstream")),(0,o.kt)("h4",{id:"heartbeatinterval"},"heartbeatInterval"),(0,o.kt)("p",null,"The number of milliseconds between each ping/heartbeat message."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"30000")),(0,o.kt)("h4",{id:"unauthenticatedclienttimeout"},"unauthenticatedClientTimeout"),(0,o.kt)("p",null,"The amount of time a connection can remain open while not being logged in."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"180000")),(0,o.kt)("h4",{id:"maxauthattempts"},"maxAuthAttempts"),(0,o.kt)("p",null,"Invalid login attempts before the connection is cut."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"3")),(0,o.kt)("h4",{id:"loginvalidauthdata"},"logInvalidAuthData"),(0,o.kt)("p",null,"Controls whether logs should contain the cleartext usernames and passwords of invalid login\nattempts."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": false"),(0,o.kt)("h4",{id:"maxmessagesize"},"maxMessageSize"),(0,o.kt)("p",null,"Sets the maximum message size allowed to be sent to the server (in bytes)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"1048576")),(0,o.kt)("h4",{id:"outgoingbuffertimeout"},"outgoingBufferTimeout"),(0,o.kt)("p",null,"The amount of milliseconds that secondary writes to sockets are buffered. This means\nwrites that are not realtime critical, which currently are either ACKs or\nnon critical ERROR messages."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"0")),(0,o.kt)("h3",{id:"http"},"http"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  - type: http\n    options:\n      # allow 'authData' parameter in POST requests, if disabled only token and OPEN auth is\n      # possible\n      allowAuthData: true\n      # path for POST requests\n      postPath: /api\n      # path for GET requests\n      getPath: /api\n      # should the server log invalid auth data, defaults to false\n      logInvalidAuthData: false\n      # http request timeout in milliseconds, defaults to 20000\n      requestTimeout: 20000\n")),(0,o.kt)("h3",{id:"mqtt"},"mqtt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  - type: mqtt\n    options:\n        # port for the mqtt server\n        port: 1883\n        # host for the mqtt server\n        host: 0.0.0.0\n        # timeout for idle devices\n        idleTimeout: 60000\n")),(0,o.kt)("h2",{id:"custom-plugin-configuration"},"Custom Plugin Configuration"),(0,o.kt)("p",null,"You can extend deepstream with plugins for connectors to other services, these\nare for logging, storage engines, caching layers, and message systems. To enable\na plugin, uncomment the relevant category key underneath the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," key. Each\nplugin type has a path or name, and a set of options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Plugin example using redis\nplugins:\n  myCustomPlugin:\n    path: ./my-custom-plugin\n    options:\n       host: localhost\n       port: 5672\n")),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"Set a path to a JavaScript file, node module or a folder with an ",(0,o.kt)("em",{parentName:"p"},"index.js")," file which exports a constructor."),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"If you are using any of the official deepstream connectors, add the name of what the plugin connects to here, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"redis"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," You can set ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," ",(0,o.kt)("strong",{parentName:"p"},"or")," ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", but not both."))),(0,o.kt)("h3",{id:"options"},"options"),(0,o.kt)("p",null,"Under this key, add sub key/value pairs to set the configuration options that are passed to the plugin. Each plugin should mention what configuration options you can set."),(0,o.kt)("h2",{id:"logger"},"Logger"),(0,o.kt)("p",null,"deepstream uses by default a logger which prints out to ",(0,o.kt)("em",{parentName:"p"},"stdout")," (errors and warnings to ",(0,o.kt)("em",{parentName:"p"},"stderr"),"). You can set these options for the default logger by using the same configuration style for the plugins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"logger:\n  type: default\n  options:\n    colors: true\n")),(0,o.kt)("h3",{id:"colors"},"colors"),(0,o.kt)("p",null,"Sets whether the server's logs should output in color. This will look great in a console, but will\nleave color markers in log files if you redirect the output into a file."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"In this section you can configure the authentication types the server uses."),(0,o.kt)("p",null,"You set the authentication type as a subkey in the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," key. The available\nauthentication options are ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"storage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"http"),", each of them having\ndifferent ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," which are described in the tutorials on ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/core/auth/auth-introduction"},"Auth\nNone"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/core/auth/file"},"file-based\nauthentication"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/core/auth/storage"},"storage-based\nauthentication"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/core/auth/http-webhook"},"HTTP\nauthentication"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/core/auth/jwt-auth"},"JWT authentication")," respectively."),(0,o.kt)("p",null,"You can set multiple authentication types simultaneously and the incoming connection will be validated against each of them until one succeeds or all fail. Authentication strategies will be queried in the same order they are declared on the configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Authentication\nauth:\n  - type: none\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"none")),(0,o.kt)("h2",{id:"permissioning"},"Permissioning"),(0,o.kt)("p",null,"In this section you can configure the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/core/permission/valve-introduction"},"permissioning"),". The key used for this\nsection is ",(0,o.kt)("inlineCode",{parentName:"p"},"permission")," and you can create your own custom permission handler or\nuse a configuration file. To use the former method, select the option\n",(0,o.kt)("inlineCode",{parentName:"p"},"type: none")," and override the ",(0,o.kt)("inlineCode",{parentName:"p"},"permissionHandler")," with the aid of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/server/node-api"},"NodeJS\nserver API"),". To use the latter method, set ",(0,o.kt)("inlineCode",{parentName:"p"},"type: config")," and modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," values below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Permissioning example with default values for config-based permissioning\npermission:\n  type: config\n  options:\n    path: ./permissions.yml\n    maxRuleIterations: 3\n    cacheEvacuationInterval: 60000\n")),(0,o.kt)("h3",{id:"path-1"},"path"),(0,o.kt)("p",null,"Set the path to the file that declares permissions. This option is ",(0,o.kt)("strong",{parentName:"p"},"mandatory"),"\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"type: config"),". The file can be in JSON, JavaScript, or YAML format. By\ndefault, deepstream ships with a ",(0,o.kt)("inlineCode",{parentName:"p"},"permissions.yml")," permitting every action."),(0,o.kt)("h3",{id:"maxruleiterations"},"maxRuleIterations"),(0,o.kt)("p",null,"The deepstream permissions model allows for some complex nested actions and queries. To prevent a performance hit you can limit the nesting level with this option."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"3")),(0,o.kt)("h3",{id:"cacheevacuationinterval"},"cacheEvacuationInterval"),(0,o.kt)("p",null,"The results of permission checks are cached to improve performance. Use this setting to change the time interval (in milliseconds) that the cache is regenerated."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"60000")),(0,o.kt)("h2",{id:"storage-and-cache"},"Storage and Cache"),(0,o.kt)("p",null,"Storage and Cache plugins can be configured as follows, please look at ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/plugins/database/postgres"},"storage")," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/plugins/cache/redis"},"cache")," connectors for in depth tutorials how to configure them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"cache:\n  name: redis\n  options:\n    host: localhost\n    port: 6379\n\nstorage:\n  name: postgres\n  options:\n    user: postgres\n    database: postgres\n    password: mysecretpassword\n    host: 'localhost'\n    port: 5432\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": in memory cache and no storage."),(0,o.kt)("h2",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"Set monitoring options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"monitoring:\n  type: none\n\n  # # Allows monitoring stats to be requested via HTTP, useful for polling agents\n  # # such as LogStash\n  # type: http\n  # options:\n  #   url: /monitoring\n  #   allowOpenPermissions: false\n  #   headerKey: deepstream-password2\n  #   headerValue: deepstream-secret\n\n  # # Logs monitoring stats, useful for kibana where you can visualize meta data\n  # type: log\n  # options:\n  #   logInterval: 30000\n  #   monitoringKey: DEEPSTREAM_MONITORING\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"none")),(0,o.kt)("h2",{id:"clusternode"},"Clusternode"),(0,o.kt)("p",null,"Configuration options for deepstream clusters. Deepstream comes with two possible cluster modes: no cluster and ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/plugins/clusternode/vertical"},"vertical cluster")," in order to use all CPU cores.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/plugins/clusternode/redis"},"here")," in order to use redis as cluster connector in multiple machine deployments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"clusterNode:\n  type: default\n  #name: vertical\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"none")),(0,o.kt)("h3",{id:"lock-registry"},"Lock registry"),(0,o.kt)("p",null,"The lock registry is responsible for maintaing a single source of truth within the cluster, used mainly for issuing cluster wide locks when an operation that stretches over multiple nodes are required. For example, distributed listening requires a leader to drive the nodes in sequence, so issuing a lock prevents multiple nodes from assuming the lead."),(0,o.kt)("p",null,"Check the default server configuration for details, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io/blob/master/src/default-options.ts"},"source code here")),(0,o.kt)("h3",{id:"cluster-registry"},"Cluster registry"),(0,o.kt)("p",null," This class maintains a list of all nodes that are currently present within the cluster. It provides status messages on a predefined interval and keeps track of incoming status messages."),(0,o.kt)("p",null,"Check the default server configuration for details, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io/blob/master/src/default-options.ts"},"source code here")),(0,o.kt)("h3",{id:"cluster-states"},"Cluster States"),(0,o.kt)("p",null," This class provides a generic mechanism that allows to maintain a distributed state amongst the nodes of a cluster. The state is an array of unique strings in arbitrary order. Whenever a string is added by any node within the cluster for the first time,\nan 'add' event is emitted. Whenever its removed by the last node within the cluster, a 'remove' event is emitted."),(0,o.kt)("p",null,"Check the default server configuration for details, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io/blob/master/src/default-options.ts"},"source code here")),(0,o.kt)("h2",{id:"custom-plugins"},"Custom Plugins"),(0,o.kt)("p",null,"Deepstream can be extended with any plugin via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/custom-plugins/an-overview"},"plugin API"),". Custom plugins can be declared as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  custom:\n    path: '...'\n")))}h.isMDXComponent=!0},267:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"httpServer:\n  type: default\n  options:\n    # url path for http health-checks, GET requests to this path will return 200 if deepstream is alive\n    healthCheckPath: /health-check\n    # -- CORS --\n    # if disabled, only requests with an 'Origin' header matching one specified under 'origins'\n    # below will be permitted and the 'Access-Control-Allow-Credentials' response header will be\n    # enabled\n    allowAllOrigins: true\n    # a list of allowed origins\n    origins:\n      - 'https://example.com'\n    # maximum allowed size of a POST request body, in bytes, defaults to 1 MB\n    maxMessageSize: 1048576\n    # Headers to copy over from websocket\n    headers:\n      - user-agent\n    ssl:\n      key: fileLoad(/path/to/sslKey)\n      cert: fileLoad(/path/to/sslCert)\n      ca: fileLoad(/path/to/caAuth)\n")))}s.isMDXComponent=!0},6125:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"httpServer:\n  type: uws\n  options:\n    # url path for http health-checks, GET requests to this path will return 200 if deepstream is alive\n    healthCheckPath: /health-check\n    # -- CORS --\n    # if disabled, only requests with an 'Origin' header matching one specified under 'origins'\n    # below will be permitted and the 'Access-Control-Allow-Credentials' response header will be\n    # enabled\n    allowAllOrigins: true\n    # a list of allowed origins\n    origins:\n      - 'https://example.com'\n    # maximum allowed size of a POST request body, in bytes, defaults to 1 MB\n    maxMessageSize: 1048576\n    # Headers to copy over from websocket\n    headers:\n      - user-agent\n    # Options required to create an ssl app\n    ssl:\n      key: file(ssl/key.pem)\n      cert: file(ssl/cert.pem)\n    ##  dhParams: ...\n    ##  passphrase: ...\n")))}s.isMDXComponent=!0}}]);
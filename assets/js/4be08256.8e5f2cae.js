"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[3579],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1800:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Options",description:"The options that the deepstream javascript client can be initialized with"},c=void 0,s={unversionedId:"docs/client-js/options",id:"docs/client-js/options",title:"Options",description:"The options that the deepstream javascript client can be initialized with",source:"@site/docs/10-docs/20-client-js/20-options.md",sourceDirName:"10-docs/20-client-js",slug:"/docs/client-js/options",permalink:"/docs/docs/client-js/options",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/10-docs/20-client-js/20-options.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Options",description:"The options that the deepstream javascript client can be initialized with"},sidebar:"tutorialSidebar",previous:{title:"Javascript Client",permalink:"/docs/docs/client-js/client"},next:{title:"Event",permalink:"/docs/docs/client-js/event"}},d=[{value:"General Configuration",id:"general-configuration",children:[{value:"mergeStrategy",id:"mergestrategy",children:[],level:3},{value:"reconnectIntervalIncrement",id:"reconnectintervalincrement",children:[],level:3},{value:"heartbeatInterval",id:"heartbeatinterval",children:[],level:3},{value:"maxReconnectAttempts",id:"maxreconnectattempts",children:[],level:3},{value:"subscriptionTimeout",id:"subscriptiontimeout",children:[],level:3},{value:"recordReadAckTimeout",id:"recordreadacktimeout",children:[],level:3},{value:"recordReadTimeout",id:"recordreadtimeout",children:[],level:3},{value:"recordDeleteTimeout",id:"recorddeletetimeout",children:[],level:3},{value:"recordDiscardTimeout",id:"recorddiscardtimeout",children:[],level:3},{value:"offlineEnabled",id:"offlineenabled",children:[],level:3},{value:"storageName",id:"storagename",children:[],level:3},{value:"More",id:"more",children:[],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Options are passed to the client upon initialisation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { DeepstreamClient } = require('@deepstream/client')\nconst client = deepstream( 'localhost:6020', {\n  // custom deepstream options\n  mergeStrategy: deepstream.LOCAL_WINS,\n  subscriptionTimeout: 500,\n})\n")),(0,a.kt)("p",null,"You can finely tune deepstream to meet your specific requirements, including reconnection behaviour and granular timeouts."),(0,a.kt)("h2",{id:"general-configuration"},"General Configuration"),(0,a.kt)("h3",{id:"mergestrategy"},"mergeStrategy"),(0,a.kt)("p",null,"A global merge strategy that is applied whenever two clients write to the same record at the same time. Can be overwritten on a per record level. Default merge strategies are exposed by the client constructor. It's also possible to write custom merge strategies as functions. You can find more on handling data conflicts ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/core/datasync/handling-data-conflicts/"},"here"),(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Type"),": Function",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"MERGE_STRATEGIES.REMOTE_WINS")),(0,a.kt)("h3",{id:"reconnectintervalincrement"},"reconnectIntervalIncrement"),(0,a.kt)("p",null,"Specifies the number of milliseconds by which the time until the next reconnection attempt will be incremented after every unsuccessful attempt.",(0,a.kt)("br",null),"\nE.g.for 1500: if the connection is lost,the client will attempt to reconnect immediately, if that fails it will try again after 1.5 seconds, if that fails it will try again after 3 seconds and so on...",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Type"),": Number",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"4000")),(0,a.kt)("h3",{id:"heartbeatinterval"},"heartbeatInterval"),(0,a.kt)("p",null,"The number of milliseconds to wait before sending a heartbeat. If two heatbeats are missed in a row the client will consider the server to have disconnected and will close the connection in order to establish a new one. ",(0,a.kt)("br",null)),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"client heartbeatInterval > 2 * server heartbeatInterval")," the client will be considered as disconnnected by the server if no other messages are sent.",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Type"),": Number",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"30000")),(0,a.kt)("h3",{id:"maxreconnectattempts"},"maxReconnectAttempts"),(0,a.kt)("p",null,"The number of reconnection attempts until the client gives up and declares the connection closed.",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Type"),": Number",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"5")),(0,a.kt)("h3",{id:"subscriptiontimeout"},"subscriptionTimeout"),(0,a.kt)("p",null,"The number of milliseconds that can pass after providing/unproviding a RPC or subscribing/unsubscribing/listening to a record or event before an error is thrown.",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Type"),": Number",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"2000")),(0,a.kt)("h3",{id:"recordreadacktimeout"},"recordReadAckTimeout"),(0,a.kt)("p",null,"The number of milliseconds from the moment ",(0,a.kt)("inlineCode",{parentName:"p"},"client.record.getRecord()")," is called until an error is thrown since no ack message has been received.",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Type"),": Number",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"1000")),(0,a.kt)("h3",{id:"recordreadtimeout"},"recordReadTimeout"),(0,a.kt)("p",null,"The number of milliseconds from the moment ",(0,a.kt)("inlineCode",{parentName:"p"},"client.record.getRecord()")," is called until an error is thrown since no data has been received.",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Type"),": Number",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"3000")),(0,a.kt)("h3",{id:"recorddeletetimeout"},"recordDeleteTimeout"),(0,a.kt)("p",null,"The number of milliseconds from the moment ",(0,a.kt)("inlineCode",{parentName:"p"},"record.delete()")," is called until an error is thrown since no delete ack message has been received. Please take into account that the deletion is only complete after the record has been deleted from both cache and storage.",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Type"),": Number",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"3000")),(0,a.kt)("h3",{id:"recorddiscardtimeout"},"recordDiscardTimeout"),(0,a.kt)("p",null,"The number of milliseconds from the moment ",(0,a.kt)("inlineCode",{parentName:"p"},"record.discard()")," is called until the record is definitely discarded. Take into account that this interval might lead to some inconsistencies and race conditions if not handled properly.",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Type"),": Number",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"5000")),(0,a.kt)("h3",{id:"offlineenabled"},"offlineEnabled"),(0,a.kt)("p",null,"Enable offline record support using indexdb or localstorage to store data client side.\n",(0,a.kt)("em",{parentName:"p"},"Type"),": Boolean",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h3",{id:"storagename"},"storageName"),(0,a.kt)("p",null,"Set client side offline storage engine, options are ",(0,a.kt)("inlineCode",{parentName:"p"},"indexdb")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"localstorage"),". Localstorage in node requires installing node-localstorage or equivalent API\n",(0,a.kt)("em",{parentName:"p"},"Type"),": String",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"Default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"indexdb")),(0,a.kt)("h3",{id:"more"},"More"),(0,a.kt)("p",null,"See all options in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io-client-js/blob/master/src/client-options.ts"},"source repo")," or access default options through the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Access default options\nconst { Options } = require('@deepstream/client')\n")))}m.isMDXComponent=!0}}]);
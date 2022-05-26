"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[784],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=s(a),u=r,m=h["".concat(d,".").concat(u)]||h[u]||p[u]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4554:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={title:"Record",description:"The API docs for deepstream records"},d=void 0,s={unversionedId:"docs/client-js/datasync-record",id:"docs/client-js/datasync-record",title:"Record",description:"The API docs for deepstream records",source:"@site/docs/10-docs/20-client-js/70-datasync-record.md",sourceDirName:"10-docs/20-client-js",slug:"/docs/client-js/datasync-record",permalink:"/docs/docs/client-js/datasync-record",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/10-docs/20-client-js/70-datasync-record.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Record",description:"The API docs for deepstream records"},sidebar:"tutorialSidebar",previous:{title:"RPC Response",permalink:"/docs/docs/client-js/reqres-response"},next:{title:"Record Factory",permalink:"/docs/docs/client-js/datasync-client-record"}},c=[{value:"Creating records",id:"creating-records",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Events",id:"events",children:[{value:"hasProviderChanged",id:"hasproviderchanged",children:[],level:3},{value:"delete",id:"delete",children:[],level:3},{value:"discard",id:"discard",children:[],level:3},{value:"error",id:"error",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"whenReady(callback? | Promise)",id:"whenreadycallback--promise",children:[],level:3},{value:"set(path, value, callback?)",id:"setpath-value-callback",children:[{value:"Write error notification feature",id:"write-error-notification-feature",children:[],level:4}],level:3},{value:"setWithAck(path, value)",id:"setwithackpath-value",children:[],level:3},{value:"get(path)",id:"getpath",children:[],level:3},{value:"subscribe(path, callback, triggerNow)",id:"subscribepath-callback-triggernow",children:[],level:3},{value:"unsubscribe(path, callback)",id:"unsubscribepath-callback",children:[],level:3},{value:"discard()",id:"discard-1",children:[],level:3},{value:"delete()",id:"delete-1",children:[],level:3},{value:"erase(path: string)",id:"erasepath-string",children:[],level:3},{value:"eraseWithAck(path: string, callback? | Promise)",id:"erasewithackpath-string-callback--promise",children:[],level:3}],level:2}],p={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Records are one of deepstream's core features. A Record is an arbitrary JSON data structure that can be created, retrieved, updated, deleted and listened to. Records are created and retrieved using ",(0,i.kt)("inlineCode",{parentName:"p"},"client.record.getRecord('name')")),(0,i.kt)("p",null,"To learn more about how they are used, have a look at the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/core/datasync/records/"},"Record Tutorial"),"."),(0,i.kt)("h2",{id:"creating-records"},"Creating records"),(0,i.kt)("p",null,"Records are created and retrieved using ",(0,i.kt)("inlineCode",{parentName:"p"},"client.record.getRecord( 'name' );")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const recordName = `user/${client.getUid()}` // "user/iqaphzxy-2o1pnsvcnbo"\nconst record = client.record.getRecord(recordName)\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the record, as specified when calling ",(0,i.kt)("inlineCode",{parentName:"td"},"client.record.getRecord( name )"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isReady"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"True once the record has received its current data and emitted the ",(0,i.kt)("inlineCode",{parentName:"td"},"'ready'")," event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hasProvider"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"True once a listener accepts subscriptions to a record. Otherwise there are no active listeners. The ",(0,i.kt)("inlineCode",{parentName:"td"},"'hasProviderChanged'")," event is proving the information whenever the values has been changed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isDestroyed"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"True once the record has been discarded or deleted. The record would need to be retrieved again via `client.record.getRecord( name )")))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"hasproviderchanged"},"hasProviderChanged"),(0,i.kt)("p",null,"Emitted whenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"hasProvider")," property has been changed. Argument is the ",(0,i.kt)("inlineCode",{parentName:"p"},"hasProvider")," property."),(0,i.kt)("h3",{id:"delete"},"delete"),(0,i.kt)("p",null,"Emitted when the record was deleted, whether by this client or by another."),(0,i.kt)("h3",{id:"discard"},"discard"),(0,i.kt)("p",null,"Emitted once the record was discarded."),(0,i.kt)("h3",{id:"error"},"error"),(0,i.kt)("p",null,"Emitted if the record encounters an error. The error message is passed to the event callback."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"whenreadycallback--promise"},"whenReady(callback? | Promise)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callback"),(0,i.kt)("td",{parentName:"tr",align:null},"Function"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A function that should be invoked as soon as the record is ready.")))),(0,i.kt)("p",null,"Immediately executes the callback if the record is ready. Otherwise, it registers it as a callback for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," event."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Callback\nrecord.whenReady(record => {\n  // data has now been loaded\n})\n\n// ES6\nawait record.whenReady()\n")),(0,i.kt)("h3",{id:"setpath-value-callback"},"set(path, value, callback?)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A particular path within the JSON structure that should be set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"Various"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The value the record or path should be set to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callback"),(0,i.kt)("td",{parentName:"tr",align:null},"Function"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Will be called with the result of the write when using record write acknowledgements")))),(0,i.kt)("p",null,"Used to set the record's data and can be called with a value. A path and callback can optionally be included."),(0,i.kt)("p",null,"Including a callback will indicate that write acknowledgement to cache or\nstorage is required and will slow down the operation."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After calling ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),", you still have to wait for the record to be ready before a ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," call will return the value assigned by ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Set the entire record's data\nrecord.set({\n  personalData: {\n    firstname: 'Homer',\n    lastname: 'Simpson',\n    status: 'married'\n  },\n  children: ['Bart', 'Maggie', 'Lisa']\n});\n\n// Update only firstname\nrecord.set('personalData.firstname', 'Marge')\n\n// Set the entire record with write acknowledgement\nrecord.set({\n  personalData: { ... },\n  children: [ ... ]\n}, err => {\n  if (err) {\n    console.log('Record set with error:', err)\n  } else {\n    console.log('Record set without error')\n  }\n});\n\n// Update only a property with write acknowledgement\nrecord.set('personalData.firstname', 'Homer', err => {\n  if (err) {\n    console.log('Record set with error:', err)\n  } else {\n    console.log('Record set without error')\n  }\n})\n")),(0,i.kt)("h4",{id:"write-error-notification-feature"},"Write error notification feature"),(0,i.kt)("p",null,"Starting with deepstream v6, there is slight change in the ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," logic that allows faster operations with write error notification. If writing to cache or storage fails, a ",(0,i.kt)("inlineCode",{parentName:"p"},"RECORD_UPDATE_ERROR")," error message will be forwarded to the record instance that can be listened to and thus manage the write error from the client, without having to explicitely wait for the write acknowledgement. Before deepstream v6 if such error ocurred the client was not aware of it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const record = client.record.getRecord('test')\n// set record data without write ack\nrecord.set({ data: 'ok' })\nrecord.set('path', 5)\n\n// record error listener\nrecord.on('error', (e) => {\n  if (e === 'RECORD_UPDATE_ERROR') {\n    // write to database or cache failed\n    // handle it properly: retry or nuke the operation...\n  }\n})\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"RECORD_UPDATE_ERROR")," is emitted, all pending operations with write acknowledgement will receive the error message callback. This is due to the fact that a write error could potentially corrupt data and thus leave the record instance out of sync with the database."))),(0,i.kt)("h3",{id:"setwithackpath-value"},"setWithAck(path, value)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A particular path within the JSON structure that should be set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"Various"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The value the record or path should be set to")))),(0,i.kt)("p",null,"Used to set the record's data and can be called with a value. A path can optionally be included."),(0,i.kt)("p",null,"This function returns a promise that fulfills when writing to cache or storage completed thus slowing down the operation."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After awaiting ",(0,i.kt)("inlineCode",{parentName:"p"},"setWithAck"),", the data is persisted so using ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," will retrieve the updated record."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Set the entire record's data with write acknowledgement\nawait record.setWithAck({\n  personalData: {\n    firstname: 'Homer',\n    lastname: 'Simpson',\n    status: 'married'\n  },\n  children: ['Bart', 'Maggie', 'Lisa']\n});\n\n// Update only firstname with write acknowledgement\nawait record.setWithAck('personalData.firstname', 'Marge')\n")),(0,i.kt)("h3",{id:"getpath"},"get(path)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A particular path within the JSON structure that should be retrieved.")))),(0,i.kt)("p",null,"Used to return the record's data but if called without an argument, will return all the data. ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," can also be used to retrive a specific part by defining a path string. If the path can not be found, ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," will be returned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"record.get() // Returns entire object\nrecord.get('children[1]') // 'Maggie'\nrecord.get('personalData.firstname') // 'Homer'\n")),(0,i.kt)("h3",{id:"subscribepath-callback-triggernow"},"subscribe(path, callback, triggerNow)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A path within the JSON structure that should be subscribed to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callback"),(0,i.kt)("td",{parentName:"tr",align:null},"Function"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"A function that is called whenever the value changes and the data passed through.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"triggerNow"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, the callback function will be called immediately with the current value.")))),(0,i.kt)("p",null,"Registers that a function will be called whenever the record's value changes. All of the record's data can be subscribed to by providing a callback function or when changes are performed to a specific path within the record."),(0,i.kt)("p",null,"Optional: Passing ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," will execute the callback immediately with the record's current value."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Subscribe is an operation done per record instance. Each time you call ",(0,i.kt)("inlineCode",{parentName:"p"},"client.getRecord(name)")," you can subscribe and then unsubscribe to that specific record instance."))),(0,i.kt)("p",null,"Listening to any changes on the record:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Subscribe to any change of the record\nfunction userDataChanged(data) {\n  // do stuff...\n}\nuser.subscribe(userDataChanged)\n")),(0,i.kt)("p",null,"Listening to changes on a specific path within the record:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Only subscribe to the status of the user\nfunction statusChanged( status ) {\n  if (status === 'married') {\n    // I want my childhood back!\n  }\n}\nuser.subscribe('status', statusChanged, true)\n")),(0,i.kt)("h3",{id:"unsubscribepath-callback"},"unsubscribe(path, callback)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"The path that was previously used for subscribe.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callback"),(0,i.kt)("td",{parentName:"tr",align:null},"Function"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The previously registered callback function.")))),(0,i.kt)("p",null,"Removes a subscription previous made using ",(0,i.kt)("inlineCode",{parentName:"p"},"record.subscribe()"),". Defining a path with ",(0,i.kt)("inlineCode",{parentName:"p"},"unsubscribe")," removes that specific path, or with a callback, can remove it from generic subscriptions."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"unsubscribe")," is entirely a client-side operation. To notify the server that the app would no longer interested in the record, use ",(0,i.kt)("inlineCode",{parentName:"p"},"discard()")," instead."))),(0,i.kt)("p",null,"Unsubscribe all callbacks registered with the path ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"user.unsubscribe('status')\n")),(0,i.kt)("p",null,"Unsubscribe a specific callback registered for the path ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"user.unsubscribe('status', statusChanged)\n")),(0,i.kt)("p",null,"Unsubscribe a specific callback registered for the record:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"user.unsubscribe(userDataChanged)\n")),(0,i.kt)("p",null,"Unsubscribe all callbacks not associated with a path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"user.unsubscribe()\n")),(0,i.kt)("h3",{id:"discard-1"},"discard()"),(0,i.kt)("p",null,"Removes all change listeners and notifies the server that client no longer wants updates for this record instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"user.discard()\n")),(0,i.kt)("p",null,"Make sure to avoid race conditions, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"recordDiscardTimeout")," ",(0,i.kt)("a",{parentName:"p",href:"options#recorddiscardtimeout"},"option")," that will define the number of milliseconds before actually executing the discard operation."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is important to use this operation for record instances that are no longer needed in order to remove listeners."))),(0,i.kt)("h3",{id:"delete-1"},"delete()"),(0,i.kt)("p",null,"This permanently deletes the record on the server for all users."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"user.delete()\n")),(0,i.kt)("p",null,"Make sure to avoid race conditions, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"recordDeleteTimeout")," ",(0,i.kt)("a",{parentName:"p",href:"options#recorddeletetimeout"},"option")," that will define the number of milliseconds before actually executing the delete operation."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since deleting a record means that it no longer exists, the resulting action will be a forced discard to all clients with that record. Creating a record directly after deleting it without waiting for the ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," event can end up in a race condition. Try to ensure the record has been deleted succesfully to avoid edge cases."))),(0,i.kt)("h3",{id:"erasepath-string"},"erase(path: string)"),(0,i.kt)("p",null,"Deletes a path from the record. Equivalent to doing ",(0,i.kt)("inlineCode",{parentName:"p"},"record.set(path, undefined)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"user.erase('name')\n")),(0,i.kt)("h3",{id:"erasewithackpath-string-callback--promise"},"eraseWithAck(path: string, callback? | Promise)"),(0,i.kt)("p",null,"Deletes a path from the record and either takes a callback that will be called when the write has been done or returns a promise that will resolve when the write is done."))}h.isMDXComponent=!0}}]);
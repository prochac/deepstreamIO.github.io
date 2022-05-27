"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[1829],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1307:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],s={title:"List",description:"API docs for deepstream's list object, a manageable collection of record names"},d=void 0,o={unversionedId:"docs/client-js/datasync-list",id:"docs/client-js/datasync-list",title:"List",description:"API docs for deepstream's list object, a manageable collection of record names",source:"@site/docs/10-docs/20-client-js/100-datasync-list.md",sourceDirName:"10-docs/20-client-js",slug:"/docs/client-js/datasync-list",permalink:"/docs/docs/client-js/datasync-list",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/10-docs/20-client-js/100-datasync-list.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"List",description:"API docs for deepstream's list object, a manageable collection of record names"},sidebar:"tutorialSidebar",previous:{title:"Anonymous Record",permalink:"/docs/docs/client-js/datasync-anonymous-record"},next:{title:"HTTP API",permalink:"/docs/docs/client-http/v1"}},c=[{value:"Creating lists",id:"creating-lists",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Events",id:"events",children:[{value:"entry-added",id:"entry-added",children:[],level:3},{value:"entry-moved",id:"entry-moved",children:[],level:3},{value:"entry-removed",id:"entry-removed",children:[],level:3},{value:"delete",id:"delete",children:[],level:3},{value:"discard",id:"discard",children:[],level:3},{value:"error",id:"error",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"whenReady( callback )",id:"whenready-callback-",children:[],level:3},{value:"isEmpty()",id:"isempty",children:[],level:3},{value:"getEntries()",id:"getentries",children:[],level:3},{value:"setEntries( entries )",id:"setentries-entries-",children:[],level:3},{value:"addEntry( entry, index )",id:"addentry-entry-index-",children:[],level:3},{value:"removeEntry( entry, index )",id:"removeentry-entry-index-",children:[],level:3},{value:"subscribe( callback, triggerNow )",id:"subscribe-callback-triggernow-",children:[],level:3},{value:"unsubscribe( callback )",id:"unsubscribe-callback-",children:[],level:3},{value:"discard()",id:"discard-1",children:[],level:3},{value:"delete()",id:"delete-1",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Lists are collections of record names. To learn more about how they are used, have a look at the ",(0,l.kt)("a",{parentName:"p",href:"../../tutorials/core/datasync/lists/"},"List Tutorial"),"."),(0,l.kt)("p",null,"Lists and record names have an ",(0,l.kt)("inlineCode",{parentName:"p"},"n:m")," relationship. A record name can be part of many lists and a list can contain many record names. A list can also contain the same record name multiple times."),(0,l.kt)("h2",{id:"creating-lists"},"Creating lists"),(0,l.kt)("p",null,"Lists are created and retrieved using ",(0,l.kt)("inlineCode",{parentName:"p"},"client.record.getList( 'name' );")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const list = client.record.getList( 'cars' );\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the list, as specified when calling ",(0,l.kt)("inlineCode",{parentName:"td"},"client.record.getList( 'name' );"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isReady"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True once the list has received its current data and emitted the ",(0,l.kt)("inlineCode",{parentName:"td"},"'ready'")," event")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"entry-added"},"entry-added"),(0,l.kt)("p",null,"Emitted whenever a new entry is added to the list. Passes the entry and its position within the list to the callback."),(0,l.kt)("h3",{id:"entry-moved"},"entry-moved"),(0,l.kt)("p",null,"Emitted whenever an entry is moved within the list. Passes the entry and its new position within the list to the callback."),(0,l.kt)("h3",{id:"entry-removed"},"entry-removed"),(0,l.kt)("p",null,"Emitted whenever an entry is removed from the list. Passes the entry and its last position within the list to the callback."),(0,l.kt)("h3",{id:"delete"},"delete"),(0,l.kt)("p",null,"Emitted when the list was deleted, whether by this client or by another."),(0,l.kt)("h3",{id:"discard"},"discard"),(0,l.kt)("p",null,"Emitted once the list was discarded."),(0,l.kt)("h3",{id:"error"},"error"),(0,l.kt)("p",null,"Emitted if the list encounters an error. The error message is passed to the event callback."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"whenready-callback-"},"whenReady( callback )"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"A function that will be invoked as soon as the list is ready. Receives the list as an argument")))),(0,l.kt)("p",null,"Invokes ",(0,l.kt)("inlineCode",{parentName:"p"},"callback")," once the list has been loaded. This might happen synchronously if the list is already available or asynchronously if the list still needs to be retrieved. Some methods, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"addEntry()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"setEntries()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"subscribe()")," can be used before the list is ready."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Callback\nlist.whenReady( ( list ) => {\n  // interact with the list\n});\n\n// ES6\nawait list.whenReady()\n")),(0,l.kt)("h3",{id:"isempty"},"isEmpty()"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," if the list has entries or ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if it doesn't."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"if( list.isEmpty() ) {\n  // You don't have any entries\n}\n")),(0,l.kt)("h3",{id:"getentries"},"getEntries()"),(0,l.kt)("p",null,"Returns an array of the current entries in the list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const entries = list.getEntries()\nconsole.log( entries ) // [ 'car/1', 'car2' ]\n")),(0,l.kt)("h3",{id:"setentries-entries-"},"setEntries( entries )"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"entries"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of record name strings")))),(0,l.kt)("p",null,"Sets the contents of the list to the provided array of record names. To add or remove specific entries use ",(0,l.kt)("inlineCode",{parentName:"p"},"addEntry()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"removeEntry()")," respectively."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"list.setEntries( [ 'car/1', 'car/2' ] );\n")),(0,l.kt)("h3",{id:"addentry-entry-index-"},"addEntry( entry, index )"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"entry"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"A record name that should be added to the list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"An optional index that the new entry should be inserted at. If omitted, the new entry is appended to the end of the list.")))),(0,l.kt)("p",null,"Adds a new record name to the list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function addCar( number ) {\n  const id = 'car/' + client.getUid();\n  client.record.getRecord( id ).set( 'number', number );\n  list.addEntry( id );\n}\n")),(0,l.kt)("h3",{id:"removeentry-entry-index-"},"removeEntry( entry, index )"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"entry"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"A record name that should be removed to the list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"An optional index that the entry should be removed from at. If ommited, all entries of the given name will be removed.")))),(0,l.kt)("p",null,"Removes an entry from the list. ",(0,l.kt)("inlineCode",{parentName:"p"},"removeEntry")," will not throw any error if the entry doesn't exist."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function removeCar( carRecord ) {\n  list.removeEntry( carRecord.name );\n}\n")),(0,l.kt)("h3",{id:"subscribe-callback-triggernow-"},"subscribe( callback, triggerNow )"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback function that will be called whenever the content of the list changes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"triggerNow"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, the callback function will be called immediately with the current value")))),(0,l.kt)("p",null,"Registers a function that will be invoked whenever any changes to the list's contents occur. Optionally you can also pass ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," to execute the callback function straight away with the list's current entries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function listChanged( entries ) {\n  // entries in list has changed\n}\nlist.subscribe( listChanged, false );\n")),(0,l.kt)("h3",{id:"unsubscribe-callback-"},"unsubscribe( callback )"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"The previously registered callback function. If ommited, all listeners will be unsubscribed.")))),(0,l.kt)("p",null,"Removes a subscription that was previously made using ",(0,l.kt)("inlineCode",{parentName:"p"},"list.subscribe()")),(0,l.kt)("p",null,"Please Note: unsubscribe is purely a client side operation. To notify the server\nthat the app no longer requires updates for this list use ",(0,l.kt)("inlineCode",{parentName:"p"},"discard()"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"list.unsubscribe( listChanged );\n")),(0,l.kt)("h3",{id:"discard-1"},"discard()"),(0,l.kt)("p",null,"Removes all change listeners and notifies the server that the client is no longer interested in updates for this list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"list.discard();\n")),(0,l.kt)("p",null,"[","[info]","]\n| It is important to make sure that ",(0,l.kt)("inlineCode",{parentName:"p"},"discard()")," is called for any list that's no longer needed. If you only remove the listeners using ",(0,l.kt)("inlineCode",{parentName:"p"},"unsubscribe()")," the server won't be notified and will continue to send updates to the client."),(0,l.kt)("h3",{id:"delete-1"},"delete()"),(0,l.kt)("p",null,"Deletes the list on the server. This action deletes the list for all users from both cache and storage and is irreversible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"list.delete();\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[1775],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,g=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7942:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],l={title:"Query connected clients",tags:["Javascript","Presence"]},a=void 0,c={unversionedId:"tutorials/core/presence/query-clients",id:"tutorials/core/presence/query-clients",title:"Query connected clients",description:"deepstream's presence feature allows the users in your application to track the online or offline status of other users.",source:"@site/docs/00-tutorials/20-core/60-presence/10-query-clients.md",sourceDirName:"00-tutorials/20-core/60-presence",slug:"/tutorials/core/presence/query-clients",permalink:"/docs/tutorials/core/presence/query-clients",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/00-tutorials/20-core/60-presence/10-query-clients.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Presence",permalink:"/docs/tags/presence"}],version:"current",sidebarPosition:10,frontMatter:{title:"Query connected clients",tags:["Javascript","Presence"]},sidebar:"tutorialSidebar",previous:{title:"Remote Procedure Calls",permalink:"/docs/tutorials/core/request-response/rpc"},next:{title:"Records",permalink:"/docs/tutorials/core/datasync/records"}},u=[{value:"getAll()",id:"getall",children:[],level:2},{value:"subscribe()",id:"subscribe",children:[],level:2},{value:"unsubscribe()",id:"unsubscribe",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"deepstream's presence feature allows the users in your application to track the online or offline status of other users."),(0,i.kt)("p",null,"It is possible to ask presence to either send you a list of all the people who are currently logged in or to send you a notification whenever the login status of a client who is already authenticated changes. Presence comes with the following three methods:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getAll()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unsubscribe()")),(0,i.kt)("h2",{id:"getall"},"getAll()"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll()")," method we can retrieve the status of connected clients at any particular instance of time. This can be done in two ways!"),(0,i.kt)("p",null,"If you would like to see all the users who are online in your application, you could just do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"client.presence.getAll((error, usernames) => {\n  // error = null, usernames = ['Homer', 'Marge', 'Lisa']\n})\n")),(0,i.kt)("p",null,"The above function would return all the users who are currently logged in into your application."),(0,i.kt)("p",null,"Optionally, you can retrieve the online/offline status of only selected users and not everyone else by doing the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"client.presence.getAll(['Homer', 'Marge', 'Lisa'], (error, result) => {\n  /*\n    error = null,\n    clients = {\n      'Homer': true,\n      'Marge': true,\n      'Lisa': false\n    }\n  */\n})\n")),(0,i.kt)("h2",{id:"subscribe"},"subscribe()"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe()")," method to enable continous observation of client logins and logouts. In simple terms, when you subscribe using presence, you receive a notification whenever an existing client logs out or a new client logs in. This also has two scenarios:"),(0,i.kt)("p",null,"If you wish to observe ALL your clients' login/logout activities, you could do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function presenceCallback(username, login) {\n  if (login === true) {\n    // handle login\n  } else {\n    // handle logout\n  }\n}\n// Client A\nclient.presence.subscribe(presenceCallback)\n")),(0,i.kt)("p",null,"In the above subscribe function, the server returns the username along with the login status everytime this changes for any connected user."),(0,i.kt)("p",null,"Alternatively, if you wish to observe the login/logout activity of only a particular client, you can do so by sending the username in the subscribe function as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Client A\nclient.presence.subscribe('Marge', presenceCallback)\n")),(0,i.kt)("p",null,"It is important to understand that if a user logs in on multiple devices, only the first login instance and the last logout instance will be counted as a legitimate state change by presence. Hence, if you login into multiple devices and logout of one of them, your status remains as logged in until you log out of the last device/browser."),(0,i.kt)("h2",{id:"unsubscribe"},"unsubscribe()"),(0,i.kt)("p",null,"As the term itself suggests, if you are already subscribed to notifications but no longer wish to continue receiving notifications, simply use the  ",(0,i.kt)("inlineCode",{parentName:"p"},"unsubscribe()")," method."),(0,i.kt)("p",null,"Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Client A\nclient.presence.unsubscribe(presenceCallback)\n")),(0,i.kt)("p",null,"Presence is important because it is the only way to know the connection status of a user and further query on it for any use cases."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[1400],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8987:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],o={title:"Valve Introduction",description:"Learn permissions with Valve"},l=void 0,p={unversionedId:"tutorials/core/permission/valve-introduction",id:"tutorials/core/permission/valve-introduction",title:"Valve Introduction",description:"Learn permissions with Valve",source:"@site/docs/00-tutorials/20-core/30-permission/10-valve-introduction.md",sourceDirName:"00-tutorials/20-core/30-permission",slug:"/tutorials/core/permission/valve-introduction",permalink:"/docs/tutorials/core/permission/valve-introduction",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/00-tutorials/20-core/30-permission/10-valve-introduction.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Valve Introduction",description:"Learn permissions with Valve"},sidebar:"tutorialSidebar",previous:{title:"Authentication using JWT",permalink:"/docs/tutorials/core/auth/jwt-auth"},next:{title:"Valve Simple",permalink:"/docs/tutorials/core/permission/valve-simple"}},d=[{value:"Requirements",id:"requirements",children:[{value:"Let&#39;s start with an example",id:"lets-start-with-an-example",children:[],level:3}],level:2},{value:"Permissioning",id:"permissioning",children:[{value:"File Format",id:"file-format",children:[],level:3},{value:"Identifier Matching",id:"identifier-matching",children:[],level:3},{value:"Expressions",id:"expressions",children:[],level:3},{value:"Records",id:"records",children:[],level:3},{value:"User Presence",id:"user-presence",children:[],level:3},{value:"Events",id:"events",children:[],level:3},{value:"RPCs",id:"rpcs",children:[],level:3},{value:"Configuring for File-Based Permissioning",id:"configuring-for-file-based-permissioning",children:[],level:3}],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"deepstream uses a powerful permission-language called Valve that allows you to specify which user can perform which action with which data."),(0,a.kt)("p",null,"With Valve you can"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Restrict access for individual users or groups"),(0,a.kt)("li",{parentName:"ul"},"Permission individual actions (e.g. write, publish or listen)"),(0,a.kt)("li",{parentName:"ul"},"Permission individual records, events or rpcs"),(0,a.kt)("li",{parentName:"ul"},"validate incoming data"),(0,a.kt)("li",{parentName:"ul"},"compare against stored data")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"For this tutorial it's helpful to know your way around the deepstream ",(0,a.kt)("a",{parentName:"p",href:"../../../docs/server/configuration"},"configuration")," as we'll need to tell the server where we stored our permissioning rules. deepstream supports a variety of communication concepts such as data-sync, publish-subscribe or request-response and ",(0,a.kt)("em",{parentName:"p"},"Valve")," is flexible enough to allow different rules for each concept. This guide will mostly focus on ",(0,a.kt)("a",{parentName:"p",href:"../../core/datasync/records"},"records"),", so it'd be good to familiarize yourself with them. Since permissioning is fundamentally about the rights of individual clients, it would also be good to know how ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/security"},"user authentication")," works in deepstream."),(0,a.kt)("h3",{id:"lets-start-with-an-example"},"Let's start with an example"),(0,a.kt)("p",null,"Imagine you are running a discussion forum. To avoid vandalism and spam, users have to wait 24 hours before they can create new posts or modify existing posts after registration. This means we'll need to store the time the user registered along with their account information. This can be done dynamically using ",(0,a.kt)("a",{parentName:"p",href:"../../core/auth/http-webhook"},"http authentication"),", but to keep things simple for this tutorial we'll just store it as ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverData")," using deepstream's file-based authentication. A user entry in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/users.yml")," might look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"JohnDoe:\n    password: gvb4563Z\n    serverData:\n        timestamp: 1482256123052\n")),(0,a.kt)("p",null,"The snippet above shows a user ",(0,a.kt)("inlineCode",{parentName:"p"},"JohnDoe"),". The server hosting the forum needs to\nknow when John Doe registered so there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverData"),"\nsection."),(0,a.kt)("p",null,"With deepstream as a back-end, it makes sense to store all forum threads in records (this is the ",(0,a.kt)("a",{parentName:"p",href:"../datasync/records"},"data-sync concept"),"). The following Valve snippet gives new users read-only access:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'record:\n    "*":\n        read: true\n        listen: true\n        delete: false\n        create: "user.data.timestamp + 24 * 3600 * 1000 < now"\n        write: "user.data.timestamp + 24 * 3600 * 1000 < now"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"record")," label signifies that the following rules apply to operations involving records; the pattern in the line below is a wild card matching every record name. In deepstream, records can be created, written to, deleted, read from, and you can listen to clients subscribing to a record. With Valve, you can have different permissions for each of these actions. In the Valve snippet above, we permit everyone to read records, listen to subscription, and we disallow record deletion. Finally, in the last two lines we grant users ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," permissions only if the accounts are older than 24 hours by comparing the ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp")," from the user's ",(0,a.kt)("inlineCode",{parentName:"p"},"serverData")," with the current time; ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," returns ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix time")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"Date.now()")," in JavaScript, in milliseconds and 24 ","*"," 3600 ","*"," 1000 milliseconds are 24 hours."),(0,a.kt)("p",null,"Lastly, we need to update the config file to make use of our custom permissions. Assuming we stored the permissions in the path ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/permissions.yml"),", we can instruct the deepstream server to load our settings with the following lines in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"permission:\n    type: config\n    options:\n        path: ./permissions.yml\n")),(0,a.kt)("p",null,"As you saw above, setting up deepstream's file-based permissioning facilities requires a file with permissioning rules, changes to the configuration file, and optionally some user-specific data."),(0,a.kt)("h2",{id:"permissioning"},"Permissioning"),(0,a.kt)("p",null,"A generic Valve rule might look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'concept:\n    "pattern":\n        action: "expression"\n')),(0,a.kt)("p",null,"For every action, there is usually a corresponding function in the client API, e.g., the record ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," permissions are needed when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"record.set()")," in\nthe JavaScript client API. Every record, RPC, event, and authenticated user in deepstream possesses a unique identifier (a name) and if Valve wants to find out\nif a certain operation is permitted, then"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it looks for the appropriate section in the permissioning file for records, RPCs, or events, and so on,"),(0,a.kt)("li",{parentName:"ul"},"it searches for the rule with the best match between pattern and identifier, and"),(0,a.kt)("li",{parentName:"ul"},"it evaluates the right-hand side expression.")),(0,a.kt)("p",null,"In the following paragraphs, we present the possible actions."),(0,a.kt)("h3",{id:"file-format"},"File Format"),(0,a.kt)("p",null,"The Valve language uses ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML")," or ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON")," file format and the file with the\npermissioning rules must always contain rules for every possible identifier because the server will not supply default values. Note that the deepstream server ships with a permissions file in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/permissions.yml")," which permits every action. Valve is designed to first and foremost use identifiers to match permissionable objects with corresponding rules. Thus, identifiers should be chosen such that rules can be selected only based on the identifier."),(0,a.kt)("h3",{id:"identifier-matching"},"Identifier Matching"),(0,a.kt)("p",null,"Valve can match identifiers using fixed (sub-)strings, wild cards, and placeholders (with deepstream, we call them ",(0,a.kt)("em",{parentName:"p"},"path variables"),"); these placeholders can be used in the expressions. Suppose we store a user's first name, middle name, and last name in the format ",(0,a.kt)("inlineCode",{parentName:"p"},"name/lastname/middlename/firstname")," and have a look at the following Valve code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"presence:\n    'name/Doe/$middlename/$firstname':\n        allow: false\n")),(0,a.kt)("p",null,"User names that match this rule are, e.g., John Adam Doe (in this case, the record identifier is ",(0,a.kt)("inlineCode",{parentName:"p"},"name/Doe/Adam/John"),") or Jane Eve Doe (",(0,a.kt)("inlineCode",{parentName:"p"},"name/Doe/Eve/Jane"),"); in the former case, ",(0,a.kt)("inlineCode",{parentName:"p"},"$firstname === 'John'")," and in the latter case ",(0,a.kt)("inlineCode",{parentName:"p"},"$firstname === 'Jane'"),"."),(0,a.kt)("p",null,"The wild card symbol in Valve is the asterisk (the symbol ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," matches every character until the end of the string. Placeholders start with a dollar\nsign followed by alphanumeric characters and match everything until a slash is encountered. In principle, identifiers can contain any character. Nevertheless,\nif you use an asterisk in an identifier, deepstream offers no way to match specifically this character."),(0,a.kt)("h3",{id:"expressions"},"Expressions"),(0,a.kt)("p",null,"After identifier matching, deepstream will evaluate the right-hand side expression. The expression can use a subset of JavaScript including"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"arithmetic expressions,"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"},"conditional operator"),","),(0,a.kt)("li",{parentName:"ul"},"comparison operators,"),(0,a.kt)("li",{parentName:"ul"},"the string functions ",(0,a.kt)("inlineCode",{parentName:"li"},"startsWith"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"endsWith"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"indexOf"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"match"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"toUpperCase"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"toLowerCase"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"trim"),".")),(0,a.kt)("p",null,"Additionally, you can use the current time (on the server) with ",(0,a.kt)("inlineCode",{parentName:"p"},"now"),", you can access deepstream data, and cross-reference records."),(0,a.kt)("p",null,"Any deepstream client needs to log onto the server and the user data can be accessed with Valve but note that user's are not necessarily authenticated unless this is forbidden in the config. You can check for authenticated users with ",(0,a.kt)("inlineCode",{parentName:"p"},"user.isAuthenticated")," (the ternary operator ",(0,a.kt)("inlineCode",{parentName:"p"},"?:")," may prove useful when checking\nthis property). If a client authenticated, its user name can be accessed with ",(0,a.kt)("inlineCode",{parentName:"p"},"user.name")," and its server data with ",(0,a.kt)("inlineCode",{parentName:"p"},"user.data"),".  Additionally, Valve allows\nyou to examine data associated with a rule, e.g., for a record, this means one can examine old and new value.  Since the data is dependent on the type (record,\nevent, or RPC, and so on), we will discuss this detail in the sections on the specific types."),(0,a.kt)("p",null,"Valve gives you the ability to cross reference data in your records. In your right-hand side expression, use the term ",(0,a.kt)("inlineCode",{parentName:"p"},"_(identifier)")," to access the record\nwith the given identifier, where ",(0,a.kt)("inlineCode",{parentName:"p"},"identifier")," is interpreted as a JavaScript expression returning a string, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"_('family/' + $lastname)"),". The cross\nreferenced record must exist. Note that cross references ignore Valve permissions meaning you gain indirect read access irrespective of the Valve rules."),(0,a.kt)("p",null,"When evaluating expressions, you need to keep several pitfalls in mind. Using the current time with ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," requires you to consider the usual ",(0,a.kt)("a",{parentName:"p",href:"http://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time"},"limitations of\ntime-dependent operations")," on computers and additionally, ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," is evaluated on the server; you should keep this in mind whenever a client uses the ",(0,a.kt)("em",{parentName:"p"},"current")," time in its code. Valve allows you to cross reference stored data but this is computationally expensive. Thus, the default config shipped with deepstream allows no more than three cross references as of December 21, 2016. Finally, the usual warnings about type coercion (implicit type conversions), ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators"},"JavaScript comparison operators"),", and ",(0,a.kt)("a",{parentName:"p",href:"http://www.w3schools.com/js/js_numbers.asp"},"floating-point arithmetic")," apply."),(0,a.kt)("h3",{id:"records"},"Records"),(0,a.kt)("p",null,"Records can be created, deleted, read from, written to, and you can ",(0,a.kt)("em",{parentName:"p"},"listen")," to other clients subscribing to records (the ",(0,a.kt)("a",{parentName:"p",href:"../datasync/records"},"record tutorial")," elaborates on these operations and it explains the differences between unsubscribing from, discarding, and deleting records). The following snippet is the default Valve code for records:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'record:\n    "*":\n        create: true # client.record.getRecord()\n        read: true # client.record.getRecord(), record.get()\n        write: true # record.set()\n        listen: true # record.listen()\n        delete: false # record.delete()\n')),(0,a.kt)("p",null,"In Valve, you can access the current record contents by referencing ",(0,a.kt)("inlineCode",{parentName:"p"},"oldData")," and for the ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," operation, the modified record can be examined with ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," permissions are only invoked by ",(0,a.kt)("inlineCode",{parentName:"p"},"getRecord()")," if the requested record does not exist, otherwise only reading rights are required.\nSimilarly, writes are always successful if the record does not have to be modified, e.g., modified and unmodified record are identical. Moreover, if a write operation is rejected by the server, then the client must handle the resulting error message; otherwise the client copy of the record will be out of sync with the server state. Finally, do not mix up the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," given to ",(0,a.kt)("inlineCode",{parentName:"p"},"record.get()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"record.set()")," with the record ",(0,a.kt)("em",{parentName:"p"},"identifier")," that is used by Valve."),(0,a.kt)("h3",{id:"user-presence"},"User Presence"),(0,a.kt)("p",null,"deepstream can notify you when authenticated users log in. The permissioning key is called ",(0,a.kt)("inlineCode",{parentName:"p"},"presence")," and the only option is to allow or disallow listening:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'presence:\n    "*":\n        allow: true # client.subscribe()\n')),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../pubsub/events"},"Events")," can be published and subscribed to. Moreover, a client emitting events may listen to event subscriptions. The actions can be permissioned in the section ",(0,a.kt)("inlineCode",{parentName:"p"},"events"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'events:\n    "*":\n        publish: true # client.event.emit()\n        subscribe: true # client.event.subscribe()\n        listen: true # client.event.listen()\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," action allows the examination of the data by referencing ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," in the expression."),(0,a.kt)("h3",{id:"rpcs"},"RPCs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../request-response/rpc"},"Remote procedure calls")," can be provided or requested. The corresponding permissioning section is identified by the key ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'rpc:\n    "*":\n        provide: true # client.rpc.provide()\n        request: true # client.rpc.make()\n')),(0,a.kt)("h3",{id:"configuring-for-file-based-permissioning"},"Configuring for File-Based Permissioning"),(0,a.kt)("p",null,"To use file-based permissioning, the config file must contain the key ",(0,a.kt)("inlineCode",{parentName:"p"},"permission.type")," with the value ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),". The name of the permissioning file must be provided in the deepstream config file under the key ",(0,a.kt)("inlineCode",{parentName:"p"},"permission.options.path")," and can be chosen arbitrarily. If a relative path is used to indicate its location, then this path uses the directory containing the config file as base directory."),(0,a.kt)("p",null,"In summary, if the permissioning rules can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/permissions.yml")," and if the configuration file is ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yml"),", then a minimal config for\nfile-based permissioning looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"permission:\n    type: config\n    options:\n        path: ./permissions.yml\n")),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,"More compact introductions (or refreshers) are the tutorials ",(0,a.kt)("a",{parentName:"p",href:"valve-simple"},(0,a.kt)("em",{parentName:"a"},"Valve Permissioning Simple")),", ",(0,a.kt)("a",{parentName:"p",href:"valve-advanced"},(0,a.kt)("em",{parentName:"a"},"Valve Permissioning Advanced")),", and ",(0,a.kt)("a",{parentName:"p",href:"valve-dynamic"},(0,a.kt)("em",{parentName:"a"},"Dynamic Permissions using Valve")),". To learn how to sent user-specific data using Valve, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"user-specific-data"},"user-specific data guide"),"."))}u.isMDXComponent=!0}}]);
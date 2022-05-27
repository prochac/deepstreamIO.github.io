"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[239],{3905:function(e,o,t){t.d(o,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),l=function(e){var o=r.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):A(A({},o),e)),t},c=function(e){var o=l(e.components);return r.createElement(s.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},p=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,E=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return t?r.createElement(E,A(A({ref:o},c),{},{components:t})):r.createElement(E,A({ref:o},c))}));function d(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,A=new Array(a);A[0]=p;var i={};for(var s in o)hasOwnProperty.call(o,s)&&(i[s]=o[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,A[1]=i;for(var l=2;l<a;l++)A[l]=t[l];return r.createElement.apply(null,A)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6198:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=t(7462),n=t(3366),a=(t(7294),t(3905)),A=["components"],i={title:"Anonymous Records",description:"Learn how to use anonymous records to simplify working with dynamic selections",icon:"IosCopy"},s=void 0,l={unversionedId:"tutorials/core/datasync/anonymous-records",id:"tutorials/core/datasync/anonymous-records",title:"Anonymous Records",description:"Learn how to use anonymous records to simplify working with dynamic selections",source:"@site/docs/00-tutorials/20-core/70-datasync/20-anonymous-records.md",sourceDirName:"00-tutorials/20-core/70-datasync",slug:"/tutorials/core/datasync/anonymous-records",permalink:"/docs/tutorials/core/datasync/anonymous-records",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/00-tutorials/20-core/70-datasync/20-anonymous-records.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Anonymous Records",description:"Learn how to use anonymous records to simplify working with dynamic selections",icon:"IosCopy"},sidebar:"tutorialSidebar",previous:{title:"Records",permalink:"/docs/tutorials/core/datasync/records"},next:{title:"Lists",permalink:"/docs/tutorials/core/datasync/lists"}},c=[{value:"What are anonymous records?",id:"what-are-anonymous-records",children:[],level:2},{value:"What are anonymous records used for?",id:"what-are-anonymous-records-used-for",children:[],level:2},{value:"How do I create an anonymous record?",id:"how-do-i-create-an-anonymous-record",children:[],level:2}],u={toc:c};function p(e){var o=e.components,i=(0,n.Z)(e,A);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you've read about ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/core/datasync/records/"},"records"),", you know that they are small data objects that can be observed and manipulated. A record lets you store values using ",(0,a.kt)("inlineCode",{parentName:"p"},".set()"),", retrieve them via ",(0,a.kt)("inlineCode",{parentName:"p"},".get()")," and listen for changes with ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()"),"."),(0,a.kt)("p",null,"Anonymous records do exactly the same."),(0,a.kt)("h2",{id:"what-are-anonymous-records"},"What are anonymous records?"),(0,a.kt)("p",null,"The only difference between a record and an anonymous record is that records have a unique name - but anonymous records don't. Instead, they have a ",(0,a.kt)("inlineCode",{parentName:"p"},"setName(id)")," method that lets you change their name."),(0,a.kt)("p",null,"Conceptionally, an anonymous record is like a shell that wraps around other records. Listeners can be bound to that shell and stay intact while the underlying record changes."),(0,a.kt)("p",null,"If you ever had to work at a place that believes in hot-desking, you probably know these laptop docks:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Laptop Dock",src:t(265).Z})),(0,a.kt)("p",null,"They stay connected to the screen, keyboard and power plug etc., but let you switch the laptop that drives them. An anonymous record works pretty much the same way."),(0,a.kt)("h2",{id:"what-are-anonymous-records-used-for"},"What are anonymous records used for?"),(0,a.kt)("p",null,"Anonymous records come in handy if a section of an interface can be used to manipulate different records of a similar type. Take this example app for instance:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Switching Users",src:t(5139).Z})),(0,a.kt)("p",null,"Here, each of the Simpsons is a record. The names of all three are stored in a list. The section with the input-fields on the right is powered by a single anonymous record. All input-fields are two-way bound to paths within it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simple App Structure",src:t(4510).Z})),(0,a.kt)("p",null,"Now, whenever the user selects one of the Simpsons, the anonymous record's ",(0,a.kt)("inlineCode",{parentName:"p"},"setName(id)")," method is called with the ",(0,a.kt)("inlineCode",{parentName:"p"},"recordId")," of that Simpson. It internally removes all subscriptions to the old record, switches to the new one, re-subscribes, all change-listener fire and the UI is up to date."),(0,a.kt)("h2",{id:"how-do-i-create-an-anonymous-record"},"How do I create an anonymous record?"),(0,a.kt)("p",null,"By calling ",(0,a.kt)("inlineCode",{parentName:"p"},"client.record.getAnonymousRecord()"),". The method doesn't take any arguments."),(0,a.kt)("p",null,"A few more things worth mentioning:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All method calls to the anonymous-record, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"delete()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"discard()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"set()")," are proxied to the currently underlying record.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The anonymous record emits a ",(0,a.kt)("inlineCode",{parentName:"p"},"ready")," event whenever ",(0,a.kt)("inlineCode",{parentName:"p"},"setName()")," is called and the new record is ready")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The anonymous record also emits a ",(0,a.kt)("inlineCode",{parentName:"p"},"nameChanged")," event immediately after every call to ",(0,a.kt)("inlineCode",{parentName:"p"},"setName()")))))}p.isMDXComponent=!0},265:function(e,o){o.Z="data:image/jpeg;base64,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"},5139:function(e,o,t){o.Z=t.p+"assets/images/simple-app-anim-413f45725a3969a4f35fe2e8e71c544f.gif"},4510:function(e,o,t){o.Z=t.p+"assets/images/simple-app-structure-af1caa7832fcc80971a1cde9479bf1a9.png"}}]);
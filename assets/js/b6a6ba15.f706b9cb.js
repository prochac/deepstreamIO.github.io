"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[997],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(y,c(c({ref:n},d),{},{components:t})):r.createElement(y,c({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7087:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={title:"Anonymous Record",description:"Learn how to use anonymous records to switch context without having to renew bindings"},s=void 0,l={unversionedId:"docs/client-js/datasync-anonymous-record",id:"docs/client-js/datasync-anonymous-record",title:"Anonymous Record",description:"Learn how to use anonymous records to switch context without having to renew bindings",source:"@site/docs/10-docs/20-client-js/90-datasync-anonymous-record.md",sourceDirName:"10-docs/20-client-js",slug:"/docs/client-js/datasync-anonymous-record",permalink:"/docs/docs/client-js/datasync-anonymous-record",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/10-docs/20-client-js/90-datasync-anonymous-record.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Anonymous Record",description:"Learn how to use anonymous records to switch context without having to renew bindings"},sidebar:"tutorialSidebar",previous:{title:"Record Factory",permalink:"/docs/docs/client-js/datasync-client-record"},next:{title:"List",permalink:"/docs/docs/client-js/datasync-list"}},d=[{value:"Creating an anonymousRecord",id:"creating-an-anonymousrecord",children:[],level:2},{value:"Events",id:"events",children:[{value:"nameChanged",id:"namechanged",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"setName(recordName)",id:"setnamerecordname",children:[],level:3}],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"AnonymousRecord is a record without a predefined name. It functions as a wrapper around an actual record that can be swapped out for another while keeping all bindings intact."),(0,a.kt)("p",null,"An anonymousRecord extends ",(0,a.kt)("inlineCode",{parentName:"p"},"Record")," and contains all of its ",(0,a.kt)("a",{parentName:"p",href:"datasync-record"},"API calls"),"."),(0,a.kt)("p",null,"To learn more about how they are used, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"../../tutorials/core/datasync/anonymous-records/"},"AnonymousRecord Tutorial"),"."),(0,a.kt)("h2",{id:"creating-an-anonymousrecord"},"Creating an anonymousRecord"),(0,a.kt)("p",null,"AnonymousRecords are created and retrieved using ",(0,a.kt)("inlineCode",{parentName:"p"},"client.record.getAnonymousRecord()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const anonymousRecord = client.record.getAnonymousRecord()\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"namechanged"},"nameChanged"),(0,a.kt)("p",null,"The new name of the underlying record which the anonymous record now represents."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"setnamerecordname"},"setName(recordName)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"recordName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"he name of the actual record the anonymousRecord should use. This can be called multiple times.")))),(0,a.kt)("p",null,"Sets the underlying record the ",(0,a.kt)("inlineCode",{parentName:"p"},"anonymousRecord")," wraps around. It takes care of cleaning up the previous record on your behalf."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const anonymousRecord = client.record.getAnonymousRecord()\nanonymousRecord.setName('user/john-snow')\n")))}p.isMDXComponent=!0}}]);
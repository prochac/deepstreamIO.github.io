"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[7837],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},630:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Getting started with HTTP",description:"Learn how to start a server and interact with a HTTP API",logoImage:"http.png"},l=void 0,c={unversionedId:"tutorials/getting-started/http",id:"tutorials/getting-started/http",title:"Getting started with HTTP",description:"Learn how to start a server and interact with a HTTP API",source:"@site/docs/00-tutorials/01-getting-started/20-http.md",sourceDirName:"00-tutorials/01-getting-started",slug:"/tutorials/getting-started/http",permalink:"/docs/tutorials/getting-started/http",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/00-tutorials/01-getting-started/20-http.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Getting started with HTTP",description:"Learn how to start a server and interact with a HTTP API",logoImage:"http.png"},sidebar:"tutorialSidebar",previous:{title:"Getting started with JavaScript",permalink:"/docs/tutorials/getting-started/javascript"},next:{title:"Installing on Linux",permalink:"/docs/tutorials/install/linux"}},u=[{value:"Start the server",id:"start-the-server",children:[],level:2},{value:"Events (publish-subscribe)",id:"events-publish-subscribe",children:[],level:2}],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will introduce deepstream's HTTP interface, and show how it can be used to access\nRecords, Events, RPCs and Presence."),(0,i.kt)("p",null,"The first thing you'll need to access the HTTP API is your application's unique HTTP URL."),(0,i.kt)("h2",{id:"start-the-server"},"Start the server"),(0,i.kt)("p",null,"Let's start by installing the server. Just pick the ",(0,i.kt)("a",{parentName:"p",href:"../install/linux"},"right version for your operating system")," and follow its steps. Once the server is installed, you can start it with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deepstream start\n")),(0,i.kt)("p",null,"To see how it works in real-time we can set up a javascript WebSocket client. To get that setup,\ntake a look at the ",(0,i.kt)("a",{parentName:"p",href:"javascript"},"getting started with javascript"),"\ntutorial."),(0,i.kt)("h2",{id:"events-publish-subscribe"},"Events (publish-subscribe)"),(0,i.kt)("p",null,"We'll use the JS client to subscribe to the event 'test-event':"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"ds.event.subscribe( 'test-event', function( eventData ){\n  console.log( eventData );\n});\n")),(0,i.kt)("p",null,"... and now we can publish events using an HTTP client, such as ",(0,i.kt)("a",{parentName:"p",href:"http://api.jquery.com/jquery.ajax/"},"jQuery.ajax"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const requestBody = {\n  body: [{\n    topic: 'event',\n    action: 'emit',\n    eventName: 'test-event',\n    data: { some: 'data' }\n  }]\n};\n\nconst url = '<YOUR HTTP URL>';\n\n$.ajax({\n  method: 'POST',\n  headers: { 'content-type': 'application/json' },\n  url: url,\n  data: JSON.stringify(requestBody)\n}).done(function (response) {\n  console.log('The request was a', response.result);\n});\n")),(0,i.kt)("p",null,"... or cURL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" -d \'{\n  "body": [{\n    "topic": "event",\n    "action": "emit",\n    "eventName": "test-event",\n    "data": "some test data"\n  }]\n}\' "<YOUR HTTP URL>"\n')),(0,i.kt)("p",null,"For more information see ",(0,i.kt)("a",{parentName:"p",href:"../../docs/client-http/v1"},"deepstream HTTP docs"),"."))}d.isMDXComponent=!0}}]);
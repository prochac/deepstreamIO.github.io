"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[3898],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:e},l),{},{components:n})):r.createElement(m,a({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7595:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"HTTP Endpoint",description:"Learn how to configure a HTTP Endpoint",wip:!0,logoImage:"http.png"},p=void 0,u={unversionedId:"tutorials/plugins/connection-endpoint/http",id:"tutorials/plugins/connection-endpoint/http",title:"HTTP Endpoint",description:"Learn how to configure a HTTP Endpoint",source:"@site/docs/00-tutorials/60-plugins/40-connection-endpoint/00-http.md",sourceDirName:"00-tutorials/60-plugins/40-connection-endpoint",slug:"/tutorials/plugins/connection-endpoint/http",permalink:"/docs/tutorials/plugins/connection-endpoint/http",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/00-tutorials/60-plugins/40-connection-endpoint/00-http.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"HTTP Endpoint",description:"Learn how to configure a HTTP Endpoint",wip:!0,logoImage:"http.png"},sidebar:"tutorialSidebar",previous:{title:"UWS HTTP",permalink:"/docs/tutorials/plugins/http-service/uwebsockets"},next:{title:"Binary WebSocket Endpoint",permalink:"/docs/tutorials/plugins/connection-endpoint/websocket-binary"}},l=[{value:"How to configure:",id:"how-to-configure",children:[],level:3}],s={toc:l};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"how-to-configure"},"How to configure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"connectionEndpoints:\n  - type: http\n    options:\n      # allow 'authData' parameter in POST requests, if disabled only token and OPEN auth is\n      # possible\n      allowAuthData: true\n      # path for POST requests\n      postPath: /api\n      # path for GET requests\n      getPath: /api\n      # should the server log invalid auth data, defaults to false\n      logInvalidAuthData: false\n      # http request timeout in milliseconds, defaults to 20000\n      requestTimeout: 20000\n")))}d.isMDXComponent=!0}}]);
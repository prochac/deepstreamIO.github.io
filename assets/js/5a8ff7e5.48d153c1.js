"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[9614],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,g=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return t?n.createElement(g,s(s({ref:r},u),{},{components:t})):n.createElement(g,s({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2770:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],a={title:"Prerequisite",description:"Step one: What you need to know before starting this guide"},p=void 0,l={unversionedId:"guides/live-progress-bar/prerequistes",id:"guides/live-progress-bar/prerequistes",title:"Prerequisite",description:"Step one: What you need to know before starting this guide",source:"@site/docs/20-guides/live-progress-bar/10-prerequistes.md",sourceDirName:"20-guides/live-progress-bar",slug:"/guides/live-progress-bar/prerequistes",permalink:"/docs/guides/live-progress-bar/prerequistes",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/20-guides/live-progress-bar/10-prerequistes.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Prerequisite",description:"Step one: What you need to know before starting this guide"},sidebar:"tutorialSidebar",previous:{title:"Live Progress Bar",permalink:"/docs/guides/live-progress-bar/intro"},next:{title:"Setting up the backend",permalink:"/docs/guides/live-progress-bar/setting-up-the-backend"}},u=[{value:"Server",id:"server",children:[],level:2},{value:"Visual Progress Bar",id:"visual-progress-bar",children:[],level:2}],c={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We will provide two simple files, one server side for the progress bar and another\nfor the front-end visualization"),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," in the root of an empty project folder with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// ./index.js\nconst Express = require('express');\nconst bodyParser = require('body-parser');\nconst app = Express();\n\napp.use(bodyParser.urlencoded({ extended: false }))\napp.use(bodyParser.json())\n\napp.get('/', (req, res) => {\n  res.json({text: 'hi'})\n})\n\napp.listen(9090)\n")),(0,o.kt)("p",null,"Visit the URL localhost:9090 and expect the following response body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{text: 'hi'}\n")),(0,o.kt)("h2",{id:"visual-progress-bar"},"Visual Progress Bar"),(0,o.kt)("p",null,"In the spirit of vanilla JS, we will be putting everything in the same (tiny) HTML file"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"embed:guides/live-progress-bar/skeleton.html")))}d.isMDXComponent=!0}}]);
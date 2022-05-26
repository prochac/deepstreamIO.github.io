"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[4970],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4733:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Setting up the backend",description:"Starting the backend services"},s=void 0,c={unversionedId:"guides/realtime-search/setting-up-the-backend",id:"guides/realtime-search/setting-up-the-backend",title:"Setting up the backend",description:"Starting the backend services",source:"@site/docs/20-guides/realtime-search/20-setting-up-the-backend.md",sourceDirName:"20-guides/realtime-search",slug:"/guides/realtime-search/setting-up-the-backend",permalink:"/docs/guides/realtime-search/setting-up-the-backend",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/20-guides/realtime-search/20-setting-up-the-backend.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Setting up the backend",description:"Starting the backend services"},sidebar:"tutorialSidebar",previous:{title:"Prerequisite",permalink:"/docs/guides/realtime-search/prerequisites"},next:{title:"Logging in",permalink:"/docs/guides/realtime-search/logging-in"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to have realtime search running we need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"deepstream server"),(0,a.kt)("li",{parentName:"ul"},"mongodb server"),(0,a.kt)("li",{parentName:"ul"},"mongodb replicate (for changefeeds to be enabled)"),(0,a.kt)("li",{parentName:"ul"},"realtime-search")),(0,a.kt)("p",null,"Due to the slightly more complex nature of the backend we will let docker-compose manage everything by just using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/deepstreamIO/deepstream.io-realtime-search.git\ncd deepstream.io-realtime-search/example\ndocker-compose up\n")),(0,a.kt)("p",null,"Which would result in all the four images being pulled down and run, with deepstream port exposed on 6020"),(0,a.kt)("p",null,"To look a little deeper into it, you'll see that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have a deepstream ",(0,a.kt)("inlineCode",{parentName:"li"},"config.yml")," file for mongodb configuration:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"embed:server/realtime-search/example/conf/config.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A docker compose file + a mongodb script which sets up deepstream, realtime search, mongodb and a mongodb replica (all using the default images):")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"embed:server/realtime-search/example/docker-compose.yml")),(0,a.kt)("p",null,"Once you run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up")," that should be it for the backend!"),(0,a.kt)("p",null,"You can also look at all the CLI commands by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> docker run deepstreamio/realtime-search mongo --help\n\nUsage: provider mongo [options]\n\nstart a mongodb realtime search provider\n\nOptions:\n  --mongo-url <mongo-url>            Connect to this mongo server\n  --mongo-database <mongo-database>  Name of mongo database\n  --ds-url <ds-url>                  Connect to this deepstream server\n  --logger-type <logger-type>        Log messages with pino or to std\n  --log-level <level>                Log messages with this level and above\n  --collection-lookup <fileName>     JSON file containing model lookups\n  --inspect <url>                    Enable node inspector\n  --native-query                     Use native mongodb query syntax\n  -h, --help                         output usage information\n")))}m.isMDXComponent=!0}}]);
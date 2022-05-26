"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[8416],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"RethinkDB DataBase Connector"},l=void 0,c={unversionedId:"tutorials/plugins/database/rethinkdb",id:"tutorials/plugins/database/rethinkdb",title:"RethinkDB DataBase Connector",description:"What is RethinkDB?",source:"@site/docs/00-tutorials/60-plugins/30-database/30-rethinkdb.md",sourceDirName:"00-tutorials/60-plugins/30-database",slug:"/tutorials/plugins/database/rethinkdb",permalink:"/docs/tutorials/plugins/database/rethinkdb",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/00-tutorials/60-plugins/30-database/30-rethinkdb.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"RethinkDB DataBase Connector"},sidebar:"tutorialSidebar",previous:{title:"MongoDB DataBase Connector",permalink:"/docs/tutorials/plugins/database/mongodb"},next:{title:"ElasticSearch DataBase Connector",permalink:"/docs/tutorials/plugins/database/elasticsearch"}},d=[{value:"What is RethinkDB?",id:"what-is-rethinkdb",children:[],level:4},{value:"Why use RethinkDB with deepstream?",id:"why-use-rethinkdb-with-deepstream",children:[],level:4},{value:"Any downsides?",id:"any-downsides",children:[],level:4},{value:"How to use RethinkDB with deepstream.io",id:"how-to-use-rethinkdb-with-deepstreamio",children:[],level:4},{value:"search provider",id:"search-provider",children:[],level:2}],u={toc:d};function p(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"what-is-rethinkdb"},"What is RethinkDB?"),(0,i.kt)("p",null,"RethinkDB is a distributed, document-oriented database. It implements a proprietary, function based query language, called ReQL to interact with its schemaless JSON data collections."),(0,i.kt)("p",null,"What makes RethinkDB stand out is its ability to perform \u201crealtime queries\u201d. Rather than just retrieving query results as snapshots of the current state, RethinkDB allows to keep search result cursors open and stream continuous updates as new documents match or unmatch the query."),(0,i.kt)("h4",{id:"why-use-rethinkdb-with-deepstream"},"Why use RethinkDB with deepstream?"),(0,i.kt)("p",null,"RethinkDB\u2019s realtime search makes it a great fit as a datastore within a deepstream architecture. Combining its search capabilities with deepstream\u2019s data-sync, pub/sub and rpc can be a very powerful combination."),(0,i.kt)("h4",{id:"any-downsides"},"Any downsides?"),(0,i.kt)("p",null,"Not really. We\u2019ve used RethinkDB extensively within internal architectures and can very much recommend it. As database lifecycles go, it\u2019s still very young and unestablished, but seeing increasing adoption. At the moment, the realtime querying capabilities aren\u2019t compatible with all query types (e.g. aggregate queries like averages etc. aren\u2019t supported), sharding is limited to 64 nodes and load balancing / shard accessing can require connection redirects."),(0,i.kt)("h4",{id:"how-to-use-rethinkdb-with-deepstreamio"},"How to use RethinkDB with deepstream.io"),(0,i.kt)("p",null,"deepstream offers a database connector plugin for RethinkDB and optionally also a search provider that creates realtime queries based on dynamic list names. RethinkDB and the search provider are also part of the ",(0,i.kt)("a",{parentName:"p",href:"../../devops/docker-compose"},"Compose file for Docker"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Installing the RethinkDB storage connector")),(0,i.kt)("p",null,"The rethinkdb connector comes preinstalled in the deepstream binary."),(0,i.kt)("p",null,"If you're using deepstream's Node.js interface, you can also install it as an ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/deepstream.io-storage-rethinkdb"},"NPM module")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configuring the RethinkDB storage connector"),"\nYou can configure the storage connector plugin in deepstream with the following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"storage:\n  path: rethinkdb\n  options:\n\n    # address rethinkdb is bound to\n    host: localhost\n\n    # port rethinkdb is bound to\n    port: 28015\n\n    # optional authentication key for rethinkdb\n    authKey: someString\n\n    # optional database name, defaults to `deepstream`\n    database: someDb\n\n    # optional table name for records without a splitChar\n    # defaults to deepstream_docs\n    defaultTable: someTable\n\n    # optional character that's used as part of the\n    # record names to split it into a tabel and an id part, e.g.\n    #\n    #books/dream-of-the-red-chamber\n    #\n    # would create a table called 'books' and store the record under the name\n    # 'dream-of-the-red-chamber'. Defaults to '/'\n    splitChar: /\n")),(0,i.kt)("h2",{id:"search-provider"},"search provider"),(0,i.kt)("p",null,"The RethinkDB search provider is an independent process that sits between deepstream and RethinkDB. It let's you create lists with dynamic names such as ",(0,i.kt)("inlineCode",{parentName:"p"},'search?{"table":"book","query":[["title","match","^Harry Potter.*"],["price","lt",15.3]]}')," on the client that automatically map to realtime searches on the backend"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"deepstream rethinkdb search provider diagram",src:n(2357).Z})),(0,i.kt)("p",null,"Here's an example: Say you're storing a number of books as records."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"client.record.getRecord('book/i95ny80q-2bph9txxqxg').set({\n  'title': 'Harry Potter and the goblet of fire',\n  'price': 9.99\n})\n")),(0,i.kt)("p",null,"and use deepstream.io's RethinkDB storage connector with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{splitChar: '/'}\n")),(0,i.kt)("p",null,"you can now search for Harry Potter books that cost less than 15.30 like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const queryString = JSON.stringify({\n  table: 'book',\n  query: [\n    ['title', 'match', '^Harry Potter.*'],\n    ['price', 'lt', 15.30]\n  ]\n})\nconst searchList = client.record.getList('search?' + queryString)\n")),(0,i.kt)("p",null,"and the best thing is: it's in realtime. Whenever a record that matches the search criteria is added or removed, the list will be updated accordingly."),(0,i.kt)("p",null,"You can check the rethinkdb search provider code ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io-provider-search-rethinkdb"},"here")))}p.isMDXComponent=!0},2357:function(e,t){t.Z="data:image/png;base64,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"}}]);
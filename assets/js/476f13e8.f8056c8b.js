"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[7198],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=u(n),b=s,d=h["".concat(c,".").concat(b)]||h[b]||p[b]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},523:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return h}});var r=n(7462),s=n(3366),i=(n(7294),n(3905)),a=["components"],o={title:"Events"},c=void 0,u={unversionedId:"tutorials/core/pubsub/events",id:"tutorials/core/pubsub/events",title:"Events",description:'Events are deepstream\'s implementation of the "publish/subscribe" or "observer" pattern. If you\'re familiar with e.g. JavaScript event-emitters or Java events, you know how they work. Zero or more interested clients subscribe to an event (sometimes also called a "topic", "channel" or "namespace") and zero or more other clients publish to it.',source:"@site/docs/00-tutorials/20-core/40-pubsub/10-events.md",sourceDirName:"00-tutorials/20-core/40-pubsub",slug:"/tutorials/core/pubsub/events",permalink:"/docs/tutorials/core/pubsub/events",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/00-tutorials/20-core/40-pubsub/10-events.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Events"},sidebar:"tutorialSidebar",previous:{title:"User-Specific Data",permalink:"/docs/tutorials/core/permission/user-specific-data"},next:{title:"Remote Procedure Calls",permalink:"/docs/tutorials/core/request-response/rpc"}},l=[{value:"Pub/Sub and its limitations",id:"pubsub-and-its-limitations",children:[],level:2},{value:"How to use events",id:"how-to-use-events",children:[],level:2},{value:"How to listen for event subscriptions",id:"how-to-listen-for-event-subscriptions",children:[],level:2}],p={toc:l};function h(e){var t=e.components,o=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Events are deepstream\'s implementation of the "publish/subscribe" or "observer" pattern. If you\'re familiar with e.g. JavaScript event-emitters or Java events, you know how they work. Zero or more interested clients subscribe to an event (sometimes also called a "topic", "channel" or "namespace") and zero or more other clients publish to it.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pub/Sub diagram",src:n(6722).Z})),(0,i.kt)("p",null,'The emphasis on "zero or more" underlines one of the main characteristics of pub/sub: Publishers and subscribers are completely decoupled. It\'s a bit like a newspaper - journalists write articles assuming but not knowing that they will be read, and readers open the sports section expecting but not knowing that something they care about will be written on it.'),(0,i.kt)("p",null,"This decoupling makes pub/sub scalable and fault tolerant, but sometimes you want to know if there's someone out there waiting for your messages. For that, deepstream's events come with a feature called \"listening\"."),(0,i.kt)("h2",{id:"pubsub-and-its-limitations"},"Pub/Sub and its limitations"),(0,i.kt)("p",null,"Due to its simplicity and versatility, pub/sub is the most widely adopted pattern for realtime systems with many hosted (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://pusher.com/"},"Pusher"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.pubnub.com/"},"PubNub"),"), server-to-client (e.g. ",(0,i.kt)("a",{parentName:"p",href:"http://socket.io/"},"socket.io"),", ",(0,i.kt)("a",{parentName:"p",href:"http://socketcluster.io/#!/"},"SocketCluster"),") or server-to-server (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/topics/pubsub"},"Redis"),", ",(0,i.kt)("a",{parentName:"p",href:"http://kafka.apache.org/"},"Kafka"),") solutions available."),(0,i.kt)("p",null,"However, pub/sub is purely a lightweight way of messaging, but doesn't have any concept of persistence or state. It's therefore often used to notify clients of changes which in turn trigger a separate HTTP request to retrieve the actual data."),(0,i.kt)("p",null,'This comes with significant overhead and is increasingly abandoned in favour of "data-sync", an approach where the actual data is distributed and kept in sync across all subscribed clients. Data-sync is one of deepstream\'s core features and can be used in the form of ',(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/core/datasync/records/"},"records"),"."),(0,i.kt)("p",null,"Having said that, pub/sub vs data-sync doesn't need to be an either/or decision. Both complement each other well and can be used together for many use cases."),(0,i.kt)("h2",{id:"how-to-use-events"},"How to use events"),(0,i.kt)("p",null,"Subscription to events can be established with ",(0,i.kt)("inlineCode",{parentName:"p"},"client.event.subscribe")," and removed with ",(0,i.kt)("inlineCode",{parentName:"p"},"client.event.unsubscribe"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Client A\nfunction eventCallback(data) {\n    //callback for incoming events\n}\n\n//Subscribing to an event\nclient.event.subscribe('news/sports', eventCallback)\n\n//Removing specific callback to the event\nclient.event.unsubscribe('news/sports', eventCallback)\n\n//Removing all subscriptions to the event\nclient.event.unsubscribe('news/sports')\n")),(0,i.kt)("p",null,"Events can be published using ",(0,i.kt)("inlineCode",{parentName:"p"},"client.event.emit(eventName, data)"),". It's possible to send any kind of serializable data along with the event, e.g. Strings, JSON objects, Numbers, Booleans etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Client B\nclient.event.emit('news/sports', 'football is happening')\n")),(0,i.kt)("h2",{id:"how-to-listen-for-event-subscriptions"},"How to listen for event subscriptions"),(0,i.kt)("p",null,'deepstream allows clients to "listen" for other clients\' event subscriptions. This is useful to create "active" data providers that only emit events if they are actually needed.'),(0,i.kt)("p",null,"Listeners can register for a pattern described by a regular expression, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"'^news/.*'"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Client B\nclient.event.listen('^news/.*', (match, response) => {\n  console.log(match) // 'news/sports'\n  if (/* if you want to provide */) {\n    // start publishing data via `client.event.emit(eventName, /* data */)`\n    response.accept()\n\n    response.onStop(() => {\n      // stop publishing data\n    })\n  } else {\n    response.reject() // let deepstream ask another provider\n  }\n})\n")),(0,i.kt)("p",null,"The listen-callback is called once the first client subscribes to a matching event and ",(0,i.kt)("inlineCode",{parentName:"p"},"onStop")," is called once the last subscriber for a matching event unsubscribes."),(0,i.kt)("p",null,"Listening also keeps state. Registering as a listener for a pattern that already has matching subscriptions without an active provider will call the callback multiple times straight away, once for every matching subscription."))}h.isMDXComponent=!0},6722:function(e,t){t.Z="data:image/png;base64,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"}}]);
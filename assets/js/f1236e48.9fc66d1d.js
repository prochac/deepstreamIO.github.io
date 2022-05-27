"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[7848],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||s;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9191:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var i=n(7462),a=n(3366),s=(n(7294),n(3905)),r=["components"],o={title:"Listening in deepstream",description:"Understanding Listening"},l=void 0,c={unversionedId:"tutorials/core/listening/index",id:"tutorials/core/listening/index",title:"Listening in deepstream",description:"Understanding Listening",source:"@site/docs/00-tutorials/20-core/80-listening/10-index.md",sourceDirName:"00-tutorials/20-core/80-listening",slug:"/tutorials/core/listening/index",permalink:"/docs/tutorials/core/listening/index",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/00-tutorials/20-core/80-listening/10-index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Listening in deepstream",description:"Understanding Listening"},sidebar:"tutorialSidebar",previous:{title:"Storing Data",permalink:"/docs/tutorials/core/datasync/storing-data"},next:{title:"React",permalink:"/docs/tutorials/integrations/frontend/react"}},d=[{value:"What is listening?",id:"what-is-listening",children:[],level:2},{value:"How to implement listening?",id:"how-to-implement-listening",children:[{value:"Listening with events",id:"listening-with-events",children:[],level:3},{value:"Listening with records",id:"listening-with-records",children:[],level:3},{value:"Listening with lists",id:"listening-with-lists",children:[],level:3}],level:2},{value:"Listening for Load Balancing",id:"listening-for-load-balancing",children:[],level:2},{value:"Using permissions in listening",id:"using-permissions-in-listening",children:[],level:2},{value:"When can you use listening?",id:"when-can-you-use-listening",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],p={toc:d};function h(e){var t=e.components,o=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-listening"},"What is listening?"),(0,s.kt)("p",null,"Listening is a powerful feature provided exclusively by deepstream! However, before we can fully understand how listening works, we first need to understand what data providers are."),(0,s.kt)("p",null,"Data providers are deepstream's clients that write data to records, send events or provide RPCs. Generally, these providers tend to broadcast all the data they have. Most of the time this means that they are providing a lot of unnecessary data that may not even be required by any clients."),(0,s.kt)("p",null,"Deepstream's listening feature solves this problem by letting those clients provide only the data that other clients are interested in, which they specify by subscribing to a specific piece of data."),(0,s.kt)("p",null,"With listening, these data providers can listen to a particular pattern and send data only when any client requires the data referred to by the pattern."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"concept of listening",src:n(8460).Z})),(0,s.kt)("p",null,"If there is more than one data provider that matches the pattern as shown above, deepstream selects one of those randomly. However, a data provider can choose to reject the request for various reasons including load balancing, in which case deepstream will then check if there's any other data provider matching the pattern requested and ask it to provide the data. This is further described in a separate ",(0,s.kt)("a",{parentName:"p",href:"#listening-for-load-balancing"},"section")," further down this tutorial."),(0,s.kt)("p",null,"To understand it better, let's take a look at the following example:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Usual Approach",src:n(7589).Z})),(0,s.kt)("p",null,"As is apparent in the above example, having the weather provider send updates for all the countries, even the ones that the client is not interested in, increases costs as well as the flow of redundant data. This is where listening comes in."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"PubSub with listening",src:n(9579).Z})),(0,s.kt)("p",null,"As seen above, the amount of data being sent is effectively cut down to just what the client needs. This added efficiency in your pubsub infrastructure reduces the message count on your third party data providers thus cutting you the cost as well."),(0,s.kt)("p",null,"Please note that with listening, a data provider starts providing data when the first client subscribes to the data until the last client unsubscribes from the data."),(0,s.kt)("h2",{id:"how-to-implement-listening"},"How to implement listening?"),(0,s.kt)("p",null,"Listening works with events, lists as well as records."),(0,s.kt)("h3",{id:"listening-with-events"},"Listening with events"),(0,s.kt)("p",null,"In order to implement listening with events, we first make our backend clients(in other words the data providers) listen to a particular pattern, like ",(0,s.kt)("inlineCode",{parentName:"p"},"weather/*")," for the above example."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"client.event.listen('weather/*', onMatch)\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"onMatch")," callback function will be called whenever a new event subscription is made or the last subscribed client of an event unsubsribes from that event."),(0,s.kt)("p",null,"Consider the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// server.js\nconst { DeepstreamClient } = require('@deepstream/client')\nconst client = deepstream('<APP URL>')\n\nclient.login({}, (success, data) => {\n  if (success) {\n    startApp()\n  } else {\n    console.log('ds login failed')\n  }\n})\n\nfunction startApp(){\n  client.event.listen('weather/germany/*', onMatch)\n}\n\nlet interval\n\nfunction onMatch(subject, response) {\n  response.accept()\n  // optionally add a condition to\n  // reject a request with response.reject()\n  interval = setInterval(()=> {\n    client.event.emit(subject, \"here's your weather data\")\n  }, 2000)\n\n  response.onStop(() => {\n    // if your event is being continously emmitted\n    // stop emitting it here\n    clearInterval(interval)\n  })\n}\n")),(0,s.kt)("p",null,"In the above function,"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"subject")," is the full path i.e, the event that the client has subscribed to, which in this case will start with ",(0,s.kt)("inlineCode",{parentName:"p"},"weather/germany/"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"response")," is an object that comes with two functions, ",(0,s.kt)("inlineCode",{parentName:"p"},"response.accept()")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"response.reject()"),". You can use either one depending on various conditions such as how much is the current data provider loaded, etc."))),(0,s.kt)("p",null,"Let's now see how a client would subscribe to an event that the above data provider is listening to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// client.js\nconst client = deepstream('<APP URL>')\n\nclient.login(() => {\n  client.event.subscribe('weather/germany/berlin', (data) => {\n    // handle weather data\n  })\n  setTimeout(() => {\n    // unsubscribing after 10 sec for the sake of\n    // simplicity of this tutorial\n    client.event.unsubscribe('weather/germany/berlin')\n  }, 10000)\n})\n")),(0,s.kt)("p",null,"When you execute this app, the following happens:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"You run the data provider and make it listen to ",(0,s.kt)("inlineCode",{parentName:"li"},"weather/germany/*")),(0,s.kt)("li",{parentName:"ol"},"You run the client which will subscribe to berlin's weather using ",(0,s.kt)("inlineCode",{parentName:"li"},"weather/germany/berlin")),(0,s.kt)("li",{parentName:"ol"},"Since, this event matches with what the data provider has been listening to, the ",(0,s.kt)("inlineCode",{parentName:"li"},"onMatch")," callback function would be called"),(0,s.kt)("li",{parentName:"ol"},"Inside the ",(0,s.kt)("inlineCode",{parentName:"li"},"onMatch")," function, since the client has subscribed to the event, the data provider would accept the request and start emitting the event every two seconds"),(0,s.kt)("li",{parentName:"ol"},"However, as soon as the client unsubscribes from the event (which here is after a timeout of 10 seconds), the ",(0,s.kt)("inlineCode",{parentName:"li"},"onStop")," callback in the ",(0,s.kt)("inlineCode",{parentName:"li"},"onMatch")," function is called and we just stop emitting the event.")),(0,s.kt)("h3",{id:"listening-with-records"},"Listening with records"),(0,s.kt)("p",null,"Implementing listening with records is easy but it can soon turn complicated if you do not completely understand how records work. So, you might want to go through the documentations for ",(0,s.kt)("a",{parentName:"p",href:"../datasync/records"},"records")," first."),(0,s.kt)("p",null,"Let's understand this with a small example of using data from the Nasdaq stock market website as our source of data. For simplicity, we will skip the details of how our backend data provider would connect to the Nasdaq database."),(0,s.kt)("p",null,"Our data provider would look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// server.js\nconst { DeepstreamClient } = require('@deepstream/client')\nconst client = deepstream('<APP URL>')\n\nclient.login({}, (success, data) => {\n  if (success) {\n    startApp()\n  } else {\n    console.log('ds login failed')\n  }\n})\n\nfunction startApp(){\n  client.record.listen('nasdaq/*', onMatch)\n}\n\nlet interval\n\nfunction onMatch(subject, response) {\n  response.accept()\n  // optionally do response.reject() based on some condition\n  interval = setInterval(() => {\n    client.record.setData(subject, { price: /* price from Nasdaq stream */ })\n  })\n\n  response.onStop(() => {\n    console.log('stopped publishing data')\n    clearInterval(interval)\n  })\n}\n")),(0,s.kt)("p",null,"So, what's happening here is exactly the same as we saw in the previous example of using listening with events in deepstream."),(0,s.kt)("p",null,"Whenever a client subscribes to a record that starts with ",(0,s.kt)("inlineCode",{parentName:"p"},"nasdaq/*"),", the onMatch callback will be fired. The ",(0,s.kt)("inlineCode",{parentName:"p"},"onStop")," callback will be executed when the last client unsubsribed from this record."),(0,s.kt)("p",null,"Let's see how the client side code will look like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// client.js\nconst client = deepstream('<APP URL>')\nclient.login({}, (success, data) => {\n  // subscribing to the record\n  const myRecord = client.record.getRecord('nasdaq/msft')\n  myRecord.subscribe('price', (data) => {\n    // msft data changed\n  })\n  setTimeout(() => {\n    // unsubscribing after 5 seconds\n    myRecord.discard(callback)\n  },5000)\n})\n")),(0,s.kt)("p",null,"Listening with records provides an additional feature called ",(0,s.kt)("inlineCode",{parentName:"p"},"hasProvider"),". This flag tells a client if there is a data provider that exists that is currently listening to the pattern to which the client has subscribed to."),(0,s.kt)("p",null,"Additionally, a client can also use the ",(0,s.kt)("inlineCode",{parentName:"p"},"hasProviderChanged")," event in order to get notified whenever a data provider changes the state of listening to the particular pattern that the client has subscribed to."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"hasProvider")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"hasProviderChanged")," events are very important and useful in the sense that these are the only ways for a client to know if the data that's available is being obtained in realtime from the providers or is just stale data that was fetched and stored sometime back."),(0,s.kt)("p",null,"Please note that this feature is only available for records."),(0,s.kt)("h3",{id:"listening-with-lists"},"Listening with lists"),(0,s.kt)("p",null,"Lists are collections of record names (not their actual data). To learn more about how they are used, have a look at the ",(0,s.kt)("a",{parentName:"p",href:"../../../tutorials/core/datasync/lists"},"List Tutorial"),"."),(0,s.kt)("p",null,"Hence, listening with lists is entirely similar to implementing listening with records as we saw above."),(0,s.kt)("p",null,"So, here is a sample code for listening with lists, which is pretty much self explanatory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// server.js\nconst { DeepstreamClient } = require('@deepstream/client')\nconst client = deepstream('<APP URL>')\n\nclient.login({}, (success, data) => {\n  if (success) {\n    client.record.listen('cars/*', onMatch)\n  } else {\n    console.log('ds login failed')\n  }\n})\n\nfunction onMatch(subject response) {\n  response.accept()\n  // optionally handle response.reject()\n  // handle list subsribe'\n\n  response.onStop(() => {\n  // handle list discard\n  })\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// client.js\nconst client = deepstream('<APP URL>')\n\nclient.login({}, (success, data) => {\n  const cars = client.record.getList('cars/honda')\n  cars.subscribe((entries) => {\n    // handle list entries changed\n  })\n  setTimeout(() => {\n    cars.discard()\n  }, 5000)\n})\n")),(0,s.kt)("h2",{id:"listening-for-load-balancing"},"Listening for Load Balancing"),(0,s.kt)("p",null,"As mentioned above, listening is a great way to implement load balancing among the data providers. Let's understand how this works."),(0,s.kt)("p",null,"Let's say you have multiple data providers which are capable of providing weather data for all the countries in the world. Now consider the worst case scenario where 6 out of 6 times, the deepstream server's random selection of a data provider providing this data happens to be the same. It'll put a lot of load on the single data provider while all the others are idle. We could solve this scenario in two ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If a data provider is already heavily loaded, make it reject the request to provide the data and the deepstream server will then delegate the request to the next randomly chosen data provider that is providing this data."),(0,s.kt)("p",{parentName:"li"},"OR")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"You can make these multiple data providers only listen to a non intersecting subset of countries, possibly divided in the alphabetical order of their names. This can further be made even more efficient by combining the above option of having multiple data providers for each of these subsets."))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"listening for load balancing",src:n(5061).Z})),(0,s.kt)("p",null,"As shown in the above figure, listening effectively cuts down load on a single data provider by directly letting you to implement load balancing."),(0,s.kt)("h2",{id:"using-permissions-in-listening"},"Using permissions in listening"),(0,s.kt)("p",null,"As with everything else in deepstream, there's a security aspect associated with this feature as well. You can control listening to records and events by specifying ",(0,s.kt)("inlineCode",{parentName:"p"},"listen:true/false")," in the permissions section of the application."),(0,s.kt)("p",null,"If a data provider tries to listen to a record or an event that it doesn't have permissions to listen to, it would get an error message saying ",(0,s.kt)("inlineCode",{parentName:"p"},"message denied"),"."),(0,s.kt)("p",null,"To know more about how permissions work in deepstream, visit the ",(0,s.kt)("a",{parentName:"p",href:"../../core/auth/auth-introduction"},"valve docs")," page."),(0,s.kt)("h2",{id:"when-can-you-use-listening"},"When can you use listening?"),(0,s.kt)("p",null,"Although listening sounds very fancy, most developers fail to realize the vast variety of use cases it caters to."),(0,s.kt)("p",null,"You can use listening"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"with databases"),(0,s.kt)("li",{parentName:"ul"},"with GPS for receiving geolocation coordinates"),(0,s.kt)("li",{parentName:"ul"},"with IoT to control the sensors in realtime\nand many more!")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"listening")," allows a data provider to start providing the data whenever a client subscribes to that data. For this reason, the data providers themselves never subscribe to that data. This would put the whole app to work in a loop where the listener is subscribing to the data that it itself is listening. Doesn't make any sense right!"),(0,s.kt)("p",{parentName:"div"},"For this reason, the deepstream client API provides the ",(0,s.kt)("inlineCode",{parentName:"p"},"setData")," function (",(0,s.kt)("inlineCode",{parentName:"p"},"client.record.setData"),"). This allows writing to records without subscribing."))),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"Listening is a complex feature that can be implemented with simplicity in your deepstream apps. Try listening to cut down the cost and boost the efficiency of your backend processes."))}h.isMDXComponent=!0},5061:function(e,t,n){t.Z=n.p+"assets/images/listening-for-load-balancing-2b6ae393923ce7d043f702304b141b72.png"},8460:function(e,t,n){t.Z=n.p+"assets/images/listening-d3c756ff10423b5a0a0c39b2fc5e9494.png"},9579:function(e,t,n){t.Z=n.p+"assets/images/pubsub-with-listening-workflow-88159e3843cccfe77a07055688aebfb9.png"},7589:function(e,t,n){t.Z=n.p+"assets/images/usual-pubsub-workflow-60723bba6b271f8d7809e55053675a25.png"}}]);
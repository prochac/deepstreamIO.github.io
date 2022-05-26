"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[6267],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4129:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={title:"WebRTC 05: Screen Sharing",description:"Create a video feed from your screen and share it via WebRTC",tags:["WebRTC","Canvas","getUserMedia","captureStream","Screensharing"]},c=void 0,l={unversionedId:"guides/webrtc/webrtc-screen-sharing",id:"guides/webrtc/webrtc-screen-sharing",title:"WebRTC 05: Screen Sharing",description:"Create a video feed from your screen and share it via WebRTC",source:"@site/docs/20-guides/webrtc/50-webrtc-screen-sharing.md",sourceDirName:"20-guides/webrtc",slug:"/guides/webrtc/webrtc-screen-sharing",permalink:"/docs/guides/webrtc/webrtc-screen-sharing",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/20-guides/webrtc/50-webrtc-screen-sharing.md",tags:[{label:"WebRTC",permalink:"/docs/tags/web-rtc"},{label:"Canvas",permalink:"/docs/tags/canvas"},{label:"getUserMedia",permalink:"/docs/tags/get-user-media"},{label:"captureStream",permalink:"/docs/tags/capture-stream"},{label:"Screensharing",permalink:"/docs/tags/screensharing"}],version:"current",sidebarPosition:50,frontMatter:{title:"WebRTC 05: Screen Sharing",description:"Create a video feed from your screen and share it via WebRTC",tags:["WebRTC","Canvas","getUserMedia","captureStream","Screensharing"]},sidebar:"tutorialSidebar",previous:{title:"WebRTC 04: Video Editing / Canvas Streams",permalink:"/docs/guides/webrtc/webrtc-video-manipulation"},next:{title:"WebRTC 06: File Transfer",permalink:"/docs/guides/webrtc/webrtc-file-transfer"}},p=[{value:"Getting a MediaStream from your screen",id:"getting-a-mediastream-from-your-screen",children:[{value:"The hard part",id:"the-hard-part",children:[],level:3},{value:"1. Making a postMessage call from the main page",id:"1-making-a-postmessage-call-from-the-main-page",children:[],level:3},{value:"2. Proxying messages through the extension&#39;s contentscript",id:"2-proxying-messages-through-the-extensions-contentscript",children:[],level:3},{value:"3. Requesting screen access from the background script",id:"3-requesting-screen-access-from-the-background-script",children:[],level:3},{value:"Packaging it as an extension",id:"packaging-it-as-an-extension",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this WebRTC tutorial for screensharing we won't be talking about WebRTC. Why? The video feed from your browser or desktop screen is just another MediaStream like the ones we've discussed in the ",(0,s.kt)("a",{parentName:"p",href:"webrtc-audio-video"},"WebRTC Audio/Video tutorial")," and can be attached to a PeerConnection in the exact same way. The difference is: this MediaStream is a lot more complicated to optain."),(0,s.kt)("h2",{id:"getting-a-mediastream-from-your-screen"},"Getting a MediaStream from your screen"),(0,s.kt)("p",null,"In a nutshell getting a MediaStream from your browser-window or desktop takes three steps:"),(0,s.kt)("p",null,"Invoking the desktop capture dialog with"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"chrome.desktopCapture.chooseDesktopMedia(\n    ['screen', 'window'],\n    port.sender.tab,\n    onResponse\n);\n")),(0,s.kt)("p",null,"which launches a window like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Screen Sharing Dialog",src:n(6374).Z})),(0,s.kt)("p",null,"Once the user confirms, ",(0,s.kt)("inlineCode",{parentName:"p"},"onResponse")," is invoked with a ",(0,s.kt)("inlineCode",{parentName:"p"},"sourceId")," that needs to be passed to ",(0,s.kt)("inlineCode",{parentName:"p"},"navigator.getUserMedia()")," as part of the video constraints definition"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"navigator.getUserMedia({\n    video:{\n        mandatory: {\n            chromeMediaSource: 'desktop',\n            chromeMediaSourceId: sourceId\n        }\n    }},\n    stream => {},\n    error => {}\n);\n")),(0,s.kt)("p",null,"From here, all we have to do is attach our stream to either a WebRTC PeerConnection or play it on a video element..."),(0,s.kt)("h3",{id:"the-hard-part"},"The hard part"),(0,s.kt)("p",null,"But: this functionality is currently only available in Chrome and Firefox. Firefox allows it to be used directly, but Chrome makes the ",(0,s.kt)("inlineCode",{parentName:"p"},"chooseDesktopMedia")," API only available to plugins (unless you're Google of course, Hangouts can use it directly)"),(0,s.kt)("p",null,"This means the general workflow looks as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The main page makes a ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"},"postMessage")," call to ask for a sourceId"),(0,s.kt)("li",{parentName:"ol"},"The postMessage is received by a ",(0,s.kt)("a",{parentName:"li",href:"https://developer.chrome.com/extensions/content_scripts"},"Chrome extension content script")," which proxies it forward to an ",(0,s.kt)("a",{parentName:"li",href:"https://developer.chrome.com/extensions/event_pages"},"event or background page"),"."),(0,s.kt)("li",{parentName:"ol"},"This background page has access to the ",(0,s.kt)("inlineCode",{parentName:"li"},"chrome.*")," APIs, invokes the screen sharing dialog, receives a sourceId and sends it back via postMessage"),(0,s.kt)("li",{parentName:"ol"},"The content script once more forwards the response to the main page"),(0,s.kt)("li",{parentName:"ol"},"The main page issues a ",(0,s.kt)("inlineCode",{parentName:"li"},"getUserMedia")," query using the sourceId as part of the video constraints.")),(0,s.kt)("p",null,"Here's how this works in code."),(0,s.kt)("h3",{id:"1-making-a-postmessage-call-from-the-main-page"},"1. Making a postMessage call from the main page"),(0,s.kt)("p",null,"and setting up a listener for the response looks as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"    window.addEventListener( 'message', function( msg ){\n        if( msg.data && msg.data.sourceId ) {\n            getScreen( msg.data.sourceId );\n        }\n    }, false);\n\n    window.postMessage( 'requestScreenSourceId', '*' );\n")),(0,s.kt)("p",null,"Please note that it might be necessary to filter for certain types of response messages if your application uses postMessage for other purposes."),(0,s.kt)("h3",{id:"2-proxying-messages-through-the-extensions-contentscript"},"2. Proxying messages through the extension's contentscript"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// connect to chrome's runtime\nvar port = chrome.runtime.connect();\n\n// forward messages from the page to the background script\nwindow.addEventListener('message', function (event) {\n    if (event.source === window) {\n        port.postMessage( event.data );\n    }\n});\n\n// forward messages from the background script to the page\nport.onMessage.addListener(function (message) {\n    window.postMessage(message, '*');\n});\n")),(0,s.kt)("h3",{id:"3-requesting-screen-access-from-the-background-script"},"3. Requesting screen access from the background script"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"chrome.runtime.onConnect.addListener(function (port) {\n    function onResponse( sourceId ) {\n        if(!sourceId || !sourceId.length) {\n            port.postMessage('PermissionDeniedError');\n        } else {\n            port.postMessage({ sourceId: sourceId });\n        }\n    }\n\n    function onMessage( msg ) {\n        if( msg !== 'requestScreenSourceId' ) {\n            return;\n        }\n        chrome.desktopCapture.chooseDesktopMedia(\n            ['screen', 'window'],\n            port.sender.tab,\n            onResponse\n        );\n    }\n\n    port.onMessage.addListener( onMessage );\n});\n")),(0,s.kt)("h3",{id:"packaging-it-as-an-extension"},"Packaging it as an extension"),(0,s.kt)("p",null,"In order to turn both content and background script into a chrome extension we need to add a ",(0,s.kt)("inlineCode",{parentName:"p"},"manifest.json")," file. You can find its full content ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/dsh-demo-webrtc-examples/blob/master/05-screen-sharing/chrome-addon/manifest.json"},"here"),", the important part is the permission to use the desktopCapture API:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'"permissions": [\n    "desktopCapture"\n]\n')),(0,s.kt)("p",null,"as well as pointers to the content script"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'"content_scripts": [ {\n   "js": [ "content-script.js" ],\n   "all_frames": true,\n   "run_at": "document_end",\n   // your domain here, only HTTPS works!\n   "matches": ["https://deepstream.io/*"]\n}]\n')),(0,s.kt)("p",null,"and background script:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'"background": {\n    "scripts": ["background-script.js"],\n    "persistent": false\n}\n')),(0,s.kt)("p",null,"To try this example yourself you will first need to install the chrome extension. To do so"),(0,s.kt)("a",{name:"install-addon"}),"- download or clone the [Github Repo](https://github.com/deepstreamIO/dsh-demo-webrtc-examples) - Open chrome://extensions/ - Check `Developer Mode` at the top - Click `Load unpacked extensions...` - Select `05-screen-sharing/chrome-addon`",(0,s.kt)("p",null,"then click 'request desktop video'"))}u.isMDXComponent=!0},6374:function(e,t){t.Z="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6Zjg0MGExMTNhNGEwZWIwYjQ2NzkzMmVhNGVjNWI4ODZlMTQwYmIxZmYyNzgxZDQ1YTNiYmE4OWEyNTBhNDU2MApzaXplIDMyNjc0Cg=="}}]);
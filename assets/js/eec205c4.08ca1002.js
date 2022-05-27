"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[2617],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=r,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2775:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"WebRTC 06: File Transfer",description:"Learn how to read, transfer, receive and download a file between two browsers",tags:["WebRTC","FileReader","Blob","Download Blob","JavaScript"]},s=void 0,d={unversionedId:"guides/webrtc/webrtc-file-transfer",id:"guides/webrtc/webrtc-file-transfer",title:"WebRTC 06: File Transfer",description:"Learn how to read, transfer, receive and download a file between two browsers",source:"@site/docs/20-guides/webrtc/60-webrtc-file-transfer.md",sourceDirName:"20-guides/webrtc",slug:"/guides/webrtc/webrtc-file-transfer",permalink:"/docs/guides/webrtc/webrtc-file-transfer",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/20-guides/webrtc/60-webrtc-file-transfer.md",tags:[{label:"WebRTC",permalink:"/docs/tags/web-rtc"},{label:"FileReader",permalink:"/docs/tags/file-reader"},{label:"Blob",permalink:"/docs/tags/blob"},{label:"Download Blob",permalink:"/docs/tags/download-blob"},{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",sidebarPosition:60,frontMatter:{title:"WebRTC 06: File Transfer",description:"Learn how to read, transfer, receive and download a file between two browsers",tags:["WebRTC","FileReader","Blob","Download Blob","JavaScript"]},sidebar:"tutorialSidebar",previous:{title:"WebRTC 05: Screen Sharing",permalink:"/docs/guides/webrtc/webrtc-screen-sharing"},next:{title:"WebRTC in production",permalink:"/docs/guides/webrtc/webrtc-in-production"}},c=[{value:"How does binary data work in browsers",id:"how-does-binary-data-work-in-browsers",children:[],level:2},{value:"Why is that important",id:"why-is-that-important",children:[],level:2},{value:"Establishing a manipulated P2P Connection",id:"establishing-a-manipulated-p2p-connection",children:[],level:2},{value:"Getting a file",id:"getting-a-file",children:[],level:2},{value:"Reading and sending a file",id:"reading-and-sending-a-file",children:[],level:2},{value:"Receiving and reassembling a file",id:"receiving-and-reassembling-a-file",children:[],level:2},{value:"downloading a file",id:"downloading-a-file",children:[],level:2}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"WebRTC makes it possible to transfer any file between two browsers using ",(0,i.kt)("a",{parentName:"p",href:"webrtc-datachannels"},"data-channels")," and binary data."),(0,i.kt)("h2",{id:"how-does-binary-data-work-in-browsers"},"How does binary data work in browsers"),(0,i.kt)("p",null,"The current generation of browsers allow you to send arrays of bytes - groups of eight zeros or ones that can specify numbers between 0 and 255. To work with these, they provide a number of concepts - ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"s  to store them in, ",(0,i.kt)("inlineCode",{parentName:"p"},"FileReader"),"s to create them and ",(0,i.kt)("inlineCode",{parentName:"p"},"Blob"),"s to assemble them. Transports like Websockets and WebRTC allow for the transmission of raw byte streams."),(0,i.kt)("h2",{id:"why-is-that-important"},"Why is that important"),(0,i.kt)("p",null,"Transferring files between two browsers means working directly with binary data. There is no ",(0,i.kt)("inlineCode",{parentName:"p"},"sendFile()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"onFileReceived")," API - instead its up to the developer to get the file from a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"file input"),", via ",(0,i.kt)("a",{parentName:"p",href:"https://www.html5rocks.com/en/tutorials/casestudies/box_dnd_download/"},"drag and drop")," or - if you're building a chrome app with elevated permissions - from the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/apps/fileSystem"},"file system API"),", read it using a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/API/FileReader"},"FileReader"),", transmit it in chunks, reassemble it on the other side and finally trick the browser into downloading it."),(0,i.kt)("h2",{id:"establishing-a-manipulated-p2p-connection"},"Establishing a manipulated P2P Connection"),(0,i.kt)("p",null,"For this tutorial we assume you already know how to establish a connection between two peers as described in ",(0,i.kt)("a",{parentName:"p",href:"webrtc-datachannels"},"the first tutorial"),". There is one extra bit we have to do though: By default Chrome caps the transfer rate for WebRTC datachannels to 30 kbps - at this speed downloading GTA 5 on Steam would take a solid 25 days nonstop."),(0,i.kt)("p",null,"Fortunately, the offer ",(0,i.kt)("a",{parentName:"p",href:"https://andrewjprokop.wordpress.com/2013/09/30/understanding-session-description-protocol-sdp/"},"sdp")," is just a string - which means we can fiddle with it before sending. This can be done by adding this line to our outgoing signal callback:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"signal.sdp = signal.sdp.replace( 'b=AS:30', 'b=AS:1638400' );\n")),(0,i.kt)("h2",{id:"getting-a-file"},"Getting a file"),(0,i.kt)("p",null,"We'll use a simple file input that lets users pick one file a time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<input id="my-file" type="file" />\n')),(0,i.kt)("p",null,"As soon as the user selects a file, it will be available as an entry in the input's ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/API/FileList"},"FileList")," and can be retrieved via"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var file = fileInput.files[ 0 ];\n")),(0,i.kt)("p",null,"Each ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"file object")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property and allows us to access its data via ",(0,i.kt)("inlineCode",{parentName:"p"},".slice(start, end)")," which returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Blob"),"."),(0,i.kt)("h2",{id:"reading-and-sending-a-file"},"Reading and sending a file"),(0,i.kt)("p",null,"We can't do much with Blobs - what we need is an ArrayBuffer. We can get one by using a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/API/FileReader"},"FileReader")," - a helpful utility that allows us to read our file in multiple chunks and start sending data whilst still reading it."),(0,i.kt)("p",null,"We need to be careful about the size of our chunks - there's a ",(0,i.kt)("a",{parentName:"p",href:"http://viblast.com/blog/2015/2/5/webrtc-data-channel-message-size/"},"certain mystery")," about the exact possible maximum, but 1200 bytes per chunk seems to be a solid upper limit."),(0,i.kt)("p",null,"Combining all these requirements gives us the following code for reading and sending files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const BYTES_PER_CHUNK = 1200;\nvar file;\nvar currentChunk;\nvar fileInput = $( 'input[type=file]' );\nvar fileReader = new FileReader();\n\nfunction readNextChunk() {\n    var start = BYTES_PER_CHUNK * currentChunk;\n    var end = Math.min( file.size, start + BYTES_PER_CHUNK );\n    fileReader.readAsArrayBuffer( file.slice( start, end ) );\n}\n\nfileReader.onload = function() {\n    p2pConnection.send( fileReader.result );\n    currentChunk++;\n\n    if( BYTES_PER_CHUNK * currentChunk < file.size ) {\n        readNextChunk();\n    }\n};\n\nfileInput.on( 'change', function() {\n    file = fileInput[ 0 ].files[ 0 ];\n    currentChunk = 0;\n    // send some metadata about our file\n    // to the receiver\n    p2pConnection.send(JSON.stringify({\n        fileName: file.name,\n        fileSize: file.size\n    }));\n    readNextChunk();\n});\n")),(0,i.kt)("h2",{id:"receiving-and-reassembling-a-file"},"Receiving and reassembling a file"),(0,i.kt)("p",null,"As a receiver our connection now spits out a combination of somewhat unrelated text and binary messages. It's our responsibility to reassemble them into a file again."),(0,i.kt)("p",null,"To do this we first need to know about the name and more importantly ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," of the file we are receiving. These are transferred as text in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"p2pConnection.send(JSON.stringify({\n    fileName: file.name,\n    fileSize: file.size\n}));\n")),(0,i.kt)("p",null,"and received in our P2pConnection's ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," event. Our receiver is built on the assumption that each file transfer starts with a single text message followed by individual chunks in order until the full amount of bytes is received. This is the simplest scenario, but not the fastest. To speed-up transfers you may want to consider using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createDataChannel#RTCDataChannelInit_dictionary"},"unordered but reliable")," transfers and reserving the first few bytes of every chunk to keep track of the packet order."),(0,i.kt)("p",null,"Put together this would look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var incomingFileInfo;\nvar incomingFileData;\nvar bytesReceived;\nvar downloadInProgress = false;\n\np2pConnection.on( 'data', data => {\n    if( downloadInProgress === false ) {\n        startDownload( data );\n    } else {\n        progressDownload( data );\n    }\n});\n\nfunction startDownload( data ) {\n    incomingFileInfo = JSON.parse( data.toString() );\n    incomingFileData = [];\n    bytesReceived = 0;\n    downloadInProgress = true;\n    console.log( 'incoming file <b>' + incomingFileInfo.fileName + '</b> of ' + incomingFileInfo.fileSize + ' bytes' );\n}\n\nfunction progressDownload( data ) {\n    bytesReceived += data.byteLength;\n    incomingFileData.push( data );\n    console.log( 'progress: ' +  ((bytesReceived / incomingFileInfo.fileSize ) * 100).toFixed( 2 ) + '%' );\n    if( bytesReceived === incomingFileInfo.fileSize ) {\n        endDownload();\n    }\n}\n")),(0,i.kt)("h2",{id:"downloading-a-file"},"downloading a file"),(0,i.kt)("p",null,"All that's missing now is ",(0,i.kt)("inlineCode",{parentName:"p"},"endDownload")," - a function that concatenates our received bytes and initiates a download. Assembling our file is achieved by simply casting our multiple byte-arrays in ",(0,i.kt)("inlineCode",{parentName:"p"},"incomingFileData")," into a single Blob"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"blob = new Blob( incomingFileData );\n")),(0,i.kt)("p",null,"The second part is a bit trickier - currently our entire file only exists in the browser's memory. To trigger a download we generate a link. set its source to our Blob via"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    anchor.href = URL.createObjectURL( blob );\n")),(0,i.kt)("p",null,"tell it what filename to use via"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    anchor.download = incomingFileInfo.fileName;\n")),(0,i.kt)("p",null,"and finally invoke a (cross browserish) click"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function endDownload() {\n    downloadInProgress = false;\n    var blob = new window.Blob( incomingFileData );\n    var anchor = document.createElement( 'a' );\n    anchor.href = URL.createObjectURL( blob );\n    anchor.download = incomingFileInfo.fileName;\n    anchor.textContent = 'XXXXXXX';\n\n    if( anchor.click ) {\n        anchor.click();\n    } else {\n        var evt = document.createEvent( 'MouseEvents' );\n        evt.initMouseEvent( 'click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null );\n        anchor.dispatchEvent( evt );\n    }\n}\n")),(0,i.kt)("p",null,"Phew - that was hard. But hey, it's the last tutorial in this series. All that's left now is to wrap up with ",(0,i.kt)("a",{parentName:"p",href:"webrtc-in-production"},"an overview of what it takes to use WebRTC in production apps")))}u.isMDXComponent=!0}}]);
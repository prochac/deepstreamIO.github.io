"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[6450],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"React Native"},l=void 0,p={unversionedId:"tutorials/integrations/mobile/react-native",id:"tutorials/integrations/mobile/react-native",title:"React Native",description:"This tutorial has not been updated",source:"@site/docs/00-tutorials/50-integrations/20-mobile/react-native.md",sourceDirName:"00-tutorials/50-integrations/20-mobile",slug:"/tutorials/integrations/mobile/react-native",permalink:"/docs/tutorials/integrations/mobile/react-native",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/00-tutorials/50-integrations/20-mobile/react-native.md",tags:[],version:"current",frontMatter:{title:"React Native"},sidebar:"tutorialSidebar",previous:{title:"Ionic",permalink:"/docs/tutorials/integrations/mobile/ionic2"},next:{title:"Standard Logger",permalink:"/docs/tutorials/plugins/logger/std"}},c=[{value:"1. Start the server",id:"1-start-the-server",children:[],level:2},{value:"2. Set up the HTML side (optional)",id:"2-set-up-the-html-side-optional",children:[],level:2},{value:"3. Initialize and run a new React Native application",id:"3-initialize-and-run-a-new-react-native-application",children:[],level:2},{value:"4. React Native Boilerplate",id:"4-react-native-boilerplate",children:[],level:2},{value:"5. Import the deepstream JS component",id:"5-import-the-deepstream-js-component",children:[],level:2},{value:"6. Subscribe to changes in our value",id:"6-subscribe-to-changes-in-our-value",children:[],level:2},{value:"7. Push changes from React Native",id:"7-push-changes-from-react-native",children:[],level:2},{value:"8. Complete!",id:"8-complete",children:[],level:2},{value:"9. Building for production",id:"9-building-for-production",children:[],level:2}],u={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This tutorial has not been updated"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/"},"React Native")," lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components."),(0,i.kt)("p",null,"Now that deepstream implements websockets, integrating it with your React Native app via the ",(0,i.kt)("a",{parentName:"p",href:"../../../docs/client-js/client"},"JS connector")," has become a breeze. The following steps will take you through the process with a hello world-esque example (",(0,i.kt)("a",{parentName:"p",href:"#8-complete-"},"skip to solution"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Using React Native",src:n(8544).Z})),(0,i.kt)("h2",{id:"1-start-the-server"},"1. Start the server"),(0,i.kt)("p",null,"Let's start by installing the server. Just pick the ",(0,i.kt)("a",{parentName:"p",href:"../../install/linux"},"right version for your operating system")," and follow its steps. Once the server is installed, you can start it with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deepstream start\n")),(0,i.kt)("h2",{id:"2-set-up-the-html-side-optional"},"2. Set up the HTML side (optional)"),(0,i.kt)("p",null,"To try some quick tests between the React Native Simulator and a browser window, you can set up an HTML side following the ",(0,i.kt)("a",{parentName:"p",href:"../../getting-started/javascript"},"quickstart guide"),"."),(0,i.kt)("h2",{id:"3-initialize-and-run-a-new-react-native-application"},"3. Initialize and run a new React Native application"),(0,i.kt)("p",null,"First initialize the project in your terminal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"react-native init DeepstreamReactNative\n")),(0,i.kt)("p",null,"Move into the project folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd DeepstreamReactNative\n")),(0,i.kt)("p",null,"Fetch the deepstream code and the url lib it depends on. For usage in react-native the install must include an environment variable in order to run a postinstall script that facilitates integration with react-native. For further explanation see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io-client-js/issues/534"},"this issue"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"DEEPSTREAM_ENV=react-native npm install @deepstream/client --save\n")),(0,i.kt)("p",null,"Run the app in the iOS simulator (or check the React Native ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/getting-started.html"},"docs")," for use with the Android simulator)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"react-native run-ios\n")),(0,i.kt)("h2",{id:"4-react-native-boilerplate"},"4. React Native Boilerplate"),(0,i.kt)("p",null,"Usually, both the Android and iOS index files are redirected to a central app. To keep things simple for this example, we'll just alter the ",(0,i.kt)("em",{parentName:"p"},"index.ios.js")," file. Note that you should implement this code in ",(0,i.kt)("em",{parentName:"p"},"index.android.js")," if you are working with the Android simulator."),(0,i.kt)("p",null,"Replace the contents of index.ios.js with the following to get a simple text input field in your app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { Component } from 'react';\nimport { AppRegistry, TextInput } from 'react-native';\n\nexport default class DeepstreamReactNative extends Component {\n  constructor(props) {\n    super(props);\n\n    const text = '';\n\n    this.state = { text }\n  }\n\n  render() {\n    const { text } = this.state\n\n    return (\n      <TextInput\n        style={ {\n          height: 40,\n          width: 300,\n          borderWidth: 2,\n          margin: 35,\n          padding: 10\n        } }\n        autoCorrect={false}\n        value={text}\n        onChangeText={(text) => this.setState({ text })}\n      />\n    );\n  }\n}\n\nAppRegistry.registerComponent(\n  'DeepstreamReactNative',\n  () => DeepstreamReactNative\n);\n")),(0,i.kt)("h2",{id:"5-import-the-deepstream-js-component"},"5. Import the deepstream JS component"),(0,i.kt)("p",null,"Since we already installed deepstream in step 3, all we need to do now is import it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { Component } from 'react';\nimport { AppRegistry, TextInput } from 'react-native';\nimport { DeepstreamClient } from '@deepstream/client';\n\n// ...\n")),(0,i.kt)("p",null,"Then setup the client and record like we saw in the ",(0,i.kt)("a",{parentName:"p",href:"../../getting-started/javascript"},"quickstart guide")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"constructor(props) {\n  super(props)\n\n  const client = new DeepstreamClient('localhost:6020')\n  client.login()\n\n  const record = client.record.getRecord('some-name')\n  // ...\n")),(0,i.kt)("h2",{id:"6-subscribe-to-changes-in-our-value"},"6. Subscribe to changes in our value"),(0,i.kt)("p",null,"Since our text element is already depending on the value of ",(0,i.kt)("em",{parentName:"p"},"text")," in our state, we only need to make sure to update that value whenever our record changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"constructor(props) {\n  super(props);\n\n  const client = new DeepstreamClient('localhost:6020')\n  client.login()\n\n  const record = client.record.getRecord('some-name')\n  const text = ''\n\n  record.subscribe('payload', text => this.setState({ text }));\n\n  // ...\n\n  this.state = { record, text }\n")),(0,i.kt)("h2",{id:"7-push-changes-from-react-native"},"7. Push changes from React Native"),(0,i.kt)("p",null,"For the full circle, we will also have to push any change in our text input back to the server. To achieve that, let's create a method and bind it to the input's onTextChange:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"constructor(props) {\n\n  // ...\n\n  const setRecordFn = (value) => this.state.record.set('payload', value);\n\n  this.state = { record, text, setRecordFn }\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"render() {\n  const { text, setRecordFn } = this.state\n\n  return (\n    <TextInput\n      // ...\n      onChangeText={setRecordFn}\n    />\n  );\n")),(0,i.kt)("h2",{id:"8-complete"},"8. Complete!"),(0,i.kt)("p",null,"Your index.ios.js should now look as follows, and the app should work as shown in the animation. Happy developing!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { Component } from 'react';\nimport { AppRegistry, TextInput } from 'react-native';\nimport { DeepstreamClient } from '@deepstream/client';\n\nexport default class DeepstreamReactNative extends Component {\n  constructor(props) {\n    super(props);\n\n    const client = new DeepstreamClient('localhost:6020')\n    client.login();\n    const record = client.record.getRecord('some-name');\n    const text = '';\n\n    record.subscribe('payload', (value) => this.setState({ text: value }));\n\n    const setRecordFn = (value) => this.state.record.set('payload', value);\n\n    this.state = { record, text, setRecordFn }\n  }\n\n  render() {\n    const { text, setRecordFn } = this.state\n\n    return (\n      <TextInput\n        style={ {\n          height: 40,\n          width: 300,\n          borderWidth: 2,\n          margin: 35,\n          padding: 10\n        } }\n        autoCorrect={false}\n        value={text}\n        onChangeText={setRecordFn}\n      />\n    );\n  }\n}\n\nAppRegistry.registerComponent(\n  'DeepstreamReactNative',\n  () => DeepstreamReactNative\n);\n")),(0,i.kt)("h2",{id:"9-building-for-production"},"9. Building for production"),(0,i.kt)("p",null,"If you are using a minifier for your react-native production build (for example when using ",(0,i.kt)("a",{parentName:"p",href:"https://expo.io/"},"expo"),"), make sure to include in the project root the metro bundler config file: ",(0,i.kt)("inlineCode",{parentName:"p"},"metro.config.js")," with the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"module.exports = {\n  transformer: {\n    minifierConfig: {\n      keep_classnames: true,\n      keep_fnames: true,\n      mangle: {\n        keep_classnames: true,\n        keep_fnames: true\n      }\n    }\n  }\n}\n")))}d.isMDXComponent=!0},8544:function(e,t,n){t.Z=n.p+"assets/images/deepstream-react-native-d45412844bd1187f0189ea5c56b0df66.gif"}}]);
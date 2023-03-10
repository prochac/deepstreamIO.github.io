"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[8988],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1482:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Command Line Interface",description:"The options that can be passed to the deepstream server via the command line"},l=void 0,p={unversionedId:"docs/server/command-line-interface",id:"docs/server/command-line-interface",title:"Command Line Interface",description:"The options that can be passed to the deepstream server via the command line",source:"@site/docs/10-docs/10-server/10-command-line-interface.md",sourceDirName:"10-docs/10-server",slug:"/docs/server/command-line-interface",permalink:"/docs/docs/server/command-line-interface",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/10-docs/10-server/10-command-line-interface.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Command Line Interface",description:"The options that can be passed to the deepstream server via the command line"},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/docs/"},next:{title:"Configuration",permalink:"/docs/docs/server/configuration"}},d=[{value:"Usage",id:"usage",children:[{value:"deepstream start",id:"deepstream-start",children:[{value:"--config",id:"--config",children:[],level:4},{value:"--lib-dir",id:"--lib-dir",children:[],level:4}],level:3},{value:"deepstream daemon",id:"deepstream-daemon",children:[],level:3},{value:"deepstream cluster",id:"deepstream-cluster",children:[],level:3},{value:"deepstream service",id:"deepstream-service",children:[{value:"--config",id:"--config-1",children:[],level:4},{value:"--service-name",id:"--service-name",children:[],level:4},{value:"--std-out",id:"--std-out",children:[],level:4},{value:"--std-err",id:"--std-err",children:[],level:4},{value:"--dry-run",id:"--dry-run",children:[],level:4}],level:3},{value:"deepstream info",id:"deepstream-info",children:[],level:3},{value:"deepstream hash",id:"deepstream-hash",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"deepstream comes with a comprehensive command line interface (CLI) that lets you start or stop the server or override configuration options."),(0,o.kt)("p",null,"Many of these options can also be set via the configuration file, read ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/server/configuration"},"config file documentation"),". for a detailed list."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"If you've ",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/install/linux/"},"installed")," deepstream on linux via a package manager, the ",(0,o.kt)("inlineCode",{parentName:"p"},"deepstream")," command is already on your path. On Mac and Windows, you can access it through the executable, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"./deepstream")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"deepstream.exe")),(0,o.kt)("p",null,"For the brave souls who've got deepstream via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deepstreamIO/deepstream.io"},"Github")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/deepstream.io"},"NPM")," instead, you can find the executable in ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/deepstream")),(0,o.kt)("p",null,"Let's start simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deepstream --help\n")),(0,o.kt)("p",null,"will print out all available commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  Usage: deepstream [command]\n\n\n  Commands:\n\n    start [options]            start a deepstream server\n    info [options]             print meta information about build and runtime\n    hash [options] [password]  Generate a hash from a plain text password using file auth configuration settings\n    service [options] [add|remove|start|stop]  Add, remove, start or stop deepstream as a service to your operating system\n    daemon [options]           start a deepstream daemon that will auto-restart on failures\n    cluster [options]           start a vertical cluster of deepstream servers on each processor core\n\n  Options:\n\n    -h, --help     output usage information\n    -V, --version  output the version number\n")),(0,o.kt)("p",null,"You can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," option to individual commands as well."),(0,o.kt)("h3",{id:"deepstream-start"},"deepstream start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deepstream start --help\n")),(0,o.kt)("p",null,"will print all the options you can specify for the deepstream server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  Usage: start [options]\n\n  start a deepstream server\n\n  Options:\n\n    -h, --help                         output usage information\n    -c, --config [file]                configuration file, parent directory will be used as prefix for other config files\n    -l, --lib-dir [directory]          path where to lookup for plugins like connectors and logger\n    --server-name <name>               Each server within a cluster needs a unique name\n    --host <host>                      host for the HTTP/websocket server\n    --port <port>                      port for the HTTP/websocket server\n    --disable-auth                     Force deepstream to use "none" auth type\n    --disable-permissions              Force deepstream to use "none" permissions\n    --log-level <level>                Log messages with this level and above\n    --colors [true|false]              Enable or disable logging with colors\n')),(0,o.kt)("p",null,"You can either use the shorthand syntax with one hyphen or the long syntax with two hyphens."),(0,o.kt)("p",null,"All the options starting from ",(0,o.kt)("inlineCode",{parentName:"p"},"--server-name")," and below will overwrite the values within your config file if. If you want to specify more options, or see the default values provided please look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/server/configuration"},"config file documentation"),"."),(0,o.kt)("h4",{id:"--config"},"--config"),(0,o.kt)("p",null,"If you installed it via a linux package manager it will default to ",(0,o.kt)("em",{parentName:"p"},"/etc/deepstream"),".\nOtherwise the paths are relative to your current working directory."),(0,o.kt)("h4",{id:"--lib-dir"},"--lib-dir"),(0,o.kt)("p",null,"If you installed it via a linux package manager it will default to ",(0,o.kt)("em",{parentName:"p"},"/var/lib/deepstream"),".\nOtherwise the paths are relative to your current working directory."),(0,o.kt)("h3",{id:"deepstream-daemon"},"deepstream daemon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deepstream damemon --help\n")),(0,o.kt)("p",null,"This command starts the deepstream server and monitors it for crashes, allowing it to be automatically\nrestarted on unexpected exits."),(0,o.kt)("p",null,"It allows all the same commands as ",(0,o.kt)("inlineCode",{parentName:"p"},"deepstream start")),(0,o.kt)("h3",{id:"deepstream-cluster"},"deepstream cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deepstream cluster --help\n")),(0,o.kt)("p",null,"This command starts a vertical cluster of deepstream servers, i.e. multiple process on the same machine that share state and act as a cluster. Defaults to one process per available core"),(0,o.kt)("p",null,"It allows all the same commands as ",(0,o.kt)("inlineCode",{parentName:"p"},"deepstream start")),(0,o.kt)("h3",{id:"deepstream-service"},"deepstream service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deepstream service --help\n\n  Usage: service [options] [add|remove|start|stop|status]\n\n  Add, remove, start, stop or see the status of deepstream as a service to your operating system\n\n  Options:\n\n    -h, --help             output usage information\n    -c, --config [file]    configuration file, parent directory will be used as prefix for other config files\n    --service-name <name>  the name to register the service\n    --std-out <directory>  the directory for output logs\n    --std-err <directory>  the directory for error logs\n    --dry-run              outputs the service file to screen\n")),(0,o.kt)("h4",{id:"--config-1"},"--config"),(0,o.kt)("p",null,"If you installed it via a linux package manager it will default to ",(0,o.kt)("em",{parentName:"p"},"/etc/deepstream"),".\nPass the config file you would like the service to use"),(0,o.kt)("h4",{id:"--service-name"},"--service-name"),(0,o.kt)("p",null,"Defaults to deepstream\nAllows you to create multiple services on the same machine. You would need to ensure that different ports are used\nto avoid clashing."),(0,o.kt)("h4",{id:"--std-out"},"--std-out"),(0,o.kt)("p",null,"Specify where you would like your logs to be stored. Default to ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/deepstream")),(0,o.kt)("h4",{id:"--std-err"},"--std-err"),(0,o.kt)("p",null,"Specify where you would like your error logs to be stored. Default to ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/deepstream")),(0,o.kt)("h4",{id:"--dry-run"},"--dry-run"),(0,o.kt)("p",null,"See what the config file will emit without writing it to disk. This is useful if you want to avoid running with sudo."),(0,o.kt)("h3",{id:"deepstream-info"},"deepstream info"),(0,o.kt)("p",null,"Displays information, about deepstream's version and system architecture.\nIf you'd like to raise an issue on Github we'd appreciate if you could paste attach it."),(0,o.kt)("p",null,"Output example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "deepstreamVersion": "6.1.2",\n  "gitRef": "b65e5230b1cedeb102d325d0ad4f568f6e3fd7d8",\n  "buildTime": "Sat Apr 23 2022 02:57:49 GMT+0000 (Coordinated Universal Time)",\n  "platform": "linux",\n  "arch": "x64",\n  "nodeVersion": "v14.18.1",\n  "libs": [\n    "uWebSockets.js:20.5.0"\n  ]\n}\n')),(0,o.kt)("h3",{id:"deepstream-hash"},"deepstream hash"),(0,o.kt)("p",null,"This command allows you generate a hash for a plaintext password. Show the usage by appending ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," to that command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  Usage: hash [options] [password]\n\n  Generate a hash from a plaintext password using file auth configuration settings\n\n  Options:\n\n    -h, --help           output usage information\n    -c, --config [file]  configuration file containing file auth and hash settings\n")))}u.isMDXComponent=!0}}]);
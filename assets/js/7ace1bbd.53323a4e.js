"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[3018],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,A=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(A,i(i({ref:t},u),{},{components:n})):a.createElement(A,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3670:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Authentication using JWT",description:"How to use JSON Web Token to authenticate with deepstream",tags:["JWT","JSON Web Tocken","Token Auth","Session"]},l=void 0,c={unversionedId:"tutorials/core/auth/jwt-auth",id:"tutorials/core/auth/jwt-auth",title:"Authentication using JWT",description:"How to use JSON Web Token to authenticate with deepstream",source:"@site/docs/00-tutorials/20-core/20-auth/40-jwt-auth.md",sourceDirName:"00-tutorials/20-core/20-auth",slug:"/tutorials/core/auth/jwt-auth",permalink:"/docs/tutorials/core/auth/jwt-auth",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/00-tutorials/20-core/20-auth/40-jwt-auth.md",tags:[{label:"JWT",permalink:"/docs/tags/jwt"},{label:"JSON Web Tocken",permalink:"/docs/tags/json-web-tocken"},{label:"Token Auth",permalink:"/docs/tags/token-auth"},{label:"Session",permalink:"/docs/tags/session"}],version:"current",sidebarPosition:40,frontMatter:{title:"Authentication using JWT",description:"How to use JSON Web Token to authenticate with deepstream",tags:["JWT","JSON Web Tocken","Token Auth","Session"]},sidebar:"tutorialSidebar",previous:{title:"HTTP Authentication",permalink:"/docs/tutorials/core/auth/http-webhook"},next:{title:"Valve Introduction",permalink:"/docs/tutorials/core/permission/valve-introduction"}},u=[{value:"Should you use JWT with deepstream?",id:"should-you-use-jwt-with-deepstream",children:[],level:2},{value:"deepstream&#39;s Auth Webhook",id:"deepstreams-auth-webhook",children:[],level:2},{value:"deepstream HTTP Auth with JWT",id:"deepstream-http-auth-with-jwt",children:[],level:2},{value:"Let&#39;s start with the login page",id:"lets-start-with-the-login-page",children:[],level:2},{value:"Enabling HTTP Auth",id:"enabling-http-auth",children:[],level:2},{value:"deepstream Login",id:"deepstream-login",children:[],level:2},{value:"HTTP Auth Call",id:"http-auth-call",children:[],level:2},{value:"Protecting Routes",id:"protecting-routes",children:[],level:2}],h={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Authentication is vital to most apps and the way it is achieved has evolved substantially in recent years. One of the most popular of today's concepts is a standard called ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JSON Web Token")," or JWT for short that lets you store encrypted information in verifiable tokens."),(0,r.kt)("p",null,"These tokens are compact and self-contained encoded JSON objects that hold vital information which is transferred between different parties (clients/servers most times). The compact nature makes it possible to exchange them via request headers while the self-contained characteristics shine at JWT's ability to store authentication payload making JWT not just useful at authentication but also handy in information exchange."),(0,r.kt)("p",null,"JWTs have three parts: header, payload, and signature:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"header")," holds the hashing algorithm, and the type (which is most time ",(0,r.kt)("inlineCode",{parentName:"li"},"jwt"),")."),(0,r.kt)("li",{parentName:"ul"},"The second part which is ",(0,r.kt)("strong",{parentName:"li"},"payload")," consists of authentication data usually known as ",(0,r.kt)("strong",{parentName:"li"},"claims"),". - The ",(0,r.kt)("strong",{parentName:"li"},"signature")," is created by signing the header and payload using the hashing algorithm and secret. This signing process is what verifies the token.")),(0,r.kt)("p",null,"deepstream can use a number of strategies to authenticate incoming connections. For JWT we'll use the ",(0,r.kt)("a",{parentName:"p",href:"http-webhook"},"HTTP-Webhook")," - a configurable URL that deepstream will send both login and connection data to for verification."),(0,r.kt)("h2",{id:"should-you-use-jwt-with-deepstream"},"Should you use JWT with deepstream?"),(0,r.kt)("p",null,"Maybe. Traditional tokens serve as primary keys to session data, meaning they help the backend retrieve data relative to a user's session from a database or cache. A JWT, on the other hand, IS the actual session data - the cookie itself contains a payload and releases the backend from having to constantly look session data up."),(0,r.kt)("p",null,"This is great for HTTP workflows where clients make many individual requests that are all associated with the same user. deepstream, however, uses a persistent connection that is only established once when the client connects (okay, and maybe occasionally again if the connection drops). All session data stays associated with that connection, rather than with the requests and subscriptions made through it. As a result, deepstream messages are significantly smaller and faster than their HTTP equivalents."),(0,r.kt)("p",null,"This, however, does mean that deepstream itself doesn't benefit much from using JWT. It doesn't hurt much either though and can still be helpful when deepstream is used in conjunction with traditional HTTP endpoints or using deepstream's own ",(0,r.kt)("a",{parentName:"p",href:"../../../docs/client-http/v1"},"HTTP API")),(0,r.kt)("h2",{id:"deepstreams-auth-webhook"},"deepstream's Auth Webhook"),(0,r.kt)("p",null,"Before you begin performing authentication with JWT, it's worth noting that deepstream allows you to register an HTTP endpoint URL to which connection data is forwarded as POST request whenever a client or backend process attempts to log in."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"HTTP authentication flow",src:n(3579).Z})),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/core/auth/http-webhook/"},"HTTP Authentication")," guide covers how to setup this workflow in your project."),(0,r.kt)("h2",{id:"deepstream-http-auth-with-jwt"},"deepstream HTTP Auth with JWT"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jwt.io"},"JWT")," allows us to transport claims securely from the server to client and vice versa using an encoded JSON string. This token is persisted on the client and used to make authorized requests as long as the token is valid (not tampered with and not expired)."),(0,r.kt)("p",null,"Looking back at the flow described above, JWT needs to be put somewhere in the picture. The recommended workflow looks as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JWT-Auth Flow",src:n(2402).Z})),(0,r.kt)("p",null,"The steps shown here are"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user provides credentials in a static login page which are sent via HTTP POST request to the auth server."),(0,r.kt)("li",{parentName:"ol"},"If the provided credentials are valid, the server generates a JWT and responds with a 301 redirect to the web-app page that stores the token as a cookie"),(0,r.kt)("li",{parentName:"ol"},"The deepstream client establishes a connection to the deepstream server and authenticates itself by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"ds.login(null, callback)"),". This sends the stored cookie containing the JWT to the deepstream server."),(0,r.kt)("li",{parentName:"ol"},"deepstream forwards the cookie to the authentication server and awaits its reply. The auth server also has the option to parse the cookie and provide the data it contains back to deepstream to use within ",(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/core/permission/valve-introduction/"},"Valve Permissions"),". If the authentication server returns a positive response (e.g. HTTP code 200) the connection is authenticated.")),(0,r.kt)("p",null,"So much for the theory - here's how this works in practise:"),(0,r.kt)("p",null,"Our app will offer the following URLs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/")," the actual webapp with the deepstream client script. The server will only allow access to paths within that route if a JWT is provided"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/login")," the publicly accessible login page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/handle-login")," the login form posts its content to this URL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/check-token")," deepstream will forward the auth data for incoming connections to this URL")),(0,r.kt)("h2",{id:"lets-start-with-the-login-page"},"Let's start with the login page"),(0,r.kt)("p",null,"We'll start by creating a static HTML page with a simple login form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/handle-login" method="POST">\n    <div class="form-group">\n        <label for="username">Username</label>\n        <input type="text" id="username" name="username" class="form-control">\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" id="password" name="password" class="form-control">\n    </div>\n    <div class="form-group">\n        <button class="btn btn-primary" type="submit" id="login-button">Login</button>\n    </div>\n</form>\n')),(0,r.kt)("p",null,"Just two inputs -- a username and a password. Once te user hits login, the credentials are sent to a ",(0,r.kt)("inlineCode",{parentName:"p"},"/handle-login")," route. Using ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node")," with ",(0,r.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"Express")," the route can be handled using the following approach:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// . . .\nconst jwt = require('jsonwebtoken');\n\napp.post('/handle-login', function(req, res, next) {\n\n   const users = {\n    wolfram: {\n      username: 'wolfram',\n      password: 'password'\n    },\n    chris: {\n      username: 'chris',\n      password: 'password'\n    }\n    // . . .\n  }\n\n  const user = users[req.body.username];\n\n  if (!user) {\n      res.status(403).send('Invalid User')\n    } else {\n      // check if password and username matches\n      if (user.username != req.body.username || user.password != req.body.password) {\n        res.status(403).send('Invalid Password')\n      } else {\n\n        // if user is found and password is right\n        // create a token\n        const token = jwt.sign(user, 'abrakadabra');\n\n        // return the information including token as JSON\n        // set token to cookie using the httpOnly flag\n        res.cookie('access_token', token, {httpOnly: true}).status(301).redirect('/');\n      }\n    }\n});\n")),(0,r.kt)("p",null,"This method validates the provided credentials. For simplicities sake they're hardcoded in this example - in a real world app store usernames and password hashes in a database."),(0,r.kt)("p",null,"Once validated,  the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonwebtoken")," module is used to generate and sign a token using the auth payload. The token is then stored in a client-side cookie as ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," while the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpOnly")," flag is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in order to disable javascript access from the client. Finally, authenticated users are redirected to the actual application page containing the deepstream client."),(0,r.kt)("h2",{id:"enabling-http-auth"},"Enabling HTTP Auth"),(0,r.kt)("p",null,"Next up, we need to start a deepstream server with enabled HTTP Authentication. This can be achieved via the ",(0,r.kt)("a",{parentName:"p",href:"../../../docs/server/configuration"},"configuration file")," while setting up some configuration as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: http\noptions:\n  endpointUrl: https://someurl.com/check-token\n  permittedStatusCodes: [ 200 ]\n  requestTimeout: 2000\n")),(0,r.kt)("p",null,"This configuration instructs the deepstream server to make a POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://someurl.com/check-token")," every time a client tries to connect. Only if it receives a response with an HTTP status code of 200 in less than 2 seconds it will allow the connection."),(0,r.kt)("h2",{id:"deepstream-login"},"deepstream Login"),(0,r.kt)("p",null,"From the deepstream client we can now call ",(0,r.kt)("inlineCode",{parentName:"p"},"client.login()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const deepstream = require( '@deepstream/client');\nconst client = new DeepstreamClient('localhost:6020')\n  // Login method\n  .login( null, ( success, clientData ) => {\n\n  })\n  .on( 'error', ( error ) => {\n    console.error(error);\n  });\n")),(0,r.kt)("p",null,"Rather than user-credentials we just pass ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to this method - the information we're interested in, the JWT will be part of the header-data that's sent along with the authentication request as ",(0,r.kt)("inlineCode",{parentName:"p"},"req.body.connectionData.headers.cookie"),"."),(0,r.kt)("p",null,"Your next login attempt will produce the following log:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Login log",src:n(7194).Z})),(0,r.kt)("h2",{id:"http-auth-call"},"HTTP Auth Call"),(0,r.kt)("p",null,"Upon calling ",(0,r.kt)("inlineCode",{parentName:"p"},"ds.login()")," deepstream posts the connection data to the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"/check-token")," route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"//. . .\nconst jwt = require('jsonwebtoken');\n\napp.post('/check-token', function(req, res) {\n  const token = getCookie(req.body.connectionData.headers.cookie, 'access_token');\n  jwt.verify(token, 'abrakadabra', function(err, decoded) {\n      if (err) {\n        res.status(403).send('Failed to authenticate token.' );\n      } else {\n        // if everything is good, save to request for use in other routes\n        res.status(200).json({\n          username: decoded.username\n        });\n      }\n    });\n});\n\nfunction getCookie( src, name ) {\n  const value = \"; \" + src;\n  const parts = value.split(\"; \" + name + \"=\");\n  if (parts.length == 2) return parts.pop().split(\";\").shift();\n}\n")),(0,r.kt)("p",null,"Again we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonwebtoken")," module to verify the token and decode the string into a JavaScript object containing the username which we pass back to deepstream to identify the connection."),(0,r.kt)("h2",{id:"protecting-routes"},"Protecting Routes"),(0,r.kt)("p",null,"This covers the general JWT authentication flow - however using JWT we can also prevent any unauthenticated access to our application at route ",(0,r.kt)("inlineCode",{parentName:"p"},"/")),(0,r.kt)("p",null,"Express makes this easy by adding a middleware function that checks for the existence of a valid JWT before proceeding to process a request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const jwt = require('jsonwebtoken');\nconst authMiddleware = function(req, res, next) {\n\n\n  const token = req.cookies.access_token;\n\n  // decode token\n  if (token) {\n    // verifies secret and checks exp\n    jwt.verify(token, 'abrakadabra', function(err, decoded) {\n      if (err) {\n        return res.json({ success: false, message: 'Failed to authenticate token.' });\n      } else {\n        // if everything is good, save to request for use in other routes\n        req.decoded = decoded;\n        next();\n      }\n    });\n\n  } else {\n\n    // if there is no token\n    // return an error\n    return res.status(403).redirect('/login');\n\n  }\n}\n\n// Protect route with middleware\napp.post('/protected', authMiddleware, routeHandler);\n")))}d.isMDXComponent=!0},2402:function(e,t){t.Z="data:image/png;base64,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"},7194:function(e,t,n){t.Z=n.p+"assets/images/login-log-bff09c20a418758247d21a111c6eb090.png"},3579:function(e,t){t.Z="data:image/png;base64,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"}}]);
"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[1477],{10:function(e){e.exports=JSON.parse("{\"blogPosts\":[{\"id\":\"/2019/11/04/realtime-search\",\"metadata\":{\"permalink\":\"/blog/2019/11/04/realtime-search\",\"editUrl\":\"https://github.com/deepstreamIO/deepstream.io-website/blog/2019-11-04-realtime-search.md\",\"source\":\"@site/blog/2019-11-04-realtime-search.md\",\"title\":\"Realtime Search\",\"description\":\"The Realtime Search Evolution\",\"date\":\"2019-11-04T00:00:00.000Z\",\"formattedDate\":\"November 4, 2019\",\"tags\":[],\"readingTime\":9.1,\"truncated\":false,\"authors\":[]},\"content\":\"Realtime Search is one of the most powerful realtime concepts out there, and have been slowly been finding themselves in modern applications, regardless of the underlying technology backing it.\\n\\nWe are proud to announce a new realtime-search process that runs next to deepstream, allowing users to create realtime functionality with barely any code, and with an extensible plugin architecture to support more databases in the future!\\n\\nWe'll begin our journey from a static HTTP request and end with the functionality provided\\nby deepstream and the realtime-search component. You can also skip to the [last section](#realtime-search-finally) if this is just too long!\\n\\n### Important\\n\\nThe code presented in these examples is pseudo code which I haven't run, and have some helper functions\\nto minimize eye strain\\n\\n- `doQuery`\\n\\nIs what you would call to run a single query against your database, which would return the results as an array\\n\\n- `makeRequest`\\n\\nIs what you would call to make a HTTP request in your application, like a GET or POST\\n\\n- `doSomethingWithData`\\n\\nWhat your application would call once your data is loaded\\n\\n- `database.table('users').on`\\n\\nIs similar to mongodb changefeeds, which tells you whenever a table has been updated\\n\\n### HTTP Requests\\n\\nThe most common technique is to perform a search is a HTTP GET with search parameters / POST with a body. It scales amazingly well with any deployment platform out there, caches results and just works.\\n\\nService:\\n```javascript\\nserver.on('/search', async (req, res) => {\\n    const results = await doQuery(req)\\n    res.send(results)\\n})\\n```\\n\\nClient:\\n```javascript\\nsetInterval (() => {\\n    const result = await makeRequest('/search')\\n    doSomethingWithData(result)\\n}, 1000)\\n```\\n\\nIf you want to make your application update without having to refresh, you can just rerequest the data, either when a user\\nperforms a refresh action or on a set interval.\\n\\n### Push Notifications / Events\\n\\nOnce you have an application that can load data-dynamically, you can go one step further and add an extremely simple push layer to allow your application to be told whenever data needs to be refreshed. This allows you to continue using all the benefits of a normal HTTP application (scalability and so forth) while also getting told when to update to\\nprovide quicker updates to the end user and ideally reduce the amount of polling.\\n\\nService:\\n```javascript\\nserver.on('/search', async (req, res) => {\\n    const results = await doQuery()\\n    res.send(results)\\n})\\n\\n// Emit an event whenever the client changes (pseduo code based on changelogs)\\ndatabase.table('users').on('change', () => {\\n  deepstream.event.emit('users-changed')\\n})\\n```\\n\\nClient:\\n```javascript\\n// Subscribe to the event on the client and redo query\\ndeepstream.event.subscribe('users-changed', doSomethingWithData)\\n// Do query initially to get results\\nconst results = await makeRequest('/search')\\ndoSomethingWithData(results)\\n```\\n\\nPretty useful right? This means our users no longer have to request data manually, wait for a certain timeout, extensively  poll your systems (which does get a little expensive with large deployments and cloud providers) and you can still lean back on using your normal HTTP stack for development.\\n\\n### Static Result Notifications\\n\\nBlindly getting told that a table changed however is still an extremely coarse action, specially the larger your table gets. You would most likely want to add some form of smarter caching so that users only get told if they really care about something.\\n\\nLuckily if you have static application queries this is actually quite easy!\\n\\nService:\\n```javascript\\nserver.on('/static-search', async (req, res) => {\\n    const results = await doQuery()\\n    res.send(results)\\n})\\n\\n// Emit an event whenever the client changes (pseduo code based on changelogs)\\nconst specificQueryUpdates = () => {\\n    let previousResults\\n    database.table('users').on('change', await () => {\\n        const results = await doQuery()\\n        if (!deepEquals(previousResults, results)) {\\n            deepstream.event.emit('specific-query-changed', results)\\n        }\\n        previousResults = results\\n    })\\n}\\n```\\n\\nClient:\\n```javascript\\n// Subscribe to an event on the client\\ndeepstream.event.subscribe('specific-query-changed', doSomethingWithData)\\n// We still need to get the data initially though, as events are only triggered\\n// on changes\\nconst results = await makeRequest('/static-search')\\ndoSomethingWithData(results)\\n```\\n\\nThis means we now have the ability to subscribe to a specific query event and just receive updates. The advantage\\nof this is that if you have a thousand users connected, the query is still only run once and the result is sent to\\nall of them, which makes it much more efficient. The disadvantages so far is the static nature of the event means we can't really do our own custom queries, and that we have to do the event initially which means we have to maintain two different types of APIs. Not cool.\\n\\n### Dynamic Result Notifications\\n\\nSo how can we let the backend know to setup an endpoint for a custom query, maintain it\\nduring the queries lifetime and then when it's no longer needed discard it? \ud83e\udd14 There are different solutions, but the one we see most often is:\\n\\n- Request a query by telling the client to start\\n- Get updates\\n- Discard it when your done\\n\\nIn a classical event system this would usually be done as follows (for this example you need to have sticky sessions available in order for the close event to go the same process as the open one)\\n\\nService:\\n```javascript\\nconst searches = new Map()\\n\\nserver.post('/start-search', async (req, res) => {\\n    // Hash the query so that you can use it as a lookup key\\n    const searchReference = hashSearch(req.body)\\n    let search = searches.has(searchReference)\\n\\n    // If the query already exists, someone already started it, so\\n    // bump up the usage number and return the last results\\n    if (searches.has(searchReference)) {\\n        const search = searches.get(searchReference)\\n        search.usage = search.usage + 1\\n        return res.send({\\n            reference: search.reference,\\n            data: search.previousResult\\n        })\\n    }\\n\\n    // Setup the cursor\\n    const cursor = database.table(req.body.table).on('change', await () => {\\n        const results = await doQuery(req.body.query)\\n        if (!deepEquals(search.previousResults, results)) {\\n            deepstream.event.emit(searchReference, results)\\n        }\\n        search.previousResults = results\\n    })\\n\\n    // Set the search so new requests won't setup another cursor\\n    searches.set(searchReference, {\\n        usage: 1,\\n        reference: searchReference,\\n        cursor\\n    })\\n\\n    // Do the actual initial search to avoid it having to be done on the\\n    // client side\\n    const results = await doQuery()\\n\\n    // Send the response\\n    res.send({\\n        reference: search.reference,\\n        data: results\\n    })\\n})\\n\\nserver.post('/stop-search', async (req, res) => {\\n    const { reference } = req.body\\n    const search = searches.get(references)\\n    if (search) {\\n        search.usages = search.usages - 1\\n        if (search.usages === 0) {\\n            searches.del(reference)\\n            search.cursor.stop()\\n        }\\n        return res.end()\\n    }\\n    res.status(400).end()\\n})\\n```\\n\\nClient:\\n```javascript\\n// Creating the search\\nconst { reference, data } = makeRequest('/start-search', { query: [['age','gt', '20']], table: 'users' })\\ndeepstream.event.subscribe(reference, doSomethingWithData)\\ndoSomethingWithData(data)\\n\\n// Ending the search\\ndeepstream.event.unsubscribe(reference)\\nmakeRequest('/stop-search', { reference })\\n```\\n\\nOkay so that's alot of code. Probably a good place to stop before writing an actual service. Let us break down the pros and cons of this approach (ignoring potential bugs due to pseudo nature!):\\n\\n#### Pros\\n\\n- Minimal amount of cursors open\\n- Basic lifecycle support means that if the clients always cleaned up after themselves system can go back to\\noriginal state\\n- We can proxy multiple realtime search queries easily. Not very useful for infinite permutations (like text searches) but if your search is limited or you have built in default searches (like pagination or limits) it would scale well\\n\\n#### Cons\\n\\n- If you want to scale you'll need to attach to a third party cache/database (the norm nowadays for distributed/scaling systems)\\n- You can call start-search / end-search multiple times and it would get the state out of sync\\n- Most importantly, since its not really tied into the session if your connection drops or you force close your client\\nstate is incorrect\\n\\n### Dynamic Result Notifications Using Deepstream\\n\\nRight so now we are going to rewrite the above code using deepstream APIs. I'll be using `listening`, a powerful API that allows deepstream to notify clients/services whenever a subscription has been added or removed to the system, which removes most of the boiler plate management. I'll also be using RPCs and Records, mainly because it removes us having to use HTTP and automatically saves things in the cache. It's also 95% of the way to explaining how the realtime-search was built.\\n\\nService:\\n```javascript\\ndeepstream.rpc.provide('realtime_search', async (data, response) => {\\n    const hash = hashSearch(data)\\n    try {\\n        await deepstream.record.set(hash, data)\\n        response.send()\\n    } catch (e) {\\n        response.error('Error creating a hash')\\n    }\\n})\\n\\ndeepstream.record.listen('realtime_search/list_.*', async (name, response) => {\\n    const hash = /realtime_search\\\\/list_(.*)/.match(name)[0]\\n    const data = await deepstream.record.snapshot(hash)\\n\\n    const cursor = database.table(data.table).on('change', async () => {\\n        const results = await doQuery(data.query)\\n        const previousResults = await deepstream.record.snapshot(name)\\n        if (!deepEquals(previousResults, results)) {\\n            deepstream.record.setData(name, results)\\n        }\\n    })\\n\\n    const results = await doQuery()\\n    deepstream.record.setData(name, results)\\n\\n    response.onStop(() => cursor.stop())\\n    response.accept()\\n})\\n```\\n\\nClient:\\n```javascript\\n// Creating the search\\nconst hash = await client.rpc.make('realtime_search', { query: [['age','gt', '20']], table: 'users' })\\nconst record = client.record.getRecord(`realtime_search/list_${hash}`)\\nrecord.subscribe((results) => {\\n    // do something with results\\n}, true)\\n\\n// Ending the search\\nrecord.discard()\\n```\\n\\nLet us see what cons this managed to resolve:\\n\\n- Scaling\\n\\nListening on deepstream uses an active publisher pattern. This means only one service in a cluster can ever\\nbe responsible for a subscription. This means you can scale your services and servers and the load will automatically be\\ndistributed against them.\\n\\n- Cache/Storage\\n\\nUsing deepstream records we automatically have our data saved to cache. This means by using it we get the benefit\\nof distributed state out of the box, so if another user subscribes to the same record the micro service won't even need to be told about it\\n\\n- State\\n\\nAll the connection state and logic is handled by deepstream, which means if your client goes down, deepstream will\\nclean up all your subscriptions on your behalf. This allows the platform to continue running optimally. So state getting out of sync isn't your concern\\n\\n*Hint*\\n\\nThe listen pattern can be used for so much more than just this usecase!\\n\\n### Realtime Search, Finally!\\n\\nOkay I really hope you made it this far! Let's look at how realtime-search APIs work.\\n\\nOn the server we don't need to actually write any server code, you just have to run the realtime-search service. You can run it via docker [deepstreamio/realtime-search](https://hub.docker.com/r/deepstreamio/realtime-search), but it's also shipped via node under the [@deepstream/realtime-search](https://www.npmjs.com/package/@deepstream/realtime-search) package.\\n\\nWe will be following the [example found in the github repo](https://github.com/deepstreamIO/deepstream.io-realtime-search/tree/master/example). This will use docker compose, which is useful as we need to setup a mongodb replica as well as run deepstream and the realtime-search service for us.\\n\\n```bash\\ngit clone https://github.com/deepstreamIO/deepstream.io-realtime-search.git\\ncd deepstream.io-realtime-search/example\\ndocker-compose up\\n```\\n\\nGiving us the output:\\n\\n```bash\\n11:53:13 AM | Initializing MongoDB Connection\\n11:53:13 AM | Connected successfully to mongodb database deepstream\\n11:53:13 AM | Initializing Deepstream connection\\n11:53:13 AM | Successfully logged in to deepstream\\n11:53:13 AM | Providing rpc method \\\"realtime_search\\\"\\n11:53:13 AM | listening for realtime_search/list_.*\\n11:53:13 AM | realtime search provider ready\\n```\\n\\nAnd then on the client side you would just need to do the same thing we mentioned earlier:\\n\\nClient:\\n`embed:server/realtime-search/example/realtime-search-client.js`\\n\\nAnd that's it! As you can see getting realtime-results couldn't be easier.\\n\\nFor a front-end example, more config options and permissions please checkout the [realtime-search guide](../docs/20-guides/realtime-search/00-intro.md).\\n\\nThanks for reading!\"}]}")}}]);
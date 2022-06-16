/* pg for postgresql and pg-hstore for 
converting data into the postgresql hstore format.
*/

/* in server.js we import the modules express is for rest Apis
- body-parserr helps to parse the request and create the req.body object
- cors provides Express middleware to enable CORS with various options.
*/

// Created an express app with express()

// We then added body-parser and cors middleware using the app.use() method

/* Noticed how we set the origin at 8000?
- We then defined the GET route with most basic route "/" 
- We have the app listen on port 8001 for any requests coming in. */
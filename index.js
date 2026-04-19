const express = require('express');     // express: our server | npm install express
const mongoose = require('mongoose');   // for atlas database  | npm install mongoose
const apiRoutes = require('./routes/api');
const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

const dbURI = "mongodb+srv://atithadhikari5:iB2BxR8MpJrYU33f@forex.zltlkf1.mongodb.net/?appName=Forex";


/**
 * Connect to MongoDB
 */
mongoose.connect(dbURI)
    .then(() => {
        console.log("Connected to Database successfully!");

        /**
         * Listen to a port
         */
        app.listen(3000, () => {
            console.log("Server is running on http://localhost:3000");
        });
    })
    .catch((err) => {
        console.log("Failed to connect to the Database: ", err);
    });


/**
 * Routes
 */

app.get('/', (request, response) => {
    response.send("Hello World!");
});


/** 

app.use(express.json()); // So Express know you're using JSON

// POST a JSON object and get it back
app.post('/demo-object', (request, response) => {

  const body = request.body;

  return body;
});

// GET with the id and get it back
app.get('/demo-object/:id', (request, response) => {
  
  const params = request.params;

  return response.json(params);
});

// GET with query in the URI and get it back
app.get('/demo-object', (request, response) => {
  
  const params = request.query;

  return response.json(query);
});

*/
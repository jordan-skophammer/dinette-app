const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const morgan = require('morgan')
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(routes)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dinette-app');

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

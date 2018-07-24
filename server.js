const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const seedDB = require('./seedDB');

const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cookie-parser')());


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dinette-app');
mongoose.Promise = Promise;
const db = mongoose.connection(MONGODB_URI);

// handle mongo error
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('connected to the database collection "dinette-app"'));

// passport
app.use(passport.initialize());
app.use(passport.session());

// use sessions for tracking logins
app.use(session({
  secret: 'sdkfsiogioe8903274ht89rhgn439',
  // secret: process.env.APP_SECRET || 'this is the default passphrase',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db,
  }),
}));

app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

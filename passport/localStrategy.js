const User = require('../models/user');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: 'userName',
    passwordField: 'password',
  },
  function (userName, password, done) {
    // bCrypt hashed password check function
    const isValidPassword = function(enteredPass, userPass) {
      console.log('checking password');
      return bcrypt.compareSync(enteredPass, userPass);
    };

    User.findOne({ 'local.userName': userName }, (err, userMatch) => {
      if (err) {
        console.log(err);
        return done(err);
      }
      if (!userMatch) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (!isValidPassword(password, userMatch.local.password)) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, userMatch);
    });
  },
);

module.exports = strategy;

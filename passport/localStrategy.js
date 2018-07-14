const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: 'userName',
  },
  function (userName, password, done) {
    User.findOne({ 'local.userName': userName }, (err, userMatch) => {
      if (err) {
        return done(err);
      }
      if (!userMatch) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (!userMatch.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, userMatch);
    });
  },
);

module.exports = strategy;
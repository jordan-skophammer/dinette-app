const passport = require('passport');
const LocalStrategy = require('./localStrategy');
// const GoogleStratgey = require('./googleStrategy');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  console.log('Serialize');
  console.log(user)
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  console.log('Deserialize');
  User.findById(
    id,
    (err, user) => {
      console.log('======= DESERILAIZE USER CALLED ======')
      console.log(user);
      console.log('--------------');
      done(err, user);
    },
  );
});

// ==== Register Strategies ====
passport.use('local', LocalStrategy);
// passport.use(GoogleStratgey);

module.exports = passport;

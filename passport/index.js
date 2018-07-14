const passport = require('passport');
const LocalStrategy = require('./localStrategy');
// const GoogleStratgey = require('./googleStrategy');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  console.log('Serialize');
  // console.log(user) // the whole raw user object!
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  console.log('Deserialize');
  User.findOne(
    { _id: id },
    'local.userName firstName lastName zipcode',
    (err, user) => {
      console.log('======= DESERILAIZE USER CALLED ======')
      console.log(user);
      console.log('--------------');
      done(null, user);
    },
  );
});

// ==== Register Strategies ====
passport.use(LocalStrategy);
// passport.use(GoogleStratgey);

module.exports = passport;

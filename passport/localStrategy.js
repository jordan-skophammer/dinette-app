// const User = require('../models/user');
// // const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const strategy = new LocalStrategy(
//   {
//     usernameField: 'local.userName',
//     passwordField: 'local.password',
//   },
//   function (userName, password, done) {
//     console.log("==========Passport Local Strategy==========");
    
//     User.findOne({ 'local.userName': userName }, (err, userMatch) => {
//       if (err) {
//         return done(err);
//       }
//       if (!userMatch) {
//         return done(null, false, { message: 'Incorrect username' });
//       }
//       if (!userMatch.checkPassword(password)) {
//         return done(null, false, { message: 'Incorrect password' });
//       }
//       return done(null, userMatch);
//     });
//   },
// );

// module.exports = LocalStrategy;

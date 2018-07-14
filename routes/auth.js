// const mongoose = require('mongoose');
// const passport = require('passport');
const router = require("express").Router();
const User = require('../models/user');
// require('../passport')(passport);

// router.post('/login', (req, res, next) => {
//   console.log(req.body)
//   console.log('================')
//   next()
// },
// passport.authenticate('local'), (req, res) => {
//   console.log('POST to /login')
//   const user = JSON.parse(JSON.stringify(req.user)); // hack
//   const cleanUser = Object.assign({}, user);
//   if (cleanUser.local) {
//     console.log(`Deleting ${cleanUser.local.password}`)
//     delete cleanUser.local.password;
//   }
//   res.json({ user: cleanUser });
// },
// );

router.post('/signup', (req, res) => {
  console.log('=====Got to the Signup post route=====');
  
  const {
    userName, password, firstName, lastName, zipcode,
  } = req.body;
  // ADD VALIDATION
  User.findOne({ 'local.userName': userName }, (err, userMatch) => {
    if (userMatch) {
      return res.json({
        error: `Sorry, already a user with the username: ${userName}`,
      });
    }
    const newUser = new User({
      'local.userName': userName,
      'local.password': password,
      firstName: firstName,
      lastName: lastName,
      zipcode: zipcode,
    });
    console.log(newUser);
    newUser.save((err, savedUser) => {
      if (err) return res.json(err);
      console.log("user created");
      return res.json(savedUser);
    });
  });
});

module.exports = router;

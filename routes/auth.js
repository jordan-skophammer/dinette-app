// const mongoose = require('mongoose');
// const passport = require('passport');
const passport = require('../passport/index');
const router = require("express").Router();

const User = require('../models/user');

function authenticationMiddleware(req, res, next) {
  console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport.user)}`);
  if (req.isAuthenticated()) {
    return next();
  }
  // res.redirect('/login');
}

router.post('/signup', (req, res) => {
  const {
    userName, password, firstName, lastName, zipcode,
  } = req.body;
  // ADD VALIDATION if necessary
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

    newUser.save((err, newUser) => {
      if (err) return res.json(err);
      console.log('Saving new user');
      res.json({
        success: true,
        msg: 'Successful created new user.'
      });
    });
  });
});

router.post(
  '/login',
  (req, res, next) => {
    next();
  },
  passport.authenticate(
    'local',
    {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
    },
  ),
);

router.post('/logout', (req, res) => {
  req.session.destroy(err => res.redirect('/'))
});

router.get('/user', authenticationMiddleware, (req, res) => {
  // let userName = req.params;
  res.redirect('/user');
});

module.exports = router;

const router = require("express").Router();
const axios = require ("axios");

const passport = require('../../passport/index');

function checkUser(req, res, next) {
  console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport.user)}`);
  if (req.isAuthenticated()) {
    return next();
  }
  // res.redirect('/login');
}

// router.get('/:id', (req, res) => {

// });

router.get('/:id', checkUser, (req, res) => {
  let userName = req.params;
  if (req.user) {
    return res.json({ user: req.user })
  } else {
    return res.json({ user: null })
  }
  res.redirect('/user');
});


// console.log("routes > user is executing")

module.exports = router;

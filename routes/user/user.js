const router = require("express").Router();
const axios = require ("axios");

const passport = require('../../passport/index');


router.get('/id', (req, res) => {
  console.log('checking user and sending to client')
  console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport.user)}`);
  res.send(req.session.passport.user);
});

module.exports = router;

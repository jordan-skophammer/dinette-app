const router = require("express").Router();
const User = require('../../models/user');


router.get('/id', function (req, res) {
  if (req.session.passport !== undefined) {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport.user)}`);
    User.findById(req.session.passport.user, '-local.password', (err, user) => {
      if (err) console.log(err);
      console.log(user);
      return user;
    })
      .then((userData) => {
        res.send(userData);
      });
  } else {
    // const noUser = "There is no user";
    res.send(null);
  }
});

module.exports = router;

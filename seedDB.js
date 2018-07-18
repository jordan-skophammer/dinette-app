const router = require("express").Router();

const User = require('./models/user');

const saveDefaultUser = () => {

  User.findOne({ 'local.userName': 'user' }, (err, user) => {
    if (user) {
      return user;
    }
    const newUser = new User({
      'local.userName': 'user',
      'local.password': 'password',
      firstName: 'Phil',
      lastName: 'the Dog',
      zipcode: 55104,
    });

    newUser.save((err, res) => {
      if (err) return res.json(err);
      res.json({
        success: true,
        msg: 'Successful created new user.'
      });
    });
  });

}

saveDefaultUser();
// module.exports = saveDefaultUser();

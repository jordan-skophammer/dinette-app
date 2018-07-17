const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const userSchema = new Schema({
  local: {
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  // google: {
  //   googleID: { type: String, required: false },
  // },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  zipcode: { type: Number, required: true },
  currentVoteURL: { type: String, required: false },
  favorites: [{ type: String, required: false }],
});

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.local.password) {
    console.log('=======NO PASSWORD PROVIDED=======');
    next();
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.local.password, salt);
  this.local.password = hash;
  next();

});

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const userSchema = new Schema({
  local: {
    userName: { type: String, required: false, unique: true },
    password: { type: String, required: false },
  },
  // google: {
  //   googleID: { type: String, required: false },
  // },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  zipcode: { type: Number, required: true },
  currentVoteURL: { type: String },
});

// Define schema methods
userSchema.methods = {
  checkPassword: inputPassword => bcrypt.compareSync(inputPassword, this.local.password),
};

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  console.log(`password entered is ${this.local.password}`);
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

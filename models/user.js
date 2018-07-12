const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const userSchema = new Schema({
  local: {
    userName: { type: String, required: false, unique: true },
    password: { type: String, required: false },
    passwordConfirm: { type: String, required: false },
  },
  google: {
    googleID: { type: String, required: false },
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  zipCode: { type: Number, min: 5, max: 5, required: true },
  currentVoteURL: { type: String },
});

// Define schema methods
userSchema.methods = {
  checkPassword: inputPassword => bcrypt.compareSync(inputPassword, this.local.password),
  hashPassword: plainTextPassword => bcrypt.hashSync(plainTextPassword, 10),
};

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.local.password) {
    console.log('=======NO PASSWORD PROVIDED=======');
    next();
  } else {
    this.local.password = this.hashPassword(this.local.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

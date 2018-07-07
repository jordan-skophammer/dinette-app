const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: Date, required: true},
  zipCode: {type: Number, min: 5, max:5, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
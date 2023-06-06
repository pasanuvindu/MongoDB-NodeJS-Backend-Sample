//user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registerToSystem: {
    type: String,
    required: true,
  },
  registeredDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);

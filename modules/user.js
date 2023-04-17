const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    displayName: String,
    username: String,
    password: String,
    emailAddress: String
  
  })
  module.exports = mongoose.model('User', userSchema);

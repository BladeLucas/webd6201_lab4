const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    emailAddress: String
  })
  
  module.exports = mongoose.model('Contact',contactSchema);

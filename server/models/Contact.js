// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },  // ✅ unique email
  phone: { type: String, required: true, unique: true },  // ✅ unique phone
  message: { type: String }
});

module.exports = mongoose.model('Contact', contactSchema);

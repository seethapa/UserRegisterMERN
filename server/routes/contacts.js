// routes/contacts.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contact', async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;
    const newContact = new Contact({ fullName, email, phone, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Contact saved.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error',error:err.message });
  }
});

module.exports = router;

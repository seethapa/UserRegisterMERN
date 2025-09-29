// routes/contacts.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST /contact
router.post('/contact', async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

// ✅ Check for existing email or phone
     const existing = await Contact.findOne({ $or: [{ email }, { phone }] });
        if (existing) {
          return res.status(400).json({
            success: false,
            message: existing.email === email
              ? 'Email already exists'
              : 'Phone number already exists'
          });
        }


    // ✅ Save contact in MongoDB
    const newContact = new Contact({ fullName, email, phone, message });
    await newContact.save();

    // ✅ Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or SMTP: { host, port, secure }
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });


    // ✅ Email to Admin
    const adminMailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // fallback
      subject: '📩 New Contact Form Submission',
      text: `
        You have a new contact form submission:

        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(adminMailOptions);


 // ✅ (Optional) Confirmation Email to User
 const userMailOptions = {
   from: `"45 Days Job Ready Cloud Engineer Coaching" <${process.env.EMAIL_USER}>`,
   to: email,
   subject: '✅ Thanks for contacting us!',
   text: `Hello ${fullName},

 We have received your message and will get back to you soon.

 Best regards,
 Samuel Asirvatham R

 Contact Me Through:
 LinkedIn: https://www.linkedin.com/in/samuel-asirvatham
 WhatsApp: https://wa.me/9043570992
 `,
   html: `
     <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
       <p>Hello <strong>${fullName}</strong>,</p>

       <p>We have received your message and will get back to you soon.</p>

       <p style="margin-top: 20px;">Best regards,</p>
       <p>
         <strong>Samuel Asirvatham R</strong>
       </p>

       <p style="margin-top: 10px;">Contact Me Through:</p>
       <p>
         <a href="https://www.linkedin.com/in/samuel-asirvatham" target="_blank" style="margin-right: 10px;">
           <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="24" height="24" style="vertical-align: middle; border: none;" />
         </a>
         <a href="https://wa.me/9043570992" target="_blank">
           <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="24" height="24" style="vertical-align: middle; border: none;" />
         </a>
       </p>
     </div>
   `
 };


    await transporter.sendMail(userMailOptions);

    res.status(201).json({ success: true, message: 'Contact saved & email sent.' });
  } catch (err) {
    console.error('Error in /contact:', err);
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

module.exports = router;

// ContactForm.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
const { backendUrl } = useContext(AppContext);
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Submitting...');

  // Fallback in case backendUrl is undefined
  const url = backendUrl ? `${backendUrl}/contact` : 'http://localhost:4001/api/contact';

  try {
    const response = await axios.post(url, formData);

    if (response.data?.success) {
      setStatus('Contact saved successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      setStatus('Error saving contact.');
    }
  } catch (error) {
    console.error('POST request failed:', error.message || error);
    setStatus('Server error. Try again later.');
  }
};


  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;

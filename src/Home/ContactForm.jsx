import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to a server or email service here
    console.log('Form submitted:', formData);
    alert('Message sent!');
    // Reset form (optional)
    setFormData({ name: '', email: '', whatsapp: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 rounded shadow">
      <label className="block mb-2 font-semibold">Name *</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 font-semibold">Email *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 font-semibold">WhatsApp Number *</label>
      <input
        type="tel"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        placeholder="+1 234 567 8901"
        required
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 font-semibold">Message *</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
        className="w-full mb-4 p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

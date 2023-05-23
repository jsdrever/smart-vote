import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
  
    const handleNameChange = (event) => {
      setName(event.target.value);
      setErrors({ ...errors, name: null });
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setErrors({ ...errors, email: null });
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
      setErrors({ ...errors, message: null });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const errors = validate();
      if (Object.keys(errors).length === 0) {
        // submit form
      } else {
        setErrors(errors);
      }
    };
  
    const validate = () => {
      const errors = {};
      if (!name.trim()) {
        errors.name = 'Name is required';
      }
      if (!email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = 'Invalid email address';
      }
      if (!message.trim()) {
        errors.message = 'Message is required';
      }
      return errors;
    };
  
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-300">Contact Us!</h1>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-500 font-bold mb-2">Name:</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-500 font-bold mb-2">Email:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="mb-6">
            <label htmlFor="message" className="block text-gray-500 font-bold mb-2">Message:</label>
            <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && <span className="text-red-500">{errors.message}</span>}
        </div>
        <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            Submit
        </button>
        </form>
    );
  }
  
  export default ContactForm;
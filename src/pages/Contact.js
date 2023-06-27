// Contains a contact form with fields for name, email, and a message.

import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("All fields are required");
      return;
    }

    const emailReg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailReg.test(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
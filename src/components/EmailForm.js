import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="emailInput">Email:</label>
      <input
        type="email"
        id="emailInput"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        required 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;

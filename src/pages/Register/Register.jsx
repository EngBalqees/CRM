import React, { useState } from 'react';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faLock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // معالجة تسجيل البيانات هنا
    console.log('Form Data Submitted', formData);
  };

  return (
    <div className="registration-container">
      <div className="form-section">
        <div className="header">
          <h2>Sign Up</h2>
          <p>Secure your communication with our platform!</p>
        </div>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Sign Up</button>

          <div className="social-login">
            <p>Or sign up with</p>
          
          </div>
        </form>
      </div>
      
      <div className="graphic-section">
        <div className="info-box">
          <p>Your data, your rules.</p>
          <div className="graphic">
            <FontAwesomeIcon icon={faLock} className="icon data-icon" />
          </div>
        </div>
        <div className="info-box">
          <p>Inbox: 176.18</p>
          <div className="graphic">
            <FontAwesomeIcon icon={faEnvelope} className="icon inbox-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

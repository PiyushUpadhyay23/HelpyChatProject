import React, { useState } from 'react';
import '../../CSS/Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    agreedToTerms: false
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Replace this with your own logic for submitting the form
  }

  return (
    <div className="signup-container">
      <div className="signup-image"></div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleInputChange} required />
            <label htmlFor="agreedToTerms">I agree to the <Link to="/terms">Terms and Privacy Policy</Link></label>
          </div>
          <button type="submit">Submit</button>
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

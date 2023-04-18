import React, { useState } from 'react';
import '../../CSS/Contact.css';
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isRobot, setIsRobot] = useState(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePurposeChange = (event) => setPurpose(event.target.value);
  const handleSubjectChange = (event) => setSubject(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);
  const handleRobotChange = (event) => setIsRobot(event.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  }

  return (
    
    <form onSubmit={handleSubmit} className="contact-form">
      
      
      <h2>Contact Us</h2>
      <img src='https://st2.depositphotos.com/1265075/7581/i/600/depositphotos_75818865-stock-photo-web-contact-us-concept.jpg'alt="Contact us" />
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <label>
        Purpose:
        <select value={purpose} onChange={handlePurposeChange} required>
          <option value="">Please select a purpose</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Bugs Report">Bugs Report</option>
          <option value="Customer Support">Customer Support</option>
        </select>
      </label>
      <label>
        Subject:
        <input type="text" value={subject} onChange={handleSubjectChange} required />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={handleMessageChange} required></textarea>
      </label>
      <label>
        <input type="checkbox" checked={isRobot} onChange={handleRobotChange} required />
        I'm not a robot
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>ANNA PAVAN</h3>
          <p>Disciplane</p>
          <p>Consistent</p>
          <p>Confident</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Main Street, Hyderabad</p>
          <p>Email: annapavan@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

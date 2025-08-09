import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section help">
        <h4>Help</h4>
        <p>Need assistance? Visit our FAQ or reach out to us.</p>
      </div>
      <div className="footer-section contact">
        <h4>Contact Us</h4>
        <p>
          <strong>Mobile:</strong> +1-234-567-890 <br />
          <strong>Email:</strong> <a href="mailto:support@myapplication.com">support@myapplication.com</a>
        </p>
      </div>
      <div className="footer-section social">
        <h4>Follow Us</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |{' '}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="footer-section copyright">
        <p>
          <span title="My Application">© 2024 My Application</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

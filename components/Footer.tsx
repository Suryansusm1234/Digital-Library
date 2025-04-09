import React from 'react';
import Link from 'next/link';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link href="/library-hours">Library Hours</Link>
              <Link href="/study-rooms">Study Rooms</Link>
              <Link href="/digital-resources">Digital Resources</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="footer-links">
              <a href="mailto:library@etech.edu">Email: library@etech.edu</a>
              <a href="tel:5551234567">Phone: (555) 123-4567</a>
              <Link href="/chat">Chat with a Librarian</Link>
              <Link href="/feedback">Feedback Form</Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Etech Digital Library. All rights reserved. | <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiMail, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import '@/styles/contact.css';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">We&apos;re here to help and answer any questions you might have</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div className="contact-info">
                  <h2>Email Us</h2>
                  <a href="mailto:codecrewetech24@gmail.com">
                    codecrewetech24@gmail.com
                  </a>
                  <p>We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <div className="contact-info">
                  <h2>Call Us</h2>
                  <a href="tel:+916370183009">+91 6370183009</a>
                  <p>Available weekdays 9AM - 6PM</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div className="contact-info">
                  <h2>Visit Us</h2>
                  <address>
                    Etech Residential Degree College<br />
                    Dhenkanal, Odisha<br />
                    India - 759001
                  </address>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiClock />
                </div>
                <div className="contact-info">
                  <h2>Library Hours</h2>
                  <p>Monday - Saturday</p>
                  <p>9:00 AM - 5:00 PM</p>
                  <p>Closed on Sundays & Holidays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FiBook, FiFileText, FiClock } from 'react-icons/fi';
import '@/styles/about.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-main">
      <section className="hero-section">
  <div className="hero-gradient"></div>
  <div className="hero-glow"></div>
  <div className="container">
    <div className="hero-content">
      <h1 className="hero-title">
        <span className="hero-title-text">Etech digital Library</span>
      </h1>
      <p className="hero-subtitle">
        <span className="hero-subtitle-text">
          Transforming education through digital innovation and accessibility
        </span>
      </p>
    </div>
  </div>
</section>

        <section className="mission-section">
          <div className="container">
            <div className="mission-grid">
              <div className="mission-content">
                <div className="mission-title-container">
                  <h2 className="mission-title">Our Mission</h2>
                  <div className="mission-underline"></div>
                </div>
                <p className="mission-text">
                  Empowering students with seamless access to educational resources through 
                  cutting-edge digital solutions and innovative learning experiences.
                </p>
                <ul className="mission-list">
                  {[
                    "Smart resource categorization",
                    "Instant access to study materials",
                    "Modern learning interface",
                    "Collaborative knowledge sharing"
                  ].map((item, index) => (
                    <li key={index} className="mission-item">
                      <span className="mission-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mission-image-container">
                <div className="mission-image-overlay"></div>
                <Image
                  src="/etech logo new.png"
                  alt="Digital Library"
                  fill
                  className="mission-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2 className="features-title">What We Offer</h2>
            <div className="features-grid">
              {[
                {
                  icon: <FiBook />,
                  title: "Digital Books",
                  description: "Access to academic textbooks and reference materials"
                },
                {
                  icon: <FiFileText />,
                  title: "Previous Year Papers",
                  description: "Archive of past examination papers"
                },
                {
                  icon: <FiClock />,
                  title: "Study Notes",
                  description: "Curated study materials and lecture notes"
                }
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-gradient"></div>
                  <div className="feature-content">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container">
            <div className="team-content">
              <h2 className="team-title">Our Team</h2>
              <p className="team-description">
                The Digital Library is maintained by the Department of Computer Science 
                and CODE-CREW coding society at etech college.
              </p>
              <div className="contact-card">
                <p className="contact-title">Want to contribute or report issues?</p>
                <a 
                  href="mailto:codecrewetech24@gmail.com"
                  className="contact-email"
                >
                  codecrewetech24@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
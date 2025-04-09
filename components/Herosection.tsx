import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/herostyle.css';

const Herosection = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="logo-container">
          <Image 
            src="/Society Logo.png" 
            alt="Society Logo" 
            className="hero-logo"
            width={150}
            height={150}
          />
        </div>
        <h1>Discover. Learn. Grow.</h1>
        <p className="hero-subtitle">Your gateway to knowledge and innovation</p>
        <div className="hero-buttons">
          <Link href="/collection" className="btn btn-primary">
            Browse Collection
          </Link>
          <Link href="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
        <div className="credit">
          <p>Created by CODE CREW - CSE Department</p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

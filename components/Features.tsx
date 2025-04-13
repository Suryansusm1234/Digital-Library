import React from 'react';
import Link from 'next/link';
import '../styles/features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Library Services</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon">📚</div>
            <h3>Digital Books</h3>
            <p>Check all the digital version of the books available in the library.</p>
            <Link href="/dashboard" className="card-link">View books →</Link>
          </div>
          <div className="card">
            <div className="card-icon">💻</div>
            <h3>Previous Exam Questions</h3>
            <p>Access the previous examination questions of the Unit test, Internal and Semster Examination.</p>
            <Link href="/dashboard" className="card-link">Browse resources →</Link>
          </div>
          <div className="card">
            <div className="card-icon">🏢</div>
            <h3>Notes section</h3>
            <p>Access the notes which will guide you on your jonney of learning.</p>
            <Link href="/dashboard" className="card-link">Browse Notes →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth, UserButton } from '@clerk/nextjs';
import '../styles/navstyle.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image 
              src="/etech logo new.png" 
              alt="Etech Logo" 
              width={40} 
              height={40}
              style={{ height: '40px', width: 'auto' }}
            />
            <span>Etech Digital Library</span>
          </div>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link href="/">Home</Link>
            {isSignedIn && <Link href="/dashboard">Dashboard</Link>}
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            
            {isSignedIn ? (
              <div className="user-button-container">
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <Link href="/sign-in" className="sign-in-button">
                Sign In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
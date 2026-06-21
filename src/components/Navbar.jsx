import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="nav-brand">
        <span className="nav-brand-dot"></span>
        Pasupathi
      </a>
      <ul className="nav-links">
        <li><button className="nav-link active">Home</button></li>
        <li><button className="nav-link">Education</button></li>
        <li><button className="nav-link">Skills</button></li>
        <li><button className="nav-link">Projects</button></li>
        <li><button className="nav-link">Achievements</button></li>
        <li><button className="nav-link">Contact</button></li>
      </ul>
    </nav>
  );
}
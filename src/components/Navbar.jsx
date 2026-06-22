import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['home', 'education', 'skills', 'projects', 'achievements', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 100;
      for (let id of links) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="nav-brand">
        <span className="nav-brand-dot"></span>
        Pasupathi
      </a>
      <ul className="nav-links">
        {links.map(link => (
          <li key={link}>
            <button
              className={`nav-link ${activeSection === link ? 'active' : ''}`}
              onClick={() => scrollTo(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
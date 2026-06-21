import React, { useEffect, useState } from 'react';
import './Home.css';
// import photo from '../public/photo.jpg'; // uncomment when you add your photo

const roles = ['Backend Developer', 'Full-Stack Developer', 'Tech Enthusiast'];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="home-section">
      <div className="home-grid">
        <div className="home-content">
          <div className="home-eyebrow">// introduction</div>
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Pasupathi A T</span>
          </h1>

          <div className="typing-wrapper">
            <span>I'm a</span>
            <span className="typing-text">{roles[index]}</span>
            <span className="cursor"></span>
          </div>

          <p className="home-desc">
            Information Technology undergraduate at <strong>Kongu Engineering College</strong>,
            passionate about building scalable web applications, REST APIs, and
            database-driven solutions. I love solving real-world problems through
            clean, efficient code.
          </p>

          <div className="edu-badge">
            🎓 <strong>B.Tech IT</strong> • KEC • 2028
          </div>

          <div className="home-socials">
            <a href="https://www.linkedin.com/in/pasupathi-at/" className="social-link" aria-label="LinkedIn">in</a>
            <a href="https://github.com/pasupathi-13" className="social-link" aria-label="GitHub">🐙</a>
            <a href="https://vercel.com/atpasupathi77-7216s-projects" className="social-link" aria-label="Vercel">▲</a>
            <a href="#" className="social-link" aria-label="Portfolio">🖥️</a>
          </div>

          <div className="home-btns">
            <a href="/resume.pdf" className="btn-primary">📄 Download Resume</a>
            <a href="#projects" className="btn-outline">View Projects →</a>
          </div>
        </div>

        <div className="home-photo-wrap">
          <div className="home-photo">
            {/* <img src={photo} alt="Pasupathi A T" /> */}
            <div className="photo-placeholder">
              <span>📸</span>
              <span>Your Photo</span>
              <span style={{ fontSize: '0.7rem' }}>Add photo.jpg to /public</span>
            </div>
          </div>
          <div className="home-photo-badge">✦ Open to opportunities</div>
        </div>
      </div>
    </section>
  );
}
import React, { useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner reveal" ref={ref}>
          <h2 className="contact-heading">
            Let's Build Something <span>Amazing Together</span>
          </h2>
          <p className="contact-sub">
            I'm actively seeking full-stack development opportunities to create impactful digital solutions.
          </p>

          <div className="contact-cards">
            <a href="mailto:pasupathi@example.com" className="contact-card">
              <div className="contact-card-icon">✉</div>
              <div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">pasupathi@example.com</div>
              </div>
              <span className="contact-card-arrow">→</span>
            </a>
            <a href="https://www.linkedin.com/in/pasupathi-at/" className="contact-card" target="_blank" rel="noreferrer">
              <div className="contact-card-icon">in</div>
              <div>
                <div className="contact-card-label">LinkedIn</div>
                <div className="contact-card-value">/pasupathi-at</div>
              </div>
              <span className="contact-card-arrow">→</span>
            </a>
            <a href="https://github.com/pasupathi-13" className="contact-card" target="_blank" rel="noreferrer">
              <div className="contact-card-icon">🐙</div>
              <div>
                <div className="contact-card-label">GitHub</div>
                <div className="contact-card-value">/pasupathi-13</div>
              </div>
              <span className="contact-card-arrow">→</span>
            </a>
          </div>

          <div className="contact-resume">
            <a href="/resume.pdf" className="btn-resume">📄 Download My Resume</a>
          </div>

          <blockquote className="contact-quote">
            "Great software is not just about writing code—it's about solving real problems with elegant solutions."
          </blockquote>
          <p className="contact-footer">© 2026 Pasupathi A T</p>
        </div>
      </div>
    </section>
  );
}
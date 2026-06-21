import React from 'react';
import './Certificates.css';

const certs = [
  { title: 'Your Certification Name', org: 'Issuing Organization', desc: 'Brief description of what you learned and achieved in this certification program.', year: '2024' },
  { title: 'Another Certification', org: 'Another Platform', desc: 'Brief description of what you learned and achieved in this certification program.', year: '2024' },
];

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <p className="section-label">// always learning</p>
        <h2 className="section-title">Certifications</h2>
        <div className="certs-list">
          {certs.map((cert, i) => (
            <div className="cert-card reveal" key={i}>
              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.org}</p>
                <p className="cert-desc">{cert.desc}</p>
              </div>
              <span className="cert-year">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
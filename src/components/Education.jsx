import React, { useEffect, useRef, useState } from 'react';
import './Education.css';

const education = [
  {
    degree: 'B.Tech Information Technology',
    institution: 'Kongu Engineering College',
    grade: 'CGPA: 8.2 / 10.0',
    year: '2024 – 2028',
    icon: '🎓',
    color: '#2563eb',
    light: '#eff6ff',
    status: 'Ongoing',
  },
  {
    degree: 'Higher Secondary (HSC)',
    institution: 'Shri Ganga Higher Secondary School',
    grade: 'Percentage: 80.6%',
    year: '2024',
    icon: '📚',
    color: '#16a34a',
    light: '#f0fdf4',
    status: 'Completed',
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'Shri Ganga Matriculation School',
    grade: 'Percentage: 83.6%',
    year: '2022',
    icon: '🏫',
    color: '#ea580c',
    light: '#fff7ed',
    status: 'Completed',
  },
];

export default function Education() {
  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((ref, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible(prev => [...prev, i]);
            }, i * 200);
          }
        },
        { threshold: 0.3 }
      );
      if (ref) obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <section id="education">
      <div className="container">
        
        <h2 className="section-title">Education Roadmap</h2>

        <div className="roadmap">
          {/* vertical line */}
          <div className="roadmap-line" />

          {education.map((edu, i) => (
            <div
              key={i}
              ref={el => refs.current[i] = el}
              className={`roadmap-item ${i % 2 === 0 ? 'left' : 'right'} ${visible.includes(i) ? 'visible' : ''}`}
            >
              {/* center dot */}
              <div className="roadmap-dot" style={{ background: edu.color, boxShadow: `0 0 0 4px ${edu.light}, 0 0 0 6px ${edu.color}33` }}>
                <span className="roadmap-dot-icon">{edu.icon}</span>
              </div>

              {/* year label on line */}
              <div className="roadmap-year" style={{ color: edu.color, borderColor: edu.color, background: edu.light }}>
                {edu.year}
              </div>

              {/* card */}
              <div className="roadmap-card" style={{ '--accent': edu.color, '--accent-light': edu.light }}>
                <div className="roadmap-card-top">
                  <span className="roadmap-status" style={{ background: edu.light, color: edu.color, border: `1px solid ${edu.color}44` }}>
                    {edu.status === 'Ongoing' ? '🟢 Ongoing' : '✅ Completed'}
                  </span>
                </div>
                <h3 className="roadmap-degree">{edu.degree}</h3>
                <p className="roadmap-inst">{edu.institution}</p>
                <div className="roadmap-grade">
                  <span>{edu.grade}</span>
                </div>
                <div className="roadmap-bar">
                  <div
                    className="roadmap-bar-fill"
                    style={{
                      background: edu.color,
                      width: visible.includes(i) ? '100%' : '0%',
                      transitionDelay: `${i * 0.2 + 0.4}s`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
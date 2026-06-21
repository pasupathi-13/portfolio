import React, { useEffect, useRef } from 'react';
import './Education.css';

const educationData = [
  {
    date: '2024 - 2028',
    degree: 'B.Tech Information Technology',
    institution: 'Kongu Engineering College',
    grade: 'CGPA: 8.2 / 10.0'
  },
  {
    date: '2024',
    degree: 'Higher Secondary Education (HSC)',
    institution: 'Shri Ganga Higher Secondary School',
    grade: 'Percentage: 80.6%'
  },
  {
    date: '2022',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Shri Ganga Matriculation School',
    grade: 'Percentage: 83.6%'
  }
];

export default function Education() {
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
    <section id="education">
      <div className="container">
        <p className="section-label">// academic background</p>
        <h2 className="section-title">Education</h2>
        <div className="edu-grid reveal" ref={ref}>
          {educationData.map((edu, idx) => (
            <div className="edu-card" key={idx}>
              <div className="edu-date">{edu.date}</div>
              <div className="edu-content">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-inst">{edu.institution}</div>
                <div className="edu-grade">{edu.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
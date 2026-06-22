import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skillsData = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    accent: '#7c3aed', // purple
    rgb: '124, 58, 237'
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'MongoDB', 'PostgreSQL'],
    accent: '#2563eb', // blue
    rgb: '37, 99, 235'
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD'],
    accent: '#16a34a', // green
    rgb: '22, 163, 74'
  },
  {
    title: 'Other',
    icon: '💡',
    skills: ['Figma', 'Jira', 'Postman', 'Linux', 'Agile'],
    accent: '#ea580c', // orange
    rgb: '234, 88, 12'
  }
];

export default function Skills() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observers = cardsRef.current.map((el) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <section id="skills">
      <div className="container">
       
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <div
              key={idx}
              className="skill-category"
              ref={(el) => (cardsRef.current[idx] = el)}
              style={{
                '--accent': cat.accent,
                '--accent-rgb': cat.rgb
              }}
            >
              <div className="skill-category-title">
                <span>{cat.icon}</span> {cat.title}
              </div>
              <div className="skill-items">
                {cat.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
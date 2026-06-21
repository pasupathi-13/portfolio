import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💬',
    items: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Backend & API',
    icon: '⚙️',
    items: ['FastAPI', 'REST APIs', 'Node.js', 'Express.js', 'API Integration', 'JSON Handling']
  },
  {
    title: 'Frontend',
    icon: '🎨',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Web Design']
  },
  {
    title: 'Database & Core CS',
    icon: '🗄️',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL', 'Data Structures & Algorithms', 'OOPs', 'DBMS']
  },
  {
    title: 'Tools & Frameworks',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Software Development Fundamentals']
  }
];

export default function Skills() {
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
    <section id="skills">
      <div className="container">
        <p className="section-label">// tech stack</p>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid reveal" ref={ref}>
          {skillCategories.map((cat, idx) => (
            <div className="skill-category" key={idx}>
              <div className="skill-category-title">
                <span>{cat.icon}</span> {cat.title}
              </div>
              <div className="skill-items">
                {cat.items.map((item, i) => (
                  <span className="skill-tag" key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React, { useEffect, useRef } from 'react';
import './Achievements.css';

const achievements = [
  {
    title: 'Top 3 –   XHorizon Hackathon',
    subtitle: '170+ Teams · LMS + Coding Platform',
    date: 'Mar 2025',
    desc: [
      'Built AI-powered LMS with integrated coding platform and Razorpay payments',
      'Developed role-based dashboards for Admin, Faculty, and Student',
      'Integrated AI code assistant and resume generator using Gemini API'
    ],
    tags: ['React.js', 'Express.js', 'MongoDB', 'GeminiAPI', 'TailwindCSS', 'Razorpay', 'Cloudinary'],
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    icon: '🏆',
    color: '#7c3aed'
  },
  {
    title: 'Runner-Up, ISTE Hackathon',
    subtitle: '2nd place among 50+ teams',
    date: 'Feb 2025',
    desc: [
      'Built a Hackathon Management Platform for end-to-end virtual hackathon management with real-time collaboration via Socket.io'
    ],
    tags: ['MERN Stack', 'TailwindCSS', 'Socket.io'],
    gradient: 'linear-gradient(135deg, #2563eb, #60a5fa)',
    icon: '🥈',
    color: '#2563eb'
  },
  {
    title: 'Multiple Full-Stack Projects',
    subtitle: '7+ projects deployed',
    date: 'Ongoing',
    desc: [
      'Successfully built and deployed multiple dynamic full-stack web applications.',
      'Practicing Data Structures and Algorithms consistently to strengthen analytical skills.',
      'Experienced with complete Git/GitHub workflows including branching, merging, and pull requests.'
    ],
    tags: ['React', 'Node.js', 'Python', 'FastAPI', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #16a34a, #86efac)',
    icon: '🚀',
    color: '#16a34a'
  }
];

export default function Achievements() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observers = cardsRef.current.map((el, idx) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            el.style.transitionDelay = `${idx * 0.08}s`;
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
    <section id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="achievement-card"
              ref={(el) => (cardsRef.current[idx] = el)}
              style={{ '--gradient': item.gradient, '--accent': item.color }}
            >
              <div className="card-glow"></div>
              <div className="card-icon">{item.icon}</div>
              <div className="card-date">{item.date}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.subtitle}</p>
              <ul className="card-desc">
                {item.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="card-tags">
                {item.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
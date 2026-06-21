import React, { useEffect, useRef } from 'react';
import './Achievements.css';

const achievements = [
  {
    title: 'Top 3 – XHorizon Hackathon',
    subtitle: '170+ Teams · LMS + Coding Platform',
    date: 'Mar 2025',
    desc: [
      'Built AI-powered LMS with integrated coding platform and Razorpay payments',
      'Developed role-based dashboards for Admin, Faculty, and Student',
      'Integrated AI code assistant and resume generator using Gemini API'
    ],
    tags: ['React.js', 'Express.js', 'MongoDB', 'GeminiAPI', 'TailwindCSS', 'Razorpay', 'Cloudinary']
  },
  {
    title: 'Runner-Up, ISTE Hackathon',
    subtitle: '2nd place among 50+ teams',
    date: 'Feb 2025',
    desc: [
      'Built a Hackathon Management Platform for end-to-end virtual hackathon management with real-time collaboration via Socket.io'
    ],
    tags: ['MERN Stack', 'TailwindCSS', 'Socket.io']
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
    tags: ['React', 'Node.js', 'Python', 'FastAPI', 'MongoDB']
  }
];

export default function Achievements() {
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
    <section id="achievements">
      <div className="container">
        <p className="section-label">// experience & milestones</p>
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid reveal" ref={ref}>
          {achievements.map((item, idx) => (
            <div className="achievement-card" key={idx}>
              <div className="achievement-header">
                <div>
                  <div className="achievement-title">{item.title}</div>
                  <div className="achievement-subtitle">{item.subtitle}</div>
                </div>
                <div className="achievement-date">{item.date}</div>
              </div>
              <ul className="achievement-desc">
                {item.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="achievement-tags">
                {item.tags.map((tag, i) => (
                  <span className="achievement-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
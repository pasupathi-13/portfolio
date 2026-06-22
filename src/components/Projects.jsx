import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const mainProjects = [
  {
    name: 'MINI-PROJECT',
    desc: 'A full-stack mini project built with modern web technologies featuring complete frontend and backend integration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Full-Stack'],
    demo: '#',
    code: 'https://github.com/pasupathi-13/MINI-PROJECT',
    preview: '🚀',
    previewBg: '#1e3a5f',
  },
  {
    name: 'PicShift',
    desc: 'Full-stack image processing web app for real-time image conversion, optimization and seamless file handling.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    code: 'https://github.com/pasupathi-13/picshift',
    preview: '🖼️',
    previewBg: '#1a1a2e',
  },
  {
    name: 'CalcFlow',
    desc: 'Feature-rich calculator app with a smooth, clean UI and support for complex arithmetic expressions.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    code: 'https://github.com/pasupathi-13/calcflow',
    preview: '🧮',
    previewBg: '#0f2027',
  },
];

const moreProjects = [
  {
    name: 'CPU Scheduling Visualizer',
    desc: 'Interactive visualizer for FCFS, SJF and Round Robin algorithms with live animated Gantt charts.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
    demo: '#',
    code: 'https://github.com/pasupathi-13/Cpu-Sheduling',
    preview: '🖥️',
    previewBg: '#0d1117',
  },
  {
    name: 'Tamil Calendar',
    desc: 'Traditional Tamil calendar showing panchangam details, festivals, and auspicious timings.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    demo: '#',
    code: 'https://github.com/pasupathi-13/tamilcalendar',
    preview: '📅',
    previewBg: '#1a0a2e',
  },
  {
    name: "LCM Euclid's Algorithm",
    desc: "Step-by-step visual demo of Euclid's algorithm for computing GCD and LCM with animated breakdowns.",
    tags: ['HTML', 'CSS', 'JavaScript', 'Math'],
    demo: '#',
    code: 'https://github.com/pasupathi-13/Lcm-Euclids-Algorithm',
    preview: '📐',
    previewBg: '#0a1628',
  },
];

function ProjectCard({ project, index, visible }) {
  return (
    <div
      className={`project-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      {/* Featured badge */}
      <div className="featured-badge">Featured</div>

      {/* Screenshot preview area */}
      <div className="project-preview" style={{ background: project.previewBg }}>
        {/* Fake browser bar */}
        <div className="preview-bar">
          <div className="preview-dots">
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#ffbd2e' }} />
            <span style={{ background: '#28c840' }} />
          </div>
          <div className="preview-url">localhost:3000</div>
        </div>
        {/* Content area */}
        <div className="preview-body">
          <div className="preview-emoji">{project.preview}</div>
          <div className="preview-lines">
            <div className="preview-line long" />
            <div className="preview-line medium" />
            <div className="preview-line short" />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="project-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>
        <div className="project-btns">
          <a href={project.demo} className="btn-view" target="_blank" rel="noreferrer">
            View More
          </a>
          <a href={project.code} className="btn-github" target="_blank" rel="noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const gridRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          mainProjects.forEach((_, i) => {
            setTimeout(() => setVisibleCards(prev => [...new Set([...prev, i])]), i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    if (!showAll) {
      setShowAll(true);
      moreProjects.forEach((_, i) => {
        setTimeout(() => {
          setVisibleCards(prev => [...new Set([...prev, mainProjects.length + i])]);
        }, i * 120);
      });
    } else {
      setShowAll(false);
    }
  };

  const displayed = showAll ? [...mainProjects, ...moreProjects] : mainProjects;

  return (
    <section id="projects">
      <div className="container">
      
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid" ref={gridRef}>
          {displayed.map((proj, i) => (
            <ProjectCard
              key={proj.name}
              project={proj}
              index={i}
              visible={visibleCards.includes(i)}
            />
          ))}
        </div>

        <div className="projects-toggle">
          <button className="btn-toggle" onClick={handleToggle}>
            {showAll ? '↑ Show Less' : '↓ Explore More'}
          </button>
        </div>

        <div className="projects-github-cta">
          <a href="https://github.com/pasupathi-13" target="_blank" rel="noreferrer" className="github-cta-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            View all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
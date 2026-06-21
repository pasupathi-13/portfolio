import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

// Main projects from your GitHub (first 3)
const mainProjects = [
  {
    name: 'Job Board Application',
    desc: 'A full-stack recruitment platform with job posting, application tracking, and candidate management for both employers and job seekers.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    demo: 'https://job-board-app.vercel.app', // Replace with actual live URL
    code: 'https://github.com/pasupathi-13/job-board'
  },
  {
    name: 'Event Management Platform',
    desc: 'Complete event management solution with ticketing, attendee tracking, and role-based dashboards for organizers and participants.',
    tags: ['MERN Stack', 'TailwindCSS', 'Razorpay', 'Socket.io'],
    demo: 'https://event-manager.vercel.app', // Replace with actual live URL
    code: 'https://github.com/pasupathi-13/event-platform'
  },
  {
    name: 'Cheaprr – Price Comparison',
    desc: 'Real-time product price comparison platform for Flipkart & Amazon with intuitive search and side-by-side price comparison.',
    tags: ['FastAPI', 'React', 'MongoDB', 'REST API'],
    demo: 'https://cheaprr.vercel.app', // Replace with actual live URL
    code: 'https://github.com/pasupathi-13/cheaprr'
  }
];

// Additional projects from your GitHub (shown on "View More")
const moreProjects = [
  {
    name: 'Picshift – Image Processor',
    desc: 'Full-stack image processing web app for real-time conversion, optimization, and seamless file handling.',
    tags: ['React', 'Node.js', 'Express', 'Cloudinary'],
    demo: 'https://picshift.vercel.app', // Replace with actual live URL
    code: 'https://github.com/pasupathi-13/picshift'
  },
  {
    name: 'KuttyShare – Code Editor',
    desc: 'Real-time collaborative code editor with live code updates, sharing functionality, and unique session links.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demo: 'https://kuttyshare.vercel.app', // Replace with actual live URL
    code: 'https://github.com/pasupathi-13/kuttyshare'
  }
  // Add any other projects you have on GitHub here
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
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

  const displayedProjects = showAll ? [...mainProjects, ...moreProjects] : mainProjects;

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">// featured work</p>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid reveal" ref={ref}>
          {displayedProjects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-num">0{idx + 1}</div>
              <div className="project-icon">🚀</div>
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.desc}</div>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="project-btns">
                <a href={project.demo} className="btn-demo" target="_blank" rel="noreferrer">Live Demo</a>
                <a href={project.code} className="btn-code" target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          ))}
        </div>
        {moreProjects.length > 0 && (
          <div className="projects-toggle">
            <button className="btn-toggle" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'View More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
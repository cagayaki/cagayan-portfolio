import React from 'react';

// Add an emoji or icon for each project for distinction
const projectIcons = [
  "🗓️", // Weekly Schedule
  "📝", // TaskFlow Project
  "📚", // Library Management
  "🏎️", // KOTSELL Project
  "🌦️", // FORECAST Project
];

// Metadata details shared across projects
const sharedDetails = {
  term: 'Prelim',
  courseCode: 'CCS112',
  activityType: 'Group Activity',
  submittedTo: 'Sir Cartagenas',
  date: 'November 17, 2025'
};

const projects = [
  {
    id: 1,
    iconIdx: 0,
    title: 'Weekly Schedule website',
    description: 'Displays Section 1CS-A\'s weekly schedule interactively and responsively.',
    link: 'https://cagayaki.github.io/Cagayanschedule.github.io-/',
  },
  {
    id: 2,
    iconIdx: 1,
    title: 'TaskFlow Project',
    description: 'Task Manager built for CCS112, streamlining group tasks and progress tracking.',
    link: 'https://github.com/cntaxc/ReactGroupProject_TaskFlow',
  },
  {
    id: 3,
    iconIdx: 2,
    title: 'Library Management System',
    description: 'A simple web-based system for managing library books and transactions.',
    link: 'https://csselrahc.github.io/appdev-prelim-lab/src/index.html',
  },
  {
    id: 4,
    iconIdx: 3,
    title: 'KOTSELL PROJECT',
    description: 'Ecommerce project featuring product listings, cart, and checkout process.',
    link: 'https://github.com/CSselrahC/appdev-midterm-ecommerce',
  },
  {
    id: 5,
    iconIdx: 4,
    title: 'FORECAST Project',
    description: 'Weather forecast app currently in development; details to follow soon.',
    link: '',
  },
];

function MyProjects() {
  return (
    <section id="projects" className="container my-5" style={{ fontFamily: '"Lato", sans-serif' }}>
      <h2 className="mb-4 text-center fw-bold">My Projects</h2>
      <div className="row g-4 justify-content-center">
        {projects.map((project, idx) => (
          <div key={project.id} className="col-12 col-sm-6 col-lg-4">
            {(project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div
                  className="card h-100 border-0 project-card shadow"
                  style={{
                    border: '2px solid #000',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(33, 30, 30, 0.09)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.025)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(33,30,30,0.17)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(33,30,30,0.09)'; }}
                >
                  {/* Gradient header with icon */}
                  <div
                    className="card-header text-white d-flex align-items-center"
                    style={{
                      background: 'linear-gradient(90deg, #212529 60%, #219ebc 100%)',
                      padding: '1rem 1.25rem',
                      borderBottom: '1px solid #000'
                    }}
                  >
                    <span style={{ fontSize: '2rem', marginRight: '1rem' }}>
                      {projectIcons[project.iconIdx]}
                    </span>
                    <h5 className="card-title mb-0" style={{ fontWeight: 700 }}>{project.title}</h5>
                  </div>
                  <div className="card-body py-3 px-4 d-flex flex-column">
                    <p className="text-muted mb-3">{project.description}</p>
                    <div className="project-info bg-light p-3 rounded shadow-sm mb-3" style={{ fontSize: '0.96rem', border: '1px solid #222' }}>
                      <div><span role="img" aria-label="term">📅</span> <strong>Term:</strong> {sharedDetails.term}</div>
                      <div><span role="img" aria-label="course code">🔢</span> <strong>Course Code:</strong> {sharedDetails.courseCode}</div>
                      <div><span role="img" aria-label="activity">👥</span> <strong>Type of Activity:</strong> {sharedDetails.activityType}</div>
                      <div><span role="img" aria-label="teacher">👨‍🏫</span> <strong>Submitted to:</strong> {sharedDetails.submittedTo}</div>
                      <div><span role="img" aria-label="date">🗓️</span> <strong>Date:</strong> {sharedDetails.date}</div>
                    </div>
                    <span className="btn btn-outline-primary mt-auto align-self-start">
                      View Project
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              <div
                className="card h-100 border-0 project-card shadow"
                style={{
                  border: '2px solid #000',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(33,30,30,0.09)',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.025)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(33,30,30,0.17)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(33,30,30,0.09)'; }}
              >
                {/* Gradient header with icon */}
                <div
                  className="card-header text-white d-flex align-items-center"
                  style={{
                    background: 'linear-gradient(90deg, #212529 60%, #219ebc 100%)',
                    padding: '1rem 1.25rem',
                    borderBottom: '1px solid #000'
                  }}
                >
                  <span style={{ fontSize: '2rem', marginRight: '1rem' }}>
                    {projectIcons[project.iconIdx]}
                  </span>
                  <h5 className="card-title mb-0" style={{ fontWeight: 700 }}>{project.title}</h5>
                </div>
                <div className="card-body py-3 px-4 d-flex flex-column">
                  <p className="text-muted mb-3">{project.description}</p>
                  <div className="project-info bg-light p-3 rounded shadow-sm mb-3" style={{ fontSize: '0.96rem', border: '1px solid #222' }}>
                      <div><span role="img" aria-label="term">📅</span> <strong>Term:</strong> {sharedDetails.term}</div>
                      <div><span role="img" aria-label="course code">🔢</span> <strong>Course Code:</strong> {sharedDetails.courseCode}</div>
                      <div><span role="img" aria-label="activity">👥</span> <strong>Type of Activity:</strong> {sharedDetails.activityType}</div>
                      <div><span role="img" aria-label="teacher">👨‍🏫</span> <strong>Submitted to:</strong> {sharedDetails.submittedTo}</div>
                      <div><span role="img" aria-label="date">🗓️</span> <strong>Date:</strong> {sharedDetails.date}</div>
                  </div>
                  <span className="btn btn-outline-secondary mt-auto align-self-start disabled">
                    No Link Available
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;

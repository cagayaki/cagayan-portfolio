import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Responsive E-commerce Website',
    description: 'A fully responsive e-commerce platform with shopping cart, product search, and user authentication.',
    link: 'https://your-ecommerce-project-url.com',
  },
  {
    id: 2,
    title: 'Responsive Portfolio Website',
    description: 'A modern, responsive portfolio to showcase skills, projects, and professional information.',
    link: 'https://your-portfolio-url.com',
  },
  {
    id: 3,
    title: 'Website Project',
    description: 'A professional website project built with React and Bootstrap for a local business.',
    link: 'https://your-website-project-url.com',
  },
  {
    id: 4,
    title: 'Other Projects',
    description: 'Various smaller projects including utilities, APIs, and experimental features.',
    link: 'https://your-other-projects-url.com',
  },
];

function MyProjects() {
  return (
    <section id="projects" className="container my-5" style={{ fontFamily: '"Lato", sans-serif' }}>
      <h2 className="mb-4 text-center fw-bold">My Projects</h2>
      <div className="row g-4 justify-content-center">
        {projects.map(({ id, title, description, link }) => (
          <div key={id} className="col-12 col-sm-6 col-lg-4">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none"
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary">{title}</h5>
                  <p className="card-text text-muted flex-grow-1">{description}</p>
                  <button className="btn btn-outline-primary mt-auto align-self-start">
                    View Project
                  </button>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;

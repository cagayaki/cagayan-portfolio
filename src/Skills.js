import React from 'react';

const skillsList = [
  { id: 1, name: 'React & React Router', description: 'Building dynamic web with Groupings' },
  { id: 2, name: 'JavaScript', description: 'Building A Responsive Web' },
  { id: 3, name: 'HTML', description: ' responsive design' },
  { id: 4, name: 'Laravel', description: 'Responsive UI design with Bootstrap framework' },
 
];

function Skills() {
  // For clickable effect, add an alert on click (can be customized later)
  const handleClick = (skill) => {
    alert(`Skill selected: ${skill.name}\nDetails: ${skill.description}`);
  };

  return (
    <section id="skills" className="container my-5" style={{ fontFamily: '"Lato", sans-serif' }}>
      <h2 className="mb-4 text-center fw-bold">My Skills</h2>
      <div className="row g-4 justify-content-center">
        {skillsList.map((skill) => (
          <div key={skill.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div 
              className="card h-100 shadow-sm cursor-pointer"
              onClick={() => handleClick(skill)}
              style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') handleClick(skill)}}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <h5 className="card-title">{skill.name}</h5>
                <p className="card-text text-muted">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

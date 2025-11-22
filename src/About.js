import React from 'react';

const About = () => {
  return (
    <section id="about" className="container my-5" style={{ fontFamily: '"Lato", sans-serif' }}>
      <h2 className="mb-4 text-center fw-bold">About Me</h2>
      <div className="row align-items-center justify-content-center">
        {/* Image on the left */}
        <div className="col-md-5 d-flex justify-content-center order-md-1 mb-4 mb-md-0">
          <img
            src="/pikture ko.jpg"  // Replace with your actual image path or URL
            alt="Kurt John B"
            className="rounded-circle img-fluid"
            style={{
              maxWidth: '250px',
              maxHeight: '250px',
              objectFit: 'cover',
              border: '4px solid #219ebc',
              boxShadow: '0 6px 22px rgba(33,30,30,0.10)'
            }}
          />
        </div>
        {/* Boxed text on the right */}
        <div className="col-md-7 order-md-2">
          <div
            className="card border-0 shadow"
            style={{
              border: '2px solid #003049',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(33,30,30,0.12)',
              background: '#fff',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div
              className="card-header text-white"
              style={{
                background: 'linear-gradient(90deg, #003049 70%, #219ebc 100%)',
                padding: '1.2rem 1.8rem',
                borderBottom: '1px solid #003049'
              }}
            >
              <h3 className="fw-bold mb-0" style={{ fontSize: '1.2rem' }}>About Me</h3>
            </div>
            <div className="card-body p-4" style={{ fontSize: '1.07rem', lineHeight: '1.7' }}>
              <p>
                Hello! I am Kurt John B. Cagayan, currently a 3rd year Computer Science student at the University of Cabuyao.
                I am passionate about software development, especially in building modern and responsive web applications.
                I enjoy learning new technologies and continuously improving my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';

const About = () => {
  return (
    <section id="about" className="container my-5" style={{ fontFamily: '"Lato", sans-serif' }}>
      <h2 className="mb-4 text-center fw-bold">About Me</h2>
      <div className="row align-items-center">
        {/* Image on the left */}
        <div className="col-md-6 d-flex justify-content-center order-md-1">
          <img
            src="/pikture ko.jpg"  // Replace with your actual image path or URL
            alt="Kurt John B"
            className="rounded-circle img-fluid"
            style={{ maxWidth: '250px', maxHeight: '250px', objectFit: 'cover' }}
          />
        </div>

        {/* Text content on the right */}
        <div className="col-md-6 order-md-2">
          <p>
            Hello! I am Kurt John B. Cagayan, currently a 3rd year Computer Science student at the University of Cabuyao.
            I am passionate about software development, especially in building modern and responsive web applications.
            I enjoy learning new technologies and continuously improving my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

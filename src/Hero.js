import React from 'react';

function Hero() {
  return (
    <section className="d-flex align-items-center justify-content-center vh-100 bg-light" style={{ fontFamily: '"Lato", sans-serif' }}>
      <div className="container text-center px-4">
        <h1 className="display-4 fw-bold mb-3">Kurt John B Cagayan</h1>
        <p className="lead mb-4">| 3rd Year Computer Science Student at University of Cabuyao</p>
        <a href="#about" className="btn btn-primary btn-lg">Learn More</a>
      </div>
    </section>
  );
}

export default Hero;

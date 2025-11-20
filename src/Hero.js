import React from 'react';

function Hero() {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
      style={{ fontFamily: '"Lato", sans-serif' }}
    >
      <div className="container text-center px-4">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-4 fw-bold mb-3">Kurt John B Cagayan</h1>
            <p className="lead mb-4">
              | 3rd Year Computer Science Student at University of Cabuyao
            </p>
           
          </div>

          {/* Image Content */}
          <div className="col-md-6">
            <img
              src="/grads
.jpg"  /* Replace with actual image path or URL */
              alt="Kurt John B"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

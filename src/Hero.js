import React from 'react';

// Make sure Font Awesome is included in your public/index.html like this:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />

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
          <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center justify-content-center">
            <h1 className="display-4 fw-bold mb-3">Kurt John B Cagayan</h1>
            <p className="lead mb-4">
              | 3rd Year Computer Science Student at University of Cabuyao
            </p>
            <div className="d-flex gap-3 justify-content-center mt-3">
              {/* GitHub */}
              <a
                href="https://github.com/your-github" // Replace with your actual GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ flex: 1 }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    width: 60,
                    height: 60,
                    background: '#222',
                    borderRadius: 16,
                    boxShadow: '0 4px 16px rgba(33,30,30,0.13)',
                    transition: 'transform 0.13s, box-shadow 0.13s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 24px #222'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(33,30,30,0.13)'; }}
                >
                  <i className="fab fa-github" style={{ color: '#fff', fontSize: '2rem' }}></i>
                </div>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/your-facebook" // Replace with your actual Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ flex: 1 }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    width: 60,
                    height: 60,
                    background: '#1565c0',
                    borderRadius: 16,
                    boxShadow: '0 4px 16px rgba(33,30,30,0.13)',
                    transition: 'transform 0.13s, box-shadow 0.13s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 24px #1565c0'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(33,30,30,0.13)'; }}
                >
                  <i className="fab fa-facebook-f" style={{ color: '#fff', fontSize: '2rem' }}></i>
                </div>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/your-linkedin" // Replace with your actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ flex: 1 }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    width: 60,
                    height: 60,
                    background: '#0077b5',
                    borderRadius: 16,
                    boxShadow: '0 4px 16px rgba(33,30,30,0.13)',
                    transition: 'transform 0.13s, box-shadow 0.13s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 24px #0077b5'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(33,30,30,0.13)'; }}
                >
                  <i className="fab fa-linkedin-in" style={{ color: '#fff', fontSize: '2rem' }}></i>
                </div>
              </a>
            </div>
          </div>
          {/* Image Content */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/grads.jpg"  /* Replace with actual image path or URL */
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

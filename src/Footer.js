import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <h5 className="mb-3">Connect with me</h5>
        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://github.com/cagayaki" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-4"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i> {/* Optional: use icons */}
            GitHub
          </a>
          <a
            href="https://www.facebook.com/cagayaki.Kj#" // Replace with your Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-4"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i> {/* Optional: use icons */}
            Facebook
          </a>
        </div>
        <p className="mt-3">&copy; {new Date().getFullYear()} Cagayan Kurt John B.. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

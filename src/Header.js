import React from 'react';

function Header({ scrollToSection }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{ fontFamily: '"Lato", sans-serif' }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            🐳 My Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCentered"
            aria-controls="navbarCentered"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarCentered">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <a href="#hero" className="nav-link" onClick={e => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
              </li>
              <li className="nav-item px-3">
                <a href="#about" className="nav-link" onClick={e => { e.preventDefault(); scrollToSection('about'); }}>About</a>
              </li>
              <li className="nav-item px-3">
                <a href="#skills" className="nav-link" onClick={e => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

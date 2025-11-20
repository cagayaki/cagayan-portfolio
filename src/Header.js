import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{ fontFamily: '"Lato", sans-serif' }}>
        <div className="container-fluid">
          {/* Brand/logo on the left */}
          <Link className="navbar-brand fw-bold" to="/">
            🐳 My Portfolio
          </Link>
          
          {/* Toggler for mobile view */}
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

          {/* Centered links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarCentered">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/personal">Personal Info</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
